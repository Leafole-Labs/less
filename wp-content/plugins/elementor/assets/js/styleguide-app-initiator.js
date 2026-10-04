(function(react, react_dom, _wordpress_i18n) {

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
react = __toESM(react);
react_dom = __toESM(react_dom);

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
//#region node_modules/react-dom/client.js
	var require_client = /* @__PURE__ */ __commonJSMin(((exports) => {
		var m$1 = (globalThis.ReactDOM);
		var i = m$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
		exports.createRoot = function(c, o) {
			i.usingClientEntryPoint = true;
			try {
				return m$1.createRoot(c, o);
			} finally {
				i.usingClientEntryPoint = false;
			}
		};
	}));

//#endregion
//#region assets/dev/js/utils/react.js
var import_regenerator = /* @__PURE__ */ __toESM(require_regenerator());
	var import_client = require_client();
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
	var react_default = { render };

//#endregion
//#region \0vite/preload-helper.js
	var scriptRel = "modulepreload";
	var assetsURL = function(dep) {
		return "/" + dep;
	};
	var seen = {};
	var __vitePreload = function preload(baseModule, deps, importerUrl) {
		let promise = Promise.resolve();
		if (false              && deps && deps.length > 0) {
			const links = document.getElementsByTagName("link");
			const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
			const cspNonce = (cspNonceMeta === null || cspNonceMeta === void 0 ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta === null || cspNonceMeta === void 0 ? void 0 : cspNonceMeta.getAttribute("nonce"));
			function allSettled(promises) {
				return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
					status: "fulfilled",
					value
				}), (reason) => ({
					status: "rejected",
					reason
				}))));
			}
			function importMetaResolve(specifier) {
				if ({}.resolve) return {}.resolve(specifier);
				return new URL(
					specifier,
					/** #__KEEP__ */
					{}.url
				).href;
			}
			promise = allSettled(deps.map((dep) => {
				dep = assetsURL(dep, importerUrl);
				dep = importMetaResolve(dep);
				if (dep in seen) return;
				seen[dep] = true;
				const isCss = dep.endsWith(".css");
				for (let i = links.length - 1; i >= 0; i--) {
					const link = links[i];
					if (link.href === dep && (!isCss || link.rel === "stylesheet")) return;
				}
				const link = document.createElement("link");
				link.rel = isCss ? "stylesheet" : scriptRel;
				if (!isCss) link.as = "script";
				link.crossOrigin = "";
				link.href = dep;
				if (cspNonce) link.setAttribute("nonce", cspNonce);
				document.head.appendChild(link);
				if (isCss) return new Promise((res, rej) => {
					link.addEventListener("load", res);
					link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
				});
			}));
		}
		function handlePreloadError(err) {
			const e = new Event("vite:preloadError", { cancelable: true });
			e.payload = err;
			window.dispatchEvent(e);
			if (!e.defaultPrevented) throw err;
		}
		return promise.then((res) => {
			for (const item of res || []) {
				if (item.status !== "rejected") continue;
				handlePreloadError(item.reason);
			}
			return baseModule().catch(handlePreloadError);
		});
	};

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
	function _taggedTemplateLiteral(e, t) {
		return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
	}
	var init_taggedTemplateLiteral = __esmMin((() => {}));

//#endregion
//#region node_modules/styled-components/node_modules/tslib/tslib.es6.mjs
	function __spreadArray(to, from, pack) {
		if (pack || arguments.length === 2) {
			for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
				if (!ar) ar = Array.prototype.slice.call(from, 0, i);
				ar[i] = from[i];
			}
		}
		return to.concat(ar || Array.prototype.slice.call(from));
	}
	var __assign;
	var init_tslib_es6 = __esmMin((() => {
		__assign = function() {
			__assign = Object.assign || function __assign(t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i];
					for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
				}
				return t;
			};
			return __assign.apply(this, arguments);
		};
	}));

//#endregion
//#region node_modules/styled-components/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
	function memoize(fn) {
		var cache = Object.create(null);
		return function(arg) {
			if (cache[arg] === void 0) cache[arg] = fn(arg);
			return cache[arg];
		};
	}
	var init_emotion_memoize_esm = __esmMin((() => {}));

//#endregion
//#region node_modules/styled-components/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
	var reactPropsRegex, isPropValid;
	var init_emotion_is_prop_valid_esm = __esmMin((() => {
		init_emotion_memoize_esm();
		reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
		isPropValid = /* #__PURE__ */ memoize(function(prop) {
			return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
		});
	}));

//#endregion
//#region node_modules/shallowequal/index.js
	var require_shallowequal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function shallowEqual(objA, objB, compare, compareContext) {
			var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
			if (ret !== void 0) return !!ret;
			if (objA === objB) return true;
			if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) return false;
			var keysA = Object.keys(objA);
			var keysB = Object.keys(objB);
			if (keysA.length !== keysB.length) return false;
			var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
			for (var idx = 0; idx < keysA.length; idx++) {
				var key = keysA[idx];
				if (!bHasOwnProperty(key)) return false;
				var valueA = objA[key];
				var valueB = objB[key];
				ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
				if (ret === false || ret === void 0 && valueA !== valueB) return false;
			}
			return true;
		};
	}));

//#endregion
//#region node_modules/styled-components/node_modules/stylis/src/Enum.js
	var MS, MOZ, WEBKIT, COMMENT, RULESET, DECLARATION, IMPORT, KEYFRAMES, LAYER;
	var init_Enum = __esmMin((() => {
		MS = "-ms-";
		MOZ = "-moz-";
		WEBKIT = "-webkit-";
		COMMENT = "comm";
		RULESET = "rule";
		DECLARATION = "decl";
		IMPORT = "@import";
		KEYFRAMES = "@keyframes";
		LAYER = "@layer";
	}));

//#endregion
//#region node_modules/styled-components/node_modules/stylis/src/Utility.js
/**
	* @param {string} value
	* @param {number} length
	* @return {number}
	*/
	function hash(value, length) {
		return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
	}
	/**
	* @param {string} value
	* @return {string}
	*/
	function trim(value) {
		return value.trim();
	}
	/**
	* @param {string} value
	* @param {RegExp} pattern
	* @return {string?}
	*/
	function match(value, pattern) {
		return (value = pattern.exec(value)) ? value[0] : value;
	}
	/**
	* @param {string} value
	* @param {(string|RegExp)} pattern
	* @param {string} replacement
	* @return {string}
	*/
	function replace(value, pattern, replacement) {
		return value.replace(pattern, replacement);
	}
	/**
	* @param {string} value
	* @param {string} search
	* @param {number} position
	* @return {number}
	*/
	function indexof(value, search, position) {
		return value.indexOf(search, position);
	}
	/**
	* @param {string} value
	* @param {number} index
	* @return {number}
	*/
	function charat(value, index) {
		return value.charCodeAt(index) | 0;
	}
	/**
	* @param {string} value
	* @param {number} begin
	* @param {number} end
	* @return {string}
	*/
	function substr(value, begin, end) {
		return value.slice(begin, end);
	}
	/**
	* @param {string} value
	* @return {number}
	*/
	function strlen(value) {
		return value.length;
	}
	/**
	* @param {any[]} value
	* @return {number}
	*/
	function sizeof(value) {
		return value.length;
	}
	/**
	* @param {any} value
	* @param {any[]} array
	* @return {any}
	*/
	function append(value, array) {
		return array.push(value), value;
	}
	/**
	* @param {string[]} array
	* @param {function} callback
	* @return {string}
	*/
	function combine(array, callback) {
		return array.map(callback).join("");
	}
	/**
	* @param {string[]} array
	* @param {RegExp} pattern
	* @return {string[]}
	*/
	function filter(array, pattern) {
		return array.filter(function(value) {
			return !match(value, pattern);
		});
	}
	var abs, from, assign;
	var init_Utility = __esmMin((() => {
		abs = Math.abs;
		from = String.fromCharCode;
		assign = Object.assign;
	}));

//#endregion
//#region node_modules/styled-components/node_modules/stylis/src/Tokenizer.js
/**
	* @param {string} value
	* @param {object | null} root
	* @param {object | null} parent
	* @param {string} type
	* @param {string[] | string} props
	* @param {object[] | string} children
	* @param {object[]} siblings
	* @param {number} length
	*/
	function node(value, root, parent, type, props, children, length, siblings) {
		return {
			value,
			root,
			parent,
			type,
			props,
			children,
			line,
			column,
			length,
			return: "",
			siblings
		};
	}
	/**
	* @param {object} root
	* @param {object} props
	* @return {object}
	*/
	function copy(root, props) {
		return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
	}
	/**
	* @param {object} root
	*/
	function lift(root) {
		while (root.root) root = copy(root.root, { children: [root] });
		append(root, root.siblings);
	}
	/**
	* @return {number}
	*/
	function char() {
		return character;
	}
	/**
	* @return {number}
	*/
	function prev() {
		character = position > 0 ? charat(characters, --position) : 0;
		if (column--, character === 10) column = 1, line--;
		return character;
	}
	/**
	* @return {number}
	*/
	function next() {
		character = position < length ? charat(characters, position++) : 0;
		if (column++, character === 10) column = 1, line++;
		return character;
	}
	/**
	* @return {number}
	*/
	function peek() {
		return charat(characters, position);
	}
	/**
	* @return {number}
	*/
	function caret() {
		return position;
	}
	/**
	* @param {number} begin
	* @param {number} end
	* @return {string}
	*/
	function slice(begin, end) {
		return substr(characters, begin, end);
	}
	/**
	* @param {number} type
	* @return {number}
	*/
	function token(type) {
		switch (type) {
			case 0:
			case 9:
			case 10:
			case 13:
			case 32: return 5;
			case 33:
			case 43:
			case 44:
			case 47:
			case 62:
			case 64:
			case 126:
			case 59:
			case 123:
			case 125: return 4;
			case 58: return 3;
			case 34:
			case 39:
			case 40:
			case 91: return 2;
			case 41:
			case 93: return 1;
		}
		return 0;
	}
	/**
	* @param {string} value
	* @return {any[]}
	*/
	function alloc(value) {
		return line = column = 1, length = strlen(characters = value), position = 0, [];
	}
	/**
	* @param {any} value
	* @return {any}
	*/
	function dealloc(value) {
		return characters = "", value;
	}
	/**
	* @param {number} type
	* @return {string}
	*/
	function delimit(type) {
		return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
	}
	/**
	* @param {number} type
	* @return {string}
	*/
	function whitespace(type) {
		while (character = peek()) if (character < 33) next();
		else break;
		return token(type) > 2 || token(character) > 3 ? "" : " ";
	}
	/**
	* @param {number} index
	* @param {number} count
	* @return {string}
	*/
	function escaping(index, count) {
		while (--count && next()) if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
		return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
	}
	/**
	* @param {number} type
	* @return {number}
	*/
	function delimiter(type) {
		while (next()) switch (character) {
			case type: return position;
			case 34:
			case 39:
				if (type !== 34 && type !== 39) delimiter(character);
				break;
			case 40:
				if (type === 41) delimiter(type);
				break;
			case 92:
				next();
				break;
		}
		return position;
	}
	/**
	* @param {number} type
	* @param {number} index
	* @return {number}
	*/
	function commenter(type, index) {
		while (next()) if (type + character === 57) break;
		else if (type + character === 84 && peek() === 47) break;
		return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
	}
	/**
	* @param {number} index
	* @return {string}
	*/
	function identifier(index) {
		while (!token(peek())) next();
		return slice(index, position);
	}
	var line, column, length, position, character, characters;
	var init_Tokenizer = __esmMin((() => {
		init_Utility();
		line = 1;
		column = 1;
		length = 0;
		position = 0;
		character = 0;
		characters = "";
	}));

//#endregion
//#region node_modules/styled-components/node_modules/stylis/src/Parser.js
/**
	* @param {string} value
	* @return {object[]}
	*/
	function compile(value) {
		return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
	}
	/**
	* @param {string} value
	* @param {object} root
	* @param {object?} parent
	* @param {string[]} rule
	* @param {string[]} rules
	* @param {string[]} rulesets
	* @param {number[]} pseudo
	* @param {number[]} points
	* @param {string[]} declarations
	* @return {object}
	*/
	function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
		var index = 0;
		var offset = 0;
		var length = pseudo;
		var atrule = 0;
		var property = 0;
		var previous = 0;
		var variable = 1;
		var scanning = 1;
		var ampersand = 1;
		var character = 0;
		var type = "";
		var props = rules;
		var children = rulesets;
		var reference = rule;
		var characters = type;
		while (scanning) switch (previous = character, character = next()) {
			case 40: if (previous != 108 && charat(characters, length - 1) == 58) {
				if (indexof(characters += replace(delimit(character), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1) ampersand = -1;
				break;
			}
			case 34:
			case 39:
			case 91:
				characters += delimit(character);
				break;
			case 9:
			case 10:
			case 13:
			case 32:
				characters += whitespace(previous);
				break;
			case 92:
				characters += escaping(caret() - 1, 7);
				continue;
			case 47:
				switch (peek()) {
					case 42:
					case 47:
						append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
						break;
					default: characters += "/";
				}
				break;
			case 123 * variable: points[index++] = strlen(characters) * ampersand;
			case 125 * variable:
			case 59:
			case 0:
				switch (character) {
					case 0:
					case 125: scanning = 0;
					case 59 + offset:
						if (ampersand == -1) characters = replace(characters, /\f/g, "");
						if (property > 0 && strlen(characters) - length) append(property > 32 ? declaration(characters + ";", rule, parent, length - 1, declarations) : declaration(replace(characters, " ", "") + ";", rule, parent, length - 2, declarations), declarations);
						break;
					case 59: characters += ";";
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);
						if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
						else switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
							case 100:
							case 108:
							case 109:
							case 115:
								parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
								break;
							default: parse(characters, reference, reference, reference, [""], children, 0, points, children);
						}
				}
				index = offset = property = 0, variable = ampersand = 1, type = characters = "", length = pseudo;
				break;
			case 58: length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1) {
					if (character == 123) --variable;
					else if (character == 125 && variable++ == 0 && prev() == 125) continue;
				}
				switch (characters += from(character), character * variable) {
					case 38:
						ampersand = offset > 0 ? 1 : (characters += "\f", -1);
						break;
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break;
					case 64:
						if (peek() === 45) characters += delimit(next());
						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
						break;
					case 45: if (previous === 45 && strlen(characters) == 2) variable = 0;
				}
		}
		return rulesets;
	}
	/**
	* @param {string} value
	* @param {object} root
	* @param {object?} parent
	* @param {number} index
	* @param {number} offset
	* @param {string[]} rules
	* @param {number[]} points
	* @param {string} type
	* @param {string[]} props
	* @param {string[]} children
	* @param {number} length
	* @param {object[]} siblings
	* @return {object}
	*/
	function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
		var post = offset - 1;
		var rule = offset === 0 ? rules : [""];
		var size = sizeof(rule);
		for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
		return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length, siblings);
	}
	/**
	* @param {number} value
	* @param {object} root
	* @param {object?} parent
	* @param {object[]} siblings
	* @return {object}
	*/
	function comment(value, root, parent, siblings) {
		return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
	}
	/**
	* @param {string} value
	* @param {object} root
	* @param {object?} parent
	* @param {number} length
	* @param {object[]} siblings
	* @return {object}
	*/
	function declaration(value, root, parent, length, siblings) {
		return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings);
	}
	var init_Parser = __esmMin((() => {
		init_Enum();
		init_Utility();
		init_Tokenizer();
	}));

//#endregion
//#region node_modules/styled-components/node_modules/stylis/src/Prefixer.js
/**
	* @param {string} value
	* @param {number} length
	* @param {object[]} children
	* @return {string}
	*/
	function prefix(value, length, children) {
		switch (hash(value, length)) {
			case 5103: return WEBKIT + "print-" + value + value;
			case 5737:
			case 4201:
			case 3177:
			case 3433:
			case 1641:
			case 4457:
			case 2921:
			case 5572:
			case 6356:
			case 5844:
			case 3191:
			case 6645:
			case 3005:
			case 6391:
			case 5879:
			case 5623:
			case 6135:
			case 4599:
			case 4855:
			case 4215:
			case 6389:
			case 5109:
			case 5365:
			case 5621:
			case 3829: return WEBKIT + value + value;
			case 4789: return MOZ + value + value;
			case 5349:
			case 4246:
			case 4810:
			case 6968:
			case 2756: return WEBKIT + value + MOZ + value + MS + value + value;
			case 5936: switch (charat(value, length + 11)) {
				case 114: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
				case 108: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
				case 45: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
			}
			case 6828:
			case 4268:
			case 2903: return WEBKIT + value + MS + value + value;
			case 6165: return WEBKIT + value + MS + "flex-" + value + value;
			case 5187: return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
			case 5443: return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
			case 4675: return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
			case 5548: return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
			case 5292: return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
			case 6060: return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
			case 4554: return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
			case 6187: return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
			case 5495:
			case 3959: return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
			case 4968: return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
			case 4200:
				if (!match(value, /flex-|baseline/)) return MS + "grid-column-align" + substr(value, length) + value;
				break;
			case 2592:
			case 3360: return MS + replace(value, "template-", "") + value;
			case 4384:
			case 3616:
				if (children && children.some(function(element, index) {
					return length = index, match(element.props, /grid-\w+-end/);
				})) return ~indexof(value + (children = children[length].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
				return MS + replace(value, "-start", "") + value;
			case 4896:
			case 4128: return children && children.some(function(element) {
				return match(element.props, /grid-\w+-start/);
			}) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
			case 4095:
			case 3583:
			case 4068:
			case 2532: return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
			case 8116:
			case 7059:
			case 5753:
			case 5535:
			case 5445:
			case 5701:
			case 4933:
			case 4677:
			case 5533:
			case 5789:
			case 5021:
			case 4765:
				if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
					case 109: if (charat(value, length + 4) !== 45) break;
					case 102: return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
					case 115: return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length, children) + value : value;
				}
				break;
			case 5152:
			case 5920: return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_, a, b, c, d, e, f) {
				return MS + a + ":" + b + f + (c ? MS + a + "-span:" + (d ? e : +e - +b) + f : "") + value;
			});
			case 4949:
				if (charat(value, length + 6) === 121) return replace(value, ":", ":" + WEBKIT) + value;
				break;
			case 6444:
				switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
					case 120: return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
					case 100: return replace(value, ":", ":" + MS) + value;
				}
				break;
			case 5719:
			case 2647:
			case 2135:
			case 3927:
			case 2391: return replace(value, "scroll-", "scroll-snap-") + value;
		}
		return value;
	}
	var init_Prefixer = __esmMin((() => {
		init_Enum();
		init_Utility();
	}));

//#endregion
//#region node_modules/styled-components/node_modules/stylis/src/Serializer.js
/**
	* @param {object[]} children
	* @param {function} callback
	* @return {string}
	*/
	function serialize(children, callback) {
		var output = "";
		for (var i = 0; i < children.length; i++) output += callback(children[i], i, children, callback) || "";
		return output;
	}
	/**
	* @param {object} element
	* @param {number} index
	* @param {object[]} children
	* @param {function} callback
	* @return {string}
	*/
	function stringify(element, index, children, callback) {
		switch (element.type) {
			case LAYER: if (element.children.length) break;
			case IMPORT:
			case DECLARATION: return element.return = element.return || element.value;
			case COMMENT: return "";
			case KEYFRAMES: return element.return = element.value + "{" + serialize(element.children, callback) + "}";
			case RULESET: if (!strlen(element.value = element.props.join(","))) return "";
		}
		return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
	}
	var init_Serializer = __esmMin((() => {
		init_Enum();
		init_Utility();
	}));

//#endregion
//#region node_modules/styled-components/node_modules/stylis/src/Middleware.js
/**
	* @param {function[]} collection
	* @return {function}
	*/
	function middleware(collection) {
		var length = sizeof(collection);
		return function(element, index, children, callback) {
			var output = "";
			for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || "";
			return output;
		};
	}
	/**
	* @param {function} callback
	* @return {function}
	*/
	function rulesheet(callback) {
		return function(element) {
			if (!element.root) {
				if (element = element.return) callback(element);
			}
		};
	}
	/**
	* @param {object} element
	* @param {number} index
	* @param {object[]} children
	* @param {function} callback
	*/
	function prefixer(element, index, children, callback) {
		if (element.length > -1) {
			if (!element.return) switch (element.type) {
				case DECLARATION:
					element.return = prefix(element.value, element.length, children);
					return;
				case KEYFRAMES: return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
				case RULESET: if (element.length) return combine(children = element.props, function(value) {
					switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
						case ":read-only":
						case ":read-write":
							lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
							lift(copy(element, { props: [value] }));
							assign(element, { props: filter(children, callback) });
							break;
						case "::placeholder":
							lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
							lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
							lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
							lift(copy(element, { props: [value] }));
							assign(element, { props: filter(children, callback) });
							break;
					}
					return "";
				});
			}
		}
	}
	var init_Middleware = __esmMin((() => {
		init_Enum();
		init_Utility();
		init_Tokenizer();
		init_Serializer();
		init_Prefixer();
	}));

//#endregion
//#region node_modules/styled-components/node_modules/stylis/index.js
	var init_stylis = __esmMin((() => {
		init_Enum();
		init_Utility();
		init_Parser();
		init_Prefixer();
		init_Tokenizer();
		init_Serializer();
		init_Middleware();
	}));

//#endregion
//#region node_modules/styled-components/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
	var unitlessKeys;
	var init_emotion_unitless_esm = __esmMin((() => {
		unitlessKeys = {
			animationIterationCount: 1,
			aspectRatio: 1,
			borderImageOutset: 1,
			borderImageSlice: 1,
			borderImageWidth: 1,
			boxFlex: 1,
			boxFlexGroup: 1,
			boxOrdinalGroup: 1,
			columnCount: 1,
			columns: 1,
			flex: 1,
			flexGrow: 1,
			flexPositive: 1,
			flexShrink: 1,
			flexNegative: 1,
			flexOrder: 1,
			gridRow: 1,
			gridRowEnd: 1,
			gridRowSpan: 1,
			gridRowStart: 1,
			gridColumn: 1,
			gridColumnEnd: 1,
			gridColumnSpan: 1,
			gridColumnStart: 1,
			msGridRow: 1,
			msGridRowSpan: 1,
			msGridColumn: 1,
			msGridColumnSpan: 1,
			fontWeight: 1,
			lineHeight: 1,
			opacity: 1,
			order: 1,
			orphans: 1,
			tabSize: 1,
			widows: 1,
			zIndex: 1,
			zoom: 1,
			WebkitLineClamp: 1,
			fillOpacity: 1,
			floodOpacity: 1,
			stopOpacity: 1,
			strokeDasharray: 1,
			strokeDashoffset: 1,
			strokeMiterlimit: 1,
			strokeOpacity: 1,
			strokeWidth: 1
		};
	}));

//#endregion
//#region node_modules/styled-components/dist/styled-components.browser.esm.js
	function I(e, t, n) {
		return void 0 === n && (n = C), e.theme !== n.theme && e.theme || t || n.theme;
	}
	function R(e) {
		return e.replace(O, "-").replace(D, "");
	}
	function x(e) {
		var t;
		var n = "";
		for (t = Math.abs(e); t > k; t = t / k | 0) n = j(t % k) + n;
		return (j(t % k) + n).replace(T, "$1-$2");
	}
	function $(e) {
		return x(z(e) >>> 0);
	}
	function B(e) {
		return "string" == typeof e && e || e.displayName || e.name || "Component";
	}
	function L(e) {
		return "string" == typeof e && e.charAt(0) === e.charAt(0).toLowerCase();
	}
	function X(e) {
		return ("type" in (t = e) && t.type.$$typeof) === Y ? U : "$$typeof" in e ? J[e.$$typeof] : q;
		var t;
	}
	function oe(e, t, n) {
		if ("string" != typeof t) {
			if (ne) {
				var o = te(t);
				o && o !== ne && oe(e, o, n);
			}
			var r = K(t);
			Q && (r = r.concat(Q(t)));
			for (var s = X(e), i = X(t), a = 0; a < r.length; ++a) {
				var c = r[a];
				if (!(c in H || n && n[c] || i && c in i || s && c in s)) {
					var l = ee(t, c);
					try {
						Z(e, c, l);
					} catch (e) {}
				}
			}
		}
		return e;
	}
	function re(e) {
		return "function" == typeof e;
	}
	function se(e) {
		return "object" == typeof e && "styledComponentId" in e;
	}
	function ie(e, t) {
		return e && t ? "".concat(e, " ").concat(t) : e || t || "";
	}
	function ae(e, t) {
		if (0 === e.length) return "";
		for (var n = e[0], o = 1; o < e.length; o++) n += t ? t + e[o] : e[o];
		return n;
	}
	function ce(e) {
		return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
	}
	function le(e, t, n) {
		if (void 0 === n && (n = !1), !n && !ce(e) && !Array.isArray(e)) return t;
		if (Array.isArray(t)) for (var o = 0; o < t.length; o++) e[o] = le(e[o], t[o]);
		else if (ce(t)) for (var o in t) e[o] = le(e[o], t[o]);
		return e;
	}
	function ue(e, t) {
		Object.defineProperty(e, "toString", { value: t });
	}
	function de() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		for (var n = e[0], o = [], r = 1, s = e.length; r < s; r += 1) o.push(e[r]);
		return o.forEach(function(e) {
			n = n.replace(/%[a-z]/, e);
		}), n;
	}
	function he(t) {
		for (var n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
		return new Error(de.apply(void 0, __spreadArray([pe[t]], n, !1)).trim());
	}
	function Ce() {
		return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
	}
	function Ve(e, t) {
		return e.map(function(e) {
			return "rule" === e.type && (e.value = "".concat(t, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(t, " ")), e.props = e.props.map(function(e) {
				return "".concat(t, " ").concat(e);
			})), Array.isArray(e.children) && "@keyframes" !== e.type && (e.children = Ve(e.children, t)), e;
		});
	}
	function Fe(e) {
		var t;
		var n;
		var o;
		var r = void 0 === e ? C : e;
		var s = r.options;
		var i = void 0 === s ? C : s;
		var a = r.plugins;
		var c = void 0 === a ? _ : a;
		var l = function(e, o, r) {
			return r.startsWith(n) && r.endsWith(n) && r.replaceAll(n, "").length > 0 ? ".".concat(t) : e;
		};
		var u = c.slice();
		u.push(function(e) {
			e.type === "rule" && e.value.includes("&") && (e.props[0] = e.props[0].replace(je, n).replace(o, l));
		}), i.prefix && u.push(prefixer), u.push(stringify);
		var p = function(e, r, s, a) {
			void 0 === r && (r = ""), void 0 === s && (s = ""), void 0 === a && (a = "&"), t = a, n = r, o = new RegExp("\\".concat(n, "\\b"), "g");
			var c = e.replace(xe, "");
			var l = compile(s || r ? "".concat(s, " ").concat(r, " { ").concat(c, " }") : c);
			i.namespace && (l = Ve(l, i.namespace));
			var p = [];
			return serialize(l, middleware(u.concat(rulesheet(function(e) {
				return p.push(e);
			})))), p;
		};
		return p.hash = c.length ? c.reduce(function(e, t) {
			return t.name || he(15), M(e, t.name);
		}, F).toString() : "", p;
	}
	function Ge() {
		return (0, react.useContext)($e);
	}
	function Ye(e) {
		var t = (0, react.useState)(e.stylisPlugins);
		var n = t[0];
		var r = t[1];
		var c = Ge().styleSheet;
		var l = (0, react.useMemo)(function() {
			var t = c;
			return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({ target: e.target }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })), t;
		}, [
			e.disableCSSOMInjection,
			e.sheet,
			e.target,
			c
		]);
		var u = (0, react.useMemo)(function() {
			return Fe({
				options: {
					namespace: e.namespace,
					prefix: e.enableVendorPrefixes
				},
				plugins: n
			});
		}, [
			e.enableVendorPrefixes,
			e.namespace,
			n
		]);
		(0, react.useEffect)(function() {
			(0, import_shallowequal.default)(n, e.stylisPlugins) || r(e.stylisPlugins);
		}, [e.stylisPlugins]);
		var d = (0, react.useMemo)(function() {
			return {
				shouldForwardProp: e.shouldForwardProp,
				styleSheet: l,
				stylis: u
			};
		}, [
			e.shouldForwardProp,
			l,
			u
		]);
		return react.default.createElement($e.Provider, { value: d }, react.default.createElement(Le.Provider, { value: u }, e.children));
	}
	function He(e) {
		for (var t = "", n = 0; n < e.length; n++) {
			var o = e[n];
			if (1 === n && "-" === o && "-" === e[0]) return e;
			qe(o) ? t += "-" + o.toLowerCase() : t += o;
		}
		return t.startsWith("ms-") ? "-" + t : t;
	}
	function Xe(e, t, n, o) {
		if (Ue(e)) return [];
		if (se(e)) return [".".concat(e.styledComponentId)];
		if (re(e)) {
			if (!re(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [e];
			var r = e(t);
			return "object" != typeof r || Array.isArray(r) || r instanceof We || ce(r) || null === r || console.error("".concat(B(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Xe(r, t, n, o);
		}
		var s;
		return e instanceof We ? n ? (e.inject(n, o), [e.getName(o)]) : [e] : ce(e) ? Je(e) : Array.isArray(e) ? Array.prototype.concat.apply(_, e.map(function(e) {
			return Xe(e, t, n, o);
		})) : [e.toString()];
	}
	function Ze(e) {
		for (var t = 0; t < e.length; t += 1) {
			var n = e[t];
			if (re(n) && !se(n)) return !1;
		}
		return !0;
	}
	function it(e, r, s) {
		var i = se(e);
		var a = e;
		var c = !L(e);
		var p = r.attrs;
		var d = void 0 === p ? _ : p;
		var h = r.componentId;
		var f = void 0 === h ? function(e, t) {
			var n = "string" != typeof e ? "sc" : R(e);
			rt[n] = (rt[n] || 0) + 1;
			var o = "".concat(n, "-").concat($(v + n + rt[n]));
			return t ? "".concat(t, "-").concat(o) : o;
		}(r.displayName, r.parentComponentId) : h;
		var m = r.displayName;
		var y = void 0 === m ? function(e) {
			return L(e) ? "styled.".concat(e) : "Styled(".concat(B(e), ")");
		}(e) : m;
		var g = r.displayName && r.componentId ? "".concat(R(r.displayName), "-").concat(r.componentId) : r.componentId || f;
		var S = i && a.attrs ? a.attrs.concat(d).filter(Boolean) : d;
		var w = r.shouldForwardProp;
		if (i && a.shouldForwardProp) {
			var b = a.shouldForwardProp;
			if (r.shouldForwardProp) {
				var E = r.shouldForwardProp;
				w = function(e, t) {
					return b(e, t) && E(e, t);
				};
			} else w = b;
		}
		var N = new Qe(s, g, i ? a.componentStyle : void 0);
		function O(e, r) {
			return function(e, r, s) {
				var i = e.attrs;
				var a = e.componentStyle;
				var c = e.defaultProps;
				var p = e.foldedComponentIds;
				var d = e.styledComponentId;
				var h = e.target;
				var f = react.default.useContext(et);
				var m = Ge();
				var y = e.shouldForwardProp || m.shouldForwardProp;
				(0, react.useDebugValue)(d);
				var v = I(r, f, c) || C;
				var g = function(e, n, o) {
					for (var r, s = __assign(__assign({}, n), {
						className: void 0,
						theme: o
					}), i = 0; i < e.length; i += 1) {
						var a = re(r = e[i]) ? r(s) : r;
						for (var c in a) s[c] = "className" === c ? ie(s[c], a[c]) : "style" === c ? __assign(__assign({}, s[c]), a[c]) : a[c];
					}
					return n.className && (s.className = ie(s.className, n.className)), s;
				}(i, r, v);
				var S = g.as || h;
				var w = {};
				for (var b in g) void 0 === g[b] || "$" === b[0] || "as" === b || "theme" === b && g.theme === v || ("forwardedAs" === b ? w.as = g.forwardedAs : y && !y(b, S) || (w[b] = g[b], y || isPropValid(b) || st.has(b) || !A.has(S) || (st.add(b), console.warn("styled-components: it looks like an unknown prop \"".concat(b, "\" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)")))));
				var E = function(e, t) {
					var n = Ge();
					var o = e.generateAndInjectStyles(t, n.styleSheet, n.stylis);
					return (0, react.useDebugValue)(o), o;
				}(a, g);
				e.warnTooManyClasses && e.warnTooManyClasses(E);
				var N = ie(p, d);
				return E && (N += " " + E), g.className && (N += " " + g.className), w[L(S) && !A.has(S) ? "class" : "className"] = N, s && (w.ref = s), (0, react.createElement)(S, w);
			}(D, e, r);
		}
		O.displayName = y;
		var D = react.default.forwardRef(O);
		return D.attrs = S, D.componentStyle = N, D.displayName = y, D.shouldForwardProp = w, D.foldedComponentIds = i ? ie(a.foldedComponentIds, a.styledComponentId) : "", D.styledComponentId = g, D.target = i ? a.target : e, Object.defineProperty(D, "defaultProps", {
			get: function() {
				return this._foldedDefaultProps;
			},
			set: function(e) {
				this._foldedDefaultProps = i ? function(e) {
					for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
					for (var o = 0, r = t; o < r.length; o++) le(e, r[o], !0);
					return e;
				}({}, a.defaultProps, e) : e;
			}
		}), P(y, g), D.warnTooManyClasses = function(e, t) {
			var n = {};
			var o = !1;
			return function(r) {
				if (!o && (n[r] = !0, Object.keys(n).length >= 200)) {
					var s = t ? " with the id of \"".concat(t, "\"") : "";
					console.warn("Over ".concat(200, " classes were generated for component ").concat(e).concat(s, ".\n") + "Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), o = !0, n = {};
				}
			};
		}(y, g), ue(D, function() {
			return ".".concat(D.styledComponentId);
		}), c && oe(D, e, {
			attrs: !0,
			componentStyle: !0,
			displayName: !0,
			foldedComponentIds: !0,
			shouldForwardProp: !0,
			styledComponentId: !0,
			target: !0
		}), D;
	}
	function at(e, t) {
		for (var n = [e[0]], o = 0, r = t.length; o < r; o += 1) n.push(t[o], e[o + 1]);
		return n;
	}
	function lt(t) {
		for (var n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
		if (re(t) || ce(t)) return ct(Xe(at(_, __spreadArray([t], n, !0))));
		var r = t;
		return 0 === n.length && 1 === r.length && "string" == typeof r[0] ? Xe(r) : ct(Xe(at(r, n)));
	}
	function ut(n, o, r) {
		if (void 0 === r && (r = C), !o) throw he(1, o);
		var s = function(t) {
			for (var s = [], i = 1; i < arguments.length; i++) s[i - 1] = arguments[i];
			return n(o, r, lt.apply(void 0, __spreadArray([t], s, !1)));
		};
		return s.attrs = function(e) {
			return ut(n, o, __assign(__assign({}, r), { attrs: Array.prototype.concat(r.attrs, e).filter(Boolean) }));
		}, s.withConfig = function(e) {
			return ut(n, o, __assign(__assign({}, r), e));
		}, s;
	}
	var import_shallowequal, f, m, y, v, g, S, w, E, N, P, _, C, A, O, D, T, k, j, V, F, M, z, G, Y, W, q, H, U, J, Z, K, Q, ee, te, ne, pe, fe, me, ye, ve, ge, Se, we, be, Ee, Ne, Pe, _e, Ie, Ae, Oe, De, Re, Te, ke, je, xe, Me, ze, $e, Be, Le, We, qe, Ue, Je, Ke, Qe, et, tt, rt, st, ct, pt, dt, ht, vt, St;
	var init_styled_components_browser_esm = __esmMin((() => {
		init_tslib_es6();
		init_emotion_is_prop_valid_esm();
		import_shallowequal = /* @__PURE__ */ __toESM(require_shallowequal());
		init_stylis();
		init_emotion_unitless_esm();
		f = "undefined" != typeof process && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR) || "data-styled";
		m = "active";
		y = "data-styled-version";
		v = "6.1.19";
		g = "/*!sc*/\n";
		S = "undefined" != typeof window && "undefined" != typeof document;
		w = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== {}.REACT_APP_SC_DISABLE_SPEEDY && "" !== {}.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== {}.REACT_APP_SC_DISABLE_SPEEDY && {}.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== {}.SC_DISABLE_SPEEDY && "" !== {}.SC_DISABLE_SPEEDY ? "false" !== {}.SC_DISABLE_SPEEDY && {}.SC_DISABLE_SPEEDY : true);
		E = /invalid hook call/i;
		N = /* @__PURE__ */ new Set();
		P = function(t, n) {
			var o = n ? " with the id of \"".concat(n, "\"") : "";
			var s = "The component ".concat(t).concat(o, " has been created dynamically.\n") + "You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.\nSee https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.\n";
			var i = console.error;
			try {
				var a = !0;
				console.error = function(t) {
					for (var n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
					E.test(t) ? (a = !1, N.delete(s)) : i.apply(void 0, __spreadArray([t], n, !1));
				}, (0, react.useRef)(), a && !N.has(s) && (console.warn(s), N.add(s));
			} catch (e) {
				E.test(e.message) && N.delete(s);
			} finally {
				console.error = i;
			}
		};
		_ = Object.freeze([]);
		C = Object.freeze({});
		A = /* @__PURE__ */ new Set([
			"a",
			"abbr",
			"address",
			"area",
			"article",
			"aside",
			"audio",
			"b",
			"base",
			"bdi",
			"bdo",
			"big",
			"blockquote",
			"body",
			"br",
			"button",
			"canvas",
			"caption",
			"cite",
			"code",
			"col",
			"colgroup",
			"data",
			"datalist",
			"dd",
			"del",
			"details",
			"dfn",
			"dialog",
			"div",
			"dl",
			"dt",
			"em",
			"embed",
			"fieldset",
			"figcaption",
			"figure",
			"footer",
			"form",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"header",
			"hgroup",
			"hr",
			"html",
			"i",
			"iframe",
			"img",
			"input",
			"ins",
			"kbd",
			"keygen",
			"label",
			"legend",
			"li",
			"link",
			"main",
			"map",
			"mark",
			"menu",
			"menuitem",
			"meta",
			"meter",
			"nav",
			"noscript",
			"object",
			"ol",
			"optgroup",
			"option",
			"output",
			"p",
			"param",
			"picture",
			"pre",
			"progress",
			"q",
			"rp",
			"rt",
			"ruby",
			"s",
			"samp",
			"script",
			"section",
			"select",
			"small",
			"source",
			"span",
			"strong",
			"style",
			"sub",
			"summary",
			"sup",
			"table",
			"tbody",
			"td",
			"textarea",
			"tfoot",
			"th",
			"thead",
			"time",
			"tr",
			"track",
			"u",
			"ul",
			"use",
			"var",
			"video",
			"wbr",
			"circle",
			"clipPath",
			"defs",
			"ellipse",
			"foreignObject",
			"g",
			"image",
			"line",
			"linearGradient",
			"marker",
			"mask",
			"path",
			"pattern",
			"polygon",
			"polyline",
			"radialGradient",
			"rect",
			"stop",
			"svg",
			"text",
			"tspan"
		]);
		O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
		D = /(^-|-$)/g;
		T = /(a)(d)/gi;
		k = 52;
		j = function(e) {
			return String.fromCharCode(e + (e > 25 ? 39 : 97));
		};
		;
		F = 5381;
		M = function(e, t) {
			for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
			return e;
		};
		z = function(e) {
			return M(F, e);
		};
		G = "function" == typeof Symbol && Symbol.for;
		Y = G ? Symbol.for("react.memo") : 60115;
		W = G ? Symbol.for("react.forward_ref") : 60112;
		q = {
			childContextTypes: !0,
			contextType: !0,
			contextTypes: !0,
			defaultProps: !0,
			displayName: !0,
			getDefaultProps: !0,
			getDerivedStateFromError: !0,
			getDerivedStateFromProps: !0,
			mixins: !0,
			propTypes: !0,
			type: !0
		};
		H = {
			name: !0,
			length: !0,
			prototype: !0,
			caller: !0,
			callee: !0,
			arguments: !0,
			arity: !0
		};
		U = {
			$$typeof: !0,
			compare: !0,
			defaultProps: !0,
			displayName: !0,
			propTypes: !0,
			type: !0
		};
		J = ((V = {})[W] = {
			$$typeof: !0,
			render: !0,
			defaultProps: !0,
			displayName: !0,
			propTypes: !0
		}, V[Y] = U, V);
		Z = Object.defineProperty;
		K = Object.getOwnPropertyNames;
		Q = Object.getOwnPropertySymbols;
		ee = Object.getOwnPropertyDescriptor;
		te = Object.getPrototypeOf;
		ne = Object.prototype;
		pe = {
			1: "Cannot create styled-component for component: %s.\n\n",
			2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
			3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
			4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
			5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
			6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
			7: "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
			8: "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
			9: "Missing document `<head>`\n\n",
			10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
			11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
			12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
			13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
			14: "ThemeProvider: \"theme\" prop is required.\n\n",
			15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
			16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
			17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",
			18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"
		};
		fe = function() {
			function e(e) {
				this.groupSizes = /* @__PURE__ */ new Uint32Array(512), this.length = 512, this.tag = e;
			}
			return e.prototype.indexOfGroup = function(e) {
				for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
				return t;
			}, e.prototype.insertRules = function(e, t) {
				if (e >= this.groupSizes.length) {
					for (var n = this.groupSizes, o = n.length, r = o; e >= r;) if ((r <<= 1) < 0) throw he(16, "".concat(e));
					this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
					for (var s = o; s < r; s++) this.groupSizes[s] = 0;
				}
				for (var i = this.indexOfGroup(e + 1), a = (s = 0, t.length); s < a; s++) this.tag.insertRule(i, t[s]) && (this.groupSizes[e]++, i++);
			}, e.prototype.clearGroup = function(e) {
				if (e < this.length) {
					var t = this.groupSizes[e];
					var n = this.indexOfGroup(e);
					var o = n + t;
					this.groupSizes[e] = 0;
					for (var r = n; r < o; r++) this.tag.deleteRule(n);
				}
			}, e.prototype.getGroup = function(e) {
				var t = "";
				if (e >= this.length || 0 === this.groupSizes[e]) return t;
				for (var n = this.groupSizes[e], o = this.indexOfGroup(e), r = o + n, s = o; s < r; s++) t += "".concat(this.tag.getRule(s)).concat(g);
				return t;
			}, e;
		}();
		me = 1 << 30;
		ye = /* @__PURE__ */ new Map();
		ve = /* @__PURE__ */ new Map();
		ge = 1;
		Se = function(e) {
			if (ye.has(e)) return ye.get(e);
			for (; ve.has(ge);) ge++;
			var t = ge++;
			if ((0 | t) < 0 || t > me) throw he(16, "".concat(t));
			return ye.set(e, t), ve.set(t, e), t;
		};
		we = function(e, t) {
			ge = t + 1, ye.set(e, t), ve.set(t, e);
		};
		be = "style[".concat(f, "][").concat(y, "=\"").concat(v, "\"]");
		Ee = new RegExp("^".concat(f, "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)"));
		Ne = function(e, t, n) {
			for (var o, r = n.split(","), s = 0, i = r.length; s < i; s++) (o = r[s]) && e.registerName(t, o);
		};
		Pe = function(e, t) {
			for (var n, o = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(g), r = [], s = 0, i = o.length; s < i; s++) {
				var a = o[s].trim();
				if (a) {
					var c = a.match(Ee);
					if (c) {
						var l = 0 | parseInt(c[1], 10);
						var u = c[2];
						0 !== l && (we(u, l), Ne(e, u, c[3]), e.getTag().insertRules(l, r)), r.length = 0;
					} else r.push(a);
				}
			}
		};
		_e = function(e) {
			for (var t = document.querySelectorAll(be), n = 0, o = t.length; n < o; n++) {
				var r = t[n];
				r && r.getAttribute(f) !== m && (Pe(e, r), r.parentNode && r.parentNode.removeChild(r));
			}
		};
		Ie = function(e) {
			var t = document.head;
			var n = e || t;
			var o = document.createElement("style");
			var r = function(e) {
				var t = Array.from(e.querySelectorAll("style[".concat(f, "]")));
				return t[t.length - 1];
			}(n);
			var s = void 0 !== r ? r.nextSibling : null;
			o.setAttribute(f, m), o.setAttribute(y, v);
			var i = Ce();
			return i && o.setAttribute("nonce", i), n.insertBefore(o, s), o;
		};
		Ae = function() {
			function e(e) {
				this.element = Ie(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
					if (e.sheet) return e.sheet;
					for (var t = document.styleSheets, n = 0, o = t.length; n < o; n++) {
						var r = t[n];
						if (r.ownerNode === e) return r;
					}
					throw he(17);
				}(this.element), this.length = 0;
			}
			return e.prototype.insertRule = function(e, t) {
				try {
					return this.sheet.insertRule(t, e), this.length++, !0;
				} catch (e) {
					return !1;
				}
			}, e.prototype.deleteRule = function(e) {
				this.sheet.deleteRule(e), this.length--;
			}, e.prototype.getRule = function(e) {
				var t = this.sheet.cssRules[e];
				return t && t.cssText ? t.cssText : "";
			}, e;
		}();
		Oe = function() {
			function e(e) {
				this.element = Ie(e), this.nodes = this.element.childNodes, this.length = 0;
			}
			return e.prototype.insertRule = function(e, t) {
				if (e <= this.length && e >= 0) {
					var n = document.createTextNode(t);
					return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
				}
				return !1;
			}, e.prototype.deleteRule = function(e) {
				this.element.removeChild(this.nodes[e]), this.length--;
			}, e.prototype.getRule = function(e) {
				return e < this.length ? this.nodes[e].textContent : "";
			}, e;
		}();
		De = function() {
			function e(e) {
				this.rules = [], this.length = 0;
			}
			return e.prototype.insertRule = function(e, t) {
				return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
			}, e.prototype.deleteRule = function(e) {
				this.rules.splice(e, 1), this.length--;
			}, e.prototype.getRule = function(e) {
				return e < this.length ? this.rules[e] : "";
			}, e;
		}();
		Re = S;
		Te = {
			isServer: !S,
			useCSSOMInjection: !w
		};
		ke = function() {
			function e(e, n, o) {
				void 0 === e && (e = C), void 0 === n && (n = {});
				var r = this;
				this.options = __assign(__assign({}, Te), e), this.gs = n, this.names = new Map(o), this.server = !!e.isServer, !this.server && S && Re && (Re = !1, _e(this)), ue(this, function() {
					return function(e) {
						for (var t = e.getTag(), n = t.length, o = "", r = function(n) {
							var r = function(e) {
								return ve.get(e);
							}(n);
							if (void 0 === r) return "continue";
							var s = e.names.get(r);
							var i = t.getGroup(n);
							if (void 0 === s || !s.size || 0 === i.length) return "continue";
							var a = "".concat(f, ".g").concat(n, "[id=\"").concat(r, "\"]");
							var c = "";
							void 0 !== s && s.forEach(function(e) {
								e.length > 0 && (c += "".concat(e, ","));
							}), o += "".concat(i).concat(a, "{content:\"").concat(c, "\"}").concat(g);
						}, s = 0; s < n; s++) r(s);
						return o;
					}(r);
				});
			}
			return e.registerId = function(e) {
				return Se(e);
			}, e.prototype.rehydrate = function() {
				!this.server && S && _e(this);
			}, e.prototype.reconstructWithOptions = function(n, o) {
				return void 0 === o && (o = !0), new e(__assign(__assign({}, this.options), n), this.gs, o && this.names || void 0);
			}, e.prototype.allocateGSInstance = function(e) {
				return this.gs[e] = (this.gs[e] || 0) + 1;
			}, e.prototype.getTag = function() {
				return this.tag || (this.tag = (e = function(e) {
					var t = e.useCSSOMInjection;
					var n = e.target;
					return e.isServer ? new De(n) : t ? new Ae(n) : new Oe(n);
				}(this.options), new fe(e)));
				var e;
			}, e.prototype.hasNameForId = function(e, t) {
				return this.names.has(e) && this.names.get(e).has(t);
			}, e.prototype.registerName = function(e, t) {
				if (Se(e), this.names.has(e)) this.names.get(e).add(t);
				else {
					var n = /* @__PURE__ */ new Set();
					n.add(t), this.names.set(e, n);
				}
			}, e.prototype.insertRules = function(e, t, n) {
				this.registerName(e, t), this.getTag().insertRules(Se(e), n);
			}, e.prototype.clearNames = function(e) {
				this.names.has(e) && this.names.get(e).clear();
			}, e.prototype.clearRules = function(e) {
				this.getTag().clearGroup(Se(e)), this.clearNames(e);
			}, e.prototype.clearTag = function() {
				this.tag = void 0;
			}, e;
		}();
		je = /&/g;
		xe = /^\s*\/\/.*$/gm;
		Me = new ke();
		ze = Fe();
		$e = react.default.createContext({
			shouldForwardProp: void 0,
			styleSheet: Me,
			stylis: ze
		});
		Be = $e.Consumer;
		Le = react.default.createContext(void 0);
		We = function() {
			function e(e, t) {
				var n = this;
				this.inject = function(e, t) {
					void 0 === t && (t = ze);
					var o = n.name + t.hash;
					e.hasNameForId(n.id, o) || e.insertRules(n.id, o, t(n.rules, o, "@keyframes"));
				}, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, ue(this, function() {
					throw he(12, String(n.name));
				});
			}
			return e.prototype.getName = function(e) {
				return void 0 === e && (e = ze), this.name + e.hash;
			}, e;
		}();
		qe = function(e) {
			return e >= "A" && e <= "Z";
		};
		Ue = function(e) {
			return null == e || !1 === e || "" === e;
		};
		Je = function(t) {
			var n;
			var o;
			var r = [];
			for (var s in t) {
				var i = t[s];
				t.hasOwnProperty(s) && !Ue(i) && (Array.isArray(i) && i.isCss || re(i) ? r.push("".concat(He(s), ":"), i, ";") : ce(i) ? r.push.apply(r, __spreadArray(__spreadArray(["".concat(s, " {")], Je(i), !1), ["}"], !1)) : r.push("".concat(He(s), ": ").concat((n = s, null == (o = i) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || n in unitlessKeys || n.startsWith("--") ? String(o).trim() : "".concat(o, "px")), ";")));
			}
			return r;
		};
		Ke = z(v);
		Qe = function() {
			function e(e, t, n) {
				this.rules = e, this.staticRulesId = "", this.isStatic = false, this.componentId = t, this.baseHash = M(Ke, t), this.baseStyle = n, ke.registerId(t);
			}
			return e.prototype.generateAndInjectStyles = function(e, t, n) {
				var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
				if (this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = ie(o, this.staticRulesId);
				else {
					var r = ae(Xe(this.rules, e, t, n));
					var s = x(M(this.baseHash, r) >>> 0);
					if (!t.hasNameForId(this.componentId, s)) {
						var i = n(r, ".".concat(s), void 0, this.componentId);
						t.insertRules(this.componentId, s, i);
					}
					o = ie(o, s), this.staticRulesId = s;
				}
				else {
					for (var a = M(this.baseHash, n.hash), c = "", l = 0; l < this.rules.length; l++) {
						var u = this.rules[l];
						if ("string" == typeof u) c += u, a = M(a, u);
						else if (u) {
							var p = ae(Xe(u, e, t, n));
							a = M(a, p + l), c += p;
						}
					}
					if (c) {
						var d = x(a >>> 0);
						t.hasNameForId(this.componentId, d) || t.insertRules(this.componentId, d, n(c, ".".concat(d), void 0, this.componentId)), o = ie(o, d);
					}
				}
				return o;
			}, e;
		}();
		et = react.default.createContext(void 0);
		tt = et.Consumer;
		rt = {};
		st = /* @__PURE__ */ new Set();
		ct = function(e) {
			return Object.assign(e, { isCss: !0 });
		};
		pt = function(e) {
			return ut(it, e);
		};
		dt = pt;
		A.forEach(function(e) {
			dt[e] = pt(e);
		});
		ht = function() {
			function e(e, t) {
				this.rules = e, this.componentId = t, this.isStatic = Ze(e), ke.registerId(this.componentId + 1);
			}
			return e.prototype.createStyles = function(e, t, n, o) {
				var r = o(ae(Xe(this.rules, t, n, o)), "");
				var s = this.componentId + e;
				n.insertRules(s, s, r);
			}, e.prototype.removeStyles = function(e, t) {
				t.clearRules(this.componentId + e);
			}, e.prototype.renderStyles = function(e, t, n, o) {
				e > 2 && ke.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, o);
			}, e;
		}();
		vt = function() {
			function e() {
				var e = this;
				this._emitSheetCSS = function() {
					var t = e.instance.toString();
					if (!t) return "";
					var n = Ce();
					var o = ae([
						n && "nonce=\"".concat(n, "\""),
						"".concat(f, "=\"true\""),
						"".concat(y, "=\"").concat(v, "\"")
					].filter(Boolean), " ");
					return "<style ".concat(o, ">").concat(t, "</style>");
				}, this.getStyleTags = function() {
					if (e.sealed) throw he(2);
					return e._emitSheetCSS();
				}, this.getStyleElement = function() {
					var n;
					if (e.sealed) throw he(2);
					var r = e.instance.toString();
					if (!r) return [];
					var s = ((n = {})[f] = "", n[y] = v, n.dangerouslySetInnerHTML = { __html: r }, n);
					var i = Ce();
					return i && (s.nonce = i), [react.default.createElement("style", __assign({}, s, { key: "sc-0-0" }))];
				}, this.seal = function() {
					e.sealed = !0;
				}, this.instance = new ke({ isServer: !0 }), this.sealed = !1;
			}
			return e.prototype.collectStyles = function(e) {
				if (this.sealed) throw he(2);
				return react.default.createElement(Ye, { sheet: this.instance }, e);
			}, e.prototype.interleaveWithNodeStream = function(e) {
				throw he(3);
			}, e;
		}();
		"undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");
		St = "__sc-".concat(f, "__");
		"undefined" != typeof window && (window[St] || (window[St] = 0), 1 === window[St] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window[St] += 1);
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
//#region node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
	function _arrayLikeToArray$1(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}
	var init_arrayLikeToArray = __esmMin((() => {
		__name(_arrayLikeToArray$1, "_arrayLikeToArray");
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
	function _arrayWithoutHoles(r) {
		if (Array.isArray(r)) return _arrayLikeToArray$1(r);
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
	function _unsupportedIterableToArray$1(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
		}
	}
	var init_unsupportedIterableToArray = __esmMin((() => {
		init_arrayLikeToArray();
		__name(_unsupportedIterableToArray$1, "_unsupportedIterableToArray");
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
		return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray$1(r) || _nonIterableSpread();
	}
	var init_toConsumableArray = __esmMin((() => {
		init_arrayWithoutHoles();
		init_iterableToArray();
		init_unsupportedIterableToArray();
		init_nonIterableSpread();
	}));

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
//#region node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
	function toPropertyKey(t) {
		var i = toPrimitive(t, "string");
		return "symbol" == _typeof(i) ? i : i + "";
	}
	var init_toPropertyKey = __esmMin((() => {
		init_typeof();
		init_toPrimitive();
	}));

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
	var init_defineProperty = __esmMin((() => {
		init_toPropertyKey();
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
		return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest();
	}
	var init_slicedToArray = __esmMin((() => {
		init_arrayWithHoles();
		init_iterableToArrayLimit();
		init_unsupportedIterableToArray();
		init_nonIterableRest();
	}));

//#endregion
//#region modules/styleguide/assets/js/frontend/hooks/use-debounced-callback.js
	function useDebouncedCallback(callback, wait) {
		var timeout = (0, react.useRef)();
		return (0, react.useCallback)(function() {
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			var later = function later() {
				clearTimeout(timeout.current);
				callback.apply(void 0, args);
			};
			clearTimeout(timeout.current);
			timeout.current = setTimeout(later, wait);
		}, [callback, wait]);
	}
	var init_use_debounced_callback = __esmMin((() => {}));

//#endregion
//#region modules/styleguide/assets/js/frontend/contexts/settings.js
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
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
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
	var SettingsContext, useSettings, SettingsProvider;
	var init_settings = __esmMin((() => {
		init_extends();
		init_toConsumableArray();
		init_defineProperty();
		init_slicedToArray();
		init_use_debounced_callback();
		__name(ownKeys$1, "ownKeys");
		__name(_objectSpread$1, "_objectSpread");
		SettingsContext = (0, react.createContext)(null);
		useSettings = function useSettings() {
			return (0, react.useContext)(SettingsContext);
		};
		SettingsProvider = function SettingsProvider(props) {
			var _useState2 = _slicedToArray((0, react.useState)("idle"), 2);
			var status = _useState2[0];
			var setStatus = _useState2[1];
			var _useState4 = _slicedToArray((0, react.useState)(/* @__PURE__ */ new Map()), 2);
			var settings = _useState4[0];
			var _setSettings = _useState4[1];
			var settingsRef = (0, react.useRef)(settings);
			var setSettings = function setSettings(newSettings) {
				settingsRef.current = newSettings;
				_setSettings(newSettings);
			};
			(0, react.useEffect)(function() {
				setStatus("loaded");
			}, [settings]);
			var getInitialSettings = function getInitialSettings() {
				setStatus("loading");
				var kitSettings = elementor.documents.getCurrent().config.settings.settings;
				setSettings(/* @__PURE__ */ new Map([
					["colors", /* @__PURE__ */ new Map([["system_colors", kitSettings.system_colors], ["custom_colors", kitSettings.custom_colors]])],
					["fonts", /* @__PURE__ */ new Map([
						["system_typography", kitSettings.system_typography],
						["custom_typography", kitSettings.custom_typography],
						["fallback_font", kitSettings.default_generic_fonts]
					])],
					["config", /* @__PURE__ */ new Map([["is_debug", elementorCommon.config.isElementorDebug]])]
				]));
			};
			var onCommandEvent = (0, react.useCallback)(function(event) {
				switch (event.detail.command) {
					case "document/elements/settings":
						onSettingsChange(event.detail.args);
						break;
					case "document/repeater/insert":
						onInsert(event.detail.args);
						break;
					case "document/repeater/remove":
						onRemove(event.detail.args);
						break;
					default: break;
				}
			}, []);
			/**
			* Triggered when a color or font is changed.
			* Has a 100ms debounce.
			*
			* @param {{container: {model: {attributes: {name: string}}, id: number}, settings: {}}} args
			*/
			var onSettingsChange = useDebouncedCallback(function(args) {
				var name = args.container.model.attributes.name;
				var newSettings = new Map(settingsRef.current);
				var _iterator = _createForOfIteratorHelper(newSettings.entries());
				var _step;
				try {
					for (_iterator.s(); !(_step = _iterator.n()).done;) {
						var _step$value = _slicedToArray(_step.value, 2);
						var group = _step$value[0];
						var groupSettings = _step$value[1];
						if (!groupSettings.has(name)) continue;
						if (Array.isArray(groupSettings.get(name))) {
							var index = groupSettings.get(name).findIndex(function(item) {
								return item._id === args.container.id;
							});
							if (-1 === index) return;
							newSettings.get(group).get(name)[index] = _objectSpread$1(_objectSpread$1({}, groupSettings.get(name)[index]), args.settings);
						} else newSettings.get(group).set(name, args.settings);
					}
				} catch (err) {
					_iterator.e(err);
				} finally {
					_iterator.f();
				}
				setSettings(newSettings);
			}, 100);
			/**
			* Triggered when a new custom color or font is created.
			*
			* @param {{name: string, model: string, options: {at: number}}} args
			*/
			var onInsert = function onInsert(args) {
				var name = args.name;
				var newSettings = new Map(settingsRef.current);
				var _iterator2 = _createForOfIteratorHelper(newSettings.entries());
				var _step2;
				try {
					for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
						var _args$options;
						var _step2$value = _slicedToArray(_step2.value, 2);
						var group = _step2$value[0];
						var groupSettings = _step2$value[1];
						if (!groupSettings.has(name)) continue;
						var newArray = _toConsumableArray(groupSettings.get(name));
						var at = void 0 === ((_args$options = args.options) === null || _args$options === void 0 ? void 0 : _args$options.at) ? newArray.length : args.options.at;
						newSettings.get(group).set(name, [].concat(_toConsumableArray(newArray.slice(0, at)), [args.model], _toConsumableArray(newArray.slice(at))));
					}
				} catch (err) {
					_iterator2.e(err);
				} finally {
					_iterator2.f();
				}
				setSettings(newSettings);
			};
			/**
			* Triggered when a custom color or font is removed.
			*
			* @param {{name: string, index: number}} args
			*/
			var onRemove = function onRemove(args) {
				var name = args.name;
				var newSettings = new Map(settingsRef.current);
				var _iterator3 = _createForOfIteratorHelper(newSettings.entries());
				var _step3;
				try {
					for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
						var _step3$value = _slicedToArray(_step3.value, 2);
						var group = _step3$value[0];
						var groupSettings = _step3$value[1];
						if (!groupSettings.has(name)) continue;
						var newArray = _toConsumableArray(groupSettings.get(name));
						newSettings.get(group).set(name, newArray.filter(function(item, index) {
							return index !== args.index;
						}));
					}
				} catch (err) {
					_iterator3.e(err);
				} finally {
					_iterator3.f();
				}
				setSettings(newSettings);
			};
			(0, react.useEffect)(function() {
				getInitialSettings();
				window.top.addEventListener("elementor/commands/run/after", onCommandEvent, { passive: true });
				return function() {
					window.top.removeEventListener("elementor/commands/run/after", onCommandEvent);
				};
			}, []);
			var value = {
				settings,
				isReady: "loaded" === status
			};
			return /*#__PURE__*/ react.default.createElement(SettingsContext.Provider, _extends({ value }, props));
		};
	}));

//#endregion
//#region modules/styleguide/assets/js/frontend/hooks/use-intersection-observer.js
	function useIntersectionObserver(callback) {
		var observer;
		var elements = [];
		(0, react.useEffect)(function() {
			observer = new IntersectionObserver(function(entries) {
				var intersectingArea = entries.find(function(entry) {
					return entry.isIntersecting;
				});
				if (intersectingArea) callback(intersectingArea);
			}, {});
			return function() {
				observer.disconnect();
			};
		}, []);
		var observe = function observe() {
			if (elements.length !== 0) elements.forEach(function(element) {
				if (element) observer.observe(element);
			});
		};
		var unobserve = function unobserve() {
			if (elements.length !== 0) elements.forEach(function(element) {
				if (element) observer.unobserve(element);
			});
		};
		return { setObservedElements: function setObservedElements(observedElements) {
			unobserve();
			elements = observedElements;
			observe();
		} };
	}
	var init_use_intersection_observer = __esmMin((() => {}));

//#endregion
//#region modules/styleguide/assets/js/frontend/contexts/active-context.js
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
	function useActiveContext() {
		return (0, react.useContext)(ActiveContext);
	}
	var ActiveContext, ActiveProvider;
	var init_active_context = __esmMin((() => {
		init_extends();
		init_defineProperty();
		init_slicedToArray();
		init_settings();
		init_use_intersection_observer();
		ActiveContext = (0, react.createContext)(null);
		ActiveProvider = function ActiveProvider(props) {
			var _useState2 = _slicedToArray((0, react.useState)({
				element: "",
				area: ""
			}), 2);
			var active = _useState2[0];
			var setActive = _useState2[1];
			var colorsAreaRef = (0, react.useRef)(null);
			var fontsAreaRef = (0, react.useRef)(null);
			var isReady = useSettings().isReady;
			var setObservedElements = useIntersectionObserver(function(intersectingArea) {
				if (colorsAreaRef.current === intersectingArea.target) {
					activateArea("colors", { scroll: false });
					return;
				}
				if (fontsAreaRef.current === intersectingArea.target) activateArea("fonts", { scroll: false });
			}).setObservedElements;
			var activateElement = function activateElement(type, source, id) {
				if ("color" === source) window.top.$e.route("panel/global/global-colors", { activeControl: "".concat(type, "/").concat(id, "/color") }, { history: false });
				if ("typography" === source) window.top.$e.route("panel/global/global-typography", { activeControl: "".concat(type, "/").concat(id, "/typography_typography") }, { history: false });
			};
			var getElementControl = function getElementControl(type, source, id) {
				if ("color" === source) return "".concat(type, "/").concat(id, "/color");
				if ("typography" === source) return "".concat(type, "/").concat(id, "/typography_typography");
			};
			var activateArea = function activateArea(area) {
				var _ref$scroll = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).scroll;
				if (_ref$scroll === void 0 ? true : _ref$scroll) scrollToArea(area);
				setActive(function(prevState) {
					return _objectSpread(_objectSpread({}, prevState), {}, { area });
				});
			};
			var scrollToArea = function scrollToArea(area) {
				("colors" === area ? colorsAreaRef : fontsAreaRef).current.scrollIntoView({
					behavior: "smooth",
					block: "start",
					inline: "start"
				});
			};
			(0, react.useEffect)(function() {
				if (window.top.$e.routes.is("panel/global/global-colors")) scrollToArea("colors");
				if (window.top.$e.routes.is("panel/global/global-typography")) scrollToArea("fonts");
			}, []);
			(0, react.useEffect)(function() {
				if (!isReady) return;
				setObservedElements([colorsAreaRef.current, fontsAreaRef.current]);
				window.top.$e.routes.on("run:after", function(component, route, args) {
					if ("panel/global/global-typography" === route) setActive(function() {
						return {
							area: "fonts",
							element: args.activeControl
						};
					});
					if ("panel/global/global-colors" === route) setActive(function() {
						return {
							area: "colors",
							element: args.activeControl
						};
					});
				});
			}, [isReady]);
			var value = {
				activeElement: active.element,
				activeArea: active.area,
				activateElement,
				activateArea,
				colorsAreaRef,
				fontsAreaRef,
				getElementControl
			};
			return /*#__PURE__*/ react.default.createElement(ActiveContext.Provider, _extends({ value }, props));
		};
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
//#region modules/styleguide/assets/js/frontend/components/global/div-base.js
	var _templateObject$11, DivBase;
	var init_div_base = __esmMin((() => {
		init_taggedTemplateLiteral();
		init_styled_components_browser_esm();
		;
		DivBase = dt.div(_templateObject$11 || (_templateObject$11 = _taggedTemplateLiteral(["\n	box-sizing: border-box;\n	position: relative;\n"])));
	}));

//#endregion
//#region modules/styleguide/assets/js/frontend/components/global/inner-wrapper.js
	var _templateObject$10, innerWrapper;
	var init_inner_wrapper = __esmMin((() => {
		init_taggedTemplateLiteral();
		init_styled_components_browser_esm();
		init_div_base();
		;
		innerWrapper = dt(DivBase)(_templateObject$10 || (_templateObject$10 = _taggedTemplateLiteral(["\n	display: flex;\n	align-items: center;\n	width: 100%;\n	max-width: 1140px;\n	margin: auto;\n	flex-wrap: wrap;\n	flex-direction: ", ";\n\n	@media (max-width: 1140px) {\n		padding: 0 15px;\n	}\n\n	@media (max-width: 767px) {\n		padding: 0 13px;\n	}\n"])), function(props) {
			var _props$flexDirection;
			return (_props$flexDirection = props.flexDirection) !== null && _props$flexDirection !== void 0 ? _props$flexDirection : "row";
		});
	}));

//#endregion
//#region modules/styleguide/assets/js/frontend/components/header.js
	function Header() {
		return /*#__PURE__*/ react.default.createElement(Wrapper$3, null, /*#__PURE__*/ react.default.createElement(innerWrapper, null, /*#__PURE__*/ react.default.createElement(Title$1, null, (0, _wordpress_i18n.__)("Show global settings", "elementor")), /*#__PURE__*/ react.default.createElement(ButtonsWrapper, null, /*#__PURE__*/ react.default.createElement(AreaButton, { area: "colors" }, (0, _wordpress_i18n.__)("Colors", "elementor")), /*#__PURE__*/ react.default.createElement(AreaButton, { area: "fonts" }, (0, _wordpress_i18n.__)("Fonts", "elementor")))));
	}
	var import_prop_types$6, _templateObject$9, _templateObject2$4, _templateObject3$2, _templateObject4, Button, AreaButton, Wrapper$3, ButtonsWrapper, Title$1;
	var init_header = __esmMin((() => {
		import_prop_types$6 = /* @__PURE__ */ __toESM(require_prop_types());
		init_taggedTemplateLiteral();
		init_styled_components_browser_esm();
		init_active_context();
		init_div_base();
		init_inner_wrapper();
		;
		;
		;
		;
		Button = dt.button.attrs(function(props) {
			return { "data-e-active": props.isActive ? true : null };
		})(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["\n	font-size: 16px;\n	height: 100%;\n	font-weight: 500;\n	font-style: normal;\n	text-decoration: none;\n	line-height: 1.5em;\n	letter-spacing: 0;\n	color: var(--e-a-color-txt);\n	border: none;\n	background: none;\n	text-transform: capitalize;\n	font-family: Roboto, sans-serif;\n	padding: 0;\n\n	&:hover, &[data-e-active='true'], &:focus {\n		outline: none;\n		background: none;\n		color: var(--e-a-color-txt-accent);\n	}\n"])));
		AreaButton = function AreaButton(props) {
			var _useActiveContext = useActiveContext();
			var activeArea = _useActiveContext.activeArea;
			var activateArea = _useActiveContext.activateArea;
			var area = props.area;
			var children = props.children;
			return /*#__PURE__*/ react.default.createElement(Button, {
				variant: "transparent",
				size: "s",
				onClick: function onClick() {
					activateArea(area);
				},
				isActive: area === activeArea
			}, children);
		};
		Wrapper$3 = dt(DivBase)(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["\n	position: fixed;\n	top: 0;\n	left: 0;\n	width: 100%;\n	height: 48px;\n	display: flex;\n	background: var(--e-a-bg-default);\n	border-bottom: 1px solid var(--e-a-border-color-bold);\n	z-index: 1;\n"])));
		ButtonsWrapper = dt(DivBase)(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n	display: flex;\n	justify-content: flex-end;\n	flex-grow: 1;\n	gap: 20px;\n"])));
		Title$1 = dt.h2(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n	color: var(--e-a-color-txt-accent);\n	font-family: Roboto, sans-serif;\n	font-size: 16px;\n	font-weight: 600;\n	text-transform: capitalize;\n	font-style: normal;\n	text-decoration: none;\n	line-height: 1.2em;\n	letter-spacing: 0;\n	word-spacing: 0;\n	margin: 0;\n"])));
		AreaButton.propTypes = {
			area: import_prop_types$6.default.string.isRequired,
			children: import_prop_types$6.default.node.isRequired
		};
	}));

//#endregion
//#region modules/styleguide/assets/js/frontend/components/global/loader.js
	function Loader() {
		return /*#__PURE__*/ react.default.createElement("div", { className: "e-styleguide-loader" }, /*#__PURE__*/ react.default.createElement("i", { className: "eicon-loading eicon-animation-spin" }));
	}
	var init_loader = __esmMin((() => {}));

//#endregion
//#region modules/styleguide/assets/js/frontend/components/areas/area-title.js
	var _templateObject$8, AreaTitle;
	var init_area_title = __esmMin((() => {
		init_taggedTemplateLiteral();
		init_styled_components_browser_esm();
		;
		AreaTitle = dt.h2(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n	color: var(--e-a-color-txt);\n	font-family: Roboto, sans-serif;\n	font-size: 30px;\n	font-weight: 400;\n	text-transform: capitalize;\n	font-style: normal;\n	text-decoration: none;\n	letter-spacing: 0;\n	word-spacing: 0;\n	text-align: center;\n	padding: 0;\n	margin: 0 0 48px 0;\n"])));
	}));

//#endregion
//#region modules/styleguide/assets/js/frontend/components/section-title.js
	var _templateObject$7, SectionTitle;
	var init_section_title = __esmMin((() => {
		init_taggedTemplateLiteral();
		init_styled_components_browser_esm();
		;
		SectionTitle = dt.h3(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n	padding: 16px 12px;\n	border-style: solid;\n	border-width: 0 0 1px 0;\n	border-color: var(--e-a-border-color-bold);\n	color: var(--e-a-color-txt);\n	font-family: Roboto, sans-serif;\n	font-size: 16px;\n	font-weight: 500;\n	text-transform: capitalize;\n	font-style: normal;\n	text-decoration: none;\n	line-height: 1.5em;\n	letter-spacing: 0;\n	word-spacing: 0;\n	margin: 0 auto 25px;\n	width: 100%;\n	max-width: 1140px;\n"])));
	}));

//#endregion
//#region modules/styleguide/assets/js/frontend/components/section.js
	function Section(props) {
		var title = props.title;
		var items = props.items;
		var columns = props.columns;
		var Item = props.component;
		var type = props.type;
		var _props$flex = props.flex;
		var flex = _props$flex === void 0 ? "row" : _props$flex;
		return /*#__PURE__*/ react.default.createElement(Wrapper$2, null, /*#__PURE__*/ react.default.createElement(SectionTitle, null, title), /*#__PURE__*/ react.default.createElement(innerWrapper, null, /*#__PURE__*/ react.default.createElement(Content$3, { flex }, items.map(function(item) {
			return /*#__PURE__*/ react.default.createElement(Item, {
				key: item._id,
				item,
				type: type ? type : null,
				columns
			});
		}))));
	}
	var import_prop_types$5, _templateObject$6, _templateObject2$3, _templateObject3$1, Wrapper$2, Content$3;
	var init_section = __esmMin((() => {
		import_prop_types$5 = /* @__PURE__ */ __toESM(require_prop_types());
		init_taggedTemplateLiteral();
		init_styled_components_browser_esm();
		init_section_title();
		init_div_base();
		init_inner_wrapper();
		;
		;
		;
		Wrapper$2 = dt(DivBase)(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n	margin-top: 55px;\n"])));
		Content$3 = dt(DivBase)(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n	display: flex;\n	width: 100%;\n\n	", ";\n"])), function(_ref) {
			var flex = _ref.flex;
			return flex && lt(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral([
				"\n		flex-direction: ",
				";\n		flex-wrap: ",
				";\n	"
			])), "column" === flex ? "column" : "row", "column" === flex ? "nowrap" : "wrap");
		});
		Section.propTypes = {
			title: import_prop_types$5.default.string.isRequired,
			items: import_prop_types$5.default.array.isRequired,
			columns: import_prop_types$5.default.shape({
				desktop: import_prop_types$5.default.number,
				mobile: import_prop_types$5.default.number
			}),
			component: import_prop_types$5.default.func.isRequired,
			type: import_prop_types$5.default.string,
			flex: import_prop_types$5.default.oneOf(["row", "column"])
		};
	}));

//#endregion
//#region modules/styleguide/assets/js/frontend/components/areas/area.js
	var import_prop_types$4, _templateObject$5, Wrapper$1, Area;
	var init_area = __esmMin((() => {
		import_prop_types$4 = /* @__PURE__ */ __toESM(require_prop_types());
		init_taggedTemplateLiteral();
		init_styled_components_browser_esm();
		init_settings();
		init_loader();
		init_div_base();
		init_area_title();
		init_section();
		;
		Wrapper$1 = dt(DivBase)(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n	width: 100%;\n  	padding-top: 96px;\n	min-height: 100px;\n\n	@media (max-width: 1024px) {\n      	padding-top: 50px;\n	}\n"])));
		Area = react.default.forwardRef(function(props, ref) {
			var config = props.config;
			var _useSettings = useSettings();
			var settings = _useSettings.settings;
			var isReady = _useSettings.isReady;
			return /*#__PURE__*/ react.default.createElement(Wrapper$1, { ref }, /*#__PURE__*/ react.default.createElement(AreaTitle, { name: config.type }, config.title), !isReady ? /*#__PURE__*/ react.default.createElement(Loader, null) : /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, config.sections.map(function(section) {
				var items = settings.get(config.type).get(section.type);
				return items.length ? /*#__PURE__*/ react.default.createElement(Section, {
					key: section.type,
					title: section.title,
					items,
					columns: section.columns,
					component: config.component,
					type: section.type
				}) : null;
			})));
		});
		Area.propTypes = { config: import_prop_types$4.default.shape({
			type: import_prop_types$4.default.string.isRequired,
			title: import_prop_types$4.default.string.isRequired,
			sections: import_prop_types$4.default.arrayOf(import_prop_types$4.default.shape({
				type: import_prop_types$4.default.string.isRequired,
				title: import_prop_types$4.default.string.isRequired,
				columns: import_prop_types$4.default.object
			})).isRequired,
			component: import_prop_types$4.default.func.isRequired
		}).isRequired };
	}));

//#endregion
//#region modules/styleguide/assets/js/frontend/components/global/element-title.js
	var _templateObject$4, ElementTitle;
	var init_element_title = __esmMin((() => {
		init_taggedTemplateLiteral();
		init_styled_components_browser_esm();
		;
		ElementTitle = dt.p(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n	color: var(--e-a-color-txt);\n	font-family: Roboto, sans-serif;\n	font-size: 12px;\n	font-weight: 500;\n	text-transform: capitalize;\n	font-style: normal;\n	text-decoration: none;\n	line-height: 1.1em;\n	letter-spacing: 0;\n	word-spacing: 0;\n	padding: 0;\n	margin: 0;\n"])));
	}));

//#endregion
//#region modules/styleguide/assets/js/frontend/components/global/element-wrapper.js
	var import_prop_types$3, _templateObject$3, _templateObject2$2, _templateObject3, Wrapper, ElementWrapper;
	var init_element_wrapper = __esmMin((() => {
		import_prop_types$3 = /* @__PURE__ */ __toESM(require_prop_types());
		init_extends();
		init_taggedTemplateLiteral();
		init_styled_components_browser_esm();
		init_div_base();
		;
		;
		;
		Wrapper = dt(DivBase)(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral([
			"\n	display: flex;\n	flex-direction: column;\n	gap: 12px;\n	align-items: flex-start;\n	border: 1px solid transparent;\n	border-radius: 3px;\n	padding: 12px;\n	cursor: pointer;\n	",
			"\n\n	&:hover:not(.active) {\n		background-color: var(--e-a-bg-hover);\n		border-color: var(--e-a-border-color-bold);\n	}\n\n	&.active {\n		background-color: var(--e-a-bg-active);\n		border-color: var(--e-a-border-color-accent);\n	}\n\n	@media (max-width: 767px) {\n		",
			"\n	}\n"
		])), function(_ref) {
			var _columns$desktop;
			var columnWidth = 100 / ((_columns$desktop = _ref.columns.desktop) !== null && _columns$desktop !== void 0 ? _columns$desktop : 1);
			return lt(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n			flex: 0 0 ", "%;\n		"])), columnWidth);
		}, function(_ref2) {
			var _columns$mobile;
			var columnWidth = 100 / ((_columns$mobile = _ref2.columns.mobile) !== null && _columns$mobile !== void 0 ? _columns$mobile : 1);
			return lt(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n				flex: 0 0 ", "%;\n			"])), columnWidth);
		});
		ElementWrapper = react.default.forwardRef(function(props, ref) {
			var isActive = props.isActive;
			var children = props.children;
			return /*#__PURE__*/ react.default.createElement(Wrapper, _extends({}, props, {
				ref,
				className: isActive ? "active" : ""
			}), children);
		});
		ElementWrapper.propTypes = {
			isActive: import_prop_types$3.default.bool,
			children: import_prop_types$3.default.oneOfType([import_prop_types$3.default.node, import_prop_types$3.default.arrayOf(import_prop_types$3.default.node)])
		};
	}));

//#endregion
//#region modules/styleguide/assets/js/frontend/components/item/color.js
	function Color(props) {
		var _useActiveContext = useActiveContext();
		var activeElement = _useActiveContext.activeElement;
		var activateElement = _useActiveContext.activateElement;
		var getElementControl = _useActiveContext.getElementControl;
		var item = props.item;
		var type = props.type;
		var source = "color";
		var _id = item._id;
		var title = item.title;
		var hex = item.color;
		var elementControl = getElementControl(type, source, _id);
		var ref = (0, react.useRef)(null);
		(0, react.useEffect)(function() {
			if (elementControl === activeElement) ref.current.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "center"
			});
		}, [activeElement]);
		return /*#__PURE__*/ react.default.createElement(ElementWrapper, {
			columns: props.columns,
			ref,
			isActive: elementControl === activeElement,
			onClick: function onClick() {
				activateElement(type, source, _id);
			}
		}, /*#__PURE__*/ react.default.createElement(ElementTitle, null, title), /*#__PURE__*/ react.default.createElement(Content$2, { hex }, /*#__PURE__*/ react.default.createElement(HexString, null, hex)));
	}
	var import_prop_types$2, _templateObject$2, _templateObject2$1, Content$2, HexString;
	var init_color = __esmMin((() => {
		import_prop_types$2 = /* @__PURE__ */ __toESM(require_prop_types());
		init_taggedTemplateLiteral();
		init_styled_components_browser_esm();
		init_div_base();
		init_element_title();
		init_element_wrapper();
		init_active_context();
		;
		;
		Content$2 = dt(DivBase)(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n	display: flex;\n	width: 100%;\n	height: 100px;\n	background-color: ", ";\n	border: 1px solid var(--e-a-border-color-focus);\n	border-radius: 3px;\n	align-items: end;\n"])), function(props) {
			return props.hex;
		});
		HexString = dt.p(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n	color: var(--e-a-color-txt-invert);\n	font-family: Roboto, sans-serif;\n	height: 12px;\n	font-size: 12px;\n	font-weight: 500;\n	text-transform: uppercase;\n	font-style: normal;\n	text-decoration: none;\n	line-height: 1.1em;\n	letter-spacing: 0;\n	word-spacing: 0;\n	margin: 12px;\n"])));
		Color.propTypes = {
			item: import_prop_types$2.default.shape({
				_id: import_prop_types$2.default.string.isRequired,
				title: import_prop_types$2.default.string.isRequired,
				color: import_prop_types$2.default.string
			}).isRequired,
			type: import_prop_types$2.default.string.isRequired,
			columns: import_prop_types$2.default.shape({
				desktop: import_prop_types$2.default.number,
				mobile: import_prop_types$2.default.number
			})
		};
	}));

//#endregion
//#region modules/styleguide/assets/js/frontend/components/areas/colors-area.js
	function ColorsArea() {
		var colorsAreaRef = useActiveContext().colorsAreaRef;
		var areaConfig = {
			title: (0, _wordpress_i18n.__)("Global Colors", "elementor"),
			type: "colors",
			component: Color,
			sections: [{
				type: "system_colors",
				title: (0, _wordpress_i18n.__)("System Colors", "elementor"),
				columns: {
					desktop: 4,
					mobile: 2
				}
			}, {
				type: "custom_colors",
				title: (0, _wordpress_i18n.__)("Custom Colors", "elementor"),
				columns: {
					desktop: 6,
					mobile: 2
				}
			}]
		};
		return /*#__PURE__*/ react.default.createElement(Area, {
			ref: colorsAreaRef,
			config: areaConfig
		});
	}
	var init_colors_area = __esmMin((() => {
		init_active_context();
		init_area();
		init_color();
	}));

//#endregion
//#region modules/styleguide/assets/js/frontend/components/item/font.js
	function Font(props) {
		var _useActiveContext = useActiveContext();
		var activeElement = _useActiveContext.activeElement;
		var activateElement = _useActiveContext.activateElement;
		var getElementControl = _useActiveContext.getElementControl;
		var item = props.item;
		var type = props.type;
		var source = "typography";
		var _id = item._id;
		var title = item.title;
		var elementControl = getElementControl(type, source, _id);
		var ref = (0, react.useRef)(null);
		var _useSettings = useSettings();
		var settings = _useSettings.settings;
		var isReady = _useSettings.isReady;
		var generateStyle = (0, react.useMemo)(function() {
			if (!isReady) return "";
			return parseFontToStyle(item, settings.get("fonts").get("fallback_font"));
		}, [item, settings]);
		var onClick = function onClick() {
			activateElement(type, source, _id);
		};
		(0, react.useEffect)(function() {
			if (elementControl === activeElement) ref.current.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "center"
			});
		}, [activeElement]);
		return /*#__PURE__*/ react.default.createElement(ElementWrapper, {
			columns: props.columns,
			ref,
			isActive: elementControl === activeElement,
			onClick
		}, /*#__PURE__*/ react.default.createElement(Title, null, title), /*#__PURE__*/ react.default.createElement(Content$1, { style: generateStyle }, (0, _wordpress_i18n.__)("The five boxing wizards jump quickly.", "elementor")));
	}
	var import_prop_types$1, _templateObject$1, _templateObject2, Title, Content$1, parseFontToStyle;
	var init_font = __esmMin((() => {
		import_prop_types$1 = /* @__PURE__ */ __toESM(require_prop_types());
		init_taggedTemplateLiteral();
		init_styled_components_browser_esm();
		init_active_context();
		init_settings();
		init_element_wrapper();
		init_element_title();
		;
		;
		Title = dt(ElementTitle)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n	font-size: 18px;\n"])));
		Content$1 = dt.p.withConfig({ shouldForwardProp: function shouldForwardProp(prop) {
			return "style" !== prop;
		} })(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n	", ";\n"])), function(_ref) {
			var style = _ref.style;
			var styleObjectToString = function styleObjectToString(obj) {
				return Object.keys(obj).reduce(function(acc, key) {
					return acc + "".concat(key, ": ").concat(obj[key], ";");
				}, "");
			};
			return "\n			".concat(styleObjectToString(style.style), "\n\n			@media (max-width: 1024px) {\n				").concat(styleObjectToString(style.tablet), "\n			}\n\n			@media (max-width: 767px) {\n				").concat(styleObjectToString(style.mobile), "\n			}\n		");
		});
		parseFontToStyle = function parseFontToStyle(font, fallbackFamily) {
			var defaultKeyParser = function defaultKeyParser(key) {
				return key.replace("typography_", "").replace("_", "-");
			};
			var fallbackLowered = fallbackFamily.toLowerCase();
			var familyParser = function familyParser(value) {
				return value ? value + ", ".concat(fallbackLowered) : fallbackLowered;
			};
			var sizeParser = function sizeParser(value) {
				if (!value || !value.size) return "";
				return "".concat(value.size).concat(value.unit);
			};
			var defaultParser = function defaultParser(value) {
				return value;
			};
			var allowedProperties = {
				typography_font_family: {
					valueParser: familyParser,
					keyParser: defaultKeyParser
				},
				typography_font_size: {
					valueParser: sizeParser,
					keyParser: defaultKeyParser
				},
				typography_letter_spacing: {
					valueParser: sizeParser,
					keyParser: defaultKeyParser
				},
				typography_line_height: {
					valueParser: sizeParser,
					keyParser: defaultKeyParser
				},
				typography_word_spacing: {
					valueParser: sizeParser,
					keyParser: defaultKeyParser
				},
				typography_font_style: {
					valueParser: defaultParser,
					keyParser: defaultKeyParser
				},
				typography_font_weight: {
					valueParser: defaultParser,
					keyParser: defaultKeyParser
				},
				typography_text_transform: {
					valueParser: defaultParser,
					keyParser: defaultKeyParser
				},
				typography_text_decoration: {
					valueParser: defaultParser,
					keyParser: defaultKeyParser
				}
			};
			var responsiveProperties = [
				"typography_font_size",
				"typography_letter_spacing",
				"typography_line_height",
				"typography_word_spacing"
			];
			var reducer = function reducer(acc, property, screen) {
				var parsers = allowedProperties[property];
				var key = parsers.keyParser(property);
				var keyInFontObject = property + (screen ? "_" + screen : "");
				var value = parsers.valueParser(font[keyInFontObject]);
				if (value) acc[key] = value;
				return acc;
			};
			return {
				style: Object.keys(allowedProperties).reduce(function(acc, property) {
					return reducer(acc, property, "");
				}, {}),
				tablet: responsiveProperties.reduce(function(acc, property) {
					return reducer(acc, property, "tablet");
				}, {}),
				mobile: responsiveProperties.reduce(function(acc, property) {
					return reducer(acc, property, "mobile");
				}, {})
			};
		};
		Font.propTypes = {
			item: import_prop_types$1.default.shape({
				_id: import_prop_types$1.default.string.isRequired,
				title: import_prop_types$1.default.string.isRequired,
				color: import_prop_types$1.default.string
			}).isRequired,
			type: import_prop_types$1.default.string.isRequired,
			columns: import_prop_types$1.default.shape({
				desktop: import_prop_types$1.default.number,
				mobile: import_prop_types$1.default.number
			})
		};
	}));

//#endregion
//#region modules/styleguide/assets/js/frontend/components/areas/fonts-area.js
	function FontsArea() {
		var fontsAreaRef = useActiveContext().fontsAreaRef;
		var areaConfig = {
			title: (0, _wordpress_i18n.__)("Global Fonts", "elementor"),
			type: "fonts",
			component: Font,
			sections: [{
				type: "system_typography",
				title: (0, _wordpress_i18n.__)("System Fonts", "elementor"),
				flex: "column",
				columns: {
					desktop: 1,
					mobile: 1
				}
			}, {
				type: "custom_typography",
				title: (0, _wordpress_i18n.__)("Custom Fonts", "elementor"),
				flex: "column",
				columns: {
					desktop: 1,
					mobile: 1
				}
			}]
		};
		return /*#__PURE__*/ react.default.createElement(Area, {
			ref: fontsAreaRef,
			config: areaConfig
		});
	}
	var init_fonts_area = __esmMin((() => {
		init_active_context();
		init_area();
		init_font();
	}));

//#endregion
//#region modules/styleguide/assets/js/frontend/components/app-wrapper.js
	function AppWrapper(props) {
		var _useSettings = useSettings();
		var settings = _useSettings.settings;
		if (!_useSettings.isReady) return /*#__PURE__*/ react.default.createElement(Loader, null);
		var Wrapper = settings.get("config").get("is_debug") ? react.default.StrictMode : react.default.Fragment;
		return /*#__PURE__*/ react.default.createElement(Wrapper, null, props.children);
	}
	var import_prop_types;
	var init_app_wrapper = __esmMin((() => {
		import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
		init_settings();
		init_loader();
		AppWrapper.propTypes = { children: import_prop_types.default.oneOfType([import_prop_types.default.node, import_prop_types.default.arrayOf(import_prop_types.default.node)]).isRequired };
	}));

//#endregion
//#region modules/styleguide/assets/js/frontend/app.js
	var app_exports = /* @__PURE__ */ __exportAll({ default: () => App });
	function App() {
		return /*#__PURE__*/ react.default.createElement(SettingsProvider, null, /*#__PURE__*/ react.default.createElement(AppWrapper, null, /*#__PURE__*/ react.default.createElement(ActiveProvider, null, /*#__PURE__*/ react.default.createElement(Header, null), /*#__PURE__*/ react.default.createElement(Content, null, /*#__PURE__*/ react.default.createElement(ColorsArea, null), /*#__PURE__*/ react.default.createElement(FontsArea, null)))));
	}
	var _templateObject, Content;
	var init_app = __esmMin((() => {
		init_taggedTemplateLiteral();
		init_styled_components_browser_esm();
		init_settings();
		init_active_context();
		init_header();
		init_colors_area();
		init_fonts_area();
		init_app_wrapper();
		;
		Content = dt.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n	padding: 48px 0;\n"])));
	}));

//#endregion
//#region modules/styleguide/assets/js/styleguide-app-initiator.js
	(function() {
		var unmountCallback;
		var styleguideBodyClass = "e-styleguide-shown";
		/**
		* Add the app into the page.
		*/
		function mount() {
			return _mount.apply(this, arguments);
		}
		/**
		* Remove the app from the page.
		*/
		function _mount() {
			_mount = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
				var _yield$import;
				var App;
				var _ReactUtils$render;
				var unmountUtil;
				return import_regenerator.default.wrap(function(_context) {
					while (1) switch (_context.prev = _context.next) {
						case 0:
							_context.next = 1;
							return __vitePreload(() => Promise.resolve().then(() => (init_app(), app_exports)), void 0);
						case 1:
							_yield$import = _context.sent;
							App = _yield$import.default;
							document.body.classList.add(styleguideBodyClass);
							_ReactUtils$render = react_default.render(/*#__PURE__*/ react.default.createElement(App, null), getStyleguideWidget()), unmountUtil = _ReactUtils$render.unmount;
							unmountCallback = unmountUtil;
						case 2:
						case "end": return _context.stop();
					}
				}, _callee);
			}));
			return _mount.apply(this, arguments);
		}
		function unmount() {
			unmountCallback();
			document.body.classList.remove(styleguideBodyClass);
		}
		/**
		* Get the Styleguide widget that serves as the App container.
		* Returns null if the widget does not exist.
		*
		* @return {Object|null}
		*/
		function getStyleguideWidget() {
			return document.querySelector(".dialog-styleguide-message");
		}
		/**
		* Listen to an event from the Styleguide e-component to mount or unmount the app.
		*/
		window.addEventListener("message", function(event) {
			var _event$data;
			if (!((_event$data = event.data) !== null && _event$data !== void 0 && (_event$data = _event$data.name) !== null && _event$data !== void 0 && _event$data.startsWith("elementor/styleguide/preview")) || !getStyleguideWidget()) return;
			switch (event.data.name) {
				case "elementor/styleguide/preview/show":
					mount();
					break;
				case "elementor/styleguide/preview/hide":
					unmount();
					break;
			}
		});
	})();

//#endregion
})(React, ReactDOM, wp.i18n);
//# sourceMappingURL=styleguide-app-initiator.js.map