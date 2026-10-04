(function(_wordpress_i18n, react, react_dom) {

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
react_dom = __toESM(react_dom);

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
	init_toPropertyKey();
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
	init_typeof();
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
//#region modules/atomic-widgets/assets/js/editor/atomic-element-base-model.js
	init_defineProperty();
	function ownKeys$3(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	__name(ownKeys$3, "ownKeys");
	function _objectSpread$3(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$3(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	__name(_objectSpread$3, "_objectSpread");
	function _callSuper$8(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$8() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$8, "_callSuper");
	function _isNativeReflectConstruct$8() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$8 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$8, "_isNativeReflectConstruct");
	function _superPropGet(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	var AtomicElementBaseModel = /*#__PURE__*/ function(_elementor$modules$el) {
		function AtomicElementBaseModel() {
			_classCallCheck(this, AtomicElementBaseModel);
			return _callSuper$8(this, AtomicElementBaseModel, arguments);
		}
		_inherits(AtomicElementBaseModel, _elementor$modules$el);
		return _createClass(AtomicElementBaseModel, [
			{
				key: "isValidChild",
				value: function isValidChild(childModel) {
					var elType = childModel.get("elType");
					return "section" !== elType && "column" !== elType;
				}
			},
			{
				key: "initialize",
				value: function initialize(attributes, options) {
					var _this$config;
					var elementType = this.get("elType");
					this.config = elementor.config.elements[elementType];
					if ((_this$config = this.config) !== null && _this$config !== void 0 && (_this$config = _this$config.meta) !== null && _this$config !== void 0 && _this$config.permanently_locked) this.set("isLocked", true);
					var isEmpty = 0 === this.get("elements").length;
					var isNewElementCreate = isEmpty && $e.commands.currentTrace.includes("document/elements/create");
					var shouldHydrate = isEmpty && this.get("hydrateDefaultChildren");
					if (shouldHydrate) this.unset("hydrateDefaultChildren", { silent: true });
					if (isNewElementCreate || shouldHydrate) this.onElementCreate();
					this.reconcileChildrenAgainstSchema(attributes);
					_superPropGet(AtomicElementBaseModel, "initialize", this, 3)([attributes, options]);
					this.bindChildrenReconcile();
				}
			},
			{
				key: "reconcileChildrenAgainstSchema",
				value: function reconcileChildrenAgainstSchema(attributes) {
					var _this$config2;
					if (!((_this$config2 = this.config) !== null && _this$config2 !== void 0 && (_this$config2 = _this$config2.children_dependencies) !== null && _this$config2 !== void 0 && _this$config2.length)) return;
					var adapter = AtomicElementBaseModel.childrenDependenciesAdapter;
					if (!(adapter !== null && adapter !== void 0 && adapter.reconcileInitialChildren)) return;
					attributes.elements = this.get("elements");
					adapter.reconcileInitialChildren({
						elementId: this.get("id"),
						elementConfig: this.config,
						attributes
					});
					this.set("elements", attributes.elements);
				}
			},
			{
				key: "bindChildrenReconcile",
				value: function bindChildrenReconcile() {
					var _this$config3;
					var _this$unbindChildrenR;
					var _this = this;
					if (!((_this$config3 = this.config) !== null && _this$config3 !== void 0 && (_this$config3 = _this$config3.children_dependencies) !== null && _this$config3 !== void 0 && _this$config3.length)) return;
					var adapter = AtomicElementBaseModel.childrenDependenciesAdapter;
					if (!(adapter !== null && adapter !== void 0 && adapter.bindSettingsReconcile)) return;
					(_this$unbindChildrenR = this.unbindChildrenReconcile) === null || _this$unbindChildrenR === void 0 || _this$unbindChildrenR.call(this);
					this.unbindChildrenReconcile = adapter.bindSettingsReconcile({
						model: this,
						elementConfig: this.config
					});
					this.once("destroy", function() {
						var _this$unbindChildrenR2;
						return (_this$unbindChildrenR2 = _this.unbindChildrenReconcile) === null || _this$unbindChildrenR2 === void 0 ? void 0 : _this$unbindChildrenR2.call(_this);
					});
				}
			},
			{
				key: "getDefaultChildren",
				value: function getDefaultChildren() {
					var defaultChildren = this.config.default_children;
					return this.modifyDefaultChildren(defaultChildren);
				}
			},
			{
				key: "onElementCreate",
				value: function onElementCreate() {
					var _this2 = this;
					if (this.get("skipDefaultChildren")) {
						this.unset("skipDefaultChildren", { silent: true });
						return;
					}
					this.set("elements", this.getDefaultChildren().map(function(element) {
						return _this2.buildElement(element);
					}));
				}
			},
			{
				key: "modifyDefaultChildren",
				value: function modifyDefaultChildren(element) {
					return element;
				}
			},
			{
				key: "buildElement",
				value: function buildElement(element) {
					var _this3 = this;
					var _element$settings;
					var id = elementorCommon.helpers.getUniqueId();
					var elements = (element.elements || []).map(function(el) {
						return _this3.buildElement(el);
					});
					return _objectSpread$3({
						elType: element.elType,
						widgetType: element.widgetType,
						id,
						settings: (_element$settings = element.settings) !== null && _element$settings !== void 0 ? _element$settings : {},
						elements,
						isLocked: element.isLocked || false,
						editor_settings: element.editor_settings || {},
						meta: element.meta || {}
					}, element.skipDefaultChildren ? {} : { hydrateDefaultChildren: true });
				}
			}
		], [{
			key: "setChildrenDependenciesAdapter",
			value: function setChildrenDependenciesAdapter(adapter) {
				AtomicElementBaseModel.childrenDependenciesAdapter = adapter;
			}
		}]);
	}(elementor.modules.elements.models.Element);
	_defineProperty(AtomicElementBaseModel, "childrenDependenciesAdapter", null);

//#endregion
//#region modules/atomic-widgets/assets/js/editor/atomic-element-base-type.js
	function _callSuper$7(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$7() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$7, "_callSuper");
	function _isNativeReflectConstruct$7() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$7 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$7, "_isNativeReflectConstruct");
	var AtomicElementBaseType = /*#__PURE__*/ function(_elementor$modules$el) {
		function AtomicElementBaseType(elementType, viewClass) {
			var _this;
			var modelClass = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
			var emptyViewClass = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
			_classCallCheck(this, AtomicElementBaseType);
			_this = _callSuper$7(this, AtomicElementBaseType);
			_this.elementType = elementType;
			_this.viewClass = viewClass;
			_this.modelClass = modelClass;
			_this.emptyViewClass = emptyViewClass;
			return _this;
		}
		_inherits(AtomicElementBaseType, _elementor$modules$el);
		return _createClass(AtomicElementBaseType, [
			{
				key: "getType",
				value: function getType() {
					return this.elementType;
				}
			},
			{
				key: "getView",
				value: function getView() {
					return this.viewClass;
				}
			},
			{
				key: "getEmptyView",
				value: function getEmptyView() {
					return this.emptyViewClass || elementor.modules.elements.views.EmptyComponent;
				}
			},
			{
				key: "getModel",
				value: function getModel() {
					return this.modelClass || elementor.modules.elements.models.AtomicElementBase;
				}
			}
		]);
	}(elementor.modules.elements.types.Base);

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
	function _arrayWithHoles(r) {
		if (Array.isArray(r)) return r;
	}

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

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
	function _arrayLikeToArray(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
	function _unsupportedIterableToArray(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
		}
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
	function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/slicedToArray.js
	function _slicedToArray(r, e) {
		return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
	function _arrayWithoutHoles(r) {
		if (Array.isArray(r)) return _arrayLikeToArray(r);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/iterableToArray.js
	function _iterableToArray(r) {
		if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
	function _nonIterableSpread() {
		throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
	function _toConsumableArray(r) {
		return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
	}

//#endregion
//#region modules/atomic-widgets/assets/js/editor/utils/get-element-children.js
	function getElementChildren(model) {
		var _model$get$models;
		var _model$get;
		if (!model) return [];
		var children = ((_model$get$models = (_model$get = model.get("elements")) === null || _model$get === void 0 ? void 0 : _model$get.models) !== null && _model$get$models !== void 0 ? _model$get$models : []).flatMap(getElementChildren);
		return [model].concat(_toConsumableArray(children));
	}

//#endregion
//#region modules/atomic-widgets/assets/js/editor/utils/get-random-style-id.js
/**
	* @typedef {import('elementor/assets/dev/js/editor/container/container')} Container
	*/
	/**
	* @param {Container} container
	* @param {Object}    existingStyleIds
	* @return {string}
	*/
	function getRandomStyleId(container) {
		var existingStyleIds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		var id;
		do
			id = "e-".concat(container.id, "-").concat(elementorCommon.helpers.getUniqueId());
		while (existingStyleIds.hasOwnProperty(id));
		return id;
	}

//#endregion
//#region modules/atomic-widgets/assets/js/editor/utils/regenerate-local-style-ids.js
	init_defineProperty();
	function ownKeys$2(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	__name(ownKeys$2, "ownKeys");
	function _objectSpread$2(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$2(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	__name(_objectSpread$2, "_objectSpread");
	function regenerateLocalStyleIds(container) {
		if (!(container !== null && container !== void 0 && container.model)) return;
		updateElementsStyleIdsInsideOut(getElementChildren(container.model).filter(function(model) {
			var _model$get;
			return model && Object.keys((_model$get = model.get("styles")) !== null && _model$get !== void 0 ? _model$get : {}).length > 0;
		}));
	}
	function isClassesProp(prop) {
		return prop.$$type && "classes" === prop.$$type && Array.isArray(prop.value) && prop.value.length > 0;
	}
	function calculateNewStylesAndSettings(element, model, settings) {
		var _settings$toJSON;
		var originalStyles = model.get("styles");
		var settingsJson = (_settings$toJSON = settings === null || settings === void 0 ? void 0 : settings.toJSON()) !== null && _settings$toJSON !== void 0 ? _settings$toJSON : {};
		var classesProps = Object.entries(settingsJson).filter(function(_ref) {
			var propValue = _slicedToArray(_ref, 2)[1];
			return isClassesProp(propValue);
		});
		var newStyles = {};
		var changedIds = {};
		Object.entries(originalStyles).forEach(function(_ref3) {
			var _ref4 = _slicedToArray(_ref3, 2);
			var originalStyleId = _ref4[0];
			var style = _ref4[1];
			var newStyleId = getRandomStyleId(element, newStyles);
			newStyles[newStyleId] = structuredClone(_objectSpread$2(_objectSpread$2({}, style), {}, { id: newStyleId }));
			changedIds[originalStyleId] = newStyleId;
		});
		var newClassesProps = classesProps.map(function(_ref5) {
			var _ref6 = _slicedToArray(_ref5, 2);
			var key = _ref6[0];
			var value = _ref6[1];
			return [key, _objectSpread$2(_objectSpread$2({}, value), {}, { value: value.value.map(function(className) {
				var _changedIds$className;
				return (_changedIds$className = changedIds[className]) !== null && _changedIds$className !== void 0 ? _changedIds$className : className;
			}) })];
		}, {});
		return {
			newStyles,
			newSettings: Object.fromEntries(newClassesProps)
		};
	}
	function updateStyleIdForContainer(container) {
		var model = container.model;
		var settings = container.settings;
		var _calculateNewStylesAn = calculateNewStylesAndSettings(container, model, settings);
		var newStyles = _calculateNewStylesAn.newStyles;
		var newSettings = _calculateNewStylesAn.newSettings;
		$e.internal("document/elements/set-settings", {
			container,
			settings: newSettings
		});
		model.set("styles", newStyles);
	}
	function updateStyleIdForModel(model) {
		var settings = model.get("settings");
		var _calculateNewStylesAn2 = calculateNewStylesAndSettings(model, model, settings);
		var newStyles = _calculateNewStylesAn2.newStyles;
		var newSettings = _calculateNewStylesAn2.newSettings;
		settings.set(newSettings);
		model.set("styles", newStyles);
	}
	function updateStyleId(model) {
		var container = window.elementor.getContainer(model.get("id"));
		if (container) {
			updateStyleIdForContainer(container);
			return;
		}
		updateStyleIdForModel(model);
	}
	function updateElementsStyleIdsInsideOut(styledElements) {
		styledElements === null || styledElements === void 0 || styledElements.reverse().forEach(updateStyleId);
	}

//#endregion
//#region modules/atomic-widgets/assets/js/editor/hooks/data/regenerate-local-style-ids/duplicate-element.js
	function _callSuper$6(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$6() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$6, "_callSuper");
	function _isNativeReflectConstruct$6() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$6 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$6, "_isNativeReflectConstruct");
	var DuplicateElement$1 = /*#__PURE__*/ function(_$e$modules$hookData$) {
		function DuplicateElement() {
			_classCallCheck(this, DuplicateElement);
			return _callSuper$6(this, DuplicateElement, arguments);
		}
		_inherits(DuplicateElement, _$e$modules$hookData$);
		return _createClass(DuplicateElement, [
			{
				key: "getCommand",
				value: function getCommand() {
					return "document/elements/duplicate";
				}
			},
			{
				key: "getId",
				value: function getId() {
					return "regenerate-local-style-ids--document/elements/duplicate";
				}
			},
			{
				key: "apply",
				value: function apply(args, result) {
					(Array.isArray(result) ? result : [result]).forEach(regenerateLocalStyleIds);
				}
			}
		]);
	}($e.modules.hookData.After);

//#endregion
//#region modules/atomic-widgets/assets/js/editor/hooks/data/regenerate-local-style-ids/paste-element.js
	function _callSuper$5(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$5() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$5, "_callSuper");
	function _isNativeReflectConstruct$5() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$5 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$5, "_isNativeReflectConstruct");
	var PasteElement = /*#__PURE__*/ function(_$e$modules$hookData$) {
		function PasteElement() {
			_classCallCheck(this, PasteElement);
			return _callSuper$5(this, PasteElement, arguments);
		}
		_inherits(PasteElement, _$e$modules$hookData$);
		return _createClass(PasteElement, [
			{
				key: "getCommand",
				value: function getCommand() {
					return "document/elements/paste";
				}
			},
			{
				key: "getId",
				value: function getId() {
					return "regenerate-local-style-ids--document/elements/paste";
				}
			},
			{
				key: "apply",
				value: function apply(args, result) {
					(Array.isArray(result) ? result : [result]).forEach(regenerateLocalStyleIds);
				}
			}
		]);
	}($e.modules.hookData.After);

//#endregion
//#region modules/atomic-widgets/assets/js/editor/hooks/data/regenerate-local-style-ids/import-element.js
	function _callSuper$4(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$4() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$4, "_callSuper");
	function _isNativeReflectConstruct$4() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$4 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$4, "_isNativeReflectConstruct");
	var ImportElement = /*#__PURE__*/ function(_$e$modules$hookData$) {
		function ImportElement() {
			_classCallCheck(this, ImportElement);
			return _callSuper$4(this, ImportElement, arguments);
		}
		_inherits(ImportElement, _$e$modules$hookData$);
		return _createClass(ImportElement, [
			{
				key: "getCommand",
				value: function getCommand() {
					return "document/elements/import";
				}
			},
			{
				key: "getId",
				value: function getId() {
					return "regenerate-local-style-ids--document/elements/import";
				}
			},
			{
				key: "apply",
				value: function apply(args, result) {
					(Array.isArray(result) ? result : [result]).forEach(regenerateLocalStyleIds);
				}
			}
		]);
	}($e.modules.hookData.After);

//#endregion
//#region modules/atomic-widgets/assets/js/editor/utils/clear-duplicated-settings.js
	init_defineProperty();
	init_typeof();
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
	__name(ownKeys$1, "ownKeys");
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
	__name(_objectSpread$1, "_objectSpread");
	var DUPLICATE_BEHAVIOR_META_KEY = "duplicate_behavior";
	var DUPLICATE_BEHAVIOR_CLEAR = "clear";
	function getClearablePropKeys(model) {
		var _elementor$helpers$ge;
		var _elementor$helpers$ge2;
		var schema = (_elementor$helpers$ge = (_elementor$helpers$ge2 = elementor.helpers.getWidgetCache(model)) === null || _elementor$helpers$ge2 === void 0 ? void 0 : _elementor$helpers$ge2.atomic_props_schema) !== null && _elementor$helpers$ge !== void 0 ? _elementor$helpers$ge : {};
		return Object.entries(schema).filter(function(_ref) {
			var _prop$meta;
			var prop = _slicedToArray(_ref, 2)[1];
			return DUPLICATE_BEHAVIOR_CLEAR === (prop === null || prop === void 0 || (_prop$meta = prop.meta) === null || _prop$meta === void 0 ? void 0 : _prop$meta[DUPLICATE_BEHAVIOR_META_KEY]);
		}).map(function(_ref3) {
			return _slicedToArray(_ref3, 1)[0];
		});
	}
	function getSettingsJson(model) {
		var _model$get$toJSON;
		var _model$get;
		var _model$get$toJSON2;
		var container = elementor.getContainer(model.get("id"));
		if (container) {
			var _container$settings$t;
			var _container$settings;
			var _container$settings$t2;
			return (_container$settings$t = (_container$settings = container.settings) === null || _container$settings === void 0 || (_container$settings$t2 = _container$settings.toJSON) === null || _container$settings$t2 === void 0 ? void 0 : _container$settings$t2.call(_container$settings)) !== null && _container$settings$t !== void 0 ? _container$settings$t : {};
		}
		return (_model$get$toJSON = (_model$get = model.get("settings")) === null || _model$get === void 0 || (_model$get$toJSON2 = _model$get.toJSON) === null || _model$get$toJSON2 === void 0 ? void 0 : _model$get$toJSON2.call(_model$get)) !== null && _model$get$toJSON !== void 0 ? _model$get$toJSON : {};
	}
	function toClearedValue(currentValue) {
		if (currentValue && "object" === _typeof(currentValue) && "$$type" in currentValue) return _objectSpread$1(_objectSpread$1({}, currentValue), {}, { value: null });
		return null;
	}
	function updateSettings(model, settings) {
		var _model$get2;
		var container = elementor.getContainer(model.get("id"));
		if (container) {
			$e.internal("document/elements/set-settings", {
				container,
				settings
			});
			return;
		}
		(_model$get2 = model.get("settings")) === null || _model$get2 === void 0 || _model$get2.set(settings);
	}
	function clearSettingsForModel(model) {
		var clearableKeys = getClearablePropKeys(model);
		if (!clearableKeys.length) return;
		var settingsJson = getSettingsJson(model);
		var settingsToClear = clearableKeys.reduce(function(acc, key) {
			var _settingsJson$key;
			if ((_settingsJson$key = settingsJson[key]) !== null && _settingsJson$key !== void 0 && _settingsJson$key.value) acc[key] = toClearedValue(settingsJson[key]);
			return acc;
		}, {});
		if (Object.keys(settingsToClear).length) updateSettings(model, settingsToClear);
	}
	function clearDuplicatedSettings(container) {
		if (!(container !== null && container !== void 0 && container.model)) return;
		getElementChildren(container.model).forEach(clearSettingsForModel);
	}

//#endregion
//#region modules/atomic-widgets/assets/js/editor/hooks/data/clear-duplicated-settings/duplicate-element.js
	function _callSuper$3(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$3() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$3, "_callSuper");
	function _isNativeReflectConstruct$3() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$3 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$3, "_isNativeReflectConstruct");
	var DuplicateElement = /*#__PURE__*/ function(_$e$modules$hookData$) {
		function DuplicateElement() {
			_classCallCheck(this, DuplicateElement);
			return _callSuper$3(this, DuplicateElement, arguments);
		}
		_inherits(DuplicateElement, _$e$modules$hookData$);
		return _createClass(DuplicateElement, [
			{
				key: "getCommand",
				value: function getCommand() {
					return "document/elements/duplicate";
				}
			},
			{
				key: "getId",
				value: function getId() {
					return "clear-duplicated-settings--document/elements/duplicate";
				}
			},
			{
				key: "apply",
				value: function apply(args, result) {
					(Array.isArray(result) ? result : [result]).filter(Boolean).forEach(clearDuplicatedSettings);
				}
			}
		]);
	}($e.modules.hookData.After);

//#endregion
//#region modules/atomic-widgets/assets/js/editor/hooks/index.js
	var hooks_exports = /* @__PURE__ */ __exportAll({
		ClearDuplicatedSettingsElement: () => DuplicateElement,
		DuplicateElement: () => DuplicateElement$1,
		ImportElement: () => ImportElement,
		PasteElement: () => PasteElement
	});

//#endregion
//#region modules/atomic-widgets/assets/js/editor/component.js
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
	var Component = /*#__PURE__*/ function(_$e$modules$Component) {
		function Component() {
			_classCallCheck(this, Component);
			return _callSuper$2(this, Component, arguments);
		}
		_inherits(Component, _$e$modules$Component);
		return _createClass(Component, [{
			key: "getNamespace",
			value: function getNamespace() {
				return "document/atomic-widgets";
			}
		}, {
			key: "defaultHooks",
			value: function defaultHooks() {
				return this.importHooks(hooks_exports);
			}
		}]);
	}($e.modules.ComponentBase);

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
//#region assets/dev/js/editor/utils/element-types.js
	var require_element_types = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/**
		* Returns an array of all available element types.
		*
		* @return {string[]} Array of element type strings.
		*/
		var getAllElementTypes = function getAllElementTypes() {
			return Object.keys(elementor.getConfig().elements);
		};
		/**
		* Returns whether an element type is a compound atomic element —
		* one that should be auto-wrapped in a flexbox container when dropped on the canvas,
		* consistent with atom elements (Heading, Image, etc.).
		*
		* Compound atomic elements declare `is_compound: true` in their PHP element meta.
		*
		* @param {string} elType - The element type string (e.g. 'e-tabs').
		* @return {boolean}
		*/
		var isCompoundAtomicType = function isCompoundAtomicType(elType) {
			var _elementor$getConfig$;
			return !!((_elementor$getConfig$ = elementor.getConfig().elements[elType]) !== null && _elementor$getConfig$ !== void 0 && (_elementor$getConfig$ = _elementor$getConfig$.meta) !== null && _elementor$getConfig$ !== void 0 && _elementor$getConfig$.is_compound);
		};
		module.exports = {
			getAllElementTypes,
			isCompoundAtomicType
		};
	}));

//#endregion
//#region node_modules/react-dom/client.js
	var require_client = /* @__PURE__ */ __commonJSMin(((exports) => {
		var m = (globalThis.ReactDOM);
		var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
		exports.createRoot = function(c, o) {
			i.usingClientEntryPoint = true;
			try {
				return m.createRoot(c, o);
			} finally {
				i.usingClientEntryPoint = false;
			}
		};
	}));

//#endregion
//#region assets/dev/js/utils/react.js
var import_regenerator = /* @__PURE__ */ __toESM(require_regenerator());
var import_element_types = require_element_types();
	var import_client = require_client();
	/**
	* Support conditional rendering of a React App to the DOM, based on the React version.
	* We use `createRoot` when available, but fallback to `ReactDOM.render` for older versions.
	*
	* @param {Promise.resolve(React).ReactElement} app        The app to render.
	* @param {HTMLElement}                  domElement The DOM element to render the app into.
	*
	* @return {{ unmount: () => void }} The unmount function.
	*/
	function render(app, domElement) {
		var unmountFunction;
		try {
			var root = (0, import_client.createRoot)(domElement);
			root.render(app);
			unmountFunction = function unmountFunction() {
				root.unmount();
			};
		} catch (e) {
			react_dom.render(app, domElement);
			unmountFunction = function unmountFunction() {
				react_dom.unmountComponentAtNode(domElement);
			};
		}
		return { unmount: unmountFunction };
	}
	var react_default = { render };

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
//#region assets/dev/js/editor/utils/editor-one-events.js
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
	init_defineProperty();
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
//#region assets/dev/js/editor/elements/views/container/empty-component.js
	function EmptyComponent() {
		var container = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).container;
		return /*#__PURE__*/ react.default.createElement("div", { className: "elementor-first-add" }, /*#__PURE__*/ react.default.createElement("div", {
			className: "elementor-icon eicon-plus",
			onClick: function handleClick() {
				if (container) $e.run("document/elements/select", { container });
				EditorOneEventManager.sendCanvasEmptyBoxAction({ targetName: "add_container" });
				$e.route("panel/elements/categories");
			}
		}));
	}
	EmptyComponent.propTypes = { container: import_prop_types.default.object };

//#endregion
//#region modules/atomic-widgets/assets/js/editor/container/atomic-element-empty-view.js
	init_defineProperty();
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
	var AtomicElementEmptyView = /*#__PURE__*/ function(_Marionette$ItemView) {
		function AtomicElementEmptyView() {
			var _this;
			_classCallCheck(this, AtomicElementEmptyView);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _callSuper$1(this, AtomicElementEmptyView, [].concat(args));
			_defineProperty(_this, "template", "<div></div>");
			_defineProperty(_this, "className", "elementor-empty-view");
			_defineProperty(_this, "unmount", null);
			return _this;
		}
		_inherits(AtomicElementEmptyView, _Marionette$ItemView);
		return _createClass(AtomicElementEmptyView, [
			{
				key: "renderReactDefaultElement",
				value: function renderReactDefaultElement(container) {
					var unmount = react_default.render(/*#__PURE__*/ react.default.createElement(EmptyComponent, { container }), this.el).unmount;
					this.unmount = unmount;
				}
			},
			{
				key: "onBeforeRender",
				value: function onBeforeRender() {
					if (this.unmount) {
						this.unmount();
						this.unmount = null;
					}
				}
			},
			{
				key: "onRender",
				value: function onRender() {
					var _this$_parent;
					var _this$_parent$getCont;
					this.$el.addClass(this.className);
					this.renderReactDefaultElement((_this$_parent = this._parent) === null || _this$_parent === void 0 || (_this$_parent$getCont = _this$_parent.getContainer) === null || _this$_parent$getCont === void 0 ? void 0 : _this$_parent$getCont.call(_this$_parent));
				}
			},
			{
				key: "onDestroy",
				value: function onDestroy() {
					var _this$unmount;
					(_this$unmount = this.unmount) === null || _this$unmount === void 0 || _this$unmount.call(this);
				}
			}
		]);
	}(Marionette.ItemView);

//#endregion
//#region assets/dev/js/editor/elements/views/behaviors/sortable.js
	var require_sortable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_defineProperty();
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
		var SortableBehavior = Marionette.Behavior.extend({
			defaults: { elChildType: "widget" },
			events: {
				sortstart: "onSortStart",
				sortreceive: "onSortReceive",
				sortupdate: "onSortUpdate",
				sortover: "onSortOver",
				sortout: "onSortOut"
			},
			initialize: function initialize() {
				this.listenTo(elementor.channels.dataEditMode, "switch", this.onEditModeSwitched).listenTo(this.view.options.model, "request:sort:start", this.startSort).listenTo(this.view.options.model, "request:sort:update", this.updateSort).listenTo(this.view.options.model, "request:sort:receive", this.receiveSort);
			},
			onEditModeSwitched: function onEditModeSwitched(activeMode) {
				this.onToggleSortMode("edit" === activeMode);
			},
			refresh: function refresh() {
				this.onEditModeSwitched(elementor.channels.dataEditMode.request("activeMode"));
			},
			onRender: function onRender() {
				var _this = this;
				this.view.collection.on("update", function() {
					return _this.refresh();
				});
				_.defer(function() {
					return _this.refresh();
				});
			},
			onDestroy: function onDestroy() {
				this.deactivate();
			},
			/**
			* Create an item placeholder in order to avoid UI jumps due to flex.
			*
			* @param {Object}  $element  - jQuery element instance to create placeholder for.
			* @param {string}  className - Placeholder class.
			* @param {boolean} hide      - Whether to hide the original element.
			*
			* @return {void}
			*/
			createPlaceholder: function createPlaceholder($element) {
				var className = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
				var hide = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
				$element.css("display", "");
				var _$element$ = $element[0];
				var width = _$element$.clientWidth;
				var height = _$element$.clientHeight;
				if (hide) $element.css("display", "none");
				jQuery("<div />").css(_objectSpread(_objectSpread({}, $element.css([
					"flex-basis",
					"flex-grow",
					"flex-shrink",
					"position"
				])), {}, {
					width,
					height
				})).addClass(className).insertAfter($element);
			},
			/**
			* Return a settings object for jQuery UI sortable to make it swappable.
			*
			* @return {{stop: Function, start: Function}} options
			*/
			getSwappableOptions: function getSwappableOptions() {
				var _this2 = this;
				var $childViewContainer = this.getChildViewContainer();
				var placeholderClass = "e-swappable--item-placeholder";
				return {
					start: function start(event, ui) {
						$childViewContainer.sortable("refreshPositions");
						_this2.createPlaceholder(ui.item, placeholderClass);
					},
					stop: function stop() {
						$childViewContainer.find(".".concat(placeholderClass)).remove();
					}
				};
			},
			onToggleSortMode: function onToggleSortMode(isActive) {
				if (isActive) this.activate();
				else this.deactivate();
			},
			applySortable: function applySortable() {
				if (!elementor.userCan("design")) return;
				var $childViewContainer = this.getChildViewContainer();
				var defaultSortableOptions = {
					placeholder: "elementor-sortable-placeholder elementor-" + this.getOption("elChildType") + "-placeholder",
					cursorAt: {
						top: 20,
						left: 25
					},
					helper: this._getSortableHelper.bind(this),
					cancel: "input, textarea, button, select, option, .elementor-inline-editing, .elementor-tab-title",
					start: function start() {
						$childViewContainer.sortable("refreshPositions");
					}
				};
				var sortableOptions = _.extend(defaultSortableOptions, this.view.getSortableOptions());
				if (this.isSwappable()) {
					$childViewContainer.addClass("e-swappable");
					sortableOptions = _.extend(sortableOptions, this.getSwappableOptions());
				}
				if (sortableOptions.preventInit) return;
				$childViewContainer.sortable(sortableOptions);
			},
			/**
			* Enable sorting for this element, and generate sortable instance for it unless already generated.
			*/
			activate: function activate() {
				if (!this.getChildViewContainer().sortable("instance")) {
					this.applySortable();
					return;
				}
				this.getChildViewContainer().sortable("enable");
			},
			_getSortableHelper: function _getSortableHelper(event, $item) {
				var model = this.view.collection.get({ cid: $item.data("model-cid") });
				return "<div style=\"height: 84px; width: 125px;\" class=\"elementor-sortable-helper elementor-sortable-helper-" + model.get("elType") + "\"><div class=\"icon\"><i class=\"" + model.getIcon() + "\"></i></div><div class=\"title-wrapper\"><div class=\"title\">" + model.getTitle() + "</div></div></div>";
			},
			getChildViewContainer: function getChildViewContainer() {
				return this.view.getChildViewContainer(this.view);
			},
			getSortedElementNewIndex: function getSortedElementNewIndex($element) {
				return Object.values($element.parent().find("> .elementor-element")).indexOf($element[0]);
			},
			/**
			* Disable sorting of the element unless no sortable instance exists, in which case there is already no option to
			* sort.
			*/
			deactivate: function deactivate() {
				var childViewContainer = this.getChildViewContainer();
				if (childViewContainer.sortable("instance")) childViewContainer.sortable("disable");
			},
			/**
			* Determine if the current instance of Sortable is swappable.
			*
			* @return {boolean} is swappable
			*/
			isSwappable: function isSwappable() {
				return !!this.view.getSortableOptions().swappable;
			},
			startSort: function startSort(event, ui) {
				event.stopPropagation();
				var container = elementor.getContainer(ui.item.attr("data-id"));
				elementor.channels.data.reply("dragging:model", container.model).reply("dragging:view", container.view).reply("dragging:parent:view", this.view).trigger("drag:start", container.model).trigger(container.model.get("elType") + ":drag:start");
			},
			updateSort: function updateSort(ui, newIndex) {
				if (void 0 === newIndex) newIndex = ui.item.index();
				var child = elementor.channels.data.request("dragging:view").getContainer();
				if (!this.moveChild(child, newIndex)) jQuery(ui.sender).sortable("cancel");
			},
			receiveSort: function receiveSort(event, ui, newIndex) {
				event.stopPropagation();
				if (this.view.isCollectionFilled()) {
					jQuery(ui.sender).sortable("cancel");
					return;
				}
				var model = elementor.channels.data.request("dragging:model");
				var draggedIsInnerSection = "section" === model.get("elType") && model.get("isInner");
				var targetIsInnerColumn = "column" === this.view.getElementType() && this.view.isInner();
				if (draggedIsInnerSection && targetIsInnerColumn) {
					jQuery(ui.sender).sortable("cancel");
					return;
				}
				if (void 0 === newIndex) newIndex = ui.item.index();
				var child = elementor.channels.data.request("dragging:view").getContainer();
				if (!this.moveChild(child, newIndex)) jQuery(ui.sender).sortable("cancel");
			},
			onSortStart: function onSortStart(event, ui) {
				if ("column" === this.options.elChildType) {
					var uiItems = ui.item.data("sortableItem").items;
					var itemHeight = 0;
					uiItems.forEach(function(item) {
						if (item.item[0] === ui.item[0]) {
							itemHeight = item.height;
							return false;
						}
					});
					ui.placeholder.height(itemHeight);
				}
				this.startSort(event, ui);
			},
			onSortOver: function onSortOver(event) {
				event.stopPropagation();
				var model = elementor.channels.data.request("dragging:model");
				jQuery(event.target).addClass("elementor-draggable-over").attr({
					"data-dragged-element": model.get("elType"),
					"data-dragged-is-inner": model.get("isInner")
				});
				this.$el.addClass("elementor-dragging-on-child");
			},
			onSortOut: function onSortOut(event) {
				event.stopPropagation();
				jQuery(event.target).removeClass("elementor-draggable-over").removeAttr("data-dragged-element data-dragged-is-inner");
				this.$el.removeClass("elementor-dragging-on-child");
			},
			onSortReceive: function onSortReceive(event, ui) {
				this.receiveSort(event, ui, this.getSortedElementNewIndex(ui.item));
			},
			onSortUpdate: function onSortUpdate(event, ui) {
				event.stopPropagation();
				if (this.getChildViewContainer()[0] !== ui.item.parent()[0]) return;
				this.updateSort(ui, this.getSortedElementNewIndex(ui.item));
			},
			onAddChild: function onAddChild(view) {
				view.$el.attr("data-model-cid", view.model.cid);
			},
			/**
			* Move a child container to another position.
			*
			* @param {Container}     child - The child container to move.
			* @param {number|string} index - New index.
			*
			* @return {Container|boolean}
			*/
			moveChild: function moveChild(child, index) {
				return $e.run("document/elements/move", {
					container: child,
					target: this.view.getContainer(),
					options: { at: index }
				});
			}
		});
		module.exports = SortableBehavior;
	}));

//#endregion
//#region modules/atomic-widgets/assets/js/editor/create-atomic-element-base-view.js
	var BaseElementView = elementor.modules.elements.views.BaseElement;
	function createAtomicElementBaseView(type) {
		return BaseElementView.extend({
			template: Marionette.TemplateCache.get("#tmpl-elementor-".concat(type, "-content")),
			emptyView: AtomicElementEmptyView,
			_childrenRenderPromises: [],
			_createElement: function _createElement(tag) {
				var _elementor$$preview;
				var previewDocument = (_elementor$$preview = elementor.$preview) === null || _elementor$$preview === void 0 || (_elementor$$preview = _elementor$$preview[0]) === null || _elementor$$preview === void 0 ? void 0 : _elementor$$preview.contentDocument;
				if (previewDocument) return previewDocument.createElement(tag);
				return document.createElement(tag);
			},
			getChildViewContainer: function getChildViewContainer() {
				this.childViewContainer = "";
				return Marionette.CompositeView.prototype.getChildViewContainer.apply(this, arguments);
			},
			getChildType: function getChildType() {
				var atomicElements = Object.entries(elementor.config.elements).filter(function(_ref) {
					var element = _slicedToArray(_ref, 2)[1];
					return !!(element !== null && element !== void 0 && element.atomic_props_schema);
				}).map(function(_ref3) {
					return _slicedToArray(_ref3, 1)[0];
				});
				return ["widget", "container"].concat(_toConsumableArray(atomicElements));
			},
			getRenderContext: function getRenderContext() {
				var _this$_parent;
				var _this$_parent$getRend;
				return (_this$_parent = this._parent) === null || _this$_parent === void 0 || (_this$_parent$getRend = _this$_parent.getRenderContext) === null || _this$_parent$getRend === void 0 ? void 0 : _this$_parent$getRend.call(_this$_parent);
			},
			getResolverRenderContext: function getResolverRenderContext() {
				var _this$_parent2;
				var _this$_parent2$getRes;
				return (_this$_parent2 = this._parent) === null || _this$_parent2 === void 0 || (_this$_parent2$getRes = _this$_parent2.getResolverRenderContext) === null || _this$_parent2$getRes === void 0 ? void 0 : _this$_parent2$getRes.call(_this$_parent2);
			},
			render: function render() {
				var _this = this;
				this._currentRenderPromise = new Promise(function(resolve) {
					if (_this._shouldSkipFullRender()) _this._renderWithoutDomRecreation(resolve);
					else _this._renderWithDomRecreation(resolve);
				});
				return this;
			},
			_shouldSkipFullRender: function _shouldSkipFullRender() {
				return this.isRendered && this._hasConnectedChildren();
			},
			_hasConnectedChildren: function _hasConnectedChildren() {
				var _this$children;
				var _firstChild$$el$get$i;
				var _firstChild$$el;
				if (!((_this$children = this.children) !== null && _this$children !== void 0 && _this$children.length)) return false;
				var firstChild = this.children.findByIndex(0);
				return (_firstChild$$el$get$i = firstChild === null || firstChild === void 0 || (_firstChild$$el = firstChild.$el) === null || _firstChild$$el === void 0 || (_firstChild$$el = _firstChild$$el.get(0)) === null || _firstChild$$el === void 0 ? void 0 : _firstChild$$el.isConnected) !== null && _firstChild$$el$get$i !== void 0 ? _firstChild$$el$get$i : false;
			},
			_renderWithoutDomRecreation: function _renderWithoutDomRecreation(resolve) {
				var _this2 = this;
				this._beforeRender();
				this._renderChildren();
				this._waitForChildrenToComplete().then(function() {
					_this2._afterRender();
					resolve();
				});
			},
			_renderWithDomRecreation: function _renderWithDomRecreation(resolve) {
				BaseElementView.prototype.render.apply(this, arguments);
				this._waitForChildrenToComplete().then(function() {
					resolve();
				});
			},
			_beforeRender: function _beforeRender() {
				this._isRendering = true;
				this.triggerMethod("before:render", this);
			},
			_afterRender: function _afterRender() {
				this._isRendering = false;
				this.isRendered = true;
				this.triggerMethod("render", this);
			},
			_waitForChildrenToComplete: function _waitForChildrenToComplete() {
				var _this3 = this;
				return _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
					return import_regenerator.default.wrap(function(_context) {
						while (1) switch (_context.prev = _context.next) {
							case 0:
								if (!(_this3._childrenRenderPromises.length > 0)) {
									_context.next = 1;
									break;
								}
								_context.next = 1;
								return Promise.all(_this3._childrenRenderPromises);
							case 1:
							case "end": return _context.stop();
						}
					}, _callee);
				}))();
			},
			_renderChildren: function _renderChildren() {
				if (this._shouldSkipFullRender()) {
					var _this$children2;
					(_this$children2 = this.children) === null || _this$children2 === void 0 || _this$children2.each(function(childView) {
						return childView.render();
					});
				} else BaseElementView.prototype._renderChildren.apply(this, arguments);
				this._collectChildrenRenderPromises();
			},
			_collectChildrenRenderPromises: function _collectChildrenRenderPromises() {
				var _this$children3;
				var _this4 = this;
				this._childrenRenderPromises = [];
				(_this$children3 = this.children) === null || _this$children3 === void 0 || _this$children3.each(function(childView) {
					if (childView._currentRenderPromise) _this4._childrenRenderPromises.push(childView._currentRenderPromise);
				});
			},
			onRender: function onRender() {
				var _this5 = this;
				this.dispatchPreviewEvent("elementor/element/render");
				BaseElementView.prototype.onRender.apply(this, arguments);
				setTimeout(function() {
					if (_this5.isAtomicGridContainer()) _this5.reInitEmptyView();
					_this5.droppableInitialize();
					_this5.updateHandlesPosition();
				});
			},
			destroyEmptyView: function destroyEmptyView() {
				if (this.isAtomicGridContainer()) return;
				return Marionette.CompositeView.prototype.destroyEmptyView.apply(this, arguments);
			},
			isAtomicGridContainer: function isAtomicGridContainer() {
				return "e-grid" === type;
			},
			reInitEmptyView: function reInitEmptyView() {
				var _this$el;
				if ((_this$el = this.el) !== null && _this$el !== void 0 && _this$el.querySelector(":scope > .elementor-empty-view")) return;
				delete this._showingEmptyView;
				this.showEmptyView();
			},
			onDestroy: function onDestroy() {
				BaseElementView.prototype.onDestroy.apply(this, arguments);
				this.dispatchPreviewEvent("elementor/element/destroy");
			},
			dispatchPreviewEvent: function dispatchPreviewEvent(eventType) {
				var _elementor;
				(_elementor = elementor) === null || _elementor === void 0 || (_elementor = _elementor.$preview) === null || _elementor === void 0 || (_elementor = _elementor[0]) === null || _elementor === void 0 || _elementor.contentWindow.dispatchEvent(new CustomEvent(eventType, { detail: {
					id: this.model.get("id"),
					type: this.model.get("elType"),
					element: this.getDomElement().get(0)
				} }));
			},
			droppableInitialize: function droppableInitialize() {
				this.$el.html5Droppable(this.getDroppableOptions());
			},
			/**
			* Add a `Save as a Template` button to the context menu.
			*
			* @return {Object} groups
			*/
			getContextMenuGroups: function getContextMenuGroups() {
				var _this6 = this;
				var saveActions = [{
					name: "save",
					title: (0, _wordpress_i18n.__)("Save as a template", "elementor"),
					callback: this.saveAsTemplate.bind(this),
					isEnabled: function isEnabled() {
						return !_this6.getContainer().isLocked();
					}
				}];
				if (elementor.config.user.is_administrator) {
					var _window$elementorV2$u;
					var _window$elementorV;
					var _window$elementorV$is;
					var _window$elementorV2$u2;
					var _window$elementorV2;
					var _window$elementorV2$h;
					var _window$elementorV2$u3;
					var _window$elementorV3;
					var _window$elementorV3$i;
					var isProActive = (_window$elementorV2$u = (_window$elementorV = window.elementorV2) === null || _window$elementorV === void 0 || (_window$elementorV = _window$elementorV.utils) === null || _window$elementorV === void 0 || (_window$elementorV$is = _window$elementorV.isProActive) === null || _window$elementorV$is === void 0 ? void 0 : _window$elementorV$is.call(_window$elementorV)) !== null && _window$elementorV2$u !== void 0 ? _window$elementorV2$u : true;
					var isProOutdated = ((_window$elementorV2$u2 = (_window$elementorV2 = window.elementorV2) === null || _window$elementorV2 === void 0 || (_window$elementorV2 = _window$elementorV2.utils) === null || _window$elementorV2 === void 0 || (_window$elementorV2$h = _window$elementorV2.hasProInstalled) === null || _window$elementorV2$h === void 0 ? void 0 : _window$elementorV2$h.call(_window$elementorV2)) !== null && _window$elementorV2$u2 !== void 0 ? _window$elementorV2$u2 : false) && !((_window$elementorV2$u3 = (_window$elementorV3 = window.elementorV2) === null || _window$elementorV3 === void 0 || (_window$elementorV3 = _window$elementorV3.utils) === null || _window$elementorV3 === void 0 || (_window$elementorV3$i = _window$elementorV3.isProAtLeast) === null || _window$elementorV3$i === void 0 ? void 0 : _window$elementorV3$i.call(_window$elementorV3, "4.0")) !== null && _window$elementorV2$u3 !== void 0 ? _window$elementorV2$u3 : false);
					var showPromoBadge = !isProActive && !isProOutdated;
					var newBadge = "<span class=\"elementor-context-menu-list__item__shortcut__new-badge\">".concat((0, _wordpress_i18n.__)("New", "elementor"), "</span>");
					var proBadge = "<a href=\"https://go.elementor.com/go-pro-components-Instance-create-context-menu/\" target=\"_blank\" onclick=\"event.stopPropagation()\" class=\"".concat("elementor-context-menu-list__item__shortcut__promotion-badge", "\"><i class=\"eicon-upgrade-crown\"></i></a>");
					saveActions.unshift({
						name: "save-component",
						title: (0, _wordpress_i18n.__)("Create component", "elementor"),
						shortcut: isProActive || isProOutdated ? newBadge : proBadge,
						hasShortcutAction: showPromoBadge,
						callback: this.saveAsComponent.bind(this),
						isEnabled: function isEnabled() {
							return (isProActive || isProOutdated) && !_this6.getContainer().isLocked();
						}
					});
				}
				var groups = BaseElementView.prototype.getContextMenuGroups.apply(this, arguments);
				var transferGroupClipboardIndex = groups.indexOf(_.findWhere(groups, { name: "clipboard" }));
				groups.splice(transferGroupClipboardIndex + 1, 0, {
					name: "save",
					actions: saveActions
				});
				return groups;
			},
			saveAsTemplate: function saveAsTemplate() {
				elementor.templates.eventManager.sendNewSaveTemplateClickedEvent();
				$e.route("library/save-template", { model: this.model });
			},
			saveAsComponent: function saveAsComponent(openContextMenuEvent, options) {
				var _window$elementorV2$u4;
				var _window$elementorV4;
				var _window$elementorV4$h;
				var _window$elementorV2$u5;
				var _window$elementorV5;
				var _window$elementorV5$i;
				var _window$elementorV2$u6;
				var _window$elementorV7;
				var _window$elementorV7$i;
				if (((_window$elementorV2$u4 = (_window$elementorV4 = window.elementorV2) === null || _window$elementorV4 === void 0 || (_window$elementorV4 = _window$elementorV4.utils) === null || _window$elementorV4 === void 0 || (_window$elementorV4$h = _window$elementorV4.hasProInstalled) === null || _window$elementorV4$h === void 0 ? void 0 : _window$elementorV4$h.call(_window$elementorV4)) !== null && _window$elementorV2$u4 !== void 0 ? _window$elementorV2$u4 : false) && !((_window$elementorV2$u5 = (_window$elementorV5 = window.elementorV2) === null || _window$elementorV5 === void 0 || (_window$elementorV5 = _window$elementorV5.utils) === null || _window$elementorV5 === void 0 || (_window$elementorV5$i = _window$elementorV5.isProAtLeast) === null || _window$elementorV5$i === void 0 ? void 0 : _window$elementorV5$i.call(_window$elementorV5, "4.0")) !== null && _window$elementorV2$u5 !== void 0 ? _window$elementorV2$u5 : false)) {
					var _window$elementorV6;
					var _window$elementorV6$n;
					(_window$elementorV6 = window.elementorV2) === null || _window$elementorV6 === void 0 || (_window$elementorV6 = _window$elementorV6.editorNotifications) === null || _window$elementorV6 === void 0 || (_window$elementorV6$n = _window$elementorV6.notify) === null || _window$elementorV6$n === void 0 || _window$elementorV6$n.call(_window$elementorV6, {
						type: "info",
						id: "component-create-update",
						message: (0, _wordpress_i18n.__)("To create new components, update Elementor Pro to the latest version.", "elementor"),
						additionalActionProps: [{
							size: "small",
							variant: "contained",
							color: "info",
							href: "/wp-admin/plugins.php",
							target: "_blank",
							children: (0, _wordpress_i18n.__)("Update Now", "elementor")
						}]
					});
					return;
				}
				if (!((_window$elementorV2$u6 = (_window$elementorV7 = window.elementorV2) === null || _window$elementorV7 === void 0 || (_window$elementorV7 = _window$elementorV7.utils) === null || _window$elementorV7 === void 0 || (_window$elementorV7$i = _window$elementorV7.isProActive) === null || _window$elementorV7$i === void 0 ? void 0 : _window$elementorV7$i.call(_window$elementorV7)) !== null && _window$elementorV2$u6 !== void 0 ? _window$elementorV2$u6 : true)) return;
				var openMenuOriginalEvent = openContextMenuEvent.originalEvent;
				var iframeRect = elementor.$preview[0].getBoundingClientRect();
				var anchorPosition = {
					left: openMenuOriginalEvent.clientX + iframeRect.left,
					top: openMenuOriginalEvent.clientY + iframeRect.top
				};
				window.dispatchEvent(new CustomEvent("elementor/editor/open-save-as-component-form", { detail: {
					element: elementor.getContainer(this.model.id).model.toJSON({ remove: ["default"] }),
					anchorPosition,
					options
				} }));
			},
			isDroppingAllowed: function isDroppingAllowed() {
				return this.getContainer().isEditable();
			},
			behaviors: function behaviors() {
				var behaviors = BaseElementView.prototype.behaviors.apply(this, arguments);
				_.extend(behaviors, { Sortable: {
					behaviorClass: require_sortable(),
					elChildType: "widget"
				} });
				return elementor.hooks.applyFilters("elements/".concat(type, "/behaviors"), behaviors, this);
			},
			/**
			* @return {{}} options
			*/
			getSortableOptions: function getSortableOptions() {
				return { preventInit: true };
			},
			getDroppableOptions: function getDroppableOptions() {
				var _this7 = this;
				return {
					axis: this.isAtomicGridContainer() ? "vertical" : null,
					items: "> .elementor-element, > .elementor-empty-view .elementor-first-add",
					groups: ["elementor-element"],
					horizontalThreshold: 0,
					isDroppingAllowed: this.isDroppingAllowed.bind(this),
					currentElementClass: "elementor-html5dnd-current-element",
					placeholderClass: "elementor-sortable-placeholder elementor-widget-placeholder",
					hasDraggingOnChildClass: "e-dragging-over",
					getDropContainer: function getDropContainer() {
						return _this7.getContainer();
					},
					onDropping: function onDropping(side, event) {
						event.stopPropagation();
						elementor.getPreviewView().onPanelElementDragEnd();
						var draggedView = elementor.channels.editor.request("element:dragged");
						var draggedElement = draggedView === null || draggedView === void 0 ? void 0 : draggedView.getContainer().view.el;
						var isEmptyViewTarget = _this7.emptyViewIsCurrentlyBeingDraggedOver();
						var containerElement = isEmptyViewTarget ? _this7.el : event.currentTarget.parentElement;
						var elements = Array.from((containerElement === null || containerElement === void 0 ? void 0 : containerElement.querySelectorAll(":scope > .elementor-element")) || []);
						var targetIndex = isEmptyViewTarget ? elements.length : elements.indexOf(event.currentTarget);
						if (_this7.isPanelElement(draggedView, draggedElement)) {
							if (_this7.draggingOnBottomOrRightSide(side) && !isEmptyViewTarget) targetIndex++;
							_this7.onDrop(event, { at: targetIndex });
							return;
						}
						if (_this7.isParentElement(draggedView.getContainer().id)) return;
						if (isEmptyViewTarget) {
							_this7.moveDroppedItem(draggedView, targetIndex);
							return;
						}
						_this7.moveExistingElement(side, draggedView, containerElement, elements, targetIndex, draggedElement);
					}
				};
			},
			moveExistingElement: function moveExistingElement(side, draggedView, containerElement, elements, targetIndex, draggedElement) {
				var selfIndex = elements.indexOf(draggedElement);
				if (targetIndex === selfIndex) return;
				var dropIndex = this.getDropIndex(containerElement, side, targetIndex, selfIndex);
				this.moveDroppedItem(draggedView, dropIndex);
			},
			isPanelElement: function isPanelElement(draggedView, draggedElement) {
				return !draggedView || !draggedElement;
			},
			isParentElement: function isParentElement(draggedId) {
				var current = this.container;
				while (current) {
					if (current.id === draggedId) return true;
					current = current.parent;
				}
				return false;
			},
			getDropIndex: function getDropIndex(container, side, index, selfIndex) {
				var styles = window.getComputedStyle(container);
				var isFlex = ["flex", "inline-flex"].includes(styles.display);
				var isFlexReverse = isFlex && ["column-reverse", "row-reverse"].includes(styles.flexDirection);
				var isRow = isFlex && ["row-reverse", "row"].includes(styles.flexDirection);
				var isRtl = elementorCommon.config.isRTL;
				if ((isRow ? isFlexReverse !== isRtl : isFlexReverse) === this.draggingOnBottomOrRightSide(side)) {
					if (-1 === selfIndex || selfIndex >= index - 1) return index;
					return index > 0 ? index - 1 : 0;
				}
				if (0 <= selfIndex && selfIndex < index) return index;
				return index + 1;
			},
			moveDroppedItem: function moveDroppedItem(draggedView, dropIndex) {
				elementor.channels.editor.reply("element:dragged", null);
				$e.run("document/elements/move", {
					container: draggedView.getContainer(),
					target: this.getContainer(),
					options: { at: dropIndex }
				});
			},
			getEditButtons: function getEditButtons() {
				var elementData = elementor.getElementData(this.model);
				var editTools = {};
				if ($e.components.get("document/elements").utils.allowAddingWidgets()) {
					editTools.add = {
						title: (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("Add %s", "elementor"), elementData.title),
						icon: "plus"
					};
					editTools.edit = {
						title: (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("Edit %s", "elementor"), elementData.title),
						icon: "handle"
					};
				}
				if (!this.getContainer().isLocked()) {
					if (elementor.getPreferences("edit_buttons") && $e.components.get("document/elements").utils.allowAddingWidgets()) editTools.duplicate = {
						title: (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("Duplicate %s", "elementor"), elementData.title),
						icon: "clone"
					};
					editTools.remove = {
						title: (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("Delete %s", "elementor"), elementData.title),
						icon: "close"
					};
				}
				return editTools;
			},
			draggingOnBottomOrRightSide: function draggingOnBottomOrRightSide(side) {
				return ["bottom", "right"].includes(side);
			},
			emptyViewIsCurrentlyBeingDraggedOver: function emptyViewIsCurrentlyBeingDraggedOver() {
				return this.$el.find("> .elementor-empty-view > .elementor-first-add.elementor-html5dnd-current-element").length > 0;
			},
			/**
			* Toggle the `New Section` view when clicking the `add` button in the edit tools.
			*
			* @return {void}
			*/
			onAddButtonClick: function onAddButtonClick() {
				if (this.addSectionView && !this.addSectionView.isDestroyed) {
					this.addSectionView.fadeToDeath();
					return;
				}
				var addSectionView = new elementor.modules.elements.components.AddSectionView({ at: this.model.collection.indexOf(this.model) });
				addSectionView.render();
				this.$el.before(addSectionView.$el);
				addSectionView.$el.hide();
				setTimeout(function() {
					addSectionView.$el.slideDown(null, function() {
						jQuery(this).css("display", "");
					});
				});
				this.addSectionView = addSectionView;
			},
			isOverflowHidden: function isOverflowHidden() {
				var elementStyles = window.getComputedStyle(this.el);
				var overflowStyles = [
					elementStyles.overflowX,
					elementStyles.overflowY,
					elementStyles.overflow
				];
				return overflowStyles.includes("hidden") || overflowStyles.includes("auto");
			},
			updateHandlesPosition: function updateHandlesPosition() {
				var elementType = this.$el.data("element_type");
				if (!(0, import_element_types.getAllElementTypes)().includes(elementType)) return;
				var shouldPlaceInside = this.isOverflowHidden();
				if (!shouldPlaceInside && this.isTopLevelElement() && this.isFirstElementInStructure()) shouldPlaceInside = true;
				this.$el.toggleClass("e-handles-inside", shouldPlaceInside);
			},
			isTopLevelElement: function isTopLevelElement() {
				return this.container.parent && "document" === this.container.parent.id;
			},
			isFirstElementInStructure: function isFirstElementInStructure() {
				if (!this.model.collection) return true;
				return 0 === this.model.collection.indexOf(this.model);
			},
			getInteractionId: function getInteractionId() {
				var originId = this.model.get("originId");
				var id = this.model.get("id");
				return originId !== null && originId !== void 0 ? originId : id;
			}
		});
	}

//#endregion
//#region modules/atomic-widgets/assets/js/editor/atomic-element-types/create-div-block-type.js
	var createDivBlockType = function createDivBlockType() {
		var DivBlockView = elementor.modules.elements.views.createAtomicElementBase("e-div-block");
		return new elementor.modules.elements.types.AtomicElementBase("e-div-block", DivBlockView);
	};

//#endregion
//#region modules/atomic-widgets/assets/js/editor/atomic-element-types/create-flexbox-type.js
	var createFlexboxType = function createFlexboxType() {
		var FlexboxView = elementor.modules.elements.views.createAtomicElementBase("e-flexbox");
		return new elementor.modules.elements.types.AtomicElementBase("e-flexbox", FlexboxView);
	};

//#endregion
//#region modules/atomic-widgets/assets/js/editor/atomic-element-types/create-grid-type.js
	var createGridType = function createGridType() {
		var GridView = elementor.modules.elements.views.createAtomicElementBase("e-grid");
		return new elementor.modules.elements.types.AtomicElementBase("e-grid", GridView);
	};

//#endregion
//#region modules/atomic-widgets/assets/js/editor/module.js
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
	new (/* @__PURE__ */ function(_elementorModules$edi) {
		function Module() {
			_classCallCheck(this, Module);
			return _callSuper(this, Module, arguments);
		}
		_inherits(Module, _elementorModules$edi);
		return _createClass(Module, [
			{
				key: "onInit",
				value: function onInit() {
					$e.components.register(new Component());
					this.wireChildrenDependenciesAdapter();
					this.exposeAtomicElementClasses();
					this.registerAtomicElements();
				}
			},
			{
				key: "wireChildrenDependenciesAdapter",
				value: function wireChildrenDependenciesAdapter() {
					var _window$elementorV;
					var api = (_window$elementorV = window.elementorV2) === null || _window$elementorV === void 0 ? void 0 : _window$elementorV.editorElements;
					if (!(api !== null && api !== void 0 && api.reconcileInitialChildren) || !(api !== null && api !== void 0 && api.bindSettingsReconcile)) return;
					AtomicElementBaseModel.setChildrenDependenciesAdapter({
						reconcileInitialChildren: api.reconcileInitialChildren,
						bindSettingsReconcile: api.bindSettingsReconcile
					});
				}
			},
			{
				key: "exposeAtomicElementClasses",
				value: function exposeAtomicElementClasses() {
					elementor.modules.elements.types.AtomicElementBase = AtomicElementBaseType;
					elementor.modules.elements.views.createAtomicElementBase = createAtomicElementBaseView;
					elementor.modules.elements.models.AtomicElementBase = AtomicElementBaseModel;
				}
			},
			{
				key: "registerAtomicElements",
				value: function registerAtomicElements() {
					this.registerAtomicElementTypeIfAbsent(createDivBlockType());
					this.registerAtomicElementTypeIfAbsent(createFlexboxType());
					this.registerAtomicElementTypeIfAbsent(createGridType());
				}
			},
			{
				key: "registerAtomicElementTypeIfAbsent",
				value: function registerAtomicElementTypeIfAbsent(elementType) {
					if (elementor.elementsManager.getElementTypeClass(elementType.getType())) return;
					elementor.elementsManager.registerElementType(elementType);
				}
			}
		]);
	}(elementorModules.editor.utils.Module))();

//#endregion
})(wp.i18n, React, ReactDOM);
//# sourceMappingURL=atomic-widgets-editor.js.map