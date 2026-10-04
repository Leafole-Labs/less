(function(_wordpress_i18n) {

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
//#region node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
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
//#region modules/notes/assets/js/modules/context-menu/notes-context-menu.js
	function _callSuper$2(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$2() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$2, "_callSuper");
	function _isNativeReflectConstruct$2() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$2, "_isNativeReflectConstruct");
	var NotesContextMenu = /*#__PURE__*/ function(_elementorModules$edi) {
		function NotesContextMenu() {
			_classCallCheck(this, NotesContextMenu);
			return _callSuper$2(this, NotesContextMenu, arguments);
		}
		_inherits(NotesContextMenu, _elementorModules$edi);
		return _createClass(NotesContextMenu, [
			{
				key: "onInit",
				value: function onInit() {
					this.contextMenuNotesGroup();
				}
			},
			{
				key: "contextMenuNotesGroup",
				value: function contextMenuNotesGroup() {
					var _this = this;
					[
						"widget",
						"section",
						"column",
						"container"
					].forEach(function(type) {
						elementor.hooks.addFilter("elements/".concat(type, "/contextMenuGroups"), _this.contextMenuAddGroup);
					});
				}
			},
			{
				key: "contextMenuAddGroup",
				value: function contextMenuAddGroup(groups) {
					var deleteGroup = _.findWhere(groups, { name: "delete" });
					var deleteGroupIndex = groups.indexOf(deleteGroup);
					if (-1 === deleteGroupIndex) deleteGroupIndex = groups.length;
					groups.splice(deleteGroupIndex, 0, {
						name: "notes",
						actions: [{
							name: "open_notes",
							title: (0, _wordpress_i18n.__)("Notes", "elementor"),
							shortcut: "<i class=\"eicon-pro-icon\"></i>",
							promotionURL: "https://go.elementor.com/go-pro-notes-context-menu/",
							isEnabled: function isEnabled() {
								return false;
							},
							callback: function callback() {}
						}]
					});
					return groups;
				}
			}
		]);
	}(elementorModules.editor.utils.Module);

//#endregion
//#region modules/notes/assets/js/modules/index.js
	var modules_exports = /* @__PURE__ */ __exportAll({ NotesContextMenu: () => NotesContextMenu });

//#endregion
//#region modules/notes/assets/js/hooks/ui/panel/state-ready/notes-add-panel-menu-item.js
	function _callSuper$1(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$1() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$1, "_callSuper");
	function _isNativeReflectConstruct$1() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$1, "_isNativeReflectConstruct");
	var NotesAddPanelMenuItem = /*#__PURE__*/ function(_$e$modules$hookUI$Af) {
		function NotesAddPanelMenuItem() {
			_classCallCheck(this, NotesAddPanelMenuItem);
			return _callSuper$1(this, NotesAddPanelMenuItem, arguments);
		}
		_inherits(NotesAddPanelMenuItem, _$e$modules$hookUI$Af);
		return _createClass(NotesAddPanelMenuItem, [
			{
				key: "getCommand",
				value: function getCommand() {
					return "panel/state-ready";
				}
			},
			{
				key: "getId",
				value: function getId() {
					return "notes-add-panel-menu-item";
				}
			},
			{
				key: "apply",
				value: function apply() {
					elementor.modules.layouts.panel.pages.menu.Menu.addItem({
						name: "notes",
						icon: "eicon-commenting-o",
						title: (0, _wordpress_i18n.__)("Notes", "elementor") + "<i class=\"elementor-panel-menu-item-title-badge eicon-pro-icon\"></i>",
						callback: function callback() {
							var hasProAndNotConnected = elementor.helpers.hasProAndNotConnected();
							elementor.promotion.showDialog({
								title: (0, _wordpress_i18n.__)("Notes", "elementor"),
								content: (0, _wordpress_i18n.__)("With Notes, teamwork gets even better. Stay in sync with comments, feedback & more on your website.", "elementor"),
								position: {
									blockStart: "-3",
									inlineStart: "+10"
								},
								targetElement: this.$el,
								actionButton: {
									url: hasProAndNotConnected ? elementorProEditorConfig.urls.connect : elementor.config.promotions.notes.upgrade_url || "https://go.elementor.com/go-pro-notes/",
									text: hasProAndNotConnected ? (0, _wordpress_i18n.__)("Connect & Activate", "elementor") : (0, _wordpress_i18n.__)("Upgrade", "elementor")
								}
							});
						}
					}, "navigate_from_page", "finder");
				}
			}
		]);
	}($e.modules.hookUI.After);

//#endregion
//#region modules/notes/assets/js/hooks/index.js
	var hooks_exports = /* @__PURE__ */ __exportAll({ NotesAddPanelMenuItem: () => NotesAddPanelMenuItem });

//#endregion
//#region modules/notes/assets/js/e-component.js
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
	var EComponent = /*#__PURE__*/ function(_$e$modules$Component) {
		function EComponent(args) {
			var _this;
			_classCallCheck(this, EComponent);
			_this = _callSuper(this, EComponent, [args]);
			_this.loadModules();
			return _this;
		}
		/**
		* @return {string} The namespace of the component
		*/
		_inherits(EComponent, _$e$modules$Component);
		return _createClass(EComponent, [
			{
				key: "getNamespace",
				value: function getNamespace() {
					return "notes";
				}
			},
			{
				key: "defaultHooks",
				value: function defaultHooks() {
					return this.importHooks(hooks_exports);
				}
			},
			{
				key: "loadModules",
				value: function loadModules() {
					for (var key in modules_exports) new modules_exports[key]();
				}
			}
		]);
	}($e.modules.ComponentBase);

//#endregion
//#region modules/notes/assets/js/notes.js
	window.top.$e.components.register(new EComponent());

//#endregion
})(wp.i18n);
//# sourceMappingURL=notes.js.map