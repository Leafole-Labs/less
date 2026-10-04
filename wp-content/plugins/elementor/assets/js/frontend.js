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
//#region assets/dev/js/public-path.js
	var require_public_path = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
	}));

//#endregion
//#region assets/dev/js/frontend/utils/chunk-loader.js
	var require_chunk_loader = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.loadChunk = loadChunk;
		/**
		* On-demand loader for frontend code chunks.
		*
		* Rolldown's IIFE output cannot code split, so every dynamic `import()` would otherwise be inlined
		* into the entry. That regressed `frontend.min.js` from 10.4 KiB gzip to 53.7 KiB, most of it
		* unused on any given page. The build rewrites those imports at build time to `loadChunk(name)`
		* so the entry stays small and each handler ships as its own bundle fetched only when a widget
		* needs it.
		*
		* A chunk bundle is an IIFE that assigns its default export to `window.__elementorChunks[name]`.
		* The `__ELEMENTOR_CHUNK_SUFFIX__` constant is replaced at build time with `.min` for the
		* production build and the empty string otherwise, so a dev frontend loads dev chunks and a prod
		* frontend loads minified ones.
		*/
		function chunkUrl(name) {
			var _config$urls;
			const config = window.elementorFrontendConfig || {};
			const assetsUrl = ((_config$urls = config.urls) === null || _config$urls === void 0 ? void 0 : _config$urls.assets) || "";
			const version = config.version ? "?ver=" + encodeURIComponent(config.version) : "";
			return assetsUrl + "js/chunks/" + name + ".js" + version;
		}
		var registry = window.__elementorChunks = window.__elementorChunks || {};
		var inflight = /* @__PURE__ */ new Map();
		function appendChunkScript(name) {
			return new Promise((resolve, reject) => {
				const script = document.createElement("script");
				script.src = chunkUrl(name);
				script.async = true;
				script.onload = () => {
					if (registry[name]) resolve(registry[name]);
					else reject(/* @__PURE__ */ new Error(`[elementor] chunk "${name}" loaded but did not register`));
				};
				script.onerror = () => reject(/* @__PURE__ */ new Error(`[elementor] failed to load chunk "${name}" from ${script.src}`));
				document.head.appendChild(script);
			});
		}
		/**
		* Returns a promise for the module namespace of a chunk, appending its script tag on first
		* request. The build rewrites `import( './handlers/video' )` in frontend sources to
		* `loadChunk( 'video' )`, so call sites see the same then-able interface they wrote against.
		*
		* @param {string} name
		*/
		function loadChunk(name) {
			if (registry[name]) return Promise.resolve(registry[name]);
			if (!inflight.has(name)) inflight.set(name, appendChunkScript(name));
			return inflight.get(name);
		}
		window.__elementorLoadChunk = loadChunk;
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
//#region assets/dev/js/frontend/documents-manager.js
	var require_documents_manager = /* @__PURE__ */ __commonJSMin(((exports) => {
		var _interopRequireDefault = require_interopRequireDefault();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var _document = _interopRequireDefault(require_document());
		var _default = class extends elementorModules.ViewModule {
			constructor(...args) {
				super(...args);
				this.documents = {};
				this.initDocumentClasses();
				this.attachDocumentsClasses();
			}
			getDefaultSettings() {
				return { selectors: { document: ".elementor" } };
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				return { $documents: jQuery(selectors.document) };
			}
			initDocumentClasses() {
				this.documentClasses = { base: _document.default };
				elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes", this);
			}
			addDocumentClass(documentType, documentClass) {
				this.documentClasses[documentType] = documentClass;
			}
			attachDocumentsClasses() {
				this.elements.$documents.each((index, document) => this.attachDocumentClass(jQuery(document)));
			}
			attachDocumentClass($document) {
				const documentData = $document.data();
				const documentID = documentData.elementorId;
				const documentType = documentData.elementorType;
				const DocumentClass = this.documentClasses[documentType] || this.documentClasses.base;
				this.documents[documentID] = new DocumentClass({
					$element: $document,
					id: documentID
				});
			}
		};
		exports.default = _default;
	}));

//#endregion
//#region core/common/assets/js/utils/storage.js
	var require_storage = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		require_esnext_iterator_constructor();
		require_esnext_iterator_for_each();
		var _default = class extends elementorModules.Module {
			get(key, options) {
				options = options || {};
				let storage;
				try {
					storage = options.session ? sessionStorage : localStorage;
				} catch (e) {
					return key ? void 0 : {};
				}
				let elementorStorage = storage.getItem("elementor");
				if (elementorStorage) elementorStorage = JSON.parse(elementorStorage);
				else elementorStorage = {};
				if (!elementorStorage.__expiration) elementorStorage.__expiration = {};
				const expiration = elementorStorage.__expiration;
				let expirationToCheck = [];
				if (key) {
					if (expiration[key]) expirationToCheck = [key];
				} else expirationToCheck = Object.keys(expiration);
				let entryExpired = false;
				expirationToCheck.forEach((expirationKey) => {
					if (new Date(expiration[expirationKey]) < /* @__PURE__ */ new Date()) {
						delete elementorStorage[expirationKey];
						delete expiration[expirationKey];
						entryExpired = true;
					}
				});
				if (entryExpired) this.save(elementorStorage, options.session);
				if (key) return elementorStorage[key];
				return elementorStorage;
			}
			set(key, value, options) {
				options = options || {};
				const elementorStorage = this.get(null, options);
				elementorStorage[key] = value;
				if (options.lifetimeInSeconds) {
					const date = /* @__PURE__ */ new Date();
					date.setTime(date.getTime() + options.lifetimeInSeconds * 1e3);
					elementorStorage.__expiration[key] = date.getTime();
				}
				this.save(elementorStorage, options.session);
			}
			save(object, session) {
				let storage;
				try {
					storage = session ? sessionStorage : localStorage;
				} catch (e) {
					return;
				}
				storage.setItem("elementor", JSON.stringify(object));
			}
		};
		exports.default = _default;
	}));

//#endregion
//#region core/common/assets/js/utils/environment.js
	var require_environment = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var matchUserAgent = (UserAgentStr) => {
			return userAgent.indexOf(UserAgentStr) >= 0;
		};
		var userAgent = navigator.userAgent;
		var isOpera = !!window.opr && !!opr.addons || !!window.opera || matchUserAgent(" OPR/");
		var isFirefox = matchUserAgent("Firefox");
		var isSafari = /^((?!chrome|android).)*safari/i.test(userAgent) || /constructor/i.test(window.HTMLElement) || ((p) => {
			return "[object SafariRemoteNotification]" === p.toString();
		})(!window.safari || typeof safari !== "undefined" && safari.pushNotification);
		var isIE = /Trident|MSIE/.test(userAgent) && !!document.documentMode;
		var isEdge = !isIE && !!window.StyleMedia || matchUserAgent("Edg");
		var isChrome = !!window.chrome && matchUserAgent("Chrome") && !(isEdge || isOpera);
		var isBlink = matchUserAgent("Chrome") && !!window.CSS;
		var isAppleWebkit = matchUserAgent("AppleWebKit") && !isBlink;
		var environment = {
			isTouchDevice: "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
			appleWebkit: isAppleWebkit,
			blink: isBlink,
			chrome: isChrome,
			edge: isEdge,
			firefox: isFirefox,
			ie: isIE,
			mac: matchUserAgent("Macintosh"),
			opera: isOpera,
			safari: isSafari,
			webkit: matchUserAgent("AppleWebKit")
		};
		exports.default = environment;
	}));

//#endregion
//#region assets/dev/js/frontend/utils/video-api/base-loader.js
	var require_base_loader = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var BaseLoader = class extends elementorModules.ViewModule {
			getDefaultSettings() {
				return {
					isInserted: false,
					selectors: { firstScript: "script:first" }
				};
			}
			getDefaultElements() {
				return { $firstScript: jQuery(this.getSettings("selectors.firstScript")) };
			}
			insertAPI() {
				this.elements.$firstScript.before(jQuery("<script>", { src: this.getApiURL() }));
				this.setSettings("isInserted", true);
			}
			getVideoIDFromURL(url) {
				const videoIDParts = url.match(this.getURLRegex());
				return videoIDParts && videoIDParts[1];
			}
			onApiReady(callback) {
				if (!this.getSettings("isInserted")) this.insertAPI();
				if (this.isApiLoaded()) callback(this.getApiObject());
				else setTimeout(() => {
					this.onApiReady(callback);
				}, 350);
			}
			getAutoplayURL(videoURL) {
				return videoURL.replace("&autoplay=0", "") + "&autoplay=1";
			}
		};
		exports.default = BaseLoader;
	}));

//#endregion
//#region assets/dev/js/frontend/utils/video-api/youtube-loader.js
	var require_youtube_loader = /* @__PURE__ */ __commonJSMin(((exports) => {
		var _interopRequireDefault = require_interopRequireDefault();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var _baseLoader = _interopRequireDefault(require_base_loader());
		var YoutubeLoader = class extends _baseLoader.default {
			getApiURL() {
				return "https://www.youtube.com/iframe_api";
			}
			getURLRegex() {
				return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user|shorts)\/))([^?&"'>]+)/;
			}
			isApiLoaded() {
				return window.YT && YT.loaded;
			}
			getApiObject() {
				return YT;
			}
		};
		exports.default = YoutubeLoader;
	}));

//#endregion
//#region assets/dev/js/frontend/utils/video-api/vimeo-loader.js
	var require_vimeo_loader = /* @__PURE__ */ __commonJSMin(((exports) => {
		var _interopRequireDefault = require_interopRequireDefault();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var _baseLoader = _interopRequireDefault(require_base_loader());
		var VimeoLoader = class extends _baseLoader.default {
			getApiURL() {
				return "https://player.vimeo.com/api/player.js";
			}
			getURLRegex() {
				return /^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/;
			}
			isApiLoaded() {
				return window.Vimeo;
			}
			getApiObject() {
				return Vimeo;
			}
			getAutoplayURL(videoURL) {
				const timeMatch = videoURL.match(/#t=[^&]*/);
				return videoURL.replace(timeMatch[0], "") + timeMatch;
			}
		};
		exports.default = VimeoLoader;
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
//#region node_modules/core-js/internals/function-uncurry-this-accessor.js
	var require_function_uncurry_this_accessor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var aCallable = require_a_callable();
		module.exports = function(object, key, method) {
			try {
				return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
			} catch (error) {}
		};
	}));

//#endregion
//#region node_modules/core-js/internals/is-possible-prototype.js
	var require_is_possible_prototype = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var isObject = require_is_object();
		module.exports = function(argument) {
			return isObject(argument) || argument === null;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/a-possible-prototype.js
	var require_a_possible_prototype = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var isPossiblePrototype = require_is_possible_prototype();
		var $String = String;
		var $TypeError = TypeError;
		module.exports = function(argument) {
			if (isPossiblePrototype(argument)) return argument;
			throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
		};
	}));

//#endregion
//#region node_modules/core-js/internals/object-set-prototype-of.js
	var require_object_set_prototype_of = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var uncurryThisAccessor = require_function_uncurry_this_accessor();
		var isObject = require_is_object();
		var requireObjectCoercible = require_require_object_coercible();
		var aPossiblePrototype = require_a_possible_prototype();
		module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
			var CORRECT_SETTER = false;
			var test = {};
			var setter;
			try {
				setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
				setter(test, []);
				CORRECT_SETTER = test instanceof Array;
			} catch (error) {}
			return function setPrototypeOf(O, proto) {
				requireObjectCoercible(O);
				aPossiblePrototype(proto);
				if (!isObject(O)) return O;
				if (CORRECT_SETTER) setter(O, proto);
				else O.__proto__ = proto;
				return O;
			};
		}() : void 0);
	}));

//#endregion
//#region node_modules/core-js/internals/inherit-if-required.js
	var require_inherit_if_required = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var isCallable = require_is_callable();
		var isObject = require_is_object();
		var setPrototypeOf = require_object_set_prototype_of();
		module.exports = function($this, dummy, Wrapper) {
			var NewTarget;
			var NewTargetPrototype;
			if (setPrototypeOf && isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
			return $this;
		};
	}));

//#endregion
//#region node_modules/core-js/internals/to-string.js
	var require_to_string = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var classof = require_classof();
		var $String = String;
		module.exports = function(argument) {
			if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
			return $String(argument);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/normalize-string-argument.js
	var require_normalize_string_argument = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var toString = require_to_string();
		module.exports = function(argument, $default) {
			return argument === void 0 ? arguments.length < 2 ? "" : $default : toString(argument);
		};
	}));

//#endregion
//#region node_modules/core-js/internals/dom-exception-constants.js
	var require_dom_exception_constants = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = {
			IndexSizeError: {
				s: "INDEX_SIZE_ERR",
				c: 1,
				m: 1
			},
			DOMStringSizeError: {
				s: "DOMSTRING_SIZE_ERR",
				c: 2,
				m: 0
			},
			HierarchyRequestError: {
				s: "HIERARCHY_REQUEST_ERR",
				c: 3,
				m: 1
			},
			WrongDocumentError: {
				s: "WRONG_DOCUMENT_ERR",
				c: 4,
				m: 1
			},
			InvalidCharacterError: {
				s: "INVALID_CHARACTER_ERR",
				c: 5,
				m: 1
			},
			NoDataAllowedError: {
				s: "NO_DATA_ALLOWED_ERR",
				c: 6,
				m: 0
			},
			NoModificationAllowedError: {
				s: "NO_MODIFICATION_ALLOWED_ERR",
				c: 7,
				m: 1
			},
			NotFoundError: {
				s: "NOT_FOUND_ERR",
				c: 8,
				m: 1
			},
			NotSupportedError: {
				s: "NOT_SUPPORTED_ERR",
				c: 9,
				m: 1
			},
			InUseAttributeError: {
				s: "INUSE_ATTRIBUTE_ERR",
				c: 10,
				m: 1
			},
			InvalidStateError: {
				s: "INVALID_STATE_ERR",
				c: 11,
				m: 1
			},
			SyntaxError: {
				s: "SYNTAX_ERR",
				c: 12,
				m: 1
			},
			InvalidModificationError: {
				s: "INVALID_MODIFICATION_ERR",
				c: 13,
				m: 1
			},
			NamespaceError: {
				s: "NAMESPACE_ERR",
				c: 14,
				m: 1
			},
			InvalidAccessError: {
				s: "INVALID_ACCESS_ERR",
				c: 15,
				m: 1
			},
			ValidationError: {
				s: "VALIDATION_ERR",
				c: 16,
				m: 0
			},
			TypeMismatchError: {
				s: "TYPE_MISMATCH_ERR",
				c: 17,
				m: 1
			},
			SecurityError: {
				s: "SECURITY_ERR",
				c: 18,
				m: 1
			},
			NetworkError: {
				s: "NETWORK_ERR",
				c: 19,
				m: 1
			},
			AbortError: {
				s: "ABORT_ERR",
				c: 20,
				m: 1
			},
			URLMismatchError: {
				s: "URL_MISMATCH_ERR",
				c: 21,
				m: 1
			},
			QuotaExceededError: {
				s: "QUOTA_EXCEEDED_ERR",
				c: 22,
				m: 1
			},
			TimeoutError: {
				s: "TIMEOUT_ERR",
				c: 23,
				m: 1
			},
			InvalidNodeTypeError: {
				s: "INVALID_NODE_TYPE_ERR",
				c: 24,
				m: 1
			},
			DataCloneError: {
				s: "DATA_CLONE_ERR",
				c: 25,
				m: 1
			}
		};
	}));

//#endregion
//#region node_modules/core-js/internals/error-stack-clear.js
	var require_error_stack_clear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var uncurryThis = require_function_uncurry_this();
		var $Error = Error;
		var replace = uncurryThis("".replace);
		var TEST = (function(arg) {
			return String(new $Error(arg).stack);
		})("zxcasd");
		var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
		var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
		module.exports = function(stack, dropEntries) {
			if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error.prepareStackTrace) while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
			return stack;
		};
	}));

//#endregion
//#region node_modules/core-js/modules/web.dom-exception.stack.js
	var require_web_dom_exception_stack = /* @__PURE__ */ __commonJSMin((() => {
		var $ = require_export();
		var globalThis = require_global_this();
		var getBuiltIn = require_get_built_in();
		var createPropertyDescriptor = require_create_property_descriptor();
		var defineProperty = require_object_define_property().f;
		var hasOwn = require_has_own_property();
		var anInstance = require_an_instance();
		var inheritIfRequired = require_inherit_if_required();
		var normalizeStringArgument = require_normalize_string_argument();
		var DOMExceptionConstants = require_dom_exception_constants();
		var clearErrorStack = require_error_stack_clear();
		var DESCRIPTORS = require_descriptors();
		var IS_PURE = require_is_pure();
		var DOM_EXCEPTION = "DOMException";
		var Error = getBuiltIn("Error");
		var NativeDOMException = getBuiltIn(DOM_EXCEPTION);
		var $DOMException = function DOMException() {
			anInstance(this, DOMExceptionPrototype);
			var argumentsLength = arguments.length;
			var message = normalizeStringArgument(argumentsLength < 1 ? void 0 : arguments[0]);
			var that = new NativeDOMException(message, normalizeStringArgument(argumentsLength < 2 ? void 0 : arguments[1], "Error"));
			var error = new Error(message);
			error.name = DOM_EXCEPTION;
			defineProperty(that, "stack", createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
			inheritIfRequired(that, this, $DOMException);
			return that;
		};
		var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
		var ERROR_HAS_STACK = "stack" in new Error(DOM_EXCEPTION);
		var DOM_EXCEPTION_HAS_STACK = "stack" in new NativeDOMException(1, 2);
		var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(globalThis, DOM_EXCEPTION);
		var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);
		var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;
		$({
			global: true,
			constructor: true,
			forced: IS_PURE || FORCED_CONSTRUCTOR
		}, { DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException });
		var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
		var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
		if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
			if (!IS_PURE) defineProperty(PolyfilledDOMExceptionPrototype, "constructor", createPropertyDescriptor(1, PolyfilledDOMException));
			for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
				var constant = DOMExceptionConstants[key];
				var constantName = constant.s;
				if (!hasOwn(PolyfilledDOMException, constantName)) defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
			}
		}
	}));

//#endregion
//#region assets/dev/js/frontend/utils/url-actions.js
	var require_url_actions = /* @__PURE__ */ __commonJSMin(((exports) => {
		init_asyncToGenerator();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		require_web_dom_exception_stack();
		var _default = class extends elementorModules.ViewModule {
			getDefaultSettings() {
				return { selectors: { links: "a[href^=\"%23elementor-action\"], a[href^=\"#elementor-action\"]" } };
			}
			bindEvents() {
				elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.runLinkAction.bind(this));
			}
			initActions() {
				this.actions = { lightbox: function() {
					var _ref = _asyncToGenerator(function* (settings) {
						const lightbox = yield elementorFrontend.utils.lightbox;
						if (settings.slideshow) lightbox.openSlideshow(settings.slideshow, settings.url);
						else {
							if (settings.id) settings.type = "image";
							lightbox.showModal(settings);
						}
					});
					return function lightbox(_x) {
						return _ref.apply(this, arguments);
					};
				}() };
			}
			addAction(name, callback) {
				this.actions[name] = callback;
			}
			runAction(url, ...restArgs) {
				url = decodeURI(url);
				url = decodeURIComponent(url);
				const actionMatch = url.match(/action=(.+?)&/);
				if (!actionMatch) return;
				const action = this.actions[actionMatch[1]];
				if (!action) return;
				let settings = {};
				const settingsMatch = url.match(/settings=(.+)/);
				if (settingsMatch) settings = JSON.parse(atob(settingsMatch[1]));
				settings.previousEvent = event;
				action(settings, ...restArgs);
			}
			runLinkAction(event) {
				event.preventDefault();
				this.runAction(jQuery(event.currentTarget).attr("href"), event);
			}
			runHashAction() {
				if (!location.hash) return;
				const elementWithHash = document.querySelector(`[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);
				if (elementWithHash) this.runAction(elementWithHash.getAttribute("data-e-action-hash"));
			}
			createActionHash(action, settings) {
				return encodeURIComponent(`#elementor-action:action=${action}&settings=${btoa(JSON.stringify(settings))}`);
			}
			onInit() {
				super.onInit();
				this.initActions();
				elementorFrontend.on("components:init", this.runHashAction.bind(this));
			}
		};
		exports.default = _default;
	}));

//#endregion
//#region assets/dev/js/frontend/utils/swiper.js
	var require_swiper = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		require_esnext_iterator_constructor();
		require_esnext_iterator_for_each();
		var SwiperHandler = class {
			constructor(container, config) {
				var _container$closest;
				var _container$closest2;
				this.config = config;
				if (this.config.breakpoints) this.config = this.adjustConfig(config);
				if (container instanceof jQuery) container = container[0];
				(_container$closest = container.closest(".elementor-widget-wrap")) === null || _container$closest === void 0 || _container$closest.classList.add("e-swiper-container");
				(_container$closest2 = container.closest(".elementor-widget")) === null || _container$closest2 === void 0 || _container$closest2.classList.add("e-widget-swiper");
				return new Promise((resolve) => {
					if ("undefined" === typeof Swiper) {
						elementorFrontend.utils.assetsLoader.load("script", "swiper").then(() => resolve(this.createSwiperInstance(container, this.config)));
						return;
					}
					if ("function" === typeof Swiper && "undefined" === typeof window.Swiper) window.Swiper = Swiper;
					resolve(this.createSwiperInstance(container, this.config));
				});
			}
			createSwiperInstance(container, config) {
				const SwiperSource = window.Swiper;
				SwiperSource.prototype.adjustConfig = this.adjustConfig;
				config = this.applyMotionPreferences(config);
				return new SwiperSource(container, config);
			}
			adjustConfig(config) {
				if (!config.handleElementorBreakpoints) return config;
				const elementorBreakpoints = elementorFrontend.config.responsive.activeBreakpoints;
				const elementorBreakpointValues = elementorFrontend.breakpoints.getBreakpointValues();
				Object.keys(config.breakpoints).forEach((configBPKey) => {
					const configBPKeyInt = parseInt(configBPKey);
					let breakpointToUpdate;
					if (configBPKeyInt === elementorBreakpoints.mobile.value || configBPKeyInt + 1 === elementorBreakpoints.mobile.value) breakpointToUpdate = 0;
					else if (elementorBreakpoints.widescreen && (configBPKeyInt === elementorBreakpoints.widescreen.value || configBPKeyInt + 1 === elementorBreakpoints.widescreen.value)) breakpointToUpdate = configBPKeyInt;
					else {
						const currentBPIndexInElementorBPs = elementorBreakpointValues.findIndex((elementorBP) => {
							return configBPKeyInt === elementorBP || configBPKeyInt + 1 === elementorBP;
						});
						breakpointToUpdate = elementorBreakpointValues[currentBPIndexInElementorBPs - 1];
					}
					config.breakpoints[breakpointToUpdate] = config.breakpoints[configBPKey];
					config.breakpoints[configBPKey] = {
						slidesPerView: config.slidesPerView,
						slidesPerGroup: config.slidesPerGroup ? config.slidesPerGroup : 1
					};
				});
				return config;
			}
			applyMotionPreferences(config) {
				if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return config;
				return Object.assign({}, config, {
					speed: 0,
					autoplay: false
				});
			}
		};
		exports.default = SwiperHandler;
	}));

//#endregion
//#region assets/dev/js/frontend/utils/lightbox/lightbox-manager.js
	var require_lightbox_manager = /* @__PURE__ */ __commonJSMin(((exports) => {
		init_asyncToGenerator();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		require_esnext_iterator_constructor();
		require_esnext_iterator_find();
		var LightboxManager = class LightboxManager extends elementorModules.ViewModule {
			static getLightbox() {
				const lightboxPromise = new Promise((resolveLightbox) => {
					__elementorLoadChunk("lightbox-lightbox").then(({ default: LightboxModule }) => resolveLightbox(new LightboxModule()));
				});
				const dialogScriptPromise = elementorFrontend.utils.assetsLoader.load("script", "dialog");
				const dialogStylePromise = elementorFrontend.utils.assetsLoader.load("style", "dialog");
				const shareLinkPromise = elementorFrontend.utils.assetsLoader.load("script", "share-link");
				const swiperStylePromise = elementorFrontend.utils.assetsLoader.load("style", "swiper");
				const lightboxStylePromise = elementorFrontend.utils.assetsLoader.load("style", "e-lightbox");
				return Promise.all([
					lightboxPromise,
					dialogScriptPromise,
					dialogStylePromise,
					shareLinkPromise,
					swiperStylePromise,
					lightboxStylePromise
				]).then(() => lightboxPromise);
			}
			getDefaultSettings() {
				return { selectors: {
					links: "a, [data-elementor-lightbox]",
					slideshow: "[data-elementor-lightbox-slideshow]"
				} };
			}
			getDefaultElements() {
				return {
					$links: jQuery(this.getSettings("selectors.links")),
					$slideshow: jQuery(this.getSettings("selectors.slideshow"))
				};
			}
			isLightboxLink(element) {
				if ("a" === element.tagName.toLowerCase() && (element.hasAttribute("download") || !/^[^?]+\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(element.href)) && !element.dataset.elementorLightboxVideo) return false;
				const generalOpenInLightbox = elementorFrontend.getKitSettings("global_image_lightbox");
				const currentLinkOpenInLightbox = element.dataset.elementorOpenLightbox;
				return "yes" === currentLinkOpenInLightbox || generalOpenInLightbox && "no" !== currentLinkOpenInLightbox;
			}
			isLightboxSlideshow() {
				return 0 !== this.elements.$slideshow.length;
			}
			onLinkClick(event) {
				var _this = this;
				return _asyncToGenerator(function* () {
					const element = event.currentTarget;
					const $target = jQuery(event.target);
					const editMode = elementorFrontend.isEditMode();
					const isColorPickingMode = editMode && elementor.$previewContents.find("body").hasClass("elementor-editor__ui-state__color-picker");
					const isClickInsideElementor = !!$target.closest(".elementor-edit-area").length;
					if (!_this.isLightboxLink(element)) {
						if (editMode && isClickInsideElementor) event.preventDefault();
						return;
					}
					event.preventDefault();
					if (editMode && !elementor.getPreferences("lightbox_in_editor")) return;
					if (isColorPickingMode) return;
					(yield LightboxManager.getLightbox()).createLightbox(element);
				})();
			}
			bindEvents() {
				elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), (event) => this.onLinkClick(event));
			}
			onInit(...args) {
				super.onInit(...args);
				if (elementorFrontend.isEditMode()) return;
				this.maybeActivateLightboxOnLink();
			}
			maybeActivateLightboxOnLink() {
				this.elements.$links.each((index, element) => {
					if (this.isLightboxLink(element)) {
						LightboxManager.getLightbox();
						return false;
					}
				});
			}
		};
		exports.default = LightboxManager;
	}));

//#endregion
//#region assets/dev/js/frontend/utils/assets-loader.js
	var require_assets_loader = /* @__PURE__ */ __commonJSMin(((exports) => {
		var _elementorFrontendCon;
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var AssetsLoader = class AssetsLoader {
			getScriptElement(src) {
				const scriptElement = document.createElement("script");
				scriptElement.src = src;
				return scriptElement;
			}
			getStyleElement(src) {
				const styleElement = document.createElement("link");
				styleElement.rel = "stylesheet";
				styleElement.href = src;
				return styleElement;
			}
			load(type, key) {
				const assetData = AssetsLoader.assets[type][key];
				if (!assetData.loader) assetData.loader = this.isAssetLoaded(assetData, type) ? Promise.resolve(true) : this.loadAsset(assetData, type);
				return assetData.loader;
			}
			isAssetLoaded(assetData, assetType) {
				var _document$querySelect;
				const filePath = "script" === assetType ? `script[src="${assetData.src}"]` : `link[href="${assetData.src}"]`;
				return !!((_document$querySelect = document.querySelectorAll(filePath)) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.length);
			}
			loadAsset(assetData, assetType) {
				return new Promise((resolve) => {
					const element = "style" === assetType ? this.getStyleElement(assetData.src) : this.getScriptElement(assetData.src);
					element.onload = () => resolve(true);
					this.appendAsset(assetData, element);
				});
			}
			appendAsset(assetData, element) {
				const beforeElement = document.querySelector(assetData.before);
				if (!!beforeElement) {
					beforeElement.insertAdjacentElement("beforebegin", element);
					return;
				}
				const parent = "head" === assetData.parent ? assetData.parent : "body";
				document[parent].appendChild(element);
			}
		};
		exports.default = AssetsLoader;
		var assetsUrl = elementorFrontendConfig.urls.assets;
		var fileSuffix = elementorFrontendConfig.environmentMode.isScriptDebug ? "" : ".min";
		var pluginVersion = elementorFrontendConfig.version;
		AssetsLoader.assets = {
			script: {
				dialog: { src: `${assetsUrl}lib/dialog/dialog${fileSuffix}.js?ver=4.9.3` },
				"share-link": { src: `${assetsUrl}lib/share-link/share-link${fileSuffix}.js?ver=${pluginVersion}` },
				swiper: { src: `${assetsUrl}lib/swiper/v8/swiper${fileSuffix}.js?ver=8.4.5` }
			},
			style: {
				swiper: {
					src: `${assetsUrl}lib/swiper/v8/css/swiper${fileSuffix}.css?ver=8.4.5`,
					parent: "head"
				},
				"e-lightbox": { src: ((_elementorFrontendCon = elementorFrontendConfig) === null || _elementorFrontendCon === void 0 || (_elementorFrontendCon = _elementorFrontendCon.responsive) === null || _elementorFrontendCon === void 0 ? void 0 : _elementorFrontendCon.hasCustomBreakpoints) ? `${elementorFrontendConfig.urls.uploadUrl}/elementor/css/custom-lightbox.min.css?ver=${pluginVersion}` : `${assetsUrl}css/conditionals/lightbox${fileSuffix}.css?ver=${pluginVersion}` },
				dialog: {
					src: `${assetsUrl}css/conditionals/dialog${fileSuffix}.css?ver=${pluginVersion}`,
					parent: "head",
					before: "#elementor-frontend-css"
				}
			}
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
//#region assets/dev/js/utils/breakpoints.js
	var require_breakpoints = /* @__PURE__ */ __commonJSMin(((exports) => {
		init_objectSpread2();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		require_es_array_push();
		require_esnext_iterator_constructor();
		require_esnext_iterator_for_each();
		require_esnext_iterator_map();
		/**
		* Breakpoints
		*
		* This utility class contains helper functions relating to Elementor's breakpoints system.
		*
		* @since 3.4.0
		*/
		var Breakpoints = class extends elementorModules.Module {
			constructor(responsiveConfig) {
				super();
				this.responsiveConfig = responsiveConfig;
			}
			/**
			* Get Active Breakpoints List
			*
			* Returns a flat array containing the active breakpoints/devices. By default, it returns the li
			* the list ordered from smallest to largest breakpoint. If `true` is passed as a parameter, it reverses the order.
			*
			* @since 3.4.0
			*
			* @param {Object} args
			*/
			getActiveBreakpointsList(args = {}) {
				args = _objectSpread2(_objectSpread2({}, {
					largeToSmall: false,
					withDesktop: false
				}), args);
				const breakpointKeys = Object.keys(this.responsiveConfig.activeBreakpoints);
				if (args.withDesktop) {
					const indexToInsertDesktopDevice = -1 === breakpointKeys.indexOf("widescreen") ? breakpointKeys.length : breakpointKeys.length - 1;
					breakpointKeys.splice(indexToInsertDesktopDevice, 0, "desktop");
				}
				if (args.largeToSmall) breakpointKeys.reverse();
				return breakpointKeys;
			}
			/**
			* Get Active Breakpoint Values
			*
			* Returns a flat array containing the list of active breakpoint values, from smallest to largest.
			*
			* @since 3.4.0
			*/
			getBreakpointValues() {
				const { activeBreakpoints } = this.responsiveConfig, breakpointValues = [];
				Object.values(activeBreakpoints).forEach((breakpointConfig) => {
					breakpointValues.push(breakpointConfig.value);
				});
				return breakpointValues;
			}
			/**
			* Get Desktop Previous Device Key
			*
			* Returns the key of the device directly under desktop (can be 'tablet', 'tablet_extra', 'laptop').
			*
			* @since 3.4.0
			*
			* @return {string} device key
			*/
			getDesktopPreviousDeviceKey() {
				let desktopPreviousDevice = "";
				const { activeBreakpoints } = this.responsiveConfig, breakpointKeys = Object.keys(activeBreakpoints), numOfDevices = breakpointKeys.length;
				if ("min" === activeBreakpoints[breakpointKeys[numOfDevices - 1]].direction) desktopPreviousDevice = breakpointKeys[numOfDevices - 2];
				else desktopPreviousDevice = breakpointKeys[numOfDevices - 1];
				return desktopPreviousDevice;
			}
			/**
			* Get Device Minimum Breakpoint
			*
			* Returns the minimum point in the device's display range. For each device, the minimum point of its display range
			* is the max point of the device below it + 1px. For example, if the active devices are mobile, tablet,
			* and desktop, and the mobile breakpoint is 767px, the minimum display point for tablet devices is 768px.
			*
			* @since 3.4.0
			*
			* @return {number|*} minimum breakpoint
			*/
			getDesktopMinPoint() {
				const { activeBreakpoints } = this.responsiveConfig;
				return activeBreakpoints[this.getDesktopPreviousDeviceKey()].value + 1;
			}
			/**
			* Get Device Minimum Breakpoint
			*
			* Returns the minimum point in the device's display range. For each device, the minimum point of its display range
			* is the max point of the device below it + 1px. For example, if the active devices are mobile, tablet,
			* and desktop, and the mobile breakpoint is 767px, the minimum display point for tablet devices is 768px.
			*
			* @since 3.4.0
			*
			* @param {string} device
			* @return {number|*} minimum breakpoint
			*/
			getDeviceMinBreakpoint(device) {
				if ("desktop" === device) return this.getDesktopMinPoint();
				const { activeBreakpoints } = this.responsiveConfig, breakpointNames = Object.keys(activeBreakpoints);
				let minBreakpoint;
				if (breakpointNames[0] === device) minBreakpoint = 320;
				else if ("widescreen" === device) if (activeBreakpoints[device]) minBreakpoint = activeBreakpoints[device].value;
				else minBreakpoint = this.responsiveConfig.breakpoints.widescreen;
				else minBreakpoint = activeBreakpoints[breakpointNames[breakpointNames.indexOf(device) - 1]].value + 1;
				return minBreakpoint;
			}
			/**
			* Get Active Match Regex
			*
			* Returns a regular expression containing all active breakpoints prefixed with an underscore.
			*
			* @return {RegExp} Active Match Regex
			*/
			getActiveMatchRegex() {
				return new RegExp(this.getActiveBreakpointsList().map((device) => "_" + device).join("|") + "$");
			}
		};
		exports.default = Breakpoints;
	}));

//#endregion
//#region assets/dev/js/utils/events.js
	var require_events = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = exports.Events = void 0;
		var Events = class {
			/**
			* Dispatch an Elementor event.
			*
			* Will dispatch both native event & jQuery event (as BC).
			* By default, `bcEvent` is `null`.
			*
			* @param {Object}      context - The context that will dispatch the event.
			* @param {string}      event   - Event to dispatch.
			* @param {*}           data    - Data to pass to the event, default to `null`.
			* @param {string|null} bcEvent - BC event to dispatch, default to `null`.
			*
			* @return {void}
			*/
			static dispatch(context, event, data = null, bcEvent = null) {
				context = context instanceof jQuery ? context[0] : context;
				if (bcEvent) context.dispatchEvent(new CustomEvent(bcEvent, { detail: data }));
				context.dispatchEvent(new CustomEvent(event, { detail: data }));
			}
		};
		exports.Events = Events;
		exports.default = Events;
	}));

//#endregion
//#region modules/shapes/assets/js/frontend/frontend.js
	var require_frontend$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var _default = class extends elementorModules.Module {
			constructor() {
				super();
				elementorFrontend.elementsHandler.attachHandler("text-path", () => __elementorLoadChunk("text-path"));
			}
		};
		exports.default = _default;
	}));

//#endregion
//#region assets/dev/js/frontend/utils/controls.js
	var require_controls = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var Controls = class {
			/**
			* Get Control Value
			*
			* Retrieves a control value.
			* This function has been copied from `elementor/assets/dev/js/editor/utils/conditions.js`.
			*
			* @since 3.11.0
			*
			* @param {{}}     controlSettings A settings object (e.g. element settings - keys and values)
			* @param {string} controlKey      The control key name
			* @param {string} controlSubKey   A specific property of the control object.
			* @return {*} Control Value
			*/
			getControlValue(controlSettings, controlKey, controlSubKey) {
				let value;
				if ("object" === typeof controlSettings[controlKey] && controlSubKey) value = controlSettings[controlKey][controlSubKey];
				else value = controlSettings[controlKey];
				return value;
			}
			/**
			* Get the value of a responsive control.
			*
			* Retrieves the value of a responsive control for the current device or for this first parent device which has a control value.
			*
			* @since 3.11.0
			*
			* @param {{}}     controlSettings A settings object (e.g. element settings - keys and values)
			* @param {string} controlKey      The control key name
			* @param {string} controlSubKey   A specific property of the control object.
			* @param {string} device          If we want to get a value for a specific device mode.
			* @return {*} Control Value
			*/
			getResponsiveControlValue(controlSettings, controlKey, controlSubKey = "", device = null) {
				const currentDeviceMode = device || elementorFrontend.getCurrentDeviceMode();
				const controlValueDesktop = this.getControlValue(controlSettings, controlKey, controlSubKey);
				if ("widescreen" === currentDeviceMode) {
					const controlValueWidescreen = this.getControlValue(controlSettings, `${controlKey}_widescreen`, controlSubKey);
					return !!controlValueWidescreen || 0 === controlValueWidescreen ? controlValueWidescreen : controlValueDesktop;
				}
				const activeBreakpoints = elementorFrontend.breakpoints.getActiveBreakpointsList({ withDesktop: true });
				let parentDeviceMode = currentDeviceMode;
				let deviceIndex = activeBreakpoints.indexOf(currentDeviceMode);
				let controlValue = "";
				while (deviceIndex <= activeBreakpoints.length) {
					if ("desktop" === parentDeviceMode) {
						controlValue = controlValueDesktop;
						break;
					}
					const responsiveControlKey = `${controlKey}_${parentDeviceMode}`;
					const responsiveControlValue = this.getControlValue(controlSettings, responsiveControlKey, controlSubKey);
					if (!!responsiveControlValue || 0 === responsiveControlValue) {
						controlValue = responsiveControlValue;
						break;
					}
					deviceIndex++;
					parentDeviceMode = activeBreakpoints[deviceIndex];
				}
				return controlValue;
			}
		};
		exports.default = Controls;
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
//#region assets/dev/js/frontend/utils/anchor-scroll-margin.js
	var require_anchor_scroll_margin = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		require_es_array_push();
		require_esnext_iterator_constructor();
		require_esnext_iterator_filter();
		require_esnext_iterator_for_each();
		var _default = class extends elementorModules.ViewModule {
			getDefaultSettings() {
				return { selectors: {
					links: ".elementor-element a[href*=\"#\"]",
					stickyElements: ".elementor-element.elementor-sticky"
				} };
			}
			onInit() {
				this.observeStickyElements(() => {
					this.initializeStickyAndAnchorTracking();
				});
			}
			observeStickyElements(callback) {
				new MutationObserver((mutationsList) => {
					for (const mutation of mutationsList) if ("childList" === mutation.type || "attributes" === mutation.type && mutation.target.classList.contains("elementor-sticky")) callback();
				}).observe(document.body, {
					childList: true,
					subtree: true,
					attributes: true,
					attributeFilter: ["class", "style"]
				});
			}
			initializeStickyAndAnchorTracking() {
				const anchorLinks = this.getAllAnchorLinks();
				const stickyElements = this.getAllStickyElements();
				const trackedElements = [];
				if (!stickyElements.length > 0 && !anchorLinks.length > 0) return;
				this.trackStickyElements(stickyElements, trackedElements);
				this.trackAnchorLinks(anchorLinks, trackedElements);
				this.organizeStickyAndAnchors(trackedElements);
			}
			trackAnchorLinks(anchorLinks, trackedElements) {
				anchorLinks.forEach((element) => {
					const target = this.getAnchorTarget(element);
					const scrollPosition = this.getScrollPosition(target);
					trackedElements.push({
						element: target,
						type: "anchor",
						scrollPosition
					});
				});
			}
			trackStickyElements(stickyElements, trackedElements) {
				stickyElements.forEach((element) => {
					const settings = this.getElementSettings(element);
					if (!settings || !settings.sticky_anchor_link_offset) return;
					const { sticky_anchor_link_offset: scrollMarginTop } = settings;
					if (0 === scrollMarginTop) return;
					const scrollPosition = this.getScrollPosition(element);
					trackedElements.push({
						scrollMarginTop,
						type: "sticky",
						scrollPosition
					});
				});
			}
			organizeStickyAndAnchors(elements) {
				const stickyList = this.filterAndSortElementsByType(elements, "sticky");
				const anchorList = this.filterAndSortElementsByType(elements, "anchor");
				stickyList.forEach((sticky, index) => {
					this.defineCurrentStickyRange(sticky, index, stickyList, anchorList);
				});
			}
			defineCurrentStickyRange(sticky, index, stickyList, anchorList) {
				const nextStickyScrollPosition = index + 1 < stickyList.length ? stickyList[index + 1].scrollPosition : Infinity;
				sticky.anchor = anchorList.filter((anchor) => {
					const withinRange = anchor.scrollPosition > sticky.scrollPosition && anchor.scrollPosition < nextStickyScrollPosition;
					if (withinRange) anchor.element.style.scrollMarginTop = `${sticky.scrollMarginTop}px`;
					return withinRange;
				});
			}
			getScrollPosition(element) {
				let offsetTop = 0;
				while (element) {
					offsetTop += element.offsetTop;
					element = element.offsetParent;
				}
				return offsetTop;
			}
			getAllStickyElements() {
				const allStickyElements = document.querySelectorAll(this.getSettings("selectors.stickyElements"));
				return Array.from(allStickyElements).filter((anchor, index, self) => index === self.findIndex((t) => t.getAttribute("data-id") === anchor.getAttribute("data-id")));
			}
			getAllAnchorLinks() {
				const allAnchors = document.querySelectorAll(this.getSettings("selectors.links"));
				return Array.from(allAnchors).filter((anchor, index, self) => index === self.findIndex((t) => t.getAttribute("href") === anchor.getAttribute("href")));
			}
			filterAndSortElementsByType(elements, type) {
				return elements.filter((item) => type === item.type).sort((a, b) => a.scrollPosition - b.scrollPosition);
			}
			isValidSelector(hash) {
				return /^#[A-Za-z_][\w-]*$/.test(hash);
			}
			getAnchorTarget(element) {
				const hash = element === null || element === void 0 ? void 0 : element.hash;
				if (!this.isValidSelector(hash)) return null;
				return document.querySelector(hash);
			}
			getElementSettings(element) {
				return JSON.parse(element.getAttribute("data-settings"));
			}
		};
		exports.default = _default;
	}));

//#endregion
//#region assets/dev/js/frontend/utils/utils.js
	var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.isScrollSnapActive = exports.escapeHTML = void 0;
		var escapeHTML = (str) => {
			const specialChars = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				"'": "&#39;",
				"\"": "&quot;"
			};
			return str.replace(/[&<>'"]/g, (tag) => specialChars[tag] || tag);
		};
		exports.escapeHTML = escapeHTML;
		var isScrollSnapActive = () => {
			var _elementor$settings$p;
			var _elementorFrontend$co;
			return "yes" === (elementorFrontend.isEditMode() ? (_elementor$settings$p = elementor.settings.page.model.attributes) === null || _elementor$settings$p === void 0 ? void 0 : _elementor$settings$p.scroll_snap : (_elementorFrontend$co = elementorFrontend.config.settings.page) === null || _elementorFrontend$co === void 0 ? void 0 : _elementorFrontend$co.scroll_snap) ? true : false;
		};
		exports.isScrollSnapActive = isScrollSnapActive;
	}));

//#endregion
//#region assets/dev/js/utils/hooks.js
	var require_hooks = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/**
		* Handles managing all events for whatever you plug it into. Priorities for hooks are based on lowest to highest in
		* that, lowest priority hooks are fired first.
		*/
		require_es_array_push();
		var EventManager = function() {
			var slice = Array.prototype.slice;
			var MethodsAvailable;
			/**
			* Contains the hooks that get registered with this EventManager. The array for storage utilizes a "flat"
			* object literal such that looking up the hook utilizes the native object literal hash.
			*/
			var STORAGE = {
				actions: {},
				filters: {}
			};
			/**
			* Removes the specified hook by resetting the value of it.
			*
			* @param {string}   type     Type of hook, either 'actions' or 'filters'
			* @param {Function} hook     The hook (namespace.identifier) to remove
			* @param {Function} callback
			* @param {*}        context
			* @private
			*/
			function _removeHook(type, hook, callback, context) {
				var handlers;
				var handler;
				var i;
				if (!STORAGE[type][hook]) return;
				if (!callback) STORAGE[type][hook] = [];
				else {
					handlers = STORAGE[type][hook];
					if (!context) {
						for (i = handlers.length; i--;) if (handlers[i].callback === callback) handlers.splice(i, 1);
					} else for (i = handlers.length; i--;) {
						handler = handlers[i];
						if (handler.callback === callback && handler.context === context) handlers.splice(i, 1);
					}
				}
			}
			/**
			* Use an insert sort for keeping our hooks organized based on priority. This function is ridiculously faster
			* than bubble sort, etc: http://jsperf.com/javascript-sort
			*
			* @param {Array<*>} hooks The custom array containing all of the appropriate hooks to perform an insert sort on.
			* @private
			*/
			function _hookInsertSort(hooks) {
				var tmpHook;
				var j;
				var prevHook;
				for (var i = 1, len = hooks.length; i < len; i++) {
					tmpHook = hooks[i];
					j = i;
					while ((prevHook = hooks[j - 1]) && prevHook.priority > tmpHook.priority) {
						hooks[j] = hooks[j - 1];
						--j;
					}
					hooks[j] = tmpHook;
				}
				return hooks;
			}
			/**
			* Adds the hook to the appropriate storage container
			*
			* @param {string}   type      'actions' or 'filters'
			* @param {Array<*>} hook      The hook (namespace.identifier) to add to our event manager
			* @param {Function} callback  The function that will be called when the hook is executed.
			* @param {number}   priority  The priority of this hook. Must be an integer.
			* @param {*}        [context] A value to be used for this
			* @private
			*/
			function _addHook(type, hook, callback, priority, context) {
				var hookObject = {
					callback,
					priority,
					context
				};
				var hooks = STORAGE[type][hook];
				if (hooks) {
					var hasSameCallback = false;
					jQuery.each(hooks, function() {
						if (this.callback === callback) {
							hasSameCallback = true;
							return false;
						}
					});
					if (hasSameCallback) return;
					hooks.push(hookObject);
					hooks = _hookInsertSort(hooks);
				} else hooks = [hookObject];
				STORAGE[type][hook] = hooks;
			}
			/**
			* Runs the specified hook. If it is an action, the value is not modified but if it is a filter, it is.
			*
			* @param {string}   type 'actions' or 'filters'
			* @param {*}        hook The hook ( namespace.identifier ) to be ran.
			* @param {Array<*>} args Arguments to pass to the action/filter. If it's a filter, args is actually a single parameter.
			* @private
			*/
			function _runHook(type, hook, args) {
				var handlers = STORAGE[type][hook];
				var i;
				var len;
				if (!handlers) return "filters" === type ? args[0] : false;
				len = handlers.length;
				if ("filters" === type) for (i = 0; i < len; i++) args[0] = handlers[i].callback.apply(handlers[i].context, args);
				else for (i = 0; i < len; i++) handlers[i].callback.apply(handlers[i].context, args);
				return "filters" === type ? args[0] : true;
			}
			/**
			* Adds an action to the event manager.
			*
			* @param {string}   action        Must contain namespace.identifier
			* @param {Function} callback      Must be a valid callback function before this action is added
			* @param {number}   [priority=10] Used to control when the function is executed in relation to other callbacks bound to the same hook
			* @param {*}        [context]     Supply a value to be used for this
			*/
			function addAction(action, callback, priority, context) {
				if ("string" === typeof action && "function" === typeof callback) {
					priority = parseInt(priority || 10, 10);
					_addHook("actions", action, callback, priority, context);
				}
				return MethodsAvailable;
			}
			/**
			* Performs an action if it exists. You can pass as many arguments as you want to this function; the only rule is
			* that the first argument must always be the action.
			*/
			function doAction() {
				var args = slice.call(arguments);
				var action = args.shift();
				if ("string" === typeof action) _runHook("actions", action, args);
				return MethodsAvailable;
			}
			/**
			* Removes the specified action if it contains a namespace.identifier & exists.
			*
			* @param {string}   action     The action to remove
			* @param {Function} [callback] Callback function to remove
			*/
			function removeAction(action, callback) {
				if ("string" === typeof action) _removeHook("actions", action, callback);
				return MethodsAvailable;
			}
			/**
			* Adds a filter to the event manager.
			*
			* @param {string}   filter        Must contain namespace.identifier
			* @param {Function} callback      Must be a valid callback function before this action is added
			* @param {number}   [priority=10] Used to control when the function is executed in relation to other callbacks bound to the same hook
			* @param {*}        [context]     Supply a value to be used for this
			*/
			function addFilter(filter, callback, priority, context) {
				if ("string" === typeof filter && "function" === typeof callback) {
					priority = parseInt(priority || 10, 10);
					_addHook("filters", filter, callback, priority, context);
				}
				return MethodsAvailable;
			}
			/**
			* Performs a filter if it exists. You should only ever pass 1 argument to be filtered. The only rule is that
			* the first argument must always be the filter.
			*/
			function applyFilters() {
				var args = slice.call(arguments);
				var filter = args.shift();
				if ("string" === typeof filter) return _runHook("filters", filter, args);
				return MethodsAvailable;
			}
			/**
			* Removes the specified filter if it contains a namespace.identifier & exists.
			*
			* @param {string}   filter     The action to remove
			* @param {Function} [callback] Callback function to remove
			*/
			function removeFilter(filter, callback) {
				if ("string" === typeof filter) _removeHook("filters", filter, callback);
				return MethodsAvailable;
			}
			/**
			* Maintain a reference to the object scope so our public methods never get confusing.
			*/
			MethodsAvailable = {
				removeFilter,
				applyFilters,
				addFilter,
				removeAction,
				doAction,
				addAction
			};
			return MethodsAvailable;
		};
		module.exports = EventManager;
	}));

//#endregion
//#region assets/dev/js/frontend/handlers/global.js
	var require_global = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var GlobalHandler = class extends elementorModules.frontend.handlers.Base {
			getWidgetType() {
				return "global";
			}
			animate() {
				const $element = this.$element;
				const animation = this.getAnimation();
				if ("none" === animation) {
					$element.removeClass("elementor-invisible");
					return;
				}
				const elementSettings = this.getElementSettings();
				const animationDelay = elementSettings._animation_delay || elementSettings.animation_delay || 0;
				$element.removeClass(animation);
				if (this.currentAnimation) $element.removeClass(this.currentAnimation);
				this.currentAnimation = animation;
				setTimeout(() => {
					$element.removeClass("elementor-invisible").addClass("animated " + animation);
				}, animationDelay);
			}
			getAnimation() {
				return this.getCurrentDeviceSetting("animation") || this.getCurrentDeviceSetting("_animation");
			}
			onInit(...args) {
				super.onInit(...args);
				if (this.getAnimation()) {
					const observer = elementorModules.utils.Scroll.scrollObserver({ callback: (event) => {
						if (event.isInViewport) {
							this.animate();
							observer.unobserve(this.$element[0]);
						}
					} });
					observer.observe(this.$element[0]);
				}
			}
			onElementChange(propertyName) {
				if (/^_?animation/.test(propertyName)) this.animate();
			}
		};
		var _default = ($scope) => {
			elementorFrontend.elementsHandler.addHandler(GlobalHandler, { $element: $scope });
		};
		exports.default = _default;
	}));

//#endregion
//#region assets/dev/js/frontend/handlers/create-editor-handler.js
	var require_create_editor_handler = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.createEditorHandler = createEditorHandler;
		function createEditorHandler(importer) {
			return () => {
				return new Promise((resolve) => {
					if (elementorFrontend.isEditMode()) importer().then(resolve);
				});
			};
		}
	}));

//#endregion
//#region assets/dev/js/frontend/handlers/container/container.js
	var require_container = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var _createEditorHandler = require_create_editor_handler();
		exports.default = [
			() => __elementorLoadChunk("background-slideshow"),
			() => __elementorLoadChunk("background-video"),
			(0, _createEditorHandler.createEditorHandler)(() => __elementorLoadChunk("handles-position")),
			(0, _createEditorHandler.createEditorHandler)(() => __elementorLoadChunk("container-shapes")),
			(0, _createEditorHandler.createEditorHandler)(() => __elementorLoadChunk("container-grid-container"))
		];
	}));

//#endregion
//#region assets/dev/js/frontend/handlers/section/section.js
	var require_section = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var _createEditorHandler = require_create_editor_handler();
		exports.default = [
			() => __elementorLoadChunk("section-stretched-section"),
			() => __elementorLoadChunk("background-slideshow"),
			() => __elementorLoadChunk("background-video"),
			(0, _createEditorHandler.createEditorHandler)(() => __elementorLoadChunk("handles-position")),
			(0, _createEditorHandler.createEditorHandler)(() => __elementorLoadChunk("section-shapes"))
		];
	}));

//#endregion
//#region assets/dev/js/frontend/handlers/column.js
	var require_column = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		exports.default = [() => __elementorLoadChunk("background-slideshow")];
	}));

//#endregion
//#region assets/dev/js/frontend/elements-handlers-manager.js
	var require_elements_handlers_manager = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var _interopRequireDefault = require_interopRequireDefault();
		require_esnext_iterator_constructor();
		require_esnext_iterator_for_each();
		var _global = _interopRequireDefault(require_global());
		var _container = _interopRequireDefault(require_container());
		var _section = _interopRequireDefault(require_section());
		var _column = _interopRequireDefault(require_column());
		module.exports = function($) {
			const handlersInstances = {};
			this.elementsHandlers = {
				"accordion.default": () => __elementorLoadChunk("accordion"),
				"alert.default": () => __elementorLoadChunk("alert"),
				"counter.default": () => __elementorLoadChunk("counter"),
				"progress.default": () => __elementorLoadChunk("progress"),
				"tabs.default": () => __elementorLoadChunk("tabs"),
				"toggle.default": () => __elementorLoadChunk("toggle"),
				"video.default": () => __elementorLoadChunk("video"),
				"image-carousel.default": () => __elementorLoadChunk("image-carousel"),
				"text-editor.default": () => __elementorLoadChunk("text-editor"),
				"wp-widget-media_audio.default": () => __elementorLoadChunk("wp-audio"),
				container: _container.default,
				section: _section.default,
				column: _column.default
			};
			if (elementorFrontendConfig.experimentalFeatures.container) {
				this.elementsHandlers["nested-tabs.default"] = () => __elementorLoadChunk("nested-tabs");
				this.elementsHandlers["nested-accordion.default"] = () => __elementorLoadChunk("nested-accordion");
			}
			if (elementorFrontendConfig.experimentalFeatures.container) {
				this.elementsHandlers["contact-buttons.default"] = () => __elementorLoadChunk("contact-buttons");
				this.elementsHandlers["floating-bars-var-1.default"] = () => __elementorLoadChunk("floating-bars");
			}
			const addGlobalHandlers = () => elementorFrontend.hooks.addAction("frontend/element_ready/global", _global.default);
			const addElementsHandlers = () => {
				$.each(this.elementsHandlers, (elementName, Handlers) => {
					const elementData = elementName.split(".");
					elementName = elementData[0];
					const skin = elementData[1] || null;
					this.attachHandler(elementName, Handlers, skin);
				});
			};
			const isClassHandler = (Handler) => {
				var _Handler$prototype;
				return (_Handler$prototype = Handler.prototype) === null || _Handler$prototype === void 0 ? void 0 : _Handler$prototype.getUniqueHandlerID;
			};
			const addHandlerWithHook = (elementBaseName, Handler, skin = "default") => {
				skin = skin ? "." + skin : "";
				const elementName = elementBaseName + skin;
				elementorFrontend.hooks.addAction(`frontend/element_ready/${elementName}`, ($element) => {
					if (isClassHandler(Handler)) this.addHandler(Handler, {
						$element,
						elementName
					}, true);
					else {
						const handlerValue = Handler();
						if (!handlerValue) return;
						if (handlerValue instanceof Promise) handlerValue.then(({ default: dynamicHandler }) => {
							this.addHandler(dynamicHandler, {
								$element,
								elementName
							}, true);
						});
						else this.addHandler(handlerValue, {
							$element,
							elementName
						}, true);
					}
				});
			};
			this.addHandler = function(HandlerClass, options) {
				const elementID = options.$element.data("model-cid");
				let handlerID;
				if (elementID) {
					handlerID = HandlerClass.prototype.getConstructorID();
					if (!handlersInstances[elementID]) handlersInstances[elementID] = {};
					const oldHandler = handlersInstances[elementID][handlerID];
					if (oldHandler) oldHandler.onDestroy();
				}
				const newHandler = new HandlerClass(options);
				elementorFrontend.hooks.doAction(`frontend/element_handler_ready/${options.elementName}`, options.$element, $);
				if (elementID) handlersInstances[elementID][handlerID] = newHandler;
			};
			this.attachHandler = (elementName, Handlers, skin) => {
				if (!Array.isArray(Handlers)) Handlers = [Handlers];
				Handlers.forEach((Handler) => addHandlerWithHook(elementName, Handler, skin));
			};
			this.getHandler = function(handlerName) {
				const elementHandler = this.elementsHandlers[handlerName];
				if (isClassHandler(elementHandler)) return elementHandler;
				return new Promise((res) => {
					elementHandler().then(({ default: dynamicHandler }) => {
						res(dynamicHandler);
					});
				});
			};
			/**
			* @param {string} handlerName
			* @deprecated since 3.1.0, use `elementorFrontend.elementsHandler.getHandler` instead.
			*/
			this.getHandlers = function(handlerName) {
				elementorDevTools.deprecation.deprecated("getHandlers", "3.1.0", "elementorFrontend.elementsHandler.getHandler");
				if (handlerName) return this.getHandler(handlerName);
				return this.elementsHandlers;
			};
			this.runReadyTrigger = function(scope) {
				const isDelayChildHandlers = !!scope.closest("[data-delay-child-handlers=\"true\"]") && 0 !== scope.closest("[data-delay-child-handlers=\"true\"]").length;
				if (elementorFrontend.config.is_static || isDelayChildHandlers) return;
				const $scope = jQuery(scope);
				const elementType = $scope.attr("data-element_type");
				if (!elementType) return;
				elementorFrontend.hooks.doAction("frontend/element_ready/global", $scope, $);
				elementorFrontend.hooks.doAction(`frontend/element_ready/${elementType}`, $scope, $);
				if ("widget" === elementType) {
					const widgetType = $scope.attr("data-widget_type");
					elementorFrontend.hooks.doAction(`frontend/element_ready/${widgetType}`, $scope, $);
				}
			};
			this.init = () => {
				addGlobalHandlers();
				addElementsHandlers();
			};
		};
	}));

//#endregion
//#region assets/dev/js/frontend/frontend.js
	var require_frontend = /* @__PURE__ */ __commonJSMin(((exports) => {
		var _interopRequireDefault = require_interopRequireDefault();
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		require_esnext_iterator_constructor();
		require_esnext_iterator_find();
		require_esnext_iterator_for_each();
		require_public_path();
		require_chunk_loader();
		var _documentsManager = _interopRequireDefault(require_documents_manager());
		var _storage = _interopRequireDefault(require_storage());
		var _environment = _interopRequireDefault(require_environment());
		var _youtubeLoader = _interopRequireDefault(require_youtube_loader());
		var _vimeoLoader = _interopRequireDefault(require_vimeo_loader());
		var _baseLoader = _interopRequireDefault(require_base_loader());
		var _urlActions = _interopRequireDefault(require_url_actions());
		var _swiper = _interopRequireDefault(require_swiper());
		var _lightboxManager = _interopRequireDefault(require_lightbox_manager());
		var _assetsLoader = _interopRequireDefault(require_assets_loader());
		var _breakpoints = _interopRequireDefault(require_breakpoints());
		var _events = _interopRequireDefault(require_events());
		var _frontend = _interopRequireDefault(require_frontend$1());
		var _controls = _interopRequireDefault(require_controls());
		var _anchorScrollMargin = _interopRequireDefault(require_anchor_scroll_margin());
		var _utils = require_utils();
		var EventManager = require_hooks();
		var ElementsHandler = require_elements_handlers_manager();
		var Frontend = class extends elementorModules.ViewModule {
			constructor(...args) {
				super(...args);
				this.config = elementorFrontendConfig;
				this.config.legacyMode = { 
				/**
				* @deprecated since 3.1.0
				*/
get elementWrappers() {
					if (elementorFrontend.isEditMode()) window.top.elementorDevTools.deprecation.deprecated("elementorFrontend.config.legacyMode.elementWrappers", "3.1.0");
					return false;
				} };
				this.populateActiveBreakpointsConfig();
			}
			/**
			* @deprecated since 2.5.0, use `elementorModules.frontend.handlers.Base` instead.
			*/
			get Module() {
				if (this.isEditMode()) parent.elementorDevTools.deprecation.deprecated("elementorFrontend.Module", "2.5.0", "elementorModules.frontend.handlers.Base");
				return elementorModules.frontend.handlers.Base;
			}
			getDefaultSettings() {
				return { selectors: {
					elementor: ".elementor",
					adminBar: "#wpadminbar"
				} };
			}
			getDefaultElements() {
				const defaultElements = {
					window,
					$window: jQuery(window),
					$document: jQuery(document),
					$head: jQuery(document.head),
					$body: jQuery(document.body),
					$deviceMode: jQuery("<span>", {
						id: "elementor-device-mode",
						class: "elementor-screen-only"
					})
				};
				defaultElements.$body.append(defaultElements.$deviceMode);
				return defaultElements;
			}
			bindEvents() {
				this.elements.$window.on("resize", () => this.setDeviceModeData());
			}
			/**
			* @param {string} elementName
			* @deprecated since 2.4.0, use `this.elements` instead.
			*/
			getElements(elementName) {
				return this.getItems(this.elements, elementName);
			}
			/**
			* @param {string} settingName
			* @deprecated since 2.4.0, this method was never in use.
			*/
			getPageSettings(settingName) {
				const settingsObject = this.isEditMode() ? elementor.settings.page.model.attributes : this.config.settings.page;
				return this.getItems(settingsObject, settingName);
			}
			/**
			* @param {string} settingName
			* @deprecated since 3.0.0, use `getKitSettings()` instead and remove the `elementor_` prefix.
			*/
			getGeneralSettings(settingName) {
				if (this.isEditMode()) parent.elementorDevTools.deprecation.deprecated("getGeneralSettings()", "3.0.0", "getKitSettings() and remove the `elementor_` prefix");
				return this.getKitSettings(`elementor_${settingName}`);
			}
			getKitSettings(settingName) {
				return this.getItems(this.config.kit, settingName);
			}
			getCurrentDeviceMode() {
				return getComputedStyle(this.elements.$deviceMode[0], ":after").content.replace(/"/g, "");
			}
			getDeviceSetting(deviceMode, settings, settingKey) {
				if ("widescreen" === deviceMode) return this.getWidescreenSetting(settings, settingKey);
				const devices = elementorFrontend.breakpoints.getActiveBreakpointsList({
					largeToSmall: true,
					withDesktop: true
				});
				let deviceIndex = devices.indexOf(deviceMode);
				while (deviceIndex > 0) {
					const currentDevice = devices[deviceIndex];
					const deviceValue = settings[settingKey + "_" + currentDevice];
					if (deviceValue || 0 === deviceValue) return deviceValue;
					deviceIndex--;
				}
				return settings[settingKey];
			}
			getWidescreenSetting(settings, settingKey) {
				const widescreenSettingKey = settingKey + "_widescreen";
				let settingToReturn;
				if (settings[widescreenSettingKey]) settingToReturn = settings[widescreenSettingKey];
				else settingToReturn = settings[settingKey];
				return settingToReturn;
			}
			getCurrentDeviceSetting(settings, settingKey) {
				return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(), settings, settingKey);
			}
			isEditMode() {
				return this.config.environmentMode.edit;
			}
			isWPPreviewMode() {
				return this.config.environmentMode.wpPreview;
			}
			initDialogsManager() {
				let dialogsManager;
				this.getDialogsManager = () => {
					if (!dialogsManager) dialogsManager = new DialogsManager.Instance();
					return dialogsManager;
				};
			}
			initOnReadyComponents() {
				this.utils = {
					youtube: new _youtubeLoader.default(),
					vimeo: new _vimeoLoader.default(),
					baseVideoLoader: new _baseLoader.default(),
					get lightbox() {
						return _lightboxManager.default.getLightbox();
					},
					urlActions: new _urlActions.default(),
					swiper: _swiper.default,
					environment: _environment.default,
					assetsLoader: new _assetsLoader.default(),
					escapeHTML: _utils.escapeHTML,
					events: _events.default,
					controls: new _controls.default(),
					anchor_scroll_margin: new _anchorScrollMargin.default()
				};
				this.modules = {
					StretchElement: elementorModules.frontend.tools.StretchElement,
					Masonry: elementorModules.utils.Masonry
				};
				this.elementsHandler.init();
				if (this.isEditMode()) elementor.once("document:loaded", () => this.onDocumentLoaded());
				else this.onDocumentLoaded();
			}
			initOnReadyElements() {
				this.elements.$wpAdminBar = this.elements.$document.find(this.getSettings("selectors.adminBar"));
			}
			addUserAgentClasses() {
				for (const [key, value] of Object.entries(_environment.default)) if (value) this.elements.$body.addClass("e--ua-" + key);
			}
			setDeviceModeData() {
				this.elements.$body.attr("data-elementor-device-mode", this.getCurrentDeviceMode());
			}
			addListenerOnce(listenerID, event, callback, to) {
				if (!to) to = this.elements.$window;
				if (!this.isEditMode()) {
					to.on(event, callback);
					return;
				}
				this.removeListeners(listenerID, event, to);
				if (to instanceof jQuery) {
					const eventNS = event + "." + listenerID;
					to.on(eventNS, callback);
				} else to.on(event, callback, listenerID);
			}
			removeListeners(listenerID, event, callback, from) {
				if (!from) from = this.elements.$window;
				if (from instanceof jQuery) {
					const eventNS = event + "." + listenerID;
					from.off(eventNS, callback);
				} else from.off(event, callback, listenerID);
			}
			debounce(func, wait) {
				let timeout;
				return function() {
					const context = this;
					const args = arguments;
					const later = () => {
						timeout = null;
						func.apply(context, args);
					};
					const callNow = !timeout;
					clearTimeout(timeout);
					timeout = setTimeout(later, wait);
					if (callNow) func.apply(context, args);
				};
			}
			muteMigrationTraces() {
				jQuery.migrateMute = true;
				jQuery.migrateTrace = false;
			}
			/**
			* Initialize the modules' widgets handlers.
			*/
			initModules() {
				const handlers = { shapes: _frontend.default };
				elementorFrontend.trigger("elementor/modules/init:before");
				elementorFrontend.trigger("elementor/modules/init/before");
				Object.entries(handlers).forEach(([moduleName, ModuleClass]) => {
					this.modulesHandlers[moduleName] = new ModuleClass();
				});
			}
			populateActiveBreakpointsConfig() {
				this.config.responsive.activeBreakpoints = {};
				Object.entries(this.config.responsive.breakpoints).forEach(([breakpointKey, breakpointData]) => {
					if (breakpointData.is_enabled) this.config.responsive.activeBreakpoints[breakpointKey] = breakpointData;
				});
			}
			init() {
				this.hooks = new EventManager();
				this.breakpoints = new _breakpoints.default(this.config.responsive);
				this.storage = new _storage.default();
				this.elementsHandler = new ElementsHandler(jQuery);
				this.modulesHandlers = {};
				this.addUserAgentClasses();
				this.setDeviceModeData();
				this.initDialogsManager();
				if (this.isEditMode()) this.muteMigrationTraces();
				_events.default.dispatch(this.elements.$window, "elementor/frontend/init");
				this.initModules();
				this.initOnReadyElements();
				this.initOnReadyComponents();
			}
			onDocumentLoaded() {
				this.documentsManager = new _documentsManager.default();
				this.trigger("components:init");
				new _lightboxManager.default();
			}
		};
		exports.default = Frontend;
		window.elementorFrontend = new Frontend();
		if (!elementorFrontend.isEditMode()) jQuery(() => elementorFrontend.init());
	}));

//#endregion
return require_frontend();

})();
//# sourceMappingURL=frontend.js.map