(function(_elementor_locations, react, react_dom, _elementor_editor_ui, _elementor_editor_v1_adapters, _elementor_query, _elementor_store, _elementor_ui, _elementor_editor_current_user) {

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
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
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
react_dom = __toESM(react_dom);

//#region packages/packages/core/editor/src/locations.ts
	var { Slot: TopSlot, inject: injectIntoTop } = (0, _elementor_locations.createLocation)();
	var { Slot: LogicSlot, inject: injectIntoLogic } = (0, _elementor_locations.createLocation)();

//#endregion
//#region node_modules/react-dom/client.js
	var require_client = /* @__PURE__ */ __commonJSMin(((exports) => {
		var m = (globalThis.ReactDOM);
		var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
		exports.createRoot = function(c, o) {
			i.usingClientEntryPoint = true;
			try {
				return m.createRoot(c, o);
			} finally {
				i.usingClientEntryPoint = false;
			}
		};
	}));

//#endregion
//#region packages/packages/core/editor/src/components/shell.tsx
var import_client = require_client();
	function Shell() {
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(TopSlot, null), /* @__PURE__ */ react.createElement("div", { style: { display: "none" } }, /* @__PURE__ */ react.createElement(LogicSlot, null)));
	}

//#endregion
//#region packages/packages/core/editor/src/ensure-current-user.ts
	async function ensureCurrentUser() {
		return (0, _elementor_editor_v1_adapters.registerDataHook)("after", "editor/documents/attach-preview", async () => {
			try {
				await (0, _elementor_editor_current_user.ensureUser)();
			} catch {}
		});
	}

//#endregion
//#region packages/packages/core/editor/src/start.tsx
	function start(domElement) {
		const store = (0, _elementor_store.__createStore)();
		const queryClient = (0, _elementor_query.createQueryClient)();
		ensureCurrentUser();
		(0, _elementor_editor_v1_adapters.__privateDispatchReadyEvent)();
		render(/* @__PURE__ */ react.createElement(_elementor_store.__StoreProvider, { store }, /* @__PURE__ */ react.createElement(_elementor_query.QueryClientProvider, { client: queryClient }, /* @__PURE__ */ react.createElement(_elementor_ui.DirectionProvider, { rtl: window.document.dir === "rtl" }, /* @__PURE__ */ react.createElement(_elementor_ui.ThemeProvider, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.GlobalDialog, null), /* @__PURE__ */ react.createElement(Shell, null))))), domElement);
	}
	function render(app, domElement) {
		let renderFn;
		try {
			const root = (0, import_client.createRoot)(domElement);
			renderFn = () => {
				root.render(app);
			};
		} catch {
			renderFn = () => {
				react_dom.render(app, domElement);
			};
		}
		renderFn();
	}

//#endregion
//#region packages/packages/core/editor/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		injectIntoLogic: () => injectIntoLogic,
		injectIntoTop: () => injectIntoTop,
		start: () => start
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editor = src_exports;

//#endregion
})(elementorV2.locations, React, ReactDOM, elementorV2.editorUi, elementorV2.editorV1Adapters, elementorV2.query, elementorV2.store, elementorV2.ui, elementorV2.editorCurrentUser);
window.elementorV2.editor?.init?.();
//# sourceMappingURL=editor.js.map