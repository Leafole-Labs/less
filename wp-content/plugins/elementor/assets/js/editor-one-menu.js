(function() {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});

//#endregion

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
//#region modules/editor-one/assets/js/admin-menu/classes/flyout-menu-renderer.js
	var FlyoutMenuRenderer = /*#__PURE__*/ function() {
		function FlyoutMenuRenderer(config) {
			_classCallCheck(this, FlyoutMenuRenderer);
			this.config = config;
		}
		return _createClass(FlyoutMenuRenderer, [{
			key: "render",
			value: function render() {
				var editorFlyout = this.config.editorFlyout;
				if (!editorFlyout || !editorFlyout.items || !editorFlyout.items.length) return false;
				var editorLi = this.findEditorInMenu("#toplevel_page_elementor-home");
				if (!editorLi) return false;
				editorLi.classList.add("elementor-has-flyout");
				var editorFlyoutUl = document.createElement("ul");
				editorFlyoutUl.className = "elementor-submenu-flyout elementor-level-3";
				editorFlyout.items.forEach(function(item) {
					if (item.has_divider_before) {
						var dividerLi = document.createElement("li");
						dividerLi.className = "elementor-flyout-divider";
						dividerLi.setAttribute("role", "separator");
						editorFlyoutUl.appendChild(dividerLi);
					}
					var li = document.createElement("li");
					li.setAttribute("data-group-id", item.group_id || "");
					li.setAttribute("data-slug", item.slug || "");
					var a = document.createElement("a");
					a.href = item.url;
					a.textContent = item.label;
					li.appendChild(a);
					editorFlyoutUl.appendChild(li);
				});
				editorLi.appendChild(editorFlyoutUl);
				return true;
			}
		}, {
			key: "findEditorInMenu",
			value: function findEditorInMenu(menuSelector) {
				var menuItem = document.querySelector(menuSelector);
				if (!menuItem) return null;
				var submenu = menuItem.querySelector(".wp-submenu");
				if (!submenu) return null;
				var editorItem = submenu.querySelector("a[href$=\"page=elementor\"]");
				if (!editorItem) return null;
				return editorItem.closest("li");
			}
		}]);
	}();

//#endregion
//#region modules/editor-one/assets/js/admin-menu/classes/sidebar-menu-handler.js
	var SidebarMenuHandler = /*#__PURE__*/ function() {
		function SidebarMenuHandler() {
			_classCallCheck(this, SidebarMenuHandler);
			this.elementorHomeMenu = this.findElementorHomeMenu();
			if (this.elementorHomeMenu) {
				this.deactivateOtherMenus();
				this.activateElementorMenu();
				this.highlightSubmenu();
			}
		}
		return _createClass(SidebarMenuHandler, [
			{
				key: "findElementorHomeMenu",
				value: function findElementorHomeMenu() {
					return document.querySelector("#toplevel_page_elementor-home");
				}
			},
			{
				key: "deactivateOtherMenus",
				value: function deactivateOtherMenus() {
					var _this = this;
					document.querySelectorAll("#adminmenu li.wp-has-current-submenu").forEach(function(item) {
						if (item !== _this.elementorHomeMenu) {
							item.classList.remove("wp-has-current-submenu", "wp-menu-open", "selected");
							item.classList.add("wp-not-current-submenu");
							var link = item.querySelector(":scope > a");
							if (link) link.classList.remove("wp-has-current-submenu", "wp-menu-open", "current");
						}
					});
				}
			},
			{
				key: "activateElementorMenu",
				value: function activateElementorMenu() {
					this.elementorHomeMenu.classList.remove("wp-not-current-submenu");
					this.elementorHomeMenu.classList.add("wp-has-current-submenu", "wp-menu-open", "selected");
					var elementorLink = this.elementorHomeMenu.querySelector(":scope > a.menu-top");
					if (elementorLink) elementorLink.classList.add("wp-has-current-submenu", "wp-menu-open");
				}
			},
			{
				key: "highlightSubmenu",
				value: function highlightSubmenu() {
					var page = new URL(window.location.href).searchParams.get("page");
					var targetSlug = "elementor";
					if ("elementor" === page || "elementor-home" === page) targetSlug = "elementor";
					else if ("e-form-submissions" === page) targetSlug = "e-form-submissions";
					else if ("elementor-mcp" === page) targetSlug = "elementor-mcp";
					else if ("elementor-theme-builder" === page) targetSlug = "elementor-theme-builder";
					this.elementorHomeMenu.querySelectorAll(".wp-submenu li").forEach(function(item) {
						var link = item.querySelector("a");
						if (!link) return;
						item.classList.remove("current");
						link.classList.remove("current");
						link.setAttribute("aria-current", "");
						if (new URL(link.href, window.location.origin).searchParams.get("page") === targetSlug) {
							item.classList.add("current");
							link.classList.add("current");
							link.setAttribute("aria-current", "page");
						}
					});
				}
			}
		]);
	}();

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
//#region assets/dev/js/editor/utils/editor-one-events.js
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
	var EditorOneEventManager = /*#__PURE__*/ function() {
		function EditorOneEventManager() {
			_classCallCheck(this, EditorOneEventManager);
		}
		return _createClass(EditorOneEventManager, null, [
			{
				key: "getEventsManager",
				value: function getEventsManager() {
					var _elementorCommon;
					return (_elementorCommon = elementorCommon) === null || _elementorCommon === void 0 ? void 0 : _elementorCommon.eventsManager;
				}
			},
			{
				key: "getConfig",
				value: function getConfig() {
					var _this$getEventsManage;
					return (_this$getEventsManage = this.getEventsManager()) === null || _this$getEventsManage === void 0 ? void 0 : _this$getEventsManage.config;
				}
			},
			{
				key: "canSendEvents",
				value: function canSendEvents() {
					var _elementorCommon2;
					return ((_elementorCommon2 = elementorCommon) === null || _elementorCommon2 === void 0 || (_elementorCommon2 = _elementorCommon2.config) === null || _elementorCommon2 === void 0 || (_elementorCommon2 = _elementorCommon2.editor_events) === null || _elementorCommon2 === void 0 ? void 0 : _elementorCommon2.can_send_events) || false;
				}
			},
			{
				key: "isEventsManagerAvailable",
				value: function isEventsManagerAvailable() {
					var eventsManager = this.getEventsManager();
					return eventsManager && "function" === typeof eventsManager.dispatchEvent;
				}
			},
			{
				key: "dispatchEvent",
				value: function dispatchEvent(eventName, payload) {
					try {
						if (!this.isEventsManagerAvailable() || !this.canSendEvents()) return false;
						this.getEventsManager().dispatchEvent(eventName, payload);
						return true;
					} catch (error) {
						return false;
					}
				}
			},
			{
				key: "toLowerSnake",
				value: function toLowerSnake(value) {
					if (!value || "string" !== typeof value) return value;
					return value.replace(/\s+/g, "_").toLowerCase();
				}
			},
			{
				key: "decodeHtmlEntities",
				value: function decodeHtmlEntities(text) {
					if (!text || "string" !== typeof text) return text;
					return new DOMParser().parseFromString(text, "text/html").body.textContent || text;
				}
			},
			{
				key: "isInEditorContext",
				value: function isInEditorContext() {
					var _window$elementor;
					return "undefined" !== typeof window.elementor && !!((_window$elementor = window.elementor) !== null && _window$elementor !== void 0 && _window$elementor.documents);
				}
			},
			{
				key: "getFinderContext",
				value: function getFinderContext() {
					var _config$appTypes;
					var _config$appTypes2;
					var _config$locations;
					var _config$locations2;
					var config = this.getConfig();
					var isEditor = this.isInEditorContext();
					return {
						windowName: isEditor ? config === null || config === void 0 || (_config$appTypes = config.appTypes) === null || _config$appTypes === void 0 ? void 0 : _config$appTypes.editor : config === null || config === void 0 || (_config$appTypes2 = config.appTypes) === null || _config$appTypes2 === void 0 ? void 0 : _config$appTypes2.wpAdmin,
						targetLocation: this.toLowerSnake(isEditor ? config === null || config === void 0 || (_config$locations = config.locations) === null || _config$locations === void 0 ? void 0 : _config$locations.topBar : config === null || config === void 0 || (_config$locations2 = config.locations) === null || _config$locations2 === void 0 ? void 0 : _config$locations2.sidebar)
					};
				}
			},
			{
				key: "createBasePayload",
				value: function createBasePayload() {
					var _config$appTypes$edit;
					var _config$appTypes3;
					var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					var config = this.getConfig();
					return _objectSpread({ window_name: (_config$appTypes$edit = config === null || config === void 0 || (_config$appTypes3 = config.appTypes) === null || _config$appTypes3 === void 0 ? void 0 : _config$appTypes3.editor) !== null && _config$appTypes$edit !== void 0 ? _config$appTypes$edit : "editor" }, overrides);
				}
			},
			{
				key: "sendTopBarPublishDropdown",
				value: function sendTopBarPublishDropdown(targetName) {
					var _config$names;
					var _config$triggers;
					var _config$targetTypes;
					var _config$interactionRe;
					var _config$locations3;
					var _config$secondaryLoca;
					var _config$targetTypes2;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names = config.names) === null || _config$names === void 0 || (_config$names = _config$names.editorOne) === null || _config$names === void 0 ? void 0 : _config$names.topBarPublishDropdown, this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers = config.triggers) === null || _config$triggers === void 0 ? void 0 : _config$triggers.click),
						target_type: config === null || config === void 0 || (_config$targetTypes = config.targetTypes) === null || _config$targetTypes === void 0 ? void 0 : _config$targetTypes.dropdownItem,
						target_name: targetName,
						interaction_result: config === null || config === void 0 || (_config$interactionRe = config.interactionResults) === null || _config$interactionRe === void 0 ? void 0 : _config$interactionRe.actionSelected,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations3 = config.locations) === null || _config$locations3 === void 0 ? void 0 : _config$locations3.topBar),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca = config.secondaryLocations) === null || _config$secondaryLoca === void 0 ? void 0 : _config$secondaryLoca.publishDropdown),
						location_l2: config === null || config === void 0 || (_config$targetTypes2 = config.targetTypes) === null || _config$targetTypes2 === void 0 ? void 0 : _config$targetTypes2.dropdownItem,
						interaction_description: "User selected an action from the publish dropdown"
					}));
				}
			},
			{
				key: "sendTopBarPageList",
				value: function sendTopBarPageList(targetName) {
					var _config$names2;
					var _config$triggers2;
					var _config$targetTypes3;
					var _config$interactionRe2;
					var _config$interactionRe3;
					var _config$locations4;
					var _config$secondaryLoca2;
					var _config$targetTypes4;
					var isCreate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names2 = config.names) === null || _config$names2 === void 0 || (_config$names2 = _config$names2.editorOne) === null || _config$names2 === void 0 ? void 0 : _config$names2.topBarPageList, this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers2 = config.triggers) === null || _config$triggers2 === void 0 ? void 0 : _config$triggers2.click),
						target_type: config === null || config === void 0 || (_config$targetTypes3 = config.targetTypes) === null || _config$targetTypes3 === void 0 ? void 0 : _config$targetTypes3.dropdownItem,
						target_name: targetName,
						interaction_result: isCreate ? config === null || config === void 0 || (_config$interactionRe2 = config.interactionResults) === null || _config$interactionRe2 === void 0 ? void 0 : _config$interactionRe2.create : config === null || config === void 0 || (_config$interactionRe3 = config.interactionResults) === null || _config$interactionRe3 === void 0 ? void 0 : _config$interactionRe3.navigate,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations4 = config.locations) === null || _config$locations4 === void 0 ? void 0 : _config$locations4.topBar),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca2 = config.secondaryLocations) === null || _config$secondaryLoca2 === void 0 ? void 0 : _config$secondaryLoca2.pageListDropdown),
						location_l2: config === null || config === void 0 || (_config$targetTypes4 = config.targetTypes) === null || _config$targetTypes4 === void 0 ? void 0 : _config$targetTypes4.dropdownItem,
						interaction_description: "User selected an action from the page list dropdown"
					}));
				}
			},
			{
				key: "sendSiteSettingsSession",
				value: function sendSiteSettingsSession(_ref) {
					var _config$names3;
					var _config$triggers3;
					var _config$interactionRe4;
					var _config$locations5;
					var _config$secondaryLoca3;
					var targetType = _ref.targetType;
					var _ref$visitedItems = _ref.visitedItems;
					var visitedItems = _ref$visitedItems === void 0 ? [] : _ref$visitedItems;
					var _ref$savedItems = _ref.savedItems;
					var savedItems = _ref$savedItems === void 0 ? [] : _ref$savedItems;
					var state = _ref.state;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names3 = config.names) === null || _config$names3 === void 0 || (_config$names3 = _config$names3.editorOne) === null || _config$names3 === void 0 ? void 0 : _config$names3.siteSettingsSession, this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers3 = config.triggers) === null || _config$triggers3 === void 0 ? void 0 : _config$triggers3.click),
						target_type: targetType,
						target_name: "site_settings",
						interaction_result: config === null || config === void 0 || (_config$interactionRe4 = config.interactionResults) === null || _config$interactionRe4 === void 0 ? void 0 : _config$interactionRe4.sessionEnd,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations5 = config.locations) === null || _config$locations5 === void 0 ? void 0 : _config$locations5.leftPanel),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca3 = config.secondaryLocations) === null || _config$secondaryLoca3 === void 0 ? void 0 : _config$secondaryLoca3.siteSettings),
						interaction_description: "Records areas visited as part of the site setting session",
						metadata: {
							visited_items: visitedItems,
							saved_items: savedItems
						},
						state
					}));
				}
			},
			{
				key: "sendELibraryNav",
				value: function sendELibraryNav(tabName) {
					var _config$names4;
					var _config$triggers4;
					var _config$targetTypes5;
					var _config$interactionRe5;
					var _config$locations6;
					var _config$secondaryLoca4;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names4 = config.names) === null || _config$names4 === void 0 || (_config$names4 = _config$names4.editorOne) === null || _config$names4 === void 0 ? void 0 : _config$names4.eLibraryNav, this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers4 = config.triggers) === null || _config$triggers4 === void 0 ? void 0 : _config$triggers4.tabSelect),
						target_type: config === null || config === void 0 || (_config$targetTypes5 = config.targetTypes) === null || _config$targetTypes5 === void 0 ? void 0 : _config$targetTypes5.tab,
						target_name: this.toLowerSnake(tabName),
						interaction_result: config === null || config === void 0 || (_config$interactionRe5 = config.interactionResults) === null || _config$interactionRe5 === void 0 ? void 0 : _config$interactionRe5.tabChanged,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations6 = config.locations) === null || _config$locations6 === void 0 ? void 0 : _config$locations6.elementorLibrary),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca4 = config.secondaryLocations) === null || _config$secondaryLoca4 === void 0 ? void 0 : _config$secondaryLoca4.libraryTabs),
						interaction_description: "User navigates within elementor library"
					}));
				}
			},
			{
				key: "sendELibraryInsert",
				value: function sendELibraryInsert(_ref2) {
					var _config$triggers5;
					var _config$targetTypes6;
					var _config$interactionRe6;
					var _config$locations7;
					var _config$secondaryLoca5;
					var _config$names5;
					var assetId = _ref2.assetId;
					var assetName = _ref2.assetName;
					var libraryType = _ref2.libraryType;
					var _ref2$proRequired = _ref2.proRequired;
					var proRequired = _ref2$proRequired === void 0 ? false : _ref2$proRequired;
					var config = this.getConfig();
					var payload = this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers5 = config.triggers) === null || _config$triggers5 === void 0 ? void 0 : _config$triggers5.insert),
						target_type: config === null || config === void 0 || (_config$targetTypes6 = config.targetTypes) === null || _config$targetTypes6 === void 0 ? void 0 : _config$targetTypes6.button,
						target_name: String(assetId),
						interaction_result: config === null || config === void 0 || (_config$interactionRe6 = config.interactionResults) === null || _config$interactionRe6 === void 0 ? void 0 : _config$interactionRe6.assetInserted,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations7 = config.locations) === null || _config$locations7 === void 0 ? void 0 : _config$locations7.elementorLibrary),
						location_l1: this.toLowerSnake(libraryType),
						location_l2: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca5 = config.secondaryLocations) === null || _config$secondaryLoca5 === void 0 ? void 0 : _config$secondaryLoca5.assetCard),
						interaction_description: "User inserts block/pages from elementor library",
						metadata: {
							template_id: String(assetId),
							template_name: this.decodeHtmlEntities(assetName) || ""
						}
					});
					if (proRequired) payload.state = "pro_plan_required";
					return this.dispatchEvent(config === null || config === void 0 || (_config$names5 = config.names) === null || _config$names5 === void 0 || (_config$names5 = _config$names5.editorOne) === null || _config$names5 === void 0 ? void 0 : _config$names5.eLibraryInsert, payload);
				}
			},
			{
				key: "sendELibraryFavorite",
				value: function sendELibraryFavorite(_ref3) {
					var _config$triggers6;
					var _config$targetTypes7;
					var _config$interactionRe7;
					var _config$locations8;
					var _config$secondaryLoca6;
					var _config$names6;
					var assetId = _ref3.assetId;
					var assetName = _ref3.assetName;
					var libraryType = _ref3.libraryType;
					var isFavorite = _ref3.isFavorite;
					var _ref3$proRequired = _ref3.proRequired;
					var proRequired = _ref3$proRequired === void 0 ? false : _ref3$proRequired;
					var config = this.getConfig();
					var payload = this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers6 = config.triggers) === null || _config$triggers6 === void 0 ? void 0 : _config$triggers6.click),
						target_type: config === null || config === void 0 || (_config$targetTypes7 = config.targetTypes) === null || _config$targetTypes7 === void 0 ? void 0 : _config$targetTypes7.toggle,
						target_name: String(assetId),
						interaction_result: config === null || config === void 0 || (_config$interactionRe7 = config.interactionResults) === null || _config$interactionRe7 === void 0 ? void 0 : _config$interactionRe7.assetFavorite,
						target_value: Boolean(isFavorite),
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations8 = config.locations) === null || _config$locations8 === void 0 ? void 0 : _config$locations8.elementorLibrary),
						location_l1: this.toLowerSnake(libraryType),
						location_l2: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca6 = config.secondaryLocations) === null || _config$secondaryLoca6 === void 0 ? void 0 : _config$secondaryLoca6.assetCard),
						interaction_description: "User favorite block/pages from elementor library",
						metadata: {
							template_id: String(assetId),
							template_name: this.decodeHtmlEntities(assetName) || ""
						}
					});
					if (proRequired) payload.state = "pro_plan_required";
					return this.dispatchEvent(config === null || config === void 0 || (_config$names6 = config.names) === null || _config$names6 === void 0 || (_config$names6 = _config$names6.editorOne) === null || _config$names6 === void 0 ? void 0 : _config$names6.eLibraryFavorite, payload);
				}
			},
			{
				key: "sendELibraryGenerateAi",
				value: function sendELibraryGenerateAi(_ref4) {
					var _config$names7;
					var _config$triggers7;
					var _config$targetTypes8;
					var _config$interactionRe8;
					var _config$locations9;
					var _config$secondaryLoca7;
					var assetId = _ref4.assetId;
					var assetName = _ref4.assetName;
					var libraryType = _ref4.libraryType;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names7 = config.names) === null || _config$names7 === void 0 || (_config$names7 = _config$names7.editorOne) === null || _config$names7 === void 0 ? void 0 : _config$names7.eLibraryGenerateAi, this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers7 = config.triggers) === null || _config$triggers7 === void 0 ? void 0 : _config$triggers7.click),
						target_type: config === null || config === void 0 || (_config$targetTypes8 = config.targetTypes) === null || _config$targetTypes8 === void 0 ? void 0 : _config$targetTypes8.button,
						target_name: String(assetId),
						interaction_result: config === null || config === void 0 || (_config$interactionRe8 = config.interactionResults) === null || _config$interactionRe8 === void 0 ? void 0 : _config$interactionRe8.aiGenerate,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations9 = config.locations) === null || _config$locations9 === void 0 ? void 0 : _config$locations9.elementorLibrary),
						location_l1: this.toLowerSnake(libraryType),
						location_l2: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca7 = config.secondaryLocations) === null || _config$secondaryLoca7 === void 0 ? void 0 : _config$secondaryLoca7.assetCard),
						interaction_description: "User generated block/page based on a library asset",
						metadata: {
							template_id: String(assetId),
							template_name: this.decodeHtmlEntities(assetName) || ""
						}
					}));
				}
			},
			{
				key: "sendFinderSearchInput",
				value: function sendFinderSearchInput(_ref5) {
					var _config$triggers8;
					var _config$targetTypes9;
					var _config$interactionRe9;
					var _config$interactionRe0;
					var _config$secondaryLoca8;
					var _config$names8;
					var resultsCount = _ref5.resultsCount;
					var _ref5$searchTerm = _ref5.searchTerm;
					var searchTerm = _ref5$searchTerm === void 0 ? null : _ref5$searchTerm;
					var config = this.getConfig();
					var hasResults = resultsCount > 0;
					var finderContext = this.getFinderContext();
					var payload = this.createBasePayload({
						window_name: finderContext.windowName,
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers8 = config.triggers) === null || _config$triggers8 === void 0 ? void 0 : _config$triggers8.typing),
						target_type: config === null || config === void 0 || (_config$targetTypes9 = config.targetTypes) === null || _config$targetTypes9 === void 0 ? void 0 : _config$targetTypes9.searchInput,
						target_name: "finder",
						interaction_result: hasResults ? config === null || config === void 0 || (_config$interactionRe9 = config.interactionResults) === null || _config$interactionRe9 === void 0 ? void 0 : _config$interactionRe9.resultsUpdated : config === null || config === void 0 || (_config$interactionRe0 = config.interactionResults) === null || _config$interactionRe0 === void 0 ? void 0 : _config$interactionRe0.noResults,
						target_location: finderContext.targetLocation,
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca8 = config.secondaryLocations) === null || _config$secondaryLoca8 === void 0 ? void 0 : _config$secondaryLoca8.finder),
						interaction_description: "Finder search input, follows debounce behavior",
						metadata: { results_count: resultsCount }
					});
					if (!hasResults && searchTerm) payload.metadata.search_term = searchTerm;
					return this.dispatchEvent(config === null || config === void 0 || (_config$names8 = config.names) === null || _config$names8 === void 0 || (_config$names8 = _config$names8.editorOne) === null || _config$names8 === void 0 ? void 0 : _config$names8.finderSearchInput, payload);
				}
			},
			{
				key: "sendFinderResultSelect",
				value: function sendFinderResultSelect(choice) {
					var _config$names9;
					var _config$triggers9;
					var _config$targetTypes0;
					var _config$interactionRe1;
					var _config$secondaryLoca9;
					var _config$secondaryLoca0;
					var config = this.getConfig();
					var finderContext = this.getFinderContext();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names9 = config.names) === null || _config$names9 === void 0 || (_config$names9 = _config$names9.editorOne) === null || _config$names9 === void 0 ? void 0 : _config$names9.finderResultSelect, this.createBasePayload({
						window_name: finderContext.windowName,
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers9 = config.triggers) === null || _config$triggers9 === void 0 ? void 0 : _config$triggers9.click),
						target_type: config === null || config === void 0 || (_config$targetTypes0 = config.targetTypes) === null || _config$targetTypes0 === void 0 ? void 0 : _config$targetTypes0.searchResult,
						target_name: choice,
						interaction_result: config === null || config === void 0 || (_config$interactionRe1 = config.interactionResults) === null || _config$interactionRe1 === void 0 ? void 0 : _config$interactionRe1.selected,
						target_location: finderContext.targetLocation,
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca9 = config.secondaryLocations) === null || _config$secondaryLoca9 === void 0 ? void 0 : _config$secondaryLoca9.finder),
						location_l2: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca0 = config.secondaryLocations) === null || _config$secondaryLoca0 === void 0 ? void 0 : _config$secondaryLoca0.finderResults),
						interaction_description: "Finder search results was selected"
					}));
				}
			},
			{
				key: "sendCanvasEmptyBoxAction",
				value: function sendCanvasEmptyBoxAction(_ref6) {
					var _config$triggers0;
					var _config$targetTypes1;
					var _config$interactionRe10;
					var _config$locations0;
					var _config$secondaryLoca1;
					var _config$names0;
					var targetName = _ref6.targetName;
					var _ref6$metadata = _ref6.metadata;
					var metadata = _ref6$metadata === void 0 ? {} : _ref6$metadata;
					var _ref6$containerCreate = _ref6.containerCreated;
					var containerCreated = _ref6$containerCreate === void 0 ? null : _ref6$containerCreate;
					var config = this.getConfig();
					var payload = this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers0 = config.triggers) === null || _config$triggers0 === void 0 ? void 0 : _config$triggers0.click),
						target_type: config === null || config === void 0 || (_config$targetTypes1 = config.targetTypes) === null || _config$targetTypes1 === void 0 ? void 0 : _config$targetTypes1.buttons,
						target_name: targetName,
						interaction_result: config === null || config === void 0 || (_config$interactionRe10 = config.interactionResults) === null || _config$interactionRe10 === void 0 ? void 0 : _config$interactionRe10.selected,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations0 = config.locations) === null || _config$locations0 === void 0 ? void 0 : _config$locations0.canvas),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca1 = config.secondaryLocations) === null || _config$secondaryLoca1 === void 0 ? void 0 : _config$secondaryLoca1.emptyBox),
						interaction_description: "Empty box on canvas actions"
					});
					if (Object.keys(metadata).length > 0) payload.metadata = metadata;
					if (containerCreated !== null) payload.state = containerCreated;
					return this.dispatchEvent(config === null || config === void 0 || (_config$names0 = config.names) === null || _config$names0 === void 0 || (_config$names0 = _config$names0.editorOne) === null || _config$names0 === void 0 ? void 0 : _config$names0.canvasEmptyBoxAction, payload);
				}
			},
			{
				key: "sendWidgetPanelSearch",
				value: function sendWidgetPanelSearch(_ref7) {
					var _config$triggers1;
					var _config$targetTypes10;
					var _config$interactionRe11;
					var _config$interactionRe12;
					var _config$locations1;
					var _config$locations10;
					var _config$secondaryLoca10;
					var _config$names1;
					var resultsCount = _ref7.resultsCount;
					var _ref7$userInput = _ref7.userInput;
					var userInput = _ref7$userInput === void 0 ? null : _ref7$userInput;
					var config = this.getConfig();
					var hasResults = resultsCount > 0;
					var payload = this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers1 = config.triggers) === null || _config$triggers1 === void 0 ? void 0 : _config$triggers1.typing),
						target_type: config === null || config === void 0 || (_config$targetTypes10 = config.targetTypes) === null || _config$targetTypes10 === void 0 ? void 0 : _config$targetTypes10.searchWidget,
						target_name: "search_widget",
						interaction_result: hasResults ? config === null || config === void 0 || (_config$interactionRe11 = config.interactionResults) === null || _config$interactionRe11 === void 0 ? void 0 : _config$interactionRe11.resultsUpdated : config === null || config === void 0 || (_config$interactionRe12 = config.interactionResults) === null || _config$interactionRe12 === void 0 ? void 0 : _config$interactionRe12.noResults,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations1 = config.locations) === null || _config$locations1 === void 0 ? void 0 : _config$locations1.leftPanel),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$locations10 = config.locations) === null || _config$locations10 === void 0 ? void 0 : _config$locations10.widgetPanel),
						location_l2: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca10 = config.secondaryLocations) === null || _config$secondaryLoca10 === void 0 ? void 0 : _config$secondaryLoca10.searchBar),
						interaction_description: "Widget search input, follows debounce behavior"
					});
					if (!hasResults && userInput) payload.metadata = { user_input: userInput };
					return this.dispatchEvent(config === null || config === void 0 || (_config$names1 = config.names) === null || _config$names1 === void 0 || (_config$names1 = _config$names1.editorOne) === null || _config$names1 === void 0 ? void 0 : _config$names1.widgetPanelSearch, payload);
				}
			},
			{
				key: "createWpDashPayload",
				value: function createWpDashPayload() {
					var _config$appTypes$wpDa;
					var _config$appTypes4;
					var _config$locations11;
					var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					var config = this.getConfig();
					return this.createBasePayload(_objectSpread({
						window_name: (_config$appTypes$wpDa = config === null || config === void 0 || (_config$appTypes4 = config.appTypes) === null || _config$appTypes4 === void 0 ? void 0 : _config$appTypes4.wpDash) !== null && _config$appTypes$wpDa !== void 0 ? _config$appTypes$wpDa : "wpdash",
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations11 = config.locations) === null || _config$locations11 === void 0 ? void 0 : _config$locations11.wpDashAdmin),
						location_l2: ""
					}, overrides));
				}
			},
			{
				key: "sendWpDashElementorMenuClick",
				value: function sendWpDashElementorMenuClick() {
					var _config$names10;
					var _config$triggers10;
					var _config$targetTypes11;
					var _config$interactionRe13;
					var _config$secondaryLoca11;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names10 = config.names) === null || _config$names10 === void 0 || (_config$names10 = _config$names10.editorOne) === null || _config$names10 === void 0 ? void 0 : _config$names10.wpDashElementorMenuClick, this.createWpDashPayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers10 = config.triggers) === null || _config$triggers10 === void 0 ? void 0 : _config$triggers10.click),
						target_type: config === null || config === void 0 || (_config$targetTypes11 = config.targetTypes) === null || _config$targetTypes11 === void 0 ? void 0 : _config$targetTypes11.wpDashAdminMenuItem,
						target_name: "elementor_menu_item",
						interaction_result: config === null || config === void 0 || (_config$interactionRe13 = config.interactionResults) === null || _config$interactionRe13 === void 0 ? void 0 : _config$interactionRe13.elementorSideMenuOpened,
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca11 = config.secondaryLocations) === null || _config$secondaryLoca11 === void 0 ? void 0 : _config$secondaryLoca11.wpDashElementorCoreMenu),
						interaction_description: "core_user_clicked_elementor_menu_item"
					}));
				}
			},
			{
				key: "sendWpDashEditorSubMenuHover",
				value: function sendWpDashEditorSubMenuHover() {
					var _config$names11;
					var _config$triggers11;
					var _config$targetTypes12;
					var _config$interactionRe14;
					var _config$secondaryLoca12;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names11 = config.names) === null || _config$names11 === void 0 || (_config$names11 = _config$names11.editorOne) === null || _config$names11 === void 0 ? void 0 : _config$names11.wpDashEditorSubMenuHover, this.createWpDashPayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers11 = config.triggers) === null || _config$triggers11 === void 0 ? void 0 : _config$triggers11.hover),
						target_type: config === null || config === void 0 || (_config$targetTypes12 = config.targetTypes) === null || _config$targetTypes12 === void 0 ? void 0 : _config$targetTypes12.wpDashEditorMenu,
						target_name: "wpdash_editor_sub_menu",
						interaction_result: config === null || config === void 0 || (_config$interactionRe14 = config.interactionResults) === null || _config$interactionRe14 === void 0 ? void 0 : _config$interactionRe14.editorSubMenuOpened,
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca12 = config.secondaryLocations) === null || _config$secondaryLoca12 === void 0 ? void 0 : _config$secondaryLoca12.wpDashElementorCoreSubMenu),
						interaction_description: "core_user_hovered_sub_menu"
					}));
				}
			},
			{
				key: "sendWpDashThemeBuilderClick",
				value: function sendWpDashThemeBuilderClick() {
					var _config$names12;
					var _config$triggers12;
					var _config$targetTypes13;
					var _config$interactionRe15;
					var _config$secondaryLoca13;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names12 = config.names) === null || _config$names12 === void 0 || (_config$names12 = _config$names12.editorOne) === null || _config$names12 === void 0 ? void 0 : _config$names12.wpDashThemeBuilderClick, this.createWpDashPayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers12 = config.triggers) === null || _config$triggers12 === void 0 ? void 0 : _config$triggers12.click),
						target_type: config === null || config === void 0 || (_config$targetTypes13 = config.targetTypes) === null || _config$targetTypes13 === void 0 ? void 0 : _config$targetTypes13.wpDashSubMenuItem,
						target_name: "theme_builder_menu_item",
						interaction_result: config === null || config === void 0 || (_config$interactionRe15 = config.interactionResults) === null || _config$interactionRe15 === void 0 ? void 0 : _config$interactionRe15.themeBuilderPromotionWindow,
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca13 = config.secondaryLocations) === null || _config$secondaryLoca13 === void 0 ? void 0 : _config$secondaryLoca13.wpDashThemeBuilder),
						interaction_description: "core_user_clicked_theme_builder_menu_item"
					}));
				}
			},
			{
				key: "sendSidebarMenuItemClicked",
				value: function sendSidebarMenuItemClicked(_ref8) {
					var eventId = _ref8.eventId;
					var groupEventId = _ref8.groupEventId;
					try {
						var _config$windowNames;
						var _config$triggers13;
						var _config$targetTypes14;
						var _config$interactionRe16;
						var _config$locations12;
						var _config$names13;
						var config = this.getConfig();
						var payload = this.createBasePayload({
							window_name: config === null || config === void 0 || (_config$windowNames = config.windowNames) === null || _config$windowNames === void 0 ? void 0 : _config$windowNames.sidebarMenu,
							interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers13 = config.triggers) === null || _config$triggers13 === void 0 ? void 0 : _config$triggers13.click),
							target_type: config === null || config === void 0 || (_config$targetTypes14 = config.targetTypes) === null || _config$targetTypes14 === void 0 ? void 0 : _config$targetTypes14.link,
							target_name: eventId,
							interaction_result: config === null || config === void 0 || (_config$interactionRe16 = config.interactionResults) === null || _config$interactionRe16 === void 0 ? void 0 : _config$interactionRe16.pageOpened,
							target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations12 = config.locations) === null || _config$locations12 === void 0 ? void 0 : _config$locations12.sidebar)
						});
						if (groupEventId) payload.location_l1 = groupEventId;
						return this.dispatchEvent(config === null || config === void 0 || (_config$names13 = config.names) === null || _config$names13 === void 0 || (_config$names13 = _config$names13.editorOne) === null || _config$names13 === void 0 ? void 0 : _config$names13.sidebarMenuItemClicked, payload);
					} catch (error) {
						return false;
					}
				}
			},
			{
				key: "sendSidebarMenuGroupToggled",
				value: function sendSidebarMenuGroupToggled(_ref9) {
					var eventId = _ref9.eventId;
					var isExpanded = _ref9.isExpanded;
					try {
						var _config$interactionRe17;
						var _config$interactionRe18;
						var _config$names14;
						var _config$windowNames2;
						var _config$triggers14;
						var _config$targetTypes15;
						var _config$locations13;
						var config = this.getConfig();
						var interactionResult = isExpanded ? config === null || config === void 0 || (_config$interactionRe17 = config.interactionResults) === null || _config$interactionRe17 === void 0 ? void 0 : _config$interactionRe17.expanded : config === null || config === void 0 || (_config$interactionRe18 = config.interactionResults) === null || _config$interactionRe18 === void 0 ? void 0 : _config$interactionRe18.collapsed;
						return this.dispatchEvent(config === null || config === void 0 || (_config$names14 = config.names) === null || _config$names14 === void 0 || (_config$names14 = _config$names14.editorOne) === null || _config$names14 === void 0 ? void 0 : _config$names14.sidebarMenuGroupToggled, this.createBasePayload({
							window_name: config === null || config === void 0 || (_config$windowNames2 = config.windowNames) === null || _config$windowNames2 === void 0 ? void 0 : _config$windowNames2.sidebarMenu,
							interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers14 = config.triggers) === null || _config$triggers14 === void 0 ? void 0 : _config$triggers14.click),
							target_type: config === null || config === void 0 || (_config$targetTypes15 = config.targetTypes) === null || _config$targetTypes15 === void 0 ? void 0 : _config$targetTypes15.toggle,
							target_name: eventId,
							interaction_result: interactionResult,
							target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations13 = config.locations) === null || _config$locations13 === void 0 ? void 0 : _config$locations13.sidebar)
						}));
					} catch (error) {
						return false;
					}
				}
			}
		]);
	}();

//#endregion
//#region modules/editor-one/assets/js/admin-menu/classes/menu-events-tracker.js
	var SELECTORS = {
		elementorMenuLink: "#toplevel_page_elementor-home > a.menu-top",
		themeBuilderItem: "[data-slug=\"elementor-theme-builder\"] a, .wp-submenu a[href*=\"page=elementor-theme-builder\"]"
	};
	var MenuEventsTracker = /*#__PURE__*/ function() {
		function MenuEventsTracker() {
			_classCallCheck(this, MenuEventsTracker);
		}
		return _createClass(MenuEventsTracker, null, [
			{
				key: "attach",
				value: function attach() {
					this.attachElementorMenuClick();
					this.attachThemeBuilderClick();
				}
			},
			{
				key: "attachElementorMenuClick",
				value: function attachElementorMenuClick() {
					var menuLink = document.querySelector(SELECTORS.elementorMenuLink);
					if (!menuLink) return;
					menuLink.addEventListener("click", function() {
						EditorOneEventManager.sendWpDashElementorMenuClick();
					});
				}
			},
			{
				key: "attachThemeBuilderClick",
				value: function attachThemeBuilderClick() {
					document.addEventListener("click", function(event) {
						if (event.target.closest(SELECTORS.themeBuilderItem)) EditorOneEventManager.sendWpDashThemeBuilderClick();
					}, true);
				}
			},
			{
				key: "trackEditorSubMenuOpened",
				value: function trackEditorSubMenuOpened() {
					EditorOneEventManager.sendWpDashEditorSubMenuHover();
				}
			}
		]);
	}();

//#endregion
//#region modules/editor-one/assets/js/admin-menu/classes/flyout-interaction-handler.js
	var FlyoutInteractionHandler = /*#__PURE__*/ function() {
		function FlyoutInteractionHandler() {
			_classCallCheck(this, FlyoutInteractionHandler);
			this.activeMenu = null;
			this.activeParent = null;
			this.closeTimeout = null;
			this.lastMousePos = null;
			this.exitPoint = null;
			this.mouseMoveHandler = null;
		}
		return _createClass(FlyoutInteractionHandler, [
			{
				key: "handle",
				value: function handle() {
					this.setupFlyoutMenus();
					this.setupMobileSupport();
				}
			},
			{
				key: "setupFlyoutMenus",
				value: function setupFlyoutMenus() {
					var _this = this;
					document.querySelectorAll("#adminmenu li.elementor-has-flyout").forEach(function(parentLi) {
						var flyoutMenu = parentLi.querySelector(".elementor-submenu-flyout");
						if (!flyoutMenu) return;
						_this.attachHoverEvents(parentLi, flyoutMenu);
						_this.attachFocusEvents(parentLi, flyoutMenu);
						_this.attachKeyboardEvents(parentLi, flyoutMenu);
					});
				}
			},
			{
				key: "attachHoverEvents",
				value: function attachHoverEvents(parentLi, flyoutMenu) {
					var _this2 = this;
					parentLi.addEventListener("mouseenter", function() {
						if (_this2.activeMenu && !_this2.activeMenu.contains(parentLi) && _this2.activeMenu !== flyoutMenu) {
							if (!_this2.isCursorInSafeZone()) _this2.hideFlyout(_this2.activeMenu);
						}
						_this2.clearCloseTimeout();
						_this2.showFlyout(parentLi, flyoutMenu);
					});
					parentLi.addEventListener("mouseleave", function(event) {
						_this2.exitPoint = {
							x: event.clientX,
							y: event.clientY
						};
						_this2.scheduleClose(parentLi, flyoutMenu);
					});
					flyoutMenu.addEventListener("mouseenter", function() {
						_this2.clearCloseTimeout();
						_this2.stopMouseTracking();
					});
					flyoutMenu.addEventListener("mouseleave", function(event) {
						_this2.exitPoint = {
							x: event.clientX,
							y: event.clientY
						};
						_this2.scheduleClose(parentLi, flyoutMenu);
					});
				}
			},
			{
				key: "attachFocusEvents",
				value: function attachFocusEvents(parentLi, flyoutMenu) {
					var _this3 = this;
					var parentLink = parentLi.querySelector(":scope > a");
					if (parentLink) parentLink.addEventListener("focus", function() {
						_this3.showFlyout(parentLi, flyoutMenu);
					});
					flyoutMenu.addEventListener("focusout", function(event) {
						if (!parentLi.contains(event.relatedTarget)) _this3.hideFlyout(flyoutMenu);
					});
				}
			},
			{
				key: "attachKeyboardEvents",
				value: function attachKeyboardEvents(parentLi, flyoutMenu) {
					var _this4 = this;
					parentLi.addEventListener("keydown", function(event) {
						_this4.handleKeyNavigation(event, parentLi, flyoutMenu);
					});
				}
			},
			{
				key: "showFlyout",
				value: function showFlyout(parentLi, flyoutMenu) {
					var wasAlreadyVisible = flyoutMenu.classList.contains("elementor-submenu-flyout-visible");
					if (this.activeMenu && this.activeMenu !== flyoutMenu) this.hideFlyout(this.activeMenu);
					this.exitPoint = null;
					this.positionFlyout(parentLi, flyoutMenu);
					flyoutMenu.classList.add("elementor-submenu-flyout-visible");
					this.activeMenu = flyoutMenu;
					this.activeParent = parentLi;
					if (!wasAlreadyVisible) MenuEventsTracker.trackEditorSubMenuOpened();
				}
			},
			{
				key: "hideFlyout",
				value: function hideFlyout(flyoutMenu) {
					flyoutMenu.classList.remove("elementor-submenu-flyout-visible");
					if (this.activeMenu === flyoutMenu) {
						this.activeMenu = null;
						this.activeParent = null;
						this.exitPoint = null;
						this.stopMouseTracking();
					}
				}
			},
			{
				key: "scheduleClose",
				value: function scheduleClose(parentLi, flyoutMenu) {
					var _this5 = this;
					this.clearCloseTimeout();
					this.startMouseTracking(parentLi, flyoutMenu);
					this.closeTimeout = setTimeout(function() {
						_this5.checkAndClose(flyoutMenu);
					}, 300);
				}
			},
			{
				key: "checkAndClose",
				value: function checkAndClose(flyoutMenu) {
					var _this6 = this;
					if (!this.activeMenu) return;
					if (!this.isCursorInSafeZone()) this.hideFlyout(flyoutMenu);
					else this.closeTimeout = setTimeout(function() {
						_this6.checkAndClose(flyoutMenu);
					}, 300);
				}
			},
			{
				key: "clearCloseTimeout",
				value: function clearCloseTimeout() {
					if (this.closeTimeout) {
						clearTimeout(this.closeTimeout);
						this.closeTimeout = null;
					}
				}
			},
			{
				key: "startMouseTracking",
				value: function startMouseTracking() {
					var _this7 = this;
					this.stopMouseTracking();
					this.mouseMoveHandler = function(event) {
						_this7.lastMousePos = {
							x: event.clientX,
							y: event.clientY
						};
					};
					document.addEventListener("mousemove", this.mouseMoveHandler);
				}
			},
			{
				key: "stopMouseTracking",
				value: function stopMouseTracking() {
					if (this.mouseMoveHandler) {
						document.removeEventListener("mousemove", this.mouseMoveHandler);
						this.mouseMoveHandler = null;
					}
					this.lastMousePos = null;
				}
			},
			{
				key: "isCursorInSafeZone",
				value: function isCursorInSafeZone() {
					if (!this.lastMousePos || !this.activeMenu || !this.activeParent) return false;
					var cursor = this.lastMousePos;
					var parentRect = this.activeParent.getBoundingClientRect();
					if (this.isPointInRect(cursor, parentRect)) return true;
					var flyoutRect = this.activeMenu.getBoundingClientRect();
					if (this.isPointInRect(cursor, flyoutRect)) return true;
					return this.isPointInTriangle(cursor, parentRect, flyoutRect);
				}
			},
			{
				key: "isPointInRect",
				value: function isPointInRect(point, rect) {
					return point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom;
				}
			},
			{
				key: "isPointInTriangle",
				value: function isPointInTriangle(cursor, parentRect, flyoutRect) {
					var exitX = this.exitPoint ? this.exitPoint.x : parentRect.right;
					var distParent = Math.abs(exitX - parentRect.right);
					var distFlyout = Math.abs(exitX - flyoutRect.left);
					var triangleApex;
					var baseTop;
					var baseBottom;
					if (distParent < distFlyout) {
						triangleApex = this.exitPoint || {
							x: parentRect.right,
							y: parentRect.top + parentRect.height / 2
						};
						baseTop = {
							x: flyoutRect.left,
							y: flyoutRect.top - 100
						};
						baseBottom = {
							x: flyoutRect.left,
							y: flyoutRect.bottom + 100
						};
					} else {
						triangleApex = this.exitPoint || {
							x: flyoutRect.left,
							y: flyoutRect.top + flyoutRect.height / 2
						};
						baseTop = {
							x: parentRect.right,
							y: parentRect.top - 100
						};
						baseBottom = {
							x: parentRect.right,
							y: parentRect.bottom + 100
						};
					}
					return this.pointInTriangle(cursor, triangleApex, baseTop, baseBottom);
				}
			},
			{
				key: "pointInTriangle",
				value: function pointInTriangle(p, v1, v2, v3) {
					var sign = function sign(p1, p2, p3) {
						return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
					};
					var d1 = sign(p, v1, v2);
					var d2 = sign(p, v2, v3);
					var d3 = sign(p, v3, v1);
					return !((0 > d1 || 0 > d2 || 0 > d3) && (0 < d1 || 0 < d2 || 0 < d3));
				}
			},
			{
				key: "positionFlyout",
				value: function positionFlyout(parentLi, flyoutMenu) {
					var windowHeight = window.innerHeight;
					var flyoutHeight = flyoutMenu.offsetHeight;
					var relativeTop = parentLi.getBoundingClientRect().top;
					if (relativeTop + flyoutHeight > windowHeight) {
						var newTop = windowHeight - flyoutHeight - relativeTop;
						if (newTop < -relativeTop) newTop = -relativeTop + 10;
						flyoutMenu.style.top = newTop + "px";
					} else delete flyoutMenu.style.top;
				}
			},
			{
				key: "handleKeyNavigation",
				value: function handleKeyNavigation(event, parentLi, flyoutMenu) {
					var allLinks = flyoutMenu.querySelectorAll("a");
					var focusedLink = flyoutMenu.querySelector("a:focus");
					var currentIndex = Array.from(allLinks).indexOf(focusedLink);
					var isVisible = flyoutMenu.classList.contains("elementor-submenu-flyout-visible");
					switch (event.key) {
						case "ArrowRight":
							if (!isVisible) {
								var _allLinks$;
								event.preventDefault();
								this.showFlyout(parentLi, flyoutMenu);
								(_allLinks$ = allLinks[0]) === null || _allLinks$ === void 0 || _allLinks$.focus();
							}
							break;
						case "ArrowLeft":
							if (isVisible) {
								var _parentLi$querySelect;
								event.preventDefault();
								this.hideFlyout(flyoutMenu);
								(_parentLi$querySelect = parentLi.querySelector(":scope > a")) === null || _parentLi$querySelect === void 0 || _parentLi$querySelect.focus();
							}
							break;
						case "ArrowDown":
							if (isVisible && currentIndex >= 0) {
								var _allLinks$nextIndex;
								event.preventDefault();
								(_allLinks$nextIndex = allLinks[(currentIndex + 1) % allLinks.length]) === null || _allLinks$nextIndex === void 0 || _allLinks$nextIndex.focus();
							}
							break;
						case "ArrowUp":
							if (isVisible && currentIndex >= 0) {
								var _allLinks$prevIndex;
								event.preventDefault();
								(_allLinks$prevIndex = allLinks[(currentIndex - 1 + allLinks.length) % allLinks.length]) === null || _allLinks$prevIndex === void 0 || _allLinks$prevIndex.focus();
							}
							break;
						case "Escape":
							if (isVisible) {
								var _parentLi$querySelect2;
								event.preventDefault();
								this.hideFlyout(flyoutMenu);
								(_parentLi$querySelect2 = parentLi.querySelector(":scope > a")) === null || _parentLi$querySelect2 === void 0 || _parentLi$querySelect2.focus();
							}
							break;
					}
				}
			},
			{
				key: "setupMobileSupport",
				value: function setupMobileSupport() {
					var _this8 = this;
					if (window.innerWidth > 782) return;
					document.querySelectorAll("#adminmenu li.elementor-has-flyout > a").forEach(function(link) {
						link.addEventListener("click", function(event) {
							_this8.handleMobileClick(event, link);
						});
					});
					document.addEventListener("click", function(event) {
						_this8.handleDocumentClick(event);
					});
				}
			},
			{
				key: "handleMobileClick",
				value: function handleMobileClick(event, link) {
					var parentLi = link.parentElement;
					if (!parentLi.querySelector(".elementor-submenu-flyout")) return;
					if (parentLi.classList.contains("elementor-flyout-open")) return;
					event.preventDefault();
					document.querySelectorAll("#adminmenu li.elementor-has-flyout").forEach(function(item) {
						item.classList.remove("elementor-flyout-open");
					});
					parentLi.classList.add("elementor-flyout-open");
				}
			},
			{
				key: "handleDocumentClick",
				value: function handleDocumentClick(event) {
					if (!event.target.closest("#adminmenu li.elementor-has-flyout")) document.querySelectorAll("#adminmenu li.elementor-has-flyout").forEach(function(item) {
						item.classList.remove("elementor-flyout-open");
					});
				}
			}
		]);
	}();

//#endregion
//#region modules/editor-one/assets/js/admin-menu/app.js
	var EditorOneMenu = /*#__PURE__*/ function() {
		function EditorOneMenu() {
			var _window;
			_classCallCheck(this, EditorOneMenu);
			this.config = ((_window = window) === null || _window === void 0 ? void 0 : _window.editorOneMenuConfig) || {};
		}
		return _createClass(EditorOneMenu, [
			{
				key: "init",
				value: function init() {
					MenuEventsTracker.attach();
					if (this.isSidebarNavigationActive()) {
						new SidebarMenuHandler();
						return;
					}
					this.buildFlyoutMenus();
				}
			},
			{
				key: "isSidebarNavigationActive",
				value: function isSidebarNavigationActive() {
					return document.body.classList.contains("e-has-sidebar-navigation");
				}
			},
			{
				key: "buildFlyoutMenus",
				value: function buildFlyoutMenus() {
					if (new FlyoutMenuRenderer(this.config).render()) new FlyoutInteractionHandler().handle();
				}
			}
		]);
	}();
	var initEditorOneMenu = function initEditorOneMenu() {
		new EditorOneMenu().init();
	};
	if ("loading" === document.readyState) document.addEventListener("DOMContentLoaded", initEditorOneMenu);
	else initEditorOneMenu();

//#endregion
})();
//# sourceMappingURL=editor-one-menu.js.map