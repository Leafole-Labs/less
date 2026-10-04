(function(_elementor_editor, _elementor_editor_canvas, _elementor_editor_documents, _elementor_editor_editing_panel, _elementor_editor_elements_panel, _elementor_editor_embedded_documents_manager, _elementor_editor_v1_adapters, _elementor_store, _wordpress_i18n, _elementor_http_client, react, _elementor_editor_ui, _elementor_ui, _elementor_utils, _elementor_icons, _elementor_editor_current_user, _elementor_editor_notifications, _elementor_editor_elements, _elementor_editor_props, _elementor_schema, _elementor_events, _elementor_editor_panels, _elementor_editor_controls, _elementor_editor_templates) {

//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp$1 = Object.defineProperty;
	var __name = (target, value) => __defProp$1(target, "name", {
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
			__defProp$1(target, name, {
				get: all[name],
				enumerable: true
			});
		}
		if (!no_symbols) {
			__defProp$1(target, Symbol.toStringTag, { value: "Module" });
		}
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) {
					__defProp$1(to, key, {
						get: ((k) => from[k]).bind(null, key),
						enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
					});
				}
			}
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp$1(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));

//#endregion
react = __toESM(react);

//#region packages/packages/core/editor-components/src/store/store-types.ts
	var initialState = {
		data: [],
		unpublishedData: [],
		loadStatus: "idle",
		createdThisSession: [],
		archivedThisSession: [],
		path: [],
		currentComponentId: null,
		updatedComponentNames: {},
		sanitized: {}
	};
	var SLICE_NAME = "components";

//#endregion
//#region packages/packages/core/editor-components/src/api.ts
	var BASE_URL = "elementor/v1/components";
	var getParams = (id) => ({
		action: "get_document_config",
		unique_id: `document-config-${id}`,
		data: { id }
	});
	var apiClient = {
		get: () => (0, _elementor_http_client.httpService)().get(`${BASE_URL}`).then((res) => res.data.data),
		create: (payload) => (0, _elementor_http_client.httpService)().post(`${BASE_URL}`, payload).then((res) => res.data.data),
		updateStatuses: (ids, status) => (0, _elementor_http_client.httpService)().put(`${BASE_URL}/status`, {
			ids,
			status
		}),
		getComponentConfig: (id) => _elementor_editor_v1_adapters.ajax.load(getParams(id)),
		invalidateComponentConfigCache: (id) => _elementor_editor_v1_adapters.ajax.invalidateCache(getParams(id)),
		getComponentLockStatus: async (componentId) => await (0, _elementor_http_client.httpService)().get(`${BASE_URL}/lock-status`, { params: { componentId } }).then((res) => {
			const { is_current_user_allow_to_edit: isAllowedToSwitchDocument, locked_by: lockedBy } = res.data.data;
			return {
				isAllowedToSwitchDocument,
				lockedBy: lockedBy || ""
			};
		}),
		lockComponent: async (componentId) => await (0, _elementor_http_client.httpService)().post(`${BASE_URL}/lock`, { componentId }).then((res) => res.data),
		unlockComponent: async (componentId) => await (0, _elementor_http_client.httpService)().post(`${BASE_URL}/unlock`, { componentId }).then((res) => res.data),
		getOverridableProps: async (componentIds) => await (0, _elementor_http_client.httpService)().get(`${BASE_URL}/overridable-props`, { params: { "componentIds[]": componentIds } }).then((res) => res.data),
		updateArchivedComponents: async (componentIds, status) => await (0, _elementor_http_client.httpService)().post(`${BASE_URL}/archive`, {
			componentIds,
			status
		}).then((res) => res.data.data),
		updateComponentTitle: (updatedComponentNames, status) => (0, _elementor_http_client.httpService)().post(`${BASE_URL}/update-titles`, {
			components: updatedComponentNames,
			status
		}).then((res) => res.data.data),
		validate: async (payload) => await (0, _elementor_http_client.httpService)().post(`${BASE_URL}/create-validate`, payload).then((res) => res.data)
	};

//#endregion
//#region packages/packages/core/editor-components/src/store/thunks.ts
	var loadComponents = (0, _elementor_store.__createAsyncThunk)("components/load", async () => {
		return await apiClient.get();
	});

//#endregion
//#region packages/packages/core/editor-components/src/store/extensible-slice.ts
	var extraReducersMap = /* @__PURE__ */ new Map();
	function registerComponentsReducer(name, reducer) {
		extraReducersMap.set(`${SLICE_NAME}/${name}`, reducer);
	}
	function createComponentsAction(name) {
		const action = (0, _elementor_store.__createAction)(`${SLICE_NAME}/${name}`);
		return {
			action,
			register(reducer) {
				registerComponentsReducer(name, reducer);
			},
			dispatch(payload) {
				(0, _elementor_store.__dispatch)(action(payload));
			}
		};
	}
	var baseSlice = (0, _elementor_store.__createSlice)({
		name: SLICE_NAME,
		initialState,
		reducers: {
			add: (state, { payload }) => {
				if (Array.isArray(payload)) state.data = [...payload, ...state.data];
				else state.data.unshift(payload);
			},
			load: (state, { payload }) => {
				state.data = payload;
			},
			addUnpublished: (state, { payload }) => {
				state.unpublishedData.unshift(payload);
			},
			removeUnpublished: (state, { payload }) => {
				const uidsToRemove = Array.isArray(payload) ? payload : [payload];
				state.unpublishedData = state.unpublishedData.filter((component) => !uidsToRemove.includes(component.uid));
			},
			resetUnpublished: (state) => {
				state.unpublishedData = [];
			},
			addCreatedThisSession: (state, { payload }) => {
				state.createdThisSession.push(payload);
			},
			removeCreatedThisSession: (state, { payload }) => {
				state.createdThisSession = state.createdThisSession.filter((uid) => uid !== payload);
			},
			archive: (state, { payload }) => {
				const component = state.data.find((comp) => comp.id === payload);
				if (component) {
					component.isArchived = true;
					state.archivedThisSession.push(payload);
				}
			},
			setCurrentComponentId: (state, { payload }) => {
				state.currentComponentId = payload;
			},
			setPath: (state, { payload }) => {
				state.path = payload;
			},
			setOverridableProps: (state, { payload }) => {
				const component = state.data.find((comp) => comp.id === payload.componentId);
				if (!component) return;
				component.overridableProps = payload.overridableProps;
			},
			loadOverridableProps: (state, { payload }) => {
				Object.keys(payload).forEach((id) => {
					const componentId = Number(id);
					const overridableProps = payload[componentId];
					const component = state.data.find((comp) => comp.id === componentId);
					if (!component || !overridableProps) return;
					component.overridableProps = overridableProps;
				});
			},
			rename: (state, { payload }) => {
				const component = state.data.find((comp) => comp.uid === payload.componentUid);
				if (!component) return;
				if (component.id) state.updatedComponentNames[component.id] = payload.name;
				component.name = payload.name;
			},
			cleanUpdatedComponentNames: (state) => {
				state.updatedComponentNames = {};
			},
			updateComponentSanitizedAttribute: (state, { payload: { componentId, attribute } }) => {
				if (!state.sanitized[componentId]) state.sanitized[componentId] = {};
				state.sanitized[componentId][attribute] = true;
			},
			resetSanitizedComponents: (state) => {
				state.sanitized = {};
			}
		},
		extraReducers: (builder) => {
			builder.addCase(loadComponents.fulfilled, (state, { payload }) => {
				state.data = payload;
				state.loadStatus = "idle";
			});
			builder.addCase(loadComponents.pending, (state) => {
				state.loadStatus = "pending";
			});
			builder.addCase(loadComponents.rejected, (state) => {
				state.loadStatus = "error";
			});
		}
	});
	var slice = {
		...baseSlice,
		reducer(state, action) {
			const nextState = baseSlice.reducer(state, action);
			const extraReducer = extraReducersMap.get(action.type);
			if (!extraReducer || !nextState) return nextState;
			const clonedState = structuredClone(nextState);
			extraReducer(clonedState, action);
			return clonedState;
		}
	};

//#endregion
//#region packages/packages/core/editor-components/src/store/store.ts
	var selectData = (state) => state[SLICE_NAME].data;
	var selectArchivedThisSession = (state) => state[SLICE_NAME].archivedThisSession;
	var selectLoadStatus = (state) => state[SLICE_NAME].loadStatus;
	var selectUnpublishedData = (state) => state[SLICE_NAME].unpublishedData;
	var getCreatedThisSession = (state) => state[SLICE_NAME].createdThisSession;
	var getPath = (state) => state[SLICE_NAME].path;
	var getCurrentComponentId = (state) => state[SLICE_NAME].currentComponentId;
	var selectComponent = (state, componentId) => state[SLICE_NAME].data.find((component) => component.id === componentId);
	var useComponent = (componentId) => {
		return (0, _elementor_store.__useSelector)((state) => componentId ? selectComponent(state, componentId) : null);
	};
	var selectComponentByUid = (state, componentUid) => state["components"].data.find((component) => component.uid === componentUid) ?? state["components"].unpublishedData.find((component) => component.uid === componentUid);
	var selectComponents = (0, _elementor_store.__createSelector)(selectData, selectUnpublishedData, (data, unpublishedData) => [...unpublishedData.map((item) => ({
		uid: item.uid,
		name: item.name,
		overridableProps: item.overridableProps
	})), ...data.filter((component) => !component.isArchived)]);
	var selectUnpublishedComponents = (0, _elementor_store.__createSelector)(selectUnpublishedData, (unpublishedData) => unpublishedData);
	var selectLoadIsPending = (0, _elementor_store.__createSelector)(selectLoadStatus, (status) => status === "pending");
	var selectLoadIsError = (0, _elementor_store.__createSelector)(selectLoadStatus, (status) => status === "error");
	var selectCreatedThisSession = (0, _elementor_store.__createSelector)(getCreatedThisSession, (createdThisSession) => createdThisSession);
	var DEFAULT_OVERRIDABLE_PROPS = {
		props: {},
		groups: {
			items: {},
			order: []
		}
	};
	var selectOverridableProps = (0, _elementor_store.__createSelector)(selectComponent, (component) => {
		if (!component) return;
		return component.overridableProps ?? DEFAULT_OVERRIDABLE_PROPS;
	});
	var useOverridableProps = (componentId) => {
		return (0, _elementor_store.__useSelector)((state) => componentId ? selectOverridableProps(state, componentId) : null);
	};
	var selectIsOverridablePropsLoaded = (0, _elementor_store.__createSelector)(selectComponent, (component) => {
		return !!component?.overridableProps;
	});
	var selectPath = (0, _elementor_store.__createSelector)(getPath, (path) => path);
	var selectCurrentComponentId = (0, _elementor_store.__createSelector)(getCurrentComponentId, (currentComponentId) => currentComponentId);
	var selectCurrentComponent = (0, _elementor_store.__createSelector)(selectData, getCurrentComponentId, (data, currentComponentId) => data.find((component) => component.id === currentComponentId));
	var useCurrentComponentId = () => {
		return (0, _elementor_store.__useSelector)(selectCurrentComponentId);
	};
	var useCurrentComponent = () => {
		return (0, _elementor_store.__useSelector)(selectCurrentComponent);
	};
	var selectUpdatedComponentNames = (0, _elementor_store.__createSelector)((state) => state[SLICE_NAME].updatedComponentNames, (updatedComponentNames) => Object.entries(updatedComponentNames).map(([componentId, title]) => ({
		componentId: Number(componentId),
		title
	})));
	var useSanitizedComponents = () => {
		return (0, _elementor_store.__useSelector)((state) => state[SLICE_NAME].sanitized);
	};
	var useIsSanitizedComponent = (componentId, key) => {
		const sanitizedComponents = useSanitizedComponents();
		if (!componentId) return false;
		return !!sanitizedComponents[componentId]?.[key];
	};

//#endregion
//#region packages/packages/core/editor-components/src/utils/component-document-data.ts
	var getComponentDocumentParams = (id) => ({
		action: "get_document_config",
		unique_id: `document-${id}`,
		data: { id }
	});
	var pendingRequests = /* @__PURE__ */ new Map();
	var getComponentDocumentData = (id) => {
		const pendingRequest = pendingRequests.get(id);
		if (pendingRequest) return pendingRequest;
		const request = _elementor_editor_v1_adapters.ajax.load(getComponentDocumentParams(id)).catch(() => null).finally(() => pendingRequests.delete(id));
		pendingRequests.set(id, request);
		return request;
	};

//#endregion
//#region packages/packages/core/editor-components/src/component-instance-transformer.ts
	var componentInstanceTransformer = (0, _elementor_editor_canvas.createTransformer)(async ({ component_id: id, overrides: overridesValue }) => {
		const unpublishedComponent = selectUnpublishedComponents((0, _elementor_store.__getState)()).find(({ uid }) => uid === id);
		const overrides = overridesValue?.reduce((acc, override) => ({
			...acc,
			...override
		}), {});
		if (unpublishedComponent) return {
			elements: structuredClone(unpublishedComponent.elements),
			overrides
		};
		if (typeof id !== "number") throw new Error(`Component ID "${id}" not valid.`);
		return {
			elements: (await getComponentDocumentData(id))?.elements ?? [],
			overrides
		};
	});

//#endregion
//#region packages/packages/core/editor-components/src/component-overridable-transformer.ts
	var componentOverridableTransformer = (0, _elementor_editor_canvas.createTransformer)((value, options) => {
		const { overrides } = options.renderContext ?? {};
		const overrideValue = overrides?.[value.override_key];
		if (overrideValue) {
			if (isOriginValueOverride(value.origin_value)) return transformOverride(value, options, overrideValue);
			return overrideValue;
		}
		return value.origin_value;
	});
	function transformOverride(value, options, overrideValue) {
		const transformer = _elementor_editor_canvas.settingsTransformersRegistry.get("override");
		if (!transformer) return null;
		const transformedValue = transformer(value.origin_value.value, options);
		if (!transformedValue) return null;
		const [key] = Object.keys(transformedValue);
		return { [key]: overrideValue };
	}
	function isOriginValueOverride(originValue) {
		return originValue.$$type === "override";
	}

//#endregion
//#region packages/packages/core/editor-components/src/component-override-transformer.ts
	var componentOverrideTransformer = (0, _elementor_editor_canvas.createTransformer)((override) => {
		const { override_key: key, override_value: overrideValue } = override;
		return { [key]: overrideValue };
	});

//#endregion
//#region packages/packages/core/editor-components/src/hooks/use-components.ts
	var useComponents = () => {
		return {
			components: (0, _elementor_store.__useSelector)(selectComponents),
			isLoading: (0, _elementor_store.__useSelector)(selectLoadIsPending)
		};
	};

//#endregion
//#region packages/packages/core/editor-components/src/utils/is-pro-components-supported.ts
	var MIN_PRO_VERSION_FOR_COMPONENTS = "4.0";
	function isProComponentsSupported() {
		return (0, _elementor_utils.hasProInstalled)() && (0, _elementor_utils.isProAtLeast)(MIN_PRO_VERSION_FOR_COMPONENTS);
	}
	function isProOutdatedForComponents() {
		return (0, _elementor_utils.hasProInstalled)() && !(0, _elementor_utils.isProAtLeast)(MIN_PRO_VERSION_FOR_COMPONENTS);
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/components-tab/search-provider.tsx
	var SearchContext = (0, react.createContext)(void 0);
	var SearchProvider = ({ children, localStorageKey }) => {
		const { debouncedValue, handleChange, inputValue } = (0, _elementor_utils.useSearchState)({ localStorageKey });
		const clearSearch = () => {
			handleChange("");
		};
		return /* @__PURE__ */ react.createElement(SearchContext.Provider, { value: {
			handleChange,
			clearSearch,
			searchValue: debouncedValue,
			inputValue
		} }, children);
	};
	var useSearch = () => {
		const context = (0, react.useContext)(SearchContext);
		if (!context) throw new Error("useSearch must be used within a SearchProvider");
		return context;
	};

//#endregion
//#region packages/packages/core/editor-components/src/components/components-tab/component-search.tsx
	var ComponentSearch = () => {
		const { inputValue, handleChange } = useSearch();
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			gap: .5,
			sx: {
				width: "100%",
				px: 2,
				py: 1.5
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { flexGrow: 1 } }, /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			role: "search",
			fullWidth: true,
			size: "tiny",
			value: inputValue,
			placeholder: (0, _wordpress_i18n.__)("Search", "elementor"),
			onChange: (e) => handleChange(e.target.value),
			InputProps: { startAdornment: /* @__PURE__ */ react.createElement(_elementor_ui.InputAdornment, { position: "start" }, /* @__PURE__ */ react.createElement(_elementor_icons.SearchIcon, { fontSize: "tiny" })) }
		})));
	};

//#endregion
//#region packages/packages/core/editor-components/src/hooks/use-components-permissions.ts
	var useComponentsPermissions = () => {
		const { isAdmin } = (0, _elementor_editor_current_user.useCurrentUserCapabilities)();
		return {
			canCreate: isAdmin,
			canEdit: isAdmin,
			canDelete: isAdmin,
			canRename: isAdmin
		};
	};

//#endregion
//#region packages/packages/core/editor-components/src/components/components-tab/components-item.tsx
	var ComponentItem = (0, react.forwardRef)(({ component, disabled = true, draggable, onDragStart, onDragEnd, onClick, isEditing = false, error = null, nameSlot, endSlot, ...props }, ref) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.ListItemButton, {
			disabled,
			draggable,
			onDragStart,
			onDragEnd,
			shape: "rounded",
			ref,
			sx: {
				border: "solid 1px",
				borderColor: "divider",
				py: .5,
				px: 1,
				display: "flex",
				width: "100%",
				alignItems: "center",
				gap: 1
			},
			...props
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			display: "flex",
			alignItems: "center",
			gap: 1,
			minWidth: 0,
			flexGrow: 1,
			onClick
		}, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemIcon, { size: "tiny" }, /* @__PURE__ */ react.createElement(_elementor_icons.ComponentsIcon, { fontSize: "tiny" })), /* @__PURE__ */ react.createElement(Indicator, {
			isActive: isEditing,
			isError: !!error
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			display: "flex",
			flex: 1,
			minWidth: 0,
			flexGrow: 1
		}, nameSlot ?? /* @__PURE__ */ react.createElement(ComponentName, { name: component.name })))), endSlot);
	});
	var Indicator = (0, _elementor_ui.styled)(_elementor_ui.Box, { shouldForwardProp: (prop) => prop !== "isActive" && prop !== "isError" })(({ theme, isActive, isError }) => ({
		display: "flex",
		width: "100%",
		flexGrow: 1,
		borderRadius: theme.spacing(.5),
		border: getIndicatorBorder({
			isActive,
			isError,
			theme
		}),
		padding: `0 ${theme.spacing(1)}`,
		marginLeft: isActive ? theme.spacing(1) : 0,
		minWidth: 0
	}));
	var getIndicatorBorder = ({ isActive, isError, theme }) => {
		if (isError) return `2px solid ${theme.palette.error.main}`;
		if (isActive) return `2px solid ${theme.palette.secondary.main}`;
		return "none";
	};
	function ComponentName({ name, editable }) {
		if (editable?.isEditing) return /* @__PURE__ */ react.createElement(_elementor_editor_ui.EditableField, {
			ref: editable.ref,
			as: _elementor_ui.Typography,
			variant: "caption",
			...editable.getProps()
		});
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.EllipsisWithTooltip, {
			title: name,
			as: _elementor_ui.Typography,
			variant: "caption",
			color: "text.primary"
		});
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/components-tab/loading-components.tsx
	var ROWS = Array.from({ length: 3 }, (_, index) => index);
	var STAGGER_DELAY_MS = 80;
	var LoadingComponents = () => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			"aria-label": "Loading components",
			gap: 1.5,
			sx: {
				pointerEvents: "none",
				position: "relative",
				maxHeight: "300px",
				overflow: "hidden",
				px: 1,
				"&:after": {
					position: "absolute",
					bottom: 0,
					content: "\"\"",
					left: 0,
					width: "100%",
					height: "40%",
					pointerEvents: "none",
					zIndex: 1
				}
			}
		}, ROWS.map((row) => /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			key: row,
			display: "flex",
			alignItems: "center",
			gap: 1.5,
			sx: {
				py: .75,
				px: 1.5,
				opacity: 0,
				animation: `e-loading-fade-in 0.4s ease-out ${row * STAGGER_DELAY_MS}ms forwards`,
				"@keyframes e-loading-fade-in": {
					from: {
						opacity: 0,
						transform: "translateY(4px)"
					},
					to: {
						opacity: 1,
						transform: "translateY(0)"
					}
				}
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Skeleton, {
			animation: "wave",
			variant: "rounded",
			width: 24,
			height: 24
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Skeleton, {
			animation: "wave",
			variant: "rounded",
			width: "60%",
			height: 14
		}))));
	};

//#endregion
//#region packages/packages/core/editor-components/src/components/components-tab/components-list.tsx
	var LEARN_MORE_URL = "http://go.elementor.com/components-guide-article";
	var UPGRADE_URL$1 = "https://go.elementor.com/go-pro-components/";
	var UPDATE_PLUGINS_URL$2 = "/wp-admin/plugins.php";
	var SUBTITLE_OVERRIDE_SX = {
		fontSize: "0.875rem !important",
		fontWeight: "500 !important"
	};
	function ComponentsList() {
		const { components, isLoading, searchValue } = useFilteredComponents();
		if (isLoading) return /* @__PURE__ */ react.createElement(LoadingComponents, null);
		if (!components?.length) {
			if (searchValue.length) return /* @__PURE__ */ react.createElement(EmptySearchResult, null);
			if (isProOutdatedForComponents()) return /* @__PURE__ */ react.createElement(ProOutdatedEmptyState, null);
			return isProComponentsSupported() ? /* @__PURE__ */ react.createElement(EmptyState$1, null) : /* @__PURE__ */ react.createElement(ProUpgradeEmptyState, null);
		}
		return /* @__PURE__ */ react.createElement(_elementor_ui.List, { sx: {
			display: "flex",
			flexDirection: "column",
			gap: 1,
			px: 2
		} }, components.map((component) => /* @__PURE__ */ react.createElement(ComponentItem, {
			key: component.uid,
			component
		})));
	}
	var ProUpgradeEmptyState = () => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			justifyContent: "start",
			height: "100%",
			sx: {
				px: 2,
				py: 4
			},
			gap: 2,
			overflow: "hidden"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			gap: 1
		}, /* @__PURE__ */ react.createElement(_elementor_icons.ComponentsIcon, {
			fontSize: "large",
			sx: { color: "text.secondary" }
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "subtitle2",
			color: "text.secondary",
			sx: SUBTITLE_OVERRIDE_SX
		}, (0, _wordpress_i18n.__)("Create Reusable Components", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption",
			color: "secondary",
			sx: { maxWidth: 200 }
		}, (0, _wordpress_i18n.__)("Create design elements that sync across your entire site.", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			color: "promotion",
			size: "small",
			startIcon: /* @__PURE__ */ react.createElement(_elementor_icons.CrownFilledIcon, null),
			href: UPGRADE_URL$1,
			target: "_blank",
			rel: "noopener noreferrer"
		}, (0, _wordpress_i18n.__)("Upgrade now", "elementor")));
	};
	var ProOutdatedEmptyState = () => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			justifyContent: "start",
			height: "100%",
			sx: {
				px: 2,
				py: 4,
				maxWidth: 268,
				m: "auto"
			},
			gap: 2,
			overflow: "hidden"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			gap: 1
		}, /* @__PURE__ */ react.createElement(_elementor_icons.ComponentsIcon, {
			fontSize: "large",
			sx: { color: "text.secondary" }
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "subtitle2",
			color: "text.secondary",
			sx: SUBTITLE_OVERRIDE_SX
		}, (0, _wordpress_i18n.__)("Create Reusable Components", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption",
			color: "secondary"
		}, (0, _wordpress_i18n.__)("Create design elements that sync across your entire site.", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption",
			color: "secondary",
			sx: { mt: 1 }
		}, (0, _wordpress_i18n.__)("To create components, update Elementor Pro to the latest version.", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "text",
			color: "info",
			size: "small",
			href: UPDATE_PLUGINS_URL$2,
			target: "_blank",
			rel: "noopener noreferrer"
		}, (0, _wordpress_i18n.__)("Update Elementor Pro", "elementor")));
	};
	var EmptyState$1 = /* @__PURE__ */ __name(() => {
		const { canCreate } = useComponentsPermissions();
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			justifyContent: "start",
			height: "100%",
			sx: {
				px: 2,
				py: 4
			},
			gap: 2,
			overflow: "hidden"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			gap: 1
		}, /* @__PURE__ */ react.createElement(_elementor_icons.ComponentsIcon, {
			fontSize: "large",
			sx: { color: "text.secondary" }
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "subtitle2",
			color: "text.secondary",
			sx: SUBTITLE_OVERRIDE_SX
		}, (0, _wordpress_i18n.__)("No components yet", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption",
			color: "secondary",
			sx: { maxWidth: 200 }
		}, (0, _wordpress_i18n.__)("Components are reusable blocks that sync across your site.", "elementor"), /* @__PURE__ */ react.createElement("br", null), canCreate ? (0, _wordpress_i18n.__)("Create once, use everywhere.", "elementor") : (0, _wordpress_i18n.__)("With your current role, you cannot create components. Contact an administrator to create one.", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
			href: LEARN_MORE_URL,
			target: "_blank",
			rel: "noopener noreferrer",
			variant: "caption",
			color: "info.main"
		}, (0, _wordpress_i18n.__)("Learn more about components", "elementor"))), canCreate && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Divider, { sx: { width: "100%" } }), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			gap: 1,
			width: "100%"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "subtitle2",
			color: "text.secondary",
			sx: SUBTITLE_OVERRIDE_SX
		}, (0, _wordpress_i18n.__)("Create your first one:", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption",
			color: "secondary",
			sx: { maxWidth: 228 }
		}, (0, _wordpress_i18n.__)("Right-click any div-block or flexbox on your canvas or structure and select \"Create component\"", "elementor")))));
	}, "EmptyState");
	var EmptySearchResult = () => {
		const { searchValue, clearSearch } = useSearch();
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			color: "text.secondary",
			pt: 5,
			alignItems: "center",
			gap: 1,
			overflow: "hidden",
			justifySelf: "center"
		}, /* @__PURE__ */ react.createElement(_elementor_icons.ComponentsIcon, null), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { width: "100%" } }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "subtitle2",
			color: "inherit",
			sx: SUBTITLE_OVERRIDE_SX
		}, (0, _wordpress_i18n.__)("Sorry, nothing matched", "elementor")), searchValue && /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "subtitle2",
			color: "inherit",
			sx: {
				...SUBTITLE_OVERRIDE_SX,
				display: "flex",
				width: "100%",
				justifyContent: "center"
			}
		}, /* @__PURE__ */ react.createElement("span", null, "“"), /* @__PURE__ */ react.createElement("span", { style: {
			maxWidth: "80%",
			overflow: "hidden",
			textOverflow: "ellipsis"
		} }, searchValue), /* @__PURE__ */ react.createElement("span", null, "”."))), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption",
			color: "inherit"
		}, (0, _wordpress_i18n.__)("Try something else.", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption",
			color: "inherit"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
			color: "secondary",
			variant: "caption",
			component: "button",
			onClick: clearSearch
		}, (0, _wordpress_i18n.__)("Clear & try again", "elementor"))));
	};
	var useFilteredComponents = () => {
		const { components, isLoading } = useComponents();
		const { searchValue } = useSearch();
		return {
			components: components.filter((component) => component.name.toLowerCase().includes(searchValue.toLowerCase())),
			isLoading,
			searchValue
		};
	};

//#endregion
//#region packages/packages/core/editor-components/src/components/components-upgrade-alert.tsx
	function ComponentsUpgradeAlert({ title, description, upgradeUrl }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			mt: "auto",
			position: "sticky",
			bottom: 0
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
			variant: "standard",
			color: "promotion",
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.CrownFilledIcon, { fontSize: "tiny" }),
			role: "status",
			size: "small",
			action: /* @__PURE__ */ react.createElement(_elementor_ui.AlertAction, {
				variant: "contained",
				color: "promotion",
				href: upgradeUrl,
				target: "_blank",
				rel: "noopener noreferrer"
			}, (0, _wordpress_i18n.__)("Upgrade now", "elementor")),
			sx: {
				m: 2,
				mt: 1
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.AlertTitle, null, title), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "caption" }, description)));
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/components-tab/components-pro-notification.tsx
	var UPGRADE_URL = "https://go.elementor.com/go-pro-components-exist-footer/";
	function ComponentsProNotification() {
		return /* @__PURE__ */ react.createElement(ComponentsUpgradeAlert, {
			title: (0, _wordpress_i18n.__)("Create new components", "elementor"),
			description: (0, _wordpress_i18n.__)("Creating new components requires an active Pro subscription.", "elementor"),
			upgradeUrl: UPGRADE_URL
		});
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/components-update-alert.tsx
	var UPDATE_PLUGINS_URL$1 = "/wp-admin/plugins.php";
	function ComponentsUpdateAlert({ title, description }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			mt: "auto",
			position: "sticky",
			bottom: 0
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
			variant: "standard",
			color: "info",
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.InfoCircleFilledIcon, { fontSize: "tiny" }),
			role: "status",
			size: "small",
			action: /* @__PURE__ */ react.createElement(_elementor_ui.AlertAction, {
				variant: "contained",
				color: "info",
				href: UPDATE_PLUGINS_URL$1,
				target: "_blank",
				rel: "noopener noreferrer"
			}, (0, _wordpress_i18n.__)("Upgrade Now", "elementor")),
			sx: {
				m: 2,
				mt: 1
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.AlertTitle, null, title), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "caption" }, description)));
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/components-tab/components-update-notification.tsx
	function ComponentsUpdateNotification() {
		return /* @__PURE__ */ react.createElement(ComponentsUpdateAlert, {
			title: (0, _wordpress_i18n.__)("Create new Components", "elementor"),
			description: (0, _wordpress_i18n.__)("To create new components, update Elementor Pro to the latest version.", "elementor")
		});
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/components-tab/components.tsx
	var FULL_HEIGHT_STYLE_ID = "components-full-height-panel";
	var FULL_HEIGHT_CSS = `
#elementor-panel-page-elements {
	display: flex;
	flex-direction: column;
	height: 100%;
}

#elementor-panel-elements {
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: 0;
}

#elementor-panel-elements-wrapper {
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: 0;
}
`;
	var useFullHeightPanel = () => {
		(0, react.useLayoutEffect)(() => {
			let style = document.getElementById(FULL_HEIGHT_STYLE_ID);
			if (!style) {
				style = document.createElement("style");
				style.id = FULL_HEIGHT_STYLE_ID;
				style.textContent = FULL_HEIGHT_CSS;
				document.head.appendChild(style);
			}
			return () => {
				document.getElementById(FULL_HEIGHT_STYLE_ID)?.remove();
			};
		}, []);
	};
	var ComponentsContent = () => {
		const { components, isLoading } = useComponents();
		const hasComponents = !isLoading && components.length > 0;
		const showProNotification = !isProComponentsSupported() && hasComponents;
		const isOutdated = isProOutdatedForComponents();
		useFullHeightPanel();
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			justifyContent: "space-between",
			sx: {
				flex: 1,
				minHeight: 0
			}
		}, hasComponents && /* @__PURE__ */ react.createElement(ComponentSearch, null), /* @__PURE__ */ react.createElement(ComponentsList, null), showProNotification && (isOutdated ? /* @__PURE__ */ react.createElement(ComponentsUpdateNotification, null) : /* @__PURE__ */ react.createElement(ComponentsProNotification, null)));
	};
	var Components = () => {
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.ThemeProvider, null, /* @__PURE__ */ react.createElement(SearchProvider, { localStorageKey: "elementor-components-search" }, /* @__PURE__ */ react.createElement(ComponentsContent, null)));
	};

//#endregion
//#region packages/packages/core/editor-components/src/components/detach-instance-confirmation-dialog.tsx
	function DetachInstanceConfirmationDialog({ open, onClose, onConfirm }) {
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog, {
			open,
			onClose
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Title, {
			icon: _elementor_icons.AlertTriangleFilledIcon,
			iconColor: "secondary"
		}, (0, _wordpress_i18n.__)("Detach from Component?", "elementor")), /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Content, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.ContentText, null, (0, _wordpress_i18n.__)("Detaching this instance will break its link to the Component. Changes to the Component will no longer apply. Continue?", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Actions, {
			onClose,
			onConfirm,
			confirmLabel: (0, _wordpress_i18n.__)("Detach", "elementor"),
			color: "primary"
		}));
	}
	function openDetachConfirmDialog(onConfirm) {
		const handleConfirm = () => {
			(0, _elementor_editor_ui.closeDialog)();
			onConfirm();
		};
		(0, _elementor_editor_ui.openDialog)({ component: /* @__PURE__ */ react.createElement(DetachInstanceConfirmationDialog, {
			open: true,
			onClose: _elementor_editor_ui.closeDialog,
			onConfirm: handleConfirm
		}) });
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/in-edit-mode.tsx
	var openEditModeDialog = (lockedBy) => {
		(0, _elementor_editor_ui.openDialog)({ component: /* @__PURE__ */ react.createElement(EditModeDialog, { lockedBy }) });
	};
	var EditModeDialog = ({ lockedBy }) => {
		const content = (0, _wordpress_i18n.__)("%s is currently editing this document", "elementor").replace("%s", lockedBy);
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.DialogHeader, { logo: false }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			display: "flex",
			alignItems: "center",
			gap: 1
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Icon, { color: "secondary" }, /* @__PURE__ */ react.createElement(_elementor_icons.InfoCircleFilledIcon, { fontSize: "medium" })), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "subtitle1" }, content))), /* @__PURE__ */ react.createElement(_elementor_ui.DialogContent, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			spacing: 2,
			direction: "column"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "body2" }, (0, _wordpress_i18n.__)("You can wait for them to finish or reach out to coordinate your changes together.", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.DialogActions, null, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			color: "secondary",
			variant: "contained",
			onClick: _elementor_editor_ui.closeDialog
		}, (0, _wordpress_i18n.__)("Close", "elementor"))))));
	};

//#endregion
//#region packages/packages/core/editor-components/src/provider/component-instance-context.tsx
	var ComponentInstanceContext = (0, react.createContext)(null);
	function ComponentInstanceProvider({ children, ...props }) {
		return /* @__PURE__ */ react.createElement(ComponentInstanceContext.Provider, { value: props }, children);
	}
	function useComponentInstanceContext() {
		const context = (0, react.useContext)(ComponentInstanceContext);
		if (!context) throw new Error("useComponentInstanceContext must be used within a ComponentInstanceProvider");
		return context;
	}
	var useComponentId = () => useComponentInstanceContext().componentId;
	var useComponentInstanceOverrides = () => useComponentInstanceContext().overrides;
	var useComponentOverridableProps = () => useComponentInstanceContext().overridableProps;

//#endregion
//#region packages/packages/core/editor-components/src/prop-types/component-instance-override-prop-type.ts
	var componentInstanceOverridePropTypeUtil = (0, _elementor_editor_props.createPropUtils)("override", _elementor_schema.z.object({
		override_key: _elementor_schema.z.string(),
		override_value: _elementor_schema.z.unknown(),
		schema_source: _elementor_schema.z.object({
			type: _elementor_schema.z.literal("component"),
			id: _elementor_schema.z.number()
		})
	}));

//#endregion
//#region packages/packages/core/editor-components/src/prop-types/component-overridable-prop-type.ts
	var componentOverridablePropTypeUtil = (0, _elementor_editor_props.createPropUtils)("overridable", _elementor_schema.z.object({
		override_key: _elementor_schema.z.string(),
		origin_value: _elementor_schema.z.object({
			$$type: _elementor_schema.z.string(),
			value: _elementor_schema.z.unknown()
		}).nullable()
	}));

//#endregion
//#region packages/packages/core/editor-components/src/prop-types/component-instance-overrides-prop-type.ts
	var componentInstanceOverridesPropTypeUtil = (0, _elementor_editor_props.createPropUtils)("overrides", _elementor_schema.z.array(_elementor_schema.z.union([componentInstanceOverridePropTypeUtil.schema, componentOverridablePropTypeUtil.schema])).optional().default([]));

//#endregion
//#region packages/packages/core/editor-components/src/prop-types/component-instance-prop-type.ts
	var componentInstancePropTypeUtil = (0, _elementor_editor_props.createPropUtils)("component-instance", _elementor_schema.z.object({
		component_id: _elementor_editor_props.numberPropTypeUtil.schema,
		overrides: _elementor_schema.z.optional(componentInstanceOverridesPropTypeUtil.schema)
	}));

//#endregion
//#region packages/packages/core/editor-components/src/utils/tracking.ts
	var FEATURE_NAME = "Components";
	var trackComponentEvent = ({ action, source, executedBy, ...data }) => {
		if (source === "system" || executedBy === "system") return;
		const { dispatchEvent, config } = (0, _elementor_events.getMixpanel)();
		if (!config?.names?.components?.[action]) return;
		const name = config.names.components[action];
		dispatchEvent?.(name, {
			...data,
			executed_by: executedBy ?? source,
			"Feature name": FEATURE_NAME
		});
	};
	var onElementDrop = (_args, element) => {
		if (!(element?.model?.get("widgetType") === "e-component")) return;
		const editorSettings = element.model.get("editor_settings");
		const componentName = editorSettings?.title;
		const componentUID = editorSettings?.component_uid;
		const instanceId = element.id;
		const createdThisSession = selectCreatedThisSession((0, _elementor_store.__getState)());
		const isSameSessionReuse = componentUID && createdThisSession.includes(componentUID);
		const { locations, secondaryLocations } = window.elementorCommon.eventsManager.config;
		trackComponentEvent({
			action: "instanceAdded",
			executedBy: "user",
			instance_id: instanceId,
			component_uid: componentUID,
			component_name: componentName,
			is_same_session_reuse: isSameSessionReuse,
			location: locations.widgetPanel,
			secondary_location: secondaryLocations.componentsTab
		});
	};

//#endregion
//#region packages/packages/core/editor-components/src/utils/detach-component-instance/regenerate-local-style-ids.ts
	function regenerateLocalStyleIds(element) {
		const originalStyles = element.styles;
		if (!originalStyles || Object.keys(originalStyles).length === 0) return {
			styles: void 0,
			settings: void 0
		};
		const newStyles = {};
		const styleIdMapping = {};
		for (const [originalStyleId, style] of Object.entries(originalStyles)) {
			const newStyleId = generateLocalStyleId(element.id);
			newStyles[newStyleId] = {
				...style,
				id: newStyleId
			};
			styleIdMapping[originalStyleId] = newStyleId;
		}
		const settings = element.settings;
		if (!settings || Object.keys(settings).length === 0) return {
			styles: newStyles,
			settings: void 0
		};
		const updatedSettings = { ...settings };
		for (const [propKey, propValue] of Object.entries(updatedSettings)) if (isClassesProp(propValue) && propValue.value.length > 0) {
			const updatedClasses = propValue.value.map((classId) => styleIdMapping[classId] ?? classId);
			updatedSettings[propKey] = _elementor_editor_props.classesPropTypeUtil.create(updatedClasses);
		}
		return {
			styles: newStyles,
			settings: updatedSettings
		};
	}
	function isClassesProp(prop) {
		return _elementor_editor_props.classesPropTypeUtil.isValid(prop);
	}
	function generateLocalStyleId(elementId) {
		return `e-${elementId}-${(0, _elementor_editor_elements.generateElementId)()}`;
	}

//#endregion
//#region packages/packages/core/editor-components/src/consts.ts
	var COMPONENT_WIDGET_TYPE$1 = "e-component";

//#endregion
//#region packages/packages/core/editor-components/src/utils/is-component-instance.ts
	function isComponentInstance(elementModel) {
		return [elementModel.widgetType, elementModel.elType].includes(COMPONENT_WIDGET_TYPE$1);
	}

//#endregion
//#region packages/packages/core/editor-components/src/utils/detach-component-instance/resolve-overridable-settings.ts
	function resolveOverridableSettings(element, overrideMap) {
		if (isComponentInstance({
			widgetType: element.widgetType,
			elType: element.elType
		})) return resolveOverridableSettingsForComponentInstance(element, overrideMap);
		return resolveOverridableSettingsForElement(element, overrideMap);
	}
	function resolveOverridableSettingsForElement(element, overrideMap) {
		const updatedSettings = element.settings ? { ...element.settings } : {};
		for (const [settingKey, settingValue] of Object.entries(element.settings ?? {})) updatedSettings[settingKey] = resolvePropValue(settingValue, overrideMap);
		return updatedSettings;
	}
	function resolveOverridableSettingsForComponentInstance(element, overrideMap) {
		const componentInstance = element.settings?.component_instance;
		if (!componentInstancePropTypeUtil.isValid(componentInstance)) return element.settings ?? {};
		const instanceOverrides = componentInstance.value.overrides?.value;
		if (!instanceOverrides?.length) return element.settings ?? {};
		const updatedOverrides = instanceOverrides.map((item) => resolvePropValue(item, overrideMap, { isOverridableOverride: true }));
		return {
			...element.settings,
			component_instance: {
				...componentInstance,
				value: {
					...componentInstance.value,
					overrides: {
						...componentInstance.value.overrides,
						value: updatedOverrides
					}
				}
			}
		};
	}
	function resolvePropValue(propValue, overrideMap, options) {
		const { isOverridableOverride = false } = options ?? {};
		if (!componentOverridablePropTypeUtil.isValid(propValue)) return propValue;
		const overridableKey = propValue.value.override_key;
		const matchingOverride = overrideMap.get(overridableKey);
		const originValue = componentOverridablePropTypeUtil.extract(propValue)?.origin_value;
		if (!matchingOverride) return originValue;
		if (isOverridableOverride) return resolveOverridableOverride(matchingOverride, originValue);
		return componentInstanceOverridePropTypeUtil.extract(matchingOverride)?.override_value ?? originValue;
	}
	function resolveOverridableOverride(matchingOverride, originValue) {
		if (!originValue || !componentInstanceOverridePropTypeUtil.isValid(originValue)) return null;
		return componentInstanceOverridePropTypeUtil.create({
			override_value: matchingOverride.value.override_value,
			override_key: originValue.value.override_key,
			schema_source: originValue.value.schema_source
		});
	}

//#endregion
//#region packages/packages/core/editor-components/src/utils/detach-component-instance/resolve-detached-instance.ts
	function resolveDetachedInstance(element, overrides) {
		const overrideMap = createOverrideMap(overrides);
		return resolveElementRecursive(structuredClone(element), overrideMap);
	}
	function resolveElementRecursive(element, overrideMap) {
		element.id = (0, _elementor_editor_elements.generateElementId)();
		if (element.styles) {
			const { styles, settings } = regenerateLocalStyleIds(element);
			element.styles = styles;
			if (settings) element.settings = {
				...element.settings,
				...settings
			};
		}
		if (element.settings) element.settings = resolveOverridableSettings(element, overrideMap);
		if (element.elements?.length) element.elements = element.elements.map((child) => resolveElementRecursive(child, overrideMap));
		return element;
	}
	function createOverrideMap(overrides) {
		const map = /* @__PURE__ */ new Map();
		overrides.forEach((item) => {
			let override = null;
			if (componentInstanceOverridePropTypeUtil.isValid(item)) override = item;
			else if (componentOverridablePropTypeUtil.isValid(item)) override = getOverridableOverride(item);
			if (override) {
				const overrideKey = override.value.override_key;
				map.set(overrideKey, override);
			}
		});
		return map;
	}
	function getOverridableOverride(propValue) {
		if (!componentOverridablePropTypeUtil.isValid(propValue)) return null;
		const originValue = componentOverridablePropTypeUtil.extract(propValue)?.origin_value;
		if (!componentInstanceOverridePropTypeUtil.isValid(originValue)) return null;
		return originValue;
	}

//#endregion
//#region packages/packages/core/editor-components/src/utils/detach-component-instance/detach-component-instance.ts
	var DETACH_EVENT = "elementor/components/detach-instance";
	var DETACH_UNDO_EVENT = "elementor/components/undo-detach-instance";
	var DETACH_REDO_EVENT = "elementor/components/redo-detach-instance";
	async function detachComponentInstance({ instanceId, componentId, trackingInfo }) {
		const instanceContainer = (0, _elementor_editor_elements.getContainer)(instanceId);
		if (!instanceContainer) throw new Error(`Instance container with ID "${instanceId}" not found.`);
		const componentData = await getComponentDocumentData(componentId);
		if (!componentData) throw new Error(`Component with ID "${componentId}" not found.`);
		const rootElement = componentData.elements?.[0];
		if (!rootElement) throw new Error(`Component with ID "${componentId}" has no root element.`);
		return (0, _elementor_editor_v1_adapters.undoable)({
			do: () => {
				const overrides = extractInstanceOverrides(instanceContainer);
				const detachedInstanceElementData = resolveDetachedInstance(rootElement, overrides);
				const originalInstanceModel = instanceContainer.model.toJSON();
				const actionId = (/* @__PURE__ */ new Date()).getTime();
				window.dispatchEvent(new CustomEvent(DETACH_EVENT, { detail: {
					detachedInstanceId: instanceId,
					detachActionId: actionId
				} }));
				const detachedElement = (0, _elementor_editor_elements.replaceElement)({
					currentElementId: instanceId,
					newElement: detachedInstanceElementData,
					withHistory: false
				});
				(0, _elementor_editor_elements.selectElement)(detachedElement.id);
				const componentUid = selectComponent((0, _elementor_store.__getState)(), componentId)?.uid;
				trackComponentEvent({
					action: "detached",
					executedBy: "user",
					component_uid: componentUid,
					instance_id: instanceId,
					location: trackingInfo.location,
					secondary_location: trackingInfo.secondaryLocation,
					trigger: trackingInfo.trigger
				});
				return {
					detachedElement,
					detachedInstanceElementData,
					originalInstanceModel,
					actionId
				};
			},
			undo: (_, { detachedElement, originalInstanceModel, actionId }) => {
				const restoredInstance = (0, _elementor_editor_elements.replaceElement)({
					currentElementId: detachedElement.id,
					newElement: originalInstanceModel,
					withHistory: false
				});
				window.dispatchEvent(new CustomEvent(DETACH_UNDO_EVENT, { detail: {
					restoredInstanceId: restoredInstance.id,
					detachActionId: actionId
				} }));
				(0, _elementor_editor_canvas.doAfterRender)([restoredInstance.id], () => {
					(0, _elementor_editor_elements.selectElement)(restoredInstance.id);
				});
				return restoredInstance;
			},
			redo: (_, doReturn, restoredInstance) => {
				const { detachedInstanceElementData, actionId } = doReturn;
				const detachedElement = (0, _elementor_editor_elements.replaceElement)({
					currentElementId: restoredInstance.id,
					newElement: detachedInstanceElementData,
					withHistory: false
				});
				window.dispatchEvent(new CustomEvent(DETACH_REDO_EVENT, { detail: {
					detachedInstanceId: detachedElement.id,
					detachActionId: actionId
				} }));
				(0, _elementor_editor_elements.selectElement)(detachedElement.id);
				return {
					...doReturn,
					detachedElement
				};
			}
		}, {
			title: (0, _wordpress_i18n.__)("Detach from Component", "elementor"),
			subtitle: (0, _wordpress_i18n.__)("Instance detached", "elementor")
		})();
	}
	function extractInstanceOverrides(instanceContainer) {
		const settings = instanceContainer.model.toJSON().settings;
		const componentInstance = componentInstancePropTypeUtil.extract(settings?.component_instance);
		return componentInstanceOverridesPropTypeUtil.extract(componentInstance?.overrides) ?? [];
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/instance-editing-panel/instance-panel-header.tsx
	function InstancePanelHeader({ componentName, actions }) {
		return /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelHeader, { sx: {
			justifyContent: "start",
			px: 2
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			flexGrow: 1,
			gap: 1,
			maxWidth: "100%"
		}, /* @__PURE__ */ react.createElement(_elementor_icons.ComponentsIcon, {
			fontSize: "small",
			sx: { color: "text.tertiary" }
		}), /* @__PURE__ */ react.createElement(_elementor_editor_ui.EllipsisWithTooltip, {
			title: componentName,
			as: _elementor_editor_panels.PanelHeaderTitle,
			sx: { flexGrow: 1 }
		}), actions));
	}
	function EditComponentAction({ label, onClick, disabled = false, icon: Icon }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, { title: label }, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: "tiny",
			onClick,
			"aria-label": label,
			disabled
		}, /* @__PURE__ */ react.createElement(Icon, { fontSize: "tiny" })));
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/instance-editing-panel/detach-action.tsx
	var DetachAction = ({ componentInstanceId, componentId }) => {
		const [isDetachDialogOpen, setIsDetachDialogOpen] = (0, react.useState)(false);
		const handleDetachConfirm = async () => {
			setIsDetachDialogOpen(false);
			try {
				await detachComponentInstance({
					instanceId: componentInstanceId,
					componentId,
					trackingInfo: getDetachTrackingInfo()
				});
			} catch {
				(0, _elementor_editor_notifications.notify)({
					type: "error",
					message: (0, _wordpress_i18n.__)("Failed to detach component instance.", "elementor"),
					id: "detach-component-instance-failed"
				});
			}
		};
		const handleDetachCancel = () => {
			setIsDetachDialogOpen(false);
		};
		const handleDetachClick = () => {
			setIsDetachDialogOpen(true);
		};
		const detachLabel = (0, _wordpress_i18n.__)("Detach from Component", "elementor");
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(EditComponentAction, {
			label: detachLabel,
			icon: _elementor_icons.DetachIcon,
			onClick: handleDetachClick
		}), /* @__PURE__ */ react.createElement(DetachInstanceConfirmationDialog, {
			open: isDetachDialogOpen,
			onClose: handleDetachCancel,
			onConfirm: handleDetachConfirm
		}));
	};
	function getDetachTrackingInfo() {
		const config = window?.elementorCommon?.eventsManager?.config;
		if (!config) return {
			location: "",
			trigger: ""
		};
		return {
			location: config.locations.components.instanceEditingPanel,
			trigger: config.triggers.click
		};
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/instance-editing-panel/empty-state.tsx
	var EmptyState = ({ onEditComponent }) => {
		const { canEdit } = useComponentsPermissions();
		const message = canEdit ? (0, _wordpress_i18n.__)("Edit the component to add properties, manage them or update the design across all instances.", "elementor") : (0, _wordpress_i18n.__)("With your current role, you cannot edit this component. Contact an administrator to add properties.", "elementor");
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			justifyContent: "start",
			height: "100%",
			color: "text.secondary",
			sx: {
				p: 2.5,
				pt: 8,
				pb: 5.5,
				mt: 1
			},
			gap: 1.5
		}, /* @__PURE__ */ react.createElement(_elementor_icons.ComponentPropListIcon, { fontSize: "large" }), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "subtitle2"
		}, (0, _wordpress_i18n.__)("No properties yet", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption",
			maxWidth: "170px"
		}, message), canEdit && /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "outlined",
			color: "secondary",
			size: "small",
			sx: { mt: 1 },
			disabled: !onEditComponent,
			onClick: onEditComponent
		}, /* @__PURE__ */ react.createElement(_elementor_icons.PencilIcon, { fontSize: "small" }), (0, _wordpress_i18n.__)("Edit component", "elementor")));
	};

//#endregion
//#region packages/packages/core/editor-components/src/hooks/use-controls-by-widget-type.ts
	function useControlsByWidgetType(type) {
		const elementType = (0, _elementor_editor_elements.getElementType)(type);
		if (!elementType) return {};
		return getControlsByBind(iterateControls(elementType.controls));
	}
	function iterateControls(controls) {
		return controls.map((control) => {
			if (control.type === "control" && "bind" in control.value) return control;
			if (control.type === "section") return iterateControls(control.value.items);
			return null;
		}).filter(Boolean).flat();
	}
	function getControlsByBind(controls) {
		return controls.reduce((controlsByBind, control) => ({
			...controlsByBind,
			[control.value.bind]: control
		}), {});
	}

//#endregion
//#region packages/packages/core/editor-components/src/provider/overridable-prop-context.tsx
	var OverridablePropContext = (0, react.createContext)(null);
	function OverridablePropProvider({ children, ...props }) {
		return /* @__PURE__ */ react.createElement(OverridablePropContext.Provider, { value: props }, children);
	}
	var useOverridablePropValue = () => (0, react.useContext)(OverridablePropContext)?.value;
	var useComponentInstanceElement = () => (0, react.useContext)(OverridablePropContext)?.componentInstanceElement;

//#endregion
//#region packages/packages/core/editor-components/src/utils/resolve-override-prop-value.ts
	var resolveOverridePropValue = (originalPropValue) => {
		if (componentOverridablePropTypeUtil.isValid(originalPropValue)) return getOverridableValue(originalPropValue);
		if (componentInstanceOverridePropTypeUtil.isValid(originalPropValue)) return getOverrideValue(originalPropValue);
		return originalPropValue;
	};
	function getOverridableValue(overridableProp) {
		const overridableValue = componentOverridablePropTypeUtil.extract(overridableProp);
		if (!overridableValue) return null;
		if (componentInstanceOverridePropTypeUtil.isValid(overridableValue.origin_value)) return getOverrideValue(overridableValue.origin_value);
		return overridableValue.origin_value;
	}
	function getOverrideValue(overrideProp) {
		const overrideValue = componentInstanceOverridePropTypeUtil.extract(overrideProp);
		if (!overrideValue) return null;
		return overrideValue.override_value;
	}

//#endregion
//#region packages/packages/core/editor-components/src/store/dispatchers.ts
	function safeDispatch() {
		return (0, _elementor_store.__getStore)()?.dispatch;
	}
	var componentsActions = {
		add(components) {
			(0, _elementor_store.__dispatch)(slice.actions.add(components));
		},
		load(components) {
			(0, _elementor_store.__dispatch)(slice.actions.load(components));
		},
		addUnpublished(component) {
			(0, _elementor_store.__dispatch)(slice.actions.addUnpublished(component));
		},
		removeUnpublished(uids) {
			(0, _elementor_store.__dispatch)(slice.actions.removeUnpublished(uids));
		},
		resetUnpublished() {
			(0, _elementor_store.__dispatch)(slice.actions.resetUnpublished());
		},
		addCreatedThisSession(uid) {
			(0, _elementor_store.__dispatch)(slice.actions.addCreatedThisSession(uid));
		},
		removeCreatedThisSession(uid) {
			(0, _elementor_store.__dispatch)(slice.actions.removeCreatedThisSession(uid));
		},
		archive(componentId) {
			(0, _elementor_store.__dispatch)(slice.actions.archive(componentId));
		},
		setCurrentComponentId(id) {
			safeDispatch()?.(slice.actions.setCurrentComponentId(id));
		},
		setPath(path) {
			safeDispatch()?.(slice.actions.setPath(path));
		},
		setOverridableProps(componentId, overridableProps) {
			(0, _elementor_store.__dispatch)(slice.actions.setOverridableProps({
				componentId,
				overridableProps
			}));
		},
		rename(componentUid, name) {
			(0, _elementor_store.__dispatch)(slice.actions.rename({
				componentUid,
				name
			}));
		},
		cleanUpdatedComponentNames() {
			(0, _elementor_store.__dispatch)(slice.actions.cleanUpdatedComponentNames());
		},
		updateComponentSanitizedAttribute(componentId, attribute) {
			(0, _elementor_store.__dispatch)(slice.actions.updateComponentSanitizedAttribute({
				componentId,
				attribute
			}));
		},
		resetSanitizedComponents() {
			(0, _elementor_store.__dispatch)(slice.actions.resetSanitizedComponents());
		}
	};

//#endregion
//#region packages/packages/core/editor-components/src/store/selectors.ts
	function safeGetState() {
		return (0, _elementor_store.__getStore)()?.getState();
	}
	var componentsSelectors = {
		getOverridableProps(componentId) {
			return selectOverridableProps((0, _elementor_store.__getState)(), componentId);
		},
		getCurrentComponent() {
			return selectCurrentComponent((0, _elementor_store.__getState)());
		},
		getCurrentComponentId() {
			const state = safeGetState();
			if (!state) return null;
			return selectCurrentComponentId(state);
		},
		getUnpublishedComponents() {
			return selectUnpublishedComponents((0, _elementor_store.__getState)());
		},
		getUpdatedComponentNames() {
			return selectUpdatedComponentNames((0, _elementor_store.__getState)());
		},
		getArchivedThisSession() {
			return selectArchivedThisSession((0, _elementor_store.__getState)());
		},
		getCreatedThisSession() {
			return selectCreatedThisSession((0, _elementor_store.__getState)());
		},
		getComponents() {
			return selectComponents((0, _elementor_store.__getState)());
		},
		getComponentByUid(componentUid) {
			return selectComponentByUid((0, _elementor_store.__getState)(), componentUid);
		}
	};

//#endregion
//#region packages/packages/core/editor-components/src/store/actions/update-overridable-prop.ts
	function updateOverridableProp(componentId, propValue, originPropFields) {
		const overridableProps = componentsSelectors.getOverridableProps(componentId);
		if (!overridableProps) return;
		const existingOverridableProp = overridableProps.props[propValue.override_key];
		if (!existingOverridableProp) return;
		const originValue = resolveOverridePropValue(propValue.origin_value);
		const newOverridableProp = originPropFields ? {
			originValue,
			originPropFields
		} : { originValue };
		const newOverridableProps = {
			...overridableProps,
			props: {
				...overridableProps.props,
				[existingOverridableProp.overrideKey]: {
					...existingOverridableProp,
					...newOverridableProp
				}
			}
		};
		componentsActions.setOverridableProps(componentId, newOverridableProps);
	}

//#endregion
//#region packages/packages/core/editor-components/src/utils/get-prop-type-for-component-override.ts
	var getPropTypeForComponentOverride = (overridableProp) => {
		if (overridableProp.originPropFields) return getPropType(overridableProp.originPropFields);
		const { widgetType, propKey } = overridableProp;
		return getPropType({
			widgetType,
			propKey
		});
	};
	function getPropType({ widgetType, propKey }) {
		return ((0, _elementor_editor_elements.getWidgetsCache)()?.[widgetType]?.atomic_props_schema)?.[propKey];
	}

//#endregion
//#region packages/packages/core/editor-components/src/utils/overridable-props-utils.ts
	function getMatchingOverride(overrides, overrideKey) {
		return overrides?.find((override) => {
			const overridableValue = componentOverridablePropTypeUtil.extract(override);
			if (overridableValue) return componentInstanceOverridePropTypeUtil.extract(overridableValue.origin_value)?.override_key === overrideKey;
			return override.value.override_key === overrideKey;
		}) ?? null;
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/control-label.tsx
	var ControlLabel = ({ children, ...props }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			justifyItems: "start",
			gap: .25
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, { ...props }, children), /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlAdornments, null));
	};

//#endregion
//#region packages/packages/core/editor-components/src/components/errors.ts
	var OverrideControlInnerElementNotFoundError = (0, _elementor_utils.createError)({
		code: "override_control_inner_element_not_found",
		message: `Component inner element not found for override control. The element may have been deleted without updating the overridable props, or the component has not finished rendering yet.`
	});
	var OverrideControlPropTypeNotFoundError = (0, _elementor_utils.createError)({
		code: "override_control_prop_type_not_found",
		message: "Prop type not found for override control."
	});

//#endregion
//#region packages/packages/core/editor-components/src/components/instance-editing-panel/utils/correct-exposed-empty-override.ts
	function correctExposedEmptyOverride(newPropValue, matchingOverride) {
		const newOverridableValue = componentOverridablePropTypeUtil.extract(newPropValue);
		if (!(newOverridableValue && matchingOverride === null)) return newPropValue;
		return componentOverridablePropTypeUtil.create({
			override_key: newOverridableValue.override_key,
			origin_value: null
		});
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/instance-editing-panel/utils/resolve-element-settings.ts
	function applyOverridesToSettings(elementSettings, overrides) {
		const result = {};
		for (const [propKey, propValue] of Object.entries(elementSettings)) {
			const overridable = componentOverridablePropTypeUtil.extract(propValue);
			if (!overridable) {
				result[propKey] = propValue;
				continue;
			}
			const override = overrides[overridable.override_key];
			if (!override) {
				result[propKey] = propValue;
				continue;
			}
			if (override.outermostKey && override.outermostKey !== overridable.override_key) {
				const originValue = overridable.origin_value;
				result[propKey] = componentOverridablePropTypeUtil.create({
					override_key: override.outermostKey,
					origin_value: override.value ?? originValue
				});
			} else result[propKey] = override.value ?? propValue;
		}
		return result;
	}
	function unwrapOverridableSettings(elementSettings) {
		const result = {};
		for (const [propKey, propValue] of Object.entries(elementSettings)) {
			const overridable = componentOverridablePropTypeUtil.extract(propValue);
			if (!overridable) {
				result[propKey] = propValue;
				continue;
			}
			result[propKey] = overridable.origin_value;
		}
		return result;
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/instance-editing-panel/utils/use-override-dependencies.ts
	function useOverrideControlDependencies({ existingOverride, resolvedElementSettings, elementId, elementType, propKey }) {
		return (0, react.useMemo)(() => {
			const { isDisabled, isHidden } = (0, _elementor_editor_editing_panel.extractDependencyEffect)(propKey, elementType.propsSchema, resolvedElementSettings);
			const existingOverrideValue = existingOverride ? resolveOverridePropValue(existingOverride) : null;
			const settingsForDepsNewValuesCalculation = {
				...resolvedElementSettings,
				[propKey]: existingOverrideValue
			};
			const resolvedSettingsWithDefaults = (0, _elementor_editor_editing_panel.getElementSettingsWithDefaults)(elementType.propsSchema, settingsForDepsNewValuesCalculation);
			const dependents = (0, _elementor_editor_editing_panel.extractOrderedDependencies)(elementType.dependenciesPerTargetMapping ?? {});
			return {
				overrideValue: (0, _elementor_editor_editing_panel.getUpdatedValues)({ [propKey]: existingOverrideValue }, dependents, elementType.propsSchema, resolvedSettingsWithDefaults, elementId)[propKey],
				isDisabled,
				isHidden
			};
		}, [
			existingOverride,
			resolvedElementSettings,
			propKey,
			elementType.propsSchema,
			elementType.dependenciesPerTargetMapping,
			elementId
		]);
	}

//#endregion
//#region packages/packages/core/editor-components/src/utils/get-container-by-origin-id.ts
	function getContainerByOriginId(originElementId, instanceElementId) {
		if (!instanceElementId) return (0, _elementor_editor_elements.getContainer)(originElementId);
		const instanceContainer = (0, _elementor_editor_elements.getContainer)(instanceElementId);
		if (!instanceContainer) return null;
		return window.elementor?.getContainerByKeyValue?.({
			key: "originId",
			value: originElementId,
			parent: instanceContainer.view
		}) ?? null;
	}

//#endregion
//#region packages/packages/core/editor-components/src/utils/get-overridable-prop.ts
	function getOverridableProp({ componentId, overrideKey }) {
		const overridableProps = selectOverridableProps((0, _elementor_store.__getState)(), componentId);
		if (!overridableProps) return;
		return overridableProps.props[overrideKey];
	}

//#endregion
//#region packages/packages/core/editor-components/src/utils/resolve-overrides-chain.ts
	function resolveOverridesChain({ outerOverridableProp, outerInstanceId, overridesMapping = {} }) {
		if (!outerOverridableProp.originPropFields) {
			const innerElement = getContainerByOriginId(outerOverridableProp.elementId, outerInstanceId);
			if (!innerElement) throw new Error(`Inner element not found inside instance. elementId: ${outerOverridableProp.elementId}, instanceId: ${outerInstanceId}`);
			return {
				isChainBroken: false,
				innerElement,
				overridesMapping
			};
		}
		const currentInstance = getContainerByOriginId(outerOverridableProp.elementId, outerInstanceId);
		if (!currentInstance) return { isChainBroken: true };
		const { componentId, overrides } = extractComponentInstanceSettings(currentInstance);
		if (!componentId) throw new Error(`Component ID not found for current instance. currentInstanceId: ${currentInstance.id}. outerInstanceId: ${outerInstanceId}`);
		const mergedOverrides = buildOverridesMap(overridesMapping, overrides ?? []);
		const override = findOverrideByOuterKey(overrides, outerOverridableProp.overrideKey);
		const overrideKey = componentInstanceOverridePropTypeUtil.extract(override)?.override_key;
		if (!override || !overrideKey) return { isChainBroken: true };
		const overridableProp = getOverridableProp({
			componentId,
			overrideKey
		});
		if (!overridableProp) throw new Error(`Overridable prop not found. componentId: ${componentId}, overrideKey: ${overrideKey}`);
		return resolveOverridesChain({
			outerOverridableProp: overridableProp,
			outerInstanceId: currentInstance.id,
			overridesMapping: mergedOverrides
		});
	}
	function buildOverridesMap(existing, levelOverrides) {
		const result = { ...existing };
		for (const item of levelOverrides) {
			const overridableValue = componentOverridablePropTypeUtil.extract(item);
			if (overridableValue) {
				const override = componentInstanceOverridePropTypeUtil.extract(overridableValue.origin_value);
				if (!override) continue;
				const outerKey = overridableValue.override_key;
				const innerKey = override.override_key;
				const innerValue = override.override_value;
				const higherLevelOverride = existing[outerKey];
				if (higherLevelOverride) {
					result[innerKey] = {
						value: higherLevelOverride.value ?? innerValue,
						outermostKey: higherLevelOverride.outermostKey ?? outerKey
					};
					continue;
				}
				result[innerKey] = {
					value: innerValue,
					outermostKey: outerKey
				};
			} else {
				const override = componentInstanceOverridePropTypeUtil.extract(item);
				if (!override) continue;
				const key = override.override_key;
				result[key] = { value: override.override_value };
			}
		}
		return result;
	}
	function extractComponentInstanceSettings(element) {
		const instanceSetting = element.settings?.get("component_instance");
		const instanceValue = componentInstancePropTypeUtil.extract(instanceSetting);
		return {
			componentId: instanceValue?.component_id?.value,
			overrides: componentInstanceOverridesPropTypeUtil.extract(instanceValue?.overrides)
		};
	}
	function findOverrideByOuterKey(overrides, outerKey) {
		if (!overrides) return null;
		const overridableOverride = overrides.find((item) => {
			const overridableValue = componentOverridablePropTypeUtil.extract(item);
			if (!overridableValue) return false;
			return overridableValue.override_key === outerKey;
		});
		const override = componentOverridablePropTypeUtil.extract(overridableOverride)?.origin_value;
		if (!override || !componentInstanceOverridePropTypeUtil.isValid(override)) return null;
		return override;
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/instance-editing-panel/utils/use-resolved-inner-element.ts
	function useResolvedInnerElement(overridableProp) {
		const componentInstanceElement = (0, _elementor_editor_editing_panel.useElement)();
		const componentId = useComponentId();
		const overrides = useComponentInstanceOverrides();
		const { elementId: originElementId, widgetType, elType } = overridableProp.originPropFields ?? overridableProp;
		const type = elType === "widget" ? widgetType : elType;
		const elementType = (0, _elementor_editor_elements.getElementType)(type);
		if (!elementType) throw new Error(`Element type not found for ${type}`);
		const { elementId, overridesMapping } = (0, react.useMemo)(() => {
			const overridesChainResult = resolveOverridesChain({
				outerOverridableProp: overridableProp,
				outerInstanceId: componentInstanceElement.element.id
			});
			if (overridesChainResult.isChainBroken) throw new OverrideControlInnerElementNotFoundError({ context: {
				componentId,
				elementId: originElementId
			} });
			return {
				elementId: overridesChainResult.innerElement.id,
				overridesMapping: overridesChainResult.overridesMapping
			};
		}, [
			overridableProp,
			componentInstanceElement.element.id,
			componentId,
			originElementId
		]);
		const settingsWithInnerOverrides = (0, react.useMemo)(() => {
			return applyOverridesToSettings((0, _elementor_editor_elements.getElementSettings)(elementId, Object.keys(elementType?.propsSchema ?? {})), overridesMapping);
		}, [
			elementId,
			elementType?.propsSchema,
			overridesMapping
		]);
		return {
			elementId,
			elementType,
			resolvedOriginValues: settingsWithInnerOverrides,
			resolvedElementSettings: (0, react.useMemo)(() => {
				return unwrapOverridableSettings(applyOverridesToSettings(settingsWithInnerOverrides, formatOverridesToApply(overrides)));
			}, [settingsWithInnerOverrides, overrides])
		};
	}
	function formatOverridesToApply(overrides) {
		if (!overrides) return {};
		const result = {};
		for (const item of overrides) {
			const overridable = componentOverridablePropTypeUtil.extract(item);
			let override = item;
			if (overridable) override = overridable.origin_value;
			const extractedOverride = componentInstanceOverridePropTypeUtil.extract(override);
			if (!extractedOverride) continue;
			result[extractedOverride.override_key] = { value: extractedOverride.override_value };
		}
		return result;
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/instance-editing-panel/override-prop-control.tsx
	function OverridePropControl({ overrideKey }) {
		const overridableProp = useComponentOverridableProps().props[overrideKey];
		if (!overridableProp) return null;
		return /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.SettingsField, {
			bind: "component_instance",
			propDisplayName: overridableProp.label
		}, /* @__PURE__ */ react.createElement(OverrideControl, { overridableProp }));
	}
	function OverrideControl({ overridableProp }) {
		const componentInstanceElement = (0, _elementor_editor_editing_panel.useElement)();
		const { value: instanceValue, setValue: setInstanceValue } = (0, _elementor_editor_controls.useBoundProp)(componentInstancePropTypeUtil);
		const wrappingComponentId = useCurrentComponentId();
		const componentId = useComponentId();
		const overridableProps = useComponentOverridableProps();
		const overrides = useComponentInstanceOverrides();
		const controls = useControlsByWidgetType(overridableProp.originPropFields?.widgetType ?? overridableProp.widgetType);
		const controlReplacements = (0, _elementor_editor_controls.getControlReplacements)();
		const matchingOverride = getMatchingOverride(overrides, overridableProp.overrideKey);
		const { propKey } = overridableProp.originPropFields ?? overridableProp;
		const propType = getPropTypeForComponentOverride(overridableProp);
		if (!propType) throw new OverrideControlPropTypeNotFoundError({ context: { overridableProp } });
		const { elementId, elementType, resolvedElementSettings, resolvedOriginValues } = useResolvedInnerElement(overridableProp);
		const { overrideValue, isDisabled, isHidden } = useOverrideControlDependencies({
			existingOverride: matchingOverride,
			resolvedElementSettings,
			elementType,
			elementId,
			propKey
		});
		if (isHidden) return null;
		const { propValue, baseValue: resolvedBaseValue } = resolveOverrideValues(overrideValue, resolvedOriginValues, propKey);
		const value = { [overridableProp.overrideKey]: propValue };
		const baseValue = { [overridableProp.overrideKey]: resolvedBaseValue };
		const { control, controlProps, layout } = getControlParams(controls, overridableProp.originPropFields ?? overridableProp, overridableProp.label);
		const propTypeSchema = (0, _elementor_editor_editing_panel.createTopLevelObjectType)({ schema: { [overridableProp.overrideKey]: propType } });
		const setValue = (newValue, options, meta) => {
			let newPropValue = getTempNewValueForDynamicProp(propType, propValue, newValue[overridableProp.overrideKey]);
			newPropValue = correctExposedEmptyOverride(newPropValue, matchingOverride);
			const newOverrideValue = createOverrideValue({
				matchingOverride,
				overrideKey: overridableProp.overrideKey,
				overrideValue: newPropValue,
				componentId
			});
			let newOverrides = (overrides ?? []).filter((override) => isValidOverride(overridableProps, override)).map((override) => override === matchingOverride ? newOverrideValue : override);
			if (!matchingOverride) newOverrides = [...newOverrides, newOverrideValue];
			setInstanceValue({
				...instanceValue,
				overrides: componentInstanceOverridesPropTypeUtil.create(newOverrides)
			}, options, meta);
			const overridableValue = componentOverridablePropTypeUtil.extract(newOverrideValue);
			if (overridableValue && wrappingComponentId) {
				if (overridableProp.originPropFields) {
					updateOverridableProp(wrappingComponentId, overridableValue, overridableProp.originPropFields);
					return;
				}
				const originPropFields = {
					elType: overridableProp.elType,
					widgetType: overridableProp.widgetType,
					propKey: overridableProp.propKey,
					elementId: overridableProp.elementId
				};
				updateOverridableProp(wrappingComponentId, overridableValue, originPropFields);
			}
		};
		return /* @__PURE__ */ react.createElement(OverridablePropProvider, {
			value: componentOverridablePropTypeUtil.extract(matchingOverride) ?? void 0,
			componentInstanceElement
		}, /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.ElementProvider, {
			element: {
				id: elementId,
				type: elementType.key
			},
			elementType,
			settings: resolvedElementSettings
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropProvider, {
			propType: propTypeSchema,
			value,
			setValue,
			baseValue,
			isDisabled
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropKeyProvider, { bind: overridableProp.overrideKey }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlReplacementsProvider, { replacements: controlReplacements }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { mb: 1.5 }, /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.ControlTypeContainer, { layout }, layout !== "custom" && /* @__PURE__ */ react.createElement(ControlLabel, null, overridableProp.label), /* @__PURE__ */ react.createElement(OriginalControl, {
			control,
			controlProps
		}))))))));
	}
	function resolveOverrideValues(overrideValue, resolvedOriginValues, propKey) {
		const inheritedValue = unwrapOverridableSettings(resolvedOriginValues)[propKey] ?? null;
		const isInheritedDynamic = (0, _elementor_editor_editing_panel.isDynamicPropValue)(inheritedValue);
		return {
			propValue: isInheritedDynamic && !overrideValue ? inheritedValue : overrideValue,
			baseValue: overrideValue || isInheritedDynamic ? null : inheritedValue
		};
	}
	function getTempNewValueForDynamicProp(propType, propValue, newPropValue) {
		if (newPropValue === null && (0, _elementor_editor_editing_panel.isDynamicPropValue)(propValue)) return propType.default ?? null;
		return newPropValue;
	}
	function createOverrideValue({ matchingOverride, overrideKey, overrideValue, componentId }) {
		const overridableValue = componentOverridablePropTypeUtil.extract(matchingOverride);
		const anyOverridable = componentOverridablePropTypeUtil.extract(overrideValue) ?? overridableValue;
		if (anyOverridable) {
			const innerOverride = componentInstanceOverridePropTypeUtil.create({
				override_key: overrideKey,
				override_value: resolveOverridePropValue(overrideValue),
				schema_source: {
					type: "component",
					id: componentId
				}
			});
			return componentOverridablePropTypeUtil.create({
				override_key: anyOverridable.override_key,
				origin_value: innerOverride
			});
		}
		return componentInstanceOverridePropTypeUtil.create({
			override_key: overrideKey,
			override_value: overrideValue,
			schema_source: {
				type: "component",
				id: componentId
			}
		});
	}
	function getControlParams(controls, originPropFields, label) {
		const control = controls[originPropFields.propKey];
		const { value } = control;
		const layout = getControlLayout(control);
		const controlProps = populateChildControlProps(value.props);
		if (layout === "custom") controlProps.label = label ?? value.label;
		return {
			control,
			controlProps,
			layout
		};
	}
	function OriginalControl({ control, controlProps }) {
		const { value } = control;
		return /* @__PURE__ */ react.createElement(_elementor_editor_editing_panel.BaseControl, {
			type: value.type,
			props: controlProps
		});
	}
	function getControlLayout(control) {
		return control.value.meta?.layout || _elementor_editor_editing_panel.controlsRegistry.getLayout(control.value.type);
	}
	function populateChildControlProps(props) {
		if (props.childControlType) {
			const childComponent = _elementor_editor_editing_panel.controlsRegistry.get(props.childControlType);
			const childPropType = _elementor_editor_editing_panel.controlsRegistry.getPropTypeUtil(props.childControlType);
			props = {
				...props,
				childControlConfig: {
					component: childComponent,
					props: props.childControlProps || {},
					propTypeUtil: childPropType
				}
			};
		}
		return props;
	}
	function isValidOverride(overridableProps, override) {
		const overridableKey = componentOverridablePropTypeUtil.isValid(override) ? override.value.origin_value?.value.override_key : override.value.override_key;
		return !!overridableProps.props[overridableKey];
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/instance-editing-panel/override-props-group.tsx
	function OverridePropsGroup({ group }) {
		const [isOpen, setIsOpen] = (0, _elementor_editor_editing_panel.useStateByElement)(group.id, true);
		const handleClick = () => {
			setIsOpen(!isOpen);
		};
		const id = (0, react.useId)();
		const labelId = `label-${id}`;
		const contentId = `content-${id}`;
		const title = group.label;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { "aria-label": `${title} section` }, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemButton, {
			id: labelId,
			"aria-controls": contentId,
			"aria-label": `${title} section`,
			onClick: handleClick,
			p: 0,
			sx: { "&:hover": { backgroundColor: "transparent" } }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			justifyItems: "start",
			flexGrow: 1,
			gap: .5
		}, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemText, {
			secondary: title,
			secondaryTypographyProps: {
				color: "text.primary",
				variant: "caption",
				fontWeight: "bold"
			},
			sx: {
				flexGrow: 0,
				flexShrink: 1,
				marginInlineEnd: 1
			}
		})), /* @__PURE__ */ react.createElement(_elementor_editor_ui.CollapseIcon, {
			open: isOpen,
			color: "secondary",
			fontSize: "tiny"
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Collapse, {
			id: contentId,
			"aria-labelledby": labelId,
			in: isOpen,
			timeout: "auto"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "column",
			gap: 1,
			p: 2
		}, group.props.map((overrideKey) => /* @__PURE__ */ react.createElement(OverridePropControl, {
			key: overrideKey,
			overrideKey
		})))));
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/instance-editing-panel/instance-panel-body.tsx
	function InstancePanelBody({ groups, isEmpty, emptyState, componentInstanceId }) {
		return /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelBody, null, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlAdornmentsProvider, { items: (0, _elementor_editor_editing_panel.getFieldIndicators)("settings") }, isEmpty ? emptyState : /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "column",
			alignItems: "stretch"
		}, groups.map((group) => /* @__PURE__ */ react.createElement(react.Fragment, { key: group.id + componentInstanceId }, /* @__PURE__ */ react.createElement(OverridePropsGroup, { group }), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null))))));
	}

//#endregion
//#region packages/packages/core/editor-components/src/utils/filter-valid-overridable-props.ts
	function filterValidOverridableProps(overridableProps, instanceElementId) {
		const validProps = {};
		for (const [key, prop] of Object.entries(overridableProps.props)) if (isExposedPropValid(prop, instanceElementId)) validProps[key] = prop;
		const validPropKeys = new Set(Object.keys(validProps));
		return {
			props: validProps,
			groups: {
				items: Object.fromEntries(Object.entries(overridableProps.groups.items).map(([groupId, group]) => [groupId, {
					...group,
					props: group.props.filter((propKey) => validPropKeys.has(propKey))
				}])),
				order: overridableProps.groups.order
			}
		};
	}
	function isExposedPropValid(prop, instanceElementId) {
		const { isChainBroken } = resolveOverridesChain({
			outerOverridableProp: prop,
			outerInstanceId: instanceElementId
		});
		return !isChainBroken;
	}

//#endregion
//#region packages/packages/core/editor-components/src/hooks/use-sanitize-overridable-props.ts
	function useSanitizeOverridableProps(componentId, instanceElementId) {
		const overridableProps = useOverridableProps(componentId);
		const isSanitized = useIsSanitizedComponent(componentId, "overridableProps");
		if (!overridableProps || !componentId) return;
		if (isSanitized) return overridableProps;
		return filterValidOverridableProps(overridableProps, instanceElementId);
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/instance-editing-panel/use-instance-panel-data.ts
	function useInstancePanelData() {
		const { element, settings } = useComponentInstanceSettings();
		const componentId = settings?.component_id?.value;
		const overrides = settings?.overrides?.value;
		const component = useComponent(componentId ?? null);
		const componentInstanceId = element?.id;
		const overridableProps = useSanitizeOverridableProps(componentId ?? null, componentInstanceId);
		if (!componentId || !overridableProps || !component || !componentInstanceId) return null;
		const isNonEmptyGroup = (group) => group !== null && group.props.length > 0;
		const groups = overridableProps.groups.order.map((groupId) => overridableProps.groups.items[groupId] ?? null).filter(isNonEmptyGroup);
		return {
			componentId,
			component,
			overrides,
			overridableProps,
			groups,
			isEmpty: groups.length === 0 || Object.keys(overridableProps.props).length === 0,
			componentInstanceId
		};
	}
	function useComponentInstanceSettings() {
		const { element, settings } = (0, _elementor_editor_editing_panel.useElement)();
		return {
			element,
			settings: componentInstancePropTypeUtil.extract(settings.component_instance)
		};
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/instance-editing-panel/instance-editing-panel.tsx
	var EDIT_UPGRADE_URL = "https://go.elementor.com/go-pro-components-Instance-edit-footer/";
	function InstanceEditingPanel() {
		const { canEdit } = useComponentsPermissions();
		const data = useInstancePanelData();
		if (!data) return null;
		const { componentId, component, overrides, overridableProps, groups, isEmpty, componentInstanceId } = data;
		const panelTitle = (0, _wordpress_i18n.__)("Edit %s", "elementor").replace("%s", component.name);
		const actions = /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			gap: .5
		}, /* @__PURE__ */ react.createElement(DetachAction, {
			componentInstanceId,
			componentId
		}), canEdit && /* @__PURE__ */ react.createElement(EditComponentAction, {
			disabled: true,
			label: panelTitle,
			icon: _elementor_icons.PencilIcon
		}));
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			"data-testid": "instance-editing-panel",
			sx: {
				display: "flex",
				flexDirection: "column",
				height: "100%"
			}
		}, /* @__PURE__ */ react.createElement(ComponentInstanceProvider, {
			componentId,
			overrides,
			overridableProps
		}, /* @__PURE__ */ react.createElement(InstancePanelHeader, {
			componentName: component.name,
			actions
		}), /* @__PURE__ */ react.createElement(InstancePanelBody, {
			groups,
			isEmpty,
			emptyState: /* @__PURE__ */ react.createElement(EmptyState, null),
			componentInstanceId
		})), !isProComponentsSupported() && (isProOutdatedForComponents() ? /* @__PURE__ */ react.createElement(ComponentsUpdateAlert, {
			title: (0, _wordpress_i18n.__)("Edit Component", "elementor"),
			description: (0, _wordpress_i18n.__)("To edit components, update Elementor Pro to the latest version.", "elementor")
		}) : /* @__PURE__ */ react.createElement(ComponentsUpgradeAlert, {
			title: (0, _wordpress_i18n.__)("Edit components", "elementor"),
			description: (0, _wordpress_i18n.__)("Editing components requires an active Pro subscription.", "elementor"),
			upgradeUrl: EDIT_UPGRADE_URL
		})));
	}

//#endregion
//#region packages/packages/core/editor-components/src/utils/get-component-documents.ts
	async function getComponentDocuments({ elements, cache = /* @__PURE__ */ new Map(), isRecursive = true }) {
		return getDocumentsMap(await getComponentIds(elements, cache, isRecursive), cache);
	}
	async function getComponentIds(elements, cache, isRecursive) {
		const results = await Promise.all(elements.filter(Boolean).map(async ({ widgetType, elType, elements: childElements, settings }) => {
			const ids = [];
			if (isComponentInstance({
				widgetType,
				elType
			})) {
				const componentId = settings?.component_instance?.value?.component_id.value;
				if (!componentId) return ids;
				ids.push(componentId);
				if (!cache.has(componentId)) cache.set(componentId, getComponentDocumentData(componentId));
				if (isRecursive) childElements = (await cache.get(componentId))?.elements;
			}
			if (childElements?.length) {
				const childIds = await getComponentIds(childElements, cache, isRecursive);
				ids.push(...childIds);
			}
			return ids;
		}));
		return [...new Set(results.flat())];
	}
	async function getDocumentsMap(ids, cache) {
		const documents = await Promise.all(ids.map(async (id) => {
			const document = await cache.get(id);
			if (!document) return null;
			return [id, document];
		}));
		return new Map(documents.filter((document) => document !== null));
	}

//#endregion
//#region packages/packages/core/editor-components/src/store/actions/load-components-overridable-props.ts
	async function loadComponentsOverridableProps(componentIds, { force = false } = {}) {
		const idsToLoad = force ? componentIds : componentIds.filter((id) => !selectIsOverridablePropsLoaded((0, _elementor_store.__getState)(), id));
		if (!idsToLoad.length) return;
		const { data } = await apiClient.getOverridableProps(idsToLoad);
		(0, _elementor_store.__dispatch)(slice.actions.loadOverridableProps(data));
	}

//#endregion
//#region packages/packages/core/editor-components/src/store/actions/load-components-assets.ts
	async function loadComponentsAssets(elements) {
		if (!elements.length) return;
		const documents = await getComponentDocuments({
			elements,
			isRecursive: false
		});
		updateDocumentState(documents);
		documents.forEach((document, id) => {
			_elementor_editor_embedded_documents_manager.embeddedDocumentsManager.setDocument(id, document);
		});
		await loadComponentsOverridableProps([...documents.keys()]);
	}
	function updateDocumentState(documents) {
		if ([...documents.values()].some(_elementor_editor_documents.isDocumentDirty)) (0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
	}

//#endregion
//#region packages/packages/core/editor-components/src/components/load-template-components.tsx
	var LoadTemplateComponents = () => {
		if ((0, _elementor_editor_templates.isHandlingTemplateStyles)()) return /* @__PURE__ */ react.createElement(LoadTemplateComponentsInternal, null);
		return null;
	};
	function LoadTemplateComponentsInternal() {
		const templates = (0, _elementor_editor_templates.useLoadedTemplates)();
		(0, react.useEffect)(() => {
			loadComponentsAssets(templates.flatMap((elements) => elements ?? []));
		}, [templates]);
		return null;
	}

//#endregion
//#region packages/packages/core/editor-components/src/utils/format-component-elements-id.ts
	var ELEMENT_ID_LENGTH$1 = 7;
	function formatComponentElementsId(elements, path) {
		return elements.map((element) => {
			const nestingPath = [...path, element.id];
			const id = (0, _elementor_utils.hashString)(nestingPath.join("_"), ELEMENT_ID_LENGTH$1);
			return {
				...element,
				id,
				originId: element.id,
				elements: element.elements ? formatComponentElementsId(element.elements, nestingPath) : void 0
			};
		});
	}

//#endregion
//#region packages/packages/core/editor-components/src/utils/reconcile-component-instance-elements.ts
	var ELEMENT_ID_LENGTH = 7;
	function overridesRecordToMapping(overrides) {
		const mapping = {};
		for (const [key, value] of Object.entries(overrides)) mapping[key] = { value };
		return mapping;
	}
	function getElementConfig(element) {
		const type = element.elType === "widget" ? element.widgetType : element.elType;
		if (!type) return;
		return (0, _elementor_editor_elements.getWidgetsCache)()?.[type];
	}
	function deriveIds(element, seed) {
		const id = (0, _elementor_utils.hashString)(seed, ELEMENT_ID_LENGTH);
		return {
			...element,
			id,
			elements: (element.elements ?? []).map((child, index) => deriveIds(child, `${id}_${index}`))
		};
	}
	function reconcileElementTree(element, overridesMapping) {
		const elementConfig = getElementConfig(element);
		const effectiveSettings = unwrapOverridableSettings(applyOverridesToSettings(element.settings ?? {}, overridesMapping));
		const originalChildren = element.elements ?? [];
		const originalChildIds = new Set(originalChildren.map((child) => child.id));
		const attributes = {
			elements: [...originalChildren],
			settings: effectiveSettings
		};
		if (elementConfig?.children_dependencies?.length) (0, _elementor_editor_elements.reconcileInitialChildren)({
			elementId: element.id,
			elementConfig,
			attributes
		});
		const reconciledChildren = (attributes.elements ?? []).map((child) => originalChildIds.has(child.id) ? child : deriveIds(child, `${element.id}_${child.elType}`)).map((child) => reconcileElementTree(child, overridesMapping));
		return {
			...element,
			elements: reconciledChildren
		};
	}
	function reconcileComponentInstanceElements(elements, overrides = {}) {
		const overridesMapping = overridesRecordToMapping(overrides);
		return elements.map((element) => reconcileElementTree(element, overridesMapping));
	}

//#endregion
//#region packages/packages/core/editor-components/src/utils/switch-to-component.ts
	async function switchToComponent(componentId, componentInstanceId, element) {
		const selector = getSelector(element, componentInstanceId);
		(0, _elementor_editor_documents.invalidateDocumentData)(componentId);
		await (0, _elementor_editor_documents.switchToDocument)(componentId, {
			selector,
			mode: "autosave",
			setAsInitial: false,
			shouldScroll: false
		});
		await loadComponentsOverridableProps([componentId], { force: true });
		const topLevelElement = (0, _elementor_editor_elements.getCurrentDocumentContainer)()?.children?.[0];
		if (topLevelElement) {
			(0, _elementor_editor_elements.selectElement)(topLevelElement.id);
			expandNavigator();
		}
	}
	async function expandNavigator() {
		await (0, _elementor_editor_v1_adapters.__privateRunCommand)("navigator/expand-all");
	}
	function getSelector(element, componentInstanceId) {
		if (element) return buildUniqueSelector(element);
		if (componentInstanceId) return `[data-id="${componentInstanceId}"]`;
	}
	function buildUniqueSelector(element) {
		const selectors = [];
		let current = element.closest("[data-id]");
		while (current) {
			const dataId = current.dataset.id;
			if (current.hasAttribute("data-elementor-id")) selectors.unshift(`[data-id="${dataId}"]`);
			current = current.parentElement?.closest("[data-id]") ?? null;
		}
		if (selectors.length === 0) {
			const closestElement = element.closest("[data-id]");
			if (closestElement?.dataset?.id) return `[data-id="${closestElement.dataset.id}"]`;
		}
		return selectors.join(" ");
	}

//#endregion
//#region packages/packages/core/editor-components/src/create-component-type.ts
	var __defProp = Object.defineProperty;
	var __typeError = (msg) => {
		throw TypeError(msg);
	};
	var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
	var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
	var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
	var COMPONENT_WIDGET_TYPE = "e-component";
	var EDIT_COMPONENT_DB_CLICK_UPGRADE_URL = "https://go.elementor.com/go-pro-components-Instance-edit-canvas-double-click/";
	var EDIT_COMPONENT_CONTEXT_MENU_UPGRADE_URL = "https://go.elementor.com/go-pro-components-Instance-edit-context-menu/";
	var UPDATE_PLUGINS_URL = "/wp-admin/plugins.php";
	var COMPONENT_EDIT_UPGRADE_NOTIFICATION_ID = "component-edit-upgrade";
	var COMPONENT_EDIT_UPDATE_NOTIFICATION_ID = "component-edit-update";
	var COMPONENT_EDIT_UPGRADE_AUTO_HIDE_DURATION = 2e3;
	function notifyComponentEditUpgrade() {
		(0, _elementor_editor_notifications.notify)({
			type: "promotion",
			id: COMPONENT_EDIT_UPGRADE_NOTIFICATION_ID,
			message: (0, _wordpress_i18n.__)("Editing components requires an active Pro subscription.", "elementor"),
			autoHideDuration: COMPONENT_EDIT_UPGRADE_AUTO_HIDE_DURATION,
			additionalActionProps: [{
				size: "small",
				variant: "contained",
				color: "promotion",
				href: EDIT_COMPONENT_DB_CLICK_UPGRADE_URL,
				target: "_blank",
				children: (0, _wordpress_i18n.__)("Upgrade Now", "elementor")
			}]
		});
	}
	function notifyComponentEditUpdate() {
		(0, _elementor_editor_notifications.notify)({
			type: "info",
			id: COMPONENT_EDIT_UPDATE_NOTIFICATION_ID,
			message: (0, _wordpress_i18n.__)("To edit components, update Elementor Pro to the latest version.", "elementor"),
			additionalActionProps: [{
				size: "small",
				variant: "contained",
				color: "info",
				href: UPDATE_PLUGINS_URL,
				target: "_blank",
				children: (0, _wordpress_i18n.__)("Update Now", "elementor")
			}]
		});
	}
	var updateGroups = (groups, config) => {
		const disableMap = new Map(Object.entries(config.disable ?? {}));
		const addMap = new Map(Object.entries(config.add ?? {}));
		return groups.map((group) => {
			const disabledActions = disableMap.get(group.name) ?? [];
			const addConfig = addMap.get(group.name);
			const updatedActions = group.actions.map((action) => disabledActions.includes(action.name) ? {
				...action,
				isEnabled: () => false
			} : action);
			if (addConfig) updatedActions.splice(addConfig.index, 0, ...addConfig.actions);
			return {
				...group,
				actions: updatedActions
			};
		});
	};
	function createComponentType(options) {
		const WidgetType = window.elementor.modules.elements.types.Widget;
		const view = createComponentView({ ...options });
		return class extends WidgetType {
			getType() {
				return options.type;
			}
			getView() {
				return view;
			}
			getModel() {
				return createComponentModel();
			}
		};
	}
	function createComponentView(options) {
		var _componentRenderContext;
		var _a;
		const legacyWindow = window;
		return _a = class extends (0, _elementor_editor_canvas.createTemplatedElementView)(options) {
			constructor() {
				super(...arguments);
				__publicField(this, "eventsManagerConfig", legacyWindow.elementorCommon.eventsManager.config);
				__privateAdd(this, _componentRenderContext);
			}
			isComponentCurrentlyEdited() {
				return (0, _elementor_editor_documents.getCurrentDocument)()?.id === this.getComponentId();
			}
			getRenderContext() {
				const namespaceKey = this.getNamespaceKey();
				const parentContext = this._parent?.getRenderContext?.();
				const parentComponentContext = parentContext?.[namespaceKey];
				if (!__privateGet(this, _componentRenderContext)) return parentContext;
				const ownOverrides = __privateGet(this, _componentRenderContext).overrides ?? {};
				const parentOverrides = parentComponentContext?.overrides ?? {};
				return {
					...parentContext,
					[namespaceKey]: { overrides: {
						...parentOverrides,
						...ownOverrides
					} }
				};
			}
			getResolverRenderContext() {
				const namespaceKey = this.getNamespaceKey();
				const ownContext = this.getRenderContext()?.[namespaceKey];
				if (!ownContext) return this._parent?.getResolverRenderContext?.();
				return {
					...this._parent?.getResolverRenderContext?.(),
					...ownContext
				};
			}
			afterSettingsResolve(settings) {
				const componentInstance = settings.component_instance;
				if (componentInstance) {
					__privateSet(this, _componentRenderContext, { overrides: componentInstance.overrides ?? {} });
					const instanceId = this.model.get("id");
					const formattedElements = formatComponentElementsId(reconcileComponentInstanceElements(componentInstance.elements ?? [], componentInstance.overrides ?? {}), [instanceId]);
					this.collection = legacyWindow.elementor.createBackboneElementsCollection(formattedElements);
					this.collection.models.forEach(setInactiveRecursively);
					settings.component_instance = "<template data-children-placeholder></template>";
				}
				return settings;
			}
			getDomElement() {
				return this.children.findByIndex(0)?.getDomElement() ?? this.$el;
			}
			attachBuffer(collectionView, buffer) {
				const childrenPlaceholder = collectionView.$el.find("[data-children-placeholder]").get(0);
				if (!childrenPlaceholder) {
					super.attachBuffer(collectionView, buffer);
					return;
				}
				childrenPlaceholder.replaceWith(buffer);
			}
			getComponentId() {
				return (this.options?.model?.get("settings")?.get("component_instance")?.value).component_id.value;
			}
			getContextMenuGroups() {
				const filteredGroups = super.getContextMenuGroups().filter((group) => group.name !== "save");
				if (!this.getComponentId()) return filteredGroups;
				return updateGroups(filteredGroups, this._getContextMenuConfig());
			}
			_getContextMenuConfig() {
				const isAdministrator = isUserAdministrator();
				const hasPro = (0, _elementor_utils.hasProInstalled)();
				const isOutdated = isProOutdatedForComponents();
				const editComponentAction = {
					name: "edit component",
					icon: "eicon-edit",
					title: () => (0, _wordpress_i18n.__)("Edit Component", "elementor"),
					...!hasPro && !isOutdated && {
						shortcut: `<a href="${EDIT_COMPONENT_CONTEXT_MENU_UPGRADE_URL}" target="_blank" onclick="event.stopPropagation()" class="elementor-context-menu-list__item__shortcut__promotion-badge"><i class="eicon-upgrade-crown"></i></a>`,
						hasShortcutAction: true
					},
					isEnabled: () => isProComponentsSupported() || isOutdated,
					callback: (_, eventData) => this.editComponent(eventData)
				};
				const detachInstanceAction = {
					name: "detach instance",
					icon: "eicon-chain-broken",
					title: () => (0, _wordpress_i18n.__)("Detach from Component", "elementor"),
					isEnabled: () => true,
					callback: (_, eventData) => this.detachInstance(eventData)
				};
				return {
					add: { general: {
						index: 1,
						actions: isAdministrator ? [editComponentAction, detachInstanceAction] : [detachInstanceAction]
					} },
					disable: { clipboard: ["pasteStyle", "resetStyle"] }
				};
			}
			async switchDocument() {
				const { isAllowedToSwitchDocument, lockedBy } = await apiClient.getComponentLockStatus(this.getComponentId());
				if (!isAllowedToSwitchDocument) options.showLockedByModal?.(lockedBy || "");
				else switchToComponent(this.getComponentId(), this.model.get("id"), this.el);
			}
			editComponent({ trigger, location, secondaryLocation }) {
				if (isProOutdatedForComponents()) {
					notifyComponentEditUpdate();
					return;
				}
				if (!isProComponentsSupported() || this.isComponentCurrentlyEdited()) return;
				this.switchDocument();
				const editorSettings = this.model.get("editor_settings");
				trackComponentEvent({
					action: "edited",
					executedBy: "user",
					component_uid: editorSettings?.component_uid,
					component_name: editorSettings?.title,
					location,
					secondary_location: secondaryLocation,
					trigger
				});
			}
			detachInstance({ trigger, location, secondaryLocation }) {
				const componentId = this.getComponentId();
				const instanceId = this.model.get("id");
				if (!componentId || !instanceId) return;
				const handleConfirm = async () => {
					try {
						await detachComponentInstance({
							instanceId,
							componentId,
							trackingInfo: {
								location,
								secondaryLocation,
								trigger
							}
						});
					} catch {
						(0, _elementor_editor_notifications.notify)({
							type: "error",
							message: (0, _wordpress_i18n.__)("Failed to detach component instance.", "elementor"),
							id: "detach-component-instance-failed"
						});
					}
				};
				options.showDetachConfirmDialog?.(handleConfirm);
			}
			handleDblClick(e) {
				e.stopPropagation();
				if (!isUserAdministrator()) return;
				if (isProOutdatedForComponents()) {
					notifyComponentEditUpdate();
					return;
				}
				if (!(0, _elementor_utils.hasProInstalled)()) {
					notifyComponentEditUpgrade();
					return;
				}
				const { triggers, locations, secondaryLocations } = this.eventsManagerConfig;
				this.editComponent({
					trigger: triggers.doubleClick,
					location: locations.canvas,
					secondaryLocation: secondaryLocations.canvasElement
				});
			}
			events() {
				return {
					...super.events(),
					dblclick: this.handleDblClick
				};
			}
			attributes() {
				return {
					...super.attributes(),
					"data-elementor-id": this.getComponentId()
				};
			}
		}, _componentRenderContext = /* @__PURE__ */ new WeakMap(), _a;
	}
	function setInactiveRecursively(model) {
		const editSettings = model.get("editSettings");
		if (editSettings) editSettings.set("inactive", true);
		const elements = model.get("elements");
		if (elements) elements.forEach((childModel) => {
			setInactiveRecursively(childModel);
		});
	}
	function isUserAdministrator() {
		return window.elementor.config?.user?.is_administrator ?? false;
	}
	function createComponentModel() {
		const WidgetType = window.elementor.modules.elements.types.Widget;
		const BaseWidgetModel = new WidgetType().getModel();
		return BaseWidgetModel.extend({
			initialize(attributes, options) {
				BaseWidgetModel.prototype.initialize.call(this, attributes, options);
				const componentInstance = this.get("settings")?.get("component_instance");
				if (componentInstance?.value) {
					const componentId = componentInstance.value.component_id?.value;
					if (componentId && typeof componentId === "number") this.set("componentId", componentId);
				}
				this.set("isGlobal", true);
			},
			getTitle() {
				const editorSettings = this.get("editor_settings");
				const instanceTitle = editorSettings?.title;
				if (instanceTitle) return instanceTitle;
				const componentUid = editorSettings?.component_uid;
				if (componentUid) {
					const component = selectComponentByUid((0, _elementor_store.__getState)(), componentUid);
					if (component?.name) return component.name;
				}
				return window.elementor.getElementData(this).title;
			},
			getComponentId() {
				return this.get("componentId") || null;
			},
			getComponentName() {
				return this.getTitle();
			},
			getComponentUid() {
				return this.get("editor_settings")?.component_uid || null;
			}
		});
	}

//#endregion
//#region packages/packages/core/editor-components/src/populate-store.ts
	function PopulateStore() {
		(0, react.useEffect)(() => {
			(0, _elementor_store.__dispatch)(loadComponents());
		}, []);
		return null;
	}

//#endregion
//#region packages/packages/core/editor-components/src/prevent-circular-nesting.ts
	var COMPONENT_TYPE = "e-component";
	var COMPONENT_CIRCULAR_NESTING_ALERT = {
		type: "default",
		message: (0, _wordpress_i18n.__)("Can't add this component - components that contain each other can't be nested.", "elementor"),
		id: "circular-component-nesting-blocked"
	};
	function initCircularNestingPrevention() {
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "document/elements/create",
			condition: blockCircularCreate
		});
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "document/elements/move",
			condition: blockCircularMove
		});
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "document/elements/paste",
			condition: blockCircularPaste
		});
	}
	function wouldCreateCircularNesting(componentIdToAdd) {
		if (componentIdToAdd === void 0) return false;
		const state = (0, _elementor_store.__getState)();
		const currentComponentId = selectCurrentComponentId(state);
		const path = selectPath(state);
		if (currentComponentId === null) return false;
		if (componentIdToAdd === currentComponentId) return true;
		return path.some((item) => item.componentId === componentIdToAdd);
	}
	function extractComponentIdFromModel(model) {
		if (!model) return null;
		if (!(model.widgetType === COMPONENT_TYPE)) return null;
		return model.settings?.component_instance?.value?.component_id?.value ?? null;
	}
	function extractComponentIdFromElement(element) {
		if (element.widgetType !== COMPONENT_TYPE) return null;
		return element.settings?.component_instance?.value?.component_id?.value ?? null;
	}
	function extractComponentIdsFromElements(elements) {
		const ids = [];
		for (const element of elements) {
			const componentId = extractComponentIdFromElement(element);
			if (componentId !== null) ids.push(componentId);
			if (element.elements?.length) ids.push(...extractComponentIdsFromElements(element.elements));
		}
		return ids;
	}
	function extractComponentIdFromContainer(container) {
		if (container.model?.get?.("widgetType") !== COMPONENT_TYPE) return null;
		return ((container.model?.get?.("settings"))?.get?.("component_instance"))?.value?.component_id?.value ?? null;
	}
	function blockCircularCreate(args) {
		const componentId = extractComponentIdFromModel(args.model);
		if (componentId === null) return false;
		const isBlocked = wouldCreateCircularNesting(componentId);
		if (isBlocked) (0, _elementor_editor_notifications.notify)(COMPONENT_CIRCULAR_NESTING_ALERT);
		return isBlocked;
	}
	function blockCircularMove(args) {
		const { containers = [args.container] } = args;
		const hasCircularComponent = containers.some((container) => {
			if (!container) return false;
			return (0, _elementor_editor_elements.getAllDescendants)(container).some((element) => {
				const componentId = extractComponentIdFromContainer(element);
				if (componentId === null) return false;
				return wouldCreateCircularNesting(componentId);
			});
		});
		if (hasCircularComponent) (0, _elementor_editor_notifications.notify)(COMPONENT_CIRCULAR_NESTING_ALERT);
		return hasCircularComponent;
	}
	function blockCircularPaste(args) {
		const { storageType } = args;
		if (storageType !== "localstorage") return false;
		const data = window?.elementorCommon?.storage?.get();
		if (!data?.clipboard?.elements) return false;
		const hasCircularComponent = extractComponentIdsFromElements(data.clipboard.elements).some(wouldCreateCircularNesting);
		if (hasCircularComponent) (0, _elementor_editor_notifications.notify)(COMPONENT_CIRCULAR_NESTING_ALERT);
		return hasCircularComponent;
	}

//#endregion
//#region packages/packages/core/editor-components/src/store/actions/remove-component-styles.ts
	function removeComponentStyles(id) {
		apiClient.invalidateComponentConfigCache(id);
	}

//#endregion
//#region packages/packages/core/editor-components/src/sync/publish-draft-components-in-page-before-save.ts
	var INSUFFICIENT_PERMISSIONS_ERROR_CODE = "insufficient_permissions";
	var PUBLISH_UPGRADE_URL = "https://go.elementor.com/go-pro-components-Instance-draft-failure/";
	var PUBLISH_UPGRADE_NOTIFICATION_ID = "component-publish-upgrade";
	async function publishDraftComponentsInPageBeforeSave({ status, elements }) {
		if (status !== "publish") return;
		const draftIds = [...(await getComponentDocuments({ elements })).values()].filter(_elementor_editor_documents.isDocumentDirty).map((document) => document.id);
		if (draftIds.length === 0) return;
		try {
			await apiClient.updateStatuses(draftIds, "publish");
		} catch (error) {
			if (isInsufficientPermissionsError(error)) {
				notifyPublishUpgrade();
				return;
			}
			throw error;
		}
		draftIds.forEach((id) => (0, _elementor_editor_documents.invalidateDocumentData)(id));
	}
	function isInsufficientPermissionsError(error) {
		return error instanceof _elementor_http_client.AxiosError && error.response?.data?.code === INSUFFICIENT_PERMISSIONS_ERROR_CODE;
	}
	function notifyPublishUpgrade() {
		(0, _elementor_editor_notifications.notify)({
			type: "promotion",
			id: PUBLISH_UPGRADE_NOTIFICATION_ID,
			message: (0, _wordpress_i18n.__)("You have unpublished component on this page. You need a pro version to publish it.", "elementor"),
			additionalActionProps: [{
				size: "small",
				variant: "contained",
				color: "promotion",
				href: PUBLISH_UPGRADE_URL,
				target: "_blank",
				children: (0, _wordpress_i18n.__)("Upgrade Now", "elementor")
			}]
		});
	}

//#endregion
//#region packages/packages/core/editor-components/src/sync/before-save.ts
	var beforeSave = ({ container, status }) => {
		return publishDraftComponentsInPageBeforeSave({
			elements: container?.model.get("elements").toJSON?.() ?? [],
			status
		});
	};

//#endregion
//#region packages/packages/core/editor-components/src/sync/load-component-data-after-instance-added.ts
	function initLoadComponentDataAfterInstanceAdded() {
		(0, _elementor_editor_v1_adapters.registerDataHook)("after", "document/elements/paste", (_args, result) => {
			load(result);
		});
		(0, _elementor_editor_v1_adapters.registerDataHook)("after", "document/elements/import", (_args, result) => {
			load(result);
		});
	}
	function load(result) {
		if (!result) return;
		loadComponentsAssets((Array.isArray(result) ? result : [result]).map((container) => container.model?.toJSON()).filter((element) => !!element));
	}

//#endregion
//#region packages/packages/core/editor-components/src/init.ts
	function init() {
		(0, _elementor_store.__registerSlice)(slice);
		(0, _elementor_editor_canvas.registerElementType)(COMPONENT_WIDGET_TYPE, (options) => createComponentType({
			...options,
			showLockedByModal: openEditModeDialog,
			showDetachConfirmDialog: openDetachConfirmDialog
		}));
		window.elementorCommon.__beforeSave = beforeSave;
		(0, _elementor_editor_elements_panel.injectTab)({
			id: "components",
			label: (0, _wordpress_i18n.__)("Components", "elementor"),
			component: Components,
			position: 1
		});
		(0, _elementor_editor.injectIntoLogic)({
			id: "components-populate-store",
			component: PopulateStore
		});
		(0, _elementor_editor_v1_adapters.registerDataHook)("after", "editor/documents/attach-preview", () => {
			const { id, config } = (0, _elementor_editor_documents.getV1CurrentDocument)() ?? {};
			if (!id) return;
			removeComponentStyles(id);
			loadComponentsAssets(config?.elements ?? []);
		});
		_elementor_editor_embedded_documents_manager.embeddedDocumentsManager.onDocumentLoad((_documentId, data) => {
			loadComponentsAssets(data.elements ?? []);
		});
		(0, _elementor_editor.injectIntoLogic)({
			id: "templates",
			component: LoadTemplateComponents
		});
		(0, _elementor_editor_editing_panel.registerEditingPanelReplacement)({
			id: "component-instance-edit-panel",
			condition: (_, elementType) => elementType.key === "e-component",
			component: InstanceEditingPanel
		});
		_elementor_editor_canvas.settingsTransformersRegistry.register("component-instance", componentInstanceTransformer);
		_elementor_editor_canvas.settingsTransformersRegistry.register("overridable", componentOverridableTransformer);
		_elementor_editor_canvas.settingsTransformersRegistry.register("override", componentOverrideTransformer);
		initCircularNestingPrevention();
		initLoadComponentDataAfterInstanceAdded();
	}

//#endregion
//#region packages/packages/core/editor-components/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		COMPONENT_WIDGET_TYPE: () => COMPONENT_WIDGET_TYPE,
		ComponentInstanceProvider: () => ComponentInstanceProvider,
		ComponentItem: () => ComponentItem,
		ComponentName: () => ComponentName,
		ComponentSearch: () => ComponentSearch,
		ComponentsList: () => ComponentsList,
		DetachAction: () => DetachAction,
		EditComponentAction: () => EditComponentAction,
		EmptySearchResult: () => EmptySearchResult,
		InstanceEmptyState: () => EmptyState,
		InstancePanelBody: () => InstancePanelBody,
		InstancePanelHeader: () => InstancePanelHeader,
		LoadingComponents: () => LoadingComponents,
		OverridablePropProvider: () => OverridablePropProvider,
		SLICE_NAME: () => SLICE_NAME,
		SearchProvider: () => SearchProvider,
		apiClient: () => apiClient,
		componentInstanceOverridePropTypeUtil: () => componentInstanceOverridePropTypeUtil,
		componentInstanceOverridesPropTypeUtil: () => componentInstanceOverridesPropTypeUtil,
		componentInstancePropTypeUtil: () => componentInstancePropTypeUtil,
		componentOverridablePropTypeUtil: () => componentOverridablePropTypeUtil,
		componentsActions: () => componentsActions,
		componentsSelectors: () => componentsSelectors,
		createComponentsAction: () => createComponentsAction,
		filterValidOverridableProps: () => filterValidOverridableProps,
		getComponentDocumentData: () => getComponentDocumentData,
		getContainerByOriginId: () => getContainerByOriginId,
		getOverridableProp: () => getOverridableProp,
		getPropTypeForComponentOverride: () => getPropTypeForComponentOverride,
		init: () => init,
		isComponentInstance: () => isComponentInstance,
		loadComponentsAssets: () => loadComponentsAssets,
		onElementDrop: () => onElementDrop,
		publishDraftComponentsInPageBeforeSave: () => publishDraftComponentsInPageBeforeSave,
		registerComponentsReducer: () => registerComponentsReducer,
		resolveOverridePropValue: () => resolveOverridePropValue,
		selectComponentByUid: () => selectComponentByUid,
		selectCreatedThisSession: () => selectCreatedThisSession,
		selectOverridableProps: () => selectOverridableProps,
		selectPath: () => selectPath,
		slice: () => slice,
		switchToComponent: () => switchToComponent,
		trackComponentEvent: () => trackComponentEvent,
		updateOverridableProp: () => updateOverridableProp,
		useComponentInstanceElement: () => useComponentInstanceElement,
		useComponents: () => useComponents,
		useComponentsPermissions: () => useComponentsPermissions,
		useCurrentComponent: () => useCurrentComponent,
		useCurrentComponentId: () => useCurrentComponentId,
		useFilteredComponents: () => useFilteredComponents,
		useInstancePanelData: () => useInstancePanelData,
		useIsSanitizedComponent: () => useIsSanitizedComponent,
		useOverridablePropValue: () => useOverridablePropValue,
		useOverridableProps: () => useOverridableProps,
		useSanitizeOverridableProps: () => useSanitizeOverridableProps
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorComponents = src_exports;

//#endregion
})(elementorV2.editor, elementorV2.editorCanvas, elementorV2.editorDocuments, elementorV2.editorEditingPanel, elementorV2.editorElementsPanel, elementorV2.editorEmbeddedDocumentsManager, elementorV2.editorV1Adapters, elementorV2.store, wp.i18n, elementorV2.httpClient, React, elementorV2.editorUi, elementorV2.ui, elementorV2.utils, elementorV2.icons, elementorV2.editorCurrentUser, elementorV2.editorNotifications, elementorV2.editorElements, elementorV2.editorProps, elementorV2.schema, elementorV2.events, elementorV2.editorPanels, elementorV2.editorControls, elementorV2.editorTemplates);
window.elementorV2.editorComponents?.init?.();
//# sourceMappingURL=editor-components.js.map