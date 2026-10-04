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
//#region node_modules/@babel/runtime/helpers/esm/superPropBase.js
	function _superPropBase(t, o) {
		for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
		return t;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/get.js
	function _get() {
		return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
			var p = _superPropBase(e, t);
			if (p) {
				var n = Object.getOwnPropertyDescriptor(p, t);
				return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
			}
		}, _get.apply(null, arguments);
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
//#region modules/admin-bar/assets/js/frontend/module.js
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
	function _superPropGet(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	var AdminBar = /*#__PURE__*/ function(_elementorModules$Vie) {
		function AdminBar() {
			_classCallCheck(this, AdminBar);
			return _callSuper(this, AdminBar, arguments);
		}
		_inherits(AdminBar, _elementorModules$Vie);
		return _createClass(AdminBar, [
			{
				key: "getDefaultSettings",
				value: function getDefaultSettings() {
					return {
						prefixes: { adminBarId: "wp-admin-bar-" },
						classes: {
							adminBarItem: "ab-item",
							adminBarItemTitle: "elementor-edit-link-title",
							adminBarItemSubTitle: "elementor-edit-link-type",
							adminBarNonLinkItem: "ab-empty-item",
							adminBarSubItemsWrapper: "ab-sub-wrapper",
							adminBarSubItems: "ab-submenu"
						},
						selectors: {
							adminBar: "#wp-admin-bar-root-default",
							editMenuItem: "#wp-admin-bar-edit",
							newMenuItem: "#wp-admin-bar-new-content"
						}
					};
				}
			},
			{
				key: "getDefaultElements",
				value: function getDefaultElements() {
					var _this$getSettings = this.getSettings("selectors");
					var adminBar = _this$getSettings.adminBar;
					var editMenuItem = _this$getSettings.editMenuItem;
					var newMenuItem = _this$getSettings.newMenuItem;
					return {
						$adminBar: jQuery(adminBar),
						$editMenuItem: jQuery(editMenuItem),
						$newMenuItem: jQuery(newMenuItem)
					};
				}
			},
			{
				key: "onInit",
				value: function onInit() {
					_superPropGet(AdminBar, "onInit", this, 3)([]);
					this.createMenu(elementorAdminBarConfig);
				}
			},
			{
				key: "createMenu",
				value: function createMenu(adminBarConfig) {
					var $items = this.createMenuItems(Object.values(adminBarConfig));
					if (this.elements.$editMenuItem.length) this.elements.$editMenuItem.after($items);
					else if (this.elements.$newMenuItem.length) this.elements.$newMenuItem.after($items);
					else this.elements.$adminBar.append($items);
				}
			},
			{
				key: "createMenuItems",
				value: function createMenuItems(items) {
					var _this = this;
					return items.map(function(item) {
						return _this.createMenuItem(item);
					});
				}
			},
			{
				key: "createMenuItem",
				value: function createMenuItem(item) {
					var children = item.children ? Object.values(item.children) : [];
					var id = "".concat(this.getSettings("prefixes.adminBarId")).concat(item.id);
					var $title = jQuery("<span>", {
						class: this.getSettings("classes.adminBarItemTitle"),
						html: item.title
					});
					var $subTitle = item.sub_title ? jQuery("<span>", {
						class: this.getSettings("classes.adminBarItemSubTitle"),
						html: item.sub_title
					}) : null;
					var $item = jQuery(item.href ? "<a>" : "<div>", {
						"aria-haspopup": children.length ? true : null,
						class: [
							this.getSettings("classes.adminBarItem"),
							item.href ? "" : this.getSettings("classes.adminBarNonLinkItem"),
							item.class
						].join(" "),
						href: item.href
					}).append([$title, $subTitle]);
					return jQuery("<li>", {
						id,
						class: children.length ? "menupop" : "" + (item.parent_class || "elementor-general-section")
					}).append([$item, children.length ? this.createSubMenuItems(id, children) : null]);
				}
			},
			{
				key: "createSubMenuItems",
				value: function createSubMenuItems(parentId, children) {
					var $list = jQuery("<ul>", {
						class: this.getSettings("classes.adminBarSubItems"),
						id: "".concat(parentId, "-default")
					}).append(this.createMenuItems(children));
					return jQuery("<div>", { class: this.getSettings("classes.adminBarSubItemsWrapper") }).append($list);
				}
			}
		]);
	}(elementorModules.ViewModule);
	document.addEventListener("DOMContentLoaded", function() {
		return new AdminBar();
	});

//#endregion
})();
//# sourceMappingURL=elementor-admin-bar.js.map