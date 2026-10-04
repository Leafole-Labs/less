(function(react, _elementor_editor, _elementor_editor_v1_adapters, _elementor_ui) {

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

//#region packages/packages/core/editor-elements-panel-notice/src/components/notice-portal.tsx
	var NOTICE_AREA_ID = "elementor-panel-elements-notice-area";
	var ELEMENTS_PANEL_ROUTE_PREFIX = "panel/elements/";
	function NoticePortal({ component: Component }) {
		const container = (0, _elementor_editor_v1_adapters.__privateUseListenTo)([(0, _elementor_editor_v1_adapters.v1ReadyEvent)(), (0, _elementor_editor_v1_adapters.routeOpenEvent)(ELEMENTS_PANEL_ROUTE_PREFIX)], () => document.getElementById(NOTICE_AREA_ID));
		return container ? /* @__PURE__ */ react.createElement(_elementor_ui.Portal, { container }, /* @__PURE__ */ react.createElement(Component, null)) : null;
	}

//#endregion
//#region packages/packages/core/editor-elements-panel-notice/src/utils/create-notice-view.ts
	function createNoticeView() {
		return window.Marionette?.CompositeView.extend({ template: `<div></div>` });
	}

//#endregion
//#region packages/packages/core/editor-elements-panel-notice/src/init.tsx
	function register(Component) {
		(0, _elementor_editor.injectIntoTop)({
			id: "editor-elements-panel-notice",
			component: () => /* @__PURE__ */ react.createElement(NoticePortal, { component: Component })
		});
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.v1ReadyEvent)(), () => {
			window.elementor?.hooks?.addFilter("panel/elements/regionViews", (regionViews, { notice }) => {
				regionViews.notice = {
					region: notice,
					view: createNoticeView()
				};
				return regionViews;
			});
		});
	}

//#endregion
//#region packages/packages/core/editor-elements-panel-notice/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({ register: () => register });

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorElementsPanelNotice = src_exports;

//#endregion
})(React, elementorV2.editor, elementorV2.editorV1Adapters, elementorV2.ui);
window.elementorV2.editorElementsPanelNotice?.init?.();
//# sourceMappingURL=editor-elements-panel-notice.js.map