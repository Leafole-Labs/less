(function(react, _elementor_editor_current_user, _elementor_editor_panels, _elementor_editor_ui, _elementor_icons, _elementor_ui, _wordpress_i18n, _elementor_events, _elementor_editor_canvas, _elementor_editor_props, _elementor_schema, _elementor_http_client, _elementor_editor_v1_adapters, _elementor_editor_controls, _elementor_utils, _elementor_editor, _elementor_editor_mcp, _elementor_menus) {

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

//#region packages/packages/core/editor-variables/src/utils/tracking.ts
	var trackVariableEvent = ({ varType, controlPath, action, executedBy }) => {
		const { dispatchEvent, config } = (0, _elementor_events.getMixpanel)();
		if (!config?.names?.variables?.[action]) return;
		const name = config.names.variables[action];
		let eventData = {
			var_type: varType,
			action_type: name
		};
		if (executedBy) eventData.executed_by = executedBy;
		const defaultLocationInfo = {
			location: config?.locations?.variables || "",
			secondaryLocation: config?.secondaryLocations?.variablesPopover || "",
			trigger: config?.triggers?.click || ""
		};
		if (!executedBy || executedBy !== "mcp_tool") eventData = {
			...defaultLocationInfo,
			...eventData
		};
		if (controlPath) eventData.control_path = controlPath;
		dispatchEvent?.(name, eventData);
	};
	var trackVariablesManagerEvent = ({ action, source, varType, controlPath }) => {
		const { dispatchEvent, config } = (0, _elementor_events.getMixpanel)();
		if (!config?.names?.variables?.[action]) return;
		const name = config.names.variables[action];
		const eventData = {
			location: config?.locations?.variablesManager || "",
			trigger: config?.triggers?.click || "",
			action_type: name
		};
		if (source) eventData.source = source;
		if (varType) eventData.var_type = varType;
		if (controlPath) eventData.style_control_path = controlPath;
		dispatchEvent?.(name, eventData);
	};
	var trackVariableSyncToV3 = ({ variableLabel, action }) => {
		const { dispatchEvent, config } = (0, _elementor_events.getMixpanel)();
		if (!config?.names?.variables?.variableSyncToV3) return;
		const name = config.names.variables.variableSyncToV3;
		const isSync = action === "sync";
		dispatchEvent?.(name, {
			interaction_type: "click",
			target_type: variableLabel,
			target_name: isSync ? "sync_to_v3" : "unsync_to_v3",
			interaction_result: isSync ? "var_is_synced_to_V3" : "var_is_unsynced_from_V3",
			target_location: "widget_panel",
			location_l1: "var_manager",
			interaction_description: isSync ? `user_synced_${variableLabel}_to_v3` : `user_unsync_${variableLabel}_from_v3`
		});
	};

//#endregion
//#region packages/packages/core/editor-variables/src/utils/validations.ts
	var ERROR_MESSAGES = {
		MISSING_VARIABLE_NAME: (0, _wordpress_i18n.__)("Give your variable a name.", "elementor"),
		MISSING_VARIABLE_VALUE: (0, _wordpress_i18n.__)("Add a value to complete your variable.", "elementor"),
		INVALID_CHARACTERS: (0, _wordpress_i18n.__)("Use letters, numbers, dashes (-), or underscores (_) for the name.", "elementor"),
		NO_NON_SPECIAL_CHARACTER: (0, _wordpress_i18n.__)("Names have to include at least one non-special character.", "elementor"),
		VARIABLE_LABEL_MAX_LENGTH: (0, _wordpress_i18n.__)("Keep names up to 50 characters.", "elementor"),
		DUPLICATED_LABEL: (0, _wordpress_i18n.__)("This variable name already exists. Please choose a unique name.", "elementor"),
		UNEXPECTED_ERROR: (0, _wordpress_i18n.__)("There was a glitch. Try saving your variable again.", "elementor"),
		BATCH: {
			DUPLICATED_LABELS: (count, name) => (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("We found %1$d duplicated %2$s.", "elementor"), count, name),
			UNEXPECTED_ERROR: (0, _wordpress_i18n.__)("There was a glitch.", "elementor"),
			DUPLICATED_LABEL_ACTION: (0, _wordpress_i18n.__)("Take me there", "elementor"),
			DUPLICATED_LABEL_ACTION_MESSAGE: (0, _wordpress_i18n.__)("Please rename the variables.", "elementor"),
			UNEXPECTED_ERROR_ACTION_MESSAGE: (0, _wordpress_i18n.__)("Try saving your variables again.", "elementor")
		}
	};
	var VARIABLE_LABEL_MAX_LENGTH = 50;
	var mapServerError = (error) => {
		if (error?.response?.data?.code === "duplicated_label") return {
			field: "label",
			message: ERROR_MESSAGES.DUPLICATED_LABEL
		};
		if (error?.response?.data?.code === "batch_duplicated_label") {
			const errorData = error?.response?.data?.data ?? {};
			const count = Object.keys(errorData).length;
			const name = count === 1 ? "name" : "names";
			const duplicatedIds = Object.keys(errorData);
			return {
				field: "label",
				message: ERROR_MESSAGES.BATCH.DUPLICATED_LABELS(count, name),
				severity: "error",
				IconComponent: _elementor_icons.AlertTriangleFilledIcon,
				action: {
					label: ERROR_MESSAGES.BATCH.DUPLICATED_LABEL_ACTION,
					message: ERROR_MESSAGES.BATCH.DUPLICATED_LABEL_ACTION_MESSAGE,
					data: { duplicatedIds }
				}
			};
		}
		if (error?.response?.data?.code === "batch_operation_failed") return {
			field: "label",
			message: ERROR_MESSAGES.BATCH.UNEXPECTED_ERROR,
			severity: "secondary",
			IconComponent: _elementor_icons.InfoCircleFilledIcon,
			action: { message: ERROR_MESSAGES.BATCH.UNEXPECTED_ERROR_ACTION_MESSAGE }
		};
	};
	var validateLabel = (name, variables) => {
		if (!name.trim()) return ERROR_MESSAGES.MISSING_VARIABLE_NAME;
		if (!/^[a-zA-Z0-9_-]+$/.test(name)) return ERROR_MESSAGES.INVALID_CHARACTERS;
		if (!/[a-zA-Z0-9]/.test(name)) return ERROR_MESSAGES.NO_NON_SPECIAL_CHARACTER;
		if (50 < name.length) return ERROR_MESSAGES.VARIABLE_LABEL_MAX_LENGTH;
		if (Object.values(variables ?? {}).some((variable) => variable.label === name)) return ERROR_MESSAGES.DUPLICATED_LABEL;
		return "";
	};
	var labelHint = (name) => {
		if (50 * .8 - 1 < name.length) return ERROR_MESSAGES.VARIABLE_LABEL_MAX_LENGTH;
		return "";
	};
	var validateValue = (value) => {
		if (!value.trim()) return ERROR_MESSAGES.MISSING_VARIABLE_VALUE;
		return "";
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/color-indicator.tsx
	var ColorIndicator = (0, _elementor_ui.styled)(_elementor_ui.UnstableColorIndicator)(({ theme }) => ({
		borderRadius: `${theme.shape.borderRadius / 2}px`,
		marginRight: theme.spacing(.25)
	}));

//#endregion
//#region packages/packages/core/editor-variables/src/prop-types/color-variable-prop-type.ts
	var colorVariablePropTypeUtil = (0, _elementor_editor_props.createPropUtils)("global-color-variable", _elementor_schema.z.string());

//#endregion
//#region packages/packages/core/editor-variables/src/api.ts
	var apiClient = {
		list: () => {
			return (0, _elementor_http_client.httpService)().get("elementor/v1/variables/list");
		},
		create: (type, label, value) => {
			return (0, _elementor_http_client.httpService)().post("elementor/v1/variables/create", {
				type,
				label,
				value
			});
		},
		update: (id, label, value, type) => {
			return (0, _elementor_http_client.httpService)().put("elementor/v1/variables/update", {
				id,
				label,
				value,
				type
			});
		},
		delete: (id) => {
			return (0, _elementor_http_client.httpService)().post("elementor/v1/variables/delete", { id });
		},
		restore: (id, label, value, type) => {
			const payload = { id };
			if (label) payload.label = label;
			if (value) payload.value = value;
			if (type) payload.type = type;
			return (0, _elementor_http_client.httpService)().post("elementor/v1/variables/restore", payload);
		},
		batch: (payload) => {
			return (0, _elementor_http_client.httpService)().post("elementor/v1/variables/batch", payload);
		}
	};

//#endregion
//#region packages/packages/core/editor-variables/src/batch-operations.ts
	var generateTempId = () => {
		return `tmp-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 8)}`;
	};
	var isTempId = (id) => {
		return id.startsWith("tmp-");
	};
	var buildOperationsArray = (originalVariables, currentVariables, deletedVariables) => {
		const operations = [];
		Object.entries(currentVariables).forEach(([id, variable]) => {
			if (isTempId(id)) operations.push({
				type: "create",
				variable: {
					...variable,
					id
				}
			});
			else if (originalVariables[id]) {
				const original = originalVariables[id];
				const syncChanged = original.sync_to_v3 !== variable.sync_to_v3;
				if (original.deleted && !variable.deleted) operations.push({
					type: "restore",
					id,
					...original.label !== variable.label && { label: variable.label },
					...original.value !== variable.value && { value: variable.value }
				});
				else if (!variable.deleted && (original.label !== variable.label || original.value !== variable.value || original.order !== variable.order || original.type !== variable.type || syncChanged)) operations.push({
					type: "update",
					id,
					variable: {
						...original.label !== variable.label && { label: variable.label },
						...original.value !== variable.value && { value: variable.value },
						...original.order !== variable.order && { order: variable.order },
						...original.type !== variable.type && { type: variable.type },
						...syncChanged && { sync_to_v3: variable.sync_to_v3 }
					}
				});
			}
		});
		deletedVariables.forEach((id) => {
			operations.push({
				type: "delete",
				id
			});
		});
		return operations.filter((op) => {
			const id = op.id || op.variable?.id;
			return id && !(isTempId(id) && currentVariables[id]?.deleted);
		});
	};

//#endregion
//#region packages/packages/core/editor-variables/src/storage.ts
	var __defProp = Object.defineProperty;
	var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	var STORAGE_KEY = "elementor-global-variables";
	var STORAGE_WATERMARK_KEY = "elementor-global-variables-watermark";
	var STORAGE_UPDATED_EVENT = "variables:updated";
	var OP_RW = "RW";
	var OP_RO = "RO";
	var Storage = class {
		constructor() {
			__publicField(this, "state");
			this.state = {
				watermark: -1,
				variables: {}
			};
		}
		notifyChange() {
			window.dispatchEvent(new Event(STORAGE_UPDATED_EVENT));
		}
		load() {
			this.state.watermark = parseInt(localStorage.getItem(STORAGE_WATERMARK_KEY) || "-1");
			this.state.variables = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
			return this.state.variables;
		}
		fill(variables, watermark) {
			this.state.variables = {};
			if (variables && Object.keys(variables).length) this.state.variables = variables;
			this.state.watermark = watermark;
			localStorage.setItem(STORAGE_WATERMARK_KEY, this.state.watermark.toString());
			localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.variables));
			this.notifyChange();
		}
		add(id, variable) {
			this.load();
			this.state.variables[id] = variable;
			localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.variables));
			this.notifyChange();
		}
		update(id, variable) {
			this.load();
			this.state.variables[id] = variable;
			localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.variables));
			this.notifyChange();
		}
		watermark(watermark) {
			this.state.watermark = watermark;
			localStorage.setItem(STORAGE_WATERMARK_KEY, this.state.watermark.toString());
		}
		watermarkDiff(operation, newWatermark) {
			const diff = newWatermark - this.state.watermark;
			if ("RW" === operation) return 1 !== diff;
			if (OP_RO === operation) return 0 !== diff;
			return false;
		}
	};

//#endregion
//#region packages/packages/core/editor-variables/src/prop-types/font-variable-prop-type.ts
	var fontVariablePropTypeUtil = (0, _elementor_editor_props.createPropUtils)("global-font-variable", _elementor_schema.z.string());

//#endregion
//#region packages/packages/core/editor-variables/src/create-style-variables-repository.ts
	var createStyleVariablesRepository = () => {
		const variables = {};
		let subscription;
		const subscribe = (cb) => {
			subscription = cb;
			return () => {
				subscription = () => {};
			};
		};
		const notify = () => {
			if (typeof subscription === "function") subscription({ ...variables });
		};
		const shouldUpdate = (key, maybeUpdated) => {
			if (!(key in variables)) return true;
			if (variables[key].label !== maybeUpdated.label) return true;
			if (variables[key].value !== maybeUpdated.value) return true;
			if (!variables[key]?.deleted && maybeUpdated?.deleted) return true;
			if (variables[key]?.deleted && !maybeUpdated?.deleted) return true;
			return false;
		};
		const applyUpdates = (updatedVars) => {
			let hasChanges = false;
			for (const [key, variable] of Object.entries(updatedVars)) if (shouldUpdate(key, variable)) {
				variables[key] = variable;
				if (variable.type === fontVariablePropTypeUtil.key) fontEnqueue(variable.value);
				hasChanges = true;
			}
			return hasChanges;
		};
		const fontEnqueue = (value) => {
			if (!value) return;
			try {
				(0, _elementor_editor_v1_adapters.enqueueFont)(value);
			} catch {}
		};
		const update = (updatedVars) => {
			if (applyUpdates(updatedVars)) notify();
		};
		return {
			subscribe,
			update
		};
	};

//#endregion
//#region packages/packages/core/editor-variables/src/style-variables-repository.ts
	var styleVariablesRepository = createStyleVariablesRepository();

//#endregion
//#region packages/packages/core/editor-variables/src/service.ts
	var storage = new Storage();
	var service = {
		variables: () => {
			return storage.load();
		},
		findIdByLabel(needle) {
			const variableId = Object.entries(this.variables()).find(([, variable]) => variable.label === needle);
			if (!variableId) throw new Error(`Variable with label ${needle} not found`);
			return variableId[0];
		},
		findVariableByLabel(needle) {
			return Object.values(this.variables()).find((variable) => variable.label === needle) || null;
		},
		getWatermark: () => {
			return storage.state.watermark;
		},
		init: () => {
			return service.load();
		},
		load: () => {
			return apiClient.list().then((response) => {
				const { success, data: payload } = response.data;
				if (!success) throw new Error("Unexpected response from server");
				return payload;
			}).then((data) => {
				const { variables, watermark } = data;
				storage.fill(variables, watermark);
				styleVariablesRepository.update(variables);
				return variables;
			});
		},
		create: ({ type, label, value }, options = {}) => {
			return apiClient.create(type, label, value).then((response) => {
				const { success, data: payload } = response.data;
				if (!success) {
					const errorMessage = payload?.message || (0, _wordpress_i18n.__)("Unexpected response from server", "elementor");
					throw new Error(errorMessage);
				}
				return payload;
			}).then((data) => {
				const { variable, watermark } = data;
				handleWatermark("RW", watermark);
				const { id: variableId, ...createdVariable } = variable;
				storage.add(variableId, createdVariable);
				styleVariablesRepository.update({ [variableId]: createdVariable });
				trackVariableEvent({
					varType: type,
					action: "save",
					...options.eventData
				});
				return {
					id: variableId,
					variable: createdVariable
				};
			});
		},
		update: (id, { label, value, type }, options = {}) => {
			return apiClient.update(id, label, value, type).then((response) => {
				const { success, data: payload } = response.data;
				if (!success) {
					const errorMessage = payload?.message || (0, _wordpress_i18n.__)("Unexpected response from server", "elementor");
					throw new Error(errorMessage);
				}
				return payload;
			}).then((data) => {
				const { variable, watermark } = data;
				handleWatermark("RW", watermark);
				const { id: variableId, ...updatedVariable } = variable;
				storage.update(variableId, updatedVariable);
				styleVariablesRepository.update({ [variableId]: updatedVariable });
				trackVariableEvent({
					varType: updatedVariable.type,
					action: "update",
					...options.eventData
				});
				return {
					id: variableId,
					variable: updatedVariable
				};
			});
		},
		delete: (id) => {
			return apiClient.delete(id).then((response) => {
				const { success, data: payload } = response.data;
				if (!success) throw new Error("Unexpected response from server");
				return payload;
			}).then((data) => {
				const { variable, watermark } = data;
				handleWatermark("RW", watermark);
				const { id: variableId, ...deletedVariable } = variable;
				storage.update(variableId, deletedVariable);
				styleVariablesRepository.update({ [variableId]: deletedVariable });
				return {
					id: variableId,
					variable: deletedVariable
				};
			});
		},
		restore: (id, label, value, type) => {
			return apiClient.restore(id, label, value, type).then((response) => {
				const { success, data: payload } = response.data;
				if (!success) throw new Error("Unexpected response from server");
				return payload;
			}).then((data) => {
				const { variable, watermark } = data;
				handleWatermark("RW", watermark);
				const { id: variableId, ...restoredVariable } = variable;
				storage.update(variableId, restoredVariable);
				styleVariablesRepository.update({ [variableId]: restoredVariable });
				return {
					id: variableId,
					variable: restoredVariable
				};
			});
		},
		batchSave: (originalVariables, currentVariables, deletedVariables) => {
			const operations = buildOperationsArray(originalVariables, currentVariables, deletedVariables);
			const batchPayload = {
				operations,
				watermark: storage.state.watermark
			};
			if (operations.length === 0) return Promise.resolve({
				success: true,
				watermark: storage.state.watermark,
				operations: 0
			});
			return apiClient.batch(batchPayload).then((response) => {
				const { success, data: payload } = response.data;
				if (!success) throw new Error("Unexpected response from server");
				return payload;
			}).then((data) => {
				const { results, watermark } = data;
				handleWatermark("RW", watermark);
				if (results) results.forEach((result) => {
					const variableId = result.id;
					if (result.variable) {
						if (result.type === "create") storage.add(variableId, result.variable);
						else storage.update(variableId, result.variable);
						styleVariablesRepository.update({ [variableId]: result.variable });
					}
				});
				return {
					success: true,
					watermark,
					operations: operations.length
				};
			});
		}
	};
	var handleWatermark = (operation, newWatermark) => {
		if (storage.watermarkDiff(operation, newWatermark)) setTimeout(() => service.load(), 500);
		storage.watermark(newWatermark);
	};
	var applyLocalMutation = (action, variableWithId, watermark) => {
		const { id: variableId, ...variable } = variableWithId;
		handleWatermark("RW", watermark);
		if (action === "create") storage.add(variableId, variable);
		else storage.update(variableId, variable);
		styleVariablesRepository.update({ [variableId]: variable });
	};

//#endregion
//#region packages/packages/core/editor-variables/src/transformers/utils/resolve-css-variable.ts
	var resolveCssVariable = (id, variable) => {
		let name = id;
		let fallbackValue = "";
		if (variable) fallbackValue = variable.value;
		if (variable && !variable.deleted) name = variable.label;
		if (!name.trim()) return null;
		const validCssVariableName = `--${name}`;
		if (!fallbackValue.trim()) return `var(${validCssVariableName})`;
		return `var(${validCssVariableName}, ${fallbackValue})`;
	};

//#endregion
//#region packages/packages/core/editor-variables/src/transformers/inheritance-transformer.tsx
	var inheritanceTransformer = (0, _elementor_editor_canvas.createTransformer)((id) => {
		const variable = service.variables()[id];
		if (!variable) return /* @__PURE__ */ react.createElement("span", null, (0, _wordpress_i18n.__)("Missing variable", "elementor"));
		const showColorIndicator = variable.type === colorVariablePropTypeUtil.key;
		const css = resolveCssVariable(id, variable);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			spacing: .5,
			sx: { paddingInline: "1px" },
			alignItems: "center"
		}, showColorIndicator && /* @__PURE__ */ react.createElement(ColorIndicator, {
			size: "inherit",
			value: variable.value
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			overflow: "hidden",
			whiteSpace: "nowrap",
			textOverflow: "ellipsis"
		}, css));
	});

//#endregion
//#region packages/packages/core/editor-variables/src/transformers/variable-transformer.ts
	var variableTransformer = (0, _elementor_editor_canvas.createTransformer)((idOrLabel, { key }) => {
		const targetVariable = service.variables()[idOrLabel] || service.findVariableByLabel(idOrLabel);
		if (!targetVariable) return null;
		if ((0, _elementor_editor_canvas.isGridTrackProperty)(key)) return (0, _elementor_editor_canvas.formatGridTrackRepeat)(parseInt((targetVariable.value ?? "").trim(), 10));
		return resolveCssVariable(service.findIdByLabel(targetVariable.label), targetVariable);
	});

//#endregion
//#region packages/packages/core/editor-variables/src/variables-registry/create-variable-type-registry.ts
	function createVariableTypeRegistry() {
		const variableTypes = {};
		const registerVariableType = ({ key, icon, startIcon, valueField, propTypeUtil, variableType, defaultValue, selectionFilter, valueTransformer, styleTransformer, fallbackPropTypeUtil, isCompatible, emptyState, isActive = true, menuActionsFactory }) => {
			const variableTypeKey = key ?? propTypeUtil.key;
			if (!isCompatible) isCompatible = (propType, variable) => {
				if ("union" === propType.kind) {
					if (variable.type in propType.prop_types) return true;
				}
				return false;
			};
			variableTypes[variableTypeKey] = {
				icon,
				startIcon,
				valueField,
				propTypeUtil,
				variableType,
				defaultValue,
				selectionFilter,
				valueTransformer,
				fallbackPropTypeUtil,
				isCompatible,
				emptyState,
				isActive,
				menuActionsFactory
			};
			registerTransformer(propTypeUtil.key, styleTransformer);
			registerInheritanceTransformer(propTypeUtil.key);
		};
		const registerTransformer = (key, transformer) => {
			_elementor_editor_canvas.styleTransformersRegistry.register(key, transformer ?? variableTransformer);
		};
		const registerInheritanceTransformer = (key) => {
			_elementor_editor_canvas.stylesInheritanceTransformersRegistry.register(key, inheritanceTransformer);
		};
		const getVariableType = (key) => {
			return variableTypes[key];
		};
		const getVariableTypes = () => {
			return variableTypes;
		};
		const hasVariableType = (key) => {
			return key in variableTypes && !!variableTypes[key].isActive;
		};
		return {
			registerVariableType,
			getVariableType,
			getVariableTypes,
			hasVariableType
		};
	}

//#endregion
//#region packages/packages/core/editor-variables/src/variables-registry/variable-type-registry.ts
	var { registerVariableType, getVariableType, getVariableTypes, hasVariableType } = createVariableTypeRegistry();
	function getMenuActionsForVariable(variableType, context) {
		const typeOptions = getVariableType(variableType);
		if (typeOptions?.menuActionsFactory) return typeOptions.menuActionsFactory(context);
		return [];
	}

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/delete-confirmation-dialog.tsx
	var DeleteConfirmationDialog = ({ open, label, closeDialog, onConfirm }) => {
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog, {
			open,
			onClose: closeDialog
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Title, null, (0, _wordpress_i18n.__)("Delete this variable?", "elementor")), /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Content, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.ContentText, null, (0, _wordpress_i18n.__)("All elements using", "elementor"), "\xA0", /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "subtitle2",
			component: "span",
			sx: { lineBreak: "anywhere" }
		}, label), "\xA0", (0, _wordpress_i18n.__)("will keep their current values, but the variable itself will be removed.", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Actions, {
			onClose: closeDialog,
			onConfirm
		}));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/hooks/use-permissions.ts
	var usePermissions = () => {
		const { canUser, isAdmin } = (0, _elementor_editor_current_user.useCurrentUserCapabilities)();
		return {
			canAssign: () => canUser("edit_posts"),
			canUnlink: () => canUser("edit_posts"),
			canAdd: () => isAdmin,
			canDelete: () => isAdmin,
			canEdit: () => isAdmin,
			canRestore: () => isAdmin,
			canManageSettings: () => isAdmin
		};
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/empty-state.tsx
	var EmptyState = ({ icon, title, message, onAdd, children }) => {
		const canAdd = usePermissions().canAdd();
		const displayTitle = canAdd ? title : (0, _wordpress_i18n.__)("There are no variables", "elementor");
		const displayMessage = canAdd ? message : (0, _wordpress_i18n.__)("With your current role, you can only connect and detach variables.", "elementor");
		return /* @__PURE__ */ react.createElement(Content, {
			title: displayTitle,
			message: displayMessage,
			icon
		}, children || onAdd && /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "outlined",
			color: "secondary",
			size: "small",
			onClick: onAdd
		}, (0, _wordpress_i18n.__)("Create a variable", "elementor")));
	};
	function Content({ title, message, icon, children }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			gap: 1,
			alignItems: "center",
			justifyContent: "flex-start",
			height: "100%",
			color: "text.secondary",
			sx: {
				p: 2.5,
				pt: 8,
				pb: 5.5
			}
		}, icon, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "subtitle2"
		}, title), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			align: "center",
			variant: "caption",
			maxWidth: "180px"
		}, message), children);
	}

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/no-search-results.tsx
	var NoSearchResults = ({ searchValue, onClear, icon }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			gap: 1,
			alignItems: "center",
			justifyContent: "center",
			p: 2.5,
			color: "text.secondary",
			sx: {
				pb: 3.5,
				pt: 8
			}
		}, icon, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
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
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/variables-manager/hooks/use-auto-edit.ts
	var useAutoEdit = () => {
		const [autoEditVariableId, setAutoEditVariableId] = (0, react.useState)(void 0);
		return {
			autoEditVariableId,
			startAutoEdit: (0, react.useCallback)((variableId) => {
				setAutoEditVariableId(variableId);
			}, []),
			handleAutoEditComplete: (0, react.useCallback)(() => {
				setTimeout(() => {
					setAutoEditVariableId(void 0);
				}, 100);
			}, [])
		};
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/variables-manager/hooks/use-error-navigation.ts
	var useErrorNavigation = () => {
		const currentIndexRef = (0, react.useRef)(0);
		return {
			createNavigationCallback: (0, react.useCallback)((ids, onNavigate, onComplete) => {
				return () => {
					if (!ids?.length) return;
					const currentIndex = currentIndexRef.current;
					const currentId = ids[currentIndex];
					if (currentId) {
						onNavigate(currentId);
						const nextIndex = currentIndex + 1;
						if (nextIndex >= ids.length) {
							onComplete();
							currentIndexRef.current = 0;
						} else currentIndexRef.current = nextIndex;
					}
				};
			}, []),
			resetNavigation: (0, react.useCallback)(() => {
				currentIndexRef.current = 0;
			}, [])
		};
	};

//#endregion
//#region packages/packages/core/editor-variables/src/context/variable-type-context.tsx
	var VariableTypeContext = (0, react.createContext)(null);
	function VariableTypeProvider({ children, propTypeKey }) {
		return /* @__PURE__ */ react.createElement(VariableTypeContext.Provider, { value: propTypeKey }, children);
	}
	function useVariableType() {
		const context = (0, react.useContext)(VariableTypeContext);
		if (context === null) throw new Error("useVariableType must be used within a VariableTypeProvider");
		return getVariableType(context);
	}

//#endregion
//#region packages/packages/core/editor-variables/src/utils/filter-by-search.ts
	function filterBySearch(variables, searchValue) {
		const lowerSearchValue = searchValue.toLowerCase();
		return variables.filter((variable) => variable.label.toLowerCase().includes(lowerSearchValue));
	}

//#endregion
//#region packages/packages/core/editor-variables/src/utils/variables-to-list.ts
	var variablesToList = (variables) => {
		return Object.entries(variables).map(([key, variable]) => ({
			key,
			...variable
		}));
	};
	var toNormalizedVariable = ({ key, label, value, order, sync_to_v3: syncToV3 }) => ({
		key,
		label,
		value,
		order,
		sync_to_v3: syncToV3
	});
	var applySelectionFilters = (variables, variableTypes) => {
		const grouped = {};
		variables.forEach((item) => {
			var _a;
			return (grouped[_a = item.type] ?? (grouped[_a] = [])).push(item);
		});
		return Object.entries(grouped).flatMap(([type, vars]) => {
			const filter = variableTypes[type]?.selectionFilter;
			const normalized = vars.map(toNormalizedVariable);
			return (filter?.(normalized) ?? normalized).map((v) => ({
				...v,
				type
			}));
		});
	};

//#endregion
//#region packages/packages/core/editor-variables/src/hooks/use-prop-variables.ts
	var getVariables = (includeDeleted = true) => {
		const variables = service.variables();
		if (includeDeleted) return variables;
		return Object.fromEntries(Object.entries(variables).filter(([, variable]) => !variable.deleted));
	};
	var hasVariable = (key) => {
		return getVariables()[key] !== void 0;
	};
	var useVariable = (key) => {
		return getVariable(key);
	};
	function getVariable(key) {
		const variables = getVariables();
		if (!variables?.[key]) return null;
		return {
			...variables[key],
			key
		};
	}
	var useFilteredVariables = (searchValue, propTypeKey) => {
		const baseVariables = usePropVariables(propTypeKey);
		const typeFilteredVariables = useVariableSelectionFilter(baseVariables);
		const searchFilteredVariables = filterBySearch(typeFilteredVariables, searchValue);
		return {
			list: searchFilteredVariables.sort((a, b) => {
				return (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER);
			}),
			hasMatches: searchFilteredVariables.length > 0,
			isSourceNotEmpty: typeFilteredVariables.length > 0,
			hasNoCompatibleVariables: baseVariables.length > 0 && typeFilteredVariables.length === 0
		};
	};
	var useVariableSelectionFilter = (variables) => {
		const { selectionFilter } = useVariableType();
		const { propType } = (0, _elementor_editor_controls.useBoundProp)();
		return selectionFilter ? selectionFilter(variables, propType) : variables;
	};
	var usePropVariables = (propKey) => {
		return (0, react.useMemo)(() => normalizeVariables(propKey), [propKey]);
	};
	var getMatchingTypes = (propKey) => {
		const matchingTypes = [];
		const allTypes = getVariableTypes();
		const variableType = getVariableType(propKey);
		Object.entries(allTypes).forEach(([key, typeOptions]) => {
			if (variableType.variableType === typeOptions.variableType) matchingTypes.push(key);
		});
		return matchingTypes;
	};
	var normalizeVariables = (propKey) => {
		const variables = getVariables(false);
		const matchingTypes = getMatchingTypes(propKey);
		return variablesToList(variables).filter((variable) => matchingTypes.includes(variable.type)).map(toNormalizedVariable);
	};
	var extractId = ({ id }) => id;
	var createVariable = (newVariable, options) => {
		return service.create(newVariable, options).then(extractId);
	};
	var updateVariable = (updateId, { value, label, type }, options) => {
		return service.update(updateId, {
			value,
			label,
			type
		}, options).then(extractId);
	};
	var deleteVariable = (deleteId) => {
		return service.delete(deleteId).then(extractId);
	};
	var restoreVariable = (restoreId, label, value, type) => {
		return service.restore(restoreId, label, value, type).then(extractId);
	};

//#endregion
//#region packages/packages/core/editor-variables/src/utils/duplicate-label.ts
	var COPY_SUFFIX = "-Copy";
	var trimToFit = (base, suffix) => {
		const combined = base + suffix;
		if (combined.length <= 50) return combined;
		return base.slice(0, 50 - suffix.length) + suffix;
	};
	var generateDuplicateLabel = (originalLabel, existingLabels) => {
		const labelsSet = new Set(existingLabels);
		const firstCandidate = trimToFit(originalLabel, COPY_SUFFIX);
		if (!labelsSet.has(firstCandidate)) return firstCandidate;
		for (let i = 2; i <= labelsSet.size + 1; i++) {
			const candidate = trimToFit(originalLabel, `${COPY_SUFFIX}-${i}`);
			if (!labelsSet.has(candidate)) return candidate;
		}
		return firstCandidate;
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/variables-manager/hooks/use-variables-manager-state.ts
	var useVariablesManagerState = () => {
		const [variables, setVariables] = (0, react.useState)(() => getVariables(false));
		const [deletedVariables, setDeletedVariables] = (0, react.useState)([]);
		const [isSaveDisabled, setIsSaveDisabled] = (0, react.useState)(false);
		const [isDirty, setIsDirty] = (0, react.useState)(false);
		const [isSaving, setIsSaving] = (0, react.useState)(false);
		const [searchValue, setSearchValue] = (0, react.useState)("");
		(0, react.useEffect)(() => {
			const handleStorageUpdated = () => {
				setVariables(getVariables(false));
				setDeletedVariables([]);
				setIsDirty(false);
			};
			window.addEventListener(STORAGE_UPDATED_EVENT, handleStorageUpdated);
			return () => {
				window.removeEventListener(STORAGE_UPDATED_EVENT, handleStorageUpdated);
			};
		}, []);
		const handleOnChange = (0, react.useCallback)((newVariables) => {
			if (Object.entries(newVariables).some(([id, newVar]) => {
				const existingVar = variables[id];
				if (!existingVar) return true;
				return existingVar.label !== newVar.label || existingVar.value !== newVar.value || existingVar.order !== newVar.order || existingVar.type !== newVar.type || (existingVar.sync_to_v3 ?? false) !== (newVar.sync_to_v3 ?? false);
			})) {
				setVariables({
					...variables,
					...newVariables
				});
				setIsDirty(true);
			}
		}, [variables]);
		const createVariable = (0, react.useCallback)((type, defaultName, defaultValue) => {
			const newId = generateTempId();
			const newVariable = {
				id: newId,
				label: defaultName.trim(),
				value: defaultValue.trim(),
				type
			};
			setVariables((prev) => ({
				...prev,
				[newId]: newVariable
			}));
			setIsDirty(true);
			return newId;
		}, []);
		const duplicateVariable = (0, react.useCallback)((sourceId) => {
			const newId = generateTempId();
			setVariables((prev) => {
				const source = prev[sourceId];
				if (!source || source.deleted) return prev;
				const existingLabels = Object.values(prev).filter((v) => !v.deleted).map((v) => v.label);
				return {
					...prev,
					[newId]: {
						label: generateDuplicateLabel(source.label, existingLabels),
						value: source.value,
						type: source.type
					}
				};
			});
			setIsDirty(true);
			return newId;
		}, []);
		const handleDeleteVariable = (0, react.useCallback)((itemId) => {
			setDeletedVariables((prev) => [...prev, itemId]);
			setVariables((prev) => ({
				...prev,
				[itemId]: {
					...prev[itemId],
					deleted: true
				}
			}));
			setIsDirty(true);
		}, []);
		const handleStartSync = (0, react.useCallback)((itemId) => {
			setVariables((prev) => ({
				...prev,
				[itemId]: {
					...prev[itemId],
					sync_to_v3: true
				}
			}));
			setIsDirty(true);
		}, []);
		const handleStopSync = (0, react.useCallback)((itemId) => {
			setVariables((prev) => ({
				...prev,
				[itemId]: {
					...prev[itemId],
					sync_to_v3: false
				}
			}));
			setIsDirty(true);
		}, []);
		const handleSearch = (searchTerm) => {
			setSearchValue(searchTerm);
		};
		const handleSave = (0, react.useCallback)(async () => {
			const originalVariables = getVariables(false);
			setIsSaving(true);
			const result = await service.batchSave(originalVariables, variables, deletedVariables);
			if (result.success) {
				await service.load();
				const updatedVariables = service.variables();
				setVariables(updatedVariables);
				setDeletedVariables([]);
				setIsDirty(false);
			}
			return { success: result.success };
		}, [variables, deletedVariables]);
		return {
			variables: (0, react.useCallback)(() => {
				const searchFiltered = filterBySearch(applySelectionFilters(variablesToList(variables).filter((v) => !v.deleted), getVariableTypes()), searchValue);
				return Object.fromEntries(searchFiltered.map(({ key, ...rest }) => [key, rest]));
			}, [variables, searchValue])(),
			deletedVariables,
			isDirty,
			isSaveDisabled,
			handleOnChange,
			createVariable,
			duplicateVariable,
			handleDeleteVariable,
			handleStartSync,
			handleStopSync,
			handleSave,
			isSaving,
			handleSearch,
			searchValue,
			setIsSaving,
			setIsSaveDisabled
		};
	};

//#endregion
//#region packages/packages/core/editor-variables/src/hooks/use-quota-permissions.ts
	var useQuotaPermissions = (variableType) => {
		const quotaConfig = {
			...window.ElementorVariablesQuotaConfig ?? {},
			...window.ElementorVariablesQuotaConfigExtended ?? {}
		};
		const hasLegacySupport = quotaConfig[variableType] === void 0 && window.elementorPro;
		const limit = quotaConfig[variableType] || 0;
		const hasPermission = hasLegacySupport || limit > 0;
		return {
			canAdd: () => hasPermission,
			canEdit: () => hasPermission
		};
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/variable-promotion-chip.tsx
	var VariablePromotionChip = (0, react.forwardRef)(({ variableType, upgradeUrl, trackingData }, ref) => {
		const [isOpen, setIsOpen] = (0, react.useState)(false);
		(0, _elementor_editor_ui.useCanvasClickHandler)(isOpen, () => setIsOpen(false));
		const toggle = (0, react.useCallback)(() => {
			setIsOpen((prev) => {
				if (!prev) (0, _elementor_editor_controls.trackViewPromotion)(trackingData);
				return !prev;
			});
		}, [trackingData]);
		(0, react.useImperativeHandle)(ref, () => ({ toggle }), [toggle]);
		const title = (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("%s variables", "elementor"), (0, _elementor_utils.capitalize)(variableType));
		const content = (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("Upgrade to continue creating and editing %s variables.", "elementor"), variableType);
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.PromotionPopover, {
			open: isOpen,
			title,
			content,
			ctaText: (0, _wordpress_i18n.__)("Upgrade now", "elementor"),
			ctaUrl: upgradeUrl,
			onClose: (e) => {
				e.stopPropagation();
				setIsOpen(false);
			},
			onCtaClick: () => (0, _elementor_editor_controls.trackUpgradePromotionClick)(trackingData)
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			onClick: (e) => {
				e.stopPropagation();
				toggle();
			},
			sx: {
				cursor: "pointer",
				display: "inline-flex"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.PromotionChip, null)));
	});

//#endregion
//#region packages/packages/core/editor-variables/src/components/variables-manager/variables-manager-create-menu.tsx
	var TRACKING_DATA$1 = {
		target_name: "variables_manager",
		target_location: "variables_manager",
		location_l1: "create variable menu"
	};
	var SIZE$6 = "tiny";
	var VariableManagerCreateMenu = ({ variables, onCreate, menuState, outlinedTrigger = false }) => {
		const buttonRef = (0, react.useRef)(null);
		const variableTypes = getVariableTypes();
		const menuOptionConfigs = (0, react.useMemo)(() => Object.entries(variableTypes).filter(([, variable]) => !!variable.defaultValue).map(([key, variable]) => ({
			key,
			propTypeKey: variable.propTypeUtil.key,
			variableType: variable.variableType,
			defaultValue: variable.defaultValue || "",
			icon: variable.icon
		})), [variableTypes]);
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			...(0, _elementor_ui.bindTrigger)(menuState),
			ref: buttonRef,
			size: SIZE$6,
			variant: outlinedTrigger ? "outlined" : void 0,
			"aria-label": (0, _wordpress_i18n.__)("Add variable", "elementor")
		}, /* @__PURE__ */ react.createElement(_elementor_icons.PlusIcon, { fontSize: SIZE$6 })), /* @__PURE__ */ react.createElement(_elementor_ui.Menu, {
			disablePortal: true,
			MenuListProps: { dense: true },
			PaperProps: { elevation: 6 },
			...(0, _elementor_ui.bindMenu)(menuState),
			anchorEl: buttonRef.current,
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "right"
			},
			"data-testid": "variable-manager-create-menu"
		}, menuOptionConfigs.map((config) => /* @__PURE__ */ react.createElement(MenuOption, {
			key: config.key,
			config,
			variables,
			onCreate,
			onClose: menuState.close
		}))));
	};
	var MenuOption = ({ config, variables, onCreate, onClose }) => {
		const promotionRef = (0, react.useRef)(null);
		const userQuotaPermissions = useQuotaPermissions(config.propTypeKey);
		const displayName = (0, _elementor_utils.capitalize)(config.variableType);
		const isDisabled = !userQuotaPermissions.canAdd();
		const handleClick = () => {
			if (isDisabled) {
				promotionRef.current?.toggle();
				return;
			}
			const defaultName = getDefaultName(variables, config.variableType);
			onCreate(config.key, defaultName, config.defaultValue);
			trackVariablesManagerEvent({
				action: "add",
				varType: config.variableType
			});
			onClose();
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, {
			onClick: handleClick,
			sx: {
				gap: 1.5,
				cursor: "pointer"
			}
		}, (0, react.createElement)(config.icon, {
			fontSize: SIZE$6,
			color: isDisabled ? "disabled" : "action"
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			color: isDisabled ? "text.disabled" : "text.primary"
		}, displayName), isDisabled && /* @__PURE__ */ react.createElement(VariablePromotionChip, {
			variableType: config.variableType,
			upgradeUrl: `https://go.elementor.com/go-pro-manager-${config.variableType}-variable/`,
			ref: promotionRef,
			trackingData: TRACKING_DATA$1
		}));
	};
	var getDefaultName = (variables, baseName) => {
		const pattern = new RegExp(`^${baseName}-(\\d+)$`, "i");
		const takenNumbers = /* @__PURE__ */ new Set();
		Object.values(variables).forEach((variable) => {
			const match = variable.label.match(pattern);
			if (match) takenNumbers.add(parseInt(match[1], 10));
		});
		let counter = 1;
		while (takenNumbers.has(counter)) counter++;
		return `${baseName}-${counter}`;
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/variables-manager/ui/variable-table-cell.tsx
	var VariableTableCell = ({ children, isHeader, width, maxWidth, align, noPadding, sx }) => {
		const baseSx = {
			maxWidth: maxWidth ?? 150,
			cursor: "initial",
			typography: "caption",
			...isHeader && {
				color: "text.primary",
				fontWeight: "bold"
			},
			...isHeader && !noPadding && { padding: "10px 16px" },
			...width && { width },
			...sx
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.TableCell, {
			size: "small",
			padding: noPadding ? "none" : void 0,
			align,
			sx: baseSx
		}, children);
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/fields/label-field.tsx
	function isLabelEqual(a, b) {
		return a.trim().toLowerCase() === b.trim().toLowerCase();
	}
	var useLabelError = (initialError) => {
		const [error, setError] = (0, react.useState)(initialError ?? {
			value: "",
			message: ""
		});
		return {
			labelFieldError: error,
			setLabelFieldError: setError
		};
	};
	var LabelField = ({ value, error, onChange, id, onErrorChange, size = "tiny", focusOnShow = false, selectOnShow = false, showWarningInfotip = false, variables, onKeyDown }) => {
		const [label, setLabel] = (0, react.useState)(value);
		const [errorMessage, setErrorMessage] = (0, react.useState)("");
		const fieldRef = (0, react.useRef)(null);
		const handleChange = (newValue) => {
			setLabel(newValue);
			const errorMsg2 = validateLabel(newValue, variables);
			setErrorMessage(errorMsg2);
			onErrorChange?.(errorMsg2);
			onChange(isLabelEqual(newValue, error?.value ?? "") || errorMsg2 ? "" : newValue);
		};
		let errorMsg = errorMessage;
		if (isLabelEqual(label, error?.value ?? "") && error?.message) errorMsg = error.message;
		const hintMsg = !errorMsg ? labelHint(label) : "";
		const textField = /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			ref: fieldRef,
			id,
			size,
			fullWidth: true,
			value: label,
			error: !!errorMsg,
			onChange: (e) => handleChange(e.target.value),
			inputProps: {
				maxLength: 50,
				...selectOnShow && { onFocus: (e) => e.target.select() },
				"aria-label": "Name",
				onKeyDown
			},
			autoFocus: focusOnShow
		});
		if (showWarningInfotip) {
			const tooltipWidth = Math.max(240, fieldRef.current?.getBoundingClientRect().width ?? 240);
			return /* @__PURE__ */ react.createElement(_elementor_editor_ui.WarningInfotip, {
				open: Boolean(errorMsg || hintMsg),
				text: errorMsg || hintMsg,
				placement: "bottom-start",
				width: tooltipWidth,
				offset: [0, -15],
				...hintMsg && { hasError: false }
			}, textField);
		}
		return textField;
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/variables-manager/variable-editable-cell.tsx
	var VariableEditableCell = react.memo(({ initialValue, children, editableElement, onChange, prefixElement, autoEdit = false, onRowRef, onAutoEditComplete, gap = 1, fieldType, disabled = false }) => {
		const [value, setValue] = (0, react.useState)(initialValue);
		const [isEditing, setIsEditing] = (0, react.useState)(false);
		const { labelFieldError, setLabelFieldError } = useLabelError();
		const [valueFieldError, setValueFieldError] = (0, react.useState)("");
		const rowRef = (0, react.useRef)(null);
		const handleSave = (0, react.useCallback)(() => {
			if (!(fieldType === "label" && labelFieldError?.message || fieldType === "value" && valueFieldError)) onChange(value);
			setIsEditing(false);
		}, [
			value,
			onChange,
			fieldType,
			labelFieldError,
			valueFieldError
		]);
		(0, react.useEffect)(() => {
			onRowRef?.(rowRef?.current);
		}, [onRowRef]);
		(0, react.useEffect)(() => {
			if (autoEdit && !isEditing && !disabled) {
				setIsEditing(true);
				onAutoEditComplete?.();
			}
		}, [
			autoEdit,
			isEditing,
			onAutoEditComplete,
			disabled
		]);
		const handleDoubleClick = () => {
			if (disabled) return;
			setIsEditing(true);
		};
		const handleKeyDown = (event) => {
			if (disabled) return;
			if (event.key === "Enter") handleSave();
			else if (event.key === "Escape") setIsEditing(false);
			if (event.key === " " && !isEditing) {
				event.preventDefault();
				setIsEditing(true);
			}
		};
		const handleChange = (0, react.useCallback)((newValue) => {
			setValue(newValue);
		}, []);
		const handleValidationChange = (0, react.useCallback)((errorMsg) => {
			if (fieldType === "label") setLabelFieldError({
				value,
				message: errorMsg
			});
			else setValueFieldError(errorMsg);
		}, [
			fieldType,
			value,
			setLabelFieldError,
			setValueFieldError
		]);
		let currentError;
		if (fieldType === "label") currentError = labelFieldError;
		else if (fieldType === "value") currentError = {
			value,
			message: valueFieldError
		};
		const editableContent = editableElement({
			value,
			onChange: handleChange,
			onValidationChange: handleValidationChange,
			error: currentError
		});
		if (isEditing) return /* @__PURE__ */ react.createElement(_elementor_ui.ClickAwayListener, { onClickAway: handleSave }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			ref: rowRef,
			direction: "row",
			alignItems: "center",
			gap,
			onDoubleClick: handleDoubleClick,
			onKeyDown: handleKeyDown,
			tabIndex: 0,
			role: "button",
			"aria-label": "Double click or press Space to edit"
		}, prefixElement, editableContent));
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			ref: rowRef,
			direction: "row",
			alignItems: "center",
			gap,
			onDoubleClick: handleDoubleClick,
			onKeyDown: handleKeyDown,
			tabIndex: disabled ? -1 : 0,
			role: "button",
			"aria-label": disabled ? "" : "Double click or press Space to edit"
		}, prefixElement, children);
	});

//#endregion
//#region packages/packages/core/editor-variables/src/components/variables-manager/ui/variable-edit-menu.tsx
	var VariableEditMenu = ({ menuActions, disabled, itemId }) => {
		const menuState = (0, _elementor_ui.usePopupState)({ variant: "popover" });
		const triggerProps = (0, _elementor_ui.bindTrigger)(menuState);
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			...triggerProps,
			disabled,
			size: "tiny",
			onClick: (e) => {
				e.stopPropagation();
				triggerProps.onClick?.(e);
			}
		}, /* @__PURE__ */ react.createElement(_elementor_icons.DotsVerticalIcon, { fontSize: "tiny" })), /* @__PURE__ */ react.createElement(_elementor_ui.Menu, {
			disablePortal: true,
			MenuListProps: { dense: true },
			PaperProps: { elevation: 6 },
			...(0, _elementor_ui.bindMenu)(menuState),
			anchorEl: menuState.anchorEl,
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "right"
			},
			open: menuState.isOpen,
			onClose: menuState.close
		}, menuActions.map((action) => /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, {
			key: action.name,
			onClick: (e) => {
				e.stopPropagation();
				action.onClick?.(itemId);
				menuState.close();
			},
			sx: {
				color: action.color,
				gap: 1
			}
		}, action.icon && (0, react.createElement)(action.icon, { fontSize: "inherit" }), " ", action.name))));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/variables-manager/ui/variable-table-row.tsx
	var TRACKING_DATA = {
		target_name: "variables_manager",
		target_location: "variables_manager"
	};
	var VariableRow = (props) => {
		const { row, variables, handleOnChange, autoEditVariableId, onAutoEditComplete, onFieldError, menuActions, handleRowRef, itemProps, showDropIndication, triggerProps, itemStyle, triggerStyle, isDragged, dropPosition, setTriggerRef, isSorting } = props;
		const promotionRef = (0, react.useRef)(null);
		const isDisabled = !useQuotaPermissions(row.type).canEdit();
		const showIndicationBefore = showDropIndication && dropPosition === "before";
		const showIndicationAfter = showDropIndication && dropPosition === "after";
		return /* @__PURE__ */ react.createElement(_elementor_ui.TableRow, {
			...itemProps,
			ref: itemProps.ref,
			selected: isDragged,
			sx: {
				...isDisabled && { "& td, & th": { color: "text.disabled" } },
				...showIndicationBefore && { "& td, & th": {
					borderTop: "2px solid",
					borderTopColor: "primary.main"
				} },
				...showIndicationAfter && { "& td, & th": {
					borderBottom: "2px solid",
					borderBottomColor: "primary.main"
				} },
				"&:hover, &:focus-within": {
					backgroundColor: "action.hover",
					"& [role=\"toolbar\"], & [draggable]": { opacity: 1 }
				},
				"& [role=\"toolbar\"], & [draggable]": { opacity: 0 }
			},
			style: {
				...itemStyle,
				...triggerStyle
			},
			onClick: () => {
				if (isDisabled) promotionRef.current?.toggle();
			}
		}, /* @__PURE__ */ react.createElement(VariableTableCell, {
			noPadding: true,
			width: 10,
			maxWidth: 10
		}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: "small",
			ref: setTriggerRef,
			...triggerProps,
			disabled: isSorting,
			draggable: true
		}, /* @__PURE__ */ react.createElement(_elementor_icons.GripVerticalIcon, { fontSize: "inherit" }))), /* @__PURE__ */ react.createElement(VariableTableCell, null, /* @__PURE__ */ react.createElement(VariableEditableCell, {
			initialValue: row.name,
			onChange: (value) => {
				if (value !== row.name && !isDisabled) handleOnChange({
					...variables,
					[row.id]: {
						...variables[row.id],
						label: value
					}
				});
			},
			prefixElement: (0, react.createElement)(row.icon, {
				fontSize: "inherit",
				color: isDisabled ? "disabled" : "inherit"
			}),
			editableElement: ({ value, onChange, onValidationChange, error }) => /* @__PURE__ */ react.createElement(LabelField, {
				id: "variable-label-" + row.id,
				size: "tiny",
				value,
				onChange,
				onErrorChange: (errorMsg) => {
					onValidationChange?.(errorMsg);
					onFieldError?.(!!errorMsg);
				},
				error,
				focusOnShow: true,
				selectOnShow: autoEditVariableId === row.id,
				showWarningInfotip: true,
				variables
			}),
			autoEdit: autoEditVariableId === row.id && !isDisabled,
			onRowRef: handleRowRef(row.id),
			onAutoEditComplete: autoEditVariableId === row.id ? onAutoEditComplete : void 0,
			fieldType: "label",
			disabled: isDisabled
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.EllipsisWithTooltip, {
			title: row.name,
			sx: { border: "4px solid transparent" }
		}, row.name))), /* @__PURE__ */ react.createElement(VariableTableCell, null, /* @__PURE__ */ react.createElement(VariableEditableCell, {
			initialValue: row.value,
			onChange: (value) => {
				if (value !== row.value && !isDisabled) handleOnChange({
					...variables,
					[row.id]: {
						...variables[row.id],
						value
					}
				});
			},
			editableElement: ({ value, onChange, onValidationChange, error }) => row.valueField?.({
				value,
				onChange,
				onPropTypeKeyChange: (type) => {
					if (!isDisabled && type !== row.type) handleOnChange({
						...variables,
						[row.id]: {
							...variables[row.id],
							type
						}
					});
				},
				propTypeKey: row.type,
				onValidationChange: (errorMsg) => {
					onValidationChange?.(errorMsg);
					onFieldError?.(!!errorMsg);
				},
				error
			}) ?? /* @__PURE__ */ react.createElement(react.Fragment, null),
			onRowRef: handleRowRef(row.id),
			gap: .25,
			fieldType: "value",
			disabled: isDisabled
		}, row.startIcon && row.startIcon({ value: row.value }), /* @__PURE__ */ react.createElement(_elementor_editor_ui.EllipsisWithTooltip, {
			title: row.value,
			sx: {
				border: "4px solid transparent",
				lineHeight: "1",
				pt: .25
			}
		}, row.value))), /* @__PURE__ */ react.createElement(VariableTableCell, {
			align: "right",
			noPadding: true,
			width: 16,
			maxWidth: 16,
			sx: { paddingInlineEnd: 1 }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			role: "toolbar",
			direction: "row",
			justifyContent: "flex-end",
			alignItems: "center"
		}, isDisabled && /* @__PURE__ */ react.createElement(VariablePromotionChip, {
			variableType: row.variableType,
			upgradeUrl: `https://go.elementor.com/renew-license-manager-${row.variableType}-variable`,
			ref: promotionRef,
			trackingData: TRACKING_DATA
		}), /* @__PURE__ */ react.createElement(VariableEditMenu, {
			menuActions: menuActions(row.id),
			disabled: isSorting,
			itemId: row.id
		}))));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/variables-manager/variables-manager-table.tsx
	var VariablesManagerTable = ({ menuActions, variables, onChange: handleOnChange, autoEditVariableId, onAutoEditComplete, onFieldError }) => {
		const tableContainerRef = (0, react.useRef)(null);
		const variableRowRefs = (0, react.useRef)(/* @__PURE__ */ new Map());
		(0, react.useEffect)(() => {
			if (autoEditVariableId && tableContainerRef.current) {
				const rowElement = variableRowRefs.current.get(autoEditVariableId);
				if (rowElement) setTimeout(() => {
					rowElement.scrollIntoView({
						behavior: "smooth",
						block: "center",
						inline: "nearest"
					});
				}, 100);
			}
		}, [autoEditVariableId]);
		const handleRowRef = (id) => (ref) => {
			if (ref) variableRowRefs.current.set(id, ref);
			else variableRowRefs.current.delete(id);
		};
		const ids = Object.keys(variables).sort(sortVariablesOrder(variables));
		const rows = ids.map((id) => {
			const variable = variables[id];
			const variableType = getVariableType(variable.type);
			if (!variableType) return null;
			return {
				id,
				type: variable.type,
				name: variable.label,
				value: variable.value,
				...variableType
			};
		}).filter(Boolean);
		const tableSX = {
			minWidth: 250,
			tableLayout: "fixed"
		};
		const handleReorder = (newIds) => {
			const updatedVariables = { ...variables };
			newIds.forEach((id, index) => {
				const current = updatedVariables[id];
				if (!current) return;
				updatedVariables[id] = Object.assign({}, current, { order: index + 1 });
			});
			handleOnChange(updatedVariables);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.TableContainer, {
			ref: tableContainerRef,
			sx: { overflow: "initial" }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Table, {
			sx: tableSX,
			"aria-label": "Variables manager list with drag and drop reordering",
			stickyHeader: true
		}, /* @__PURE__ */ react.createElement(_elementor_ui.TableHead, null, /* @__PURE__ */ react.createElement(_elementor_ui.TableRow, null, /* @__PURE__ */ react.createElement(VariableTableCell, {
			isHeader: true,
			noPadding: true,
			width: 10,
			maxWidth: 10
		}), /* @__PURE__ */ react.createElement(VariableTableCell, { isHeader: true }, (0, _wordpress_i18n.__)("Name", "elementor")), /* @__PURE__ */ react.createElement(VariableTableCell, { isHeader: true }, (0, _wordpress_i18n.__)("Value", "elementor")), /* @__PURE__ */ react.createElement(VariableTableCell, {
			isHeader: true,
			noPadding: true,
			width: 16,
			maxWidth: 16
		}))), /* @__PURE__ */ react.createElement(_elementor_ui.TableBody, null, /* @__PURE__ */ react.createElement(_elementor_ui.UnstableSortableProvider, {
			value: ids,
			onChange: handleReorder,
			variant: "static",
			restrictAxis: true,
			dragOverlay: ({ children: dragOverlayChildren, ...dragOverlayProps }) => /* @__PURE__ */ react.createElement(_elementor_ui.Table, {
				sx: tableSX,
				...dragOverlayProps
			}, /* @__PURE__ */ react.createElement(_elementor_ui.TableBody, null, dragOverlayChildren))
		}, rows.map((row) => /* @__PURE__ */ react.createElement(_elementor_ui.UnstableSortableItem, {
			key: row.id,
			id: row.id,
			render: (props) => /* @__PURE__ */ react.createElement(VariableRow, {
				...props,
				row,
				variables,
				handleOnChange,
				autoEditVariableId,
				onAutoEditComplete,
				onFieldError,
				menuActions,
				handleRowRef
			})
		}))))));
	};
	function sortVariablesOrder(variables) {
		return (a, b) => {
			return (variables[a]?.order ?? Number.MAX_SAFE_INTEGER) - (variables[b]?.order ?? Number.MAX_SAFE_INTEGER);
		};
	}

//#endregion
//#region packages/packages/core/editor-variables/src/components/variables-manager/variables-manager-panel.tsx
	var STOP_SYNC_MESSAGE_KEY = "stop-sync-variable";
	function VariablesManagerPanelEmbedded({ onRequestClose, onExposeCloseAttempt }) {
		return /* @__PURE__ */ react.createElement(VariablesManagerPanelContent, {
			onRequestClose,
			onExposeCloseAttempt
		});
	}
	function VariablesManagerPanelContent({ onRequestClose, onExposeCloseAttempt }) {
		const { open: openSaveChangesDialog, close: closeSaveChangesDialog, isOpen: isSaveChangesDialogOpen } = (0, _elementor_editor_ui.useDialog)();
		const [isStopSyncSuppressed] = (0, _elementor_editor_current_user.useSuppressedMessage)(STOP_SYNC_MESSAGE_KEY);
		const createMenuState = (0, _elementor_ui.usePopupState)({ variant: "popover" });
		const { variables, isDirty, searchValue, isSaveDisabled, handleOnChange, createVariable, duplicateVariable, handleDeleteVariable, handleStartSync: startSyncFromState, handleStopSync: stopSyncFromState, handleSave, isSaving, handleSearch, setIsSaving, setIsSaveDisabled } = useVariablesManagerState();
		const { autoEditVariableId, startAutoEdit, handleAutoEditComplete } = useAutoEdit();
		const { createNavigationCallback, resetNavigation } = useErrorNavigation();
		const [deleteConfirmation, setDeleteConfirmation] = (0, react.useState)(null);
		const [stopSyncConfirmation, setStopSyncConfirmation] = (0, react.useState)(null);
		const [serverError, setServerError] = (0, react.useState)(null);
		usePreventUnload(isDirty);
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
		const handleCreateVariable = (0, react.useCallback)((type, defaultName, defaultValue) => {
			const newId = createVariable(type, defaultName, defaultValue);
			if (newId) startAutoEdit(newId);
		}, [createVariable, startAutoEdit]);
		const handleSaveClick = async () => {
			try {
				setServerError(null);
				resetNavigation();
				const result = await handleSave();
				trackVariablesManagerEvent({ action: "saveChanges" });
				return result;
			} catch (error) {
				const mappedError = mapServerError(error);
				const duplicatedIds = mappedError?.action?.data?.duplicatedIds;
				if (mappedError && "label" === mappedError.field) {
					if (duplicatedIds && mappedError.action) mappedError.action.callback = createNavigationCallback(duplicatedIds, startAutoEdit, () => {
						setIsSaveDisabled(false);
					});
					setServerError(mappedError);
					setIsSaveDisabled(true);
					resetNavigation();
				}
				return {
					success: false,
					error: mappedError
				};
			} finally {
				setIsSaving(false);
			}
		};
		const handleDeleteVariableWithConfirmation = (0, react.useCallback)((itemId) => {
			handleDeleteVariable(itemId);
			setDeleteConfirmation(null);
		}, [handleDeleteVariable]);
		const commitStopSync = (0, react.useCallback)((itemId) => {
			stopSyncFromState(itemId);
			const variable = variables[itemId];
			if (variable) trackVariableSyncToV3({
				variableLabel: variable.label,
				action: "unsync"
			});
		}, [stopSyncFromState, variables]);
		const handleStartSync = (0, react.useCallback)((itemId) => {
			startSyncFromState(itemId);
			const variable = variables[itemId];
			if (variable) trackVariableSyncToV3({
				variableLabel: variable.label,
				action: "sync"
			});
		}, [startSyncFromState, variables]);
		const handleStopSync = (0, react.useCallback)((itemId) => {
			if (!isStopSyncSuppressed) setStopSyncConfirmation(itemId);
			else commitStopSync(itemId);
		}, [isStopSyncSuppressed, commitStopSync]);
		const buildMenuActions = (0, react.useCallback)((variableId) => {
			const variable = variables[variableId];
			if (!variable) return [];
			const typeActions = getMenuActionsForVariable(variable.type, {
				variable,
				variableId,
				handlers: {
					onStartSync: handleStartSync,
					onStopSync: handleStopSync
				}
			});
			const duplicateAction = {
				name: (0, _wordpress_i18n.__)("Duplicate", "elementor"),
				icon: _elementor_icons.CopyIcon,
				color: "text.primary",
				onClick: (itemId) => {
					const newId = duplicateVariable(itemId);
					startAutoEdit(newId);
					trackVariablesManagerEvent({
						action: "duplicate",
						varType: getVariableType(variable.type)?.variableType
					});
				}
			};
			const deleteAction = {
				name: (0, _wordpress_i18n.__)("Delete", "elementor"),
				icon: _elementor_icons.TrashIcon,
				color: "error.main",
				onClick: (itemId) => {
					const v = variables[itemId];
					if (v) {
						setDeleteConfirmation({
							id: itemId,
							label: v.label
						});
						trackVariablesManagerEvent({
							action: "delete",
							varType: getVariableType(v.type)?.variableType
						});
					}
				}
			};
			return [
				...typeActions,
				duplicateAction,
				deleteAction
			];
		}, [
			variables,
			handleStartSync,
			handleStopSync,
			duplicateVariable,
			startAutoEdit
		]);
		const hasVariables = Object.keys(variables).length > 0;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "column",
			sx: {
				height: "100%",
				width: "100%",
				flex: 1,
				minHeight: 0,
				overflow: "hidden"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			spacing: 1,
			width: "100%",
			sx: {
				flexShrink: 0,
				px: 2,
				pb: 1
			}
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.SearchField, {
			placeholder: (0, _wordpress_i18n.__)("Search", "elementor"),
			value: searchValue,
			onSearch: handleSearch,
			sx: {
				flex: 1,
				minWidth: 0,
				px: 0,
				py: 0,
				display: "flex",
				alignItems: "center",
				alignSelf: "stretch"
			}
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			flexShrink: 0,
			alignItems: "center"
		} }, /* @__PURE__ */ react.createElement(VariableManagerCreateMenu, {
			outlinedTrigger: true,
			onCreate: handleCreateVariable,
			variables,
			menuState: createMenuState
		}))), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, { sx: { width: "100%" } }), /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelBody, { sx: {
			display: "flex",
			flexDirection: "column",
			flex: 1,
			minHeight: 0
		} }, hasVariables && /* @__PURE__ */ react.createElement(VariablesManagerTable, {
			menuActions: buildMenuActions,
			variables,
			onChange: handleOnChange,
			autoEditVariableId,
			onAutoEditComplete: handleAutoEditComplete,
			onFieldError: setIsSaveDisabled
		}), !hasVariables && searchValue && /* @__PURE__ */ react.createElement(NoSearchResults, {
			searchValue,
			onClear: () => handleSearch(""),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.ColorFilterIcon, { fontSize: "large" })
		}), !hasVariables && !searchValue && /* @__PURE__ */ react.createElement(EmptyState, {
			title: (0, _wordpress_i18n.__)("Create your first variable", "elementor"),
			message: (0, _wordpress_i18n.__)("Variables are saved attributes that you can apply anywhere on your site.", "elementor"),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.ColorFilterIcon, { fontSize: "large" }),
			onAdd: createMenuState.open
		})), /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelFooter, null, /* @__PURE__ */ react.createElement(_elementor_ui.Infotip, {
			placement: "right",
			open: !!serverError,
			content: serverError ? /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
				severity: serverError.severity ?? "error",
				action: serverError.action?.label ? /* @__PURE__ */ react.createElement(_elementor_ui.AlertAction, { onClick: serverError.action.callback }, serverError.action.label) : void 0,
				onClose: !serverError.action?.label ? () => {
					setServerError(null);
					setIsSaveDisabled(false);
				} : void 0,
				icon: serverError.IconComponent ? /* @__PURE__ */ react.createElement(serverError.IconComponent, null) : /* @__PURE__ */ react.createElement(_elementor_icons.AlertTriangleFilledIcon, null)
			}, /* @__PURE__ */ react.createElement(_elementor_ui.AlertTitle, null, serverError.message), serverError.action?.message) : null,
			arrow: false,
			slotProps: { popper: { modifiers: [{
				name: "offset",
				options: { offset: [-10, 10] }
			}] } }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			fullWidth: true,
			size: "small",
			color: "global",
			variant: "contained",
			disabled: isSaveDisabled || !isDirty || isSaving,
			onClick: handleSaveClick,
			loading: isSaving
		}, (0, _wordpress_i18n.__)("Save changes", "elementor"))))), deleteConfirmation && /* @__PURE__ */ react.createElement(DeleteConfirmationDialog, {
			open: true,
			label: deleteConfirmation.label,
			onConfirm: () => handleDeleteVariableWithConfirmation(deleteConfirmation.id),
			closeDialog: () => setDeleteConfirmation(null)
		}), stopSyncConfirmation && /* @__PURE__ */ react.createElement(StopSyncConfirmationDialog, {
			open: true,
			onClose: () => setStopSyncConfirmation(null),
			onConfirm: () => {
				commitStopSync(stopSyncConfirmation);
				setStopSyncConfirmation(null);
			}
		}), isSaveChangesDialogOpen && /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.Title, { onClose: closeSaveChangesDialog }, (0, _wordpress_i18n.__)("You have unsaved changes", "elementor")), /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.Content, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.ContentText, null, (0, _wordpress_i18n.__)("You have unsaved changes in the Variables Manager.", "elementor")), /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.ContentText, null, (0, _wordpress_i18n.__)("To avoid losing your updates, save your changes before leaving.", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.Actions, { actions: {
			discard: {
				label: (0, _wordpress_i18n.__)("Discard", "elementor"),
				action: () => {
					closeSaveChangesDialog();
					onRequestClose();
				}
			},
			confirm: {
				label: (0, _wordpress_i18n.__)("Save", "elementor"),
				action: async () => {
					const result = await handleSaveClick();
					closeSaveChangesDialog();
					if (result?.success) onRequestClose();
				}
			}
		} })));
	}
	var usePreventUnload = (isDirty) => {
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
	var StopSyncConfirmationDialog = ({ open, onClose, onConfirm }) => {
		const [, suppressStopSyncMessage] = (0, _elementor_editor_current_user.useSuppressedMessage)(STOP_SYNC_MESSAGE_KEY);
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog, {
			open,
			onClose
		}, /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Title, {
			icon: _elementor_icons.ColorFilterIcon,
			iconColor: "primary"
		}, (0, _wordpress_i18n.__)("Stop syncing variable color", "elementor")), /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Content, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.ContentText, null, (0, _wordpress_i18n.__)("This will disconnect the variable color from Global Colors. Existing uses on your site will automatically switch to a default color.", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_editor_ui.ConfirmationDialog.Actions, {
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
//#region packages/packages/core/editor-variables/src/components/global-styles-import-listener.tsx
	function GlobalStylesImportListener() {
		(0, react.useEffect)(() => {
			const handleGlobalStylesImported = () => {
				service.load();
			};
			window.addEventListener(_elementor_editor_canvas.GLOBAL_STYLES_IMPORTED_EVENT, handleGlobalStylesImported);
			return () => {
				window.removeEventListener(_elementor_editor_canvas.GLOBAL_STYLES_IMPORTED_EVENT, handleGlobalStylesImported);
			};
		}, []);
		return null;
	}

//#endregion
//#region packages/packages/core/editor-variables/src/utils/extract-variables-from-style-value.ts
	var VARIABLE_TYPE_KEYS = [
		"global-color-variable",
		"global-font-variable",
		"global-size-variable",
		"global-custom-size-variable"
	];
	function tryExtractVariable(value) {
		for (const key of VARIABLE_TYPE_KEYS) {
			const propUtil = (0, _elementor_editor_props.getPropSchemaFromCache)(key);
			if (propUtil?.isValid(value)) return {
				type: key,
				variableId: propUtil.extract(value)
			};
		}
		return null;
	}
	function traverse(value, path, result) {
		const extracted = tryExtractVariable(value);
		if (extracted) {
			result.push({
				...extracted,
				controlPath: path.join(".")
			});
			return;
		}
		if ((0, _elementor_editor_props.isTransformable)(value)) {
			traverse(value.value, path, result);
			return;
		}
		if (value && typeof value === "object") for (const [key, val] of Object.entries(value)) traverse(val, [...path, key], result);
	}
	function extractVariablesFromStyleValue(styleValue) {
		const result = [];
		traverse(styleValue, [], result);
		return result;
	}

//#endregion
//#region packages/packages/core/editor-variables/src/components/mcp-variable-connect-listener.tsx
	function McpVariableConnectListener() {
		(0, react.useEffect)(() => {
			const handleMcpStylesApplied = (event) => {
				const { styleValue } = event.detail;
				extractVariablesFromStyleValue(styleValue).forEach(({ type, controlPath }) => {
					trackVariableEvent({
						varType: type,
						controlPath,
						action: "connect",
						executedBy: "mcp_tool"
					});
				});
			};
			window.addEventListener(_elementor_editor_mcp.MCP_STYLES_APPLIED_EVENT, handleMcpStylesApplied);
			return () => {
				window.removeEventListener(_elementor_editor_mcp.MCP_STYLES_APPLIED_EVENT, handleMcpStylesApplied);
			};
		}, []);
		return null;
	}

//#endregion
//#region packages/packages/core/editor-variables/src/utils/unlink-variable.ts
	function transformValueBeforeUnlink(variable, propTypeKey) {
		const { valueTransformer } = getVariableType(propTypeKey);
		if (valueTransformer) return valueTransformer(variable.value, variable.type);
		return variable.value;
	}
	function createUnlinkHandler(variable, propTypeKey, setValue) {
		return () => {
			const { fallbackPropTypeUtil } = getVariableType(propTypeKey);
			const transformedValue = transformValueBeforeUnlink(variable, propTypeKey);
			setValue(fallbackPropTypeUtil.create(transformedValue));
		};
	}

//#endregion
//#region packages/packages/core/editor-variables/src/context/variable-selection-popover.context.tsx
	var PopoverContentRefContext = (0, react.createContext)(null);
	var PopoverContentRefContextProvider = ({ children }) => {
		const [anchorRef, setAnchorRef] = (0, react.useState)(null);
		return /* @__PURE__ */ react.createElement(PopoverContentRefContext.Provider, { value: anchorRef }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { ref: setAnchorRef }, children));
	};
	var usePopoverContentRef = () => {
		return (0, react.useContext)(PopoverContentRefContext);
	};

//#endregion
//#region packages/packages/core/editor-variables/src/hooks/use-initial-value.ts
	var useInitialValue = () => {
		const { value: initial } = (0, _elementor_editor_controls.useBoundProp)();
		const hasAssignedVariable = hasVariableType(initial?.$$type) && Boolean(initial?.value);
		const variable = useVariable(hasAssignedVariable ? initial.value : "");
		if (hasAssignedVariable) return variable ? variable.value : "";
		return initial?.value ?? "";
	};

//#endregion
//#region packages/packages/core/editor-variables/src/hooks/use-variable-bound-prop.ts
	var useVariableBoundProp = () => {
		const { propTypeUtil } = useVariableType();
		const boundProp = (0, _elementor_editor_controls.useBoundProp)(propTypeUtil);
		return {
			...boundProp,
			setVariableValue: (value) => resolveBoundPropAndSetValue(value, boundProp),
			variableId: boundProp.value ?? boundProp.placeholder
		};
	};
	var resolveBoundPropAndSetValue = (value, boundProp) => {
		const propValue = unwrapValue(boundProp.value);
		const placeholder = unwrapValue(boundProp.placeholder);
		const newValue = unwrapValue(value);
		if (!propValue && placeholder === newValue) return boundProp.setValue(null);
		return boundProp.setValue(value);
	};
	var unwrapValue = (input) => {
		if ((0, _elementor_editor_props.isTransformable)(input)) return input.value;
		return input;
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/form-field.tsx
	var FormField = ({ id, label, errorMsg, noticeMsg, children }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			container: true,
			gap: .75,
			alignItems: "center"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 12
		}, /* @__PURE__ */ react.createElement(_elementor_ui.FormLabel, {
			htmlFor: id,
			size: "tiny"
		}, label)), /* @__PURE__ */ react.createElement(_elementor_ui.Grid, {
			item: true,
			xs: 12
		}, children, errorMsg && /* @__PURE__ */ react.createElement(_elementor_ui.FormHelperText, { error: true }, errorMsg), noticeMsg && /* @__PURE__ */ react.createElement(_elementor_ui.FormHelperText, null, noticeMsg)));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/variable-creation.tsx
	var SIZE$5 = "tiny";
	var VariableCreation = ({ onGoBack, onClose }) => {
		const { icon: VariableIcon, valueField: ValueField, propTypeUtil } = useVariableType();
		const { setVariableValue: setVariable, path } = useVariableBoundProp();
		const { propType } = (0, _elementor_editor_controls.useBoundProp)();
		const [value, setValue] = (0, react.useState)(useInitialValue());
		const [label, setLabel] = (0, react.useState)("");
		const [errorMessage, setErrorMessage] = (0, react.useState)("");
		const [valueFieldError, setValueFieldError] = (0, react.useState)("");
		const [propTypeKey, setPropTypeKey] = (0, react.useState)(propTypeUtil.key);
		const { labelFieldError, setLabelFieldError } = useLabelError();
		const resetFields = () => {
			setValue("");
			setLabel("");
			setErrorMessage("");
			setValueFieldError("");
		};
		const closePopover = () => {
			resetFields();
			onClose();
		};
		const handleCreateAndTrack = () => {
			createVariable({
				value,
				label,
				type: propTypeKey
			}, { eventData: { controlPath: path.join(".") } }).then((key) => {
				setVariable(key);
				closePopover();
			}).catch((error) => {
				const mappedError = mapServerError(error);
				if (mappedError && "label" === mappedError.field) {
					setLabel("");
					setLabelFieldError({
						value: label,
						message: mappedError.message
					});
					return;
				}
				setErrorMessage(ERROR_MESSAGES.UNEXPECTED_ERROR);
			});
		};
		const hasEmptyFields = () => {
			if ("" === label.trim()) return true;
			if ("string" === typeof value) return "" === value.trim();
			return false === Boolean(value);
		};
		const hasErrors = () => {
			return !!errorMessage;
		};
		const isSubmitDisabled = hasEmptyFields() || hasErrors();
		const handleKeyDown = (event) => {
			if (event.key === "Enter" && !isSubmitDisabled) {
				event.preventDefault();
				handleCreateAndTrack();
			}
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.SectionPopoverBody, { height: "auto" }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverHeader, {
			icon: /* @__PURE__ */ react.createElement(react.Fragment, null, onGoBack && /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
				size: SIZE$5,
				"aria-label": (0, _wordpress_i18n.__)("Go Back", "elementor"),
				onClick: onGoBack
			}, /* @__PURE__ */ react.createElement(_elementor_icons.ArrowLeftIcon, { fontSize: SIZE$5 })), /* @__PURE__ */ react.createElement(VariableIcon, { fontSize: SIZE$5 })),
			title: (0, _wordpress_i18n.__)("Create variable", "elementor"),
			onClose: closePopover
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_editor_controls.PopoverContent, { p: 2 }, /* @__PURE__ */ react.createElement(FormField, {
			id: "variable-label",
			label: (0, _wordpress_i18n.__)("Name", "elementor"),
			errorMsg: labelFieldError?.message,
			noticeMsg: labelHint(label)
		}, /* @__PURE__ */ react.createElement(LabelField, {
			id: "variable-label",
			value: label,
			error: labelFieldError,
			onChange: (newValue) => {
				setLabel(newValue);
				setErrorMessage("");
			},
			onErrorChange: (errorMsg) => {
				setLabelFieldError({
					value: "",
					message: errorMsg
				});
			},
			onKeyDown: handleKeyDown,
			focusOnShow: true
		})), ValueField && /* @__PURE__ */ react.createElement(FormField, {
			errorMsg: valueFieldError,
			label: (0, _wordpress_i18n.__)("Value", "elementor")
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "h5",
			id: "variable-value-wrapper"
		}, /* @__PURE__ */ react.createElement(ValueField, {
			value,
			onPropTypeKeyChange: (key) => setPropTypeKey(key),
			onChange: (newValue) => {
				setValue(newValue);
				setErrorMessage("");
				setValueFieldError("");
			},
			onValidationChange: setValueFieldError,
			propType,
			onKeyDown: handleKeyDown
		}))), errorMessage && /* @__PURE__ */ react.createElement(_elementor_ui.FormHelperText, { error: true }, errorMessage)), /* @__PURE__ */ react.createElement(_elementor_ui.CardActions, { sx: {
			pt: .5,
			pb: 1
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			id: "create-variable-button",
			size: "small",
			variant: "contained",
			disabled: isSubmitDisabled,
			onClick: handleCreateAndTrack
		}, (0, _wordpress_i18n.__)("Create", "elementor"))));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/edit-confirmation-dialog.tsx
	var EDIT_CONFIRMATION_DIALOG_ID = "edit-confirmation-dialog";
	var EditConfirmationDialog = ({ closeDialog, onConfirm, onSuppressMessage }) => {
		const [dontShowAgain, setDontShowAgain] = (0, react.useState)(false);
		const handleSave = () => {
			if (dontShowAgain) onSuppressMessage?.();
			onConfirm?.();
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Dialog, {
			open: true,
			onClose: closeDialog,
			maxWidth: "xs"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.DialogTitle, {
			display: "flex",
			alignItems: "center",
			gap: 1
		}, /* @__PURE__ */ react.createElement(_elementor_icons.AlertTriangleFilledIcon, { color: "secondary" }), (0, _wordpress_i18n.__)("Changes to variables go live right away.", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.DialogContent, null, /* @__PURE__ */ react.createElement(_elementor_ui.DialogContentText, {
			variant: "body2",
			color: "textPrimary"
		}, (0, _wordpress_i18n.__)("Don't worry - all other changes you make will wait until you publish your site.", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.DialogActions, { sx: {
			justifyContent: "space-between",
			alignItems: "center"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.FormControlLabel, {
			control: /* @__PURE__ */ react.createElement(_elementor_ui.Checkbox, {
				checked: dontShowAgain,
				onChange: (event) => setDontShowAgain(event.target.checked),
				size: "small"
			}),
			label: /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "body2" }, (0, _wordpress_i18n.__)("Don't show me again", "elementor"))
		}), /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			color: "secondary",
			onClick: closeDialog
		}, (0, _wordpress_i18n.__)("Keep editing", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			color: "secondary",
			onClick: handleSave,
			sx: { ml: 1 }
		}, (0, _wordpress_i18n.__)("Save", "elementor")))));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/variable-edit.tsx
	var SIZE$4 = "tiny";
	var DELETE_LABEL = (0, _wordpress_i18n.__)("Delete variable", "elementor");
	var VariableEdit = ({ onClose, onGoBack, onSubmit, editId }) => {
		const { icon: VariableIcon, valueField: ValueField, variableType, propTypeUtil } = useVariableType();
		const { setVariableValue: notifyBoundPropChange, variableId, path } = useVariableBoundProp();
		const { propType } = (0, _elementor_editor_controls.useBoundProp)();
		const [isMessageSuppressed, suppressMessage] = (0, _elementor_editor_current_user.useSuppressedMessage)(EDIT_CONFIRMATION_DIALOG_ID);
		const [deleteConfirmation, setDeleteConfirmation] = (0, react.useState)(false);
		const [editConfirmation, setEditConfirmation] = (0, react.useState)(false);
		const [errorMessage, setErrorMessage] = (0, react.useState)("");
		const [valueFieldError, setValueFieldError] = (0, react.useState)("");
		const { labelFieldError, setLabelFieldError } = useLabelError();
		const variable = useVariable(editId);
		const [propTypeKey, setPropTypeKey] = (0, react.useState)(variable?.type ?? propTypeUtil.key);
		if (!variable) throw new Error(`Global ${variableType} variable not found`);
		const userPermissions = usePermissions();
		const [value, setValue] = (0, react.useState)(() => variable.value);
		const [label, setLabel] = (0, react.useState)(() => variable.label);
		(0, react.useEffect)(() => {
			styleVariablesRepository.update({ [editId]: {
				...variable,
				value
			} });
			return () => {
				styleVariablesRepository.update({ [editId]: { ...variable } });
			};
		}, [
			editId,
			value,
			variable
		]);
		const handleUpdate = () => {
			if (isMessageSuppressed) handleSaveVariable();
			else setEditConfirmation(true);
		};
		const handleSaveVariable = () => {
			updateVariable(editId, propTypeKey !== variable.type ? {
				value,
				label,
				type: propTypeKey
			} : {
				value,
				label
			}, { eventData: { controlPath: path.join(".") } }).then(() => {
				maybeTriggerBoundPropChange();
				onSubmit?.();
			}).catch((error) => {
				const mappedError = mapServerError(error);
				if (mappedError && "label" === mappedError.field) {
					setLabel("");
					setLabelFieldError({
						value: label,
						message: mappedError.message
					});
					return;
				}
				setErrorMessage(ERROR_MESSAGES.UNEXPECTED_ERROR);
			});
		};
		const handleDelete = () => {
			deleteVariable(editId).then(() => {
				maybeTriggerBoundPropChange();
				onSubmit?.();
			});
		};
		const maybeTriggerBoundPropChange = () => {
			if (editId === variableId) notifyBoundPropChange(editId);
		};
		const handleDeleteConfirmation = () => {
			setDeleteConfirmation(true);
		};
		const closeDeleteDialog = () => () => {
			setDeleteConfirmation(false);
		};
		const closeEditDialog = () => () => {
			setEditConfirmation(false);
		};
		const actions = [];
		if (userPermissions.canDelete()) actions.push(/* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			key: "delete",
			placement: "top",
			title: DELETE_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: SIZE$4,
			onClick: handleDeleteConfirmation,
			"aria-label": DELETE_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_icons.TrashIcon, { fontSize: SIZE$4 }))));
		const hasEmptyFields = () => {
			if ("" === label.trim()) return true;
			if ("string" === typeof value) return "" === value.trim();
			return false === Boolean(value);
		};
		const noValueChanged = () => {
			return value === variable.value && label === variable.label;
		};
		const hasErrors = () => {
			return !!errorMessage;
		};
		const isSubmitDisabled = noValueChanged() || hasEmptyFields() || hasErrors();
		const handleKeyDown = (event) => {
			if (event.key === "Enter" && !isSubmitDisabled) {
				event.preventDefault();
				handleUpdate();
			}
		};
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.SectionPopoverBody, { height: "auto" }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverHeader, {
			title: (0, _wordpress_i18n.__)("Edit variable", "elementor"),
			onClose,
			icon: /* @__PURE__ */ react.createElement(react.Fragment, null, onGoBack && /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
				size: SIZE$4,
				"aria-label": (0, _wordpress_i18n.__)("Go Back", "elementor"),
				onClick: onGoBack
			}, /* @__PURE__ */ react.createElement(_elementor_icons.ArrowLeftIcon, { fontSize: SIZE$4 })), /* @__PURE__ */ react.createElement(VariableIcon, { fontSize: SIZE$4 })),
			actions
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_editor_controls.PopoverContent, { p: 2 }, /* @__PURE__ */ react.createElement(FormField, {
			id: "variable-label",
			label: (0, _wordpress_i18n.__)("Name", "elementor"),
			errorMsg: labelFieldError?.message,
			noticeMsg: labelHint(label)
		}, /* @__PURE__ */ react.createElement(LabelField, {
			id: "variable-label",
			value: label,
			error: labelFieldError,
			onChange: (newValue) => {
				setLabel(newValue);
				setErrorMessage("");
			},
			onErrorChange: (errorMsg) => {
				setLabelFieldError({
					value: "",
					message: errorMsg
				});
			},
			onKeyDown: handleKeyDown,
			focusOnShow: true
		})), ValueField && /* @__PURE__ */ react.createElement(FormField, {
			errorMsg: valueFieldError,
			label: (0, _wordpress_i18n.__)("Value", "elementor")
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "h5" }, /* @__PURE__ */ react.createElement(ValueField, {
			propTypeKey: variable.type,
			onPropTypeKeyChange: (key) => setPropTypeKey(key),
			value,
			onChange: (newValue) => {
				setValue(newValue);
				setErrorMessage("");
				setValueFieldError("");
			},
			onKeyDown: handleKeyDown,
			onValidationChange: setValueFieldError,
			propType
		}))), errorMessage && /* @__PURE__ */ react.createElement(_elementor_ui.FormHelperText, { error: true }, errorMessage)), /* @__PURE__ */ react.createElement(_elementor_ui.CardActions, { sx: {
			pt: .5,
			pb: 1
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			size: "small",
			variant: "contained",
			disabled: isSubmitDisabled,
			onClick: handleUpdate
		}, (0, _wordpress_i18n.__)("Save", "elementor")))), deleteConfirmation && /* @__PURE__ */ react.createElement(DeleteConfirmationDialog, {
			open: true,
			label,
			onConfirm: handleDelete,
			closeDialog: closeDeleteDialog()
		}), editConfirmation && !isMessageSuppressed && /* @__PURE__ */ react.createElement(EditConfirmationDialog, {
			closeDialog: closeEditDialog(),
			onConfirm: handleSaveVariable,
			onSuppressMessage: suppressMessage
		}));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/menu-item-content.tsx
	var SIZE$3 = "tiny";
	var EDIT_LABEL = (0, _wordpress_i18n.__)("Edit variable", "elementor");
	var MenuItemContent = ({ item, disabled = false }) => {
		const onEdit = item.onEdit;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemIcon, { sx: { color: disabled ? "text.disabled" : "inherit" } }, item.icon), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			flex: 1,
			minWidth: 0,
			display: "flex",
			alignItems: "center",
			gap: 1
		} }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.EllipsisWithTooltip, {
			title: item.label || item.value,
			as: _elementor_ui.Typography,
			variant: "caption",
			color: disabled ? "text.disabled" : "text.primary",
			sx: {
				marginTop: "1px",
				lineHeight: "2"
			},
			maxWidth: "50%"
		}), item.secondaryText && /* @__PURE__ */ react.createElement(_elementor_editor_ui.EllipsisWithTooltip, {
			title: item.secondaryText,
			as: _elementor_ui.Typography,
			variant: "caption",
			color: disabled ? "text.disabled" : "text.tertiary",
			sx: {
				marginTop: "1px",
				lineHeight: "1"
			},
			maxWidth: "50%"
		})), !!onEdit && !disabled && /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			placement: "top",
			title: EDIT_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			sx: {
				mx: 1,
				opacity: "0"
			},
			onClick: (e) => {
				e.stopPropagation();
				onEdit(item.value);
			},
			"aria-label": EDIT_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_icons.EditIcon, {
			color: "action",
			fontSize: SIZE$3
		}))));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/styled-menu-list.tsx
	var VariablesStyledMenuList = (0, _elementor_ui.styled)(_elementor_ui.MenuList)(({ theme, disabled }) => ({
		"& > li": {
			height: 32,
			width: "100%",
			display: "flex",
			alignItems: "center"
		},
		"& > [role=\"option\"]": {
			...theme.typography.caption,
			lineHeight: "inherit",
			padding: theme.spacing(.5, 1, .5, 2),
			...!disabled && {
				"&:hover, &:focus": { backgroundColor: theme.palette.action.hover },
				cursor: "pointer"
			},
			"&[aria-selected=\"true\"]": { backgroundColor: theme.palette.action.selected },
			textOverflow: "ellipsis",
			position: "absolute",
			top: 0,
			left: 0,
			"&:hover .MuiIconButton-root, .MuiIconButton-root:focus": { opacity: 1 }
		},
		width: "100%",
		position: "relative"
	}));

//#endregion
//#region packages/packages/core/editor-variables/src/components/variables-selection.tsx
	var SIZE$2 = "tiny";
	var CREATE_LABEL = (0, _wordpress_i18n.__)("Create variable", "elementor");
	var MANAGER_LABEL = (0, _wordpress_i18n.__)("Variables Manager", "elementor");
	var getProUpgradeUrl = (variableType) => `https://go.elementor.com/renew-license-panel-${variableType}-variable`;
	var VariablesSelection = ({ closePopover, onAdd, onEdit, onSettings, disabled = false }) => {
		const { icon: VariableIcon, startIcon, variableType, propTypeUtil, emptyState } = useVariableType();
		const { value: variable, setValue: setVariable, path } = useVariableBoundProp();
		const [searchValue, setSearchValue] = (0, react.useState)("");
		const { list: variables, hasMatches: hasSearchResults, isSourceNotEmpty: hasVariables, hasNoCompatibleVariables } = useFilteredVariables(searchValue, propTypeUtil.key);
		const handleSetVariable = (key) => {
			setVariable(key);
			trackVariableEvent({
				varType: variableType,
				controlPath: path.join("."),
				action: "connect"
			});
			closePopover();
		};
		const onAddAndTrack = () => {
			onAdd?.();
			trackVariableEvent({
				varType: variableType,
				controlPath: path.join("."),
				action: "add"
			});
		};
		const actions = [];
		if (onAdd) actions.push(/* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			key: "add",
			placement: "top",
			title: CREATE_LABEL
		}, /* @__PURE__ */ react.createElement("span", null, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			id: "add-variable-button",
			size: SIZE$2,
			onClick: onAddAndTrack,
			"aria-label": CREATE_LABEL,
			disabled
		}, /* @__PURE__ */ react.createElement(_elementor_icons.PlusIcon, { fontSize: SIZE$2 })))));
		if (onSettings) {
			const handleOpenManager = () => {
				onSettings();
				trackVariablesManagerEvent({
					action: "openManager",
					source: "vars-popover",
					varType: variableType,
					controlPath: path.join(".")
				});
			};
			actions.push(/* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
				key: "settings",
				placement: "top",
				title: MANAGER_LABEL
			}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
				id: "variables-manager-button",
				size: SIZE$2,
				onClick: handleOpenManager,
				"aria-label": MANAGER_LABEL
			}, /* @__PURE__ */ react.createElement(_elementor_icons.SettingsIcon, { fontSize: SIZE$2 }))));
		}
		const StartIcon = startIcon || (() => /* @__PURE__ */ react.createElement(VariableIcon, { fontSize: SIZE$2 }));
		const items = variables.map(({ value, label, key }) => ({
			type: "item",
			value: key,
			label,
			icon: /* @__PURE__ */ react.createElement(StartIcon, { value }),
			secondaryText: value,
			onEdit: onEdit ? () => onEdit?.(key) : void 0
		}));
		const handleSearch = (search) => {
			setSearchValue(search);
		};
		const handleClearSearch = () => {
			setSearchValue("");
		};
		(0, react.useEffect)(() => {
			if (disabled) (0, _elementor_editor_controls.trackViewPromotion)({
				target_name: "variables_popover",
				target_location: "widget_panel",
				location_l1: "variables_list"
			});
		}, [disabled]);
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.SectionPopoverBody, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverHeader, {
			title: (0, _wordpress_i18n.__)("Variables", "elementor"),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.ColorFilterIcon, { fontSize: SIZE$2 }),
			onClose: closePopover,
			actions
		}), hasVariables && /* @__PURE__ */ react.createElement(_elementor_editor_ui.SearchField, {
			value: searchValue,
			onSearch: handleSearch,
			placeholder: (0, _wordpress_i18n.__)("Search", "elementor")
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), hasVariables && hasSearchResults && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverMenuList, {
			items,
			onSelect: disabled ? () => {} : handleSetVariable,
			onClose: () => {},
			selectedValue: variable,
			"data-testid": `${variableType}-variables-list`,
			menuListTemplate: (props) => /* @__PURE__ */ react.createElement(VariablesStyledMenuList, {
				...props,
				disabled
			}),
			menuItemContentTemplate: (item) => /* @__PURE__ */ react.createElement(MenuItemContent, {
				item,
				disabled
			})
		}), disabled && /* @__PURE__ */ react.createElement(_elementor_editor_ui.PromotionAlert, {
			message: (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("Upgrade to continue creating and editing %s variables.", "elementor"), variableType),
			upgradeUrl: getProUpgradeUrl(variableType),
			onCtaClick: () => (0, _elementor_editor_controls.trackUpgradePromotionClick)({
				target_name: "variables_popover",
				location_l1: "variables_list"
			})
		})), !hasSearchResults && hasVariables && /* @__PURE__ */ react.createElement(NoSearchResults, {
			searchValue,
			onClear: handleClearSearch,
			icon: /* @__PURE__ */ react.createElement(VariableIcon, { fontSize: "large" })
		}), disabled && !hasVariables && /* @__PURE__ */ react.createElement(EmptyState, {
			title: (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("No %s variables yet", "elementor"), variableType),
			message: (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("Upgrade to create %s variables and maintain consistent element sizing.", "elementor"), variableType),
			icon: /* @__PURE__ */ react.createElement(VariableIcon, { fontSize: "large" })
		}, emptyState), !hasVariables && !hasNoCompatibleVariables && !disabled && /* @__PURE__ */ react.createElement(EmptyState, {
			title: (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("Create your first %s variable", "elementor"), variableType),
			message: (0, _wordpress_i18n.__)("Variables are saved attributes that you can apply anywhere on your site.", "elementor"),
			icon: /* @__PURE__ */ react.createElement(VariableIcon, { fontSize: "large" }),
			onAdd
		}), hasNoCompatibleVariables && !disabled && /* @__PURE__ */ react.createElement(EmptyState, {
			title: (0, _wordpress_i18n.__)("No compatible variables", "elementor"),
			message: (0, _wordpress_i18n.__)("Looks like none of your variables work with this control. Create a new variable to use it here.", "elementor"),
			icon: /* @__PURE__ */ react.createElement(VariableIcon, { fontSize: "large" }),
			onAdd
		}));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/variable-selection-popover.tsx
	var VIEW_LIST = "list";
	var VIEW_ADD = "add";
	var VIEW_EDIT = "edit";
	var VariableSelectionPopover = ({ closePopover, propTypeKey, selectedVariable }) => {
		const [currentView, setCurrentView] = (0, react.useState)(VIEW_LIST);
		const [editId, setEditId] = (0, react.useState)("");
		const onSettingsAvailable = () => {
			window.dispatchEvent(new CustomEvent("elementor/toggle-design-system", { detail: { tab: "variables" } }));
		};
		return /* @__PURE__ */ react.createElement(VariableTypeProvider, { propTypeKey }, /* @__PURE__ */ react.createElement(PopoverContentRefContextProvider, null, RenderView({
			propTypeKey,
			currentView,
			selectedVariable,
			editId,
			setEditId,
			setCurrentView,
			closePopover,
			onSettings: onSettingsAvailable
		})));
	};
	function RenderView(props) {
		const userPermissions = usePermissions();
		const userQuotaPermissions = useQuotaPermissions(props.propTypeKey);
		const handlers = {
			onClose: () => {
				props.closePopover();
			},
			onGoBack: () => {
				props.setCurrentView(VIEW_LIST);
			}
		};
		if (userPermissions.canAdd()) handlers.onAdd = () => {
			props.setCurrentView(VIEW_ADD);
		};
		if (userPermissions.canEdit()) handlers.onEdit = (key) => {
			props.setEditId(key);
			props.setCurrentView(VIEW_EDIT);
		};
		if (userPermissions.canManageSettings() && props.onSettings) handlers.onSettings = () => {
			props.closePopover();
			props.onSettings?.();
		};
		const handleSubmitOnEdit = () => {
			if (props?.selectedVariable?.key === props.editId) handlers.onClose();
			else handlers.onGoBack?.();
		};
		if (VIEW_LIST === props.currentView) return /* @__PURE__ */ react.createElement(VariablesSelection, {
			closePopover: handlers.onClose,
			onAdd: handlers.onAdd,
			onEdit: handlers.onEdit,
			onSettings: handlers.onSettings,
			disabled: !userQuotaPermissions.canAdd()
		});
		if (VIEW_ADD === props.currentView) return /* @__PURE__ */ react.createElement(VariableCreation, {
			onGoBack: handlers.onGoBack,
			onClose: handlers.onClose
		});
		if (VIEW_EDIT === props.currentView) return /* @__PURE__ */ react.createElement(VariableEdit, {
			editId: props.editId,
			onGoBack: handlers.onGoBack,
			onClose: handlers.onClose,
			onSubmit: handleSubmitOnEdit
		});
		return null;
	}

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/tags/assigned-tag.tsx
	var SIZE$1 = "tiny";
	var UNLINK_LABEL = (0, _wordpress_i18n.__)("Unlink variable", "elementor");
	var AssignedTag = ({ startIcon, label, onUnlink, ...props }) => {
		const actions = [];
		if (onUnlink) actions.push(/* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			key: "unlink",
			title: UNLINK_LABEL,
			placement: "bottom"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: SIZE$1,
			onClick: onUnlink,
			"aria-label": UNLINK_LABEL
		}, /* @__PURE__ */ react.createElement(_elementor_icons.DetachIcon, { fontSize: SIZE$1 }))));
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: label,
			placement: "top"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.UnstableTag, {
			fullWidth: true,
			showActionsOnHover: true,
			startIcon: /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
				gap: .5,
				direction: "row",
				alignItems: "center"
			}, startIcon),
			label: /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
				display: "inline-grid",
				minWidth: 0
			} }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
				sx: { lineHeight: 1.34 },
				variant: "caption",
				noWrap: true
			}, label)),
			actions,
			...props
		}));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/variable/assigned-variable.tsx
	var AssignedVariable = ({ variable, propTypeKey }) => {
		const { startIcon, propTypeUtil } = getVariableType(propTypeKey);
		const { setValue } = (0, _elementor_editor_controls.useBoundProp)();
		const anchorRef = (0, react.useRef)(null);
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			popupId: `elementor-variables-list-${(0, react.useId)()}`
		});
		const unlinkVariable = createUnlinkHandler(variable, propTypeKey, setValue);
		const StartIcon = startIcon || (() => null);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { ref: anchorRef }, /* @__PURE__ */ react.createElement(AssignedTag, {
			label: variable.label,
			startIcon: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_icons.ColorFilterIcon, { fontSize: SIZE$1 }), /* @__PURE__ */ react.createElement(StartIcon, { value: variable.value })),
			onUnlink: unlinkVariable,
			...(0, _elementor_ui.bindTrigger)(popupState)
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Popover, {
			disableScrollLock: true,
			anchorEl: anchorRef.current,
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
		}, /* @__PURE__ */ react.createElement(VariableSelectionPopover, {
			selectedVariable: variable,
			closePopover: popupState.close,
			propTypeKey: propTypeUtil.key
		})));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/variable-restore.tsx
	var SIZE = "tiny";
	var VariableRestore = ({ variableId, onClose, onSubmit }) => {
		const { icon: VariableIcon, valueField: ValueField, variableType, propTypeUtil } = useVariableType();
		const { setVariableValue: notifyBoundPropChange } = useVariableBoundProp();
		const { propType } = (0, _elementor_editor_controls.useBoundProp)();
		const variable = useVariable(variableId);
		if (!variable) throw new Error(`Global ${variableType} variable not found`);
		const [errorMessage, setErrorMessage] = (0, react.useState)("");
		const [valueFieldError, setValueFieldError] = (0, react.useState)("");
		const [label, setLabel] = (0, react.useState)(variable.label);
		const [value, setValue] = (0, react.useState)(variable.value);
		const [propTypeKey, setPropTypeKey] = (0, react.useState)(variable?.type ?? propTypeUtil.key);
		const { labelFieldError, setLabelFieldError } = useLabelError({
			value: variable.label,
			message: ERROR_MESSAGES.DUPLICATED_LABEL
		});
		const handleRestore = () => {
			(propTypeKey !== variable.type ? restoreVariable(variableId, label, value, propTypeKey) : restoreVariable(variableId, label, value)).then(() => {
				notifyBoundPropChange(variableId);
				onSubmit?.();
			}).catch((error) => {
				const mappedError = mapServerError(error);
				if (mappedError && "label" === mappedError.field) {
					setLabel("");
					setLabelFieldError({
						value: label,
						message: mappedError.message
					});
					return;
				}
				setErrorMessage(ERROR_MESSAGES.UNEXPECTED_ERROR);
			});
		};
		const hasEmptyFields = () => {
			if ("" === label.trim()) return true;
			if ("string" === typeof value) return "" === value.trim();
			return false === Boolean(value);
		};
		const noValueChanged = () => {
			return value === variable.value && label === variable.label;
		};
		const hasErrors = () => {
			return !!errorMessage;
		};
		const isSubmitDisabled = noValueChanged() || hasEmptyFields() || hasErrors();
		const handleKeyDown = (event) => {
			if (event.key === "Enter" && !isSubmitDisabled) {
				event.preventDefault();
				handleRestore();
			}
		};
		return /* @__PURE__ */ react.createElement(PopoverContentRefContextProvider, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.SectionPopoverBody, { height: "auto" }, /* @__PURE__ */ react.createElement(_elementor_editor_ui.PopoverHeader, {
			icon: /* @__PURE__ */ react.createElement(VariableIcon, { fontSize: SIZE }),
			title: (0, _wordpress_i18n.__)("Restore variable", "elementor"),
			onClose
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_editor_controls.PopoverContent, { p: 2 }, /* @__PURE__ */ react.createElement(FormField, {
			id: "variable-label",
			label: (0, _wordpress_i18n.__)("Name", "elementor"),
			errorMsg: labelFieldError?.message,
			noticeMsg: labelHint(label)
		}, /* @__PURE__ */ react.createElement(LabelField, {
			id: "variable-label",
			value: label,
			error: labelFieldError,
			onChange: (newValue) => {
				setLabel(newValue);
				setErrorMessage("");
			},
			onErrorChange: (errorMsg) => {
				setLabelFieldError({
					value: "",
					message: errorMsg
				});
			},
			onKeyDown: handleKeyDown,
			focusOnShow: true
		})), ValueField && /* @__PURE__ */ react.createElement(FormField, {
			errorMsg: valueFieldError,
			label: (0, _wordpress_i18n.__)("Value", "elementor")
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "h5" }, /* @__PURE__ */ react.createElement(ValueField, {
			propTypeKey,
			onPropTypeKeyChange: (key) => setPropTypeKey(key),
			value,
			onChange: (newValue) => {
				setValue(newValue);
				setErrorMessage("");
				setValueFieldError("");
			},
			onValidationChange: setValueFieldError,
			propType,
			onKeyDown: handleKeyDown
		}))), errorMessage && /* @__PURE__ */ react.createElement(_elementor_ui.FormHelperText, { error: true }, errorMessage)), /* @__PURE__ */ react.createElement(_elementor_ui.CardActions, { sx: {
			pt: .5,
			pb: 1
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			size: "small",
			variant: "contained",
			disabled: isSubmitDisabled,
			onClick: handleRestore
		}, (0, _wordpress_i18n.__)("Restore", "elementor")))));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/deleted-variable-alert.tsx
	var DeletedVariableAlert = ({ onClose, onUnlink, onRestore, label }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.ClickAwayListener, { onClickAway: onClose }, /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
			variant: "standard",
			severity: "warning",
			onClose,
			action: /* @__PURE__ */ react.createElement(react.Fragment, null, onUnlink && /* @__PURE__ */ react.createElement(_elementor_ui.AlertAction, {
				variant: "contained",
				onClick: onUnlink
			}, (0, _wordpress_i18n.__)("Unlink", "elementor")), onRestore && /* @__PURE__ */ react.createElement(_elementor_ui.AlertAction, {
				variant: "outlined",
				onClick: onRestore
			}, (0, _wordpress_i18n.__)("Restore", "elementor"))),
			sx: { maxWidth: 300 }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("Deleted variable", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "textPrimary"
		}, (0, _wordpress_i18n.__)("The variable", "elementor"), "\xA0'", /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			component: "span",
			sx: { lineBreak: "anywhere" }
		}, label), "'\xA0", (0, _wordpress_i18n.__)("has been deleted, but it is still referenced in this location. You may restore the variable or unlink it to assign a different value.", "elementor"))));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/tags/warning-variable-tag.tsx
	var WarningVariableTag = react.forwardRef(({ label, suffix, onClick, icon, ...props }, ref) => {
		const displayText = suffix ? `${label} (${suffix})` : label;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			ref,
			size: "tiny",
			color: "warning",
			shape: "rounded",
			variant: "standard",
			onClick,
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.AlertTriangleFilledIcon, null),
			label: /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
				title: displayText,
				placement: "top"
			}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
				display: "inline-grid",
				minWidth: 0
			} }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
				variant: "caption",
				noWrap: true,
				sx: { lineHeight: 1.34 }
			}, displayText))),
			sx: {
				height: (theme) => theme.spacing(3.5),
				borderRadius: (theme) => theme.spacing(1),
				justifyContent: "flex-start",
				width: "100%"
			},
			...props
		});
	});
	WarningVariableTag.displayName = "WarningVariableTag";

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/variable/deleted-variable.tsx
	var DeletedVariable = ({ variable, propTypeKey }) => {
		const { propTypeUtil } = getVariableType(propTypeKey);
		const boundProp = (0, _elementor_editor_controls.useBoundProp)();
		const userPermissions = usePermissions();
		const [showInfotip, setShowInfotip] = (0, react.useState)(false);
		const toggleInfotip = () => setShowInfotip((prev) => !prev);
		const closeInfotip = () => setShowInfotip(false);
		const deletedChipAnchorRef = (0, react.useRef)(null);
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			popupId: `elementor-variables-restore-${(0, react.useId)()}`
		});
		const handlers = {};
		if (userPermissions.canUnlink()) handlers.onUnlink = createUnlinkHandler(variable, propTypeKey, boundProp.setValue);
		if (userPermissions.canRestore()) handlers.onRestore = () => {
			if (!variable.key) return;
			restoreVariable(variable.key).then((id) => {
				resolveBoundPropAndSetValue(propTypeUtil.create(id), boundProp);
				closeInfotip();
			}).catch(() => {
				closeInfotip();
				popupState.setAnchorEl(deletedChipAnchorRef.current);
				popupState.open();
			});
		};
		const handleRestoreWithOverrides = () => {
			popupState.close();
		};
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { ref: deletedChipAnchorRef }, showInfotip && /* @__PURE__ */ react.createElement(_elementor_ui.Backdrop, {
			open: true,
			onClick: closeInfotip,
			invisible: true
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Infotip, {
			color: "warning",
			placement: "right-start",
			open: showInfotip,
			disableHoverListener: true,
			onClose: closeInfotip,
			content: /* @__PURE__ */ react.createElement(DeletedVariableAlert, {
				onClose: closeInfotip,
				onUnlink: handlers.onUnlink,
				onRestore: handlers.onRestore,
				label: variable.label
			}),
			slotProps: { popper: { modifiers: [{
				name: "offset",
				options: { offset: [0, 24] }
			}] } }
		}, /* @__PURE__ */ react.createElement(WarningVariableTag, {
			label: variable.label,
			onClick: toggleInfotip,
			suffix: (0, _wordpress_i18n.__)("deleted", "elementor")
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Popover, {
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
		}, /* @__PURE__ */ react.createElement(VariableTypeProvider, { propTypeKey }, /* @__PURE__ */ react.createElement(VariableRestore, {
			variableId: variable.key ?? "",
			onClose: popupState.close,
			onSubmit: handleRestoreWithOverrides
		})))));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/mismatch-variable-alert.tsx
	var i18n = {
		title: (0, _wordpress_i18n.__)("Variable has changed", "elementor"),
		message: (0, _wordpress_i18n.__)(`This variable is no longer compatible with this property. You can clear it or select a different one.`, "elementor"),
		buttons: {
			clear: (0, _wordpress_i18n.__)("Clear", "elementor"),
			select: (0, _wordpress_i18n.__)("Select variable", "elementor")
		}
	};
	var MismatchVariableAlert = ({ onClose, onClear, triggerSelect }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.ClickAwayListener, { onClickAway: onClose }, /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
			variant: "standard",
			severity: "warning",
			onClose,
			action: /* @__PURE__ */ react.createElement(react.Fragment, null, onClear && /* @__PURE__ */ react.createElement(_elementor_ui.AlertAction, {
				variant: "contained",
				onClick: onClear
			}, i18n.buttons.clear), triggerSelect && /* @__PURE__ */ react.createElement(_elementor_ui.AlertAction, {
				variant: "outlined",
				onClick: triggerSelect
			}, i18n.buttons.select)),
			sx: { maxWidth: 300 }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.AlertTitle, null, i18n.title), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "textPrimary"
		}, i18n.message)));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/variable/mismatch-variable.tsx
	var MismatchVariable = ({ variable }) => {
		const { setValue, value } = (0, _elementor_editor_controls.useBoundProp)();
		const anchorRef = (0, react.useRef)(null);
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			popupId: `elementor-variables-list-${(0, react.useId)()}`
		});
		const [infotipVisible, setInfotipVisible] = (0, react.useState)(false);
		const toggleInfotip = () => setInfotipVisible((prev) => !prev);
		const closeInfotip = () => setInfotipVisible(false);
		const triggerSelect = () => {
			closeInfotip();
			popupState.setAnchorEl(anchorRef.current);
			popupState.open();
		};
		const clearValue = () => {
			closeInfotip();
			setValue(null);
		};
		const showClearButton = !!value;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { ref: anchorRef }, infotipVisible && /* @__PURE__ */ react.createElement(_elementor_ui.Backdrop, {
			open: true,
			onClick: closeInfotip,
			invisible: true
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Infotip, {
			color: "warning",
			placement: "right-start",
			open: infotipVisible,
			disableHoverListener: true,
			onClose: closeInfotip,
			content: /* @__PURE__ */ react.createElement(MismatchVariableAlert, {
				onClose: closeInfotip,
				onClear: showClearButton ? clearValue : void 0,
				triggerSelect
			}),
			slotProps: { popper: { modifiers: [{
				name: "offset",
				options: { offset: [0, 24] }
			}] } }
		}, /* @__PURE__ */ react.createElement(WarningVariableTag, {
			label: variable.label,
			onClick: toggleInfotip,
			suffix: (0, _wordpress_i18n.__)("changed", "elementor")
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Popover, {
			disableScrollLock: true,
			anchorEl: anchorRef.current,
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
		}, /* @__PURE__ */ react.createElement(VariableSelectionPopover, {
			selectedVariable: variable,
			closePopover: popupState.close,
			propTypeKey: variable.type
		})));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/missing-variable-alert.tsx
	var MissingVariableAlert = ({ onClose, onClear }) => {
		return /* @__PURE__ */ react.createElement(_elementor_ui.ClickAwayListener, { onClickAway: onClose }, /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
			variant: "standard",
			severity: "warning",
			onClose,
			action: /* @__PURE__ */ react.createElement(react.Fragment, null, onClear && /* @__PURE__ */ react.createElement(_elementor_ui.AlertAction, {
				variant: "contained",
				onClick: onClear
			}, (0, _wordpress_i18n.__)("Clear", "elementor"))),
			sx: { maxWidth: 300 }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("This variable is missing", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "textPrimary"
		}, (0, _wordpress_i18n.__)("It may have been deleted. Try clearing this field and select a different value or variable.", "elementor"))));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/ui/variable/missing-variable.tsx
	var MissingVariable = () => {
		const { setValue } = (0, _elementor_editor_controls.useBoundProp)();
		const [infotipVisible, setInfotipVisible] = (0, react.useState)(false);
		const toggleInfotip = () => setInfotipVisible((prev) => !prev);
		const closeInfotip = () => setInfotipVisible(false);
		const clearValue = () => setValue(null);
		return /* @__PURE__ */ react.createElement(react.Fragment, null, infotipVisible && /* @__PURE__ */ react.createElement(_elementor_ui.Backdrop, {
			open: true,
			onClick: closeInfotip,
			invisible: true
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Infotip, {
			color: "warning",
			placement: "right-start",
			open: infotipVisible,
			disableHoverListener: true,
			onClose: closeInfotip,
			content: /* @__PURE__ */ react.createElement(MissingVariableAlert, {
				onClose: closeInfotip,
				onClear: clearValue
			}),
			slotProps: { popper: { modifiers: [{
				name: "offset",
				options: { offset: [0, 24] }
			}] } }
		}, /* @__PURE__ */ react.createElement(WarningVariableTag, {
			label: (0, _wordpress_i18n.__)("Missing variable", "elementor"),
			onClick: toggleInfotip
		})));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/controls/variable-control.tsx
	var VariableControl = () => {
		const boundProp = (0, _elementor_editor_controls.useBoundProp)();
		const boundPropValue = boundProp.value ?? boundProp.placeholder;
		const assignedVariable = useVariable(boundPropValue?.value);
		if (!assignedVariable) return /* @__PURE__ */ react.createElement(MissingVariable, null);
		const { $$type: propTypeKey } = boundPropValue;
		if (assignedVariable?.deleted) return /* @__PURE__ */ react.createElement(DeletedVariable, {
			variable: assignedVariable,
			propTypeKey
		});
		const { isCompatible } = getVariableType(assignedVariable.type);
		if (isCompatible && !isCompatible(boundProp?.propType, assignedVariable)) return /* @__PURE__ */ react.createElement(MismatchVariable, { variable: assignedVariable });
		return /* @__PURE__ */ react.createElement(AssignedVariable, {
			variable: assignedVariable,
			propTypeKey
		});
	};

//#endregion
//#region packages/packages/core/editor-variables/src/hooks/use-prop-variable-action.tsx
	var usePropVariableAction = () => {
		const { propType, path } = (0, _elementor_editor_controls.useBoundProp)();
		const variable = resolveVariableFromPropType(propType);
		return {
			visible: Boolean(variable),
			icon: _elementor_icons.ColorFilterIcon,
			title: (0, _wordpress_i18n.__)("Variables", "elementor"),
			content: ({ close: closePopover }) => {
				if (!variable) return null;
				trackOpenVariablePopover(path, variable.variableType);
				return /* @__PURE__ */ react.createElement(VariableSelectionPopover, {
					closePopover,
					propTypeKey: variable.propTypeUtil.key
				});
			}
		};
	};
	var resolveVariableFromPropType = (propType) => {
		if (propType.kind !== "union") return;
		for (const key of Object.keys(propType.prop_types)) {
			const variable = getVariableType(key);
			if (variable) return variable;
		}
	};
	var trackOpenVariablePopover = (path, variableType) => {
		trackVariableEvent({
			varType: variableType,
			controlPath: path.join("."),
			action: "open"
		});
	};

//#endregion
//#region packages/packages/core/editor-variables/src/mcp/variable-tool-prompt.ts
	var MANAGE_VARIABLES_GUIDE_URI = "elementor://variables/tools/manage-global-variable-guide";

//#endregion
//#region packages/packages/core/editor-variables/src/mcp/variables-resource.ts
	var MCP_PROXY_URL$1 = "elementor/v1/mcp-proxy";
	var GLOBAL_VARIABLES_URI = "elementor://global-variables";
	var initVariablesResource = (variablesMcpEntry, canvasMcpEntry) => {
		[canvasMcpEntry, variablesMcpEntry].forEach((entry) => {
			const { resource, sendResourceUpdated } = entry;
			const notifyGlobalVariablesUpdated = () => {
				sendResourceUpdated({ uri: GLOBAL_VARIABLES_URI });
			};
			resource("global-variables", GLOBAL_VARIABLES_URI, { description: "Global variables available (v4)" }, async (uri) => {
				const { data } = await (0, _elementor_http_client.httpService)().get(MCP_PROXY_URL$1, { params: { uri: uri.href } });
				return { contents: [{
					uri: uri.href,
					mimeType: "application/json",
					text: JSON.stringify(data.data ?? {})
				}] };
			});
			window.addEventListener(STORAGE_UPDATED_EVENT, notifyGlobalVariablesUpdated);
			(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("document/save/update"), notifyGlobalVariablesUpdated);
		});
	};

//#endregion
//#region packages/packages/core/editor-variables/src/mcp/manage-variable-tool.ts
	var MCP_PROXY_URL = "elementor/v1/mcp-proxy";
	var TOOL_NAME = "manage-global-variable";
	var VARIABLE_TYPES = {
		COLOR: "global-color-variable",
		FONT: "global-font-variable",
		SIZE: "global-size-variable",
		CUSTOM_SIZE: "global-custom-size-variable"
	};
	var initManageVariableTool = (reg) => {
		const { addTool, resource } = reg;
		const RUNTIME_ALLOWED_VARIABLE_TYPES = (0, _elementor_utils.isProActive)() ? [
			VARIABLE_TYPES.COLOR,
			VARIABLE_TYPES.FONT,
			VARIABLE_TYPES.SIZE,
			VARIABLE_TYPES.CUSTOM_SIZE
		] : [VARIABLE_TYPES.COLOR, VARIABLE_TYPES.FONT];
		resource("manage-global-variable-guide", MANAGE_VARIABLES_GUIDE_URI, {
			title: "Manage Global Variable Guide",
			description: "Detailed guide for using the manage-global-variable tool",
			mimeType: "text/plain"
		}, async (uri) => {
			const { data } = await (0, _elementor_http_client.httpService)().get(MCP_PROXY_URL, { params: { uri: uri.href } });
			return { contents: [{
				uri: uri.href,
				mimeType: "text/plain",
				text: data.data
			}] };
		});
		addTool({
			name: TOOL_NAME,
			description: "Manage V4 global variables (color, font, size, custom-size). Read the guide resource before use. font = single Google Font family name, no fallback stacks, size = measured unit, custom-size = calculated values",
			schema: {
				action: _elementor_schema.z.enum([
					"create",
					"update",
					"delete"
				]),
				id: _elementor_schema.z.string().optional().describe("Variable id — required for update/delete. Get from the global-variables resource."),
				type: _elementor_schema.z.enum(RUNTIME_ALLOWED_VARIABLE_TYPES),
				label: _elementor_schema.z.string().describe("Variable label (lowercase, dash-separated) — required for create/update."),
				value: _elementor_schema.z.string().optional().describe("Plain CSS value — required for create/update. Color: hex/rgba/hsl. Font: single Google Font family name only — no fallback stacks, no generic families. Size: value with unit e.g. \"16px\", or \"auto\" (Pro). Do NOT pass JSON.")
			},
			outputSchema: {
				status: _elementor_schema.z.enum(["ok"]).describe("Operation status"),
				message: _elementor_schema.z.string().optional().describe("Error details if status is error")
			},
			requiredResources: [{
				uri: MANAGE_VARIABLES_GUIDE_URI,
				description: "Full guide for variable types, naming rules, and usage"
			}, {
				uri: GLOBAL_VARIABLES_URI,
				description: "Current global variables — check before creating to avoid duplicates"
			}],
			isDestructive: true,
			handler: async (params) => {
				const { data } = await (0, _elementor_http_client.httpService)().post(MCP_PROXY_URL, {
					tool: TOOL_NAME,
					input: params
				});
				const payload = data.data;
				if (payload.variable && typeof payload.watermark === "number") applyLocalMutation(params.action, payload.variable, payload.watermark);
				return { status: "ok" };
			}
		});
	};

//#endregion
//#region packages/packages/core/editor-variables/src/mcp/index.ts
	function initMcp(reg, canvasMcpEntry) {
		window.addEventListener("elementor/init", () => {
			initManageVariableTool(reg);
			initVariablesResource(reg, canvasMcpEntry);
		}, { once: true });
	}

//#endregion
//#region packages/packages/core/editor-variables/src/components/fields/color-field.tsx
	var ColorField = ({ value, onChange, onValidationChange }) => {
		const [color, setColor] = (0, react.useState)(value);
		const [errorMessage, setErrorMessage] = (0, react.useState)("");
		const defaultRef = (0, react.useRef)(null);
		const anchorRef = usePopoverContentRef() ?? defaultRef.current;
		const handleChange = (newValue) => {
			setColor(newValue);
			const errorMsg = validateValue(newValue);
			setErrorMessage(errorMsg);
			onValidationChange?.(errorMsg);
			onChange(errorMsg ? "" : newValue);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.UnstableColorField, {
			id: "color-variable-field",
			size: "tiny",
			fullWidth: true,
			value: color,
			onChange: handleChange,
			error: errorMessage || void 0,
			slotProps: { colorPicker: {
				anchorEl: anchorRef,
				anchorOrigin: {
					vertical: "top",
					horizontal: "right"
				},
				transformOrigin: {
					vertical: "top",
					horizontal: -10
				},
				slotProps: { colorIndicator: {
					size: "inherit",
					sx: { borderRadius: .5 }
				} }
			} }
		});
	};

//#endregion
//#region packages/packages/core/editor-variables/src/components/fields/font-field.tsx
	var FontField = ({ value, onChange, onValidationChange }) => {
		const [fontFamily, setFontFamily] = (0, react.useState)(value);
		const defaultRef = (0, react.useRef)(null);
		const anchorRef = usePopoverContentRef() ?? defaultRef.current;
		const fontPopoverState = (0, _elementor_ui.usePopupState)({ variant: "popover" });
		const fontFamilies = (0, _elementor_editor_controls.useFontFamilies)();
		const sectionWidth = (0, _elementor_editor_ui.useSectionWidth)();
		const mapFontSubs = (0, react.useMemo)(() => {
			return fontFamilies.map(({ label, fonts }) => ({
				label,
				items: fonts
			}));
		}, [fontFamilies]);
		const handleChange = (newValue) => {
			setFontFamily(newValue);
			const errorMsg = validateValue(newValue);
			onValidationChange?.(errorMsg);
			onChange(errorMsg ? "" : newValue);
		};
		const handleFontFamilyChange = (newFontFamily) => {
			handleChange(newFontFamily);
			fontPopoverState.close();
		};
		const id = (0, react.useId)();
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.UnstableTag, {
			id,
			variant: "outlined",
			label: fontFamily,
			endIcon: /* @__PURE__ */ react.createElement(_elementor_icons.ChevronDownIcon, { fontSize: "tiny" }),
			...(0, _elementor_ui.bindTrigger)(fontPopoverState),
			fullWidth: true
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Popover, {
			disablePortal: true,
			disableScrollLock: true,
			anchorEl: anchorRef,
			anchorOrigin: {
				vertical: "top",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: -28
			},
			...(0, _elementor_ui.bindPopover)(fontPopoverState)
		}, /* @__PURE__ */ react.createElement(_elementor_editor_controls.ItemSelector, {
			id: "font-family-variables-selector",
			itemsList: mapFontSubs,
			selectedItem: fontFamily,
			onItemChange: handleFontFamilyChange,
			onClose: fontPopoverState.close,
			sectionWidth,
			title: (0, _wordpress_i18n.__)("Font family", "elementor"),
			itemStyle: (item) => ({ fontFamily: item.value }),
			onDebounce: _elementor_editor_controls.enqueueFont,
			icon: _elementor_icons.TextIcon
		})));
	};

//#endregion
//#region packages/packages/core/editor-variables/src/prop-types/size-variable-prop-type.ts
	var sizeVariablePropTypeUtil = (0, _elementor_editor_props.createPropUtils)("global-size-variable", _elementor_schema.z.string());

//#endregion
//#region packages/packages/core/editor-variables/src/transformers/empty-transformer.tsx
	var EmptyTransformer = (0, _elementor_editor_canvas.createTransformer)((_value) => {
		return null;
	});

//#endregion
//#region packages/packages/core/editor-variables/src/register-variable-types.tsx
	function registerVariableTypes() {
		registerVariableType({
			key: colorVariablePropTypeUtil.key,
			valueField: ColorField,
			icon: _elementor_icons.BrushIcon,
			propTypeUtil: colorVariablePropTypeUtil,
			fallbackPropTypeUtil: _elementor_editor_props.colorPropTypeUtil,
			variableType: "color",
			startIcon: ({ value }) => /* @__PURE__ */ react.createElement(ColorIndicator, {
				size: "inherit",
				component: "span",
				value
			}),
			defaultValue: "#ffffff",
			menuActionsFactory: ({ variable, variableId, handlers }) => {
				const actions = [];
				if (variable.sync_to_v3) actions.push({
					name: (0, _wordpress_i18n.__)("Stop syncing to Global Colors", "elementor"),
					icon: _elementor_icons.RefreshOffIcon,
					color: "text.primary",
					onClick: () => handlers.onStopSync(variableId)
				});
				else actions.push({
					name: (0, _wordpress_i18n.__)("Sync to Global Colors", "elementor"),
					icon: _elementor_icons.RefreshIcon,
					color: "text.primary",
					onClick: () => handlers.onStartSync(variableId)
				});
				return actions;
			}
		});
		registerVariableType({
			key: fontVariablePropTypeUtil.key,
			valueField: FontField,
			icon: _elementor_icons.TextIcon,
			propTypeUtil: fontVariablePropTypeUtil,
			fallbackPropTypeUtil: _elementor_editor_props.stringPropTypeUtil,
			variableType: "font",
			defaultValue: "Roboto"
		});
		const sizePromotions = {
			isActive: false,
			icon: _elementor_icons.ExpandDiagonalIcon,
			propTypeUtil: sizeVariablePropTypeUtil,
			fallbackPropTypeUtil: _elementor_editor_props.sizePropTypeUtil,
			styleTransformer: EmptyTransformer,
			variableType: "size",
			selectionFilter: () => [],
			emptyState: /* @__PURE__ */ react.createElement(_elementor_editor_ui.CtaButton, {
				size: "small",
				href: "https://go.elementor.com/go-pro-panel-size-variable/",
				onClick: () => (0, _elementor_editor_controls.trackUpgradePromotionClick)({
					target_name: "variables_popover",
					location_l1: "variables_list"
				})
			})
		};
		registerVariableType({
			...sizePromotions,
			key: sizeVariablePropTypeUtil.key,
			defaultValue: "0px"
		});
		registerVariableType({
			...sizePromotions,
			key: "global-custom-size-variable"
		});
	}

//#endregion
//#region packages/packages/core/editor-variables/src/renderers/style-variables-renderer.tsx
	var VARIABLES_WRAPPER = ":root";
	function StyleVariablesRenderer() {
		const container = usePortalContainer();
		const styleVariables = useStyleVariables();
		const hasVariables = Object.keys(styleVariables).length > 0;
		if (!container || !hasVariables) return null;
		const cssVariables = convertToCssVariables(styleVariables);
		const wrappedCss = `${VARIABLES_WRAPPER}{${cssVariables}}`;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Portal, { container }, /* @__PURE__ */ react.createElement("style", {
			"data-e-style-id": "e-variables",
			key: wrappedCss
		}, wrappedCss));
	}
	function usePortalContainer() {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/attach-preview"), () => (0, _elementor_editor_v1_adapters.getCanvasIframeDocument)()?.head);
	}
	function useStyleVariables() {
		const [variables, setVariables] = (0, react.useState)({});
		(0, react.useEffect)(() => {
			const unsubscribe = styleVariablesRepository.subscribe(setVariables);
			return () => {
				unsubscribe();
			};
		}, []);
		return variables;
	}
	function cssVariableDeclaration(key, variable) {
		return `--${variable?.deleted ? key : variable.label}:${variable.value};`;
	}
	function convertToCssVariables(variables) {
		return Object.entries(variables).map(([key, variable]) => cssVariableDeclaration(key, variable)).join("");
	}

//#endregion
//#region packages/packages/core/editor-variables/src/prop-types/custom-size-variable-prop-type.ts
	var customSizeVariablePropTypeUtil = (0, _elementor_editor_props.createPropUtils)("global-custom-size-variable", _elementor_schema.z.string());

//#endregion
//#region packages/packages/core/editor-variables/src/utils/size-value.ts
	var DEFAULT_UNIT = "px";
	var CUSTOM_SIZE_LABEL = "fx";
	function sizeValue(value) {
		if (sizeVariablePropTypeUtil.isValid(value) || customSizeVariablePropTypeUtil.isValid(value)) return getVariable(value?.value)?.value;
		if (_elementor_editor_props.sizePropTypeUtil.isValid(value)) {
			const { size, unit } = value.value;
			if ("custom" !== unit) return `${size ?? 0}${unit ?? DEFAULT_UNIT}`;
			if (!size) return CUSTOM_SIZE_LABEL;
			return size;
		}
		return "";
	}

//#endregion
//#region packages/packages/core/editor-variables/src/components/variables-repeater-item-slot.tsx
	var useColorVariable = (value) => {
		const variableId = value?.value?.color?.value;
		return getVariable(variableId || "");
	};
	var BackgroundRepeaterColorIndicator = ({ value }) => {
		const colorVariable = useColorVariable(value);
		return /* @__PURE__ */ react.createElement(ColorIndicator, {
			component: "span",
			size: "inherit",
			value: colorVariable?.value
		});
	};
	var BackgroundRepeaterLabel = ({ value }) => {
		const colorVariable = useColorVariable(value);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { component: "span" }, colorVariable?.label);
	};
	var BoxShadowRepeaterColorIndicator = ({ value }) => {
		const colorVariable = useColorVariable(value);
		return /* @__PURE__ */ react.createElement(ColorIndicator, {
			component: "span",
			size: "inherit",
			value: colorVariable?.value
		});
	};
	var FilterDropShadowIconIndicator = ({ value }) => {
		const { args } = _elementor_editor_props.cssFilterFunctionPropUtil.extract(value) || {};
		const { color } = _elementor_editor_props.dropShadowFilterPropTypeUtil.extract(args) || {};
		const colorVariable = getVariable(color?.value || "");
		return /* @__PURE__ */ react.createElement(ColorIndicator, {
			component: "span",
			size: "inherit",
			value: colorVariable?.value
		});
	};
	var FilterSingleSizeRepeaterLabel = ({ value }) => {
		const cssFilterFunction = _elementor_editor_props.cssFilterFunctionPropUtil.extract(value);
		if (_elementor_editor_props.dropShadowFilterPropTypeUtil.isValid(cssFilterFunction?.args)) return null;
		const args = cssFilterFunction?.args;
		const func = cssFilterFunction?.func?.value ?? "";
		const rendered = sizeValue(args?.value?.size);
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			component: "span",
			style: { textTransform: "capitalize" }
		}, `${func}: `), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { component: "span" }, rendered));
	};
	var FilterDropShadowRepeaterLabel = ({ value }) => {
		const { args } = _elementor_editor_props.cssFilterFunctionPropUtil.extract(value) || {};
		const { xAxis, yAxis, blur } = _elementor_editor_props.dropShadowFilterPropTypeUtil.extract(args) || {};
		const labels = [];
		for (const val of [
			xAxis,
			yAxis,
			blur
		]) {
			const rendered = sizeValue(val);
			if (rendered) labels.push(rendered);
		}
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { component: "span" }, (0, _wordpress_i18n.__)("Drop shadow:", "elementor"), " ", labels.join(" "));
	};
	var BoxShadowRepeaterLabel = ({ value }) => {
		const { position, hOffset, vOffset, blur, spread } = _elementor_editor_props.shadowPropTypeUtil.extract(value) || {};
		const labels = [];
		for (const val of [
			hOffset,
			vOffset,
			blur,
			spread
		]) {
			const rendered = sizeValue(val);
			if (rendered) labels.push(rendered);
		}
		const positionLabel = position?.value || "outset";
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			component: "span",
			style: { textTransform: "capitalize" }
		}, positionLabel, ": ", labels.join(" "));
	};
	var TransformRepeaterLabel = ({ value }) => {
		const labels = [];
		if (_elementor_editor_props.moveTransformPropTypeUtil.isValid(value)) {
			labels.push((0, _wordpress_i18n.__)("Move:", "elementor"));
			const { x, y, z } = _elementor_editor_props.moveTransformPropTypeUtil.extract(value) || {};
			for (const val of [
				x,
				y,
				z
			]) {
				const rendered = sizeValue(val);
				if (rendered) labels.push(rendered);
			}
		}
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { component: "span" }, labels.join(" "));
	};
	var TransitionsSizeVariableLabel = ({ value: prop }) => {
		let label = "";
		const variable = getVariable(prop?.value?.size?.value || "");
		if (variable && _elementor_editor_props.selectionSizePropTypeUtil.isValid(prop)) {
			const selection = prop.value?.selection?.value?.key?.value;
			if (selection) label += `${selection}: `;
			label += variable?.value;
		}
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { component: "span" }, label);
	};

//#endregion
//#region packages/packages/core/editor-variables/src/repeater-injections.ts
	function registerRepeaterInjections() {
		backgroundOverlayRepeaterInjections();
		boxShadowRepeaterInjections();
		transitionsRepeaterInjections();
		transformRepeaterInjections();
		filterRepeaterInjections();
	}
	function backgroundOverlayRepeaterInjections() {
		(0, _elementor_editor_controls.injectIntoRepeaterItemIcon)({
			id: "background-color-variables-icon",
			component: BackgroundRepeaterColorIndicator,
			condition: ({ value }) => {
				return hasAssignedColorVariable(_elementor_editor_props.backgroundColorOverlayPropTypeUtil.extract(value)?.color);
			}
		});
		(0, _elementor_editor_controls.injectIntoRepeaterItemLabel)({
			id: "background-color-variables-label",
			component: BackgroundRepeaterLabel,
			condition: ({ value }) => {
				return hasAssignedColorVariable(_elementor_editor_props.backgroundColorOverlayPropTypeUtil.extract(value)?.color);
			}
		});
	}
	function boxShadowRepeaterInjections() {
		(0, _elementor_editor_controls.injectIntoRepeaterItemIcon)({
			id: "box-shadow-color-variables-icon",
			component: BoxShadowRepeaterColorIndicator,
			condition: ({ value }) => {
				const { color } = _elementor_editor_props.shadowPropTypeUtil.extract(value) || {};
				return hasAssignedColorVariable(color);
			}
		});
		(0, _elementor_editor_controls.injectIntoRepeaterItemLabel)({
			id: "color-variables-box-shadow-label",
			component: BoxShadowRepeaterLabel,
			condition: ({ value }) => {
				const { hOffset, vOffset, blur, spread } = _elementor_editor_props.shadowPropTypeUtil.extract(value) || {};
				return hasAssignedSizeVariable(hOffset) || hasAssignedSizeVariable(vOffset) || hasAssignedSizeVariable(blur) || hasAssignedSizeVariable(spread);
			}
		});
	}
	function transformRepeaterInjections() {
		(0, _elementor_editor_controls.injectIntoRepeaterItemLabel)({
			id: "transform-size-variables-label",
			component: TransformRepeaterLabel,
			condition: ({ value }) => {
				if (_elementor_editor_props.moveTransformPropTypeUtil.isValid(value)) {
					const { x: xAxis, y: yAxis, z: zAxis } = _elementor_editor_props.moveTransformPropTypeUtil.extract(value) || {};
					return hasAssignedSizeVariable(xAxis) || hasAssignedSizeVariable(yAxis) || hasAssignedSizeVariable(zAxis);
				}
				return false;
			}
		});
	}
	function transitionsRepeaterInjections() {
		(0, _elementor_editor_controls.injectIntoRepeaterItemLabel)({
			id: "transition-size-variables-label",
			component: TransitionsSizeVariableLabel,
			condition: ({ value }) => {
				return hasAssignedSizeVariable(_elementor_editor_props.selectionSizePropTypeUtil.extract(value)?.size);
			}
		});
	}
	function filterRepeaterInjections() {
		(0, _elementor_editor_controls.injectIntoRepeaterItemIcon)({
			id: "filters-color-variables-icon",
			component: FilterDropShadowIconIndicator,
			condition: ({ value }) => {
				if (!_elementor_editor_props.cssFilterFunctionPropUtil.isValid(value)) return false;
				const args = _elementor_editor_props.cssFilterFunctionPropUtil.extract(value)?.args;
				if (_elementor_editor_props.dropShadowFilterPropTypeUtil.isValid(args)) return hasAssignedColorVariable(_elementor_editor_props.dropShadowFilterPropTypeUtil.extract(args)?.color);
				return false;
			}
		});
		(0, _elementor_editor_controls.injectIntoRepeaterItemLabel)({
			id: "filters-drop-shadow-size-variables-label",
			component: FilterDropShadowRepeaterLabel,
			condition: ({ value }) => {
				if (!_elementor_editor_props.cssFilterFunctionPropUtil.isValid(value)) return false;
				const args = _elementor_editor_props.cssFilterFunctionPropUtil.extract(value)?.args;
				if (_elementor_editor_props.dropShadowFilterPropTypeUtil.isValid(args)) {
					const { xAxis, yAxis, blur } = _elementor_editor_props.dropShadowFilterPropTypeUtil.extract(args) || {};
					return hasAssignedSizeVariable(xAxis) || hasAssignedSizeVariable(yAxis) || hasAssignedSizeVariable(blur);
				}
				return false;
			}
		});
		(0, _elementor_editor_controls.injectIntoRepeaterItemLabel)({
			id: "filters-size-variables-label",
			component: FilterSingleSizeRepeaterLabel,
			condition: ({ value }) => {
				if (!_elementor_editor_props.cssFilterFunctionPropUtil.isValid(value)) return false;
				const args = _elementor_editor_props.cssFilterFunctionPropUtil.extract(value)?.args;
				return hasAssignedSizeVariable(args?.value?.size);
			}
		});
	}
	function hasAssignedSizeVariable(value) {
		if (sizeVariablePropTypeUtil.isValid(value)) return true;
		if (customSizeVariablePropTypeUtil.isValid(value)) return true;
		return false;
	}
	function hasAssignedColorVariable(value) {
		return !!colorVariablePropTypeUtil.isValid(value);
	}

//#endregion
//#region packages/packages/core/editor-variables/src/init.ts
	var { registerPopoverAction } = _elementor_menus.controlActionsMenu;
	function init() {
		registerVariableTypes();
		registerRepeaterInjections();
		(0, _elementor_editor_controls.registerControlReplacement)({
			component: VariableControl,
			condition: ({ value, placeholder }) => {
				if (hasVariableAssigned(value)) return true;
				if (value) return false;
				return hasVariableAssigned(placeholder);
			}
		});
		registerPopoverAction({
			id: "variables",
			priority: 40,
			useProps: usePropVariableAction
		});
		service.init();
		initMcp((0, _elementor_editor_mcp.getMCPByDomain)("variables", { instructions: `Everything related to V4 ( Atomic ) variables.
# Global variables
- Create/update/delete global variables
- Get list of global variables
- Get details of a global variable
` }), (0, _elementor_editor_mcp.getMCPByDomain)("canvas"));
		(0, _elementor_editor.injectIntoTop)({
			id: "canvas-style-variables-render",
			component: StyleVariablesRenderer
		});
		(0, _elementor_editor.injectIntoLogic)({
			id: "variables-import-listener",
			component: GlobalStylesImportListener
		});
		(0, _elementor_editor.injectIntoLogic)({
			id: "mcp-variable-connect-listener",
			component: McpVariableConnectListener
		});
	}
	function hasVariableAssigned(value) {
		if ((0, _elementor_editor_props.isTransformable)(value)) return hasVariableType(value.$$type);
		return false;
	}

//#endregion
//#region packages/packages/core/editor-variables/src/utils/llm-propvalue-label-resolver.ts
	var defaultResolver = (key) => (value) => {
		const idOrLabel = String(value);
		return {
			$$type: key,
			value: service.variables()[idOrLabel] ? idOrLabel : service.findIdByLabel(idOrLabel)
		};
	};
	var globalVariablesLLMResolvers = {
		"global-color-variable": defaultResolver("global-color-variable"),
		"global-font-variable": defaultResolver("global-font-variable"),
		"global-size-variable": defaultResolver("global-size-variable")
	};

//#endregion
//#region packages/packages/core/editor-variables/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		GLOBAL_VARIABLES_URI: () => GLOBAL_VARIABLES_URI,
		Utils: () => Utils,
		VariablesManagerPanelEmbedded: () => VariablesManagerPanelEmbedded,
		getMenuActionsForVariable: () => getMenuActionsForVariable,
		hasVariable: () => hasVariable,
		init: () => init,
		registerVariableType: () => registerVariableType,
		registerVariableTypes: () => registerVariableTypes,
		service: () => service,
		sizeVariablePropTypeUtil: () => sizeVariablePropTypeUtil,
		trackVariablesManagerEvent: () => trackVariablesManagerEvent
	});
	var Utils = { globalVariablesLLMResolvers };

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorVariables = src_exports;

//#endregion
})(React, elementorV2.editorCurrentUser, elementorV2.editorPanels, elementorV2.editorUi, elementorV2.icons, elementorV2.ui, wp.i18n, elementorV2.events, elementorV2.editorCanvas, elementorV2.editorProps, elementorV2.schema, elementorV2.httpClient, elementorV2.editorV1Adapters, elementorV2.editorControls, elementorV2.utils, elementorV2.editor, elementorV2.editorMcp, elementorV2.menus);
window.elementorV2.editorVariables?.init?.();
//# sourceMappingURL=editor-variables.js.map