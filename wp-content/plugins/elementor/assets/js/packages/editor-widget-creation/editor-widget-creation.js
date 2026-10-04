(function(_elementor_editor, react, _elementor_editor_mcp, _elementor_editor_ui, _elementor_events, _elementor_icons, _elementor_ui, _wordpress_i18n) {

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

//#region packages/packages/core/editor-widget-creation/src/interpolate-links.tsx
	var LINK_PLACEHOLDER_PATTERN = /\{\{(\w+)}}/g;
	var interpolateLinks = (text, links) => {
		return text.split(LINK_PLACEHOLDER_PATTERN).map((part, i) => {
			const link = links[part];
			if (!link) return part;
			return /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
				key: i,
				sx: { px: .5 },
				href: link.href,
				target: "_blank",
				rel: "noopener noreferrer"
			}, link.label);
		});
	};

//#endregion
//#region packages/packages/core/editor-widget-creation/src/components/create-widget.tsx
	var CREATE_WIDGET_EVENT = "elementor/editor/create-widget";
	var ANGIE_MODAL_PROMOTION_IMAGE_URL = "https://assets.elementor.com/packages/v1/images/angie-top-bar-promotion-modal-0926.png";
	var ANGIE_CTA_CLICKED_EVENT = "ai_widget_cta_clicked";
	var ANGIE_INSTALL_STARTED_EVENT = "angie_install_started";
	var ANGIE_INSTALL_COMPLETED_EVENT = "angie_install_completed";
	var ANGIE_INSTALL_ABANDONED_EVENT = "angie_install_abandoned";
	function CreateWidgetModal({ prompt, entryPoint, onClose }) {
		const [installState, setInstallState] = (0, react.useState)("idle");
		const [agreedToTerms, setAgreedToTerms] = (0, react.useState)(false);
		const handleClose = () => {
			if (installState === "installing") return;
			(0, _elementor_events.trackEvent)({
				eventName: ANGIE_INSTALL_ABANDONED_EVENT,
				abandon_step: installState === "error" ? "install_error" : "install_modal",
				trigger_source: entryPoint
			});
			onClose();
		};
		const handleInstall = async () => {
			setInstallState("installing");
			(0, _elementor_events.trackEvent)({
				eventName: ANGIE_INSTALL_STARTED_EVENT,
				trigger_source: entryPoint
			});
			const [result] = await Promise.all([(0, _elementor_editor_mcp.installAngiePlugin)(), (0, _elementor_editor_mcp.saveAngieConsent)()]);
			if (!result.success) {
				setInstallState("error");
				return;
			}
			(0, _elementor_events.trackEvent)({
				eventName: ANGIE_INSTALL_COMPLETED_EVENT,
				trigger_source: entryPoint
			});
			(0, _elementor_editor_mcp.redirectToAppAdmin)(prompt);
		};
		const handleFallbackInstall = () => {
			(0, _elementor_editor_mcp.redirectToInstallation)(prompt);
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.ThemeProvider, null, /* @__PURE__ */ react.createElement(_elementor_ui.Dialog, {
			fullWidth: true,
			maxWidth: "md",
			open: true,
			onClose: handleClose
		}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			"aria-label": (0, _wordpress_i18n.__)("Close", "elementor"),
			onClick: handleClose,
			sx: {
				position: "absolute",
				right: 8,
				top: 8,
				zIndex: 1
			}
		}, /* @__PURE__ */ react.createElement(_elementor_icons.XIcon, null)), /* @__PURE__ */ react.createElement(_elementor_ui.DialogContent, { sx: {
			p: 0,
			overflow: "hidden"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			sx: { height: 400 }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Image, {
			sx: {
				height: "100%",
				aspectRatio: "1 / 1",
				objectFit: "cover",
				objectPosition: "right center"
			},
			src: ANGIE_MODAL_PROMOTION_IMAGE_URL
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			justifyContent: "space-between",
			p: 4
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			gap: 2.5,
			justifyContent: "center",
			sx: {
				flex: 1,
				paddingInlineEnd: 2.5
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "h4",
			fontWeight: 600,
			color: "text.secondary"
		}, installState === "error" ? (0, _wordpress_i18n.__)("Installation failed", "elementor") : /* @__PURE__ */ react.createElement(react.Fragment, null, (0, _wordpress_i18n.__)("Pages, layouts,", "elementor"), /* @__PURE__ */ react.createElement("br", null), (0, _wordpress_i18n.__)("widgets and more", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			fontWeight: 500
		}, installState === "error" ? (0, _wordpress_i18n.__)("We couldn't install Angie automatically. Click below to install it manually.", "elementor") : (0, _wordpress_i18n.__)("Ask Angie to build you full pages, custom widgets, snippets, and code directly in Elementor. Install and activate Angie once on this site to start building.", "elementor")), installState !== "error" && /* @__PURE__ */ react.createElement(_elementor_ui.FormControlLabel, {
			control: /* @__PURE__ */ react.createElement(_elementor_ui.Checkbox, {
				size: "small",
				checked: agreedToTerms,
				onChange: (_e, checked) => setAgreedToTerms(checked)
			}),
			label: /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
				variant: "body2",
				color: "text.secondary"
			}, interpolateLinks((0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("By installing, you agree to our %1$s & %2$s.", "elementor"), "{{terms}}", "{{privacy}}"), {
				terms: {
					label: (0, _wordpress_i18n.__)("Terms", "elementor"),
					href: "https://elementor.com/terms/angie-terms-conditions/"
				},
				privacy: {
					label: (0, _wordpress_i18n.__)("Privacy Policy", "elementor"),
					href: "https://elementor.com/about/privacy/"
				}
			}))
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			justifyContent: "flex-end"
		}, installState === "error" ? /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			color: "accent",
			onClick: handleFallbackInstall
		}, (0, _wordpress_i18n.__)("Install Manually", "elementor")) : /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			color: "accent",
			onClick: handleInstall,
			disabled: installState === "installing" || !agreedToTerms,
			startIcon: installState === "installing" ? /* @__PURE__ */ react.createElement(_elementor_ui.CircularProgress, {
				size: 18,
				color: "inherit"
			}) : void 0
		}, installState === "installing" ? (0, _wordpress_i18n.__)("Installing…", "elementor") : (0, _wordpress_i18n.__)("Install and activate", "elementor"))))))));
	}
	function CreateWidget() {
		const [modalData, setModalData] = (0, react.useState)(null);
		(0, react.useEffect)(() => {
			const handleShow = (event) => {
				const customEvent = event;
				const hasAngieInstalled = (0, _elementor_editor_mcp.isAngieAvailable)();
				(0, _elementor_events.trackEvent)({
					eventName: ANGIE_CTA_CLICKED_EVENT,
					entry_point: customEvent.detail.entry_point,
					has_angie_installed: hasAngieInstalled
				});
				if (hasAngieInstalled) {
					(0, _elementor_editor_mcp.sendPromptToAngie)(customEvent.detail?.prompt);
					return;
				}
				setModalData(customEvent.detail);
			};
			window.addEventListener(CREATE_WIDGET_EVENT, handleShow);
			return () => {
				window.removeEventListener(CREATE_WIDGET_EVENT, handleShow);
			};
		}, []);
		if (!modalData) return null;
		return /* @__PURE__ */ react.createElement(CreateWidgetModal, {
			prompt: modalData.prompt,
			entryPoint: modalData.entry_point,
			onClose: () => setModalData(null)
		});
	}

//#endregion
//#region packages/packages/core/editor-widget-creation/src/init.ts
	function init() {
		(0, _elementor_editor.injectIntoTop)({
			id: "create-widget",
			component: CreateWidget
		});
	}

//#endregion
//#region packages/packages/core/editor-widget-creation/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({ init: () => init });

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorWidgetCreation = src_exports;

//#endregion
})(elementorV2.editor, React, elementorV2.editorMcp, elementorV2.editorUi, elementorV2.events, elementorV2.icons, elementorV2.ui, wp.i18n);
window.elementorV2.editorWidgetCreation?.init?.();
//# sourceMappingURL=editor-widget-creation.js.map