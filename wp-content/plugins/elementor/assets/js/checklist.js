(function(_elementor_editor_app_bar, _wordpress_i18n, react, _elementor_query, _elementor_editor_v1_adapters, _elementor_icons_RocketIcon, _elementor_ui, _elementor_icons) {

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
_elementor_editor_app_bar = __toESM(_elementor_editor_app_bar);
react = __toESM(react);
_elementor_icons_RocketIcon = __toESM(_elementor_icons_RocketIcon);

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
//#region node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var import_regenerator = /* @__PURE__ */ __toESM(require_regenerator());
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
//#region modules/checklist/assets/js/app/components/reminder-modal.js
	var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
	var ReminderModal = function ReminderModal(_ref) {
		var setOpen = _ref.setOpen;
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Card, {
			elevation: 0,
			sx: { maxWidth: 336 },
			className: "e-checklist-infotip-first-time-closed"
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.CardContent, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "subtitle2",
			sx: { mb: 2 }
		}, (0, _wordpress_i18n.__)("Looking for your Launchpad Checklist?", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, { variant: "body2" }, (0, _wordpress_i18n.__)("Click the launch icon to continue setting up your site.", "elementor"))), /*#__PURE__*/ react.default.createElement(_elementor_ui.CardActions, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
			size: "small",
			variant: "contained",
			className: "infotip-first-time-closed-button",
			onClick: function closeChecklist(e) {
				e.stopPropagation();
				setOpen(false);
			}
		}, (0, _wordpress_i18n.__)("Got it", "elementor"))));
	};
	ReminderModal.propTypes = { setOpen: import_prop_types.default.func.isRequired };

//#endregion
//#region modules/checklist/assets/js/utils/consts.js
	var STEPS_ROUTE = "checklist/steps";
	var USER_PROGRESS_ROUTE = "checklist/user-progress";
	var STEP = {
		IS_MARKED_COMPLETED: "is_marked_completed",
		IS_IMMUTABLE_COMPLETED: "is_immutable_completed",
		IS_ABSOLUTE_COMPLETED: "is_absolute_completed",
		PROMOTION_DATA: "promotion_data"
	};
	var USER_PROGRESS = {
		LAST_OPENED_TIMESTAMP: "last_opened_timestamp",
		SHOULD_OPEN_IN_EDITOR: "should_open_in_editor",
		CHECKLIST_CLOSED_IN_THE_EDITOR_FOR_FIRST_TIME: "first_closed_checklist_in_editor",
		IS_POPUP_MINIMIZED: "is_popup_minimized",
		EDITOR_VISIT_COUNT: "e_editor_counter"
	};
	var STEP_IDS_TO_COMPLETE_IN_EDITOR = ["add_logo", "set_fonts_and_colors"];
	var PANEL_ROUTES = {
		add_logo: "panel/global/settings-site-identity",
		set_fonts_and_colors: "panel/global/global-typography"
	};
	var MIXPANEL_CHECKLIST_STEPS = {
		UPGRADE: "upgrade",
		ACTION: "action",
		DONE: "done",
		UNDONE: "undone",
		TITLE: "title",
		WELL_DONE: "well_done",
		CHECKLIST_HEADER_CLOSE: "checklistHeaderClose",
		ACCORDION_SECTION: "accordionSection"
	};

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
//#region modules/checklist/assets/js/utils/functions.js
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
	var IS_MARKED_COMPLETED$1 = STEP.IS_MARKED_COMPLETED;
	var IS_ABSOLUTE_COMPLETED$1 = STEP.IS_ABSOLUTE_COMPLETED;
	var IS_IMMUTABLE_COMPLETED$1 = STEP.IS_IMMUTABLE_COMPLETED;
	var PROMOTION_DATA$1 = STEP.PROMOTION_DATA;
	function isStepChecked(step) {
		return !step[PROMOTION_DATA$1] && (step[IS_MARKED_COMPLETED$1] || step[IS_ABSOLUTE_COMPLETED$1] || step[IS_IMMUTABLE_COMPLETED$1]);
	}
	function toggleChecklistPopup() {
		$e.run("checklist/toggle-popup");
	}
	function fetchSteps() {
		return _fetchSteps.apply(this, arguments);
	}
	function _fetchSteps() {
		_fetchSteps = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
			var _response$data;
			var response;
			return import_regenerator.default.wrap(function(_context) {
				while (1) switch (_context.prev = _context.next) {
					case 0:
						_context.next = 1;
						return $e.data.get(STEPS_ROUTE, {}, { refresh: true });
					case 1:
						response = _context.sent;
						return _context.abrupt("return", (response === null || response === void 0 || (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data) || null);
					case 2:
					case "end": return _context.stop();
				}
			}, _callee);
		}));
		return _fetchSteps.apply(this, arguments);
	}
	function fetchUserProgress() {
		return _fetchUserProgress.apply(this, arguments);
	}
	function _fetchUserProgress() {
		_fetchUserProgress = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee2() {
			var _response$data2;
			var response;
			return import_regenerator.default.wrap(function(_context2) {
				while (1) switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 1;
						return $e.data.get(USER_PROGRESS_ROUTE, {}, { refresh: true });
					case 1:
						response = _context2.sent;
						return _context2.abrupt("return", (response === null || response === void 0 || (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.data) || null);
					case 2:
					case "end": return _context2.stop();
				}
			}, _callee2);
		}));
		return _fetchUserProgress.apply(this, arguments);
	}
	function updateStep(_x, _x2) {
		return _updateStep.apply(this, arguments);
	}
	function _updateStep() {
		_updateStep = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee3(id, data) {
			return import_regenerator.default.wrap(function(_context3) {
				while (1) switch (_context3.prev = _context3.next) {
					case 0:
						_context3.next = 1;
						return $e.data.update(STEPS_ROUTE, _objectSpread$2({ id }, data), { id });
					case 1: return _context3.abrupt("return", _context3.sent);
					case 2:
					case "end": return _context3.stop();
				}
			}, _callee3);
		}));
		return _updateStep.apply(this, arguments);
	}
	function updateUserProgress(_x3) {
		return _updateUserProgress.apply(this, arguments);
	}
	function _updateUserProgress() {
		_updateUserProgress = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee4(data) {
			return import_regenerator.default.wrap(function(_context4) {
				while (1) switch (_context4.prev = _context4.next) {
					case 0:
						_context4.next = 1;
						return $e.data.update(USER_PROGRESS_ROUTE, data);
					case 1: return _context4.abrupt("return", _context4.sent);
					case 2:
					case "end": return _context4.stop();
				}
			}, _callee4);
		}));
		return _updateUserProgress.apply(this, arguments);
	}
	function getAndUpdateStep(id, step, key, value) {
		if (step.config.id !== id) return step;
		return _objectSpread$2(_objectSpread$2({}, step), {}, _defineProperty({}, key, value));
	}
	function addMixpanelTrackingChecklistSteps(name, action) {
		var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "button";
		var documentMetaData = getDocumentMetaDataMixpanel();
		name = name.replace(/_/g, "");
		var eventName = "checklist_steps_".concat(action, "_").concat(name);
		return elementorCommon.eventsManager.dispatchEvent(eventName, _objectSpread$2({
			location: elementorCommon.eventsManager.config.locations.elementorEditor,
			secondaryLocation: elementorCommon.eventsManager.config.secondaryLocations.checklistSteps,
			trigger: elementorCommon.eventsManager.config.triggers.click,
			element: elementorCommon.eventsManager.config.elements[element]
		}, documentMetaData));
	}
	function addMixpanelTrackingChecklistHeader(name) {
		var documentMetaData = getDocumentMetaDataMixpanel();
		return elementorCommon.eventsManager.dispatchEvent(elementorCommon.eventsManager.config.names.elementorEditor.checklist[name], _objectSpread$2({
			location: elementorCommon.eventsManager.config.locations.elementorEditor,
			secondaryLocation: elementorCommon.eventsManager.config.secondaryLocations.checklistHeader,
			trigger: elementorCommon.eventsManager.config.triggers.click,
			element: elementorCommon.eventsManager.config.elements.buttonIcon
		}, documentMetaData));
	}
	function addMixpanelTrackingChecklistTopBar(togglePopupState) {
		var documentMetaData = getDocumentMetaDataMixpanel();
		var name = !togglePopupState ? "launchpadOn" : "launchpadOff";
		return elementorCommon.eventsManager.dispatchEvent(elementorCommon.eventsManager.config.names.topBar[name], _objectSpread$2({
			location: elementorCommon.eventsManager.config.locations.topBar,
			secondaryLocation: elementorCommon.eventsManager.config.secondaryLocations.launchpad,
			trigger: elementorCommon.eventsManager.config.triggers.toggleClick,
			element: elementorCommon.eventsManager.config.elements.buttonIcon
		}, documentMetaData));
	}
	function dispatchChecklistOpenEvent() {
		var documentMetaData = getDocumentMetaDataMixpanel();
		return elementorCommon.eventsManager.dispatchEvent(elementorCommon.eventsManager.config.names.elementorEditor.checklist.checklistFirstPopup, _objectSpread$2({
			location: elementorCommon.eventsManager.config.locations.elementorEditor,
			secondaryLocation: elementorCommon.eventsManager.config.secondaryLocations.launchpad,
			trigger: elementorCommon.eventsManager.config.triggers.editorLoaded,
			element: elementorCommon.eventsManager.config.elements.launchpadChecklist
		}, documentMetaData));
	}
	function getDocumentMetaDataMixpanel() {
		return {
			postId: elementor.getPreviewContainer().document.config.id,
			postTitle: elementor.getPreviewContainer().model.attributes.settings.attributes.post_title,
			postTypeTitle: elementor.getPreviewContainer().document.config.post_type_title,
			documentType: elementor.getPreviewContainer().document.config.type
		};
	}

//#endregion
//#region modules/checklist/assets/js/topbar-icon.js
	var CHECKLIST_CLOSED_IN_THE_EDITOR_FOR_FIRST_TIME$1 = USER_PROGRESS.CHECKLIST_CLOSED_IN_THE_EDITOR_FOR_FIRST_TIME;
	var TopBarIcon = function TopBarIcon() {
		var _useState2 = _slicedToArray((0, react.useState)(false), 2);
		var hasRoot = _useState2[0];
		var setHasRoot = _useState2[1];
		var _useState4 = _slicedToArray((0, react.useState)(false), 2);
		var open = _useState4[0];
		var setOpen = _useState4[1];
		var _useQuery = (0, _elementor_query.useQuery)({
			queryKey: ["closedForFirstTime"],
			queryFn: fetchUserProgress
		});
		var error = _useQuery.error;
		var userProgress = _useQuery.data;
		var closedForFirstTime = userProgress === null || userProgress === void 0 ? void 0 : userProgress[CHECKLIST_CLOSED_IN_THE_EDITOR_FOR_FIRST_TIME$1];
		(0, react.useEffect)(function() {
			return (0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("checklist/toggle-popup"), function(e) {
				setHasRoot(e.args.isOpen);
			});
		}, [hasRoot]);
		(0, react.useEffect)(function() {
			var handleFirstClosed = function handleFirstClosed() {
				setOpen(true);
			};
			window.addEventListener("elementor/checklist/first_close", handleFirstClosed);
			return function() {
				window.removeEventListener("elementor/checklist/first_close", handleFirstClosed);
			};
		}, []);
		if (error) return null;
		return hasRoot && !closedForFirstTime ? /*#__PURE__*/ react.createElement(_elementor_icons_RocketIcon.default, null) : /*#__PURE__*/ react.createElement(_elementor_ui.Infotip, {
			placement: "bottom-start",
			content: /*#__PURE__*/ react.createElement(ReminderModal, {
				setHasRoot,
				setOpen
			}),
			open,
			PopperProps: { modifiers: [{
				name: "offset",
				options: { offset: [-16, 12] }
			}] }
		}, /*#__PURE__*/ react.createElement(_elementor_icons_RocketIcon.default, null));
	};

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/classCallCheck.js
	function _classCallCheck(a, n) {
		if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
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
//#region modules/checklist/assets/js/app/components/progress.js
	var Progress = function Progress(_ref) {
		var steps = _ref.steps;
		var progress = steps.filter(isStepChecked).length * 100 / steps.length;
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			alignItems: "center",
			gap: 1
		} }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: { width: "100%" } }, /*#__PURE__*/ react.default.createElement(_elementor_ui.LinearProgress, {
			variant: "determinate",
			value: progress
		})), /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: { width: "fit-content" } }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.secondary"
		}, "".concat(Math.round(progress), "%"))));
	};
	Progress.propTypes = { steps: import_prop_types.default.array.isRequired };

//#endregion
//#region modules/checklist/assets/js/app/components/header.js
	var CHECKLIST_CLOSED_IN_THE_EDITOR_FOR_FIRST_TIME = USER_PROGRESS.CHECKLIST_CLOSED_IN_THE_EDITOR_FOR_FIRST_TIME;
	var CHECKLIST_HEADER_CLOSE = MIXPANEL_CHECKLIST_STEPS.CHECKLIST_HEADER_CLOSE;
	var Header = function Header(_ref) {
		var steps = _ref.steps;
		var isMinimized = _ref.isMinimized;
		var toggleIsMinimized = _ref.toggleIsMinimized;
		var userProgress = (0, _elementor_query.useQuery)({
			queryKey: ["closedForFirstTime"],
			queryFn: fetchUserProgress
		}).data;
		var closedForFirstTime = (userProgress === null || userProgress === void 0 ? void 0 : userProgress[CHECKLIST_CLOSED_IN_THE_EDITOR_FOR_FIRST_TIME]) || false;
		var closeChecklist = /*#__PURE__*/ function() {
			var _ref2 = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
				return import_regenerator.default.wrap(function(_context) {
					while (1) switch (_context.prev = _context.next) {
						case 0:
							addMixpanelTrackingChecklistHeader(CHECKLIST_HEADER_CLOSE);
							if (closedForFirstTime) {
								_context.next = 2;
								break;
							}
							_context.next = 1;
							return updateUserProgress(_defineProperty({}, CHECKLIST_CLOSED_IN_THE_EDITOR_FOR_FIRST_TIME, true));
						case 1: window.dispatchEvent(new CustomEvent("elementor/checklist/first_close", { detail: { message: "firstClose" } }));
						case 2: toggleChecklistPopup();
						case 3:
						case "end": return _context.stop();
					}
				}, _callee);
			}));
			return function closeChecklist() {
				return _ref2.apply(this, arguments);
			};
		}();
		return /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement(_elementor_ui.AppBar, {
			elevation: 0,
			position: "sticky",
			sx: {
				p: 2,
				backgroundColor: "background.default"
			}
		}, /*#__PURE__*/ react.createElement(_elementor_ui.Toolbar, {
			variant: "dense",
			disableGutters: true
		}, /*#__PURE__*/ react.createElement(_elementor_ui.Typography, {
			variant: "subtitle1",
			sx: { flexGrow: 1 }
		}, (0, _wordpress_i18n.__)("Let's make a productivity boost", "elementor")), /*#__PURE__*/ react.createElement(_elementor_ui.IconButton, {
			size: "small",
			onClick: toggleIsMinimized,
			"aria-expanded": !isMinimized
		}, isMinimized ? /*#__PURE__*/ react.createElement(_elementor_icons.ExpandDiagonalIcon, null) : /*#__PURE__*/ react.createElement(_elementor_icons.MinimizeDiagonalIcon, null)), /*#__PURE__*/ react.createElement(_elementor_ui.CloseButton, {
			sx: { mr: -.5 },
			size: "small",
			onClick: closeChecklist
		})), /*#__PURE__*/ react.createElement(Progress, { steps })), /*#__PURE__*/ react.createElement(_elementor_ui.Divider, null));
	};
	Header.propTypes = {
		steps: import_prop_types.default.array.isRequired,
		isMinimized: import_prop_types.default.bool.isRequired,
		toggleIsMinimized: import_prop_types.default.func.isRequired
	};

//#endregion
//#region modules/checklist/assets/js/app/components/checklist-card-content.js
	var IS_MARKED_COMPLETED = STEP.IS_MARKED_COMPLETED;
	var IS_ABSOLUTE_COMPLETED = STEP.IS_ABSOLUTE_COMPLETED;
	var IS_IMMUTABLE_COMPLETED = STEP.IS_IMMUTABLE_COMPLETED;
	var DONE = MIXPANEL_CHECKLIST_STEPS.DONE;
	var UNDONE = MIXPANEL_CHECKLIST_STEPS.UNDONE;
	var ACTION$1 = MIXPANEL_CHECKLIST_STEPS.ACTION;
	var UPGRADE = MIXPANEL_CHECKLIST_STEPS.UPGRADE;
	var ChecklistCardContent = function ChecklistCardContent(_ref) {
		var step = _ref.step;
		var setSteps = _ref.setSteps;
		var _step$config = step.config;
		var id = _step$config.id;
		var description = _step$config.description;
		var learnMoreUrl = _step$config.learn_more_url;
		var learnMoreText = _step$config.learn_more_text;
		var imageSrc = _step$config.image_src;
		var promotionData = _step$config.promotion_data;
		var ctaText = promotionData ? (promotionData === null || promotionData === void 0 ? void 0 : promotionData.text) || (0, _wordpress_i18n.__)("Upgrade Now", "elementor") : step.config.cta_text;
		var ctaUrl = promotionData ? promotionData.url : step.config.cta_url;
		var isAbsoluteCompleted = step[IS_ABSOLUTE_COMPLETED];
		var isImmutableCompleted = step[IS_IMMUTABLE_COMPLETED];
		var isMarkedCompleted = step[IS_MARKED_COMPLETED];
		var shouldShowMarkAsDone = !isAbsoluteCompleted && !isImmutableCompleted && !promotionData;
		var redirectHandler = /*#__PURE__*/ function() {
			var _ref2 = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
				return import_regenerator.default.wrap(function(_context) {
					while (1) switch (_context.prev = _context.next) {
						case 0:
							if (promotionData) addMixpanelTrackingChecklistSteps(step.config.id, UPGRADE);
							else addMixpanelTrackingChecklistSteps(step.config.id, ACTION$1);
							if (!(!elementor || !STEP_IDS_TO_COMPLETE_IN_EDITOR.includes(id) || !PANEL_ROUTES[id])) {
								_context.next = 1;
								break;
							}
							return _context.abrupt("return", window.open(ctaUrl, "_blank"));
						case 1:
							_context.next = 2;
							return $e.run("panel/global/open");
						case 2: $e.route(PANEL_ROUTES[id]);
						case 3:
						case "end": return _context.stop();
					}
				}, _callee);
			}));
			return function redirectHandler() {
				return _ref2.apply(this, arguments);
			};
		}();
		var toggleMarkAsDone = /*#__PURE__*/ function() {
			var _ref3 = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee2() {
				var currState;
				return import_regenerator.default.wrap(function(_context2) {
					while (1) switch (_context2.prev = _context2.next) {
						case 0:
							currState = isMarkedCompleted;
							if (isMarkedCompleted) addMixpanelTrackingChecklistSteps(step.config.id, UNDONE);
							else addMixpanelTrackingChecklistSteps(step.config.id, DONE);
							_context2.prev = 1;
							updateStepsState(IS_MARKED_COMPLETED, !currState);
							_context2.next = 2;
							return updateStep(id, _defineProperty({}, IS_MARKED_COMPLETED, !currState));
						case 2:
							_context2.next = 4;
							break;
						case 3:
							_context2.prev = 3;
							_context2["catch"](1);
							updateStepsState(IS_MARKED_COMPLETED, currState);
						case 4:
						case "end": return _context2.stop();
					}
				}, _callee2, null, [[1, 3]]);
			}));
			return function toggleMarkAsDone() {
				return _ref3.apply(this, arguments);
			};
		}();
		var updateStepsState = function updateStepsState(key, value) {
			setSteps(function(steps) {
				return steps.map(function(iteratedStep) {
					return getAndUpdateStep(step.config.id, iteratedStep, key, value);
				});
			});
		};
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Card, {
			elevation: 0,
			square: true,
			"data-step-id": id
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.CardMedia, {
			image: imageSrc,
			sx: { height: 180 }
		}), /*#__PURE__*/ react.default.createElement(_elementor_ui.CardContent, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.secondary",
			component: "p"
		}, description + " ", /*#__PURE__*/ react.default.createElement(_elementor_ui.Link, {
			href: learnMoreUrl,
			target: "_blank",
			rel: "noreferrer",
			underline: "hover",
			color: "info.main",
			noWrap: true
		}, learnMoreText))), /*#__PURE__*/ react.default.createElement(_elementor_ui.CardActions, null, shouldShowMarkAsDone ? /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
			size: "small",
			color: "secondary",
			variant: "text",
			onClick: toggleMarkAsDone
		}, isMarkedCompleted ? (0, _wordpress_i18n.__)("Unmark as done", "elementor") : (0, _wordpress_i18n.__)("Mark as done", "elementor")) : null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
			color: promotionData ? "promotion" : "primary",
			size: "small",
			variant: "contained",
			onClick: redirectHandler
		}, ctaText)));
	};
	ChecklistCardContent.propTypes = {
		step: import_prop_types.default.object.isRequired,
		setSteps: import_prop_types.default.func.isRequired
	};

//#endregion
//#region modules/checklist/assets/js/app/components/checklist-item.js
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
	var PROMOTION_DATA = STEP.PROMOTION_DATA;
	var TITLE = MIXPANEL_CHECKLIST_STEPS.TITLE;
	var ACCORDION_SECTION = MIXPANEL_CHECKLIST_STEPS.ACCORDION_SECTION;
	function CheckListItem(props) {
		var expandedIndex = props.expandedIndex;
		var setExpandedIndex = props.setExpandedIndex;
		var setSteps = props.setSteps;
		var index = props.index;
		var step = props.step;
		var chevronStyle = index === expandedIndex ? { transform: "rotate(180deg)" } : {};
		var isChecked = isStepChecked(step);
		var promotionData = step.config[PROMOTION_DATA];
		return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.ListItemButton, {
			onClick: function handleExpandClick() {
				addMixpanelTrackingChecklistSteps(step.config.id, TITLE, ACCORDION_SECTION);
				setExpandedIndex(index === expandedIndex ? -1 : index);
			},
			"data-step-id": step.config.id,
			dense: true
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.ListItemIcon, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Checkbox, {
			"data-is-checked": isChecked,
			icon: /*#__PURE__*/ react.default.createElement(_elementor_icons.RadioButtonUncheckedIcon, null),
			checkedIcon: /*#__PURE__*/ react.default.createElement(_elementor_icons.CircleCheckFilledIcon, { color: "primary" }),
			edge: "start",
			checked: isChecked,
			tabIndex: -1,
			inputProps: { "aria-labelledby": step.config.title }
		})), /*#__PURE__*/ react.default.createElement(_elementor_ui.ListItemText, {
			primary: step.config.title,
			primaryTypographyProps: { variant: "body2" }
		}), promotionData ? function getUpgradeIcon() {
			return "default" === (promotionData === null || promotionData === void 0 ? void 0 : promotionData.icon) ? /*#__PURE__*/ react.default.createElement(_elementor_icons.UpgradeIcon, {
				color: "promotion",
				sx: { mr: 1 }
			}) : /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, {
				color: "promotion",
				sx: { mr: 1 }
			}, /*#__PURE__*/ react.default.createElement("img", {
				src: promotionData === null || promotionData === void 0 ? void 0 : promotionData.icon,
				alt: promotionData.iconAlt || ""
			}));
		}() : null, /*#__PURE__*/ react.default.createElement(_elementor_icons.ChevronDownIcon, { sx: _objectSpread$1(_objectSpread$1({}, chevronStyle), {}, { transition: "300ms" }) })), /*#__PURE__*/ react.default.createElement(_elementor_ui.Collapse, { in: index === expandedIndex }, /*#__PURE__*/ react.default.createElement(ChecklistCardContent, {
			step,
			setSteps
		})));
	}
	CheckListItem.propTypes = {
		step: import_prop_types.default.object.isRequired,
		expandedIndex: import_prop_types.default.number,
		setExpandedIndex: import_prop_types.default.func.isRequired,
		setSteps: import_prop_types.default.func.isRequired,
		index: import_prop_types.default.number.isRequired
	};

//#endregion
//#region app/assets/js/hooks/use-ajax.js
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
	function useAjax() {
		var _useState2 = _slicedToArray((0, react.useState)(null), 2);
		var ajax = _useState2[0];
		var setAjax = _useState2[1];
		var initialStatusKey = "initial";
		var _useState4 = _slicedToArray((0, react.useState)({
			status: initialStatusKey,
			isComplete: false,
			response: null
		}), 2);
		var ajaxState = _useState4[0];
		var setAjaxState = _useState4[1];
		var ajaxActions = { reset: function reset() {
			return setAjaxState(initialStatusKey);
		} };
		var runRequest = /*#__PURE__*/ function() {
			var _ref = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee(config) {
				return import_regenerator.default.wrap(function(_context) {
					while (1) switch (_context.prev = _context.next) {
						case 0: return _context.abrupt("return", new Promise(function(resolve, reject) {
							var formData = new FormData();
							if (config.data) {
								for (var key in config.data) formData.append(key, config.data[key]);
								if (!config.data.nonce) formData.append("_nonce", elementorCommon.config.ajax.nonce);
							}
							var options = _objectSpread(_objectSpread({
								type: "post",
								url: elementorCommon.config.ajax.url,
								headers: {},
								cache: false,
								contentType: false,
								processData: false
							}, config), {}, {
								data: formData,
								success: function success(response) {
									resolve(response);
								},
								error: function error(_error) {
									reject(_error);
								}
							});
							jQuery.ajax(options);
						}));
						case 1:
						case "end": return _context.stop();
					}
				}, _callee);
			}));
			return function runRequest(_x) {
				return _ref.apply(this, arguments);
			};
		}();
		(0, react.useEffect)(function() {
			if (ajax) runRequest(ajax).then(function(response) {
				var status = response.success ? "success" : "error";
				setAjaxState(function(prevState) {
					return _objectSpread(_objectSpread({}, prevState), {}, {
						status,
						response: response === null || response === void 0 ? void 0 : response.data
					});
				});
			}).catch(function(error) {
				var _error$responseJSON;
				var response = 408 === error.status ? "timeout" : (_error$responseJSON = error.responseJSON) === null || _error$responseJSON === void 0 ? void 0 : _error$responseJSON.data;
				setAjaxState(function(prevState) {
					return _objectSpread(_objectSpread({}, prevState), {}, {
						status: "error",
						response
					});
				});
			}).finally(function() {
				setAjaxState(function(prevState) {
					return _objectSpread(_objectSpread({}, prevState), {}, { isComplete: true });
				});
			});
		}, [ajax]);
		return {
			ajax,
			setAjax,
			ajaxState,
			ajaxActions,
			runRequest
		};
	}

//#endregion
//#region modules/checklist/assets/js/app/components/success-message.js
	var ACTION = MIXPANEL_CHECKLIST_STEPS.ACTION;
	var WELL_DONE = MIXPANEL_CHECKLIST_STEPS.WELL_DONE;
	var SuccessMessage = function SuccessMessage() {
		var _useAjax = useAjax();
		var ajaxState = _useAjax.ajaxState;
		var setAjax = _useAjax.setAjax;
		var hideChecklist = function hideChecklist() {
			addMixpanelTrackingChecklistSteps(WELL_DONE, ACTION);
			setAjax({ data: {
				action: "elementor_ajax",
				actions: JSON.stringify({ save_editorPreferences_settings: {
					action: "save_editorPreferences_settings",
					data: { data: { show_launchpad_checklist: "" } }
				} })
			} });
		};
		(0, react.useEffect)(function() {
			switch (ajaxState.status) {
				case "success":
					setTimeout(function() {
						$e.commands.run("checklist/toggle-icon", false);
					}, 0);
					break;
				case "error": break;
			}
		}, [ajaxState]);
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Card, {
			elevation: 0,
			square: true,
			className: "e-checklist-done"
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.CardMedia, {
			image: "https://assets.elementor.com/checklist/v1/images/checklist-step-7.jpg",
			sx: { height: 180 }
		}), /*#__PURE__*/ react.default.createElement(_elementor_ui.CardContent, { sx: { textAlign: "center" } }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "h6",
			color: "text.primary"
		}, (0, _wordpress_i18n.__)("You're on your way!", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.secondary",
			component: "p"
		}, (0, _wordpress_i18n.__)("With these steps, you've got a great base for a robust website. Enjoy your web creation journey!", "elementor"))), /*#__PURE__*/ react.default.createElement(_elementor_ui.CardActions, { sx: { justifyContent: "center" } }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
			color: "primary",
			size: "small",
			variant: "contained",
			onClick: hideChecklist
		}, (0, _wordpress_i18n.__)("Got it", "elementor"))));
	};

//#endregion
//#region modules/checklist/assets/js/app/components/checklist-wrapper.js
	var ChecklistWrapper = function ChecklistWrapper(_ref) {
		var steps = _ref.steps;
		var setSteps = _ref.setSteps;
		var isMinimized = _ref.isMinimized;
		var _useState2 = _slicedToArray((0, react.useState)(-1), 2);
		var expandedIndex = _useState2[0];
		var setExpandedIndex = _useState2[1];
		var isChecklistCompleted = steps.filter(isStepChecked).length === steps.length;
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
			transition: "400ms",
			maxHeight: isMinimized ? 0 : "645px"
		} }, /*#__PURE__*/ react.default.createElement(_elementor_ui.List, {
			component: "div",
			sx: { py: 0 }
		}, steps.map(function(step, index) {
			return /*#__PURE__*/ react.default.createElement(react.Fragment, { key: index }, index ? /*#__PURE__*/ react.default.createElement(_elementor_ui.Divider, null) : null, /*#__PURE__*/ react.default.createElement(CheckListItem, {
				step,
				setSteps,
				setExpandedIndex,
				expandedIndex,
				index
			}));
		})), isChecklistCompleted ? /*#__PURE__*/ react.default.createElement(SuccessMessage, null) : null);
	};
	ChecklistWrapper.propTypes = {
		steps: import_prop_types.default.array.isRequired,
		setSteps: import_prop_types.default.func.isRequired,
		isMinimized: import_prop_types.default.bool.isRequired
	};

//#endregion
//#region modules/checklist/assets/js/app/components/checklist.js
	var IS_POPUP_MINIMIZED = USER_PROGRESS.IS_POPUP_MINIMIZED;
	var Checklist = function Checklist(props) {
		var _useState2 = _slicedToArray((0, react.useState)(props.steps), 2);
		var steps = _useState2[0];
		var setSteps = _useState2[1];
		var _useState4 = _slicedToArray((0, react.useState)(!!props.userProgress[IS_POPUP_MINIMIZED]), 2);
		var isMinimized = _useState4[0];
		var setIsMinimized = _useState4[1];
		var toggleIsMinimized = /*#__PURE__*/ function() {
			var _ref = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
				var currState;
				return import_regenerator.default.wrap(function(_context) {
					while (1) switch (_context.prev = _context.next) {
						case 0:
							currState = isMinimized;
							_context.prev = 1;
							setIsMinimized(!currState);
							_context.next = 2;
							return updateUserProgress(_defineProperty({}, IS_POPUP_MINIMIZED, !currState));
						case 2:
							_context.next = 4;
							break;
						case 3:
							_context.prev = 3;
							_context["catch"](1);
							setIsMinimized(currState);
						case 4:
						case "end": return _context.stop();
					}
				}, _callee, null, [[1, 3]]);
			}));
			return function toggleIsMinimized() {
				return _ref.apply(this, arguments);
			};
		}();
		(0, react.useEffect)(function() {
			setSteps(props.steps);
		}, [props.steps]);
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Paper, {
			elevation: 5,
			sx: {
				position: "fixed",
				width: "360px",
				bottom: "40px",
				insetInlineEnd: "40px",
				zIndex: "99999",
				hidden: true,
				maxHeight: "645px",
				overflowY: "auto"
			}
		}, /*#__PURE__*/ react.default.createElement(Header, {
			steps,
			isMinimized,
			toggleIsMinimized
		}), /*#__PURE__*/ react.default.createElement(ChecklistWrapper, {
			steps,
			setSteps,
			isMinimized
		}));
	};
	Checklist.propTypes = {
		steps: import_prop_types.default.array.isRequired,
		userProgress: import_prop_types.default.object.isRequired
	};

//#endregion
//#region modules/checklist/assets/js/app/app.js
	var App = function App() {
		var isRTL = elementorCommon.config.isRTL;
		var _useQuery = (0, _elementor_query.useQuery)({
			queryKey: ["steps"],
			queryFn: fetchSteps,
			gcTime: 0,
			enabled: false
		});
		var stepsError = _useQuery.error;
		var steps = _useQuery.data;
		var refetchSteps = _useQuery.refetch;
		var _useQuery2 = (0, _elementor_query.useQuery)({
			queryKey: ["statusData"],
			queryFn: fetchUserProgress,
			gcTime: 0,
			enabled: false
		});
		var userProgressError = _useQuery2.error;
		var userProgress = _useQuery2.data;
		var refetchUserProgress = _useQuery2.refetch;
		var fetchData = function fetchData() {
			refetchSteps();
			refetchUserProgress();
		};
		(0, react.useEffect)(function() {
			fetchData();
			return (0, _elementor_editor_v1_adapters.__privateListenTo)((0, _elementor_editor_v1_adapters.commandEndEvent)("document/save/save"), function(_ref) {
				var _args$document;
				var args = _ref.args;
				if ("kit" === (args === null || args === void 0 || (_args$document = args.document) === null || _args$document === void 0 || (_args$document = _args$document.config) === null || _args$document === void 0 ? void 0 : _args$document.type)) fetchData();
			});
		}, []);
		if (userProgressError || !userProgress || stepsError || !(steps !== null && steps !== void 0 && steps.length)) return null;
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.DirectionProvider, { rtl: isRTL }, /*#__PURE__*/ react.default.createElement(_elementor_ui.ThemeProvider, { colorScheme: "light" }, /*#__PURE__*/ react.default.createElement(Checklist, {
			steps: _toConsumableArray(steps),
			userProgress
		})));
	};

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
//#region modules/checklist/assets/js/commands/toggle-popup.js
	var import_client = /* @__PURE__ */ __toESM(require_client());
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
	var queryClient$1 = new _elementor_query.QueryClient();
	var TogglePopup = /*#__PURE__*/ function(_$e$modules$CommandBa) {
		function TogglePopup() {
			_classCallCheck(this, TogglePopup);
			return _callSuper$4(this, TogglePopup, arguments);
		}
		_inherits(TogglePopup, _$e$modules$CommandBa);
		return _createClass(TogglePopup, [
			{
				key: "apply",
				value: function apply(args) {
					if (!TogglePopup.isOpen) this.mount();
					else this.unmount();
					TogglePopup.isOpen = !TogglePopup.isOpen;
					args.isOpen = TogglePopup.isOpen;
					updateUserProgress(_defineProperty({}, USER_PROGRESS.LAST_OPENED_TIMESTAMP, TogglePopup.isOpen));
				}
			},
			{
				key: "mount",
				value: function mount() {
					this.setRootElement();
					TogglePopup.rootElement.render(/*#__PURE__*/ react.default.createElement(_elementor_query.QueryClientProvider, { client: queryClient$1 }, /*#__PURE__*/ react.default.createElement(App, null)));
				}
			},
			{
				key: "unmount",
				value: function unmount() {
					TogglePopup.rootElement.unmount();
					document.body.removeChild(document.body.querySelector("#e-checklist"));
				}
			},
			{
				key: "setRootElement",
				value: function setRootElement() {
					var root = document.body.querySelector("#e-checklist");
					if (!root) {
						root = document.createElement("div");
						root.id = "e-checklist";
						document.body.appendChild(root);
					}
					TogglePopup.rootElement = import_client.createRoot(root);
				}
			}
		]);
	}($e.modules.CommandBase);
	_defineProperty(TogglePopup, "rootElement", null);
	_defineProperty(TogglePopup, "isOpen", false);

//#endregion
//#region modules/checklist/assets/js/commands/toggle-icon.js
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
	var ToggleIcon = /*#__PURE__*/ function(_$e$modules$CommandBa) {
		function ToggleIcon() {
			_classCallCheck(this, ToggleIcon);
			return _callSuper$3(this, ToggleIcon, arguments);
		}
		_inherits(ToggleIcon, _$e$modules$CommandBa);
		return _createClass(ToggleIcon, [{
			key: "apply",
			value: function apply(shouldShow) {
				document.body.querySelector("[aria-label=\"Checklist\"]").parentElement.style.display = shouldShow ? "block" : "none";
				if (!shouldShow && TogglePopup.isOpen) toggleChecklistPopup();
			}
		}]);
	}($e.modules.CommandBase);
	_defineProperty(ToggleIcon, "isSettingsOn", true);

//#endregion
//#region modules/checklist/assets/js/commands/index.js
	var commands_exports = /* @__PURE__ */ __exportAll({
		ToggleIcon: () => ToggleIcon,
		TogglePopup: () => TogglePopup
	});

//#endregion
//#region modules/checklist/assets/js/editor-app-bar-link.js
	var queryClient = new _elementor_query.QueryClient();
	var editorAppBarLink = function editorAppBarLink() {
		_elementor_editor_app_bar.utilitiesMenu.registerLink({
			id: "app-bar-menu-item-checklist",
			priority: 5,
			useProps: function useProps() {
				return {
					title: (0, _wordpress_i18n.__)("Checklist", "elementor"),
					icon: function icon() {
						return /*#__PURE__*/ react.createElement(_elementor_query.QueryClientProvider, { client: queryClient }, /*#__PURE__*/ react.createElement(TopBarIcon, null));
					},
					onClick: function onClick() {
						addMixpanelTrackingChecklistTopBar(TogglePopup.isOpen);
						toggleChecklistPopup();
					}
				};
			}
		});
	};

//#endregion
//#region modules/checklist/assets/js/commands-data/steps.js
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
	var Steps = /*#__PURE__*/ function(_$e$modules$CommandDa) {
		function Steps() {
			_classCallCheck(this, Steps);
			return _callSuper$2(this, Steps, arguments);
		}
		_inherits(Steps, _$e$modules$CommandDa);
		return _createClass(Steps, null, [{
			key: "getEndpointFormat",
			value: function getEndpointFormat() {
				return "checklist/steps/{id}";
			}
		}]);
	}($e.modules.CommandData);

//#endregion
//#region modules/checklist/assets/js/commands-data/user-progress.js
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
	var UserProgress = /*#__PURE__*/ function(_$e$modules$CommandDa) {
		function UserProgress() {
			_classCallCheck(this, UserProgress);
			return _callSuper$1(this, UserProgress, arguments);
		}
		_inherits(UserProgress, _$e$modules$CommandDa);
		return _createClass(UserProgress, null, [{
			key: "getEndpointFormat",
			value: function getEndpointFormat() {
				return "checklist/user-progress";
			}
		}]);
	}($e.modules.CommandData);

//#endregion
//#region modules/checklist/assets/js/commands-data/index.js
	var commands_data_exports = /* @__PURE__ */ __exportAll({
		Steps: () => Steps,
		UserProgress: () => UserProgress
	});

//#endregion
//#region modules/checklist/assets/js/component.js
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
	var Component = /*#__PURE__*/ function(_$e$modules$Component) {
		function Component() {
			_classCallCheck(this, Component);
			return _callSuper(this, Component, arguments);
		}
		_inherits(Component, _$e$modules$Component);
		return _createClass(Component, [
			{
				key: "getNamespace",
				value: function getNamespace() {
					return "checklist";
				}
			},
			{
				key: "defaultCommands",
				value: function defaultCommands() {
					return this.importCommands(commands_exports);
				}
			},
			{
				key: "defaultData",
				value: function defaultData() {
					return this.importCommands(commands_data_exports);
				}
			}
		], [{
			key: "getEndpointFormat",
			value: function getEndpointFormat() {
				return "checklist";
			}
		}]);
	}($e.modules.ComponentBase);

//#endregion
//#region modules/checklist/assets/js/editor.js
	$e.components.register(new Component());
	editorAppBarLink();
	elementorCommon.elements.$window.on("elementor:loaded", elementorLoaded);
	function elementorLoaded() {
		elementor.on("document:loaded", checklistStartup);
		elementorCommon.elements.$window.off("elementor:loaded", elementorLoaded);
	}
	function checklistStartup() {
		return _checklistStartup.apply(this, arguments);
	}
	function _checklistStartup() {
		_checklistStartup = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
			var shouldHide;
			var userProgress;
			return import_regenerator.default.wrap(function(_context) {
				while (1) switch (_context.prev = _context.next) {
					case 0:
						shouldHide = "yes" !== elementor.getPreferences("show_launchpad_checklist");
						if (!shouldHide) {
							_context.next = 1;
							break;
						}
						$e.commands.run("checklist/toggle-icon", false);
						_context.next = 3;
						break;
					case 1:
						_context.next = 2;
						return fetchUserProgress();
					case 2:
						userProgress = _context.sent;
						if (userProgress !== null && userProgress !== void 0 && userProgress[USER_PROGRESS.SHOULD_OPEN_IN_EDITOR]) {
							toggleChecklistPopup();
							dispatchChecklistOpenEvent();
						}
					case 3: elementor.off("document:loaded", checklistStartup);
					case 4:
					case "end": return _context.stop();
				}
			}, _callee);
		}));
		return _checklistStartup.apply(this, arguments);
	}

//#endregion
})(elementorV2.editorAppBar, wp.i18n, React, elementorV2.query, elementorV2.editorV1Adapters, elementorV2.icons['RocketIcon'], elementorV2.ui, elementorV2.icons);
//# sourceMappingURL=checklist.js.map