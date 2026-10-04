(function(_wordpress_i18n, _wordpress_api_fetch) {

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
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
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
_wordpress_api_fetch = __toESM(_wordpress_api_fetch);

//#region node_modules/@babel/runtime/helpers/esm/classCallCheck.js
	function _classCallCheck(a, n) {
		if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/typeof.js
	function _typeof(o) {
		"@babel/helpers - typeof";
		return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
			return typeof o;
		} : function(o) {
			return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		}, _typeof(o);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPrimitive.js
	function toPrimitive(t, r) {
		if ("object" != _typeof(t) || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != _typeof(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
	function toPropertyKey(t) {
		var i = toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/createClass.js
	function _defineProperties(e, r) {
		for (var t = 0; t < r.length; t++) {
			var o = r[t];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
		}
	}
	function _createClass(e, r, t) {
		return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/defineProperty.js
	function _defineProperty(e, r, t) {
		return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}

//#endregion
//#region core/common/modules/events-manager/assets/js/events-config.js
	var eventsConfig = {
		appTypes: {
			editor: "editor",
			wpAdmin: "wpadmin",
			wpDash: "wpdash"
		},
		windowNames: { sidebarMenu: "sidebar_menu" },
		targetTypes: {
			dropdownItem: "dropdown_item",
			button: "button",
			tab: "tab",
			toggle: "toggle",
			searchInput: "search_input",
			searchResult: "search_result",
			buttons: "buttons",
			searchWidget: "search_widget",
			wpDashAdminMenuItem: "wpdash_admin_menu_item",
			wpDashEditorMenu: "wpdash_editor_menu",
			wpDashSubMenuItem: "wpdash_sub_menu_item",
			link: "link"
		},
		interactionResults: {
			actionSelected: "action_selected",
			navigate: "navigate",
			create: "create",
			sessionEnd: "session_end",
			tabChanged: "tab_changed",
			assetInserted: "asset_inserted",
			assetFavorite: "asset_favorite",
			aiGenerate: "ai_generate",
			resultsUpdated: "results_updated",
			noResults: "no_results",
			selected: "selected",
			promotionViewed: "promotion_viewed",
			upgradeNow: "upgrade_now",
			elementorSideMenuOpened: "elementor_side_menu_opened",
			editorSubMenuOpened: "wpdash_editor_sub_menu_opened",
			themeBuilderPromotionWindow: "theme_builder_promotion_window",
			pageOpened: "page_opened",
			expanded: "expanded",
			collapsed: "collapsed"
		},
		targetNames: {
			publishDropdown: {
				saveDraft: "save_draft",
				saveAsTemplate: "save_as_template",
				viewPage: "view_page",
				copyAndShare: "copy_and_share"
			},
			pageList: { addNewPage: "add_new_page" }
		},
		triggers: {
			click: "Click",
			rightClick: "Right Click",
			doubleClick: "Double Click",
			accordionClick: "Accordion Click",
			toggleClick: "Toggle Click",
			dropdownClick: "Click Dropdown",
			editorLoaded: "Editor Loaded",
			visible: "Visible",
			pageLoaded: "Page Loaded",
			typing: "Typing",
			tabSelect: "Tab Select",
			insert: "Insert",
			hover: "Hover"
		},
		locations: {
			widgetPanel: "Widget Panel",
			topBar: "Top Bar",
			sidebar: "Sidebar",
			elementorEditor: "Elementor Editor",
			templatesLibrary: { library: "Templates Library" },
			app: {
				import: "Import Kit",
				export: "Export Kit",
				kitLibrary: "Kit Library",
				cloudKitLibrary: "Cloud Kit Library"
			},
			variables: "Variables Panel",
			variablesManager: "Variables Manager",
			admin: "WP admin",
			wpDashAdmin: "wpdash_admin",
			structurePanel: "Structure Panel",
			canvas: "Canvas",
			leftPanel: "Left Panel",
			elementorLibrary: "Elementor Library",
			components: { instanceEditingPanel: "Instance Editing Panel" }
		},
		secondaryLocations: {
			layout: "Layout Section",
			basic: "Basic Section",
			"pro-elements": "Pro Section",
			general: "General Section",
			"theme-elements": "Site Section",
			"theme-elements-single": "Single Section",
			"woocommerce-elements": "WooCommerce Section",
			wordpress: "WordPress Section",
			categories: "Widgets Tab",
			global: "Globals Tab",
			"whats-new": "What's New",
			"document-settings": "Document Settings icon",
			"preview-page": "Preview Page",
			"publish-button": "Publish Button",
			"widget-panel": "Widget Panel Icon",
			finder: "Finder",
			help: "Help",
			elementorLogoDropdown: "top_bar_elementor_logo_dropdown",
			elementorLogo: "Elementor Logo",
			eLogoMenu: "E-logo Menu",
			notes: "Notes",
			siteSettings: "Site Settings",
			structure: "Structure",
			documentNameDropdown: "Document Name dropdown",
			responsiveControls: "Responsive controls",
			launchpad: "launchpad",
			checklistHeader: "Checklist Header",
			checklistSteps: "Checklist Steps",
			userPreferences: "User Preferences",
			contextMenu: "Context Menu",
			templateLibrary: {
				saveModal: "Save to Modal",
				moveModal: "Move to Modal",
				bulkMoveModal: "Bulk Move to Modal",
				copyModal: "Copy to Modal",
				bulkCopyModal: "Bulk Copy to Modal",
				saveModalSelectFolder: "Save to Modal - select folder",
				saveModalSelectConnect: "Save to Modal - connect",
				saveModalSelectUpgrade: "Save to Modal - upgrade",
				importModal: "Import Modal",
				newFolderModal: "New Folder Modal",
				deleteDialog: "Delete Dialog",
				deleteFolderDialog: "Delete Folder Dialog",
				renameDialog: "Rename Dialog",
				createFolderDialog: "Create Folder Dialog",
				applySettingsDialog: "Apply Settings Dialog",
				cloudTab: "Cloud Tab",
				siteTab: "Site Tab",
				cloudTabFolder: "Cloud Tab - Folder",
				cloudTabConnect: "Cloud Tab - Connect",
				cloudTabUpgrade: "Cloud Tab - Upgrade",
				morePopup: "Context Menu",
				quotaBar: "Quota Bar"
			},
			kitLibrary: {
				cloudKitLibrary: "kits_cloud_library",
				cloudKitLibraryConnect: "kits_cloud_library_connect",
				cloudKitLibraryUpgrade: "kits_cloud_library_upgrade",
				kitExportCustomization: "kit_export_customization",
				kitExport: "kit_export",
				kitExportCustomizationEdit: "kit_export_customization_edit",
				kitExportSummary: "kit_export_summary",
				kitImportUploadBox: "kit_import_upload_box",
				kitImportCustomization: "kit_import_customization",
				kitImportSummary: "kit_import_summary"
			},
			variablesPopover: "Variables Popover",
			admin: {
				pluginToolsTab: "plugin_tools_tab",
				pluginWebsiteTemplatesTab: "plugin_website_templates_tab"
			},
			componentsTab: "Components Tab",
			canvasElement: "Canvas Element",
			publishDropdown: "Publish Dropdown",
			pageListDropdown: "Page List Dropdown",
			emptyBox: "Empty Box",
			searchBar: "Search Bar",
			finderResults: "Finder Results",
			libraryTabs: "Library Tabs",
			assetCard: "Asset Card",
			wpDashElementorCoreMenu: "elementor_editor_core_menu",
			wpDashElementorCoreSubMenu: "elementor_editor_core_sub_menu",
			wpDashThemeBuilder: "wpdash_core_sub_menu_theme_builder"
		},
		elements: {
			accordionSection: "Accordion section",
			buttonIcon: "Button Icon",
			mainCta: "Main CTA",
			button: "Button",
			link: "Link",
			dropdown: "Dropdown",
			toggle: "Toggle",
			launchpadChecklist: "Checklist popup"
		},
		names: {
			v1: {
				layout: "v1_widgets_tab_layout_section",
				basic: "v1_widgets_tab_basic_section",
				"pro-elements": "v1_widgets_tab_pro_section",
				general: "v1_widgets_tab_general_section",
				"theme-elements": "v1_widgets_tab_site_section",
				"theme-elements-single": "v1_widgets_tab_single_section",
				"woocommerce-elements": "v1_widgets_tab_woocommerce_section",
				wordpress: "v1_widgets_tab_wordpress_section",
				categories: "v1_widgets_tab",
				global: "v1_globals_tab"
			},
			topBar: {
				whatsNew: "top_bar_whats_new",
				documentSettings: "top_bar_document_settings_icon",
				previewPage: "top_bar_preview_page",
				publishButton: "top_bar_publish_button",
				widgetPanel: "top_bar_widget_panel_icon",
				finder: "top_bar_finder",
				help: "top_bar_help",
				history: "top_bar_elementor_logo_dropdown_history",
				userPreferences: "top_bar_elementor_logo_dropdown_user_preferences",
				keyboardShortcuts: "top_bar_elementor_logo_dropdown_keyboard_shortcuts",
				exitToWordpress: "top_bar_elementor_logo_dropdown_exit_to_wordpress",
				themeBuilder: "top_bar_elementor_logo_dropdown_theme_builder",
				notes: "top_bar_notes",
				siteSettings: "top_bar_site_setting",
				structure: "top_bar_structure",
				documentNameDropdown: "top_bar_document_name_dropdown",
				responsiveControls: "top_bar_responsive_controls",
				launchpadOn: "top_bar_checklist_icon_show",
				launchpadOff: "top_bar_checklist_icon_hide",
				elementorLogoDropdown: "open_e_menu",
				connectAccount: "connect_account",
				accountConnected: "account_connected"
			},
			elementorEditor: {
				editorLoaded: "editor_loaded",
				checklist: {
					checklistHeaderClose: "checklist_header_close_icon",
					checklistFirstPopup: "checklist popup triggered"
				},
				userPreferences: {
					checklistShow: "checklist_userpreferences_toggle_show",
					checklistHide: "checklist_userpreferences_toggle_hide"
				}
			},
			variables: {
				open: "open_variables_popover",
				add: "add_new_variable",
				connect: "connect_variable",
				save: "save_new_variable",
				update: "update_variable",
				openManager: "open_variables_manager",
				saveChanges: "save_variables_changes",
				delete: "delete_variable",
				variableSyncToV3: "variable_sync_to_v3"
			},
			design_system: {
				importOpened: "design_system_import_opened",
				fileSelected: "design_system_file_selected",
				validationFailed: "design_system_validation_failed",
				conflictChoice: "design_system_conflict_choice",
				confirmed: "design_system_import_confirmed",
				imported: "design_system_imported",
				importFailed: "design_system_import_failed",
				export: "design_system_export",
				opened: "design_system_opened"
			},
			components: {
				createClicked: "component_create_clicked",
				createCancelled: "component_creation_cancelled",
				created: "component_created",
				instanceAdded: "component_instance_added",
				edited: "component_edited",
				propertiesPanelOpened: "component_properties_panel_opened",
				propertiesGroupCreated: "component_properties_group_created",
				propertyExposed: "component_property_exposed",
				propertyRemoved: "component_property_removed",
				detached: "component_detached"
			},
			global_classes: {
				classApplied: "class_applied",
				classRemoved: "class_removed",
				classManagerFilterCleared: "class_manager_filter_cleared",
				classDeleted: "class_deleted",
				classPublishConflict: "class_publish_conflict",
				classRenamed: "class_renamed",
				classCreated: "class_created",
				classManagerSearched: "class_manager_searched",
				classManagerFiltersOpened: "class_manager_filters_opened",
				classManagerOpened: "class_manager_opened",
				classManagerReorder: "class_manager_reorder",
				classManagerFilterUsed: "class_manager_filter_used",
				classUsageLocate: "class_usage_locate",
				classUsageHovered: "class_usage_hovered",
				classStyled: "class_styled",
				classStateClicked: "class_state_clicked",
				classUsageClicked: "class_usage_clicked",
				classDuplicate: "class_duplicate",
				classSyncToV3PopupShown: "class_sync_to_v3_popup_shown",
				classSyncToV3: "class_sync_to_v3",
				classSyncToV3PopupClick: "class_sync_to_v3_popup_click"
			},
			editorOne: {
				topBarPublishDropdown: "top_bar_publish_dropdown",
				topBarPageList: "top_bar_page_list",
				siteSettingsSession: "site_settings_session",
				eLibraryNav: "e_library_nav",
				eLibraryInsert: "e_library_insert",
				eLibraryFavorite: "e_library_favorite",
				eLibraryGenerateAi: "e_library_generate_ai",
				finderSearchInput: "finder_search_input",
				finderResultSelect: "finder_result_select",
				canvasEmptyBoxAction: "canvas_empty_box_action",
				widgetPanelSearch: "widget_panel_search",
				wpDashElementorMenuClick: "wpdash_elementor_menu_click",
				wpDashEditorSubMenuHover: "wpdash_editor_sub_menu_hover",
				wpDashThemeBuilderClick: "wpdash_theme_builder_click",
				sidebarMenuItemClicked: "sidebar_menu_item_clicked",
				sidebarMenuGroupToggled: "sidebar_menu_group_toggled"
			},
			interactions: { created: "interactions_created" },
			promotions: {
				viewPromotion: "view_promotion",
				upgradePromotionClick: "upgrade_promotion_click"
			}
		}
	};

//#endregion
//#region app/assets/js/event-track/apps-event-tracking.js
	function ownKeys(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	var EVENTS_MAP = {
		PAGE_VIEWS_WEBSITE_TEMPLATES: "page_views_website_templates",
		KITS_CLOUD_UPGRADE_CLICKED: "kits_cloud_upgrade_clicked",
		EXPORT_KIT_CUSTOMIZATION: "export_kit_customization",
		IMPORT_KIT_CUSTOMIZATION: "import_kit_customization",
		KIT_IMPORT_STATUS: "kit_import_status",
		KIT_CLOUD_LIBRARY_APPLY: "kit_cloud_library_apply",
		KIT_CLOUD_LIBRARY_DELETE: "kit_cloud_library_delete",
		IMPORT_EXPORT_ADMIN_ACTION: "ie_admin_action",
		KIT_IMPORT_UPLOAD_FILE: "kit_import_upload_file"
	};
	var AppsEventTracking = /*#__PURE__*/ function() {
		function AppsEventTracking() {
			_classCallCheck(this, AppsEventTracking);
		}
		return _createClass(AppsEventTracking, null, [
			{
				key: "dispatchEvent",
				value: function dispatchEvent(eventName, payload) {
					var _window$elementorComm;
					var _window$elementorComm2;
					return (_window$elementorComm = window.elementorCommon) === null || _window$elementorComm === void 0 || (_window$elementorComm = _window$elementorComm.eventsManager) === null || _window$elementorComm === void 0 || (_window$elementorComm2 = _window$elementorComm.dispatchEvent) === null || _window$elementorComm2 === void 0 ? void 0 : _window$elementorComm2.call(_window$elementorComm, eventName, payload);
				}
			},
			{
				key: "sendPageViewsWebsiteTemplates",
				value: function sendPageViewsWebsiteTemplates(page) {
					return this.dispatchEvent(EVENTS_MAP.PAGE_VIEWS_WEBSITE_TEMPLATES, {
						trigger: eventsConfig.triggers.pageLoaded,
						page_loaded: page,
						secondary_location: page
					});
				}
			},
			{
				key: "sendKitsCloudUpgradeClicked",
				value: function sendKitsCloudUpgradeClicked(upgradeLocation) {
					return this.dispatchEvent(EVENTS_MAP.KITS_CLOUD_UPGRADE_CLICKED, {
						trigger: eventsConfig.triggers.click,
						secondary_location: upgradeLocation,
						upgrade_location: upgradeLocation
					});
				}
			},
			{
				key: "sendExportKitCustomization",
				value: function sendExportKitCustomization(payload) {
					return this.dispatchEvent(EVENTS_MAP.EXPORT_KIT_CUSTOMIZATION, _objectSpread({ trigger: eventsConfig.triggers.click }, payload));
				}
			},
			{
				key: "sendImportKitCustomization",
				value: function sendImportKitCustomization(payload) {
					return this.dispatchEvent(EVENTS_MAP.IMPORT_KIT_CUSTOMIZATION, _objectSpread({ trigger: eventsConfig.triggers.click }, payload));
				}
			},
			{
				key: "sendKitImportStatus",
				value: function sendKitImportStatus() {
					var error = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
					var isError = !!error;
					return this.dispatchEvent(EVENTS_MAP.KIT_IMPORT_STATUS, _objectSpread({ kit_import_status: !isError }, isError && { kit_import_error: error.message }));
				}
			},
			{
				key: "sendKitCloudLibraryApply",
				value: function sendKitCloudLibraryApply(kitId, kitApplyUrl) {
					return this.dispatchEvent(EVENTS_MAP.KIT_CLOUD_LIBRARY_APPLY, _objectSpread({
						trigger: eventsConfig.triggers.click,
						kit_cloud_id: kitId
					}, kitApplyUrl && { kit_apply_url: kitApplyUrl }));
				}
			},
			{
				key: "sendKitCloudLibraryDelete",
				value: function sendKitCloudLibraryDelete() {
					return this.dispatchEvent(EVENTS_MAP.KIT_CLOUD_LIBRARY_DELETE, { trigger: eventsConfig.triggers.click });
				}
			},
			{
				key: "sendImportExportAdminAction",
				value: function sendImportExportAdminAction(actionType) {
					return this.dispatchEvent(EVENTS_MAP.IMPORT_EXPORT_ADMIN_ACTION, {
						trigger: eventsConfig.triggers.click,
						action_type: actionType
					});
				}
			},
			{
				key: "sendKitImportUploadFile",
				value: function sendKitImportUploadFile(status) {
					return this.dispatchEvent(EVENTS_MAP.KIT_IMPORT_UPLOAD_FILE, { kit_import_upload_file_status: status });
				}
			}
		]);
	}();

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
	function asyncGeneratorStep(n, t, e, r, o, a, c) {
		try {
			var i = n[a](c);
			var u = i.value;
		} catch (n) {
			e(n);
			return;
		}
		i.done ? t(u) : Promise.resolve(u).then(r, o);
	}
	function _asyncToGenerator(n) {
		return function() {
			var t = this;
			var e = arguments;
			return new Promise(function(r, o) {
				var a = n.apply(t, e);
				function _next(n) {
					asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
				}
				function _throw(n) {
					asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
				}
				_next(void 0);
			});
		};
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/OverloadYield.js
	var require_OverloadYield = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		function _OverloadYield(e, d) {
			this.v = e, this.k = d;
		}
		module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/regeneratorDefine.js
	var require_regeneratorDefine = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		function _regeneratorDefine(e, r, n, t) {
			var i = Object.defineProperty;
			try {
				i({}, "", {});
			} catch (e) {
				i = 0;
			}
			module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
				function o(r, n) {
					_regeneratorDefine(e, r, function(e) {
						return this._invoke(r, n, e);
					});
				}
				r ? i ? i(e, r, {
					value: n,
					enumerable: !t,
					configurable: !t,
					writable: !t
				}) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
			}, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n, t);
		}
		module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/regenerator.js
	var require_regenerator$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var regeneratorDefine = require_regeneratorDefine();
		function _regenerator() {
			/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
			var e;
			var t;
			var r = "function" == typeof Symbol ? Symbol : {};
			var n = r.iterator || "@@iterator";
			var o = r.toStringTag || "@@toStringTag";
			function i(r, n, o, i) {
				var c = n && n.prototype instanceof Generator ? n : Generator;
				var u = Object.create(c.prototype);
				return regeneratorDefine(u, "_invoke", function(r, n, o) {
					var i;
					var c;
					var u;
					var f = 0;
					var p = o || [];
					var y = !1;
					var G = {
						p: 0,
						n: 0,
						v: e,
						a: d,
						f: d.bind(e, 4),
						d: function d(t, r) {
							return i = t, c = 0, u = e, G.n = r, a;
						}
					};
					function d(r, n) {
						for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
							var o;
							var i = p[t];
							var d = G.p;
							var l = i[2];
							r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
						}
						if (o || r > 1) return a;
						throw y = !0, n;
					}
					return function(o, p, l) {
						if (f > 1) throw TypeError("Generator is already running");
						for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
							i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
							try {
								if (f = 2, i) {
									if (c || (o = "next"), t = i[o]) {
										if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
										if (!t.done) return t;
										u = t.value, c < 2 && (c = 0);
									} else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
									i = e;
								} else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
							} catch (t) {
								i = e, c = 1, u = t;
							} finally {
								f = 1;
							}
						}
						return {
							value: t,
							done: y
						};
					};
				}(r, o, i), !0), u;
			}
			var a = {};
			function Generator() {}
			function GeneratorFunction() {}
			function GeneratorFunctionPrototype() {}
			t = Object.getPrototypeOf;
			var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function() {
				return this;
			}), t);
			var u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
			function f(e) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
			}
			return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine(u), regeneratorDefine(u, o, "Generator"), regeneratorDefine(u, n, function() {
				return this;
			}), regeneratorDefine(u, "toString", function() {
				return "[object Generator]";
			}), (module.exports = _regenerator = function _regenerator() {
				return {
					w: i,
					m: f
				};
			}, module.exports.__esModule = true, module.exports["default"] = module.exports)();
		}
		module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js
	var require_regeneratorAsyncIterator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var OverloadYield = require_OverloadYield();
		var regeneratorDefine = require_regeneratorDefine();
		function AsyncIterator(t, e) {
			function n(r, o, i, f) {
				try {
					var c = t[r](o);
					var u = c.value;
					return u instanceof OverloadYield ? e.resolve(u.v).then(function(t) {
						n("next", t, i, f);
					}, function(t) {
						n("throw", t, i, f);
					}) : e.resolve(u).then(function(t) {
						c.value = t, i(c);
					}, function(t) {
						return n("throw", t, i, f);
					});
				} catch (t) {
					f(t);
				}
			}
			var r;
			this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function() {
				return this;
			})), regeneratorDefine(this, "_invoke", function(t, o, i) {
				function f() {
					return new e(function(e, r) {
						n(t, i, e, r);
					});
				}
				return r = r ? r.then(f, f) : f();
			}, !0);
		}
		module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js
	var require_regeneratorAsyncGen = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var regenerator = require_regenerator$1();
		var regeneratorAsyncIterator = require_regeneratorAsyncIterator();
		function _regeneratorAsyncGen(r, e, t, o, n) {
			return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);
		}
		module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/regeneratorAsync.js
	var require_regeneratorAsync = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var regeneratorAsyncGen = require_regeneratorAsyncGen();
		function _regeneratorAsync(n, e, r, t, o) {
			var a = regeneratorAsyncGen(n, e, r, t, o);
			return a.next().then(function(n) {
				return n.done ? n.value : a.next();
			});
		}
		module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/regeneratorKeys.js
	var require_regeneratorKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		function _regeneratorKeys(e) {
			var n = Object(e);
			var r = [];
			for (var t in n) r.unshift(t);
			return function e() {
				for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
				return e.done = !0, e;
			};
		}
		module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/typeof.js
	var require_typeof = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		function _typeof(o) {
			"@babel/helpers - typeof";
			return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
				return typeof o;
			} : function(o) {
				return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
			}, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
		}
		module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/regeneratorValues.js
	var require_regeneratorValues = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var _typeof = require_typeof()["default"];
		function _regeneratorValues(e) {
			if (null != e) {
				var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"];
				var r = 0;
				if (t) return t.call(e);
				if ("function" == typeof e.next) return e;
				if (!isNaN(e.length)) return { next: function next() {
					return e && r >= e.length && (e = void 0), {
						value: e && e[r++],
						done: !e
					};
				} };
			}
			throw new TypeError(_typeof(e) + " is not iterable");
		}
		module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/regeneratorRuntime.js
	var require_regeneratorRuntime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var OverloadYield = require_OverloadYield();
		var regenerator = require_regenerator$1();
		var regeneratorAsync = require_regeneratorAsync();
		var regeneratorAsyncGen = require_regeneratorAsyncGen();
		var regeneratorAsyncIterator = require_regeneratorAsyncIterator();
		var regeneratorKeys = require_regeneratorKeys();
		var regeneratorValues = require_regeneratorValues();
		function _regeneratorRuntime() {
			"use strict";
			var r = regenerator();
			var e = r.m(_regeneratorRuntime);
			var t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
			function n(r) {
				var e = "function" == typeof r && r.constructor;
				return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
			}
			var o = {
				"throw": 1,
				"return": 2,
				"break": 3,
				"continue": 3
			};
			function a(r) {
				var e;
				var t;
				return function(n) {
					e || (e = {
						stop: function stop() {
							return t(n.a, 2);
						},
						"catch": function _catch() {
							return n.v;
						},
						abrupt: function abrupt(r, e) {
							return t(n.a, o[r], e);
						},
						delegateYield: function delegateYield(r, o, a) {
							return e.resultName = o, t(n.d, regeneratorValues(r), a);
						},
						finish: function finish(r) {
							return t(n.f, r);
						}
					}, t = function t(r, _t, o) {
						n.p = e.prev, n.n = e.next;
						try {
							return r(_t, o);
						} finally {
							e.next = n.n;
						}
					}), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
					try {
						return r.call(this, e);
					} finally {
						n.p = e.prev, n.n = e.next;
					}
				};
			}
			return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
				return {
					wrap: function wrap(e, t, n, o) {
						return r.w(a(e), t, n, o && o.reverse());
					},
					isGeneratorFunction: n,
					mark: r.m,
					awrap: function awrap(r, e) {
						return new OverloadYield(r, e);
					},
					AsyncIterator: regeneratorAsyncIterator,
					async: function async(r, e, t, o, u) {
						return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);
					},
					keys: regeneratorKeys,
					values: regeneratorValues
				};
			}, module.exports.__esModule = true, module.exports["default"] = module.exports)();
		}
		module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/@babel/runtime/regenerator/index.js
	var require_regenerator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var runtime = require_regeneratorRuntime()();
		module.exports = runtime;
		try {
			regeneratorRuntime = runtime;
		} catch (accidentalStrictMode) {
			if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
			else Function("r", "regeneratorRuntime = r")(runtime);
		}
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var import_regenerator = /* @__PURE__ */ __toESM(require_regenerator());
	function _assertThisInitialized(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
	function _possibleConstructorReturn(t, e) {
		if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return _assertThisInitialized(t);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
	function _getPrototypeOf(t) {
		return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t);
		}, _getPrototypeOf(t);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
	function _setPrototypeOf(t, e) {
		return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
			return t.__proto__ = e, t;
		}, _setPrototypeOf(t, e);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/inherits.js
	function _inherits(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
		t.prototype = Object.create(e && e.prototype, { constructor: {
			value: t,
			writable: !0,
			configurable: !0
		} }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
	function _isNativeFunction(t) {
		try {
			return -1 !== Function.toString.call(t).indexOf("[native code]");
		} catch (n) {
			return "function" == typeof t;
		}
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
	function _isNativeReflectConstruct$1() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$1, "_isNativeReflectConstruct");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/construct.js
	function _construct(t, e, r) {
		if (_isNativeReflectConstruct$1()) return Reflect.construct.apply(null, arguments);
		var o = [null];
		o.push.apply(o, e);
		var p = new (t.bind.apply(t, o))();
		return r && _setPrototypeOf(p, r.prototype), p;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
	function _wrapNativeSuper(t) {
		var r = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
		return _wrapNativeSuper = function _wrapNativeSuper(t) {
			if (null === t || !_isNativeFunction(t)) return t;
			if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
			if (void 0 !== r) {
				if (r.has(t)) return r.get(t);
				r.set(t, Wrapper);
			}
			function Wrapper() {
				return _construct(t, arguments, _getPrototypeOf(this).constructor);
			}
			return Wrapper.prototype = Object.create(t.prototype, { constructor: {
				value: Wrapper,
				enumerable: !1,
				writable: !0,
				configurable: !0
			} }), _setPrototypeOf(Wrapper, t);
		}, _wrapNativeSuper(t);
	}

//#endregion
//#region app/modules/import-export-customization/assets/js/shared/error/import-export-error.js
	function _callSuper(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	function _isNativeReflectConstruct() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	var ImportExportError = /*#__PURE__*/ function(_Error) {
		function ImportExportError(errorMessage, errorCode) {
			var _this;
			_classCallCheck(this, ImportExportError);
			_this = _callSuper(this, ImportExportError, ["string" === typeof errorMessage ? errorMessage : ""]);
			_this.code = errorCode || "general";
			_this.details = errorMessage;
			return _this;
		}
		_inherits(ImportExportError, _Error);
		return _createClass(ImportExportError);
	}(/*#__PURE__*/ _wrapNativeSuper(Error));

//#endregion
//#region app/modules/import-export-customization/assets/js/shared/utils/api-fetch-config.js
	var isApiConfigured = false;
	function configureApiFetch() {
		var _window$elementorAppC;
		if (isApiConfigured) return;
		var config = (_window$elementorAppC = window.elementorAppConfig) === null || _window$elementorAppC === void 0 ? void 0 : _window$elementorAppC["import-export-customization"];
		if (!config) throw new ImportExportError("Configuration not found. Please refresh the page.", "config_missing");
		if (config.restNonce) _wordpress_api_fetch.default.use(_wordpress_api_fetch.default.createNonceMiddleware(config.restNonce));
		if (config.restUrl) _wordpress_api_fetch.default.use(_wordpress_api_fetch.default.createRootURLMiddleware(config.restUrl));
		isApiConfigured = true;
	}

//#endregion
//#region app/modules/import-export-customization/assets/js/shared/utils/api-request.js
	var HTTP_STATUS = { REQUEST_TIMEOUT: 408 };
	var HTTP_METHODS = { CREATABLE: "POST" };
	function apiRequest(_x) {
		return _apiRequest.apply(this, arguments);
	}
	function _apiRequest() {
		_apiRequest = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee(_ref) {
			var _ref$data;
			var data;
			var path;
			var _ref$method;
			var method;
			var requestOptions;
			var _t;
			return import_regenerator.default.wrap(function(_context) {
				while (1) switch (_context.prev = _context.next) {
					case 0:
						_ref$data = _ref.data, data = _ref$data === void 0 ? null : _ref$data, path = _ref.path, _ref$method = _ref.method, method = _ref$method === void 0 ? HTTP_METHODS.CREATABLE : _ref$method;
						configureApiFetch();
						_context.prev = 1;
						requestOptions = {
							path: "/elementor/v1/import-export-customization/".concat(path),
							method
						};
						if (data && HTTP_METHODS.CREATABLE === method) requestOptions.data = data;
						_context.next = 2;
						return (0, _wordpress_api_fetch.default)(requestOptions);
					case 2: return _context.abrupt("return", _context.sent);
					case 3:
						_context.prev = 3;
						_t = _context["catch"](1);
						handleApiFetchError(_t);
					case 4:
					case "end": return _context.stop();
				}
			}, _callee, null, [[1, 3]]);
		}));
		return _apiRequest.apply(this, arguments);
	}
	function handleApiFetchError(error) {
		var errorMessage = (error === null || error === void 0 ? void 0 : error.message) || "An unknown error occurred";
		var errorCode = "general";
		if (error !== null && error !== void 0 && error.code) errorCode = error.code;
		else if (error !== null && error !== void 0 && error.status) errorCode = HTTP_STATUS.REQUEST_TIMEOUT === error.status ? "timeout" : error.status;
		throw new ImportExportError(errorMessage, errorCode);
	}

//#endregion
//#region app/modules/import-export-customization/assets/js/shared/revert-kit-handler.js
	var RevertKitHandler = /*#__PURE__*/ function() {
		function RevertKitHandler() {
			var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			var revertButton = _ref.revertButton;
			var onError = _ref.onError;
			_classCallCheck(this, RevertKitHandler);
			this.revertButton = revertButton;
			this.onError = onError || this.defaultErrorHandler.bind(this);
		}
		return _createClass(RevertKitHandler, [
			{
				key: "revertKit",
				value: function() {
					var _revertKit = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
						var activeKitName;
						var confirmed;
						var referrerKitId;
						var returnTo;
						var noAutomaticRedirect;
						var _yield$this$callRever;
						var data;
						var _t;
						return import_regenerator.default.wrap(function(_context) {
							while (1) switch (_context.prev = _context.next) {
								case 0:
									activeKitName = this.getActiveKitName();
									_context.next = 1;
									return this.showConfirmationDialog(activeKitName);
								case 1:
									confirmed = _context.sent;
									if (confirmed) {
										_context.next = 2;
										break;
									}
									return _context.abrupt("return");
								case 2:
									_context.prev = 2;
									referrerKitId = this.getReferrerKitId();
									returnTo = this.getReturnTo();
									noAutomaticRedirect = this.getNoAutomaticRedirect();
									this.saveToCache(referrerKitId, activeKitName, returnTo, noAutomaticRedirect);
									_context.next = 3;
									return this.callRevertAPI();
								case 3:
									_yield$this$callRever = _context.sent;
									data = _yield$this$callRever.data;
									this.handleRevertResponse(data);
									_context.next = 5;
									break;
								case 4:
									_context.prev = 4;
									_t = _context["catch"](2);
									this.onError(_t);
								case 5:
								case "end": return _context.stop();
							}
						}, _callee, this, [[2, 4]]);
					}));
					function revertKit() {
						return _revertKit.apply(this, arguments);
					}
					return revertKit;
				}()
			},
			{
				key: "callRevertAPI",
				value: function() {
					var _callRevertAPI = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee2() {
						var result;
						return import_regenerator.default.wrap(function(_context2) {
							while (1) switch (_context2.prev = _context2.next) {
								case 0:
									_context2.next = 1;
									return apiRequest({ path: RevertKitHandler.API_PATH });
								case 1:
									result = _context2.sent;
									return _context2.abrupt("return", result);
								case 2:
								case "end": return _context2.stop();
							}
						}, _callee2);
					}));
					function callRevertAPI() {
						return _callRevertAPI.apply(this, arguments);
					}
					return callRevertAPI;
				}()
			},
			{
				key: "handleRevertResponse",
				value: function handleRevertResponse(data) {
					if (!data.revert_completed) {
						this.handleRevertNoSessions(data);
						return;
					}
					this.showRevertCompletedDialog(data);
				}
			},
			{
				key: "showRevertCompletedDialog",
				value: function showRevertCompletedDialog() {
					var referrerKitId = this.getReferrerKitId();
					if (referrerKitId) {
						this.showReferrerKitDialog(referrerKitId);
						return;
					}
					this.showRevertSuccessDialog();
				}
			},
			{
				key: "handleRevertNoSessions",
				value: function handleRevertNoSessions(responseData) {
					elementorCommon.dialogsManager.createWidget("alert", { message: responseData.message || (0, _wordpress_i18n.__)("No import sessions available to revert.", "elementor") }).show();
				}
			},
			{
				key: "showConfirmationDialog",
				value: function() {
					var _showConfirmationDialog = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee3(activeKitName) {
						return import_regenerator.default.wrap(function(_context3) {
							while (1) switch (_context3.prev = _context3.next) {
								case 0: return _context3.abrupt("return", new Promise(function(resolve) {
									elementorCommon.dialogsManager.createWidget("confirm", {
										headerMessage: (0, _wordpress_i18n.__)("Are you sure?", "elementor"),
										message: (0, _wordpress_i18n.__)("Removing %s will permanently delete changes made to the Website Template's content and site settings", "elementor").replace("%s", activeKitName),
										strings: {
											confirm: (0, _wordpress_i18n.__)("Delete", "elementor"),
											cancel: (0, _wordpress_i18n.__)("Cancel", "elementor")
										},
										onConfirm: function onConfirm() {
											return resolve(true);
										},
										onCancel: function onCancel() {
											return resolve(false);
										}
									}).show();
								}));
								case 1:
								case "end": return _context3.stop();
							}
						}, _callee3);
					}));
					function showConfirmationDialog(_x) {
						return _showConfirmationDialog.apply(this, arguments);
					}
					return showConfirmationDialog;
				}()
			},
			{
				key: "createSuccessHeaderMessage",
				value: function createSuccessHeaderMessage() {
					var activeKitName = this.getDataFromCache().activeKitName;
					return (0, _wordpress_i18n.__)("%s was successfully deleted", "elementor").replace("%s", activeKitName);
				}
			},
			{
				key: "showRevertSuccessDialog",
				value: function showRevertSuccessDialog() {
					elementorCommon.dialogsManager.createWidget("confirm", {
						id: RevertKitHandler.DIALOG_ID,
						headerMessage: this.createSuccessHeaderMessage(),
						message: (0, _wordpress_i18n.__)("Try a different Website Template or build your site from scratch.", "elementor"),
						strings: {
							confirm: (0, _wordpress_i18n.__)("OK", "elementor"),
							cancel: (0, _wordpress_i18n.__)("Library", "elementor")
						},
						onConfirm: function onConfirm() {
							location.reload();
						},
						onCancel: function onCancel() {
							location.href = elementorImportExport.appUrl;
						}
					}).show();
					this.clearCache();
				}
			},
			{
				key: "showReferrerKitDialog",
				value: function showReferrerKitDialog(referrerKitId) {
					var _this = this;
					var _this$getDataFromCach2 = this.getDataFromCache();
					var returnTo = _this$getDataFromCach2.returnTo;
					var noAutomaticRedirect = _this$getDataFromCach2.noAutomaticRedirect;
					elementorCommon.dialogsManager.createWidget("confirm", {
						id: RevertKitHandler.DIALOG_ID,
						headerMessage: this.createSuccessHeaderMessage(),
						message: (0, _wordpress_i18n.__)("You're ready to apply a new Kit!", "elementor"),
						strings: {
							confirm: (0, _wordpress_i18n.__)("Continue to new Kit", "elementor"),
							cancel: (0, _wordpress_i18n.__)("Close", "elementor")
						},
						onConfirm: function onConfirm() {
							location.href = _this.buildPreviewUrl(referrerKitId, returnTo, noAutomaticRedirect);
						},
						onCancel: function onCancel() {
							location.reload();
						}
					}).show();
					this.clearCache();
				}
			},
			{
				key: "buildPreviewUrl",
				value: function buildPreviewUrl(referrerKitId, returnTo, noAutomaticRedirect) {
					var baseUrl = elementorImportExport.appUrl + "/preview/" + referrerKitId;
					var url = new URL(baseUrl);
					if (returnTo) url.searchParams.append(RevertKitHandler.URL_PARAM_RETURN_TO, returnTo);
					if (noAutomaticRedirect) url.searchParams.append(RevertKitHandler.URL_PARAM_NO_AUTOMATIC_REDIRECT, noAutomaticRedirect);
					return url.toString();
				}
			},
			{
				key: "maybeShowReferrerKitDialog",
				value: function maybeShowReferrerKitDialog() {
					var referrerKitId = this.getDataFromCache().referrerKitId;
					if (void 0 === referrerKitId) return;
					if (0 === referrerKitId.length) {
						this.showRevertSuccessDialog();
						return;
					}
					this.showReferrerKitDialog(referrerKitId);
				}
			},
			{
				key: "getActiveKitName",
				value: function getActiveKitName() {
					var lastKit = elementorImportExport.lastImportedSession;
					if (lastKit.kit_title) return lastKit.kit_title;
					if (lastKit.kit_name) return this.convertNameToTitle(lastKit.kit_name);
					return (0, _wordpress_i18n.__)("Your Kit", "elementor");
				}
			},
			{
				key: "convertNameToTitle",
				value: function convertNameToTitle(name) {
					var words = name.split(RevertKitHandler.NAME_SEPARATOR_PATTERN).filter(function(word) {
						return word.length > 0;
					});
					if (0 === words.length) return (0, _wordpress_i18n.__)("Your Kit", "elementor");
					return words.map(function(word) {
						return word[0].toUpperCase() + word.substring(1);
					}).join(" ");
				}
			},
			{
				key: "getReferrerKitId",
				value: function getReferrerKitId() {
					var pageReferrerKit = new URLSearchParams(window.location.search).get(RevertKitHandler.URL_PARAM_REFERRER_KIT);
					if (pageReferrerKit) return pageReferrerKit;
					if (!this.revertButton) return "";
					return new URL(this.revertButton.href).searchParams.get(RevertKitHandler.URL_PARAM_REFERRER_KIT) || "";
				}
			},
			{
				key: "getReturnTo",
				value: function getReturnTo() {
					return new URLSearchParams(window.location.search).get(RevertKitHandler.URL_PARAM_RETURN_TO) || "";
				}
			},
			{
				key: "getNoAutomaticRedirect",
				value: function getNoAutomaticRedirect() {
					return new URLSearchParams(window.location.search).get(RevertKitHandler.URL_PARAM_NO_AUTOMATIC_REDIRECT) || "";
				}
			},
			{
				key: "saveToCache",
				value: function saveToCache(referrerKitId, activeKitName, returnTo, noAutomaticRedirect) {
					sessionStorage.setItem(RevertKitHandler.KIT_DATA_KEY, JSON.stringify({
						referrerKitId: referrerKitId || "",
						activeKitName: activeKitName || "",
						returnTo: returnTo || "",
						noAutomaticRedirect: noAutomaticRedirect || ""
					}));
				}
			},
			{
				key: "getDataFromCache",
				value: function getDataFromCache() {
					try {
						return JSON.parse(sessionStorage.getItem(RevertKitHandler.KIT_DATA_KEY)) || {};
					} catch (e) {
						return {};
					}
				}
			},
			{
				key: "clearCache",
				value: function clearCache() {
					sessionStorage.removeItem(RevertKitHandler.KIT_DATA_KEY);
				}
			},
			{
				key: "defaultErrorHandler",
				value: function defaultErrorHandler() {
					elementorCommon.dialogsManager.createWidget("alert", { message: (0, _wordpress_i18n.__)("An error occurred while reverting the kit. Please try again.", "elementor") }).show();
				}
			}
		]);
	}();
	_defineProperty(RevertKitHandler, "API_PATH", "revert");
	_defineProperty(RevertKitHandler, "DIALOG_ID", "e-revert-kit-deleted-dialog");
	_defineProperty(RevertKitHandler, "URL_PARAM_REFERRER_KIT", "referrer_kit");
	_defineProperty(RevertKitHandler, "URL_PARAM_RETURN_TO", "return_to");
	_defineProperty(RevertKitHandler, "URL_PARAM_NO_AUTOMATIC_REDIRECT", "no_automatic_redirect");
	_defineProperty(RevertKitHandler, "KIT_DATA_KEY", "elementor-kit-data");
	_defineProperty(RevertKitHandler, "NAME_SEPARATOR_PATTERN", /[-_]+/);

//#endregion
//#region app/modules/import-export-customization/assets/js/admin.js
	var Admin = /*#__PURE__*/ function() {
		function Admin() {
			var _this = this;
			_classCallCheck(this, Admin);
			if ("elementor-tools" === new URLSearchParams(window.location.search).get("page")) {
				this.sendPageToolsViewedEvent();
				elementorAdmin.elements.$settingsTabs.on("focus", function() {
					var location = window.location.hash.slice(1);
					_this.maybeSendImportExportLocationEvent(location);
				});
				this.maybeSendImportExportLocationEvent(window.location.hash.slice(1));
			}
			this.revertButton = document.getElementById("elementor-import-export__revert_kit");
			this.importFroLibraryButton = document.getElementById("elementor-import-export__import_from_library");
			this.importButton = document.getElementById("elementor-import-export__import");
			this.exportButton = document.getElementById("elementor-import-export__export");
			this.initializeRevertHandler();
			this.bindEventListeners();
		}
		return _createClass(Admin, [
			{
				key: "initializeRevertHandler",
				value: function initializeRevertHandler() {
					if (this.revertButton) {
						this.revertHandler = new RevertKitHandler({ revertButton: this.revertButton });
						this.revertHandler.maybeShowReferrerKitDialog();
					}
				}
			},
			{
				key: "bindEventListeners",
				value: function bindEventListeners() {
					if (this.revertButton) this.revertButton.addEventListener("click", this.onRevertButtonClick.bind(this));
					if (this.importFroLibraryButton) this.importFroLibraryButton.addEventListener("click", this.onImportFromLibraryButtonClick.bind(this));
					if (this.importButton) this.importButton.addEventListener("click", this.onImportButtonClick.bind(this));
					if (this.exportButton) this.exportButton.addEventListener("click", this.onExportButtonClick.bind(this));
				}
			},
			{
				key: "sendPageToolsViewedEvent",
				value: function sendPageToolsViewedEvent() {
					AppsEventTracking.sendPageViewsWebsiteTemplates(elementorCommon.eventsManager.config.secondaryLocations.admin.pluginToolsTab);
				}
			},
			{
				key: "maybeSendImportExportLocationEvent",
				value: function maybeSendImportExportLocationEvent(location) {
					if ("tab-import-export-kit" === location) AppsEventTracking.sendPageViewsWebsiteTemplates(elementorCommon.eventsManager.config.secondaryLocations.admin.pluginWebsiteTemplatesTab);
				}
			},
			{
				key: "onRevertButtonClick",
				value: function onRevertButtonClick(event) {
					var _this$revertHandler;
					event.preventDefault();
					AppsEventTracking.sendImportExportAdminAction("Revert");
					(_this$revertHandler = this.revertHandler) === null || _this$revertHandler === void 0 || _this$revertHandler.revertKit();
				}
			},
			{
				key: "onExportButtonClick",
				value: function onExportButtonClick() {
					AppsEventTracking.sendImportExportAdminAction("Export");
				}
			},
			{
				key: "onImportButtonClick",
				value: function onImportButtonClick() {
					AppsEventTracking.sendImportExportAdminAction("Import");
				}
			},
			{
				key: "onImportFromLibraryButtonClick",
				value: function onImportFromLibraryButtonClick() {
					AppsEventTracking.sendImportExportAdminAction("Import from Library");
				}
			}
		]);
	}();
	window.addEventListener("load", function() {
		new Admin();
	});

//#endregion
})(wp.i18n, wp.apiFetch);
//# sourceMappingURL=import-export-customization-admin.js.map