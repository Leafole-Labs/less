(function(_elementor_editor, react, _elementor_ui, _elementor_editor_v1_adapters, _elementor_utils) {

//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
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
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) {
					__defProp(to, key, {
						get: ((k) => from[k]).bind(null, key),
						enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
					});
				}
			}
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));

//#endregion
react = __toESM(react);

//#region packages/packages/core/editor-elements-panel/src/consts.ts
	var LEGACY_ELEMENTS_PANEL_COMPONENT_NAME = "panel/elements";
	var LEGACY_ELEMENTS_PANEL_ROUTE_PREFIX = `${LEGACY_ELEMENTS_PANEL_COMPONENT_NAME}/`;

//#endregion
//#region packages/packages/core/editor-elements-panel/src/tabs.ts
	var registry = /* @__PURE__ */ new Map();
	var DEFAULT_PRIORITY = 10;
	function registerTab({ id, priority = DEFAULT_PRIORITY, ...props }) {
		const existing = registry.get(id);
		if (!existing || priority <= existing.priority) registry.set(id, {
			...props,
			priority
		});
	}
	function getTab(id) {
		return registry.get(id) ?? null;
	}

//#endregion
//#region packages/packages/core/editor-elements-panel/src/utils/get-window.ts
	function getWindow() {
		return window;
	}

//#endregion
//#region packages/packages/core/editor-elements-panel/src/hooks/use-active-tab.ts
	function useActiveTab() {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)([
			(0, _elementor_editor_v1_adapters.v1ReadyEvent)(),
			(0, _elementor_editor_v1_adapters.routeOpenEvent)(LEGACY_ELEMENTS_PANEL_ROUTE_PREFIX),
			(0, _elementor_editor_v1_adapters.routeCloseEvent)(LEGACY_ELEMENTS_PANEL_ROUTE_PREFIX)
		], () => {
			const panelRoute = getWindow().$e.routes.getCurrent()?.panel;
			if (!panelRoute || !panelRoute.startsWith(LEGACY_ELEMENTS_PANEL_ROUTE_PREFIX)) return null;
			return getTab(panelRoute.replace(LEGACY_ELEMENTS_PANEL_ROUTE_PREFIX, "")) ?? null;
		});
	}

//#endregion
//#region packages/packages/core/editor-elements-panel/src/components/elements-panel-tab.tsx
	var PANEL_WRAPPER_ID = "elementor-panel-elements-wrapper";
	function ElementsPanelTab() {
		const TabComponent = useActiveTab()?.component;
		const container = document.getElementById(PANEL_WRAPPER_ID);
		return TabComponent && container ? /* @__PURE__ */ react.createElement(_elementor_ui.Portal, { container }, /* @__PURE__ */ react.createElement(TabComponent, null)) : null;
	}

//#endregion
//#region packages/packages/core/editor-elements-panel/src/init.ts
	function init() {
		(0, _elementor_editor.injectIntoTop)({
			id: "editor-elements-panel-tab",
			component: ElementsPanelTab
		});
	}

//#endregion
//#region packages/packages/core/editor-elements-panel/src/utils/create-legacy-view.ts
	function createLegacyView() {
		return getWindow().Marionette.CompositeView.extend({
			template: `<div></div>`,
			initialize() {
				getWindow().elementor.getPanelView().getCurrentPageView().search.reset();
			}
		});
	}

//#endregion
//#region packages/packages/core/editor-elements-panel/src/utils/get-navigation-wrapper-element.ts
	var NAVIGATION_WRAPPER_ID = "elementor-panel-elements-navigation";
	var ElementsPanelWrapperElementNotFoundError = (0, _elementor_utils.createError)({
		code: "elements_panel_wrapper_element_not_found",
		message: "Elementor Elements Panel wrapper element not found"
	});
	function getNavigationWrapperElement() {
		const wrapper = document.getElementById(NAVIGATION_WRAPPER_ID);
		if (!wrapper) throw new ElementsPanelWrapperElementNotFoundError();
		return wrapper;
	}

//#endregion
//#region packages/packages/core/editor-elements-panel/src/utils/create-tab-nav-item.ts
	function createTabNavItem({ id, label, route, isActive, position }) {
		const wrapper = getNavigationWrapperElement();
		const btn = document.createElement("button");
		btn.className = [
			"elementor-component-tab",
			"elementor-panel-navigation-tab",
			isActive ? "elementor-active" : ""
		].filter(Boolean).join(" ");
		btn.setAttribute("data-tab", id);
		btn.textContent = label;
		btn.addEventListener("click", () => {
			getWindow().$e.route(route);
		});
		if (position !== void 0 && wrapper.children[position]) wrapper.insertBefore(btn, wrapper.children[position]);
		else wrapper.appendChild(btn);
	}

//#endregion
//#region packages/packages/core/editor-elements-panel/src/utils/get-legacy-elements-panel-component.ts
	var ComponentNotFoundError = (0, _elementor_utils.createError)({
		code: "e_component_not_found",
		message: "Elementor component not found"
	});
	function getLegacyElementsPanelComponent() {
		const eComponent = getWindow().$e.components.get(LEGACY_ELEMENTS_PANEL_COMPONENT_NAME);
		if (!eComponent) throw new ComponentNotFoundError({ context: { componentId: LEGACY_ELEMENTS_PANEL_COMPONENT_NAME } });
		return eComponent;
	}

//#endregion
//#region packages/packages/core/editor-elements-panel/src/inject-tab.ts
	function injectTab({ id, label, component, position }) {
		registerTab({
			id,
			label,
			component
		});
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.v1ReadyEvent)(), () => {
			window.elementor?.hooks?.addFilter("panel/elements/regionViews", (regions, { elements }) => {
				regions[id] = {
					region: elements,
					view: createLegacyView()
				};
				return regions;
			});
		});
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.windowEvent)("elementor/panel/init"), () => {
			getLegacyElementsPanelComponent().addTab(id, { title: label });
		});
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.routeOpenEvent)(LEGACY_ELEMENTS_PANEL_ROUTE_PREFIX), (e) => {
			const route = `${LEGACY_ELEMENTS_PANEL_ROUTE_PREFIX}${id}`;
			createTabNavItem({
				id,
				label,
				route,
				isActive: "route" in e && e.route === route,
				position
			});
		});
	}

//#endregion
//#region packages/packages/core/editor-elements-panel/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		init: () => init,
		injectTab: () => injectTab,
		registerTab: () => registerTab
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorElementsPanel = src_exports;

//#endregion
})(elementorV2.editor, React, elementorV2.ui, elementorV2.editorV1Adapters, elementorV2.utils);
window.elementorV2.editorElementsPanel?.init?.();
//# sourceMappingURL=editor-elements-panel.js.map