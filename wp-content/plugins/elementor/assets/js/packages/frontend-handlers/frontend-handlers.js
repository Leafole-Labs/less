(function() {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) {
			__defProp(target, name, {
				get: all[name],
				enumerable: true
			});
		}
		if (!no_symbols) {
			__defProp(target, Symbol.toStringTag, { value: "Module" });
		}
		return target;
	};

//#endregion

//#region packages/packages/core/frontend-handlers/src/handlers-registry.ts
	var elementTypeHandlers = /* @__PURE__ */ new Map();
	var elementSelectorHandlers = /* @__PURE__ */ new Map();
	var register = ({ elementType, id, callback }) => {
		if (!elementTypeHandlers.has(elementType)) elementTypeHandlers.set(elementType, /* @__PURE__ */ new Map());
		if (!elementTypeHandlers.get(elementType)?.has(id)) elementTypeHandlers.get(elementType)?.set(id, callback);
	};
	Object.defineProperty(window, "registerElementorElement", {
		value: register,
		enumerable: true
	});
	var unregister = ({ elementType, id }) => {
		if (!elementTypeHandlers.has(elementType)) return;
		if (id) {
			elementTypeHandlers.get(elementType)?.delete(id);
			if (elementTypeHandlers.get(elementType)?.size === 0) elementTypeHandlers.delete(elementType);
		} else elementTypeHandlers.delete(elementType);
	};
	var registerBySelector = ({ id, selector, callback }) => {
		if (!elementSelectorHandlers.has(selector)) elementSelectorHandlers.set(selector, /* @__PURE__ */ new Map());
		if (!elementSelectorHandlers.get(selector)?.has(id)) elementSelectorHandlers.get(selector)?.set(id, callback);
	};
	var unregisterBySelector = ({ selector, id }) => {
		if (!elementSelectorHandlers.has(selector)) return;
		if (id) {
			elementSelectorHandlers.get(selector)?.delete(id);
			if (elementSelectorHandlers.get(selector)?.size === 0) elementSelectorHandlers.delete(selector);
		} else elementSelectorHandlers.delete(selector);
	};

//#endregion
//#region packages/packages/core/frontend-handlers/src/lifecycle-events.ts
	var unmountCallbacks = /* @__PURE__ */ new WeakMap();
	var ELEMENT_RENDERED_EVENT_NAME = "elementor/element/rendered";
	var ELEMENT_DESTROYED_EVENT_NAME = "elementor/element/destroyed";
	var dispatchDestroyedEvent = (params) => {
		params.element.dispatchEvent(new CustomEvent(ELEMENT_DESTROYED_EVENT_NAME, {
			bubbles: true,
			detail: params
		}));
	};
	var onElementRender = ({ element, elementType, elementId }) => {
		cleanupOnUnmount(element);
		const controller = new AbortController();
		const manualUnmount = [];
		const dispatchRenderedEvent = () => {
			onElementSelectorRender({
				element,
				controller
			});
			element.dispatchEvent(new CustomEvent(ELEMENT_RENDERED_EVENT_NAME, {
				bubbles: true,
				detail: {
					element,
					elementType,
					elementId
				}
			}));
		};
		if (!element.isConnected) requestAnimationFrame(() => {
			dispatchRenderedEvent();
		});
		else dispatchRenderedEvent();
		if (!elementTypeHandlers.has(elementType)) return;
		setUnmountEntry({
			element,
			controller,
			manualUnmount
		});
		Array.from(elementTypeHandlers.get(elementType)?.values() ?? []).forEach((handler) => {
			const settings = element.getAttribute("data-e-settings");
			const listenToChildren = (elementTypes) => ({ render: (callback) => {
				const listener = (event) => {
					const { elementType: childType } = event.detail;
					if (!elementTypes.includes(childType)) return;
					callback(event);
				};
				element.addEventListener(ELEMENT_RENDERED_EVENT_NAME, listener, { signal: controller.signal });
				element.addEventListener(ELEMENT_DESTROYED_EVENT_NAME, listener, { signal: controller.signal });
			} });
			const unmount = handler({
				element,
				signal: controller.signal,
				settings: settings ? JSON.parse(settings) : {},
				listenToChildren
			});
			if (typeof unmount === "function") manualUnmount.push(unmount);
		});
	};
	var onElementSelectorRender = ({ element, controller }) => {
		let requiresCleanup = false;
		const manualUnmount = [];
		Array.from(elementSelectorHandlers.entries() ?? []).forEach(([selector, handlers]) => {
			if (!element.matches(selector)) return;
			requiresCleanup = true;
			Array.from(handlers.values() ?? []).forEach((handler) => {
				const settings = element.getAttribute("data-e-settings");
				const unmount = handler({
					element,
					signal: controller.signal,
					settings: settings ? JSON.parse(settings) : {}
				});
				if (typeof unmount === "function") manualUnmount.push(unmount);
			});
		});
		if (requiresCleanup) setUnmountEntry({
			element,
			controller,
			manualUnmount
		});
	};
	var onElementDestroy = ({ elementType, elementId, element }) => {
		if (!element) return;
		cleanupOnUnmount(element);
		dispatchDestroyedEvent({
			element,
			elementType,
			elementId
		});
	};
	var setUnmountEntry = ({ element, controller, manualUnmount }) => {
		const existingEntry = unmountCallbacks.get(element);
		if (existingEntry) existingEntry.manualUnmount.push(...manualUnmount);
		else unmountCallbacks.set(element, {
			controller,
			manualUnmount
		});
	};
	var cleanupOnUnmount = (element) => {
		const entry = unmountCallbacks.get(element);
		if (entry) {
			entry.controller.abort();
			entry.manualUnmount.forEach((callback) => callback());
			unmountCallbacks.delete(element);
		}
	};

//#endregion
//#region packages/packages/core/frontend-handlers/src/init.ts
	var ATOMIC_SELECTOR = "[data-e-type]";
	var domMutationObserverStarted = false;
	var pendingMutationNodes = /* @__PURE__ */ new Set();
	var pendingMutationsRafId = 0;
	function init() {
		window.addEventListener("elementor/element/render", (_event) => {
			const { id, type, element } = _event.detail;
			onElementRender({
				element,
				elementType: type,
				elementId: id
			});
		});
		window.addEventListener("elementor/element/destroy", (_event) => {
			const { id, type, element } = _event.detail;
			onElementDestroy({
				elementType: type,
				elementId: id,
				element
			});
		});
		const bootDomHandlers = () => {
			scanDocumentForAtomicElements();
			startObservingDomForNewAtomicElements();
		};
		document.addEventListener("DOMContentLoaded", bootDomHandlers);
		if ("loading" !== document.readyState) bootDomHandlers();
	}
	function triggerAtomicRender(atom) {
		const eType = atom.dataset.eType;
		const id = atom.dataset.id;
		if (!eType || !id) return;
		onElementRender({
			element: atom,
			elementType: eType,
			elementId: id
		});
	}
	function collectAtomicElementsInSubtree(root) {
		const found = [];
		if (root.matches(ATOMIC_SELECTOR)) found.push(root);
		root.querySelectorAll(ATOMIC_SELECTOR).forEach((el) => {
			found.push(el);
		});
		return found;
	}
	function scanDocumentForAtomicElements() {
		document.querySelectorAll(ATOMIC_SELECTOR).forEach((el) => {
			const atom = el;
			const { eType, id } = atom.dataset;
			if (!eType || !id) return;
			triggerAtomicRender(atom);
		});
	}
	function startObservingDomForNewAtomicElements() {
		if (domMutationObserverStarted || "undefined" === typeof MutationObserver) return;
		domMutationObserverStarted = true;
		new MutationObserver((mutations) => {
			for (const mutation of mutations) mutation.addedNodes.forEach((node) => {
				pendingMutationNodes.add(node);
			});
			queueProcessPendingMutationNodes();
		}).observe(document.documentElement, {
			childList: true,
			subtree: true
		});
	}
	function queueProcessPendingMutationNodes() {
		if (pendingMutationsRafId || !pendingMutationNodes.size) return;
		pendingMutationsRafId = requestAnimationFrame(() => {
			pendingMutationsRafId = 0;
			const roots = Array.from(pendingMutationNodes);
			pendingMutationNodes.clear();
			const atoms = /* @__PURE__ */ new Set();
			for (const node of roots) {
				if (Node.ELEMENT_NODE !== node.nodeType) continue;
				collectAtomicElementsInSubtree(node).forEach((atom) => {
					atoms.add(atom);
				});
			}
			atoms.forEach((atom) => triggerAtomicRender(atom));
		});
	}

//#endregion
//#region packages/packages/core/frontend-handlers/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		init: () => init,
		register: () => register,
		registerBySelector: () => registerBySelector,
		unregister: () => unregister,
		unregisterBySelector: () => unregisterBySelector
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).frontendHandlers = src_exports;

//#endregion
})();
window.elementorV2.frontendHandlers?.init?.();
//# sourceMappingURL=frontend-handlers.js.map