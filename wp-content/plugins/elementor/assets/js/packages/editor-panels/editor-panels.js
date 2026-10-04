(function(_elementor_editor, _elementor_store, react, _elementor_locations, _elementor_ui, _elementor_editor_v1_adapters) {

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

//#region packages/packages/core/editor-panels/src/location.ts
	var panelsMeta = /* @__PURE__ */ new Map();
	var { inject: baseInject, useInjections: baseUseInjections, getInjections } = (0, _elementor_locations.createLocation)();
	(0, _elementor_locations.__registerFlushInjections)(() => {
		panelsMeta.clear();
	});
	function injectIntoPanels({ id, component, keepMounted }) {
		const existedBefore = getInjections().some((injection) => injection.id === id);
		baseInject({
			id,
			component
		});
		if (!existedBefore) panelsMeta.set(id, { keepMounted });
	}
	function usePanelsInjections() {
		return baseUseInjections().map((injection) => ({
			...injection,
			keepMounted: panelsMeta.get(injection.id)?.keepMounted ?? false
		}));
	}

//#endregion
//#region packages/packages/core/editor-panels/src/store/selectors.ts
	var selectOpenId = (state) => state.panels.openId;

//#endregion
//#region packages/packages/core/editor-panels/src/store/slice.ts
	var initialState = { openId: null };
	var slice_default = (0, _elementor_store.__createSlice)({
		name: "panels",
		initialState,
		reducers: {
			open(state, action) {
				state.openId = action.payload;
			},
			close(state, action) {
				if (!action.payload || state.openId === action.payload) state.openId = null;
			}
		}
	});

//#endregion
//#region packages/packages/core/editor-panels/src/sync.ts
	var V2_PANEL = "panel/v2";
	function getPortalContainer() {
		return document.querySelector("#elementor-panel-inner");
	}
	function sync() {
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.windowEvent)("elementor/panel/init"), () => (0, _elementor_editor_v1_adapters.__privateRegisterRoute)(V2_PANEL));
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.routeOpenEvent)(V2_PANEL), () => {
			getV1PanelElements().forEach((el) => {
				el.setAttribute("hidden", "hidden");
				el.setAttribute("inert", "true");
			});
		});
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.routeCloseEvent)(V2_PANEL), () => selectOpenId((0, _elementor_store.__getState)()) && (0, _elementor_store.__dispatch)(slice_default.actions.close()));
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.routeCloseEvent)(V2_PANEL), () => {
			getV1PanelElements().forEach((el) => {
				el.removeAttribute("hidden");
				el.removeAttribute("inert");
			});
		});
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.windowEvent)("elementor/panel/init"), () => subscribe({
			on: (state) => selectOpenId(state),
			when: ({ prev, current }) => !!(!prev && current),
			callback: () => (0, _elementor_editor_v1_adapters.__privateOpenRoute)(V2_PANEL)
		}));
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.windowEvent)("elementor/panel/init"), () => subscribe({
			on: (state) => selectOpenId(state),
			when: ({ prev, current }) => !!(!current && prev),
			callback: () => (0, _elementor_editor_v1_adapters.__privateIsRouteActive)("panel/v2") && (0, _elementor_editor_v1_adapters.__privateOpenRoute)(getDefaultRoute())
		}));
	}
	function getV1PanelElements() {
		const v1ElementsSelector = [
			"#elementor-panel-header-wrapper",
			"#elementor-panel-content-wrapper",
			"#elementor-panel-state-loading"
		].join(", ");
		return document.querySelectorAll(v1ElementsSelector);
	}
	function getDefaultRoute() {
		return window?.elementor?.documents?.getCurrent?.()?.config?.panel?.default_route || "panel/elements/categories";
	}
	function subscribe({ on, when, callback }) {
		let prev;
		(0, _elementor_store.__subscribe)(() => {
			const current = on((0, _elementor_store.__getState)());
			if (when({
				prev,
				current
			})) callback({
				prev,
				current
			});
			prev = current;
		});
	}

//#endregion
//#region packages/packages/core/editor-panels/src/components/internal/portal.tsx
	function Portal(props) {
		const [container, setContainer] = (0, react.useState)(() => getPortalContainer());
		(0, react.useEffect)(() => {
			if (container) return;
			const resolveContainer = () => {
				const portalContainer = getPortalContainer();
				if (portalContainer) setContainer(portalContainer);
			};
			window.addEventListener("elementor/panel/init", resolveContainer);
			resolveContainer();
			return () => {
				window.removeEventListener("elementor/panel/init", resolveContainer);
			};
		}, [container]);
		if (!container) return null;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Portal, {
			container,
			...props
		});
	}

//#endregion
//#region packages/packages/core/editor-panels/src/components/internal/panels.tsx
	function Panels() {
		const injections = usePanelsInjections();
		const openId = (0, _elementor_store.__useSelector)(selectOpenId);
		const persistentInjections = injections.filter((injection) => injection.keepMounted);
		const openInjection = injections.find((injection) => openId === injection.id);
		if (!persistentInjections.length && !openInjection) return null;
		return /* @__PURE__ */ react.createElement(Portal, null, persistentInjections.map(({ id, component: Component }) => /* @__PURE__ */ react.createElement("div", {
			key: id,
			style: { display: openId === id ? "contents" : "none" }
		}, /* @__PURE__ */ react.createElement(Component, null))), openInjection && !openInjection.keepMounted && /* @__PURE__ */ react.createElement(openInjection.component, null));
	}

//#endregion
//#region packages/packages/core/editor-panels/src/init.ts
	function init() {
		sync();
		(0, _elementor_store.__registerSlice)(slice_default);
		(0, _elementor_editor.injectIntoTop)({
			id: "panels",
			component: Panels
		});
	}

//#endregion
//#region packages/packages/core/editor-panels/src/api.ts
	function createPanel({ id, component, onOpen, onClose, allowedEditModes, blockOnKitRoutes, isOpenPreviousElement = false, keepMounted = false }) {
		const usePanelStatus = createUseStatus(id, {
			allowedEditModes,
			blockOnKitRoutes
		});
		const usePanelActions = createUseActions(id, usePanelStatus, {
			onOpen,
			onClose
		}, isOpenPreviousElement);
		return {
			panel: {
				id,
				component,
				keepMounted
			},
			usePanelStatus,
			usePanelActions
		};
	}
	function registerPanel({ id, component, keepMounted }) {
		injectIntoPanels({
			id,
			component,
			keepMounted
		});
	}
	function createUseStatus(id, options = {}) {
		return () => {
			const openPanelId = (0, _elementor_store.__useSelector)(selectOpenId);
			const v1PanelStatus = (0, _elementor_editor_v1_adapters.__privateUseRouteStatus)(V2_PANEL, options);
			return {
				isOpen: openPanelId === id && v1PanelStatus.isActive,
				isBlocked: v1PanelStatus.isBlocked
			};
		};
	}
	function createUseActions(id, useStatus, options = {}, isOpenPreviousElement) {
		let stateSnapshot = null;
		let previousSelectedElement = null;
		return () => {
			const dispatch = (0, _elementor_store.__useDispatch)();
			const { isBlocked } = useStatus();
			return {
				open: async () => {
					if (isBlocked) return;
					if (isOpenPreviousElement) previousSelectedElement = window.elementor?.selection?.getElements?.()[0]?.model.get("id") ?? null;
					dispatch(slice_default.actions.open(id));
					stateSnapshot = options.onOpen?.() ?? null;
				},
				close: async () => {
					if (isBlocked) return;
					dispatch(slice_default.actions.close(id));
					await options.onClose?.(stateSnapshot);
					if (previousSelectedElement) {
						try {
							const container = window.elementor?.getContainer?.(previousSelectedElement);
							(0, _elementor_editor_v1_adapters.__privateRunCommand)("document/elements/select", { container });
						} catch {}
						previousSelectedElement = null;
					}
				}
			};
		};
	}

//#endregion
//#region packages/packages/core/editor-panels/src/components/external/panel.tsx
	function Panel({ children, sx, ...props }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Drawer, {
			open: true,
			variant: "persistent",
			anchor: "left",
			PaperProps: { sx: {
				position: "relative",
				width: "100%",
				bgcolor: "background.default",
				border: "none"
			} },
			sx: {
				height: "100%",
				...sx
			},
			...props
		}, children);
	}

//#endregion
//#region packages/packages/core/editor-panels/src/components/external/panel-header.tsx
	var Header = (0, _elementor_ui.styled)(_elementor_ui.Box)(({ theme }) => ({
		height: theme?.spacing(6) || "48px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: theme?.spacing(.5) || "4px"
	}));
	function PanelHeader({ children, ...props }) {
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Header, {
			component: "header",
			...props
		}, children));
	}

//#endregion
//#region packages/packages/core/editor-panels/src/components/external/panel-header-title.tsx
	var Typography = (0, _elementor_ui.styled)(_elementor_ui.Typography)(({ theme, variant = "body1" }) => {
		if (variant === "inherit") return {};
		return { "&.MuiTypography-root": { ...theme.typography[variant] } };
	});
	var PanelHeaderTitle = (0, react.forwardRef)(({ children, ...props }, ref) => {
		return /* @__PURE__ */ react.createElement(Typography, {
			ref,
			component: "h2",
			variant: "subtitle1",
			...props
		}, children);
	});

//#endregion
//#region packages/packages/core/editor-panels/src/components/external/panel-body.tsx
	function PanelBody({ children, sx, ...props }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			component: "main",
			sx: {
				overflowY: "auto",
				height: "100%",
				...sx
			},
			...props
		}, children);
	}

//#endregion
//#region packages/packages/core/editor-panels/src/components/external/panel-footer.tsx
	function PanelFooter({ children, sx, ...props }) {
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			component: "footer",
			sx: {
				display: "flex",
				position: "sticky",
				bottom: 0,
				px: 2,
				py: 1.5
			},
			...props
		}, children));
	}

//#endregion
//#region packages/packages/core/editor-panels/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		Panel: () => Panel,
		PanelBody: () => PanelBody,
		PanelFooter: () => PanelFooter,
		PanelHeader: () => PanelHeader,
		PanelHeaderTitle: () => PanelHeaderTitle,
		__createPanel: () => createPanel,
		__registerPanel: () => registerPanel,
		createPanel: () => createPanel,
		init: () => init,
		registerPanel: () => registerPanel
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorPanels = src_exports;

//#endregion
})(elementorV2.editor, elementorV2.store, React, elementorV2.locations, elementorV2.ui, elementorV2.editorV1Adapters);
window.elementorV2.editorPanels?.init?.();
//# sourceMappingURL=editor-panels.js.map