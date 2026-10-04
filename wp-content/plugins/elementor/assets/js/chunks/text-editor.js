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
//#region assets/dev/js/frontend/handlers/text-editor.js
	var require_text_editor = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		require_esnext_iterator_constructor();
		require_esnext_iterator_find();
		var TextEditor = class extends elementorModules.frontend.handlers.Base {
			getDefaultSettings() {
				return {
					selectors: { paragraph: "p:first" },
					classes: {
						dropCap: "elementor-drop-cap",
						dropCapLetter: "elementor-drop-cap-letter"
					}
				};
			}
			getDefaultElements() {
				const selectors = this.getSettings("selectors");
				const classes = this.getSettings("classes");
				const $dropCap = jQuery("<span>", { class: classes.dropCap });
				const $dropCapLetter = jQuery("<span>", { class: classes.dropCapLetter });
				$dropCap.append($dropCapLetter);
				return {
					$paragraph: this.$element.find(selectors.paragraph),
					$dropCap,
					$dropCapLetter
				};
			}
			wrapDropCap() {
				if (!this.getElementSettings("drop_cap")) {
					if (this.dropCapLetter) {
						this.elements.$dropCap.remove();
						this.elements.$paragraph.prepend(this.dropCapLetter);
						this.dropCapLetter = "";
					}
					return;
				}
				const $paragraph = this.elements.$paragraph;
				if (!$paragraph.length) return;
				const paragraphContent = $paragraph.html().replace(/&nbsp;/g, " ");
				const firstLetterMatch = paragraphContent.match(/^ *([^ ] ?)/);
				if (!firstLetterMatch) return;
				const firstLetter = firstLetterMatch[1];
				const trimmedFirstLetter = firstLetter.trim();
				if ("<" === trimmedFirstLetter) return;
				this.dropCapLetter = firstLetter;
				this.elements.$dropCapLetter.text(trimmedFirstLetter);
				const restoredParagraphContent = paragraphContent.slice(firstLetter.length).replace(/^ */, (match) => {
					return new Array(match.length + 1).join("&nbsp;");
				});
				$paragraph.html(restoredParagraphContent).prepend(this.elements.$dropCap);
			}
			onInit(...args) {
				super.onInit(...args);
				this.wrapDropCap();
			}
			onElementChange(propertyName) {
				if ("drop_cap" === propertyName) this.wrapDropCap();
			}
		};
		exports.default = TextEditor;
	}));

//#endregion
//#region \0elementor-chunk-entry
	var import_text_editor = /* @__PURE__ */ __toESM(require_text_editor());
	(window.__elementorChunks = window.__elementorChunks || {})["text-editor"] = import_text_editor;

//#endregion
})();
//# sourceMappingURL=text-editor.js.map