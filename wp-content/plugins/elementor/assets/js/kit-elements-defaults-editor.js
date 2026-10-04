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
//#region modules/kit-elements-defaults/assets/js/editor/api.js
	var import_regenerator = /* @__PURE__ */ __toESM(require_regenerator());
	var NAMESPACE = "kit-elements-defaults";
	function loadElementsDefaults() {
		return _loadElementsDefaults.apply(this, arguments);
	}
	function _loadElementsDefaults() {
		_loadElementsDefaults = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
			return import_regenerator.default.wrap(function(_context) {
				while (1) switch (_context.prev = _context.next) {
					case 0:
						$e.data.cache.storage.removeItem(NAMESPACE);
						return _context.abrupt("return", $e.data.get("".concat(NAMESPACE, "/index")));
					case 1:
					case "end": return _context.stop();
				}
			}, _callee);
		}));
		return _loadElementsDefaults.apply(this, arguments);
	}
	function getElementDefaults(type) {
		return ($e.data.cache.storage.getItem(NAMESPACE) || {})[type] || {};
	}
	function updateElementDefaults(_x, _x2) {
		return _updateElementDefaults.apply(this, arguments);
	}
	function _updateElementDefaults() {
		_updateElementDefaults = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee2(type, settings) {
			return import_regenerator.default.wrap(function(_context2) {
				while (1) switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 1;
						return $e.data.update("".concat(NAMESPACE, "/index"), { settings }, { type });
					case 1:
						_context2.next = 2;
						return loadElementsDefaults();
					case 2:
					case "end": return _context2.stop();
				}
			}, _callee2);
		}));
		return _updateElementDefaults.apply(this, arguments);
	}
	function deleteElementDefaults(_x3) {
		return _deleteElementDefaults.apply(this, arguments);
	}
	function _deleteElementDefaults() {
		_deleteElementDefaults = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee3(type) {
			return import_regenerator.default.wrap(function(_context3) {
				while (1) switch (_context3.prev = _context3.next) {
					case 0:
						_context3.next = 1;
						return $e.data.delete("".concat(NAMESPACE, "/index"), { type });
					case 1:
						_context3.next = 2;
						return loadElementsDefaults();
					case 2:
					case "end": return _context3.stop();
				}
			}, _callee3);
		}));
		return _deleteElementDefaults.apply(this, arguments);
	}

//#endregion
//#region modules/kit-elements-defaults/assets/js/editor/utils.js
	function isPopulatedObject(obj) {
		return obj && "object" === _typeof(obj) && !Array.isArray(obj) && Object.keys(obj).length > 0;
	}
	function extractElementType(model) {
		model = model.attributes || model;
		var elementType = model.widgetType || model.elType;
		if ("section" === elementType && model.isInner) elementType = "inner-section";
		return elementType;
	}

//#endregion
//#region modules/kit-elements-defaults/assets/js/editor/hooks/data/fill-defaults-on-drop.js
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
	var FillDefaultsOnDrop = /*#__PURE__*/ function(_$e$modules$hookData$) {
		function FillDefaultsOnDrop() {
			_classCallCheck(this, FillDefaultsOnDrop);
			return _callSuper$7(this, FillDefaultsOnDrop, arguments);
		}
		_inherits(FillDefaultsOnDrop, _$e$modules$hookData$);
		return _createClass(FillDefaultsOnDrop, [
			{
				key: "getCommand",
				value: function getCommand() {
					return "preview/drop";
				}
			},
			{
				key: "getId",
				value: function getId() {
					return "fill-defaults-on-drop";
				}
			},
			{
				key: "getConditions",
				value: function getConditions(args) {
					var _args$model;
					var _args$model2;
					return ((_args$model = args.model) === null || _args$model === void 0 ? void 0 : _args$model.widgetType) || ((_args$model2 = args.model) === null || _args$model2 === void 0 ? void 0 : _args$model2.elType);
				}
			},
			{
				key: "apply",
				value: function apply(args) {
					var model = args.model;
					var elementDefaultSettings = getElementDefaults(extractElementType(model));
					if (!isPopulatedObject(elementDefaultSettings)) return true;
					var settings = _objectSpread$1(_objectSpread$1({}, elementDefaultSettings), args.model.settings || {});
					["__dynamic__", "__globals__"].forEach(function(type) {
						var _args$model$settings;
						if (!isPopulatedObject(elementDefaultSettings[type])) return;
						settings[type] = _objectSpread$1(_objectSpread$1({}, elementDefaultSettings[type] || {}), ((_args$model$settings = args.model.settings) === null || _args$model$settings === void 0 ? void 0 : _args$model$settings[type]) || {});
					});
					args.model = _objectSpread$1(_objectSpread$1({}, args.model), {}, { settings });
					return true;
				}
			}
		]);
	}($e.modules.hookData.Dependency);

//#endregion
//#region modules/kit-elements-defaults/assets/js/editor/hooks/index.js
	var hooks_exports = /* @__PURE__ */ __exportAll({ FillDefaultsOnDrop: () => FillDefaultsOnDrop });

//#endregion
//#region modules/kit-elements-defaults/assets/js/editor/data-commands/index.js
	var data_commands_exports = /* @__PURE__ */ __exportAll({ Index: () => Index });
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
	var Index = /*#__PURE__*/ function(_$e$modules$CommandDa) {
		function Index() {
			_classCallCheck(this, Index);
			return _callSuper$6(this, Index, arguments);
		}
		_inherits(Index, _$e$modules$CommandDa);
		return _createClass(Index, null, [{
			key: "getEndpointFormat",
			value: function getEndpointFormat() {
				return "kit-elements-defaults/{type}";
			}
		}]);
	}($e.modules.CommandData);

//#endregion
//#region modules/kit-elements-defaults/assets/js/editor/confirm-creation-dialog.js
	var introductionKey = "kit_elements_defaults_create_dialog";
	var introductionManager = null;
	/**
	* A wrapper around Introduction class that allows to create a dialog only once,
	* + has specific logic for the "Do not show this message again" checkbox,
	* + the content for "save as default" feature.
	*
	* @param {Object}   config
	* @param {Function} config.onConfirm
	* @return {{show: (function(): *), doNotShowAgain: (boolean)}}
	*/
	function getConfirmCreationDialog(_ref) {
		var onConfirm = _ref.onConfirm;
		if (!introductionManager) {
			var _elementor$config$use;
			introductionManager = createIntroductionManager();
			introductionManager.introductionViewed = !!((_elementor$config$use = elementor.config.user.introduction) !== null && _elementor$config$use !== void 0 && _elementor$config$use["kit_elements_defaults_create_dialog"]);
		}
		var dialog = introductionManager.getDialog();
		dialog.onConfirm = function() {
			if (dialog.getElements("checkbox-dont-show-again").prop("checked")) introductionManager.setViewed();
			onConfirm();
		};
		return {
			doNotShowAgain: !!introductionManager.introductionViewed,
			show: function show() {
				return introductionManager.show();
			}
		};
	}
	function createIntroductionManager() {
		var _introduction$getDial;
		var _introduction$getDial2;
		var dialogId = "e-kit-elements-defaults-create-dialog";
		var introduction = new elementorModules.editor.utils.Introduction({
			introductionKey,
			dialogType: "confirm",
			dialogOptions: {
				id: dialogId,
				headerMessage: (0, _wordpress_i18n.__)("Sure you want to change default settings?", "elementor"),
				message: (0, _wordpress_i18n.__)("Your changes will automatically be saved for future uses of this element. %1$sNote:%2$s This includes sensitive information like emails, API keys, etc.", "elementor").replace("%1$s", "<strong>").replace("%2$s", "</strong>"),
				effects: {
					show: "fadeIn",
					hide: "fadeOut"
				},
				hide: { onBackgroundClick: true },
				strings: {
					confirm: (0, _wordpress_i18n.__)("Save", "elementor"),
					cancel: (0, _wordpress_i18n.__)("Cancel", "elementor")
				},
				onShow: function onShow() {
					var _this$getElements;
					(_this$getElements = this.getElements("checkbox-dont-show-again")) === null || _this$getElements === void 0 || _this$getElements.prop("checked", true);
				}
			}
		});
		var _createCheckboxAndLab = createCheckboxAndLabel(dialogId);
		var checkbox = _createCheckboxAndLab.checkbox;
		var label = _createCheckboxAndLab.label;
		introduction.getDialog().addElement("checkbox-dont-show-again", checkbox);
		(_introduction$getDial = introduction.getDialog().getElements("message")) === null || _introduction$getDial === void 0 || (_introduction$getDial2 = _introduction$getDial.append) === null || _introduction$getDial2 === void 0 || _introduction$getDial2.call(_introduction$getDial, label);
		return introduction;
	}
	function createCheckboxAndLabel(dialogId) {
		var checkboxId = "".concat(dialogId, "-dont-show-again");
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = checkboxId;
		checkbox.id = checkboxId;
		checkbox.checked = true;
		var label = document.createElement("label");
		label.htmlFor = checkboxId;
		label.textContent = (0, _wordpress_i18n.__)("Do not show this message again", "elementor");
		label.prepend(checkbox);
		return {
			checkbox,
			label
		};
	}

//#endregion
//#region modules/kit-elements-defaults/assets/js/editor/commands/confirm-creation.js
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
	var ConfirmCreation = /*#__PURE__*/ function(_$e$modules$editor$Co) {
		function ConfirmCreation() {
			_classCallCheck(this, ConfirmCreation);
			return _callSuper$5(this, ConfirmCreation, arguments);
		}
		_inherits(ConfirmCreation, _$e$modules$editor$Co);
		return _createClass(ConfirmCreation, [{
			key: "validateArgs",
			value: function validateArgs() {
				this.requireContainer();
			}
		}, {
			key: "apply",
			value: function() {
				var _apply = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee(_ref) {
					var container;
					var confirmCreationDialog;
					return import_regenerator.default.wrap(function(_context) {
						while (1) switch (_context.prev = _context.next) {
							case 0:
								container = _ref.container;
								confirmCreationDialog = getConfirmCreationDialog({ onConfirm: function onConfirm() {
									return $e.run("kit-elements-defaults/create", { container });
								} });
								if (!confirmCreationDialog.doNotShowAgain) {
									_context.next = 1;
									break;
								}
								$e.run("kit-elements-defaults/create", { container });
								return _context.abrupt("return");
							case 1: confirmCreationDialog.show();
							case 2:
							case "end": return _context.stop();
						}
					}, _callee);
				}));
				function apply(_x) {
					return _apply.apply(this, arguments);
				}
				return apply;
			}()
		}]);
	}($e.modules.editor.CommandContainerBase);

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
//#region modules/kit-elements-defaults/assets/js/editor/extract-container-settings.js
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
	var SPECIAL_SETTINGS = ["__dynamic__", "__globals__"];
	function extractContainerSettings(container) {
		var settingsModel = container.settings;
		var controls = settingsModel.controls;
		var settings = settingsModel.toJSON({ remove: ["default"] });
		var localSettings = extractSettings(settings, controls);
		return _objectSpread(_objectSpread({}, localSettings), extractSpecialSettings(settings, controls, localSettings));
	}
	function extractSettings(settings, controls) {
		var existingSettings = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		var entries = Object.entries(settings).filter(function(_ref) {
			var settingName = _slicedToArray(_ref, 1)[0];
			return !!controls[settingName] && !Object.prototype.hasOwnProperty.call(existingSettings, settingName);
		});
		return Object.fromEntries(entries);
	}
	function extractSpecialSettings(settings, controls, localSettings) {
		return SPECIAL_SETTINGS.reduce(function(acc, type) {
			var specialSettings = extractSettings((settings === null || settings === void 0 ? void 0 : settings[type]) || {}, controls, localSettings);
			if (!isPopulatedObject(specialSettings)) return acc;
			return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, type, specialSettings));
		}, {});
	}

//#endregion
//#region modules/kit-elements-defaults/assets/js/editor/commands/create.js
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
	var Create = /*#__PURE__*/ function(_$e$modules$editor$Co) {
		function Create() {
			_classCallCheck(this, Create);
			return _callSuper$4(this, Create, arguments);
		}
		_inherits(Create, _$e$modules$editor$Co);
		return _createClass(Create, [{
			key: "validateArgs",
			value: function validateArgs() {
				this.requireContainer();
			}
		}, {
			key: "apply",
			value: function() {
				var _apply = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee(_ref) {
					var container;
					var type;
					var previousDefaults;
					var newDefaults;
					var _t;
					return import_regenerator.default.wrap(function(_context) {
						while (1) switch (_context.prev = _context.next) {
							case 0:
								container = _ref.container;
								$e.internal("panel/state-loading");
								type = extractElementType(container.model), previousDefaults = getElementDefaults(type), newDefaults = extractContainerSettings(container);
								_context.prev = 1;
								_context.next = 2;
								return updateElementDefaults(type, newDefaults);
							case 2:
								elementor.notifications.showToast({
									message: (0, _wordpress_i18n.__)("Default settings changed.", "elementor"),
									buttons: [{
										name: "undo",
										text: (0, _wordpress_i18n.__)("Undo", "elementor"),
										callback: function callback() {
											$e.run("kit-elements-defaults/restore", {
												type,
												settings: previousDefaults
											});
										}
									}]
								});
								_context.next = 4;
								break;
							case 3:
								_context.prev = 3;
								_t = _context["catch"](1);
								elementor.notifications.showToast({ message: (0, _wordpress_i18n.__)("An error occurred.", "elementor") });
								throw _t;
							case 4:
								_context.prev = 4;
								$e.internal("panel/state-ready");
								return _context.finish(4);
							case 5:
							case "end": return _context.stop();
						}
					}, _callee, null, [[
						1,
						3,
						4,
						5
					]]);
				}));
				function apply(_x) {
					return _apply.apply(this, arguments);
				}
				return apply;
			}()
		}]);
	}($e.modules.editor.CommandContainerBase);

//#endregion
//#region modules/kit-elements-defaults/assets/js/editor/commands/delete.js
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
	var Delete = /*#__PURE__*/ function(_$e$modules$CommandBa) {
		function Delete() {
			_classCallCheck(this, Delete);
			return _callSuper$3(this, Delete, arguments);
		}
		_inherits(Delete, _$e$modules$CommandBa);
		return _createClass(Delete, [{
			key: "apply",
			value: function() {
				var _apply = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee(_ref) {
					var type;
					var _t;
					return import_regenerator.default.wrap(function(_context) {
						while (1) switch (_context.prev = _context.next) {
							case 0:
								type = _ref.type;
								$e.internal("panel/state-loading");
								_context.prev = 1;
								_context.next = 2;
								return deleteElementDefaults(type);
							case 2:
								elementor.notifications.showToast({ message: (0, _wordpress_i18n.__)("Default settings has been reset.", "elementor") });
								_context.next = 4;
								break;
							case 3:
								_context.prev = 3;
								_t = _context["catch"](1);
								elementor.notifications.showToast({ message: (0, _wordpress_i18n.__)("An error occurred.", "elementor") });
								throw _t;
							case 4:
								_context.prev = 4;
								$e.internal("panel/state-ready");
								return _context.finish(4);
							case 5:
							case "end": return _context.stop();
						}
					}, _callee, null, [[
						1,
						3,
						4,
						5
					]]);
				}));
				function apply(_x) {
					return _apply.apply(this, arguments);
				}
				return apply;
			}()
		}]);
	}($e.modules.CommandBase);

//#endregion
//#region modules/kit-elements-defaults/assets/js/editor/commands/restore.js
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
	var Restore = /*#__PURE__*/ function(_$e$modules$CommandBa) {
		function Restore() {
			_classCallCheck(this, Restore);
			return _callSuper$2(this, Restore, arguments);
		}
		_inherits(Restore, _$e$modules$CommandBa);
		return _createClass(Restore, [{
			key: "apply",
			value: function() {
				var _apply = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee(_ref) {
					var type;
					var settings;
					var _t;
					return import_regenerator.default.wrap(function(_context) {
						while (1) switch (_context.prev = _context.next) {
							case 0:
								type = _ref.type, settings = _ref.settings;
								$e.internal("panel/state-loading");
								_context.prev = 1;
								_context.next = 2;
								return updateElementDefaults(type, settings);
							case 2:
								elementor.notifications.showToast({ message: (0, _wordpress_i18n.__)("Previous settings restored.", "elementor") });
								_context.next = 4;
								break;
							case 3:
								_context.prev = 3;
								_t = _context["catch"](1);
								elementor.notifications.showToast({ message: (0, _wordpress_i18n.__)("An error occurred.", "elementor") });
								throw _t;
							case 4:
								_context.prev = 4;
								$e.internal("panel/state-ready");
								return _context.finish(4);
							case 5:
							case "end": return _context.stop();
						}
					}, _callee, null, [[
						1,
						3,
						4,
						5
					]]);
				}));
				function apply(_x) {
					return _apply.apply(this, arguments);
				}
				return apply;
			}()
		}]);
	}($e.modules.CommandBase);

//#endregion
//#region modules/kit-elements-defaults/assets/js/editor/commands/index.js
	var commands_exports = /* @__PURE__ */ __exportAll({
		ConfirmCreation: () => ConfirmCreation,
		Create: () => Create,
		Delete: () => Delete,
		Restore: () => Restore
	});

//#endregion
//#region modules/kit-elements-defaults/assets/js/editor/component.js
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
	var Component = /*#__PURE__*/ function(_$e$modules$Component) {
		function Component() {
			_classCallCheck(this, Component);
			return _callSuper$1(this, Component, arguments);
		}
		_inherits(Component, _$e$modules$Component);
		return _createClass(Component, [
			{
				key: "getNamespace",
				value: function getNamespace() {
					return "kit-elements-defaults";
				}
			},
			{
				key: "defaultHooks",
				value: function defaultHooks() {
					return this.importHooks(hooks_exports);
				}
			},
			{
				key: "defaultData",
				value: function defaultData() {
					return this.importCommands(data_commands_exports);
				}
			},
			{
				key: "defaultCommands",
				value: function defaultCommands() {
					return this.importCommands(commands_exports);
				}
			}
		]);
	}($e.modules.ComponentBase);

//#endregion
//#region modules/kit-elements-defaults/assets/js/editor/module.js
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
	function _classPrivateMethodInitSpec(e, a) {
		_checkPrivateRedeclaration(e, a), a.add(e);
	}
	function _checkPrivateRedeclaration(e, t) {
		if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
	}
	function _assertClassBrand(e, t, n) {
		if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
		throw new TypeError("Private element is not present on this object");
	}
	var _Module_brand = /*#__PURE__*/ new WeakSet();
	var Module = /*#__PURE__*/ function(_elementorModules$edi) {
		function Module() {
			var _this;
			_classCallCheck(this, Module);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _callSuper(this, Module, [].concat(args));
			_classPrivateMethodInitSpec(_this, _Module_brand);
			return _this;
		}
		_inherits(Module, _elementorModules$edi);
		return _createClass(Module, [{
			key: "onElementorInit",
			value: function onElementorInit() {
				loadElementsDefaults();
				_assertClassBrand(_Module_brand, this, _addContextMenuItem).call(this);
			}
		}, {
			key: "onElementorInitComponents",
			value: function onElementorInitComponents() {
				window.$e.components.register(new Component());
			}
		}]);
	}(elementorModules.editor.utils.Module);
	function _addContextMenuItem() {
		var _elementor$config;
		if (!((_elementor$config = elementor.config) !== null && _elementor$config !== void 0 && (_elementor$config = _elementor$config.user) !== null && _elementor$config !== void 0 && _elementor$config.is_administrator)) return;
		[
			"widget",
			"container",
			"section"
		].forEach(function(elType) {
			elementor.hooks.addFilter("elements/".concat(elType, "/contextMenuGroups"), function(groups, view) {
				var _view$options;
				if ("section" === extractElementType(((_view$options = view.options) === null || _view$options === void 0 ? void 0 : _view$options.model) || {})) return groups;
				return groups.map(function(group) {
					if (group.name !== "save") return group;
					group.actions = [].concat(_toConsumableArray(group.actions), [{
						name: "save-as-default",
						title: (0, _wordpress_i18n.__)("Save as default", "elementor"),
						isEnabled: function isEnabled() {
							return !view.getContainer().isLocked();
						},
						callback: function callback() {
							$e.run("kit-elements-defaults/confirm-creation", { container: view.getContainer() });
						}
					}]);
					return group;
				});
			});
		});
	}

//#endregion
//#region modules/kit-elements-defaults/assets/js/editor/index.js
	new Module();

//#endregion
})(wp.i18n);
//# sourceMappingURL=kit-elements-defaults-editor.js.map