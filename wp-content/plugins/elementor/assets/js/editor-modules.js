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

//#region assets/dev/js/editor/utils/module.js
	var require_module = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var EditorModule = elementorModules.Module.extend({
			onInit: function onInit() {
				var _this = this;
				var $window = jQuery(window);
				$window.on("elementor:init-components", this.onElementorInitComponents.bind(this));
				$window.on("elementor:loaded", function() {
					_this.onElementorLoaded();
					elementor.on("document:loaded", _this.onDocumentLoaded.bind(_this));
				});
				$window.on("elementor:init", this.onElementorReady);
			},
			getEditorControlView: function getEditorControlView(name) {
				var _this$getEditorContro;
				return elementor.getPanelView().getCurrentPageView().children.findByModelCid((_this$getEditorContro = this.getEditorControlModel(name)) === null || _this$getEditorContro === void 0 ? void 0 : _this$getEditorContro.cid);
			},
			getEditorControlModel: function getEditorControlModel(name) {
				return elementor.getPanelView().getCurrentPageView().collection.findWhere({ name });
			},
			onElementorReady: function onElementorReady() {
				this.onElementorInit();
				elementor.on("frontend:init", this.onElementorFrontendInit.bind(this)).on("preview:loaded", this.onElementorPreviewLoaded.bind(this));
			}
		});
		EditorModule.prototype.onElementorLoaded = function() {};
		EditorModule.prototype.onElementorInit = function() {};
		EditorModule.prototype.onElementorPreviewLoaded = function() {};
		EditorModule.prototype.onDocumentLoaded = function() {};
		EditorModule.prototype.onElementorFrontendInit = function() {};
		EditorModule.prototype.onElementorInitComponents = function() {};
		module.exports = EditorModule;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var import_module = /* @__PURE__ */ __toESM(require_module());
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
//#region assets/dev/js/utils/introduction.js
	var import_regenerator = /* @__PURE__ */ __toESM(require_regenerator());
	function _callSuper$3(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$4() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$3, "_callSuper");
	function _isNativeReflectConstruct$4() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$4 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$4, "_isNativeReflectConstruct");
	var _default = /*#__PURE__*/ function(_elementorModules$Mod) {
		function _default() {
			var _this;
			_classCallCheck(this, _default);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _callSuper$3(this, _default, [].concat(args));
			_defineProperty(_this, "introductionMap", null);
			_this.initDialog();
			return _this;
		}
		_inherits(_default, _elementorModules$Mod);
		return _createClass(_default, [
			{
				key: "setIntroductionMap",
				value: function setIntroductionMap(map) {
					this.introductionMap = map;
				}
			},
			{
				key: "getIntroductionMap",
				value: function getIntroductionMap() {
					return this.introductionMap || elementor.config.user.introduction;
				}
			},
			{
				key: "getDefaultSettings",
				value: function getDefaultSettings() {
					return {
						dialogType: "buttons",
						dialogOptions: {
							effects: {
								hide: "hide",
								show: "show"
							},
							hide: { onBackgroundClick: false }
						}
					};
				}
			},
			{
				key: "initDialog",
				value: function initDialog() {
					var _this2 = this;
					var dialog;
					this.getDialog = function() {
						if (!dialog) {
							var settings = _this2.getSettings();
							dialog = elementorCommon.dialogsManager.createWidget(settings.dialogType, settings.dialogOptions);
							if (settings.onDialogInitCallback) settings.onDialogInitCallback.call(_this2, dialog);
						}
						return dialog;
					};
				}
			},
			{
				key: "show",
				value: function show(target) {
					if (this.introductionViewed) return;
					var dialog = this.getDialog();
					if (target) dialog.setSettings("position", { of: target });
					dialog.show();
				}
			},
			{
				key: "introductionViewed",
				get: function get() {
					var introductionKey = this.getSettings("introductionKey");
					return this.getIntroductionMap()[introductionKey];
				},
				set: function set(isViewed) {
					var introductionKey = this.getSettings("introductionKey");
					this.getIntroductionMap()[introductionKey] = isViewed;
				}
			},
			{
				key: "setViewed",
				value: function() {
					var _setViewed = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
						var _this3 = this;
						return import_regenerator.default.wrap(function(_context) {
							while (1) switch (_context.prev = _context.next) {
								case 0:
									this.introductionViewed = true;
									return _context.abrupt("return", new Promise(function(resolve, reject) {
										elementorCommon.ajax.addRequest("introduction_viewed", {
											data: { introductionKey: _this3.getSettings("introductionKey") },
											success: resolve,
											error: reject
										});
									}));
								case 1:
								case "end": return _context.stop();
							}
						}, _callee, this);
					}));
					function setViewed() {
						return _setViewed.apply(this, arguments);
					}
					return setViewed;
				}()
			}
		]);
	}(elementorModules.Module);

//#endregion
//#region assets/dev/js/editor/views/controls-popover.js
	var ControlsPopover = /*#__PURE__*/ function() {
		function ControlsPopover(child) {
			_classCallCheck(this, ControlsPopover);
			this.child = child;
			this.$popover = jQuery("<div>", { class: "elementor-controls-popover" });
			child.$el.before(this.$popover);
			this.$popover.append(child.$el);
			this.popoverToggleView = child._parent.children.findByIndex(child._index - 1);
			if ("typography" === this.child.model.attributes.groupType) this.createPopoverHeader();
		}
		return _createClass(ControlsPopover, [
			{
				key: "addChild",
				value: function addChild(child) {
					this.$popover.append(child.$el);
				}
			},
			{
				key: "createPopoverHeader",
				value: function createPopoverHeader() {
					var _this = this;
					var $resetLabel = this.$popover.prev().find(".elementor-control-popover-toggle-reset-label");
					this.$popoverHeader = jQuery("<div>", { class: "e-group-control-header" }).html("<span>" + (0, _wordpress_i18n.__)("Typography", "elementor") + "</span>");
					this.$headerControlsWrapper = jQuery("<div>", { class: "e-control-tools" });
					$resetLabel.addClass("e-control-tool").on("click", function() {
						return _this.onResetButtonClick();
					});
					this.$headerControlsWrapper.append($resetLabel);
					this.$popoverHeader.append(this.$headerControlsWrapper);
					var globalConfig = this.popoverToggleView.model.get("global");
					if (globalConfig !== null && globalConfig !== void 0 && globalConfig.active) this.createAddButton();
					this.$popover.prepend(this.$popoverHeader).addClass("e-controls-popover--typography");
				}
			},
			{
				key: "onResetButtonClick",
				value: function onResetButtonClick() {
					this.$popover.hide();
					this.$popover.trigger("hide");
					var groupControlName = this.child.model.get("groupPrefix") + "typography";
					var args = {
						container: this.child.options.container,
						settings: _defineProperty({}, groupControlName, "")
					};
					if (this.child.options.container.globals.get(groupControlName)) $e.run("document/globals/disable", args);
					else $e.run("document/elements/settings", args);
				}
			},
			{
				key: "onAddButtonClick",
				value: function onAddButtonClick() {
					this.popoverToggleView.onAddGlobalButtonClick();
				}
			},
			{
				key: "createAddButton",
				value: function createAddButton() {
					var _this2 = this;
					this.$addButton = jQuery("<button>", { class: "e-control-tool" }).html(jQuery("<i>", { class: "eicon-plus" }));
					this.$headerControlsWrapper.append(this.$addButton);
					this.$addButton.on("click", function() {
						return _this2.onAddButtonClick();
					});
					this.$addButton.tipsy({
						title: function title() {
							return (0, _wordpress_i18n.__)("Create New Global Font", "elementor");
						},
						gravity: function gravity() {
							return "s";
						}
					});
				}
			},
			{
				key: "destroy",
				value: function destroy() {
					this.$popover.remove();
				}
			}
		]);
	}();

//#endregion
//#region assets/dev/js/editor/elements/views/behaviors/inner-tabs.js
	var require_inner_tabs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var InnerTabsBehavior = Marionette.Behavior.extend({
			onRenderCollection: function onRenderCollection() {
				this.handleInnerTabs(this.view);
			},
			handleInnerTabs: function handleInnerTabs(parent) {
				var closedClass = "e-tab-close";
				var activeClass = "e-tab-active";
				var tabsWrappers = parent.children.filter(function(view) {
					return "tabs" === view.model.get("type");
				});
				_.each(tabsWrappers, function(view) {
					view.$el.find(".elementor-control-content").remove();
					var tabsId = view.model.get("name");
					var tabs = parent.children.filter(function(childView) {
						return "tab" === childView.model.get("type") && childView.model.get("tabs_wrapper") === tabsId;
					});
					_.each(tabs, function(childView, index) {
						view._addChildView(childView);
						var tabId = childView.model.get("name");
						var controlsUnderTab = parent.children.filter(function(controlView) {
							return tabId === controlView.model.get("inner_tab");
						});
						if (0 === index) childView.$el.addClass(activeClass);
						else _.each(controlsUnderTab, function(controlView) {
							controlView.$el.addClass(closedClass);
						});
					});
				});
			},
			onChildviewControlTabClicked: function onChildviewControlTabClicked(childView) {
				var closedClass = "e-tab-close";
				var activeClass = "e-tab-active";
				var tabClicked = childView.model.get("name");
				var childrenUnderTab = this.view.children.filter(function(view) {
					return "tab" !== view.model.get("type") && childView.model.get("tabs_wrapper") === view.model.get("tabs_wrapper");
				});
				var siblingTabs = this.view.children.filter(function(view) {
					return "tab" === view.model.get("type") && childView.model.get("tabs_wrapper") === view.model.get("tabs_wrapper");
				});
				_.each(siblingTabs, function(view) {
					view.$el.removeClass(activeClass);
				});
				childView.$el.addClass(activeClass);
				_.each(childrenUnderTab, function(view) {
					if (view.model.get("inner_tab") === tabClicked) view.$el.removeClass(closedClass);
					else view.$el.addClass(closedClass);
				});
				elementor.getPanelView().updateScrollbar();
			}
		});
		module.exports = InnerTabsBehavior;
	}));

//#endregion
//#region assets/dev/js/editor/views/controls-stack.js
	var ControlsStack = Marionette.CompositeView.extend({
		classes: { popover: "elementor-controls-popover" },
		activeTab: null,
		activeSection: null,
		className: function className() {
			return "elementor-controls-stack";
		},
		templateHelpers: function templateHelpers() {
			return { elementData: elementor.getElementData(this.model) };
		},
		childViewOptions: function childViewOptions() {
			return { elementSettingsModel: this.model };
		},
		ui: function ui() {
			return {
				tabs: ".elementor-panel-navigation-tab",
				reloadButton: ".elementor-update-preview-button"
			};
		},
		events: function events() {
			return { "click @ui.reloadButton": "onReloadButtonClick" };
		},
		modelEvents: { destroy: "onModelDestroy" },
		behaviors: { HandleInnerTabs: { behaviorClass: require_inner_tabs() } },
		initialize: function initialize(options) {
			this.initCollection();
			if (options.tab) {
				this.activeTab = options.tab;
				this.activateFirstSection();
			}
			this.listenTo(elementor.channels.deviceMode, "change", this.onDeviceModeChange);
		},
		onDestroy: function onDestroy() {
			this.stopListening(elementor.channels.deviceMode, "change", this.onDeviceModeChange);
		},
		initCollection: function initCollection() {
			this.collection = new Backbone.Collection(_.values(elementor.mergeControlsSettings(this.getOption("controls"))));
		},
		filter: function filter(controlModel) {
			if (controlModel.get("tab") !== this.activeTab) return false;
			if ("section" === controlModel.get("type")) return true;
			var section = controlModel.get("section");
			return !section || section === this.activeSection;
		},
		getControlViewByModel: function getControlViewByModel(model) {
			return this.children.findByModelCid(model.cid);
		},
		getControlViewByName: function getControlViewByName(name) {
			return this.getControlViewByModel(this.getControlModel(name));
		},
		getControlModel: function getControlModel(name) {
			return this.collection.findWhere({ name });
		},
		isVisibleSectionControl: function isVisibleSectionControl(sectionControlModel) {
			return this.activeTab === sectionControlModel.get("tab");
		},
		activateTab: function activateTab(tab) {
			this.activeTab = tab;
			this.activateFirstSection();
			this._renderChildren();
			return this;
		},
		activateSection: function activateSection(sectionName) {
			this.activeSection = sectionName;
			return this;
		},
		activateFirstSection: function activateFirstSection() {
			var self = this;
			var sectionControls = self.collection.filter(function(controlModel) {
				return "section" === controlModel.get("type") && self.isVisibleSectionControl(controlModel);
			});
			var sectionToActivate;
			if (!sectionControls[0]) {
				self.activeSection = null;
				sectionToActivate = null;
			} else sectionToActivate = sectionControls[0].get("name");
			if (sectionControls.filter(function(controlModel) {
				return self.activeSection === controlModel.get("name");
			})[0]) return;
			self.activateSection(sectionToActivate);
			return this;
		},
		getChildView: function getChildView(item) {
			var controlType = item.get("type");
			return elementor.getControlView(controlType);
		},
		getNamespaceArray: function getNamespaceArray() {
			return [elementor.getPanelView().getCurrentPageName()];
		},
		openActiveSection: function openActiveSection() {
			var activeSection = this.activeSection;
			var activeSectionView = this.children.filter(function(view) {
				return activeSection === view.model.get("name");
			});
			if (activeSectionView[0]) {
				activeSectionView[0].$el.addClass("e-open");
				var eventNamespace = this.getNamespaceArray();
				eventNamespace.push(activeSection, "activated");
				elementor.channels.editor.trigger(eventNamespace.join(":"), this);
			}
		},
		onRenderCollection: function onRenderCollection() {
			this.openActiveSection();
			ControlsStack.handlePopovers(this);
		},
		onModelDestroy: function onModelDestroy() {
			this.destroy();
		},
		onReloadButtonClick: function onReloadButtonClick() {
			elementor.reloadPreview();
		},
		onDeviceModeChange: function onDeviceModeChange() {
			if ("desktop" === elementor.channels.deviceMode.request("currentMode")) this.$el.removeClass("elementor-responsive-switchers-open");
		},
		onChildviewControlSectionClicked: function onChildviewControlSectionClicked(childView) {
			var isSectionOpen = childView.$el.hasClass("e-open");
			this.activateSection(isSectionOpen ? null : childView.model.get("name"));
			this._renderChildren();
		},
		onChildviewResponsiveSwitcherClick: function onChildviewResponsiveSwitcherClick(childView, device) {
			if ("desktop" === device) this.$el.toggleClass("elementor-responsive-switchers-open");
		}
	}, {
		handlePopovers: function handlePopovers(view) {
			var popover;
			this.removePopovers(view);
			view.popovers = [];
			view.children.each(function(control) {
				if (popover) popover.addChild(control);
				var popoverData = control.model.get("popover");
				if (!popoverData) return;
				if (popoverData.start) {
					popover = new ControlsPopover(control);
					view.popovers.push(popover);
				}
				if (popoverData.end) popover = null;
			});
		},
		removePopovers: function removePopovers(view) {
			var _view$popovers;
			(_view$popovers = view.popovers) === null || _view$popovers === void 0 || _view$popovers.forEach(function(popover) {
				return popover.destroy();
			});
		}
	});

//#endregion
//#region assets/dev/js/editor/elements/models/base-settings.js
	var require_base_settings = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_typeof();
		var BaseSettingsModel = Backbone.Model.extend({
			options: {},
			initialize: function initialize(data, options) {
				var self = this;
				self.options = options;
				self.controls = elementor.mergeControlsSettings(options.controls);
				self.validators = {};
				if (!self.controls) return;
				var attrs = data || {};
				var defaults = {};
				_.each(self.controls, function(control) {
					if (control.features && -1 !== control.features.indexOf("ui")) return;
					var controlName = control.name;
					if ("object" === _typeof(control.default)) defaults[controlName] = structuredClone(control.default);
					else defaults[controlName] = control.default;
					var isDynamicControl = control.dynamic && control.dynamic.active;
					var hasDynamicSettings = isDynamicControl && attrs.__dynamic__ && attrs.__dynamic__[controlName];
					if (isDynamicControl && !hasDynamicSettings && control.dynamic.default) {
						if (!attrs.__dynamic__) attrs.__dynamic__ = {};
						attrs.__dynamic__[controlName] = control.dynamic.default;
						hasDynamicSettings = true;
					}
					var isMultipleControl = jQuery.isPlainObject(control.default);
					if (void 0 !== attrs[controlName] && isMultipleControl && !_.isObject(attrs[controlName]) && !hasDynamicSettings) {
						elementorCommon.debug.addCustomError(/* @__PURE__ */ new TypeError("An invalid argument supplied as multiple control value"), "InvalidElementData", "Element `" + (self.get("widgetType") || self.get("elType")) + "` got <" + attrs[controlName] + "> as `" + controlName + "` value. Expected array or object.");
						delete attrs[controlName];
					}
					if (void 0 === attrs[controlName]) attrs[controlName] = defaults[controlName];
				});
				self.defaults = defaults;
				self.handleRepeaterData(attrs);
				self.set(attrs);
			},
			convertRepeaterValueToCollection: function convertRepeaterValueToCollection(attrs, repeaterControl) {
				return new Backbone.Collection(attrs[repeaterControl.name], { model: function model(attributes, options) {
					options = options || {};
					options.controls = {};
					Object.values(repeaterControl.fields).forEach(function(item) {
						options.controls[item.name] = item;
					});
					if (!attributes._id) attributes._id = elementorCommon.helpers.getUniqueId();
					return new BaseSettingsModel(attributes, options);
				} });
			},
			handleRepeaterData: function handleRepeaterData(attrs) {
				var self = this;
				_.each(this.controls, function(field) {
					if (field.is_repeater) {
						if (!(attrs[field.name] instanceof Backbone.Collection)) attrs[field.name] = self.convertRepeaterValueToCollection(attrs, field);
					}
				});
			},
			getFontControls: function getFontControls() {
				return this.getControlsByType("font");
			},
			getIconsControls: function getIconsControls() {
				return this.getControlsByType("icons");
			},
			getControlsByType: function getControlsByType(type) {
				return _.filter(this.getActiveControls(), function(control) {
					return type === control.type;
				});
			},
			getStyleControls: function getStyleControls(controls, attributes) {
				var self = this;
				controls = structuredClone(self.getActiveControls(controls, attributes));
				var styleControls = [];
				jQuery.each(controls, function() {
					var _control$dynamic;
					var control = this;
					var controlDefaultSettings = elementor.config.controls[control.type];
					control = jQuery.extend({}, controlDefaultSettings, control);
					if (control.fields) {
						var styleFields = [];
						if (!(self.attributes[control.name] instanceof Backbone.Collection)) self.attributes[control.name] = self.convertRepeaterValueToCollection(self.attributes, control);
						self.attributes[control.name].each(function(item) {
							styleFields.push(self.getStyleControls(control.fields, item.attributes));
						});
						control.styleFields = styleFields;
					}
					if (control.fields || (_control$dynamic = control.dynamic) !== null && _control$dynamic !== void 0 && _control$dynamic.active || self.isGlobalControl(control, controls) || self.isStyleControl(control.name, controls)) styleControls.push(control);
				});
				return styleControls;
			},
			isGlobalControl: function isGlobalControl(control, controls) {
				var _globalControl$global;
				var _this$attributes$__gl;
				var controlGlobalKey = control.name;
				if (control.groupType) controlGlobalKey = control.groupPrefix + control.groupType;
				var globalControl = controls[controlGlobalKey];
				if (!(globalControl !== null && globalControl !== void 0 && (_globalControl$global = globalControl.global) !== null && _globalControl$global !== void 0 && _globalControl$global.active)) return false;
				return !!((_this$attributes$__gl = this.attributes.__globals__) === null || _this$attributes$__gl === void 0 ? void 0 : _this$attributes$__gl[controlGlobalKey]);
			},
			isStyleControl: function isStyleControl(attribute, controls) {
				controls = controls || this.controls;
				var currentControl = _.find(controls, function(control) {
					return attribute === control.name;
				});
				return currentControl && !_.isEmpty(currentControl.selectors);
			},
			getClassControls: function getClassControls(controls) {
				controls = controls || this.controls;
				return _.filter(controls, function(control) {
					return !_.isUndefined(control.prefix_class);
				});
			},
			isClassControl: function isClassControl(attribute) {
				var currentControl = _.find(this.controls, function(control) {
					return attribute === control.name;
				});
				return currentControl && !_.isUndefined(currentControl.prefix_class);
			},
			getControl: function getControl(id) {
				return _.find(this.controls, function(control) {
					return id === control.name;
				});
			},
			getActiveControls: function getActiveControls(controls, attributes) {
				var activeControls = {};
				if (!controls) controls = this.controls;
				if (!attributes) attributes = this.attributes;
				attributes = this.parseGlobalSettings(attributes, controls);
				jQuery.each(controls, function(controlKey, control) {
					if (elementor.helpers.isActiveControl(control, attributes, controls)) activeControls[controlKey] = control;
				});
				return activeControls;
			},
			clone: function clone() {
				return new BaseSettingsModel(elementorCommon.helpers.cloneObject(this.attributes), elementorCommon.helpers.cloneObject(this.options));
			},
			setExternalChange: function setExternalChange(key, value) {
				var self = this;
				var settingsToChange;
				if ("object" === _typeof(key)) settingsToChange = key;
				else {
					settingsToChange = {};
					settingsToChange[key] = value;
				}
				self.set(settingsToChange);
				jQuery.each(settingsToChange, function(changedKey, changedValue) {
					self.trigger("change:external:" + changedKey, changedValue);
				});
			},
			parseDynamicSettings: function parseDynamicSettings(settings, options, controls) {
				var self = this;
				settings = elementorCommon.helpers.cloneObject(settings || self.attributes);
				options = options || {};
				controls = controls || this.controls;
				jQuery.each(controls, function() {
					var control = this;
					var valueToParse;
					if (control.is_repeater) {
						valueToParse = settings[control.name];
						valueToParse.forEach(function(value, key) {
							valueToParse[key] = self.parseDynamicSettings(value, options, control.fields);
						});
						return;
					}
					valueToParse = settings.__dynamic__ && settings.__dynamic__[control.name];
					if (!valueToParse) return;
					var dynamicSettings = control.dynamic;
					if (void 0 === dynamicSettings) dynamicSettings = elementor.config.controls[control.type].dynamic;
					if (!dynamicSettings || !dynamicSettings.active) return;
					var dynamicValue;
					try {
						dynamicValue = elementor.dynamicTags.parseTagsText(valueToParse, dynamicSettings, elementor.dynamicTags.getTagDataContent);
					} catch (error) {
						if (elementor.dynamicTags.CACHE_KEY_NOT_FOUND_ERROR !== error.message) throw error;
						dynamicValue = "";
						if (options.onServerRequestStart) options.onServerRequestStart();
						elementor.dynamicTags.refreshCacheFromServer(function() {
							if (options.onServerRequestEnd) options.onServerRequestEnd();
						});
					}
					if (dynamicSettings.property) settings[control.name][dynamicSettings.property] = dynamicValue;
					else settings[control.name] = dynamicValue;
				});
				return settings;
			},
			parseGlobalSettings: function parseGlobalSettings(settings, controls) {
				var _this = this;
				settings = elementorCommon.helpers.cloneObject(settings);
				controls = controls || this.controls;
				jQuery.each(controls, function(index, control) {
					var _settings$__globals__;
					var _globalSettings;
					var valueToParse;
					if (control.is_repeater) {
						valueToParse = settings[control.name];
						valueToParse.forEach(function(value, key) {
							valueToParse[key] = _this.parseGlobalSettings(value, control.fields);
						});
						return;
					}
					valueToParse = (_settings$__globals__ = settings.__globals__) === null || _settings$__globals__ === void 0 ? void 0 : _settings$__globals__[control.name];
					if (!valueToParse) return;
					var globalSettings = control.global;
					if (void 0 === globalSettings) globalSettings = elementor.config.controls[control.type].global;
					if (!((_globalSettings = globalSettings) !== null && _globalSettings !== void 0 && _globalSettings.active)) return;
					var _$e$data$commandExtra = $e.data.commandExtractArgs(valueToParse);
					var command = _$e$data$commandExtra.command;
					var args = _$e$data$commandExtra.args;
					var globalValue = $e.data.getCache($e.components.get("globals"), command, args.query);
					if (control.groupType) settings[control.name] = "custom";
					else settings[control.name] = globalValue;
				});
				return settings;
			},
			removeDataDefaults: function removeDataDefaults(data, controls) {
				var _this2 = this;
				jQuery.each(data, function(key) {
					var control = controls[key];
					if (!control) return;
					if (control.save_default || ("text" === control.type || "textarea" === control.type) && data[key]) return;
					if (control.is_repeater) {
						data[key].forEach(function(repeaterRow) {
							_this2.removeDataDefaults(repeaterRow, control.fields);
						});
						return;
					}
					if (_.isEqual(data[key], control.default)) delete data[key];
				});
			},
			toJSON: function toJSON(options) {
				var data = Backbone.Model.prototype.toJSON.call(this);
				options = options || {};
				delete data.widgetType;
				delete data.elType;
				delete data.isInner;
				_.each(data, function(attribute, key) {
					if (attribute && attribute.toJSON) data[key] = attribute.toJSON();
				});
				if (options.remove && -1 !== options.remove.indexOf("default")) this.removeDataDefaults(data, this.controls);
				return structuredClone(data);
			}
		});
		/**
		* @name BaseSettingsModel
		*/
		module.exports = BaseSettingsModel;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var import_base_settings = /* @__PURE__ */ __toESM(require_base_settings());
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
	function _superPropGet(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
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
				var result = _superPropGet(InstanceType, Symbol.hasInstance, this, 2)([target]);
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
	function _callSuper$2(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$3() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$2, "_callSuper");
	function _isNativeReflectConstruct$3() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$3 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$3, "_isNativeReflectConstruct");
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
			_this = _callSuper$2(this, ArgsObject);
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
//#region assets/dev/js/editor/container/panel.js
/**
	* @typedef {import('./container')} Container
	*/
	var Panel = /*#__PURE__*/ function() {
		/**
		* Function constructor().
		*
		* Create constructor panel.
		*
		* @param {Container} container
		*/
		function Panel(container) {
			_classCallCheck(this, Panel);
			this.container = container;
		}
		/**
		* Function refresh().
		*
		* Refresh the panel.
		*/
		return _createClass(Panel, [
			{
				key: "refresh",
				value: function refresh() {
					if ($e.routes.isPartOf("panel/editor")) $e.routes.refreshContainer("panel");
				}
			},
			{
				key: "closeEditor",
				value: function closeEditor() {
					$e.route("panel/elements/categories");
				}
			},
			{
				key: "getControlView",
				value: function getControlView(name) {
					return elementor.getPanelView().getCurrentPageView().children.findByModelCid(this.getControlModel(name).cid);
				}
			},
			{
				key: "getControlModel",
				value: function getControlModel(name) {
					return elementor.getPanelView().getCurrentPageView().collection.findWhere({ name });
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
	function _isNativeReflectConstruct$2() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$2, "_isNativeReflectConstruct");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/construct.js
	function _construct(t, e, r) {
		if (_isNativeReflectConstruct$2()) return Reflect.construct.apply(null, arguments);
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
//#region assets/dev/js/editor/container/model/children-array.js
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
	/**
	* @typedef {import('../container')} Container
	*/
	var ChildrenArray = /*#__PURE__*/ function(_Array) {
		function ChildrenArray() {
			_classCallCheck(this, ChildrenArray);
			return _callSuper$1(this, ChildrenArray, arguments);
		}
		_inherits(ChildrenArray, _Array);
		return _createClass(ChildrenArray, [
			{
				key: "clear",
				value: function clear() {
					this.length = 0;
				}
			},
			{
				key: "findRecursive",
				value: function findRecursive(callback) {
					var _iterator = _createForOfIteratorHelper(this);
					var _step;
					try {
						for (_iterator.s(); !(_step = _iterator.n()).done;) {
							var container = _step.value;
							if (callback(container)) return container;
							if (container.children.length) {
								var foundChildren = container.children.findRecursive(callback);
								if (foundChildren) return foundChildren;
							}
						}
					} catch (err) {
						_iterator.e(err);
					} finally {
						_iterator.f();
					}
					return false;
				}
			},
			{
				key: "forEachRecursive",
				value: function forEachRecursive(callback) {
					var _iterator2 = _createForOfIteratorHelper(this);
					var _step2;
					try {
						for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
							var container = _step2.value;
							callback(container);
							if (container.children.length) container.children.forEachRecursive(callback);
						}
					} catch (err) {
						_iterator2.e(err);
					} finally {
						_iterator2.f();
					}
				}
			},
			{
				key: "someRecursive",
				value: function someRecursive(callback) {
					var _iterator3 = _createForOfIteratorHelper(this);
					var _step3;
					try {
						for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
							var _container$children;
							var container = _step3.value;
							if (callback(container)) return true;
							if ((_container$children = container.children) !== null && _container$children !== void 0 && _container$children.length) {
								if (container.children.someRecursive(callback)) return true;
							}
						}
					} catch (err) {
						_iterator3.e(err);
					} finally {
						_iterator3.f();
					}
					return false;
				}
			}
		]);
	}(/*#__PURE__*/ _wrapNativeSuper(Array));

//#endregion
//#region assets/dev/js/editor/container/container.js
	init_typeof();
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
	/**
	* @typedef {import('../../../../lib/backbone/backbone.marionette')} Backbone
	* @typedef {import('../../../../lib/backbone/backbone.marionette')} Marionette
	* @typedef {import('../elements/views/base')} BaseElementView
	* @typedef {import('../elements/views/section')} SectionView
	* @typedef {import('../views/base-container')} BaseContainer
	* @typedef {import('../elements/models/base-element-model')} BaseElementModel
	*/
	/**
	* TODO: ViewsOptions
	*
	* @typedef {(Marionette.View|Marionette.CompositeView|BaseElementView|SectionView|BaseContainer)} ViewsOptions
	*/
	var Container = /*#__PURE__*/ function(_ArgsObject) {
		/**
		* Function constructor().
		*
		* Create container.
		*
		* @param {{}} args
		*
		* @throws {Error}
		*/
		function Container(args) {
			var _this;
			_classCallCheck(this, Container);
			_this = _callSuper(this, Container, [args]);
			/**
			* Container type.
			*
			* @type {string}
			*/
			_defineProperty(_this, "type", void 0);
			/**
			* Container id.
			*
			* @type {string}
			*/
			_defineProperty(_this, "id", void 0);
			/**
			* Document Object.
			*
			* @type  {{}}
			*/
			_defineProperty(_this, "document", void 0);
			/**
			* Container model.
			*
			* @type {(Backbone.Model|BaseElementModel)}
			*/
			_defineProperty(_this, "model", void 0);
			/**
			* Container settings.
			*
			* @type {Backbone.Model}
			*/
			_defineProperty(_this, "settings", void 0);
			/**
			* Container view.
			*
			* @type {ViewsOptions}
			*/
			_defineProperty(_this, "view", void 0);
			/**
			* Container parent.
			*
			* @type {Container}
			*/
			_defineProperty(_this, "parent", void 0);
			/**
			* Container children(s).
			*
			* @type {ChildrenArray}
			*/
			_defineProperty(_this, "children", new ChildrenArray());
			/**
			* Container dynamic.
			*
			* @type {Backbone.Model}
			*/
			_defineProperty(_this, "dynamic", void 0);
			/**
			* Container globals.
			*
			* @type {Backbone.Model}
			*/
			_defineProperty(_this, "globals", void 0);
			/**
			* Container label.
			*
			* @type {string}
			*/
			_defineProperty(_this, "label", void 0);
			/**
			* Container controls.
			*
			* @type {{}}
			*/
			_defineProperty(_this, "controls", {});
			/**
			* Repeaters containers
			*
			* @type {{}}
			*/
			_defineProperty(_this, "repeaters", {});
			/**
			* Container renderer (The one who render).
			*
			* @type {Container}
			*/
			_defineProperty(_this, "renderer", void 0);
			/**
			* Container panel.
			*
			* @type {Panel}
			*/
			_defineProperty(_this, "panel", void 0);
			/**
			* Controls placeholders.
			*
			* @type {{}}
			*/
			_defineProperty(_this, "placeholders", {});
			_this.validateArgs(args);
			args = Object.entries(args);
			if (0 === args.length) throw Error("Container cannot be empty.");
			args.forEach(function(_ref) {
				var _ref2 = _slicedToArray(_ref, 2);
				var key = _ref2[0];
				var value = _ref2[1];
				_this[key] = "undefined" === typeof value ? _this[key] : value;
			});
			if ("undefined" === typeof _this.renderer) _this.renderer = _this;
			if (!_this.document) _this.document = elementor.documents.getCurrent();
			_this.dynamic = new Backbone.Model(_this.settings.get("__dynamic__"));
			_this.globals = new Backbone.Model(_this.settings.get("__globals__"));
			_this.panel = new Panel(_this);
			_this.initialize();
			return _this;
		}
		_inherits(Container, _ArgsObject);
		return _createClass(Container, [
			{
				key: "initialize",
				value: function initialize() {
					if (this.isViewElement()) {
						this.addToParent();
						this.handleChildrenRecursive();
						this.view.on("destroy", this.removeFromParent.bind(this));
					}
					this.handleRepeaterChildren();
				}
			},
			{
				key: "validateArgs",
				value: function validateArgs(args) {
					this.requireArgumentType("type", "string", args);
					this.requireArgumentType("id", "string", args);
					this.requireArgumentInstance("settings", Backbone.Model, args);
					this.requireArgumentInstance("model", Backbone.Model, args);
					if (false !== args.parent) this.requireArgumentInstance("parent", elementorModules.editor.Container, args);
				}
			},
			{
				key: "getGroupRelatedControls",
				value: function getGroupRelatedControls(settings) {
					var _this2 = this;
					var result = {};
					Object.keys(settings).forEach(function(settingKey) {
						Object.values(_this2.controls).forEach(function(control) {
							var _this2$controls$setti;
							if (settingKey === control.name) result[control.name] = control;
							else if ((_this2$controls$setti = _this2.controls[settingKey]) !== null && _this2$controls$setti !== void 0 && _this2$controls$setti.groupPrefix) {
								var groupPrefix = _this2.controls[settingKey].groupPrefix;
								if (control.name.toString().startsWith(groupPrefix)) result[control.name] = control;
							}
						});
					});
					return result;
				}
			},
			{
				key: "getAffectingControls",
				value: function getAffectingControls() {
					var _this3 = this;
					var result = {};
					var activeControls = this.settings.getActiveControls();
					Object.entries(activeControls).forEach(function(_ref3) {
						var _ref4 = _slicedToArray(_ref3, 2);
						var controlName = _ref4[0];
						var control = _ref4[1];
						var controlValue = _this3.settings.get(control.name);
						if (control.global && !(controlValue !== null && controlValue !== void 0 && controlValue.length)) {
							var _this3$globals$get;
							if ((_this3$globals$get = _this3.globals.get(control.name)) !== null && _this3$globals$get !== void 0 && _this3$globals$get.length || _this3.getGlobalDefault(controlName).length) {
								control.global.utilized = true;
								result[controlName] = control;
								return;
							}
						}
						if (control.dynamic) {
							if (_this3.dynamic.get(controlName)) {
								control.dynamic.utilized = true;
								result[controlName] = control;
								return;
							}
						}
						if (controlValue === control.default) return;
						if (!controlValue) return;
						if ("object" === _typeof(controlValue) && Object.values(controlValue).join() === Object.values(control.default).join()) return;
						result[controlName] = control;
					});
					return result;
				}
			},
			{
				key: "getParentAncestry",
				value: function getParentAncestry() {
					var result = [];
					var parent = this;
					while (parent) {
						result.push(parent);
						parent = parent.parent;
					}
					return result;
				}
			},
			{
				key: "handleChildrenRecursive",
				value: function handleChildrenRecursive() {
					var _this$view$children;
					if ((_this$view$children = this.view.children) !== null && _this$view$children !== void 0 && _this$view$children.length) Object.values(this.view.children._views).forEach(function(view) {
						if (!view.container) return;
						var container = view.container;
						if (container.parent.children) container.parent.children[view._index] = container;
						container.handleChildrenRecursive();
					});
					else this.children.clear();
				}
			},
			{
				key: "addToParent",
				value: function addToParent() {
					if (!this.parent.children || this.isRepeaterItem()) return;
					this.parent.children.splice(this.view._index, 0, this);
				}
			},
			{
				key: "removeFromParent",
				value: function removeFromParent() {
					var _this4 = this;
					if (!this.parent.children || this.isRepeater()) return;
					this.parent.children = this.parent.children.filter(function(filtered) {
						return filtered.id !== _this4.id;
					});
				}
			},
			{
				key: "handleRepeaterChildren",
				value: function handleRepeaterChildren() {
					var _this5 = this;
					Object.values(this.controls).forEach(function(control) {
						if (!control.is_repeater) return;
						var model = new Backbone.Model({ name: control.name });
						_this5.repeaters[control.name] = new elementorModules.editor.Container({
							type: Container.TYPE_REPEATER,
							id: control.name,
							model,
							settings: model,
							view: _this5.view,
							parent: _this5,
							label: control.label || control.name,
							controls: {},
							renderer: _this5.renderer
						});
						_this5.settings.get(control.name).forEach(function(rowModel, index) {
							_this5.addRepeaterItem(control.name, rowModel, index);
						});
					});
					if (["widget", "document"].includes(this.type)) {
						var repeaters = Object.values(this.controls).filter(function(control) {
							return "repeater" === control.type;
						});
						if (!this.model.get("supportRepeaterChildren") && 1 === repeaters.length) Object.defineProperty(this, "children", { get: function get() {
							elementorDevTools.deprecation.deprecated("children", "3.0.0", "container.repeaters[ repeaterName ].children");
							return this.repeaters[repeaters[0].name].children;
						} });
					}
				}
			},
			{
				key: "addRepeaterItem",
				value: function addRepeaterItem(repeaterName, rowSettingsModel, index) {
					var rowId = rowSettingsModel.get("_id");
					if (!rowId) {
						rowId = "bc-" + elementorCommon.helpers.getUniqueId();
						rowSettingsModel.set("_id", rowId);
					}
					this.repeaters[repeaterName].children.splice(index, 0, new elementorModules.editor.Container({
						type: Container.TYPE_REPEATER_ITEM,
						id: rowSettingsModel.get("_id"),
						model: new Backbone.Model({ name: repeaterName }),
						settings: rowSettingsModel,
						view: this.view,
						parent: this.repeaters[repeaterName],
						label: this.label + " " + (0, _wordpress_i18n.__)("Item", "elementor"),
						controls: rowSettingsModel.options.controls,
						renderer: this.renderer
					}));
					return this.repeaters[repeaterName];
				}
			},
			{
				key: "lookup",
				value: function lookup() {
					var _this$renderer$view;
					var result = this;
					if (!this.renderer) return this;
					if (this !== this.renderer && (_this$renderer$view = this.renderer.view) !== null && _this$renderer$view !== void 0 && _this$renderer$view.isDisconnected && this.renderer.view.isDisconnected()) this.renderer = this.renderer.lookup();
					if (void 0 === this.view || !this.view.lookup || !this.view.isDisconnected()) {
						if (Container.TYPE_REPEATER_ITEM === this.type) this.settings = this.parent.parent.settings.get(this.model.get("name")).findWhere({ _id: this.id });
						return result;
					}
					var lookup = this.view.lookup();
					if (lookup) {
						result = lookup.getContainer();
						if (Container.REPEATER === this.type) {
							this.settings = result.settings.get(this.model.get("name")).findWhere({ _id: this.id });
							return this;
						}
						if (result.parent.children) result.parent.children[result.view._index] = result;
					}
					return result;
				}
			},
			{
				key: "findChildrenRecursive",
				value: function findChildrenRecursive(callback) {
					elementorDevTools.deprecation.deprecated("container.findChildrenRecursive( callback )", "3.5.0", "container.children.findRecursive( callback )");
					return this.children.findRecursive(callback);
				}
			},
			{
				key: "forEachChildrenRecursive",
				value: function forEachChildrenRecursive(callback) {
					elementorDevTools.deprecation.deprecated("container.forEachChildrenRecursive( callback )", "3.5.0", "container.children.forEachRecursive( callback )");
					return this.children.forEachRecursive(callback);
				}
			},
			{
				key: "render",
				value: function render() {
					var _this$view;
					if (!this.renderer) return;
					this.renderer.view.renderOnChange(this.settings, (_this$view = this.view) === null || _this$view === void 0 ? void 0 : _this$view.$el);
				}
			},
			{
				key: "renderUI",
				value: function renderUI() {
					if (!this.renderer) return;
					this.renderer.view.renderUI();
				}
			},
			{
				key: "isEditable",
				value: function isEditable() {
					var _this$model;
					var _this$model$get;
					var _this$model$get$get;
					return "edit" === elementor.channels.dataEditMode.request("activeMode") && "open" === this.document.editor.status && !((_this$model = this.model) !== null && _this$model !== void 0 && (_this$model$get = _this$model.get) !== null && _this$model$get !== void 0 && (_this$model$get = _this$model$get.call(_this$model, "editSettings")) !== null && _this$model$get !== void 0 && (_this$model$get$get = _this$model$get.get) !== null && _this$model$get$get !== void 0 && _this$model$get$get.call(_this$model$get, "inactive"));
				}
			},
			{
				key: "isDesignable",
				value: function isDesignable() {
					return elementor.userCan("design") && this.isEditable();
				}
			},
			{
				key: "isGridContainer",
				value: function isGridContainer() {
					return "grid" === this.parent.settings.get("container_type");
				}
			},
			{
				key: "isLocked",
				value: function isLocked() {
					return this.model.get("isLocked");
				}
			},
			{
				key: "isRepeater",
				value: function isRepeater() {
					return Container.TYPE_REPEATER === this.type;
				}
			},
			{
				key: "isRepeaterItem",
				value: function isRepeaterItem() {
					return Container.TYPE_REPEATER_ITEM === this.type;
				}
			},
			{
				key: "isViewElement",
				value: function isViewElement() {
					return this.view && this.model.get("elType");
				}
			},
			{
				key: "getSetting",
				value: function getSetting(name) {
					var localOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
					var localValue = this.settings.get(name);
					if (localOnly) return localValue;
					var globalValue;
					if (this.getGlobalKey(name)) globalValue = this.getGlobalValue(name);
					return globalValue || localValue || this.getGlobalDefault(name);
				}
			},
			{
				key: "getGlobalKey",
				value: function getGlobalKey(name) {
					return this.globals.get(name);
				}
			},
			{
				key: "getGlobalValue",
				value: function getGlobalValue(name) {
					var control = this.controls[name];
					var globalKey = this.getGlobalKey(name);
					var globalArgs = $e.data.commandExtractArgs(globalKey);
					var data = $e.data.getCache($e.components.get("globals"), globalArgs.command, globalArgs.args.query);
					if (!(data !== null && data !== void 0 && data.value)) return;
					var id = data.id;
					var value;
					if (control.groupType) {
						var responsivePrefixRegex = elementor.breakpoints.getActiveMatchRegex();
						var propertyName = control.name.replace(control.groupPrefix, "").replace(responsivePrefixRegex, "");
						if (!data.value[elementor.config.kit_config.typography_prefix + propertyName]) return;
						propertyName = propertyName.replace("_", "-");
						value = "var( --e-global-".concat(control.groupType, "-").concat(id, "-").concat(propertyName, " )");
						if (elementor.config.ui.defaultGenericFonts && control.groupPrefix + "font_family" === control.name) value += ", ".concat(elementor.config.ui.defaultGenericFonts);
					} else value = "var( --e-global-".concat(control.type, "-").concat(id, " )");
					return value;
				}
			},
			{
				key: "isGlobalApplied",
				value: function isGlobalApplied(controlName) {
					return this.getSetting(controlName) !== this.settings.get(controlName);
				}
			},
			{
				key: "getGlobalDefault",
				value: function getGlobalDefault(controlName) {
					var _this$controls$contro;
					var controlGlobalArgs = (_this$controls$contro = this.controls[controlName]) === null || _this$controls$contro === void 0 ? void 0 : _this$controls$contro.global;
					if (controlGlobalArgs !== null && controlGlobalArgs !== void 0 && controlGlobalArgs.default) {
						var controlType = this.controls[controlName].type;
						if ("color" === controlType) controlType = "colors";
						if (!elementor.config.globals.defaults_enabled[controlType]) return "";
						var _$e$data$commandExtra = $e.data.commandExtractArgs(controlGlobalArgs.default);
						var command = _$e$data$commandExtra.command;
						var args = _$e$data$commandExtra.args;
						var result = $e.data.getCache($e.components.get("globals"), command, args.query);
						return result === null || result === void 0 ? void 0 : result.value;
					}
					return "";
				}
			}
		]);
	}(ArgsObject);
	_defineProperty(Container, "TYPE_REPEATER", "repeater-control");
	_defineProperty(Container, "TYPE_REPEATER_ITEM", "repeater");

//#endregion
//#region assets/dev/js/editor/modules.js
	elementorModules.editor = {
		elements: { models: { BaseSettings: import_base_settings.default } },
		utils: {
			Module: import_module.default,
			Introduction: _default
		},
		views: { ControlsStack },
		Container
	};

//#endregion
})(wp.i18n);
//# sourceMappingURL=editor-modules.js.map