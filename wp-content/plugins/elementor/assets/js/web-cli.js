(function(_reduxjs_toolkit) {

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
	init_typeof();
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
	init_typeof();
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
	function _arrayLikeToArray$2(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}
	__name(_arrayLikeToArray$2, "_arrayLikeToArray");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
	function _unsupportedIterableToArray$2(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray$2(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$2(r, a) : void 0;
		}
	}
	__name(_unsupportedIterableToArray$2, "_unsupportedIterableToArray");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
	function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/slicedToArray.js
	function _slicedToArray(r, e) {
		return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray$2(r, e) || _nonIterableRest();
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
//#region assets/dev/js/modules/imports/instance-type.js
	function _superPropGet$5(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$5, "_superPropGet");
	var InstanceType = /*#__PURE__*/ function() {
		function InstanceType() {
			var _this = this;
			_classCallCheck(this, InstanceType);
			var target = this instanceof InstanceType ? this.constructor : void 0;
			var prototypes = [];
			while (target.__proto__ && target.__proto__.name) {
				prototypes.push(target.__proto__);
				target = target.__proto__;
			}
			prototypes.reverse().forEach(function(proto) {
				return _this instanceof proto;
			});
		}
		return _createClass(InstanceType, null, [{
			key: Symbol.hasInstance,
			value: function value(target) {
				/**
				* This is function extending being called each time JS uses instanceOf, since babel use it each time it create new class
				* its give's opportunity to mange capabilities of instanceOf operator.
				* saving current class each time will give option later to handle instanceOf manually.
				*/
				var result = _superPropGet$5(InstanceType, Symbol.hasInstance, this, 2)([target]);
				if (target && !target.constructor.getInstanceType) return result;
				if (target) {
					if (!target.instanceTypes) target.instanceTypes = [];
					if (!result) {
						if (this.getInstanceType() === target.constructor.getInstanceType()) result = true;
					}
					if (result) {
						var name = this.getInstanceType === InstanceType.getInstanceType ? "BaseInstanceType" : this.getInstanceType();
						if (-1 === target.instanceTypes.indexOf(name)) target.instanceTypes.push(name);
					}
				}
				if (!result && target) result = target.instanceTypes && Array.isArray(target.instanceTypes) && -1 !== target.instanceTypes.indexOf(this.getInstanceType());
				return result;
			}
		}, {
			key: "getInstanceType",
			value: function getInstanceType() {
				elementorModules.ForceMethodImplementation();
			}
		}]);
	}();

//#endregion
//#region assets/dev/js/editor/utils/is-instanceof.js
	function _createForOfIteratorHelper$1(r, e) {
		var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
		if (!t) {
			if (Array.isArray(r) || (t = _unsupportedIterableToArray$1(r)) || e && r && "number" == typeof r.length) {
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
	__name(_createForOfIteratorHelper$1, "_createForOfIteratorHelper");
	function _unsupportedIterableToArray$1(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
		}
	}
	__name(_unsupportedIterableToArray$1, "_unsupportedIterableToArray");
	function _arrayLikeToArray$1(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}
	__name(_arrayLikeToArray$1, "_arrayLikeToArray");
	/**
	* Some FileAPI objects such as FileList, DataTransferItem and DataTransferItemList has inconsistency with the retrieved
	* object (from events, etc.) and the actual JavaScript object so a regular instanceof doesn't work. This function can
	* check whether it's instanceof by using the objects constructor and prototype names.
	*
	* @param  object
	* @param  constructors
	* @return {boolean}
	*/
	var is_instanceof_default = /* @__PURE__ */ __name((function(object, constructors) {
		constructors = Array.isArray(constructors) ? constructors : [constructors];
		var _iterator = _createForOfIteratorHelper$1(constructors);
		var _step;
		try {
			for (_iterator.s(); !(_step = _iterator.n()).done;) {
				var constructor = _step.value;
				if (object.constructor.name === constructor.prototype[Symbol.toStringTag]) return true;
			}
		} catch (err) {
			_iterator.e(err);
		} finally {
			_iterator.f();
		}
		return false;
	}), "default");

//#endregion
//#region assets/dev/js/modules/imports/args-object.js
	init_typeof();
	function _callSuper$35(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$36() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$35, "_callSuper");
	function _isNativeReflectConstruct$36() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$36 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$36, "_isNativeReflectConstruct");
	var ArgsObject = /*#__PURE__*/ function(_InstanceType) {
		/**
		* Function constructor().
		*
		* Create ArgsObject.
		*
		* @param {{}} args
		*/
		function ArgsObject(args) {
			var _this;
			_classCallCheck(this, ArgsObject);
			_this = _callSuper$35(this, ArgsObject);
			_this.args = args;
			return _this;
		}
		/**
		* Function requireArgument().
		*
		* Validate property in args.
		*
		* @param {string} property
		* @param {{}}     args
		*
		* @throws {Error}
		*/
		_inherits(ArgsObject, _InstanceType);
		return _createClass(ArgsObject, [
			{
				key: "requireArgument",
				value: function requireArgument(property) {
					var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.args;
					if (!Object.prototype.hasOwnProperty.call(args, property)) throw Error("".concat(property, " is required."));
				}
			},
			{
				key: "requireArgumentType",
				value: function requireArgumentType(property, type) {
					var args = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.args;
					this.requireArgument(property, args);
					if (_typeof(args[property]) !== type) throw Error("".concat(property, " invalid type: ").concat(type, "."));
				}
			},
			{
				key: "requireArgumentInstance",
				value: function requireArgumentInstance(property, instance) {
					var args = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.args;
					this.requireArgument(property, args);
					if (!(args[property] instanceof instance) && !is_instanceof_default(args[property], instance)) throw Error("".concat(property, " invalid instance."));
				}
			},
			{
				key: "requireArgumentConstructor",
				value: function requireArgumentConstructor(property, type) {
					var args = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.args;
					this.requireArgument(property, args);
					if (args[property].constructor.toString() !== type.prototype.constructor.toString()) throw Error("".concat(property, " invalid constructor type."));
				}
			}
		], [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "ArgsObject";
			}
		}]);
	}(InstanceType);

//#endregion
//#region modules/web-cli/assets/js/utils/console.js
	var Console = /*#__PURE__*/ function() {
		function Console() {
			_classCallCheck(this, Console);
		}
		return _createClass(Console, null, [{
			key: "error",
			value: function error(message) {
				if ($e.devTools) $e.devTools.log.error(message);
				if (!(message instanceof $e.modules.HookBreak)) console.error(message);
			}
		}, {
			key: "warn",
			value: function warn() {
				var _console;
				var style = "font-size: 12px; background-image: url(\"".concat(elementorWebCliConfig.urls.assets, "images/logo-icon.png\"); background-repeat: no-repeat; background-size: contain;");
				for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				args.unshift("%c  %c", style, "");
				(_console = console).warn.apply(_console, args);
			}
		}]);
	}();

//#endregion
//#region modules/web-cli/assets/js/utils/deprecation.js
/**
	* @typedef {Object} Version
	* @property {number} major1 The first number
	* @property {number} major2 The second number
	* @property {number} minor  The third number
	* @property {string} build  The fourth number
	*/
	var softDeprecated = function softDeprecated(name, version, replacement) {
		if (elementorWebCliConfig.isDebug) deprecatedMessage("soft", name, version, replacement);
	};
	var hardDeprecated = function hardDeprecated(name, version, replacement) {
		deprecatedMessage("hard", name, version, replacement);
	};
	var deprecatedMessage = function deprecatedMessage(type, name, version, replacement) {
		var message = "`".concat(name, "` is ").concat(type, " deprecated since ").concat(version);
		if (replacement) message += " - Use `".concat(replacement, "` instead");
		Console.warn(message);
	};
	var Deprecation = /*#__PURE__*/ function() {
		function Deprecation() {
			_classCallCheck(this, Deprecation);
		}
		return _createClass(Deprecation, null, [
			{
				key: "deprecated",
				value: function deprecated(name, version, replacement) {
					if (this.isHardDeprecated(version)) hardDeprecated(name, version, replacement);
					else softDeprecated(name, version, replacement);
				}
			},
			{
				key: "parseVersion",
				value: function parseVersion(version) {
					var versionParts = version.split(".");
					if (versionParts.length < 3 || versionParts.length > 4) throw new RangeError("Invalid Semantic Version string provided");
					var _versionParts = _slicedToArray(versionParts, 4);
					var major1 = _versionParts[0];
					var major2 = _versionParts[1];
					var minor = _versionParts[2];
					var _versionParts$ = _versionParts[3];
					return {
						major1: parseInt(major1),
						major2: parseInt(major2),
						minor: parseInt(minor),
						build: _versionParts$ === void 0 ? "" : _versionParts$
					};
				}
			},
			{
				key: "getTotalMajor",
				value: function getTotalMajor(versionObj) {
					var total = parseInt("".concat(versionObj.major1).concat(versionObj.major2, "0"));
					total = Number((total / 10).toFixed(0));
					if (versionObj.major2 > 9) total = versionObj.major2 - 9;
					return total;
				}
			},
			{
				key: "compareVersion",
				value: function compareVersion(version1, version2) {
					var _this = this;
					return [this.parseVersion(version1), this.parseVersion(version2)].map(function(versionObj) {
						return _this.getTotalMajor(versionObj);
					}).reduce(function(acc, major) {
						return acc - major;
					});
				}
			},
			{
				key: "isSoftDeprecated",
				value: function isSoftDeprecated(version) {
					return this.compareVersion(version, elementorWebCliConfig.version) <= 4;
				}
			},
			{
				key: "isHardDeprecated",
				value: function isHardDeprecated(version) {
					var total = this.compareVersion(version, elementorWebCliConfig.version);
					return total < 0 || total >= 8;
				}
			}
		]);
	}();

//#endregion
//#region modules/web-cli/assets/js/modules/command-infra.js
	function _callSuper$34(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$35() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$34, "_callSuper");
	function _isNativeReflectConstruct$35() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$35 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$35, "_isNativeReflectConstruct");
	/**
	* @typedef {import('../modules/component-base')} ComponentBase
	*/
	var CommandInfra = /*#__PURE__*/ function(_ArgsObject) {
		/**
		* Function constructor().
		*
		* Create Commands Base.
		*
		* @param {{}} args
		*/
		function CommandInfra() {
			var _this;
			var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			_classCallCheck(this, CommandInfra);
			_this = _callSuper$34(this, CommandInfra, [args]);
			if (!_this.constructor.registerConfig) throw RangeError("Doing it wrong: Each command type should have `registerConfig`.");
			_this.command = _this.constructor.getCommand();
			_this.component = _this.constructor.getComponent();
			_this.initialize(args);
			args = _this.args;
			_this.validateArgs(args);
			return _this;
		}
		/**
		* Function initialize().
		*
		* Initialize command, called after construction.
		*
		* @param {{}} args
		*/
		_inherits(CommandInfra, _ArgsObject);
		return _createClass(CommandInfra, [
			{
				key: "currentCommand",
				get: function get() {
					Deprecation.deprecated("this.currentCommand", "3.7.0", "this.command");
					return this.command;
				}
			},
			{
				key: "initialize",
				value: function initialize() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
				}
			},
			{
				key: "validateArgs",
				value: function validateArgs() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
				}
			},
			{
				key: "apply",
				value: function apply() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
					elementorModules.ForceMethodImplementation();
				}
			},
			{
				key: "run",
				value: function run() {
					return this.apply(this.args);
				}
			},
			{
				key: "onBeforeRun",
				value: function onBeforeRun() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
				}
			},
			{
				key: "onAfterRun",
				value: function onAfterRun() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
					arguments.length > 1 && arguments[1];
				}
			},
			{
				key: "onBeforeApply",
				value: function onBeforeApply() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
				}
			},
			{
				key: "onAfterApply",
				value: function onAfterApply() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
					arguments.length > 1 && arguments[1];
				}
			},
			{
				key: "onCatchApply",
				value: function onCatchApply(e) {}
			}
		], [
			{
				key: "getInstanceType",
				value: function getInstanceType() {
					return "CommandInfra";
				}
			},
			{
				key: "getInfo",
				value: function getInfo() {
					return {};
				}
			},
			{
				key: "getCommand",
				value: function getCommand() {
					return this.registerConfig.command;
				}
			},
			{
				key: "getComponent",
				value: function getComponent() {
					return this.registerConfig.component;
				}
			},
			{
				key: "setRegisterConfig",
				value: function setRegisterConfig(config) {
					this.registerConfig = Object.freeze(config);
				}
			}
		]);
	}(ArgsObject);
	/**
	* @type {Object}
	*/
	_defineProperty(CommandInfra, "registerConfig", null);

//#endregion
//#region modules/web-cli/assets/js/modules/command-base.js
	function _callSuper$33(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$34() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$33, "_callSuper");
	function _isNativeReflectConstruct$34() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$34 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$34, "_isNativeReflectConstruct");
	/**
	* @name $e.modules.CommandBase
	*/
	var CommandBase = /*#__PURE__*/ function(_CommandInfra) {
		function CommandBase() {
			_classCallCheck(this, CommandBase);
			return _callSuper$33(this, CommandBase, arguments);
		}
		_inherits(CommandBase, _CommandInfra);
		return _createClass(CommandBase, [
			{
				key: "onBeforeRun",
				value: function onBeforeRun() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					$e.hooks.runUIBefore(this.command, args);
				}
			},
			{
				key: "onAfterRun",
				value: function onAfterRun() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					var result = arguments.length > 1 ? arguments[1] : void 0;
					$e.hooks.runUIAfter(this.command, args, result);
				}
			},
			{
				key: "onBeforeApply",
				value: function onBeforeApply() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					$e.hooks.runDataDependency(this.command, args);
				}
			},
			{
				key: "onAfterApply",
				value: function onAfterApply() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					var result = arguments.length > 1 ? arguments[1] : void 0;
					return $e.hooks.runDataAfter(this.command, args, result);
				}
			},
			{
				key: "onCatchApply",
				value: function onCatchApply(e) {
					this.runCatchHooks(e);
				}
			},
			{
				key: "runCatchHooks",
				value: function runCatchHooks(e) {
					$e.hooks.runDataCatch(this.command, this.args, e);
					$e.hooks.runUICatch(this.command, this.args, e);
				}
			},
			{
				key: "requireContainer",
				value: function requireContainer() {
					var _this = this;
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.args;
					Deprecation.deprecated("requireContainer()", "3.7.0", "Extend `$e.modules.editor.CommandContainerBase` or `$e.modules.editor.CommandContainerInternalBase`");
					if (!args.container && !args.containers) throw Error("container or containers are required.");
					if (args.container && args.containers) throw Error("container and containers cannot go together please select one of them.");
					(args.containers || [args.container]).forEach(function(container) {
						_this.requireArgumentInstance("container", elementorModules.editor.Container, { container });
					});
				}
			}
		], [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "CommandBase";
			}
		}]);
	}(CommandInfra);

//#endregion
//#region modules/web-cli/assets/js/modules/command-callback-base.js
	function _callSuper$32(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$33() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$32, "_callSuper");
	function _isNativeReflectConstruct$33() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$33 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$33, "_isNativeReflectConstruct");
	/**
	* To support pure callbacks in the API(commands.js), to ensure they have registered with the proper context.
	*/
	var CommandCallbackBase = /*#__PURE__*/ function(_CommandBase) {
		function CommandCallbackBase() {
			_classCallCheck(this, CommandCallbackBase);
			return _callSuper$32(this, CommandCallbackBase, arguments);
		}
		_inherits(CommandCallbackBase, _CommandBase);
		return _createClass(CommandCallbackBase, [{
			key: "apply",
			value: function apply() {
				var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				return this.constructor.getCallback()(args);
			}
		}], [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "CommandCallbackBase";
			}
		}, {
			key: "getCallback",
			value: function getCallback() {
				return this.registerConfig.callback;
			}
		}]);
	}(CommandBase);

//#endregion
//#region assets/dev/js/modules/imports/module.js
	var require_module = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_typeof();
		var Module = function Module() {
			var $ = jQuery;
			var instanceParams = arguments;
			var self = this;
			var events = {};
			var settings;
			var ensureClosureMethods = function ensureClosureMethods() {
				$.each(self, function(methodName) {
					var oldMethod = self[methodName];
					if ("function" !== typeof oldMethod) return;
					self[methodName] = function() {
						return oldMethod.apply(self, arguments);
					};
				});
			};
			var initSettings = function initSettings() {
				settings = self.getDefaultSettings();
				var instanceSettings = instanceParams[0];
				if (instanceSettings) $.extend(true, settings, instanceSettings);
			};
			var init = function init() {
				self.__construct.apply(self, instanceParams);
				ensureClosureMethods();
				initSettings();
				self.trigger("init");
			};
			this.getItems = function(items, itemKey) {
				if (itemKey) {
					var keyStack = itemKey.split(".");
					var currentKey = keyStack.splice(0, 1);
					if (!keyStack.length) return items[currentKey];
					if (!items[currentKey]) return;
					return this.getItems(items[currentKey], keyStack.join("."));
				}
				return items;
			};
			this.getSettings = function(setting) {
				return this.getItems(settings, setting);
			};
			this.setSettings = function(settingKey, value, settingsContainer) {
				if (!settingsContainer) settingsContainer = settings;
				if ("object" === _typeof(settingKey)) {
					$.extend(settingsContainer, settingKey);
					return self;
				}
				var keyStack = settingKey.split(".");
				var currentKey = keyStack.splice(0, 1);
				if (!keyStack.length) {
					settingsContainer[currentKey] = value;
					return self;
				}
				if (!settingsContainer[currentKey]) settingsContainer[currentKey] = {};
				return self.setSettings(keyStack.join("."), value, settingsContainer[currentKey]);
			};
			this.getErrorMessage = function(type, functionName) {
				var message;
				switch (type) {
					case "forceMethodImplementation":
						message = "The method '".concat(functionName, "' must to be implemented in the inheritor child.");
						break;
					default: message = "An error occurs";
				}
				return message;
			};
			this.forceMethodImplementation = function(functionName) {
				throw new Error(this.getErrorMessage("forceMethodImplementation", functionName));
			};
			this.on = function(eventName, callback) {
				if ("object" === _typeof(eventName)) {
					$.each(eventName, function(singleEventName) {
						self.on(singleEventName, this);
					});
					return self;
				}
				eventName.split(" ").forEach(function(singleEventName) {
					if (!events[singleEventName]) events[singleEventName] = [];
					events[singleEventName].push(callback);
				});
				return self;
			};
			this.off = function(eventName, callback) {
				if (!events[eventName]) return self;
				if (!callback) {
					delete events[eventName];
					return self;
				}
				var callbackIndex = events[eventName].indexOf(callback);
				if (-1 !== callbackIndex) {
					delete events[eventName][callbackIndex];
					events[eventName] = events[eventName].filter(function(val) {
						return val;
					});
				}
				return self;
			};
			this.trigger = function(eventName) {
				var methodName = "on" + eventName[0].toUpperCase() + eventName.slice(1);
				var params = Array.prototype.slice.call(arguments, 1);
				if (self[methodName]) self[methodName].apply(self, params);
				var callbacks = events[eventName];
				if (!callbacks) return self;
				$.each(callbacks, function(index, callback) {
					callback.apply(self, params);
				});
				return self;
			};
			init();
		};
		Module.prototype.__construct = function() {};
		Module.prototype.getDefaultSettings = function() {
			return {};
		};
		Module.prototype.getConstructorID = function() {
			return this.constructor.name;
		};
		Module.extend = function(properties) {
			var $ = jQuery;
			var parent = this;
			var child = function child() {
				return parent.apply(this, arguments);
			};
			$.extend(child, parent);
			child.prototype = Object.create($.extend({}, parent.prototype, properties));
			child.prototype.constructor = child;
			child.__super__ = parent.prototype;
			return child;
		};
		module.exports = Module;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
var import_module = /* @__PURE__ */ __toESM(require_module());
	function _isNativeFunction(t) {
		try {
			return -1 !== Function.toString.call(t).indexOf("[native code]");
		} catch (n) {
			return "function" == typeof t;
		}
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
	function _isNativeReflectConstruct$32() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$32 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$32, "_isNativeReflectConstruct");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/construct.js
	function _construct(t, e, r) {
		if (_isNativeReflectConstruct$32()) return Reflect.construct.apply(null, arguments);
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
//#region modules/web-cli/assets/js/utils/force-method-implementation.js
	function _callSuper$31(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$31() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$31, "_callSuper");
	function _isNativeReflectConstruct$31() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$31 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$31, "_isNativeReflectConstruct");
	var ForceMethodImplementation = /*#__PURE__*/ function(_Error) {
		function ForceMethodImplementation() {
			var _this;
			var info = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			_classCallCheck(this, ForceMethodImplementation);
			_this = _callSuper$31(this, ForceMethodImplementation, ["".concat(info.isStatic ? "static " : "").concat(info.fullName, "() should be implemented, please provide '").concat(info.functionName || info.fullName, "' functionality.")]);
			Error.captureStackTrace(_this, ForceMethodImplementation);
			return _this;
		}
		_inherits(ForceMethodImplementation, _Error);
		return _createClass(ForceMethodImplementation);
	}(/*#__PURE__*/ _wrapNativeSuper(Error));
	var force_method_implementation_default = /* @__PURE__ */ __name((function() {
		var caller = Error().stack.split("\n")[2].trim();
		var callerName = caller.startsWith("at new") ? "constructor" : caller.split(" ")[1];
		var info = {};
		info.functionName = callerName;
		info.fullName = callerName;
		if (info.functionName.includes(".")) {
			var parts = info.functionName.split(".");
			info.className = parts[0];
			info.functionName = parts[1];
		} else info.isStatic = true;
		throw new ForceMethodImplementation(info);
	}), "default");

//#endregion
//#region modules/web-cli/assets/js/modules/component-base.js
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
	function _callSuper$30(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$30() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$30, "_callSuper");
	function _isNativeReflectConstruct$30() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$30 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$30, "_isNativeReflectConstruct");
	/**
	* @typedef {import('./command-infra')} CommandInfra
	* @typedef {import('./hook-base')} HookBase
	* @typedef {import('../core/states/ui-state-base')} UiStateBase
	*/
	var ComponentBase = /*#__PURE__*/ function(_Module) {
		function ComponentBase() {
			_classCallCheck(this, ComponentBase);
			return _callSuper$30(this, ComponentBase, arguments);
		}
		_inherits(ComponentBase, _Module);
		return _createClass(ComponentBase, [
			{
				key: "__construct",
				value: function __construct() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					if (args.manager) this.manager = args.manager;
					this.commands = this.defaultCommands();
					this.commandsInternal = this.defaultCommandsInternal();
					this.hooks = this.defaultHooks();
					this.routes = this.defaultRoutes();
					this.tabs = this.defaultTabs();
					this.shortcuts = this.defaultShortcuts();
					this.utils = this.defaultUtils();
					this.data = this.defaultData();
					this.uiStates = this.defaultUiStates();
					this.states = this.defaultStates();
					this.defaultRoute = "";
					this.currentTab = "";
				}
			},
			{
				key: "registerAPI",
				value: function registerAPI() {
					var _this = this;
					Object.entries(this.getTabs()).forEach(function(tab) {
						return _this.registerTabRoute(tab[0]);
					});
					Object.entries(this.getRoutes()).forEach(function(_ref) {
						var _ref2 = _slicedToArray(_ref, 2);
						var route = _ref2[0];
						var callback = _ref2[1];
						return _this.registerRoute(route, callback);
					});
					Object.entries(this.getCommands()).forEach(function(_ref3) {
						var _ref4 = _slicedToArray(_ref3, 2);
						var command = _ref4[0];
						var callback = _ref4[1];
						return _this.registerCommand(command, callback);
					});
					Object.entries(this.getCommandsInternal()).forEach(function(_ref5) {
						var _ref6 = _slicedToArray(_ref5, 2);
						var command = _ref6[0];
						var callback = _ref6[1];
						return _this.registerCommandInternal(command, callback);
					});
					Object.values(this.getHooks()).forEach(function(instance) {
						return _this.registerHook(instance);
					});
					Object.entries(this.getData()).forEach(function(_ref7) {
						var _ref8 = _slicedToArray(_ref7, 2);
						var command = _ref8[0];
						var callback = _ref8[1];
						return _this.registerData(command, callback);
					});
					Object.values(this.getUiStates()).forEach(function(instance) {
						return _this.registerUiState(instance);
					});
					Object.entries(this.getStates()).forEach(function(_ref9) {
						var _ref0 = _slicedToArray(_ref9, 2);
						var id = _ref0[0];
						var state = _ref0[1];
						return _this.registerState(id, state);
					});
				}
			},
			{
				key: "getNamespace",
				value: function getNamespace() {
					force_method_implementation_default();
				}
			},
			{
				key: "getRootContainer",
				value: function getRootContainer() {
					Deprecation.deprecated("getRootContainer()", "3.7.0", "getServiceName()");
					return this.getServiceName();
				}
			},
			{
				key: "getServiceName",
				value: function getServiceName() {
					return this.getNamespace().split("/")[0];
				}
			},
			{
				key: "store",
				get: function get() {
					return $e.store.get(this.getNamespace());
				}
			},
			{
				key: "defaultTabs",
				value: function defaultTabs() {
					return {};
				}
			},
			{
				key: "defaultRoutes",
				value: function defaultRoutes() {
					return {};
				}
			},
			{
				key: "defaultCommands",
				value: function defaultCommands() {
					return {};
				}
			},
			{
				key: "defaultCommandsInternal",
				value: function defaultCommandsInternal() {
					return {};
				}
			},
			{
				key: "defaultHooks",
				value: function defaultHooks() {
					return {};
				}
			},
			{
				key: "defaultUiStates",
				value: function defaultUiStates() {
					return {};
				}
			},
			{
				key: "defaultStates",
				value: function defaultStates() {
					return {};
				}
			},
			{
				key: "defaultShortcuts",
				value: function defaultShortcuts() {
					return {};
				}
			},
			{
				key: "defaultUtils",
				value: function defaultUtils() {
					return {};
				}
			},
			{
				key: "defaultData",
				value: function defaultData() {
					return {};
				}
			},
			{
				key: "getCommands",
				value: function getCommands() {
					return this.commands;
				}
			},
			{
				key: "getCommandsInternal",
				value: function getCommandsInternal() {
					return this.commandsInternal;
				}
			},
			{
				key: "getHooks",
				value: function getHooks() {
					return this.hooks;
				}
			},
			{
				key: "getUiStates",
				value: function getUiStates() {
					return this.uiStates;
				}
			},
			{
				key: "getStates",
				value: function getStates() {
					return this.states;
				}
			},
			{
				key: "getRoutes",
				value: function getRoutes() {
					return this.routes;
				}
			},
			{
				key: "getTabs",
				value: function getTabs() {
					return this.tabs;
				}
			},
			{
				key: "getShortcuts",
				value: function getShortcuts() {
					return this.shortcuts;
				}
			},
			{
				key: "getData",
				value: function getData() {
					return this.data;
				}
			},
			{
				key: "registerCommand",
				value: function registerCommand(command, context) {
					var commandsType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
					var commandsManager;
					switch (commandsType) {
						case "default":
							commandsManager = $e.commands;
							break;
						case "internal":
							commandsManager = $e.commandsInternal;
							break;
						case "data":
							commandsManager = $e.data;
							break;
						default: throw new Error("Invalid commands type: '".concat(command, "'"));
					}
					var fullCommand = this.getNamespace() + "/" + command;
					var instanceType = context.getInstanceType ? context.getInstanceType() : false;
					var registerConfig = {
						command: fullCommand,
						component: this
					};
					if (!instanceType) {
						if ($e.devTools) $e.devTools.log.warn("Attach command-callback-base, on command: '".concat(fullCommand, "', context is unknown type."));
						registerConfig.callback = context;
						context = /*#__PURE__*/ function(_CommandCallbackBase) {
							function context() {
								_classCallCheck(this, context);
								return _callSuper$30(this, context, arguments);
							}
							_inherits(context, _CommandCallbackBase);
							return _createClass(context);
						}(CommandCallbackBase);
					}
					context.setRegisterConfig(registerConfig);
					commandsManager.register(this, command, context);
				}
			},
			{
				key: "registerHook",
				value: function registerHook(instance) {
					return instance.register();
				}
			},
			{
				key: "registerCommandInternal",
				value: function registerCommandInternal(command, context) {
					this.registerCommand(command, context, "internal");
				}
			},
			{
				key: "registerUiState",
				value: function registerUiState(instance) {
					$e.uiStates.register(instance);
				}
			},
			{
				key: "registerState",
				value: function registerState(id, stateConfig) {
					id = this.getNamespace() + (id ? "/".concat(id) : "");
					var slice = (0, _reduxjs_toolkit.createSlice)(_objectSpread$3(_objectSpread$3({}, stateConfig), {}, { name: id }));
					$e.store.register(id, slice);
				}
			},
			{
				key: "registerRoute",
				value: function registerRoute(route, callback) {
					$e.routes.register(this, route, callback);
				}
			},
			{
				key: "registerData",
				value: function registerData(command, context) {
					this.registerCommand(command, context, "data");
				}
			},
			{
				key: "unregisterRoute",
				value: function unregisterRoute(route) {
					$e.routes.unregister(this, route);
				}
			},
			{
				key: "registerTabRoute",
				value: function registerTabRoute(tab) {
					var _this2 = this;
					this.registerRoute(tab, function(args) {
						return _this2.activateTab(tab, args);
					});
				}
			},
			{
				key: "dependency",
				value: function dependency() {
					return true;
				}
			},
			{
				key: "open",
				value: function open() {
					return true;
				}
			},
			{
				key: "close",
				value: function close() {
					if (!this.isOpen) return false;
					this.isOpen = false;
					this.inactivate();
					$e.routes.clearCurrent(this.getNamespace());
					$e.routes.clearHistory(this.getServiceName());
					return true;
				}
			},
			{
				key: "activate",
				value: function activate() {
					$e.components.activate(this.getNamespace());
				}
			},
			{
				key: "inactivate",
				value: function inactivate() {
					$e.components.inactivate(this.getNamespace());
				}
			},
			{
				key: "isActive",
				value: function isActive() {
					return $e.components.isActive(this.getNamespace());
				}
			},
			{
				key: "onRoute",
				value: function onRoute(route) {
					this.toggleRouteClass(route, true);
					this.toggleHistoryClass();
					this.activate();
					this.trigger("route/open", route);
				}
			},
			{
				key: "onCloseRoute",
				value: function onCloseRoute(route) {
					this.toggleRouteClass(route, false);
					this.inactivate();
					this.trigger("route/close", route);
				}
			},
			{
				key: "setDefaultRoute",
				value: function setDefaultRoute(route) {
					this.defaultRoute = this.getNamespace() + "/" + route;
				}
			},
			{
				key: "getDefaultRoute",
				value: function getDefaultRoute() {
					return this.defaultRoute;
				}
			},
			{
				key: "removeTab",
				value: function removeTab(tab) {
					delete this.tabs[tab];
					this.unregisterRoute(tab);
				}
			},
			{
				key: "hasTab",
				value: function hasTab(tab) {
					return !!this.tabs[tab];
				}
			},
			{
				key: "addTab",
				value: function addTab(tab, args, position) {
					var _this3 = this;
					this.tabs[tab] = args;
					if ("undefined" !== typeof position) {
						var newTabs = {};
						var ids = Object.keys(this.tabs);
						ids.pop();
						ids.splice(position, 0, tab);
						ids.forEach(function(id) {
							newTabs[id] = _this3.tabs[id];
						});
						this.tabs = newTabs;
					}
					this.registerTabRoute(tab);
				}
			},
			{
				key: "getTabsWrapperSelector",
				value: function getTabsWrapperSelector() {
					return "";
				}
			},
			{
				key: "getTabRoute",
				value: function getTabRoute(tab) {
					return this.getNamespace() + "/" + tab;
				}
			},
			{
				key: "renderTab",
				value: function renderTab(tab) {}
			},
			{
				key: "activateTab",
				value: function activateTab(tab, args) {
					var _this4 = this;
					this.renderTab(tab, args);
					jQuery(this.getTabsWrapperSelector() + " .elementor-component-tab").off("click").on("click", function(event) {
						$e.route(_this4.getTabRoute(event.currentTarget.dataset.tab), args);
					}).removeClass("elementor-active").filter("[data-tab=\"" + tab + "\"]").addClass("elementor-active");
				}
			},
			{
				key: "getActiveTabConfig",
				value: function getActiveTabConfig() {
					return this.tabs[this.currentTab] || {};
				}
			},
			{
				key: "getBodyClass",
				value: function getBodyClass(route) {
					return "e-route-" + route.replace(/\//g, "-");
				}
			},
			{
				key: "normalizeCommandName",
				value: function normalizeCommandName(commandName) {
					return commandName.replace(/[A-Z]/g, function(match, offset) {
						return (offset > 0 ? "-" : "") + match.toLowerCase();
					});
				}
			},
			{
				key: "importCommands",
				value: function importCommands(commandsFromImport) {
					var _this5 = this;
					var commands = {};
					Object.entries(commandsFromImport).forEach(function(_ref1) {
						var _ref10 = _slicedToArray(_ref1, 2);
						var className = _ref10[0];
						var Class = _ref10[1];
						var command = _this5.normalizeCommandName(className);
						commands[command] = Class;
					});
					return commands;
				}
			},
			{
				key: "importHooks",
				value: function importHooks(hooksFromImport) {
					var hooks = {};
					for (var key in hooksFromImport) {
						var hook = new hooksFromImport[key]();
						hooks[hook.getId()] = hook;
					}
					return hooks;
				}
			},
			{
				key: "importUiStates",
				value: function importUiStates(statesFromImport) {
					var _this6 = this;
					var uiStates = {};
					Object.values(statesFromImport).forEach(function(className) {
						var uiState = new className(_this6);
						uiStates[uiState.getId()] = uiState;
					});
					return uiStates;
				}
			},
			{
				key: "setUiState",
				value: function setUiState(state, value) {
					$e.uiStates.set("".concat(this.getNamespace(), "/").concat(state), value);
				}
			},
			{
				key: "toggleRouteClass",
				value: function toggleRouteClass(route, state) {
					document.body.classList.toggle(this.getBodyClass(route), state);
				}
			},
			{
				key: "toggleHistoryClass",
				value: function toggleHistoryClass() {
					document.body.classList.toggle("e-routes-has-history", !!$e.routes.getHistory(this.getServiceName()).length);
				}
			}
		]);
	}(import_module.default);

//#endregion
//#region modules/web-cli/assets/js/core/backwards-compatibility.js
	function _callSuper$29(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$29() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$29, "_callSuper");
	function _isNativeReflectConstruct$29() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$29 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$29, "_isNativeReflectConstruct");
	var BackwardsCompatibility = /*#__PURE__*/ function() {
		function BackwardsCompatibility() {
			_classCallCheck(this, BackwardsCompatibility);
		}
		return _createClass(BackwardsCompatibility, [{
			key: "ensureTab",
			value: function ensureTab(namespace, tabSlug) {
				var page = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
				var component = $e.components.get(namespace);
				if (!component) {
					var Component = /*#__PURE__*/ function(_ComponentBase) {
						function Component() {
							_classCallCheck(this, Component);
							return _callSuper$29(this, Component, arguments);
						}
						_inherits(Component, _ComponentBase);
						return _createClass(Component, [{
							key: "getNamespace",
							value: function getNamespace() {
								return namespace;
							}
						}, {
							key: "renderTab",
							value: function renderTab(tab) {
								elementor.getPanelView().setPage(page).activateTab(tab);
							}
						}]);
					}(ComponentBase);
					component = $e.components.register(new Component());
				}
				if (!component.hasTab(tabSlug) && elementor.config.tabs[tabSlug]) component.addTab(tabSlug, { title: elementor.config.tabs[tabSlug] });
			}
		}]);
	}();

//#endregion
//#region modules/web-cli/assets/js/modules/command-internal-base.js
	function _callSuper$28(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$28() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$28, "_callSuper");
	function _isNativeReflectConstruct$28() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$28 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$28, "_isNativeReflectConstruct");
	/**
	* @name $e.modules.CommandInternalBase
	*/
	var CommandInternalBase = /*#__PURE__*/ function(_CommandBase) {
		function CommandInternalBase(args) {
			var commandsAPI = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e.commandsInternal;
			_classCallCheck(this, CommandInternalBase);
			return _callSuper$28(this, CommandInternalBase, [args, commandsAPI]);
		}
		_inherits(CommandInternalBase, _CommandBase);
		return _createClass(CommandInternalBase, null, [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "CommandInternalBase";
			}
		}]);
	}(CommandBase);

//#endregion
//#region modules/web-cli/assets/js/core/data/errors/base-error.js
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
	function _callSuper$27(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$27() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$27, "_callSuper");
	function _isNativeReflectConstruct$27() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$27 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$27, "_isNativeReflectConstruct");
	var BaseError = /*#__PURE__*/ function(_Error) {
		/**
		* Error constructor.
		*
		* @param {string} message
		* @param {string} code
		* @param {*}      data
		*/
		function BaseError() {
			var _this;
			var message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
			var code = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
			var data = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
			_classCallCheck(this, BaseError);
			_this = _callSuper$27(this, BaseError, [message]);
			/**
			* The server error code.
			*
			* @type {string}
			*/
			_defineProperty(_this, "code", "");
			/**
			* Additional data about the current error.
			*
			* @type {*[]}
			*/
			_defineProperty(_this, "data", []);
			_this.code = code;
			_this.data = data;
			return _this;
		}
		/**
		* Notify a message when the error occurs.
		*/
		_inherits(BaseError, _Error);
		return _createClass(BaseError, [{
			key: "notify",
			value: function notify() {
				Console.error(_objectSpread$2({ message: this.message }, this));
			}
		}], [{
			key: "create",
			value: function create(message) {
				var code = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
				var data = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
				return new this(message, code, data);
			}
		}, {
			key: "getHTTPErrorCode",
			value: function getHTTPErrorCode() {
				force_method_implementation_default();
			}
		}]);
	}(/*#__PURE__*/ _wrapNativeSuper(Error));

//#endregion
//#region modules/web-cli/assets/js/core/data/errors/default-error.js
	function _callSuper$26(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$26() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$26, "_callSuper");
	function _isNativeReflectConstruct$26() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$26 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$26, "_isNativeReflectConstruct");
	var DefaultError = /*#__PURE__*/ function(_BaseError) {
		function DefaultError() {
			_classCallCheck(this, DefaultError);
			return _callSuper$26(this, DefaultError, arguments);
		}
		_inherits(DefaultError, _BaseError);
		return _createClass(DefaultError, null, [{
			key: "getHTTPErrorCode",
			value: function getHTTPErrorCode() {
				return 501;
			}
		}]);
	}(BaseError);

//#endregion
//#region modules/web-cli/assets/js/core/data/errors/error-404.js
	function _callSuper$25(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$25() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$25, "_callSuper");
	function _isNativeReflectConstruct$25() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$25 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$25, "_isNativeReflectConstruct");
	var Error404 = /*#__PURE__*/ function(_BaseError) {
		function Error404() {
			_classCallCheck(this, Error404);
			return _callSuper$25(this, Error404, arguments);
		}
		_inherits(Error404, _BaseError);
		return _createClass(Error404, [{
			key: "notify",
			value: function notify() {
				Console.warn(this.message);
			}
		}], [{
			key: "getHTTPErrorCode",
			value: function getHTTPErrorCode() {
				return 404;
			}
		}]);
	}(BaseError);

//#endregion
//#region modules/web-cli/assets/js/core/data/errors/index.js
	var errors_exports = /* @__PURE__ */ __exportAll({
		DefaultError: () => DefaultError,
		Error404: () => Error404
	});

//#endregion
//#region modules/web-cli/assets/js/modules/command-data.js
	function _callSuper$24(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$24() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$24, "_callSuper");
	function _isNativeReflectConstruct$24() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$24 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$24, "_isNativeReflectConstruct");
	/**
	* @name $e.modules.CommandData
	*/
	/**
	* @typedef {('create'|'delete'|'get'|'update'|'options')} DataTypes
	*/
	/**
	* @typedef {{}} RequestData
	*/
	/**
	* @typedef {import('../core/data/errors/base-error')} BaseError
	*/
	var CommandData = /*#__PURE__*/ function(_CommandBase) {
		function CommandData(args) {
			var _this$args$options;
			var _this;
			var commandsAPI = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e.data;
			_classCallCheck(this, CommandData);
			_this = _callSuper$24(this, CommandData, [args, commandsAPI]);
			/**
			* Data returned from remote.
			*
			* @type {*}
			*/
			_defineProperty(_this, "data", void 0);
			/**
			* Fetch type.
			*
			* @type {DataTypes}
			*/
			_defineProperty(_this, "type", void 0);
			if ((_this$args$options = _this.args.options) !== null && _this$args$options !== void 0 && _this$args$options.type) _this.type = _this.args.options.type;
			return _this;
		}
		/**
		* Function getEndpointFormat().
		*
		* @return {null|string} endpoint format
		*/
		_inherits(CommandData, _CommandBase);
		return _createClass(CommandData, [
			{
				key: "getApplyMethods",
				value: function getApplyMethods() {
					var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.type;
					var before;
					var after;
					switch (type) {
						case "create":
							before = this.applyBeforeCreate;
							after = this.applyAfterCreate;
							break;
						case "delete":
							before = this.applyBeforeDelete;
							after = this.applyAfterDelete;
							break;
						case "get":
							before = this.applyBeforeGet;
							after = this.applyAfterGet;
							break;
						case "update":
							before = this.applyBeforeUpdate;
							after = this.applyAfterUpdate;
							break;
						case "options":
							before = this.applyBeforeOptions;
							after = this.applyAfterOptions;
							break;
						default: return false;
					}
					return {
						before: before.bind(this),
						after: after.bind(this)
					};
				}
			},
			{
				key: "getRequestData",
				value: function getRequestData() {
					return {
						type: this.type,
						args: this.args,
						timestamp: (/* @__PURE__ */ new Date()).getTime(),
						component: this.component,
						command: this.command,
						endpoint: $e.data.commandToEndpoint(this.command, JSON.parse(JSON.stringify(this.args)), this.constructor.getEndpointFormat())
					};
				}
			},
			{
				key: "apply",
				value: function apply() {
					var _this2 = this;
					var applyMethods = this.getApplyMethods();
					this.args = applyMethods.before(this.args);
					var requestData = this.getRequestData();
					return $e.data.fetch(requestData).then(function(data) {
						_this2.data = data;
						_this2.data = applyMethods.after(data, _this2.args);
						_this2.data = { data: _this2.data };
						_this2.data = Object.assign({ __requestData__: requestData }, _this2.data);
						return _this2.data;
					});
				}
			},
			{
				key: "applyBeforeCreate",
				value: function applyBeforeCreate() {
					return arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				}
			},
			{
				key: "applyAfterCreate",
				value: function applyAfterCreate(data) {
					arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
					return data;
				}
			},
			{
				key: "applyBeforeDelete",
				value: function applyBeforeDelete() {
					return arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				}
			},
			{
				key: "applyAfterDelete",
				value: function applyAfterDelete(data) {
					arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
					return data;
				}
			},
			{
				key: "applyBeforeGet",
				value: function applyBeforeGet() {
					return arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				}
			},
			{
				key: "applyAfterGet",
				value: function applyAfterGet(data) {
					arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
					return data;
				}
			},
			{
				key: "applyBeforeUpdate",
				value: function applyBeforeUpdate() {
					return arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				}
			},
			{
				key: "applyAfterUpdate",
				value: function applyAfterUpdate(data) {
					arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
					return data;
				}
			},
			{
				key: "applyBeforeOptions",
				value: function applyBeforeOptions() {
					return arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				}
			},
			{
				key: "applyAfterOptions",
				value: function applyAfterOptions(data) {
					arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
					return data;
				}
			},
			{
				key: "applyAfterCatch",
				value: function applyAfterCatch(e) {
					e.notify();
				}
			},
			{
				key: "onCatchApply",
				value: function onCatchApply(e) {
					var _e;
					var httpErrorCode = ((_e = e) === null || _e === void 0 || (_e = _e.data) === null || _e === void 0 ? void 0 : _e.status) || 501;
					var dataError = Object.values(errors_exports).find(function(error) {
						return error.getHTTPErrorCode() === httpErrorCode;
					});
					if (!dataError) dataError = DefaultError;
					e = dataError.create(e.message, e.code, e.data || []);
					this.runCatchHooks(e);
					this.applyAfterCatch(e);
				}
			}
		], [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "CommandData";
			}
		}, {
			key: "getEndpointFormat",
			value: function getEndpointFormat() {
				return null;
			}
		}]);
	}(CommandBase);

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
//#region modules/web-cli/assets/js/core/backwards-compatibility/commands.js
var import_regenerator = /* @__PURE__ */ __toESM(require_regenerator());
	function _callSuper$23(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$23() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$23, "_callSuper");
	function _isNativeReflectConstruct$23() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$23 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$23, "_isNativeReflectConstruct");
	var CommandsBackwardsCompatibility = /*#__PURE__*/ function(_Module) {
		function CommandsBackwardsCompatibility() {
			var _this;
			_classCallCheck(this, CommandsBackwardsCompatibility);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _callSuper$23(this, CommandsBackwardsCompatibility, [].concat(args));
			_defineProperty(_this, "on", function(eventName, callback) {
				if ("run" === eventName) {
					var componentName = _this.getConstructorID();
					componentName = componentName.replace(/^./, function(val) {
						return val.toLowerCase();
					});
					Deprecation.deprecated("$e.".concat(componentName, ".on( 'run', ... )"), "3.0.0", "$e.".concat(componentName, ".on( 'run:before', ... )"));
					_this.onOrig("run:before", callback);
					return;
				}
				_this.onOrig(eventName, callback);
			});
			return _this;
		}
		_inherits(CommandsBackwardsCompatibility, _Module);
		return _createClass(CommandsBackwardsCompatibility, [{
			key: "__construct",
			value: function __construct() {
				this.onOrig = this.on;
			}
		}]);
	}(import_module.default);

//#endregion
//#region modules/web-cli/assets/js/core/commands.js
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
	function _callSuper$22(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$22() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$22, "_callSuper");
	function _isNativeReflectConstruct$22() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$22 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$22, "_isNativeReflectConstruct");
	/**
	* @typedef {import('../modules/component-base')} ComponentBase
	*/
	/**
	* @typedef {import('../modules/command-base')} CommandBase
	*/
	/**
	* @typedef {{}} Component
	*/
	var Commands = /*#__PURE__*/ function(_CommandsBackwardsCom) {
		/**
		* Function constructor().
		*
		* Create `$e.commands` API.
		*
		* @param {{}} args
		*/
		function Commands() {
			var _this;
			_classCallCheck(this, Commands);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _callSuper$22(this, Commands, [].concat(args));
			_this.current = {};
			_this.currentArgs = {};
			_this.currentTrace = [];
			_this.commands = {};
			_this.components = {};
			Object.defineProperty(_this, "classes", { get: function get() {
				Deprecation.deprecated("$e.commands.classes", "3.7.0", "$e.commands.getCommandClass(), $e.commandsInternal.getCommandClass(), $e.data.getCommandClass(), $e.routes.getCommandClass() according to the requested command infra-structure,");
				return _objectSpread$1(_objectSpread$1(_objectSpread$1(_objectSpread$1({}, $e.commands.commands), $e.commandsInternal.commands), $e.data.commands), $e.routes.commands);
			} });
			return _this;
		}
		/**
		* @param {string} id
		* @return {CommandBase} command class
		*/
		_inherits(Commands, _CommandsBackwardsCom);
		return _createClass(Commands, [
			{
				key: "getCommandClass",
				value: function getCommandClass(id) {
					return this.commands[id];
				}
			},
			{
				key: "getAll",
				value: function getAll() {
					return Object.keys(this.commands).sort();
				}
			},
			{
				key: "register",
				value: function register(component, command, callback) {
					var _this2 = this;
					var namespace;
					if ("string" === typeof component) {
						namespace = component;
						component = $e.components.get(namespace);
						if (!component) this.error("'".concat(namespace, "' component is not exist."));
					} else namespace = component.getNamespace();
					var fullCommand = namespace + (command ? "/" + command : "");
					if (this.commands[fullCommand]) this.error("`".concat(fullCommand, "` is already registered."));
					this.commands[fullCommand] = callback;
					this.components[fullCommand] = namespace;
					var shortcut = component.getShortcuts()[command];
					if (shortcut) {
						shortcut.command = fullCommand;
						shortcut.callback = function(event) {
							return _this2.runShortcut(fullCommand, event);
						};
						$e.shortcuts.register(shortcut.keys, shortcut);
					}
					return this;
				}
			},
			{
				key: "unregister",
				value: function unregister(component, command) {
					var namespace;
					if ("string" === typeof component) {
						namespace = component;
						component = $e.components.get(namespace);
						if (!component) this.error("'".concat(namespace, "' component is not exist."));
					} else namespace = component.getNamespace();
					var fullCommand = namespace + (command ? "/" + command : "");
					if (!this.commands[fullCommand]) this.error("`".concat(fullCommand, "` not exist."));
					delete this.commands[fullCommand];
					delete this.components[fullCommand];
					var shortcut = component.getShortcuts()[command];
					if (shortcut) $e.shortcuts.unregister(shortcut.keys, shortcut);
					return this;
				}
			},
			{
				key: "getComponent",
				value: function getComponent(command) {
					var namespace = this.components[command];
					return $e.components.get(namespace);
				}
			},
			{
				key: "is",
				value: function is(command) {
					var component = this.getComponent(command);
					if (!component) return false;
					return command === this.current[component.getServiceName()];
				}
			},
			{
				key: "isCurrentFirstTrace",
				value: function isCurrentFirstTrace(command) {
					return command === this.getCurrentFirstTrace();
				}
			},
			{
				key: "getCurrent",
				value: function getCurrent() {
					var container = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
					if (container) {
						if (!this.current[container]) return false;
						return this.current[container];
					}
					return this.current;
				}
			},
			{
				key: "getCurrentArgs",
				value: function getCurrentArgs() {
					var container = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
					if (container) {
						if (!this.currentArgs[container]) return false;
						return this.currentArgs[container];
					}
					return this.currentArgs;
				}
			},
			{
				key: "getCurrentFirst",
				value: function getCurrentFirst() {
					return Object.values(this.current)[0];
				}
			},
			{
				key: "getCurrentLast",
				value: function getCurrentLast() {
					var current = Object.values(this.current);
					return current[current.length - 1];
				}
			},
			{
				key: "getCurrentFirstTrace",
				value: function getCurrentFirstTrace() {
					return this.currentTrace[0];
				}
			},
			{
				key: "beforeRun",
				value: function beforeRun(command) {
					var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
					var addTrace = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
					var component = this.getComponent(command);
					var container = component.getServiceName();
					if (addTrace) this.addCurrentTrace(container, command, args);
					if (args.onBefore) args.onBefore.apply(component, [args]);
					this.trigger("run:before", component, command, args);
					window.dispatchEvent(new CustomEvent("elementor/commands/run/before", { detail: {
						command,
						args
					} }));
				}
			},
			{
				key: "validateRun",
				value: function validateRun(command) {
					var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
					if (!this.commands[command]) this.error("`".concat(command, "` not found."));
					return this.getComponent(command).dependency(command, args);
				}
			},
			{
				key: "run",
				value: function run(command) {
					var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
					if (!this.validateRun(command, args)) return false;
					this.beforeRun(command, args);
					var context = this.commands[command];
					if (context.getInstanceType) context = new context(args);
					var currentComponent = this.getComponent(command);
					if (!(context instanceof CommandBase)) {
						var results = context.apply(currentComponent, [args]);
						this.afterRun(command, args, results);
						return results;
					}
					if (!this.validateInstanceScope(context, currentComponent, command)) return this.removeCurrentTrace(currentComponent);
					return this.runInstance(context);
				}
			},
			{
				key: "runInstance",
				value: function runInstance(instance) {
					var results = null;
					instance.onBeforeRun(instance.args);
					try {
						instance.onBeforeApply(instance.args);
						results = instance.run();
					} catch (e) {
						this.catchApply(e, instance);
						if (e instanceof $e.modules.HookBreak) {
							this.removeCurrentTrace(instance.component);
							return false;
						}
					}
					return this.applyRunAfter(instance, results);
				}
			},
			{
				key: "applyRunAfter",
				value: function applyRunAfter(instance, result) {
					var _this3 = this;
					if (result && "object" === _typeof(result) && result.promise && result.then && result.fail) return function handleJQueryDeferred(_result) {
						_result.fail(function(e) {
							_this3.catchApply(e, instance);
							_this3.afterRun(instance.command, instance.args, e);
						});
						return _result.done(function(__result) {
							return _this3.applyRunAfterAsyncResult(instance, __result);
						});
					}(result);
					else if (result instanceof Promise) return this.applyRunAfterAsync(instance, result);
					this.applyRunAfterSync(instance, result);
					return result;
				}
			},
			{
				key: "applyRunAfterSync",
				value: function applyRunAfterSync(instance, result) {
					instance.onAfterApply(instance.args, result);
					instance.onAfterRun(instance.args, result);
					this.afterRun(instance.command, instance.args, result);
				}
			},
			{
				key: "applyRunAfterAsync",
				value: function applyRunAfterAsync(instance, result) {
					var _this4 = this;
					return _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
						return import_regenerator.default.wrap(function(_context) {
							while (1) switch (_context.prev = _context.next) {
								case 0:
									_context.next = 1;
									return result.catch(function(e) {
										_this4.catchApply(e, instance);
										_this4.afterRun(instance.command, instance.args, e);
									});
								case 1:
									_context.next = 2;
									return result.then(function(_result) {
										return _this4.applyRunAfterAsyncResult(instance, _result);
									});
								case 2: return _context.abrupt("return", result);
								case 3:
								case "end": return _context.stop();
							}
						}, _callee);
					}))();
				}
			},
			{
				key: "applyRunAfterAsyncResult",
				value: function() {
					var _applyRunAfterAsyncResult = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee2(instance, result) {
						var results;
						var promises;
						return import_regenerator.default.wrap(function(_context2) {
							while (1) switch (_context2.prev = _context2.next) {
								case 0:
									results = instance.onAfterApply(instance.args, result), promises = Array.isArray(results) ? results.flat().filter(function(filtered) {
										return filtered instanceof Promise;
									}) : [];
									if (!promises.length) {
										_context2.next = 1;
										break;
									}
									_context2.next = 1;
									return Promise.all(promises);
								case 1:
									instance.onAfterRun(instance.args, result);
									this.afterRun(instance.command, instance.args, result);
								case 2:
								case "end": return _context2.stop();
							}
						}, _callee2, this);
					}));
					function applyRunAfterAsyncResult(_x, _x2) {
						return _applyRunAfterAsyncResult.apply(this, arguments);
					}
					return applyRunAfterAsyncResult;
				}()
			},
			{
				key: "afterRun",
				value: function afterRun(command, args) {
					var results = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
					var removeTrace = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
					var component = this.getComponent(command);
					if (args.onAfter) args.onAfter.apply(component, [args, results]);
					this.trigger("run:after", component, command, args, results);
					window.dispatchEvent(new CustomEvent("elementor/commands/run/after", { detail: {
						command,
						args
					} }));
					if (removeTrace) this.removeCurrentTrace(component);
				}
			},
			{
				key: "catchApply",
				value: function catchApply(e, instance) {
					instance.onCatchApply(e);
					Console.error(e);
				}
			},
			{
				key: "runShortcut",
				value: function runShortcut(command, event) {
					return this.run(command, event);
				}
			},
			{
				key: "validateInstanceScope",
				value: function validateInstanceScope(instance, currentComponent, command) {
					if (!(instance instanceof CommandBase)) this.error("invalid instance, command: '".concat(command, "' "));
					if (currentComponent !== instance.component) {
						if ($e.devTools) $e.devTools.log.warn("Command: '".concat(command, "' registerArgs.component: '").concat(instance.component.getNamespace(), "' while current component is: '").concat(currentComponent.getNamespace(), "'"));
						return false;
					}
					return true;
				}
			},
			{
				key: "addCurrentTrace",
				value: function addCurrentTrace(container, command, args) {
					this.currentTrace.push(command);
					Commands.trace.push(command);
					this.attachCurrent(container, command, args);
				}
			},
			{
				key: "removeCurrentTrace",
				value: function removeCurrentTrace(currentComponent) {
					var container = currentComponent.getServiceName();
					this.currentTrace.pop();
					Commands.trace.pop();
					this.detachCurrent(container);
				}
			},
			{
				key: "attachCurrent",
				value: function attachCurrent(container, command, args) {
					this.current[container] = command;
					this.currentArgs[container] = args;
				}
			},
			{
				key: "detachCurrent",
				value: function detachCurrent(container) {
					delete this.current[container];
					delete this.currentArgs[container];
				}
			},
			{
				key: "error",
				value: function error(message) {
					throw Error("Commands: ".concat(message));
				}
			}
		]);
	}(CommandsBackwardsCompatibility);
	_defineProperty(Commands, "trace", []);

//#endregion
//#region modules/web-cli/assets/js/core/commands-internal.js
	function _callSuper$21(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$21() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$21, "_callSuper");
	function _isNativeReflectConstruct$21() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$21 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$21, "_isNativeReflectConstruct");
	var CommandsInternal = /*#__PURE__*/ function(_Commands) {
		function CommandsInternal() {
			_classCallCheck(this, CommandsInternal);
			return _callSuper$21(this, CommandsInternal, arguments);
		}
		_inherits(CommandsInternal, _Commands);
		return _createClass(CommandsInternal, [{
			key: "error",
			value: function error(message) {
				throw Error("Commands internal: " + message);
			}
		}]);
	}(Commands);

//#endregion
//#region modules/web-cli/assets/js/modules/commands/close.js
	function _callSuper$20(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$20() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$20, "_callSuper");
	function _isNativeReflectConstruct$20() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$20 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$20, "_isNativeReflectConstruct");
	var Close = /*#__PURE__*/ function(_CommandBase) {
		function Close() {
			_classCallCheck(this, Close);
			return _callSuper$20(this, Close, arguments);
		}
		_inherits(Close, _CommandBase);
		return _createClass(Close, [{
			key: "apply",
			value: function apply() {
				this.component.close();
			}
		}]);
	}(CommandBase);

//#endregion
//#region modules/web-cli/assets/js/modules/commands/open.js
	function _callSuper$19(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$19() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$19, "_callSuper");
	function _isNativeReflectConstruct$19() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$19 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$19, "_isNativeReflectConstruct");
	var Open = /*#__PURE__*/ function(_CommandBase) {
		function Open() {
			_classCallCheck(this, Open);
			return _callSuper$19(this, Open, arguments);
		}
		_inherits(Open, _CommandBase);
		return _createClass(Open, [{
			key: "apply",
			value: function apply() {
				$e.route(this.component.getNamespace());
			}
		}]);
	}(CommandBase);

//#endregion
//#region modules/web-cli/assets/js/modules/commands/toggle.js
	function _callSuper$18(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$18() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$18, "_callSuper");
	function _isNativeReflectConstruct$18() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$18 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$18, "_isNativeReflectConstruct");
	var Toggle = /*#__PURE__*/ function(_CommandBase) {
		function Toggle() {
			_classCallCheck(this, Toggle);
			return _callSuper$18(this, Toggle, arguments);
		}
		_inherits(Toggle, _CommandBase);
		return _createClass(Toggle, [{
			key: "apply",
			value: function apply() {
				if (this.component.isOpen) this.component.close();
				else $e.route(this.component.getNamespace());
			}
		}]);
	}(CommandBase);

//#endregion
//#region modules/web-cli/assets/js/modules/commands/index.js
	var commands_exports = /* @__PURE__ */ __exportAll({
		Close: () => Close,
		Open: () => Open,
		Toggle: () => Toggle
	});

//#endregion
//#region modules/web-cli/assets/js/modules/component-modal-base.js
	function _callSuper$17(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$17() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$17, "_callSuper");
	function _isNativeReflectConstruct$17() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$17 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$17, "_isNativeReflectConstruct");
	function _superPropGet$4(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$4, "_superPropGet");
	var ComponentModalBase = /*#__PURE__*/ function(_ComponentBase) {
		function ComponentModalBase() {
			_classCallCheck(this, ComponentModalBase);
			return _callSuper$17(this, ComponentModalBase, arguments);
		}
		_inherits(ComponentModalBase, _ComponentBase);
		return _createClass(ComponentModalBase, [
			{
				key: "registerAPI",
				value: function registerAPI() {
					var _this = this;
					_superPropGet$4(ComponentModalBase, "registerAPI", this, 3)([]);
					$e.shortcuts.register("esc", {
						scopes: [this.getNamespace()],
						callback: function callback() {
							return _this.close();
						}
					});
				}
			},
			{
				key: "defaultCommands",
				value: function defaultCommands() {
					return this.importCommands(commands_exports);
				}
			},
			{
				key: "defaultRoutes",
				value: function defaultRoutes() {
					return { "": function _() {} };
				}
			},
			{
				key: "open",
				value: function open() {
					var _this2 = this;
					if (!this.layout) {
						var layout = this.getModalLayout();
						this.layout = new layout({ component: this });
						this.layout.getModal().on("hide", function() {
							return _this2.close();
						});
					}
					this.layout.showModal();
					return true;
				}
			},
			{
				key: "close",
				value: function close() {
					if (!_superPropGet$4(ComponentModalBase, "close", this, 3)([])) return false;
					elementor.hooks.applyFilters("component/modal/close", this.layout.getModal().hide.bind(this.layout.getModal()), this)();
					return true;
				}
			},
			{
				key: "getModalLayout",
				value: function getModalLayout() {
					force_method_implementation_default();
				}
			}
		]);
	}(ComponentBase);

//#endregion
//#region modules/web-cli/assets/js/core/components.js
	function _callSuper$16(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$16() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$16, "_callSuper");
	function _isNativeReflectConstruct$16() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$16 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$16, "_isNativeReflectConstruct");
	/**
	* @typedef {{}} Component
	*/
	var _default = /*#__PURE__*/ function(_Module) {
		function _default() {
			var _this;
			_classCallCheck(this, _default);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _callSuper$16(this, _default, [].concat(args));
			_this.components = {};
			_this.activeComponents = {};
			return _this;
		}
		_inherits(_default, _Module);
		return _createClass(_default, [
			{
				key: "getAll",
				value: function getAll() {
					return Object.keys(this.components).sort();
				}
			},
			{
				key: "register",
				value: function register(component) {
					if (this.components[component.getNamespace()]) return;
					component.registerAPI();
					this.components[component.getNamespace()] = component;
					return component;
				}
			},
			{
				key: "get",
				value: function get(id) {
					return this.components[id];
				}
			},
			{
				key: "getActive",
				value: function getActive() {
					return this.activeComponents;
				}
			},
			{
				key: "activate",
				value: function activate(namespace) {
					this.inactivate(namespace);
					this.activeComponents[namespace] = true;
				}
			},
			{
				key: "inactivate",
				value: function inactivate(namespace) {
					delete this.activeComponents[namespace];
				}
			},
			{
				key: "isActive",
				value: function isActive(namespace) {
					return !!this.activeComponents[namespace];
				}
			}
		]);
	}(import_module.default);

//#endregion
//#region modules/web-cli/assets/js/core/data/storages/base-storage.js
/**
	* TODO: Merge all storage's to one.
	* Using this technique give's the ability to use JSDOC from 'window.storage'.
	*
	* @implements {Storage}
	*/
	var BaseStorage = /*#__PURE__*/ function() {
		/**
		* Create storage wrapper.
		*
		* @param {Storage} provider
		*/
		function BaseStorage(provider) {
			_classCallCheck(this, BaseStorage);
			if (BaseStorage === (this instanceof BaseStorage ? this.constructor : void 0)) throw new TypeError("Cannot construct BaseStorage instances directly");
			this.provider = provider;
		}
		return _createClass(BaseStorage, [
			{
				key: "clear",
				value: function clear() {
					return this.provider.clear();
				}
			},
			{
				key: "getItem",
				value: function getItem(key) {
					var result = this.provider.getItem(key);
					if (null !== result) return JSON.parse(result);
					return result;
				}
			},
			{
				key: "key",
				value: function key(index) {
					return this.provider.key(index);
				}
			},
			{
				key: "removeItem",
				value: function removeItem(key) {
					return this.provider.removeItem(key);
				}
			},
			{
				key: "setItem",
				value: function setItem(key, value) {
					return this.provider.setItem(key, JSON.stringify(value));
				}
			},
			{
				key: "getAll",
				value: function getAll() {
					var _this = this;
					var keys = Object.keys(this.provider);
					var result = {};
					keys.forEach(function(key) {
						result[key] = _this.getItem(key);
					});
					return result;
				}
			}
		]);
	}();

//#endregion
//#region modules/web-cli/assets/js/core/data/storages/base-prefix-storage.js
	function _callSuper$15(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$15() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$15, "_callSuper");
	function _isNativeReflectConstruct$15() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$15 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$15, "_isNativeReflectConstruct");
	function _superPropGet$3(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$3, "_superPropGet");
	var BasePrefixStorage = /*#__PURE__*/ function(_BaseStorage) {
		function BasePrefixStorage() {
			_classCallCheck(this, BasePrefixStorage);
			return _callSuper$15(this, BasePrefixStorage, arguments);
		}
		_inherits(BasePrefixStorage, _BaseStorage);
		return _createClass(BasePrefixStorage, [
			{
				key: "clear",
				value: function clear() {
					var _this = this;
					Object.keys(this.getAll()).forEach(function(key) {
						return _this.removeItem(key);
					});
				}
			},
			{
				key: "getItem",
				value: function getItem(key) {
					return _superPropGet$3(BasePrefixStorage, "getItem", this, 3)([BasePrefixStorage.DEFAULT_KEY_PREFIX + key]);
				}
			},
			{
				key: "removeItem",
				value: function removeItem(key) {
					return _superPropGet$3(BasePrefixStorage, "removeItem", this, 3)([BasePrefixStorage.DEFAULT_KEY_PREFIX + key]);
				}
			},
			{
				key: "setItem",
				value: function setItem(key, value) {
					return _superPropGet$3(BasePrefixStorage, "setItem", this, 3)([BasePrefixStorage.DEFAULT_KEY_PREFIX + key, value]);
				}
			},
			{
				key: "getAll",
				value: function getAll() {
					var _this2 = this;
					var DEFAULT_KEY_PREFIX = BasePrefixStorage.DEFAULT_KEY_PREFIX;
					var keys = Object.keys(this.provider);
					var result = {};
					keys.forEach(function(key) {
						if (key.startsWith(DEFAULT_KEY_PREFIX)) {
							key = key.replace(DEFAULT_KEY_PREFIX, "");
							result[key] = _this2.getItem(key);
						}
					});
					return result;
				}
			}
		]);
	}(BaseStorage);
	_defineProperty(BasePrefixStorage, "DEFAULT_KEY_PREFIX", "e_");

//#endregion
//#region modules/web-cli/assets/js/core/data/storages/local-storage.js
	function _callSuper$14(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$14() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$14, "_callSuper");
	function _isNativeReflectConstruct$14() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$14 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$14, "_isNativeReflectConstruct");
	var LocalStorage = /*#__PURE__*/ function(_BasePrefixStorage) {
		function LocalStorage() {
			_classCallCheck(this, LocalStorage);
			return _callSuper$14(this, LocalStorage, [localStorage]);
		}
		_inherits(LocalStorage, _BasePrefixStorage);
		return _createClass(LocalStorage, [{
			key: "debug",
			value: function debug() {
				var entries = this.getAll();
				var ordered = {};
				Object.keys(entries).sort().forEach(function(key) {
					ordered[key] = entries[key];
				});
				return ordered;
			}
		}]);
	}(BasePrefixStorage);

//#endregion
//#region modules/web-cli/assets/js/core/data/cache.js
	init_typeof();
	/**
	* @typedef {{}} RequestData
	*/
	/**
	* @typedef {import('../data')} Data
	*/
	/**
	* TODO: Search common logic, create functions to reduce code size.
	*/
	var Cache = /*#__PURE__*/ function() {
		/**
		* Function constructor().
		*
		* Create cache.
		*
		* @param {Data} manager
		*/
		function Cache(manager) {
			_classCallCheck(this, Cache);
			this.manager = manager;
			this.storage = new LocalStorage();
		}
		/**
		* Function getAsync().
		*
		* Receive from cache. the difference between getAsync() and get() is that receive return it as promise...
		* to fake fetch mechanism.
		*
		* @param {RequestData} requestData
		*
		* @return {(Promise|boolean)} request data
		*/
		return _createClass(Cache, [
			{
				key: "getAsync",
				value: function getAsync(requestData) {
					var data = this.get(requestData);
					if (null !== data) {
						requestData.cache = "hit";
						return new Promise(function(resolve) {
							resolve(data);
						});
					}
					return false;
				}
			},
			{
				key: "set",
				value: function set(requestData, data) {
					$e.data.validateRequestData(requestData);
					var componentName = requestData.component.getNamespace();
					var pureEndpoint = requestData.endpoint.replace(componentName + "/", "");
					var pureEndpointParts = pureEndpoint.split("/");
					var newData = {};
					if (pureEndpointParts.length && pureEndpoint !== componentName) {
						var result = pureEndpointParts.reduce(function(accumulator, pureEndpointPart) {
							accumulator[pureEndpointPart] = {};
							return accumulator[pureEndpointPart];
						}, newData);
						Object.assign(result, data);
					} else newData = data;
					var oldData = this.storage.getItem(componentName);
					if (oldData !== null) newData = jQuery.extend(true, oldData, newData);
					this.storage.setItem(componentName, newData);
				}
			},
			{
				key: "get",
				value: function get(requestData) {
					$e.data.validateRequestData(requestData);
					var componentName = requestData.component.getNamespace();
					var componentData = this.storage.getItem(componentName);
					if (componentData !== null) {
						if (componentName === requestData.endpoint) return componentData;
						return requestData.endpoint.replace(requestData.component.getNamespace() + "/", "").split("/").reduce(function(accumulator, endpointPart) {
							if (accumulator && accumulator[endpointPart]) return accumulator[endpointPart];
						}, componentData) || null;
					}
					return null;
				}
			},
			{
				key: "update",
				value: function update(requestData) {
					$e.data.validateRequestData(requestData, true);
					var endpoint = requestData.endpoint;
					var response = {};
					Object.entries(this.storage.getAll()).forEach(function(_ref) {
						var _ref2 = _slicedToArray(_ref, 2);
						var endpointKey = _ref2[0];
						var endpointValue = _ref2[1];
						if (endpointValue && endpoint.includes(endpointKey)) {
							var oldData = endpointValue;
							var pureEndpointParts = requestData.endpoint.replace(requestData.component.getNamespace() + "/", "").split("/");
							if (1 === pureEndpointParts.length && endpointKey === requestData.endpoint && endpointKey === requestData.component.getNamespace()) response = jQuery.extend(true, oldData, requestData.args.data);
							else {
								var oldSpecificData = pureEndpointParts.reduce(function(accumulator, pureEndpointPart) {
									return accumulator[pureEndpointPart];
								}, oldData);
								response = jQuery.extend(true, oldSpecificData, requestData.args.data);
							}
						}
					});
					if (0 === Object.values(response).length) return false;
					this.set(requestData, response);
					return true;
				}
			},
			{
				key: "delete",
				value: function _delete(requestData) {
					$e.data.validateRequestData(requestData);
					var result = false;
					var componentName = requestData.component.getNamespace();
					if (componentName !== requestData.endpoint) {
						var oldData = this.storage.getItem(componentName);
						var newData = {};
						if (null === oldData) return false;
						var pureEndpointParts = requestData.endpoint.replace(componentName + "/", "").split("/");
						var lastEndpointPart = pureEndpointParts[pureEndpointParts.length - 1];
						pureEndpointParts.reduce(function(accumulator, pureEndpointPart) {
							if (pureEndpointPart === lastEndpointPart) accumulator[pureEndpointPart] = null;
							else accumulator[pureEndpointPart] = {};
							return accumulator[pureEndpointPart];
						}, newData);
						if (Object.keys(oldData).length) {
							var _deleteKeys = function deleteKeys(target, nullsObject) {
								if (nullsObject) Object.keys(nullsObject).forEach(function(key) {
									if (nullsObject[key] && "object" === _typeof(nullsObject[key])) _deleteKeys(target[key], nullsObject[key]);
									else if (null === nullsObject[key]) {
										delete target[key];
										result = true;
									}
								});
								else Object.keys(target).forEach(function(key) {
									return delete target[key];
								});
								return target;
							};
							this.storage.setItem(componentName, _deleteKeys(oldData, newData));
						}
					} else for (var key in this.storage.getAll()) if (key === requestData.endpoint) {
						this.storage.removeItem(requestData.endpoint);
						result = true;
						break;
					}
					return result;
				}
			}
		]);
	}();

//#endregion
//#region modules/web-cli/assets/js/core/data.js
	function _callSuper$13(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$13() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$13, "_callSuper");
	function _isNativeReflectConstruct$13() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$13 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$13, "_isNativeReflectConstruct");
	function _superPropGet$2(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$2, "_superPropGet");
	/**
	* @typedef {('create'|'delete'|'get'|'update'|'options')} DataTypes
	*/
	/**
	* @typedef {import('../modules/component-base')} ComponentBase
	*/
	/**
	* @typedef {{}} RequestInfo
	*/
	/**
	* @typedef {{}} RequestData
	* @property {ComponentBase}  component         component
	* @property {string}         command           command
	* @property {{}}             args              arguments
	* @property {DataTypes}      type              type
	* @property {number}         timestamp         timestamp
	* @property {string}         endpoint          endpoint
	*
	* @property {string}         [baseEndpointURL] baseEndpointURL
	* @property {string}         [namespace]       namespace
	* @property {string}         [version]         version
	* @property {('hit'|'miss')} [cache]           cache
	*/
	/**
	* @typedef {Object} ExtractedCommand
	* @property {string} command command
	* @property {Object} args    arguments
	*/
	var READABLE = ["GET"];
	var CREATABLE = ["POST"];
	var EDITABLE = [
		"POST",
		"PUT",
		"PATCH"
	];
	var DELETABLE = ["DELETE"];
	var Data$1 = /*#__PURE__*/ function(_Commands) {
		function Data() {
			var _this;
			var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			_classCallCheck(this, Data);
			_this = _callSuper$13(this, Data, [args]);
			_this.args = Object.assign(args, {
				namespace: "elementor",
				version: "1",
				baseEndpointURL: elementorWebCliConfig.urls.rest
			});
			_this.cache = new Cache(_this);
			_this.validatedRequests = {};
			_this.commandFormats = {};
			return _this;
		}
		/**
		* Function getHTTPMethod().
		*
		* Returns HTTP Method by type.
		*
		* @param {DataTypes} type
		*
		* @return {string|boolean} HTTP Method
		*/
		_inherits(Data, _Commands);
		return _createClass(Data, [
			{
				key: "getHTTPMethod",
				value: function getHTTPMethod(type) {
					switch (type) {
						case "create": return "POST";
						case "delete": return "DELETE";
						case "get": return "GET";
						case "update": return "PUT";
						case "options": return "OPTIONS";
					}
					return false;
				}
			},
			{
				key: "getAllowedMethods",
				value: function getAllowedMethods(type) {
					switch (type) {
						case "create": return CREATABLE;
						case "delete": return DELETABLE;
						case "get": return READABLE;
						case "update": return EDITABLE;
						case "options": return ["OPTIONS"];
					}
					return false;
				}
			},
			{
				key: "getEndpointURL",
				value: function getEndpointURL(requestData) {
					var endpoint = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : requestData.endpoint;
					var _requestData$baseEndp = requestData.baseEndpointURL;
					var baseEndpointURL = _requestData$baseEndp === void 0 ? this.args.baseEndpointURL : _requestData$baseEndp;
					var _requestData$namespac = requestData.namespace;
					var namespace = _requestData$namespac === void 0 ? this.args.namespace : _requestData$namespac;
					var _requestData$version = requestData.version;
					var version = _requestData$version === void 0 ? this.args.version : _requestData$version;
					return "".concat(baseEndpointURL).concat(namespace, "/v").concat(version, "/") + endpoint;
				}
			},
			{
				key: "commandToEndpoint",
				value: function commandToEndpoint(command, args) {
					var format = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
					var endpoint = command;
					if ((args !== null && args !== void 0 && args.query ? Object.values(args.query).length : 0) && format && format.includes("/{")) format.split("/").filter(function(str) {
						return "{" === str.charAt(0);
					}).forEach(function(param) {
						param = param.replace("{", "");
						param = param.replace("}", "");
						var formatted = Object.entries(args.query).find(function(_ref) {
							return _slicedToArray(_ref, 1)[0] === param;
						});
						if (!formatted) return;
						var key = formatted[0];
						var value = formatted[1].toString();
						format = format.replace(new RegExp("{" + param + "}", "g"), value);
						delete args.query[key];
					});
					if (format) endpoint = format;
					if (format && endpoint.includes("/{")) endpoint = endpoint.substring(0, endpoint.indexOf("/{"));
					if (args.query && Object.values(args.query).length) {
						var queryEntries = Object.entries(args.query).sort(function(_ref3, _ref4) {
							return _slicedToArray(_ref3, 1)[0] - _slicedToArray(_ref4, 1)[0];
						});
						if (queryEntries.length) {
							endpoint += "?";
							queryEntries.forEach(function(_ref7) {
								var _ref8 = _slicedToArray(_ref7, 2);
								var name = _ref8[0];
								var value = _ref8[1];
								value = "".concat(value).replace(/\//g, "%2F");
								endpoint += name + "=" + value + "&";
							});
						}
						endpoint = endpoint.replace(/&$/, "");
					}
					return endpoint;
				}
			},
			{
				key: "commandExtractArgs",
				value: function commandExtractArgs(command) {
					var _command;
					var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
					if ((_command = command) !== null && _command !== void 0 && _command.includes("?")) {
						if (!args.query) args.query = {};
						var commandParts = command.split("?");
						var pureCommand = commandParts[0];
						var queryString = commandParts[1];
						var query = new URLSearchParams(queryString);
						Object.assign(args.query, Object.fromEntries(query));
						command = pureCommand;
					}
					return {
						command,
						args
					};
				}
			},
			{
				key: "validateRequestData",
				value: function validateRequestData(requestData) {
					var requireArgsData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
					if (requestData.timestamp && this.validatedRequests[requestData.timestamp]) return;
					var argsObject = new ArgsObject(requestData);
					argsObject.requireArgument("component");
					argsObject.requireArgumentType("command", "string");
					argsObject.requireArgumentType("endpoint", "string");
					if (requireArgsData) argsObject.requireArgumentType("data", "object", requestData.args);
					if (!requestData.timestamp) requestData.timestamp = (/* @__PURE__ */ new Date()).getTime();
					this.validatedRequests[requestData.timestamp] = true;
				}
			},
			{
				key: "prepareHeaders",
				value: function prepareHeaders(requestData) {
					var _requestData$args;
					var type = requestData.type;
					var nonce = elementorWebCliConfig.nonce;
					var params = {
						signal: (_requestData$args = requestData.args) === null || _requestData$args === void 0 || (_requestData$args = _requestData$args.options) === null || _requestData$args === void 0 ? void 0 : _requestData$args.signal,
						credentials: "include"
					};
					var headers = { "X-WP-Nonce": nonce };
					/**
					* Translate:
					* 'create, delete, get, update' to HTTP Methods:
					* 'GET, POST, PUT, PATCH, DELETE'
					*/
					var allowedMethods = this.getAllowedMethods(type);
					var method = this.getHTTPMethod(type);
					if ("GET" === method) Object.assign(params, { headers });
					else if (allowedMethods) {
						var _requestData$args2;
						var _requestData$args3;
						if (["POST", "PUT"].includes(method) && !((_requestData$args2 = requestData.args) !== null && _requestData$args2 !== void 0 && _requestData$args2.data)) throw Error("Invalid requestData.args.data");
						Object.assign(headers, { "Content-Type": "application/json" });
						if ((_requestData$args3 = requestData.args) !== null && _requestData$args3 !== void 0 && _requestData$args3.headers) Object.assign(headers, requestData.args.headers);
						Object.assign(params, {
							method,
							headers,
							body: "application/json" === headers["Content-Type"] ? JSON.stringify(requestData.args.data) : requestData.args.data
						});
					} else throw Error("Invalid type: '".concat(type, "'"));
					return params;
				}
			},
			{
				key: "prepareEndpoint",
				value: function prepareEndpoint(requestData) {
					var splitEndpoint = requestData.endpoint.split("?");
					var endpoint = splitEndpoint.shift();
					var endpointAddress = this.getEndpointURL(requestData, endpoint);
					if (splitEndpoint.length) {
						var separator = endpointAddress.includes("?") ? "&" : "?";
						endpointAddress += separator + splitEndpoint.pop();
					}
					return endpointAddress;
				}
			},
			{
				key: "fetch",
				value: function fetch(requestData) {
					var _requestData$args$opt;
					var _this2 = this;
					var fetchAPI = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window.fetch;
					requestData.cache = "miss";
					var refresh = (_requestData$args$opt = requestData.args.options) === null || _requestData$args$opt === void 0 ? void 0 : _requestData$args$opt.refresh;
					var getCache = "get" === requestData.type && !refresh;
					var saveCache = ["create", "get"].includes(requestData.type) && !refresh;
					if (getCache) {
						var cachePromise = this.cache.getAsync(requestData);
						if (cachePromise) return cachePromise;
					}
					var params = this.prepareHeaders(requestData);
					return new Promise(/*#__PURE__*/ function() {
						var _ref9 = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee2(resolve, reject) {
							var endpoint;
							var request;
							var response;
							var _t;
							return import_regenerator.default.wrap(function(_context2) {
								while (1) switch (_context2.prev = _context2.next) {
									case 0:
										_context2.prev = 0;
										endpoint = _this2.prepareEndpoint(requestData);
										request = fetchAPI(endpoint, params);
										_context2.next = 1;
										return request.then(/*#__PURE__*/ function() {
											var _ref0 = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee(_response) {
												return import_regenerator.default.wrap(function(_context) {
													while (1) switch (_context.prev = _context.next) {
														case 0:
															if (_response.ok) {
																_context.next = 3;
																break;
															}
															if (!_response.headers.get("content-type").includes("application/json")) {
																_context.next = 2;
																break;
															}
															_context.next = 1;
															return _response.json();
														case 1: _response = _context.sent;
														case 2: throw _response;
														case 3: return _context.abrupt("return", _response.json());
														case 4:
														case "end": return _context.stop();
													}
												}, _callee);
											}));
											return function(_x3) {
												return _ref0.apply(this, arguments);
											};
										}());
									case 1:
										response = _context2.sent;
										if (saveCache) _this2.cache.set(requestData, response);
										resolve(response);
										_context2.next = 3;
										break;
									case 2:
										_context2.prev = 2;
										_t = _context2["catch"](0);
										reject(_t);
									case 3:
									case "end": return _context2.stop();
								}
							}, _callee2, null, [[0, 2]]);
						}));
						return function(_x, _x2) {
							return _ref9.apply(this, arguments);
						};
					}());
				}
			},
			{
				key: "getCache",
				value: function getCache(component, command) {
					var args = { query: arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {} };
					return this.cache.get({
						endpoint: this.commandToEndpoint(command, args, this.commandFormats[command]),
						component,
						command,
						args
					});
				}
			},
			{
				key: "setCache",
				value: function setCache(component, command, query, data) {
					var args = { query };
					this.cache.set({
						endpoint: this.commandToEndpoint(command, args, this.commandFormats[command]),
						component,
						command,
						args
					}, data);
				}
			},
			{
				key: "updateCache",
				value: function updateCache(component, command, query, data) {
					var args = {
						query,
						data
					};
					this.cache.update({
						endpoint: this.commandToEndpoint(command, args, this.commandFormats[command]),
						component,
						command,
						args
					});
				}
			},
			{
				key: "deleteCache",
				value: function deleteCache(component, command) {
					var args = { query: arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {} };
					this.cache.delete({
						endpoint: this.commandToEndpoint(command, args, this.commandFormats[command]),
						component,
						command,
						args
					});
				}
			},
			{
				key: "registerFormat",
				value: function registerFormat(command, format) {
					this.commandFormats[command] = format;
				}
			},
			{
				key: "create",
				value: function create(command, data) {
					var query = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
					var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
					return this.run("create", command, {
						query,
						options,
						data
					});
				}
			},
			{
				key: "delete",
				value: function _delete(command) {
					var query = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
					var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
					return this.run("delete", command, {
						query,
						options
					});
				}
			},
			{
				key: "get",
				value: function get(command) {
					var query = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
					var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
					return this.run("get", command, {
						query,
						options
					});
				}
			},
			{
				key: "update",
				value: function update(command, data) {
					var query = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
					var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
					return this.run("update", command, {
						query,
						options,
						data
					});
				}
			},
			{
				key: "options",
				value: function options(command, query) {
					var _options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
					return this.run("options", command, {
						query,
						options: _options
					});
				}
			},
			{
				key: "register",
				value: function register(component, command, callback) {
					_superPropGet$2(Data, "register", this, 3)([
						component,
						command,
						callback
					]);
					var fullCommandName = component.getNamespace() + "/" + command;
					var commandInstance = $e.data.getCommandClass(fullCommandName);
					var format = commandInstance !== null && commandInstance !== void 0 && commandInstance.getEndpointFormat ? commandInstance.getEndpointFormat() : false;
					if (format) $e.data.registerFormat(fullCommandName, format);
					return this;
				}
			},
			{
				key: "run",
				value: function run(type, command, args) {
					args.options.type = type;
					var _this$commandExtractA = this.commandExtractArgs(command, args);
					command = _this$commandExtractA.command;
					args = _this$commandExtractA.args;
					return _superPropGet$2(Data, "run", this, 3)([command, args]);
				}
			},
			{
				key: "error",
				value: function error(message) {
					throw Error("Data commands: " + message);
				}
			}
		]);
	}(Commands);

//#endregion
//#region modules/web-cli/assets/js/extras/hash-commands.js
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
	var HashCommands = /*#__PURE__*/ function() {
		function HashCommands() {
			_classCallCheck(this, HashCommands);
			/**
			* Cannot be static since it uses callback(s) that are available only after '$e' is initialized.
			*/
			_defineProperty(this, "dispatchersList", {
				"e:run": {
					runner: function runner() {
						return $e.run;
					},
					isSafe: function isSafe(command) {
						var _$e$commands$getComma;
						return (_$e$commands$getComma = $e.commands.getCommandClass(command)) === null || _$e$commands$getComma === void 0 ? void 0 : _$e$commands$getComma.getInfo().isSafe;
					},
					isSafeWithArgs: function isSafeWithArgs(command) {
						var _$e$commands$getComma2;
						return (_$e$commands$getComma2 = $e.commands.getCommandClass(command)) === null || _$e$commands$getComma2 === void 0 ? void 0 : _$e$commands$getComma2.getInfo().isSafeWithArgs;
					}
				},
				"e:route": {
					runner: function runner() {
						return $e.route;
					},
					isSafe: function isSafe() {
						return true;
					},
					isSafeWithArgs: function isSafeWithArgs() {
						return false;
					}
				}
			});
			/**
			* @typedef HashCommand
			* @property {string} method  method
			* @property {string} command command
			* @property {Object} args    arguments
			*/
			/**
			* List of current loaded hash commands.
			*
			* @type {Array.<HashCommand>}
			*/
			_defineProperty(this, "commands", []);
			this.commands = this.get();
		}
		/**
		* Function get().
		*
		* Get API requests that comes from hash ( eg #e:run ).
		*
		* @param {string} hash
		*
		* @return {Array.<HashCommand>} API requests
		*/
		return _createClass(HashCommands, [
			{
				key: "get",
				value: function get() {
					var _this = this;
					var hash = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : location.hash;
					var result = [];
					if (hash) hash.substr(1).split("&").forEach(function(hashItem) {
						var _hashItem$split2 = _slicedToArray(hashItem.split("?"), 2);
						var rawCommand = _hashItem$split2[0];
						var rawArgs = _hashItem$split2[1];
						var hashParts = rawCommand.split(":");
						if (3 !== hashParts.length) return;
						var method = hashParts[0] + ":" + hashParts[1];
						if (_this.dispatchersList[method]) {
							var command = hashParts[2];
							var args = _this.parseCommandArgs(rawArgs);
							result.push({
								method,
								command,
								args
							});
						}
					});
					return result;
				}
			},
			{
				key: "run",
				value: function() {
					var _run = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
						var commands;
						var _iterator;
						var _step;
						var hashCommand;
						var dispatcher;
						var _iterator2;
						var _step2;
						var _hashCommand;
						var _dispatcher;
						var _args = arguments;
						var _t;
						var _t2;
						return import_regenerator.default.wrap(function(_context) {
							while (1) switch (_context.prev = _context.next) {
								case 0:
									commands = _args.length > 0 && _args[0] !== void 0 ? _args[0] : this.commands;
									_iterator = _createForOfIteratorHelper(commands);
									_context.prev = 1;
									_iterator.s();
								case 2:
									if ((_step = _iterator.n()).done) {
										_context.next = 5;
										break;
									}
									hashCommand = _step.value;
									dispatcher = this.dispatchersList[hashCommand.method];
									if (dispatcher) {
										_context.next = 3;
										break;
									}
									return _context.abrupt("return", Promise.reject(new Error("No dispatcher found for the command: `".concat(hashCommand.command, "`."))));
								case 3:
									if (dispatcher.isSafe(hashCommand.command)) {
										_context.next = 4;
										break;
									}
									return _context.abrupt("return", Promise.reject(new Error("Attempting to run unsafe or non exist command: `".concat(hashCommand.command, "`."))));
								case 4:
									_context.next = 2;
									break;
								case 5:
									_context.next = 7;
									break;
								case 6:
									_context.prev = 6;
									_t = _context["catch"](1);
									_iterator.e(_t);
								case 7:
									_context.prev = 7;
									_iterator.f();
									return _context.finish(7);
								case 8:
									_iterator2 = _createForOfIteratorHelper(commands);
									_context.prev = 9;
									_iterator2.s();
								case 10:
									if ((_step2 = _iterator2.n()).done) {
										_context.next = 12;
										break;
									}
									_hashCommand = _step2.value;
									_dispatcher = this.dispatchersList[_hashCommand.method];
									_context.next = 11;
									return _dispatcher.runner()(_hashCommand.command, _dispatcher.isSafeWithArgs(_hashCommand.command) ? _hashCommand.args : void 0);
								case 11:
									_context.next = 10;
									break;
								case 12:
									_context.next = 14;
									break;
								case 13:
									_context.prev = 13;
									_t2 = _context["catch"](9);
									_iterator2.e(_t2);
								case 14:
									_context.prev = 14;
									_iterator2.f();
									return _context.finish(14);
								case 15:
								case "end": return _context.stop();
							}
						}, _callee, this, [[
							1,
							6,
							7,
							8
						], [
							9,
							13,
							14,
							15
						]]);
					}));
					function run() {
						return _run.apply(this, arguments);
					}
					return run;
				}()
			},
			{
				key: "runOnce",
				value: function runOnce() {
					var _this2 = this;
					this.run(this.commands).then(function() {
						_this2.commands = [];
					});
				}
			},
			{
				key: "parseCommandArgs",
				value: function parseCommandArgs(rawArgs) {
					try {
						return JSON.parse(decodeURI(rawArgs || "{}"));
					} catch (e) {
						Console.warn("Hash commands JSON args cannot be parsed. \n\n", e);
						return {};
					}
				}
			}
		]);
	}();

//#endregion
//#region modules/web-cli/assets/js/modules/hook-break.js
	function _callSuper$12(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$12() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$12, "_callSuper");
	function _isNativeReflectConstruct$12() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$12 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$12, "_isNativeReflectConstruct");
	var HookBreak = /*#__PURE__*/ function(_Error) {
		function HookBreak() {
			_classCallCheck(this, HookBreak);
			return _callSuper$12(this, HookBreak, ["HookBreak"]);
		}
		_inherits(HookBreak, _Error);
		return _createClass(HookBreak);
	}(/*#__PURE__*/ _wrapNativeSuper(Error));

//#endregion
//#region modules/web-cli/assets/js/core/hooks/base.js
	function _callSuper$11(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$11() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$11, "_callSuper");
	function _isNativeReflectConstruct$11() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$11 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$11, "_isNativeReflectConstruct");
	/**
	* @typedef {import('../../modules/hook-base')} HookBase
	*/
	var HooksBase = /*#__PURE__*/ function(_Module) {
		/**
		* Function constructor().
		*
		* Create hooks base.
		*
		* @param {{}} args
		*/
		function HooksBase() {
			var _this;
			_classCallCheck(this, HooksBase);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _callSuper$11(this, HooksBase, [].concat(args));
			/**
			* Current command.
			*
			* @type {string}
			*/
			_this.current = "";
			/**
			* Array of ids which in use.
			*
			* @type {Array}
			*/
			_this.usedIds = [];
			/**
			* Object of callbacks that was bound by container type.
			*
			* @type {{}}
			*/
			_this.callbacks = {
				after: {},
				catch: {}
			};
			/**
			* Object of depth.
			*
			* @type {{}}
			*/
			_this.depth = {
				after: {},
				catch: {}
			};
			_this.callbacksFlatList = {};
			return _this;
		}
		_inherits(HooksBase, _Module);
		return _createClass(HooksBase, [
			{
				key: "activate",
				value: function activate() {
					Object.values(this.getAll(true)).forEach(function(callback) {
						callback.activate();
					});
				}
			},
			{
				key: "deactivate",
				value: function deactivate() {
					Object.values(this.getAll(true)).forEach(function(callback) {
						callback.deactivate();
					});
				}
			},
			{
				key: "getType",
				value: function getType() {
					force_method_implementation_default();
				}
			},
			{
				key: "get",
				value: function get(id) {
					return this.callbacksFlatList[id];
				}
			},
			{
				key: "getAll",
				value: function getAll() {
					var _this2 = this;
					if (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false) return this.callbacksFlatList;
					var result = {};
					Object.keys(this.callbacks).forEach(function(event) {
						if (!result[event]) result[event] = [];
						Object.keys(_this2.callbacks[event]).forEach(function(command) {
							result[event].push({
								command,
								callbacks: _this2.callbacks[event][command]
							});
						});
					});
					return result;
				}
			},
			{
				key: "getCurrent",
				value: function getCurrent() {
					return this.current;
				}
			},
			{
				key: "getUsedIds",
				value: function getUsedIds() {
					return this.usedIds;
				}
			},
			{
				key: "getCallbacks",
				value: function getCallbacks(event, command, args) {
					var _args$containers = args.containers;
					var containers = _args$containers === void 0 ? [args.container] : _args$containers;
					var containerType = containers[0] ? containers[0].type : false;
					var callbacks = [];
					if (this.callbacks[event] && this.callbacks[event][command]) {
						if (containerType && this.callbacks[event][command][containerType]) callbacks = callbacks.concat(this.callbacks[event][command][containerType]);
						if (this.callbacks[event][command].all) callbacks = callbacks.concat(this.callbacks[event][command].all);
					}
					if (callbacks.length) return callbacks;
					return false;
				}
			},
			{
				key: "checkEvent",
				value: function checkEvent(event) {
					if (-1 === Object.keys(this.callbacks).indexOf(event)) throw Error("".concat(this.getType(), ": '").concat(event, "' is not available."));
				}
			},
			{
				key: "checkInstance",
				value: function checkInstance(instance) {
					if (instance.getType() !== this.getType()) throw new Error("invalid instance, please use: 'elementor-api/modules/hook-base.js'. ");
				}
			},
			{
				key: "checkId",
				value: function checkId(id) {
					if (-1 !== this.usedIds.indexOf(id)) throw Error("id: '".concat(id, "' is already in use."));
				}
			},
			{
				key: "shouldRun",
				value: function shouldRun(callbacks) {
					return !!callbacks && callbacks.length;
				}
			},
			{
				key: "register",
				value: function register(event, instance) {
					var command = instance.getCommand();
					var id = instance.getId();
					var containerType = instance.getContainerType();
					this.checkEvent(event);
					this.checkInstance(instance);
					this.checkId(id);
					return this.registerCallback(id, event, command, instance, containerType);
				}
			},
			{
				key: "registerCallback",
				value: function registerCallback(id, event, command, instance, containerType) {
					if (!this.callbacks[event][command]) this.callbacks[event][command] = [];
					this.usedIds.push(id);
					if (!this.callbacks[event][command]) this.callbacks[event][command] = {};
					var callback = {
						id,
						callback: instance.run.bind(instance),
						isActive: true,
						activate: function activate() {
							this.isActive = true;
						},
						deactivate: function deactivate() {
							this.isActive = false;
						}
					};
					if (containerType) {
						if (!this.callbacks[event][command][containerType]) this.callbacks[event][command][containerType] = [];
						this.callbacks[event][command][containerType].push(callback);
					} else {
						if (!this.callbacks[event][command].all) this.callbacks[event][command].all = [];
						this.callbacks[event][command].all.push(callback);
					}
					this.callbacksFlatList[callback.id] = callback;
					return callback;
				}
			},
			{
				key: "run",
				value: function run(event, command, args) {
					var result = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : void 0;
					var callbacks = this.getCallbacks(event, command, args);
					if (this.shouldRun(callbacks)) {
						this.current = command;
						this.onRun(command, args, event);
						return this.runCallbacks(event, command, callbacks, args, result);
					}
					return false;
				}
			},
			{
				key: "runCallbacks",
				value: function runCallbacks(event, command, callbacks, args, result) {
					var callbacksResult = [];
					for (var i in callbacks) {
						var callback = callbacks[i];
						if (!callback.isActive) continue;
						if (void 0 === this.depth[event][callback.id]) this.depth[event][callback.id] = 0;
						this.depth[event][callback.id]++;
						if (1 === this.depth[event][callback.id]) {
							this.onCallback(command, args, event, callback.id);
							try {
								var callbackResult = this.runCallback(event, callback, args, result);
								if (!callbackResult) throw Error("Callback failed, event: '".concat(event, "'"));
								callbacksResult.push(callbackResult);
							} catch (e) {
								if (e instanceof $e.modules.HookBreak) throw e;
								Console.error(e);
							}
						}
						this.depth[event][callback.id]--;
					}
					return callbacksResult;
				}
			},
			{
				key: "runCallback",
				value: function runCallback(event, callback, args, result) {
					force_method_implementation_default();
				}
			},
			{
				key: "onRun",
				value: function onRun(command, args, event) {
					force_method_implementation_default();
				}
			},
			{
				key: "onCallback",
				value: function onCallback(command, args, event, id) {
					force_method_implementation_default();
				}
			}
		]);
	}(import_module.default);

//#endregion
//#region modules/web-cli/assets/js/core/hooks/data.js
	function _callSuper$10(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$10() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$10, "_callSuper");
	function _isNativeReflectConstruct$10() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$10 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$10, "_isNativeReflectConstruct");
	function _superPropGet$1(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$1, "_superPropGet");
	var Data = /*#__PURE__*/ function(_HooksBase) {
		function Data() {
			var _this;
			_classCallCheck(this, Data);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _callSuper$10(this, Data, [].concat(args));
			_this.callbacks.dependency = {};
			_this.depth.dependency = {};
			return _this;
		}
		_inherits(Data, _HooksBase);
		return _createClass(Data, [
			{
				key: "getType",
				value: function getType() {
					return "data";
				}
			},
			{
				key: "runCallback",
				value: function runCallback(event, callback, args, result) {
					switch (event) {
						case "dependency":
							if (!callback.callback(args)) {
								this.depth[event][callback.id]--;
								throw new $e.modules.HookBreak();
							}
							return true;
						case "catch":
						case "after":
 /**
						* When handling HOOK which is data after (not breakable),
						* even the result of the callback is negative, it is required to return positive,
						* since result of runCallback determine if the callback succeeded.
						*/
						return callback.callback(args, result) || "after" === event;
					}
					return false;
				}
			},
			{
				key: "shouldRun",
				value: function shouldRun(callbacks) {
					return _superPropGet$1(Data, "shouldRun", this, 3)([callbacks]) && elementor.documents.getCurrent().history.getActive();
				}
			},
			{
				key: "onRun",
				value: function onRun(command, args, event) {
					if (!$e.devTools) return;
					$e.devTools.log.callbacks().run(this.getType(), command, args, event);
				}
			},
			{
				key: "onCallback",
				value: function onCallback(command, args, event, id) {
					if (!$e.devTools) return;
					$e.devTools.log.callbacks().callback(this.getType(), command, args, event, id);
				}
			}
		]);
	}(HooksBase);

//#endregion
//#region modules/web-cli/assets/js/core/hooks/ui.js
	function _callSuper$9(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$9() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$9, "_callSuper");
	function _isNativeReflectConstruct$9() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$9 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$9, "_isNativeReflectConstruct");
	var Ui = /*#__PURE__*/ function(_HooksBase) {
		function Ui() {
			var _this;
			_classCallCheck(this, Ui);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _callSuper$9(this, Ui, [].concat(args));
			_this.callbacks.before = {};
			_this.depth.before = {};
			return _this;
		}
		_inherits(Ui, _HooksBase);
		return _createClass(Ui, [
			{
				key: "getType",
				value: function getType() {
					return "ui";
				}
			},
			{
				key: "runCallback",
				value: function runCallback(event, callback, args, result) {
					switch (event) {
						case "before":
							callback.callback(args);
							break;
						case "catch":
						case "after":
							callback.callback(args, result);
							break;
						default: return false;
					}
					return true;
				}
			},
			{
				key: "onRun",
				value: function onRun(command, args, event) {
					if (!$e.devTools) return;
					$e.devTools.log.callbacks().run(this.getType(), command, args, event);
				}
			},
			{
				key: "onCallback",
				value: function onCallback(command, args, event, id) {
					if (!$e.devTools) return;
					$e.devTools.log.callbacks().callback(this.getType(), command, args, event, id);
				}
			}
		]);
	}(HooksBase);

//#endregion
//#region modules/web-cli/assets/js/core/hooks.js
/**
	* @typedef {import('../modules/hook-base')} HookBase
	*/
	var Hooks = /*#__PURE__*/ function() {
		function Hooks() {
			_classCallCheck(this, Hooks);
			_defineProperty(this, "data", new Data());
			_defineProperty(this, "ui", new Ui());
		}
		return _createClass(Hooks, [
			{
				key: "activate",
				value: function activate() {
					this.getTypes().forEach(function(hooksType) {
						hooksType.activate();
					});
				}
			},
			{
				key: "deactivate",
				value: function deactivate() {
					this.getTypes().forEach(function(hooksType) {
						hooksType.deactivate();
					});
				}
			},
			{
				key: "getAll",
				value: function getAll() {
					var flat = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
					var result = {};
					this.getTypes().forEach(function(hooksType) {
						result[hooksType.getType()] = hooksType.getAll(flat);
					});
					return result;
				}
			},
			{
				key: "getTypes",
				value: function getTypes() {
					return [this.data, this.ui];
				}
			},
			{
				key: "getType",
				value: function getType(type) {
					return this.getTypes().find(function(hooks) {
						return type === hooks.getType();
					});
				}
			},
			{
				key: "register",
				value: function register(type, event, instance) {
					return this.getType(type).register(event, instance);
				}
			},
			{
				key: "run",
				value: function run(type, event, command, args) {
					var result = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0;
					return this.getType(type).run(event, command, args, result);
				}
			},
			{
				key: "registerDataAfter",
				value: function registerDataAfter(instance) {
					return this.register("data", "after", instance);
				}
			},
			{
				key: "registerDataCatch",
				value: function registerDataCatch(instance) {
					return this.register("data", "catch", instance);
				}
			},
			{
				key: "registerDataDependency",
				value: function registerDataDependency(instance) {
					return this.register("data", "dependency", instance);
				}
			},
			{
				key: "registerUIAfter",
				value: function registerUIAfter(instance) {
					return this.register("ui", "after", instance);
				}
			},
			{
				key: "registerUICatch",
				value: function registerUICatch(instance) {
					return this.register("ui", "catch", instance);
				}
			},
			{
				key: "registerUIBefore",
				value: function registerUIBefore(instance) {
					return this.register("ui", "before", instance);
				}
			},
			{
				key: "runDataAfter",
				value: function runDataAfter(command, args, result) {
					return this.run("data", "after", command, args, result);
				}
			},
			{
				key: "runDataCatch",
				value: function runDataCatch(command, args, error) {
					return this.run("data", "catch", command, args, error);
				}
			},
			{
				key: "runDataDependency",
				value: function runDataDependency(command, args) {
					return this.run("data", "dependency", command, args);
				}
			},
			{
				key: "runUIAfter",
				value: function runUIAfter(command, args, result) {
					return this.run("ui", "after", command, args, result);
				}
			},
			{
				key: "runUICatch",
				value: function runUICatch(command, args, e) {
					return this.run("ui", "catch", command, args, e);
				}
			},
			{
				key: "runUIBefore",
				value: function runUIBefore(command, args) {
					return this.run("ui", "before", command, args);
				}
			}
		]);
	}();

//#endregion
//#region modules/web-cli/assets/js/core/routes.js
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
	var Routes = /*#__PURE__*/ function(_Commands) {
		function Routes() {
			var _this;
			_classCallCheck(this, Routes);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _callSuper$8(this, Routes, [].concat(args));
			_this.savedStates = {};
			_this.historyPerComponent = {};
			return _this;
		}
		_inherits(Routes, _Commands);
		return _createClass(Routes, [
			{
				key: "refreshContainer",
				value: function refreshContainer(container) {
					var currentRoute = this.getCurrent(container);
					var currentArgs = this.getCurrentArgs(container);
					this.clearCurrent(container);
					this.to(currentRoute, currentArgs);
				}
			},
			{
				key: "getHistory",
				value: function getHistory() {
					var namespaceRoot = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
					if (namespaceRoot) return this.historyPerComponent[namespaceRoot] || [];
					return this.historyPerComponent;
				}
			},
			{
				key: "clearHistory",
				value: function clearHistory(namespaceRoot) {
					delete this.historyPerComponent[namespaceRoot];
				}
			},
			{
				key: "clearCurrent",
				value: function clearCurrent(container) {
					var route = this.current[container];
					if (!route) return;
					this.detachCurrent(container);
					this.getComponent(route).onCloseRoute(route);
					this.dispatchOnClose(route);
				}
			},
			{
				key: "clear",
				value: function clear() {
					var _this2 = this;
					Object.keys(this.current).forEach(function(container) {
						return _this2.clearCurrent(container);
					});
				}
			},
			{
				key: "saveState",
				value: function saveState(container) {
					this.savedStates[container] = {
						route: this.current[container],
						args: this.currentArgs[container]
					};
					return this;
				}
			},
			{
				key: "restoreState",
				value: function restoreState(container) {
					if (!this.savedStates[container]) return false;
					this.to(this.savedStates[container].route, this.savedStates[container].args);
					return true;
				}
			},
			{
				key: "validateRun",
				value: function validateRun(route) {
					var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
					if (!_superPropGet(Routes, "validateRun", this, 3)([route, args])) return false;
					if (this.is(route, args) && !args.refresh) return false;
					var component = this.getComponent(route);
					if (!component.isOpen || args.reOpen) component.isOpen = component.open(args);
					return component.isOpen;
				}
			},
			{
				key: "beforeRun",
				value: function beforeRun(route, args) {
					var container = this.getComponent(route).getServiceName();
					var oldRoute = this.current[container];
					if (oldRoute) this.getComponent(oldRoute).onCloseRoute(oldRoute);
					Commands.trace.push(route);
					_superPropGet(Routes, "beforeRun", this, 3)([
						route,
						args,
						false
					]);
					this.attachCurrent(container, route, args);
					if (oldRoute) this.dispatchOnClose(oldRoute);
				}
			},
			{
				key: "to",
				value: function to(route, args) {
					var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { history: true };
					this.run(route, args);
					var namespaceRoot = this.getComponent(route).getServiceName();
					if (options.history) {
						if (!this.historyPerComponent[namespaceRoot]) this.historyPerComponent[namespaceRoot] = [];
						this.historyPerComponent[namespaceRoot].push({
							route,
							args
						});
					}
				}
			},
			{
				key: "back",
				value: function back(namespaceRoot) {
					var history = this.getHistory(namespaceRoot);
					history.pop();
					var last = history.pop();
					if (!last) return;
					this.to(last.route, last.args);
				}
			},
			{
				key: "runShortcut",
				value: function runShortcut(command) {
					this.to(command);
				}
			},
			{
				key: "afterRun",
				value: function afterRun(route, args) {
					var results = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
					this.getComponent(route).onRoute(route, args);
					this.dispatchOnOpen(route);
					_superPropGet(Routes, "afterRun", this, 3)([
						route,
						args,
						results,
						false
					]);
					Commands.trace.pop();
				}
			},
			{
				key: "is",
				value: function is(route) {
					var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
					if (!_superPropGet(Routes, "is", this, 3)([route])) return false;
					var container = this.getComponent(route).getServiceName();
					return _.isEqual(args, this.currentArgs[container]);
				}
			},
			{
				key: "isPartOf",
				value: function isPartOf(route) {
					/**
					* Check against current command hierarchically.
					* For example `is( 'panel' )` will be true for `panel/elements`
					* `is( 'panel/editor' )` will be true for `panel/editor/style`
					*/
					var container = route.split("/")[0];
					var toCheck = [];
					var currentParts = this.current[container] ? this.current[container].split("/") : [];
					var match = false;
					currentParts.forEach(function(part) {
						toCheck.push(part);
						if (toCheck.join("/") === route) match = true;
					});
					return match;
				}
			},
			{
				key: "error",
				value: function error(message) {
					throw Error("Routes: " + message);
				}
			},
			{
				key: "dispatchOnOpen",
				value: function dispatchOnOpen(route) {
					window.dispatchEvent(new CustomEvent("elementor/routes/open", { detail: { route } }));
				}
			},
			{
				key: "dispatchOnClose",
				value: function dispatchOnClose(route) {
					window.dispatchEvent(new CustomEvent("elementor/routes/close", { detail: { route } }));
				}
			}
		]);
	}(Commands);

//#endregion
//#region modules/web-cli/assets/js/utils/environment.js
	var matchUserAgent = function matchUserAgent(UserAgentStr) {
		return userAgent.indexOf(UserAgentStr) >= 0;
	};
	var userAgent = navigator.userAgent;
	var isOpera = !!window.opr && !!opr.addons || !!window.opera || matchUserAgent(" OPR/");
	var isFirefox = matchUserAgent("Firefox");
	var isSafari = /^((?!chrome|android).)*safari/i.test(userAgent) || /constructor/i.test(window.HTMLElement) || function(p) {
		return "[object SafariRemoteNotification]" === p.toString();
	}(!window.safari || typeof safari !== "undefined" && safari.pushNotification);
	var isIE = /Trident|MSIE/.test(userAgent) && !!document.documentMode;
	var isEdge = !isIE && !!window.StyleMedia || matchUserAgent("Edg");
	var isChrome = !!window.chrome && matchUserAgent("Chrome") && !(isEdge || isOpera);
	var isBlink = matchUserAgent("Chrome") && !!window.CSS;
	var environment = {
		appleWebkit: matchUserAgent("AppleWebKit") && !isBlink,
		blink: isBlink,
		chrome: isChrome,
		edge: isEdge,
		firefox: isFirefox,
		ie: isIE,
		mac: matchUserAgent("Macintosh"),
		opera: isOpera,
		safari: isSafari,
		webkit: matchUserAgent("AppleWebKit")
	};

//#endregion
//#region modules/web-cli/assets/js/core/shortcuts.js
	var Shortcuts = /*#__PURE__*/ function() {
		function Shortcuts($window) {
			_classCallCheck(this, Shortcuts);
			this.specialKeys = {
				13: "enter",
				27: "esc",
				38: "up",
				40: "down",
				46: "del",
				191: "?"
			};
			this.component = "";
			this.handlers = {};
			this.bindListener($window);
		}
		return _createClass(Shortcuts, [
			{
				key: "bindListener",
				value: function bindListener($window) {
					var _this = this;
					$window.on("keydown", function(event) {
						return _this.handle(event);
					});
				}
			},
			{
				key: "getAll",
				value: function getAll() {
					var shortcuts = {};
					jQuery.each(this.handlers, function(key, handler) {
						jQuery.each(handler, function(index, config) {
							shortcuts[config.command] = key;
						});
					});
					return shortcuts;
				}
			},
			{
				key: "register",
				value: function register(shortcuts, args) {
					var _this2 = this;
					shortcuts.replace(" ", "").split(",").forEach(function(shortcut) {
						if (!_this2.handlers[shortcut]) _this2.handlers[shortcut] = [];
						_this2.handlers[shortcut].push(args);
					});
				}
			},
			{
				key: "unregister",
				value: function unregister(shortcuts, args) {
					var _this3 = this;
					shortcuts.replace(" ", "").split(",").forEach(function(shortcut) {
						_this3.handlers[shortcut].forEach(function(index, handler) {
							if (args === handler) delete _this3.handlers[shortcut][index];
						});
					});
				}
			},
			{
				key: "handle",
				value: function handle(event) {
					var handlers = this.getHandlersByPriority(event);
					if (!handlers) return;
					var filteredHandlers = handlers.filter(function(handler) {
						if (handler.exclude && -1 !== handler.exclude.indexOf("input")) {
							var $target = jQuery(event.target);
							if ($target.is(":input, .elementor-input") || $target.closest("[contenteditable=\"true\"]").length) return false;
						}
						if (handler.dependency && !handler.dependency(event)) return false;
						if (!handler.allowAltKey && event.altKey) return false;
						return true;
					});
					if (!filteredHandlers.length) return;
					if (1 < filteredHandlers.length && elementorWebCliConfig.isDebug) Console.warn("Multiple handlers for shortcut.", filteredHandlers, event);
					event.preventDefault();
					filteredHandlers[0].callback(event);
				}
			},
			{
				key: "isControlEvent",
				value: function isControlEvent(event) {
					return event[environment.mac ? "metaKey" : "ctrlKey"];
				}
			},
			{
				key: "getEventShortcut",
				value: function getEventShortcut(event) {
					var shortcut = [];
					if (event.altKey) shortcut.push("alt");
					if (this.isControlEvent(event)) shortcut.push("ctrl");
					if (event.shiftKey) shortcut.push("shift");
					if (this.specialKeys[event.which]) shortcut.push(this.specialKeys[event.which]);
					else shortcut.push(String.fromCharCode(event.which).toLowerCase());
					return shortcut.join("+");
				}
			},
			{
				key: "isActiveScope",
				value: function isActiveScope(scopes) {
					var activeComponents = Object.keys($e.components.activeComponents);
					var activeComponent = activeComponents[activeComponents.length - 1];
					var component = $e.components.get(activeComponent);
					if (!component) return false;
					var namespace = component.getNamespace();
					if (scopes.some(function(scope) {
						return namespace === scope;
					})) return true;
					var namespaceRoot = component.getServiceName();
					return scopes.some(function(scope) {
						return namespaceRoot === scope;
					});
				}
			},
			{
				key: "getHandlersByPriority",
				value: function getHandlersByPriority(event) {
					var _this4 = this;
					var handlers = this.handlers[this.getEventShortcut(event)];
					if (!handlers) return false;
					var inCurrentScope = handlers.filter(function(handler) {
						return handler.scopes && _this4.isActiveScope(handler.scopes);
					});
					if (inCurrentScope.length) return inCurrentScope;
					var noScope = handlers.filter(function(handler) {
						return !handler.scopes;
					});
					if (noScope.length) return noScope;
				}
			}
		]);
	}();

//#endregion
//#region modules/web-cli/assets/js/core/store.js
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
	/**
	* @typedef {Promise.resolve(elementorVendors.reduxToolkit).Slice} Slice
	*/
	/**
	* @typedef {Promise.resolve(elementorVendors.reduxToolkit).EnhancedStore} EnhancedStore
	*/
	/**
	* @typedef {Promise.resolve(elementorVendors.reduxToolkit).AnyAction} AnyAction
	*/
	/**
	* @typedef {Promise.resolve(elementorVendors.reduxToolkit).ThunkMiddlewareFor} ThunkMiddlewareFor
	*/
	var Store = /*#__PURE__*/ function() {
		/**
		* Initialize the Store.
		*
		* @return {void}
		*/
		function Store() {
			_classCallCheck(this, Store);
			/**
			* @type {Object}
			*/
			_defineProperty(this, "slices", {});
			/**
			* @type {EnhancedStore<{}, AnyAction, [ThunkMiddlewareFor<{}>]>}
			*/
			_defineProperty(this, "reduxStore", void 0);
			this.slices = {};
			this.reduxStore = this.createStore();
		}
		/**
		* Create a Redux Store object.
		*
		* @return {EnhancedStore<{}, AnyAction, [ThunkMiddlewareFor<{}>]>} store
		*/
		return _createClass(Store, [
			{
				key: "createStore",
				value: function createStore() {
					return (0, _reduxjs_toolkit.configureStore)({ reducer: function reducer() {} });
				}
			},
			{
				key: "injectReducer",
				value: function injectReducer(id, newReducer) {
					var prevReducers = this.getReducers();
					this.reduxStore.replaceReducer((0, _reduxjs_toolkit.combineReducers)(_objectSpread(_objectSpread({}, prevReducers), {}, _defineProperty({}, id, newReducer))));
				}
			},
			{
				key: "register",
				value: function register(sliceId, instance) {
					if (this.slices[sliceId]) throw "Slice with ID '".concat(sliceId, "' already exists.");
					this.slices[sliceId] = instance;
					this.injectReducer(sliceId, instance.reducer);
				}
			},
			{
				key: "get",
				value: function get(sliceId) {
					return this.slices[sliceId];
				}
			},
			{
				key: "getAllSlices",
				value: function getAllSlices() {
					return this.slices;
				}
			},
			{
				key: "getAll",
				value: function getAll() {
					return Object.keys(this.slices).sort();
				}
			},
			{
				key: "getReducers",
				value: function getReducers() {
					return Object.entries(this.slices).reduce(function(reducers, _ref) {
						var _ref2 = _slicedToArray(_ref, 2);
						var key = _ref2[0];
						var slice = _ref2[1];
						return _objectSpread(_objectSpread({}, reducers), {}, _defineProperty({}, key, slice.reducer));
					}, {});
				}
			},
			{
				key: "getReduxStore",
				value: function getReduxStore() {
					return this.reduxStore;
				}
			},
			{
				key: "dispatch",
				value: function dispatch() {
					var _this$reduxStore;
					return (_this$reduxStore = this.reduxStore).dispatch.apply(_this$reduxStore, arguments);
				}
			},
			{
				key: "getState",
				value: function getState() {
					var sliceId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
					var state = this.reduxStore.getState();
					return sliceId ? state[sliceId] : state;
				}
			},
			{
				key: "replaceReducer",
				value: function replaceReducer() {
					var _this$reduxStore2;
					return (_this$reduxStore2 = this.reduxStore).replaceReducer.apply(_this$reduxStore2, arguments);
				}
			},
			{
				key: "subscribe",
				value: function subscribe() {
					var _this$reduxStore3;
					return (_this$reduxStore3 = this.reduxStore).subscribe.apply(_this$reduxStore3, arguments);
				}
			}
		]);
	}();

//#endregion
//#region modules/web-cli/assets/js/core/ui-states.js
/**
	* @typedef {import('./states/ui-state-base')} UiStateBase
	*/
	var UiStates = /*#__PURE__*/ function() {
		/**
		* Initialize the State Manager.
		*
		* @return {void}
		*/
		function UiStates() {
			_classCallCheck(this, UiStates);
			this.states = {};
		}
		/**
		* Register a new state.
		*
		* @param {UiStateBase} instance - State instance.
		*/
		return _createClass(UiStates, [
			{
				key: "register",
				value: function register(instance) {
					var stateId = instance.getPrefixedId();
					if (this.states[stateId]) throw "State '".concat(stateId, "' already exists.");
					this.states[stateId] = instance;
				}
			},
			{
				key: "getAll",
				value: function getAll() {
					var states = {};
					Object.entries(this.states).forEach(function(_ref) {
						var _ref2 = _slicedToArray(_ref, 2);
						var id = _ref2[0];
						var options = _ref2[1].getOptions();
						states[id] = Object.keys(options);
					});
					return states;
				}
			},
			{
				key: "get",
				value: function get(state) {
					if (state) return this.states[state];
					return this.states;
				}
			},
			{
				key: "set",
				value: function set(state, value) {
					if (!this.get(state)) throw "State '".concat(state, "' doesn't exist.");
					var oldValue = this.getCurrent(state);
					var classPrefix = "e-ui-state--".concat(state.replaceAll("/", "-"));
					var oldStateClass = "".concat(classPrefix, "__").concat(oldValue);
					var newStateClass = "".concat(classPrefix, "__").concat(value);
					var scopes = this.get(state).getScopes();
					this.get(state).set(value);
					scopes.forEach(function(scope) {
						scope.classList.remove(oldStateClass);
						if (value) scope.classList.add(newStateClass);
						var event = new CustomEvent("e-ui-state:".concat(state), { detail: {
							oldValue,
							newValue: value
						} });
						scope.dispatchEvent(event);
					});
				}
			},
			{
				key: "remove",
				value: function remove(state) {
					this.set(state, "");
				}
			},
			{
				key: "getCurrent",
				value: function getCurrent(state) {
					var _this$get;
					return (_this$get = this.get(state)) === null || _this$get === void 0 ? void 0 : _this$get.getCurrent();
				}
			}
		]);
	}();

//#endregion
//#region modules/web-cli/assets/js/modules/hook-base.js
	var HookBase = /*#__PURE__*/ function() {
		/**
		* Function constructor().
		*
		* Create callback base.
		*/
		function HookBase() {
			_classCallCheck(this, HookBase);
			/**
			* Callback type, eg ( hook, event ).
			*
			* @type {string}
			*/
			_defineProperty(this, "type", void 0);
			/**
			* Full command address, that will hook the callback.
			*
			* @type {string}
			*/
			_defineProperty(this, "command", void 0);
			/**
			* Unique id of the callback.
			*
			* @type {string}
			*/
			_defineProperty(this, "id", void 0);
			this.initialize();
			this.type = this.getType();
			this.command = this.getCommand();
			this.id = this.getId();
		}
		/**
		* Function initialize().
		*
		* Called after creation of the base, used for initialize extras.
		* Without expending constructor.
		*/
		return _createClass(HookBase, [
			{
				key: "initialize",
				value: function initialize() {}
			},
			{
				key: "register",
				value: function register() {
					force_method_implementation_default();
				}
			},
			{
				key: "getType",
				value: function getType() {
					force_method_implementation_default();
				}
			},
			{
				key: "getCommand",
				value: function getCommand() {
					force_method_implementation_default();
				}
			},
			{
				key: "getId",
				value: function getId() {
					force_method_implementation_default();
				}
			},
			{
				key: "getContainerType",
				value: function getContainerType() {}
			},
			{
				key: "getConditions",
				value: function getConditions() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
					arguments.length > 1 && arguments[1];
					return true;
				}
			},
			{
				key: "apply",
				value: function apply(args) {
					force_method_implementation_default();
				}
			},
			{
				key: "run",
				value: function run() {
					var _ref$options = (arguments.length <= 0 ? void 0 : arguments[0]).options;
					var options = _ref$options === void 0 ? {} : _ref$options;
					if (options.callbacks && false === options.callbacks[this.id]) return true;
					if (this.getConditions.apply(this, arguments)) {
						if ($e.devTools) $e.devTools.log.callbacks().active(this.type, this.command, this.id);
						return this.apply.apply(this, arguments);
					}
					return true;
				}
			}
		]);
	}();

//#endregion
//#region modules/web-cli/assets/js/modules/hooks/data/base.js
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
	var Base$1 = /*#__PURE__*/ function(_HookBase) {
		function Base() {
			_classCallCheck(this, Base);
			return _callSuper$7(this, Base, arguments);
		}
		_inherits(Base, _HookBase);
		return _createClass(Base, [{
			key: "getType",
			value: function getType() {
				return "data";
			}
		}]);
	}(HookBase);

//#endregion
//#region modules/web-cli/assets/js/modules/hooks/data/after.js
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
	var After$1 = /*#__PURE__*/ function(_Base) {
		function After() {
			_classCallCheck(this, After);
			return _callSuper$6(this, After, arguments);
		}
		_inherits(After, _Base);
		return _createClass(After, [{
			key: "register",
			value: function register() {
				$e.hooks.registerDataAfter(this);
			}
		}]);
	}(Base$1);

//#endregion
//#region modules/web-cli/assets/js/modules/hooks/data/catch.js
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
	var Catch$1 = /*#__PURE__*/ function(_Base) {
		function Catch() {
			_classCallCheck(this, Catch);
			return _callSuper$5(this, Catch, arguments);
		}
		_inherits(Catch, _Base);
		return _createClass(Catch, [{
			key: "register",
			value: function register() {
				$e.hooks.registerDataCatch(this);
			}
		}]);
	}(Base$1);

//#endregion
//#region modules/web-cli/assets/js/modules/hooks/data/dependency.js
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
	var Dependency = /*#__PURE__*/ function(_Base) {
		function Dependency() {
			_classCallCheck(this, Dependency);
			return _callSuper$4(this, Dependency, arguments);
		}
		_inherits(Dependency, _Base);
		return _createClass(Dependency, [{
			key: "register",
			value: function register() {
				$e.hooks.registerDataDependency(this);
			}
		}]);
	}(Base$1);

//#endregion
//#region modules/web-cli/assets/js/modules/hooks/data/index.js
	var data_exports = /* @__PURE__ */ __exportAll({
		After: () => After$1,
		Base: () => Base$1,
		Catch: () => Catch$1,
		Dependency: () => Dependency
	});

//#endregion
//#region modules/web-cli/assets/js/modules/hooks/ui/base.js
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
	var Base = /*#__PURE__*/ function(_HookBase) {
		function Base() {
			_classCallCheck(this, Base);
			return _callSuper$3(this, Base, arguments);
		}
		_inherits(Base, _HookBase);
		return _createClass(Base, [{
			key: "getType",
			value: function getType() {
				return "ui";
			}
		}]);
	}(HookBase);

//#endregion
//#region modules/web-cli/assets/js/modules/hooks/ui/after.js
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
	var After = /*#__PURE__*/ function(_Base) {
		function After() {
			_classCallCheck(this, After);
			return _callSuper$2(this, After, arguments);
		}
		_inherits(After, _Base);
		return _createClass(After, [{
			key: "register",
			value: function register() {
				$e.hooks.registerUIAfter(this);
			}
		}]);
	}(Base);

//#endregion
//#region modules/web-cli/assets/js/modules/hooks/ui/before.js
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
	var Before = /*#__PURE__*/ function(_Base) {
		function Before() {
			_classCallCheck(this, Before);
			return _callSuper$1(this, Before, arguments);
		}
		_inherits(Before, _Base);
		return _createClass(Before, [{
			key: "register",
			value: function register() {
				$e.hooks.registerUIBefore(this);
			}
		}]);
	}(Base);

//#endregion
//#region modules/web-cli/assets/js/modules/hooks/ui/catch.js
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
	var Catch = /*#__PURE__*/ function(_Base) {
		function Catch() {
			_classCallCheck(this, Catch);
			return _callSuper(this, Catch, arguments);
		}
		_inherits(Catch, _Base);
		return _createClass(Catch, [{
			key: "register",
			value: function register() {
				$e.hooks.registerUICatch(this);
			}
		}]);
	}(Base);

//#endregion
//#region modules/web-cli/assets/js/modules/hooks/ui/index.js
	var ui_exports = /* @__PURE__ */ __exportAll({
		After: () => After,
		Base: () => Base,
		Before: () => Before,
		Catch: () => Catch
	});

//#endregion
//#region modules/web-cli/assets/js/api.js
	var API = /*#__PURE__*/ function() {
		/**
		* Function constructor().
		*
		* Create's 'elementor' api.
		*/
		function API() {
			_classCallCheck(this, API);
			this.components = new _default();
			this.commands = new Commands();
			this.commandsInternal = new CommandsInternal();
			this.hooks = new Hooks();
			this.routes = new Routes();
			this.shortcuts = new Shortcuts(jQuery(window));
			this.data = new Data$1();
			this.store = new Store();
			this.uiStates = new UiStates();
			this.modules = {
				CommandBase,
				CommandInternalBase,
				CommandData,
				ComponentBase,
				ComponentModalBase,
				HookBreak,
				hookData: data_exports,
				hookUI: ui_exports
			};
			this.extras = { hashCommands: new HashCommands() };
			this.bc = new BackwardsCompatibility();
		}
		/**
		* Function run().
		*
		* Alias of `$e.commands.run()`.
		*
		* @param {string} command
		* @param {*}      [args={}]
		*
		* @return {*} result
		*/
		return _createClass(API, [
			{
				key: "run",
				value: function run(command) {
					var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
					return $e.commands.run(command, args);
				}
			},
			{
				key: "internal",
				value: function internal(command) {
					var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
					return $e.commandsInternal.run(command, args);
				}
			},
			{
				key: "route",
				value: function route(_route) {
					var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
					var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { history: true };
					return $e.routes.to(_route, args, options);
				}
			}
		]);
	}();

//#endregion
//#region modules/web-cli/assets/js/index.js
	window.$e = new API();

//#endregion
})(elementorVendors.reduxToolkit);
//# sourceMappingURL=web-cli.js.map