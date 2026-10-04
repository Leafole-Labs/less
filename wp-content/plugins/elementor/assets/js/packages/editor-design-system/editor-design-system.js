(function(_elementor_editor, _elementor_editor_app_bar, _elementor_editor_panels, react, _elementor_editor_documents, _elementor_editor_ui, _elementor_editor_v1_adapters, _wordpress_i18n, _elementor_editor_default_styles, _elementor_editor_global_classes, _elementor_editor_variables, _elementor_icons, _elementor_ui, _elementor_editor_current_user, _elementor_query, _elementor_editor_notifications, _elementor_http_client, _elementor_editor_canvas, _elementor_events) {

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

//#region packages/packages/core/editor-design-system/src/initial-tab.ts
	var STORAGE_KEY = "elementor_editor_design_system_active_tab";
	function readStoredTab() {
		if (typeof window === "undefined") return "defaults";
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY);
			if (raw === "defaults" || raw === "classes" || raw === "variables") return raw;
		} catch {}
		return "defaults";
	}
	var pendingTabForOpen = null;
	var activeTabInMemory = readStoredTab();
	function normalizeDesignSystemTab(tab) {
		return tab;
	}
	function setPendingDesignSystemTab(tab) {
		pendingTabForOpen = tab;
	}
	function getInitialDesignSystemTab() {
		if (pendingTabForOpen) {
			const t2 = pendingTabForOpen;
			pendingTabForOpen = null;
			activeTabInMemory = t2;
			persistDesignSystemTab(t2);
			return t2;
		}
		const t = readStoredTab();
		activeTabInMemory = t;
		return t;
	}
	function notifyDesignSystemTabChange(tab) {
		activeTabInMemory = tab;
	}
	function getActiveDesignSystemTab() {
		return activeTabInMemory;
	}
	function persistDesignSystemTab(tab) {
		if (typeof window === "undefined") return;
		try {
			window.localStorage.setItem(STORAGE_KEY, tab);
		} catch {}
	}

//#endregion
//#region packages/packages/core/editor-design-system/src/export/download.ts
	var downloadBlob = (blob, fileName) => {
		const url = URL.createObjectURL(blob);
		const anchor = document.createElement("a");
		anchor.href = url;
		anchor.download = fileName;
		anchor.rel = "noopener";
		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);
		URL.revokeObjectURL(url);
	};

//#endregion
//#region packages/packages/core/editor-design-system/src/export/export-notifications.ts
	var EXPORT_STARTED_NOTIFICATION_ID = "design-system-export-started";
	var SUCCESS_NOTIFICATION_ID$1 = "design-system-export-succeeded";
	var FAILURE_NOTIFICATION_ID$1 = "design-system-export-failed";
	var notifyExportInProgress = () => {
		(0, _elementor_editor_notifications.notify)({
			id: EXPORT_STARTED_NOTIFICATION_ID,
			type: "info",
			message: (0, _wordpress_i18n.__)("Export in progress. Your file will download when it’s ready.", "elementor")
		});
	};
	var notifyExportSuccess = () => {
		(0, _elementor_editor_notifications.dismissNotification)(EXPORT_STARTED_NOTIFICATION_ID);
		(0, _elementor_editor_notifications.notify)({
			id: SUCCESS_NOTIFICATION_ID$1,
			type: "success",
			message: (0, _wordpress_i18n.__)("Design system exported", "elementor")
		});
	};
	var notifyExportFailure = (onRetry) => {
		(0, _elementor_editor_notifications.dismissNotification)(EXPORT_STARTED_NOTIFICATION_ID);
		(0, _elementor_editor_notifications.notify)({
			id: FAILURE_NOTIFICATION_ID$1,
			type: "error",
			message: (0, _wordpress_i18n.__)("Your design system export failed", "elementor"),
			additionalActionProps: [{
				size: "small",
				variant: "outlined",
				color: "error",
				children: (0, _wordpress_i18n.__)("Try again", "elementor"),
				onClick: () => {
					(0, _elementor_editor_notifications.dismissNotification)(FAILURE_NOTIFICATION_ID$1);
					onRetry();
				}
			}]
		});
	};

//#endregion
//#region packages/packages/core/editor-design-system/src/export/hooks/use-export-request.ts
	var EXPORT_BASE_PATH = "elementor/v1/import-export-customization";
	var EXPORT_DESIGN_SYSTEM_MUTATION_KEY = "design-system-export";
	var DEFAULT_EXPORT_FILE_NAME = "design-system-export.zip";
	var EXPORT_REQUEST_TIMEOUT_MS = 12e4;
	var EXPORT_REQUEST_BODY = {
		include: ["settings"],
		kitInfo: {
			title: "design-system",
			description: "",
			source: "local"
		},
		customization: { settings: {
			theme: false,
			classes: true,
			variables: true
		} }
	};
	var DesignSystemExportError = class extends Error {
		constructor(cause) {
			super("Design system export failed");
			this.name = "DesignSystemExportError";
			this.cause = cause;
		}
	};
	var useExportRequest = () => {
		return (0, _elementor_query.useMutation)({
			mutationKey: [EXPORT_DESIGN_SYSTEM_MUTATION_KEY],
			mutationFn: async () => {
				try {
					const { data } = await (0, _elementor_http_client.httpService)().post(`${EXPORT_BASE_PATH}/export`, EXPORT_REQUEST_BODY, { timeout: EXPORT_REQUEST_TIMEOUT_MS });
					return {
						fileName: DEFAULT_EXPORT_FILE_NAME,
						blob: base64ToZipBlob(data.data.file)
					};
				} catch (error) {
					throw new DesignSystemExportError(error);
				}
			}
		});
	};
	var base64ToZipBlob = (base64) => {
		const binary = atob(base64);
		const bytes = new Uint8Array(binary.length);
		for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
		return new Blob([bytes], { type: "application/zip" });
	};

//#endregion
//#region packages/packages/core/editor-design-system/src/import/hooks/use-import-request.ts
	var IMPORT_BASE_PATH = "elementor/v1/import-export-customization";
	var IMPORT_REQUEST_TIMEOUT_MS = 12e4;
	var SUPPORTED_RUNNERS = ["global-classes", "global-variables"];
	var IMPORT_DESIGN_SYSTEM_MUTATION_KEY = "design-system-import";
	var useImportRequest = () => {
		return (0, _elementor_query.useMutation)({
			mutationKey: [IMPORT_DESIGN_SYSTEM_MUTATION_KEY],
			mutationFn: async ({ file, conflictStrategy }) => {
				await (0, _elementor_editor_v1_adapters.__privateRunCommand)("document/save/auto", { force: true });
				const session = await uploadKit(file);
				const runners = await startImport(session, conflictStrategy);
				await runRunners(session, runners);
				window.dispatchEvent(new CustomEvent(_elementor_editor_canvas.GLOBAL_STYLES_IMPORTED_EVENT));
			}
		});
	};
	var DesignSystemUploadValidationError = class extends Error {
		constructor(cause) {
			super("Design system upload validation failed");
			this.name = "DesignSystemUploadValidationError";
			this.cause = cause;
		}
	};
	var uploadKit = async (file) => {
		const formData = new FormData();
		formData.append("e_import_file", file);
		try {
			const { data } = await (0, _elementor_http_client.httpService)().post(`${IMPORT_BASE_PATH}/upload`, formData, {
				headers: { "Content-Type": "multipart/form-data" },
				timeout: IMPORT_REQUEST_TIMEOUT_MS
			});
			return data.data.session;
		} catch (error) {
			throw new DesignSystemUploadValidationError(error);
		}
	};
	var startImport = async (session, conflictStrategy) => {
		const customization = { "design-system": { conflict_resolution: conflictStrategy === "keep" ? "skip" : "replace" } };
		const { data } = await (0, _elementor_http_client.httpService)().post(`${IMPORT_BASE_PATH}/import`, {
			session,
			include: ["design-system"],
			customization
		}, { timeout: IMPORT_REQUEST_TIMEOUT_MS });
		return (data.data.runners ?? []).filter((runner) => SUPPORTED_RUNNERS.includes(runner));
	};
	var runRunners = async (session, runners) => {
		for (const runner of runners) await (0, _elementor_http_client.httpService)().post(`${IMPORT_BASE_PATH}/import-runner`, {
			session,
			runner
		}, { timeout: IMPORT_REQUEST_TIMEOUT_MS });
	};

//#endregion
//#region packages/packages/core/editor-design-system/src/import/components/conflict-options.tsx
	var getOptions = () => [{
		value: "replace",
		title: (0, _wordpress_i18n.__)("Replace existing values", "elementor"),
		description: (0, _wordpress_i18n.__)("Imported design system values will overwrite existing variables and classes.", "elementor")
	}, {
		value: "keep",
		title: (0, _wordpress_i18n.__)("Keep existing values", "elementor"),
		description: (0, _wordpress_i18n.__)("Existing variables and classes will not change.", "elementor")
	}];
	var ConflictOptions = ({ value, onChange }) => {
		const options = getOptions();
		return /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { spacing: 1 }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "body1" }, (0, _wordpress_i18n.__)("How to handle conflicts with existing variables or classes?", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.RadioGroup, {
			value: value ?? "",
			onChange: (_, next) => onChange(next)
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { spacing: 1 }, options.map((option) => /* @__PURE__ */ react.createElement(_elementor_ui.Card, {
			key: option.value,
			variant: "outlined"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.CardActionArea, { onClick: () => onChange(option.value) }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			spacing: 2,
			padding: 2
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Radio, {
			value: option.value,
			checked: value === option.value,
			inputProps: { "aria-label": option.title }
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "column",
			spacing: .5
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "subtitle2" }, option.title), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			color: "text.secondary"
		}, option.description)))))))));
	};

//#endregion
//#region packages/packages/core/editor-design-system/src/import/hooks/use-dialog-state.ts
	var initialState = {
		file: null,
		conflictStrategy: null
	};
	var useDialogState = () => {
		const [state, setState] = (0, react.useState)(initialState);
		const setFile = (file) => setState((prev) => ({
			...prev,
			file
		}));
		const setConflictStrategy = (conflictStrategy) => setState((prev) => ({
			...prev,
			conflictStrategy
		}));
		return {
			...state,
			setFile,
			setConflictStrategy
		};
	};

//#endregion
//#region packages/packages/core/editor-design-system/src/import/import-notifications.tsx
	var IMPORT_STARTED_NOTIFICATION_ID = "design-system-import-started";
	var SUCCESS_NOTIFICATION_ID = "design-system-import-succeeded";
	var FAILURE_NOTIFICATION_ID = "design-system-import-failed";
	var notifyImportInProgress = () => {
		(0, _elementor_editor_notifications.notify)({
			id: IMPORT_STARTED_NOTIFICATION_ID,
			type: "info",
			message: (0, _wordpress_i18n.__)("Import in Progress. You will be notified when the import is complete.", "elementor")
		});
	};
	var notifyImportSuccess = () => {
		(0, _elementor_editor_notifications.dismissNotification)(IMPORT_STARTED_NOTIFICATION_ID);
		(0, _elementor_editor_notifications.notify)({
			id: SUCCESS_NOTIFICATION_ID,
			type: "success",
			message: (0, _wordpress_i18n.__)("Design system imported", "elementor")
		});
	};
	var notifyImportFailure = (onRetry) => {
		(0, _elementor_editor_notifications.dismissNotification)(IMPORT_STARTED_NOTIFICATION_ID);
		(0, _elementor_editor_notifications.notify)({
			id: FAILURE_NOTIFICATION_ID,
			type: "error",
			message: (0, _wordpress_i18n.__)("Your design system import failed", "elementor"),
			additionalActionProps: [{
				size: "small",
				variant: "outlined",
				color: "error",
				children: (0, _wordpress_i18n.__)("Try again", "elementor"),
				onClick: () => {
					(0, _elementor_editor_notifications.dismissNotification)(FAILURE_NOTIFICATION_ID);
					if ((0, _elementor_query.getQueryClient)().isMutating({ mutationKey: ["design-system-import"] }) > 0) return;
					onRetry();
				}
			}]
		});
	};

//#endregion
//#region packages/packages/core/editor-design-system/src/import/tracking.ts
	var FILE_TYPE_DESIGN_SYSTEM = "design_system";
	var trackDesignSystem = (payload) => {
		const { dispatchEvent, config } = (0, _elementor_events.getMixpanel)();
		const name = config?.names?.design_system?.[payload.event];
		if (!name) return;
		const { event, ...eventData } = payload;
		try {
			dispatchEvent?.(name, {
				event,
				...eventData
			});
		} catch {}
	};

//#endregion
//#region packages/packages/core/editor-design-system/src/import/import-design-system-dialog.tsx
	var ALLOWED_FILE_TYPES = ["application/zip"];
	var FILE_INPUT_ACCEPT = "application/zip,.zip";
	var MAX_FILE_SIZE_MB = 3;
	var LEARN_MORE_URL = "https://go.elementor.com/wp-dash-import-export-design-system/";
	var reopenSelf = () => {
		trackDesignSystem({ event: "importOpened" });
		(0, _elementor_editor_ui.openDialog)({ component: /* @__PURE__ */ react.createElement(ImportDesignSystemDialog, { onClose: _elementor_editor_ui.closeDialog }) });
	};
	var ImportDesignSystemDialog = ({ onClose }) => {
		const { file, conflictStrategy, setFile, setConflictStrategy } = useDialogState();
		const importMutation = useImportRequest();
		const isImportEnabled = Boolean(file && conflictStrategy);
		const handleFileSelected = (selected) => {
			setFile(selected);
			trackDesignSystem({
				event: "fileSelected",
				file_type: FILE_TYPE_DESIGN_SYSTEM
			});
		};
		const handleConflictChange = (choice) => {
			setConflictStrategy(choice);
			trackDesignSystem({
				event: "conflictChoice",
				choice
			});
		};
		const handleImport = async () => {
			if (!file || !conflictStrategy) return;
			trackDesignSystem({
				event: "confirmed",
				conflict_choice: conflictStrategy
			});
			notifyImportInProgress();
			onClose();
			try {
				await importMutation.mutateAsync({
					file,
					conflictStrategy
				});
				trackDesignSystem({ event: "imported" });
				notifyImportSuccess();
			} catch (error) {
				if (error instanceof DesignSystemUploadValidationError) trackDesignSystem({
					event: "validationFailed",
					file_type: FILE_TYPE_DESIGN_SYSTEM
				});
				else trackDesignSystem({ event: "importFailed" });
				notifyImportFailure(reopenSelf);
			}
		};
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.DialogHeader, { logo: false }, /* @__PURE__ */ react.createElement(_elementor_ui.DialogTitle, null, (0, _wordpress_i18n.__)("Import Design System", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.DialogContent, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { spacing: 3 }, file ? /* @__PURE__ */ react.createElement(_elementor_editor_ui.FileUploadRow, {
			file,
			onRemove: () => setFile(null)
		}) : /* @__PURE__ */ react.createElement(_elementor_editor_ui.FileUploadDropzone, {
			onFileSelected: handleFileSelected,
			allowedFileTypes: ALLOWED_FILE_TYPES,
			accept: FILE_INPUT_ACCEPT,
			regionLabel: (0, _wordpress_i18n.__)("Design system file dropzone", "elementor"),
			helperText: (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("zip (max. %dMB)", "elementor"), MAX_FILE_SIZE_MB)
		}), /* @__PURE__ */ react.createElement(ConflictOptions, {
			value: conflictStrategy,
			onChange: handleConflictChange
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "row",
			spacing: .5,
			alignItems: "center",
			justifyContent: "flex-start"
		}, /* @__PURE__ */ react.createElement(_elementor_icons.HelpIcon, { sx: {
			fontSize: 16,
			color: "text.tertiary"
		} }), /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
			href: LEARN_MORE_URL,
			target: "_blank",
			rel: "noopener noreferrer",
			underline: "always",
			variant: "caption",
			color: "text.tertiary"
		}, (0, _wordpress_i18n.__)("Learn how design system imports work", "elementor"))))), /* @__PURE__ */ react.createElement(_elementor_ui.DialogActions, null, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			size: "medium",
			color: "secondary",
			onClick: onClose
		}, (0, _wordpress_i18n.__)("Cancel", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			size: "medium",
			variant: "contained",
			color: "primary",
			disabled: !isImportEnabled,
			onClick: handleImport
		}, (0, _wordpress_i18n.__)("Import", "elementor"))));
	};

//#endregion
//#region packages/packages/core/editor-design-system/src/components/design-system-header-menu.tsx
	var POPUP_STATE_ID = "design-system-header-menu";
	var DesignSystemHeaderMenu = () => {
		const { isAdmin } = (0, _elementor_editor_current_user.useCurrentUserCapabilities)();
		const popupState = (0, _elementor_ui.usePopupState)({
			variant: "popover",
			popupId: POPUP_STATE_ID
		});
		const exportMutation = useExportRequest();
		const isImporting = (0, _elementor_query.useIsMutating)({ mutationKey: [IMPORT_DESIGN_SYSTEM_MUTATION_KEY] }) > 0;
		const isExporting = (0, _elementor_query.useIsMutating)({ mutationKey: [EXPORT_DESIGN_SYSTEM_MUTATION_KEY] }) > 0;
		const isInProgress = isImporting || isExporting;
		const triggerProps = (0, _elementor_ui.bindTrigger)(popupState);
		const handleImport = () => {
			popupState.close();
			trackDesignSystem({ event: "importOpened" });
			(0, _elementor_editor_ui.openDialog)({ component: /* @__PURE__ */ react.createElement(ImportDesignSystemDialog, { onClose: _elementor_editor_ui.closeDialog }) });
		};
		const runExport = async () => {
			notifyExportInProgress();
			try {
				const { blob, fileName } = await exportMutation.mutateAsync();
				downloadBlob(blob, fileName);
				notifyExportSuccess();
			} catch {
				notifyExportFailure(runExport);
			}
		};
		const handleExport = () => {
			popupState.close();
			trackDesignSystem({ event: "export" });
			runExport();
		};
		const triggerLabel = (0, _wordpress_i18n.__)("Design system actions", "elementor");
		const currentlyExportingLabel = (0, _wordpress_i18n.__)(`Export is in progress. The file will be downloaded when it's complete.`, "elementor");
		const currentlyImportingLabel = (0, _wordpress_i18n.__)(`Import is in progress. You will receive a notification when it's complete.`, "elementor");
		let tooltipLabel = triggerLabel;
		if (isInProgress) tooltipLabel = isExporting ? currentlyExportingLabel : currentlyImportingLabel;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, isAdmin && /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: tooltipLabel,
			placement: "top"
		}, /* @__PURE__ */ react.createElement("span", null, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			...triggerProps,
			size: "small",
			"aria-label": triggerLabel,
			disabled: isInProgress
		}, /* @__PURE__ */ react.createElement(_elementor_icons.DotsVerticalIcon, { fontSize: "small" })))), /* @__PURE__ */ react.createElement(_elementor_ui.Menu, {
			...(0, _elementor_ui.bindMenu)(popupState),
			MenuListProps: { dense: true },
			PaperProps: { elevation: 6 },
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "right"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, {
			onClick: handleImport,
			disabled: isImporting
		}, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemIcon, null, /* @__PURE__ */ react.createElement(_elementor_icons.DownloadIcon, { fontSize: "tiny" })), /* @__PURE__ */ react.createElement(_elementor_ui.ListItemText, null, (0, _wordpress_i18n.__)("Import", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.MenuItem, {
			onClick: handleExport,
			disabled: isExporting
		}, /* @__PURE__ */ react.createElement(_elementor_ui.ListItemIcon, null, /* @__PURE__ */ react.createElement(_elementor_icons.UploadIcon, { fontSize: "tiny" })), /* @__PURE__ */ react.createElement(_elementor_ui.ListItemText, null, (0, _wordpress_i18n.__)("Export", "elementor")))));
	};

//#endregion
//#region packages/packages/core/editor-design-system/src/components/design-system-panel-content.tsx
	var stickyTabRowStyles = {
		position: "sticky",
		zIndex: 1100,
		opacity: 1,
		backgroundColor: "background.default",
		transition: "top 300ms ease"
	};
	var EVENT_SET_TAB$1 = "elementor/design-system/set-tab";
	var trackDesignSystemTabOpened = (tab) => {
		switch (tab) {
			case "classes":
				(0, _elementor_editor_global_classes.trackGlobalClasses)({
					event: "classManagerOpened",
					source: "system-panel"
				});
				break;
			case "variables":
				(0, _elementor_editor_variables.trackVariablesManagerEvent)({
					action: "openManager",
					source: "system-panel"
				});
				break;
		}
	};
	function DesignSystemPanelContent({ onRequestClose }) {
		const [currentTab, setCurrentTab] = (0, react.useState)(() => getInitialDesignSystemTab());
		const defaultsCloseAttemptRef = (0, react.useRef)(null);
		const variablesCloseAttemptRef = (0, react.useRef)(null);
		const classesCloseAttemptRef = (0, react.useRef)(null);
		const isChainingRef = (0, react.useRef)(false);
		const { getTabProps, getTabPanelProps, getTabsProps } = (0, _elementor_ui.useTabs)(currentTab);
		const chainedThroughClasses = (0, react.useCallback)(() => {
			if (!isChainingRef.current && classesCloseAttemptRef.current) {
				isChainingRef.current = true;
				classesCloseAttemptRef.current();
				isChainingRef.current = false;
				return;
			}
			onRequestClose();
		}, [onRequestClose]);
		const chainedThroughVariables = (0, react.useCallback)(() => {
			if (!isChainingRef.current && variablesCloseAttemptRef.current) {
				isChainingRef.current = true;
				variablesCloseAttemptRef.current();
				isChainingRef.current = false;
				return;
			}
			onRequestClose();
		}, [onRequestClose]);
		const chainedThroughDefaults = (0, react.useCallback)(() => {
			if (!isChainingRef.current && defaultsCloseAttemptRef.current) {
				isChainingRef.current = true;
				defaultsCloseAttemptRef.current();
				isChainingRef.current = false;
				return;
			}
			onRequestClose();
		}, [onRequestClose]);
		(0, react.useEffect)(() => {
			notifyDesignSystemTabChange(currentTab);
		}, [currentTab]);
		(0, react.useEffect)(() => {
			const handler = (event) => {
				const tab = event.detail?.tab;
				if (!tab) return;
				const normalizedTab = normalizeDesignSystemTab(tab);
				setCurrentTab(normalizedTab);
				persistDesignSystemTab(normalizedTab);
				notifyDesignSystemTabChange(normalizedTab);
				trackDesignSystemTabOpened(normalizedTab);
			};
			window.addEventListener(EVENT_SET_TAB$1, handler);
			return () => {
				window.removeEventListener(EVENT_SET_TAB$1, handler);
			};
		}, []);
		const handleHeaderClose = () => {
			if (currentTab === "defaults" && defaultsCloseAttemptRef.current) {
				defaultsCloseAttemptRef.current();
				return;
			}
			if (currentTab === "variables" && variablesCloseAttemptRef.current) {
				variablesCloseAttemptRef.current();
				return;
			}
			if (currentTab === "classes" && classesCloseAttemptRef.current) {
				classesCloseAttemptRef.current();
				return;
			}
			onRequestClose();
		};
		return /* @__PURE__ */ react.createElement(_elementor_editor_ui.ThemeProvider, null, /* @__PURE__ */ react.createElement(_elementor_editor_panels.Panel, null, /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelHeader, null, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			p: 1,
			pl: 2,
			width: "100%",
			direction: "row",
			alignItems: "center",
			spacing: .5
		}, /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelHeaderTitle, { sx: {
			flex: 1,
			minWidth: 0
		} }, (0, _wordpress_i18n.__)("Design system", "elementor")), /* @__PURE__ */ react.createElement(DesignSystemHeaderMenu, null), /* @__PURE__ */ react.createElement(_elementor_ui.CloseButton, {
			"aria-label": (0, _wordpress_i18n.__)("Close", "elementor"),
			sx: { flexShrink: 0 },
			onClick: () => void handleHeaderClose()
		}))), /* @__PURE__ */ react.createElement(_elementor_editor_panels.PanelBody, { sx: {
			display: "flex",
			flexDirection: "column",
			height: "100%",
			overflow: "hidden",
			minHeight: 0
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "column",
			sx: {
				width: "100%",
				flex: 1,
				minHeight: 0,
				overflow: "hidden"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, { sx: {
			...stickyTabRowStyles,
			top: 0,
			flexShrink: 0
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Tabs, {
			variant: "fullWidth",
			size: "small",
			sx: { mt: .5 },
			...getTabsProps(),
			onChange: (e, newValue) => {
				getTabsProps().onChange(e, newValue);
				setCurrentTab(newValue);
				persistDesignSystemTab(newValue);
				notifyDesignSystemTabChange(newValue);
				trackDesignSystemTabOpened(newValue);
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Tab, {
			label: (0, _wordpress_i18n.__)("Defaults", "elementor"),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.TextIcon, { fontSize: "small" }),
			iconPosition: "start",
			...getTabProps("defaults")
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Tab, {
			label: (0, _wordpress_i18n.__)("Variables", "elementor"),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.ColorFilterIcon, { fontSize: "small" }),
			iconPosition: "start",
			...getTabProps("variables")
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Tab, {
			label: (0, _wordpress_i18n.__)("Classes", "elementor"),
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.ColorSwatchIcon, { fontSize: "small" }),
			iconPosition: "start",
			...getTabProps("classes")
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null)), /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			role: "tabpanel",
			...getTabPanelProps("defaults"),
			sx: {
				flex: 1,
				minHeight: 0,
				display: currentTab === "defaults" ? "flex" : "none",
				flexDirection: "column",
				overflow: "hidden",
				pt: 1
			}
		}, /* @__PURE__ */ react.createElement(_elementor_editor_default_styles.DefaultStylesTabEmbedded, {
			onRequestClose: chainedThroughVariables,
			onExposeCloseAttempt: (fn) => {
				defaultsCloseAttemptRef.current = fn;
			}
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			role: "tabpanel",
			...getTabPanelProps("variables"),
			sx: {
				flex: 1,
				minHeight: 0,
				display: currentTab === "variables" ? "flex" : "none",
				flexDirection: "column",
				overflow: "hidden",
				pt: 1
			}
		}, /* @__PURE__ */ react.createElement(_elementor_editor_variables.VariablesManagerPanelEmbedded, {
			onRequestClose: chainedThroughClasses,
			onExposeCloseAttempt: (fn) => {
				variablesCloseAttemptRef.current = fn;
			}
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			role: "tabpanel",
			...getTabPanelProps("classes"),
			sx: {
				flex: 1,
				minHeight: 0,
				display: currentTab === "classes" ? "flex" : "none",
				flexDirection: "column",
				overflow: "hidden",
				pt: 1
			}
		}, /* @__PURE__ */ react.createElement(_elementor_editor_global_classes.ClassManagerPanelEmbedded, {
			onRequestClose: chainedThroughDefaults,
			onExposeCloseAttempt: (fn) => {
				classesCloseAttemptRef.current = fn;
			},
			isActive: currentTab === "classes"
		}))))));
	}

//#endregion
//#region packages/packages/core/editor-design-system/src/design-system-panel.tsx
	var PANEL_ID$1 = "design-system";
	var { panel, usePanelStatus, usePanelActions } = (0, _elementor_editor_panels.createPanel)({
		id: PANEL_ID$1,
		component: DesignSystemPanelRoot,
		allowedEditModes: ["edit", PANEL_ID$1],
		onOpen: () => {
			(0, _elementor_editor_v1_adapters.changeEditMode)(PANEL_ID$1);
		},
		onClose: async () => {
			(0, _elementor_editor_v1_adapters.changeEditMode)("edit");
			await (0, _elementor_editor_documents.reloadCurrentDocument)();
		},
		isOpenPreviousElement: true
	});
	function DesignSystemPanelRoot() {
		const { close: closePanel } = usePanelActions();
		return /* @__PURE__ */ react.createElement(DesignSystemPanelContent, { onRequestClose: closePanel });
	}

//#endregion
//#region packages/packages/core/editor-design-system/src/components/design-system-entrypoints.tsx
	var V1_ELEMENTS_PANEL_ROUTE = "panel/elements/categories";
	var EVENT_OPEN_DEFAULTS = "elementor/open-default-styles";
	var EVENT_OPEN_VARIABLES = "elementor/open-variables-manager";
	var EVENT_OPEN_CLASSES = "elementor/open-global-classes-manager";
	var EVENT_TOGGLE$1 = "elementor/toggle-design-system";
	var EVENT_SET_TAB = "elementor/design-system/set-tab";
	var ACTIVE_PANEL_PARAM = "active-panel";
	var PANEL_ID = "design-system";
	var LEGACY_DEFAULT_STYLES_PANEL = "default-styles";
	var LEGACY_GLOBAL_CLASSES_PANEL = "global-classes-manager";
	var LEGACY_VARIABLES_PANEL = "variables-manager";
	var OPEN_EVENT_BY_TAB = {
		defaults: EVENT_OPEN_DEFAULTS,
		variables: EVENT_OPEN_VARIABLES,
		classes: EVENT_OPEN_CLASSES
	};
	function DesignSystemEntrypoints() {
		const { open, close } = usePanelActions();
		const { isOpen } = usePanelStatus();
		const document = (0, _elementor_editor_documents.__useActiveDocument)();
		const { save: saveDocument } = (0, _elementor_editor_documents.__useActiveDocumentActions)();
		const { open: openSaveDialog, close: closeSaveDialog, isOpen: isSaveDialogOpen } = (0, _elementor_editor_ui.useDialog)();
		const documentRef = (0, react.useRef)(document);
		documentRef.current = document;
		const pendingOpenRef = (0, react.useRef)(null);
		const gatedOpen = (0, react.useCallback)((onClean) => {
			if (documentRef.current?.isDirty) {
				pendingOpenRef.current = onClean;
				openSaveDialog();
				return;
			}
			onClean();
		}, [openSaveDialog]);
		const handleSaveAndContinue = (0, react.useCallback)(async () => {
			try {
				await saveDocument();
				closeSaveDialog();
				pendingOpenRef.current?.();
				pendingOpenRef.current = null;
			} catch {}
		}, [saveDocument, closeSaveDialog]);
		const handleStayHere = (0, react.useCallback)(() => {
			closeSaveDialog();
			pendingOpenRef.current = null;
		}, [closeSaveDialog]);
		const isOpenRef = (0, react.useRef)(isOpen);
		isOpenRef.current = isOpen;
		(0, react.useEffect)(() => {
			const handler = (event) => {
				const tab = event.detail?.tab;
				if (tab !== "defaults" && tab !== "variables" && tab !== "classes") return;
				if (isOpenRef.current && getActiveDesignSystemTab() === tab) {
					close();
					return;
				}
				if (isOpenRef.current) {
					window.dispatchEvent(new CustomEvent(EVENT_SET_TAB, { detail: { tab } }));
					return;
				}
				gatedOpen(() => {
					window.dispatchEvent(new CustomEvent(OPEN_EVENT_BY_TAB[tab]));
				});
			};
			window.addEventListener(EVENT_TOGGLE$1, handler);
			return () => {
				window.removeEventListener(EVENT_TOGGLE$1, handler);
			};
		}, [close, gatedOpen]);
		const pendingTabRef = (0, react.useRef)(null);
		const [readyToOpenFromEvent, setReadyToOpenFromEvent] = (0, react.useState)(false);
		(0, react.useEffect)(() => {
			if (readyToOpenFromEvent) {
				setReadyToOpenFromEvent(false);
				open();
			}
		}, [readyToOpenFromEvent, open]);
		(0, react.useEffect)(() => {
			return (0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.routeOpenEvent)(V1_ELEMENTS_PANEL_ROUTE), () => {
				const tab = pendingTabRef.current;
				if (tab) {
					pendingTabRef.current = null;
					setPendingDesignSystemTab(tab);
					setReadyToOpenFromEvent(true);
				}
			});
		}, []);
		(0, react.useEffect)(() => {
			const bind = (eventName, tab) => {
				const handler = () => {
					pendingTabRef.current = tab;
					(0, _elementor_editor_v1_adapters.__privateOpenRoute)(V1_ELEMENTS_PANEL_ROUTE);
				};
				window.addEventListener(eventName, handler);
				return () => window.removeEventListener(eventName, handler);
			};
			const unlistenDefaults = bind(EVENT_OPEN_DEFAULTS, "defaults");
			const unlistenVariables = bind(EVENT_OPEN_VARIABLES, "variables");
			const unlistenClasses = bind(EVENT_OPEN_CLASSES, "classes");
			return () => {
				unlistenDefaults();
				unlistenVariables();
				unlistenClasses();
			};
		}, []);
		const hasOpenedFromUrl = (0, react.useRef)(false);
		(0, react.useEffect)(() => {
			const urlParams = new URLSearchParams(window.location.search);
			const activePanel = urlParams.get(ACTIVE_PANEL_PARAM);
			if (!activePanel) return;
			let targetTab = null;
			if (activePanel === PANEL_ID) {
				const tab = urlParams.get("design-system-tab");
				if (tab === "classes") targetTab = "classes";
				else if (tab === "variables") targetTab = "variables";
				else targetTab = "defaults";
			} else if (activePanel === LEGACY_DEFAULT_STYLES_PANEL) targetTab = "defaults";
			else if (activePanel === LEGACY_GLOBAL_CLASSES_PANEL) targetTab = "classes";
			else if (activePanel === LEGACY_VARIABLES_PANEL) targetTab = "variables";
			else return;
			return (0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.routeOpenEvent)(V1_ELEMENTS_PANEL_ROUTE), () => {
				if (hasOpenedFromUrl.current) return;
				hasOpenedFromUrl.current = true;
				requestAnimationFrame(() => {
					if (targetTab) setPendingDesignSystemTab(targetTab);
					gatedOpen(() => void open());
				});
			});
		}, [open, gatedOpen]);
		return isSaveDialogOpen ? /* @__PURE__ */ react.createElement(_elementor_editor_ui.ThemeProvider, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.Title, null, (0, _wordpress_i18n.__)("You have unsaved changes", "elementor")), /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.Content, null, /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.ContentText, { sx: { mb: 2 } }, (0, _wordpress_i18n.__)("To open the Design System, save your page first. You can't continue without saving.", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_editor_ui.SaveChangesDialog.Actions, { actions: {
			cancel: {
				label: (0, _wordpress_i18n.__)("Stay here", "elementor"),
				action: handleStayHere
			},
			confirm: {
				label: (0, _wordpress_i18n.__)("Save & Continue", "elementor"),
				action: handleSaveAndContinue
			}
		} }))) : null;
	}

//#endregion
//#region packages/packages/core/editor-design-system/src/use-open-design-system-toolbar.ts
	var EVENT_TOGGLE = "elementor/toggle-design-system";
	function useOpenDesignSystemToolbar() {
		const { isOpen } = usePanelStatus();
		return {
			title: (0, _wordpress_i18n.__)("Design System", "elementor"),
			icon: _elementor_icons.DropletHalfFilledIcon,
			onClick: () => {
				if (!isOpen) trackDesignSystem({ event: "opened" });
				const tab = getActiveDesignSystemTab();
				window.dispatchEvent(new CustomEvent(EVENT_TOGGLE, { detail: { tab } }));
			},
			selected: isOpen
		};
	}

//#endregion
//#region packages/packages/core/editor-design-system/src/init.ts
	function init() {
		(0, _elementor_editor_panels.registerPanel)(panel);
		(0, _elementor_editor.injectIntoLogic)({
			id: "design-system-entrypoints",
			component: DesignSystemEntrypoints
		});
		_elementor_editor_app_bar.toolsMenu.registerToggleAction({
			id: "open-design-system-toolbar",
			priority: 4,
			useProps: useOpenDesignSystemToolbar
		});
	}

//#endregion
//#region packages/packages/core/editor-design-system/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		getInitialDesignSystemTab: () => getInitialDesignSystemTab,
		init: () => init,
		panel: () => panel,
		persistDesignSystemTab: () => persistDesignSystemTab,
		usePanelActions: () => usePanelActions,
		usePanelStatus: () => usePanelStatus
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorDesignSystem = src_exports;

//#endregion
})(elementorV2.editor, elementorV2.editorAppBar, elementorV2.editorPanels, React, elementorV2.editorDocuments, elementorV2.editorUi, elementorV2.editorV1Adapters, wp.i18n, elementorV2.editorDefaultStyles, elementorV2.editorGlobalClasses, elementorV2.editorVariables, elementorV2.icons, elementorV2.ui, elementorV2.editorCurrentUser, elementorV2.query, elementorV2.editorNotifications, elementorV2.httpClient, elementorV2.editorCanvas, elementorV2.events);
window.elementorV2.editorDesignSystem?.init?.();
//# sourceMappingURL=editor-design-system.js.map