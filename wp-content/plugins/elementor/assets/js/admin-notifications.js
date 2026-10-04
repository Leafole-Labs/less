(function(react, _elementor_ui, _elementor_query, _wordpress_i18n, _elementor_icons) {

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
//#region node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
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
//#region modules/notifications/assets/js/icons/x-icon.js
	var XIcon = (0, react.forwardRef)(function(props, ref) {
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, _extends({ viewBox: "0 0 24 24" }, props, { ref }), /*#__PURE__*/ react.default.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967Z"
		}), /*#__PURE__*/ react.default.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z"
		}));
	});

//#endregion
//#region modules/notifications/assets/js/components/whats-new-top-bar.js
	var WhatsNewTopBar = function WhatsNewTopBar(props) {
		var setIsOpen = props.setIsOpen;
		return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.AppBar, {
			elevation: 0,
			position: "sticky",
			sx: { backgroundColor: "background.default" }
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Toolbar, { variant: "dense" }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "overline",
			sx: { flexGrow: 1 }
		}, (0, _wordpress_i18n.__)("What's New", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui.IconButton, {
			"aria-label": "close",
			size: "small",
			onClick: function onClick() {
				return setIsOpen(false);
			}
		}, /*#__PURE__*/ react.default.createElement(XIcon, null)))), /*#__PURE__*/ react.default.createElement(_elementor_ui.Divider, null));
	};
	WhatsNewTopBar.propTypes = { setIsOpen: import_prop_types.default.func.isRequired };

//#endregion
//#region modules/notifications/assets/js/api/index.js
	var request = function request(endpoint) {
		var data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		return new Promise(function(resolve, reject) {
			elementorCommon.ajax.addRequest(endpoint, {
				success: resolve,
				error: reject,
				data
			});
		});
	};
	var getNotifications = function getNotifications() {
		return request("notifications_get");
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
//#region modules/notifications/assets/js/components/whats-new-item-topic-line.js
	var WhatsNewItemTopicLine = function WhatsNewItemTopicLine(_ref) {
		var topic = _ref.topic;
		var date = _ref.date;
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
			direction: "row",
			divider: /*#__PURE__*/ react.default.createElement(_elementor_ui.Divider, {
				orientation: "vertical",
				flexItem: true
			}),
			spacing: 1,
			color: "text.tertiary",
			sx: { pb: 1 }
		}, topic && /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, topic), date && /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, date));
	};
	WhatsNewItemTopicLine.propTypes = {
		topic: import_prop_types.default.string,
		date: import_prop_types.default.string
	};

//#endregion
//#region modules/notifications/assets/js/components/wrapper-with-link.js
	var WrapperWithLink = function WrapperWithLink(props) {
		var link = props.link;
		var children = props.children;
		if (!link) return children;
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Link, {
			href: link,
			target: "_blank",
			underline: "none",
			color: "inherit",
			sx: { "&:hover": { color: "inherit" } }
		}, children);
	};
	WrapperWithLink.propTypes = {
		link: import_prop_types.default.string,
		children: import_prop_types.default.any.isRequired
	};

//#endregion
//#region modules/notifications/assets/js/components/whats-new-item-thumbnail.js
	var WhatsNewItemThumbnail = function WhatsNewItemThumbnail(_ref) {
		var imageSrc = _ref.imageSrc;
		var title = _ref.title;
		var link = _ref.link;
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: { pb: 2 } }, /*#__PURE__*/ react.default.createElement(WrapperWithLink, { link }, /*#__PURE__*/ react.default.createElement("img", {
			src: imageSrc,
			alt: title || "",
			style: { maxWidth: "100%" }
		})));
	};
	WhatsNewItemThumbnail.propTypes = {
		imageSrc: import_prop_types.default.string.isRequired,
		title: import_prop_types.default.string,
		link: import_prop_types.default.string
	};

//#endregion
//#region modules/notifications/assets/js/components/whats-new-item-media.js
	var WhatsNewItemMedia = function WhatsNewItemMedia(_ref) {
		var item = _ref.item;
		if (item.youtubeEmbedId) {
			var videoId = item.youtubeEmbedId.split("?")[0];
			var src = "https://www.youtube.com/embed/".concat(videoId).concat(item.youtubeAutoplay ? "?autoplay=1&mute=1" : "");
			var allow = "encrypted-media; picture-in-picture".concat(item.youtubeAutoplay ? "; autoplay" : "");
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: { pb: 2 } }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
				component: "iframe",
				src,
				title: item.title || "Video",
				allow,
				allowFullScreen: true,
				sx: {
					aspectRatio: "16/9",
					width: "100%",
					display: "block",
					border: "none"
				}
			}));
		}
		var mediaSrc = item.gifSrc || item.imageSrc;
		if (!mediaSrc) return null;
		return /*#__PURE__*/ react.default.createElement(WhatsNewItemThumbnail, {
			imageSrc: mediaSrc,
			link: item.link,
			title: item.title
		});
	};

//#endregion
//#region modules/notifications/assets/js/components/whats-new-item-chips.js
	var WhatsNewItemChips = function WhatsNewItemChips(_ref) {
		var chipPlan = _ref.chipPlan;
		var chipTags = _ref.chipTags;
		var itemIndex = _ref.itemIndex;
		var chips = [];
		if (chipPlan) chips.push({
			color: "promotion",
			size: "small",
			label: chipPlan
		});
		if (chipTags) chipTags.forEach(function(chipTag) {
			chips.push({
				variant: "outlined",
				size: "small",
				label: chipTag
			});
		});
		if (!chips.length) return null;
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
			direction: "row",
			flexWrap: "wrap",
			gap: 1,
			sx: { pb: 1 }
		}, chips.map(function(chip, chipIndex) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Chip, _extends({ key: "chip-".concat(itemIndex).concat(chipIndex) }, chip));
		}));
	};
	WhatsNewItemChips.propTypes = {
		chipPlan: import_prop_types.default.string,
		chipTags: import_prop_types.default.array,
		itemIndex: import_prop_types.default.number.isRequired
	};

//#endregion
//#region modules/notifications/assets/js/components/is-image-only.js
	var isImageOnly = function isImageOnly(item) {
		return !item.title && !item.description && (item.imageSrc || item.gifSrc || item.youtubeEmbedId);
	};

//#endregion
//#region modules/notifications/assets/js/components/whats-new-item.js
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
	var WhatsNewItem = function WhatsNewItem(_ref) {
		var item = _ref.item;
		var itemIndex = _ref.itemIndex;
		var itemsLength = _ref.itemsLength;
		var setIsOpen = _ref.setIsOpen;
		var _ref$featured = _ref.featured;
		var featured = _ref$featured === void 0 ? false : _ref$featured;
		var hasMedia = item.imageSrc || item.gifSrc || item.youtubeEmbedId;
		if (isImageOnly(item)) return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
			key: itemIndex,
			display: "flex",
			flexDirection: "column",
			sx: _objectSpread({ pt: 2 }, featured && { px: 1 })
		}, /*#__PURE__*/ react.default.createElement(WhatsNewItemMedia, { item }), itemIndex !== itemsLength - 1 && /*#__PURE__*/ react.default.createElement(_elementor_ui.Divider, { sx: { my: 1 } }));
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
			key: itemIndex,
			display: "flex",
			flexDirection: "column",
			sx: _objectSpread({ pt: 2 }, featured && { px: 1 })
		}, (item.topic || item.date) && /*#__PURE__*/ react.default.createElement(WhatsNewItemTopicLine, {
			topic: item.topic,
			date: item.date
		}), /*#__PURE__*/ react.default.createElement(WrapperWithLink, { link: item.link }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: featured ? "h6" : "subtitle1",
			sx: { pb: 2 }
		}, item.title)), /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: { position: "relative" } }, /*#__PURE__*/ react.default.createElement(WhatsNewItemMedia, { item }), featured && item.chipPlan && hasMedia && /*#__PURE__*/ react.default.createElement(_elementor_ui.Chip, {
			label: item.chipPlan,
			color: "promotion",
			size: "small",
			sx: {
				position: "absolute",
				top: 8,
				insetInlineStart: 8
			}
		})), /*#__PURE__*/ react.default.createElement(WhatsNewItemChips, {
			chipPlan: featured && hasMedia ? null : item.chipPlan,
			chipTags: item.chipTags,
			itemIndex
		}), item.description && /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.secondary",
			sx: { pb: 2 }
		}, item.description, item.readMoreText && /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, " ", /*#__PURE__*/ react.default.createElement(_elementor_ui.Link, {
			href: item.link,
			color: "info.main",
			target: "_blank"
		}, item.readMoreText))), item.cta && item.ctaLink && /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: { pb: 2 } }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
			href: item.ctaLink,
			target: item.ctaLink.startsWith("#") ? "_self" : "_blank",
			variant: "contained",
			size: "small",
			color: "promotion",
			onClick: item.ctaLink.startsWith("#") ? function() {
				return setIsOpen(false);
			} : void 0
		}, item.cta)), itemIndex !== itemsLength - 1 && /*#__PURE__*/ react.default.createElement(_elementor_ui.Divider, { sx: { my: 1 } }));
	};
	WhatsNewItem.propTypes = {
		item: import_prop_types.default.object.isRequired,
		itemIndex: import_prop_types.default.number.isRequired,
		itemsLength: import_prop_types.default.number.isRequired,
		setIsOpen: import_prop_types.default.func.isRequired,
		featured: import_prop_types.default.bool
	};

//#endregion
//#region modules/notifications/assets/js/components/whats-new-item-collapsed.js
	var WhatsNewItemCollapsed = function WhatsNewItemCollapsed(_ref) {
		var item = _ref.item;
		var itemIndex = _ref.itemIndex;
		var isNew = _ref.isNew;
		var onSeen = _ref.onSeen;
		var setIsOpen = _ref.setIsOpen;
		var _useState2 = _slicedToArray((0, react.useState)(false), 2);
		var expanded = _useState2[0];
		var setExpanded = _useState2[1];
		var handleToggle = function handleToggle() {
			if (!expanded && isNew && onSeen) onSeen(item.id);
			setExpanded(!expanded);
		};
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
			role: "button",
			tabIndex: 0,
			"aria-expanded": expanded,
			onClick: handleToggle,
			onKeyDown: function handleKeyDown(event) {
				if ("Enter" === event.key || " " === event.key) {
					event.preventDefault();
					handleToggle();
				}
			},
			sx: {
				position: "relative",
				display: "flex",
				alignItems: "flex-start",
				gap: 1,
				cursor: "pointer",
				py: 2,
				paddingInlineStart: 1
			}
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
			component: "span",
			sx: {
				position: "absolute",
				insetInlineStart: "-6px",
				top: "23px",
				width: 6,
				height: 6,
				borderRadius: "50%",
				backgroundColor: "primary.main",
				opacity: isNew ? 1 : 0,
				transition: "opacity 0.2s ease",
				pointerEvents: "none"
			}
		}), /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
			flex: 1,
			minWidth: 0
		} }, item.topic && /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "caption",
			color: "text.tertiary",
			display: "block"
		}, item.topic), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "subtitle2",
			noWrap: true
		}, item.title), item.description && /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
			maxHeight: expanded ? 0 : "3em",
			opacity: expanded ? 0 : 1,
			overflow: "hidden",
			transition: "max-height 0.2s ease, opacity 0.15s ease"
		} }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "caption",
			color: "text.secondary",
			sx: {
				display: "-webkit-box",
				WebkitLineClamp: 2,
				WebkitBoxOrient: "vertical",
				overflow: "hidden"
			}
		}, item.description))), /*#__PURE__*/ react.default.createElement(_elementor_icons.ChevronDownIcon, { sx: {
			flexShrink: 0,
			color: "secondary.main",
			fontSize: "small",
			mt: .25,
			transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
			transition: "transform 0.2s"
		} })), /*#__PURE__*/ react.default.createElement(_elementor_ui.Collapse, { in: expanded }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
			pb: 2,
			paddingInlineStart: 1
		} }, /*#__PURE__*/ react.default.createElement(WhatsNewItemMedia, { item }), /*#__PURE__*/ react.default.createElement(WhatsNewItemChips, {
			chipPlan: item.chipPlan,
			chipTags: item.chipTags,
			itemIndex
		}), item.description && /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.secondary",
			sx: { pb: 2 }
		}, item.description, item.readMoreText && /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, " ", /*#__PURE__*/ react.default.createElement(_elementor_ui.Link, {
			href: item.link,
			color: "info.main",
			target: "_blank"
		}, item.readMoreText))), item.cta && item.ctaLink && /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: { pb: 2 } }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Button, {
			href: item.ctaLink,
			target: item.ctaLink.startsWith("#") ? "_self" : "_blank",
			variant: "contained",
			size: "small",
			color: "promotion",
			onClick: item.ctaLink.startsWith("#") ? function() {
				return setIsOpen === null || setIsOpen === void 0 ? void 0 : setIsOpen(false);
			} : void 0
		}, item.cta)))), /*#__PURE__*/ react.default.createElement(_elementor_ui.Divider, null));
	};
	WhatsNewItemCollapsed.propTypes = {
		item: import_prop_types.default.object.isRequired,
		itemIndex: import_prop_types.default.number.isRequired,
		isNew: import_prop_types.default.bool,
		onSeen: import_prop_types.default.func,
		setIsOpen: import_prop_types.default.func
	};

//#endregion
//#region modules/notifications/assets/js/components/whats-new-drawer-content.js
	var WhatsNewDrawerContent = function WhatsNewDrawerContent(_ref) {
		var _items$find$listLabel;
		var _items$find;
		var setIsOpen = _ref.setIsOpen;
		var seenItemIds = _ref.seenItemIds;
		var onSeen = _ref.onSeen;
		var initialHasUnread = _ref.initialHasUnread;
		var _useQuery = (0, _elementor_query.useQuery)({
			queryKey: ["e-notifications"],
			queryFn: getNotifications
		});
		var isPending = _useQuery.isPending;
		var error = _useQuery.error;
		var items = _useQuery.data;
		var seenItemIdsRef = (0, react.useRef)(seenItemIds);
		seenItemIdsRef.current = seenItemIds;
		(0, react.useEffect)(function() {
			if (!items) return;
			(items.some(function(item) {
				return item.featured;
			}) ? items.filter(function(item) {
				return item.featured;
			}) : items).filter(function(item) {
				return !seenItemIdsRef.current.has(item.id);
			}).forEach(function(item) {
				return onSeen(item.id);
			});
		}, [items, onSeen]);
		if (isPending) return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.LinearProgress, { color: "secondary" }));
		if (error) return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, "An error has occurred: ", error);
		var featuredItems = items.filter(function(item) {
			return item.featured;
		});
		var nonFeaturedItems = items.filter(function(item) {
			return !item.featured && !isImageOnly(item);
		});
		var listLabel = (_items$find$listLabel = (_items$find = items.find(function(item) {
			return item.listLabel;
		})) === null || _items$find === void 0 ? void 0 : _items$find.listLabel) !== null && _items$find$listLabel !== void 0 ? _items$find$listLabel : null;
		return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, featuredItems.map(function(item, index) {
			return /*#__PURE__*/ react.default.createElement(WhatsNewItem, {
				key: item.id,
				item,
				itemIndex: index,
				itemsLength: featuredItems.length,
				setIsOpen,
				featured: true
			});
		}), featuredItems.length > 0 && nonFeaturedItems.length > 0 && /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, listLabel ? /*#__PURE__*/ react.default.createElement(_elementor_ui.Divider, { sx: { my: 1.5 } }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "caption",
			color: "text.secondary",
			sx: {
				px: 1,
				textTransform: "uppercase",
				letterSpacing: "0.08em"
			}
		}, listLabel)) : /*#__PURE__*/ react.default.createElement(_elementor_ui.Divider, { sx: { my: 1.5 } }), nonFeaturedItems.map(function(item, index) {
			return /*#__PURE__*/ react.default.createElement(WhatsNewItemCollapsed, {
				key: item.id,
				item,
				itemIndex: index,
				isNew: initialHasUnread && !seenItemIds.has(item.id),
				onSeen,
				setIsOpen
			});
		})), 0 === featuredItems.length && nonFeaturedItems.map(function(item, itemIndex) {
			return /*#__PURE__*/ react.default.createElement(WhatsNewItem, {
				key: item.id,
				item,
				itemIndex,
				itemsLength: nonFeaturedItems.length,
				setIsOpen
			});
		}));
	};
	WhatsNewDrawerContent.propTypes = {
		setIsOpen: import_prop_types.default.func.isRequired,
		seenItemIds: import_prop_types.default.instanceOf(Set).isRequired,
		onSeen: import_prop_types.default.func.isRequired,
		initialHasUnread: import_prop_types.default.bool.isRequired
	};

//#endregion
//#region modules/notifications/assets/js/components/whats-new.js
	var _window$elementorNoti;
	var _window$elementorNoti2;
	var queryClient = new _elementor_query.QueryClient({ defaultOptions: { queries: {
		refetchOnWindowFocus: false,
		retry: false,
		staleTime: 1e3 * 60 * 30
	} } });
	var initialHasUnread = ((_window$elementorNoti = (_window$elementorNoti2 = window.elementorNotifications) === null || _window$elementorNoti2 === void 0 ? void 0 : _window$elementorNoti2.unread_count) !== null && _window$elementorNoti !== void 0 ? _window$elementorNoti : 0) > 0;
	var WhatsNew = function WhatsNew(props) {
		var _window$elementor;
		var _window$elementor$get;
		var isOpen = props.isOpen;
		var setIsOpen = props.setIsOpen;
		var _props$setIsRead = props.setIsRead;
		var setIsRead = _props$setIsRead === void 0 ? function() {} : _props$setIsRead;
		var _props$anchorPosition = props.anchorPosition;
		var anchorPosition = _props$anchorPosition === void 0 ? "right" : _props$anchorPosition;
		var _useState2 = _slicedToArray((0, react.useState)(function() {
			return /* @__PURE__ */ new Set();
		}), 2);
		var seenItemIds = _useState2[0];
		var setSeenItemIds = _useState2[1];
		(0, react.useEffect)(function() {
			if (!isOpen) return;
			setIsRead(true);
		}, [isOpen, setIsRead]);
		var handleSeen = (0, react.useCallback)(function(itemId) {
			setSeenItemIds(function(prev) {
				if (prev.has(itemId)) return prev;
				window.dispatchEvent(new CustomEvent("e-notification-item-seen"));
				return new Set([].concat(_toConsumableArray(prev), [itemId]));
			});
		}, []);
		return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, /*#__PURE__*/ react.default.createElement(_elementor_query.QueryClientProvider, { client: queryClient }, /*#__PURE__*/ react.default.createElement(_elementor_ui.DirectionProvider, { rtl: elementorCommon.config.isRTL }, /*#__PURE__*/ react.default.createElement(_elementor_ui.ThemeProvider, { colorScheme: ((_window$elementor = window.elementor) === null || _window$elementor === void 0 || (_window$elementor$get = _window$elementor.getPreferences) === null || _window$elementor$get === void 0 ? void 0 : _window$elementor$get.call(_window$elementor, "ui_theme")) || "auto" }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Drawer, {
			anchor: anchorPosition,
			open: isOpen,
			onClose: function onClose() {
				return setIsOpen(false);
			},
			BackdropProps: { invisible: true },
			ModalProps: { style: { zIndex: 999999 } }
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
			sx: {
				width: 360,
				backgroundColor: "background.default"
			},
			role: "presentation"
		}, /*#__PURE__*/ react.default.createElement(WhatsNewTopBar, { setIsOpen }), /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: { padding: "16px" } }, /*#__PURE__*/ react.default.createElement(WhatsNewDrawerContent, {
			setIsOpen,
			seenItemIds,
			onSeen: handleSeen,
			initialHasUnread
		}))))))));
	};
	WhatsNew.propTypes = {
		isOpen: import_prop_types.default.bool.isRequired,
		setIsOpen: import_prop_types.default.func.isRequired,
		setIsRead: import_prop_types.default.func,
		anchorPosition: import_prop_types.default.oneOf([
			"left",
			"top",
			"right",
			"bottom"
		])
	};

//#endregion
//#region modules/notifications/assets/js/components/bar-button-notification.js
	var BarButtonNotification = function BarButtonNotification(_ref) {
		var _window$elementorNoti;
		var children = _ref.children;
		var _useState2 = _slicedToArray((0, react.useState)(false), 2);
		var isOpen = _useState2[0];
		var setIsOpen = _useState2[1];
		var _useState4 = _slicedToArray((0, react.useState)(parseInt((_window$elementorNoti = window.elementorNotifications) === null || _window$elementorNoti === void 0 ? void 0 : _window$elementorNoti.unread_count, 10) || 0), 2);
		var unreadCount = _useState4[0];
		var setUnreadCount = _useState4[1];
		(0, react.useEffect)(function() {
			var handler = function handler() {
				return setUnreadCount(function(prev) {
					return Math.max(0, prev - 1);
				});
			};
			window.addEventListener("e-notification-item-seen", handler);
			return function() {
				return window.removeEventListener("e-notification-item-seen", handler);
			};
		}, []);
		return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, /*#__PURE__*/ react.default.createElement("button", {
			className: "e-admin-top-bar__bar-button",
			style: {
				backgroundColor: "transparent",
				border: "none"
			},
			onClick: function handleOpen(event) {
				event.preventDefault();
				setIsOpen(true);
			}
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Badge, {
			color: "primary",
			badgeContent: unreadCount,
			invisible: 0 === unreadCount,
			sx: { mx: .5 }
		}, /*#__PURE__*/ react.default.createElement("i", { className: "e-admin-top-bar__bar-button-icon eicon-speakerphone" })), /*#__PURE__*/ react.default.createElement("span", { className: "e-admin-top-bar__bar-button-title" }, children)), /*#__PURE__*/ react.default.createElement(WhatsNew, {
			isOpen,
			setIsOpen
		}));
	};
	BarButtonNotification.propTypes = { children: import_prop_types.default.node.isRequired };

//#endregion
//#region modules/notifications/assets/js/admin.js
	window.elementorNotificationCenter = { BarButtonNotification };

//#endregion
})(React, elementorV2.ui, elementorV2.query, wp.i18n, elementorV2.icons);
//# sourceMappingURL=admin-notifications.js.map