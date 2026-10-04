(function(_elementor_store, _elementor_locations, react, _elementor_ui, _elementor_icons, _wordpress_i18n, _elementor_editor, _elementor_editor_v1_adapters, _elementor_editor_ui) {

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

//#region packages/packages/core/editor-floating-panels/src/constants.ts
	var FLOATING_PANEL_Z_INDEX_BASE = 1e3;

//#endregion
//#region packages/packages/core/editor-floating-panels/src/store/selectors.ts
	function selectPanelState(state, id) {
		return state.floatingPanels.byId[id];
	}
	function resolvePanelZIndex(state, id) {
		return FLOATING_PANEL_Z_INDEX_BASE + (state.floatingPanels.byId[id]?.zIndex ?? 0);
	}
	function resolveOverlayZIndex(state, id) {
		return resolvePanelZIndex(state, id) + 1;
	}
	function selectIsOpen(state, id) {
		return state.floatingPanels.byId[id]?.isOpen ?? false;
	}
	function selectCorner(state, id) {
		return state.floatingPanels.byId[id]?.corner;
	}
	function selectPosition(state, id) {
		return state.floatingPanels.byId[id]?.position;
	}
	function selectSize(state, id) {
		return state.floatingPanels.byId[id]?.size;
	}
	function selectMinSize(state, id) {
		return state.floatingPanels.minSizeById[id];
	}
	function selectIsDraggable(state, id) {
		return state.floatingPanels.isDraggableById[id] ?? false;
	}
	function selectIsResizable(state, id) {
		return state.floatingPanels.isResizableById[id] ?? false;
	}
	function selectPanelTitle(state, id) {
		return state.floatingPanels.titlesById[id];
	}
	var selectOpenPanelIds = (0, _elementor_store.__createSelector)([(state) => state.floatingPanels.byId], (byId) => Object.entries(byId).filter(([, panel]) => panel.isOpen).sort(([, a], [, b]) => a.zIndex - b.zIndex).map(([id]) => id));

//#endregion
//#region packages/packages/core/editor-floating-panels/src/utils/corner-position.ts
	var DEFAULT_INSET_BLOCK_PX = 80;
	var DEFAULT_INSET_INLINE_PX = 24;
	var ACTIVE_INSETS = {
		"block-start-inline-start": ["insetInlineStart", "insetBlockStart"],
		"block-start-inline-end": ["insetInlineEnd", "insetBlockStart"],
		"block-end-inline-start": ["insetInlineStart", "insetBlockEnd"],
		"block-end-inline-end": ["insetInlineEnd", "insetBlockEnd"]
	};
	var CORNER_DEFAULTS = {
		"block-start-inline-start": {
			insetInlineStart: 24,
			insetBlockStart: 80
		},
		"block-start-inline-end": {
			insetInlineEnd: 24,
			insetBlockStart: 80
		},
		"block-end-inline-start": {
			insetInlineStart: 24,
			insetBlockEnd: 80
		},
		"block-end-inline-end": {
			insetInlineEnd: 24,
			insetBlockEnd: 80
		}
	};
	var EMPTY_POSITION = {
		insetBlockStart: 0,
		insetBlockEnd: 0,
		insetInlineStart: 0,
		insetInlineEnd: 0
	};
	function getActiveInsetKeys(corner) {
		return ACTIVE_INSETS[corner];
	}
	function usesInlineStart(corner) {
		return corner.endsWith("inline-start");
	}
	function usesBlockStart(corner) {
		return corner.startsWith("block-start");
	}
	function buildInitialPosition(corner, overrides) {
		const [inlineKey, blockKey] = getActiveInsetKeys(corner);
		const defaults = CORNER_DEFAULTS[corner];
		return {
			...EMPTY_POSITION,
			[inlineKey]: overrides?.[inlineKey] ?? defaults[inlineKey] ?? 0,
			[blockKey]: overrides?.[blockKey] ?? defaults[blockKey] ?? 0
		};
	}
	function positionToCssInsets(corner, position) {
		const [inlineKey, blockKey] = getActiveInsetKeys(corner);
		return {
			[inlineKey]: `${position[inlineKey]}px`,
			[blockKey]: `${position[blockKey]}px`
		};
	}
	function toStartAnchoredPosition(corner, position, size, viewport) {
		return {
			insetInlineStart: usesInlineStart(corner) ? position.insetInlineStart : viewport.width - position.insetInlineEnd - size.inlineSize,
			insetBlockStart: usesBlockStart(corner) ? position.insetBlockStart : viewport.height - position.insetBlockEnd - size.blockSize
		};
	}
	function fromStartAnchoredPosition(corner, startAnchored, size, viewport) {
		if (usesInlineStart(corner) && usesBlockStart(corner)) return {
			...EMPTY_POSITION,
			insetInlineStart: startAnchored.insetInlineStart,
			insetBlockStart: startAnchored.insetBlockStart
		};
		const position = { ...EMPTY_POSITION };
		if (usesInlineStart(corner)) {
			position.insetInlineStart = startAnchored.insetInlineStart;
			position.insetBlockEnd = viewport.height - startAnchored.insetBlockStart - size.blockSize;
		} else if (usesBlockStart(corner)) {
			position.insetInlineEnd = viewport.width - startAnchored.insetInlineStart - size.inlineSize;
			position.insetBlockStart = startAnchored.insetBlockStart;
		} else {
			position.insetInlineEnd = viewport.width - startAnchored.insetInlineStart - size.inlineSize;
			position.insetBlockEnd = viewport.height - startAnchored.insetBlockStart - size.blockSize;
		}
		return position;
	}
	function activePositionChanged(corner, before, after) {
		const [inlineKey, blockKey] = getActiveInsetKeys(corner);
		return before[inlineKey] !== after[inlineKey] || before[blockKey] !== after[blockKey];
	}
	function getDragBounds(size, viewport, sidePanelInlineSize, appBarHeight) {
		return {
			minInlineStart: sidePanelInlineSize,
			maxInlineStart: viewport.width - size.inlineSize,
			minInlineEnd: 0,
			maxInlineEnd: viewport.width - sidePanelInlineSize - size.inlineSize,
			minBlockStart: appBarHeight,
			maxBlockStart: viewport.height - size.blockSize,
			minBlockEnd: 0,
			maxBlockEnd: viewport.height - appBarHeight - size.blockSize
		};
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/store/slice.ts
	var DEFAULT_CORNER = "block-start-inline-start";
	var initialState = {
		byId: {},
		minSizeById: {},
		titlesById: {},
		isDraggableById: {},
		isResizableById: {},
		topZIndex: 0
	};
	var slice = (0, _elementor_store.__createSlice)({
		name: "floatingPanels",
		initialState,
		reducers: {
			register(state, action) {
				const { id, defaults, title, isDraggable, isResizable, persisted } = action.payload;
				state.minSizeById[id] = {
					inlineSize: defaults.minWidth,
					blockSize: defaults.minHeight
				};
				state.isDraggableById[id] = isDraggable ?? false;
				state.isResizableById[id] = isResizable ?? false;
				if (title !== void 0) state.titlesById[id] = title;
				if (state.byId[id]) return;
				const corner = defaults.corner ?? DEFAULT_CORNER;
				const canReusePersisted = persisted && persisted.corner === corner;
				state.byId[id] = canReusePersisted ? persisted : {
					isOpen: false,
					corner,
					position: buildInitialPosition(corner, defaults.initialPosition),
					size: {
						inlineSize: defaults.width,
						blockSize: defaults.height
					},
					zIndex: 0
				};
				if (persisted && persisted.zIndex > state.topZIndex) state.topZIndex = persisted.zIndex;
			},
			open(state, action) {
				const panel = state.byId[action.payload];
				if (panel) panel.isOpen = true;
			},
			close(state, action) {
				const panel = state.byId[action.payload];
				if (panel) panel.isOpen = false;
			},
			setPosition(state, action) {
				const panel = state.byId[action.payload.id];
				if (panel) panel.position = action.payload.position;
			},
			setSize(state, action) {
				const panel = state.byId[action.payload.id];
				if (panel) panel.size = action.payload.size;
			},
			bringToFront(state, action) {
				const panel = state.byId[action.payload];
				if (!panel) return;
				state.topZIndex += 1;
				panel.zIndex = state.topZIndex;
			}
		}
	});

//#endregion
//#region packages/packages/core/editor-floating-panels/src/hooks/use-floating-panel-actions.ts
	function useFloatingPanelActions(id) {
		const dispatch = (0, _elementor_store.__useDispatch)();
		const isOpen = (0, _elementor_store.__useSelector)((state) => selectIsOpen(state, id));
		const open = () => {
			dispatch(slice.actions.open(id));
			dispatch(slice.actions.bringToFront(id));
		};
		const close = () => dispatch(slice.actions.close(id));
		return {
			open,
			close,
			toggle: () => isOpen ? close() : open(),
			setPosition: (position) => dispatch(slice.actions.setPosition({
				id,
				position
			})),
			setSize: (size) => dispatch(slice.actions.setSize({
				id,
				size
			})),
			focus: () => dispatch(slice.actions.bringToFront(id))
		};
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/hooks/use-floating-panel-status.ts
	var selectStatus = (0, _elementor_store.__createSelector)([
		(state, id) => selectIsOpen(state, id),
		(state, id) => selectCorner(state, id),
		(state, id) => selectPosition(state, id),
		(state, id) => selectSize(state, id)
	], (isOpen, corner, position, size) => ({
		isOpen,
		corner,
		position,
		size
	}));
	function useFloatingPanelStatus(id) {
		return (0, _elementor_store.__useSelector)((state) => selectStatus(state, id));
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/location.ts
	var { inject: injectIntoFloatingPanels, useInjections: useFloatingPanelsInjections } = (0, _elementor_locations.createLocation)();

//#endregion
//#region packages/packages/core/editor-floating-panels/src/persistence.ts
	var PERSISTENCE_STORAGE_KEY = "elementor_floating_panels_state";
	var VALID_PANEL_CORNERS = /* @__PURE__ */ new Set([
		"block-start-inline-start",
		"block-start-inline-end",
		"block-end-inline-start",
		"block-end-inline-end"
	]);
	function encodePersistedState(state) {
		return JSON.stringify(state);
	}
	function decodePersistedState(raw) {
		if (!raw) return {};
		let parsed;
		try {
			parsed = JSON.parse(raw);
		} catch {
			return {};
		}
		if (typeof parsed !== "object" || parsed === null) return {};
		const result = {};
		for (const [id, value] of Object.entries(parsed)) if (isPanelState(value)) result[id] = value;
		return result;
	}
	function isPanelState(value) {
		if (typeof value !== "object" || value === null) return false;
		const v = value;
		if (typeof v.size !== "object" || v.size === null) return false;
		if (typeof v.position !== "object" || v.position === null) return false;
		const size = v.size;
		const position = v.position;
		return typeof v.isOpen === "boolean" && typeof v.zIndex === "number" && typeof v.corner === "string" && VALID_PANEL_CORNERS.has(v.corner) && typeof size.inlineSize === "number" && typeof size.blockSize === "number" && typeof position.insetInlineStart === "number" && typeof position.insetInlineEnd === "number" && typeof position.insetBlockStart === "number" && typeof position.insetBlockEnd === "number";
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/sync.ts
	var PERSIST_DEBOUNCE_MS = 250;
	var localStorageAdapter = {
		read: () => {
			try {
				return globalThis.localStorage?.getItem("elementor_floating_panels_state") ?? null;
			} catch {
				return null;
			}
		},
		write: (value) => {
			try {
				globalThis.localStorage?.setItem(PERSISTENCE_STORAGE_KEY, value);
			} catch {}
		}
	};
	var cachedPersistedState = {};
	var isSyncInitialized = false;
	var persistenceTimer = null;
	var persistenceUnsubscribe = null;
	var persistenceSession = 0;
	function isFloatingPanelsSyncInitialized() {
		return isSyncInitialized;
	}
	function sync(storage = localStorageAdapter) {
		isSyncInitialized = true;
		cachedPersistedState = decodePersistedState(storage.read());
		schedulePersistence(storage);
	}
	function getPersistedState(id) {
		return cachedPersistedState[id];
	}
	var STORE_READY_POLL_MS = 16;
	function clearPersistenceTimer() {
		if (persistenceTimer) {
			clearTimeout(persistenceTimer);
			persistenceTimer = null;
		}
	}
	function schedulePersistence(storage) {
		clearPersistenceTimer();
		persistenceUnsubscribe?.();
		persistenceUnsubscribe = null;
		const session = ++persistenceSession;
		const subscribe = () => {
			if (session !== persistenceSession) return;
			persistenceUnsubscribe = (0, _elementor_store.__subscribeWithSelector)((state) => state.floatingPanels.byId, (byId) => {
				clearPersistenceTimer();
				persistenceTimer = setTimeout(() => {
					if (session !== persistenceSession) return;
					cachedPersistedState = {
						...cachedPersistedState,
						...byId
					};
					storage.write(encodePersistedState(cachedPersistedState));
				}, PERSIST_DEBOUNCE_MS);
			});
		};
		const waitForStore = () => {
			if (session !== persistenceSession) return;
			if ((0, _elementor_store.__getStore)()) {
				subscribe();
				return;
			}
			setTimeout(waitForStore, STORE_READY_POLL_MS);
		};
		waitForStore();
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/api.ts
	function createFloatingPanel(declaration) {
		const persisted = isFloatingPanelsSyncInitialized() ? getPersistedState(declaration.id) : decodePersistedState(localStorageAdapter.read())[declaration.id];
		(0, _elementor_store.__dispatch)(slice.actions.register({
			id: declaration.id,
			title: declaration.title,
			isDraggable: declaration.isDraggable,
			isResizable: declaration.isResizable,
			defaults: declaration.defaults,
			persisted
		}));
		return {
			panel: declaration,
			useFloatingPanelStatus: () => useFloatingPanelStatus(declaration.id),
			useFloatingPanelActions: () => useFloatingPanelActions(declaration.id)
		};
	}
	function registerFloatingPanel(declaration) {
		injectIntoFloatingPanels({
			id: declaration.id,
			component: declaration.component
		});
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/components/external/floating-panel.tsx
	function FloatingPanel({ children }) {
		return /* @__PURE__ */ react.createElement(react.Fragment, null, children);
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/components/external/floating-panel-body.tsx
	function FloatingPanelBody(props) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			...props,
			sx: {
				flex: 1,
				overflowY: "auto",
				...props.sx ?? {}
			}
		});
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/components/external/floating-panel-footer.tsx
	function FloatingPanelFooter({ children, sx, ...props }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			...props,
			sx: {
				px: 2,
				py: 1.5,
				borderTop: 1,
				borderColor: "var(--e-a-border-color)",
				display: "flex",
				alignItems: "center",
				gap: 1,
				...sx ?? {}
			}
		}, children);
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/hooks/use-floating-panel-z-index.ts
	function useFloatingPanelZIndex(panelId) {
		return (0, _elementor_store.__useSelector)((state) => resolveOverlayZIndex(state, panelId));
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/utils/direction.ts
	function isRtl() {
		return (document?.documentElement?.dir ?? "").toLowerCase() === "rtl";
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/utils/clamp.ts
	function clamp(value, min, max) {
		return Math.min(Math.max(min, value), Math.max(min, max));
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/utils/drag-math.ts
	function physicalToLogicalDelta(delta, isRtl) {
		return {
			inlineDelta: isRtl ? -delta.dx : delta.dx,
			blockDelta: delta.dy
		};
	}
	function applyDragDelta(corner, position, delta, bounds) {
		const [inlineKey, blockKey] = getActiveInsetKeys(corner);
		const inlineDelta = usesInlineStart(corner) ? delta.inlineDelta : -delta.inlineDelta;
		const blockDelta = usesBlockStart(corner) ? delta.blockDelta : -delta.blockDelta;
		const inlineBounds = inlineKey === "insetInlineStart" ? {
			min: bounds.minInlineStart,
			max: bounds.maxInlineStart
		} : {
			min: bounds.minInlineEnd,
			max: bounds.maxInlineEnd
		};
		const blockBounds = blockKey === "insetBlockStart" ? {
			min: bounds.minBlockStart,
			max: bounds.maxBlockStart
		} : {
			min: bounds.minBlockEnd,
			max: bounds.maxBlockEnd
		};
		return {
			...position,
			[inlineKey]: clamp(position[inlineKey] + inlineDelta, inlineBounds.min, inlineBounds.max),
			[blockKey]: clamp(position[blockKey] + blockDelta, blockBounds.min, blockBounds.max)
		};
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/utils/viewport-bounds.ts
	var SIDE_PANEL_SELECTOR = "#elementor-panel";
	function getSidePanelInlineSize() {
		return document.querySelector(SIDE_PANEL_SELECTOR)?.getBoundingClientRect().width ?? 0;
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/hooks/use-floating-panel-drag.ts
	function useFloatingPanelDrag(id) {
		const sessionRef = (0, react.useRef)(null);
		const { corner, position, size } = useFloatingPanelStatus(id);
		const { setPosition } = useFloatingPanelActions(id);
		const onPointerDown = (0, react.useCallback)((event) => {
			if (!corner || !position || !size) return;
			event.currentTarget.setPointerCapture(event.pointerId);
			sessionRef.current = {
				pointerId: event.pointerId,
				startClientX: event.clientX,
				startClientY: event.clientY,
				startPosition: position,
				lastDispatchedPosition: position,
				bounds: getDragBounds(size, {
					width: window.innerWidth,
					height: window.innerHeight
				}, getSidePanelInlineSize(), 48),
				corner,
				isRtl: isRtl()
			};
		}, [
			corner,
			position,
			size
		]);
		const onPointerMove = (0, react.useCallback)((event) => {
			const session = sessionRef.current;
			if (!session || session.pointerId !== event.pointerId) return;
			const logical = physicalToLogicalDelta({
				dx: event.clientX - session.startClientX,
				dy: event.clientY - session.startClientY
			}, session.isRtl);
			const nextPosition = applyDragDelta(session.corner, session.startPosition, logical, session.bounds);
			if (activePositionChanged(session.corner, session.lastDispatchedPosition, nextPosition)) {
				setPosition(nextPosition);
				session.lastDispatchedPosition = nextPosition;
			}
		}, [setPosition]);
		const clearSession = (0, react.useCallback)((event) => {
			const session = sessionRef.current;
			if (!session || session.pointerId !== event.pointerId) return;
			sessionRef.current = null;
		}, []);
		return {
			onPointerDown,
			onPointerMove,
			onPointerUp: clearSession,
			onPointerCancel: clearSession
		};
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/components/internal/drag-handle.tsx
	function DragHandle({ panelId, children }) {
		const { onPointerDown, onPointerMove, onPointerUp, onPointerCancel } = useFloatingPanelDrag(panelId);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			role: "button",
			"aria-label": (0, _wordpress_i18n.__)("Drag to reposition", "elementor"),
			onPointerDown,
			onPointerMove,
			onPointerUp,
			onPointerCancel,
			sx: {
				cursor: "move",
				touchAction: "none",
				flex: 1
			}
		}, children);
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/components/external/floating-panel-header.tsx
	function HeaderAction({ icon: Icon, label, onClick, panelZIndex, disabled = false }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: label,
			placement: "top",
			PopperProps: { sx: { zIndex: panelZIndex } }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			component: "span",
			"aria-label": void 0
		}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: "small",
			color: "inherit",
			"aria-label": label,
			disabled,
			onClick: disabled ? void 0 : onClick,
			sx: {
				borderRadius: 0,
				p: 1
			}
		}, /* @__PURE__ */ react.createElement(Icon, null))));
	}
	function FloatingPanelHeader({ panelId, title, icon: Icon, actions, badge, titleVariant }) {
		const { close } = useFloatingPanelActions(panelId);
		const isDraggable = (0, _elementor_store.__useSelector)((state) => selectIsDraggable(state, panelId));
		const hasActions = Boolean(actions?.length);
		const panelZIndex = useFloatingPanelZIndex(panelId);
		const hasBadge = Boolean(badge);
		const titleContent = /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			alignItems: "center",
			justifyContent: hasBadge ? "flex-start" : "center",
			gap: 1,
			height: "100%",
			pl: hasBadge ? 2 : 0
		} }, Icon ? /* @__PURE__ */ react.createElement(Icon, null) : null, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			component: "h2",
			variant: titleVariant,
			sx: {
				textAlign: hasBadge ? "left" : "center",
				...!titleVariant && {
					fontSize: "13px",
					fontWeight: 400
				}
			}
		}, title), badge ? /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			label: badge,
			size: "tiny",
			variant: "standard"
		}) : null);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			alignItems: "stretch",
			borderBottom: 1,
			borderColor: "var(--e-a-border-color)",
			overflow: "visible"
		} }, hasActions ? /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			sx: {
				flexShrink: 0,
				overflow: "visible"
			}
		}, actions?.map((action) => /* @__PURE__ */ react.createElement(HeaderAction, {
			key: action.id,
			panelZIndex,
			...action
		}))) : null, isDraggable ? /* @__PURE__ */ react.createElement(DragHandle, { panelId }, titleContent) : /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { flex: 1 } }, titleContent), /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: "small",
			color: "inherit",
			"aria-label": (0, _wordpress_i18n.__)("Close panel", "elementor"),
			onClick: close,
			sx: {
				borderRadius: 0,
				p: 1
			}
		}, /* @__PURE__ */ react.createElement(_elementor_icons.XIcon, { fontSize: "small" })));
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/utils/resize-math.ts
	function applyInlineEndResize(size, inlineDelta, bounds) {
		return {
			inlineSize: clamp(size.inlineSize + inlineDelta, bounds.minInlineSize, bounds.maxInlineSize),
			blockSize: size.blockSize
		};
	}
	function applyBlockEndResize(size, blockDelta, bounds) {
		return {
			inlineSize: size.inlineSize,
			blockSize: clamp(size.blockSize + blockDelta, bounds.minBlockSize, bounds.maxBlockSize)
		};
	}
	function applyInlineStartResize(position, size, inlineDelta, bounds) {
		const anchorInlineEnd = position.insetInlineStart + size.inlineSize;
		const lowBound = Math.max(bounds.minInlineStart, anchorInlineEnd - bounds.maxInlineSize);
		const highBound = anchorInlineEnd - bounds.minInlineSize;
		const nextInlineStart = clamp(position.insetInlineStart + inlineDelta, lowBound, highBound);
		return {
			position: {
				...position,
				insetInlineStart: nextInlineStart
			},
			size: {
				...size,
				inlineSize: anchorInlineEnd - nextInlineStart
			}
		};
	}
	function applyBlockStartResize(position, size, blockDelta, bounds) {
		const anchorBlockEnd = position.insetBlockStart + size.blockSize;
		const lowBound = Math.max(bounds.minBlockStart, anchorBlockEnd - bounds.maxBlockSize);
		const highBound = anchorBlockEnd - bounds.minBlockSize;
		const nextBlockStart = clamp(position.insetBlockStart + blockDelta, lowBound, highBound);
		return {
			position: {
				...position,
				insetBlockStart: nextBlockStart
			},
			size: {
				...size,
				blockSize: anchorBlockEnd - nextBlockStart
			}
		};
	}
	function applyResize(direction, position, size, inlineDelta, blockDelta, bounds) {
		if (direction === "inline-end") return {
			position,
			size: applyInlineEndResize(size, inlineDelta, bounds)
		};
		if (direction === "block-end") return {
			position,
			size: applyBlockEndResize(size, blockDelta, bounds)
		};
		if (direction === "inline-start") return applyInlineStartResize(position, size, inlineDelta, bounds);
		if (direction === "block-start") return applyBlockStartResize(position, size, blockDelta, bounds);
		let next = {
			position,
			size
		};
		if (direction.includes("inline-start")) next = applyInlineStartResize(next.position, next.size, inlineDelta, bounds);
		else next = {
			position: next.position,
			size: applyInlineEndResize(next.size, inlineDelta, bounds)
		};
		if (direction.includes("block-start")) next = applyBlockStartResize(next.position, next.size, blockDelta, bounds);
		else next = {
			position: next.position,
			size: applyBlockEndResize(next.size, blockDelta, bounds)
		};
		return next;
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/hooks/use-floating-panel-resize.ts
	function getResizeBounds(corner, position, currentSize, minSize) {
		const startAnchored = toStartAnchoredPosition(corner, position, currentSize, {
			width: window.innerWidth,
			height: window.innerHeight
		});
		return {
			minBlockSize: minSize.blockSize,
			maxBlockSize: window.innerHeight - startAnchored.insetBlockStart,
			minInlineSize: minSize.inlineSize,
			maxInlineSize: window.innerWidth - startAnchored.insetInlineStart,
			minInlineStart: getSidePanelInlineSize(),
			minBlockStart: 48
		};
	}
	function usePanelResizeInteraction(id) {
		const sessionRef = (0, react.useRef)(null);
		const { corner, position, size } = useFloatingPanelStatus(id);
		const minSize = (0, _elementor_store.__useSelector)((state) => selectMinSize(state, id));
		const { setPosition, setSize } = useFloatingPanelActions(id);
		const onPointerDown = (0, react.useCallback)((direction, event) => {
			if (!corner || !position || !size || !minSize) return;
			event.currentTarget.setPointerCapture(event.pointerId);
			sessionRef.current = {
				pointerId: event.pointerId,
				direction,
				startClientX: event.clientX,
				startClientY: event.clientY,
				startPosition: position,
				startSize: size,
				lastPosition: position,
				lastSize: size,
				bounds: getResizeBounds(corner, position, size, minSize),
				corner,
				isRtl: isRtl()
			};
		}, [
			corner,
			position,
			size,
			minSize
		]);
		const onPointerMove = (0, react.useCallback)((event) => {
			const session = sessionRef.current;
			if (!session || session.pointerId !== event.pointerId) return;
			const logical = physicalToLogicalDelta({
				dx: event.clientX - session.startClientX,
				dy: event.clientY - session.startClientY
			}, session.isRtl);
			const viewport = {
				width: window.innerWidth,
				height: window.innerHeight
			};
			const startAnchoredPosition = toStartAnchoredPosition(session.corner, session.startPosition, session.startSize, viewport);
			const resizeInput = {
				...session.startPosition,
				...startAnchoredPosition
			};
			const next = applyResize(session.direction, resizeInput, session.startSize, logical.inlineDelta, logical.blockDelta, session.bounds);
			const nextPosition = fromStartAnchoredPosition(session.corner, {
				insetBlockStart: next.position.insetBlockStart,
				insetInlineStart: next.position.insetInlineStart
			}, next.size, viewport);
			if (activePositionChanged(session.corner, session.lastPosition, nextPosition)) {
				setPosition(nextPosition);
				session.lastPosition = nextPosition;
			}
			if (next.size.inlineSize !== session.lastSize.inlineSize || next.size.blockSize !== session.lastSize.blockSize) {
				setSize(next.size);
				session.lastSize = next.size;
			}
		}, [setPosition, setSize]);
		const clearSession = (0, react.useCallback)((event) => {
			const session = sessionRef.current;
			if (!session || session.pointerId !== event.pointerId) return;
			sessionRef.current = null;
		}, []);
		return { getResizeHandleProps: (0, react.useCallback)((direction) => {
			return {
				onPointerDown: (event) => onPointerDown(direction, event),
				onPointerMove,
				onPointerUp: clearSession,
				onPointerCancel: clearSession
			};
		}, [
			onPointerDown,
			onPointerMove,
			clearSession
		]) };
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/components/internal/corner-resize-handle.tsx
	var HANDLE_SIZE_PX = 8;
	var CORNER_POSITION = {
		"block-start-inline-start": {
			insetBlockStart: 0,
			insetInlineStart: 0
		},
		"block-start-inline-end": {
			insetBlockStart: 0,
			insetInlineEnd: 0
		},
		"block-end-inline-start": {
			insetBlockEnd: 0,
			insetInlineStart: 0
		},
		"block-end-inline-end": {
			insetBlockEnd: 0,
			insetInlineEnd: 0
		}
	};
	var LTR_CURSORS = {
		"block-start-inline-start": "nwse-resize",
		"block-start-inline-end": "nesw-resize",
		"block-end-inline-start": "nesw-resize",
		"block-end-inline-end": "nwse-resize"
	};
	var RTL_CURSORS = {
		"block-start-inline-start": "nesw-resize",
		"block-start-inline-end": "nwse-resize",
		"block-end-inline-start": "nwse-resize",
		"block-end-inline-end": "nesw-resize"
	};
	function CornerResizeHandle({ corner, onPointerDown, onPointerMove, onPointerUp, onPointerCancel }) {
		const cursor = isRtl() ? RTL_CURSORS[corner] : LTR_CURSORS[corner];
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			"data-resize-corner": corner,
			"aria-hidden": "true",
			onPointerDown,
			onPointerMove,
			onPointerUp,
			onPointerCancel,
			sx: {
				position: "absolute",
				touchAction: "none",
				zIndex: 2,
				inlineSize: `${HANDLE_SIZE_PX}px`,
				blockSize: `${HANDLE_SIZE_PX}px`,
				cursor,
				...CORNER_POSITION[corner]
			}
		});
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/components/internal/resize-handle.tsx
	var HANDLE_THICKNESS_PX = 8;
	var EDGE_SX = {
		"inline-start": {
			insetBlockStart: 0,
			insetBlockEnd: 0,
			insetInlineStart: 0,
			inlineSize: `${HANDLE_THICKNESS_PX}px`,
			cursor: "ew-resize"
		},
		"inline-end": {
			insetBlockStart: 0,
			insetBlockEnd: 0,
			insetInlineEnd: 0,
			inlineSize: `${HANDLE_THICKNESS_PX}px`,
			cursor: "ew-resize"
		},
		"block-start": {
			insetInlineStart: 0,
			insetInlineEnd: 0,
			insetBlockStart: 0,
			blockSize: `${HANDLE_THICKNESS_PX}px`,
			cursor: "ns-resize"
		},
		"block-end": {
			insetInlineStart: 0,
			insetInlineEnd: 0,
			insetBlockEnd: 0,
			blockSize: `${HANDLE_THICKNESS_PX}px`,
			cursor: "ns-resize"
		}
	};
	function ResizeHandle({ edge, onPointerDown, onPointerMove, onPointerUp, onPointerCancel }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			"data-resize-edge": edge,
			"aria-hidden": "true",
			onPointerDown,
			onPointerMove,
			onPointerUp,
			onPointerCancel,
			sx: {
				position: "absolute",
				touchAction: "none",
				zIndex: 1,
				...EDGE_SX[edge]
			}
		});
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/components/internal/panel-window.tsx
	var FADE_ENTER_MS = 225;
	var FADE_EXIT_MS = 195;
	var RESIZE_EDGES = [
		"inline-start",
		"inline-end",
		"block-start",
		"block-end"
	];
	var RESIZE_CORNERS = [
		"block-start-inline-start",
		"block-start-inline-end",
		"block-end-inline-start",
		"block-end-inline-end"
	];
	function PanelResizeHandles({ panelId }) {
		const { getResizeHandleProps } = usePanelResizeInteraction(panelId);
		return /* @__PURE__ */ react.createElement(react.Fragment, null, RESIZE_EDGES.map((edge) => /* @__PURE__ */ react.createElement(ResizeHandle, {
			key: edge,
			edge,
			...getResizeHandleProps(edge)
		})), RESIZE_CORNERS.map((corner) => /* @__PURE__ */ react.createElement(CornerResizeHandle, {
			key: corner,
			corner,
			...getResizeHandleProps(corner)
		})));
	}
	function PanelWindow({ panelId, corner, position, size, title, zIndex, visible, onFocus, children }) {
		const isResizable = (0, _elementor_store.__useSelector)((state) => selectIsResizable(state, panelId));
		return /* @__PURE__ */ react.createElement(_elementor_ui.Fade, {
			in: visible,
			timeout: {
				enter: FADE_ENTER_MS,
				exit: FADE_EXIT_MS
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Paper, {
			component: "aside",
			"data-floating-panel": panelId,
			elevation: 0,
			"aria-label": title || panelId,
			"aria-hidden": !visible,
			inert: !visible ? "" : void 0,
			onMouseDown: onFocus,
			onFocusCapture: onFocus,
			sx: {
				position: "fixed",
				...positionToCssInsets(corner, position),
				inlineSize: `${size.inlineSize}px`,
				blockSize: `${size.blockSize}px`,
				zIndex,
				display: "flex",
				flexDirection: "column",
				pointerEvents: visible ? "auto" : "none",
				bgcolor: "var(--e-a-bg-default)",
				color: "var(--e-a-color-txt)",
				border: "var(--e-a-border)",
				boxShadow: `0 2px 20px 0 rgba(0, 0, 0, 0.1)`
			}
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.ThemeProvider, null, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			flexDirection: "column",
			height: "100%"
		} }, children)), isResizable && /* @__PURE__ */ react.createElement(PanelResizeHandles, { panelId })));
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/components/internal/host.tsx
	function FloatingPanelsHost() {
		const openIds = (0, _elementor_store.__useSelector)(selectOpenPanelIds);
		const injections = useFloatingPanelsInjections();
		const dispatch = (0, _elementor_store.__useDispatch)();
		const isPreviewMode = (0, _elementor_editor_v1_adapters.useEditMode)() === "preview";
		const declarationById = (0, react.useMemo)(() => {
			return Object.fromEntries(injections.map((inj) => [inj.id, inj]));
		}, [injections]);
		return /* @__PURE__ */ react.createElement(react.Fragment, null, openIds.map((id) => {
			const declaration = declarationById[id];
			if (!declaration) return null;
			const Component = declaration.component;
			return /* @__PURE__ */ react.createElement(HostedPanel, {
				key: id,
				id,
				visible: !isPreviewMode,
				onFocus: () => dispatch(slice.actions.bringToFront(id))
			}, /* @__PURE__ */ react.createElement(Component, null));
		}));
	}
	function HostedPanel({ id, children, onFocus, visible }) {
		const panel = (0, _elementor_store.__useSelector)((state) => selectPanelState(state, id));
		const title = (0, _elementor_store.__useSelector)((state) => selectPanelTitle(state, id));
		const zIndex = (0, _elementor_store.__useSelector)((state) => resolvePanelZIndex(state, id));
		if (!panel) return null;
		return /* @__PURE__ */ react.createElement(PanelWindow, {
			panelId: id,
			corner: panel.corner,
			position: panel.position,
			size: panel.size,
			zIndex,
			visible,
			onFocus,
			title
		}, children);
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/init.ts
	function init() {
		sync();
		(0, _elementor_store.__registerSlice)(slice);
		(0, _elementor_editor.injectIntoTop)({
			id: "floating-panels",
			component: FloatingPanelsHost
		});
	}

//#endregion
//#region packages/packages/core/editor-floating-panels/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		FloatingPanel: () => FloatingPanel,
		FloatingPanelBody: () => FloatingPanelBody,
		FloatingPanelFooter: () => FloatingPanelFooter,
		FloatingPanelHeader: () => FloatingPanelHeader,
		createFloatingPanel: () => createFloatingPanel,
		init: () => init,
		registerFloatingPanel: () => registerFloatingPanel,
		useFloatingPanelActions: () => useFloatingPanelActions,
		useFloatingPanelStatus: () => useFloatingPanelStatus,
		useFloatingPanelZIndex: () => useFloatingPanelZIndex
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorFloatingPanels = src_exports;

//#endregion
})(elementorV2.store, elementorV2.locations, React, elementorV2.ui, elementorV2.icons, wp.i18n, elementorV2.editor, elementorV2.editorV1Adapters, elementorV2.editorUi);
window.elementorV2.editorFloatingPanels?.init?.();
//# sourceMappingURL=editor-floating-panels.js.map