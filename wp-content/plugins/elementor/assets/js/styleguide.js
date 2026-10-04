(function(_wordpress_i18n) {

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
//#region modules/styleguide/assets/js/commands/enable.js
	init_classCallCheck();
	init_createClass();
	init_possibleConstructorReturn();
	init_getPrototypeOf();
	init_inherits();
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
	var Enable = /*#__PURE__*/ function(_$e$modules$CommandBa) {
		function Enable() {
			_classCallCheck(this, Enable);
			return _callSuper$8(this, Enable, arguments);
		}
		_inherits(Enable, _$e$modules$CommandBa);
		return _createClass(Enable, [{
			key: "apply",
			value: function apply(args) {
				$e.components.get("preview/styleguide").enableStyleguidePreview(args);
			}
		}]);
	}($e.modules.CommandBase);

//#endregion
//#region modules/styleguide/assets/js/commands/global-colors.js
	init_classCallCheck();
	init_createClass();
	init_possibleConstructorReturn();
	init_getPrototypeOf();
	init_inherits();
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
	var GlobalColors = /*#__PURE__*/ function(_$e$modules$CommandBa) {
		function GlobalColors() {
			_classCallCheck(this, GlobalColors);
			return _callSuper$7(this, GlobalColors, arguments);
		}
		_inherits(GlobalColors, _$e$modules$CommandBa);
		return _createClass(GlobalColors, [{
			key: "apply",
			value: function apply() {
				$e.components.get("preview/styleguide").showStyleguidePreview();
			}
		}]);
	}($e.modules.CommandBase);

//#endregion
//#region modules/styleguide/assets/js/commands/global-typography.js
	init_classCallCheck();
	init_createClass();
	init_possibleConstructorReturn();
	init_getPrototypeOf();
	init_inherits();
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
	var GlobalTypography = /*#__PURE__*/ function(_$e$modules$CommandBa) {
		function GlobalTypography() {
			_classCallCheck(this, GlobalTypography);
			return _callSuper$6(this, GlobalTypography, arguments);
		}
		_inherits(GlobalTypography, _$e$modules$CommandBa);
		return _createClass(GlobalTypography, [{
			key: "apply",
			value: function apply() {
				$e.components.get("preview/styleguide").showStyleguidePreview();
			}
		}]);
	}($e.modules.CommandBase);

//#endregion
//#region modules/styleguide/assets/js/commands/hide.js
	init_classCallCheck();
	init_createClass();
	init_possibleConstructorReturn();
	init_getPrototypeOf();
	init_inherits();
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
	var Hide = /*#__PURE__*/ function(_$e$modules$CommandBa) {
		function Hide() {
			_classCallCheck(this, Hide);
			return _callSuper$5(this, Hide, arguments);
		}
		_inherits(Hide, _$e$modules$CommandBa);
		return _createClass(Hide, [{
			key: "apply",
			value: function apply() {
				$e.components.get("preview/styleguide").hideStyleguidePreview();
			}
		}]);
	}($e.modules.CommandBase);

//#endregion
//#region modules/styleguide/assets/js/commands/switcher-change.js
	init_classCallCheck();
	init_createClass();
	init_possibleConstructorReturn();
	init_getPrototypeOf();
	init_inherits();
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
	var SwitcherChange = /*#__PURE__*/ function(_$e$modules$CommandBa) {
		function SwitcherChange() {
			_classCallCheck(this, SwitcherChange);
			return _callSuper$4(this, SwitcherChange, arguments);
		}
		_inherits(SwitcherChange, _$e$modules$CommandBa);
		return _createClass(SwitcherChange, [{
			key: "validateArgs",
			value: function validateArgs() {
				var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				this.requireArgumentType("name", "string", args);
				this.requireArgumentType("value", "string", args);
			}
		}, {
			key: "apply",
			value: function apply(args) {
				if (args.name.includes("enable_styleguide_preview")) $e.components.get("preview/styleguide").enableStyleguidePreview({ value: args.value });
			}
		}]);
	}($e.modules.CommandBase);

//#endregion
//#region modules/styleguide/assets/js/commands/index.js
	var commands_exports = /* @__PURE__ */ __exportAll({
		Enable: () => Enable,
		GlobalColors: () => GlobalColors,
		GlobalTypography: () => GlobalTypography,
		Hide: () => Hide,
		SwitcherChange: () => SwitcherChange
	});

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/superPropBase.js
	init_getPrototypeOf();
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
//#region assets/dev/js/editor/components/validator/base.js
	var require_base$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.Module.extend({
			errors: [],
			__construct: function __construct(settings) {
				var customValidationMethod = settings.customValidationMethod;
				if (customValidationMethod) this.validationMethod = customValidationMethod;
			},
			getDefaultSettings: function getDefaultSettings() {
				return { validationTerms: {} };
			},
			isValid: function isValid() {
				var validationErrors = this.validationMethod.apply(this, arguments);
				if (validationErrors.length) {
					this.errors = validationErrors;
					return false;
				}
				return true;
			},
			validationMethod: function validationMethod(newValue) {
				var validationTerms = this.getSettings("validationTerms");
				var errors = [];
				if (validationTerms.required) {
					if (!("" + newValue).length) errors.push("Required value is empty");
				}
				return errors;
			}
		});
	}));

//#endregion
//#region assets/dev/js/editor/components/validator/number.js
	var require_number = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var Validator = require_base$1();
		module.exports = Validator.extend({ validationMethod: function validationMethod(newValue) {
			var validationTerms = this.getSettings("validationTerms");
			var errors = [];
			if (_.isFinite(newValue)) {
				if (void 0 !== validationTerms.min && newValue < validationTerms.min) errors.push("Value is less than minimum");
				if (void 0 !== validationTerms.max && newValue > validationTerms.max) errors.push("Value is greater than maximum");
			}
			return errors;
		} });
	}));

//#endregion
//#region assets/dev/js/editor/components/validator/breakpoint.js
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
	var NumberValidator, BreakpointValidator;
	var init_breakpoint = __esmMin((() => {
		init_classCallCheck();
		init_createClass();
		init_possibleConstructorReturn();
		init_getPrototypeOf();
		init_inherits();
		__name(_callSuper$3, "_callSuper");
		__name(_isNativeReflectConstruct$3, "_isNativeReflectConstruct");
		NumberValidator = require_number();
		BreakpointValidator = /*#__PURE__*/ function(_NumberValidator) {
			function BreakpointValidator() {
				_classCallCheck(this, BreakpointValidator);
				return _callSuper$3(this, BreakpointValidator, arguments);
			}
			_inherits(BreakpointValidator, _NumberValidator);
			return _createClass(BreakpointValidator, [
				{
					key: "getDefaultSettings",
					value: function getDefaultSettings() {
						return { validationTerms: { max: 5120 } };
					}
				},
				{
					key: "getPanelActiveBreakpoints",
					value: function getPanelActiveBreakpoints() {
						var panelBreakpoints = elementor.documents.currentDocument.config.settings.settings.active_breakpoints.map(function(breakpointName) {
							return breakpointName.replace("viewport_", "");
						});
						var panelActiveBreakpoints = {};
						panelBreakpoints.forEach(function(breakpointName) {
							panelActiveBreakpoints[breakpointName] = elementorFrontend.config.responsive.breakpoints[breakpointName];
						});
						return panelActiveBreakpoints;
					}
				},
				{
					key: "initBreakpointProperties",
					value: function initBreakpointProperties() {
						var _activeBreakpoints$br;
						var _activeBreakpoints$br2;
						var validationTerms = this.getSettings("validationTerms");
						var activeBreakpoints = this.getPanelActiveBreakpoints();
						var breakpointKeys = Object.keys(activeBreakpoints);
						this.breakpointIndex = breakpointKeys.indexOf(validationTerms.breakpointName);
						this.topBreakpoint = (_activeBreakpoints$br = activeBreakpoints[breakpointKeys[this.breakpointIndex + 1]]) === null || _activeBreakpoints$br === void 0 ? void 0 : _activeBreakpoints$br.value;
						this.bottomBreakpoint = (_activeBreakpoints$br2 = activeBreakpoints[breakpointKeys[this.breakpointIndex - 1]]) === null || _activeBreakpoints$br2 === void 0 ? void 0 : _activeBreakpoints$br2.value;
					}
				},
				{
					key: "validationMethod",
					value: function validationMethod(newValue) {
						var validationTerms = this.getSettings("validationTerms");
						var errors = NumberValidator.prototype.validationMethod.call(this, newValue);
						if (_.isFinite(newValue) || "" === newValue) {
							if (!this.validateMinMaxForBreakpoint(newValue, validationTerms)) errors.push("Value is not between the breakpoints above or under the edited breakpoint");
						}
						return errors;
					}
				},
				{
					key: "validateMinMaxForBreakpoint",
					value: function validateMinMaxForBreakpoint(newValue, validationTerms) {
						var breakpointDefaultValue = elementorFrontend.config.responsive.breakpoints[validationTerms.breakpointName].default_value;
						var isValid = true;
						this.initBreakpointProperties();
						if ("mobile" === validationTerms.breakpointName && 320 === this.bottomBreakpoint) this.bottomBreakpoint -= 1;
						if (this.bottomBreakpoint) {
							if ("" !== newValue && newValue <= this.bottomBreakpoint) isValid = false;
							if ("" === newValue && breakpointDefaultValue <= this.bottomBreakpoint) isValid = false;
						}
						if (this.topBreakpoint) {
							if ("" !== newValue && newValue >= this.topBreakpoint) isValid = false;
							if ("" === newValue && breakpointDefaultValue >= this.topBreakpoint) isValid = false;
						}
						return isValid;
					}
				}
			]);
		}(NumberValidator);
	}));

//#endregion
//#region assets/dev/js/editor/controls/base.js
	var require_base = /* @__PURE__ */ __commonJSMin(((exports, module) => {
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
		var ControlBaseView = Marionette.CompositeView.extend({
			ui: function ui() {
				return { controlTitle: ".elementor-control-title" };
			},
			behaviors: function behaviors() {
				return elementor.hooks.applyFilters("controls/base/behaviors", {}, this);
			},
			getBehavior: function getBehavior(name) {
				return this._behaviors[Object.keys(this.behaviors()).indexOf(name)];
			},
			className: function className() {
				var classes = "elementor-control elementor-control-" + this.model.get("name") + " elementor-control-type-" + this.model.get("type");
				var modelClasses = this.model.get("classes");
				var responsive = this.model.get("responsive");
				if (!_.isEmpty(modelClasses)) classes += " " + modelClasses;
				if (!_.isEmpty(responsive)) {
					var responsiveControlName = responsive.max || responsive.min;
					classes += " elementor-control-responsive-" + responsiveControlName;
				}
				return classes;
			},
			templateHelpers: function templateHelpers() {
				var controlData = { _cid: this.model.cid };
				return {
					view: this,
					data: _.extend({}, this.model.toJSON(), controlData)
				};
			},
			getTemplate: function getTemplate() {
				return Marionette.TemplateCache.get("#tmpl-elementor-control-" + this.model.get("type") + "-content");
			},
			initialize: function initialize(options) {
				var label = this.model.get("label");
				Object.defineProperty(this, "container", { get: function get() {
					if (!options.container) {
						var settingsModel = options.elementSettingsModel;
						var view = $e.components.get("document").utils.findViewById(settingsModel.id);
						if (view && view.getContainer) options.container = view.getContainer();
						else {
							if (!settingsModel.id) settingsModel.id = "bc-" + elementorCommon.helpers.getUniqueId();
							options.container = new elementorModules.editor.Container({
								type: "bc-container",
								id: settingsModel.id,
								model: settingsModel,
								settings: settingsModel,
								label,
								view: false,
								parent: false,
								renderer: false,
								controls: settingsModel.options.controls
							});
						}
					}
					return options.container;
				} });
				Object.defineProperty(this, "elementSettingsModel", { get: function get() {
					elementorDevTools.deprecation.deprecated("elementSettingsModel", "2.8.0", "container.settings");
					return options.container ? options.container.settings : options.elementSettingsModel;
				} });
				var controlType = this.model.get("type");
				var controlSettings = jQuery.extend(true, {}, elementor.config.controls[controlType], this.model.attributes);
				this.model.set(controlSettings);
				var settings = this.container ? this.container.settings : this.elementSettingsModel;
				this.listenTo(settings, "change", this.onAfterChange);
				if (this.model.attributes.responsive) {
					this.onDeviceModeChange = this.onDeviceModeChange.bind(this);
					elementor.listenTo(elementor.channels.deviceMode, "change", this.onDeviceModeChange);
				}
			},
			onDestroy: function onDestroy() {
				elementor.stopListening(elementor.channels.deviceMode, "change", this.onDeviceModeChange);
			},
			onDeviceModeChange: function onDeviceModeChange() {
				this.toggleControlVisibility();
			},
			onAfterChange: function onAfterChange() {
				this.toggleControlVisibility();
			},
			toggleControlVisibility: function toggleControlVisibility() {
				var settings = this.container ? this.container.settings : this.elementSettingsModel;
				var isVisible = elementor.helpers.isActiveControl(this.model, settings.attributes, settings.controls);
				this.$el.toggleClass("elementor-hidden-control", !isVisible);
				elementor.getPanelView().updateScrollbar();
			},
			onRender: function onRender() {
				var layoutType = this.model.get("label_block") ? "block" : "inline";
				var showLabel = this.model.get("show_label");
				var elClasses = "elementor-label-" + layoutType;
				elClasses += " elementor-control-separator-" + this.model.get("separator");
				if (!showLabel) elClasses += " elementor-control-hidden-label";
				this.$el.addClass(elClasses);
				this.toggleControlVisibility();
			},
			reRoute: function reRoute(controlActive) {
				$e.route($e.routes.getCurrent("panel"), this.getControlInRouteArgs(controlActive ? this.getControlPath() : ""), { history: false });
			},
			getControlInRouteArgs: function getControlInRouteArgs(path) {
				return _objectSpread(_objectSpread({}, $e.routes.getCurrentArgs("panel")), {}, { activeControl: path });
			},
			getControlPath: function getControlPath() {
				var controlPath = this.model.get("name");
				var parent = this._parent;
				while (!parent.$el.hasClass("elementor-controls-stack")) {
					controlPath = (parent.model.get("name") || parent.model.get("_id")) + "/" + controlPath;
					parent = parent._parent;
				}
				return controlPath;
			}
		});
		module.exports = ControlBaseView;
	}));

//#endregion
//#region assets/dev/js/editor/components/dynamic-tags/tag-controls-stack-empty.js
	var require_tag_controls_stack_empty = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = Marionette.ItemView.extend({
			className: "elementor-tag-controls-stack-empty",
			template: "#tmpl-elementor-tag-controls-stack-empty"
		});
	}));

//#endregion
//#region assets/dev/js/editor/components/dynamic-tags/tag-controls-stack.js
	var require_tag_controls_stack = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var EmptyView = require_tag_controls_stack_empty();
		module.exports = elementorModules.editor.views.ControlsStack.extend({
			activeTab: "content",
			template: _.noop,
			emptyView: EmptyView,
			isEmpty: function isEmpty() {
				return this.collection.length < 2;
			},
			childViewOptions: function childViewOptions() {
				return { container: this.options.container };
			},
			getNamespaceArray: function getNamespaceArray() {
				var currentPageView = elementor.getPanelView().getCurrentPageView();
				var eventNamespace = currentPageView.getNamespaceArray();
				eventNamespace.push(currentPageView.activeSection);
				eventNamespace.push(this.getOption("controlName"));
				eventNamespace.push(this.getOption("name"));
				return eventNamespace;
			},
			onRenderTemplate: function onRenderTemplate() {
				this.activateFirstSection();
			}
		});
	}));

//#endregion
//#region assets/dev/js/editor/components/dynamic-tags/tag-panel-view.js
	var require_tag_panel_view = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var TagControlsStack = require_tag_controls_stack();
		module.exports = Marionette.ItemView.extend({
			className: "elementor-dynamic-cover e-input-style",
			tagControlsStack: null,
			templateHelpers: function templateHelpers() {
				var helpers = {};
				if (this.model) helpers.controls = this.model.options.controls;
				return helpers;
			},
			ui: { remove: ".elementor-dynamic-cover__remove" },
			events: function events() {
				var events = { "click @ui.remove": "onRemoveClick" };
				if (this.hasSettings()) events.click = "onClick";
				return events;
			},
			getTemplate: function getTemplate() {
				var config = this.getTagConfig();
				var templateFunction = Marionette.TemplateCache.get("#tmpl-elementor-control-dynamic-cover");
				var renderedTemplate = Marionette.Renderer.render(templateFunction, {
					hasSettings: this.hasSettings(),
					isRemovable: !this.getOption("dynamicSettings").default,
					title: config.title,
					content: config.panel_template
				});
				return Marionette.TemplateCache.prototype.compileTemplate(renderedTemplate.trim());
			},
			getTagConfig: function getTagConfig() {
				return elementor.dynamicTags.getConfig("tags." + this.getOption("name"));
			},
			initSettingsPopup: function initSettingsPopup() {
				var settingsPopupOptions = {
					className: "elementor-tag-settings-popup",
					position: {
						my: "left top+5",
						at: "left bottom",
						of: this.$el,
						autoRefresh: true
					},
					hide: { ignore: ".select2-container" }
				};
				var settingsPopup = elementorCommon.dialogsManager.createWidget("buttons", settingsPopupOptions);
				this.getSettingsPopup = function() {
					return settingsPopup;
				};
			},
			hasSettings: function hasSettings() {
				return !!Object.values(this.getTagConfig().controls).length;
			},
			showSettingsPopup: function showSettingsPopup() {
				if (!this.tagControlsStack) this.initTagControlsStack();
				var settingsPopup = this.getSettingsPopup();
				if (settingsPopup.isVisible()) return;
				settingsPopup.show();
			},
			initTagControlsStack: function initTagControlsStack() {
				this.tagControlsStack = new TagControlsStack({
					model: this.model,
					controls: this.model.controls,
					name: this.options.name,
					controlName: this.options.controlName,
					container: this.options.container,
					el: this.getSettingsPopup().getElements("message")[0]
				});
				this.tagControlsStack.render();
			},
			initModel: function initModel() {
				this.model = new elementorModules.editor.elements.models.BaseSettings(this.getOption("settings"), { controls: this.getTagConfig().controls });
			},
			initialize: function initialize() {
				this.initModel();
				if (!this.hasSettings()) return;
				this.initSettingsPopup();
				this.listenTo(this.model, "change", this.render);
			},
			onClick: function onClick() {
				this.showSettingsPopup();
			},
			onRemoveClick: function onRemoveClick(event) {
				event.stopPropagation();
				this.destroy();
				this.trigger("remove");
			},
			onDestroy: function onDestroy() {
				if (this.hasSettings()) this.getSettingsPopup().destroy();
				if (this.tagControlsStack) this.tagControlsStack.destroy();
			}
		});
	}));

//#endregion
//#region assets/dev/js/editor/components/dynamic-tags/control-behavior.js
	var require_control_behavior = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_defineProperty();
		var TagPanelView = require_tag_panel_view();
		module.exports = Marionette.Behavior.extend({
			tagView: null,
			listenerAttached: false,
			initialize: function initialize() {
				if (!this.listenerAttached) {
					this.listenTo(this.view.options.container.settings, "change:external:__dynamic__", this.onAfterExternalChange);
					this.listenerAttached = true;
				}
			},
			shouldRenderTools: function shouldRenderTools() {
				if (this.getOption("dynamicSettings").default) return false;
				var isFeatureAvailableToUser = elementor.helpers.hasPro() && !elementor.helpers.hasProAndNotConnected();
				var hasTags = this.getOption("tags").length > 0;
				return !isFeatureAvailableToUser || hasTags;
			},
			renderTools: function renderTools() {
				var _this = this;
				if (!this.shouldRenderTools()) return;
				var $dynamicSwitcher = jQuery(Marionette.Renderer.render("#tmpl-elementor-control-dynamic-switcher"));
				$dynamicSwitcher.on("click", function(event) {
					return _this.onDynamicSwitcherClick(event);
				});
				this.$el.find(".elementor-control-dynamic-switcher-wrapper").append($dynamicSwitcher);
				this.ui.dynamicSwitcher = $dynamicSwitcher;
				if ("color" === this.view.model.get("type")) if (this.view.colorPicker) this.moveDynamicSwitcherToColorPicker();
				else setTimeout(function() {
					return _this.moveDynamicSwitcherToColorPicker();
				});
				this.ui.dynamicSwitcher.tipsy({
					title: function title() {
						return this.getAttribute("data-tooltip");
					},
					gravity: "s"
				});
			},
			moveDynamicSwitcherToColorPicker: function moveDynamicSwitcherToColorPicker() {
				var $colorPickerToolsContainer = this.view.colorPicker.$pickerToolsContainer;
				this.ui.dynamicSwitcher.removeClass("elementor-control-unit-1").addClass("e-control-tool");
				var $eyedropper = $colorPickerToolsContainer.find(".elementor-control-element-color-picker");
				if ($eyedropper.length) this.ui.dynamicSwitcher.insertBefore($eyedropper);
				else $colorPickerToolsContainer.append(this.ui.dynamicSwitcher);
			},
			toggleDynamicClass: function toggleDynamicClass() {
				this.$el.toggleClass("elementor-control-dynamic-value", this.isDynamicMode());
			},
			isDynamicMode: function isDynamicMode() {
				var dynamicSettings = this.view.container.settings.get("__dynamic__");
				return !!(dynamicSettings && dynamicSettings[this.view.model.get("name")]);
			},
			createTagsList: function createTagsList() {
				var tags = _.groupBy(this.getOption("tags"), "group");
				var groups = elementor.dynamicTags.getConfig("groups");
				var $tagsList = this.ui.tagsList = jQuery("<div>", { class: "elementor-tags-list" });
				var $tagsListInner = jQuery("<div>", { class: "elementor-tags-list__inner" });
				$tagsList.append($tagsListInner);
				jQuery.each(groups, function(groupName) {
					var groupTags = tags[groupName];
					if (!groupTags) return;
					var group = this;
					var $groupTitle = jQuery("<div>", { class: "elementor-tags-list__group-title" }).text(group.title);
					$tagsListInner.append($groupTitle);
					groupTags.forEach(function(tag) {
						var $tag = jQuery("<div>", { class: "elementor-tags-list__item" });
						$tag.text(tag.title).attr("data-tag-name", tag.name);
						$tagsListInner.append($tag);
					});
				});
				if (!elementor.helpers.hasPro() && Object.keys(tags).length) {
					var proTeaser = Marionette.Renderer.render("#tmpl-elementor-dynamic-tags-promo", { promotionUrl: elementor.config.dynamicPromotionURL.replace("%s", this.view.model.get("name")) });
					$tagsListInner.append(proTeaser);
				}
				$tagsListInner.on("click", ".elementor-tags-list__item", this.onTagsListItemClick.bind(this));
				elementorCommon.elements.$body.append($tagsList);
			},
			getTagsList: function getTagsList() {
				if (!this.ui.tagsList) this.createTagsList();
				return this.ui.tagsList;
			},
			toggleTagsList: function toggleTagsList() {
				var $tagsList = this.getTagsList();
				if ($tagsList.is(":visible")) {
					$tagsList.hide();
					return;
				}
				var direction = elementorCommon.config.isRTL ? "left" : "right";
				$tagsList.show().position({
					my: "".concat(direction, " top"),
					at: "".concat(direction, " bottom+5"),
					of: this.ui.dynamicSwitcher
				});
			},
			setTagView: function setTagView(id, name, settings) {
				if (this.tagView) this.tagView.destroy();
				var tagView = this.tagView = new TagPanelView({
					id,
					name,
					settings,
					controlName: this.view.model.get("name"),
					dynamicSettings: this.getOption("dynamicSettings")
				});
				var elementContainer = this.view.options.container;
				var tagViewLabel = elementContainer.controls[tagView.options.controlName].label;
				tagView.options.container = new elementorModules.editor.Container({
					type: "dynamic",
					id,
					model: tagView.model,
					settings: tagView.model,
					view: tagView,
					parent: elementContainer,
					label: elementContainer.label + " " + tagViewLabel,
					controls: tagView.model.options.controls,
					renderer: elementContainer
				});
				tagView.render();
				this.$el.find(".elementor-control-tag-area").after(tagView.el);
				this.listenTo(tagView, "remove", this.onTagViewRemove.bind(this));
			},
			setDefaultTagView: function setDefaultTagView() {
				var tagData = elementor.dynamicTags.tagTextToTagData(this.getDynamicValue());
				this.setTagView(tagData.id, tagData.name, tagData.settings);
			},
			tagViewToTagText: function tagViewToTagText() {
				var tagView = this.tagView;
				return elementor.dynamicTags.tagDataToTagText(tagView.getOption("id"), tagView.getOption("name"), tagView.model);
			},
			getDynamicValue: function getDynamicValue() {
				return this.view.container.dynamic.get(this.view.model.get("name"));
			},
			destroyTagView: function destroyTagView() {
				if (this.tagView) {
					this.tagView.destroy();
					this.tagView = null;
				}
			},
			showPromotion: function showPromotion() {
				var hasProAndNotConnected = elementor.helpers.hasProAndNotConnected();
				var dialogOptions = {
					title: (0, _wordpress_i18n.__)("Dynamic Content", "elementor"),
					content: (0, _wordpress_i18n.__)("Create more personalized and dynamic sites by populating data from various sources with dozens of dynamic tags to choose from.", "elementor"),
					targetElement: this.ui.dynamicSwitcher,
					position: { blockStart: "-10" },
					actionButton: {
						url: hasProAndNotConnected ? elementorProEditorConfig.urls.connect : elementor.config.dynamicPromotionURL.replace("%s", this.view.model.get("name")),
						text: hasProAndNotConnected ? (0, _wordpress_i18n.__)("Connect & Activate", "elementor") : (0, _wordpress_i18n.__)("Upgrade", "elementor")
					}
				};
				elementor.promotion.showDialog(dialogOptions);
			},
			onRender: function onRender() {
				this.$el.addClass("elementor-control-dynamic");
				this.renderTools();
				this.toggleDynamicClass();
				if (this.isDynamicMode()) this.setDefaultTagView();
			},
			onDynamicSwitcherClick: function onDynamicSwitcherClick(event) {
				event.stopPropagation();
				if (this.getOption("tags").length) this.toggleTagsList();
				else this.showPromotion();
			},
			onTagsListItemClick: function onTagsListItemClick(event) {
				var $tag = jQuery(event.currentTarget);
				this.setTagView(elementorCommon.helpers.getUniqueId(), $tag.data("tagName"), {});
				if (this.view.getGlobalKey()) this.view.triggerMethod("unset:global:value");
				if (this.isDynamicMode()) $e.run("document/dynamic/settings", {
					container: this.view.options.container,
					settings: _defineProperty({}, this.view.model.get("name"), this.tagViewToTagText())
				});
				else $e.run("document/dynamic/enable", {
					container: this.view.options.container,
					settings: _defineProperty({}, this.view.model.get("name"), this.tagViewToTagText())
				});
				this.toggleDynamicClass();
				this.toggleTagsList();
				if (this.tagView.getTagConfig().settings_required) this.tagView.showSettingsPopup();
			},
			onTagViewRemove: function onTagViewRemove() {
				$e.run("document/dynamic/disable", {
					container: this.view.options.container,
					settings: _defineProperty({}, this.view.model.get("name"), this.tagViewToTagText())
				});
				this.toggleDynamicClass();
			},
			onAfterExternalChange: function onAfterExternalChange() {
				this.destroyTagView();
				if (this.isDynamicMode()) this.setDefaultTagView();
				this.toggleDynamicClass();
			},
			onDestroy: function onDestroy() {
				this.destroyTagView();
				if (this.ui.tagsList) this.ui.tagsList.remove();
			}
		});
	}));

//#endregion
//#region assets/dev/js/editor/controls/base-data.js
	var require_base_data = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_slicedToArray();
		init_defineProperty();
		init_breakpoint();
		function _createForOfIteratorHelper(r, e) {
			var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
			if (!t) {
				if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
					t && (r = t);
					var _n = 0;
					var F = function F() {};
					return {
						s: F,
						n: function n() {
							return _n >= r.length ? { done: !0 } : {
								done: !1,
								value: r[_n++]
							};
						},
						e: function e(r) {
							throw r;
						},
						f: F
					};
				}
				throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
			}
			var o;
			var a = !0;
			var u = !1;
			return {
				s: function s() {
					t = t.call(r);
				},
				n: function n() {
					var r = t.next();
					return a = r.done, r;
				},
				e: function e(r) {
					u = !0, o = r;
				},
				f: function f() {
					try {
						a || null == t.return || t.return();
					} finally {
						if (u) throw o;
					}
				}
			};
		}
		function _unsupportedIterableToArray(r, a) {
			if (r) {
				if ("string" == typeof r) return _arrayLikeToArray(r, a);
				var t = {}.toString.call(r).slice(8, -1);
				return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
			}
		}
		function _arrayLikeToArray(r, a) {
			(null == a || a > r.length) && (a = r.length);
			for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
			return n;
		}
		var ControlBaseView = require_base();
		var TagsBehavior = require_control_behavior();
		var Validator = require_base$1();
		var NumberValidator = require_number();
		var ControlBaseDataView = ControlBaseView.extend({
			validatorTypes: {
				Base: Validator,
				Number: NumberValidator,
				Breakpoint: BreakpointValidator
			},
			ui: function ui() {
				var ui = ControlBaseView.prototype.ui.apply(this, arguments);
				_.extend(ui, {
					input: "input[data-setting][type!=\"checkbox\"][type!=\"radio\"]",
					checkbox: "input[data-setting][type=\"checkbox\"]",
					radio: "input[data-setting][type=\"radio\"]",
					select: "select[data-setting]",
					textarea: "textarea[data-setting]",
					responsiveSwitchersSibling: "".concat(ui.controlTitle, "[data-e-responsive-switcher-sibling!=\"false\"]"),
					responsiveSwitchers: ".elementor-responsive-switcher",
					contentEditable: "[contenteditable=\"true\"]"
				});
				return ui;
			},
			templateHelpers: function templateHelpers() {
				var controlData = ControlBaseView.prototype.templateHelpers.apply(this, arguments);
				controlData.data.controlValue = this.getControlValue();
				return controlData;
			},
			events: function events() {
				return {
					"input @ui.input": "onBaseInputTextChange",
					"change @ui.checkbox": "onBaseInputChange",
					"change @ui.radio": "onBaseInputChange",
					"input @ui.textarea": "onBaseInputTextChange",
					"change @ui.select": "onBaseInputChange",
					"input @ui.contentEditable": "onBaseInputTextChange",
					"click @ui.responsiveSwitchers": "onResponsiveSwitchersClick"
				};
			},
			behaviors: function behaviors() {
				var behaviors = ControlBaseView.prototype.behaviors.apply(this, arguments);
				var dynamicSettings = this.options.model.get("dynamic");
				if (dynamicSettings && dynamicSettings.active) {
					var tags = _.filter(elementor.dynamicTags.getConfig("tags"), function(tag) {
						return tag.editable && _.intersection(tag.categories, dynamicSettings.categories).length;
					});
					if (tags.length || elementor.config.user.is_administrator) behaviors.tags = {
						behaviorClass: TagsBehavior,
						tags,
						dynamicSettings
					};
				}
				return behaviors;
			},
			initialize: function initialize() {
				ControlBaseView.prototype.initialize.apply(this, arguments);
				this.registerValidators();
				if (this.model.get("responsive")) this.setPlaceholderFromParent();
				if (void 0 === this.model.get("inherit_placeholders")) this.model.set("inherit_placeholders", true);
				var settings = this.container ? this.container.settings : this.elementSettingsModel;
				this.listenTo(settings, "change:external:" + this.model.get("name"), this.onAfterExternalChange);
			},
			getControlValue: function getControlValue() {
				return this.container.settings.get(this.model.get("name"));
			},
			getGlobalKey: function getGlobalKey() {
				return this.container.globals.get(this.model.get("name"));
			},
			getGlobalValue: function getGlobalValue() {
				return this.globalValue;
			},
			getGlobalDefault: function getGlobalDefault() {
				var controlGlobalArgs = this.model.get("global");
				if (controlGlobalArgs !== null && controlGlobalArgs !== void 0 && controlGlobalArgs.default) {
					if (!elementor.config.globals.defaults_enabled[this.getGlobalMeta().controlType]) return "";
					var _$e$data$commandExtra = $e.data.commandExtractArgs(controlGlobalArgs.default);
					var command = _$e$data$commandExtra.command;
					var args = _$e$data$commandExtra.args;
					var result = $e.data.getCache($e.components.get("globals"), command, args.query);
					return result === null || result === void 0 ? void 0 : result.value;
				}
				return "";
			},
			getCurrentValue: function getCurrentValue() {
				if (this.getGlobalKey() && !this.globalValue) return "";
				if (this.globalValue) return this.globalValue;
				var controlValue = this.getControlValue();
				if (controlValue) return controlValue;
				return this.getGlobalDefault();
			},
			isGlobalActive: function isGlobalActive() {
				var _this$options$model$g;
				return (_this$options$model$g = this.options.model.get("global")) === null || _this$options$model$g === void 0 ? void 0 : _this$options$model$g.active;
			},
			setValue: function setValue(value) {
				this.setSettingsModel(value);
			},
			setSettingsModel: function setSettingsModel(value) {
				var key = this.model.get("name");
				$e.run("document/elements/settings", {
					container: this.options.container,
					settings: _defineProperty({}, key, value)
				});
				this.triggerMethod("settings:change");
			},
			applySavedValue: function applySavedValue() {
				this.setInputValue("[data-setting=\"" + this.model.get("name") + "\"]", this.getControlValue());
			},
			getEditSettings: function getEditSettings(setting) {
				var settings = this.getOption("elementEditSettings").toJSON();
				if (setting) return settings[setting];
				return settings;
			},
			setEditSetting: function setEditSetting(settingKey, settingValue) {
				(this.getOption("elementEditSettings") || this.getOption("container").settings).set(settingKey, settingValue);
			},
			/**
			* Get the placeholder for the current control.
			*
			* @return {*} placeholder
			*/
			getControlPlaceholder: function getControlPlaceholder() {
				var placeholder = this.model.get("placeholder");
				if (this.model.get("responsive") && this.model.get("inherit_placeholders")) placeholder = placeholder || this.container.placeholders[this.model.get("name")];
				return placeholder;
			},
			/**
			* Get the responsive parent view if exists.
			*
			* @return {ControlBaseDataView|undefined} responsive parent view if exists
			*/
			getResponsiveParentView: function getResponsiveParentView() {
				var parent = this.model.get("parent");
				try {
					return parent && this.container.panel.getControlView(parent);
				} catch (e) {}
			},
			/**
			* Get the responsive children views if exists.
			*
			* @return {ControlBaseDataView|null} responsive children views if exists
			*/
			getResponsiveChildrenViews: function getResponsiveChildrenViews() {
				var children = this.model.get("inheritors");
				var views = [];
				try {
					var _iterator = _createForOfIteratorHelper(children);
					var _step;
					try {
						for (_iterator.s(); !(_step = _iterator.n()).done;) {
							var child = _step.value;
							views.push(this.container.panel.getControlView(child));
						}
					} catch (err) {
						_iterator.e(err);
					} finally {
						_iterator.f();
					}
				} catch (e) {}
				return views;
			},
			/**
			* Get prepared placeholder from the responsive parent, and put it into current
			* control model as placeholder.
			*/
			setPlaceholderFromParent: function setPlaceholderFromParent() {
				var parent = this.getResponsiveParentView();
				if (parent) this.container.placeholders[this.model.get("name")] = parent.preparePlaceholderForChildren();
			},
			/**
			* Returns the value of the current control if exists, or the parent value if not,
			* so responsive children can set it as their placeholder. When there are multiple
			* inputs, the inputs which are empty on this control will inherit their values
			* from the responsive parent.
			* For example, if on desktop the padding of all edges is 10, and on tablet only
			* padding right and left is set to 15, the mobile control placeholder will
			* eventually be: { top: 10, right: 15, left: 15, bottom: 10 }, because of the
			* inheritance of multiple values.
			*
			* @return {*} value of the current control if exists, or the parent value if not
			*/
			preparePlaceholderForChildren: function preparePlaceholderForChildren() {
				var _this$getResponsivePa;
				var cleanValue = this.getCleanControlValue();
				var parentValue = (_this$getResponsivePa = this.getResponsiveParentView()) === null || _this$getResponsivePa === void 0 ? void 0 : _this$getResponsivePa.preparePlaceholderForChildren();
				if (cleanValue instanceof Object) return Object.assign({}, parentValue, cleanValue);
				return cleanValue || parentValue;
			},
			/**
			* Start the re-rendering recursive chain from the responsive child of this
			* control. It's useful when the current control value is changed and we want
			* to update all responsive children. In this case, the re-rendering is supposed
			* to be applied only from the responsive child of this control and on.
			*/
			propagatePlaceholder: function propagatePlaceholder() {
				var _iterator2 = _createForOfIteratorHelper(this.getResponsiveChildrenViews());
				var _step2;
				try {
					for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) _step2.value.renderWithChildren();
				} catch (err) {
					_iterator2.e(err);
				} finally {
					_iterator2.f();
				}
			},
			/**
			* Re-render current control and trigger this method on the responsive child.
			* The purpose of those actions is to recursively re-render all responsive
			* children.
			*/
			renderWithChildren: function renderWithChildren() {
				this.render();
				this.propagatePlaceholder();
			},
			/**
			* Get control value without empty properties, and without default values.
			*
			* @return {{}} control value without empty properties, and without default values
			*/
			getCleanControlValue: function getCleanControlValue() {
				var value = this.getControlValue();
				return value && value !== this.model.get("default") ? value : void 0;
			},
			onAfterChange: function onAfterChange(control) {
				if (Object.keys(control.changed).includes(this.model.get("name"))) this.propagatePlaceholder();
				ControlBaseView.prototype.onAfterChange.apply(this, arguments);
			},
			getInputValue: function getInputValue(input) {
				var $input = this.$(input);
				if ($input.is("[contenteditable=\"true\"]")) return $input.html();
				var inputValue = $input.val();
				var inputType = $input.attr("type");
				if (-1 !== ["radio", "checkbox"].indexOf(inputType)) return $input.prop("checked") ? inputValue : "";
				if ("number" === inputType && _.isFinite(inputValue)) return +inputValue;
				if ("SELECT" === input.tagName && $input.prop("multiple") && null === inputValue) inputValue = [];
				return inputValue;
			},
			setInputValue: function setInputValue(input, value) {
				var $input = this.$(input);
				var inputType = $input.attr("type");
				if ("checkbox" === inputType) $input.prop("checked", !!value);
				else if ("radio" === inputType) $input.filter("[value=\"" + value + "\"]").prop("checked", true);
				else $input.val(value);
			},
			addValidator: function addValidator(validator) {
				this.validators.push(validator);
			},
			registerValidators: function registerValidators() {
				var _this = this;
				this.validators = [];
				var validationTerms = {};
				if (this.model.get("required")) validationTerms.required = true;
				if (!jQuery.isEmptyObject(validationTerms)) this.addValidator(new this.validatorTypes.Base({ validationTerms }));
				var validators = this.model.get("validators");
				if (validators) Object.entries(validators).forEach(function(_ref) {
					var _ref2 = _slicedToArray(_ref, 2);
					var key = _ref2[0];
					var args = _ref2[1];
					_this.addValidator(new _this.validatorTypes[key]({ validationTerms: args }));
				});
			},
			onBeforeRender: function onBeforeRender() {
				this.setPlaceholderFromParent();
			},
			onRender: function onRender() {
				ControlBaseView.prototype.onRender.apply(this, arguments);
				if (this.model.get("responsive")) this.renderResponsiveSwitchers();
				this.applySavedValue();
				this.triggerMethod("ready");
				this.toggleControlVisibility();
				this.addTooltip();
			},
			onBaseInputTextChange: function onBaseInputTextChange(event) {
				this.onBaseInputChange(event);
			},
			onBaseInputChange: function onBaseInputChange(event) {
				clearTimeout(this.correctionTimeout);
				var input = event.currentTarget;
				var value = this.getInputValue(input);
				var validators = this.validators.slice(0);
				var settingsValidators = this.container.settings.validators[this.model.get("name")];
				if (settingsValidators) validators = validators.concat(settingsValidators);
				if (validators) {
					var oldValue = this.getControlValue(input.dataset.setting);
					if (!validators.every(function(validator) {
						return validator.isValid(value, oldValue);
					})) {
						this.correctionTimeout = setTimeout(this.setInputValue.bind(this, input, oldValue), 1200);
						return;
					}
				}
				this.updateElementModel(value, input);
				this.triggerMethod("input:change", event);
			},
			onResponsiveSwitchersClick: function onResponsiveSwitchersClick(event) {
				var $switcher = jQuery(event.currentTarget);
				var device = $switcher.data("device");
				var $switchersWrapper = this.ui.responsiveSwitchersWrapper;
				var selectedOption = $switcher.index();
				$switchersWrapper.toggleClass("elementor-responsive-switchers-open");
				$switchersWrapper[0].style.setProperty("--selected-option", selectedOption);
				this.triggerMethod("responsive:switcher:click", device);
				elementor.changeDeviceMode(device);
			},
			renderResponsiveSwitchers: function renderResponsiveSwitchers() {
				var templateHtml = Marionette.Renderer.render("#tmpl-elementor-control-responsive-switchers", this.model.attributes);
				this.ui.responsiveSwitchersSibling.after(templateHtml);
				this.ui.responsiveSwitchersWrapper = this.$el.find(".elementor-control-responsive-switchers");
			},
			onAfterExternalChange: function onAfterExternalChange() {
				this.hideTooltip();
				this.applySavedValue();
			},
			addTooltip: function addTooltip() {
				this.ui.tooltipTargets = this.$el.find(".tooltip-target");
				if (!this.ui.tooltipTargets.length) return;
				this.ui.tooltipTargets.tipsy({
					gravity: function gravity() {
						var gravity = jQuery(this).data("tooltip-pos");
						if (void 0 !== gravity) return gravity;
						return "s";
					},
					title: function title() {
						return this.getAttribute("data-tooltip");
					}
				});
			},
			hideTooltip: function hideTooltip() {
				if (this.ui.tooltipTargets.length) this.ui.tooltipTargets.tipsy("hide");
			},
			updateElementModel: function updateElementModel(value) {
				this.setValue(value);
			}
		}, {
			getStyleValue: function getStyleValue(placeholder, controlValue, controlData) {
				if ("DEFAULT" === placeholder) return controlData.default;
				return controlValue;
			},
			onPasteStyle: function onPasteStyle() {
				return true;
			}
		});
		module.exports = ControlBaseDataView;
	}));

//#endregion
//#region assets/dev/js/editor/controls/switcher.js
	var require_switcher = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ControlBaseDataView = require_base_data();
		module.exports = ControlBaseDataView.extend({ setInputValue: function setInputValue(input, value) {
			this.$(input).prop("checked", this.model.get("return_value") === value);
		} }, { onPasteStyle: function onPasteStyle(control, clipboardValue) {
			return !clipboardValue || clipboardValue === control.return_value;
		} });
	}));

//#endregion
//#region modules/styleguide/assets/js/controls/switcher.js
	init_classCallCheck();
	init_createClass();
	init_possibleConstructorReturn();
	init_getPrototypeOf();
	init_inherits();
	var import_switcher = /* @__PURE__ */ __toESM(require_switcher());
	var import_base_data = /* @__PURE__ */ __toESM(require_base_data());
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
	function _superPropGet(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	var _default$1 = /*#__PURE__*/ function(_Switcher) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$2(this, _default, arguments);
		}
		_inherits(_default, _Switcher);
		return _createClass(_default, [
			{
				key: "initialize",
				value: function initialize() {
					import_base_data.default.prototype.initialize.apply(this, arguments);
					this.$el.addClass("elementor-control-type-switcher");
				}
			},
			{
				key: "onBeforeRender",
				value: function onBeforeRender() {
					for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
					_superPropGet(_default, "onBeforeRender", this, 3)(args);
					var actualValue = elementor.getPreferences("enable_styleguide_preview");
					if (actualValue !== this.getCurrentValue()) this.setValue(actualValue);
				}
			},
			{
				key: "onBaseInputChange",
				value: function onBaseInputChange(event) {
					import_base_data.default.prototype.onBaseInputChange.apply(this, arguments);
					var input = event.currentTarget;
					var value = this.getInputValue(input);
					if (this.model.get("on_change_command")) this.runCommand(value);
					this.model.set("return_value", null);
				}
			},
			{
				key: "runCommand",
				value: function runCommand(value) {
					$e.run("preview/styleguide/switcher-change", {
						name: this.model.get("name"),
						value
					});
				}
			}
		]);
	}(import_switcher.default);

//#endregion
//#region modules/styleguide/assets/js/e-component.js
	init_classCallCheck();
	init_createClass();
	init_possibleConstructorReturn();
	init_getPrototypeOf();
	init_inherits();
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
	var _default = /*#__PURE__*/ function(_$e$modules$Component) {
		function _default(args) {
			var _this;
			_classCallCheck(this, _default);
			_this = _callSuper$1(this, _default, [args]);
			elementor.addControlView("global-style-switcher", _default$1);
			_this.registerStyleguideDialogType();
			elementor.once("preview:loaded", function() {
				_this.initModal();
			});
			return _this;
		}
		_inherits(_default, _$e$modules$Component);
		return _createClass(_default, [
			{
				key: "getNamespace",
				value: function getNamespace() {
					return "preview/styleguide";
				}
			},
			{
				key: "defaultCommands",
				value: function defaultCommands() {
					return this.importCommands(commands_exports);
				}
			},
			{
				key: "registerStyleguideDialogType",
				value: function registerStyleguideDialogType() {
					DialogsManager.addWidgetType("styleguide", DialogsManager.getWidgetType("lightbox").extend("alert", { buildWidget: function buildWidget() {
						DialogsManager.getWidgetType("lightbox").prototype.buildWidget.apply(this, arguments);
						var $widgetContent = this.addElement("widgetContent");
						var elements = this.getElements();
						$widgetContent.append(elements.message);
						elements.widget.html($widgetContent);
					} }));
				}
			},
			{
				key: "initModal",
				value: function initModal() {
					var modal;
					this.getModal = function() {
						if (modal) return modal;
						modal = elementorCommon.dialogsManager.createWidget("styleguide", {
							id: "e-styleguide-preview-dialog",
							message: "<div class=\"e-styleguide-preview-root\"></div>",
							position: {
								my: "center center",
								at: "center center"
							},
							hide: {
								onOutsideClick: false,
								onEscKeyPress: false,
								onClick: false,
								onBackgroundClick: false
							},
							container: elementor.$previewContents.find("body")
						});
						return modal;
					};
				}
			},
			{
				key: "showStyleguidePreview",
				value: function showStyleguidePreview() {
					var skipPreferencesCheck = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
					if (this.getModal().isVisible() || !skipPreferencesCheck && !elementor.getPreferences("enable_styleguide_preview")) return;
					this.getPreviewFrame().postMessage({ name: "elementor/styleguide/preview/show" }, "*");
					this.getModal().show();
				}
			},
			{
				key: "hideStyleguidePreview",
				value: function hideStyleguidePreview() {
					this.getPreviewFrame().postMessage({ name: "elementor/styleguide/preview/hide" }, "*");
					this.getModal().hide();
				}
			},
			{
				key: "enableStyleguidePreview",
				value: function enableStyleguidePreview(options) {
					if (options.value) this.showStyleguidePreview(true);
					else this.hideStyleguidePreview();
					$e.run("document/elements/settings", {
						container: elementor.settings.editorPreferences.getEditedView().getContainer(),
						settings: { enable_styleguide_preview: options.value },
						options: { external: true }
					});
				}
			},
			{
				key: "isInEditor",
				value: function isInEditor() {
					return !!window.elementor;
				}
			},
			{
				key: "getPreviewFrame",
				value: function getPreviewFrame() {
					return this.isInEditor() ? elementor.$preview[0].contentWindow : window;
				}
			}
		]);
	}($e.modules.ComponentBase);

//#endregion
//#region modules/styleguide/assets/js/styleguide.js
	init_classCallCheck();
	init_createClass();
	init_possibleConstructorReturn();
	init_getPrototypeOf();
	init_inherits();
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
		function Styleguide() {
			_classCallCheck(this, Styleguide);
			return _callSuper(this, Styleguide, arguments);
		}
		_inherits(Styleguide, _elementorModules$edi);
		return _createClass(Styleguide, [
			{
				key: "onInit",
				value: function onInit() {
					$e.components.register(new _default());
					this.addHooks();
				}
			},
			{
				key: "getGlobalRoutes",
				value: function getGlobalRoutes() {
					return {
						"global-colors": "panel/global/global-colors",
						"global-typography": "panel/global/global-typography"
					};
				}
			},
			{
				key: "addHooks",
				value: function addHooks() {
					elementor.hooks.addAction("panel/global/tab/before-show", this.show.bind(this));
					elementor.hooks.addAction("panel/global/tab/before-destroy", this.hide.bind(this));
				}
			},
			{
				key: "show",
				value: function show(args) {
					if (!args.id || !(args.id in this.getGlobalRoutes())) return;
					$e.run("preview/styleguide/".concat(args.id));
				}
			},
			{
				key: "hide",
				value: function hide(args) {
					if (!args.id || !(args.id in this.getGlobalRoutes())) return;
					if (Object.values(this.getGlobalRoutes()).some(function(route) {
						return $e.routes.current.panel === route;
					})) return;
					$e.run("preview/styleguide/hide");
				}
			}
		]);
	}(elementorModules.editor.utils.Module))();

//#endregion
})(wp.i18n);
//# sourceMappingURL=styleguide.js.map