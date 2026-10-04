(function(_elementor_editor, _elementor_editor_styles_repository, _elementor_editor_v1_adapters, _elementor_store, _elementor_editor_documents, react, _elementor_utils) {

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

//#region packages/packages/core/editor-templates/src/store.ts
	var initialState = { entities: {} };
	var slice = (0, _elementor_store.__createSlice)({
		name: "templates",
		initialState,
		reducers: {
			setTemplates(state, action) {
				action.payload.forEach((doc) => {
					state.entities[doc.id] = doc.elements ?? [];
				});
			},
			clearTemplates(state) {
				state.entities = {};
			}
		}
	});
	var selectEntities = (state) => state.templates.entities;
	var selectTemplates = (0, _elementor_store.__createSelector)([selectEntities], (entities) => Object.values(entities));

//#endregion
//#region packages/packages/core/editor-templates/src/load-templates.ts
	var TEMPLATE_ATTRIBUTE = "data-elementor-post-type=\"elementor_library\"";
	var DOCUMENT_WRAPPER_ATTR = "data-elementor-id";
	async function loadTemplates() {
		const iframeDocument = (0, _elementor_editor_v1_adapters.getCanvasIframeDocument)();
		if (!iframeDocument) return;
		const currentDocumentId = (0, _elementor_editor_documents.getV1CurrentDocument)()?.id;
		const templateIds = getTemplateIds(iframeDocument, currentDocumentId);
		if (!templateIds.length) return;
		const documents = await fetchDocuments(templateIds);
		(0, _elementor_store.__dispatch)(slice.actions.setTemplates(documents));
	}
	function unloadTemplates() {
		(0, _elementor_store.__dispatch)(slice.actions.clearTemplates());
	}
	function getTemplateIds(iframeDocument, currentDocumentId) {
		const ids = [...iframeDocument.body.querySelectorAll(`[${TEMPLATE_ATTRIBUTE}]`)].map((el) => Number(el.getAttribute(DOCUMENT_WRAPPER_ATTR))).filter((id) => !isNaN(id) && id !== currentDocumentId);
		return [...new Set(ids)];
	}
	async function fetchDocuments(ids) {
		return (await Promise.all(ids.map(async (id) => {
			try {
				return await _elementor_editor_v1_adapters.ajax.load({
					data: { id },
					action: "get_document_config",
					unique_id: `template-${id}`
				});
			} catch {
				return null;
			}
		}))).filter((doc) => doc !== null);
	}

//#endregion
//#region packages/packages/core/editor-templates/src/templates-styles-provider.ts
	var styles = [];
	var listeners = /* @__PURE__ */ new Set();
	function addTemplateStyles(newStyles) {
		styles = [...styles, ...newStyles];
		listeners.forEach((cb) => cb());
	}
	function clearTemplatesStyles() {
		styles = [];
		listeners.forEach((cb) => cb());
	}
	var templatesStylesProvider = (0, _elementor_editor_styles_repository.createStylesProvider)({
		key: "templates-styles",
		priority: 50,
		subscribe: (cb) => {
			listeners.add(cb);
			return () => {
				listeners.delete(cb);
			};
		},
		actions: {
			all: () => styles,
			get: (id) => styles.find((style) => style.id === id) ?? null
		}
	});

//#endregion
//#region packages/packages/core/editor-templates/src/use-loaded-templates.ts
	function useLoadedTemplates() {
		return (0, _elementor_store.__useSelector)(selectTemplates);
	}

//#endregion
//#region packages/packages/core/editor-templates/src/render-template-styles.tsx
	var RenderTemplateStyles = () => {
		const templates = useLoadedTemplates();
		(0, react.useEffect)(() => {
			addTemplateStyles(templates.flatMap(extractStylesFromDocument));
		}, [templates]);
		return null;
	};
	function extractStylesFromDocument(elements) {
		if (!elements.length) return [];
		return elements.flatMap(extractStylesFromElement);
	}
	function extractStylesFromElement(element) {
		return [...Object.values(element.styles ?? {}), ...(element.elements ?? []).flatMap(extractStylesFromElement)];
	}

//#endregion
//#region packages/packages/core/editor-templates/src/utils.ts
	var MIN_PRO_VERSION_FOR_SELF_HANDLED_STYLES = "4.1";
	var isHandlingTemplateStyles = () => (0, _elementor_utils.isProActive)() && !(0, _elementor_utils.isProAtLeast)(MIN_PRO_VERSION_FOR_SELF_HANDLED_STYLES);

//#endregion
//#region packages/packages/core/editor-templates/src/init.ts
	function init() {
		if (!isHandlingTemplateStyles()) return;
		(0, _elementor_store.__registerSlice)(slice);
		_elementor_editor_styles_repository.stylesRepository.register(templatesStylesProvider);
		(0, _elementor_editor_v1_adapters.registerDataHook)("after", "editor/documents/attach-preview", async () => {
			unloadTemplates();
			clearTemplatesStyles();
			await loadTemplates();
		});
		(0, _elementor_editor.injectIntoLogic)({
			id: "templates-styles",
			component: RenderTemplateStyles
		});
	}

//#endregion
//#region packages/packages/core/editor-templates/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		init: () => init,
		isHandlingTemplateStyles: () => isHandlingTemplateStyles,
		useLoadedTemplates: () => useLoadedTemplates
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorTemplates = src_exports;

//#endregion
})(elementorV2.editor, elementorV2.editorStylesRepository, elementorV2.editorV1Adapters, elementorV2.store, elementorV2.editorDocuments, React, elementorV2.utils);
window.elementorV2.editorTemplates?.init?.();
//# sourceMappingURL=editor-templates.js.map