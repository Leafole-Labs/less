(function(_wordpress_i18n, react, react_dom, _elementor_ui, _elementor_icons) {

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
	var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);

//#endregion
react = __toESM(react);
react_dom = __toESM(react_dom);

//#region node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
	function asyncGeneratorStep$1(n, t, e, r, o, a, c) {
		try {
			var i = n[a](c);
			var u = i.value;
		} catch (n) {
			e(n);
			return;
		}
		i.done ? t(u) : Promise.resolve(u).then(r, o);
	}
	function _asyncToGenerator$1(n) {
		return function() {
			var t = this;
			var e = arguments;
			return new Promise(function(r, o) {
				var a = n.apply(t, e);
				function _next(n) {
					asyncGeneratorStep$1(a, r, o, _next, _throw, "next", n);
				}
				function _throw(n) {
					asyncGeneratorStep$1(a, r, o, _next, _throw, "throw", n);
				}
				_next(void 0);
			});
		};
	}
	var init_asyncToGenerator$1 = __esmMin((() => {
		__name(asyncGeneratorStep$1, "asyncGeneratorStep");
		__name(_asyncToGenerator$1, "_asyncToGenerator");
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/classCallCheck.js
	function _classCallCheck(a, n) {
		if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
	}
	var init_classCallCheck = __esmMin((() => {}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/typeof.js
	function _typeof$1(o) {
		"@babel/helpers - typeof";
		return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
			return typeof o;
		} : function(o) {
			return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		}, _typeof$1(o);
	}
	var init_typeof$1 = __esmMin((() => {
		__name(_typeof$1, "_typeof");
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPrimitive.js
	function toPrimitive$1(t, r) {
		if ("object" != _typeof$1(t) || !t) return t;
		var e = t[Symbol.toPrimitive];
		if (void 0 !== e) {
			var i = e.call(t, r || "default");
			if ("object" != _typeof$1(i)) return i;
			throw new TypeError("@@toPrimitive must return a primitive value.");
		}
		return ("string" === r ? String : Number)(t);
	}
	var init_toPrimitive$1 = __esmMin((() => {
		init_typeof$1();
		__name(toPrimitive$1, "toPrimitive");
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
	function toPropertyKey$1(t) {
		var i = toPrimitive$1(t, "string");
		return "symbol" == _typeof$1(i) ? i : i + "";
	}
	var init_toPropertyKey$1 = __esmMin((() => {
		init_typeof$1();
		init_toPrimitive$1();
		__name(toPropertyKey$1, "toPropertyKey");
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/createClass.js
	function _defineProperties(e, r) {
		for (var t = 0; t < r.length; t++) {
			var o = r[t];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey$1(o.key), o);
		}
	}
	function _createClass(e, r, t) {
		return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
	}
	var init_createClass = __esmMin((() => {
		init_toPropertyKey$1();
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
init_asyncToGenerator$1();
init_classCallCheck();
init_createClass();
	function _assertThisInitialized(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
	init_typeof$1();
	function _possibleConstructorReturn(t, e) {
		if (e && ("object" == _typeof$1(e) || "function" == typeof e)) return e;
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
	function _defineProperty$1(e, r, t) {
		return (r = toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e;
	}
	var init_defineProperty$1 = __esmMin((() => {
		init_toPropertyKey$1();
		__name(_defineProperty$1, "_defineProperty");
	}));

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
	var import_client, react_default;
	var init_react = __esmMin((() => {
		import_client = require_client();
		react_default = { render };
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
	function _arrayLikeToArray(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}
	var init_arrayLikeToArray = __esmMin((() => {}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
	function _arrayWithoutHoles(r) {
		if (Array.isArray(r)) return _arrayLikeToArray(r);
	}
	var init_arrayWithoutHoles = __esmMin((() => {
		init_arrayLikeToArray();
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/iterableToArray.js
	function _iterableToArray(r) {
		if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
	}
	var init_iterableToArray = __esmMin((() => {}));

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
//#region node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
	function _nonIterableSpread() {
		throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var init_nonIterableSpread = __esmMin((() => {}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
	function _toConsumableArray(r) {
		return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
	}
	var init_toConsumableArray = __esmMin((() => {
		init_arrayWithoutHoles();
		init_iterableToArray();
		init_unsupportedIterableToArray();
		init_nonIterableSpread();
	}));

//#endregion
//#region modules/ai/assets/js/editor/utils/history.js
	function toggleHistory(isActive) {
		elementor.documents.getCurrent().history.setActive(isActive);
	}
	/**
	* @param {Object}                                                                                                                                                           options
	* @param { 'add' | 'change' | 'disable' | 'duplicate' | 'enable' | 'import' | 'move' | 'paste' | 'paste_style' | 'remove' | 'reset_settings' | 'reset_style' | 'selected' } options.type
	* @param { string }                                                                                                                                                         options.title
	*
	* @return {*}
	*/
	function startHistoryLog(_ref) {
		var type = _ref.type;
		var title = _ref.title;
		var id = $e.internal("document/history/start-log", {
			type,
			title
		});
		return function() {
			return $e.internal("document/history/end-log", { id });
		};
	}
	var init_history = __esmMin((() => {}));

//#endregion
//#region modules/ai/assets/js/editor/utils/preview-container.js
	function ownKeys$12(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread$11(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$12(Object(t), !0).forEach(function(r) {
				_defineProperty$1(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$12(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	/**
	* @param {Container} parentContainer
	* @param {{}}        containerOptions
	* @return {{init, setContent, reset, destroy}}
	*/
	function createPreviewContainer(parentContainer) {
		var containerOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		var createdContainers = /* @__PURE__ */ new Map();
		var idleContainer = createIdleContainer(parentContainer, containerOptions);
		function init() {
			showContainer(idleContainer);
		}
		function getAllContainers() {
			return [].concat(_toConsumableArray(createdContainers.values()), [idleContainer]);
		}
		function reset() {
			deleteContainers(_toConsumableArray(createdContainers.values()));
			createdContainers.clear();
			showContainer(idleContainer);
		}
		function setContent(template) {
			if (!template) return;
			hideContainers(getAllContainers());
			if (!createdContainers.has(template)) {
				var newContainer = createContainer$1(parentContainer, template, containerOptions);
				createdContainers.set(template, newContainer);
			}
			showContainer(createdContainers.get(template));
		}
		function destroy() {
			deleteContainers(getAllContainers());
			createdContainers.clear();
		}
		return {
			init,
			reset,
			setContent,
			destroy
		};
	}
	/**
	* @param {Container} parentContainer
	* @param {{}}        model
	* @param {{}}        options
	* @return {*}
	*/
	function createContainer$1(parentContainer, model) {
		var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		toggleHistory(false);
		var container = $e.run("document/elements/create", {
			container: parentContainer,
			model: _objectSpread$11(_objectSpread$11({}, model), {}, { id: "".concat(PREFIX, "-").concat(elementorCommon.helpers.getUniqueId().toString()) }),
			options: _objectSpread$11(_objectSpread$11({}, options), {}, { edit: false })
		});
		toggleHistory(true);
		container.view.$el.addClass(CLASS_HIDDEN);
		return container;
	}
	/**
	* @param {Container} parentContainer
	* @param {{}}        containerOptions
	* @return {*}
	*/
	function createIdleContainer(parentContainer) {
		var container = createContainer$1(parentContainer, { elType: "container" }, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {});
		container.view.$el.addClass(CLASS_IDLE);
		return container;
	}
	function hideContainers(containers) {
		containers.forEach(function(container) {
			container.view.$el.addClass(CLASS_HIDDEN);
		});
	}
	function showContainer(container) {
		container.view.$el.removeClass(CLASS_HIDDEN);
		setTimeout(function() {
			container.view.$el[0].scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		});
	}
	function deleteContainers(containers) {
		toggleHistory(false);
		$e.run("document/elements/delete", { containers });
		toggleHistory(true);
	}
	var PREFIX, CLASS_HIDDEN, CLASS_IDLE;
	var init_preview_container = __esmMin((() => {
		init_defineProperty$1();
		init_toConsumableArray();
		init_history();
		__name(ownKeys$12, "ownKeys");
		__name(_objectSpread$11, "_objectSpread");
		PREFIX = "e-ai-preview-container";
		CLASS_HIDDEN = PREFIX + "--hidden";
		CLASS_IDLE = PREFIX + "--idle";
		__name(createContainer$1, "createContainer");
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
//#region modules/ai/assets/js/editor/pages/connect/index.js
	var import_prop_types$36, Connect;
	var init_connect = __esmMin((() => {
		import_prop_types$36 = /* @__PURE__ */ __toESM(require_prop_types());
		Connect = function Connect(_ref) {
			var connectUrl = _ref.connectUrl;
			var onSuccess = _ref.onSuccess;
			var approveButtonRef = (0, react.useRef)();
			(0, react.useEffect)(function() {
				if (!jQuery.fn.elementorConnect) return;
				jQuery(approveButtonRef.current).elementorConnect({
					success: function success(_, data) {
						return onSuccess(data);
					},
					error: function error() {
						throw new Error("Elementor AI: Failed to connect.");
					}
				});
			}, []);
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
				alignItems: "center",
				gap: 2
			}, /*#__PURE__*/ react.default.createElement(_elementor_icons.AIIcon, { sx: {
				color: "text.primary",
				fontSize: "60px",
				mb: 1
			} }), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
				variant: "h4",
				sx: { color: "text.primary" }
			}, (0, _wordpress_i18n.__)("Step into the future with Elementor AI", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, { variant: "body2" }, (0, _wordpress_i18n.__)("Create smarter with AI text and code generators built right into the editor.", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
				variant: "caption",
				sx: {
					maxWidth: 520,
					textAlign: "center"
				}
			}, "       ", (0, _wordpress_i18n.__)("By clicking \"Connect\", I approve the ", "elementor"), /*#__PURE__*/ react.default.createElement(_elementor_ui.Link, {
				href: "https://go.elementor.com/ai-terms/",
				target: "_blank",
				color: "info.main"
			}, (0, _wordpress_i18n.__)("Terms of Service", "elementor")), " & ", /*#__PURE__*/ react.default.createElement(_elementor_ui.Link, {
				href: "https://go.elementor.com/ai-privacy-policy/",
				target: "_blank",
				color: "info.main"
			}, (0, _wordpress_i18n.__)("Privacy Policy", "elementor")), (0, _wordpress_i18n.__)(" of the Elementor AI service.", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
				ref: approveButtonRef,
				href: connectUrl,
				variant: "contained",
				sx: {
					mt: 1,
					"&:hover": { color: "primary.contrastText" }
				}
			}, (0, _wordpress_i18n.__)("Connect", "elementor")));
		};
		Connect.propTypes = {
			connectUrl: import_prop_types$36.default.string.isRequired,
			onSuccess: import_prop_types$36.default.func.isRequired
		};
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
	function _objectWithoutPropertiesLoose$1(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (-1 !== e.indexOf(n)) continue;
			t[n] = r[n];
		}
		return t;
	}
	var init_objectWithoutPropertiesLoose$1 = __esmMin((() => {
		__name(_objectWithoutPropertiesLoose$1, "_objectWithoutPropertiesLoose");
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
	function _objectWithoutProperties$1(e, t) {
		if (null == e) return {};
		var o;
		var r;
		var i = _objectWithoutPropertiesLoose$1(e, t);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
		}
		return i;
	}
	var init_objectWithoutProperties$1 = __esmMin((() => {
		init_objectWithoutPropertiesLoose$1();
		__name(_objectWithoutProperties$1, "_objectWithoutProperties");
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/extends.js
	function _extends() {
		return _extends = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends.apply(null, arguments);
	}
	var init_extends = __esmMin((() => {}));

//#endregion
//#region modules/ai/assets/js/editor/components/prompt-error-message.js
	var import_prop_types$35, _excluded$9, PromptErrorMessage;
	var init_prompt_error_message = __esmMin((() => {
		init_extends();
		init_objectWithoutProperties$1();
		import_prop_types$35 = /* @__PURE__ */ __toESM(require_prop_types());
		_excluded$9 = [
			"error",
			"onRetry",
			"actionPosition"
		];
		PromptErrorMessage = function PromptErrorMessage(_ref) {
			var error = _ref.error;
			var _ref$onRetry = _ref.onRetry;
			var onRetry = _ref$onRetry === void 0 ? function() {} : _ref$onRetry;
			var _ref$actionPosition = _ref.actionPosition;
			var actionPosition = _ref$actionPosition === void 0 ? "default" : _ref$actionPosition;
			var props = _objectWithoutProperties$1(_ref, _excluded$9);
			function getQuotaReachedTrailMessage(featureName) {
				if (!featureName) return {
					text: /*#__PURE__*/ react.default.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("It's time to upgrade.", "elementor")),
					description: (0, _wordpress_i18n.__)("Enjoy the free trial? Upgrade now for unlimited access to built-in image, text and custom code generators.", "elementor"),
					buttonText: (0, _wordpress_i18n.__)("Upgrade", "elementor"),
					buttonAction: function buttonAction() {
						return window.open("https://go.elementor.com/ai-popup-purchase-limit-reached/", "_blank");
					}
				};
				return {
					text: /*#__PURE__*/ react.default.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.sprintf)((0, _wordpress_i18n.__)("You've used all AI credits for %s.", "elementor"), featureName.toLowerCase())),
					description: (0, _wordpress_i18n.__)("Upgrade now to keep using this feature. You still have credits for other AI features (Text, Code, Images, Containers, etc.)", "elementor"),
					buttonText: (0, _wordpress_i18n.__)("Upgrade now", "elementor"),
					buttonAction: function buttonAction() {
						return window.open("https://go.elementor.com/ai-popup-purchase-limit-reached/", "_blank");
					}
				};
			}
			function getErrorMessage() {
				var _error$extra_data;
				var errMsg = error.message || error;
				var featureName = (_error$extra_data = error.extra_data) === null || _error$extra_data === void 0 ? void 0 : _error$extra_data.featureName;
				var messages = {
					default: {
						text: /*#__PURE__*/ react.default.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("There was a glitch.", "elementor")),
						description: (0, _wordpress_i18n.__)("Wait a moment and give it another go, or try tweaking the prompt.", "elementor"),
						buttonText: (0, _wordpress_i18n.__)("Try again", "elementor"),
						buttonAction: onRetry
					},
					service_outage_internal: {
						text: /*#__PURE__*/ react.default.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("There was a glitch.", "elementor")),
						description: (0, _wordpress_i18n.__)("Wait a moment and give it another go.", "elementor"),
						buttonText: (0, _wordpress_i18n.__)("Try again", "elementor"),
						buttonAction: onRetry
					},
					invalid_connect_data: {
						text: /*#__PURE__*/ react.default.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("There was a glitch.", "elementor")),
						description: /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, (0, _wordpress_i18n.__)("Try exiting Elementor and sign in again.", "elementor"), " ", /*#__PURE__*/ react.default.createElement("a", {
							href: "https://elementor.com/help/disconnecting-reconnecting-your-elementor-account/",
							target: "_blank",
							rel: "noreferrer"
						}, (0, _wordpress_i18n.__)("Show me how", "elementor"))),
						buttonText: (0, _wordpress_i18n.__)("Reconnect", "elementor"),
						buttonAction: function buttonAction() {
							return window.open(window.ElementorAiConfig.connect_url);
						}
					},
					not_connected: {
						text: /*#__PURE__*/ react.default.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("You aren't connected to Elementor AI.", "elementor")),
						description: (0, _wordpress_i18n.__)("Elementor AI is just a few clicks away. Connect your account to instantly create texts and custom code.", "elementor"),
						buttonText: (0, _wordpress_i18n.__)("Connect", "elementor"),
						buttonAction: function buttonAction() {
							return window.open(window.ElementorAiConfig.connect_url);
						}
					},
					quota_reached_trail: getQuotaReachedTrailMessage(featureName),
					quota_reached_subscription: {
						text: /*#__PURE__*/ react.default.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("Looks like you're out of credits.", "elementor")),
						description: (0, _wordpress_i18n.__)("Ready to take it to the next level?", "elementor"),
						buttonText: (0, _wordpress_i18n.__)("Upgrade now", "elementor"),
						buttonAction: function buttonAction() {
							return window.open("https://go.elementor.com/ai-popup-purchase-limit-reached/", "_blank");
						}
					},
					rate_limit_network: {
						text: /*#__PURE__*/ react.default.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("Whoa! Slow down there.", "elementor")),
						description: (0, _wordpress_i18n.__)("We can’t process that many requests so fast. Try again in 15 minutes.", "elementor")
					},
					invalid_prompts: {
						text: /*#__PURE__*/ react.default.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("We were unable to generate that prompt.", "elementor")),
						description: (0, _wordpress_i18n.__)("Seems like the prompt contains words that could generate harmful content. Write a different prompt to continue.", "elementor")
					},
					service_unavailable: {
						text: /*#__PURE__*/ react.default.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("There was a glitch.", "elementor")),
						description: (0, _wordpress_i18n.__)("Wait a moment and give it another go, or try tweaking the prompt.", "elementor"),
						buttonText: (0, _wordpress_i18n.__)("Try again", "elementor"),
						buttonAction: onRetry
					},
					request_timeout_error: {
						text: /*#__PURE__*/ react.default.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("There was a glitch.", "elementor")),
						description: (0, _wordpress_i18n.__)("Wait a moment and give it another go, or try tweaking the prompt.", "elementor"),
						buttonText: (0, _wordpress_i18n.__)("Try again", "elementor"),
						buttonAction: onRetry
					},
					invalid_token: {
						text: /*#__PURE__*/ react.default.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("Try again", "elementor")),
						description: (0, _wordpress_i18n.__)("Try exiting Elementor and sign in again.", "elementor"),
						buttonText: (0, _wordpress_i18n.__)("Reconnect", "elementor"),
						buttonAction: onRetry
					},
					file_too_large: {
						text: /*#__PURE__*/ react.default.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("The file is too large.", "elementor")),
						description: (0, _wordpress_i18n.__)("Please upload a file that is less than 4MB.", "elementor")
					},
					image_resolution_maximum_exceeded: {
						text: /*#__PURE__*/ react.default.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("The image resolution exceeds the maximum allowed size.", "elementor")),
						description: (0, _wordpress_i18n.__)("Please upload a file with dimensions less than 2048x2048 pixels.", "elementor")
					},
					external_service_unavailable: {
						text: /*#__PURE__*/ react.default.createElement(_elementor_ui.AlertTitle, null, (0, _wordpress_i18n.__)("Temporary external service issue", "elementor")),
						description: (0, _wordpress_i18n.__)("It seems that one of our partner services is temporarily unavailable. Please try again in a few minutes.", "elementor"),
						buttonText: (0, _wordpress_i18n.__)("Try Again", "elementor"),
						buttonAction: onRetry
					}
				};
				return messages[errMsg] || messages.default;
			}
			var message = getErrorMessage();
			var action = (message === null || message === void 0 ? void 0 : message.buttonText) && /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
				color: "inherit",
				size: "small",
				variant: "outlined",
				onClick: message.buttonAction
			}, message.buttonText);
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Alert, _extends({
				severity: message.severity || "error",
				action: "default" === actionPosition && action
			}, props), message.text, message.description, "bottom" === actionPosition && /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: { mt: 1 } }, action));
		};
		PromptErrorMessage.propTypes = {
			error: import_prop_types$35.default.oneOfType([import_prop_types$35.default.object, import_prop_types$35.default.string]),
			onRetry: import_prop_types$35.default.func,
			actionPosition: import_prop_types$35.default.oneOf(["default", "bottom"])
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/unsaved-changes-alert.js
	var import_prop_types$34, _excluded$8, UnsavedChangesAlert;
	var init_unsaved_changes_alert = __esmMin((() => {
		init_extends();
		init_objectWithoutProperties$1();
		import_prop_types$34 = /* @__PURE__ */ __toESM(require_prop_types());
		_excluded$8 = [
			"onClose",
			"onCancel",
			"title",
			"text"
		];
		UnsavedChangesAlert = function UnsavedChangesAlert(_ref) {
			var onClose = _ref.onClose;
			var onCancel = _ref.onCancel;
			var title = _ref.title;
			var text = _ref.text;
			var props = _objectWithoutProperties$1(_ref, _excluded$8);
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Dialog, _extends({
				"aria-labelledby": "unsaved-changes-alert-title",
				"aria-describedby": "unsaved-changes-alert-description"
			}, props), /*#__PURE__*/ react.default.createElement(_elementor_ui.DialogTitle, { id: "unsaved-changes-alert-title" }, title), /*#__PURE__*/ react.default.createElement(_elementor_ui.DialogContent, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.DialogContentText, { id: "unsaved-changes-alert-description" }, text)), /*#__PURE__*/ react.default.createElement(_elementor_ui.DialogActions, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
				onClick: onCancel,
				color: "secondary"
			}, (0, _wordpress_i18n.__)("Cancel", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
				onClick: onClose,
				color: "error",
				variant: "contained"
			}, (0, _wordpress_i18n.__)("Yes, leave", "elementor"))));
		};
		UnsavedChangesAlert.propTypes = {
			title: import_prop_types$34.default.string,
			text: import_prop_types$34.default.string,
			onCancel: import_prop_types$34.default.func,
			onClose: import_prop_types$34.default.func
		};
	}));

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/typeof.js
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
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/toPrimitive.js
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
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/toPropertyKey.js
	function toPropertyKey(t) {
		var i = toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	var init_toPropertyKey = __esmMin((() => {
		init_typeof();
		init_toPrimitive();
	}));

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/defineProperty.js
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
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/objectSpread2.js
	function ownKeys$11(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread2(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$11(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$11(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	var init_objectSpread2 = __esmMin((() => {
		init_defineProperty();
		__name(ownKeys$11, "ownKeys");
	}));

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/objectWithoutPropertiesLoose.js
	function _objectWithoutPropertiesLoose(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (e.includes(n)) continue;
			t[n] = r[n];
		}
		return t;
	}
	var init_objectWithoutPropertiesLoose = __esmMin((() => {}));

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/objectWithoutProperties.js
	function _objectWithoutProperties(e, t) {
		if (null == e) return {};
		var o;
		var r;
		var i = _objectWithoutPropertiesLoose(e, t);
		if (Object.getOwnPropertySymbols) {
			var s = Object.getOwnPropertySymbols(e);
			for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
		}
		return i;
	}
	var init_objectWithoutProperties = __esmMin((() => {
		init_objectWithoutPropertiesLoose();
	}));

//#endregion
//#region node_modules/react-draggable/node_modules/clsx/dist/clsx.js
	var require_clsx = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		function r(e) {
			var o;
			var t;
			var f = "";
			if ("string" == typeof e || "number" == typeof e) f += e;
			else if ("object" == typeof e) if (Array.isArray(e)) {
				var n = e.length;
				for (o = 0; o < n; o++) e[o] && (t = r(e[o])) && (f && (f += " "), f += t);
			} else for (t in e) e[t] && (f && (f += " "), f += t);
			return f;
		}
		function e() {
			for (var e, o, t = 0, f = "", n = arguments.length; t < n; t++) (e = arguments[t]) && (o = r(e)) && (f && (f += " "), f += o);
			return f;
		}
		module.exports = e, module.exports.clsx = e;
	}));

//#endregion
//#region node_modules/react-draggable/build/cjs/utils/shims.js
	var require_shims = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.dontSetMe = dontSetMe;
		exports.findInArray = findInArray;
		exports.int = int;
		exports.isFunction = isFunction;
		exports.isNum = isNum;
		function findInArray(array, callback) {
			for (let i = 0, length = array.length; i < length; i++) if (callback.apply(callback, [
				array[i],
				i,
				array
			])) return array[i];
		}
		function isFunction(func) {
			return typeof func === "function" || Object.prototype.toString.call(func) === "[object Function]";
		}
		function isNum(num) {
			return typeof num === "number" && !isNaN(num);
		}
		function int(a) {
			return parseInt(a, 10);
		}
		function dontSetMe(props, propName, componentName) {
			if (props[propName]) return /* @__PURE__ */ new Error(`Invalid prop ${propName} passed to ${componentName} - do not set this, set it on the child.`);
		}
	}));

//#endregion
//#region node_modules/react-draggable/build/cjs/utils/getPrefix.js
	var require_getPrefix = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.browserPrefixToKey = browserPrefixToKey;
		exports.browserPrefixToStyle = browserPrefixToStyle;
		exports.default = void 0;
		exports.getPrefix = getPrefix;
		var prefixes = [
			"Moz",
			"Webkit",
			"O",
			"ms"
		];
		function getPrefix() {
			var _window$document;
			let prop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
			if (typeof window === "undefined") return "";
			const style = (_window$document = window.document) === null || _window$document === void 0 || (_window$document = _window$document.documentElement) === null || _window$document === void 0 ? void 0 : _window$document.style;
			if (!style) return "";
			if (prop in style) return "";
			for (let i = 0; i < prefixes.length; i++) if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
			return "";
		}
		function browserPrefixToKey(prop, prefix) {
			return prefix ? `${prefix}${kebabToTitleCase(prop)}` : prop;
		}
		function browserPrefixToStyle(prop, prefix) {
			return prefix ? `-${prefix.toLowerCase()}-${prop}` : prop;
		}
		function kebabToTitleCase(str) {
			let out = "";
			let shouldCapitalize = true;
			for (let i = 0; i < str.length; i++) if (shouldCapitalize) {
				out += str[i].toUpperCase();
				shouldCapitalize = false;
			} else if (str[i] === "-") shouldCapitalize = true;
			else out += str[i];
			return out;
		}
		exports.default = getPrefix();
	}));

//#endregion
//#region node_modules/react-draggable/build/cjs/utils/domFns.js
	var require_domFns = /* @__PURE__ */ __commonJSMin(((exports) => {
		init_objectSpread2();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.addClassName = addClassName;
		exports.addEvent = addEvent;
		exports.addUserSelectStyles = addUserSelectStyles;
		exports.createCSSTransform = createCSSTransform;
		exports.createSVGTransform = createSVGTransform;
		exports.getTouch = getTouch;
		exports.getTouchIdentifier = getTouchIdentifier;
		exports.getTranslation = getTranslation;
		exports.innerHeight = innerHeight;
		exports.innerWidth = innerWidth;
		exports.matchesSelector = matchesSelector;
		exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
		exports.offsetXYFromParent = offsetXYFromParent;
		exports.outerHeight = outerHeight;
		exports.outerWidth = outerWidth;
		exports.removeClassName = removeClassName;
		exports.removeEvent = removeEvent;
		exports.scheduleRemoveUserSelectStyles = scheduleRemoveUserSelectStyles;
		var _shims = require_shims();
		var _getPrefix = _interopRequireWildcard(require_getPrefix());
		function _interopRequireWildcard(e, t) {
			if ("function" == typeof WeakMap) {
				var r = /* @__PURE__ */ new WeakMap();
				var n = /* @__PURE__ */ new WeakMap();
			}
			return (_interopRequireWildcard = function(e, t) {
				if (!t && e && e.__esModule) return e;
				var o;
				var i;
				var f = {
					__proto__: null,
					default: e
				};
				if (null === e || "object" != typeof e && "function" != typeof e) return f;
				if (o = t ? n : r) {
					if (o.has(e)) return o.get(e);
					o.set(e, f);
				}
				for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]);
				return f;
			})(e, t);
		}
		var matchesSelectorFunc = "";
		function matchesSelector(el, selector) {
			if (!matchesSelectorFunc) matchesSelectorFunc = (0, _shims.findInArray)([
				"matches",
				"webkitMatchesSelector",
				"mozMatchesSelector",
				"msMatchesSelector",
				"oMatchesSelector"
			], function(method) {
				return (0, _shims.isFunction)(el[method]);
			});
			if (!(0, _shims.isFunction)(el[matchesSelectorFunc])) return false;
			return el[matchesSelectorFunc](selector);
		}
		function matchesSelectorAndParentsTo(el, selector, baseNode) {
			let node = el;
			do {
				if (matchesSelector(node, selector)) return true;
				if (node === baseNode) return false;
				node = node.parentNode;
			} while (node);
			return false;
		}
		function addEvent(el, event, handler, inputOptions) {
			if (!el) return;
			const options = _objectSpread2({ capture: true }, inputOptions);
			if (el.addEventListener) el.addEventListener(event, handler, options);
			else if (el.attachEvent) el.attachEvent("on" + event, handler);
			else el["on" + event] = handler;
		}
		function removeEvent(el, event, handler, inputOptions) {
			if (!el) return;
			const options = _objectSpread2({ capture: true }, inputOptions);
			if (el.removeEventListener) el.removeEventListener(event, handler, options);
			else if (el.detachEvent) el.detachEvent("on" + event, handler);
			else el["on" + event] = null;
		}
		function outerHeight(node) {
			let height = node.clientHeight;
			const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
			height += (0, _shims.int)(computedStyle.borderTopWidth);
			height += (0, _shims.int)(computedStyle.borderBottomWidth);
			return height;
		}
		function outerWidth(node) {
			let width = node.clientWidth;
			const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
			width += (0, _shims.int)(computedStyle.borderLeftWidth);
			width += (0, _shims.int)(computedStyle.borderRightWidth);
			return width;
		}
		function innerHeight(node) {
			let height = node.clientHeight;
			const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
			height -= (0, _shims.int)(computedStyle.paddingTop);
			height -= (0, _shims.int)(computedStyle.paddingBottom);
			return height;
		}
		function innerWidth(node) {
			let width = node.clientWidth;
			const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
			width -= (0, _shims.int)(computedStyle.paddingLeft);
			width -= (0, _shims.int)(computedStyle.paddingRight);
			return width;
		}
		function offsetXYFromParent(evt, offsetParent, scale) {
			const offsetParentRect = offsetParent === offsetParent.ownerDocument.body ? {
				left: 0,
				top: 0
			} : offsetParent.getBoundingClientRect();
			return {
				x: (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale,
				y: (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale
			};
		}
		function createCSSTransform(controlPos, positionOffset) {
			const translation = getTranslation(controlPos, positionOffset, "px");
			return { [(0, _getPrefix.browserPrefixToKey)("transform", _getPrefix.default)]: translation };
		}
		function createSVGTransform(controlPos, positionOffset) {
			return getTranslation(controlPos, positionOffset, "");
		}
		function getTranslation(_ref, positionOffset, unitSuffix) {
			let { x, y } = _ref;
			let translation = `translate(${x}${unitSuffix},${y}${unitSuffix})`;
			if (positionOffset) translation = `translate(${`${typeof positionOffset.x === "string" ? positionOffset.x : positionOffset.x + unitSuffix}`}, ${`${typeof positionOffset.y === "string" ? positionOffset.y : positionOffset.y + unitSuffix}`})` + translation;
			return translation;
		}
		function getTouch(e, identifier) {
			return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, (t) => identifier === t.identifier) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, (t) => identifier === t.identifier);
		}
		function getTouchIdentifier(e) {
			if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
			if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
		}
		function addUserSelectStyles(doc) {
			if (!doc) return;
			let styleEl = doc.getElementById("react-draggable-style-el");
			if (!styleEl) {
				styleEl = doc.createElement("style");
				styleEl.type = "text/css";
				styleEl.id = "react-draggable-style-el";
				styleEl.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n";
				styleEl.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n";
				doc.getElementsByTagName("head")[0].appendChild(styleEl);
			}
			if (doc.body) addClassName(doc.body, "react-draggable-transparent-selection");
		}
		function scheduleRemoveUserSelectStyles(doc) {
			if (window.requestAnimationFrame) window.requestAnimationFrame(() => {
				removeUserSelectStyles(doc);
			});
			else removeUserSelectStyles(doc);
		}
		function removeUserSelectStyles(doc) {
			if (!doc) return;
			try {
				if (doc.body) removeClassName(doc.body, "react-draggable-transparent-selection");
				if (doc.selection) doc.selection.empty();
				else {
					const selection = (doc.defaultView || window).getSelection();
					if (selection && selection.type !== "Caret") selection.removeAllRanges();
				}
			} catch (e) {}
		}
		function addClassName(el, className) {
			if (el.classList) el.classList.add(className);
			else if (!el.className.match(new RegExp(`(?:^|\\s)${className}(?!\\S)`))) el.className += ` ${className}`;
		}
		function removeClassName(el, className) {
			if (el.classList) el.classList.remove(className);
			else el.className = el.className.replace(new RegExp(`(?:^|\\s)${className}(?!\\S)`, "g"), "");
		}
	}));

//#endregion
//#region node_modules/react-draggable/build/cjs/utils/positionFns.js
	var require_positionFns = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.canDragX = canDragX;
		exports.canDragY = canDragY;
		exports.createCoreData = createCoreData;
		exports.createDraggableData = createDraggableData;
		exports.getBoundPosition = getBoundPosition;
		exports.getControlPosition = getControlPosition;
		exports.snapToGrid = snapToGrid;
		var _shims = require_shims();
		var _domFns = require_domFns();
		function getBoundPosition(draggable, x, y) {
			if (!draggable.props.bounds) return [x, y];
			let { bounds } = draggable.props;
			bounds = typeof bounds === "string" ? bounds : cloneBounds(bounds);
			const node = findDOMNode(draggable);
			if (typeof bounds === "string") {
				const { ownerDocument } = node;
				const ownerWindow = ownerDocument.defaultView;
				let boundNode;
				if (bounds === "parent") boundNode = node.parentNode;
				else boundNode = node.getRootNode().querySelector(bounds);
				if (!(boundNode instanceof ownerWindow.HTMLElement)) throw new Error("Bounds selector \"" + bounds + "\" could not find an element.");
				const boundNodeEl = boundNode;
				const nodeStyle = ownerWindow.getComputedStyle(node);
				const boundNodeStyle = ownerWindow.getComputedStyle(boundNodeEl);
				bounds = {
					left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.marginLeft),
					top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.marginTop),
					right: (0, _domFns.innerWidth)(boundNodeEl) - (0, _domFns.outerWidth)(node) - node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingRight) - (0, _shims.int)(nodeStyle.marginRight),
					bottom: (0, _domFns.innerHeight)(boundNodeEl) - (0, _domFns.outerHeight)(node) - node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingBottom) - (0, _shims.int)(nodeStyle.marginBottom)
				};
			}
			if ((0, _shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
			if ((0, _shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom);
			if ((0, _shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
			if ((0, _shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);
			return [x, y];
		}
		function snapToGrid(grid, pendingX, pendingY) {
			return [Math.round(pendingX / grid[0]) * grid[0], Math.round(pendingY / grid[1]) * grid[1]];
		}
		function canDragX(draggable) {
			return draggable.props.axis === "both" || draggable.props.axis === "x";
		}
		function canDragY(draggable) {
			return draggable.props.axis === "both" || draggable.props.axis === "y";
		}
		function getControlPosition(e, touchIdentifier, draggableCore) {
			const touchObj = typeof touchIdentifier === "number" ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
			if (typeof touchIdentifier === "number" && !touchObj) return null;
			const node = findDOMNode(draggableCore);
			const offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
			return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent, draggableCore.props.scale);
		}
		function createCoreData(draggable, x, y) {
			const isStart = !(0, _shims.isNum)(draggable.lastX);
			const node = findDOMNode(draggable);
			if (isStart) return {
				node,
				deltaX: 0,
				deltaY: 0,
				lastX: x,
				lastY: y,
				x,
				y
			};
			else return {
				node,
				deltaX: x - draggable.lastX,
				deltaY: y - draggable.lastY,
				lastX: draggable.lastX,
				lastY: draggable.lastY,
				x,
				y
			};
		}
		function createDraggableData(draggable, coreData) {
			const scale = draggable.props.scale;
			return {
				node: coreData.node,
				x: draggable.state.x + coreData.deltaX / scale,
				y: draggable.state.y + coreData.deltaY / scale,
				deltaX: coreData.deltaX / scale,
				deltaY: coreData.deltaY / scale,
				lastX: draggable.state.x,
				lastY: draggable.state.y
			};
		}
		function cloneBounds(bounds) {
			return {
				left: bounds.left,
				top: bounds.top,
				right: bounds.right,
				bottom: bounds.bottom
			};
		}
		function findDOMNode(draggable) {
			const node = draggable.findDOMNode();
			if (!node) throw new Error("<DraggableCore>: Unmounted during event!");
			return node;
		}
	}));

//#endregion
//#region node_modules/react-draggable/build/cjs/utils/log.js
	var require_log = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = log;
		function log() {}
	}));

//#endregion
//#region node_modules/react-draggable/build/cjs/DraggableCore.js
	var require_DraggableCore = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var React$47 = _interopRequireWildcard((globalThis.React));
		var _propTypes = _interopRequireDefault(require_prop_types());
		var _reactDom$1 = _interopRequireDefault((globalThis.ReactDOM));
		var _domFns = require_domFns();
		var _positionFns = require_positionFns();
		var _shims = require_shims();
		var _log = _interopRequireDefault(require_log());
		function _interopRequireDefault(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function _interopRequireWildcard(e, t) {
			if ("function" == typeof WeakMap) {
				var r = /* @__PURE__ */ new WeakMap();
				var n = /* @__PURE__ */ new WeakMap();
			}
			return (_interopRequireWildcard = function(e, t) {
				if (!t && e && e.__esModule) return e;
				var o;
				var i;
				var f = {
					__proto__: null,
					default: e
				};
				if (null === e || "object" != typeof e && "function" != typeof e) return f;
				if (o = t ? n : r) {
					if (o.has(e)) return o.get(e);
					o.set(e, f);
				}
				for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]);
				return f;
			})(e, t);
		}
		function _defineProperty(e, r, t) {
			return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
				value: t,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[r] = t, e;
		}
		function _toPropertyKey(t) {
			var i = _toPrimitive(t, "string");
			return "symbol" == typeof i ? i : i + "";
		}
		function _toPrimitive(t, r) {
			if ("object" != typeof t || !t) return t;
			var e = t[Symbol.toPrimitive];
			if (void 0 !== e) {
				var i = e.call(t, r || "default");
				if ("object" != typeof i) return i;
				throw new TypeError("@@toPrimitive must return a primitive value.");
			}
			return ("string" === r ? String : Number)(t);
		}
		var eventsFor = {
			touch: {
				start: "touchstart",
				move: "touchmove",
				stop: "touchend"
			},
			mouse: {
				start: "mousedown",
				move: "mousemove",
				stop: "mouseup"
			}
		};
		var dragEventFor = eventsFor.mouse;
		var DraggableCore = class extends React$47.Component {
			constructor() {
				super(...arguments);
				_defineProperty(this, "dragging", false);
				_defineProperty(this, "lastX", NaN);
				_defineProperty(this, "lastY", NaN);
				_defineProperty(this, "touchIdentifier", null);
				_defineProperty(this, "mounted", false);
				_defineProperty(this, "handleDragStart", (e) => {
					this.props.onMouseDown(e);
					if (!this.props.allowAnyClick && typeof e.button === "number" && e.button !== 0) return false;
					const thisNode = this.findDOMNode();
					if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!");
					const { ownerDocument } = thisNode;
					if (this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, this.props.handle, thisNode) || this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, this.props.cancel, thisNode)) return;
					if (e.type === "touchstart" && !this.props.allowMobileScroll) e.preventDefault();
					const touchIdentifier = (0, _domFns.getTouchIdentifier)(e);
					this.touchIdentifier = touchIdentifier;
					const position = (0, _positionFns.getControlPosition)(e, touchIdentifier, this);
					if (position == null) return;
					const { x, y } = position;
					const coreEvent = (0, _positionFns.createCoreData)(this, x, y);
					(0, _log.default)("DraggableCore: handleDragStart: %j", coreEvent);
					(0, _log.default)("calling", this.props.onStart);
					if (this.props.onStart(e, coreEvent) === false || this.mounted === false) return;
					if (this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)(ownerDocument);
					this.dragging = true;
					this.lastX = x;
					this.lastY = y;
					(0, _domFns.addEvent)(ownerDocument, dragEventFor.move, this.handleDrag);
					(0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, this.handleDragStop);
				});
				_defineProperty(this, "handleDrag", (e) => {
					const position = (0, _positionFns.getControlPosition)(e, this.touchIdentifier, this);
					if (position == null) return;
					let { x, y } = position;
					if (Array.isArray(this.props.grid)) {
						let deltaX = x - this.lastX;
						let deltaY = y - this.lastY;
						[deltaX, deltaY] = (0, _positionFns.snapToGrid)(this.props.grid, deltaX, deltaY);
						if (!deltaX && !deltaY) return;
						x = this.lastX + deltaX, y = this.lastY + deltaY;
					}
					const coreEvent = (0, _positionFns.createCoreData)(this, x, y);
					(0, _log.default)("DraggableCore: handleDrag: %j", coreEvent);
					if (this.props.onDrag(e, coreEvent) === false || this.mounted === false) {
						try {
							this.handleDragStop(new MouseEvent("mouseup"));
						} catch (err) {
							const event = document.createEvent("MouseEvents");
							event.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
							this.handleDragStop(event);
						}
						return;
					}
					this.lastX = x;
					this.lastY = y;
				});
				_defineProperty(this, "handleDragStop", (e) => {
					if (!this.dragging) return;
					const position = (0, _positionFns.getControlPosition)(e, this.touchIdentifier, this);
					if (position == null) return;
					let { x, y } = position;
					if (Array.isArray(this.props.grid)) {
						let deltaX = x - this.lastX || 0;
						let deltaY = y - this.lastY || 0;
						[deltaX, deltaY] = (0, _positionFns.snapToGrid)(this.props.grid, deltaX, deltaY);
						x = this.lastX + deltaX, y = this.lastY + deltaY;
					}
					const coreEvent = (0, _positionFns.createCoreData)(this, x, y);
					if (this.props.onStop(e, coreEvent) === false || this.mounted === false) return false;
					const thisNode = this.findDOMNode();
					if (thisNode) {
						if (this.props.enableUserSelectHack) (0, _domFns.scheduleRemoveUserSelectStyles)(thisNode.ownerDocument);
					}
					(0, _log.default)("DraggableCore: handleDragStop: %j", coreEvent);
					this.dragging = false;
					this.lastX = NaN;
					this.lastY = NaN;
					if (thisNode) {
						(0, _log.default)("DraggableCore: Removing handlers");
						(0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, this.handleDrag);
						(0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, this.handleDragStop);
					}
				});
				_defineProperty(this, "onMouseDown", (e) => {
					dragEventFor = eventsFor.mouse;
					return this.handleDragStart(e);
				});
				_defineProperty(this, "onMouseUp", (e) => {
					dragEventFor = eventsFor.mouse;
					return this.handleDragStop(e);
				});
				_defineProperty(this, "onTouchStart", (e) => {
					dragEventFor = eventsFor.touch;
					return this.handleDragStart(e);
				});
				_defineProperty(this, "onTouchEnd", (e) => {
					dragEventFor = eventsFor.touch;
					return this.handleDragStop(e);
				});
			}
			componentDidMount() {
				this.mounted = true;
				const thisNode = this.findDOMNode();
				if (thisNode) (0, _domFns.addEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, { passive: false });
			}
			componentWillUnmount() {
				this.mounted = false;
				const thisNode = this.findDOMNode();
				if (thisNode) {
					const { ownerDocument } = thisNode;
					(0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
					(0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
					(0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
					(0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
					(0, _domFns.removeEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, { passive: false });
					if (this.props.enableUserSelectHack) (0, _domFns.scheduleRemoveUserSelectStyles)(ownerDocument);
				}
			}
			findDOMNode() {
				var _this$props;
				var _this$props2;
				return ((_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.nodeRef) ? (_this$props2 = this.props) === null || _this$props2 === void 0 || (_this$props2 = _this$props2.nodeRef) === null || _this$props2 === void 0 ? void 0 : _this$props2.current : _reactDom$1.default.findDOMNode(this);
			}
			render() {
				return /*#__PURE__*/ React$47.cloneElement(React$47.Children.only(this.props.children), {
					onMouseDown: this.onMouseDown,
					onMouseUp: this.onMouseUp,
					onTouchEnd: this.onTouchEnd
				});
			}
		};
		exports.default = DraggableCore;
		_defineProperty(DraggableCore, "displayName", "DraggableCore");
		_defineProperty(DraggableCore, "propTypes", {
			/**
			* `allowAnyClick` allows dragging using any mouse button.
			* By default, we only accept the left button.
			*
			* Defaults to `false`.
			*/
			allowAnyClick: _propTypes.default.bool,
			/**
			* `allowMobileScroll` turns off cancellation of the 'touchstart' event
			* on mobile devices. Only enable this if you are having trouble with click
			* events. Prefer using 'handle' / 'cancel' instead.
			*
			* Defaults to `false`.
			*/
			allowMobileScroll: _propTypes.default.bool,
			children: _propTypes.default.node.isRequired,
			/**
			* `disabled`, if true, stops the <Draggable> from dragging. All handlers,
			* with the exception of `onMouseDown`, will not fire.
			*/
			disabled: _propTypes.default.bool,
			/**
			* By default, we add 'user-select:none' attributes to the document body
			* to prevent ugly text selection during drag. If this is causing problems
			* for your app, set this to `false`.
			*/
			enableUserSelectHack: _propTypes.default.bool,
			/**
			* `offsetParent`, if set, uses the passed DOM node to compute drag offsets
			* instead of using the parent node.
			*/
			offsetParent: function(props, propName) {
				if (props[propName] && props[propName].nodeType !== 1) throw new Error("Draggable's offsetParent must be a DOM Node.");
			},
			/**
			* `grid` specifies the x and y that dragging should snap to.
			*/
			grid: _propTypes.default.arrayOf(_propTypes.default.number),
			/**
			* `handle` specifies a selector to be used as the handle that initiates drag.
			*
			* Example:
			*
			* ```jsx
			*   let App = React.createClass({
			*       render: function () {
			*         return (
			*            <Draggable handle=".handle">
			*              <div>
			*                  <div className="handle">Click me to drag</div>
			*                  <div>This is some other content</div>
			*              </div>
			*           </Draggable>
			*         );
			*       }
			*   });
			* ```
			*/
			handle: _propTypes.default.string,
			/**
			* `cancel` specifies a selector to be used to prevent drag initialization.
			*
			* Example:
			*
			* ```jsx
			*   let App = React.createClass({
			*       render: function () {
			*           return(
			*               <Draggable cancel=".cancel">
			*                   <div>
			*                     <div className="cancel">You can't drag from here</div>
			*                     <div>Dragging here works fine</div>
			*                   </div>
			*               </Draggable>
			*           );
			*       }
			*   });
			* ```
			*/
			cancel: _propTypes.default.string,
			nodeRef: _propTypes.default.object,
			/**
			* Called when dragging starts.
			* If this function returns the boolean false, dragging will be canceled.
			*/
			onStart: _propTypes.default.func,
			/**
			* Called while dragging.
			* If this function returns the boolean false, dragging will be canceled.
			*/
			onDrag: _propTypes.default.func,
			/**
			* Called when dragging stops.
			* If this function returns the boolean false, the drag will remain active.
			*/
			onStop: _propTypes.default.func,
			/**
			* A workaround option which can be passed if onMouseDown needs to be accessed,
			* since it'll always be blocked (as there is internal use of onMouseDown)
			*/
			onMouseDown: _propTypes.default.func,
			/**
			* `scale`, if set, applies scaling while dragging an element
			*/
			scale: _propTypes.default.number,
			/**
			* These properties should be defined on the child, not here.
			*/
			className: _shims.dontSetMe,
			style: _shims.dontSetMe,
			transform: _shims.dontSetMe
		});
		_defineProperty(DraggableCore, "defaultProps", {
			allowAnyClick: false,
			allowMobileScroll: false,
			disabled: false,
			enableUserSelectHack: true,
			onStart: function() {},
			onDrag: function() {},
			onStop: function() {},
			onMouseDown: function() {},
			scale: 1
		});
	}));

//#endregion
//#region node_modules/react-draggable/build/cjs/Draggable.js
	var require_Draggable = /* @__PURE__ */ __commonJSMin(((exports) => {
		init_objectSpread2();
		init_objectWithoutProperties();
		var _excluded = [
			"axis",
			"bounds",
			"children",
			"defaultPosition",
			"defaultClassName",
			"defaultClassNameDragging",
			"defaultClassNameDragged",
			"position",
			"positionOffset",
			"scale"
		];
		Object.defineProperty(exports, "__esModule", { value: true });
		Object.defineProperty(exports, "DraggableCore", {
			enumerable: true,
			get: function() {
				return _DraggableCore.default;
			}
		});
		exports.default = void 0;
		var React$46 = _interopRequireWildcard((globalThis.React));
		var _propTypes = _interopRequireDefault(require_prop_types());
		var _reactDom = _interopRequireDefault((globalThis.ReactDOM));
		var _clsx = require_clsx();
		var _domFns = require_domFns();
		var _positionFns = require_positionFns();
		var _shims = require_shims();
		var _DraggableCore = _interopRequireDefault(require_DraggableCore());
		var _log = _interopRequireDefault(require_log());
		function _interopRequireDefault(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function _interopRequireWildcard(e, t) {
			if ("function" == typeof WeakMap) {
				var r = /* @__PURE__ */ new WeakMap();
				var n = /* @__PURE__ */ new WeakMap();
			}
			return (_interopRequireWildcard = function(e, t) {
				if (!t && e && e.__esModule) return e;
				var o;
				var i;
				var f = {
					__proto__: null,
					default: e
				};
				if (null === e || "object" != typeof e && "function" != typeof e) return f;
				if (o = t ? n : r) {
					if (o.has(e)) return o.get(e);
					o.set(e, f);
				}
				for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]);
				return f;
			})(e, t);
		}
		function _extends() {
			return _extends = Object.assign ? Object.assign.bind() : function(n) {
				for (var e = 1; e < arguments.length; e++) {
					var t = arguments[e];
					for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
				}
				return n;
			}, _extends.apply(null, arguments);
		}
		function _defineProperty(e, r, t) {
			return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
				value: t,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[r] = t, e;
		}
		function _toPropertyKey(t) {
			var i = _toPrimitive(t, "string");
			return "symbol" == typeof i ? i : i + "";
		}
		function _toPrimitive(t, r) {
			if ("object" != typeof t || !t) return t;
			var e = t[Symbol.toPrimitive];
			if (void 0 !== e) {
				var i = e.call(t, r || "default");
				if ("object" != typeof i) return i;
				throw new TypeError("@@toPrimitive must return a primitive value.");
			}
			return ("string" === r ? String : Number)(t);
		}
		var Draggable = class extends React$46.Component {
			static getDerivedStateFromProps(_ref, _ref2) {
				let { position } = _ref;
				let { prevPropsPosition } = _ref2;
				if (position && (!prevPropsPosition || position.x !== prevPropsPosition.x || position.y !== prevPropsPosition.y)) {
					(0, _log.default)("Draggable: getDerivedStateFromProps %j", {
						position,
						prevPropsPosition
					});
					return {
						x: position.x,
						y: position.y,
						prevPropsPosition: _objectSpread2({}, position)
					};
				}
				return null;
			}
			constructor(props) {
				super(props);
				_defineProperty(this, "onDragStart", (e, coreData) => {
					(0, _log.default)("Draggable: onDragStart: %j", coreData);
					if (this.props.onStart(e, (0, _positionFns.createDraggableData)(this, coreData)) === false) return false;
					this.setState({
						dragging: true,
						dragged: true
					});
				});
				_defineProperty(this, "onDrag", (e, coreData) => {
					if (!this.state.dragging) return false;
					(0, _log.default)("Draggable: onDrag: %j", coreData);
					const uiData = (0, _positionFns.createDraggableData)(this, coreData);
					const newState = {
						x: uiData.x,
						y: uiData.y,
						slackX: 0,
						slackY: 0
					};
					if (this.props.bounds) {
						const { x, y } = newState;
						newState.x += this.state.slackX;
						newState.y += this.state.slackY;
						const [newStateX, newStateY] = (0, _positionFns.getBoundPosition)(this, newState.x, newState.y);
						newState.x = newStateX;
						newState.y = newStateY;
						newState.slackX = this.state.slackX + (x - newState.x);
						newState.slackY = this.state.slackY + (y - newState.y);
						uiData.x = newState.x;
						uiData.y = newState.y;
						uiData.deltaX = newState.x - this.state.x;
						uiData.deltaY = newState.y - this.state.y;
					}
					if (this.props.onDrag(e, uiData) === false) return false;
					this.setState(newState);
				});
				_defineProperty(this, "onDragStop", (e, coreData) => {
					if (!this.state.dragging) return false;
					if (this.props.onStop(e, (0, _positionFns.createDraggableData)(this, coreData)) === false) return false;
					(0, _log.default)("Draggable: onDragStop: %j", coreData);
					const newState = {
						dragging: false,
						slackX: 0,
						slackY: 0
					};
					if (Boolean(this.props.position)) {
						const { x, y } = this.props.position;
						newState.x = x;
						newState.y = y;
					}
					this.setState(newState);
				});
				this.state = {
					dragging: false,
					dragged: false,
					x: props.position ? props.position.x : props.defaultPosition.x,
					y: props.position ? props.position.y : props.defaultPosition.y,
					prevPropsPosition: _objectSpread2({}, props.position),
					slackX: 0,
					slackY: 0,
					isElementSVG: false
				};
				if (props.position && !(props.onDrag || props.onStop)) console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
			}
			componentDidMount() {
				if (typeof window.SVGElement !== "undefined" && this.findDOMNode() instanceof window.SVGElement) this.setState({ isElementSVG: true });
			}
			componentWillUnmount() {
				if (this.state.dragging) this.setState({ dragging: false });
			}
			findDOMNode() {
				var _this$props$nodeRef$c;
				var _this$props;
				return (_this$props$nodeRef$c = (_this$props = this.props) === null || _this$props === void 0 || (_this$props = _this$props.nodeRef) === null || _this$props === void 0 ? void 0 : _this$props.current) !== null && _this$props$nodeRef$c !== void 0 ? _this$props$nodeRef$c : _reactDom.default.findDOMNode(this);
			}
			render() {
				const _this$props2 = this.props, { axis, bounds, children, defaultPosition, defaultClassName, defaultClassNameDragging, defaultClassNameDragged, position, positionOffset, scale } = _this$props2, draggableCoreProps = _objectWithoutProperties(_this$props2, _excluded);
				let style = {};
				let svgTransform = null;
				const draggable = !Boolean(position) || this.state.dragging;
				const validPosition = position || defaultPosition;
				const transformOpts = {
					x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : validPosition.x,
					y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : validPosition.y
				};
				if (this.state.isElementSVG) svgTransform = (0, _domFns.createSVGTransform)(transformOpts, positionOffset);
				else style = (0, _domFns.createCSSTransform)(transformOpts, positionOffset);
				const className = (0, _clsx.clsx)(children.props.className || "", defaultClassName, {
					[defaultClassNameDragging]: this.state.dragging,
					[defaultClassNameDragged]: this.state.dragged
				});
				return /*#__PURE__*/ React$46.createElement(_DraggableCore.default, _extends({}, draggableCoreProps, {
					onStart: this.onDragStart,
					onDrag: this.onDrag,
					onStop: this.onDragStop
				}), /*#__PURE__*/ React$46.cloneElement(React$46.Children.only(children), {
					className,
					style: _objectSpread2(_objectSpread2({}, children.props.style), style),
					transform: svgTransform
				}));
			}
		};
		exports.default = Draggable;
		_defineProperty(Draggable, "displayName", "Draggable");
		_defineProperty(Draggable, "propTypes", _objectSpread2(_objectSpread2({}, _DraggableCore.default.propTypes), {}, {
			/**
			* `axis` determines which axis the draggable can move.
			*
			*  Note that all callbacks will still return data as normal. This only
			*  controls flushing to the DOM.
			*
			* 'both' allows movement horizontally and vertically.
			* 'x' limits movement to horizontal axis.
			* 'y' limits movement to vertical axis.
			* 'none' limits all movement.
			*
			* Defaults to 'both'.
			*/
			axis: _propTypes.default.oneOf([
				"both",
				"x",
				"y",
				"none"
			]),
			/**
			* `bounds` determines the range of movement available to the element.
			* Available values are:
			*
			* 'parent' restricts movement within the Draggable's parent node.
			*
			* Alternatively, pass an object with the following properties, all of which are optional:
			*
			* {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
			*
			* All values are in px.
			*
			* Example:
			*
			* ```jsx
			*   let App = React.createClass({
			*       render: function () {
			*         return (
			*            <Draggable bounds={{right: 300, bottom: 300}}>
			*              <div>Content</div>
			*           </Draggable>
			*         );
			*       }
			*   });
			* ```
			*/
			bounds: _propTypes.default.oneOfType([
				_propTypes.default.shape({
					left: _propTypes.default.number,
					right: _propTypes.default.number,
					top: _propTypes.default.number,
					bottom: _propTypes.default.number
				}),
				_propTypes.default.string,
				_propTypes.default.oneOf([false])
			]),
			defaultClassName: _propTypes.default.string,
			defaultClassNameDragging: _propTypes.default.string,
			defaultClassNameDragged: _propTypes.default.string,
			/**
			* `defaultPosition` specifies the x and y that the dragged item should start at
			*
			* Example:
			*
			* ```jsx
			*      let App = React.createClass({
			*          render: function () {
			*              return (
			*                  <Draggable defaultPosition={{x: 25, y: 25}}>
			*                      <div>I start with transformX: 25px and transformY: 25px;</div>
			*                  </Draggable>
			*              );
			*          }
			*      });
			* ```
			*/
			defaultPosition: _propTypes.default.shape({
				x: _propTypes.default.number,
				y: _propTypes.default.number
			}),
			positionOffset: _propTypes.default.shape({
				x: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
				y: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
			}),
			/**
			* `position`, if present, defines the current position of the element.
			*
			*  This is similar to how form elements in React work - if no `position` is supplied, the component
			*  is uncontrolled.
			*
			* Example:
			*
			* ```jsx
			*      let App = React.createClass({
			*          render: function () {
			*              return (
			*                  <Draggable position={{x: 25, y: 25}}>
			*                      <div>I start with transformX: 25px and transformY: 25px;</div>
			*                  </Draggable>
			*              );
			*          }
			*      });
			* ```
			*/
			position: _propTypes.default.shape({
				x: _propTypes.default.number,
				y: _propTypes.default.number
			}),
			/**
			* These properties should be defined on the child, not here.
			*/
			className: _shims.dontSetMe,
			style: _shims.dontSetMe,
			transform: _shims.dontSetMe
		}));
		_defineProperty(Draggable, "defaultProps", _objectSpread2(_objectSpread2({}, _DraggableCore.default.defaultProps), {}, {
			axis: "both",
			bounds: false,
			defaultClassName: "react-draggable",
			defaultClassNameDragging: "react-draggable-dragging",
			defaultClassNameDragged: "react-draggable-dragged",
			defaultPosition: {
				x: 0,
				y: 0
			},
			scale: 1
		}));
	}));

//#endregion
//#region node_modules/react-draggable/build/cjs/cjs.js
	var require_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var { default: Draggable, DraggableCore } = require_Draggable();
		module.exports = Draggable;
		module.exports.default = Draggable;
		module.exports.DraggableCore = DraggableCore;
	}));

//#endregion
//#region modules/ai/assets/js/editor/components/dialog-header.js
	var import_prop_types$33, StyledElementorLogo, DialogHeader$1;
	var init_dialog_header = __esmMin((() => {
		init_extends();
		import_prop_types$33 = /* @__PURE__ */ __toESM(require_prop_types());
		StyledElementorLogo = (0, _elementor_ui.styled)(function ElementorLogo(props) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, _extends({ viewBox: "0 0 32 32" }, props), /*#__PURE__*/ react.default.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M2.69648 24.8891C0.938383 22.2579 0 19.1645 0 16C0 11.7566 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7566 0 16 0C19.1645 0 22.2579 0.938383 24.8891 2.69648C27.5203 4.45459 29.5711 6.95344 30.7821 9.87706C31.9931 12.8007 32.3099 16.0177 31.6926 19.1214C31.0752 22.2251 29.5514 25.0761 27.3137 27.3137C25.0761 29.5514 22.2251 31.0752 19.1214 31.6926C16.0177 32.3099 12.8007 31.9931 9.87706 30.7821C6.95344 29.5711 4.45459 27.5203 2.69648 24.8891ZM12.0006 9.33281H9.33437V22.6665H12.0006V9.33281ZM22.6657 9.33281H14.6669V11.9991H22.6657V9.33281ZM22.6657 14.6654H14.6669V17.3316H22.6657V14.6654ZM22.6657 20.0003H14.6669V22.6665H22.6657V20.0003Z"
			}));
		})(function(_ref) {
			var theme = _ref.theme;
			return {
				width: theme.spacing(3),
				height: theme.spacing(3),
				"& path": { fill: theme.palette.text.primary }
			};
		});
		DialogHeader$1 = function DialogHeader(props) {
			var hideAiBetaLogo = props.hideAiBetaLogo;
			var onClose = props.onClose;
			var children = props.children;
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.AppBar, {
				sx: { fontWeight: "normal" },
				color: "transparent",
				position: "relative"
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Toolbar, { variant: "dense" }, !hideAiBetaLogo && /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, /*#__PURE__*/ react.default.createElement(StyledElementorLogo, { sx: { mr: 1 } }), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
				component: "span",
				variant: "subtitle2",
				sx: {
					fontWeight: "bold",
					textTransform: "uppercase"
				}
			}, (0, _wordpress_i18n.__)("AI", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Chip, {
				label: (0, _wordpress_i18n.__)("Beta", "elementor"),
				color: "default",
				size: "small",
				sx: { ml: 1 }
			})), /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
				direction: "row",
				spacing: 1,
				alignItems: "center",
				sx: { ml: hideAiBetaLogo ? 0 : "auto" }
			}, children, /*#__PURE__*/ react.default.createElement(_elementor_ui.IconButton, {
				size: "small",
				"aria-label": "close",
				onClick: onClose,
				sx: { "&.MuiButtonBase-root": { mr: -1 } }
			}, /*#__PURE__*/ react.default.createElement(_elementor_icons.XIcon, null)))));
		};
		DialogHeader$1.propTypes = {
			onClose: import_prop_types$33.default.func.isRequired,
			hideAiBetaLogo: import_prop_types$33.default.bool,
			children: import_prop_types$33.default.oneOfType([import_prop_types$33.default.arrayOf(import_prop_types$33.default.node), import_prop_types$33.default.node])
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/components/prompt-dialog.js
	function ownKeys$10(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread$10(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$10(Object(t), !0).forEach(function(r) {
				_defineProperty$1(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$10(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	var import_prop_types$32, import_cjs, DraggablePaper, PromptDialog;
	var init_prompt_dialog = __esmMin((() => {
		init_extends();
		init_defineProperty$1();
		init_slicedToArray();
		import_prop_types$32 = /* @__PURE__ */ __toESM(require_prop_types());
		import_cjs = /* @__PURE__ */ __toESM(require_cjs());
		init_dialog_header();
		__name(ownKeys$10, "ownKeys");
		__name(_objectSpread$10, "_objectSpread");
		DraggablePaper = function DraggablePaper(props) {
			var _useState2 = _slicedToArray((0, react.useState)({
				x: 0,
				y: 0
			}), 2);
			var position = _useState2[0];
			var setPosition = _useState2[1];
			var paperRef = (0, react.useRef)(null);
			var timeout = (0, react.useRef)(null);
			var onDrag = function onDrag(_e, _ref) {
				var x = _ref.x;
				var y = _ref.y;
				return setPosition({
					x,
					y
				});
			};
			var handlePositionBoundaries = function handlePositionBoundaries() {
				clearTimeout(timeout.current);
				timeout.current = setTimeout(function() {
					var _paperRef$current;
					var dialogTop = (_paperRef$current = paperRef.current) === null || _paperRef$current === void 0 ? void 0 : _paperRef$current.getBoundingClientRect().top;
					if (dialogTop < 0) setPosition(function(prev) {
						return _objectSpread$10(_objectSpread$10({}, prev), {}, { y: prev.y - dialogTop });
					});
				}, 50);
			};
			(0, react.useEffect)(function() {
				var resizeObserver = new ResizeObserver(handlePositionBoundaries);
				resizeObserver.observe(paperRef.current);
				return function() {
					resizeObserver.disconnect();
				};
			}, []);
			return /*#__PURE__*/ react.default.createElement(import_cjs.default, {
				position,
				onDrag,
				handle: ".MuiAppBar-root",
				cancel: "[class*=\"MuiDialogContent-root\"]",
				bounds: "parent"
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Paper, _extends({}, props, { ref: paperRef })));
		};
		PromptDialog = function PromptDialog(props) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Dialog, _extends({
				scroll: "paper",
				open: true,
				fullWidth: true,
				hideBackdrop: true,
				PaperComponent: DraggablePaper,
				disableScrollLock: true,
				sx: { "& .MuiDialog-container": {
					alignItems: "flex-start",
					mt: "18vh"
				} },
				PaperProps: { sx: {
					m: 0,
					maxHeight: "76vh"
				} }
			}, props), props.children);
		};
		PromptDialog.propTypes = {
			onClose: import_prop_types$32.default.func.isRequired,
			children: import_prop_types$32.default.node,
			maxWidth: import_prop_types$32.default.oneOf([
				"xs",
				"sm",
				"md",
				"lg",
				"xl",
				false
			])
		};
		PromptDialog.Header = DialogHeader$1;
		PromptDialog.Content = _elementor_ui.DialogContent;
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/layout-dialog.js
	function ownKeys$9(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread$9(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$9(Object(t), !0).forEach(function(r) {
				_defineProperty$1(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	var import_prop_types$31, _excluded$7, StyledDialog, DialogHeader, StyledDialogContent, LayoutDialog;
	var init_layout_dialog = __esmMin((() => {
		init_extends();
		init_defineProperty$1();
		init_slicedToArray();
		init_objectWithoutProperties$1();
		import_prop_types$31 = /* @__PURE__ */ __toESM(require_prop_types());
		init_prompt_dialog();
		_excluded$7 = ["sx", "PaperProps"];
		__name(ownKeys$9, "ownKeys");
		__name(_objectSpread$9, "_objectSpread");
		StyledDialog = (0, _elementor_ui.styled)(PromptDialog)(function() {
			return {
				"& .MuiDialog-container": {
					marginTop: 0,
					alignItems: "flex-end",
					paddingBottom: "16vh"
				},
				"& .MuiPaper-root": {
					margin: 0,
					maxHeight: "80vh"
				}
			};
		});
		DialogHeader = function DialogHeader(_ref) {
			var onClose = _ref.onClose;
			var children = _ref.children;
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.AppBar, {
				sx: { fontWeight: "normal" },
				color: "transparent",
				position: "relative"
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Toolbar, { variant: "dense" }, /*#__PURE__*/ react.default.createElement(_elementor_icons.AIIcon, { sx: { mr: 1 } }), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
				component: "span",
				variant: "subtitle2",
				sx: {
					fontWeight: "bold",
					textTransform: "uppercase"
				}
			}, (0, _wordpress_i18n.__)("AI", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Chip, {
				label: (0, _wordpress_i18n.__)("Beta", "elementor"),
				color: "default",
				size: "small",
				sx: { ml: 1 }
			}), /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
				direction: "row",
				spacing: 1,
				alignItems: "center",
				sx: { ml: "auto" }
			}, children, /*#__PURE__*/ react.default.createElement(_elementor_ui.IconButton, {
				size: "small",
				"aria-label": "close",
				onClick: onClose,
				sx: { "&.MuiButtonBase-root": { mr: -1 } }
			}, /*#__PURE__*/ react.default.createElement(_elementor_icons.XIcon, null)))));
		};
		DialogHeader.propTypes = {
			children: import_prop_types$31.default.node,
			onClose: import_prop_types$31.default.func.isRequired
		};
		StyledDialogContent = (0, _elementor_ui.styled)(PromptDialog.Content)(function() {
			return { "&.MuiDialogContent-root": { padding: 0 } };
		});
		LayoutDialog = function LayoutDialog(_ref2) {
			var _ref2$sx = _ref2.sx;
			var sx = _ref2$sx === void 0 ? {} : _ref2$sx;
			var _ref2$PaperProps = _ref2.PaperProps;
			var PaperProps = _ref2$PaperProps === void 0 ? {} : _ref2$PaperProps;
			var props = _objectWithoutProperties$1(_ref2, _excluded$7);
			var _useState2 = _slicedToArray((0, react.useState)({ pointerEvents: "none" }), 2);
			var sxStyle = _useState2[0];
			var setSxStyle = _useState2[1];
			var timeoutRef = (0, react.useRef)(null);
			/**
			* The PromptDialog is using disableScrollLock in order to allow scrolling the page when the Dialog is opened.
			* When using the react-draggable library inside the editor, the background page scroll is not working smoothly.
			* Therefore, we need to delay the pointerEvents: none, which allowing to scroll the page content.
			*/
			return /*#__PURE__*/ react.default.createElement(StyledDialog, _extends({
				maxWidth: "md",
				PaperProps: _objectSpread$9({
					sx: { pointerEvents: "auto" },
					onMouseEnter: function onMouseEnter() {
						clearTimeout(timeoutRef.current);
						setSxStyle({ pointerEvents: "all" });
					},
					onMouseLeave: function onMouseLeave() {
						clearTimeout(timeoutRef.current);
						timeoutRef.current = setTimeout(function() {
							setSxStyle({ pointerEvents: "none" });
						}, 200);
					}
				}, PaperProps)
			}, props, { sx: _objectSpread$9(_objectSpread$9({}, sxStyle), sx) }));
		};
		LayoutDialog.propTypes = {
			sx: import_prop_types$31.default.object,
			PaperProps: import_prop_types$31.default.object
		};
		LayoutDialog.Header = DialogHeader;
		LayoutDialog.Content = StyledDialogContent;
	}));

//#endregion
//#region modules/ai/assets/js/editor/components/prompt-library-link.js
	var import_prop_types$30, PromptLibraryLink;
	var init_prompt_library_link = __esmMin((() => {
		import_prop_types$30 = /* @__PURE__ */ __toESM(require_prop_types());
		PromptLibraryLink = function PromptLibraryLink(props) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
				variant: "body2",
				color: "text.secondary"
			}, (0, _wordpress_i18n.__)("For more suggestions, explore our"), " ", /*#__PURE__*/ react.default.createElement(_elementor_ui.Link, {
				href: props.libraryLink,
				className: "elementor-clickable",
				target: "_blank"
			}, (0, _wordpress_i18n.__)("prompt library")));
		};
		PromptLibraryLink.propTypes = { libraryLink: import_prop_types$30.default.string };
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/context/config.js
	var config_exports = /* @__PURE__ */ __exportAll({
		ConfigProvider: () => ConfigProvider,
		LAYOUT_APP_MODES: () => LAYOUT_APP_MODES,
		MODE_LAYOUT: () => MODE_LAYOUT,
		MODE_VARIATION: () => MODE_VARIATION,
		default: () => ConfigContext,
		useConfig: () => useConfig
	});
	var import_prop_types$29, MODE_LAYOUT, MODE_VARIATION, LAYOUT_APP_MODES, ConfigContext, useConfig, ConfigProvider;
	var init_config = __esmMin((() => {
		import_prop_types$29 = /* @__PURE__ */ __toESM(require_prop_types());
		MODE_LAYOUT = "layout";
		MODE_VARIATION = "variation";
		LAYOUT_APP_MODES = [MODE_LAYOUT, MODE_VARIATION];
		ConfigContext = react.default.createContext({});
		useConfig = function useConfig() {
			return react.default.useContext(ConfigContext);
		};
		ConfigProvider = function ConfigProvider(props) {
			return /*#__PURE__*/ react.default.createElement(ConfigContext.Provider, { value: {
				mode: props.mode,
				attachmentsTypes: props.attachmentsTypes,
				onClose: props.onClose,
				onConnect: props.onConnect,
				onData: props.onData,
				onInsert: props.onInsert,
				onSelect: props.onSelect,
				onGenerate: props.onGenerate,
				currentContext: props.currentContext,
				hasPro: props.hasPro
			} }, props.children);
		};
		ConfigProvider.propTypes = {
			mode: import_prop_types$29.default.oneOf(LAYOUT_APP_MODES).isRequired,
			children: import_prop_types$29.default.node.isRequired,
			attachmentsTypes: import_prop_types$29.default.object.isRequired,
			onClose: import_prop_types$29.default.func.isRequired,
			onConnect: import_prop_types$29.default.func.isRequired,
			onData: import_prop_types$29.default.func.isRequired,
			onInsert: import_prop_types$29.default.func.isRequired,
			onSelect: import_prop_types$29.default.func.isRequired,
			onGenerate: import_prop_types$29.default.func.isRequired,
			currentContext: import_prop_types$29.default.object,
			hasPro: import_prop_types$29.default.bool
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/prompt-autocomplete.js
	function ownKeys$8(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread$8(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$8(Object(t), !0).forEach(function(r) {
				_defineProperty$1(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	var import_prop_types$28, _excluded$6, TextInput, PaperComponent, PromptAutocomplete;
	var init_prompt_autocomplete = __esmMin((() => {
		init_slicedToArray();
		init_objectWithoutProperties$1();
		init_extends();
		init_defineProperty$1();
		import_prop_types$28 = /* @__PURE__ */ __toESM(require_prop_types());
		init_prompt_library_link();
		init_config();
		_excluded$6 = ["onSubmit"];
		__name(ownKeys$8, "ownKeys");
		__name(_objectSpread$8, "_objectSpread");
		TextInput = (0, react.forwardRef)(function(props, ref) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.TextField, _extends({
				autoFocus: true,
				multiline: true,
				size: "small",
				maxRows: 3,
				color: "secondary",
				variant: "standard"
			}, props, {
				inputRef: ref,
				InputProps: _objectSpread$8(_objectSpread$8({}, props.InputProps), {}, {
					type: "search",
					sx: { pt: 0 }
				})
			}));
		});
		TextInput.propTypes = { InputProps: import_prop_types$28.default.object };
		PaperComponent = function PaperComponent(props) {
			var libraryLink = "variation" === useConfig().mode ? "https://go.elementor.com/ai-prompt-library-variations/" : "https://go.elementor.com/ai-prompt-library-containers/";
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Paper, _extends({}, props, {
				elevation: 8,
				sx: { borderRadius: 2 }
			}), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
				component: _elementor_ui.Box,
				color: function color(theme) {
					return theme.palette.text.tertiary;
				},
				variant: "caption",
				paddingX: 2,
				paddingY: 1
			}, (0, _wordpress_i18n.__)("Suggested Prompts", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Divider, null), props.children, /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, { sx: { m: 2 } }, /*#__PURE__*/ react.default.createElement(PromptLibraryLink, { libraryLink })));
		};
		PaperComponent.propTypes = { children: import_prop_types$28.default.node };
		PromptAutocomplete = function PromptAutocomplete(_ref) {
			var onSubmit = _ref.onSubmit;
			var props = _objectWithoutProperties$1(_ref, _excluded$6);
			var _useState2 = _slicedToArray((0, react.useState)(false), 2);
			var showSuggestions = _useState2[0];
			var setShowSuggestions = _useState2[1];
			var theme = (0, _elementor_ui.useTheme)();
			var itemHeight = parseInt(theme.spacing(4));
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Autocomplete, _extends({
				PaperComponent,
				ListboxProps: { sx: { maxHeight: 5 * itemHeight } },
				renderOption: function renderOption(optionProps, option) {
					return /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, _extends({}, optionProps, {
						title: option.text,
						noWrap: true,
						variant: "body2",
						component: _elementor_ui.Box,
						sx: { "&.MuiAutocomplete-option": {
							display: "block",
							minHeight: itemHeight
						} }
					}), option.text);
				},
				freeSolo: true,
				fullWidth: true,
				disableClearable: true,
				open: showSuggestions,
				onClose: function onClose(e) {
					var _e$relatedTarget;
					return setShowSuggestions("A" === ((_e$relatedTarget = e.relatedTarget) === null || _e$relatedTarget === void 0 ? void 0 : _e$relatedTarget.tagName));
				},
				onKeyDown: function onKeyDown(e) {
					if ("Enter" === e.key && !e.shiftKey && !showSuggestions) onSubmit(e);
					else if ("/" === e.key && "" === e.target.value) {
						e.preventDefault();
						setShowSuggestions(true);
					}
				}
			}, props));
		};
		PromptAutocomplete.propTypes = { onSubmit: import_prop_types$28.default.func.isRequired };
		PromptAutocomplete.TextInput = TextInput;
	}));

//#endregion
//#region modules/ai/assets/js/editor/icons/wand-icon.js
	var WandIcon;
	var init_wand_icon = __esmMin((() => {
		init_extends();
		WandIcon = react.default.forwardRef(function(props, ref) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, _extends({ viewBox: "0 0 24 24" }, props, { ref }), /*#__PURE__*/ react.default.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 2.25C9.41421 2.25 9.75 2.58579 9.75 3C9.75 3.33152 9.8817 3.64946 10.1161 3.88388C10.3505 4.1183 10.6685 4.25 11 4.25C11.4142 4.25 11.75 4.58579 11.75 5C11.75 5.41421 11.4142 5.75 11 5.75C10.6685 5.75 10.3505 5.8817 10.1161 6.11612C9.8817 6.35054 9.75 6.66848 9.75 7C9.75 7.41421 9.41421 7.75 9 7.75C8.58579 7.75 8.25 7.41421 8.25 7C8.25 6.66848 8.1183 6.35054 7.88388 6.11612C7.64946 5.8817 7.33152 5.75 7 5.75C6.58579 5.75 6.25 5.41421 6.25 5C6.25 4.58579 6.58579 4.25 7 4.25C7.33152 4.25 7.64946 4.1183 7.88388 3.88388C8.1183 3.64946 8.25 3.33152 8.25 3C8.25 2.58579 8.58579 2.25 9 2.25ZM9 4.88746C8.98182 4.90673 8.96333 4.92576 8.94454 4.94454C8.92576 4.96333 8.90673 4.98182 8.88746 5C8.90673 5.01818 8.92576 5.03667 8.94454 5.05546C8.96333 5.07424 8.98182 5.09327 9 5.11254C9.01818 5.09327 9.03667 5.07424 9.05546 5.05546C9.07424 5.03667 9.09327 5.01818 9.11254 5C9.09327 4.98182 9.07424 4.96333 9.05546 4.94454C9.03667 4.92576 9.01818 4.90673 9 4.88746Z"
			}), /*#__PURE__*/ react.default.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M18.5303 2.46967C18.2374 2.17678 17.7626 2.17678 17.4697 2.46967L2.46967 17.4697C2.17678 17.7626 2.17678 18.2374 2.46967 18.5303L5.46967 21.5303C5.76256 21.8232 6.23744 21.8232 6.53033 21.5303L21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L18.5303 2.46967ZM18 7.93934L19.9393 6L18 4.06066L16.0607 6L18 7.93934ZM15 7.06066L16.9393 9L6 19.9393L4.06066 18L15 7.06066Z"
			}), /*#__PURE__*/ react.default.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M19.75 13C19.75 12.5858 19.4142 12.25 19 12.25C18.5858 12.25 18.25 12.5858 18.25 13C18.25 13.3315 18.1183 13.6495 17.8839 13.8839C17.6495 14.1183 17.3315 14.25 17 14.25C16.5858 14.25 16.25 14.5858 16.25 15C16.25 15.4142 16.5858 15.75 17 15.75C17.3315 15.75 17.6495 15.8817 17.8839 16.1161C18.1183 16.3505 18.25 16.6685 18.25 17C18.25 17.4142 18.5858 17.75 19 17.75C19.4142 17.75 19.75 17.4142 19.75 17C19.75 16.6685 19.8817 16.3505 20.1161 16.1161C20.3505 15.8817 20.6685 15.75 21 15.75C21.4142 15.75 21.75 15.4142 21.75 15C21.75 14.5858 21.4142 14.25 21 14.25C20.6685 14.25 20.3505 14.1183 20.1161 13.8839C19.8817 13.6495 19.75 13.3315 19.75 13ZM18.9445 14.9445C18.9633 14.9258 18.9818 14.9067 19 14.8875C19.0182 14.9067 19.0367 14.9258 19.0555 14.9445C19.0742 14.9633 19.0933 14.9818 19.1125 15C19.0933 15.0182 19.0742 15.0367 19.0555 15.0555C19.0367 15.0742 19.0182 15.0933 19 15.1125C18.9818 15.0933 18.9633 15.0742 18.9445 15.0555C18.9258 15.0367 18.9067 15.0182 18.8875 15C18.9067 14.9818 18.9258 14.9633 18.9445 14.9445Z"
			}));
		});
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-media/components/enhance-button.js
	var import_prop_types$27, _excluded$5, StyledWandIcon, EnhanceButton;
	var init_enhance_button = __esmMin((() => {
		init_extends();
		init_objectWithoutProperties$1();
		import_prop_types$27 = /* @__PURE__ */ __toESM(require_prop_types());
		init_wand_icon();
		_excluded$5 = ["isLoading"];
		StyledWandIcon = (0, _elementor_ui.withDirection)(WandIcon);
		EnhanceButton = function EnhanceButton(_ref) {
			var isLoading = _ref.isLoading;
			var props = _objectWithoutProperties$1(_ref, _excluded$5);
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Tooltip, { title: (0, _wordpress_i18n.__)("Enhance prompt", "elementor") }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
				component: "span",
				sx: { cursor: props.disabled ? "default" : "pointer" }
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.IconButton, _extends({
				size: "small",
				color: "secondary"
			}, props), isLoading ? /*#__PURE__*/ react.default.createElement(_elementor_ui.CircularProgress, {
				color: "secondary",
				size: 20
			}) : /*#__PURE__*/ react.default.createElement(StyledWandIcon, { fontSize: "small" }))));
		};
		EnhanceButton.propTypes = {
			disabled: import_prop_types$27.default.bool,
			isLoading: import_prop_types$27.default.bool
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-media/components/generate-submit.js
	var import_prop_types$26, GenerateSubmit;
	var init_generate_submit = __esmMin((() => {
		init_extends();
		import_prop_types$26 = /* @__PURE__ */ __toESM(require_prop_types());
		GenerateSubmit = function GenerateSubmit(props) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, _extends({
				fullWidth: true,
				size: "medium",
				type: "submit",
				variant: "contained"
			}, props), props.children || (0, _wordpress_i18n.__)("Generate", "elementor"));
		};
		GenerateSubmit.propTypes = { children: import_prop_types$26.default.node };
	}));

//#endregion
//#region modules/ai/assets/js/editor/icons/arrow-left-icon.js
	var ArrowLeftIcon;
	var init_arrow_left_icon = __esmMin((() => {
		init_extends();
		ArrowLeftIcon = react.default.forwardRef(function(props, ref) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, _extends({ viewBox: "0 0 24 24" }, props, { ref }), /*#__PURE__*/ react.default.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9.53033 7.46967C9.82322 7.76256 9.82322 8.23744 9.53033 8.53033L6.81066 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H6.81066L9.53033 15.4697C9.82322 15.7626 9.82322 16.2374 9.53033 16.5303C9.23744 16.8232 8.76256 16.8232 8.46967 16.5303L4.46967 12.5303C4.17678 12.2374 4.17678 11.7626 4.46967 11.4697L8.46967 7.46967C8.76256 7.17678 9.23744 7.17678 9.53033 7.46967Z"
			}));
		});
	}));

//#endregion
//#region modules/ai/assets/js/editor/icons/edit-icon.js
	var EditIcon;
	var init_edit_icon = __esmMin((() => {
		init_extends();
		EditIcon = react.default.forwardRef(function(props, ref) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, _extends({ viewBox: "0 0 24 24" }, props, { ref }), /*#__PURE__*/ react.default.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M13.9697 4.96967C14.6408 4.29858 15.5509 3.92157 16.5 3.92157C17.4491 3.92157 18.3592 4.29858 19.0303 4.96967C19.7014 5.64075 20.0784 6.55094 20.0784 7.5C20.0784 8.44905 19.7014 9.35924 19.0303 10.0303L8.53033 20.5303C8.38968 20.671 8.19891 20.75 8 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20V16C3.25 15.8011 3.32902 15.6103 3.46967 15.4697L13.9697 4.96967ZM16.5 5.42157C15.9488 5.42157 15.4201 5.64055 15.0303 6.03033L4.75 16.3107V19.25H7.68934L17.9697 8.96967C18.3595 8.57989 18.5784 8.05123 18.5784 7.5C18.5784 6.94876 18.3595 6.42011 17.9697 6.03033C17.5799 5.64055 17.0512 5.42157 16.5 5.42157Z"
			}), /*#__PURE__*/ react.default.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12.9697 5.96967C13.2626 5.67677 13.7374 5.67677 14.0303 5.96967L18.0303 9.96967C18.3232 10.2626 18.3232 10.7374 18.0303 11.0303C17.7374 11.3232 17.2626 11.3232 16.9697 11.0303L12.9697 7.03033C12.6768 6.73743 12.6768 6.26256 12.9697 5.96967Z"
			}));
		});
	}));

//#endregion
//#region modules/ai/assets/js/editor/api/index.js
	var request, getUserInformation, getRemoteConfig, setGetStarted, setStatusFeedback, getImagePromptEnhanced, generateLayout, getLayoutPromptEnhanced;
	var init_api = __esmMin((() => {
		request = function request(endpoint) {
			var data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			var immediately = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
			var signal = arguments.length > 3 ? arguments[3] : void 0;
			if (Object.keys(data).length) if (window.elementorAiCurrentContext) data.context = window.elementorAiCurrentContext;
			else data.context = window.elementorWpAiCurrentContext;
			return new Promise(function(resolve, reject) {
				var ajaxData = elementorCommon.ajax.addRequest(endpoint, {
					success: resolve,
					error: reject,
					data,
					unique_id: data.unique_id
				}, immediately);
				if (signal && ajaxData.jqXhr) signal.addEventListener("abort", ajaxData.jqXhr.abort);
			});
		};
		getUserInformation = function getUserInformation(immediately) {
			return request("ai_get_user_information", void 0, immediately);
		};
		getRemoteConfig = function getRemoteConfig() {
			return request("ai_get_remote_config");
		};
		setGetStarted = function setGetStarted() {
			return request("ai_set_get_started");
		};
		setStatusFeedback = function setStatusFeedback(responseId) {
			return request("ai_set_status_feedback", { response_id: responseId }, true);
		};
		getImagePromptEnhanced = function getImagePromptEnhanced(prompt) {
			return request("ai_get_image_prompt_enhancer", { prompt });
		};
		generateLayout = function generateLayout(requestBody, signal) {
			return request("ai_generate_layout", requestBody, true, signal);
		};
		getLayoutPromptEnhanced = function getLayoutPromptEnhanced(prompt, enhanceType) {
			return request("ai_get_layout_prompt_enhancer", {
				prompt,
				enhance_type: enhanceType
			});
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/context/requests-ids.js
	function generateIds(template) {
		var _template$elements;
		template.id = getUniqueId().toString();
		if ((_template$elements = template.elements) !== null && _template$elements !== void 0 && _template$elements.length) template.elements.map(function(child) {
			return generateIds(child);
		});
		return template;
	}
	var import_prop_types$25, Context, useRequestIds, getUniqueId, RequestIdsProvider;
	var init_requests_ids = __esmMin((() => {
		init_slicedToArray();
		import_prop_types$25 = /* @__PURE__ */ __toESM(require_prop_types());
		Context = (0, react.createContext)({});
		useRequestIds = function useRequestIds() {
			var context = (0, react.useContext)(Context);
			if (!context) throw new Error("useRequestIds must be used within a RequestIdsProvider");
			return context;
		};
		getUniqueId = function getUniqueId(prefix) {
			return prefix + "-" + Math.random().toString(16).substr(2, 7);
		};
		window.EDITOR_SESSION_ID = window.EDITOR_SESSION_ID || getUniqueId("editor-session");
		RequestIdsProvider = function RequestIdsProvider(props) {
			var editorSessionId = (0, react.useRef)(window.EDITOR_SESSION_ID);
			var sessionId = (0, react.useRef)("");
			var generateId = (0, react.useRef)("");
			var batchId = (0, react.useRef)("");
			var requestId = (0, react.useRef)("");
			sessionId.current = getUniqueId("session");
			var setGenerate = function setGenerate() {
				generateId.current = getUniqueId("generate");
				return generateId;
			};
			var setBatch = function setBatch() {
				batchId.current = getUniqueId("batch");
				return batchId;
			};
			var setRequest = function setRequest() {
				requestId.current = getUniqueId("request");
				return requestId;
			};
			var _useState2 = _slicedToArray((0, react.useState)(0), 2);
			var usagePercentage = _useState2[0];
			var setUsagePercentage = _useState2[1];
			return /*#__PURE__*/ react.default.createElement(Context.Provider, { value: {
				editorSessionId,
				sessionId,
				generateId,
				batchId,
				requestId,
				setGenerate,
				setBatch,
				setRequest,
				usagePercentage,
				updateUsagePercentage: function updateUsagePercentage(newPercentage) {
					setUsagePercentage(newPercentage);
				}
			} }, props.children);
		};
		RequestIdsProvider.propTypes = { children: import_prop_types$25.default.node.isRequired };
	}));

//#endregion
//#region modules/ai/assets/js/editor/hooks/use-prompt.js
	function ownKeys$7(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread$7(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$7(Object(t), !0).forEach(function(r) {
				_defineProperty$1(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	var import_regenerator$8, _excluded$4, normalizeResponse, usePrompt;
	var init_use_prompt = __esmMin((() => {
		init_defineProperty$1();
		init_slicedToArray();
		init_objectWithoutProperties$1();
		import_regenerator$8 = /* @__PURE__ */ __toESM(require_regenerator());
		init_api();
		init_requests_ids();
		_excluded$4 = [
			"text",
			"response_id",
			"usage",
			"images"
		];
		__name(ownKeys$7, "ownKeys");
		__name(_objectSpread$7, "_objectSpread");
		normalizeResponse = function normalizeResponse(_ref) {
			var text = _ref.text;
			var responseId = _ref.response_id;
			var usage = _ref.usage;
			var images = _ref.images;
			var optional = _objectWithoutProperties$1(_ref, _excluded$4);
			var creditsData = usage ? usage.quota - usage.usedQuota : 0;
			var normalized = {
				result: text || images,
				responseId,
				credits: Math.max(creditsData, 0),
				usagePercentage: usage === null || usage === void 0 ? void 0 : usage.usagePercentage
			};
			if (optional.base_template_id) normalized.baseTemplateId = optional.base_template_id;
			normalized.type = optional.template_type;
			return normalized;
		};
		usePrompt = function usePrompt(fetchData, initialState) {
			var _useState2 = _slicedToArray((0, react.useState)(false), 2);
			var isLoading = _useState2[0];
			var setIsLoading = _useState2[1];
			var _useState4 = _slicedToArray((0, react.useState)(""), 2);
			var error = _useState4[0];
			var setError = _useState4[1];
			var _useState6 = _slicedToArray((0, react.useState)(initialState), 2);
			var data = _useState6[0];
			var setData = _useState6[1];
			var _useRequestIds = useRequestIds();
			var updateUsagePercentage = _useRequestIds.updateUsagePercentage;
			var usagePercentage = _useRequestIds.usagePercentage;
			var send = (0, react.useRef)(/*#__PURE__*/ function() {
				var _ref2 = _asyncToGenerator$1(/*#__PURE__*/ import_regenerator$8.default.mark(function _callee(payload) {
					return import_regenerator$8.default.wrap(function(_context) {
						while (1) switch (_context.prev = _context.next) {
							case 0: return _context.abrupt("return", payload);
							case 1:
							case "end": return _context.stop();
						}
					}, _callee);
				}));
				return function(_x) {
					return _ref2.apply(this, arguments);
				};
			}());
			var sendUsageData = (0, react.useRef)(function() {});
			(0, react.useEffect)(function() {
				var newUsageValue = data === null || data === void 0 ? void 0 : data.usagePercentage;
				if (newUsageValue && newUsageValue !== usagePercentage) updateUsagePercentage(newUsageValue);
			}, [
				data,
				usagePercentage,
				updateUsagePercentage
			]);
			var _useRequestIds2 = useRequestIds();
			var setRequest = _useRequestIds2.setRequest;
			var editorSessionId = _useRequestIds2.editorSessionId;
			var sessionId = _useRequestIds2.sessionId;
			var generateId = _useRequestIds2.generateId;
			var batchId = _useRequestIds2.batchId;
			send.current = (0, react.useCallback)(/*#__PURE__*/ function() {
				var _ref3 = _asyncToGenerator$1(/*#__PURE__*/ import_regenerator$8.default.mark(function _callee2(payload) {
					return import_regenerator$8.default.wrap(function(_context2) {
						while (1) switch (_context2.prev = _context2.next) {
							case 0: return _context2.abrupt("return", new Promise(function(resolve, reject) {
								setError("");
								setIsLoading(true);
								var requestId = setRequest();
								var requestIds = {
									editorSessionId: editorSessionId.current,
									sessionId: sessionId.current,
									generateId: generateId.current,
									batchId: batchId.current,
									requestId: requestId.current
								};
								payload = _objectSpread$7(_objectSpread$7({}, payload), {}, { requestIds });
								fetchData(payload).then(function(result) {
									var normalizedData = normalizeResponse(result);
									setData(normalizedData);
									resolve(normalizedData);
								}).catch(function(err) {
									var finalError = (err === null || err === void 0 ? void 0 : err.responseText) || err;
									setError(finalError);
									reject(finalError);
								}).finally(function() {
									return setIsLoading(false);
								});
							}));
							case 1:
							case "end": return _context2.stop();
						}
					}, _callee2);
				}));
				return function(_x2) {
					return _ref3.apply(this, arguments);
				};
			}(), [
				batchId,
				editorSessionId,
				fetchData,
				generateId,
				sessionId,
				setRequest
			]);
			sendUsageData.current = (0, react.useCallback)(function() {
				var usageData = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : data;
				return usageData.responseId && setStatusFeedback(usageData.responseId);
			}, [data]);
			return {
				isLoading,
				error,
				data,
				setResult: function setResult(result) {
					var responseId = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
					var updatedResult = _objectSpread$7({}, data);
					updatedResult.result = result;
					if (responseId) updatedResult.responseId = responseId;
					setData(updatedResult);
				},
				reset: function reset() {
					setData(function(_ref4) {
						return {
							credits: _ref4.credits,
							result: "",
							responseId: ""
						};
					});
					setError("");
					setIsLoading(false);
				},
				send: send.current,
				sendUsageData: sendUsageData.current
			};
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/hooks/use-prompt-enhancer.js
	var enhancePromptMap, getResult, usePromptEnhancer;
	var init_use_prompt_enhancer = __esmMin((() => {
		init_api();
		init_use_prompt();
		init_config();
		enhancePromptMap = /* @__PURE__ */ new Map([["media", getImagePromptEnhanced], ["layout", getLayoutPromptEnhanced]]);
		getResult = function getResult(prompt, type, enhanceType) {
			if (!enhancePromptMap.has(type)) throw new Error("Invalid prompt type: ".concat(type));
			return enhancePromptMap.get(type)(prompt, enhanceType);
		};
		usePromptEnhancer = function usePromptEnhancer(prompt, type) {
			var mode = useConfig().mode;
			var _usePrompt = usePrompt(function() {
				return getResult(prompt, type, mode);
			}, prompt);
			var enhancedData = _usePrompt.data;
			var isEnhancing = _usePrompt.isLoading;
			return {
				enhance: _usePrompt.send,
				isEnhancing,
				enhancedPrompt: enhancedData === null || enhancedData === void 0 ? void 0 : enhancedData.result
			};
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/icons/x-circle-icon.js
	var XCircleIcon;
	var init_x_circle_icon = __esmMin((() => {
		init_extends();
		XCircleIcon = react.default.forwardRef(function(props, ref) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, _extends({ viewBox: "0 0 24 24" }, props, { ref }), /*#__PURE__*/ react.default.createElement("path", { d: "M12 2.69231C6.8595 2.69231 2.69231 6.8595 2.69231 12C2.69231 17.1405 6.8595 21.3077 12 21.3077C17.1405 21.3077 21.3077 17.1405 21.3077 12C21.3077 6.8595 17.1405 2.69231 12 2.69231ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9.14527 9.14527C9.47571 8.81483 10.0115 8.81483 10.3419 9.14527L12 10.8034L13.6581 9.14527C13.9885 8.81483 14.5243 8.81483 14.8547 9.14527C15.1852 9.47571 15.1852 10.0115 14.8547 10.3419L13.1966 12L14.8547 13.6581C15.1852 13.9885 15.1852 14.5243 14.8547 14.8547C14.5243 15.1852 13.9885 15.1852 13.6581 14.8547L12 13.1966L10.3419 14.8547C10.0115 15.1852 9.47571 15.1852 9.14527 14.8547C8.81483 14.5243 8.81483 13.9885 9.14527 13.6581L10.8034 12L9.14527 10.3419C8.81483 10.0115 8.81483 9.47571 9.14527 9.14527Z" }));
		});
	}));

//#endregion
//#region modules/ai/assets/js/editor/icons/plus-circle-icon.js
	var PlusCircleIcon;
	var init_plus_circle_icon = __esmMin((() => {
		init_extends();
		PlusCircleIcon = react.default.forwardRef(function(props, ref) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, _extends({ viewBox: "0 0 24 24" }, props, { ref }), /*#__PURE__*/ react.default.createElement("path", { d: "M12 2.69231C6.8595 2.69231 2.69231 6.8595 2.69231 12C2.69231 17.1405 6.8595 21.3077 12 21.3077C17.1405 21.3077 21.3077 17.1405 21.3077 12C21.3077 6.8595 17.1405 2.69231 12 2.69231ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 7.76923C12.4673 7.76923 12.8462 8.14807 12.8462 8.61538V11.1538H15.3846C15.8519 11.1538 16.2308 11.5327 16.2308 12C16.2308 12.4673 15.8519 12.8462 15.3846 12.8462H12.8462V15.3846C12.8462 15.8519 12.4673 16.2308 12 16.2308C11.5327 16.2308 11.1538 15.8519 11.1538 15.3846V12.8462H8.61538C8.14807 12.8462 7.76923 12.4673 7.76923 12C7.76923 11.5327 8.14807 11.1538 8.61538 11.1538H11.1538V8.61538C11.1538 8.14807 11.5327 7.76923 12 7.76923Z" }));
		});
	}));

//#endregion
//#region modules/ai/assets/js/editor/components/alert-dialog.js
	var import_prop_types$24, AlertDialog;
	var init_alert_dialog = __esmMin((() => {
		init_slicedToArray();
		import_prop_types$24 = /* @__PURE__ */ __toESM(require_prop_types());
		AlertDialog = function AlertDialog(props) {
			var _useState2 = _slicedToArray((0, react.useState)(true), 2);
			var isShown = _useState2[0];
			var setIsShown = _useState2[1];
			if (!isShown) return null;
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Dialog, {
				open: true,
				maxWidth: "lg"
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.DialogContent, { sx: { padding: 0 } }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, { sx: {
				textAlign: "center",
				padding: 3
			} }, props.message), /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
				alignItems: "center",
				spacing: 2,
				marginBottom: 2
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
				variant: "contained",
				type: "button",
				color: "primary",
				onClick: function onClick() {
					var _props$onClose;
					setIsShown(false);
					(_props$onClose = props.onClose) === null || _props$onClose === void 0 || _props$onClose.call(props);
				}
			}, (0, _wordpress_i18n.__)("Close", "elementor")))));
		};
		AlertDialog.propTypes = {
			message: import_prop_types$24.default.string.isRequired,
			onClose: import_prop_types$24.default.func
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/hooks/use-timeout.js
	var useTimeout;
	var init_use_timeout = __esmMin((() => {
		init_slicedToArray();
		useTimeout = function useTimeout(delay) {
			var _useState2 = _slicedToArray((0, react.useState)(false), 2);
			var isTimeout = _useState2[0];
			var setIsTimeout = _useState2[1];
			var timeoutIdRef = (0, react.useRef)(null);
			var turnOffTimeout = function turnOffTimeout() {
				clearTimeout(timeoutIdRef.current);
				setIsTimeout(false);
			};
			(0, react.useEffect)(function() {
				timeoutIdRef.current = setTimeout(function() {
					setIsTimeout(true);
				}, delay);
				return function() {
					clearTimeout(timeoutIdRef.current);
				};
			}, [delay]);
			return [isTimeout, turnOffTimeout];
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/context/remote-config.js
	var import_regenerator$7, import_prop_types$23, RemoteConfigContext, useRemoteConfig, CONFIG_KEYS, RemoteConfigProvider;
	var init_remote_config = __esmMin((() => {
		init_asyncToGenerator$1();
		init_slicedToArray();
		import_regenerator$7 = /* @__PURE__ */ __toESM(require_regenerator());
		import_prop_types$23 = /* @__PURE__ */ __toESM(require_prop_types());
		init_api();
		RemoteConfigContext = react.default.createContext({});
		useRemoteConfig = function useRemoteConfig() {
			return react.default.useContext(RemoteConfigContext);
		};
		CONFIG_KEYS = {
			WEB_BASED_BUILDER_URL: "webBasedBuilderUrl",
			AUTH_TOKEN: "jwt"
		};
		RemoteConfigProvider = function RemoteConfigProvider(props) {
			var _useState2 = _slicedToArray((0, react.useState)(false), 2);
			var isLoading = _useState2[0];
			var setIsLoading = _useState2[1];
			var _useState4 = _slicedToArray((0, react.useState)(false), 2);
			var isLoaded = _useState4[0];
			var setIsLoaded = _useState4[1];
			var _useState6 = _slicedToArray((0, react.useState)(false), 2);
			var isError = _useState6[0];
			var setIsError = _useState6[1];
			var _useState8 = _slicedToArray((0, react.useState)({}), 2);
			var remoteConfig = _useState8[0];
			var setRemoteConfig = _useState8[1];
			var fetchData = /*#__PURE__*/ function() {
				var _ref = _asyncToGenerator$1(/*#__PURE__*/ import_regenerator$7.default.mark(function _callee() {
					var result;
					return import_regenerator$7.default.wrap(function(_context) {
						while (1) switch (_context.prev = _context.next) {
							case 0:
								setIsLoading(true);
								setIsError(false);
								_context.prev = 1;
								_context.next = 2;
								return getRemoteConfig().finally(function() {
									setIsLoaded(true);
									setIsLoading(false);
								});
							case 2:
								result = _context.sent;
								if (result.config) {
									_context.next = 3;
									break;
								}
								throw new Error("Invalid remote config");
							case 3:
								setRemoteConfig(result.config);
								_context.next = 5;
								break;
							case 4:
								_context.prev = 4;
								_context["catch"](1);
								setIsError(true);
								setIsLoaded(true);
								setIsLoading(false);
							case 5:
							case "end": return _context.stop();
						}
					}, _callee, null, [[1, 4]]);
				}));
				return function fetchData() {
					return _ref.apply(this, arguments);
				};
			}();
			(0, react.useEffect)(function() {
				window.addEventListener("elementor/connect/success", fetchData);
				return function() {
					window.removeEventListener("elementor/connect/success", fetchData);
				};
			}, []);
			if (!isLoaded && !isLoading) fetchData();
			return /*#__PURE__*/ react.default.createElement(RemoteConfigContext.Provider, { value: {
				isLoading,
				isLoaded,
				isError,
				remoteConfig
			} }, props.children);
		};
		RemoteConfigProvider.propTypes = {
			children: import_prop_types$23.default.node.isRequired,
			onError: import_prop_types$23.default.func.isRequired
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/hooks/use-user-info.js
	function ownKeys$6(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread$6(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$6(Object(t), !0).forEach(function(r) {
				_defineProperty$1(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	var import_regenerator$6, import_prop_types$22, useUserInfo;
	var init_use_user_info = __esmMin((() => {
		init_defineProperty$1();
		init_asyncToGenerator$1();
		init_slicedToArray();
		import_regenerator$6 = /* @__PURE__ */ __toESM(require_regenerator());
		init_api();
		import_prop_types$22 = /* @__PURE__ */ __toESM(require_prop_types());
		__name(ownKeys$6, "ownKeys");
		__name(_objectSpread$6, "_objectSpread");
		useUserInfo = function useUserInfo() {
			var immediately = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
			var _useState2 = _slicedToArray((0, react.useState)(false), 2);
			var isLoaded = _useState2[0];
			var setIsLoaded = _useState2[1];
			var _useState4 = _slicedToArray((0, react.useState)(false), 2);
			var isLoading = _useState4[0];
			var setIsLoading = _useState4[1];
			var _useState6 = _slicedToArray((0, react.useState)({
				is_connected: false,
				is_get_started: false,
				connect_url: "",
				usage: {
					hasAiSubscription: false,
					quota: 0,
					usedQuota: 0
				}
			}), 2);
			var userInfo = _useState6[0];
			var setUserInfo = _useState6[1];
			var credits = userInfo.usage.quota - userInfo.usage.usedQuota;
			var usagePercentage = userInfo.usage.quota ? userInfo.usage.usedQuota / userInfo.usage.quota * 100 : 0;
			var fetchData = /*#__PURE__*/ function() {
				var _ref = _asyncToGenerator$1(/*#__PURE__*/ import_regenerator$6.default.mark(function _callee() {
					var userInfoResult;
					return import_regenerator$6.default.wrap(function(_context) {
						while (1) switch (_context.prev = _context.next) {
							case 0:
								setIsLoading(true);
								_context.next = 1;
								return getUserInformation(immediately);
							case 1:
								userInfoResult = _context.sent;
								setUserInfo(function(prevState) {
									return _objectSpread$6(_objectSpread$6({}, prevState), userInfoResult);
								});
								setIsLoaded(true);
								setIsLoading(false);
							case 2:
							case "end": return _context.stop();
						}
					}, _callee);
				}));
				return function fetchData() {
					return _ref.apply(this, arguments);
				};
			}();
			if (!isLoaded && !isLoading) fetchData();
			return {
				isLoading,
				isLoaded,
				isConnected: userInfo.is_connected,
				isGetStarted: userInfo.is_get_started,
				connectUrl: userInfo.connect_url,
				builderUrl: userInfo.usage.builderUrl,
				hasSubscription: userInfo.usage.hasAiSubscription,
				credits: credits < 0 ? 0 : credits,
				usagePercentage: Math.round(usagePercentage),
				fetchData
			};
		};
		useUserInfo.propTypes = { immediately: import_prop_types$22.default.bool };
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/attachments/url-dialog.js
	var import_prop_types$21, UrlDialog;
	var init_url_dialog = __esmMin((() => {
		init_slicedToArray();
		import_prop_types$21 = /* @__PURE__ */ __toESM(require_prop_types());
		init_alert_dialog();
		init_use_timeout();
		init_attachments();
		init_remote_config();
		init_use_user_info();
		init_requests_ids();
		UrlDialog = function UrlDialog(props) {
			var _useTimeout2 = _slicedToArray(useTimeout(1e4), 2);
			var isTimeout = _useTimeout2[0];
			var turnOffTimeout = _useTimeout2[1];
			var _useUserInfo = useUserInfo();
			var isLoading = _useUserInfo.isLoading;
			var initialUsagePercentage = _useUserInfo.usagePercentage;
			var updateUsagePercentage = useRequestIds().updateUsagePercentage;
			var _useState2 = _slicedToArray((0, react.useState)(false), 2);
			var isInitUsageDone = _useState2[0];
			var setIsInitUsageDone = _useState2[1];
			var builderUrl = useRemoteConfig().remoteConfig[CONFIG_KEYS.WEB_BASED_BUILDER_URL];
			var iframeOrigin = (builderUrl ? new URL(builderUrl) : {}).origin;
			var isOpen = (0, react.useRef)(false);
			(0, react.useEffect)(function() {
				if (!isInitUsageDone && !isLoading && (initialUsagePercentage || 0 === initialUsagePercentage)) {
					updateUsagePercentage(initialUsagePercentage);
					setIsInitUsageDone(true);
				}
			}, [
				isLoading,
				initialUsagePercentage,
				isInitUsageDone,
				updateUsagePercentage
			]);
			(0, react.useEffect)(function() {
				if (!isOpen.current) try {
					window.$e.run("ai-integration/open-choose-element", { url: props.url });
					isOpen.current = true;
				} catch (error) {
					console.error(error);
				}
			}, [isOpen.current]);
			(0, react.useEffect)(function() {
				var onMessage = function onMessage(event) {
					if (event.origin !== iframeOrigin) return;
					var _event$data = event.data;
					var type = _event$data.type;
					var html = _event$data.html;
					var url = _event$data.url;
					switch (type) {
						case "element-selector/close":
							isOpen.current = false;
							props.onClose();
							break;
						case "element-selector/loaded":
							turnOffTimeout();
							isOpen.current = true;
							break;
						case "element-selector/attach":
							props.onAttach([{
								type: "url",
								previewHTML: html,
								content: html,
								label: url ? new URL(url).href : "",
								source: USER_URL_SOURCE
							}]);
							break;
					}
				};
				window.addEventListener("message", onMessage);
				return function() {
					window.removeEventListener("message", onMessage);
				};
			}, [
				iframeOrigin,
				props,
				turnOffTimeout
			]);
			return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, !isOpen.current && !isTimeout && /*#__PURE__*/ react.default.createElement(_elementor_ui.Dialog, {
				open: true,
				maxWidth: "lg"
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, { sx: {
				textAlign: "center",
				padding: 3
			} }, (0, _wordpress_i18n.__)("Loading...", "elementor"))), isTimeout && /*#__PURE__*/ react.default.createElement(AlertDialog, {
				message: (0, _wordpress_i18n.__)("The app is not responding. Please try again later. (#408)", "elementor"),
				onClose: props.onClose
			}));
		};
		UrlDialog.propTypes = {
			onAttach: import_prop_types$21.default.func.isRequired,
			onClose: import_prop_types$21.default.func.isRequired,
			url: import_prop_types$21.default.string
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/attachments/library-dialog.js
	var import_prop_types$20, LibraryDialog;
	var init_library_dialog = __esmMin((() => {
		import_prop_types$20 = /* @__PURE__ */ __toESM(require_prop_types());
		init_attachments();
		LibraryDialog = function LibraryDialog(props) {
			var isApplyingTemplate = (0, react.useRef)(false);
			(0, react.useEffect)(function() {
				var onLibraryHide = function onLibraryHide() {
					if (isApplyingTemplate.current) return;
					props.onClose();
				};
				$e.components.get("library").layout.getModal().on("hide", onLibraryHide);
				return function() {
					$e.components.get("library").layout.getModal().off("hide", onLibraryHide);
				};
			}, [props]);
			(0, react.useEffect)(function() {
				var onMessage = function onMessage(event) {
					var _event$data = event.data;
					var type = _event$data.type;
					var json = _event$data.json;
					var html = _event$data.html;
					var label = _event$data.label;
					var source = _event$data.source;
					switch (type) {
						case "library/attach:start":
							isApplyingTemplate.current = true;
							break;
						case "library/attach":
							props.onAttach([{
								type: ATTACHMENT_TYPE_JSON,
								previewHTML: html,
								content: json,
								label,
								source
							}]);
							isApplyingTemplate.current = false;
							props.onClose();
							break;
					}
				};
				window.addEventListener("message", onMessage);
				return function() {
					window.removeEventListener("message", onMessage);
				};
			});
			$e.run("library/open", {
				toDefault: true,
				mode: "ai-attachment"
			});
			isApplyingTemplate.current = false;
			return null;
		};
		LibraryDialog.propTypes = {
			onAttach: import_prop_types$20.default.func.isRequired,
			onClose: import_prop_types$20.default.func.isRequired
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/attachments/attach-dialog.js
	var import_prop_types$19, AttachDialog;
	var init_attach_dialog = __esmMin((() => {
		init_url_dialog();
		import_prop_types$19 = /* @__PURE__ */ __toESM(require_prop_types());
		init_library_dialog();
		init_attachments();
		AttachDialog = function AttachDialog(props) {
			var type = props.type;
			var url = props.url;
			switch (type) {
				case "url": return /*#__PURE__*/ react.default.createElement(UrlDialog, {
					url,
					onAttach: props.onAttach,
					onClose: props.onClose
				});
				case MENU_TYPE_LIBRARY: return /*#__PURE__*/ react.default.createElement(LibraryDialog, {
					onAttach: props.onAttach,
					onClose: props.onClose
				});
			}
			return null;
		};
		AttachDialog.propTypes = {
			type: import_prop_types$19.default.string,
			onAttach: import_prop_types$19.default.func,
			onClose: import_prop_types$19.default.func,
			url: import_prop_types$19.default.string
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/hooks/use-introduction.js
	function useIntroduction(key) {
		var _window$elementor$con;
		var _window$elementorAdmi;
		var _globalConfig$introdu;
		var globalConfig = window.elementor ? (_window$elementor$con = window.elementor.config) === null || _window$elementor$con === void 0 ? void 0 : _window$elementor$con.user : (_window$elementorAdmi = window.elementorAdmin) === null || _window$elementorAdmi === void 0 || (_window$elementorAdmi = _window$elementorAdmi.config) === null || _window$elementorAdmi === void 0 ? void 0 : _window$elementorAdmi.user;
		var _useState2 = _slicedToArray((0, react.useState)(!!(globalConfig !== null && globalConfig !== void 0 && (_globalConfig$introdu = globalConfig.introduction) !== null && _globalConfig$introdu !== void 0 && _globalConfig$introdu[key])), 2);
		var isViewed = _useState2[0];
		var setIsViewed = _useState2[1];
		function markAsViewed() {
			if (!key) return Promise.reject();
			return new Promise(function(resolve, reject) {
				if (isViewed) reject();
				setIsViewed(true);
				elementorCommon.ajax.addRequest("introduction_viewed", {
					data: { introductionKey: key },
					error: function error() {
						setIsViewed(false);
						reject();
					},
					success: function success() {
						setIsViewed(true);
						if (globalConfig !== null && globalConfig !== void 0 && globalConfig.introduction) globalConfig.introduction[key] = true;
						resolve();
					}
				});
			});
		}
		return {
			isViewed,
			markAsViewed
		};
	}
	var init_use_introduction = __esmMin((() => {
		init_slicedToArray();
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/attachments/menu.js
	var import_prop_types$18, Menu;
	var init_menu = __esmMin((() => {
		init_slicedToArray();
		init_x_circle_icon();
		init_plus_circle_icon();
		import_prop_types$18 = /* @__PURE__ */ __toESM(require_prop_types());
		init_attach_dialog();
		init_use_introduction();
		Menu = function Menu(props) {
			var _useState2 = _slicedToArray((0, react.useState)(false), 2);
			var isOpen = _useState2[0];
			var setIsOpen = _useState2[1];
			var _useState4 = _slicedToArray((0, react.useState)(null), 2);
			var selectedType = _useState4[0];
			var setSelectedType = _useState4[1];
			var direction = (0, _elementor_ui.useTheme)().direction;
			var anchorRef = (0, react.useRef)(null);
			var _useIntroduction = useIntroduction("e-ai-attachment-badge");
			var isViewed = _useIntroduction.isViewed;
			var markAsViewed = _useIntroduction.markAsViewed;
			return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.IconButton, {
				size: "small",
				ref: anchorRef,
				disabled: props.disabled,
				onClick: function onClick() {
					setIsOpen(true);
					if (!isViewed) markAsViewed();
				},
				color: "secondary"
			}, function() {
				if (isOpen) return /*#__PURE__*/ react.default.createElement(XCircleIcon, { fontSize: "small" });
				else if (isViewed) return /*#__PURE__*/ react.default.createElement(PlusCircleIcon, { fontSize: "small" });
				return /*#__PURE__*/ react.default.createElement(_elementor_ui.Badge, {
					color: "primary",
					badgeContent: " ",
					variant: "dot"
				}, /*#__PURE__*/ react.default.createElement(PlusCircleIcon, { fontSize: "small" }));
			}()), /*#__PURE__*/ react.default.createElement(_elementor_ui.Popover, {
				open: isOpen,
				anchorEl: anchorRef.current,
				onClose: function onClose() {
					return setIsOpen(false);
				},
				anchorOrigin: {
					vertical: "bottom",
					horizontal: "rtl" === direction ? "right" : "left"
				},
				transformOrigin: {
					vertical: "top",
					horizontal: "rtl" === direction ? "right" : "left"
				}
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, { sx: { width: 440 } }, props.items.map(function(item) {
				var IconComponent = item.icon;
				return /*#__PURE__*/ react.default.createElement(_elementor_ui.MenuItem, {
					key: item.type,
					onClick: function onClick() {
						setSelectedType(item.type);
						setIsOpen(false);
					}
				}, /*#__PURE__*/ react.default.createElement(_elementor_ui.ListItemIcon, null, /*#__PURE__*/ react.default.createElement(IconComponent, null)), item.title);
			}))), /*#__PURE__*/ react.default.createElement(AttachDialog, {
				type: selectedType,
				onAttach: props.onAttach,
				onClose: function onClose() {
					setIsOpen(false);
					setSelectedType(null);
				}
			}));
		};
		Menu.propTypes = {
			items: import_prop_types$18.default.arrayOf(import_prop_types$18.default.shape({
				title: import_prop_types$18.default.string.isRequired,
				type: import_prop_types$18.default.string.isRequired,
				icon: import_prop_types$18.default.elementType
			})).isRequired,
			onAttach: import_prop_types$18.default.func.isRequired,
			disabled: import_prop_types$18.default.bool
		};
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
	function _taggedTemplateLiteral(e, t) {
		return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
	}
	var init_taggedTemplateLiteral = __esmMin((() => {}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/attachments/thumbnail.js
	var import_prop_types$17, _templateObject, THUMBNAIL_SIZE, StyledBody, Thumbnail;
	var init_thumbnail = __esmMin((() => {
		init_taggedTemplateLiteral();
		import_prop_types$17 = /* @__PURE__ */ __toESM(require_prop_types());
		;
		THUMBNAIL_SIZE = 64;
		StyledBody = (0, _elementor_ui.styled)("body")(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n	html, body {\n		margin: 0;\n		padding: 0;\n		overflow: hidden;\n	}\n\n	body > * {\n		width: 100% !important;\n	}\n\n	body > img {\n		height: 100%;\n		object-fit: cover;\n	}\n\n	body:has(> img) {\n		height: ", "px\n	}\n"])), 64);
		Thumbnail = function Thumbnail(props) {
			var _props$html$match;
			var _props$html$match2;
			var dataWidth = (_props$html$match = props.html.match("data-width=\"(?<width>\\d+)\"")) === null || _props$html$match === void 0 || (_props$html$match = _props$html$match.groups) === null || _props$html$match === void 0 ? void 0 : _props$html$match.width;
			var dataHeight = (_props$html$match2 = props.html.match("data-height=\"(?<height>\\d+)\"")) === null || _props$html$match2 === void 0 || (_props$html$match2 = _props$html$match2.groups) === null || _props$html$match2 === void 0 ? void 0 : _props$html$match2.height;
			var width = dataWidth ? parseInt(dataWidth) : 64;
			var height = dataHeight ? parseInt(dataHeight) : 64;
			var scale = 64 / Math.min(height, width);
			var top = height > width ? (64 - 64 * (height / width)) / 2 : 0;
			var left = width > height ? (64 - 64 * (width / height)) / 2 : 0;
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
				dir: "ltr",
				sx: {
					position: "relative",
					cursor: "default",
					overflow: "hidden",
					border: "1px solid",
					borderColor: "grey.300",
					borderRadius: 1,
					boxSizing: "border-box",
					width: 64,
					height: 64,
					opacity: props.disabled ? .5 : 1
				}
			}, /*#__PURE__*/ react.default.createElement("iframe", {
				title: (0, _wordpress_i18n.__)("Preview", "elementor"),
				sandbox: "",
				srcDoc: "<style>" + StyledBody.componentStyle.rules.join("") + "</style>" + props.html,
				style: {
					border: "none",
					overflow: "hidden",
					width,
					height,
					transform: "scale(".concat(scale, ")"),
					transformOrigin: "".concat(left, "px ").concat(top, "px")
				}
			}));
		};
		Thumbnail.propTypes = {
			html: import_prop_types$17.default.string.isRequired,
			disabled: import_prop_types$17.default.bool
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/types/attachment.js
	var import_prop_types$16, AttachmentPropType, AttachmentsTypesPropType;
	var init_attachment = __esmMin((() => {
		import_prop_types$16 = /* @__PURE__ */ __toESM(require_prop_types());
		AttachmentPropType = import_prop_types$16.default.shape({
			type: import_prop_types$16.default.string,
			previewHTML: import_prop_types$16.default.string,
			content: import_prop_types$16.default.string,
			label: import_prop_types$16.default.string,
			source: import_prop_types$16.default.string
		});
		AttachmentsTypesPropType = import_prop_types$16.default.shape({ type: import_prop_types$16.default.shape({
			promptPlaceholder: import_prop_types$16.default.string,
			promptSuggestions: import_prop_types$16.default.arrayOf(import_prop_types$16.default.shape({ text: import_prop_types$16.default.string.isRequired })),
			previewGenerator: import_prop_types$16.default.func
		}) });
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/attachments/thumbnail-json.js
	var import_prop_types$15, ThumbnailJson;
	var init_thumbnail_json = __esmMin((() => {
		init_thumbnail();
		import_prop_types$15 = /* @__PURE__ */ __toESM(require_prop_types());
		init_attachment();
		ThumbnailJson = function ThumbnailJson(props) {
			var _props$attachments;
			var attachment = (_props$attachments = props.attachments) === null || _props$attachments === void 0 ? void 0 : _props$attachments.find(function(item) {
				return "json" === item.type;
			});
			if (!attachment) return null;
			if (!attachment.previewHTML) return /*#__PURE__*/ react.default.createElement(_elementor_ui.Skeleton, {
				animation: "wave",
				variant: "rounded",
				width: 60,
				height: 60
			});
			return /*#__PURE__*/ react.default.createElement(Thumbnail, {
				html: attachment.previewHTML,
				disabled: props.disabled
			});
		};
		ThumbnailJson.propTypes = {
			attachments: import_prop_types$15.default.arrayOf(AttachmentPropType).isRequired,
			disabled: import_prop_types$15.default.bool
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/attachments/thumbnail-url.js
	var import_prop_types$14, ThumbnailUrl;
	var init_thumbnail_url = __esmMin((() => {
		init_thumbnail();
		import_prop_types$14 = /* @__PURE__ */ __toESM(require_prop_types());
		init_attachment();
		ThumbnailUrl = function ThumbnailUrl(props) {
			var _props$attachments;
			var attachment = (_props$attachments = props.attachments) === null || _props$attachments === void 0 ? void 0 : _props$attachments.find(function(item) {
				return "url" === item.type;
			});
			if (!attachment) return null;
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
				position: "relative",
				"&:hover::before": {
					content: "\"\"",
					position: "absolute",
					userSelect: "none",
					inset: 0,
					backgroundColor: "rgba(0,0,0,0.6)",
					borderRadius: 1,
					zIndex: 1
				},
				"&:hover .remove-attachment": { display: "flex" }
			} }, /*#__PURE__*/ react.default.createElement(_elementor_ui.IconButton, {
				className: "remove-attachment",
				size: "small",
				"aria-label": (0, _wordpress_i18n.__)("Remove", "elementor"),
				disabled: props.disabled,
				onClick: function onClick(event) {
					event.stopPropagation();
					props.onDetach();
				},
				sx: {
					display: "none",
					position: "absolute",
					insetInlineEnd: 4,
					insetBlockStart: 4,
					backgroundColor: "secondary.main",
					zIndex: 1,
					borderRadius: 1,
					p: "3px",
					"&:hover": { backgroundColor: "secondary.dark" }
				}
			}, /*#__PURE__*/ react.default.createElement(_elementor_icons.TrashIcon, { sx: {
				fontSize: "1.125rem",
				color: "common.white"
			} })), /*#__PURE__*/ react.default.createElement(Thumbnail, {
				disabled: props.disabled,
				html: attachment.previewHTML
			}));
		};
		ThumbnailUrl.propTypes = {
			attachments: import_prop_types$14.default.arrayOf(AttachmentPropType).isRequired,
			disabled: import_prop_types$14.default.bool,
			onDetach: import_prop_types$14.default.func
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/icons/website-icon.js
	var WebsiteIcon;
	var init_website_icon = __esmMin((() => {
		init_extends();
		WebsiteIcon = react.default.forwardRef(function(props, ref) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, _extends({ viewBox: "0 0 24 24" }, props, { ref }), /*#__PURE__*/ react.default.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M4.16707 3.95837C4.11182 3.95837 4.05883 3.98032 4.01976 4.01939C3.98069 4.05846 3.95874 4.11145 3.95874 4.16671V6.04171H6.04207V3.95837H4.16707ZM4.16707 2.70837C3.7803 2.70837 3.40937 2.86202 3.13588 3.13551C2.86239 3.409 2.70874 3.77993 2.70874 4.16671V15.8334C2.70874 16.2201 2.86239 16.5911 3.13588 16.8646C3.40937 17.1381 3.7803 17.2917 4.16707 17.2917H15.8337C16.2205 17.2917 16.5914 17.1381 16.8649 16.8646C17.1384 16.5911 17.2921 16.2201 17.2921 15.8334V4.16671C17.2921 3.77993 17.1384 3.409 16.8649 3.13551C16.5914 2.86202 16.2205 2.70837 15.8337 2.70837H4.16707ZM7.29207 3.95837V6.04171H16.0421V4.16671C16.0421 4.11145 16.0201 4.05846 15.9811 4.01939C15.942 3.98032 15.889 3.95837 15.8337 3.95837H7.29207ZM16.0421 7.29171H3.95874V15.8334C3.95874 15.8886 3.98069 15.9416 4.01976 15.9807C4.05883 16.0198 4.11182 16.0417 4.16707 16.0417H15.8337C15.889 16.0417 15.942 16.0198 15.9811 15.9807C16.0201 15.9416 16.0421 15.8886 16.0421 15.8334V7.29171Z"
			}));
		});
	}));

//#endregion
//#region modules/ai/assets/js/editor/icons/copy-page-icon.js
	var CopyPageIcon;
	var init_copy_page_icon = __esmMin((() => {
		init_extends();
		CopyPageIcon = react.default.forwardRef(function(props, ref) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, _extends({ viewBox: "0 0 24 24" }, props, { ref }), /*#__PURE__*/ react.default.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M16.6667 0.208496C17.0534 0.208496 17.4244 0.362142 17.6979 0.635632C17.9714 0.909123 18.125 1.28006 18.125 1.66683V11.6668C18.125 12.0536 17.9714 12.4245 17.6979 12.698C17.4244 12.9715 17.0534 13.1252 16.6667 13.1252H14.7917V16.6668C14.7917 17.0536 14.638 17.4245 14.3645 17.698C14.091 17.9715 13.7201 18.1252 13.3333 18.1252H3.33333C2.94656 18.1252 2.57563 17.9715 2.30214 17.698C2.02865 17.4245 1.875 17.0536 1.875 16.6668V6.66683C1.875 6.28005 2.02865 5.90912 2.30214 5.63563C2.57563 5.36214 2.94656 5.2085 3.33333 5.2085H5.20833V1.66683C5.20833 1.28005 5.36198 0.909122 5.63547 0.635632C5.90896 0.362142 6.27989 0.208496 6.66667 0.208496H16.6667ZM6.66667 1.4585C6.61141 1.4585 6.55842 1.48045 6.51935 1.51952C6.48028 1.55859 6.45833 1.61158 6.45833 1.66683V3.54183H8.54167V1.4585H6.66667ZM3.125 9.79183V16.6668C3.125 16.7221 3.14695 16.7751 3.18602 16.8141C3.22509 16.8532 3.27808 16.8752 3.33333 16.8752H13.3333C13.3886 16.8752 13.4416 16.8532 13.4806 16.8141C13.5197 16.7751 13.5417 16.7221 13.5417 16.6668V13.1252H6.66667C6.27989 13.1252 5.90896 12.9715 5.63547 12.698C5.36198 12.4245 5.20833 12.0536 5.20833 11.6668V9.79183H3.125ZM5.20833 8.54183H3.125V6.66683C3.125 6.61158 3.14695 6.55859 3.18602 6.51952C3.22509 6.48045 3.27808 6.4585 3.33333 6.4585H5.20833V8.54183ZM6.45833 11.6668C6.45833 11.7221 6.48028 11.7751 6.51935 11.8141C6.55842 11.8532 6.61141 11.8752 6.66667 11.8752H16.6667C16.7219 11.8752 16.7749 11.8532 16.814 11.8141C16.853 11.7751 16.875 11.7221 16.875 11.6668V4.79183H6.45833V11.6668ZM9.79167 1.4585V3.54183H16.875V1.66683C16.875 1.61157 16.853 1.55858 16.814 1.51952C16.7749 1.48045 16.7219 1.4585 16.6667 1.4585H9.79167Z"
			}));
		});
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/attachments.js
	var attachments_exports = /* @__PURE__ */ __exportAll({
		ATTACHMENT_TYPE_JSON: () => ATTACHMENT_TYPE_JSON,
		ATTACHMENT_TYPE_URL: () => "url",
		ELEMENTOR_LIBRARY_SOURCE: () => ELEMENTOR_LIBRARY_SOURCE,
		MENU_TYPE_LIBRARY: () => MENU_TYPE_LIBRARY,
		USER_URL_SOURCE: () => USER_URL_SOURCE,
		USER_VARIATION_SOURCE: () => USER_VARIATION_SOURCE,
		default: () => Attachments
	});
	var import_prop_types$13, ATTACHMENT_TYPE_JSON, ATTACHMENT_TYPE_URL, MENU_TYPE_LIBRARY, USER_VARIATION_SOURCE, ELEMENTOR_LIBRARY_SOURCE, USER_URL_SOURCE, Attachments;
	var init_attachments = __esmMin((() => {
		init_extends();
		init_menu();
		init_thumbnail_json();
		init_thumbnail_url();
		init_website_icon();
		init_copy_page_icon();
		import_prop_types$13 = /* @__PURE__ */ __toESM(require_prop_types());
		init_attachment();
		ATTACHMENT_TYPE_JSON = "json";
		ATTACHMENT_TYPE_URL = "url";
		MENU_TYPE_LIBRARY = "library";
		USER_VARIATION_SOURCE = "user-variation";
		ELEMENTOR_LIBRARY_SOURCE = "elementor-library";
		USER_URL_SOURCE = "user-url";
		Attachments = function Attachments(props) {
			if (!props.attachments.length) return /*#__PURE__*/ react.default.createElement(Menu, {
				disabled: props.disabled,
				onAttach: props.onAttach,
				items: [{
					title: (0, _wordpress_i18n.__)("Reference a website", "elementor"),
					icon: WebsiteIcon,
					type: "url"
				}, {
					title: (0, _wordpress_i18n.__)("Create variations from Template Library", "elementor"),
					icon: CopyPageIcon,
					type: MENU_TYPE_LIBRARY
				}]
			});
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
				direction: "row",
				spacing: 1
			}, props.attachments.map(function(attachment, index) {
				switch (attachment.type) {
					case ATTACHMENT_TYPE_JSON: return /*#__PURE__*/ react.default.createElement(ThumbnailJson, _extends({ key: index }, props));
					case "url": return /*#__PURE__*/ react.default.createElement(ThumbnailUrl, _extends({ key: index }, props));
					default: return null;
				}
			}));
		};
		Attachments.propTypes = {
			attachments: import_prop_types$13.default.arrayOf(AttachmentPropType).isRequired,
			onAttach: import_prop_types$13.default.func.isRequired,
			onDetach: import_prop_types$13.default.func,
			disabled: import_prop_types$13.default.bool
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/prompt-form.js
	var import_prop_types$12, _excluded$3, PROMPT_SUGGESTIONS, IconButtonWithTooltip, BackButton, EditButton, GenerateButton, PromptForm;
	var init_prompt_form = __esmMin((() => {
		init_slicedToArray();
		init_extends();
		init_objectWithoutProperties$1();
		import_prop_types$12 = /* @__PURE__ */ __toESM(require_prop_types());
		init_prompt_autocomplete();
		init_enhance_button();
		init_generate_submit();
		init_arrow_left_icon();
		init_edit_icon();
		init_use_prompt_enhancer();
		init_attachments();
		init_config();
		init_attachment();
		_excluded$3 = ["tooltip"];
		PROMPT_SUGGESTIONS = Object.freeze([
			{ text: (0, _wordpress_i18n.__)("Hero section on [topic] with heading, text, buttons on the right, and an image on the left", "elementor.com") },
			{ text: (0, _wordpress_i18n.__)("About Us section on [topic] with heading, text, and big image below", "elementor.com") },
			{ text: (0, _wordpress_i18n.__)("Team section with four image boxes showcasing team members", "elementor.com") },
			{ text: (0, _wordpress_i18n.__)("FAQ section with a toggle widget showcasing FAQs about [topic]", "elementor.com") },
			{ text: (0, _wordpress_i18n.__)("Gallery section with a carousel displaying three images at once", "elementor.com") },
			{ text: (0, _wordpress_i18n.__)("Contact section with a form for [topic]", "elementor.com") },
			{ text: (0, _wordpress_i18n.__)("Client section featuring companies' logos", "elementor.com") },
			{ text: (0, _wordpress_i18n.__)("Testimonial section with testimonials, each featuring a star rating and an image", "elementor.com") },
			{ text: (0, _wordpress_i18n.__)("Service section about [topic], showcasing four services with buttons", "elementor.com") },
			{ text: (0, _wordpress_i18n.__)("Stats section with counters displaying data about [topic]", "elementor.com") },
			{ text: (0, _wordpress_i18n.__)("Quote section with colored background, featuring a centered quote", "elementor.com") },
			{ text: (0, _wordpress_i18n.__)("Pricing section for [topic] with a pricing list", "elementor.com") },
			{ text: (0, _wordpress_i18n.__)("Subscribe section featuring a simple email form, inviting users to stay informed on [topic]", "elementor.com") }
		]);
		IconButtonWithTooltip = function IconButtonWithTooltip(_ref) {
			var tooltip = _ref.tooltip;
			var props = _objectWithoutProperties$1(_ref, _excluded$3);
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Tooltip, { title: tooltip }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
				component: "span",
				sx: { cursor: props.disabled ? "default" : "pointer" }
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.IconButton, props)));
		};
		IconButtonWithTooltip.propTypes = {
			tooltip: import_prop_types$12.default.string,
			disabled: import_prop_types$12.default.bool
		};
		BackButton = function BackButton(props) {
			return /*#__PURE__*/ react.default.createElement(IconButtonWithTooltip, _extends({
				size: "small",
				color: "secondary",
				tooltip: (0, _wordpress_i18n.__)("Back to results", "elementor")
			}, props), /*#__PURE__*/ react.default.createElement(ArrowLeftIcon, null));
		};
		EditButton = function EditButton(props) {
			return /*#__PURE__*/ react.default.createElement(IconButtonWithTooltip, _extends({
				size: "small",
				color: "primary",
				tooltip: (0, _wordpress_i18n.__)("Edit prompt", "elementor")
			}, props), /*#__PURE__*/ react.default.createElement(EditIcon, null));
		};
		GenerateButton = function GenerateButton(props) {
			return /*#__PURE__*/ react.default.createElement(GenerateSubmit, _extends({
				size: "small",
				fullWidth: false
			}, props), (0, _wordpress_i18n.__)("Generate", "elementor"));
		};
		PromptForm = (0, react.forwardRef)(function(_ref2, ref) {
			var _attachments$;
			var attachments = _ref2.attachments;
			var isActive = _ref2.isActive;
			var isLoading = _ref2.isLoading;
			var _ref2$showActions = _ref2.showActions;
			var showActions = _ref2$showActions === void 0 ? false : _ref2$showActions;
			var onAttach = _ref2.onAttach;
			var onDetach = _ref2.onDetach;
			var _onSubmit = _ref2.onSubmit;
			var onBack = _ref2.onBack;
			var onEdit = _ref2.onEdit;
			var _ref2$shouldResetProm = _ref2.shouldResetPrompt;
			var shouldResetPrompt = _ref2$shouldResetProm === void 0 ? false : _ref2$shouldResetProm;
			var _useState2 = _slicedToArray((0, react.useState)(""), 2);
			var prompt = _useState2[0];
			var setPrompt = _useState2[1];
			(0, react.useEffect)(function() {
				if (shouldResetPrompt) setPrompt("");
			}, [shouldResetPrompt]);
			var _usePromptEnhancer = usePromptEnhancer(prompt, "layout");
			var isEnhancing = _usePromptEnhancer.isEnhancing;
			var enhance = _usePromptEnhancer.enhance;
			var previousPrompt = (0, react.useRef)("");
			var attachmentsTypes = useConfig().attachmentsTypes;
			var isInputDisabled = isLoading || isEnhancing || !isActive;
			var isInputEmpty = "" === prompt && !attachments.length;
			var isGenerateDisabled = isInputDisabled || isInputEmpty;
			var attachmentsConfig = attachmentsTypes[((_attachments$ = attachments[0]) === null || _attachments$ === void 0 ? void 0 : _attachments$.type) || ""];
			var promptSuggestions = (attachmentsConfig === null || attachmentsConfig === void 0 ? void 0 : attachmentsConfig.promptSuggestions) || PROMPT_SUGGESTIONS;
			var promptPlaceholder = (attachmentsConfig === null || attachmentsConfig === void 0 ? void 0 : attachmentsConfig.promptPlaceholder) || (0, _wordpress_i18n.__)("Press '/' for suggested prompts or describe the layout you want to create", "elementor");
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
				component: "form",
				onSubmit: function onSubmit(e) {
					return _onSubmit(e, prompt);
				},
				direction: "row",
				sx: { p: 3 },
				alignItems: "start",
				gap: 1
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
				direction: "row",
				alignItems: "start",
				flexGrow: 1,
				spacing: 2
			}, showActions && (isActive ? /*#__PURE__*/ react.default.createElement(BackButton, {
				disabled: isLoading || isEnhancing,
				onClick: function handleBack() {
					setPrompt(previousPrompt.current);
					onBack();
				}
			}) : /*#__PURE__*/ react.default.createElement(EditButton, {
				disabled: isLoading,
				onClick: function handleEdit() {
					previousPrompt.current = prompt;
					onEdit();
				}
			})), /*#__PURE__*/ react.default.createElement(Attachments, {
				attachments,
				onAttach,
				onDetach,
				disabled: isInputDisabled
			}), /*#__PURE__*/ react.default.createElement(PromptAutocomplete, {
				value: prompt,
				disabled: isInputDisabled,
				onSubmit: function onSubmit(e) {
					return _onSubmit(e, prompt);
				},
				options: promptSuggestions,
				onChange: function onChange(_, selectedValue) {
					return setPrompt(selectedValue.text + " ");
				},
				renderInput: function renderInput(params) {
					return /*#__PURE__*/ react.default.createElement(PromptAutocomplete.TextInput, _extends({}, params, {
						ref,
						onChange: function onChange(e) {
							return setPrompt(e.target.value);
						},
						placeholder: promptPlaceholder
					}));
				}
			})), /*#__PURE__*/ react.default.createElement(EnhanceButton, {
				size: "small",
				disabled: isGenerateDisabled || "" === prompt,
				isLoading: isEnhancing,
				onClick: function onClick() {
					return enhance().then(function(_ref3) {
						var result = _ref3.result;
						return setPrompt(result);
					});
				}
			}), /*#__PURE__*/ react.default.createElement(GenerateButton, { disabled: isGenerateDisabled }));
		});
		PromptForm.propTypes = {
			isActive: import_prop_types$12.default.bool,
			onAttach: import_prop_types$12.default.func,
			onDetach: import_prop_types$12.default.func,
			isLoading: import_prop_types$12.default.bool,
			showActions: import_prop_types$12.default.bool,
			onSubmit: import_prop_types$12.default.func.isRequired,
			onBack: import_prop_types$12.default.func.isRequired,
			onEdit: import_prop_types$12.default.func.isRequired,
			attachments: import_prop_types$12.default.arrayOf(AttachmentPropType),
			shouldResetPrompt: import_prop_types$12.default.bool
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/icons/refresh-icon.js
	var RefreshIcon;
	var init_refresh_icon = __esmMin((() => {
		init_extends();
		RefreshIcon = react.default.forwardRef(function(props, ref) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, _extends({ viewBox: "0 0 24 24" }, props, { ref }), /*#__PURE__*/ react.default.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M7.55012 4.45178C9.23098 3.48072 11.1845 3.08925 13.1097 3.33767C15.035 3.58609 16.8251 4.46061 18.2045 5.82653C19.5838 7.19245 20.4757 8.97399 20.743 10.8967C20.8 11.307 20.5136 11.6858 20.1033 11.7428C19.6931 11.7998 19.3142 11.5135 19.2572 11.1032C19.0353 9.50635 18.2945 8.02677 17.149 6.89236C16.0035 5.75795 14.5167 5.03165 12.9178 4.82534C11.3189 4.61902 9.69644 4.94414 8.30047 5.75061C7.24361 6.36117 6.36093 7.22198 5.72541 8.24995H8.00009C8.41431 8.24995 8.75009 8.58574 8.75009 8.99995C8.75009 9.41417 8.41431 9.74995 8.00009 9.74995H4.51686C4.5055 9.75021 4.49412 9.75021 4.48272 9.74995H4.00009C3.58588 9.74995 3.25009 9.41417 3.25009 8.99995V4.99995C3.25009 4.58574 3.58588 4.24995 4.00009 4.24995C4.41431 4.24995 4.75009 4.58574 4.75009 4.99995V7.00691C5.48358 5.96916 6.43655 5.0951 7.55012 4.45178Z"
			}), /*#__PURE__*/ react.default.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M3.89686 12.2571C4.30713 12.2001 4.68594 12.4864 4.74295 12.8967C4.96487 14.4936 5.70565 15.9731 6.85119 17.1075C7.99673 18.242 9.48347 18.9683 11.0824 19.1746C12.6813 19.3809 14.3037 19.0558 15.6997 18.2493C16.7566 17.6387 17.6393 16.7779 18.2748 15.75H16.0001C15.5859 15.75 15.2501 15.4142 15.2501 15C15.2501 14.5857 15.5859 14.25 16.0001 14.25H19.4833C19.4947 14.2497 19.5061 14.2497 19.5175 14.25H20.0001C20.4143 14.25 20.7501 14.5857 20.7501 15V19C20.7501 19.4142 20.4143 19.75 20.0001 19.75C19.5859 19.75 19.2501 19.4142 19.2501 19V16.993C18.5166 18.0307 17.5636 18.9048 16.4501 19.5481C14.7692 20.5192 12.8157 20.9107 10.8904 20.6622C8.9652 20.4138 7.17504 19.5393 5.79572 18.1734C4.4164 16.8074 3.52443 15.0259 3.25723 13.1032C3.20022 12.6929 3.48658 12.3141 3.89686 12.2571Z"
			}));
		});
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/screenshot-container.js
	var ScreenshotContainer;
	var init_screenshot_container = __esmMin((() => {
		ScreenshotContainer = (0, _elementor_ui.styled)(_elementor_ui.Box, { shouldForwardProp: function shouldForwardProp(prop) {
			return prop !== "outlineOffset";
		} })(function(_ref) {
			var theme = _ref.theme;
			var selected = _ref.selected;
			var height = _ref.height;
			var disabled = _ref.disabled;
			var _ref$outlineOffset = _ref.outlineOffset;
			var outlineOffset = _ref$outlineOffset === void 0 ? "0px" : _ref$outlineOffset;
			var outlineColor = selected ? theme.palette.text.primary : theme.palette.text.disabled;
			var outline = "2px solid ".concat(outlineColor);
			return {
				height,
				cursor: disabled ? "default" : "pointer",
				overflow: "hidden",
				boxSizing: "border-box",
				backgroundPosition: "top center",
				backgroundSize: "100% auto",
				backgroundRepeat: "no-repeat",
				backgroundColor: theme.palette.common.white,
				borderRadius: theme.shape.borderRadius * .5,
				outlineOffset,
				outline,
				opacity: disabled ? "0.4" : "1",
				transition: "all 50ms linear",
				"&:hover": disabled ? {} : { outlineColor: theme.palette.text.primary }
			};
		});
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/screenshot-unavailable.js
	function ownKeys$5(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread$5(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$5(Object(t), !0).forEach(function(r) {
				_defineProperty$1(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	function ScreenshotUnavailable(props) {
		return /*#__PURE__*/ react.default.createElement(ScreenshotContainer, _extends({}, props, { sx: _objectSpread$5(_objectSpread$5({}, props.sx || {}), {}, {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: "background.paper",
			color: "text.tertiary",
			fontStyle: "italic",
			fontSize: "12px",
			paddingInline: 12,
			textAlign: "center",
			lineHeight: 1.5
		}) }), (0, _wordpress_i18n.__)("Preview unavailable", "elementor"));
	}
	var import_prop_types$11;
	var init_screenshot_unavailable = __esmMin((() => {
		init_extends();
		init_defineProperty$1();
		import_prop_types$11 = /* @__PURE__ */ __toESM(require_prop_types());
		init_screenshot_container();
		__name(ownKeys$5, "ownKeys");
		__name(_objectSpread$5, "_objectSpread");
		ScreenshotUnavailable.propTypes = { sx: import_prop_types$11.default.object };
	}));

//#endregion
//#region modules/ai/assets/js/editor/icons/lock-icon.js
	var LockIcon;
	var init_lock_icon = __esmMin((() => {
		init_extends();
		LockIcon = react.default.forwardRef(function(props, ref) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, _extends({ viewBox: "0 0 24 24" }, props, { ref }), /*#__PURE__*/ react.default.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M7.8125 11.9996C7.29473 11.9996 6.875 12.4473 6.875 12.9996V18.9996C6.875 19.5519 7.29473 19.9996 7.8125 19.9996H17.1875C17.7053 19.9996 18.125 19.5519 18.125 18.9996V12.9996C18.125 12.4473 17.7053 11.9996 17.1875 11.9996H7.8125ZM5 12.9996C5 11.3428 6.2592 9.99963 7.8125 9.99963H17.1875C18.7408 9.99963 20 11.3428 20 12.9996V18.9996C20 20.6565 18.7408 21.9996 17.1875 21.9996H7.8125C6.2592 21.9996 5 20.6565 5 18.9996V12.9996Z"
			}), /*#__PURE__*/ react.default.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12.5 3.90527C11.7044 3.90527 10.9413 4.22134 10.3787 4.78395C9.81607 5.34656 9.5 6.10962 9.5 6.90527V10.9053C9.5 11.4576 9.05228 11.9053 8.5 11.9053C7.94772 11.9053 7.5 11.4576 7.5 10.9053V6.90527C7.5 5.57919 8.02678 4.30742 8.96447 3.36974C9.90215 2.43206 11.1739 1.90527 12.5 1.90527C13.8261 1.90527 15.0979 2.43206 16.0355 3.36974C16.9732 4.30742 17.5 5.57919 17.5 6.90527V10.9053C17.5 11.4576 17.0523 11.9053 16.5 11.9053C15.9477 11.9053 15.5 11.4576 15.5 10.9053V6.90527C15.5 6.10962 15.1839 5.34656 14.6213 4.78395C14.0587 4.22134 13.2956 3.90527 12.5 3.90527Z"
			}), /*#__PURE__*/ react.default.createElement("path", { d: "M6 12H19V20H6V12Z" }));
		});
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/pro-template-indicator.js
	var popoverId$1, StyledContent$1, StyledArrow$1, ProTemplateIndicator;
	var init_pro_template_indicator = __esmMin((() => {
		init_slicedToArray();
		init_lock_icon();
		popoverId$1 = "e-pro-upgrade-popover";
		StyledContent$1 = (0, _elementor_ui.styled)(_elementor_ui.Paper)(function(_ref) {
			var theme = _ref.theme;
			return {
				position: "relative",
				padding: theme.spacing(3),
				boxShadow: theme.shadows[4],
				zIndex: "9999"
			};
		});
		StyledArrow$1 = (0, _elementor_ui.styled)(_elementor_ui.Box)(function(_ref2) {
			var theme = _ref2.theme;
			return {
				position: "absolute",
				width: theme.spacing(5),
				height: theme.spacing(5),
				overflow: "hidden",
				left: "100% !important",
				transform: "translateX(-50%) translateY(-50%) rotate(var(--rotate, 0deg)) !important",
				"&::after": {
					backgroundColor: theme.palette.background.paper,
					content: "\"\"",
					display: "block",
					position: "absolute",
					width: theme.spacing(2.5),
					height: theme.spacing(2.5),
					top: "50%",
					left: "50%",
					transform: "translateX(-50%) translateY(-50%) rotate(45deg)",
					boxShadow: "5px -5px 5px 0px rgba(0, 0, 0, 0.2)",
					backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))"
				}
			};
		});
		ProTemplateIndicator = function ProTemplateIndicator() {
			var actionUrl = "https://go.elementor.com/go-pro-ai/";
			var actionLabel = (0, _wordpress_i18n.__)("Go Pro", "elementor");
			var _useState2 = _slicedToArray((0, react.useState)(false), 2);
			var isPopoverOpen = _useState2[0];
			var setIsPopoverOpen = _useState2[1];
			var anchorEl = (0, react.useRef)(null);
			var arrowEl = (0, react.useRef)(null);
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
				flexDirection: "row-reverse",
				component: "span",
				display: "flex",
				onMouseLeave: function hidePopover() {
					return setIsPopoverOpen(false);
				},
				alignItems: "center"
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.IconButton, {
				ref: anchorEl,
				onMouseEnter: function showPopover() {
					return setIsPopoverOpen(true);
				},
				onClick: function onClick(e) {
					return e.stopPropagation();
				},
				"aria-owns": isPopoverOpen ? popoverId$1 : void 0,
				"aria-haspopup": "true",
				sx: {
					m: 1,
					"&:hover": { backgroundColor: "action.selected" }
				}
			}, /*#__PURE__*/ react.default.createElement(LockIcon, { sx: { color: "text.primary" } })), /*#__PURE__*/ react.default.createElement(_elementor_ui.Popper, {
				open: isPopoverOpen,
				popperOptions: {
					placement: "left-start",
					modifiers: [{
						name: "arrow",
						enabled: true,
						options: {
							element: arrowEl.current,
							padding: 5
						}
					}, {
						name: "offset",
						options: { offset: [0, 10] }
					}]
				},
				anchorEl: anchorEl.current,
				sx: {
					zIndex: "9999",
					maxWidth: 300
				}
			}, /*#__PURE__*/ react.default.createElement(StyledContent$1, null, /*#__PURE__*/ react.default.createElement(StyledArrow$1, { ref: arrowEl }), /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
				alignItems: "start",
				spacing: 2
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Chip, {
				color: "promotion",
				variant: "outlined",
				size: "small",
				label: (0, _wordpress_i18n.__)("Pro", "elementor"),
				icon: /*#__PURE__*/ react.default.createElement(LockIcon, null)
			}), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, { variant: "body2" }, (0, _wordpress_i18n.__)("This result includes an Elementor Pro widget that's not available with your current plan. Upgrade to use all the widgets in this result.", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
				variant: "contained",
				color: "promotion",
				size: "small",
				href: actionUrl,
				target: "_blank",
				sx: { alignSelf: "flex-end" }
			}, actionLabel)))));
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/template-badge.js
	var import_prop_types$10, TemplateBadge;
	var init_template_badge = __esmMin((() => {
		import_prop_types$10 = /* @__PURE__ */ __toESM(require_prop_types());
		init_config();
		init_pro_template_indicator();
		TemplateBadge = function TemplateBadge(props) {
			var hasPro = useConfig().hasPro;
			if ("Pro" === props.type && !hasPro) return /*#__PURE__*/ react.default.createElement(ProTemplateIndicator, null);
			return null;
		};
		TemplateBadge.propTypes = { type: import_prop_types$10.default.string };
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/screenshot.js
	function ownKeys$4(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	function _objectSpread$4(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$4(Object(t), !0).forEach(function(r) {
				_defineProperty$1(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	var import_prop_types$9, SCREENSHOT_HEIGHT, Screenshot;
	var init_screenshot$1 = __esmMin((() => {
		init_defineProperty$1();
		import_prop_types$9 = /* @__PURE__ */ __toESM(require_prop_types());
		init_screenshot_container();
		init_screenshot_unavailable();
		init_template_badge();
		__name(ownKeys$4, "ownKeys");
		__name(_objectSpread$4, "_objectSpread");
		SCREENSHOT_HEIGHT = "138px";
		Screenshot = function Screenshot(_ref) {
			var url = _ref.url;
			var type = _ref.type;
			var _ref$isLoading = _ref.isLoading;
			var isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading;
			var _ref$isSelected = _ref.isSelected;
			var isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected;
			var isPlaceholder = _ref.isPlaceholder;
			var disabled = _ref.disabled;
			var onClick = _ref.onClick;
			var _ref$sx = _ref.sx;
			var sx = _ref$sx === void 0 ? {} : _ref$sx;
			var outlineOffset = _ref.outlineOffset;
			if (isPlaceholder) return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: _objectSpread$4({ height: SCREENSHOT_HEIGHT }, sx) });
			if (isLoading) return /*#__PURE__*/ react.default.createElement(_elementor_ui.Skeleton, {
				width: "100%",
				animation: "wave",
				variant: "rounded",
				height: SCREENSHOT_HEIGHT,
				sx
			});
			if (!url) return /*#__PURE__*/ react.default.createElement(ScreenshotUnavailable, {
				selected: isSelected,
				disabled,
				sx,
				onClick,
				height: SCREENSHOT_HEIGHT,
				outlineOffset
			});
			return /*#__PURE__*/ react.default.createElement(ScreenshotContainer, {
				selected: isSelected,
				disabled,
				sx: _objectSpread$4({ backgroundImage: "url('".concat(url, "')") }, sx),
				onClick,
				height: SCREENSHOT_HEIGHT,
				outlineOffset
			}, /*#__PURE__*/ react.default.createElement(TemplateBadge, { type }));
		};
		Screenshot.propTypes = {
			isSelected: import_prop_types$9.default.bool,
			isLoading: import_prop_types$9.default.bool,
			isPlaceholder: import_prop_types$9.default.bool,
			disabled: import_prop_types$9.default.bool,
			onClick: import_prop_types$9.default.func.isRequired,
			url: import_prop_types$9.default.string,
			type: import_prop_types$9.default.string,
			sx: import_prop_types$9.default.object,
			outlineOffset: import_prop_types$9.default.string
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/hooks/use-layout-prompt.js
	var useLayoutPrompt;
	var init_use_layout_prompt = __esmMin((() => {
		init_api();
		init_use_prompt();
		useLayoutPrompt = function useLayoutPrompt(type, initialValue) {
			return usePrompt(function(requestBody, signal) {
				requestBody.variationType = type;
				return generateLayout(requestBody, signal);
			}, initialValue);
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/hooks/use-screenshot.js
	var import_regenerator$5, ERROR_INITIAL_VALUE, useScreenshot;
	var init_use_screenshot = __esmMin((() => {
		init_asyncToGenerator$1();
		init_slicedToArray();
		import_regenerator$5 = /* @__PURE__ */ __toESM(require_regenerator());
		init_use_layout_prompt();
		ERROR_INITIAL_VALUE = "";
		useScreenshot = function useScreenshot(type, onData) {
			var _useState2 = _slicedToArray((0, react.useState)(ERROR_INITIAL_VALUE), 2);
			var error = _useState2[0];
			var setError = _useState2[1];
			var _useState4 = _slicedToArray((0, react.useState)(false), 2);
			var isLoading = _useState4[0];
			var setIsLoading = _useState4[1];
			var layoutData = useLayoutPrompt(type, null);
			return {
				generate: function generate(requestBody, signal) {
					setIsLoading(true);
					setError(ERROR_INITIAL_VALUE);
					return layoutData.send(requestBody, signal).then(/*#__PURE__*/ function() {
						var _ref = _asyncToGenerator$1(/*#__PURE__*/ import_regenerator$5.default.mark(function _callee(data) {
							var createdScreenshot;
							return import_regenerator$5.default.wrap(function(_context) {
								while (1) switch (_context.prev = _context.next) {
									case 0:
										_context.next = 1;
										return onData(data.result);
									case 1:
										createdScreenshot = _context.sent;
										createdScreenshot.sendUsageData = function() {
											return layoutData.sendUsageData(data);
										};
										createdScreenshot.baseTemplateId = data.baseTemplateId;
										createdScreenshot.type = data.type;
										return _context.abrupt("return", createdScreenshot);
									case 2:
									case "end": return _context.stop();
								}
							}, _callee);
						}));
						return function(_x) {
							return _ref.apply(this, arguments);
						};
					}()).catch(function(err) {
						setError(err.extra_data ? err : err.message || err);
						throw err;
					}).finally(function() {
						return setIsLoading(false);
					});
				},
				error,
				isLoading
			};
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/hooks/use-screenshots.js
	var import_regenerator$4, PENDING_VALUE, useScreenshots;
	var init_use_screenshots = __esmMin((() => {
		init_toConsumableArray();
		init_asyncToGenerator$1();
		init_slicedToArray();
		import_regenerator$4 = /* @__PURE__ */ __toESM(require_regenerator());
		init_use_screenshot();
		init_config();
		init_requests_ids();
		PENDING_VALUE = { isPending: true };
		useScreenshots = function useScreenshots(_ref) {
			var onData = _ref.onData;
			var _useState2 = _slicedToArray((0, react.useState)([]), 2);
			var screenshots = _useState2[0];
			var setScreenshots = _useState2[1];
			/**
			* The ids for each request are:
			* - editorSessionId: a unique id for each editor opening
			* - sessionId: a unique id for each session. (open the AI builder)
			* - generateId: a unique id for each generate request. (prompt change)
			* - batchId: a unique id for each batch of generate requests. (generate, regenerate)
			* - requestId: a unique id for each generate request.
			*/
			var currentContext = useConfig().currentContext;
			var _useRequestIds = useRequestIds();
			var editorSessionId = _useRequestIds.editorSessionId;
			var sessionId = _useRequestIds.sessionId;
			var setRequest = _useRequestIds.setRequest;
			var setBatch = _useRequestIds.setBatch;
			var setGenerate = _useRequestIds.setGenerate;
			var generateIdRef = (0, react.useRef)("");
			var batchId = setBatch();
			var screenshotsData = [
				useScreenshot(0, onData),
				useScreenshot(1, onData),
				useScreenshot(2, onData)
			];
			var screenshotsGroupCount = screenshotsData.length;
			var error = screenshotsData.every(function(s) {
				return s === null || s === void 0 ? void 0 : s.error;
			}) ? screenshotsData[0].error : "";
			var isLoading = screenshotsData.some(function(s) {
				return s === null || s === void 0 ? void 0 : s.isLoading;
			});
			var abortController = (0, react.useRef)(null);
			var abort = function abort() {
				var _abortController$curr;
				return (_abortController$curr = abortController.current) === null || _abortController$curr === void 0 ? void 0 : _abortController$curr.abort();
			};
			var createScreenshots = /*#__PURE__*/ function() {
				var _ref2 = _asyncToGenerator$1(/*#__PURE__*/ import_regenerator$4.default.mark(function _callee(prompt, attachments) {
					var onGenerate;
					var onError;
					var promises;
					var results;
					var isAllFailed;
					return import_regenerator$4.default.wrap(function(_context) {
						while (1) switch (_context.prev = _context.next) {
							case 0:
								abortController.current = new AbortController();
								onGenerate = function onGenerate(screenshot) {
									setScreenshots(function(prev) {
										var updatedData = _toConsumableArray(prev);
										var pendingIndex = updatedData.indexOf(PENDING_VALUE);
										updatedData[pendingIndex] = screenshot;
										return updatedData;
									});
									return true;
								};
								onError = function onError() {
									setScreenshots(function(prev) {
										var updatedData = _toConsumableArray(prev);
										var pendingIndex = updatedData.lastIndexOf(PENDING_VALUE);
										updatedData[pendingIndex] = { isError: true };
										return updatedData;
									});
									return false;
								};
								promises = screenshotsData.map(function(_ref3) {
									var generate = _ref3.generate;
									return generate({
										prompt,
										prevGeneratedIds: screenshots.map(function(screenshot) {
											return screenshot.baseTemplateId || "";
										}),
										currentContext,
										ids: {
											editorSessionId: editorSessionId.current,
											sessionId: sessionId.current,
											generateId: generateIdRef.current,
											batchId: batchId.current,
											requestId: setRequest().current
										},
										attachments: attachments.map(function(_ref4) {
											return {
												type: _ref4.type,
												content: _ref4.content,
												label: _ref4.label,
												source: _ref4.source
											};
										})
									}, abortController.current.signal).then(onGenerate).catch(onError);
								});
								_context.next = 1;
								return Promise.all(promises);
							case 1:
								results = _context.sent;
								isAllFailed = results.every(function(value) {
									return false === value;
								});
								if (isAllFailed) setScreenshots(function(prev) {
									var updatedData = _toConsumableArray(prev);
									updatedData.splice(screenshotsGroupCount * -1);
									return updatedData;
								});
							case 2:
							case "end": return _context.stop();
						}
					}, _callee);
				}));
				return function createScreenshots(_x, _x2) {
					return _ref2.apply(this, arguments);
				};
			}();
			return {
				generate: function generate(prompt, attachments) {
					var placeholders = Array(screenshotsGroupCount).fill(PENDING_VALUE);
					generateIdRef.current = setGenerate().current;
					setScreenshots(placeholders);
					createScreenshots(prompt, attachments);
				},
				regenerate: function regenerate(prompt, attachments) {
					var placeholders = Array(screenshotsGroupCount).fill(PENDING_VALUE);
					setScreenshots(function(prev) {
						return [].concat(_toConsumableArray(prev), _toConsumableArray(placeholders));
					});
					createScreenshots(prompt, attachments);
				},
				screenshots,
				isLoading,
				error,
				abort
			};
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/hooks/use-slider.js
	var SCREENSHOTS_PER_PAGE, useSlider;
	var init_use_slider = __esmMin((() => {
		init_slicedToArray();
		SCREENSHOTS_PER_PAGE = 3;
		useSlider = function useSlider() {
			var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			var _ref$slidesCount = _ref.slidesCount;
			var slidesCount = _ref$slidesCount === void 0 ? 0 : _ref$slidesCount;
			var _ref$slidesPerPage = _ref.slidesPerPage;
			var slidesPerPage = _ref$slidesPerPage === void 0 ? 3 : _ref$slidesPerPage;
			var _ref$gapPercentage = _ref.gapPercentage;
			var gapPercentage = _ref$gapPercentage === void 0 ? 2 : _ref$gapPercentage;
			var _useState2 = _slicedToArray((0, react.useState)(1), 2);
			var currentPage = _useState2[0];
			var setCurrentPage = _useState2[1];
			var slideWidthPercentage = (100 - gapPercentage * (slidesPerPage - 1)) / slidesPerPage;
			var offsetXPercentage = (slideWidthPercentage + gapPercentage) * slidesPerPage * (currentPage - 1) * -1;
			var pagesCount = Math.ceil(slidesCount / slidesPerPage);
			(0, react.useEffect)(function() {
				if (currentPage > 1 && currentPage > pagesCount) setCurrentPage(pagesCount);
			}, [pagesCount]);
			return {
				currentPage,
				setCurrentPage,
				pagesCount,
				slidesPerPage,
				gapPercentage,
				offsetXPercentage,
				slideWidthPercentage
			};
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/icons/minimize-diagonal-icon.js
	var MinimizeDiagonalIcon;
	var init_minimize_diagonal_icon = __esmMin((() => {
		init_extends();
		MinimizeDiagonalIcon = react.default.forwardRef(function(props, ref) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, _extends({ viewBox: "0 0 24 24" }, props, { ref }), /*#__PURE__*/ react.default.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L9.25 8.18934V6C9.25 5.58579 9.58579 5.25 10 5.25C10.4142 5.25 10.75 5.58579 10.75 6V10C10.75 10.4142 10.4142 10.75 10 10.75H6C5.58579 10.75 5.25 10.4142 5.25 10C5.25 9.58579 5.58579 9.25 6 9.25H8.18934L3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967ZM14 13.25H18C18.4142 13.25 18.75 13.5858 18.75 14C18.75 14.4142 18.4142 14.75 18 14.75H15.8107L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2374 20.8232 19.7626 20.8232 19.4697 20.5303L14.75 15.8107V18C14.75 18.4142 14.4142 18.75 14 18.75C13.5858 18.75 13.25 18.4142 13.25 18V14C13.25 13.5858 13.5858 13.25 14 13.25Z"
			}));
		});
	}));

//#endregion
//#region modules/ai/assets/js/editor/icons/expand-diagonal-icon.js
	var ExpandDiagonalIcon;
	var init_expand_diagonal_icon = __esmMin((() => {
		init_extends();
		ExpandDiagonalIcon = react.default.forwardRef(function(props, ref) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, _extends({ viewBox: "0 0 24 24" }, props, { ref }), /*#__PURE__*/ react.default.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M4 3.25H8C8.41421 3.25 8.75 3.58579 8.75 4C8.75 4.41421 8.41421 4.75 8 4.75H5.81066L10.5303 9.46967C10.8232 9.76256 10.8232 10.2374 10.5303 10.5303C10.2374 10.8232 9.76256 10.8232 9.46967 10.5303L4.75 5.81066V8C4.75 8.41421 4.41421 8.75 4 8.75C3.58579 8.75 3.25 8.41421 3.25 8V4C3.25 3.58579 3.58579 3.25 4 3.25ZM13.4697 13.4697C13.7626 13.1768 14.2374 13.1768 14.5303 13.4697L19.25 18.1893V16C19.25 15.5858 19.5858 15.25 20 15.25C20.4142 15.25 20.75 15.5858 20.75 16V20C20.75 20.4142 20.4142 20.75 20 20.75H16C15.5858 20.75 15.25 20.4142 15.25 20C15.25 19.5858 15.5858 19.25 16 19.25H18.1893L13.4697 14.5303C13.1768 14.2374 13.1768 13.7626 13.4697 13.4697Z"
			}));
		});
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/components/attachments/prompt-power-notice.js
	var PromptPowerNotice;
	var init_prompt_power_notice = __esmMin((() => {
		init_use_introduction();
		PromptPowerNotice = function PromptPowerNotice() {
			var _useIntroduction = useIntroduction("e-ai-builder-attachments-power");
			var isViewed = _useIntroduction.isViewed;
			var markAsViewed = _useIntroduction.markAsViewed;
			if (isViewed) return null;
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
				pt: 2,
				px: 2,
				pb: 0
			} }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Alert, {
				severity: "info",
				onClose: function onClose() {
					return markAsViewed();
				}
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
				variant: "body2",
				display: "inline-block",
				sx: { paddingInlineEnd: 1 }
			}, (0, _wordpress_i18n.__)("You’ve got the power.", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
				variant: "body2",
				display: "inline-block"
			}, (0, _wordpress_i18n.__)("Craft your prompt to affect content, images and/or colors - whichever you decide.", "elementor"))));
		};
	}));

//#endregion
//#region node_modules/validator/lib/util/assertString.js
	var require_assertString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = assertString;
		function assertString(input) {
			if (input === void 0 || input === null) throw new TypeError("Expected a string but received a ".concat(input));
			if (input.constructor.name !== "String") throw new TypeError("Expected a string but received a ".concat(input.constructor.name));
		}
		module.exports = exports.default;
		module.exports.default = exports.default;
	}));

//#endregion
//#region node_modules/validator/lib/util/checkHost.js
	var require_checkHost = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = checkHost;
		function isRegExp(obj) {
			return Object.prototype.toString.call(obj) === "[object RegExp]";
		}
		function checkHost(host, matches) {
			for (var i = 0; i < matches.length; i++) {
				var match = matches[i];
				if (host === match || isRegExp(match) && match.test(host)) return true;
			}
			return false;
		}
		module.exports = exports.default;
		module.exports.default = exports.default;
	}));

//#endregion
//#region node_modules/validator/lib/util/includesString.js
	var require_includesString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var includes = function includes(str, val) {
			return str.indexOf(val) !== -1;
		};
		exports.default = includes;
		module.exports = exports.default;
		module.exports.default = exports.default;
	}));

//#endregion
//#region node_modules/validator/lib/util/merge.js
	var require_merge = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = merge;
		function merge() {
			var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			var defaults = arguments.length > 1 ? arguments[1] : void 0;
			for (var key in defaults) if (typeof obj[key] === "undefined") obj[key] = defaults[key];
			return obj;
		}
		module.exports = exports.default;
		module.exports.default = exports.default;
	}));

//#endregion
//#region node_modules/validator/lib/isFQDN.js
	var require_isFQDN = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = isFQDN;
		var _assertString = _interopRequireDefault(require_assertString());
		var _merge = _interopRequireDefault(require_merge());
		function _interopRequireDefault(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var default_fqdn_options = {
			require_tld: true,
			allow_underscores: false,
			allow_trailing_dot: false,
			allow_numeric_tld: false,
			allow_wildcard: false,
			ignore_max_length: false
		};
		function isFQDN(str, options) {
			(0, _assertString.default)(str);
			options = (0, _merge.default)(options, default_fqdn_options);
			if (options.allow_trailing_dot && str[str.length - 1] === ".") str = str.substring(0, str.length - 1);
			if (options.allow_wildcard === true && str.indexOf("*.") === 0) str = str.substring(2);
			var parts = str.split(".");
			var tld = parts[parts.length - 1];
			if (options.require_tld) {
				if (parts.length < 2) return false;
				if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) return false;
				if (/\s/.test(tld)) return false;
			}
			if (!options.allow_numeric_tld && /^\d+$/.test(tld)) return false;
			return parts.every(function(part) {
				if (part.length > 63 && !options.ignore_max_length) return false;
				if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) return false;
				if (/[\uff01-\uff5e]/.test(part)) return false;
				if (/^-|-$/.test(part)) return false;
				if (!options.allow_underscores && /_/.test(part)) return false;
				return true;
			});
		}
		module.exports = exports.default;
		module.exports.default = exports.default;
	}));

//#endregion
//#region node_modules/validator/lib/isIP.js
	var require_isIP = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = isIP;
		var _assertString = _interopRequireDefault(require_assertString());
		function _interopRequireDefault(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function _typeof(o) {
			"@babel/helpers - typeof";
			return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
				return typeof o;
			} : function(o) {
				return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
			}, _typeof(o);
		}
		/**
		11.3.  Examples
		
		The following addresses
		
		fe80::1234 (on the 1st link of the node)
		ff02::5678 (on the 5th link of the node)
		ff08::9abc (on the 10th organization of the node)
		
		would be represented as follows:
		
		fe80::1234%1
		ff02::5678%5
		ff08::9abc%10
		
		(Here we assume a natural translation from a zone index to the
		<zone_id> part, where the Nth zone of any scope is translated into
		"N".)
		
		If we use interface names as <zone_id>, those addresses could also be
		represented as follows:
		
		fe80::1234%ne0
		ff02::5678%pvc1.3
		ff08::9abc%interface10
		
		where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
		to the 5th link, and "interface10" belongs to the 10th organization.
		* * */
		var IPv4SegmentFormat = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
		var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
		var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
		var IPv6SegmentFormat = "(?:[0-9a-fA-F]{1,4})";
		var IPv6AddressRegExp = new RegExp("^(" + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ")(%[0-9a-zA-Z.]{1,})?$");
		function isIP(ipAddress) {
			var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			(0, _assertString.default)(ipAddress);
			var version = (_typeof(options) === "object" ? options.version : arguments[1]) || "";
			if (!version) return isIP(ipAddress, { version: 4 }) || isIP(ipAddress, { version: 6 });
			if (version.toString() === "4") return IPv4AddressRegExp.test(ipAddress);
			if (version.toString() === "6") return IPv6AddressRegExp.test(ipAddress);
			return false;
		}
		module.exports = exports.default;
		module.exports.default = exports.default;
	}));

//#endregion
//#region node_modules/validator/lib/isURL.js
	var require_isURL = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = isURL;
		var _assertString = _interopRequireDefault(require_assertString());
		var _checkHost = _interopRequireDefault(require_checkHost());
		var _includesString = _interopRequireDefault(require_includesString());
		var _isFQDN = _interopRequireDefault(require_isFQDN());
		var _isIP = _interopRequireDefault(require_isIP());
		var _merge = _interopRequireDefault(require_merge());
		function _interopRequireDefault(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function _slicedToArray(r, e) {
			return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
		}
		function _nonIterableRest() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
						if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
					} finally {
						if (o) throw n;
					}
				}
				return a;
			}
		}
		function _arrayWithHoles(r) {
			if (Array.isArray(r)) return r;
		}
		var default_url_options = {
			protocols: [
				"http",
				"https",
				"ftp"
			],
			require_tld: true,
			require_protocol: false,
			require_host: true,
			require_port: false,
			require_valid_protocol: true,
			allow_underscores: false,
			allow_trailing_dot: false,
			allow_protocol_relative_urls: false,
			allow_fragments: true,
			allow_query_components: true,
			validate_length: true,
			max_allowed_length: 2084
		};
		var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
		function isURL(url, options) {
			(0, _assertString.default)(url);
			if (!url || /[\s<>]/.test(url)) return false;
			if (url.indexOf("mailto:") === 0) return false;
			options = (0, _merge.default)(options, default_url_options);
			if (options.validate_length && url.length > options.max_allowed_length) return false;
			if (!options.allow_fragments && (0, _includesString.default)(url, "#")) return false;
			if (!options.allow_query_components && ((0, _includesString.default)(url, "?") || (0, _includesString.default)(url, "&"))) return false;
			var protocol;
			var auth;
			var host;
			var hostname;
			var port;
			var port_str;
			var split = url.split("#");
			var ipv6;
			url = split.shift();
			split = url.split("?");
			url = split.shift();
			var protocol_match = url.match(/^([a-z][a-z0-9+\-.]*):/i);
			var had_explicit_protocol = false;
			var cleanUpProtocol = function cleanUpProtocol(potential_protocol) {
				had_explicit_protocol = true;
				protocol = potential_protocol.toLowerCase();
				if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) return false;
				return url.substring(protocol_match[0].length);
			};
			if (protocol_match) {
				var potential_protocol = protocol_match[1];
				var after_colon = url.substring(protocol_match[0].length);
				if (!(after_colon.slice(0, 2) === "//")) {
					var first_slash_position = after_colon.indexOf("/");
					var before_slash = first_slash_position === -1 ? after_colon : after_colon.substring(0, first_slash_position);
					var at_position = before_slash.indexOf("@");
					if (at_position !== -1) {
						var before_at = before_slash.substring(0, at_position);
						if (/^[a-zA-Z0-9\-_.%:]*$/.test(before_at)) {
							if (options.require_protocol) return false;
						} else {
							url = cleanUpProtocol(potential_protocol);
							if (url === false) return false;
						}
					} else if (/^[0-9]/.test(after_colon)) {
						if (options.require_protocol) return false;
					} else {
						url = cleanUpProtocol(potential_protocol);
						if (url === false) return false;
					}
				} else {
					url = cleanUpProtocol(potential_protocol);
					if (url === false) return false;
				}
			} else if (options.require_protocol) return false;
			if (url.slice(0, 2) === "//") {
				if (!had_explicit_protocol && !options.allow_protocol_relative_urls) return false;
				url = url.slice(2);
			}
			if (url === "") return false;
			split = url.split("/");
			url = split.shift();
			if (url === "" && !options.require_host) return true;
			split = url.split("@");
			if (split.length > 1) {
				if (options.disallow_auth) return false;
				if (split[0] === "") return false;
				auth = split.shift();
				if (auth.indexOf(":") >= 0 && auth.split(":").length > 2) return false;
				var _auth$split2 = _slicedToArray(auth.split(":"), 2);
				var user = _auth$split2[0];
				var password = _auth$split2[1];
				if (user === "" && password === "") return false;
			}
			hostname = split.join("@");
			port_str = null;
			ipv6 = null;
			var ipv6_match = hostname.match(wrapped_ipv6);
			if (ipv6_match) {
				host = "";
				ipv6 = ipv6_match[1];
				port_str = ipv6_match[2] || null;
			} else {
				split = hostname.split(":");
				host = split.shift();
				if (split.length) port_str = split.join(":");
			}
			if (port_str !== null && port_str.length > 0) {
				port = parseInt(port_str, 10);
				if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) return false;
			} else if (options.require_port) return false;
			if (options.host_whitelist) return (0, _checkHost.default)(host, options.host_whitelist);
			if (host === "" && !options.require_host) return true;
			if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) return false;
			host = host || ipv6;
			if (options.host_blacklist && (0, _checkHost.default)(host, options.host_blacklist)) return false;
			return true;
		}
		module.exports = exports.default;
		module.exports.default = exports.default;
	}));

//#endregion
//#region modules/ai/assets/js/editor/icons/bulb-icon.js
	var BulbIcon;
	var init_bulb_icon = __esmMin((() => {
		init_extends();
		BulbIcon = react.default.forwardRef(function(props, ref) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, _extends({}, props, { ref }), /*#__PURE__*/ react.default.createElement("svg", {
				width: "22",
				height: "22",
				viewBox: "0 0 22 22",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, /*#__PURE__*/ react.default.createElement("g", { clipPath: "url(#clip0_10743_8902)" }, /*#__PURE__*/ react.default.createElement("path", {
				d: "M2.75 10.0833H3.66667M11 2.75V3.66667M18.3333 10.0833H19.25M5.13333 5.13333L5.775 5.775M16.8667 5.13333L16.225 5.775",
				stroke: "#2563EB",
				strokeWidth: "1.5",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), /*#__PURE__*/ react.default.createElement("path", {
				d: "M9.16675 16.041C8.70841 15.1243 6.91205 13.2842 6.62523 12.366C6.3384 11.4477 6.34775 10.4626 6.65195 9.54997C6.95615 8.63738 7.53978 7.84362 8.32016 7.28116C9.10054 6.71869 10.0381 6.41602 11.0001 6.41602C11.962 6.41602 12.8996 6.71869 13.68 7.28116C14.4604 7.84362 15.044 8.63738 15.3482 9.54997C15.6524 10.4626 15.6618 11.4477 15.3749 12.366C15.0881 13.2842 13.2917 15.1243 12.8334 16.041C12.8334 16.041 12.7597 17.3762 12.8334 17.8743C12.8334 18.3606 12.6403 18.8269 12.2964 19.1707C11.9526 19.5145 11.4863 19.7077 11.0001 19.7077C10.5139 19.7077 10.0475 19.5145 9.70372 19.1707C9.3599 18.8269 9.16675 18.3606 9.16675 17.8743C9.2405 17.3762 9.16675 16.041 9.16675 16.041Z",
				stroke: "#2563EB",
				strokeWidth: "1.5",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), /*#__PURE__*/ react.default.createElement("path", {
				d: "M10.0833 16.5H11.9166",
				stroke: "#2563EB",
				strokeWidth: "1.5",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})), /*#__PURE__*/ react.default.createElement("defs", null, /*#__PURE__*/ react.default.createElement("clipPath", { id: "clip0_10743_8902" }, /*#__PURE__*/ react.default.createElement("rect", {
				width: "22",
				height: "22",
				fill: "white"
			})))));
		});
	}));

//#endregion
//#region modules/ai/assets/js/editor/components/voice-promotion-alert.js
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
	function _objectSpread$3(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$3(Object(t), !0).forEach(function(r) {
				_defineProperty$1(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	var import_prop_types$8, VoicePromotionAlert;
	var init_voice_promotion_alert = __esmMin((() => {
		init_defineProperty$1();
		init_bulb_icon();
		init_use_introduction();
		import_prop_types$8 = /* @__PURE__ */ __toESM(require_prop_types());
		__name(ownKeys$3, "ownKeys");
		__name(_objectSpread$3, "_objectSpread");
		VoicePromotionAlert = function VoicePromotionAlert(props) {
			var _useIntroduction = useIntroduction(props.introductionKey);
			var isViewed = _useIntroduction.isViewed;
			var markAsViewed = _useIntroduction.markAsViewed;
			if (isViewed) return null;
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
				sx: _objectSpread$3({ mt: 2 }, props.sx),
				alignItems: "top"
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Alert, {
				severity: "info",
				variant: "standard",
				icon: /*#__PURE__*/ react.default.createElement(BulbIcon, { sx: { alignSelf: "flex-start" } }),
				onClose: markAsViewed
			}, (0, _wordpress_i18n.__)("Get improved results from AI by adding personal context.", "elementor"), /*#__PURE__*/ react.default.createElement(_elementor_ui.Link, {
				onClick: function onClick() {
					return $e.route("panel/global/menu");
				},
				className: "elementor-clickable",
				style: { textDecoration: "none" },
				color: "info.main",
				href: "#"
			}, (0, _wordpress_i18n.__)("Let’s do it", "elementor"))));
		};
		VoicePromotionAlert.propTypes = {
			sx: import_prop_types$8.default.object,
			introductionKey: import_prop_types$8.default.string
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/form-layout/index.js
	var import_prop_types$7, import_isURL, _excluded$2, DirectionalMinimizeDiagonalIcon, DirectionalExpandDiagonalIcon, RegenerateButton, UseLayoutButton, isRegenerateButtonDisabled, FormLayout;
	var init_form_layout = __esmMin((() => {
		init_toConsumableArray();
		init_objectWithoutProperties$1();
		init_slicedToArray();
		init_extends();
		import_prop_types$7 = /* @__PURE__ */ __toESM(require_prop_types());
		init_prompt_error_message();
		init_unsaved_changes_alert();
		init_layout_dialog();
		init_prompt_form();
		init_refresh_icon();
		init_screenshot$1();
		init_use_screenshots();
		init_use_slider();
		init_minimize_diagonal_icon();
		init_expand_diagonal_icon();
		init_config();
		init_attachment();
		init_prompt_power_notice();
		init_attachments();
		init_attach_dialog();
		import_isURL = /* @__PURE__ */ __toESM(require_isURL());
		init_voice_promotion_alert();
		_excluded$2 = ["children"];
		DirectionalMinimizeDiagonalIcon = (0, _elementor_ui.withDirection)(MinimizeDiagonalIcon);
		DirectionalExpandDiagonalIcon = (0, _elementor_ui.withDirection)(ExpandDiagonalIcon);
		RegenerateButton = function RegenerateButton(props) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, _extends({
				size: "small",
				color: "secondary",
				startIcon: /*#__PURE__*/ react.default.createElement(RefreshIcon, null)
			}, props), (0, _wordpress_i18n.__)("Regenerate", "elementor"));
		};
		UseLayoutButton = function UseLayoutButton(props) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, _extends({
				size: "small",
				variant: "contained"
			}, props), (0, _wordpress_i18n.__)("Use Layout", "elementor"));
		};
		UseLayoutButton.propTypes = { sx: import_prop_types$7.default.object };
		isRegenerateButtonDisabled = function isRegenerateButtonDisabled(screenshots, isLoading, isPromptFormActive) {
			if (isLoading || isPromptFormActive) return true;
			return screenshots.length >= 3 * 5;
		};
		FormLayout = function FormLayout(_ref) {
			var _screenshots$selected;
			var _screenshots$2;
			var _ref$DialogHeaderProp = _ref.DialogHeaderProps;
			var DialogHeaderProps = _ref$DialogHeaderProp === void 0 ? {} : _ref$DialogHeaderProp;
			var _ref$DialogContentPro = _ref.DialogContentProps;
			var DialogContentProps = _ref$DialogContentPro === void 0 ? {} : _ref$DialogContentPro;
			var initialAttachments = _ref.attachments;
			var _useConfig = useConfig();
			var attachmentsTypes = _useConfig.attachmentsTypes;
			var onData = _useConfig.onData;
			var onInsert = _useConfig.onInsert;
			var onSelect = _useConfig.onSelect;
			var onClose = _useConfig.onClose;
			var onGenerate = _useConfig.onGenerate;
			var _useScreenshots = useScreenshots({ onData });
			var screenshots = _useScreenshots.screenshots;
			var generate = _useScreenshots.generate;
			var regenerate = _useScreenshots.regenerate;
			var isLoading = _useScreenshots.isLoading;
			var error = _useScreenshots.error;
			var abort = _useScreenshots.abort;
			var screenshotOutlineOffset = "2px";
			var _useSlider = useSlider({ slidesCount: screenshots.length });
			var currentPage = _useSlider.currentPage;
			var setCurrentPage = _useSlider.setCurrentPage;
			var pagesCount = _useSlider.pagesCount;
			var gapPercentage = _useSlider.gapPercentage;
			var slidesPerPage = _useSlider.slidesPerPage;
			var offsetXPercentage = _useSlider.offsetXPercentage;
			var slideWidthPercentage = _useSlider.slideWidthPercentage;
			var _useState2 = _slicedToArray((0, react.useState)(-1), 2);
			var selectedScreenshotIndex = _useState2[0];
			var setSelectedScreenshotIndex = _useState2[1];
			var _useState4 = _slicedToArray((0, react.useState)(false), 2);
			var showUnsavedChangesAlert = _useState4[0];
			var setShowUnsavedChangesAlert = _useState4[1];
			var _useState6 = _slicedToArray((0, react.useState)(true), 2);
			var isPromptEditable = _useState6[0];
			var setIsPromptEditable = _useState6[1];
			var _useState8 = _slicedToArray((0, react.useState)([]), 2);
			var attachments = _useState8[0];
			var setAttachments = _useState8[1];
			var _useState0 = _slicedToArray((0, react.useState)(false), 2);
			var shouldRenderWebApp = _useState0[0];
			var setShouldRenderWebApp = _useState0[1];
			var _useState10 = _slicedToArray((0, react.useState)(false), 2);
			var isMinimized = _useState10[0];
			var setIsMinimized = _useState10[1];
			var lastRun = (0, react.useRef)(function() {});
			var promptInputRef = (0, react.useRef)(null);
			var selectedTemplate = (_screenshots$selected = screenshots[selectedScreenshotIndex]) === null || _screenshots$selected === void 0 ? void 0 : _screenshots$selected.template;
			var dialogContentChildren = DialogContentProps.children;
			var dialogContentProps = _objectWithoutProperties$1(DialogContentProps, _excluded$2);
			var shouldFallbackToEditPrompt = !!(error && 0 === screenshots.length);
			var isPromptFormActive = isPromptEditable || shouldFallbackToEditPrompt;
			var abortAndClose = function abortAndClose() {
				abort();
				onClose();
			};
			var onCloseIntent = function onCloseIntent() {
				if (promptInputRef.current.value.trim() !== "" || screenshots.length > 0) return setShowUnsavedChangesAlert(true);
				abortAndClose();
			};
			var handleGenerate = function handleGenerate(event, prompt) {
				event.preventDefault();
				if ("" === prompt.trim() && 0 === attachments.length) return;
				if ((0, import_isURL.default)(prompt)) {
					setShouldRenderWebApp(true);
					return;
				}
				onGenerate();
				lastRun.current = function() {
					setSelectedScreenshotIndex(-1);
					generate(prompt, attachments);
				};
				lastRun.current();
				setIsPromptEditable(false);
				setCurrentPage(1);
			};
			var handleRegenerate = function handleRegenerate() {
				lastRun.current = function() {
					regenerate(promptInputRef.current.value, attachments);
					setCurrentPage(pagesCount + 1);
				};
				lastRun.current();
			};
			var applyTemplate = function applyTemplate() {
				onInsert(selectedTemplate);
				screenshots[selectedScreenshotIndex].sendUsageData();
				abortAndClose();
			};
			var handleScreenshotClick = function handleScreenshotClick(index, template) {
				return function() {
					if (isPromptFormActive) return;
					setSelectedScreenshotIndex(index);
					onSelect(template);
				};
			};
			/**
			* @param {Attachment[]} items
			*/
			var onAttach = function onAttach(items) {
				items.forEach(function(item) {
					if (!attachmentsTypes[item.type]) throw new Error("Invalid attachment type: ".concat(item.type));
					var typeConfig = attachmentsTypes[item.type];
					if (!item.previewHTML && typeConfig.previewGenerator) typeConfig.previewGenerator(item.content).then(function(html) {
						item.previewHTML = html;
						setAttachments(function(prev) {
							return prev.map(function(attachment) {
								if (attachment.content === item.content) return item;
								return attachment;
							});
						});
					});
				});
				setAttachments(items);
				setShouldRenderWebApp(false);
				setIsPromptEditable(true);
			};
			(0, react.useEffect)(function() {
				var _screenshots$;
				if ((_screenshots$ = screenshots[0]) === null || _screenshots$ === void 0 ? void 0 : _screenshots$.template) {
					onSelect(screenshots[0].template);
					setSelectedScreenshotIndex(0);
				}
			}, [(_screenshots$2 = screenshots[0]) === null || _screenshots$2 === void 0 ? void 0 : _screenshots$2.template]);
			(0, react.useEffect)(function() {
				if (initialAttachments !== null && initialAttachments !== void 0 && initialAttachments.length) onAttach(initialAttachments);
			}, []);
			return /*#__PURE__*/ react.default.createElement(LayoutDialog, { onClose: onCloseIntent }, /*#__PURE__*/ react.default.createElement(LayoutDialog.Header, _extends({ onClose: onCloseIntent }, DialogHeaderProps), DialogHeaderProps.children, /*#__PURE__*/ react.default.createElement(_elementor_ui.Tooltip, { title: isMinimized ? (0, _wordpress_i18n.__)("Expand", "elementor") : (0, _wordpress_i18n.__)("Minimize", "elementor") }, /*#__PURE__*/ react.default.createElement(_elementor_ui.IconButton, {
				size: "small",
				"aria-label": "minimize",
				onClick: function onClick() {
					return setIsMinimized(function(prev) {
						return !prev;
					});
				}
			}, isMinimized ? /*#__PURE__*/ react.default.createElement(DirectionalExpandDiagonalIcon, null) : /*#__PURE__*/ react.default.createElement(DirectionalMinimizeDiagonalIcon, null)))), /*#__PURE__*/ react.default.createElement(LayoutDialog.Content, _extends({ dividers: true }, dialogContentProps), /*#__PURE__*/ react.default.createElement(_elementor_ui.Collapse, { in: !isMinimized }, dialogContentChildren && /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
				pt: 2,
				px: 2,
				pb: 0
			} }, dialogContentChildren), attachments.length > 0 && /*#__PURE__*/ react.default.createElement(PromptPowerNotice, null), error && /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
				pt: 2,
				px: 2,
				pb: 0
			} }, /*#__PURE__*/ react.default.createElement(PromptErrorMessage, {
				error,
				onRetry: lastRun.current
			})), showUnsavedChangesAlert && /*#__PURE__*/ react.default.createElement(UnsavedChangesAlert, {
				open: showUnsavedChangesAlert,
				title: (0, _wordpress_i18n.__)("Leave Elementor AI?", "elementor"),
				text: (0, _wordpress_i18n.__)("Your progress will be deleted, and can't be recovered.", "elementor"),
				onClose: abortAndClose,
				onCancel: function onCancel() {
					return setShowUnsavedChangesAlert(false);
				}
			}), shouldRenderWebApp && /*#__PURE__*/ react.default.createElement(AttachDialog, {
				type: "url",
				url: promptInputRef.current.value,
				onAttach,
				onClose: function onClose() {
					setShouldRenderWebApp(false);
				}
			}), /*#__PURE__*/ react.default.createElement(PromptForm, {
				shouldResetPrompt: shouldRenderWebApp,
				ref: promptInputRef,
				isActive: isPromptFormActive,
				isLoading,
				showActions: screenshots.length > 0 || isLoading,
				attachmentsTypes,
				attachments,
				onAttach,
				onDetach: function onDetach(index) {
					setAttachments(function(prev) {
						var newAttachments = _toConsumableArray(prev);
						newAttachments.splice(index, 1);
						return newAttachments;
					});
					setIsPromptEditable(true);
				},
				onSubmit: handleGenerate,
				onBack: function onBack() {
					return setIsPromptEditable(false);
				},
				onEdit: function onEdit() {
					return setIsPromptEditable(true);
				}
			}), (screenshots.length > 0 || isLoading) && /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Divider, null), /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: { p: 1.5 } }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
				overflow: "hidden",
				p: .5
			} }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
				display: "flex",
				transition: "all 0.4s ease",
				gap: "".concat(gapPercentage, "%"),
				transform: "translateX(".concat(offsetXPercentage, "%)")
			} }, screenshots.map(function(_ref2, index) {
				var screenshot = _ref2.screenshot;
				var type = _ref2.type;
				var template = _ref2.template;
				var isError = _ref2.isError;
				var isPending = _ref2.isPending;
				return /*#__PURE__*/ react.default.createElement(Screenshot, {
					key: index,
					url: screenshot,
					type,
					disabled: isPromptFormActive,
					isPlaceholder: isError,
					isLoading: isPending,
					isSelected: selectedScreenshotIndex === index,
					onClick: handleScreenshotClick(index, template),
					outlineOffset: screenshotOutlineOffset,
					sx: { flex: "0 0 ".concat(slideWidthPercentage, "%") }
				});
			}))), /*#__PURE__*/ react.default.createElement(VoicePromotionAlert, { introductionKey: "ai-context-layout-promotion" })), screenshots.length > 0 && /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
				sx: {
					pt: 0,
					px: 2,
					pb: 2
				},
				display: "grid",
				gridTemplateColumns: "repeat(3, 1fr)",
				justifyItems: "center"
			}, /*#__PURE__*/ react.default.createElement(RegenerateButton, {
				onClick: handleRegenerate,
				disabled: isRegenerateButtonDisabled(screenshots, isLoading, isPromptFormActive),
				sx: { justifySelf: "start" }
			}), screenshots.length > slidesPerPage && /*#__PURE__*/ react.default.createElement(_elementor_ui.Pagination, {
				page: currentPage,
				count: pagesCount,
				disabled: isPromptFormActive,
				onChange: function onChange(_, page) {
					return setCurrentPage(page);
				}
			}), /*#__PURE__*/ react.default.createElement(UseLayoutButton, {
				onClick: applyTemplate,
				disabled: isPromptFormActive || -1 === selectedScreenshotIndex,
				sx: {
					justifySelf: "end",
					gridColumn: 3
				}
			}))))));
		};
		FormLayout.propTypes = {
			DialogHeaderProps: import_prop_types$7.default.object,
			DialogContentProps: import_prop_types$7.default.object,
			attachments: import_prop_types$7.default.arrayOf(AttachmentPropType)
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/pages/get-started/index.js
	var import_regenerator$3, import_prop_types$6, GetStarted;
	var init_get_started = __esmMin((() => {
		init_asyncToGenerator$1();
		init_slicedToArray();
		import_regenerator$3 = /* @__PURE__ */ __toESM(require_regenerator());
		import_prop_types$6 = /* @__PURE__ */ __toESM(require_prop_types());
		init_api();
		GetStarted = function GetStarted(_ref) {
			var onSuccess = _ref.onSuccess;
			var _useState2 = _slicedToArray((0, react.useState)(false), 2);
			var isTermsChecked = _useState2[0];
			var setIsTermsChecked = _useState2[1];
			var onGetStartedClick = /*#__PURE__*/ function() {
				var _ref2 = _asyncToGenerator$1(/*#__PURE__*/ import_regenerator$3.default.mark(function _callee() {
					return import_regenerator$3.default.wrap(function(_context) {
						while (1) switch (_context.prev = _context.next) {
							case 0:
								_context.next = 1;
								return setGetStarted();
							case 1: onSuccess();
							case 2:
							case "end": return _context.stop();
						}
					}, _callee);
				}));
				return function onGetStartedClick() {
					return _ref2.apply(this, arguments);
				};
			}();
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
				alignItems: "center",
				gap: 1.5
			}, /*#__PURE__*/ react.default.createElement(_elementor_icons.AIIcon, { sx: {
				color: "text.primary",
				fontSize: "60px",
				mb: 1
			} }), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
				variant: "h4",
				sx: { color: "text.primary" }
			}, (0, _wordpress_i18n.__)("Step into the future with Elementor AI", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, { variant: "body2" }, (0, _wordpress_i18n.__)("Create smarter with AI text and code generators built right into the editor.", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
				direction: "row",
				gap: 1.5,
				alignItems: "flex-start"
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Checkbox, {
				id: "e-ai-terms-approval",
				color: "secondary",
				checked: isTermsChecked,
				onClick: function onClick() {
					return setIsTermsChecked(function(prevState) {
						return !prevState;
					});
				}
			}), /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
				variant: "caption",
				sx: { maxWidth: 520 },
				component: "label",
				htmlFor: "e-ai-terms-approval"
			}, "       ", (0, _wordpress_i18n.__)("I approve the ", "elementor"), /*#__PURE__*/ react.default.createElement(_elementor_ui.Link, {
				href: "https://go.elementor.com/ai-terms/",
				target: "_blank",
				color: "info.main"
			}, (0, _wordpress_i18n.__)("Terms of Service", "elementor")), " & ", /*#__PURE__*/ react.default.createElement(_elementor_ui.Link, {
				href: "https://go.elementor.com/ai-privacy-policy/",
				target: "_blank",
				color: "info.main"
			}, (0, _wordpress_i18n.__)("Privacy Policy", "elementor")), (0, _wordpress_i18n.__)(" of the Elementor AI service.", "elementor"), /*#__PURE__*/ react.default.createElement("br", null), (0, _wordpress_i18n.__)("This includes consenting to the collection and use of data to improve user experience.", "elementor")))), /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
				disabled: !isTermsChecked,
				variant: "contained",
				onClick: onGetStartedClick,
				sx: {
					mt: 1,
					"&:hover": { color: "primary.contrastText" }
				}
			}, (0, _wordpress_i18n.__)("Get Started", "elementor")));
		};
		GetStarted.propTypes = { onSuccess: import_prop_types$6.default.func.isRequired };
	}));

//#endregion
//#region modules/ai/assets/js/editor/components/loader.js
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
	function _objectSpread$2(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$2(Object(t), !0).forEach(function(r) {
				_defineProperty$1(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	var import_prop_types$5, _excluded$1, Loader;
	var init_loader = __esmMin((() => {
		init_extends();
		init_defineProperty$1();
		init_objectWithoutProperties$1();
		import_prop_types$5 = /* @__PURE__ */ __toESM(require_prop_types());
		_excluded$1 = ["sx", "BoxProps"];
		__name(ownKeys$2, "ownKeys");
		__name(_objectSpread$2, "_objectSpread");
		Loader = function Loader(_ref) {
			var _ref$sx = _ref.sx;
			var sx = _ref$sx === void 0 ? {} : _ref$sx;
			var _ref$BoxProps = _ref.BoxProps;
			var BoxProps = _ref$BoxProps === void 0 ? {} : _ref$BoxProps;
			var props = _objectWithoutProperties$1(_ref, _excluded$1);
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, _extends({
				width: "100%",
				display: "flex",
				alignItems: "center"
			}, BoxProps, { sx: _objectSpread$2({
				px: 1.5,
				minHeight: function minHeight(theme) {
					return theme.spacing(5);
				}
			}, BoxProps.sx || {}) }), /*#__PURE__*/ react.default.createElement(_elementor_ui.LinearProgress, _extends({ color: "secondary" }, props, { sx: _objectSpread$2({ width: "100%" }, sx) })));
		};
		Loader.propTypes = {
			sx: import_prop_types$5.default.object,
			BoxProps: import_prop_types$5.default.object
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/components/upgrade-chip.js
	var import_prop_types$4, popoverId, StyledContent, StyledArrow, upgradeBullets, Chip, UpgradeChip;
	var init_upgrade_chip = __esmMin((() => {
		init_slicedToArray();
		import_prop_types$4 = /* @__PURE__ */ __toESM(require_prop_types());
		popoverId = "e-ai-upgrade-popover";
		StyledContent = (0, _elementor_ui.styled)(_elementor_ui.Paper)(function(_ref) {
			var theme = _ref.theme;
			return {
				position: "relative",
				"[data-popper-placement=\"top\"] &": { marginBottom: theme.spacing(2.5) },
				"[data-popper-placement=\"bottom\"] &": { marginTop: theme.spacing(2.5) },
				padding: theme.spacing(3),
				boxShadow: theme.shadows[4],
				zIndex: "9999"
			};
		});
		StyledArrow = (0, _elementor_ui.styled)(_elementor_ui.Box)(function(_ref2) {
			var theme = _ref2.theme;
			return {
				width: theme.spacing(5),
				height: theme.spacing(2.5),
				position: "absolute",
				overflow: "hidden",
				left: "50% !important",
				transform: "translateX(-50%) rotate(var(--rotate, 0deg)) !important",
				"[data-popper-placement=\"top\"] &": { top: "100%" },
				"[data-popper-placement=\"bottom\"] &": {
					"--rotate": "180deg",
					top: "calc(".concat(theme.spacing(2.5), " * -1)")
				},
				"&::after": {
					backgroundColor: theme.palette.background.paper,
					content: "\"\"",
					display: "block",
					position: "absolute",
					width: theme.spacing(2.5),
					height: theme.spacing(2.5),
					top: 0,
					left: "50%",
					transform: "translateX(-50%) translateY(-50%) rotate(45deg)",
					boxShadow: "1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
					backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))"
				}
			};
		});
		upgradeBullets = [
			(0, _wordpress_i18n.__)("Get spot-on suggestions from AI Copilot and AI Context with appropriate designs, layouts, and content for your business.", "elementor"),
			(0, _wordpress_i18n.__)("Generate professional texts about any topic, in any tone.", "elementor"),
			(0, _wordpress_i18n.__)("Effortlessly create or enhance stunning images and bring your ideas to life.", "elementor"),
			(0, _wordpress_i18n.__)("Unleash infinite possibilities with the custom code generator.", "elementor"),
			(0, _wordpress_i18n.__)("Access 30-days of AI History with the AI Starter plan and 90-days with the Power plan.", "elementor")
		];
		Chip = (0, _elementor_ui.styled)(_elementor_ui.Chip)(function() {
			return {
				"& .MuiChip-label": { lineHeight: 1.5 },
				"& .MuiSvgIcon-root.MuiChip-icon": { fontSize: "1.25rem" }
			};
		});
		UpgradeChip = function UpgradeChip(_ref3) {
			var _ref3$hasSubscription = _ref3.hasSubscription;
			var hasSubscription = _ref3$hasSubscription === void 0 ? false : _ref3$hasSubscription;
			var _ref3$usagePercentage = _ref3.usagePercentage;
			var usagePercentage = _ref3$usagePercentage === void 0 ? 0 : _ref3$usagePercentage;
			var _useState2 = _slicedToArray((0, react.useState)(false), 2);
			var isPopoverOpen = _useState2[0];
			var setIsPopoverOpen = _useState2[1];
			var anchorEl = (0, react.useRef)(null);
			var arrowEl = (0, react.useRef)(null);
			var showPopover = function showPopover() {
				return setIsPopoverOpen(true);
			};
			var hidePopover = function hidePopover() {
				return setIsPopoverOpen(false);
			};
			var actionUrl = "https://go.elementor.com/ai-popup-purchase-dropdown/";
			if (hasSubscription) actionUrl = usagePercentage >= 100 ? "https://go.elementor.com/ai-popup-upgrade-limit-reached/" : "https://go.elementor.com/ai-popup-upgrade-limit-reached-80-percent/";
			var actionLabel = hasSubscription ? (0, _wordpress_i18n.__)("Upgrade Elementor AI", "elementor") : (0, _wordpress_i18n.__)("Get Elementor AI", "elementor");
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
				component: "span",
				"aria-owns": isPopoverOpen ? popoverId : void 0,
				"aria-haspopup": "true",
				onMouseEnter: showPopover,
				onMouseLeave: hidePopover,
				ref: anchorEl,
				display: "flex",
				alignItems: "center"
			}, /*#__PURE__*/ react.default.createElement(Chip, {
				color: "promotion",
				label: (0, _wordpress_i18n.__)("Upgrade", "elementor"),
				icon: /*#__PURE__*/ react.default.createElement(_elementor_icons.AIIcon, null),
				size: "small"
			}), /*#__PURE__*/ react.default.createElement(_elementor_ui.Popper, {
				open: isPopoverOpen,
				anchorEl: anchorEl.current,
				sx: {
					zIndex: "170001",
					maxWidth: 300
				},
				modifiers: [{
					name: "arrow",
					enabled: true,
					options: { element: arrowEl.current }
				}]
			}, /*#__PURE__*/ react.default.createElement(StyledContent, null, /*#__PURE__*/ react.default.createElement(StyledArrow, { ref: arrowEl }), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
				variant: "h5",
				color: "text.primary"
			}, (0, _wordpress_i18n.__)("Unlimited access to Elementor AI", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.List, { sx: { mb: 1 } }, upgradeBullets.map(function(bullet, index) {
				return /*#__PURE__*/ react.default.createElement(_elementor_ui.ListItem, {
					key: index,
					disableGutters: true,
					sx: { alignItems: "flex-start" }
				}, /*#__PURE__*/ react.default.createElement(_elementor_ui.ListItemIcon, null, /*#__PURE__*/ react.default.createElement(_elementor_icons.CheckedCircleIcon, null)), /*#__PURE__*/ react.default.createElement(_elementor_ui.ListItemText, { sx: { m: 0 } }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, { variant: "body2" }, bullet)));
			})), /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
				variant: "contained",
				color: "promotion",
				size: "small",
				href: actionUrl,
				target: "_blank",
				startIcon: /*#__PURE__*/ react.default.createElement(_elementor_icons.AIIcon, null),
				sx: { "&:hover": { color: "promotion.contrastText" } }
			}, actionLabel))));
		};
		UpgradeChip.propTypes = {
			hasSubscription: import_prop_types$4.default.bool,
			usagePercentage: import_prop_types$4.default.number
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/components/wizard-dialog.js
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
				_defineProperty$1(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	var import_prop_types$3, _excluded, WizardDialog, WizardDialogContent;
	var init_wizard_dialog = __esmMin((() => {
		init_extends();
		init_defineProperty$1();
		init_objectWithoutProperties$1();
		import_prop_types$3 = /* @__PURE__ */ __toESM(require_prop_types());
		init_dialog_header();
		_excluded = ["sx"];
		__name(ownKeys$1, "ownKeys");
		__name(_objectSpread$1, "_objectSpread");
		WizardDialog = function WizardDialog(props) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Dialog, {
				open: true,
				onClose: props.onClose,
				fullWidth: true,
				hideBackdrop: true,
				maxWidth: "lg",
				PaperProps: { sx: { height: "88vh" } },
				sx: { zIndex: 9999 }
			}, props.children);
		};
		WizardDialog.propTypes = {
			onClose: import_prop_types$3.default.func.isRequired,
			children: import_prop_types$3.default.node.isRequired
		};
		WizardDialogContent = function WizardDialogContent(_ref) {
			var _ref$sx = _ref.sx;
			var sx = _ref$sx === void 0 ? {} : _ref$sx;
			var props = _objectWithoutProperties$1(_ref, _excluded);
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.DialogContent, _extends({}, props, { sx: _objectSpread$1({
				display: "flex",
				flexDirection: "column",
				justifyContent: "center"
			}, sx) }));
		};
		WizardDialogContent.propTypes = { sx: import_prop_types$3.default.object };
		WizardDialog.Header = DialogHeader$1;
		WizardDialog.Content = WizardDialogContent;
	}));

//#endregion
//#region modules/ai/assets/js/editor/layout-content.js
	var import_prop_types$2, LayoutContent;
	var init_layout_content = __esmMin((() => {
		init_slicedToArray();
		init_connect();
		init_form_layout();
		init_get_started();
		init_loader();
		init_upgrade_chip();
		init_use_user_info();
		init_wizard_dialog();
		init_layout_dialog();
		import_prop_types$2 = /* @__PURE__ */ __toESM(require_prop_types());
		init_attachment();
		init_config();
		init_requests_ids();
		LayoutContent = function LayoutContent(props) {
			var _useUserInfo = useUserInfo();
			var isLoading = _useUserInfo.isLoading;
			var isConnected = _useUserInfo.isConnected;
			var isGetStarted = _useUserInfo.isGetStarted;
			var connectUrl = _useUserInfo.connectUrl;
			var fetchData = _useUserInfo.fetchData;
			var hasSubscription = _useUserInfo.hasSubscription;
			var initialUsagePercentage = _useUserInfo.usagePercentage;
			var _useConfig = useConfig();
			var onClose = _useConfig.onClose;
			var onConnect = _useConfig.onConnect;
			var _useRequestIds = useRequestIds();
			var updateUsagePercentage = _useRequestIds.updateUsagePercentage;
			var usagePercentage = _useRequestIds.usagePercentage;
			var _useState2 = _slicedToArray((0, react.useState)(false), 2);
			var isInitUsageDone = _useState2[0];
			var setIsInitUsageDone = _useState2[1];
			(0, react.useEffect)(function() {
				if (!isInitUsageDone && !isLoading && (initialUsagePercentage || 0 === initialUsagePercentage)) {
					updateUsagePercentage(initialUsagePercentage);
					setIsInitUsageDone(true);
				}
			}, [
				isLoading,
				initialUsagePercentage,
				isInitUsageDone,
				updateUsagePercentage
			]);
			if (isLoading || !isInitUsageDone) return /*#__PURE__*/ react.default.createElement(LayoutDialog, { onClose }, /*#__PURE__*/ react.default.createElement(LayoutDialog.Header, { onClose }), /*#__PURE__*/ react.default.createElement(LayoutDialog.Content, { dividers: true }, /*#__PURE__*/ react.default.createElement(Loader, { BoxProps: { sx: { px: 3 } } })));
			if (!isConnected) return /*#__PURE__*/ react.default.createElement(WizardDialog, { onClose }, /*#__PURE__*/ react.default.createElement(LayoutDialog, { onClose }), /*#__PURE__*/ react.default.createElement(WizardDialog.Content, { dividers: true }, /*#__PURE__*/ react.default.createElement(Connect, {
				connectUrl,
				onSuccess: function onSuccess(data) {
					onConnect(data);
					fetchData();
				}
			})));
			if (!isGetStarted) return /*#__PURE__*/ react.default.createElement(WizardDialog, { onClose }, /*#__PURE__*/ react.default.createElement(LayoutDialog, { onClose }), /*#__PURE__*/ react.default.createElement(WizardDialog.Content, { dividers: true }, /*#__PURE__*/ react.default.createElement(GetStarted, { onSuccess: fetchData })));
			var showUpgradeChip = !hasSubscription || 80 <= usagePercentage;
			return /*#__PURE__*/ react.default.createElement(FormLayout, {
				attachments: props.attachments,
				DialogHeaderProps: { children: showUpgradeChip && /*#__PURE__*/ react.default.createElement(UpgradeChip, {
					hasSubscription,
					usagePercentage
				}) }
			});
		};
		LayoutContent.propTypes = { attachments: import_prop_types$2.default.arrayOf(AttachmentPropType) };
	}));

//#endregion
//#region modules/ai/assets/js/editor/layout-app.js
	var import_prop_types$1, LayoutApp;
	var init_layout_app = __esmMin((() => {
		import_prop_types$1 = /* @__PURE__ */ __toESM(require_prop_types());
		init_layout_content();
		init_attachment();
		init_config();
		init_remote_config();
		init_requests_ids();
		LayoutApp = function LayoutApp(props) {
			return /*#__PURE__*/ react.default.createElement(RemoteConfigProvider, { onError: props.onClose }, /*#__PURE__*/ react.default.createElement(RequestIdsProvider, null, /*#__PURE__*/ react.default.createElement(ConfigProvider, {
				mode: props.mode,
				attachmentsTypes: props.attachmentsTypes,
				onClose: props.onClose,
				onConnect: props.onConnect,
				onData: props.onData,
				onInsert: props.onInsert,
				onSelect: props.onSelect,
				onGenerate: props.onGenerate,
				currentContext: props.currentContext,
				hasPro: props.hasPro
			}, /*#__PURE__*/ react.default.createElement(LayoutContent, { attachments: props.attachments }))));
		};
		LayoutApp.propTypes = {
			mode: import_prop_types$1.default.oneOf(LAYOUT_APP_MODES).isRequired,
			attachmentsTypes: AttachmentsTypesPropType,
			attachments: import_prop_types$1.default.arrayOf(AttachmentPropType),
			onClose: import_prop_types$1.default.func.isRequired,
			onConnect: import_prop_types$1.default.func.isRequired,
			onData: import_prop_types$1.default.func.isRequired,
			onInsert: import_prop_types$1.default.func.isRequired,
			onSelect: import_prop_types$1.default.func.isRequired,
			onGenerate: import_prop_types$1.default.func.isRequired,
			currentContext: import_prop_types$1.default.object,
			hasPro: import_prop_types$1.default.bool
		};
	}));

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/asyncToGenerator.js
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
	var init_asyncToGenerator = __esmMin((() => {}));

//#endregion
//#region node_modules/html-to-image/es/util.js
	function resolveUrl(url, baseUrl) {
		if (url.match(/^[a-z]+:\/\//i)) return url;
		if (url.match(/^\/\//)) return window.location.protocol + url;
		if (url.match(/^[a-z]+:/i)) return url;
		const doc = document.implementation.createHTMLDocument();
		const base = doc.createElement("base");
		const a = doc.createElement("a");
		doc.head.appendChild(base);
		doc.body.appendChild(a);
		if (baseUrl) base.href = baseUrl;
		a.href = url;
		return a.href;
	}
	function toArray(arrayLike) {
		const arr = [];
		for (let i = 0, l = arrayLike.length; i < l; i++) arr.push(arrayLike[i]);
		return arr;
	}
	function getStyleProperties(options = {}) {
		if (styleProps) return styleProps;
		if (options.includeStyleProperties) {
			styleProps = options.includeStyleProperties;
			return styleProps;
		}
		styleProps = toArray(window.getComputedStyle(document.documentElement));
		return styleProps;
	}
	function px(node, styleProperty) {
		const val = (node.ownerDocument.defaultView || window).getComputedStyle(node).getPropertyValue(styleProperty);
		return val ? parseFloat(val.replace("px", "")) : 0;
	}
	function getNodeWidth(node) {
		const leftBorder = px(node, "border-left-width");
		const rightBorder = px(node, "border-right-width");
		return node.clientWidth + leftBorder + rightBorder;
	}
	function getNodeHeight(node) {
		const topBorder = px(node, "border-top-width");
		const bottomBorder = px(node, "border-bottom-width");
		return node.clientHeight + topBorder + bottomBorder;
	}
	function getImageSize(targetNode, options = {}) {
		return {
			width: options.width || getNodeWidth(targetNode),
			height: options.height || getNodeHeight(targetNode)
		};
	}
	function getPixelRatio() {
		let ratio;
		let FINAL_PROCESS;
		try {
			FINAL_PROCESS = process;
		} catch (e) {}
		const val = FINAL_PROCESS && FINAL_PROCESS.env ? FINAL_PROCESS.env.devicePixelRatio : null;
		if (val) {
			ratio = parseInt(val, 10);
			if (Number.isNaN(ratio)) ratio = 1;
		}
		return ratio || window.devicePixelRatio || 1;
	}
	function checkCanvasDimensions(canvas) {
		if (canvas.width > canvasDimensionLimit || canvas.height > canvasDimensionLimit) if (canvas.width > canvasDimensionLimit && canvas.height > canvasDimensionLimit) if (canvas.width > canvas.height) {
			canvas.height *= canvasDimensionLimit / canvas.width;
			canvas.width = canvasDimensionLimit;
		} else {
			canvas.width *= canvasDimensionLimit / canvas.height;
			canvas.height = canvasDimensionLimit;
		}
		else if (canvas.width > canvasDimensionLimit) {
			canvas.height *= canvasDimensionLimit / canvas.width;
			canvas.width = canvasDimensionLimit;
		} else {
			canvas.width *= canvasDimensionLimit / canvas.height;
			canvas.height = canvasDimensionLimit;
		}
	}
	function createImage(url) {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.onload = () => {
				img.decode().then(() => {
					requestAnimationFrame(() => resolve(img));
				});
			};
			img.onerror = reject;
			img.crossOrigin = "anonymous";
			img.decoding = "async";
			img.src = url;
		});
	}
	function svgToDataURL(_x) {
		return _svgToDataURL.apply(this, arguments);
	}
	function _svgToDataURL() {
		_svgToDataURL = _asyncToGenerator(function* (svg) {
			return Promise.resolve().then(() => new XMLSerializer().serializeToString(svg)).then(encodeURIComponent).then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
		});
		return _svgToDataURL.apply(this, arguments);
	}
	function nodeToDataURL(_x2, _x3, _x4) {
		return _nodeToDataURL.apply(this, arguments);
	}
	function _nodeToDataURL() {
		_nodeToDataURL = _asyncToGenerator(function* (node, width, height) {
			const xmlns = "http://www.w3.org/2000/svg";
			const svg = document.createElementNS(xmlns, "svg");
			const foreignObject = document.createElementNS(xmlns, "foreignObject");
			svg.setAttribute("width", `${width}`);
			svg.setAttribute("height", `${height}`);
			svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
			foreignObject.setAttribute("width", "100%");
			foreignObject.setAttribute("height", "100%");
			foreignObject.setAttribute("x", "0");
			foreignObject.setAttribute("y", "0");
			foreignObject.setAttribute("externalResourcesRequired", "true");
			svg.appendChild(foreignObject);
			foreignObject.appendChild(node);
			return svgToDataURL(svg);
		});
		return _nodeToDataURL.apply(this, arguments);
	}
	var uuid, styleProps, canvasDimensionLimit, isInstanceOfElement;
	var init_util = __esmMin((() => {
		init_asyncToGenerator();
		uuid = (() => {
			let counter = 0;
			const random = () => `0000${(Math.random() * Math.pow(36, 4) << 0).toString(36)}`.slice(-4);
			return () => {
				counter += 1;
				return `u${random()}${counter}`;
			};
		})();
		styleProps = null;
		canvasDimensionLimit = 16384;
		isInstanceOfElement = (node, instance) => {
			if (node instanceof instance) return true;
			const nodePrototype = Object.getPrototypeOf(node);
			if (nodePrototype === null) return false;
			return nodePrototype.constructor.name === instance.name || isInstanceOfElement(nodePrototype, instance);
		};
	}));

//#endregion
//#region node_modules/html-to-image/es/clone-pseudos.js
	function formatCSSText(style) {
		const content = style.getPropertyValue("content");
		return `${style.cssText} content: '${content.replace(/'|"/g, "")}';`;
	}
	function formatCSSProperties(style, options) {
		return getStyleProperties(options).map((name) => {
			return `${name}: ${style.getPropertyValue(name)}${style.getPropertyPriority(name) ? " !important" : ""};`;
		}).join(" ");
	}
	function getPseudoElementStyle(className, pseudo, style, options) {
		const selector = `.${className}:${pseudo}`;
		const cssText = style.cssText ? formatCSSText(style) : formatCSSProperties(style, options);
		return document.createTextNode(`${selector}{${cssText}}`);
	}
	function clonePseudoElement(nativeNode, clonedNode, pseudo, options) {
		const style = window.getComputedStyle(nativeNode, pseudo);
		const content = style.getPropertyValue("content");
		if (content === "" || content === "none") return;
		const className = uuid();
		try {
			clonedNode.className = `${clonedNode.className} ${className}`;
		} catch (err) {
			return;
		}
		const styleElement = document.createElement("style");
		styleElement.appendChild(getPseudoElementStyle(className, pseudo, style, options));
		clonedNode.appendChild(styleElement);
	}
	function clonePseudoElements(nativeNode, clonedNode, options) {
		clonePseudoElement(nativeNode, clonedNode, ":before", options);
		clonePseudoElement(nativeNode, clonedNode, ":after", options);
	}
	var init_clone_pseudos = __esmMin((() => {
		init_util();
	}));

//#endregion
//#region node_modules/html-to-image/es/mimes.js
	function getExtension(url) {
		const match = /\.([^./]*?)$/g.exec(url);
		return match ? match[1] : "";
	}
	function getMimeType(url) {
		const extension = getExtension(url).toLowerCase();
		return mimes[extension] || "";
	}
	var WOFF, JPEG, mimes;
	var init_mimes = __esmMin((() => {
		WOFF = "application/font-woff";
		JPEG = "image/jpeg";
		mimes = {
			woff: WOFF,
			woff2: WOFF,
			ttf: "application/font-truetype",
			eot: "application/vnd.ms-fontobject",
			png: "image/png",
			jpg: JPEG,
			jpeg: JPEG,
			gif: "image/gif",
			tiff: "image/tiff",
			svg: "image/svg+xml",
			webp: "image/webp"
		};
	}));

//#endregion
//#region node_modules/html-to-image/es/dataurl.js
	function getContentFromDataUrl(dataURL) {
		return dataURL.split(/,/)[1];
	}
	function isDataUrl(url) {
		return url.search(/^(data:)/) !== -1;
	}
	function makeDataUrl(content, mimeType) {
		return `data:${mimeType};base64,${content}`;
	}
	function fetchAsDataURL(_x, _x2, _x3) {
		return _fetchAsDataURL.apply(this, arguments);
	}
	function _fetchAsDataURL() {
		_fetchAsDataURL = _asyncToGenerator(function* (url, init, process) {
			const res = yield fetch(url, init);
			if (res.status === 404) throw new Error(`Resource "${res.url}" not found`);
			const blob = yield res.blob();
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onerror = reject;
				reader.onloadend = () => {
					try {
						resolve(process({
							res,
							result: reader.result
						}));
					} catch (error) {
						reject(error);
					}
				};
				reader.readAsDataURL(blob);
			});
		});
		return _fetchAsDataURL.apply(this, arguments);
	}
	function getCacheKey(url, contentType, includeQueryParams) {
		let key = url.replace(/\?.*/, "");
		if (includeQueryParams) key = url;
		if (/ttf|otf|eot|woff2?/i.test(key)) key = key.replace(/.*\//, "");
		return contentType ? `[${contentType}]${key}` : key;
	}
	function resourceToDataURL(_x4, _x5, _x6) {
		return _resourceToDataURL.apply(this, arguments);
	}
	function _resourceToDataURL() {
		_resourceToDataURL = _asyncToGenerator(function* (resourceUrl, contentType, options) {
			const cacheKey = getCacheKey(resourceUrl, contentType, options.includeQueryParams);
			if (cache[cacheKey] != null) return cache[cacheKey];
			if (options.cacheBust) resourceUrl += (/\?/.test(resourceUrl) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime();
			let dataURL;
			try {
				dataURL = makeDataUrl(yield fetchAsDataURL(resourceUrl, options.fetchRequestInit, ({ res, result }) => {
					if (!contentType) contentType = res.headers.get("Content-Type") || "";
					return getContentFromDataUrl(result);
				}), contentType);
			} catch (error) {
				dataURL = options.imagePlaceholder || "";
				let msg = `Failed to fetch resource: ${resourceUrl}`;
				if (error) msg = typeof error === "string" ? error : error.message;
				if (msg) console.warn(msg);
			}
			cache[cacheKey] = dataURL;
			return dataURL;
		});
		return _resourceToDataURL.apply(this, arguments);
	}
	var cache;
	var init_dataurl = __esmMin((() => {
		init_asyncToGenerator();
		cache = {};
	}));

//#endregion
//#region node_modules/html-to-image/es/clone-node.js
	function cloneCanvasElement(_x) {
		return _cloneCanvasElement.apply(this, arguments);
	}
	function _cloneCanvasElement() {
		_cloneCanvasElement = _asyncToGenerator(function* (canvas) {
			const dataURL = canvas.toDataURL();
			if (dataURL === "data:,") return canvas.cloneNode(false);
			return createImage(dataURL);
		});
		return _cloneCanvasElement.apply(this, arguments);
	}
	function cloneVideoElement(_x2, _x3) {
		return _cloneVideoElement.apply(this, arguments);
	}
	function _cloneVideoElement() {
		_cloneVideoElement = _asyncToGenerator(function* (video, options) {
			if (video.currentSrc) {
				const canvas = document.createElement("canvas");
				const ctx = canvas.getContext("2d");
				canvas.width = video.clientWidth;
				canvas.height = video.clientHeight;
				ctx === null || ctx === void 0 || ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
				return createImage(canvas.toDataURL());
			}
			const poster = video.poster;
			return createImage(yield resourceToDataURL(poster, getMimeType(poster), options));
		});
		return _cloneVideoElement.apply(this, arguments);
	}
	function cloneIFrameElement(_x4, _x5) {
		return _cloneIFrameElement.apply(this, arguments);
	}
	function _cloneIFrameElement() {
		_cloneIFrameElement = _asyncToGenerator(function* (iframe, options) {
			var _a;
			try {
				if ((_a = iframe === null || iframe === void 0 ? void 0 : iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.body) return yield cloneNode(iframe.contentDocument.body, options, true);
			} catch (_b) {}
			return iframe.cloneNode(false);
		});
		return _cloneIFrameElement.apply(this, arguments);
	}
	function cloneSingleNode(_x6, _x7) {
		return _cloneSingleNode.apply(this, arguments);
	}
	function _cloneSingleNode() {
		_cloneSingleNode = _asyncToGenerator(function* (node, options) {
			if (isInstanceOfElement(node, HTMLCanvasElement)) return cloneCanvasElement(node);
			if (isInstanceOfElement(node, HTMLVideoElement)) return cloneVideoElement(node, options);
			if (isInstanceOfElement(node, HTMLIFrameElement)) return cloneIFrameElement(node, options);
			return node.cloneNode(isSVGElement(node));
		});
		return _cloneSingleNode.apply(this, arguments);
	}
	function cloneChildren(_x8, _x9, _x10) {
		return _cloneChildren.apply(this, arguments);
	}
	function _cloneChildren() {
		_cloneChildren = _asyncToGenerator(function* (nativeNode, clonedNode, options) {
			var _a;
			var _b;
			if (isSVGElement(clonedNode)) return clonedNode;
			let children = [];
			if (isSlotElement(nativeNode) && nativeNode.assignedNodes) children = toArray(nativeNode.assignedNodes());
			else if (isInstanceOfElement(nativeNode, HTMLIFrameElement) && ((_a = nativeNode.contentDocument) === null || _a === void 0 ? void 0 : _a.body)) children = toArray(nativeNode.contentDocument.body.childNodes);
			else children = toArray(((_b = nativeNode.shadowRoot) !== null && _b !== void 0 ? _b : nativeNode).childNodes);
			if (children.length === 0 || isInstanceOfElement(nativeNode, HTMLVideoElement)) return clonedNode;
			yield children.reduce((deferred, child) => deferred.then(() => cloneNode(child, options)).then((clonedChild) => {
				if (clonedChild) clonedNode.appendChild(clonedChild);
			}), Promise.resolve());
			return clonedNode;
		});
		return _cloneChildren.apply(this, arguments);
	}
	function cloneCSSStyle(nativeNode, clonedNode, options) {
		const targetStyle = clonedNode.style;
		if (!targetStyle) return;
		const sourceStyle = window.getComputedStyle(nativeNode);
		if (sourceStyle.cssText) {
			targetStyle.cssText = sourceStyle.cssText;
			targetStyle.transformOrigin = sourceStyle.transformOrigin;
		} else getStyleProperties(options).forEach((name) => {
			let value = sourceStyle.getPropertyValue(name);
			if (name === "font-size" && value.endsWith("px")) value = `${Math.floor(parseFloat(value.substring(0, value.length - 2))) - .1}px`;
			if (isInstanceOfElement(nativeNode, HTMLIFrameElement) && name === "display" && value === "inline") value = "block";
			if (name === "d" && clonedNode.getAttribute("d")) value = `path(${clonedNode.getAttribute("d")})`;
			targetStyle.setProperty(name, value, sourceStyle.getPropertyPriority(name));
		});
	}
	function cloneInputValue(nativeNode, clonedNode) {
		if (isInstanceOfElement(nativeNode, HTMLTextAreaElement)) clonedNode.innerHTML = nativeNode.value;
		if (isInstanceOfElement(nativeNode, HTMLInputElement)) clonedNode.setAttribute("value", nativeNode.value);
	}
	function cloneSelectValue(nativeNode, clonedNode) {
		if (isInstanceOfElement(nativeNode, HTMLSelectElement)) {
			const clonedSelect = clonedNode;
			const selectedOption = Array.from(clonedSelect.children).find((child) => nativeNode.value === child.getAttribute("value"));
			if (selectedOption) selectedOption.setAttribute("selected", "");
		}
	}
	function decorate(nativeNode, clonedNode, options) {
		if (isInstanceOfElement(clonedNode, Element)) {
			cloneCSSStyle(nativeNode, clonedNode, options);
			clonePseudoElements(nativeNode, clonedNode, options);
			cloneInputValue(nativeNode, clonedNode);
			cloneSelectValue(nativeNode, clonedNode);
		}
		return clonedNode;
	}
	function ensureSVGSymbols(_x11, _x12) {
		return _ensureSVGSymbols.apply(this, arguments);
	}
	function _ensureSVGSymbols() {
		_ensureSVGSymbols = _asyncToGenerator(function* (clone, options) {
			const uses = clone.querySelectorAll ? clone.querySelectorAll("use") : [];
			if (uses.length === 0) return clone;
			const processedDefs = {};
			for (let i = 0; i < uses.length; i++) {
				const id = uses[i].getAttribute("xlink:href");
				if (id) {
					const exist = clone.querySelector(id);
					const definition = document.querySelector(id);
					if (!exist && definition && !processedDefs[id]) processedDefs[id] = yield cloneNode(definition, options, true);
				}
			}
			const nodes = Object.values(processedDefs);
			if (nodes.length) {
				const ns = "http://www.w3.org/1999/xhtml";
				const svg = document.createElementNS(ns, "svg");
				svg.setAttribute("xmlns", ns);
				svg.style.position = "absolute";
				svg.style.width = "0";
				svg.style.height = "0";
				svg.style.overflow = "hidden";
				svg.style.display = "none";
				const defs = document.createElementNS(ns, "defs");
				svg.appendChild(defs);
				for (let i = 0; i < nodes.length; i++) defs.appendChild(nodes[i]);
				clone.appendChild(svg);
			}
			return clone;
		});
		return _ensureSVGSymbols.apply(this, arguments);
	}
	function cloneNode(_x13, _x14, _x15) {
		return _cloneNode.apply(this, arguments);
	}
	function _cloneNode() {
		_cloneNode = _asyncToGenerator(function* (node, options, isRoot) {
			if (!isRoot && options.filter && !options.filter(node)) return null;
			return Promise.resolve(node).then((clonedNode) => cloneSingleNode(clonedNode, options)).then((clonedNode) => cloneChildren(node, clonedNode, options)).then((clonedNode) => decorate(node, clonedNode, options)).then((clonedNode) => ensureSVGSymbols(clonedNode, options));
		});
		return _cloneNode.apply(this, arguments);
	}
	var isSlotElement, isSVGElement;
	var init_clone_node = __esmMin((() => {
		init_clone_pseudos();
		init_util();
		init_mimes();
		init_dataurl();
		init_asyncToGenerator();
		isSlotElement = (node) => node.tagName != null && node.tagName.toUpperCase() === "SLOT";
		isSVGElement = (node) => node.tagName != null && node.tagName.toUpperCase() === "SVG";
	}));

//#endregion
//#region node_modules/html-to-image/es/embed-resources.js
	function toRegex(url) {
		const escaped = url.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
		return new RegExp(`(url\\(['"]?)(${escaped})(['"]?\\))`, "g");
	}
	function parseURLs(cssText) {
		const urls = [];
		cssText.replace(URL_REGEX, (raw, quotation, url) => {
			urls.push(url);
			return raw;
		});
		return urls.filter((url) => !isDataUrl(url));
	}
	function embed(_x, _x2, _x3, _x4, _x5) {
		return _embed.apply(this, arguments);
	}
	function _embed() {
		_embed = _asyncToGenerator(function* (cssText, resourceURL, baseURL, options, getContentFromUrl) {
			try {
				const resolvedURL = baseURL ? resolveUrl(resourceURL, baseURL) : resourceURL;
				const contentType = getMimeType(resourceURL);
				let dataURL;
				if (getContentFromUrl) dataURL = makeDataUrl(yield getContentFromUrl(resolvedURL), contentType);
				else dataURL = yield resourceToDataURL(resolvedURL, contentType, options);
				return cssText.replace(toRegex(resourceURL), `$1${dataURL}$3`);
			} catch (error) {}
			return cssText;
		});
		return _embed.apply(this, arguments);
	}
	function filterPreferredFontFormat(str, { preferredFontFormat }) {
		return !preferredFontFormat ? str : str.replace(FONT_SRC_REGEX, (match) => {
			while (true) {
				const [src, , format] = URL_WITH_FORMAT_REGEX.exec(match) || [];
				if (!format) return "";
				if (format === preferredFontFormat) return `src: ${src};`;
			}
		});
	}
	function shouldEmbed(url) {
		return url.search(URL_REGEX) !== -1;
	}
	function embedResources(_x6, _x7, _x8) {
		return _embedResources.apply(this, arguments);
	}
	function _embedResources() {
		_embedResources = _asyncToGenerator(function* (cssText, baseUrl, options) {
			if (!shouldEmbed(cssText)) return cssText;
			const filteredCSSText = filterPreferredFontFormat(cssText, options);
			return parseURLs(filteredCSSText).reduce((deferred, url) => deferred.then((css) => embed(css, url, baseUrl, options)), Promise.resolve(filteredCSSText));
		});
		return _embedResources.apply(this, arguments);
	}
	var URL_REGEX, URL_WITH_FORMAT_REGEX, FONT_SRC_REGEX;
	var init_embed_resources = __esmMin((() => {
		init_util();
		init_mimes();
		init_dataurl();
		init_asyncToGenerator();
		URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
		URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
		FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
	}));

//#endregion
//#region node_modules/html-to-image/es/embed-images.js
	function embedProp(_x, _x2, _x3) {
		return _embedProp.apply(this, arguments);
	}
	function _embedProp() {
		_embedProp = _asyncToGenerator(function* (propName, node, options) {
			var _a;
			const propValue = (_a = node.style) === null || _a === void 0 ? void 0 : _a.getPropertyValue(propName);
			if (propValue) {
				const cssString = yield embedResources(propValue, null, options);
				node.style.setProperty(propName, cssString, node.style.getPropertyPriority(propName));
				return true;
			}
			return false;
		});
		return _embedProp.apply(this, arguments);
	}
	function embedBackground(_x4, _x5) {
		return _embedBackground.apply(this, arguments);
	}
	function _embedBackground() {
		_embedBackground = _asyncToGenerator(function* (clonedNode, options) {
			(yield embedProp("background", clonedNode, options)) || (yield embedProp("background-image", clonedNode, options));
			(yield embedProp("mask", clonedNode, options)) || (yield embedProp("-webkit-mask", clonedNode, options)) || (yield embedProp("mask-image", clonedNode, options)) || (yield embedProp("-webkit-mask-image", clonedNode, options));
		});
		return _embedBackground.apply(this, arguments);
	}
	function embedImageNode(_x6, _x7) {
		return _embedImageNode.apply(this, arguments);
	}
	function _embedImageNode() {
		_embedImageNode = _asyncToGenerator(function* (clonedNode, options) {
			const isImageElement = isInstanceOfElement(clonedNode, HTMLImageElement);
			if (!(isImageElement && !isDataUrl(clonedNode.src)) && !(isInstanceOfElement(clonedNode, SVGImageElement) && !isDataUrl(clonedNode.href.baseVal))) return;
			const url = isImageElement ? clonedNode.src : clonedNode.href.baseVal;
			const dataURL = yield resourceToDataURL(url, getMimeType(url), options);
			yield new Promise((resolve, reject) => {
				clonedNode.onload = resolve;
				clonedNode.onerror = options.onImageErrorHandler ? (...attributes) => {
					try {
						resolve(options.onImageErrorHandler(...attributes));
					} catch (error) {
						reject(error);
					}
				} : reject;
				const image = clonedNode;
				if (image.decode) image.decode = resolve;
				if (image.loading === "lazy") image.loading = "eager";
				if (isImageElement) {
					clonedNode.srcset = "";
					clonedNode.src = dataURL;
				} else clonedNode.href.baseVal = dataURL;
			});
		});
		return _embedImageNode.apply(this, arguments);
	}
	function embedChildren(_x8, _x9) {
		return _embedChildren.apply(this, arguments);
	}
	function _embedChildren() {
		_embedChildren = _asyncToGenerator(function* (clonedNode, options) {
			const deferreds = toArray(clonedNode.childNodes).map((child) => embedImages(child, options));
			yield Promise.all(deferreds).then(() => clonedNode);
		});
		return _embedChildren.apply(this, arguments);
	}
	function embedImages(_x10, _x11) {
		return _embedImages.apply(this, arguments);
	}
	function _embedImages() {
		_embedImages = _asyncToGenerator(function* (clonedNode, options) {
			if (isInstanceOfElement(clonedNode, Element)) {
				yield embedBackground(clonedNode, options);
				yield embedImageNode(clonedNode, options);
				yield embedChildren(clonedNode, options);
			}
		});
		return _embedImages.apply(this, arguments);
	}
	var init_embed_images = __esmMin((() => {
		init_embed_resources();
		init_util();
		init_dataurl();
		init_mimes();
		init_asyncToGenerator();
	}));

//#endregion
//#region node_modules/html-to-image/es/apply-style.js
	function applyStyle(node, options) {
		const { style } = node;
		if (options.backgroundColor) style.backgroundColor = options.backgroundColor;
		if (options.width) style.width = `${options.width}px`;
		if (options.height) style.height = `${options.height}px`;
		const manual = options.style;
		if (manual != null) Object.keys(manual).forEach((key) => {
			style[key] = manual[key];
		});
		return node;
	}
	var init_apply_style = __esmMin((() => {}));

//#endregion
//#region node_modules/html-to-image/es/embed-webfonts.js
	function fetchCSS(_x) {
		return _fetchCSS.apply(this, arguments);
	}
	function _fetchCSS() {
		_fetchCSS = _asyncToGenerator(function* (url) {
			let cache = cssFetchCache[url];
			if (cache != null) return cache;
			cache = {
				url,
				cssText: yield (yield fetch(url)).text()
			};
			cssFetchCache[url] = cache;
			return cache;
		});
		return _fetchCSS.apply(this, arguments);
	}
	function embedFonts(_x3, _x4) {
		return _embedFonts.apply(this, arguments);
	}
	function _embedFonts() {
		_embedFonts = _asyncToGenerator(function* (data, options) {
			let cssText = data.cssText;
			const regexUrl = /url\(["']?([^"')]+)["']?\)/g;
			const loadFonts = (cssText.match(/url\([^)]+\)/g) || []).map(function() {
				var _ref = _asyncToGenerator(function* (loc) {
					let url = loc.replace(regexUrl, "$1");
					if (!url.startsWith("https://")) url = new URL(url, data.url).href;
					return fetchAsDataURL(url, options.fetchRequestInit, ({ result }) => {
						cssText = cssText.replace(loc, `url(${result})`);
						return [loc, result];
					});
				});
				return function(_x2) {
					return _ref.apply(this, arguments);
				};
			}());
			return Promise.all(loadFonts).then(() => cssText);
		});
		return _embedFonts.apply(this, arguments);
	}
	function parseCSS(source) {
		if (source == null) return [];
		const result = [];
		let cssText = source.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
		const keyframesRegex = /* @__PURE__ */ new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
		while (true) {
			const matches = keyframesRegex.exec(cssText);
			if (matches === null) break;
			result.push(matches[0]);
		}
		cssText = cssText.replace(keyframesRegex, "");
		const importRegex = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
		const unifiedRegex = /* @__PURE__ */ new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
		while (true) {
			let matches = importRegex.exec(cssText);
			if (matches === null) {
				matches = unifiedRegex.exec(cssText);
				if (matches === null) break;
				else importRegex.lastIndex = unifiedRegex.lastIndex;
			} else unifiedRegex.lastIndex = importRegex.lastIndex;
			result.push(matches[0]);
		}
		return result;
	}
	function getCSSRules(_x5, _x6) {
		return _getCSSRules.apply(this, arguments);
	}
	function _getCSSRules() {
		_getCSSRules = _asyncToGenerator(function* (styleSheets, options) {
			const ret = [];
			const deferreds = [];
			styleSheets.forEach((sheet) => {
				if ("cssRules" in sheet) try {
					toArray(sheet.cssRules || []).forEach((item, index) => {
						if (item.type === CSSRule.IMPORT_RULE) {
							let importIndex = index + 1;
							const url = item.href;
							const deferred = fetchCSS(url).then((metadata) => embedFonts(metadata, options)).then((cssText) => parseCSS(cssText).forEach((rule) => {
								try {
									sheet.insertRule(rule, rule.startsWith("@import") ? importIndex += 1 : sheet.cssRules.length);
								} catch (error) {
									console.error("Error inserting rule from remote css", {
										rule,
										error
									});
								}
							})).catch((e) => {
								console.error("Error loading remote css", e.toString());
							});
							deferreds.push(deferred);
						}
					});
				} catch (e) {
					const inline = styleSheets.find((a) => a.href == null) || document.styleSheets[0];
					if (sheet.href != null) deferreds.push(fetchCSS(sheet.href).then((metadata) => embedFonts(metadata, options)).then((cssText) => parseCSS(cssText).forEach((rule) => {
						inline.insertRule(rule, inline.cssRules.length);
					})).catch((err) => {
						console.error("Error loading remote stylesheet", err);
					}));
					console.error("Error inlining remote css file", e);
				}
			});
			return Promise.all(deferreds).then(() => {
				styleSheets.forEach((sheet) => {
					if ("cssRules" in sheet) try {
						toArray(sheet.cssRules || []).forEach((item) => {
							ret.push(item);
						});
					} catch (e) {
						console.error(`Error while reading CSS rules from ${sheet.href}`, e);
					}
				});
				return ret;
			});
		});
		return _getCSSRules.apply(this, arguments);
	}
	function getWebFontRules(cssRules) {
		return cssRules.filter((rule) => rule.type === CSSRule.FONT_FACE_RULE).filter((rule) => shouldEmbed(rule.style.getPropertyValue("src")));
	}
	function parseWebFontRules(_x7, _x8) {
		return _parseWebFontRules.apply(this, arguments);
	}
	function _parseWebFontRules() {
		_parseWebFontRules = _asyncToGenerator(function* (node, options) {
			if (node.ownerDocument == null) throw new Error("Provided element is not within a Document");
			return getWebFontRules(yield getCSSRules(toArray(node.ownerDocument.styleSheets), options));
		});
		return _parseWebFontRules.apply(this, arguments);
	}
	function normalizeFontFamily(font) {
		return font.trim().replace(/["']/g, "");
	}
	function getUsedFonts(node) {
		const fonts = /* @__PURE__ */ new Set();
		function traverse(node) {
			(node.style.fontFamily || getComputedStyle(node).fontFamily).split(",").forEach((font) => {
				fonts.add(normalizeFontFamily(font));
			});
			Array.from(node.children).forEach((child) => {
				if (child instanceof HTMLElement) traverse(child);
			});
		}
		traverse(node);
		return fonts;
	}
	function getWebFontCSS(_x9, _x10) {
		return _getWebFontCSS.apply(this, arguments);
	}
	function _getWebFontCSS() {
		_getWebFontCSS = _asyncToGenerator(function* (node, options) {
			const rules = yield parseWebFontRules(node, options);
			const usedFonts = getUsedFonts(node);
			return (yield Promise.all(rules.filter((rule) => usedFonts.has(normalizeFontFamily(rule.style.fontFamily))).map((rule) => {
				const baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
				return embedResources(rule.cssText, baseUrl, options);
			}))).join("\n");
		});
		return _getWebFontCSS.apply(this, arguments);
	}
	function embedWebFonts(_x11, _x12) {
		return _embedWebFonts.apply(this, arguments);
	}
	function _embedWebFonts() {
		_embedWebFonts = _asyncToGenerator(function* (clonedNode, options) {
			const cssText = options.fontEmbedCSS != null ? options.fontEmbedCSS : options.skipFonts ? null : yield getWebFontCSS(clonedNode, options);
			if (cssText) {
				const styleNode = document.createElement("style");
				const sytleContent = document.createTextNode(cssText);
				styleNode.appendChild(sytleContent);
				if (clonedNode.firstChild) clonedNode.insertBefore(styleNode, clonedNode.firstChild);
				else clonedNode.appendChild(styleNode);
			}
		});
		return _embedWebFonts.apply(this, arguments);
	}
	var cssFetchCache;
	var init_embed_webfonts = __esmMin((() => {
		init_util();
		init_dataurl();
		init_embed_resources();
		init_asyncToGenerator();
		cssFetchCache = {};
	}));

//#endregion
//#region node_modules/html-to-image/es/index.js
	function toSvg(_x) {
		return _toSvg.apply(this, arguments);
	}
	function _toSvg() {
		_toSvg = _asyncToGenerator(function* (node, options = {}) {
			const { width, height } = getImageSize(node, options);
			const clonedNode = yield cloneNode(node, options, true);
			yield embedWebFonts(clonedNode, options);
			yield embedImages(clonedNode, options);
			applyStyle(clonedNode, options);
			return yield nodeToDataURL(clonedNode, width, height);
		});
		return _toSvg.apply(this, arguments);
	}
	function toCanvas(_x2) {
		return _toCanvas.apply(this, arguments);
	}
	function _toCanvas() {
		_toCanvas = _asyncToGenerator(function* (node, options = {}) {
			const { width, height } = getImageSize(node, options);
			const img = yield createImage(yield toSvg(node, options));
			const canvas = document.createElement("canvas");
			const context = canvas.getContext("2d");
			const ratio = options.pixelRatio || getPixelRatio();
			const canvasWidth = options.canvasWidth || width;
			const canvasHeight = options.canvasHeight || height;
			canvas.width = canvasWidth * ratio;
			canvas.height = canvasHeight * ratio;
			if (!options.skipAutoScale) checkCanvasDimensions(canvas);
			canvas.style.width = `${canvasWidth}`;
			canvas.style.height = `${canvasHeight}`;
			if (options.backgroundColor) {
				context.fillStyle = options.backgroundColor;
				context.fillRect(0, 0, canvas.width, canvas.height);
			}
			context.drawImage(img, 0, 0, canvas.width, canvas.height);
			return canvas;
		});
		return _toCanvas.apply(this, arguments);
	}
	var init_es = __esmMin((() => {
		init_clone_node();
		init_embed_images();
		init_apply_style();
		init_embed_webfonts();
		init_util();
		init_asyncToGenerator();
	}));

//#endregion
//#region modules/ai/assets/js/editor/utils/screenshot.js
	function screenshotNode(node) {
		return toWebp(node, {
			quality: .01,
			imagePlaceholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
		});
	}
	function toWebp(_x2) {
		return _toWebp.apply(this, arguments);
	}
	function _toWebp() {
		_toWebp = _asyncToGenerator$1(/*#__PURE__*/ import_regenerator$2.default.mark(function _callee3(node) {
			var _options$quality;
			var options;
			var canvas;
			var _args3 = arguments;
			return import_regenerator$2.default.wrap(function(_context3) {
				while (1) switch (_context3.prev = _context3.next) {
					case 0:
						options = _args3.length > 1 && _args3[1] !== void 0 ? _args3[1] : {};
						_context3.next = 1;
						return toCanvas(node, options);
					case 1:
						canvas = _context3.sent;
						return _context3.abrupt("return", canvas.toDataURL("image/webp", (_options$quality = options.quality) !== null && _options$quality !== void 0 ? _options$quality : 1));
					case 2:
					case "end": return _context3.stop();
				}
			}, _callee3);
		}));
		return _toWebp.apply(this, arguments);
	}
	function createHiddenWrapper() {
		var wrapper = document.createElement("div");
		wrapper.style.position = "fixed";
		wrapper.style.opacity = "0";
		wrapper.style.inset = "0";
		return wrapper;
	}
	function createContainer(template) {
		var model = generateIds(template);
		model.id = "e-ai-screenshot-container-".concat(model.id);
		return $e.run("document/elements/create", {
			container: elementor.getPreviewContainer(),
			model,
			options: { edit: false }
		});
	}
	function deleteContainer(container) {
		return $e.run("document/elements/delete", { container });
	}
	function waitForContainer(id) {
		var timeoutPromise = sleep(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5e3);
		var waitPromise = new Promise(function(resolve) {
			elementorFrontend.hooks.addAction("frontend/element_ready/global", /*#__PURE__*/ function() {
				var _ref2 = _asyncToGenerator$1(/*#__PURE__*/ import_regenerator$2.default.mark(function _callee2($element) {
					var images;
					return import_regenerator$2.default.wrap(function(_context2) {
						while (1) switch (_context2.prev = _context2.next) {
							case 0:
								if (!($element.data("id") === id)) {
									_context2.next = 2;
									break;
								}
								images = _toConsumableArray($element[0].querySelectorAll("img"));
								_context2.next = 1;
								return Promise.all(images.map(waitForImage));
							case 1: resolve();
							case 2:
							case "end": return _context2.stop();
						}
					}, _callee2);
				}));
				return function(_x3) {
					return _ref2.apply(this, arguments);
				};
			}());
		});
		return Promise.any([timeoutPromise, waitPromise]);
	}
	function waitForImage(image) {
		if (image.complete) return Promise.resolve();
		return new Promise(function(resolve) {
			image.addEventListener("load", resolve);
			image.addEventListener("error", function() {
				image.remove();
				resolve();
			});
		});
	}
	function sleep(ms) {
		return new Promise(function(resolve) {
			return setTimeout(resolve, ms);
		});
	}
	function wrapContainer(container, wrapper) {
		var el = container.view.$el[0];
		el.parentNode.insertBefore(wrapper, el);
		wrapper.appendChild(el);
	}
	var import_regenerator$2, takeScreenshot;
	var init_screenshot = __esmMin((() => {
		init_toConsumableArray();
		init_asyncToGenerator$1();
		import_regenerator$2 = /* @__PURE__ */ __toESM(require_regenerator());
		init_es();
		init_history();
		init_requests_ids();
		takeScreenshot = /*#__PURE__*/ function() {
			var _ref = _asyncToGenerator$1(/*#__PURE__*/ import_regenerator$2.default.mark(function _callee(template) {
				var hiddenWrapper;
				var container;
				var screenshot;
				return import_regenerator$2.default.wrap(function(_context) {
					while (1) switch (_context.prev = _context.next) {
						case 0:
							if (template) {
								_context.next = 1;
								break;
							}
							return _context.abrupt("return", "");
						case 1:
							toggleHistory(false);
							hiddenWrapper = createHiddenWrapper();
							container = createContainer(template);
							wrapContainer(container, hiddenWrapper);
							elementor.getPreviewView().$childViewContainer[0].appendChild(hiddenWrapper);
							_context.next = 2;
							return waitForContainer(container.id);
						case 2:
							if (!template.elements.length) {
								_context.next = 3;
								break;
							}
							_context.next = 3;
							return Promise.all(template.elements.map(function(child) {
								return waitForContainer(child.id);
							}));
						case 3:
							_context.prev = 3;
							_context.next = 4;
							return screenshotNode(container.view.$el[0]);
						case 4:
							screenshot = _context.sent;
							_context.next = 6;
							break;
						case 5:
							_context.prev = 5;
							_context["catch"](3);
							screenshot = "";
						case 6:
							deleteContainer(container);
							hiddenWrapper.remove();
							toggleHistory(true);
							return _context.abrupt("return", screenshot);
						case 7:
						case "end": return _context.stop();
					}
				}, _callee, null, [[3, 5]]);
			}));
			return function takeScreenshot(_x) {
				return _ref.apply(this, arguments);
			};
		}();
	}));

//#endregion
//#region modules/ai/assets/js/editor/layout-app-wrapper.js
	var import_prop_types, LayoutAppWrapper;
	var init_layout_app_wrapper = __esmMin((() => {
		import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
		LayoutAppWrapper = function LayoutAppWrapper(props) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.DirectionProvider, { rtl: props.isRTL }, /*#__PURE__*/ react.default.createElement(_elementor_ui.ThemeProvider, { colorScheme: props.colorScheme }, props.children));
		};
		LayoutAppWrapper.propTypes = {
			children: import_prop_types.default.node,
			isRTL: import_prop_types.default.bool,
			colorScheme: import_prop_types.default.oneOf([
				"auto",
				"light",
				"dark"
			])
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/utils/editor-integration.js
	var editor_integration_exports = /* @__PURE__ */ __exportAll({
		VARIATIONS_PROMPTS: () => VARIATIONS_PROMPTS,
		WEB_BASED_PROMPTS: () => WEB_BASED_PROMPTS,
		closePanel: () => closePanel,
		getUiConfig: () => getUiConfig,
		importToEditor: () => importToEditor,
		onConnect: () => onConnect,
		openPanel: () => openPanel,
		renderLayoutApp: () => renderLayoutApp
	});
	var import_regenerator$1, closePanel, openPanel, onConnect, getUiConfig, VARIATIONS_PROMPTS, WEB_BASED_PROMPTS, PROMPT_PLACEHOLDER, renderLayoutApp, importToEditor;
	var init_editor_integration = __esmMin((() => {
		init_asyncToGenerator$1();
		import_regenerator$1 = /* @__PURE__ */ __toESM(require_regenerator());
		init_react();
		init_preview_container();
		init_layout_app();
		init_screenshot();
		init_history();
		init_layout_app_wrapper();
		init_requests_ids();
		closePanel = function closePanel() {
			$e.run("panel/close");
			$e.components.get("panel").blockUserInteractions();
		};
		openPanel = function openPanel() {
			$e.run("panel/open");
			$e.components.get("panel").unblockUserInteractions();
		};
		onConnect = function onConnect(data) {
			elementorCommon.config.library_connect.is_connected = true;
			elementorCommon.config.library_connect.current_access_level = data.kits_access_level || data.access_level || 0;
			elementorCommon.config.library_connect.current_access_tier = data.access_tier;
			elementorCommon.config.library_connect.plan_type = data.plan_type;
		};
		getUiConfig = function getUiConfig() {
			var _elementor;
			var _elementor$getPrefere;
			return {
				colorScheme: ((_elementor = elementor) === null || _elementor === void 0 || (_elementor$getPrefere = _elementor.getPreferences) === null || _elementor$getPrefere === void 0 ? void 0 : _elementor$getPrefere.call(_elementor, "ui_theme")) || "auto",
				isRTL: elementorCommon.config.isRTL
			};
		};
		VARIATIONS_PROMPTS = [
			{ text: (0, _wordpress_i18n.__)("Minimalist design with bold typography about", "elementor") },
			{ text: (0, _wordpress_i18n.__)("Elegant style with serif fonts discussing", "elementor") },
			{ text: (0, _wordpress_i18n.__)("Retro vibe with muted colors and classic fonts about", "elementor") },
			{ text: (0, _wordpress_i18n.__)("Futuristic design with neon accents about", "elementor") },
			{ text: (0, _wordpress_i18n.__)("Professional look with clean lines for", "elementor") },
			{ text: (0, _wordpress_i18n.__)("Earthy tones and organic shapes featuring", "elementor") },
			{ text: (0, _wordpress_i18n.__)("Luxurious theme with rich colors discussing", "elementor") },
			{ text: (0, _wordpress_i18n.__)("Tech-inspired style with modern fonts about", "elementor") },
			{ text: (0, _wordpress_i18n.__)("Warm hues with comforting visuals about", "elementor") }
		];
		WEB_BASED_PROMPTS = [
			{ text: (0, _wordpress_i18n.__)("Change the content to be about [topic]", "elementor") },
			{ text: (0, _wordpress_i18n.__)("Generate lorem ipsum placeholder text for all paragraphs", "elementor") },
			{ text: (0, _wordpress_i18n.__)("Revise the content to focus on [topic] and then translate it into Spanish", "elementor") },
			{ text: (0, _wordpress_i18n.__)("Shift the focus of the content to [topic] in order to showcase our company's mission and values", "elementor") },
			{ text: (0, _wordpress_i18n.__)("Alter the content to provide helpful tips related to [topic]", "elementor") },
			{ text: (0, _wordpress_i18n.__)("Adjust the content to include FAQs and answers for common inquiries about [topic]", "elementor") }
		];
		PROMPT_PLACEHOLDER = (0, _wordpress_i18n.__)("Press '/' for suggestions or describe the changes you want to apply (optional)...", "elementor");
		renderLayoutApp = function renderLayoutApp() {
			var _options$onRenderApp;
			var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
				parentContainer: null,
				mode: "",
				at: null,
				onClose: null,
				onGenerate: null,
				onInsert: null,
				onRenderApp: null,
				onSelect: null,
				attachments: []
			};
			closePanel();
			var previewContainer = createPreviewContainer(options.parentContainer, { at: options.at });
			var _getUiConfig = getUiConfig();
			var colorScheme = _getUiConfig.colorScheme;
			var isRTL = _getUiConfig.isRTL;
			var rootElement = document.createElement("div");
			document.body.append(rootElement);
			var bodyStyle = window.elementorFrontend.elements.$window[0].getComputedStyle(window.elementorFrontend.elements.$body[0]);
			var unmount = react_default.render(/*#__PURE__*/ react.default.createElement(LayoutAppWrapper, {
				isRTL,
				colorScheme
			}, /*#__PURE__*/ react.default.createElement(LayoutApp, {
				mode: options.mode,
				currentContext: { body: {
					backgroundColor: bodyStyle.backgroundColor,
					backgroundImage: bodyStyle.backgroundImage
				} },
				attachmentsTypes: {
					json: {
						promptSuggestions: VARIATIONS_PROMPTS,
						promptPlaceholder: PROMPT_PLACEHOLDER,
						previewGenerator: function() {
							var _previewGenerator = _asyncToGenerator$1(/*#__PURE__*/ import_regenerator$1.default.mark(function _callee(json) {
								var screenshot;
								return import_regenerator$1.default.wrap(function(_context) {
									while (1) switch (_context.prev = _context.next) {
										case 0:
											_context.next = 1;
											return takeScreenshot(json);
										case 1:
											screenshot = _context.sent;
											return _context.abrupt("return", "<img src=\"".concat(screenshot, "\" />"));
										case 2:
										case "end": return _context.stop();
									}
								}, _callee);
							}));
							function previewGenerator(_x) {
								return _previewGenerator.apply(this, arguments);
							}
							return previewGenerator;
						}()
					},
					url: {
						promptPlaceholder: PROMPT_PLACEHOLDER,
						promptSuggestions: WEB_BASED_PROMPTS
					}
				},
				attachments: options.attachments || [],
				onClose: function onClose() {
					var _options$onClose;
					previewContainer.destroy();
					(_options$onClose = options.onClose) === null || _options$onClose === void 0 || _options$onClose.call(options);
					unmount();
					rootElement.remove();
					openPanel();
				},
				onConnect,
				onGenerate: function onGenerate() {
					var _options$onGenerate;
					(_options$onGenerate = options.onGenerate) === null || _options$onGenerate === void 0 || _options$onGenerate.call(options, { previewContainer });
				},
				onData: /*#__PURE__*/ function() {
					var _ref = _asyncToGenerator$1(/*#__PURE__*/ import_regenerator$1.default.mark(function _callee2(template) {
						var screenshot;
						return import_regenerator$1.default.wrap(function(_context2) {
							while (1) switch (_context2.prev = _context2.next) {
								case 0:
									_context2.next = 1;
									return takeScreenshot(template);
								case 1:
									screenshot = _context2.sent;
									return _context2.abrupt("return", {
										screenshot,
										template
									});
								case 2:
								case "end": return _context2.stop();
							}
						}, _callee2);
					}));
					return function(_x2) {
						return _ref.apply(this, arguments);
					};
				}(),
				onSelect: function onSelect(template) {
					var _options$onSelect;
					(_options$onSelect = options.onSelect) === null || _options$onSelect === void 0 || _options$onSelect.call(options);
					previewContainer.setContent(template);
				},
				onInsert: options.onInsert,
				hasPro: elementor.helpers.hasPro()
			})), rootElement).unmount;
			(_options$onRenderApp = options.onRenderApp) === null || _options$onRenderApp === void 0 || _options$onRenderApp.call(options, { previewContainer });
		};
		importToEditor = function importToEditor(_ref2) {
			var parentContainer = _ref2.parentContainer;
			var at = _ref2.at;
			var template = _ref2.template;
			var historyTitle = _ref2.historyTitle;
			var _ref2$replace = _ref2.replace;
			var replace = _ref2$replace === void 0 ? false : _ref2$replace;
			var endHistoryLog = startHistoryLog({
				type: "import",
				title: historyTitle
			});
			if (replace) $e.run("document/elements/delete", { container: parentContainer.children.at(at) });
			$e.run("document/elements/create", {
				container: parentContainer,
				model: generateIds(template),
				options: {
					at,
					edit: true
				}
			});
			endHistoryLog();
		};
	}));

//#endregion
//#region assets/dev/js/editor/utils/editor-one-events.js
	var editor_one_events_exports = /* @__PURE__ */ __exportAll({
		EditorOneEventManager: () => EditorOneEventManager,
		createDebouncedFinderSearch: () => createDebouncedFinderSearch,
		createDebouncedWidgetPanelSearch: () => createDebouncedWidgetPanelSearch,
		default: () => EditorOneEventManager
	});
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
				_defineProperty$1(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	var EditorOneEventManager, createDebouncedFinderSearch, createDebouncedWidgetPanelSearch;
	var init_editor_one_events = __esmMin((() => {
		init_defineProperty$1();
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
		createDebouncedFinderSearch = function createDebouncedFinderSearch() {
			var delay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 300;
			return _.debounce(function(resultsCount, searchTerm) {
				EditorOneEventManager.sendFinderSearchInput({
					resultsCount,
					searchTerm
				});
			}, delay);
		};
		createDebouncedWidgetPanelSearch = function createDebouncedWidgetPanelSearch() {
			var delay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 2e3;
			return _.debounce(function(resultsCount, userInput) {
				EditorOneEventManager.sendWidgetPanelSearch({
					resultsCount,
					userInput
				});
			}, delay);
		};
	}));

//#endregion
//#region modules/ai/assets/js/editor/ai-layout-behavior.js
	init_classCallCheck();
	init_createClass();
	init_defineProperty$1();
	init_editor_integration();
	init_config();
	init_editor_one_events();
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
	var AiLayoutBehavior = /*#__PURE__*/ function(_Marionette$Behavior) {
		function AiLayoutBehavior() {
			var _this;
			_classCallCheck(this, AiLayoutBehavior);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _callSuper$1(this, AiLayoutBehavior, [].concat(args));
			_defineProperty$1(_this, "previewContainer", null);
			return _this;
		}
		_inherits(AiLayoutBehavior, _Marionette$Behavior);
		return _createClass(AiLayoutBehavior, [
			{
				key: "ui",
				value: function ui() {
					return {
						aiButton: ".e-ai-layout-button",
						addTemplateButton: ".elementor-add-template-button"
					};
				}
			},
			{
				key: "events",
				value: function events() {
					return { "click @ui.aiButton": "onAiButtonClick" };
				}
			},
			{
				key: "onAiButtonClick",
				value: function onAiButtonClick(e) {
					e.stopPropagation();
					EditorOneEventManager.sendCanvasEmptyBoxAction({ targetName: "generate_with_ai" });
					window.elementorAiCurrentContext = this.getOption("context");
					renderLayoutApp({
						parentContainer: elementor.getPreviewContainer(),
						mode: MODE_LAYOUT,
						at: this.view.getOption("at"),
						onInsert: this.onInsert.bind(this),
						onRenderApp: function onRenderApp(args) {
							args.previewContainer.init();
						},
						onGenerate: function onGenerate(args) {
							args.previewContainer.reset();
						}
					});
				}
			},
			{
				key: "hideDropArea",
				value: function hideDropArea() {
					this.view.onCloseButtonClick();
				}
			},
			{
				key: "onInsert",
				value: function onInsert(template) {
					this.hideDropArea();
					importToEditor({
						parentContainer: elementor.getPreviewContainer(),
						at: this.view.getOption("at"),
						template,
						historyTitle: (0, _wordpress_i18n.__)("AI Layout", "elementor")
					});
				}
			},
			{
				key: "onRender",
				value: function onRender() {
					var $button = jQuery("<button>", {
						type: "button",
						class: "e-ai-layout-button elementor-add-section-area-button e-button-primary",
						title: (0, _wordpress_i18n.__)("Build with AI", "elementor"),
						"aria-label": (0, _wordpress_i18n.__)("Build with AI", "elementor")
					});
					$button.html("\n			<div class=\"e-ai-layout-button--sparkle\"></div>\n			<div class=\"e-ai-layout-button--sparkle\"></div>\n			<div class=\"e-ai-layout-button--sparkle\"></div>\n			<div class=\"e-ai-layout-button--sparkle\"></div>\n			<div class=\"e-ai-layout-button--sparkle\"></div>\n			<div class=\"e-ai-layout-button--sparkle\"></div>\n			<div class=\"e-ai-layout-button--sparkle\"></div>\n			<i class=\"eicon-ai\" aria-hidden=\"true\"></i>\n		");
					this.ui.addTemplateButton.after($button);
				}
			}
		]);
	}(Marionette.Behavior);

//#endregion
//#region modules/ai/assets/js/editor/integration/library/apply-template-for-ai-behavior.js
	var require_apply_template_for_ai_behavior = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var _require = (init_editor_integration(), __toCommonJS(editor_integration_exports));
		var renderLayoutApp = _require.renderLayoutApp;
		var importToEditor = _require.importToEditor;
		var MODE_VARIATION = (init_config(), __toCommonJS(config_exports)).MODE_VARIATION;
		var __$1 = (globalThis.wp.i18n).__;
		var _require4 = (init_attachments(), __toCommonJS(attachments_exports));
		var ATTACHMENT_TYPE_JSON = _require4.ATTACHMENT_TYPE_JSON;
		var ELEMENTOR_LIBRARY_SOURCE = _require4.ELEMENTOR_LIBRARY_SOURCE;
		var EditorOneEventManager = (init_editor_one_events(), __toCommonJS(editor_one_events_exports)).EditorOneEventManager;
		var ApplyTemplateForAiBehavior = Marionette.Behavior.extend({
			ui: {
				applyButton: ".elementor-template-library-template-apply-ai",
				generateVariation: ".elementor-template-library-template-generate-variation"
			},
			events: {
				"click @ui.applyButton": "onApplyButtonClick",
				"click @ui.generateVariation": "onGenerateVariationClick"
			},
			trackAiGenerate: function trackAiGenerate(model) {
				EditorOneEventManager.sendELibraryGenerateAi({
					assetId: model.get("template_id"),
					assetName: model.get("title"),
					libraryType: model.get("type") || model.get("source")
				});
			},
			onGenerateVariationClick: function onGenerateVariationClick() {
				var _libraryComponent$man;
				var args = { model: this.view.model };
				this.trackAiGenerate(this.view.model);
				var libraryComponent = $e.components.get("library");
				var at = (_libraryComponent$man = libraryComponent.manager.modalConfig) === null || _libraryComponent$man === void 0 || (_libraryComponent$man = _libraryComponent$man.importOptions) === null || _libraryComponent$man === void 0 ? void 0 : _libraryComponent$man.at;
				libraryComponent.downloadTemplate(args, function(data) {
					var model = args.model;
					var attachment = {
						type: ATTACHMENT_TYPE_JSON,
						previewHTML: "<img src=\"".concat(model.get("thumbnail"), "\" />"),
						content: data.content[0],
						label: "".concat(model.get("template_id"), " - ").concat(model.get("title")),
						source: ELEMENTOR_LIBRARY_SOURCE
					};
					renderLayoutApp({
						parentContainer: elementor.getPreviewContainer(),
						mode: MODE_VARIATION,
						at,
						attachments: [attachment],
						onInsert: function onInsert(template) {
							importToEditor({
								parentContainer: elementor.getPreviewContainer(),
								at,
								template,
								historyTitle: __$1("AI Variation from library", "elementor")
							});
						}
					});
					$e.run("library/close");
				});
			},
			onApplyButtonClick: function onApplyButtonClick() {
				var args = { model: this.view.model };
				this.trackAiGenerate(this.view.model);
				this.ui.applyButton.addClass("elementor-disabled");
				var activeSource = args.model.get("source");
				if (elementor.hooks.applyFilters("templates/source/is-remote", "remote" === activeSource, activeSource) && !elementor.config.library_connect.is_connected) {
					$e.route("library/connect", args);
					return;
				}
				$e.run("library/generate-ai-variation", args);
			}
		});
		module.exports = ApplyTemplateForAiBehavior;
	}));

//#endregion
//#region modules/ai/assets/js/editor/layout-module.js
	init_asyncToGenerator$1();
	init_classCallCheck();
	init_createClass();
	init_defineProperty$1();
	var import_regenerator = /* @__PURE__ */ __toESM(require_regenerator());
	init_editor_integration();
	init_config();
	var import_apply_template_for_ai_behavior = /* @__PURE__ */ __toESM(require_apply_template_for_ai_behavior());
	init_attachments();
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
	var AI_ATTACHMENT = "ai-attachment";
	var Module = /*#__PURE__*/ function(_elementorModules$edi) {
		function Module() {
			var _this;
			_classCallCheck(this, Module);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _callSuper(this, Module, [].concat(args));
			_defineProperty$1(_this, "registerVariationsContextMenu", function(groups, currentElement) {
				var saveGroup = groups.find(function(group) {
					return "save" === group.name;
				});
				if (!saveGroup) return groups;
				var contextMenu = {
					name: "ai",
					icon: "eicon-ai",
					isEnabled: function isEnabled() {
						return 0 !== currentElement.getContainer().children.length;
					},
					title: (0, _wordpress_i18n.__)("Generate variations with AI", "elementor"),
					callback: function() {
						var _callback = _asyncToGenerator$1(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
							var container;
							var json;
							var attachments;
							return import_regenerator.default.wrap(function(_context) {
								while (1) switch (_context.prev = _context.next) {
									case 0:
										container = currentElement.getContainer();
										json = container.model.toJSON({ remove: ["default"] });
										attachments = [{
											type: "json",
											previewHTML: "",
											content: json,
											label: container.model.get("title"),
											source: USER_VARIATION_SOURCE
										}];
										renderLayoutApp({
											parentContainer: container.parent,
											mode: MODE_VARIATION,
											at: container.view._index,
											attachments,
											onSelect: function onSelect() {
												container.view.$el.hide();
											},
											onClose: function onClose() {
												container.view.$el.show();
											},
											onInsert: function onInsert(template) {
												importToEditor({
													parentContainer: container.parent,
													at: container.view._index,
													template,
													historyTitle: (0, _wordpress_i18n.__)("AI Variation", "elementor"),
													replace: true
												});
											}
										});
									case 1:
									case "end": return _context.stop();
								}
							}, _callee);
						}));
						function callback() {
							return _callback.apply(this, arguments);
						}
						return callback;
					}()
				};
				saveGroup.actions.unshift(contextMenu);
				return groups;
			});
			return _this;
		}
		_inherits(Module, _elementorModules$edi);
		return _createClass(Module, [
			{
				key: "onElementorInit",
				value: function onElementorInit() {
					var _this2 = this;
					elementor.hooks.addFilter("views/add-section/behaviors", this.registerAiLayoutBehavior);
					elementor.hooks.addFilter("elements/container/contextMenuGroups", this.registerVariationsContextMenu);
					elementor.hooks.addFilter("elementor/editor/template-library/template/behaviors", this.registerLibraryActionButtonBehavior);
					elementor.hooks.addFilter("elementor/editor/template-library/template/action-button", this.filterLibraryActionButtonTemplate, 11);
					$e.commands.register("library", "generate-ai-variation", function(args) {
						return _this2.applyTemplate(args);
					});
				}
			},
			{
				key: "applyTemplate",
				value: function applyTemplate(args) {
					window.postMessage({ type: "library/attach:start" });
					$e.components.get("library").downloadTemplate(args, function(data) {
						var model = args.model;
						window.postMessage({
							type: "library/attach",
							json: data.content[0],
							html: "<img src=\"".concat(model.get("thumbnail"), "\" />"),
							label: "".concat(model.get("template_id"), " - ").concat(model.get("title")),
							source: ELEMENTOR_LIBRARY_SOURCE
						}, window.location.origin);
					});
				}
			},
			{
				key: "registerLibraryActionButtonBehavior",
				value: function registerLibraryActionButtonBehavior(behaviors) {
					behaviors.applyAiTemplate = { behaviorClass: import_apply_template_for_ai_behavior.default };
					return behaviors;
				}
			},
			{
				key: "registerAiLayoutBehavior",
				value: function registerAiLayoutBehavior(behaviors) {
					behaviors.ai = {
						behaviorClass: AiLayoutBehavior,
						context: { documentType: window.elementor.documents.getCurrent().config.type }
					};
					return behaviors;
				}
			},
			{
				key: "filterLibraryActionButtonTemplate",
				value: function filterLibraryActionButtonTemplate(viewId) {
					var modalConfig = $e.components.get("library").manager.modalConfig;
					if ("#tmpl-elementor-template-library-insert-button" !== viewId) return viewId;
					if ($e.routes.current.library !== "library/templates/blocks") return viewId;
					if ("ai-attachment" === modalConfig.mode) viewId = "#tmpl-elementor-template-library-apply-ai-button";
					else viewId = "#tmpl-elementor-template-library-insert-and-ai-variations-buttons";
					return viewId;
				}
			}
		]);
	}(elementorModules.editor.utils.Module);
	new Module();

//#endregion
})(wp.i18n, React, ReactDOM, elementorV2.ui, elementorV2.icons);
//# sourceMappingURL=ai-layout.js.map