(function() {

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

//#region packages/packages/libs/editor-styles/src/utils/generate-id.ts
	function generateId(prefix = "", existingIds = []) {
		let id;
		do
			id = prefix + Math.random().toString(16).slice(2, 9);
		while (existingIds.includes(id));
		return id;
	}

//#endregion
//#region packages/packages/libs/editor-styles/src/utils/get-styles-schema.ts
	var getElementorConfig = () => {
		return window.elementor?.config ?? {};
	};
	var getStylesSchema = () => {
		return getElementorConfig()?.atomic?.styles_schema ?? {};
	};
	var isExistingStyleProperty = (property) => {
		const stylesSchema = getStylesSchema();
		return Object.keys(stylesSchema).includes(property);
	};

//#endregion
//#region packages/packages/libs/editor-styles/src/utils/get-variant-by-meta.ts
	function getVariantByMeta(style, meta) {
		return style.variants.find((variant) => {
			return variant.meta.breakpoint === meta.breakpoint && variant.meta.state === meta.state;
		});
	}

//#endregion
//#region packages/packages/libs/editor-styles/src/utils/state-utils.ts
	var PSEUDO_STATES = [
		"hover",
		"focus",
		"active",
		"focus-visible"
	];
	var CLASS_STATES = [
		"e--selected",
		"e--disabled",
		"e--playing",
		"e--paused"
	];
	function getAdditionalStates(state) {
		if (state === "hover") return ["focus-visible"];
		return [];
	}
	function getStateSelector(state) {
		if (isClassState(state)) return `.${state}`;
		if (isPseudoState(state)) return `:${state}`;
		return state;
	}
	function isClassState(state) {
		return CLASS_STATES.includes(state);
	}
	function isPseudoState(state) {
		return PSEUDO_STATES.includes(state);
	}
	function getSelectorWithState(baseSelector, state) {
		if (!state) return baseSelector;
		return [state, ...getAdditionalStates(state)].map((currentState) => `${baseSelector}${getStateSelector(currentState)}`).join(",");
	}

//#endregion
//#region packages/packages/libs/editor-styles/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		generateId: () => generateId,
		getSelectorWithState: () => getSelectorWithState,
		getStylesSchema: () => getStylesSchema,
		getVariantByMeta: () => getVariantByMeta,
		isClassState: () => isClassState,
		isExistingStyleProperty: () => isExistingStyleProperty,
		isPseudoState: () => isPseudoState
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorStyles = src_exports;

//#endregion
})();
window.elementorV2.editorStyles?.init?.();
//# sourceMappingURL=editor-styles.js.map