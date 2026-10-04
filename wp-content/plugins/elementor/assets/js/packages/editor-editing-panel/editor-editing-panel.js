(function(react, _elementor_ui, _elementor_editor_elements, _elementor_editor_props, _elementor_locations, _elementor_session, _elementor_editor_styles_repository, _elementor_utils, _elementor_editor_controls, _elementor_icons, _elementor_editor_ui, _wordpress_i18n, _elementor_editor_styles, _elementor_editor_v1_adapters, _elementor_editor_documents, _elementor_editor_responsive, _elementor_editor_panels, _elementor_menus, _elementor_editor_interactions, _elementor_editor_variables, _elementor_editor_canvas, _elementor_editor, _elementor_schema, _elementor_wp_media) {

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

//#region packages/packages/core/editor-editing-panel/src/components/creatable-autocomplete/autocomplete-option-internal-properties.ts
	function addGroupToOptions(options, pluralEntityName) {
		return options.map((option) => {
			return {
				...option,
				_group: `Existing ${pluralEntityName ?? "options"}`
			};
		});
	}
	function removeInternalKeys(option) {
		const { _group, _action, ...rest } = option;
		return rest;
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/creatable-autocomplete/use-autocomplete-change.ts
	function useAutocompleteChange(params) {
		const { options, onSelect, createOption, setInputValue, closeDropdown } = params;
		if (!onSelect && !createOption) return;
		const handleChange = async (_, selectedOrInputValue, reason, details) => {
			const changedOption = details?.option;
			if (!changedOption || typeof changedOption === "object" && changedOption.fixed) return;
			const selectedOptions = selectedOrInputValue.filter((option) => typeof option !== "string");
			switch (reason) {
				case "removeOption":
					updateSelectedOptions(selectedOptions, "removeOption", changedOption);
					break;
				case "selectOption": {
					const selectedOption = changedOption;
					if (selectedOption._action === "create") {
						const newOption = selectedOption.value;
						return createOption?.(newOption);
					}
					updateSelectedOptions(selectedOptions, "selectOption", selectedOption);
					break;
				}
				case "createOption": {
					const inputValue = changedOption;
					const matchingOption = options.find((option) => option.label.toLocaleLowerCase() === inputValue.toLocaleLowerCase());
					if (matchingOption) {
						selectedOptions.push(matchingOption);
						updateSelectedOptions(selectedOptions, "selectOption", matchingOption);
					} else return createOption?.(inputValue);
					break;
				}
			}
			setInputValue("");
			closeDropdown();
		};
		return handleChange;
		function updateSelectedOptions(selectedOptions, reason, changedOption) {
			onSelect?.(selectedOptions.map((option) => removeInternalKeys(option)), reason, removeInternalKeys(changedOption));
		}
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/creatable-autocomplete/use-autocomplete-states.ts
	function useInputState(validate) {
		const [inputValue, setInputValue] = (0, react.useState)("");
		const [error, setError] = (0, react.useState)(null);
		const handleInputChange = (event) => {
			const { value } = event.target;
			setInputValue(value);
			if (!validate) return;
			if (!value) {
				setError(null);
				return;
			}
			const { isValid, errorMessage } = validate(value, "inputChange");
			if (isValid) setError(null);
			else setError(errorMessage);
		};
		const handleInputBlur = () => {
			setInputValue("");
			setError(null);
		};
		return {
			inputValue,
			setInputValue,
			error,
			setError,
			inputHandlers: {
				onChange: handleInputChange,
				onBlur: handleInputBlur
			}
		};
	}
	function useOpenState(initialOpen = false) {
		const [open, setOpen] = (0, react.useState)(initialOpen);
		const openDropdown = () => setOpen(true);
		const closeDropdown = () => setOpen(false);
		return {
			open,
			openDropdown,
			closeDropdown
		};
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/creatable-autocomplete/use-create-option.ts
	function useCreateOption(params) {
		const { onCreate, validate, setInputValue, setError, closeDropdown } = params;
		const [loading, setLoading] = (0, react.useState)(false);
		if (!onCreate) return {
			createOption: null,
			loading: false
		};
		const createOption = async (value) => {
			setLoading(true);
			if (validate) {
				const { isValid, errorMessage } = validate(value, "create");
				if (!isValid) {
					setError(errorMessage);
					setLoading(false);
					return;
				}
			}
			try {
				setInputValue("");
				closeDropdown();
				await onCreate(value);
			} catch {} finally {
				setLoading(false);
			}
		};
		return {
			createOption,
			loading
		};
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/creatable-autocomplete/use-filter-options.ts
	var STRIP_NON_CLASS_CHARS = /[^a-zA-Z0-9_-]/g;
	function normalizeClassSearch(value) {
		return value.replace(STRIP_NON_CLASS_CHARS, "").toLowerCase();
	}
	function useFilterOptions(parameters) {
		const { options, selected, onCreate, entityName } = parameters;
		const filter = (0, _elementor_ui.createFilterOptions)({ matchFrom: "any" });
		const filterOptions = (optionList, params) => {
			const selectedValues = selected.map((option) => option.value);
			const filteredOptions = filter(optionList.filter((option) => !selectedValues.includes(option.value)), {
				...params,
				inputValue: normalizeClassSearch(params.inputValue)
			});
			const isExisting = options.some((option) => params.inputValue === option.label);
			if (Boolean(onCreate) && params.inputValue !== "" && !selectedValues.includes(params.inputValue) && !isExisting) filteredOptions.unshift({
				label: `Create "${params.inputValue}"`,
				value: params.inputValue,
				_group: `Create a new ${entityName?.singular ?? "option"}`,
				key: `create-${params.inputValue}`,
				_action: "create"
			});
			return filteredOptions;
		};
		return filterOptions;
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/creatable-autocomplete/creatable-autocomplete.tsx
	var MIN_INPUT_LENGTH = 2;
	var CreatableAutocomplete = react.forwardRef(CreatableAutocompleteInner);
	function CreatableAutocompleteInner({ selected, options, entityName, onSelect, placeholder, onCreate, validate, renderEmptyState, ...props }, ref) {
		const { inputValue, setInputValue, error, setError, inputHandlers } = useInputState(validate);
		const { open, openDropdown, closeDropdown } = useOpenState(props.open);
		const { createOption, loading } = useCreateOption({
			onCreate,
			validate,
			setInputValue,
			setError,
			closeDropdown
		});
		const [internalOptions, internalSelected] = (0, react.useMemo)(() => [options, selected].map((optionsArr) => addGroupToOptions(optionsArr, entityName?.plural)), [
			options,
			selected,
			entityName?.plural
		]);
		const handleChange = useAutocompleteChange({
			options: internalOptions,
			onSelect,
			createOption,
			setInputValue,
			closeDropdown
		});
		const filterOptions = useFilterOptions({
			options,
			selected,
			onCreate,
			entityName
		});
		const freeSolo = Boolean(onCreate) || inputValue.length < MIN_INPUT_LENGTH || void 0;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Autocomplete, {
			renderTags: (tagValue, getTagProps) => {
				return tagValue.map((option, index) => /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
					size: "tiny",
					...getTagProps({ index }),
					key: option.key ?? option.value ?? option.label,
					label: option.label
				}));
			},
			...props,
			ref,
			freeSolo,
			forcePopupIcon: false,
			multiple: true,
			clearOnBlur: true,
			selectOnFocus: true,
			disableClearable: true,
			handleHomeEndKeys: true,
			disabled: loading,
			open,
			onOpen: openDropdown,
			onClose: closeDropdown,
			disableCloseOnSelect: true,
			value: internalSelected,
			options: internalOptions,
			ListboxComponent: error ? react.forwardRef((_, errorTextRef) => /* @__PURE__ */ react.createElement(ErrorText, {
				ref: errorTextRef,
				error
			})) : void 0,
			renderGroup: (params) => /* @__PURE__ */ react.createElement(Group, { ...params }),
			inputValue,
			renderInput: (params) => {
				return /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
					...params,
					error: Boolean(error),
					placeholder,
					...inputHandlers,
					sx: (theme) => ({ ".MuiAutocomplete-inputRoot.MuiInputBase-adornedStart": {
						paddingLeft: theme.spacing(.25),
						paddingRight: theme.spacing(.25)
					} })
				});
			},
			onChange: handleChange,
			getOptionLabel: (option) => typeof option === "string" ? option : option.label,
			getOptionKey: (option) => {
				if (typeof option === "string") return option;
				return option.key ?? option.value ?? option.label;
			},
			filterOptions,
			groupBy: (option) => option._group ?? "",
			renderOption: (optionProps, option) => {
				const { _group, label } = option;
				return /* @__PURE__ */ react.createElement("li", {
					...optionProps,
					style: {
						display: "block",
						textOverflow: "ellipsis"
					},
					"data-group": _group
				}, label);
			},
			noOptionsText: renderEmptyState?.({
				searchValue: inputValue,
				onClear: () => {
					setInputValue("");
					closeDropdown();
				}
			}),
			isOptionEqualToValue: (option, value) => {
				if (typeof option === "string") return option === value;
				return option.value === value.value;
			}
		});
	}
	var Group = (params) => {
		const id = `combobox-group-${(0, react.useId)().replace(/:/g, "_")}`;
		return /* @__PURE__ */ react.createElement(StyledGroup, {
			role: "group",
			"aria-labelledby": id
		}, /* @__PURE__ */ react.createElement(StyledGroupHeader, { id }, " ", params.group), /* @__PURE__ */ react.createElement(StyledGroupItems, { role: "listbox" }, params.children));
	};
	var ErrorText = react.forwardRef(({ error = "error" }, ref) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			ref,
			sx: (theme) => ({ padding: theme.spacing(2) })
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			sx: {
				color: "error.main",
				display: "inline-block"
			}
		}, error));
	});
	var StyledGroup = (0, _elementor_ui.styled)("li")`
	&:not( :last-of-type ) {
		border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
	}
`;
	var StyledGroupHeader = (0, _elementor_ui.styled)(_elementor_ui.Box)(({ theme }) => ({
		position: "sticky",
		top: "-8px",
		padding: theme.spacing(1, 2),
		color: theme.palette.text.tertiary,
		backgroundColor: theme.palette.primary.contrastText
	}));
	var StyledGroupItems = (0, _elementor_ui.styled)("ul")`
	padding: 0;
`;

//#endregion
//#region packages/packages/core/editor-editing-panel/src/contexts/classes-prop-context.tsx
	var Context$3 = (0, react.createContext)(null);
	function ClassesPropProvider({ children, prop }) {
		return /* @__PURE__ */ react.createElement(Context$3.Provider, { value: { prop } }, children);
	}
	function useClassesProp() {
		const context = (0, react.useContext)(Context$3);
		if (!context) throw new Error("useClassesProp must be used within a ClassesPropProvider");
		return context.prop;
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/contexts/element-context.tsx
	var Context$2 = (0, react.createContext)(null);
	function ElementProvider({ children, element, elementType, settings }) {
		return /* @__PURE__ */ react.createElement(Context$2.Provider, { value: {
			element,
			elementType,
			settings
		} }, children);
	}
	function useElement() {
		const context = (0, react.useContext)(Context$2);
		if (!context) throw new Error("useElement must be used within a ElementProvider");
		return context;
	}
	function usePanelElementSetting(propKey) {
		const context = (0, react.useContext)(Context$2);
		if (!context) throw new Error("usePanelElementSetting must be used within a ElementProvider");
		return context.settings[propKey] ?? null;
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/errors.ts
	var ControlTypeNotFoundError = (0, _elementor_utils.createError)({
		code: "control_type_not_found",
		message: "Control type not found."
	});
	var ControlTypeAlreadyRegisteredError = (0, _elementor_utils.createError)({
		code: "control_type_already_registered",
		message: "Control type is already registered."
	});
	var ControlTypeNotRegisteredError = (0, _elementor_utils.createError)({
		code: "control_type_not_registered",
		message: "Control type is not registered."
	});
	var StylesProviderNotFoundError = (0, _elementor_utils.createError)({
		code: "provider_not_found",
		message: "Styles provider not found."
	});
	var StylesProviderCannotUpdatePropsError = (0, _elementor_utils.createError)({
		code: "provider_cannot_update_props",
		message: "Styles provider doesn't support updating props."
	});
	var StyleNotFoundUnderProviderError = (0, _elementor_utils.createError)({
		code: "style_not_found_under_provider",
		message: "Style not found under the provider."
	});

//#endregion
//#region packages/packages/core/editor-editing-panel/src/contexts/style-context.tsx
	var Context$1 = (0, react.createContext)(null);
	function StyleProvider({ children, ...props }) {
		const provider = props.id === null ? null : getProviderByStyleId(props.id);
		const { userCan } = (0, _elementor_editor_styles_repository.useUserStylesCapability)();
		if (props.id && !provider) throw new StylesProviderNotFoundError({ context: { styleId: props.id } });
		const canEdit = userCan(provider?.getKey() ?? "").updateProps;
		return /* @__PURE__ */ react.createElement(Context$1.Provider, { value: {
			...props,
			provider,
			canEdit
		} }, children);
	}
	function useStyle() {
		const context = (0, react.useContext)(Context$1);
		if (!context) throw new Error("useStyle must be used within a StyleProvider");
		return context;
	}
	function getProviderByStyleId(styleId) {
		return _elementor_editor_styles_repository.stylesRepository.getProviders().find((provider) => {
			return provider.actions.all().find((style) => style.id === styleId);
		}) ?? null;
	}
	function useIsStyle() {
		return !!(0, react.useContext)(Context$1);
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/css-classes/consts.ts
	var PENDING_CLASS_RENAME_SESSION_KEY = "pending-class-rename-id";

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/css-classes/css-class-convert-local.tsx
	var { Slot: CssClassConvertSlot, inject: injectIntoCssClassConvert } = (0, _elementor_locations.createLocation)();
	var CssClassConvert = (props) => {
		const { element } = useElement();
		const elementId = element.id;
		const currentClassesProp = useClassesProp();
		const { setId: setActiveId } = useStyle();
		const [, saveValue] = (0, _elementor_session.useSessionStorage)(PENDING_CLASS_RENAME_SESSION_KEY, "app");
		const successCallback = (newId) => {
			if (!props.styleDef) throw new Error("Style definition is required for converting local class to global class.");
			onConvert({
				newId,
				elementId,
				classesProp: currentClassesProp,
				styleDef: props.styleDef
			});
			saveValue(newId);
			setActiveId(newId);
			props.closeMenu();
		};
		return /* @__PURE__ */ react.createElement(CssClassConvertSlot, {
			canConvert: !!props.canConvert,
			styleDef: props.styleDef,
			successCallback
		});
	};
	var onConvert = (opts) => {
		const { newId, elementId, classesProp } = opts;
		(0, _elementor_editor_elements.deleteElementStyle)(elementId, opts.styleDef.id);
		const currentUsedClasses = (0, _elementor_editor_elements.getElementSetting)(elementId, classesProp) || { value: [] };
		(0, _elementor_editor_elements.updateElementSettings)({
			id: elementId,
			props: { [classesProp]: _elementor_editor_props.classesPropTypeUtil.create([newId, ...currentUsedClasses.value]) },
			withHistory: false
		});
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/control-label.tsx
	var ControlLabel = ({ children, infoTooltip }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			justifyItems: "start",
			gap: .25
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, null, children), infoTooltip && /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: infoTooltip,
			placement: "top"
		}, /* @__PURE__ */ react.createElement(_elementor_icons.InfoCircleIcon, { fontSize: "tiny" })), /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlAdornments, null));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/provider-colors-registry.ts
	var DEFAULT_COLORS = {
		name: "default",
		getThemeColor: null
	};
	var providerColorsRegistry = /* @__PURE__ */ new Map();
	var registerStyleProviderToColors = (provider, colors) => {
		providerColorsRegistry.set(provider, colors);
	};
	var getStyleProviderColors = (provider) => providerColorsRegistry.get(provider) ?? DEFAULT_COLORS;

//#endregion
//#region packages/packages/core/editor-editing-panel/src/utils/get-styles-provider-color.ts
	var getStylesProviderColorName = (provider) => {
		if (!provider || provider === _elementor_editor_styles_repository.ELEMENTS_BASE_STYLES_PROVIDER_KEY) return "default";
		if ((0, _elementor_editor_styles_repository.isElementsStylesProvider)(provider)) return "accent";
		return getStyleProviderColors(provider).name;
	};
	var getStylesProviderThemeColor = (provider) => {
		if (!provider || provider === _elementor_editor_styles_repository.ELEMENTS_BASE_STYLES_PROVIDER_KEY) return null;
		if ((0, _elementor_editor_styles_repository.isElementsStylesProvider)(provider)) return (theme) => theme.palette.accent.main;
		return getStyleProviderColors(provider).getThemeColor;
	};
	function getTempStylesProviderThemeColor(provider) {
		if ((0, _elementor_editor_styles_repository.isElementsStylesProvider)(provider)) return (theme) => theme.palette.primary.main;
		return getStylesProviderThemeColor(provider);
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/utils/tracking/subscribe.ts
	var trackStyles = (provider, event, data) => {
		_elementor_editor_styles_repository.stylesRepository.getProviderByKey(provider)?.actions.tracking?.({
			event,
			...data
		});
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/css-classes/css-class-context.tsx
	var CssClassContext = (0, react.createContext)(null);
	var useCssClass = () => {
		const context = (0, react.useContext)(CssClassContext);
		if (!context) throw new Error("useCssClass must be used within a CssClassProvider");
		return context;
	};
	function CssClassProvider({ children, ...contextValue }) {
		return /* @__PURE__ */ react.createElement(CssClassContext.Provider, { value: contextValue }, children);
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-indicator.tsx
	var StyleIndicator = (0, _elementor_ui.styled)("div", { shouldForwardProp: (prop) => !["isOverridden", "getColor"].includes(prop) })`
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background-color: ${({ theme, isOverridden, getColor }) => {
		if (isOverridden) return theme.palette.warning.light;
		return getColor?.(theme) ?? theme.palette.text.disabled;
	}};
`;

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-states/pseudo-states.ts
	var DEFAULT_PSEUDO_STATES = [
		{
			key: "normal",
			value: null,
			label: (0, _wordpress_i18n.__)("normal", "elementor")
		},
		{
			key: "hover",
			value: "hover",
			label: (0, _wordpress_i18n.__)("hover", "elementor")
		},
		{
			key: "focus",
			value: "focus",
			label: (0, _wordpress_i18n.__)("focus", "elementor")
		},
		{
			key: "active",
			value: "active",
			label: (0, _wordpress_i18n.__)("active", "elementor")
		}
	];

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-states/use-pseudo-states.ts
	function usePseudoStates() {
		const { elementType } = useElement();
		const { pseudoStates = [] } = elementType;
		const additionalStates = pseudoStates.map(({ name, value }) => ({
			key: value,
			value,
			label: name
		}));
		return [...DEFAULT_PSEUDO_STATES, ...additionalStates];
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/apply-unapply-actions.ts
	function doGetAppliedClasses(elementId, classesPropType = "classes") {
		return (0, _elementor_editor_elements.getElementSetting)(elementId, classesPropType)?.value || [];
	}
	function doApplyClasses(elementId, classIds, classesPropType = "classes") {
		(0, _elementor_editor_elements.updateElementSettings)({
			id: elementId,
			props: { [classesPropType]: _elementor_editor_props.classesPropTypeUtil.create(classIds) },
			withHistory: false
		});
		(0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
		ensureClassesAreLoaded(classIds);
	}
	function ensureClassesAreLoaded(classIds) {
		const providers = _elementor_editor_styles_repository.stylesRepository.getProviders();
		classIds.forEach((classId) => {
			_elementor_editor_styles_repository.stylesRepository.getProviderByKey(classId)?.actions.get(classId);
			const owningProvider = providers.find((provider) => provider.actions.all().some((style) => style.id === classId));
			try {
				owningProvider?.actions.get(classId);
			} catch {}
		});
	}
	function doUnapplyClass(elementId, classId, classesPropType = "classes") {
		const appliedClasses = (0, _elementor_editor_elements.getElementSetting)(elementId, classesPropType)?.value || [];
		if (!appliedClasses.includes(classId)) return false;
		doApplyClasses(elementId, appliedClasses.filter((id) => id !== classId), classesPropType);
		return true;
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/css-classes/use-apply-and-unapply-class.ts
	function useUndoableApplyClass() {
		const { id: activeId, setId: setActiveId } = useStyle();
		const { element } = useElement();
		const applyClass = useApplyClass();
		const unapplyClasses = useUnapplyClasses();
		return (0, react.useMemo)(() => {
			return (0, _elementor_editor_v1_adapters.undoable)({
				do: ({ classId }) => {
					const prevActiveId = activeId;
					applyClass(classId);
					return prevActiveId;
				},
				undo: ({ classId }, prevActiveId) => {
					unapplyClasses([classId]);
					setActiveId(prevActiveId);
				}
			}, {
				title: (0, _elementor_editor_elements.getElementLabel)(element.id),
				subtitle: ({ classLabel }) => {
					return (0, _wordpress_i18n.__)(`class %s applied`, "elementor").replace("%s", classLabel);
				}
			});
		}, [
			activeId,
			applyClass,
			element.id,
			unapplyClasses,
			setActiveId
		]);
	}
	function useUndoableUnapplyClass() {
		const { id: activeId, setId: setActiveId } = useStyle();
		const { element } = useElement();
		const applyClass = useApplyClass();
		const unapplyClasses = useUnapplyClasses();
		return (0, react.useMemo)(() => {
			return (0, _elementor_editor_v1_adapters.undoable)({
				do: ({ classId }) => {
					const prevActiveId = activeId;
					unapplyClasses([classId]);
					return prevActiveId;
				},
				undo: ({ classId }, prevActiveId) => {
					applyClass(classId);
					setActiveId(prevActiveId);
				}
			}, {
				title: (0, _elementor_editor_elements.getElementLabel)(element.id),
				subtitle: ({ classLabel }) => {
					return (0, _wordpress_i18n.__)(`class %s removed`, "elementor").replace("%s", classLabel);
				}
			});
		}, [
			activeId,
			applyClass,
			element.id,
			unapplyClasses,
			setActiveId
		]);
	}
	function useCreateAndApplyClass() {
		const { id: activeId, setId: setActiveId } = useStyle();
		const [provider, createAction] = (0, _elementor_editor_styles_repository.useGetStylesRepositoryCreateAction)() ?? [null, null];
		const deleteAction = provider?.actions.delete;
		const applyClass = useApplyClass();
		const unapplyClasses = useUnapplyClasses();
		const undoableCreateAndApply = (0, react.useMemo)(() => {
			if (!provider || !createAction) return;
			return (0, _elementor_editor_v1_adapters.undoable)({
				do: ({ classLabel }) => {
					const prevActiveId = activeId;
					const createdId = createAction(classLabel);
					applyClass(createdId);
					return {
						prevActiveId,
						createdId
					};
				},
				undo: (_, { prevActiveId, createdId }) => {
					unapplyClasses([createdId]);
					deleteAction?.(createdId);
					setActiveId(prevActiveId);
				},
				redo: ({ classLabel }, { createdId }) => {
					const prevActiveId = activeId;
					createAction(classLabel, [], createdId);
					applyClass(createdId);
					return {
						prevActiveId,
						createdId
					};
				}
			}, {
				title: (0, _wordpress_i18n.__)("Class", "elementor"),
				subtitle: ({ classLabel }) => {
					return (0, _wordpress_i18n.__)(`%s created`, "elementor").replace("%s", classLabel);
				}
			});
		}, [
			activeId,
			applyClass,
			createAction,
			deleteAction,
			provider,
			setActiveId,
			unapplyClasses
		]);
		if (!provider || !undoableCreateAndApply) return [null, null];
		return [provider, undoableCreateAndApply];
	}
	function useApplyClass() {
		const { element } = useElement();
		const { setId: setActiveId } = useStyle();
		const { setClasses, getAppliedClasses } = useClasses();
		return (0, react.useCallback)((classIDToApply) => {
			const appliedClasses = getAppliedClasses();
			if (appliedClasses.includes(classIDToApply)) throw new Error(`Class ${classIDToApply} is already applied to element ${element.id}, cannot re-apply.`);
			const updatedClassesIds = [...appliedClasses, classIDToApply];
			setClasses(updatedClassesIds);
			setActiveId(classIDToApply);
		}, [
			element.id,
			getAppliedClasses,
			setActiveId,
			setClasses
		]);
	}
	function useUnapplyClasses() {
		const { element } = useElement();
		const { id: activeId, setId: setActiveId } = useStyle();
		const { setClasses, getAppliedClasses } = useClasses();
		return (0, react.useCallback)((classIDsToUnapply) => {
			const appliedClasses = getAppliedClasses();
			if (!classIDsToUnapply.every((classID) => appliedClasses.includes(classID))) {
				const missingClasses = classIDsToUnapply.filter((classID) => !appliedClasses.includes(classID));
				throw new Error(`Classes ${missingClasses.join(", ")} are not applied to element ${element.id}, cannot unapply them.`);
			}
			const updatedClassesIds = appliedClasses.filter((id) => !classIDsToUnapply.includes(id));
			setClasses(updatedClassesIds);
			if (activeId && classIDsToUnapply.includes(activeId)) setActiveId(updatedClassesIds[0] ?? null);
		}, [
			activeId,
			element.id,
			getAppliedClasses,
			setActiveId,
			setClasses
		]);
	}
	function useClasses() {
		const { element } = useElement();
		const currentClassesProp = useClassesProp();
		return (0, react.useMemo)(() => {
			const setClasses = (ids) => {
				doApplyClasses(element.id, ids, currentClassesProp);
			};
			const getAppliedClasses = () => doGetAppliedClasses(element.id, currentClassesProp) || [];
			return {
				setClasses,
				getAppliedClasses
			};
		}, [currentClassesProp, element.id]);
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/css-classes/duplicate-class-menu-item.tsx
	var DUPLICATE_LABEL_PREFIX = "copy-of";
	function getUniqueDuplicateLabel(originalLabel, existingLabels) {
		let newLabel = `${DUPLICATE_LABEL_PREFIX}-${originalLabel}`;
		let counter = 2;
		while (existingLabels.includes(newLabel)) {
			newLabel = `${DUPLICATE_LABEL_PREFIX}-${originalLabel}-${counter}`;
			counter++;
		}
		return newLabel;
	}
	function DuplicateClassMenuItem({ closeMenu }) {
		const { id: classId, provider } = useCssClass();
		const { userCan } = (0, _elementor_editor_styles_repository.useUserStylesCapability)();
		const applyClass = useUndoableApplyClass();
		const [, setPendingEditId] = (0, _elementor_session.useSessionStorage)(PENDING_CLASS_RENAME_SESSION_KEY, "app");
		if (!provider || !classId) return null;
		const providerInstance = _elementor_editor_styles_repository.stylesRepository.getProviderByKey(provider);
		const createAction = providerInstance?.actions.create;
		const getAction = providerInstance?.actions.get;
		if (!createAction || !getAction) return null;
		if (!userCan(provider).create) return null;
		const handleDuplicate = () => {
			const styleDef = getAction(classId);
			if (!styleDef) {
				closeMenu();
				return;
			}
			const existingLabels = providerInstance.actions.all().map((style) => style.label);
			const newLabel = getUniqueDuplicateLabel(styleDef.label, existingLabels);
			const newId = createAction(newLabel, styleDef.variants);
			if (newId) {
				applyClass({
					classId: newId,
					classLabel: newLabel
				});
				setPendingEditId(newId);
				trackStyles(provider, "classCreated", {
					classId: newId,
					source: "duplicated",
					classTitle: newLabel
				});
			}
			closeMenu();
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, { onClick: handleDuplicate }, (0, _wordpress_i18n.__)("Duplicate", "elementor"));
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/css-classes/use-can-convert-local-class-to-global.ts
	var useCanConvertLocalClassToGlobal = () => {
		const { element } = useElement();
		const { provider, id, meta } = useStyle();
		const styleDef = provider?.actions.get(id, {
			elementId: element.id,
			...meta
		});
		const isLocalStylesProvider = provider && (0, _elementor_editor_styles_repository.isElementsStylesProvider)(provider?.getKey());
		const variants = styleDef?.variants || [];
		return {
			canConvert: !!(isLocalStylesProvider && variants.length),
			isLocalStylesProvider,
			id,
			styleDef: styleDef || null
		};
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/css-classes/local-class-sub-menu.tsx
	var LocalClassSubMenu = (props) => {
		const { canConvert, styleDef } = useCanConvertLocalClassToGlobal();
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.MenuSubheader, { sx: {
			typography: "caption",
			color: "text.secondary",
			pb: .5,
			pt: 1
		} }, (0, _wordpress_i18n.__)("Local Class", "elementor")), /* @__PURE__ */ react.createElement(CssClassConvert, {
			canConvert,
			styleDef,
			closeMenu: props.popupState.close
		}));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/css-classes/css-class-menu.tsx
	function CssClassMenu({ popupState, anchorEl, fixed }) {
		const { provider } = useCssClass();
		const isLocalStyle = provider ? (0, _elementor_editor_styles_repository.isElementsStylesProvider)(provider) : true;
		const pseudoStates = usePseudoStates();
		const handleKeyDown = (e) => {
			e.stopPropagation();
		};
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
			onKeyDown: handleKeyDown,
			disableAutoFocusItem: true
		}, isLocalStyle && /* @__PURE__ */ react.createElement(LocalClassSubMenu, { popupState }), getMenuItemsByProvider({
			provider,
			closeMenu: popupState.close,
			fixed
		}), /* @__PURE__ */ react.createElement(_elementor_ui.MenuSubheader, { sx: {
			typography: "caption",
			color: "text.secondary",
			pb: .5,
			pt: 1
		} }, (0, _wordpress_i18n.__)("States", "elementor")), pseudoStates.map((state) => {
			return /* @__PURE__ */ react.createElement(StateMenuItem, {
				key: state.key,
				state: state.value,
				label: state.label,
				closeMenu: popupState.close
			});
		}), /* @__PURE__ */ react.createElement(ClassStatesMenu, { closeMenu: popupState.close }));
	}
	function ClassStatesMenu({ closeMenu }) {
		const { elementStates, elementTitle } = useElementStates();
		if (!elementStates.length) return null;
		const customTitle = (0, _wordpress_i18n.__)("%s States", "elementor").replace("%s", elementTitle);
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_ui.MenuSubheader, { sx: {
			typography: "caption",
			color: "text.secondary",
			pb: .5,
			pt: 1
		} }, customTitle), elementStates.map((state) => {
			return /* @__PURE__ */ react.createElement(StateMenuItem, {
				key: state.key,
				state: state.value,
				label: state.label,
				closeMenu
			});
		}));
	}
	var CLASS_STATES_MAP = {
		selected: { label: (0, _wordpress_i18n.__)("selected", "elementor") },
		disabled: { label: (0, _wordpress_i18n.__)("disabled", "elementor") }
	};
	function useElementStates() {
		const { elementType } = useElement();
		const { styleStates = [] } = elementType;
		return {
			elementStates: styleStates.map(({ value, name }) => ({
				key: value,
				value,
				label: CLASS_STATES_MAP[value]?.label ?? name
			})),
			elementTitle: elementType.title
		};
	}
	function useModifiedStates(styleId) {
		const { meta } = useStyle();
		const styleDef = _elementor_editor_styles_repository.stylesRepository.all().find((style) => style.id === styleId);
		return Object.fromEntries(styleDef?.variants.filter((variant) => meta.breakpoint === variant.meta.breakpoint && (!(0, _elementor_editor_props.isEmpty)(variant.props) || Boolean(variant.custom_css?.raw?.trim()))).map((variant) => [variant.meta.state ?? "normal", true]) ?? []);
	}
	function getMenuItemsByProvider({ provider, closeMenu, fixed }) {
		if (!provider) return [];
		const providerInstance = _elementor_editor_styles_repository.stylesRepository.getProviderByKey(provider);
		const providerActions = providerInstance?.actions;
		const canUpdate = providerActions?.update;
		const canDuplicate = providerActions?.create && providerActions?.get;
		const canUnapply = !fixed;
		const actions = [
			canUpdate && /* @__PURE__ */ react.createElement(RenameClassMenuItem, {
				key: "rename-class",
				closeMenu
			}),
			canDuplicate && /* @__PURE__ */ react.createElement(DuplicateClassMenuItem, {
				key: "duplicate-class",
				closeMenu
			}),
			canUnapply && /* @__PURE__ */ react.createElement(UnapplyClassMenuItem, {
				key: "unapply-class",
				closeMenu
			})
		].filter(Boolean);
		if (actions.length) {
			actions.unshift(/* @__PURE__ */ react.createElement(_elementor_ui.MenuSubheader, {
				key: "provider-label",
				sx: {
					typography: "caption",
					color: "text.secondary",
					pb: .5,
					pt: 1,
					textTransform: "capitalize"
				}
			}, providerInstance?.labels?.singular));
			actions.push(/* @__PURE__ */ react.createElement(_elementor_ui.Divider, { key: "provider-actions-divider" }));
		}
		return actions;
	}
	function StateMenuItem({ state, label, closeMenu, ...props }) {
		const { id: styleId, provider } = useCssClass();
		const { id: activeId, setId: setActiveId, setMetaState: setActiveMetaState, meta } = useStyle();
		const { state: activeState } = meta;
		const { userCan } = (0, _elementor_editor_styles_repository.useUserStylesCapability)();
		const modifiedStates = useModifiedStates(styleId);
		const isUpdateAllowed = !state || userCan(provider ?? "").updateProps;
		const isStyled = modifiedStates[state ?? "normal"] ?? false;
		const disabled = !isUpdateAllowed && !isStyled;
		const isActive = styleId === activeId;
		const isSelected = state === activeState && isActive;
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
			...props,
			selected: isSelected,
			disabled,
			sx: { textTransform: "capitalize" },
			onClick: () => {
				if (!isActive) setActiveId(styleId);
				trackStyles(provider ?? "", "classStateClicked", {
					classId: styleId,
					type: label,
					source: styleId ? "global" : "local"
				});
				setActiveMetaState(state);
				closeMenu();
			}
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuItemInfotip, {
			showInfoTip: disabled,
			content: (0, _wordpress_i18n.__)("With your current role, you can only use existing states.", "elementor")
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			gap: .75,
			direction: "row",
			alignItems: "center"
		}, isStyled && /* @__PURE__ */ react.createElement(StyleIndicator, {
			"aria-label": (0, _wordpress_i18n.__)("Has style", "elementor"),
			getColor: getTempStylesProviderThemeColor(provider ?? "")
		}), label)));
	}
	function UnapplyClassMenuItem({ closeMenu, ...props }) {
		const { id: classId, label: classLabel, provider } = useCssClass();
		const unapplyClass = useUndoableUnapplyClass();
		return classId ? /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
			...props,
			onClick: () => {
				unapplyClass({
					classId,
					classLabel
				});
				trackStyles(provider ?? "", "classRemoved", {
					classId,
					classTitle: classLabel,
					source: "style-tab"
				});
				closeMenu();
			}
		}, (0, _wordpress_i18n.__)("Remove", "elementor")) : null;
	}
	function RenameClassMenuItem({ closeMenu }) {
		const { handleRename, provider } = useCssClass();
		const { userCan } = (0, _elementor_editor_styles_repository.useUserStylesCapability)();
		if (!provider) return null;
		const isAllowed = userCan(provider).update;
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
			disabled: !isAllowed,
			onClick: () => {
				closeMenu();
				handleRename();
			}
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuItemInfotip, {
			showInfoTip: !isAllowed,
			content: (0, _wordpress_i18n.__)("With your current role, you can use existing classes but can't modify them.", "elementor")
		}, (0, _wordpress_i18n.__)("Rename", "elementor")));
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/css-classes/css-class-item.tsx
	var CHIP_SIZE = "tiny";
	function CssClassItem(props) {
		const { chipProps, icon, color: colorProp, fixed, ...classProps } = props;
		const { id, provider, label, isActive, onClickActive, renameLabel, setError } = classProps;
		const { elementStates } = useElementStates();
		const { meta, setMetaState } = useStyle();
		const popupState = (0, _elementor_ui.usePopupState)({ variant: "popover" });
		const [chipRef, setChipRef] = (0, react.useState)(null);
		const { onDelete, ...chipGroupProps } = chipProps;
		const { userCan } = (0, _elementor_editor_styles_repository.useUserStylesCapability)();
		const [convertedFromLocalId, , clearConvertedFromLocalId] = (0, _elementor_session.useSessionStorage)(PENDING_CLASS_RENAME_SESSION_KEY, "app");
		const { ref, isEditing, openEditMode, error, getProps: getEditableProps } = (0, _elementor_editor_ui.useEditable)({
			value: label,
			onSubmit: renameLabel,
			validation: validateLabel,
			onError: setError
		});
		const color = error ? "error" : colorProp;
		const providerActions = provider ? _elementor_editor_styles_repository.stylesRepository.getProviderByKey(provider)?.actions : null;
		const allowRename = Boolean(providerActions?.update) && userCan(provider ?? "")?.update;
		const isShowingState = isActive && meta.state;
		const stateLabel = (0, react.useMemo)(() => {
			if (meta.state && (0, _elementor_editor_styles.isClassState)(meta.state)) return elementStates.find((state) => state.value === meta.state)?.label;
			return meta.state;
		}, [meta.state, elementStates]);
		(0, react.useEffect)(() => {
			if (convertedFromLocalId && id === convertedFromLocalId) {
				clearConvertedFromLocalId();
				openEditMode();
			}
		}, [id, convertedFromLocalId]);
		return /* @__PURE__ */ react.createElement(_elementor_ui.ThemeProvider, { palette: "default" }, /* @__PURE__ */ react.createElement(_elementor_ui.UnstableChipGroup, {
			ref: setChipRef,
			...chipGroupProps,
			"aria-label": `Edit ${label}`,
			role: "group",
			sx: (theme) => ({ "&.MuiChipGroup-root.MuiAutocomplete-tag": { margin: theme.spacing(.125) } })
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			size: CHIP_SIZE,
			label: isEditing ? /* @__PURE__ */ react.createElement(_elementor_editor_ui.EditableField, {
				ref,
				...getEditableProps()
			}) : /* @__PURE__ */ react.createElement(_elementor_editor_ui.EllipsisWithTooltip, {
				maxWidth: "10ch",
				title: label,
				as: "div"
			}),
			variant: isActive && !meta.state && !isEditing ? "filled" : "standard",
			shape: "rounded",
			icon,
			color,
			onClick: () => {
				if (isShowingState) {
					setMetaState(null);
					return;
				}
				if (allowRename && isActive) {
					openEditMode();
					return;
				}
				onClickActive(id);
			},
			"aria-pressed": isActive,
			sx: (theme) => ({
				lineHeight: 1,
				cursor: isActive && allowRename && !isShowingState ? "text" : "pointer",
				borderRadius: `${theme.shape.borderRadius * .75}px`,
				"&.Mui-focusVisible": { boxShadow: "none !important" }
			})
		}), !isEditing && /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			icon: isShowingState ? void 0 : /* @__PURE__ */ react.createElement(_elementor_icons.DotsVerticalIcon, { fontSize: "tiny" }),
			size: CHIP_SIZE,
			label: isShowingState ? /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
				direction: "row",
				gap: .5,
				alignItems: "center"
			}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "inherit" }, stateLabel), /* @__PURE__ */ react.createElement(_elementor_icons.DotsVerticalIcon, { fontSize: "tiny" })) : void 0,
			variant: "filled",
			shape: "rounded",
			color,
			...(0, _elementor_ui.bindTrigger)(popupState),
			"aria-label": (0, _wordpress_i18n.__)("Open CSS Class Menu", "elementor"),
			sx: (theme) => ({
				borderRadius: `${theme.shape.borderRadius * .75}px`,
				paddingRight: 0,
				...!isShowingState ? { paddingLeft: 0 } : {},
				".MuiChip-label": isShowingState ? { paddingRight: 0 } : { padding: 0 }
			})
		})), /* @__PURE__ */ react.createElement(CssClassProvider, {
			...classProps,
			handleRename: openEditMode
		}, /* @__PURE__ */ react.createElement(CssClassMenu, {
			popupState,
			anchorEl: chipRef,
			fixed
		})));
	}
	var validateLabel = (newLabel) => {
		const result = (0, _elementor_editor_styles_repository.validateStyleLabel)(newLabel, "rename");
		if (result.isValid) return null;
		return result.errorMessage;
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/css-classes/missing-classes-alert.tsx
	function MissingClassesAlert({ onDismiss }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
			severity: "warning",
			onClose: onDismiss,
			size: "small",
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.AlertTriangleFilledIcon, { fontSize: "tiny" }),
			sx: { mt: 1 }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("Some classes are missing", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			color: "primary"
		}, (0, _wordpress_i18n.__)("A class was removed from your site and is no longer active on this element", "elementor")));
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/css-classes/use-missing-classes.ts
	function useMissingClassesIds() {
		const providers = (0, _elementor_editor_styles_repository.useProviders)();
		const appliedIds = usePanelElementSetting(useClassesProp())?.value ?? [];
		const allKnownIds = new Set(providers.flatMap((provider) => provider.actions.all().map((style) => style.id)));
		return appliedIds.filter((id) => !allKnownIds.has(id));
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/css-classes/css-class-selector.tsx
	var ID = "elementor-css-class-selector";
	var TAGS_LIMIT = 50;
	function openClassManagerPanel() {
		window.dispatchEvent(new CustomEvent("elementor/toggle-design-system", { detail: { tab: "classes" } }));
	}
	var EMPTY_OPTION = {
		label: (0, _wordpress_i18n.__)("local", "elementor"),
		value: null,
		fixed: true,
		color: getTempStylesProviderColorName("accent"),
		icon: /* @__PURE__ */ react.createElement(_elementor_icons.MapPinIcon, null),
		provider: null
	};
	var { Slot: ClassSelectorActionsSlot, inject: injectIntoClassSelectorActions } = (0, _elementor_locations.createLocation)();
	function CssClassSelector() {
		const options = useOptions();
		const { id: activeId, setId: setActiveId } = useStyle();
		const autocompleteRef = (0, react.useRef)(null);
		const [renameError, setRenameError] = (0, react.useState)(null);
		const handleSelect = useHandleSelect();
		const { create, validate, entityName, isAtLimit, limitCount } = useCreateAction();
		const appliedOptions = useAppliedOptions(options);
		const active = appliedOptions.find((option) => option.value === activeId) ?? EMPTY_OPTION;
		const showPlaceholder = appliedOptions.every(({ fixed }) => fixed);
		const { userCan } = (0, _elementor_editor_styles_repository.useUserStylesCapability)();
		const canEdit = active.provider ? userCan(active.provider).updateProps : true;
		const missingClassesIds = useMissingClassesIds();
		const hasMissingClasses = missingClassesIds.length > 0;
		const unapplyClasses = useUnapplyClasses();
		const clearMissingClasses = (0, react.useCallback)(() => {
			unapplyClasses(missingClassesIds);
		}, [missingClassesIds, unapplyClasses]);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { p: 2 }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			gap: 1,
			alignItems: "center",
			justifyContent: "space-between"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.FormLabel, {
			htmlFor: ID,
			size: "small"
		}, (0, _wordpress_i18n.__)("Classes", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			gap: 1
		}, /* @__PURE__ */ react.createElement(ClassSelectorActionsSlot, null))), /* @__PURE__ */ react.createElement(_elementor_editor_ui.WarningInfotip, {
			open: Boolean(renameError),
			text: renameError ?? "",
			placement: "bottom",
			width: autocompleteRef.current?.getBoundingClientRect().width,
			offset: [0, -15]
		}, /* @__PURE__ */ react.createElement(CreatableAutocomplete, {
			id: ID,
			ref: autocompleteRef,
			size: "tiny",
			placeholder: showPlaceholder ? (0, _wordpress_i18n.__)("Type class name", "elementor") : void 0,
			options,
			selected: appliedOptions,
			entityName,
			onSelect: handleSelect,
			onCreate: create ?? void 0,
			validate: validate ?? void 0,
			limitTags: TAGS_LIMIT,
			renderEmptyState: isAtLimit && typeof limitCount === "number" ? (props) => /* @__PURE__ */ react.createElement(LimitReachedEmptyState, {
				limitCount,
				onClear: props.onClear
			}) : EmptyState,
			getLimitTagsText: (more) => /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
				size: "tiny",
				variant: "standard",
				label: `+${more}`,
				clickable: true
			}),
			renderTags: (values, getTagProps) => values.map((value, index) => {
				const chipProps = getTagProps({ index });
				const isActive = value.value === active?.value;
				const renameLabel = (newLabel) => {
					if (!value.value) throw new Error(`Cannot rename a class without style id`);
					trackStyles(value.provider ?? "", "classRenamed", {
						classId: value.value,
						newValue: newLabel,
						oldValue: value.label,
						source: "style-tab"
					});
					return updateClassByProvider(value.provider, {
						label: newLabel,
						id: value.value
					});
				};
				return /* @__PURE__ */ react.createElement(CssClassItem, {
					key: chipProps.key,
					fixed: value.fixed,
					label: value.label,
					provider: value.provider,
					id: value.value,
					isActive,
					color: isActive && value.color ? value.color : "default",
					icon: value.icon,
					chipProps,
					onClickActive: () => setActiveId(value.value),
					renameLabel,
					setError: setRenameError
				});
			})
		})), hasMissingClasses && /* @__PURE__ */ react.createElement(MissingClassesAlert, { onDismiss: clearMissingClasses }), !canEdit && /* @__PURE__ */ react.createElement(_elementor_editor_ui.InfoAlert, { sx: { mt: 1 } }, (0, _wordpress_i18n.__)("With your current role, you can use existing classes but can’t modify them.", "elementor")));
	}
	var EmptyStateLayout = ({ searchValue, onClear, children }) => /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { py: 4 } }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
		gap: 1,
		alignItems: "center",
		color: "text.secondary",
		justifyContent: "center",
		sx: {
			px: 2,
			m: "auto",
			maxWidth: "236px"
		}
	}, /* @__PURE__ */ react.createElement(_elementor_icons.ColorSwatchIcon, {
		sx: { transform: "rotate(90deg)" },
		fontSize: "large"
	}), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
		align: "center",
		variant: "subtitle2"
	}, (0, _wordpress_i18n.__)("Sorry, nothing matched", "elementor"), /* @__PURE__ */ react.createElement("br", null), "“", searchValue, "”."), children, /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
		color: "text.secondary",
		variant: "caption",
		component: "button",
		onClick: onClear
	}, (0, _wordpress_i18n.__)("Clear & try again", "elementor"))));
	var EmptyState = (props) => /* @__PURE__ */ react.createElement(EmptyStateLayout, { ...props }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
		align: "center",
		variant: "caption",
		sx: { mb: 2 }
	}, (0, _wordpress_i18n.__)("With your current role,", "elementor"), /* @__PURE__ */ react.createElement("br", null), (0, _wordpress_i18n.__)("you can only use existing classes.", "elementor")));
	var LimitReachedEmptyState = ({ limitCount, onClear }) => /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { py: 4 } }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
		gap: 1,
		alignItems: "center",
		color: "text.secondary",
		justifyContent: "center",
		sx: {
			px: 1,
			m: "auto",
			maxWidth: "260px"
		}
	}, /* @__PURE__ */ react.createElement(_elementor_icons.ColorSwatchIcon, {
		sx: { transform: "rotate(90deg)" },
		fontSize: "large"
	}), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
		align: "center",
		variant: "subtitle2"
	}, (0, _wordpress_i18n.__)("Limit of %s classes reached", "elementor").replace("%s", String(limitCount))), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
		align: "center",
		variant: "caption",
		component: "div"
	}, (0, _wordpress_i18n.__)("Remove a class to create a new one.", "elementor"), " ", /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
		color: "inherit",
		variant: "caption",
		component: "button",
		onClick: onClear,
		sx: { verticalAlign: "baseline" }
	}, (0, _wordpress_i18n.__)("Clear", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
		variant: "outlined",
		color: "secondary",
		size: "small",
		onClick: () => {
			openClassManagerPanel();
			onClear();
		}
	}, (0, _wordpress_i18n.__)("Class Manager", "elementor"))));
	var updateClassByProvider = (provider, data) => {
		if (!provider) return;
		const providerInstance = _elementor_editor_styles_repository.stylesRepository.getProviderByKey(provider);
		if (!providerInstance) return;
		return providerInstance.actions.update?.(data);
	};
	function useOptions() {
		const { element } = useElement();
		const isProviderEditable = (provider) => !!provider.actions.updateProps;
		return (0, _elementor_editor_styles_repository.useProviders)().filter(isProviderEditable).filter((provider) => provider.getKey() !== "default-styles").flatMap((provider) => {
			const isElements = (0, _elementor_editor_styles_repository.isElementsStylesProvider)(provider.getKey());
			const styleDefs = provider.actions.all({ elementId: element.id });
			if (isElements && styleDefs.length === 0) return [EMPTY_OPTION];
			return styleDefs.map((styleDef) => {
				return {
					label: styleDef.label,
					value: styleDef.id,
					fixed: isElements,
					color: getTempStylesProviderColorName(getStylesProviderColorName(provider.getKey())),
					icon: isElements ? /* @__PURE__ */ react.createElement(_elementor_icons.MapPinIcon, null) : null,
					provider: provider.getKey()
				};
			});
		});
	}
	function getTempStylesProviderColorName(color) {
		if (color === "accent") return "primary";
		return color;
	}
	function useCreateAction() {
		const [provider, createAction] = useCreateAndApplyClass();
		if (!provider || !createAction) return {};
		const entityName = provider.labels.singular && provider.labels.plural ? provider.labels : void 0;
		const validate = (newClassLabel, event) => (0, _elementor_editor_styles_repository.validateStyleLabel)(newClassLabel, event);
		if (hasReachedLimit(provider)) return {
			entityName,
			isAtLimit: true,
			limitCount: provider.limit,
			validate
		};
		const create = (classLabel) => {
			const { createdId } = createAction({ classLabel });
			trackStyles(provider.getKey() ?? "", "classCreated", {
				source: "created",
				classTitle: classLabel,
				classId: createdId
			});
		};
		return {
			create,
			validate,
			entityName,
			isAtLimit: false
		};
	}
	function hasReachedLimit(provider) {
		return provider.actions.all().length >= provider.limit;
	}
	function useAppliedOptions(options) {
		const appliedIds = usePanelElementSetting(useClassesProp())?.value ?? [];
		const appliedOptions = options.filter((option) => option.value && appliedIds.includes(option.value));
		if (!appliedOptions.some((option) => option.provider && (0, _elementor_editor_styles_repository.isElementsStylesProvider)(option.provider))) appliedOptions.unshift(EMPTY_OPTION);
		return appliedOptions;
	}
	function useHandleSelect() {
		const apply = useUndoableApplyClass();
		const unapply = useUndoableUnapplyClass();
		return (_selectedOptions, reason, option) => {
			if (!option.value) return;
			switch (reason) {
				case "selectOption":
					apply({
						classId: option.value,
						classLabel: option.label
					});
					trackStyles(option.provider ?? "", "classApplied", {
						classId: option.value,
						source: "style-tab"
					});
					break;
				case "removeOption":
					unapply({
						classId: option.value,
						classLabel: option.label
					});
					trackStyles(option.provider ?? "", "classRemoved", {
						classId: option.value,
						source: "style-tab"
					});
					break;
			}
		};
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/hooks/use-styles-rerender.ts
	var useStylesRerender = () => {
		const { provider } = useStyle();
		const [, reRender] = (0, react.useReducer)((p) => !p, false);
		(0, react.useEffect)(() => provider?.subscribe(reRender), [provider]);
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/hooks/use-styles-fields.ts
	var HISTORY_DEBOUNCE_WAIT$1 = 800;
	function useStylesFields(propNames) {
		const { element: { id: elementId } } = useElement();
		const { id: styleId, meta, provider, canEdit } = useStyle();
		const undoableUpdateStyle = useUndoableActions$1({
			elementId,
			meta
		});
		useStylesRerender();
		const values = getProps({
			elementId,
			styleId,
			provider,
			meta,
			propNames
		});
		const setValues = (props, { history: { propDisplayName } }) => {
			if (!styleId) undoableUpdateStyle({
				styleId: null,
				provider: null,
				props,
				propDisplayName
			});
			else undoableUpdateStyle({
				styleId,
				provider,
				props,
				propDisplayName
			});
		};
		return {
			values,
			setValues,
			canEdit
		};
	}
	function getProps({ styleId, elementId, provider, meta, propNames }) {
		if (!provider || !styleId) return null;
		const style = provider.actions.get(styleId, { elementId });
		if (!style) throw new StyleNotFoundUnderProviderError({ context: {
			styleId,
			providerKey: provider.getKey()
		} });
		const variant = (0, _elementor_editor_styles.getVariantByMeta)(style, meta);
		return Object.fromEntries(propNames.map((key) => [key, variant?.props[key] ?? null]));
	}
	function useUndoableActions$1({ elementId, meta: { breakpoint, state } }) {
		const classesProp = useClassesProp();
		return (0, react.useMemo)(() => {
			const meta = {
				breakpoint,
				state
			};
			const createStyleArgs = {
				elementId,
				classesProp,
				meta,
				label: _elementor_editor_styles_repository.ELEMENTS_STYLES_RESERVED_LABEL
			};
			return (0, _elementor_editor_v1_adapters.undoable)({
				do: (payload) => {
					if ((0, _elementor_editor_elements.shouldCreateNewLocalStyle)(payload)) return create(payload);
					return update(payload);
				},
				undo: (payload, doReturn) => {
					if ((0, _elementor_editor_elements.shouldCreateNewLocalStyle)(payload)) return undoCreate(payload, doReturn);
					return undo(payload, doReturn);
				},
				redo: (payload, doReturn) => {
					if ((0, _elementor_editor_elements.shouldCreateNewLocalStyle)(payload)) return create(payload, doReturn);
					return update(payload);
				}
			}, {
				title: ({ provider, styleId }) => getTitle({
					provider,
					styleId,
					elementId
				}),
				subtitle: ({ provider, styleId, propDisplayName }) => getSubtitle({
					provider,
					styleId,
					elementId,
					propDisplayName
				}),
				debounce: { wait: 800 }
			});
			function create({ props }, redoArgs) {
				return { createdStyleId: (0, _elementor_editor_elements.createElementStyle)({
					...createStyleArgs,
					props,
					styleId: redoArgs?.createdStyleId
				}) };
			}
			function undoCreate(_, { createdStyleId }) {
				(0, _elementor_editor_elements.deleteElementStyle)(elementId, createdStyleId);
			}
			function update({ provider, styleId, props }) {
				if (!provider.actions.updateProps) throw new StylesProviderCannotUpdatePropsError({ context: { providerKey: provider.getKey() } });
				const prevProps = getCurrentProps(provider.actions.get(styleId, { elementId }), meta);
				provider.actions.updateProps({
					id: styleId,
					meta,
					props
				}, { elementId });
				return {
					styleId,
					provider,
					prevProps
				};
			}
			function undo(_, { styleId, provider, prevProps }) {
				provider.actions.updateProps?.({
					id: styleId,
					meta,
					props: prevProps,
					mode: "replace"
				}, { elementId });
			}
		}, [
			elementId,
			breakpoint,
			state,
			classesProp
		]);
	}
	__name(useUndoableActions$1, "useUndoableActions");
	function getCurrentProps(style, meta) {
		if (!style) return {};
		const props = (0, _elementor_editor_styles.getVariantByMeta)(style, meta)?.props ?? {};
		return structuredClone(props);
	}
	var defaultHistoryTitles = {
		title: ({ provider }) => {
			const providerLabel = provider.labels?.singular;
			return providerLabel ? capitalize(providerLabel) : (0, _wordpress_i18n.__)("Style", "elementor");
		},
		subtitle: ({ provider, styleId, elementId, propDisplayName }) => {
			const styleLabel = provider.actions.get(styleId, { elementId })?.label;
			if (!styleLabel) throw new Error(`Style ${styleId} not found`);
			return (0, _wordpress_i18n.__)(`%s$1 %s$2 edited`, "elementor").replace("%s$1", styleLabel).replace("%s$2", propDisplayName);
		}
	};
	var localStyleHistoryTitles = {
		title: ({ elementId }) => (0, _elementor_editor_elements.getElementLabel)(elementId),
		subtitle: ({ propDisplayName }) => (0, _wordpress_i18n.__)(`%s edited`, "elementor").replace("%s", propDisplayName)
	};
	function capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	var isLocalStyle = (provider, styleId) => !provider || !styleId || (0, _elementor_editor_styles_repository.isElementsStylesProvider)(provider.getKey());
	var getTitle = ({ provider, styleId, elementId }) => {
		if (isLocalStyle(provider, styleId)) return localStyleHistoryTitles.title({ elementId });
		return defaultHistoryTitles.title({ provider });
	};
	var getSubtitle = ({ provider, styleId, propDisplayName, elementId }) => {
		if (isLocalStyle(provider, styleId)) return localStyleHistoryTitles.subtitle({ propDisplayName });
		return defaultHistoryTitles.subtitle({
			provider,
			styleId,
			elementId,
			propDisplayName
		});
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/hooks/use-custom-css.ts
	var useCustomCss = () => {
		const { element: { id: elementId } } = useElement();
		const { id: styleId, meta, provider } = useStyle();
		const style = provider?.actions.get(styleId, { elementId });
		const undoableUpdateStyle = useUndoableActions({
			elementId,
			meta
		});
		const currentStyleId = styleId ? styleId : null;
		const currentProvider = styleId ? provider : null;
		useStylesRerender();
		const variant = style ? (0, _elementor_editor_styles.getVariantByMeta)(style, meta) : null;
		const setCustomCss = (raw, { history: { propDisplayName } }) => {
			const newValue = { raw: (0, _elementor_utils.encodeString)(sanitize(raw)) };
			undoableUpdateStyle({
				styleId: currentStyleId,
				provider: currentProvider,
				customCss: newValue,
				propDisplayName
			});
		};
		return {
			customCss: variant?.custom_css?.raw ? { raw: (0, _elementor_utils.decodeString)(variant.custom_css.raw) } : null,
			setCustomCss
		};
	};
	function useUndoableActions({ elementId, meta: { breakpoint, state } }) {
		const classesProp = useClassesProp();
		return (0, react.useMemo)(() => {
			const meta = {
				breakpoint,
				state
			};
			const createStyleArgs = {
				elementId,
				classesProp,
				meta,
				label: _elementor_editor_styles_repository.ELEMENTS_STYLES_RESERVED_LABEL
			};
			return (0, _elementor_editor_v1_adapters.undoable)({
				do: (payload) => {
					if ((0, _elementor_editor_elements.shouldCreateNewLocalStyle)(payload)) return create(payload);
					return update(payload);
				},
				undo: (payload, doReturn) => {
					if ((0, _elementor_editor_elements.shouldCreateNewLocalStyle)(payload)) return undoCreate(payload, doReturn);
					return undoUpdate(payload, doReturn);
				},
				redo: (payload, doReturn) => {
					if ((0, _elementor_editor_elements.shouldCreateNewLocalStyle)(payload)) return create(payload, doReturn);
					return update(payload);
				}
			}, {
				title: ({ provider, styleId }) => getTitle({
					provider,
					styleId,
					elementId
				}),
				subtitle: ({ provider, styleId, propDisplayName }) => getSubtitle({
					provider,
					styleId,
					elementId,
					propDisplayName
				}),
				debounce: { wait: 800 }
			});
			function create({ customCss }, redoArgs) {
				return { createdStyleId: (0, _elementor_editor_elements.createElementStyle)({
					...createStyleArgs,
					props: {},
					custom_css: customCss ?? null,
					styleId: redoArgs?.createdStyleId
				}) };
			}
			function undoCreate(_, { createdStyleId }) {
				(0, _elementor_editor_elements.deleteElementStyle)(elementId, createdStyleId);
			}
			function update({ provider, styleId, customCss }) {
				if (!provider.actions.updateCustomCss) throw new StylesProviderCannotUpdatePropsError({ context: { providerKey: provider.getKey() } });
				const prevCustomCss = getCurrentCustomCss(provider.actions.get(styleId, { elementId }), meta);
				provider.actions.updateCustomCss({
					id: styleId,
					meta,
					custom_css: customCss
				}, { elementId });
				return {
					styleId,
					provider,
					prevCustomCss
				};
			}
			function undoUpdate(_, { styleId, provider, prevCustomCss }) {
				provider.actions.updateCustomCss?.({
					id: styleId,
					meta,
					custom_css: prevCustomCss ?? { raw: "" }
				}, { elementId });
			}
		}, [
			elementId,
			breakpoint,
			state,
			classesProp
		]);
	}
	function getCurrentCustomCss(style, meta) {
		if (!style) return null;
		return (0, _elementor_editor_styles.getVariantByMeta)(style, meta)?.custom_css ?? null;
	}
	function sanitize(raw) {
		return _elementor_editor_props.stringPropTypeUtil.schema.safeParse(_elementor_editor_props.stringPropTypeUtil.create(raw)).data?.value?.trim() ?? "";
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/custom-css-indicator.tsx
	var CustomCssIndicator = () => {
		const { customCss } = useCustomCss();
		const { id: styleId, provider, meta } = useStyle();
		const { element: { id: elementId } } = useElement();
		const style = (0, react.useMemo)(() => styleId && provider ? provider.actions.get(styleId, { elementId }) : null, [
			styleId,
			provider,
			elementId
		]);
		const hasContent = Boolean(customCss?.raw?.trim());
		const hasInheritedContent = (0, react.useMemo)(() => {
			if (hasContent) return false;
			return hasInheritedCustomCss(style, meta);
		}, [
			hasContent,
			style,
			meta
		]);
		if (!hasContent) {
			if (hasInheritedContent) return /* @__PURE__ */ react.createElement(StyleIndicator, null);
			return null;
		}
		return /* @__PURE__ */ react.createElement(StyleIndicator, { getColor: provider ? getStylesProviderThemeColor(provider.getKey()) : void 0 });
	};
	var hasInheritedCustomCss = (style, meta) => {
		if (!style || !meta) return false;
		const target = meta.breakpoint ?? "desktop";
		const root = (0, _elementor_editor_responsive.getBreakpointsTree)();
		const state = meta.state;
		function search(node, ancestorHasCss) {
			if (!style) return;
			const hasHere = Boolean((0, _elementor_editor_styles.getVariantByMeta)(style, {
				breakpoint: node.id,
				state
			})?.custom_css?.raw?.trim());
			if (node.id === target) return ancestorHasCss;
			for (const child of node.children ?? []) {
				const res = search(child, ancestorHasCss || hasHere);
				if (res !== void 0) return res;
			}
		}
		return Boolean(search(root, false));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/editing-panel-replacement-registry.tsx
	var registry = /* @__PURE__ */ new Map();
	var DEFAULT_PRIORITY$1 = 10;
	var registerEditingPanelReplacement = ({ id, priority = DEFAULT_PRIORITY$1, ...props }) => {
		registry.set(id, {
			...props,
			priority
		});
	};
	var getEditingPanelReplacement = (element, elementType) => Array.from(registry.values()).filter(({ condition }) => condition(element, elementType)).sort((a, b) => a.priority - b.priority)?.[0] ?? null;

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/editing-panel-error-fallback.tsx
	function EditorPanelErrorFallback() {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
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
		}, /* @__PURE__ */ react.createElement("strong", null, "Something went wrong")));
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/editing-panel-sticky-promotion.tsx
	function getStickyPromotion() {
		return window.elementor?.config?.editingPanelStickyPromotion;
	}
	var EditingPanelStickyPromotion = () => {
		const promotion = getStickyPromotion();
		if (!promotion) return null;
		return /* @__PURE__ */ react.createElement("div", { className: "elementor-panel-editor-sticky-promotion" }, /* @__PURE__ */ react.createElement("div", { className: "elementor-get-pro-sticky-message" }, promotion.message, " ", /* @__PURE__ */ react.createElement("a", {
			target: "_blank",
			rel: "noreferrer",
			href: promotion.url
		}, promotion.button_text)));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/contexts/scroll-context.tsx
	var ScrollContext = (0, react.createContext)(void 0);
	var ScrollPanel = (0, _elementor_ui.styled)("div")`
	height: 100%;
	overflow-y: auto;
`;
	var DEFAULT_SCROLL_DIRECTION = "up";
	function ScrollProvider({ children }) {
		const [direction, setDirection] = (0, react.useState)(DEFAULT_SCROLL_DIRECTION);
		const ref = (0, react.useRef)(null);
		const scrollPos = (0, react.useRef)(0);
		(0, react.useEffect)(() => {
			const scrollElement = ref.current;
			if (!scrollElement) return;
			const handleScroll = () => {
				const { scrollTop } = scrollElement;
				if (scrollTop > scrollPos.current) setDirection("down");
				else if (scrollTop < scrollPos.current) setDirection("up");
				scrollPos.current = scrollTop;
			};
			scrollElement.addEventListener("scroll", handleScroll);
			return () => {
				scrollElement.removeEventListener("scroll", handleScroll);
			};
		});
		return /* @__PURE__ */ react.createElement(ScrollContext.Provider, { value: { direction } }, /* @__PURE__ */ react.createElement(ScrollPanel, { ref }, children));
	}
	function useScrollDirection() {
		return (0, react.useContext)(ScrollContext)?.direction ?? DEFAULT_SCROLL_DIRECTION;
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/hooks/use-default-panel-settings.ts
	var fallbackEditorSettings = {
		defaultSectionsExpanded: {
			settings: ["content", "settings"],
			style: []
		},
		defaultTab: "settings"
	};
	var elementPanelDefaults = {
		"e-div-block": {
			defaultSectionsExpanded: fallbackEditorSettings.defaultSectionsExpanded,
			defaultTab: "style"
		},
		"e-flexbox": {
			defaultSectionsExpanded: fallbackEditorSettings.defaultSectionsExpanded,
			defaultTab: "style"
		},
		"e-grid": {
			defaultSectionsExpanded: fallbackEditorSettings.defaultSectionsExpanded,
			defaultTab: "style"
		},
		"e-divider": {
			defaultSectionsExpanded: fallbackEditorSettings.defaultSectionsExpanded,
			defaultTab: "style"
		}
	};
	function registerElementPanelDefaults(type, defaults) {
		elementPanelDefaults[type] = defaults;
	}
	var useDefaultPanelSettings = () => {
		const { element } = useElement();
		return elementPanelDefaults[element.type] ?? fallbackEditorSettings;
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/hooks/use-state-by-element.ts
	var useStateByElement = (key, initialValue) => {
		const { element } = useElement();
		const lookup = `elementor/editor-state/${element.id}/${key}`;
		const [value, setValue] = (0, react.useState)((0, _elementor_session.getSessionStorageItem)(lookup) ?? initialValue);
		const doUpdate = (newValue) => {
			(0, _elementor_session.setSessionStorageItem)(lookup, newValue);
			setValue(newValue);
		};
		return [value, doUpdate];
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/sections-list.tsx
	function SectionsList(props) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.List, {
			disablePadding: true,
			component: "div",
			...props
		});
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/interactions-tab.tsx
	var InteractionsTab = () => {
		const { element } = useElement();
		return /* @__PURE__ */ react.createElement(SectionsList, null, /* @__PURE__ */ react.createElement(_elementor_editor_interactions.InteractionsTab, { elementId: element.id }));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/utils/prop-dependency-utils.ts
	function getElementSettingsWithDefaults(propsSchema, elementSettings) {
		const elementSettingsWithDefaults = { ...elementSettings };
		Object.keys(propsSchema).forEach((key) => {
			if (elementSettingsWithDefaults[key] === null && propsSchema[key].default !== null) elementSettingsWithDefaults[key] = propsSchema[key].default;
		});
		return elementSettingsWithDefaults;
	}
	function extractDependencyEffect(bind, propsSchema, settings) {
		const settingsWithDefaults = getElementSettingsWithDefaults(propsSchema, settings);
		const propType = propsSchema[bind];
		const depCheck = (0, _elementor_editor_props.isDependencyMet)(propType?.dependencies, settingsWithDefaults);
		const failingTerm = !depCheck.isMet ? depCheck.failingDependencies[0] : void 0;
		return {
			isHidden: !!failingTerm && !(0, _elementor_editor_props.isDependency)(failingTerm) && failingTerm?.effect === "hide",
			isDisabled: (prop) => !(0, _elementor_editor_props.isDependencyMet)(prop?.dependencies, settingsWithDefaults).isMet
		};
	}
	function extractOrderedDependencies(dependenciesPerTargetMapping) {
		return Object.values(dependenciesPerTargetMapping).flat().filter((dependent, index, self) => self.indexOf(dependent) === index);
	}
	function getUpdatedValues(values, dependencies, propsSchema, elementValues, elementId) {
		if (!dependencies.length) return values;
		return dependencies.reduce((newValues, dependency) => {
			const path = dependency.split(".");
			const combinedValues = {
				...elementValues,
				...newValues
			};
			const propType = getPropType(propsSchema, combinedValues, path);
			if (!propType) return newValues;
			const testDependencies = {
				previousValues: (0, _elementor_editor_props.isDependencyMet)(propType.dependencies, elementValues),
				newValues: (0, _elementor_editor_props.isDependencyMet)(propType.dependencies, combinedValues)
			};
			if (!testDependencies.newValues.isMet) {
				const newValue = handleUnmetCondition({
					failingDependencies: testDependencies.newValues.failingDependencies,
					dependency,
					elementValues: combinedValues,
					defaultValue: propType.default,
					elementId
				});
				return {
					...newValues,
					...updateValue(path, newValue, combinedValues)
				};
			}
			if (!testDependencies.previousValues.isMet) {
				const savedValue = retrievePreviousValueFromStorage({
					path: dependency,
					elementId
				});
				const currentValue = (0, _elementor_editor_props.extractValue)(path, combinedValues, [], { unwrapOverridableLeaf: false });
				removePreviousValueFromStorage({
					path: dependency,
					elementId
				});
				const restored = isCompatibleSavedValue(savedValue, currentValue) ? savedValue : propType.default;
				return {
					...newValues,
					...updateValue(path, restored, combinedValues)
				};
			}
			return newValues;
		}, { ...values });
	}
	function getPropType(schema, elementValues, path) {
		if (!path.length) return null;
		const [basePropKey, ...keys] = path;
		const baseProp = schema[basePropKey];
		if (!baseProp) return null;
		return keys.reduce((prop, key, index) => evaluatePropType({
			prop,
			key,
			index,
			path,
			elementValues,
			basePropKey
		}), baseProp);
	}
	function evaluatePropType(props) {
		const { prop } = props;
		if (!prop?.kind) return null;
		const { key, index, path, elementValues, basePropKey } = props;
		switch (prop.kind) {
			case "union":
				const type = (0, _elementor_editor_props.extractValue)(path.slice(0, index + 1), elementValues)?.$$type ?? null;
				return getPropType({ [basePropKey]: prop.prop_types?.[type] }, elementValues, path.slice(0, index + 2));
			case "array": return prop.item_prop_type;
			case "object": return prop.shape[key];
		}
		return prop[key];
	}
	function updateValue(path, value, values) {
		const topPropKey = path[0];
		const root = { ...values };
		let carry = root;
		for (let index = 0; index < path.length; index++) {
			const key = path[index];
			if (index === path.length - 1) {
				carry[key] = mergeLeafValue(carry[key], value);
				break;
			}
			const next = cloneDescent(carry[key]);
			if (!next) break;
			carry[key] = next.replacement;
			carry = next.descended;
		}
		return { [topPropKey]: root[topPropKey] ?? null };
	}
	function cloneDescent(child) {
		if (!child) return null;
		if ((0, _elementor_editor_props.isOverridable)(child)) {
			const origin = child.value.origin_value;
			if (!origin || !(0, _elementor_editor_props.isTransformable)(origin)) return null;
			const descended = { ...origin.value };
			return {
				replacement: {
					...child,
					value: {
						...child.value,
						origin_value: {
							...origin,
							value: descended
						}
					}
				},
				descended
			};
		}
		if ((0, _elementor_editor_props.isTransformable)(child)) {
			const descended = { ...child.value };
			return {
				replacement: {
					...child,
					value: descended
				},
				descended
			};
		}
		return null;
	}
	function isCompatibleSavedValue(saved, current) {
		if (!saved) return false;
		return (0, _elementor_editor_props.isOverridable)(saved) === (0, _elementor_editor_props.isOverridable)(current);
	}
	function mergeLeafValue(existing, incoming) {
		if (incoming === null) return null;
		if (incoming && (0, _elementor_editor_props.isOverridable)(incoming)) return incoming;
		if (existing && (0, _elementor_editor_props.isOverridable)(existing) && incoming) return (0, _elementor_editor_props.rewrapOverridableValue)(existing, incoming);
		return incoming;
	}
	function handleUnmetCondition(props) {
		const { failingDependencies, dependency, elementValues, defaultValue, elementId } = props;
		const newValue = failingDependencies.find((term) => "newValue" in term && !!term.newValue)?.newValue ?? null;
		savePreviousValueToStorage({
			path: dependency,
			elementId,
			value: (0, _elementor_editor_props.extractValue)(dependency.split("."), elementValues, [], { unwrapOverridableLeaf: false }) ?? defaultValue
		});
		return newValue;
	}
	function savePreviousValueToStorage({ path, elementId, value }) {
		const prefix = `elementor/${elementId}`;
		if (retrievePreviousValueFromStorage({
			path,
			elementId
		})) return;
		(0, _elementor_session.setSessionStorageItem)(`${prefix}:${path}`, value);
	}
	function retrievePreviousValueFromStorage({ path, elementId }) {
		return (0, _elementor_session.getSessionStorageItem)(`${`elementor/${elementId}`}:${path}`) ?? null;
	}
	function removePreviousValueFromStorage({ path, elementId }) {
		(0, _elementor_session.removeSessionStorageItem)(`${`elementor/${elementId}`}:${path}`);
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/section.tsx
	function Section({ title, children, defaultExpanded = false, titleEnd, unmountOnExit = true, action }) {
		const [isOpen, setIsOpen] = useStateByElement(title, !!defaultExpanded);
		const ref = (0, react.useRef)(null);
		const isDisabled = !!action;
		const handleClick = () => {
			if (isDisabled) action?.onClick();
			else setIsOpen(!isOpen);
		};
		const id = (0, react.useId)();
		const labelId = `label-${id}`;
		const contentId = `content-${id}`;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemButton, {
			id: labelId,
			"aria-controls": contentId,
			"aria-label": `${title} section`,
			onClick: handleClick,
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
		}), (0, _elementor_editor_ui.getCollapsibleValue)(titleEnd, isOpen)), action?.component, /* @__PURE__ */ react.createElement(_elementor_editor_ui.CollapseIcon, {
			open: isOpen,
			color: "secondary",
			fontSize: "tiny",
			disabled: isDisabled,
			sx: { ml: 1 }
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Collapse, {
			id: contentId,
			"aria-labelledby": labelId,
			in: isOpen,
			timeout: "auto",
			unmountOnExit
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.SectionRefContext.Provider, { value: ref }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			ref,
			gap: 2.5,
			p: 2,
			"aria-label": `${title} section content`
		}, children))), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null));
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/controls-registry.tsx
	var __defProp = Object.defineProperty;
	var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	var queryArrayPropTypeUtil = (0, _elementor_editor_props.createArrayPropUtils)(_elementor_editor_props.queryPropTypeUtil.key, _elementor_editor_props.queryPropTypeUtil.schema);
	var controlTypes$1 = {
		image: {
			component: _elementor_editor_controls.ImageControl,
			layout: "custom",
			propTypeUtil: _elementor_editor_props.imagePropTypeUtil
		},
		"svg-media": {
			component: _elementor_editor_controls.SvgMediaControl,
			layout: "full",
			propTypeUtil: _elementor_editor_props.svgSrcPropTypeUtil
		},
		text: {
			component: _elementor_editor_controls.TextControl,
			layout: "full",
			propTypeUtil: _elementor_editor_props.stringPropTypeUtil
		},
		textarea: {
			component: _elementor_editor_controls.TextAreaControl,
			layout: "full",
			propTypeUtil: _elementor_editor_props.stringPropTypeUtil
		},
		size: {
			component: _elementor_editor_controls.SizeControl,
			layout: "two-columns",
			propTypeUtil: _elementor_editor_props.sizePropTypeUtil
		},
		select: {
			component: _elementor_editor_controls.SelectControlWrapper,
			layout: "two-columns",
			propTypeUtil: _elementor_editor_props.stringPropTypeUtil
		},
		chips: {
			component: _elementor_editor_controls.ChipsControl,
			layout: "full",
			propTypeUtil: _elementor_editor_props.stringArrayPropTypeUtil
		},
		link: {
			component: _elementor_editor_controls.LinkControl,
			layout: "custom",
			propTypeUtil: _elementor_editor_props.linkPropTypeUtil
		},
		query: {
			component: _elementor_editor_controls.QueryControl,
			layout: "full",
			propTypeUtil: _elementor_editor_props.queryPropTypeUtil
		},
		"query-chips": {
			component: _elementor_editor_controls.QueryChipsControl,
			layout: "full",
			propTypeUtil: queryArrayPropTypeUtil
		},
		"query-filter-repeater": {
			component: _elementor_editor_controls.QueryFilterRepeaterControl,
			layout: "full",
			propTypeUtil: _elementor_editor_props.queryFilterArrayPropTypeUtil
		},
		url: {
			component: _elementor_editor_controls.UrlControl,
			layout: "full",
			propTypeUtil: _elementor_editor_props.stringPropTypeUtil
		},
		switch: {
			component: _elementor_editor_controls.SwitchControl,
			layout: "two-columns",
			propTypeUtil: _elementor_editor_props.booleanPropTypeUtil
		},
		number: {
			component: _elementor_editor_controls.NumberControl,
			layout: "two-columns",
			propTypeUtil: _elementor_editor_props.numberPropTypeUtil
		},
		repeatable: {
			component: _elementor_editor_controls.RepeatableControl,
			layout: "full",
			propTypeUtil: void 0
		},
		"key-value": {
			component: _elementor_editor_controls.KeyValueControl,
			layout: "full",
			propTypeUtil: _elementor_editor_props.keyValuePropTypeUtil
		},
		"html-tag": {
			component: _elementor_editor_controls.HtmlTagControl,
			layout: "two-columns",
			propTypeUtil: _elementor_editor_props.stringPropTypeUtil
		},
		toggle: {
			component: _elementor_editor_controls.ToggleControl,
			layout: "full",
			propTypeUtil: _elementor_editor_props.stringPropTypeUtil
		},
		"date-time": {
			component: _elementor_editor_controls.DateTimeControl,
			layout: "full",
			propTypeUtil: _elementor_editor_props.DateTimePropTypeUtil
		},
		video: {
			component: _elementor_editor_controls.VideoMediaControl,
			layout: "full",
			propTypeUtil: _elementor_editor_props.videoSrcPropTypeUtil
		},
		"inline-editing": {
			component: _elementor_editor_controls.InlineEditingControl,
			layout: "full",
			propTypeUtil: _elementor_editor_props.escapedHtmlPropTypeUtil
		},
		email: {
			component: _elementor_editor_controls.EmailFormActionControl,
			layout: "custom",
			propTypeUtil: _elementor_editor_props.emailsPropTypeUtil
		},
		"date-range": {
			component: _elementor_editor_controls.DateRangeControl,
			layout: "custom",
			propTypeUtil: _elementor_editor_props.dateRangePropTypeUtil
		},
		"time-range": {
			component: _elementor_editor_controls.TimeRangeControl,
			layout: "custom",
			propTypeUtil: _elementor_editor_props.timeRangePropTypeUtil
		},
		"attachment-type": {
			component: _elementor_editor_controls.AttachmentTypeControl,
			layout: "custom",
			propTypeUtil: _elementor_editor_props.stringPropTypeUtil
		}
	};
	var ControlsRegistry = class {
		constructor(controlsRegistry2) {
			__publicField(this, "controlsRegistry", controlsRegistry2);
			this.controlsRegistry = controlsRegistry2;
		}
		get(type) {
			return this.controlsRegistry[type]?.component;
		}
		getLayout(type) {
			return this.controlsRegistry[type]?.layout;
		}
		getPropTypeUtil(type) {
			return this.controlsRegistry[type]?.propTypeUtil;
		}
		registry() {
			return this.controlsRegistry;
		}
		register(type, component, layout, propTypeUtil) {
			if (this.controlsRegistry[type]) throw new ControlTypeAlreadyRegisteredError({ context: { controlType: type } });
			this.controlsRegistry[type] = {
				component,
				layout,
				propTypeUtil
			};
		}
		unregister(type) {
			if (!this.controlsRegistry[type]) throw new ControlTypeNotRegisteredError({ context: { controlType: type } });
			delete this.controlsRegistry[type];
		}
	};
	var controlsRegistry = new ControlsRegistry(controlTypes$1);

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/control.tsx
	var Control$1 = /* @__PURE__ */ __name(({ props, type }) => {
		const ControlByType = controlsRegistry.get(type);
		const { element } = useElement();
		if (!ControlByType) throw new ControlTypeNotFoundError({ context: { controlType: type } });
		return /* @__PURE__ */ react.createElement(ControlByType, {
			...props,
			context: { elementId: element.id }
		});
	}, "Control");

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/control-type-container.tsx
	var ControlTypeContainer = ({ children, layout }) => {
		if (layout === "custom") return children;
		return /* @__PURE__ */ react.createElement(StyledContainer, { layout }, children);
	};
	var StyledContainer = (0, _elementor_ui.styled)(_elementor_ui.Box, { shouldForwardProp: (prop) => !["layout"].includes(prop) })(({ layout, theme }) => ({
		display: "grid",
		gridGap: theme.spacing(1),
		...getGridLayout(layout)
	}));
	var getGridLayout = (layout) => ({
		justifyContent: "space-between",
		...getStyleByLayout(layout)
	});
	var getStyleByLayout = (layout) => {
		if (layout === "full") return { gridTemplateColumns: "minmax(0, 1fr)" };
		if (layout === "two-columns") return {
			alignItems: "center",
			gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
		};
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/create-top-level-object-type.ts
	var createTopLevelObjectType = ({ schema }) => {
		return {
			key: "",
			kind: "object",
			meta: {},
			settings: {},
			default: null,
			shape: schema
		};
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/settings-field.tsx
	var HISTORY_DEBOUNCE_WAIT = 800;
	var SettingsField = ({ bind, children, propDisplayName }) => {
		const { element: { id: elementId }, elementType: { propsSchema, dependenciesPerTargetMapping = {} }, settings: currentElementSettings } = useElement();
		const value = { [bind]: currentElementSettings?.[bind] ?? null };
		const propType = createTopLevelObjectType({ schema: propsSchema });
		const undoableUpdateElementProp = useUndoableUpdateElementProp({
			elementId,
			propDisplayName
		});
		const { isDisabled, isHidden } = extractDependencyEffect(bind, propsSchema, currentElementSettings);
		if (isHidden) return null;
		const setValue = (newValue, _ = {}, meta) => {
			const { withHistory = true } = meta ?? {};
			const dependents = extractOrderedDependencies(dependenciesPerTargetMapping);
			const settingsWithDefaults = getElementSettingsWithDefaults(propsSchema, currentElementSettings);
			const settings = getUpdatedValues(newValue, dependents, propsSchema, settingsWithDefaults, elementId);
			if (withHistory) undoableUpdateElementProp(settings);
			else (0, _elementor_editor_elements.updateElementSettings)({
				id: elementId,
				props: settings,
				withHistory: false
			});
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropProvider, {
			propType,
			value,
			setValue,
			isDisabled
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropKeyProvider, { bind }, children));
	};
	function useUndoableUpdateElementProp({ elementId, propDisplayName }) {
		return (0, react.useMemo)(() => {
			return (0, _elementor_editor_v1_adapters.undoable)({
				do: (newSettings) => {
					const prevPropValue = (0, _elementor_editor_elements.getElementSettings)(elementId, Object.keys(newSettings));
					(0, _elementor_editor_elements.updateElementSettings)({
						id: elementId,
						props: newSettings,
						withHistory: false
					});
					(0, _elementor_editor_documents.setDocumentModifiedStatus)(true);
					return prevPropValue;
				},
				undo: ({}, prevProps) => {
					(0, _elementor_editor_elements.updateElementSettings)({
						id: elementId,
						props: prevProps,
						withHistory: false
					});
				}
			}, {
				title: (0, _elementor_editor_elements.getElementLabel)(elementId),
				subtitle: (0, _wordpress_i18n.__)("%s edited", "elementor").replace("%s", propDisplayName),
				debounce: { wait: HISTORY_DEBOUNCE_WAIT }
			});
		}, [elementId, propDisplayName]);
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/field-indicators-registry.ts
	var indicatorsRegistry = {
		settings: /* @__PURE__ */ new Map(),
		styles: /* @__PURE__ */ new Map()
	};
	var DEFAULT_PRIORITY = 10;
	var FIELD_TYPE = {
		SETTINGS: "settings",
		STYLES: "styles"
	};
	var registerFieldIndicator = ({ fieldType, id, indicator, priority = DEFAULT_PRIORITY }) => {
		indicatorsRegistry[fieldType].set(id, {
			id,
			indicator,
			priority
		});
	};
	var getFieldIndicators = (fieldType) => Array.from(indicatorsRegistry[fieldType].values()).sort((a, b) => a.priority - b.priority).map(({ id, indicator: Adornment }) => ({
		id,
		Adornment
	}));

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/settings-control.tsx
	var Wrapper$1 = (0, _elementor_ui.styled)("span")`
	display: contents;
`;
	var SettingsControl = ({ control: { value, type } }) => {
		if (!controlsRegistry.get(value.type)) return null;
		const layout = value.meta?.layout || controlsRegistry.getLayout(value.type);
		const controlProps = populateChildControlProps(value.props);
		if (layout === "custom") controlProps.label = value.label;
		if (type === "element-control") return /* @__PURE__ */ react.createElement(ControlLayout, {
			control: value,
			layout,
			controlProps
		});
		return /* @__PURE__ */ react.createElement(SettingsField, {
			bind: value.bind,
			propDisplayName: value.label || value.bind
		}, /* @__PURE__ */ react.createElement(ControlLayout, {
			control: value,
			layout,
			controlProps
		}));
	};
	var ControlLayout = ({ control, layout, controlProps }) => {
		const controlType = control.type;
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlAdornmentsProvider, { items: getFieldIndicators("settings") }, control.meta?.topDivider && /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(Wrapper$1, { "data-type": "settings-field" }, /* @__PURE__ */ react.createElement(ControlTypeContainer, { layout }, control.label && layout !== "custom" ? /* @__PURE__ */ react.createElement(ControlLabel, null, control.label) : null, /* @__PURE__ */ react.createElement(Control$1, {
			type: controlType,
			props: controlProps
		}))));
	};
	function populateChildControlProps(props) {
		if (props.childControlType) {
			const childComponent = controlsRegistry.get(props.childControlType);
			const childPropType = controlsRegistry.getPropTypeUtil(props.childControlType);
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

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/settings-tab.tsx
	var SettingsTab = () => {
		const { elementType, element, settings } = useElement();
		const settingsDefault = useDefaultPanelSettings();
		const currentSettings = settings;
		const isDefaultExpanded = (sectionId) => !!sectionId && settingsDefault.defaultSectionsExpanded.settings?.includes(sectionId);
		return /* @__PURE__ */ react.createElement(_elementor_session.SessionStorageProvider, { prefix: element.id }, /* @__PURE__ */ react.createElement(SectionsList, null, elementType.controls.map((control, index) => {
			if (isControl(control)) return /* @__PURE__ */ react.createElement(SettingsControl, {
				key: getKey(control, element),
				control
			});
			const { type, value } = control;
			if (type === "section") {
				const sectionItems = renderSectionItems({
					items: value.items,
					element,
					propsSchema: elementType.propsSchema,
					settings: currentSettings
				});
				if (!sectionItems.length) return null;
				return /* @__PURE__ */ react.createElement(Section, {
					title: value.label,
					key: type + "." + index,
					defaultExpanded: isDefaultExpanded(value.id)
				}, sectionItems);
			}
			return null;
		})));
	};
	function getKey(control, element) {
		if (control.type === "control") return control.value.bind + "." + element.id;
		return control.value.type + "." + element.id;
	}
	function isControl(control) {
		return control.type === "control" || control.type === "element-control";
	}
	function renderSectionItems({ items, element, propsSchema, settings }) {
		return items?.flatMap((item) => {
			if (!isControl(item)) return [];
			if (item.type === "control" && isControlHiddenByDependencies(item, propsSchema, settings)) return [];
			return [/* @__PURE__ */ react.createElement(SettingsControl, {
				key: getKey(item, element),
				control: item
			})];
		}) ?? [];
	}
	function isControlHiddenByDependencies(control, propsSchema, settings) {
		const { isHidden } = extractDependencyEffect(control.value.bind, propsSchema, settings);
		return isHidden;
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/hooks/use-default-style-tag-from-preview.ts
	function useDefaultStyleTagFromPreview(elementId) {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)([
			(0, _elementor_editor_v1_adapters.windowEvent)("elementor/preview/atomic-widget/render"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/settings"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/set-settings"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/select")
		], () => (0, _elementor_editor_elements.getDefaultStyleTagFromPreviewElement)(elementId));
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/utils.ts
	var DEFAULT_STATE = "normal";
	var DEFAULT_BREAKPOINT$2 = "desktop";
	var getStateKey = (state) => state ?? "normal";
	var getBreakpointKey = (breakpoint) => breakpoint ?? DEFAULT_BREAKPOINT$2;
	var getValueFromInheritanceChain = (inheritanceChain, styleId, meta) => inheritanceChain.find(({ style, variant: { meta: { breakpoint, state } } }) => style.id === styleId && breakpoint === meta.breakpoint && state === meta.state);

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/create-snapshots-manager.ts
	function createSnapshotsManager(getStylesByMeta, breakpointsRoot) {
		const breakpointsInheritancePaths = makeBreakpointsInheritancePaths(breakpointsRoot);
		const allBreakpointStatesSnapshots = {};
		const buildMissingSnapshotsForBreakpoint = (currentBreakpointId, parentBreakpoint, state) => {
			const currentBreakpointKey = getBreakpointKey(currentBreakpointId);
			const stateKey = getStateKey(state);
			if (!allBreakpointStatesSnapshots[currentBreakpointKey]) allBreakpointStatesSnapshots[currentBreakpointKey] = { [DEFAULT_STATE]: buildStateSnapshotSlot(getStylesByMeta({
				breakpoint: currentBreakpointId,
				state: null
			}), parentBreakpoint, {}, null) };
			if (state && !allBreakpointStatesSnapshots[currentBreakpointKey]?.[stateKey]) allBreakpointStatesSnapshots[currentBreakpointKey][stateKey] = buildStateSnapshotSlot(getStylesByMeta({
				breakpoint: currentBreakpointId,
				state
			}), parentBreakpoint, allBreakpointStatesSnapshots[currentBreakpointKey] ?? {}, state);
		};
		return (meta) => {
			const { breakpoint, state } = meta;
			const stateKey = getStateKey(state);
			const breakpointKey = getBreakpointKey(breakpoint);
			if (allBreakpointStatesSnapshots[breakpointKey]?.[stateKey]) return allBreakpointStatesSnapshots[breakpointKey]?.[stateKey]?.snapshot;
			const breakpointsChain = [...breakpointsInheritancePaths[breakpointKey], breakpoint];
			breakpointsChain.forEach((breakpointId, index) => {
				const parentBreakpointId = index > 0 ? breakpointsChain[index - 1] : null;
				buildMissingSnapshotsForBreakpoint(breakpointId, parentBreakpointId ? allBreakpointStatesSnapshots[parentBreakpointId] : void 0, state);
			});
			return allBreakpointStatesSnapshots[breakpointKey]?.[stateKey]?.snapshot;
		};
	}
	function makeBreakpointsInheritancePaths(root) {
		const breakpoints = {};
		const traverse = (node, parent) => {
			const { id, children } = node;
			breakpoints[id] = parent ? [...parent] : [];
			children?.forEach((child) => {
				traverse(child, [...breakpoints[id] ?? [], id]);
			});
		};
		traverse(root);
		return breakpoints;
	}
	function buildStateSnapshotSlot(styles, parentBreakpoint, currentBreakpoint, state) {
		const initialSlot = buildInitialSnapshotFromStyles(styles);
		if (!state) return {
			snapshot: mergeSnapshots([initialSlot.snapshot, parentBreakpoint?.[DEFAULT_STATE]?.snapshot]),
			stateSpecificSnapshot: void 0
		};
		return {
			snapshot: mergeSnapshots([
				initialSlot.snapshot,
				parentBreakpoint?.[state]?.stateSpecificSnapshot,
				currentBreakpoint[DEFAULT_STATE]?.snapshot
			]),
			stateSpecificSnapshot: mergeSnapshots([initialSlot.stateSpecificSnapshot, parentBreakpoint?.[state]?.stateSpecificSnapshot])
		};
	}
	function buildInitialSnapshotFromStyles(styles) {
		const snapshot = {};
		styles.forEach((styleData) => {
			const { variant: { props } } = styleData;
			Object.entries(props).forEach(([key, value]) => {
				const filteredValue = (0, _elementor_editor_props.filterEmptyValues)(value);
				const filteredVariableValue = filteredValue?.$$type?.includes("variable") && !(0, _elementor_editor_variables.hasVariable)(filteredValue?.value) ? null : filteredValue;
				if (filteredVariableValue === null) return;
				if (!snapshot[key]) snapshot[key] = [];
				const snapshotPropValue = {
					...styleData,
					value: filteredVariableValue
				};
				snapshot[key].push(snapshotPropValue);
			});
		});
		return {
			snapshot,
			stateSpecificSnapshot: snapshot
		};
	}
	function mergeSnapshots(snapshots) {
		const snapshot = {};
		snapshots.filter(Boolean).forEach((currentSnapshot) => Object.entries(currentSnapshot).forEach(([key, values]) => {
			if (!snapshot[key]) snapshot[key] = [];
			snapshot[key] = snapshot[key].concat(values);
		}));
		return snapshot;
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/create-styles-inheritance.ts
	function createStylesInheritance(styleDefs, breakpointsRoot) {
		const styleVariantsByMeta = buildStyleVariantsByMetaMapping(styleDefs);
		const getStyles = ({ breakpoint, state }) => styleVariantsByMeta?.[getBreakpointKey(breakpoint)]?.[getStateKey(state)] ?? [];
		return {
			getSnapshot: createSnapshotsManager(getStyles, breakpointsRoot),
			getInheritanceChain: (snapshot, path, topLevelPropType) => {
				const [field, ...nextFields] = path;
				let inheritanceChain = snapshot[field] ?? [];
				if (nextFields.length > 0) {
					const filterPropType = getFilterPropType(topLevelPropType, nextFields);
					inheritanceChain = inheritanceChain.map(({ value: styleValue, ...rest }) => ({
						...rest,
						value: getValueByPath(styleValue, nextFields, filterPropType)
					})).filter(({ value: styleValue }) => !(0, _elementor_editor_props.isEmpty)(styleValue));
				}
				return inheritanceChain;
			}
		};
	}
	function buildStyleVariantsByMetaMapping(styleDefs) {
		const breakpointStateSlots = {};
		styleDefs.forEach((styleDef) => {
			const provider = getProviderByStyleId(styleDef.id)?.getKey() ?? null;
			styleDef.variants.forEach((variant) => {
				const { meta } = variant;
				const { state, breakpoint } = meta;
				const breakpointKey = getBreakpointKey(breakpoint);
				const stateKey = getStateKey(state);
				if (!breakpointStateSlots[breakpointKey]) breakpointStateSlots[breakpointKey] = {};
				const breakpointNode = breakpointStateSlots[breakpointKey];
				if (!breakpointNode[stateKey]) breakpointNode[stateKey] = [];
				breakpointNode[stateKey].push({
					style: styleDef,
					variant,
					provider
				});
			});
		});
		return breakpointStateSlots;
	}
	function getValueByPath(value, path, filterPropType) {
		if (!value || typeof value !== "object") return null;
		if (shouldUseOriginalValue(filterPropType, value)) return value;
		return path.reduce((currentScope, key) => {
			if (!currentScope) return null;
			if ((0, _elementor_editor_props.isTransformable)(currentScope)) return currentScope.value?.[key] ?? null;
			if (typeof currentScope === "object") return currentScope[key] ?? null;
			return null;
		}, value);
	}
	function shouldUseOriginalValue(filterPropType, value) {
		return !!filterPropType && (0, _elementor_editor_props.isTransformable)(value) && filterPropType.key !== value.$$type;
	}
	var getFilterPropType = (propType, path) => {
		if (!propType || propType.kind !== "union") return null;
		return Object.values(propType.prop_types).find((type) => {
			return !!path.reduce((currentScope, key) => {
				if (currentScope?.kind !== "object") return null;
				const { shape } = currentScope;
				if (shape[key]) return shape[key];
				return null;
			}, type);
		}) ?? null;
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/contexts/styles-inheritance-context.tsx
	var Context = (0, react.createContext)(null);
	function StyleInheritanceProvider({ children }) {
		const { getSnapshot, getInheritanceChain } = createStylesInheritance(useAppliedStyles(), (0, _elementor_editor_responsive.getBreakpointsTree)());
		return /* @__PURE__ */ react.createElement(Context.Provider, { value: {
			getSnapshot,
			getInheritanceChain
		} }, children);
	}
	function useStylesInheritanceSnapshot() {
		const context = (0, react.useContext)(Context);
		const { meta } = useStyle();
		if (!context) throw new Error("useStylesInheritanceSnapshot must be used within a StyleInheritanceProvider");
		if (!meta) return null;
		return context.getSnapshot(meta) ?? null;
	}
	function useStylesInheritanceChain(path) {
		const context = (0, react.useContext)(Context);
		if (!context) throw new Error("useStylesInheritanceChain must be used within a StyleInheritanceProvider");
		const topLevelPropType = (0, _elementor_editor_styles.getStylesSchema)()?.[path[0]];
		const snapshot = useStylesInheritanceSnapshot();
		if (!snapshot) return [];
		return context.getInheritanceChain(snapshot, path, topLevelPropType);
	}
	var EMPTY_INHERITED_VALUES = {};
	function useInheritedValues(propKeys) {
		const snapshot = useStylesInheritanceSnapshot();
		return (0, react.useMemo)(() => {
			if (!snapshot || propKeys.length === 0) return EMPTY_INHERITED_VALUES;
			return Object.fromEntries(propKeys.map((key) => [key, snapshot[key]?.[0]?.value ?? null]));
		}, [snapshot, propKeys]);
	}
	var useAppliedStyles = () => {
		const currentClassesProp = useClassesProp();
		const baseStyles = useBaseStyles();
		const defaultTagStyleId = useDefaultTagStyleId();
		const { id: activeStyleId } = useStyle();
		useStylesRerender();
		const classesProp = usePanelElementSetting(currentClassesProp);
		const appliedStyles = _elementor_editor_props.classesPropTypeUtil.extract(classesProp) ?? [];
		const applicableIds = [
			...baseStyles,
			...appliedStyles,
			...defaultTagStyleId ? [defaultTagStyleId] : [],
			...activeStyleId ? [activeStyleId] : []
		];
		return _elementor_editor_styles_repository.stylesRepository.all().filter((style) => applicableIds.includes(style.id));
	};
	var useBaseStyles = () => {
		const { elementType } = useElement();
		const widgetCache = (0, _elementor_editor_elements.getWidgetsCache)()?.[elementType.key];
		return Object.keys(widgetCache?.base_styles ?? {});
	};
	var useDefaultTagStyleId = () => {
		const { element } = useElement();
		return useDefaultStyleTagFromPreview(element.id);
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/hooks/use-active-style-def-id.ts
	function useActiveStyleDefId(classProp) {
		const [activeStyledDefId, setActiveStyledDefId] = useStateByElement("active-style-id", null);
		const appliedClassesIds = usePanelElementSetting(classProp)?.value || [];
		const validAppliedClassesIds = useValidClassIds(appliedClassesIds);
		const fallback = useFirstAppliedClass(appliedClassesIds);
		return [useActiveAndAppliedClassId(activeStyledDefId, validAppliedClassesIds) || fallback?.id || null, setActiveStyledDefId];
	}
	function useValidClassIds(appliedClassesIds) {
		const providers = (0, _elementor_editor_styles_repository.useProviders)();
		const allKnownIds = new Set(providers.flatMap((provider) => provider.actions.all().map((style) => style.id)));
		return appliedClassesIds.filter((id) => allKnownIds.has(id));
	}
	function useFirstAppliedClass(appliedClassesIds) {
		const { element } = useElement();
		const stylesDefs = (0, _elementor_editor_elements.getElementStyles)(element.id) ?? {};
		return Object.values(stylesDefs).find((styleDef) => appliedClassesIds.includes(styleDef.id));
	}
	function useActiveAndAppliedClassId(id, appliedClassesIds) {
		return !!id && appliedClassesIds.includes(id) ? id : null;
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/hooks/use-styles-field.ts
	function useStylesField(propName, meta) {
		const { values, setValues, canEdit } = useStylesFields([propName]);
		const value = values?.[propName] ?? null;
		const setValue = (newValue) => {
			setValues({ [propName]: newValue }, meta);
		};
		return {
			value,
			setValue,
			canEdit
		};
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/conditional-field.tsx
	var ConditionalField = ({ children }) => {
		const { propType, value, resetValue } = (0, _elementor_editor_controls.useBoundProp)();
		const depList = getDependencies(propType);
		const { values: depValues, setValues: setDepValues } = useStylesFields(depList);
		const inheritedValues = useInheritedValues(depList);
		const resolvedValues = resolveWithInherited(depValues, inheritedValues);
		const isHidden = !(0, _elementor_editor_props.isDependencyMet)(propType?.dependencies, resolvedValues).isMet;
		useSyncDepsWithInherited({
			isHidden,
			depValues,
			value,
			inheritedValues,
			setDepValues,
			resetValue
		});
		return isHidden ? null : children;
	};
	function wasDepsCleared(prevDepValues, depValues) {
		if (!prevDepValues) return false;
		return Object.keys(prevDepValues).some((key) => prevDepValues[key] && (!depValues || !depValues[key]));
	}
	function useSyncDepsWithInherited({ isHidden, depValues, value, inheritedValues, setDepValues, resetValue }) {
		const syncRef = (0, react.useRef)({
			hasSynced: false,
			prevDepValues: depValues
		});
		(0, react.useEffect)(() => {
			const { hasSynced, prevDepValues } = syncRef.current;
			if (hasSynced && value && wasDepsCleared(prevDepValues, depValues) || isHidden && depValues && value) resetValue();
			if (isHidden || !value || !depValues) {
				syncRef.current = {
					hasSynced: false,
					prevDepValues: depValues
				};
				return;
			}
			if (hasSynced) {
				syncRef.current.prevDepValues = depValues;
				return;
			}
			syncRef.current = {
				hasSynced: true,
				prevDepValues: depValues
			};
			Object.entries(depValues).forEach(([key, depValue]) => {
				const inherited = inheritedValues[key];
				if (!depValue && inherited) setDepValues({ [key]: inherited }, { history: { propDisplayName: key } });
			});
		}, [
			isHidden,
			depValues,
			value,
			inheritedValues,
			setDepValues,
			resetValue
		]);
	}
	function resolveWithInherited(localValues, inheritedValues) {
		if (!localValues) return Object.keys(inheritedValues).length > 0 ? { ...inheritedValues } : null;
		return Object.fromEntries(Object.entries(localValues).map(([key, val]) => [key, val ?? inheritedValues[key] ?? null]));
	}
	function getDependencies(propType) {
		if (!propType?.dependencies?.terms.length) return [];
		return propType.dependencies.terms.flatMap((term) => !(0, _elementor_editor_props.isDependency)(term) ? term.path : []);
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/styles-field.tsx
	var DIMENSION_SIDES = [
		"block-start",
		"block-end",
		"inline-start",
		"inline-end"
	];
	function buildResolvedPlaceholder(chain, startIndex) {
		const firstEntry = chain[startIndex];
		if (!firstEntry) return;
		const firstValue = firstEntry.value;
		if (!_elementor_editor_props.dimensionsPropTypeUtil.isValid(firstValue)) return firstValue;
		const firstDims = _elementor_editor_props.dimensionsPropTypeUtil.extract(firstValue);
		if (DIMENSION_SIDES.every((side) => firstDims?.[side] !== null && firstDims?.[side] !== void 0)) return firstValue;
		const merged = {};
		DIMENSION_SIDES.forEach((side) => {
			if (firstDims?.[side] !== null && firstDims?.[side] !== void 0) merged[side] = firstDims[side];
		});
		for (let i = startIndex + 1; i < chain.length; i++) {
			const val = chain[i].value;
			if (_elementor_editor_props.sizePropTypeUtil.isValid(val)) {
				DIMENSION_SIDES.forEach((side) => {
					if (merged[side] === null || merged[side] === void 0) merged[side] = val;
				});
				break;
			} else if (_elementor_editor_props.dimensionsPropTypeUtil.isValid(val)) {
				const dims = _elementor_editor_props.dimensionsPropTypeUtil.extract(val);
				DIMENSION_SIDES.forEach((side) => {
					if ((merged[side] === null || merged[side] === void 0) && dims?.[side] !== null && dims?.[side] !== void 0) merged[side] = dims[side];
				});
			}
			if (DIMENSION_SIDES.every((side) => merged[side] !== null && merged[side] !== void 0)) break;
		}
		return _elementor_editor_props.dimensionsPropTypeUtil.create({
			"block-start": merged["block-start"] ?? null,
			"block-end": merged["block-end"] ?? null,
			"inline-start": merged["inline-start"] ?? null,
			"inline-end": merged["inline-end"] ?? null
		});
	}
	var StylesField = ({ bind, propDisplayName, children }) => {
		const stylesSchema = (0, _elementor_editor_styles.getStylesSchema)();
		const stylesInheritanceChain = useStylesInheritanceChain([bind]);
		const { value, canEdit, ...fields } = useStylesField(bind, { history: { propDisplayName } });
		const propType = createTopLevelObjectType({ schema: stylesSchema });
		const placeholderStartIndex = value ? 1 : 0;
		const placeholderValues = { [bind]: buildResolvedPlaceholder(stylesInheritanceChain, placeholderStartIndex) };
		const setValue = (newValue) => {
			fields.setValue(newValue[bind]);
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlAdornmentsProvider, { items: getFieldIndicators("styles") }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropProvider, {
			propType,
			value: { [bind]: value },
			setValue,
			placeholder: placeholderValues,
			isDisabled: () => !canEdit
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropKeyProvider, { bind }, /* @__PURE__ */ react.createElement(ConditionalField, null, children))));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/section-content.tsx
	var SectionContent = ({ gap = 2, sx, children, "aria-label": ariaLabel, className }) => /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
		gap,
		sx: { ...sx },
		"aria-label": ariaLabel,
		className
	}, children);

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/background-section/background-section.tsx
	var BACKGROUND_LABEL = (0, _wordpress_i18n.__)("Background", "elementor");
	var BackgroundSection = () => {
		return /* @__PURE__ */ react.createElement(SectionContent, null, /* @__PURE__ */ react.createElement(StylesField, {
			bind: "background",
			propDisplayName: BACKGROUND_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.BackgroundControl, null)));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/styles-field-layout.tsx
	var StylesFieldLayout = react.forwardRef((props, ref) => {
		const { direction = "row", children, label, infoTooltip } = props;
		const LayoutComponent = direction === "row" ? Row : Column;
		return /* @__PURE__ */ react.createElement(LayoutComponent, {
			label,
			infoTooltip,
			ref,
			children
		});
	});
	var Row = react.forwardRef(({ label, children, infoTooltip }, ref) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			gap: 2,
			alignItems: "center",
			flexWrap: "nowrap",
			ref,
			"aria-label": `${label} control`
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 6
		}, /* @__PURE__ */ react.createElement(ControlLabel, { infoTooltip }, label)), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 6,
			sx: (theme) => ({ width: `calc(50% - ${theme.spacing(2)})` })
		}, children));
	});
	var Column = react.forwardRef(({ label, children, infoTooltip }, ref) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			gap: .75,
			ref
		}, /* @__PURE__ */ react.createElement(ControlLabel, { infoTooltip }, label), children);
	});

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/border-section/border-color-field.tsx
	var BORDER_COLOR_LABEL = (0, _wordpress_i18n.__)("Border color", "elementor");
	var BorderColorField = () => /* @__PURE__ */ react.createElement(StylesField, {
		bind: "border-color",
		propDisplayName: BORDER_COLOR_LABEL
	}, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: BORDER_COLOR_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ColorControl, null)));

//#endregion
//#region packages/packages/core/editor-editing-panel/src/hooks/use-direction.ts
	function useDirection() {
		const isUiRtl = "rtl" === (0, _elementor_ui.useTheme)().direction;
		return {
			isSiteRtl: !!(0, _elementor_editor_v1_adapters.getElementorFrontendConfig)()?.is_rtl,
			isUiRtl
		};
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/components/ui-providers.tsx
	var UiProviders = ({ children }) => {
		const { isSiteRtl } = useDirection();
		return /* @__PURE__ */ react.createElement(_elementor_ui.DirectionProvider, { rtl: isSiteRtl }, /* @__PURE__ */ react.createElement(_elementor_ui.ThemeProvider, null, children));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/border-section/border-radius-field.tsx
	var BORDER_RADIUS_LABEL = (0, _wordpress_i18n.__)("Border radius", "elementor");
	var StartStartIcon = (0, _elementor_ui.withDirection)(_elementor_icons.RadiusTopLeftIcon);
	var StartEndIcon = (0, _elementor_ui.withDirection)(_elementor_icons.RadiusTopRightIcon);
	var EndStartIcon = (0, _elementor_ui.withDirection)(_elementor_icons.RadiusBottomLeftIcon);
	var EndEndIcon = (0, _elementor_ui.withDirection)(_elementor_icons.RadiusBottomRightIcon);
	var getStartStartLabel = (isSiteRtl) => isSiteRtl ? (0, _wordpress_i18n.__)("Top right", "elementor") : (0, _wordpress_i18n.__)("Top left", "elementor");
	var getStartStartAriaLabel = (isSiteRtl) => isSiteRtl ? (0, _wordpress_i18n.__)("Border top right radius", "elementor") : (0, _wordpress_i18n.__)("Border top left radius", "elementor");
	var getStartEndLabel = (isSiteRtl) => isSiteRtl ? (0, _wordpress_i18n.__)("Top left", "elementor") : (0, _wordpress_i18n.__)("Top right", "elementor");
	var getStartEndAriaLabel = (isSiteRtl) => isSiteRtl ? (0, _wordpress_i18n.__)("Border top left radius", "elementor") : (0, _wordpress_i18n.__)("Border top right radius", "elementor");
	var getEndStartLabel = (isSiteRtl) => isSiteRtl ? (0, _wordpress_i18n.__)("Bottom right", "elementor") : (0, _wordpress_i18n.__)("Bottom left", "elementor");
	var getEndStartAriaLabel = (isSiteRtl) => isSiteRtl ? (0, _wordpress_i18n.__)("Border bottom right radius", "elementor") : (0, _wordpress_i18n.__)("Border bottom left radius", "elementor");
	var getEndEndLabel = (isSiteRtl) => isSiteRtl ? (0, _wordpress_i18n.__)("Bottom left", "elementor") : (0, _wordpress_i18n.__)("Bottom right", "elementor");
	var getEndEndAriaLabel = (isSiteRtl) => isSiteRtl ? (0, _wordpress_i18n.__)("Border bottom left radius", "elementor") : (0, _wordpress_i18n.__)("Border bottom right radius", "elementor");
	var getCorners = (isSiteRtl) => [
		{
			label: getStartStartLabel(isSiteRtl),
			ariaLabel: getStartStartAriaLabel(isSiteRtl),
			icon: /* @__PURE__ */ react.createElement(StartStartIcon, { fontSize: "tiny" }),
			bind: "start-start"
		},
		{
			label: getStartEndLabel(isSiteRtl),
			ariaLabel: getStartEndAriaLabel(isSiteRtl),
			icon: /* @__PURE__ */ react.createElement(StartEndIcon, { fontSize: "tiny" }),
			bind: "start-end"
		},
		{
			label: getEndStartLabel(isSiteRtl),
			ariaLabel: getEndStartAriaLabel(isSiteRtl),
			icon: /* @__PURE__ */ react.createElement(EndStartIcon, { fontSize: "tiny" }),
			bind: "end-start"
		},
		{
			label: getEndEndLabel(isSiteRtl),
			ariaLabel: getEndEndAriaLabel(isSiteRtl),
			icon: /* @__PURE__ */ react.createElement(EndEndIcon, { fontSize: "tiny" }),
			bind: "end-end"
		}
	];
	var BorderRadiusField = () => {
		const { isSiteRtl } = useDirection();
		return /* @__PURE__ */ react.createElement(UiProviders, null, /* @__PURE__ */ react.createElement(StylesField, {
			bind: "border-radius",
			propDisplayName: BORDER_RADIUS_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.EqualUnequalSizesControl, {
			items: getCorners(isSiteRtl),
			label: BORDER_RADIUS_LABEL,
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.BorderCornersIcon, { fontSize: "tiny" }),
			tooltipLabel: (0, _wordpress_i18n.__)("Adjust corners", "elementor"),
			multiSizePropTypeUtil: _elementor_editor_props.borderRadiusPropTypeUtil
		})));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/border-section/border-style-field.tsx
	var BORDER_TYPE_LABEL = (0, _wordpress_i18n.__)("Border type", "elementor");
	var borderStyles = [
		{
			value: "none",
			label: (0, _wordpress_i18n.__)("None", "elementor")
		},
		{
			value: "solid",
			label: (0, _wordpress_i18n.__)("Solid", "elementor")
		},
		{
			value: "dashed",
			label: (0, _wordpress_i18n.__)("Dashed", "elementor")
		},
		{
			value: "dotted",
			label: (0, _wordpress_i18n.__)("Dotted", "elementor")
		},
		{
			value: "double",
			label: (0, _wordpress_i18n.__)("Double", "elementor")
		},
		{
			value: "groove",
			label: (0, _wordpress_i18n.__)("Groove", "elementor")
		},
		{
			value: "ridge",
			label: (0, _wordpress_i18n.__)("Ridge", "elementor")
		},
		{
			value: "inset",
			label: (0, _wordpress_i18n.__)("Inset", "elementor")
		},
		{
			value: "outset",
			label: (0, _wordpress_i18n.__)("Outset", "elementor")
		}
	];
	var BorderStyleField = () => /* @__PURE__ */ react.createElement(StylesField, {
		bind: "border-style",
		propDisplayName: BORDER_TYPE_LABEL
	}, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: BORDER_TYPE_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SelectControl, { options: borderStyles })));

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/border-section/border-width-field.tsx
	var BORDER_WIDTH_LABEL = (0, _wordpress_i18n.__)("Border width", "elementor");
	var InlineStartIcon$1 = (0, _elementor_ui.withDirection)(_elementor_icons.SideRightIcon);
	var InlineEndIcon$1 = (0, _elementor_ui.withDirection)(_elementor_icons.SideLeftIcon);
	var getEdges = (isSiteRtl) => [
		{
			label: (0, _wordpress_i18n.__)("Top", "elementor"),
			ariaLabel: (0, _wordpress_i18n.__)("Border top width", "elementor"),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.SideTopIcon, { fontSize: "tiny" }),
			bind: "block-start"
		},
		{
			label: isSiteRtl ? (0, _wordpress_i18n.__)("Left", "elementor") : (0, _wordpress_i18n.__)("Right", "elementor"),
			ariaLabel: isSiteRtl ? (0, _wordpress_i18n.__)("Border left width", "elementor") : (0, _wordpress_i18n.__)("Border right width", "elementor"),
			icon: /* @__PURE__ */ react.createElement(InlineStartIcon$1, { fontSize: "tiny" }),
			bind: "inline-end"
		},
		{
			label: (0, _wordpress_i18n.__)("Bottom", "elementor"),
			ariaLabel: (0, _wordpress_i18n.__)("Border bottom width", "elementor"),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.SideBottomIcon, { fontSize: "tiny" }),
			bind: "block-end"
		},
		{
			label: isSiteRtl ? (0, _wordpress_i18n.__)("Right", "elementor") : (0, _wordpress_i18n.__)("Left", "elementor"),
			ariaLabel: isSiteRtl ? (0, _wordpress_i18n.__)("Border right width", "elementor") : (0, _wordpress_i18n.__)("Border left width", "elementor"),
			icon: /* @__PURE__ */ react.createElement(InlineEndIcon$1, { fontSize: "tiny" }),
			bind: "inline-start"
		}
	];
	var BorderWidthField = () => {
		const { isSiteRtl } = useDirection();
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "border-width",
			propDisplayName: BORDER_WIDTH_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.EqualUnequalSizesControl, {
			items: getEdges(isSiteRtl),
			label: BORDER_WIDTH_LABEL,
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.SideAllIcon, { fontSize: "tiny" }),
			tooltipLabel: (0, _wordpress_i18n.__)("Adjust borders", "elementor"),
			multiSizePropTypeUtil: _elementor_editor_props.borderWidthPropTypeUtil
		}));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/border-section/border-section.tsx
	var BorderSection = () => /* @__PURE__ */ react.createElement(SectionContent, null, /* @__PURE__ */ react.createElement(BorderWidthField, null), /* @__PURE__ */ react.createElement(BorderColorField, null), /* @__PURE__ */ react.createElement(BorderStyleField, null), /* @__PURE__ */ react.createElement(BorderRadiusField, null));

//#endregion
//#region packages/packages/core/editor-editing-panel/src/utils/can-element-have-children.ts
	var canElementHaveChildren = (elementId) => {
		const container = (0, _elementor_editor_elements.getContainer)(elementId);
		if (!container) return false;
		return container.model.get("elType") !== "widget";
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/utils/get-recently-used-styles.ts
	var getRecentlyUsedList = async (elementId) => {
		if (!elementId) return [];
		const resolver = (0, _elementor_editor_canvas.createPropsResolver)({
			transformers: _elementor_editor_canvas.styleTransformersRegistry,
			schema: (0, _elementor_editor_styles.getStylesSchema)()
		});
		const styles = (0, _elementor_editor_elements.getElementStyles)(elementId) ?? {};
		const variants = Object.keys(styles ?? {}).map((key) => styles?.[key]?.variants ?? []);
		const resolved = await Promise.all(variants.flat().map(async (variant) => {
			const result = await resolver({
				props: variant.props ?? {},
				schema: (0, _elementor_editor_styles.getStylesSchema)()
			});
			return Object.entries(result).filter(([, value]) => value !== null).map(([key]) => key);
		}));
		const propSet = new Set(resolved.flat());
		return Array.from(propSet);
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/panel-divider.tsx
	var PanelDivider = () => /* @__PURE__ */ react.createElement(_elementor_ui.Divider, { sx: { my: .5 } });

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/effects-section/blend-mode-field.tsx
	var BLEND_MODE_LABEL = (0, _wordpress_i18n.__)("Blend mode", "elementor");
	var blendModeOptions = [
		{
			label: (0, _wordpress_i18n.__)("Normal", "elementor"),
			value: "normal"
		},
		{
			label: (0, _wordpress_i18n.__)("Multiply", "elementor"),
			value: "multiply"
		},
		{
			label: (0, _wordpress_i18n.__)("Screen", "elementor"),
			value: "screen"
		},
		{
			label: (0, _wordpress_i18n.__)("Overlay", "elementor"),
			value: "overlay"
		},
		{
			label: (0, _wordpress_i18n.__)("Darken", "elementor"),
			value: "darken"
		},
		{
			label: (0, _wordpress_i18n.__)("Lighten", "elementor"),
			value: "lighten"
		},
		{
			label: (0, _wordpress_i18n.__)("Color dodge", "elementor"),
			value: "color-dodge"
		},
		{
			label: (0, _wordpress_i18n.__)("Color burn", "elementor"),
			value: "color-burn"
		},
		{
			label: (0, _wordpress_i18n.__)("Saturation", "elementor"),
			value: "saturation"
		},
		{
			label: (0, _wordpress_i18n.__)("Color", "elementor"),
			value: "color"
		},
		{
			label: (0, _wordpress_i18n.__)("Difference", "elementor"),
			value: "difference"
		},
		{
			label: (0, _wordpress_i18n.__)("Exclusion", "elementor"),
			value: "exclusion"
		},
		{
			label: (0, _wordpress_i18n.__)("Hue", "elementor"),
			value: "hue"
		},
		{
			label: (0, _wordpress_i18n.__)("Luminosity", "elementor"),
			value: "luminosity"
		},
		{
			label: (0, _wordpress_i18n.__)("Soft light", "elementor"),
			value: "soft-light"
		},
		{
			label: (0, _wordpress_i18n.__)("Hard light", "elementor"),
			value: "hard-light"
		}
	];
	var BlendModeField = () => {
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "mix-blend-mode",
			propDisplayName: BLEND_MODE_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: BLEND_MODE_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SelectControl, { options: blendModeOptions })));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/effects-section/opacity-control-field.tsx
	var OPACITY_LABEL = (0, _wordpress_i18n.__)("Opacity", "elementor");
	var OpacityControlField = () => {
		const rowRef = (0, react.useRef)(null);
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "opacity",
			propDisplayName: OPACITY_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, {
			ref: rowRef,
			label: OPACITY_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SizeControl, {
			units: ["%"],
			anchorRef: rowRef,
			defaultUnit: "%"
		})));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/effects-section/effects-section.tsx
	var BOX_SHADOW_LABEL = (0, _wordpress_i18n.__)("Box shadow", "elementor");
	var FILTER_LABEL = (0, _wordpress_i18n.__)("Filters", "elementor");
	var TRANSFORM_LABEL = (0, _wordpress_i18n.__)("Transform", "elementor");
	var BACKDROP_FILTER_LABEL = (0, _wordpress_i18n.__)("Backdrop filters", "elementor");
	var TRANSITIONS_LABEL = (0, _wordpress_i18n.__)("Transitions", "elementor");
	var EffectsSection = () => {
		const { element } = useElement();
		const { meta } = useStyle();
		const canHaveChildren = canElementHaveChildren(element?.id ?? "");
		return /* @__PURE__ */ react.createElement(SectionContent, { gap: 1 }, /* @__PURE__ */ react.createElement(BlendModeField, null), /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(OpacityControlField, null), /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(StylesField, {
			bind: "box-shadow",
			propDisplayName: BOX_SHADOW_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.BoxShadowRepeaterControl, null)), /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(StylesField, {
			bind: "transform",
			propDisplayName: TRANSFORM_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.TransformRepeaterControl, { showChildrenPerspective: canHaveChildren })), /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(StylesField, {
			bind: "transition",
			propDisplayName: TRANSITIONS_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.TransitionRepeaterControl, {
			currentStyleState: meta.state,
			recentlyUsedListGetter: () => getRecentlyUsedList(element?.id ?? "")
		})), /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(StylesField, {
			bind: "filter",
			propDisplayName: FILTER_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.FilterRepeaterControl, null)), /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(StylesField, {
			bind: "backdrop-filter",
			propDisplayName: BACKDROP_FILTER_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.FilterRepeaterControl, { filterPropName: "backdrop-filter" })));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/hooks/use-computed-style.ts
	function useComputedStyle(elementId) {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)([
			(0, _elementor_editor_v1_adapters.windowEvent)("elementor/device-mode/change"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/reset-style"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/settings"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/paste-style")
		], () => {
			if (!elementId) return null;
			const element = window.elementor?.getContainer?.(elementId);
			if (!element?.view?.el) return null;
			return window.getComputedStyle(element.view.el);
		});
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/components/styles-inheritance-section-indicators.tsx
	var StylesInheritanceSectionIndicators = ({ fields }) => {
		const { id, meta, provider } = useStyle();
		const snapshot = useStylesInheritanceSnapshot();
		if (fields.includes("custom_css")) return /* @__PURE__ */ react.createElement(CustomCssIndicator, null);
		const { hasValues, hasOverrides } = getIndicators(Object.fromEntries(Object.entries(snapshot ?? {}).filter(([key]) => fields.includes(key))), id ?? "", meta);
		if (!hasValues && !hasOverrides) return null;
		const hasValueLabel = (0, _wordpress_i18n.__)("Has effective styles", "elementor");
		const hasOverridesLabel = (0, _wordpress_i18n.__)("Has overridden styles", "elementor");
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: (0, _wordpress_i18n.__)("Has styles", "elementor"),
			placement: "top"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			sx: { "& > *": { marginInlineStart: -.25 } },
			role: "list"
		}, hasValues && provider && /* @__PURE__ */ react.createElement(StyleIndicator, {
			getColor: getStylesProviderThemeColor(provider.getKey()),
			"data-variant": (0, _elementor_editor_styles_repository.isElementsStylesProvider)(provider.getKey()) ? "local" : "global",
			role: "listitem",
			"aria-label": hasValueLabel
		}), hasOverrides && /* @__PURE__ */ react.createElement(StyleIndicator, {
			isOverridden: true,
			"data-variant": "overridden",
			role: "listitem",
			"aria-label": hasOverridesLabel
		})));
	};
	function getIndicators(snapshotFields, styleId, meta) {
		let hasValues = false;
		let hasOverrides = false;
		Object.values(snapshotFields).forEach((inheritanceChain) => {
			const currentStyle = getCurrentStyleFromChain(inheritanceChain, styleId, meta);
			if (!currentStyle) return;
			const [actualStyle] = inheritanceChain;
			if (currentStyle === actualStyle) hasValues = true;
			else hasOverrides = true;
		});
		return {
			hasValues,
			hasOverrides
		};
	}
	function getCurrentStyleFromChain(chain, styleId, meta) {
		return chain.find(({ style: { id }, variant: { meta: { breakpoint, state } } }) => id === styleId && breakpoint === meta.breakpoint && state === meta.state);
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-tab-collapsible-content.tsx
	var StyleTabCollapsibleContent = ({ fields = [], children }) => {
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.CollapsibleContent, { titleEnd: getStylesInheritanceIndicators(fields) }, children);
	};
	function getStylesInheritanceIndicators(fields) {
		if (fields.length === 0) return null;
		return (isOpen) => !isOpen ? /* @__PURE__ */ react.createElement(StylesInheritanceSectionIndicators, { fields }) : null;
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/utils/rotated-icon.tsx
	var FLEX_DIRECTION_LABEL$1 = (0, _wordpress_i18n.__)("Flex direction", "elementor");
	var CLOCKWISE_ANGLES = {
		row: 0,
		column: 90,
		"row-reverse": 180,
		"column-reverse": 270
	};
	var COUNTER_CLOCKWISE_ANGLES = {
		row: 0,
		column: -90,
		"row-reverse": -180,
		"column-reverse": -270
	};
	var RotatedIcon$1 = /* @__PURE__ */ __name(({ icon: Icon, size, isClockwise = true, offset = 0, disableRotationForReversed = false }) => {
		const rotate = (0, react.useRef)(useGetTargetAngle(isClockwise, offset, disableRotationForReversed));
		rotate.current = useGetTargetAngle(isClockwise, offset, disableRotationForReversed, rotate);
		return /* @__PURE__ */ react.createElement(Icon, {
			fontSize: size,
			sx: {
				transition: ".3s",
				rotate: `${rotate.current}deg`
			}
		});
	}, "RotatedIcon");
	var useGetTargetAngle = (isClockwise, offset, disableRotationForReversed, existingRef) => {
		const { value: direction } = useStylesField("flex-direction", { history: { propDisplayName: FLEX_DIRECTION_LABEL$1 } });
		const rotationMultiplier = "rtl" === (0, _elementor_ui.useTheme)().direction ? -1 : 1;
		const angleMap = isClockwise ? CLOCKWISE_ANGLES : COUNTER_CLOCKWISE_ANGLES;
		const currentDirection = direction?.value || "row";
		const currentAngle = existingRef ? existingRef.current * rotationMultiplier : angleMap[currentDirection] + offset;
		const formattedDiff = ((angleMap[currentDirection] + offset - currentAngle + 360) % 360 + 180) % 360 - 180;
		if (disableRotationForReversed && ["row-reverse", "column-reverse"].includes(currentDirection)) return 0;
		return (currentAngle + formattedDiff) * rotationMultiplier;
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/align-content-field.tsx
	var ALIGN_CONTENT_LABEL = (0, _wordpress_i18n.__)("Align content", "elementor");
	var StartIcon$5 = (0, _elementor_ui.withDirection)(_elementor_icons.JustifyTopIcon);
	var EndIcon$4 = (0, _elementor_ui.withDirection)(_elementor_icons.JustifyBottomIcon);
	var iconProps$3 = {
		isClockwise: false,
		offset: 0,
		disableRotationForReversed: true
	};
	var options$11 = [
		{
			value: "start",
			label: (0, _wordpress_i18n.__)("Start", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: StartIcon$5,
				size,
				...iconProps$3
			}),
			showTooltip: true
		},
		{
			value: "center",
			label: (0, _wordpress_i18n.__)("Center", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: _elementor_icons.JustifyCenterIcon,
				size,
				...iconProps$3
			}),
			showTooltip: true
		},
		{
			value: "end",
			label: (0, _wordpress_i18n.__)("End", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: EndIcon$4,
				size,
				...iconProps$3
			}),
			showTooltip: true
		},
		{
			value: "space-between",
			label: (0, _wordpress_i18n.__)("Space between", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: _elementor_icons.JustifySpaceBetweenVerticalIcon,
				size,
				...iconProps$3
			}),
			showTooltip: true
		},
		{
			value: "space-around",
			label: (0, _wordpress_i18n.__)("Space around", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: _elementor_icons.JustifySpaceAroundVerticalIcon,
				size,
				...iconProps$3
			}),
			showTooltip: true
		},
		{
			value: "space-evenly",
			label: (0, _wordpress_i18n.__)("Space evenly", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: _elementor_icons.JustifyDistributeVerticalIcon,
				size,
				...iconProps$3
			}),
			showTooltip: true
		}
	];
	var AlignContentField = () => /* @__PURE__ */ react.createElement(StylesField, {
		bind: "align-content",
		propDisplayName: ALIGN_CONTENT_LABEL
	}, /* @__PURE__ */ react.createElement(UiProviders, null, /* @__PURE__ */ react.createElement(StylesFieldLayout, {
		label: ALIGN_CONTENT_LABEL,
		direction: "column"
	}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleControl, {
		options: options$11,
		fullWidth: true
	}))));

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/align-items-field.tsx
	var ALIGN_ITEMS_LABEL = (0, _wordpress_i18n.__)("Align items", "elementor");
	var StartIcon$4 = (0, _elementor_ui.withDirection)(_elementor_icons.LayoutAlignLeftIcon);
	var EndIcon$3 = (0, _elementor_ui.withDirection)(_elementor_icons.LayoutAlignRightIcon);
	var iconProps$2 = {
		isClockwise: false,
		offset: 90
	};
	var options$10 = [
		{
			value: "start",
			label: (0, _wordpress_i18n.__)("Start", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: StartIcon$4,
				size,
				...iconProps$2
			}),
			showTooltip: true
		},
		{
			value: "center",
			label: (0, _wordpress_i18n.__)("Center", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: _elementor_icons.LayoutAlignCenterIcon,
				size,
				...iconProps$2
			}),
			showTooltip: true
		},
		{
			value: "end",
			label: (0, _wordpress_i18n.__)("End", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: EndIcon$3,
				size,
				...iconProps$2
			}),
			showTooltip: true
		},
		{
			value: "stretch",
			label: (0, _wordpress_i18n.__)("Stretch", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: _elementor_icons.LayoutDistributeVerticalIcon,
				size,
				...iconProps$2
			}),
			showTooltip: true
		}
	];
	var AlignItemsField = () => {
		return /* @__PURE__ */ react.createElement(UiProviders, null, /* @__PURE__ */ react.createElement(StylesField, {
			bind: "align-items",
			propDisplayName: ALIGN_ITEMS_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: ALIGN_ITEMS_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleControl, { options: options$10 }))));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/align-self-child-field.tsx
	var ALIGN_SELF_LABEL$1 = (0, _wordpress_i18n.__)("Align self", "elementor");
	var ALIGN_SELF_CHILD_OFFSET_MAP$1 = {
		row: 90,
		"row-reverse": 90,
		column: 0,
		"column-reverse": 0
	};
	var StartIcon$3 = (0, _elementor_ui.withDirection)(_elementor_icons.LayoutAlignLeftIcon);
	var EndIcon$2 = (0, _elementor_ui.withDirection)(_elementor_icons.LayoutAlignRightIcon);
	var iconProps$1 = { isClockwise: false };
	var getOptions$1 = /* @__PURE__ */ __name((parentStyleDirection) => [
		{
			value: "start",
			label: (0, _wordpress_i18n.__)("Start", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: StartIcon$3,
				size,
				offset: ALIGN_SELF_CHILD_OFFSET_MAP$1[parentStyleDirection],
				...iconProps$1
			}),
			showTooltip: true
		},
		{
			value: "center",
			label: (0, _wordpress_i18n.__)("Center", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: _elementor_icons.LayoutAlignCenterIcon,
				size,
				offset: ALIGN_SELF_CHILD_OFFSET_MAP$1[parentStyleDirection],
				...iconProps$1
			}),
			showTooltip: true
		},
		{
			value: "end",
			label: (0, _wordpress_i18n.__)("End", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: EndIcon$2,
				size,
				offset: ALIGN_SELF_CHILD_OFFSET_MAP$1[parentStyleDirection],
				...iconProps$1
			}),
			showTooltip: true
		},
		{
			value: "stretch",
			label: (0, _wordpress_i18n.__)("Stretch", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: _elementor_icons.LayoutDistributeVerticalIcon,
				size,
				offset: ALIGN_SELF_CHILD_OFFSET_MAP$1[parentStyleDirection],
				...iconProps$1
			}),
			showTooltip: true
		}
	], "getOptions");
	var AlignSelfChild = ({ parentStyleDirection }) => /* @__PURE__ */ react.createElement(StylesField, {
		bind: "align-self",
		propDisplayName: ALIGN_SELF_LABEL$1
	}, /* @__PURE__ */ react.createElement(UiProviders, null, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: ALIGN_SELF_LABEL$1 }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleControl, { options: getOptions$1(parentStyleDirection) }))));

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/align-self-grid-child-field.tsx
	var ALIGN_SELF_LABEL = (0, _wordpress_i18n.__)("Align self", "elementor");
	var ALIGN_SELF_CHILD_OFFSET_MAP = {
		row: 0,
		column: -90
	};
	var AlignSelfGridChild = ({ parentStyleDirection }) => /* @__PURE__ */ react.createElement(StylesField, {
		bind: "align-self",
		propDisplayName: ALIGN_SELF_LABEL
	}, /* @__PURE__ */ react.createElement(UiProviders, null, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: ALIGN_SELF_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleControl, { options: getOptions(parentStyleDirection ?? "row") }))));
	var RotatedIcon = ({ icon: Icon, size, offset }) => /* @__PURE__ */ react.createElement(Icon, {
		fontSize: size,
		sx: { rotate: `${offset}deg` }
	});
	var getOptions = (parentStyleDirection) => {
		const offset = ALIGN_SELF_CHILD_OFFSET_MAP[parentStyleDirection.replace("dense", "").trim()];
		return [
			{
				value: "start",
				label: (0, _wordpress_i18n.__)("Start", "elementor"),
				renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon, {
					icon: _elementor_icons.JustifyTopIcon,
					size,
					offset
				}),
				showTooltip: true
			},
			{
				value: "center",
				label: (0, _wordpress_i18n.__)("Center", "elementor"),
				renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon, {
					icon: _elementor_icons.JustifyCenterIcon,
					size,
					offset
				}),
				showTooltip: true
			},
			{
				value: "end",
				label: (0, _wordpress_i18n.__)("End", "elementor"),
				renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon, {
					icon: _elementor_icons.JustifyBottomIcon,
					size,
					offset
				}),
				showTooltip: true
			},
			{
				value: "stretch",
				label: (0, _wordpress_i18n.__)("Stretch", "elementor"),
				renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon, {
					icon: _elementor_icons.LayoutDistributeVerticalIcon,
					size,
					offset
				}),
				showTooltip: true
			}
		];
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/display-field.tsx
	var DISPLAY_LABEL$1 = (0, _wordpress_i18n.__)("Display", "elementor");
	var displayFieldItems = [
		{
			value: "block",
			renderContent: () => (0, _wordpress_i18n.__)("Block", "elementor"),
			label: (0, _wordpress_i18n.__)("Block", "elementor"),
			showTooltip: true
		},
		{
			value: "flex",
			renderContent: () => (0, _wordpress_i18n.__)("Flex", "elementor"),
			label: (0, _wordpress_i18n.__)("Flex", "elementor"),
			showTooltip: true
		},
		{
			value: "grid",
			renderContent: () => (0, _wordpress_i18n.__)("Grid", "elementor"),
			label: (0, _wordpress_i18n.__)("Grid", "elementor"),
			showTooltip: true
		},
		{
			value: "none",
			renderContent: () => (0, _wordpress_i18n.__)("None", "elementor"),
			label: (0, _wordpress_i18n.__)("None", "elementor"),
			showTooltip: true
		},
		{
			value: "inline-block",
			renderContent: () => (0, _wordpress_i18n.__)("In-blk", "elementor"),
			label: (0, _wordpress_i18n.__)("Inline-block", "elementor"),
			showTooltip: true
		},
		{
			value: "inline-flex",
			renderContent: () => (0, _wordpress_i18n.__)("In-flx", "elementor"),
			label: (0, _wordpress_i18n.__)("Inline-flex", "elementor"),
			showTooltip: true
		}
	];
	var DisplayField = () => {
		const placeholder = useDisplayPlaceholderValue();
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "display",
			propDisplayName: DISPLAY_LABEL$1,
			placeholder
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, {
			label: DISPLAY_LABEL$1,
			direction: "column"
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleControl, {
			options: displayFieldItems,
			maxItems: 4,
			fullWidth: true
		})));
	};
	var useDisplayPlaceholderValue = () => useStylesInheritanceChain(["display"])[0]?.value ?? void 0;

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/flex-direction-field.tsx
	var FLEX_DIRECTION_LABEL = (0, _wordpress_i18n.__)("Direction", "elementor");
	var options$9 = [
		{
			value: "row",
			label: (0, _wordpress_i18n.__)("Row", "elementor"),
			renderContent: ({ size }) => {
				const StartIcon = (0, _elementor_ui.withDirection)(_elementor_icons.ArrowRightIcon);
				return /* @__PURE__ */ react.createElement(StartIcon, { fontSize: size });
			},
			showTooltip: true
		},
		{
			value: "column",
			label: (0, _wordpress_i18n.__)("Column", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.ArrowDownSmallIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "row-reverse",
			label: (0, _wordpress_i18n.__)("Reversed row", "elementor"),
			renderContent: ({ size }) => {
				const EndIcon = (0, _elementor_ui.withDirection)(_elementor_icons.ArrowLeftIcon);
				return /* @__PURE__ */ react.createElement(EndIcon, { fontSize: size });
			},
			showTooltip: true
		},
		{
			value: "column-reverse",
			label: (0, _wordpress_i18n.__)("Reversed column", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.ArrowUpSmallIcon, { fontSize: size }),
			showTooltip: true
		}
	];
	var FlexDirectionField = () => {
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "flex-direction",
			propDisplayName: FLEX_DIRECTION_LABEL
		}, /* @__PURE__ */ react.createElement(UiProviders, null, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: FLEX_DIRECTION_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleControl, { options: options$9 }))));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/flex-order-field.tsx
	var ORDER_LABEL = (0, _wordpress_i18n.__)("Order", "elementor");
	var FIRST_DEFAULT_VALUE = -99999;
	var LAST_DEFAULT_VALUE = 99999;
	var FIRST = "first";
	var LAST = "last";
	var CUSTOM$1 = "custom";
	var orderValueMap = {
		[FIRST]: FIRST_DEFAULT_VALUE,
		[LAST]: LAST_DEFAULT_VALUE
	};
	var items$1 = [
		{
			value: FIRST,
			label: (0, _wordpress_i18n.__)("First", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.ArrowUpSmallIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: LAST,
			label: (0, _wordpress_i18n.__)("Last", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.ArrowDownSmallIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: CUSTOM$1,
			label: (0, _wordpress_i18n.__)("Custom", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.PencilIcon, { fontSize: size }),
			showTooltip: true
		}
	];
	var FlexOrderField = () => {
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "order",
			propDisplayName: ORDER_LABEL
		}, /* @__PURE__ */ react.createElement(UiProviders, null, /* @__PURE__ */ react.createElement(SectionContent, null, /* @__PURE__ */ react.createElement(FlexOrderFieldContent, null))));
	};
	function FlexOrderFieldContent() {
		const { value: order, setValue: setOrder, canEdit } = useStylesField("order", { history: { propDisplayName: ORDER_LABEL } });
		const { placeholder } = (0, _elementor_editor_controls.useBoundProp)();
		const placeholderValue = placeholder;
		const currentGroup = (0, react.useMemo)(() => getGroupControlValue(order?.value ?? null), [order]);
		const [activeGroup, setActiveGroup] = (0, react.useState)(currentGroup);
		const [customLocked, setCustomLocked] = (0, react.useState)(false);
		(0, react.useEffect)(() => {
			if (!customLocked) setActiveGroup(currentGroup);
		}, [currentGroup, customLocked]);
		(0, react.useEffect)(() => {
			if (order === null) setCustomLocked(false);
		}, [order]);
		const groupPlaceholder = getGroupControlValue(placeholderValue?.value ?? null);
		const handleToggleButtonChange = (group) => {
			setActiveGroup(group);
			setCustomLocked(group === CUSTOM$1);
			if (CUSTOM$1 === group) {
				setOrder({
					$$type: "number",
					value: null
				});
				return;
			}
			if (FIRST === group) {
				setOrder({
					$$type: "number",
					value: orderValueMap[group]
				});
				return;
			}
			if (LAST === group) {
				setOrder({
					$$type: "number",
					value: orderValueMap[group]
				});
				return;
			}
			setOrder(null);
		};
		const isCustomVisible = CUSTOM$1 === activeGroup || CUSTOM$1 === groupPlaceholder;
		const orderPlaceholder = CUSTOM$1 === groupPlaceholder ? String(placeholderValue?.value ?? null) : "";
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: ORDER_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlToggleButtonGroup, {
			items: items$1,
			value: activeGroup,
			onChange: handleToggleButtonChange,
			exclusive: true,
			placeholder: groupPlaceholder,
			disabled: !canEdit
		})), isCustomVisible && /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			gap: 2,
			alignItems: "center",
			flexWrap: "nowrap"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 6
		}, /* @__PURE__ */ react.createElement(ControlLabel, null, (0, _wordpress_i18n.__)("Custom order", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 6,
			sx: {
				display: "flex",
				justifyContent: "end"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.NumberControl, {
			min: -99998,
			max: 99999 - 1,
			shouldForceInt: true,
			placeholder: orderPlaceholder
		}))));
	}
	var getGroupControlValue = (order) => {
		if (99999 === order) return LAST;
		if (-99999 === order) return FIRST;
		if (null !== order) return CUSTOM$1;
		return null;
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/flex-size-field.tsx
	var FLEX_SIZE_LABEL = (0, _wordpress_i18n.__)("Flex Size", "elementor");
	var DEFAULT = 1;
	var items = [
		{
			value: "flex-grow",
			label: (0, _wordpress_i18n.__)("Grow", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.ExpandIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "flex-shrink",
			label: (0, _wordpress_i18n.__)("Shrink", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.ShrinkIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "custom",
			label: (0, _wordpress_i18n.__)("Custom", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.PencilIcon, { fontSize: size }),
			showTooltip: true
		}
	];
	var FlexSizeField = () => {
		return /* @__PURE__ */ react.createElement(UiProviders, null, /* @__PURE__ */ react.createElement(SectionContent, null, /* @__PURE__ */ react.createElement(StylesField, {
			bind: "flex",
			propDisplayName: FLEX_SIZE_LABEL
		}, /* @__PURE__ */ react.createElement(FlexSizeFieldContent, null))));
	};
	var FlexSizeFieldContent = () => {
		const { value, setValue, canEdit } = useStylesField("flex", { history: { propDisplayName: FLEX_SIZE_LABEL } });
		const { placeholder } = (0, _elementor_editor_controls.useBoundProp)();
		const flexValues = extractFlexValues(value);
		const currentGroup = (0, react.useMemo)(() => getActiveGroup(flexValues), [flexValues]);
		const [activeGroup, setActiveGroup] = (0, react.useState)(currentGroup);
		const [customLocked, setCustomLocked] = (0, react.useState)(false);
		(0, react.useEffect)(() => {
			if (!customLocked) setActiveGroup(currentGroup);
		}, [currentGroup, customLocked]);
		(0, react.useEffect)(() => {
			if (value === null) setCustomLocked(false);
		}, [value]);
		const onChangeGroup = (group = null) => {
			setActiveGroup(group);
			setCustomLocked(group === "custom");
			const newFlexValue = createFlexValueForGroup(group, value);
			setValue(newFlexValue);
		};
		const groupPlaceholder = getActiveGroup(extractFlexValues(placeholder));
		const isCustomVisible = "custom" === activeGroup || "custom" === groupPlaceholder;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: FLEX_SIZE_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlToggleButtonGroup, {
			value: activeGroup ?? null,
			placeholder: groupPlaceholder ?? null,
			onChange: onChangeGroup,
			disabled: !canEdit,
			items,
			exclusive: true
		})), isCustomVisible && /* @__PURE__ */ react.createElement(FlexCustomField, null));
	};
	function extractFlexValues(source) {
		return {
			grow: source?.value?.flexGrow?.value ?? null,
			shrink: source?.value?.flexShrink?.value ?? null,
			basis: source?.value?.flexBasis?.value ?? null
		};
	}
	var createFlexValueForGroup = (group, flexValue) => {
		if (!group) return null;
		if (group === "flex-grow") return _elementor_editor_props.flexPropTypeUtil.create({
			flexGrow: _elementor_editor_props.numberPropTypeUtil.create(DEFAULT),
			flexShrink: _elementor_editor_props.numberPropTypeUtil.create(0),
			flexBasis: _elementor_editor_props.sizePropTypeUtil.create({
				unit: "auto",
				size: ""
			})
		});
		if (group === "flex-shrink") return _elementor_editor_props.flexPropTypeUtil.create({
			flexGrow: _elementor_editor_props.numberPropTypeUtil.create(0),
			flexShrink: _elementor_editor_props.numberPropTypeUtil.create(DEFAULT),
			flexBasis: _elementor_editor_props.sizePropTypeUtil.create({
				unit: "auto",
				size: ""
			})
		});
		if (group === "custom") {
			if (flexValue) return flexValue;
			return _elementor_editor_props.flexPropTypeUtil.create({
				flexGrow: null,
				flexShrink: null,
				flexBasis: null
			});
		}
		return null;
	};
	var FlexCustomField = () => {
		const flexBasisRowRef = (0, react.useRef)(null);
		const context = (0, _elementor_editor_controls.useBoundProp)(_elementor_editor_props.flexPropTypeUtil);
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropProvider, { ...context }, /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: (0, _wordpress_i18n.__)("Grow", "elementor") }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropKeyProvider, { bind: "flexGrow" }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.NumberControl, {
			min: 0,
			shouldForceInt: true
		}))), /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: (0, _wordpress_i18n.__)("Shrink", "elementor") }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropKeyProvider, { bind: "flexShrink" }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.NumberControl, {
			min: 0,
			shouldForceInt: true
		}))), /* @__PURE__ */ react.createElement(StylesFieldLayout, {
			label: (0, _wordpress_i18n.__)("Basis", "elementor"),
			ref: flexBasisRowRef
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropKeyProvider, { bind: "flexBasis" }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SizeControl, {
			extendedOptions: ["auto"],
			anchorRef: flexBasisRowRef
		})))));
	};
	var getActiveGroup = ({ grow, shrink, basis }) => {
		if (null === grow && null === shrink && !basis) return null;
		const isAutoBasis = basis === null || typeof basis === "object" && basis.unit === "auto";
		if (basis && !isAutoBasis) return "custom";
		if (grow === DEFAULT && (shrink === null || shrink === 0) && isAutoBasis) return "flex-grow";
		if (shrink === DEFAULT && (grow === null || grow === 0) && isAutoBasis) return "flex-shrink";
		return "custom";
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/gap-control-field.tsx
	var GAPS_LABEL = (0, _wordpress_i18n.__)("Gaps", "elementor");
	var GapControlField = () => {
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "gap",
			propDisplayName: GAPS_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.GapControl, { label: GAPS_LABEL }));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/grid-auto-flow-field.tsx
	var AUTO_FLOW_LABEL = (0, _wordpress_i18n.__)("Auto flow", "elementor");
	var DENSE_LABEL = (0, _wordpress_i18n.__)("Dense", "elementor");
	var StartIcon$2 = (0, _elementor_ui.withDirection)(_elementor_icons.ArrowRightIcon);
	var directionOptions = [{
		value: "row",
		label: (0, _wordpress_i18n.__)("Row", "elementor"),
		renderContent: ({ size }) => /* @__PURE__ */ react.createElement(StartIcon$2, { fontSize: size }),
		showTooltip: true
	}, {
		value: "column",
		label: (0, _wordpress_i18n.__)("Column", "elementor"),
		renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.ArrowDownSmallIcon, { fontSize: size }),
		showTooltip: true
	}];
	var parseAutoFlow = (value) => {
		if (!value) return {
			direction: null,
			dense: false
		};
		const dense = value.includes("dense");
		return {
			direction: value.replace(/\s*dense\s*/, "").trim() || "row",
			dense
		};
	};
	var composeAutoFlow = (direction, dense) => {
		return dense ? `${direction} dense` : direction;
	};
	var GridAutoFlowFieldContent = () => {
		const { value, setValue, canEdit } = useStylesField("grid-auto-flow", { history: { propDisplayName: AUTO_FLOW_LABEL } });
		const { placeholder } = (0, _elementor_editor_controls.useBoundProp)();
		const { direction, dense } = parseAutoFlow(value?.value ?? null);
		const directionPlaceholder = parseAutoFlow(placeholder?.value ?? null).direction;
		const handleDirectionChange = (newDirection) => {
			if (!newDirection) {
				setValue(null);
				return;
			}
			setValue({
				$$type: "string",
				value: composeAutoFlow(newDirection, dense)
			});
		};
		const handleDenseToggle = () => {
			setValue({
				$$type: "string",
				value: composeAutoFlow(direction ?? "row", !dense)
			});
		};
		return /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: AUTO_FLOW_LABEL }, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			gap: 1,
			flexWrap: "nowrap",
			alignItems: "center",
			justifyContent: "flex-end"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			sx: {
				width: 64,
				maxWidth: "100%"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlToggleButtonGroup, {
			items: directionOptions,
			value: direction,
			placeholder: directionPlaceholder,
			onChange: handleDirectionChange,
			exclusive: true,
			fullWidth: true,
			disabled: !canEdit
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, { item: true }, /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: DENSE_LABEL,
			placement: "top"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.ToggleButton, {
			value: "dense",
			selected: dense,
			onChange: handleDenseToggle,
			size: "tiny",
			"aria-label": DENSE_LABEL,
			disabled: !canEdit
		}, /* @__PURE__ */ react.createElement(_elementor_icons.LayoutDashboardIcon, { fontSize: "tiny" }))))));
	};
	var GridAutoFlowField = () => /* @__PURE__ */ react.createElement(StylesField, {
		bind: "grid-auto-flow",
		propDisplayName: AUTO_FLOW_LABEL
	}, /* @__PURE__ */ react.createElement(UiProviders, null, /* @__PURE__ */ react.createElement(GridAutoFlowFieldContent, null)));

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/grid-auto-track-fields.tsx
	var DEFAULT_UNIT = "fr";
	var AUTO_ROWS_LABEL = (0, _wordpress_i18n.__)("Auto rows", "elementor");
	var AUTO_COLUMNS_LABEL = (0, _wordpress_i18n.__)("Auto columns", "elementor");
	var AUTO_ROWS_TOOLTIP = (0, _wordpress_i18n.__)("Set the size for new rows created automatically when content exceeds the defined grid.", "elementor");
	var AUTO_COLUMNS_TOOLTIP = (0, _wordpress_i18n.__)("Set the size for new columns created automatically when content exceeds the defined grid.", "elementor");
	var GridAutoTrackField = ({ bind, infoTooltip, label, rowRef }) => /* @__PURE__ */ react.createElement(StylesField, {
		bind,
		propDisplayName: label
	}, /* @__PURE__ */ react.createElement(StylesFieldLayout, {
		infoTooltip,
		label,
		ref: rowRef
	}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SizeControl, {
		enablePropTypeUnits: true,
		defaultUnit: DEFAULT_UNIT,
		anchorRef: rowRef
	})));
	var GridAutoTrackFields = () => {
		const rowRef = (0, react.useRef)(null);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			gap: 2,
			pt: 2,
			ref: rowRef
		}, /* @__PURE__ */ react.createElement(GridAutoTrackField, {
			bind: "grid-auto-rows",
			infoTooltip: AUTO_ROWS_TOOLTIP,
			label: AUTO_ROWS_LABEL,
			rowRef
		}), /* @__PURE__ */ react.createElement(GridAutoTrackField, {
			bind: "grid-auto-columns",
			infoTooltip: AUTO_COLUMNS_TOOLTIP,
			label: AUTO_COLUMNS_LABEL,
			rowRef
		}));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/grid-justify-items-field.tsx
	var JUSTIFY_ITEMS_LABEL = (0, _wordpress_i18n.__)("Justify items", "elementor");
	var StartIcon$1 = (0, _elementor_ui.withDirection)(_elementor_icons.LayoutAlignLeftIcon);
	var EndIcon$1 = (0, _elementor_ui.withDirection)(_elementor_icons.LayoutAlignRightIcon);
	var options$8 = [
		{
			value: "start",
			label: (0, _wordpress_i18n.__)("Start", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(StartIcon$1, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "center",
			label: (0, _wordpress_i18n.__)("Center", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.LayoutAlignCenterIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "end",
			label: (0, _wordpress_i18n.__)("End", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(EndIcon$1, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "stretch",
			label: (0, _wordpress_i18n.__)("Stretch", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.LayoutDistributeVerticalIcon, { fontSize: size }),
			showTooltip: true
		}
	];
	var GridJustifyItemsField = () => /* @__PURE__ */ react.createElement(StylesField, {
		bind: "justify-items",
		propDisplayName: JUSTIFY_ITEMS_LABEL
	}, /* @__PURE__ */ react.createElement(UiProviders, null, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: JUSTIFY_ITEMS_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleControl, { options: options$8 }))));

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/grid-outline-field.tsx
	var GRID_OUTLINE_LABEL = (0, _wordpress_i18n.__)("Show Grid Outline", "elementor");
	var GridOutlineField = () => {
		const { element } = useElement();
		const value = (0, _elementor_editor_elements.useElementEditorSettings)(element.id)?.grid_outline ?? true;
		return /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: GRID_OUTLINE_LABEL }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			justifyContent: "flex-end"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Switch, {
			"aria-label": GRID_OUTLINE_LABEL,
			checked: value,
			onChange: (event) => {
				(0, _elementor_editor_elements.updateElementEditorSettings)({
					elementId: element.id,
					settings: { grid_outline: event.target.checked }
				});
			},
			size: "small"
		})));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/utils/grid-track-value.ts
	var FR = "fr";
	var CUSTOM = "custom";
	var UNITS$1 = ["fr", CUSTOM];
	var EMPTY = { kind: "empty" };
	var REPEAT_FR_PATTERN = /^repeat\(\s*(\d+)\s*,\s*1fr\s*\)$/;
	var parseString = (css) => {
		if (!css) return EMPTY;
		const match = css.match(REPEAT_FR_PATTERN);
		if (match) {
			const count = parseInt(match[1], 10);
			return count >= 1 ? {
				kind: "fr",
				count
			} : EMPTY;
		}
		return {
			kind: "custom",
			raw: css
		};
	};
	var parseGridTrackSize = (size) => {
		if (!size) return EMPTY;
		if (size.unit === "fr") {
			const n = Number(size.size);
			return Number.isFinite(n) && n >= 1 ? {
				kind: "fr",
				count: Math.trunc(n)
			} : EMPTY;
		}
		const raw = String(size.size ?? "");
		return raw === "" ? EMPTY : {
			kind: "custom",
			raw
		};
	};
	var parseValue = (value) => {
		if (!value) return EMPTY;
		if (_elementor_editor_props.gridTrackSizePropTypeUtil.isValid(value)) return parseGridTrackSize(_elementor_editor_props.gridTrackSizePropTypeUtil.extract(value));
		if (_elementor_editor_props.stringPropTypeUtil.isValid(value)) return parseString(_elementor_editor_props.stringPropTypeUtil.extract(value));
		return EMPTY;
	};
	var fromSizeInput = (v) => {
		if (v.size === "" || Number.isNaN(v.size)) return EMPTY;
		if (v.unit === "fr") {
			const n = Number(v.size);
			return Number.isFinite(n) && n >= 1 ? {
				kind: "fr",
				count: Math.trunc(n)
			} : EMPTY;
		}
		return {
			kind: "custom",
			raw: String(v.size)
		};
	};
	var toPropValue = (v) => {
		switch (v.kind) {
			case "empty": return null;
			case "fr": return _elementor_editor_props.gridTrackSizePropTypeUtil.create({
				size: v.count,
				unit: "fr"
			});
			case "custom": return _elementor_editor_props.gridTrackSizePropTypeUtil.create({
				size: v.raw,
				unit: CUSTOM
			});
		}
	};
	var toSizeInput = (v, fallbackUnit = "fr") => {
		switch (v.kind) {
			case "empty": return {
				size: "",
				unit: fallbackUnit
			};
			case "fr": return {
				size: v.count,
				unit: "fr"
			};
			case "custom": return {
				size: v.raw,
				unit: CUSTOM
			};
		}
	};
	var toPlaceholder = (v) => {
		switch (v.kind) {
			case "empty": return;
			case "fr": return String(v.count);
			case "custom": return v.raw;
		}
	};
	var unitOf = (v, fallback = "fr") => {
		if (v.kind === "fr") return "fr";
		if (v.kind === "custom") return CUSTOM;
		return fallback;
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/grid-size-field.tsx
	var SizeFieldWrapper = ({ children }) => /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlActions, null, children);
	var GridTrackSizeInput = (0, _elementor_editor_controls.createControl)((props) => /* @__PURE__ */ react.createElement(_elementor_editor_controls.SizeComponent, {
		units: UNITS$1,
		value: props.value,
		placeholder: props.placeholder,
		defaultUnit: "fr",
		setValue: props.setValue,
		onBlur: () => {},
		min: 1,
		anchorRef: props.anchorRef,
		SizeFieldWrapper
	}));
	var GridTrackFieldContent = ({ cssProp, label }) => {
		const { value, setValue } = useStylesField(cssProp, { history: { propDisplayName: label } });
		const { placeholder: inheritedPlaceholder } = (0, _elementor_editor_controls.useBoundProp)();
		const anchorRef = (0, react.useRef)(null);
		const local = parseValue(value);
		const inherited = parseValue(inheritedPlaceholder);
		const displayValue = local.kind !== "empty" ? toSizeInput(local) : toSizeInput(EMPTY, unitOf(inherited));
		const placeholder = toPlaceholder(inherited);
		const handleChange = (raw) => {
			const next = fromSizeInput(raw);
			if (next.kind === "empty" && local.kind !== "empty" && raw.unit !== unitOf(local)) return;
			setValue(toPropValue(next));
		};
		return /* @__PURE__ */ react.createElement(StylesFieldLayout, {
			label,
			direction: "column"
		}, /* @__PURE__ */ react.createElement("div", { ref: anchorRef }, /* @__PURE__ */ react.createElement(GridTrackSizeInput, {
			value: displayValue,
			placeholder,
			setValue: handleChange,
			anchorRef
		})));
	};
	var GridTrackField = ({ cssProp, label }) => /* @__PURE__ */ react.createElement(UiProviders, null, /* @__PURE__ */ react.createElement(StylesField, {
		bind: cssProp,
		propDisplayName: label
	}, /* @__PURE__ */ react.createElement(GridTrackFieldContent, {
		cssProp,
		label
	})));
	var GridSizeFields = () => /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
		container: true,
		gap: 2,
		flexWrap: "nowrap"
	}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
		item: true,
		xs: 6
	}, /* @__PURE__ */ react.createElement(GridTrackField, {
		cssProp: "grid-template-columns",
		label: (0, _wordpress_i18n.__)("Columns", "elementor")
	})), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
		item: true,
		xs: 6
	}, /* @__PURE__ */ react.createElement(GridTrackField, {
		cssProp: "grid-template-rows",
		label: (0, _wordpress_i18n.__)("Rows", "elementor")
	})));

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/grid-span-field.tsx
	var GridSpanFieldContent = ({ label }) => {
		return /* @__PURE__ */ react.createElement(StylesFieldLayout, {
			label,
			direction: "column"
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.GridSpanControl, null));
	};
	var GridSpanField = ({ cssProp, label }) => /* @__PURE__ */ react.createElement(StylesField, {
		bind: cssProp,
		propDisplayName: label
	}, /* @__PURE__ */ react.createElement(UiProviders, null, /* @__PURE__ */ react.createElement(GridSpanFieldContent, {
		cssProp,
		label
	})));
	var GridSpanFields = () => /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
		container: true,
		gap: 2,
		flexWrap: "nowrap"
	}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
		item: true,
		xs: 6
	}, /* @__PURE__ */ react.createElement(GridSpanField, {
		cssProp: "grid-column",
		label: (0, _wordpress_i18n.__)("Grid column", "elementor")
	})), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
		item: true,
		xs: 6
	}, /* @__PURE__ */ react.createElement(GridSpanField, {
		cssProp: "grid-row",
		label: (0, _wordpress_i18n.__)("Grid row", "elementor")
	})));

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/justify-content-field.tsx
	var JUSTIFY_CONTENT_LABEL = (0, _wordpress_i18n.__)("Justify content", "elementor");
	var StartIcon = (0, _elementor_ui.withDirection)(_elementor_icons.JustifyTopIcon);
	var EndIcon = (0, _elementor_ui.withDirection)(_elementor_icons.JustifyBottomIcon);
	var iconProps = {
		isClockwise: true,
		offset: -90
	};
	var options$7 = [
		{
			value: "flex-start",
			label: (0, _wordpress_i18n.__)("Start", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: StartIcon,
				size,
				...iconProps
			}),
			showTooltip: true
		},
		{
			value: "center",
			label: (0, _wordpress_i18n.__)("Center", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: _elementor_icons.JustifyCenterIcon,
				size,
				...iconProps
			}),
			showTooltip: true
		},
		{
			value: "flex-end",
			label: (0, _wordpress_i18n.__)("End", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: EndIcon,
				size,
				...iconProps
			}),
			showTooltip: true
		},
		{
			value: "space-between",
			label: (0, _wordpress_i18n.__)("Space between", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: _elementor_icons.JustifySpaceBetweenVerticalIcon,
				size,
				...iconProps
			}),
			showTooltip: true
		},
		{
			value: "space-around",
			label: (0, _wordpress_i18n.__)("Space around", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: _elementor_icons.JustifySpaceAroundVerticalIcon,
				size,
				...iconProps
			}),
			showTooltip: true
		},
		{
			value: "space-evenly",
			label: (0, _wordpress_i18n.__)("Space evenly", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(RotatedIcon$1, {
				icon: _elementor_icons.JustifyDistributeVerticalIcon,
				size,
				...iconProps
			}),
			showTooltip: true
		}
	];
	var JustifyContentField = () => /* @__PURE__ */ react.createElement(StylesField, {
		bind: "justify-content",
		propDisplayName: JUSTIFY_CONTENT_LABEL
	}, /* @__PURE__ */ react.createElement(UiProviders, null, /* @__PURE__ */ react.createElement(StylesFieldLayout, {
		label: JUSTIFY_CONTENT_LABEL,
		direction: "column"
	}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleControl, {
		options: options$7,
		fullWidth: true
	}))));

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/wrap-field.tsx
	var FLEX_WRAP_LABEL$1 = (0, _wordpress_i18n.__)("Wrap", "elementor");
	var options$6 = [
		{
			value: "nowrap",
			label: (0, _wordpress_i18n.__)("No wrap", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.ArrowRightIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "wrap",
			label: (0, _wordpress_i18n.__)("Wrap", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.ArrowBackIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "wrap-reverse",
			label: (0, _wordpress_i18n.__)("Reversed wrap", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.ArrowForwardIcon, { fontSize: size }),
			showTooltip: true
		}
	];
	var WrapField = () => {
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "flex-wrap",
			propDisplayName: FLEX_WRAP_LABEL$1
		}, /* @__PURE__ */ react.createElement(UiProviders, null, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: FLEX_WRAP_LABEL$1 }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleControl, { options: options$6 }))));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/layout-section/layout-section.tsx
	var DISPLAY_LABEL = (0, _wordpress_i18n.__)("Display", "elementor");
	var FLEX_WRAP_LABEL = (0, _wordpress_i18n.__)("Flex wrap", "elementor");
	var DEFAULT_PARENT_FLOW_DIRECTION = "row";
	var { Slot: GridFieldsSlot, inject: injectIntoGridFields } = (0, _elementor_locations.createLocation)();
	var LayoutSection = () => {
		const { value: display } = useStylesField("display", { history: { propDisplayName: DISPLAY_LABEL } });
		const displayPlaceholder = useDisplayPlaceholderValue();
		const isDisplayFlex = shouldDisplayFlexFields(display, displayPlaceholder);
		const isDisplayGrid = "grid" === (display?.value ?? displayPlaceholder?.value);
		const { element } = useElement();
		const parentStyle = useComputedStyle((0, _elementor_editor_elements.useParentElement)(element.id)?.id || null);
		const getParentStyleDirection = () => {
			if ("flex" === parentStyle?.display) return parentStyle?.flexDirection ?? DEFAULT_PARENT_FLOW_DIRECTION;
			if ("grid" === parentStyle?.display) return parentStyle?.gridAutoFlow ?? DEFAULT_PARENT_FLOW_DIRECTION;
			return DEFAULT_PARENT_FLOW_DIRECTION;
		};
		return /* @__PURE__ */ react.createElement(SectionContent, null, /* @__PURE__ */ react.createElement(DisplayField, null), isDisplayFlex && /* @__PURE__ */ react.createElement(FlexFields, null), "flex" === parentStyle?.display && /* @__PURE__ */ react.createElement(FlexChildFields, { parentStyleDirection: getParentStyleDirection() }), isDisplayGrid && /* @__PURE__ */ react.createElement(GridFields, null), "grid" === parentStyle?.display && /* @__PURE__ */ react.createElement(GridChildFields, { parentStyleDirection: getParentStyleDirection() }));
	};
	var FlexFields = () => {
		const { value: flexWrap } = useStylesField("flex-wrap", { history: { propDisplayName: FLEX_WRAP_LABEL } });
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(FlexDirectionField, null), /* @__PURE__ */ react.createElement(JustifyContentField, null), /* @__PURE__ */ react.createElement(AlignItemsField, null), /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(GapControlField, null), /* @__PURE__ */ react.createElement(WrapField, null), ["wrap", "wrap-reverse"].includes(flexWrap?.value) && /* @__PURE__ */ react.createElement(AlignContentField, null));
	};
	var GridFields = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(GridOutlineField, null), /* @__PURE__ */ react.createElement(GridSizeFields, null), /* @__PURE__ */ react.createElement(GridAutoFlowField, null), /* @__PURE__ */ react.createElement(GridFieldsSlot, null), /* @__PURE__ */ react.createElement(StyleTabCollapsibleContent, { fields: ["grid-auto-rows", "grid-auto-columns"] }, /* @__PURE__ */ react.createElement(GridAutoTrackFields, null)), /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(GapControlField, null), /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(GridJustifyItemsField, null), /* @__PURE__ */ react.createElement(AlignItemsField, null));
	var FlexChildFields = ({ parentStyleDirection }) => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, null, (0, _wordpress_i18n.__)("Flex child", "elementor")), /* @__PURE__ */ react.createElement(AlignSelfChild, { parentStyleDirection }), /* @__PURE__ */ react.createElement(FlexOrderField, null), /* @__PURE__ */ react.createElement(FlexSizeField, null));
	var GridChildFields = ({ parentStyleDirection }) => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, null, (0, _wordpress_i18n.__)("Grid child", "elementor")), /* @__PURE__ */ react.createElement(GridSpanFields, null), /* @__PURE__ */ react.createElement(AlignSelfGridChild, { parentStyleDirection }), /* @__PURE__ */ react.createElement(FlexOrderField, null));
	var shouldDisplayFlexFields = (display, local) => {
		const value = display?.value ?? local?.value;
		if (!value) return false;
		return "flex" === value || "inline-flex" === value;
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/position-section/dimensions-field.tsx
	var InlineStartIcon = (0, _elementor_ui.withDirection)(_elementor_icons.SideLeftIcon);
	var InlineEndIcon = (0, _elementor_ui.withDirection)(_elementor_icons.SideRightIcon);
	var sideIcons = {
		"inset-block-start": /* @__PURE__ */ react.createElement(_elementor_icons.SideTopIcon, { fontSize: "tiny" }),
		"inset-block-end": /* @__PURE__ */ react.createElement(_elementor_icons.SideBottomIcon, { fontSize: "tiny" }),
		"inset-inline-start": /* @__PURE__ */ react.createElement(RotatedIcon$1, {
			icon: InlineStartIcon,
			size: "tiny"
		}),
		"inset-inline-end": /* @__PURE__ */ react.createElement(RotatedIcon$1, {
			icon: InlineEndIcon,
			size: "tiny"
		})
	};
	var getInlineStartLabel = (isSiteRtl) => isSiteRtl ? (0, _wordpress_i18n.__)("Right", "elementor") : (0, _wordpress_i18n.__)("Left", "elementor");
	var getInlineEndLabel = (isSiteRtl) => isSiteRtl ? (0, _wordpress_i18n.__)("Left", "elementor") : (0, _wordpress_i18n.__)("Right", "elementor");
	var DimensionsField = () => {
		const { isSiteRtl } = useDirection();
		const rowRefs = [(0, react.useRef)(null), (0, react.useRef)(null)];
		return /* @__PURE__ */ react.createElement(UiProviders, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			gap: 2,
			flexWrap: "nowrap",
			ref: rowRefs[0]
		}, /* @__PURE__ */ react.createElement(DimensionField, {
			side: "inset-block-start",
			label: (0, _wordpress_i18n.__)("Top", "elementor"),
			rowRef: rowRefs[0]
		}), /* @__PURE__ */ react.createElement(DimensionField, {
			side: "inset-inline-end",
			label: getInlineEndLabel(isSiteRtl),
			rowRef: rowRefs[0]
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			gap: 2,
			flexWrap: "nowrap",
			ref: rowRefs[1]
		}, /* @__PURE__ */ react.createElement(DimensionField, {
			side: "inset-block-end",
			label: (0, _wordpress_i18n.__)("Bottom", "elementor"),
			rowRef: rowRefs[1]
		}), /* @__PURE__ */ react.createElement(DimensionField, {
			side: "inset-inline-start",
			label: getInlineStartLabel(isSiteRtl),
			rowRef: rowRefs[1]
		})));
	};
	var DimensionField = ({ side, label, rowRef }) => /* @__PURE__ */ react.createElement(StylesField, {
		bind: side,
		propDisplayName: label
	}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
		container: true,
		gap: .75,
		alignItems: "center"
	}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
		item: true,
		xs: 12
	}, /* @__PURE__ */ react.createElement(ControlLabel, null, label)), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
		item: true,
		xs: 12
	}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SizeControl, {
		startIcon: sideIcons[side],
		extendedOptions: ["auto"],
		anchorRef: rowRef,
		min: -Number.MAX_SAFE_INTEGER
	}))));

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/position-section/offset-field.tsx
	var OFFSET_LABEL = (0, _wordpress_i18n.__)("Anchor offset", "elementor");
	var UNITS = [
		"px",
		"em",
		"rem",
		"vw",
		"vh"
	];
	var OffsetField = () => {
		const rowRef = (0, react.useRef)(null);
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "scroll-margin-top",
			propDisplayName: OFFSET_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, {
			label: OFFSET_LABEL,
			ref: rowRef
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SizeControl, {
			units: UNITS,
			anchorRef: rowRef
		})));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/position-section/position-field.tsx
	var POSITION_LABEL$1 = (0, _wordpress_i18n.__)("Position", "elementor");
	var positionOptions$1 = [
		{
			label: (0, _wordpress_i18n.__)("Static", "elementor"),
			value: "static"
		},
		{
			label: (0, _wordpress_i18n.__)("Relative", "elementor"),
			value: "relative"
		},
		{
			label: (0, _wordpress_i18n.__)("Absolute", "elementor"),
			value: "absolute"
		},
		{
			label: (0, _wordpress_i18n.__)("Fixed", "elementor"),
			value: "fixed"
		},
		{
			label: (0, _wordpress_i18n.__)("Sticky", "elementor"),
			value: "sticky"
		}
	];
	var PositionField = () => {
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "position",
			propDisplayName: POSITION_LABEL$1
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: POSITION_LABEL$1 }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SelectControl, { options: positionOptions$1 })));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/position-section/z-index-field.tsx
	var Z_INDEX_LABEL = (0, _wordpress_i18n.__)("Z-index", "elementor");
	var ZIndexField = ({ disabled }) => {
		const StyleField = /* @__PURE__ */ react.createElement(StylesField, {
			bind: "z-index",
			propDisplayName: Z_INDEX_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: Z_INDEX_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.NumberControl, { disabled })));
		const content = /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
			color: "secondary",
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.InfoCircleFilledIcon, null),
			size: "small"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("Z-index", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { component: "span" }, (0, _wordpress_i18n.__)("z-index only works on positioned elements. Change position to relative, absolute, or fixed to enable layering.", "elementor")));
		return disabled ? /* @__PURE__ */ react.createElement(_elementor_ui.Infotip, {
			placement: "right",
			content,
			color: "secondary",
			slotProps: { popper: { sx: { width: 300 } } }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, null, StyleField)) : /* @__PURE__ */ react.createElement(react.Fragment, null, StyleField);
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/position-section/position-section.tsx
	var POSITION_STATIC = "static";
	var POSITION_LABEL = (0, _wordpress_i18n.__)("Position", "elementor");
	var DIMENSIONS_LABEL = (0, _wordpress_i18n.__)("Dimensions", "elementor");
	var DEPENDENT_PROP_NAMES = [
		"inset-block-start",
		"inset-block-end",
		"inset-inline-start",
		"inset-inline-end",
		"z-index"
	];
	var PositionSection = () => {
		const { value: position } = useStylesField("position", withHistoryLabel(POSITION_LABEL));
		const inheritedPosition = useInheritedValues(["position"]).position;
		const resolvedPosition = position ?? inheritedPosition ?? null;
		const isPositionUnsetOrStatic = !resolvedPosition || resolvedPosition.value === POSITION_STATIC;
		const positionPrevRef = (0, react.useRef)(position);
		const { values: dependentValues, setValues: setDependentValues } = useStylesFields(DEPENDENT_PROP_NAMES);
		const [savedDependentValues, saveToHistory, clearHistory] = usePersistDimensions();
		(0, react.useEffect)(() => {
			if (position && position?.value === POSITION_STATIC && hasDependentValues(dependentValues)) saveToHistory(extractDimensions(dependentValues));
			if (positionPrevRef.current?.value === POSITION_STATIC) {
				setDependentValues({ ...savedDependentValues }, withHistoryLabel(DIMENSIONS_LABEL));
				clearHistory();
			}
			if (isPositionUnsetOrStatic && dependentValues?.["z-index"]) setDependentValues({ "z-index": null }, withHistoryLabel(DIMENSIONS_LABEL));
			positionPrevRef.current = position;
		}, [position?.value, isPositionUnsetOrStatic]);
		return /* @__PURE__ */ react.createElement(StyledSectionContent, null, /* @__PURE__ */ react.createElement(PositionField, null), /* @__PURE__ */ react.createElement(DimensionsField, null), /* @__PURE__ */ react.createElement(ZIndexField, { disabled: isPositionUnsetOrStatic }), /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(OffsetField, null));
	};
	var usePersistDimensions = () => {
		const { id: styleDefID, meta } = useStyle();
		return (0, _elementor_session.useSessionStorage)(`${`styles/${styleDefID}/${meta.breakpoint || "desktop"}/${meta.state || "null"}`}/dimensions`);
	};
	var withHistoryLabel = (name) => {
		return { history: { propDisplayName: name } };
	};
	var hasDependentValues = (values) => {
		if (!values) return false;
		const dimensions = extractDimensions(values);
		return Object.values(dimensions).some((v) => v !== null);
	};
	var extractDimensions = (values) => {
		return DEPENDENT_PROP_NAMES.reduce((acc, key) => {
			return {
				...acc,
				[key]: values?.[key] ?? null
			};
		}, {});
	};
	var StyledSectionContent = (0, _elementor_ui.styled)(SectionContent, { shouldForwardProp: (prop) => prop !== "gap" })(({ gap = 2, theme }) => ({
		gap: 0,
		"& > *": { marginBottom: theme.spacing(gap) },
		"& > *:last-child": { marginBottom: 0 },
		"& > .MuiStack-root": { marginBottom: 0 },
		"& > .MuiStack-root:has(> *)": { marginBottom: theme.spacing(gap) },
		"& > .MuiDivider-root": { marginBottom: theme.spacing(gap) }
	}));

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/size-section/object-fit-field.tsx
	var OBJECT_FIT_LABEL = (0, _wordpress_i18n.__)("Object fit", "elementor");
	var positionOptions = [
		{
			label: (0, _wordpress_i18n.__)("Fill", "elementor"),
			value: "fill"
		},
		{
			label: (0, _wordpress_i18n.__)("Cover", "elementor"),
			value: "cover"
		},
		{
			label: (0, _wordpress_i18n.__)("Contain", "elementor"),
			value: "contain"
		},
		{
			label: (0, _wordpress_i18n.__)("None", "elementor"),
			value: "none"
		},
		{
			label: (0, _wordpress_i18n.__)("Scale down", "elementor"),
			value: "scale-down"
		}
	];
	var ObjectFitField = () => {
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "object-fit",
			propDisplayName: OBJECT_FIT_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: OBJECT_FIT_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SelectControl, { options: positionOptions })));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/size-section/overflow-field.tsx
	var OVERFLOW_LABEL = (0, _wordpress_i18n.__)("Overflow", "elementor");
	var options$5 = [
		{
			value: "visible",
			label: (0, _wordpress_i18n.__)("Visible", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.EyeIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "hidden",
			label: (0, _wordpress_i18n.__)("Hidden", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.EyeOffIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "auto",
			label: (0, _wordpress_i18n.__)("Auto", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.LetterAIcon, { fontSize: size }),
			showTooltip: true
		}
	];
	var OverflowField = () => {
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "overflow",
			propDisplayName: OVERFLOW_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: OVERFLOW_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleControl, { options: options$5 })));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/size-section/size-section.tsx
	var CssSizeProps = [
		[{
			bind: "width",
			label: (0, _wordpress_i18n.__)("Width", "elementor")
		}, {
			bind: "height",
			label: (0, _wordpress_i18n.__)("Height", "elementor")
		}],
		[{
			bind: "min-width",
			label: (0, _wordpress_i18n.__)("Min width", "elementor")
		}, {
			bind: "min-height",
			label: (0, _wordpress_i18n.__)("Min height", "elementor")
		}],
		[{
			bind: "max-width",
			label: (0, _wordpress_i18n.__)("Max width", "elementor")
		}, {
			bind: "max-height",
			label: (0, _wordpress_i18n.__)("Max height", "elementor")
		}]
	];
	var ASPECT_RATIO_LABEL = (0, _wordpress_i18n.__)("Aspect Ratio", "elementor");
	var SizeSection = () => {
		const gridRowRefs = [
			(0, react.useRef)(null),
			(0, react.useRef)(null),
			(0, react.useRef)(null)
		];
		return /* @__PURE__ */ react.createElement(SectionContent, null, CssSizeProps.map((row, rowIndex) => /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			key: rowIndex,
			container: true,
			gap: 2,
			flexWrap: "nowrap",
			ref: gridRowRefs[rowIndex]
		}, row.map((props) => /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 6,
			key: props.bind
		}, /* @__PURE__ */ react.createElement(SizeField, {
			...props,
			rowRef: gridRowRefs[rowIndex],
			extendedOptions: ["auto"]
		}))))), /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, null, /* @__PURE__ */ react.createElement(OverflowField, null)), /* @__PURE__ */ react.createElement(StyleTabCollapsibleContent, { fields: ["aspect-ratio", "object-fit"] }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			gap: 2,
			pt: 2
		}, /* @__PURE__ */ react.createElement(StylesField, {
			bind: "aspect-ratio",
			propDisplayName: ASPECT_RATIO_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.AspectRatioControl, { label: ASPECT_RATIO_LABEL })), /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(ObjectFitField, null), /* @__PURE__ */ react.createElement(StylesField, {
			bind: "object-position",
			propDisplayName: (0, _wordpress_i18n.__)("Object position", "elementor")
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 6
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.PositionControl, null))))));
	};
	var SizeField = ({ label, bind, rowRef, extendedOptions }) => {
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind,
			propDisplayName: label
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			gap: .75,
			alignItems: "center"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 12
		}, /* @__PURE__ */ react.createElement(ControlLabel, null, label)), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 12
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SizeControl, {
			extendedOptions,
			anchorRef: rowRef
		}))));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/spacing-section/spacing-section.tsx
	var MARGIN_LABEL = (0, _wordpress_i18n.__)("Margin", "elementor");
	var PADDING_LABEL = (0, _wordpress_i18n.__)("Padding", "elementor");
	var SpacingSection = () => {
		const { isSiteRtl } = useDirection();
		return /* @__PURE__ */ react.createElement(SectionContent, null, /* @__PURE__ */ react.createElement(StylesField, {
			bind: "margin",
			propDisplayName: MARGIN_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.LinkedDimensionsControl, {
			label: MARGIN_LABEL,
			isSiteRtl,
			min: -Number.MAX_SAFE_INTEGER
		})), /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(StylesField, {
			bind: "padding",
			propDisplayName: PADDING_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.LinkedDimensionsControl, {
			label: PADDING_LABEL,
			isSiteRtl
		})));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/typography-section/column-count-field.tsx
	var COLUMN_COUNT_LABEL = (0, _wordpress_i18n.__)("Columns", "elementor");
	var ColumnCountField = () => {
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "column-count",
			propDisplayName: COLUMN_COUNT_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: COLUMN_COUNT_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.NumberControl, {
			shouldForceInt: true,
			min: 0,
			step: 1
		})));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/typography-section/column-gap-field.tsx
	var COLUMN_GAP_LABEL = (0, _wordpress_i18n.__)("Column gap", "elementor");
	var ColumnGapField = () => {
		const rowRef = (0, react.useRef)(null);
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "column-gap",
			propDisplayName: COLUMN_GAP_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, {
			label: COLUMN_GAP_LABEL,
			ref: rowRef
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SizeControl, { anchorRef: rowRef })));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/typography-section/font-family-field.tsx
	var FONT_FAMILY_LABEL = (0, _wordpress_i18n.__)("Font family", "elementor");
	var FontFamilyField = () => {
		const fontFamilies = (0, _elementor_editor_controls.useFontFamilies)();
		const sectionWidth = (0, _elementor_editor_ui.useSectionWidth)();
		if (fontFamilies.length === 0) return null;
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "font-family",
			propDisplayName: FONT_FAMILY_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: FONT_FAMILY_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.FontFamilyControl, {
			fontFamilies,
			sectionWidth,
			ariaLabel: FONT_FAMILY_LABEL
		})));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/typography-section/font-size-field.tsx
	var FONT_SIZE_LABEL = (0, _wordpress_i18n.__)("Font size", "elementor");
	var FontSizeField = () => {
		const rowRef = (0, react.useRef)(null);
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "font-size",
			propDisplayName: FONT_SIZE_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, {
			label: FONT_SIZE_LABEL,
			ref: rowRef
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SizeControl, {
			anchorRef: rowRef,
			ariaLabel: FONT_SIZE_LABEL
		})));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/typography-section/font-style-field.tsx
	var FONT_STYLE_LABEL = (0, _wordpress_i18n.__)("Font style", "elementor");
	var options$4 = [{
		value: "normal",
		label: (0, _wordpress_i18n.__)("Normal", "elementor"),
		renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.MinusIcon, { fontSize: size }),
		showTooltip: true
	}, {
		value: "italic",
		label: (0, _wordpress_i18n.__)("Italic", "elementor"),
		renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.ItalicIcon, { fontSize: size }),
		showTooltip: true
	}];
	var FontStyleField = () => {
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "font-style",
			propDisplayName: FONT_STYLE_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: FONT_STYLE_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleControl, { options: options$4 })));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/typography-section/font-weight-field.tsx
	var FONT_WEIGHT_LABEL = (0, _wordpress_i18n.__)("Font weight", "elementor");
	var fontWeightOptions = [
		{
			value: "100",
			label: (0, _wordpress_i18n.__)("100 - Thin", "elementor")
		},
		{
			value: "200",
			label: (0, _wordpress_i18n.__)("200 - Extra light", "elementor")
		},
		{
			value: "300",
			label: (0, _wordpress_i18n.__)("300 - Light", "elementor")
		},
		{
			value: "400",
			label: (0, _wordpress_i18n.__)("400 - Normal", "elementor")
		},
		{
			value: "500",
			label: (0, _wordpress_i18n.__)("500 - Medium", "elementor")
		},
		{
			value: "600",
			label: (0, _wordpress_i18n.__)("600 - Semi bold", "elementor")
		},
		{
			value: "700",
			label: (0, _wordpress_i18n.__)("700 - Bold", "elementor")
		},
		{
			value: "800",
			label: (0, _wordpress_i18n.__)("800 - Extra bold", "elementor")
		},
		{
			value: "900",
			label: (0, _wordpress_i18n.__)("900 - Black", "elementor")
		}
	];
	var FontWeightField = () => {
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "font-weight",
			propDisplayName: FONT_WEIGHT_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: FONT_WEIGHT_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SelectControl, { options: fontWeightOptions })));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/typography-section/letter-spacing-field.tsx
	var LETTER_SPACING_LABEL = (0, _wordpress_i18n.__)("Letter spacing", "elementor");
	var LetterSpacingField = () => {
		const rowRef = (0, react.useRef)(null);
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "letter-spacing",
			propDisplayName: LETTER_SPACING_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, {
			label: LETTER_SPACING_LABEL,
			ref: rowRef
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SizeControl, {
			anchorRef: rowRef,
			min: -Number.MAX_SAFE_INTEGER
		})));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/typography-section/line-height-field.tsx
	var LINE_HEIGHT_LABEL = (0, _wordpress_i18n.__)("Line height", "elementor");
	var LineHeightField = () => {
		const rowRef = (0, react.useRef)(null);
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "line-height",
			propDisplayName: LINE_HEIGHT_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, {
			label: LINE_HEIGHT_LABEL,
			ref: rowRef
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SizeControl, { anchorRef: rowRef })));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/typography-section/text-alignment-field.tsx
	var TEXT_ALIGNMENT_LABEL = (0, _wordpress_i18n.__)("Text align", "elementor");
	var AlignStartIcon = (0, _elementor_ui.withDirection)(_elementor_icons.AlignLeftIcon);
	var AlignEndIcon = (0, _elementor_ui.withDirection)(_elementor_icons.AlignRightIcon);
	var options$3 = [
		{
			value: "start",
			label: (0, _wordpress_i18n.__)("Start", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(AlignStartIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "center",
			label: (0, _wordpress_i18n.__)("Center", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.AlignCenterIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "end",
			label: (0, _wordpress_i18n.__)("End", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(AlignEndIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "justify",
			label: (0, _wordpress_i18n.__)("Justify", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.AlignJustifiedIcon, { fontSize: size }),
			showTooltip: true
		}
	];
	var TextAlignmentField = () => {
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "text-align",
			propDisplayName: TEXT_ALIGNMENT_LABEL
		}, /* @__PURE__ */ react.createElement(UiProviders, null, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: TEXT_ALIGNMENT_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleControl, { options: options$3 }))));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/typography-section/text-color-field.tsx
	var TEXT_COLOR_LABEL = (0, _wordpress_i18n.__)("Text color", "elementor");
	var TextColorField = () => {
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "color",
			propDisplayName: TEXT_COLOR_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: TEXT_COLOR_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ColorControl, { id: "text-color-control" })));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/typography-section/text-decoration-field.tsx
	var TEXT_DECORATION_LABEL = (0, _wordpress_i18n.__)("Line decoration", "elementor");
	var options$2 = [
		{
			value: "none",
			label: (0, _wordpress_i18n.__)("None", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.MinusIcon, { fontSize: size }),
			showTooltip: true,
			exclusive: true
		},
		{
			value: "underline",
			label: (0, _wordpress_i18n.__)("Underline", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.UnderlineIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "line-through",
			label: (0, _wordpress_i18n.__)("Line-through", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.StrikethroughIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "overline",
			label: (0, _wordpress_i18n.__)("Overline", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.OverlineIcon, { fontSize: size }),
			showTooltip: true
		}
	];
	var TextDecorationField = () => /* @__PURE__ */ react.createElement(StylesField, {
		bind: "text-decoration",
		propDisplayName: TEXT_DECORATION_LABEL
	}, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: TEXT_DECORATION_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleControl, {
		options: options$2,
		exclusive: false
	})));

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/typography-section/text-direction-field.tsx
	var TEXT_DIRECTION_LABEL = (0, _wordpress_i18n.__)("Direction", "elementor");
	var options$1 = [{
		value: "ltr",
		label: (0, _wordpress_i18n.__)("Left to right", "elementor"),
		renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.TextDirectionLtrIcon, { fontSize: size }),
		showTooltip: true
	}, {
		value: "rtl",
		label: (0, _wordpress_i18n.__)("Right to left", "elementor"),
		renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.TextDirectionRtlIcon, { fontSize: size }),
		showTooltip: true
	}];
	var TextDirectionField = () => {
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "direction",
			propDisplayName: TEXT_DIRECTION_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: TEXT_DIRECTION_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleControl, { options: options$1 })));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/add-or-remove-content.tsx
	var SIZE$4 = "tiny";
	var AddOrRemoveContent = ({ isAdded, onAdd, onRemove, children, disabled, renderLabel }) => {
		return /* @__PURE__ */ react.createElement(SectionContent, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			sx: {
				justifyContent: "space-between",
				alignItems: "center",
				marginInlineEnd: -.75
			}
		}, renderLabel(), isAdded ? /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: SIZE$4,
			onClick: onRemove,
			"aria-label": "Remove",
			disabled
		}, /* @__PURE__ */ react.createElement(_elementor_icons.MinusIcon, { fontSize: SIZE$4 })) : /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: SIZE$4,
			onClick: onAdd,
			"aria-label": "Add",
			disabled
		}, /* @__PURE__ */ react.createElement(_elementor_icons.PlusIcon, { fontSize: SIZE$4 }))), /* @__PURE__ */ react.createElement(_elementor_ui.Collapse, {
			in: isAdded,
			unmountOnExit: true
		}, /* @__PURE__ */ react.createElement(SectionContent, null, children)));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/typography-section/text-stroke-field.tsx
	var initTextStroke = {
		$$type: "stroke",
		value: {
			color: {
				$$type: "color",
				value: "#000000"
			},
			width: {
				$$type: "size",
				value: {
					unit: "px",
					size: 1
				}
			}
		}
	};
	var TEXT_STROKE_LABEL = (0, _wordpress_i18n.__)("Text stroke", "elementor");
	var TextStrokeField = () => {
		const { value, setValue, canEdit } = useStylesField("stroke", { history: { propDisplayName: TEXT_STROKE_LABEL } });
		const addTextStroke = () => {
			setValue(initTextStroke);
		};
		const removeTextStroke = () => {
			setValue(null);
		};
		const hasTextStroke = Boolean(value);
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "stroke",
			propDisplayName: TEXT_STROKE_LABEL
		}, /* @__PURE__ */ react.createElement(AddOrRemoveContent, {
			isAdded: hasTextStroke,
			onAdd: addTextStroke,
			onRemove: removeTextStroke,
			disabled: !canEdit,
			renderLabel: () => /* @__PURE__ */ react.createElement(ControlLabel, null, TEXT_STROKE_LABEL)
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.StrokeControl, null)));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/typography-section/transform-field.tsx
	var TEXT_TRANSFORM_LABEL = (0, _wordpress_i18n.__)("Text transform", "elementor");
	var options = [
		{
			value: "none",
			label: (0, _wordpress_i18n.__)("None", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.MinusIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "capitalize",
			label: (0, _wordpress_i18n.__)("Capitalize", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.LetterCaseIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "uppercase",
			label: (0, _wordpress_i18n.__)("Uppercase", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.LetterCaseUpperIcon, { fontSize: size }),
			showTooltip: true
		},
		{
			value: "lowercase",
			label: (0, _wordpress_i18n.__)("Lowercase", "elementor"),
			renderContent: ({ size }) => /* @__PURE__ */ react.createElement(_elementor_icons.LetterCaseLowerIcon, { fontSize: size }),
			showTooltip: true
		}
	];
	var TransformField = () => /* @__PURE__ */ react.createElement(StylesField, {
		bind: "text-transform",
		propDisplayName: TEXT_TRANSFORM_LABEL
	}, /* @__PURE__ */ react.createElement(StylesFieldLayout, { label: TEXT_TRANSFORM_LABEL }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ToggleControl, { options })));

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/typography-section/word-spacing-field.tsx
	var WORD_SPACING_LABEL = (0, _wordpress_i18n.__)("Word spacing", "elementor");
	var WordSpacingField = () => {
		const rowRef = (0, react.useRef)(null);
		return /* @__PURE__ */ react.createElement(StylesField, {
			bind: "word-spacing",
			propDisplayName: WORD_SPACING_LABEL
		}, /* @__PURE__ */ react.createElement(StylesFieldLayout, {
			label: WORD_SPACING_LABEL,
			ref: rowRef
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.SizeControl, {
			anchorRef: rowRef,
			min: -Number.MAX_SAFE_INTEGER
		})));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections/typography-section/typography-section.tsx
	var TypographySection = () => {
		return /* @__PURE__ */ react.createElement(SectionContent, null, /* @__PURE__ */ react.createElement(FontFamilyField, null), /* @__PURE__ */ react.createElement(FontWeightField, null), /* @__PURE__ */ react.createElement(FontSizeField, null), /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(TextAlignmentField, null), /* @__PURE__ */ react.createElement(TextColorField, null), /* @__PURE__ */ react.createElement(StyleTabCollapsibleContent, { fields: [
			"line-height",
			"letter-spacing",
			"word-spacing",
			"column-count",
			"text-decoration",
			"text-transform",
			"direction",
			"font-style",
			"stroke"
		] }, /* @__PURE__ */ react.createElement(SectionContent, { sx: { pt: 2 } }, /* @__PURE__ */ react.createElement(LineHeightField, null), /* @__PURE__ */ react.createElement(LetterSpacingField, null), /* @__PURE__ */ react.createElement(WordSpacingField, null), /* @__PURE__ */ react.createElement(ColumnCountField, null), /* @__PURE__ */ react.createElement(ColumnGapField, null), /* @__PURE__ */ react.createElement(PanelDivider, null), /* @__PURE__ */ react.createElement(TextDecorationField, null), /* @__PURE__ */ react.createElement(TransformField, null), /* @__PURE__ */ react.createElement(TextDirectionField, null), /* @__PURE__ */ react.createElement(FontStyleField, null), /* @__PURE__ */ react.createElement(TextStrokeField, null))));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections-definition.ts
	var STYLE_SECTIONS = [
		{
			name: "Layout",
			title: (0, _wordpress_i18n.__)("Layout", "elementor"),
			component: LayoutSection,
			fields: [
				"display",
				"flex-direction",
				"flex-wrap",
				"justify-content",
				"align-items",
				"align-content",
				"align-self",
				"gap",
				"order",
				"grid-column",
				"grid-row",
				"grid-auto-rows",
				"grid-auto-columns"
			]
		},
		{
			name: "Spacing",
			title: (0, _wordpress_i18n.__)("Spacing", "elementor"),
			component: SpacingSection,
			fields: ["margin", "padding"]
		},
		{
			name: "Size",
			title: (0, _wordpress_i18n.__)("Size", "elementor"),
			component: SizeSection,
			fields: [
				"width",
				"min-width",
				"max-width",
				"height",
				"min-height",
				"max-height",
				"overflow",
				"aspect-ratio",
				"object-fit"
			]
		},
		{
			name: "Position",
			title: (0, _wordpress_i18n.__)("Position", "elementor"),
			component: PositionSection,
			fields: [
				"position",
				"z-index",
				"scroll-margin-top"
			]
		},
		{
			name: "Typography",
			title: (0, _wordpress_i18n.__)("Typography", "elementor"),
			component: TypographySection,
			fields: [
				"font-family",
				"font-weight",
				"font-size",
				"text-align",
				"color",
				"line-height",
				"letter-spacing",
				"word-spacing",
				"column-count",
				"text-decoration",
				"text-transform",
				"direction",
				"font-style",
				"stroke"
			]
		},
		{
			name: "Background",
			title: (0, _wordpress_i18n.__)("Background", "elementor"),
			component: BackgroundSection,
			fields: ["background"]
		},
		{
			name: "Border",
			title: (0, _wordpress_i18n.__)("Border", "elementor"),
			component: BorderSection,
			fields: [
				"border-radius",
				"border-width",
				"border-color",
				"border-style"
			]
		},
		{
			name: "Effects",
			title: (0, _wordpress_i18n.__)("Effects", "elementor"),
			component: EffectsSection,
			fields: [
				"mix-blend-mode",
				"box-shadow",
				"opacity",
				"transform",
				"filter",
				"backdrop-filter",
				"transform-origin",
				"transition"
			]
		}
	];
	var STYLE_SECTION_NAMES = STYLE_SECTIONS.map((section) => section.name);

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-tab-section.tsx
	var StyleTabSection = ({ section, fields = [], unmountOnExit = true }) => {
		const { component, name, title, action } = section;
		const tabDefaults = useDefaultPanelSettings();
		const SectionComponent = component || (() => /* @__PURE__ */ react.createElement(react.Fragment, null));
		const isExpanded = tabDefaults.defaultSectionsExpanded.style?.includes(name);
		return /* @__PURE__ */ react.createElement(Section, {
			title,
			defaultExpanded: isExpanded,
			titleEnd: getStylesInheritanceIndicators(fields),
			unmountOnExit,
			action
		}, /* @__PURE__ */ react.createElement(SectionComponent, null));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-sections.tsx
	var StyleSections = () => {
		return /* @__PURE__ */ react.createElement(react.Fragment, null, STYLE_SECTIONS.map((section) => /* @__PURE__ */ react.createElement(StyleTabSection, {
			key: section.name,
			section: {
				component: section.component,
				name: section.name,
				title: section.title
			},
			fields: section.fields
		})));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-tab.tsx
	var TABS_HEADER_HEIGHT = "37px";
	var { Slot: StyleTabSlot, inject: injectIntoStyleTab } = (0, _elementor_locations.createLocation)();
	var stickyHeaderStyles = {
		position: "sticky",
		zIndex: 1100,
		opacity: 1,
		backgroundColor: "background.default",
		transition: "top 300ms ease"
	};
	var StyleTab = () => {
		const currentClassesProp = useCurrentClassesProp();
		const [activeStyleDefId, setActiveStyleDefId] = useActiveStyleDefId(currentClassesProp ?? "");
		const [activeStyleState, setActiveStyleState] = (0, react.useState)(null);
		const breakpoint = (0, _elementor_editor_responsive.useActiveBreakpoint)();
		if (!currentClassesProp) return null;
		return /* @__PURE__ */ react.createElement(ClassesPropProvider, { prop: currentClassesProp }, /* @__PURE__ */ react.createElement(StyleProvider, {
			meta: {
				breakpoint,
				state: activeStyleState
			},
			id: activeStyleDefId,
			setId: (id) => {
				setActiveStyleDefId(id);
				setActiveStyleState(null);
			},
			setMetaState: setActiveStyleState
		}, /* @__PURE__ */ react.createElement(_elementor_session.SessionStorageProvider, { prefix: activeStyleDefId ?? "" }, /* @__PURE__ */ react.createElement(StyleInheritanceProvider, null, /* @__PURE__ */ react.createElement(ClassesHeader, null, /* @__PURE__ */ react.createElement(CssClassSelector, null), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null)), /* @__PURE__ */ react.createElement(SectionsList, null, /* @__PURE__ */ react.createElement(StyleSections, null), /* @__PURE__ */ react.createElement(StyleTabSlot, null)), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { height: "150px" } })))));
	};
	function ClassesHeader({ children }) {
		const scrollDirection = useScrollDirection();
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { sx: {
			...stickyHeaderStyles,
			top: scrollDirection === "up" ? TABS_HEADER_HEIGHT : 0
		} }, children);
	}
	function useCurrentClassesProp() {
		const { elementType } = useElement();
		const prop = Object.entries(elementType.propsSchema).find(([, propType]) => propType.kind === "plain" && propType.key === _elementor_editor_props.CLASSES_PROP_KEY);
		if (!prop) return null;
		return prop[0];
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/editing-panel-tabs.tsx
	var EditingPanelTabs = () => {
		const { element } = useElement();
		return /* @__PURE__ */ react.createElement(react.Fragment, { key: element.id }, /* @__PURE__ */ react.createElement(PanelTabContent, null));
	};
	var PanelTabContent = () => {
		const { element } = useElement();
		const defaultComponentTab = useDefaultPanelSettings().defaultTab;
		const isPromotedElement = !!(0, _elementor_editor_elements.getWidgetsCache)()?.[element.type]?.meta?.is_pro_promotion;
		const [storedTab, setCurrentTab] = useStateByElement("tab", defaultComponentTab);
		const { getTabProps, getTabPanelProps, getTabsProps } = (0, _elementor_ui.useTabs)(isPromotedElement && storedTab === "settings" ? "style" : storedTab);
		return /* @__PURE__ */ react.createElement(ScrollProvider, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "column",
			sx: { width: "100%" }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { sx: {
			...stickyHeaderStyles,
			top: 0
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Tabs, {
			variant: "fullWidth",
			size: "small",
			sx: { mt: .5 },
			...getTabsProps(),
			onChange: (_, newValue) => {
				getTabsProps().onChange(_, newValue);
				setCurrentTab(newValue);
			}
		}, !isPromotedElement && /* @__PURE__ */ react.createElement(_elementor_ui.Tab, {
			label: (0, _wordpress_i18n.__)("General", "elementor"),
			...getTabProps("settings")
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Tab, {
			label: (0, _wordpress_i18n.__)("Style", "elementor"),
			...getTabProps("style")
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Tab, {
			label: (0, _wordpress_i18n.__)("Interactions", "elementor"),
			...getTabProps("interactions")
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null)), !isPromotedElement && /* @__PURE__ */ react.createElement(_elementor_ui.TabPanel, {
			...getTabPanelProps("settings"),
			disablePadding: true
		}, /* @__PURE__ */ react.createElement(SettingsTab, null)), /* @__PURE__ */ react.createElement(_elementor_ui.TabPanel, {
			...getTabPanelProps("style"),
			disablePadding: true
		}, /* @__PURE__ */ react.createElement(StyleTab, null)), /* @__PURE__ */ react.createElement(_elementor_ui.TabPanel, {
			...getTabPanelProps("interactions"),
			disablePadding: true
		}, /* @__PURE__ */ react.createElement(InteractionsTab, null))));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/editing-panel.tsx
	var { Slot: PanelHeaderTopSlot, inject: injectIntoPanelHeaderTop } = (0, _elementor_locations.createLocation)();
	var { useMenuItems } = _elementor_menus.controlActionsMenu;
	var EditingPanel = () => {
		const { element, elementType, settings } = (0, _elementor_editor_elements.useSelectedElementSettings)();
		const controlReplacements = (0, _elementor_editor_controls.getControlReplacements)();
		const menuItems = useMenuItems().default;
		if (!element || !elementType) return null;
		const panelTitle = (0, _wordpress_i18n.__)("Edit %s", "elementor").replace("%s", elementType.title);
		const { component: ReplacementComponent } = getEditingPanelReplacement(element, elementType) ?? {};
		let panelContent = /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelHeader, null, /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelHeaderTitle, null, panelTitle), /* @__PURE__ */ react.createElement(_elementor_icons.AtomIcon, {
			fontSize: "small",
			sx: { color: "text.tertiary" }
		})), /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelBody, { sx: {
			height: "auto",
			flex: 1,
			minHeight: 0
		} }, /* @__PURE__ */ react.createElement(EditingPanelTabs, null)), /* @__PURE__ */ react.createElement(EditingPanelStickyPromotion, null));
		if (ReplacementComponent) panelContent = /* @__PURE__ */ react.createElement(ReplacementComponent, null);
		return /* @__PURE__ */ react.createElement(_elementor_ui.ErrorBoundary, { fallback: /* @__PURE__ */ react.createElement(EditorPanelErrorFallback, null) }, /* @__PURE__ */ react.createElement(_elementor_session.SessionStorageProvider, { prefix: "elementor" }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.ThemeProvider, null, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlActionsProvider, { items: menuItems }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlReplacementsProvider, { replacements: controlReplacements }, /* @__PURE__ */ react.createElement(ElementProvider, {
			element,
			elementType,
			settings
		}, /* @__PURE__ */ react.createElement(_elementor_editor_panels.Panel, null, /* @__PURE__ */ react.createElement(PanelHeaderTopSlot, null), panelContent)))))));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/style-states/pseudo-state-menu-items.tsx
	function PseudoStateMenuItems({ states, activeState, onSelectState, onClose }) {
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.MenuSubheader, { sx: {
			typography: "caption",
			color: "text.secondary",
			pb: .5,
			pt: 1
		} }, (0, _wordpress_i18n.__)("States", "elementor")), states.map((state) => /* @__PURE__ */ react.createElement(_elementor_editor_ui.MenuListItem, {
			key: state.key,
			selected: state.value === activeState,
			sx: { textTransform: "capitalize" },
			onClick: () => {
				onSelectState(state.value);
				onClose?.();
			}
		}, state.label)));
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/panel.ts
	var { panel, usePanelActions, usePanelStatus } = (0, _elementor_editor_panels.createPanel)({
		id: "editing-panel",
		component: EditingPanel
	});

//#endregion
//#region packages/packages/core/editor-editing-panel/src/sync/is-atomic-widget-selected.ts
	var isAtomicWidgetSelected = () => {
		const selectedElements = (0, _elementor_editor_elements.getSelectedElements)();
		const widgetCache = (0, _elementor_editor_elements.getWidgetsCache)();
		if (selectedElements.length !== 1) return false;
		return !!widgetCache?.[selectedElements[0].type]?.atomic_controls;
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/hooks/use-open-editor-panel.ts
	var useOpenEditorPanel = () => {
		const { open } = usePanelActions();
		(0, react.useEffect)(() => {
			return (0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandStartEvent)("panel/editor/open"), () => {
				if (isAtomicWidgetSelected()) open();
			});
		}, []);
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/editing-panel-hooks.tsx
	var EditingPanelHooks = () => {
		useOpenEditorPanel();
		return null;
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/promotions/custom-css.tsx
	var TRACKING_DATA = {
		target_name: "custom_css",
		location_l2: "style"
	};
	var CustomCssSection = () => {
		const triggerRef = (0, react.useRef)(null);
		return /* @__PURE__ */ react.createElement(StyleTabSection, { section: {
			name: "Custom CSS",
			title: (0, _wordpress_i18n.__)("Custom CSS", "elementor"),
			action: {
				component: /* @__PURE__ */ react.createElement(_elementor_editor_controls.PromotionTrigger, {
					ref: triggerRef,
					promotionKey: "customCss",
					trackingData: TRACKING_DATA
				}),
				onClick: () => triggerRef.current?.toggle()
			}
		} });
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/components/promotions/init.tsx
	var init$3 = /* @__PURE__ */ __name(() => {
		injectIntoStyleTab({
			id: "custom-css",
			component: CustomCssSection,
			options: { overwrite: true }
		});
		if (!window.elementorPro) {
			controlsRegistry.register("attributes", _elementor_editor_controls.AttributesControl, "two-columns");
			controlsRegistry.register("display-conditions", _elementor_editor_controls.DisplayConditionsControl, "two-columns");
		}
	}, "init");

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/element-controls/accordion-items-control/use-actions.ts
	var ACCORDION_ELEMENT_TYPE = "e-accordion";
	var ACCORDION_ITEM_ELEMENT_TYPE = "e-accordion-item";
	var ACCORDION_ITEM_HEADER_ELEMENT_TYPE$1 = "e-accordion-item-header";
	var ACCORDION_ITEM_TITLE_ELEMENT_TYPE = "e-accordion-item-title";
	var ACCORDION_ITEM_ICON_ELEMENT_TYPE = "e-accordion-item-icon";
	var ACCORDION_ITEM_CONTENT_ELEMENT_TYPE = "e-accordion-item-content";
	var PARAGRAPH_WIDGET_TYPE = "e-paragraph";
	var getItemTitle$1 = /* @__PURE__ */ __name((position) => (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("Accordion Item %d", "elementor"), position), "getItemTitle");
	var TRAILING_NUMBER$1 = /(\d+)\s*$/;
	var getNextItemNumber$1 = /* @__PURE__ */ __name((existingTitles) => {
		const taken = new Set(existingTitles.filter((title) => Boolean(title)));
		let next = existingTitles.reduce((max, title) => {
			const [, trailingNumber] = title?.match(TRAILING_NUMBER$1) ?? [];
			const parsed = trailingNumber ? Number(trailingNumber) : 0;
			return Number.isFinite(parsed) && parsed > max ? parsed : max;
		}, 0) + 1;
		while (taken.has(getItemTitle$1(next))) next += 1;
		return next;
	}, "getNextItemNumber");
	var buildItemModel = (position, showIcon) => {
		const numberedTitle = getItemTitle$1(position);
		return {
			elType: ACCORDION_ITEM_ELEMENT_TYPE,
			id: (0, _elementor_editor_elements.generateElementId)(),
			editor_settings: {
				title: numberedTitle,
				initial_position: position
			},
			elements: [{
				elType: ACCORDION_ITEM_HEADER_ELEMENT_TYPE$1,
				id: (0, _elementor_editor_elements.generateElementId)(),
				editor_settings: { title: (0, _wordpress_i18n.__)("Header", "elementor") },
				settings: { show_icon: _elementor_editor_props.booleanPropTypeUtil.create(showIcon) },
				elements: [{
					elType: ACCORDION_ITEM_TITLE_ELEMENT_TYPE,
					id: (0, _elementor_editor_elements.generateElementId)(),
					editor_settings: { title: (0, _wordpress_i18n.__)("Title", "elementor") },
					elements: [{
						elType: "widget",
						widgetType: PARAGRAPH_WIDGET_TYPE,
						id: (0, _elementor_editor_elements.generateElementId)(),
						elements: [],
						settings: {
							paragraph: _elementor_editor_props.escapedHtmlPropTypeUtil.create(numberedTitle),
							tag: {
								$$type: "string",
								value: "span"
							}
						}
					}]
				}, {
					elType: ACCORDION_ITEM_ICON_ELEMENT_TYPE,
					id: (0, _elementor_editor_elements.generateElementId)(),
					editor_settings: { title: (0, _wordpress_i18n.__)("Icon", "elementor") },
					elements: [],
					hydrateDefaultChildren: true
				}]
			}, {
				elType: ACCORDION_ITEM_CONTENT_ELEMENT_TYPE,
				id: (0, _elementor_editor_elements.generateElementId)(),
				editor_settings: { title: (0, _wordpress_i18n.__)("Content", "elementor") },
				elements: [],
				hydrateDefaultChildren: true
			}]
		};
	};
	var useActions$1 = /* @__PURE__ */ __name(() => {
		const addItem = ({ accordionId, existingTitles, items, showIcon }) => {
			const accordion = (0, _elementor_editor_elements.getContainer)(accordionId);
			if (!accordion) throw new Error("Accordion container not found");
			const titles = [...existingTitles];
			items.forEach(() => {
				const position = getNextItemNumber$1(titles);
				(0, _elementor_editor_elements.createElements)({
					title: (0, _wordpress_i18n.__)("Accordion", "elementor"),
					elements: [{
						container: accordion,
						model: buildItemModel(position, showIcon)
					}]
				});
				titles.push(getItemTitle$1(position));
			});
		};
		const removeItem = ({ items }) => {
			(0, _elementor_editor_elements.removeElements)({
				title: (0, _wordpress_i18n.__)("Accordion", "elementor"),
				elementIds: items.map(({ item }) => item.id)
			});
		};
		const duplicateItem = ({ items }) => {
			(0, _elementor_editor_elements.duplicateElements)({
				title: (0, _wordpress_i18n.__)("Duplicate Accordion Item", "elementor"),
				elementIds: items.map(({ item }) => item.id)
			});
		};
		const moveItem = ({ accordionId, movedElementId, toIndex }) => {
			const accordion = (0, _elementor_editor_elements.getContainer)(accordionId);
			const movedElement = (0, _elementor_editor_elements.getContainer)(movedElementId);
			if (!accordion || !movedElement) throw new Error("Accordion item or container not found");
			(0, _elementor_editor_elements.moveElements)({
				title: (0, _wordpress_i18n.__)("Reorder Accordion Items", "elementor"),
				moves: [{
					element: movedElement,
					targetContainer: accordion,
					options: { at: toIndex }
				}]
			});
		};
		return {
			addItem,
			removeItem,
			duplicateItem,
			moveItem
		};
	}, "useActions");

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/element-controls/accordion-items-control/use-show-icon-write-through.ts
	var ACCORDION_ITEM_HEADER_ELEMENT_TYPE = "e-accordion-item-header";
	var cascadeShowIconToHeaders = (0, _elementor_editor_v1_adapters.undoable)({
		do: ({ accordionId, showIcon }) => {
			const headerIds = getAccordionHeaderIds(accordionId);
			const previous = Object.fromEntries(headerIds.map((headerId) => [headerId, (0, _elementor_editor_elements.getElementSettings)(headerId, ["show_icon"]).show_icon]));
			headerIds.forEach((headerId) => {
				(0, _elementor_editor_elements.updateElementSettings)({
					id: headerId,
					props: { show_icon: _elementor_editor_props.booleanPropTypeUtil.create(showIcon) },
					withHistory: false
				});
			});
			return { previous };
		},
		undo: (_payload, { previous }) => {
			Object.entries(previous).forEach(([headerId, previousValue]) => {
				(0, _elementor_editor_elements.updateElementSettings)({
					id: headerId,
					props: { show_icon: previousValue ?? null },
					withHistory: false
				});
			});
		}
	}, {
		title: (0, _wordpress_i18n.__)("Accordion", "elementor"),
		subtitle: (0, _wordpress_i18n.__)("Show Icon", "elementor"),
		debounce: { wait: 800 }
	});
	function getAccordionHeaderIds(accordionId) {
		return ((0, _elementor_editor_elements.getContainer)(accordionId)?.children ?? []).filter((child) => child.model.get("elType") === ACCORDION_ITEM_ELEMENT_TYPE).map((item) => item.children?.find((child) => child.model.get("elType") === ACCORDION_ITEM_HEADER_ELEMENT_TYPE)).filter((header) => Boolean(header)).map((header) => header.id);
	}
	function useShowIconWriteThrough(accordionId, showIcon) {
		const previousRef = (0, react.useRef)(null);
		(0, react.useEffect)(() => {
			const previous = previousRef.current;
			previousRef.current = {
				accordionId,
				showIcon
			};
			if (!previous || previous.accordionId !== accordionId || previous.showIcon === showIcon) return;
			cascadeShowIconToHeaders({
				accordionId,
				showIcon
			});
		}, [accordionId, showIcon]);
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/element-controls/accordion-items-control/accordion-items-control.tsx
	var AccordionItemsControl = ({ label }) => {
		const { element, settings } = useElement();
		const { addItem, duplicateItem, moveItem, removeItem } = useActions$1();
		const { [ACCORDION_ITEM_ELEMENT_TYPE]: items } = (0, _elementor_editor_elements.useElementChildren)(element.id, { [ACCORDION_ELEMENT_TYPE]: ACCORDION_ITEM_ELEMENT_TYPE }, { includeSelfAsParent: true });
		const showIcon = _elementor_editor_props.booleanPropTypeUtil.extract(settings.show_icon) ?? true;
		useShowIconWriteThrough(element.id, showIcon);
		const repeaterValues = items.map((item, index) => {
			return {
				id: item.id,
				title: item.editorSettings?.title,
				index
			};
		});
		const setValue = (_newValues, _options, meta) => {
			if (meta?.action?.type === "add") return addItem({
				accordionId: element.id,
				existingTitles: repeaterValues.map(({ title }) => title),
				items: meta.action.payload,
				showIcon
			});
			if (meta?.action?.type === "remove") return removeItem({ items: meta.action.payload });
			if (meta?.action?.type === "duplicate") return duplicateItem({ items: meta.action.payload });
			if (meta?.action?.type === "reorder") {
				const { from, to } = meta.action.payload;
				return moveItem({
					accordionId: element.id,
					movedElementId: items[from].id,
					toIndex: to
				});
			}
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.Repeater, {
			showToggle: false,
			values: repeaterValues,
			setValues: setValue,
			showRemove: repeaterValues.length > 1,
			label,
			adornment: () => null,
			itemSettings: {
				getId: ({ item }) => item.id,
				initialValues: {
					id: "",
					title: (0, _wordpress_i18n.__)("Accordion Item", "elementor")
				},
				Label: ItemLabel$2,
				Content: ItemContent$2,
				Icon: () => null
			}
		});
	};
	var ItemLabel$2 = /* @__PURE__ */ __name(({ value }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			sx: { minHeight: 20 },
			direction: "row",
			alignItems: "center",
			gap: 1.5
		}, value.id ? /* @__PURE__ */ react.createElement(AccordionItemRepeaterLabel, {
			elementId: value.id,
			fallbackTitle: value.title
		}) : /* @__PURE__ */ react.createElement("span", null, value?.title));
	}, "ItemLabel");
	var AccordionItemRepeaterLabel = ({ elementId, fallbackTitle }) => {
		const label = (0, _elementor_editor_elements.useElementEditorSettings)(elementId)?.title ?? fallbackTitle ?? "";
		return /* @__PURE__ */ react.createElement("span", null, label);
	};
	var ItemContent$2 = /* @__PURE__ */ __name(({ value }) => {
		if (!value.id) return null;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			p: 2,
			gap: 1.5
		}, /* @__PURE__ */ react.createElement(ItemNameControl, { elementId: value.id }));
	}, "ItemContent");
	var ItemNameControl = ({ elementId }) => {
		const label = (0, _elementor_editor_elements.useElementEditorSettings)(elementId)?.title ?? "";
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { gap: 1 }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, null, (0, _wordpress_i18n.__)("Name", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			size: "tiny",
			value: label,
			onChange: ({ target }) => {
				(0, _elementor_editor_elements.updateElementEditorSettings)({
					elementId,
					settings: { title: target.value }
				});
			}
		}));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/element-controls/list-items-control/list-actions.ts
	var LIST_ITEM_ELEMENT_TYPE = "e-list-item";
	var TRAILING_NUMBER = /(\d+)\s*$/;
	var getItemTitle = (position) => `Item ${position}`;
	var getNextItemNumber = (existingTitles) => {
		const taken = new Set(existingTitles.filter((title) => Boolean(title)));
		let next = existingTitles.reduce((max, title) => {
			const [, trailingNumber] = title?.match(TRAILING_NUMBER) ?? [];
			const parsed = trailingNumber ? Number(trailingNumber) : 0;
			return Number.isFinite(parsed) && parsed > max ? parsed : max;
		}, 0) + 1;
		while (taken.has(getItemTitle(next))) next += 1;
		return next;
	};
	var duplicateItem = ({ items }) => {
		(0, _elementor_editor_elements.duplicateElements)({
			elementIds: items.map(({ item }) => item.id),
			title: (0, _wordpress_i18n.__)("Duplicate List Item", "elementor")
		});
	};
	var moveItem = ({ toIndex, listContainerId, movedElementId }) => {
		const movedElement = (0, _elementor_editor_elements.getContainer)(movedElementId);
		const listContainer = (0, _elementor_editor_elements.getContainer)(listContainerId);
		if (!movedElement || !listContainer) throw new Error("List item or list container not found");
		(0, _elementor_editor_elements.moveElements)({
			title: (0, _wordpress_i18n.__)("Reorder List Items", "elementor"),
			moves: [{
				element: movedElement,
				targetContainer: listContainer,
				options: { at: toIndex }
			}]
		});
	};
	var removeItem = ({ items }) => {
		(0, _elementor_editor_elements.removeElements)({
			title: (0, _wordpress_i18n.__)("List Items", "elementor"),
			elementIds: items.map(({ item }) => item.id)
		});
	};
	var addItem = ({ existingTitles, listContainerId, items, showMarkers }) => {
		const listContainer = (0, _elementor_editor_elements.getContainer)(listContainerId);
		if (!listContainer) throw new Error("List container not found");
		const titles = [...existingTitles];
		items.forEach(({ index }) => {
			const position = getNextItemNumber(titles);
			(0, _elementor_editor_elements.createElements)({
				title: (0, _wordpress_i18n.__)("List Items", "elementor"),
				elements: [{
					container: listContainer,
					model: {
						elType: LIST_ITEM_ELEMENT_TYPE,
						settings: { show_markers: _elementor_editor_props.booleanPropTypeUtil.create(showMarkers) },
						hydrateDefaultChildren: true,
						editor_settings: {
							title: getItemTitle(position),
							initial_position: position
						}
					},
					options: { at: index }
				}]
			});
			titles.push(getItemTitle(position));
		});
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/element-controls/list-items-control/use-show-markers-write-through.ts
	var cascadeShowMarkersToItems = (0, _elementor_editor_v1_adapters.undoable)({
		do: ({ listId, showMarkers }) => {
			const itemIds = getListItemIds(listId);
			const previous = Object.fromEntries(itemIds.map((itemId) => [itemId, (0, _elementor_editor_elements.getElementSettings)(itemId, ["show_markers"]).show_markers]));
			itemIds.forEach((itemId) => {
				(0, _elementor_editor_elements.updateElementSettings)({
					id: itemId,
					props: { show_markers: _elementor_editor_props.booleanPropTypeUtil.create(showMarkers) },
					withHistory: false
				});
			});
			return { previous };
		},
		undo: (_payload, { previous }) => {
			Object.entries(previous).forEach(([itemId, previousValue]) => {
				(0, _elementor_editor_elements.updateElementSettings)({
					id: itemId,
					props: { show_markers: previousValue ?? null },
					withHistory: false
				});
			});
		}
	}, {
		title: (0, _wordpress_i18n.__)("List", "elementor"),
		subtitle: (0, _wordpress_i18n.__)("Show Markers", "elementor"),
		debounce: { wait: 800 }
	});
	function getListItemIds(listId) {
		return ((0, _elementor_editor_elements.getContainer)(listId)?.children ?? []).filter((child) => child.model.get("elType") === LIST_ITEM_ELEMENT_TYPE).map((item) => item.id);
	}
	function useShowMarkersWriteThrough(listId, showMarkers) {
		const previousRef = (0, react.useRef)(null);
		(0, react.useEffect)(() => {
			const previous = previousRef.current;
			previousRef.current = {
				listId,
				showMarkers
			};
			if (!previous || previous.listId !== listId || previous.showMarkers === showMarkers) return;
			cascadeShowMarkersToItems({
				listId,
				showMarkers
			});
		}, [listId, showMarkers]);
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/element-controls/list-items-control/list-items-control.tsx
	var LIST_ELEMENT_TYPE = "e-list";
	var getEffectiveListItemLabel = (label, fallbackLabel) => {
		return label?.trim() ? label : fallbackLabel;
	};
	var getDefaultListItemLabel = (index) => {
		return `Item ${index + 1}`;
	};
	var ListItemsControl = ({ label }) => {
		return /* @__PURE__ */ react.createElement(ListItemsControlContent, { label });
	};
	var ListItemsControlContent = ({ label }) => {
		const { element, settings } = useElement();
		const { [LIST_ITEM_ELEMENT_TYPE]: listItems } = (0, _elementor_editor_elements.useElementChildren)(element.id, { [LIST_ELEMENT_TYPE]: LIST_ITEM_ELEMENT_TYPE }, { includeSelfAsParent: true });
		const showMarkers = _elementor_editor_props.booleanPropTypeUtil.extract(settings.show_markers) ?? true;
		useShowMarkersWriteThrough(element.id, showMarkers);
		const repeaterValues = listItems.map((item, index) => ({
			id: item.id,
			title: item.editorSettings?.title ?? getDefaultListItemLabel(index),
			index
		}));
		const setValue = (_newValues, _options, meta) => {
			if (meta?.action?.type === "add") return addItem({
				existingTitles: repeaterValues.map(({ title }) => title),
				listContainerId: element.id,
				items: meta.action.payload,
				showMarkers
			});
			if (meta?.action?.type === "remove") return removeItem({ items: meta.action.payload });
			if (meta?.action?.type === "duplicate") return duplicateItem({ items: meta.action.payload });
			if (meta?.action?.type === "reorder") {
				const { from, to } = meta.action.payload;
				return moveItem({
					toIndex: to,
					listContainerId: element.id,
					movedElementId: listItems[from].id
				});
			}
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.Repeater, {
			showToggle: false,
			values: repeaterValues,
			setValues: setValue,
			showRemove: repeaterValues.length > 1,
			label,
			adornment: () => null,
			itemSettings: {
				getId: ({ item }) => item.id,
				initialValues: {
					id: "",
					title: "Item"
				},
				Label: ItemLabel$1,
				Content: ItemContent$1,
				Icon: () => null
			}
		});
	};
	var ItemLabel$1 = /* @__PURE__ */ __name(({ value, index }) => {
		const fallbackLabel = value.title ?? getDefaultListItemLabel(index);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			sx: { minHeight: 20 },
			direction: "row",
			alignItems: "center",
			gap: 1.5
		}, value.id ? /* @__PURE__ */ react.createElement(ListItemRepeaterLabel, {
			elementId: value.id,
			fallbackLabel
		}) : /* @__PURE__ */ react.createElement("span", null, fallbackLabel));
	}, "ItemLabel");
	var ItemContent$1 = /* @__PURE__ */ __name(({ value }) => {
		if (!value.id) return null;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			p: 2,
			gap: 1.5
		}, /* @__PURE__ */ react.createElement(ListItemLabelControl, {
			elementId: value.id,
			fallbackLabel: value.title ?? ""
		}));
	}, "ItemContent");
	var ListItemRepeaterLabel = ({ elementId, fallbackLabel }) => {
		const editorSettings = (0, _elementor_editor_elements.useElementEditorSettings)(elementId);
		const label = getEffectiveListItemLabel(editorSettings?.title, fallbackLabel);
		return /* @__PURE__ */ react.createElement("span", null, label);
	};
	var ListItemLabelControl = ({ elementId, fallbackLabel }) => {
		const editorSettings = (0, _elementor_editor_elements.useElementEditorSettings)(elementId);
		const label = getEffectiveListItemLabel(editorSettings?.title, fallbackLabel);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { gap: 1 }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, null, (0, _wordpress_i18n.__)("Item name", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			size: "tiny",
			value: label,
			onChange: ({ target }) => {
				(0, _elementor_editor_elements.updateElementEditorSettings)({
					elementId,
					settings: { title: target.value }
				});
			}
		}));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/element-controls/get-element-by-type.ts
	var getElementByType = (elementId, type) => {
		const currentElement = (0, _elementor_editor_elements.getContainer)(elementId);
		if (!currentElement) return null;
		if (currentElement.model.get("elType") === type) return currentElement;
		return currentElement.children?.findRecursive?.((child) => child.model.get("elType") === type) ?? null;
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/element-controls/tabs-control/use-actions.ts
	var TAB_ELEMENT_TYPE = "e-tab";
	var TAB_CONTENT_ELEMENT_TYPE = "e-tab-content";
	var useActions = () => {
		const { value, setValue: setDefaultActiveTab } = (0, _elementor_editor_controls.useBoundProp)(_elementor_editor_props.numberPropTypeUtil);
		const defaultActiveTab = value ?? 0;
		const duplicateItem = ({ items, tabContentAreaId }) => {
			const newDefault = calculateDefaultOnDuplicate({
				items,
				defaultActiveTab
			});
			items.forEach(({ item, index }) => {
				const tabId = item.id;
				const tabContentId = (0, _elementor_editor_elements.getContainer)(tabContentAreaId)?.children?.[index]?.id;
				if (!tabContentId) throw new Error("Original content ID is required for duplication");
				(0, _elementor_editor_elements.duplicateElements)({
					elementIds: [tabId, tabContentId],
					title: (0, _wordpress_i18n.__)("Duplicate Tab", "elementor"),
					onDuplicateElements: () => {
						if (newDefault !== defaultActiveTab) setDefaultActiveTab(newDefault, {}, { withHistory: false });
					},
					onRestoreElements: () => {
						if (newDefault !== defaultActiveTab) setDefaultActiveTab(defaultActiveTab, {}, { withHistory: false });
					}
				});
			});
		};
		const moveItem = ({ toIndex, tabsMenuId, tabContentAreaId, movedElementId, movedElementIndex }) => {
			const tabContentContainer = (0, _elementor_editor_elements.getContainer)(tabContentAreaId);
			const tabContent = tabContentContainer?.children?.[movedElementIndex];
			const movedElement = (0, _elementor_editor_elements.getContainer)(movedElementId);
			const tabsMenu = (0, _elementor_editor_elements.getContainer)(tabsMenuId);
			if (!tabContent) throw new Error("Content element is required");
			if (!movedElement || !tabsMenu) throw new Error("Tab element or menu not found");
			const newDefault = calculateDefaultOnMove({
				from: movedElementIndex,
				to: toIndex,
				defaultActiveTab
			});
			(0, _elementor_editor_elements.moveElements)({
				title: (0, _wordpress_i18n.__)("Reorder Tabs", "elementor"),
				moves: [{
					element: movedElement,
					targetContainer: tabsMenu,
					options: { at: toIndex }
				}, {
					element: tabContent,
					targetContainer: tabContentContainer,
					options: { at: toIndex }
				}],
				onMoveElements: () => {
					if (newDefault !== defaultActiveTab) setDefaultActiveTab(newDefault, {}, { withHistory: false });
				},
				onRestoreElements: () => {
					if (newDefault !== defaultActiveTab) setDefaultActiveTab(defaultActiveTab, {}, { withHistory: false });
				}
			});
		};
		const removeItem = ({ items, tabContentAreaId }) => {
			const newDefault = calculateDefaultOnRemove({
				items,
				defaultActiveTab
			});
			(0, _elementor_editor_elements.removeElements)({
				title: (0, _wordpress_i18n.__)("Tabs", "elementor"),
				elementIds: items.flatMap(({ item, index }) => {
					const tabId = item.id;
					const tabContentId = (0, _elementor_editor_elements.getContainer)(tabContentAreaId)?.children?.[index]?.id;
					if (!tabContentId) throw new Error("Content ID is required");
					return [tabId, tabContentId];
				}),
				onRemoveElements: () => {
					if (newDefault !== defaultActiveTab) setDefaultActiveTab(newDefault, {}, { withHistory: false });
				},
				onRestoreElements: () => {
					if (newDefault !== defaultActiveTab) setDefaultActiveTab(defaultActiveTab, {}, { withHistory: false });
				}
			});
		};
		const addItem = ({ tabContentAreaId, tabsMenuId, items }) => {
			const tabContentArea = (0, _elementor_editor_elements.getContainer)(tabContentAreaId);
			const tabsMenu = (0, _elementor_editor_elements.getContainer)(tabsMenuId);
			if (!tabContentArea || !tabsMenu) throw new Error("Tab containers not found");
			items.forEach(({ index }) => {
				const position = index + 1;
				(0, _elementor_editor_elements.createElements)({
					title: (0, _wordpress_i18n.__)("Tabs", "elementor"),
					elements: [{
						container: tabContentArea,
						model: {
							elType: TAB_CONTENT_ELEMENT_TYPE,
							editor_settings: {
								title: `Tab ${position} content`,
								initial_position: position
							}
						}
					}, {
						container: tabsMenu,
						model: {
							elType: TAB_ELEMENT_TYPE,
							editor_settings: {
								title: `Tab ${position} trigger`,
								initial_position: position
							}
						}
					}]
				});
			});
		};
		return {
			duplicateItem,
			moveItem,
			removeItem,
			addItem
		};
	};
	var calculateDefaultOnMove = ({ from, to, defaultActiveTab }) => {
		if (from === defaultActiveTab) return to;
		if (from < defaultActiveTab && to >= defaultActiveTab) return defaultActiveTab - 1;
		if (from > defaultActiveTab && to <= defaultActiveTab) return defaultActiveTab + 1;
		return defaultActiveTab;
	};
	var calculateDefaultOnRemove = ({ items, defaultActiveTab }) => {
		if (items.some(({ index }) => index === defaultActiveTab)) return 0;
		return defaultActiveTab - items.reduce((acc, { index }) => index < defaultActiveTab ? acc + 1 : acc, 0);
	};
	var calculateDefaultOnDuplicate = ({ items, defaultActiveTab }) => {
		return defaultActiveTab + items.reduce((acc, { index }) => {
			return index < defaultActiveTab ? acc + 1 : acc;
		}, 0);
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/element-controls/tabs-control/tabs-control.tsx
	var TAB_MENU_ELEMENT_TYPE = "e-tabs-menu";
	var TAB_CONTENT_AREA_ELEMENT_TYPE = "e-tabs-content-area";
	var TabsControl = ({ label }) => {
		return /* @__PURE__ */ react.createElement(SettingsField, {
			bind: "default-active-tab",
			propDisplayName: (0, _wordpress_i18n.__)("Tabs", "elementor")
		}, /* @__PURE__ */ react.createElement(TabsControlContent, { label }));
	};
	var TabsControlContent = ({ label }) => {
		const { element } = useElement();
		const { addItem, duplicateItem, moveItem, removeItem } = useActions();
		const { [TAB_ELEMENT_TYPE]: tabLinks } = (0, _elementor_editor_elements.useElementChildren)(element.id, { [TAB_MENU_ELEMENT_TYPE]: TAB_ELEMENT_TYPE });
		const tabList = getElementByType(element.id, TAB_MENU_ELEMENT_TYPE);
		const tabContentArea = getElementByType(element.id, TAB_CONTENT_AREA_ELEMENT_TYPE);
		const repeaterValues = tabLinks.map((tabLink, index) => {
			return {
				id: tabLink.id,
				title: tabLink.editorSettings?.title,
				index
			};
		});
		const setValue = (_newValues, _options, meta) => {
			if (meta?.action?.type === "add") {
				const items = meta.action.payload;
				return addItem({
					tabContentAreaId: tabContentArea.id,
					items,
					tabsMenuId: tabList.id
				});
			}
			if (meta?.action?.type === "remove") {
				const items = meta.action.payload;
				return removeItem({
					items,
					tabContentAreaId: tabContentArea.id
				});
			}
			if (meta?.action?.type === "duplicate") {
				const items = meta.action.payload;
				return duplicateItem({
					items,
					tabContentAreaId: tabContentArea.id
				});
			}
			if (meta?.action?.type === "reorder") {
				const { from, to } = meta.action.payload;
				return moveItem({
					toIndex: to,
					tabsMenuId: tabList.id,
					tabContentAreaId: tabContentArea.id,
					movedElementId: tabLinks[from].id,
					movedElementIndex: from
				});
			}
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.Repeater, {
			showToggle: false,
			values: repeaterValues,
			setValues: setValue,
			showRemove: repeaterValues.length > 1,
			label,
			itemSettings: {
				getId: ({ item }) => item.id,
				initialValues: {
					id: "",
					title: "Tab"
				},
				Label: ItemLabel,
				Content: ItemContent,
				Icon: () => null
			}
		});
	};
	var ItemLabel = ({ value, index }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			sx: { minHeight: 20 },
			direction: "row",
			alignItems: "center",
			gap: 1.5
		}, value.id ? /* @__PURE__ */ react.createElement(TabRepeaterLabel, {
			elementId: value.id,
			fallbackTitle: value.title
		}) : /* @__PURE__ */ react.createElement("span", null, value?.title), /* @__PURE__ */ react.createElement(ItemDefaultTab, { index }));
	};
	var TabRepeaterLabel = ({ elementId, fallbackTitle }) => {
		const label = (0, _elementor_editor_elements.useElementEditorSettings)(elementId)?.title ?? fallbackTitle ?? "";
		return /* @__PURE__ */ react.createElement("span", null, label);
	};
	var ItemDefaultTab = ({ index }) => {
		const { value: defaultItem } = (0, _elementor_editor_controls.useBoundProp)(_elementor_editor_props.numberPropTypeUtil);
		if (!(defaultItem === index)) return null;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			size: "tiny",
			shape: "rounded",
			label: (0, _wordpress_i18n.__)("Default", "elementor")
		});
	};
	var ItemContent = ({ value, index }) => {
		if (!value.id) return null;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			p: 2,
			gap: 1.5
		}, /* @__PURE__ */ react.createElement(TabLabelControl, { elementId: value.id }), /* @__PURE__ */ react.createElement(SettingsField, {
			bind: "default-active-tab",
			propDisplayName: (0, _wordpress_i18n.__)("Tabs", "elementor")
		}, /* @__PURE__ */ react.createElement(DefaultTabControl, { tabIndex: index })));
	};
	var DefaultTabControl = ({ tabIndex }) => {
		const { value, setValue } = (0, _elementor_editor_controls.useBoundProp)(_elementor_editor_props.numberPropTypeUtil);
		const isDefault = value === tabIndex;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			justifyContent: "space-between",
			gap: 2
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, null, (0, _wordpress_i18n.__)("Set as default tab", "elementor")), /* @__PURE__ */ react.createElement(ConditionalTooltip, {
			showTooltip: isDefault,
			placement: "right"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Switch, {
			size: "small",
			checked: isDefault,
			disabled: isDefault,
			onChange: ({ target }) => {
				setValue(target.checked ? tabIndex : null);
			},
			inputProps: { ...isDefault ? { style: {
				opacity: 0,
				cursor: "not-allowed"
			} } : {} }
		})));
	};
	var TabLabelControl = ({ elementId }) => {
		const label = (0, _elementor_editor_elements.useElementEditorSettings)(elementId)?.title ?? "";
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { gap: 1 }, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, null, (0, _wordpress_i18n.__)("Tab name", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			size: "tiny",
			value: label,
			onChange: ({ target }) => {
				(0, _elementor_editor_elements.updateElementEditorSettings)({
					elementId,
					settings: { title: target.value }
				});
			}
		}));
	};
	var ConditionalTooltip = ({ showTooltip, children }) => {
		if (!showTooltip) return children;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Infotip, {
			arrow: false,
			content: /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
				color: "secondary",
				icon: /* @__PURE__ */ react.createElement(_elementor_icons.InfoCircleFilledIcon, { fontSize: "tiny" }),
				size: "small",
				sx: { width: 288 }
			}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "body2" }, (0, _wordpress_i18n.__)("To change the default tab, simply set another tab as default.", "elementor")))
		}, /* @__PURE__ */ react.createElement("span", null, children));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/controls-registry/element-controls/registry.ts
	var controlTypes = {
		"list-items": {
			component: ListItemsControl,
			layout: "full"
		},
		tabs: {
			component: TabsControl,
			layout: "full"
		},
		"accordion-items": {
			component: AccordionItemsControl,
			layout: "full"
		}
	};
	var registerElementControls = () => {
		Object.entries(controlTypes).forEach(([type, { component, layout }]) => {
			controlsRegistry.register(type, component, layout);
		});
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/hooks/use-license-config.ts
	var config = { expired: false };
	var listeners = /* @__PURE__ */ new Set();
	function setLicenseConfig(newConfig) {
		config = {
			...config,
			...newConfig
		};
		listeners.forEach((listener) => listener());
	}
	function getLicenseConfig() {
		return config;
	}
	function subscribe(listener) {
		listeners.add(listener);
		return () => listeners.delete(listener);
	}
	function useLicenseConfig() {
		return (0, react.useSyncExternalStore)(subscribe, getLicenseConfig, getLicenseConfig);
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/dynamics/sync/get-atomic-dynamic-tags.ts
	var getAtomicDynamicTags = (shouldFilterByLicense = true) => {
		const { atomicDynamicTags } = (0, _elementor_editor_v1_adapters.getElementorConfig)();
		if (!atomicDynamicTags) return null;
		return {
			tags: shouldFilterByLicense ? filterByLicense(atomicDynamicTags.tags) : atomicDynamicTags.tags,
			groups: atomicDynamicTags.groups
		};
	};
	var filterByLicense = (tags) => {
		const { expired } = getLicenseConfig();
		if (expired) return Object.fromEntries(Object.entries(tags).filter(([, tag]) => !(tag?.meta?.origin === "elementor" && tag?.meta?.required_license)));
		return tags;
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/dynamics/utils.ts
	var DYNAMIC_PROP_TYPE_KEY = "dynamic";
	var dynamicPropTypeUtil = (0, _elementor_editor_props.createPropUtils)(DYNAMIC_PROP_TYPE_KEY, _elementor_schema.z.strictObject({
		name: _elementor_schema.z.string(),
		group: _elementor_schema.z.string(),
		settings: _elementor_schema.z.any().optional()
	}));
	var isDynamicTagSupported = (tagName) => {
		return !!(0, _elementor_editor_v1_adapters.getElementorConfig)()?.atomicDynamicTags?.tags?.[tagName];
	};
	var isDynamicPropType = (prop) => prop.key === DYNAMIC_PROP_TYPE_KEY;
	var getDynamicPropType = (propType) => {
		const dynamicPropType = propType.kind === "union" && propType.prop_types[DYNAMIC_PROP_TYPE_KEY];
		return dynamicPropType && isDynamicPropType(dynamicPropType) ? dynamicPropType : null;
	};
	var isDynamicPropValue = (prop) => {
		return (0, _elementor_editor_props.isTransformable)(prop) && prop.$$type === DYNAMIC_PROP_TYPE_KEY;
	};
	var supportsDynamic = (propType) => {
		return !!getDynamicPropType(propType);
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/dynamics/hooks/use-prop-dynamic-tags.ts
	var usePropDynamicTags = () => {
		return usePropDynamicTagsInternal(true);
	};
	var useAllPropDynamicTags = () => {
		return usePropDynamicTagsInternal(false);
	};
	var usePropDynamicTagsInternal = (filterByLicense) => {
		let categories = [];
		const { propType } = (0, _elementor_editor_controls.useBoundProp)();
		if (propType) categories = getDynamicPropType(propType)?.settings.categories || [];
		return (0, react.useMemo)(() => getDynamicTagsByCategories(categories, filterByLicense), [categories.join(), filterByLicense]);
	};
	var getDynamicTagsByCategories = (categories, filterByLicense) => {
		const { tags, groups } = getAtomicDynamicTags(filterByLicense) || {};
		if (!categories.length || !tags || !groups) return [];
		const _categories = new Set(categories);
		const dynamicTags = [];
		const groupedFilteredTags = {};
		for (const tag of Object.values(tags)) {
			if (!tag.categories.some((category) => _categories.has(category))) continue;
			if (!groupedFilteredTags[tag.group]) groupedFilteredTags[tag.group] = [];
			groupedFilteredTags[tag.group].push(tag);
		}
		for (const group in groups) if (groupedFilteredTags[group]) dynamicTags.push(...groupedFilteredTags[group]);
		return dynamicTags;
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/dynamics/hooks/use-dynamic-tag.ts
	var useDynamicTag = (tagName) => {
		const dynamicTags = useAllPropDynamicTags();
		return (0, react.useMemo)(() => dynamicTags.find((tag) => tag.name === tagName) ?? null, [dynamicTags, tagName]);
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/dynamics/components/background-control-dynamic-tag.tsx
	var BackgroundControlDynamicTagIcon = () => /* @__PURE__ */ react.createElement(_elementor_icons.DatabaseIcon, { fontSize: "tiny" });
	var BackgroundControlDynamicTagLabel = ({ value }) => {
		const context = (0, _elementor_editor_controls.useBoundProp)(_elementor_editor_props.backgroundImageOverlayPropTypeUtil);
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropProvider, {
			...context,
			value: value.value
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropKeyProvider, { bind: "image" }, /* @__PURE__ */ react.createElement(Wrapper, { rawValue: value.value })));
	};
	var Wrapper = ({ rawValue }) => {
		const { propType } = (0, _elementor_editor_controls.useBoundProp)();
		const imageOverlayPropType = propType.prop_types["background-image-overlay"];
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropProvider, {
			propType: imageOverlayPropType.shape.image,
			value: rawValue,
			setValue: () => void 0
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropKeyProvider, { bind: "src" }, /* @__PURE__ */ react.createElement(Content, { rawValue: rawValue.image })));
	};
	var Content = ({ rawValue }) => {
		const src = rawValue.value.src;
		const dynamicTag = useDynamicTag(src.value.name || "");
		return /* @__PURE__ */ react.createElement(react.Fragment, null, dynamicTag?.label);
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/hooks/use-persist-dynamic-value.ts
	var usePersistDynamicValue = (propKey) => {
		const { element } = useElement();
		return (0, _elementor_session.useSessionStorage)(`dynamic/non-dynamic-values-history/${element.id}/${propKey}`);
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/dynamics/components/dynamic-conditional-control.tsx
	var DynamicConditionalControl = ({ children, propType, propsSchema, dynamicSettings }) => {
		const defaults = (0, react.useMemo)(() => {
			if (!propsSchema) return {};
			return Object.entries(propsSchema).reduce((result, [key, prop]) => {
				result[key] = prop?.default ?? null;
				return result;
			}, {});
		}, [propsSchema]);
		const convertedSettings = (0, react.useMemo)(() => {
			if (!dynamicSettings) return {};
			return Object.entries(dynamicSettings).reduce((result, [key, dynamicValue]) => {
				if (dynamicValue && typeof dynamicValue === "object" && "$$type" in dynamicValue) result[key] = dynamicValue;
				else result[key] = {
					$$type: "plain",
					value: dynamicValue
				};
				return result;
			}, {});
		}, [dynamicSettings]);
		const effectiveSettings = (0, react.useMemo)(() => {
			return {
				...defaults,
				...convertedSettings
			};
		}, [defaults, convertedSettings]);
		if (!propType?.dependencies?.terms.length) return /* @__PURE__ */ react.createElement(react.Fragment, null, children);
		return !(0, _elementor_editor_props.isDependencyMet)(propType?.dependencies, effectiveSettings).isMet ? null : /* @__PURE__ */ react.createElement(react.Fragment, null, children);
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/dynamics/dynamic-control.tsx
	var DynamicControl = ({ bind, children }) => {
		const { value, setValue } = (0, _elementor_editor_controls.useBoundProp)(dynamicPropTypeUtil);
		const { name = "", group = "", settings } = value ?? {};
		const dynamicTag = useDynamicTag(name);
		if (!dynamicTag) throw new Error(`Dynamic tag ${name} not found`);
		const dynamicPropType = dynamicTag.props_schema[bind];
		const defaultValue = dynamicPropType?.default;
		const dynamicValue = settings?.[bind] ?? defaultValue;
		const setDynamicValue = (newValues) => {
			setValue({
				name,
				group,
				settings: {
					...settings,
					...newValues
				}
			});
		};
		const propType = createTopLevelObjectType({ schema: dynamicTag.props_schema });
		return /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropProvider, {
			propType,
			setValue: setDynamicValue,
			value: { [bind]: dynamicValue }
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropKeyProvider, { bind }, /* @__PURE__ */ react.createElement(DynamicConditionalControl, {
			propType: dynamicPropType,
			propsSchema: dynamicTag.props_schema,
			dynamicSettings: settings
		}, children)));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/dynamics/components/dynamic-selection.tsx
	var SIZE$3 = "tiny";
	var PROMO_TEXT_WIDTH = 170;
	var PRO_DYNAMIC_TAGS_URL = "https://go.elementor.com/go-pro-dynamic-tags-modal/";
	var RENEW_DYNAMIC_TAGS_URL = "https://go.elementor.com/go-pro-dynamic-tags-renew-modal/";
	var DynamicSelection = ({ close: closePopover, expired = false }) => {
		const [searchValue, setSearchValue] = (0, react.useState)("");
		const { groups: dynamicGroups } = getAtomicDynamicTags() || {};
		const theme = (0, _elementor_ui.useTheme)();
		const { value: anyValue } = (0, _elementor_editor_controls.useBoundProp)();
		const { bind, value: dynamicValue, setValue } = (0, _elementor_editor_controls.useBoundProp)(dynamicPropTypeUtil);
		const [, updatePropValueHistory] = usePersistDynamicValue(bind);
		const isCurrentValueDynamic = !!dynamicValue;
		const options = useFilteredOptions(searchValue);
		const hasNoDynamicTags = !options.length && !searchValue.trim();
		(0, react.useEffect)(() => {
			if (hasNoDynamicTags) (0, _elementor_editor_controls.trackViewPromotion)({ target_name: "dynamic_tags" });
			else if (expired) (0, _elementor_editor_controls.trackViewPromotion)({ target_name: "dynamic_tags" });
		}, [hasNoDynamicTags, expired]);
		const handleSearch = (value) => {
			setSearchValue(value);
		};
		const handleSetDynamicTag = (value) => {
			if (!isCurrentValueDynamic) updatePropValueHistory(anyValue);
			const selectedOption = options.flatMap(([, items]) => items).find((item) => item.value === value);
			setValue({
				name: value,
				group: selectedOption?.group ?? "",
				settings: { label: selectedOption?.label }
			});
			closePopover();
		};
		const virtualizedItems = options.flatMap(([category, items]) => [{
			type: "category",
			value: category,
			label: dynamicGroups?.[category]?.title || category
		}, ...items.map((item) => ({
			type: "item",
			value: item.value,
			label: item.label
		}))]);
		const getPopOverContent = () => {
			if (hasNoDynamicTags) return /* @__PURE__ */ react.createElement(NoDynamicTags, null);
			if (expired) return /* @__PURE__ */ react.createElement(ExpiredDynamicTags, null);
			return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.SearchField, {
				value: searchValue,
				onSearch: handleSearch,
				placeholder: (0, _wordpress_i18n.__)("Search dynamic tags…", "elementor")
			}), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverMenuList, {
				items: virtualizedItems,
				onSelect: handleSetDynamicTag,
				onClose: closePopover,
				selectedValue: dynamicValue?.name,
				itemStyle: (item) => item.type === "item" ? { paddingInlineStart: theme.spacing(3.5) } : {},
				noResultsComponent: /* @__PURE__ */ react.createElement(NoResults, {
					searchValue,
					onClear: () => setSearchValue("")
				})
			}));
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.SectionPopoverBody, { "aria-label": (0, _wordpress_i18n.__)("Dynamic tags", "elementor") }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverHeader, {
			title: (0, _wordpress_i18n.__)("Dynamic tags", "elementor"),
			onClose: closePopover,
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.DatabaseIcon, { fontSize: SIZE$3 })
		}), getPopOverContent());
	};
	var NoResults = ({ searchValue, onClear }) => /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
		gap: 1,
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
		p: 2.5,
		color: "text.secondary",
		sx: { pb: 3.5 }
	}, /* @__PURE__ */ react.createElement(_elementor_icons.DatabaseIcon, { fontSize: "large" }), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
		align: "center",
		variant: "subtitle2"
	}, (0, _wordpress_i18n.__)("Sorry, nothing matched", "elementor"), /* @__PURE__ */ react.createElement("br", null), "“", searchValue, "”."), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
		align: "center",
		variant: "caption",
		sx: {
			display: "flex",
			flexDirection: "column"
		}
	}, (0, _wordpress_i18n.__)("Try something else.", "elementor"), /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
		color: "text.secondary",
		variant: "caption",
		component: "button",
		onClick: onClear
	}, (0, _wordpress_i18n.__)("Clear & try again", "elementor"))));
	var NoDynamicTags = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
		gap: 1,
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
		p: 2.5,
		color: "text.secondary",
		sx: { pb: 3.5 }
	}, /* @__PURE__ */ react.createElement(_elementor_icons.DatabaseIcon, { fontSize: "large" }), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
		align: "center",
		variant: "subtitle2"
	}, (0, _wordpress_i18n.__)("Streamline your workflow with dynamic tags", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
		align: "center",
		variant: "caption",
		width: PROMO_TEXT_WIDTH
	}, (0, _wordpress_i18n.__)("Upgrade now to display your content dynamically.", "elementor")), /* @__PURE__ */ react.createElement(_elementor_editor_ui.CtaButton, {
		size: "small",
		href: PRO_DYNAMIC_TAGS_URL,
		onClick: () => (0, _elementor_editor_controls.trackUpgradePromotionClick)({ target_name: "dynamic_tags" })
	})));
	var ExpiredDynamicTags = () => /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
		gap: 1,
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
		p: 2.5,
		color: "text.secondary",
		sx: { pb: 3.5 }
	}, /* @__PURE__ */ react.createElement(_elementor_icons.DatabaseIcon, { fontSize: "large" }), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
		align: "center",
		variant: "subtitle2"
	}, (0, _wordpress_i18n.__)("Unlock your Dynamic tags again", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
		align: "center",
		variant: "caption",
		width: PROMO_TEXT_WIDTH
	}, (0, _wordpress_i18n.__)("Dynamic tags need Elementor Pro. Renew now to keep them active.", "elementor")), /* @__PURE__ */ react.createElement(_elementor_editor_ui.CtaButton, {
		size: "small",
		href: RENEW_DYNAMIC_TAGS_URL,
		onClick: () => (0, _elementor_editor_controls.trackUpgradePromotionClick)({ target_name: "dynamic_tags" }),
		children: (0, _wordpress_i18n.__)("Renew Now", "elementor")
	})));
	var useFilteredOptions = (searchValue) => {
		return [...usePropDynamicTags().reduce((categories, { name, label, group }) => {
			if (!label.toLowerCase().includes(searchValue.trim().toLowerCase())) return categories;
			if (!categories.has(group)) categories.set(group, []);
			categories.get(group)?.push({
				label,
				group,
				value: name
			});
			return categories;
		}, /* @__PURE__ */ new Map())];
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/dynamics/components/dynamic-selection-control.tsx
	var SIZE$2 = "tiny";
	var tagsWithoutTabs = ["popup"];
	var DynamicSelectionControl = ({ OriginalControl, ...props }) => {
		const { setValue: setAnyValue, propType } = (0, _elementor_editor_controls.useBoundProp)();
		const { bind, value } = (0, _elementor_editor_controls.useBoundProp)(dynamicPropTypeUtil);
		const { expired: readonly } = useLicenseConfig();
		const originalPropType = createTopLevelObjectType({ schema: { [bind]: propType } });
		const [propValueFromHistory] = usePersistDynamicValue(bind);
		const selectionPopoverState = (0, _elementor_ui.usePopupState)({ variant: "popover" });
		const { name: tagName = "" } = value;
		const dynamicTag = useDynamicTag(tagName);
		if (!isDynamicTagSupported(tagName) && OriginalControl) return /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropProvider, {
			propType: originalPropType,
			value: { [bind]: null },
			setValue: setAnyValue
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.PropKeyProvider, { bind }, /* @__PURE__ */ react.createElement(OriginalControl, { ...props })));
		const removeDynamicTag = () => {
			setAnyValue(propValueFromHistory ?? null);
		};
		if (!dynamicTag) throw new Error(`Dynamic tag ${tagName} not found`);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, null, /* @__PURE__ */ react.createElement(_elementor_ui.UnstableTag, {
			fullWidth: true,
			showActionsOnHover: true,
			label: dynamicTag.label,
			startIcon: /* @__PURE__ */ react.createElement(_elementor_icons.DatabaseIcon, { fontSize: SIZE$2 }),
			...(0, _elementor_ui.bindTrigger)(selectionPopoverState),
			actions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(DynamicSettingsPopover, {
				dynamicTag,
				disabled: readonly
			}), /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
				size: SIZE$2,
				onClick: removeDynamicTag,
				"aria-label": (0, _wordpress_i18n.__)("Remove dynamic value", "elementor")
			}, /* @__PURE__ */ react.createElement(_elementor_icons.XIcon, { fontSize: SIZE$2 })))
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Popover, {
			disablePortal: true,
			disableScrollLock: true,
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "right"
			},
			PaperProps: { sx: { my: 1 } },
			...(0, _elementor_ui.bindPopover)(selectionPopoverState)
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.SectionPopoverBody, { "aria-label": (0, _wordpress_i18n.__)("Dynamic tags", "elementor") }, /* @__PURE__ */ react.createElement(DynamicSelection, {
			close: selectionPopoverState.close,
			expired: readonly
		}))));
	};
	var DynamicSettingsPopover = ({ dynamicTag, disabled = false }) => {
		const popupState = (0, _elementor_ui.usePopupState)({ variant: "popover" });
		if (!!!dynamicTag.atomic_controls.length) return null;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: SIZE$2,
			disabled,
			...!disabled && (0, _elementor_ui.bindTrigger)(popupState),
			"aria-label": (0, _wordpress_i18n.__)("Dynamic settings", "elementor")
		}, /* @__PURE__ */ react.createElement(_elementor_icons.SettingsIcon, { fontSize: SIZE$2 })), /* @__PURE__ */ react.createElement(_elementor_ui.Popover, {
			disablePortal: true,
			disableScrollLock: true,
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "right"
			},
			PaperProps: { sx: { my: 1 } },
			...(0, _elementor_ui.bindPopover)(popupState)
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.SectionPopoverBody, { "aria-label": (0, _wordpress_i18n.__)("Dynamic settings", "elementor") }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverHeader, {
			title: dynamicTag.label,
			onClose: popupState.close,
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.DatabaseIcon, { fontSize: SIZE$2 })
		}), /* @__PURE__ */ react.createElement(DynamicSettings, {
			controls: dynamicTag.atomic_controls,
			tagName: dynamicTag.name
		}))));
	};
	var DynamicSettings = ({ controls, tagName }) => {
		const tabs = controls.filter(({ type }) => type === "section");
		const { getTabsProps, getTabProps, getTabPanelProps } = (0, _elementor_ui.useTabs)(0);
		if (!tabs.length) return null;
		if (tagsWithoutTabs.includes(tagName)) {
			const singleTab = tabs[0];
			return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(ControlsItemsStack, { items: singleTab.value.items }));
		}
		return /* @__PURE__ */ react.createElement(react.Fragment, null, tabs.length > 1 && /* @__PURE__ */ react.createElement(_elementor_ui.Tabs, {
			size: "small",
			variant: "fullWidth",
			...getTabsProps()
		}, tabs.map(({ value }, index) => /* @__PURE__ */ react.createElement(_elementor_ui.Tab, {
			key: index,
			label: value.label,
			sx: {
				px: 1,
				py: .5
			},
			...getTabProps(index)
		}))), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), tabs.map(({ value }, index) => {
			return /* @__PURE__ */ react.createElement(_elementor_ui.TabPanel, {
				key: index,
				sx: {
					flexGrow: 1,
					py: 0,
					overflowY: "auto"
				},
				...getTabPanelProps(index)
			}, /* @__PURE__ */ react.createElement(ControlsItemsStack, { items: value.items }));
		}));
	};
	var LAYOUT_OVERRIDE_FIELDS = {
		separator: "two-columns",
		action: "full",
		off_canvas: "full",
		type: "two-columns"
	};
	var DYNAMIC_TAG_LAYOUT_OVERRIDES = { select: "full" };
	var getLayout = (control) => {
		const dynamicOverride = DYNAMIC_TAG_LAYOUT_OVERRIDES[control.type];
		if (dynamicOverride) return dynamicOverride;
		return LAYOUT_OVERRIDE_FIELDS[control.bind] ?? controlsRegistry.getLayout(control.type);
	};
	var Control = ({ control }) => {
		if (!controlsRegistry.get(control.type)) return null;
		const layout = getLayout(control);
		const controlProps = {
			...control.type === "select" ? {
				...control.props,
				MenuProps: {
					...control.props?.MenuProps ?? {},
					disablePortal: true
				}
			} : { ...control.props },
			ariaLabel: control.label
		};
		const isSwitchControl = control.type === "switch";
		const layoutStyleProps = layout === "two-columns" ? {
			display: "grid",
			gridTemplateColumns: isSwitchControl ? "minmax(0, 1fr) max-content" : "1fr 1fr"
		} : {};
		return /* @__PURE__ */ react.createElement(DynamicControl, { bind: control.bind }, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			gap: .75,
			sx: layoutStyleProps
		}, control.label ? /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 12
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ControlFormLabel, null, control.label)) : null, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 12
		}, /* @__PURE__ */ react.createElement(Control$1, {
			type: control.type,
			props: controlProps
		}))));
	};
	function ControlsItemsStack({ items }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			p: 2,
			gap: 2,
			sx: { overflowY: "auto" }
		}, items.map((item) => item.type === "control" ? /* @__PURE__ */ react.createElement(Control, {
			key: item.value.bind,
			control: item.value
		}) : null));
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/dynamics/errors.ts
	var DynamicTagsManagerNotFoundError = (0, _elementor_utils.createError)({
		code: "dynamic_tags_manager_not_found",
		message: "Dynamic tags manager not found"
	});

//#endregion
//#region packages/packages/core/editor-editing-panel/src/dynamics/dynamic-transformer.ts
	var dynamicTransformer = (0, _elementor_editor_canvas.createTransformer)((value, { propType, renderContext }) => {
		if (!value?.name || !isDynamicTagSupported(value.name)) return propType?.default ?? null;
		const renderPostId = renderContext?.currentPostId;
		return getDynamicValue(value.name, simpleTransform(value?.settings ?? {}), renderPostId);
	});
	function simpleTransform(props) {
		const transformed = Object.entries(props).map(([settingKey, settingValue]) => {
			return [settingKey, (0, _elementor_editor_props.isTransformable)(settingValue) ? settingValue.value : settingValue];
		});
		return Object.fromEntries(transformed);
	}
	function getDynamicValue(name, settings, renderPostId) {
		const { dynamicTags } = window.elementor ?? {};
		if (!dynamicTags) throw new DynamicTagsManagerNotFoundError();
		const getTagValue = () => {
			const tag = dynamicTags.createTag("v4-dynamic-tag", name, settings);
			if (!tag) return null;
			if (renderPostId) tag.editorRenderPostId = renderPostId;
			return dynamicTags.loadTagDataFromCache(tag) ?? null;
		};
		const tagValue = getTagValue();
		if (tagValue !== null) return tagValue;
		return new Promise((resolve) => {
			dynamicTags.refreshCacheFromServer(() => {
				resolve(getTagValue());
			});
		});
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/dynamics/hooks/use-prop-dynamic-action.tsx
	var usePropDynamicAction = () => {
		const { propType } = (0, _elementor_editor_controls.useBoundProp)();
		return {
			visible: !!propType && supportsDynamic(propType),
			icon: _elementor_icons.DatabaseIcon,
			title: (0, _wordpress_i18n.__)("Dynamic tags", "elementor"),
			content: ({ close }) => /* @__PURE__ */ react.createElement(DynamicSelection, { close })
		};
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/dynamics/init.ts
	var { registerPopoverAction } = _elementor_menus.controlActionsMenu;
	var init$2 = /* @__PURE__ */ __name(() => {
		(0, _elementor_editor_controls.registerControlReplacement)({
			component: DynamicSelectionControl,
			condition: ({ value }) => isDynamicPropValue(value)
		});
		(0, _elementor_editor_controls.injectIntoRepeaterItemLabel)({
			id: "dynamic-background-image",
			condition: ({ value }) => isDynamicPropValue(value.value?.image?.value?.src),
			component: BackgroundControlDynamicTagLabel
		});
		(0, _elementor_editor_controls.injectIntoRepeaterItemIcon)({
			id: "dynamic-background-image",
			condition: ({ value }) => isDynamicPropValue(value.value?.image?.value?.src),
			component: BackgroundControlDynamicTagIcon
		});
		registerPopoverAction({
			id: "dynamic-tags",
			priority: 20,
			useProps: usePropDynamicAction
		});
		_elementor_editor_canvas.styleTransformersRegistry.register("dynamic", dynamicTransformer);
		_elementor_editor_canvas.settingsTransformersRegistry.register("dynamic", dynamicTransformer);
	}, "init");

//#endregion
//#region packages/packages/core/editor-editing-panel/src/utils/is-equal.ts
	function isEqual(a, b) {
		if (a === b) return true;
		if (a === null || b === null) return false;
		if (typeof a !== typeof b) return false;
		if (Array.isArray(a) && Array.isArray(b)) {
			if (a.length !== b.length) return false;
			for (let i = 0; i < a.length; i++) if (!isEqual(a[i], b[i])) return false;
			return true;
		}
		if (typeof a === "object" && typeof b === "object") {
			const objA = a;
			const objB = b;
			const keysA = Object.keys(objA);
			const keysB = Object.keys(objB);
			if (keysA.length !== keysB.length) return false;
			for (const key of keysA) {
				if (!(key in objB)) return false;
				if (!isEqual(objA[key], objB[key])) return false;
			}
			return true;
		}
		return false;
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/reset-style-props.tsx
	var { registerAction } = _elementor_menus.controlActionsMenu;
	function initResetStyleProps() {
		registerAction({
			id: "reset-style-value",
			priority: 10,
			useProps: useResetStyleValueProps
		});
	}
	function useResetStyleValueProps() {
		const isStyle = useIsStyle();
		const { value, resetValue, propType } = (0, _elementor_editor_controls.useBoundProp)();
		const hasValue = value !== null && value !== void 0;
		const hasInitial = propType.initial_value !== void 0 && propType.initial_value !== null;
		const isRequired = !!propType.settings?.required;
		const shouldHide = !!propType.settings?.hide_reset;
		const isPropTypeValue = value;
		const isVariable = isPropTypeValue?.$$type?.includes("variable");
		const variableExists = isVariable && (0, _elementor_editor_variables.hasVariable)(isPropTypeValue?.value);
		function calculateVisibility() {
			if (!isStyle || !hasValue || shouldHide || isVariable && !variableExists) return false;
			if (hasInitial) return !isEqual(value, propType.initial_value);
			return !isRequired;
		}
		return {
			visible: calculateVisibility(),
			title: (0, _wordpress_i18n.__)("Clear", "elementor"),
			icon: _elementor_icons.BrushBigIcon,
			onClick: () => resetValue()
		};
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/hooks/use-normalized-inheritance-chain-items.tsx
	var MAXIMUM_ITEMS = 2;
	var useNormalizedInheritanceChainItems = (inheritanceChain, bind, resolve) => {
		const [items, setItems] = (0, react.useState)([]);
		(0, react.useEffect)(() => {
			(async () => {
				const validItems = (await Promise.all(inheritanceChain.filter(({ style }) => style).map((item, index) => normalizeInheritanceItem(item, index, bind, resolve)))).map((item) => ({
					...item,
					displayLabel: _elementor_editor_styles_repository.ELEMENTS_BASE_STYLES_PROVIDER_KEY !== item.provider ? item.displayLabel : (0, _wordpress_i18n.__)("Base", "elementor")
				})).filter((item) => !item.value || item.displayLabel !== "").slice(0, MAXIMUM_ITEMS);
				setItems(validItems);
			})();
		}, [
			inheritanceChain,
			bind,
			resolve
		]);
		return items;
	};
	var DEFAULT_BREAKPOINT$1 = "desktop";
	var normalizeInheritanceItem = async (item, index, bind, resolve) => {
		const { variant: { meta: { state, breakpoint } }, style: { label, id } } = item;
		const displayLabel = getDisplayLabel({
			label,
			state
		});
		return {
			id: id ? id + (state ?? "") : index,
			provider: item.provider || "",
			breakpoint: breakpoint ?? DEFAULT_BREAKPOINT$1,
			displayLabel,
			value: await getTransformedValue(item, bind, resolve)
		};
	};
	function getDisplayLabel({ label, state }) {
		if (!state) return label;
		if ((0, _elementor_editor_styles.isClassState)(state)) return `${label}.${state}`;
		if ((0, _elementor_editor_styles.isPseudoState)(state)) return `${label}:${state}`;
		throw new _elementor_editor_canvas.UnknownStyleStateError({ context: { state } });
	}
	var getTransformedValue = async (item, bind, resolve) => {
		try {
			const result = await resolve({ props: { [bind]: item.value } });
			const value = result?.[bind] ?? result;
			if ((0, react.isValidElement)(value)) return value;
			if (typeof value === "object") return JSON.stringify(value);
			return String(value);
		} catch {
			return "";
		}
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/components/infotip/breakpoint-icon.tsx
	var SIZE$1 = "tiny";
	var DEFAULT_BREAKPOINT = "desktop";
	var breakpointIconMap = {
		widescreen: _elementor_icons.WidescreenIcon,
		desktop: _elementor_icons.DesktopIcon,
		laptop: _elementor_icons.LaptopIcon,
		tablet_extra: _elementor_icons.TabletLandscapeIcon,
		tablet: _elementor_icons.TabletPortraitIcon,
		mobile_extra: _elementor_icons.MobileLandscapeIcon,
		mobile: _elementor_icons.MobilePortraitIcon
	};
	var BreakpointIcon = ({ breakpoint }) => {
		const breakpoints = (0, _elementor_editor_responsive.useBreakpoints)();
		const currentBreakpoint = breakpoint || DEFAULT_BREAKPOINT;
		const IconComponent = breakpointIconMap[currentBreakpoint];
		if (!IconComponent) return null;
		const breakpointLabel = breakpoints.find((breakpointItem) => breakpointItem.id === currentBreakpoint)?.label;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: breakpointLabel,
			placement: "top"
		}, /* @__PURE__ */ react.createElement(IconComponent, {
			fontSize: SIZE$1,
			sx: { mt: "2px" }
		}));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/components/infotip/label-chip.tsx
	var SIZE = "tiny";
	var LabelChip = ({ displayLabel, provider }) => {
		const chipIcon = provider === _elementor_editor_styles_repository.ELEMENTS_BASE_STYLES_PROVIDER_KEY ? /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: (0, _wordpress_i18n.__)("Inherited from base styles", "elementor"),
			placement: "top"
		}, /* @__PURE__ */ react.createElement(_elementor_icons.InfoCircleIcon, { fontSize: SIZE })) : void 0;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			label: displayLabel,
			size: SIZE,
			color: getStylesProviderColorName(provider),
			variant: "standard",
			state: "enabled",
			icon: chipIcon,
			sx: (theme) => ({
				lineHeight: 1,
				flexWrap: "nowrap",
				alignItems: "center",
				borderRadius: `${theme.shape.borderRadius * .75}px`,
				flexDirection: "row-reverse",
				".MuiChip-label": {
					overflow: "hidden",
					textOverflow: "ellipsis",
					whiteSpace: "nowrap"
				}
			})
		});
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/components/infotip/value-component.tsx
	var ValueComponent = ({ index, value }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: value,
			placement: "top"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			color: "text.tertiary",
			sx: {
				mt: "1px",
				textDecoration: index === 0 ? "none" : "line-through",
				overflow: "hidden",
				display: "-webkit-box",
				WebkitLineClamp: 1,
				WebkitBoxOrient: "vertical",
				pl: 2.5,
				minWidth: 0,
				maxWidth: "100%"
			}
		}, value));
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/components/infotip/action-icons.tsx
	var ActionIcons = () => /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
		display: "flex",
		gap: .5,
		alignItems: "center"
	});

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/components/styles-inheritance-infotip.tsx
	var SECTION_PADDING_INLINE = 32;
	var INFOTIP_MAX_WIDTH = 496;
	var StylesInheritanceInfotip = ({ inheritanceChain, propType, path, label, children, isDisabled }) => {
		const [showInfotip, setShowInfotip] = (0, react.useState)(false);
		const triggerRef = (0, react.useRef)(null);
		const toggleInfotip = () => {
			if (isDisabled) return;
			setShowInfotip((prev) => !prev);
		};
		const closeInfotip = () => {
			if (isDisabled) return;
			setShowInfotip(false);
		};
		const key = path.join(".");
		const sectionWidth = (0, _elementor_editor_ui.useSectionWidth)();
		const items = useNormalizedInheritanceChainItems(inheritanceChain, key, (0, react.useMemo)(() => {
			return (0, _elementor_editor_canvas.createPropsResolver)({
				transformers: _elementor_editor_canvas.stylesInheritanceTransformersRegistry,
				schema: { [key]: propType }
			});
		}, [key, propType]));
		const infotipContent = /* @__PURE__ */ react.createElement(_elementor_ui.ClickAwayListener, { onClickAway: closeInfotip }, /* @__PURE__ */ react.createElement(_elementor_ui.Card, {
			elevation: 0,
			sx: {
				width: `${sectionWidth - SECTION_PADDING_INLINE}px`,
				maxWidth: INFOTIP_MAX_WIDTH,
				maxHeight: 268,
				overflowX: "hidden",
				display: "flex",
				flexDirection: "column"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			position: "sticky",
			top: 0,
			zIndex: 1,
			backgroundColor: "background.paper"
		} }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverHeader, {
			title: (0, _wordpress_i18n.__)("Style origin", "elementor"),
			onClose: closeInfotip
		})), /* @__PURE__ */ react.createElement(_elementor_ui.CardContent, { sx: {
			display: "flex",
			flexDirection: "column",
			p: 0,
			flex: 1,
			overflow: "auto",
			"&:last-child": { pb: 0 }
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			gap: 1.5,
			sx: {
				pl: 2,
				pr: 1,
				pt: 1.5,
				pb: 1.5
			},
			role: "list"
		}, items.map((item, index) => {
			return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
				key: item.id,
				display: "flex",
				gap: .5,
				role: "listitem",
				"aria-label": (0, _wordpress_i18n.__)("Inheritance item: %s", "elementor").replace("%s", item.displayLabel)
			}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
				display: "flex",
				gap: .5,
				sx: {
					flexWrap: "wrap",
					width: "100%",
					alignItems: "flex-start"
				}
			}, /* @__PURE__ */ react.createElement(BreakpointIcon, { breakpoint: item.breakpoint }), /* @__PURE__ */ react.createElement(LabelChip, {
				displayLabel: item.displayLabel,
				provider: item.provider
			}), /* @__PURE__ */ react.createElement(ValueComponent, {
				index,
				value: item.value
			})), /* @__PURE__ */ react.createElement(ActionIcons, null));
		})))));
		if (isDisabled) return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { display: "inline-flex" } }, children);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			ref: triggerRef,
			sx: { display: "inline-flex" }
		}, /* @__PURE__ */ react.createElement(TooltipOrInfotip, {
			showInfotip,
			onClose: closeInfotip,
			infotipContent,
			isDisabled
		}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			onClick: toggleInfotip,
			"aria-label": label,
			sx: { my: "-1px" },
			disabled: isDisabled
		}, children)));
	};
	function TooltipOrInfotip({ children, showInfotip, onClose, infotipContent, isDisabled }) {
		if (isDisabled) return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { display: "inline-flex" } }, children);
		if (showInfotip) return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Backdrop, {
			open: showInfotip,
			onClick: onClose,
			sx: {
				backgroundColor: "transparent",
				zIndex: (theme) => theme.zIndex.modal - 1
			}
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Infotip, {
			placement: "top-end",
			content: infotipContent,
			open: showInfotip,
			onClose,
			disableHoverListener: true
		}, children));
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: (0, _wordpress_i18n.__)("Style origin", "elementor"),
			placement: "top"
		}, children);
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/components/styles-inheritance-indicator.tsx
	var StylesInheritanceIndicator = ({ customContext }) => {
		const context = (0, _elementor_editor_controls.useBoundProp)();
		const { path, propType } = customContext || context;
		const inheritanceChain = useStylesInheritanceChain(path);
		if (!path || !inheritanceChain.length) return null;
		return /* @__PURE__ */ react.createElement(Indicator, {
			inheritanceChain,
			path,
			propType
		});
	};
	var Indicator = ({ inheritanceChain, path, propType, isDisabled }) => {
		const { id: currentStyleId, provider: currentStyleProvider, meta: currentStyleMeta } = useStyle();
		const currentItem = currentStyleId ? getValueFromInheritanceChain(inheritanceChain, currentStyleId, currentStyleMeta) : null;
		const hasValue = !(0, _elementor_editor_props.isEmpty)(currentItem?.value);
		const [actualStyle] = inheritanceChain;
		if (actualStyle.provider === _elementor_editor_styles_repository.ELEMENTS_BASE_STYLES_PROVIDER_KEY) return null;
		const isFinalValue = currentItem === actualStyle;
		const label = getLabel({
			isFinalValue,
			hasValue
		});
		const styleIndicatorProps = {
			getColor: isFinalValue && currentStyleProvider ? getStylesProviderThemeColor(currentStyleProvider.getKey()) : void 0,
			isOverridden: hasValue && !isFinalValue ? true : void 0
		};
		return /* @__PURE__ */ react.createElement(StylesInheritanceInfotip, {
			inheritanceChain,
			path,
			propType,
			label,
			isDisabled
		}, /* @__PURE__ */ react.createElement(StyleIndicator, { ...styleIndicatorProps }));
	};
	var getLabel = ({ isFinalValue, hasValue }) => {
		if (isFinalValue) return (0, _wordpress_i18n.__)("This is the final value", "elementor");
		if (hasValue) return (0, _wordpress_i18n.__)("This value is overridden by another style", "elementor");
		return (0, _wordpress_i18n.__)("This has value from another style", "elementor");
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/consts.ts
	var excludePropTypeTransformers = /* @__PURE__ */ new Set([
		"background-color-overlay",
		"background-image-overlay",
		"background-gradient-overlay",
		"gradient-color-stop",
		"color-stop",
		"background-image-position-offset",
		"background-image-size-scale",
		"image-src",
		"image",
		"background-overlay"
	]);

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/transformers/array-transformer.tsx
	var arrayTransformer = (0, _elementor_editor_canvas.createTransformer)((values) => {
		if (!values || values.length === 0) return null;
		if (values.every((item) => typeof item === "string" || typeof item === "number")) return values.join(" ");
		return /* @__PURE__ */ react.createElement(react.Fragment, null, values.map((item, index) => /* @__PURE__ */ react.createElement(react.Fragment, { key: index }, index > 0 && " ", item)));
	});

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/transformers/background-color-overlay-transformer.tsx
	var backgroundColorOverlayTransformer = (0, _elementor_editor_canvas.createTransformer)((value) => /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
		direction: "row",
		gap: 1,
		alignItems: "center"
	}, /* @__PURE__ */ react.createElement(ItemLabelColor, { value })));
	var ItemLabelColor = ({ value: { color } }) => {
		return /* @__PURE__ */ react.createElement("span", null, color);
	};
	var StyledUnstableColorIndicator = (0, _elementor_ui.styled)(_elementor_ui.UnstableColorIndicator)(({ theme }) => ({
		width: "1em",
		height: "1em",
		borderRadius: `${theme.shape.borderRadius / 2}px`,
		outline: `1px solid ${theme.palette.action.disabled}`,
		flexShrink: 0
	}));

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/transformers/background-gradient-overlay-transformer.tsx
	var backgroundGradientOverlayTransformer = (0, _elementor_editor_canvas.createTransformer)((value) => /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
		direction: "row",
		gap: 1,
		alignItems: "center"
	}, /* @__PURE__ */ react.createElement(ItemIconGradient, { value }), /* @__PURE__ */ react.createElement(ItemLabelGradient, { value })));
	var ItemIconGradient = ({ value }) => {
		const gradient = getGradientValue(value);
		return /* @__PURE__ */ react.createElement(StyledUnstableColorIndicator, {
			size: "inherit",
			component: "span",
			value: gradient
		});
	};
	var ItemLabelGradient = ({ value }) => {
		if (value.type === "linear") return /* @__PURE__ */ react.createElement("span", null, (0, _wordpress_i18n.__)("Linear gradient", "elementor"));
		return /* @__PURE__ */ react.createElement("span", null, (0, _wordpress_i18n.__)("Radial gradient", "elementor"));
	};
	var getGradientValue = (gradient) => {
		const stops = gradient.stops?.map(({ color, offset }) => `${color} ${offset ?? 0}%`)?.join(",");
		if (gradient.type === "linear") return `linear-gradient(${gradient.angle}deg, ${stops})`;
		return `radial-gradient(circle at ${gradient.positions}, ${stops})`;
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/transformers/background-image-overlay-transformer.tsx
	var backgroundImageOverlayTransformer = (0, _elementor_editor_canvas.createTransformer)((value) => /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
		direction: "row",
		gap: 1,
		alignItems: "center"
	}, /* @__PURE__ */ react.createElement(ItemIconImage, { value }), /* @__PURE__ */ react.createElement(ItemLabelImage, { value })));
	var ItemIconImage = ({ value }) => {
		const { imageUrl } = useImage(value);
		return /* @__PURE__ */ react.createElement(_elementor_ui.CardMedia, {
			image: imageUrl,
			sx: (theme) => ({
				height: "1em",
				width: "1em",
				borderRadius: `${theme.shape.borderRadius / 2}px`,
				outline: `1px solid ${theme.palette.action.disabled}`,
				flexShrink: 0
			})
		});
	};
	var ItemLabelImage = ({ value }) => {
		const { imageTitle } = useImage(value);
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.EllipsisWithTooltip, { title: imageTitle }, /* @__PURE__ */ react.createElement("span", null, imageTitle));
	};
	var useImage = (image) => {
		let imageTitle;
		let imageUrl = null;
		const imageSrc = image?.image.src;
		const { data: attachment } = (0, _elementor_wp_media.useWpMediaAttachment)(imageSrc.id || null);
		if (imageSrc.id) {
			const imageFileTypeExtension = getFileExtensionFromFilename(attachment?.filename);
			imageTitle = `${attachment?.title}${imageFileTypeExtension}` || null;
			imageUrl = attachment?.url || null;
		} else if (imageSrc.url) {
			imageUrl = imageSrc.url;
			imageTitle = imageUrl?.substring(imageUrl.lastIndexOf("/") + 1) || null;
		}
		return {
			imageTitle,
			imageUrl
		};
	};
	var getFileExtensionFromFilename = (filename) => {
		if (!filename) return "";
		return `.${filename.substring(filename.lastIndexOf(".") + 1)}`;
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/transformers/box-shadow-transformer.tsx
	var boxShadowTransformer = (0, _elementor_editor_canvas.createTransformer)((value) => {
		if (!value) return null;
		const { color, hOffset, vOffset, blur, spread, position } = value;
		const colorValue = color || "#000000";
		const sizes = [
			hOffset || "0px",
			vOffset || "0px",
			blur || "10px",
			spread || "0px"
		].join(" ");
		const positionValue = position || "outset";
		return /* @__PURE__ */ react.createElement(react.Fragment, null, colorValue, " ", positionValue, ", ", sizes);
	});

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/transformers/color-transformer.tsx
	function isValidCSSColor(value) {
		if (!value.trim()) return false;
		return CSS.supports("color", value.trim());
	}
	var StyledColorIndicator = (0, _elementor_ui.styled)(_elementor_ui.UnstableColorIndicator)(({ theme }) => ({
		width: "1em",
		height: "1em",
		borderRadius: `${theme.shape.borderRadius / 2}px`,
		outline: `1px solid ${theme.palette.action.disabled}`,
		flexShrink: 0
	}));
	var colorTransformer = (0, _elementor_editor_canvas.createTransformer)((value) => {
		if (!isValidCSSColor(value)) return value;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			gap: 1,
			alignItems: "center"
		}, /* @__PURE__ */ react.createElement(StyledColorIndicator, {
			size: "inherit",
			component: "span",
			value
		}), /* @__PURE__ */ react.createElement("span", null, value));
	});

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/transformers/repeater-to-items-transformer.tsx
	var createRepeaterToItemsTransformer = (originalTransformer) => {
		return (0, _elementor_editor_canvas.createTransformer)((value, options) => {
			const stringResult = originalTransformer(value, options);
			if (!stringResult || typeof stringResult !== "string") return stringResult;
			return stringResult;
		});
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/init-styles-inheritance-transformers.ts
	function initStylesInheritanceTransformers() {
		const originalStyleTransformers = _elementor_editor_canvas.styleTransformersRegistry.all();
		Object.entries(originalStyleTransformers).forEach(([propType, transformer]) => {
			if (excludePropTypeTransformers.has(propType)) return;
			_elementor_editor_canvas.stylesInheritanceTransformersRegistry.register(propType, transformer);
		});
		_elementor_editor_canvas.stylesInheritanceTransformersRegistry.registerFallback((0, _elementor_editor_canvas.createTransformer)((value) => {
			return value;
		}));
		registerCustomTransformers(originalStyleTransformers);
	}
	function registerCustomTransformers(originalStyleTransformers) {
		_elementor_editor_canvas.stylesInheritanceTransformersRegistry.register("color", colorTransformer);
		_elementor_editor_canvas.stylesInheritanceTransformersRegistry.register("background-color-overlay", backgroundColorOverlayTransformer);
		_elementor_editor_canvas.stylesInheritanceTransformersRegistry.register("background-gradient-overlay", backgroundGradientOverlayTransformer);
		_elementor_editor_canvas.stylesInheritanceTransformersRegistry.register("background-image-overlay", backgroundImageOverlayTransformer);
		_elementor_editor_canvas.stylesInheritanceTransformersRegistry.register("shadow", boxShadowTransformer);
		_elementor_editor_canvas.stylesInheritanceTransformersRegistry.register("filter", createRepeaterToItemsTransformer(originalStyleTransformers.filter));
		_elementor_editor_canvas.stylesInheritanceTransformersRegistry.register("backdrop-filter", createRepeaterToItemsTransformer(originalStyleTransformers["backdrop-filter"]));
		_elementor_editor_canvas.stylesInheritanceTransformersRegistry.register("transition", createRepeaterToItemsTransformer(originalStyleTransformers.transition));
		[
			"background-overlay",
			"box-shadow",
			"transform-functions"
		].forEach((propType) => _elementor_editor_canvas.stylesInheritanceTransformersRegistry.register(propType, arrayTransformer));
	}

//#endregion
//#region packages/packages/core/editor-editing-panel/src/styles-inheritance/init.ts
	var init$1 = /* @__PURE__ */ __name(() => {
		initStylesInheritanceTransformers();
		registerFieldIndicator({
			fieldType: FIELD_TYPE.STYLES,
			id: "styles-inheritance",
			priority: 1,
			indicator: StylesInheritanceIndicator
		});
	}, "init");

//#endregion
//#region packages/packages/core/editor-editing-panel/src/init.ts
	function init() {
		(0, _elementor_editor_panels.registerPanel)(panel);
		blockV1Panel();
		(0, _elementor_editor.injectIntoLogic)({
			id: "editing-panel-hooks",
			component: EditingPanelHooks
		});
		init$2();
		init$1();
		registerElementControls();
		initResetStyleProps();
		init$3();
	}
	var blockV1Panel = () => {
		(0, _elementor_editor_v1_adapters.blockCommand)({
			command: "panel/editor/open",
			condition: isAtomicWidgetSelected
		});
	};

//#endregion
//#region packages/packages/core/editor-editing-panel/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		BaseControl: () => Control$1,
		ClassesPropProvider: () => ClassesPropProvider,
		ControlLabel: () => ControlLabel,
		ControlTypeContainer: () => ControlTypeContainer,
		CreatableAutocomplete: () => CreatableAutocomplete,
		CustomCssIndicator: () => CustomCssIndicator,
		DEFAULT_PSEUDO_STATES: () => DEFAULT_PSEUDO_STATES,
		EditingPanelTabs: () => EditingPanelTabs,
		ElementProvider: () => ElementProvider,
		FIELD_TYPE: () => FIELD_TYPE,
		HISTORY_DEBOUNCE_WAIT: () => 800,
		PseudoStateMenuItems: () => PseudoStateMenuItems,
		STYLE_SECTIONS: () => STYLE_SECTIONS,
		STYLE_SECTION_NAMES: () => STYLE_SECTION_NAMES,
		SectionContent: () => SectionContent,
		SectionsList: () => SectionsList,
		SettingsControl: () => SettingsControl,
		SettingsField: () => SettingsField,
		StyleIndicator: () => StyleIndicator,
		StyleInheritanceProvider: () => StyleInheritanceProvider,
		StyleProvider: () => StyleProvider,
		StyleSections: () => StyleSections,
		StyleTabSection: () => StyleTabSection,
		StyleTabSlot: () => StyleTabSlot,
		StylesProviderCannotUpdatePropsError: () => StylesProviderCannotUpdatePropsError,
		controlsRegistry: () => controlsRegistry,
		createTopLevelObjectType: () => createTopLevelObjectType,
		doApplyClasses: () => doApplyClasses,
		doGetAppliedClasses: () => doGetAppliedClasses,
		doUnapplyClass: () => doUnapplyClass,
		extractDependencyEffect: () => extractDependencyEffect,
		extractOrderedDependencies: () => extractOrderedDependencies,
		getElementSettingsWithDefaults: () => getElementSettingsWithDefaults,
		getFieldIndicators: () => getFieldIndicators,
		getSubtitle: () => getSubtitle,
		getTitle: () => getTitle,
		getUpdatedValues: () => getUpdatedValues,
		init: () => init,
		injectIntoClassSelectorActions: () => injectIntoClassSelectorActions,
		injectIntoCssClassConvert: () => injectIntoCssClassConvert,
		injectIntoGridFields: () => injectIntoGridFields,
		injectIntoPanelHeaderTop: () => injectIntoPanelHeaderTop,
		injectIntoStyleTab: () => injectIntoStyleTab,
		isDynamicPropValue: () => isDynamicPropValue,
		registerEditingPanelReplacement: () => registerEditingPanelReplacement,
		registerElementPanelDefaults: () => registerElementPanelDefaults,
		registerFieldIndicator: () => registerFieldIndicator,
		registerStyleProviderToColors: () => registerStyleProviderToColors,
		setLicenseConfig: () => setLicenseConfig,
		useClassesProp: () => useClassesProp,
		useCustomCss: () => useCustomCss,
		useElement: () => useElement,
		usePanelActions: () => usePanelActions,
		usePanelStatus: () => usePanelStatus,
		usePseudoStates: () => usePseudoStates,
		useStateByElement: () => useStateByElement,
		useStyle: () => useStyle,
		useStylesRerender: () => useStylesRerender
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorEditingPanel = src_exports;

//#endregion
})(React, elementorV2.ui, elementorV2.editorElements, elementorV2.editorProps, elementorV2.locations, elementorV2.session, elementorV2.editorStylesRepository, elementorV2.utils, elementorV2.editorControls, elementorV2.icons, elementorV2.editorUi, wp.i18n, elementorV2.editorStyles, elementorV2.editorV1Adapters, elementorV2.editorDocuments, elementorV2.editorResponsive, elementorV2.editorPanels, elementorV2.menus, elementorV2.editorInteractions, elementorV2.editorVariables, elementorV2.editorCanvas, elementorV2.editor, elementorV2.schema, elementorV2.wpMedia);
window.elementorV2.editorEditingPanel?.init?.();
//# sourceMappingURL=editor-editing-panel.js.map