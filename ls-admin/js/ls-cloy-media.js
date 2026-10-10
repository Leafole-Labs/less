/**
 * LESS 26.2 — Cloy: media library enhancements.
 *
 * Presentation and accessibility layer on top of the existing media flows.
 * Queries, pagination, upload, selection, insertion and deletion keep using
 * the core query-attachments endpoints and Backbone views; this script only
 * adds keyboard navigation, result announcements and an empty-state helper.
 * No dependencies.
 */
(function () {
	'use strict';

	function getTexts() {
		return (window.LSCloyMedia && window.LSCloyMedia.texts) || {};
	}

	function ensureLiveRegion() {
		var region = document.getElementById('ls-cloy-media-live');
		if (!region) {
			region = document.createElement('div');
			region.id = 'ls-cloy-media-live';
			region.className = 'ls-cloy-sr-only';
			region.setAttribute('aria-live', 'polite');
			document.body.appendChild(region);
		}
		return region;
	}

	function announce(message) {
		var region = ensureLiveRegion();
		region.textContent = '';
		window.setTimeout(function () {
			region.textContent = message;
		}, 30);
	}

	function tiles(container) {
		return container.querySelectorAll('.attachment[tabindex], .attachment');
	}

	function focusTile(container, from, dx, dy) {
		var list = Array.prototype.slice.call(container.querySelectorAll('.attachment'));
		if (!list.length) {
			return;
		}
		var current = list.indexOf(from);
		if (current === -1) {
			list[0].focus();
			return;
		}
		var rect = from.getBoundingClientRect();
		var best = null;
		var bestScore = Infinity;
		for (var i = 0; i < list.length; i++) {
			if (i === current) {
				continue;
			}
			var other = list[i].getBoundingClientRect();
			var ox = other.left + other.width / 2 - (rect.left + rect.width / 2);
			var oy = other.top + other.height / 2 - (rect.top + rect.height / 2);
			if (dx > 0 && ox <= 4) {
				continue;
			}
			if (dx < 0 && ox >= -4) {
				continue;
			}
			if (dy > 0 && oy <= 4) {
				continue;
			}
			if (dy < 0 && oy >= -4) {
				continue;
			}
			var score = Math.abs(dx !== 0 ? oy : ox) * 3 + Math.abs(dx !== 0 ? ox : oy);
			if (score < bestScore) {
				bestScore = score;
				best = list[i];
			}
		}
		if (best) {
			best.focus();
		}
	}

	function enhanceGrid(grid) {
		var browser = grid.querySelector('.attachments-browser');
		var container = grid.querySelector('.attachments');
		if (!browser || !container) {
			return;
		}

		// Roving focus target: tiles are natively focusable via Backbone in
		// most versions; arrow-key movement is the enhancement.
		container.addEventListener('keydown', function (event) {
			var target = event.target && event.target.closest ? event.target.closest('.attachment') : null;
			if (!target || !container.contains(target)) {
				return;
			}
			if (event.key === 'ArrowRight') {
				event.preventDefault();
				focusTile(container, target, 1, 0);
			} else if (event.key === 'ArrowLeft') {
				event.preventDefault();
				focusTile(container, target, -1, 0);
			} else if (event.key === 'ArrowDown') {
				event.preventDefault();
				focusTile(container, target, 0, 1);
			} else if (event.key === 'ArrowUp') {
				event.preventDefault();
				focusTile(container, target, 0, -1);
			} else if (event.key === 'Enter' && event.target === target) {
				// Let the core click handler open the details modal.
				event.preventDefault();
				target.click();
			}
		});

		// Announce result counts as the collection re-renders.
		var texts = getTexts();
		var settled = 0;
		var observer = new MutationObserver(function () {
			var now = Date.now();
			if (now - settled < 400) {
				return;
			}
			settled = now;
			var count = container.querySelectorAll('.attachment').length;
			var emptyNote = container.querySelector('.no-media, .upload-errors, li.no-items');
			if (count === 0 && emptyNote) {
				ensureClearButton(browser, container);
			} else {
				removeClearButton();
			}
			if (texts.announce) {
				announce(texts.announce + ': ' + count);
			}
		});
		observer.observe(container, { childList: true, subtree: false });
	}

	function ensureClearButton(browser, container) {
		if (browser.querySelector('.ls-cloy-media-empty')) {
			return;
		}
		var texts = getTexts();
		var empty = document.createElement('div');
		empty.className = 'ls-cloy-media-empty';
		var note = document.createElement('p');
		note.textContent = container.textContent ? container.textContent.trim().slice(0, 160) : '';
		var button = document.createElement('button');
		button.type = 'button';
		button.className = 'button';
		button.textContent = texts.clearFilters || 'Clear search and filters';
		button.addEventListener('click', function () {
			resetGridFilters(browser);
		});
		empty.appendChild(note);
		empty.appendChild(button);
		browser.appendChild(empty);
	}

	function removeClearButton() {
		var existing = document.querySelector('.ls-cloy-media-empty');
		if (existing && existing.parentNode) {
			existing.parentNode.removeChild(existing);
		}
	}

	function resetGridFilters(browser) {
		// Drive the existing core controls so queries stay canonical.
		var search = browser.querySelector('.media-toolbar .search, .media-toolbar input[type="search"]');
		if (search) {
			search.value = '';
			var inputEvent;
			try {
				inputEvent = new Event('input', { bubbles: true });
			} catch (error) {
				inputEvent = document.createEvent('Event');
				inputEvent.initEvent('input', true, true);
			}
			search.dispatchEvent(inputEvent);
			search.focus();
		}
		var selects = browser.querySelectorAll('.media-toolbar select');
		for (var i = 0; i < selects.length; i++) {
			if (selects[i].options.length) {
				selects[i].selectedIndex = 0;
				var changeEvent;
				try {
					changeEvent = new Event('change', { bubbles: true });
				} catch (error2) {
					changeEvent = document.createEvent('Event');
					changeEvent.initEvent('change', true, true);
				}
				selects[i].dispatchEvent(changeEvent);
			}
		}
	}

	function enhanceList() {
		var table = document.querySelector('table.media, table.attachments, .wp-list-table.media');
		if (table) {
			table.classList.add('ls-cloy-list');
		}
	}

	function onReady() {
		var grid = document.getElementById('wp-media-grid');
		if (grid) {
			// The grid renders asynchronously; wait for the browser shell.
			if (grid.querySelector('.attachments-browser')) {
				enhanceGrid(grid);
			} else {
				var shellObserver = new MutationObserver(function () {
					if (grid.querySelector('.attachments-browser')) {
						shellObserver.disconnect();
						enhanceGrid(grid);
					}
				});
				shellObserver.observe(grid, { childList: true, subtree: true });
				window.setTimeout(function () {
					shellObserver.disconnect();
				}, 15000);
			}
			return;
		}
		enhanceList();
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', onReady);
	} else {
		onReady();
	}
})();
