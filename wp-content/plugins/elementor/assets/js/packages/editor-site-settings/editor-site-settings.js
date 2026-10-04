(function(_elementor_editor, react, _elementor_ui, _elementor_editor_v1_adapters) {

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

//#region packages/packages/core/editor-site-settings/src/consts.ts
	var SITE_SETTINGS_ROUTE_PREFIX = "panel/global/";
	var SITE_SETTINGS_PANEL_CONTENT_ID = "elementor-kit-panel-content-controls";

//#endregion
//#region packages/packages/core/editor-site-settings/src/tabs.ts
	var registry = /* @__PURE__ */ new Map();
	var DEFAULT_PRIORITY = 10;
	function registerSiteSettingsTab({ id, priority = DEFAULT_PRIORITY, component }) {
		const existing = registry.get(id);
		if (!existing || priority <= existing.priority) registry.set(id, {
			component,
			priority
		});
	}
	function getSiteSettingsTab(id) {
		return registry.get(id) ?? null;
	}

//#endregion
//#region packages/packages/core/editor-site-settings/src/hooks/use-active-site-settings-tab.ts
	function useActiveSiteSettingsTab() {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)([
			(0, _elementor_editor_v1_adapters.v1ReadyEvent)(),
			(0, _elementor_editor_v1_adapters.routeOpenEvent)(SITE_SETTINGS_ROUTE_PREFIX),
			(0, _elementor_editor_v1_adapters.routeCloseEvent)(SITE_SETTINGS_ROUTE_PREFIX)
		], () => {
			const panelRoute = window.$e?.routes?.getCurrent?.()?.panel;
			if (!panelRoute || !panelRoute.startsWith("panel/global/")) return null;
			return getSiteSettingsTab(panelRoute.replace("panel/global/", "")) ?? null;
		});
	}

//#endregion
//#region packages/packages/core/editor-site-settings/src/components/site-settings-tab.tsx
	function SiteSettingsTab() {
		const TabComponent = useActiveSiteSettingsTab()?.component;
		const container = document.getElementById(SITE_SETTINGS_PANEL_CONTENT_ID);
		return TabComponent && container ? /* @__PURE__ */ react.createElement(_elementor_ui.Portal, { container }, /* @__PURE__ */ react.createElement(TabComponent, null)) : null;
	}

//#endregion
//#region packages/packages/core/editor-site-settings/src/init.ts
	function init() {
		(0, _elementor_editor.injectIntoTop)({
			id: "editor-site-settings-tab",
			component: SiteSettingsTab
		});
	}

//#endregion
//#region packages/packages/core/editor-site-settings/src/inject-site-settings-tab.ts
	function injectSiteSettingsTab({ id, component, priority }) {
		registerSiteSettingsTab({
			id,
			component,
			priority
		});
	}

//#endregion
//#region packages/packages/core/editor-site-settings/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		init: () => init,
		injectSiteSettingsTab: () => injectSiteSettingsTab,
		registerSiteSettingsTab: () => registerSiteSettingsTab
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorSiteSettings = src_exports;

//#endregion
})(elementorV2.editor, React, elementorV2.ui, elementorV2.editorV1Adapters);
window.elementorV2.editorSiteSettings?.init?.();
//# sourceMappingURL=editor-site-settings.js.map