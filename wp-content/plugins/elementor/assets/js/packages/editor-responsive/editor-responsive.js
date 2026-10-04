(function(react, _elementor_editor_v1_adapters, _wordpress_i18n) {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});
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

//#endregion

//#region packages/packages/libs/editor-responsive/src/hooks/use-activate-breakpoint.ts
	function useActivateBreakpoint() {
		return (0, react.useCallback)((breakpoint) => {
			return (0, _elementor_editor_v1_adapters.__privateRunCommand)("panel/change-device-mode", { device: breakpoint });
		}, []);
	}

//#endregion
//#region packages/packages/libs/editor-responsive/src/hooks/use-active-breakpoint.ts
	function useActiveBreakpoint() {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)((0, _elementor_editor_v1_adapters.windowEvent)("elementor/device-mode/change"), getActiveBreakpoint);
	}
	function getActiveBreakpoint() {
		return window.elementor?.channels?.deviceMode?.request?.("currentMode") || null;
	}

//#endregion
//#region packages/packages/libs/editor-responsive/src/sync/utils/get-breakpoints-by-widths.ts
	function getBreakpointsByWidths() {
		const { breakpoints } = window.elementor?.config?.responsive || {};
		if (!breakpoints || Object.entries(breakpoints).length === 0) return {
			minWidth: [],
			defaults: [],
			maxWidth: []
		};
		const minWidth = [];
		const maxWidth = [];
		const defaults = [{
			id: "desktop",
			label: (0, _wordpress_i18n.__)("Desktop", "elementor")
		}];
		Object.entries(breakpoints).forEach(([id, v1Breakpoint]) => {
			if (!v1Breakpoint.is_enabled) return;
			const breakpoint = {
				id,
				label: v1Breakpoint.label,
				width: v1Breakpoint.value,
				type: v1Breakpoint.direction === "min" ? "min-width" : "max-width"
			};
			if (!breakpoint.width) defaults.push(breakpoint);
			else if (breakpoint.type === "min-width") minWidth.push(breakpoint);
			else if (breakpoint.type === "max-width") maxWidth.push(breakpoint);
		});
		const byWidth = (a, b) => {
			return a.width && b.width ? b.width - a.width : 0;
		};
		return {
			minWidth: minWidth.sort(byWidth),
			defaults,
			maxWidth: maxWidth.sort(byWidth)
		};
	}

//#endregion
//#region packages/packages/libs/editor-responsive/src/sync/get-breakpoints.ts
	function getBreakpoints() {
		const { minWidth, defaults, maxWidth } = getBreakpointsByWidths();
		return [
			...minWidth,
			...defaults,
			...maxWidth
		];
	}

//#endregion
//#region packages/packages/libs/editor-responsive/src/hooks/use-breakpoints.ts
	function useBreakpoints() {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)((0, _elementor_editor_v1_adapters.v1ReadyEvent)(), getBreakpoints);
	}

//#endregion
//#region packages/packages/libs/editor-responsive/src/hooks/use-breakpoints-map.ts
	function useBreakpointsMap() {
		const breakpoints = useBreakpoints();
		return (0, react.useMemo)(() => {
			const entries = breakpoints.map((breakpoint) => [breakpoint.id, breakpoint]);
			return Object.fromEntries(entries);
		}, [breakpoints]);
	}

//#endregion
//#region packages/packages/libs/editor-responsive/src/sync/get-breakpoints-tree.ts
	function getBreakpointsTree() {
		const { minWidth, defaults, maxWidth } = getBreakpointsByWidths();
		const [rootBreakpoint] = defaults;
		const rootNode = {
			...rootBreakpoint,
			children: []
		};
		const buildBranch = (breakpoints) => {
			let last = rootNode;
			breakpoints.forEach((breakpoint) => {
				const newNode = {
					...breakpoint,
					children: []
				};
				last.children.push(newNode);
				last = newNode;
			});
		};
		buildBranch(minWidth);
		buildBranch(maxWidth);
		return rootNode;
	}

//#endregion
//#region packages/packages/libs/editor-responsive/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		getBreakpoints: () => getBreakpoints,
		getBreakpointsTree: () => getBreakpointsTree,
		useActivateBreakpoint: () => useActivateBreakpoint,
		useActiveBreakpoint: () => useActiveBreakpoint,
		useBreakpoints: () => useBreakpoints,
		useBreakpointsMap: () => useBreakpointsMap
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorResponsive = src_exports;

//#endregion
})(React, elementorV2.editorV1Adapters, wp.i18n);
window.elementorV2.editorResponsive?.init?.();
//# sourceMappingURL=editor-responsive.js.map