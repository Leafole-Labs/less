(function(_elementor_locations, _elementor_menus, react, _elementor_icons, _elementor_ui, _elementor_editor, _elementor_editor_documents, _wordpress_i18n, _elementor_editor_current_user, _elementor_editor_ui, _elementor_events, _elementor_editor_v1_adapters, _elementor_http_client, _elementor_editor_mcp, _elementor_editor_responsive) {

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

//#region packages/packages/core/editor-app-bar/src/contexts/menu-context.tsx
	var MenuContext = (0, react.createContext)({ type: "toolbar" });
	function MenuContextProvider({ type, popupState, children }) {
		return /* @__PURE__ */ react.createElement(MenuContext.Provider, { value: {
			type,
			popupState
		} }, children);
	}
	function useMenuContext() {
		return (0, react.useContext)(MenuContext);
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/ui/popover-menu-item.tsx
	var DirectionalArrowIcon = (0, _elementor_ui.withDirection)(_elementor_icons.ArrowUpRightIcon);
	var DirectionalChevronIcon = (0, _elementor_ui.withDirection)(_elementor_icons.ChevronRightIcon);
	function PopoverMenuItem({ text, icon, onClick, href, target, disabled, isGroupParent, showExternalLinkIcon, ...props }) {
		const isExternalLink = href && target === "_blank" && showExternalLinkIcon;
		return /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, {
			...props,
			disabled,
			onClick,
			component: href ? "a" : "div",
			href,
			target,
			sx: { "&:hover": { color: "text.primary" } }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemIcon, null, icon), /* @__PURE__ */ react.createElement(_elementor_ui.ListItemText, { primary: text }), isExternalLink && /* @__PURE__ */ react.createElement(DirectionalArrowIcon, null), isGroupParent && /* @__PURE__ */ react.createElement(DirectionalChevronIcon, null));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/ui/toolbar-menu-item.tsx
	function ToolbarMenuItem({ title, ...props }) {
		return /* @__PURE__ */ react.createElement(Tooltip$3, { title }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			component: "span",
			"aria-label": void 0
		}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			...props,
			"aria-label": title,
			size: "medium",
			sx: {
				"& svg": {
					fontSize: "1.25rem",
					height: "1em",
					width: "1em"
				},
				"&:hover": { color: "text.primary" }
			}
		})));
	}
	function Tooltip$3(props) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			PopperProps: { sx: { "&.MuiTooltip-popper .MuiTooltip-tooltip.MuiTooltip-tooltipPlacementBottom": { mt: 2 } } },
			...props
		});
	}
	__name(Tooltip$3, "Tooltip");

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/actions/action.tsx
	function Action({ icon: Icon, title, visible = true, ...props }) {
		const { type } = useMenuContext();
		if (!visible) return null;
		return type === "toolbar" ? /* @__PURE__ */ react.createElement(ToolbarMenuItem, {
			title,
			...props
		}, /* @__PURE__ */ react.createElement(Icon, null)) : /* @__PURE__ */ react.createElement(PopoverMenuItem, {
			...props,
			text: title,
			icon: /* @__PURE__ */ react.createElement(Icon, null)
		});
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/actions/link.tsx
	function Link({ icon: Icon, title, visible = true, showExternalLinkIcon = false, ...props }) {
		const { type } = useMenuContext();
		if (!visible) return null;
		return type === "toolbar" ? /* @__PURE__ */ react.createElement(ToolbarMenuItem, {
			title,
			...props
		}, /* @__PURE__ */ react.createElement(Icon, null)) : /* @__PURE__ */ react.createElement(PopoverMenuItem, {
			...props,
			text: title,
			icon: /* @__PURE__ */ react.createElement(Icon, null),
			showExternalLinkIcon
		});
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/ui/toolbar-menu-toggle-item.tsx
	function ToolbarMenuToggleItem({ title, onClick, ...props }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, { title }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			component: "span",
			"aria-label": void 0
		}, /* @__PURE__ */ react.createElement(_elementor_ui.ToggleButton, {
			...props,
			onChange: onClick,
			"aria-label": title,
			size: "small",
			sx: {
				border: 0,
				"&.Mui-disabled": { border: 0 },
				"& svg": {
					fontSize: "1.25rem",
					height: "1em",
					width: "1em"
				}
			}
		})));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/actions/toggle-action.tsx
	function ToggleAction({ icon: Icon, title, value, visible = true, ...props }) {
		const { type } = useMenuContext();
		if (!visible) return null;
		return type === "toolbar" ? /* @__PURE__ */ react.createElement(ToolbarMenuToggleItem, {
			value: value || title,
			title,
			...props
		}, /* @__PURE__ */ react.createElement(Icon, null)) : /* @__PURE__ */ react.createElement(PopoverMenuItem, {
			...props,
			text: title,
			icon: /* @__PURE__ */ react.createElement(Icon, null)
		});
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/locations.ts
	var { inject: injectIntoPageIndication, Slot: PageIndicationSlot } = (0, _elementor_locations.createLocation)();
	var { inject: injectIntoResponsive, Slot: ResponsiveSlot } = (0, _elementor_locations.createLocation)();
	var { inject: injectIntoPrimaryAction, Slot: PrimaryActionSlot } = (0, _elementor_locations.createLocation)();
	var components = {
		Action,
		ToggleAction,
		Link
	};
	var mainMenu = (0, _elementor_menus.createMenu)({
		groups: ["help", "exits"],
		components
	});
	var toolsMenu = (0, _elementor_menus.createMenu)({ components });
	var utilitiesMenu = (0, _elementor_menus.createMenu)({ components });
	var integrationsMenu = (0, _elementor_menus.createMenu)({ components });

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/documents-save/locations.ts
	var documentOptionsMenu = (0, _elementor_menus.createMenu)({
		groups: ["save"],
		components: {
			Action,
			ToggleAction,
			Link
		}
	});

//#endregion
//#region packages/packages/core/editor-app-bar/src/constants.ts
	var DEFAULT_MAX_TOOLBAR_ACTIONS = {
		tools: 6,
		utilities: 5
	};

//#endregion
//#region packages/packages/core/editor-app-bar/src/contexts/app-bar-size-context.tsx
	var AppBarSizeContext = (0, react.createContext)(DEFAULT_MAX_TOOLBAR_ACTIONS);
	function AppBarSizeProvider({ value, children }) {
		return /* @__PURE__ */ react.createElement(AppBarSizeContext.Provider, { value }, children);
	}
	function useMaxToolbarActions() {
		return (0, react.useContext)(AppBarSizeContext);
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/hooks/use-container-width.ts
	function useContainerWidth(ref) {
		const [width, setWidth] = (0, react.useState)(0);
		(0, react.useEffect)(() => {
			const element = ref.current;
			if (!element || typeof ResizeObserver === "undefined") return;
			const observer = new ResizeObserver((entries) => {
				const entry = entries[0];
				if (entry) setWidth(entry.contentRect.width);
			});
			setWidth(element.getBoundingClientRect().width);
			observer.observe(element);
			return () => observer.disconnect();
		}, [ref]);
		return width;
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/utils/get-max-toolbar-actions.ts
	var BREAKPOINTS = [
		{
			minWidth: 1200,
			...DEFAULT_MAX_TOOLBAR_ACTIONS
		},
		{
			minWidth: 950,
			tools: 3,
			utilities: 2
		},
		{
			minWidth: 800,
			tools: 1,
			utilities: 0
		},
		{
			minWidth: 0,
			tools: 0,
			utilities: 0
		}
	];
	function getMaxToolbarActions(containerWidth) {
		if (!containerWidth) return DEFAULT_MAX_TOOLBAR_ACTIONS;
		const breakpoint = BREAKPOINTS.find(({ minWidth }) => containerWidth >= minWidth) ?? BREAKPOINTS.at(-1);
		return {
			tools: breakpoint?.tools ?? 0,
			utilities: breakpoint?.utilities ?? 0
		};
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/ui/popover-menu.tsx
	function PopoverMenu({ children, popupState, ...props }) {
		return /* @__PURE__ */ react.createElement(MenuContextProvider, {
			type: "popover",
			popupState
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Menu, {
			PaperProps: { sx: { mt: 1.5 } },
			...props,
			MenuListProps: {
				component: "div",
				dense: true
			}
		}, children));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/ui/toolbar-logo.tsx
	var ElementorLogo = (props) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.SvgIcon, {
			viewBox: "0 0 32 32",
			...props
		}, /* @__PURE__ */ react.createElement("g", null, /* @__PURE__ */ react.createElement("circle", {
			cx: "16",
			cy: "16",
			r: "16"
		}), /* @__PURE__ */ react.createElement("path", { d: "M11.7 9H9V22.3H11.7V9Z" }), /* @__PURE__ */ react.createElement("path", { d: "M22.4 9H9V11.7H22.4V9Z" }), /* @__PURE__ */ react.createElement("path", { d: "M22.4 14.4004H9V17.1004H22.4V14.4004Z" }), /* @__PURE__ */ react.createElement("path", { d: "M22.4 19.6992H9V22.3992H22.4V19.6992Z" })));
	};
	var StyledToggleButton = (0, _elementor_ui.styled)(_elementor_ui.ToggleButton)(({ theme }) => ({
		padding: 0,
		border: 0,
		color: theme.palette.text.primary,
		"&.MuiToggleButton-root:hover": { backgroundColor: "initial" },
		"&.MuiToggleButton-root.Mui-selected": { backgroundColor: "initial" }
	}));
	var StyledElementorLogo = (0, _elementor_ui.styled)(ElementorLogo, { shouldForwardProp: (prop) => prop !== "showMenuIcon" })(({ theme, showMenuIcon }) => ({ "& path": {
		fill: theme.palette.background.default,
		transition: "all 0.2s linear",
		transformOrigin: "bottom left",
		"&:first-of-type": {
			transitionDelay: !showMenuIcon && "0.2s",
			transform: showMenuIcon && "translateY(-9px) scaleY(0)"
		},
		"&:not(:first-of-type)": { transform: !showMenuIcon && `translateX(${theme.direction === "rtl" ? "4" : "9"}px) scaleX(0.6)` },
		"&:nth-of-type(2)": { transitionDelay: showMenuIcon ? "0" : "0.2s" },
		"&:nth-of-type(3)": { transitionDelay: "0.1s" },
		"&:nth-of-type(4)": { transitionDelay: showMenuIcon ? "0.2s" : "0" }
	} }));
	function ToolbarLogo(props) {
		const [isHoverState, setIsHoverState] = (0, react.useState)(false);
		const showMenuIcon = props.selected || isHoverState;
		return /* @__PURE__ */ react.createElement(StyledToggleButton, {
			...props,
			value: "selected",
			size: "large",
			onMouseEnter: () => setIsHoverState(true),
			onMouseLeave: () => setIsHoverState(false)
		}, /* @__PURE__ */ react.createElement(StyledElementorLogo, {
			fontSize: "large",
			showMenuIcon,
			titleAccess: (0, _wordpress_i18n.__)("Elementor Logo", "elementor")
		}));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/locations/main-menu-location.tsx
	var { useMenuItems: useMenuItems$4 } = mainMenu;
	function MainMenuLocation() {
		const menuItems = useMenuItems$4();
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			popupId: "elementor-v2-app-bar-main-menu"
		});
		const toolbarLogoProps = (0, _elementor_ui.bindTrigger)(popupState);
		const onToolbarClick = (e) => {
			const extendedWindow = window;
			const config = extendedWindow?.elementorCommon?.eventsManager?.config;
			if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar.elementorLogoDropdown, {
				location: config.locations.topBar,
				secondaryLocation: config.secondaryLocations.eLogoMenu,
				trigger: config.triggers.dropdownClick,
				element: config.elements.buttonIcon
			});
			toolbarLogoProps.onClick(e);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			sx: { paddingInlineStart: 3 },
			direction: "row",
			alignItems: "center"
		}, /* @__PURE__ */ react.createElement(ToolbarLogo, {
			...toolbarLogoProps,
			onClick: onToolbarClick,
			selected: popupState.isOpen
		}), /* @__PURE__ */ react.createElement(PopoverMenu, {
			onClick: popupState.close,
			...(0, _elementor_ui.bindMenu)(popupState),
			marginThreshold: 8
		}, menuItems.default.map(({ MenuItem, id }) => /* @__PURE__ */ react.createElement(MenuItem, { key: id })), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), menuItems.help.map(({ MenuItem, id }) => /* @__PURE__ */ react.createElement(MenuItem, { key: id })), menuItems.exits.map(({ MenuItem, id }) => /* @__PURE__ */ react.createElement(MenuItem, { key: id }))));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/locations/page-indication-location.tsx
	function PageIndicationLocation() {
		return /* @__PURE__ */ react.createElement(PageIndicationSlot, null);
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/locations/primary-action-location.tsx
	function PrimaryActionLocation() {
		return /* @__PURE__ */ react.createElement(PrimaryActionSlot, null);
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/locations/responsive-location.tsx
	function ResponsiveLocation() {
		return /* @__PURE__ */ react.createElement(ResponsiveSlot, null);
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/angie/angie-consts.ts
	var ANGIE_GUIDE_TOGGLE_EVENT = "elementor/editor/toggle-angie-guide";
	var CREATE_WIDGET_EVENT = "elementor/editor/create-widget";
	var ANGIE_BUTTON_ARIA_LABEL = (0, _wordpress_i18n.__)("Angie", "elementor");
	var ANGIE_LEARN_MORE_URL = "https://go.elementor.com/angie-learn-more";
	var ANGIE_DESCRIPTION = (0, _wordpress_i18n.__)("Angie lets you generate custom widgets, sections, and code using simple instructions.", "elementor");
	var AI_WIDGET_CTA_VIEWED_EVENT = "ai_widget_cta_viewed";
	var ANGIE_TOP_BAR_PROMOTION_IMAGE_URL = "https://assets.elementor.com/packages/v1/images/angie-top-bar-promotion-0926.svg";
	var ANGIE_TOP_BAR_DESCRIPTION = (0, _wordpress_i18n.__)("Describe what you want to build in plain language and Angie generates it in native Elementor structure, fully editable and customizable.", "elementor");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/angie/components/angie-guide-card.tsx
	function AngieGuideCard({ imageUrl, description, learnMoreUrl, onInstall, onClose }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.ClickAwayListener, { onClickAway: onClose }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			sx: { width: 296 },
			"data-testid": "e-angie-guide-card"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			position: "relative",
			p: 1.5
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Image, {
			src: imageUrl,
			alt: (0, _wordpress_i18n.__)("Angie", "elementor"),
			sx: {
				width: "100%",
				maxHeight: 200,
				objectFit: "cover",
				objectPosition: "center top",
				borderRadius: 1,
				display: "block"
			}
		}), /* @__PURE__ */ react.createElement(_elementor_ui.CloseButton, {
			sx: {
				position: "absolute",
				top: 15,
				insetInlineEnd: 15,
				color: "common.white",
				filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.6))",
				"&:hover": {
					bgcolor: "rgba(255,255,255,0.2)",
					color: "common.white"
				}
			},
			slotProps: { icon: { fontSize: "small" } },
			onClick: onClose
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			px: 2,
			pt: .5,
			pb: .5
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "subtitle2" }, (0, _wordpress_i18n.__)("Generate full pages with AI", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			px: 2,
			pt: .5,
			pb: 1.5
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "secondary"
		}, description)), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			justifyContent: "flex-end",
			gap: 1,
			pb: 1.5,
			px: 2
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "text",
			size: "small",
			color: "secondary",
			onClick: () => {
				window.open(learnMoreUrl, "_blank", "noopener,noreferrer");
				onClose();
			}
		}, (0, _wordpress_i18n.__)("Learn More", "elementor")), onInstall && /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			size: "small",
			color: "primary",
			onClick: onInstall
		}, (0, _wordpress_i18n.__)("Build with Angie", "elementor")))));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/angie/hooks/use-auto-show.ts
	function useAutoShow() {
		(0, react.useEffect)(() => {
			if (!window.elementor?.config?.angie?.autoShow) return;
			const id = setTimeout(() => {
				window.dispatchEvent(new CustomEvent(CREATE_WIDGET_EVENT, { detail: { entry_point: "auto_show" } }));
			}, 0);
			return () => clearTimeout(id);
		}, []);
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/angie/components/angie-guide-location.tsx
	function AngieGuideLocation() {
		useAutoShow();
		const [anchorEl, setAnchorEl] = (0, react.useState)(null);
		const { dispatchEvent } = (0, _elementor_events.useMixpanel)();
		const { isAdmin } = (0, _elementor_editor_current_user.useCurrentUserCapabilities)();
		const isOpen = Boolean(anchorEl);
		(0, react.useEffect)(() => {
			const handleToggle = () => {
				setAnchorEl((prev) => {
					if (prev) return null;
					return document.querySelector(`[aria-label="${ANGIE_BUTTON_ARIA_LABEL}"]`);
				});
			};
			window.addEventListener(ANGIE_GUIDE_TOGGLE_EVENT, handleToggle);
			return () => {
				window.removeEventListener(ANGIE_GUIDE_TOGGLE_EVENT, handleToggle);
			};
		}, []);
		const handleClose = () => setAnchorEl(null);
		const handleInstall = async () => {
			dispatchEvent?.(AI_WIDGET_CTA_VIEWED_EVENT, { entry_point: "top_bar_icon" });
			window.dispatchEvent(new CustomEvent(CREATE_WIDGET_EVENT, { detail: { entry_point: "top_bar_icon" } }));
			handleClose();
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.ThemeProvider, null, /* @__PURE__ */ react.createElement(_elementor_ui.Infotip, {
			content: /* @__PURE__ */ react.createElement(AngieGuideCard, {
				imageUrl: ANGIE_TOP_BAR_PROMOTION_IMAGE_URL,
				description: ANGIE_TOP_BAR_DESCRIPTION,
				learnMoreUrl: ANGIE_LEARN_MORE_URL,
				onInstall: isAdmin ? handleInstall : void 0,
				onClose: handleClose
			}),
			placement: "bottom-start",
			open: isOpen,
			disableHoverListener: true,
			PopperProps: {
				anchorEl,
				modifiers: [{
					name: "offset",
					options: { offset: [-4, -4] }
				}]
			}
		}, /* @__PURE__ */ react.createElement("span", { style: { display: "contents" } })));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/ui/toolbar-menu.tsx
	function ToolbarMenu({ children, ...props }) {
		return /* @__PURE__ */ react.createElement(MenuContextProvider, { type: "toolbar" }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			sx: { px: 1.5 },
			spacing: 1.5,
			direction: "row",
			alignItems: "center",
			...props
		}, children));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/ui/toolbar-menu-more.tsx
	function ToolbarMenuMore({ children, id }) {
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			popupId: id
		});
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(ToolbarMenuItem, {
			...(0, _elementor_ui.bindTrigger)(popupState),
			title: (0, _wordpress_i18n.__)("More", "elementor")
		}, /* @__PURE__ */ react.createElement(_elementor_icons.DotsVerticalIcon, null)), /* @__PURE__ */ react.createElement(PopoverMenu, {
			onClick: popupState.close,
			...(0, _elementor_ui.bindMenu)(popupState)
		}, children));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/locations/integrations-menu-location.tsx
	var { useMenuItems: useMenuItems$3 } = integrationsMenu;
	function IntegrationsMenuLocation() {
		const menuItems = useMenuItems$3();
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			popupId: "elementor-v2-app-bar-integrations"
		});
		if (menuItems.default.length === 0) return null;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(ToolbarMenuItem, {
			...(0, _elementor_ui.bindTrigger)(popupState),
			title: (0, _wordpress_i18n.__)("Integrations", "elementor")
		}, /* @__PURE__ */ react.createElement(_elementor_icons.PlugIcon, null)), /* @__PURE__ */ react.createElement(PopoverMenu, {
			onClick: popupState.close,
			...(0, _elementor_ui.bindMenu)(popupState),
			marginThreshold: 8,
			open: popupState.isOpen
		}, menuItems.default.map(({ MenuItem: IntegrationsMenuItem, id }) => /* @__PURE__ */ react.createElement(IntegrationsMenuItem, { key: id }))));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/feedback/feedback-consts.ts
	var EXPERIMENT_NAME = "in_editor_feedback";
	var FEEDBACK_TOGGLE_EVENT = "elementor/open-feedback";

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/locations/send-feedback-popup-location.tsx
	var checkIfUserIsConnected = () => {
		const extendedWindow = window;
		return extendedWindow?.elementorCommon?.config.library_connect.is_connected || extendedWindow?.elementorPro?.config.isActive;
	};
	function SendFeedbackPopupLocation() {
		const isActive = (0, _elementor_editor_v1_adapters.isExperimentActive)(EXPERIMENT_NAME);
		const extendedWindow = window;
		const [isUserConnected, setIsUserConnected] = (0, react.useState)(checkIfUserIsConnected());
		const connectUrl = extendedWindow?.elementor?.config.user.top_bar.connect_url;
		const [feedbackContent, setFeedbackContent] = (0, react.useState)("");
		const [feedbackResult, setFeedbackResult] = (0, react.useState)(null);
		const [submitDisabled, setSubmitDisabled] = (0, react.useState)(true);
		const { dispatchEvent: trackEvent = (...args) => void 0 } = (0, _elementor_events.useMixpanel)();
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "dialog",
			popupId: FEEDBACK_TOGGLE_EVENT
		});
		const [isFetching, setIsFetching] = (0, react.useState)(false);
		(0, react.useEffect)(() => {
			const handler = () => {
				popupState.toggle();
				setIsUserConnected(checkIfUserIsConnected());
				setFeedbackResult(null);
				trackEvent("feedback_modal_opened", {
					source: "top_bar",
					context: "v4_beta"
				});
			};
			window.addEventListener(FEEDBACK_TOGGLE_EVENT, handler);
			return () => {
				window.removeEventListener(FEEDBACK_TOGGLE_EVENT, handler);
			};
		}, [popupState, trackEvent]);
		(0, react.useEffect)(() => {
			setSubmitDisabled(feedbackContent.trim().length < 10 || !isUserConnected || isFetching);
		}, [
			feedbackContent,
			feedbackResult,
			isUserConnected,
			isFetching
		]);
		const handleClose = () => {
			popupState.close();
			trackEvent("feedback_modal_closed", { feedback_text: feedbackContent });
		};
		const handleStartAnother = () => {
			setFeedbackContent("");
			setFeedbackResult(null);
		};
		const submitFeedback = () => {
			setIsFetching(true);
			(0, _elementor_http_client.httpService)().post("elementor/v1/feedback/submit", { description: feedbackContent.trim() }).then((response) => {
				setFeedbackResult({
					message: response.data.message,
					success: response.data.success
				});
				if (!response.data.success && response.data.code.toString() === "401" || response.data.code.toString() === "403") setIsUserConnected(false);
				trackEvent(response.data.success ? "feedback_submitted" : "feedback_error", {
					feedback_length: feedbackContent.length,
					error_type: response.data.success ? void 0 : "server",
					error_message: response.data.success ? void 0 : response.data.message
				});
			}).finally(() => setIsFetching(false));
		};
		if (!isActive) return null;
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.ThemeProvider, null, /* @__PURE__ */ react.createElement(_elementor_ui.Popover, {
			...(0, _elementor_ui.bindDialog)(popupState),
			onClose: () => handleClose()
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Dialog, { open: popupState.isOpen }, /* @__PURE__ */ react.createElement(_elementor_ui.DialogHeader, { style: {
			width: "100%",
			minWidth: "35rem"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.DialogTitle, { style: { width: "100%" } }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			display: "flex",
			direction: "row",
			alignItems: "center",
			justifyContent: "space-between",
			width: "100%"
		}, (0, _wordpress_i18n.__)("Submit Feedback", "elementor"), /* @__PURE__ */ react.createElement(_elementor_ui.CloseButton, { onClick: popupState.close })))), /* @__PURE__ */ react.createElement(_elementor_ui.DialogContent, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "column",
			gap: 2
		}, isUserConnected ? /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			autofocus: true,
			placeholder: (0, _wordpress_i18n.__)("E.g. Can you add ABC features? I want to do ABC and it’s important because …", "elementor"),
			fullwith: true,
			label: (0, _wordpress_i18n.__)("Your Feedback", "elementor"),
			multiline: true,
			id: "elementor-feedback-usercontent",
			rows: 6,
			cols: 80,
			disabled: isFetching || feedbackResult?.success,
			onChange: (event) => setFeedbackContent(event.target.value),
			value: feedbackContent
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			justifyContent: "flex-end",
			alignItems: "center",
			gap: 2
		}, feedbackResult && /* @__PURE__ */ react.createElement(react.Fragment, null, feedbackResult.success ? /* @__PURE__ */ react.createElement(_elementor_icons.CheckIcon, { color: "success" }) : /* @__PURE__ */ react.createElement(_elementor_icons.AlertCircleIcon, { color: "error" }), feedbackResult.message), feedbackResult?.success ? /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "text",
			onClick: () => handleStartAnother()
		}, (0, _wordpress_i18n.__)("Submit Another Feedback", "elementor")) : /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			disabled: submitDisabled,
			onClick: submitFeedback,
			variant: "contained",
			color: "primary",
			size: "small"
		}, (0, _wordpress_i18n.__)("Submit", "elementor")))) : /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			color: "primary",
			size: "large",
			href: connectUrl,
			target: "_blank",
			rel: "noopener",
			onClick: popupState.close
		}, (0, _wordpress_i18n.__)("Connect to Elementor", "elementor"))))))));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/locations/tools-menu-location.tsx
	var { useMenuItems: useMenuItems$2 } = toolsMenu;
	function ToolsMenuLocation() {
		const menuItems = useMenuItems$2();
		const { tools: maxToolbarActions } = useMaxToolbarActions();
		const toolbarMenuItems = menuItems.default.slice(0, maxToolbarActions);
		const popoverMenuItems = menuItems.default.slice(maxToolbarActions);
		return /* @__PURE__ */ react.createElement(ToolbarMenu, null, toolbarMenuItems.map(({ MenuItem, id }) => /* @__PURE__ */ react.createElement(MenuItem, { key: id })), /* @__PURE__ */ react.createElement(AngieGuideLocation, null), /* @__PURE__ */ react.createElement(SendFeedbackPopupLocation, null), /* @__PURE__ */ react.createElement(IntegrationsMenuLocation, null), popoverMenuItems.length > 0 && /* @__PURE__ */ react.createElement(ToolbarMenuMore, { id: "elementor-editor-app-bar-tools-more" }, popoverMenuItems.map(({ MenuItem, id }) => /* @__PURE__ */ react.createElement(MenuItem, { key: id }))));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/locations/utilities-menu-location.tsx
	var { useMenuItems: useMenuItems$1 } = utilitiesMenu;
	function UtilitiesMenuLocation() {
		const menuItems = useMenuItems$1();
		const { utilities: maxToolbarActions } = useMaxToolbarActions();
		const shouldUsePopover = menuItems.default.length > maxToolbarActions;
		const toolbarMenuItems = shouldUsePopover ? menuItems.default.slice(0, maxToolbarActions) : menuItems.default;
		const popoverMenuItems = shouldUsePopover ? menuItems.default.slice(maxToolbarActions) : [];
		return /* @__PURE__ */ react.createElement(ToolbarMenu, null, popoverMenuItems.length > 0 && /* @__PURE__ */ react.createElement(ToolbarMenuMore, { id: "elementor-editor-app-bar-utilities-more" }, popoverMenuItems.map(({ MenuItem, id }) => /* @__PURE__ */ react.createElement(MenuItem, { key: id }))), toolbarMenuItems.map(({ MenuItem, id }) => /* @__PURE__ */ react.createElement(react.Fragment, { key: id }, /* @__PURE__ */ react.createElement(MenuItem, null))));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/components/app-bar.tsx
	function AppBar() {
		const document = (0, _elementor_editor_documents.__useActiveDocument)();
		const containerRef = (0, react.useRef)(null);
		const maxToolbarActions = getMaxToolbarActions(useContainerWidth(containerRef));
		return /* @__PURE__ */ react.createElement(_elementor_ui.ThemeProvider, { colorScheme: "dark" }, /* @__PURE__ */ react.createElement(_elementor_ui.AppBar, { position: "sticky" }, /* @__PURE__ */ react.createElement(_elementor_ui.Toolbar, {
			disableGutters: true,
			variant: "dense",
			sx: { overflowX: "auto" }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			ref: containerRef,
			display: "grid",
			gridTemplateColumns: "minmax(0, 1fr) auto minmax(0, 1fr)",
			flexGrow: 1,
			minWidth: `${800}px`
		}, /* @__PURE__ */ react.createElement(AppBarSizeProvider, { value: maxToolbarActions }, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			flexWrap: "nowrap",
			sx: {
				minWidth: 0,
				overflow: "hidden"
			}
		}, /* @__PURE__ */ react.createElement(MainMenuLocation, null), document?.permissions?.allowAddingWidgets && /* @__PURE__ */ react.createElement(ToolsMenuLocation, null)), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			justifyContent: "center"
		}, /* @__PURE__ */ react.createElement(ToolbarMenu, { spacing: 1.5 }, /* @__PURE__ */ react.createElement(_elementor_ui.Divider, { orientation: "vertical" }), /* @__PURE__ */ react.createElement(PageIndicationLocation, null), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, { orientation: "vertical" }), /* @__PURE__ */ react.createElement(ResponsiveLocation, null), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, { orientation: "vertical" }))), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			justifyContent: "flex-end",
			flexWrap: "nowrap",
			sx: {
				minWidth: 0,
				overflow: "hidden"
			}
		}, /* @__PURE__ */ react.createElement(UtilitiesMenuLocation, null), /* @__PURE__ */ react.createElement(PrimaryActionLocation, null)))))));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/hooks/use-is-angie-available.ts
	function useIsAngieAvailable() {
		const [available, setAvailable] = (0, react.useState)(() => (0, _elementor_editor_mcp.isAngieAvailable)());
		(0, react.useEffect)(() => {
			if (available) return;
			if ((0, _elementor_editor_mcp.isAngieAvailable)()) {
				setAvailable(true);
				return;
			}
			const observer = new MutationObserver(() => {
				if ((0, _elementor_editor_mcp.isAngieAvailable)()) {
					observer.disconnect();
					setAvailable(true);
				}
			});
			observer.observe(document.body, {
				childList: true,
				subtree: true
			});
			return () => observer.disconnect();
		}, [available]);
		return available;
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/angie/hooks/use-action-props.ts
	function useActionProps$11() {
		const visible = !useIsAngieAvailable();
		(0, react.useEffect)(() => {
			if (!visible) return;
			(0, _elementor_events.trackEvent)({
				eventName: AI_WIDGET_CTA_VIEWED_EVENT,
				entry_point: "top_bar_icon",
				has_angie_installed: false
			});
		}, [visible]);
		return {
			title: (0, _wordpress_i18n.__)("Angie", "elementor"),
			icon: _elementor_icons.AngieIcon,
			onClick: () => {
				window.dispatchEvent(new CustomEvent(ANGIE_GUIDE_TOGGLE_EVENT));
			},
			selected: false,
			visible
		};
	}
	__name(useActionProps$11, "useActionProps");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/angie/index.ts
	function init$18() {
		toolsMenu.registerToggleAction({
			id: "toggle-angie",
			priority: 2,
			useProps: useActionProps$11
		});
	}
	__name(init$18, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/connect/hooks/use-connect-link-config.tsx
	var dispatchConnectClickEvent = (eventName) => {
		try {
			const extendedWindow = window;
			const config = extendedWindow?.elementorCommon?.eventsManager?.config;
			if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar[eventName], {
				location: config.locations.topBar,
				secondaryLocation: config.secondaryLocations.eLogoMenu,
				trigger: config.triggers.dropdownClick,
				element: config.elements.buttonIcon
			});
		} catch (error) {
			console.warn(error);
		}
	};
	function useConnectLinkConfig() {
		const extendedWindow = window;
		let isUserConnected = false;
		const isPro = extendedWindow?.elementor?.helpers.hasPro();
		let target = "_blank";
		if (isPro) isUserConnected = extendedWindow?.elementorPro?.config.isActive ?? false;
		else {
			isUserConnected = extendedWindow?.elementorCommon?.config.library_connect.is_connected ?? false;
			target = "_self";
		}
		const handleConnectClick = (0, react.useCallback)((event) => {
			event.preventDefault();
			if (extendedWindow.jQuery && extendedWindow.jQuery.fn?.elementorConnect) {
				const connectUrl = extendedWindow?.elementor?.config.user.top_bar.connect_url;
				const $tempButton = extendedWindow.jQuery("<a>");
				$tempButton?.attr("href", connectUrl)?.attr("target", "_blank")?.attr("rel", "opener")?.css("display", "none")?.appendTo("body");
				$tempButton.elementorConnect({ success: () => {
					dispatchConnectClickEvent("accountConnected");
					setTimeout(() => {
						extendedWindow.location.reload();
					}, 200);
				} });
				$tempButton[0].click();
				dispatchConnectClickEvent("connectAccount");
				setTimeout(() => {
					$tempButton.remove();
				}, 1e3);
			}
		}, [extendedWindow]);
		return isUserConnected ? {
			title: (0, _wordpress_i18n.__)("My Elementor", "elementor"),
			href: extendedWindow?.elementor?.config.user.top_bar.my_elementor_url,
			icon: _elementor_icons.UserIcon,
			target: "_blank"
		} : {
			title: (0, _wordpress_i18n.__)("Connect my account", "elementor"),
			href: extendedWindow?.elementor?.config.user.top_bar.connect_url,
			icon: _elementor_icons.UserIcon,
			target,
			onClick: handleConnectClick
		};
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/connect/index.ts
	function init$17() {
		mainMenu.registerLink({
			id: "app-bar-connect",
			group: "exits",
			priority: 10,
			useProps: useConnectLinkConfig
		});
	}
	__name(init$17, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/documents-preview/hooks/use-action-props.ts
	function useActionProps$10() {
		const document = (0, _elementor_editor_documents.__useActiveDocument)();
		return {
			icon: _elementor_icons.EyeIcon,
			title: (0, _wordpress_i18n.__)("Preview Changes", "elementor"),
			onClick: () => {
				const extendedWindow = window;
				const config = extendedWindow?.elementorCommon?.eventsManager?.config;
				if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar.previewPage, {
					location: config.locations.topBar,
					secondaryLocation: config.secondaryLocations["preview-page"],
					trigger: config.triggers.click,
					element: config.elements.buttonIcon
				});
				if (document) (0, _elementor_editor_v1_adapters.__privateRunCommand)("editor/documents/preview", {
					id: document.id,
					force: true
				});
			}
		};
	}
	__name(useActionProps$10, "useActionProps");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/documents-preview/index.ts
	function init$16() {
		utilitiesMenu.registerAction({
			id: "document-preview-button",
			priority: 30,
			useProps: useActionProps$10
		});
	}
	__name(init$16, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/documents-save/components/primary-action-menu.tsx
	var { useMenuItems } = documentOptionsMenu;
	var StyledPopoverMenu = (0, _elementor_ui.styled)(PopoverMenu)`
	& > .MuiPopover-paper > .MuiList-root {
		& > .MuiDivider-root {
			display: none;
		}

		& > *:not( .MuiDivider-root ):not( :last-of-type ) + .MuiDivider-root {
			display: block;
		}
	}
`;
	function PrimaryActionMenu(props) {
		const { save: saveActions, default: defaultActions } = useMenuItems();
		return /* @__PURE__ */ react.createElement(StyledPopoverMenu, {
			...props,
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "right"
			},
			marginThreshold: 4,
			PaperProps: { sx: { mt: .5 } }
		}, saveActions.map(({ MenuItem, id }, index) => [index > 0 && /* @__PURE__ */ react.createElement(_elementor_ui.Divider, { key: `${id}-divider` }), /* @__PURE__ */ react.createElement(MenuItem, { key: id })]), saveActions.length > 0 && defaultActions.length > 0 && /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), defaultActions.map(({ MenuItem, id }, index) => [index > 0 && /* @__PURE__ */ react.createElement(_elementor_ui.Divider, { key: `${id}-divider` }), /* @__PURE__ */ react.createElement(MenuItem, { key: id })]));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/documents-save/components/primary-action.tsx
	function PrimaryAction$1() {
		const document = (0, _elementor_editor_documents.__useActiveDocument)();
		const { save } = (0, _elementor_editor_documents.__useActiveDocumentActions)();
		const isEditMode = (0, _elementor_editor_v1_adapters.useEditMode)() === "edit";
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			popupId: "document-save-options"
		});
		if (!document) return null;
		const isPublishDisabled = !isEditMode || !isPublishEnabled(document);
		const isSaveOptionsDisabled = !isEditMode || document.type.value === "kit";
		const shouldShowSpinner = document.isSaving && !isPublishDisabled;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.ButtonGroup, {
			size: "large",
			variant: "contained"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			onClick: () => {
				const extendedWindow = window;
				const config = extendedWindow?.elementorCommon?.eventsManager?.config;
				if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar.publishButton, {
					location: config.locations.topBar,
					secondaryLocation: config.secondaryLocations["publish-button"],
					trigger: config.triggers.click,
					element: config.elements.mainCta
				});
				if (!document.isSaving) save();
			},
			sx: {
				height: "100%",
				borderRadius: 0,
				maxWidth: "158px",
				"&.MuiButtonBase-root.MuiButtonGroup-grouped": { minWidth: "110px" }
			},
			disabled: isPublishDisabled
		}, shouldShowSpinner ? /* @__PURE__ */ react.createElement(_elementor_ui.CircularProgress, {
			color: "inherit",
			size: "1.5em"
		}) : getLabel(document)), /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: (0, _wordpress_i18n.__)("Save Options", "elementor"),
			PopperProps: { sx: { "&.MuiTooltip-popper .MuiTooltip-tooltip.MuiTooltip-tooltipPlacementBottom": {
				mt: 1,
				mr: .25
			} } }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			component: "span",
			"aria-label": void 0
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			size: "small",
			...(0, _elementor_ui.bindTrigger)(popupState),
			sx: {
				px: 0,
				height: "100%",
				borderRadius: 0
			},
			disabled: isSaveOptionsDisabled,
			"aria-label": (0, _wordpress_i18n.__)("Save Options", "elementor")
		}, /* @__PURE__ */ react.createElement(_elementor_icons.ChevronDownIcon, null))))), /* @__PURE__ */ react.createElement(PrimaryActionMenu, {
			...(0, _elementor_ui.bindMenu)(popupState),
			onClick: popupState.close
		}));
	}
	__name(PrimaryAction$1, "PrimaryAction");
	function getLabel(document) {
		return document.userCan.publish ? (0, _wordpress_i18n.__)("Publish", "elementor") : (0, _wordpress_i18n.__)("Submit", "elementor");
	}
	function isPublishEnabled(document) {
		if (document.type.value === "kit") return false;
		return document.isDirty || document.status.value === "draft";
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/documents-save/hooks/use-document-copy-and-share-props.ts
	function useDocumentCopyAndShareProps() {
		const document = (0, _elementor_editor_documents.__useActiveDocument)();
		const { copyAndShare } = (0, _elementor_editor_documents.__useActiveDocumentActions)();
		const { dispatchEvent, config } = (0, _elementor_events.useMixpanel)();
		return {
			icon: _elementor_icons.LinkIcon,
			title: (0, _wordpress_i18n.__)("Copy and Share", "elementor"),
			onClick: () => {
				const eventName = config?.names?.editorOne?.topBarPublishDropdown;
				if (eventName) dispatchEvent?.(eventName, {
					window_name: config?.appTypes?.editor,
					interaction_type: config?.triggers?.click?.toLowerCase(),
					target_type: config?.targetTypes?.dropdownItem,
					target_name: config?.targetNames?.publishDropdown?.copyAndShare,
					interaction_result: config?.interactionResults?.actionSelected,
					target_location: config?.locations?.topBar?.replace(/\s+/g, "_").toLowerCase(),
					location_l1: config?.secondaryLocations?.publishDropdown?.replace(/\s+/g, "_").toLowerCase(),
					location_l2: config?.targetTypes?.dropdownItem
				});
				copyAndShare();
			},
			disabled: !document || document.isSaving || document.isSavingDraft || !("publish" === document.status.value),
			visible: document?.permissions?.showCopyAndShare
		};
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/documents-save/hooks/use-document-save-draft-props.ts
	function useDocumentSaveDraftProps() {
		const document = (0, _elementor_editor_documents.__useActiveDocument)();
		const { saveDraft } = (0, _elementor_editor_documents.__useActiveDocumentActions)();
		const { dispatchEvent, config } = (0, _elementor_events.useMixpanel)();
		return {
			icon: _elementor_icons.FileReportIcon,
			title: (0, _wordpress_i18n.__)("Save Draft", "elementor"),
			onClick: () => {
				const eventName = config?.names?.editorOne?.topBarPublishDropdown;
				if (eventName) dispatchEvent?.(eventName, {
					window_name: config?.appTypes?.editor,
					interaction_type: config?.triggers?.click?.toLowerCase(),
					target_type: config?.targetTypes?.dropdownItem,
					target_name: config?.targetNames?.publishDropdown?.saveDraft,
					interaction_result: config?.interactionResults?.actionSelected,
					target_location: config?.locations?.topBar?.replace(/\s+/g, "_").toLowerCase(),
					location_l1: config?.secondaryLocations?.publishDropdown?.replace(/\s+/g, "_").toLowerCase(),
					location_l2: config?.targetTypes?.dropdownItem
				});
				saveDraft();
			},
			disabled: !document || document.isSaving || document.isSavingDraft || !document.isDirty
		};
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/documents-save/hooks/use-document-save-template-props.ts
	function useDocumentSaveTemplateProps() {
		const { saveTemplate } = (0, _elementor_editor_documents.__useActiveDocumentActions)();
		const { dispatchEvent, config } = (0, _elementor_events.useMixpanel)();
		return {
			icon: _elementor_icons.FolderIcon,
			title: (0, _wordpress_i18n.__)("Save as Template", "elementor"),
			onClick: () => {
				const eventName = config?.names?.editorOne?.topBarPublishDropdown;
				if (eventName) dispatchEvent?.(eventName, {
					window_name: config?.appTypes?.editor,
					interaction_type: config?.triggers?.click?.toLowerCase(),
					target_type: config?.targetTypes?.dropdownItem,
					target_name: config?.targetNames?.publishDropdown?.saveAsTemplate,
					interaction_result: config?.interactionResults?.actionSelected,
					target_location: config?.locations?.topBar?.replace(/\s+/g, "_").toLowerCase(),
					location_l1: config?.secondaryLocations?.publishDropdown?.replace(/\s+/g, "_").toLowerCase(),
					location_l2: config?.targetTypes?.dropdownItem
				});
				saveTemplate();
			}
		};
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/documents-save/hooks/use-document-view-page-props.ts
	function useDocumentViewPageProps() {
		const document = (0, _elementor_editor_documents.__useActiveDocument)();
		const { dispatchEvent, config } = (0, _elementor_events.useMixpanel)();
		return {
			icon: _elementor_icons.EyeIcon,
			title: (0, _wordpress_i18n.__)("View Page", "elementor"),
			onClick: () => {
				const eventName = config?.names?.editorOne?.topBarPublishDropdown;
				if (eventName) dispatchEvent?.(eventName, {
					window_name: config?.appTypes?.editor,
					interaction_type: config?.triggers?.click?.toLowerCase(),
					target_type: config?.targetTypes?.dropdownItem,
					target_name: config?.targetNames?.publishDropdown?.viewPage,
					interaction_result: config?.interactionResults?.actionSelected,
					target_location: config?.locations?.topBar?.replace(/\s+/g, "_").toLowerCase(),
					location_l1: config?.secondaryLocations?.publishDropdown?.replace(/\s+/g, "_").toLowerCase(),
					location_l2: config?.targetTypes?.dropdownItem
				});
				if (document?.id) (0, _elementor_editor_v1_adapters.__privateRunCommand)("editor/documents/view", { id: document.id });
			}
		};
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/documents-save/index.ts
	function init$15() {
		injectIntoPrimaryAction({
			id: "document-primary-action",
			component: PrimaryAction$1
		});
		documentOptionsMenu.registerAction({
			group: "save",
			id: "document-save-draft",
			priority: 10,
			useProps: useDocumentSaveDraftProps
		});
		documentOptionsMenu.registerAction({
			group: "save",
			id: "document-save-as-template",
			priority: 20,
			useProps: useDocumentSaveTemplateProps
		});
		documentOptionsMenu.registerAction({
			id: "document-copy-and-share",
			priority: 10,
			useProps: useDocumentCopyAndShareProps
		});
		documentOptionsMenu.registerAction({
			id: "document-view-page",
			priority: 50,
			useProps: useDocumentViewPageProps
		});
	}
	__name(init$15, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/documents-settings/hooks/use-action-props.ts
	function useActionProps$9() {
		const activeDocument = (0, _elementor_editor_documents.__useActiveDocument)();
		const hostDocument = (0, _elementor_editor_documents.__useHostDocument)();
		const { isActive, isBlocked } = (0, _elementor_editor_v1_adapters.__privateUseRouteStatus)("panel/page-settings");
		const document = activeDocument && activeDocument.type.value !== "kit" ? activeDocument : hostDocument;
		return {
			title: document ? (0, _wordpress_i18n.__)("%s Settings", "elementor").replace("%s", document.type.label) : (0, _wordpress_i18n.__)("Document Settings", "elementor"),
			icon: _elementor_icons.FileSettingsIcon,
			onClick: () => {
				if (!document) return;
				const extendedWindow = window;
				const config = extendedWindow?.elementorCommon?.eventsManager?.config;
				if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar.documentSettings, {
					location: config.locations.topBar,
					secondaryLocation: config.secondaryLocations["document-settings"],
					trigger: config.triggers.click,
					element: config.elements.buttonIcon
				});
				(0, _elementor_editor_v1_adapters.__privateOpenRoute)("panel/page-settings/settings");
			},
			selected: isActive,
			disabled: isBlocked || !document
		};
	}
	__name(useActionProps$9, "useActionProps");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/documents-settings/index.ts
	function init$14() {
		toolsMenu.registerToggleAction({
			id: "document-settings-button",
			priority: 5,
			useProps: useActionProps$9
		});
	}
	__name(init$14, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/elements/hooks/use-action-props.ts
	function useActionProps$8() {
		const { isActive, isBlocked } = (0, _elementor_editor_v1_adapters.__privateUseRouteStatus)("panel/elements");
		return {
			title: (0, _wordpress_i18n.__)("Add Element", "elementor"),
			icon: _elementor_icons.PlusIcon,
			id: "ele-add-element",
			onClick: () => {
				const extendedWindow = window;
				const config = extendedWindow?.elementorCommon?.eventsManager?.config;
				if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar.widgetPanel, {
					location: config.locations.topBar,
					secondaryLocation: config.secondaryLocations["widget-panel"],
					trigger: config.triggers.toggleClick,
					element: config.elements.buttonIcon
				});
				(0, _elementor_editor_v1_adapters.__privateOpenRoute)("panel/elements/categories");
			},
			selected: isActive,
			disabled: isBlocked
		};
	}
	__name(useActionProps$8, "useActionProps");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/elements/sync/sync-panel-title.ts
	function syncPanelTitle() {
		const panelTitle = (0, _wordpress_i18n.__)("Elements", "elementor");
		const tabTitle = (0, _wordpress_i18n.__)("Widgets", "elementor");
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.routeOpenEvent)("panel/elements"), () => {
			setPanelTitle(panelTitle);
			setTabTitle(tabTitle);
		});
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.v1ReadyEvent)(), () => {
			if ((0, _elementor_editor_v1_adapters.__privateIsRouteActive)("panel/elements")) {
				setPanelTitle(panelTitle);
				setTabTitle(tabTitle);
			}
		});
	}
	function setPanelTitle(title) {
		window.elementor?.getPanelView?.()?.getHeaderView?.()?.setTitle?.(title);
	}
	function setTabTitle(title) {
		const tab = document.querySelector(".elementor-component-tab[data-tab=\"categories\"]");
		if (tab) tab.textContent = title;
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/elements/index.ts
	function init$13() {
		syncPanelTitle();
		toolsMenu.registerToggleAction({
			id: "open-elements-panel",
			priority: 1,
			useProps: useActionProps$8
		});
	}
	__name(init$13, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/feedback/index.ts
	function init$12() {
		if (!(0, _elementor_editor_v1_adapters.isExperimentActive)("in_editor_feedback")) return;
		mainMenu.registerAction({
			id: "open-send-feedback",
			group: "help",
			priority: 20,
			useProps: () => {
				return {
					icon: _elementor_icons.MessageLinesIcon,
					title: (0, _wordpress_i18n.__)("Send Feedback", "elementor"),
					onClick: () => {
						dispatchEvent(new CustomEvent(FEEDBACK_TOGGLE_EVENT));
					}
				};
			}
		});
	}
	__name(init$12, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/finder/hooks/use-action-props.ts
	function useActionProps$7() {
		return {
			title: (0, _wordpress_i18n.__)("Finder", "elementor"),
			icon: _elementor_icons.SearchIcon,
			onClick: () => {
				const extendedWindow = window;
				const config = extendedWindow?.elementorCommon?.eventsManager?.config;
				if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar.finder, {
					location: config.locations.topBar,
					secondaryLocation: config.secondaryLocations.finder,
					trigger: config.triggers.toggleClick,
					element: config.elements.buttonIcon
				});
				(0, _elementor_editor_v1_adapters.__privateRunCommand)("finder/toggle");
			}
		};
	}
	__name(useActionProps$7, "useActionProps");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/finder/index.ts
	function init$11() {
		utilitiesMenu.registerAction({
			id: "toggle-finder",
			priority: 15,
			useProps: useActionProps$7
		});
	}
	__name(init$11, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/help/hooks/use-action-props.ts
	var HELP_CENTER_URL = "https://go.elementor.com/editor-top-bar-learn/";
	var HELP_CENTER_ANGIE_PROMPT = `${(0, _wordpress_i18n.__)("Help me with", "elementor")} `;
	var dispatchHelpClickEvent = () => {
		const extendedWindow = window;
		const config = extendedWindow?.elementorCommon?.eventsManager?.config;
		if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar.help, {
			location: config.locations.topBar,
			secondaryLocation: config.secondaryLocations.help,
			trigger: config.triggers.click,
			element: config.elements.buttonIcon
		});
	};
	function useActionProps$6() {
		if ((0, _elementor_editor_mcp.isAngieAvailable)()) return {
			title: (0, _wordpress_i18n.__)("Help Center", "elementor"),
			icon: _elementor_icons.HelpIcon,
			onClick: (event) => {
				event.preventDefault();
				dispatchHelpClickEvent();
				(0, _elementor_editor_mcp.openAngieInAskMode)(HELP_CENTER_ANGIE_PROMPT);
			}
		};
		return {
			title: (0, _wordpress_i18n.__)("Help Center", "elementor"),
			href: HELP_CENTER_URL,
			icon: _elementor_icons.HelpIcon,
			target: "_blank",
			onClick: () => {
				dispatchHelpClickEvent();
			}
		};
	}
	__name(useActionProps$6, "useActionProps");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/help/index.ts
	function init$10() {
		mainMenu.registerLink({
			id: "open-help-center",
			group: "help",
			priority: 10,
			useProps: useActionProps$6
		});
	}
	__name(init$10, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/history/hooks/use-action-props.ts
	function useActionProps$5() {
		const { isActive, isBlocked } = (0, _elementor_editor_v1_adapters.__privateUseRouteStatus)("panel/history");
		return {
			title: (0, _wordpress_i18n.__)("History", "elementor"),
			icon: _elementor_icons.HistoryIcon,
			onClick: () => {
				const extendedWindow = window;
				const config = extendedWindow?.elementorCommon?.eventsManager?.config;
				if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar.history, {
					location: config.locations.topBar,
					secondaryLocation: config.secondaryLocations.elementorLogo,
					trigger: config.triggers.click,
					element: config.elements.link
				});
				(0, _elementor_editor_v1_adapters.__privateOpenRoute)("panel/history/actions");
			},
			selected: isActive,
			disabled: isBlocked
		};
	}
	__name(useActionProps$5, "useActionProps");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/history/index.ts
	function init$9() {
		toolsMenu.registerToggleAction({
			id: "open-history",
			priority: 3,
			useProps: useActionProps$5
		});
	}
	__name(init$9, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/keyboard-shortcuts/hooks/use-action-props.ts
	function useActionProps$4() {
		return {
			icon: _elementor_icons.KeyboardIcon,
			title: (0, _wordpress_i18n.__)("Keyboard Shortcuts", "elementor"),
			onClick: () => {
				const extendedWindow = window;
				const config = extendedWindow?.elementorCommon?.eventsManager?.config;
				if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar.keyboardShortcuts, {
					location: config.locations.topBar,
					secondaryLocation: config.secondaryLocations.elementorLogo,
					trigger: config.triggers.click,
					element: config.elements.link
				});
				(0, _elementor_editor_v1_adapters.__privateRunCommand)("shortcuts/open");
			}
		};
	}
	__name(useActionProps$4, "useActionProps");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/keyboard-shortcuts/index.ts
	function init$8() {
		mainMenu.registerAction({
			id: "open-keyboard-shortcuts",
			group: "default",
			priority: 40,
			useProps: useActionProps$4
		});
	}
	__name(init$8, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/responsive/components/breakpoints-switcher.tsx
	function BreakpointsSwitcher() {
		const breakpoints = (0, _elementor_editor_responsive.useBreakpoints)();
		const activeBreakpoint = (0, _elementor_editor_responsive.useActiveBreakpoint)();
		const activateBreakpoint = (0, _elementor_editor_responsive.useActivateBreakpoint)();
		if (!breakpoints.length || !activeBreakpoint) return null;
		const onChange = (_, value) => {
			const extendedWindow = window;
			const config = extendedWindow?.elementorCommon?.eventsManager?.config;
			if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar.responsiveControls, {
				location: config.locations.topBar,
				secondaryLocation: config.secondaryLocations.responsiveControls,
				trigger: config.triggers.click,
				element: config.elements.buttonIcon,
				mode: value
			});
			activateBreakpoint(value);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tabs, {
			textColor: "inherit",
			indicatorColor: "secondary",
			value: activeBreakpoint,
			onChange,
			"aria-label": (0, _wordpress_i18n.__)("Switch Device", "elementor"),
			sx: { "& .MuiTabs-indicator": { backgroundColor: "text.primary" } }
		}, breakpoints.map(({ id, label, type, width }) => {
			const Icon = iconsMap[id];
			const title = labelsMap[type || "default"].replace("%s", label).replace("%d", width?.toString() || "");
			return /* @__PURE__ */ react.createElement(_elementor_ui.Tab, {
				value: id,
				key: id,
				"aria-label": title,
				icon: /* @__PURE__ */ react.createElement(Tooltip, { title }, /* @__PURE__ */ react.createElement(Icon, null)),
				sx: { minWidth: "auto" },
				"data-testid": `switch-device-to-${id}`
			});
		}));
	}
	function Tooltip(props) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			PopperProps: { sx: { "&.MuiTooltip-popper .MuiTooltip-tooltip.MuiTooltip-tooltipPlacementBottom": { mt: 2.5 } } },
			...props
		});
	}
	var iconsMap = {
		widescreen: _elementor_icons.WidescreenIcon,
		desktop: _elementor_icons.DesktopIcon,
		laptop: _elementor_icons.LaptopIcon,
		tablet_extra: _elementor_icons.TabletLandscapeIcon,
		tablet: _elementor_icons.TabletPortraitIcon,
		mobile_extra: _elementor_icons.MobileLandscapeIcon,
		mobile: _elementor_icons.MobilePortraitIcon
	};
	var labelsMap = {
		default: "%s",
		"min-width": (0, _wordpress_i18n.__)("%s (%dpx and up)", "elementor"),
		"max-width": (0, _wordpress_i18n.__)("%s (up to %dpx)", "elementor")
	};

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/responsive/index.ts
	function init$7() {
		injectIntoResponsive({
			id: "responsive-breakpoints-switcher",
			component: BreakpointsSwitcher,
			options: { priority: 20 }
		});
	}
	__name(init$7, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/site-settings/components/portal.tsx
	function Portal(props) {
		const containerRef = (0, _elementor_editor_v1_adapters.__privateUseListenTo)([(0, _elementor_editor_v1_adapters.routeOpenEvent)("panel/global"), (0, _elementor_editor_v1_adapters.routeCloseEvent)("panel/global")], getContainerRef);
		if (!containerRef.current) return null;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Portal, {
			container: containerRef.current,
			...props
		});
	}
	function getContainerRef() {
		return (0, _elementor_editor_v1_adapters.__privateIsRouteActive)("panel/global") ? { current: document.querySelector("#elementor-panel-inner") } : { current: null };
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/site-settings/components/primary-action.tsx
	function PrimaryAction() {
		const document = (0, _elementor_editor_documents.__useActiveDocument)();
		const { save } = (0, _elementor_editor_documents.__useActiveDocumentActions)();
		return /* @__PURE__ */ react.createElement(_elementor_ui.Paper, { sx: {
			px: 5,
			py: 4,
			borderTop: 1,
			borderColor: "divider"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			disabled: !document || !document.isDirty,
			size: "medium",
			sx: { width: "100%" },
			onClick: () => document && !document.isSaving ? save() : null
		}, document?.isSaving ? /* @__PURE__ */ react.createElement(_elementor_ui.CircularProgress, null) : (0, _wordpress_i18n.__)("Save Changes", "elementor")));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/site-settings/components/portalled-primary-action.tsx
	function PortalledPrimaryAction() {
		return /* @__PURE__ */ react.createElement(Portal, null, /* @__PURE__ */ react.createElement(PrimaryAction, null));
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/site-settings/hooks/use-action-props.ts
	function useActionProps$3() {
		const { isActive, isBlocked } = (0, _elementor_editor_v1_adapters.__privateUseRouteStatus)("panel/global", { blockOnKitRoutes: false });
		return {
			title: (0, _wordpress_i18n.__)("Site Settings", "elementor"),
			icon: _elementor_icons.SettingsIcon,
			onClick: () => {
				const extendedWindow = window;
				const config = extendedWindow?.elementorCommon?.eventsManager?.config;
				if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar.siteSettings, {
					location: config.locations.topBar,
					secondaryLocation: config.secondaryLocations.siteSettings,
					trigger: config.triggers.toggleClick,
					element: config.elements.buttonIcon
				});
				if (isActive) (0, _elementor_editor_v1_adapters.__privateRunCommand)("panel/global/close");
				else (0, _elementor_editor_v1_adapters.__privateRunCommand)("panel/global/open");
			},
			selected: isActive,
			disabled: isBlocked
		};
	}
	__name(useActionProps$3, "useActionProps");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/site-settings/index.ts
	function init$6() {
		(0, _elementor_editor.injectIntoTop)({
			id: "site-settings-primary-action-portal",
			component: PortalledPrimaryAction
		});
		mainMenu.registerToggleAction({
			id: "toggle-site-settings",
			group: "default",
			priority: 1,
			useProps: useActionProps$3
		});
	}
	__name(init$6, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/structure/hooks/use-action-props.ts
	function useActionProps$2() {
		const { isActive, isBlocked } = (0, _elementor_editor_v1_adapters.__privateUseRouteStatus)("navigator");
		return {
			title: (0, _wordpress_i18n.__)("Structure", "elementor"),
			icon: _elementor_icons.StructureIcon,
			onClick: () => {
				const extendedWindow = window;
				const config = extendedWindow?.elementorCommon?.eventsManager?.config;
				if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar.structure, {
					location: config.locations.topBar,
					secondaryLocation: config.secondaryLocations.structure,
					trigger: config.triggers.toggleClick,
					element: config.elements.buttonIcon
				});
				(0, _elementor_editor_v1_adapters.__privateRunCommand)("navigator/toggle");
			},
			selected: isActive,
			disabled: isBlocked
		};
	}
	__name(useActionProps$2, "useActionProps");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/structure/index.ts
	function init$5() {
		utilitiesMenu.registerToggleAction({
			id: "toggle-structure-view",
			priority: 25,
			useProps: useActionProps$2
		});
	}
	__name(init$5, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/theme-builder/hooks/use-action-props.ts
	function useActionProps$1() {
		return {
			icon: _elementor_icons.ThemeBuilderIcon,
			title: (0, _wordpress_i18n.__)("Theme Builder", "elementor"),
			onClick: () => {
				const extendedWindow = window;
				const config = extendedWindow?.elementorCommon?.eventsManager?.config;
				if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar.themeBuilder, {
					location: config.locations.topBar,
					secondaryLocation: config.secondaryLocations.elementorLogo,
					trigger: config.triggers.click,
					element: config.elements.link
				});
				(0, _elementor_editor_v1_adapters.__privateRunCommand)("app/open");
			}
		};
	}
	__name(useActionProps$1, "useActionProps");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/theme-builder/index.ts
	function init$4() {
		mainMenu.registerAction({
			id: "open-theme-builder",
			group: "default",
			priority: 10,
			useProps: useActionProps$1
		});
	}
	__name(init$4, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/user-preferences/hooks/use-action-props.ts
	function useActionProps() {
		const { isActive, isBlocked } = (0, _elementor_editor_v1_adapters.__privateUseRouteStatus)("panel/editor-preferences");
		return {
			icon: _elementor_icons.ToggleRightIcon,
			title: (0, _wordpress_i18n.__)("User Preferences", "elementor"),
			onClick: () => {
				const extendedWindow = window;
				const config = extendedWindow?.elementorCommon?.eventsManager?.config;
				if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar.userPreferences, {
					location: config.locations.topBar,
					secondaryLocation: config.secondaryLocations.elementorLogo,
					trigger: config.triggers.click,
					element: config.elements.link
				});
				(0, _elementor_editor_v1_adapters.__privateOpenRoute)("panel/editor-preferences");
			},
			selected: isActive,
			disabled: isBlocked
		};
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/user-preferences/index.ts
	function init$3() {
		mainMenu.registerToggleAction({
			id: "open-user-preferences",
			group: "default",
			priority: 30,
			useProps: useActionProps
		});
	}
	__name(init$3, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/wordpress/index.ts
	function init$2() {
		mainMenu.registerLink({
			id: "exit-to-wordpress",
			group: "exits",
			priority: 20,
			useProps: () => {
				const document = (0, _elementor_editor_documents.__useActiveDocument)();
				return {
					title: (0, _wordpress_i18n.__)("Exit to WordPress", "elementor"),
					href: document?.links?.platformEdit,
					icon: _elementor_icons.WordpressIcon,
					onClick: () => {
						const extendedWindow = window;
						const config = extendedWindow?.elementorCommon?.eventsManager?.config;
						if (config) extendedWindow.elementorCommon.eventsManager.dispatchEvent(config.names.topBar.exitToWordpress, {
							location: config.locations.topBar,
							secondaryLocation: config.secondaryLocations.elementorLogo,
							trigger: config.triggers.click,
							element: config.elements.link
						});
					}
				};
			}
		});
	}
	__name(init$2, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/extensions/index.ts
	function init$1() {
		init$18();
		init$16();
		init$15();
		init$14();
		init$13();
		init$11();
		init$10();
		init$9();
		init$8();
		init$7();
		init$6();
		init$12();
		init$5();
		init$4();
		init$3();
		init$2();
		init$17();
	}
	__name(init$1, "init");

//#endregion
//#region packages/packages/core/editor-app-bar/src/sync/redirect-old-menus.ts
	function redirectOldMenus() {
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.routeOpenEvent)("panel/menu"), () => {
			(0, _elementor_editor_v1_adapters.__privateOpenRoute)("panel/elements/categories");
		});
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/init.ts
	function init() {
		redirectOldMenus();
		init$1();
		(0, _elementor_editor.injectIntoTop)({
			id: "app-bar",
			component: AppBar
		});
	}

//#endregion
//#region packages/packages/core/editor-app-bar/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		documentOptionsMenu: () => documentOptionsMenu,
		init: () => init,
		injectIntoPageIndication: () => injectIntoPageIndication,
		injectIntoPrimaryAction: () => injectIntoPrimaryAction,
		injectIntoResponsive: () => injectIntoResponsive,
		integrationsMenu: () => integrationsMenu,
		mainMenu: () => mainMenu,
		toolsMenu: () => toolsMenu,
		utilitiesMenu: () => utilitiesMenu
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorAppBar = src_exports;

//#endregion
})(elementorV2.locations, elementorV2.menus, React, elementorV2.icons, elementorV2.ui, elementorV2.editor, elementorV2.editorDocuments, wp.i18n, elementorV2.editorCurrentUser, elementorV2.editorUi, elementorV2.events, elementorV2.editorV1Adapters, elementorV2.httpClient, elementorV2.editorMcp, elementorV2.editorResponsive);
window.elementorV2.editorAppBar?.init?.();
//# sourceMappingURL=editor-app-bar.js.map