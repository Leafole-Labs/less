(function(react, _elementor_editor_current_user, _elementor_editor_documents, _elementor_editor_panels, _elementor_editor_ui, _elementor_query, _elementor_store, _elementor_ui, _wordpress_i18n, _elementor_editor_styles, _elementor_utils, _elementor_http_client, _elementor_icons, _elementor_events, react_dom, _elementor_editor_styles_repository, _elementor_editor, _elementor_editor_editing_panel, _elementor_editor_embedded_documents_manager, _elementor_editor_mcp, _elementor_editor_canvas, _elementor_editor_v1_adapters, _elementor_schema) {

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
let react$1 = __toESM(react, 1);
react = __toESM(react);

//#region packages/packages/core/editor-global-classes/src/errors.ts
	var GlobalClassNotFoundError = (0, _elementor_utils.createError)({
		code: "global_class_not_found",
		message: "Global class not found."
	});
	var GlobalClassLabelAlreadyExistsError = (0, _elementor_utils.createError)({
		code: "global_class_label_already_exists",
		message: "Class with this name already exists."
	});
	var GlobalClassTrackingError = (0, _elementor_utils.createError)({
		code: "global_class_tracking_error",
		message: "Error tracking global classes event."
	});

//#endregion
//#region packages/packages/core/editor-global-classes/src/utils/snapshot-history.ts
	var __defProp = Object.defineProperty;
	var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	function createLink({ value, next, prev }) {
		return {
			value,
			prev: prev || null,
			next: next || null
		};
	}
	var _SnapshotHistory = class _SnapshotHistory {
		constructor(namespace) {
			__publicField(this, "namespace", namespace);
			__publicField(this, "first", null);
			__publicField(this, "current", null);
		}
		static get(namespace) {
			if (!_SnapshotHistory.registry[namespace]) _SnapshotHistory.registry[namespace] = new _SnapshotHistory(namespace);
			return _SnapshotHistory.registry[namespace];
		}
		transform(item) {
			return JSON.parse(JSON.stringify(item));
		}
		reset() {
			this.first = this.current = null;
		}
		prev() {
			if (!this.current || this.current === this.first) return null;
			this.current = this.current.prev;
			return this.current?.value || null;
		}
		isLast() {
			return !this.current || !this.current.next;
		}
		next(value) {
			if (value) {
				if (!this.current) {
					this.first = createLink({ value: this.transform(value) });
					this.current = this.first;
					return this.current.value;
				}
				const nextLink = createLink({
					value: this.transform(value),
					prev: this.current
				});
				this.current.next = nextLink;
				this.current = nextLink;
				return this.current.value;
			}
			if (!this.current || !this.current.next) return null;
			this.current = this.current.next;
			return this.current.value;
		}
	};
	__publicField(_SnapshotHistory, "registry", {});
	var SnapshotHistory = _SnapshotHistory;

//#endregion
//#region packages/packages/core/editor-global-classes/src/store.ts
	var localHistory = SnapshotHistory.get("global-classes");
	var initialState = {
		data: {
			items: {},
			order: []
		},
		classLabels: {},
		initialData: {
			frontend: {
				items: {},
				order: []
			},
			preview: {
				items: {},
				order: []
			}
		},
		isDirty: false
	};
	var SLICE_NAME = "globalClasses";
	var slice = (0, _elementor_store.__createSlice)({
		name: SLICE_NAME,
		initialState,
		reducers: {
			load(state, { payload: { frontend, preview, classLabels } }) {
				state.initialData.frontend = frontend;
				state.initialData.preview = preview;
				state.data = preview;
				state.classLabels = classLabels;
				state.isDirty = false;
			},
			add(state, { payload }) {
				localHistory.next(state.data);
				state.data.items[payload.id] = payload;
				state.data.order.unshift(payload.id);
				state.classLabels[payload.id] = payload.label;
				state.isDirty = true;
			},
			delete(state, { payload }) {
				localHistory.next(state.data);
				state.data.items = Object.fromEntries(Object.entries(state.data.items).filter(([id]) => id !== payload));
				state.data.order = state.data.order.filter((id) => id !== payload);
				delete state.classLabels[payload];
				state.isDirty = true;
			},
			setOrder(state, { payload }) {
				localHistory.next(state.data);
				state.data.order = payload;
				state.isDirty = true;
			},
			update(state, { payload }) {
				const oldLabel = state.classLabels[payload.style.id];
				localHistory.next(state.data);
				const mergedData = {
					...state.data.items[payload.style.id],
					...payload.style
				};
				if (oldLabel && payload.style.label && payload.style.label !== oldLabel) state.classLabels[payload.style.id] = payload.style.label;
				state.data.items[payload.style.id] = mergedData;
				state.isDirty = true;
			},
			updateMultiple(state, { payload }) {
				localHistory.next(state.data);
				Object.entries(payload).forEach(([id, { modified }]) => {
					state.data.items[id].label = modified;
					state.classLabels[id] = modified;
				});
				state.isDirty = false;
			},
			updateProps(state, { payload }) {
				const style = state.data.items[payload.id];
				if (!style) throw new GlobalClassNotFoundError({ context: { styleId: payload.id } });
				localHistory.next(state.data);
				const variant = (0, _elementor_editor_styles.getVariantByMeta)(style, payload.meta);
				let customCss = ("custom_css" in payload ? payload.custom_css : variant?.custom_css) ?? null;
				customCss = customCss?.raw ? customCss : null;
				if (variant) {
					const payloadProps = JSON.parse(JSON.stringify(payload.props));
					if ((payload.mode ?? "merge") === "replace") variant.props = payloadProps;
					else {
						const variantProps = JSON.parse(JSON.stringify(variant.props));
						variant.props = mergeProps(variantProps, payloadProps);
					}
					variant.custom_css = customCss;
					style.variants = getNonEmptyVariants(style);
				} else style.variants.push({
					meta: payload.meta,
					props: payload.props,
					custom_css: customCss
				});
				state.isDirty = true;
			},
			reset(state, { payload: { context } }) {
				if (context === "frontend") {
					localHistory.reset();
					state.initialData.frontend = state.data;
					state.isDirty = false;
				}
				state.initialData.preview = state.data;
			},
			undo(state) {
				if (localHistory.isLast()) localHistory.next(state.data);
				const data = localHistory.prev();
				if (data) {
					state.data = data;
					state.isDirty = true;
				} else state.data = state.initialData.preview;
			},
			resetToInitialState(state, { payload: { context } }) {
				localHistory.reset();
				state.data = state.initialData[context];
				state.isDirty = false;
			},
			redo(state) {
				const data = localHistory.next();
				if (localHistory.isLast()) localHistory.prev();
				if (data) {
					state.data = data;
					state.isDirty = true;
				}
			},
			mergeExistingClasses(state, { payload: { preview, frontend } }) {
				Object.entries(preview).forEach(([id, previewClassData]) => {
					const frontendClassData = frontend[id];
					if (previewClassData === null || previewClassData === void 0) return;
					if (!(id in state.data.items)) state.data.items[id] = previewClassData;
					if (frontendClassData && !(id in state.initialData.frontend.items)) state.initialData.frontend.items[id] = frontendClassData;
					if (!(id in state.initialData.preview.items)) state.initialData.preview.items[id] = previewClassData;
					if (!(id in state.classLabels)) state.classLabels[id] = previewClassData.label;
				});
			},
			setOrderWithoutHistory(state, { payload }) {
				state.data.order = payload;
			},
			updateAfterTemplateImport(state, { payload }) {
				state.initialData.frontend.items = {
					...state.initialData.frontend.items,
					...payload.addedItems
				};
				state.initialData.frontend.order = [...state.initialData.frontend.order, ...payload.addedIdsOrder];
				state.initialData.preview.items = {
					...state.initialData.preview.items,
					...payload.addedItems
				};
				state.initialData.preview.order = [...state.initialData.preview.order, ...payload.addedIdsOrder];
				state.data.items = {
					...state.data.items,
					...payload.addedItems
				};
				state.data.order = [...state.data.order, ...payload.addedIdsOrder];
				state.classLabels = {
					...state.classLabels,
					...payload.addedClassLabels
				};
			}
		}
	});
	var mergeProps = (current, updates) => {
		const props = Array.isArray(current) ? {} : current;
		Object.entries(updates).forEach(([key, value]) => {
			if (value === null || value === void 0) delete props[key];
			else props[key] = value;
		});
		return props;
	};
	var getNonEmptyVariants = (style) => {
		return style.variants.filter(({ props, custom_css: customCss }) => Object.keys(props).length || customCss?.raw);
	};
	var placeholderDefinition = (id, label) => ({
		id,
		type: "class",
		label,
		variants: []
	});
	var selectData = (state) => state[SLICE_NAME].data;
	var selectClassLabels = (state) => state[SLICE_NAME].classLabels;
	var selectFrontendInitialData = (state) => state[SLICE_NAME].initialData.frontend;
	var selectPreviewInitialData = (state) => state[SLICE_NAME].initialData.preview;
	var selectOrder = (0, _elementor_store.__createSelector)(selectData, ({ order }) => order);
	var selectGlobalClasses = (0, _elementor_store.__createSelector)(selectData, ({ items }) => items);
	var selectIsDirty = (state) => state[SLICE_NAME].isDirty;
	var selectOrderedClasses = (0, _elementor_store.__createSelector)(selectData, selectClassLabels, ({ items, order }, classLabels) => order.map((id) => {
		const loaded = items[id];
		if (loaded) return loaded;
		const label = classLabels[id];
		return label !== void 0 ? placeholderDefinition(id, label) : null;
	}).filter((s) => s !== null));
	var selectClass = (state, id) => state[SLICE_NAME].data.items[id] ?? null;
	var selectEmptyCssClass = (0, _elementor_store.__createSelector)(selectData, ({ items }) => Object.values(items).filter((cssClass) => (cssClass.variants?.length ?? 0) === 0));
	var selectIsClassFetched = (state, id) => !!state[SLICE_NAME].initialData.preview.items[id] || !!state[SLICE_NAME].initialData.frontend.items[id] || false;

//#endregion
//#region packages/packages/core/editor-global-classes/src/hooks/use-classes-order.ts
	var useClassesOrder = () => {
		return (0, _elementor_store.__useSelector)(selectOrder);
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/hooks/use-dirty-state.ts
	var useDirtyState = () => {
		return (0, _elementor_store.__useSelector)(selectIsDirty);
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/search-and-filter/context.tsx
	var SearchAndFilterContext = (0, react.createContext)(void 0);
	var INIT_CHECKED_FILTERS = {
		empty: false,
		onThisPage: false,
		unused: false
	};
	var SearchAndFilterProvider = ({ children }) => {
		const [filters, setFilters] = (0, react.useState)(INIT_CHECKED_FILTERS);
		const getInitialSearchValue = () => {
			const storedValue = localStorage.getItem("elementor-global-classes-search");
			if (storedValue) {
				localStorage.removeItem("elementor-global-classes-search");
				return storedValue;
			}
			return "";
		};
		const { debouncedValue, inputValue, handleChange } = (0, _elementor_utils.useDebounceState)({
			delay: 300,
			initialValue: getInitialSearchValue()
		});
		const onClearSearch = () => {
			handleChange("");
		};
		const onClearFilter = () => {
			setFilters(INIT_CHECKED_FILTERS);
		};
		return /* @__PURE__ */ react.createElement(SearchAndFilterContext.Provider, { value: {
			search: {
				debouncedValue,
				inputValue,
				handleChange,
				onClearSearch
			},
			filters: {
				filters,
				setFilters,
				onClearFilter
			}
		} }, children);
	};
	var useSearchAndFilters = () => {
		const context = (0, react.useContext)(SearchAndFilterContext);
		if (!context) throw new Error("useSearchContext must be used within a SearchContextProvider");
		return context;
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/api.ts
	var RESOURCE_URL = "/global-classes";
	var BASE_URL = "elementor/v1";
	var RESOURCE_USAGE_URL = `${RESOURCE_URL}/usage`;
	var RESOURCE_POST_URL = `${RESOURCE_URL}/post`;
	var RESOURCE_STYLES_URL = `${RESOURCE_URL}/styles`;
	function saveGlobalClasses$1(context, payload) {
		return (0, _elementor_http_client.httpService)().put(`${BASE_URL}${RESOURCE_URL}`, payload, { params: { context } });
	}
	__name(saveGlobalClasses$1, "saveGlobalClasses");
	var apiClient = {
		usage: () => (0, _elementor_http_client.httpService)().get(`${BASE_URL}${RESOURCE_USAGE_URL}`),
		all: (context = "preview") => (0, _elementor_http_client.httpService)().get(`${BASE_URL}${RESOURCE_URL}`, { params: { context } }),
		getStylesForPost: (postId, context = "preview") => (0, _elementor_http_client.httpService)().get(`${BASE_URL}${RESOURCE_POST_URL}`, { params: {
			context,
			post_id: postId
		} }),
		getStylesByIds: (ids, context = "preview") => (0, _elementor_http_client.httpService)().get(`${BASE_URL}${RESOURCE_STYLES_URL}`, { params: {
			context,
			ids: ids.join(",")
		} }),
		publish: (payload) => saveGlobalClasses$1("frontend", payload),
		saveDraft: (payload) => saveGlobalClasses$1("preview", payload)
	};
	var API_ERROR_CODES = { DUPLICATED_LABEL: "DUPLICATED_LABEL" };

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/css-class-usage/utils.ts
	var transformData = (data) => Object.entries(data).reduce((acc, [key, value]) => {
		acc[key] = {
			content: value || [],
			total: value.reduce((total, val) => total + (val?.total || 0), 0)
		};
		return acc;
	}, {});

//#endregion
//#region packages/packages/core/editor-global-classes/service/css-class-usage-service.ts
	var fetchCssClassUsage = async () => {
		return transformData((await apiClient.usage())?.data?.data || {});
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/css-class-usage/types.ts
	var QUERY_KEY = "css-classes-usage";

//#endregion
//#region packages/packages/core/editor-global-classes/src/hooks/use-css-class-usage.ts
	var useCssClassUsage = () => {
		return (0, _elementor_query.useQuery)({
			queryKey: [QUERY_KEY],
			queryFn: fetchCssClassUsage,
			refetchOnMount: false,
			refetchOnWindowFocus: true
		});
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/hooks/use-empty-css-class.ts
	var useEmptyCssClass = () => {
		return (0, _elementor_store.__useSelector)(selectEmptyCssClass);
	};
	var useAllCssClassesIDs = () => {
		const cssClasses = (0, _elementor_store.__useSelector)(selectGlobalClasses);
		return Object.keys(cssClasses);
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/hooks/use-filtered-css-class-usage.tsx
	var findCssClassKeysByPageID = (data, pageId) => {
		const result = [];
		for (const key in data) data[key].content.forEach((content) => {
			if (+content.pageId === pageId) result.push(key);
		});
		return result;
	};
	var getUnusedClasses = (usedCssClass, potentialUnused) => {
		const set = new Set(usedCssClass);
		return potentialUnused.filter((cssClass) => !set.has(cssClass));
	};
	var EMPTY_FILTERED_CSS_CLASS_RESPONSE = {
		empty: [],
		onThisPage: [],
		unused: []
	};
	var useFilteredCssClassUsage = () => {
		const document = (0, _elementor_editor_documents.__useActiveDocument)();
		const emptyCssClasses = useEmptyCssClass();
		const { data, isLoading } = useCssClassUsage();
		const listOfCssClasses = useAllCssClassesIDs();
		const emptyCssClassesIDs = (0, react.useMemo)(() => emptyCssClasses.map(({ id }) => id), [emptyCssClasses]);
		const onThisPage = (0, react.useMemo)(() => {
			if (!data || !document) return [];
			return findCssClassKeysByPageID(data, document.id);
		}, [data, document]);
		const unused = (0, react.useMemo)(() => {
			if (!data) return [];
			return getUnusedClasses(Object.keys(data), listOfCssClasses);
		}, [data, listOfCssClasses]);
		if (isLoading || !data || !document) return EMPTY_FILTERED_CSS_CLASS_RESPONSE;
		return {
			onThisPage,
			unused,
			empty: emptyCssClassesIDs
		};
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/hooks/use-filters.ts
	var useFilters = () => {
		const { filters: { filters } } = useSearchAndFilters();
		const allFilters = useFilteredCssClassUsage();
		return (0, react.useMemo)(() => {
			const activeEntries = Object.entries(filters).filter(([, isActive]) => isActive);
			if (activeEntries.length === 0) return null;
			return activeEntries.reduce((acc, [key], index) => {
				const current = allFilters[key] || [];
				if (index === 0) return current;
				return acc.filter((val) => current.includes(val));
			}, []);
		}, [filters, allFilters]);
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/utils/create-labels-for-classes.ts
	function createLabelsForClasses(entries) {
		return Object.fromEntries(entries.map((e) => [e.id, e.label]));
	}

//#endregion
//#region packages/packages/core/editor-global-classes/src/load-document-classes.ts
	function styleDefinitionsMapWithoutNull(map) {
		return Object.fromEntries(Object.entries(map).filter((entry) => entry[1] !== null));
	}
	function resetGlobalClassesState(globalOrder, classLabels) {
		(0, _elementor_store.__dispatch)(slice.actions.load({
			preview: {
				items: {},
				order: globalOrder
			},
			frontend: {
				items: {},
				order: globalOrder
			},
			classLabels
		}));
	}
	async function loadCurrentDocumentClasses() {
		const [previewIndexRes, frontendIndexRes] = await Promise.all([apiClient.all("preview"), apiClient.all("frontend")]);
		const previewIndex = previewIndexRes.data.data;
		const frontendIndex = frontendIndexRes.data.data;
		const classLabels = createLabelsForClasses(previewIndex);
		const previewOrder = previewIndex.map((e) => e.id);
		const frontendOrder = frontendIndex.map((e) => e.id);
		resetGlobalClassesState(previewOrder, classLabels);
		const postId = (0, _elementor_editor_documents.getCurrentDocument)()?.id;
		if (!postId) return;
		const [previewPostRes, frontendPostRes] = await Promise.all([apiClient.getStylesForPost(postId, "preview"), apiClient.getStylesForPost(postId, "frontend")]);
		const previewItems = styleDefinitionsMapWithoutNull(previewPostRes.data.data);
		const frontendItems = styleDefinitionsMapWithoutNull(frontendPostRes.data.data);
		(0, _elementor_store.__dispatch)(slice.actions.load({
			preview: {
				items: previewItems,
				order: previewOrder
			},
			frontend: {
				items: frontendItems,
				order: frontendOrder
			},
			classLabels
		}));
	}
	async function addDocumentClasses(documentId) {
		const [previewPostRes, frontendPostRes] = await Promise.all([apiClient.getStylesForPost(documentId, "preview"), apiClient.getStylesForPost(documentId, "frontend")]);
		const previewItems = styleDefinitionsMapWithoutNull(previewPostRes.data.data);
		const frontendItems = styleDefinitionsMapWithoutNull(frontendPostRes.data.data);
		(0, _elementor_store.__dispatch)(slice.actions.mergeExistingClasses({
			preview: previewItems,
			frontend: frontendItems
		}));
	}

//#endregion
//#region packages/packages/core/editor-global-classes/src/load-existing-classes.ts
	var pendingLoad = null;
	var pendingIds = /* @__PURE__ */ new Set();
	async function loadExistingClasses(classIds) {
		const existingClasses = selectGlobalClasses((0, _elementor_store.__getState)());
		const missingIds = classIds.filter((id) => !(id in existingClasses));
		if (missingIds.length === 0) return;
		missingIds.forEach((id) => pendingIds.add(id));
		if (pendingLoad) {
			await pendingLoad;
			return loadExistingClasses(classIds);
		}
		pendingLoad = fetchAndMergeClasses();
		try {
			await pendingLoad;
		} finally {
			pendingLoad = null;
		}
	}
	async function fetchAndMergeClasses() {
		const idsToFetch = Array.from(pendingIds);
		pendingIds.clear();
		if (idsToFetch.length === 0) return;
		const [previewResponse, frontendResponse] = await Promise.all([apiClient.getStylesByIds(idsToFetch, "preview"), apiClient.getStylesByIds(idsToFetch, "frontend")]);
		const previewItems = styleDefinitionsMapWithoutNull(previewResponse.data.data);
		const frontendItems = styleDefinitionsMapWithoutNull(frontendResponse.data.data);
		(0, _elementor_store.__dispatch)(slice.actions.mergeExistingClasses({
			preview: previewItems,
			frontend: frontendItems
		}));
	}

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/class-manager/duplicate-label-dialog.tsx
	var DUP_PREFIX = "DUP_";
	var DuplicateLabelDialog = ({ modifiedLabels, onApprove }) => {
		const handleButtonClick = () => {
			localStorage.setItem("elementor-global-classes-search", DUP_PREFIX);
			onApprove?.();
			(0, _elementor_editor_ui.closeDialog)();
		};
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.DialogHeader, { logo: false }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			display: "flex",
			alignItems: "center",
			gap: 1
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Icon, { color: "secondary" }, /* @__PURE__ */ react.createElement(_elementor_icons.InfoCircleFilledIcon, { fontSize: "medium" })), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "subtitle1" }, (0, _wordpress_i18n.__)("We've published your page and updated class names.", "elementor")))), /* @__PURE__ */ react.createElement(_elementor_ui.DialogContent, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			spacing: 2,
			direction: "column"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "body2" }, (0, _wordpress_i18n.__)("Some new classes used the same names as existing ones. To prevent conflicts, we added the prefix", "elementor"), /* @__PURE__ */ react.createElement("strong", null, " ", DUP_PREFIX)), /* @__PURE__ */ react.createElement(_elementor_ui.Box, null, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			width: "100%",
			display: "flex",
			gap: 2,
			alignItems: "flex-start"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "subtitle2",
			sx: {
				fontWeight: "bold",
				flex: 1,
				flexShrink: 1,
				flexGrow: 1,
				minWidth: 0
			}
		}, (0, _wordpress_i18n.__)("Before", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "subtitle2",
			sx: {
				minWidth: "200px",
				fontWeight: "bold",
				flexShrink: 0,
				flexGrow: 0,
				width: "200px",
				maxWidth: "200px"
			}
		}, (0, _wordpress_i18n.__)("After", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, { sx: {
			mt: .5,
			mb: .5
		} }), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "column",
			gap: .5,
			sx: { pb: 2 }
		}, Object.values(modifiedLabels).map(({ original, modified }, index) => /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			key: index,
			sx: {
				width: "100%",
				display: "flex",
				gap: 2,
				alignItems: "flex-start"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			flex: 1,
			flexShrink: 1,
			flexGrow: 1,
			minWidth: 0
		} }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.EllipsisWithTooltip, { title: original }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			sx: { color: "text.secondary" }
		}, original))), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			minWidth: "200px",
			flexShrink: 0,
			flexGrow: 0,
			width: "200px",
			maxWidth: "200px"
		} }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.EllipsisWithTooltip, { title: modified }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			sx: { color: "text.primary" }
		}, modified)))))), /* @__PURE__ */ react.createElement(_elementor_ui.Box, null, /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
			severity: "info",
			size: "small",
			color: "secondary"
		}, /* @__PURE__ */ react.createElement("strong", null, (0, _wordpress_i18n.__)("Your designs and classes are safe.", "elementor")), (0, _wordpress_i18n.__)("Only the prefixes were added. Find them in Class Manager by searching", "elementor"), /* @__PURE__ */ react.createElement("strong", null, DUP_PREFIX)))))), /* @__PURE__ */ react.createElement(_elementor_ui.DialogActions, null, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			color: "secondary",
			variant: "text",
			onClick: handleButtonClick
		}, (0, _wordpress_i18n.__)("Go to Class Manager", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			color: "secondary",
			variant: "contained",
			onClick: _elementor_editor_ui.closeDialog
		}, (0, _wordpress_i18n.__)("Done", "elementor"))));
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/utils/tracking.ts
	var trackGlobalClasses = async (payload) => {
		const { runAction } = payload;
		const data = await getSanitizedData(payload);
		if (data) {
			track(data);
			if (data.event === "classCreated" && "classId" in data) fireClassApplied(data.classId);
		}
		runAction?.();
	};
	var fireClassApplied = async (classId) => {
		const appliedInfo = await getAppliedInfo(classId);
		track({
			event: "classApplied",
			classId,
			...appliedInfo,
			totalInstancesAfterApply: 1
		});
	};
	var getSanitizedData = async (payload) => {
		switch (payload.event) {
			case "classApplied":
				if ("classId" in payload && payload.classId) {
					const appliedInfo = await getAppliedInfo(payload.classId);
					return {
						...payload,
						...appliedInfo
					};
				}
				break;
			case "classRemoved":
				if ("classId" in payload && payload.classId) {
					const deleteInfo = getRemovedInfo(payload.classId);
					return {
						...payload,
						...deleteInfo
					};
				}
				break;
			case "classDeleted":
				if ("classId" in payload && payload.classId) {
					const deleteInfo = await trackDeleteClass(payload.classId);
					return {
						...payload,
						...deleteInfo
					};
				}
				break;
			case "classCreated":
				if ("source" in payload && payload.source !== "created") {
					if ("classId" in payload && payload.classId) return {
						...payload,
						classTitle: getCssClass(payload.classId).label
					};
				}
				return payload;
			case "classStateClicked":
				if ("classId" in payload && payload.classId) return {
					...payload,
					classTitle: getCssClass(payload.classId).label
				};
				break;
			case "classSyncToV3PopupShown": return {
				...payload,
				interaction_type: "popup_shown",
				target_type: "popup",
				target_name: "sync_to_v3_popup",
				interaction_result: "popup_viewed",
				target_location: "widget_panel",
				location_l1: "class_manager"
			};
			case "classSyncToV3": {
				const classLabel = getCssClass(payload.classId).label;
				const isSync = payload.action === "sync";
				return {
					...payload,
					interaction_type: "click",
					target_type: classLabel,
					target_name: isSync ? "sync_to_v3" : "unsync_to_v3",
					interaction_result: isSync ? "class_is_synced_to_V3" : "class_is_unsynced_from_V3",
					target_location: "widget_panel",
					location_l1: "class_manager",
					interaction_description: isSync ? `user_synced_${classLabel}_to_v3` : `user_unsync_${classLabel}_from_v3`
				};
			}
			case "classSyncToV3PopupClick": {
				const isSyncAction = payload.action === "sync";
				return {
					...payload,
					interaction_type: "click",
					target_type: "button",
					target_name: isSyncAction ? "sync_to_v3" : "cancel",
					interaction_result: isSyncAction ? "class_is_synced" : "cancel",
					target_location: "sync_to_v3_popup"
				};
			}
			default: return payload;
		}
	};
	var track = (data) => {
		const { dispatchEvent, config } = (0, _elementor_events.getMixpanel)();
		if (!config?.names?.global_classes?.[data.event]) {
			console.error("Global class tracking event not found", { event: data.event });
			return;
		}
		const name = config.names.global_classes[data.event];
		const { event, ...eventData } = data;
		try {
			dispatchEvent?.(name, {
				event,
				...eventData
			});
		} catch (error) {
			throw new GlobalClassTrackingError({ cause: error });
		}
	};
	var extractCssClassData = (classId) => {
		return { classTitle: getCssClass(classId).label };
	};
	var getCssClass = (classId) => {
		const state = (0, _elementor_store.__getState)();
		const cssClass = selectClass(state, classId);
		if (cssClass) return cssClass;
		const label = selectClassLabels(state)[classId];
		if (label !== void 0) return placeholderDefinition(classId, label);
		throw new Error(`CSS class with ID ${classId} not found`);
	};
	var trackDeleteClass = async (classId) => {
		const classTitle = getCssClass(classId).label;
		return {
			totalInstances: await getTotalInstancesByCssClassID(classId),
			classTitle
		};
	};
	var getTotalInstancesByCssClassID = async (classId) => {
		return (await fetchCssClassUsage())[classId]?.total ?? 1;
	};
	var getAppliedInfo = async (classId) => {
		const { classTitle } = extractCssClassData(classId);
		return {
			classTitle,
			totalInstancesAfterApply: await getTotalInstancesByCssClassID(classId) + 1
		};
	};
	var getRemovedInfo = (classId) => {
		const { classTitle } = extractCssClassData(classId);
		return { classTitle };
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/save-global-classes.tsx
	async function saveGlobalClasses({ context, onApprove }) {
		const state = selectData((0, _elementor_store.__getState)());
		const apiAction = context === "preview" ? apiClient.saveDraft : apiClient.publish;
		const changes = calculateChanges(state, (context === "preview" ? selectPreviewInitialData : selectFrontendInitialData)((0, _elementor_store.__getState)()));
		const touchedIds = [...changes.added, ...changes.modified];
		const response = await apiAction({
			items: Object.fromEntries(touchedIds.map((id) => [id, state.items[id]]).filter(([, v]) => v)),
			order: state.order,
			changes
		});
		(0, _elementor_store.__dispatch)(slice.actions.reset({ context }));
		window.dispatchEvent(new CustomEvent("classes:updated", { detail: { context } }));
		if (response?.data?.data?.code === API_ERROR_CODES.DUPLICATED_LABEL) {
			(0, _elementor_store.__dispatch)(slice.actions.updateMultiple(response.data.data.modifiedLabels));
			trackGlobalClasses({
				event: "classPublishConflict",
				numOfConflicts: Object.keys(response.data.data.modifiedLabels).length
			});
			(0, _elementor_editor_ui.openDialog)({ component: /* @__PURE__ */ react.createElement(DuplicateLabelDialog, {
				modifiedLabels: response.data.data.modifiedLabels || [],
				onApprove
			}) });
		}
	}
	function calculateChanges(state, initialData) {
		const stateIds = Object.keys(state.items);
		const initialDataIds = Object.keys(initialData.items);
		const { order: stateOrder } = state;
		const { order: initialDataOrder } = initialData;
		const stateOrderIdSet = new Set(stateOrder);
		const deleted = initialDataOrder.filter((id) => !stateOrderIdSet.has(id));
		const order = stateOrder.join(";") !== initialDataOrder.join(";");
		return {
			added: stateIds.filter((id) => !initialDataIds.includes(id)),
			deleted,
			modified: stateIds.filter((id) => {
				return id in initialData.items && (0, _elementor_utils.hash)(state.items[id]) !== (0, _elementor_utils.hash)(initialData.items[id]);
			}),
			order
		};
	}

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/search-and-filter/components/filter/clear-icon-button.tsx
	var ClearIconButton = ({ tooltipText, sx, trigger }) => {
		const { filters: { onClearFilter } } = useSearchAndFilters();
		const handleClearFilters = () => {
			onClearFilter(trigger);
			trackGlobalClasses({
				event: "classManagerFilterCleared",
				trigger
			});
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: tooltipText,
			placement: "top",
			disableInteractive: true
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, null, /* @__PURE__ */ react.createElement(CustomIconButton$1, {
			"aria-label": tooltipText,
			size: "tiny",
			onClick: handleClearFilters,
			sx
		}, /* @__PURE__ */ react.createElement(_elementor_icons.BrushBigIcon, { fontSize: "tiny" }))));
	};
	var CustomIconButton$1 = (0, _elementor_ui.styled)(_elementor_ui.IconButton)(({ theme }) => ({ "&.Mui-disabled": {
		pointerEvents: "auto",
		"&:hover": { color: theme.palette.action.disabled }
	} }));

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/search-and-filter/components/filter/filter-list.tsx
	var filterConfig = {
		unused: (0, _wordpress_i18n.__)("Unused", "elementor"),
		empty: (0, _wordpress_i18n.__)("Empty", "elementor"),
		onThisPage: (0, _wordpress_i18n.__)("On this page", "elementor")
	};
	var FilterList = () => {
		const { filters: { filters, setFilters } } = useSearchAndFilters();
		const filteredCssClass = useFilteredCssClassUsage();
		const handleOnClick = (value) => {
			setFilters((prev) => ({
				...prev,
				[value]: !prev[value]
			}));
			trackGlobalClasses({
				event: "classManagerFilterUsed",
				action: filters[value] ? "remove" : "apply",
				type: value,
				trigger: "menu"
			});
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.MenuList, null, /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, { onClick: () => handleOnClick("unused") }, /* @__PURE__ */ react.createElement(LabeledCheckbox, {
			label: filterConfig.unused,
			checked: filters.unused,
			suffix: /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
				size: "tiny",
				sx: { ml: "auto" },
				label: filteredCssClass.unused.length
			})
		})), /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, { onClick: () => handleOnClick("empty") }, /* @__PURE__ */ react.createElement(LabeledCheckbox, {
			label: filterConfig.empty,
			checked: filters.empty,
			suffix: /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
				size: "tiny",
				sx: { ml: "auto" },
				label: filteredCssClass.empty.length
			})
		})), /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, { onClick: () => handleOnClick("onThisPage") }, /* @__PURE__ */ react.createElement(LabeledCheckbox, {
			label: filterConfig.onThisPage,
			checked: filters.onThisPage,
			suffix: /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
				size: "tiny",
				sx: { ml: "auto" },
				label: filteredCssClass.onThisPage.length
			})
		})));
	};
	var LabeledCheckbox = ({ label, suffix, checked }) => /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
		direction: "row",
		alignItems: "center",
		gap: .5,
		flex: 1
	}, /* @__PURE__ */ react.createElement(_elementor_ui.Checkbox, {
		size: "small",
		checked,
		sx: {
			padding: 0,
			color: "text.tertiary",
			"&.Mui-checked": { color: "text.tertiary" }
		}
	}), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
		variant: "caption",
		sx: { color: "text.secondary" }
	}, label), suffix);

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/search-and-filter/components/filter/active-filters.tsx
	var ActiveFilters = () => {
		const { filters: { filters, setFilters } } = useSearchAndFilters();
		const handleRemove = (key) => {
			setFilters((prev) => ({
				...prev,
				[key]: false
			}));
			trackGlobalClasses({
				event: "classManagerFilterUsed",
				action: "remove",
				type: key,
				trigger: "header"
			});
		};
		const activeKeys = Object.keys(filters).filter((key) => filters[key]);
		const showClearIcon = activeKeys.length > 0;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			justifyContent: "space-between"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			gap: .5,
			alignItems: "center",
			flexWrap: "wrap"
		}, activeKeys.map((key) => /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			key,
			label: filterConfig[key],
			onDelete: () => handleRemove(key),
			sx: chipSx,
			size: "tiny"
		}))), showClearIcon && /* @__PURE__ */ react.createElement(ClearIconButton, {
			trigger: "header",
			tooltipText: (0, _wordpress_i18n.__)("Clear Filters", "elementor"),
			sx: { margin: "0 0 auto auto" }
		}));
	};
	var chipSx = {
		"& .MuiChip-deleteIcon": {
			display: "none",
			transition: "opacity 0.2s"
		},
		"&:hover .MuiChip-deleteIcon": { display: "block" }
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/search-and-filter/components/filter/css-class-filter.tsx
	var CssClassFilter = () => {
		const { filters: { filters } } = useSearchAndFilters();
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			disableAutoFocus: true
		});
		(0, react.useEffect)(() => {
			if (popupState.isOpen) trackGlobalClasses({ event: "classManagerFiltersOpened" });
		}, [popupState.isOpen]);
		const showCleanIcon = Object.values(filters).some((value) => value);
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: (0, _wordpress_i18n.__)("Filters", "elementor"),
			placement: "top"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.ToggleButton, {
			value: "filter",
			size: "tiny",
			selected: popupState.isOpen,
			...(0, _elementor_ui.bindToggle)(popupState)
		}, /* @__PURE__ */ react.createElement(_elementor_icons.FilterIcon, { fontSize: "tiny" }))), /* @__PURE__ */ react.createElement(_elementor_ui.Popover, {
			sx: { maxWidth: "344px" },
			anchorOrigin: {
				vertical: "top",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: -21
			},
			...(0, _elementor_ui.bindPopover)(popupState)
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverHeader, {
			actions: showCleanIcon ? [/* @__PURE__ */ react.createElement(ClearIconButton, {
				trigger: "menu",
				key: "clear-all-button",
				tooltipText: (0, _wordpress_i18n.__)("Clear all", "elementor")
			})] : [],
			onClose: popupState.close,
			title: (0, _wordpress_i18n.__)("Filters", "elementor"),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.FilterIcon, { fontSize: "tiny" })
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, { sx: { borderWidth: "1px 0 0 0" } }), /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverBody, {
			width: 344,
			height: 125
		}, /* @__PURE__ */ react.createElement(FilterList, null))));
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/search-and-filter/components/search/class-manager-search.tsx
	var ClassManagerSearch = () => {
		const { search: { inputValue, handleChange } } = useSearchAndFilters();
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			gap: .5,
			sx: { width: "100%" }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { flexGrow: 1 } }, /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			role: "search",
			fullWidth: true,
			size: "tiny",
			value: inputValue,
			onFocus: () => {
				trackGlobalClasses({ event: "classManagerSearched" });
			},
			placeholder: (0, _wordpress_i18n.__)("Search", "elementor"),
			onChange: (e) => handleChange(e.target.value),
			InputProps: { startAdornment: /* @__PURE__ */ react.createElement(_elementor_ui.InputAdornment, { position: "start" }, /* @__PURE__ */ react.createElement(_elementor_icons.SearchIcon, { fontSize: "tiny" })) }
		})));
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/class-manager/class-manager-introduction.tsx
	var MESSAGE_KEY = "global-class-manager";
	var ClassManagerIntroduction = () => {
		const [isMessageSuppressed, suppressMessage] = (0, _elementor_editor_current_user.useSuppressedMessage)(MESSAGE_KEY);
		const [shouldShowIntroduction, setShouldShowIntroduction] = (0, react.useState)(!isMessageSuppressed);
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.IntroductionModal, {
			open: shouldShowIntroduction,
			title: (0, _wordpress_i18n.__)("Class Manager", "elementor"),
			handleClose: (shouldShowAgain) => {
				if (!shouldShowAgain) suppressMessage();
				setShouldShowIntroduction(false);
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Image, {
			sx: {
				width: "100%",
				aspectRatio: "16 / 9"
			},
			src: "https://assets.elementor.com/packages/v1/images/class-manager-intro.svg",
			alt: ""
		}), /* @__PURE__ */ react.createElement(IntroductionContent, null));
	};
	var IntroductionContent = () => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { p: 3 }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "body2" }, (0, _wordpress_i18n.__)("The Class Manager lets you see all the classes you've created, plus adjust their priority, rename them, and delete unused classes to keep your CSS structured.", "elementor")), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "body2" }, (0, _wordpress_i18n.__)("Remember, when editing an item within a specific class, any changes you make will apply across all elements in that class.", "elementor")));
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/class-manager/delete-class.ts
	var isDeleted = false;
	var deleteClass = (id) => {
		trackGlobalClasses({
			event: "classDeleted",
			classId: id,
			runAction: () => {
				(0, _elementor_store.__dispatch)(slice.actions.delete(id));
				isDeleted = true;
			}
		});
	};
	var onDelete = async () => {
		isDeleted = false;
	};
	var hasDeletedItems = () => isDeleted;

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/class-manager/flipped-color-swatch-icon.tsx
	var FlippedColorSwatchIcon = ({ sx, ...props }) => /* @__PURE__ */ react.createElement(_elementor_icons.ColorSwatchIcon, {
		sx: {
			transform: "rotate(90deg)",
			...sx
		},
		...props
	});

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
//#region packages/packages/core/editor-global-classes/src/hooks/use-ordered-classes.ts
	var useOrderedClasses = () => {
		return (0, _elementor_store.__useSelector)(selectOrderedClasses);
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/hooks/use-css-class-usage-by-id.ts
	var EMPTY_CLASS_USAGE = {
		total: 0,
		content: []
	};
	var useCssClassUsageByID = (id) => {
		const { data, ...rest } = useCssClassUsage();
		const classData = data?.[id] ?? EMPTY_CLASS_USAGE;
		return {
			...rest,
			data: classData
		};
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/css-class-usage/components/css-class-usage-popover.tsx
	var iconMapper = {
		"wp-post": {
			label: (0, _wordpress_i18n.__)("Post", "elementor"),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.PostTypeIcon, { fontSize: "inherit" })
		},
		"wp-page": {
			label: (0, _wordpress_i18n.__)("Page", "elementor"),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.PagesIcon, { fontSize: "inherit" })
		},
		popup: {
			label: (0, _wordpress_i18n.__)("Popup", "elementor"),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.PopupTemplateIcon, { fontSize: "inherit" })
		},
		header: {
			label: (0, _wordpress_i18n.__)("Header", "elementor"),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.HeaderTemplateIcon, { fontSize: "inherit" })
		},
		footer: {
			label: (0, _wordpress_i18n.__)("Footer", "elementor"),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.FooterTemplateIcon, { fontSize: "inherit" })
		}
	};
	var CssClassUsagePopover = ({ cssClassID, onClose }) => {
		const { data: classUsage } = useCssClassUsageByID(cssClassID);
		const onNavigate = (0, _elementor_editor_documents.__useOpenDocumentInNewTab)();
		const cssClassUsageRecords = classUsage?.content.map(({ title, elements, pageId, type }) => ({
			type: "item",
			value: pageId,
			label: title,
			secondaryText: elements.length.toString(),
			docType: type
		})) ?? [];
		const handleSelect = (value) => {
			onNavigate(+value);
			trackGlobalClasses({
				event: "classUsageLocate",
				classId: cssClassID
			});
		};
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverHeader, {
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.CurrentLocationIcon, { fontSize: "tiny" }),
			title: /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
				flexDirection: "row",
				gap: 1,
				alignItems: "center"
			}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { "aria-label": "header-title" }, (0, _wordpress_i18n.__)("Locator", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Box, null, /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
				sx: { lineHeight: 1 },
				size: "tiny",
				label: classUsage.total
			}))),
			onClose
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverBody, { width: 300 }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverMenuList, {
			onSelect: handleSelect,
			items: cssClassUsageRecords,
			onClose: () => {},
			menuListTemplate: StyledCssClassUsageItem,
			menuItemContentTemplate: (cssClassUsageRecord) => /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
				flexDirection: "row",
				flex: 1,
				alignItems: "center"
			}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
				display: "flex",
				sx: { pr: 1 }
			}, /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
				disableInteractive: true,
				title: iconMapper?.[cssClassUsageRecord.docType]?.label ?? cssClassUsageRecord.docType,
				placement: "top"
			}, /* @__PURE__ */ react.createElement(_elementor_ui.Icon, { fontSize: "small" }, iconMapper?.[cssClassUsageRecord.docType]?.icon || /* @__PURE__ */ react.createElement(_elementor_icons.PagesIcon, { fontSize: "inherit" })))), /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
				sx: {
					pr: .5,
					maxWidth: "173px"
				},
				display: "flex"
			}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.EllipsisWithTooltip, {
				title: cssClassUsageRecord.label,
				as: _elementor_ui.Typography,
				variant: "caption",
				maxWidth: "173px",
				sx: { lineHeight: 1 }
			})), /* @__PURE__ */ react.createElement(_elementor_icons.ExternalLinkIcon, {
				className: "hover-only-icon",
				fontSize: "tiny"
			}), /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
				sx: { ml: "auto" },
				size: "tiny",
				label: cssClassUsageRecord.secondaryText
			}))
		})));
	};
	var StyledCssClassUsageItem = (0, _elementor_ui.styled)(_elementor_ui.MenuList)(({ theme }) => ({
		"& > li": {
			display: "flex",
			cursor: "pointer",
			height: 32,
			width: "100%"
		},
		"& > [role=\"option\"]": {
			...theme.typography.caption,
			lineHeight: "inherit",
			padding: theme.spacing(.5, 1, .5, 2),
			textOverflow: "ellipsis",
			position: "absolute",
			top: 0,
			left: 0,
			opacity: 1,
			".hover-only-icon": {
				color: theme.palette.text.disabled,
				opacity: 0
			},
			"&:hover": {
				borderRadius: theme.spacing(.5),
				backgroundColor: theme.palette.action.hover,
				".hover-only-icon": {
					color: theme.palette.text.disabled,
					opacity: 1
				}
			}
		},
		width: "100%",
		position: "relative"
	}));

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/css-class-usage/components/css-class-usage-trigger.tsx
	var CssClassUsageTrigger = ({ id, onClick }) => {
		const { data: { total }, isLoading } = useCssClassUsageByID(id);
		const cssClassUsagePopover = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			popupId: "css-class-usage-popover"
		});
		if (isLoading) return null;
		const WrapperComponent = total !== 0 ? TooltipWrapper : InfoAlertMessage;
		const handleMouseEnter = () => {
			trackGlobalClasses({
				event: "classUsageHovered",
				classId: id,
				usage: total
			});
		};
		const handleClick = (e) => {
			if (total !== 0) {
				(0, _elementor_ui.bindTrigger)(cssClassUsagePopover).onClick(e);
				onClick(id);
				trackGlobalClasses({
					event: "classUsageClicked",
					classId: id
				});
			}
		};
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			position: "relative",
			onMouseEnter: handleMouseEnter
		}, /* @__PURE__ */ react.createElement(WrapperComponent, { total }, /* @__PURE__ */ react.createElement(CustomIconButton, {
			disabled: total === 0,
			size: "tiny",
			...(0, _elementor_ui.bindTrigger)(cssClassUsagePopover),
			onClick: handleClick
		}, /* @__PURE__ */ react.createElement(_elementor_icons.CurrentLocationIcon, { fontSize: "tiny" })))), /* @__PURE__ */ react.createElement(_elementor_ui.Box, null, /* @__PURE__ */ react.createElement(_elementor_ui.Popover, {
			anchorOrigin: {
				vertical: "center",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: 15,
				horizontal: -50
			},
			...(0, _elementor_ui.bindPopover)(cssClassUsagePopover),
			onClose: () => {
				(0, _elementor_ui.bindPopover)(cssClassUsagePopover).onClose();
				onClick("");
			}
		}, /* @__PURE__ */ react.createElement(CssClassUsagePopover, {
			onClose: cssClassUsagePopover.close,
			"aria-label": "css-class-usage-popover",
			cssClassID: id
		}))));
	};
	var CustomIconButton = (0, _elementor_ui.styled)(_elementor_ui.IconButton)(({ theme }) => ({
		"&.Mui-disabled": {
			pointerEvents: "auto",
			"&:hover": { color: theme.palette.action.disabled }
		},
		height: "22px",
		width: "22px"
	}));
	var TooltipWrapper = ({ children, total }) => /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
		disableInteractive: true,
		placement: "top",
		title: `${(0, _wordpress_i18n.__)("Show {{number}} {{locations}}", "elementor").replace("{{number}}", total.toString()).replace("{{locations}}", total === 1 ? (0, _wordpress_i18n.__)("location", "elementor") : (0, _wordpress_i18n.__)("locations", "elementor"))}`
	}, /* @__PURE__ */ react.createElement("span", null, children));
	var InfoAlertMessage = ({ children }) => /* @__PURE__ */ react.createElement(_elementor_ui.Infotip, {
		disableInteractive: true,
		placement: "top",
		color: "secondary",
		content: /* @__PURE__ */ react.createElement(_elementor_editor_ui.InfoAlert, { sx: { mt: 1 } }, (0, _wordpress_i18n.__)("This class isn’t being used yet.", "elementor"))
	}, /* @__PURE__ */ react.createElement("span", null, children));

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/class-manager/delete-confirmation-dialog.tsx
	var context = (0, react.createContext)(null);
	var DeleteConfirmationProvider = ({ children }) => {
		const [dialogProps, setDialogProps] = (0, react.useState)(null);
		const openDialog = (props) => {
			setDialogProps(props);
		};
		const closeDialog = () => {
			setDialogProps(null);
		};
		return /* @__PURE__ */ react.createElement(context.Provider, { value: {
			openDialog,
			closeDialog,
			dialogProps
		} }, children, !!dialogProps && /* @__PURE__ */ react.createElement(DeleteClassDialog, { ...dialogProps }));
	};
	var DeleteClassDialog = ({ label, id }) => {
		const { closeDialog } = useDeleteConfirmation();
		const { data: { total, content } } = useCssClassUsageByID(id);
		const handleConfirm = () => {
			closeDialog();
			deleteClass(id);
		};
		const text = total && content.length ? (0, _wordpress_i18n.__)("Will permanently remove it from your project and may affect the design across all elements using it. Used %1 times across %2 pages. This action cannot be undone.", "elementor").replace("%1", total.toString()).replace("%2", content.length.toString()) : (0, _wordpress_i18n.__)("Will permanently remove it from your project and may affect the design across all elements using it. This action cannot be undone.", "elementor");
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog, {
			open: true,
			onClose: closeDialog
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Title, null, (0, _wordpress_i18n.__)("Delete this class?", "elementor")), /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Content, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.ContentText, null, (0, _wordpress_i18n.__)("Deleting", "elementor"), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "subtitle2",
			component: "span"
		}, "\xA0", label, "\xA0"), text)), /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Actions, {
			onClose: closeDialog,
			onConfirm: handleConfirm
		}));
	};
	var useDeleteConfirmation = () => {
		const contextValue = (0, react.useContext)(context);
		if (!contextValue) throw new Error("useDeleteConfirmation must be used within a DeleteConfirmationProvider");
		return contextValue;
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/class-manager/sortable.tsx
	var SortableProvider = (props) => /* @__PURE__ */ react.createElement(_elementor_ui.UnstableSortableProvider, {
		restrictAxis: true,
		variant: "static",
		dragPlaceholderStyle: { visibility: "hidden" },
		...props
	});
	var SortableTrigger = (props) => /* @__PURE__ */ react.createElement(StyledSortableTrigger, {
		...props,
		role: "button",
		className: "class-item-sortable-trigger",
		"aria-label": "sort"
	}, /* @__PURE__ */ react.createElement(_elementor_icons.GripVerticalIcon, { fontSize: "tiny" }));
	var SortableItem = ({ children, id, style, ...props }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.UnstableSortableItem, {
			...props,
			id,
			render: ({ itemProps, isDragged, triggerProps, itemStyle, triggerStyle, dropIndicationStyle, showDropIndication, isDragOverlay, isDragPlaceholder }) => {
				return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
					...itemProps,
					style: {
						...itemStyle,
						...!isDragOverlay ? style : null
					},
					component: "li",
					role: "listitem",
					sx: { backgroundColor: isDragOverlay ? "background.paper" : void 0 }
				}, children({
					itemProps,
					isDragged,
					triggerProps,
					itemStyle,
					triggerStyle,
					isDragPlaceholder
				}), showDropIndication && /* @__PURE__ */ react.createElement(SortableItemIndicator, { style: dropIndicationStyle }));
			}
		});
	};
	var StyledSortableTrigger = (0, _elementor_ui.styled)("div")(({ theme }) => ({
		position: "absolute",
		left: 0,
		top: "50%",
		transform: `translate( -${theme.spacing(1.5)}, -50% )`,
		color: theme.palette.action.active
	}));
	var SortableItemIndicator = (0, _elementor_ui.styled)(_elementor_ui.Box)`
	width: 100%;
	height: 1px;
	background-color: ${({ theme }) => theme.palette.text.primary};
`;

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/class-manager/class-item.tsx
	var ClassItem = ({ id, label, renameClass, selected, disabled, sortableTriggerProps, showSortIndicator, syncToV3, onToggleSync }) => {
		const itemRef = (0, react.useRef)(null);
		const { ref: editableRef, openEditMode, isEditing, error, getProps: getEditableProps } = (0, _elementor_editor_ui.useEditable)({
			value: label,
			onSubmit: renameClass,
			validation: validateLabel
		});
		const [selectedCssUsage, setSelectedCssUsage] = (0, react.useState)("");
		const { openDialog } = useDeleteConfirmation();
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			disableAutoFocus: true
		});
		const isSelected = (selectedCssUsage === id || selected || popupState.isOpen) && !disabled;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { p: 0 }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.WarningInfotip, {
			open: Boolean(error),
			text: error ?? "",
			placement: "bottom",
			width: itemRef.current?.getBoundingClientRect().width,
			offset: [0, -15]
		}, /* @__PURE__ */ react.createElement(StyledListItemButton, {
			ref: itemRef,
			dense: true,
			disableGutters: true,
			showSortIndicator,
			showActions: isSelected || isEditing,
			shape: "rounded",
			onDoubleClick: openEditMode,
			selected: isSelected,
			disabled,
			focusVisibleClassName: "visible-class-item"
		}, /* @__PURE__ */ react.createElement(SortableTrigger, { ...sortableTriggerProps }), /* @__PURE__ */ react.createElement(Indicator, {
			isActive: isEditing,
			isError: !!error
		}, isEditing ? /* @__PURE__ */ react.createElement(_elementor_editor_ui.EditableField, {
			ref: editableRef,
			as: _elementor_ui.Typography,
			variant: "caption",
			...getEditableProps()
		}) : /* @__PURE__ */ react.createElement(_elementor_editor_ui.EllipsisWithTooltip, {
			title: label,
			as: _elementor_ui.Typography,
			variant: "caption"
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { className: "class-item-locator" }, /* @__PURE__ */ react.createElement(CssClassUsageTrigger, {
			id,
			onClick: setSelectedCssUsage
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			placement: "top",
			className: "class-item-more-actions",
			title: (0, _wordpress_i18n.__)("More actions", "elementor")
		}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: "tiny",
			...(0, _elementor_ui.bindTrigger)(popupState),
			"aria-label": "More actions"
		}, /* @__PURE__ */ react.createElement(_elementor_icons.DotsVerticalIcon, { fontSize: "tiny" })))))), /* @__PURE__ */ react.createElement(_elementor_ui.Menu, {
			...(0, _elementor_ui.bindMenu)(popupState),
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "right"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
			sx: { minWidth: "160px" },
			onClick: () => {
				popupState.close();
				openEditMode();
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			sx: { color: "text.primary" }
		}, (0, _wordpress_i18n.__)("Rename", "elementor"))), onToggleSync && /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, { onClick: () => {
			popupState.close();
			onToggleSync(id, !syncToV3);
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			gap: 1
		}, syncToV3 ? /* @__PURE__ */ react.createElement(_elementor_icons.RefreshOffIcon, { fontSize: "tiny" }) : /* @__PURE__ */ react.createElement(_elementor_icons.RefreshIcon, { fontSize: "tiny" }), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			sx: { color: "text.primary" }
		}, syncToV3 ? (0, _wordpress_i18n.__)("Stop syncing to Global Fonts", "elementor") : (0, _wordpress_i18n.__)("Sync to Global Fonts", "elementor")))), /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, { onClick: () => {
			popupState.close();
			openDialog({
				id,
				label
			});
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			sx: { color: "error.light" }
		}, (0, _wordpress_i18n.__)("Delete", "elementor")))));
	};
	var StyledListItemButton = (0, _elementor_ui.styled)(_elementor_ui.ListItemButton, { shouldForwardProp: (prop) => !["showActions", "showSortIndicator"].includes(prop) })(({ showActions, showSortIndicator }) => `
    min-height: 36px;

    &.visible-class-item {
      box-shadow: none !important;
    }

    .class-item-locator {
      visibility: hidden;
    }

    .class-item-sortable-trigger {
      visibility: ${showSortIndicator && showActions ? "visible" : "hidden"};
    }

    &:hover:not(:disabled) {
      .class-item-locator {
        visibility: visible;
      }

      .class-item-sortable-trigger {
        visibility: ${showSortIndicator ? "visible" : "hidden"};
      }
    }
  `);
	var Indicator = (0, _elementor_ui.styled)(_elementor_ui.Box, { shouldForwardProp: (prop) => !["isActive", "isError"].includes(prop) })(({ theme, isActive, isError }) => ({
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
	var validateLabel = (newLabel) => {
		const result = (0, _elementor_editor_styles_repository.validateStyleLabel)(newLabel, "rename");
		if (result.isValid) return null;
		return result.errorMessage;
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/class-manager/not-found.tsx
	var getNotFoundType = (searchValue, filters, filteredClasses) => {
		const searchNotFound = filteredClasses.length <= 0 && searchValue.length > 1;
		const filterNotFound = filters && filters.length === 0;
		if (searchNotFound && filterNotFound) return "filterAndSearch";
		if (searchNotFound) return "search";
		if (filterNotFound) return "filter";
	};
	var notFound = {
		filterAndSearch: {
			mainText: (0, _wordpress_i18n.__)("Sorry, nothing matched.", "elementor"),
			sceneryText: (0, _wordpress_i18n.__)("Try something else.", "elementor"),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.PhotoIcon, {
				color: "inherit",
				fontSize: "large"
			})
		},
		search: {
			mainText: (0, _wordpress_i18n.__)("Sorry, nothing matched", "elementor"),
			sceneryText: (0, _wordpress_i18n.__)("Clear your input and try something else.", "elementor"),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.PhotoIcon, {
				color: "inherit",
				fontSize: "large"
			})
		},
		filter: {
			mainText: (0, _wordpress_i18n.__)("Sorry, nothing matched that search.", "elementor"),
			sceneryText: (0, _wordpress_i18n.__)("Clear the filters and try something else.", "elementor"),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.ColorSwatchIcon, {
				color: "inherit",
				fontSize: "large"
			})
		}
	};
	var NotFound = ({ notFoundType }) => {
		const { search: { onClearSearch, inputValue }, filters: { onClearFilter } } = useSearchAndFilters();
		switch (notFoundType) {
			case "filter": return /* @__PURE__ */ react.createElement(NotFoundLayout, {
				...notFound.filter,
				onClear: onClearFilter
			});
			case "search": return /* @__PURE__ */ react.createElement(NotFoundLayout, {
				...notFound.search,
				searchValue: inputValue,
				onClear: onClearSearch
			});
			case "filterAndSearch": return /* @__PURE__ */ react.createElement(NotFoundLayout, {
				...notFound.filterAndSearch,
				onClear: () => {
					onClearFilter();
					onClearSearch();
				}
			});
		}
	};
	var NotFoundLayout = ({ onClear, searchValue, mainText, sceneryText, icon }) => /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
		color: "text.secondary",
		pt: 5,
		alignItems: "center",
		gap: 1,
		overflow: "hidden",
		justifySelf: "center"
	}, icon, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { width: "100%" } }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
		align: "center",
		variant: "subtitle2",
		color: "inherit"
	}, mainText), searchValue && /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
		variant: "subtitle2",
		color: "inherit",
		sx: {
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
	}, sceneryText), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
		align: "center",
		variant: "caption",
		color: "inherit"
	}, /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
		color: "secondary",
		variant: "caption",
		component: "button",
		onClick: onClear
	}, (0, _wordpress_i18n.__)("Clear & try again", "elementor"))));

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/class-manager/global-classes-list.tsx
	var ROW_HEIGHT = 40;
	var OVERSCAN = 6;
	var GlobalClassesList = ({ disabled, scrollElement, onStopSyncRequest, onStartSyncRequest }) => {
		const { search: { debouncedValue: searchValue } } = useSearchAndFilters();
		const cssClasses = useOrderedClasses();
		const dispatch = (0, _elementor_store.__useDispatch)();
		const filters = useFilters();
		const [draggedItemId, setDraggedItemId] = (0, react.useState)(null);
		const [loading, setLoading] = (0, react.useState)({});
		const addLoadingClass = (classId) => setLoading((prev) => ({
			...prev,
			[classId]: true
		}));
		const removeLoadingClass = (classId) => setLoading((prev) => {
			const { [classId]: _, ...rest } = prev;
			return rest;
		});
		const draggedItemLabel = cssClasses.find((cssClass) => cssClass.id === draggedItemId)?.label ?? "";
		const [classesOrder, reorderClasses] = useReorder(draggedItemId, setDraggedItemId, draggedItemLabel ?? "");
		const filteredCssClasses = useFilteredCssClasses();
		const virtualizer = useVirtualizer({
			count: filteredCssClasses.length,
			getScrollElement: () => scrollElement ?? null,
			estimateSize: () => ROW_HEIGHT,
			overscan: OVERSCAN,
			getItemKey: (index) => filteredCssClasses[index].id,
			rangeExtractor: (range) => {
				const indices = new Set(defaultRangeExtractor(range));
				if (draggedItemId) {
					const draggedItemIndex = filteredCssClasses.findIndex((cssClass) => cssClass.id === draggedItemId);
					if (draggedItemIndex >= 0) indices.add(draggedItemIndex);
				}
				return [...indices].sort((a, b) => a - b);
			}
		});
		(0, react.useEffect)(() => {
			const handler = (event) => {
				if (event.key === "z" && (event.ctrlKey || event.metaKey)) {
					event.stopImmediatePropagation();
					event.preventDefault();
					if (event.shiftKey) {
						dispatch(slice.actions.redo());
						return;
					}
					dispatch(slice.actions.undo());
				}
			};
			window.addEventListener("keydown", handler, { capture: true });
			return () => window.removeEventListener("keydown", handler);
		}, [dispatch]);
		if (!cssClasses?.length) return /* @__PURE__ */ react.createElement(EmptyState, null);
		const notFoundType = getNotFoundType(searchValue, filters, filteredCssClasses);
		if (notFoundType) return /* @__PURE__ */ react.createElement(NotFound, { notFoundType });
		const isFiltersApplied = filters?.length || searchValue;
		const allowSorting = filteredCssClasses.length > 1 && !isFiltersApplied;
		return /* @__PURE__ */ react.createElement(DeleteConfirmationProvider, null, /* @__PURE__ */ react.createElement(_elementor_ui.List, { sx: {
			position: "relative",
			display: "block",
			height: virtualizer.getTotalSize(),
			padding: 0
		} }, /* @__PURE__ */ react.createElement(SortableProvider, {
			value: classesOrder,
			onChange: reorderClasses,
			onDragStart: (event) => setDraggedItemId(event.active.id),
			onDragEnd: () => setDraggedItemId(null),
			onDragCancel: () => setDraggedItemId(null),
			disableDragOverlay: !allowSorting
		}, virtualizer.getVirtualItems().map((virtualRow) => {
			const cssClass = filteredCssClasses[virtualRow.index];
			return /* @__PURE__ */ react.createElement(SortableItem, {
				key: virtualRow.key,
				id: cssClass.id,
				style: {
					position: "absolute",
					top: virtualRow.start,
					left: 0,
					width: "100%"
				}
			}, ({ isDragged, isDragPlaceholder, triggerProps, triggerStyle }) => /* @__PURE__ */ react.createElement(ClassItem, {
				id: cssClass.id,
				label: cssClass.label,
				renameClass: async (newLabel) => {
					addLoadingClass(cssClass.id);
					try {
						trackGlobalClasses({
							event: "classRenamed",
							classId: cssClass.id,
							oldValue: cssClass.label,
							newValue: newLabel,
							source: "class-manager"
						});
						await loadExistingClasses([cssClass.id]);
						dispatch(slice.actions.update({ style: {
							id: cssClass.id,
							label: newLabel
						} }));
					} finally {
						removeLoadingClass(cssClass.id);
					}
				},
				selected: isDragged,
				disabled: disabled || isDragPlaceholder || loading[cssClass.id],
				sortableTriggerProps: {
					...triggerProps,
					style: triggerStyle
				},
				showSortIndicator: allowSorting,
				syncToV3: cssClass.sync_to_v3,
				onToggleSync: (id, newValue) => {
					if (!newValue && onStopSyncRequest) onStopSyncRequest(id);
					else if (newValue && onStartSyncRequest) onStartSyncRequest(id);
					else dispatch(slice.actions.update({ style: {
						id,
						sync_to_v3: newValue
					} }));
				}
			}));
		}))));
	};
	var EmptyState = () => /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
		alignItems: "center",
		gap: 1.5,
		pt: 10,
		px: .5,
		maxWidth: "260px",
		margin: "auto"
	}, /* @__PURE__ */ react.createElement(FlippedColorSwatchIcon, { fontSize: "large" }), /* @__PURE__ */ react.createElement(StyledHeader, {
		variant: "subtitle2",
		component: "h2",
		color: "text.secondary"
	}, (0, _wordpress_i18n.__)("There are no global classes yet.", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
		align: "center",
		variant: "caption",
		color: "text.secondary"
	}, (0, _wordpress_i18n.__)("CSS classes created in the editor panel will appear here. Once they are available, you can arrange their hierarchy, rename them, or delete them as needed.", "elementor")));
	var StyledHeader = (0, _elementor_ui.styled)(_elementor_ui.Typography)(({ theme, variant }) => ({ "&.MuiTypography-root": { ...theme.typography[variant] } }));
	var useReorder = (draggedItemId, setDraggedItemId, draggedItemLabel) => {
		const dispatch = (0, _elementor_store.__useDispatch)();
		const order = useClassesOrder();
		const reorder = (newIds) => {
			dispatch(slice.actions.setOrder(newIds));
			if (draggedItemId) {
				trackGlobalClasses({
					event: "classManagerReorder",
					classId: draggedItemId,
					classTitle: draggedItemLabel
				});
				setDraggedItemId(null);
			}
		};
		return [order, reorder];
	};
	var useFilteredCssClasses = () => {
		const cssClasses = useOrderedClasses();
		const { search: { debouncedValue: searchValue } } = useSearchAndFilters();
		const filters = useFilters();
		const lowercaseLabels = (0, react.useMemo)(() => cssClasses.map((cssClass) => ({
			...cssClass,
			lowerLabel: cssClass.label.toLowerCase()
		})), [cssClasses]);
		const filteredClasses = (0, react.useMemo)(() => {
			const normalizedSearch = searchValue.replace(/[^a-zA-Z0-9_-]/g, "").toLowerCase();
			if (normalizedSearch.length > 1) return lowercaseLabels.filter((cssClass) => cssClass.lowerLabel.includes(normalizedSearch));
			return cssClasses;
		}, [
			searchValue,
			cssClasses,
			lowercaseLabels
		]);
		return (0, react.useMemo)(() => {
			if (filters && filters.length > 0) return filteredClasses.filter((cssClass) => filters.includes(cssClass.id));
			return filteredClasses;
		}, [filteredClasses, filters]);
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/class-manager/panel-interactions.ts
	function blockPanelInteractions() {
		window.$e?.components?.get?.("panel")?.blockUserInteractions?.();
	}
	function unblockPanelInteractions() {
		window.$e?.components?.get?.("panel")?.unblockUserInteractions?.();
	}

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/class-manager/start-sync-to-v3-modal.tsx
	var IMAGE_URL = "https://assets.elementor.com/packages/v1/images/class-manager-sync-modal.png";
	var StartSyncToV3Modal = ({ externalOpen, classId, onExternalClose, onConfirm } = {}) => {
		const [shouldShowAgain, setShouldShowAgain] = (0, react.useState)(true);
		const hasTrackedExposure = (0, react.useRef)(false);
		(0, react.useEffect)(() => {
			if (externalOpen && classId && !hasTrackedExposure.current) {
				hasTrackedExposure.current = true;
				trackGlobalClasses({
					event: "classSyncToV3PopupShown",
					classId
				});
			}
			if (!externalOpen) hasTrackedExposure.current = false;
		}, [externalOpen, classId]);
		const handleClose = () => {
			if (classId) trackGlobalClasses({
				event: "classSyncToV3PopupClick",
				classId,
				action: "cancel"
			});
			onExternalClose?.();
		};
		const handleConfirm = () => {
			if (classId) trackGlobalClasses({
				event: "classSyncToV3PopupClick",
				classId,
				action: "sync"
			});
			onConfirm?.();
			onExternalClose?.();
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Dialog, {
			open: !!externalOpen,
			onClose: handleClose,
			maxWidth: "sm",
			fullWidth: true
		}, /* @__PURE__ */ react.createElement(_elementor_ui.DialogContent, { sx: { p: 0 } }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			component: "img",
			src: IMAGE_URL,
			alt: "",
			sx: {
				width: "100%",
				display: "block"
			}
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			px: 3,
			pt: 4,
			pb: 1
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "h6" }, (0, _wordpress_i18n.__)("Sync class to Global Fonts", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "secondary",
			sx: {
				mb: 2,
				pt: 1
			}
		}, (0, _wordpress_i18n.__)("Only typography settings supported in Global Fonts will be applied, including: font family, responsive font sizes, weight, text transform, decoration, line height, letter spacing, and word spacing. Changes made in the class will automatically apply to Global Fonts.", "elementor")))), /* @__PURE__ */ react.createElement(_elementor_ui.DialogActions, { sx: {
			justifyContent: "space-between",
			px: 3,
			pb: 2
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.FormControlLabel, {
			control: /* @__PURE__ */ react.createElement(_elementor_ui.Checkbox, {
				checked: !shouldShowAgain,
				onChange: (e) => setShouldShowAgain(!e.target.checked)
			}),
			label: /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
				variant: "body2",
				color: "secondary"
			}, (0, _wordpress_i18n.__)("Don't show again", "elementor"))
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			gap: 1
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			onClick: handleClose,
			color: "secondary",
			size: "small"
		}, (0, _wordpress_i18n.__)("Cancel", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			onClick: handleConfirm,
			variant: "contained",
			size: "small"
		}, (0, _wordpress_i18n.__)("Sync to Global Fonts", "elementor")))));
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/class-manager/class-manager-panel.tsx
	var STOP_SYNC_MESSAGE_KEY = "stop-sync-class";
	function ClassManagerPanelEmbedded({ onRequestClose, onExposeCloseAttempt, isActive }) {
		return /* @__PURE__ */ react.createElement(ClassManagerPanelContent, {
			onRequestClose,
			onExposeCloseAttempt,
			isActive
		});
	}
	function ClassManagerPanelContent({ onRequestClose, onExposeCloseAttempt, isActive = true }) {
		const isDirty = useDirtyState();
		const { open: openSaveChangesDialog, close: closeSaveChangesDialog, isOpen: isSaveChangesDialogOpen } = (0, _elementor_editor_ui.useDialog)();
		const [stopSyncConfirmation, setStopSyncConfirmation] = (0, react.useState)(null);
		const [startSyncConfirmation, setStartSyncConfirmation] = (0, react.useState)(null);
		const [isStopSyncSuppressed] = (0, _elementor_editor_current_user.useSuppressedMessage)(STOP_SYNC_MESSAGE_KEY);
		const [scrollElement, setScrollElement] = (0, react.useState)(null);
		const { mutateAsync: publish, isPending: isPublishing } = usePublish();
		const resetAndClosePanel = () => {
			(0, _elementor_store.__dispatch)(slice.actions.resetToInitialState({ context: "frontend" }));
			closeSaveChangesDialog();
		};
		const handleClosePanel = (0, react.useCallback)(() => {
			if (isDirty) {
				openSaveChangesDialog();
				return;
			}
			onRequestClose();
		}, [
			isDirty,
			openSaveChangesDialog,
			onRequestClose
		]);
		(0, react.useEffect)(() => {
			if (!onExposeCloseAttempt) return;
			onExposeCloseAttempt(() => handleClosePanel());
			return () => onExposeCloseAttempt(null);
		}, [onExposeCloseAttempt, handleClosePanel]);
		(0, react.useEffect)(() => {
			blockPanelInteractions();
			return () => {
				unblockPanelInteractions();
			};
		}, []);
		const handleStopSync = (0, react.useCallback)(async (classId) => {
			await loadExistingClasses([classId]);
			(0, _elementor_store.__dispatch)(slice.actions.update({ style: {
				id: classId,
				sync_to_v3: false
			} }));
			trackGlobalClasses({
				event: "classSyncToV3",
				classId,
				action: "unsync"
			});
			setStopSyncConfirmation(null);
		}, []);
		const handleStartSync = (0, react.useCallback)(async (classId) => {
			await loadExistingClasses([classId]);
			(0, _elementor_store.__dispatch)(slice.actions.update({ style: {
				id: classId,
				sync_to_v3: true
			} }));
			trackGlobalClasses({
				event: "classSyncToV3",
				classId,
				action: "sync"
			});
			setStartSyncConfirmation(null);
		}, []);
		const handleStopSyncRequest = (0, react.useCallback)((classId) => {
			if (!isStopSyncSuppressed) setStopSyncConfirmation(classId);
			else handleStopSync(classId);
		}, [isStopSyncSuppressed, handleStopSync]);
		usePreventUnload();
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.ErrorBoundary, { fallback: /* @__PURE__ */ react.createElement(ErrorBoundaryFallback, null) }, /* @__PURE__ */ react.createElement(SearchAndFilterProvider, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "column",
			sx: {
				height: "100%",
				width: "100%",
				flex: 1,
				minHeight: 0,
				overflow: "hidden"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			px: 2,
			pb: 1
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			justifyContent: "space-between",
			gap: .5,
			sx: { pb: .5 }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			flexGrow: 1,
			minWidth: 0
		} }, /* @__PURE__ */ react.createElement(ClassManagerSearch, null)), /* @__PURE__ */ react.createElement(CssClassFilter, null), /* @__PURE__ */ react.createElement(TotalCssClassCounter, null)), /* @__PURE__ */ react.createElement(ActiveFilters, null)), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			ref: setScrollElement,
			px: 2,
			sx: {
				flexGrow: 1,
				overflowY: "auto",
				minHeight: 0
			}
		}, /* @__PURE__ */ react.createElement(GlobalClassesList, {
			disabled: isPublishing,
			scrollElement,
			onStopSyncRequest: handleStopSyncRequest,
			onStartSyncRequest: (classId) => setStartSyncConfirmation(classId)
		})), /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelFooter, null, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			fullWidth: true,
			size: "small",
			color: "global",
			variant: "contained",
			onClick: publish,
			disabled: !isDirty,
			loading: isPublishing
		}, (0, _wordpress_i18n.__)("Save changes", "elementor")))))), isActive && /* @__PURE__ */ react.createElement(ClassManagerIntroduction, null), startSyncConfirmation && /* @__PURE__ */ react.createElement(StartSyncToV3Modal, {
			externalOpen: true,
			classId: startSyncConfirmation,
			onExternalClose: () => setStartSyncConfirmation(null),
			onConfirm: () => handleStartSync(startSyncConfirmation)
		}), stopSyncConfirmation && /* @__PURE__ */ react.createElement(StopSyncConfirmationDialog, {
			open: true,
			onClose: () => setStopSyncConfirmation(null),
			onConfirm: () => handleStopSync(stopSyncConfirmation)
		}), isSaveChangesDialogOpen && /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog, null, /* @__PURE__ */ react.createElement(_elementor_ui.DialogHeader, {
			onClose: closeSaveChangesDialog,
			logo: false
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.Title, null, (0, _wordpress_i18n.__)("You have unsaved changes", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.Content, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.ContentText, null, (0, _wordpress_i18n.__)("You have unsaved changes in the Class Manager.", "elementor")), /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.ContentText, null, (0, _wordpress_i18n.__)("To avoid losing your updates, save your changes before leaving.", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.Actions, { actions: {
			discard: {
				label: (0, _wordpress_i18n.__)("Discard", "elementor"),
				action: () => {
					resetAndClosePanel();
				}
			},
			confirm: {
				label: (0, _wordpress_i18n.__)("Save & Continue", "elementor"),
				action: async () => {
					await publish();
					closeSaveChangesDialog();
					onRequestClose();
				}
			}
		} })));
	}
	var ErrorBoundaryFallback = () => /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
		role: "alert",
		sx: {
			minHeight: "100%",
			p: 2
		}
	}, /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
		severity: "error",
		sx: {
			mb: 2,
			maxWidth: 400,
			textAlign: "center"
		}
	}, /* @__PURE__ */ react.createElement("strong", null, (0, _wordpress_i18n.__)("Something went wrong", "elementor"))));
	var usePreventUnload = () => {
		const isDirty = useDirtyState();
		(0, react.useEffect)(() => {
			const handleBeforeUnload = (event) => {
				if (isDirty) event.preventDefault();
			};
			window.addEventListener("beforeunload", handleBeforeUnload);
			return () => {
				window.removeEventListener("beforeunload", handleBeforeUnload);
			};
		}, [isDirty]);
	};
	var usePublish = () => {
		return (0, _elementor_query.useMutation)({
			mutationFn: () => saveGlobalClasses({ context: "frontend" }),
			onSuccess: async () => {
				(0, _elementor_editor_documents.setDocumentModifiedStatus)(false);
				if (hasDeletedItems()) await onDelete();
			}
		});
	};
	var TotalCssClassCounter = () => {
		const filters = useFilters();
		const cssClasses = useClassesOrder();
		return /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			size: "small",
			label: filters ? `${filters.length} / ${cssClasses?.length}` : cssClasses?.length
		});
	};
	var StopSyncConfirmationDialog = ({ open, onClose, onConfirm }) => {
		const [, suppressStopSyncMessage] = (0, _elementor_editor_current_user.useSuppressedMessage)(STOP_SYNC_MESSAGE_KEY);
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog, {
			open,
			onClose
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Title, {
			icon: FlippedColorSwatchIcon,
			iconColor: "primary"
		}, (0, _wordpress_i18n.__)("Un-sync typography class", "elementor")), /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Content, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.ContentText, null, (0, _wordpress_i18n.__)("You're about to stop syncing a typography class to Global Fonts.", "elementor")), /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.ContentText, { sx: { mt: 1 } }, (0, _wordpress_i18n.__)("Note that if it's being used anywhere, the affected elements will inherit the default typography.", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Actions, {
			onClose,
			onConfirm,
			cancelLabel: (0, _wordpress_i18n.__)("Cancel", "elementor"),
			confirmLabel: (0, _wordpress_i18n.__)("Got it", "elementor"),
			color: "primary",
			onSuppressMessage: suppressStopSyncMessage,
			suppressLabel: (0, _wordpress_i18n.__)("Don't show again", "elementor")
		}));
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/capabilities.ts
	var UPDATE_CLASS_CAPABILITY_KEY = "elementor_global_classes_update_class";
	var getCapabilities = () => {
		return {
			update: UPDATE_CLASS_CAPABILITY_KEY,
			create: UPDATE_CLASS_CAPABILITY_KEY,
			delete: UPDATE_CLASS_CAPABILITY_KEY,
			updateProps: UPDATE_CLASS_CAPABILITY_KEY
		};
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/global-classes-styles-provider.ts
	var MAX_CLASSES = 1e3;
	var GLOBAL_CLASSES_PROVIDER_KEY = "global-classes";
	var PREGENERATED_LINK_PATTERN = /^global-([0-9]+-)?(preview|frontend)-[a-zA-Z_-]+-css$/;
	var globalClassesStylesProvider = (0, _elementor_editor_styles_repository.createStylesProvider)({
		key: GLOBAL_CLASSES_PROVIDER_KEY,
		priority: 30,
		limit: MAX_CLASSES,
		isPregeneratedLink: ({ id }) => PREGENERATED_LINK_PATTERN.test(id),
		labels: {
			singular: (0, _wordpress_i18n.__)("class", "elementor"),
			plural: (0, _wordpress_i18n.__)("classes", "elementor")
		},
		subscribe: (cb) => subscribeWithStates(cb),
		capabilities: getCapabilities(),
		actions: {
			all: () => selectOrderedClasses((0, _elementor_store.__getState)()),
			get: (id) => {
				const state = (0, _elementor_store.__getState)();
				const isFetched = selectIsClassFetched(state, id);
				const style = selectClass(state, id);
				if (isFetched || style) return style;
				loadExistingClasses([id]);
				return placeholderDefinition(id, selectClassLabels(state)[id] ?? id);
			},
			resolveCssName: (id) => {
				const state = (0, _elementor_store.__getState)();
				const loaded = selectClass(state, id);
				if (loaded) return loaded.label;
				return selectClassLabels(state)[id] ?? id;
			},
			create: (label, variants = [], id) => {
				const existingClasses = Object.entries(selectClassLabels((0, _elementor_store.__getState)()));
				if (existingClasses.map(([, classLabel]) => classLabel).includes(label)) throw new GlobalClassLabelAlreadyExistsError({ context: { label } });
				const existingIds = existingClasses.map(([existingId]) => existingId);
				if (!id) id = (0, _elementor_editor_styles.generateId)("g-", existingIds);
				(0, _elementor_store.__dispatch)(slice.actions.add({
					id,
					type: "class",
					label,
					variants
				}));
				return id;
			},
			update: (payload) => {
				(0, _elementor_store.__dispatch)(slice.actions.update({ style: payload }));
			},
			delete: (id) => {
				(0, _elementor_store.__dispatch)(slice.actions.delete(id));
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
			},
			tracking: (data) => {
				trackGlobalClasses(data).catch((error) => {
					throw new GlobalClassTrackingError({ cause: error });
				});
			}
		}
	});
	var subscribeWithStates = (cb) => {
		let previousState = selectData((0, _elementor_store.__getState)());
		return (0, _elementor_store.__subscribeWithSelector)((state) => selectData(state), (currentState) => {
			cb(previousState.items, currentState.items);
			previousState = currentState;
		});
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/mcp-integration/classes-resource.ts
	var GLOBAL_CLASSES_URI = "elementor://global-classes";
	var STORAGE_KEY = "elementor-global-classes";
	var updateLocalStorageCache = () => {
		const classes = selectOrderedClasses((0, _elementor_store.__getState)());
		localStorage.setItem(STORAGE_KEY, JSON.stringify(classes));
	};
	var initClassesResource = (classesMcpEntry, canvasMcpEntry) => {
		[canvasMcpEntry, classesMcpEntry].forEach((entry) => {
			const { sendResourceUpdated, resource, waitForReady } = entry;
			resource("global-classes", GLOBAL_CLASSES_URI, { description: "Global classes list." }, async () => {
				return { contents: [{
					uri: GLOBAL_CLASSES_URI,
					text: localStorage[STORAGE_KEY] ?? "[]"
				}] };
			});
			waitForReady().then(() => {
				updateLocalStorageCache();
				globalClassesStylesProvider.subscribe(() => {
					updateLocalStorageCache();
					sendResourceUpdated({ uri: GLOBAL_CLASSES_URI });
				});
			});
		});
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/hooks/use-prefetch-css-class-usage.ts
	function usePrefetchCssClassUsage() {
		const queryClient = (0, _elementor_query.useQueryClient)();
		const prefetchClassesUsage = () => queryClient.prefetchQuery({
			queryKey: [QUERY_KEY],
			queryFn: fetchCssClassUsage
		});
		return { prefetchClassesUsage };
	}
	var PrefetchCssClassUsage = () => {
		const { prefetchClassesUsage } = usePrefetchCssClassUsage();
		prefetchClassesUsage();
		return null;
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/class-manager/class-manager-button.tsx
	var EVENT_TOGGLE_DESIGN_SYSTEM = "elementor/toggle-design-system";
	var ClassManagerButton = () => {
		const { prefetchClassesUsage } = usePrefetchCssClassUsage();
		const { userCan } = (0, _elementor_editor_styles_repository.useUserStylesCapability)();
		if (!userCan(globalClassesStylesProvider.getKey()).update) return null;
		const handleOpenPanel = () => {
			window.dispatchEvent(new CustomEvent(EVENT_TOGGLE_DESIGN_SYSTEM, { detail: { tab: "classes" } }));
			trackGlobalClasses({
				event: "classManagerOpened",
				source: "style-panel"
			});
			prefetchClassesUsage();
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: (0, _wordpress_i18n.__)("Class Manager", "elementor"),
			placement: "top"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: "tiny",
			onClick: handleOpenPanel,
			sx: { marginInlineEnd: -.75 }
		}, /* @__PURE__ */ react.createElement(FlippedColorSwatchIcon, { fontSize: "tiny" })));
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/convert-local-class-to-global-class.tsx
	var ConvertLocalClassToGlobalClass = (props) => {
		const localStyleData = props.styleDef;
		const handleConversion = () => {
			const newClassName = createClassName(`converted-class-`);
			if (!localStyleData) throw new Error("Style definition is required for converting local class to global class.");
			const newId = globalClassesStylesProvider.actions.create?.(newClassName, localStyleData.variants);
			if (newId) {
				props.successCallback(newId);
				trackGlobalClasses({
					classId: newId,
					event: "classCreated",
					source: "converted",
					classTitle: newClassName
				});
			}
		};
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
			disabled: !props.canConvert,
			onClick: handleConversion,
			dense: true,
			sx: { "&.Mui-focusVisible": {
				border: "none",
				boxShadow: "none !important",
				backgroundColor: "transparent"
			} }
		}, (0, _wordpress_i18n.__)("Convert to global class", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null));
	};
	function createClassName(prefix) {
		let i = 1;
		let newClassName = `${prefix}${i}`;
		while (!(0, _elementor_editor_styles_repository.validateStyleLabel)(newClassName, "create").isValid) newClassName = `${prefix}${++i}`;
		return newClassName;
	}

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/global-styles-import-listener.tsx
	function GlobalStylesImportListener() {
		const dispatch = (0, _elementor_store.__useDispatch)();
		(0, react.useEffect)(() => {
			const handleGlobalStylesImported = async (event) => {
				const globalClasses = event.detail?.global_classes;
				if (!globalClasses?.added_items_order || !globalClasses?.added_items || globalClasses?.added_items_order?.length === 0) {
					loadCurrentDocumentClasses();
					return;
				}
				dispatch(slice.actions.updateAfterTemplateImport({
					addedItems: globalClasses.added_items,
					addedIdsOrder: globalClasses.added_items_order,
					addedClassLabels: createLabelsForClasses(Object.values(globalClasses.added_items))
				}));
			};
			window.addEventListener(_elementor_editor_canvas.GLOBAL_STYLES_IMPORTED_EVENT, handleGlobalStylesImported);
			return () => {
				window.removeEventListener(_elementor_editor_canvas.GLOBAL_STYLES_IMPORTED_EVENT, handleGlobalStylesImported);
			};
		}, [dispatch]);
		return null;
	}

//#endregion
//#region packages/packages/core/editor-global-classes/src/components/populate-store.tsx
	function PopulateStore() {
		(0, react.useEffect)(() => {
			loadCurrentDocumentClasses();
			(0, _elementor_editor_v1_adapters.registerDataHook)("after", "editor/documents/attach-preview", async () => {
				await loadCurrentDocumentClasses();
			});
		}, []);
		return null;
	}

//#endregion
//#region packages/packages/core/editor-global-classes/src/mcp-integration/manage-classes-tool.ts
	var MCP_PROXY_URL = "elementor/v1/mcp-proxy";
	var TOOL_NAME = "manage-classes";
	var initManageClassesTool = (reg) => {
		const { addTool } = reg;
		addTool({
			name: TOOL_NAME,
			description: "Manage V4 global CSS classes on the active kit. Bulk create, update, or delete using raw CSS declarations (up to 50 operations). Duplicate labels are auto-renamed with a DUP_ prefix.",
			schema: {
				action: _elementor_schema.z.enum([
					"create",
					"update",
					"delete"
				]),
				id: _elementor_schema.z.string().optional().describe("Class id — required for update/delete. Get from the global-classes resource."),
				label: _elementor_schema.z.string().optional().describe("Class label (lowercase, dash-separated) — required for create/update."),
				css: _elementor_schema.z.string().optional().describe("Plain CSS string. Supports &:hover/&:focus/&:active nesting and @media(--breakpoint) blocks. font-family must be a single Google Font name (no fallback stacks). In patch mode: \"prop: null\" removes that prop; \"all: null\" wipes the variant."),
				mode: _elementor_schema.z.enum(["patch", "replace"]).optional().describe("Merge strategy for update — patch (default): merge incoming props with existing; replace: discard all existing variants for the affected breakpoints.")
			},
			outputSchema: {
				status: _elementor_schema.z.enum(["ok"]).describe("Operation status"),
				id: _elementor_schema.z.string().optional().describe("ID of the affected class — use for subsequent update/delete calls."),
				label: _elementor_schema.z.string().optional().describe("Final label of the class after any auto-rename.")
			},
			requiredResources: [{
				uri: GLOBAL_CLASSES_URI,
				description: "Current global classes — check before creating to avoid duplicates"
			}],
			isDestructive: true,
			handler: async (params) => {
				const { data } = await (0, _elementor_http_client.httpService)().post(MCP_PROXY_URL, {
					tool: TOOL_NAME,
					input: { operations: [params] }
				});
				const result = data.data.results?.[0];
				const { create, update, delete: del } = globalClassesStylesProvider.actions;
				switch (params.action) {
					case "create":
						if (result && create) create(result.label, result.variants, result.id);
						break;
					case "update":
						if (result && update) update(result);
						break;
					case "delete":
						if (params.id && del) del(params.id);
						break;
				}
				(0, _elementor_store.__dispatch)(slice.actions.reset({ context: "frontend" }));
				window.dispatchEvent(new CustomEvent("classes:updated", { detail: { context: "frontend" } }));
				return {
					status: "ok",
					id: result?.id,
					label: result?.label
				};
			}
		});
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/mcp-integration/apply-global-class-guide-prompt.ts
	var APPLY_GLOBAL_CLASS_GUIDE_URI = "elementor://global-classes/tools/apply-global-class-guide";
	var generateApplyGlobalClassGuidePrompt = () => {
		const prompt = (0, _elementor_editor_mcp.toolPrompts)("apply-global-class");
		prompt.description("Apply a global class to an element, enabling consistent styling through your design system.");
		prompt.instruction(`## When to use this tool:
**ALWAYS use this IMMEDIATELY AFTER creating or updating elements** to apply the global classes you created beforehand:
- After adding elements to the canvas, apply semantic classes to them
- When applying consistent typography styles (heading-primary, text-body, etc.)
- When applying theme colors or brand styles (bg-brand, button-cta, etc.)
- When ensuring spacing consistency (spacing-section-large, etc.)

**DO NOT use this tool** for:
- Elements that don't share styles with other elements (use inline styles instead)
- Layout-specific properties (those should remain inline in stylesConfig)`);
		prompt.instruction(`## Prerequisites:
- **REQUIRED**: Get the list of available global classes from 'elementor://global-classes' resource
- **REQUIRED**: Get element IDs from the page structure or selected element resources
- Ensure you have the most up-to-date list of classes applied to the element to avoid duplicates
- Make sure you have the correct class ID that you want to apply`);
		prompt.instruction(`## Best Practices:
1. Apply multiple classes to a single element if needed (typography + color + spacing)
2. After applying, the tool will remind you to remove duplicate inline styles from elementConfig
3. Classes should describe purpose, not implementation (e.g., "heading-primary" not "big-red-text")`);
		return prompt.prompt();
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/mcp-integration/mcp-apply-unapply-global-classes.ts
	function initMcpApplyUnapplyGlobalClasses(server) {
		const { addTool, resource } = server;
		const applyGlobalClassGuideText = generateApplyGlobalClassGuidePrompt();
		resource("apply-global-class-guide", APPLY_GLOBAL_CLASS_GUIDE_URI, {
			description: "Workflow, prerequisites, and best practices for apply-global-class",
			mimeType: "text/plain",
			title: "Apply global class tool guide"
		}, async (uri) => ({ contents: [{
			mimeType: "text/plain",
			text: applyGlobalClassGuideText,
			uri: uri.href
		}] }));
		addTool({
			schema: {
				classId: _elementor_schema.z.string().describe("The ID of the class to apply"),
				elementId: _elementor_schema.z.string().describe("The ID of the element to which the class will be applied")
			},
			outputSchema: {
				result: _elementor_schema.z.string().describe("Result message indicating the success of the apply operation"),
				llm_instructions: _elementor_schema.z.string().describe("Instructions what to do next, Important to follow these instructions!")
			},
			name: "apply-global-class",
			description: `Apply a global class to an element for shared design-system styling. Read the full guide at [${APPLY_GLOBAL_CLASS_GUIDE_URI}].`,
			requiredResources: [{
				description: "Apply global class tool guide",
				uri: APPLY_GLOBAL_CLASS_GUIDE_URI
			}, {
				description: "Global classes list",
				uri: GLOBAL_CLASSES_URI
			}],
			handler: async (params) => {
				const { classId, elementId } = params;
				(0, _elementor_editor_editing_panel.doApplyClasses)(elementId, [...(0, _elementor_editor_editing_panel.doGetAppliedClasses)(elementId), classId]);
				globalClassesStylesProvider.actions.tracking?.({
					event: "classApplied",
					executedBy: "mcp_tool",
					classId
				});
				return {
					llm_instructions: "Please check the element configuration, find inline styles duplicated by the applied global class, and remove them",
					result: `Class ${classId} applied to element ${elementId} successfully.`
				};
			}
		});
		addTool({
			name: "unapply-global-class",
			schema: {
				classId: _elementor_schema.z.string().describe("The ID of the class to unapply"),
				elementId: _elementor_schema.z.string().describe("The ID of the element from which the class will be unapplied")
			},
			outputSchema: { result: _elementor_schema.z.string().describe("Result message indicating the success of the unapply operation") },
			description: `Unapply a global class from an element by class ID. Resolve class names to IDs via [${GLOBAL_CLASSES_URI}].`,
			requiredResources: [{
				description: "Global classes list",
				uri: GLOBAL_CLASSES_URI
			}],
			handler: async (params) => {
				const { classId, elementId } = params;
				if (!(0, _elementor_editor_editing_panel.doUnapplyClass)(elementId, classId)) throw new Error(`Class ${classId} is not applied to element ${elementId}, cannot unapply it.`);
				return { result: `Class ${classId} unapplied from element ${elementId} successfully.` };
			}
		});
	}

//#endregion
//#region packages/packages/core/editor-global-classes/src/mcp-integration/mcp-get-global-class-usages.ts
	function initMcpApplyGetGlobalClassUsages(reg) {
		const { addTool } = reg;
		const globalClassesUsageSchema = { usages: _elementor_schema.z.array(_elementor_schema.z.object({
			classId: _elementor_schema.z.string().describe("The ID of the class, not visible to the user. To retrieve the name of the class, use the \"list-global-classes\" tool"),
			usages: _elementor_schema.z.array(_elementor_schema.z.object({
				pageId: _elementor_schema.z.string().describe("The ID of the page where the class is used"),
				title: _elementor_schema.z.string().describe("The title of the page where the class is used"),
				total: _elementor_schema.z.number().describe("The number of times the class is used on this page"),
				elements: _elementor_schema.z.array(_elementor_schema.z.string()).describe("List of element IDs using this class on the page")
			}))
		})) };
		addTool({
			name: "get-global-class-usages",
			description: `Retrieve usages of global classes across all Elementor pages. Heavy operation \u2014 scans every page in the site.

## When to use:
- Before deleting or radically changing a class \u2014 to understand cross-page side effects and decide whether to consult the user.
- To identify unused global classes for cleanup.

## When NOT to use:
- To list global classes themselves \u2014 use the global-classes resource instead (this tool returns usages, not the class list).`,
			requiredResources: [{
				description: "Global classes list",
				uri: GLOBAL_CLASSES_URI
			}],
			outputSchema: globalClassesUsageSchema,
			handler: async () => {
				const data = await fetchCssClassUsage();
				const result = { usages: [] };
				Object.entries(data).forEach(([classId, usageDetails]) => {
					const newEntry = {
						classId,
						usages: []
					};
					if (typeof usageDetails !== "number") {
						const { content } = usageDetails;
						content.forEach((detail) => {
							newEntry.usages.push({
								pageId: String(detail.pageId),
								title: detail.title,
								total: detail.total,
								elements: detail.elements
							});
						});
						result.usages.push(newEntry);
					}
				});
				return result;
			}
		});
	}

//#endregion
//#region packages/packages/core/editor-global-classes/src/mcp-integration/index.ts
	var initMcpIntegration = (reg, canvasMcpEntry) => {
		initMcpApplyUnapplyGlobalClasses(reg);
		initMcpApplyGetGlobalClassUsages(reg);
		initManageClassesTool(reg);
		initClassesResource(reg, canvasMcpEntry);
	};

//#endregion
//#region packages/packages/core/editor-global-classes/src/sync-with-document-save.ts
	var pendingSave = null;
	function syncWithDocumentSave(panelActions) {
		const unsubscribe = syncDirtyState();
		bindSaveAction(panelActions);
		bindBeforeSaveTemplateAction();
		return unsubscribe;
	}
	function syncDirtyState() {
		return (0, _elementor_store.__subscribeWithSelector)(selectIsDirty, () => {
			if (!isDirty()) return;
			(0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
		});
	}
	function triggerSave(panelActions, context = "preview") {
		if (!(0, _elementor_editor_current_user.getCurrentUser)()?.capabilities.includes("elementor_global_classes_update_class")) return null;
		if (pendingSave) return pendingSave;
		const promise = saveGlobalClasses({
			context,
			onApprove: panelActions?.open
		});
		pendingSave = promise;
		promise.finally(() => {
			pendingSave = null;
		});
		return promise;
	}
	function bindSaveAction(panelActions) {
		(0, _elementor_editor_v1_adapters.registerDataHook)("dependency", "document/save/save", (args) => {
			triggerSave(panelActions, args.status === "publish" ? "frontend" : "preview");
			return true;
		});
	}
	function bindBeforeSaveTemplateAction() {
		window.addEventListener("elementor/global-styles/before-save", (event) => {
			if (!pendingSave && isDirty()) triggerSave();
			if (pendingSave) event.detail.promises.push(pendingSave);
		});
	}
	function isDirty() {
		return selectIsDirty((0, _elementor_store.__getState)());
	}

//#endregion
//#region packages/packages/core/editor-global-classes/src/sync-with-document.tsx
	function SyncWithDocumentSave() {
		(0, react.useEffect)(() => {
			return (0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.v1ReadyEvent)(), () => {
				const open = () => {
					window.dispatchEvent(new CustomEvent("elementor/open-global-classes-manager"));
				};
				syncWithDocumentSave({ open });
			});
		}, []);
		return null;
	}

//#endregion
//#region packages/packages/core/editor-global-classes/src/init.ts
	function init() {
		(0, _elementor_store.__registerSlice)(slice);
		_elementor_editor_embedded_documents_manager.embeddedDocumentsManager.onDocumentLoad((documentId) => {
			addDocumentClasses(documentId);
		});
		_elementor_editor_styles_repository.stylesRepository.register(globalClassesStylesProvider);
		(0, _elementor_editor.injectIntoLogic)({
			id: "global-classes-populate-store",
			component: PopulateStore
		});
		(0, _elementor_editor.injectIntoLogic)({
			id: "global-classes-sync-with-document",
			component: SyncWithDocumentSave
		});
		(0, _elementor_editor.injectIntoLogic)({
			id: "global-classes-import-listener",
			component: GlobalStylesImportListener
		});
		(0, _elementor_editor.injectIntoLogic)({
			id: "global-classes-prefetch-css-class-usage",
			component: PrefetchCssClassUsage
		});
		(0, _elementor_editor_editing_panel.injectIntoCssClassConvert)({
			id: "global-classes-convert-from-local-class",
			component: ConvertLocalClassToGlobalClass
		});
		(0, _elementor_editor_editing_panel.injectIntoClassSelectorActions)({
			id: "global-classes-manager-button",
			component: ClassManagerButton
		});
		(0, _elementor_editor_editing_panel.registerStyleProviderToColors)(GLOBAL_CLASSES_PROVIDER_KEY, {
			name: "global",
			getThemeColor: (theme) => theme.palette.global.dark
		});
		initMcpIntegration((0, _elementor_editor_mcp.getMCPByDomain)("classes", {
			instructions: "MCP server for management of Elementor global classes",
			docs: `Everything related to V4 ( Atomic ) global classes.
# Global classes
- Create/update/delete global classes
- Get list of global classes
- Get details of a global class
`
		}), (0, _elementor_editor_mcp.getMCPByDomain)("canvas"));
	}

//#endregion
//#region packages/packages/core/editor-global-classes/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		ClassManagerPanelEmbedded: () => ClassManagerPanelEmbedded,
		GLOBAL_CLASSES_URI: () => GLOBAL_CLASSES_URI,
		addDocumentClasses: () => addDocumentClasses,
		createLabelsForClasses: () => createLabelsForClasses,
		init: () => init,
		loadExistingClasses: () => loadExistingClasses,
		trackGlobalClasses: () => trackGlobalClasses
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorGlobalClasses = src_exports;

//#endregion
})(React, elementorV2.editorCurrentUser, elementorV2.editorDocuments, elementorV2.editorPanels, elementorV2.editorUi, elementorV2.query, elementorV2.store, elementorV2.ui, wp.i18n, elementorV2.editorStyles, elementorV2.utils, elementorV2.httpClient, elementorV2.icons, elementorV2.events, ReactDOM, elementorV2.editorStylesRepository, elementorV2.editor, elementorV2.editorEditingPanel, elementorV2.editorEmbeddedDocumentsManager, elementorV2.editorMcp, elementorV2.editorCanvas, elementorV2.editorV1Adapters, elementorV2.schema);
window.elementorV2.editorGlobalClasses?.init?.();
//# sourceMappingURL=editor-global-classes.js.map