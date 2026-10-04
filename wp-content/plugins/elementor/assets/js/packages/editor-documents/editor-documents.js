(function(_elementor_editor, _elementor_store, react, _wordpress_i18n, _elementor_editor_v1_adapters, _elementor_utils) {

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

//#region packages/packages/core/editor-documents/src/store/selectors.ts
	var selectEntities = (state) => state.documents.entities;
	var selectActiveId = (state) => state.documents.activeId;
	var selectHostId = (state) => state.documents.hostId;
	var selectActiveDocument = (0, _elementor_store.__createSelector)(selectEntities, selectActiveId, (entities, activeId) => activeId && entities[activeId] ? entities[activeId] : null);
	var selectHostDocument = (0, _elementor_store.__createSelector)(selectEntities, selectHostId, (entities, hostId) => hostId && entities[hostId] ? entities[hostId] : null);

//#endregion
//#region packages/packages/core/editor-documents/src/hooks/use-active-document.ts
	function useActiveDocument() {
		return (0, _elementor_store.__useSelector)(selectActiveDocument);
	}

//#endregion
//#region packages/packages/core/editor-documents/src/hooks/use-host-document.ts
	function useHostDocument() {
		return (0, _elementor_store.__useSelector)(selectHostDocument);
	}

//#endregion
//#region packages/packages/core/editor-documents/src/hooks/use-sync-document-title.ts
	function useSyncDocumentTitle() {
		const activeDocument = useActiveDocument();
		const hostDocument = useHostDocument();
		const document = activeDocument && activeDocument.type.value !== "kit" ? activeDocument : hostDocument;
		(0, react.useEffect)(() => {
			if (document?.title === void 0) return;
			const title = (0, _wordpress_i18n.__)("Edit \"%s\" with Elementor", "elementor").replace("%s", document.title);
			window.document.title = title;
		}, [document?.title]);
	}

//#endregion
//#region packages/packages/core/editor-documents/src/components/logic-hooks.tsx
	function LogicHooks() {
		useSyncDocumentTitle();
		return null;
	}

//#endregion
//#region packages/packages/core/editor-documents/src/store/index.ts
	var initialState = {
		entities: {},
		activeId: null,
		hostId: null
	};
	function hasActiveEntity(state) {
		return !!(state.activeId && state.entities[state.activeId]);
	}
	var slice = (0, _elementor_store.__createSlice)({
		name: "documents",
		initialState,
		reducers: {
			init(state, { payload }) {
				state.entities = payload.entities;
				state.hostId = payload.hostId;
				state.activeId = payload.activeId;
			},
			activateDocument(state, action) {
				state.entities[action.payload.id] = action.payload;
				state.activeId = action.payload.id;
			},
			setAsHost(state, action) {
				state.hostId = action.payload;
			},
			updateActiveDocument(state, action) {
				if (hasActiveEntity(state)) state.entities[state.activeId] = {
					...state.entities[state.activeId],
					...action.payload
				};
			},
			startSaving(state) {
				if (hasActiveEntity(state)) state.entities[state.activeId].isSaving = true;
			},
			endSaving(state, action) {
				if (hasActiveEntity(state)) state.entities[state.activeId] = {
					...action.payload,
					isSaving: false
				};
			},
			startSavingDraft: (state) => {
				if (hasActiveEntity(state)) state.entities[state.activeId].isSavingDraft = true;
			},
			endSavingDraft(state, action) {
				if (hasActiveEntity(state)) state.entities[state.activeId] = {
					...action.payload,
					isSavingDraft: false
				};
			},
			markAsDirty(state) {
				if (hasActiveEntity(state)) state.entities[state.activeId].isDirty = true;
			},
			markAsPristine(state) {
				if (hasActiveEntity(state)) state.entities[state.activeId].isDirty = false;
			}
		}
	});

//#endregion
//#region packages/packages/core/editor-documents/src/store/get-current-document.ts
	function getCurrentDocument() {
		return selectActiveDocument((0, _elementor_store.__getState)());
	}

//#endregion
//#region packages/packages/core/editor-documents/src/sync/utils.ts
	function getV1DocumentsManager() {
		const documentsManager = window.elementor?.documents;
		if (!documentsManager) throw new Error("Elementor Editor V1 documents manager not found");
		return documentsManager;
	}
	function getV1DocumentsExitTo(documentData) {
		switch (window.elementor?.getPreferences?.("exit_to") || "this_post") {
			case "dashboard": return documentData.config.urls.main_dashboard;
			case "all_posts": return documentData.config.urls.all_post_type;
			default: return documentData.config.urls.exit_to_dashboard;
		}
	}
	function getV1DocumentShowCopyAndShare(documentData) {
		return documentData?.config?.panel?.show_copy_and_share ?? false;
	}
	function getV1DocumentPermalink(documentData) {
		return documentData.config.urls.permalink ?? "";
	}
	function getV1DocumentWpPreview(documentData) {
		return documentData.config.urls.wp_preview ?? "";
	}
	function normalizeV1Document(documentData) {
		const isUnpublishedRevision = documentData.config.revisions.current_id !== documentData.id;
		const exitToUrl = getV1DocumentsExitTo(documentData);
		return {
			id: documentData.id,
			title: documentData.container.settings.get("post_title"),
			type: {
				value: documentData.config.type,
				label: documentData.config.panel.title
			},
			status: {
				value: documentData.config.status.value,
				label: documentData.config.status.label
			},
			links: {
				permalink: getV1DocumentPermalink(documentData),
				wpPreview: getV1DocumentWpPreview(documentData),
				platformEdit: exitToUrl
			},
			isDirty: documentData.editor.isChanged || isUnpublishedRevision,
			isSaving: documentData.editor.isSaving,
			isSavingDraft: false,
			permissions: {
				allowAddingWidgets: documentData.config.panel?.allow_adding_widgets ?? true,
				showCopyAndShare: getV1DocumentShowCopyAndShare(documentData)
			},
			userCan: { publish: documentData.config.user.can_publish }
		};
	}
	function setDocumentModifiedStatus(status) {
		(0, _elementor_editor_v1_adapters.__privateRunCommandSync)("document/save/set-is-modified", { status }, { internal: true });
	}
	function getV1CurrentDocument() {
		return window.elementor?.documents?.getCurrent();
	}
	function isDocumentDirty(document) {
		const isDraft = document.status.value === "draft";
		const hasAutosave = document.revisions?.current_id !== document.id;
		return isDraft || hasAutosave;
	}
	function invalidateDocumentData(documentId) {
		getV1DocumentsManager().invalidateCache(documentId);
	}
	function reloadCurrentDocument() {
		const currentDocument = getCurrentDocument();
		if (!currentDocument?.id) return Promise.resolve();
		getV1DocumentsManager().invalidateCache();
		return (0, _elementor_editor_v1_adapters.__privateRunCommand)("editor/documents/switch", {
			id: currentDocument.id,
			shouldScroll: false,
			shouldNavigateToDefaultRoute: false
		});
	}
	function switchToDocument(documentId, options) {
		return (0, _elementor_editor_v1_adapters.__privateRunCommand)("editor/documents/switch", {
			id: documentId,
			...options
		});
	}

//#endregion
//#region packages/packages/core/editor-documents/src/sync/sync-store.ts
	function syncStore() {
		syncInitialization();
		syncActiveDocument();
		syncOnDocumentSave();
		syncOnTitleChange();
		syncOnDocumentChange();
		syncOnExitToChange();
	}
	function syncInitialization() {
		const { init } = slice.actions;
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.v1ReadyEvent)(), () => {
			const documentsManager = getV1DocumentsManager();
			const entities = Object.entries(documentsManager.documents).reduce((acc, [id, document]) => {
				acc[id] = normalizeV1Document(document);
				return acc;
			}, {});
			(0, _elementor_store.__dispatch)(init({
				entities,
				hostId: documentsManager.getInitialId(),
				activeId: documentsManager.getCurrentId()
			}));
		});
	}
	function syncActiveDocument() {
		const { activateDocument, setAsHost } = slice.actions;
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("editor/documents/open"), () => {
			const documentsManager = getV1DocumentsManager();
			const currentDocument = normalizeV1Document(documentsManager.getCurrent());
			(0, _elementor_store.__dispatch)(activateDocument(currentDocument));
			if (documentsManager.getInitialId() === currentDocument.id) (0, _elementor_store.__dispatch)(setAsHost(currentDocument.id));
		});
	}
	function syncOnDocumentSave() {
		const { startSaving, endSaving, startSavingDraft, endSavingDraft } = slice.actions;
		const isDraft = (e) => {
			return e.args?.status === "autosave";
		};
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandStartEvent)("document/save/save"), (e) => {
			if (isDraft(e)) {
				(0, _elementor_store.__dispatch)(startSavingDraft());
				return;
			}
			(0, _elementor_store.__dispatch)(startSaving());
		});
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("document/save/save"), (e) => {
			const activeDocument = normalizeV1Document(getV1DocumentsManager().getCurrent());
			if (isDraft(e)) (0, _elementor_store.__dispatch)(endSavingDraft(activeDocument));
			else (0, _elementor_store.__dispatch)(endSaving(activeDocument));
		});
	}
	function syncOnTitleChange() {
		const { updateActiveDocument } = slice.actions;
		const updateTitle = (0, _elementor_utils.debounce)((e) => {
			if (!("post_title" in e.args?.settings)) return;
			const newTitle = getV1DocumentsManager().getCurrent().container.settings.get("post_title");
			(0, _elementor_store.__dispatch)(updateActiveDocument({ title: newTitle }));
		}, 400);
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/settings"), updateTitle);
	}
	function syncOnExitToChange() {
		const { updateActiveDocument } = slice.actions;
		const updateExitTo = (0, _elementor_utils.debounce)((e) => {
			if (!("exit_to" in e.args?.settings)) return;
			const currentDocument = getV1DocumentsManager().getCurrent();
			const newExitTo = getV1DocumentsExitTo(currentDocument);
			const permalink = getV1DocumentPermalink(currentDocument);
			const wpPreview = getV1DocumentWpPreview(currentDocument);
			(0, _elementor_store.__dispatch)(updateActiveDocument({ links: {
				platformEdit: newExitTo,
				permalink,
				wpPreview
			} }));
		}, 400);
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("document/elements/settings"), updateExitTo);
	}
	function syncOnDocumentChange() {
		const { markAsDirty, markAsPristine } = slice.actions;
		(0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("document/save/set-is-modified"), () => {
			if (selectActiveDocument((0, _elementor_store.__getState)())?.isSaving) return;
			if (getV1DocumentsManager().getCurrent().editor.isChanged) {
				(0, _elementor_store.__dispatch)(markAsDirty());
				return;
			}
			(0, _elementor_store.__dispatch)(markAsPristine());
		});
	}

//#endregion
//#region packages/packages/core/editor-documents/src/init.ts
	function init() {
		initStore();
		(0, _elementor_editor.injectIntoLogic)({
			id: "documents-hooks",
			component: LogicHooks
		});
	}
	function initStore() {
		(0, _elementor_store.__registerSlice)(slice);
		syncStore();
	}

//#endregion
//#region packages/packages/core/editor-documents/src/hooks/use-active-document-actions.ts
	function useActiveDocumentActions() {
		const permalink = useActiveDocument()?.links?.permalink ?? "";
		return {
			save: (0, react.useCallback)(() => (0, _elementor_editor_v1_adapters.__privateRunCommand)("document/save/default"), []),
			saveDraft: (0, react.useCallback)(() => (0, _elementor_editor_v1_adapters.__privateRunCommand)("document/save/draft"), []),
			saveTemplate: (0, react.useCallback)(() => (0, _elementor_editor_v1_adapters.__privateOpenRoute)("library/save-template"), []),
			copyAndShare: (0, react.useCallback)(() => {
				navigator.clipboard.writeText(permalink);
			}, [permalink])
		};
	}

//#endregion
//#region packages/packages/core/editor-documents/src/hooks/utils.ts
	var getUpdateUrl = (id) => {
		const url = new URL(window.location.href);
		url.searchParams.set("post", id.toString());
		url.searchParams.delete("active-document");
		return url;
	};

//#endregion
//#region packages/packages/core/editor-documents/src/hooks/use-navigate-to-document.ts
	function useNavigateToDocument() {
		return (0, react.useCallback)(async (id) => {
			const url = getUpdateUrl(id);
			await switchToDocument(id, { setAsInitial: true });
			history.replaceState({}, "", url);
		}, []);
	}

//#endregion
//#region packages/packages/core/editor-documents/src/hooks/use-open-document-in-new-tab.ts
	function useOpenDocumentInNewTab() {
		return (0, react.useCallback)((id) => {
			const url = getUpdateUrl(id);
			window.open(url.href);
		}, []);
	}

//#endregion
//#region packages/packages/core/editor-documents/src/consts.ts
	var COMPONENT_DOCUMENT_TYPE = "elementor_component";

//#endregion
//#region packages/packages/core/editor-documents/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		COMPONENT_DOCUMENT_TYPE: () => COMPONENT_DOCUMENT_TYPE,
		__useActiveDocument: () => useActiveDocument,
		__useActiveDocumentActions: () => useActiveDocumentActions,
		__useHostDocument: () => useHostDocument,
		__useNavigateToDocument: () => useNavigateToDocument,
		__useOpenDocumentInNewTab: () => useOpenDocumentInNewTab,
		getCurrentDocument: () => getCurrentDocument,
		getV1CurrentDocument: () => getV1CurrentDocument,
		getV1DocumentsManager: () => getV1DocumentsManager,
		init: () => init,
		invalidateDocumentData: () => invalidateDocumentData,
		isDocumentDirty: () => isDocumentDirty,
		reloadCurrentDocument: () => reloadCurrentDocument,
		setDocumentModifiedStatus: () => setDocumentModifiedStatus,
		slice: () => slice,
		switchToDocument: () => switchToDocument
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorDocuments = src_exports;

//#endregion
})(elementorV2.editor, elementorV2.store, React, wp.i18n, elementorV2.editorV1Adapters, elementorV2.utils);
window.elementorV2.editorDocuments?.init?.();
//# sourceMappingURL=editor-documents.js.map