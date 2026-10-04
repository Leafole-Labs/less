(function(react, _elementor_icons, _elementor_ui, _wordpress_i18n, _elementor_session, _elementor_editor_elements, _elementor_editor_v1_adapters, _elementor_editor_props, _elementor_editor_controls, _elementor_events, _elementor_editor_responsive, _elementor_editor_mcp, _elementor_editor_ui, _elementor_utils, _elementor_schema) {

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

//#region packages/packages/core/editor-interactions/src/components/empty-state.tsx
	var EmptyState = ({ onCreateInteraction }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			alignItems: "center",
			justifyContent: "center",
			height: "100%",
			color: "text.secondary",
			sx: {
				p: 2.5,
				pt: 8,
				pb: 5.5
			},
			gap: 1.5
		}, /* @__PURE__ */ react.createElement(_elementor_icons.SwipeIcon, { fontSize: "large" }), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "subtitle2"
		}, (0, _wordpress_i18n.__)("Animate elements with Interactions", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption",
			maxWidth: "170px"
		}, (0, _wordpress_i18n.__)("Add entrance animations and effects triggered by user interactions such as page load or scroll.", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "outlined",
			color: "secondary",
			size: "small",
			sx: { mt: 1 },
			onClick: onCreateInteraction
		}, (0, _wordpress_i18n.__)("Create an interaction", "elementor")));
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/interactions-controls-registry.ts
	var controlsRegistry = /* @__PURE__ */ new Map();
	function registerInteractionsControl({ type, component, options }) {
		controlsRegistry.set(type, {
			type,
			component,
			options
		});
	}
	function getInteractionsControl(type) {
		return controlsRegistry.get(type);
	}
	function getInteractionsControlOptions(type) {
		return controlsRegistry.get(type)?.options ?? [];
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/configs/time-constants.ts
	var TIME_UNITS = ["s", "ms"];

//#endregion
//#region packages/packages/core/editor-interactions/src/utils/size-transform-utils.ts
	var SIZE_REGEX = /^(?:(-?\d*\.?\d+)([a-z%]+)|([a-z%]+))$/i;
	var parseSizeValue = (value, allowedUnits, defaultValue, defaultUnit) => {
		if (typeof value === "number") return {
			size: value,
			unit: defaultUnit
		};
		const sizeValue = tryParse(value, allowedUnits, defaultUnit);
		if (sizeValue) return sizeValue;
		if (defaultValue) {
			const fallbackSize = tryParse(defaultValue, allowedUnits, defaultUnit);
			if (fallbackSize) return fallbackSize;
		}
		return createSizeValue(null, defaultUnit);
	};
	var tryParse = (value, allowedUnits, defaultUnit) => {
		if (typeof value === "number") return createSizeValue(value, defaultUnit);
		const match = value && value.match(SIZE_REGEX);
		if (!match) {
			if (value) return {
				size: Number(value),
				unit: defaultUnit
			};
			return null;
		}
		const size = match[1] ? parseFloat(match[1]) : null;
		const unit = match[2] || match[3];
		if (!allowedUnits.includes(unit)) return null;
		return createSizeValue(size, unit);
	};
	var formatSizeValue = ({ size, unit }) => {
		return `${size ?? ""}${unit}`;
	};
	var createSizeValue = (size, unit) => {
		return {
			size,
			unit
		};
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/utils/custom-effect-to-prop-value.ts
	var CUSTOM_EFFECT_TYPE = "custom-effect";
	var KEYFRAMES_TYPE = "keyframes";
	var KEYFRAME_STOP_TYPE = "keyframe-stop";
	var KEYFRAME_STOP_SETTINGS_TYPE = "keyframe-stop-settings";
	var SIZE_TYPE = "size";
	var NUMBER_TYPE = "number";
	var TRANSFORM_SCALE_TYPE = "transform-scale";
	var TRANSFORM_ROTATE_TYPE = "transform-rotate";
	var TRANSFORM_MOVE_TYPE = "transform-move";
	var TRANSFORM_SKEW_TYPE = "transform-skew";
	var UNIT_PERCENT = "%";
	var UNIT_DEG = "deg";
	var UNIT_PX = "px";
	var isPlainCustomEffect = (v) => typeof v === "object" && v !== null && "keyframes" in v && Array.isArray(v.keyframes) && !("$$type" in v);
	var toSizePropValue = (size, unit = UNIT_PERCENT) => ({
		$$type: SIZE_TYPE,
		value: {
			size,
			unit
		}
	});
	var toNumberPropValue = (n) => ({
		$$type: NUMBER_TYPE,
		value: n
	});
	var toDimensionalNumberPropValue = (type, plain, defaults) => ({
		$$type: type,
		value: {
			x: toNumberPropValue(plain.x ?? defaults.x),
			y: toNumberPropValue(plain.y ?? defaults.y),
			z: toNumberPropValue(plain.z ?? defaults.z)
		}
	});
	var toDimensionalSizePropValue = (type, plain, defaults, unit) => ({
		$$type: type,
		value: {
			x: toSizePropValue(plain.x ?? defaults.x, unit),
			y: toSizePropValue(plain.y ?? defaults.y, unit),
			z: toSizePropValue(plain.z ?? defaults.z, unit)
		}
	});
	var toSkewPropValue = (plain) => ({
		$$type: TRANSFORM_SKEW_TYPE,
		value: {
			x: toSizePropValue(plain.x ?? 0, UNIT_DEG),
			y: toSizePropValue(plain.y ?? 0, UNIT_DEG)
		}
	});
	var toKeyframeStopSettingsPropValue = (plain) => {
		const value = {};
		if (plain.opacity !== void 0) {
			const percent = plain.opacity <= 1 ? Math.round(plain.opacity * 100) : plain.opacity;
			value.opacity = toSizePropValue(percent);
		}
		if (plain.scale !== void 0) value.scale = toDimensionalNumberPropValue(TRANSFORM_SCALE_TYPE, plain.scale, {
			x: 1,
			y: 1,
			z: 1
		});
		if (plain.rotate !== void 0) value.rotate = toDimensionalSizePropValue(TRANSFORM_ROTATE_TYPE, plain.rotate, {
			x: 0,
			y: 0,
			z: 0
		}, UNIT_DEG);
		if (plain.move !== void 0) value.move = toDimensionalSizePropValue(TRANSFORM_MOVE_TYPE, plain.move, {
			x: 0,
			y: 0,
			z: 0
		}, UNIT_PX);
		if (plain.skew !== void 0) value.skew = toSkewPropValue(plain.skew);
		return {
			$$type: KEYFRAME_STOP_SETTINGS_TYPE,
			value
		};
	};
	var isPlainKeyframe = (v) => typeof v === "object" && v !== null && "stop" in v && "value" in v && !("$$type" in v);
	var toKeyframeStopPropValue = (item) => {
		if (!isPlainKeyframe(item)) return item;
		return {
			$$type: KEYFRAME_STOP_TYPE,
			value: {
				stop: toSizePropValue(item.stop),
				settings: toKeyframeStopSettingsPropValue(item.value)
			}
		};
	};
	var toKeyframesPropValue = (keyframes) => ({
		$$type: KEYFRAMES_TYPE,
		value: keyframes.map(toKeyframeStopPropValue)
	});
	var plainCustomEffectToPropValue = (plain) => ({
		$$type: CUSTOM_EFFECT_TYPE,
		value: { keyframes: toKeyframesPropValue(plain.keyframes) }
	});
	var toCustomEffectPropValue = (customEffects) => {
		if (customEffects === void 0) return;
		if (isPlainCustomEffect(customEffects)) return plainCustomEffectToPropValue(customEffects);
		return customEffects;
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/utils/get-interactions-config.ts
	function getInteractionsConfig() {
		return window.ElementorInteractionsConfig ?? {};
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/utils/temp-id-utils.ts
	var TEMP_ID_PREFIX = "temp-";
	var TEMP_ID_REGEX = /^temp-[a-z0-9]+$/i;
	function generateTempInteractionId() {
		return `${TEMP_ID_PREFIX}${Math.random().toString(36).substring(2, 11)}`;
	}
	function isTempId(id) {
		return !!id && TEMP_ID_REGEX.test(id);
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/utils/prop-value-utils.ts
	var createString = (value) => ({
		$$type: "string",
		value
	});
	var createNumber = (value) => ({
		$$type: "number",
		value
	});
	var createTimingConfig = (duration, delay) => ({
		$$type: "timing-config",
		value: {
			duration: _elementor_editor_props.sizePropTypeUtil.create(parseSizeValue(duration, TIME_UNITS, void 0, "ms")),
			delay: _elementor_editor_props.sizePropTypeUtil.create(parseSizeValue(delay, TIME_UNITS, void 0, "ms"))
		}
	});
	var createBoolean = (value) => ({
		$$type: "boolean",
		value
	});
	var createConfig = ({ replay, easing = "easeIn", relativeTo = "viewport", repeat = "", times = 1, start = 85, end = 15 }) => ({
		$$type: "config",
		value: {
			replay: createBoolean(replay),
			easing: createString(easing),
			relativeTo: createString(relativeTo),
			repeat: createString(repeat),
			times: createNumber(times),
			start: createSize(start, "%"),
			end: createSize(end, "%")
		}
	});
	var createSize = (value, defaultUnit, defaultValue) => {
		if (!value) return;
		return _elementor_editor_props.sizePropTypeUtil.create(parseSizeValue(value, ["%"], defaultValue, defaultUnit));
	};
	var extractBoolean = (prop, fallback = false) => {
		return prop?.value ?? fallback;
	};
	var createExcludedBreakpoints = (breakpoints) => ({
		$$type: "excluded-breakpoints",
		value: breakpoints.map(createString)
	});
	var createInteractionBreakpoints = (excluded) => ({
		$$type: "interaction-breakpoints",
		value: { excluded: createExcludedBreakpoints(excluded) }
	});
	var extractExcludedBreakpoints = (breakpoints) => {
		return breakpoints?.value.excluded.value.map((bp) => bp.value) ?? [];
	};
	var createAnimationPreset = ({ effect, type, direction, duration, delay, replay = false, easing = "easeIn", relativeTo, repeat, times, start, end, customEffects }) => {
		const customEffectProp = toCustomEffectPropValue(customEffects);
		return {
			$$type: "animation-preset-props",
			value: {
				effect: createString(effect),
				...customEffectProp !== void 0 && { custom_effect: customEffectProp },
				type: createString(type),
				direction: createString(direction ?? ""),
				timing_config: createTimingConfig(duration, delay),
				config: createConfig({
					replay,
					easing,
					relativeTo,
					repeat,
					times,
					start,
					end
				})
			}
		};
	};
	var createInteractionItem = ({ trigger, effect, type, direction, duration, delay, interactionId, replay = false, easing = "easeIn", relativeTo, repeat, times, start, end, excludedBreakpoints, customEffects }) => ({
		$$type: "interaction-item",
		value: {
			...interactionId && { interaction_id: createString(interactionId) },
			trigger: createString(trigger ?? ""),
			animation: createAnimationPreset({
				effect: effect ?? "",
				type: type ?? "",
				direction,
				duration: duration ?? 0,
				delay: delay ?? 0,
				replay,
				easing,
				relativeTo,
				repeat,
				times,
				start,
				end,
				customEffects
			}),
			...excludedBreakpoints && excludedBreakpoints.length > 0 && { breakpoints: createInteractionBreakpoints(excludedBreakpoints) }
		}
	});
	var createDefaultInteractionItem = () => {
		const { constants } = getInteractionsConfig();
		return createInteractionItem({
			trigger: "load",
			effect: "fade",
			type: "in",
			duration: constants.defaultDuration,
			delay: constants.defaultDelay,
			replay: false,
			easing: constants.defaultEasing,
			interactionId: generateTempInteractionId()
		});
	};
	var createDefaultInteractions = () => ({
		version: 1,
		items: [createDefaultInteractionItem()]
	});
	var extractString = (prop, fallback = "") => {
		return prop?.value ?? fallback;
	};
	var extractSize = (prop, defaultValue) => {
		if (!prop?.value) return defaultValue;
		return formatSizeValue(prop.value);
	};
	var TRIGGER_LABELS$1 = {
		load: "On page load",
		scrollIn: "Scroll into view",
		scrollOut: "Scroll out of view",
		scrollOn: "While scrolling"
	};
	var capitalize$1 = /* @__PURE__ */ __name((str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}, "capitalize");
	var buildDisplayLabel = (item) => {
		const trigger = extractString(item.trigger);
		const effect = extractString(item.animation.value.effect);
		const type = extractString(item.animation.value.type);
		return `${TRIGGER_LABELS$1[trigger] || capitalize$1(trigger)}: ${capitalize$1(effect)} ${"custom" === effect ? "" : capitalize$1(type)}`;
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/utils/is-supported-interaction-item.ts
	function isSupportedInteractionItem(interaction) {
		const value = interaction.value;
		if (true === extractBoolean(value.animation.value.config?.value.replay)) return hasSupport("replay", "yes");
		const trigger = extractString(value.trigger);
		const easing = extractString(value.animation.value.config?.value.easing);
		const effect = extractString(value.animation.value.effect);
		return [
			["trigger", trigger],
			["easing", easing],
			["effect", effect]
		].every(([controlType, controlValue]) => {
			if (controlValue === "" || controlValue === null) return true;
			return hasSupport(controlType, controlValue);
		});
	}
	function hasSupport(controlType, controlValue) {
		const supportedOptions = getInteractionsControlOptions(controlType);
		if (1 > supportedOptions.length) return true;
		return supportedOptions.includes(controlValue);
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/utils/filter-interactions.ts
	var filterInteractions = (interactions) => {
		return interactions.filter((interaction) => {
			return isSupportedInteractionItem(interaction);
		});
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/hooks/use-element-interactions.ts
	var useElementInteractions = (elementId) => {
		const [interactions, setInteractions] = (0, react.useState)(() => {
			const initial = (0, _elementor_editor_elements.getElementInteractions)(elementId);
			const filteredInteractions = filterInteractions(initial?.items ?? []);
			return {
				version: initial?.version ?? 1,
				items: filteredInteractions
			};
		});
		(0, _elementor_editor_v1_adapters.__privateUseListenTo)((0, _elementor_editor_v1_adapters.windowEvent)("elementor/element/update_interactions"), () => {
			const newInteractions = (0, _elementor_editor_elements.getElementInteractions)(elementId);
			const filteredInteractions = filterInteractions(newInteractions?.items ?? []);
			setInteractions({
				version: newInteractions?.version ?? 1,
				items: filteredInteractions
			});
		}, [elementId]);
		return interactions;
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/contexts/interactions-context.tsx
	var InteractionsContext = (0, react.createContext)(null);
	var DEFAULT_INTERACTIONS = {
		version: 1,
		items: []
	};
	var InteractionsProvider = ({ children, elementId }) => {
		const rawInteractions = useElementInteractions(elementId);
		(0, react.useEffect)(() => {
			window.dispatchEvent(new CustomEvent("elementor/element/update_interactions"));
		}, []);
		const interactions = rawInteractions ?? DEFAULT_INTERACTIONS;
		const undoableSetInteractions = (0, react.useMemo)(() => (0, _elementor_editor_v1_adapters.undoable)({
			do: ({ interactions: newInteractions }) => {
				const previous = (0, _elementor_editor_elements.getElementInteractions)(elementId);
				(0, _elementor_editor_elements.updateElementInteractions)({
					elementId,
					interactions: newInteractions
				});
				return previous;
			},
			undo: (_, previous) => {
				(0, _elementor_editor_elements.updateElementInteractions)({
					elementId,
					interactions: previous?.items?.length ? previous : void 0
				});
			}
		}, {
			title: (0, _elementor_editor_elements.getElementLabel)(elementId),
			subtitle: ({ operationType }) => operationType === "apply" ? (0, _wordpress_i18n.__)("Interaction Applied", "elementor") : (0, _wordpress_i18n.__)("Interaction Deleted", "elementor")
		}), [elementId]);
		const setInteractions = (value) => {
			const normalizedValue = value && value.items?.length === 0 ? void 0 : value;
			const prevItemCount = interactions.items?.length ?? 0;
			const newItemCount = normalizedValue?.items?.length ?? 0;
			if (newItemCount > prevItemCount) undoableSetInteractions({
				interactions: normalizedValue,
				operationType: "apply"
			});
			else if (newItemCount < prevItemCount) undoableSetInteractions({
				interactions: normalizedValue,
				operationType: "delete"
			});
			else (0, _elementor_editor_elements.updateElementInteractions)({
				elementId,
				interactions: normalizedValue
			});
		};
		const playInteractions = (interactionId) => {
			(0, _elementor_editor_elements.playElementInteractions)(elementId, interactionId);
		};
		const contextValue = {
			elementId,
			interactions,
			setInteractions,
			playInteractions
		};
		return /* @__PURE__ */ react.createElement(InteractionsContext.Provider, { value: contextValue }, children);
	};
	var useInteractionsContext = () => {
		const context = (0, react.useContext)(InteractionsContext);
		if (!context) throw new Error("useInteractionsContext must be used within InteractionsProvider");
		return context;
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/contexts/popup-state-context.tsx
	var PopupStateContext = (0, react.createContext)(void 0);
	var PopupStateProvider = ({ children }) => {
		const [openByDefault, setOpenByDefault] = (0, react.useState)(false);
		const triggerDefaultOpen = (0, react.useCallback)(() => {
			setOpenByDefault(true);
		}, []);
		const resetDefaultOpen = (0, react.useCallback)(() => {
			setOpenByDefault(false);
		}, []);
		return /* @__PURE__ */ react.createElement(PopupStateContext.Provider, { value: {
			openByDefault,
			triggerDefaultOpen,
			resetDefaultOpen
		} }, children);
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/contexts/interactions-item-context.tsx
	var InteractionItemContext = (0, react.createContext)(null);
	function InteractionItemContextProvider({ value, children }) {
		return /* @__PURE__ */ react.createElement(InteractionItemContext.Provider, { value }, children);
	}
	function useInteractionItemContext() {
		const context = (0, react.useContext)(InteractionItemContext);
		if (!context) throw new Error("useInteractionItemContext must be used within InteractionItemContextProvider");
		return context;
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/utils/scroll-interaction-event.ts
	var SCROLL_INTERACTION_EVENT = "elementor/interactions/scroll-change";
	function dispatchScrollInteraction(data) {
		window.dispatchEvent(new CustomEvent(SCROLL_INTERACTION_EVENT, { detail: data }));
	}
	function extractScrollOverlayParams(interaction, defaults) {
		return {
			trigger: extractString(interaction.trigger, defaults.trigger),
			start: extractSize(interaction.animation.value.config?.value.start, defaults.start),
			end: extractSize(interaction.animation.value.config?.value.end, defaults.end),
			relativeTo: extractString(interaction.animation.value.config?.value.relativeTo, defaults.relativeTo)
		};
	}
	function syncGridOverlay(trigger, start, end, relativeTo) {
		if (trigger === "scrollOn") dispatchScrollInteraction({
			start,
			end,
			relativeTo
		});
		else dispatchScrollInteraction(null);
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/utils/tracking.ts
	var TRIGGER_LABELS = {
		load: "On page load",
		scrollIn: "Scroll into view",
		scrollOut: "Scroll out of view",
		scrollOn: "While scrolling",
		hover: "Hover",
		click: "Click"
	};
	var capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
	var trackInteractionCreated = (elementId, item) => {
		const { dispatchEvent, config } = (0, _elementor_events.getMixpanel)();
		if (!config?.names?.interactions?.created) return;
		const trigger = extractString(item.value.trigger);
		const effect = extractString(item.value.animation.value.effect);
		const type = extractString(item.value.animation.value.type);
		dispatchEvent?.(config.names.interactions.created, {
			window_name: config?.appTypes?.editor,
			interaction_type: config?.triggers?.click,
			target_name: (0, _elementor_editor_elements.getElementLabel)(elementId),
			interaction_result: "interaction_created",
			target_location: config?.locations?.widgetPanel,
			location_l1: (0, _elementor_editor_elements.getElementLabel)(elementId),
			location_l2: "interactions",
			interaction_description: "interaction_created",
			interaction_trigger: TRIGGER_LABELS[trigger] ?? capitalize(trigger),
			interaction_effect: effect === "custom" ? capitalize(effect) : `${capitalize(effect)} ${capitalize(type)}`
		});
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/utils/resolve-direction.ts
	var resolveDirection = (hasDirection, newEffect, newDirection, currentDirection, currentEffect) => {
		if (newEffect === "slide" && !newDirection) return "top";
		if (currentEffect === "slide" && hasDirection) return newDirection || "top";
		if (hasDirection) return newDirection;
		return currentDirection;
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/components/controls/time-frame-indicator.tsx
	function TimeFrameIndicator({ value, onChange, defaultValue }) {
		const sizeValue = parseSizeValue(value, TIME_UNITS, defaultValue, "ms");
		const handleChange = (0, react.useCallback)((size) => {
			onChange(formatSizeValue(size));
		}, [onChange]);
		const handleBlur = (event) => {
			if (!event.target.value) handleChange(parseSizeValue(defaultValue, TIME_UNITS, void 0, "ms"));
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.SizeComponent, {
			units: TIME_UNITS,
			value: sizeValue,
			setValue: handleChange,
			onBlur: handleBlur,
			InputProps: { inputProps: { min: 0 } }
		});
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/components/field.tsx
	var Field = ({ label, children }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 12,
			"aria-label": `${label} control`
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.PopoverGridContainer, null, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 6
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, null, label)), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 6
		}, children)));
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/components/interaction-details.tsx
	var DEFAULT_VALUES = {
		trigger: "load",
		effect: "fade",
		type: "in",
		direction: "",
		duration: 600,
		delay: 0,
		replay: false,
		easing: "easeIn",
		relativeTo: "viewport",
		repeat: "",
		times: 1,
		start: 85,
		end: 15
	};
	var TRIGGERS_WITHOUT_REPLAY = [
		"load",
		"scrollOn",
		"hover",
		"click"
	];
	var controlVisibilityConfig = {
		replay: (values) => !TRIGGERS_WITHOUT_REPLAY.includes(values.trigger),
		custom: (values) => values.effect === "custom",
		effectType: (values) => values.effect !== "custom",
		direction: (values) => values.effect !== "custom",
		relativeTo: (values) => values.trigger === "scrollOn",
		start: (values) => values.trigger === "scrollOn",
		end: (values) => values.trigger === "scrollOn",
		repeat: (values) => values.trigger !== "scrollOn",
		times: (values) => values.trigger !== "scrollOn" && values.repeat === "times",
		duration: (values) => {
			return !(values.trigger === "scrollOn");
		},
		delay: (values) => {
			return !(values.trigger === "scrollOn");
		}
	};
	function normalizeTimesValue(value, fallback) {
		const numericValue = Number(value);
		if (!Number.isFinite(numericValue)) return fallback;
		return Math.max(1, Math.floor(numericValue));
	}
	function useControlComponent(controlName, isVisible = true) {
		return (0, react.useMemo)(() => {
			if (!isVisible) return null;
			return getInteractionsControl(controlName)?.component ?? null;
		}, [controlName, isVisible]);
	}
	var InteractionDetails = ({ interaction, onChange, onPlayInteraction }) => {
		const trigger = extractString(interaction.trigger, DEFAULT_VALUES.trigger);
		const effect = extractString(interaction.animation.value.effect, DEFAULT_VALUES.effect);
		const customEffects = interaction.animation.value.custom_effect;
		const type = extractString(interaction.animation.value.type, DEFAULT_VALUES.type);
		const direction = extractString(interaction.animation.value.direction, DEFAULT_VALUES.direction);
		const duration = extractSize(interaction.animation.value.timing_config.value.duration);
		const delay = extractSize(interaction.animation.value.timing_config.value.delay);
		const replay = extractBoolean(interaction.animation.value.config?.value.replay, DEFAULT_VALUES.replay);
		const easing = extractString(interaction.animation.value.config?.value.easing, DEFAULT_VALUES.easing);
		const relativeTo = extractString(interaction.animation.value.config?.value.relativeTo, DEFAULT_VALUES.relativeTo);
		const configValue = interaction.animation.value.config?.value;
		const repeat = extractString(configValue?.repeat, DEFAULT_VALUES.repeat);
		const times = normalizeTimesValue(configValue?.times?.value, DEFAULT_VALUES.times);
		const start = extractSize(interaction.animation.value.config?.value.start, DEFAULT_VALUES.start);
		const end = extractSize(interaction.animation.value.config?.value.end, DEFAULT_VALUES.end);
		const interactionValues = {
			trigger,
			effect,
			type,
			direction,
			duration,
			delay,
			easing,
			replay,
			relativeTo,
			repeat,
			times,
			start,
			end,
			customEffects
		};
		const TriggerControl = useControlComponent("trigger", true);
		const EffectControl = useControlComponent("effect");
		const ReplayControl = useControlComponent("replay", controlVisibilityConfig.replay(interactionValues));
		const RelativeToControl = useControlComponent("relativeTo", controlVisibilityConfig.relativeTo(interactionValues));
		const StartControl = useControlComponent("start", controlVisibilityConfig.start(interactionValues));
		const EndControl = useControlComponent("end", controlVisibilityConfig.end(interactionValues));
		const CustomEffectControl = useControlComponent("customEffects", controlVisibilityConfig.custom(interactionValues));
		const EffectTypeControl = useControlComponent("effectType", controlVisibilityConfig.effectType(interactionValues));
		const DirectionControl = useControlComponent("direction", controlVisibilityConfig.direction(interactionValues));
		const RepeatControl = useControlComponent("repeat", controlVisibilityConfig.repeat(interactionValues));
		const TimesControl = useControlComponent("times", controlVisibilityConfig.times(interactionValues));
		const EasingControl = useControlComponent("easing");
		const updateInteraction = (updates) => {
			const resolvedDirectionValue = resolveDirection("direction" in updates, updates.effect, updates.direction, direction, effect);
			const updatedInteraction = {
				...interaction,
				interaction_id: interaction.interaction_id,
				trigger: createString(updates.trigger ?? trigger),
				animation: createAnimationPreset({
					effect: updates.effect ?? effect,
					type: updates.type ?? type,
					direction: resolvedDirectionValue,
					duration: updates.duration ?? duration,
					delay: updates.delay ?? delay,
					replay: updates.replay ?? replay,
					easing: updates.easing ?? easing,
					relativeTo: updates.relativeTo ?? relativeTo,
					repeat: updates.repeat ?? repeat,
					times: updates.times ?? times,
					start: updates.start ?? start,
					end: updates.end ?? end,
					customEffects: updates.customEffects ?? customEffects
				})
			};
			onChange(updatedInteraction);
			syncGridOverlay(updates.trigger ?? trigger, updates.start ?? start, updates.end ?? end, updates.relativeTo ?? relativeTo);
			const interactionId = extractString(updatedInteraction.interaction_id);
			setTimeout(() => {
				onPlayInteraction(interactionId);
			}, 0);
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.PopoverContent, { p: 1.5 }, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			spacing: 1.5
		}, TriggerControl && /* @__PURE__ */ react.createElement(Field, { label: (0, _wordpress_i18n.__)("Trigger", "elementor") }, /* @__PURE__ */ react.createElement(TriggerControl, {
			value: trigger,
			onChange: (v) => updateInteraction({ trigger: v })
		})), ReplayControl && /* @__PURE__ */ react.createElement(Field, { label: (0, _wordpress_i18n.__)("Replay", "elementor") }, /* @__PURE__ */ react.createElement(ReplayControl, {
			value: replay,
			onChange: (v) => updateInteraction({ replay: v }),
			disabled: true
		}))), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			spacing: 1.5
		}, EffectControl && /* @__PURE__ */ react.createElement(Field, { label: (0, _wordpress_i18n.__)("Effect", "elementor") }, /* @__PURE__ */ react.createElement(EffectControl, {
			value: effect,
			onChange: (v) => updateInteraction({ effect: v })
		})), CustomEffectControl && /* @__PURE__ */ react.createElement(Field, { label: (0, _wordpress_i18n.__)("Custom Effect", "elementor") }, /* @__PURE__ */ react.createElement(CustomEffectControl, {
			value: customEffects,
			onChange: (v) => updateInteraction({ customEffects: v })
		})), EffectTypeControl && /* @__PURE__ */ react.createElement(Field, { label: (0, _wordpress_i18n.__)("Type", "elementor") }, /* @__PURE__ */ react.createElement(EffectTypeControl, {
			value: type,
			onChange: (v) => updateInteraction({ type: v })
		})), DirectionControl && /* @__PURE__ */ react.createElement(Field, { label: (0, _wordpress_i18n.__)("Direction", "elementor") }, /* @__PURE__ */ react.createElement(DirectionControl, {
			value: direction,
			onChange: (v) => updateInteraction({ direction: v }),
			interactionType: type
		})), RepeatControl && /* @__PURE__ */ react.createElement(Field, { label: (0, _wordpress_i18n.__)("Repeat", "elementor") }, /* @__PURE__ */ react.createElement(RepeatControl, {
			value: repeat,
			onChange: (v) => updateInteraction({ repeat: v })
		})), TimesControl && /* @__PURE__ */ react.createElement(Field, { label: (0, _wordpress_i18n.__)("Times", "elementor") }, /* @__PURE__ */ react.createElement(TimesControl, {
			value: times,
			onChange: (v) => updateInteraction({ times: normalizeTimesValue(v, DEFAULT_VALUES.times) })
		})), controlVisibilityConfig.duration(interactionValues) && /* @__PURE__ */ react.createElement(Field, { label: (0, _wordpress_i18n.__)("Duration", "elementor") }, /* @__PURE__ */ react.createElement(TimeFrameIndicator, {
			value: String(duration),
			onChange: (v) => updateInteraction({ duration: v }),
			defaultValue: DEFAULT_VALUES.duration
		})), controlVisibilityConfig.delay(interactionValues) && /* @__PURE__ */ react.createElement(Field, { label: (0, _wordpress_i18n.__)("Delay", "elementor") }, /* @__PURE__ */ react.createElement(TimeFrameIndicator, {
			value: String(delay),
			onChange: (v) => updateInteraction({ delay: v }),
			defaultValue: DEFAULT_VALUES.delay
		}))), controlVisibilityConfig.relativeTo(interactionValues) && RelativeToControl && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			spacing: 1.5
		}, StartControl && /* @__PURE__ */ react.createElement(Field, { label: (0, _wordpress_i18n.__)("Start", "elementor") }, /* @__PURE__ */ react.createElement(StartControl, {
			value: parseSizeValue(start, ["%"]).size?.toString() ?? "",
			onChange: (v) => updateInteraction({ start: v })
		})), EndControl && /* @__PURE__ */ react.createElement(Field, { label: (0, _wordpress_i18n.__)("End", "elementor") }, /* @__PURE__ */ react.createElement(EndControl, {
			value: parseSizeValue(end, ["%"]).size?.toString() ?? "",
			onChange: (v) => updateInteraction({ end: v })
		})), /* @__PURE__ */ react.createElement(Field, { label: (0, _wordpress_i18n.__)("Relative To", "elementor") }, /* @__PURE__ */ react.createElement(RelativeToControl, {
			value: relativeTo,
			onChange: (v) => updateInteraction({ relativeTo: v })
		}))), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null)), EasingControl && /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			spacing: 1.5
		}, /* @__PURE__ */ react.createElement(Field, { label: (0, _wordpress_i18n.__)("Easing", "elementor") }, /* @__PURE__ */ react.createElement(EasingControl, {
			value: easing,
			onChange: (v) => {
				updateInteraction({ easing: v });
			}
		}))));
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/components/interaction-settings.tsx
	var SIZE = "tiny";
	var InteractionSettings = ({ interaction, onChange }) => {
		const breakpoints = (0, _elementor_editor_responsive.useBreakpoints)();
		const availableBreakpoints = (0, react.useMemo)(() => breakpoints.map((breakpoint) => ({
			label: breakpoint.label,
			value: String(breakpoint.id)
		})), [breakpoints]);
		const [selectedBreakpoints, setSelectedBreakpoints] = (0, react.useState)(() => {
			const excluded = extractExcludedBreakpoints(interaction.breakpoints).filter((excludedBreakpoint) => {
				return availableBreakpoints.some(({ value }) => value === excludedBreakpoint);
			});
			return availableBreakpoints.filter(({ value }) => {
				return !excluded.includes(value);
			});
		});
		const handleBreakpointChange = (0, react.useCallback)((_, newValue) => {
			setSelectedBreakpoints(newValue);
			const selectedValues = newValue.map((option) => option.value);
			const newExcluded = availableBreakpoints.filter((breakpoint) => !selectedValues.includes(breakpoint.value)).map((breakpoint) => breakpoint.value);
			const updatedInteraction = {
				...interaction,
				...newExcluded.length > 0 && { breakpoints: createInteractionBreakpoints(newExcluded) }
			};
			if (newExcluded.length === 0) delete updatedInteraction.breakpoints;
			onChange(updatedInteraction);
		}, [
			interaction,
			availableBreakpoints,
			onChange
		]);
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.PopoverContent, { p: 1.5 }, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			spacing: 1.5
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 12
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "column",
			gap: 1
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, { sx: { width: "100%" } }, (0, _wordpress_i18n.__)("Trigger on", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Autocomplete, {
			fullWidth: true,
			multiple: true,
			value: selectedBreakpoints,
			onChange: handleBreakpointChange,
			size: SIZE,
			options: availableBreakpoints,
			isOptionEqualToValue: (option, value) => option.value === value.value,
			renderInput: (params) => /* @__PURE__ */ react.createElement(_elementor_ui.TextField, { ...params }),
			renderTags: (values, getTagProps) => values.map((option, index) => {
				const { key, ...chipProps } = getTagProps({ index });
				return /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
					key,
					size: SIZE,
					label: option.label,
					...chipProps
				});
			})
		})))));
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/components/interactions-list-item.tsx
	var InteractionsListItem = ({ index, value: interaction }) => {
		const { getTabsProps, getTabProps, getTabPanelProps } = (0, _elementor_ui.useTabs)("details");
		const context = useInteractionItemContext();
		const handleChange = (0, react.useCallback)((newInteractionValue) => {
			context?.onInteractionChange(index, newInteractionValue);
		}, [context, index]);
		const handlePlayInteraction = (0, react.useCallback)((interactionId2) => {
			context?.onPlayInteraction(interactionId2);
		}, [context]);
		const interactionId = extractString(interaction.value.interaction_id);
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Tabs, {
			size: "small",
			variant: "fullWidth",
			"aria-label": (0, _wordpress_i18n.__)("Interaction", "elementor"),
			...getTabsProps()
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Tab, {
			label: (0, _wordpress_i18n.__)("Details", "elementor"),
			...getTabProps("details")
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Tab, {
			label: (0, _wordpress_i18n.__)("Settings", "elementor"),
			...getTabProps("settings")
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_ui.TabPanel, {
			sx: { p: 0 },
			...getTabPanelProps("details")
		}, /* @__PURE__ */ react.createElement(InteractionDetails, {
			key: interactionId,
			interaction: interaction.value,
			onChange: handleChange,
			onPlayInteraction: handlePlayInteraction
		})), /* @__PURE__ */ react.createElement(_elementor_ui.TabPanel, {
			sx: { p: 0 },
			...getTabPanelProps("settings")
		}, /* @__PURE__ */ react.createElement(InteractionSettings, {
			key: interactionId,
			interaction: interaction.value,
			onChange: handleChange
		})));
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/components/interactions-list.tsx
	var MAX_NUMBER_OF_INTERACTIONS = 5;
	function InteractionsList(props) {
		const { interactions, onSelectInteractions, onPlayInteraction, triggerCreateOnShowEmpty } = props;
		const { elementId } = useInteractionsContext();
		const hasInitializedRef = (0, react.useRef)(false);
		const newlyCreatedIdsRef = (0, react.useRef)(/* @__PURE__ */ new Set());
		const handleUpdateInteractions = (0, react.useCallback)((newInteractions) => {
			onSelectInteractions(newInteractions);
		}, [onSelectInteractions]);
		(0, react.useEffect)(() => {
			if (triggerCreateOnShowEmpty && !hasInitializedRef.current && (!interactions.items || interactions.items?.length === 0)) {
				hasInitializedRef.current = true;
				const newItem = createDefaultInteractionItem();
				newlyCreatedIdsRef.current.add(extractString(newItem.value.interaction_id));
				handleUpdateInteractions({
					version: 1,
					items: [newItem]
				});
			}
		}, [
			triggerCreateOnShowEmpty,
			interactions.items,
			handleUpdateInteractions
		]);
		const isMaxNumberOfInteractionsReached = (0, react.useMemo)(() => {
			return interactions.items?.length >= 5;
		}, [interactions.items?.length]);
		const infotipContent = isMaxNumberOfInteractionsReached ? /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
			color: "secondary",
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.InfoCircleFilledIcon, null),
			size: "small"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("Interactions", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { component: "span" }, (0, _wordpress_i18n.__)("You've reached the limit of 5 interactions for this element. Please remove an interaction before creating a new one.", "elementor"))) : void 0;
		const handleRepeaterChange = (0, react.useCallback)((newItems, _, meta) => {
			handleUpdateInteractions({
				...interactions,
				items: newItems
			});
			if (meta?.action?.type === "add") {
				const addedItem = meta.action.payload[0]?.item;
				if (addedItem) newlyCreatedIdsRef.current.add(extractString(addedItem.value.interaction_id));
			}
		}, [interactions, handleUpdateInteractions]);
		const handleInteractionChange = (0, react.useCallback)((index, newInteractionValue) => {
			const newItems = structuredClone(interactions.items);
			newItems[index] = {
				$$type: "interaction-item",
				value: newInteractionValue
			};
			handleUpdateInteractions({
				...interactions,
				items: newItems
			});
		}, [interactions, handleUpdateInteractions]);
		const contextValue = (0, react.useMemo)(() => ({
			onInteractionChange: handleInteractionChange,
			onPlayInteraction
		}), [handleInteractionChange, onPlayInteraction]);
		return /* @__PURE__ */ react.createElement(InteractionItemContextProvider, { value: contextValue }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.Repeater, {
			openOnAdd: true,
			openItem: triggerCreateOnShowEmpty ? 0 : void 0,
			label: (0, _wordpress_i18n.__)("Interactions", "elementor"),
			values: interactions.items,
			setValues: handleRepeaterChange,
			showDuplicate: false,
			showToggle: false,
			isSortable: false,
			disableAddItemButton: isMaxNumberOfInteractionsReached,
			addButtonInfotipContent: infotipContent,
			itemSettings: {
				initialValues: createDefaultInteractionItem(),
				Label: ({ value }) => buildDisplayLabel(value.value),
				Icon: () => null,
				Content: InteractionsListItem,
				onPopoverOpen: (value) => {
					const { trigger, start, end, relativeTo } = extractScrollOverlayParams(value.value, DEFAULT_VALUES);
					syncGridOverlay(trigger, start, end, relativeTo);
				},
				onPopoverClose: (value) => {
					dispatchScrollInteraction(null);
					const id = extractString(value.value.interaction_id);
					if (newlyCreatedIdsRef.current.has(id)) {
						newlyCreatedIdsRef.current.delete(id);
						trackInteractionCreated(elementId, value);
					}
				},
				actions: (value) => /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
					key: "preview",
					placement: "top",
					title: (0, _wordpress_i18n.__)("Preview", "elementor")
				}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
					"aria-label": (0, _wordpress_i18n.__)("Play interaction", "elementor"),
					size: "tiny",
					onClick: () => onPlayInteraction(extractString(value.value.interaction_id))
				}, /* @__PURE__ */ react.createElement(_elementor_icons.PlayerPlayIcon, { fontSize: "tiny" })))
			}
		}));
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/components/interactions-tab.tsx
	var InteractionsTab = ({ elementId }) => {
		return /* @__PURE__ */ react.createElement(PopupStateProvider, null, /* @__PURE__ */ react.createElement(InteractionsTabContent, { elementId }));
	};
	function InteractionsTabContent({ elementId }) {
		const existingInteractions = useElementInteractions(elementId);
		const firstInteractionState = (0, react.useState)(false);
		const hasInteractions = existingInteractions?.items?.length || firstInteractionState[0];
		return /* @__PURE__ */ react.createElement(_elementor_session.SessionStorageProvider, { prefix: elementId }, hasInteractions ? /* @__PURE__ */ react.createElement(InteractionsProvider, { elementId }, /* @__PURE__ */ react.createElement(InteractionsContent, { firstInteractionState })) : /* @__PURE__ */ react.createElement(EmptyState, { onCreateInteraction: () => {
			firstInteractionState[1](true);
		} }));
	}
	function InteractionsContent({ firstInteractionState }) {
		const { interactions, setInteractions, playInteractions } = useInteractionsContext();
		const applyInteraction = (0, react.useCallback)((newInteractions) => {
			firstInteractionState[1](false);
			if (!newInteractions) {
				setInteractions(void 0);
				return;
			}
			setInteractions(newInteractions);
		}, [setInteractions, firstInteractionState]);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			sx: {
				m: 1,
				p: 1.5
			},
			gap: 2
		}, /* @__PURE__ */ react.createElement(InteractionsList, {
			triggerCreateOnShowEmpty: firstInteractionState[0],
			interactions,
			onSelectInteractions: applyInteraction,
			onPlayInteraction: playInteractions
		}));
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/utils/create-interactions-repository.ts
	var createInteractionsRepository = () => {
		const providers = [];
		const getProviders = () => {
			return providers.slice(0).sort((a, b) => a.priority > b.priority ? -1 : 1);
		};
		const register = (provider) => {
			providers.push(provider);
		};
		const all = () => {
			return getProviders().flatMap((provider) => provider.actions.all());
		};
		const subscribe = (cb) => {
			const unsubscribes = providers.map((provider) => provider.subscribe(cb));
			return () => {
				unsubscribes.forEach((unsubscribe) => unsubscribe());
			};
		};
		const getProviderByKey = (key) => {
			return providers.find((provider) => {
				try {
					return provider.getKey() === key;
				} catch {
					return false;
				}
			});
		};
		return {
			all,
			register,
			subscribe,
			getProviders,
			getProviderByKey
		};
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/interactions-repository.ts
	var interactionsRepository = createInteractionsRepository();

//#endregion
//#region packages/packages/core/editor-interactions/src/utils/create-interactions-provider.ts
	var DEFAULT_PRIORITY = 10;
	function createInteractionsProvider({ key, priority = DEFAULT_PRIORITY, subscribe = () => () => {}, actions }) {
		return {
			getKey: typeof key === "string" ? () => key : key,
			priority,
			subscribe,
			actions: { all: actions.all }
		};
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/providers/document-elements-interactions-provider.ts
	var ELEMENTS_INTERACTIONS_PROVIDER_KEY_PREFIX = "document-elements-interactions-";
	var documentElementsInteractionsProvider = createInteractionsProvider({
		key: () => {
			const documentId = (0, _elementor_editor_elements.getCurrentDocumentId)();
			if (!documentId) return `${ELEMENTS_INTERACTIONS_PROVIDER_KEY_PREFIX}pending`;
			return `${ELEMENTS_INTERACTIONS_PROVIDER_KEY_PREFIX}${documentId}`;
		},
		priority: 50,
		subscribe: (cb) => {
			return (0, _elementor_editor_v1_adapters.__privateListenTo)([(0, _elementor_editor_v1_adapters.windowEvent)("elementor/element/update_interactions")], () => cb());
		},
		actions: { all: () => {
			return (0, _elementor_editor_elements.getElements)().filter((element) => {
				const interactions = (0, _elementor_editor_elements.getElementInteractions)(element.id);
				if (!interactions) return false;
				return interactions?.items?.length > 0;
			}).map((element) => {
				const interactions = (0, _elementor_editor_elements.getElementInteractions)(element.id);
				return {
					elementId: element.id,
					dataId: element.id,
					interactions: interactions || {
						version: 1,
						items: []
					}
				};
			});
		} }
	});

//#endregion
//#region packages/packages/core/editor-interactions/src/commands/get-clipboard-elements.ts
	function getClipboardElements(storageKey = "clipboard") {
		try {
			return JSON.parse(localStorage.getItem("elementor") ?? "{}")[storageKey]?.elements;
		} catch {
			return;
		}
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/commands/paste-interactions.ts
	function isAtomicContainer(container) {
		const type = container?.model.get("widgetType") || container?.model.get("elType");
		const elementConfig = (0, _elementor_editor_elements.getWidgetsCache)()?.[type];
		return Boolean(elementConfig?.atomic_props_schema);
	}
	function getTitleForContainers(containers) {
		return containers.length > 1 ? (0, _wordpress_i18n.__)("Elements", "elementor") : (0, _elementor_editor_elements.getElementLabel)(containers[0].id);
	}
	function normalizeClipboardInteractions(raw) {
		if (!raw) return null;
		const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
		const payload = {
			version: parsed?.version ?? 1,
			items: parsed?.items?.filter((item) => isSupportedInteractionItem(item)) ?? []
		};
		if (!payload.items.length) return null;
		return payload;
	}
	function regenerateInteractionIds(interactions) {
		const cloned = structuredClone(interactions);
		cloned.items?.forEach((item) => {
			if (item.$$type === "interaction-item" && item.value) item.value.interaction_id = createString(generateTempInteractionId());
		});
		return cloned;
	}
	function initPasteInteractionsCommand() {
		const undoablePasteInteractions = (0, _elementor_editor_v1_adapters.undoable)({
			do: ({ containers, newInteractions }) => {
				const pasted = regenerateInteractionIds(newInteractions);
				return containers.map((container) => {
					const elementId = container.id;
					const previous = (0, _elementor_editor_elements.getElementInteractions)(elementId);
					(0, _elementor_editor_elements.updateElementInteractions)({
						elementId,
						interactions: pasted
					});
					return {
						elementId,
						previous: previous ?? {
							version: 1,
							items: []
						}
					};
				});
			},
			undo: (_, revertData) => {
				revertData.forEach(({ elementId, previous }) => {
					(0, _elementor_editor_elements.updateElementInteractions)({
						elementId,
						interactions: previous.items?.length ? previous : void 0
					});
				});
			}
		}, {
			title: ({ containers }) => getTitleForContainers(containers),
			subtitle: (0, _wordpress_i18n.__)("Interactions Pasted", "elementor")
		});
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandStartEvent)("document/elements/paste-interactions"), (e) => {
			const args = e.args;
			const containers = args.containers ?? (args.container ? [args.container] : []);
			const storageKey = args.storageKey ?? "clipboard";
			if (!containers.length) return;
			const [clipboardElement] = getClipboardElements(storageKey) ?? [];
			if (!clipboardElement) return;
			const newInteractions = normalizeClipboardInteractions(clipboardElement.interactions);
			if (!newInteractions) return;
			const validContainers = containers.filter((c) => (0, _elementor_editor_elements.getContainer)(c.id)).filter(isAtomicContainer);
			if (!validContainers.length) return;
			undoablePasteInteractions({
				containers: validContainers,
				newInteractions
			});
		});
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/components/controls/direction.tsx
	var AXIS = {
		top: "vertical",
		bottom: "vertical",
		left: "horizontal",
		right: "horizontal"
	};
	function parseValue(value) {
		return value.split("-").filter(Boolean);
	}
	function serializeValue(directions) {
		const vertical = directions.find((d) => d === "top" || d === "bottom");
		const horizontal = directions.find((d) => d === "left" || d === "right");
		if (vertical && horizontal) return `${vertical}-${horizontal}`;
		return directions[0] ?? "";
	}
	function toggleDirection(current, clicked) {
		if (current.includes(clicked)) return current.filter((d) => d !== clicked);
		return [...current.filter((d) => AXIS[d] !== AXIS[clicked]), clicked];
	}
	function Direction({ value, onChange, interactionType }) {
		const isIn = interactionType === "in";
		const options = (0, react.useMemo)(() => [
			{
				dir: "top",
				label: isIn ? (0, _wordpress_i18n.__)("From top", "elementor") : (0, _wordpress_i18n.__)("To top", "elementor"),
				Icon: isIn ? _elementor_icons.ArrowDownSmallIcon : _elementor_icons.ArrowUpSmallIcon
			},
			{
				dir: "bottom",
				label: isIn ? (0, _wordpress_i18n.__)("From bottom", "elementor") : (0, _wordpress_i18n.__)("To bottom", "elementor"),
				Icon: isIn ? _elementor_icons.ArrowUpSmallIcon : _elementor_icons.ArrowDownSmallIcon
			},
			{
				dir: "left",
				label: isIn ? (0, _wordpress_i18n.__)("From left", "elementor") : (0, _wordpress_i18n.__)("To left", "elementor"),
				Icon: isIn ? _elementor_icons.ArrowRightIcon : _elementor_icons.ArrowLeftIcon
			},
			{
				dir: "right",
				label: isIn ? (0, _wordpress_i18n.__)("From right", "elementor") : (0, _wordpress_i18n.__)("To right", "elementor"),
				Icon: isIn ? _elementor_icons.ArrowLeftIcon : _elementor_icons.ArrowRightIcon
			}
		], [isIn]);
		const selectedDirections = (0, react.useMemo)(() => parseValue(value), [value]);
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.StyledToggleButtonGroup, {
			size: "tiny",
			justify: "end",
			sx: {
				display: "grid",
				gridTemplateColumns: "repeat(4, minmax(0, 25%))",
				width: "100%"
			}
		}, options.map(({ dir, label, Icon }) => /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			key: dir,
			title: label,
			disableFocusListener: true,
			placement: "top"
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.StyledToggleButton, {
			value: dir,
			selected: selectedDirections.includes(dir),
			"aria-label": label,
			size: "tiny",
			isPlaceholder: false,
			onChange: () => {
				onChange(serializeValue(toggleDirection(selectedDirections, dir)));
			}
		}, /* @__PURE__ */ react.createElement(Icon, { fontSize: "tiny" })))));
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/ui/interactions-promotion-chip.tsx
	var InteractionsPromotionChip = (0, react.forwardRef)(({ content, upgradeUrl, anchorRef, trackingData }, ref) => {
		const [isOpen, setIsOpen] = (0, react.useState)(false);
		(0, _elementor_editor_ui.useCanvasClickHandler)(isOpen, () => setIsOpen(false));
		const toggle = (0, react.useCallback)(() => {
			setIsOpen((prev) => {
				if (!prev) (0, _elementor_editor_controls.trackViewPromotion)(trackingData);
				return !prev;
			});
		}, [trackingData]);
		(0, react.useImperativeHandle)(ref, () => ({ toggle }), [toggle]);
		const handleToggle = (e) => {
			e.stopPropagation();
			toggle();
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.PromotionPopover, {
			open: isOpen,
			title: (0, _wordpress_i18n.__)("Interactions", "elementor"),
			content,
			ctaText: (0, _wordpress_i18n.__)("Upgrade now", "elementor"),
			ctaUrl: upgradeUrl,
			anchorRef,
			placement: anchorRef ? "right-start" : void 0,
			onClose: (e) => {
				e.stopPropagation();
				setIsOpen(false);
			},
			onCtaClick: () => (0, _elementor_editor_controls.trackUpgradePromotionClick)(trackingData)
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			onMouseDown: (e) => e.stopPropagation(),
			onClick: handleToggle,
			sx: {
				cursor: "pointer",
				display: "inline-flex",
				mr: 1
			}
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.PromotionChip, null)));
	});

//#endregion
//#region packages/packages/core/editor-interactions/src/ui/promotion-select.tsx
	function PromotionSelect({ value, onChange, baseOptions, disabledOptions, promotionLabel, promotionContent, upgradeUrl, trackingData }) {
		const promotionRef = (0, react.useRef)(null);
		const anchorRef = (0, react.useRef)(null);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Select, {
			value,
			onChange: (e) => onChange?.(e.target.value),
			fullWidth: true,
			displayEmpty: true,
			size: "tiny",
			MenuProps: { disablePortal: true }
		}, Object.entries(baseOptions).map(([key, label]) => /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
			key,
			value: key
		}, label)), /* @__PURE__ */ react.createElement(_elementor_ui.MenuSubheader, {
			ref: anchorRef,
			sx: {
				cursor: "pointer",
				color: "text.tertiary",
				fontWeight: "400",
				display: "flex",
				alignItems: "center"
			},
			onMouseDown: (e) => {
				e.stopPropagation();
				promotionRef.current?.toggle();
			}
		}, promotionLabel ?? (0, _wordpress_i18n.__)("PRO features", "elementor"), /* @__PURE__ */ react.createElement(InteractionsPromotionChip, {
			content: promotionContent,
			upgradeUrl,
			ref: promotionRef,
			anchorRef,
			trackingData
		})), Object.entries(disabledOptions).map(([key, label]) => /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
			key,
			value: key,
			disabled: true,
			sx: { pl: 3 }
		}, label)));
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/components/controls/easing.tsx
	var TRACKING_DATA$4 = {
		target_name: "interactions_easing",
		location_l2: "interactions"
	};
	var EASING_OPTIONS = {
		easeIn: (0, _wordpress_i18n.__)("Ease In", "elementor"),
		easeInOut: (0, _wordpress_i18n.__)("Ease In Out", "elementor"),
		easeOut: (0, _wordpress_i18n.__)("Ease Out", "elementor"),
		backIn: (0, _wordpress_i18n.__)("Back In", "elementor"),
		backInOut: (0, _wordpress_i18n.__)("Back In Out", "elementor"),
		backOut: (0, _wordpress_i18n.__)("Back Out", "elementor"),
		linear: (0, _wordpress_i18n.__)("Linear", "elementor")
	};
	var BASE_EASINGS = ["easeIn"];
	function Easing({}) {
		const baseOptions = Object.fromEntries(Object.entries(EASING_OPTIONS).filter(([key]) => BASE_EASINGS.includes(key)));
		const disabledOptions = Object.fromEntries(Object.entries(EASING_OPTIONS).filter(([key]) => !BASE_EASINGS.includes(key)));
		return /* @__PURE__ */ react.createElement(PromotionSelect, {
			value: DEFAULT_VALUES.easing,
			baseOptions,
			disabledOptions,
			promotionContent: (0, _wordpress_i18n.__)("Upgrade to control the smoothness of the interaction.", "elementor"),
			upgradeUrl: "https://go.elementor.com/go-pro-interactions-easing-modal/",
			trackingData: TRACKING_DATA$4
		});
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/components/controls/effect.tsx
	var TRACKING_DATA$3 = {
		target_name: "interactions_effect",
		location_l2: "interactions"
	};
	var EFFECT_OPTIONS = {
		fade: (0, _wordpress_i18n.__)("Fade", "elementor"),
		slide: (0, _wordpress_i18n.__)("Slide", "elementor"),
		scale: (0, _wordpress_i18n.__)("Scale", "elementor"),
		custom: (0, _wordpress_i18n.__)("Custom", "elementor")
	};
	var BASE_EFFECTS = [
		"fade",
		"slide",
		"scale"
	];
	function Effect({ value, onChange }) {
		const baseOptions = Object.fromEntries(Object.entries(EFFECT_OPTIONS).filter(([key]) => BASE_EFFECTS.includes(key)));
		const disabledOptions = Object.fromEntries(Object.entries(EFFECT_OPTIONS).filter(([key]) => !BASE_EFFECTS.includes(key)));
		return /* @__PURE__ */ react.createElement(PromotionSelect, {
			value: value in baseOptions ? value : DEFAULT_VALUES.effect,
			onChange,
			baseOptions,
			disabledOptions,
			promotionLabel: (0, _wordpress_i18n.__)("PRO effects", "elementor"),
			promotionContent: (0, _wordpress_i18n.__)("Upgrade to further customize your animation with opacity, scale, move, rotate and more.", "elementor"),
			upgradeUrl: "https://go.elementor.com/go-pro-interactions-custom-effect-modal/",
			trackingData: TRACKING_DATA$3
		});
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/components/controls/effect-type.tsx
	function EffectType({ value, onChange }) {
		const options = [{
			value: "in",
			label: (0, _wordpress_i18n.__)("In", "elementor"),
			renderContent: () => (0, _wordpress_i18n.__)("In", "elementor"),
			showTooltip: true
		}, {
			value: "out",
			label: (0, _wordpress_i18n.__)("Out", "elementor"),
			renderContent: () => (0, _wordpress_i18n.__)("Out", "elementor"),
			showTooltip: true
		}];
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleButtonGroupUi, {
			items: options,
			exclusive: true,
			onChange,
			value
		});
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/ui/promotion-overlay-layout.tsx
	var OVERLAY_GRID = "1 / 1";
	var CHIP_OFFSET = "50%";
	var PromotionOverlayLayout = (0, react.forwardRef)(({ children, promotionChip }, ref) => /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
		ref,
		sx: {
			display: "grid",
			alignItems: "center"
		}
	}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { gridArea: OVERLAY_GRID } }, children), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
		gridArea: OVERLAY_GRID,
		marginInlineEnd: CHIP_OFFSET,
		justifySelf: "end"
	} }, promotionChip)));

//#endregion
//#region packages/packages/core/editor-interactions/src/components/controls/repeat.tsx
	var TRACKING_DATA$2 = {
		target_name: "interactions_repeat",
		location_l2: "interactions"
	};
	var REPEAT_OPTIONS = {
		times: (0, _wordpress_i18n.__)("times", "elementor"),
		loop: (0, _wordpress_i18n.__)("loop", "elementor")
	};
	var REPEAT_TOOLTIPS = {
		times: (0, _wordpress_i18n.__)("Enable number", "elementor"),
		loop: (0, _wordpress_i18n.__)("Infinite repeat", "elementor")
	};
	function Repeat() {
		const repeatContainerRef = (0, react.useRef)(null);
		const options = [{
			value: REPEAT_OPTIONS.times,
			disabled: true,
			label: REPEAT_TOOLTIPS.times,
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.Number123Icon, { fontSize: size }),
			showTooltip: true
		}, {
			value: REPEAT_OPTIONS.loop,
			disabled: true,
			label: REPEAT_TOOLTIPS.loop,
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.RepeatIcon, { fontSize: size }),
			showTooltip: true
		}];
		return /* @__PURE__ */ react.createElement(PromotionOverlayLayout, {
			ref: repeatContainerRef,
			promotionChip: /* @__PURE__ */ react.createElement(InteractionsPromotionChip, {
				content: (0, _wordpress_i18n.__)("Upgrade to control how many times the animation repeats.", "elementor"),
				upgradeUrl: "https://go.elementor.com/go-pro-interactions-repeat-modal/",
				anchorRef: repeatContainerRef,
				trackingData: TRACKING_DATA$2
			})
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleButtonGroupUi, {
			items: options,
			exclusive: true,
			onChange: () => {},
			value: ""
		}));
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/components/controls/replay.tsx
	var TRACKING_DATA$1 = {
		target_name: "interactions_replay",
		location_l2: "interactions"
	};
	var REPLAY_OPTIONS = {
		no: (0, _wordpress_i18n.__)("No", "elementor"),
		yes: (0, _wordpress_i18n.__)("Yes", "elementor")
	};
	var BASE_REPLAY = ["no"];
	function Replay({ onChange }) {
		const replayContainerRef = (0, react.useRef)(null);
		const options = [{
			value: false,
			disabled: false,
			label: REPLAY_OPTIONS.no,
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.MinusIcon, { fontSize: size }),
			showTooltip: true
		}, {
			value: true,
			disabled: true,
			label: REPLAY_OPTIONS.yes,
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.CheckIcon, { fontSize: size }),
			showTooltip: true
		}];
		return /* @__PURE__ */ react.createElement(PromotionOverlayLayout, {
			ref: replayContainerRef,
			promotionChip: /* @__PURE__ */ react.createElement(InteractionsPromotionChip, {
				content: (0, _wordpress_i18n.__)("Upgrade to run the animation every time its trigger occurs.", "elementor"),
				upgradeUrl: "https://go.elementor.com/go-pro-interactions-replay-modal/",
				anchorRef: replayContainerRef,
				trackingData: TRACKING_DATA$1
			})
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleButtonGroupUi, {
			items: options,
			exclusive: true,
			onChange,
			value: false
		}));
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/components/controls/trigger.tsx
	var TRACKING_DATA = {
		target_name: "interactions_trigger",
		location_l2: "interactions"
	};
	var TRIGGER_OPTIONS = {
		load: (0, _wordpress_i18n.__)("Page load", "elementor"),
		scrollIn: (0, _wordpress_i18n.__)("Scroll into view", "elementor"),
		scrollOn: (0, _wordpress_i18n.__)("While scrolling", "elementor"),
		hover: (0, _wordpress_i18n.__)("On hover", "elementor"),
		click: (0, _wordpress_i18n.__)("On click", "elementor")
	};
	var BASE_TRIGGERS = ["load", "scrollIn"];
	function Trigger({ value, onChange }) {
		const baseOptions = Object.fromEntries(Object.entries(TRIGGER_OPTIONS).filter(([key]) => BASE_TRIGGERS.includes(key)));
		const disabledOptions = Object.fromEntries(Object.entries(TRIGGER_OPTIONS).filter(([key]) => !BASE_TRIGGERS.includes(key)));
		return /* @__PURE__ */ react.createElement(PromotionSelect, {
			value: value in baseOptions ? value : DEFAULT_VALUES.trigger,
			onChange,
			baseOptions,
			disabledOptions,
			promotionLabel: (0, _wordpress_i18n.__)("PRO triggers", "elementor"),
			promotionContent: (0, _wordpress_i18n.__)("Upgrade to unlock more interactions triggers.", "elementor"),
			upgradeUrl: "https://go.elementor.com/go-pro-interactions-triggers-modal/",
			trackingData: TRACKING_DATA
		});
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/hooks/on-duplicate.ts
	function initCleanInteractionIdsOnDuplicate() {
		(0, _elementor_editor_v1_adapters.registerDataHook)("after", "document/elements/duplicate", (_args, result) => {
			if (!result || typeof result === "boolean" && result === false) return;
			(Array.isArray(result) ? result : [result]).forEach((container) => {
				cleanInteractionIdsRecursive(container.id);
			});
			window.dispatchEvent(new CustomEvent("elementor/element/update_interactions"));
		});
	}
	function cleanInteractionIdsRecursive(elementId) {
		const container = (0, _elementor_editor_elements.getContainer)(elementId);
		if (!container) return;
		(0, _elementor_editor_elements.getAllDescendants)(container).forEach((element) => {
			cleanInteractionIds(element.id);
		});
	}
	function cleanInteractionIds(elementId) {
		const container = (0, _elementor_editor_elements.getContainer)(elementId);
		if (!container) return;
		const interactions = container.model.get("interactions");
		if (!interactions || !interactions.items) return;
		const updatedInteractions = structuredClone(interactions);
		updatedInteractions?.items?.forEach((interaction) => {
			if (interaction.$$type === "interaction-item" && interaction.value) interaction.value.interaction_id = createString(generateTempInteractionId());
		});
		container.model.set("interactions", updatedInteractions);
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/mcp/tools/schema.ts
	var baseSchema = {
		trigger: _elementor_schema.z.enum(["load", "scrollIn"]).optional().describe("Event that triggers the animation"),
		effect: _elementor_schema.z.enum([
			"fade",
			"slide",
			"scale"
		]).optional().describe("Animation effect type"),
		effectType: _elementor_schema.z.enum(["in", "out"]).optional().describe("Whether the animation plays in or out"),
		direction: _elementor_schema.z.enum([
			"top",
			"bottom",
			"left",
			"right",
			"top-left",
			"top-right",
			"bottom-left",
			"bottom-right"
		]).optional().describe("Direction of the Animation. Can be one of the following or empty if not needed. At slide effect, this is required field."),
		duration: _elementor_schema.z.number().min(0).max(1e4).optional().describe("Animation duration in milliseconds"),
		delay: _elementor_schema.z.number().min(0).max(1e4).optional().describe("Animation delay in milliseconds"),
		easing: _elementor_schema.z.enum(["easeIn"]).optional().describe("Easing function for the animation. Use \"easeIn\" for free tier."),
		excludedBreakpoints: _elementor_schema.z.array(_elementor_schema.z.enum([
			"widescreen",
			"desktop",
			"laptop",
			"tablet_extra",
			"tablet",
			"mobile_extra",
			"mobile"
		])).optional().describe("Breakpoint IDs on which this interaction is disabled (e.g. [\"mobile\", \"tablet\"]). Fetch the \"elementor://breakpoints/list\" resource to get the valid IDs for the current site. Omit to enable on all breakpoints.")
	};
	var proSchema = {
		trigger: _elementor_schema.z.enum([
			"load",
			"scrollIn",
			"scrollOut",
			"scrollOn",
			"hover",
			"click"
		]).optional().describe("Event that triggers the animation"),
		effect: _elementor_schema.z.enum([
			"fade",
			"slide",
			"scale",
			"custom"
		]).optional().describe("Animation effect type"),
		easing: _elementor_schema.z.enum([
			"easeIn",
			"easeInOut",
			"easeOut",
			"backIn",
			"backInOut",
			"backOut",
			"linear"
		]).optional().describe("Easing function for the animation."),
		customEffects: _elementor_schema.z.object({ keyframes: _elementor_schema.z.array(_elementor_schema.z.object({
			stop: _elementor_schema.z.number().describe("The stop of the keyframe in percent, can be either 0 or 100"),
			value: _elementor_schema.z.object({
				opacity: _elementor_schema.z.number().min(0).max(1).describe("The opacity of the keyframe"),
				scale: _elementor_schema.z.object({
					x: _elementor_schema.z.number().min(0).max(1).describe("The x scale of the keyframe"),
					y: _elementor_schema.z.number().min(0).max(1).describe("The y scale of the keyframe")
				}).optional().describe("The scale of the keyframe"),
				rotate: _elementor_schema.z.object({
					x: _elementor_schema.z.number().min(0).max(360).describe("The x rotate of the keyframe"),
					y: _elementor_schema.z.number().min(0).max(360).describe("The y rotate of the keyframe"),
					z: _elementor_schema.z.number().min(0).max(360).describe("The z rotate of the keyframe")
				}).optional().describe("The rotate of the keyframe"),
				move: _elementor_schema.z.object({
					x: _elementor_schema.z.number().min(0).max(1).describe("The x move of the keyframe"),
					y: _elementor_schema.z.number().min(0).max(1).describe("The y move of the keyframe"),
					z: _elementor_schema.z.number().min(0).max(1).describe("The z move of the keyframe")
				}).optional().describe("The move of the keyframe"),
				skew: _elementor_schema.z.object({
					x: _elementor_schema.z.number().min(0).max(360).describe("The x skew of the keyframe"),
					y: _elementor_schema.z.number().min(0).max(360).describe("The y skew of the keyframe")
				}).optional().describe("The skew of the keyframe")
			})
		})).describe("The keyframes of the custom effect") }).optional().describe("The custom effect to use for the animation")
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/mcp/resources/interactions-schema-resource.ts
	var INTERACTIONS_SCHEMA_URI = "elementor://interactions/schema";
	var initInteractionsSchemaResource = (reg) => {
		const { resource } = reg;
		const schema = (0, _elementor_utils.isProActive)() ? {
			...baseSchema,
			...proSchema
		} : baseSchema;
		resource("interactions-schema", INTERACTIONS_SCHEMA_URI, { description: "Schema describing all available options for element interactions." }, async () => {
			return { contents: [{
				uri: INTERACTIONS_SCHEMA_URI,
				mimeType: "application/json",
				text: JSON.stringify(schema)
			}] };
		});
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/mcp/constants.ts
	var MAX_INTERACTIONS_PER_ELEMENT = 5;
	var EDITOR_INTERACTIONS_MCP_SHORT_DESCRIPTION = `Everything related to V4 ( Atomic ) interactions.
# Interactions
- Create/update/delete interactions
- Get list of interactions
- Get details of an interaction
`;
	var EDITOR_INTERACTIONS_MCP_DESCRIPTION = `MCP server for managing element interactions and animations. Use this to add, modify, or remove animations and motion effects triggered by user events such as page load or scroll-into-view.
		** IMPORTANT **
		Use the "interactions-schema" resource to get the schema of the interactions.
		Actions:
		- get: Read the current interactions on the element.
		- add: Add a new interaction (max ${5} per element).
		- update: Update an existing interaction by its interactionId.
		- delete: Remove a specific interaction by its interactionId.
		- clear: Remove all interactions from the element.

		For add/update, provide: trigger, effect, effectType, direction (required for slide effect), duration, delay, easing.
		Use excludedBreakpoints to disable the animation on specific responsive breakpoints (e.g. ["mobile", "tablet"]).
		Example Get Request:
		{
			"elementId": "123",
			"action": "get",
			"interactionId": "123",
			"animationData": {
				"trigger": "click",
				"effect": "fade",
			}
		}
		Example Add Request:
		{
			"elementId": "123",
			"action": "add",
			"animationData": {
				"effectType": "in",
				"direction": "top",
				"trigger": "click",
				"effect": "fade",
				"duration": 1000,
				"delay": 0,
				"easing": "easeIn",
				"excludedBreakpoints": ["mobile", "tablet"],
			}
		}
		Example Update Request:
		{
			"elementId": "123",
			"action": "update",
			"interactionId": "123",
			"animationData": {
				"trigger": "click",
				"effect": "fade",
			}
		}
		Example Delete Request:
		{
			"elementId": "123",
			"action": "delete",
			"interactionId": "123",
		}
		Example Clear Request:
		{
			"elementId": "123",
			"action": "clear",
		}`;

//#endregion
//#region packages/packages/core/editor-interactions/src/mcp/tools/manage-element-interaction-tool.ts
	var EMPTY_INTERACTIONS = {
		version: 1,
		items: []
	};
	var EFFECTS_WITHOUT_TYPE = ["custom"];
	var BREAKPOINTS_SCHEMA_URI = "elementor://breakpoints/list";
	var initManageElementInteractionTool = (reg) => {
		const { addTool } = reg;
		const extendedSchema = (0, _elementor_utils.isProActive)() ? {
			...baseSchema,
			...proSchema
		} : baseSchema;
		addTool({
			name: "manage-element-interaction",
			description: `Manage the element interaction.`,
			schema: {
				elementId: _elementor_schema.z.string().describe("The ID of the element to read or modify interactions on"),
				action: _elementor_schema.z.enum([
					"get",
					"add",
					"update",
					"delete",
					"clear"
				]).describe("Operation to perform. Use \"get\" first to inspect existing interactions."),
				interactionId: _elementor_schema.z.string().optional().describe("Interaction ID — required for update and delete. Obtain from a prior \"get\" call."),
				...extendedSchema
			},
			requiredResources: [{
				uri: INTERACTIONS_SCHEMA_URI,
				description: "Interactions schema with all available options"
			}, {
				uri: BREAKPOINTS_SCHEMA_URI,
				description: "Available breakpoint IDs for excludedBreakpoints"
			}],
			isDestructive: true,
			outputSchema: {
				success: _elementor_schema.z.boolean().describe("Whether the action was successful"),
				action: _elementor_schema.z.enum([
					"get",
					"add",
					"update",
					"delete",
					"clear"
				]).describe("Operation to perform. Use \"get\" first to inspect existing interactions."),
				elementId: _elementor_schema.z.string().optional().describe("The ID of the element to read or modify interactions on"),
				interactions: _elementor_schema.z.array(_elementor_schema.z.any()).optional().describe("The interactions on the element"),
				count: _elementor_schema.z.number().optional().describe("The number of interactions on the element")
			},
			handler: (input) => {
				const { elementId, action, interactionId, ...animationData } = input;
				const { effectType, ...restAnimationData } = animationData;
				const effect = restAnimationData.effect;
				const resolvedType = effectType ?? (effect && !EFFECTS_WITHOUT_TYPE.includes(effect) ? "in" : void 0);
				const currentInteractions = interactionsRepository.all().find((data) => data.elementId === elementId)?.interactions ?? EMPTY_INTERACTIONS;
				if (action === "get") {
					const summary = currentInteractions.items.map((item) => {
						const { value } = item;
						const animValue = value.animation.value;
						const timingValue = animValue.timing_config.value;
						const configValue = animValue.config.value;
						return {
							id: extractString(value.interaction_id),
							trigger: extractString(value.trigger),
							effect: extractString(animValue.effect),
							effectType: extractString(animValue.type),
							direction: extractString(animValue.direction),
							duration: extractSize(timingValue.duration),
							delay: extractSize(timingValue.delay),
							easing: extractString(configValue.easing),
							excludedBreakpoints: extractExcludedBreakpoints(value.breakpoints)
						};
					});
					return {
						success: true,
						elementId,
						action,
						interactions: summary,
						count: summary.length
					};
				}
				let updatedItems = [...currentInteractions.items];
				switch (action) {
					case "add": {
						if (updatedItems.length >= 5) throw new Error(`Cannot add more than ${5} interactions per element. Current count: ${updatedItems.length}. Delete an existing interaction first.`);
						const newItem = createInteractionItem({
							interactionId: generateTempInteractionId(),
							...restAnimationData,
							type: resolvedType
						});
						updatedItems = [...updatedItems, newItem];
						break;
					}
					case "update": {
						if (!interactionId) throw new Error("interactionId is required for the update action.");
						const itemIndex = updatedItems.findIndex((item) => extractString(item.value.interaction_id) === interactionId);
						if (itemIndex === -1) throw new Error(`Interaction with ID "${interactionId}" not found on element "${elementId}".`);
						const updatedItem = createInteractionItem({
							interactionId,
							...restAnimationData,
							type: resolvedType
						});
						updatedItems = [
							...updatedItems.slice(0, itemIndex),
							updatedItem,
							...updatedItems.slice(itemIndex + 1)
						];
						break;
					}
					case "delete": {
						if (!interactionId) throw new Error("interactionId is required for the delete action.");
						const beforeCount = updatedItems.length;
						updatedItems = updatedItems.filter((item) => extractString(item.value.interaction_id) !== interactionId);
						if (updatedItems.length === beforeCount) throw new Error(`Interaction with ID "${interactionId}" not found on element "${elementId}".`);
						break;
					}
					case "clear":
						updatedItems = [];
						break;
				}
				const updatedInteractions = {
					...currentInteractions,
					items: updatedItems
				};
				try {
					(0, _elementor_editor_elements.updateElementInteractions)({
						elementId,
						interactions: updatedInteractions
					});
				} catch (error) {
					throw new Error(`Failed to update interactions for element "${elementId}": ${error instanceof Error ? error.message : "Unknown error"}`);
				}
				return {
					success: true,
					action,
					elementId,
					count: updatedItems.length
				};
			}
		});
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/mcp/index.ts
	var initMcpInteractions = (reg) => {
		const { setMCPDescription } = reg;
		setMCPDescription(`Everything related to V4 ( Atomic ) interactions.
# Interactions
- Create/update/delete interactions
- Get list of interactions
- Get details of an interaction
`);
		initInteractionsSchemaResource(reg);
		initManageElementInteractionTool(reg);
	};

//#endregion
//#region packages/packages/core/editor-interactions/src/init.ts
	function init() {
		try {
			interactionsRepository.register(documentElementsInteractionsProvider);
			initCleanInteractionIdsOnDuplicate();
			initPasteInteractionsCommand();
			registerInteractionsControl({
				type: "trigger",
				component: Trigger,
				options: ["load", "scrollIn"]
			});
			registerInteractionsControl({
				type: "easing",
				component: Easing,
				options: ["easeIn"]
			});
			registerInteractionsControl({
				type: "replay",
				component: Replay,
				options: ["no"]
			});
			registerInteractionsControl({
				type: "effectType",
				component: EffectType,
				options: ["in", "out"]
			});
			registerInteractionsControl({
				type: "direction",
				component: Direction,
				options: [
					"top",
					"bottom",
					"left",
					"right"
				]
			});
			registerInteractionsControl({
				type: "effect",
				component: Effect,
				options: [
					"fade",
					"slide",
					"scale"
				]
			});
			registerInteractionsControl({
				type: "repeat",
				component: Repeat
			});
			initMcpInteractions((0, _elementor_editor_mcp.getMCPByDomain)("interactions", {
				docs: EDITOR_INTERACTIONS_MCP_DESCRIPTION,
				instructions: EDITOR_INTERACTIONS_MCP_SHORT_DESCRIPTION
			}));
		} catch (error) {
			throw error;
		}
	}

//#endregion
//#region packages/packages/core/editor-interactions/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		BASE_EASINGS: () => BASE_EASINGS,
		BASE_EFFECTS: () => BASE_EFFECTS,
		BASE_REPLAY: () => BASE_REPLAY,
		BASE_TRIGGERS: () => BASE_TRIGGERS,
		DEFAULT_VALUES: () => DEFAULT_VALUES,
		EASING_OPTIONS: () => EASING_OPTIONS,
		EFFECT_OPTIONS: () => EFFECT_OPTIONS,
		ELEMENTS_INTERACTIONS_PROVIDER_KEY_PREFIX: () => ELEMENTS_INTERACTIONS_PROVIDER_KEY_PREFIX,
		EmptyState: () => EmptyState,
		InteractionsTab: () => InteractionsTab,
		REPEAT_OPTIONS: () => REPEAT_OPTIONS,
		REPEAT_TOOLTIPS: () => REPEAT_TOOLTIPS,
		REPLAY_OPTIONS: () => REPLAY_OPTIONS,
		SCROLL_INTERACTION_EVENT: () => SCROLL_INTERACTION_EVENT,
		TRIGGER_OPTIONS: () => TRIGGER_OPTIONS,
		buildDisplayLabel: () => buildDisplayLabel,
		createAnimationPreset: () => createAnimationPreset,
		createBoolean: () => createBoolean,
		createConfig: () => createConfig,
		createDefaultInteractionItem: () => createDefaultInteractionItem,
		createDefaultInteractions: () => createDefaultInteractions,
		createExcludedBreakpoints: () => createExcludedBreakpoints,
		createInteractionBreakpoints: () => createInteractionBreakpoints,
		createInteractionItem: () => createInteractionItem,
		createInteractionsProvider: () => createInteractionsProvider,
		createNumber: () => createNumber,
		createString: () => createString,
		createTimingConfig: () => createTimingConfig,
		dispatchScrollInteraction: () => dispatchScrollInteraction,
		extractBoolean: () => extractBoolean,
		extractExcludedBreakpoints: () => extractExcludedBreakpoints,
		extractScrollOverlayParams: () => extractScrollOverlayParams,
		extractSize: () => extractSize,
		extractString: () => extractString,
		formatSizeValue: () => formatSizeValue,
		generateTempInteractionId: () => generateTempInteractionId,
		getInteractionsConfig: () => getInteractionsConfig,
		init: () => init,
		interactionsRepository: () => interactionsRepository,
		isTempId: () => isTempId,
		parseSizeValue: () => parseSizeValue,
		registerInteractionsControl: () => registerInteractionsControl,
		resolveDirection: () => resolveDirection,
		syncGridOverlay: () => syncGridOverlay,
		useElementInteractions: () => useElementInteractions
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorInteractions = src_exports;

//#endregion
})(React, elementorV2.icons, elementorV2.ui, wp.i18n, elementorV2.session, elementorV2.editorElements, elementorV2.editorV1Adapters, elementorV2.editorProps, elementorV2.editorControls, elementorV2.events, elementorV2.editorResponsive, elementorV2.editorMcp, elementorV2.editorUi, elementorV2.utils, elementorV2.schema);
window.elementorV2.editorInteractions?.init?.();
//# sourceMappingURL=editor-interactions.js.map