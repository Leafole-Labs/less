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
//#region assets/dev/js/modules/imports/view-module.js
	var import_module = /* @__PURE__ */ __toESM(require_module());
	var view_module_default = import_module.default.extend({
		elements: null,
		getDefaultElements: function getDefaultElements() {
			return {};
		},
		bindEvents: function bindEvents() {},
		onInit: function onInit() {
			this.initElements();
			this.bindEvents();
		},
		initElements: function initElements() {
			this.elements = this.getDefaultElements();
		}
	});

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/classCallCheck.js
	function _classCallCheck(a, n) {
		if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
	}

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
	function _superPropGet$1(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$1, "_superPropGet");
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
				var result = _superPropGet$1(InstanceType, Symbol.hasInstance, this, 2)([target]);
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
	init_typeof();
	function _callSuper$15(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$16() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$15, "_callSuper");
	function _isNativeReflectConstruct$16() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$16 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$16, "_isNativeReflectConstruct");
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
			_this = _callSuper$15(this, ArgsObject);
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
//#region assets/dev/js/modules/imports/utils/masonry.js
	var masonry_default = view_module_default.extend({
		getDefaultSettings: function getDefaultSettings() {
			return {
				container: null,
				items: null,
				columnsCount: 3,
				verticalSpaceBetween: 30
			};
		},
		getDefaultElements: function getDefaultElements() {
			return {
				$container: jQuery(this.getSettings("container")),
				$items: jQuery(this.getSettings("items"))
			};
		},
		run: function run() {
			var heights = [];
			var distanceFromTop = this.elements.$container.position().top;
			var settings = this.getSettings();
			var columnsCount = settings.columnsCount;
			distanceFromTop += parseInt(this.elements.$container.css("margin-top"), 10);
			this.elements.$items.each(function(index) {
				var row = Math.floor(index / columnsCount);
				var $item = jQuery(this);
				var itemHeight = $item[0].getBoundingClientRect().height + settings.verticalSpaceBetween;
				if (row) {
					var itemPosition = $item.position();
					var indexAtRow = index % columnsCount;
					var pullHeight = itemPosition.top - distanceFromTop - heights[indexAtRow];
					pullHeight -= parseInt($item.css("margin-top"), 10);
					pullHeight *= -1;
					$item.css("margin-top", pullHeight + "px");
					heights[indexAtRow] += itemHeight;
				} else heights.push(itemHeight);
			});
		}
	});

//#endregion
//#region assets/dev/js/modules/imports/utils/scroll.js
	var Scroll = /*#__PURE__*/ function() {
		function Scroll() {
			_classCallCheck(this, Scroll);
		}
		return _createClass(Scroll, null, [
			{
				key: "scrollObserver",
				value: function scrollObserver(obj) {
					var lastScrollY = 0;
					var options = {
						root: obj.root || null,
						rootMargin: obj.offset || "0px",
						threshold: function buildThresholds() {
							var sensitivityPercentage = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
							var thresholds = [];
							if (sensitivityPercentage > 0 && sensitivityPercentage <= 100) {
								var increment = 100 / sensitivityPercentage;
								for (var i = 0; i <= 100; i += increment) thresholds.push(i / 100);
							} else thresholds.push(0);
							return thresholds;
						}(obj.sensitivity)
					};
					function handleIntersect(entries) {
						var currentScrollY = entries[0].boundingClientRect.y;
						var isInViewport = entries[0].isIntersecting;
						var intersectionScrollDirection = currentScrollY < lastScrollY ? "down" : "up";
						var scrollPercentage = Math.abs(parseFloat((entries[0].intersectionRatio * 100).toFixed(2)));
						obj.callback({
							sensitivity: obj.sensitivity,
							isInViewport,
							scrollPercentage,
							intersectionScrollDirection
						});
						lastScrollY = currentScrollY;
					}
					return new IntersectionObserver(handleIntersect, options);
				}
			},
			{
				key: "getElementViewportPercentage",
				value: function getElementViewportPercentage($element) {
					var offsetObj = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
					var elementOffset = $element[0].getBoundingClientRect();
					var offsetStart = offsetObj.start || 0;
					var offsetEnd = offsetObj.end || 0;
					var windowStartOffset = window.innerHeight * offsetStart / 100;
					var windowEndOffset = window.innerHeight * offsetEnd / 100;
					var y1 = elementOffset.top - window.innerHeight;
					var y2 = elementOffset.top + windowStartOffset + $element.height();
					var startPosition = 0 - y1 + windowStartOffset;
					var endPosition = y2 - y1 + windowEndOffset;
					var percent = Math.max(0, Math.min(startPosition / endPosition, 1));
					return parseFloat((percent * 100).toFixed(2));
				}
			},
			{
				key: "getPageScrollPercentage",
				value: function getPageScrollPercentage() {
					var offsetObj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					var limitPageHeight = arguments.length > 1 ? arguments[1] : void 0;
					var offsetStart = offsetObj.start || 0;
					var offsetEnd = offsetObj.end || 0;
					var initialPageHeight = limitPageHeight || document.documentElement.scrollHeight - document.documentElement.clientHeight;
					var heightOffset = initialPageHeight * offsetStart / 100;
					var pageRange = initialPageHeight + heightOffset + initialPageHeight * offsetEnd / 100;
					return (document.documentElement.scrollTop + document.body.scrollTop + heightOffset) / pageRange * 100;
				}
			}
		]);
	}();

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
	function _isNativeReflectConstruct$15() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$15 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$15, "_isNativeReflectConstruct");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/construct.js
	function _construct(t, e, r) {
		if (_isNativeReflectConstruct$15()) return Reflect.construct.apply(null, arguments);
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
//#region assets/dev/js/modules/imports/force-method-implementation.js
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
	var ForceMethodImplementation$1 = /*#__PURE__*/ function(_Error) {
		function ForceMethodImplementation() {
			var _this;
			var info = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			_classCallCheck(this, ForceMethodImplementation);
			_this = _callSuper$14(this, ForceMethodImplementation, ["".concat(info.isStatic ? "static " : "").concat(info.fullName, "() should be implemented, please provide '").concat(info.functionName || info.fullName, "' functionality."), args]);
			if (Object.keys(args).length) console.error(args);
			Error.captureStackTrace(_this, ForceMethodImplementation);
			return _this;
		}
		_inherits(ForceMethodImplementation, _Error);
		return _createClass(ForceMethodImplementation);
	}(/*#__PURE__*/ _wrapNativeSuper(Error));
	var force_method_implementation_default$1 = /* @__PURE__ */ __name((function(args) {
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
		throw new ForceMethodImplementation$1(info, args);
	}), "default");

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
//#region app/modules/import-export-customization/assets/js/shared/utils/template-registry-helpers.js
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
	function createGetInitialState(exportGroup) {
		var additionalProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		return function(data, parentInitialState) {
			var isEnabled = parentInitialState;
			if (data.hasOwnProperty("uploadedData")) {
				var _elementorAppConfig;
				isEnabled = false;
				var templates = data.uploadedData.manifest.templates;
				var exportGroups = ((_elementorAppConfig = elementorAppConfig) === null || _elementorAppConfig === void 0 || (_elementorAppConfig = _elementorAppConfig["import-export-customization"]) === null || _elementorAppConfig === void 0 ? void 0 : _elementorAppConfig.exportGroups) || {};
				for (var templateId in templates) if (exportGroups[templates[templateId].doc_type] === exportGroup) {
					isEnabled = true;
					break;
				}
			}
			return _objectSpread$2({ enabled: isEnabled }, additionalProps);
		};
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
	function _arrayLikeToArray(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
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
//#region node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
	function _unsupportedIterableToArray(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
		}
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
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
	function _objectWithoutPropertiesLoose(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (-1 !== e.indexOf(n)) continue;
			t[n] = r[n];
		}
		return t;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
	function _objectWithoutProperties(e, t) {
		if (null == e) return {};
		var o;
		var r;
		var i = _objectWithoutPropertiesLoose(e, t);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
		}
		return i;
	}

//#endregion
//#region app/modules/import-export-customization/assets/js/shared/registry/base.js
	var _excluded = ["children"];
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
	var BaseRegistry = /*#__PURE__*/ function() {
		function BaseRegistry() {
			_classCallCheck(this, BaseRegistry);
			this.sections = /* @__PURE__ */ new Map();
		}
		return _createClass(BaseRegistry, [
			{
				key: "register",
				value: function register(section) {
					var _this = this;
					if (!section.key || !section.title) throw new Error("Template type must have key and title");
					var formattedSection = this.get(section.key) || this.formatSection(section);
					if (section.children) if (formattedSection.children) {
						var existingChildrenMap = new Map(formattedSection.children.map(function(child) {
							return [child.key, child];
						}));
						section.children.forEach(function(childSection) {
							var formattedChild = _this.formatSection(childSection);
							existingChildrenMap.set(childSection.key, formattedChild);
						});
						formattedSection.children = Array.from(existingChildrenMap.values());
					} else formattedSection.children = section.children.map(function(childSection) {
						return _this.formatSection(childSection);
					});
					this.sections.set(section.key, formattedSection);
				}
			},
			{
				key: "formatSection",
				value: function formatSection(_ref) {
					_ref.children;
					var section = _objectWithoutProperties(_ref, _excluded);
					return _objectSpread$1({
						key: section.key,
						title: section.title,
						description: section.description || "",
						useParentDefault: section.useParentDefault !== false,
						getInitialState: section.getInitialState || null,
						component: section.component || null,
						order: section.order || 10,
						isAvailable: section.isAvailable || function() {
							return true;
						}
					}, section);
				}
			},
			{
				key: "getAll",
				value: function getAll() {
					return Array.from(this.sections.values()).filter(function(type) {
						return type.isAvailable();
					}).map(function(type) {
						if (type.children) return _objectSpread$1(_objectSpread$1({}, type), {}, { children: _toConsumableArray(type.children).sort(function(a, b) {
							return a.order - b.order;
						}) });
						return type;
					}).sort(function(a, b) {
						return a.order - b.order;
					});
				}
			},
			{
				key: "get",
				value: function get(key) {
					return this.sections.get(key);
				}
			}
		]);
	}();

//#endregion
//#region app/modules/import-export-customization/assets/js/shared/registry/customization-dialogs.js
	var customizationDialogsRegistry = new BaseRegistry();

//#endregion
//#region assets/dev/js/modules/modules.js
	var baseModules = {
		Module: import_module.default,
		ViewModule: view_module_default,
		ArgsObject,
		ForceMethodImplementation: force_method_implementation_default$1,
		utils: {
			Masonry: masonry_default,
			Scroll
		},
		importExport: {
			createGetInitialState,
			customizationDialogsRegistry
		}
	};
	if (!window.elementorModules) window.elementorModules = baseModules;
	else Object.assign(window.elementorModules, baseModules);
	var modules_default = window.elementorModules;

//#endregion
//#region core/common/assets/js/views/modal/header.js
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
	var _default$3 = /*#__PURE__*/ function(_Marionette$LayoutVie) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$13(this, _default, arguments);
		}
		_inherits(_default, _Marionette$LayoutVie);
		return _createClass(_default, [
			{
				key: "tagName",
				value: function tagName() {
					return "header";
				}
			},
			{
				key: "className",
				value: function className() {
					return "elementor-templates-modal__header";
				}
			},
			{
				key: "getTemplate",
				value: function getTemplate() {
					return "#tmpl-elementor-templates-modal__header";
				}
			},
			{
				key: "regions",
				value: function regions() {
					return {
						logoArea: ".elementor-templates-modal__header__logo-area",
						tools: "#elementor-template-library-header-tools",
						menuArea: ".elementor-templates-modal__header__menu-area"
					};
				}
			},
			{
				key: "ui",
				value: function ui() {
					return { closeModal: ".elementor-templates-modal__header__close" };
				}
			},
			{
				key: "events",
				value: function events() {
					return { "click @ui.closeModal": "onCloseModalClick" };
				}
			},
			{
				key: "onRender",
				value: function onRender() {
					this.bindEscapeKey();
				}
			},
			{
				key: "bindEscapeKey",
				value: function bindEscapeKey() {
					var _this = this;
					this.onDocumentKeyDown = function(event) {
						if ("Escape" === event.key) _this.onCloseModalClick();
					};
					document.addEventListener("keydown", this.onDocumentKeyDown);
				}
			},
			{
				key: "onDestroy",
				value: function onDestroy() {
					if (this.onDocumentKeyDown) document.removeEventListener("keydown", this.onDocumentKeyDown);
				}
			},
			{
				key: "templateHelpers",
				value: function templateHelpers() {
					return { closeType: this.getOption("closeType") };
				}
			},
			{
				key: "onCloseModalClick",
				value: function onCloseModalClick() {
					this._parent._parent._parent.hideModal();
					var documentType = this.getDocumentType();
					var customEvent = new CustomEvent("core/modal/close/".concat(documentType));
					window.dispatchEvent(customEvent);
					if (this.isFloatingButtonLibraryClose()) {
						$e.internal("document/save/set-is-modified", { status: false });
						window.location.href = elementor.config.admin_floating_button_admin_url;
					}
				}
			},
			{
				key: "getDocumentType",
				value: function getDocumentType() {
					var _elementor$config$doc;
					var _elementor;
					var DEFAULT_TYPE = "default";
					if ("undefined" === typeof window.elementor) return DEFAULT_TYPE;
					return (_elementor$config$doc = (_elementor = elementor) === null || _elementor === void 0 || (_elementor = _elementor.config) === null || _elementor === void 0 || (_elementor = _elementor.document) === null || _elementor === void 0 ? void 0 : _elementor.type) !== null && _elementor$config$doc !== void 0 ? _elementor$config$doc : DEFAULT_TYPE;
				}
			},
			{
				key: "isFloatingButtonLibraryClose",
				value: function isFloatingButtonLibraryClose() {
					var _elementor$config;
					var _elementor$config2;
					return window.elementor && ((_elementor$config = elementor.config) === null || _elementor$config === void 0 ? void 0 : _elementor$config.admin_floating_button_admin_url) && "floating-buttons" === ((_elementor$config2 = elementor.config) === null || _elementor$config2 === void 0 || (_elementor$config2 = _elementor$config2.document) === null || _elementor$config2 === void 0 ? void 0 : _elementor$config2.type) && (this.$el.closest(".dialog-lightbox-widget-content").find(".elementor-template-library-template-floating_button").length || this.$el.closest(".dialog-lightbox-widget-content").find("#elementor-template-library-preview").length || this.$el.closest(".dialog-lightbox-widget-content").find("#elementor-template-library-templates-empty").length);
				}
			}
		]);
	}(Marionette.LayoutView);

//#endregion
//#region core/common/assets/js/views/modal/logo.js
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
	var _default$2 = /*#__PURE__*/ function(_Marionette$ItemView) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$12(this, _default, arguments);
		}
		_inherits(_default, _Marionette$ItemView);
		return _createClass(_default, [
			{
				key: "getTemplate",
				value: function getTemplate() {
					return "#tmpl-elementor-templates-modal__header__logo";
				}
			},
			{
				key: "className",
				value: function className() {
					return "elementor-templates-modal__header__logo";
				}
			},
			{
				key: "events",
				value: function events() {
					return { click: "onClick" };
				}
			},
			{
				key: "templateHelpers",
				value: function templateHelpers() {
					return { title: this.getOption("title") };
				}
			},
			{
				key: "onClick",
				value: function onClick() {
					var clickCallback = this.getOption("click");
					if (clickCallback) clickCallback();
				}
			}
		]);
	}(Marionette.ItemView);

//#endregion
//#region core/common/assets/js/views/modal/loading.js
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
	var _default$1 = /*#__PURE__*/ function(_Marionette$ItemView) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$11(this, _default, arguments);
		}
		_inherits(_default, _Marionette$ItemView);
		return _createClass(_default, [{
			key: "id",
			value: function id() {
				return "elementor-template-library-loading";
			}
		}, {
			key: "getTemplate",
			value: function getTemplate() {
				return "#tmpl-elementor-template-library-loading";
			}
		}]);
	}(Marionette.ItemView);

//#endregion
//#region core/common/assets/js/views/modal/layout.js
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
	var _default = /*#__PURE__*/ function(_Marionette$LayoutVie) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$10(this, _default, arguments);
		}
		_inherits(_default, _Marionette$LayoutVie);
		return _createClass(_default, [
			{
				key: "el",
				value: function el() {
					return this.getModal().getElements("widget");
				}
			},
			{
				key: "regions",
				value: function regions() {
					return {
						modalHeader: ".dialog-header",
						modalContent: ".dialog-lightbox-content",
						modalLoading: ".dialog-lightbox-loading"
					};
				}
			},
			{
				key: "initialize",
				value: function initialize() {
					this.modalHeader.show(new _default$3(this.getHeaderOptions()));
				}
			},
			{
				key: "getModal",
				value: function getModal() {
					if (!this.modal) this.initModal();
					return this.modal;
				}
			},
			{
				key: "initModal",
				value: function initModal() {
					var modalOptions = {
						className: "elementor-templates-modal",
						closeButton: false,
						draggable: false,
						hide: {
							onOutsideClick: false,
							onEscKeyPress: false
						}
					};
					jQuery.extend(true, modalOptions, this.getModalOptions());
					this.modal = elementorCommon.dialogsManager.createWidget("lightbox", modalOptions);
					this.modal.getElements("message").append(this.modal.addElement("content"), this.modal.addElement("loading"));
					if (modalOptions.draggable) this.draggableModal();
				}
			},
			{
				key: "showModal",
				value: function showModal() {
					this.getModal().show();
				}
			},
			{
				key: "hideModal",
				value: function hideModal() {
					this.getModal().hide();
				}
			},
			{
				key: "draggableModal",
				value: function draggableModal() {
					var $modalWidgetContent = this.getModal().getElements("widgetContent");
					$modalWidgetContent.draggable({
						containment: "parent",
						stop: function stop() {
							$modalWidgetContent.height("");
						}
					});
					$modalWidgetContent.css("position", "absolute");
				}
			},
			{
				key: "getModalOptions",
				value: function getModalOptions() {
					return {};
				}
			},
			{
				key: "getLogoOptions",
				value: function getLogoOptions() {
					return {};
				}
			},
			{
				key: "getHeaderOptions",
				value: function getHeaderOptions() {
					return { closeType: "normal" };
				}
			},
			{
				key: "getHeaderView",
				value: function getHeaderView() {
					return this.modalHeader.currentView;
				}
			},
			{
				key: "showLoadingView",
				value: function showLoadingView() {
					this.modalLoading.show(new _default$1());
					this.modalLoading.$el.show();
					this.modalContent.$el.hide();
				}
			},
			{
				key: "hideLoadingView",
				value: function hideLoadingView() {
					this.modalContent.$el.show();
					this.modalLoading.$el.hide();
				}
			},
			{
				key: "showLogo",
				value: function showLogo() {
					this.getHeaderView().logoArea.show(new _default$2(this.getLogoOptions()));
				}
			}
		]);
	}(Marionette.LayoutView);

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
			_this = _callSuper$9(this, CommandInfra, [args]);
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
	/**
	* @name $e.modules.CommandBase
	*/
	var CommandBase = /*#__PURE__*/ function(_CommandInfra) {
		function CommandBase() {
			_classCallCheck(this, CommandBase);
			return _callSuper$8(this, CommandBase, arguments);
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
	/**
	* To support pure callbacks in the API(commands.js), to ensure they have registered with the proper context.
	*/
	var CommandCallbackBase = /*#__PURE__*/ function(_CommandBase) {
		function CommandCallbackBase() {
			_classCallCheck(this, CommandCallbackBase);
			return _callSuper$7(this, CommandCallbackBase, arguments);
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
//#region modules/web-cli/assets/js/utils/force-method-implementation.js
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
	var ForceMethodImplementation = /*#__PURE__*/ function(_Error) {
		function ForceMethodImplementation() {
			var _this;
			var info = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			_classCallCheck(this, ForceMethodImplementation);
			_this = _callSuper$6(this, ForceMethodImplementation, ["".concat(info.isStatic ? "static " : "").concat(info.fullName, "() should be implemented, please provide '").concat(info.functionName || info.fullName, "' functionality.")]);
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
	* @typedef {import('./command-infra')} CommandInfra
	* @typedef {import('./hook-base')} HookBase
	* @typedef {import('../core/states/ui-state-base')} UiStateBase
	*/
	var ComponentBase = /*#__PURE__*/ function(_Module) {
		function ComponentBase() {
			_classCallCheck(this, ComponentBase);
			return _callSuper$5(this, ComponentBase, arguments);
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
								return _callSuper$5(this, context, arguments);
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
					var slice = (0, _reduxjs_toolkit.createSlice)(_objectSpread(_objectSpread({}, stateConfig), {}, { name: id }));
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
//#region modules/web-cli/assets/js/modules/commands/close.js
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
	var Close = /*#__PURE__*/ function(_CommandBase) {
		function Close() {
			_classCallCheck(this, Close);
			return _callSuper$4(this, Close, arguments);
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
	var Open = /*#__PURE__*/ function(_CommandBase) {
		function Open() {
			_classCallCheck(this, Open);
			return _callSuper$3(this, Open, arguments);
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
	var Toggle = /*#__PURE__*/ function(_CommandBase) {
		function Toggle() {
			_classCallCheck(this, Toggle);
			return _callSuper$2(this, Toggle, arguments);
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
	function _superPropGet(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	var ComponentModalBase = /*#__PURE__*/ function(_ComponentBase) {
		function ComponentModalBase() {
			_classCallCheck(this, ComponentModalBase);
			return _callSuper$1(this, ComponentModalBase, arguments);
		}
		_inherits(ComponentModalBase, _ComponentBase);
		return _createClass(ComponentModalBase, [
			{
				key: "registerAPI",
				value: function registerAPI() {
					var _this = this;
					_superPropGet(ComponentModalBase, "registerAPI", this, 3)([]);
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
					if (!_superPropGet(ComponentModalBase, "close", this, 3)([])) return false;
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
//#region modules/web-cli/assets/js/modules/hook-break.js
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
	var HookBreak = /*#__PURE__*/ function(_Error) {
		function HookBreak() {
			_classCallCheck(this, HookBreak);
			return _callSuper(this, HookBreak, ["HookBreak"]);
		}
		_inherits(HookBreak, _Error);
		return _createClass(HookBreak);
	}(/*#__PURE__*/ _wrapNativeSuper(Error));

//#endregion
//#region core/common/assets/js/modules.js
	modules_default.common = {
		/**
		* @deprecated since 2.9.0, use `$e.modules.ComponentBase` instead.
		*/
		get Component() {
			setTimeout(function() {
				elementorDevTools.deprecation.deprecated("elementorModules.common.Component", "2.9.0", "$e.modules.ComponentBase");
			}, 2e3);
			return ComponentBase;
		},
		/**
		* @deprecated since 2.9.0, use `$e.modules.ComponentModalBase` instead.
		*/
		get ComponentModal() {
			setTimeout(function() {
				elementorDevTools.deprecation.deprecated("elementorModules.common.ComponentModal", "2.9.0", "$e.modules.ComponentModalBase");
			}, 2e3);
			return ComponentModalBase;
		},
		/**
		* @deprecated since 2.9.0, use `$e.modules.HookBreak` instead.
		*/
		get HookBreak() {
			setTimeout(function() {
				elementorDevTools.deprecation.deprecated("elementorModules.common.HookBreak", "2.9.0", "$e.modules.HookBreak");
			}, 2e3);
			return HookBreak;
		},
		views: { modal: { Layout: _default } }
	};

//#endregion
})(elementorVendors.reduxToolkit);
//# sourceMappingURL=common-modules.js.map