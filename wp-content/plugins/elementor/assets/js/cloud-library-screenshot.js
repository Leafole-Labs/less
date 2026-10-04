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
	__name(asyncGeneratorStep$1, "asyncGeneratorStep");
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
	__name(_asyncToGenerator$1, "_asyncToGenerator");

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
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/asyncToGenerator.js
var import_regenerator = /* @__PURE__ */ __toESM(require_regenerator());
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
	var uuid = (() => {
		let counter = 0;
		const random = () => `0000${(Math.random() * Math.pow(36, 4) << 0).toString(36)}`.slice(-4);
		return () => {
			counter += 1;
			return `u${random()}${counter}`;
		};
	})();
	function toArray(arrayLike) {
		const arr = [];
		for (let i = 0, l = arrayLike.length; i < l; i++) arr.push(arrayLike[i]);
		return arr;
	}
	var styleProps = null;
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
	var canvasDimensionLimit = 16384;
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
	var isInstanceOfElement = (node, instance) => {
		if (node instanceof instance) return true;
		const nodePrototype = Object.getPrototypeOf(node);
		if (nodePrototype === null) return false;
		return nodePrototype.constructor.name === instance.name || isInstanceOfElement(nodePrototype, instance);
	};

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

//#endregion
//#region node_modules/html-to-image/es/mimes.js
	var WOFF = "application/font-woff";
	var JPEG = "image/jpeg";
	var mimes = {
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
	function getExtension(url) {
		const match = /\.([^./]*?)$/g.exec(url);
		return match ? match[1] : "";
	}
	function getMimeType(url) {
		const extension = getExtension(url).toLowerCase();
		return mimes[extension] || "";
	}

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
	var cache = {};
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
	var isSlotElement = (node) => node.tagName != null && node.tagName.toUpperCase() === "SLOT";
	var isSVGElement = (node) => node.tagName != null && node.tagName.toUpperCase() === "SVG";
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

//#endregion
//#region node_modules/html-to-image/es/embed-resources.js
	var URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
	var URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
	var FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
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

//#endregion
//#region node_modules/html-to-image/es/embed-webfonts.js
	var cssFetchCache = {};
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

//#endregion
//#region modules/cloud-library/assets/js/preview/screenshot.js
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
	var Screenshot = /*#__PURE__*/ function(_elementorModules$Vie) {
		function Screenshot() {
			_classCallCheck(this, Screenshot);
			return _callSuper(this, Screenshot, arguments);
		}
		_inherits(Screenshot, _elementorModules$Vie);
		return _createClass(Screenshot, [
			{
				key: "getDefaultSettings",
				value: function getDefaultSettings() {
					return _objectSpread({
						timeout: 15e3,
						render_timeout: 5e3,
						image_quality: .15,
						image_placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
					}, ElementorScreenshotConfig);
				}
			},
			{
				key: "getDefaultElements",
				value: function getDefaultElements() {
					return { $elementor: jQuery(ElementorScreenshotConfig.selector) };
				}
			},
			{
				key: "onInit",
				value: function onInit() {
					var _this = this;
					_superPropGet(Screenshot, "onInit", this, 3)([]);
					/**
					* Hold the timeout timer
					*
					* @type {number|null}
					*/
					this.timeoutTimer = setTimeout(function() {
						_this.screenshotFailed(/* @__PURE__ */ new Error("Screenshot timeout reached"));
					}, this.getSettings("timeout"));
					return this.captureScreenshot();
				}
			},
			{
				key: "captureScreenshot",
				value: function captureScreenshot() {
					var _this2 = this;
					return Promise.resolve().then(function() {
						return _this2.createImage();
					}).then(function(imageData) {
						return _this2.save(imageData);
					}).then(function(url) {
						return _this2.screenshotSucceed(url);
					}).catch(function(error) {
						return _this2.screenshotFailed(error);
					});
				}
			},
			{
				key: "createImage",
				value: function() {
					var _createImage = _asyncToGenerator$1(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
						var _this3 = this;
						var pageLoadedPromise;
						var timeOutPromise;
						var $elementorElement;
						var bodyStyle;
						var bodyBackgroundColor;
						var canvas;
						return import_regenerator.default.wrap(function(_context) {
							while (1) switch (_context.prev = _context.next) {
								case 0:
									pageLoadedPromise = new Promise(function(resolve) {
										window.addEventListener("load", function() {
											return resolve();
										});
									});
									timeOutPromise = new Promise(function(resolve) {
										setTimeout(function() {
											return resolve();
										}, _this3.getSettings("render_timeout"));
									});
									_context.next = 1;
									return Promise.race([pageLoadedPromise, timeOutPromise]);
								case 1:
									$elementorElement = this.elements.$elementor;
									if (!$elementorElement.length) $elementorElement = jQuery(ElementorScreenshotConfig.selector);
									if (!$elementorElement.length) $elementorElement = jQuery("body > div.elementor:not(.elementor-location-header):not(.elementor-location-footer)");
									if ($elementorElement.length) {
										_context.next = 2;
										break;
									}
									throw new Error("Elementor container not found. Selector: " + ElementorScreenshotConfig.selector);
								case 2:
									this.preprocessLazyImages($elementorElement);
									bodyStyle = window.getComputedStyle(document.body);
									bodyBackgroundColor = bodyStyle.backgroundColor;
									_context.next = 3;
									return toCanvas($elementorElement[0], {
										quality: this.getSettings("image_quality"),
										imagePlaceholder: this.getSettings("image_placeholder"),
										backgroundColor: bodyBackgroundColor || null,
										style: {
											transform: "scale(1)",
											transformOrigin: "top left"
										}
									});
								case 3:
									canvas = _context.sent;
									return _context.abrupt("return", canvas.toDataURL("image/webp", this.getSettings("image_quality")));
								case 4:
								case "end": return _context.stop();
							}
						}, _callee, this);
					}));
					function createImage() {
						return _createImage.apply(this, arguments);
					}
					return createImage;
				}()
			},
			{
				key: "preprocessLazyImages",
				value: function preprocessLazyImages($element) {
					$element.find("img[data-src], img.swiper-lazy, img.lazy").each(function(index, img) {
						var $img = jQuery(img);
						if ($img.attr("data-src")) {
							$img.attr("src", $img.attr("data-src"));
							$img.removeAttr("data-src");
						}
						$img.removeClass("swiper-lazy lazy swiper-slide-image");
						$img.removeAttr("loading");
						$img.removeAttr("data-srcset");
					});
				}
			},
			{
				key: "save",
				value: function save(dataUrl) {
					var _this$getSaveAction = this.getSaveAction();
					var key = _this$getSaveAction.key;
					var action = _this$getSaveAction.action;
					var data = _defineProperty(_defineProperty({}, key, this.getSettings(key)), "screenshot", dataUrl);
					return new Promise(function(resolve, reject) {
						if ("kit_id" === key) return resolve(data.screenshot);
						elementorCommon.ajax.addRequest(action, {
							data,
							success: function success(url) {
								return resolve(url);
							},
							error: function error() {
								return reject();
							}
						});
					});
				}
			},
			{
				key: "markAsFailed",
				value: function markAsFailed(e) {
					var _this4 = this;
					return new Promise(function(resolve, reject) {
						var templateId = _this4.getSettings("template_id");
						var postId = _this4.getSettings("post_id");
						if (_this4.getSettings("kit_id")) resolve();
						else {
							var route = templateId ? "template_screenshot_failed" : "screenshot_failed";
							var data = templateId ? {
								template_id: templateId,
								error: e.message || e.toString()
							} : { post_id: postId };
							elementorCommon.ajax.addRequest(route, {
								data,
								success: function success() {
									return resolve();
								},
								error: function error() {
									return reject();
								}
							});
						}
					});
				}
			},
			{
				key: "screenshotSucceed",
				value: function screenshotSucceed(imageUrl) {
					this.screenshotDone(true, imageUrl);
				}
			},
			{
				key: "screenshotFailed",
				value: function screenshotFailed(e) {
					var _this5 = this;
					this.markAsFailed(e).then(function() {
						return _this5.screenshotDone(false);
					});
				}
			},
			{
				key: "screenshotDone",
				value: function screenshotDone(success) {
					var imageUrl = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
					clearTimeout(this.timeoutTimer);
					this.timeoutTimer = null;
					var _this$getSaveAction2 = this.getSaveAction();
					var message = _this$getSaveAction2.message;
					var key = _this$getSaveAction2.key;
					window.parent.postMessage({
						name: message,
						success,
						id: this.getSettings(key),
						imageUrl
					}, "*");
				}
			},
			{
				key: "getSaveAction",
				value: function getSaveAction() {
					var config = this.getSettings();
					if (config.kit_id) return {
						message: "kit-screenshot-done",
						action: "update_kit_preview",
						key: "kit_id"
					};
					if (config.template_id) return {
						message: "library/capture-screenshot-done",
						action: "save_template_screenshot",
						key: "template_id"
					};
					return {
						message: "capture-screenshot-done",
						action: "screenshot_save",
						key: "post_id"
					};
				}
			}
		]);
	}(elementorModules.ViewModule);
	jQuery(function() {
		new Screenshot();
	});

//#endregion
})();
//# sourceMappingURL=cloud-library-screenshot.js.map