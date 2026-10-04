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
	function _superPropGet$2(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$2, "_superPropGet");
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
				var result = _superPropGet$2(InstanceType, Symbol.hasInstance, this, 2)([target]);
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
	function _createForOfIteratorHelper(r, e) {
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
		var _iterator = _createForOfIteratorHelper(constructors);
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
			_this = _callSuper$6(this, ArgsObject);
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
			_this = _callSuper$5(this, CommandInfra, [args]);
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
	/**
	* @name $e.modules.CommandBase
	*/
	var CommandBase = /*#__PURE__*/ function(_CommandInfra) {
		function CommandBase() {
			_classCallCheck(this, CommandBase);
			return _callSuper$4(this, CommandBase, arguments);
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
//#region assets/dev/js/editor/command-bases/command-container-base.js
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
	/**
	* @name $e.modules.editor.CommandContainerBase
	*/
	var CommandContainerBase = /*#__PURE__*/ function(_CommandBase) {
		function CommandContainerBase() {
			_classCallCheck(this, CommandContainerBase);
			return _callSuper$3(this, CommandContainerBase, arguments);
		}
		_inherits(CommandContainerBase, _CommandBase);
		return _createClass(CommandContainerBase, [{
			key: "requireContainer",
			value: function requireContainer() {
				var _this = this;
				var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.args;
				if (!args.container && !args.containers) throw Error("container or containers are required.");
				if (args.container && args.containers) throw Error("container and containers cannot go together please select one of them.");
				(args.containers || [args.container]).forEach(function(container) {
					_this.requireArgumentInstance("container", elementorModules.editor.Container, { container });
				});
			}
		}], [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "CommandContainerBase";
			}
		}]);
	}(CommandBase);

//#endregion
//#region assets/dev/js/editor/command-bases/command-container-internal-base.js
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
	/**
	* @name $e.modules.editor.CommandContainerInternalBase
	*/
	var CommandContainerInternalBase = /*#__PURE__*/ function(_CommandContainerBase) {
		function CommandContainerInternalBase(args) {
			_classCallCheck(this, CommandContainerInternalBase);
			return _callSuper$2(this, CommandContainerInternalBase, [args, $e.commandsInternal]);
		}
		_inherits(CommandContainerInternalBase, _CommandContainerBase);
		return _createClass(CommandContainerInternalBase, null, [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "CommandContainerInternalBase";
			}
		}]);
	}(CommandContainerBase);

//#endregion
//#region assets/dev/js/editor/document/command-bases/command-history-base.js
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
	function _superPropGet$1(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$1, "_superPropGet");
	/**
	* @name $e.modules.editor.document.CommandHistoryBase
	*/
	var CommandHistoryBase = /*#__PURE__*/ function(_CommandContainerBase) {
		function CommandHistoryBase() {
			_classCallCheck(this, CommandHistoryBase);
			return _callSuper$1(this, CommandHistoryBase, arguments);
		}
		_inherits(CommandHistoryBase, _CommandContainerBase);
		return _createClass(CommandHistoryBase, [
			{
				key: "initialize",
				value: function initialize() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					var _args$options = args.options;
					var _options$useHistory = (_args$options === void 0 ? {} : _args$options).useHistory;
					if (_options$useHistory === void 0 ? true : _options$useHistory) {
						/**
						* Get History from child command.
						*
						* @type {{}|boolean}
						*/
						this.history = this.getHistory(args);
						/**
						* @type {number|boolean}
						*/
						this.historyId = false;
					}
				}
			},
			{
				key: "getHistory",
				value: function getHistory() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
					elementorModules.ForceMethodImplementation();
				}
			},
			{
				key: "isHistoryActive",
				value: function isHistoryActive() {
					return elementor.documents.getCurrent().history.getActive();
				}
			},
			{
				key: "onBeforeRun",
				value: function onBeforeRun(args) {
					_superPropGet$1(CommandHistoryBase, "onBeforeRun", this, 3)([args]);
					if (this.history && this.isHistoryActive()) this.historyId = $e.internal("document/history/start-log", this.history);
				}
			},
			{
				key: "onAfterRun",
				value: function onAfterRun(args, result) {
					_superPropGet$1(CommandHistoryBase, "onAfterRun", this, 3)([args, result]);
					if (this.history && this.isHistoryActive()) $e.internal("document/history/end-log", { id: this.historyId });
				}
			},
			{
				key: "onAfterApply",
				value: function onAfterApply() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					var result = arguments.length > 1 ? arguments[1] : void 0;
					_superPropGet$1(CommandHistoryBase, "onAfterApply", this, 3)([args, result]);
					if (this.isDataChanged()) $e.internal("document/save/set-is-modified", { status: true });
				}
			},
			{
				key: "onCatchApply",
				value: function onCatchApply(e) {
					if (e instanceof $e.modules.HookBreak && this.historyId) $e.internal("document/history/delete-log", { id: this.historyId });
					_superPropGet$1(CommandHistoryBase, "onCatchApply", this, 3)([e]);
				}
			},
			{
				key: "isDataChanged",
				value: function isDataChanged() {
					return true;
				}
			}
		], [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "CommandHistoryBase";
			}
		}]);
	}(CommandContainerBase);

//#endregion
//#region assets/dev/js/editor/document/command-bases/command-history-debounce-base.js
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
	var DEFAULT_DEBOUNCE_DELAY = 800;
	/**
	* Function getDefaultDebounceDelay().
	*
	* Returns default debounce delay time, if exists in config override.
	*
	* @return {number} default debounce delay time
	*/
	var getDefaultDebounceDelay = function getDefaultDebounceDelay() {
		var result = 800;
		if (elementor.config.document && void 0 !== elementor.config.document.debounceDelay) result = elementor.config.document.debounceDelay;
		return result;
	};
	/**
	* @name $e.modules.editor.document.CommandHistoryDebounceBase
	*/
	var CommandHistoryDebounceBase = /*#__PURE__*/ function(_CommandHistoryBase) {
		function CommandHistoryDebounceBase() {
			_classCallCheck(this, CommandHistoryDebounceBase);
			return _callSuper(this, CommandHistoryDebounceBase, arguments);
		}
		_inherits(CommandHistoryDebounceBase, _CommandHistoryBase);
		return _createClass(CommandHistoryDebounceBase, [
			{
				key: "initialize",
				value: function initialize(args) {
					var _args$options = args.options;
					var options = _args$options === void 0 ? {} : _args$options;
					_superPropGet(CommandHistoryDebounceBase, "initialize", this, 3)([args]);
					if (!this.constructor.debounce) this.constructor.debounce = _.debounce(function(fn) {
						return fn();
					}, getDefaultDebounceDelay());
					if (1 === $e.commands.currentTrace.length || options.debounce) this.isDebounceRequired = true;
				}
			},
			{
				key: "onBeforeRun",
				value: function onBeforeRun(args) {
					$e.modules.CommandBase.prototype.onBeforeRun.call(this, args);
					if (this.history && this.isHistoryActive()) $e.internal("document/history/add-transaction", this.history);
				}
			},
			{
				key: "onAfterRun",
				value: function onAfterRun(args, result) {
					$e.modules.CommandBase.prototype.onAfterRun.call(this, args, result);
					if (this.isHistoryActive()) if (this.isDebounceRequired) this.constructor.debounce(function() {
						return $e.internal("document/history/end-transaction");
					});
					else $e.internal("document/history/end-transaction");
				}
			},
			{
				key: "onCatchApply",
				value: function onCatchApply(e) {
					$e.modules.CommandBase.prototype.onCatchApply.call(this, e);
					if (e instanceof $e.modules.HookBreak && this.history) if (this.isDebounceRequired) this.constructor.debounce(function() {
						return $e.internal("document/history/clear-transaction");
					});
					else $e.internal("document/history/clear-transaction");
				}
			}
		], [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "CommandHistoryDebounceBase";
			}
		}]);
	}(CommandHistoryBase);
	/**
	* Function debounce().
	*
	* Will debounce every function you pass in, at the same debounce flow.
	*
	* @param {Function}
	*/
	_defineProperty(CommandHistoryDebounceBase, "debounce", void 0);

//#endregion
//#region assets/dev/js/editor/editor-document.js
	$e.modules.editor = {
		CommandContainerBase,
		CommandContainerInternalBase,
		document: {
			CommandHistoryBase,
			CommandHistoryDebounceBase
		}
	};
	$e.modules.document = {
		/**
		* @deprecated since 3.7.0, use `$e.modules.editor.document.CommandHistoryBase` instead.
		*/
		get CommandHistory() {
			elementorDevTools.deprecation.deprecated("$e.modules.document.CommandHistory", "3.7.0", "$e.modules.editor.document.CommandHistoryBase");
			return $e.modules.editor.document.CommandHistoryBase;
		},
		/**
		* @deprecated since 3.7.0, use `$e.modules.editor.document.CommandHistoryDebounceBase` instead.
		*/
		get CommandHistoryDebounce() {
			elementorDevTools.deprecation.deprecated("$e.modules.CommandHistoryDebounce", "3.7.0", "$e.modules.editor.document.CommandHistoryDebounceBase");
			return $e.modules.editor.document.CommandHistoryDebounceBase;
		}
	};

//#endregion
})();
//# sourceMappingURL=editor-document.js.map