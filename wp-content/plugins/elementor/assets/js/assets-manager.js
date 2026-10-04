'use strict';

(function() {

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
//#region modules/assets-manager/assets/js/utils.js
var import_regenerator = /* @__PURE__ */ __toESM(require_regenerator());
	var cssMap = /* @__PURE__ */ new Map();
	var jsMap = /* @__PURE__ */ new Map();
	function jsElementId(handle) {
		return "".concat(handle, "-js");
	}
	function cssElementId(handle) {
		return "".concat(handle, "-css");
	}
	function appendCss(handle, uri) {
		var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		if (cssMap.has(handle)) return cssMap.get(handle);
		if (document.getElementById(cssElementId(handle))) {
			var resolved = Promise.resolve();
			cssMap.set(handle, resolved);
			return resolved;
		}
		var promise = new Promise(function(resolve, reject) {
			var _options$media;
			var link = document.createElement("link");
			link.id = cssElementId(handle);
			link.rel = "stylesheet";
			link.href = uri;
			link.media = (_options$media = options.media) !== null && _options$media !== void 0 ? _options$media : "all";
			link.onload = resolve;
			link.onerror = reject;
			document.head.appendChild(link);
		});
		cssMap.set(handle, promise);
		return promise;
	}
	function appendJs(handle, uri) {
		var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		if (jsMap.has(handle)) return jsMap.get(handle);
		if (document.getElementById(jsElementId(handle))) {
			var resolved = Promise.resolve();
			jsMap.set(handle, resolved);
			return resolved;
		}
		var promise = new Promise(function(resolve, reject) {
			var _options$async;
			var script = document.createElement("script");
			script.id = jsElementId(handle);
			script.src = uri;
			script.type = "text/javascript";
			script.async = (_options$async = options.async) !== null && _options$async !== void 0 ? _options$async : true;
			script.onload = resolve;
			script.onerror = reject;
			document.body.appendChild(script);
		});
		jsMap.set(handle, promise);
		return promise;
	}

//#endregion
//#region modules/assets-manager/assets/js/assets-manager.js
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
	function enqueueAssets(_x, _x2) {
		return _enqueueAssets.apply(this, arguments);
	}
	function _enqueueAssets() {
		_enqueueAssets = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee2(w, utils) {
			var _w$elementorAssetsMan;
			var _assets$styles$priori;
			var _assets$styles;
			var _assets$scripts$prior;
			var _assets$scripts;
			var assets;
			var _iterator;
			var _step;
			var _assets$styles2;
			var _assets$styles$map$ha;
			var handle;
			var _ref2;
			var uri;
			var options;
			var _iterator2;
			var _step2;
			var _assets$scripts2;
			var _assets$scripts$map$_;
			var _handle;
			var _ref3;
			var _uri;
			var _options;
			var _t;
			var _t2;
			var _t3;
			var _t4;
			return import_regenerator.default.wrap(function(_context2) {
				while (1) switch (_context2.prev = _context2.next) {
					case 0:
						assets = (_w$elementorAssetsMan = w.elementorAssetsManager) !== null && _w$elementorAssetsMan !== void 0 ? _w$elementorAssetsMan : {};
						_iterator = _createForOfIteratorHelper((_assets$styles$priori = (_assets$styles = assets.styles) === null || _assets$styles === void 0 ? void 0 : _assets$styles.priority_queue) !== null && _assets$styles$priori !== void 0 ? _assets$styles$priori : []);
						_context2.prev = 1;
						_iterator.s();
					case 2:
						if ((_step = _iterator.n()).done) {
							_context2.next = 8;
							break;
						}
						handle = _step.value;
						if ((_assets$styles2 = assets.styles) !== null && _assets$styles2 !== void 0 && (_assets$styles2 = _assets$styles2.map) !== null && _assets$styles2 !== void 0 && _assets$styles2[handle]) {
							_context2.next = 3;
							break;
						}
						return _context2.abrupt("continue", 7);
					case 3:
						_ref2 = (_assets$styles$map$ha = assets.styles.map[handle]) !== null && _assets$styles$map$ha !== void 0 ? _assets$styles$map$ha : {}, uri = _ref2.uri, options = _ref2.options;
						_context2.prev = 4;
						_context2.next = 5;
						return utils.appendCss(handle, uri, options);
					case 5:
						_context2.next = 7;
						break;
					case 6:
						_context2.prev = 6;
						_t = _context2["catch"](4);
						console.error("Failed to append CSS asset: ".concat(handle), _t);
					case 7:
						_context2.next = 2;
						break;
					case 8:
						_context2.next = 10;
						break;
					case 9:
						_context2.prev = 9;
						_t2 = _context2["catch"](1);
						_iterator.e(_t2);
					case 10:
						_context2.prev = 10;
						_iterator.f();
						return _context2.finish(10);
					case 11:
						_iterator2 = _createForOfIteratorHelper((_assets$scripts$prior = (_assets$scripts = assets.scripts) === null || _assets$scripts === void 0 ? void 0 : _assets$scripts.priority_queue) !== null && _assets$scripts$prior !== void 0 ? _assets$scripts$prior : []);
						_context2.prev = 12;
						_iterator2.s();
					case 13:
						if ((_step2 = _iterator2.n()).done) {
							_context2.next = 19;
							break;
						}
						_handle = _step2.value;
						if ((_assets$scripts2 = assets.scripts) !== null && _assets$scripts2 !== void 0 && (_assets$scripts2 = _assets$scripts2.map) !== null && _assets$scripts2 !== void 0 && _assets$scripts2[_handle]) {
							_context2.next = 14;
							break;
						}
						return _context2.abrupt("continue", 18);
					case 14:
						_ref3 = (_assets$scripts$map$_ = assets.scripts.map[_handle]) !== null && _assets$scripts$map$_ !== void 0 ? _assets$scripts$map$_ : {}, _uri = _ref3.uri, _options = _ref3.options;
						_context2.prev = 15;
						_context2.next = 16;
						return utils.appendJs(_handle, _uri, _options);
					case 16:
						_context2.next = 18;
						break;
					case 17:
						_context2.prev = 17;
						_t3 = _context2["catch"](15);
						console.error("Failed to append JS asset: ".concat(_handle), _t3);
					case 18:
						_context2.next = 13;
						break;
					case 19:
						_context2.next = 21;
						break;
					case 20:
						_context2.prev = 20;
						_t4 = _context2["catch"](12);
						_iterator2.e(_t4);
					case 21:
						_context2.prev = 21;
						_iterator2.f();
						return _context2.finish(21);
					case 22:
					case "end": return _context2.stop();
				}
			}, _callee2, null, [
				[
					1,
					9,
					10,
					11
				],
				[4, 6],
				[
					12,
					20,
					21,
					22
				],
				[15, 17]
			]);
		}));
		return _enqueueAssets.apply(this, arguments);
	}
	(function(w) {
		w.addEventListener("load", /*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
			return import_regenerator.default.wrap(function(_context) {
				while (1) switch (_context.prev = _context.next) {
					case 0:
						_context.next = 1;
						return enqueueAssets(w, {
							appendCss,
							appendJs
						});
					case 1:
					case "end": return _context.stop();
				}
			}, _callee);
		})));
	})(window);

//#endregion
})();
//# sourceMappingURL=assets-manager.js.map