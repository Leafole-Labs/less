(function(react, _wordpress_dom_ready, _elementor_ui, _wordpress_i18n, _elementor_icons, _wordpress_components) {

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
react = __toESM(react);
_wordpress_dom_ready = __toESM(_wordpress_dom_ready);

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
//#region node_modules/@wordpress/element/build-module/react-platform.js
/**
	* External dependencies
	*/
	var import_client = require_client();

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
//#region node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
var import_regenerator = /* @__PURE__ */ __toESM(require_regenerator());
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
//#region modules/element-manager/assets/js/api.js
	var saveDisabledWidgets = /*#__PURE__*/ function() {
		var _ref = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee(widgetsDisabled) {
			var elementsRestriction;
			var bodyData;
			var _args = arguments;
			var _t;
			return import_regenerator.default.wrap(function(_context) {
				while (1) switch (_context.prev = _context.next) {
					case 0:
						elementsRestriction = _args.length > 1 && _args[1] !== void 0 ? _args[1] : {};
						_context.prev = 1;
						bodyData = {
							action: "elementor_element_manager_save_disabled_elements",
							nonce: eElementManagerConfig.nonce,
							widgets: JSON.stringify(widgetsDisabled)
						};
						if (null !== elementsRestriction) bodyData.elements_restriction = JSON.stringify(elementsRestriction);
						_context.next = 2;
						return fetch(eElementManagerConfig.ajaxurl, {
							method: "POST",
							headers: { "Content-Type": "application/x-www-form-urlencoded" },
							body: new URLSearchParams(bodyData)
						});
					case 2:
						_context.next = 4;
						break;
					case 3:
						_context.prev = 3;
						_t = _context["catch"](1);
						console.error(_t);
					case 4:
					case "end": return _context.stop();
				}
			}, _callee, null, [[1, 3]]);
		}));
		return function saveDisabledWidgets(_x) {
			return _ref.apply(this, arguments);
		};
	}();
	var getAdminAppData = /*#__PURE__*/ function() {
		var _ref2 = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee2() {
			var response;
			var data;
			var _t2;
			return import_regenerator.default.wrap(function(_context2) {
				while (1) switch (_context2.prev = _context2.next) {
					case 0:
						_context2.prev = 0;
						_context2.next = 1;
						return fetch(eElementManagerConfig.ajaxurl, {
							method: "POST",
							headers: { "Content-Type": "application/x-www-form-urlencoded" },
							body: new URLSearchParams({
								action: "elementor_element_manager_get_admin_app_data",
								nonce: eElementManagerConfig.nonce
							})
						});
					case 1:
						response = _context2.sent;
						_context2.next = 2;
						return response.json();
					case 2:
						data = _context2.sent;
						if (!data.success) {
							_context2.next = 3;
							break;
						}
						return _context2.abrupt("return", data.data);
					case 3:
						_context2.next = 5;
						break;
					case 4:
						_context2.prev = 4;
						_t2 = _context2["catch"](0);
						console.error(_t2);
					case 5:
					case "end": return _context2.stop();
				}
			}, _callee2, null, [[0, 4]]);
		}));
		return function getAdminAppData() {
			return _ref2.apply(this, arguments);
		};
	}();
	var getUsageWidgets = /*#__PURE__*/ function() {
		var _ref3 = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee3() {
			var response;
			var data;
			var _t3;
			return import_regenerator.default.wrap(function(_context3) {
				while (1) switch (_context3.prev = _context3.next) {
					case 0:
						_context3.prev = 0;
						_context3.next = 1;
						return fetch(eElementManagerConfig.ajaxurl, {
							method: "POST",
							headers: { "Content-Type": "application/x-www-form-urlencoded" },
							body: new URLSearchParams({
								action: "elementor_element_manager_get_widgets_usage",
								nonce: eElementManagerConfig.nonce
							})
						});
					case 1:
						response = _context3.sent;
						_context3.next = 2;
						return response.json();
					case 2:
						data = _context3.sent;
						if (!data.success) {
							_context3.next = 3;
							break;
						}
						return _context3.abrupt("return", data.data);
					case 3:
						_context3.next = 5;
						break;
					case 4:
						_context3.prev = 4;
						_t3 = _context3["catch"](0);
						console.error(_t3);
					case 5:
					case "end": return _context3.stop();
				}
			}, _callee3, null, [[0, 4]]);
		}));
		return function getUsageWidgets() {
			return _ref3.apply(this, arguments);
		};
	}();
	var markNoticeViewed = /*#__PURE__*/ function() {
		var _ref4 = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee4(noticeId, nonce) {
			var _t4;
			return import_regenerator.default.wrap(function(_context4) {
				while (1) switch (_context4.prev = _context4.next) {
					case 0:
						_context4.prev = 0;
						_context4.next = 1;
						return fetch(eElementManagerConfig.ajaxurl, {
							method: "POST",
							headers: { "Content-Type": "application/x-www-form-urlencoded" },
							body: new URLSearchParams({
								action: "elementor_set_admin_notice_viewed",
								notice_id: noticeId,
								_wpnonce: nonce
							})
						});
					case 1:
						_context4.next = 3;
						break;
					case 2:
						_context4.prev = 2;
						_t4 = _context4["catch"](0);
						console.error(_t4);
					case 3:
					case "end": return _context4.stop();
				}
			}, _callee4, null, [[0, 2]]);
		}));
		return function markNoticeViewed(_x2, _x3) {
			return _ref4.apply(this, arguments);
		};
	}();

//#endregion
//#region modules/element-manager/assets/js/app-editor-one/hooks/useElementManager.js
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
	var useElementManager = function useElementManager() {
		var isInitialMount = (0, react.useRef)(true);
		var _useState2 = _slicedToArray((0, react.useState)(true), 2);
		var isLoading = _useState2[0];
		var setIsLoading = _useState2[1];
		var _useState4 = _slicedToArray((0, react.useState)([]), 2);
		var widgets = _useState4[0];
		var setWidgets = _useState4[1];
		var _useState6 = _slicedToArray((0, react.useState)([]), 2);
		var promotionWidgets = _useState6[0];
		var setPromotionWidgets = _useState6[1];
		var _useState8 = _slicedToArray((0, react.useState)([]), 2);
		var plugins = _useState8[0];
		var setPlugins = _useState8[1];
		var _useState0 = _slicedToArray((0, react.useState)([]), 2);
		var roles = _useState0[0];
		var setRoles = _useState0[1];
		var _useState10 = _slicedToArray((0, react.useState)([]), 2);
		var widgetsDisabled = _useState10[0];
		var setWidgetsDisabled = _useState10[1];
		var _useState12 = _slicedToArray((0, react.useState)(null), 2);
		var widgetsRoleRestrictions = _useState12[0];
		var setWidgetsRoleRestrictions = _useState12[1];
		var _useState14 = _slicedToArray((0, react.useState)([]), 2);
		var promotionData = _useState14[0];
		var setPromotionData = _useState14[1];
		var _useState16 = _slicedToArray((0, react.useState)(null), 2);
		var noticeData = _useState16[0];
		var setNoticeData = _useState16[1];
		var _useState18 = _slicedToArray((0, react.useState)({
			isLoading: false,
			data: null
		}), 2);
		var usageWidgets = _useState18[0];
		var setUsageWidgets = _useState18[1];
		var _useState20 = _slicedToArray((0, react.useState)({
			isSaving: false,
			isUnsavedChanges: false
		}), 2);
		var changeProgress = _useState20[0];
		var setChangeProgress = _useState20[1];
		var _useState22 = _slicedToArray((0, react.useState)(false), 2);
		var isSnackbarOpen = _useState22[0];
		var setIsSnackbarOpen = _useState22[1];
		var getWidgetUsage = (0, react.useCallback)(function(widgetName) {
			if (!usageWidgets.data || !usageWidgets.data.hasOwnProperty(widgetName)) return 0;
			return usageWidgets.data[widgetName];
		}, [usageWidgets.data]);
		var scanUsageElements = (0, react.useCallback)(/*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
			var data;
			return import_regenerator.default.wrap(function(_context) {
				while (1) switch (_context.prev = _context.next) {
					case 0:
						setUsageWidgets(function(prev) {
							return _objectSpread$1(_objectSpread$1({}, prev), {}, { isLoading: true });
						});
						_context.next = 1;
						return getUsageWidgets();
					case 1:
						data = _context.sent;
						setUsageWidgets({
							data,
							isLoading: false
						});
						return _context.abrupt("return", data);
					case 2:
					case "end": return _context.stop();
				}
			}, _callee);
		})), []);
		var saveChanges = (0, react.useCallback)(/*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee2() {
			return import_regenerator.default.wrap(function(_context2) {
				while (1) switch (_context2.prev = _context2.next) {
					case 0:
						setChangeProgress(function(prev) {
							return _objectSpread$1(_objectSpread$1({}, prev), {}, { isSaving: true });
						});
						_context2.next = 1;
						return saveDisabledWidgets(widgetsDisabled, widgetsRoleRestrictions);
					case 1:
						setChangeProgress({
							isSaving: false,
							isUnsavedChanges: false
						});
						setIsSnackbarOpen(true);
					case 2:
					case "end": return _context2.stop();
				}
			}, _callee2);
		})), [widgetsDisabled, widgetsRoleRestrictions]);
		var deactivateAllUnusedWidgets = (0, react.useCallback)(function() {
			if (!usageWidgets.data) return;
			setWidgetsDisabled(widgets.filter(function(widget) {
				return !usageWidgets.data.hasOwnProperty(widget.name) || widgetsDisabled.includes(widget.name);
			}).map(function(widget) {
				return widget.name;
			}));
		}, [
			widgets,
			usageWidgets.data,
			widgetsDisabled
		]);
		var enableAllWidgets = (0, react.useCallback)(function() {
			setWidgetsDisabled([]);
		}, []);
		var toggleWidget = (0, react.useCallback)(function(widgetName, isEnabled) {
			if (isEnabled) setWidgetsDisabled(function(prev) {
				return prev.filter(function(item) {
					return item !== widgetName;
				});
			});
			else setWidgetsDisabled(function(prev) {
				return [].concat(_toConsumableArray(prev), [widgetName]);
			});
		}, []);
		var dismissNotice = (0, react.useCallback)(function() {
			if (noticeData) {
				markNoticeViewed(noticeData.notice_id, noticeData.nonce);
				setNoticeData(function(prev) {
					return _objectSpread$1(_objectSpread$1({}, prev), {}, { is_viewed: true });
				});
			}
		}, [noticeData]);
		(0, react.useEffect)(function() {
			(/* @__PURE__ */ (function() {
				var _ref3 = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee3() {
					var _appData$additional_d;
					var _appData$additional_d2;
					var appData;
					var pluginsData;
					return import_regenerator.default.wrap(function(_context3) {
						while (1) switch (_context3.prev = _context3.next) {
							case 0:
								_context3.next = 1;
								return getAdminAppData();
							case 1:
								appData = _context3.sent;
								setNoticeData(appData.notice_data);
								setWidgetsDisabled(appData.disabled_elements);
								setWidgets(appData.widgets);
								setPromotionWidgets(appData.promotion_widgets);
								setPromotionData(appData.promotion_data);
								if ((_appData$additional_d = appData.additional_data) !== null && _appData$additional_d !== void 0 && _appData$additional_d.roles) setRoles(appData.additional_data.roles);
								if ((_appData$additional_d2 = appData.additional_data) !== null && _appData$additional_d2 !== void 0 && _appData$additional_d2.role_restrictions) setWidgetsRoleRestrictions(appData.additional_data.role_restrictions);
								pluginsData = appData.plugins.map(function(plugin) {
									return {
										label: plugin,
										value: plugin
									};
								});
								pluginsData.unshift({
									label: "All Plugins",
									value: ""
								});
								setPlugins(pluginsData);
								setIsLoading(false);
								setChangeProgress(function(prev) {
									return _objectSpread$1(_objectSpread$1({}, prev), {}, { isUnsavedChanges: false });
								});
							case 2:
							case "end": return _context3.stop();
						}
					}, _callee3);
				}));
				return function loadData() {
					return _ref3.apply(this, arguments);
				};
			})())();
		}, []);
		(0, react.useEffect)(function() {
			if (isLoading) return;
			if (isInitialMount.current) {
				isInitialMount.current = false;
				return;
			}
			setChangeProgress(function(prev) {
				return _objectSpread$1(_objectSpread$1({}, prev), {}, { isUnsavedChanges: true });
			});
		}, [
			widgetsDisabled,
			widgetsRoleRestrictions,
			isLoading
		]);
		(0, react.useEffect)(function() {
			var handleBeforeUnload = function handleBeforeUnload(event) {
				event.preventDefault();
				event.returnValue = "";
			};
			if (changeProgress.isUnsavedChanges) window.addEventListener("beforeunload", handleBeforeUnload);
			else window.removeEventListener("beforeunload", handleBeforeUnload);
			return function() {
				window.removeEventListener("beforeunload", handleBeforeUnload);
			};
		}, [changeProgress.isUnsavedChanges]);
		return {
			isLoading,
			widgets,
			promotionWidgets,
			plugins,
			roles,
			widgetsDisabled,
			widgetsRoleRestrictions,
			setWidgetsRoleRestrictions,
			promotionData,
			noticeData,
			usageWidgets,
			changeProgress,
			isSnackbarOpen,
			setIsSnackbarOpen,
			getWidgetUsage,
			scanUsageElements,
			saveChanges,
			deactivateAllUnusedWidgets,
			enableAllWidgets,
			toggleWidget,
			dismissNotice
		};
	};

//#endregion
//#region modules/element-manager/assets/js/app-editor-one/hooks/useWidgetFilters.js
	var useWidgetFilters = function useWidgetFilters(widgets, widgetsDisabled, getWidgetUsage) {
		var _useState2 = _slicedToArray((0, react.useState)(""), 2);
		var searchKeyword = _useState2[0];
		var setSearchKeyword = _useState2[1];
		var _useState4 = _slicedToArray((0, react.useState)("widget"), 2);
		var sortingColumn = _useState4[0];
		var setSortingColumn = _useState4[1];
		var _useState6 = _slicedToArray((0, react.useState)("asc"), 2);
		var sortingDirection = _useState6[0];
		var setSortingDirection = _useState6[1];
		var _useState8 = _slicedToArray((0, react.useState)(""), 2);
		var filterByPlugin = _useState8[0];
		var setFilterByPlugin = _useState8[1];
		var _useState0 = _slicedToArray((0, react.useState)("all"), 2);
		var filterByStatus = _useState0[0];
		return {
			searchKeyword,
			setSearchKeyword,
			filterByPlugin,
			setFilterByPlugin,
			filterByStatus,
			setFilterByStatus: _useState0[1],
			sortedAndFilteredWidgets: (0, react.useMemo)(function() {
				var filteredWidgets = widgets.filter(function(widget) {
					return widget.title.toLowerCase().includes(searchKeyword.toLowerCase());
				});
				if ("" !== filterByPlugin) filteredWidgets = filteredWidgets.filter(function(widget) {
					return widget.plugin.toLowerCase() === filterByPlugin.toLowerCase();
				});
				if ("all" !== filterByStatus) filteredWidgets = filteredWidgets.filter(function(widget) {
					if ("active" === filterByStatus) return !widgetsDisabled.includes(widget.name);
					return widgetsDisabled.includes(widget.name);
				});
				filteredWidgets.sort(function(a, b) {
					var aValue;
					var bValue;
					if ("widget" === sortingColumn) {
						aValue = a.title;
						bValue = b.title;
					}
					if ("usage" === sortingColumn) {
						aValue = getWidgetUsage(a.name);
						bValue = getWidgetUsage(b.name);
					}
					if (aValue === bValue) return 0;
					if ("asc" === sortingDirection) return aValue < bValue ? -1 : 1;
					return aValue > bValue ? -1 : 1;
				});
				return filteredWidgets;
			}, [
				widgets,
				searchKeyword,
				sortingColumn,
				sortingDirection,
				filterByPlugin,
				filterByStatus,
				widgetsDisabled,
				getWidgetUsage
			]),
			getSortingIndicatorClasses: (0, react.useCallback)(function(column) {
				if (sortingColumn !== column) return "";
				return "asc" === sortingDirection ? "sorted asc" : "sorted desc";
			}, [sortingColumn, sortingDirection]),
			onSortingClicked: (0, react.useCallback)(function(column) {
				if (sortingColumn === column) setSortingDirection(function(prev) {
					return "asc" === prev ? "desc" : "asc";
				});
				else {
					setSortingColumn(column);
					setSortingDirection("asc");
				}
			}, [sortingColumn]),
			setSortByUsage: (0, react.useCallback)(function() {
				setSortingColumn("usage");
				setSortingDirection("desc");
			}, [])
		};
	};

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
//#region modules/element-manager/assets/js/app-editor-one/components/UsageTimesColumn.js
	var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
	var UsageTimesColumn = function UsageTimesColumn(_ref) {
		var widgetName = _ref.widgetName;
		var usageData = _ref.usageData;
		var isLoading = _ref.isLoading;
		var getWidgetUsage = _ref.getWidgetUsage;
		var onScanClick = _ref.onScanClick;
		if (null !== usageData) return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, getWidgetUsage(widgetName), " ", (0, _wordpress_i18n.__)("times", "elementor"));
		if (isLoading) return /*#__PURE__*/ react.default.createElement(_elementor_ui.CircularProgress, {
			color: "secondary",
			size: 20
		});
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
			onClick: onScanClick,
			size: "small",
			variant: "outlined",
			color: "secondary",
			className: "e-id-elementor-element-manager-button-show-usage",
			sx: {
				minWidth: function minWidth(theme) {
					return theme.spacing(6);
				},
				height: 26
			}
		}, (0, _wordpress_i18n.__)("Show", "elementor"));
	};
	UsageTimesColumn.propTypes = {
		widgetName: import_prop_types.default.string.isRequired,
		usageData: import_prop_types.default.object,
		isLoading: import_prop_types.default.bool,
		getWidgetUsage: import_prop_types.default.func.isRequired,
		onScanClick: import_prop_types.default.func.isRequired
	};

//#endregion
//#region modules/element-manager/assets/js/app-editor-one/components/NoticeAlert.js
	var NoticeAlert = function NoticeAlert(_ref) {
		var onDismiss = _ref.onDismiss;
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: { mb: 2 } }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Alert, {
			severity: "warning",
			onClose: onDismiss
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			component: "strong",
			variant: "body2",
			sx: { fontWeight: 700 }
		}, (0, _wordpress_i18n.__)("Before you continue:", "elementor")), " ", (0, _wordpress_i18n.__)("Deactivating widgets here will remove them from both the Elementor Editor and your website, which can cause changes to your overall layout, design and what visitors see.", "elementor")));
	};
	NoticeAlert.propTypes = { onDismiss: import_prop_types.default.func.isRequired };

//#endregion
//#region modules/element-manager/assets/js/app-editor-one/components/ConfirmDialog.js
	var ConfirmDialog = function ConfirmDialog(_ref) {
		var isOpen = _ref.isOpen;
		var onClose = _ref.onClose;
		var onConfirm = _ref.onConfirm;
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Dialog, {
			open: isOpen,
			onClose,
			maxWidth: "sm"
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.DialogTitle, null, (0, _wordpress_i18n.__)("Sure you want to save these changes?", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.DialogContent, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.DialogContentText, null, (0, _wordpress_i18n.__)("Turning widgets off will hide them from the editor panel, and can potentially affect your layout or front-end.", "elementor"), /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
			component: "span",
			sx: {
				display: "block",
				mt: 2.5
			}
		}, (0, _wordpress_i18n.__)("If you're adding widgets back in, enjoy them!", "elementor")))), /*#__PURE__*/ react.default.createElement(_elementor_ui.DialogActions, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
			direction: "row",
			gap: 2,
			justifyContent: "flex-end"
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
			variant: "outlined",
			color: "secondary",
			onClick: onClose,
			className: "e-id-elementor-element-manager-modal-button-cancel"
		}, (0, _wordpress_i18n.__)("Cancel", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
			variant: "contained",
			onClick: onConfirm,
			className: "e-id-elementor-element-manager-modal-button-save"
		}, (0, _wordpress_i18n.__)("Save", "elementor")))));
	};
	ConfirmDialog.propTypes = {
		isOpen: import_prop_types.default.bool.isRequired,
		onClose: import_prop_types.default.func.isRequired,
		onConfirm: import_prop_types.default.func.isRequired
	};

//#endregion
//#region modules/element-manager/assets/js/app-editor-one/components/SearchFilters.js
	var FIELD_HEIGHT = 28;
	var FONT_SIZE = 12;
	var ICON_SIZE = 16;
	var StyledTextField = (0, _elementor_ui.styled)(_elementor_ui.TextField)({ "& .MuiInputBase-root": {
		height: FIELD_HEIGHT,
		fontSize: FONT_SIZE
	} });
	var StyledFormControl = (0, _elementor_ui.styled)(_elementor_ui.FormControl)({
		"& .MuiInputBase-root": {
			height: FIELD_HEIGHT,
			fontSize: FONT_SIZE
		},
		"& .MuiSelect-icon": {
			width: ICON_SIZE,
			height: ICON_SIZE,
			top: "calc(50% - 8px)"
		}
	});
	var StyledButton = (0, _elementor_ui.styled)(_elementor_ui.Button)({
		height: FIELD_HEIGHT,
		fontSize: FONT_SIZE,
		minWidth: "auto",
		whiteSpace: "nowrap"
	});
	var SearchFilters = function SearchFilters(_ref) {
		var searchKeyword = _ref.searchKeyword;
		var onSearchChange = _ref.onSearchChange;
		var filterByPlugin = _ref.filterByPlugin;
		var onPluginFilterChange = _ref.onPluginFilterChange;
		var filterByStatus = _ref.filterByStatus;
		var onStatusFilterChange = _ref.onStatusFilterChange;
		var plugins = _ref.plugins;
		var usageIsLoading = _ref.usageIsLoading;
		var usageData = _ref.usageData;
		var widgetsDisabledCount = _ref.widgetsDisabledCount;
		var onScanUsage = _ref.onScanUsage;
		var onDeactivateUnused = _ref.onDeactivateUnused;
		var onEnableAll = _ref.onEnableAll;
		var onSaveChanges = _ref.onSaveChanges;
		var isSaving = _ref.isSaving;
		var hasUnsavedChanges = _ref.hasUnsavedChanges;
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
			direction: {
				xs: "column",
				sm: "row"
			},
			alignItems: {
				xs: "stretch",
				sm: "flex-start"
			},
			gap: 1.5,
			sx: function sx(theme) {
				return {
					position: "sticky",
					top: 0,
					"@media screen and (max-width: 782px)": { top: "calc(var(--e-admin-bar-height, 0px) + var(--e-top-bar-header-height, 0px))" },
					backgroundColor: "var(--e-one-palette-background-default)",
					zIndex: 10,
					paddingBlock: 2,
					paddingInline: 2,
					boxShadow: "rgba(0, 0, 0, 0.15) 0 5px 10px 0",
					marginBottom: theme.spacing(1)
				};
			}
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
			direction: "row",
			alignItems: "center",
			flexWrap: "wrap",
			gap: 1.5,
			sx: { flex: 1 }
		}, /*#__PURE__*/ react.default.createElement(StyledTextField, {
			color: "secondary",
			value: searchKeyword,
			size: "small",
			placeholder: (0, _wordpress_i18n.__)("Search", "elementor"),
			onChange: function onChange(e) {
				return onSearchChange(e.target.value);
			},
			sx: function sx(theme) {
				return { minWidth: theme.spacing(14) };
			}
		}), /*#__PURE__*/ react.default.createElement(StyledFormControl, {
			size: "small",
			sx: function sx(theme) {
				return { width: theme.spacing(20) };
			},
			color: "secondary"
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Select, {
			placeholder: (0, _wordpress_i18n.__)("Plugin", "elementor"),
			value: filterByPlugin,
			onChange: function onChange(event) {
				return onPluginFilterChange(event.target.value);
			},
			"data-id": "elementor-element-manager-select-filter-by-plugin",
			displayEmpty: true,
			renderValue: function renderValue(value) {
				if ("" === value) return (0, _wordpress_i18n.__)("All Plugins", "elementor");
				var selectedPlugin = plugins.find(function(p) {
					return p.value === value;
				});
				return selectedPlugin ? selectedPlugin.label : value;
			}
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.MenuItem, { value: "" }, (0, _wordpress_i18n.__)("All Plugins", "elementor")), plugins.map(function(plugin) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.MenuItem, {
				key: plugin.value,
				value: plugin.value
			}, plugin.label);
		}))), /*#__PURE__*/ react.default.createElement(StyledFormControl, {
			size: "small",
			sx: function sx(theme) {
				return { width: theme.spacing(20) };
			},
			color: "secondary"
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Select, {
			value: filterByStatus,
			onChange: function onChange(event) {
				return onStatusFilterChange(event.target.value);
			},
			"data-id": "elementor-element-manager-select-filter-by-status",
			placeholder: (0, _wordpress_i18n.__)("Status", "elementor")
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.MenuItem, { value: "all" }, (0, _wordpress_i18n.__)("All Statuses", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.MenuItem, { value: "active" }, (0, _wordpress_i18n.__)("Active", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.MenuItem, { value: "inactive" }, (0, _wordpress_i18n.__)("Inactive", "elementor")))), /*#__PURE__*/ react.default.createElement(_elementor_ui.Divider, {
			orientation: "vertical",
			flexItem: true,
			sx: {
				height: FIELD_HEIGHT,
				marginBlock: 0,
				marginInline: .5,
				alignSelf: "center",
				display: {
					xs: "none",
					md: "block"
				}
			}
		}), /*#__PURE__*/ react.default.createElement(StyledButton, {
			variant: "outlined",
			color: "secondary",
			size: "small",
			disabled: usageIsLoading,
			onClick: onScanUsage,
			"data-id": "e-id-elementor-element-manager-button-scan-element-usage",
			loading: usageIsLoading
		}, (0, _wordpress_i18n.__)("Scan Element Usage", "elementor")), /*#__PURE__*/ react.default.createElement(StyledButton, {
			variant: "outlined",
			color: "secondary",
			size: "small",
			onClick: onDeactivateUnused,
			disabled: null === usageData,
			"data-id": "e-id-elementor-element-manager-button-deactivate-unused-elements"
		}, (0, _wordpress_i18n.__)("Deactivate Unused Elements", "elementor")), /*#__PURE__*/ react.default.createElement(StyledButton, {
			variant: "outlined",
			color: "secondary",
			size: "small",
			disabled: !widgetsDisabledCount,
			onClick: onEnableAll,
			"data-id": "e-id-elementor-element-manager-button-enable-all"
		}, (0, _wordpress_i18n.__)("Enable All", "elementor"))), /*#__PURE__*/ react.default.createElement(StyledButton, {
			variant: "contained",
			size: "small",
			disabled: isSaving || !hasUnsavedChanges,
			onClick: onSaveChanges,
			"data-id": "e-id-elementor-element-manager-button-save-changes",
			loading: isSaving,
			sx: { alignSelf: "flex-start" }
		}, (0, _wordpress_i18n.__)("Save Changes", "elementor")));
	};
	SearchFilters.propTypes = {
		searchKeyword: import_prop_types.default.string.isRequired,
		onSearchChange: import_prop_types.default.func.isRequired,
		filterByPlugin: import_prop_types.default.string.isRequired,
		onPluginFilterChange: import_prop_types.default.func.isRequired,
		filterByStatus: import_prop_types.default.string.isRequired,
		onStatusFilterChange: import_prop_types.default.func.isRequired,
		plugins: import_prop_types.default.arrayOf(import_prop_types.default.shape({
			label: import_prop_types.default.string.isRequired,
			value: import_prop_types.default.string.isRequired
		})).isRequired,
		usageIsLoading: import_prop_types.default.bool,
		usageData: import_prop_types.default.object,
		widgetsDisabledCount: import_prop_types.default.number.isRequired,
		onScanUsage: import_prop_types.default.func.isRequired,
		onDeactivateUnused: import_prop_types.default.func.isRequired,
		onEnableAll: import_prop_types.default.func.isRequired,
		onSaveChanges: import_prop_types.default.func.isRequired,
		isSaving: import_prop_types.default.bool,
		hasUnsavedChanges: import_prop_types.default.bool
	};

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

//#endregion
//#region modules/element-manager/assets/js/upgrade-button.js
	var UpgradeButton = function UpgradeButton(props) {
		var trackingClass = props.className || "e-id-elementor-element-manager-button-upgrade";
		return /*#__PURE__*/ react.default.createElement(_wordpress_components.Button, _extends({}, props, {
			variant: "primary",
			target: "_blank",
			rel: "noreferrer",
			style: { background: "var(--e-a-btn-bg-accent, #93003f)" },
			className: trackingClass
		}));
	};
	UpgradeButton.propTypes = { className: import_prop_types.default.string };

//#endregion
//#region modules/element-manager/assets/js/app-editor-one/components/RolePermissions.js
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
	var toggleRoleRestrictions = function toggleRoleRestrictions(widgetName, roleId, widgetsRoleRestrictions, setWidgetsRoleRestrictions) {
		var widgetRoleRestrictions = _toConsumableArray(widgetsRoleRestrictions[widgetName] || []);
		if (widgetRoleRestrictions.includes(roleId)) widgetRoleRestrictions.splice(widgetRoleRestrictions.indexOf(roleId), 1);
		else widgetRoleRestrictions.push(roleId);
		setWidgetsRoleRestrictions(_objectSpread(_objectSpread({}, widgetsRoleRestrictions), {}, _defineProperty({}, widgetName, widgetRoleRestrictions)));
	};
	var RolesList = function RolesList(_ref) {
		var roles = _ref.roles;
		var widgetRoleRestrictions = _ref.widgetRoleRestrictions;
		var rolesEnabled = roles.filter(function(role) {
			return !widgetRoleRestrictions.includes(role.id);
		});
		if (!rolesEnabled.length) return /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			component: "span",
			variant: "body2",
			color: "text.primary"
		}, "(", (0, _wordpress_i18n.__)("Admin", "elementor"), ")");
		if (rolesEnabled.length === roles.length) return /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			component: "span",
			variant: "body2",
			color: "text.primary"
		}, "(", (0, _wordpress_i18n.__)("All Roles", "elementor"), ")");
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			component: "span",
			variant: "body2",
			color: "text.primary"
		}, "(", rolesEnabled.map(function(role) {
			return role.name;
		}).join(", "), ")");
	};
	RolesList.propTypes = {
		roles: import_prop_types.default.arrayOf(import_prop_types.default.shape({
			id: import_prop_types.default.string.isRequired,
			name: import_prop_types.default.string.isRequired
		})).isRequired,
		widgetRoleRestrictions: import_prop_types.default.arrayOf(import_prop_types.default.string).isRequired
	};
	var RolePermissions = function RolePermissions(_ref2) {
		var roles = _ref2.roles;
		var widgetName = _ref2.widgetName;
		var widgetsRoleRestrictions = _ref2.widgetsRoleRestrictions;
		var setWidgetsRoleRestrictions = _ref2.setWidgetsRoleRestrictions;
		var _useState2 = _slicedToArray((0, react.useState)(null), 2);
		var anchorEl = _useState2[0];
		var setAnchorEl = _useState2[1];
		var isOpen = Boolean(anchorEl);
		var widgetRoleRestrictions = widgetsRoleRestrictions[widgetName] || [];
		var handleClick = (0, react.useCallback)(function(event) {
			setAnchorEl(event.currentTarget);
		}, []);
		var handleClose = (0, react.useCallback)(function() {
			setAnchorEl(null);
		}, []);
		var isAllChecked = roles.every(function(role) {
			return !widgetRoleRestrictions.includes(role.id);
		});
		var isIndeterminate = !isAllChecked && roles.some(function(role) {
			return !widgetRoleRestrictions.includes(role.id);
		});
		var handleAllChange = (0, react.useCallback)(function(event) {
			if (event.target.checked) setWidgetsRoleRestrictions(_objectSpread(_objectSpread({}, widgetsRoleRestrictions), {}, _defineProperty({}, widgetName, [])));
			else setWidgetsRoleRestrictions(_objectSpread(_objectSpread({}, widgetsRoleRestrictions), {}, _defineProperty({}, widgetName, roles.map(function(role) {
				return role.id;
			}))));
		}, [
			widgetName,
			widgetsRoleRestrictions,
			setWidgetsRoleRestrictions,
			roles
		]);
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
			display: "inline-flex",
			alignItems: "center",
			gap: .5
		} }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
			variant: "text",
			color: "secondary",
			size: "small",
			onClick: handleClick,
			"aria-expanded": isOpen,
			"aria-haspopup": "true",
			className: "e-id-elementor-element-manager-button-edit-permissions-".concat(widgetName)
		}, (0, _wordpress_i18n.__)("Edit", "elementor")), /*#__PURE__*/ react.default.createElement(RolesList, {
			roles,
			widgetRoleRestrictions
		}), /*#__PURE__*/ react.default.createElement(_elementor_ui.Menu, {
			anchorEl,
			open: isOpen,
			onClose: handleClose,
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "left"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "left"
			}
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.MenuItem, { sx: { py: .5 } }, /*#__PURE__*/ react.default.createElement(_elementor_ui.FormControlLabel, {
			control: /*#__PURE__*/ react.default.createElement(_elementor_ui.Checkbox, {
				checked: isAllChecked,
				indeterminate: isIndeterminate,
				onChange: handleAllChange,
				size: "small",
				color: "secondary"
			}),
			label: (0, _wordpress_i18n.__)("All", "elementor")
		})), roles.map(function(role) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.MenuItem, {
				key: role.id,
				sx: { py: .5 }
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.FormControlLabel, {
				control: /*#__PURE__*/ react.default.createElement(_elementor_ui.Checkbox, {
					color: "secondary",
					checked: !widgetRoleRestrictions.includes(role.id),
					onChange: function onChange() {
						toggleRoleRestrictions(widgetName, role.id, widgetsRoleRestrictions, setWidgetsRoleRestrictions);
					},
					size: "small"
				}),
				label: role.name
			}));
		})));
	};
	RolePermissions.propTypes = {
		roles: import_prop_types.default.arrayOf(import_prop_types.default.shape({
			id: import_prop_types.default.string.isRequired,
			name: import_prop_types.default.string.isRequired
		})).isRequired,
		widgetName: import_prop_types.default.string.isRequired,
		widgetsRoleRestrictions: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.array]).isRequired,
		setWidgetsRoleRestrictions: import_prop_types.default.func.isRequired
	};
	var EditButtonDisabled = function EditButtonDisabled(_ref3) {
		var _ref3$widgetName = _ref3.widgetName;
		var widgetName = _ref3$widgetName === void 0 ? "unknown" : _ref3$widgetName;
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
			variant: "text",
			color: "secondary",
			size: "small",
			disabled: true,
			className: "e-id-elementor-element-manager-button-edit-permissions-".concat(widgetName)
		}, (0, _wordpress_i18n.__)("Edit", "elementor"));
	};
	EditButtonDisabled.propTypes = { widgetName: import_prop_types.default.string };

//#endregion
//#region modules/element-manager/assets/js/app-editor-one/components/WidgetsTable.js
	var StyledSwitch = (0, _elementor_ui.styled)(_elementor_ui.Switch)({
		"& .MuiSwitch-track": { backgroundColor: "rgba(0, 0, 0, 0.12);" },
		"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": { backgroundColor: "#000" },
		"& .MuiSwitch-switchBase:not(.Mui-checked) .MuiSwitch-thumb": { backgroundColor: "#D5D8DC" },
		"& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb": { backgroundColor: "#fff" }
	});
	var WidgetsTable = function WidgetsTable(_ref) {
		var widgets = _ref.widgets;
		var widgetsDisabled = _ref.widgetsDisabled;
		var widgetsRoleRestrictions = _ref.widgetsRoleRestrictions;
		var setWidgetsRoleRestrictions = _ref.setWidgetsRoleRestrictions;
		var roles = _ref.roles;
		var promotionWidgets = _ref.promotionWidgets;
		var promotionData = _ref.promotionData;
		var usageWidgets = _ref.usageWidgets;
		var getWidgetUsage = _ref.getWidgetUsage;
		var onScanUsage = _ref.onScanUsage;
		var onToggleWidget = _ref.onToggleWidget;
		var getSortingIndicatorClasses = _ref.getSortingIndicatorClasses;
		var onSortingClicked = _ref.onSortingClicked;
		var managerPermissions = promotionData.manager_permissions;
		var sortingClasses = getSortingIndicatorClasses("widget");
		var isWidgetSorted = sortingClasses.includes("sorted");
		var widgetSortDirection = sortingClasses.includes("asc") ? "asc" : "desc";
		var usageSortingClasses = getSortingIndicatorClasses("usage");
		var isUsageSorted = usageSortingClasses.includes("sorted");
		var usageSortDirection = usageSortingClasses.includes("asc") ? "asc" : "desc";
		if (!widgets.length) return /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, { color: "text.secondary" }, (0, _wordpress_i18n.__)("No elements found.", "elementor"));
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.TableContainer, {
			component: _elementor_ui.Paper,
			variant: "outlined"
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Table, { size: "small" }, /*#__PURE__*/ react.default.createElement(_elementor_ui.TableHead, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.TableRow, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, { sx: function sx(theme) {
			return { width: theme.spacing(25) };
		} }, /*#__PURE__*/ react.default.createElement(_elementor_ui.TableSortLabel, {
			active: isWidgetSorted,
			direction: isWidgetSorted ? widgetSortDirection : "asc",
			onClick: function onClick() {
				return onSortingClicked("widget");
			},
			"data-id": "e-id-elementor-element-manager-button-sort-by-element"
		}, (0, _wordpress_i18n.__)("Element", "elementor"))), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, { sx: function sx(theme) {
			return { width: theme.spacing(10) };
		} }, (0, _wordpress_i18n.__)("Status", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.TableSortLabel, {
			active: isUsageSorted,
			direction: isUsageSorted ? usageSortDirection : "asc",
			onClick: function onClick() {
				return onSortingClicked("usage");
			},
			"data-id": "e-id-elementor-element-manager-button-sort-by-usage"
		}, (0, _wordpress_i18n.__)("Usage", "elementor"))), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, null, (0, _wordpress_i18n.__)("Plugin", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
			direction: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			gap: 1
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, (0, _wordpress_i18n.__)("Permission", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Tooltip, {
			placement: "top",
			title: (0, _wordpress_i18n.__)("Choose which users will have access to each widget.", "elementor")
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.IconButton, { size: "small" }, /*#__PURE__*/ react.default.createElement(_elementor_icons.HelpIcon, { fontSize: "small" })))), null === widgetsRoleRestrictions && /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: { marginInlineStart: 1 } }, /*#__PURE__*/ react.default.createElement(UpgradeButton, {
			href: promotionWidgets.length ? managerPermissions.pro.url : managerPermissions.advanced.url,
			size: "small",
			text: promotionWidgets.length ? managerPermissions.pro.text : managerPermissions.advanced.text,
			className: "go-pro",
			"data-id": "e-id-elementor-element-manager-button-upgrade-permissions"
		})))))), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableBody, null, widgets.map(function(widget) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.TableRow, {
				key: widget.name,
				"data-key-id": widget.name,
				hover: true
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
				display: "flex",
				alignItems: "center"
			} }, /*#__PURE__*/ react.default.createElement("i", {
				style: {
					marginInlineEnd: 8,
					marginInlineStart: 0,
					display: "inline-block"
				},
				className: widget.icon
			}), widget.title)), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, null, /*#__PURE__*/ react.default.createElement(StyledSwitch, {
				color: "secondary",
				checked: !widgetsDisabled.includes(widget.name),
				onChange: function onChange(event, checked) {
					return onToggleWidget(widget.name, checked);
				},
				size: "small",
				"data-id": "e-id-elementor-element-manager-toggle-".concat(widget.name)
			})), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, null, /*#__PURE__*/ react.default.createElement(UsageTimesColumn, {
				widgetName: widget.name,
				usageData: usageWidgets.data,
				isLoading: usageWidgets.isLoading,
				getWidgetUsage,
				onScanClick: onScanUsage
			})), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, null, widget.plugin), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, null, null !== widgetsRoleRestrictions && !widgetsDisabled.includes(widget.name) ? /*#__PURE__*/ react.default.createElement(RolePermissions, {
				widgetName: widget.name,
				roles,
				widgetsRoleRestrictions,
				setWidgetsRoleRestrictions
			}) : /*#__PURE__*/ react.default.createElement(EditButtonDisabled, null)));
		}))));
	};
	var widgetShape = import_prop_types.default.shape({
		name: import_prop_types.default.string.isRequired,
		title: import_prop_types.default.string.isRequired,
		icon: import_prop_types.default.string,
		plugin: import_prop_types.default.string
	});
	WidgetsTable.propTypes = {
		widgets: import_prop_types.default.arrayOf(widgetShape).isRequired,
		widgetsDisabled: import_prop_types.default.arrayOf(import_prop_types.default.string).isRequired,
		widgetsRoleRestrictions: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.array]),
		setWidgetsRoleRestrictions: import_prop_types.default.func.isRequired,
		roles: import_prop_types.default.array.isRequired,
		promotionWidgets: import_prop_types.default.arrayOf(widgetShape).isRequired,
		promotionData: import_prop_types.default.shape({ manager_permissions: import_prop_types.default.shape({
			pro: import_prop_types.default.shape({
				url: import_prop_types.default.string,
				text: import_prop_types.default.string
			}),
			advanced: import_prop_types.default.shape({
				url: import_prop_types.default.string,
				text: import_prop_types.default.string
			})
		}) }).isRequired,
		usageWidgets: import_prop_types.default.shape({
			isLoading: import_prop_types.default.bool,
			data: import_prop_types.default.object
		}).isRequired,
		getWidgetUsage: import_prop_types.default.func.isRequired,
		onScanUsage: import_prop_types.default.func.isRequired,
		onToggleWidget: import_prop_types.default.func.isRequired,
		getSortingIndicatorClasses: import_prop_types.default.func.isRequired,
		onSortingClicked: import_prop_types.default.func.isRequired
	};

//#endregion
//#region modules/element-manager/assets/js/app-editor-one/components/PromotionWidgetsTable.js
	var PromotionWidgetsTable = function PromotionWidgetsTable(_ref) {
		var widgets = _ref.widgets;
		var elementManager = _ref.promotionData.element_manager;
		if (!widgets.length) return null;
		return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
			mt: 5,
			mb: 2.5
		} }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
			direction: "row",
			justifyContent: "space-between",
			alignItems: "center"
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "h6",
			component: "h3"
		}, (0, _wordpress_i18n.__)("Elementor Pro Elements", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "body2",
			component: "p"
		}, (0, _wordpress_i18n.__)("Unleash the full power of Elementor's features and web creation tools.", "elementor"))), /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, /*#__PURE__*/ react.default.createElement(UpgradeButton, {
			href: elementManager.url,
			text: elementManager.text,
			className: "e-id-elementor-element-manager-button-upgrade-pro-elements"
		})))), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableContainer, {
			component: _elementor_ui.Paper,
			variant: "outlined"
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Table, { size: "small" }, /*#__PURE__*/ react.default.createElement(_elementor_ui.TableHead, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.TableRow, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, { sx: function sx(theme) {
			return { width: theme.spacing(25) };
		} }, (0, _wordpress_i18n.__)("Element", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, { sx: function sx(theme) {
			return { width: theme.spacing(10) };
		} }, (0, _wordpress_i18n.__)("Status", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, null, (0, _wordpress_i18n.__)("Usage", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, null, (0, _wordpress_i18n.__)("Plugin", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
			direction: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			gap: 1
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, (0, _wordpress_i18n.__)("Permission", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Tooltip, {
			placement: "top",
			title: (0, _wordpress_i18n.__)("Choose which role will have access to a specific widget.", "elementor")
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.IconButton, { size: "small" }, /*#__PURE__*/ react.default.createElement(_elementor_icons.HelpIcon, { fontSize: "small" })))))))), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableBody, null, widgets.map(function(widget) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.TableRow, {
				key: widget.name,
				hover: true
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
				display: "flex",
				alignItems: "center"
			} }, /*#__PURE__*/ react.default.createElement("i", {
				style: { marginInlineEnd: 8 },
				className: widget.icon
			}), widget.title)), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Switch, {
				checked: false,
				disabled: true,
				size: "small",
				"data-id": "e-id-elementor-element-manager-toggle-".concat(widget.name)
			})), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, null), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, null, (0, _wordpress_i18n.__)("Elementor Pro", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.TableCell, null, /*#__PURE__*/ react.default.createElement(EditButtonDisabled, { widgetName: widget.name })));
		})))));
	};
	PromotionWidgetsTable.propTypes = {
		widgets: import_prop_types.default.arrayOf(import_prop_types.default.shape({
			name: import_prop_types.default.string.isRequired,
			title: import_prop_types.default.string.isRequired,
			icon: import_prop_types.default.string
		})).isRequired,
		promotionData: import_prop_types.default.shape({ element_manager: import_prop_types.default.shape({
			url: import_prop_types.default.string,
			text: import_prop_types.default.string
		}) }).isRequired
	};

//#endregion
//#region modules/element-manager/assets/js/app-editor-one/App.js
	var App = function App() {
		var _useState2 = _slicedToArray((0, react.useState)(false), 2);
		var isConfirmDialogOpen = _useState2[0];
		var setIsConfirmDialogOpen = _useState2[1];
		var _useElementManager = useElementManager();
		var isLoading = _useElementManager.isLoading;
		var widgets = _useElementManager.widgets;
		var promotionWidgets = _useElementManager.promotionWidgets;
		var plugins = _useElementManager.plugins;
		var roles = _useElementManager.roles;
		var widgetsDisabled = _useElementManager.widgetsDisabled;
		var widgetsRoleRestrictions = _useElementManager.widgetsRoleRestrictions;
		var setWidgetsRoleRestrictions = _useElementManager.setWidgetsRoleRestrictions;
		var promotionData = _useElementManager.promotionData;
		var noticeData = _useElementManager.noticeData;
		var usageWidgets = _useElementManager.usageWidgets;
		var changeProgress = _useElementManager.changeProgress;
		var isSnackbarOpen = _useElementManager.isSnackbarOpen;
		var setIsSnackbarOpen = _useElementManager.setIsSnackbarOpen;
		var getWidgetUsage = _useElementManager.getWidgetUsage;
		var scanUsageElements = _useElementManager.scanUsageElements;
		var saveChanges = _useElementManager.saveChanges;
		var deactivateAllUnusedWidgets = _useElementManager.deactivateAllUnusedWidgets;
		var enableAllWidgets = _useElementManager.enableAllWidgets;
		var toggleWidget = _useElementManager.toggleWidget;
		var dismissNotice = _useElementManager.dismissNotice;
		var _useWidgetFilters = useWidgetFilters(widgets, widgetsDisabled, getWidgetUsage);
		var searchKeyword = _useWidgetFilters.searchKeyword;
		var setSearchKeyword = _useWidgetFilters.setSearchKeyword;
		var filterByPlugin = _useWidgetFilters.filterByPlugin;
		var setFilterByPlugin = _useWidgetFilters.setFilterByPlugin;
		var filterByStatus = _useWidgetFilters.filterByStatus;
		var setFilterByStatus = _useWidgetFilters.setFilterByStatus;
		var sortedAndFilteredWidgets = _useWidgetFilters.sortedAndFilteredWidgets;
		var getSortingIndicatorClasses = _useWidgetFilters.getSortingIndicatorClasses;
		var onSortingClicked = _useWidgetFilters.onSortingClicked;
		var setSortByUsage = _useWidgetFilters.setSortByUsage;
		var handleScanUsage = (0, react.useCallback)(/*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
			return import_regenerator.default.wrap(function(_context) {
				while (1) switch (_context.prev = _context.next) {
					case 0:
						_context.next = 1;
						return scanUsageElements();
					case 1: setSortByUsage();
					case 2:
					case "end": return _context.stop();
				}
			}, _callee);
		})), [scanUsageElements, setSortByUsage]);
		var handleSaveClick = (0, react.useCallback)(/*#__PURE__*/ _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee2() {
			return import_regenerator.default.wrap(function(_context2) {
				while (1) switch (_context2.prev = _context2.next) {
					case 0:
						setIsConfirmDialogOpen(false);
						_context2.next = 1;
						return saveChanges();
					case 1:
					case "end": return _context2.stop();
				}
			}, _callee2);
		})), [saveChanges]);
		if (isLoading) return /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
			justifyContent: "center",
			sx: { margin: 12 }
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.CircularProgress, { size: 80 }));
		return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.secondary",
			sx: {
				marginBlockEnd: 2.5,
				maxWidth: 800
			}
		}, (0, _wordpress_i18n.__)("Here's where you can fine-tune Elementor to your workflow. Disable elements you don't use for a cleaner interface, more focused creative experience, and improved performance.", "elementor"), " ", /*#__PURE__*/ react.default.createElement(_elementor_ui.Link, {
			href: "https://go.elementor.com/wp-dash-element-manager/",
			rel: "noreferrer",
			target: "_blank",
			color: "info.light"
		}, (0, _wordpress_i18n.__)("Learn More", "elementor"))), noticeData && !noticeData.is_viewed && /*#__PURE__*/ react.default.createElement(NoticeAlert, { onDismiss: dismissNotice }), /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, /*#__PURE__*/ react.default.createElement(SearchFilters, {
			searchKeyword,
			onSearchChange: setSearchKeyword,
			filterByPlugin,
			onPluginFilterChange: setFilterByPlugin,
			filterByStatus,
			onStatusFilterChange: setFilterByStatus,
			plugins,
			usageIsLoading: usageWidgets.isLoading,
			usageData: usageWidgets.data,
			widgetsDisabledCount: widgetsDisabled.length,
			onScanUsage: handleScanUsage,
			onDeactivateUnused: deactivateAllUnusedWidgets,
			onEnableAll: enableAllWidgets,
			onSaveChanges: function onSaveChanges() {
				return setIsConfirmDialogOpen(true);
			},
			isSaving: changeProgress.isSaving,
			hasUnsavedChanges: changeProgress.isUnsavedChanges
		}), /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, /*#__PURE__*/ react.default.createElement(WidgetsTable, {
			widgets: sortedAndFilteredWidgets,
			widgetsDisabled,
			widgetsRoleRestrictions,
			setWidgetsRoleRestrictions,
			roles,
			promotionWidgets,
			promotionData,
			usageWidgets,
			getWidgetUsage,
			onScanUsage: handleScanUsage,
			onToggleWidget: toggleWidget,
			getSortingIndicatorClasses,
			onSortingClicked
		})), /*#__PURE__*/ react.default.createElement(PromotionWidgetsTable, {
			widgets: promotionWidgets,
			promotionData
		})), /*#__PURE__*/ react.default.createElement(ConfirmDialog, {
			isOpen: isConfirmDialogOpen,
			onClose: function onClose() {
				return setIsConfirmDialogOpen(false);
			},
			onConfirm: handleSaveClick
		}), /*#__PURE__*/ react.default.createElement(_elementor_ui.Snackbar, {
			open: isSnackbarOpen,
			autoHideDuration: 6e3,
			onClose: function onClose() {
				return setIsSnackbarOpen(false);
			},
			message: (0, _wordpress_i18n.__)("We saved your changes.", "elementor"),
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "center"
			}
		}));
	};

//#endregion
//#region modules/element-manager/assets/js/app-editor-one/index.js
	var AppModern = function AppModern() {
		var _elementorCommon$conf;
		var isRTL = typeof elementorCommon !== "undefined" && (_elementorCommon$conf = elementorCommon.config) !== null && _elementorCommon$conf !== void 0 && _elementorCommon$conf.isRTL ? elementorCommon.config.isRTL : "rtl" === document.documentElement.dir || document.body.classList.contains("rtl");
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.DirectionProvider, { rtl: isRTL }, /*#__PURE__*/ react.default.createElement(_elementor_ui.ThemeProvider, { colorScheme: "light" }, /*#__PURE__*/ react.default.createElement(App, null)));
	};

//#endregion
//#region modules/element-manager/assets/js/admin.js
	(0, _wordpress_dom_ready.default)(function() {
		var htmlOutput = document.getElementById("elementor-element-manager-wrap");
		if (!htmlOutput) return;
		(0, import_client.createRoot)(htmlOutput).render(/*#__PURE__*/ react.default.createElement(AppModern, null));
	});

//#endregion
})(React, wp.domReady, elementorV2.ui, wp.i18n, elementorV2.icons, wp.components);
//# sourceMappingURL=element-manager-admin.js.map