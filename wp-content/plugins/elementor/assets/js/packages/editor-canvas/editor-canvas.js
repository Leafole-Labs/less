(function(_elementor_editor_v1_adapters, _elementor_editor_mcp, _elementor_http_client, _elementor_editor, react, _elementor_editor_documents, _elementor_editor_styles_repository, _elementor_utils, _elementor_editor_elements, _elementor_ui, react_dom, _elementor_editor_interactions, _elementor_editor_responsive, _elementor_editor_styles, _elementor_editor_props, _elementor_editor_notifications, _wordpress_i18n, _elementor_wp_media, _elementor_editor_controls, _elementor_twing, _elementor_schema) {

//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp$4 = Object.defineProperty;
	var __name = (target, value) => __defProp$4(target, "name", {
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
			__defProp$4(target, name, {
				get: all[name],
				enumerable: true
			});
		}
		if (!no_symbols) {
			__defProp$4(target, Symbol.toStringTag, { value: "Module" });
		}
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) {
					__defProp$4(to, key, {
						get: ((k) => from[k]).bind(null, key),
						enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
					});
				}
			}
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp$4(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));

//#endregion
let react$1 = __toESM(react, 1);
react = __toESM(react);
react_dom = __toESM(react_dom, 1);

//#region packages/packages/core/editor-canvas/src/mcp/resources/widgets-schema-resource.ts
	var CANVAS_SERVER_NAME = "editor-canvas";
	var WIDGET_SCHEMA_URI = "elementor://widgets/schema/{widgetType}";
	var WIDGET_SCHEMA_FULL_URI = `${CANVAS_SERVER_NAME}_${WIDGET_SCHEMA_URI}`;
	var BEST_PRACTICES_URI$1 = "elementor://style/best-practices";
	var BEST_PRACTICES_FULL_URI = `${CANVAS_SERVER_NAME}_${BEST_PRACTICES_URI$1}`;
	var MCP_PROXY_URL$4 = "elementor/v1/mcp-proxy";
	var listWidgetTypes = async () => {
		const { data } = await (0, _elementor_http_client.httpService)().post(MCP_PROXY_URL$4, {
			tool: "list-widget-schemas",
			input: { summary: true }
		});
		return (data.data?.widgets ?? []).map((widget) => widget.type);
	};
	var fetchWidgetSchema = async (widgetType) => {
		const { data } = await (0, _elementor_http_client.httpService)().post(MCP_PROXY_URL$4, {
			tool: "get-widget-schema",
			input: { widget_type: widgetType }
		});
		return data.data ?? {};
	};
	var initWidgetsSchemaResource = (reg) => {
		const { resource } = reg;
		resource("widget-schema-by-type", new _elementor_editor_mcp.ResourceTemplate(WIDGET_SCHEMA_URI, { list: async () => {
			return { resources: (await listWidgetTypes()).map((widgetType) => ({
				uri: `elementor://widgets/schema/${widgetType}`,
				name: "Widget schema for " + widgetType
			})) };
		} }), { description: "PropType schema for the specified widget type" }, async (uri, variables) => {
			const widgetType = typeof variables.widgetType === "string" ? variables.widgetType : variables.widgetType?.[0];
			if (!widgetType) throw new Error("No widget type provided.");
			const schema = await fetchWidgetSchema(widgetType);
			return { contents: [{
				uri: uri.toString(),
				mimeType: "application/json",
				text: JSON.stringify(schema)
			}] };
		});
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/resources/breakpoints-resource.ts
	var BREAKPOINTS_SCHEMA_URI = "elementor://breakpoints/list";
	var BREAKPOINTS_SCHEMA_FULL_URI = `${CANVAS_SERVER_NAME}_${BREAKPOINTS_SCHEMA_URI}`;
	var initBreakpointsResource = (reg) => {
		const { resource, sendResourceUpdated } = reg;
		const getBreakpointsList = () => {
			const { breakpoints } = window.elementor?.config?.responsive || {};
			if (!breakpoints) return [];
			return Object.values(breakpoints).filter((bp) => bp.is_enabled).map((bp) => {
				const { direction: constraint, label, value } = bp;
				return {
					label,
					constraint,
					value
				};
			});
		};
		const buildResourceResponse = () => ({ contents: [{
			uri: BREAKPOINTS_SCHEMA_URI,
			mimeType: "application/json",
			text: JSON.stringify(getBreakpointsList())
		}] });
		resource("breakpoints ", BREAKPOINTS_SCHEMA_URI, { description: "Breakpoints list." }, () => {
			return buildResourceResponse();
		});
		window.addEventListener((0, _elementor_editor_v1_adapters.v1ReadyEvent)().name, () => {
			sendResourceUpdated({
				uri: BREAKPOINTS_SCHEMA_URI,
				...buildResourceResponse()
			});
		});
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/utils/convert-css-to-atomic.ts
	var CSS_TO_ATOMIC_URL = "elementor/v1/css-to-atomic";
	var SINGLE_BLOCK_KEY = "default";
	var convertBlocks = async (blocks) => {
		const { data } = await (0, _elementor_http_client.httpService)().post(CSS_TO_ATOMIC_URL, { blocks });
		return data.data;
	};
	var convertStyleBlocksToAtomic = async (styleByName) => convertBlocks(styleByName);
	var convertCssToAtomic = async (style) => {
		return (await convertStyleBlocksToAtomic({ [SINGLE_BLOCK_KEY]: style }))[SINGLE_BLOCK_KEY];
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/components/classes-rename.tsx
	var ClassesRename = () => {
		(0, react.useEffect)(() => {
			const unsubscribe = subscribeToStylesRepository();
			return () => {
				unsubscribe();
			};
		}, []);
		return null;
	};
	var subscribeToStylesRepository = () => {
		return _elementor_editor_styles_repository.stylesRepository.subscribe((previous, current) => {
			if (!previous || !current) return;
			Object.keys(current).forEach((id) => {
				if (!(previous[id] && (0, _elementor_utils.hash)(previous[id]) !== (0, _elementor_utils.hash)(current[id]))) return;
				const previousStyle = previous[id];
				const currentStyle = current[id];
				if (previousStyle.label !== currentStyle.label) renameClass(previousStyle.label, currentStyle.label);
			});
		});
	};
	var renameClass = (oldClassName, newClassName) => {
		Object.values((0, _elementor_editor_documents.getV1DocumentsManager)().documents).forEach((document) => {
			document.container.view?.el?.querySelectorAll(`.elementor .${oldClassName}`).forEach((element) => {
				element.classList.replace(oldClassName, newClassName);
			});
		});
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/hooks/use-element-rect.ts
	function useElementRect(element) {
		const [rect, setRect] = (0, react.useState)(new DOMRect(0, 0, 0, 0));
		const onChange = (0, _elementor_utils.throttle)(() => {
			setRect(element?.getBoundingClientRect() ?? new DOMRect(0, 0, 0, 0));
		}, 20, true);
		useScrollListener({
			element,
			onChange
		});
		useResizeListener({
			element,
			onChange
		});
		useMutationsListener({
			element,
			onChange
		});
		(0, react.useEffect)(() => () => {
			onChange.cancel();
		}, [onChange]);
		return rect;
	}
	function useScrollListener({ element, onChange }) {
		(0, react.useEffect)(() => {
			if (!element) return;
			const win = element.ownerDocument?.defaultView;
			win?.addEventListener("scroll", onChange, { passive: true });
			return () => {
				win?.removeEventListener("scroll", onChange);
			};
		}, [element, onChange]);
	}
	function useResizeListener({ element, onChange }) {
		(0, react.useEffect)(() => {
			if (!element) return;
			const resizeObserver = new ResizeObserver(onChange);
			resizeObserver.observe(element);
			const win = element.ownerDocument?.defaultView;
			win?.addEventListener("resize", onChange, { passive: true });
			return () => {
				resizeObserver.disconnect();
				win?.removeEventListener("resize", onChange);
			};
		}, [element, onChange]);
	}
	function useMutationsListener({ element, onChange }) {
		(0, react.useEffect)(() => {
			if (!element) return;
			const mutationObserver = new MutationObserver(onChange);
			mutationObserver.observe(element, {
				childList: true,
				subtree: true
			});
			return () => {
				mutationObserver.disconnect();
			};
		}, [element, onChange]);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/utils/grid-outline-utils.ts
	function toGridTracks(computedStyle) {
		return {
			columns: parseTrackList(computedStyle.gridTemplateColumns),
			rows: parseTrackList(computedStyle.gridTemplateRows),
			columnGap: resolveGapPx(computedStyle.columnGap, computedStyle.width),
			rowGap: resolveGapPx(computedStyle.rowGap, computedStyle.height),
			padding: {
				top: toPx(computedStyle.paddingTop),
				right: toPx(computedStyle.paddingRight),
				bottom: toPx(computedStyle.paddingBottom),
				left: toPx(computedStyle.paddingLeft)
			},
			borderColor: computedStyle.getPropertyValue("--e-a-border-color-bold").trim()
		};
	}
	function computeCellRects(tracks, width, height) {
		const { columns, rows, columnGap, rowGap, padding } = tracks;
		const hasColumns = columns.length > 0;
		const hasRows = rows.length > 0;
		if (!hasColumns && !hasRows) return [];
		const columnSegments = hasColumns ? computeTrackSegments(columns, columnGap, padding.left) : [{
			start: padding.left,
			size: width - padding.left - padding.right
		}];
		const rowSegments = hasRows ? computeTrackSegments(rows, rowGap, padding.top) : [{
			start: padding.top,
			size: height - padding.top - padding.bottom
		}];
		const cells = [];
		for (const row of rowSegments) for (const column of columnSegments) cells.push({
			x: column.start,
			y: row.start,
			width: column.size,
			height: row.size
		});
		return cells;
	}
	function computeGridLines(tracks, width, height) {
		const { columns, rows, columnGap, rowGap, padding } = tracks;
		const hasColumns = columns.length > 0;
		const hasRows = rows.length > 0;
		if (!hasColumns && !hasRows) return {
			vertical: [],
			horizontal: []
		};
		const columnSegments = hasColumns ? computeTrackSegments(columns, columnGap, padding.left) : [{
			start: padding.left,
			size: width - padding.left - padding.right
		}];
		const rowSegments = hasRows ? computeTrackSegments(rows, rowGap, padding.top) : [{
			start: padding.top,
			size: height - padding.top - padding.bottom
		}];
		const xs = uniqueSorted(columnSegments.flatMap((s) => [s.start, s.start + s.size]));
		const ys = uniqueSorted(rowSegments.flatMap((s) => [s.start, s.start + s.size]));
		const yTop = ys[0];
		const yBottom = ys[ys.length - 1];
		const xLeft = xs[0];
		const xRight = xs[xs.length - 1];
		return {
			vertical: xs.map((x) => ({
				x1: x,
				y1: yTop,
				x2: x,
				y2: yBottom
			})),
			horizontal: ys.map((y) => ({
				x1: xLeft,
				y1: y,
				x2: xRight,
				y2: y
			}))
		};
	}
	function uniqueSorted(values) {
		return Array.from(new Set(values)).sort((a, b) => a - b);
	}
	function computeTrackSegments(sizes, gap, offset) {
		const segments = [];
		let cursor = offset;
		for (let i = 0; i < sizes.length; i++) {
			segments.push({
				start: cursor,
				size: sizes[i]
			});
			cursor += sizes[i];
			if (i < sizes.length - 1) cursor += gap;
		}
		return segments;
	}
	function snapToHalfPixel(value) {
		return Math.round(value) + .5;
	}
	function parseTrackList(value) {
		if (!value || value === "none") return [];
		return value.trim().split(/\s+/).map(toPx).filter((n) => n > 0);
	}
	function toPx(value) {
		const parsed = parseFloat(value);
		return Number.isFinite(parsed) ? parsed : 0;
	}
	function resolveGapPx(value, referenceSize) {
		if (value.trim().endsWith("%")) {
			const percent = parseFloat(value);
			const reference = parseFloat(referenceSize);
			return Number.isFinite(percent) && Number.isFinite(reference) ? percent / 100 * reference : 0;
		}
		return toPx(value);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/hooks/use-grid-children.ts
	function useGridChildren(element) {
		const [signal, setSignal] = (0, react.useState)(0);
		(0, react.useEffect)(() => {
			if (!element) return;
			const bump = () => setSignal((previous) => previous + 1);
			const resizeObserver = new ResizeObserver(bump);
			const observed = /* @__PURE__ */ new Set();
			const syncChildren = () => {
				for (const child of Array.from(element.children)) if (!observed.has(child)) {
					resizeObserver.observe(child);
					observed.add(child);
				}
				for (const child of observed) if (child.parentElement !== element) {
					resizeObserver.unobserve(child);
					observed.delete(child);
				}
			};
			syncChildren();
			const mutationObserver = new MutationObserver(() => {
				syncChildren();
				bump();
			});
			mutationObserver.observe(element, { childList: true });
			return () => {
				mutationObserver.disconnect();
				resizeObserver.disconnect();
				observed.clear();
			};
		}, [element]);
		return signal;
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/hooks/use-grid-tracks.ts
	var EMPTY = {
		columns: [],
		rows: [],
		columnGap: 0,
		rowGap: 0,
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		},
		borderColor: ""
	};
	var DEVICE_MODE_CHANGE_EVENT = "elementor/device-mode/change";
	function useGridTracks(element, rect) {
		const [tracks, setTracks] = (0, react.useState)(EMPTY);
		const trigger = (0, _elementor_editor_v1_adapters.__privateUseListenTo)([(0, _elementor_editor_v1_adapters.windowEvent)(_elementor_editor_elements.ELEMENT_STYLE_CHANGE_EVENT), (0, _elementor_editor_v1_adapters.windowEvent)(DEVICE_MODE_CHANGE_EVENT)], () => ({}));
		const childrenTrigger = useGridChildren(element);
		(0, react.useEffect)(() => {
			const previewWindow = element?.ownerDocument?.defaultView;
			if (!element || !previewWindow) {
				setTracks(EMPTY);
				return;
			}
			const frame = previewWindow.requestAnimationFrame(() => {
				setTracks(toGridTracks(previewWindow.getComputedStyle(element)));
			});
			return () => {
				previewWindow.cancelAnimationFrame(frame);
			};
		}, [
			element,
			rect.width,
			rect.height,
			trigger,
			childrenTrigger
		]);
		return tracks;
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/utils/find-first-empty-cell.ts
	function findFirstEmptyCell(element, columnCount, rowCount) {
		if (!element || columnCount === 0 || rowCount === 0) return null;
		const previewWindow = element.ownerDocument?.defaultView;
		if (!previewWindow) return null;
		const flowsByColumn = previewWindow.getComputedStyle(element).gridAutoFlow.trim().startsWith("column");
		const matrix = Array.from({ length: rowCount }, () => new Array(columnCount).fill(false));
		const explicit = [];
		const autoPlaced = [];
		for (const child of Array.from(element.children)) {
			if (!child.classList.contains("elementor-element")) continue;
			const style = previewWindow.getComputedStyle(child);
			if (style.display === "none") continue;
			const col = resolvePlacement(style.gridColumnStart, style.gridColumnEnd);
			const row = resolvePlacement(style.gridRowStart, style.gridRowEnd);
			if (col.start !== null || row.start !== null) explicit.push({
				col: col.start,
				colSpan: col.span,
				row: row.start,
				rowSpan: row.span
			});
			else autoPlaced.push({
				colSpan: col.span,
				rowSpan: row.span
			});
		}
		for (const child of explicit) fillMatrix(matrix, child.col ?? 0, child.row ?? 0, child.colSpan, child.rowSpan);
		for (const child of autoPlaced) {
			const slot = findNextFreeSlot(matrix, child.colSpan, child.rowSpan, flowsByColumn);
			if (slot) fillMatrix(matrix, slot.col, slot.row, child.colSpan, child.rowSpan);
		}
		return scanFirstEmpty(matrix, flowsByColumn);
	}
	function resolvePlacement(startRaw, endRaw) {
		const start = parseLineValue(startRaw);
		const end = parseLineValue(endRaw);
		if (typeof start === "number") {
			const zeroIndexedStart = start - 1;
			if (typeof end === "number") return {
				start: zeroIndexedStart,
				span: Math.max(1, end - start)
			};
			if (isSpan(end)) return {
				start: zeroIndexedStart,
				span: end.n
			};
			return {
				start: zeroIndexedStart,
				span: 1
			};
		}
		if (isSpan(start)) {
			if (typeof end === "number") {
				const zeroIndexedStart = end - 1 - start.n;
				return {
					start: zeroIndexedStart >= 0 ? zeroIndexedStart : null,
					span: start.n
				};
			}
			return {
				start: null,
				span: start.n
			};
		}
		if (typeof end === "number") {
			const zeroIndexedStart = end - 2;
			return {
				start: zeroIndexedStart >= 0 ? zeroIndexedStart : null,
				span: 1
			};
		}
		if (isSpan(end)) return {
			start: null,
			span: end.n
		};
		return {
			start: null,
			span: 1
		};
	}
	function parseLineValue(raw) {
		const trimmed = raw.trim();
		if (trimmed === "" || trimmed === "auto") return "auto";
		const spanMatch = trimmed.match(/^span\s+(\d+)$/);
		if (spanMatch) {
			const n = parseInt(spanMatch[1], 10);
			return {
				kind: "span",
				n: Math.max(1, n)
			};
		}
		const parsed = parseInt(trimmed, 10);
		if (Number.isFinite(parsed) && parsed > 0) return parsed;
		return "auto";
	}
	function isSpan(value) {
		return typeof value === "object" && value !== null && "kind" in value && value.kind === "span";
	}
	function fillMatrix(matrix, col, row, colSpan, rowSpan) {
		const rows = matrix.length;
		const cols = rows > 0 ? matrix[0].length : 0;
		const startRow = Math.max(0, row);
		const startCol = Math.max(0, col);
		const endRow = Math.min(rows, row + rowSpan);
		const endCol = Math.min(cols, col + colSpan);
		for (let r = startRow; r < endRow; r++) for (let c = startCol; c < endCol; c++) matrix[r][c] = true;
	}
	function findNextFreeSlot(matrix, colSpan, rowSpan, flowsByColumn) {
		const rows = matrix.length;
		const maxCol = (rows > 0 ? matrix[0].length : 0) - colSpan;
		const maxRow = rows - rowSpan;
		if (maxCol < 0 || maxRow < 0) return null;
		if (flowsByColumn) {
			for (let col = 0; col <= maxCol; col++) for (let row = 0; row <= maxRow; row++) if (canFit(matrix, col, row, colSpan, rowSpan)) return {
				row,
				col
			};
		} else for (let row = 0; row <= maxRow; row++) for (let col = 0; col <= maxCol; col++) if (canFit(matrix, col, row, colSpan, rowSpan)) return {
			row,
			col
		};
		return null;
	}
	function canFit(matrix, col, row, colSpan, rowSpan) {
		for (let r = row; r < row + rowSpan; r++) for (let c = col; c < col + colSpan; c++) if (matrix[r][c]) return false;
		return true;
	}
	function scanFirstEmpty(matrix, flowsByColumn) {
		const rows = matrix.length;
		const cols = rows > 0 ? matrix[0].length : 0;
		if (flowsByColumn) {
			for (let col = 0; col < cols; col++) for (let row = 0; row < rows; row++) if (!matrix[row][col]) return {
				row,
				col
			};
		} else for (let row = 0; row < rows; row++) for (let col = 0; col < cols; col++) if (!matrix[row][col]) return {
			row,
			col
		};
		return null;
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/components/grid-outline/grid-empty-cell-positioner.tsx
	var CSS_VAR_ROW = "--e-grid-empty-cell-row";
	var CSS_VAR_COL = "--e-grid-empty-cell-col";
	var CSS_VAR_VISIBILITY = "--e-grid-empty-cell-visibility";
	var clearGridEmptyCellStyles = (target) => {
		target.style.removeProperty(CSS_VAR_ROW);
		target.style.removeProperty(CSS_VAR_COL);
		target.style.removeProperty(CSS_VAR_VISIBILITY);
	};
	var GridEmptyCellPositioner = ({ element }) => {
		const tracks = useGridTracks(element, useElementRect(element));
		(0, react.useEffect)(() => {
			if (!element) return;
			const firstEmpty = findFirstEmptyCell(element, tracks.columns.length, tracks.rows.length);
			if (!firstEmpty) {
				element.style.removeProperty(CSS_VAR_ROW);
				element.style.removeProperty(CSS_VAR_COL);
				element.style.setProperty(CSS_VAR_VISIBILITY, "hidden");
				return () => clearGridEmptyCellStyles(element);
			}
			element.style.setProperty(CSS_VAR_ROW, String(firstEmpty.row + 1));
			element.style.setProperty(CSS_VAR_COL, String(firstEmpty.col + 1));
			element.style.setProperty(CSS_VAR_VISIBILITY, "visible");
			return () => {
				clearGridEmptyCellStyles(element);
			};
		}, [element, tracks]);
		return null;
	};

//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
	function hasWindow() {
		return typeof window !== "undefined";
	}
	function getNodeName(node) {
		if (isNode(node)) return (node.nodeName || "").toLowerCase();
		return "#document";
	}
	function getWindow(node) {
		var _node$ownerDocument;
		return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
	}
	function getDocumentElement(node) {
		var _ref;
		return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
	}
	function isNode(value) {
		if (!hasWindow()) return false;
		return value instanceof Node || value instanceof getWindow(value).Node;
	}
	function isElement(value) {
		if (!hasWindow()) return false;
		return value instanceof Element || value instanceof getWindow(value).Element;
	}
	function isHTMLElement(value) {
		if (!hasWindow()) return false;
		return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
	}
	function isShadowRoot(value) {
		if (!hasWindow() || typeof ShadowRoot === "undefined") return false;
		return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
	}
	function isOverflowElement(element) {
		const { overflow, overflowX, overflowY, display } = getComputedStyle$1(element);
		return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
	}
	function isTableElement(element) {
		return /^(table|td|th)$/.test(getNodeName(element));
	}
	function isTopLayer(element) {
		try {
			if (element.matches(":popover-open")) return true;
		} catch (_e) {}
		try {
			return element.matches(":modal");
		} catch (_e) {
			return false;
		}
	}
	var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
	var containRe = /paint|layout|strict|content/;
	var isNotNone = (value) => !!value && value !== "none";
	var isWebKitValue;
	function isContainingBlock(elementOrCss) {
		const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
		return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
	}
	function getContainingBlock(element) {
		let currentNode = getParentNode(element);
		while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
			if (isContainingBlock(currentNode)) return currentNode;
			else if (isTopLayer(currentNode)) return null;
			currentNode = getParentNode(currentNode);
		}
		return null;
	}
	function isWebKit() {
		if (isWebKitValue == null) isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
		return isWebKitValue;
	}
	function isLastTraversableNode(node) {
		return /^(html|body|#document)$/.test(getNodeName(node));
	}
	function getComputedStyle$1(element) {
		return getWindow(element).getComputedStyle(element);
	}
	__name(getComputedStyle$1, "getComputedStyle");
	function getNodeScroll(element) {
		if (isElement(element)) return {
			scrollLeft: element.scrollLeft,
			scrollTop: element.scrollTop
		};
		return {
			scrollLeft: element.scrollX,
			scrollTop: element.scrollY
		};
	}
	function getParentNode(node) {
		if (getNodeName(node) === "html") return node;
		const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
		return isShadowRoot(result) ? result.host : result;
	}
	function getNearestOverflowAncestor(node) {
		const parentNode = getParentNode(node);
		if (isLastTraversableNode(parentNode)) return node.ownerDocument ? node.ownerDocument.body : node.body;
		if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
		return getNearestOverflowAncestor(parentNode);
	}
	function getOverflowAncestors(node, list, traverseIframes) {
		var _node$ownerDocument2;
		if (list === void 0) list = [];
		if (traverseIframes === void 0) traverseIframes = true;
		const scrollableAncestor = getNearestOverflowAncestor(node);
		const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
		const win = getWindow(scrollableAncestor);
		if (isBody) {
			const frameElement = getFrameElement(win);
			return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
		} else return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
	}
	function getFrameElement(win) {
		return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
	}

//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
	var min = Math.min;
	var max = Math.max;
	var round = Math.round;
	var floor = Math.floor;
	var createCoords = (v) => ({
		x: v,
		y: v
	});
	var oppositeSideMap = {
		left: "right",
		right: "left",
		bottom: "top",
		top: "bottom"
	};
	function evaluate(value, param) {
		return typeof value === "function" ? value(param) : value;
	}
	function getSide(placement) {
		return placement.split("-")[0];
	}
	function getAlignment(placement) {
		return placement.split("-")[1];
	}
	function getOppositeAxis(axis) {
		return axis === "x" ? "y" : "x";
	}
	function getAxisLength(axis) {
		return axis === "y" ? "height" : "width";
	}
	function getSideAxis(placement) {
		const firstChar = placement[0];
		return firstChar === "t" || firstChar === "b" ? "y" : "x";
	}
	function getAlignmentAxis(placement) {
		return getOppositeAxis(getSideAxis(placement));
	}
	function getAlignmentSides(placement, rects, rtl) {
		if (rtl === void 0) rtl = false;
		const alignment = getAlignment(placement);
		const alignmentAxis = getAlignmentAxis(placement);
		const length = getAxisLength(alignmentAxis);
		let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
		if (rects.reference[length] > rects.floating[length]) mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
		return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
	}
	function getExpandedPlacements(placement) {
		const oppositePlacement = getOppositePlacement(placement);
		return [
			getOppositeAlignmentPlacement(placement),
			oppositePlacement,
			getOppositeAlignmentPlacement(oppositePlacement)
		];
	}
	function getOppositeAlignmentPlacement(placement) {
		return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
	}
	var lrPlacement = ["left", "right"];
	var rlPlacement = ["right", "left"];
	var tbPlacement = ["top", "bottom"];
	var btPlacement = ["bottom", "top"];
	function getSideList(side, isStart, rtl) {
		switch (side) {
			case "top":
			case "bottom":
				if (rtl) return isStart ? rlPlacement : lrPlacement;
				return isStart ? lrPlacement : rlPlacement;
			case "left":
			case "right": return isStart ? tbPlacement : btPlacement;
			default: return [];
		}
	}
	function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
		const alignment = getAlignment(placement);
		let list = getSideList(getSide(placement), direction === "start", rtl);
		if (alignment) {
			list = list.map((side) => side + "-" + alignment);
			if (flipAlignment) list = list.concat(list.map(getOppositeAlignmentPlacement));
		}
		return list;
	}
	function getOppositePlacement(placement) {
		const side = getSide(placement);
		return oppositeSideMap[side] + placement.slice(side.length);
	}
	function expandPaddingObject(padding) {
		return {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			...padding
		};
	}
	function getPaddingObject(padding) {
		return typeof padding !== "number" ? expandPaddingObject(padding) : {
			top: padding,
			right: padding,
			bottom: padding,
			left: padding
		};
	}
	function rectToClientRect(rect) {
		const { x, y, width, height } = rect;
		return {
			width,
			height,
			top: y,
			left: x,
			right: x + width,
			bottom: y + height,
			x,
			y
		};
	}

//#endregion
//#region node_modules/tabbable/dist/index.esm.js
/*!
	* tabbable 6.4.0
	* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
	*/
	var candidateSelectors = [
		"input:not([inert]):not([inert] *)",
		"select:not([inert]):not([inert] *)",
		"textarea:not([inert]):not([inert] *)",
		"a[href]:not([inert]):not([inert] *)",
		"button:not([inert]):not([inert] *)",
		"[tabindex]:not(slot):not([inert]):not([inert] *)",
		"audio[controls]:not([inert]):not([inert] *)",
		"video[controls]:not([inert]):not([inert] *)",
		"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
		"details>summary:first-of-type:not([inert]):not([inert] *)",
		"details:not([inert]):not([inert] *)"
	];
	var candidateSelector = /* #__PURE__ */ candidateSelectors.join(",");
	var NoElement = typeof Element === "undefined";
	var matches = NoElement ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
		var _element$getRootNode;
		return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
	} : function(element) {
		return element === null || element === void 0 ? void 0 : element.ownerDocument;
	};
	/**
	* Determines if a node is inert or in an inert ancestor.
	* @param {Node} [node]
	* @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
	*  see if any of them are inert. If false, only `node` itself is considered.
	* @returns {boolean} True if inert itself or by way of being in an inert ancestor.
	*  False if `node` is falsy.
	*/
	var _isInert = function isInert(node, lookUp) {
		var _node$getAttribute;
		if (lookUp === void 0) lookUp = true;
		var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
		return inertAtt === "" || inertAtt === "true" || lookUp && node && (typeof node.closest === "function" ? node.closest("[inert]") : _isInert(node.parentNode));
	};
	/**
	* Determines if a node's content is editable.
	* @param {Element} [node]
	* @returns True if it's content-editable; false if it's not or `node` is falsy.
	*/
	var isContentEditable = function isContentEditable(node) {
		var _node$getAttribute2;
		var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
		return attValue === "" || attValue === "true";
	};
	/**
	* @param {Element} el container to check in
	* @param {boolean} includeContainer add container to check
	* @param {(node: Element) => boolean} filter filter candidates
	* @returns {Element[]}
	*/
	var getCandidates = function getCandidates(el, includeContainer, filter) {
		if (_isInert(el)) return [];
		var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
		if (includeContainer && matches.call(el, candidateSelector)) candidates.unshift(el);
		candidates = candidates.filter(filter);
		return candidates;
	};
	/**
	* @callback GetShadowRoot
	* @param {Element} element to check for shadow root
	* @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
	*/
	/**
	* @callback ShadowRootFilter
	* @param {Element} shadowHostNode the element which contains shadow content
	* @returns {boolean} true if a shadow root could potentially contain valid candidates.
	*/
	/**
	* @typedef {Object} CandidateScope
	* @property {Element} scopeParent contains inner candidates
	* @property {Element[]} candidates list of candidates found in the scope parent
	*/
	/**
	* @typedef {Object} IterativeOptions
	* @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
	*  if a function, implies shadow support is enabled and either returns the shadow root of an element
	*  or a boolean stating if it has an undisclosed shadow root
	* @property {(node: Element) => boolean} filter filter candidates
	* @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
	* @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
	*/
	/**
	* @param {Element[]} elements list of element containers to match candidates from
	* @param {boolean} includeContainer add container list to check
	* @param {IterativeOptions} options
	* @returns {Array.<Element|CandidateScope>}
	*/
	var _getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
		var candidates = [];
		var elementsToCheck = Array.from(elements);
		while (elementsToCheck.length) {
			var element = elementsToCheck.shift();
			if (_isInert(element, false)) continue;
			if (element.tagName === "SLOT") {
				var assigned = element.assignedElements();
				var nestedCandidates = _getCandidatesIteratively(assigned.length ? assigned : element.children, true, options);
				if (options.flatten) candidates.push.apply(candidates, nestedCandidates);
				else candidates.push({
					scopeParent: element,
					candidates: nestedCandidates
				});
			} else {
				if (matches.call(element, candidateSelector) && options.filter(element) && (includeContainer || !elements.includes(element))) candidates.push(element);
				var shadowRoot = element.shadowRoot || typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
				var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
				if (shadowRoot && validShadowRoot) {
					var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
					if (options.flatten) candidates.push.apply(candidates, _nestedCandidates);
					else candidates.push({
						scopeParent: element,
						candidates: _nestedCandidates
					});
				} else elementsToCheck.unshift.apply(elementsToCheck, element.children);
			}
		}
		return candidates;
	};
	/**
	* @private
	* Determines if the node has an explicitly specified `tabindex` attribute.
	* @param {HTMLElement} node
	* @returns {boolean} True if so; false if not.
	*/
	var hasTabIndex = function hasTabIndex(node) {
		return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
	};
	/**
	* Determine the tab index of a given node.
	* @param {HTMLElement} node
	* @returns {number} Tab order (negative, 0, or positive number).
	* @throws {Error} If `node` is falsy.
	*/
	var getTabIndex = function getTabIndex(node) {
		if (!node) throw new Error("No node provided");
		if (node.tabIndex < 0) {
			if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) return 0;
		}
		return node.tabIndex;
	};
	/**
	* Determine the tab index of a given node __for sort order purposes__.
	* @param {HTMLElement} node
	* @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
	*  has tabIndex -1, but needs to be sorted by document order in order for its content to be
	*  inserted into the correct sort position.
	* @returns {number} Tab order (negative, 0, or positive number).
	*/
	var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
		var tabIndex = getTabIndex(node);
		if (tabIndex < 0 && isScope && !hasTabIndex(node)) return 0;
		return tabIndex;
	};
	var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
		return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
	};
	var isInput = function isInput(node) {
		return node.tagName === "INPUT";
	};
	var isHiddenInput = function isHiddenInput(node) {
		return isInput(node) && node.type === "hidden";
	};
	var isDetailsWithSummary = function isDetailsWithSummary(node) {
		return node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
			return child.tagName === "SUMMARY";
		});
	};
	var getCheckedRadio = function getCheckedRadio(nodes, form) {
		for (var i = 0; i < nodes.length; i++) if (nodes[i].checked && nodes[i].form === form) return nodes[i];
	};
	var isTabbableRadio = function isTabbableRadio(node) {
		if (!node.name) return true;
		var radioScope = node.form || getRootNode(node);
		var queryRadios = function queryRadios(name) {
			return radioScope.querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]");
		};
		var radioSet;
		if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") radioSet = queryRadios(window.CSS.escape(node.name));
		else try {
			radioSet = queryRadios(node.name);
		} catch (err) {
			console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
			return false;
		}
		var checked = getCheckedRadio(radioSet, node.form);
		return !checked || checked === node;
	};
	var isRadio = function isRadio(node) {
		return isInput(node) && node.type === "radio";
	};
	var isNonTabbableRadio = function isNonTabbableRadio(node) {
		return isRadio(node) && !isTabbableRadio(node);
	};
	var isNodeAttached = function isNodeAttached(node) {
		var _nodeRoot;
		var nodeRoot = node && getRootNode(node);
		var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
		var attached = false;
		if (nodeRoot && nodeRoot !== node) {
			var _nodeRootHost;
			var _nodeRootHost$ownerDo;
			var _node$ownerDocument;
			attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
			while (!attached && nodeRootHost) {
				var _nodeRoot2;
				var _nodeRootHost2;
				var _nodeRootHost2$ownerD;
				nodeRoot = getRootNode(nodeRootHost);
				nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
				attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
			}
		}
		return attached;
	};
	var isZeroArea = function isZeroArea(node) {
		var _node$getBoundingClie = node.getBoundingClientRect();
		var width = _node$getBoundingClie.width;
		var height = _node$getBoundingClie.height;
		return width === 0 && height === 0;
	};
	var isHidden = function isHidden(node, _ref) {
		var displayCheck = _ref.displayCheck;
		var getShadowRoot = _ref.getShadowRoot;
		if (displayCheck === "full-native") {
			if ("checkVisibility" in node) return !node.checkVisibility({
				checkOpacity: false,
				opacityProperty: false,
				contentVisibilityAuto: true,
				visibilityProperty: true,
				checkVisibilityCSS: true
			});
		}
		if (getComputedStyle(node).visibility === "hidden") return true;
		var nodeUnderDetails = matches.call(node, "details>summary:first-of-type") ? node.parentElement : node;
		if (matches.call(nodeUnderDetails, "details:not([open]) *")) return true;
		if (!displayCheck || displayCheck === "full" || displayCheck === "full-native" || displayCheck === "legacy-full") {
			if (typeof getShadowRoot === "function") {
				var originalNode = node;
				while (node) {
					var parentElement = node.parentElement;
					var rootNode = getRootNode(node);
					if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) return isZeroArea(node);
					else if (node.assignedSlot) node = node.assignedSlot;
					else if (!parentElement && rootNode !== node.ownerDocument) node = rootNode.host;
					else node = parentElement;
				}
				node = originalNode;
			}
			if (isNodeAttached(node)) return !node.getClientRects().length;
			if (displayCheck !== "legacy-full") return true;
		} else if (displayCheck === "non-zero-area") return isZeroArea(node);
		return false;
	};
	var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
		if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
			var parentNode = node.parentElement;
			while (parentNode) {
				if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
					for (var i = 0; i < parentNode.children.length; i++) {
						var child = parentNode.children.item(i);
						if (child.tagName === "LEGEND") return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
					}
					return true;
				}
				parentNode = parentNode.parentElement;
			}
		}
		return false;
	};
	var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
		if (node.disabled || isHiddenInput(node) || isHidden(node, options) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) return false;
		return true;
	};
	var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
		if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) return false;
		return true;
	};
	var isShadowRootTabbable = function isShadowRootTabbable(shadowHostNode) {
		var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
		if (isNaN(tabIndex) || tabIndex >= 0) return true;
		return false;
	};
	/**
	* @param {Array.<Element|CandidateScope>} candidates
	* @returns Element[]
	*/
	var _sortByOrder = function sortByOrder(candidates) {
		var regularTabbables = [];
		var orderedTabbables = [];
		candidates.forEach(function(item, i) {
			var isScope = !!item.scopeParent;
			var element = isScope ? item.scopeParent : item;
			var candidateTabindex = getSortOrderTabIndex(element, isScope);
			var elements = isScope ? _sortByOrder(item.candidates) : element;
			if (candidateTabindex === 0) isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
			else orderedTabbables.push({
				documentOrder: i,
				tabIndex: candidateTabindex,
				item,
				isScope,
				content: elements
			});
		});
		return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
			sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
			return acc;
		}, []).concat(regularTabbables);
	};
	var tabbable = function tabbable(container, options) {
		options = options || {};
		var candidates;
		if (options.getShadowRoot) candidates = _getCandidatesIteratively([container], options.includeContainer, {
			filter: isNodeMatchingSelectorTabbable.bind(null, options),
			flatten: false,
			getShadowRoot: options.getShadowRoot,
			shadowRootFilter: isShadowRootTabbable
		});
		else candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
		return _sortByOrder(candidates);
	};

//#endregion
//#region node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
	function isSafari() {
		return /apple/i.test(navigator.vendor);
	}
	function activeElement(doc) {
		let activeElement = doc.activeElement;
		while (((_activeElement = activeElement) == null || (_activeElement = _activeElement.shadowRoot) == null ? void 0 : _activeElement.activeElement) != null) {
			var _activeElement;
			activeElement = activeElement.shadowRoot.activeElement;
		}
		return activeElement;
	}
	function contains(parent, child) {
		if (!parent || !child) return false;
		const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();
		if (parent.contains(child)) return true;
		if (rootNode && isShadowRoot(rootNode)) {
			let next = child;
			while (next) {
				if (parent === next) return true;
				next = next.parentNode || next.host;
			}
		}
		return false;
	}
	function getDocument(node) {
		return (node == null ? void 0 : node.ownerDocument) || document;
	}
	function isMouseLikePointerType(pointerType, strict) {
		const values = ["mouse", "pen"];
		if (!strict) values.push("", void 0);
		return values.includes(pointerType);
	}
	var index$1 = typeof document !== "undefined" ? react$1.useLayoutEffect : function noop() {};
	var SafeReact$1 = { ...react$1 };
	function useLatestRef$1(value) {
		const ref = react$1.useRef(value);
		index$1(() => {
			ref.current = value;
		});
		return ref;
	}
	__name(useLatestRef$1, "useLatestRef");
	var useSafeInsertionEffect = SafeReact$1.useInsertionEffect || ((fn) => fn());
	function useEffectEvent(callback) {
		const ref = react$1.useRef(() => {
			throw new Error("Cannot call an event handler while rendering.");
		});
		useSafeInsertionEffect(() => {
			ref.current = callback;
		});
		return react$1.useCallback(function() {
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			return ref.current == null ? void 0 : ref.current(...args);
		}, []);
	}
	var getTabbableOptions = () => ({
		getShadowRoot: true,
		displayCheck: typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
	});
	function getTabbableIn(container, dir) {
		const list = tabbable(container, getTabbableOptions());
		const len = list.length;
		if (len === 0) return;
		const active = activeElement(getDocument(container));
		const index = list.indexOf(active);
		return list[index === -1 ? dir === 1 ? 0 : len - 1 : index + dir];
	}
	function getNextTabbable(referenceElement) {
		return getTabbableIn(getDocument(referenceElement).body, 1) || referenceElement;
	}
	function getPreviousTabbable(referenceElement) {
		return getTabbableIn(getDocument(referenceElement).body, -1) || referenceElement;
	}
	function isOutsideEvent(event, container) {
		const containerElement = container || event.currentTarget;
		const relatedTarget = event.relatedTarget;
		return !relatedTarget || !contains(containerElement, relatedTarget);
	}
	function disableFocusInside(container) {
		tabbable(container, getTabbableOptions()).forEach((element) => {
			element.dataset.tabindex = element.getAttribute("tabindex") || "";
			element.setAttribute("tabindex", "-1");
		});
	}
	function enableFocusInside(container) {
		container.querySelectorAll("[data-tabindex]").forEach((element) => {
			const tabindex = element.dataset.tabindex;
			delete element.dataset.tabindex;
			if (tabindex) element.setAttribute("tabindex", tabindex);
			else element.removeAttribute("tabindex");
		});
	}

//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.development.js
/**
	* @license React
	* react-jsx-runtime.development.js
	*
	* Copyright (c) Facebook, Inc. and its affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_react_jsx_runtime_development = /* @__PURE__ */ __commonJSMin(((exports) => {
		(function() {
			"use strict";
			var React = (globalThis.React);
			var REACT_ELEMENT_TYPE = Symbol.for("react.element");
			var REACT_PORTAL_TYPE = Symbol.for("react.portal");
			var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
			var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
			var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
			var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
			var REACT_CONTEXT_TYPE = Symbol.for("react.context");
			var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
			var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
			var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
			var REACT_MEMO_TYPE = Symbol.for("react.memo");
			var REACT_LAZY_TYPE = Symbol.for("react.lazy");
			var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
			var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
			var FAUX_ITERATOR_SYMBOL = "@@iterator";
			function getIteratorFn(maybeIterable) {
				if (maybeIterable === null || typeof maybeIterable !== "object") return null;
				var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
				if (typeof maybeIterator === "function") return maybeIterator;
				return null;
			}
			var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
			function error(format) {
				for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
				printWarning("error", format, args);
			}
			function printWarning(level, format, args) {
				var stack = ReactSharedInternals.ReactDebugCurrentFrame.getStackAddendum();
				if (stack !== "") {
					format += "%s";
					args = args.concat([stack]);
				}
				var argsWithFormat = args.map(function(item) {
					return String(item);
				});
				argsWithFormat.unshift("Warning: " + format);
				Function.prototype.apply.call(console[level], console, argsWithFormat);
			}
			var enableScopeAPI = false;
			var enableCacheElement = false;
			var enableTransitionTracing = false;
			var enableLegacyHidden = false;
			var enableDebugTracing = false;
			var REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
			function isValidElementType(type) {
				if (typeof type === "string" || typeof type === "function") return true;
				if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) return true;
				if (typeof type === "object" && type !== null) {
					if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) return true;
				}
				return false;
			}
			function getWrappedName(outerType, innerType, wrapperName) {
				var displayName = outerType.displayName;
				if (displayName) return displayName;
				var functionName = innerType.displayName || innerType.name || "";
				return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
			}
			function getContextName(type) {
				return type.displayName || "Context";
			}
			function getComponentNameFromType(type) {
				if (type == null) return null;
				if (typeof type.tag === "number") error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
				if (typeof type === "function") return type.displayName || type.name || null;
				if (typeof type === "string") return type;
				switch (type) {
					case REACT_FRAGMENT_TYPE: return "Fragment";
					case REACT_PORTAL_TYPE: return "Portal";
					case REACT_PROFILER_TYPE: return "Profiler";
					case REACT_STRICT_MODE_TYPE: return "StrictMode";
					case REACT_SUSPENSE_TYPE: return "Suspense";
					case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
				}
				if (typeof type === "object") switch (type.$$typeof) {
					case REACT_CONTEXT_TYPE: return getContextName(type) + ".Consumer";
					case REACT_PROVIDER_TYPE: return getContextName(type._context) + ".Provider";
					case REACT_FORWARD_REF_TYPE: return getWrappedName(type, type.render, "ForwardRef");
					case REACT_MEMO_TYPE:
						var outerName = type.displayName || null;
						if (outerName !== null) return outerName;
						return getComponentNameFromType(type.type) || "Memo";
					case REACT_LAZY_TYPE:
						var lazyComponent = type;
						var payload = lazyComponent._payload;
						var init = lazyComponent._init;
						try {
							return getComponentNameFromType(init(payload));
						} catch (x) {
							return null;
						}
				}
				return null;
			}
			var assign = Object.assign;
			var disabledDepth = 0;
			var prevLog;
			var prevInfo;
			var prevWarn;
			var prevError;
			var prevGroup;
			var prevGroupCollapsed;
			var prevGroupEnd;
			function disabledLog() {}
			disabledLog.__reactDisabledLog = true;
			function disableLogs() {
				if (disabledDepth === 0) {
					prevLog = console.log;
					prevInfo = console.info;
					prevWarn = console.warn;
					prevError = console.error;
					prevGroup = console.group;
					prevGroupCollapsed = console.groupCollapsed;
					prevGroupEnd = console.groupEnd;
					var props = {
						configurable: true,
						enumerable: true,
						value: disabledLog,
						writable: true
					};
					Object.defineProperties(console, {
						info: props,
						log: props,
						warn: props,
						error: props,
						group: props,
						groupCollapsed: props,
						groupEnd: props
					});
				}
				disabledDepth++;
			}
			function reenableLogs() {
				disabledDepth--;
				if (disabledDepth === 0) {
					var props = {
						configurable: true,
						enumerable: true,
						writable: true
					};
					Object.defineProperties(console, {
						log: assign({}, props, { value: prevLog }),
						info: assign({}, props, { value: prevInfo }),
						warn: assign({}, props, { value: prevWarn }),
						error: assign({}, props, { value: prevError }),
						group: assign({}, props, { value: prevGroup }),
						groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
						groupEnd: assign({}, props, { value: prevGroupEnd })
					});
				}
				if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
			}
			var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
			var prefix;
			function describeBuiltInComponentFrame(name, source, ownerFn) {
				if (prefix === void 0) try {
					throw Error();
				} catch (x) {
					var match = x.stack.trim().match(/\n( *(at )?)/);
					prefix = match && match[1] || "";
				}
				return "\n" + prefix + name;
			}
			var reentry = false;
			var componentFrameCache = new (typeof WeakMap === "function" ? WeakMap : Map)();
			function describeNativeComponentFrame(fn, construct) {
				if (!fn || reentry) return "";
				var frame = componentFrameCache.get(fn);
				if (frame !== void 0) return frame;
				var control;
				reentry = true;
				var previousPrepareStackTrace = Error.prepareStackTrace;
				Error.prepareStackTrace = void 0;
				var previousDispatcher = ReactCurrentDispatcher.current;
				ReactCurrentDispatcher.current = null;
				disableLogs();
				try {
					if (construct) {
						var Fake = function() {
							throw Error();
						};
						Object.defineProperty(Fake.prototype, "props", { set: function() {
							throw Error();
						} });
						if (typeof Reflect === "object" && Reflect.construct) {
							try {
								Reflect.construct(Fake, []);
							} catch (x) {
								control = x;
							}
							Reflect.construct(fn, [], Fake);
						} else {
							try {
								Fake.call();
							} catch (x) {
								control = x;
							}
							fn.call(Fake.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (x) {
							control = x;
						}
						fn();
					}
				} catch (sample) {
					if (sample && control && typeof sample.stack === "string") {
						var sampleLines = sample.stack.split("\n");
						var controlLines = control.stack.split("\n");
						var s = sampleLines.length - 1;
						var c = controlLines.length - 1;
						while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) c--;
						for (; s >= 1 && c >= 0; s--, c--) if (sampleLines[s] !== controlLines[c]) {
							if (s !== 1 || c !== 1) do {
								s--;
								c--;
								if (c < 0 || sampleLines[s] !== controlLines[c]) {
									var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
									if (fn.displayName && _frame.includes("<anonymous>")) _frame = _frame.replace("<anonymous>", fn.displayName);
									if (typeof fn === "function") componentFrameCache.set(fn, _frame);
									return _frame;
								}
							} while (s >= 1 && c >= 0);
							break;
						}
					}
				} finally {
					reentry = false;
					ReactCurrentDispatcher.current = previousDispatcher;
					reenableLogs();
					Error.prepareStackTrace = previousPrepareStackTrace;
				}
				var name = fn ? fn.displayName || fn.name : "";
				var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
				if (typeof fn === "function") componentFrameCache.set(fn, syntheticFrame);
				return syntheticFrame;
			}
			function describeFunctionComponentFrame(fn, source, ownerFn) {
				return describeNativeComponentFrame(fn, false);
			}
			function shouldConstruct(Component) {
				var prototype = Component.prototype;
				return !!(prototype && prototype.isReactComponent);
			}
			function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
				if (type == null) return "";
				if (typeof type === "function") return describeNativeComponentFrame(type, shouldConstruct(type));
				if (typeof type === "string") return describeBuiltInComponentFrame(type);
				switch (type) {
					case REACT_SUSPENSE_TYPE: return describeBuiltInComponentFrame("Suspense");
					case REACT_SUSPENSE_LIST_TYPE: return describeBuiltInComponentFrame("SuspenseList");
				}
				if (typeof type === "object") switch (type.$$typeof) {
					case REACT_FORWARD_REF_TYPE: return describeFunctionComponentFrame(type.render);
					case REACT_MEMO_TYPE: return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
					case REACT_LAZY_TYPE:
						var lazyComponent = type;
						var payload = lazyComponent._payload;
						var init = lazyComponent._init;
						try {
							return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
						} catch (x) {}
				}
				return "";
			}
			var hasOwnProperty = Object.prototype.hasOwnProperty;
			var loggedTypeFailures = {};
			var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
			function setCurrentlyValidatingElement(element) {
				if (element) {
					var owner = element._owner;
					var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
					ReactDebugCurrentFrame.setExtraStackFrame(stack);
				} else ReactDebugCurrentFrame.setExtraStackFrame(null);
			}
			function checkPropTypes(typeSpecs, values, location, componentName, element) {
				var has = Function.call.bind(hasOwnProperty);
				for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
					var error$1 = void 0;
					try {
						if (typeof typeSpecs[typeSpecName] !== "function") {
							var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
							err.name = "Invariant Violation";
							throw err;
						}
						error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
					} catch (ex) {
						error$1 = ex;
					}
					if (error$1 && !(error$1 instanceof Error)) {
						setCurrentlyValidatingElement(element);
						error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
						setCurrentlyValidatingElement(null);
					}
					if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
						loggedTypeFailures[error$1.message] = true;
						setCurrentlyValidatingElement(element);
						error("Failed %s type: %s", location, error$1.message);
						setCurrentlyValidatingElement(null);
					}
				}
			}
			var isArrayImpl = Array.isArray;
			function isArray(a) {
				return isArrayImpl(a);
			}
			function typeName(value) {
				return typeof Symbol === "function" && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
			}
			function willCoercionThrow(value) {
				try {
					testStringCoercion(value);
					return false;
				} catch (e) {
					return true;
				}
			}
			function testStringCoercion(value) {
				return "" + value;
			}
			function checkKeyStringCoercion(value) {
				if (willCoercionThrow(value)) {
					error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
					return testStringCoercion(value);
				}
			}
			var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
			var RESERVED_PROPS = {
				key: true,
				ref: true,
				__self: true,
				__source: true
			};
			var specialPropKeyWarningShown;
			var specialPropRefWarningShown;
			var didWarnAboutStringRefs = {};
			function hasValidRef(config) {
				if (hasOwnProperty.call(config, "ref")) {
					var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
					if (getter && getter.isReactWarning) return false;
				}
				return config.ref !== void 0;
			}
			function hasValidKey(config) {
				if (hasOwnProperty.call(config, "key")) {
					var getter = Object.getOwnPropertyDescriptor(config, "key").get;
					if (getter && getter.isReactWarning) return false;
				}
				return config.key !== void 0;
			}
			function warnIfStringRefCannotBeAutoConverted(config, self) {
				if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
					var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
					if (!didWarnAboutStringRefs[componentName]) {
						error("Component \"%s\" contains the string ref \"%s\". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref", getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
						didWarnAboutStringRefs[componentName] = true;
					}
				}
			}
			function defineKeyPropWarningGetter(props, displayName) {
				var warnAboutAccessingKey = function() {
					if (!specialPropKeyWarningShown) {
						specialPropKeyWarningShown = true;
						error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
					}
				};
				warnAboutAccessingKey.isReactWarning = true;
				Object.defineProperty(props, "key", {
					get: warnAboutAccessingKey,
					configurable: true
				});
			}
			function defineRefPropWarningGetter(props, displayName) {
				var warnAboutAccessingRef = function() {
					if (!specialPropRefWarningShown) {
						specialPropRefWarningShown = true;
						error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
					}
				};
				warnAboutAccessingRef.isReactWarning = true;
				Object.defineProperty(props, "ref", {
					get: warnAboutAccessingRef,
					configurable: true
				});
			}
			/**
			* Factory method to create a new React element. This no longer adheres to
			* the class pattern, so do not use new to call it. Also, instanceof check
			* will not work. Instead test $$typeof field against Symbol.for('react.element') to check
			* if something is a React Element.
			*
			* @param {*} type
			* @param {*} props
			* @param {*} key
			* @param {string|object} ref
			* @param {*} owner
			* @param {*} self A *temporary* helper to detect places where `this` is
			* different from the `owner` when React.createElement is called, so that we
			* can warn. We want to get rid of owner and replace string `ref`s with arrow
			* functions, and as long as `this` and owner are the same, there will be no
			* change in behavior.
			* @param {*} source An annotation object (added by a transpiler or otherwise)
			* indicating filename, line number, and/or other information.
			* @internal
			*/
			var ReactElement = function(type, key, ref, self, source, owner, props) {
				var element = {
					$$typeof: REACT_ELEMENT_TYPE,
					type,
					key,
					ref,
					props,
					_owner: owner
				};
				element._store = {};
				Object.defineProperty(element._store, "validated", {
					configurable: false,
					enumerable: false,
					writable: true,
					value: false
				});
				Object.defineProperty(element, "_self", {
					configurable: false,
					enumerable: false,
					writable: false,
					value: self
				});
				Object.defineProperty(element, "_source", {
					configurable: false,
					enumerable: false,
					writable: false,
					value: source
				});
				if (Object.freeze) {
					Object.freeze(element.props);
					Object.freeze(element);
				}
				return element;
			};
			/**
			* https://github.com/reactjs/rfcs/pull/107
			* @param {*} type
			* @param {object} props
			* @param {string} key
			*/
			function jsxDEV(type, config, maybeKey, source, self) {
				var propName;
				var props = {};
				var key = null;
				var ref = null;
				if (maybeKey !== void 0) {
					checkKeyStringCoercion(maybeKey);
					key = "" + maybeKey;
				}
				if (hasValidKey(config)) {
					checkKeyStringCoercion(config.key);
					key = "" + config.key;
				}
				if (hasValidRef(config)) {
					ref = config.ref;
					warnIfStringRefCannotBeAutoConverted(config, self);
				}
				for (propName in config) if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
				if (type && type.defaultProps) {
					var defaultProps = type.defaultProps;
					for (propName in defaultProps) if (props[propName] === void 0) props[propName] = defaultProps[propName];
				}
				if (key || ref) {
					var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
					if (key) defineKeyPropWarningGetter(props, displayName);
					if (ref) defineRefPropWarningGetter(props, displayName);
				}
				return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
			}
			var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
			var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
			function setCurrentlyValidatingElement$1(element) {
				if (element) {
					var owner = element._owner;
					var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
					ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
				} else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
			}
			var propTypesMisspellWarningShown = false;
			/**
			* Verifies the object is a ReactElement.
			* See https://reactjs.org/docs/react-api.html#isvalidelement
			* @param {?object} object
			* @return {boolean} True if `object` is a ReactElement.
			* @final
			*/
			function isValidElement(object) {
				return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
			}
			function getDeclarationErrorAddendum() {
				if (ReactCurrentOwner$1.current) {
					var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
					if (name) return "\n\nCheck the render method of `" + name + "`.";
				}
				return "";
			}
			function getSourceInfoErrorAddendum(source) {
				if (source !== void 0) {
					var fileName = source.fileName.replace(/^.*[\\\/]/, "");
					var lineNumber = source.lineNumber;
					return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
				}
				return "";
			}
			/**
			* Warn if there's no key explicitly set on dynamic arrays of children or
			* object keys are not valid. This allows us to keep track of children between
			* updates.
			*/
			var ownerHasKeyUseWarning = {};
			function getCurrentComponentErrorInfo(parentType) {
				var info = getDeclarationErrorAddendum();
				if (!info) {
					var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
					if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
				}
				return info;
			}
			/**
			* Warn if the element doesn't have an explicit key assigned to it.
			* This element is in an array. The array could grow and shrink or be
			* reordered. All children that haven't already been validated are required to
			* have a "key" property assigned to it. Error statuses are cached so a warning
			* will only be shown once.
			*
			* @internal
			* @param {ReactElement} element Element that requires a key.
			* @param {*} parentType element's parent's type.
			*/
			function validateExplicitKey(element, parentType) {
				if (!element._store || element._store.validated || element.key != null) return;
				element._store.validated = true;
				var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
				if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
				ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
				var childOwner = "";
				if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
				setCurrentlyValidatingElement$1(element);
				error("Each child in a list should have a unique \"key\" prop.%s%s See https://reactjs.org/link/warning-keys for more information.", currentComponentErrorInfo, childOwner);
				setCurrentlyValidatingElement$1(null);
			}
			/**
			* Ensure that every element either is passed in a static location, in an
			* array with an explicit keys property defined, or in an object literal
			* with valid key property.
			*
			* @internal
			* @param {ReactNode} node Statically passed child of any type.
			* @param {*} parentType node's parent's type.
			*/
			function validateChildKeys(node, parentType) {
				if (typeof node !== "object") return;
				if (isArray(node)) for (var i = 0; i < node.length; i++) {
					var child = node[i];
					if (isValidElement(child)) validateExplicitKey(child, parentType);
				}
				else if (isValidElement(node)) {
					if (node._store) node._store.validated = true;
				} else if (node) {
					var iteratorFn = getIteratorFn(node);
					if (typeof iteratorFn === "function") {
						if (iteratorFn !== node.entries) {
							var iterator = iteratorFn.call(node);
							var step;
							while (!(step = iterator.next()).done) if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
						}
					}
				}
			}
			/**
			* Given an element, validate that its props follow the propTypes definition,
			* provided by the type.
			*
			* @param {ReactElement} element
			*/
			function validatePropTypes(element) {
				var type = element.type;
				if (type === null || type === void 0 || typeof type === "string") return;
				var propTypes;
				if (typeof type === "function") propTypes = type.propTypes;
				else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
				else return;
				if (propTypes) {
					var name = getComponentNameFromType(type);
					checkPropTypes(propTypes, element.props, "prop", name, element);
				} else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
					propTypesMisspellWarningShown = true;
					error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", getComponentNameFromType(type) || "Unknown");
				}
				if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
			}
			/**
			* Given a fragment, validate that it can only be provided with fragment props
			* @param {ReactElement} fragment
			*/
			function validateFragmentProps(fragment) {
				var keys = Object.keys(fragment.props);
				for (var i = 0; i < keys.length; i++) {
					var key = keys[i];
					if (key !== "children" && key !== "key") {
						setCurrentlyValidatingElement$1(fragment);
						error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
						setCurrentlyValidatingElement$1(null);
						break;
					}
				}
				if (fragment.ref !== null) {
					setCurrentlyValidatingElement$1(fragment);
					error("Invalid attribute `ref` supplied to `React.Fragment`.");
					setCurrentlyValidatingElement$1(null);
				}
			}
			var didWarnAboutKeySpread = {};
			function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
				var validType = isValidElementType(type);
				if (!validType) {
					var info = "";
					if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
					var sourceInfo = getSourceInfoErrorAddendum(source);
					if (sourceInfo) info += sourceInfo;
					else info += getDeclarationErrorAddendum();
					var typeString;
					if (type === null) typeString = "null";
					else if (isArray(type)) typeString = "array";
					else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
						typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
						info = " Did you accidentally export a JSX literal instead of a component?";
					} else typeString = typeof type;
					error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
				}
				var element = jsxDEV(type, props, key, source, self);
				if (element == null) return element;
				if (validType) {
					var children = props.children;
					if (children !== void 0) if (isStaticChildren) if (isArray(children)) {
						for (var i = 0; i < children.length; i++) validateChildKeys(children[i], type);
						if (Object.freeze) Object.freeze(children);
					} else error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
					else validateChildKeys(children, type);
				}
				if (hasOwnProperty.call(props, "key")) {
					var componentName = getComponentNameFromType(type);
					var keys = Object.keys(props).filter(function(k) {
						return k !== "key";
					});
					var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
					if (!didWarnAboutKeySpread[componentName + beforeExample]) {
						error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", beforeExample, componentName, keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}", componentName);
						didWarnAboutKeySpread[componentName + beforeExample] = true;
					}
				}
				if (type === REACT_FRAGMENT_TYPE) validateFragmentProps(element);
				else validatePropTypes(element);
				return element;
			}
			function jsxWithValidationStatic(type, props, key) {
				return jsxWithValidation(type, props, key, true);
			}
			function jsxWithValidationDynamic(type, props, key) {
				return jsxWithValidation(type, props, key, false);
			}
			var jsx = jsxWithValidationDynamic;
			var jsxs = jsxWithValidationStatic;
			exports.Fragment = REACT_FRAGMENT_TYPE;
			exports.jsx = jsx;
			exports.jsxs = jsxs;
		})();
	}));

//#endregion
//#region node_modules/react/jsx-runtime.js
	var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_react_jsx_runtime_development();
	}));

//#endregion
//#region node_modules/@floating-ui/core/dist/floating-ui.core.mjs
var import_jsx_runtime = require_jsx_runtime();
	function computeCoordsFromPlacement(_ref, placement, rtl) {
		let { reference, floating } = _ref;
		const sideAxis = getSideAxis(placement);
		const alignmentAxis = getAlignmentAxis(placement);
		const alignLength = getAxisLength(alignmentAxis);
		const side = getSide(placement);
		const isVertical = sideAxis === "y";
		const commonX = reference.x + reference.width / 2 - floating.width / 2;
		const commonY = reference.y + reference.height / 2 - floating.height / 2;
		const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
		let coords;
		switch (side) {
			case "top":
				coords = {
					x: commonX,
					y: reference.y - floating.height
				};
				break;
			case "bottom":
				coords = {
					x: commonX,
					y: reference.y + reference.height
				};
				break;
			case "right":
				coords = {
					x: reference.x + reference.width,
					y: commonY
				};
				break;
			case "left":
				coords = {
					x: reference.x - floating.width,
					y: commonY
				};
				break;
			default: coords = {
				x: reference.x,
				y: reference.y
			};
		}
		switch (getAlignment(placement)) {
			case "start":
				coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
				break;
			case "end":
				coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
				break;
		}
		return coords;
	}
	/**
	* Resolves with an object of overflow side offsets that determine how much the
	* element is overflowing a given clipping boundary on each side.
	* - positive = overflowing the boundary by that number of pixels
	* - negative = how many pixels left before it will overflow
	* - 0 = lies flush with the boundary
	* @see https://floating-ui.com/docs/detectOverflow
	*/
	async function detectOverflow(state, options) {
		var _await$platform$isEle;
		if (options === void 0) options = {};
		const { x, y, platform, rects, elements, strategy } = state;
		const { boundary = "clippingAncestors", rootBoundary = "viewport", elementContext = "floating", altBoundary = false, padding = 0 } = evaluate(options, state);
		const paddingObject = getPaddingObject(padding);
		const element = elements[altBoundary ? elementContext === "floating" ? "reference" : "floating" : elementContext];
		const clippingClientRect = rectToClientRect(await platform.getClippingRect({
			element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
			boundary,
			rootBoundary,
			strategy
		}));
		const rect = elementContext === "floating" ? {
			x,
			y,
			width: rects.floating.width,
			height: rects.floating.height
		} : rects.reference;
		const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
		const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
			x: 1,
			y: 1
		} : {
			x: 1,
			y: 1
		};
		const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
			elements,
			rect,
			offsetParent,
			strategy
		}) : rect);
		return {
			top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
			bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
			left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
			right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
		};
	}
	var MAX_RESET_COUNT = 50;
	/**
	* Computes the `x` and `y` coordinates that will place the floating element
	* next to a given reference element.
	*
	* This export does not have any `platform` interface logic. You will need to
	* write one for the platform you are using Floating UI with.
	*/
	var computePosition$1 = /* @__PURE__ */ __name(async (reference, floating, config) => {
		const { placement = "bottom", strategy = "absolute", middleware = [], platform } = config;
		const platformWithDetectOverflow = platform.detectOverflow ? platform : {
			...platform,
			detectOverflow
		};
		const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
		let rects = await platform.getElementRects({
			reference,
			floating,
			strategy
		});
		let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
		let statefulPlacement = placement;
		let resetCount = 0;
		const middlewareData = {};
		for (let i = 0; i < middleware.length; i++) {
			const currentMiddleware = middleware[i];
			if (!currentMiddleware) continue;
			const { name, fn } = currentMiddleware;
			const { x: nextX, y: nextY, data, reset } = await fn({
				x,
				y,
				initialPlacement: placement,
				placement: statefulPlacement,
				strategy,
				middlewareData,
				rects,
				platform: platformWithDetectOverflow,
				elements: {
					reference,
					floating
				}
			});
			x = nextX != null ? nextX : x;
			y = nextY != null ? nextY : y;
			middlewareData[name] = {
				...middlewareData[name],
				...data
			};
			if (reset && resetCount < MAX_RESET_COUNT) {
				resetCount++;
				if (typeof reset === "object") {
					if (reset.placement) statefulPlacement = reset.placement;
					if (reset.rects) rects = reset.rects === true ? await platform.getElementRects({
						reference,
						floating,
						strategy
					}) : reset.rects;
					({x, y} = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
				}
				i = -1;
			}
		}
		return {
			x,
			y,
			placement: statefulPlacement,
			strategy,
			middlewareData
		};
	}, "computePosition");
	/**
	* Optimizes the visibility of the floating element by flipping the `placement`
	* in order to keep it in view when the preferred placement(s) will overflow the
	* clipping boundary. Alternative to `autoPlacement`.
	* @see https://floating-ui.com/docs/flip
	*/
	var flip$2 = /* @__PURE__ */ __name(function(options) {
		if (options === void 0) options = {};
		return {
			name: "flip",
			options,
			async fn(state) {
				var _middlewareData$arrow;
				var _middlewareData$flip;
				const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
				const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = "bestFit", fallbackAxisSideDirection = "none", flipAlignment = true, ...detectOverflowOptions } = evaluate(options, state);
				if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
				const side = getSide(placement);
				const initialSideAxis = getSideAxis(initialPlacement);
				const isBasePlacement = getSide(initialPlacement) === initialPlacement;
				const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
				const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
				const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
				if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
				const placements = [initialPlacement, ...fallbackPlacements];
				const overflow = await platform.detectOverflow(state, detectOverflowOptions);
				const overflows = [];
				let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
				if (checkMainAxis) overflows.push(overflow[side]);
				if (checkCrossAxis) {
					const sides = getAlignmentSides(placement, rects, rtl);
					overflows.push(overflow[sides[0]], overflow[sides[1]]);
				}
				overflowsData = [...overflowsData, {
					placement,
					overflows
				}];
				if (!overflows.every((side) => side <= 0)) {
					var _middlewareData$flip2;
					var _overflowsData$filter;
					const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
					const nextPlacement = placements[nextIndex];
					if (nextPlacement) {
						if (!(checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false) || overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) return {
							data: {
								index: nextIndex,
								overflows: overflowsData
							},
							reset: { placement: nextPlacement }
						};
					}
					let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
					if (!resetPlacement) switch (fallbackStrategy) {
						case "bestFit": {
							var _overflowsData$filter2;
							const placement = (_overflowsData$filter2 = overflowsData.filter((d) => {
								if (hasFallbackAxisSideDirection) {
									const currentSideAxis = getSideAxis(d.placement);
									return currentSideAxis === initialSideAxis || currentSideAxis === "y";
								}
								return true;
							}).map((d) => [d.placement, d.overflows.filter((overflow) => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
							if (placement) resetPlacement = placement;
							break;
						}
						case "initialPlacement":
							resetPlacement = initialPlacement;
							break;
					}
					if (placement !== resetPlacement) return { reset: { placement: resetPlacement } };
				}
				return {};
			}
		};
	}, "flip");
	var originSides = /*#__PURE__*/ new Set(["left", "top"]);
	async function convertValueToCoords(state, options) {
		const { placement, platform, elements } = state;
		const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
		const side = getSide(placement);
		const alignment = getAlignment(placement);
		const isVertical = getSideAxis(placement) === "y";
		const mainAxisMulti = originSides.has(side) ? -1 : 1;
		const crossAxisMulti = rtl && isVertical ? -1 : 1;
		const rawValue = evaluate(options, state);
		let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === "number" ? {
			mainAxis: rawValue,
			crossAxis: 0,
			alignmentAxis: null
		} : {
			mainAxis: rawValue.mainAxis || 0,
			crossAxis: rawValue.crossAxis || 0,
			alignmentAxis: rawValue.alignmentAxis
		};
		if (alignment && typeof alignmentAxis === "number") crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
		return isVertical ? {
			x: crossAxis * crossAxisMulti,
			y: mainAxis * mainAxisMulti
		} : {
			x: mainAxis * mainAxisMulti,
			y: crossAxis * crossAxisMulti
		};
	}
	/**
	* Modifies the placement by translating the floating element along the
	* specified axes.
	* A number (shorthand for `mainAxis` or distance), or an axes configuration
	* object may be passed.
	* @see https://floating-ui.com/docs/offset
	*/
	var offset$2 = /* @__PURE__ */ __name(function(options) {
		if (options === void 0) options = 0;
		return {
			name: "offset",
			options,
			async fn(state) {
				var _middlewareData$offse;
				var _middlewareData$arrow;
				const { x, y, placement, middlewareData } = state;
				const diffCoords = await convertValueToCoords(state, options);
				if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
				return {
					x: x + diffCoords.x,
					y: y + diffCoords.y,
					data: {
						...diffCoords,
						placement
					}
				};
			}
		};
	}, "offset");
	/**
	* Provides data that allows you to change the size of the floating element —
	* for instance, prevent it from overflowing the clipping boundary or match the
	* width of the reference element.
	* @see https://floating-ui.com/docs/size
	*/
	var size$2 = /* @__PURE__ */ __name(function(options) {
		if (options === void 0) options = {};
		return {
			name: "size",
			options,
			async fn(state) {
				var _state$middlewareData;
				var _state$middlewareData2;
				const { placement, rects, platform, elements } = state;
				const { apply = () => {}, ...detectOverflowOptions } = evaluate(options, state);
				const overflow = await platform.detectOverflow(state, detectOverflowOptions);
				const side = getSide(placement);
				const alignment = getAlignment(placement);
				const isYAxis = getSideAxis(placement) === "y";
				const { width, height } = rects.floating;
				let heightSide;
				let widthSide;
				if (side === "top" || side === "bottom") {
					heightSide = side;
					widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
				} else {
					widthSide = side;
					heightSide = alignment === "end" ? "top" : "bottom";
				}
				const maximumClippingHeight = height - overflow.top - overflow.bottom;
				const maximumClippingWidth = width - overflow.left - overflow.right;
				const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
				const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
				const noShift = !state.middlewareData.shift;
				let availableHeight = overflowAvailableHeight;
				let availableWidth = overflowAvailableWidth;
				if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) availableWidth = maximumClippingWidth;
				if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) availableHeight = maximumClippingHeight;
				if (noShift && !alignment) {
					const xMin = max(overflow.left, 0);
					const xMax = max(overflow.right, 0);
					const yMin = max(overflow.top, 0);
					const yMax = max(overflow.bottom, 0);
					if (isYAxis) availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
					else availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
				}
				await apply({
					...state,
					availableWidth,
					availableHeight
				});
				const nextDimensions = await platform.getDimensions(elements.floating);
				if (width !== nextDimensions.width || height !== nextDimensions.height) return { reset: { rects: true } };
				return {};
			}
		};
	}, "size");

//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
	function getCssDimensions(element) {
		const css = getComputedStyle$1(element);
		let width = parseFloat(css.width) || 0;
		let height = parseFloat(css.height) || 0;
		const hasOffset = isHTMLElement(element);
		const offsetWidth = hasOffset ? element.offsetWidth : width;
		const offsetHeight = hasOffset ? element.offsetHeight : height;
		const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
		if (shouldFallback) {
			width = offsetWidth;
			height = offsetHeight;
		}
		return {
			width,
			height,
			$: shouldFallback
		};
	}
	function unwrapElement(element) {
		return !isElement(element) ? element.contextElement : element;
	}
	function getScale(element) {
		const domElement = unwrapElement(element);
		if (!isHTMLElement(domElement)) return createCoords(1);
		const rect = domElement.getBoundingClientRect();
		const { width, height, $ } = getCssDimensions(domElement);
		let x = ($ ? round(rect.width) : rect.width) / width;
		let y = ($ ? round(rect.height) : rect.height) / height;
		if (!x || !Number.isFinite(x)) x = 1;
		if (!y || !Number.isFinite(y)) y = 1;
		return {
			x,
			y
		};
	}
	var noOffsets = /*#__PURE__*/ createCoords(0);
	function getVisualOffsets(element) {
		const win = getWindow(element);
		if (!isWebKit() || !win.visualViewport) return noOffsets;
		return {
			x: win.visualViewport.offsetLeft,
			y: win.visualViewport.offsetTop
		};
	}
	function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
		if (isFixed === void 0) isFixed = false;
		if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) return false;
		return isFixed;
	}
	function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
		if (includeScale === void 0) includeScale = false;
		if (isFixedStrategy === void 0) isFixedStrategy = false;
		const clientRect = element.getBoundingClientRect();
		const domElement = unwrapElement(element);
		let scale = createCoords(1);
		if (includeScale) if (offsetParent) {
			if (isElement(offsetParent)) scale = getScale(offsetParent);
		} else scale = getScale(element);
		const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
		let x = (clientRect.left + visualOffsets.x) / scale.x;
		let y = (clientRect.top + visualOffsets.y) / scale.y;
		let width = clientRect.width / scale.x;
		let height = clientRect.height / scale.y;
		if (domElement) {
			const win = getWindow(domElement);
			const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
			let currentWin = win;
			let currentIFrame = getFrameElement(currentWin);
			while (currentIFrame && offsetParent && offsetWin !== currentWin) {
				const iframeScale = getScale(currentIFrame);
				const iframeRect = currentIFrame.getBoundingClientRect();
				const css = getComputedStyle$1(currentIFrame);
				const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
				const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
				x *= iframeScale.x;
				y *= iframeScale.y;
				width *= iframeScale.x;
				height *= iframeScale.y;
				x += left;
				y += top;
				currentWin = getWindow(currentIFrame);
				currentIFrame = getFrameElement(currentWin);
			}
		}
		return rectToClientRect({
			width,
			height,
			x,
			y
		});
	}
	function getWindowScrollBarX(element, rect) {
		const leftScroll = getNodeScroll(element).scrollLeft;
		if (!rect) return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
		return rect.left + leftScroll;
	}
	function getHTMLOffset(documentElement, scroll) {
		const htmlRect = documentElement.getBoundingClientRect();
		return {
			x: htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect),
			y: htmlRect.top + scroll.scrollTop
		};
	}
	function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
		let { elements, rect, offsetParent, strategy } = _ref;
		const isFixed = strategy === "fixed";
		const documentElement = getDocumentElement(offsetParent);
		const topLayer = elements ? isTopLayer(elements.floating) : false;
		if (offsetParent === documentElement || topLayer && isFixed) return rect;
		let scroll = {
			scrollLeft: 0,
			scrollTop: 0
		};
		let scale = createCoords(1);
		const offsets = createCoords(0);
		const isOffsetParentAnElement = isHTMLElement(offsetParent);
		if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
			if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
			if (isOffsetParentAnElement) {
				const offsetRect = getBoundingClientRect(offsetParent);
				scale = getScale(offsetParent);
				offsets.x = offsetRect.x + offsetParent.clientLeft;
				offsets.y = offsetRect.y + offsetParent.clientTop;
			}
		}
		const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
		return {
			width: rect.width * scale.x,
			height: rect.height * scale.y,
			x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
			y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
		};
	}
	function getClientRects(element) {
		return Array.from(element.getClientRects());
	}
	function getDocumentRect(element) {
		const html = getDocumentElement(element);
		const scroll = getNodeScroll(element);
		const body = element.ownerDocument.body;
		const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
		const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
		let x = -scroll.scrollLeft + getWindowScrollBarX(element);
		const y = -scroll.scrollTop;
		if (getComputedStyle$1(body).direction === "rtl") x += max(html.clientWidth, body.clientWidth) - width;
		return {
			width,
			height,
			x,
			y
		};
	}
	var SCROLLBAR_MAX = 25;
	function getViewportRect(element, strategy) {
		const win = getWindow(element);
		const html = getDocumentElement(element);
		const visualViewport = win.visualViewport;
		let width = html.clientWidth;
		let height = html.clientHeight;
		let x = 0;
		let y = 0;
		if (visualViewport) {
			width = visualViewport.width;
			height = visualViewport.height;
			const visualViewportBased = isWebKit();
			if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
				x = visualViewport.offsetLeft;
				y = visualViewport.offsetTop;
			}
		}
		const windowScrollbarX = getWindowScrollBarX(html);
		if (windowScrollbarX <= 0) {
			const doc = html.ownerDocument;
			const body = doc.body;
			const bodyStyles = getComputedStyle(body);
			const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
			const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
			if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) width -= clippingStableScrollbarWidth;
		} else if (windowScrollbarX <= SCROLLBAR_MAX) width += windowScrollbarX;
		return {
			width,
			height,
			x,
			y
		};
	}
	function getInnerBoundingClientRect(element, strategy) {
		const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
		const top = clientRect.top + element.clientTop;
		const left = clientRect.left + element.clientLeft;
		const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
		return {
			width: element.clientWidth * scale.x,
			height: element.clientHeight * scale.y,
			x: left * scale.x,
			y: top * scale.y
		};
	}
	function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
		let rect;
		if (clippingAncestor === "viewport") rect = getViewportRect(element, strategy);
		else if (clippingAncestor === "document") rect = getDocumentRect(getDocumentElement(element));
		else if (isElement(clippingAncestor)) rect = getInnerBoundingClientRect(clippingAncestor, strategy);
		else {
			const visualOffsets = getVisualOffsets(element);
			rect = {
				x: clippingAncestor.x - visualOffsets.x,
				y: clippingAncestor.y - visualOffsets.y,
				width: clippingAncestor.width,
				height: clippingAncestor.height
			};
		}
		return rectToClientRect(rect);
	}
	function hasFixedPositionAncestor(element, stopNode) {
		const parentNode = getParentNode(element);
		if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) return false;
		return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
	}
	function getClippingElementAncestors(element, cache) {
		const cachedResult = cache.get(element);
		if (cachedResult) return cachedResult;
		let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
		let currentContainingBlockComputedStyle = null;
		const elementIsFixed = getComputedStyle$1(element).position === "fixed";
		let currentNode = elementIsFixed ? getParentNode(element) : element;
		while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
			const computedStyle = getComputedStyle$1(currentNode);
			const currentNodeIsContaining = isContainingBlock(currentNode);
			if (!currentNodeIsContaining && computedStyle.position === "fixed") currentContainingBlockComputedStyle = null;
			if (elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && (currentContainingBlockComputedStyle.position === "absolute" || currentContainingBlockComputedStyle.position === "fixed") || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode)) result = result.filter((ancestor) => ancestor !== currentNode);
			else currentContainingBlockComputedStyle = computedStyle;
			currentNode = getParentNode(currentNode);
		}
		cache.set(element, result);
		return result;
	}
	function getClippingRect(_ref) {
		let { element, boundary, rootBoundary, strategy } = _ref;
		const clippingAncestors = [...boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary), rootBoundary];
		const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
		let top = firstRect.top;
		let right = firstRect.right;
		let bottom = firstRect.bottom;
		let left = firstRect.left;
		for (let i = 1; i < clippingAncestors.length; i++) {
			const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
			top = max(rect.top, top);
			right = min(rect.right, right);
			bottom = min(rect.bottom, bottom);
			left = max(rect.left, left);
		}
		return {
			width: right - left,
			height: bottom - top,
			x: left,
			y: top
		};
	}
	function getDimensions(element) {
		const { width, height } = getCssDimensions(element);
		return {
			width,
			height
		};
	}
	function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
		const isOffsetParentAnElement = isHTMLElement(offsetParent);
		const documentElement = getDocumentElement(offsetParent);
		const isFixed = strategy === "fixed";
		const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
		let scroll = {
			scrollLeft: 0,
			scrollTop: 0
		};
		const offsets = createCoords(0);
		function setLeftRTLScrollbarOffset() {
			offsets.x = getWindowScrollBarX(documentElement);
		}
		if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
			if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
			if (isOffsetParentAnElement) {
				const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
				offsets.x = offsetRect.x + offsetParent.clientLeft;
				offsets.y = offsetRect.y + offsetParent.clientTop;
			} else if (documentElement) setLeftRTLScrollbarOffset();
		}
		if (isFixed && !isOffsetParentAnElement && documentElement) setLeftRTLScrollbarOffset();
		const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
		return {
			x: rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x,
			y: rect.top + scroll.scrollTop - offsets.y - htmlOffset.y,
			width: rect.width,
			height: rect.height
		};
	}
	function isStaticPositioned(element) {
		return getComputedStyle$1(element).position === "static";
	}
	function getTrueOffsetParent(element, polyfill) {
		if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") return null;
		if (polyfill) return polyfill(element);
		let rawOffsetParent = element.offsetParent;
		if (getDocumentElement(element) === rawOffsetParent) rawOffsetParent = rawOffsetParent.ownerDocument.body;
		return rawOffsetParent;
	}
	function getOffsetParent(element, polyfill) {
		const win = getWindow(element);
		if (isTopLayer(element)) return win;
		if (!isHTMLElement(element)) {
			let svgOffsetParent = getParentNode(element);
			while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
				if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) return svgOffsetParent;
				svgOffsetParent = getParentNode(svgOffsetParent);
			}
			return win;
		}
		let offsetParent = getTrueOffsetParent(element, polyfill);
		while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) offsetParent = getTrueOffsetParent(offsetParent, polyfill);
		if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) return win;
		return offsetParent || getContainingBlock(element) || win;
	}
	var getElementRects = async function(data) {
		const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
		const getDimensionsFn = this.getDimensions;
		const floatingDimensions = await getDimensionsFn(data.floating);
		return {
			reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
			floating: {
				x: 0,
				y: 0,
				width: floatingDimensions.width,
				height: floatingDimensions.height
			}
		};
	};
	function isRTL(element) {
		return getComputedStyle$1(element).direction === "rtl";
	}
	var platform = {
		convertOffsetParentRelativeRectToViewportRelativeRect,
		getDocumentElement,
		getClippingRect,
		getOffsetParent,
		getElementRects,
		getClientRects,
		getDimensions,
		getScale,
		isElement,
		isRTL
	};
	function rectsAreEqual(a, b) {
		return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
	}
	function observeMove(element, onMove) {
		let io = null;
		let timeoutId;
		const root = getDocumentElement(element);
		function cleanup() {
			var _io;
			clearTimeout(timeoutId);
			(_io = io) == null || _io.disconnect();
			io = null;
		}
		function refresh(skip, threshold) {
			if (skip === void 0) skip = false;
			if (threshold === void 0) threshold = 1;
			cleanup();
			const elementRectForRootMargin = element.getBoundingClientRect();
			const { left, top, width, height } = elementRectForRootMargin;
			if (!skip) onMove();
			if (!width || !height) return;
			const insetTop = floor(top);
			const insetRight = floor(root.clientWidth - (left + width));
			const insetBottom = floor(root.clientHeight - (top + height));
			const insetLeft = floor(left);
			const options = {
				rootMargin: -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px",
				threshold: max(0, min(1, threshold)) || 1
			};
			let isFirstUpdate = true;
			function handleObserve(entries) {
				const ratio = entries[0].intersectionRatio;
				if (ratio !== threshold) {
					if (!isFirstUpdate) return refresh();
					if (!ratio) timeoutId = setTimeout(() => {
						refresh(false, 1e-7);
					}, 1e3);
					else refresh(false, ratio);
				}
				if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) refresh();
				isFirstUpdate = false;
			}
			try {
				io = new IntersectionObserver(handleObserve, {
					...options,
					root: root.ownerDocument
				});
			} catch (_e) {
				io = new IntersectionObserver(handleObserve, options);
			}
			io.observe(element);
		}
		refresh(true);
		return cleanup;
	}
	/**
	* Automatically updates the position of the floating element when necessary.
	* Should only be called when the floating element is mounted on the DOM or
	* visible on the screen.
	* @returns cleanup function that should be invoked when the floating element is
	* removed from the DOM or hidden from the screen.
	* @see https://floating-ui.com/docs/autoUpdate
	*/
	function autoUpdate(reference, floating, update, options) {
		if (options === void 0) options = {};
		const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === "function", layoutShift = typeof IntersectionObserver === "function", animationFrame = false } = options;
		const referenceEl = unwrapElement(reference);
		const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
		ancestors.forEach((ancestor) => {
			ancestorScroll && ancestor.addEventListener("scroll", update, { passive: true });
			ancestorResize && ancestor.addEventListener("resize", update);
		});
		const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
		let reobserveFrame = -1;
		let resizeObserver = null;
		if (elementResize) {
			resizeObserver = new ResizeObserver((_ref) => {
				let [firstEntry] = _ref;
				if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
					resizeObserver.unobserve(floating);
					cancelAnimationFrame(reobserveFrame);
					reobserveFrame = requestAnimationFrame(() => {
						var _resizeObserver;
						(_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
					});
				}
				update();
			});
			if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
			if (floating) resizeObserver.observe(floating);
		}
		let frameId;
		let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
		if (animationFrame) frameLoop();
		function frameLoop() {
			const nextRefRect = getBoundingClientRect(reference);
			if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) update();
			prevRefRect = nextRefRect;
			frameId = requestAnimationFrame(frameLoop);
		}
		update();
		return () => {
			var _resizeObserver2;
			ancestors.forEach((ancestor) => {
				ancestorScroll && ancestor.removeEventListener("scroll", update);
				ancestorResize && ancestor.removeEventListener("resize", update);
			});
			cleanupIo?.();
			(_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
			resizeObserver = null;
			if (animationFrame) cancelAnimationFrame(frameId);
		};
	}
	/**
	* Modifies the placement by translating the floating element along the
	* specified axes.
	* A number (shorthand for `mainAxis` or distance), or an axes configuration
	* object may be passed.
	* @see https://floating-ui.com/docs/offset
	*/
	var offset$1 = offset$2;
	/**
	* Optimizes the visibility of the floating element by flipping the `placement`
	* in order to keep it in view when the preferred placement(s) will overflow the
	* clipping boundary. Alternative to `autoPlacement`.
	* @see https://floating-ui.com/docs/flip
	*/
	var flip$1 = flip$2;
	/**
	* Provides data that allows you to change the size of the floating element —
	* for instance, prevent it from overflowing the clipping boundary or match the
	* width of the reference element.
	* @see https://floating-ui.com/docs/size
	*/
	var size$1 = size$2;
	/**
	* Computes the `x` and `y` coordinates that will place the floating element
	* next to a given reference element.
	*/
	var computePosition = (reference, floating, options) => {
		const cache = /* @__PURE__ */ new Map();
		const mergedOptions = {
			platform,
			...options
		};
		const platformWithCache = {
			...mergedOptions.platform,
			_c: cache
		};
		return computePosition$1(reference, floating, {
			...mergedOptions,
			platform: platformWithCache
		});
	};

//#endregion
//#region node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
	var index = typeof document !== "undefined" ? react$1.useLayoutEffect : function noop() {};
	function deepEqual(a, b) {
		if (a === b) return true;
		if (typeof a !== typeof b) return false;
		if (typeof a === "function" && a.toString() === b.toString()) return true;
		let length;
		let i;
		let keys;
		if (a && b && typeof a === "object") {
			if (Array.isArray(a)) {
				length = a.length;
				if (length !== b.length) return false;
				for (i = length; i-- !== 0;) if (!deepEqual(a[i], b[i])) return false;
				return true;
			}
			keys = Object.keys(a);
			length = keys.length;
			if (length !== Object.keys(b).length) return false;
			for (i = length; i-- !== 0;) if (!{}.hasOwnProperty.call(b, keys[i])) return false;
			for (i = length; i-- !== 0;) {
				const key = keys[i];
				if (key === "_owner" && a.$$typeof) continue;
				if (!deepEqual(a[key], b[key])) return false;
			}
			return true;
		}
		return a !== a && b !== b;
	}
	function getDPR(element) {
		if (typeof window === "undefined") return 1;
		return (element.ownerDocument.defaultView || window).devicePixelRatio || 1;
	}
	function roundByDPR(element, value) {
		const dpr = getDPR(element);
		return Math.round(value * dpr) / dpr;
	}
	function useLatestRef(value) {
		const ref = react$1.useRef(value);
		index(() => {
			ref.current = value;
		});
		return ref;
	}
	/**
	* Provides data to position a floating element.
	* @see https://floating-ui.com/docs/useFloating
	*/
	function useFloating$1(options) {
		if (options === void 0) options = {};
		const { placement = "bottom", strategy = "absolute", middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;
		const [data, setData] = react$1.useState({
			x: 0,
			y: 0,
			strategy,
			placement,
			middlewareData: {},
			isPositioned: false
		});
		const [latestMiddleware, setLatestMiddleware] = react$1.useState(middleware);
		if (!deepEqual(latestMiddleware, middleware)) setLatestMiddleware(middleware);
		const [_reference, _setReference] = react$1.useState(null);
		const [_floating, _setFloating] = react$1.useState(null);
		const setReference = react$1.useCallback((node) => {
			if (node !== referenceRef.current) {
				referenceRef.current = node;
				_setReference(node);
			}
		}, []);
		const setFloating = react$1.useCallback((node) => {
			if (node !== floatingRef.current) {
				floatingRef.current = node;
				_setFloating(node);
			}
		}, []);
		const referenceEl = externalReference || _reference;
		const floatingEl = externalFloating || _floating;
		const referenceRef = react$1.useRef(null);
		const floatingRef = react$1.useRef(null);
		const dataRef = react$1.useRef(data);
		const hasWhileElementsMounted = whileElementsMounted != null;
		const whileElementsMountedRef = useLatestRef(whileElementsMounted);
		const platformRef = useLatestRef(platform);
		const openRef = useLatestRef(open);
		const update = react$1.useCallback(() => {
			if (!referenceRef.current || !floatingRef.current) return;
			const config = {
				placement,
				strategy,
				middleware: latestMiddleware
			};
			if (platformRef.current) config.platform = platformRef.current;
			computePosition(referenceRef.current, floatingRef.current, config).then((data) => {
				const fullData = {
					...data,
					isPositioned: openRef.current !== false
				};
				if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
					dataRef.current = fullData;
					react_dom.flushSync(() => {
						setData(fullData);
					});
				}
			});
		}, [
			latestMiddleware,
			placement,
			strategy,
			platformRef,
			openRef
		]);
		index(() => {
			if (open === false && dataRef.current.isPositioned) {
				dataRef.current.isPositioned = false;
				setData((data) => ({
					...data,
					isPositioned: false
				}));
			}
		}, [open]);
		const isMountedRef = react$1.useRef(false);
		index(() => {
			isMountedRef.current = true;
			return () => {
				isMountedRef.current = false;
			};
		}, []);
		index(() => {
			if (referenceEl) referenceRef.current = referenceEl;
			if (floatingEl) floatingRef.current = floatingEl;
			if (referenceEl && floatingEl) {
				if (whileElementsMountedRef.current) return whileElementsMountedRef.current(referenceEl, floatingEl, update);
				update();
			}
		}, [
			referenceEl,
			floatingEl,
			update,
			whileElementsMountedRef,
			hasWhileElementsMounted
		]);
		const refs = react$1.useMemo(() => ({
			reference: referenceRef,
			floating: floatingRef,
			setReference,
			setFloating
		}), [setReference, setFloating]);
		const elements = react$1.useMemo(() => ({
			reference: referenceEl,
			floating: floatingEl
		}), [referenceEl, floatingEl]);
		const floatingStyles = react$1.useMemo(() => {
			const initialStyles = {
				position: strategy,
				left: 0,
				top: 0
			};
			if (!elements.floating) return initialStyles;
			const x = roundByDPR(elements.floating, data.x);
			const y = roundByDPR(elements.floating, data.y);
			if (transform) return {
				...initialStyles,
				transform: "translate(" + x + "px, " + y + "px)",
				...getDPR(elements.floating) >= 1.5 && { willChange: "transform" }
			};
			return {
				position: strategy,
				left: x,
				top: y
			};
		}, [
			strategy,
			transform,
			elements.floating,
			data.x,
			data.y
		]);
		return react$1.useMemo(() => ({
			...data,
			update,
			refs,
			elements,
			floatingStyles
		}), [
			data,
			update,
			refs,
			elements,
			floatingStyles
		]);
	}
	__name(useFloating$1, "useFloating");
	/**
	* Modifies the placement by translating the floating element along the
	* specified axes.
	* A number (shorthand for `mainAxis` or distance), or an axes configuration
	* object may be passed.
	* @see https://floating-ui.com/docs/offset
	*/
	var offset = (options, deps) => {
		const result = offset$1(options);
		return {
			name: result.name,
			fn: result.fn,
			options: [options, deps]
		};
	};
	/**
	* Optimizes the visibility of the floating element by flipping the `placement`
	* in order to keep it in view when the preferred placement(s) will overflow the
	* clipping boundary. Alternative to `autoPlacement`.
	* @see https://floating-ui.com/docs/flip
	*/
	var flip = (options, deps) => {
		const result = flip$1(options);
		return {
			name: result.name,
			fn: result.fn,
			options: [options, deps]
		};
	};
	/**
	* Provides data that allows you to change the size of the floating element —
	* for instance, prevent it from overflowing the clipping boundary or match the
	* width of the reference element.
	* @see https://floating-ui.com/docs/size
	*/
	var size = (options, deps) => {
		const result = size$1(options);
		return {
			name: result.name,
			fn: result.fn,
			options: [options, deps]
		};
	};

//#endregion
//#region node_modules/@floating-ui/react/dist/floating-ui.react.mjs
	var FOCUSABLE_ATTRIBUTE = "data-floating-ui-focusable";
	var ACTIVE_KEY = "active";
	var SELECTED_KEY = "selected";
	var ARROW_LEFT = "ArrowLeft";
	var ARROW_RIGHT = "ArrowRight";
	var ARROW_UP = "ArrowUp";
	var ARROW_DOWN = "ArrowDown";
	var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
	var verticalKeys = [ARROW_UP, ARROW_DOWN];
	var allKeys = [...horizontalKeys, ...verticalKeys];
	var SafeReact = { ...react$1 };
	var serverHandoffComplete = false;
	var count = 0;
	var genId = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++;
	function useFloatingId() {
		const [id, setId] = react$1.useState(() => serverHandoffComplete ? genId() : void 0);
		index$1(() => {
			if (id == null) setId(genId());
		}, []);
		react$1.useEffect(() => {
			serverHandoffComplete = true;
		}, []);
		return id;
	}
	/**
	* Uses React 18's built-in `useId()` when available, or falls back to a
	* slightly less performant (requiring a double render) implementation for
	* earlier React versions.
	* @see https://floating-ui.com/docs/react-utils#useid
	*/
	var useId = SafeReact.useId || useFloatingId;
	var devMessageSet;
	devMessageSet = /*#__PURE__*/ new Set();
	function error() {
		var _devMessageSet3;
		for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) messages[_key2] = arguments[_key2];
		const message = "Floating UI: " + messages.join(" ");
		if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
			var _devMessageSet4;
			(_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
			console.error(message);
		}
	}
	function createEventEmitter() {
		const map = /* @__PURE__ */ new Map();
		return {
			emit(event, data) {
				var _map$get;
				(_map$get = map.get(event)) == null || _map$get.forEach((listener) => listener(data));
			},
			on(event, listener) {
				if (!map.has(event)) map.set(event, /* @__PURE__ */ new Set());
				map.get(event).add(listener);
			},
			off(event, listener) {
				var _map$get2;
				(_map$get2 = map.get(event)) == null || _map$get2.delete(listener);
			}
		};
	}
	var FloatingNodeContext = /*#__PURE__*/ react$1.createContext(null);
	var FloatingTreeContext = /*#__PURE__*/ react$1.createContext(null);
	/**
	* Returns the parent node id for nested floating elements, if available.
	* Returns `null` for top-level floating elements.
	*/
	var useFloatingParentNodeId = () => {
		var _React$useContext;
		return ((_React$useContext = react$1.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
	};
	/**
	* Returns the nearest floating tree context, if available.
	*/
	var useFloatingTree = () => react$1.useContext(FloatingTreeContext);
	function createAttribute(name) {
		return "data-floating-ui-" + name;
	}
	function clearTimeoutIfSet(timeoutRef) {
		if (timeoutRef.current !== -1) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = -1;
		}
	}
	var safePolygonIdentifier = /*#__PURE__*/ createAttribute("safe-polygon");
	function getDelay(value, prop, pointerType) {
		if (pointerType && !isMouseLikePointerType(pointerType)) return 0;
		if (typeof value === "number") return value;
		if (typeof value === "function") {
			const result = value();
			if (typeof result === "number") return result;
			return result == null ? void 0 : result[prop];
		}
		return value == null ? void 0 : value[prop];
	}
	function getRestMs(value) {
		if (typeof value === "function") return value();
		return value;
	}
	/**
	* Opens the floating element while hovering over the reference element, like
	* CSS `:hover`.
	* @see https://floating-ui.com/docs/useHover
	*/
	function useHover(context, props) {
		if (props === void 0) props = {};
		const { open, onOpenChange, dataRef, events, elements } = context;
		const { enabled = true, delay = 0, handleClose = null, mouseOnly = false, restMs = 0, move = true } = props;
		const tree = useFloatingTree();
		const parentId = useFloatingParentNodeId();
		const handleCloseRef = useLatestRef$1(handleClose);
		const delayRef = useLatestRef$1(delay);
		const openRef = useLatestRef$1(open);
		const restMsRef = useLatestRef$1(restMs);
		const pointerTypeRef = react$1.useRef();
		const timeoutRef = react$1.useRef(-1);
		const handlerRef = react$1.useRef();
		const restTimeoutRef = react$1.useRef(-1);
		const blockMouseMoveRef = react$1.useRef(true);
		const performedPointerEventsMutationRef = react$1.useRef(false);
		const unbindMouseMoveRef = react$1.useRef(() => {});
		const restTimeoutPendingRef = react$1.useRef(false);
		const isHoverOpen = useEffectEvent(() => {
			var _dataRef$current$open;
			const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
			return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
		});
		react$1.useEffect(() => {
			if (!enabled) return;
			function onOpenChange(_ref) {
				let { open } = _ref;
				if (!open) {
					clearTimeoutIfSet(timeoutRef);
					clearTimeoutIfSet(restTimeoutRef);
					blockMouseMoveRef.current = true;
					restTimeoutPendingRef.current = false;
				}
			}
			events.on("openchange", onOpenChange);
			return () => {
				events.off("openchange", onOpenChange);
			};
		}, [enabled, events]);
		react$1.useEffect(() => {
			if (!enabled) return;
			if (!handleCloseRef.current) return;
			if (!open) return;
			function onLeave(event) {
				if (isHoverOpen()) onOpenChange(false, event, "hover");
			}
			const html = getDocument(elements.floating).documentElement;
			html.addEventListener("mouseleave", onLeave);
			return () => {
				html.removeEventListener("mouseleave", onLeave);
			};
		}, [
			elements.floating,
			open,
			onOpenChange,
			enabled,
			handleCloseRef,
			isHoverOpen
		]);
		const closeWithDelay = react$1.useCallback(function(event, runElseBranch, reason) {
			if (runElseBranch === void 0) runElseBranch = true;
			if (reason === void 0) reason = "hover";
			const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
			if (closeDelay && !handlerRef.current) {
				clearTimeoutIfSet(timeoutRef);
				timeoutRef.current = window.setTimeout(() => onOpenChange(false, event, reason), closeDelay);
			} else if (runElseBranch) {
				clearTimeoutIfSet(timeoutRef);
				onOpenChange(false, event, reason);
			}
		}, [delayRef, onOpenChange]);
		const cleanupMouseMoveHandler = useEffectEvent(() => {
			unbindMouseMoveRef.current();
			handlerRef.current = void 0;
		});
		const clearPointerEvents = useEffectEvent(() => {
			if (performedPointerEventsMutationRef.current) {
				const body = getDocument(elements.floating).body;
				body.style.pointerEvents = "";
				body.removeAttribute(safePolygonIdentifier);
				performedPointerEventsMutationRef.current = false;
			}
		});
		const isClickLikeOpenEvent = useEffectEvent(() => {
			return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
		});
		react$1.useEffect(() => {
			if (!enabled) return;
			function onReferenceMouseEnter(event) {
				clearTimeoutIfSet(timeoutRef);
				blockMouseMoveRef.current = false;
				if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || getRestMs(restMsRef.current) > 0 && !getDelay(delayRef.current, "open")) return;
				const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
				if (openDelay) timeoutRef.current = window.setTimeout(() => {
					if (!openRef.current) onOpenChange(true, event, "hover");
				}, openDelay);
				else if (!open) onOpenChange(true, event, "hover");
			}
			function onReferenceMouseLeave(event) {
				if (isClickLikeOpenEvent()) {
					clearPointerEvents();
					return;
				}
				unbindMouseMoveRef.current();
				const doc = getDocument(elements.floating);
				clearTimeoutIfSet(restTimeoutRef);
				restTimeoutPendingRef.current = false;
				if (handleCloseRef.current && dataRef.current.floatingContext) {
					if (!open) clearTimeoutIfSet(timeoutRef);
					handlerRef.current = handleCloseRef.current({
						...dataRef.current.floatingContext,
						tree,
						x: event.clientX,
						y: event.clientY,
						onClose() {
							clearPointerEvents();
							cleanupMouseMoveHandler();
							if (!isClickLikeOpenEvent()) closeWithDelay(event, true, "safe-polygon");
						}
					});
					const handler = handlerRef.current;
					doc.addEventListener("mousemove", handler);
					unbindMouseMoveRef.current = () => {
						doc.removeEventListener("mousemove", handler);
					};
					return;
				}
				if (pointerTypeRef.current === "touch" ? !contains(elements.floating, event.relatedTarget) : true) closeWithDelay(event);
			}
			function onScrollMouseLeave(event) {
				if (isClickLikeOpenEvent()) return;
				if (!dataRef.current.floatingContext) return;
				handleCloseRef.current == null || handleCloseRef.current({
					...dataRef.current.floatingContext,
					tree,
					x: event.clientX,
					y: event.clientY,
					onClose() {
						clearPointerEvents();
						cleanupMouseMoveHandler();
						if (!isClickLikeOpenEvent()) closeWithDelay(event);
					}
				})(event);
			}
			function onFloatingMouseEnter() {
				clearTimeoutIfSet(timeoutRef);
			}
			function onFloatingMouseLeave(event) {
				if (!isClickLikeOpenEvent()) closeWithDelay(event, false);
			}
			if (isElement(elements.domReference)) {
				const reference = elements.domReference;
				const floating = elements.floating;
				if (open) reference.addEventListener("mouseleave", onScrollMouseLeave);
				if (move) reference.addEventListener("mousemove", onReferenceMouseEnter, { once: true });
				reference.addEventListener("mouseenter", onReferenceMouseEnter);
				reference.addEventListener("mouseleave", onReferenceMouseLeave);
				if (floating) {
					floating.addEventListener("mouseleave", onScrollMouseLeave);
					floating.addEventListener("mouseenter", onFloatingMouseEnter);
					floating.addEventListener("mouseleave", onFloatingMouseLeave);
				}
				return () => {
					if (open) reference.removeEventListener("mouseleave", onScrollMouseLeave);
					if (move) reference.removeEventListener("mousemove", onReferenceMouseEnter);
					reference.removeEventListener("mouseenter", onReferenceMouseEnter);
					reference.removeEventListener("mouseleave", onReferenceMouseLeave);
					if (floating) {
						floating.removeEventListener("mouseleave", onScrollMouseLeave);
						floating.removeEventListener("mouseenter", onFloatingMouseEnter);
						floating.removeEventListener("mouseleave", onFloatingMouseLeave);
					}
				};
			}
		}, [
			elements,
			enabled,
			context,
			mouseOnly,
			move,
			closeWithDelay,
			cleanupMouseMoveHandler,
			clearPointerEvents,
			onOpenChange,
			open,
			openRef,
			tree,
			delayRef,
			handleCloseRef,
			dataRef,
			isClickLikeOpenEvent,
			restMsRef
		]);
		index$1(() => {
			var _handleCloseRef$curre;
			if (!enabled) return;
			if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && (_handleCloseRef$curre = _handleCloseRef$curre.__options) != null && _handleCloseRef$curre.blockPointerEvents && isHoverOpen()) {
				performedPointerEventsMutationRef.current = true;
				const floatingEl = elements.floating;
				if (isElement(elements.domReference) && floatingEl) {
					var _tree$nodesRef$curren;
					const body = getDocument(elements.floating).body;
					body.setAttribute(safePolygonIdentifier, "");
					const ref = elements.domReference;
					const parentFloating = tree == null || (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null || (_tree$nodesRef$curren = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren.elements.floating;
					if (parentFloating) parentFloating.style.pointerEvents = "";
					body.style.pointerEvents = "none";
					ref.style.pointerEvents = "auto";
					floatingEl.style.pointerEvents = "auto";
					return () => {
						body.style.pointerEvents = "";
						ref.style.pointerEvents = "";
						floatingEl.style.pointerEvents = "";
					};
				}
			}
		}, [
			enabled,
			open,
			parentId,
			elements,
			tree,
			handleCloseRef,
			isHoverOpen
		]);
		index$1(() => {
			if (!open) {
				pointerTypeRef.current = void 0;
				restTimeoutPendingRef.current = false;
				cleanupMouseMoveHandler();
				clearPointerEvents();
			}
		}, [
			open,
			cleanupMouseMoveHandler,
			clearPointerEvents
		]);
		react$1.useEffect(() => {
			return () => {
				cleanupMouseMoveHandler();
				clearTimeoutIfSet(timeoutRef);
				clearTimeoutIfSet(restTimeoutRef);
				clearPointerEvents();
			};
		}, [
			enabled,
			elements.domReference,
			cleanupMouseMoveHandler,
			clearPointerEvents
		]);
		const reference = react$1.useMemo(() => {
			function setPointerRef(event) {
				pointerTypeRef.current = event.pointerType;
			}
			return {
				onPointerDown: setPointerRef,
				onPointerEnter: setPointerRef,
				onMouseMove(event) {
					const { nativeEvent } = event;
					function handleMouseMove() {
						if (!blockMouseMoveRef.current && !openRef.current) onOpenChange(true, nativeEvent, "hover");
					}
					if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current)) return;
					if (open || getRestMs(restMsRef.current) === 0) return;
					if (restTimeoutPendingRef.current && event.movementX ** 2 + event.movementY ** 2 < 2) return;
					clearTimeoutIfSet(restTimeoutRef);
					if (pointerTypeRef.current === "touch") handleMouseMove();
					else {
						restTimeoutPendingRef.current = true;
						restTimeoutRef.current = window.setTimeout(handleMouseMove, getRestMs(restMsRef.current));
					}
				}
			};
		}, [
			mouseOnly,
			onOpenChange,
			open,
			openRef,
			restMsRef
		]);
		return react$1.useMemo(() => enabled ? { reference } : {}, [enabled, reference]);
	}
	var HIDDEN_STYLES = {
		border: 0,
		clip: "rect(0 0 0 0)",
		height: "1px",
		margin: "-1px",
		overflow: "hidden",
		padding: 0,
		position: "fixed",
		whiteSpace: "nowrap",
		width: "1px",
		top: 0,
		left: 0
	};
	var FocusGuard = /*#__PURE__*/ react$1.forwardRef(function FocusGuard(props, ref) {
		const [role, setRole] = react$1.useState();
		index$1(() => {
			if (isSafari()) setRole("button");
		}, []);
		const restProps = {
			ref,
			tabIndex: 0,
			role,
			"aria-hidden": role ? void 0 : true,
			[createAttribute("focus-guard")]: "",
			style: HIDDEN_STYLES
		};
		return /*#__PURE__*/ (0, import_jsx_runtime.jsx)("span", {
			...props,
			...restProps
		});
	});
	var HIDDEN_OWNER_STYLES = {
		clipPath: "inset(50%)",
		position: "fixed",
		top: 0,
		left: 0
	};
	var PortalContext = /*#__PURE__*/ react$1.createContext(null);
	var attr = /*#__PURE__*/ createAttribute("portal");
	/**
	* @see https://floating-ui.com/docs/FloatingPortal#usefloatingportalnode
	*/
	function useFloatingPortalNode(props) {
		if (props === void 0) props = {};
		const { id, root } = props;
		const uniqueId = useId();
		const portalContext = usePortalContext();
		const [portalNode, setPortalNode] = react$1.useState(null);
		const portalNodeRef = react$1.useRef(null);
		index$1(() => {
			return () => {
				portalNode?.remove();
				queueMicrotask(() => {
					portalNodeRef.current = null;
				});
			};
		}, [portalNode]);
		index$1(() => {
			if (!uniqueId) return;
			if (portalNodeRef.current) return;
			const existingIdRoot = id ? document.getElementById(id) : null;
			if (!existingIdRoot) return;
			const subRoot = document.createElement("div");
			subRoot.id = uniqueId;
			subRoot.setAttribute(attr, "");
			existingIdRoot.appendChild(subRoot);
			portalNodeRef.current = subRoot;
			setPortalNode(subRoot);
		}, [id, uniqueId]);
		index$1(() => {
			if (root === null) return;
			if (!uniqueId) return;
			if (portalNodeRef.current) return;
			let container = root || (portalContext == null ? void 0 : portalContext.portalNode);
			if (container && !isNode(container)) container = container.current;
			container = container || document.body;
			let idWrapper = null;
			if (id) {
				idWrapper = document.createElement("div");
				idWrapper.id = id;
				container.appendChild(idWrapper);
			}
			const subRoot = document.createElement("div");
			subRoot.id = uniqueId;
			subRoot.setAttribute(attr, "");
			container = idWrapper || container;
			container.appendChild(subRoot);
			portalNodeRef.current = subRoot;
			setPortalNode(subRoot);
		}, [
			id,
			root,
			uniqueId,
			portalContext
		]);
		return portalNode;
	}
	/**
	* Portals the floating element into a given container element — by default,
	* outside of the app root and into the body.
	* This is necessary to ensure the floating element can appear outside any
	* potential parent containers that cause clipping (such as `overflow: hidden`),
	* while retaining its location in the React tree.
	* @see https://floating-ui.com/docs/FloatingPortal
	*/
	function FloatingPortal(props) {
		const { children, id, root, preserveTabOrder = true } = props;
		const portalNode = useFloatingPortalNode({
			id,
			root
		});
		const [focusManagerState, setFocusManagerState] = react$1.useState(null);
		const beforeOutsideRef = react$1.useRef(null);
		const afterOutsideRef = react$1.useRef(null);
		const beforeInsideRef = react$1.useRef(null);
		const afterInsideRef = react$1.useRef(null);
		const modal = focusManagerState == null ? void 0 : focusManagerState.modal;
		const open = focusManagerState == null ? void 0 : focusManagerState.open;
		const shouldRenderGuards = !!focusManagerState && !focusManagerState.modal && focusManagerState.open && preserveTabOrder && !!(root || portalNode);
		react$1.useEffect(() => {
			if (!portalNode || !preserveTabOrder || modal) return;
			function onFocus(event) {
				if (portalNode && isOutsideEvent(event)) (event.type === "focusin" ? enableFocusInside : disableFocusInside)(portalNode);
			}
			portalNode.addEventListener("focusin", onFocus, true);
			portalNode.addEventListener("focusout", onFocus, true);
			return () => {
				portalNode.removeEventListener("focusin", onFocus, true);
				portalNode.removeEventListener("focusout", onFocus, true);
			};
		}, [
			portalNode,
			preserveTabOrder,
			modal
		]);
		react$1.useEffect(() => {
			if (!portalNode) return;
			if (open) return;
			enableFocusInside(portalNode);
		}, [open, portalNode]);
		return /*#__PURE__*/ (0, import_jsx_runtime.jsxs)(PortalContext.Provider, {
			value: react$1.useMemo(() => ({
				preserveTabOrder,
				beforeOutsideRef,
				afterOutsideRef,
				beforeInsideRef,
				afterInsideRef,
				portalNode,
				setFocusManagerState
			}), [preserveTabOrder, portalNode]),
			children: [
				shouldRenderGuards && portalNode && /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FocusGuard, {
					"data-type": "outside",
					ref: beforeOutsideRef,
					onFocus: (event) => {
						if (isOutsideEvent(event, portalNode)) {
							var _beforeInsideRef$curr;
							(_beforeInsideRef$curr = beforeInsideRef.current) == null || _beforeInsideRef$curr.focus();
						} else getPreviousTabbable(focusManagerState ? focusManagerState.domReference : null)?.focus();
					}
				}),
				shouldRenderGuards && portalNode && /*#__PURE__*/ (0, import_jsx_runtime.jsx)("span", {
					"aria-owns": portalNode.id,
					style: HIDDEN_OWNER_STYLES
				}),
				portalNode && /*#__PURE__*/ react_dom.createPortal(children, portalNode),
				shouldRenderGuards && portalNode && /*#__PURE__*/ (0, import_jsx_runtime.jsx)(FocusGuard, {
					"data-type": "outside",
					ref: afterOutsideRef,
					onFocus: (event) => {
						if (isOutsideEvent(event, portalNode)) {
							var _afterInsideRef$curre;
							(_afterInsideRef$curre = afterInsideRef.current) == null || _afterInsideRef$curre.focus();
						} else {
							getNextTabbable(focusManagerState ? focusManagerState.domReference : null)?.focus();
							focusManagerState != null && focusManagerState.closeOnFocusOut && focusManagerState?.onOpenChange(false, event.nativeEvent, "focus-out");
						}
					}
				})
			]
		});
	}
	var usePortalContext = () => react$1.useContext(PortalContext);
	function useFloatingRootContext(options) {
		const { open = false, onOpenChange: onOpenChangeProp, elements: elementsProp } = options;
		const floatingId = useId();
		const dataRef = react$1.useRef({});
		const [events] = react$1.useState(() => createEventEmitter());
		const nested = useFloatingParentNodeId() != null;
		{
			const optionDomReference = elementsProp.reference;
			if (optionDomReference && !isElement(optionDomReference)) error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
		}
		const [positionReference, setPositionReference] = react$1.useState(elementsProp.reference);
		const onOpenChange = useEffectEvent((open, event, reason) => {
			dataRef.current.openEvent = open ? event : void 0;
			events.emit("openchange", {
				open,
				event,
				reason,
				nested
			});
			onOpenChangeProp?.(open, event, reason);
		});
		const refs = react$1.useMemo(() => ({ setPositionReference }), []);
		const elements = react$1.useMemo(() => ({
			reference: positionReference || elementsProp.reference || null,
			floating: elementsProp.floating || null,
			domReference: elementsProp.reference
		}), [
			positionReference,
			elementsProp.reference,
			elementsProp.floating
		]);
		return react$1.useMemo(() => ({
			dataRef,
			open,
			onOpenChange,
			elements,
			events,
			floatingId,
			refs
		}), [
			open,
			onOpenChange,
			elements,
			events,
			floatingId,
			refs
		]);
	}
	/**
	* Provides data to position a floating element and context to add interactions.
	* @see https://floating-ui.com/docs/useFloating
	*/
	function useFloating(options) {
		if (options === void 0) options = {};
		const { nodeId } = options;
		const internalRootContext = useFloatingRootContext({
			...options,
			elements: {
				reference: null,
				floating: null,
				...options.elements
			}
		});
		const rootContext = options.rootContext || internalRootContext;
		const computedElements = rootContext.elements;
		const [_domReference, setDomReference] = react$1.useState(null);
		const [positionReference, _setPositionReference] = react$1.useState(null);
		const domReference = (computedElements == null ? void 0 : computedElements.domReference) || _domReference;
		const domReferenceRef = react$1.useRef(null);
		const tree = useFloatingTree();
		index$1(() => {
			if (domReference) domReferenceRef.current = domReference;
		}, [domReference]);
		const position = useFloating$1({
			...options,
			elements: {
				...computedElements,
				...positionReference && { reference: positionReference }
			}
		});
		const setPositionReference = react$1.useCallback((node) => {
			const computedPositionReference = isElement(node) ? {
				getBoundingClientRect: () => node.getBoundingClientRect(),
				getClientRects: () => node.getClientRects(),
				contextElement: node
			} : node;
			_setPositionReference(computedPositionReference);
			position.refs.setReference(computedPositionReference);
		}, [position.refs]);
		const setReference = react$1.useCallback((node) => {
			if (isElement(node) || node === null) {
				domReferenceRef.current = node;
				setDomReference(node);
			}
			if (isElement(position.refs.reference.current) || position.refs.reference.current === null || node !== null && !isElement(node)) position.refs.setReference(node);
		}, [position.refs]);
		const refs = react$1.useMemo(() => ({
			...position.refs,
			setReference,
			setPositionReference,
			domReference: domReferenceRef
		}), [
			position.refs,
			setReference,
			setPositionReference
		]);
		const elements = react$1.useMemo(() => ({
			...position.elements,
			domReference
		}), [position.elements, domReference]);
		const context = react$1.useMemo(() => ({
			...position,
			...rootContext,
			refs,
			elements,
			nodeId
		}), [
			position,
			refs,
			elements,
			nodeId,
			rootContext
		]);
		index$1(() => {
			rootContext.dataRef.current.floatingContext = context;
			const node = tree == null ? void 0 : tree.nodesRef.current.find((node) => node.id === nodeId);
			if (node) node.context = context;
		});
		return react$1.useMemo(() => ({
			...position,
			context,
			refs,
			elements
		}), [
			position,
			refs,
			elements,
			context
		]);
	}
	function mergeProps(userProps, propsList, elementKey) {
		const map = /* @__PURE__ */ new Map();
		const isItem = elementKey === "item";
		let domUserProps = userProps;
		if (isItem && userProps) {
			const { [ACTIVE_KEY]: _, [SELECTED_KEY]: __, ...validProps } = userProps;
			domUserProps = validProps;
		}
		return {
			...elementKey === "floating" && {
				tabIndex: -1,
				[FOCUSABLE_ATTRIBUTE]: ""
			},
			...domUserProps,
			...propsList.map((value) => {
				const propsOrGetProps = value ? value[elementKey] : null;
				if (typeof propsOrGetProps === "function") return userProps ? propsOrGetProps(userProps) : null;
				return propsOrGetProps;
			}).concat(userProps).reduce((acc, props) => {
				if (!props) return acc;
				Object.entries(props).forEach((_ref) => {
					let [key, value] = _ref;
					if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) return;
					if (key.indexOf("on") === 0) {
						if (!map.has(key)) map.set(key, []);
						if (typeof value === "function") {
							var _map$get;
							(_map$get = map.get(key)) == null || _map$get.push(value);
							acc[key] = function() {
								var _map$get2;
								for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
								return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
							};
						}
					} else acc[key] = value;
				});
				return acc;
			}, {})
		};
	}
	/**
	* Merges an array of interaction hooks' props into prop getters, allowing
	* event handler functions to be composed together without overwriting one
	* another.
	* @see https://floating-ui.com/docs/useInteractions
	*/
	function useInteractions(propsList) {
		if (propsList === void 0) propsList = [];
		const referenceDeps = propsList.map((key) => key == null ? void 0 : key.reference);
		const floatingDeps = propsList.map((key) => key == null ? void 0 : key.floating);
		const itemDeps = propsList.map((key) => key == null ? void 0 : key.item);
		const getReferenceProps = react$1.useCallback((userProps) => mergeProps(userProps, propsList, "reference"), referenceDeps);
		const getFloatingProps = react$1.useCallback((userProps) => mergeProps(userProps, propsList, "floating"), floatingDeps);
		const getItemProps = react$1.useCallback((userProps) => mergeProps(userProps, propsList, "item"), itemDeps);
		return react$1.useMemo(() => ({
			getReferenceProps,
			getFloatingProps,
			getItemProps
		}), [
			getReferenceProps,
			getFloatingProps,
			getItemProps
		]);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/hooks/use-floating-on-element.ts
	function useFloatingOnElement({ element, isSelected }) {
		const [isOpen, setIsOpen] = (0, react.useState)(false);
		const sizeModifier = 2;
		const { refs, floatingStyles, context } = useFloating({
			open: isOpen || isSelected,
			onOpenChange: setIsOpen,
			whileElementsMounted: autoUpdate,
			middleware: [size(() => {
				return { apply({ elements, rects }) {
					Object.assign(elements.floating.style, {
						width: `${rects.reference.width + sizeModifier}px`,
						height: `${rects.reference.height + sizeModifier}px`
					});
				} };
			}), offset(({ rects }) => -rects.reference.height / 2 - rects.floating.height / 2)]
		});
		(0, react.useEffect)(() => {
			refs.setReference(element);
		}, [element, refs]);
		return {
			isVisible: isOpen || isSelected,
			context,
			floating: {
				setRef: refs.setFloating,
				ref: refs.floating,
				styles: floatingStyles
			}
		};
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/hooks/use-bind-react-props-to-element.ts
	function useBindReactPropsToElement(element, getProps) {
		(0, react.useEffect)(() => {
			const el = element;
			const { events, attrs } = groupProps(getProps());
			events.forEach(([eventName, listener]) => el.addEventListener(eventName, listener));
			attrs.forEach(([attrName, attrValue]) => el.setAttribute(attrName, attrValue));
			return () => {
				events.forEach(([eventName, listener]) => el.removeEventListener(eventName, listener));
				attrs.forEach(([attrName]) => el.removeAttribute(attrName));
			};
		}, [getProps, element]);
	}
	function groupProps(props) {
		const eventRegex = /^on(?=[A-Z])/;
		return Object.entries(props).reduce((acc, [propName, propValue]) => {
			if (!eventRegex.test(propName)) {
				acc.attrs.push([propName, propValue]);
				return acc;
			}
			const eventName = propName.replace(eventRegex, "").toLowerCase();
			const listener = propValue;
			acc.events.push([eventName, listener]);
			return acc;
		}, {
			events: [],
			attrs: []
		});
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/hooks/use-has-overlapping.ts
	var possibleOverlappingSelectors = [".e-off-canvas"];
	var useHasOverlapping = () => {
		const preview = window.elementor?.$preview?.[0];
		if (!preview) return false;
		return possibleOverlappingSelectors.map((selector) => Array.from(preview?.contentWindow?.document.body.querySelectorAll(selector) ?? [])).flat().some((elem) => elem.checkVisibility({
			opacityProperty: true,
			visibilityProperty: true,
			contentVisibilityAuto: true
		}));
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/utils/outline-offset-utils.ts
	var THIN_ELEMENT_MAX_HEIGHT_PX = 1;
	var SMALLER_OUTLINE_OFFSET_WIDGET_TYPES = /* @__PURE__ */ new Set(["e-form-input"]);
	function shouldUseSmallerOutlineOffset(element, widgetType) {
		if (element.offsetHeight <= 1) return true;
		return widgetType !== void 0 && SMALLER_OUTLINE_OFFSET_WIDGET_TYPES.has(widgetType);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/components/outline-overlay.tsx
	var CANVAS_WRAPPER_ID = "elementor-preview-responsive-wrapper";
	var OverlayBox = (0, _elementor_ui.styled)(_elementor_ui.Box, { shouldForwardProp: (prop) => prop !== "isSelected" && prop !== "isSmallerOffset" && prop !== "isGlobal" })(({ theme, isSelected, isSmallerOffset, isGlobal }) => ({
		outline: `${isSelected ? "2px" : "1px"} solid ${isGlobal ? theme.palette.global.main : theme.palette.primary.light}`,
		outlineOffset: isSelected && !isSmallerOffset ? "-2px" : "-1px",
		pointerEvents: "none"
	}));
	var OutlineOverlay = ({ element, isSelected, id, isGlobal = false, widgetType }) => {
		const { context, floating, isVisible } = useFloatingOnElement({
			element,
			isSelected
		});
		const { getFloatingProps, getReferenceProps } = useInteractions([useHover(context)]);
		const hasOverlapping = useHasOverlapping();
		useBindReactPropsToElement(element, getReferenceProps);
		const isSmallerOffset = shouldUseSmallerOutlineOffset(element, widgetType);
		return isVisible && !hasOverlapping && /* @__PURE__ */ react.createElement(FloatingPortal, { id: "elementor-preview-responsive-wrapper" }, /* @__PURE__ */ react.createElement(OverlayBox, {
			ref: floating.setRef,
			isSelected,
			isGlobal,
			style: floating.styles,
			"data-element-overlay": id,
			role: "presentation",
			isSmallerOffset,
			...getFloatingProps()
		}));
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/components/grid-outline/cell.tsx
	var FALLBACK_COLOR$1 = "rgba(0, 0, 0, 0.12)";
	function Cell({ x, y, width, height, color }) {
		return /* @__PURE__ */ react.createElement("rect", {
			x,
			y,
			width,
			height,
			fill: "none",
			stroke: color || FALLBACK_COLOR$1,
			strokeWidth: 1,
			strokeDasharray: "2 2",
			vectorEffect: "non-scaling-stroke"
		});
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/components/grid-outline/first-empty-cell.tsx
	var GLYPH_SIZE = 19;
	function FirstEmptyCell({ rect, color }) {
		const size = Math.min(GLYPH_SIZE, rect.width, rect.height);
		if (size <= 0) return null;
		const centerX = rect.x + rect.width / 2;
		const centerY = rect.y + rect.height / 2;
		return /* @__PURE__ */ react.createElement("i", {
			className: "eicon-plus",
			"aria-hidden": "true",
			style: {
				position: "absolute",
				left: centerX,
				top: centerY,
				transform: "translate(-50%, -50%)",
				fontSize: size,
				color,
				lineHeight: 1,
				pointerEvents: "none"
			}
		});
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/components/grid-outline/line.tsx
	var FALLBACK_COLOR = "rgba(0, 0, 0, 0.12)";
	function Line({ x1, y1, x2, y2, color }) {
		return /* @__PURE__ */ react.createElement("line", {
			x1,
			y1,
			x2,
			y2,
			stroke: color || FALLBACK_COLOR,
			strokeWidth: 1,
			strokeDasharray: "2 2",
			vectorEffect: "non-scaling-stroke"
		});
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/components/grid-outline/grid-outline.tsx
	var renderCells = (cells, color) => cells.map((cell, i) => /* @__PURE__ */ react.createElement(Cell, {
		key: i,
		x: snapToHalfPixel(cell.x),
		y: snapToHalfPixel(cell.y),
		width: Math.round(cell.width),
		height: Math.round(cell.height),
		color
	}));
	var renderLines = (tracks, width, height) => {
		const { vertical, horizontal } = computeGridLines(tracks, width, height);
		return [...vertical.map((line, i) => /* @__PURE__ */ react.createElement(Line, {
			key: `v${i}`,
			x1: snapToHalfPixel(line.x1),
			y1: Math.round(line.y1),
			x2: snapToHalfPixel(line.x2),
			y2: Math.round(line.y2),
			color: tracks.borderColor
		})), ...horizontal.map((line, i) => /* @__PURE__ */ react.createElement(Line, {
			key: `h${i}`,
			x1: Math.round(line.x1),
			y1: snapToHalfPixel(line.y1),
			x2: Math.round(line.x2),
			y2: snapToHalfPixel(line.y2),
			color: tracks.borderColor
		}))];
	};
	var isDragActiveFromDom = (element) => {
		return Boolean(element?.querySelector(".e-dragging-over, .elementor-dragging-on-child, .elementor-draggable-over, .elementor-widget-placeholder, .elementor-sortable-placeholder"));
	};
	function GridOutline({ element, tracks, width, height }) {
		const cells = (0, react.useMemo)(() => computeCellRects(tracks, width, height), [
			tracks,
			width,
			height
		]);
		const hasGap = tracks.columnGap > 0 || tracks.rowGap > 0;
		const firstEmpty = (0, react.useMemo)(() => findFirstEmptyCell(element, tracks.columns.length, tracks.rows.length), [element, tracks]);
		const emptyCellRect = firstEmpty && tracks.columns.length > 0 ? cells[firstEmpty.row * tracks.columns.length + firstEmpty.col] : null;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("svg", {
			width,
			height,
			style: {
				position: "absolute",
				inset: 0,
				overflow: "visible"
			},
			xmlns: "http://www.w3.org/2000/svg"
		}, hasGap ? renderCells(cells, tracks.borderColor) : renderLines(tracks, width, height)), emptyCellRect && !isDragActiveFromDom(element) && /* @__PURE__ */ react.createElement(FirstEmptyCell, {
			rect: emptyCellRect,
			color: tracks.borderColor
		}));
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/components/grid-outline/grid-outline-overlay.tsx
	var GridOutlineOverlay = ({ element, id, isSelected }) => {
		const enabled = (0, _elementor_editor_elements.useElementEditorSettings)(id)?.grid_outline;
		const rect = useElementRect(element);
		const tracks = useGridTracks(element, rect);
		const { floating } = useFloatingOnElement({
			element,
			isSelected
		});
		if (enabled === false) return null;
		if (tracks.columns.length === 0 && tracks.rows.length === 0) return null;
		return /* @__PURE__ */ react.createElement(FloatingPortal, { id: CANVAS_WRAPPER_ID }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			ref: floating.setRef,
			style: {
				...floating.styles,
				pointerEvents: "none"
			},
			"data-grid-outline": id,
			role: "presentation"
		}, /* @__PURE__ */ react.createElement(GridOutline, {
			element,
			tracks,
			width: rect.width,
			height: rect.height
		})));
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/components/elements-overlays.tsx
	var hasGridStyleDisplay = (element) => {
		return element.computedStyleMap().get("display")?.toString() === "grid";
	};
	var ELEMENTS_DATA_ATTR = "atomic";
	var overlayRegistry = [
		{
			component: OutlineOverlay,
			shouldRender: () => true
		},
		{
			component: GridEmptyCellPositioner,
			shouldRender: ({ element }) => hasGridStyleDisplay(element)
		},
		{
			component: GridOutlineOverlay,
			shouldRender: ({ isSelected, element }) => isSelected && hasGridStyleDisplay(element)
		}
	];
	function ElementsOverlays() {
		const selected = (0, _elementor_editor_elements.useSelectedElement)();
		const elements = useElementsDom();
		const isEditMode = (0, _elementor_editor_v1_adapters.useEditMode)() === "edit";
		const isKitRouteActive = (0, _elementor_editor_v1_adapters.__privateUseIsRouteActive)("panel/global");
		if (!(isEditMode && !isKitRouteActive)) return null;
		return elements.map(({ id, domElement, isGlobal, widgetType }) => {
			const isSelected = selected.element?.id === id;
			return overlayRegistry.map(({ shouldRender, component: Overlay }, index) => shouldRender({
				id,
				element: domElement,
				isSelected,
				widgetType
			}) && /* @__PURE__ */ react.createElement(Overlay, {
				key: `${id}-${index}`,
				id,
				element: domElement,
				isSelected,
				isGlobal,
				widgetType
			}));
		});
	}
	function useElementsDom() {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)([(0, _elementor_editor_v1_adapters.windowEvent)("elementor/editor/element-rendered"), (0, _elementor_editor_v1_adapters.windowEvent)("elementor/editor/element-destroyed")], () => {
			return (0, _elementor_editor_elements.getElements)().filter((el) => isV4Element(el.view?.el?.dataset)).map((element) => ({
				id: element.id,
				domElement: element.view?.getDomElement?.()?.get?.(0),
				isGlobal: element.model.get("isGlobal") ?? false,
				widgetType: element.model.get("widgetType")
			})).filter((item) => !!item.domElement);
		});
	}
	function isV4Element(dataset) {
		if (!dataset) return false;
		return ELEMENTS_DATA_ATTR in dataset || "eType" in dataset;
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/hooks/use-on-mount.ts
	function useOnMount(cb) {
		const mounted = (0, react.useRef)(false);
		(0, react.useEffect)(() => {
			if (!mounted.current) {
				mounted.current = true;
				cb();
			}
		}, []);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/hooks/use-interactions-items.ts
	function useInteractionsItems() {
		const [interactionItems, setInteractionItems] = (0, react.useState)({});
		const providerAndSubscribers = (0, react.useMemo)(() => {
			try {
				return _elementor_editor_interactions.interactionsRepository.getProviders().map((provider) => {
					return {
						provider,
						subscriber: createProviderSubscriber$1({
							provider,
							setInteractionItems
						})
					};
				});
			} catch {
				return [];
			}
		}, []);
		(0, react.useEffect)(() => {
			if (providerAndSubscribers.length === 0) return;
			const unsubscribes = providerAndSubscribers.map(({ provider, subscriber }) => {
				const safeSubscriber = () => {
					try {
						subscriber();
					} catch {}
				};
				return provider.subscribe(safeSubscriber);
			});
			return () => {
				unsubscribes.forEach((unsubscribe) => unsubscribe());
			};
		}, [providerAndSubscribers]);
		useOnMount(() => {
			if (providerAndSubscribers.length === 0) return;
			(0, _elementor_editor_v1_adapters.registerDataHook)("after", "editor/documents/attach-preview", async () => {
				providerAndSubscribers.forEach(({ subscriber }) => {
					try {
						subscriber();
					} catch {}
				});
			});
		});
		return (0, react.useMemo)(() => {
			return Object.values(interactionItems).sort(sortByProviderPriority).flatMap(({ items }) => items);
		}, [interactionItems]);
	}
	function sortByProviderPriority({ provider: providerA }, { provider: providerB }) {
		return providerA.priority - providerB.priority;
	}
	function createProviderSubscriber$1({ provider, setInteractionItems }) {
		return () => {
			try {
				const items = provider.actions.all();
				const providerKey = provider.getKey();
				setInteractionItems((prev) => ({
					...prev,
					[providerKey]: {
						provider,
						items
					}
				}));
			} catch {}
		};
	}
	__name(createProviderSubscriber$1, "createProviderSubscriber");

//#endregion
//#region packages/packages/core/editor-canvas/src/components/interactions-renderer.tsx
	function InteractionsRenderer() {
		const container = usePortalContainer$1();
		const interactionItems = useInteractionsItems();
		if (!container) return null;
		const interactionsData = JSON.stringify(Array.isArray(interactionItems) ? interactionItems : []);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Portal, { container }, /* @__PURE__ */ react.createElement("script", {
			type: "application/json",
			"data-e-interactions": "true",
			dangerouslySetInnerHTML: { __html: interactionsData }
		}));
	}
	function usePortalContainer$1() {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/attach-preview"), () => (0, _elementor_editor_v1_adapters.getCanvasIframeDocument)()?.head);
	}
	__name(usePortalContainer$1, "usePortalContainer");

//#endregion
//#region packages/packages/core/editor-canvas/src/hooks/use-documents-css-links.ts
	var REMOVED_ATTR = "data-e-removed";
	var DOCUMENT_WRAPPER_ATTR = "data-elementor-id";
	var CSS_LINK_ID_PREFIX = "elementor-post-";
	var CSS_LINK_ID_SUFFIX = "-css";
	function useDocumentsCssLinks() {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/attach-preview"), () => {
			const iframeDocument = (0, _elementor_editor_v1_adapters.getCanvasIframeDocument)();
			if (!iframeDocument) return [];
			const relevantLinkIds = getDocumentsIdsInCanvas(iframeDocument).map((id) => `${CSS_LINK_ID_PREFIX}${id}${CSS_LINK_ID_SUFFIX}`);
			const links = getDocumentsCssLinks(iframeDocument).filter((link) => relevantLinkIds.includes(link.getAttribute("id") ?? ""));
			links.forEach((link) => {
				if (!link.hasAttribute(REMOVED_ATTR)) link.remove();
			});
			return links.map((link) => ({
				...getLinkAttrs(link),
				id: link.getAttribute("id") ?? "",
				[REMOVED_ATTR]: true
			}));
		});
	}
	function getDocumentsIdsInCanvas(document) {
		return [...document.body.querySelectorAll(`[${DOCUMENT_WRAPPER_ATTR}]`) ?? []].map((el) => el.getAttribute(DOCUMENT_WRAPPER_ATTR) || "");
	}
	function getDocumentsCssLinks(document) {
		return [...document.head.querySelectorAll(`link[rel="stylesheet"][id^=${CSS_LINK_ID_PREFIX}][id$=${CSS_LINK_ID_SUFFIX}]`) ?? []];
	}
	function getLinkAttrs(el) {
		const entries = [...el.attributes].map((attr) => [attr.name, attr.value]);
		return Object.fromEntries(entries);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/utils/abort-previous-runs.ts
	function abortPreviousRuns(cb) {
		let abortController = null;
		return (...args) => {
			if (abortController) abortController.abort();
			abortController = new AbortController();
			return cb(abortController, ...args);
		};
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/utils/pregenerated-links-removal.ts
	var removedProviderKeys = /* @__PURE__ */ new Set();
	function removeProviderPregeneratedLinks(providerKey, removePregeneratedLink) {
		if (removedProviderKeys.has(providerKey)) return;
		const iframeDocument = (0, _elementor_editor_v1_adapters.getCanvasIframeDocument)();
		if (!iframeDocument) return;
		iframeDocument.head.querySelectorAll("link[rel=\"stylesheet\"]").forEach((link) => {
			const { id, href, media } = link;
			if (removePregeneratedLink({
				id,
				href,
				media
			})) link.remove();
		});
		removedProviderKeys.add(providerKey);
	}
	function resetRemovedProviders() {
		removedProviderKeys.clear();
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/utils/signalized-process.ts
	function signalizedProcess(signal, steps = []) {
		return {
			then: (cb) => {
				steps.push(cb);
				return signalizedProcess(signal, steps);
			},
			execute: async () => {
				let lastResult;
				for (const step of steps) {
					if (signal.aborted) break;
					lastResult = await step(lastResult, signal);
				}
			}
		};
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/renderers/multi-props.ts
	var isMultiProps = (propValue) => {
		return !!propValue && typeof propValue === "object" && "$$multi-props" in propValue && propValue["$$multi-props"] === true;
	};
	var createMultiPropsValue = (props) => {
		return {
			"$$multi-props": true,
			value: props
		};
	};
	var getMultiPropsValue = (multiProps) => {
		return multiProps.value;
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/renderers/create-props-resolver.ts
	var TRANSFORM_DEPTH_LIMIT = 3;
	function createPropsResolver({ transformers, schema: initialSchema, onPropResolve }) {
		async function resolve({ props, schema, signal, renderContext }) {
			schema = schema ?? initialSchema;
			const promises = Promise.all(Object.entries(schema).map(async ([key, type]) => {
				const value = props[key] ?? type.default;
				const transformed = await transform({
					value,
					key,
					type,
					signal,
					renderContext
				});
				onPropResolve?.({
					key,
					value: transformed,
					propValue: value,
					propType: type
				});
				if (isMultiProps(transformed)) return getMultiPropsValue(transformed);
				return { [key]: transformed };
			}));
			return Object.assign({}, ...(await promises).filter(Boolean));
		}
		async function transform({ value, key, type, signal, depth = 0, renderContext }) {
			if (value === null || value === void 0) return null;
			if (!(0, _elementor_editor_props.isTransformable)(value)) return value;
			if (depth > TRANSFORM_DEPTH_LIMIT) return null;
			if (value.disabled === true) return null;
			let transformablePropType = type;
			if (type.kind === "union") {
				transformablePropType = type.prop_types[value.$$type];
				if (!transformablePropType) return null;
			}
			transformablePropType = transformablePropType;
			if (value.$$type !== transformablePropType.key) return null;
			let resolvedValue = value.value;
			if (transformablePropType.kind === "object") resolvedValue = await resolve({
				props: resolvedValue,
				schema: transformablePropType.shape,
				signal,
				renderContext
			});
			if (transformablePropType.kind === "array") resolvedValue = await Promise.all(resolvedValue.map((item) => transform({
				value: item,
				key,
				type: transformablePropType.item_prop_type,
				depth,
				signal,
				renderContext
			})));
			const transformer = transformers.get(value.$$type);
			if (!transformer) return null;
			try {
				return transform({
					value: await transformer(resolvedValue, {
						key,
						signal,
						renderContext,
						propType: type
					}),
					key,
					type,
					signal,
					depth: depth + 1,
					renderContext
				});
			} catch {
				return null;
			}
		}
		return resolve;
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/renderers/enqueue-font-from-style-prop.ts
	var maybeEnqueueFontFromStyleProp = (propType, propValue, enqueue) => {
		if (!(0, _elementor_editor_props.isTransformable)(propValue) || propValue.disabled) return;
		const propTypeUtil = (0, _elementor_editor_props.getPropSchemaFromCache)(propType.kind === "union" ? propValue.$$type : propType.key);
		if (!propTypeUtil || !("getEnqueueFontFamily" in propTypeUtil) || typeof propTypeUtil.getEnqueueFontFamily !== "function") return;
		const stored = propValue.value;
		if (typeof stored !== "string") return;
		const font = propTypeUtil.getEnqueueFontFamily(stored);
		if (font) enqueue(font);
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/create-transformers-registry.ts
	function createTransformersRegistry() {
		const transformers = {};
		let fallbackTransformer = null;
		return {
			register(type, transformer) {
				transformers[type] = transformer;
				return this;
			},
			registerFallback(transformer) {
				fallbackTransformer = transformer;
				return this;
			},
			get(type) {
				return transformers[type] ?? fallbackTransformer;
			},
			all() {
				return { ...transformers };
			}
		};
	}
	var stylesInheritanceTransformersRegistry = createTransformersRegistry();

//#endregion
//#region packages/packages/core/editor-canvas/src/style-transformers-registry.ts
	var styleTransformersRegistry = createTransformersRegistry();

//#endregion
//#region packages/packages/core/editor-canvas/src/hooks/use-style-prop-resolver.ts
	function useStylePropResolver() {
		return (0, react.useMemo)(() => {
			return createPropsResolver({
				transformers: styleTransformersRegistry,
				schema: (0, _elementor_editor_styles.getStylesSchema)(),
				onPropResolve: ({ propValue, propType }) => {
					maybeEnqueueFontFromStyleProp(propType, propValue, _elementor_editor_v1_adapters.enqueueFont);
				}
			});
		}, []);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/renderers/errors.ts
	var UnknownStyleTypeError = (0, _elementor_utils.createError)({
		code: "unknown_style_type",
		message: "Unknown style type"
	});
	var UnknownStyleStateError = (0, _elementor_utils.createError)({
		code: "unknown_style_state",
		message: "Unknown style state"
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/renderers/create-styles-renderer.ts
	var SELECTORS_MAP = { class: "." };
	var DEFAULT_BREAKPOINT = "desktop";
	var DEFAULT_STATE = "normal";
	function getStyleUniqueKey(style) {
		const breakpoint = style.variants[0]?.meta?.breakpoint ?? DEFAULT_BREAKPOINT;
		const state = style.variants[0]?.meta?.state ?? DEFAULT_STATE;
		return `${style.id}-${breakpoint}-${state}`;
	}
	function createStylesRenderer({ resolve, breakpoints, selectorPrefix = "" }) {
		return async ({ styles, signal }) => {
			const seenKeys = /* @__PURE__ */ new Set();
			const stylesCssPromises = styles.filter((style) => {
				const key = getStyleUniqueKey(style);
				if (seenKeys.has(key)) return false;
				seenKeys.add(key);
				return true;
			}).map(async (style) => {
				const variantCssPromises = Object.values(style.variants).map(async (variant) => {
					const css = await propsToCss({
						props: variant.props,
						resolve,
						signal
					});
					const customCss = customCssToString(variant.custom_css);
					return createStyleWrapper().for(style.cssName, style.type).withPrefix(selectorPrefix).withState(variant.meta.state).withMediaQuery(variant.meta.breakpoint ? breakpoints[variant.meta.breakpoint] : null).wrap(css + customCss);
				});
				const variantsCss = await Promise.all(variantCssPromises);
				return {
					id: style.id,
					breakpoint: style?.variants[0]?.meta?.breakpoint || "desktop",
					value: variantsCss.join(""),
					state: style?.variants[0]?.meta?.state || null
				};
			});
			return await Promise.all(stylesCssPromises);
		};
	}
	function createStyleWrapper(value = "", wrapper) {
		return {
			for: (cssName, type) => {
				const symbol = SELECTORS_MAP[type];
				if (!symbol) throw new UnknownStyleTypeError({ context: { type } });
				return createStyleWrapper(`${value}${symbol}${cssName}`, wrapper);
			},
			withPrefix: (prefix) => createStyleWrapper([prefix, value].filter(Boolean).join(" "), wrapper),
			withState: (state) => {
				return createStyleWrapper((0, _elementor_editor_styles.getSelectorWithState)(value, state), wrapper);
			},
			withMediaQuery: (breakpoint) => {
				if (!breakpoint?.type) return createStyleWrapper(value, wrapper);
				const size = `${breakpoint.type}:${breakpoint.width}px`;
				return createStyleWrapper(value, (css) => `@media(${size}){${css}}`);
			},
			wrap: (css) => {
				const res = `${value}{${css}}`;
				if (!wrapper) return res;
				return wrapper(res);
			}
		};
	}
	async function propsToCss({ props, resolve, signal }) {
		const transformed = await resolve({
			props,
			signal
		});
		return Object.entries(transformed).reduce((acc, [propName, propValue]) => {
			if (propValue === null) return acc;
			acc.push(propName + ":" + propValue + ";");
			return acc;
		}, []).join("");
	}
	function customCssToString(customCss) {
		const decoded = (0, _elementor_utils.decodeString)(customCss?.raw || "");
		if (!decoded.trim()) return "";
		return decoded + "\n";
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/hooks/use-style-renderer.ts
	var SELECTOR_PREFIX = ".elementor";
	function useStyleRenderer(resolve) {
		const breakpoints = (0, _elementor_editor_responsive.useBreakpointsMap)();
		return (0, react.useMemo)(() => {
			return createStylesRenderer({
				selectorPrefix: SELECTOR_PREFIX,
				breakpoints,
				resolve
			});
		}, [resolve, breakpoints]);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/hooks/use-style-items.ts
	function useStyleItems() {
		const renderStyles = useStyleRenderer(useStylePropResolver());
		const breakpoints = (0, _elementor_editor_responsive.useBreakpoints)();
		const [styleItems, setStyleItems] = (0, react.useState)({});
		const styleItemsCacheRef = (0, react.useRef)(/* @__PURE__ */ new Map());
		const providerAndSubscribers = (0, react.useMemo)(() => {
			const createEmptyCache = () => {
				return {
					orderedIds: [],
					itemsById: /* @__PURE__ */ new Map()
				};
			};
			const getCache = (provider) => {
				const providerKey = safeGetKey(provider);
				if (!providerKey) return createEmptyCache();
				if (!styleItemsCacheRef.current.has(providerKey)) styleItemsCacheRef.current.set(providerKey, createEmptyCache());
				return styleItemsCacheRef.current.get(providerKey);
			};
			return _elementor_editor_styles_repository.stylesRepository.getProviders().map((provider) => ({
				provider,
				subscriber: createProviderSubscriber({
					provider,
					renderStyles,
					setStyleItems,
					getCache: () => getCache(provider)
				})
			}));
		}, [renderStyles]);
		(0, react.useEffect)(() => {
			const unsubscribes = providerAndSubscribers.map(({ provider, subscriber }) => provider.subscribe(subscriber));
			return () => {
				unsubscribes.forEach((unsubscribe) => unsubscribe());
			};
		}, [providerAndSubscribers]);
		useOnMount(() => {
			(0, _elementor_editor_v1_adapters.registerDataHook)("after", "editor/documents/attach-preview", async () => {
				resetRemovedProviders();
				const promises = providerAndSubscribers.map(async ({ subscriber }) => subscriber());
				await Promise.all(promises);
			});
		});
		const breakpointSorter = (0, react.useMemo)(() => createBreakpointSorter(breakpoints.map((breakpoint) => breakpoint.id)), [breakpoints]);
		return (0, react.useMemo)(() => Object.values(styleItems).sort(prioritySorter).flatMap(({ items }) => items).sort(stateSorter).sort(breakpointSorter), [styleItems, breakpointSorter]);
	}
	function prioritySorter({ provider: providerA }, { provider: providerB }) {
		return providerA.priority - providerB.priority;
	}
	function stateSorter({ state: stateA }, { state: stateB }) {
		if ((0, _elementor_editor_styles.isClassState)(stateA) && !(0, _elementor_editor_styles.isClassState)(stateB)) return -1;
		if (!(0, _elementor_editor_styles.isClassState)(stateA) && (0, _elementor_editor_styles.isClassState)(stateB)) return 1;
		return 0;
	}
	function createBreakpointSorter(breakpointsOrder) {
		return ({ breakpoint: breakpointA }, { breakpoint: breakpointB }) => breakpointsOrder.indexOf(breakpointA) - breakpointsOrder.indexOf(breakpointB);
	}
	function safeGetKey(provider) {
		try {
			return provider.getKey();
		} catch {
			return null;
		}
	}
	function createProviderSubscriber({ provider, renderStyles, setStyleItems, getCache }) {
		return abortPreviousRuns((abortController, previous, current) => signalizedProcess(abortController.signal).then((_, signal) => {
			const cache = getCache();
			const hasDiffInfo = current !== void 0 && previous !== void 0;
			const hasCache = cache.orderedIds.length > 0;
			if (hasCache && provider.isPregeneratedLink) removeProviderPregeneratedLinks(provider.getKey(), provider.isPregeneratedLink);
			if (hasDiffInfo && hasCache) return updateItems(cache, previous, current, signal);
			return createItems(cache, signal);
		}).then((items) => {
			setStyleItems((prev) => ({
				...prev,
				[provider.getKey()]: {
					provider,
					items
				}
			}));
		}).execute());
		async function updateItems(cache, previous, current, signal) {
			const changedIds = getChangedStyleIds(previous, current);
			cache.orderedIds = provider.actions.all().map((style) => style.id).reverse();
			if (changedIds.length > 0) return renderStyles({
				styles: breakToBreakpoints(changedIds.map((id) => provider.actions.get(id)).filter((style) => !!style).map((style) => ({
					...style,
					cssName: provider.actions.resolveCssName(style.id)
				}))),
				signal
			}).then((rendered) => {
				updateCacheItems(cache, changedIds, rendered);
				return getOrderedItems(cache);
			});
			return getOrderedItems(cache);
		}
		async function createItems(cache, signal) {
			const allStyles = provider.actions.all();
			return renderStyles({
				styles: breakToBreakpoints([...allStyles].reverse().map((style) => {
					return {
						...style,
						cssName: provider.actions.resolveCssName(style.id)
					};
				})),
				signal
			}).then((rendered) => {
				rebuildCache(cache, allStyles, rendered);
				return getOrderedItems(cache);
			});
		}
		function breakToBreakpoints(styles) {
			return Object.values(styles.reduce((acc, style) => {
				style.variants.forEach((variant) => {
					const breakpoint = variant.meta.breakpoint || "desktop";
					if (!acc[style.id]) acc[style.id] = {};
					if (!acc[style.id][breakpoint]) acc[style.id][breakpoint] = {
						...style,
						variants: []
					};
					acc[style.id][breakpoint].variants.push(variant);
				});
				return acc;
			}, {})).flatMap((breakpointMap) => Object.values(breakpointMap));
		}
	}
	function getChangedStyleIds(previous, current) {
		const changedIds = [];
		for (const id of Object.keys(current)) {
			const currentStyle = current[id];
			const previousStyle = previous[id];
			if (!previousStyle || currentStyle !== previousStyle) changedIds.push(id);
		}
		return changedIds;
	}
	function getOrderedItems(cache) {
		return cache.orderedIds.map((id) => cache.itemsById.get(id)).filter((items) => items !== void 0).flat();
	}
	function updateCacheItems(cache, changedIds, changedItems) {
		for (const id of changedIds) cache.itemsById.delete(id);
		for (const item of changedItems) {
			const existing = cache.itemsById.get(item.id) || [];
			existing.push(item);
			cache.itemsById.set(item.id, existing);
		}
	}
	function rebuildCache(cache, allStyles, items) {
		cache.orderedIds = allStyles.map((style) => style.id).reverse();
		cache.itemsById.clear();
		for (const item of items) {
			const existing = cache.itemsById.get(item.id) || [];
			existing.push(item);
			cache.itemsById.set(item.id, existing);
		}
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/components/style-renderer.tsx
	function StyleRenderer() {
		const container = usePortalContainer();
		const styleItems = useStyleItems();
		const linksAttrs = useDocumentsCssLinks();
		if (!container) return null;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Portal, { container }, filterUniqueStyleDefinitions(styleItems).map((item) => /* @__PURE__ */ react.createElement("style", { key: `${item.id}-${item.breakpoint}-${item.state ?? "normal"}` }, item.value)), linksAttrs.map((attrs) => /* @__PURE__ */ react.createElement("link", {
			...attrs,
			key: attrs.id
		})));
	}
	function usePortalContainer() {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/attach-preview"), () => (0, _elementor_editor_v1_adapters.getCanvasIframeDocument)()?.head);
	}
	function filterUniqueStyleDefinitions(styleItems) {
		const seen = /* @__PURE__ */ new Map();
		return styleItems.filter((style) => {
			const existingStyle = seen.get(style.id);
			if (existingStyle) {
				if (existingStyle.find((s) => s.breakpoint === style.breakpoint && s.state === style.state)) return false;
				existingStyle.push(style);
				return true;
			}
			seen.set(style.id, [style]);
			return true;
		});
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/form-structure/utils.ts
	var FORM_ELEMENT_TYPE = "e-form";
	var FORM_FIELD_ELEMENT_TYPES = /* @__PURE__ */ new Set([
		"e-form-input",
		"e-form-textarea",
		"e-form-label",
		"e-form-checkbox",
		"e-form-submit-button",
		"e-form-select",
		"e-form-radio-button",
		"e-form-file-upload",
		"e-form-date-picker",
		"e-form-time-picker"
	]);
	function getArgsElementType(args) {
		return args.model?.widgetType || args.model?.elType;
	}
	function getElementType$1(element) {
		return element?.model.get("widgetType") || element?.model.get("elType");
	}
	__name(getElementType$1, "getElementType");
	function getClipboardElementType(element) {
		return element?.widgetType || element?.elType;
	}
	function isElementWithinFormSelector(element) {
		return !!element?.view?.el?.closest("form,[data-element_type=\"e-form\"]");
	}
	function isWithinForm(element) {
		return isElementWithinFormSelector(element);
	}
	function hasElementType(element, type) {
		return (0, _elementor_editor_elements.getAllDescendants)(element).some((item) => getElementType$1(item) === type);
	}
	function hasElementTypes(element, types) {
		return (0, _elementor_editor_elements.getAllDescendants)(element).some((item) => {
			const itemType = getElementType$1(item);
			return itemType ? types.has(itemType) : false;
		});
	}
	function hasClipboardElementType(elements, type) {
		return elements.some((element) => {
			if (getClipboardElementType(element) === type) return true;
			return element.elements ? hasClipboardElementType(element.elements, type) : false;
		});
	}
	function hasClipboardElementTypes(elements, types) {
		return elements.some((element) => {
			const elementType = getClipboardElementType(element);
			if (elementType && types.has(elementType)) return true;
			return element.elements ? hasClipboardElementTypes(element.elements, types) : false;
		});
	}
	function movedContainersIncludeAtomicFormRoot(containers) {
		return containers.some((container) => getElementType$1(container) === FORM_ELEMENT_TYPE);
	}
	function clipboardRootsAreAtomicForms(elements) {
		if (!elements.length) return false;
		return elements.every((el) => getClipboardElementType(el) === FORM_ELEMENT_TYPE);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/form-structure/enforce-form-ancestor-commands.ts
	var FORM_FIELDS_OUTSIDE_ALERT = {
		type: "default",
		message: (0, _wordpress_i18n.__)("Form elements must be placed inside a form.", "elementor"),
		id: "form-fields-outside-form-blocked"
	};
	function initFormAncestorEnforcement() {
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "document/elements/create",
			condition: blockFormFieldCreate
		});
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "document/elements/move",
			condition: blockFormFieldMove
		});
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "document/elements/paste",
			condition: blockFormFieldPaste
		});
	}
	function blockFormFieldCreate(args) {
		const elementType = getArgsElementType(args);
		if (!elementType || !FORM_FIELD_ELEMENT_TYPES.has(elementType)) return false;
		if ((args.containers ?? [args.container]).some((container) => !isWithinForm(container))) {
			handleBlockedFormField$1();
			return true;
		}
		return false;
	}
	function blockFormFieldMove(args) {
		const { containers = [args.container], target } = args;
		if (containers.some((container) => container ? !hasElementType(container, "e-form") && hasElementTypes(container, FORM_FIELD_ELEMENT_TYPES) : false) && !isWithinForm(target) && !movedContainersIncludeAtomicFormRoot(containers)) {
			handleBlockedFormField$1();
			return true;
		}
		return false;
	}
	function blockFormFieldPaste(args) {
		const { storageType } = args;
		if (storageType !== "localstorage") return false;
		const data = window?.elementorCommon?.storage?.get();
		if (!data?.clipboard?.elements) return false;
		if (hasClipboardElementTypes(data.clipboard.elements, FORM_FIELD_ELEMENT_TYPES) && !isWithinForm(args.container) && !clipboardRootsAreAtomicForms(data.clipboard.elements)) {
			handleBlockedFormField$1();
			return true;
		}
		return false;
	}
	function handleBlockedFormField$1() {
		(0, _elementor_editor_notifications.notify)(FORM_FIELDS_OUTSIDE_ALERT);
	}
	__name(handleBlockedFormField$1, "handleBlockedFormField");

//#endregion
//#region packages/packages/core/editor-canvas/src/form-structure/prevent-form-nesting-commands.ts
	var FORM_NESTING_ALERT = {
		type: "default",
		message: (0, _wordpress_i18n.__)("Forms can't be nested. Create separate forms instead.", "elementor"),
		id: "form-nesting-blocked"
	};
	function initFormNestingPrevention() {
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "document/elements/create",
			condition: blockFormCreate
		});
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "document/elements/move",
			condition: blockFormMove
		});
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "document/elements/paste",
			condition: blockFormPaste
		});
	}
	function blockFormCreate(args) {
		const elementType = getArgsElementType(args);
		if (!elementType) return false;
		if (elementType === "e-form" && isWithinForm(args.container)) {
			handleBlockedFormField();
			return true;
		}
		return false;
	}
	function blockFormMove(args) {
		const { containers = [args.container], target } = args;
		if (containers.some((container) => container ? hasElementType(container, "e-form") : false) && isWithinForm(target)) {
			handleBlockedFormField();
			return true;
		}
		return false;
	}
	function blockFormPaste(args) {
		const { storageType } = args;
		if (storageType !== "localstorage") return false;
		const data = window?.elementorCommon?.storage?.get();
		if (!data?.clipboard?.elements) return false;
		if (hasClipboardElementType(data.clipboard.elements, "e-form") && isWithinForm(args.container)) {
			handleBlockedFormField();
			return true;
		}
		return false;
	}
	function handleBlockedFormField() {
		(0, _elementor_editor_notifications.notify)(FORM_NESTING_ALERT);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/settings-transformers-registry.ts
	var settingsTransformersRegistry = createTransformersRegistry();

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/create-transformer.ts
	function createTransformer(cb) {
		return cb;
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/settings/attributes-transformer.ts
	var attributesTransformer = createTransformer(() => "");

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/settings/classes-transformer.ts
	function transformClassId(id, cache) {
		if (!cache.has(id)) {
			const provider2 = _elementor_editor_styles_repository.stylesRepository.getProviders().find((p) => {
				return p.actions.all().find((style) => style.id === id);
			});
			if (!provider2) return id;
			cache.set(id, provider2.getKey());
		}
		const providerKey = cache.get(id);
		return _elementor_editor_styles_repository.stylesRepository.getProviderByKey(providerKey)?.actions.resolveCssName(id) ?? id;
	}
	function createClassesTransformer() {
		const cache = /* @__PURE__ */ new Map();
		return createTransformer((value) => {
			return value.map((id) => transformClassId(id, cache)).filter(Boolean);
		});
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/settings/date-range-transformer.ts
	var dateRangeTransformer = createTransformer((value) => {
		if (!value || Object.keys(value).length === 0) return null;
		return {
			min: value.min || null,
			max: value.max || null
		};
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/settings/date-time-transformer.ts
	var dateTimeTransformer = createTransformer((values) => {
		return values.map((value) => {
			const date = (value.date || "").trim();
			const time = (value.time || "").trim();
			return !date && !time ? "" : `${date} ${time}`.trim();
		}).join(" ");
	});

//#endregion
//#region node_modules/dompurify/dist/purify.es.mjs
/*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE */
	var { entries, setPrototypeOf, isFrozen, getPrototypeOf, getOwnPropertyDescriptor } = Object;
	var { freeze, seal, create } = Object;
	var { apply, construct } = typeof Reflect !== "undefined" && Reflect;
	if (!freeze) freeze = function freeze(x) {
		return x;
	};
	if (!seal) seal = function seal(x) {
		return x;
	};
	if (!apply) apply = function apply(func, thisArg) {
		for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
		return func.apply(thisArg, args);
	};
	if (!construct) construct = function construct(Func) {
		for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
		return new Func(...args);
	};
	var arrayForEach = unapply(Array.prototype.forEach);
	var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
	var arrayPop = unapply(Array.prototype.pop);
	var arrayPush = unapply(Array.prototype.push);
	var arraySplice = unapply(Array.prototype.splice);
	var stringToLowerCase = unapply(String.prototype.toLowerCase);
	var stringToString = unapply(String.prototype.toString);
	var stringMatch = unapply(String.prototype.match);
	var stringReplace = unapply(String.prototype.replace);
	var stringIndexOf = unapply(String.prototype.indexOf);
	var stringTrim = unapply(String.prototype.trim);
	var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
	var regExpTest = unapply(RegExp.prototype.test);
	var typeErrorCreate = unconstruct(TypeError);
	/**
	* Creates a new function that calls the given function with a specified thisArg and arguments.
	*
	* @param func - The function to be wrapped and called.
	* @returns A new function that calls the given function with a specified thisArg and arguments.
	*/
	function unapply(func) {
		return function(thisArg) {
			if (thisArg instanceof RegExp) thisArg.lastIndex = 0;
			for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
			return apply(func, thisArg, args);
		};
	}
	/**
	* Creates a new function that constructs an instance of the given constructor function with the provided arguments.
	*
	* @param func - The constructor function to be wrapped and called.
	* @returns A new function that constructs an instance of the given constructor function with the provided arguments.
	*/
	function unconstruct(Func) {
		return function() {
			for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
			return construct(Func, args);
		};
	}
	/**
	* Add properties to a lookup table
	*
	* @param set - The set to which elements will be added.
	* @param array - The array containing elements to be added to the set.
	* @param transformCaseFunc - An optional function to transform the case of each element before adding to the set.
	* @returns The modified set with added elements.
	*/
	function addToSet(set, array) {
		let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
		if (setPrototypeOf) setPrototypeOf(set, null);
		let l = array.length;
		while (l--) {
			let element = array[l];
			if (typeof element === "string") {
				const lcElement = transformCaseFunc(element);
				if (lcElement !== element) {
					if (!isFrozen(array)) array[l] = lcElement;
					element = lcElement;
				}
			}
			set[element] = true;
		}
		return set;
	}
	/**
	* Clean up an array to harden against CSPP
	*
	* @param array - The array to be cleaned.
	* @returns The cleaned version of the array
	*/
	function cleanArray(array) {
		for (let index = 0; index < array.length; index++) if (!objectHasOwnProperty(array, index)) array[index] = null;
		return array;
	}
	/**
	* Shallow clone an object
	*
	* @param object - The object to be cloned.
	* @returns A new object that copies the original.
	*/
	function clone(object) {
		const newObject = create(null);
		for (const [property, value] of entries(object)) if (objectHasOwnProperty(object, property)) if (Array.isArray(value)) newObject[property] = cleanArray(value);
		else if (value && typeof value === "object" && value.constructor === Object) newObject[property] = clone(value);
		else newObject[property] = value;
		return newObject;
	}
	/**
	* This method automatically checks if the prop is function or getter and behaves accordingly.
	*
	* @param object - The object to look up the getter function in its prototype chain.
	* @param prop - The property name for which to find the getter function.
	* @returns The getter function found in the prototype chain or a fallback function.
	*/
	function lookupGetter(object, prop) {
		while (object !== null) {
			const desc = getOwnPropertyDescriptor(object, prop);
			if (desc) {
				if (desc.get) return unapply(desc.get);
				if (typeof desc.value === "function") return unapply(desc.value);
			}
			object = getPrototypeOf(object);
		}
		function fallbackValue() {
			return null;
		}
		return fallbackValue;
	}
	var html$1 = freeze([
		"a",
		"abbr",
		"acronym",
		"address",
		"area",
		"article",
		"aside",
		"audio",
		"b",
		"bdi",
		"bdo",
		"big",
		"blink",
		"blockquote",
		"body",
		"br",
		"button",
		"canvas",
		"caption",
		"center",
		"cite",
		"code",
		"col",
		"colgroup",
		"content",
		"data",
		"datalist",
		"dd",
		"decorator",
		"del",
		"details",
		"dfn",
		"dialog",
		"dir",
		"div",
		"dl",
		"dt",
		"element",
		"em",
		"fieldset",
		"figcaption",
		"figure",
		"font",
		"footer",
		"form",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"head",
		"header",
		"hgroup",
		"hr",
		"html",
		"i",
		"img",
		"input",
		"ins",
		"kbd",
		"label",
		"legend",
		"li",
		"main",
		"map",
		"mark",
		"marquee",
		"menu",
		"menuitem",
		"meter",
		"nav",
		"nobr",
		"ol",
		"optgroup",
		"option",
		"output",
		"p",
		"picture",
		"pre",
		"progress",
		"q",
		"rp",
		"rt",
		"ruby",
		"s",
		"samp",
		"search",
		"section",
		"select",
		"shadow",
		"slot",
		"small",
		"source",
		"spacer",
		"span",
		"strike",
		"strong",
		"style",
		"sub",
		"summary",
		"sup",
		"table",
		"tbody",
		"td",
		"template",
		"textarea",
		"tfoot",
		"th",
		"thead",
		"time",
		"tr",
		"track",
		"tt",
		"u",
		"ul",
		"var",
		"video",
		"wbr"
	]);
	var svg$1 = freeze([
		"svg",
		"a",
		"altglyph",
		"altglyphdef",
		"altglyphitem",
		"animatecolor",
		"animatemotion",
		"animatetransform",
		"circle",
		"clippath",
		"defs",
		"desc",
		"ellipse",
		"enterkeyhint",
		"exportparts",
		"filter",
		"font",
		"g",
		"glyph",
		"glyphref",
		"hkern",
		"image",
		"inputmode",
		"line",
		"lineargradient",
		"marker",
		"mask",
		"metadata",
		"mpath",
		"part",
		"path",
		"pattern",
		"polygon",
		"polyline",
		"radialgradient",
		"rect",
		"stop",
		"style",
		"switch",
		"symbol",
		"text",
		"textpath",
		"title",
		"tref",
		"tspan",
		"view",
		"vkern"
	]);
	var svgFilters = freeze([
		"feBlend",
		"feColorMatrix",
		"feComponentTransfer",
		"feComposite",
		"feConvolveMatrix",
		"feDiffuseLighting",
		"feDisplacementMap",
		"feDistantLight",
		"feDropShadow",
		"feFlood",
		"feFuncA",
		"feFuncB",
		"feFuncG",
		"feFuncR",
		"feGaussianBlur",
		"feImage",
		"feMerge",
		"feMergeNode",
		"feMorphology",
		"feOffset",
		"fePointLight",
		"feSpecularLighting",
		"feSpotLight",
		"feTile",
		"feTurbulence"
	]);
	var svgDisallowed = freeze([
		"animate",
		"color-profile",
		"cursor",
		"discard",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"foreignobject",
		"hatch",
		"hatchpath",
		"mesh",
		"meshgradient",
		"meshpatch",
		"meshrow",
		"missing-glyph",
		"script",
		"set",
		"solidcolor",
		"unknown",
		"use"
	]);
	var mathMl$1 = freeze([
		"math",
		"menclose",
		"merror",
		"mfenced",
		"mfrac",
		"mglyph",
		"mi",
		"mlabeledtr",
		"mmultiscripts",
		"mn",
		"mo",
		"mover",
		"mpadded",
		"mphantom",
		"mroot",
		"mrow",
		"ms",
		"mspace",
		"msqrt",
		"mstyle",
		"msub",
		"msup",
		"msubsup",
		"mtable",
		"mtd",
		"mtext",
		"mtr",
		"munder",
		"munderover",
		"mprescripts"
	]);
	var mathMlDisallowed = freeze([
		"maction",
		"maligngroup",
		"malignmark",
		"mlongdiv",
		"mscarries",
		"mscarry",
		"msgroup",
		"mstack",
		"msline",
		"msrow",
		"semantics",
		"annotation",
		"annotation-xml",
		"mprescripts",
		"none"
	]);
	var text = freeze(["#text"]);
	var html = freeze([
		"accept",
		"action",
		"align",
		"alt",
		"autocapitalize",
		"autocomplete",
		"autopictureinpicture",
		"autoplay",
		"background",
		"bgcolor",
		"border",
		"capture",
		"cellpadding",
		"cellspacing",
		"checked",
		"cite",
		"class",
		"clear",
		"color",
		"cols",
		"colspan",
		"controls",
		"controlslist",
		"coords",
		"crossorigin",
		"datetime",
		"decoding",
		"default",
		"dir",
		"disabled",
		"disablepictureinpicture",
		"disableremoteplayback",
		"download",
		"draggable",
		"enctype",
		"enterkeyhint",
		"exportparts",
		"face",
		"for",
		"headers",
		"height",
		"hidden",
		"high",
		"href",
		"hreflang",
		"id",
		"inert",
		"inputmode",
		"integrity",
		"ismap",
		"kind",
		"label",
		"lang",
		"list",
		"loading",
		"loop",
		"low",
		"max",
		"maxlength",
		"media",
		"method",
		"min",
		"minlength",
		"multiple",
		"muted",
		"name",
		"nonce",
		"noshade",
		"novalidate",
		"nowrap",
		"open",
		"optimum",
		"part",
		"pattern",
		"placeholder",
		"playsinline",
		"popover",
		"popovertarget",
		"popovertargetaction",
		"poster",
		"preload",
		"pubdate",
		"radiogroup",
		"readonly",
		"rel",
		"required",
		"rev",
		"reversed",
		"role",
		"rows",
		"rowspan",
		"spellcheck",
		"scope",
		"selected",
		"shape",
		"size",
		"sizes",
		"slot",
		"span",
		"srclang",
		"start",
		"src",
		"srcset",
		"step",
		"style",
		"summary",
		"tabindex",
		"title",
		"translate",
		"type",
		"usemap",
		"valign",
		"value",
		"width",
		"wrap",
		"xmlns",
		"slot"
	]);
	var svg = freeze([
		"accent-height",
		"accumulate",
		"additive",
		"alignment-baseline",
		"amplitude",
		"ascent",
		"attributename",
		"attributetype",
		"azimuth",
		"basefrequency",
		"baseline-shift",
		"begin",
		"bias",
		"by",
		"class",
		"clip",
		"clippathunits",
		"clip-path",
		"clip-rule",
		"color",
		"color-interpolation",
		"color-interpolation-filters",
		"color-profile",
		"color-rendering",
		"cx",
		"cy",
		"d",
		"dx",
		"dy",
		"diffuseconstant",
		"direction",
		"display",
		"divisor",
		"dur",
		"edgemode",
		"elevation",
		"end",
		"exponent",
		"fill",
		"fill-opacity",
		"fill-rule",
		"filter",
		"filterunits",
		"flood-color",
		"flood-opacity",
		"font-family",
		"font-size",
		"font-size-adjust",
		"font-stretch",
		"font-style",
		"font-variant",
		"font-weight",
		"fx",
		"fy",
		"g1",
		"g2",
		"glyph-name",
		"glyphref",
		"gradientunits",
		"gradienttransform",
		"height",
		"href",
		"id",
		"image-rendering",
		"in",
		"in2",
		"intercept",
		"k",
		"k1",
		"k2",
		"k3",
		"k4",
		"kerning",
		"keypoints",
		"keysplines",
		"keytimes",
		"lang",
		"lengthadjust",
		"letter-spacing",
		"kernelmatrix",
		"kernelunitlength",
		"lighting-color",
		"local",
		"marker-end",
		"marker-mid",
		"marker-start",
		"markerheight",
		"markerunits",
		"markerwidth",
		"maskcontentunits",
		"maskunits",
		"max",
		"mask",
		"mask-type",
		"media",
		"method",
		"mode",
		"min",
		"name",
		"numoctaves",
		"offset",
		"operator",
		"opacity",
		"order",
		"orient",
		"orientation",
		"origin",
		"overflow",
		"paint-order",
		"path",
		"pathlength",
		"patterncontentunits",
		"patterntransform",
		"patternunits",
		"points",
		"preservealpha",
		"preserveaspectratio",
		"primitiveunits",
		"r",
		"rx",
		"ry",
		"radius",
		"refx",
		"refy",
		"repeatcount",
		"repeatdur",
		"restart",
		"result",
		"rotate",
		"scale",
		"seed",
		"shape-rendering",
		"slope",
		"specularconstant",
		"specularexponent",
		"spreadmethod",
		"startoffset",
		"stddeviation",
		"stitchtiles",
		"stop-color",
		"stop-opacity",
		"stroke-dasharray",
		"stroke-dashoffset",
		"stroke-linecap",
		"stroke-linejoin",
		"stroke-miterlimit",
		"stroke-opacity",
		"stroke",
		"stroke-width",
		"style",
		"surfacescale",
		"systemlanguage",
		"tabindex",
		"tablevalues",
		"targetx",
		"targety",
		"transform",
		"transform-origin",
		"text-anchor",
		"text-decoration",
		"text-rendering",
		"textlength",
		"type",
		"u1",
		"u2",
		"unicode",
		"values",
		"viewbox",
		"visibility",
		"version",
		"vert-adv-y",
		"vert-origin-x",
		"vert-origin-y",
		"width",
		"word-spacing",
		"wrap",
		"writing-mode",
		"xchannelselector",
		"ychannelselector",
		"x",
		"x1",
		"x2",
		"xmlns",
		"y",
		"y1",
		"y2",
		"z",
		"zoomandpan"
	]);
	var mathMl = freeze([
		"accent",
		"accentunder",
		"align",
		"bevelled",
		"close",
		"columnsalign",
		"columnlines",
		"columnspan",
		"denomalign",
		"depth",
		"dir",
		"display",
		"displaystyle",
		"encoding",
		"fence",
		"frame",
		"height",
		"href",
		"id",
		"largeop",
		"length",
		"linethickness",
		"lspace",
		"lquote",
		"mathbackground",
		"mathcolor",
		"mathsize",
		"mathvariant",
		"maxsize",
		"minsize",
		"movablelimits",
		"notation",
		"numalign",
		"open",
		"rowalign",
		"rowlines",
		"rowspacing",
		"rowspan",
		"rspace",
		"rquote",
		"scriptlevel",
		"scriptminsize",
		"scriptsizemultiplier",
		"selection",
		"separator",
		"separators",
		"stretchy",
		"subscriptshift",
		"supscriptshift",
		"symmetric",
		"voffset",
		"width",
		"xmlns"
	]);
	var xml = freeze([
		"xlink:href",
		"xml:id",
		"xlink:title",
		"xml:space",
		"xmlns:xlink"
	]);
	var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
	var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
	var TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm);
	var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
	var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
	var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
	var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
	var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
	var DOCTYPE_NAME = seal(/^html$/i);
	var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
	var EXPRESSIONS = /*#__PURE__*/ Object.freeze({
		__proto__: null,
		ARIA_ATTR,
		ATTR_WHITESPACE,
		CUSTOM_ELEMENT,
		DATA_ATTR,
		DOCTYPE_NAME,
		ERB_EXPR,
		IS_ALLOWED_URI,
		IS_SCRIPT_OR_DATA,
		MUSTACHE_EXPR,
		TMPLIT_EXPR
	});
	var NODE_TYPE = {
		element: 1,
		attribute: 2,
		text: 3,
		cdataSection: 4,
		entityReference: 5,
		entityNode: 6,
		progressingInstruction: 7,
		comment: 8,
		document: 9,
		documentType: 10,
		documentFragment: 11,
		notation: 12
	};
	var getGlobal = function getGlobal() {
		return typeof window === "undefined" ? null : window;
	};
	/**
	* Creates a no-op policy for internal use only.
	* Don't export this function outside this module!
	* @param trustedTypes The policy factory.
	* @param purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
	* @return The policy created (or null, if Trusted Types
	* are not supported or creating the policy failed).
	*/
	var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
		if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") return null;
		let suffix = null;
		const ATTR_NAME = "data-tt-policy-suffix";
		if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) suffix = purifyHostElement.getAttribute(ATTR_NAME);
		const policyName = "dompurify" + (suffix ? "#" + suffix : "");
		try {
			return trustedTypes.createPolicy(policyName, {
				createHTML(html) {
					return html;
				},
				createScriptURL(scriptUrl) {
					return scriptUrl;
				}
			});
		} catch (_) {
			console.warn("TrustedTypes policy " + policyName + " could not be created.");
			return null;
		}
	};
	var _createHooksMap = function _createHooksMap() {
		return {
			afterSanitizeAttributes: [],
			afterSanitizeElements: [],
			afterSanitizeShadowDOM: [],
			beforeSanitizeAttributes: [],
			beforeSanitizeElements: [],
			beforeSanitizeShadowDOM: [],
			uponSanitizeAttribute: [],
			uponSanitizeElement: [],
			uponSanitizeShadowNode: []
		};
	};
	function createDOMPurify() {
		let window = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
		const DOMPurify = (root) => createDOMPurify(root);
		DOMPurify.version = "3.3.0";
		DOMPurify.removed = [];
		if (!window || !window.document || window.document.nodeType !== NODE_TYPE.document || !window.Element) {
			DOMPurify.isSupported = false;
			return DOMPurify;
		}
		let { document } = window;
		const originalDocument = document;
		const currentScript = originalDocument.currentScript;
		const { DocumentFragment, HTMLTemplateElement, Node, Element, NodeFilter, NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap, HTMLFormElement, DOMParser, trustedTypes } = window;
		const ElementPrototype = Element.prototype;
		const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
		const remove = lookupGetter(ElementPrototype, "remove");
		const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
		const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
		const getParentNode = lookupGetter(ElementPrototype, "parentNode");
		if (typeof HTMLTemplateElement === "function") {
			const template = document.createElement("template");
			if (template.content && template.content.ownerDocument) document = template.content.ownerDocument;
		}
		let trustedTypesPolicy;
		let emptyHTML = "";
		const { implementation, createNodeIterator, createDocumentFragment, getElementsByTagName } = document;
		const { importNode } = originalDocument;
		let hooks = _createHooksMap();
		/**
		* Expose whether this browser supports running the full DOMPurify.
		*/
		DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
		const { MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR, DATA_ATTR, ARIA_ATTR, IS_SCRIPT_OR_DATA, ATTR_WHITESPACE, CUSTOM_ELEMENT } = EXPRESSIONS;
		let { IS_ALLOWED_URI: IS_ALLOWED_URI$1 } = EXPRESSIONS;
		/**
		* We consider the elements and attributes below to be safe. Ideally
		* don't add any new ones but feel free to remove unwanted ones.
		*/
		let ALLOWED_TAGS = null;
		const DEFAULT_ALLOWED_TAGS = addToSet({}, [
			...html$1,
			...svg$1,
			...svgFilters,
			...mathMl$1,
			...text
		]);
		let ALLOWED_ATTR = null;
		const DEFAULT_ALLOWED_ATTR = addToSet({}, [
			...html,
			...svg,
			...mathMl,
			...xml
		]);
		let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
			tagNameCheck: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: null
			},
			attributeNameCheck: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: null
			},
			allowCustomizedBuiltInElements: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: false
			}
		}));
		let FORBID_TAGS = null;
		let FORBID_ATTR = null;
		const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
			tagCheck: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: null
			},
			attributeCheck: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: null
			}
		}));
		let ALLOW_ARIA_ATTR = true;
		let ALLOW_DATA_ATTR = true;
		let ALLOW_UNKNOWN_PROTOCOLS = false;
		let ALLOW_SELF_CLOSE_IN_ATTR = true;
		let SAFE_FOR_TEMPLATES = false;
		let SAFE_FOR_XML = true;
		let WHOLE_DOCUMENT = false;
		let SET_CONFIG = false;
		let FORCE_BODY = false;
		let RETURN_DOM = false;
		let RETURN_DOM_FRAGMENT = false;
		let RETURN_TRUSTED_TYPE = false;
		let SANITIZE_DOM = true;
		let SANITIZE_NAMED_PROPS = false;
		const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
		let KEEP_CONTENT = true;
		let IN_PLACE = false;
		let USE_PROFILES = {};
		let FORBID_CONTENTS = null;
		const DEFAULT_FORBID_CONTENTS = addToSet({}, [
			"annotation-xml",
			"audio",
			"colgroup",
			"desc",
			"foreignobject",
			"head",
			"iframe",
			"math",
			"mi",
			"mn",
			"mo",
			"ms",
			"mtext",
			"noembed",
			"noframes",
			"noscript",
			"plaintext",
			"script",
			"style",
			"svg",
			"template",
			"thead",
			"title",
			"video",
			"xmp"
		]);
		let DATA_URI_TAGS = null;
		const DEFAULT_DATA_URI_TAGS = addToSet({}, [
			"audio",
			"video",
			"img",
			"source",
			"image",
			"track"
		]);
		let URI_SAFE_ATTRIBUTES = null;
		const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
			"alt",
			"class",
			"for",
			"id",
			"label",
			"name",
			"pattern",
			"placeholder",
			"role",
			"summary",
			"title",
			"value",
			"style",
			"xmlns"
		]);
		const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
		const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
		const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
		let NAMESPACE = HTML_NAMESPACE;
		let IS_EMPTY_INPUT = false;
		let ALLOWED_NAMESPACES = null;
		const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
			MATHML_NAMESPACE,
			SVG_NAMESPACE,
			HTML_NAMESPACE
		], stringToString);
		let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, [
			"mi",
			"mo",
			"mn",
			"ms",
			"mtext"
		]);
		let HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
		const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
			"title",
			"style",
			"font",
			"a",
			"script"
		]);
		let PARSER_MEDIA_TYPE = null;
		const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
		const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
		let transformCaseFunc = null;
		let CONFIG = null;
		const formElement = document.createElement("form");
		const isRegexOrFunction = function isRegexOrFunction(testValue) {
			return testValue instanceof RegExp || testValue instanceof Function;
		};
		/**
		* _parseConfig
		*
		* @param cfg optional config literal
		*/
		const _parseConfig = function _parseConfig() {
			let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			if (CONFIG && CONFIG === cfg) return;
			if (!cfg || typeof cfg !== "object") cfg = {};
			cfg = clone(cfg);
			PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
			transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
			ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
			ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
			ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
			URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
			DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
			FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
			FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
			FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
			USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
			ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
			ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
			ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
			ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
			SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
			SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
			WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
			RETURN_DOM = cfg.RETURN_DOM || false;
			RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
			RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
			FORCE_BODY = cfg.FORCE_BODY || false;
			SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
			SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
			KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
			IN_PLACE = cfg.IN_PLACE || false;
			IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
			NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
			MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
			HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
			CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
			if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
			if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
			if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
			if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
			if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
			if (USE_PROFILES) {
				ALLOWED_TAGS = addToSet({}, text);
				ALLOWED_ATTR = [];
				if (USE_PROFILES.html === true) {
					addToSet(ALLOWED_TAGS, html$1);
					addToSet(ALLOWED_ATTR, html);
				}
				if (USE_PROFILES.svg === true) {
					addToSet(ALLOWED_TAGS, svg$1);
					addToSet(ALLOWED_ATTR, svg);
					addToSet(ALLOWED_ATTR, xml);
				}
				if (USE_PROFILES.svgFilters === true) {
					addToSet(ALLOWED_TAGS, svgFilters);
					addToSet(ALLOWED_ATTR, svg);
					addToSet(ALLOWED_ATTR, xml);
				}
				if (USE_PROFILES.mathMl === true) {
					addToSet(ALLOWED_TAGS, mathMl$1);
					addToSet(ALLOWED_ATTR, mathMl);
					addToSet(ALLOWED_ATTR, xml);
				}
			}
			if (cfg.ADD_TAGS) if (typeof cfg.ADD_TAGS === "function") EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
			else {
				if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = clone(ALLOWED_TAGS);
				addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
			}
			if (cfg.ADD_ATTR) if (typeof cfg.ADD_ATTR === "function") EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
			else {
				if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = clone(ALLOWED_ATTR);
				addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
			}
			if (cfg.ADD_URI_SAFE_ATTR) addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
			if (cfg.FORBID_CONTENTS) {
				if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
				addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
			}
			if (KEEP_CONTENT) ALLOWED_TAGS["#text"] = true;
			if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
				"html",
				"head",
				"body"
			]);
			if (ALLOWED_TAGS.table) {
				addToSet(ALLOWED_TAGS, ["tbody"]);
				delete FORBID_TAGS.tbody;
			}
			if (cfg.TRUSTED_TYPES_POLICY) {
				if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
				if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
				trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
				emptyHTML = trustedTypesPolicy.createHTML("");
			} else {
				if (trustedTypesPolicy === void 0) trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
				if (trustedTypesPolicy !== null && typeof emptyHTML === "string") emptyHTML = trustedTypesPolicy.createHTML("");
			}
			if (freeze) freeze(cfg);
			CONFIG = cfg;
		};
		const ALL_SVG_TAGS = addToSet({}, [
			...svg$1,
			...svgFilters,
			...svgDisallowed
		]);
		const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
		/**
		* @param element a DOM element whose namespace is being checked
		* @returns Return false if the element has a
		*  namespace that a spec-compliant parser would never
		*  return. Return true otherwise.
		*/
		const _checkValidNamespace = function _checkValidNamespace(element) {
			let parent = getParentNode(element);
			if (!parent || !parent.tagName) parent = {
				namespaceURI: NAMESPACE,
				tagName: "template"
			};
			const tagName = stringToLowerCase(element.tagName);
			const parentTagName = stringToLowerCase(parent.tagName);
			if (!ALLOWED_NAMESPACES[element.namespaceURI]) return false;
			if (element.namespaceURI === SVG_NAMESPACE) {
				if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "svg";
				if (parent.namespaceURI === MATHML_NAMESPACE) return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
				return Boolean(ALL_SVG_TAGS[tagName]);
			}
			if (element.namespaceURI === MATHML_NAMESPACE) {
				if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "math";
				if (parent.namespaceURI === SVG_NAMESPACE) return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
				return Boolean(ALL_MATHML_TAGS[tagName]);
			}
			if (element.namespaceURI === HTML_NAMESPACE) {
				if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
				if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
				return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
			}
			if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) return true;
			return false;
		};
		/**
		* _forceRemove
		*
		* @param node a DOM node
		*/
		const _forceRemove = function _forceRemove(node) {
			arrayPush(DOMPurify.removed, { element: node });
			try {
				getParentNode(node).removeChild(node);
			} catch (_) {
				remove(node);
			}
		};
		/**
		* _removeAttribute
		*
		* @param name an Attribute name
		* @param element a DOM node
		*/
		const _removeAttribute = function _removeAttribute(name, element) {
			try {
				arrayPush(DOMPurify.removed, {
					attribute: element.getAttributeNode(name),
					from: element
				});
			} catch (_) {
				arrayPush(DOMPurify.removed, {
					attribute: null,
					from: element
				});
			}
			element.removeAttribute(name);
			if (name === "is") if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
				_forceRemove(element);
			} catch (_) {}
			else try {
				element.setAttribute(name, "");
			} catch (_) {}
		};
		/**
		* _initDocument
		*
		* @param dirty - a string of dirty markup
		* @return a DOM, filled with the dirty markup
		*/
		const _initDocument = function _initDocument(dirty) {
			let doc = null;
			let leadingWhitespace = null;
			if (FORCE_BODY) dirty = "<remove></remove>" + dirty;
			else {
				const matches = stringMatch(dirty, /^[\r\n\t ]+/);
				leadingWhitespace = matches && matches[0];
			}
			if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) dirty = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + dirty + "</body></html>";
			const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
			if (NAMESPACE === HTML_NAMESPACE) try {
				doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
			} catch (_) {}
			if (!doc || !doc.documentElement) {
				doc = implementation.createDocument(NAMESPACE, "template", null);
				try {
					doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
				} catch (_) {}
			}
			const body = doc.body || doc.documentElement;
			if (dirty && leadingWhitespace) body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
			if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
			return WHOLE_DOCUMENT ? doc.documentElement : body;
		};
		/**
		* Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
		*
		* @param root The root element or node to start traversing on.
		* @return The created NodeIterator
		*/
		const _createNodeIterator = function _createNodeIterator(root) {
			return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
		};
		/**
		* _isClobbered
		*
		* @param element element to check for clobbering attacks
		* @return true if clobbered, false if safe
		*/
		const _isClobbered = function _isClobbered(element) {
			return element instanceof HTMLFormElement && (typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function");
		};
		/**
		* Checks whether the given object is a DOM node.
		*
		* @param value object to check whether it's a DOM node
		* @return true is object is a DOM node
		*/
		const _isNode = function _isNode(value) {
			return typeof Node === "function" && value instanceof Node;
		};
		function _executeHooks(hooks, currentNode, data) {
			arrayForEach(hooks, (hook) => {
				hook.call(DOMPurify, currentNode, data, CONFIG);
			});
		}
		/**
		* _sanitizeElements
		*
		* @protect nodeName
		* @protect textContent
		* @protect removeChild
		* @param currentNode to check for permission to exist
		* @return true if node was killed, false if left alive
		*/
		const _sanitizeElements = function _sanitizeElements(currentNode) {
			let content = null;
			_executeHooks(hooks.beforeSanitizeElements, currentNode, null);
			if (_isClobbered(currentNode)) {
				_forceRemove(currentNode);
				return true;
			}
			const tagName = transformCaseFunc(currentNode.nodeName);
			_executeHooks(hooks.uponSanitizeElement, currentNode, {
				tagName,
				allowedTags: ALLOWED_TAGS
			});
			if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
				_forceRemove(currentNode);
				return true;
			}
			if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
				_forceRemove(currentNode);
				return true;
			}
			if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
				_forceRemove(currentNode);
				return true;
			}
			if (!(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName])) {
				if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
					if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
					if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
				}
				if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
					const parentNode = getParentNode(currentNode) || currentNode.parentNode;
					const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
					if (childNodes && parentNode) {
						const childCount = childNodes.length;
						for (let i = childCount - 1; i >= 0; --i) {
							const childClone = cloneNode(childNodes[i], true);
							childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
							parentNode.insertBefore(childClone, getNextSibling(currentNode));
						}
					}
				}
				_forceRemove(currentNode);
				return true;
			}
			if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
				_forceRemove(currentNode);
				return true;
			}
			if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
				_forceRemove(currentNode);
				return true;
			}
			if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
				content = currentNode.textContent;
				arrayForEach([
					MUSTACHE_EXPR,
					ERB_EXPR,
					TMPLIT_EXPR
				], (expr) => {
					content = stringReplace(content, expr, " ");
				});
				if (currentNode.textContent !== content) {
					arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
					currentNode.textContent = content;
				}
			}
			_executeHooks(hooks.afterSanitizeElements, currentNode, null);
			return false;
		};
		/**
		* _isValidAttribute
		*
		* @param lcTag Lowercase tag name of containing element.
		* @param lcName Lowercase attribute name.
		* @param value Attribute value.
		* @return Returns true if `value` is valid, otherwise false.
		*/
		const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
			if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document || value in formElement)) return false;
			if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName));
			else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName));
			else if (EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag));
			else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) if (_isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName, lcTag)) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value)));
			else return false;
			else if (URI_SAFE_ATTRIBUTES[lcName]);
			else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, "")));
			else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]);
			else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, "")));
			else if (value) return false;
			return true;
		};
		/**
		* _isBasicCustomElement
		* checks if at least one dash is included in tagName, and it's not the first char
		* for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
		*
		* @param tagName name of the tag of the node to sanitize
		* @returns Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
		*/
		const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
			return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT);
		};
		/**
		* _sanitizeAttributes
		*
		* @protect attributes
		* @protect nodeName
		* @protect removeAttribute
		* @protect setAttribute
		*
		* @param currentNode to sanitize
		*/
		const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
			_executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
			const { attributes } = currentNode;
			if (!attributes || _isClobbered(currentNode)) return;
			const hookEvent = {
				attrName: "",
				attrValue: "",
				keepAttr: true,
				allowedAttributes: ALLOWED_ATTR,
				forceKeepAttr: void 0
			};
			let l = attributes.length;
			while (l--) {
				const { name, namespaceURI, value: attrValue } = attributes[l];
				const lcName = transformCaseFunc(name);
				const initValue = attrValue;
				let value = name === "value" ? initValue : stringTrim(initValue);
				hookEvent.attrName = lcName;
				hookEvent.attrValue = value;
				hookEvent.keepAttr = true;
				hookEvent.forceKeepAttr = void 0;
				_executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
				value = hookEvent.attrValue;
				if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
					_removeAttribute(name, currentNode);
					value = SANITIZE_NAMED_PROPS_PREFIX + value;
				}
				if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title|textarea)/i, value)) {
					_removeAttribute(name, currentNode);
					continue;
				}
				if (lcName === "attributename" && stringMatch(value, "href")) {
					_removeAttribute(name, currentNode);
					continue;
				}
				if (hookEvent.forceKeepAttr) continue;
				if (!hookEvent.keepAttr) {
					_removeAttribute(name, currentNode);
					continue;
				}
				if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
					_removeAttribute(name, currentNode);
					continue;
				}
				if (SAFE_FOR_TEMPLATES) arrayForEach([
					MUSTACHE_EXPR,
					ERB_EXPR,
					TMPLIT_EXPR
				], (expr) => {
					value = stringReplace(value, expr, " ");
				});
				const lcTag = transformCaseFunc(currentNode.nodeName);
				if (!_isValidAttribute(lcTag, lcName, value)) {
					_removeAttribute(name, currentNode);
					continue;
				}
				if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") if (namespaceURI);
				else switch (trustedTypes.getAttributeType(lcTag, lcName)) {
					case "TrustedHTML":
						value = trustedTypesPolicy.createHTML(value);
						break;
					case "TrustedScriptURL":
						value = trustedTypesPolicy.createScriptURL(value);
						break;
				}
				if (value !== initValue) try {
					if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
					else currentNode.setAttribute(name, value);
					if (_isClobbered(currentNode)) _forceRemove(currentNode);
					else arrayPop(DOMPurify.removed);
				} catch (_) {
					_removeAttribute(name, currentNode);
				}
			}
			_executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
		};
		/**
		* _sanitizeShadowDOM
		*
		* @param fragment to iterate over recursively
		*/
		const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
			let shadowNode = null;
			const shadowIterator = _createNodeIterator(fragment);
			_executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
			while (shadowNode = shadowIterator.nextNode()) {
				_executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
				_sanitizeElements(shadowNode);
				_sanitizeAttributes(shadowNode);
				if (shadowNode.content instanceof DocumentFragment) _sanitizeShadowDOM(shadowNode.content);
			}
			_executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
		};
		DOMPurify.sanitize = function(dirty) {
			let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			let body = null;
			let importedNode = null;
			let currentNode = null;
			let returnNode = null;
			IS_EMPTY_INPUT = !dirty;
			if (IS_EMPTY_INPUT) dirty = "<!-->";
			if (typeof dirty !== "string" && !_isNode(dirty)) if (typeof dirty.toString === "function") {
				dirty = dirty.toString();
				if (typeof dirty !== "string") throw typeErrorCreate("dirty is not a string, aborting");
			} else throw typeErrorCreate("toString is not a function");
			if (!DOMPurify.isSupported) return dirty;
			if (!SET_CONFIG) _parseConfig(cfg);
			DOMPurify.removed = [];
			if (typeof dirty === "string") IN_PLACE = false;
			if (IN_PLACE) {
				if (dirty.nodeName) {
					const tagName = transformCaseFunc(dirty.nodeName);
					if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
				}
			} else if (dirty instanceof Node) {
				body = _initDocument("<!---->");
				importedNode = body.ownerDocument.importNode(dirty, true);
				if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") body = importedNode;
				else if (importedNode.nodeName === "HTML") body = importedNode;
				else body.appendChild(importedNode);
			} else {
				if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
				body = _initDocument(dirty);
				if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
			}
			if (body && FORCE_BODY) _forceRemove(body.firstChild);
			const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
			while (currentNode = nodeIterator.nextNode()) {
				_sanitizeElements(currentNode);
				_sanitizeAttributes(currentNode);
				if (currentNode.content instanceof DocumentFragment) _sanitizeShadowDOM(currentNode.content);
			}
			if (IN_PLACE) return dirty;
			if (RETURN_DOM) {
				if (RETURN_DOM_FRAGMENT) {
					returnNode = createDocumentFragment.call(body.ownerDocument);
					while (body.firstChild) returnNode.appendChild(body.firstChild);
				} else returnNode = body;
				if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) returnNode = importNode.call(originalDocument, returnNode, true);
				return returnNode;
			}
			let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
			if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
			if (SAFE_FOR_TEMPLATES) arrayForEach([
				MUSTACHE_EXPR,
				ERB_EXPR,
				TMPLIT_EXPR
			], (expr) => {
				serializedHTML = stringReplace(serializedHTML, expr, " ");
			});
			return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
		};
		DOMPurify.setConfig = function() {
			let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			_parseConfig(cfg);
			SET_CONFIG = true;
		};
		DOMPurify.clearConfig = function() {
			CONFIG = null;
			SET_CONFIG = false;
		};
		DOMPurify.isValidAttribute = function(tag, attr, value) {
			if (!CONFIG) _parseConfig({});
			const lcTag = transformCaseFunc(tag);
			const lcName = transformCaseFunc(attr);
			return _isValidAttribute(lcTag, lcName, value);
		};
		DOMPurify.addHook = function(entryPoint, hookFunction) {
			if (typeof hookFunction !== "function") return;
			arrayPush(hooks[entryPoint], hookFunction);
		};
		DOMPurify.removeHook = function(entryPoint, hookFunction) {
			if (hookFunction !== void 0) {
				const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
				return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
			}
			return arrayPop(hooks[entryPoint]);
		};
		DOMPurify.removeHooks = function(entryPoint) {
			hooks[entryPoint] = [];
		};
		DOMPurify.removeAllHooks = function() {
			hooks = _createHooksMap();
		};
		return DOMPurify;
	}
	var purify = createDOMPurify();

//#endregion
//#region packages/packages/core/editor-canvas/src/utils/sanitize-escaped-html.ts
	var ALLOWED_NON_OPERATIONAL_ATTRS = [
		"href",
		"target",
		"class",
		"id",
		"style",
		"title",
		"lang",
		"dir",
		"role"
	];
	function getAllowedHtmlWrapperTags$1() {
		return window.elementorCommon?.config?.allowedHTMLWrapperTags ?? [];
	}
	__name(getAllowedHtmlWrapperTags$1, "getAllowedHtmlWrapperTags");
	function sanitizeEscapedHtml(value) {
		if (!value) return "";
		const allowedTags = [...getAllowedHtmlWrapperTags$1()];
		return purify.sanitize(value, {
			ALLOWED_TAGS: allowedTags,
			ALLOWED_ATTR: [...ALLOWED_NON_OPERATIONAL_ATTRS],
			ALLOW_DATA_ATTR: true,
			ALLOW_ARIA_ATTR: true
		});
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/settings/escaped-html-transformer.ts
	var escapedHtmlTransformer = createTransformer((value) => {
		return sanitizeEscapedHtml(value);
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/settings/html-v2-transformer.ts
	var htmlV2Transformer = createTransformer((value) => {
		return value?.content ?? "";
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/settings/html-v3-transformer.ts
	var htmlV3Transformer = createTransformer((value) => {
		return value?.content ?? "";
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/settings/link-transformer.ts
	var linkTransformer = createTransformer(({ destination, isTargetBlank, tag }) => {
		return {
			href: typeof destination === "number" ? "#post-id-" + destination : destination,
			target: isTargetBlank ? "_blank" : "_self",
			tag: tag ?? "a"
		};
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/settings/query-transformer.ts
	var queryTransformer = createTransformer(({ id }) => {
		return id ?? null;
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/settings/time-range-transformer.ts
	var timeRangeTransformer = createTransformer((value) => {
		if (!value || Object.keys(value).length === 0) return null;
		return {
			min: value.min || null,
			max: value.max || null
		};
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/shared/process-svg-content.ts
	var SVG_INLINE_STYLES = "width: 100%; height: 100%; overflow: unset;";
	function processSvgContent(svgText) {
		const sanitized = purify.sanitize(svgText, { USE_PROFILES: {
			svg: true,
			svgFilters: true
		} });
		const svgElement = new DOMParser().parseFromString(sanitized, "image/svg+xml").querySelector("svg");
		if (!svgElement) return null;
		svgElement.setAttribute("fill", "currentColor");
		const trimmed = (svgElement.getAttribute("style") ?? "").trim();
		const merged = trimmed ? `${trimmed.replace(/;$/, "")}; ${SVG_INLINE_STYLES}` : SVG_INLINE_STYLES;
		svgElement.setAttribute("style", merged);
		return svgElement.outerHTML;
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/shared/icon-transformer.ts
	var FONT_AWESOME_JSON = {
		width: 0,
		height: 1,
		path: 4
	};
	var fontAwesomeJsonCache = /* @__PURE__ */ new Map();
	var iconTransformer = createTransformer(async (value, { signal }) => {
		const iconValue = typeof value.value === "string" ? value.value : null;
		const library = typeof value.library === "string" ? value.library : null;
		if (!iconValue || !library) return {
			html: null,
			url: null
		};
		const iconName = getFontAwesomeIconName(iconValue);
		const jsonFileName = getFontAwesomeJsonFileName(library);
		if (!iconName || !jsonFileName) return {
			html: null,
			url: null
		};
		const iconData = (await fetchFontAwesomeIcons(jsonFileName, signal))?.[iconName];
		if (!iconData) return {
			html: null,
			url: null
		};
		return {
			html: processSvgContent(buildFontAwesomeSvg(iconData)),
			url: null
		};
	});
	function getFontAwesomeIconName(iconValue) {
		return iconValue.match(/^fa\S*\s+fa-(.+)$/)?.[1] ?? null;
	}
	function getFontAwesomeJsonFileName(library) {
		if (!library.startsWith("fa-")) return null;
		return library.replace(/^fa-/, "");
	}
	function getAssetsBaseUrl() {
		const assetsUrl = window.elementorCommon?.config?.urls?.assets;
		return typeof assetsUrl === "string" && assetsUrl !== "" ? assetsUrl : null;
	}
	async function fetchFontAwesomeIcons(jsonFileName, signal) {
		const cached = fontAwesomeJsonCache.get(jsonFileName);
		if (cached) return cached;
		const icons = await loadFontAwesomeIcons(jsonFileName, signal);
		if (icons) fontAwesomeJsonCache.set(jsonFileName, icons);
		return icons;
	}
	async function loadFontAwesomeIcons(jsonFileName, signal) {
		const assetsUrl = getAssetsBaseUrl();
		if (!assetsUrl) return null;
		try {
			const response = await fetch(`${assetsUrl}lib/font-awesome/json/${jsonFileName}.json`, { signal });
			if (!response.ok) return null;
			return (await response.json()).icons ?? null;
		} catch {
			return null;
		}
	}
	function buildFontAwesomeSvg(iconData) {
		return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${iconData[FONT_AWESOME_JSON.width]} ${iconData[FONT_AWESOME_JSON.height]}"><path d="${iconData[FONT_AWESOME_JSON.path]}"></path></svg>`;
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/shared/image-src-transformer.ts
	var imageSrcTransformer = createTransformer((value) => ({
		id: value.id ?? null,
		url: value.url ?? null,
		alt: value.alt ?? null
	}));

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/shared/image-transformer.ts
	var imageTransformer = createTransformer(async (value) => {
		const { src, size } = value;
		if (!src?.id) return src?.url ? {
			src: src.url,
			alt: src.alt ?? ""
		} : null;
		const attachment = await (0, _elementor_wp_media.getMediaAttachment)({ id: src.id });
		const sizedAttachment = attachment?.sizes?.[size ?? ""];
		if (sizedAttachment) return {
			src: sizedAttachment.url,
			height: sizedAttachment.height,
			width: sizedAttachment.width,
			alt: attachment.alt
		};
		if (attachment) return {
			src: attachment.url,
			height: attachment.height,
			width: attachment.width,
			alt: attachment.alt
		};
		return null;
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/shared/plain-transformer.ts
	var plainTransformer = createTransformer((value) => {
		return value;
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/shared/svg-src-transformer.ts
	async function fetchSvgContent(url, signal) {
		try {
			const response = await fetch(url, { signal });
			if (!response.ok) return null;
			const contentType = response.headers.get("content-type") ?? "";
			if (!(contentType.includes("svg") || contentType.includes("xml") || url.endsWith(".svg"))) return null;
			return await response.text();
		} catch {
			return null;
		}
	}
	function resolveSvgSrcId(id) {
		if (typeof id !== "number" || id <= 0) return null;
		return id;
	}
	var svgSrcTransformer = createTransformer(async (value, { signal }) => {
		const id = resolveSvgSrcId(value.id);
		const urlFromValue = typeof value.url === "string" ? value.url : null;
		let url = urlFromValue;
		if (id && !urlFromValue) url = (await (0, _elementor_wp_media.getMediaAttachment)({ id }))?.url ?? null;
		const resolvedUrl = typeof url === "string" ? url : null;
		if (!resolvedUrl) return {
			html: null,
			url: null
		};
		const svgText = await fetchSvgContent(resolvedUrl, signal);
		return {
			html: svgText ? processSvgContent(svgText) : null,
			url: resolvedUrl
		};
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/shared/video-src-transformer.ts
	var videoSrcTransformer = createTransformer(async (value) => {
		const { id, url } = value;
		if (!id) return {
			id: null,
			url
		};
		return {
			id,
			url: (await (0, _elementor_wp_media.getMediaAttachment)({ id }))?.url ?? url
		};
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/init-settings-transformers.ts
	function initSettingsTransformers() {
		settingsTransformersRegistry.register("classes", createClassesTransformer()).register("link", linkTransformer).register("query", queryTransformer).register("image", imageTransformer).register("image-src", imageSrcTransformer).register("svg-src", svgSrcTransformer).register("icon", iconTransformer).register("video-src", videoSrcTransformer).register("attributes", attributesTransformer).register("date-time", dateTimeTransformer).register("html-v2", htmlV2Transformer).register("html-v3", htmlV3Transformer).register("escaped-html", escapedHtmlTransformer).register("date-range", dateRangeTransformer).register("time-range", timeRangeTransformer).registerFallback(plainTransformer);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/background-color-overlay-transformer.ts
	var backgroundColorOverlayTransformer = createTransformer((value) => {
		const { color = null } = value;
		if (!color) return null;
		return `linear-gradient(${color}, ${color})`;
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/background-gradient-overlay-transformer.ts
	var backgroundGradientOverlayTransformer = createTransformer((value) => {
		if (value.type === "radial") return `radial-gradient(circle at ${value.positions}, ${value.stops})`;
		return `linear-gradient(${value.angle}deg, ${value.stops})`;
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/background-image-overlay-transformer.ts
	var backgroundImageOverlayTransformer = createTransformer((value) => {
		const { image, size = null, position = null, repeat = null, attachment = null } = value;
		if (!image) return null;
		return {
			src: image.src ? `url(${image.src})` : null,
			repeat,
			attachment,
			size,
			position
		};
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/background-image-size-scale-transformer.ts
	var backgroundImageSizeScaleTransformer = createTransformer(({ width, height }) => `${width ?? "auto"} ${height ?? "auto"}`);

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/background-overlay-transformer.ts
	var backgroundOverlayTransformer = createTransformer((value) => {
		if (!value || value.length === 0) return null;
		const normalizedValues = normalizeOverlayValues(value);
		if (normalizedValues.length === 0) return null;
		return {
			"background-image": getValuesString(normalizedValues, "src", "none", true),
			"background-repeat": getValuesString(normalizedValues, "repeat", "repeat"),
			"background-attachment": getValuesString(normalizedValues, "attachment", "scroll"),
			"background-size": getValuesString(normalizedValues, "size", "auto auto"),
			"background-position": getValuesString(normalizedValues, "position", "0% 0%")
		};
	});
	function normalizeOverlayValues(overlays) {
		return overlays.map((item) => {
			if (typeof item === "string") return {
				src: item,
				repeat: null,
				attachment: null,
				size: null,
				position: null
			};
			return item;
		}).filter((item) => item && !!item.src);
	}
	function getValuesString(items, prop, defaultValue, preventUnification = false) {
		if (items.filter((item) => item?.[prop]).length === 0) return defaultValue;
		const formattedValues = items.map((item) => item[prop] ?? defaultValue);
		if (!preventUnification) {
			if (formattedValues.every((value) => value === formattedValues[0])) return formattedValues[0];
		}
		return formattedValues.join(",");
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/background-transformer.ts
	var backgroundTransformer = createTransformer((value) => {
		const { color = null, "background-overlay": overlays = null, clip = null } = value;
		return createMultiPropsValue({
			...overlays,
			"background-color": color,
			"background-clip": clip
		});
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/color-stop-transformer.ts
	var colorStopTransformer = createTransformer((value) => `${value?.color} ${value?.offset ?? 0}%`);

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/create-combine-array-transformer.ts
	var createCombineArrayTransformer = (delimiter) => {
		return createTransformer((value) => value?.length ? value.filter(Boolean).join(delimiter) : null);
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/create-multi-props-transformer.ts
	var createMultiPropsTransformer = (keys, keyGenerator) => {
		return createTransformer((value, { key: propKey }) => {
			const entries = keys.filter((key) => value[key]).map((key) => [keyGenerator({
				propKey,
				key
			}), value[key]]);
			return createMultiPropsValue(Object.fromEntries(entries));
		});
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/filter-transformer.ts
	var filterTransformer = createTransformer((filterValues) => {
		if (filterValues?.length < 1) return null;
		return filterValues.filter(Boolean).map(mapToFilterFunctionString).join(" ");
	});
	var mapToFilterFunctionString = (value) => {
		if (value.func === "drop-shadow") {
			const { xAxis, yAxis, blur, color } = value.args;
			return `drop-shadow(${xAxis || "0px"} ${yAxis || "0px"} ${blur || "10px"} ${color || "transparent"})`;
		}
		const size = value.args?.size;
		if (!value.func || !size) return "";
		return `${value.func}(${size})`;
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/flex-transformer.ts
	var DEFAULT_FLEX_GROW = 0;
	var DEFAULT_FLEX_SHRINK = 1;
	var DEFAULT_FLEX_BASIS = "auto";
	var formatBasis = (basis) => typeof basis === "object" && basis.size !== void 0 ? `${basis.size}${basis.unit || ""}` : basis;
	var flexTransformer = createTransformer((value) => {
		const grow = value.flexGrow;
		const shrink = value.flexShrink;
		const basis = value.flexBasis;
		const hasGrow = grow !== void 0 && grow !== null;
		const hasShrink = shrink !== void 0 && shrink !== null;
		const hasBasis = basis !== void 0 && basis !== null;
		if (!hasGrow && !hasShrink && !hasBasis) return null;
		return `${hasGrow ? grow : DEFAULT_FLEX_GROW} ${hasShrink ? shrink : DEFAULT_FLEX_SHRINK} ${hasBasis ? formatBasis(basis) : DEFAULT_FLEX_BASIS}`;
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/font-family-transformer.ts
	var fontFamilyTransformer = createTransformer((value) => {
		if (typeof value !== "string" || !value.trim()) return null;
		const trimmed = value.trim();
		if (trimmed.startsWith("\"") && trimmed.endsWith("\"") || trimmed.startsWith("'") && trimmed.endsWith("'")) return trimmed;
		return `"${trimmed}"`;
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/grid-track-renderer.ts
	var GRID_TRACK_PROPERTIES = /* @__PURE__ */ new Set(["grid-template-columns", "grid-template-rows"]);
	var isGridTrackProperty = (cssProperty) => GRID_TRACK_PROPERTIES.has(cssProperty);
	var formatGridTrackRepeat = (count) => {
		if (!Number.isFinite(count) || count < 1) return null;
		return `repeat(${count}, 1fr)`;
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/grid-track-size-transformer.ts
	var gridTrackSizeTransformer = createTransformer((value) => {
		if (value.unit === "custom") return value.size;
		if (value.unit === "fr") return formatGridTrackRepeat(Math.trunc(Number(value.size)));
		return `${value.size}${value.unit}`;
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/perspective-origin-transformer.ts
	var FALLBACK = "0px";
	function getVal$1(val) {
		return `${val ?? FALLBACK}`;
	}
	__name(getVal$1, "getVal");
	var perspectiveOriginTransformer = createTransformer((value) => `${getVal$1(value?.x)} ${getVal$1(value?.y)}`);

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/position-transformer.ts
	var positionTransformer = createTransformer(({ x, y }) => `${x ?? "0px"} ${y ?? "0px"}`);

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/shadow-transformer.ts
	var shadowTransformer = createTransformer((value) => {
		return [
			value.hOffset,
			value.vOffset,
			value.blur,
			value.spread,
			value.color,
			value.position
		].filter(Boolean).join(" ");
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/size-transformer.ts
	var sizeTransformer = createTransformer((value) => {
		if (value.unit === "auto") return "auto";
		return value.unit === "custom" ? value.size : `${value.size}${value.unit}`;
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/span-transformer.ts
	var spanTransformer = createTransformer((value) => {
		return value?.trim() || null;
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/stroke-transformer.ts
	var strokeTransformer = createTransformer((value) => {
		return createMultiPropsValue({
			"-webkit-text-stroke": `${value.width} ${value.color}`,
			stroke: `${value.color}`,
			"stroke-width": `${value.width}`
		});
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/transform-functions-transformer.ts
	var transformFunctionsTransformer = createTransformer((values) => {
		if (values?.length < 1) return null;
		return values.join(" ");
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/transform-move-transformer.ts
	var defaultMove = "0px";
	var transformMoveTransformer = createTransformer((value) => {
		return `translate3d(${value.x ?? defaultMove}, ${value.y ?? defaultMove}, ${value.z ?? defaultMove})`;
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/transform-origin-transformer.ts
	var EMPTY_VALUE = "0px";
	var DEFAULT_XY = "50%";
	var DEFAULT_Z = EMPTY_VALUE;
	function getVal(val) {
		return `${val ?? EMPTY_VALUE}`;
	}
	var transformOriginTransformer = createTransformer((value) => {
		const x = getVal(value.x);
		const y = getVal(value.y);
		const z = getVal(value.z);
		if (x === DEFAULT_XY && y === DEFAULT_XY && z === DEFAULT_Z) return null;
		return `${x} ${y} ${z}`;
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/transform-rotate-transformer.ts
	var defaultRotate = "0deg";
	var transformRotateTransformer = createTransformer((value) => {
		return [
			`rotateX(${value?.x ?? defaultRotate})`,
			`rotateY(${value?.y ?? defaultRotate})`,
			`rotateZ(${value?.z ?? defaultRotate})`
		].join(" ");
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/transform-scale-transformer.ts
	var transformScaleTransformer = createTransformer((value) => {
		return `scale3d(${value.x ?? 1}, ${value.y ?? 1}, ${value.z ?? 1})`;
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/transform-skew-transformer.ts
	var defaultSkew = "0deg";
	var transformSkewTransformer = createTransformer((value) => {
		return `skew(${value?.x ?? defaultSkew}, ${value?.y ?? defaultSkew})`;
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/transformers/styles/transition-transformer.ts
	var getAllowedProperties = () => {
		const allowedProperties = /* @__PURE__ */ new Set();
		_elementor_editor_controls.transitionProperties.forEach((category) => {
			category.properties.forEach((property) => {
				allowedProperties.add(property.value);
			});
		});
		return allowedProperties;
	};
	var transitionTransformer = createTransformer((transitionValues) => {
		if (transitionValues?.length < 1) return null;
		const allowedProperties = getAllowedProperties();
		const validTransitions = transitionValues.map((value) => mapToTransitionString(value, allowedProperties)).filter(Boolean);
		if (validTransitions.length === 0) return null;
		return validTransitions.join(", ");
	});
	var mapToTransitionString = (value, allowedProperties) => {
		if (!value.selection || !value.size) return "";
		const property = value.selection.value;
		if (!allowedProperties.has(property)) return "";
		return `${property} ${value.size}`;
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/init-style-transformers.ts
	function initStyleTransformers() {
		styleTransformersRegistry.register("font-family", fontFamilyTransformer).register("size", sizeTransformer).register("grid-track-size", gridTrackSizeTransformer).register("shadow", shadowTransformer).register("stroke", strokeTransformer).register("dimensions", createMultiPropsTransformer([
			"block-start",
			"block-end",
			"inline-start",
			"inline-end"
		], ({ propKey, key }) => `${propKey}-${key}`)).register("filter", filterTransformer).register("backdrop-filter", filterTransformer).register("box-shadow", createCombineArrayTransformer(",")).register("background", backgroundTransformer).register("background-overlay", backgroundOverlayTransformer).register("background-color-overlay", backgroundColorOverlayTransformer).register("background-image-overlay", backgroundImageOverlayTransformer).register("background-gradient-overlay", backgroundGradientOverlayTransformer).register("gradient-color-stop", createCombineArrayTransformer(",")).register("color-stop", colorStopTransformer).register("background-image-position-offset", positionTransformer).register("background-image-size-scale", backgroundImageSizeScaleTransformer).register("image-src", imageSrcTransformer).register("image", imageTransformer).register("object-position", positionTransformer).register("span", spanTransformer).register("transform-origin", transformOriginTransformer).register("perspective-origin", perspectiveOriginTransformer).register("transform-move", transformMoveTransformer).register("transform-scale", transformScaleTransformer).register("transform-rotate", transformRotateTransformer).register("transform-skew", transformSkewTransformer).register("transform-functions", transformFunctionsTransformer).register("transform", createMultiPropsTransformer([
			"transform-functions",
			"transform-origin",
			"perspective",
			"perspective-origin"
		], ({ key }) => key === "transform-functions" ? "transform" : key)).register("transition", transitionTransformer).register("layout-direction", createMultiPropsTransformer(["row", "column"], ({ propKey, key }) => `${key}-${propKey}`)).register("flex", flexTransformer).register("border-width-v2", createMultiPropsTransformer([
			"block-start",
			"block-end",
			"inline-start",
			"inline-end"
		], ({ key }) => `border-${key}-width`)).register("border-radius-v2", createMultiPropsTransformer([
			"start-start",
			"start-end",
			"end-start",
			"end-end"
		], ({ key }) => `border-${key}-radius`)).registerFallback(plainTransformer);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/renderers/create-dom-renderer.ts
	function createDomRenderer() {
		const loader = (0, _elementor_twing.createArrayLoader)({});
		const environment = (0, _elementor_twing.createEnvironment)(loader);
		environment.registerEscapingStrategy(escapeHtmlTag, "html_tag");
		environment.registerEscapingStrategy(escapeURL, "full_url");
		return {
			register: loader.setTemplate,
			render: environment.render
		};
	}
	function getAllowedHtmlWrapperTags() {
		return window.elementorCommon?.config?.allowedHTMLWrapperTags ?? [];
	}
	function escapeHtmlTag(value) {
		const allowedTags = getAllowedHtmlWrapperTags();
		const normalizedTag = value?.toLowerCase?.() ?? "";
		return allowedTags.includes(normalizedTag) ? value : "div";
	}
	function escapeURL(value) {
		const allowedProtocols = [
			"http:",
			"https:",
			"mailto:",
			"tel:"
		];
		try {
			const parsed = new URL(value);
			return allowedProtocols.includes(parsed.protocol) ? value : "";
		} catch {
			return "";
		}
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/legacy/create-element-type.ts
	var __typeError$1 = /* @__PURE__ */ __name((msg) => {
		throw TypeError(msg);
	}, "__typeError");
	var __accessCheck$1 = /* @__PURE__ */ __name((obj, member, msg) => member.has(obj) || __typeError$1("Cannot " + msg), "__accessCheck");
	var __privateAdd$1 = /* @__PURE__ */ __name((obj, member, value) => member.has(obj) ? __typeError$1("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value), "__privateAdd");
	var __privateMethod$1 = /* @__PURE__ */ __name((obj, member, method) => (__accessCheck$1(obj, member, "access private method"), method), "__privateMethod");
	function createElementType(type) {
		const legacyWindow = window;
		return class extends legacyWindow.elementor.modules.elements.types.Widget {
			getType() {
				return type;
			}
			getView() {
				return createElementViewClassDeclaration();
			}
		};
	}
	function createElementViewClassDeclaration() {
		var _instances;
		var dispatchEvent_fn;
		var dispatchPreviewEvent_fn;
		var _a;
		const legacyWindow = window;
		return _a = class extends legacyWindow.elementor.modules.elements.views.Widget {
			constructor() {
				super(...arguments);
				__privateAdd$1(this, _instances);
			}
			onRender(...args) {
				super.onRender(...args);
				__privateMethod$1(this, _instances, dispatchEvent_fn).call(this, "elementor/preview/atomic-widget/render");
				__privateMethod$1(this, _instances, dispatchPreviewEvent_fn).call(this, "elementor/element/render");
			}
			onDestroy(...args) {
				super.onDestroy(...args);
				__privateMethod$1(this, _instances, dispatchEvent_fn).call(this, "elementor/preview/atomic-widget/destroy");
				__privateMethod$1(this, _instances, dispatchPreviewEvent_fn).call(this, "elementor/element/destroy");
			}
			attributes() {
				return {
					...super.attributes(),
					"data-atomic": "",
					style: "display: contents !important;"
				};
			}
			behaviors() {
				const disabledBehaviors = [
					"InlineEditing",
					"Draggable",
					"Resizable"
				];
				const behaviorsAsEntries = Object.entries(super.behaviors()).filter(([key]) => !disabledBehaviors.includes(key));
				return Object.fromEntries(behaviorsAsEntries);
			}
			getDomElement() {
				return this.$el.find(":first-child");
			}
			getHandlesOverlay() {
				return null;
			}
			getContextMenuGroups() {
				return super.getContextMenuGroups().filter((group) => group.name !== "save");
			}
		}, _instances = /* @__PURE__ */ new WeakSet(), dispatchEvent_fn = function(eventType) {
			window.top?.dispatchEvent(new CustomEvent(eventType, { detail: { id: this.model.get("id") } }));
		}, dispatchPreviewEvent_fn = function(eventType) {
			const element = this.getDomElement().get(0);
			if (!element) return;
			legacyWindow.elementor?.$preview?.[0]?.contentWindow.dispatchEvent(new CustomEvent(eventType, { detail: {
				id: this.model.get("id"),
				type: this.model.get("widgetType"),
				element
			} }));
		}, _a;
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/renderers/compute-html-tag.ts
	var DEFAULT_LINK_TAG = "a";
	function computeHtmlTag(settings, defaultTag, options = {}) {
		if ((options.followLink ?? true) && settingsHaveActiveLink(settings)) {
			const link = settings.link;
			return extractLinkHtmlTag(isRecord(link) ? link : {});
		}
		const settingsTag = extractHtmlTagValue(settings.tag);
		if (null !== settingsTag && "" !== settingsTag) return settingsTag;
		return defaultTag;
	}
	function settingsHaveActiveLink(settings) {
		const link = settings.link;
		if (!isRecord(link)) return false;
		const href = extractHtmlTagValue(link.href);
		if (null !== href && "" !== href) return true;
		const attributes = link.attributes;
		return typeof attributes === "string" && "" !== attributes;
	}
	function extractLinkHtmlTag(link) {
		const tag = extractHtmlTagValue(link.tag);
		if (null !== tag && "" !== tag) return tag;
		return "a";
	}
	function extractHtmlTagValue(value) {
		if (isRecord(value) && typeof value.value === "string") return value.value;
		if (typeof value === "string") return value;
		return null;
	}
	function isRecord(value) {
		return typeof value === "object" && null !== value && !Array.isArray(value);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/legacy/create-pending-element.ts
	function createPendingElement(wrapperView, data, options = {}) {
		const parentContainer = wrapperView.getContainer();
		const model = { ...data };
		if (!model.id) model.id = (0, _elementor_editor_elements.generateElementId)();
		if (!model.elements) model.elements = [];
		if (!(0, _elementor_editor_elements.addModelToParent)(parentContainer.id, model, options)) return;
		const childId = model.id;
		const childModel = (0, _elementor_editor_elements.findModelInDocument)(childId);
		if (!childModel) return;
		const pendingContainer = {
			id: childId,
			settings: {
				get: () => ({}),
				set: () => ({}),
				toJSON: () => ({})
			},
			parent: parentContainer,
			model: childModel,
			view: void 0,
			lookup() {
				return (0, _elementor_editor_elements.getContainer)(childId) ?? pendingContainer;
			}
		};
		wrapperView.once("render", () => {
			wrapperView.model?.trigger?.("navigator:add", childModel, options);
		});
		if (options.edit !== false) selectChildWhenWrapperRenders(wrapperView, childId);
		return { getContainer: () => pendingContainer };
	}
	function selectChildWhenWrapperRenders(wrapperView, childId) {
		wrapperView.once("render", () => {
			const childContainer = (0, _elementor_editor_elements.getContainer)(childId);
			if (childContainer?.model?.trigger) {
				childContainer.model.trigger("request:edit");
				return;
			}
			wrapperView.model?.trigger?.("request:edit");
		});
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/legacy/twig-rendering-utils.ts
	function setupTwigRenderer({ renderer, element }) {
		const templateKey = element.twig_main_template;
		const baseStylesDictionary = element.base_styles_dictionary;
		Object.entries(element.twig_templates).forEach(([key, template]) => {
			renderer.register(key, template);
		});
		return {
			templateKey,
			baseStylesDictionary,
			resolveProps: createPropsResolver({
				transformers: settingsTransformersRegistry,
				schema: element.atomic_props_schema
			}),
			defaultHtmlTag: element.default_html_tag ?? "div",
			htmlTagFollowsLink: element.html_tag_follows_link ?? true
		};
	}
	function createBeforeRender(view) {
		view._ensureViewIsIntact();
		view._isRendering = true;
		view.resetChildViewContainer();
		view.triggerMethod("before:render", view);
	}
	function createAfterRender(view) {
		view._isRendering = false;
		view.isRendered = true;
		view.triggerMethod("render", view);
	}
	function rerenderExistingChildren(view) {
		view.children?.each((childView) => {
			childView.render();
		});
	}
	async function waitForChildrenToComplete(view) {
		const promises = [];
		view.children?.each((childView) => {
			if (childView._currentRenderPromise) promises.push(childView._currentRenderPromise);
		});
		if (promises.length > 0) await Promise.all(promises);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/legacy/create-templated-element-type.ts
	var __defProp$3 = Object.defineProperty;
	var __defNormalProp$3 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$3(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __publicField$3 = /* @__PURE__ */ __name((obj, key, value) => __defNormalProp$3(obj, typeof key !== "symbol" ? key + "" : key, value), "__publicField");
	function canBeTemplated(element) {
		return !!(element.atomic_props_schema && element.twig_templates && element.twig_main_template && element.base_styles_dictionary);
	}
	function createTemplatedElementView({ type, renderer, element }) {
		const BaseView = createElementViewClassDeclaration();
		const { templateKey, baseStylesDictionary, resolveProps, defaultHtmlTag, htmlTagFollowsLink } = setupTwigRenderer({
			type,
			renderer,
			element
		});
		return class extends BaseView {
			constructor() {
				super(...arguments);
				__publicField$3(this, "_abortController", null);
				__publicField$3(this, "_lastResolvedSettingsHash", null);
				__publicField$3(this, "_domUpdateWasSkipped", false);
			}
			getTemplateType() {
				return "twig";
			}
			getNamespaceKey() {
				return type;
			}
			renderOnChange() {
				this.render();
			}
			getRenderContext() {
				return this._parent?.getRenderContext?.();
			}
			getResolverRenderContext() {
				return this._parent?.getResolverRenderContext?.();
			}
			invalidateRenderCache() {
				this._lastResolvedSettingsHash = null;
			}
			render() {
				this._abortController?.abort();
				this._abortController = new AbortController();
				const process = signalizedProcess(this._abortController.signal).then(() => this._beforeRender()).then(() => this._renderTemplate()).then(() => this._renderChildren()).then(() => this._afterRender());
				this._currentRenderPromise = process.execute();
				return this._currentRenderPromise;
			}
			async _renderChildren() {
				if (this._shouldReuseChildren()) rerenderExistingChildren(this);
				else super._renderChildren();
				await waitForChildrenToComplete(this);
			}
			_shouldReuseChildren() {
				return this._domUpdateWasSkipped && this.children?.length > 0;
			}
			async _renderTemplate() {
				this.triggerMethod("before:render:template");
				await signalizedProcess(this._abortController?.signal).then((_, signal) => {
					const settings = this.model.get("settings").toJSON();
					return resolveProps({
						props: settings,
						signal,
						renderContext: this.getResolverRenderContext()
					});
				}).then((settings) => {
					return this.afterSettingsResolve(settings);
				}).then(async (settings) => {
					const settingsHash = JSON.stringify(settings);
					if (!(settingsHash !== this._lastResolvedSettingsHash) && this.isRendered) {
						this._domUpdateWasSkipped = true;
						return null;
					}
					this._domUpdateWasSkipped = false;
					this._lastResolvedSettingsHash = settingsHash;
					const context = {
						id: this.model.get("id"),
						interaction_id: this.getInteractionId(),
						type,
						settings,
						tag: computeHtmlTag(settings, defaultHtmlTag, { followLink: htmlTagFollowsLink }),
						base_styles: baseStylesDictionary,
						...this.getResolverRenderContext?.() ?? {}
					};
					return renderer.render(templateKey, context);
				}).then((html) => {
					if (html === null) return;
					this.$el.html(html);
				}).execute();
				this.bindUIElements();
				this.triggerMethod("render:template");
			}
			afterSettingsResolve(settings) {
				return settings;
			}
			_beforeRender() {
				createBeforeRender(this);
			}
			_afterRender() {
				createAfterRender(this);
			}
			_doAfterRender(callback) {
				if (this.isRendered) callback();
				else this.once("render", callback);
			}
			_openEditingPanel(options) {
				this._doAfterRender(() => super._openEditingPanel(options));
			}
			getInteractionId() {
				const originId = this.model.get("originId");
				const id = this.model.get("id");
				return originId ?? id;
			}
		};
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/legacy/create-nested-templated-element-type.ts
	function canBeNestedTemplated(element) {
		return canBeTemplated(element) && "support_nesting" in element && !!element.support_nesting;
	}
	function createNestedTemplatedElementType({ type, renderer, element, modelExtensions }) {
		const legacyWindow = window;
		return class extends legacyWindow.elementor.modules.elements.types.Base {
			getType() {
				return type;
			}
			getView() {
				return createNestedTemplatedElementView({
					type,
					renderer,
					element
				});
			}
			getModel() {
				const BaseModel = legacyWindow.elementor.modules.elements.models.AtomicElementBase;
				if (modelExtensions && Object.keys(modelExtensions).length > 0) return BaseModel.extend(modelExtensions);
				return BaseModel;
			}
		};
	}
	function buildEditorAttributes(model) {
		const id = model.get("id");
		const originId = model.get("originId");
		const attrs = {
			"data-model-cid": model.cid ?? "",
			"data-interaction-id": originId ?? id,
			"x-ignore": "true"
		};
		return Object.entries(attrs).map(([key, value]) => `${key}="${value}"`).join(" ");
	}
	function buildEditorClasses(model) {
		return [
			"elementor-element",
			"elementor-element-edit-mode",
			`elementor-element-${model.get("id")}`
		].join(" ");
	}
	function createNestedTemplatedElementView({ type, renderer, element }) {
		const legacyWindow = window;
		const { templateKey, baseStylesDictionary, resolveProps, defaultHtmlTag, htmlTagFollowsLink } = setupTwigRenderer({
			type,
			renderer,
			element
		});
		const AtomicElementBaseView = legacyWindow.elementor.modules.elements.views.createAtomicElementBase(type);
		const parentRenderChildren = AtomicElementBaseView.prototype._renderChildren;
		const parentOpenEditingPanel = AtomicElementBaseView.prototype._openEditingPanel;
		const parentAddElement = AtomicElementBaseView.prototype.addElement;
		return AtomicElementBaseView.extend({
			_abortController: null,
			_lastResolvedSettingsHash: null,
			_domUpdateWasSkipped: false,
			template: false,
			attributes() {
				return { "data-model-cid": this.model.cid };
			},
			getTemplateType() {
				return "twig";
			},
			invalidateRenderCache() {
				this._lastResolvedSettingsHash = null;
			},
			renderOnChange() {
				this.render();
			},
			render() {
				this._abortController?.abort();
				this._abortController = new AbortController();
				const process = signalizedProcess(this._abortController.signal).then(() => this._beforeRender()).then(() => this._renderTemplate()).then(() => this._onTemplateReady()).then(() => this._renderChildren()).then(() => this._afterRender());
				this._currentRenderPromise = process.execute();
				return this._currentRenderPromise;
			},
			_beforeRender() {
				createBeforeRender(this);
			},
			_onTemplateReady() {
				this.dispatchPreviewEvent("elementor/element/render");
			},
			_afterRender() {
				createAfterRender(this);
				this.dispatchPreviewEvent("elementor/element/rendered");
				requestAnimationFrame(() => {
					this._initAlpine();
				});
				this.model.trigger("render:complete");
				window.dispatchEvent(new CustomEvent(_elementor_editor_elements.ELEMENT_STYLE_CHANGE_EVENT));
			},
			async _renderTemplate() {
				const model = this.model;
				this.triggerMethod("before:render:template");
				await signalizedProcess(this._abortController?.signal).then((_, signal) => {
					const settings = model.get("settings").toJSON();
					return resolveProps({
						props: settings,
						signal,
						renderContext: this.getResolverRenderContext?.()
					});
				}).then(async (settings) => {
					const resolvedSettings = this.afterSettingsResolve(settings);
					const settingsHash = JSON.stringify(resolvedSettings);
					if (!(settingsHash !== this._lastResolvedSettingsHash) && this.isRendered) {
						this._domUpdateWasSkipped = true;
						return null;
					}
					this._domUpdateWasSkipped = false;
					this._lastResolvedSettingsHash = settingsHash;
					const context = {
						id: model.get("id"),
						interaction_id: this.getInteractionId(),
						type,
						settings: resolvedSettings,
						tag: computeHtmlTag(resolvedSettings, defaultHtmlTag, { followLink: htmlTagFollowsLink }),
						base_styles: baseStylesDictionary,
						editor_attributes: buildEditorAttributes(model),
						editor_classes: buildEditorClasses(model),
						...this.getResolverRenderContext?.() ?? {}
					};
					return renderer.render(templateKey, context);
				}).then((html) => {
					if (html === null) return;
					this._attachTwigContent(html);
				}).execute();
				this.bindUIElements();
				this.triggerMethod("render:template");
			},
			afterSettingsResolve(settings) {
				return settings;
			},
			getRenderContext() {
				return this._parent?.getRenderContext?.();
			},
			getResolverRenderContext() {
				return this._parent?.getResolverRenderContext?.();
			},
			getChildType() {
				const allowedTypes = element.allowed_child_types ?? [];
				if (allowedTypes && allowedTypes.length > 0) return allowedTypes;
				return AtomicElementBaseView.prototype.getChildType.call(this);
			},
			_attachTwigContent(html) {
				const $newContent = legacyWindow.jQuery(html);
				const oldEl = this.$el.get(0);
				const newEl = $newContent.get(0);
				if (!oldEl || !newEl) return;
				this._destroyAlpine();
				const overlayHTML = this.getHandlesOverlay()?.get(0)?.outerHTML ?? "";
				const needsTagSwap = oldEl.tagName !== newEl.tagName;
				const targetEl = needsTagSwap ? (oldEl.ownerDocument ?? document).createElement(newEl.tagName) : oldEl;
				Array.from(newEl.attributes).forEach((attr) => {
					targetEl.setAttribute(attr.name, attr.value);
				});
				targetEl.innerHTML = overlayHTML + newEl.innerHTML;
				if (needsTagSwap) {
					oldEl.replaceWith(targetEl);
					this.setElement(legacyWindow.jQuery(targetEl));
				}
			},
			async _renderChildren() {
				if (this._shouldReuseChildren()) rerenderExistingChildren(this);
				else parentRenderChildren.call(this);
				await waitForChildrenToComplete(this);
				this._removeChildrenPlaceholder();
			},
			_shouldReuseChildren() {
				return this._domUpdateWasSkipped && this.children?.length > 0;
			},
			_removeChildrenPlaceholder() {
				const el = this.$el.get(0);
				if (!el) return;
				Array.from(el.childNodes).find((node) => node.nodeType === Node.COMMENT_NODE && node.nodeValue?.trim() === "elementor-children-placeholder")?.remove();
			},
			getChildViewContainer() {
				this.childViewContainer = "";
				return this.$el;
			},
			attachBuffer(_collectionView, buffer) {
				const el = this.$el.get(0);
				if (!el) return;
				const placeholderComment = Array.from(el.childNodes).find((node) => node.nodeType === Node.COMMENT_NODE && node.nodeValue?.trim() === "elementor-children-placeholder");
				if (placeholderComment) {
					placeholderComment.parentNode?.insertBefore(buffer, placeholderComment);
					placeholderComment.remove();
				} else el.append(buffer);
			},
			getDomElement() {
				return this.$el;
			},
			onBeforeDestroy() {
				this._abortController?.abort();
			},
			onDestroy() {
				this.dispatchPreviewEvent("elementor/element/destroy");
			},
			_destroyAlpine() {
				const el = this.$el.get(0);
				if (!el) return;
				if (!el.getAttribute("x-data")) return;
				(el.ownerDocument?.defaultView)?.Alpine?.destroyTree(el);
			},
			_initAlpine() {
				const el = this.$el.get(0);
				if (!el) return;
				el.removeAttribute("x-ignore");
				if (!el.getAttribute("x-data")) return;
				(el.ownerDocument?.defaultView)?.Alpine?.initTree(el);
			},
			_doAfterRender(callback) {
				if (this.isRendered) callback();
				else this.once("render", callback);
			},
			_openEditingPanel(options) {
				this._doAfterRender(() => parentOpenEditingPanel.call(this, options));
			},
			addElement(data, options) {
				if (this.isRendered) return parentAddElement.call(this, data, options);
				return createPendingElement(this, data, options);
			},
			getInteractionId() {
				const originId = this.model.get("originId");
				const id = this.model.get("id");
				return originId ?? id;
			}
		});
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/legacy/create-pro-promotion-nested-type.ts
	function createProPromotionNestedType({ type, renderer, element }) {
		if (!canBeNestedTemplated(element)) throw new Error(`Element "${type}" is not a valid nested templated element.`);
		const BaseType = createNestedTemplatedElementType({
			type,
			renderer,
			element
		});
		let PromotionView = null;
		return class extends BaseType {
			getView() {
				if (!PromotionView) PromotionView = createPromotionView(new BaseType().getView());
				return PromotionView;
			}
		};
	}
	function createPromotionView(BaseView) {
		return class extends BaseView {
			_afterRender() {
				super._afterRender();
				const removeBtnSelector = ".e-pro-promotion-placeholder__remove-btn";
				const unlockBtnSelector = ".e-pro-promotion-placeholder__unlock-btn";
				this.$el.off("click", removeBtnSelector);
				this.$el.on("click", removeBtnSelector, (e) => {
					e.preventDefault();
					e.stopPropagation();
					window.$e.run("document/elements/delete", { container: this.container });
				});
				this.$el.off("click", unlockBtnSelector);
				this.$el.on("click", unlockBtnSelector, (e) => {
					e.stopPropagation();
				});
			}
			async _renderChildren() {}
			behaviors() {
				const disabledBehaviors = [
					"InlineEditing",
					"Draggable",
					"Resizable"
				];
				const behaviorsAsEntries = Object.entries(super.behaviors()).filter(([key]) => !disabledBehaviors.includes(key));
				return Object.fromEntries(behaviorsAsEntries);
			}
			getContextMenuGroups() {
				return super.getContextMenuGroups().filter((group) => group.name !== "save");
			}
			onDestroy(...args) {
				super.onDestroy(...args);
				this.$el.off("click", ".e-pro-promotion-placeholder__remove-btn");
				this.$el.off("click", ".e-pro-promotion-placeholder__unlock-btn");
			}
		};
	}

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
//#region packages/packages/core/editor-canvas/src/legacy/replacements/base.ts
var import_client = require_client();
	var __defProp$2 = Object.defineProperty;
	var __defNormalProp$2 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$2(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __publicField$2 = /* @__PURE__ */ __name((obj, key, value) => __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value), "__publicField");
	var TRIGGER_TIMING = {
		before: "before",
		after: "after",
		never: "never"
	};
	var ReplacementBase = class {
		constructor(settings) {
			__publicField$2(this, "getSetting");
			__publicField$2(this, "setSetting");
			__publicField$2(this, "element");
			__publicField$2(this, "type");
			__publicField$2(this, "id");
			__publicField$2(this, "refreshView");
			__publicField$2(this, "reactRoot");
			__publicField$2(this, "reactContainer");
			this.getSetting = settings.getSetting;
			this.setSetting = settings.setSetting;
			this.element = settings.element;
			this.type = settings.type;
			this.id = settings.id;
			this.refreshView = settings.refreshView;
			this.reactRoot = settings.reactRoot;
			this.reactContainer = settings.reactContainer;
		}
		static getTypes() {
			return null;
		}
		shouldRenderReplacement() {
			return true;
		}
		originalMethodsToTrigger() {
			return {
				_beforeRender: TRIGGER_TIMING.before,
				_afterRender: TRIGGER_TIMING.after,
				renderOnChange: TRIGGER_TIMING.never,
				onDestroy: TRIGGER_TIMING.never,
				render: TRIGGER_TIMING.never
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/legacy/replacements/inline-editing/inline-editing-utils.ts
	var EDITOR_ELEMENTS_OUT_OF_IFRAME = [
		"#elementor-editor-wrapper-v2",
		"#elementor-navigator",
		"#elementor-panel"
	];
	var TOOLBAR_ANCHOR_ID_PREFIX = "inline-editing-toolbar-anchor";
	var TOOLBAR_ANCHOR_STATIC_STYLES = {
		backgroundColor: "transparent",
		border: "none",
		outline: "none",
		boxShadow: "none",
		padding: "0",
		margin: "0",
		borderRadius: "0",
		overflow: "hidden",
		opacity: "0",
		pointerEvents: "none",
		position: "absolute",
		display: "block"
	};
	var INLINE_EDITING_PROPERTY_PER_TYPE = {
		"e-button": "text",
		"e-form-label": "text",
		"e-heading": "title",
		"e-paragraph": "paragraph",
		"e-form-submit-button": "text"
	};
	var getInlineEditorElement = (elementWrapper, expectedTag) => {
		return !expectedTag ? null : elementWrapper.querySelector(expectedTag);
	};
	var useOnClickOutsideIframe = (handleUnmount) => {
		const asyncUnmountInlineEditor = (0, react.useCallback)(() => queueMicrotask(handleUnmount), [handleUnmount]);
		(0, react.useEffect)(() => {
			EDITOR_ELEMENTS_OUT_OF_IFRAME.forEach((selector) => document?.querySelector(selector)?.addEventListener("mousedown", asyncUnmountInlineEditor));
			return () => EDITOR_ELEMENTS_OUT_OF_IFRAME.forEach((selector) => document?.querySelector(selector)?.removeEventListener("mousedown", asyncUnmountInlineEditor));
		}, []);
	};
	var useRenderToolbar = (ownerDocument, id) => {
		const [anchor, setAnchor] = (0, react.useState)(null);
		(0, react.useEffect)(() => {
			if (!anchor) removeToolbarAnchor(ownerDocument, id);
		}, [
			anchor,
			ownerDocument,
			id
		]);
		const onSelectionEnd = (view) => {
			const hasSelection = !view.state.selection.empty;
			removeToolbarAnchor(ownerDocument, id);
			if (hasSelection) setAnchor(createAnchorBasedOnSelection(ownerDocument, id));
			else setAnchor(null);
		};
		return {
			onSelectionEnd,
			anchor,
			clearAnchor: (0, react.useCallback)(() => {
				setAnchor(null);
			}, [])
		};
	};
	var createAnchorBasedOnSelection = (ownerDocument, id) => {
		const selection = ownerDocument.defaultView?.getSelection();
		if (!selection) return null;
		const selectionRect = selection.getRangeAt(0).getBoundingClientRect();
		const bodyRect = ownerDocument.body.getBoundingClientRect();
		const toolbarAnchor = ownerDocument.createElement("span");
		styleToolbarAnchor(toolbarAnchor, selectionRect, bodyRect);
		toolbarAnchor.setAttribute("id", getToolbarAnchorId(id));
		ownerDocument.body.appendChild(toolbarAnchor);
		return toolbarAnchor;
	};
	var removeToolbarAnchor = (ownerDocument, id) => {
		const toolbarAnchor = getToolbarAnchor(ownerDocument, id);
		if (toolbarAnchor) ownerDocument.body.removeChild(toolbarAnchor);
	};
	var getToolbarAnchorId = (id) => `${TOOLBAR_ANCHOR_ID_PREFIX}-${id}`;
	var getToolbarAnchor = (ownerDocument, id) => ownerDocument.getElementById(getToolbarAnchorId(id));
	var styleToolbarAnchor = (anchor, selectionRect, bodyRect) => {
		const { width, height } = selectionRect;
		Object.assign(anchor.style, {
			...TOOLBAR_ANCHOR_STATIC_STYLES,
			top: `${selectionRect.top - bodyRect.top}px`,
			left: `${selectionRect.left - bodyRect.left}px`,
			width: `${width}px`,
			height: `${height}px`
		});
	};
	var horizontalShifterMiddleware = {
		name: "horizontalShifter",
		fn(state) {
			const { x: left, y: top, elements: { reference: anchor, floating } } = state;
			const newState = {
				...state,
				x: left,
				y: top
			};
			if (left < 0) {
				newState.x = 0;
				return newState;
			}
			const anchorRect = anchor.getBoundingClientRect();
			const right = left + floating.offsetWidth;
			const documentWidth = anchor.ownerDocument.body.offsetWidth;
			if (right > documentWidth && anchorRect.right < right) {
				newState.x = left - (right - documentWidth);
				return newState;
			}
			return newState;
		}
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/legacy/replacements/inline-editing/canvas-inline-editor.tsx
	var CanvasInlineEditor = ({ elementClasses, initialValue, expectedTag, rootElement, contentElement, id, setValue, requestDestroy }) => {
		const [active, setActive] = (0, react.useState)(true);
		const [editor, setEditor] = (0, react.useState)(null);
		const { onSelectionEnd, anchor: toolbarAnchor, clearAnchor } = useRenderToolbar(rootElement.ownerDocument, id);
		(0, react.useEffect)(() => {
			if (!active) {
				clearAnchor();
				requestDestroy();
			}
		}, [
			active,
			clearAnchor,
			requestDestroy
		]);
		const dismiss = (0, react.useCallback)(() => {
			setEditor(null);
			setActive(false);
		}, []);
		useOnClickOutsideIframe(dismiss);
		(0, react.useEffect)(() => {
			const ownerDocument = contentElement.ownerDocument;
			const handleClickAway = (event) => {
				if (contentElement.contains(event.target)) return;
				dismiss();
			};
			ownerDocument.addEventListener("mousedown", handleClickAway);
			return () => ownerDocument.removeEventListener("mousedown", handleClickAway);
		}, [contentElement, dismiss]);
		if (!active) return null;
		return /* @__PURE__ */ react.createElement(_elementor_ui.ThemeProvider, null, /* @__PURE__ */ react.createElement(InlineEditingOverlay, {
			expectedTag,
			rootElement,
			id
		}), /* @__PURE__ */ react.createElement(_elementor_editor_controls.InlineEditor, {
			onEditorCreate: setEditor,
			mountElement: contentElement,
			editorProps: { attributes: { style: "outline: none; display: inherit; justify-content: inherit; align-items: inherit; flex-direction: inherit; text-align: inherit;" } },
			elementClasses,
			value: initialValue,
			setValue,
			onBlur: dismiss,
			autofocus: true,
			onSelectionEnd
		}), toolbarAnchor && editor && /* @__PURE__ */ react.createElement(InlineEditingToolbar, {
			anchor: toolbarAnchor,
			editor,
			id
		}));
	};
	var InlineEditingOverlay = ({ expectedTag, rootElement, id }) => {
		const [overlayRefElement, setOverlayElement] = (0, react.useState)(getInlineEditorElement(rootElement, expectedTag));
		(0, react.useEffect)(() => {
			setOverlayElement(getInlineEditorElement(rootElement, expectedTag));
		}, [expectedTag, rootElement]);
		return overlayRefElement ? /* @__PURE__ */ react.createElement(OutlineOverlay, {
			element: overlayRefElement,
			id,
			isSelected: true
		}) : null;
	};
	var InlineEditingToolbar = ({ anchor, editor, id }) => {
		const { refs, floatingStyles } = useFloating({
			placement: "top",
			strategy: "fixed",
			transform: false,
			whileElementsMounted: autoUpdate,
			middleware: [horizontalShifterMiddleware, flip()]
		});
		(0, react.useLayoutEffect)(() => {
			refs.setReference(anchor);
			return () => refs.setReference(null);
		}, [anchor, refs]);
		return /* @__PURE__ */ react.createElement(FloatingPortal, { id: CANVAS_WRAPPER_ID }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			ref: refs.setFloating,
			role: "presentation",
			style: {
				...floatingStyles,
				pointerEvents: "none"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.InlineEditorToolbar, {
			editor,
			elementId: id
		})));
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/legacy/replacements/inline-editing/inline-editing-eligibility.ts
	var hasKey = (propType) => {
		return "key" in propType;
	};
	var TEXT_PROP_TYPE_KEYS = /* @__PURE__ */ new Set([
		_elementor_editor_props.escapedHtmlPropTypeUtil.key,
		_elementor_editor_props.htmlV3PropTypeUtil.key,
		_elementor_editor_props.stringPropTypeUtil.key
	]);
	var isCoreTextPropTypeKey = (key) => {
		return TEXT_PROP_TYPE_KEYS.has(key);
	};
	var isAllowedBySchema = (propTypeFromSchema) => {
		if (!propTypeFromSchema) return false;
		if (hasKey(propTypeFromSchema) && isCoreTextPropTypeKey(propTypeFromSchema.key)) return true;
		if (propTypeFromSchema.kind !== "union") return false;
		return [...TEXT_PROP_TYPE_KEYS].some((key) => propTypeFromSchema.prop_types[key]);
	};
	var isInlineEditingAllowed = ({ rawValue, propTypeFromSchema }) => {
		if (rawValue === null || rawValue === void 0) return isAllowedBySchema(propTypeFromSchema);
		return _elementor_editor_props.escapedHtmlPropTypeUtil.isValid(rawValue) || _elementor_editor_props.htmlV3PropTypeUtil.isValid(rawValue) || _elementor_editor_props.stringPropTypeUtil.isValid(rawValue);
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/legacy/replacements/inline-editing/inline-editing-elements.tsx
	var __defProp$1 = Object.defineProperty;
	var __defNormalProp$1 = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp$1(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value, "__defNormalProp");
	var __publicField$1 = /* @__PURE__ */ __name((obj, key, value) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value), "__publicField");
	var HISTORY_DEBOUNCE_WAIT = 800;
	var InlineEditingReplacement = class extends ReplacementBase {
		constructor() {
			super(...arguments);
			__publicField$1(this, "handlerAttached", false);
			__publicField$1(this, "editing", false);
			__publicField$1(this, "handleRenderInlineEditor", () => {
				if (this.isEditingModeActive() || !this.isInlineEditingEligible()) return;
				this.renderInlineEditor();
			});
		}
		getReplacementKey() {
			return "inline-editing";
		}
		static getTypes() {
			return Object.keys(INLINE_EDITING_PROPERTY_PER_TYPE);
		}
		isEditingModeActive() {
			return this.editing;
		}
		shouldRenderReplacement() {
			return this.isInlineEditingEligible() && (0, _elementor_editor_v1_adapters.getCurrentEditMode)() === "edit";
		}
		renderOnChange() {
			if (this.isEditingModeActive()) return;
			this.refreshView();
		}
		onDestroy() {
			this.resetInlineEditorRoot();
		}
		_beforeRender() {
			this.resetInlineEditorRoot();
		}
		_afterRender() {
			if (this.isInlineEditingEligible() && !this.handlerAttached) {
				this.element.addEventListener("click", this.handleRenderInlineEditor);
				this.handlerAttached = true;
			}
		}
		originalMethodsToTrigger() {
			const before = this.isEditingModeActive() ? TRIGGER_TIMING.never : TRIGGER_TIMING.before;
			const after = this.isEditingModeActive() ? TRIGGER_TIMING.never : TRIGGER_TIMING.after;
			return {
				_beforeRender: before,
				_afterRender: after,
				renderOnChange: after,
				onDestroy: TRIGGER_TIMING.after,
				render: before
			};
		}
		resetInlineEditorRoot() {
			this.element.removeEventListener("click", this.handleRenderInlineEditor);
			this.handlerAttached = false;
			this.reactRoot.render(null);
			this.editing = false;
		}
		unmountInlineEditor() {
			this.resetInlineEditorRoot();
			this.refreshView();
		}
		isInlineEditingEligible() {
			const settingKey = this.getInlineEditablePropertyName();
			return isInlineEditingAllowed({
				rawValue: this.getSetting(settingKey),
				propTypeFromSchema: this.getInlineEditablePropType()
			});
		}
		getInlineEditablePropertyName() {
			return INLINE_EDITING_PROPERTY_PER_TYPE[this.type] ?? "";
		}
		getInlineEditablePropType() {
			const propSchema = (0, _elementor_editor_elements.getElementType)(this.type)?.propsSchema;
			const propertyName = this.getInlineEditablePropertyName();
			return propSchema?.[propertyName] ?? null;
		}
		getInlineEditablePropValue() {
			const prop = this.getInlineEditablePropType();
			const settingKey = this.getInlineEditablePropertyName();
			return this.getSetting(settingKey) ?? prop?.default ?? null;
		}
		getExtractedContentValue() {
			const propValue = this.getInlineEditablePropValue();
			if (_elementor_editor_props.escapedHtmlPropTypeUtil.isValid(propValue)) return _elementor_editor_props.escapedHtmlPropTypeUtil.extract(propValue) ?? "";
			const extracted = _elementor_editor_props.htmlV3PropTypeUtil.extract(propValue);
			return _elementor_editor_props.stringPropTypeUtil.extract(extracted?.content ?? null) ?? "";
		}
		createContentPropValue(value) {
			const content = value || "";
			if (this.getInlineEditablePropTypeKey() === _elementor_editor_props.htmlV3PropTypeUtil.key) return _elementor_editor_props.htmlV3PropTypeUtil.create({
				content: _elementor_editor_props.stringPropTypeUtil.create(content),
				children: []
			});
			return _elementor_editor_props.escapedHtmlPropTypeUtil.create(content);
		}
		setContentValue(value) {
			const settingKey = this.getInlineEditablePropertyName();
			const valueToSave = this.createContentPropValue(value);
			(0, _elementor_editor_v1_adapters.undoable)({
				do: () => {
					const prevValue = this.getInlineEditablePropValue();
					this.runCommand(settingKey, valueToSave);
					return prevValue;
				},
				undo: (_, prevValue) => {
					this.runCommand(settingKey, prevValue ?? null);
				}
			}, {
				title: (0, _elementor_editor_elements.getElementLabel)(this.id),
				subtitle: (0, _wordpress_i18n.__)("%s edited", "elementor").replace("%s", this.getInlineEditablePropTypeKey() ?? "Inline editing"),
				debounce: { wait: HISTORY_DEBOUNCE_WAIT }
			})();
		}
		getInlineEditablePropTypeKey() {
			const propType = this.getInlineEditablePropType();
			if (!propType) return null;
			if (propType.kind === "union") {
				const textKeys = [
					_elementor_editor_props.escapedHtmlPropTypeUtil.key,
					_elementor_editor_props.htmlV3PropTypeUtil.key,
					_elementor_editor_props.stringPropTypeUtil.key
				];
				for (const key of textKeys) if (propType.prop_types[key]) return key;
				return null;
			}
			if ("key" in propType && typeof propType.key === "string") return propType.key;
			return null;
		}
		runCommand(key, value) {
			(0, _elementor_editor_v1_adapters.__privateRunCommandSync)("document/elements/set-settings", {
				container: (0, _elementor_editor_elements.getContainer)(this.id),
				settings: { [key]: value }
			}, { internal: true });
			(0, _elementor_editor_v1_adapters.__privateRunCommandSync)("document/save/set-is-modified", { status: true }, { internal: true });
		}
		getExpectedTag() {
			const tagPropType = this.getTagPropType();
			return _elementor_editor_props.stringPropTypeUtil.extract(this.getSetting("tag") ?? null) ?? _elementor_editor_props.stringPropTypeUtil.extract(tagPropType?.default ?? null) ?? null;
		}
		getTagPropType() {
			const propsSchema = (0, _elementor_editor_elements.getElementType)(this.type)?.propsSchema;
			if (!propsSchema?.tag) return null;
			const tagPropType = propsSchema.tag ?? null;
			if (tagPropType.kind === "union") return tagPropType.prop_types.string ?? null;
			return tagPropType;
		}
		renderInlineEditor() {
			if (this.isEditingModeActive()) this.resetInlineEditorRoot();
			const contentElement = this.element.children?.[0];
			if (!contentElement) return;
			const elementClasses = contentElement.classList.toString();
			const propValue = this.getExtractedContentValue();
			const expectedTag = this.getExpectedTag();
			contentElement.innerHTML = "";
			this.editing = true;
			this.reactRoot.render(/* @__PURE__ */ react.createElement(CanvasInlineEditor, {
				elementClasses,
				initialValue: propValue,
				expectedTag,
				rootElement: this.element,
				contentElement,
				id: this.id,
				setValue: this.setContentValue.bind(this),
				requestDestroy: this.unmountInlineEditor.bind(this)
			}));
		}
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/legacy/replacements/manager.ts
	var __typeError = (msg) => {
		throw TypeError(msg);
	};
	var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
	var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
	var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
	var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
	var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
	var replacements = /* @__PURE__ */ new Map();
	var initViewReplacements = () => {
		registerReplacement(InlineEditingReplacement);
	};
	var registerReplacement = (replacement) => {
		const types = replacement.getTypes();
		if (!types) return;
		types.forEach((type) => {
			replacements.set(type, replacement);
		});
	};
	var getReplacement = (type) => {
		return replacements.get(type) ?? null;
	};
	var createViewWithReplacements = (options) => {
		var _replacement;
		var _config;
		var _reactContainer;
		var _reactRoot;
		var _instances;
		var triggerAltMethod_fn;
		var _a;
		const TemplatedView = createTemplatedElementView(options);
		return _a = class extends TemplatedView {
			constructor(...args) {
				super(...args);
				__privateAdd(this, _instances);
				__privateAdd(this, _replacement, null);
				__privateAdd(this, _config);
				__privateAdd(this, _reactContainer);
				__privateAdd(this, _reactRoot);
				const settings = this.model.get("settings");
				__privateSet(this, _reactContainer, this.el.ownerDocument.createElement("div"));
				__privateGet(this, _reactContainer).style.display = "none";
				this.el.ownerDocument.body.appendChild(__privateGet(this, _reactContainer));
				__privateSet(this, _reactRoot, (0, import_client.createRoot)(__privateGet(this, _reactContainer)));
				__privateSet(this, _config, {
					getSetting: settings.get.bind(settings),
					setSetting: settings.set.bind(settings),
					element: this.el,
					type: this?.model?.get("widgetType") ?? this.container?.model?.get("elType") ?? null,
					id: this?.model?.get("id") ?? null,
					refreshView: this.refreshView.bind(this),
					reactRoot: __privateGet(this, _reactRoot),
					reactContainer: __privateGet(this, _reactContainer)
				});
			}
			refreshView() {
				this.invalidateRenderCache?.();
				this.render();
			}
			renderOnChange() {
				__privateMethod(this, _instances, triggerAltMethod_fn).call(this, "renderOnChange");
			}
			render() {
				const config = __privateGet(this, _config);
				const widgetType = config.type;
				const ReplacementClass = widgetType ? getReplacement(widgetType) : null;
				if (ReplacementClass && !__privateGet(this, _replacement)) __privateSet(this, _replacement, new ReplacementClass(config));
				__privateMethod(this, _instances, triggerAltMethod_fn).call(this, "render");
			}
			onDestroy() {
				__privateMethod(this, _instances, triggerAltMethod_fn).call(this, "onDestroy");
				__privateGet(this, _reactRoot).unmount();
				__privateGet(this, _reactContainer).remove();
			}
			_afterRender() {
				__privateMethod(this, _instances, triggerAltMethod_fn).call(this, "_afterRender");
			}
			_beforeRender() {
				__privateMethod(this, _instances, triggerAltMethod_fn).call(this, "_beforeRender");
			}
		}, _replacement = /* @__PURE__ */ new WeakMap(), _config = /* @__PURE__ */ new WeakMap(), _reactContainer = /* @__PURE__ */ new WeakMap(), _reactRoot = /* @__PURE__ */ new WeakMap(), _instances = /* @__PURE__ */ new WeakSet(), triggerAltMethod_fn = function(methodKey) {
			const baseMethod = TemplatedView.prototype[methodKey].bind(this);
			const shouldReplace = __privateGet(this, _replacement)?.shouldRenderReplacement();
			const altMethod = shouldReplace && __privateGet(this, _replacement)?.[methodKey]?.bind(__privateGet(this, _replacement));
			if (!altMethod || !shouldReplace) return baseMethod();
			const renderTiming = __privateGet(this, _replacement)?.originalMethodsToTrigger()[methodKey] ?? "never";
			if (renderTiming === "before") baseMethod();
			altMethod();
			if (renderTiming === "after") baseMethod();
		}, _a;
	};
	var createTemplatedElementTypeWithReplacements = ({ type, renderer, element }) => {
		const legacyWindow = window;
		const view = createViewWithReplacements({
			type,
			renderer,
			element
		});
		return class extends legacyWindow.elementor.modules.elements.types.Widget {
			getType() {
				return type;
			}
			getView() {
				return view;
			}
		};
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/legacy/init-legacy-views.ts
	var elementsLegacyTypes = {};
	var modelExtensionsRegistry = {};
	function registerModelExtensions(type, extensions) {
		modelExtensionsRegistry[type] = extensions;
	}
	function registerElementType(type, elementTypeGenerator) {
		elementsLegacyTypes[type] = elementTypeGenerator;
		if ((0, _elementor_editor_v1_adapters.__privateIsReady)()) registerElementInLegacyManager(type, createDomRenderer());
	}
	function initLegacyViews() {
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.v1ReadyEvent)(), () => {
			const widgetsCache = (0, _elementor_editor_elements.getWidgetsCache)() ?? {};
			const renderer = createDomRenderer();
			registerProPromotionTypes(widgetsCache);
			Object.keys(widgetsCache).forEach((type) => {
				registerElementInLegacyManager(type, renderer);
			});
		});
	}
	function registerElementInLegacyManager(type, renderer) {
		const element = ((0, _elementor_editor_elements.getWidgetsCache)() ?? {})[type];
		if (!element?.atomic) return;
		tryRegisterElement(window, type, element, resolveElementType(type, renderer, element));
	}
	function registerProPromotionTypes(widgetsCache) {
		Object.entries(widgetsCache).forEach(([type, element]) => {
			if (element.meta?.is_pro_promotion) registerElementType(type, (options) => createProPromotionNestedType(options));
		});
	}
	function resolveElementType(type, renderer, element) {
		if (canBeNestedTemplated(element)) {
			const customGenerator2 = elementsLegacyTypes[type];
			return customGenerator2 ? customGenerator2({
				type,
				renderer,
				element
			}) : createNestedTemplatedType(type, renderer, element);
		}
		if (!canBeTemplated(element)) return createElementType(type);
		const customGenerator = elementsLegacyTypes[type];
		return customGenerator ? customGenerator({
			type,
			renderer,
			element
		}) : createTemplatedElementTypeWithReplacements({
			type,
			renderer,
			element
		});
	}
	function tryRegisterElement(legacyWindow, type, element, ResolvedElementType) {
		if (!(canBeTemplated(element) || canBeNestedTemplated(element))) return;
		const elementsManager = legacyWindow.elementor.elementsManager;
		const isAlreadyRegistered = Boolean(elementsManager.getElementTypeClass(type));
		try {
			elementsManager.registerElementType(new ResolvedElementType());
		} catch {
			if (canBeNestedTemplated(element) && isAlreadyRegistered) elementsManager.elementTypes[type] = new ResolvedElementType();
		}
	}
	function createNestedTemplatedType(type, renderer, element) {
		return createNestedTemplatedElementType({
			type,
			renderer,
			element,
			modelExtensions: modelExtensionsRegistry[type]
		});
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/legacy/list-type.ts
	var LIST_TYPE = "e-list";
	function initListType() {
		registerElementType(LIST_TYPE, (options) => createListType(options));
	}
	function createListType(options) {
		const BaseType = createNestedTemplatedElementType(options);
		let ListView = null;
		return class extends BaseType {
			getView() {
				if (!ListView) ListView = createListView(options);
				return ListView;
			}
		};
	}
	function createListView(options) {
		return createNestedTemplatedElementView(options).extend({
			getRenderContext() {
				const parentContext = this._parent?.getRenderContext?.();
				const showMarkersProp = this.model.get("settings")?.get?.("show_markers");
				const showMarkers = showMarkersProp?.value ?? showMarkersProp ?? true;
				return {
					...parentContext,
					show_markers: showMarkers
				};
			},
			getResolverRenderContext() {
				const parentContext = this._parent?.getResolverRenderContext?.();
				const showMarkersProp = this.model.get("settings")?.get?.("show_markers");
				const showMarkers = showMarkersProp?.value ?? showMarkersProp ?? true;
				return {
					...parentContext,
					show_markers: showMarkers
				};
			}
		});
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/legacy/tabs-model-extensions.ts
	var tabModelExtensions = { modifyDefaultChildren(elements) {
		if (!Array.isArray(elements) || elements.length === 0) return elements;
		const [paragraph] = elements;
		const position = this.get("editor_settings")?.initial_position;
		if (!position || !paragraph || typeof paragraph !== "object") return elements;
		const paragraphElement = paragraph;
		return [{
			...paragraphElement,
			settings: {
				...paragraphElement.settings,
				paragraph: _elementor_editor_props.escapedHtmlPropTypeUtil.create(`Tab ${position}`)
			}
		}, ...elements.slice(1)];
	} };
	function initTabsModelExtensions() {
		registerModelExtensions("e-tab", tabModelExtensions);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/resources/available-widgets-resource.ts
	var MCP_PROXY_URL$3 = "elementor/v1/mcp-proxy";
	var AVAILABLE_WIDGETS_URI = "elementor://context/available-widgets";
	var AVAILABLE_WIDGETS_URI_V4 = "elementor://context/available-widgets/v4";
	var fetchWidgets = async () => {
		const { data } = await (0, _elementor_http_client.httpService)().post(MCP_PROXY_URL$3, {
			tool: "list-widget-schemas",
			input: { summary: true }
		});
		return data.data?.widgets ?? [];
	};
	var buildContents = async (uri) => {
		const widgets = await fetchWidgets();
		return { contents: [{
			uri,
			mimeType: "application/json",
			text: JSON.stringify(widgets, null, 2)
		}] };
	};
	var initAvailableWidgetsResource = (reg) => {
		const { resource } = reg;
		resource("available-widgets-v4", AVAILABLE_WIDGETS_URI_V4, { description: "All registered v4 version widgets" }, async () => buildContents(AVAILABLE_WIDGETS_URI_V4));
		resource("available-widgets", AVAILABLE_WIDGETS_URI, { description: "All registered v4 widget types with description." }, async () => buildContents(AVAILABLE_WIDGETS_URI));
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/resources/best-practices-resource.ts
	var MCP_PROXY_URL$2 = "elementor/v1/mcp-proxy";
	var BEST_PRACTICES_URI = "elementor://style/best-practices";
	var initBestPracticesResource = (reg) => {
		const { resource } = reg;
		resource("style-best-practices", BEST_PRACTICES_URI, {
			description: "Design quality guidelines for avoiding generic AI output: typography, color strategy, spacing, motion, and visual hierarchy best practices.",
			mimeType: "text/markdown"
		}, async (uri) => {
			const { data } = await (0, _elementor_http_client.httpService)().get(MCP_PROXY_URL$2, { params: { uri: uri.href } });
			return { contents: [{
				uri: uri.href,
				mimeType: "text/markdown",
				text: data.data
			}] };
		});
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/resources/document-structure-resource.ts
	var DOCUMENT_STRUCTURE_URI = "elementor://document/structure";
	var initDocumentStructureResource = (reg) => {
		const { resource, sendResourceUpdated } = reg;
		let currentDocumentStructure = null;
		const updateDocumentStructure = () => {
			const structure = getDocumentStructure();
			const newStructure = JSON.stringify(structure, null, 2);
			if (newStructure !== currentDocumentStructure) {
				currentDocumentStructure = newStructure;
				sendResourceUpdated({ uri: DOCUMENT_STRUCTURE_URI });
			}
		};
		(0, _elementor_editor_v1_adapters.__privateListenTo)([
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/create"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/delete"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/move"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/copy"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/paste"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/attach-preview"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/switch")
		], updateDocumentStructure);
		updateDocumentStructure();
		resource("document-structure", DOCUMENT_STRUCTURE_URI, { description: "Document structure." }, async () => {
			return { contents: [{
				uri: DOCUMENT_STRUCTURE_URI,
				text: JSON.stringify(getDocumentStructure(), null, 2)
			}] };
		});
	};
	function getDocumentStructure() {
		const document = window.elementor?.documents?.getCurrent?.();
		if (!document) return { error: "No active document found" };
		const elements = (document.container?.children || []).map((container) => extractElementData(container));
		return {
			documentId: document.id,
			documentType: document.config.type,
			title: document.config.settings?.post_title || "Untitled",
			elements: elements.filter((el) => el !== null)
		};
	}
	function resolveElementVersion$1(element) {
		if (element.model?.config?.atomic) return "v4";
		const widgetType = element.model?.attributes?.widgetType;
		if (widgetType && (0, _elementor_editor_elements.getWidgetsCache)()?.[widgetType]?.atomic_props_schema) return "v4";
		return "v3";
	}
	__name(resolveElementVersion$1, "resolveElementVersion");
	function extractElementData(element) {
		if (!element || !element.model) return null;
		const model = element.model.attributes;
		const result = {
			id: model.id,
			elType: model.elType,
			widgetType: model.widgetType || void 0,
			version: resolveElementVersion$1(element)
		};
		const title = model.title || element.model?.editor_settings?.title || element.model.getTitle?.();
		if (title) result.title = title;
		if (element.children && element.children.length > 0) result.children = element.children.map((child) => extractElementData(child)).filter((child) => child !== null);
		return result;
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/resources/dynamic-tags-resource.ts
	var DYNAMIC_TAGS_URI = "elementor://dynamic-tags";
	var MCP_PROXY_URL$1 = "elementor/v1/mcp-proxy";
	var fetchDynamicTags = async () => {
		const { data } = await (0, _elementor_http_client.httpService)().get(MCP_PROXY_URL$1, { params: { uri: DYNAMIC_TAGS_URI } });
		return data.data ?? "[]";
	};
	var initDynamicTagsResource = (reg) => {
		const { resource } = reg;
		resource("dynamic-tags", DYNAMIC_TAGS_URI, {
			description: `List of available dynamic tags. To bind a property to a dynamic source, set its value to { "$$type": "dynamic", "value": { "name": <tag name>, "settings": { ... } } } using a tag whose name appears in that property's allowed list, and populate "settings" per the tag entry here.`,
			mimeType: "application/json"
		}, async (uri) => {
			return { contents: [{
				uri: uri.href,
				mimeType: "application/json",
				text: await fetchDynamicTags()
			}] };
		});
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/resources/editor-state-resource.ts
	var CURRENTLY_VIEWED_SCREEN = "The user is currently viewing the Elementor editor";
	var PAGE_CONTENT_CHARACTER_LIMIT = 500;
	var PREVIEW_TEXT_NODE_MIN_LENGTH = 2;
	var EDITOR_STATE_URI = "elementor://context/editor-state";
	var initEditorStateResource = (reg) => {
		const { resource, sendResourceUpdated } = reg;
		let lastSerializedState = "";
		const buildState = () => ({
			currentlyViewedScreen: CURRENTLY_VIEWED_SCREEN,
			pageContent: getPageContentFromPreview(),
			pageTitle: getPageTitle()
		});
		const notifyIfChanged = () => {
			const serialized = JSON.stringify(buildState());
			if (serialized === lastSerializedState) return;
			lastSerializedState = serialized;
			sendResourceUpdated({ uri: EDITOR_STATE_URI });
		};
		(0, _elementor_editor_v1_adapters.__privateListenTo)([(0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/switch"), (0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/attach-preview")], notifyIfChanged);
		lastSerializedState = JSON.stringify(buildState());
		resource("editor-state", EDITOR_STATE_URI, { description: "Editor page title, preview text snapshot, and viewed screen label." }, async () => {
			return { contents: [{
				uri: EDITOR_STATE_URI,
				text: JSON.stringify(buildState(), null, 2)
			}] };
		});
	};
	function getPageContentFromPreview() {
		try {
			const root = window.elementor?.$previewContents?.[0];
			if (!root) return null;
			const content = [];
			const clone = root.cloneNode(true);
			clone.querySelectorAll(".elementor-editor-element-settings, #elementor-add-new-section").forEach((el) => {
				el.remove();
			});
			const walk = (node, insideElementorElement = false) => {
				const isInside = node.classList?.contains("elementor-element") || insideElementorElement;
				if (node.nodeType === Node.TEXT_NODE && isInside) {
					const text2 = node.textContent?.trim().replace(/\s+/g, " ");
					if (text2 && text2.length > PREVIEW_TEXT_NODE_MIN_LENGTH) content.push(text2);
				} else node.childNodes.forEach((child) => {
					walk(child, isInside);
				});
			};
			walk(clone);
			const text = content.join(" ");
			if (text.length > PAGE_CONTENT_CHARACTER_LIMIT) return text.slice(0, PAGE_CONTENT_CHARACTER_LIMIT) + "...";
			return text;
		} catch {
			return null;
		}
	}
	function getPageTitle() {
		try {
			const postTitle = (window.elementor?.documents?.getCurrent?.())?.config?.settings?.post_title;
			if (postTitle) return postTitle;
			let title = document.title || "Page";
			title = title.split(/\s*[‹»|–—-]\s*/)[0];
			return title.trim() || "Page";
		} catch {
			return "Page";
		}
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/resources/general-context-resource.ts
	var GENERAL_CONTEXT_URI = "elementor://context/general";
	var initGeneralContextResource = (reg) => {
		const { resource, sendResourceUpdated } = reg;
		let lastSerializedPayload = null;
		const getPageTitle = () => {
			const title = window.elementor?.documents?.getCurrent?.()?.config?.settings?.post_title;
			if (!title?.trim()) return null;
			return title;
		};
		const buildPayload = () => {
			const extendedWindow = window;
			const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
			const postParam = new URLSearchParams(location.search).get("post");
			const parsedPostId = postParam ? Number(postParam) : null;
			const postId = parsedPostId !== null && Number.isFinite(parsedPostId) ? parsedPostId : null;
			const pageTitle = getPageTitle();
			const urlObject = new URL(window.location.href);
			const pageUrl = urlObject.pathname + urlObject.search;
			const pageName = pageTitle || "Elementor Editor";
			const plugins = extendedWindow.angieConfig?.plugins;
			return {
				timezone,
				postId,
				currentPage: {
					pageName,
					pageTitle,
					pageUrl
				},
				...plugins && { plugins }
			};
		};
		const pushUpdateIfChanged = () => {
			const serialized = JSON.stringify(buildPayload());
			if (serialized === lastSerializedPayload) return;
			lastSerializedPayload = serialized;
			sendResourceUpdated({ uri: GENERAL_CONTEXT_URI });
		};
		resource("general-context", GENERAL_CONTEXT_URI, { description: "General context: timezone, post id, and current page." }, async () => {
			return { contents: [{
				uri: GENERAL_CONTEXT_URI,
				mimeType: "application/json",
				text: JSON.stringify(buildPayload(), null, 2)
			}] };
		});
		(0, _elementor_editor_v1_adapters.__privateListenTo)([
			(0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/switch"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/attach-preview"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/settings")
		], pushUpdateIfChanged);
		pushUpdateIfChanged();
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/resources/selected-element-resource.ts
	var SELECTED_ELEMENT_URI = "elementor://context/selected-element";
	var initSelectedElementResource = (reg) => {
		const { resource, sendResourceUpdated } = reg;
		let currentPayloadText = null;
		const publishIfChanged = (payload) => {
			const nextText = JSON.stringify(payload);
			if (nextText !== currentPayloadText) {
				currentPayloadText = nextText;
				sendResourceUpdated({ uri: SELECTED_ELEMENT_URI });
			}
		};
		const onCommand = (e) => {
			if (e.type !== "command") return;
			const commandEvent = e;
			if (commandEvent.command === "document/elements/deselect-all") {
				publishIfChanged(createEmptySelectedElementPayload());
				return;
			}
			if (commandEvent.command !== "document/elements/select" && commandEvent.command !== "document/elements/settings") return;
			const { container } = commandEvent.args || {};
			if (container?.id) {
				publishIfChanged(buildPayloadFromContainer(container));
				return;
			}
			publishIfChanged(readSelectionFromEditor());
		};
		(0, _elementor_editor_v1_adapters.__privateListenTo)([
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/select"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/deselect-all"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/settings")
		], onCommand);
		publishIfChanged(readSelectionFromEditor());
		resource("selected-element", SELECTED_ELEMENT_URI, { description: "Currently selected Elementor element context." }, async () => {
			return { contents: [{
				uri: SELECTED_ELEMENT_URI,
				text: JSON.stringify(readSelectionFromEditor(), null, 2)
			}] };
		});
	};
	function createEmptySelectedElementPayload() {
		return {
			elementDisplayName: null,
			elementType: null,
			properties: null,
			selectedElementId: null,
			selectedParentId: null,
			version: null,
			widgetType: null
		};
	}
	function readSelectionFromEditor() {
		const elements = (0, _elementor_editor_elements.getSelectedElements)();
		if (elements.length !== 1) return createEmptySelectedElementPayload();
		return buildPayloadFromContainer((0, _elementor_editor_elements.getContainer)(elements[0].id));
	}
	function buildPayloadFromContainer(container) {
		if (!container?.id) return createEmptySelectedElementPayload();
		const widgetType = container.model.get("widgetType") ?? null;
		const elementType = container.type ?? "widget";
		return {
			elementDisplayName: getElementDisplayName(container),
			elementType,
			properties: getElementProperties(container, widgetType),
			selectedElementId: container.id,
			selectedParentId: container.parent?.id ?? null,
			version: resolveElementVersion(container, widgetType),
			widgetType
		};
	}
	function resolveElementVersion(container, widgetType) {
		if (container.model?.config?.atomic) return "v4";
		if (widgetType && (0, _elementor_editor_elements.getWidgetsCache)()?.[widgetType]?.atomic_props_schema) return "v4";
		return "v3";
	}
	function getElementProperties(container, widgetType) {
		const settings = container.settings?.toJSON?.();
		if (!settings || typeof settings !== "object") return null;
		const controls = (widgetType ? (0, _elementor_editor_elements.getWidgetsCache)()?.[widgetType] : null)?.controls;
		const filtered = {};
		for (const [key, value] of Object.entries(settings)) {
			if (value === void 0 || value === null || value === "") continue;
			const controlDefault = controls?.[key]?.default;
			if (controlDefault !== void 0 && JSON.stringify(value) === JSON.stringify(controlDefault)) continue;
			filtered[key] = value;
		}
		return Object.keys(filtered).length > 0 ? filtered : null;
	}
	function getElementDisplayName(container) {
		try {
			if (container.label) return container.label;
			const widgetType = container.model?.get?.("widgetType");
			if (widgetType) return (widgetType.charAt(0).toUpperCase() + widgetType.slice(1)).replace(/-/g, " ");
			if (container.type === "container") return "Container";
			if (container.type === "section") return "Section";
			return `Element ${container.id}`;
		} catch {
			return `Element ${container.id}`;
		}
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/utils/merge-custom-css.ts
	var CUSTOM_CSS_SEPARATOR = "\n";
	var mergeCustomCssText = (...cssParts) => cssParts.map((cssPart) => cssPart?.trim()).filter((cssPart) => !!cssPart).join(CUSTOM_CSS_SEPARATOR);
	var readStoredCustomCssText = (raw) => {
		if (!raw) return "";
		try {
			return atob(raw);
		} catch {
			return "";
		}
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/utils/resolve-canonical-prop-name.ts
	function buildAliasToCanonicalMap(schema) {
		const aliasToCanonical = {};
		for (const [canonical, propType] of Object.entries(schema)) {
			const aliases = propType.meta?.aliases;
			if (!Array.isArray(aliases)) continue;
			for (const alias of aliases) if (typeof alias === "string" && alias) aliasToCanonical[alias] = canonical;
		}
		return aliasToCanonical;
	}
	function resolveCanonicalPropName(elementType, propertyName) {
		const schema = (0, _elementor_editor_elements.getWidgetsCache)()?.[elementType]?.atomic_props_schema;
		if (!schema || schema[propertyName]) return propertyName;
		return buildAliasToCanonicalMap(schema)[propertyName] ?? propertyName;
	}
	function resolveCanonicalPropKeys(elementType, props) {
		const schema = (0, _elementor_editor_elements.getWidgetsCache)()?.[elementType]?.atomic_props_schema;
		if (!schema) return { ...props };
		const aliasToCanonical = buildAliasToCanonicalMap(schema);
		const resolved = {};
		for (const [key, value] of Object.entries(props)) if (schema[key]) resolved[key] = value;
		for (const [key, value] of Object.entries(props)) {
			if (schema[key]) continue;
			const canonical = aliasToCanonical[key];
			if (!canonical) {
				resolved[key] = value;
				continue;
			}
			if (!Object.prototype.hasOwnProperty.call(resolved, canonical)) resolved[canonical] = value;
		}
		return resolved;
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/utils/resolve-dynamic-tag.ts
	var DYNAMIC_PROP_TYPE_KEY = "dynamic";
	var OMITTED_DYNAMIC_SETTING_KEYS = ["fallback"];
	var getAtomicDynamicTags = () => {
		return (0, _elementor_editor_v1_adapters.getElementorConfig)().atomicDynamicTags?.tags ?? {};
	};
	var getDynamicTagNamesByCategories = (categories) => {
		if (!categories.length) return [];
		const wanted = new Set(categories);
		return Object.values(getAtomicDynamicTags()).filter((tag) => tag.categories?.some((category) => wanted.has(category))).map((tag) => tag.name);
	};
	var dynamicTagLLMResolver = (value) => {
		const input = value ?? {};
		const tag = input.name ? getAtomicDynamicTags()[input.name] : void 0;
		if (!tag) return {
			$$type: DYNAMIC_PROP_TYPE_KEY,
			value: {
				name: input.name ?? "",
				group: "",
				settings: {}
			}
		};
		return {
			$$type: DYNAMIC_PROP_TYPE_KEY,
			value: {
				name: tag.name,
				group: tag.group,
				settings: buildStrictSettings(tag.props_schema ?? {}, input.settings ?? {})
			}
		};
	};
	var buildStrictSettings = (schema, provided) => {
		const settings = {};
		for (const [key, propType] of Object.entries(schema)) {
			if (OMITTED_DYNAMIC_SETTING_KEYS.includes(key)) continue;
			const resolved = provided[key] !== void 0 ? wrapSettingValue(provided[key], propType) : defaultSettingValue(propType);
			if (resolved !== void 0 && resolved !== null) settings[key] = resolved;
		}
		return settings;
	};
	var wrapSettingValue = (raw, propType) => {
		if (raw !== null && typeof raw === "object") return raw;
		return propType.key ? {
			$$type: propType.key,
			value: raw
		} : raw;
	};
	var defaultSettingValue = (propType) => {
		if (propType.initial_value !== null && propType.initial_value !== void 0) return propType.initial_value;
		if (propType.default !== null && propType.default !== void 0) return wrapSettingValue(propType.default, propType);
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/utils/do-update-element-property.ts
	var __defProp = Object.defineProperty;
	var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	var LOCAL_STYLE_META = {
		breakpoint: "desktop",
		state: null
	};
	var UnsupportedPropertyError = class extends Error {
		constructor(elementType, propertyName, availableProperties) {
			super(`Property "${propertyName}" does not exist on element type "${elementType}". Available properties are: ${availableProperties.join(", ")}`);
			__publicField(this, "elementType");
			__publicField(this, "propertyName");
			this.name = "UnsupportedPropertyError";
			this.elementType = elementType;
			this.propertyName = propertyName;
		}
	};
	function resolvePropValue(value, forceKey) {
		const Utils = window.elementorV2.editorVariables.Utils;
		return _elementor_editor_props.Schema.adjustLlmPropValueSchema(value, {
			forceKey,
			transformers: {
				...Utils.globalVariablesLLMResolvers,
				[DYNAMIC_PROP_TYPE_KEY]: dynamicTagLLMResolver
			}
		});
	}
	var doUpdateElementProperty = (params) => {
		const { elementId, propertyValue, elementType, customCssWriteMode = "replace" } = params;
		const propertyName = params.propertyName === "_styles" ? params.propertyName : resolveCanonicalPropName(elementType, params.propertyName);
		if (propertyName === "_styles") {
			const elementStyles = (0, _elementor_editor_elements.getElementStyles)(elementId) || {};
			const propertyMapValue = propertyValue;
			const styleSchema = (0, _elementor_editor_styles.getStylesSchema)();
			const transformedStyleValues = Object.fromEntries(Object.entries(propertyMapValue).map(([key, val]) => {
				if (key === "custom_css") return [key, val];
				const { key: propKey2, kind } = styleSchema?.[key] || {};
				if (!propKey2 && kind !== "union") throw new Error(`_styles property ${key} is not supported.`);
				if (val === null) return [key, null];
				return [key, resolvePropValue(val, propKey2)];
			}));
			const localStyle = Object.values(elementStyles).find((style) => style.label === "local");
			const existingCustomCssText = localStyle ? readStoredCustomCssText((0, _elementor_editor_styles.getVariantByMeta)(localStyle, LOCAL_STYLE_META)?.custom_css?.raw) : "";
			let customCss;
			Object.keys(propertyMapValue).forEach((stylePropName) => {
				const propertyRawSchema = styleSchema[stylePropName];
				if (stylePropName === "custom_css") {
					let customCssValue = propertyMapValue[stylePropName];
					if (typeof customCssValue === "object" && customCssValue && customCssValue.value) customCssValue = String(customCssValue.value);
					if (!customCssValue) customCssValue = "";
					const customCssText = customCssWriteMode === "merge-with-stored" ? mergeCustomCssText(existingCustomCssText, customCssValue) : String(customCssValue);
					if (customCssText) customCss = { raw: btoa(customCssText) };
					else customCss = { raw: btoa("") };
					return;
				}
				if (!!!propertyRawSchema) throw new Error(`Style property ${stylePropName} is not supported.`);
				if (propertyRawSchema.kind === "plain") {
					if (typeof propertyMapValue[stylePropName] !== "object") {
						const propUtil = (0, _elementor_editor_props.getPropSchemaFromCache)(propertyRawSchema.key);
						if (propUtil) {
							const plainValue = propUtil.create(propertyMapValue[stylePropName]);
							propertyMapValue[stylePropName] = plainValue;
						}
					}
				}
			});
			delete transformedStyleValues.custom_css;
			if (!localStyle) (0, _elementor_editor_elements.createElementStyle)({
				elementId,
				...typeof customCss !== "undefined" ? { custom_css: customCss } : {},
				classesProp: "classes",
				label: "local",
				meta: {
					breakpoint: "desktop",
					state: null
				},
				props: { ...transformedStyleValues }
			});
			else (0, _elementor_editor_elements.updateElementStyle)({
				elementId,
				styleId: localStyle.id,
				meta: {
					breakpoint: "desktop",
					state: null
				},
				...typeof customCss !== "undefined" ? { custom_css: customCss } : {},
				props: { ...transformedStyleValues }
			});
			return;
		}
		const elementPropSchema = (0, _elementor_editor_elements.getWidgetsCache)()?.[elementType]?.atomic_props_schema;
		if (!elementPropSchema) throw new Error(`No prop schema found for element type: ${elementType}`);
		if (!elementPropSchema[propertyName]) throw new UnsupportedPropertyError(elementType, propertyName, Object.keys(elementPropSchema));
		const propKey = elementPropSchema[propertyName].key;
		const value = resolvePropValue(propertyValue, propKey);
		const { valid, jsonSchema } = _elementor_editor_props.Schema.validatePropValue(elementPropSchema[propertyName], propertyValue);
		if (!valid) throw new Error(`Invalid PropValue for elementId: ${elementId}. PropKey: ${propKey}, PropValue: ${JSON.stringify(propertyValue)}
Expected Schema: ${jsonSchema}`);
		(0, _elementor_editor_elements.updateElementSettings)({
			id: elementId,
			props: { [propertyName]: value },
			withHistory: false
		});
		(0, _elementor_editor_v1_adapters.__privateRunCommandSync)("document/save/set-is-modified", { status: true }, { internal: true });
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/tools/configure-element/prompt.ts
	var CONFIGURE_ELEMENT_GUIDE_URI = "elementor://canvas/tools/configure-element-guide";
	var generatePrompt = () => {
		const configureElementToolPrompt = (0, _elementor_editor_mcp.toolPrompts)("configure-element");
		configureElementToolPrompt.description(`
Configure an existing element on the page.

# **CRITICAL - REQUIRED INFORMATION (Must read before using this tool)**
1. [${WIDGET_SCHEMA_URI}] \u2014 **Widget properties** (\`propertiesToChange\`): each widgetType (e.g. e-heading, e-button) has its own PropType schema; values must be PropValues with \`$$type\`.
2. [elementor://global-variables] \u2014 **Design tokens for styling**: use labels in CSS as \`var(--label)\` or \`var(--label, fallback)\`; only variables listed here are valid.
3. **Styling** (\`style\` parameter): flat map of CSS property \u2192 value strings \u2014 **not** PropValues. The server converts to native styles; unconvertible declarations become custom CSS.
4. **Current state**: \`get-element-configuration-values\` returns \`properties\` as PropValues and \`style\` in stored form; when writing, send raw CSS in \`style\`, not copied PropValues.

Before using this tool, read the widget PropType schema at editor-canvas__elementor://widgets/schema/{widgetType}

# When to use this tool
When a user requires to change anything in an element, such as updating text, colors, sizes, or other configurable properties.
This tool handles elements of type "widget".
This tool handles styling elements, using the "style" parameter (raw CSS as a property \u2192 value map).

To CLEAR a property (i.e., set it to default or none), provide null as a value - example: \`background-color: null\`.

The element's schema must be known before using this tool.

**PropValue structure (for \`propertiesToChange\` only \u2014 not for \`style\`):**
{
    "$$type": string, // MANDATORY as defined in the PropType schema under the "key" property
    value: unknown // The value according to the PropType schema for kinds of "array", use array with PropValues items inside. For "object", read the shape property of the PropType schema. For "plain", use strings.
}

<IMPORTANT>
ALWAYS MAKE SURE you have the PropType schemas for the element you are configuring. If you are not sure, retrieve the schema from the resources mentioned above.
</IMPORTANT>

You can use multiple property changes at once by providing multiple entries in the propertiesToChange object.
Some properties are nested, use the root property name, then objects with nested values inside, as the complete schema suggests.

Make sure you have the "widget-schema-by-type" resource available to retrieve the PropType schema for the element type you are configuring.

# How to configure elements
We use a dedicated PropType Schema for configuring element properties (propertiesToChange). When you configure an element property, you must use the EXACT PropType Value as defined in the schema.
For styling, use the "style" parameter with raw CSS declarations (property \u2192 value strings) - e.g. \`color: var(--primary-text, #000); height: 4rem;\`;
For all non-primitive entries in \`propertiesToChange\`, provide the schema \`key\` as \`$$type\` in the generated object, as it is MANDATORY for parsing.

Use the EXACT PropType schema given, and ALWAYS include the \`key\` from the schema for every property you are changing in \`propertiesToChange\`.

# Dynamic tags
A value can be made dynamic wherever its schema exposes a variant with "$$type": "dynamic". This may be the property root OR a NESTED field: for example an image is made dynamic on its "src" (the root stays "image"), NOT on the whole "image" value.
Put the dynamic object EXACTLY at the node whose schema offers the "dynamic" variant, in place of the static variant. The variant's "name" enumerates the tags allowed at that node.
1. Read the [${DYNAMIC_TAGS_URI}] resource for each allowed tag's settings schema.
2. Provide, at that node:
{
  "$$type": "dynamic",
  "value": {
    "name": "<allowed tag name>",
    "settings": { /* strictly per the tag's settings schema */ }
  }
}
Image example: { "$$type": "image", "value": { "src": { "$$type": "dynamic", "value": { "name": "<image tag>", "settings": { ... } } } } }
Do NOT send "group" (it is resolved automatically). Use { "settings": {} } only when the tag has no settings.
`);
		configureElementToolPrompt.parameter("elementId", "The ID of the element to configure. MANDATORY.");
		configureElementToolPrompt.parameter("elementType", "The type of the element to configure (i.e. e-heading, e-button). MANDATORY.");
		configureElementToolPrompt.parameter("propertiesToChange", "An object containing the properties to change, with their new values. MANDATORY. When updating a style only, provide an empty object.");
		configureElementToolPrompt.parameter("style", "A flat map of raw CSS declarations (property → value), e.g. { \"line-height\": \"1.25rem\", \"color\": \"var(--primary-text, #000)\" }. font-family must be a single Google Font name or a var(--label) — no fallback stacks. Set a value to null to reset that property to its default. OPTIONAL.");
		configureElementToolPrompt.example(`
\`\`\`json
{
  propertiesToChange: {
    // List of properties TO CHANGE, following the PropType schema for the element as defined in the resource [${WIDGET_SCHEMA_URI}]
    title: {
      $$type: 'string',
      value: 'New Title Text'
    },
    border: {
      $$type: 'boolean',
      value: false
    },
  },
  style: {
    'line-height': '1.25rem',
    'color': 'var(--primary-text, #000)'
  },
  elementId: 'element-id',
  elementType: 'element-type'
};
\`\`\`
`);
		configureElementToolPrompt.instruction("The $$type property is MANDATORY for every value in propertiesToChange; it is not used in the style parameter (raw CSS only).");
		configureElementToolPrompt.instruction(`
V4 only: If MCP fails, give manual steps using V4 UI.

V4 Editor structure:
Panel tabs: General (\u2192 Settings section: ID, Tag, and Link where the widget supports it), Style, Interactions.
NO Advanced tab. Never mention Advanced tab.
Note: \`link\` is valid only when the element's PropType schema (which you must already have) includes a \`link\` property. Sending \`link\` to a widget whose schema lacks it is skipped and reported in the response \`warnings\` (other changes still apply) and the link is lost.
`);
		return configureElementToolPrompt.prompt();
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/tools/configure-element/schema.ts
	var inputSchema = {
		propertiesToChange: _elementor_schema.z.record(_elementor_schema.z.string().describe("The property name."), _elementor_schema.z.any().describe(`PropValue, refer to [${WIDGET_SCHEMA_URI}] by correct type, as appears in elementType`), _elementor_schema.z.any()).describe("An object record containing property names and their new values to be set on the element"),
		style: _elementor_schema.z.record(_elementor_schema.z.string().describe("A CSS property name, e.g. \"color\", \"margin-top\"."), _elementor_schema.z.string().nullable().describe("A CSS value, e.g. \"red\", \"10px\", \"1px solid #000\". Use null to reset the property to its default.")).describe("Raw CSS declarations as a flat property→value map. Converted to native styles server-side; any declaration that cannot be converted is stored as the element custom CSS. A null value resets that property to its default.").default({}),
		elementType: _elementor_schema.z.string().describe("The type of the element to retrieve the schema"),
		elementId: _elementor_schema.z.string().describe("The unique id of the element to configure")
	};
	var outputSchema = {
		success: _elementor_schema.z.boolean().describe("Whether the configuration change was successful, only if propertyName and propertyValue are provided"),
		warnings: _elementor_schema.z.string().describe("Non-fatal notices. Present when some props were skipped because they are not in the element schema (e.g. a \"link\" on a widget with no link prop). Other changes were still applied.").optional()
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/tools/configure-element/tool.ts
	var initConfigureElementTool = (reg) => {
		const { addTool, resource } = reg;
		resource("configure-element-guide", CONFIGURE_ELEMENT_GUIDE_URI, {
			title: "Configure Element Guide",
			description: "Detailed guide for using the configure-element tool",
			mimeType: "text/plain"
		}, async (uri) => ({ contents: [{
			uri: uri.href,
			mimeType: "text/plain",
			text: generatePrompt()
		}] }));
		addTool({
			name: "configure-element",
			description: "Configure an existing V4 element's properties and styles. Read the guide resource before use.",
			schema: inputSchema,
			outputSchema,
			requiredResources: [
				{
					description: "Widgets schema",
					uri: WIDGET_SCHEMA_URI
				},
				{
					description: "Configure element guide",
					uri: CONFIGURE_ELEMENT_GUIDE_URI
				},
				{
					description: "Dynamic tags catalog",
					uri: DYNAMIC_TAGS_URI
				}
			],
			handler: async ({ elementId, propertiesToChange, elementType, style }) => {
				const widgetData = (0, _elementor_editor_elements.getWidgetsCache)()?.[elementType];
				if (!widgetData) throw new Error(`Unknown element type: ${elementType}. Check the available-widgets resource for valid types.`);
				const container = (0, _elementor_editor_elements.getContainer)(elementId);
				if (!container) throw new Error(`Element with id ${elementId} not found`);
				if (!(container.settings.get("widgetType") === elementType || container.type === elementType)) throw new Error(`Element with ID ${elementId} is not of type ${elementType}`);
				if (!widgetData.atomic_props_schema) throw new Error(`This tool does not support V3 elements. Please use the elementor-v3-mcp tools instead for element type: ${elementType}`);
				const propertiesToUpdate = resolveCanonicalPropKeys(elementType, propertiesToChange);
				const toUpdate = Object.entries(propertiesToUpdate);
				const skippedProps = [];
				for (const [propertyName, propertyValue] of toUpdate) {
					if (!_elementor_editor_props.Schema.isPropKeyConfigurable(propertyName)) throw new Error(`Not allowed to update ${propertyName}`);
					try {
						doUpdateElementProperty({
							elementId,
							elementType,
							propertyName,
							propertyValue
						});
					} catch (error) {
						if (error instanceof UnsupportedPropertyError) {
							skippedProps.push(error.propertyName);
							continue;
						}
						const errorMessage = createUpdateErrorMessage({
							propertyName,
							elementId,
							elementType,
							error,
							propertyType: "prop"
						});
						throw new Error(errorMessage);
					}
				}
				await applyStyleFromCss({
					elementId,
					elementType,
					style
				});
				return {
					success: true,
					warnings: skippedProps.length ? `Skipped unsupported props (not in the "${elementType}" schema; other changes were applied): ${skippedProps.join(", ")}.` : void 0
				};
			}
		});
	};
	async function applyStyleFromCss(opts) {
		const { elementId, elementType, style } = opts;
		if (!style || Object.keys(style).length === 0) return;
		const { props, customCss } = await convertCssToAtomic(style);
		const styleValue = { ...props };
		if (customCss) styleValue.custom_css = customCss;
		if (Object.keys(styleValue).length === 0) return;
		try {
			doUpdateElementProperty({
				elementId,
				elementType,
				propertyName: "_styles",
				propertyValue: styleValue,
				customCssWriteMode: "merge-with-stored"
			});
			(0, _elementor_editor_mcp.dispatchMcpStylesAppliedEvent)({ styleValue });
		} catch (error) {
			throw new Error(createUpdateErrorMessage({
				propertyName: "(style)",
				elementId,
				elementType,
				propertyType: "style",
				error
			}));
		}
	}
	function createUpdateErrorMessage(opts) {
		const { propertyName, elementId, elementType, error, propertyType } = opts;
		return `Failed to update property "${propertyName}" on element "${elementId}": ${error.message}.
${propertyType === "prop" ? `
Check the element's PropType schema at the resource [${WIDGET_SCHEMA_URI.replace("{widgetType}", elementType)}] for type "${elementType}" to ensure the property exists and the value matches the expected PropType.
Now that you have this information, ensure you have the schema and try again.` : `
Provide styling as raw CSS via the "style" parameter (a flat map of CSS property \u2192 value). Declarations that cannot be converted are stored as the element custom CSS.`};
}`;
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/utils/get-mcp-error-message.ts
	function getMcpErrorMessage(error, toolName) {
		if (error instanceof _elementor_http_client.AxiosError) {
			const data = error.response?.data;
			if (data?.message) return data.code ? `${data.code}: ${data.message}` : data.message;
		}
		if (error instanceof Error) return error.message;
		return `${toolName} failed with an unknown error.`;
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/tools/get-page-structure/tool.ts
	var MCP_PROXY_URL = "elementor/v1/mcp-proxy";
	var initGetPageStructureTool = (reg) => {
		const { addTool } = reg;
		addTool({
			name: "get-page-structure",
			description: "Returns a lean Elementor element tree skeleton (id, elType, widgetType, title, nested elements) for a post or page. If no postId is provided, uses the currently open document. Optionally scope to a subtree with elementId. Set includeContent=true (requires elementId) to also return each node's settings and styles.",
			schema: {
				postId: _elementor_schema.z.number().optional().describe("WordPress post ID of the Elementor document. If omitted, uses the currently open document."),
				elementId: _elementor_schema.z.string().optional().describe("If provided, returns only the subtree rooted at that element id."),
				includeContent: _elementor_schema.z.boolean().optional().describe("If true, includes each node's settings and styles (same shape build-composition accepts as input). Requires elementId.")
			},
			outputSchema: { elements: _elementor_schema.z.array(_elementor_schema.z.any()).describe("Skeleton of Elementor elements (id, elType, widgetType, title, nested elements). When includeContent is true, each node also includes settings and styles.") },
			handler: async ({ postId, elementId, includeContent }) => {
				const resolvedPostId = postId ?? (0, _elementor_editor_documents.getCurrentDocument)()?.id;
				if (!resolvedPostId) throw new Error("No post ID provided and no active document found.");
				try {
					const { data } = await (0, _elementor_http_client.httpService)().post(MCP_PROXY_URL, {
						tool: "get-page-structure",
						input: {
							post_id: resolvedPostId,
							...elementId ? { element_id: elementId } : {},
							...includeContent ? { include_content: true } : {}
						}
					});
					return { elements: data.data.elements };
				} catch (error) {
					throw new Error(getMcpErrorMessage(error, "get-page-structure"));
				}
			}
		});
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/canvas-mcp.ts
	var initCanvasMcp = (reg) => {
		_elementor_editor_props.Schema.setDynamicTagNamesResolver(getDynamicTagNamesByCategories);
		initWidgetsSchemaResource(reg);
		initAvailableWidgetsResource(reg);
		initDocumentStructureResource(reg);
		initDynamicTagsResource(reg);
		initSelectedElementResource(reg);
		initEditorStateResource(reg);
		initGeneralContextResource(reg);
		initBestPracticesResource(reg);
		initConfigureElementTool(reg);
		initGetPageStructureTool(reg);
		initBreakpointsResource(reg);
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/mcp/mcp-description.ts
	var ELEMENT_SCHEMA_URI = WIDGET_SCHEMA_URI.replace("{widgetType}", "element-schema");
	var mcpDescription = `Elementor Canvas MCP
This MCP enables configuration and styling of existing V4 elements on the Elementor canvas using the configure-element tool.

# Core Concepts

## PropValues Structure
All data in Elementor uses PropValues - a typed wrapper for values:
\`\`\`json
{
  "$$type": "the-prop-type-schema-kind",
  "value": "the-actual-value-as-defined-for-the-propType"
}
\`\`\`
The \`$$type\` defines how Elementor interprets the value. Providing the correct \`$$type\` is critical - incorrect types will be rejected.

## Design System Resources
- **Global Variables**: Reusable colors, sizes, and fonts (\`elementor://global-variables\`)
- **Global Classes**: Reusable style sets that can be applied to elements (\`elementor://global-classes\`)
- **Widget Schemas**: Configuration options for each widget type (\`${WIDGET_SCHEMA_URI}\`)

# Configuring Elements with configure-element

The \`configure-element\` tool updates settings and styles on existing V4 elements. Read the configure-element guide resource before use.

## Complete Workflow

### 1. Parse User Requirements
Understand what needs to change: content, settings, or styling on existing elements.

### 2. Check Global Resources FIRST
Always check existing resources before styling:
- List \`elementor://global-variables\` for available variables (colors, sizes, fonts)
- List \`elementor://global-classes\` for available style sets
- **Always prefer using existing global resources over creating inline styles**

### 3. Retrieve Widget Schemas
For each element you will configure:
- List \`${WIDGET_SCHEMA_URI}\` to see available widgets
- Retrieve configuration schema from \`${ELEMENT_SCHEMA_URI}\` for each widget
- Check the \`llm_guidance\` property for container nesting, \`default_styles\`, and \`default_settings\`

### 4. Get Current Element State
Use page structure and element configuration resources to find element IDs and current values.

### 5. Create propertiesToChange
Map property names to PropValues using the widget schema:
- Use correct \`$$type\` matching the widget's schema
- Use global variables in PropValues where applicable
- Example:
\`\`\`json
{
  "text": { "$$type": "string", "value": "Welcome" },
  "tag": { "$$type": "string", "value": "h1" }
}
\`\`\`

### 6. Create style
Provide raw CSS declarations (property \u2192 value strings). The server converts them to native styles and stores any unconvertible declarations as the element custom CSS.
- Example:
\`\`\`json
{
  "color": "#1a1a1a",
  "font-size": "2rem"
}
\`\`\`

### 7. Execute configure-element
Call the tool with elementId, elementType, propertiesToChange, and style as needed.

## Key Points

- **PropValue Types**: Arrays that accept union types are typed as mixed arrays
- **Visual Sizing**: Widget sizes MUST be defined via the style parameter (raw CSS). Widget properties like image "size" control resolution, not visual appearance
- **Global Variables**: Reference by label/name: (e.g. var(--card-background-color)
- **Naming Conventions**: Use meaningful, purpose-based names (e.g., "primary-button", "heading-large"), not value-based names (e.g., "blue-style", "20px-padding")

## Example: e-image PropValue Structure
\`\`\`json
{
  "$$type": "image",
  "value": {
    "src": {
      "$$type": "image-src",
      "value": {
        "url": { "$$type": "url", "value": "https://example.com/image.jpg" }
      }
    },
    "size": { "$$type": "string", "value": "full" }
  }
}
\`\`\`
Note: The "size" property controls image resolution/loading, not visual size. Set visual dimensions via the style parameter (raw CSS).
`;

//#endregion
//#region packages/packages/core/editor-canvas/src/prevent-link-in-link-commands.ts
	function initLinkInLinkPrevention() {
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "document/elements/paste",
			condition: blockLinkInLinkPaste
		});
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "document/elements/move",
			condition: blockLinkInLinkMove
		});
	}
	var learnMoreActionProps = {
		href: "https://go.elementor.com/element-link-inside-link-infotip",
		target: "_blank",
		color: "inherit",
		variant: "text",
		sx: { marginInlineStart: "20px" },
		children: "Learn more"
	};
	function blockLinkInLinkPaste(args) {
		const { containers = [args.container], storageType } = args;
		const targetElements = containers;
		if (storageType !== "localstorage") return false;
		const data = window?.elementorCommon?.storage?.get();
		if (!data?.clipboard?.elements) return false;
		const sourceElements = data.clipboard.elements;
		const notification = {
			type: "default",
			message: (0, _wordpress_i18n.__)("To paste a link to this element, first remove the link from it's parent container.", "elementor"),
			id: "paste-in-link-blocked",
			additionalActionProps: [learnMoreActionProps]
		};
		const blocked = shouldBlock(sourceElements, targetElements);
		if (blocked) (0, _elementor_editor_notifications.notify)(notification);
		return blocked;
	}
	function blockLinkInLinkMove(args) {
		const { containers = [args.container], target } = args;
		const sourceElements = containers;
		const targetElement = target;
		const notification = {
			type: "default",
			message: (0, _wordpress_i18n.__)("To drag a link to this element, first remove the link from it's parent container.", "elementor"),
			id: "move-in-link-blocked",
			additionalActionProps: [learnMoreActionProps]
		};
		const isBlocked = shouldBlock(sourceElements, [targetElement]);
		if (isBlocked) (0, _elementor_editor_notifications.notify)(notification);
		return isBlocked;
	}
	function shouldBlock(sourceElements, targetElements) {
		if (!sourceElements?.length || !targetElements?.length) return false;
		if (!sourceElements.some((src) => {
			return src?.id ? (0, _elementor_editor_elements.isElementAnchored)(src.id) || !!(0, _elementor_editor_elements.getAnchoredDescendantId)(src.id) : false;
		})) return false;
		return targetElements.some((target) => {
			return target?.id ? (0, _elementor_editor_elements.isElementAnchored)(target.id) || !!(0, _elementor_editor_elements.getAnchoredAncestorId)(target.id) : false;
		});
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/utils/command-utils.ts
	function hasAtomicWidgets(args) {
		const { containers = [args.container] } = args;
		return containers.some(isAtomicWidget);
	}
	function isAtomicWidget(container) {
		if (!container) return false;
		return Boolean(getContainerSchema(container));
	}
	function getClassesProp(container) {
		const propsSchema = getContainerSchema(container);
		if (!propsSchema) return null;
		const [propKey] = Object.entries(propsSchema).find(([, propType]) => propType.kind === "plain" && propType.key === _elementor_editor_props.CLASSES_PROP_KEY) ?? [];
		return propKey ?? null;
	}
	function getContainerSchema(container) {
		const type = container?.model.get("widgetType") || container?.model.get("elType");
		return ((0, _elementor_editor_elements.getWidgetsCache)()?.[type])?.atomic_props_schema ?? null;
	}
	function getClipboardElements(storageKey = "clipboard") {
		try {
			return JSON.parse(localStorage.getItem("elementor") ?? "{}")[storageKey]?.elements;
		} catch {
			return;
		}
	}
	function getTitleForContainers(containers) {
		return containers.length > 1 ? (0, _wordpress_i18n.__)("Elements", "elementor") : (0, _elementor_editor_elements.getElementLabel)(containers[0].id);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/style-commands/undoable-actions/paste-element-style.ts
	var undoablePasteElementStyle = () => (0, _elementor_editor_v1_adapters.undoable)({
		do: ({ containers, newStyle }) => {
			return containers.map((container) => {
				const elementId = container.id;
				const classesProp = getClassesProp(container);
				if (!classesProp) return null;
				const originalStyles = (0, _elementor_editor_elements.getElementStyles)(container.id);
				const [styleId, styleDef] = Object.entries(originalStyles ?? {})[0] ?? [];
				const revertData = {
					styleId,
					originalStyle: Object.keys(styleDef ?? {}).length ? styleDef : null
				};
				if (styleId) newStyle.variants.forEach(({ meta, props, custom_css: customCss }) => {
					(0, _elementor_editor_elements.updateElementStyle)({
						elementId,
						styleId,
						meta,
						props,
						custom_css: customCss
					});
				});
				else {
					const [firstVariant] = newStyle.variants;
					const additionalVariants = newStyle.variants.slice(1);
					revertData.styleId = (0, _elementor_editor_elements.createElementStyle)({
						elementId,
						classesProp,
						label: _elementor_editor_styles_repository.ELEMENTS_STYLES_RESERVED_LABEL,
						...firstVariant,
						additionalVariants
					});
				}
				return revertData;
			});
		},
		undo: ({ containers }, revertDataItems) => {
			containers.forEach((container, index) => {
				const revertData = revertDataItems[index];
				if (!revertData) return;
				if (!revertData.originalStyle) {
					(0, _elementor_editor_elements.deleteElementStyle)(container.id, revertData.styleId);
					return;
				}
				const classesProp = getClassesProp(container);
				if (!classesProp) return;
				const [firstVariant] = revertData.originalStyle.variants;
				const additionalVariants = revertData.originalStyle.variants.slice(1);
				(0, _elementor_editor_elements.createElementStyle)({
					elementId: container.id,
					classesProp,
					label: _elementor_editor_styles_repository.ELEMENTS_STYLES_RESERVED_LABEL,
					styleId: revertData.styleId,
					...firstVariant,
					additionalVariants
				});
			});
		}
	}, {
		title: ({ containers }) => getTitleForContainers(containers),
		subtitle: (0, _wordpress_i18n.__)("Style Pasted", "elementor")
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/style-commands/paste-style.ts
	function initPasteStyleCommand() {
		const pasteElementStyleCommand = undoablePasteElementStyle();
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "document/elements/paste-style",
			condition: hasAtomicWidgets
		});
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandStartEvent)("document/elements/paste-style"), (e) => pasteStyles(e.args, pasteElementStyleCommand));
	}
	function pasteStyles(args, pasteLocalStyle) {
		const { containers = [args.container], storageKey } = args;
		const atomicContainers = containers.filter(isAtomicWidget);
		if (!atomicContainers.length) return;
		const [clipboardElement] = getClipboardElements(storageKey) ?? [];
		const clipboardContainer = (0, _elementor_editor_elements.getContainer)(clipboardElement.id);
		if (!clipboardElement || !clipboardContainer || !isAtomicWidget(clipboardContainer)) return;
		const elementStyles = clipboardElement.styles;
		const elementStyle = Object.values(elementStyles ?? {})[0];
		const classesSetting = getClassesWithoutLocalStyle(clipboardContainer, elementStyle);
		if (classesSetting.length) pasteClasses(atomicContainers, classesSetting);
		if (elementStyle) pasteLocalStyle({
			containers: atomicContainers,
			newStyle: elementStyle
		});
	}
	function getClassesWithoutLocalStyle(clipboardContainer, style) {
		const classesProp = getClassesProp(clipboardContainer);
		if (!classesProp) return [];
		return (0, _elementor_editor_elements.getElementSetting)(clipboardContainer.id, classesProp)?.value.filter((styleId) => styleId !== style?.id) ?? [];
	}
	function pasteClasses(containers, classes) {
		containers.forEach((container) => {
			const classesProp = getClassesProp(container);
			if (!classesProp) return;
			const classesSetting = (0, _elementor_editor_elements.getElementSetting)(container.id, classesProp);
			const currentClasses = _elementor_editor_props.classesPropTypeUtil.extract(classesSetting) ?? [];
			const newClasses = _elementor_editor_props.classesPropTypeUtil.create(Array.from(/* @__PURE__ */ new Set([...classes, ...currentClasses])));
			(0, _elementor_editor_elements.updateElementSettings)({
				id: container.id,
				props: { [classesProp]: newClasses }
			});
		});
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/style-commands/undoable-actions/reset-element-style.ts
	var undoableResetElementStyle = () => (0, _elementor_editor_v1_adapters.undoable)({
		do: ({ containers }) => {
			return containers.map((container) => {
				const elementId = container.model.get("id");
				const containerStyles = (0, _elementor_editor_elements.getElementStyles)(elementId);
				Object.keys(containerStyles ?? {}).forEach((styleId) => (0, _elementor_editor_elements.deleteElementStyle)(elementId, styleId));
				return containerStyles;
			});
		},
		undo: ({ containers }, revertDataItems) => {
			containers.forEach((container, index) => {
				const classesProp = getClassesProp(container);
				if (!classesProp) return;
				const elementId = container.model.get("id");
				const containerStyles = revertDataItems[index];
				Object.entries(containerStyles ?? {}).forEach(([styleId, style]) => {
					const [firstVariant] = style.variants;
					const additionalVariants = style.variants.slice(1);
					(0, _elementor_editor_elements.createElementStyle)({
						elementId,
						classesProp,
						styleId,
						label: _elementor_editor_styles_repository.ELEMENTS_STYLES_RESERVED_LABEL,
						...firstVariant,
						additionalVariants
					});
				});
			});
		}
	}, {
		title: ({ containers }) => getTitleForContainers(containers),
		subtitle: (0, _wordpress_i18n.__)("Style Reset", "elementor")
	});

//#endregion
//#region packages/packages/core/editor-canvas/src/style-commands/reset-style.ts
	function initResetStyleCommand() {
		const resetElementStyles = undoableResetElementStyle();
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "document/elements/reset-style",
			condition: hasAtomicWidgets
		});
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandStartEvent)("document/elements/reset-style"), (e) => resetStyles(e.args, resetElementStyles));
	}
	function resetStyles(args, resetElementStyles) {
		const { containers = [args.container] } = args;
		const atomicContainers = containers.filter(isAtomicWidget);
		if (!atomicContainers.length) return;
		resetElementStyles({ containers: atomicContainers });
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/style-commands/init-style-commands.ts
	function initStyleCommands() {
		initPasteStyleCommand();
		initResetStyleCommand();
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/init.tsx
	function init() {
		initStyleTransformers();
		initStyleCommands();
		initLinkInLinkPrevention();
		initFormNestingPrevention();
		initFormAncestorEnforcement();
		initViewReplacements();
		initLegacyViews();
		initSettingsTransformers();
		(0, _elementor_editor.injectIntoTop)({
			id: "elements-overlays",
			component: ElementsOverlays
		});
		(0, _elementor_editor.injectIntoTop)({
			id: "canvas-style-render",
			component: StyleRenderer
		});
		(0, _elementor_editor.injectIntoTop)({
			id: "canvas-interactions-render",
			component: InteractionsRenderer
		});
		(0, _elementor_editor.injectIntoLogic)({
			id: "classes-rename",
			component: ClassesRename
		});
		initCanvasMcp((0, _elementor_editor_mcp.getMCPByDomain)("canvas", {
			instructions: `Everything related to V4 ( Atomic ) canvas.
# Canvas workflow
- Configure element settings and styles with configure-element
- Get page structure and element configuration values
`,
			docs: mcpDescription
		}));
		initTabsModelExtensions();
		initListType();
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/sync/drag-element-from-panel.ts
	var DRAG_GROUPS = ["elementor-element"];
	var endDragElementFromPanel = () => {
		getElementorChannels()?.panelElements?.trigger("element:drag:end");
	};
	var startDragElementFromPanel = (props, event) => {
		setDragGroups(event);
		const channels = getElementorChannels();
		channels?.editor.reply("element:dragged", null);
		channels?.panelElements.reply("element:selected", getLegacyPanelElementView(props)).trigger("element:drag:start");
	};
	var setDragGroups = (event) => {
		const dataContainer = { groups: getDragGroups(event) };
		event.dataTransfer?.setData(JSON.stringify(dataContainer), "true");
	};
	var getDragGroups = (event) => {
		const dataContainer = event.dataTransfer?.getData("text/plain");
		return dataContainer ? JSON.parse(dataContainer).groups : DRAG_GROUPS;
	};
	var getElementorChannels = () => {
		const channels = window.elementor?.channels;
		if (!channels) throw new Error("Elementor channels not found: Elementor editor is not initialized or channels are unavailable.");
		return channels;
	};
	var getLegacyPanelElementView = ({ settings, ...rest }) => {
		const LegacyElementModel = window.elementor?.modules?.elements?.models?.Element;
		if (!LegacyElementModel) throw new Error("Elementor legacy Element model not found in editor modules");
		return { model: new LegacyElementModel({
			...rest,
			custom: {
				isPreset: !!settings,
				preset_settings: settings
			}
		}) };
	};

//#endregion
//#region packages/packages/core/editor-canvas/src/sync/global-styles-imported-event.ts
	var GLOBAL_STYLES_IMPORTED_EVENT = "elementor/global-styles/imported";

//#endregion
//#region packages/packages/core/editor-canvas/src/components/spotlight-backdrop.tsx
	function SpotlightBackdrop({ canvas, element, onExit, ariaLabel }) {
		const rect = useElementRect(element);
		const backdropStyle = {
			position: "fixed",
			top: 0,
			left: 0,
			width: "100vw",
			height: "100vh",
			backgroundColor: "rgba(0, 0, 0, 0.5)",
			zIndex: 999,
			pointerEvents: "painted",
			cursor: "pointer",
			clipPath: element ? getRectClipPath(rect, canvas.defaultView) : void 0
		};
		const handleKeyDown = (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				onExit();
			}
		};
		return /* @__PURE__ */ react.createElement("div", {
			style: backdropStyle,
			onClick: onExit,
			onKeyDown: handleKeyDown,
			role: "button",
			tabIndex: 0,
			"aria-label": ariaLabel
		});
	}
	function getRectClipPath(rect, viewport) {
		const { x, y, width, height } = rect;
		const { innerWidth: vw, innerHeight: vh } = viewport;
		return `path(evenodd, 'M 0 0 L ${vw} 0 L ${vw} ${vh} L 0 ${vh} Z M ${x} ${y} L ${x + width} ${y} L ${x + width} ${y + height} L ${x} ${y + height} L ${x} ${y} Z')`;
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/hooks/use-canvas-document.ts
	function useCanvasDocument() {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/attach-preview"), () => (0, _elementor_editor_v1_adapters.getCanvasIframeDocument)());
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/hooks/use-escape-on-canvas.ts
	function useEscapeOnCanvas(canvasDocument, onEscape) {
		(0, react.useEffect)(() => {
			if (!canvasDocument) return;
			const handleEsc = (event) => {
				if (event.key === "Escape") onEscape();
			};
			canvasDocument.body.addEventListener("keydown", handleEsc);
			return () => {
				canvasDocument.body.removeEventListener("keydown", handleEsc);
			};
		}, [canvasDocument, onEscape]);
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/utils/after-render.ts
	function doAfterRender(elementIds, callback) {
		const pending = elementIds.map((elementId) => {
			const view = (0, _elementor_editor_elements.getContainer)(elementId)?.view;
			if (!view || !hasDoAfterRender(view)) return;
			return new Promise((resolve) => view._doAfterRender(resolve));
		}).filter(Boolean);
		if (pending.length > 0) Promise.all(pending).then(() => callback(elementIds));
		else callback(elementIds);
	}
	function hasDoAfterRender(view) {
		return typeof view?._doAfterRender === "function";
	}

//#endregion
//#region packages/packages/core/editor-canvas/src/sync/element-added-event.ts
	var ELEMENT_ADDED_EVENT = "elementor/canvas/element-added";

//#endregion
//#region packages/packages/core/editor-canvas/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		BREAKPOINTS_SCHEMA_FULL_URI: () => BREAKPOINTS_SCHEMA_FULL_URI,
		BREAKPOINTS_SCHEMA_URI: () => BREAKPOINTS_SCHEMA_URI,
		DOCUMENT_STRUCTURE_URI: () => DOCUMENT_STRUCTURE_URI,
		ELEMENT_ADDED_EVENT: () => ELEMENT_ADDED_EVENT,
		GLOBAL_STYLES_IMPORTED_EVENT: () => GLOBAL_STYLES_IMPORTED_EVENT,
		SpotlightBackdrop: () => SpotlightBackdrop,
		UnknownStyleStateError: () => UnknownStyleStateError,
		UnknownStyleTypeError: () => UnknownStyleTypeError,
		WIDGET_SCHEMA_FULL_URI: () => WIDGET_SCHEMA_FULL_URI,
		WIDGET_SCHEMA_URI: () => WIDGET_SCHEMA_URI,
		canBeNestedTemplated: () => canBeNestedTemplated,
		convertCssToAtomic: () => convertCssToAtomic,
		convertStyleBlocksToAtomic: () => convertStyleBlocksToAtomic,
		createNestedTemplatedElementType: () => createNestedTemplatedElementType,
		createNestedTemplatedElementView: () => createNestedTemplatedElementView,
		createPropsResolver: () => createPropsResolver,
		createTemplatedElementView: () => createTemplatedElementView,
		createTransformer: () => createTransformer,
		createTransformersRegistry: () => createTransformersRegistry,
		doAfterRender: () => doAfterRender,
		endDragElementFromPanel: () => endDragElementFromPanel,
		formatGridTrackRepeat: () => formatGridTrackRepeat,
		init: () => init,
		isAtomicWidget: () => isAtomicWidget,
		isGridTrackProperty: () => isGridTrackProperty,
		registerElementType: () => registerElementType,
		registerModelExtensions: () => registerModelExtensions,
		settingsTransformersRegistry: () => settingsTransformersRegistry,
		startDragElementFromPanel: () => startDragElementFromPanel,
		styleTransformersRegistry: () => styleTransformersRegistry,
		stylesInheritanceTransformersRegistry: () => stylesInheritanceTransformersRegistry,
		useCanvasDocument: () => useCanvasDocument,
		useEscapeOnCanvas: () => useEscapeOnCanvas,
		waitForChildrenToComplete: () => waitForChildrenToComplete
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorCanvas = src_exports;

//#endregion
})(elementorV2.editorV1Adapters, elementorV2.editorMcp, elementorV2.httpClient, elementorV2.editor, React, elementorV2.editorDocuments, elementorV2.editorStylesRepository, elementorV2.utils, elementorV2.editorElements, elementorV2.ui, ReactDOM, elementorV2.editorInteractions, elementorV2.editorResponsive, elementorV2.editorStyles, elementorV2.editorProps, elementorV2.editorNotifications, wp.i18n, elementorV2.wpMedia, elementorV2.editorControls, elementorV2.twing, elementorV2.schema);
window.elementorV2.editorCanvas?.init?.();
//# sourceMappingURL=editor-canvas.js.map