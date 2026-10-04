(function(_elementor_editor_documents, _elementor_editor_styles_repository, _elementor_editor_v1_adapters) {

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

//#region packages/packages/core/editor-embedded-documents-manager/src/styles-provider.ts
	var styles = [];
	var documentStyles = /* @__PURE__ */ new Map();
	var styleListeners = /* @__PURE__ */ new Set();
	var embeddedDocumentsStylesProvider = (0, _elementor_editor_styles_repository.createStylesProvider)({
		key: "embedded-documents-styles",
		priority: 75,
		subscribe: (cb) => {
			styleListeners.add(cb);
			return () => {
				styleListeners.delete(cb);
			};
		},
		actions: {
			all: () => styles,
			get: (id) => styles.find((style) => style.id === id) ?? null
		}
	});
	function notifyStyleListeners() {
		styleListeners.forEach((cb) => cb());
	}
	function addEmbeddedDocumentStyles(documentId, document) {
		const extracted = extractStylesFromDocument(document);
		if (!extracted.length) {
			if (!documentStyles.has(documentId)) return;
			documentStyles.delete(documentId);
		} else documentStyles.set(documentId, extracted);
		styles = [...documentStyles.values()].flat();
		notifyStyleListeners();
	}
	function clearEmbeddedDocumentsStyles() {
		documentStyles = /* @__PURE__ */ new Map();
		styles = [];
		notifyStyleListeners();
	}
	function extractStylesFromDocument(document) {
		if (!document.elements?.length) return [];
		return document.elements.flatMap(extractStylesFromElement);
	}
	function extractStylesFromElement(element) {
		return [...Object.values(element.styles ?? {}), ...(element.elements ?? []).flatMap(extractStylesFromElement)];
	}

//#endregion
//#region packages/packages/core/editor-embedded-documents-manager/src/manager.ts
	var pendingIds = /* @__PURE__ */ new Set();
	var loadedDocuments = /* @__PURE__ */ new Map();
	var listeners = /* @__PURE__ */ new Set();
	var currentDocumentId = null;
	function setCurrentDocumentId(id) {
		currentDocumentId = id;
	}
	function addDocuments(ids) {
		const newIds = ids.filter((id) => !isCurrentDocument(id) && !pendingIds.has(id) && !loadedDocuments.has(id));
		newIds.forEach((id) => pendingIds.add(id));
		if (!newIds.length) return;
		fetchAndNotify(newIds);
	}
	function setDocument(documentId, data) {
		if (isCurrentDocument(documentId)) return;
		const isNew = !loadedDocuments.has(documentId);
		loadedDocuments.set(documentId, data);
		if (isNew) notifyListeners(documentId, data);
		else addEmbeddedDocumentStyles(documentId, data);
	}
	function onDocumentLoad(callback) {
		listeners.add(callback);
		Promise.resolve().then(() => {
			if (!listeners.has(callback)) return;
			loadedDocuments.forEach((data, documentId) => {
				if (!isCurrentDocument(documentId)) callback(documentId, data);
			});
		});
		return () => {
			listeners.delete(callback);
		};
	}
	function reset() {
		pendingIds.clear();
		loadedDocuments.clear();
		clearEmbeddedDocumentsStyles();
	}
	var embeddedDocumentsManager = {
		addDocuments,
		setDocument,
		onDocumentLoad,
		reset
	};
	function isCurrentDocument(documentId) {
		return currentDocumentId !== null && documentId === currentDocumentId;
	}
	async function fetchAndNotify(ids) {
		(await Promise.all(ids.map(fetchDocument))).forEach((result, index) => {
			const id = ids[index];
			if (!pendingIds.has(id)) return;
			pendingIds.delete(id);
			if (!result || isCurrentDocument(id)) return;
			const { data } = result;
			loadedDocuments.set(id, data);
			notifyListeners(id, data);
		});
	}
	async function fetchDocument(id) {
		try {
			return {
				id,
				data: await _elementor_editor_v1_adapters.ajax.load({
					data: { id },
					action: "get_document_config",
					unique_id: `embedded-document-${id}`
				})
			};
		} catch {
			return null;
		}
	}
	function notifyListeners(documentId, data) {
		if (isCurrentDocument(documentId)) return;
		listeners.forEach((cb) => cb(documentId, data));
		addEmbeddedDocumentStyles(documentId, data);
	}

//#endregion
//#region packages/packages/core/editor-embedded-documents-manager/src/init.ts
	function init() {
		_elementor_editor_styles_repository.stylesRepository.register(embeddedDocumentsStylesProvider);
		(0, _elementor_editor_v1_adapters.registerDataHook)("after", "editor/documents/attach-preview", () => {
			const { id } = (0, _elementor_editor_documents.getV1CurrentDocument)() ?? {};
			setCurrentDocumentId(id ?? null);
			embeddedDocumentsManager.reset();
		});
	}

//#endregion
//#region packages/packages/core/editor-embedded-documents-manager/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		embeddedDocumentsManager: () => embeddedDocumentsManager,
		init: () => init,
		setCurrentDocumentId: () => setCurrentDocumentId
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorEmbeddedDocumentsManager = src_exports;

//#endregion
})(elementorV2.editorDocuments, elementorV2.editorStylesRepository, elementorV2.editorV1Adapters);
window.elementorV2.editorEmbeddedDocumentsManager?.init?.();
//# sourceMappingURL=editor-embedded-documents-manager.js.map