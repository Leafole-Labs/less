(function(_elementor_editor_site_settings, react, _elementor_editor_v1_adapters, _elementor_ui, _wordpress_i18n, _elementor_editor_documents) {

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

//#region packages/packages/core/editor-agents/src/llms-settings.ts
	var AGENTS_SETTINGS_KEY = "agents";
	var LLMS_SETTINGS_KEY = "llms";
	function getSiteSettingsBag() {
		const settings = (0, _elementor_editor_documents.getV1CurrentDocument)()?.container?.settings;
		return settings ? settings : null;
	}
	function readAgentsSettings(settings) {
		const agents = settings?.get(AGENTS_SETTINGS_KEY);
		return agents && typeof agents === "object" ? { ...agents } : {};
	}
	function omitLlms(agents) {
		return Object.fromEntries(Object.entries(agents).filter(([key]) => key !== LLMS_SETTINGS_KEY));
	}
	function isEmpty(agents) {
		return 0 === Object.keys(agents).length;
	}
	function readLlmsContent() {
		const llms = readAgentsSettings(getSiteSettingsBag())[LLMS_SETTINGS_KEY];
		return typeof llms === "string" ? llms : "";
	}
	function writeLlmsContent(content) {
		const settings = getSiteSettingsBag();
		if (!settings) return false;
		const agents = readAgentsSettings(settings);
		if ("" === content) {
			const remainingAgents = omitLlms(agents);
			settings.set(AGENTS_SETTINGS_KEY, isEmpty(remainingAgents) ? void 0 : remainingAgents);
		} else settings.set(AGENTS_SETTINGS_KEY, {
			...agents,
			[LLMS_SETTINGS_KEY]: content
		});
		(0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
		return true;
	}

//#endregion
//#region packages/packages/core/editor-agents/src/components/agents-settings-tab.tsx
	var TAB_ID = "settings-agents";
	var TAB_ROUTE = `panel/global/${TAB_ID}`;
	function AgentsSettingsTab() {
		const [value, setValue] = (0, react.useState)(readLlmsContent);
		const [isSettingsAvailable, setIsSettingsAvailable] = (0, react.useState)(() => null !== getSiteSettingsBag());
		(0, _elementor_editor_v1_adapters.__privateUseListenTo)([(0, _elementor_editor_v1_adapters.routeOpenEvent)(TAB_ROUTE)], () => {
			setIsSettingsAvailable(null !== getSiteSettingsBag());
			setValue(readLlmsContent());
		});
		const handleChange = (0, react.useCallback)((event) => {
			const nextValue = event.target.value;
			setValue(nextValue);
			writeLlmsContent(nextValue);
		}, []);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { p: 2 } }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { spacing: 1.5 }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "subtitle2" }, (0, _wordpress_i18n.__)("Agents", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			label: (0, _wordpress_i18n.__)("llms.txt", "elementor"),
			value,
			onChange: handleChange,
			multiline: true,
			minRows: 12,
			fullWidth: true,
			disabled: !isSettingsAvailable,
			helperText: isSettingsAvailable ? (0, _wordpress_i18n.__)("Content served at /llms.txt when saved. Leave empty to disable.", "elementor") : (0, _wordpress_i18n.__)("Kit settings are unavailable. Reopen Site Settings and try again.", "elementor")
		})));
	}
	var AGENTS_SITE_SETTINGS_TAB_ID = TAB_ID;

//#endregion
//#region packages/packages/core/editor-agents/src/init.ts
	var EXPERIMENT_NAME = "agents_llms_txt";
	function isAgentsExperimentActive() {
		const features = window.elementorCommon?.config?.experimentalFeatures ?? {};
		return Boolean(features[EXPERIMENT_NAME]);
	}
	function init() {
		if (!isAgentsExperimentActive()) return;
		(0, _elementor_editor_site_settings.injectSiteSettingsTab)({
			id: AGENTS_SITE_SETTINGS_TAB_ID,
			component: AgentsSettingsTab
		});
	}

//#endregion
//#region packages/packages/core/editor-agents/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		AGENTS_SITE_SETTINGS_TAB_ID: () => AGENTS_SITE_SETTINGS_TAB_ID,
		AgentsSettingsTab: () => AgentsSettingsTab,
		init: () => init
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorAgents = src_exports;

//#endregion
})(elementorV2.editorSiteSettings, React, elementorV2.editorV1Adapters, elementorV2.ui, wp.i18n, elementorV2.editorDocuments);
window.elementorV2.editorAgents?.init?.();
//# sourceMappingURL=editor-agents.js.map