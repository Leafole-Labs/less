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
//#region assets/dev/js/frontend/handlers/container/grid-container.js
	var require_grid_container = /* @__PURE__ */ __commonJSMin(((exports) => {
		init_objectSpread2();
		init_defineProperty();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		require_es_array_includes();
		require_es_array_push();
		require_esnext_iterator_constructor();
		require_esnext_iterator_find();
		require_esnext_iterator_for_each();
		var GridContainer = class GridContainer extends elementorModules.frontend.handlers.Base {
			static bindDeviceModeListener() {
				if (GridContainer.isDeviceModeListenerBound) return;
				GridContainer.isDeviceModeListenerBound = true;
				elementor.channels.deviceMode.on("change", () => {
					GridContainer.clearCache();
				});
			}
			static clearCache() {
				GridContainer.cacheByValues.clear();
			}
			static isGridLayoutReady(handler) {
				var _handler$elements;
				return (_handler$elements = handler.elements) === null || _handler$elements === void 0 || (_handler$elements = _handler$elements.container) === null || _handler$elements === void 0 ? void 0 : _handler$elements.classList.contains("e-grid");
			}
			static hasValidGridDimensions(dimensions) {
				var _dimensions$rows;
				var _dimensions$columns;
				return (dimensions === null || dimensions === void 0 || (_dimensions$rows = dimensions.rows) === null || _dimensions$rows === void 0 ? void 0 : _dimensions$rows.length) > 0 && (dimensions === null || dimensions === void 0 || (_dimensions$columns = dimensions.columns) === null || _dimensions$columns === void 0 ? void 0 : _dimensions$columns.length) > 0;
			}
			static isDimensionsEntryCacheable(handler, entry) {
				return GridContainer.isGridLayoutReady(handler) && GridContainer.hasValidGridDimensions(entry.dimensions);
			}
			static buildCalculationKey(handler) {
				const device = elementor.channels.deviceMode.request("currentMode"), elementSettings = handler.getElementSettings(), { grid_auto_flow: gridAutoFlow } = elementSettings, rowsSize = elementorFrontend.utils.controls.getResponsiveControlValue(elementSettings, "grid_rows_grid", "size", device), columnsSize = elementorFrontend.utils.controls.getResponsiveControlValue(elementSettings, "grid_columns_grid", "size", device), keyParts = [
					device,
					gridAutoFlow,
					rowsSize,
					elementorFrontend.utils.controls.getResponsiveControlValue(elementSettings, "grid_rows_grid", "unit", device),
					columnsSize,
					elementorFrontend.utils.controls.getResponsiveControlValue(elementSettings, "grid_columns_grid", "unit", device)
				], { outlineParentContainer } = handler.elements;
				if (outlineParentContainer) {
					var _columnsValue$trim;
					var _rowsValue$trim;
					const columnsValue = handler.getComputedStyle(outlineParentContainer, "grid-template-columns");
					const rowsValue = handler.getComputedStyle(outlineParentContainer, "grid-template-rows");
					keyParts.push((_columnsValue$trim = columnsValue === null || columnsValue === void 0 ? void 0 : columnsValue.trim()) !== null && _columnsValue$trim !== void 0 ? _columnsValue$trim : "", (_rowsValue$trim = rowsValue === null || rowsValue === void 0 ? void 0 : rowsValue.trim()) !== null && _rowsValue$trim !== void 0 ? _rowsValue$trim : "");
				}
				return keyParts.join("|");
			}
			static buildOutlineCacheKey(calculationKey, childrenLength) {
				return calculationKey + "|children:" + childrenLength;
			}
			static computeMaxElementsNumber(handler, gridDimensions) {
				const elementSettings = handler.getElementSettings(), device = elementor.channels.deviceMode.request("currentMode"), { grid_auto_flow: gridAutoFlow } = elementSettings;
				if ("row" === gridAutoFlow) {
					const rows = elementorFrontend.utils.controls.getResponsiveControlValue(elementSettings, "grid_rows_grid", "size", device);
					const rowsLength = isNaN(rows) ? String(rows).split(" ").length : rows;
					return gridDimensions.columns.length * rowsLength;
				}
				const columns = elementorFrontend.utils.controls.getResponsiveControlValue(elementSettings, "grid_columns_grid", "size", device);
				const columnsLength = isNaN(columns) ? String(columns).split(" ").length : columns;
				return gridDimensions.rows.length * columnsLength;
			}
			static computeDimensionsCache(handler) {
				const currentDevice = elementor.channels.deviceMode.request("currentMode");
				const dimensions = {
					rows: handler.getControlValues("grid_rows_grid", currentDevice, "grid-template-rows") || 1,
					columns: handler.getControlValues("grid_columns_grid", currentDevice, "grid-template-columns") || 1
				};
				return {
					dimensions,
					maxElementsNumber: GridContainer.computeMaxElementsNumber(handler, dimensions)
				};
			}
			static getDimensionsCache(handler) {
				const calculationKey = GridContainer.buildCalculationKey(handler);
				const cached = GridContainer.cacheByValues.get(calculationKey);
				if (cached === null || cached === void 0 ? void 0 : cached.dimensions) return cached;
				const entry = GridContainer.computeDimensionsCache(handler);
				if (GridContainer.isDimensionsEntryCacheable(handler, entry)) GridContainer.cacheByValues.set(calculationKey, entry);
				return entry;
			}
			static getCachedMaxOutlineElementsNumber(handler, childrenLength) {
				const calculationKey = GridContainer.buildCalculationKey(handler);
				const outlineCacheKey = GridContainer.buildOutlineCacheKey(calculationKey, childrenLength);
				const cachedOutlineCount = GridContainer.cacheByValues.get(outlineCacheKey);
				if (void 0 !== cachedOutlineCount) return cachedOutlineCount;
				const { dimensions: gridDimensions, maxElementsNumber: maxElementsBySettings } = GridContainer.getDimensionsCache(handler), { grid_auto_flow: gridAutoFlow } = handler.getElementSettings(), flowTypeField = "row" === gridAutoFlow ? "columns" : "rows", maxElementsByItems = Math.ceil(childrenLength / gridDimensions[flowTypeField].length) * gridDimensions[flowTypeField].length, maxOutlineElements = maxElementsBySettings > maxElementsByItems ? maxElementsBySettings : maxElementsByItems, dimensionsEntry = {
					dimensions: gridDimensions,
					maxElementsNumber: maxElementsBySettings
				};
				if (GridContainer.isDimensionsEntryCacheable(handler, dimensionsEntry)) GridContainer.cacheByValues.set(outlineCacheKey, maxOutlineElements);
				return maxOutlineElements;
			}
			__construct(settings) {
				super.__construct(settings);
				this.onDeviceModeChange = this.onDeviceModeChange.bind(this);
				this.updateEmptyViewHeight = this.updateEmptyViewHeight.bind(this);
			}
			isActive() {
				return elementorFrontend.isEditMode();
			}
			getDefaultSettings() {
				return {
					selectors: {
						gridOutline: ".e-grid-outline",
						directGridOverlay: ":scope > .e-grid-outline",
						boxedContainer: ":scope > .e-con-inner",
						emptyView: ".elementor-empty-view"
					},
					classes: {
						outline: "e-grid-outline",
						outlineItem: "e-grid-outline-item",
						gridItemControls: [
							"_heading_grid_item",
							"_grid_column",
							"_grid_column_custom",
							"_grid_row",
							"_grid_row_custom",
							"heading_grid_item",
							"grid_column",
							"grid_column_custom",
							"grid_row",
							"grid_row_custom"
						].map((suffix) => `[class*="elementor-control-${suffix}"]`).join(", ")
					}
				};
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return {
					outlineParentContainer: null,
					gridOutline: this.findElement(selectors.gridOutline),
					directChildGridOverlay: this.findElement(selectors.directGridOverlay),
					emptyView: this.findElement(selectors.emptyView)[0],
					container: this.$element[0]
				};
			}
			onInit() {
				super.onInit();
				this.scheduleInitLayoutOverlay();
				this.updateEmptyViewHeight();
				elementor.hooks.addAction("panel/open_editor/container", this.onPanelShow);
			}
			handleGridControls(sectionName, editor) {
				if (!["_section_style", "section_layout"].includes(sectionName)) return;
				if (!this.isItemInGridCell(editor)) this.hideGridControls(editor);
			}
			isItemInGridCell(editor) {
				var _editor$getOption;
				var _container$parent;
				var _container$parent2;
				const container = editor === null || editor === void 0 || (_editor$getOption = editor.getOption("editedElementView")) === null || _editor$getOption === void 0 ? void 0 : _editor$getOption.getContainer();
				if ("function" !== typeof (container === null || container === void 0 || (_container$parent = container.parent) === null || _container$parent === void 0 || (_container$parent = _container$parent.model) === null || _container$parent === void 0 ? void 0 : _container$parent.getSetting)) return false;
				return "grid" === (container === null || container === void 0 || (_container$parent2 = container.parent) === null || _container$parent2 === void 0 || (_container$parent2 = _container$parent2.model) === null || _container$parent2 === void 0 ? void 0 : _container$parent2.getSetting("container_type"));
			}
			hideGridControls(editor) {
				const classes = this.getSettings("classes");
				(editor === null || editor === void 0 ? void 0 : editor.el.querySelectorAll(classes.gridItemControls)).forEach((element) => {
					element.style.display = "none";
				});
			}
			onPanelShow(panel, model) {
				const containerType = model.get("settings").get("container_type");
				const $linkElement = panel.$el.find("#elementor-panel__editor__help__link");
				const href = "grid" === containerType ? "https://go.elementor.com/widget-container-grid" : "https://go.elementor.com/widget-container";
				if ($linkElement) $linkElement.attr("href", href);
			}
			bindEvents() {
				GridContainer.bindDeviceModeListener();
				elementor.channels.deviceMode.on("change", this.onDeviceModeChange);
				elementorFrontend.elements.$window.on("resize", this.onDeviceModeChange);
				elementorFrontend.elements.$window.on("resize", this.updateEmptyViewHeight);
				this.addChildLifeCycleEventListeners();
				elementor.channels.editor.on("section:activated", this.handleGridControls.bind(this));
			}
			onDestroy() {
				elementorModules.frontend.handlers.Base.prototype.onDestroy.apply(this, arguments);
			}
			unbindEvents() {
				this.removeChildLifeCycleEventListeners();
				elementor.channels.deviceMode.off("change", this.onDeviceModeChange);
				elementorFrontend.elements.$window.off("resize", this.onDeviceModeChange);
				elementorFrontend.elements.$window.off("resize", this.updateEmptyViewHeight);
				elementor.channels.editor.off("section:activated", this.handleGridControls.bind(this));
			}
			initLayoutOverlay() {
				var _this$elements;
				this.getCorrectContainer();
				const selectors = this.getSettings("selectors");
				this.elements.emptyView = this.findElement(selectors.emptyView)[0];
				if ("grid" === this.getElementSettings("container_type") && ((_this$elements = this.elements) === null || _this$elements === void 0 ? void 0 : _this$elements.emptyView)) this.elements.emptyView.style.display = this.shouldRemoveEmptyView() ? "none" : "block";
				this.updateGridOutline();
			}
			updateGridOutline() {
				if (!this.shouldDrawOutline()) {
					this.removeExistingOverlay();
					return;
				}
				const numberOfItems = this.getMaxOutlineElementsNumber();
				const gridOutlineElement = this.getGridOutlineElement();
				if (numberOfItems > 0 && (gridOutlineElement === null || gridOutlineElement === void 0 ? void 0 : gridOutlineElement.isConnected) && gridOutlineElement.parentElement === this.elements.outlineParentContainer && gridOutlineElement.childElementCount === numberOfItems) {
					this.setGridOutlineDimensions();
					return;
				}
				this.removeExistingOverlay();
				this.createOverlayContainer();
				this.createOverlayItems();
			}
			shouldDrawOutline() {
				const { grid_outline: gridOutline } = this.getElementSettings();
				return gridOutline;
			}
			getCorrectContainer() {
				const container = this.elements.container, { selectors: { boxedContainer } } = this.getDefaultSettings();
				this.elements.outlineParentContainer = container.querySelector(boxedContainer) || container;
			}
			getGridOutlineElement() {
				const { gridOutline } = this.elements;
				if (!gridOutline) return null;
				return gridOutline[0] || gridOutline;
			}
			removeExistingOverlay() {
				var _this$getGridOutlineE;
				(_this$getGridOutlineE = this.getGridOutlineElement()) === null || _this$getGridOutlineE === void 0 || _this$getGridOutlineE.remove();
				this.elements.gridOutline = null;
			}
			createOverlayContainer() {
				const { outlineParentContainer } = this.elements, { classes: { outline } } = this.getDefaultSettings(), gridOutline = document.createElement("div");
				gridOutline.classList.add(outline);
				outlineParentContainer.appendChild(gridOutline);
				this.elements.gridOutline = gridOutline;
				this.setGridOutlineDimensions();
			}
			createOverlayItems() {
				const { gridOutline } = this.elements, { classes: { outlineItem } } = this.getDefaultSettings(), numberOfItems = this.getMaxOutlineElementsNumber();
				const gridOutlineItems = [];
				for (let i = 0; i < numberOfItems; i++) {
					const gridOutlineItem = document.createElement("div");
					gridOutlineItem.classList.add(outlineItem);
					gridOutlineItems.push(gridOutlineItem);
				}
				gridOutline.append(...gridOutlineItems);
			}
			/**
			* Get the grid dimensions for the current device.
			*
			* @return { { columns: { value, length }, rows: { value, length } } }
			*/
			getDeviceGridDimensions() {
				return GridContainer.getDimensionsCache(this).dimensions;
			}
			setGridOutlineDimensions() {
				const gridOutlineElement = this.getGridOutlineElement(), { rows, columns } = this.getDeviceGridDimensions();
				gridOutlineElement.style.gridTemplateColumns = columns.value;
				gridOutlineElement.style.gridTemplateRows = rows.value;
			}
			/**
			* Set the control value for the current device.
			* Distinguish between grid custom values and slider controls.
			*
			* @param {string} control  - The control name.
			* @param {string} device   - The device mode.
			* @param {string} property - The CSS property name we need to copy from the parent container.
			*
			* @return {Object} - E,g. {value: repeat(2, 1fr), length: 2}.
			*/
			getControlValues(control, device, property) {
				const elementSettings = this.getElementSettings(), { unit, size } = elementSettings[control], { outlineParentContainer } = this.elements, controlValueForCurrentDevice = elementorFrontend.utils.controls.getResponsiveControlValue(elementSettings, control, "size", device), controlValue = this.getComputedStyle(outlineParentContainer, property), computedStyleLength = controlValue.split(" ").length;
				let controlData;
				if ("custom" === unit && "string" === typeof controlValueForCurrentDevice || size < computedStyleLength) controlData = { value: controlValue };
				else controlData = { value: `repeat(${computedStyleLength}, 1fr)` };
				controlData = _objectSpread2(_objectSpread2({}, controlData), {}, { length: computedStyleLength });
				return controlData;
			}
			getComputedStyle(container, property) {
				var _window;
				return (_window = window) === null || _window === void 0 ? void 0 : _window.getComputedStyle(container, null).getPropertyValue(property);
			}
			onElementChange(propertyName) {
				if (this.isControlThatMayAffectEmptyViewHeight(propertyName)) this.updateEmptyViewHeight();
				let propsThatTriggerGridLayoutRender = [
					"grid_rows_grid",
					"grid_columns_grid",
					"grid_gaps",
					"grid_outline",
					"container_type",
					"boxed_width",
					"content_width",
					"width",
					"height",
					"min_height",
					"padding",
					"grid_auto_flow"
				];
				propsThatTriggerGridLayoutRender = this.getResponsiveControlNames(propsThatTriggerGridLayoutRender);
				if (propsThatTriggerGridLayoutRender.includes(propertyName)) this.scheduleInitLayoutOverlay();
			}
			isControlThatMayAffectEmptyViewHeight(propertyName) {
				return 0 === propertyName.indexOf("grid_rows_grid") || 0 === propertyName.indexOf("grid_columns_grid") || 0 === propertyName.indexOf("grid_auto_flow");
			}
			/**
			* GetResponsiveControlNames
			* Add responsive control names to the list of controls that trigger re-rendering.
			*
			* @param {Array} propsThatTriggerGridLayoutRender - array of control names.
			*
			* @return {Array}
			*/
			getResponsiveControlNames(propsThatTriggerGridLayoutRender) {
				const activeBreakpoints = elementorFrontend.breakpoints.getActiveBreakpointsList();
				const responsiveControlNames = [];
				for (const prop of propsThatTriggerGridLayoutRender) for (const breakpoint of activeBreakpoints) responsiveControlNames.push(`${prop}_${breakpoint}`);
				responsiveControlNames.push(...propsThatTriggerGridLayoutRender);
				return responsiveControlNames;
			}
			onDeviceModeChange() {
				this.scheduleInitLayoutOverlay();
			}
			isLifecycleEventAffectingThisContainer(event) {
				var _event$detail;
				var _event$detail$getCont;
				const changedContainer = (_event$detail = event.detail) === null || _event$detail === void 0 || (_event$detail = _event$detail.elementView) === null || _event$detail === void 0 || (_event$detail$getCont = _event$detail.getContainer) === null || _event$detail$getCont === void 0 ? void 0 : _event$detail$getCont.call(_event$detail);
				if (!changedContainer) return false;
				const thisModelCid = this.getModelCID();
				if (changedContainer.model.cid === thisModelCid) return true;
				const parentContainer = changedContainer.parent;
				return parentContainer && parentContainer.model.cid === thisModelCid;
			}
			onChildLifecycleEvent(event) {
				if (!this.isLifecycleEventAffectingThisContainer(event)) return;
				this.scheduleInitLayoutOverlay();
			}
			scheduleInitLayoutOverlay() {
				if (this.layoutOverlayAnimationFrame) return;
				this.layoutOverlayAnimationFrame = requestAnimationFrame(() => {
					this.layoutOverlayAnimationFrame = null;
					this.initLayoutOverlay();
				});
			}
			/**
			* Rerender Grid Overlay when child element is added or removed from its parent.
			*
			* @return {void}
			*/
			addChildLifeCycleEventListeners() {
				this.lifecycleChangeListener = this.onChildLifecycleEvent.bind(this);
				window.addEventListener("elementor/editor/element-rendered", this.lifecycleChangeListener);
				window.addEventListener("elementor/editor/element-destroyed", this.lifecycleChangeListener);
			}
			removeChildLifeCycleEventListeners() {
				window.removeEventListener("elementor/editor/element-rendered", this.lifecycleChangeListener);
				window.removeEventListener("elementor/editor/element-destroyed", this.lifecycleChangeListener);
				if (this.layoutOverlayAnimationFrame) {
					cancelAnimationFrame(this.layoutOverlayAnimationFrame);
					this.layoutOverlayAnimationFrame = null;
				}
			}
			updateEmptyViewHeight() {
				if (this.shouldUpdateEmptyViewHeight()) {
					const { emptyView } = this.elements, currentDevice = elementor.channels.deviceMode.request("currentMode"), elementSettings = this.getElementSettings(), gridRows = "desktop" === currentDevice ? elementSettings.grid_rows_grid : elementSettings.grid_rows_grid + "_" + currentDevice;
					emptyView === null || emptyView === void 0 || emptyView.style.removeProperty("min-height");
					if (this.hasCustomUnit(gridRows) && this.isNotOnlyANumber(gridRows) && this.sizeNotEmpty(gridRows)) emptyView.style.minHeight = "auto";
					if ((emptyView === null || emptyView === void 0 ? void 0 : emptyView.offsetHeight) <= 0) emptyView.style.minHeight = "100px";
				}
			}
			shouldUpdateEmptyViewHeight() {
				return !!this.elements.container.querySelector(".elementor-empty-view");
			}
			hasCustomUnit(gridRows) {
				return "custom" === (gridRows === null || gridRows === void 0 ? void 0 : gridRows.unit);
			}
			sizeNotEmpty(gridRows) {
				var _gridRows$size;
				return "" !== (gridRows === null || gridRows === void 0 || (_gridRows$size = gridRows.size) === null || _gridRows$size === void 0 ? void 0 : _gridRows$size.trim());
			}
			isNotOnlyANumber(gridRows) {
				return !/^\d+$/.test(gridRows === null || gridRows === void 0 ? void 0 : gridRows.size);
			}
			shouldRemoveEmptyView() {
				const childrenLength = this.elements.outlineParentContainer.querySelectorAll(":scope > .elementor-element").length;
				if (0 === childrenLength) return false;
				return this.getMaxElementsNumber() <= childrenLength && this.isFullFilled(childrenLength);
			}
			isFullFilled(numberOfElements) {
				const gridDimensions = GridContainer.getDimensionsCache(this).dimensions, { grid_auto_flow: gridAutoFlow } = this.getElementSettings();
				return 0 === numberOfElements % gridDimensions["row" === gridAutoFlow ? "columns" : "rows"].length;
			}
			getMaxOutlineElementsNumber() {
				const childrenLength = this.elements.outlineParentContainer.querySelectorAll(":scope > .elementor-element").length;
				return GridContainer.getCachedMaxOutlineElementsNumber(this, childrenLength);
			}
			getMaxElementsNumber() {
				return GridContainer.getDimensionsCache(this).maxElementsNumber;
			}
		};
		_defineProperty(GridContainer, "cacheByValues", /* @__PURE__ */ new Map());
		_defineProperty(GridContainer, "isDeviceModeListenerBound", false);
		exports.default = GridContainer;
	}));

//#endregion
//#region \0elementor-chunk-entry
	var import_grid_container = /* @__PURE__ */ __toESM(require_grid_container());
	(window.__elementorChunks = window.__elementorChunks || {})["container-grid-container"] = import_grid_container;

//#endregion
})();
//# sourceMappingURL=container-grid-container.js.map