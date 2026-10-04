(function(_elementor_editor_v1_adapters, _elementor_session, _elementor_editor_props, _wordpress_i18n, _elementor_utils, _elementor_editor_styles) {

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

//#region packages/packages/libs/editor-elements/src/sync/get-container.ts
	function getContainer(id) {
		return window.elementor?.getContainer?.(id) ?? null;
	}
	var selectElement = (elementId) => {
		try {
			(0, _elementor_editor_v1_adapters.__privateRunCommand)("document/elements/select", { container: getContainer(elementId) });
		} catch {}
	};

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/resolve-element.ts
	function isConnected(container) {
		if (!container) return false;
		if (!container.view?.el) return true;
		return container.view.el.isConnected;
	}
	function resolveContainer(container, id) {
		const looked = container.lookup?.();
		if (isConnected(looked)) return looked;
		const byId = getContainer(id);
		if (isConnected(byId)) return byId;
		return null;
	}
	function getDocumentUtils() {
		return window.$e?.components?.get?.("document")?.utils;
	}
	function findModelInDocument(id) {
		return getDocumentUtils()?.findModelById?.(id) ?? null;
	}
	function addModelToParent(parentId, childData, options) {
		return getDocumentUtils()?.addModelToParent?.(parentId, childData, options) ?? false;
	}
	function removeModelFromParent(parentId, childId) {
		return getDocumentUtils()?.removeModelFromParent?.(parentId, childId) ?? false;
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/resolve-insert-index.ts
	function resolveInsertIndex(position, elements) {
		const lastIndex = elements.length;
		switch (position.kind) {
			case "first": return 0;
			case "last": return lastIndex;
			case "index": {
				const index = typeof position.value === "number" ? position.value : lastIndex;
				return Math.max(0, Math.min(index, lastIndex));
			}
			case "after_type": {
				const anchor = elements.findIndex((element) => element.elType === position.value);
				return anchor >= 0 ? anchor + 1 : lastIndex;
			}
			case "before_type": {
				const anchor = elements.findIndex((element) => element.elType === position.value);
				return anchor >= 0 ? anchor : lastIndex;
			}
			default: return lastIndex;
		}
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/children-dependencies/stash.ts
	var STASH_KEY_PREFIX = "elementor/editor-state";
	var STASH_KEY_SEGMENT = "children-deps";
	function createChildrenStash() {
		return {
			get(elementId, childType) {
				return (0, _elementor_session.getSessionStorageItem)(buildStashKey(elementId, childType));
			},
			save(elementId, childType, data) {
				(0, _elementor_session.setSessionStorageItem)(buildStashKey(elementId, childType), data);
			},
			clear(elementId, childType) {
				(0, _elementor_session.removeSessionStorageItem)(buildStashKey(elementId, childType));
			},
			clearAllForElement(elementId) {
				const prefix = buildElementStashPrefix(elementId);
				for (let index = sessionStorage.length - 1; index >= 0; index--) {
					const key = sessionStorage.key(index);
					if (key?.startsWith(prefix)) (0, _elementor_session.removeSessionStorageItem)(key);
				}
			}
		};
	}
	function buildStashKey(elementId, childType) {
		return `${STASH_KEY_PREFIX}/${elementId}/${STASH_KEY_SEGMENT}/${childType}`;
	}
	function buildElementStashPrefix(elementId) {
		return `${STASH_KEY_PREFIX}/${elementId}/${STASH_KEY_SEGMENT}/`;
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/generate-element-id.ts
	var generateElementId = () => {
		return window.elementorCommon?.helpers?.getUniqueId?.() ?? `el-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
	};

//#endregion
//#region packages/packages/libs/editor-elements/src/children-dependencies/utils.ts
	function evaluateWhen(when, settings) {
		return (0, _elementor_editor_props.isDependencyMet)(when, settings).isMet;
	}
	function ensureModelId(model) {
		const { skipDefaultChildren: _skipDefaultChildren, ...rest } = model;
		return rest.id ? rest : {
			...rest,
			id: generateElementId()
		};
	}
	function resolveChildModelData(elementId, rule, stash) {
		const stashed = rule.stash ? stash.get(elementId, rule.child_type) : void 0;
		return {
			modelData: ensureModelId(stashed ?? rule.default_model ?? { elType: rule.child_type }),
			wasStashed: Boolean(stashed)
		};
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/children-dependencies/bind-settings-reconcile.ts
	function bindSettingsReconcile({ model, elementConfig }) {
		const stash = createChildrenStash();
		const rules = elementConfig?.children_dependencies;
		if (!rules?.length) return () => {};
		const settingsModel = model.get("settings");
		const elementId = model.get("id");
		if (!settingsModel?.on || !settingsModel?.off || !elementId) return () => {};
		const lastMet = /* @__PURE__ */ new Map();
		rules.forEach((rule) => {
			lastMet.set(rule.child_type, evaluateWhen(rule.when, settingsModel.toJSON()));
		});
		const onChange = () => {
			const currentSettings = settingsModel.toJSON();
			rules.forEach((rule) => {
				const previous = lastMet.get(rule.child_type) ?? false;
				const current = evaluateWhen(rule.when, currentSettings);
				if (previous === current) return;
				lastMet.set(rule.child_type, current);
				if (current) attachChildFromRule(elementId, rule, stash);
				else detachChildFromRule(elementId, rule, stash);
			});
		};
		settingsModel.on("change", onChange);
		return () => {
			settingsModel.off?.("change", onChange);
			stash.clearAllForElement(elementId);
		};
	}
	function attachChildFromRule(parentId, rule, stash) {
		const currentChildren = getDirectChildData(getContainer(parentId) ?? void 0);
		if (currentChildren.some((child) => child.elType === rule.child_type)) return;
		const { modelData, wasStashed } = resolveChildModelData(parentId, rule, stash);
		if (!addModelToParent(parentId, modelData, { at: resolveInsertIndex(rule.position, currentChildren) })) return;
		if (wasStashed) stash.clear(parentId, rule.child_type);
		requestNavigatorRefresh(parentId);
	}
	function detachChildFromRule(parentId, rule, stash) {
		const child = (getContainer(parentId) ?? void 0)?.children?.find((candidate) => candidate.model.get("elType") === rule.child_type);
		if (!child) return;
		const childSnapshot = child.model.toJSON();
		if (!removeModelFromParent(parentId, child.id)) return;
		if (rule.stash) stash.save(parentId, rule.child_type, childSnapshot);
		requestNavigatorRefresh(parentId);
	}
	function requestNavigatorRefresh(parentId) {
		if (typeof window === "undefined" || typeof window.dispatchEvent !== "function") return;
		window.dispatchEvent(new CustomEvent("elementor/navigator/refresh-children", { detail: { elementId: parentId } }));
	}
	function getDirectChildData(parent) {
		return (parent?.children ?? []).map((child) => child.model.toJSON());
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/children-dependencies/reconcile-initial-children.ts
	function reconcileInitialChildren({ elementId, elementConfig, attributes }) {
		const stash = createChildrenStash();
		const rules = elementConfig?.children_dependencies;
		if (!rules?.length) return;
		const elements = [...attributes.elements ?? []];
		const settings = attributes.settings ?? {};
		rules.forEach((rule) => {
			const isMet = evaluateWhen(rule.when, settings);
			const existingIndex = elements.findIndex((element) => element.elType === rule.child_type);
			const isPresent = existingIndex >= 0;
			if (isMet && !isPresent) {
				const { modelData, wasStashed } = resolveChildModelData(elementId, rule, stash);
				const insertAt = resolveInsertIndex(rule.position, elements);
				elements.splice(insertAt, 0, modelData);
				if (wasStashed) stash.clear(elementId, rule.child_type);
				return;
			}
			if (!isMet && isPresent) {
				const [removed] = elements.splice(existingIndex, 1);
				if (rule.stash && removed) stash.save(elementId, rule.child_type, removed);
			}
		});
		attributes.elements = elements;
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/model-utils.ts
	function findChildRecursive(model, predicate) {
		const childModels = model.get("elements") ?? [];
		for (const childModel of childModels) {
			if (predicate(childModel)) return { model: childModel };
			const found = findChildRecursive(childModel, predicate);
			if (found) return found;
		}
		return null;
	}
	function getElementChildren(model, predicate) {
		return (model.get("elements") ?? []).filter((childModel) => !predicate || predicate(childModel)).map((childModel) => ({ model: childModel }));
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/hooks/use-element-children.ts
	function toElementModel({ model }) {
		return {
			id: model.get("id"),
			editorSettings: model.get("editor_settings") ?? {}
		};
	}
	function useElementChildren(elementId, childrenTypes, { includeSelfAsParent = false } = {}) {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)([
			(0, _elementor_editor_v1_adapters.v1ReadyEvent)(),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/create"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/delete"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/update"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/set-settings")
		], () => {
			const model = getContainer(elementId)?.model;
			if (!model) return {};
			return Object.entries(childrenTypes).reduce((acc, [parentType, childType]) => {
				const parent = includeSelfAsParent && model.get("elType") === parentType ? { model } : findChildRecursive(model, (m) => m.get("elType") === parentType);
				if (!parent) {
					acc[childType] = [];
					return acc;
				}
				acc[childType] = getElementChildren(parent.model, (m) => m.get("elType") === childType).map(toElementModel);
				return acc;
			}, {});
		}, [elementId]);
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/get-element-editor-settings.ts
	function getElementEditorSettings(elementId) {
		return getContainer(elementId)?.model.get("editor_settings") ?? {};
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/hooks/use-element-editor-settings.ts
	var useElementEditorSettings = (elementId) => {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)((0, _elementor_editor_v1_adapters.windowEvent)("elementor/element/update_editor_settings"), () => getElementEditorSettings(elementId), [elementId]);
	};

//#endregion
//#region packages/packages/libs/editor-elements/src/hooks/use-parent-element.ts
	function useParentElement(elementId) {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)([(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/create")], () => {
			if (!elementId) return null;
			const element = window?.elementor?.getContainer?.(elementId);
			if (!element) return null;
			return element.parent;
		}, [elementId]);
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/get-widgets-cache.ts
	function getWidgetsCache() {
		return window?.elementor?.widgetsCache || null;
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/get-element-type.ts
	function getElementType(type) {
		if (!type) return null;
		const elementType = getWidgetsCache()?.[type];
		if (!elementType?.atomic_controls) return null;
		if (!elementType?.atomic_props_schema) return null;
		return {
			key: type,
			controls: elementType.atomic_controls,
			propsSchema: elementType.atomic_props_schema,
			dependenciesPerTargetMapping: elementType.dependencies_per_target_mapping ?? {},
			title: elementType.title,
			styleStates: elementType.atomic_style_states ?? [],
			pseudoStates: elementType.atomic_pseudo_states ?? []
		};
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/get-selected-elements.ts
	function getSelectedElements() {
		return (window.elementor?.selection?.getElements?.() ?? []).reduce((acc, el) => {
			const type = el.model.get("widgetType") || el.model.get("elType");
			if (type) acc.push({
				id: el.model.get("id"),
				type
			});
			return acc;
		}, []);
	}
	function getSelectedElement() {
		const elements = getSelectedElements();
		const [element] = elements;
		const elementType = getElementType(element?.type);
		if (elements.length !== 1 || !elementType || !element) return {
			element: null,
			elementType: null
		};
		return {
			element,
			elementType
		};
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/hooks/use-selected-element.ts
	function useSelectedElement() {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)([
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/select"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/deselect"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/select-all"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/deselect-all")
		], getSelectedElement);
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/get-element-setting.ts
	var getElementSetting = (elementId, settingKey) => {
		return getContainer(elementId)?.settings?.get(settingKey) ?? null;
	};
	var getElementSettings = (elementId, settingKey) => {
		return Object.fromEntries(settingKey.map((key) => [key, getElementSetting(elementId, key)]));
	};

//#endregion
//#region packages/packages/libs/editor-elements/src/hooks/use-selected-element-settings.ts
	function useSelectedElementSettings() {
		return (0, _elementor_editor_v1_adapters.__privateUseListenTo)([
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/select"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/deselect"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/select-all"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/deselect-all"),
			(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/set-settings")
		], () => {
			const { element, elementType } = getSelectedElement();
			if (!element || !elementType) return {
				element: null,
				elementType: null,
				settings: null
			};
			return {
				element,
				elementType,
				settings: getElementSettings(element.id, Object.keys(elementType.propsSchema))
			};
		});
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/create-element.ts
	function createElement({ container, model, options }) {
		return (0, _elementor_editor_v1_adapters.__privateRunCommandSync)("document/elements/create", {
			container,
			model,
			options: {
				edit: false,
				...options
			}
		});
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/delete-element.ts
	function deleteElement({ container, options = {} }) {
		(0, _elementor_editor_v1_adapters.__privateRunCommandSync)("document/elements/delete", {
			container,
			options
		});
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/create-elements.ts
	var createElements = ({ elements, title, subtitle = (0, _wordpress_i18n.__)("Item added", "elementor") }) => {
		return (0, _elementor_editor_v1_adapters.undoable)({
			do: ({ elements: elementsParam }) => {
				const createdElements = [];
				elementsParam.forEach(({ container, options, ...elementParams }) => {
					const parentContainer = container.lookup?.() ?? container;
					if (!parentContainer) throw new Error("Parent container not found");
					const element = createElement({
						container: parentContainer,
						...elementParams,
						options: {
							...options,
							useHistory: false
						}
					});
					createdElements.push({
						container: element,
						parentContainer,
						model: element.model?.toJSON() || {},
						options,
						containerId: element.id,
						parentContainerId: parentContainer.id
					});
				});
				return { createdElements };
			},
			undo: (_, { createdElements }) => {
				[...createdElements].reverse().forEach(({ container, containerId, parentContainerId }) => {
					const freshContainer = resolveContainer(container, containerId);
					if (freshContainer) {
						deleteElement({
							container: freshContainer,
							options: { useHistory: false }
						});
						return;
					}
					removeModelFromParent(parentContainerId, containerId);
				});
			},
			redo: (_, { createdElements }) => {
				const newElements = [];
				createdElements.forEach(({ parentContainer, parentContainerId, model, options }) => {
					const freshParent = resolveContainer(parentContainer, parentContainerId);
					if (freshParent) {
						const element = createElement({
							container: freshParent,
							model,
							options: {
								...options,
								useHistory: false
							}
						});
						newElements.push({
							container: element,
							parentContainer: freshParent,
							model: element.model.toJSON(),
							options,
							containerId: element.id,
							parentContainerId: freshParent.id
						});
						return;
					}
					addModelToParent(parentContainerId, model);
					newElements.push({
						container: parentContainer,
						parentContainer,
						model,
						options,
						containerId: model.id ?? "",
						parentContainerId
					});
				});
				return { createdElements: newElements };
			}
		}, {
			title,
			subtitle
		})({ elements });
	};

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/drop-element.ts
	function dropElement({ containerId, model, options }) {
		const container = getContainer(containerId);
		if (!container) throw new Error(`Container with ID "${containerId}" not found`);
		return (0, _elementor_editor_v1_adapters.__privateRunCommandSync)("preview/drop", {
			container,
			model,
			options
		});
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/duplicate-element.ts
	function duplicateElement({ element, options = {} }) {
		const currentIndex = element.view?._index ?? 0;
		return (0, _elementor_editor_v1_adapters.__privateRunCommandSync)("document/elements/duplicate", {
			container: element,
			options: {
				at: options.clone !== false ? currentIndex + 1 : void 0,
				edit: false,
				...options
			}
		});
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/duplicate-elements.ts
	var duplicateElements = ({ elementIds, title, subtitle = (0, _wordpress_i18n.__)("Item duplicated", "elementor"), onDuplicateElements, onRestoreElements }) => {
		return (0, _elementor_editor_v1_adapters.undoable)({
			do: ({ elementIds: elementIdsToDuplicate }) => {
				onDuplicateElements?.();
				const duplicatedElements = [];
				elementIdsToDuplicate.forEach((elementId) => {
					const originalContainer = getContainer(elementId);
					if (!originalContainer?.parent) return;
					const duplicatedElement = duplicateElement({
						element: originalContainer,
						options: { useHistory: false }
					});
					if (!duplicatedElement.parent) return;
					duplicatedElements.push({
						container: duplicatedElement,
						parentContainer: duplicatedElement.parent,
						model: duplicatedElement.model.toJSON(),
						at: duplicatedElement.view?._index,
						containerId: duplicatedElement.id,
						parentContainerId: duplicatedElement.parent.id
					});
				});
				return { duplicatedElements };
			},
			undo: (_, { duplicatedElements }) => {
				onRestoreElements?.();
				[...duplicatedElements].reverse().forEach(({ container, containerId, parentContainerId }) => {
					const freshContainer = resolveContainer(container, containerId);
					if (freshContainer) {
						deleteElement({
							container: freshContainer,
							options: { useHistory: false }
						});
						return;
					}
					removeModelFromParent(parentContainerId, containerId);
				});
			},
			redo: (_, { duplicatedElements: previousElements }) => {
				onDuplicateElements?.();
				const duplicatedElements = [];
				previousElements.forEach(({ parentContainer, parentContainerId, model, at }) => {
					const freshParent = resolveContainer(parentContainer, parentContainerId);
					if (freshParent) {
						const createdElement = createElement({
							container: freshParent,
							model,
							options: {
								useHistory: false,
								clone: false,
								at
							}
						});
						duplicatedElements.push({
							container: createdElement,
							parentContainer: freshParent,
							model,
							at,
							containerId: createdElement.id,
							parentContainerId: freshParent.id
						});
						return;
					}
					addModelToParent(parentContainerId, model, { at });
					duplicatedElements.push({
						container: parentContainer,
						parentContainer,
						model,
						at,
						containerId: model.id ?? "",
						parentContainerId
					});
				});
				return { duplicatedElements };
			}
		}, {
			title,
			subtitle
		})({ elementIds });
	};

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/get-preview-element-dom.ts
	function getPreviewElementDOM(id) {
		try {
			const fromContainer = getContainer(id)?.view?.el;
			if (fromContainer) return fromContainer;
			return queryPreviewDOMByElementId(id);
		} catch {
			return null;
		}
	}
	function queryPreviewDOMByElementId(id) {
		const previewDocument = window.elementor?.getPreviewContainer?.()?.view?.el?.ownerDocument;
		if (!previewDocument) return null;
		return previewDocument.querySelector(`[data-id="${id}"]`);
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/get-current-document-container.ts
	function getCurrentDocumentContainer() {
		return window.elementor?.documents?.getCurrent?.()?.container ?? null;
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/get-current-document-id.ts
	function getCurrentDocumentId() {
		const extendedWindow = window;
		try {
			return extendedWindow.elementor?.documents?.getCurrentId?.() ?? null;
		} catch {
			return null;
		}
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/get-element-icon.ts
	function getElementIcon(elementId) {
		const container = getContainer(elementId);
		const type = container?.model.get("widgetType") || container?.model.get("elType");
		if (!type) return null;
		return getWidgetsCache()?.[type]?.icon ?? null;
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/errors.ts
	var ElementNotFoundError = (0, _elementor_utils.createError)({
		code: "element_not_found",
		message: "Element not found."
	});
	var StyleNotFoundError = (0, _elementor_utils.createError)({
		code: "style_not_found",
		message: "Style not found."
	});
	var ElementTypeNotExistsError = (0, _elementor_utils.createError)({
		code: "element_type_not_exists",
		message: "Element type does not exist."
	});
	var ElementLabelNotExistsError = (0, _elementor_utils.createError)({
		code: "element_label_not_exists",
		message: "Element label does not exist."
	});
	var ElementParentNotFoundError = (0, _elementor_utils.createError)({
		code: "element_parent_not_found",
		message: "Element parent not found."
	});
	var ElementIndexNotFoundError = (0, _elementor_utils.createError)({
		code: "element_index_not_found",
		message: "Element index not found."
	});

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/get-element-label.ts
	function getElementLabel(elementId) {
		if (!elementId) elementId = getSelectedElements()?.[0]?.id;
		const container = getContainer(elementId);
		const type = container?.model.get("widgetType") || container?.model.get("elType");
		if (!type) throw new ElementTypeNotExistsError({ context: { elementId } });
		const label = getWidgetsCache()?.[type]?.title;
		if (!label) throw new ElementLabelNotExistsError({ context: { elementType: type } });
		return label;
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/get-element-title.ts
	function extractString(value) {
		if (typeof value === "string") return value || null;
		if (value && typeof value === "object" && "value" in value && typeof value.value === "string") return value.value || null;
		return null;
	}
	function getElementTitle(elementId) {
		const editorTitle = extractString(getElementEditorSettings(elementId)?.title);
		if (editorTitle) return editorTitle;
		const legacyTitle = extractString(getElementSetting(elementId, "_title"));
		if (legacyTitle) return legacyTitle;
		const presetTitle = extractString(getElementSetting(elementId, "presetTitle"));
		if (presetTitle) return presetTitle;
		try {
			return getElementLabel(elementId);
		} catch {
			return null;
		}
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/get-element-styles.ts
	var getElementStyles = (elementID) => {
		return getContainer(elementID)?.model.get("styles") || null;
	};

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/get-all-descendants.ts
	function getAllDescendants(container) {
		return [container, ...(container.children ?? []).flatMap((child) => getAllDescendants(child))];
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/get-elements.ts
	function getElements(root) {
		const container = root ? getContainer(root) : getCurrentDocumentContainer();
		if (!container) return [];
		return [container, ...[...container.model.get("elements") ?? []].flatMap((childModel) => getElements(childModel.get("id")))];
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/move-element.ts
	function moveElement({ element, targetContainer, options = {} }) {
		const resolvedElement = element.lookup?.();
		const resolvedTarget = targetContainer.lookup?.();
		if (!resolvedElement) throw new Error(`Element not found: ${element.id}`);
		if (!resolvedTarget) throw new Error(`Target container not found: ${targetContainer.id}`);
		const modelToRecreate = resolvedElement.model.toJSON();
		deleteElement({
			container: resolvedElement,
			options: {
				...options,
				useHistory: false
			}
		});
		return createElement({
			container: resolvedTarget,
			model: modelToRecreate,
			options: {
				edit: false,
				...options,
				useHistory: false
			}
		});
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/move-elements.ts
	var moveElements = ({ moves: movesToMake, title, subtitle = (0, _wordpress_i18n.__)("Elements moved", "elementor"), onMoveElements, onRestoreElements }) => {
		return (0, _elementor_editor_v1_adapters.undoable)({
			do: ({ moves }) => {
				const movedElements = [];
				onMoveElements?.();
				moves.forEach(({ element, targetContainer, options }) => {
					const sourceElement = element.lookup?.() ?? element;
					const target = targetContainer.lookup?.() ?? targetContainer;
					if (!sourceElement) throw new Error("Element not found");
					if (!target) throw new Error("Target container not found");
					if (!sourceElement.parent) throw new Error("Element has no parent container");
					const originalContainer = sourceElement.parent;
					const originalIndex = originalContainer.children?.indexOf(sourceElement) ?? -1;
					const newElement = moveElement({
						element: sourceElement,
						targetContainer: target,
						options: {
							...options,
							useHistory: false
						}
					});
					movedElements.push({
						element: newElement,
						originalContainer,
						originalIndex,
						targetContainer: target,
						options,
						elementId: newElement.id,
						originalContainerId: originalContainer.id,
						targetContainerId: target.id
					});
				});
				return { movedElements };
			},
			undo: (_, { movedElements }) => {
				onRestoreElements?.();
				[...movedElements].reverse().forEach(({ element, elementId, originalContainer, originalContainerId, originalIndex }) => {
					const freshElement = resolveContainer(element, elementId);
					const freshOriginalContainer = resolveContainer(originalContainer, originalContainerId);
					if (!freshElement || !freshOriginalContainer) return;
					moveElement({
						element: freshElement,
						targetContainer: freshOriginalContainer,
						options: {
							useHistory: false,
							at: originalIndex >= 0 ? originalIndex : void 0
						}
					});
				});
			},
			redo: (_, { movedElements }) => {
				const newMovedElements = [];
				onMoveElements?.();
				movedElements.forEach(({ element, elementId, originalContainer, originalContainerId, originalIndex, targetContainer, targetContainerId, options }) => {
					const freshElement = resolveContainer(element, elementId);
					const freshOriginalContainer = resolveContainer(originalContainer, originalContainerId);
					const freshTarget = resolveContainer(targetContainer, targetContainerId);
					if (!freshElement || !freshOriginalContainer || !freshTarget) return;
					const newElement = moveElement({
						element: freshElement,
						targetContainer: freshTarget,
						options: {
							...options,
							useHistory: false
						}
					});
					newMovedElements.push({
						element: newElement,
						originalContainer: freshOriginalContainer,
						originalIndex,
						targetContainer: freshTarget,
						options,
						elementId: newElement.id,
						originalContainerId: freshOriginalContainer.id,
						targetContainerId: freshTarget.id
					});
				});
				return { movedElements: newMovedElements };
			}
		}, {
			title,
			subtitle
		})({ moves: movesToMake });
	};

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/remove-elements.ts
	var removeElements = ({ elementIds, title, subtitle = (0, _wordpress_i18n.__)("Item removed", "elementor"), onRemoveElements, onRestoreElements }) => {
		return (0, _elementor_editor_v1_adapters.undoable)({
			do: ({ elementIds: elementIdsParam }) => {
				const removedElements = [];
				elementIdsParam.forEach((elementId) => {
					const container = getContainer(elementId);
					if (container?.parent) removedElements.push({
						container,
						parent: container.parent,
						model: container.model.toJSON(),
						at: container.view?._index ?? 0,
						containerId: container.id,
						parentId: container.parent.id
					});
				});
				onRemoveElements?.();
				removedElements.forEach(({ container }) => {
					deleteElement({
						container,
						options: { useHistory: false }
					});
				});
				return { removedElements };
			},
			undo: (_, { removedElements }) => {
				onRestoreElements?.();
				[...removedElements].reverse().forEach(({ parent, parentId, model, at }) => {
					const freshParent = resolveContainer(parent, parentId);
					if (freshParent) {
						createElement({
							container: freshParent,
							model,
							options: {
								useHistory: false,
								at
							}
						});
						return;
					}
					addModelToParent(parentId, model, { at });
				});
			},
			redo: (_, { removedElements }) => {
				onRemoveElements?.();
				const newRemovedElements = [];
				removedElements.forEach(({ container, parent, model, at, containerId, parentId }) => {
					const freshContainer = resolveContainer(container, containerId);
					const freshParent = resolveContainer(parent, parentId);
					if (freshContainer && freshParent) {
						deleteElement({
							container: freshContainer,
							options: { useHistory: false }
						});
						newRemovedElements.push({
							container: freshContainer,
							parent: freshParent,
							model,
							at,
							containerId,
							parentId
						});
						return;
					}
					removeModelFromParent(parentId, containerId);
					newRemovedElements.push({
						container,
						parent,
						model,
						at,
						containerId,
						parentId
					});
				});
				return { removedElements: newRemovedElements };
			}
		}, {
			title,
			subtitle
		})({ elementIds });
	};

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/replace-element.ts
	var replaceElement = ({ currentElementId, newElement, withHistory = true }) => {
		const currentElementContainer = getContainer(currentElementId);
		if (!currentElementContainer) throw new ElementNotFoundError({ context: { elementId: currentElementId } });
		const { container, index } = getNewElementContainer(currentElementContainer, newElement);
		const newElementInstance = createElement({
			container,
			model: newElement,
			options: {
				at: index,
				useHistory: withHistory
			}
		});
		deleteElement({
			container: currentElementContainer,
			options: { useHistory: withHistory }
		});
		return newElementInstance;
	};
	function getNewElementContainer(currentElementContainer, newElement) {
		const { parent } = currentElementContainer;
		if (!parent) throw new ElementParentNotFoundError({ context: { elementId: currentElementContainer.id } });
		const elementIndex = currentElementContainer.view?._index ?? 0;
		if (elementIndex === -1) throw new ElementIndexNotFoundError({ context: { elementId: currentElementContainer.id } });
		let location = {
			container: parent,
			index: elementIndex
		};
		if (parent.id === "document" && newElement.elType === "widget") location = createWrapperForWidget(parent, elementIndex);
		return location;
	}
	var DEFAULT_CONTAINER_TYPE = "e-flexbox";
	function createWrapperForWidget(parent, elementIndex) {
		return {
			container: createElement({
				container: parent,
				model: { elType: DEFAULT_CONTAINER_TYPE },
				options: {
					at: elementIndex,
					useHistory: false
				}
			}),
			index: 0
		};
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/update-element-editor-settings.ts
	var updateElementEditorSettings = ({ elementId, settings }) => {
		const element = getContainer(elementId);
		if (!element) throw new Error(`Element with id ${elementId} not found`);
		const editorSettings = element.model.get("editor_settings") ?? {};
		element.model.set("editor_settings", {
			...editorSettings,
			...settings
		});
		(0, _elementor_editor_v1_adapters.__privateRunCommandSync)("document/save/set-is-modified", { status: true }, { internal: true });
	};

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/update-element-settings.ts
	var updateElementSettings = ({ id, props, withHistory = true }) => {
		const container = getContainer(id);
		if (!container) return;
		const args = {
			container,
			settings: { ...props }
		};
		if (withHistory) (0, _elementor_editor_v1_adapters.__privateRunCommandSync)("document/elements/settings", args);
		else (0, _elementor_editor_v1_adapters.__privateRunCommandSync)("document/elements/set-settings", args, { internal: true });
	};

//#endregion
//#region packages/packages/libs/editor-elements/src/link-restriction.ts
	var ANCHOR_SELECTOR = "a, [data-action-link]";
	function getLinkInLinkRestriction(elementId, resolvedValue) {
		const anchoredDescendantId = getAnchoredDescendantId(elementId);
		if (anchoredDescendantId) return {
			shouldRestrict: true,
			reason: "descendant",
			elementId: anchoredDescendantId
		};
		if (checkForInlineLink(elementId, resolvedValue)) return {
			shouldRestrict: true,
			reason: "descendant",
			elementId
		};
		const ancestor = getAnchoredAncestorId(elementId);
		if (ancestor) return {
			shouldRestrict: true,
			reason: "ancestor",
			elementId: ancestor
		};
		return { shouldRestrict: false };
	}
	function getAnchoredDescendantId(elementId) {
		const element = getElementDOM(elementId);
		if (!element) return null;
		for (const childAnchorElement of Array.from(element.querySelectorAll(ANCHOR_SELECTOR))) {
			const childElementId = findElementIdOf(childAnchorElement);
			if (childElementId !== elementId) return childElementId;
		}
		return null;
	}
	function getAnchoredAncestorId(elementId) {
		const element = getElementDOM(elementId);
		if (!element || element.parentElement === null) return null;
		const parentAnchor = element.parentElement.closest(ANCHOR_SELECTOR);
		return parentAnchor ? findElementIdOf(parentAnchor) : null;
	}
	function isElementAnchored(elementId) {
		const element = getElementDOM(elementId);
		if (!element) return false;
		if (element.matches(ANCHOR_SELECTOR)) return true;
		return doesElementContainAnchor(element);
	}
	function doesElementContainAnchor(element) {
		for (const child of Array.from(element.children)) {
			if (isElementorElement(child)) continue;
			if (child.matches(ANCHOR_SELECTOR)) return true;
			if (doesElementContainAnchor(child)) return true;
		}
		return false;
	}
	function findElementIdOf(element) {
		return element.closest("[data-id]")?.dataset.id || null;
	}
	function checkForInlineLink(elementId, resolvedValue) {
		const element = getElementDOM(elementId);
		if (!element) return false;
		if (element.matches(ANCHOR_SELECTOR)) return false;
		if ((resolvedValue ?? getElementSetting(elementId, "link")?.value)?.destination) return false;
		return element.querySelector(ANCHOR_SELECTOR) !== null;
	}
	function getElementDOM(id) {
		return getPreviewElementDOM(id);
	}
	function isElementorElement(element) {
		return element.hasAttribute("data-id");
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/styles/consts.ts
	var ELEMENT_STYLE_CHANGE_EVENT = "elementor/editor-v2/editor-elements/style";
	var styleRerenderEvents = [
		(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/create"),
		(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/duplicate"),
		(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/import"),
		(0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/paste"),
		(0, _elementor_editor_v1_adapters.windowEvent)(ELEMENT_STYLE_CHANGE_EVENT)
	];

//#endregion
//#region packages/packages/libs/editor-elements/src/styles/mutate-element-styles.ts
	function mutateElementStyles(elementId, mutator) {
		const container = getContainer(elementId);
		if (!container) throw new ElementNotFoundError({ context: { elementId } });
		const oldIds = Object.keys(container.model.get("styles") ?? {});
		const styles = mutateStyles(container, mutator);
		clearRemovedClasses(container, {
			oldIds,
			newIds: Object.keys(styles)
		});
		notifyChanges();
		return styles;
	}
	function mutateStyles(container, mutator) {
		const styles = structuredClone(container.model.get("styles")) ?? {};
		const entries = Object.entries(mutator(styles)).map(([styleId, style]) => {
			style.variants = removeEmptyVariants(style);
			return [styleId, style];
		}).filter(([, style]) => {
			return !isStyleEmpty(style);
		});
		const mutatedStyles = Object.fromEntries(entries);
		container.model.set("styles", mutatedStyles);
		return mutatedStyles;
	}
	function removeEmptyVariants(style) {
		return style.variants.filter(({ props, custom_css: customCss }) => Object.keys(props).length > 0 || customCss?.raw);
	}
	function isStyleEmpty(style) {
		return style.variants.length === 0;
	}
	function clearRemovedClasses(container, { oldIds, newIds }) {
		const removedIds = oldIds.filter((id) => !newIds.includes(id));
		if (!removedIds.length) return;
		const classesProps = structuredClone(getClassesProps(container));
		classesProps.forEach(([, prop]) => {
			prop.value = prop.value.filter((value) => !removedIds.includes(value));
		});
		updateElementSettings({
			id: container.id,
			props: Object.fromEntries(classesProps),
			withHistory: false
		});
	}
	function getClassesProps(container) {
		return Object.entries(container.settings.toJSON()).filter((prop) => {
			const [, value] = prop;
			return _elementor_editor_props.classesPropTypeUtil.isValid(value);
		});
	}
	function notifyChanges() {
		dispatchChangeEvent();
		(0, _elementor_editor_v1_adapters.__privateRunCommandSync)("document/save/set-is-modified", { status: true }, { internal: true });
	}
	function dispatchChangeEvent() {
		window.dispatchEvent(new CustomEvent(ELEMENT_STYLE_CHANGE_EVENT));
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/styles/create-element-style.ts
	function createElementStyle({ styleId, elementId, classesProp, label, meta, props, custom_css: customCss = null, additionalVariants = [] }) {
		let id = styleId;
		mutateElementStyles(elementId, (styles) => {
			id ?? (id = (0, _elementor_editor_styles.generateId)(`e-${elementId}-`, Object.keys(styles)));
			const variants = [{
				meta,
				props,
				custom_css: customCss
			}, ...additionalVariants];
			styles[id] = {
				id,
				label,
				type: "class",
				variants
			};
			addStyleToClassesProp(elementId, classesProp, id);
			return styles;
		});
		return id;
	}
	function addStyleToClassesProp(elementId, classesProp, styleId) {
		const base = getElementSetting(elementId, classesProp);
		const classesPropValue = _elementor_editor_props.classesPropTypeUtil.create((prev) => {
			return [...prev ?? [], styleId];
		}, { base });
		updateElementSettings({
			id: elementId,
			props: { [classesProp]: classesPropValue },
			withHistory: false
		});
	}
	function shouldCreateNewLocalStyle(payload) {
		return !payload?.styleId && !payload?.provider;
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/styles/delete-element-style.ts
	function deleteElementStyle(elementId, styleId) {
		mutateElementStyles(elementId, (styles) => {
			delete styles[styleId];
			return styles;
		});
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/styles/update-element-style.ts
	function updateElementStyle(args) {
		mutateElementStyles(args.elementId, (styles) => {
			const style = styles[args.styleId];
			if (!style) throw new StyleNotFoundError({ context: { styleId: args.styleId } });
			const variant = (0, _elementor_editor_styles.getVariantByMeta)(style, args.meta);
			const customCss = ("custom_css" in args ? args.custom_css : variant?.custom_css) ?? null;
			if (variant) {
				variant.props = (0, _elementor_editor_props.mergeProps)(variant.props, args.props);
				variant.custom_css = customCss?.raw ? customCss : null;
			} else style.variants.push({
				meta: args.meta,
				props: args.props,
				custom_css: customCss
			});
			return styles;
		});
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/get-element-interactions.ts
	function getElementInteractions(elementId) {
		const interactions = getContainer(elementId)?.model?.get("interactions");
		if (typeof interactions === "string") return JSON.parse(interactions);
		return interactions;
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/utils/get-default-style-tag-from-preview.ts
	var DEFAULT_STYLE_CLASS_PREFIX = "e-default-";
	function parseDefaultStyleTagFromClassList(classList) {
		for (const className of classList) if (className.startsWith("e-default-")) return className.slice(10);
		return null;
	}
	function getDefaultStyleTagFromPreviewElement(elementId) {
		const renderRoot = getAtomicElementRenderRoot(elementId);
		if (!renderRoot) return null;
		return parseDefaultStyleTagFromClassList(renderRoot.classList);
	}
	function getAtomicElementRenderRoot(elementId) {
		const view = getContainerView(elementId);
		if (view?.getDomElement) {
			const domElement = view.getDomElement().get?.(0);
			if (domElement) return domElement;
		}
		const wrapper = view?.el ?? getPreviewElementDOM(elementId);
		if (!wrapper) return null;
		if (wrapper.hasAttribute("data-id")) return wrapper;
		const firstChild = wrapper.firstElementChild;
		if (firstChild instanceof HTMLElement) return firstChild;
		return wrapper;
	}
	function getContainerView(elementId) {
		return getContainer(elementId)?.view ?? null;
	}

//#endregion
//#region packages/packages/libs/editor-elements/src/sync/update-element-interactions.ts
	var updateElementInteractions = ({ elementId, interactions }) => {
		const element = getContainer(elementId);
		if (!element) throw new Error(`Element with id ${elementId} not found`);
		element.model.set("interactions", interactions);
		window.dispatchEvent(new CustomEvent("elementor/element/update_interactions"));
		(0, _elementor_editor_v1_adapters.__privateRunCommandSync)("document/save/set-is-modified", { status: true }, { internal: true });
	};
	var playElementInteractions = (elementId, interactionId) => {
		window.top?.dispatchEvent(new CustomEvent("atomic/play_interactions", { detail: {
			elementId,
			interactionId
		} }));
	};

//#endregion
//#region packages/packages/libs/editor-elements/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		DEFAULT_STYLE_CLASS_PREFIX: () => DEFAULT_STYLE_CLASS_PREFIX,
		ELEMENT_STYLE_CHANGE_EVENT: () => ELEMENT_STYLE_CHANGE_EVENT,
		addModelToParent: () => addModelToParent,
		bindSettingsReconcile: () => bindSettingsReconcile,
		createElement: () => createElement,
		createElementStyle: () => createElementStyle,
		createElements: () => createElements,
		deleteElement: () => deleteElement,
		deleteElementStyle: () => deleteElementStyle,
		dropElement: () => dropElement,
		duplicateElement: () => duplicateElement,
		duplicateElements: () => duplicateElements,
		evaluateWhen: () => evaluateWhen,
		findChildRecursive: () => findChildRecursive,
		findModelInDocument: () => findModelInDocument,
		generateElementId: () => generateElementId,
		getAllDescendants: () => getAllDescendants,
		getAnchoredAncestorId: () => getAnchoredAncestorId,
		getAnchoredDescendantId: () => getAnchoredDescendantId,
		getContainer: () => getContainer,
		getCurrentDocumentContainer: () => getCurrentDocumentContainer,
		getCurrentDocumentId: () => getCurrentDocumentId,
		getDefaultStyleTagFromPreviewElement: () => getDefaultStyleTagFromPreviewElement,
		getElementChildrenWithFallback: () => getElementChildren,
		getElementEditorSettings: () => getElementEditorSettings,
		getElementIcon: () => getElementIcon,
		getElementInteractions: () => getElementInteractions,
		getElementLabel: () => getElementLabel,
		getElementSetting: () => getElementSetting,
		getElementSettings: () => getElementSettings,
		getElementStyles: () => getElementStyles,
		getElementTitle: () => getElementTitle,
		getElementType: () => getElementType,
		getElements: () => getElements,
		getLinkInLinkRestriction: () => getLinkInLinkRestriction,
		getPreviewElementDOM: () => getPreviewElementDOM,
		getSelectedElements: () => getSelectedElements,
		getWidgetsCache: () => getWidgetsCache,
		isElementAnchored: () => isElementAnchored,
		moveElement: () => moveElement,
		moveElements: () => moveElements,
		parseDefaultStyleTagFromClassList: () => parseDefaultStyleTagFromClassList,
		playElementInteractions: () => playElementInteractions,
		reconcileInitialChildren: () => reconcileInitialChildren,
		removeElements: () => removeElements,
		removeModelFromParent: () => removeModelFromParent,
		replaceElement: () => replaceElement,
		resolveContainer: () => resolveContainer,
		resolveInsertIndex: () => resolveInsertIndex,
		selectElement: () => selectElement,
		shouldCreateNewLocalStyle: () => shouldCreateNewLocalStyle,
		styleRerenderEvents: () => styleRerenderEvents,
		updateElementEditorSettings: () => updateElementEditorSettings,
		updateElementInteractions: () => updateElementInteractions,
		updateElementSettings: () => updateElementSettings,
		updateElementStyle: () => updateElementStyle,
		useElementChildren: () => useElementChildren,
		useElementEditorSettings: () => useElementEditorSettings,
		useParentElement: () => useParentElement,
		useSelectedElement: () => useSelectedElement,
		useSelectedElementSettings: () => useSelectedElementSettings
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorElements = src_exports;

//#endregion
})(elementorV2.editorV1Adapters, elementorV2.session, elementorV2.editorProps, wp.i18n, elementorV2.utils, elementorV2.editorStyles);
window.elementorV2.editorElements?.init?.();
//# sourceMappingURL=editor-elements.js.map