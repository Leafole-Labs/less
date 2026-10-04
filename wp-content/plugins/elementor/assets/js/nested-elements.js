(function(_wordpress_i18n, react) {

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
	var __esmMin = (fn, res, err) => () => {
		if (err) throw err[0];
		try {
			return fn && (res = fn(fn = 0)), res;
		} catch (e) {
			throw err = [e], e;
		}
	};
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
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

//#region node_modules/@babel/runtime/helpers/esm/classCallCheck.js
	function _classCallCheck(a, n) {
		if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
	}
	var init_classCallCheck = __esmMin((() => {}));

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
	var init_typeof = __esmMin((() => {}));

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
	var init_toPrimitive = __esmMin((() => {
		init_typeof();
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
	function toPropertyKey(t) {
		var i = toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	var init_toPropertyKey = __esmMin((() => {
		init_typeof();
		init_toPrimitive();
	}));

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
	var init_createClass = __esmMin((() => {
		init_toPropertyKey();
	}));

//#endregion
//#region assets/dev/js/utils/events.js
	init_classCallCheck();
	init_createClass();
	var Events = /*#__PURE__*/ function() {
		function Events() {
			_classCallCheck(this, Events);
		}
		return _createClass(Events, null, [{
			key: "dispatch",
			value: function dispatch(context, event) {
				var data = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
				var bcEvent = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
				context = context instanceof jQuery ? context[0] : context;
				if (bcEvent) context.dispatchEvent(new CustomEvent(bcEvent, { detail: data }));
				context.dispatchEvent(new CustomEvent(event, { detail: data }));
			}
		}]);
	}();

//#endregion
//#region \0vite/preload-helper.js
	var scriptRel = "modulepreload";
	var assetsURL = function(dep) {
		return "/" + dep;
	};
	var seen = {};
	var __vitePreload = function preload(baseModule, deps, importerUrl) {
		let promise = Promise.resolve();
		if (false              && deps && deps.length > 0) {
			const links = document.getElementsByTagName("link");
			const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
			const cspNonce = (cspNonceMeta === null || cspNonceMeta === void 0 ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta === null || cspNonceMeta === void 0 ? void 0 : cspNonceMeta.getAttribute("nonce"));
			function allSettled(promises) {
				return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
					status: "fulfilled",
					value
				}), (reason) => ({
					status: "rejected",
					reason
				}))));
			}
			function importMetaResolve(specifier) {
				if ({}.resolve) return {}.resolve(specifier);
				return new URL(
					specifier,
					/** #__KEEP__ */
					{}.url
				).href;
			}
			promise = allSettled(deps.map((dep) => {
				dep = assetsURL(dep, importerUrl);
				dep = importMetaResolve(dep);
				if (dep in seen) return;
				seen[dep] = true;
				const isCss = dep.endsWith(".css");
				for (let i = links.length - 1; i >= 0; i--) {
					const link = links[i];
					if (link.href === dep && (!isCss || link.rel === "stylesheet")) return;
				}
				const link = document.createElement("link");
				link.rel = isCss ? "stylesheet" : scriptRel;
				if (!isCss) link.as = "script";
				link.crossOrigin = "";
				link.href = dep;
				if (cspNonce) link.setAttribute("nonce", cspNonce);
				document.head.appendChild(link);
				if (isCss) return new Promise((res, rej) => {
					link.addEventListener("load", res);
					link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
				});
			}));
		}
		function handlePreloadError(err) {
			const e = new Event("vite:preloadError", { cancelable: true });
			e.payload = err;
			window.dispatchEvent(e);
			if (!e.defaultPrevented) throw err;
		}
		return promise.then((res) => {
			for (const item of res || []) {
				if (item.status !== "rejected") continue;
				handlePreloadError(item.reason);
			}
			return baseModule().catch(handlePreloadError);
		});
	};

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
	function _assertThisInitialized(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e;
	}
	var init_assertThisInitialized = __esmMin((() => {}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
	function _possibleConstructorReturn(t, e) {
		if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return _assertThisInitialized(t);
	}
	var init_possibleConstructorReturn = __esmMin((() => {
		init_typeof();
		init_assertThisInitialized();
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
	function _getPrototypeOf(t) {
		return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t);
		}, _getPrototypeOf(t);
	}
	var init_getPrototypeOf = __esmMin((() => {}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/superPropBase.js
	function _superPropBase(t, o) {
		for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
		return t;
	}
	var init_superPropBase = __esmMin((() => {
		init_getPrototypeOf();
	}));

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
	var init_get = __esmMin((() => {
		init_superPropBase();
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
	function _setPrototypeOf(t, e) {
		return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
			return t.__proto__ = e, t;
		}, _setPrototypeOf(t, e);
	}
	var init_setPrototypeOf = __esmMin((() => {}));

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
	var init_inherits = __esmMin((() => {
		init_setPrototypeOf();
	}));

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
	var init_defineProperty = __esmMin((() => {
		init_toPropertyKey();
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/utils.js
	function extractNestedItemTitle(container, index) {
		var title = container.view.model.config.defaults.elements_title;
		return (0, _wordpress_i18n.sprintf)(title, index);
	}
	function isWidgetSupportNesting(widgetType) {
		var widgetConfig = elementor.widgetsCache[widgetType];
		if (!widgetConfig) return false;
		return widgetConfig.support_nesting;
	}
	function isWidgetSupportAtomicRepeaters(widgetType) {
		var widgetConfig = elementor.widgetsCache[widgetType];
		if (!widgetConfig) return false;
		return widgetConfig.support_improved_repeaters;
	}
	function findChildContainerOrFail(container, index) {
		var childView = container.view.children.findByIndex(index);
		if (!childView) throw new Error("Child container was not found for the current repeater item.");
		return childView.getContainer();
	}
	function shouldUseAtomicRepeaters(widgetType) {
		return isWidgetSupportNesting(widgetType) && isWidgetSupportAtomicRepeaters(widgetType);
	}
	function sortViewsByModels(container) {
		var models = container.model.get("elements").models;
		var children = container.view.children;
		var updatedViews = {};
		models.forEach(function(model, index) {
			var view = children.findByModel(model);
			view._index = index;
			updatedViews[view.cid] = view;
		});
		return updatedViews;
	}
	var init_utils = __esmMin((() => {}));

//#endregion
//#region modules/nested-elements/assets/js/editor/nested-repeater/models/nested-model-base.js
	function _callSuper$12(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$12() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	function _isNativeReflectConstruct$12() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$12 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	function _superPropGet$7(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	var NestedModelBase;
	var init_nested_model_base = __esmMin((() => {
		init_classCallCheck();
		init_createClass();
		init_possibleConstructorReturn();
		init_getPrototypeOf();
		init_get();
		init_inherits();
		init_utils();
		__name(_callSuper$12, "_callSuper");
		__name(_isNativeReflectConstruct$12, "_isNativeReflectConstruct");
		__name(_superPropGet$7, "_superPropGet");
		NestedModelBase = /*#__PURE__*/ function(_elementor$modules$el) {
			function NestedModelBase() {
				_classCallCheck(this, NestedModelBase);
				return _callSuper$12(this, NestedModelBase, arguments);
			}
			_inherits(NestedModelBase, _elementor$modules$el);
			return _createClass(NestedModelBase, [
				{
					key: "initialize",
					value: function initialize(options) {
						this.config = elementor.widgetsCache[options.widgetType];
						this.set("supportRepeaterChildren", true);
						if (0 === this.get("elements").length && $e.commands.currentTrace.includes("document/elements/create")) this.onElementCreate();
						_superPropGet$7(NestedModelBase, "initialize", this, 3)([options]);
					}
				},
				{
					key: "isValidChild",
					value: function isValidChild(childModel) {
						var parentElType = this.get("elType");
						return "container" === childModel.get("elType") && "widget" === parentElType && isWidgetSupportNesting(this.get("widgetType")) && childModel.get("isLocked");
					}
				},
				{
					key: "getDefaultChildren",
					value: function getDefaultChildren() {
						var defaults = this.config.defaults;
						var result = [];
						defaults.elements.forEach(function(element) {
							element.id = elementorCommon.helpers.getUniqueId();
							element.settings = element.settings || {};
							element.elements = element.elements || [];
							element.isLocked = true;
							result.push(element);
						});
						return result;
					}
				},
				{
					key: "onElementCreate",
					value: function onElementCreate() {
						this.set("elements", this.getDefaultChildren());
					}
				}
			]);
		}(elementor.modules.elements.models.Element);
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/nested-repeater/views/nested-view-base.js
	function _callSuper$11(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$11() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	function _isNativeReflectConstruct$11() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$11 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	function _superPropGet$6(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	var NestedViewBase;
	var init_nested_view_base = __esmMin((() => {
		init_classCallCheck();
		init_createClass();
		init_possibleConstructorReturn();
		init_getPrototypeOf();
		init_get();
		init_inherits();
		__name(_callSuper$11, "_callSuper");
		__name(_isNativeReflectConstruct$11, "_isNativeReflectConstruct");
		__name(_superPropGet$6, "_superPropGet");
		NestedViewBase = /*#__PURE__*/ function(_elementor$modules$el) {
			function NestedViewBase() {
				_classCallCheck(this, NestedViewBase);
				return _callSuper$11(this, NestedViewBase, arguments);
			}
			_inherits(NestedViewBase, _elementor$modules$el);
			return _createClass(NestedViewBase, [
				{
					key: "getChildViewContainer",
					value: function getChildViewContainer(containerView, childView) {
						var _this$model$config$de = this.model.config.defaults;
						var customSelector = _this$model$config$de.elements_placeholder_selector;
						var childContainerSelector = _this$model$config$de.child_container_placeholder_selector;
						if (childView !== void 0 && childView._index !== void 0 && childContainerSelector) return containerView.$el.find("".concat(childContainerSelector, ":nth-child(").concat(childView._index + 1, ")"));
						if (customSelector) return containerView.$el.find(this.model.config.defaults.elements_placeholder_selector);
						return _superPropGet$6(NestedViewBase, "getChildViewContainer", this, 3)([containerView, childView]);
					}
				},
				{
					key: "getChildType",
					value: function getChildType() {
						return ["container"];
					}
				},
				{
					key: "onRender",
					value: function onRender() {
						_superPropGet$6(NestedViewBase, "onRender", this, 3)([]);
						this.normalizeAttributes();
					}
				}
			]);
		}(elementor.modules.elements.views.BaseWidget);
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/nested-repeater/controls/repeater.js
	function _callSuper$10(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$10() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	function _isNativeReflectConstruct$10() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$10 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	function _superPropGet$5(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	var Repeater;
	var init_repeater = __esmMin((() => {
		init_defineProperty();
		init_classCallCheck();
		init_createClass();
		init_possibleConstructorReturn();
		init_getPrototypeOf();
		init_get();
		init_inherits();
		init_utils();
		__name(_callSuper$10, "_callSuper");
		__name(_isNativeReflectConstruct$10, "_isNativeReflectConstruct");
		__name(_superPropGet$5, "_superPropGet");
		Repeater = /*#__PURE__*/ function(_elementor$modules$co) {
			function Repeater() {
				_classCallCheck(this, Repeater);
				return _callSuper$10(this, Repeater, arguments);
			}
			_inherits(Repeater, _elementor$modules$co);
			return _createClass(Repeater, [
				{
					key: "className",
					value: function className() {
						return _superPropGet$5(Repeater, "className", this, 3)([]).replace("nested-elements-repeater", "repeater");
					}
				},
				{
					key: "getDefaults",
					value: function getDefaults() {
						var widgetContainer = this.options.container;
						var defaults = widgetContainer.model.config.defaults;
						var index = widgetContainer.children.length + 1;
						return _defineProperty({ _id: "" }, defaults.repeater_title_setting, extractNestedItemTitle(widgetContainer, index));
					}
				},
				{
					key: "onChildviewClickDuplicate",
					value: function onChildviewClickDuplicate(childView) {
						$e.run("document/repeater/duplicate", {
							container: this.options.container,
							name: this.model.get("name"),
							index: childView._index
						});
						this.toggleMinRowsClass();
					}
				},
				{
					key: "updateActiveRow",
					value: function updateActiveRow() {
						if (!this.currentEditableChild) return;
						$e.run("document/repeater/select", {
							container: this.container,
							index: this.currentEditableChild.itemIndex,
							options: { useHistory: false }
						});
					}
				}
			]);
		}(elementor.modules.controls.Repeater);
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/nested-repeater/hooks/data/base.js
	function _callSuper$9(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$9() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	function _isNativeReflectConstruct$9() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$9 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	var Base;
	var init_base = __esmMin((() => {
		init_classCallCheck();
		init_createClass();
		init_possibleConstructorReturn();
		init_getPrototypeOf();
		init_inherits();
		init_utils();
		__name(_callSuper$9, "_callSuper");
		__name(_isNativeReflectConstruct$9, "_isNativeReflectConstruct");
		Base = /*#__PURE__*/ function(_$e$modules$hookData$) {
			function Base() {
				_classCallCheck(this, Base);
				return _callSuper$9(this, Base, arguments);
			}
			_inherits(Base, _$e$modules$hookData$);
			return _createClass(Base, [{
				key: "getContainerType",
				value: function getContainerType() {
					return "widget";
				}
			}, {
				key: "getConditions",
				value: function getConditions(args) {
					return isWidgetSupportNesting(args.container.model.get("widgetType"));
				}
			}]);
		}($e.modules.hookData.After);
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/nested-repeater/hooks/data/document/repeater/insert/nested-repeater-create-container.js
	function _callSuper$8(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$8() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	function _isNativeReflectConstruct$8() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$8 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	function _superPropGet$4(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	var NestedRepeaterCreateContainer;
	var init_nested_repeater_create_container = __esmMin((() => {
		init_classCallCheck();
		init_createClass();
		init_possibleConstructorReturn();
		init_getPrototypeOf();
		init_get();
		init_inherits();
		init_base();
		init_utils();
		__name(_callSuper$8, "_callSuper");
		__name(_isNativeReflectConstruct$8, "_isNativeReflectConstruct");
		__name(_superPropGet$4, "_superPropGet");
		NestedRepeaterCreateContainer = /*#__PURE__*/ function(_Base) {
			function NestedRepeaterCreateContainer() {
				_classCallCheck(this, NestedRepeaterCreateContainer);
				return _callSuper$8(this, NestedRepeaterCreateContainer, arguments);
			}
			_inherits(NestedRepeaterCreateContainer, _Base);
			return _createClass(NestedRepeaterCreateContainer, [
				{
					key: "getId",
					value: function getId() {
						return "document/repeater/insert--nested-repeater-create-container";
					}
				},
				{
					key: "getCommand",
					value: function getCommand() {
						return "document/repeater/insert";
					}
				},
				{
					key: "getConditions",
					value: function getConditions(args) {
						var isCommandCalledDirectly = $e.commands.isCurrentFirstTrace(this.getCommand());
						return _superPropGet$4(NestedRepeaterCreateContainer, "getConditions", this, 3)([args]) && isCommandCalledDirectly;
					}
				},
				{
					key: "apply",
					value: function apply(_ref) {
						var container = _ref.container;
						var name = _ref.name;
						var index = container.repeaters[name].children.length;
						$e.run("document/elements/create", {
							container,
							model: {
								elType: "container",
								isLocked: true,
								_title: extractNestedItemTitle(container, index)
							},
							options: { edit: false }
						});
						if (shouldUseAtomicRepeaters(container.settings.get("widgetType"))) elementor.$preview[0].contentWindow.dispatchEvent(new CustomEvent("elementor/nested-container/atomic-repeater", { detail: {
							container,
							action: { type: "create" }
						} }));
					}
				}
			]);
		}(Base);
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/nested-repeater/hooks/data/document/repeater/remove/nested-repeater-remove-container.js
	function _callSuper$7(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$7() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	function _isNativeReflectConstruct$7() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$7 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	function _superPropGet$3(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	var NestedRepeaterRemoveContainer;
	var init_nested_repeater_remove_container = __esmMin((() => {
		init_classCallCheck();
		init_createClass();
		init_possibleConstructorReturn();
		init_getPrototypeOf();
		init_get();
		init_inherits();
		init_base();
		init_utils();
		__name(_callSuper$7, "_callSuper");
		__name(_isNativeReflectConstruct$7, "_isNativeReflectConstruct");
		__name(_superPropGet$3, "_superPropGet");
		NestedRepeaterRemoveContainer = /*#__PURE__*/ function(_Base) {
			function NestedRepeaterRemoveContainer() {
				_classCallCheck(this, NestedRepeaterRemoveContainer);
				return _callSuper$7(this, NestedRepeaterRemoveContainer, arguments);
			}
			_inherits(NestedRepeaterRemoveContainer, _Base);
			return _createClass(NestedRepeaterRemoveContainer, [
				{
					key: "getId",
					value: function getId() {
						return "document/repeater/remove--nested-elements-remove-container";
					}
				},
				{
					key: "getCommand",
					value: function getCommand() {
						return "document/repeater/remove";
					}
				},
				{
					key: "getConditions",
					value: function getConditions(args) {
						var isCommandCalledDirectly = $e.commands.isCurrentFirstTrace(this.getCommand());
						return _superPropGet$3(NestedRepeaterRemoveContainer, "getConditions", this, 3)([args]) && isCommandCalledDirectly;
					}
				},
				{
					key: "apply",
					value: function apply(_ref) {
						var container = _ref.container;
						var index = _ref.index;
						$e.run("document/elements/delete", {
							container: findChildContainerOrFail(container, index),
							force: true
						});
						if (shouldUseAtomicRepeaters(container.settings.get("widgetType"))) elementor.$preview[0].contentWindow.dispatchEvent(new CustomEvent("elementor/nested-container/atomic-repeater", { detail: {
							container,
							action: { type: "remove" }
						} }));
					}
				}
			]);
		}(Base);
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/nested-repeater/hooks/data/document/repeater/move/nested-repeater-move-container.js
	function _callSuper$6(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$6() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	function _isNativeReflectConstruct$6() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$6 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	var NestedRepeaterMoveContainer;
	var init_nested_repeater_move_container = __esmMin((() => {
		init_classCallCheck();
		init_createClass();
		init_possibleConstructorReturn();
		init_getPrototypeOf();
		init_inherits();
		init_base();
		init_utils();
		__name(_callSuper$6, "_callSuper");
		__name(_isNativeReflectConstruct$6, "_isNativeReflectConstruct");
		NestedRepeaterMoveContainer = /*#__PURE__*/ function(_Base) {
			function NestedRepeaterMoveContainer() {
				_classCallCheck(this, NestedRepeaterMoveContainer);
				return _callSuper$6(this, NestedRepeaterMoveContainer, arguments);
			}
			_inherits(NestedRepeaterMoveContainer, _Base);
			return _createClass(NestedRepeaterMoveContainer, [
				{
					key: "getId",
					value: function getId() {
						return "document/repeater/move--nested-repeater-move-container";
					}
				},
				{
					key: "getCommand",
					value: function getCommand() {
						return "document/repeater/move";
					}
				},
				{
					key: "apply",
					value: function apply(_ref) {
						var container = _ref.container;
						var sourceIndex = _ref.sourceIndex;
						var targetIndex = _ref.targetIndex;
						var result = $e.run("document/elements/move", {
							container: findChildContainerOrFail(container, sourceIndex),
							target: container,
							options: {
								at: targetIndex,
								edit: false
							}
						});
						if (shouldUseAtomicRepeaters(container.settings.get("widgetType"))) {
							container.view.children._views = sortViewsByModels(container);
							elementor.$preview[0].contentWindow.dispatchEvent(new CustomEvent("elementor/nested-container/atomic-repeater", { detail: {
								container,
								targetContainer: result,
								index: targetIndex,
								action: { type: "move" }
							} }));
						}
					}
				}
			]);
		}(Base);
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/nested-repeater/hooks/data/document/repeater/duplicate/nested-repeater-duplicate-container.js
	function _callSuper$5(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$5() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	function _isNativeReflectConstruct$5() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$5 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	var NestedRepeaterDuplicateContainer;
	var init_nested_repeater_duplicate_container = __esmMin((() => {
		init_classCallCheck();
		init_createClass();
		init_possibleConstructorReturn();
		init_getPrototypeOf();
		init_inherits();
		init_base();
		init_utils();
		__name(_callSuper$5, "_callSuper");
		__name(_isNativeReflectConstruct$5, "_isNativeReflectConstruct");
		NestedRepeaterDuplicateContainer = /*#__PURE__*/ function(_Base) {
			function NestedRepeaterDuplicateContainer() {
				_classCallCheck(this, NestedRepeaterDuplicateContainer);
				return _callSuper$5(this, NestedRepeaterDuplicateContainer, arguments);
			}
			_inherits(NestedRepeaterDuplicateContainer, _Base);
			return _createClass(NestedRepeaterDuplicateContainer, [
				{
					key: "getId",
					value: function getId() {
						return "document/repeater/duplicate--nested-repeater-duplicate-container";
					}
				},
				{
					key: "getCommand",
					value: function getCommand() {
						return "document/repeater/duplicate";
					}
				},
				{
					key: "apply",
					value: function apply(_ref) {
						var container = _ref.container;
						var index = _ref.index;
						var result = $e.run("document/elements/duplicate", {
							container: findChildContainerOrFail(container, index),
							options: { edit: false }
						});
						if (shouldUseAtomicRepeaters(container.settings.get("widgetType"))) {
							container.view.children._views = sortViewsByModels(container);
							elementor.$preview[0].contentWindow.dispatchEvent(new CustomEvent("elementor/nested-container/atomic-repeater", { detail: {
								container,
								targetContainer: result,
								index,
								action: { type: "duplicate" }
							} }));
						} else container.render();
					}
				}
			]);
		}(Base);
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/nested-repeater/hooks/ui/panel/editor/open/nested-repeater-focus-current-edited-container.js
	function _callSuper$4(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$4() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	function _isNativeReflectConstruct$4() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$4 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	var NAVIGATION_DEPTH_SENSITIVITY_TIMEOUT, NestedRepeaterFocusCurrentEditedContainer;
	var init_nested_repeater_focus_current_edited_container = __esmMin((() => {
		init_classCallCheck();
		init_createClass();
		init_possibleConstructorReturn();
		init_getPrototypeOf();
		init_inherits();
		init_utils();
		__name(_callSuper$4, "_callSuper");
		__name(_isNativeReflectConstruct$4, "_isNativeReflectConstruct");
		NAVIGATION_DEPTH_SENSITIVITY_TIMEOUT = 250;
		NestedRepeaterFocusCurrentEditedContainer = /*#__PURE__*/ function(_$e$modules$hookUI$Af) {
			function NestedRepeaterFocusCurrentEditedContainer() {
				_classCallCheck(this, NestedRepeaterFocusCurrentEditedContainer);
				return _callSuper$4(this, NestedRepeaterFocusCurrentEditedContainer, arguments);
			}
			_inherits(NestedRepeaterFocusCurrentEditedContainer, _$e$modules$hookUI$Af);
			return _createClass(NestedRepeaterFocusCurrentEditedContainer, [
				{
					key: "getCommand",
					value: function getCommand() {
						return "panel/editor/open";
					}
				},
				{
					key: "getId",
					value: function getId() {
						return "nested-repeater-focus-current-edited-container";
					}
				},
				{
					key: "getConditions",
					value: function getConditions(args) {
						var _this$navigationMap;
						if ($e.commands.isCurrentFirstTrace("document/elements/create")) return false;
						var allParents = args.view.container.getParentAncestry();
						if (allParents.some(function(parent) {
							return isWidgetSupportNesting(parent.model.get("widgetType"));
						})) this.navigationMap = this.getNavigationMapForContainers(allParents.filter(function(container) {
							return "container" === container.type && "widget" === container.parent.type;
						})).filter(function(map) {
							return map.index !== map.current;
						});
						return (_this$navigationMap = this.navigationMap) === null || _this$navigationMap === void 0 ? void 0 : _this$navigationMap.length;
					}
				},
				{
					key: "apply",
					value: function apply() {
						var depth = 1;
						this.navigationMap.forEach(function(_ref) {
							var container = _ref.container;
							var index = _ref.index;
							setTimeout(function() {
								$e.run("document/repeater/select", {
									container,
									index: index++,
									options: { useHistory: false }
								});
							}, NAVIGATION_DEPTH_SENSITIVITY_TIMEOUT * depth);
							++depth;
						});
					}
				},
				{
					key: "getNavigationMapForContainers",
					value: function getNavigationMapForContainers(containers) {
						return containers.map(function(container) {
							return {
								current: container.parent.model.get("editSettings").get("activeItemIndex"),
								container: container.parent,
								index: container.parent.children.indexOf(container) + 1
							};
						}).reverse();
					}
				}
			]);
		}($e.modules.hookUI.After);
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/nested-repeater/hooks/index.js
	var hooks_exports = /* @__PURE__ */ __exportAll({
		NestedRepeaterCreateContainer: () => NestedRepeaterCreateContainer,
		NestedRepeaterDuplicateContainer: () => NestedRepeaterDuplicateContainer,
		NestedRepeaterFocusCurrentEditedContainer: () => NestedRepeaterFocusCurrentEditedContainer,
		NestedRepeaterMoveContainer: () => NestedRepeaterMoveContainer,
		NestedRepeaterRemoveContainer: () => NestedRepeaterRemoveContainer
	});
	var init_hooks = __esmMin((() => {
		init_nested_repeater_create_container();
		init_nested_repeater_remove_container();
		init_nested_repeater_move_container();
		init_nested_repeater_duplicate_container();
		init_nested_repeater_focus_current_edited_container();
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/nested-repeater/component.js
	function _callSuper$3(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$3() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	function _isNativeReflectConstruct$3() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$3 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	function _superPropGet$2(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	var Component$1;
	var init_component$1 = __esmMin((() => {
		init_classCallCheck();
		init_createClass();
		init_possibleConstructorReturn();
		init_getPrototypeOf();
		init_get();
		init_inherits();
		init_defineProperty();
		init_nested_model_base();
		init_nested_view_base();
		init_repeater();
		init_hooks();
		__name(_callSuper$3, "_callSuper");
		__name(_isNativeReflectConstruct$3, "_isNativeReflectConstruct");
		__name(_superPropGet$2, "_superPropGet");
		Component$1 = /*#__PURE__*/ function(_$e$modules$Component) {
			function Component() {
				var _this;
				_classCallCheck(this, Component);
				for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				_this = _callSuper$3(this, Component, [].concat(args));
				_defineProperty(_this, "exports", {
					NestedModelBase,
					NestedViewBase
				});
				return _this;
			}
			_inherits(Component, _$e$modules$Component);
			return _createClass(Component, [
				{
					key: "registerAPI",
					value: function registerAPI() {
						_superPropGet$2(Component, "registerAPI", this, 3)([]);
						elementor.addControlView("nested-elements-repeater", Repeater);
					}
				},
				{
					key: "getNamespace",
					value: function getNamespace() {
						return "nested-elements/nested-repeater";
					}
				},
				{
					key: "defaultHooks",
					value: function defaultHooks() {
						return this.importHooks(hooks_exports);
					}
				}
			]);
		}($e.modules.ComponentBase);
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/component.js
	function _callSuper$2(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$2() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	function _isNativeReflectConstruct$2() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	function _superPropGet$1(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	var Component;
	var init_component = __esmMin((() => {
		init_classCallCheck();
		init_createClass();
		init_possibleConstructorReturn();
		init_getPrototypeOf();
		init_get();
		init_inherits();
		init_component$1();
		__name(_callSuper$2, "_callSuper");
		__name(_isNativeReflectConstruct$2, "_isNativeReflectConstruct");
		__name(_superPropGet$1, "_superPropGet");
		Component = /*#__PURE__*/ function(_$e$modules$Component) {
			function Component() {
				_classCallCheck(this, Component);
				return _callSuper$2(this, Component, arguments);
			}
			_inherits(Component, _$e$modules$Component);
			return _createClass(Component, [{
				key: "getNamespace",
				value: function getNamespace() {
					return "nested-elements";
				}
			}, {
				key: "registerAPI",
				value: function registerAPI() {
					$e.components.register(new Component$1());
					_superPropGet$1(Component, "registerAPI", this, 3)([]);
				}
			}]);
		}($e.modules.ComponentBase);
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/module.js
	var module_exports = /* @__PURE__ */ __exportAll({ default: () => NestedElementsModule });
	var NestedElementsModule;
	var init_module = __esmMin((() => {
		init_createClass();
		init_classCallCheck();
		init_component();
		NestedElementsModule = /*#__PURE__*/ _createClass(function NestedElementsModule() {
			_classCallCheck(this, NestedElementsModule);
			this.component = $e.components.register(new Component());
		});
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/views/view.js
	var view_exports = /* @__PURE__ */ __exportAll({
		View: () => View,
		default: () => View
	});
	function _callSuper$1(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$1() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	function _isNativeReflectConstruct$1() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	function _superPropGet(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	var View;
	var init_view = __esmMin((() => {
		init_classCallCheck();
		init_createClass();
		init_possibleConstructorReturn();
		init_getPrototypeOf();
		init_get();
		init_inherits();
		__name(_callSuper$1, "_callSuper");
		__name(_isNativeReflectConstruct$1, "_isNativeReflectConstruct");
		View = /*#__PURE__*/ function(_$e$components$get$ex) {
			function View() {
				_classCallCheck(this, View);
				return _callSuper$1(this, View, arguments);
			}
			_inherits(View, _$e$components$get$ex);
			return _createClass(View, [{
				key: "events",
				value: function events() {
					var _this = this;
					var events = _superPropGet(View, "events", this, 3)([]);
					events.click = function(e) {
						if (elementor.documents.currentDocument.id.toString() !== e.target.closest(".elementor").dataset.elementorId) return;
						var closest = e.target.closest(".elementor-element");
						var targetContainer = null;
						if (["container", "widget"].includes(closest === null || closest === void 0 ? void 0 : closest.dataset.element_type)) {
							var container = elementor.getContainer(closest.dataset.id);
							if (container.view.isEmpty()) return true;
							targetContainer = container;
						}
						e.stopPropagation();
						$e.run("document/elements/select", { container: targetContainer || _this.getContainer() });
					};
					return events;
				}
			}, {
				key: "renderHTML",
				value: function renderHTML() {
					var templateType = this.getTemplateType();
					var editModel = this.getEditModel();
					if ("js" === templateType) {
						editModel.setHtmlCache();
						this.render();
					} else editModel.renderRemoteServer();
				}
			}]);
		}($e.components.get("nested-elements/nested-repeater").exports.NestedViewBase);
	}));

//#endregion
//#region node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
/** @license React v16.13.1
	* react-is.development.js
	*
	* Copyright (c) Facebook, Inc. and its affiliates.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_react_is_development = /* @__PURE__ */ __commonJSMin(((exports) => {
		(function() {
			"use strict";
			var hasSymbol = typeof Symbol === "function" && Symbol.for;
			var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
			var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
			var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
			var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
			var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
			var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
			var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
			var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
			var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
			var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
			var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
			var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
			var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
			var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
			var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
			var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
			var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
			var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
			function isValidElementType(type) {
				return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
			}
			function typeOf(object) {
				if (typeof object === "object" && object !== null) {
					var $$typeof = object.$$typeof;
					switch ($$typeof) {
						case REACT_ELEMENT_TYPE:
							var type = object.type;
							switch (type) {
								case REACT_ASYNC_MODE_TYPE:
								case REACT_CONCURRENT_MODE_TYPE:
								case REACT_FRAGMENT_TYPE:
								case REACT_PROFILER_TYPE:
								case REACT_STRICT_MODE_TYPE:
								case REACT_SUSPENSE_TYPE: return type;
								default:
									var $$typeofType = type && type.$$typeof;
									switch ($$typeofType) {
										case REACT_CONTEXT_TYPE:
										case REACT_FORWARD_REF_TYPE:
										case REACT_LAZY_TYPE:
										case REACT_MEMO_TYPE:
										case REACT_PROVIDER_TYPE: return $$typeofType;
										default: return $$typeof;
									}
							}
						case REACT_PORTAL_TYPE: return $$typeof;
					}
				}
			}
			var AsyncMode = REACT_ASYNC_MODE_TYPE;
			var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
			var ContextConsumer = REACT_CONTEXT_TYPE;
			var ContextProvider = REACT_PROVIDER_TYPE;
			var Element = REACT_ELEMENT_TYPE;
			var ForwardRef = REACT_FORWARD_REF_TYPE;
			var Fragment = REACT_FRAGMENT_TYPE;
			var Lazy = REACT_LAZY_TYPE;
			var Memo = REACT_MEMO_TYPE;
			var Portal = REACT_PORTAL_TYPE;
			var Profiler = REACT_PROFILER_TYPE;
			var StrictMode = REACT_STRICT_MODE_TYPE;
			var Suspense = REACT_SUSPENSE_TYPE;
			var hasWarnedAboutDeprecatedIsAsyncMode = false;
			function isAsyncMode(object) {
				if (!hasWarnedAboutDeprecatedIsAsyncMode) {
					hasWarnedAboutDeprecatedIsAsyncMode = true;
					console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
				}
				return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
			}
			function isConcurrentMode(object) {
				return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
			}
			function isContextConsumer(object) {
				return typeOf(object) === REACT_CONTEXT_TYPE;
			}
			function isContextProvider(object) {
				return typeOf(object) === REACT_PROVIDER_TYPE;
			}
			function isElement(object) {
				return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
			}
			function isForwardRef(object) {
				return typeOf(object) === REACT_FORWARD_REF_TYPE;
			}
			function isFragment(object) {
				return typeOf(object) === REACT_FRAGMENT_TYPE;
			}
			function isLazy(object) {
				return typeOf(object) === REACT_LAZY_TYPE;
			}
			function isMemo(object) {
				return typeOf(object) === REACT_MEMO_TYPE;
			}
			function isPortal(object) {
				return typeOf(object) === REACT_PORTAL_TYPE;
			}
			function isProfiler(object) {
				return typeOf(object) === REACT_PROFILER_TYPE;
			}
			function isStrictMode(object) {
				return typeOf(object) === REACT_STRICT_MODE_TYPE;
			}
			function isSuspense(object) {
				return typeOf(object) === REACT_SUSPENSE_TYPE;
			}
			exports.AsyncMode = AsyncMode;
			exports.ConcurrentMode = ConcurrentMode;
			exports.ContextConsumer = ContextConsumer;
			exports.ContextProvider = ContextProvider;
			exports.Element = Element;
			exports.ForwardRef = ForwardRef;
			exports.Fragment = Fragment;
			exports.Lazy = Lazy;
			exports.Memo = Memo;
			exports.Portal = Portal;
			exports.Profiler = Profiler;
			exports.StrictMode = StrictMode;
			exports.Suspense = Suspense;
			exports.isAsyncMode = isAsyncMode;
			exports.isConcurrentMode = isConcurrentMode;
			exports.isContextConsumer = isContextConsumer;
			exports.isContextProvider = isContextProvider;
			exports.isElement = isElement;
			exports.isForwardRef = isForwardRef;
			exports.isFragment = isFragment;
			exports.isLazy = isLazy;
			exports.isMemo = isMemo;
			exports.isPortal = isPortal;
			exports.isProfiler = isProfiler;
			exports.isStrictMode = isStrictMode;
			exports.isSuspense = isSuspense;
			exports.isValidElementType = isValidElementType;
			exports.typeOf = typeOf;
		})();
	}));

//#endregion
//#region node_modules/prop-types/node_modules/react-is/index.js
	var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = require_react_is_development();
	}));

//#endregion
//#region node_modules/object-assign/index.js
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	var require_object_assign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var getOwnPropertySymbols = Object.getOwnPropertySymbols;
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var propIsEnumerable = Object.prototype.propertyIsEnumerable;
		function toObject(val) {
			if (val === null || val === void 0) throw new TypeError("Object.assign cannot be called with null or undefined");
			return Object(val);
		}
		function shouldUseNative() {
			try {
				if (!Object.assign) return false;
				var test1 = /* @__PURE__ */ new String("abc");
				test1[5] = "de";
				if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
				var test2 = {};
				for (var i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
				if (Object.getOwnPropertyNames(test2).map(function(n) {
					return test2[n];
				}).join("") !== "0123456789") return false;
				var test3 = {};
				"abcdefghijklmnopqrst".split("").forEach(function(letter) {
					test3[letter] = letter;
				});
				if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
				return true;
			} catch (err) {
				return false;
			}
		}
		module.exports = shouldUseNative() ? Object.assign : function(target, source) {
			var from;
			var to = toObject(target);
			var symbols;
			for (var s = 1; s < arguments.length; s++) {
				from = Object(arguments[s]);
				for (var key in from) if (hasOwnProperty.call(from, key)) to[key] = from[key];
				if (getOwnPropertySymbols) {
					symbols = getOwnPropertySymbols(from);
					for (var i = 0; i < symbols.length; i++) if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
				}
			}
			return to;
		};
	}));

//#endregion
//#region node_modules/prop-types/lib/ReactPropTypesSecret.js
/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_ReactPropTypesSecret = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
		module.exports = ReactPropTypesSecret;
	}));

//#endregion
//#region node_modules/prop-types/lib/has.js
	var require_has = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
	}));

//#endregion
//#region node_modules/prop-types/checkPropTypes.js
/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_checkPropTypes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var printWarning = function() {};
		var ReactPropTypesSecret = require_ReactPropTypesSecret();
		var loggedTypeFailures = {};
		var has = require_has();
		printWarning = function(text) {
			var message = "Warning: " + text;
			if (typeof console !== "undefined") console.error(message);
			try {
				throw new Error(message);
			} catch (x) {}
		};
		/**
		* Assert that the values match with the type specs.
		* Error messages are memorized and will only be shown once.
		*
		* @param {object} typeSpecs Map of name to a ReactPropType
		* @param {object} values Runtime values that need to be type-checked
		* @param {string} location e.g. "prop", "context", "child context"
		* @param {string} componentName Name of the component for error messages.
		* @param {?Function} getStack Returns the component stack.
		* @private
		*/
		function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
			for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
				var error;
				try {
					if (typeof typeSpecs[typeSpecName] !== "function") {
						var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						err.name = "Invariant Violation";
						throw err;
					}
					error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
				} catch (ex) {
					error = ex;
				}
				if (error && !(error instanceof Error)) printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
				if (error instanceof Error && !(error.message in loggedTypeFailures)) {
					loggedTypeFailures[error.message] = true;
					var stack = getStack ? getStack() : "";
					printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
				}
			}
		}
		/**
		* Resets warning cache when testing.
		*
		* @private
		*/
		checkPropTypes.resetWarningCache = function() {
			loggedTypeFailures = {};
		};
		module.exports = checkPropTypes;
	}));

//#endregion
//#region node_modules/prop-types/factoryWithTypeCheckers.js
/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_factoryWithTypeCheckers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ReactIs = require_react_is();
		var assign = require_object_assign();
		var ReactPropTypesSecret = require_ReactPropTypesSecret();
		var has = require_has();
		var checkPropTypes = require_checkPropTypes();
		var printWarning = function() {};
		printWarning = function(text) {
			var message = "Warning: " + text;
			if (typeof console !== "undefined") console.error(message);
			try {
				throw new Error(message);
			} catch (x) {}
		};
		function emptyFunctionThatReturnsNull() {
			return null;
		}
		module.exports = function(isValidElement, throwOnDirectAccess) {
			var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
			var FAUX_ITERATOR_SYMBOL = "@@iterator";
			/**
			* Returns the iterator method function contained on the iterable object.
			*
			* Be sure to invoke the function with the iterable as context:
			*
			*     var iteratorFn = getIteratorFn(myIterable);
			*     if (iteratorFn) {
			*       var iterator = iteratorFn.call(myIterable);
			*       ...
			*     }
			*
			* @param {?object} maybeIterable
			* @return {?function}
			*/
			function getIteratorFn(maybeIterable) {
				var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
				if (typeof iteratorFn === "function") return iteratorFn;
			}
			/**
			* Collection of methods that allow declaration and validation of props that are
			* supplied to React components. Example usage:
			*
			*   var Props = require('ReactPropTypes');
			*   var MyArticle = React.createClass({
			*     propTypes: {
			*       // An optional string prop named "description".
			*       description: Props.string,
			*
			*       // A required enum prop named "category".
			*       category: Props.oneOf(['News','Photos']).isRequired,
			*
			*       // A prop named "dialog" that requires an instance of Dialog.
			*       dialog: Props.instanceOf(Dialog).isRequired
			*     },
			*     render: function() { ... }
			*   });
			*
			* A more formal specification of how these methods are used:
			*
			*   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
			*   decl := ReactPropTypes.{type}(.isRequired)?
			*
			* Each and every declaration produces a function with the same signature. This
			* allows the creation of custom validation functions. For example:
			*
			*  var MyLink = React.createClass({
			*    propTypes: {
			*      // An optional string or URI prop named "href".
			*      href: function(props, propName, componentName) {
			*        var propValue = props[propName];
			*        if (propValue != null && typeof propValue !== 'string' &&
			*            !(propValue instanceof URI)) {
			*          return new Error(
			*            'Expected a string or an URI for ' + propName + ' in ' +
			*            componentName
			*          );
			*        }
			*      }
			*    },
			*    render: function() {...}
			*  });
			*
			* @internal
			*/
			var ANONYMOUS = "<<anonymous>>";
			var ReactPropTypes = {
				array: createPrimitiveTypeChecker("array"),
				bigint: createPrimitiveTypeChecker("bigint"),
				bool: createPrimitiveTypeChecker("boolean"),
				func: createPrimitiveTypeChecker("function"),
				number: createPrimitiveTypeChecker("number"),
				object: createPrimitiveTypeChecker("object"),
				string: createPrimitiveTypeChecker("string"),
				symbol: createPrimitiveTypeChecker("symbol"),
				any: createAnyTypeChecker(),
				arrayOf: createArrayOfTypeChecker,
				element: createElementTypeChecker(),
				elementType: createElementTypeTypeChecker(),
				instanceOf: createInstanceTypeChecker,
				node: createNodeChecker(),
				objectOf: createObjectOfTypeChecker,
				oneOf: createEnumTypeChecker,
				oneOfType: createUnionTypeChecker,
				shape: createShapeTypeChecker,
				exact: createStrictShapeTypeChecker
			};
			/**
			* inlined Object.is polyfill to avoid requiring consumers ship their own
			* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
			*/
			function is(x, y) {
				if (x === y) return x !== 0 || 1 / x === 1 / y;
				else return x !== x && y !== y;
			}
			/**
			* We use an Error-like object for backward compatibility as people may call
			* PropTypes directly and inspect their output. However, we don't use real
			* Errors anymore. We don't inspect their stack anyway, and creating them
			* is prohibitively expensive if they are created too often, such as what
			* happens in oneOfType() for any type before the one that matched.
			*/
			function PropTypeError(message, data) {
				this.message = message;
				this.data = data && typeof data === "object" ? data : {};
				this.stack = "";
			}
			PropTypeError.prototype = Error.prototype;
			function createChainableTypeChecker(validate) {
				var manualPropTypeCallCache = {};
				var manualPropTypeWarningCount = 0;
				function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
					componentName = componentName || ANONYMOUS;
					propFullName = propFullName || propName;
					if (secret !== ReactPropTypesSecret) {
						if (throwOnDirectAccess) {
							var err = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
							err.name = "Invariant Violation";
							throw err;
						} else if (typeof console !== "undefined") {
							var cacheKey = componentName + ":" + propName;
							if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
								printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
								manualPropTypeCallCache[cacheKey] = true;
								manualPropTypeWarningCount++;
							}
						}
					}
					if (props[propName] == null) {
						if (isRequired) {
							if (props[propName] === null) return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
							return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
						}
						return null;
					} else return validate(props, propName, componentName, location, propFullName);
				}
				var chainedCheckType = checkType.bind(null, false);
				chainedCheckType.isRequired = checkType.bind(null, true);
				return chainedCheckType;
			}
			function createPrimitiveTypeChecker(expectedType) {
				function validate(props, propName, componentName, location, propFullName, secret) {
					var propValue = props[propName];
					if (getPropType(propValue) !== expectedType) {
						var preciseType = getPreciseType(propValue);
						return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createAnyTypeChecker() {
				return createChainableTypeChecker(emptyFunctionThatReturnsNull);
			}
			function createArrayOfTypeChecker(typeChecker) {
				function validate(props, propName, componentName, location, propFullName) {
					if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
					var propValue = props[propName];
					if (!Array.isArray(propValue)) {
						var propType = getPropType(propValue);
						return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
					}
					for (var i = 0; i < propValue.length; i++) {
						var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
						if (error instanceof Error) return error;
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createElementTypeChecker() {
				function validate(props, propName, componentName, location, propFullName) {
					var propValue = props[propName];
					if (!isValidElement(propValue)) {
						var propType = getPropType(propValue);
						return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createElementTypeTypeChecker() {
				function validate(props, propName, componentName, location, propFullName) {
					var propValue = props[propName];
					if (!ReactIs.isValidElementType(propValue)) {
						var propType = getPropType(propValue);
						return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createInstanceTypeChecker(expectedClass) {
				function validate(props, propName, componentName, location, propFullName) {
					if (!(props[propName] instanceof expectedClass)) {
						var expectedClassName = expectedClass.name || ANONYMOUS;
						var actualClassName = getClassName(props[propName]);
						return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createEnumTypeChecker(expectedValues) {
				if (!Array.isArray(expectedValues)) {
					if (arguments.length > 1) printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
					else printWarning("Invalid argument supplied to oneOf, expected an array.");
					return emptyFunctionThatReturnsNull;
				}
				function validate(props, propName, componentName, location, propFullName) {
					var propValue = props[propName];
					for (var i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
					var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
						if (getPreciseType(value) === "symbol") return String(value);
						return value;
					});
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
				}
				return createChainableTypeChecker(validate);
			}
			function createObjectOfTypeChecker(typeChecker) {
				function validate(props, propName, componentName, location, propFullName) {
					if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
					var propValue = props[propName];
					var propType = getPropType(propValue);
					if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
					for (var key in propValue) if (has(propValue, key)) {
						var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
						if (error instanceof Error) return error;
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createUnionTypeChecker(arrayOfTypeCheckers) {
				if (!Array.isArray(arrayOfTypeCheckers)) {
					printWarning("Invalid argument supplied to oneOfType, expected an instance of array.");
					return emptyFunctionThatReturnsNull;
				}
				for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
					var checker = arrayOfTypeCheckers[i];
					if (typeof checker !== "function") {
						printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
						return emptyFunctionThatReturnsNull;
					}
				}
				function validate(props, propName, componentName, location, propFullName) {
					var expectedTypes = [];
					for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
						var checker = arrayOfTypeCheckers[i];
						var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
						if (checkerResult == null) return null;
						if (checkerResult.data && has(checkerResult.data, "expectedType")) expectedTypes.push(checkerResult.data.expectedType);
					}
					var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
				}
				return createChainableTypeChecker(validate);
			}
			function createNodeChecker() {
				function validate(props, propName, componentName, location, propFullName) {
					if (!isNode(props[propName])) return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function invalidValidatorError(componentName, location, propFullName, key, type) {
				return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
			}
			function createShapeTypeChecker(shapeTypes) {
				function validate(props, propName, componentName, location, propFullName) {
					var propValue = props[propName];
					var propType = getPropType(propValue);
					if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
					for (var key in shapeTypes) {
						var checker = shapeTypes[key];
						if (typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
						var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
						if (error) return error;
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function createStrictShapeTypeChecker(shapeTypes) {
				function validate(props, propName, componentName, location, propFullName) {
					var propValue = props[propName];
					var propType = getPropType(propValue);
					if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
					for (var key in assign({}, props[propName], shapeTypes)) {
						var checker = shapeTypes[key];
						if (has(shapeTypes, key) && typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
						if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
						var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
						if (error) return error;
					}
					return null;
				}
				return createChainableTypeChecker(validate);
			}
			function isNode(propValue) {
				switch (typeof propValue) {
					case "number":
					case "string":
					case "undefined": return true;
					case "boolean": return !propValue;
					case "object":
						if (Array.isArray(propValue)) return propValue.every(isNode);
						if (propValue === null || isValidElement(propValue)) return true;
						var iteratorFn = getIteratorFn(propValue);
						if (iteratorFn) {
							var iterator = iteratorFn.call(propValue);
							var step;
							if (iteratorFn !== propValue.entries) {
								while (!(step = iterator.next()).done) if (!isNode(step.value)) return false;
							} else while (!(step = iterator.next()).done) {
								var entry = step.value;
								if (entry) {
									if (!isNode(entry[1])) return false;
								}
							}
						} else return false;
						return true;
					default: return false;
				}
			}
			function isSymbol(propType, propValue) {
				if (propType === "symbol") return true;
				if (!propValue) return false;
				if (propValue["@@toStringTag"] === "Symbol") return true;
				if (typeof Symbol === "function" && propValue instanceof Symbol) return true;
				return false;
			}
			function getPropType(propValue) {
				var propType = typeof propValue;
				if (Array.isArray(propValue)) return "array";
				if (propValue instanceof RegExp) return "object";
				if (isSymbol(propType, propValue)) return "symbol";
				return propType;
			}
			function getPreciseType(propValue) {
				if (typeof propValue === "undefined" || propValue === null) return "" + propValue;
				var propType = getPropType(propValue);
				if (propType === "object") {
					if (propValue instanceof Date) return "date";
					else if (propValue instanceof RegExp) return "regexp";
				}
				return propType;
			}
			function getPostfixForTypeWarning(value) {
				var type = getPreciseType(value);
				switch (type) {
					case "array":
					case "object": return "an " + type;
					case "boolean":
					case "date":
					case "regexp": return "a " + type;
					default: return type;
				}
			}
			function getClassName(propValue) {
				if (!propValue.constructor || !propValue.constructor.name) return ANONYMOUS;
				return propValue.constructor.name;
			}
			ReactPropTypes.checkPropTypes = checkPropTypes;
			ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
			ReactPropTypes.PropTypes = ReactPropTypes;
			return ReactPropTypes;
		};
	}));

//#endregion
//#region node_modules/prop-types/index.js
	var require_prop_types = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ReactIs = require_react_is();
		var throwOnDirectAccess = true;
		module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
	function _arrayWithHoles(r) {
		if (Array.isArray(r)) return r;
	}
	var init_arrayWithHoles = __esmMin((() => {}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
	function _iterableToArrayLimit(r, l) {
		var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
		if (null != t) {
			var e;
			var n;
			var i;
			var u;
			var a = [];
			var f = !0;
			var o = !1;
			try {
				if (i = (t = t.call(r)).next, 0 === l) {
					if (Object(t) !== t) return;
					f = !1;
				} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
			} catch (r) {
				o = !0, n = r;
			} finally {
				try {
					if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
				} finally {
					if (o) throw n;
				}
			}
			return a;
		}
	}
	var init_iterableToArrayLimit = __esmMin((() => {}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
	function _arrayLikeToArray(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}
	var init_arrayLikeToArray = __esmMin((() => {}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
	function _unsupportedIterableToArray(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
		}
	}
	var init_unsupportedIterableToArray = __esmMin((() => {
		init_arrayLikeToArray();
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
	function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var init_nonIterableRest = __esmMin((() => {}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/slicedToArray.js
	function _slicedToArray(r, e) {
		return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
	}
	var init_slicedToArray = __esmMin((() => {
		init_arrayWithHoles();
		init_iterableToArrayLimit();
		init_unsupportedIterableToArray();
		init_nonIterableRest();
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/views/add-section-area.js
	function AddSectionArea(props) {
		var addAreaElementRef = (0, react.useRef)();
		var containerHelper = elementor.helpers.container;
		(0, react.useEffect)(function() {
			var $addAreaElementRef = jQuery(addAreaElementRef.current);
			var defaultDroppableOptions = props.container.view.getDroppableOptions();
			defaultDroppableOptions.placeholder = false;
			defaultDroppableOptions.items = "> .elementor-add-section-inner";
			defaultDroppableOptions.hasDraggingOnChildClass = "elementor-dragging-on-child";
			$addAreaElementRef.html5Droppable(defaultDroppableOptions);
			return function() {
				$addAreaElementRef.html5Droppable("destroy");
			};
		}, []);
		return /*#__PURE__*/ react.default.createElement("div", {
			className: "elementor-add-section",
			onClick: function onClick() {
				return containerHelper.openEditMode(props.container);
			},
			ref: addAreaElementRef,
			role: "button",
			tabIndex: "0"
		}, /*#__PURE__*/ react.default.createElement("div", { className: "elementor-add-section-inner" }, /*#__PURE__*/ react.default.createElement("div", { className: "e-view elementor-add-new-section" }, /*#__PURE__*/ react.default.createElement("button", {
			type: "button",
			className: "elementor-add-section-area-button elementor-add-section-button",
			"aria-label": (0, _wordpress_i18n.__)("Add new container", "elementor"),
			onClick: function handleAddContainerClick() {
				props.setIsRenderPresets(true);
			}
		}, /*#__PURE__*/ react.default.createElement("i", {
			className: "eicon-plus",
			"aria-hidden": "true"
		})), /*#__PURE__*/ react.default.createElement("div", { className: "elementor-add-section-drag-title" }, (0, _wordpress_i18n.__)("Drag widget here", "elementor")))));
	}
	var import_prop_types$2;
	var init_add_section_area = __esmMin((() => {
		import_prop_types$2 = /* @__PURE__ */ __toESM(require_prop_types());
		AddSectionArea.propTypes = {
			container: import_prop_types$2.default.object.isRequired,
			setIsRenderPresets: import_prop_types$2.default.func.isRequired
		};
	}));

//#endregion
//#region assets/dev/js/editor/utils/editor-one-events.js
	function ownKeys$1(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread$1(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$1(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	var EditorOneEventManager;
	var init_editor_one_events = __esmMin((() => {
		init_defineProperty();
		init_classCallCheck();
		init_createClass();
		__name(ownKeys$1, "ownKeys");
		__name(_objectSpread$1, "_objectSpread");
		EditorOneEventManager = /*#__PURE__*/ function() {
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
						return _objectSpread$1({ window_name: (_config$appTypes$edit = config === null || config === void 0 || (_config$appTypes3 = config.appTypes) === null || _config$appTypes3 === void 0 ? void 0 : _config$appTypes3.editor) !== null && _config$appTypes$edit !== void 0 ? _config$appTypes$edit : "editor" }, overrides);
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
						return this.createBasePayload(_objectSpread$1({
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
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/views/select-preset.js
	function SelectPreset(props) {
		var containerHelper = elementor.helpers.container;
		var onPresetSelected = function onPresetSelected(preset, container) {
			var options = { createWrapper: false };
			EditorOneEventManager.sendCanvasEmptyBoxAction({
				targetName: "add_container",
				metadata: {
					container_type: "flexbox",
					structure_type: preset
				},
				containerCreated: true
			});
			containerHelper.createContainerFromPreset(preset, container, options);
		};
		return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, /*#__PURE__*/ react.default.createElement("button", {
			type: "button",
			className: "elementor-add-section-close",
			"aria-label": (0, _wordpress_i18n.__)("Close", "elementor"),
			onClick: function handleClose() {
				EditorOneEventManager.sendCanvasEmptyBoxAction({
					targetName: "close",
					containerCreated: false
				});
				props.setIsRenderPresets(false);
			}
		}, /*#__PURE__*/ react.default.createElement("i", {
			className: "eicon-close",
			"aria-hidden": "true"
		})), /*#__PURE__*/ react.default.createElement("div", { className: "e-view e-con-select-preset" }, /*#__PURE__*/ react.default.createElement("div", { className: "e-con-select-preset__title" }, (0, _wordpress_i18n.__)("Select your Structure", "elementor")), /*#__PURE__*/ react.default.createElement("div", { className: "e-con-select-preset__list" }, elementor.presetsFactory.getContainerPresets().map(function(preset) {
			return /*#__PURE__*/ react.default.createElement("button", {
				type: "button",
				className: "e-con-preset",
				"data-preset": preset,
				key: preset,
				onClick: function onClick() {
					return onPresetSelected(preset, props.container);
				},
				dangerouslySetInnerHTML: { __html: elementor.presetsFactory.generateContainerPreset(preset) }
			});
		}))));
	}
	var import_prop_types$1;
	var init_select_preset = __esmMin((() => {
		import_prop_types$1 = /* @__PURE__ */ __toESM(require_prop_types());
		init_editor_one_events();
		SelectPreset.propTypes = {
			container: import_prop_types$1.default.object.isRequired,
			setIsRenderPresets: import_prop_types$1.default.func.isRequired
		};
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/views/empty.js
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
	function Empty(props) {
		var _useState2 = _slicedToArray((0, react.useState)(false), 2);
		var isRenderPresets = _useState2[0];
		var setIsRenderPresets = _useState2[1];
		props = _objectSpread(_objectSpread({}, props), {}, { setIsRenderPresets });
		return isRenderPresets ? /*#__PURE__*/ react.default.createElement(SelectPreset, props) : /*#__PURE__*/ react.default.createElement(AddSectionArea, props);
	}
	var import_prop_types;
	var init_empty = __esmMin((() => {
		import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
		init_defineProperty();
		init_slicedToArray();
		init_add_section_area();
		init_select_preset();
		Empty.propTypes = { container: import_prop_types.default.object.isRequired };
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/nested-element-types-base.js
	var nested_element_types_base_exports = /* @__PURE__ */ __exportAll({
		NestedElementTypesBase: () => NestedElementTypesBase,
		default: () => NestedElementTypesBase
	});
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
	var NestedElementTypesBase;
	var init_nested_element_types_base = __esmMin((() => {
		init_classCallCheck();
		init_createClass();
		init_possibleConstructorReturn();
		init_getPrototypeOf();
		init_inherits();
		init_view();
		init_empty();
		NestedElementTypesBase = /*#__PURE__*/ function(_elementor$modules$el) {
			function NestedElementTypesBase() {
				_classCallCheck(this, NestedElementTypesBase);
				return _callSuper(this, NestedElementTypesBase, arguments);
			}
			_inherits(NestedElementTypesBase, _elementor$modules$el);
			return _createClass(NestedElementTypesBase, [
				{
					key: "getType",
					value: function getType() {
						elementorModules.ForceMethodImplementation();
					}
				},
				{
					key: "getView",
					value: function getView() {
						return View;
					}
				},
				{
					key: "getEmptyView",
					value: function getEmptyView() {
						return Empty;
					}
				},
				{
					key: "getModel",
					value: function getModel() {
						return $e.components.get("nested-elements/nested-repeater").exports.NestedModelBase;
					}
				}
			]);
		}(elementor.modules.elements.types.Base);
	}));

//#endregion
//#region modules/nested-elements/assets/js/editor/index.js
	elementorCommon.elements.$window.on("elementor:init-components", function() {
		elementor.modules.nestedElements = __vitePreload(() => Promise.resolve().then(() => (init_module(), module_exports)), void 0);
		elementor.modules.nestedElements.then(function(module) {
			elementor.modules.nestedElements = new module.default();
			elementor.modules.elements.types.NestedElementBase = __vitePreload(() => Promise.resolve().then(() => (init_nested_element_types_base(), nested_element_types_base_exports)), void 0);
			elementor.modules.elements.types.NestedElementBase.then(function(nestedElementBaseModule) {
				elementor.modules.elements.types.NestedElementBase = nestedElementBaseModule.default;
				__vitePreload(() => Promise.resolve().then(() => (init_view(), view_exports)).then(function(View) {
					$e.components.get("nested-elements").exports = { NestedView: View.default };
				}), void 0).then(function() {
					Events.dispatch(elementorCommon.elements.$window, "elementor/nested-element-type-loaded");
				});
			});
		});
	});

//#endregion
})(wp.i18n, React);
//# sourceMappingURL=nested-elements.js.map