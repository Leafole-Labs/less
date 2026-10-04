(function(_elementor_editor_elements_panel_notice, react, _elementor_editor_current_user, _elementor_editor_notifications, _elementor_editor_ui, _elementor_http_client, _elementor_ui, _wordpress_i18n) {

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

//#region packages/apps/unlock-v4-promo/src/hooks/use-promo-suppressed-message.ts
	var MESSAGE_KEY = "atomic_elements_promo";
	var usePromoSuppressedMessage = () => {
		const [suppressed, setSuppressMessage] = (0, _elementor_editor_current_user.useSuppressedMessage)(MESSAGE_KEY);
		return [suppressed, (0, react.useCallback)(() => {
			if (!suppressed) {
				setSuppressMessage();
				(0, _elementor_editor_notifications.notify)({
					type: "default",
					message: (0, _wordpress_i18n.__)("You can enable the Atomic editor anytime from Editor Settings.", "elementor"),
					id: MESSAGE_KEY
				});
			}
		}, [suppressed, setSuppressMessage])];
	};

//#endregion
//#region packages/apps/unlock-v4-promo/src/components/atomic-elements-promo.tsx
	var PROMO_IMAGE = "https://assets.elementor.com/v4-promotion/v1/images/atomic_elements_section_260.png";
	var LEARN_MORE_URL = "https://go.elementor.com/wp-dash-opt-in-v4-help-center/";
	function AtomicElementsPromo() {
		const [suppressed, toggleSuppressMessage] = usePromoSuppressedMessage();
		const isAdmin = (0, _elementor_editor_current_user.getCurrentUser)()?.capabilities?.includes("manage_options");
		const activateAtomicElements = (0, react.useCallback)(async () => {
			try {
				if ((await (0, _elementor_http_client.httpService)().post("elementor/v1/operations/opt-in-v4")).data.success) window.location.reload();
			} catch {
				(0, _elementor_editor_notifications.notify)({
					type: "error",
					message: (0, _wordpress_i18n.__)("Failed to activate Atomic elements", "elementor"),
					id: "atomic-elements-promo-error"
				});
			}
		}, []);
		if (suppressed || !isAdmin) return null;
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.ThemeProvider, null, /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			bgcolor: "background.default",
			display: "flex",
			flexDirection: "column"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			alignItems: "center",
			gap: 1,
			pl: 2.5,
			pr: 1,
			py: 1
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "subtitle2",
			sx: {
				flexGrow: 1,
				gap: 1,
				display: "flex",
				alignItems: "center"
			}
		}, (0, _wordpress_i18n.__)("Atomic Elements", "elementor"), /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			label: (0, _wordpress_i18n.__)("New", "elementor"),
			size: "tiny",
			variant: "standard",
			color: "secondary"
		})), /* @__PURE__ */ react.createElement(_elementor_ui.CloseButton, {
			slotProps: { icon: { fontSize: "small" } },
			onClick: toggleSuppressMessage
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			maxHeight: 205,
			mx: 2,
			overflow: "hidden"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			component: "img",
			src: PROMO_IMAGE,
			alt: "",
			sx: {
				width: "100%",
				objectFit: "cover",
				objectPosition: "center",
				display: "block"
			}
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			pl: 2.5,
			pr: 4,
			pt: 2
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			color: "text.tertiary"
		}, (0, _wordpress_i18n.__)("Build with modern, flexible elements designed for reusable styles and cleaner layouts. Your existing site and content stay exactly the same.", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			justifyContent: "flex-end",
			gap: 1,
			pb: 1.5,
			pl: 2,
			pr: 2.5,
			pt: 1
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "text",
			size: "small",
			color: "secondary",
			href: LEARN_MORE_URL,
			target: "_blank"
		}, (0, _wordpress_i18n.__)("Learn more", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			size: "small",
			color: "inherit",
			sx: {
				bgcolor: "text.primary",
				color: "background.paper",
				"&:hover": {
					bgcolor: "text.secondary",
					color: "background.paper"
				}
			},
			onClick: activateAtomicElements
		}, (0, _wordpress_i18n.__)("Activate now", "elementor")))), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null));
	}

//#endregion
//#region packages/apps/unlock-v4-promo/src/init.ts
	function init() {
		const { experimentalFeatures = {} } = window.elementorCommon?.config || {};
		const currentAtomicElementsExperimentState = experimentalFeatures?.e_atomic_elements;
		const currentContainerExperimentState = experimentalFeatures?.container;
		if (!currentAtomicElementsExperimentState && currentContainerExperimentState) (0, _elementor_editor_elements_panel_notice.register)(AtomicElementsPromo);
	}

//#endregion
//#region packages/apps/unlock-v4-promo/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		AtomicElementsPromo: () => AtomicElementsPromo,
		init: () => init
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).unlockV4Promo = src_exports;

//#endregion
})(elementorV2.editorElementsPanelNotice, React, elementorV2.editorCurrentUser, elementorV2.editorNotifications, elementorV2.editorUi, elementorV2.httpClient, elementorV2.ui, wp.i18n);
window.elementorV2.unlockV4Promo?.init?.();
//# sourceMappingURL=unlock-v4-promo.js.map