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
	function _objectSpread2(e) {
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
	var init_objectSpread2 = __esmMin((() => {
		init_defineProperty();
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
//#region node_modules/@babel/runtime/helpers/interopRequireDefault.js
	var require_interopRequireDefault = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		function _interopRequireDefault(e) {
			return e && e.__esModule ? e : { "default": e };
		}
		module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
	}));

//#endregion
//#region node_modules/core-js/internals/global-this.js
	var require_global_this = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var check = function(it) {
			return it && it.Math === Math && it;
		};
		module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || (function() {
			return this;
		})() || Function("return this")();
	}));

//#endregion
//#region node_modules/core-js/internals/fails.js
	var require_fails = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function(exec) {
			try {
				return !!exec();
			} catch (error) {
				return true;
			}
		};
	}));

//#endregion
//#region node_modules/core-js/internals/descriptors.js
	var require_descriptors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var fails = require_fails();
		module.exports = !fails(function() {
			return Object.defineProperty({}, 1, { get: function() {
				return 7;
			} })[1] !== 7;
		});
	}));

//#endregion
//#region node_modules/core-js/internals/function-bind-native.js
	var require_function_bind_native = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var fails = require_fails();
		module.exports = !fails(function() {
			var test = (function() {}).bind();
			return typeof test != "function" || test.hasOwnProperty("prototype");
		});
	}));

//#endregion
//#region node_modules/core-js/internals/function-call.js
	var require_function_call = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var NATIVE_BIND = require_function_bind_native();
		var call = Function.prototype.call;
		module.exports = NATIVE_BIND ? call.bind(call) : function() {
			return call.apply(call, arguments);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/object-property-is-enumerable.js
	var require_object_property_is_enumerable = /* @__PURE__ */ __commonJSMin(((exports) => {
		var $propertyIsEnumerable = {}.propertyIsEnumerable;
		var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
		exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
			var descriptor = getOwnPropertyDescriptor(this, V);
			return !!descriptor && descriptor.enumerable;
		} : $propertyIsEnumerable;
	}));

//#endregion
//#region node_modules/core-js/internals/create-property-descriptor.js
	var require_create_property_descriptor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function(bitmap, value) {
			return {
				enumerable: !(bitmap & 1),
				configurable: !(bitmap & 2),
				writable: !(bitmap & 4),
				value
			};
		};
	}));

//#endregion
//#region node_modules/core-js/internals/function-uncurry-this.js
	var require_function_uncurry_this = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var NATIVE_BIND = require_function_bind_native();
		var FunctionPrototype = Function.prototype;
		var call = FunctionPrototype.call;
		var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
		module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
			return function() {
				return call.apply(fn, arguments);
			};
		};
	}));

//#endregion
//#region node_modules/core-js/internals/classof-raw.js
	var require_classof_raw = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var toString = uncurryThis({}.toString);
		var stringSlice = uncurryThis("".slice);
		module.exports = function(it) {
			return stringSlice(toString(it), 8, -1);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/indexed-object.js
	var require_indexed_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var fails = require_fails();
		var classof = require_classof_raw();
		var $Object = Object;
		var split = uncurryThis("".split);
		module.exports = fails(function() {
			return !$Object("z").propertyIsEnumerable(0);
		}) ? function(it) {
			return classof(it) === "String" ? split(it, "") : $Object(it);
		} : $Object;
	}));

//#endregion
//#region node_modules/core-js/internals/is-null-or-undefined.js
	var require_is_null_or_undefined = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function(it) {
			return it === null || it === void 0;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/require-object-coercible.js
	var require_require_object_coercible = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var isNullOrUndefined = require_is_null_or_undefined();
		var $TypeError = TypeError;
		module.exports = function(it) {
			if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
			return it;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/to-indexed-object.js
	var require_to_indexed_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var IndexedObject = require_indexed_object();
		var requireObjectCoercible = require_require_object_coercible();
		module.exports = function(it) {
			return IndexedObject(requireObjectCoercible(it));
		};
	}));

//#endregion
//#region node_modules/core-js/internals/is-callable.js
	var require_is_callable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var documentAll = typeof document == "object" && document.all;
		module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
			return typeof argument == "function" || argument === documentAll;
		} : function(argument) {
			return typeof argument == "function";
		};
	}));

//#endregion
//#region node_modules/core-js/internals/is-object.js
	var require_is_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var isCallable = require_is_callable();
		module.exports = function(it) {
			return typeof it == "object" ? it !== null : isCallable(it);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/get-built-in.js
	var require_get_built_in = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var globalThis = require_global_this();
		var isCallable = require_is_callable();
		var aFunction = function(argument) {
			return isCallable(argument) ? argument : void 0;
		};
		module.exports = function(namespace, method) {
			return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
		};
	}));

//#endregion
//#region node_modules/core-js/internals/object-is-prototype-of.js
	var require_object_is_prototype_of = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		module.exports = uncurryThis({}.isPrototypeOf);
	}));

//#endregion
//#region node_modules/core-js/internals/environment-user-agent.js
	var require_environment_user_agent = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var navigator = require_global_this().navigator;
		var userAgent = navigator && navigator.userAgent;
		module.exports = userAgent ? String(userAgent) : "";
	}));

//#endregion
//#region node_modules/core-js/internals/environment-v8-version.js
	var require_environment_v8_version = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var globalThis = require_global_this();
		var userAgent = require_environment_user_agent();
		var process = globalThis.process;
		var Deno = globalThis.Deno;
		var versions = process && process.versions || Deno && Deno.version;
		var v8 = versions && versions.v8;
		var match;
		var version;
		if (v8) {
			match = v8.split(".");
			version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
		}
		if (!version && userAgent) {
			match = userAgent.match(/Edge\/(\d+)/);
			if (!match || match[1] >= 74) {
				match = userAgent.match(/Chrome\/(\d+)/);
				if (match) version = +match[1];
			}
		}
		module.exports = version;
	}));

//#endregion
//#region node_modules/core-js/internals/symbol-constructor-detection.js
	var require_symbol_constructor_detection = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var V8_VERSION = require_environment_v8_version();
		var fails = require_fails();
		var $String = require_global_this().String;
		module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
			var symbol = Symbol("symbol detection");
			return !$String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
		});
	}));

//#endregion
//#region node_modules/core-js/internals/use-symbol-as-uid.js
	var require_use_symbol_as_uid = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var NATIVE_SYMBOL = require_symbol_constructor_detection();
		module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
	}));

//#endregion
//#region node_modules/core-js/internals/is-symbol.js
	var require_is_symbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var getBuiltIn = require_get_built_in();
		var isCallable = require_is_callable();
		var isPrototypeOf = require_object_is_prototype_of();
		var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
		var $Object = Object;
		module.exports = USE_SYMBOL_AS_UID ? function(it) {
			return typeof it == "symbol";
		} : function(it) {
			var $Symbol = getBuiltIn("Symbol");
			return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
		};
	}));

//#endregion
//#region node_modules/core-js/internals/try-to-string.js
	var require_try_to_string = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var $String = String;
		module.exports = function(argument) {
			try {
				return $String(argument);
			} catch (error) {
				return "Object";
			}
		};
	}));

//#endregion
//#region node_modules/core-js/internals/a-callable.js
	var require_a_callable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var isCallable = require_is_callable();
		var tryToString = require_try_to_string();
		var $TypeError = TypeError;
		module.exports = function(argument) {
			if (isCallable(argument)) return argument;
			throw new $TypeError(tryToString(argument) + " is not a function");
		};
	}));

//#endregion
//#region node_modules/core-js/internals/get-method.js
	var require_get_method = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var aCallable = require_a_callable();
		var isNullOrUndefined = require_is_null_or_undefined();
		module.exports = function(V, P) {
			var func = V[P];
			return isNullOrUndefined(func) ? void 0 : aCallable(func);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/ordinary-to-primitive.js
	var require_ordinary_to_primitive = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var call = require_function_call();
		var isCallable = require_is_callable();
		var isObject = require_is_object();
		var $TypeError = TypeError;
		module.exports = function(input, pref) {
			var fn;
			var val;
			if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
			if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
			if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
			throw new $TypeError("Can't convert object to primitive value");
		};
	}));

//#endregion
//#region node_modules/core-js/internals/is-pure.js
	var require_is_pure = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = false;
	}));

//#endregion
//#region node_modules/core-js/internals/define-global-property.js
	var require_define_global_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var globalThis = require_global_this();
		var defineProperty = Object.defineProperty;
		module.exports = function(key, value) {
			try {
				defineProperty(globalThis, key, {
					value,
					configurable: true,
					writable: true
				});
			} catch (error) {
				globalThis[key] = value;
			}
			return value;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/shared-store.js
	var require_shared_store = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var IS_PURE = require_is_pure();
		var globalThis = require_global_this();
		var defineGlobalProperty = require_define_global_property();
		var SHARED = "__core-js_shared__";
		var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
		(store.versions || (store.versions = [])).push({
			version: "3.46.0",
			mode: IS_PURE ? "pure" : "global",
			copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",
			license: "https://github.com/zloirock/core-js/blob/v3.46.0/LICENSE",
			source: "https://github.com/zloirock/core-js"
		});
	}));

//#endregion
//#region node_modules/core-js/internals/shared.js
	var require_shared = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var store = require_shared_store();
		module.exports = function(key, value) {
			return store[key] || (store[key] = value || {});
		};
	}));

//#endregion
//#region node_modules/core-js/internals/to-object.js
	var require_to_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var requireObjectCoercible = require_require_object_coercible();
		var $Object = Object;
		module.exports = function(argument) {
			return $Object(requireObjectCoercible(argument));
		};
	}));

//#endregion
//#region node_modules/core-js/internals/has-own-property.js
	var require_has_own_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var toObject = require_to_object();
		var hasOwnProperty = uncurryThis({}.hasOwnProperty);
		module.exports = Object.hasOwn || function hasOwn(it, key) {
			return hasOwnProperty(toObject(it), key);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/uid.js
	var require_uid = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var id = 0;
		var postfix = Math.random();
		var toString = uncurryThis(1.1.toString);
		module.exports = function(key) {
			return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/well-known-symbol.js
	var require_well_known_symbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var globalThis = require_global_this();
		var shared = require_shared();
		var hasOwn = require_has_own_property();
		var uid = require_uid();
		var NATIVE_SYMBOL = require_symbol_constructor_detection();
		var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
		var Symbol = globalThis.Symbol;
		var WellKnownSymbolsStore = shared("wks");
		var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
		module.exports = function(name) {
			if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
			return WellKnownSymbolsStore[name];
		};
	}));

//#endregion
//#region node_modules/core-js/internals/to-primitive.js
	var require_to_primitive = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var call = require_function_call();
		var isObject = require_is_object();
		var isSymbol = require_is_symbol();
		var getMethod = require_get_method();
		var ordinaryToPrimitive = require_ordinary_to_primitive();
		var wellKnownSymbol = require_well_known_symbol();
		var $TypeError = TypeError;
		var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
		module.exports = function(input, pref) {
			if (!isObject(input) || isSymbol(input)) return input;
			var exoticToPrim = getMethod(input, TO_PRIMITIVE);
			var result;
			if (exoticToPrim) {
				if (pref === void 0) pref = "default";
				result = call(exoticToPrim, input, pref);
				if (!isObject(result) || isSymbol(result)) return result;
				throw new $TypeError("Can't convert object to primitive value");
			}
			if (pref === void 0) pref = "number";
			return ordinaryToPrimitive(input, pref);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/to-property-key.js
	var require_to_property_key = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var toPrimitive = require_to_primitive();
		var isSymbol = require_is_symbol();
		module.exports = function(argument) {
			var key = toPrimitive(argument, "string");
			return isSymbol(key) ? key : key + "";
		};
	}));

//#endregion
//#region node_modules/core-js/internals/document-create-element.js
	var require_document_create_element = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var globalThis = require_global_this();
		var isObject = require_is_object();
		var document = globalThis.document;
		var EXISTS = isObject(document) && isObject(document.createElement);
		module.exports = function(it) {
			return EXISTS ? document.createElement(it) : {};
		};
	}));

//#endregion
//#region node_modules/core-js/internals/ie8-dom-define.js
	var require_ie8_dom_define = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var DESCRIPTORS = require_descriptors();
		var fails = require_fails();
		var createElement = require_document_create_element();
		module.exports = !DESCRIPTORS && !fails(function() {
			return Object.defineProperty(createElement("div"), "a", { get: function() {
				return 7;
			} }).a !== 7;
		});
	}));

//#endregion
//#region node_modules/core-js/internals/object-get-own-property-descriptor.js
	var require_object_get_own_property_descriptor = /* @__PURE__ */ __commonJSMin(((exports) => {
		var DESCRIPTORS = require_descriptors();
		var call = require_function_call();
		var propertyIsEnumerableModule = require_object_property_is_enumerable();
		var createPropertyDescriptor = require_create_property_descriptor();
		var toIndexedObject = require_to_indexed_object();
		var toPropertyKey = require_to_property_key();
		var hasOwn = require_has_own_property();
		var IE8_DOM_DEFINE = require_ie8_dom_define();
		var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
			O = toIndexedObject(O);
			P = toPropertyKey(P);
			if (IE8_DOM_DEFINE) try {
				return $getOwnPropertyDescriptor(O, P);
			} catch (error) {}
			if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/v8-prototype-define-bug.js
	var require_v8_prototype_define_bug = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var DESCRIPTORS = require_descriptors();
		var fails = require_fails();
		module.exports = DESCRIPTORS && fails(function() {
			return Object.defineProperty(function() {}, "prototype", {
				value: 42,
				writable: false
			}).prototype !== 42;
		});
	}));

//#endregion
//#region node_modules/core-js/internals/an-object.js
	var require_an_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var isObject = require_is_object();
		var $String = String;
		var $TypeError = TypeError;
		module.exports = function(argument) {
			if (isObject(argument)) return argument;
			throw new $TypeError($String(argument) + " is not an object");
		};
	}));

//#endregion
//#region node_modules/core-js/internals/object-define-property.js
	var require_object_define_property = /* @__PURE__ */ __commonJSMin(((exports) => {
		var DESCRIPTORS = require_descriptors();
		var IE8_DOM_DEFINE = require_ie8_dom_define();
		var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
		var anObject = require_an_object();
		var toPropertyKey = require_to_property_key();
		var $TypeError = TypeError;
		var $defineProperty = Object.defineProperty;
		var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		var ENUMERABLE = "enumerable";
		var CONFIGURABLE = "configurable";
		var WRITABLE = "writable";
		exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
			anObject(O);
			P = toPropertyKey(P);
			anObject(Attributes);
			if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
				var current = $getOwnPropertyDescriptor(O, P);
				if (current && current[WRITABLE]) {
					O[P] = Attributes.value;
					Attributes = {
						configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
						enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
						writable: false
					};
				}
			}
			return $defineProperty(O, P, Attributes);
		} : $defineProperty : function defineProperty(O, P, Attributes) {
			anObject(O);
			P = toPropertyKey(P);
			anObject(Attributes);
			if (IE8_DOM_DEFINE) try {
				return $defineProperty(O, P, Attributes);
			} catch (error) {}
			if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
			if ("value" in Attributes) O[P] = Attributes.value;
			return O;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/create-non-enumerable-property.js
	var require_create_non_enumerable_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var DESCRIPTORS = require_descriptors();
		var definePropertyModule = require_object_define_property();
		var createPropertyDescriptor = require_create_property_descriptor();
		module.exports = DESCRIPTORS ? function(object, key, value) {
			return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
		} : function(object, key, value) {
			object[key] = value;
			return object;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/function-name.js
	var require_function_name = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var DESCRIPTORS = require_descriptors();
		var hasOwn = require_has_own_property();
		var FunctionPrototype = Function.prototype;
		var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
		var EXISTS = hasOwn(FunctionPrototype, "name");
		var PROPER = EXISTS && (function something() {}).name === "something";
		var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
		module.exports = {
			EXISTS,
			PROPER,
			CONFIGURABLE
		};
	}));

//#endregion
//#region node_modules/core-js/internals/inspect-source.js
	var require_inspect_source = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var isCallable = require_is_callable();
		var store = require_shared_store();
		var functionToString = uncurryThis(Function.toString);
		if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
			return functionToString(it);
		};
		module.exports = store.inspectSource;
	}));

//#endregion
//#region node_modules/core-js/internals/weak-map-basic-detection.js
	var require_weak_map_basic_detection = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var globalThis = require_global_this();
		var isCallable = require_is_callable();
		var WeakMap = globalThis.WeakMap;
		module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
	}));

//#endregion
//#region node_modules/core-js/internals/shared-key.js
	var require_shared_key = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var shared = require_shared();
		var uid = require_uid();
		var keys = shared("keys");
		module.exports = function(key) {
			return keys[key] || (keys[key] = uid(key));
		};
	}));

//#endregion
//#region node_modules/core-js/internals/hidden-keys.js
	var require_hidden_keys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = {};
	}));

//#endregion
//#region node_modules/core-js/internals/internal-state.js
	var require_internal_state = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
		var globalThis = require_global_this();
		var isObject = require_is_object();
		var createNonEnumerableProperty = require_create_non_enumerable_property();
		var hasOwn = require_has_own_property();
		var shared = require_shared_store();
		var sharedKey = require_shared_key();
		var hiddenKeys = require_hidden_keys();
		var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
		var TypeError = globalThis.TypeError;
		var WeakMap = globalThis.WeakMap;
		var set;
		var get;
		var has;
		var enforce = function(it) {
			return has(it) ? get(it) : set(it, {});
		};
		var getterFor = function(TYPE) {
			return function(it) {
				var state;
				if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError("Incompatible receiver, " + TYPE + " required");
				return state;
			};
		};
		if (NATIVE_WEAK_MAP || shared.state) {
			var store = shared.state || (shared.state = new WeakMap());
			store.get = store.get;
			store.has = store.has;
			store.set = store.set;
			set = function(it, metadata) {
				if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
				metadata.facade = it;
				store.set(it, metadata);
				return metadata;
			};
			get = function(it) {
				return store.get(it) || {};
			};
			has = function(it) {
				return store.has(it);
			};
		} else {
			var STATE = sharedKey("state");
			hiddenKeys[STATE] = true;
			set = function(it, metadata) {
				if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
				metadata.facade = it;
				createNonEnumerableProperty(it, STATE, metadata);
				return metadata;
			};
			get = function(it) {
				return hasOwn(it, STATE) ? it[STATE] : {};
			};
			has = function(it) {
				return hasOwn(it, STATE);
			};
		}
		module.exports = {
			set,
			get,
			has,
			enforce,
			getterFor
		};
	}));

//#endregion
//#region node_modules/core-js/internals/make-built-in.js
	var require_make_built_in = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var fails = require_fails();
		var isCallable = require_is_callable();
		var hasOwn = require_has_own_property();
		var DESCRIPTORS = require_descriptors();
		var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
		var inspectSource = require_inspect_source();
		var InternalStateModule = require_internal_state();
		var enforceInternalState = InternalStateModule.enforce;
		var getInternalState = InternalStateModule.get;
		var $String = String;
		var defineProperty = Object.defineProperty;
		var stringSlice = uncurryThis("".slice);
		var replace = uncurryThis("".replace);
		var join = uncurryThis([].join);
		var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
			return defineProperty(function() {}, "length", { value: 8 }).length !== 8;
		});
		var TEMPLATE = String(String).split("String");
		var makeBuiltIn = module.exports = function(value, name, options) {
			if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
			if (options && options.getter) name = "get " + name;
			if (options && options.setter) name = "set " + name;
			if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) if (DESCRIPTORS) defineProperty(value, "name", {
				value: name,
				configurable: true
			});
			else value.name = name;
			if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", { value: options.arity });
			try {
				if (options && hasOwn(options, "constructor") && options.constructor) {
					if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
				} else if (value.prototype) value.prototype = void 0;
			} catch (error) {}
			var state = enforceInternalState(value);
			if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
			return value;
		};
		Function.prototype.toString = makeBuiltIn(function toString() {
			return isCallable(this) && getInternalState(this).source || inspectSource(this);
		}, "toString");
	}));

//#endregion
//#region node_modules/core-js/internals/define-built-in.js
	var require_define_built_in = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var isCallable = require_is_callable();
		var definePropertyModule = require_object_define_property();
		var makeBuiltIn = require_make_built_in();
		var defineGlobalProperty = require_define_global_property();
		module.exports = function(O, key, value, options) {
			if (!options) options = {};
			var simple = options.enumerable;
			var name = options.name !== void 0 ? options.name : key;
			if (isCallable(value)) makeBuiltIn(value, name, options);
			if (options.global) if (simple) O[key] = value;
			else defineGlobalProperty(key, value);
			else {
				try {
					if (!options.unsafe) delete O[key];
					else if (O[key]) simple = true;
				} catch (error) {}
				if (simple) O[key] = value;
				else definePropertyModule.f(O, key, {
					value,
					enumerable: false,
					configurable: !options.nonConfigurable,
					writable: !options.nonWritable
				});
			}
			return O;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/math-trunc.js
	var require_math_trunc = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ceil = Math.ceil;
		var floor = Math.floor;
		module.exports = Math.trunc || function trunc(x) {
			var n = +x;
			return (n > 0 ? floor : ceil)(n);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/to-integer-or-infinity.js
	var require_to_integer_or_infinity = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var trunc = require_math_trunc();
		module.exports = function(argument) {
			var number = +argument;
			return number !== number || number === 0 ? 0 : trunc(number);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/to-absolute-index.js
	var require_to_absolute_index = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var toIntegerOrInfinity = require_to_integer_or_infinity();
		var max = Math.max;
		var min = Math.min;
		module.exports = function(index, length) {
			var integer = toIntegerOrInfinity(index);
			return integer < 0 ? max(integer + length, 0) : min(integer, length);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/to-length.js
	var require_to_length = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var toIntegerOrInfinity = require_to_integer_or_infinity();
		var min = Math.min;
		module.exports = function(argument) {
			var len = toIntegerOrInfinity(argument);
			return len > 0 ? min(len, 9007199254740991) : 0;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/length-of-array-like.js
	var require_length_of_array_like = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var toLength = require_to_length();
		module.exports = function(obj) {
			return toLength(obj.length);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/array-includes.js
	var require_array_includes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var toIndexedObject = require_to_indexed_object();
		var toAbsoluteIndex = require_to_absolute_index();
		var lengthOfArrayLike = require_length_of_array_like();
		var createMethod = function(IS_INCLUDES) {
			return function($this, el, fromIndex) {
				var O = toIndexedObject($this);
				var length = lengthOfArrayLike(O);
				if (length === 0) return !IS_INCLUDES && -1;
				var index = toAbsoluteIndex(fromIndex, length);
				var value;
				if (IS_INCLUDES && el !== el) while (length > index) {
					value = O[index++];
					if (value !== value) return true;
				}
				else for (; length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
				return !IS_INCLUDES && -1;
			};
		};
		module.exports = {
			includes: createMethod(true),
			indexOf: createMethod(false)
		};
	}));

//#endregion
//#region node_modules/core-js/internals/object-keys-internal.js
	var require_object_keys_internal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var hasOwn = require_has_own_property();
		var toIndexedObject = require_to_indexed_object();
		var indexOf = require_array_includes().indexOf;
		var hiddenKeys = require_hidden_keys();
		var push = uncurryThis([].push);
		module.exports = function(object, names) {
			var O = toIndexedObject(object);
			var i = 0;
			var result = [];
			var key;
			for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
			while (names.length > i) if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
			return result;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/enum-bug-keys.js
	var require_enum_bug_keys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = [
			"constructor",
			"hasOwnProperty",
			"isPrototypeOf",
			"propertyIsEnumerable",
			"toLocaleString",
			"toString",
			"valueOf"
		];
	}));

//#endregion
//#region node_modules/core-js/internals/object-get-own-property-names.js
	var require_object_get_own_property_names = /* @__PURE__ */ __commonJSMin(((exports) => {
		var internalObjectKeys = require_object_keys_internal();
		var hiddenKeys = require_enum_bug_keys().concat("length", "prototype");
		exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
			return internalObjectKeys(O, hiddenKeys);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/object-get-own-property-symbols.js
	var require_object_get_own_property_symbols = /* @__PURE__ */ __commonJSMin(((exports) => {
		exports.f = Object.getOwnPropertySymbols;
	}));

//#endregion
//#region node_modules/core-js/internals/own-keys.js
	var require_own_keys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var getBuiltIn = require_get_built_in();
		var uncurryThis = require_function_uncurry_this();
		var getOwnPropertyNamesModule = require_object_get_own_property_names();
		var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
		var anObject = require_an_object();
		var concat = uncurryThis([].concat);
		module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
			var keys = getOwnPropertyNamesModule.f(anObject(it));
			var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
			return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/copy-constructor-properties.js
	var require_copy_constructor_properties = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var hasOwn = require_has_own_property();
		var ownKeys = require_own_keys();
		var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
		var definePropertyModule = require_object_define_property();
		module.exports = function(target, source, exceptions) {
			var keys = ownKeys(source);
			var defineProperty = definePropertyModule.f;
			var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
			}
		};
	}));

//#endregion
//#region node_modules/core-js/internals/is-forced.js
	var require_is_forced = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var fails = require_fails();
		var isCallable = require_is_callable();
		var replacement = /#|\.prototype\./;
		var isForced = function(feature, detection) {
			var value = data[normalize(feature)];
			return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
		};
		var normalize = isForced.normalize = function(string) {
			return String(string).replace(replacement, ".").toLowerCase();
		};
		var data = isForced.data = {};
		var NATIVE = isForced.NATIVE = "N";
		var POLYFILL = isForced.POLYFILL = "P";
		module.exports = isForced;
	}));

//#endregion
//#region node_modules/core-js/internals/export.js
	var require_export = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var globalThis = require_global_this();
		var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
		var createNonEnumerableProperty = require_create_non_enumerable_property();
		var defineBuiltIn = require_define_built_in();
		var defineGlobalProperty = require_define_global_property();
		var copyConstructorProperties = require_copy_constructor_properties();
		var isForced = require_is_forced();
		module.exports = function(options, source) {
			var TARGET = options.target;
			var GLOBAL = options.global;
			var STATIC = options.stat;
			var FORCED;
			var target;
			var key;
			var targetProperty;
			var sourceProperty;
			var descriptor;
			if (GLOBAL) target = globalThis;
			else if (STATIC) target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
			else target = globalThis[TARGET] && globalThis[TARGET].prototype;
			if (target) for (key in source) {
				sourceProperty = source[key];
				if (options.dontCallGetSet) {
					descriptor = getOwnPropertyDescriptor(target, key);
					targetProperty = descriptor && descriptor.value;
				} else targetProperty = target[key];
				FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
				if (!FORCED && targetProperty !== void 0) {
					if (typeof sourceProperty == typeof targetProperty) continue;
					copyConstructorProperties(sourceProperty, targetProperty);
				}
				if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
				defineBuiltIn(target, key, sourceProperty, options);
			}
		};
	}));

//#endregion
//#region node_modules/core-js/internals/object-keys.js
	var require_object_keys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var internalObjectKeys = require_object_keys_internal();
		var enumBugKeys = require_enum_bug_keys();
		module.exports = Object.keys || function keys(O) {
			return internalObjectKeys(O, enumBugKeys);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/object-define-properties.js
	var require_object_define_properties = /* @__PURE__ */ __commonJSMin(((exports) => {
		var DESCRIPTORS = require_descriptors();
		var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
		var definePropertyModule = require_object_define_property();
		var anObject = require_an_object();
		var toIndexedObject = require_to_indexed_object();
		var objectKeys = require_object_keys();
		exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
			anObject(O);
			var props = toIndexedObject(Properties);
			var keys = objectKeys(Properties);
			var length = keys.length;
			var index = 0;
			var key;
			while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
			return O;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/html.js
	var require_html = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var getBuiltIn = require_get_built_in();
		module.exports = getBuiltIn("document", "documentElement");
	}));

//#endregion
//#region node_modules/core-js/internals/object-create.js
	var require_object_create = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var anObject = require_an_object();
		var definePropertiesModule = require_object_define_properties();
		var enumBugKeys = require_enum_bug_keys();
		var hiddenKeys = require_hidden_keys();
		var html = require_html();
		var documentCreateElement = require_document_create_element();
		var sharedKey = require_shared_key();
		var GT = ">";
		var LT = "<";
		var PROTOTYPE = "prototype";
		var SCRIPT = "script";
		var IE_PROTO = sharedKey("IE_PROTO");
		var EmptyConstructor = function() {};
		var scriptTag = function(content) {
			return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
		};
		var NullProtoObjectViaActiveX = function(activeXDocument) {
			activeXDocument.write(scriptTag(""));
			activeXDocument.close();
			var temp = activeXDocument.parentWindow.Object;
			activeXDocument = null;
			return temp;
		};
		var NullProtoObjectViaIFrame = function() {
			var iframe = documentCreateElement("iframe");
			var JS = "java" + SCRIPT + ":";
			var iframeDocument;
			iframe.style.display = "none";
			html.appendChild(iframe);
			iframe.src = String(JS);
			iframeDocument = iframe.contentWindow.document;
			iframeDocument.open();
			iframeDocument.write(scriptTag("document.F=Object"));
			iframeDocument.close();
			return iframeDocument.F;
		};
		var activeXDocument;
		var NullProtoObject = function() {
			try {
				activeXDocument = new ActiveXObject("htmlfile");
			} catch (error) {}
			NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
			var length = enumBugKeys.length;
			while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
			return NullProtoObject();
		};
		hiddenKeys[IE_PROTO] = true;
		module.exports = Object.create || function create(O, Properties) {
			var result;
			if (O !== null) {
				EmptyConstructor[PROTOTYPE] = anObject(O);
				result = new EmptyConstructor();
				EmptyConstructor[PROTOTYPE] = null;
				result[IE_PROTO] = O;
			} else result = NullProtoObject();
			return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/add-to-unscopables.js
	var require_add_to_unscopables = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var wellKnownSymbol = require_well_known_symbol();
		var create = require_object_create();
		var defineProperty = require_object_define_property().f;
		var UNSCOPABLES = wellKnownSymbol("unscopables");
		var ArrayPrototype = Array.prototype;
		if (ArrayPrototype[UNSCOPABLES] === void 0) defineProperty(ArrayPrototype, UNSCOPABLES, {
			configurable: true,
			value: create(null)
		});
		module.exports = function(key) {
			ArrayPrototype[UNSCOPABLES][key] = true;
		};
	}));

//#endregion
//#region node_modules/core-js/modules/es.array.includes.js
	var require_es_array_includes = /* @__PURE__ */ __commonJSMin((() => {
		var $ = require_export();
		var $includes = require_array_includes().includes;
		var fails = require_fails();
		var addToUnscopables = require_add_to_unscopables();
		$({
			target: "Array",
			proto: true,
			forced: fails(function() {
				return !Array(1).includes();
			})
		}, { includes: function includes(el) {
			return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
		} });
		addToUnscopables("includes");
	}));

//#endregion
//#region node_modules/core-js/internals/is-array.js
	var require_is_array = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var classof = require_classof_raw();
		module.exports = Array.isArray || function isArray(argument) {
			return classof(argument) === "Array";
		};
	}));

//#endregion
//#region node_modules/core-js/internals/array-set-length.js
	var require_array_set_length = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var DESCRIPTORS = require_descriptors();
		var isArray = require_is_array();
		var $TypeError = TypeError;
		var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
			if (this !== void 0) return true;
			try {
				Object.defineProperty([], "length", { writable: false }).length = 1;
			} catch (error) {
				return error instanceof TypeError;
			}
		}();
		module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
			if (isArray(O) && !getOwnPropertyDescriptor(O, "length").writable) throw new $TypeError("Cannot set read only .length");
			return O.length = length;
		} : function(O, length) {
			return O.length = length;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/does-not-exceed-safe-integer.js
	var require_does_not_exceed_safe_integer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var $TypeError = TypeError;
		var MAX_SAFE_INTEGER = 9007199254740991;
		module.exports = function(it) {
			if (it > MAX_SAFE_INTEGER) throw $TypeError("Maximum allowed index exceeded");
			return it;
		};
	}));

//#endregion
//#region node_modules/core-js/modules/es.array.push.js
	var require_es_array_push = /* @__PURE__ */ __commonJSMin((() => {
		var $ = require_export();
		var toObject = require_to_object();
		var lengthOfArrayLike = require_length_of_array_like();
		var setArrayLength = require_array_set_length();
		var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
		var INCORRECT_TO_LENGTH = require_fails()(function() {
			return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
		});
		var properErrorOnNonWritableLength = function() {
			try {
				Object.defineProperty([], "length", { writable: false }).push();
			} catch (error) {
				return error instanceof TypeError;
			}
		};
		$({
			target: "Array",
			proto: true,
			arity: 1,
			forced: INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength()
		}, { push: function push(item) {
			var O = toObject(this);
			var len = lengthOfArrayLike(O);
			var argCount = arguments.length;
			doesNotExceedSafeInteger(len + argCount);
			for (var i = 0; i < argCount; i++) {
				O[len] = arguments[i];
				len++;
			}
			setArrayLength(O, len);
			return len;
		} });
	}));

//#endregion
//#region node_modules/core-js/internals/an-instance.js
	var require_an_instance = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var isPrototypeOf = require_object_is_prototype_of();
		var $TypeError = TypeError;
		module.exports = function(it, Prototype) {
			if (isPrototypeOf(Prototype, it)) return it;
			throw new $TypeError("Incorrect invocation");
		};
	}));

//#endregion
//#region node_modules/core-js/internals/correct-prototype-getter.js
	var require_correct_prototype_getter = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var fails = require_fails();
		module.exports = !fails(function() {
			function F() {}
			F.prototype.constructor = null;
			return Object.getPrototypeOf(new F()) !== F.prototype;
		});
	}));

//#endregion
//#region node_modules/core-js/internals/object-get-prototype-of.js
	var require_object_get_prototype_of = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var hasOwn = require_has_own_property();
		var isCallable = require_is_callable();
		var toObject = require_to_object();
		var sharedKey = require_shared_key();
		var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
		var IE_PROTO = sharedKey("IE_PROTO");
		var $Object = Object;
		var ObjectPrototype = $Object.prototype;
		module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
			var object = toObject(O);
			if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
			var constructor = object.constructor;
			if (isCallable(constructor) && object instanceof constructor) return constructor.prototype;
			return object instanceof $Object ? ObjectPrototype : null;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/define-built-in-accessor.js
	var require_define_built_in_accessor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var makeBuiltIn = require_make_built_in();
		var defineProperty = require_object_define_property();
		module.exports = function(target, name, descriptor) {
			if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
			if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
			return defineProperty.f(target, name, descriptor);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/create-property.js
	var require_create_property = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var DESCRIPTORS = require_descriptors();
		var definePropertyModule = require_object_define_property();
		var createPropertyDescriptor = require_create_property_descriptor();
		module.exports = function(object, key, value) {
			if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
			else object[key] = value;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/iterators-core.js
	var require_iterators_core = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var fails = require_fails();
		var isCallable = require_is_callable();
		var isObject = require_is_object();
		var create = require_object_create();
		var getPrototypeOf = require_object_get_prototype_of();
		var defineBuiltIn = require_define_built_in();
		var wellKnownSymbol = require_well_known_symbol();
		var IS_PURE = require_is_pure();
		var ITERATOR = wellKnownSymbol("iterator");
		var BUGGY_SAFARI_ITERATORS = false;
		var IteratorPrototype;
		var PrototypeOfArrayIteratorPrototype;
		var arrayIterator;
		if ([].keys) {
			arrayIterator = [].keys();
			if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
			else {
				PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
				if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
			}
		}
		if (!isObject(IteratorPrototype) || fails(function() {
			var test = {};
			return IteratorPrototype[ITERATOR].call(test) !== test;
		})) IteratorPrototype = {};
		else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
		if (!isCallable(IteratorPrototype[ITERATOR])) defineBuiltIn(IteratorPrototype, ITERATOR, function() {
			return this;
		});
		module.exports = {
			IteratorPrototype,
			BUGGY_SAFARI_ITERATORS
		};
	}));

//#endregion
//#region node_modules/core-js/modules/es.iterator.constructor.js
	var require_es_iterator_constructor = /* @__PURE__ */ __commonJSMin((() => {
		var $ = require_export();
		var globalThis = require_global_this();
		var anInstance = require_an_instance();
		var anObject = require_an_object();
		var isCallable = require_is_callable();
		var getPrototypeOf = require_object_get_prototype_of();
		var defineBuiltInAccessor = require_define_built_in_accessor();
		var createProperty = require_create_property();
		var fails = require_fails();
		var hasOwn = require_has_own_property();
		var wellKnownSymbol = require_well_known_symbol();
		var IteratorPrototype = require_iterators_core().IteratorPrototype;
		var DESCRIPTORS = require_descriptors();
		var IS_PURE = require_is_pure();
		var CONSTRUCTOR = "constructor";
		var ITERATOR = "Iterator";
		var TO_STRING_TAG = wellKnownSymbol("toStringTag");
		var $TypeError = TypeError;
		var NativeIterator = globalThis[ITERATOR];
		var FORCED = IS_PURE || !isCallable(NativeIterator) || NativeIterator.prototype !== IteratorPrototype || !fails(function() {
			NativeIterator({});
		});
		var IteratorConstructor = function Iterator() {
			anInstance(this, IteratorPrototype);
			if (getPrototypeOf(this) === IteratorPrototype) throw new $TypeError("Abstract class Iterator not directly constructable");
		};
		var defineIteratorPrototypeAccessor = function(key, value) {
			if (DESCRIPTORS) defineBuiltInAccessor(IteratorPrototype, key, {
				configurable: true,
				get: function() {
					return value;
				},
				set: function(replacement) {
					anObject(this);
					if (this === IteratorPrototype) throw new $TypeError("You can't redefine this property");
					if (hasOwn(this, key)) this[key] = replacement;
					else createProperty(this, key, replacement);
				}
			});
			else IteratorPrototype[key] = value;
		};
		if (!hasOwn(IteratorPrototype, TO_STRING_TAG)) defineIteratorPrototypeAccessor(TO_STRING_TAG, ITERATOR);
		if (FORCED || !hasOwn(IteratorPrototype, CONSTRUCTOR) || IteratorPrototype[CONSTRUCTOR] === Object) defineIteratorPrototypeAccessor(CONSTRUCTOR, IteratorConstructor);
		IteratorConstructor.prototype = IteratorPrototype;
		$({
			global: true,
			constructor: true,
			forced: FORCED
		}, { Iterator: IteratorConstructor });
	}));

//#endregion
//#region node_modules/core-js/modules/esnext.iterator.constructor.js
	var require_esnext_iterator_constructor = /* @__PURE__ */ __commonJSMin((() => {
		require_es_iterator_constructor();
	}));

//#endregion
//#region node_modules/core-js/internals/get-iterator-direct.js
	var require_get_iterator_direct = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function(obj) {
			return {
				iterator: obj,
				next: obj.next,
				done: false
			};
		};
	}));

//#endregion
//#region node_modules/core-js/internals/define-built-ins.js
	var require_define_built_ins = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var defineBuiltIn = require_define_built_in();
		module.exports = function(target, src, options) {
			for (var key in src) defineBuiltIn(target, key, src[key], options);
			return target;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/create-iter-result-object.js
	var require_create_iter_result_object = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function(value, done) {
			return {
				value,
				done
			};
		};
	}));

//#endregion
//#region node_modules/core-js/internals/iterator-close.js
	var require_iterator_close = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var call = require_function_call();
		var anObject = require_an_object();
		var getMethod = require_get_method();
		module.exports = function(iterator, kind, value) {
			var innerResult;
			var innerError;
			anObject(iterator);
			try {
				innerResult = getMethod(iterator, "return");
				if (!innerResult) {
					if (kind === "throw") throw value;
					return value;
				}
				innerResult = call(innerResult, iterator);
			} catch (error) {
				innerError = true;
				innerResult = error;
			}
			if (kind === "throw") throw value;
			if (innerError) throw innerResult;
			anObject(innerResult);
			return value;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/iterator-close-all.js
	var require_iterator_close_all = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var iteratorClose = require_iterator_close();
		module.exports = function(iters, kind, value) {
			for (var i = iters.length - 1; i >= 0; i--) {
				if (iters[i] === void 0) continue;
				try {
					value = iteratorClose(iters[i].iterator, kind, value);
				} catch (error) {
					kind = "throw";
					value = error;
				}
			}
			if (kind === "throw") throw value;
			return value;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/iterator-create-proxy.js
	var require_iterator_create_proxy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var call = require_function_call();
		var create = require_object_create();
		var createNonEnumerableProperty = require_create_non_enumerable_property();
		var defineBuiltIns = require_define_built_ins();
		var wellKnownSymbol = require_well_known_symbol();
		var InternalStateModule = require_internal_state();
		var getMethod = require_get_method();
		var IteratorPrototype = require_iterators_core().IteratorPrototype;
		var createIterResultObject = require_create_iter_result_object();
		var iteratorClose = require_iterator_close();
		var iteratorCloseAll = require_iterator_close_all();
		var TO_STRING_TAG = wellKnownSymbol("toStringTag");
		var ITERATOR_HELPER = "IteratorHelper";
		var WRAP_FOR_VALID_ITERATOR = "WrapForValidIterator";
		var NORMAL = "normal";
		var THROW = "throw";
		var setInternalState = InternalStateModule.set;
		var createIteratorProxyPrototype = function(IS_ITERATOR) {
			var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);
			return defineBuiltIns(create(IteratorPrototype), {
				next: function next() {
					var state = getInternalState(this);
					if (IS_ITERATOR) return state.nextHandler();
					if (state.done) return createIterResultObject(void 0, true);
					try {
						var result = state.nextHandler();
						return state.returnHandlerResult ? result : createIterResultObject(result, state.done);
					} catch (error) {
						state.done = true;
						throw error;
					}
				},
				"return": function() {
					var state = getInternalState(this);
					var iterator = state.iterator;
					state.done = true;
					if (IS_ITERATOR) {
						var returnMethod = getMethod(iterator, "return");
						return returnMethod ? call(returnMethod, iterator) : createIterResultObject(void 0, true);
					}
					if (state.inner) try {
						iteratorClose(state.inner.iterator, NORMAL);
					} catch (error) {
						return iteratorClose(iterator, THROW, error);
					}
					if (state.openIters) try {
						iteratorCloseAll(state.openIters, NORMAL);
					} catch (error) {
						return iteratorClose(iterator, THROW, error);
					}
					if (iterator) iteratorClose(iterator, NORMAL);
					return createIterResultObject(void 0, true);
				}
			});
		};
		var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
		var IteratorHelperPrototype = createIteratorProxyPrototype(false);
		createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, "Iterator Helper");
		module.exports = function(nextHandler, IS_ITERATOR, RETURN_HANDLER_RESULT) {
			var IteratorProxy = function Iterator(record, state) {
				if (state) {
					state.iterator = record.iterator;
					state.next = record.next;
				} else state = record;
				state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
				state.returnHandlerResult = !!RETURN_HANDLER_RESULT;
				state.nextHandler = nextHandler;
				state.counter = 0;
				state.done = false;
				setInternalState(this, state);
			};
			IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;
			return IteratorProxy;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/call-with-safe-iteration-closing.js
	var require_call_with_safe_iteration_closing = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var anObject = require_an_object();
		var iteratorClose = require_iterator_close();
		module.exports = function(iterator, fn, value, ENTRIES) {
			try {
				return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
			} catch (error) {
				iteratorClose(iterator, "throw", error);
			}
		};
	}));

//#endregion
//#region node_modules/core-js/internals/iterator-helper-throws-on-invalid-iterator.js
	var require_iterator_helper_throws_on_invalid_iterator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = function(methodName, argument) {
			var method = typeof Iterator == "function" && Iterator.prototype[methodName];
			if (method) try {
				method.call({ next: null }, argument).next();
			} catch (error) {
				return true;
			}
		};
	}));

//#endregion
//#region node_modules/core-js/internals/iterator-helper-without-closing-on-early-error.js
	var require_iterator_helper_without_closing_on_early_error = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var globalThis = require_global_this();
		module.exports = function(METHOD_NAME, ExpectedError) {
			var Iterator = globalThis.Iterator;
			var IteratorPrototype = Iterator && Iterator.prototype;
			var method = IteratorPrototype && IteratorPrototype[METHOD_NAME];
			var CLOSED = false;
			if (method) try {
				method.call({
					next: function() {
						return { done: true };
					},
					"return": function() {
						CLOSED = true;
					}
				}, -1);
			} catch (error) {
				if (!(error instanceof ExpectedError)) CLOSED = false;
			}
			if (!CLOSED) return method;
		};
	}));

//#endregion
//#region node_modules/core-js/modules/es.iterator.filter.js
	var require_es_iterator_filter = /* @__PURE__ */ __commonJSMin((() => {
		var $ = require_export();
		var call = require_function_call();
		var aCallable = require_a_callable();
		var anObject = require_an_object();
		var getIteratorDirect = require_get_iterator_direct();
		var createIteratorProxy = require_iterator_create_proxy();
		var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
		var IS_PURE = require_is_pure();
		var iteratorClose = require_iterator_close();
		var iteratorHelperThrowsOnInvalidIterator = require_iterator_helper_throws_on_invalid_iterator();
		var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
		var FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("filter", function() {});
		var filterWithoutClosingOnEarlyError = !IS_PURE && !FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("filter", TypeError);
		var FORCED = IS_PURE || FILTER_WITHOUT_THROWING_ON_INVALID_ITERATOR || filterWithoutClosingOnEarlyError;
		var IteratorProxy = createIteratorProxy(function() {
			var iterator = this.iterator;
			var predicate = this.predicate;
			var next = this.next;
			var result;
			var done;
			var value;
			while (true) {
				result = anObject(call(next, iterator));
				done = this.done = !!result.done;
				if (done) return;
				value = result.value;
				if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
			}
		});
		$({
			target: "Iterator",
			proto: true,
			real: true,
			forced: FORCED
		}, { filter: function filter(predicate) {
			anObject(this);
			try {
				aCallable(predicate);
			} catch (error) {
				iteratorClose(this, "throw", error);
			}
			if (filterWithoutClosingOnEarlyError) return call(filterWithoutClosingOnEarlyError, this, predicate);
			return new IteratorProxy(getIteratorDirect(this), { predicate });
		} });
	}));

//#endregion
//#region node_modules/core-js/modules/esnext.iterator.filter.js
	var require_esnext_iterator_filter = /* @__PURE__ */ __commonJSMin((() => {
		require_es_iterator_filter();
	}));

//#endregion
//#region node_modules/core-js/internals/function-uncurry-this-clause.js
	var require_function_uncurry_this_clause = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var classofRaw = require_classof_raw();
		var uncurryThis = require_function_uncurry_this();
		module.exports = function(fn) {
			if (classofRaw(fn) === "Function") return uncurryThis(fn);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/function-bind-context.js
	var require_function_bind_context = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var uncurryThis = require_function_uncurry_this_clause();
		var aCallable = require_a_callable();
		var NATIVE_BIND = require_function_bind_native();
		var bind = uncurryThis(uncurryThis.bind);
		module.exports = function(fn, that) {
			aCallable(fn);
			return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
				return fn.apply(that, arguments);
			};
		};
	}));

//#endregion
//#region node_modules/core-js/internals/iterators.js
	var require_iterators = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = {};
	}));

//#endregion
//#region node_modules/core-js/internals/is-array-iterator-method.js
	var require_is_array_iterator_method = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var wellKnownSymbol = require_well_known_symbol();
		var Iterators = require_iterators();
		var ITERATOR = wellKnownSymbol("iterator");
		var ArrayPrototype = Array.prototype;
		module.exports = function(it) {
			return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/to-string-tag-support.js
	var require_to_string_tag_support = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var TO_STRING_TAG = require_well_known_symbol()("toStringTag");
		var test = {};
		test[TO_STRING_TAG] = "z";
		module.exports = String(test) === "[object z]";
	}));

//#endregion
//#region node_modules/core-js/internals/classof.js
	var require_classof = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
		var isCallable = require_is_callable();
		var classofRaw = require_classof_raw();
		var TO_STRING_TAG = require_well_known_symbol()("toStringTag");
		var $Object = Object;
		var CORRECT_ARGUMENTS = classofRaw(function() {
			return arguments;
		}()) === "Arguments";
		var tryGet = function(it, key) {
			try {
				return it[key];
			} catch (error) {}
		};
		module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
			var O;
			var tag;
			var result;
			return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/get-iterator-method.js
	var require_get_iterator_method = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var classof = require_classof();
		var getMethod = require_get_method();
		var isNullOrUndefined = require_is_null_or_undefined();
		var Iterators = require_iterators();
		var ITERATOR = require_well_known_symbol()("iterator");
		module.exports = function(it) {
			if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
		};
	}));

//#endregion
//#region node_modules/core-js/internals/get-iterator.js
	var require_get_iterator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var call = require_function_call();
		var aCallable = require_a_callable();
		var anObject = require_an_object();
		var tryToString = require_try_to_string();
		var getIteratorMethod = require_get_iterator_method();
		var $TypeError = TypeError;
		module.exports = function(argument, usingIterator) {
			var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
			if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
			throw new $TypeError(tryToString(argument) + " is not iterable");
		};
	}));

//#endregion
//#region node_modules/core-js/internals/iterate.js
	var require_iterate = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var bind = require_function_bind_context();
		var call = require_function_call();
		var anObject = require_an_object();
		var tryToString = require_try_to_string();
		var isArrayIteratorMethod = require_is_array_iterator_method();
		var lengthOfArrayLike = require_length_of_array_like();
		var isPrototypeOf = require_object_is_prototype_of();
		var getIterator = require_get_iterator();
		var getIteratorMethod = require_get_iterator_method();
		var iteratorClose = require_iterator_close();
		var $TypeError = TypeError;
		var Result = function(stopped, result) {
			this.stopped = stopped;
			this.result = result;
		};
		var ResultPrototype = Result.prototype;
		module.exports = function(iterable, unboundFunction, options) {
			var that = options && options.that;
			var AS_ENTRIES = !!(options && options.AS_ENTRIES);
			var IS_RECORD = !!(options && options.IS_RECORD);
			var IS_ITERATOR = !!(options && options.IS_ITERATOR);
			var INTERRUPTED = !!(options && options.INTERRUPTED);
			var fn = bind(unboundFunction, that);
			var iterator;
			var iterFn;
			var index;
			var length;
			var result;
			var next;
			var step;
			var stop = function(condition) {
				if (iterator) iteratorClose(iterator, "normal");
				return new Result(true, condition);
			};
			var callFn = function(value) {
				if (AS_ENTRIES) {
					anObject(value);
					return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
				}
				return INTERRUPTED ? fn(value, stop) : fn(value);
			};
			if (IS_RECORD) iterator = iterable.iterator;
			else if (IS_ITERATOR) iterator = iterable;
			else {
				iterFn = getIteratorMethod(iterable);
				if (!iterFn) throw new $TypeError(tryToString(iterable) + " is not iterable");
				if (isArrayIteratorMethod(iterFn)) {
					for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
						result = callFn(iterable[index]);
						if (result && isPrototypeOf(ResultPrototype, result)) return result;
					}
					return new Result(false);
				}
				iterator = getIterator(iterable, iterFn);
			}
			next = IS_RECORD ? iterable.next : iterator.next;
			while (!(step = call(next, iterator)).done) {
				try {
					result = callFn(step.value);
				} catch (error) {
					iteratorClose(iterator, "throw", error);
				}
				if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
			}
			return new Result(false);
		};
	}));

//#endregion
//#region node_modules/core-js/modules/es.iterator.find.js
	var require_es_iterator_find = /* @__PURE__ */ __commonJSMin((() => {
		var $ = require_export();
		var call = require_function_call();
		var iterate = require_iterate();
		var aCallable = require_a_callable();
		var anObject = require_an_object();
		var getIteratorDirect = require_get_iterator_direct();
		var iteratorClose = require_iterator_close();
		var findWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error()("find", TypeError);
		$({
			target: "Iterator",
			proto: true,
			real: true,
			forced: findWithoutClosingOnEarlyError
		}, { find: function find(predicate) {
			anObject(this);
			try {
				aCallable(predicate);
			} catch (error) {
				iteratorClose(this, "throw", error);
			}
			if (findWithoutClosingOnEarlyError) return call(findWithoutClosingOnEarlyError, this, predicate);
			var record = getIteratorDirect(this);
			var counter = 0;
			return iterate(record, function(value, stop) {
				if (predicate(value, counter++)) return stop(value);
			}, {
				IS_RECORD: true,
				INTERRUPTED: true
			}).result;
		} });
	}));

//#endregion
//#region node_modules/core-js/modules/esnext.iterator.find.js
	var require_esnext_iterator_find = /* @__PURE__ */ __commonJSMin((() => {
		require_es_iterator_find();
	}));

//#endregion
//#region node_modules/core-js/modules/es.iterator.for-each.js
	var require_es_iterator_for_each = /* @__PURE__ */ __commonJSMin((() => {
		var $ = require_export();
		var call = require_function_call();
		var iterate = require_iterate();
		var aCallable = require_a_callable();
		var anObject = require_an_object();
		var getIteratorDirect = require_get_iterator_direct();
		var iteratorClose = require_iterator_close();
		var forEachWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error()("forEach", TypeError);
		$({
			target: "Iterator",
			proto: true,
			real: true,
			forced: forEachWithoutClosingOnEarlyError
		}, { forEach: function forEach(fn) {
			anObject(this);
			try {
				aCallable(fn);
			} catch (error) {
				iteratorClose(this, "throw", error);
			}
			if (forEachWithoutClosingOnEarlyError) return call(forEachWithoutClosingOnEarlyError, this, fn);
			var record = getIteratorDirect(this);
			var counter = 0;
			iterate(record, function(value) {
				fn(value, counter++);
			}, { IS_RECORD: true });
		} });
	}));

//#endregion
//#region node_modules/core-js/modules/esnext.iterator.for-each.js
	var require_esnext_iterator_for_each = /* @__PURE__ */ __commonJSMin((() => {
		require_es_iterator_for_each();
	}));

//#endregion
//#region node_modules/dompurify/dist/purify.cjs.js
/*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE */
	var require_purify_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var { entries, setPrototypeOf, isFrozen, getPrototypeOf, getOwnPropertyDescriptor } = Object;
		var { freeze, seal, create } = Object;
		var { apply, construct } = typeof Reflect !== "undefined" && Reflect;
		if (!freeze) freeze = function freeze(x) {
			return x;
		};
		if (!seal) seal = function seal(x) {
			return x;
		};
		if (!apply) apply = function apply(func, thisArg) {
			for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
			return func.apply(thisArg, args);
		};
		if (!construct) construct = function construct(Func) {
			for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
			return new Func(...args);
		};
		var arrayForEach = unapply(Array.prototype.forEach);
		var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
		var arrayPop = unapply(Array.prototype.pop);
		var arrayPush = unapply(Array.prototype.push);
		var arraySplice = unapply(Array.prototype.splice);
		var stringToLowerCase = unapply(String.prototype.toLowerCase);
		var stringToString = unapply(String.prototype.toString);
		var stringMatch = unapply(String.prototype.match);
		var stringReplace = unapply(String.prototype.replace);
		var stringIndexOf = unapply(String.prototype.indexOf);
		var stringTrim = unapply(String.prototype.trim);
		var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
		var regExpTest = unapply(RegExp.prototype.test);
		var typeErrorCreate = unconstruct(TypeError);
		/**
		* Creates a new function that calls the given function with a specified thisArg and arguments.
		*
		* @param func - The function to be wrapped and called.
		* @returns A new function that calls the given function with a specified thisArg and arguments.
		*/
		function unapply(func) {
			return function(thisArg) {
				if (thisArg instanceof RegExp) thisArg.lastIndex = 0;
				for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
				return apply(func, thisArg, args);
			};
		}
		/**
		* Creates a new function that constructs an instance of the given constructor function with the provided arguments.
		*
		* @param func - The constructor function to be wrapped and called.
		* @returns A new function that constructs an instance of the given constructor function with the provided arguments.
		*/
		function unconstruct(Func) {
			return function() {
				for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
				return construct(Func, args);
			};
		}
		/**
		* Add properties to a lookup table
		*
		* @param set - The set to which elements will be added.
		* @param array - The array containing elements to be added to the set.
		* @param transformCaseFunc - An optional function to transform the case of each element before adding to the set.
		* @returns The modified set with added elements.
		*/
		function addToSet(set, array) {
			let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
			if (setPrototypeOf) setPrototypeOf(set, null);
			let l = array.length;
			while (l--) {
				let element = array[l];
				if (typeof element === "string") {
					const lcElement = transformCaseFunc(element);
					if (lcElement !== element) {
						if (!isFrozen(array)) array[l] = lcElement;
						element = lcElement;
					}
				}
				set[element] = true;
			}
			return set;
		}
		/**
		* Clean up an array to harden against CSPP
		*
		* @param array - The array to be cleaned.
		* @returns The cleaned version of the array
		*/
		function cleanArray(array) {
			for (let index = 0; index < array.length; index++) if (!objectHasOwnProperty(array, index)) array[index] = null;
			return array;
		}
		/**
		* Shallow clone an object
		*
		* @param object - The object to be cloned.
		* @returns A new object that copies the original.
		*/
		function clone(object) {
			const newObject = create(null);
			for (const [property, value] of entries(object)) if (objectHasOwnProperty(object, property)) if (Array.isArray(value)) newObject[property] = cleanArray(value);
			else if (value && typeof value === "object" && value.constructor === Object) newObject[property] = clone(value);
			else newObject[property] = value;
			return newObject;
		}
		/**
		* This method automatically checks if the prop is function or getter and behaves accordingly.
		*
		* @param object - The object to look up the getter function in its prototype chain.
		* @param prop - The property name for which to find the getter function.
		* @returns The getter function found in the prototype chain or a fallback function.
		*/
		function lookupGetter(object, prop) {
			while (object !== null) {
				const desc = getOwnPropertyDescriptor(object, prop);
				if (desc) {
					if (desc.get) return unapply(desc.get);
					if (typeof desc.value === "function") return unapply(desc.value);
				}
				object = getPrototypeOf(object);
			}
			function fallbackValue() {
				return null;
			}
			return fallbackValue;
		}
		var html$1 = freeze([
			"a",
			"abbr",
			"acronym",
			"address",
			"area",
			"article",
			"aside",
			"audio",
			"b",
			"bdi",
			"bdo",
			"big",
			"blink",
			"blockquote",
			"body",
			"br",
			"button",
			"canvas",
			"caption",
			"center",
			"cite",
			"code",
			"col",
			"colgroup",
			"content",
			"data",
			"datalist",
			"dd",
			"decorator",
			"del",
			"details",
			"dfn",
			"dialog",
			"dir",
			"div",
			"dl",
			"dt",
			"element",
			"em",
			"fieldset",
			"figcaption",
			"figure",
			"font",
			"footer",
			"form",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"head",
			"header",
			"hgroup",
			"hr",
			"html",
			"i",
			"img",
			"input",
			"ins",
			"kbd",
			"label",
			"legend",
			"li",
			"main",
			"map",
			"mark",
			"marquee",
			"menu",
			"menuitem",
			"meter",
			"nav",
			"nobr",
			"ol",
			"optgroup",
			"option",
			"output",
			"p",
			"picture",
			"pre",
			"progress",
			"q",
			"rp",
			"rt",
			"ruby",
			"s",
			"samp",
			"search",
			"section",
			"select",
			"shadow",
			"slot",
			"small",
			"source",
			"spacer",
			"span",
			"strike",
			"strong",
			"style",
			"sub",
			"summary",
			"sup",
			"table",
			"tbody",
			"td",
			"template",
			"textarea",
			"tfoot",
			"th",
			"thead",
			"time",
			"tr",
			"track",
			"tt",
			"u",
			"ul",
			"var",
			"video",
			"wbr"
		]);
		var svg$1 = freeze([
			"svg",
			"a",
			"altglyph",
			"altglyphdef",
			"altglyphitem",
			"animatecolor",
			"animatemotion",
			"animatetransform",
			"circle",
			"clippath",
			"defs",
			"desc",
			"ellipse",
			"enterkeyhint",
			"exportparts",
			"filter",
			"font",
			"g",
			"glyph",
			"glyphref",
			"hkern",
			"image",
			"inputmode",
			"line",
			"lineargradient",
			"marker",
			"mask",
			"metadata",
			"mpath",
			"part",
			"path",
			"pattern",
			"polygon",
			"polyline",
			"radialgradient",
			"rect",
			"stop",
			"style",
			"switch",
			"symbol",
			"text",
			"textpath",
			"title",
			"tref",
			"tspan",
			"view",
			"vkern"
		]);
		var svgFilters = freeze([
			"feBlend",
			"feColorMatrix",
			"feComponentTransfer",
			"feComposite",
			"feConvolveMatrix",
			"feDiffuseLighting",
			"feDisplacementMap",
			"feDistantLight",
			"feDropShadow",
			"feFlood",
			"feFuncA",
			"feFuncB",
			"feFuncG",
			"feFuncR",
			"feGaussianBlur",
			"feImage",
			"feMerge",
			"feMergeNode",
			"feMorphology",
			"feOffset",
			"fePointLight",
			"feSpecularLighting",
			"feSpotLight",
			"feTile",
			"feTurbulence"
		]);
		var svgDisallowed = freeze([
			"animate",
			"color-profile",
			"cursor",
			"discard",
			"font-face",
			"font-face-format",
			"font-face-name",
			"font-face-src",
			"font-face-uri",
			"foreignobject",
			"hatch",
			"hatchpath",
			"mesh",
			"meshgradient",
			"meshpatch",
			"meshrow",
			"missing-glyph",
			"script",
			"set",
			"solidcolor",
			"unknown",
			"use"
		]);
		var mathMl$1 = freeze([
			"math",
			"menclose",
			"merror",
			"mfenced",
			"mfrac",
			"mglyph",
			"mi",
			"mlabeledtr",
			"mmultiscripts",
			"mn",
			"mo",
			"mover",
			"mpadded",
			"mphantom",
			"mroot",
			"mrow",
			"ms",
			"mspace",
			"msqrt",
			"mstyle",
			"msub",
			"msup",
			"msubsup",
			"mtable",
			"mtd",
			"mtext",
			"mtr",
			"munder",
			"munderover",
			"mprescripts"
		]);
		var mathMlDisallowed = freeze([
			"maction",
			"maligngroup",
			"malignmark",
			"mlongdiv",
			"mscarries",
			"mscarry",
			"msgroup",
			"mstack",
			"msline",
			"msrow",
			"semantics",
			"annotation",
			"annotation-xml",
			"mprescripts",
			"none"
		]);
		var text = freeze(["#text"]);
		var html = freeze([
			"accept",
			"action",
			"align",
			"alt",
			"autocapitalize",
			"autocomplete",
			"autopictureinpicture",
			"autoplay",
			"background",
			"bgcolor",
			"border",
			"capture",
			"cellpadding",
			"cellspacing",
			"checked",
			"cite",
			"class",
			"clear",
			"color",
			"cols",
			"colspan",
			"controls",
			"controlslist",
			"coords",
			"crossorigin",
			"datetime",
			"decoding",
			"default",
			"dir",
			"disabled",
			"disablepictureinpicture",
			"disableremoteplayback",
			"download",
			"draggable",
			"enctype",
			"enterkeyhint",
			"exportparts",
			"face",
			"for",
			"headers",
			"height",
			"hidden",
			"high",
			"href",
			"hreflang",
			"id",
			"inert",
			"inputmode",
			"integrity",
			"ismap",
			"kind",
			"label",
			"lang",
			"list",
			"loading",
			"loop",
			"low",
			"max",
			"maxlength",
			"media",
			"method",
			"min",
			"minlength",
			"multiple",
			"muted",
			"name",
			"nonce",
			"noshade",
			"novalidate",
			"nowrap",
			"open",
			"optimum",
			"part",
			"pattern",
			"placeholder",
			"playsinline",
			"popover",
			"popovertarget",
			"popovertargetaction",
			"poster",
			"preload",
			"pubdate",
			"radiogroup",
			"readonly",
			"rel",
			"required",
			"rev",
			"reversed",
			"role",
			"rows",
			"rowspan",
			"spellcheck",
			"scope",
			"selected",
			"shape",
			"size",
			"sizes",
			"slot",
			"span",
			"srclang",
			"start",
			"src",
			"srcset",
			"step",
			"style",
			"summary",
			"tabindex",
			"title",
			"translate",
			"type",
			"usemap",
			"valign",
			"value",
			"width",
			"wrap",
			"xmlns",
			"slot"
		]);
		var svg = freeze([
			"accent-height",
			"accumulate",
			"additive",
			"alignment-baseline",
			"amplitude",
			"ascent",
			"attributename",
			"attributetype",
			"azimuth",
			"basefrequency",
			"baseline-shift",
			"begin",
			"bias",
			"by",
			"class",
			"clip",
			"clippathunits",
			"clip-path",
			"clip-rule",
			"color",
			"color-interpolation",
			"color-interpolation-filters",
			"color-profile",
			"color-rendering",
			"cx",
			"cy",
			"d",
			"dx",
			"dy",
			"diffuseconstant",
			"direction",
			"display",
			"divisor",
			"dur",
			"edgemode",
			"elevation",
			"end",
			"exponent",
			"fill",
			"fill-opacity",
			"fill-rule",
			"filter",
			"filterunits",
			"flood-color",
			"flood-opacity",
			"font-family",
			"font-size",
			"font-size-adjust",
			"font-stretch",
			"font-style",
			"font-variant",
			"font-weight",
			"fx",
			"fy",
			"g1",
			"g2",
			"glyph-name",
			"glyphref",
			"gradientunits",
			"gradienttransform",
			"height",
			"href",
			"id",
			"image-rendering",
			"in",
			"in2",
			"intercept",
			"k",
			"k1",
			"k2",
			"k3",
			"k4",
			"kerning",
			"keypoints",
			"keysplines",
			"keytimes",
			"lang",
			"lengthadjust",
			"letter-spacing",
			"kernelmatrix",
			"kernelunitlength",
			"lighting-color",
			"local",
			"marker-end",
			"marker-mid",
			"marker-start",
			"markerheight",
			"markerunits",
			"markerwidth",
			"maskcontentunits",
			"maskunits",
			"max",
			"mask",
			"mask-type",
			"media",
			"method",
			"mode",
			"min",
			"name",
			"numoctaves",
			"offset",
			"operator",
			"opacity",
			"order",
			"orient",
			"orientation",
			"origin",
			"overflow",
			"paint-order",
			"path",
			"pathlength",
			"patterncontentunits",
			"patterntransform",
			"patternunits",
			"points",
			"preservealpha",
			"preserveaspectratio",
			"primitiveunits",
			"r",
			"rx",
			"ry",
			"radius",
			"refx",
			"refy",
			"repeatcount",
			"repeatdur",
			"restart",
			"result",
			"rotate",
			"scale",
			"seed",
			"shape-rendering",
			"slope",
			"specularconstant",
			"specularexponent",
			"spreadmethod",
			"startoffset",
			"stddeviation",
			"stitchtiles",
			"stop-color",
			"stop-opacity",
			"stroke-dasharray",
			"stroke-dashoffset",
			"stroke-linecap",
			"stroke-linejoin",
			"stroke-miterlimit",
			"stroke-opacity",
			"stroke",
			"stroke-width",
			"style",
			"surfacescale",
			"systemlanguage",
			"tabindex",
			"tablevalues",
			"targetx",
			"targety",
			"transform",
			"transform-origin",
			"text-anchor",
			"text-decoration",
			"text-rendering",
			"textlength",
			"type",
			"u1",
			"u2",
			"unicode",
			"values",
			"viewbox",
			"visibility",
			"version",
			"vert-adv-y",
			"vert-origin-x",
			"vert-origin-y",
			"width",
			"word-spacing",
			"wrap",
			"writing-mode",
			"xchannelselector",
			"ychannelselector",
			"x",
			"x1",
			"x2",
			"xmlns",
			"y",
			"y1",
			"y2",
			"z",
			"zoomandpan"
		]);
		var mathMl = freeze([
			"accent",
			"accentunder",
			"align",
			"bevelled",
			"close",
			"columnsalign",
			"columnlines",
			"columnspan",
			"denomalign",
			"depth",
			"dir",
			"display",
			"displaystyle",
			"encoding",
			"fence",
			"frame",
			"height",
			"href",
			"id",
			"largeop",
			"length",
			"linethickness",
			"lspace",
			"lquote",
			"mathbackground",
			"mathcolor",
			"mathsize",
			"mathvariant",
			"maxsize",
			"minsize",
			"movablelimits",
			"notation",
			"numalign",
			"open",
			"rowalign",
			"rowlines",
			"rowspacing",
			"rowspan",
			"rspace",
			"rquote",
			"scriptlevel",
			"scriptminsize",
			"scriptsizemultiplier",
			"selection",
			"separator",
			"separators",
			"stretchy",
			"subscriptshift",
			"supscriptshift",
			"symmetric",
			"voffset",
			"width",
			"xmlns"
		]);
		var xml = freeze([
			"xlink:href",
			"xml:id",
			"xlink:title",
			"xml:space",
			"xmlns:xlink"
		]);
		var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
		var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
		var TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm);
		var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
		var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
		var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
		var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
		var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
		var DOCTYPE_NAME = seal(/^html$/i);
		var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
		var EXPRESSIONS = /*#__PURE__*/ Object.freeze({
			__proto__: null,
			ARIA_ATTR,
			ATTR_WHITESPACE,
			CUSTOM_ELEMENT,
			DATA_ATTR,
			DOCTYPE_NAME,
			ERB_EXPR,
			IS_ALLOWED_URI,
			IS_SCRIPT_OR_DATA,
			MUSTACHE_EXPR,
			TMPLIT_EXPR
		});
		var NODE_TYPE = {
			element: 1,
			attribute: 2,
			text: 3,
			cdataSection: 4,
			entityReference: 5,
			entityNode: 6,
			progressingInstruction: 7,
			comment: 8,
			document: 9,
			documentType: 10,
			documentFragment: 11,
			notation: 12
		};
		var getGlobal = function getGlobal() {
			return typeof window === "undefined" ? null : window;
		};
		/**
		* Creates a no-op policy for internal use only.
		* Don't export this function outside this module!
		* @param trustedTypes The policy factory.
		* @param purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
		* @return The policy created (or null, if Trusted Types
		* are not supported or creating the policy failed).
		*/
		var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
			if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") return null;
			let suffix = null;
			const ATTR_NAME = "data-tt-policy-suffix";
			if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) suffix = purifyHostElement.getAttribute(ATTR_NAME);
			const policyName = "dompurify" + (suffix ? "#" + suffix : "");
			try {
				return trustedTypes.createPolicy(policyName, {
					createHTML(html) {
						return html;
					},
					createScriptURL(scriptUrl) {
						return scriptUrl;
					}
				});
			} catch (_) {
				console.warn("TrustedTypes policy " + policyName + " could not be created.");
				return null;
			}
		};
		var _createHooksMap = function _createHooksMap() {
			return {
				afterSanitizeAttributes: [],
				afterSanitizeElements: [],
				afterSanitizeShadowDOM: [],
				beforeSanitizeAttributes: [],
				beforeSanitizeElements: [],
				beforeSanitizeShadowDOM: [],
				uponSanitizeAttribute: [],
				uponSanitizeElement: [],
				uponSanitizeShadowNode: []
			};
		};
		function createDOMPurify() {
			let window = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
			const DOMPurify = (root) => createDOMPurify(root);
			DOMPurify.version = "3.3.0";
			DOMPurify.removed = [];
			if (!window || !window.document || window.document.nodeType !== NODE_TYPE.document || !window.Element) {
				DOMPurify.isSupported = false;
				return DOMPurify;
			}
			let { document } = window;
			const originalDocument = document;
			const currentScript = originalDocument.currentScript;
			const { DocumentFragment, HTMLTemplateElement, Node, Element, NodeFilter, NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap, HTMLFormElement, DOMParser, trustedTypes } = window;
			const ElementPrototype = Element.prototype;
			const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
			const remove = lookupGetter(ElementPrototype, "remove");
			const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
			const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
			const getParentNode = lookupGetter(ElementPrototype, "parentNode");
			if (typeof HTMLTemplateElement === "function") {
				const template = document.createElement("template");
				if (template.content && template.content.ownerDocument) document = template.content.ownerDocument;
			}
			let trustedTypesPolicy;
			let emptyHTML = "";
			const { implementation, createNodeIterator, createDocumentFragment, getElementsByTagName } = document;
			const { importNode } = originalDocument;
			let hooks = _createHooksMap();
			/**
			* Expose whether this browser supports running the full DOMPurify.
			*/
			DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
			const { MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR, DATA_ATTR, ARIA_ATTR, IS_SCRIPT_OR_DATA, ATTR_WHITESPACE, CUSTOM_ELEMENT } = EXPRESSIONS;
			let { IS_ALLOWED_URI: IS_ALLOWED_URI$1 } = EXPRESSIONS;
			/**
			* We consider the elements and attributes below to be safe. Ideally
			* don't add any new ones but feel free to remove unwanted ones.
			*/
			let ALLOWED_TAGS = null;
			const DEFAULT_ALLOWED_TAGS = addToSet({}, [
				...html$1,
				...svg$1,
				...svgFilters,
				...mathMl$1,
				...text
			]);
			let ALLOWED_ATTR = null;
			const DEFAULT_ALLOWED_ATTR = addToSet({}, [
				...html,
				...svg,
				...mathMl,
				...xml
			]);
			let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
				tagNameCheck: {
					writable: true,
					configurable: false,
					enumerable: true,
					value: null
				},
				attributeNameCheck: {
					writable: true,
					configurable: false,
					enumerable: true,
					value: null
				},
				allowCustomizedBuiltInElements: {
					writable: true,
					configurable: false,
					enumerable: true,
					value: false
				}
			}));
			let FORBID_TAGS = null;
			let FORBID_ATTR = null;
			const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
				tagCheck: {
					writable: true,
					configurable: false,
					enumerable: true,
					value: null
				},
				attributeCheck: {
					writable: true,
					configurable: false,
					enumerable: true,
					value: null
				}
			}));
			let ALLOW_ARIA_ATTR = true;
			let ALLOW_DATA_ATTR = true;
			let ALLOW_UNKNOWN_PROTOCOLS = false;
			let ALLOW_SELF_CLOSE_IN_ATTR = true;
			let SAFE_FOR_TEMPLATES = false;
			let SAFE_FOR_XML = true;
			let WHOLE_DOCUMENT = false;
			let SET_CONFIG = false;
			let FORCE_BODY = false;
			let RETURN_DOM = false;
			let RETURN_DOM_FRAGMENT = false;
			let RETURN_TRUSTED_TYPE = false;
			let SANITIZE_DOM = true;
			let SANITIZE_NAMED_PROPS = false;
			const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
			let KEEP_CONTENT = true;
			let IN_PLACE = false;
			let USE_PROFILES = {};
			let FORBID_CONTENTS = null;
			const DEFAULT_FORBID_CONTENTS = addToSet({}, [
				"annotation-xml",
				"audio",
				"colgroup",
				"desc",
				"foreignobject",
				"head",
				"iframe",
				"math",
				"mi",
				"mn",
				"mo",
				"ms",
				"mtext",
				"noembed",
				"noframes",
				"noscript",
				"plaintext",
				"script",
				"style",
				"svg",
				"template",
				"thead",
				"title",
				"video",
				"xmp"
			]);
			let DATA_URI_TAGS = null;
			const DEFAULT_DATA_URI_TAGS = addToSet({}, [
				"audio",
				"video",
				"img",
				"source",
				"image",
				"track"
			]);
			let URI_SAFE_ATTRIBUTES = null;
			const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
				"alt",
				"class",
				"for",
				"id",
				"label",
				"name",
				"pattern",
				"placeholder",
				"role",
				"summary",
				"title",
				"value",
				"style",
				"xmlns"
			]);
			const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
			const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
			const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
			let NAMESPACE = HTML_NAMESPACE;
			let IS_EMPTY_INPUT = false;
			let ALLOWED_NAMESPACES = null;
			const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
				MATHML_NAMESPACE,
				SVG_NAMESPACE,
				HTML_NAMESPACE
			], stringToString);
			let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, [
				"mi",
				"mo",
				"mn",
				"ms",
				"mtext"
			]);
			let HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
			const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
				"title",
				"style",
				"font",
				"a",
				"script"
			]);
			let PARSER_MEDIA_TYPE = null;
			const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
			const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
			let transformCaseFunc = null;
			let CONFIG = null;
			const formElement = document.createElement("form");
			const isRegexOrFunction = function isRegexOrFunction(testValue) {
				return testValue instanceof RegExp || testValue instanceof Function;
			};
			/**
			* _parseConfig
			*
			* @param cfg optional config literal
			*/
			const _parseConfig = function _parseConfig() {
				let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				if (CONFIG && CONFIG === cfg) return;
				if (!cfg || typeof cfg !== "object") cfg = {};
				cfg = clone(cfg);
				PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
				transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
				ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
				ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
				ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
				URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
				DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
				FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
				FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
				FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
				USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
				ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
				ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
				ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
				ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
				SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
				SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
				WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
				RETURN_DOM = cfg.RETURN_DOM || false;
				RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
				RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
				FORCE_BODY = cfg.FORCE_BODY || false;
				SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
				SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
				KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
				IN_PLACE = cfg.IN_PLACE || false;
				IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
				NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
				MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
				HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
				CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
				if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
				if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
				if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
				if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
				if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
				if (USE_PROFILES) {
					ALLOWED_TAGS = addToSet({}, text);
					ALLOWED_ATTR = [];
					if (USE_PROFILES.html === true) {
						addToSet(ALLOWED_TAGS, html$1);
						addToSet(ALLOWED_ATTR, html);
					}
					if (USE_PROFILES.svg === true) {
						addToSet(ALLOWED_TAGS, svg$1);
						addToSet(ALLOWED_ATTR, svg);
						addToSet(ALLOWED_ATTR, xml);
					}
					if (USE_PROFILES.svgFilters === true) {
						addToSet(ALLOWED_TAGS, svgFilters);
						addToSet(ALLOWED_ATTR, svg);
						addToSet(ALLOWED_ATTR, xml);
					}
					if (USE_PROFILES.mathMl === true) {
						addToSet(ALLOWED_TAGS, mathMl$1);
						addToSet(ALLOWED_ATTR, mathMl);
						addToSet(ALLOWED_ATTR, xml);
					}
				}
				if (cfg.ADD_TAGS) if (typeof cfg.ADD_TAGS === "function") EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
				else {
					if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = clone(ALLOWED_TAGS);
					addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
				}
				if (cfg.ADD_ATTR) if (typeof cfg.ADD_ATTR === "function") EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
				else {
					if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = clone(ALLOWED_ATTR);
					addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
				}
				if (cfg.ADD_URI_SAFE_ATTR) addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
				if (cfg.FORBID_CONTENTS) {
					if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
					addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
				}
				if (KEEP_CONTENT) ALLOWED_TAGS["#text"] = true;
				if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
					"html",
					"head",
					"body"
				]);
				if (ALLOWED_TAGS.table) {
					addToSet(ALLOWED_TAGS, ["tbody"]);
					delete FORBID_TAGS.tbody;
				}
				if (cfg.TRUSTED_TYPES_POLICY) {
					if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
					if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
					trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
					emptyHTML = trustedTypesPolicy.createHTML("");
				} else {
					if (trustedTypesPolicy === void 0) trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
					if (trustedTypesPolicy !== null && typeof emptyHTML === "string") emptyHTML = trustedTypesPolicy.createHTML("");
				}
				if (freeze) freeze(cfg);
				CONFIG = cfg;
			};
			const ALL_SVG_TAGS = addToSet({}, [
				...svg$1,
				...svgFilters,
				...svgDisallowed
			]);
			const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
			/**
			* @param element a DOM element whose namespace is being checked
			* @returns Return false if the element has a
			*  namespace that a spec-compliant parser would never
			*  return. Return true otherwise.
			*/
			const _checkValidNamespace = function _checkValidNamespace(element) {
				let parent = getParentNode(element);
				if (!parent || !parent.tagName) parent = {
					namespaceURI: NAMESPACE,
					tagName: "template"
				};
				const tagName = stringToLowerCase(element.tagName);
				const parentTagName = stringToLowerCase(parent.tagName);
				if (!ALLOWED_NAMESPACES[element.namespaceURI]) return false;
				if (element.namespaceURI === SVG_NAMESPACE) {
					if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "svg";
					if (parent.namespaceURI === MATHML_NAMESPACE) return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
					return Boolean(ALL_SVG_TAGS[tagName]);
				}
				if (element.namespaceURI === MATHML_NAMESPACE) {
					if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "math";
					if (parent.namespaceURI === SVG_NAMESPACE) return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
					return Boolean(ALL_MATHML_TAGS[tagName]);
				}
				if (element.namespaceURI === HTML_NAMESPACE) {
					if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
					if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
					return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
				}
				if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) return true;
				return false;
			};
			/**
			* _forceRemove
			*
			* @param node a DOM node
			*/
			const _forceRemove = function _forceRemove(node) {
				arrayPush(DOMPurify.removed, { element: node });
				try {
					getParentNode(node).removeChild(node);
				} catch (_) {
					remove(node);
				}
			};
			/**
			* _removeAttribute
			*
			* @param name an Attribute name
			* @param element a DOM node
			*/
			const _removeAttribute = function _removeAttribute(name, element) {
				try {
					arrayPush(DOMPurify.removed, {
						attribute: element.getAttributeNode(name),
						from: element
					});
				} catch (_) {
					arrayPush(DOMPurify.removed, {
						attribute: null,
						from: element
					});
				}
				element.removeAttribute(name);
				if (name === "is") if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
					_forceRemove(element);
				} catch (_) {}
				else try {
					element.setAttribute(name, "");
				} catch (_) {}
			};
			/**
			* _initDocument
			*
			* @param dirty - a string of dirty markup
			* @return a DOM, filled with the dirty markup
			*/
			const _initDocument = function _initDocument(dirty) {
				let doc = null;
				let leadingWhitespace = null;
				if (FORCE_BODY) dirty = "<remove></remove>" + dirty;
				else {
					const matches = stringMatch(dirty, /^[\r\n\t ]+/);
					leadingWhitespace = matches && matches[0];
				}
				if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) dirty = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + dirty + "</body></html>";
				const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
				if (NAMESPACE === HTML_NAMESPACE) try {
					doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
				} catch (_) {}
				if (!doc || !doc.documentElement) {
					doc = implementation.createDocument(NAMESPACE, "template", null);
					try {
						doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
					} catch (_) {}
				}
				const body = doc.body || doc.documentElement;
				if (dirty && leadingWhitespace) body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
				if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
				return WHOLE_DOCUMENT ? doc.documentElement : body;
			};
			/**
			* Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
			*
			* @param root The root element or node to start traversing on.
			* @return The created NodeIterator
			*/
			const _createNodeIterator = function _createNodeIterator(root) {
				return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
			};
			/**
			* _isClobbered
			*
			* @param element element to check for clobbering attacks
			* @return true if clobbered, false if safe
			*/
			const _isClobbered = function _isClobbered(element) {
				return element instanceof HTMLFormElement && (typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function");
			};
			/**
			* Checks whether the given object is a DOM node.
			*
			* @param value object to check whether it's a DOM node
			* @return true is object is a DOM node
			*/
			const _isNode = function _isNode(value) {
				return typeof Node === "function" && value instanceof Node;
			};
			function _executeHooks(hooks, currentNode, data) {
				arrayForEach(hooks, (hook) => {
					hook.call(DOMPurify, currentNode, data, CONFIG);
				});
			}
			/**
			* _sanitizeElements
			*
			* @protect nodeName
			* @protect textContent
			* @protect removeChild
			* @param currentNode to check for permission to exist
			* @return true if node was killed, false if left alive
			*/
			const _sanitizeElements = function _sanitizeElements(currentNode) {
				let content = null;
				_executeHooks(hooks.beforeSanitizeElements, currentNode, null);
				if (_isClobbered(currentNode)) {
					_forceRemove(currentNode);
					return true;
				}
				const tagName = transformCaseFunc(currentNode.nodeName);
				_executeHooks(hooks.uponSanitizeElement, currentNode, {
					tagName,
					allowedTags: ALLOWED_TAGS
				});
				if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
					_forceRemove(currentNode);
					return true;
				}
				if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
					_forceRemove(currentNode);
					return true;
				}
				if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
					_forceRemove(currentNode);
					return true;
				}
				if (!(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName])) {
					if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
						if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
						if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
					}
					if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
						const parentNode = getParentNode(currentNode) || currentNode.parentNode;
						const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
						if (childNodes && parentNode) {
							const childCount = childNodes.length;
							for (let i = childCount - 1; i >= 0; --i) {
								const childClone = cloneNode(childNodes[i], true);
								childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
								parentNode.insertBefore(childClone, getNextSibling(currentNode));
							}
						}
					}
					_forceRemove(currentNode);
					return true;
				}
				if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
					_forceRemove(currentNode);
					return true;
				}
				if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
					_forceRemove(currentNode);
					return true;
				}
				if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
					content = currentNode.textContent;
					arrayForEach([
						MUSTACHE_EXPR,
						ERB_EXPR,
						TMPLIT_EXPR
					], (expr) => {
						content = stringReplace(content, expr, " ");
					});
					if (currentNode.textContent !== content) {
						arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
						currentNode.textContent = content;
					}
				}
				_executeHooks(hooks.afterSanitizeElements, currentNode, null);
				return false;
			};
			/**
			* _isValidAttribute
			*
			* @param lcTag Lowercase tag name of containing element.
			* @param lcName Lowercase attribute name.
			* @param value Attribute value.
			* @return Returns true if `value` is valid, otherwise false.
			*/
			const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
				if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document || value in formElement)) return false;
				if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName));
				else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName));
				else if (EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag));
				else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) if (_isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName, lcTag)) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value)));
				else return false;
				else if (URI_SAFE_ATTRIBUTES[lcName]);
				else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, "")));
				else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]);
				else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, "")));
				else if (value) return false;
				return true;
			};
			/**
			* _isBasicCustomElement
			* checks if at least one dash is included in tagName, and it's not the first char
			* for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
			*
			* @param tagName name of the tag of the node to sanitize
			* @returns Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
			*/
			const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
				return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT);
			};
			/**
			* _sanitizeAttributes
			*
			* @protect attributes
			* @protect nodeName
			* @protect removeAttribute
			* @protect setAttribute
			*
			* @param currentNode to sanitize
			*/
			const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
				_executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
				const { attributes } = currentNode;
				if (!attributes || _isClobbered(currentNode)) return;
				const hookEvent = {
					attrName: "",
					attrValue: "",
					keepAttr: true,
					allowedAttributes: ALLOWED_ATTR,
					forceKeepAttr: void 0
				};
				let l = attributes.length;
				while (l--) {
					const { name, namespaceURI, value: attrValue } = attributes[l];
					const lcName = transformCaseFunc(name);
					const initValue = attrValue;
					let value = name === "value" ? initValue : stringTrim(initValue);
					hookEvent.attrName = lcName;
					hookEvent.attrValue = value;
					hookEvent.keepAttr = true;
					hookEvent.forceKeepAttr = void 0;
					_executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
					value = hookEvent.attrValue;
					if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
						_removeAttribute(name, currentNode);
						value = SANITIZE_NAMED_PROPS_PREFIX + value;
					}
					if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title|textarea)/i, value)) {
						_removeAttribute(name, currentNode);
						continue;
					}
					if (lcName === "attributename" && stringMatch(value, "href")) {
						_removeAttribute(name, currentNode);
						continue;
					}
					if (hookEvent.forceKeepAttr) continue;
					if (!hookEvent.keepAttr) {
						_removeAttribute(name, currentNode);
						continue;
					}
					if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
						_removeAttribute(name, currentNode);
						continue;
					}
					if (SAFE_FOR_TEMPLATES) arrayForEach([
						MUSTACHE_EXPR,
						ERB_EXPR,
						TMPLIT_EXPR
					], (expr) => {
						value = stringReplace(value, expr, " ");
					});
					const lcTag = transformCaseFunc(currentNode.nodeName);
					if (!_isValidAttribute(lcTag, lcName, value)) {
						_removeAttribute(name, currentNode);
						continue;
					}
					if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") if (namespaceURI);
					else switch (trustedTypes.getAttributeType(lcTag, lcName)) {
						case "TrustedHTML":
							value = trustedTypesPolicy.createHTML(value);
							break;
						case "TrustedScriptURL":
							value = trustedTypesPolicy.createScriptURL(value);
							break;
					}
					if (value !== initValue) try {
						if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
						else currentNode.setAttribute(name, value);
						if (_isClobbered(currentNode)) _forceRemove(currentNode);
						else arrayPop(DOMPurify.removed);
					} catch (_) {
						_removeAttribute(name, currentNode);
					}
				}
				_executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
			};
			/**
			* _sanitizeShadowDOM
			*
			* @param fragment to iterate over recursively
			*/
			const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
				let shadowNode = null;
				const shadowIterator = _createNodeIterator(fragment);
				_executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
				while (shadowNode = shadowIterator.nextNode()) {
					_executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
					_sanitizeElements(shadowNode);
					_sanitizeAttributes(shadowNode);
					if (shadowNode.content instanceof DocumentFragment) _sanitizeShadowDOM(shadowNode.content);
				}
				_executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
			};
			DOMPurify.sanitize = function(dirty) {
				let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
				let body = null;
				let importedNode = null;
				let currentNode = null;
				let returnNode = null;
				IS_EMPTY_INPUT = !dirty;
				if (IS_EMPTY_INPUT) dirty = "<!-->";
				if (typeof dirty !== "string" && !_isNode(dirty)) if (typeof dirty.toString === "function") {
					dirty = dirty.toString();
					if (typeof dirty !== "string") throw typeErrorCreate("dirty is not a string, aborting");
				} else throw typeErrorCreate("toString is not a function");
				if (!DOMPurify.isSupported) return dirty;
				if (!SET_CONFIG) _parseConfig(cfg);
				DOMPurify.removed = [];
				if (typeof dirty === "string") IN_PLACE = false;
				if (IN_PLACE) {
					if (dirty.nodeName) {
						const tagName = transformCaseFunc(dirty.nodeName);
						if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
					}
				} else if (dirty instanceof Node) {
					body = _initDocument("<!---->");
					importedNode = body.ownerDocument.importNode(dirty, true);
					if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") body = importedNode;
					else if (importedNode.nodeName === "HTML") body = importedNode;
					else body.appendChild(importedNode);
				} else {
					if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
					body = _initDocument(dirty);
					if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
				}
				if (body && FORCE_BODY) _forceRemove(body.firstChild);
				const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
				while (currentNode = nodeIterator.nextNode()) {
					_sanitizeElements(currentNode);
					_sanitizeAttributes(currentNode);
					if (currentNode.content instanceof DocumentFragment) _sanitizeShadowDOM(currentNode.content);
				}
				if (IN_PLACE) return dirty;
				if (RETURN_DOM) {
					if (RETURN_DOM_FRAGMENT) {
						returnNode = createDocumentFragment.call(body.ownerDocument);
						while (body.firstChild) returnNode.appendChild(body.firstChild);
					} else returnNode = body;
					if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) returnNode = importNode.call(originalDocument, returnNode, true);
					return returnNode;
				}
				let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
				if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
				if (SAFE_FOR_TEMPLATES) arrayForEach([
					MUSTACHE_EXPR,
					ERB_EXPR,
					TMPLIT_EXPR
				], (expr) => {
					serializedHTML = stringReplace(serializedHTML, expr, " ");
				});
				return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
			};
			DOMPurify.setConfig = function() {
				let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				_parseConfig(cfg);
				SET_CONFIG = true;
			};
			DOMPurify.clearConfig = function() {
				CONFIG = null;
				SET_CONFIG = false;
			};
			DOMPurify.isValidAttribute = function(tag, attr, value) {
				if (!CONFIG) _parseConfig({});
				const lcTag = transformCaseFunc(tag);
				const lcName = transformCaseFunc(attr);
				return _isValidAttribute(lcTag, lcName, value);
			};
			DOMPurify.addHook = function(entryPoint, hookFunction) {
				if (typeof hookFunction !== "function") return;
				arrayPush(hooks[entryPoint], hookFunction);
			};
			DOMPurify.removeHook = function(entryPoint, hookFunction) {
				if (hookFunction !== void 0) {
					const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
					return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
				}
				return arrayPop(hooks[entryPoint]);
			};
			DOMPurify.removeHooks = function(entryPoint) {
				hooks[entryPoint] = [];
			};
			DOMPurify.removeAllHooks = function() {
				hooks = _createHooksMap();
			};
			return DOMPurify;
		}
		var purify = createDOMPurify();
		module.exports = purify;
	}));

//#endregion
//#region assets/dev/js/frontend/utils/lightbox/screenfull.js
	var require_screenfull = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		(function() {
			"use strict";
			var document = typeof window !== "undefined" && typeof window.document !== "undefined" ? window.document : {};
			var isCommonjs = typeof module !== "undefined" && module.exports;
			var fn = function() {
				var val;
				var fnMap = [
					[
						"requestFullscreen",
						"exitFullscreen",
						"fullscreenElement",
						"fullscreenEnabled",
						"fullscreenchange",
						"fullscreenerror"
					],
					[
						"webkitRequestFullscreen",
						"webkitExitFullscreen",
						"webkitFullscreenElement",
						"webkitFullscreenEnabled",
						"webkitfullscreenchange",
						"webkitfullscreenerror"
					],
					[
						"webkitRequestFullScreen",
						"webkitCancelFullScreen",
						"webkitCurrentFullScreenElement",
						"webkitCancelFullScreen",
						"webkitfullscreenchange",
						"webkitfullscreenerror"
					],
					[
						"mozRequestFullScreen",
						"mozCancelFullScreen",
						"mozFullScreenElement",
						"mozFullScreenEnabled",
						"mozfullscreenchange",
						"mozfullscreenerror"
					],
					[
						"msRequestFullscreen",
						"msExitFullscreen",
						"msFullscreenElement",
						"msFullscreenEnabled",
						"MSFullscreenChange",
						"MSFullscreenError"
					]
				];
				var i = 0;
				var l = fnMap.length;
				var ret = {};
				for (; i < l; i++) {
					val = fnMap[i];
					if (val && val[1] in document) {
						var valLength = val.length;
						for (i = 0; i < valLength; i++) ret[fnMap[0][i]] = val[i];
						return ret;
					}
				}
				return false;
			}();
			var eventNameMap = {
				change: fn.fullscreenchange,
				error: fn.fullscreenerror
			};
			var screenfull = {
				request(element) {
					return new Promise(function(resolve, reject) {
						var onFullScreenEntered = function() {
							this.off("change", onFullScreenEntered);
							resolve();
						}.bind(this);
						this.on("change", onFullScreenEntered);
						element = element || document.documentElement;
						Promise.resolve(element[fn.requestFullscreen]()).catch(reject);
					}.bind(this));
				},
				exit() {
					return new Promise(function(resolve, reject) {
						if (!this.isFullscreen) {
							resolve();
							return;
						}
						var onFullScreenExit = function() {
							this.off("change", onFullScreenExit);
							resolve();
						}.bind(this);
						this.on("change", onFullScreenExit);
						Promise.resolve(document[fn.exitFullscreen]()).catch(reject);
					}.bind(this));
				},
				toggle(element) {
					return this.isFullscreen ? this.exit() : this.request(element);
				},
				onchange(callback) {
					this.on("change", callback);
				},
				onerror(callback) {
					this.on("error", callback);
				},
				on(event, callback) {
					var eventName = eventNameMap[event];
					if (eventName) document.addEventListener(eventName, callback, false);
				},
				off(event, callback) {
					var eventName = eventNameMap[event];
					if (eventName) document.removeEventListener(eventName, callback, false);
				},
				raw: fn
			};
			if (!fn) {
				if (isCommonjs) module.exports = { isEnabled: false };
				else window.screenfull = { isEnabled: false };
				return;
			}
			Object.defineProperties(screenfull, {
				isFullscreen: { get() {
					return Boolean(document[fn.fullscreenElement]);
				} },
				element: {
					enumerable: true,
					get() {
						return document[fn.fullscreenElement];
					}
				},
				isEnabled: {
					enumerable: true,
					get() {
						return Boolean(document[fn.fullscreenEnabled]);
					}
				}
			});
			if (isCommonjs) module.exports = screenfull;
			else window.screenfull = screenfull;
		})();
	}));

//#endregion
//#region node_modules/core-js/modules/es.iterator.map.js
	var require_es_iterator_map = /* @__PURE__ */ __commonJSMin((() => {
		var $ = require_export();
		var call = require_function_call();
		var aCallable = require_a_callable();
		var anObject = require_an_object();
		var getIteratorDirect = require_get_iterator_direct();
		var createIteratorProxy = require_iterator_create_proxy();
		var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
		var iteratorClose = require_iterator_close();
		var iteratorHelperThrowsOnInvalidIterator = require_iterator_helper_throws_on_invalid_iterator();
		var iteratorHelperWithoutClosingOnEarlyError = require_iterator_helper_without_closing_on_early_error();
		var IS_PURE = require_is_pure();
		var MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator("map", function() {});
		var mapWithoutClosingOnEarlyError = !IS_PURE && !MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR && iteratorHelperWithoutClosingOnEarlyError("map", TypeError);
		var FORCED = IS_PURE || MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || mapWithoutClosingOnEarlyError;
		var IteratorProxy = createIteratorProxy(function() {
			var iterator = this.iterator;
			var result = anObject(call(this.next, iterator));
			if (!(this.done = !!result.done)) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
		});
		$({
			target: "Iterator",
			proto: true,
			real: true,
			forced: FORCED
		}, { map: function map(mapper) {
			anObject(this);
			try {
				aCallable(mapper);
			} catch (error) {
				iteratorClose(this, "throw", error);
			}
			if (mapWithoutClosingOnEarlyError) return call(mapWithoutClosingOnEarlyError, this, mapper);
			return new IteratorProxy(getIteratorDirect(this), { mapper });
		} });
	}));

//#endregion
//#region node_modules/core-js/modules/esnext.iterator.map.js
	var require_esnext_iterator_map = /* @__PURE__ */ __commonJSMin((() => {
		require_es_iterator_map();
	}));

//#endregion
//#region assets/dev/js/frontend/utils/icons/manager.js
	var require_manager = /* @__PURE__ */ __commonJSMin(((exports) => {
		init_defineProperty();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		require_es_array_includes();
		require_es_array_push();
		require_esnext_iterator_constructor();
		require_esnext_iterator_map();
		var IconsManager = class IconsManager {
			constructor(elementsPrefix) {
				this.prefix = `${elementsPrefix}-`;
				this.createSvgSymbolsContainer();
			}
			createSvgElement(name, { path, width, height }) {
				const iconName = this.prefix + name;
				const iconSelector = "#" + this.prefix + name;
				if (!IconsManager.iconsUsageList.includes(iconName)) {
					if (!IconsManager.symbolsContainer.querySelector(iconSelector)) {
						const symbol = this.createSymbolElement({
							id: iconName,
							path,
							width,
							height
						});
						IconsManager.symbolsContainer.appendChild(symbol);
					}
					IconsManager.iconsUsageList.push(iconName);
				}
				return this.createSvgIconElement({
					iconName,
					iconSelector
				});
			}
			createSvgNode(tag, { props = {}, attrs = {} }) {
				const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
				Object.keys(props).map((key) => node[key] = props[key]);
				Object.keys(attrs).map((key) => node.setAttributeNS(null, key, attrs[key]));
				return node;
			}
			createSvgIconElement({ iconName, iconSelector }) {
				return this.createSvgNode("svg", {
					props: { innerHTML: "<use xlink:href=\"" + iconSelector + "\" />" },
					attrs: { class: "e-font-icon-svg e-" + iconName }
				});
			}
			createSvgSymbolsContainer() {
				if (!IconsManager.symbolsContainer) {
					const symbolsContainerId = "e-font-icon-svg-symbols";
					IconsManager.symbolsContainer = document.getElementById(symbolsContainerId);
					if (!IconsManager.symbolsContainer) {
						IconsManager.symbolsContainer = this.createSvgNode("svg", { attrs: {
							style: "display: none;",
							class: symbolsContainerId
						} });
						document.body.appendChild(IconsManager.symbolsContainer);
					}
				}
			}
			createSymbolElement({ id, path, width, height }) {
				return this.createSvgNode("symbol", {
					props: {
						innerHTML: "<path d=\"" + path + "\"></path>",
						id
					},
					attrs: { viewBox: "0 0 " + width + " " + height }
				});
			}
		};
		_defineProperty(IconsManager, "symbolsContainer", void 0);
		_defineProperty(IconsManager, "iconsUsageList", []);
		exports.default = IconsManager;
	}));

//#endregion
//#region assets/dev/js/frontend/utils/icons/e-icons.js
	var require_e_icons = /* @__PURE__ */ __commonJSMin(((exports) => {
		var _interopRequireDefault = require_interopRequireDefault();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.zoomOutBold = exports.zoomInBold = exports.xTwitter = exports.twitter = exports.shareArrow = exports.pinterest = exports.loading = exports.frameMinimize = exports.frameExpand = exports.facebook = exports.downloadBold = exports.close = exports.chevronRight = exports.chevronLeft = void 0;
		var iconsManager = new (_interopRequireDefault(require_manager())).default("eicon");
		exports.chevronLeft = { get element() {
			return iconsManager.createSvgElement("chevron-left", {
				path: "M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z",
				width: 1e3,
				height: 1e3
			});
		} };
		exports.chevronRight = { get element() {
			return iconsManager.createSvgElement("chevron-right", {
				path: "M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z",
				width: 1e3,
				height: 1e3
			});
		} };
		exports.close = { get element() {
			return iconsManager.createSvgElement("close", {
				path: "M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z",
				width: 1e3,
				height: 1e3
			});
		} };
		exports.downloadBold = { get element() {
			return iconsManager.createSvgElement("download-bold", {
				path: "M572 42H428C405 42 385 61 385 85V385H228C197 385 180 424 203 447L475 719C489 732 511 732 524 719L797 447C819 424 803 385 771 385H614V85C615 61 595 42 572 42ZM958 915V715C958 691 939 672 915 672H653L565 760C529 796 471 796 435 760L347 672H85C61 672 42 691 42 715V915C42 939 61 958 85 958H915C939 958 958 939 958 915ZM736 873C736 853 720 837 700 837 681 837 665 853 665 873 665 892 681 908 700 908 720 908 736 892 736 873ZM815 837C835 837 851 853 851 873 851 892 835 908 815 908 795 908 779 892 779 873 779 853 795 837 815 837Z",
				width: 1e3,
				height: 1e3
			});
		} };
		exports.facebook = { get element() {
			return iconsManager.createSvgElement("facebook", {
				path: "M858 42H142C88 42 42 87 42 142V863C42 913 88 958 142 958H421V646H292V500H421V387C421 258 496 192 613 192 667 192 725 200 725 200V325H663C600 325 579 362 579 404V500H721L700 646H583V958H863C917 958 963 913 963 858V142C958 87 913 42 858 42L858 42Z",
				width: 1e3,
				height: 1e3
			});
		} };
		exports.frameExpand = { get element() {
			return iconsManager.createSvgElement("frame-expand", {
				path: "M863 583C890 583 914 605 916 632L917 637V863L916 868C914 893 893 914 868 916L863 917H638L632 916C607 914 586 893 584 868L583 863 584 857C586 832 607 811 632 809L638 808H808V637L809 632C811 605 835 583 863 583ZM138 583C165 583 189 605 191 632L192 637V808H363C390 808 414 830 416 857L417 863C417 890 395 914 368 916L363 917H138C110 917 86 895 84 868L83 863V637C83 607 108 583 138 583ZM863 83C890 83 914 105 916 132L917 137V362C917 392 893 417 863 417 835 417 811 395 809 368L808 362V192H638C610 192 586 170 584 143L583 137C583 110 605 86 632 84L638 83H863ZM363 83L368 84C393 86 414 107 416 132L417 137 416 143C414 168 393 189 368 191L363 192H192V362L191 368C189 395 165 417 138 417S86 395 84 368L83 362V137L84 132C86 107 107 86 132 84L138 83H363Z",
				width: 1e3,
				height: 1e3
			});
		} };
		exports.frameMinimize = { get element() {
			return iconsManager.createSvgElement("frame-minimize", {
				path: "M363 583C392 583 413 604 417 633L417 637V863C417 892 392 917 363 917 333 917 313 896 308 867L308 863V692H138C108 692 88 671 83 642L83 637C83 608 104 587 133 583L138 583H363ZM638 583C608 583 588 604 583 633L583 637V863C583 892 608 917 638 917 667 917 688 896 692 867L692 863V692H863C892 692 913 671 917 642L917 637C917 608 896 587 867 583L863 583H638ZM363 417C392 417 413 396 417 367L417 362V137C417 108 392 83 363 83 333 83 313 104 308 133L308 137V308H138C108 308 88 329 83 358L83 362C83 392 104 412 133 417L138 417H363ZM638 417C608 417 588 396 583 367L583 362V137C583 108 608 83 638 83 667 83 688 104 692 133L692 137V308H863C892 308 913 329 917 358L917 362C917 392 896 412 867 417L863 417H638Z",
				width: 1e3,
				height: 1e3
			});
		} };
		exports.loading = { get element() {
			return iconsManager.createSvgElement("loading", {
				path: "M500 975V858C696 858 858 696 858 500S696 142 500 142 142 304 142 500H25C25 237 238 25 500 25S975 237 975 500 763 975 500 975Z",
				width: 1e3,
				height: 1e3
			});
		} };
		exports.pinterest = { get element() {
			return iconsManager.createSvgElement("pinterest", {
				path: "M950 496C950 746 746 950 496 950 450 950 404 942 363 929 379 900 408 850 421 808 425 787 450 700 450 700 467 729 508 754 554 754 692 754 792 629 792 471 792 321 671 208 513 208 317 208 213 342 213 483 213 550 250 633 304 658 313 662 317 662 321 654 321 650 329 617 333 604 333 600 333 596 329 592 313 567 296 525 296 487 288 387 367 292 496 292 608 292 688 367 688 475 688 600 625 683 546 683 500 683 467 646 479 600 492 546 517 487 517 450 517 417 500 387 458 387 413 387 375 433 375 496 375 537 388 562 388 562S342 754 333 787C325 825 329 883 333 917 163 854 42 687 42 496 42 246 246 42 496 42S950 246 950 496Z",
				width: 1e3,
				height: 1e3
			});
		} };
		exports.shareArrow = { get element() {
			return iconsManager.createSvgElement("share-arrow", {
				path: "M946 383L667 133C642 112 604 129 604 162V292C238 296 71 637 42 812 238 587 363 521 604 517V658C604 692 642 708 667 687L946 442C963 425 963 400 946 383Z",
				width: 1e3,
				height: 1e3
			});
		} };
		exports.twitter = { get element() {
			return iconsManager.createSvgElement("twitter", {
				path: "M863 312C863 321 863 329 863 337 863 587 675 871 329 871 221 871 125 842 42 787 58 787 71 792 88 792 175 792 254 762 321 712 238 712 171 658 146 583 158 583 171 587 183 587 200 587 217 583 233 579 146 562 83 487 83 396V387C108 400 138 408 167 412 117 379 83 321 83 254 83 221 92 187 108 158 200 271 342 346 496 354 492 342 492 325 492 312 492 208 575 125 679 125 733 125 783 146 817 183 858 175 900 158 938 137 925 179 896 217 854 242 892 237 929 229 963 212 933 250 900 283 863 312Z",
				width: 1e3,
				height: 1e3
			});
		} };
		exports.xTwitter = { get element() {
			return iconsManager.createSvgElement("x-twitter", {
				path: "M760.16 93.75h137.89L596.88 437.89 951.17 906.25H673.83L456.45 622.27 208.01 906.25H69.92L391.99 538.09 52.34 93.75H336.72L533.01 353.32 760.16 93.75zM711.72 823.83h76.37L295.12 171.88h-82.03L711.72 823.83z",
				width: 1e3,
				height: 1e3
			});
		} };
		exports.zoomInBold = { get element() {
			return iconsManager.createSvgElement("zoom-in-bold", {
				path: "M388 383V312C388 283 413 258 442 258 471 258 496 283 496 312V383H567C596 383 621 408 621 437S596 492 567 492H496V562C496 592 471 617 442 617 413 617 388 592 388 562V492H317C288 492 263 467 263 437S288 383 317 383H388ZM654 733C592 779 517 804 438 804 233 804 71 642 71 437S233 71 438 71 804 233 804 437C804 521 779 596 733 654L896 817C917 837 917 871 896 892 875 913 842 913 821 892L654 733ZM438 696C579 696 696 579 696 437S579 179 438 179 179 296 179 437 296 696 438 696Z",
				width: 1e3,
				height: 1e3
			});
		} };
		exports.zoomOutBold = { get element() {
			return iconsManager.createSvgElement("zoom-out-bold", {
				path: "M750 683L946 879C963 896 963 929 946 946 929 963 896 967 879 946L683 750C617 804 533 833 438 833 221 833 42 654 42 437S221 42 438 42 833 221 833 437C833 529 800 612 750 683ZM296 392H575C600 392 621 412 621 442 621 467 600 487 575 487H296C271 487 250 467 250 442 250 412 271 392 296 392ZM438 737C604 737 738 604 738 437S604 137 438 137 138 271 138 437 271 737 438 737Z",
				width: 1e3,
				height: 1e3
			});
		} };
	}));

//#endregion
//#region assets/dev/js/frontend/utils/lightbox/lightbox.js
	var require_lightbox = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_objectSpread2();
		init_asyncToGenerator();
		var _interopRequireDefault = require_interopRequireDefault();
		require_es_array_includes();
		require_es_array_push();
		require_esnext_iterator_constructor();
		require_esnext_iterator_filter();
		require_esnext_iterator_find();
		require_esnext_iterator_for_each();
		var _dompurify = _interopRequireDefault(require_purify_cjs());
		var _screenfull = _interopRequireDefault(require_screenfull());
		var _eIcons = require_e_icons();
		module.exports = elementorModules.ViewModule.extend({
			oldAnimation: null,
			swiper: null,
			player: null,
			isFontIconSvgExperiment: elementorFrontend.config.experimentalFeatures.e_font_icon_svg,
			getDefaultSettings() {
				return {
					classes: {
						item: "elementor-lightbox-item",
						image: "elementor-lightbox-image",
						videoContainer: "elementor-video-container",
						videoWrapper: "elementor-video-wrapper",
						playButton: "elementor-custom-embed-play",
						playButtonIcon: "fa",
						playing: "elementor-playing",
						hidden: "elementor-hidden",
						invisible: "elementor-invisible",
						preventClose: "elementor-lightbox-prevent-close",
						slideshow: {
							container: "swiper",
							slidesWrapper: "swiper-wrapper",
							prevButton: "elementor-swiper-button elementor-swiper-button-prev",
							nextButton: "elementor-swiper-button elementor-swiper-button-next",
							prevButtonIcon: "eicon-chevron-left",
							nextButtonIcon: "eicon-chevron-right",
							slide: "swiper-slide",
							header: "elementor-slideshow__header",
							footer: "elementor-slideshow__footer",
							title: "elementor-slideshow__title",
							description: "elementor-slideshow__description",
							counter: "elementor-slideshow__counter",
							iconExpand: "eicon-frame-expand",
							iconShrink: "eicon-frame-minimize",
							iconZoomIn: "eicon-zoom-in-bold",
							iconZoomOut: "eicon-zoom-out-bold",
							iconShare: "eicon-share-arrow",
							shareMenu: "elementor-slideshow__share-menu",
							shareLinks: "elementor-slideshow__share-links",
							hideUiVisibility: "elementor-slideshow--ui-hidden",
							shareMode: "elementor-slideshow--share-mode",
							fullscreenMode: "elementor-slideshow--fullscreen-mode",
							zoomMode: "elementor-slideshow--zoom-mode"
						}
					},
					selectors: {
						image: ".elementor-lightbox-image",
						links: "a, [data-elementor-lightbox]",
						slideshow: {
							activeSlide: ".swiper-slide-active",
							prevSlide: ".swiper-slide-prev",
							nextSlide: ".swiper-slide-next"
						}
					},
					modalOptions: {
						id: "elementor-lightbox",
						entranceAnimation: "zoomIn",
						videoAspectRatio: 169,
						position: { enable: false }
					}
				};
			},
			getModal() {
				if (!module.exports.modal) this.initModal();
				return module.exports.modal;
			},
			initModal() {
				const closeIcon = {};
				if (this.isFontIconSvgExperiment) closeIcon.iconElement = _eIcons.close.element;
				else closeIcon.iconClass = "eicon-close";
				const modal = module.exports.modal = elementorFrontend.getDialogsManager().createWidget("lightbox", {
					className: "elementor-lightbox",
					closeButton: true,
					closeButtonOptions: _objectSpread2(_objectSpread2({}, closeIcon), {}, { attributes: {
						role: "button",
						tabindex: 0,
						"aria-label": elementorFrontend.config.i18n.close + " (Esc)"
					} }),
					selectors: { preventClose: "." + this.getSettings("classes.preventClose") },
					hide: { onClick: true }
				});
				modal.on("hide", function() {
					modal.setMessage("");
				});
			},
			showModal(options) {
				if (options.url && !options.url.startsWith("http")) return;
				this.elements.$closeButton = this.getModal().getElements("closeButton");
				this.$buttons = this.elements.$closeButton;
				this.focusedButton = null;
				const self = this;
				const defaultOptions = self.getDefaultSettings().modalOptions;
				self.id = options.id;
				self.setSettings("modalOptions", jQuery.extend(defaultOptions, options.modalOptions));
				const modal = self.getModal();
				modal.setID(self.getSettings("modalOptions.id"));
				modal.onShow = function() {
					DialogsManager.getWidgetType("lightbox").prototype.onShow.apply(modal, arguments);
					self.setEntranceAnimation();
				};
				modal.onHide = function() {
					DialogsManager.getWidgetType("lightbox").prototype.onHide.apply(modal, arguments);
					modal.getElements("message").removeClass("animated");
					if (_screenfull.default.isFullscreen) self.deactivateFullscreen();
					self.unbindHotKeys();
				};
				switch (options.type) {
					case "video":
						self.setVideoContent(options);
						break;
					case "image":
						options.slideshow = {
							slides: [{
								image: options.url,
								index: 0,
								title: options.title,
								description: options.description,
								hash: options.hash
							}],
							swiper: {
								loop: false,
								pagination: false
							}
						};
						self.setSlideshowContent(options.slideshow);
						break;
					case "slideshow":
						self.setSlideshowContent(options.slideshow);
						break;
					default: self.setHTMLContent(options.html);
				}
				modal.show();
			},
			createLightbox(element) {
				let lightboxData = {};
				if (element.dataset.elementorLightbox) lightboxData = JSON.parse(element.dataset.elementorLightbox);
				if (lightboxData.type && "slideshow" !== lightboxData.type) {
					this.showModal(lightboxData);
					return;
				}
				if (!element.dataset.elementorLightboxSlideshow) {
					this.showModal({
						type: "image",
						id: "single-img",
						url: element.href,
						hash: element.getAttribute("data-e-action-hash"),
						title: element.dataset.elementorLightboxTitle,
						description: element.dataset.elementorLightboxDescription,
						modalOptions: { id: "elementor-lightbox-slideshow-single-img" }
					});
					return;
				}
				const initialSlideURL = element.dataset.elementorLightboxVideo || element.href;
				this.openSlideshow(element.dataset.elementorLightboxSlideshow, initialSlideURL);
			},
			setHTMLContent(html) {
				if (window.elementorCommon) elementorDevTools.deprecation.deprecated("elementorFrontend.utils.lightbox.setHTMLContent()", "3.1.4");
				this.getModal().setMessage(_dompurify.default.sanitize(html));
			},
			setVideoContent(options) {
				const $ = jQuery;
				let $videoElement;
				if ([
					"hosted",
					"videopress",
					"dailymotion"
				].includes(options.videoType)) {
					const videoParams = $.extend({
						src: options.url,
						autoplay: ""
					}, options.videoParams);
					Object.keys(videoParams).forEach((key) => {
						if (key.toLowerCase().startsWith("on")) delete videoParams[key];
					});
					$videoElement = $("<video>", videoParams);
				} else {
					let apiProvider;
					if (-1 !== options.url.indexOf("vimeo.com")) apiProvider = elementorFrontend.utils.vimeo;
					else if (options.url.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com|youtube-nocookie\.com)/)) apiProvider = elementorFrontend.utils.youtube;
					else return;
					$videoElement = $("<iframe>", { allowfullscreen: 1 });
					if ("yes" === options.autoplay) {
						$videoElement.attr("allow", "autoplay");
						$videoElement.attr("src", apiProvider.getAutoplayURL(options.url));
					} else $videoElement.attr("src", options.url);
				}
				const classes = this.getSettings("classes");
				const aspectRatio = this.getRatioDictionry(this.getSettings("modalOptions.videoAspectRatio"));
				const $videoContainer = $("<div>", { class: `${classes.videoContainer} ${classes.preventClose}` });
				const $videoWrapper = $("<div>", {
					class: `${classes.videoWrapper} elementor-video-${this.getRatioType(aspectRatio)}`,
					style: "--video-aspect-ratio: " + aspectRatio
				});
				$videoWrapper.append($videoElement);
				$videoContainer.append($videoWrapper);
				const modal = this.getModal();
				modal.setMessage($videoContainer);
				const onHideMethod = modal.onHide;
				modal.onHide = function() {
					onHideMethod();
					this.$buttons = jQuery();
					this.focusedButton = null;
					modal.getElements("message").removeClass("elementor-video-wrapper");
				};
			},
			getRatioDictionry(ratio) {
				return {
					219: 2.33333,
					169: 1.77777,
					43: 1.33333,
					32: 1.5,
					11: 1,
					916: .5625
				}[ratio] || ratio;
			},
			getRatioType(ratio) {
				let type = "";
				if (1 === ratio) type = "square";
				else type = ratio < 1 ? "portrait" : "landscape";
				return type;
			},
			getShareLinks() {
				const { i18n } = elementorFrontend.config, socialNetworks = {
					facebook: {
						label: i18n.shareOnFacebook,
						iconElement: _eIcons.facebook
					},
					"x-twitter": {
						label: i18n.shareOnX,
						iconElement: _eIcons.xTwitter
					},
					pinterest: {
						label: i18n.pinIt,
						iconElement: _eIcons.pinterest
					}
				}, $ = jQuery, classes = this.getSettings("classes"), selectors = this.getSettings("selectors"), $linkList = $("<div>", { class: classes.slideshow.shareLinks }), $activeSlide = this.getSlide("active"), $image = $activeSlide.find(selectors.image), videoUrl = $activeSlide.data("elementor-slideshow-video");
				let itemUrl;
				if (videoUrl) itemUrl = videoUrl;
				else itemUrl = $image.attr("src");
				$.each(socialNetworks, (key, data) => {
					const networkLabel = data.label;
					const $link = $("<a>", {
						href: this.createShareLink(key, itemUrl, $activeSlide.attr("data-e-action-hash")),
						target: "_blank"
					}).text(networkLabel);
					const $socialNetworkIconElement = this.isFontIconSvgExperiment ? $(data.iconElement.element) : $("<i>", {
						class: "eicon-" + key,
						"aria-hidden": "true"
					});
					$link.prepend($socialNetworkIconElement);
					$linkList.append($link);
				});
				if (!videoUrl) {
					const $downloadIcon = this.isFontIconSvgExperiment ? $(_eIcons.downloadBold.element) : $("<i>", { class: "eicon-download-bold" });
					$downloadIcon.attr("aria-label", i18n.download);
					$linkList.append($("<a>", {
						href: itemUrl,
						download: ""
					}).text(i18n.downloadImage).prepend($downloadIcon));
				}
				return $linkList;
			},
			createShareLink(networkName, itemUrl, hash = null) {
				const options = {};
				if ("pinterest" === networkName) options.image = encodeURIComponent(itemUrl);
				else options.url = encodeURIComponent(location.href.replace(/#.*/, "") + hash);
				return ShareLink.getNetworkLink(networkName, options);
			},
			getSlideshowHeader() {
				const { i18n } = elementorFrontend.config, $ = jQuery, showCounter = "yes" === elementorFrontend.getKitSettings("lightbox_enable_counter"), showFullscreen = "yes" === elementorFrontend.getKitSettings("lightbox_enable_fullscreen"), showZoom = "yes" === elementorFrontend.getKitSettings("lightbox_enable_zoom"), showShare = "yes" === elementorFrontend.getKitSettings("lightbox_enable_share"), classes = this.getSettings("classes"), slideshowClasses = classes.slideshow, elements = this.elements;
				if (!(showCounter || showFullscreen || showZoom || showShare)) return;
				elements.$header = $("<header>", { class: slideshowClasses.header + " " + classes.preventClose });
				if (showShare) {
					elements.$iconShare = $(this.isFontIconSvgExperiment ? _eIcons.shareArrow.element : "<i>", {
						class: slideshowClasses.iconShare,
						role: "button",
						tabindex: 0,
						"aria-label": i18n.share,
						"aria-expanded": false
					}).append($("<span>"));
					const $shareLinks = $("<div>");
					$shareLinks.on("click", (e) => {
						e.stopPropagation();
					});
					elements.$shareMenu = $("<div>", { class: slideshowClasses.shareMenu }).append($shareLinks);
					elements.$iconShare.add(elements.$shareMenu).on("click", this.toggleShareMenu);
					elements.$header.append(elements.$iconShare, elements.$shareMenu);
					this.$buttons = this.$buttons.add(elements.$iconShare);
				}
				if (showZoom) {
					const iconElement = this.isFontIconSvgExperiment ? _eIcons.zoomInBold.element : "<i>";
					const showZoomElements = [];
					const showZoomAttrs = {
						role: "switch",
						tabindex: 0,
						"aria-checked": false,
						"aria-label": i18n.zoom
					};
					const zoomAttrs = _objectSpread2({}, showZoomAttrs);
					if (!this.isFontIconSvgExperiment) zoomAttrs.class = slideshowClasses.iconZoomIn;
					elements.$iconZoom = $(iconElement).attr(zoomAttrs).on("click", this.toggleZoomMode);
					showZoomElements.push(elements.$iconZoom);
					if (this.isFontIconSvgExperiment) {
						elements.$iconZoomOut = $(_eIcons.zoomOutBold.element).attr(showZoomAttrs).addClass(classes.hidden).on("click", this.toggleZoomMode);
						showZoomElements.push(elements.$iconZoomOut);
					}
					elements.$header.append(showZoomElements);
					this.$buttons = this.$buttons.add(showZoomElements);
				}
				if (showFullscreen) {
					const iconElement = this.isFontIconSvgExperiment ? _eIcons.frameExpand.element : "<i>";
					const fullScreenElements = [];
					const fullScreenAttrs = {
						role: "switch",
						tabindex: 0,
						"aria-checked": false,
						"aria-label": i18n.fullscreen
					};
					const expandAttrs = _objectSpread2({}, fullScreenAttrs);
					if (!this.isFontIconSvgExperiment) expandAttrs.class = slideshowClasses.iconExpand;
					elements.$iconExpand = $(iconElement).append($("<span>"), $("<span>")).attr(expandAttrs).on("click", this.toggleFullscreen);
					fullScreenElements.push(elements.$iconExpand);
					if (this.isFontIconSvgExperiment) {
						elements.$iconMinimize = $(_eIcons.frameMinimize.element).attr(fullScreenAttrs).addClass(classes.hidden).on("click", this.toggleFullscreen);
						fullScreenElements.push(elements.$iconMinimize);
					}
					elements.$header.append(fullScreenElements);
					this.$buttons = this.$buttons.add(fullScreenElements);
				}
				if (showCounter) {
					elements.$counter = $("<span>", { class: slideshowClasses.counter });
					elements.$header.append(elements.$counter);
				}
				return elements.$header;
			},
			toggleFullscreen() {
				if (_screenfull.default.isFullscreen) this.deactivateFullscreen();
				else if (_screenfull.default.isEnabled) this.activateFullscreen();
			},
			toggleZoomMode() {
				if (1 !== this.swiper.zoom.scale) this.deactivateZoom();
				else this.activateZoom();
			},
			toggleShareMenu() {
				if (this.shareMode) this.deactivateShareMode();
				else {
					this.elements.$shareMenu.html(this.getShareLinks());
					this.activateShareMode();
				}
			},
			activateShareMode() {
				const classes = this.getSettings("classes");
				this.elements.$container.addClass(classes.slideshow.shareMode);
				this.elements.$iconShare.attr("aria-expanded", true);
				this.swiper.detachEvents();
				this.$originalButtons = this.$buttons;
				this.$buttons = this.elements.$iconShare.add(this.elements.$shareMenu.find("a"));
				this.shareMode = true;
			},
			deactivateShareMode() {
				const classes = this.getSettings("classes");
				this.elements.$container.removeClass(classes.slideshow.shareMode);
				this.elements.$iconShare.attr("aria-expanded", false);
				this.swiper.attachEvents();
				this.$buttons = this.$originalButtons;
				this.shareMode = false;
			},
			activateFullscreen() {
				const classes = this.getSettings("classes");
				_screenfull.default.request(this.elements.$container.parents(".dialog-widget")[0]);
				if (this.isFontIconSvgExperiment) {
					this.elements.$iconExpand.addClass(classes.hidden).attr("aria-checked", "false");
					this.elements.$iconMinimize.removeClass(classes.hidden).attr("aria-checked", "true");
				} else this.elements.$iconExpand.removeClass(classes.slideshow.iconExpand).addClass(classes.slideshow.iconShrink).attr("aria-checked", "true");
				this.elements.$container.addClass(classes.slideshow.fullscreenMode);
			},
			deactivateFullscreen() {
				const classes = this.getSettings("classes");
				_screenfull.default.exit();
				if (this.isFontIconSvgExperiment) {
					this.elements.$iconExpand.removeClass(classes.hidden).attr("aria-checked", "true");
					this.elements.$iconMinimize.addClass(classes.hidden).attr("aria-checked", "false");
				} else this.elements.$iconExpand.removeClass(classes.slideshow.iconShrink).addClass(classes.slideshow.iconExpand).attr("aria-checked", "false");
				this.elements.$container.removeClass(classes.slideshow.fullscreenMode);
			},
			activateZoom() {
				const swiper = this.swiper;
				const elements = this.elements;
				const classes = this.getSettings("classes");
				swiper.zoom.in();
				swiper.allowSlideNext = false;
				swiper.allowSlidePrev = false;
				swiper.allowTouchMove = false;
				elements.$container.addClass(classes.slideshow.zoomMode);
				if (this.isFontIconSvgExperiment) {
					elements.$iconZoom.addClass(classes.hidden).attr("aria-checked", "false");
					elements.$iconZoomOut.removeClass(classes.hidden).attr("aria-checked", "true");
				} else elements.$iconZoom.removeClass(classes.slideshow.iconZoomIn).addClass(classes.slideshow.iconZoomOut);
			},
			deactivateZoom() {
				const swiper = this.swiper;
				const elements = this.elements;
				const classes = this.getSettings("classes");
				swiper.zoom.out();
				swiper.allowSlideNext = true;
				swiper.allowSlidePrev = true;
				swiper.allowTouchMove = true;
				elements.$container.removeClass(classes.slideshow.zoomMode);
				if (this.isFontIconSvgExperiment) {
					elements.$iconZoom.removeClass(classes.hidden).attr("aria-checked", "true");
					elements.$iconZoomOut.addClass(classes.hidden).attr("aria-checked", "false");
				} else elements.$iconZoom.removeClass(classes.slideshow.iconZoomOut).addClass(classes.slideshow.iconZoomIn);
			},
			getSlideshowFooter() {
				const $ = jQuery;
				const classes = this.getSettings("classes");
				const $footer = $("<footer>", { class: classes.slideshow.footer + " " + classes.preventClose });
				const $title = $("<div>", { class: classes.slideshow.title });
				const $description = $("<div>", { class: classes.slideshow.description });
				$footer.append($title, $description);
				return $footer;
			},
			isValidUrl(url) {
				if (!url) return false;
				const dangerous = [
					"javascript:",
					"data:",
					"vbscript:",
					"file:"
				];
				const urlLower = url.toLowerCase().trim();
				return !dangerous.some((protocol) => urlLower.startsWith(protocol));
			},
			setSlideshowContent(options) {
				var _this = this;
				const { i18n } = elementorFrontend.config, $ = jQuery, isSingleSlide = 1 === options.slides.length, hasTitle = "" !== elementorFrontend.getKitSettings("lightbox_title_src"), hasDescription = "" !== elementorFrontend.getKitSettings("lightbox_description_src"), showFooter = hasTitle || hasDescription, classes = this.getSettings("classes"), slideshowClasses = classes.slideshow, $container = $("<div>", { class: slideshowClasses.container }), $slidesWrapper = $("<div>", { class: slideshowClasses.slidesWrapper });
				let $prevButton;
				let $nextButton;
				options.slides.forEach((slide) => {
					const isVideo = !!slide.video;
					if (!(isVideo ? this.isValidUrl(slide.video) : this.isValidUrl(slide.image))) return;
					let slideClass = slideshowClasses.slide + " " + classes.item;
					if (isVideo) slideClass += " " + classes.video;
					const $slide = $("<div>", { class: slideClass });
					if (isVideo) {
						$slide.attr("data-elementor-slideshow-video", slide.video);
						const playVideoLoadingElement = this.isFontIconSvgExperiment ? _eIcons.loading.element : "<i>";
						const $playIcon = $("<div>", { class: classes.playButton }).html($(playVideoLoadingElement).attr("aria-label", i18n.playVideo).addClass(classes.playButtonIcon));
						$slide.append($playIcon);
					} else {
						const $zoomContainer = $("<div>", { class: "swiper-zoom-container" });
						const $slidePlaceholder = $("<div class=\"swiper-lazy-preloader\"></div>");
						const imageAttributes = {
							"data-src": slide.image,
							class: classes.image + " " + classes.preventClose + " swiper-lazy"
						};
						if (slide.title) {
							imageAttributes["data-title"] = slide.title;
							imageAttributes.alt = slide.title;
						}
						if (slide.description) {
							imageAttributes["data-description"] = slide.description;
							imageAttributes.alt += " - " + slide.description;
						}
						const $slideImage = $("<img>", imageAttributes);
						$zoomContainer.append([$slideImage, $slidePlaceholder]);
						$slide.append($zoomContainer);
					}
					if (slide.hash) $slide.attr("data-e-action-hash", slide.hash);
					$slidesWrapper.append($slide);
				});
				this.elements.$container = $container;
				this.elements.$header = this.getSlideshowHeader();
				$container.prepend(this.elements.$header).append($slidesWrapper);
				if (!isSingleSlide) {
					const $prevButtonIcon = this.isFontIconSvgExperiment ? $(_eIcons.chevronLeft.element) : $("<i>", {
						class: slideshowClasses.prevButtonIcon,
						"aria-hidden": "true"
					});
					const $nextButtonIcon = this.isFontIconSvgExperiment ? $(_eIcons.chevronRight.element) : $("<i>", {
						class: slideshowClasses.nextButtonIcon,
						"aria-hidden": "true"
					});
					const $prevButtonLabel = $("<span>", { class: "screen-reader-text" }).html(i18n.previous);
					const $nextButtonLabel = $("<span>", { class: "screen-reader-text" }).html(i18n.next);
					$prevButton = $("<div>", { class: slideshowClasses.prevButton + " " + classes.preventClose }).append($prevButtonIcon, $prevButtonLabel);
					$nextButton = $("<div>", { class: slideshowClasses.nextButton + " " + classes.preventClose }).append($nextButtonIcon, $nextButtonLabel);
					$container.append($nextButton, $prevButton);
					this.$buttons = this.$buttons.add($nextButton).add($prevButton);
				}
				if (showFooter) {
					this.elements.$footer = this.getSlideshowFooter();
					$container.append(this.elements.$footer);
				}
				this.setSettings("hideUiTimeout", "");
				$container.on("click mousemove keypress", this.showLightboxUi);
				const modal = this.getModal();
				modal.setMessage($container);
				const onShowMethod = modal.onShow;
				modal.onShow = _asyncToGenerator(function* () {
					onShowMethod();
					const swiperOptions = {
						pagination: {
							el: "." + slideshowClasses.counter,
							type: "fraction"
						},
						on: { slideChangeTransitionEnd: _this.onSlideChange },
						lazy: { loadPrevNext: true },
						zoom: true,
						spaceBetween: 100,
						grabCursor: true,
						runCallbacksOnInit: false,
						loop: true,
						keyboard: true,
						handleElementorBreakpoints: true
					};
					if (!isSingleSlide) swiperOptions.navigation = {
						prevEl: $prevButton[0],
						nextEl: $nextButton[0]
					};
					if (options.swiper) $.extend(swiperOptions, options.swiper);
					const Swiper = elementorFrontend.utils.swiper;
					_this.swiper = yield new Swiper($container, swiperOptions);
					$container.data("swiper", _this.swiper);
					_this.playSlideVideo();
					if (showFooter) _this.updateFooterText();
					_this.bindHotKeys();
					_this.makeButtonsAccessible();
				});
			},
			makeButtonsAccessible() {
				this.$buttons.attr("tabindex", 0).on("keypress", (event) => {
					if (13 === event.which || 32 === event.which) jQuery(event.currentTarget).trigger("click");
				});
			},
			showLightboxUi() {
				const slideshowClasses = this.getSettings("classes").slideshow;
				this.elements.$container.removeClass(slideshowClasses.hideUiVisibility);
				clearTimeout(this.getSettings("hideUiTimeout"));
				this.setSettings("hideUiTimeout", setTimeout(() => {
					if (!this.shareMode) this.elements.$container.addClass(slideshowClasses.hideUiVisibility);
				}, 3500));
			},
			bindHotKeys() {
				this.getModal().getElements("window").on("keydown", this.activeKeyDown);
			},
			unbindHotKeys() {
				this.getModal().getElements("window").off("keydown", this.activeKeyDown);
			},
			activeKeyDown(event) {
				this.showLightboxUi();
				if (event.which === 9) {
					const $buttons = this.$buttons;
					let focusedButton;
					let isFirst = false;
					let isLast = false;
					$buttons.each((index) => {
						const item = $buttons[index];
						if (jQuery(item).is(":focus")) {
							focusedButton = item;
							isFirst = 0 === index;
							isLast = $buttons.length - 1 === index;
							return false;
						}
					});
					if (event.shiftKey) {
						if (isFirst) {
							event.preventDefault();
							$buttons.last().trigger("focus");
						}
					} else if (isLast || !focusedButton) {
						event.preventDefault();
						$buttons.first().trigger("focus");
					}
				}
			},
			getSlide(slideState) {
				return jQuery(this.swiper.slides).filter(this.getSettings("selectors.slideshow." + slideState + "Slide"));
			},
			updateFooterText() {
				if (!this.elements.$footer) return;
				const classes = this.getSettings("classes");
				const $image = this.getSlide("active").find(".elementor-lightbox-image");
				const titleText = $image.data("title");
				const descriptionText = $image.data("description");
				const $title = this.elements.$footer.find("." + classes.slideshow.title);
				const $description = this.elements.$footer.find("." + classes.slideshow.description);
				$title.text(titleText || "");
				$description.text(descriptionText || "");
			},
			playSlideVideo() {
				const $activeSlide = this.getSlide("active");
				const videoURL = $activeSlide.data("elementor-slideshow-video");
				if (!videoURL) return;
				const classes = this.getSettings("classes");
				const aspectRatio = this.getRatioDictionry(this.getSettings("modalOptions.videoAspectRatio"));
				const $videoContainer = jQuery("<div>", { class: classes.videoContainer + " " + classes.invisible });
				const $videoWrapper = jQuery("<div>", {
					class: `${classes.videoWrapper} elementor-video-${this.getRatioType(aspectRatio)}`,
					style: "--video-aspect-ratio: " + aspectRatio
				});
				const $playIcon = $activeSlide.children("." + classes.playButton);
				let videoType;
				let apiProvider;
				$videoContainer.append($videoWrapper);
				$activeSlide.append($videoContainer);
				if (-1 !== videoURL.indexOf("vimeo.com")) {
					videoType = "vimeo";
					apiProvider = elementorFrontend.utils.vimeo;
				} else if (videoURL.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/)) {
					videoType = "youtube";
					apiProvider = elementorFrontend.utils.youtube;
				}
				const videoID = apiProvider.getVideoIDFromURL(videoURL);
				apiProvider.onApiReady((apiObject) => {
					if ("youtube" === videoType) this.prepareYTVideo(apiObject, videoID, $videoContainer, $videoWrapper, $playIcon);
					else if ("vimeo" === videoType) this.prepareVimeoVideo(apiObject, videoURL, $videoContainer, $videoWrapper, $playIcon);
				});
				$playIcon.addClass(classes.playing).removeClass(classes.hidden);
			},
			prepareYTVideo(YT, videoID, $videoContainer, $videoWrapper, $playIcon) {
				const classes = this.getSettings("classes");
				const $videoPlaceholderElement = jQuery("<div>");
				let startStateCode = YT.PlayerState.PLAYING;
				$videoWrapper.append($videoPlaceholderElement);
				if (window.chrome) startStateCode = YT.PlayerState.UNSTARTED;
				$videoContainer.addClass("elementor-loading " + classes.invisible);
				this.player = new YT.Player($videoPlaceholderElement[0], {
					videoId: videoID,
					events: {
						onReady: () => {
							$playIcon.addClass(classes.hidden);
							$videoContainer.removeClass(classes.invisible);
							this.player.playVideo();
						},
						onStateChange: (event) => {
							if (event.data === startStateCode) $videoContainer.removeClass("elementor-loading " + classes.invisible);
						}
					},
					playerVars: {
						controls: 0,
						rel: 0
					}
				});
			},
			prepareVimeoVideo(Vimeo, videoURL, $videoContainer, $videoWrapper, $playIcon) {
				const classes = this.getSettings("classes");
				const vimeoOptions = {
					url: videoURL,
					autoplay: true,
					transparent: false,
					playsinline: false,
					cc_load_policy: false
				};
				this.player = new Vimeo.Player($videoWrapper, vimeoOptions);
				this.player.ready().then(() => {
					$playIcon.addClass(classes.hidden);
					$videoContainer.removeClass(classes.invisible);
				});
			},
			setEntranceAnimation(animation) {
				animation = animation || elementorFrontend.getCurrentDeviceSetting(this.getSettings("modalOptions"), "entranceAnimation");
				const $widgetMessage = this.getModal().getElements("message");
				if (this.oldAnimation) $widgetMessage.removeClass(this.oldAnimation);
				this.oldAnimation = animation;
				if (animation) $widgetMessage.addClass("animated " + animation);
			},
			openSlideshow(slideshowID, initialSlideURL) {
				const $allSlideshowLinks = jQuery(this.getSettings("selectors.links")).filter((index, element) => {
					const $element = jQuery(element);
					return slideshowID === element.dataset.elementorLightboxSlideshow && !$element.parent(".swiper-slide-duplicate").length && !$element.parents(".slick-cloned").length;
				});
				const slides = [];
				let initialSlideIndex = 0;
				$allSlideshowLinks.each(function() {
					const slideVideo = this.dataset.elementorLightboxVideo;
					let slideIndex = this.dataset.elementorLightboxIndex;
					if (void 0 === slideIndex) slideIndex = $allSlideshowLinks.index(this);
					if (initialSlideURL === this.href || slideVideo && initialSlideURL === slideVideo) initialSlideIndex = slideIndex;
					const slideData = {
						image: this.href,
						index: slideIndex,
						title: this.dataset.elementorLightboxTitle,
						description: this.dataset.elementorLightboxDescription,
						hash: this.getAttribute("data-e-action-hash")
					};
					if (slideVideo) slideData.video = slideVideo;
					slides.push(slideData);
				});
				slides.sort((a, b) => a.index - b.index);
				this.showModal({
					type: "slideshow",
					id: slideshowID,
					modalOptions: { id: "elementor-lightbox-slideshow-" + slideshowID },
					slideshow: {
						slides,
						swiper: { initialSlide: +initialSlideIndex }
					}
				});
			},
			onSlideChange() {
				this.getSlide("prev").add(this.getSlide("next")).add(this.getSlide("active")).find("." + this.getSettings("classes.videoWrapper")).remove();
				this.playSlideVideo();
				this.updateFooterText();
			}
		});
	}));

//#endregion
//#region \0elementor-chunk-entry
	var import_lightbox = /* @__PURE__ */ __toESM(require_lightbox());
	(window.__elementorChunks = window.__elementorChunks || {})["lightbox-lightbox"] = import_lightbox;

//#endregion
})();
//# sourceMappingURL=lightbox-lightbox.js.map