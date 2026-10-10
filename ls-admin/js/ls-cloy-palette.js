/**
 * LESS 26.2 — Cloy: command palette (Ctrl+K / Cmd+K).
 *
 * Opens a centered modal listing real admin routes (already filtered by
 * capability on the server). No dependencies.
 */
(function () {
	'use strict';

	var SHORTCUT_HINT = 'Ctrl+K';

	function getData() {
		return window.LSCloyPalette || {};
	}

	function isTypingTarget(target) {
		if (!target || target === document.body || target === document.documentElement) {
			return false;
		}
		var tag = target.tagName ? target.tagName.toLowerCase() : '';
		if (tag === 'input' || tag === 'textarea' || tag === 'select') {
			return true;
		}
		if (target.isContentEditable) {
			return true;
		}
		if (target.closest) {
			// Never steal keys from editors, pickers and existing dialogs.
			if (target.closest('[contenteditable="true"], .CodeMirror, .block-editor, .media-modal, .mce-container, [role="dialog"]')) {
				return true;
			}
		}
		return false;
	}

	function normalize(text) {
		return (text || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	}

	function matches(command, query) {
		if (!query) {
			return true;
		}
		var haystack = normalize(command.title + ' ' + (command.keywords || '') + ' ' + (command.group || ''));
		var words = normalize(query).split(/\s+/);
		for (var i = 0; i < words.length; i++) {
			if (words[i] && haystack.indexOf(words[i]) === -1) {
				return false;
			}
		}
		return true;
	}

	/**
	 * Whether Gutenberg's native command palette owns mod+k on this screen.
	 *
	 * The block editor (post/site/widgets editors) registers its own
	 * primary+k shortcut through the core/commands store. Opening the LESS
	 * modal on top of it would produce two palettes, so on those screens
	 * the LESS commands are registered into the native palette instead
	 * (see registerNativeCommands) and the modal stays closed.
	 */
	function hasNativePalette() {
		if (!document.body || !document.body.classList.contains('block-editor-page')) {
			return false;
		}
		return !!(window.wp && window.wp.commands && window.wp.data);
	}

	function openNativePalette() {
		try {
			window.wp.data.dispatch('core/commands').open();
			return true;
		} catch (error) {
			return false;
		}
	}

	var nativeRegistered = false;

	function registerNativeCommands(commands) {
		if (nativeRegistered || !hasNativePalette()) {
			return nativeRegistered;
		}
		try {
			var dispatch = window.wp.data.dispatch('core/commands');
			for (var i = 0; i < commands.length; i++) {
				(function (command) {
					dispatch.registerCommand({
						name: 'ls-cloy/' + command.id,
						label: command.title,
						searchLabel: command.title + ' ' + (command.keywords || '') + ' ' + (command.group || ''),
						callback: function (args) {
							if (args && args.close) {
								args.close();
							}
							window.location.href = command.url;
						}
					});
				})(commands[i]);
			}
			nativeRegistered = true;
		} catch (error) {
			nativeRegistered = false;
		}
		return nativeRegistered;
	}

	function createShell(texts) {
		var overlay = document.createElement('div');
		overlay.className = 'ls-cloy-palette-overlay';
		overlay.hidden = true;

		var dialog = document.createElement('div');
		dialog.className = 'ls-cloy-palette';
		dialog.setAttribute('role', 'dialog');
		dialog.setAttribute('aria-modal', 'true');
		dialog.setAttribute('aria-label', texts.title || 'Command palette');

		var search = document.createElement('div');
		search.className = 'ls-cloy-palette-search';

		var icon = document.createElement('span');
		icon.className = 'dashicons dashicons-search';
		icon.setAttribute('aria-hidden', 'true');

		var input = document.createElement('input');
		input.type = 'search';
		input.setAttribute('aria-label', texts.placeholder || 'Type a command');
		input.placeholder = texts.placeholder || 'Type a command…';
		input.autocomplete = 'off';
		input.spellcheck = false;

		var kbd = document.createElement('kbd');
		kbd.textContent = 'esc';

		search.appendChild(icon);
		search.appendChild(input);
		search.appendChild(kbd);

		var list = document.createElement('ul');
		list.className = 'ls-cloy-palette-list';
		list.setAttribute('role', 'listbox');
		list.setAttribute('aria-label', texts.title || 'Command palette');

		var live = document.createElement('div');
		live.className = 'ls-cloy-sr-only';
		live.setAttribute('aria-live', 'polite');

		var footer = document.createElement('div');
		footer.className = 'ls-cloy-palette-footer';
		footer.textContent = texts.hint || '';

		dialog.appendChild(search);
		dialog.appendChild(list);
		dialog.appendChild(footer);
		overlay.appendChild(dialog);
		overlay.appendChild(live);
		document.body.appendChild(overlay);

		return { overlay: overlay, input: input, list: list, live: live };
	}

	function palette() {
		var data = getData();
		var texts = data.texts || {};
		var commands = Array.isArray(data.commands) ? data.commands : [];
		var shell = createShell(texts);
		var overlay = shell.overlay;
		var input = shell.input;
		var list = shell.list;
		var live = shell.live;
		var open = false;
		var activeIndex = 0;
		var visible = [];

		function render() {
			var query = input.value;
			visible = [];
			for (var i = 0; i < commands.length; i++) {
				if (matches(commands[i], query)) {
					visible.push(commands[i]);
				}
			}
			if (activeIndex >= visible.length) {
				activeIndex = Math.max(0, visible.length - 1);
			}
			list.innerHTML = '';
			var lastGroup = null;
			for (var j = 0; j < visible.length; j++) {
				(function (command, index) {
					if (command.group !== lastGroup) {
						lastGroup = command.group;
						var group = document.createElement('li');
						group.className = 'ls-cloy-palette-group';
						group.setAttribute('aria-hidden', 'true');
						group.textContent = command.group || '';
						list.appendChild(group);
					}
					var item = document.createElement('li');
					item.setAttribute('role', 'option');
					item.setAttribute('id', 'ls-cloy-command-' + index);
					var button = document.createElement('button');
					button.type = 'button';
					button.className = 'ls-cloy-palette-item' + (index === activeIndex ? ' is-selected' : '');
					if (index === activeIndex) {
						button.setAttribute('aria-selected', 'true');
					}
					var itemIcon = document.createElement('span');
					itemIcon.className = 'dashicons dashicons-arrow-right-alt';
					itemIcon.setAttribute('aria-hidden', 'true');
					var label = document.createElement('span');
					label.textContent = command.title;
					button.appendChild(itemIcon);
					button.appendChild(label);
					if (command.hint) {
						var hint = document.createElement('span');
						hint.className = 'ls-cloy-palette-item-hint';
						hint.textContent = command.hint;
						button.appendChild(hint);
					}
					button.addEventListener('click', function () {
						run(command);
					});
					button.addEventListener('mousemove', function () {
						if (activeIndex !== index) {
							activeIndex = index;
							paintSelection();
						}
					});
					item.appendChild(button);
					list.appendChild(item);
				})(visible[j], j);
			}
			if (!visible.length) {
				var empty = document.createElement('li');
				empty.className = 'ls-cloy-palette-empty';
				empty.textContent = texts.empty || 'No matching commands.';
				list.appendChild(empty);
			}
			live.textContent = visible.length + ' commands';
			paintSelection();
		}

		function paintSelection() {
			var buttons = list.querySelectorAll('.ls-cloy-palette-item');
			for (var i = 0; i < buttons.length; i++) {
				var selected = (i === activeIndex);
				if (selected) {
					buttons[i].classList.add('is-selected');
					buttons[i].setAttribute('aria-selected', 'true');
					if (buttons[i].scrollIntoView) {
						buttons[i].scrollIntoView({ block: 'nearest' });
					}
				} else {
					buttons[i].classList.remove('is-selected');
					buttons[i].removeAttribute('aria-selected');
				}
			}
			input.setAttribute('aria-activedescendant', visible.length ? 'ls-cloy-command-' + activeIndex : '');
		}

		function run(command) {
			if (!command || !command.url) {
				return;
			}
			close();
			window.location.href = command.url;
		}

		function openPalette() {
			if (open || !commands.length) {
				return;
			}
			open = true;
			overlay.hidden = false;
			input.value = '';
			activeIndex = 0;
			render();
			input.focus();
		}

		function close() {
			if (!open) {
				return;
			}
			open = false;
			overlay.hidden = true;
			if (document.activeElement && overlay.contains(document.activeElement)) {
				document.activeElement.blur();
			}
		}

		function isOpen() {
			return open;
		}

		input.addEventListener('input', function () {
			activeIndex = 0;
			render();
		});

		input.addEventListener('keydown', function (event) {
			if (event.key === 'ArrowDown') {
				event.preventDefault();
				if (visible.length) {
					activeIndex = (activeIndex + 1) % visible.length;
					paintSelection();
				}
			} else if (event.key === 'ArrowUp') {
				event.preventDefault();
				if (visible.length) {
					activeIndex = (activeIndex - 1 + visible.length) % visible.length;
					paintSelection();
				}
			} else if (event.key === 'Enter') {
				event.preventDefault();
				if (visible[activeIndex]) {
					run(visible[activeIndex]);
				}
			} else if (event.key === 'Escape') {
				event.preventDefault();
				close();
			}
		});

		overlay.addEventListener('mousedown', function (event) {
			if (event.target === overlay) {
				close();
			}
		});

		return { open: openPalette, close: close, isOpen: isOpen };
	}

	function onReady() {
		var instance = palette();

		// The block-editor bundles load asynchronously; retry registering
		// the LESS commands into the native palette until it appears.
		// Skipped entirely off editor screens (single class check).
		var isEditorPage = !!(document.body && document.body.classList.contains('block-editor-page'));
		if (isEditorPage) {
			registerNativeCommands(getData().commands || []);
			var nativeAttempts = 0;
			var nativeTimer = window.setInterval(function () {
				nativeAttempts++;
				if (registerNativeCommands(getData().commands || []) || nativeAttempts >= 20) {
					window.clearInterval(nativeTimer);
				}
			}, 500);
		}

		document.addEventListener('keydown', function (event) {
			var isShortcut = (event.ctrlKey || event.metaKey) && !event.altKey && !event.shiftKey &&
				(event.key === 'k' || event.key === 'K' || event.keyCode === 75);
			if (event.key === 'Escape' && instance.isOpen()) {
				event.preventDefault();
				instance.close();
				return;
			}
			if (!isShortcut) {
				return;
			}
			if (isTypingTarget(event.target)) {
				return;
			}
			if (instance.isOpen()) {
				return;
			}
			// On block-editor screens the native command palette owns mod+k;
			// it already carries the LESS commands (registered below), so
			// opening the LESS modal here would stack two palettes.
			if (hasNativePalette()) {
				registerNativeCommands(getData().commands || []);
				return;
			}
			event.preventDefault();
			instance.open();
		});

		var node = document.querySelector('#wp-admin-bar-ls-cloy-palette > .ab-item');
		if (node) {
			if (node.textContent.indexOf(SHORTCUT_HINT) === -1) {
				node.textContent = node.textContent.trim() + '  ' + SHORTCUT_HINT;
			}
			node.addEventListener('click', function (event) {
				event.preventDefault();
				// Prefer the native palette on block-editor screens.
				if (hasNativePalette()) {
					registerNativeCommands(getData().commands || []);
					if (openNativePalette()) {
						return;
					}
				}
				instance.open();
			});
		}

		window.LSCloyCommandPalette = instance;
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', onReady);
	} else {
		onReady();
	}
})();
