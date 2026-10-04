(function(_elementor_icons, _elementor_ui, react, _wordpress_i18n, _elementor_editor_v1_adapters, react_dom) {

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
let react$1 = __toESM(react, 1);
react = __toESM(react);

//#region packages/packages/libs/editor-ui/src/components/collapse-icon.tsx
	var CollapseIcon = (0, _elementor_ui.styled)(_elementor_icons.ChevronDownIcon, { shouldForwardProp: (prop) => prop !== "open" && prop !== "disabled" })(({ theme, open, disabled = false }) => ({
		transform: open ? "rotate(180deg)" : "rotate(0deg)",
		transition: theme.transitions.create("transform", { duration: theme.transitions.duration.standard }),
		opacity: disabled ? .4 : 1
	}));

//#endregion
//#region packages/packages/libs/editor-ui/src/components/collapsible-content.tsx
	var IndicatorsWrapper = (0, _elementor_ui.styled)("div")`
	position: absolute;
	top: 0;
	right: ${({ theme }) => theme.spacing(3)};
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
	var CollapsibleContent = ({ children, defaultOpen = false, titleEnd = null }) => {
		const [open, setOpen] = (0, react.useState)(defaultOpen);
		const handleToggle = () => {
			setOpen((prevOpen) => !prevOpen);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { sx: { position: "relative" } }, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			fullWidth: true,
			size: "small",
			color: "secondary",
			variant: "outlined",
			onClick: handleToggle,
			endIcon: /* @__PURE__ */ react.createElement(CollapseIcon, { open }),
			sx: { my: .5 },
			"aria-label": open ? "Show less" : "Show more"
		}, open ? (0, _wordpress_i18n.__)("Show less", "elementor") : (0, _wordpress_i18n.__)("Show more", "elementor")), titleEnd && /* @__PURE__ */ react.createElement(IndicatorsWrapper, null, getCollapsibleValue(titleEnd, open))), /* @__PURE__ */ react.createElement(_elementor_ui.Collapse, {
			in: open,
			timeout: "auto",
			unmountOnExit: true
		}, children));
	};
	function getCollapsibleValue(value, isOpen) {
		if (typeof value === "function") return value(isOpen);
		return value;
	}

//#endregion
//#region packages/packages/libs/editor-ui/src/components/ellipsis-with-tooltip.tsx
	var EllipsisWithTooltip = ({ maxWidth, title, as, ...props }) => {
		const [setRef, isOverflowing] = useIsOverflowing();
		if (isOverflowing) return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title,
			placement: "top"
		}, /* @__PURE__ */ react.createElement(Content, {
			maxWidth,
			ref: setRef,
			as,
			...props
		}, title));
		return /* @__PURE__ */ react.createElement(Content, {
			maxWidth,
			ref: setRef,
			as,
			...props
		}, title);
	};
	var Content = react.forwardRef(({ maxWidth, as: Component = _elementor_ui.Box, ...props }, ref) => /* @__PURE__ */ react.createElement(Component, {
		ref,
		position: "relative",
		...props,
		style: {
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
			maxWidth
		}
	}));
	var useIsOverflowing = () => {
		const [el, setEl] = (0, react.useState)(null);
		const [isOverflowing, setIsOverflown] = (0, react.useState)(false);
		(0, react.useEffect)(() => {
			const observer = new ResizeObserver(([{ target }]) => {
				setIsOverflown(target.scrollWidth > target.clientWidth);
			});
			if (el) observer.observe(el);
			return () => {
				observer.disconnect();
			};
		}, [el]);
		return [setEl, isOverflowing];
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/components/editable-field.tsx
	var EditableField = (0, react.forwardRef)(({ value, error, as = "span", sx, ...props }, ref) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: error,
			open: !!error,
			placement: "top"
		}, /* @__PURE__ */ react.createElement(StyledField, {
			ref,
			component: as,
			...props
		}, value));
	});
	var StyledField = (0, _elementor_ui.styled)(_elementor_ui.Box)`
	width: 100%;
	&:focus {
		outline: none;
	}
`;

//#endregion
//#region packages/packages/libs/editor-ui/src/components/introduction-modal.tsx
	var IntroductionModal = ({ open, handleClose, title, children }) => {
		const [shouldShowAgain, setShouldShowAgain] = (0, react.useState)(true);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Dialog, {
			open,
			onClose: handleClose,
			maxWidth: "sm",
			TransitionComponent: Transition
		}, title && /* @__PURE__ */ react.createElement(_elementor_ui.DialogHeader, { logo: false }, /* @__PURE__ */ react.createElement(_elementor_ui.DialogTitle, null, title)), children, /* @__PURE__ */ react.createElement(_elementor_ui.DialogActions, null, /* @__PURE__ */ react.createElement(_elementor_ui.FormControlLabel, {
			sx: { marginRight: "auto" },
			control: /* @__PURE__ */ react.createElement(_elementor_ui.Checkbox, {
				checked: !shouldShowAgain,
				onChange: () => setShouldShowAgain(!shouldShowAgain)
			}),
			label: /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "body2" }, (0, _wordpress_i18n.__)("Don't show this again", "elementor"))
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			size: "medium",
			variant: "contained",
			sx: { minWidth: "135px" },
			"aria-label": (0, _wordpress_i18n.__)("Got it introduction", "elementor"),
			onClick: () => handleClose(shouldShowAgain)
		}, (0, _wordpress_i18n.__)("Got it", "elementor"))));
	};
	var Transition = react.forwardRef((props, ref) => /* @__PURE__ */ react.createElement(_elementor_ui.Fade, {
		ref,
		...props,
		timeout: {
			enter: 1e3,
			exit: 200
		}
	}));

//#endregion
//#region packages/packages/libs/editor-ui/src/hooks/use-color-scheme.ts
	function useColorScheme() {
		const [colorScheme, setColorScheme] = (0, react.useState)(() => getV1ColorScheme());
		(0, react.useEffect)(() => {
			return (0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.v1ReadyEvent)(), () => setColorScheme(getV1ColorScheme()));
		}, []);
		(0, react.useEffect)(() => {
			return (0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/settings"), (e) => {
				const event = e;
				if (event.args?.settings && "ui_theme" in event.args.settings) setColorScheme(getV1ColorScheme());
			});
		}, []);
		return colorScheme;
	}
	function getV1ColorScheme() {
		return window.elementor?.getPreferences?.("ui_theme") || "auto";
	}

//#endregion
//#region packages/packages/libs/editor-ui/src/components/theme-provider.tsx
	var EDITOR_PALETTE = "unstable";
	function ThemeProvider({ children }) {
		const colorScheme = useColorScheme();
		return /* @__PURE__ */ react.createElement(_elementor_ui.ThemeProvider, {
			colorScheme,
			palette: EDITOR_PALETTE
		}, children);
	}

//#endregion
//#region packages/packages/libs/editor-ui/src/components/info-alert.tsx
	var InfoAlert = (props) => /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
		icon: /* @__PURE__ */ react.createElement(_elementor_icons.InfoCircleFilledIcon, {
			fontSize: "small",
			color: "secondary"
		}),
		variant: "standard",
		color: "secondary",
		elevation: 0,
		size: "small",
		...props
	});

//#endregion
//#region packages/packages/libs/editor-ui/src/components/menu-item.tsx
	var MenuListItem = ({ children, menuItemTextProps, primaryTypographyProps = { variant: "caption" }, ...props }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, {
			dense: true,
			...props,
			sx: { ...props.sx ?? {} }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.MenuItemText, {
			primary: children,
			primaryTypographyProps,
			...menuItemTextProps
		}));
	};
	var MenuItemInfotip = (0, react.forwardRef)(({ showInfoTip = false, children, content }, ref) => {
		if (!showInfoTip) return /* @__PURE__ */ react.createElement(react.Fragment, null, children);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Infotip, {
			ref,
			placement: "right",
			arrow: false,
			content: /* @__PURE__ */ react.createElement(InfoAlert, { sx: { maxWidth: 325 } }, content)
		}, /* @__PURE__ */ react.createElement("div", {
			style: {
				pointerEvents: "initial",
				width: "100%"
			},
			onClick: (e) => e.stopPropagation()
		}, children));
	});

//#endregion
//#region packages/packages/libs/editor-ui/src/components/infotip-card.tsx
	var InfoTipCard = ({ content, svgIcon, learnMoreButton, ctaButton }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Card, {
			elevation: 0,
			sx: { width: 320 }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.CardContent, { sx: { pb: 0 } }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			display: "flex",
			alignItems: "start"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.SvgIcon, {
			fontSize: "tiny",
			sx: { mr: .5 }
		}, svgIcon), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "body2" }, content, learnMoreButton && /* @__PURE__ */ react.createElement(react.Fragment, null, "\xA0", /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
			color: "info.main",
			href: learnMoreButton.href,
			target: "_blank"
		}, learnMoreButton.label))))), ctaButton && /* @__PURE__ */ react.createElement(_elementor_ui.CardActions, { sx: { justifyContent: "flex-start" } }, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			size: "small",
			color: "secondary",
			variant: "contained",
			onClick: ctaButton.onClick,
			sx: { marginInlineStart: "1rem" }
		}, ctaButton.label)));
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/components/warning-infotip.tsx
	var WarningInfotip = (0, react.forwardRef)(({ children, open, title, text, placement, width, offset, hasError = true }, ref) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Infotip, {
			ref,
			open,
			placement,
			PopperProps: {
				sx: {
					width: width ? width : "initial",
					".MuiTooltip-tooltip": {
						marginLeft: 0,
						marginRight: 0
					}
				},
				modifiers: offset ? [{
					name: "offset",
					options: { offset }
				}] : []
			},
			arrow: false,
			content: /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
				color: hasError ? "error" : "secondary",
				severity: "warning",
				variant: "standard",
				size: "small"
			}, title ? /* @__PURE__ */ react.createElement(_elementor_ui.AlertTitle, null, title) : null, text)
		}, children);
	});

//#endregion
//#region packages/packages/libs/editor-ui/src/components/global-dialog/subscribers.ts
	var currentDialogState = null;
	var stateSubscribers = /* @__PURE__ */ new Set();
	var subscribeToDialogState = (callback) => {
		stateSubscribers.add(callback);
		callback(currentDialogState);
		return () => stateSubscribers.delete(callback);
	};
	var notifySubscribers = () => {
		stateSubscribers.forEach((callback) => callback(currentDialogState));
	};
	var openDialog = ({ component }) => {
		currentDialogState = { component };
		notifySubscribers();
	};
	var closeDialog = () => {
		currentDialogState = null;
		notifySubscribers();
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/components/global-dialog/components/global-dialog.tsx
	var GlobalDialog = () => {
		const [content, setContent] = (0, react.useState)(null);
		(0, react.useEffect)(() => {
			const unsubscribe = subscribeToDialogState(setContent);
			return () => {
				unsubscribe();
			};
		}, []);
		if (!content) return null;
		return /* @__PURE__ */ react.createElement(ThemeProvider, null, /* @__PURE__ */ react.createElement(_elementor_ui.Dialog, {
			role: "dialog",
			open: true,
			onClose: closeDialog,
			maxWidth: "sm",
			fullWidth: true
		}, content.component));
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/components/search-field.tsx
	var SIZE$2 = "tiny";
	var SearchField = ({ value, onSearch, placeholder, id, sx }) => {
		const inputRef = (0, react.useRef)(null);
		const handleClear = () => {
			onSearch("");
			inputRef.current?.focus();
		};
		const handleInputChange = (event) => {
			onSearch(event.target.value);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			px: 2,
			pb: 1.5,
			...sx
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			autoFocus: true,
			fullWidth: true,
			id,
			size: SIZE$2,
			value,
			inputRef,
			onChange: handleInputChange,
			placeholder,
			InputProps: {
				startAdornment: /* @__PURE__ */ react.createElement(_elementor_ui.InputAdornment, { position: "start" }, /* @__PURE__ */ react.createElement(_elementor_icons.SearchIcon, { fontSize: SIZE$2 })),
				endAdornment: value && /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
					size: SIZE$2,
					onClick: handleClear,
					"aria-label": (0, _wordpress_i18n.__)("Clear", "elementor")
				}, /* @__PURE__ */ react.createElement(_elementor_icons.XIcon, {
					color: "action",
					fontSize: SIZE$2
				}))
			}
		}));
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/components/form.tsx
	var Form = ({ children, onSubmit, "data-testid": dataTestId }) => {
		const formRef = (0, react.useRef)(null);
		const handleSubmit = (e) => {
			e.preventDefault();
			onSubmit?.();
		};
		const handleKeyDown = (e) => {
			const { target } = e;
			if (e.key === "Enter" && target instanceof HTMLInputElement && target.type !== "submit") {
				e.preventDefault();
				formRef.current?.requestSubmit();
			}
		};
		return /* @__PURE__ */ react.createElement("form", {
			onSubmit: handleSubmit,
			ref: formRef,
			onKeyDown: handleKeyDown,
			...dataTestId ? { "data-testid": dataTestId } : {}
		}, children);
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/components/cta-button.tsx
	var CtaButton = ({ href, children, showIcon = true, ...props }) => /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
		variant: "contained",
		color: "promotion",
		href,
		target: "_blank",
		startIcon: showIcon ? /* @__PURE__ */ react.createElement(_elementor_icons.CrownFilledIcon, null) : void 0,
		...props
	}, children ?? (0, _wordpress_i18n.__)("Upgrade Now", "elementor"));

//#endregion
//#region packages/packages/libs/editor-ui/src/hooks/use-scroll-to-selected.ts
	var useScrollToSelected = ({ selectedValue, items, virtualizer }) => {
		(0, react.useEffect)(() => {
			if (!selectedValue || items.length === 0) return;
			const selectedIndex = items.findIndex((item) => item.value === selectedValue);
			if (selectedIndex !== -1) virtualizer.scrollToIndex(selectedIndex, { align: "center" });
		}, [
			selectedValue,
			items,
			virtualizer
		]);
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/hooks/use-scroll-top.ts
	var useScrollTop = ({ containerRef }) => {
		const [scrollTop, setScrollTop] = (0, react.useState)(0);
		(0, react.useEffect)(() => {
			const container = containerRef.current;
			if (!container) return;
			const handleScroll = () => {
				setScrollTop(container.scrollTop);
			};
			container.addEventListener("scroll", handleScroll);
			return () => container.removeEventListener("scroll", handleScroll);
		}, [containerRef]);
		return scrollTop;
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/hooks/use-text-field-auto-select.ts
	var useTextFieldAutoSelect = () => {
		const inputRef = (0, react.useRef)(null);
		(0, react.useEffect)(() => {
			if (inputRef.current) {
				inputRef.current.focus();
				inputRef.current.select();
			}
		}, []);
		return inputRef;
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/hooks/use-canvas-click-handler.tsx
	var useCanvasClickHandler = (isActive, onClickAway) => {
		(0, react.useEffect)(() => {
			const canvasDocument = isActive ? (0, _elementor_editor_v1_adapters.getCanvasIframeDocument)() : null;
			if (!canvasDocument) return;
			canvasDocument.addEventListener("mousedown", onClickAway);
			return () => canvasDocument.removeEventListener("mousedown", onClickAway);
		}, [isActive, onClickAway]);
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/components/promotions/promotion-infotip.tsx
	var PromotionInfotip = ({ children, open, onClose, onCtaClick, ...cardProps }) => {
		useCanvasClickHandler(!!open, onClose);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Infotip, {
			placement: "right",
			content: /* @__PURE__ */ react.createElement(InfotipCard, {
				onClose,
				onCtaClick,
				...cardProps
			}),
			open
		}, children);
	};
	function InfotipCard({ title, content, assetUrl, ctaUrl, onClose, onCtaClick }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.ClickAwayListener, {
			disableReactTree: true,
			mouseEvent: "onMouseDown",
			touchEvent: "onTouchStart",
			onClickAway: onClose
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Card, {
			elevation: 0,
			sx: { maxWidth: 296 }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.CardHeader, {
			title,
			action: /* @__PURE__ */ react.createElement(_elementor_ui.CloseButton, {
				slotProps: { icon: { fontSize: "tiny" } },
				onClick: onClose
			})
		}), /* @__PURE__ */ react.createElement(_elementor_ui.CardMedia, {
			component: "img",
			image: assetUrl,
			alt: "",
			sx: {
				width: "100%",
				aspectRatio: "16 / 9"
			}
		}), /* @__PURE__ */ react.createElement(_elementor_ui.CardContent, null, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.secondary"
		}, content)), /* @__PURE__ */ react.createElement(_elementor_ui.CardActions, { sx: { justifyContent: "flex-start" } }, /* @__PURE__ */ react.createElement(CtaButton, {
			href: ctaUrl,
			onClick: onCtaClick
		}))));
	}

//#endregion
//#region packages/packages/libs/editor-ui/src/components/promotions/promotion-popover.tsx
	var PromotionPopover = ({ children, open, placement = "right", slotProps, anchorRef, ...cardProps }) => {
		const anchorEl = anchorRef?.current;
		const defaultSlotProps = { popper: {
			...anchorEl && { anchorEl },
			modifiers: [{
				name: "offset",
				options: { offset: anchorRef ? [0, 4] : [0, 10] }
			}]
		} };
		return /* @__PURE__ */ react.createElement(_elementor_ui.Infotip, {
			placement,
			arrow: false,
			content: /* @__PURE__ */ react.createElement(PopoverAlert, { ...cardProps }),
			open,
			slotProps: slotProps || defaultSlotProps
		}, children);
	};
	function PopoverAlert({ title, content, ctaUrl, ctaText, onClose, onCtaClick }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.ClickAwayListener, {
			disableReactTree: true,
			mouseEvent: "onMouseDown",
			touchEvent: "onTouchStart",
			onClickAway: onClose
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
			variant: "standard",
			color: "promotion",
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.CrownFilledIcon, { fontSize: "tiny" }),
			onClose,
			onMouseDown: (e) => e.stopPropagation(),
			role: "dialog",
			"aria-label": "promotion-popover-title",
			action: /* @__PURE__ */ react.createElement(_elementor_ui.AlertAction, {
				variant: "contained",
				color: "promotion",
				href: ctaUrl,
				target: "_blank",
				rel: "noopener noreferrer",
				onClick: onCtaClick
			}, ctaText),
			sx: { maxWidth: 296 }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			gap: .5,
			display: "flex",
			flexDirection: "column"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.AlertTitle, null, title), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "body2" }, content))));
	}

//#endregion
//#region packages/packages/libs/editor-ui/src/components/promotions/promotion-chip.tsx
	var PromotionChip = react.forwardRef(({ ...props }, ref) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			"aria-label": "Promotion chip",
			ref,
			size: "tiny",
			color: "promotion",
			variant: "standard",
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.CrownFilledIcon, null),
			sx: {
				ml: 1,
				width: "20px",
				"& .MuiChip-label": { display: "none" }
			},
			...props
		});
	});

//#endregion
//#region packages/packages/libs/editor-ui/src/components/promotions/promotion-alert.tsx
	var PromotionAlert = ({ message, upgradeUrl, onCtaClick }) => /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
		variant: "standard",
		color: "promotion",
		icon: false,
		role: "dialog",
		"aria-label": "promotion-alert",
		size: "small",
		sx: {
			m: 2,
			mt: 1,
			pt: .5,
			pb: .5
		}
	}, message, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
		size: "tiny",
		variant: "text",
		color: "promotion",
		target: "_blank",
		href: upgradeUrl,
		rel: "noopener noreferrer",
		startIcon: /* @__PURE__ */ react.createElement(_elementor_icons.CrownFilledIcon, { fontSize: "tiny" }),
		onClick: onCtaClick
	}, (0, _wordpress_i18n.__)("Upgrade now", "elementor")));

//#endregion
//#region packages/packages/libs/editor-ui/src/components/floating-bar.tsx
	var FloatingBarContainer = (0, _elementor_ui.styled)("span")`
	display: contents;

	.MuiFloatingActionBar-popper:has( .MuiFloatingActionBar-actions:empty ) {
		display: none;
	}

	.MuiFloatingActionBar-popper {
		z-index: 1000;
	}
`;
	var FloatingActionsContext = (0, react.createContext)(null);
	function FloatingActionsBar({ actions, children }) {
		const [open, setOpen] = (0, react.useState)(false);
		return /* @__PURE__ */ react.createElement(FloatingActionsContext.Provider, { value: {
			open,
			setOpen
		} }, /* @__PURE__ */ react.createElement(FloatingBarContainer, null, /* @__PURE__ */ react.createElement(_elementor_ui.UnstableFloatingActionBar, {
			actions,
			open: open || void 0
		}, children)));
	}
	function useFloatingActionsBar() {
		const context = (0, react.useContext)(FloatingActionsContext);
		if (!context) throw new Error("useFloatingActions must be used within a FloatingActionsBar");
		return context;
	}

//#endregion
//#region packages/packages/libs/editor-ui/src/components/file-upload/file-upload-dropzone.tsx
	var cardSx$1 = {
		minHeight: 152,
		border: "2px dashed",
		borderColor: "divider",
		borderRadius: 1
	};
	var FileUploadDropzone = ({ onFileSelected, allowedFileTypes, accept, regionLabel, primaryLabel, secondaryLabel, helperText }) => {
		const fileInputRef = (0, react.useRef)(null);
		const { getDropZoneProps } = (0, _elementor_ui.useUnstableDropZone)({
			allowedFileTypes,
			onChange: ({ valid }) => {
				if (valid[0]) onFileSelected(valid[0]);
			}
		});
		const dropZoneProps = getDropZoneProps();
		const handleBrowseClick = () => fileInputRef.current?.click();
		const handleFileInputChange = (event) => {
			const file = event.target.files?.[0];
			if (file) onFileSelected(file);
			event.target.value = "";
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Card, {
			variant: "outlined",
			role: "region",
			"aria-label": regionLabel ?? (0, _wordpress_i18n.__)("File dropzone", "elementor"),
			onDrop: dropZoneProps.onDrop,
			onDragEnter: dropZoneProps.onDragEnter,
			onDragLeave: dropZoneProps.onDragLeave,
			onDragOver: dropZoneProps.onDragOver,
			sx: cardSx$1
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			spacing: 1,
			padding: 3
		}, /* @__PURE__ */ react.createElement(_elementor_icons.UploadIcon, { fontSize: "medium" }), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			spacing: .5,
			alignItems: "center"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
			component: "button",
			type: "button",
			underline: "always",
			onClick: handleBrowseClick
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body1",
			component: "span"
		}, primaryLabel ?? (0, _wordpress_i18n.__)("Upload file", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "body1" }, secondaryLabel ?? (0, _wordpress_i18n.__)("or drag and drop", "elementor"))), helperText ? /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			color: "text.secondary"
		}, helperText) : null), /* @__PURE__ */ react.createElement("input", {
			ref: fileInputRef,
			type: "file",
			accept,
			hidden: true,
			onChange: handleFileInputChange
		}));
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/components/file-upload/file-upload-row.tsx
	var BYTES_PER_KILOBYTE = 1024;
	var cardSx = {
		minHeight: 152,
		border: "2px dashed",
		borderColor: "divider",
		borderRadius: 1
	};
	var formatFileSize = (sizeInBytes) => {
		return `${Math.max(1, Math.round(sizeInBytes / BYTES_PER_KILOBYTE))}kb`;
	};
	var FileUploadRow = ({ file, onRemove, statusLabel }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Card, {
			variant: "outlined",
			sx: cardSx
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			justifyContent: "space-between",
			padding: 2,
			spacing: 2,
			minHeight: 152
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "column",
			spacing: .5,
			minWidth: 0,
			flex: 1
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "subtitle2",
			noWrap: true
		}, file.name), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			color: "text.secondary",
			noWrap: true
		}, formatFileSize(file.size), " · ", statusLabel ?? (0, _wordpress_i18n.__)("Complete", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: "small",
			onClick: onRemove,
			"aria-label": (0, _wordpress_i18n.__)("Remove file", "elementor")
		}, /* @__PURE__ */ react.createElement(_elementor_icons.XIcon, { fontSize: "inherit" }))));
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/components/popover/body.tsx
	var SECTION_PADDING_INLINE = 32;
	var DEFAULT_POPOVER_HEIGHT = 348;
	var FALLBACK_POPOVER_WIDTH = 220;
	var PopoverBody = ({ children, height = DEFAULT_POPOVER_HEIGHT, width, id }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			display: "flex",
			flexDirection: "column",
			sx: {
				height,
				overflow: "hidden",
				width: `${width ? width - SECTION_PADDING_INLINE : FALLBACK_POPOVER_WIDTH}px`,
				maxWidth: 496
			},
			id
		}, children);
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/contexts/section-context.tsx
	var FALLBACK_SECTION_WIDTH = 320;
	var SectionRefContext = (0, react.createContext)(null);
	var useSectionRef = () => (0, react.useContext)(SectionRefContext);
	var useSectionWidth = () => {
		return useSectionRef()?.current?.offsetWidth ?? FALLBACK_SECTION_WIDTH;
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/components/popover/section-popover-body.tsx
	var SectionPopoverBody = (props) => {
		const sectionWidth = useSectionWidth();
		return /* @__PURE__ */ react.createElement(PopoverBody, {
			...props,
			width: sectionWidth
		});
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/components/popover/header.tsx
	var SIZE$1 = "tiny";
	var PopoverHeader = ({ title, onClose, icon, actions }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			pl: 2,
			pr: 1,
			py: 1.5,
			maxHeight: 36,
			sx: { columnGap: .5 }
		}, icon, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "subtitle2",
			sx: {
				fontSize: "12px",
				mt: .25
			}
		}, title), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			sx: { ml: "auto" }
		}, actions, /* @__PURE__ */ react.createElement(_elementor_ui.CloseButton, {
			slotProps: { icon: { fontSize: SIZE$1 } },
			sx: { ml: "auto" },
			onClick: onClose
		})));
	};

//#endregion
//#region packages/node_modules/@tanstack/virtual-core/dist/esm/utils.js
	function memo(getDeps, fn, opts) {
		let deps = opts.initialDeps ?? [];
		let result;
		let isInitial = true;
		function memoizedFunction() {
			var _a;
			var _b;
			var _c;
			let depTime;
			if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts))) depTime = Date.now();
			const newDeps = getDeps();
			if (!(newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep))) return result;
			deps = newDeps;
			let resultTime;
			if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
			result = fn(...newDeps);
			if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
				const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
				const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
				const resultFpsPercentage = resultEndTime / 16;
				const pad = (str, num) => {
					str = String(str);
					while (str.length < num) str = " " + str;
					return str;
				};
				console.info(`%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120))}deg 100% 31%);`, opts == null ? void 0 : opts.key);
			}
			if ((opts == null ? void 0 : opts.onChange) && !(isInitial && opts.skipInitialOnChange)) opts.onChange(result);
			isInitial = false;
			return result;
		}
		memoizedFunction.updateDeps = (newDeps) => {
			deps = newDeps;
		};
		return memoizedFunction;
	}
	function notUndefined(value, msg) {
		if (value === void 0) throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
		else return value;
	}
	var approxEqual = (a, b) => Math.abs(a - b) < 1.01;
	var debounce = (targetWindow, fn, ms) => {
		let timeoutId;
		return function(...args) {
			targetWindow.clearTimeout(timeoutId);
			timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
		};
	};

//#endregion
//#region packages/node_modules/@tanstack/virtual-core/dist/esm/index.js
	var getRect = (element) => {
		const { offsetWidth, offsetHeight } = element;
		return {
			width: offsetWidth,
			height: offsetHeight
		};
	};
	var defaultKeyExtractor = (index) => index;
	var defaultRangeExtractor = (range) => {
		const start = Math.max(range.startIndex - range.overscan, 0);
		const end = Math.min(range.endIndex + range.overscan, range.count - 1);
		const arr = [];
		for (let i = start; i <= end; i++) arr.push(i);
		return arr;
	};
	var observeElementRect = (instance, cb) => {
		const element = instance.scrollElement;
		if (!element) return;
		const targetWindow = instance.targetWindow;
		if (!targetWindow) return;
		const handler = (rect) => {
			const { width, height } = rect;
			cb({
				width: Math.round(width),
				height: Math.round(height)
			});
		};
		handler(getRect(element));
		if (!targetWindow.ResizeObserver) return () => {};
		const observer = new targetWindow.ResizeObserver((entries) => {
			const run = () => {
				const entry = entries[0];
				if (entry == null ? void 0 : entry.borderBoxSize) {
					const box = entry.borderBoxSize[0];
					if (box) {
						handler({
							width: box.inlineSize,
							height: box.blockSize
						});
						return;
					}
				}
				handler(getRect(element));
			};
			instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
		});
		observer.observe(element, { box: "border-box" });
		return () => {
			observer.unobserve(element);
		};
	};
	var addEventListenerOptions = { passive: true };
	var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
	var observeElementOffset = (instance, cb) => {
		const element = instance.scrollElement;
		if (!element) return;
		const targetWindow = instance.targetWindow;
		if (!targetWindow) return;
		let offset = 0;
		const fallback = instance.options.useScrollendEvent && supportsScrollend ? () => void 0 : debounce(targetWindow, () => {
			cb(offset, false);
		}, instance.options.isScrollingResetDelay);
		const createHandler = (isScrolling) => () => {
			const { horizontal, isRtl } = instance.options;
			offset = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
			fallback();
			cb(offset, isScrolling);
		};
		const handler = createHandler(true);
		const endHandler = createHandler(false);
		element.addEventListener("scroll", handler, addEventListenerOptions);
		const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
		if (registerScrollendEvent) element.addEventListener("scrollend", endHandler, addEventListenerOptions);
		return () => {
			element.removeEventListener("scroll", handler);
			if (registerScrollendEvent) element.removeEventListener("scrollend", endHandler);
		};
	};
	var measureElement = (element, entry, instance) => {
		if (entry == null ? void 0 : entry.borderBoxSize) {
			const box = entry.borderBoxSize[0];
			if (box) return Math.round(box[instance.options.horizontal ? "inlineSize" : "blockSize"]);
		}
		return element[instance.options.horizontal ? "offsetWidth" : "offsetHeight"];
	};
	var elementScroll = (offset, { adjustments = 0, behavior }, instance) => {
		var _a;
		var _b;
		const toOffset = offset + adjustments;
		(_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null || _b.call(_a, {
			[instance.options.horizontal ? "left" : "top"]: toOffset,
			behavior
		});
	};
	var Virtualizer = class {
		constructor(opts) {
			this.unsubs = [];
			this.scrollElement = null;
			this.targetWindow = null;
			this.isScrolling = false;
			this.scrollState = null;
			this.measurementsCache = [];
			this.itemSizeCache = /* @__PURE__ */ new Map();
			this.laneAssignments = /* @__PURE__ */ new Map();
			this.pendingMeasuredCacheIndexes = [];
			this.prevLanes = void 0;
			this.lanesChangedFlag = false;
			this.lanesSettling = false;
			this.scrollRect = null;
			this.scrollOffset = null;
			this.scrollDirection = null;
			this.scrollAdjustments = 0;
			this.elementsCache = /* @__PURE__ */ new Map();
			this.now = () => {
				var _a;
				var _b;
				var _c;
				return ((_c = (_b = (_a = this.targetWindow) == null ? void 0 : _a.performance) == null ? void 0 : _b.now) == null ? void 0 : _c.call(_b)) ?? Date.now();
			};
			this.observer = /* @__PURE__ */ (() => {
				let _ro = null;
				const get = () => {
					if (_ro) return _ro;
					if (!this.targetWindow || !this.targetWindow.ResizeObserver) return null;
					return _ro = new this.targetWindow.ResizeObserver((entries) => {
						entries.forEach((entry) => {
							const run = () => {
								const node = entry.target;
								const index = this.indexFromElement(node);
								if (!node.isConnected) {
									this.observer.unobserve(node);
									return;
								}
								if (this.shouldMeasureDuringScroll(index)) this.resizeItem(index, this.options.measureElement(node, entry, this));
							};
							this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
						});
					});
				};
				return {
					disconnect: () => {
						var _a;
						(_a = get()) == null || _a.disconnect();
						_ro = null;
					},
					observe: (target) => {
						var _a;
						return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
					},
					unobserve: (target) => {
						var _a;
						return (_a = get()) == null ? void 0 : _a.unobserve(target);
					}
				};
			})();
			this.range = null;
			this.setOptions = (opts2) => {
				Object.entries(opts2).forEach(([key, value]) => {
					if (typeof value === "undefined") delete opts2[key];
				});
				this.options = {
					debug: false,
					initialOffset: 0,
					overscan: 1,
					paddingStart: 0,
					paddingEnd: 0,
					scrollPaddingStart: 0,
					scrollPaddingEnd: 0,
					horizontal: false,
					getItemKey: defaultKeyExtractor,
					rangeExtractor: defaultRangeExtractor,
					onChange: () => {},
					measureElement,
					initialRect: {
						width: 0,
						height: 0
					},
					scrollMargin: 0,
					gap: 0,
					indexAttribute: "data-index",
					initialMeasurementsCache: [],
					lanes: 1,
					isScrollingResetDelay: 150,
					enabled: true,
					isRtl: false,
					useScrollendEvent: false,
					useAnimationFrameWithResizeObserver: false,
					laneAssignmentMode: "estimate",
					...opts2
				};
			};
			this.notify = (sync) => {
				var _a;
				var _b;
				(_b = (_a = this.options).onChange) == null || _b.call(_a, this, sync);
			};
			this.maybeNotify = memo(() => {
				this.calculateRange();
				return [
					this.isScrolling,
					this.range ? this.range.startIndex : null,
					this.range ? this.range.endIndex : null
				];
			}, (isScrolling) => {
				this.notify(isScrolling);
			}, {
				key: "maybeNotify",
				debug: () => this.options.debug,
				initialDeps: [
					this.isScrolling,
					this.range ? this.range.startIndex : null,
					this.range ? this.range.endIndex : null
				]
			});
			this.cleanup = () => {
				this.unsubs.filter(Boolean).forEach((d) => d());
				this.unsubs = [];
				this.observer.disconnect();
				if (this.rafId != null && this.targetWindow) {
					this.targetWindow.cancelAnimationFrame(this.rafId);
					this.rafId = null;
				}
				this.scrollState = null;
				this.scrollElement = null;
				this.targetWindow = null;
			};
			this._didMount = () => {
				return () => {
					this.cleanup();
				};
			};
			this._willUpdate = () => {
				var _a;
				const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
				if (this.scrollElement !== scrollElement) {
					this.cleanup();
					if (!scrollElement) {
						this.maybeNotify();
						return;
					}
					this.scrollElement = scrollElement;
					if (this.scrollElement && "ownerDocument" in this.scrollElement) this.targetWindow = this.scrollElement.ownerDocument.defaultView;
					else this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
					this.elementsCache.forEach((cached) => {
						this.observer.observe(cached);
					});
					this.unsubs.push(this.options.observeElementRect(this, (rect) => {
						this.scrollRect = rect;
						this.maybeNotify();
					}));
					this.unsubs.push(this.options.observeElementOffset(this, (offset, isScrolling) => {
						this.scrollAdjustments = 0;
						this.scrollDirection = isScrolling ? this.getScrollOffset() < offset ? "forward" : "backward" : null;
						this.scrollOffset = offset;
						this.isScrolling = isScrolling;
						if (this.scrollState) this.scheduleScrollReconcile();
						this.maybeNotify();
					}));
					this._scrollToOffset(this.getScrollOffset(), {
						adjustments: void 0,
						behavior: void 0
					});
				}
			};
			this.rafId = null;
			this.getSize = () => {
				if (!this.options.enabled) {
					this.scrollRect = null;
					return 0;
				}
				this.scrollRect = this.scrollRect ?? this.options.initialRect;
				return this.scrollRect[this.options.horizontal ? "width" : "height"];
			};
			this.getScrollOffset = () => {
				if (!this.options.enabled) {
					this.scrollOffset = null;
					return 0;
				}
				this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
				return this.scrollOffset;
			};
			this.getFurthestMeasurement = (measurements, index) => {
				const furthestMeasurementsFound = /* @__PURE__ */ new Map();
				const furthestMeasurements = /* @__PURE__ */ new Map();
				for (let m = index - 1; m >= 0; m--) {
					const measurement = measurements[m];
					if (furthestMeasurementsFound.has(measurement.lane)) continue;
					const previousFurthestMeasurement = furthestMeasurements.get(measurement.lane);
					if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) furthestMeasurements.set(measurement.lane, measurement);
					else if (measurement.end < previousFurthestMeasurement.end) furthestMeasurementsFound.set(measurement.lane, true);
					if (furthestMeasurementsFound.size === this.options.lanes) break;
				}
				return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a, b) => {
					if (a.end === b.end) return a.index - b.index;
					return a.end - b.end;
				})[0] : void 0;
			};
			this.getMeasurementOptions = memo(() => [
				this.options.count,
				this.options.paddingStart,
				this.options.scrollMargin,
				this.options.getItemKey,
				this.options.enabled,
				this.options.lanes,
				this.options.laneAssignmentMode
			], (count, paddingStart, scrollMargin, getItemKey, enabled, lanes, laneAssignmentMode) => {
				if (this.prevLanes !== void 0 && this.prevLanes !== lanes) this.lanesChangedFlag = true;
				this.prevLanes = lanes;
				this.pendingMeasuredCacheIndexes = [];
				return {
					count,
					paddingStart,
					scrollMargin,
					getItemKey,
					enabled,
					lanes,
					laneAssignmentMode
				};
			}, { key: false });
			this.getMeasurements = memo(() => [this.getMeasurementOptions(), this.itemSizeCache], ({ count, paddingStart, scrollMargin, getItemKey, enabled, lanes, laneAssignmentMode }, itemSizeCache) => {
				if (!enabled) {
					this.measurementsCache = [];
					this.itemSizeCache.clear();
					this.laneAssignments.clear();
					return [];
				}
				if (this.laneAssignments.size > count) {
					for (const index of this.laneAssignments.keys()) if (index >= count) this.laneAssignments.delete(index);
				}
				if (this.lanesChangedFlag) {
					this.lanesChangedFlag = false;
					this.lanesSettling = true;
					this.measurementsCache = [];
					this.itemSizeCache.clear();
					this.laneAssignments.clear();
					this.pendingMeasuredCacheIndexes = [];
				}
				if (this.measurementsCache.length === 0 && !this.lanesSettling) {
					this.measurementsCache = this.options.initialMeasurementsCache;
					this.measurementsCache.forEach((item) => {
						this.itemSizeCache.set(item.key, item.size);
					});
				}
				const min = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
				this.pendingMeasuredCacheIndexes = [];
				if (this.lanesSettling && this.measurementsCache.length === count) this.lanesSettling = false;
				const measurements = this.measurementsCache.slice(0, min);
				const laneLastIndex = new Array(lanes).fill(void 0);
				for (let m = 0; m < min; m++) {
					const item = measurements[m];
					if (item) laneLastIndex[item.lane] = m;
				}
				for (let i = min; i < count; i++) {
					const key = getItemKey(i);
					const cachedLane = this.laneAssignments.get(i);
					let lane;
					let start;
					const shouldCacheLane = laneAssignmentMode === "estimate" || itemSizeCache.has(key);
					if (cachedLane !== void 0 && this.options.lanes > 1) {
						lane = cachedLane;
						const prevIndex = laneLastIndex[lane];
						const prevInLane = prevIndex !== void 0 ? measurements[prevIndex] : void 0;
						start = prevInLane ? prevInLane.end + this.options.gap : paddingStart + scrollMargin;
					} else {
						const furthestMeasurement = this.options.lanes === 1 ? measurements[i - 1] : this.getFurthestMeasurement(measurements, i);
						start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
						lane = furthestMeasurement ? furthestMeasurement.lane : i % this.options.lanes;
						if (this.options.lanes > 1 && shouldCacheLane) this.laneAssignments.set(i, lane);
					}
					const measuredSize = itemSizeCache.get(key);
					const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
					const end = start + size;
					measurements[i] = {
						index: i,
						start,
						size,
						end,
						key,
						lane
					};
					laneLastIndex[lane] = i;
				}
				this.measurementsCache = measurements;
				return measurements;
			}, {
				key: "getMeasurements",
				debug: () => this.options.debug
			});
			this.calculateRange = memo(() => [
				this.getMeasurements(),
				this.getSize(),
				this.getScrollOffset(),
				this.options.lanes
			], (measurements, outerSize, scrollOffset, lanes) => {
				return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
					measurements,
					outerSize,
					scrollOffset,
					lanes
				}) : null;
			}, {
				key: "calculateRange",
				debug: () => this.options.debug
			});
			this.getVirtualIndexes = memo(() => {
				let startIndex = null;
				let endIndex = null;
				const range = this.calculateRange();
				if (range) {
					startIndex = range.startIndex;
					endIndex = range.endIndex;
				}
				this.maybeNotify.updateDeps([
					this.isScrolling,
					startIndex,
					endIndex
				]);
				return [
					this.options.rangeExtractor,
					this.options.overscan,
					this.options.count,
					startIndex,
					endIndex
				];
			}, (rangeExtractor, overscan, count, startIndex, endIndex) => {
				return startIndex === null || endIndex === null ? [] : rangeExtractor({
					startIndex,
					endIndex,
					overscan,
					count
				});
			}, {
				key: "getVirtualIndexes",
				debug: () => this.options.debug
			});
			this.indexFromElement = (node) => {
				const attributeName = this.options.indexAttribute;
				const indexStr = node.getAttribute(attributeName);
				if (!indexStr) {
					console.warn(`Missing attribute name '${attributeName}={index}' on measured element.`);
					return -1;
				}
				return parseInt(indexStr, 10);
			};
			this.shouldMeasureDuringScroll = (index) => {
				var _a;
				if (!this.scrollState || this.scrollState.behavior !== "smooth") return true;
				const scrollIndex = this.scrollState.index ?? ((_a = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : _a.index);
				if (scrollIndex !== void 0 && this.range) {
					const bufferSize = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2));
					const minIndex = Math.max(0, scrollIndex - bufferSize);
					const maxIndex = Math.min(this.options.count - 1, scrollIndex + bufferSize);
					return index >= minIndex && index <= maxIndex;
				}
				return true;
			};
			this.measureElement = (node) => {
				if (!node) {
					this.elementsCache.forEach((cached, key2) => {
						if (!cached.isConnected) {
							this.observer.unobserve(cached);
							this.elementsCache.delete(key2);
						}
					});
					return;
				}
				const index = this.indexFromElement(node);
				const key = this.options.getItemKey(index);
				const prevNode = this.elementsCache.get(key);
				if (prevNode !== node) {
					if (prevNode) this.observer.unobserve(prevNode);
					this.observer.observe(node);
					this.elementsCache.set(key, node);
				}
				if ((!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(index)) this.resizeItem(index, this.options.measureElement(node, void 0, this));
			};
			this.resizeItem = (index, size) => {
				var _a;
				const item = this.measurementsCache[index];
				if (!item) return;
				const delta = size - (this.itemSizeCache.get(item.key) ?? item.size);
				if (delta !== 0) {
					if (((_a = this.scrollState) == null ? void 0 : _a.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments)) {
						if (this.options.debug) console.info("correction", delta);
						this._scrollToOffset(this.getScrollOffset(), {
							adjustments: this.scrollAdjustments += delta,
							behavior: void 0
						});
					}
					this.pendingMeasuredCacheIndexes.push(item.index);
					this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size));
					this.notify(false);
				}
			};
			this.getVirtualItems = memo(() => [this.getVirtualIndexes(), this.getMeasurements()], (indexes, measurements) => {
				const virtualItems = [];
				for (let k = 0, len = indexes.length; k < len; k++) {
					const measurement = measurements[indexes[k]];
					virtualItems.push(measurement);
				}
				return virtualItems;
			}, {
				key: "getVirtualItems",
				debug: () => this.options.debug
			});
			this.getVirtualItemForOffset = (offset) => {
				const measurements = this.getMeasurements();
				if (measurements.length === 0) return;
				return notUndefined(measurements[findNearestBinarySearch(0, measurements.length - 1, (index) => notUndefined(measurements[index]).start, offset)]);
			};
			this.getMaxScrollOffset = () => {
				if (!this.scrollElement) return 0;
				if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
				else {
					const doc = this.scrollElement.document.documentElement;
					return this.options.horizontal ? doc.scrollWidth - this.scrollElement.innerWidth : doc.scrollHeight - this.scrollElement.innerHeight;
				}
			};
			this.getOffsetForAlignment = (toOffset, align, itemSize = 0) => {
				if (!this.scrollElement) return 0;
				const size = this.getSize();
				const scrollOffset = this.getScrollOffset();
				if (align === "auto") align = toOffset >= scrollOffset + size ? "end" : "start";
				if (align === "center") toOffset += (itemSize - size) / 2;
				else if (align === "end") toOffset -= size;
				const maxOffset = this.getMaxScrollOffset();
				return Math.max(Math.min(maxOffset, toOffset), 0);
			};
			this.getOffsetForIndex = (index, align = "auto") => {
				index = Math.max(0, Math.min(index, this.options.count - 1));
				const size = this.getSize();
				const scrollOffset = this.getScrollOffset();
				const item = this.measurementsCache[index];
				if (!item) return;
				if (align === "auto") if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) align = "end";
				else if (item.start <= scrollOffset + this.options.scrollPaddingStart) align = "start";
				else return [scrollOffset, align];
				if (align === "end" && index === this.options.count - 1) return [this.getMaxScrollOffset(), align];
				const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
				return [this.getOffsetForAlignment(toOffset, align, item.size), align];
			};
			this.scrollToOffset = (toOffset, { align = "start", behavior = "auto" } = {}) => {
				const offset = this.getOffsetForAlignment(toOffset, align);
				const now = this.now();
				this.scrollState = {
					index: null,
					align,
					behavior,
					startedAt: now,
					lastTargetOffset: offset,
					stableFrames: 0
				};
				this._scrollToOffset(offset, {
					adjustments: void 0,
					behavior
				});
				this.scheduleScrollReconcile();
			};
			this.scrollToIndex = (index, { align: initialAlign = "auto", behavior = "auto" } = {}) => {
				index = Math.max(0, Math.min(index, this.options.count - 1));
				const offsetInfo = this.getOffsetForIndex(index, initialAlign);
				if (!offsetInfo) return;
				const [offset, align] = offsetInfo;
				const now = this.now();
				this.scrollState = {
					index,
					align,
					behavior,
					startedAt: now,
					lastTargetOffset: offset,
					stableFrames: 0
				};
				this._scrollToOffset(offset, {
					adjustments: void 0,
					behavior
				});
				this.scheduleScrollReconcile();
			};
			this.scrollBy = (delta, { behavior = "auto" } = {}) => {
				const offset = this.getScrollOffset() + delta;
				const now = this.now();
				this.scrollState = {
					index: null,
					align: "start",
					behavior,
					startedAt: now,
					lastTargetOffset: offset,
					stableFrames: 0
				};
				this._scrollToOffset(offset, {
					adjustments: void 0,
					behavior
				});
				this.scheduleScrollReconcile();
			};
			this.getTotalSize = () => {
				var _a;
				const measurements = this.getMeasurements();
				let end;
				if (measurements.length === 0) end = this.options.paddingStart;
				else if (this.options.lanes === 1) end = ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0;
				else {
					const endByLane = Array(this.options.lanes).fill(null);
					let endIndex = measurements.length - 1;
					while (endIndex >= 0 && endByLane.some((val) => val === null)) {
						const item = measurements[endIndex];
						if (endByLane[item.lane] === null) endByLane[item.lane] = item.end;
						endIndex--;
					}
					end = Math.max(...endByLane.filter((val) => val !== null));
				}
				return Math.max(end - this.options.scrollMargin + this.options.paddingEnd, 0);
			};
			this._scrollToOffset = (offset, { adjustments, behavior }) => {
				this.options.scrollToFn(offset, {
					behavior,
					adjustments
				}, this);
			};
			this.measure = () => {
				this.itemSizeCache = /* @__PURE__ */ new Map();
				this.laneAssignments = /* @__PURE__ */ new Map();
				this.notify(false);
			};
			this.setOptions(opts);
		}
		scheduleScrollReconcile() {
			if (!this.targetWindow) {
				this.scrollState = null;
				return;
			}
			if (this.rafId != null) return;
			this.rafId = this.targetWindow.requestAnimationFrame(() => {
				this.rafId = null;
				this.reconcileScroll();
			});
		}
		reconcileScroll() {
			if (!this.scrollState) return;
			if (!this.scrollElement) return;
			if (this.now() - this.scrollState.startedAt > 5e3) {
				this.scrollState = null;
				return;
			}
			const offsetInfo = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0;
			const targetOffset = offsetInfo ? offsetInfo[0] : this.scrollState.lastTargetOffset;
			const STABLE_FRAMES = 1;
			const targetChanged = targetOffset !== this.scrollState.lastTargetOffset;
			if (!targetChanged && approxEqual(targetOffset, this.getScrollOffset())) {
				this.scrollState.stableFrames++;
				if (this.scrollState.stableFrames >= STABLE_FRAMES) {
					this.scrollState = null;
					return;
				}
			} else {
				this.scrollState.stableFrames = 0;
				if (targetChanged) {
					this.scrollState.lastTargetOffset = targetOffset;
					this.scrollState.behavior = "auto";
					this._scrollToOffset(targetOffset, {
						adjustments: void 0,
						behavior: "auto"
					});
				}
			}
			this.scheduleScrollReconcile();
		}
	};
	var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
		while (low <= high) {
			const middle = (low + high) / 2 | 0;
			const currentValue = getCurrentValue(middle);
			if (currentValue < value) low = middle + 1;
			else if (currentValue > value) high = middle - 1;
			else return middle;
		}
		if (low > 0) return low - 1;
		else return 0;
	};
	function calculateRange({ measurements, outerSize, scrollOffset, lanes }) {
		const lastIndex = measurements.length - 1;
		const getOffset = (index) => measurements[index].start;
		if (measurements.length <= lanes) return {
			startIndex: 0,
			endIndex: lastIndex
		};
		let startIndex = findNearestBinarySearch(0, lastIndex, getOffset, scrollOffset);
		let endIndex = startIndex;
		if (lanes === 1) while (endIndex < lastIndex && measurements[endIndex].end < scrollOffset + outerSize) endIndex++;
		else if (lanes > 1) {
			const endPerLane = Array(lanes).fill(0);
			while (endIndex < lastIndex && endPerLane.some((pos) => pos < scrollOffset + outerSize)) {
				const item = measurements[endIndex];
				endPerLane[item.lane] = item.end;
				endIndex++;
			}
			const startPerLane = Array(lanes).fill(scrollOffset + outerSize);
			while (startIndex >= 0 && startPerLane.some((pos) => pos >= scrollOffset)) {
				const item = measurements[startIndex];
				startPerLane[item.lane] = item.start;
				startIndex--;
			}
			startIndex = Math.max(0, startIndex - startIndex % lanes);
			endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
		}
		return {
			startIndex,
			endIndex
		};
	}

//#endregion
//#region packages/node_modules/@tanstack/react-virtual/dist/esm/index.js
	var useIsomorphicLayoutEffect = typeof document !== "undefined" ? react$1.useLayoutEffect : react$1.useEffect;
	function useVirtualizerBase({ useFlushSync = true, ...options }) {
		const rerender = react$1.useReducer(() => ({}), {})[1];
		const resolvedOptions = {
			...options,
			onChange: (instance2, sync) => {
				var _a;
				if (useFlushSync && sync) (0, react_dom.flushSync)(rerender);
				else rerender();
				(_a = options.onChange) == null || _a.call(options, instance2, sync);
			}
		};
		const [instance] = react$1.useState(() => new Virtualizer(resolvedOptions));
		instance.setOptions(resolvedOptions);
		useIsomorphicLayoutEffect(() => {
			return instance._didMount();
		}, []);
		useIsomorphicLayoutEffect(() => {
			return instance._willUpdate();
		});
		return instance;
	}
	function useVirtualizer(options) {
		return useVirtualizerBase({
			observeElementRect,
			observeElementOffset,
			scrollToFn: elementScroll,
			...options
		});
	}

//#endregion
//#region packages/packages/libs/editor-ui/src/components/popover/menu-list.tsx
	var ITEM_HEIGHT = 32;
	var LIST_ITEMS_BUFFER = 6;
	var MENU_LIST_PADDING_TOP = 8;
	var menuSubHeaderAbsoluteStyling = (start) => ({
		position: "absolute",
		transform: `translateY(${start + MENU_LIST_PADDING_TOP}px)`
	});
	var getAdjacentStickyIndices = (stickyIndices, range) => {
		const previousTwoStickyIndices = stickyIndices.filter((stickyIndex) => stickyIndex < range.startIndex).slice(-2);
		const nextTwoStickyIndices = stickyIndices.filter((stickyIndex) => stickyIndex > range.endIndex).slice(0, 2);
		return [...previousTwoStickyIndices, ...nextTwoStickyIndices];
	};
	var PopoverMenuList = ({ items, onSelect, onClose, selectedValue, itemStyle, onChange, "data-testid": dataTestId, menuItemContentTemplate, categoryItemContentTemplate, noResultsComponent, menuListTemplate: CustomMenuList }) => {
		const containerRef = (0, react.useRef)(null);
		const scrollTop = useScrollTop({ containerRef });
		const theme = (0, _elementor_ui.useTheme)();
		const MenuListComponent = CustomMenuList || StyledMenuList;
		const stickyIndices = (0, react.useMemo)(() => items.reduce((categoryIndices, item, index) => {
			if (item.type === "category") categoryIndices.push(index);
			return categoryIndices;
		}, []), [items]);
		const getActiveItemIndices = (range) => {
			const visibleAndStickyIndexes = [];
			for (let i = range.startIndex; i <= range.endIndex; i++) visibleAndStickyIndexes.push(i);
			getAdjacentStickyIndices(stickyIndices, range).forEach((stickyIndex) => {
				if (!visibleAndStickyIndexes.includes(stickyIndex)) visibleAndStickyIndexes.push(stickyIndex);
			});
			return visibleAndStickyIndexes.sort((a, b) => a - b);
		};
		const onChangeCallback = ({ getVirtualIndexes }) => {
			const visibleItems = getVirtualIndexes().map((index) => items[index]);
			onChange?.(visibleItems);
		};
		const virtualizer = useVirtualizer({
			count: items.length,
			getScrollElement: () => containerRef.current,
			estimateSize: () => 32,
			overscan: LIST_ITEMS_BUFFER,
			rangeExtractor: getActiveItemIndices,
			onChange: onChangeCallback
		});
		(0, react.useEffect)(() => {
			onChangeCallback(virtualizer);
		}, [items]);
		useScrollToSelected({
			selectedValue,
			items,
			virtualizer
		});
		const virtualItems = virtualizer.getVirtualItems();
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			ref: containerRef,
			sx: {
				height: "100%",
				overflowY: "auto"
			}
		}, items.length === 0 && noResultsComponent ? noResultsComponent : /* @__PURE__ */ react.createElement(MenuListComponent, {
			role: "listbox",
			style: { height: `${virtualizer.getTotalSize()}px` },
			"data-testid": dataTestId
		}, virtualItems.map((virtualRow) => {
			const item = items[virtualRow.index];
			const isLast = virtualRow.index === items.length - 1;
			const isFirst = items[0]?.type === "category" ? virtualRow.index === 1 : virtualRow.index === 0;
			const isSelected = selectedValue === item.value;
			const tabIndexFallback = !selectedValue ? 0 : -1;
			if (!item) return null;
			if (item.type === "category") {
				const shouldStick = virtualRow.start + MENU_LIST_PADDING_TOP <= scrollTop;
				return /* @__PURE__ */ react.createElement(_elementor_ui.MenuSubheader, {
					key: virtualRow.key,
					style: shouldStick ? {} : menuSubHeaderAbsoluteStyling(virtualRow.start),
					sx: {
						fontWeight: "400",
						color: "text.tertiary"
					}
				}, categoryItemContentTemplate ? categoryItemContentTemplate(item) : item.label || item.value);
			}
			const isDisabled = item.disabled;
			return /* @__PURE__ */ react.createElement(_elementor_ui.ListItem, {
				key: virtualRow.key,
				role: "option",
				"aria-selected": isSelected,
				"aria-disabled": isDisabled,
				onClick: isDisabled ? void 0 : (e) => {
					if (e.target.closest("button")) return;
					onSelect(item.value);
					onClose();
				},
				onKeyDown: (event) => {
					if (event.key === "Enter" && !isDisabled) {
						onSelect(item.value);
						onClose();
					}
					if (event.key === "ArrowDown" && isLast) {
						event.preventDefault();
						event.stopPropagation();
					}
					if (event.key === "ArrowUp" && isFirst) {
						event.preventDefault();
						event.stopPropagation();
					}
				},
				tabIndex: isSelected ? 0 : tabIndexFallback,
				sx: {
					transform: `translateY(${virtualRow.start + MENU_LIST_PADDING_TOP}px)`,
					...theme.typography.caption,
					...itemStyle ? itemStyle(item) : {}
				}
			}, menuItemContentTemplate ? menuItemContentTemplate(item) : item.label || item.value);
		})));
	};
	var StyledMenuList = (0, _elementor_ui.styled)(_elementor_ui.MenuList)(({ theme }) => ({
		"& > li": {
			height: 32,
			width: "100%",
			display: "flex",
			alignItems: "center"
		},
		"& > [role=\"option\"]": {
			lineHeight: "inherit",
			padding: theme.spacing(.75, 2, .75, 4),
			"&:hover, &:focus": { backgroundColor: theme.palette.action.hover },
			"&[aria-selected=\"true\"]": { backgroundColor: theme.palette.action.selected },
			"&[aria-disabled=\"true\"]": { color: theme.palette.text.disabled },
			cursor: "pointer",
			textOverflow: "ellipsis",
			position: "absolute",
			top: 0,
			left: 0
		},
		width: "100%",
		position: "relative"
	}));

//#endregion
//#region packages/packages/libs/editor-ui/src/components/popover/popover-action.tsx
	var SIZE = "tiny";
	function PopoverAction({ title, visible = true, icon: Icon, content: PopoverContent }) {
		const { popupState, triggerProps, popoverProps } = useFloatingActionsPopover();
		if (!visible) return null;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			placement: "top",
			title
		}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			"aria-label": title,
			size: SIZE,
			...triggerProps
		}, /* @__PURE__ */ react.createElement(Icon, { fontSize: SIZE }))), /* @__PURE__ */ react.createElement(_elementor_ui.Popover, {
			disableScrollLock: true,
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "right"
			},
			PaperProps: { sx: { my: 2.5 } },
			...popoverProps
		}, /* @__PURE__ */ react.createElement(PopoverContent, { close: popupState.close })));
	}
	function useFloatingActionsPopover() {
		const { setOpen } = useFloatingActionsBar();
		const popupState = (0, _elementor_ui.usePopupState)({ variant: "popover" });
		const triggerProps = (0, _elementor_ui.bindTrigger)(popupState);
		const popoverProps = (0, _elementor_ui.bindPopover)(popupState);
		const onClick = (e) => {
			triggerProps.onClick(e);
			setOpen(true);
		};
		const onClose = () => {
			popoverProps.onClose();
			setOpen(false);
		};
		const close = () => {
			popupState.close();
			setOpen(false);
		};
		return {
			popupState: {
				...popupState,
				close
			},
			triggerProps: {
				...triggerProps,
				onClick
			},
			popoverProps: {
				...popoverProps,
				onClose
			}
		};
	}

//#endregion
//#region packages/packages/libs/editor-ui/src/components/save-changes-dialog.tsx
	var TITLE_ID$1 = "save-changes-dialog";
	var SaveChangesDialog = ({ children, onClose }) => /* @__PURE__ */ react.createElement(_elementor_ui.Dialog, {
		open: true,
		onClose,
		"aria-labelledby": TITLE_ID$1,
		maxWidth: "xs"
	}, children);
	var SaveChangesDialogTitle = ({ children, onClose }) => /* @__PURE__ */ react.createElement(_elementor_ui.DialogTitle, {
		id: TITLE_ID$1,
		display: "flex",
		alignItems: "center",
		gap: 1,
		sx: {
			lineHeight: 1,
			justifyContent: "space-between"
		}
	}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
		direction: "row",
		alignItems: "center",
		gap: 1
	}, /* @__PURE__ */ react.createElement(_elementor_icons.AlertTriangleFilledIcon, { color: "secondary" }), children), onClose && /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
		onClick: onClose,
		size: "small"
	}, /* @__PURE__ */ react.createElement(_elementor_icons.XIcon, null)));
	var SaveChangesDialogContent = ({ children }) => /* @__PURE__ */ react.createElement(_elementor_ui.DialogContent, null, children);
	var SaveChangesDialogContentText = (props) => /* @__PURE__ */ react.createElement(_elementor_ui.DialogContentText, {
		variant: "body2",
		color: "textPrimary",
		display: "flex",
		flexDirection: "column",
		...props
	});
	var SaveChangesDialogActions = ({ actions }) => {
		const [isConfirming, setIsConfirming] = (0, react.useState)(false);
		const { cancel, confirm, discard } = actions;
		const onConfirm = async () => {
			setIsConfirming(true);
			await confirm.action();
			setIsConfirming(false);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.DialogActions, null, cancel && /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "text",
			color: "secondary",
			onClick: cancel.action
		}, cancel.label), discard && /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "text",
			color: "secondary",
			onClick: discard.action
		}, discard.label), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			color: "secondary",
			onClick: onConfirm,
			loading: isConfirming
		}, confirm.label));
	};
	SaveChangesDialog.Title = SaveChangesDialogTitle;
	SaveChangesDialog.Content = SaveChangesDialogContent;
	SaveChangesDialog.ContentText = SaveChangesDialogContentText;
	SaveChangesDialog.Actions = SaveChangesDialogActions;
	var useDialog = () => {
		const [isOpen, setIsOpen] = (0, react.useState)(false);
		const open = () => setIsOpen(true);
		const close = () => setIsOpen(false);
		return {
			isOpen,
			open,
			close
		};
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/components/confirmation-dialog.tsx
	var TITLE_ID = "confirmation-dialog";
	var ConfirmationDialog = ({ open, onClose, children }) => /* @__PURE__ */ react.createElement(_elementor_ui.Dialog, {
		open,
		onClose,
		"aria-labelledby": TITLE_ID,
		maxWidth: "sm"
	}, children);
	var ConfirmationDialogTitle = ({ children, icon: Icon = _elementor_icons.AlertOctagonFilledIcon, iconColor = "error" }) => /* @__PURE__ */ react.createElement(_elementor_ui.DialogTitle, {
		id: TITLE_ID,
		display: "flex",
		alignItems: "center",
		gap: 1,
		sx: { lineHeight: 1 }
	}, /* @__PURE__ */ react.createElement(Icon, { color: iconColor }), children);
	var ConfirmationDialogContent = ({ children }) => /* @__PURE__ */ react.createElement(_elementor_ui.DialogContent, { sx: { mt: 2 } }, children);
	var ConfirmationDialogContentText = (props) => /* @__PURE__ */ react.createElement(_elementor_ui.DialogContentText, {
		variant: "body2",
		color: "secondary",
		...props
	});
	var ConfirmationDialogActions = ({ onClose, onConfirm, cancelLabel, confirmLabel, color = "error", onSuppressMessage, suppressLabel = (0, _wordpress_i18n.__)("Don't show this again", "elementor") }) => {
		const [dontShowAgain, setDontShowAgain] = (0, react.useState)(false);
		const handleConfirm = () => {
			if (dontShowAgain && onSuppressMessage) onSuppressMessage();
			onConfirm();
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.DialogActions, { sx: onSuppressMessage ? {
			justifyContent: "space-between",
			alignItems: "center"
		} : void 0 }, onSuppressMessage && /* @__PURE__ */ react.createElement(_elementor_ui.FormControlLabel, {
			control: /* @__PURE__ */ react.createElement(_elementor_ui.Checkbox, {
				checked: dontShowAgain,
				onChange: (event) => setDontShowAgain(event.target.checked),
				size: "medium",
				color: "secondary"
			}),
			label: /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
				variant: "body2",
				color: "text.secondary"
			}, suppressLabel)
		}), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			color: "secondary",
			onClick: onClose
		}, cancelLabel ?? (0, _wordpress_i18n.__)("Not now", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			autoFocus: true,
			variant: "contained",
			color,
			onClick: handleConfirm,
			sx: { ml: 1 }
		}, confirmLabel ?? (0, _wordpress_i18n.__)("Delete", "elementor"))));
	};
	ConfirmationDialog.Title = ConfirmationDialogTitle;
	ConfirmationDialog.Content = ConfirmationDialogContent;
	ConfirmationDialog.ContentText = ConfirmationDialogContentText;
	ConfirmationDialog.Actions = ConfirmationDialogActions;

//#endregion
//#region packages/packages/libs/editor-ui/src/hooks/use-editable.ts
	var useEditable = ({ value, onSubmit, validation, onClick, onError }) => {
		const [isEditing, setIsEditing] = (0, react.useState)(false);
		const [error, setError] = (0, react.useState)(null);
		const ref = useSelection(isEditing);
		const isDirty = (newValue) => newValue !== value;
		const openEditMode = () => {
			setIsEditing(true);
		};
		const closeEditMode = () => {
			setError(null);
			onError?.(null);
			setIsEditing(false);
		};
		const submit = (newValue) => {
			if (!isDirty(newValue)) {
				closeEditMode();
				return;
			}
			if (!error) try {
				onSubmit(newValue);
			} finally {
				closeEditMode();
			}
		};
		const onChange = (event) => {
			const { innerText: newValue } = event.target;
			if (validation) {
				const updatedError = isDirty(newValue) ? validation(newValue) : null;
				setError(updatedError);
				onError?.(updatedError);
			}
		};
		const handleKeyDown = (event) => {
			event.stopPropagation();
			if (["Escape"].includes(event.key)) return closeEditMode();
			if (["Enter"].includes(event.key)) {
				event.preventDefault();
				if (!error) ref.current?.blur();
			}
		};
		const handleClick = (event) => {
			if (isEditing) event.stopPropagation();
			onClick?.(event);
		};
		const handleBlur = () => {
			if (error) {
				closeEditMode();
				return;
			}
			submit(ref.current.innerText);
		};
		const listeners = {
			onClick: handleClick,
			onKeyDown: handleKeyDown,
			onInput: onChange,
			onBlur: handleBlur
		};
		const attributes = {
			value,
			role: "textbox",
			contentEditable: isEditing,
			...isEditing && { suppressContentEditableWarning: true }
		};
		return {
			ref,
			isEditing,
			openEditMode,
			closeEditMode,
			value,
			error,
			getProps: () => ({
				...listeners,
				...attributes
			})
		};
	};
	var useSelection = (isEditing) => {
		const ref = (0, react.useRef)(null);
		(0, react.useEffect)(() => {
			if (isEditing) selectAll(ref.current);
		}, [isEditing]);
		return ref;
	};
	var selectAll = (el) => {
		const selection = getSelection();
		if (!selection || !el) return;
		const range = document.createRange();
		range.selectNodeContents(el);
		selection.removeAllRanges();
		selection.addRange(range);
	};

//#endregion
//#region packages/packages/libs/editor-ui/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		CollapseIcon: () => CollapseIcon,
		CollapsibleContent: () => CollapsibleContent,
		ConfirmationDialog: () => ConfirmationDialog,
		CtaButton: () => CtaButton,
		EditableField: () => EditableField,
		EllipsisWithTooltip: () => EllipsisWithTooltip,
		FileUploadDropzone: () => FileUploadDropzone,
		FileUploadRow: () => FileUploadRow,
		FloatingActionsBar: () => FloatingActionsBar,
		Form: () => Form,
		GlobalDialog: () => GlobalDialog,
		ITEM_HEIGHT: () => 32,
		InfoAlert: () => InfoAlert,
		InfoTipCard: () => InfoTipCard,
		IntroductionModal: () => IntroductionModal,
		MenuItemInfotip: () => MenuItemInfotip,
		MenuListItem: () => MenuListItem,
		PopoverAction: () => PopoverAction,
		PopoverBody: () => PopoverBody,
		PopoverHeader: () => PopoverHeader,
		PopoverMenuList: () => PopoverMenuList,
		PromotionAlert: () => PromotionAlert,
		PromotionChip: () => PromotionChip,
		PromotionInfotip: () => PromotionInfotip,
		PromotionPopover: () => PromotionPopover,
		SaveChangesDialog: () => SaveChangesDialog,
		SearchField: () => SearchField,
		SectionPopoverBody: () => SectionPopoverBody,
		SectionRefContext: () => SectionRefContext,
		StyledMenuList: () => StyledMenuList,
		ThemeProvider: () => ThemeProvider,
		WarningInfotip: () => WarningInfotip,
		closeDialog: () => closeDialog,
		getCollapsibleValue: () => getCollapsibleValue,
		openDialog: () => openDialog,
		useCanvasClickHandler: () => useCanvasClickHandler,
		useDialog: () => useDialog,
		useEditable: () => useEditable,
		useFloatingActionsBar: () => useFloatingActionsBar,
		useSectionWidth: () => useSectionWidth,
		useTextFieldAutoSelect: () => useTextFieldAutoSelect
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorUi = src_exports;

//#endregion
})(elementorV2.icons, elementorV2.ui, React, wp.i18n, elementorV2.editorV1Adapters, ReactDOM);
window.elementorV2.editorUi?.init?.();
//# sourceMappingURL=editor-ui.js.map