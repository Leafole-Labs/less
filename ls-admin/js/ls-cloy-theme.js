/**
 * LESS 26.2 — Cloy: admin theme runtime.
 *
 * Applies the stored preference instantly, persists quick switches through
 * the ls_cloy_set_theme AJAX action and keeps the admin-bar label in sync.
 * No dependencies.
 */
(function () {
	'use strict';

	var STORAGE_KEY = 'lsCloyTheme';
	var VALID = { light: true, dark: true, auto: true };

	function getSettings() {
		return window.LSCloyTheme || {};
	}

	function readStored() {
		try {
			var value = window.localStorage ? window.localStorage.getItem(STORAGE_KEY) : null;
			if (value && VALID[value]) {
				return value;
			}
		} catch (error) {
			/* Storage unavailable; fall through to server value. */
		}
		var settings = getSettings();
		return settings.theme && VALID[settings.theme] ? settings.theme : 'auto';
	}

	function applyTheme(theme) {
		if (!VALID[theme]) {
			theme = 'auto';
		}
		document.documentElement.setAttribute('data-ls-theme', theme);
		try {
			if (window.localStorage) {
				window.localStorage.setItem(STORAGE_KEY, theme);
			}
		} catch (error) {
			/* Ignore private-mode storage failures. */
		}
		document.body.classList.remove('ls-theme-light', 'ls-theme-dark', 'ls-theme-auto');
		document.body.classList.add('ls-theme-' + theme);
		syncAdminBarNode(theme);
	}

	function resolvedLabel(theme) {
		var settings = getSettings();
		var labels = settings.labels || {};
		if (theme === 'auto' && window.matchMedia) {
			var label = window.matchMedia('(prefers-color-scheme: dark)').matches
				? (labels.dark || 'Dark')
				: (labels.light || 'Light');
			return (labels.auto || 'Auto') + ' (' + label + ')';
		}
		return labels[theme] || theme;
	}

	function syncAdminBarNode(theme) {
		var node = document.querySelector('#wp-admin-bar-ls-cloy-theme > .ab-item');
		if (!node) {
			return;
		}
		// Keep any leading icon markup intact; update only the text tail.
		var prefix = node.getAttribute('data-ls-cloy-prefix');
		if (prefix === null) {
			prefix = node.textContent.replace(/Theme:\s*.*$/, 'Theme: ');
			node.setAttribute('data-ls-cloy-prefix', prefix);
		}
		node.textContent = prefix + resolvedLabel(theme);
	}

	function nextTheme(theme) {
		if (theme === 'light') {
			return 'dark';
		}
		if (theme === 'dark') {
			return 'auto';
		}
		return 'light';
	}

	function persistTheme(theme) {
		var settings = getSettings();
		if (!settings.ajaxUrl || !settings.nonce) {
			return;
		}
		var body = 'action=ls_cloy_set_theme&theme=' + encodeURIComponent(theme) +
			'&nonce=' + encodeURIComponent(settings.nonce);
		if (window.fetch) {
			window.fetch(settings.ajaxUrl, {
				method: 'POST',
				credentials: 'same-origin',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
				body: body
			}).catch(function () { /* Preference already applied locally. */ });
			return;
		}
		var xhr = new XMLHttpRequest();
		xhr.open('POST', settings.ajaxUrl, true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		try {
			xhr.send(body);
		} catch (error) {
			/* Preference already applied locally. */
		}
	}

	function onReady() {
		// Align the DOM with the freshest known preference (paint script ran earlier).
		applyTheme(readStored());

		// OS changes only need a label refresh; the stylesheet resolves "auto" itself.
		if (window.matchMedia) {
			var query = window.matchMedia('(prefers-color-scheme: dark)');
			var onChange = function () {
				syncAdminBarNode(readStored());
			};
			if (query.addEventListener) {
				query.addEventListener('change', onChange);
			} else if (query.addListener) {
				query.addListener(onChange);
			}
		}

		var node = document.querySelector('#wp-admin-bar-ls-cloy-theme > .ab-item');
		if (node) {
			node.addEventListener('click', function (event) {
				event.preventDefault();
				var theme = nextTheme(readStored());
				applyTheme(theme);
				persistTheme(theme);
			});
		}

		// Keep the profile radio group in sync when it exists on the page.
		var radios = document.querySelectorAll('input[name="ls_cloy_admin_theme"]');
		if (radios.length) {
			var current = readStored();
			for (var i = 0; i < radios.length; i++) {
				if (radios[i].value === current) {
					radios[i].checked = true;
				}
				(function (radio) {
					radio.addEventListener('change', function () {
						if (radio.checked) {
							applyTheme(radio.value);
							persistTheme(radio.value);
						}
					});
				})(radios[i]);
			}
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', onReady);
	} else {
		onReady();
	}
})();
