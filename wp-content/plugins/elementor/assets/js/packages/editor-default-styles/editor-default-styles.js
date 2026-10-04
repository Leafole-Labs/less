(function(react, _elementor_editor_controls, _elementor_editor_editing_panel, _elementor_editor_responsive, _elementor_editor_styles_repository, _elementor_editor_ui, _elementor_menus, _elementor_query, _elementor_session, _elementor_store, _elementor_ui, _wordpress_i18n, _elementor_editor_styles, _elementor_utils, _elementor_http_client, _elementor_icons, _elementor_editor, _elementor_editor_v1_adapters) {

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

//#region packages/packages/core/editor-default-styles/src/allowed-tags.ts
	var getElementorConfig = () => window.elementor?.config ?? {};
	var getAllowedDefaultStyleTags = () => {
		const tags = getElementorConfig().atomic?.default_styles?.allowed_tags;
		if (!tags?.length) return [];
		return tags;
	};
	var getDefaultActiveTag = (tags) => {
		if (tags.includes("h1")) return "h1";
		return tags[0] ?? "";
	};
	var isAllowedDefaultStyleTag = (tag, tags = getAllowedDefaultStyleTags()) => tags.includes(tag);

//#endregion
//#region packages/packages/core/editor-default-styles/src/capabilities.ts
	var UPDATE_DEFAULT_STYLES_CAPABILITY_KEY = "manage_options";
	var getCapabilities = () => {
		return {
			update: UPDATE_DEFAULT_STYLES_CAPABILITY_KEY,
			create: UPDATE_DEFAULT_STYLES_CAPABILITY_KEY,
			delete: UPDATE_DEFAULT_STYLES_CAPABILITY_KEY,
			updateProps: UPDATE_DEFAULT_STYLES_CAPABILITY_KEY
		};
	};

//#endregion
//#region packages/packages/core/editor-default-styles/src/store.ts
	var initialState = {
		data: {},
		initialData: {},
		isDirty: false
	};
	var SLICE_NAME = "defaultStyles";
	var slice = (0, _elementor_store.__createSlice)({
		name: SLICE_NAME,
		initialState,
		reducers: {
			load(state, { payload: { data } }) {
				const normalizedData = Array.isArray(data) ? {} : data;
				state.initialData = structuredClone(normalizedData);
				state.data = structuredClone(normalizedData);
				state.isDirty = false;
			},
			update(state, { payload }) {
				state.data[payload.style.id] = {
					...state.data[payload.style.id],
					...payload.style
				};
				state.isDirty = true;
			},
			updateProps(state, { payload }) {
				const style = state.data[payload.id] ?? {
					id: payload.id,
					label: payload.id,
					type: "class",
					variants: []
				};
				const variant = (0, _elementor_editor_styles.getVariantByMeta)(style, payload.meta);
				let customCss = ("custom_css" in payload ? payload.custom_css : variant?.custom_css) ?? null;
				customCss = customCss?.raw ? customCss : null;
				if (variant) {
					const payloadProps = JSON.parse(JSON.stringify(payload.props));
					if ((payload.mode ?? "merge") === "replace") variant.props = payloadProps;
					else variant.props = {
						...variant.props,
						...payloadProps
					};
					variant.custom_css = customCss;
				} else style.variants.push({
					meta: payload.meta,
					props: payload.props,
					custom_css: customCss
				});
				state.data[payload.id] = style;
				state.isDirty = true;
			},
			reset(state) {
				state.data = state.initialData;
				state.isDirty = false;
			},
			commit(state) {
				state.initialData = state.data;
				state.isDirty = false;
			},
			deleteTag(state, { payload }) {
				delete state.data[payload];
				state.isDirty = true;
			}
		}
	});
	var selectData = (0, _elementor_store.__createSelector)((state) => state.defaultStyles.data, (data) => data);
	var selectIsDirty = (0, _elementor_store.__createSelector)((state) => state.defaultStyles.isDirty, (isDirty) => isDirty);
	var selectInitialData = (0, _elementor_store.__createSelector)((state) => state.defaultStyles.initialData, (initialData) => initialData);
	var selectTagStyle = (0, _elementor_store.__createSelector)([selectData, (_state, id) => id], (data, id) => data[id]);

//#endregion
//#region packages/packages/core/editor-default-styles/src/default-styles-provider.ts
	var DEFAULT_STYLES_PROVIDER_KEY = "default-styles";
	var DEFAULT_STYLES_CSS_NAME_PREFIX = "e-default-";
	var resolveCssName = (id) => `${DEFAULT_STYLES_CSS_NAME_PREFIX}${id}`;
	var placeholderDefinition = (id) => ({
		id,
		label: id,
		type: "class",
		variants: []
	});
	var asClassDefinition = (style) => ({
		...style,
		type: "class"
	});
	var defaultStylesStylesProvider = (0, _elementor_editor_styles_repository.createStylesProvider)({
		key: DEFAULT_STYLES_PROVIDER_KEY,
		priority: 15,
		labels: {
			singular: (0, _wordpress_i18n.__)("tag", "elementor"),
			plural: (0, _wordpress_i18n.__)("tags", "elementor")
		},
		subscribe: (cb) => subscribeWithStates(cb),
		capabilities: getCapabilities(),
		actions: {
			all: () => getAllowedDefaultStyleTags().map((tag) => {
				const style = selectData((0, _elementor_store.__getState)())[tag];
				return style ? asClassDefinition(style) : placeholderDefinition(tag);
			}),
			get: (id) => {
				const style = selectData((0, _elementor_store.__getState)())[id];
				return style ? asClassDefinition(style) : placeholderDefinition(id);
			},
			resolveCssName,
			update: (payload) => {
				(0, _elementor_store.__dispatch)(slice.actions.update({ style: payload }));
			},
			delete: (id) => {
				(0, _elementor_store.__dispatch)(slice.actions.deleteTag(id));
			},
			updateProps: (args) => {
				(0, _elementor_store.__dispatch)(slice.actions.updateProps({
					id: args.id,
					meta: args.meta,
					props: args.props,
					mode: args.mode
				}));
			},
			updateCustomCss: (args) => {
				(0, _elementor_store.__dispatch)(slice.actions.updateProps({
					id: args.id,
					meta: args.meta,
					custom_css: args.custom_css,
					props: {}
				}));
			}
		}
	});
	var subscribeWithStates = (cb) => {
		let previousState = selectData((0, _elementor_store.__getState)());
		return (0, _elementor_store.__subscribeWithSelector)((state) => selectData(state), (currentState) => {
			cb(previousState, currentState);
			previousState = currentState;
		});
	};

//#endregion
//#region packages/packages/core/editor-default-styles/src/api.ts
	var RESOURCE_URL = "/default-styles";
	var BASE_URL = "elementor/v1";
	var apiClient = {
		all: () => (0, _elementor_http_client.httpService)().get(`${BASE_URL}${RESOURCE_URL}`),
		put: (tag, variants) => (0, _elementor_http_client.httpService)().put(`${BASE_URL}${RESOURCE_URL}/${tag}`, {
			type: "class",
			variants
		}),
		delete: (tag) => (0, _elementor_http_client.httpService)().delete(`${BASE_URL}${RESOURCE_URL}/${tag}`)
	};

//#endregion
//#region packages/packages/core/editor-default-styles/src/save-default-styles.ts
	function getChangedTags(state) {
		const current = selectData(state);
		const initial = selectInitialData(state);
		const changed = [];
		Object.keys(current).forEach((tag) => {
			const currentStyle = current[tag];
			const initialStyle = initial[tag];
			if (!initialStyle || (0, _elementor_utils.hash)(currentStyle) !== (0, _elementor_utils.hash)(initialStyle)) changed.push(tag);
		});
		Object.keys(initial).forEach((tag) => {
			if (!current[tag]) changed.push(tag);
		});
		return changed;
	}
	async function saveDefaultStyles() {
		const state = (0, _elementor_store.__getState)();
		if (!selectIsDirty(state)) return;
		const data = selectData(state);
		const changedTags = getChangedTags(state);
		await Promise.all(changedTags.map(async (tag) => {
			const style = data[tag];
			if (!style || style.variants.length === 0) {
				await apiClient.delete(tag);
				return;
			}
			await apiClient.put(tag, style.variants);
		}));
		(0, _elementor_store.__dispatch)(slice.actions.commit());
	}

//#endregion
//#region packages/packages/core/editor-default-styles/src/components/tag-state-menu.tsx
	function TagStateMenu({ popupState, anchorEl, activeState, onSelectState }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Menu, {
			MenuListProps: {
				dense: true,
				sx: { minWidth: "160px" }
			},
			...(0, _elementor_ui.bindMenu)(popupState),
			anchorEl,
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "left"
			},
			transformOrigin: {
				horizontal: "left",
				vertical: -4
			},
			disableAutoFocusItem: true
		}, /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.PseudoStateMenuItems, {
			states: _elementor_editor_editing_panel.DEFAULT_PSEUDO_STATES,
			activeState,
			onSelectState,
			onClose: popupState.close
		}));
	}

//#endregion
//#region packages/packages/core/editor-default-styles/src/components/tag-chip.tsx
	var CHIP_SIZE = "tiny";
	function TagChip({ label, chipProps, activeState, onSelectState }) {
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			popupId: "tag-state-menu"
		});
		const [chipRef, setChipRef] = (0, react.useState)(null);
		const { onDelete: _onDelete, ...chipGroupProps } = chipProps;
		const isShowingState = Boolean(activeState);
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.UnstableChipGroup, {
			ref: setChipRef,
			...chipGroupProps,
			"aria-label": `Edit ${label}`,
			role: "group",
			sx: (theme) => ({ "&.MuiChipGroup-root.MuiAutocomplete-tag": { margin: theme.spacing(.125) } })
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			size: CHIP_SIZE,
			label,
			variant: isShowingState ? "standard" : "filled",
			shape: "rounded",
			color: "default",
			onClick: () => {
				if (isShowingState) onSelectState(null);
			},
			sx: (theme) => ({
				lineHeight: 1,
				borderRadius: `${theme.shape.borderRadius * .75}px`
			})
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			icon: isShowingState ? void 0 : /* @__PURE__ */ react.createElement(_elementor_icons.DotsVerticalIcon, { fontSize: "tiny" }),
			size: CHIP_SIZE,
			label: isShowingState ? /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
				direction: "row",
				gap: .5,
				alignItems: "center"
			}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "inherit" }, activeState), /* @__PURE__ */ react.createElement(_elementor_icons.DotsVerticalIcon, { fontSize: "tiny" })) : void 0,
			variant: "filled",
			shape: "rounded",
			color: "default",
			...(0, _elementor_ui.bindTrigger)(popupState),
			"aria-label": (0, _wordpress_i18n.__)("Open tag state menu", "elementor"),
			sx: (theme) => ({
				borderRadius: `${theme.shape.borderRadius * .75}px`,
				paddingRight: 0,
				...!isShowingState ? { paddingLeft: 0 } : {},
				".MuiChip-label": isShowingState ? { paddingRight: 0 } : { padding: 0 }
			})
		})), /* @__PURE__ */ react.createElement(TagStateMenu, {
			popupState,
			anchorEl: chipRef,
			activeState,
			onSelectState
		}));
	}

//#endregion
//#region packages/packages/core/editor-default-styles/src/components/default-styles-tab-embedded.tsx
	var { useMenuItems } = _elementor_menus.controlActionsMenu;
	var SHIM_ELEMENT_ID = "default-styles-editor-shim";
	var SHIM_CLASSES_PROP = "__default_styles_classes__";
	var TAG_SELECTOR_ID = "default-styles-tag-selector";
	var LAST_ACTIVE_TAG_STORAGE_KEY = `default-styles/last-active-tag`;
	function readStoredActiveTag(allowedTags) {
		const storedTag = (0, _elementor_session.getSessionStorageItem)(LAST_ACTIVE_TAG_STORAGE_KEY);
		if (storedTag && isAllowedDefaultStyleTag(storedTag, allowedTags)) return storedTag;
		return getDefaultActiveTag(allowedTags);
	}
	function toTagChip(tag) {
		return {
			label: tag,
			value: tag,
			fixed: true
		};
	}
	var shimElement = {
		id: SHIM_ELEMENT_ID,
		type: "default-style"
	};
	var shimElementType = {
		key: "default-style",
		controls: [],
		propsSchema: {},
		title: (0, _wordpress_i18n.__)("Default Style", "elementor")
	};
	function DefaultStylesTabEmbedded({ onRequestClose, onExposeCloseAttempt }) {
		const allowedTags = (0, react.useMemo)(() => getAllowedDefaultStyleTags(), []);
		const tagOptions = (0, react.useMemo)(() => allowedTags.map((tag) => ({
			label: tag,
			value: tag
		})), [allowedTags]);
		const [selectedTag, setSelectedTagState] = (0, react.useState)(() => readStoredActiveTag(allowedTags));
		const [activeStyleState, setActiveStyleState] = (0, react.useState)(null);
		const breakpoint = (0, _elementor_editor_responsive.useActiveBreakpoint)();
		const menuItems = useMenuItems().default;
		const controlReplacements = (0, _elementor_editor_controls.getControlReplacements)();
		const isDirty = (0, _elementor_store.__useSelector)(selectIsDirty);
		const { mutateAsync: save, isPending: isSaving } = useSave();
		const { open: openSaveChangesDialog, close: closeSaveChangesDialog, isOpen: isSaveChangesDialogOpen } = (0, _elementor_editor_ui.useDialog)();
		const { userCan } = (0, _elementor_editor_styles_repository.useUserStylesCapability)();
		const canEdit = userCan(DEFAULT_STYLES_PROVIDER_KEY).updateProps;
		const setSelectedTag = (tag) => {
			setSelectedTagState(tag);
			(0, _elementor_session.setSessionStorageItem)(LAST_ACTIVE_TAG_STORAGE_KEY, tag);
		};
		const handleClosePanel = (0, react.useCallback)(() => {
			if (canEdit && isDirty) {
				openSaveChangesDialog();
				return;
			}
			onRequestClose();
		}, [
			canEdit,
			isDirty,
			onRequestClose,
			openSaveChangesDialog
		]);
		(0, react.useEffect)(() => {
			if (!onExposeCloseAttempt) return;
			onExposeCloseAttempt(() => handleClosePanel());
			return () => onExposeCloseAttempt(null);
		}, [onExposeCloseAttempt, handleClosePanel]);
		usePreventUnload(canEdit && isDirty);
		const handleTagSelect = (_selected, reason, option) => {
			if (reason !== "selectOption" || !option.value) return;
			setSelectedTag(option.value);
			setActiveStyleState(null);
		};
		const resetAndClosePanel = () => {
			(0, _elementor_store.__dispatch)(slice.actions.reset());
			closeSaveChangesDialog();
			onRequestClose();
		};
		const handleSaveAndContinue = async () => {
			try {
				await save();
			} catch {
				return;
			}
			closeSaveChangesDialog();
			onRequestClose();
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.ErrorBoundary, { fallback: null }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.ThemeProvider, null, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlActionsProvider, { items: menuItems }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlReplacementsProvider, { replacements: controlReplacements }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { sx: {
			flex: 1,
			minHeight: 0,
			overflow: "hidden",
			display: "flex",
			flexDirection: "column"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			flex: 1,
			minHeight: 0,
			overflow: "auto"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { sx: {
			px: 2,
			pt: 1,
			gap: 1
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.FormControl, {
			fullWidth: true,
			size: "small"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.FormLabel, {
			htmlFor: TAG_SELECTOR_ID,
			size: "small",
			sx: { mb: 1 }
		}, (0, _wordpress_i18n.__)("Tag", "elementor")), /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.CreatableAutocomplete, {
			id: TAG_SELECTOR_ID,
			size: "tiny",
			placeholder: (0, _wordpress_i18n.__)("Type tag name", "elementor"),
			options: tagOptions,
			selected: [toTagChip(selectedTag)],
			onSelect: handleTagSelect,
			renderTags: (values, getTagProps) => values.map((value, index) => /* @__PURE__ */ react.createElement(TagChip, {
				key: value.value ?? value.label,
				label: value.label,
				chipProps: getTagProps({ index }),
				activeState: activeStyleState,
				onSelectState: setActiveStyleState
			}))
		}))), /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.ElementProvider, {
			element: shimElement,
			elementType: shimElementType,
			settings: {}
		}, /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.ClassesPropProvider, { prop: SHIM_CLASSES_PROP }, /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.StyleProvider, {
			meta: {
				breakpoint,
				state: activeStyleState
			},
			id: selectedTag,
			setId: () => {},
			setMetaState: setActiveStyleState
		}, /* @__PURE__ */ react.createElement(_elementor_session.SessionStorageProvider, { prefix: selectedTag }, /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.StyleInheritanceProvider, null, /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.SectionsList, null, /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.StyleSections, null), /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.StyleTabSlot, null)), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { height: "150px" } }))))))), canEdit ? /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			flexShrink: 0,
			px: 2,
			py: 1.5
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			fullWidth: true,
			size: "small",
			color: "global",
			variant: "contained",
			onClick: () => void save(),
			disabled: !isDirty,
			loading: isSaving
		}, (0, _wordpress_i18n.__)("Save changes", "elementor"))) : null))), canEdit && isSaveChangesDialogOpen && /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.Title, { onClose: closeSaveChangesDialog }, (0, _wordpress_i18n.__)("You have unsaved changes", "elementor")), /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.Content, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.ContentText, null, (0, _wordpress_i18n.__)("You have unsaved changes in Default Styles.", "elementor")), /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.ContentText, null, (0, _wordpress_i18n.__)("To avoid losing your updates, save your changes before leaving.", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.Actions, { actions: {
			discard: {
				label: (0, _wordpress_i18n.__)("Discard", "elementor"),
				action: resetAndClosePanel
			},
			confirm: {
				label: (0, _wordpress_i18n.__)("Save & Continue", "elementor"),
				action: handleSaveAndContinue
			}
		} }))));
	}
	function useSave() {
		return (0, _elementor_query.useMutation)({ mutationFn: () => saveDefaultStyles() });
	}
	function usePreventUnload(isDirty) {
		(0, react.useEffect)(() => {
			const handleBeforeUnload = (event) => {
				if (isDirty) event.preventDefault();
			};
			window.addEventListener("beforeunload", handleBeforeUnload);
			return () => {
				window.removeEventListener("beforeunload", handleBeforeUnload);
			};
		}, [isDirty]);
	}

//#endregion
//#region packages/packages/core/editor-default-styles/src/load-default-styles.ts
	async function loadDefaultStyles() {
		try {
			const items = (await apiClient.all()).data.data;
			(0, _elementor_store.__dispatch)(slice.actions.load({ data: items }));
		} catch {}
	}

//#endregion
//#region packages/packages/core/editor-default-styles/src/components/populate-store.tsx
	var V2_PANEL_ROUTE = "panel/v2";
	function PopulateStore() {
		(0, react.useEffect)(() => {
			loadDefaultStyles();
			(0, _elementor_editor_v1_adapters.registerDataHook)("after", "editor/documents/attach-preview", async () => {
				if (selectIsDirty((0, _elementor_store.__getState)())) return;
				await loadDefaultStyles();
			});
			return (0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.routeCloseEvent)(V2_PANEL_ROUTE), () => {
				if (selectIsDirty((0, _elementor_store.__getState)())) return;
				loadDefaultStyles();
			});
		}, []);
		return null;
	}

//#endregion
//#region packages/packages/core/editor-default-styles/src/init.ts
	function init() {
		(0, _elementor_store.__registerSlice)(slice);
		(0, _elementor_editor_editing_panel.registerElementPanelDefaults)("default-style", {
			defaultTab: "style",
			defaultSectionsExpanded: { style: [] }
		});
		_elementor_editor_styles_repository.stylesRepository.register(defaultStylesStylesProvider);
		(0, _elementor_editor.injectIntoLogic)({
			id: "default-styles-populate-store",
			component: PopulateStore
		});
	}

//#endregion
//#region packages/packages/core/editor-default-styles/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		DefaultStylesTabEmbedded: () => DefaultStylesTabEmbedded,
		init: () => init
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorDefaultStyles = src_exports;

//#endregion
})(React, elementorV2.editorControls, elementorV2.editorEditingPanel, elementorV2.editorResponsive, elementorV2.editorStylesRepository, elementorV2.editorUi, elementorV2.menus, elementorV2.query, elementorV2.session, elementorV2.store, elementorV2.ui, wp.i18n, elementorV2.editorStyles, elementorV2.utils, elementorV2.httpClient, elementorV2.icons, elementorV2.editor, elementorV2.editorV1Adapters);
window.elementorV2.editorDefaultStyles?.init?.();
//# sourceMappingURL=editor-default-styles.js.map