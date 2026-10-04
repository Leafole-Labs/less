(function(_elementor_editor_floating_panels, _elementor_store, _elementor_editor_app_bar, _elementor_icons, _wordpress_i18n, react, _elementor_editor_elements, _elementor_ui, _elementor_http_client, _elementor_session, _elementor_editor_notifications, _elementor_editor_v1_adapters, _elementor_events, _elementor_editor_mcp) {

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

//#region packages/packages/core/editor-audits/src/utils/window-config.ts
	function getWindowConfig() {
		const config = window.elementorAudits;
		if (!config) return {
			restNamespace: "elementor/v1",
			nonce: ""
		};
		return config;
	}

//#endregion
//#region packages/packages/core/editor-audits/src/api/page-context-client.ts
	async function fetchPageContext(documentId, attachmentIds) {
		const { restNamespace, nonce } = getWindowConfig();
		const url = `${restNamespace}/audits/page-context`;
		return (await (0, _elementor_http_client.httpService)().get(url, {
			params: {
				document_id: documentId,
				attachment_ids: attachmentIds
			},
			headers: { "X-WP-Nonce": nonce }
		})).data;
	}

//#endregion
//#region packages/packages/core/editor-audits/src/registry.ts
	var registry = /* @__PURE__ */ new Map();
	function registerAudit(audit) {
		registry.set(audit.id, audit);
	}
	function getRegisteredAudits() {
		return Array.from(registry.values());
	}

//#endregion
//#region packages/packages/core/editor-audits/src/constants.ts
	var AUDIT_PANEL_ID = "audit-panel";
	var REPORT_STORAGE_KEY_PREFIX = "elementor/audits/report";
	var CREATE_WIDGET_EVENT = "elementor/editor/create-widget";
	var ANGIE_FIX_ENTRY_POINT = "audit_violation";
	var FEEDBACK_EXPERIMENT_NAME = "in_editor_feedback";
	var FEEDBACK_ENTRY_POINT = "audit_panel";
	var FEEDBACK_CLICKED_EVENT = "audit_feedback_clicked";
	var FEEDBACK_SENT_EVENT = "audit_feedback_sent";
	var FEEDBACK_CANCELLED_EVENT = "audit_feedback_cancelled";
	var FEEDBACK_CLOSED_EVENT = "audit_feedback_closed";
	var ALL_CATEGORIES = [
		"best-practices",
		"seo",
		"accessibility",
		"performance",
		"compliance"
	];
	var CATEGORY_LABELS = {
		"best-practices": (0, _wordpress_i18n.__)("Best Practices", "elementor"),
		seo: (0, _wordpress_i18n.__)("SEO", "elementor"),
		accessibility: (0, _wordpress_i18n.__)("Accessibility", "elementor"),
		performance: (0, _wordpress_i18n.__)("Performance", "elementor"),
		compliance: (0, _wordpress_i18n.__)("Compliance", "elementor")
	};

//#endregion
//#region packages/packages/core/editor-audits/src/utils/sort-failed-audits.ts
	var SEVERITY_SORTING_RANK = {
		error: 0,
		warning: 1,
		info: 2
	};
	function sortFailedAuditResults(results) {
		return [...results].sort((a, b) => {
			const rankDiff = SEVERITY_SORTING_RANK[a.audit.severity] - SEVERITY_SORTING_RANK[b.audit.severity];
			if (rankDiff !== 0) return rankDiff;
			return a.audit.title.localeCompare(b.audit.title);
		});
	}

//#endregion
//#region packages/packages/core/editor-audits/src/utils/audit-status-summary.ts
	function partitionAuditResults(report, options = {}) {
		const { category, sortFailed = true } = options;
		const failed = [];
		const passed = [];
		const skipped = [];
		let totalViolations = 0;
		for (const run of report.auditResults) {
			if (category && !run.audit.categories.includes(category)) continue;
			switch (run.result.status) {
				case "fail":
					failed.push({
						...run,
						result: run.result
					});
					totalViolations += run.result.violations.length;
					break;
				case "pass":
					passed.push({
						...run,
						result: run.result
					});
					break;
				case "skipped":
					skipped.push({
						...run,
						result: run.result
					});
					break;
			}
		}
		return {
			failed: sortFailed ? sortFailedAuditResults(failed) : failed,
			passed,
			skipped,
			totalViolations
		};
	}
	function auditStatusDisplayCounts(report) {
		let pass = 0;
		let skipped = 0;
		let totalViolations = 0;
		for (const { result } of report.auditResults) switch (result.status) {
			case "fail":
				totalViolations += result.violations.length;
				break;
			case "pass":
				pass++;
				break;
			case "skipped":
				skipped++;
				break;
		}
		return {
			fail: totalViolations,
			pass,
			skipped
		};
	}
	function auditStatusColor(status) {
		switch (status) {
			case "fail": return "error";
			case "pass": return "success";
			case "skipped": return "default";
		}
	}
	function auditStatusLabel(status) {
		switch (status) {
			case "fail": return (0, _wordpress_i18n.__)("Failed audits", "elementor");
			case "pass": return (0, _wordpress_i18n.__)("Passed audits", "elementor");
			case "skipped": return (0, _wordpress_i18n.__)("Skipped audits", "elementor");
		}
	}
	function getPopulatedCategories(categoryTotals, categories) {
		return categories.filter((category) => categoryTotals[category].total > 0);
	}

//#endregion
//#region packages/packages/core/editor-audits/src/utils/compute-report.ts
	function computeReport(documentId, results) {
		const accumulators = Object.fromEntries(ALL_CATEGORIES.map((c) => [c, {
			totalWeight: 0,
			passedWeight: 0,
			total: 0,
			failed: 0
		}]));
		for (const { audit, result } of results) {
			if (result.status === "skipped") continue;
			for (const category of audit.categories) {
				const acc = accumulators[category];
				acc.total++;
				acc.totalWeight += audit.weight;
				if (result.status === "pass") acc.passedWeight += audit.weight;
				else acc.failed++;
			}
		}
		const categories = Object.fromEntries(ALL_CATEGORIES.map((c) => {
			const acc = accumulators[c];
			return [c, {
				score: acc.totalWeight === 0 ? 0 : Math.round(acc.passedWeight / acc.totalWeight * 100),
				failed: acc.failed,
				total: acc.total
			}];
		}));
		const populated = getPopulatedCategories(categories, ALL_CATEGORIES);
		const overall = populated.length === 0 ? 0 : Math.round(populated.reduce((sum, c) => sum + categories[c].score, 0) / populated.length);
		return {
			documentId,
			runAt: Date.now(),
			overall,
			categories,
			auditResults: results
		};
	}

//#endregion
//#region packages/packages/core/editor-audits/src/utils/walk.ts
	function walkElements(tree, visit) {
		recurse(tree, [], visit);
	}
	function recurse(nodes, parents, visit) {
		for (const node of nodes) {
			visit(node, parents);
			parents.push(node);
			recurse(node.elements, parents, visit);
			parents.pop();
		}
	}

//#endregion
//#region packages/packages/core/editor-audits/src/utils/image-like-sources.ts
	var IMAGE_LIKE_WIDGETS = /* @__PURE__ */ new Set([
		"image",
		"image-box",
		"image-carousel",
		"gallery",
		"image-gallery"
	]);
	function hasPageImages(tree) {
		let found = false;
		walkImageLikeSources(tree, ({ media }) => {
			if (media.id || media.url) found = true;
		});
		return found;
	}
	function walkImageLikeSources(tree, visit) {
		walkElements(tree, (node) => {
			if (node.elType !== "widget") return;
			if (!IMAGE_LIKE_WIDGETS.has(node.widgetType ?? "")) return;
			for (const media of collectMediaFromNode(node)) visit({
				node,
				media
			});
		});
	}
	function collectMediaFromNode(node) {
		const sources = [];
		const image = node.settings.image;
		if (image?.id || image?.url) sources.push(image);
		const gallery = node.settings.carousel ?? node.settings.gallery ?? node.settings.wp_gallery;
		if (Array.isArray(gallery)) {
			for (const item of gallery) if (item?.id || item?.url) sources.push(item);
		}
		return sources;
	}

//#endregion
//#region packages/packages/core/editor-audits/src/utils/page-attachments.ts
	function extractAttachmentIds(tree) {
		const ids = /* @__PURE__ */ new Set();
		walkImageLikeSources(tree, ({ media }) => {
			if (media.id) ids.add(media.id);
		});
		return Array.from(ids).sort((a, b) => a - b);
	}

//#endregion
//#region packages/packages/core/editor-audits/src/utils/read-kit-snapshot.ts
	function hasNonEmptyGlobalValue(item) {
		return item.value.length > 0;
	}
	async function readKitSnapshot(kitId) {
		const [colorsFromApi, fontsFromApi] = await Promise.all([readGlobalsFromApi("globals/colors", mapApiColor, hasNonEmptyGlobalValue), readGlobalsFromApi("globals/typography", mapApiTypography, hasNonEmptyGlobalValue)]);
		const documentSettings = colorsFromApi.length === 0 || fontsFromApi.length === 0 ? getKitDocumentSettings(kitId) : null;
		return {
			id: kitId,
			globals: {
				colors: colorsFromApi.length > 0 ? colorsFromApi : readColorsFromKitDocumentSettings(documentSettings),
				fonts: fontsFromApi.length > 0 ? fontsFromApi : readFontsFromKitDocumentSettings(documentSettings)
			}
		};
	}
	async function readGlobalsFromApi(command, mapItem, hasValue) {
		const $e = window.$e;
		if (!$e?.data?.get) return [];
		try {
			const data = (await $e.data.get(command))?.data ?? {};
			return Object.values(data).map((item) => mapItem(item)).filter(hasValue);
		} catch {
			return [];
		}
	}
	function mapApiColor(item) {
		return {
			id: item.id,
			value: item.value ?? "",
			title: item.title ?? item.id
		};
	}
	function mapApiTypography(item) {
		return {
			id: item.id,
			value: item.value?.typography_font_family ?? "",
			title: item.title ?? item.id
		};
	}
	function readColorsFromKitDocumentSettings(settings) {
		if (!settings) return [];
		return [...settings.system_colors ?? [], ...settings.custom_colors ?? []].map((row) => ({
			id: row._id,
			value: row.color,
			title: row.title ?? row._id
		})).filter(hasNonEmptyGlobalValue);
	}
	function readFontsFromKitDocumentSettings(settings) {
		if (!settings) return [];
		return [...settings.system_typography ?? [], ...settings.custom_typography ?? []].map((row) => ({
			id: row._id,
			value: row.typography_font_family ?? "",
			title: row.title ?? row._id
		})).filter(hasNonEmptyGlobalValue);
	}
	function getKitDocumentSettings(kitId) {
		return (window.elementor?.documents?.get?.(kitId))?.config?.settings?.settings ?? null;
	}

//#endregion
//#region packages/packages/core/editor-audits/src/utils/v1-snapshot.ts
	function buildSnapshotTree(elements) {
		if (elements.length === 0) return [];
		return (elements[0].children ?? []).map(toSnapshot);
	}
	function toSnapshot(element) {
		const model = element.model;
		const settings = element.settings?.toJSON?.() ?? {};
		return {
			id: element.id,
			elType: model.get("elType") ?? "",
			widgetType: model.get("widgetType"),
			settings,
			elements: (element.children ?? []).map(toSnapshot)
		};
	}

//#endregion
//#region packages/packages/core/editor-audits/src/runner.ts
	async function runPageAudit(documentId) {
		const tree = buildSnapshotTree((0, _elementor_editor_elements.getElements)());
		const pageContext = await fetchPageContext(documentId, extractAttachmentIds(tree));
		const ctx = {
			documentId,
			elements: {
				documentId,
				tree
			},
			pageContext,
			kit: await readKitSnapshot(pageContext.kit_id)
		};
		const registered = getRegisteredAudits();
		return computeReport(documentId, await Promise.all(registered.map(async (audit) => {
			const { evaluate: _evaluate, ...meta } = audit;
			try {
				return {
					audit: meta,
					result: await audit.evaluate(ctx)
				};
			} catch (error) {
				return {
					audit: meta,
					result: {
						status: "skipped",
						reason: error instanceof Error ? error.message : "unknown-error"
					}
				};
			}
		})));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/store/slice.ts
	var initialState = {
		status: "idle",
		report: null,
		error: null
	};
	var slice = (0, _elementor_store.__createSlice)({
		name: "audits",
		initialState,
		reducers: {
			runStarted(state) {
				state.status = "loading";
				state.error = null;
			},
			runSucceeded(state, action) {
				state.status = "ready";
				state.report = action.payload;
			},
			runFailed(state, action) {
				state.status = "error";
				state.error = action.payload;
			},
			reportRestored(state, action) {
				state.status = "ready";
				state.report = action.payload;
				state.error = null;
			},
			reportCleared(state) {
				state.status = "idle";
				state.report = null;
				state.error = null;
			}
		}
	});

//#endregion
//#region packages/packages/core/editor-audits/src/store/selectors.ts
	function selectStatus(state) {
		return state.audits.status;
	}
	function selectReport(state) {
		return state.audits.report;
	}
	function selectError(state) {
		return state.audits.error;
	}

//#endregion
//#region packages/packages/core/editor-audits/src/utils/report-storage.ts
	function getStorageKey(documentId) {
		return `${REPORT_STORAGE_KEY_PREFIX}/${documentId}`;
	}
	function getPersistedReport(documentId) {
		return (0, _elementor_session.getSessionStorageItem)(getStorageKey(documentId)) ?? null;
	}
	function persistReport(documentId, report) {
		(0, _elementor_session.setSessionStorageItem)(getStorageKey(documentId), report);
	}

//#endregion
//#region packages/packages/core/editor-audits/src/hooks/use-audit-report.ts
	function useAuditReport() {
		const status = (0, _elementor_store.__useSelector)((state) => selectStatus(state));
		const report = (0, _elementor_store.__useSelector)((state) => selectReport(state));
		const error = (0, _elementor_store.__useSelector)((state) => selectError(state));
		const dispatch = (0, _elementor_store.__useDispatch)();
		const documentId = (0, _elementor_editor_elements.getCurrentDocumentId)() ?? 0;
		(0, react.useEffect)(() => {
			if (!documentId || report?.documentId === documentId) return;
			const persisted = getPersistedReport(documentId);
			if (persisted) dispatch(slice.actions.reportRestored(persisted));
			else if (report) dispatch(slice.actions.reportCleared());
		}, [
			documentId,
			report,
			dispatch
		]);
		const run = async (documentIdToRun) => {
			dispatch(slice.actions.runStarted());
			try {
				const nextReport = await runPageAudit(documentIdToRun);
				dispatch(slice.actions.runSucceeded(nextReport));
				persistReport(documentIdToRun, nextReport);
			} catch (e) {
				dispatch(slice.actions.runFailed(e instanceof Error ? e.message : "Unknown error"));
			}
		};
		return {
			status,
			report,
			error,
			run
		};
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/audit-feedback.tsx
	var FEEDBACK_SUBJECT = "Page Audit Tool";
	var FEEDBACK_SUBJECT_LABEL = (0, _wordpress_i18n.__)("Page Audit Tool", "elementor");
	var SUCCESS_NOTIFICATION_ID = "audit-feedback-success";
	var ERROR_NOTIFICATION_ID = "audit-feedback-error";
	var DIALOG_TITLE_ID = "audit-feedback-dialog-title";
	var DIALOG_DESCRIPTION_ID = "audit-feedback-dialog-description";
	var isUserConnected = () => Boolean(window.elementorCommon?.config?.library_connect?.is_connected || window.elementorPro?.config?.isActive);
	var notifySuccess = () => (0, _elementor_editor_notifications.notify)({
		id: SUCCESS_NOTIFICATION_ID,
		type: "success",
		message: (0, _wordpress_i18n.__)("Feedback sent. Thanks for helping us out.", "elementor")
	});
	var notifyError = () => (0, _elementor_editor_notifications.notify)({
		id: ERROR_NOTIFICATION_ID,
		type: "error",
		message: (0, _wordpress_i18n.__)("Something went wrong. Please try sending your feedback again.", "elementor")
	});
	function AuditFeedback() {
		const [isOpen, setIsOpen] = (0, react.useState)(false);
		const [feedbackText, setFeedbackText] = (0, react.useState)("");
		const [isSubmitting, setIsSubmitting] = (0, react.useState)(false);
		const { dispatchEvent: trackEvent = (...args) => void 0 } = (0, _elementor_events.useMixpanel)();
		if (!(0, _elementor_editor_v1_adapters.isExperimentActive)("in_editor_feedback")) return null;
		const connected = isUserConnected();
		const connectUrl = window.elementor?.config?.user?.top_bar?.connect_url;
		if (!connected && !connectUrl) return null;
		const triggerLabel = (0, _wordpress_i18n.__)("Give feedback", "elementor");
		const handleOpen = () => {
			if (!connected) {
				window.open(connectUrl, "_blank", "noopener");
				trackEvent(FEEDBACK_CLICKED_EVENT, {
					entry_point: FEEDBACK_ENTRY_POINT,
					connected: false
				});
				return;
			}
			setIsOpen(true);
			trackEvent(FEEDBACK_CLICKED_EVENT, {
				entry_point: FEEDBACK_ENTRY_POINT,
				connected: true
			});
		};
		const dismiss = (eventName) => {
			setIsOpen(false);
			setFeedbackText("");
			trackEvent(eventName, { entry_point: FEEDBACK_ENTRY_POINT });
		};
		const handleCancel = () => dismiss(FEEDBACK_CANCELLED_EVENT);
		const handleClose = () => dismiss(FEEDBACK_CLOSED_EVENT);
		const handleSubmit = () => {
			setIsSubmitting(true);
			(0, _elementor_http_client.httpService)().post("elementor/v1/feedback/submit", {
				subject: FEEDBACK_SUBJECT,
				description: feedbackText.trim()
			}).then((response) => {
				if (!response.data.success) {
					notifyError();
					return;
				}
				setIsOpen(false);
				setFeedbackText("");
				notifySuccess();
				trackEvent(FEEDBACK_SENT_EVENT, { entry_point: FEEDBACK_ENTRY_POINT });
			}).catch(notifyError).finally(() => setIsSubmitting(false));
		};
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: triggerLabel,
			placement: "top"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: "small",
			"aria-label": triggerLabel,
			onClick: handleOpen
		}, /* @__PURE__ */ react.createElement(_elementor_icons.MessageLinesIcon, { fontSize: "small" }))), /* @__PURE__ */ react.createElement(_elementor_ui.Dialog, {
			open: isOpen,
			onClose: handleClose,
			"aria-labelledby": DIALOG_TITLE_ID,
			"aria-describedby": DIALOG_DESCRIPTION_ID,
			PaperProps: { sx: { borderRadius: 1 } }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.DialogHeader, {
			logo: false,
			onClose: handleClose
		}, /* @__PURE__ */ react.createElement(_elementor_ui.DialogTitle, { id: DIALOG_TITLE_ID }, (0, _wordpress_i18n.__)("Let us know what you think", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.DialogContent, { dividers: true }, /* @__PURE__ */ react.createElement(_elementor_ui.Stack, {
			direction: "column",
			gap: 2
		}, /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			value: FEEDBACK_SUBJECT_LABEL,
			disabled: true,
			fullWidth: true,
			size: "small"
		}), /* @__PURE__ */ react.createElement(_elementor_ui.TextField, {
			placeholder: (0, _wordpress_i18n.__)("Tell us what you had in mind, what we can improve or fix to make this feature better.", "elementor"),
			fullWidth: true,
			multiline: true,
			rows: 4,
			disabled: isSubmitting,
			onChange: (event) => setFeedbackText(event.target.value),
			value: feedbackText
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			id: DIALOG_DESCRIPTION_ID,
			variant: "caption",
			color: "text.secondary"
		}, (0, _wordpress_i18n.__)("We appreciate your feedback! While we review all submissions, we can't guarantee that every suggestion will result in a change or update.", "elementor")))), /* @__PURE__ */ react.createElement(_elementor_ui.DialogActions, null, /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "text",
			color: "secondary",
			onClick: handleCancel
		}, (0, _wordpress_i18n.__)("Cancel", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			color: "primary",
			disabled: isSubmitting || feedbackText.trim().length === 0,
			onClick: handleSubmit
		}, (0, _wordpress_i18n.__)("Send", "elementor")))));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/pages/error-page.tsx
	function ErrorPage({ message, onRetry }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			gap: 1.5,
			p: 4
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "error",
			textAlign: "center"
		}, message), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			size: "small",
			onClick: onRetry
		}, (0, _wordpress_i18n.__)("Try again", "elementor")));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/pages/loading-page.tsx
	function LoadingPage() {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			gap: 1.5,
			p: 4
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.CircularProgress, { size: 32 }), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "body2" }, (0, _wordpress_i18n.__)("Audit in progress.", "elementor")));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/pages/welcome-page.tsx
	var INFORMATION_IMAGE_PATH = "images/information.svg";
	function WelcomePage() {
		const assetsUrl = window.elementorCommon?.config?.urls?.assets ?? "";
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			gap: 1,
			p: 3
		} }, /* @__PURE__ */ react.createElement("img", {
			className: "elementor-nerd-box-icon",
			src: `${assetsUrl}${INFORMATION_IMAGE_PATH}`,
			loading: "lazy",
			alt: (0, _wordpress_i18n.__)("Elementor", "elementor")
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "subtitle1",
			component: "h3",
			sx: { marginBlockStart: 2 }
		}, (0, _wordpress_i18n.__)("Audit your page!", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			textAlign: "center"
		}, (0, _wordpress_i18n.__)("Check SEO, accessibility, performance, and best practices. Click \"Run page audit\" to begin.", "elementor")));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/status-section.tsx
	function StatusSection({ label, count, color = "default", defaultExpanded = false, children }) {
		const [expanded, setExpanded] = (0, react.useState)(defaultExpanded);
		if (count === 0) return null;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { paddingBlock: 1 } }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			sx: {
				display: "flex",
				alignItems: "center",
				gap: .5,
				cursor: "pointer"
			},
			onClick: () => setExpanded((v) => !v)
		}, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: "small",
			"aria-label": expanded ? (0, _wordpress_i18n.__)("Collapse", "elementor") : (0, _wordpress_i18n.__)("Expand", "elementor")
		}, /* @__PURE__ */ react.createElement(_elementor_icons.ChevronDownIcon, {
			fontSize: "small",
			sx: {
				transform: expanded ? "rotate(180deg)" : void 0,
				transition: "transform .2s"
			}
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			label: `${label} (${count})`,
			size: "small",
			color,
			variant: "standard"
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Collapse, { in: expanded }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			paddingInlineStart: 4.25,
			paddingBlock: 2
		} }, children)));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/subpage-header.tsx
	function SubpageHeader({ title, onBack, backLabel, icon }) {
		const isRtl = "rtl" === (0, _elementor_ui.useTheme)().direction;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			alignItems: "center",
			gap: .5,
			p: 1
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: "small",
			onClick: onBack,
			"aria-label": backLabel ?? (0, _wordpress_i18n.__)("Back", "elementor")
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Rotate, { in: isRtl }, /* @__PURE__ */ react.createElement(_elementor_icons.ArrowLeftIcon, { fontSize: "small" }))), icon, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "subtitle2",
			fontWeight: "bold"
		}, title));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/hooks/focus-violation.ts
	var SCROLL_TO_VIEW_DELAY_MS = 200;
	function focusViolation(violation) {
		if (violation.elementId) {
			const container = (0, _elementor_editor_elements.getContainer)(violation.elementId);
			if (container) {
				(0, _elementor_editor_elements.selectElement)(violation.elementId);
				const domElement = container.view?.getDomElement?.();
				if (domElement) window.elementor?.helpers?.scrollToView?.(domElement, SCROLL_TO_VIEW_DELAY_MS);
			}
			if (violation.targetHint === "element-settings") (0, _elementor_editor_v1_adapters.__privateRunCommand)("panel/editor/open");
			return;
		}
		if (violation.externalUrl) {
			window.open(violation.externalUrl, "_blank");
			return;
		}
		if (violation.targetHint === "page-settings") {
			(0, _elementor_editor_v1_adapters.__privateOpenRoute)("panel/page-settings/settings");
			return;
		}
		if (violation.targetHint === "site-settings") {
			(0, _elementor_editor_v1_adapters.__privateRunCommand)("panel/global/open");
			return;
		}
		if (violation.targetHint === "site-identity-settings") (0, _elementor_editor_v1_adapters.__privateRunCommand)("panel/global/open").then(() => {
			(0, _elementor_editor_v1_adapters.__privateOpenRoute)("panel/global/settings-site-identity");
		});
	}

//#endregion
//#region packages/packages/core/editor-audits/src/utils/build-angie-prompt.ts
	function buildAngiePrompt(violationText) {
		return (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("Help me fix: %s", "elementor"), violationText);
	}

//#endregion
//#region packages/packages/core/editor-audits/src/utils/keyboard-click.ts
	function onKeyboardClick(callback) {
		return (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				callback();
			}
		};
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/fix-violation-with-angie.tsx
	function FixViolationWithAngie({ prompt }) {
		const label = (0, _wordpress_i18n.__)("Fix with Angie", "elementor");
		const href = `#angie-prompt=${encodeURIComponent(prompt)}`;
		const handleClick = (event) => {
			event.stopPropagation();
			event.preventDefault();
			if ((0, _elementor_editor_mcp.isAngieAvailable)()) {
				(0, _elementor_editor_mcp.sendPromptToAngie)(prompt);
				return;
			}
			window.dispatchEvent(new CustomEvent(CREATE_WIDGET_EVENT, { detail: {
				entry_point: ANGIE_FIX_ENTRY_POINT,
				prompt
			} }));
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, { title: label }, /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			className: "violation-hover-icon",
			component: "a",
			href,
			size: "small",
			"aria-label": label,
			onClick: handleClick
		}, /* @__PURE__ */ react.createElement(_elementor_icons.AngieIcon, { fontSize: "tiny" })));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/severity-icons.tsx
	var SEVERITY_CONFIG = {
		error: {
			Icon: _elementor_icons.AlertTriangleFilledIcon,
			color: "error"
		},
		warning: {
			Icon: _elementor_icons.AlertCircleIcon,
			color: "warning"
		},
		info: {
			Icon: _elementor_icons.InfoCircleIcon,
			color: "info"
		}
	};
	function SeverityIcon({ severity }) {
		const { Icon, color } = SEVERITY_CONFIG[severity];
		return /* @__PURE__ */ react.createElement(Icon, {
			fontSize: "small",
			color
		});
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/violation-icons.tsx
	function ViolationIcon({ violation, widgetIcon }) {
		if (widgetIcon) return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			component: "i",
			className: widgetIcon,
			"aria-hidden": true,
			sx: {
				fontSize: "inherit",
				width: "1em",
				textAlign: "center"
			}
		});
		if (violation.targetHint === "page-settings") return /* @__PURE__ */ react.createElement(_elementor_icons.FileSettingsIcon, {
			fontSize: "inherit",
			"aria-hidden": true
		});
		if (violation.targetHint === "site-settings" || violation.targetHint === "site-identity-settings") return /* @__PURE__ */ react.createElement(_elementor_icons.SettingsIcon, {
			fontSize: "inherit",
			"aria-hidden": true
		});
		return /* @__PURE__ */ react.createElement(_elementor_icons.ShieldCheckIcon, {
			fontSize: "inherit",
			"aria-hidden": true
		});
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/violation-row.tsx
	function SkipReasonTooltip({ reason }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Tooltip, {
			title: reason,
			placement: "top"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			"aria-label": reason,
			component: "span",
			sx: {
				display: "inline-flex",
				alignItems: "center"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_icons.HelpIcon, {
			fontSize: "small",
			color: "action"
		})));
	}
	function StatusIndicator({ audit, violations }) {
		if (violations) return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			color: "text.secondary",
			fontWeight: "bold"
		}, violations.length), /* @__PURE__ */ react.createElement(SeverityIcon, { severity: audit.severity }));
		return /* @__PURE__ */ react.createElement(_elementor_icons.CheckIcon, {
			fontSize: "small",
			color: "success"
		});
	}
	function ViolationRow({ audit, skipReason, violations }) {
		const [expanded, setExpanded] = (0, react.useState)(false);
		const toggleExpanded = () => setExpanded((value) => !value);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			borderBottom: 1,
			borderColor: "divider",
			paddingBlock: .5
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			alignItems: "center",
			gap: .5
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			sx: {
				alignItems: "center",
				cursor: "pointer",
				display: "flex",
				flex: 1,
				gap: .5,
				minWidth: 0
			},
			onClick: toggleExpanded
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			sx: { flex: 1 }
		}, audit.title), !skipReason && /* @__PURE__ */ react.createElement(StatusIndicator, {
			audit,
			violations
		})), skipReason && /* @__PURE__ */ react.createElement(SkipReasonTooltip, { reason: skipReason }), /* @__PURE__ */ react.createElement(_elementor_ui.IconButton, {
			size: "small",
			"aria-label": expanded ? (0, _wordpress_i18n.__)("Collapse", "elementor") : (0, _wordpress_i18n.__)("Expand", "elementor"),
			onClick: toggleExpanded
		}, /* @__PURE__ */ react.createElement(_elementor_icons.ChevronDownIcon, {
			fontSize: "small",
			sx: {
				transform: expanded ? "rotate(180deg)" : void 0,
				transition: "transform .2s"
			}
		}))), /* @__PURE__ */ react.createElement(_elementor_ui.Collapse, { in: expanded }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			flexDirection: "column",
			gap: 1,
			paddingBlock: 1
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
			severity: "secondary",
			sx: { p: 1 },
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.AlertCircleIcon, {
				fontSize: "small",
				color: "secondary",
				"aria-hidden": true
			})
		}, /* @__PURE__ */ react.createElement(_elementor_ui.AlertTitle, null, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			component: "p",
			color: "text.primary",
			fontWeight: "bold"
		}, (0, _wordpress_i18n.__)("What's the issue", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			component: "p",
			color: "text.secondary"
		}, audit.description)), /* @__PURE__ */ react.createElement(_elementor_ui.Alert, {
			severity: "info",
			sx: { p: 1 },
			icon: /* @__PURE__ */ react.createElement(_elementor_icons.BulbIcon, {
				fontSize: "small",
				color: "info",
				"aria-hidden": true
			})
		}, /* @__PURE__ */ react.createElement(_elementor_ui.AlertTitle, null, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			component: "p",
			color: "text.primary",
			fontWeight: "bold"
		}, (0, _wordpress_i18n.__)("How to resolve", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			component: "p",
			color: "text.secondary"
		}, audit.fixHint))), violations && violations.length > 0 && /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			role: "list",
			sx: {
				paddingBlockEnd: 1,
				paddingInlineStart: 2
			}
		}, violations.map((violation, idx) => {
			const widgetIcon = violation.elementId ? (0, _elementor_editor_elements.getElementIcon)(violation.elementId) : null;
			const elementTitle = violation.elementId ? (0, _elementor_editor_elements.getElementTitle)(violation.elementId) : null;
			const rowLabel = elementTitle ? `${elementTitle} - ${violation.label}` : violation.label;
			return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
				key: idx,
				role: "button",
				tabIndex: 0,
				onClick: () => focusViolation(violation),
				onKeyDown: onKeyboardClick(() => focusViolation(violation)),
				sx: {
					display: "flex",
					alignItems: "center",
					gap: 1,
					paddingBlock: .5,
					paddingInline: 2,
					borderRadius: 1,
					cursor: "pointer",
					"& .violation-hover-icon": {
						opacity: 0,
						transition: "opacity .15s"
					},
					"&:hover": { bgcolor: "action.hover" },
					"&:hover .violation-hover-icon, &:focus-visible .violation-hover-icon": { opacity: 1 }
				}
			}, /* @__PURE__ */ react.createElement(ViolationIcon, {
				violation,
				widgetIcon
			}), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { flex: 1 } }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "caption" }, rowLabel), violation.detail && /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
				variant: "caption",
				color: "text.secondary"
			}, violation.detail)), violation.angieFix && /* @__PURE__ */ react.createElement(FixViolationWithAngie, { prompt: buildAngiePrompt(rowLabel) }), /* @__PURE__ */ react.createElement(_elementor_icons.EyeIcon, {
				className: "violation-hover-icon",
				fontSize: "tiny",
				"aria-hidden": true
			}));
		}))));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/pages/all-audits-page.tsx
	function AllAuditsPage({ initialExpandedStatus, onBack, report }) {
		const { failed, passed, skipped, totalViolations } = partitionAuditResults(report);
		const expandFail = !initialExpandedStatus || initialExpandedStatus === "fail";
		const expandPass = initialExpandedStatus === "pass";
		const expandSkipped = initialExpandedStatus === "skipped";
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { key: initialExpandedStatus ?? "default" }, /* @__PURE__ */ react.createElement(SubpageHeader, {
			title: (0, _wordpress_i18n.__)("All audits", "elementor"),
			onBack
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { p: 1 } }, /* @__PURE__ */ react.createElement(StatusSection, {
			label: auditStatusLabel("fail"),
			count: totalViolations,
			color: auditStatusColor("fail"),
			defaultExpanded: expandFail
		}, failed.map((r) => /* @__PURE__ */ react.createElement(ViolationRow, {
			key: r.audit.id,
			audit: r.audit,
			violations: r.result.violations
		}))), /* @__PURE__ */ react.createElement(StatusSection, {
			label: auditStatusLabel("pass"),
			count: passed.length,
			color: auditStatusColor("pass"),
			defaultExpanded: expandPass
		}, passed.map((r) => /* @__PURE__ */ react.createElement(ViolationRow, {
			key: r.audit.id,
			audit: r.audit
		}))), /* @__PURE__ */ react.createElement(StatusSection, {
			label: auditStatusLabel("skipped"),
			count: skipped.length,
			color: auditStatusColor("skipped"),
			defaultExpanded: expandSkipped
		}, skipped.map((r) => /* @__PURE__ */ react.createElement(ViolationRow, {
			key: r.audit.id,
			audit: r.audit,
			skipReason: r.result.reason
		})))));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/category-icons.ts
	var CATEGORY_ICONS = {
		"best-practices": _elementor_icons.Settings2Icon,
		seo: _elementor_icons.FilterIcon,
		accessibility: _elementor_icons.ElementorAccessibilityIcon,
		performance: _elementor_icons.ShieldHalfFilledIcon,
		compliance: _elementor_icons.HeartHandShakeIcon
	};

//#endregion
//#region packages/packages/core/editor-audits/src/components/pages/category-page.tsx
	function CategoryPage({ category, report, onBack }) {
		const Icon = CATEGORY_ICONS[category];
		const { failed, passed, totalViolations } = partitionAuditResults(report, { category });
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(SubpageHeader, {
			title: CATEGORY_LABELS[category],
			onBack,
			backLabel: (0, _wordpress_i18n.__)("Back to all issues", "elementor"),
			icon: /* @__PURE__ */ react.createElement(Icon, {
				fontSize: "small",
				color: "action"
			})
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { p: 1 } }, /* @__PURE__ */ react.createElement(StatusSection, {
			label: (0, _wordpress_i18n.__)("Failed audits", "elementor"),
			count: totalViolations,
			color: "error",
			defaultExpanded: true
		}, failed.map((r) => /* @__PURE__ */ react.createElement(ViolationRow, {
			key: r.audit.id,
			audit: r.audit,
			violations: r.result.violations
		}))), /* @__PURE__ */ react.createElement(StatusSection, {
			label: (0, _wordpress_i18n.__)("Passed audits", "elementor"),
			count: passed.length,
			color: "success"
		}, passed.map((r) => /* @__PURE__ */ react.createElement(ViolationRow, {
			key: r.audit.id,
			audit: r.audit
		})))));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/utils/severity-counts.ts
	var ALL_SEVERITIES = [
		"error",
		"warning",
		"info"
	];
	function countSeverities(report, category) {
		const counts = {
			error: 0,
			warning: 0,
			info: 0
		};
		for (const { audit, result } of report.auditResults) {
			if (result.status !== "fail") continue;
			if (category && !audit.categories.includes(category)) continue;
			counts[audit.severity] += result.violations.length;
		}
		return counts;
	}
	function severityPluralLabel(severity) {
		switch (severity) {
			case "error": return (0, _wordpress_i18n.__)("Errors", "elementor");
			case "warning": return (0, _wordpress_i18n.__)("Warnings", "elementor");
			case "info": return (0, _wordpress_i18n.__)("Info", "elementor");
		}
	}
	function severityRemainingCountLabel(severity, count) {
		switch (severity) {
			case "error": return (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("%d errors", "elementor"), count);
			case "warning": return (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("%d warnings", "elementor"), count);
			case "info": return (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("%d info", "elementor"), count);
		}
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/issues-category-row.tsx
	function IssuesCategoryRow({ category, label, counts, onClick }) {
		const isRtl = "rtl" === (0, _elementor_ui.useTheme)().direction;
		const Icon = CATEGORY_ICONS[category];
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			role: "button",
			tabIndex: 0,
			onClick,
			onKeyDown: onKeyboardClick(onClick),
			sx: {
				display: "flex",
				alignItems: "center",
				gap: 1,
				px: 2,
				py: 1.5,
				cursor: "pointer",
				borderRadius: 1,
				border: 1,
				borderColor: "divider",
				"&:hover": { bgcolor: "action.hover" },
				outline: "none",
				"&:focus-visible": {
					outline: "2px solid",
					outlineColor: "primary.main"
				}
			}
		}, /* @__PURE__ */ react.createElement(Icon, {
			fontSize: "small",
			color: "action"
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			fontWeight: "bold",
			sx: { flex: 1 }
		}, label), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			alignItems: "center",
			gap: .5
		} }, ALL_SEVERITIES.filter((s) => counts[s] > 0).map((severity) => /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			key: severity,
			sx: {
				display: "flex",
				alignItems: "center",
				gap: .25
			}
		}, /* @__PURE__ */ react.createElement(SeverityIcon, { severity }), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			color: "text.primary",
			fontWeight: "bold"
		}, counts[severity])))), /* @__PURE__ */ react.createElement(_elementor_ui.Rotate, { in: isRtl }, /* @__PURE__ */ react.createElement(_elementor_icons.ChevronRightIcon, {
			fontSize: "small",
			color: "action"
		})));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/register-promotions.ts
	function firstFailExternalUrl(run) {
		return run.result.status === "fail" ? run.result.violations[0]?.externalUrl : void 0;
	}
	var PROMOTIONS = [
		{
			auditId: "audits/images-alt-text",
			icon: _elementor_icons.PhotoIcon,
			ctaLabel: (0, _wordpress_i18n.__)("Fix with Ally", "elementor"),
			formatSubtitle: (run) => {
				if (run.result.status !== "fail") return null;
				const count = run.result.metadata?.missingAltImageCount ?? 0;
				if (count === 0) return null;
				return (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n._n)("%d image", "%d images", count, "elementor"), count);
			},
			getCtaUrl: firstFailExternalUrl
		},
		{
			auditId: "audits/cookie-policy",
			icon: _elementor_icons.ElementorCookieIcon,
			ctaLabel: (0, _wordpress_i18n.__)("Fix with Cookiez", "elementor"),
			formatSubtitle: (run) => run.result.status === "fail" ? (0, _wordpress_i18n.__)("Generate cookie policy", "elementor") : null,
			getCtaUrl: firstFailExternalUrl
		},
		{
			auditId: "audits/images-too-large",
			icon: _elementor_icons.ShieldHalfFilledIcon,
			ctaLabel: (0, _wordpress_i18n.__)("Optimize all", "elementor"),
			formatSubtitle: (run) => {
				if (run.result.status !== "fail") return null;
				const count = run.result.metadata?.oversizedImageCount ?? 0;
				if (count === 0) return null;
				return (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n._n)("%d image", "%d images", count, "elementor"), count);
			},
			getCtaUrl: firstFailExternalUrl
		}
	];

//#endregion
//#region packages/packages/core/editor-audits/src/utils/find-audit-run.ts
	function findAuditRun(report, auditId) {
		return report.auditResults.find((run) => run.audit.id === auditId);
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/promotion-card.tsx
	function PromotionCard({ ctaDisabled, ctaLabel, icon: Icon, onCtaClick, subtitle, title }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			alignItems: "center",
			border: 1,
			borderColor: "divider",
			borderRadius: 1,
			display: "flex",
			gap: 1,
			px: 2,
			py: 1.5
		} }, /* @__PURE__ */ react.createElement(Icon, {
			fontSize: "small",
			color: "action"
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			flex: 1,
			flexDirection: "column",
			gap: .25,
			minWidth: 0
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			fontWeight: "bold"
		}, title), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			color: "text.secondary"
		}, subtitle)), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "outlined",
			color: "secondary",
			size: "small",
			disabled: ctaDisabled,
			onClick: onCtaClick
		}, ctaLabel));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/promotions.tsx
	function Promotions({ report }) {
		const cards = PROMOTIONS.flatMap((config) => {
			const run = findAuditRun(report, config.auditId);
			if (!run || run.result.status !== "fail") return [];
			const subtitle = config.formatSubtitle(run);
			if (!subtitle) return [];
			return [{
				config,
				ctaUrl: config.getCtaUrl(run),
				key: config.auditId,
				run,
				subtitle
			}];
		});
		if (cards.length === 0) return null;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "subtitle1",
			fontWeight: "bold"
		}, (0, _wordpress_i18n.__)("Quick wins", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			flexDirection: "column",
			gap: 1
		} }, cards.map(({ config, ctaUrl, key, run, subtitle }) => /* @__PURE__ */ react.createElement(PromotionCard, {
			key,
			icon: config.icon,
			title: run.audit.title,
			subtitle,
			ctaLabel: config.ctaLabel,
			ctaDisabled: !ctaUrl,
			onCtaClick: () => {
				if (ctaUrl) window.open(ctaUrl, "_blank");
			}
		}))));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/pages/issues-page.tsx
	function IssuesPage({ report, onCategoryClick, onAllAuditsClick }) {
		const populatedCategories = getPopulatedCategories(report.categories, ALL_CATEGORIES);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			flexDirection: "column",
			gap: 4,
			p: 2
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Link, {
			component: "button",
			underline: "none",
			color: "inherit",
			onClick: onAllAuditsClick,
			sx: { textAlign: "start" }
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "subtitle1",
			component: "h2"
		}, (0, _wordpress_i18n.__)("All issues", "elementor"))), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			flexDirection: "column",
			gap: 1
		} }, populatedCategories.map((category) => /* @__PURE__ */ react.createElement(IssuesCategoryRow, {
			key: category,
			category,
			label: CATEGORY_LABELS[category],
			counts: countSeverities(report, category),
			onClick: () => onCategoryClick(category)
		}))), /* @__PURE__ */ react.createElement(Promotions, { report }));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/utils/score-thresholds.ts
	var GOOD_THRESHOLD = 90;
	var OK_THRESHOLD = 50;
	function getScoreTier(score) {
		if (score >= 90) return {
			color: "success",
			label: (0, _wordpress_i18n.__)("Good", "elementor")
		};
		if (score >= 50) return {
			color: "warning",
			label: (0, _wordpress_i18n.__)("Needs work", "elementor")
		};
		return {
			color: "error",
			label: (0, _wordpress_i18n.__)("At risk", "elementor")
		};
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/count-summary-circle.tsx
	var COUNT_SUMMARY_CIRCLE_SIZE = 64;
	var COUNT_SUMMARY_BORDER_WIDTH = 4;
	function chipBorderColor(theme, color) {
		if (color === "default" || !color) return theme.palette.text.secondary;
		return theme.palette[color].main;
	}
	function CountSummaryCircle({ ariaLabel, color, count, label, onClick }) {
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			"aria-label": ariaLabel,
			component: "button",
			onClick,
			type: "button",
			sx: {
				alignItems: "center",
				background: "none",
				border: "none",
				cursor: "pointer",
				display: "flex",
				flex: 1,
				flexDirection: "column",
				gap: .5,
				padding: 0
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			color,
			label: count,
			size: "small",
			variant: "standard",
			sx: (theme) => ({
				border: `${COUNT_SUMMARY_BORDER_WIDTH}px solid ${chipBorderColor(theme, color)}`,
				borderRadius: "50%",
				height: COUNT_SUMMARY_CIRCLE_SIZE,
				maxWidth: COUNT_SUMMARY_CIRCLE_SIZE,
				width: COUNT_SUMMARY_CIRCLE_SIZE,
				"& .MuiChip-label": {
					fontSize: theme.typography.body2.fontSize,
					fontWeight: 700,
					lineHeight: 1,
					padding: 0
				}
			})
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			color: "text.secondary",
			sx: { textAlign: "center" },
			variant: "caption"
		}, label));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/score-bar.tsx
	function ScoreBar({ label, score, onClick }) {
		const isRtl = "rtl" === (0, _elementor_ui.useTheme)().direction;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			role: onClick ? "button" : void 0,
			tabIndex: onClick ? 0 : void 0,
			onClick,
			onKeyDown: onClick ? onKeyboardClick(onClick) : void 0,
			sx: {
				display: "flex",
				alignItems: "center",
				gap: 1,
				cursor: onClick ? "pointer" : "default",
				outline: "none",
				"&:focus-visible": {
					outline: "2px solid",
					outlineColor: "primary.main",
					borderRadius: 1
				},
				py: .5
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			sx: { minWidth: 96 }
		}, label), /* @__PURE__ */ react.createElement(_elementor_ui.LinearProgress, {
			variant: "determinate",
			value: score,
			color: getScoreTier(score).color,
			sx: {
				flex: 1,
				height: 6,
				borderRadius: 4,
				bgcolor: "action.disabledBackground"
			}
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.primary",
			sx: {
				minWidth: 24,
				textAlign: "right",
				fontWeight: 900
			}
		}, score), onClick && /* @__PURE__ */ react.createElement(_elementor_ui.Rotate, { in: isRtl }, /* @__PURE__ */ react.createElement(_elementor_icons.ChevronRightIcon, {
			fontSize: "small",
			color: "action"
		})));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/score-circle.tsx
	var SCORE_CIRCLE_SIZE = 88;
	var SCORE_CIRCLE_THICKNESS = 3;
	function ScoreCircle({ color, score }) {
		const progressColor = color ?? getScoreTier(score).color;
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			role: "progressbar",
			"aria-valuenow": score,
			"aria-valuemin": 0,
			"aria-valuemax": 100,
			sx: {
				position: "relative",
				display: "inline-flex"
			}
		}, /* @__PURE__ */ react.createElement(_elementor_ui.CircularProgress, {
			variant: "determinate",
			value: 100,
			size: SCORE_CIRCLE_SIZE,
			thickness: SCORE_CIRCLE_THICKNESS,
			sx: { color: "action.disabledBackground" }
		}), /* @__PURE__ */ react.createElement(_elementor_ui.CircularProgress, {
			variant: "determinate",
			value: score,
			size: SCORE_CIRCLE_SIZE,
			thickness: SCORE_CIRCLE_THICKNESS,
			color: progressColor,
			sx: {
				position: "absolute",
				left: 0
			}
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			position: "absolute",
			inset: 0,
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "h4",
			component: "span",
			color: "text.primary",
			sx: {
				fontWeight: 700,
				lineHeight: 1
			}
		}, score)));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/pages/overview-page.tsx
	var STATUS_ARIA_LABELS = {
		pass: (count) => (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("%d passed audits, view all", "elementor"), count),
		fail: (count) => (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("%d failed audits, view all", "elementor"), count),
		skipped: (count) => (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("%d skipped audits, view all", "elementor"), count)
	};
	var STATUS_GROUPS = [
		"fail",
		"pass",
		"skipped"
	];
	function OverviewPage({ onCategoryClick, onStatusClick, report }) {
		const populatedCategories = getPopulatedCategories(report.categories, ALL_CATEGORIES);
		const severityCounts = countSeverities(report);
		const statusCounts = auditStatusDisplayCounts(report);
		const overallScore = getScoreTier(report.overall);
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			flexDirection: "column",
			gap: 4,
			p: 2
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			alignItems: "center",
			gap: 2
		} }, /* @__PURE__ */ react.createElement(ScoreCircle, {
			color: overallScore.color,
			score: report.overall
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			flexDirection: "column",
			gap: .5
		} }, /* @__PURE__ */ react.createElement(_elementor_ui.Chip, {
			label: overallScore.label,
			color: overallScore.color,
			variant: "standard",
			size: "small",
			sx: {
				fontWeight: 600,
				alignSelf: "flex-start"
			}
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.secondary"
		}, (0, _wordpress_i18n.__)("Overall score", "elementor")))), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			flexDirection: "column",
			gap: 2
		} }, populatedCategories.map((category) => /* @__PURE__ */ react.createElement(ScoreBar, {
			key: category,
			label: CATEGORY_LABELS[category],
			score: report.categories[category].score,
			onClick: () => onCategoryClick(category)
		}))), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "subtitle1",
			fontWeight: "bold"
		}, (0, _wordpress_i18n.__)("Audit statuses", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			justifyContent: "space-around",
			gap: 2
		} }, STATUS_GROUPS.map((status) => /* @__PURE__ */ react.createElement(CountSummaryCircle, {
			key: status,
			ariaLabel: STATUS_ARIA_LABELS[status](statusCounts[status]),
			color: auditStatusColor(status),
			count: statusCounts[status],
			label: auditStatusLabel(status),
			onClick: () => onStatusClick(status)
		}))), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "subtitle1",
			fontWeight: "bold"
		}, (0, _wordpress_i18n.__)("Remaining issues", "elementor")), /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
			component: "ul",
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 1,
				listStyle: "none",
				m: 0,
				p: 0
			}
		}, ALL_SEVERITIES.map((severity) => {
			const count = severityCounts[severity];
			return /* @__PURE__ */ react.createElement(_elementor_ui.Box, {
				"aria-label": severityRemainingCountLabel(severity, count),
				component: "li",
				key: severity,
				sx: {
					alignItems: "center",
					display: "flex",
					gap: .5
				}
			}, /* @__PURE__ */ react.createElement(SeverityIcon, { severity }), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
				variant: "body2",
				fontWeight: "bold"
			}, count), /* @__PURE__ */ react.createElement(_elementor_ui.Typography, { variant: "body2" }, severityPluralLabel(severity)));
		})));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/report-shell.tsx
	function activeTab(page) {
		if (page === "overview") return "overview";
		if (page === "issues") return "issues";
		return page.backTo;
	}
	function isAllAuditsPage(page) {
		return typeof page === "object" && "page" in page && page.page === "all-audits";
	}
	function isCategoryPage(page) {
		return typeof page === "object" && "category" in page;
	}
	function ReportShell({ report }) {
		const [activePage, setActivePage] = (0, react.useState)("overview");
		const currentTab = activeTab(activePage);
		const handleTabChange = (_, value) => {
			setActivePage(value);
		};
		const openCategory = (category, backTo) => {
			setActivePage({
				category,
				backTo
			});
		};
		const openAllAudits = (expand, backTo = "issues") => {
			setActivePage({
				page: "all-audits",
				expand,
				backTo
			});
		};
		const backFromSubPage = () => {
			if (isAllAuditsPage(activePage) || isCategoryPage(activePage)) setActivePage(activePage.backTo);
		};
		return /* @__PURE__ */ react.createElement(_elementor_ui.Box, null, /* @__PURE__ */ react.createElement(_elementor_ui.Tabs, {
			"aria-label": (0, _wordpress_i18n.__)("Audit navigation", "elementor"),
			value: currentTab,
			onChange: handleTabChange,
			textColor: "secondary",
			indicatorColor: "secondary",
			size: "small",
			centered: true,
			variant: "fullWidth"
		}, /* @__PURE__ */ react.createElement(_elementor_ui.Tab, {
			value: "overview",
			label: (0, _wordpress_i18n.__)("Overview", "elementor")
		}), /* @__PURE__ */ react.createElement(_elementor_ui.Tab, {
			value: "issues",
			label: (0, _wordpress_i18n.__)("Issues", "elementor")
		})), /* @__PURE__ */ react.createElement(_elementor_ui.Divider, null), activePage === "overview" && /* @__PURE__ */ react.createElement(OverviewPage, {
			report,
			onCategoryClick: (category) => openCategory(category, "overview"),
			onStatusClick: (status) => openAllAudits(status, "overview")
		}), activePage === "issues" && /* @__PURE__ */ react.createElement(IssuesPage, {
			report,
			onCategoryClick: (category) => openCategory(category, "issues"),
			onAllAuditsClick: () => openAllAudits()
		}), isAllAuditsPage(activePage) && /* @__PURE__ */ react.createElement(AllAuditsPage, {
			report,
			initialExpandedStatus: activePage.expand,
			onBack: backFromSubPage
		}), isCategoryPage(activePage) && /* @__PURE__ */ react.createElement(CategoryPage, {
			category: activePage.category,
			report,
			onBack: backFromSubPage
		}));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/components/audit-panel.tsx
	function AuditPanel() {
		const { status, report, error, run } = useAuditReport();
		const currentDocumentId = (0, _elementor_editor_elements.getCurrentDocumentId)() ?? 0;
		const onRun = () => run(currentDocumentId);
		const lastScanLabel = report ? new Date(report.runAt).toLocaleTimeString() : null;
		return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(_elementor_editor_floating_panels.FloatingPanelHeader, {
			panelId: "audit-panel",
			title: (0, _wordpress_i18n.__)("Page Audit", "elementor"),
			badge: (0, _wordpress_i18n.__)("Beta", "elementor"),
			titleVariant: "subtitle2"
		}), /* @__PURE__ */ react.createElement(_elementor_editor_floating_panels.FloatingPanelBody, null, status === "idle" && /* @__PURE__ */ react.createElement(WelcomePage, null), status === "loading" && /* @__PURE__ */ react.createElement(LoadingPage, null), status === "error" && /* @__PURE__ */ react.createElement(ErrorPage, {
			message: error ?? "",
			onRetry: onRun
		}), status === "ready" && report && /* @__PURE__ */ react.createElement(ReportShell, { report })), /* @__PURE__ */ react.createElement(_elementor_editor_floating_panels.FloatingPanelFooter, null, lastScanLabel ? /* @__PURE__ */ react.createElement(_elementor_ui.Typography, {
			variant: "caption",
			sx: { flex: 1 }
		}, (0, _wordpress_i18n.__)("Last scan:", "elementor"), " ", lastScanLabel) : /* @__PURE__ */ react.createElement(_elementor_ui.Box, { sx: { flex: 1 } }), lastScanLabel && /* @__PURE__ */ react.createElement(AuditFeedback, null), /* @__PURE__ */ react.createElement(_elementor_ui.Button, {
			variant: "contained",
			size: "small",
			onClick: onRun,
			disabled: status === "loading" || currentDocumentId === 0
		}, lastScanLabel ? (0, _wordpress_i18n.__)("Re-scan", "elementor") : (0, _wordpress_i18n.__)("Run page audit", "elementor"))));
	}

//#endregion
//#region packages/packages/core/editor-audits/src/editor-panel.tsx
	var auditPanel = (0, _elementor_editor_floating_panels.createFloatingPanel)({
		id: AUDIT_PANEL_ID,
		title: "Audit",
		icon: () => null,
		component: AuditPanel,
		isDraggable: true,
		isResizable: true,
		defaults: {
			width: 360,
			height: 600,
			minWidth: 280,
			minHeight: 400
		}
	});

//#endregion
//#region packages/packages/core/editor-audits/src/hooks/use-audit-toggle-props.ts
	function useAuditToggleProps() {
		const { isOpen } = auditPanel.useFloatingPanelStatus();
		const { toggle } = auditPanel.useFloatingPanelActions();
		return {
			title: (0, _wordpress_i18n.__)("Audit Page", "elementor"),
			icon: _elementor_icons.ShieldCheckIcon,
			selected: isOpen,
			onClick: () => toggle()
		};
	}

//#endregion
//#region packages/packages/core/editor-audits/src/editor-app-bar.tsx
	var AUDIT_TOGGLE_PRIORITY = 24;
	function registerAppBarAuditsToggle() {
		_elementor_editor_app_bar.utilitiesMenu.registerToggleAction({
			id: "toggle-audit-panel",
			priority: AUDIT_TOGGLE_PRIORITY,
			useProps: useAuditToggleProps
		});
	}

//#endregion
//#region packages/packages/core/editor-audits/src/audits/accessibility-policy.ts
	var audit$19 = {
		id: "audits/accessibility-policy",
		title: (0, _wordpress_i18n.__)("Accessibility policy", "elementor"),
		description: (0, _wordpress_i18n.__)("An accessibility policy demonstrates your commitment to digital inclusion and may be legally required in some regions.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Install the Ally plugin to add an accessibility policy to your website.", "elementor"),
		categories: ["compliance"],
		severity: "info",
		weight: 1,
		evaluate: (ctx) => {
			if (ctx.pageContext.ally_plugin_active) return { status: "pass" };
			return {
				status: "fail",
				violations: [{
					auditId: audit$19.id,
					label: (0, _wordpress_i18n.__)("Ally plugin is not installed or active.", "elementor"),
					externalUrl: ctx.pageContext.ally_plugin_url
				}]
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/audits/cookie-policy.ts
	var audit$18 = {
		id: "audits/cookie-policy",
		title: (0, _wordpress_i18n.__)("Cookie policy", "elementor"),
		description: (0, _wordpress_i18n.__)("A cookie policy is required by privacy regulations such as GDPR (EU) or CCPA (US) to inform visitors about tracking and data collection.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Install the Cookiez plugin to add a cookie policy to your website.", "elementor"),
		categories: ["compliance"],
		severity: "info",
		weight: 1,
		evaluate: (ctx) => {
			if (ctx.pageContext.cookiez_plugin_active) return { status: "pass" };
			return {
				status: "fail",
				violations: [{
					auditId: audit$18.id,
					label: (0, _wordpress_i18n.__)("Cookiez plugin is not installed or active.", "elementor"),
					externalUrl: ctx.pageContext.cookiez_plugin_url
				}]
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/audits/deep-nesting.ts
	var MAX_NESTING_DEPTH = 6;
	var audit$17 = {
		id: "audits/deep-nesting",
		title: (0, _wordpress_i18n.__)("Deep container nesting", "elementor"),
		description: (0, _wordpress_i18n.__)("Container nesting exceeds the recommended depth. Deep DOM trees hurt rendering performance and readability.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Flatten the layout by removing unnecessary wrapper containers.", "elementor"),
		categories: ["performance", "best-practices"],
		severity: "warning",
		weight: 5,
		evaluate: (ctx) => {
			if (ctx.elements.tree.length === 0) return {
				status: "skipped",
				reason: (0, _wordpress_i18n.__)("No elements", "elementor")
			};
			const violations = [];
			walkElements(ctx.elements.tree, (node, parents) => {
				if (node.elType !== "container") return;
				if (parents.length + 1 > MAX_NESTING_DEPTH) violations.push({
					auditId: audit$17.id,
					elementId: node.id,
					targetHint: "element-settings",
					label: (0, _wordpress_i18n.__)("Container nesting is too deep.", "elementor")
				});
			});
			return violations.length === 0 ? { status: "pass" } : {
				status: "fail",
				violations
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/audits/default-design-system.ts
	var audit$16 = {
		id: "audits/default-design-system",
		title: (0, _wordpress_i18n.__)("Default website kit", "elementor"),
		description: (0, _wordpress_i18n.__)("Your website is using the default design system colors and fonts. Custom branding makes the website feel uniquely yours.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Open Site Settings and customize your kit (colors, fonts, layout).", "elementor"),
		categories: ["best-practices"],
		severity: "info",
		weight: 1,
		evaluate: (ctx) => {
			if (!ctx.pageContext.kit_is_default_unchanged) return { status: "pass" };
			return {
				status: "fail",
				violations: [{
					auditId: audit$16.id,
					label: (0, _wordpress_i18n.__)("Kit appears unchanged from default.", "elementor"),
					targetHint: "site-settings"
				}]
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/audits/deprecated-widgets.ts
	var DEPRECATION_CONTROL_NAME = "deprecation_message";
	var audit$15 = {
		id: "audits/deprecated-widgets",
		title: (0, _wordpress_i18n.__)("Deprecated widgets", "elementor"),
		description: (0, _wordpress_i18n.__)("Deprecated widgets should not be used. For better capabilities use the recommended replacement.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Replace each deprecated widget with the recommended new widget shown in its panel.", "elementor"),
		categories: ["best-practices", "performance"],
		severity: "warning",
		weight: 7,
		evaluate: (ctx) => {
			const widgetsCache = (0, _elementor_editor_elements.getWidgetsCache)();
			if (!widgetsCache) return {
				status: "skipped",
				reason: "widgets-cache-unavailable"
			};
			const violations = [];
			walkElements(ctx.elements.tree, (node) => {
				if (node.elType !== "widget") return;
				const config = widgetsCache[node.widgetType ?? ""];
				if (!config?.controls) return;
				const deprecationControl = config.controls[DEPRECATION_CONTROL_NAME];
				if (!deprecationControl || typeof deprecationControl !== "object") return;
				violations.push({
					auditId: audit$15.id,
					elementId: node.id,
					targetHint: "element-settings",
					label: (0, _wordpress_i18n.__)("Using deprecated widget.", "elementor")
				});
			});
			return violations.length === 0 ? { status: "pass" } : {
				status: "fail",
				violations
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/audits/heading-structure.ts
	var HEADING_LEVELS = [
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6"
	];
	var HEADING_CONTROLS_REGISTRY = {
		heading: [{
			control: "header_size",
			requiresNonEmpty: "title"
		}],
		"e-heading": [{
			control: "tag",
			requiresNonEmpty: "title"
		}],
		"icon-box": [{
			control: "title_size",
			requiresNonEmpty: "title_text"
		}],
		"image-box": [{
			control: "title_size",
			requiresNonEmpty: "title_text"
		}],
		counter: [{
			control: "title_tag",
			requiresNonEmpty: "title"
		}],
		progress: [{
			control: "title_tag",
			when: { title_display: "yes" },
			requiresNonEmpty: "title"
		}],
		accordion: [{
			control: "title_html_tag",
			repeat: {
				items: "tabs",
				textField: "tab_title"
			}
		}],
		toggle: [{
			control: "title_html_tag",
			repeat: {
				items: "tabs",
				textField: "tab_title"
			}
		}],
		divider: [{
			control: "html_tag",
			when: { look: "line_text" },
			requiresNonEmpty: "text"
		}],
		"nested-accordion": [{
			control: "title_tag",
			repeat: {
				items: "items",
				textField: "item_title"
			}
		}],
		"link-in-bio": [
			{
				control: "bio_heading_tag",
				requiresNonEmpty: "bio_heading"
			},
			{
				control: "bio_title_tag",
				requiresNonEmpty: "bio_title"
			},
			{
				control: "bio_about_tag",
				requiresNonEmpty: "bio_about"
			}
		],
		"animated-headline": [{
			control: "tag",
			requiresAnyNonEmpty: [
				"before_text",
				"highlighted_text",
				"rotating_text",
				"after_text"
			]
		}],
		"author-box": [{
			control: "author_name_tag",
			requiresNonEmpty: "author_name"
		}],
		"call-to-action": [{
			control: "title_tag",
			requiresNonEmpty: "title"
		}, {
			control: "description_tag",
			requiresNonEmpty: "description"
		}],
		"flip-box": [
			{
				control: "title_tag",
				requiresNonEmpty: "title_text_a"
			},
			{
				control: "description_tag",
				requiresNonEmpty: "description_text_a"
			},
			{
				control: "title_tag",
				requiresNonEmpty: "title_text_b"
			},
			{
				control: "description_tag",
				requiresNonEmpty: "description_text_b"
			}
		],
		"price-list": [{
			control: "title_tag",
			repeat: {
				items: "price_list",
				textField: "title"
			}
		}, {
			control: "description_tag",
			repeat: {
				items: "price_list",
				textField: "item_description"
			}
		}],
		"price-table": [{
			control: "heading_tag",
			requiresNonEmpty: "heading"
		}],
		slides: [{
			control: "slides_title_tag",
			repeat: {
				items: "slides",
				textField: "heading"
			}
		}, {
			control: "slides_description_tag",
			repeat: {
				items: "slides",
				textField: "description"
			}
		}],
		"table-of-contents": [{
			control: "html_tag",
			requiresNonEmpty: "title"
		}],
		"video-playlist": [
			{
				control: "playlist_title_tag",
				requiresNonEmpty: "playlist_title"
			},
			{
				control: "section_html_tag",
				repeat: {
					items: "tabs",
					tagSource: "item",
					itemWhen: { type: "section" },
					textField: "title"
				}
			},
			{
				control: "video_html_tag",
				repeat: {
					items: "tabs",
					tagSource: "item",
					itemWhen: { type: [
						"youtube",
						"vimeo",
						"hosted"
					] },
					textField: "title"
				}
			}
		],
		sitemap: [{
			control: "sitemap_title_tag",
			repeat: {
				items: "sitemap_items",
				textField: "sitemap_title"
			}
		}],
		"loop-grid": [{
			control: "nothing_found_message_html_tag",
			when: { enable_nothing_found_message: "yes" },
			requiresNonEmpty: "nothing_found_message_text"
		}],
		search: [{
			control: "nothing_found_message_html_tag",
			when: { enable_nothing_found_message: "yes" },
			requiresNonEmpty: "nothing_found_message_text"
		}],
		posts: [{
			control: "title_tag",
			when: { show_title: "yes" }
		}],
		"archive-posts": [{
			control: "title_tag",
			when: { show_title: "yes" }
		}],
		portfolio: [{
			control: "title_tag",
			when: { show_title: "yes" }
		}],
		"theme-post-title": [{ control: "header_size" }],
		"theme-page-title": [{ control: "header_size" }],
		"theme-archive-title": [{ control: "header_size" }],
		"theme-site-title": [{ control: "header_size" }],
		"woocommerce-product-title": [{ control: "header_size" }]
	};
	function isNonEmptyString(value) {
		return typeof value === "string" && value.trim() !== "";
	}
	function matchesWhen(settings, when) {
		if (!when) return true;
		return Object.entries(when).every(([key, expected]) => {
			const actual = settings[key];
			if (Array.isArray(expected)) return expected.includes(String(actual));
			return String(actual) === expected;
		});
	}
	function hasRequiredText(settings, key) {
		if (!key) return true;
		return isNonEmptyString(settings[key]);
	}
	function hasAnyRequiredText(settings, keys) {
		if (!keys?.length) return true;
		return keys.some((key) => isNonEmptyString(settings[key]));
	}
	function parseHeadingLevel(raw) {
		if (typeof raw !== "string") return null;
		const idx = HEADING_LEVELS.indexOf(raw.toLowerCase());
		return idx >= 0 ? idx + 1 : null;
	}
	function getRepeaterRows(settings, key) {
		const rows = settings[key];
		return Array.isArray(rows) ? rows : [];
	}
	function pushHeading(headings, elementId, raw) {
		const level = parseHeadingLevel(raw);
		if (level !== null) headings.push({
			elementId,
			level
		});
	}
	function extractHeadingsFromWidget(elementId, widgetType, settings) {
		const descriptors = HEADING_CONTROLS_REGISTRY[widgetType];
		if (!descriptors) return [];
		const headings = [];
		for (const descriptor of descriptors) {
			if (!matchesWhen(settings, descriptor.when)) continue;
			if (!hasRequiredText(settings, descriptor.requiresNonEmpty)) continue;
			if (!hasAnyRequiredText(settings, descriptor.requiresAnyNonEmpty)) continue;
			if (descriptor.repeat) {
				const { items, textField, itemWhen, tagSource = "widget" } = descriptor.repeat;
				for (const row of getRepeaterRows(settings, items)) {
					if (!matchesWhen(row, itemWhen)) continue;
					if (textField && !hasRequiredText(row, textField)) continue;
					pushHeading(headings, elementId, tagSource === "item" ? row[descriptor.control] : settings[descriptor.control]);
				}
			} else pushHeading(headings, elementId, settings[descriptor.control]);
		}
		return headings;
	}
	function extractPageHeadings(tree) {
		const headings = [];
		walkElements(tree, (node) => {
			if (node.elType !== "widget" || !node.widgetType) return;
			headings.push(...extractHeadingsFromWidget(node.id, node.widgetType, node.settings));
		});
		return headings;
	}
	var audit$14 = {
		id: "audits/heading-structure",
		title: (0, _wordpress_i18n.__)("Heading structure", "elementor"),
		description: (0, _wordpress_i18n.__)("Pages should have exactly one H1 and a non-skipping heading order.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Ensure your page has one H1 and that heading levels do not skip (no H2 → H4).", "elementor"),
		categories: ["seo", "accessibility"],
		severity: "error",
		weight: 10,
		evaluate: (ctx) => {
			if (ctx.elements.tree.length === 0) return {
				status: "skipped",
				reason: (0, _wordpress_i18n.__)("No elements", "elementor")
			};
			const headings = extractPageHeadings(ctx.elements.tree);
			const violations = [];
			if (headings.length === 0) violations.push({
				auditId: audit$14.id,
				label: (0, _wordpress_i18n.__)("No headings found on the page.", "elementor")
			});
			else {
				const h1Count = headings.filter((h) => h.level === 1).length;
				if (h1Count === 0) violations.push({
					auditId: audit$14.id,
					label: (0, _wordpress_i18n.__)("No H1 on the page.", "elementor")
				});
				if (h1Count > 1) headings.filter((h) => h.level === 1).slice(1).forEach((h) => violations.push({
					auditId: audit$14.id,
					elementId: h.elementId,
					targetHint: "element-settings",
					label: (0, _wordpress_i18n.__)("More than one H1 on the page.", "elementor")
				}));
				for (let i = 1; i < headings.length; i++) if (headings[i].level - headings[i - 1].level > 1) violations.push({
					auditId: audit$14.id,
					elementId: headings[i].elementId,
					targetHint: "element-settings",
					label: (0, _wordpress_i18n.__)("Heading level skipped.", "elementor")
				});
			}
			return violations.length === 0 ? { status: "pass" } : {
				status: "fail",
				violations
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/audits/hidden-elements.ts
	function isHiddenOnAllDevices(settings) {
		return Boolean(settings.hide_desktop) && Boolean(settings.hide_tablet) && Boolean(settings.hide_mobile);
	}
	var audit$13 = {
		id: "audits/hidden-elements",
		title: (0, _wordpress_i18n.__)("Hidden elements", "elementor"),
		description: (0, _wordpress_i18n.__)("Elements hidden on all devices simultaneously are effectively dead code in the page tree.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Remove the element or make it visible on at least one device breakpoint.", "elementor"),
		categories: ["best-practices", "performance"],
		severity: "info",
		weight: 3,
		evaluate: (ctx) => {
			if (ctx.elements.tree.length === 0) return {
				status: "skipped",
				reason: (0, _wordpress_i18n.__)("No elements", "elementor")
			};
			const violations = [];
			walkElements(ctx.elements.tree, (node) => {
				if (isHiddenOnAllDevices(node.settings)) violations.push({
					auditId: audit$13.id,
					elementId: node.id,
					targetHint: "element-settings",
					label: (0, _wordpress_i18n.__)("Element is hidden on all devices.", "elementor")
				});
			});
			return violations.length === 0 ? { status: "pass" } : {
				status: "fail",
				violations
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/utils/image-alt.ts
	function hasMeaningfulAlt(media, pageContext) {
		if (!media.id && !media.url) return true;
		if (media.id) return (pageContext.image_sizes[media.id]?.alt ?? "").trim().length > 0;
		return (media.alt ?? "").trim().length > 0;
	}
	function isImageSourcePresent(media) {
		return Boolean(media.id || media.url);
	}

//#endregion
//#region packages/packages/core/editor-audits/src/audits/images-alt-text.ts
	var audit$12 = {
		id: "audits/images-alt-text",
		title: (0, _wordpress_i18n.__)("Images alt text", "elementor"),
		description: (0, _wordpress_i18n.__)("Every image needs a meaningful alt attribute for screen readers and image-search.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Open the image's settings and add an Alt Text describing the image.", "elementor"),
		categories: ["seo", "accessibility"],
		severity: "error",
		weight: 10,
		evaluate: (ctx) => {
			if (!hasPageImages(ctx.elements.tree)) return {
				status: "skipped",
				reason: (0, _wordpress_i18n.__)("No images", "elementor")
			};
			const violations = [];
			const failedWidgetIds = /* @__PURE__ */ new Set();
			let missingAltImageCount = 0;
			walkImageLikeSources(ctx.elements.tree, ({ node, media }) => {
				if (!isImageSourcePresent(media) || hasMeaningfulAlt(media, ctx.pageContext)) return;
				missingAltImageCount++;
				if (!failedWidgetIds.has(node.id)) {
					failedWidgetIds.add(node.id);
					violations.push({
						auditId: audit$12.id,
						elementId: node.id,
						targetHint: "element-settings",
						label: (0, _wordpress_i18n.__)("Image is missing alt text.", "elementor"),
						externalUrl: ctx.pageContext.ally_plugin_url
					});
				}
			});
			return violations.length === 0 ? { status: "pass" } : {
				status: "fail",
				violations,
				metadata: { missingAltImageCount }
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/audits/images-too-large.ts
	var SIZE_THRESHOLD_BYTES = 500 * 1024;
	var BYTES_PER_KB = 1024;
	var audit$11 = {
		id: "audits/images-too-large",
		title: (0, _wordpress_i18n.__)("Oversized images", "elementor"),
		description: (0, _wordpress_i18n.__)("Large image files slow down the page.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Replace the image with a smaller version or enable image optimization.", "elementor"),
		categories: ["performance"],
		severity: "warning",
		weight: 7,
		evaluate: (ctx) => {
			if (!hasPageImages(ctx.elements.tree)) return {
				status: "skipped",
				reason: (0, _wordpress_i18n.__)("No images", "elementor")
			};
			const widgetMaxKb = /* @__PURE__ */ new Map();
			let oversizedImageCount = 0;
			walkImageLikeSources(ctx.elements.tree, ({ node, media }) => {
				const id = media.id;
				if (!id) return;
				const size = ctx.pageContext.image_sizes[id];
				if (!size || size.filesize_bytes <= SIZE_THRESHOLD_BYTES) return;
				oversizedImageCount++;
				const kb = Math.round(size.filesize_bytes / BYTES_PER_KB);
				const currentMax = widgetMaxKb.get(node.id) ?? 0;
				widgetMaxKb.set(node.id, Math.max(currentMax, kb));
			});
			const violations = Array.from(widgetMaxKb.entries()).map(([elementId, kb]) => ({
				auditId: audit$11.id,
				elementId,
				targetHint: "element-settings",
				label: (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("Image is %d KB (over 500 KB).", "elementor"), kb),
				externalUrl: ctx.pageContext.image_optimization_plugin_url
			}));
			return violations.length === 0 ? { status: "pass" } : {
				status: "fail",
				violations,
				metadata: { oversizedImageCount }
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/audits/nested-boxed-containers.ts
	function isBoxed(settings) {
		return settings.content_width === "boxed";
	}
	var audit$10 = {
		id: "audits/nested-boxed-containers",
		title: (0, _wordpress_i18n.__)("Boxed container nested inside a boxed parent", "elementor"),
		description: (0, _wordpress_i18n.__)("An inner container does not need to be boxed when its parent already is.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Change the inner container's content width to Full Width.", "elementor"),
		categories: ["best-practices", "performance"],
		severity: "info",
		weight: 5,
		evaluate: (ctx) => {
			if (ctx.elements.tree.length === 0) return {
				status: "skipped",
				reason: (0, _wordpress_i18n.__)("No elements", "elementor")
			};
			const violations = [];
			walkElements(ctx.elements.tree, (node, parents) => {
				if (node.elType !== "container" || !isBoxed(node.settings)) return;
				const nearestContainerAncestor = [...parents].reverse().find((p) => p.elType === "container");
				if (nearestContainerAncestor && isBoxed(nearestContainerAncestor.settings)) violations.push({
					auditId: audit$10.id,
					elementId: node.id,
					targetHint: "element-settings",
					label: (0, _wordpress_i18n.__)("Nested boxed container.", "elementor")
				});
			});
			return violations.length === 0 ? { status: "pass" } : {
				status: "fail",
				violations
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/audits/page-excerpt.ts
	var audit$9 = {
		id: "audits/page-excerpt",
		title: (0, _wordpress_i18n.__)("Page excerpt", "elementor"),
		description: (0, _wordpress_i18n.__)("A descriptive excerpt helps search engines and previews summarize the page.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Open Page Settings and write a short excerpt.", "elementor"),
		categories: ["seo"],
		severity: "warning",
		weight: 5,
		evaluate: (ctx) => {
			if (ctx.pageContext.post_excerpt) return { status: "pass" };
			return {
				status: "fail",
				violations: [{
					auditId: audit$9.id,
					label: (0, _wordpress_i18n.__)("Page has no excerpt.", "elementor"),
					targetHint: "page-settings",
					angieFix: true
				}]
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/audits/page-featured-image.ts
	var audit$8 = {
		id: "audits/page-featured-image",
		title: (0, _wordpress_i18n.__)("Page featured image", "elementor"),
		description: (0, _wordpress_i18n.__)("Featured images are used by social shares and many themes for hero visuals.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Open Page Settings and set a featured image.", "elementor"),
		categories: ["seo"],
		severity: "info",
		weight: 5,
		evaluate: (ctx) => {
			if (ctx.pageContext.featured_image_id) return { status: "pass" };
			return {
				status: "fail",
				violations: [{
					auditId: audit$8.id,
					label: (0, _wordpress_i18n.__)("No featured image set.", "elementor"),
					targetHint: "page-settings"
				}]
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/audits/page-title.ts
	var MAX_TITLE_LENGTH = 60;
	var audit$7 = {
		id: "audits/page-title",
		title: (0, _wordpress_i18n.__)("Page title", "elementor"),
		description: (0, _wordpress_i18n.__)("Pages need a clear title for SEO and screen-reader navigation.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Open Page Settings and add a title.", "elementor"),
		categories: ["seo"],
		severity: "error",
		weight: 10,
		evaluate: (ctx) => {
			const title = ctx.pageContext.post_title;
			if (!title) return {
				status: "fail",
				violations: [{
					auditId: audit$7.id,
					label: (0, _wordpress_i18n.__)("Page has no title.", "elementor"),
					targetHint: "page-settings",
					angieFix: true
				}]
			};
			if (title.length > MAX_TITLE_LENGTH) return {
				status: "fail",
				violations: [{
					auditId: audit$7.id,
					label: (0, _wordpress_i18n.__)("Page title is too long.", "elementor"),
					targetHint: "page-settings",
					angieFix: true
				}]
			};
			return { status: "pass" };
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/utils/collect-hardcoded-colors.ts
	var RESERVED_SETTING_KEYS$1 = /* @__PURE__ */ new Set(["__globals__", "__dynamic__"]);
	var REPEATER_ROW_ID_KEY$1 = "_id";
	var HEX_COLOR_PATTERN = /^#[0-9a-f]{3,8}$/i;
	var RGB_COLOR_PATTERN = /^rgba?\(/i;
	function isGlobalColorReference(value) {
		return value.startsWith("globals/");
	}
	function isHardcodedColorCandidate(value) {
		const trimmed = value.trim();
		return HEX_COLOR_PATTERN.test(trimmed) || RGB_COLOR_PATTERN.test(trimmed);
	}
	function formatPath$1(prefix, key) {
		return prefix ? `${prefix}.${key}` : key;
	}
	__name(formatPath$1, "formatPath");
	function formatArrayPath$1(prefix, index) {
		return `${prefix}[${index}]`;
	}
	__name(formatArrayPath$1, "formatArrayPath");
	function collectHardcodedColors(settings, pathPrefix = "") {
		const linkedGlobals = settings.__globals__ ?? {};
		const results = [];
		for (const [key, value] of Object.entries(settings)) {
			if (RESERVED_SETTING_KEYS$1.has(key) || key === REPEATER_ROW_ID_KEY$1) continue;
			if (linkedGlobals[key]) continue;
			if (typeof value === "string") {
				if (!isGlobalColorReference(value) && isHardcodedColorCandidate(value)) results.push({
					path: formatPath$1(pathPrefix, key),
					value
				});
				continue;
			}
			if (Array.isArray(value)) {
				const arrayPath = formatPath$1(pathPrefix, key);
				value.forEach((item, index) => {
					if (item && typeof item === "object" && !Array.isArray(item)) results.push(...collectHardcodedColors(item, formatArrayPath$1(arrayPath, index)));
				});
				continue;
			}
			if (value && typeof value === "object") results.push(...collectHardcodedColors(value, formatPath$1(pathPrefix, key)));
		}
		return results;
	}

//#endregion
//#region packages/packages/core/editor-audits/src/utils/match-global-by-value.ts
	function findMatchingGlobalByValue(value, globals) {
		const trimmed = value.trim();
		return globals.find((global) => global.value === trimmed) ?? null;
	}

//#endregion
//#region packages/packages/core/editor-audits/src/audits/prefer-global-colors.ts
	var audit$6 = {
		id: "audits/prefer-global-colors",
		title: (0, _wordpress_i18n.__)("Prefer global colors", "elementor"),
		description: (0, _wordpress_i18n.__)("Global colors make the design consistent and easy to update site-wide.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Replace the hard-coded value with the matching global color.", "elementor"),
		categories: ["best-practices"],
		severity: "info",
		weight: 3,
		evaluate: (ctx) => {
			if (ctx.elements.tree.length === 0) return {
				status: "skipped",
				reason: (0, _wordpress_i18n.__)("No elements", "elementor")
			};
			if (ctx.kit.globals.colors.length === 0) return {
				status: "skipped",
				reason: (0, _wordpress_i18n.__)("No global colors", "elementor")
			};
			const violations = [];
			walkElements(ctx.elements.tree, (node) => {
				for (const { value } of collectHardcodedColors(node.settings)) {
					const global = findMatchingGlobalByValue(value, ctx.kit.globals.colors);
					if (!global) continue;
					violations.push({
						auditId: audit$6.id,
						elementId: node.id,
						targetHint: "element-settings",
						angieFix: true,
						label: (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("replace \"%1$s\" with \"%2$s\" global color", "elementor"), value, global.title)
					});
				}
			});
			return violations.length === 0 ? { status: "pass" } : {
				status: "fail",
				violations
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/utils/collect-hardcoded-fonts.ts
	var RESERVED_SETTING_KEYS = /* @__PURE__ */ new Set(["__globals__", "__dynamic__"]);
	var REPEATER_ROW_ID_KEY = "_id";
	var FONT_FAMILY_KEY_PATTERN = /font_family/;
	function isGlobalFontReference(value) {
		return value.startsWith("globals/");
	}
	function isHardcodedFontCandidate(key, value) {
		return FONT_FAMILY_KEY_PATTERN.test(key) && value.trim().length > 0;
	}
	function formatPath(prefix, key) {
		return prefix ? `${prefix}.${key}` : key;
	}
	function formatArrayPath(prefix, index) {
		return `${prefix}[${index}]`;
	}
	function collectHardcodedFonts(settings, pathPrefix = "") {
		const linkedGlobals = settings.__globals__ ?? {};
		const results = [];
		for (const [key, value] of Object.entries(settings)) {
			if (RESERVED_SETTING_KEYS.has(key) || key === REPEATER_ROW_ID_KEY) continue;
			if (linkedGlobals[key]) continue;
			if (typeof value === "string") {
				if (!isGlobalFontReference(value) && isHardcodedFontCandidate(key, value)) results.push({
					path: formatPath(pathPrefix, key),
					value
				});
				continue;
			}
			if (Array.isArray(value)) {
				const arrayPath = formatPath(pathPrefix, key);
				value.forEach((item, index) => {
					if (item && typeof item === "object" && !Array.isArray(item)) results.push(...collectHardcodedFonts(item, formatArrayPath(arrayPath, index)));
				});
				continue;
			}
			if (value && typeof value === "object") results.push(...collectHardcodedFonts(value, formatPath(pathPrefix, key)));
		}
		return results;
	}

//#endregion
//#region packages/packages/core/editor-audits/src/audits/prefer-global-fonts.ts
	var audit$5 = {
		id: "audits/prefer-global-fonts",
		title: (0, _wordpress_i18n.__)("Prefer global fonts", "elementor"),
		description: (0, _wordpress_i18n.__)("Global fonts make the design consistent and easy to update site-wide.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Replace the hard-coded value with the matching global font.", "elementor"),
		categories: ["best-practices", "performance"],
		severity: "info",
		weight: 3,
		evaluate: (ctx) => {
			if (ctx.elements.tree.length === 0) return {
				status: "skipped",
				reason: (0, _wordpress_i18n.__)("No elements", "elementor")
			};
			if (ctx.kit.globals.fonts.length === 0) return {
				status: "skipped",
				reason: (0, _wordpress_i18n.__)("No global fonts", "elementor")
			};
			const violations = [];
			walkElements(ctx.elements.tree, (node) => {
				for (const { value } of collectHardcodedFonts(node.settings)) {
					const global = findMatchingGlobalByValue(value, ctx.kit.globals.fonts);
					if (!global) continue;
					violations.push({
						auditId: audit$5.id,
						elementId: node.id,
						targetHint: "element-settings",
						label: (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("replace hardcoded typography with \"%s\" global font", "elementor"), global.title)
					});
				}
			});
			return violations.length === 0 ? { status: "pass" } : {
				status: "fail",
				violations
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/audits/privacy-policy.ts
	var audit$4 = {
		id: "audits/privacy-policy",
		title: (0, _wordpress_i18n.__)("Privacy policy", "elementor"),
		description: (0, _wordpress_i18n.__)("A privacy policy page is required by privacy regulations such as GDPR (EU) and CCPA (US).", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Go to Settings > Privacy in the WordPress admin and assign a published privacy policy page.", "elementor"),
		categories: ["compliance"],
		severity: "info",
		weight: 1,
		evaluate: (ctx) => {
			if (ctx.pageContext.privacy_policy_url) return { status: "pass" };
			return {
				status: "fail",
				violations: [{
					auditId: audit$4.id,
					label: (0, _wordpress_i18n.__)("No privacy policy page is set.", "elementor"),
					externalUrl: ctx.pageContext.privacy_settings_url
				}]
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/audits/robots-noindex.ts
	var audit$3 = {
		id: "audits/robots-noindex",
		title: (0, _wordpress_i18n.__)("Search engine visibility", "elementor"),
		description: (0, _wordpress_i18n.__)("When search engine visibility is checked in WordPress Settings -> Reading -> Search Engine Visibility, search engines are discouraged from indexing the website.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Go to Settings → Reading in the WordPress admin and uncheck \"Discourage search engines from indexing this site\" when the website should be indexed.", "elementor"),
		categories: ["seo"],
		severity: "error",
		weight: 7,
		evaluate: (ctx) => {
			if (!ctx.pageContext.is_noindex) return { status: "pass" };
			return {
				status: "fail",
				violations: [{
					auditId: audit$3.id,
					label: (0, _wordpress_i18n.__)("Search engines are discouraged from indexing this website.", "elementor"),
					externalUrl: ctx.pageContext.reading_settings_url
				}]
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/audits/sections-and-columns.ts
	var audit$2 = {
		id: "audits/sections-and-columns",
		title: (0, _wordpress_i18n.__)("Sections and columns", "elementor"),
		description: (0, _wordpress_i18n.__)("Sections and columns are legacy elements. Containers render fewer DOM nodes and are more flexible.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Use the Container Converter to replace each section/column with a container.", "elementor"),
		categories: ["best-practices", "performance"],
		severity: "warning",
		weight: 7,
		evaluate: (ctx) => {
			if (ctx.elements.tree.length === 0) return {
				status: "skipped",
				reason: (0, _wordpress_i18n.__)("No elements", "elementor")
			};
			const violations = [];
			walkElements(ctx.elements.tree, (node) => {
				if (node.elType === "section" || node.elType === "column") violations.push({
					auditId: audit$2.id,
					elementId: node.id,
					label: node.elType === "section" ? (0, _wordpress_i18n.__)("Section element", "elementor") : (0, _wordpress_i18n.__)("Column element", "elementor")
				});
			});
			return violations.length === 0 ? { status: "pass" } : {
				status: "fail",
				violations
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/audits/site-identity.ts
	var audit$1 = {
		id: "audits/site-identity",
		title: (0, _wordpress_i18n.__)("Site identity", "elementor"),
		description: (0, _wordpress_i18n.__)("Site name, description, logo, and favicon establish your brand and appear in search results and browser tabs.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Open Site Settings → Site Identity and complete all the missing fields.", "elementor"),
		categories: ["best-practices", "seo"],
		severity: "info",
		weight: 7,
		evaluate: (ctx) => {
			const { site_identity: identity } = ctx.pageContext;
			const violations = [];
			if (!identity.site_name_set) violations.push({
				auditId: audit$1.id,
				label: (0, _wordpress_i18n.__)("Site name is missing or still uses the default.", "elementor"),
				targetHint: "site-identity-settings"
			});
			if (!identity.site_description_set) violations.push({
				auditId: audit$1.id,
				label: (0, _wordpress_i18n.__)("Site description is missing or still uses the default.", "elementor"),
				targetHint: "site-identity-settings",
				angieFix: true
			});
			if (!identity.site_logo_set) violations.push({
				auditId: audit$1.id,
				label: (0, _wordpress_i18n.__)("Site logo is not set.", "elementor"),
				targetHint: "site-identity-settings"
			});
			if (!identity.site_favicon_set) violations.push({
				auditId: audit$1.id,
				label: (0, _wordpress_i18n.__)("Site favicon is not set.", "elementor"),
				targetHint: "site-identity-settings"
			});
			if (violations.length === 0) return { status: "pass" };
			return {
				status: "fail",
				violations
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/audits/too-many-widgets.ts
	var WIDGET_COUNT_THRESHOLD = 100;
	var audit = {
		id: "audits/too-many-widgets",
		title: (0, _wordpress_i18n.__)("Too many widgets", "elementor"),
		description: (0, _wordpress_i18n.__)("Excessive DOM size caused by too many widgets degrades rendering performance.", "elementor"),
		fixHint: (0, _wordpress_i18n.__)("Reduce the number of widgets on the page by removing or combining elements.", "elementor"),
		categories: ["best-practices", "performance"],
		severity: "warning",
		weight: 5,
		evaluate: (ctx) => {
			if (ctx.elements.tree.length === 0) return {
				status: "skipped",
				reason: (0, _wordpress_i18n.__)("No elements", "elementor")
			};
			let widgetCount = 0;
			walkElements(ctx.elements.tree, (node) => {
				if (node.elType === "widget") widgetCount++;
			});
			if (widgetCount <= WIDGET_COUNT_THRESHOLD) return { status: "pass" };
			return {
				status: "fail",
				violations: [{
					auditId: audit.id,
					label: (0, _wordpress_i18n.__)("Page has too many widgets.", "elementor")
				}]
			};
		}
	};

//#endregion
//#region packages/packages/core/editor-audits/src/register-audits.ts
	var AUDITS = [
		audit$7,
		audit$9,
		audit$8,
		audit$13,
		audit$15,
		audit,
		audit$2,
		audit$17,
		audit$10,
		audit$16,
		audit$1,
		audit$6,
		audit$5,
		audit$14,
		audit$12,
		audit$11,
		audit$3,
		audit$4,
		audit$19,
		audit$18
	];
	function registerAllAudits() {
		for (const audit of AUDITS) registerAudit(audit);
	}

//#endregion
//#region packages/packages/core/editor-audits/src/init.ts
	function init() {
		(0, _elementor_store.__registerSlice)(slice);
		registerAllAudits();
		(0, _elementor_editor_floating_panels.registerFloatingPanel)(auditPanel.panel);
		registerAppBarAuditsToggle();
	}

//#endregion
//#region packages/packages/core/editor-audits/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		init: () => init,
		registerAudit: () => registerAudit,
		runPageAudit: () => runPageAudit
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorAudits = src_exports;

//#endregion
})(elementorV2.editorFloatingPanels, elementorV2.store, elementorV2.editorAppBar, elementorV2.icons, wp.i18n, React, elementorV2.editorElements, elementorV2.ui, elementorV2.httpClient, elementorV2.session, elementorV2.editorNotifications, elementorV2.editorV1Adapters, elementorV2.events, elementorV2.editorMcp);
window.elementorV2.editorAudits?.init?.();
//# sourceMappingURL=editor-audits.js.map