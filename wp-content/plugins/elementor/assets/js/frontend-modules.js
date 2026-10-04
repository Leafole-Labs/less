"use strict";

(function() {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});
	var __esmMin = (fn, res, err) => () => {
		if (err) throw err[0];
		try {
			return fn && (res = fn(fn = 0)), res;
		} catch (e) {
			throw err = [e], e;
		}
	};
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);

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
//#region assets/dev/js/modules/imports/module.js
	var require_module = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		require_es_array_push();
		require_esnext_iterator_constructor();
		require_esnext_iterator_filter();
		require_esnext_iterator_for_each();
		var Module = function() {
			const $ = jQuery;
			const instanceParams = arguments;
			const self = this;
			const events = {};
			let settings;
			const ensureClosureMethods = function() {
				$.each(self, function(methodName) {
					const oldMethod = self[methodName];
					if ("function" !== typeof oldMethod) return;
					self[methodName] = function() {
						return oldMethod.apply(self, arguments);
					};
				});
			};
			const initSettings = function() {
				settings = self.getDefaultSettings();
				const instanceSettings = instanceParams[0];
				if (instanceSettings) $.extend(true, settings, instanceSettings);
			};
			const init = function() {
				self.__construct.apply(self, instanceParams);
				ensureClosureMethods();
				initSettings();
				self.trigger("init");
			};
			this.getItems = function(items, itemKey) {
				if (itemKey) {
					const keyStack = itemKey.split(".");
					const currentKey = keyStack.splice(0, 1);
					if (!keyStack.length) return items[currentKey];
					if (!items[currentKey]) return;
					return this.getItems(items[currentKey], keyStack.join("."));
				}
				return items;
			};
			this.getSettings = function(setting) {
				return this.getItems(settings, setting);
			};
			this.setSettings = function(settingKey, value, settingsContainer) {
				if (!settingsContainer) settingsContainer = settings;
				if ("object" === typeof settingKey) {
					$.extend(settingsContainer, settingKey);
					return self;
				}
				const keyStack = settingKey.split(".");
				const currentKey = keyStack.splice(0, 1);
				if (!keyStack.length) {
					settingsContainer[currentKey] = value;
					return self;
				}
				if (!settingsContainer[currentKey]) settingsContainer[currentKey] = {};
				return self.setSettings(keyStack.join("."), value, settingsContainer[currentKey]);
			};
			this.getErrorMessage = function(type, functionName) {
				let message;
				switch (type) {
					case "forceMethodImplementation":
						message = `The method '${functionName}' must to be implemented in the inheritor child.`;
						break;
					default: message = "An error occurs";
				}
				return message;
			};
			this.forceMethodImplementation = function(functionName) {
				throw new Error(this.getErrorMessage("forceMethodImplementation", functionName));
			};
			this.on = function(eventName, callback) {
				if ("object" === typeof eventName) {
					$.each(eventName, function(singleEventName) {
						self.on(singleEventName, this);
					});
					return self;
				}
				eventName.split(" ").forEach(function(singleEventName) {
					if (!events[singleEventName]) events[singleEventName] = [];
					events[singleEventName].push(callback);
				});
				return self;
			};
			this.off = function(eventName, callback) {
				if (!events[eventName]) return self;
				if (!callback) {
					delete events[eventName];
					return self;
				}
				const callbackIndex = events[eventName].indexOf(callback);
				if (-1 !== callbackIndex) {
					delete events[eventName][callbackIndex];
					events[eventName] = events[eventName].filter((val) => val);
				}
				return self;
			};
			this.trigger = function(eventName) {
				const methodName = "on" + eventName[0].toUpperCase() + eventName.slice(1);
				const params = Array.prototype.slice.call(arguments, 1);
				if (self[methodName]) self[methodName].apply(self, params);
				const callbacks = events[eventName];
				if (!callbacks) return self;
				$.each(callbacks, function(index, callback) {
					callback.apply(self, params);
				});
				return self;
			};
			init();
		};
		Module.prototype.__construct = function() {};
		Module.prototype.getDefaultSettings = function() {
			return {};
		};
		Module.prototype.getConstructorID = function() {
			return this.constructor.name;
		};
		Module.extend = function(properties) {
			const $ = jQuery;
			const parent = this;
			const child = function() {
				return parent.apply(this, arguments);
			};
			$.extend(child, parent);
			child.prototype = Object.create($.extend({}, parent.prototype, properties));
			child.prototype.constructor = child;
			child.__super__ = parent.prototype;
			return child;
		};
		module.exports = Module;
	}));

//#endregion
//#region assets/dev/js/modules/imports/view-module.js
	var require_view_module = /* @__PURE__ */ __commonJSMin(((exports) => {
		var _interopRequireDefault = require_interopRequireDefault();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var _module = _interopRequireDefault(require_module());
		exports.default = _module.default.extend({
			elements: null,
			getDefaultElements() {
				return {};
			},
			bindEvents() {},
			onInit() {
				this.initElements();
				this.bindEvents();
			},
			initElements() {
				this.elements = this.getDefaultElements();
			}
		});
	}));

//#endregion
//#region assets/dev/js/modules/imports/instance-type.js
	var require_instance_type = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		require_es_array_push();
		require_esnext_iterator_constructor();
		require_esnext_iterator_for_each();
		var InstanceType = class InstanceType {
			static [Symbol.hasInstance](target) {
				/**
				* This is function extending being called each time JS uses instanceOf, since babel use it each time it create new class
				* its give's opportunity to mange capabilities of instanceOf operator.
				* saving current class each time will give option later to handle instanceOf manually.
				*/
				let result = super[Symbol.hasInstance](target);
				if (target && !target.constructor.getInstanceType) return result;
				if (target) {
					if (!target.instanceTypes) target.instanceTypes = [];
					if (!result) {
						if (this.getInstanceType() === target.constructor.getInstanceType()) result = true;
					}
					if (result) {
						const name = this.getInstanceType === InstanceType.getInstanceType ? "BaseInstanceType" : this.getInstanceType();
						if (-1 === target.instanceTypes.indexOf(name)) target.instanceTypes.push(name);
					}
				}
				if (!result && target) result = target.instanceTypes && Array.isArray(target.instanceTypes) && -1 !== target.instanceTypes.indexOf(this.getInstanceType());
				return result;
			}
			static getInstanceType() {
				elementorModules.ForceMethodImplementation();
			}
			constructor() {
				let target = new.target;
				const prototypes = [];
				while (target.__proto__ && target.__proto__.name) {
					prototypes.push(target.__proto__);
					target = target.__proto__;
				}
				prototypes.reverse().forEach((proto) => this instanceof proto);
			}
		};
		exports.default = InstanceType;
	}));

//#endregion
//#region assets/dev/js/editor/utils/is-instanceof.js
	var require_is_instanceof = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		/**
		* Some FileAPI objects such as FileList, DataTransferItem and DataTransferItemList has inconsistency with the retrieved
		* object (from events, etc.) and the actual JavaScript object so a regular instanceof doesn't work. This function can
		* check whether it's instanceof by using the objects constructor and prototype names.
		*
		* @param  object
		* @param  constructors
		* @return {boolean}
		*/
		var _default = (object, constructors) => {
			constructors = Array.isArray(constructors) ? constructors : [constructors];
			for (const constructor of constructors) if (object.constructor.name === constructor.prototype[Symbol.toStringTag]) return true;
			return false;
		};
		exports.default = _default;
	}));

//#endregion
//#region assets/dev/js/modules/imports/args-object.js
	var require_args_object = /* @__PURE__ */ __commonJSMin(((exports) => {
		var _interopRequireDefault = require_interopRequireDefault();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var _instanceType = _interopRequireDefault(require_instance_type());
		var _isInstanceof = _interopRequireDefault(require_is_instanceof());
		var ArgsObject = class extends _instanceType.default {
			static getInstanceType() {
				return "ArgsObject";
			}
			/**
			* Function constructor().
			*
			* Create ArgsObject.
			*
			* @param {{}} args
			*/
			constructor(args) {
				super();
				this.args = args;
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
			requireArgument(property, args = this.args) {
				if (!Object.prototype.hasOwnProperty.call(args, property)) throw Error(`${property} is required.`);
			}
			/**
			* Function requireArgumentType().
			*
			* Validate property in args using `type === typeof(args.whatever)`.
			*
			* @param {string} property
			* @param {string} type
			* @param {{}}     args
			*
			* @throws {Error}
			*/
			requireArgumentType(property, type, args = this.args) {
				this.requireArgument(property, args);
				if (typeof args[property] !== type) throw Error(`${property} invalid type: ${type}.`);
			}
			/**
			* Function requireArgumentInstance().
			*
			* Validate property in args using `args.whatever instanceof instance`.
			*
			* @param {string} property
			* @param {*}      instance
			* @param {{}}     args
			*
			* @throws {Error}
			*/
			requireArgumentInstance(property, instance, args = this.args) {
				this.requireArgument(property, args);
				if (!(args[property] instanceof instance) && !(0, _isInstanceof.default)(args[property], instance)) throw Error(`${property} invalid instance.`);
			}
			/**
			* Function requireArgumentConstructor().
			*
			* Validate property in args using `type === args.whatever.constructor`.
			*
			* @param {string} property
			* @param {*}      type
			* @param {{}}     args
			*
			* @throws {Error}
			*/
			requireArgumentConstructor(property, type, args = this.args) {
				this.requireArgument(property, args);
				if (args[property].constructor.toString() !== type.prototype.constructor.toString()) throw Error(`${property} invalid constructor type.`);
			}
		};
		exports.default = ArgsObject;
	}));

//#endregion
//#region assets/dev/js/modules/imports/utils/masonry.js
	var require_masonry = /* @__PURE__ */ __commonJSMin(((exports) => {
		var _interopRequireDefault = require_interopRequireDefault();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		require_es_array_push();
		var _viewModule = _interopRequireDefault(require_view_module());
		exports.default = _viewModule.default.extend({
			getDefaultSettings() {
				return {
					container: null,
					items: null,
					columnsCount: 3,
					verticalSpaceBetween: 30
				};
			},
			getDefaultElements() {
				return {
					$container: jQuery(this.getSettings("container")),
					$items: jQuery(this.getSettings("items"))
				};
			},
			run() {
				var heights = [];
				var distanceFromTop = this.elements.$container.position().top;
				var settings = this.getSettings();
				var columnsCount = settings.columnsCount;
				distanceFromTop += parseInt(this.elements.$container.css("margin-top"), 10);
				this.elements.$items.each(function(index) {
					var row = Math.floor(index / columnsCount);
					var $item = jQuery(this);
					var itemHeight = $item[0].getBoundingClientRect().height + settings.verticalSpaceBetween;
					if (row) {
						var itemPosition = $item.position();
						var indexAtRow = index % columnsCount;
						var pullHeight = itemPosition.top - distanceFromTop - heights[indexAtRow];
						pullHeight -= parseInt($item.css("margin-top"), 10);
						pullHeight *= -1;
						$item.css("margin-top", pullHeight + "px");
						heights[indexAtRow] += itemHeight;
					} else heights.push(itemHeight);
				});
			}
		});
	}));

//#endregion
//#region assets/dev/js/modules/imports/utils/scroll.js
	var require_scroll = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		require_es_array_push();
		var Scroll = class {
			/**
			* @param {Object}      obj
			* @param {number}      obj.sensitivity - Value between 0-100 - Will determine the intersection trigger points on the element
			* @param {Function}    obj.callback    - Will be triggered on each intersection point between the element and the viewport top/bottom
			* @param {string}      obj.offset      - Offset between the element intersection points and the viewport, written like in CSS: '-50% 0 -25%'
			* @param {HTMLElement} obj.root        - The element that the events will be relative to, if 'null' will be relative to the viewport
			*/
			static scrollObserver(obj) {
				let lastScrollY = 0;
				const buildThresholds = (sensitivityPercentage = 0) => {
					const thresholds = [];
					if (sensitivityPercentage > 0 && sensitivityPercentage <= 100) {
						const increment = 100 / sensitivityPercentage;
						for (let i = 0; i <= 100; i += increment) thresholds.push(i / 100);
					} else thresholds.push(0);
					return thresholds;
				};
				const options = {
					root: obj.root || null,
					rootMargin: obj.offset || "0px",
					threshold: buildThresholds(obj.sensitivity)
				};
				function handleIntersect(entries) {
					const currentScrollY = entries[0].boundingClientRect.y;
					const isInViewport = entries[0].isIntersecting;
					const intersectionScrollDirection = currentScrollY < lastScrollY ? "down" : "up";
					const scrollPercentage = Math.abs(parseFloat((entries[0].intersectionRatio * 100).toFixed(2)));
					obj.callback({
						sensitivity: obj.sensitivity,
						isInViewport,
						scrollPercentage,
						intersectionScrollDirection
					});
					lastScrollY = currentScrollY;
				}
				return new IntersectionObserver(handleIntersect, options);
			}
			/**
			* @param {jQuery.Element} $element
			* @param {Object}         offsetObj
			* @param {number}         offsetObj.start - Offset start value in percentages
			* @param {number}         offsetObj.end   - Offset end value in percentages
			*/
			static getElementViewportPercentage($element, offsetObj = {}) {
				const elementOffset = $element[0].getBoundingClientRect();
				const offsetStart = offsetObj.start || 0;
				const offsetEnd = offsetObj.end || 0;
				const windowStartOffset = window.innerHeight * offsetStart / 100;
				const windowEndOffset = window.innerHeight * offsetEnd / 100;
				const y1 = elementOffset.top - window.innerHeight;
				const y2 = elementOffset.top + windowStartOffset + $element.height();
				const startPosition = 0 - y1 + windowStartOffset;
				const endPosition = y2 - y1 + windowEndOffset;
				const percent = Math.max(0, Math.min(startPosition / endPosition, 1));
				return parseFloat((percent * 100).toFixed(2));
			}
			/**
			* @param {Object} offsetObj
			* @param {number} offsetObj.start - Offset start value in percentages
			* @param {number} offsetObj.end   - Offset end value in percentages
			* @param {number} limitPageHeight - Will limit the page height calculation
			*/
			static getPageScrollPercentage(offsetObj = {}, limitPageHeight) {
				const offsetStart = offsetObj.start || 0;
				const offsetEnd = offsetObj.end || 0;
				const initialPageHeight = limitPageHeight || document.documentElement.scrollHeight - document.documentElement.clientHeight;
				const heightOffset = initialPageHeight * offsetStart / 100;
				const pageRange = initialPageHeight + heightOffset + initialPageHeight * offsetEnd / 100;
				return (document.documentElement.scrollTop + document.body.scrollTop + heightOffset) / pageRange * 100;
			}
		};
		exports.default = Scroll;
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
//#region assets/dev/js/modules/imports/force-method-implementation.js
	var require_force_method_implementation = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = exports.ForceMethodImplementation = void 0;
		require_es_array_includes();
		var ForceMethodImplementation = class ForceMethodImplementation extends Error {
			constructor(info = {}, args = {}) {
				super(`${info.isStatic ? "static " : ""}${info.fullName}() should be implemented, please provide '${info.functionName || info.fullName}' functionality.`, args);
				if (Object.keys(args).length) console.error(args);
				Error.captureStackTrace(this, ForceMethodImplementation);
			}
		};
		exports.ForceMethodImplementation = ForceMethodImplementation;
		var _default = (args) => {
			const caller = Error().stack.split("\n")[2].trim();
			const callerName = caller.startsWith("at new") ? "constructor" : caller.split(" ")[1];
			const info = {};
			info.functionName = callerName;
			info.fullName = callerName;
			if (info.functionName.includes(".")) {
				const parts = info.functionName.split(".");
				info.className = parts[0];
				info.functionName = parts[1];
			} else info.isStatic = true;
			throw new ForceMethodImplementation(info, args);
		};
		exports.default = _default;
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
//#region app/modules/import-export-customization/assets/js/shared/utils/template-registry-helpers.js
	var require_template_registry_helpers = /* @__PURE__ */ __commonJSMin(((exports) => {
		init_objectSpread2();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.createGetInitialState = createGetInitialState;
		function createGetInitialState(exportGroup, additionalProps = {}) {
			return (data, parentInitialState) => {
				let isEnabled = parentInitialState;
				if (data.hasOwnProperty("uploadedData")) {
					var _elementorAppConfig;
					isEnabled = false;
					const templates = data.uploadedData.manifest.templates;
					const exportGroups = ((_elementorAppConfig = elementorAppConfig) === null || _elementorAppConfig === void 0 || (_elementorAppConfig = _elementorAppConfig["import-export-customization"]) === null || _elementorAppConfig === void 0 ? void 0 : _elementorAppConfig.exportGroups) || {};
					for (const templateId in templates) if (exportGroups[templates[templateId].doc_type] === exportGroup) {
						isEnabled = true;
						break;
					}
				}
				return _objectSpread2({ enabled: isEnabled }, additionalProps);
			};
		}
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
//#region app/modules/import-export-customization/assets/js/shared/registry/base.js
	var require_base$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
		init_objectWithoutProperties();
		init_objectSpread2();
		var _excluded = ["children"];
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.BaseRegistry = void 0;
		require_esnext_iterator_constructor();
		require_esnext_iterator_filter();
		require_esnext_iterator_for_each();
		require_esnext_iterator_map();
		var BaseRegistry = class {
			constructor() {
				this.sections = /* @__PURE__ */ new Map();
			}
			register(section) {
				if (!section.key || !section.title) throw new Error("Template type must have key and title");
				const formattedSection = this.get(section.key) || this.formatSection(section);
				if (section.children) if (formattedSection.children) {
					const existingChildrenMap = new Map(formattedSection.children.map((child) => [child.key, child]));
					section.children.forEach((childSection) => {
						const formattedChild = this.formatSection(childSection);
						existingChildrenMap.set(childSection.key, formattedChild);
					});
					formattedSection.children = Array.from(existingChildrenMap.values());
				} else formattedSection.children = section.children.map((childSection) => this.formatSection(childSection));
				this.sections.set(section.key, formattedSection);
			}
			formatSection(_ref) {
				let { children } = _ref, section = _objectWithoutProperties(_ref, _excluded);
				return _objectSpread2({
					key: section.key,
					title: section.title,
					description: section.description || "",
					useParentDefault: section.useParentDefault !== false,
					getInitialState: section.getInitialState || null,
					component: section.component || null,
					order: section.order || 10,
					isAvailable: section.isAvailable || (() => true)
				}, section);
			}
			getAll() {
				return Array.from(this.sections.values()).filter((type) => type.isAvailable()).map((type) => {
					if (type.children) return _objectSpread2(_objectSpread2({}, type), {}, { children: [...type.children].sort((a, b) => a.order - b.order) });
					return type;
				}).sort((a, b) => a.order - b.order);
			}
			get(key) {
				return this.sections.get(key);
			}
		};
		exports.BaseRegistry = BaseRegistry;
	}));

//#endregion
//#region app/modules/import-export-customization/assets/js/shared/registry/customization-dialogs.js
	var require_customization_dialogs = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.customizationDialogsRegistry = void 0;
		var _base = require_base$1();
		exports.customizationDialogsRegistry = new _base.BaseRegistry();
	}));

//#endregion
//#region assets/dev/js/modules/modules.js
	var require_modules = /* @__PURE__ */ __commonJSMin(((exports) => {
		var _interopRequireDefault = require_interopRequireDefault();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var _module = _interopRequireDefault(require_module());
		var _viewModule = _interopRequireDefault(require_view_module());
		var _argsObject = _interopRequireDefault(require_args_object());
		var _masonry = _interopRequireDefault(require_masonry());
		var _scroll = _interopRequireDefault(require_scroll());
		var _forceMethodImplementation = _interopRequireDefault(require_force_method_implementation());
		var _templateRegistryHelpers = require_template_registry_helpers();
		var _customizationDialogs = require_customization_dialogs();
		var baseModules = {
			Module: _module.default,
			ViewModule: _viewModule.default,
			ArgsObject: _argsObject.default,
			ForceMethodImplementation: _forceMethodImplementation.default,
			utils: {
				Masonry: _masonry.default,
				Scroll: _scroll.default
			},
			importExport: {
				createGetInitialState: _templateRegistryHelpers.createGetInitialState,
				customizationDialogsRegistry: _customizationDialogs.customizationDialogsRegistry
			}
		};
		if (!window.elementorModules) window.elementorModules = baseModules;
		else Object.assign(window.elementorModules, baseModules);
		exports.default = window.elementorModules;
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
//#region assets/dev/js/frontend/document.js
	var require_document = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		require_esnext_iterator_constructor();
		require_esnext_iterator_find();
		var _default = class extends elementorModules.ViewModule {
			getDefaultSettings() {
				return {
					selectors: {
						elements: ".elementor-element",
						nestedDocumentElements: ".elementor .elementor-element"
					},
					classes: { editMode: "elementor-edit-mode" }
				};
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return { $elements: this.$element.find(selectors.elements).not(this.$element.find(selectors.nestedDocumentElements)) };
			}
			getDocumentSettings(setting) {
				let elementSettings;
				if (this.isEdit) {
					elementSettings = {};
					const settings = elementor.settings.page.model;
					jQuery.each(settings.getActiveControls(), (controlKey) => {
						elementSettings[controlKey] = settings.attributes[controlKey];
					});
				} else elementSettings = this.$element.data("elementor-settings") || {};
				return this.getItems(elementSettings, setting);
			}
			runElementsHandlers() {
				this.elements.$elements.each((index, element) => setTimeout(() => elementorFrontend.elementsHandler.runReadyTrigger(element)));
			}
			onInit() {
				this.$element = this.getSettings("$element");
				super.onInit();
				this.isEdit = this.$element.hasClass(this.getSettings("classes.editMode"));
				if (this.isEdit) elementor.on("document:loaded", () => {
					elementor.settings.page.model.on("change", this.onSettingsChange.bind(this));
				});
				else this.runElementsHandlers();
			}
			onSettingsChange() {}
		};
		exports.default = _default;
	}));

//#endregion
//#region assets/dev/js/frontend/tools/stretch-element.js
	var require_stretch_element = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = elementorModules.ViewModule.extend({
			getDefaultSettings() {
				return {
					element: null,
					direction: elementorFrontend.config.is_rtl ? "right" : "left",
					selectors: { container: window },
					considerScrollbar: false,
					cssOutput: "inline"
				};
			},
			getDefaultElements() {
				return { $element: jQuery(this.getSettings("element")) };
			},
			stretch() {
				const settings = this.getSettings();
				let $container;
				try {
					$container = jQuery(settings.selectors.container);
				} catch (e) {}
				if (!$container || !$container.length) $container = jQuery(this.getDefaultSettings().selectors.container);
				this.reset();
				var $element = this.elements.$element;
				var containerWidth = $container.innerWidth();
				var elementOffset = $element.offset().left;
				var isFixed = "fixed" === $element.css("position");
				var correctOffset = isFixed ? 0 : elementOffset;
				var isContainerFullScreen = window === $container[0];
				if (!isContainerFullScreen) {
					var containerOffset = $container.offset().left;
					if (isFixed) correctOffset = containerOffset;
					if (elementOffset > containerOffset) correctOffset = elementOffset - containerOffset;
				}
				if (settings.considerScrollbar && isContainerFullScreen) {
					const scrollbarWidth = window.innerWidth - containerWidth;
					correctOffset -= scrollbarWidth;
				}
				if (!isFixed) {
					if (elementorFrontend.config.is_rtl) correctOffset = containerWidth - ($element.outerWidth() + correctOffset);
					correctOffset = -correctOffset;
				}
				if (settings.margin) correctOffset += settings.margin;
				var css = {};
				let width = containerWidth;
				if (settings.margin) width -= settings.margin * 2;
				css.width = width + "px";
				css[settings.direction] = correctOffset + "px";
				if ("variables" === settings.cssOutput) {
					this.applyCssVariables($element, css);
					return;
				}
				$element.css(css);
			},
			reset() {
				const css = {};
				const settings = this.getSettings();
				const $element = this.elements.$element;
				if ("variables" === settings.cssOutput) {
					this.resetCssVariables($element);
					return;
				}
				css.width = "";
				css[settings.direction] = "";
				$element.css(css);
			},
			applyCssVariables($element, css) {
				$element.css("--stretch-width", css.width);
				if (!!css.left) $element.css("--stretch-left", css.left);
				else $element.css("--stretch-right", css.right);
			},
			resetCssVariables($element) {
				$element.css({
					"--stretch-width": "",
					"--stretch-left": "",
					"--stretch-right": ""
				});
			}
		});
	}));

//#endregion
//#region assets/dev/js/frontend/handlers/base.js
	var require_base = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		require_es_array_push();
		require_esnext_iterator_constructor();
		require_esnext_iterator_filter();
		require_esnext_iterator_find();
		require_esnext_iterator_for_each();
		module.exports = elementorModules.ViewModule.extend({
			$element: null,
			editorListeners: null,
			onElementChange: null,
			onEditSettingsChange: null,
			onPageSettingsChange: null,
			isEdit: null,
			__construct(settings) {
				if (!this.isActive(settings)) return;
				this.$element = settings.$element;
				this.isEdit = this.$element.hasClass("elementor-element-edit-mode");
				if (this.isEdit) this.addEditorListeners();
			},
			isActive() {
				return true;
			},
			isElementInTheCurrentDocument() {
				if (!elementorFrontend.isEditMode()) return false;
				return elementor.documents.currentDocument.id.toString() === this.$element[0].closest(".elementor").dataset.elementorId;
			},
			findElement(selector) {
				var $mainElement = this.$element;
				return $mainElement.find(selector).filter(function() {
					return jQuery(this).parent().closest(".elementor-element").is($mainElement);
				});
			},
			getUniqueHandlerID(cid, $element) {
				if (!cid) cid = this.getModelCID();
				if (!$element) $element = this.$element;
				return cid + $element.attr("data-element_type") + this.getConstructorID();
			},
			initEditorListeners() {
				var self = this;
				self.editorListeners = [{
					event: "element:destroy",
					to: elementor.channels.data,
					callback(removedModel) {
						if (removedModel.cid !== self.getModelCID()) return;
						self.onDestroy();
					}
				}];
				if (self.onElementChange) {
					const elementType = self.getWidgetType() || self.getElementType();
					let eventName = "change";
					if ("global" !== elementType) eventName += ":" + elementType;
					self.editorListeners.push({
						event: eventName,
						to: elementor.channels.editor,
						callback(controlView, elementView) {
							if (self.getUniqueHandlerID(elementView.model.cid, elementView.$el) !== self.getUniqueHandlerID()) return;
							self.onElementChange(controlView.model.get("name"), controlView, elementView);
						}
					});
				}
				if (self.onEditSettingsChange) self.editorListeners.push({
					event: "change:editSettings",
					to: elementor.channels.editor,
					callback(changedModel, view) {
						if (view.model.cid !== self.getModelCID()) return;
						const propName = Object.keys(changedModel.changed)[0];
						self.onEditSettingsChange(propName, changedModel.changed[propName]);
					}
				});
				["page"].forEach(function(settingsType) {
					var listenerMethodName = "on" + settingsType[0].toUpperCase() + settingsType.slice(1) + "SettingsChange";
					if (self[listenerMethodName]) self.editorListeners.push({
						event: "change",
						to: elementor.settings[settingsType].model,
						callback(model) {
							self[listenerMethodName](model.changed);
						}
					});
				});
			},
			getEditorListeners() {
				if (!this.editorListeners) this.initEditorListeners();
				return this.editorListeners;
			},
			addEditorListeners() {
				var uniqueHandlerID = this.getUniqueHandlerID();
				this.getEditorListeners().forEach(function(listener) {
					elementorFrontend.addListenerOnce(uniqueHandlerID, listener.event, listener.callback, listener.to);
				});
			},
			removeEditorListeners() {
				var uniqueHandlerID = this.getUniqueHandlerID();
				this.getEditorListeners().forEach(function(listener) {
					elementorFrontend.removeListeners(uniqueHandlerID, listener.event, null, listener.to);
				});
			},
			getElementType() {
				return this.$element.data("element_type");
			},
			getWidgetType() {
				const widgetType = this.$element.data("widget_type");
				if (!widgetType) return;
				return widgetType.split(".")[0];
			},
			getID() {
				return this.$element.data("id");
			},
			getModelCID() {
				return this.$element.data("model-cid");
			},
			getElementSettings(setting) {
				let elementSettings = {};
				const modelCID = this.getModelCID();
				if (this.isEdit && modelCID) {
					const settings = elementorFrontend.config.elements.data[modelCID];
					const attributes = settings.attributes;
					let type = attributes.widgetType || attributes.elType;
					if (attributes.isInner) type = "inner-" + type;
					let settingsKeys = elementorFrontend.config.elements.keys[type];
					if (!settingsKeys) {
						settingsKeys = elementorFrontend.config.elements.keys[type] = [];
						jQuery.each(settings.controls, (name, control) => {
							if (control.frontend_available || control.editor_available) settingsKeys.push(name);
						});
					}
					jQuery.each(settings.getActiveControls(), function(controlKey) {
						if (-1 !== settingsKeys.indexOf(controlKey)) {
							let value = attributes[controlKey];
							if (value.toJSON) value = value.toJSON();
							elementSettings[controlKey] = value;
						}
					});
				} else elementSettings = this.$element.data("settings") || {};
				return this.getItems(elementSettings, setting);
			},
			getEditSettings(setting) {
				var attributes = {};
				if (this.isEdit) attributes = elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes;
				return this.getItems(attributes, setting);
			},
			getCurrentDeviceSetting(settingKey) {
				return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(), settingKey);
			},
			onInit() {
				if (this.isActive(this.getSettings())) elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
			},
			onDestroy() {
				if (this.isEdit) this.removeEditorListeners();
				if (this.unbindEvents) this.unbindEvents();
			}
		});
	}));

//#endregion
//#region assets/dev/js/frontend/handlers/stretched-element.js
	var require_stretched_element = /* @__PURE__ */ __commonJSMin(((exports) => {
		var _interopRequireDefault = require_interopRequireDefault();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		require_esnext_iterator_constructor();
		require_esnext_iterator_find();
		var _base = _interopRequireDefault(require_base());
		var StretchedElement = class extends _base.default {
			getStretchedClass() {
				return "e-stretched";
			}
			getStretchSettingName() {
				return "stretch_element";
			}
			getStretchActiveValue() {
				return "yes";
			}
			bindEvents() {
				const handlerID = this.getUniqueHandlerID();
				elementorFrontend.addListenerOnce(handlerID, "resize", this.stretch);
				elementorFrontend.addListenerOnce(handlerID, "sticky:stick", this.stretch, this.$element);
				elementorFrontend.addListenerOnce(handlerID, "sticky:unstick", this.stretch, this.$element);
				if (elementorFrontend.isEditMode()) {
					this.onKitChangeStretchContainerChange = this.onKitChangeStretchContainerChange.bind(this);
					elementor.channels.editor.on("kit:change:stretchContainer", this.onKitChangeStretchContainerChange);
				}
			}
			unbindEvents() {
				elementorFrontend.removeListeners(this.getUniqueHandlerID(), "resize", this.stretch);
				if (elementorFrontend.isEditMode()) elementor.channels.editor.off("kit:change:stretchContainer", this.onKitChangeStretchContainerChange);
			}
			isActive(settings) {
				return elementorFrontend.isEditMode() || settings.$element.hasClass(this.getStretchedClass());
			}
			getStretchElementForConfig(childSelector = null) {
				if (childSelector) return this.$element.find(childSelector);
				return this.$element;
			}
			getStretchElementConfig() {
				return {
					element: this.getStretchElementForConfig(),
					selectors: { container: this.getStretchContainer() },
					considerScrollbar: elementorFrontend.isEditMode() && elementorFrontend.config.is_rtl
				};
			}
			initStretch() {
				this.stretch = this.stretch.bind(this);
				this.stretchElement = new elementorModules.frontend.tools.StretchElement(this.getStretchElementConfig());
			}
			getStretchContainer() {
				return elementorFrontend.getKitSettings("stretched_section_container") || window;
			}
			isStretchSettingEnabled() {
				return this.getElementSettings(this.getStretchSettingName()) === this.getStretchActiveValue();
			}
			stretch() {
				if (!this.isStretchSettingEnabled()) return;
				this.stretchElement.stretch();
			}
			onInit(...args) {
				if (!this.isActive(this.getSettings())) return;
				this.initStretch();
				super.onInit(...args);
				this.stretch();
			}
			onElementChange(propertyName) {
				if (this.getStretchSettingName() === propertyName) if (this.isStretchSettingEnabled()) this.stretch();
				else this.stretchElement.reset();
			}
			onKitChangeStretchContainerChange() {
				this.stretchElement.setSettings("selectors.container", this.getStretchContainer());
				this.stretch();
			}
		};
		exports.default = StretchedElement;
	}));

//#endregion
//#region assets/dev/js/frontend/handlers/base-swiper.js
	var require_base_swiper = /* @__PURE__ */ __commonJSMin(((exports) => {
		var _interopRequireDefault = require_interopRequireDefault();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var _base = _interopRequireDefault(require_base());
		var SwiperHandlerBase = class extends _base.default {
			getInitialSlide() {
				const editSettings = this.getEditSettings();
				return editSettings.activeItemIndex ? editSettings.activeItemIndex - 1 : 0;
			}
			getSlidesCount() {
				return this.elements.$slides.length;
			}
			togglePauseOnHover(toggleOn) {
				if (toggleOn) this.elements.$swiperContainer.on({
					mouseenter: () => {
						this.swiper.autoplay.stop();
					},
					mouseleave: () => {
						this.swiper.autoplay.start();
					}
				});
				else this.elements.$swiperContainer.off("mouseenter mouseleave");
			}
			handleKenBurns() {
				const settings = this.getSettings();
				if (this.$activeImageBg) this.$activeImageBg.removeClass(settings.classes.kenBurnsActive);
				this.activeItemIndex = this.swiper ? this.swiper.activeIndex : this.getInitialSlide();
				if (this.swiper) this.$activeImageBg = jQuery(this.swiper.slides[this.activeItemIndex]).children("." + settings.classes.slideBackground);
				else this.$activeImageBg = jQuery(this.elements.$slides[0]).children("." + settings.classes.slideBackground);
				this.$activeImageBg.addClass(settings.classes.kenBurnsActive);
			}
		};
		exports.default = SwiperHandlerBase;
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
//#region assets/dev/js/frontend/handlers/base-carousel.js
	var require_base_carousel = /* @__PURE__ */ __commonJSMin(((exports) => {
		init_asyncToGenerator();
		var _interopRequireDefault = require_interopRequireDefault();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		require_esnext_iterator_constructor();
		require_esnext_iterator_find();
		require_esnext_iterator_for_each();
		var _baseSwiper = _interopRequireDefault(require_base_swiper());
		var CarouselHandlerBase = class extends _baseSwiper.default {
			getDefaultSettings() {
				return { selectors: {
					carousel: ".swiper",
					swiperWrapper: ".swiper-wrapper",
					slideContent: ".swiper-slide",
					swiperArrow: ".elementor-swiper-button",
					paginationWrapper: ".swiper-pagination",
					paginationBullet: ".swiper-pagination-bullet",
					paginationBulletWrapper: ".swiper-pagination-bullets"
				} };
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				const elements = {
					$swiperContainer: this.$element.find(selectors.carousel),
					$swiperWrapper: this.$element.find(selectors.swiperWrapper),
					$swiperArrows: this.$element.find(selectors.swiperArrow),
					$paginationWrapper: this.$element.find(selectors.paginationWrapper),
					$paginationBullets: this.$element.find(selectors.paginationBullet),
					$paginationBulletWrapper: this.$element.find(selectors.paginationBulletWrapper)
				};
				elements.$slides = elements.$swiperContainer.find(selectors.slideContent);
				return elements;
			}
			getSwiperSettings() {
				const elementSettings = this.getElementSettings();
				const slidesToShow = +elementSettings.slides_to_show || 3;
				const isSingleSlide = 1 === slidesToShow;
				const elementorBreakpoints = elementorFrontend.config.responsive.activeBreakpoints;
				const defaultSlidesToShowMap = {
					mobile: 1,
					tablet: isSingleSlide ? 1 : 2
				};
				const swiperOptions = {
					slidesPerView: slidesToShow,
					loop: "yes" === elementSettings.infinite,
					speed: elementSettings.speed,
					handleElementorBreakpoints: true
				};
				swiperOptions.breakpoints = {};
				let lastBreakpointSlidesToShowValue = slidesToShow;
				Object.keys(elementorBreakpoints).reverse().forEach((breakpointName) => {
					const defaultSlidesToShow = defaultSlidesToShowMap[breakpointName] ? defaultSlidesToShowMap[breakpointName] : lastBreakpointSlidesToShowValue;
					swiperOptions.breakpoints[elementorBreakpoints[breakpointName].value] = {
						slidesPerView: +elementSettings["slides_to_show_" + breakpointName] || defaultSlidesToShow,
						slidesPerGroup: +elementSettings["slides_to_scroll_" + breakpointName] || 1
					};
					if (elementSettings.image_spacing_custom) swiperOptions.breakpoints[elementorBreakpoints[breakpointName].value].spaceBetween = this.getSpaceBetween(breakpointName);
					lastBreakpointSlidesToShowValue = +elementSettings["slides_to_show_" + breakpointName] || defaultSlidesToShow;
				});
				if ("yes" === elementSettings.autoplay) swiperOptions.autoplay = {
					delay: elementSettings.autoplay_speed,
					disableOnInteraction: "yes" === elementSettings.pause_on_interaction
				};
				if (isSingleSlide) {
					swiperOptions.effect = elementSettings.effect;
					if ("fade" === elementSettings.effect) swiperOptions.fadeEffect = { crossFade: true };
				} else swiperOptions.slidesPerGroup = +elementSettings.slides_to_scroll || 1;
				if (elementSettings.image_spacing_custom) swiperOptions.spaceBetween = this.getSpaceBetween();
				const showArrows = "arrows" === elementSettings.navigation || "both" === elementSettings.navigation;
				const showPagination = "dots" === elementSettings.navigation || "both" === elementSettings.navigation || elementSettings.pagination;
				if (showArrows) swiperOptions.navigation = {
					prevEl: ".elementor-swiper-button-prev",
					nextEl: ".elementor-swiper-button-next"
				};
				if (showPagination) swiperOptions.pagination = {
					el: `.elementor-element-${this.getID()} .swiper-pagination`,
					type: !!elementSettings.pagination ? elementSettings.pagination : "bullets",
					clickable: true,
					renderBullet: (index, classname) => {
						return `<span class="${classname}" role="button" tabindex="0" data-bullet-index="${index}" aria-label="${elementorFrontend.config.i18n.a11yCarouselPaginationBulletMessage} ${index + 1}"></span>`;
					}
				};
				if ("yes" === elementSettings.lazyload) swiperOptions.lazy = {
					loadPrevNext: true,
					loadPrevNextAmount: 1
				};
				swiperOptions.a11y = {
					enabled: true,
					prevSlideMessage: elementorFrontend.config.i18n.a11yCarouselPrevSlideMessage,
					nextSlideMessage: elementorFrontend.config.i18n.a11yCarouselNextSlideMessage,
					firstSlideMessage: elementorFrontend.config.i18n.a11yCarouselFirstSlideMessage,
					lastSlideMessage: elementorFrontend.config.i18n.a11yCarouselLastSlideMessage
				};
				swiperOptions.on = {
					slideChange: () => {
						this.a11ySetPaginationTabindex();
						this.handleElementHandlers();
						this.a11ySetSlideAriaHidden();
					},
					init: () => {
						this.a11ySetPaginationTabindex();
						this.a11ySetSlideAriaHidden("initialisation");
					}
				};
				this.applyOffsetSettings(elementSettings, swiperOptions, slidesToShow);
				return swiperOptions;
			}
			getOffsetWidth() {
				const currentDevice = elementorFrontend.getCurrentDeviceMode();
				return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "offset_width", "size", currentDevice) || 0;
			}
			applyOffsetSettings(elementSettings, swiperOptions, slidesToShow) {
				const offsetSide = elementSettings.offset_sides;
				if (elementorFrontend.isEditMode() && "NestedCarousel" === this.constructor.name || !offsetSide || "none" === offsetSide) return;
				switch (offsetSide) {
					case "right":
						this.forceSliderToShowNextSlideWhenOnLast(swiperOptions, slidesToShow);
						this.addClassToSwiperContainer("offset-right");
						break;
					case "left":
						this.addClassToSwiperContainer("offset-left");
						break;
					case "both":
						this.forceSliderToShowNextSlideWhenOnLast(swiperOptions, slidesToShow);
						this.addClassToSwiperContainer("offset-both");
						break;
				}
			}
			forceSliderToShowNextSlideWhenOnLast(swiperOptions, slidesToShow) {
				swiperOptions.slidesPerView = slidesToShow + .001;
			}
			addClassToSwiperContainer(className) {
				this.getDefaultElements().$swiperContainer[0].classList.add(className);
			}
			onInit(...args) {
				var _superprop_getOnInit = () => super.onInit;
				var _this = this;
				return _asyncToGenerator(function* () {
					_superprop_getOnInit().call(_this, ...args);
					if (!_this.elements.$swiperContainer.length || 2 > _this.elements.$slides.length) return;
					yield _this.initSwiper();
					if ("yes" === _this.getElementSettings().pause_on_hover) _this.togglePauseOnHover(true);
				})();
			}
			initSwiper() {
				var _this2 = this;
				return _asyncToGenerator(function* () {
					const Swiper = elementorFrontend.utils.swiper;
					_this2.swiper = yield new Swiper(_this2.elements.$swiperContainer, _this2.getSwiperSettings());
					_this2.elements.$swiperContainer.data("swiper", _this2.swiper);
				})();
			}
			bindEvents() {
				this.elements.$swiperArrows.on("keydown", this.onDirectionArrowKeydown.bind(this));
				this.elements.$paginationWrapper.on("keydown", ".swiper-pagination-bullet", this.onDirectionArrowKeydown.bind(this));
				this.elements.$swiperContainer.on("keydown", ".swiper-slide", this.onDirectionArrowKeydown.bind(this));
				this.$element.find(":focusable").on("focus", this.onFocusDisableAutoplay.bind(this));
				elementorFrontend.elements.$window.on("resize", this.getSwiperSettings.bind(this));
			}
			unbindEvents() {
				this.elements.$swiperArrows.off();
				this.elements.$paginationWrapper.off();
				this.elements.$swiperContainer.off();
				this.$element.find(":focusable").off();
				elementorFrontend.elements.$window.off("resize");
			}
			onDirectionArrowKeydown(event) {
				const isRTL = elementorFrontend.config.is_rtl;
				const inlineDirectionArrows = ["ArrowLeft", "ArrowRight"];
				const currentKeydown = event.originalEvent.code;
				const isDirectionInlineKeydown = -1 !== inlineDirectionArrows.indexOf(currentKeydown);
				const directionStart = isRTL ? "ArrowRight" : "ArrowLeft";
				const directionEnd = isRTL ? "ArrowLeft" : "ArrowRight";
				if (!isDirectionInlineKeydown) return true;
				else if (directionStart === currentKeydown) this.swiper.slidePrev();
				else if (directionEnd === currentKeydown) this.swiper.slideNext();
			}
			onFocusDisableAutoplay() {
				this.swiper.autoplay.stop();
			}
			updateSwiperOption(propertyName) {
				const newSettingValue = this.getElementSettings()[propertyName];
				const params = this.swiper.params;
				switch (propertyName) {
					case "autoplay_speed":
						params.autoplay.delay = newSettingValue;
						break;
					case "speed":
						params.speed = newSettingValue;
						break;
				}
				this.swiper.update();
			}
			getChangeableProperties() {
				return {
					pause_on_hover: "pauseOnHover",
					autoplay_speed: "delay",
					speed: "speed",
					arrows_position: "arrows_position"
				};
			}
			onElementChange(propertyName) {
				if (0 === propertyName.indexOf("image_spacing_custom")) {
					this.updateSpaceBetween(propertyName);
					return;
				}
				if (this.getChangeableProperties()[propertyName]) if ("pause_on_hover" === propertyName) {
					const newSettingValue = this.getElementSettings("pause_on_hover");
					this.togglePauseOnHover("yes" === newSettingValue);
				} else this.updateSwiperOption(propertyName);
			}
			onEditSettingsChange(propertyName) {
				if ("activeItemIndex" === propertyName) this.swiper.slideToLoop(this.getEditSettings("activeItemIndex") - 1);
			}
			getSpaceBetween(device = null) {
				const responsiveControlValue = elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "image_spacing_custom", "size", device);
				return Number(responsiveControlValue) || 0;
			}
			updateSpaceBetween(propertyName) {
				const deviceMatch = propertyName.match("image_spacing_custom_(.*)");
				const device = deviceMatch ? deviceMatch[1] : "desktop";
				const newSpaceBetween = this.getSpaceBetween(device);
				if ("desktop" !== device) this.swiper.params.breakpoints[elementorFrontend.config.responsive.activeBreakpoints[device].value].spaceBetween = newSpaceBetween;
				this.swiper.params.spaceBetween = newSpaceBetween;
				this.swiper.update();
			}
			getPaginationBullets(type = "array") {
				const paginationBullets = this.$element.find(this.getSettings("selectors").paginationBullet);
				return "array" === type ? Array.from(paginationBullets) : paginationBullets;
			}
			a11ySetPaginationTabindex() {
				var _this$swiper;
				var _this$swiper2;
				var _event;
				var _event2;
				var _event3;
				const bulletClass = (_this$swiper = this.swiper) === null || _this$swiper === void 0 || (_this$swiper = _this$swiper.params) === null || _this$swiper === void 0 ? void 0 : _this$swiper.pagination.bulletClass;
				const activeBulletClass = (_this$swiper2 = this.swiper) === null || _this$swiper2 === void 0 || (_this$swiper2 = _this$swiper2.params) === null || _this$swiper2 === void 0 ? void 0 : _this$swiper2.pagination.bulletActiveClass;
				this.getPaginationBullets().forEach((bullet) => {
					var _bullet$classList;
					if (!((_bullet$classList = bullet.classList) === null || _bullet$classList === void 0 ? void 0 : _bullet$classList.contains(activeBulletClass))) bullet.removeAttribute("tabindex");
				});
				const isDirectionInlineArrowKey = "ArrowLeft" === ((_event = event) === null || _event === void 0 ? void 0 : _event.code) || "ArrowRight" === ((_event2 = event) === null || _event2 === void 0 ? void 0 : _event2.code);
				if (((_event3 = event) === null || _event3 === void 0 || (_event3 = _event3.target) === null || _event3 === void 0 || (_event3 = _event3.classList) === null || _event3 === void 0 ? void 0 : _event3.contains(bulletClass)) && isDirectionInlineArrowKey) this.$element.find(`.${activeBulletClass}`).trigger("focus");
			}
			getSwiperWrapperTranformXValue() {
				var _this$elements$$swipe;
				let transformValue = (_this$elements$$swipe = this.elements.$swiperWrapper[0]) === null || _this$elements$$swipe === void 0 ? void 0 : _this$elements$$swipe.style.transform;
				transformValue = transformValue.replace("translate3d(", "");
				transformValue = transformValue.split(",");
				transformValue = parseInt(transformValue[0].replace("px", ""));
				return !!transformValue ? transformValue : 0;
			}
			a11ySetSlideAriaHidden(status = "") {
				var _this$swiper3;
				if ("number" !== typeof ("initialisation" === status ? 0 : (_this$swiper3 = this.swiper) === null || _this$swiper3 === void 0 ? void 0 : _this$swiper3.activeIndex)) return;
				const swiperWrapperTransformXValue = this.getSwiperWrapperTranformXValue();
				const swiperWrapperWidth = this.elements.$swiperWrapper[0].clientWidth;
				this.elements.$swiperContainer.find(this.getSettings("selectors").slideContent).each((index, slide) => {
					if (!(0 <= slide.offsetLeft + swiperWrapperTransformXValue && swiperWrapperWidth > slide.offsetLeft + swiperWrapperTransformXValue)) {
						slide.setAttribute("aria-hidden", true);
						slide.setAttribute("inert", "");
					} else {
						slide.removeAttribute("aria-hidden");
						slide.removeAttribute("inert");
					}
				});
			}
			handleElementHandlers() {}
		};
		exports.default = CarouselHandlerBase;
	}));

//#endregion
//#region assets/dev/js/frontend/modules.js
	var _interopRequireDefault = require_interopRequireDefault();
	var _modules = _interopRequireDefault(require_modules());
	var _document = _interopRequireDefault(require_document());
	var _stretchElement = _interopRequireDefault(require_stretch_element());
	var _stretchedElement = _interopRequireDefault(require_stretched_element());
	var _base = _interopRequireDefault(require_base());
	var _baseSwiper = _interopRequireDefault(require_base_swiper());
	var _baseCarousel = _interopRequireDefault(require_base_carousel());
	_modules.default.frontend = {
		Document: _document.default,
		tools: { StretchElement: _stretchElement.default },
		handlers: {
			Base: _base.default,
			StretchedElement: _stretchedElement.default,
			SwiperBase: _baseSwiper.default,
			CarouselBase: _baseCarousel.default
		}
	};

//#endregion
})();
//# sourceMappingURL=frontend-modules.js.map