(function(react, react_dom, _elementor_ui, _elementor_ui_Typography, _elementor_ui_Button, _wordpress_i18n, _elementor_ui_Link, _elementor_ui_List, _elementor_ui_ListItem, _elementor_ui_ListItemText, _elementor_ui_ListItemButton, _elementor_ui_Box, _elementor_ui_DialogHeader, _elementor_ui_DialogHeaderGroup, _elementor_ui_DialogTitle, _elementor_ui_DialogContent, _elementor_ui_DialogContentText, _elementor_ui_TextField, _elementor_ui_DialogActions, _elementor_ui_Dialog) {

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
react_dom = __toESM(react_dom);
_elementor_ui_Typography = __toESM(_elementor_ui_Typography);
_elementor_ui_Button = __toESM(_elementor_ui_Button);
_elementor_ui_Link = __toESM(_elementor_ui_Link);
_elementor_ui_List = __toESM(_elementor_ui_List);
_elementor_ui_ListItem = __toESM(_elementor_ui_ListItem);
_elementor_ui_ListItemText = __toESM(_elementor_ui_ListItemText);
_elementor_ui_ListItemButton = __toESM(_elementor_ui_ListItemButton);
_elementor_ui_Box = __toESM(_elementor_ui_Box);
_elementor_ui_DialogHeader = __toESM(_elementor_ui_DialogHeader);
_elementor_ui_DialogHeaderGroup = __toESM(_elementor_ui_DialogHeaderGroup);
_elementor_ui_DialogTitle = __toESM(_elementor_ui_DialogTitle);
_elementor_ui_DialogContent = __toESM(_elementor_ui_DialogContent);
_elementor_ui_DialogContentText = __toESM(_elementor_ui_DialogContentText);
_elementor_ui_TextField = __toESM(_elementor_ui_TextField);
_elementor_ui_DialogActions = __toESM(_elementor_ui_DialogActions);
_elementor_ui_Dialog = __toESM(_elementor_ui_Dialog);

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
//#region assets/dev/js/utils/react.js
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
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
//#region modules/home/assets/js/components/header-section.js
	var HeaderSection = function HeaderSection(props) {
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Paper, {
			elevation: 0,
			sx: {
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				pt: 2.5
			}
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui_Typography.default, { variant: "h5" }, (0, _wordpress_i18n.__)("Quick Start", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui_Button.default, {
			variant: "contained",
			size: "medium",
			color: "primary",
			href: props.editWebsiteUrl,
			target: "_blank",
			rel: "noopener noreferrer"
		}, (0, _wordpress_i18n.__)("Edit site", "elementor")));
	};
	HeaderSection.propTypes = { editWebsiteUrl: import_prop_types.default.string.isRequired };

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
	function _objectDestructuringEmpty(t) {
		if (null == t) throw new TypeError("Cannot destructure " + t);
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
//#region modules/home/assets/js/icons/youtube-icon.js
	var YoutubeIcon = function YoutubeIcon(props) {
		return /*#__PURE__*/ react.createElement(_elementor_ui.SvgIcon, _extends({ viewBox: "0 0 24 24" }, props), /*#__PURE__*/ react.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 5.75C5.20507 5.75 3.75 7.20507 3.75 9V15C3.75 16.7949 5.20507 18.25 7 18.25H17C18.7949 18.25 20.25 16.7949 20.25 15V9C20.25 7.20507 18.7949 5.75 17 5.75H7ZM2.25 9C2.25 6.37665 4.37665 4.25 7 4.25H17C19.6234 4.25 21.75 6.37665 21.75 9V15C21.75 17.6234 19.6234 19.75 17 19.75H7C4.37665 19.75 2.25 17.6234 2.25 15V9ZM9.63048 8.34735C9.86561 8.21422 10.1542 8.21786 10.3859 8.35688L15.3859 11.3569C15.6118 11.4924 15.75 11.7366 15.75 12C15.75 12.2634 15.6118 12.5076 15.3859 12.6431L10.3859 15.6431C10.1542 15.7821 9.86561 15.7858 9.63048 15.6526C9.39534 15.5195 9.25 15.2702 9.25 15V9C9.25 8.7298 9.39534 8.48048 9.63048 8.34735ZM10.75 10.3246V13.6754L13.5423 12L10.75 10.3246Z"
		}));
	};

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/classCallCheck.js
	function _classCallCheck(a, n) {
		if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
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
//#region app/assets/js/event-track/dashboard/base-tracking.js
	var BaseTracking = /*#__PURE__*/ function() {
		function BaseTracking() {
			_classCallCheck(this, BaseTracking);
		}
		return _createClass(BaseTracking, null, [
			{
				key: "ensureOwnArrays",
				value: function ensureOwnArrays() {
					if (!Object.prototype.hasOwnProperty.call(this, "observers")) this.observers = [];
					if (!Object.prototype.hasOwnProperty.call(this, "eventListeners")) this.eventListeners = [];
				}
			},
			{
				key: "destroy",
				value: function destroy() {
					this.ensureOwnArrays();
					this.observers.forEach(function(observer) {
						return observer.disconnect();
					});
					this.observers = [];
					this.eventListeners.forEach(function(_ref) {
						var target = _ref.target;
						var type = _ref.type;
						var handler = _ref.handler;
						var options = _ref.options;
						target.removeEventListener(type, handler, options);
					});
					this.eventListeners = [];
				}
			},
			{
				key: "addObserver",
				value: function addObserver(target, options, callback) {
					this.ensureOwnArrays();
					var observer = new MutationObserver(callback);
					observer.observe(target, options);
					this.observers.push(observer);
					return observer;
				}
			},
			{
				key: "addEventListenerTracked",
				value: function addEventListenerTracked(target, type, handler) {
					var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
					this.ensureOwnArrays();
					target.addEventListener(type, handler, options);
					this.eventListeners.push({
						target,
						type,
						handler,
						options
					});
				}
			}
		]);
	}();

//#endregion
//#region app/assets/js/event-track/dashboard/navigation.js
	function _callSuper$5(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$5() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$5, "_callSuper");
	function _isNativeReflectConstruct$5() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$5 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$5, "_isNativeReflectConstruct");
	var ELEMENTOR_MENU_SELECTORS = {
		ELEMENTOR_TOP_LEVEL: "li#toplevel_page_elementor",
		TEMPLATES_TOP_LEVEL: "li#menu-posts-elementor_library",
		ELEMENTOR_HOME_TOP_LEVEL: "li#toplevel_page_elementor-home",
		ADMIN_MENU: "#adminmenu",
		TOP_LEVEL_LINK: ".wp-menu-name",
		SUBMENU_CONTAINER: ".wp-submenu",
		SUBMENU_ITEM: ".wp-submenu li a",
		SUBMENU_ITEM_TOP_LEVEL: ".wp-has-submenu",
		SIDEBAR_NAVIGATION: "#editor-one-sidebar-navigation"
	};
	var NavigationTracking = /*#__PURE__*/ function(_BaseTracking) {
		function NavigationTracking() {
			_classCallCheck(this, NavigationTracking);
			return _callSuper$5(this, NavigationTracking, arguments);
		}
		_inherits(NavigationTracking, _BaseTracking);
		return _createClass(NavigationTracking, null, [
			{
				key: "init",
				value: function init() {
					if (WpDashboardTracking.isEditorOneActive()) {
						this.attachSidebarNavigationTracking();
						this.attachElementorHomeMenuTracking();
					} else {
						this.attachElementorMenuTracking();
						this.attachTemplatesMenuTracking();
					}
				}
			},
			{
				key: "attachTemplatesMenuTracking",
				value: function attachTemplatesMenuTracking() {
					var templatesMenu = document.querySelector(ELEMENTOR_MENU_SELECTORS.TEMPLATES_TOP_LEVEL);
					if (!templatesMenu) return;
					this.attachMenuTracking(templatesMenu, "Templates");
				}
			},
			{
				key: "attachElementorHomeMenuTracking",
				value: function attachElementorHomeMenuTracking() {
					var elementorHomeMenu = document.querySelector(ELEMENTOR_MENU_SELECTORS.ELEMENTOR_HOME_TOP_LEVEL);
					if (!elementorHomeMenu) return;
					this.attachMenuTracking(elementorHomeMenu, "Elementor");
				}
			},
			{
				key: "attachElementorMenuTracking",
				value: function attachElementorMenuTracking() {
					var elementorMenu = document.querySelector(ELEMENTOR_MENU_SELECTORS.ELEMENTOR_TOP_LEVEL);
					if (!elementorMenu) return;
					this.attachMenuTracking(elementorMenu, "Elementor");
				}
			},
			{
				key: "attachSidebarNavigationTracking",
				value: function attachSidebarNavigationTracking() {
					var sidebar = document.querySelector(ELEMENTOR_MENU_SELECTORS.SIDEBAR_NAVIGATION);
					if (sidebar) this.attachSidebarClickListener(sidebar);
				}
			},
			{
				key: "attachSidebarClickListener",
				value: function attachSidebarClickListener(sidebar) {
					var _this = this;
					this.addEventListenerTracked(sidebar, "click", function(event) {
						_this.handleSidebarClick(event);
					}, { capture: true });
				}
			},
			{
				key: "attachMenuTracking",
				value: function attachMenuTracking(menuElement, menuName) {
					var _this2 = this;
					this.addEventListenerTracked(menuElement, "click", function(event) {
						_this2.handleMenuClick(event, menuName);
					});
				}
			},
			{
				key: "handleMenuClick",
				value: function handleMenuClick(event, menuName) {
					var link = event.target.closest("a");
					if (!link) return;
					var isTopLevel = link.classList.contains("menu-top");
					var itemId = this.extractItemId(link);
					var area = this.determineNavArea(link);
					WpDashboardTracking.trackNavClicked(itemId, isTopLevel ? null : menuName, area);
				}
			},
			{
				key: "handleSidebarClick",
				value: function handleSidebarClick(event) {
					var clickedElement = event.target.closest("a, button, [role=\"button\"]");
					if (!clickedElement) return;
					var itemId = this.extractSidebarItemId(clickedElement);
					WpDashboardTracking.trackNavClicked(itemId, null, NAV_AREAS.SIDEBAR_MENU);
				}
			},
			{
				key: "extractSidebarItemId",
				value: function extractSidebarItemId(element) {
					var paragraph = element.querySelector("p");
					if (paragraph) return paragraph.textContent.trim();
					var textContent = element.textContent.trim();
					if (textContent) return textContent;
					return "unknown";
				}
			},
			{
				key: "extractPageFromUrl",
				value: function extractPageFromUrl(href) {
					var urlParams = new URLSearchParams(href.split("?")[1] || "");
					var page = urlParams.get("page");
					if (page) return page;
					var postType = urlParams.get("post_type");
					if (postType) return postType;
					return "unknown";
				}
			},
			{
				key: "extractItemId",
				value: function extractItemId(link) {
					var textContent = link.textContent.trim();
					if (textContent) return textContent;
					var href = link.getAttribute("href");
					if (href) return this.extractPageFromUrl(href);
					var linkId = link.getAttribute("id");
					if (linkId) return linkId;
					return "unknown";
				}
			},
			{
				key: "determineNavArea",
				value: function determineNavArea(link) {
					if (link.closest("li.menu-top")) {
						if (link.closest(ELEMENTOR_MENU_SELECTORS.SUBMENU_CONTAINER)) {
							if (link.closest(ELEMENTOR_MENU_SELECTORS.SUBMENU_ITEM_TOP_LEVEL).classList.contains("wp-not-current-submenu")) return NAV_AREAS.HOVER_MENU;
							return NAV_AREAS.SUBMENU;
						}
						return NAV_AREAS.LEFT_MENU;
					}
					return NAV_AREAS.LEFT_MENU;
				}
			}
		]);
	}(BaseTracking);

//#endregion
//#region app/assets/js/event-track/dashboard/plugin-actions.js
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
	var PLUGIN_TYPE = {
		ELEMENTOR: "core",
		ELEMENTOR_PRO: "pro"
	};
	var PluginActions = /*#__PURE__*/ function(_BaseTracking) {
		function PluginActions() {
			_classCallCheck(this, PluginActions);
			return _callSuper$4(this, PluginActions, arguments);
		}
		_inherits(PluginActions, _BaseTracking);
		return _createClass(PluginActions, null, [
			{
				key: "init",
				value: function init() {
					this.attachCoreDeactivationTracking();
					this.attachProDeactivationTracking();
					this.attachProDeletionTracking();
				}
			},
			{
				key: "attachCoreDeactivationTracking",
				value: function attachCoreDeactivationTracking() {
					var _this = this;
					var dialogForm = document.querySelector("#elementor-deactivate-feedback-dialog-form");
					if (!dialogForm) return;
					this.addEventListenerTracked(dialogForm, "change", function(event) {
						var target = event.target;
						if (target.classList.contains("elementor-deactivate-feedback-dialog-input")) _this.selectedReason = target.value;
					});
					this.observeModalButtons();
				}
			},
			{
				key: "attachProDeactivationTracking",
				value: function attachProDeactivationTracking() {
					var _this2 = this;
					var pluginsTable = document.querySelector(".plugins");
					if (!pluginsTable) return;
					this.addEventListenerTracked(pluginsTable, "click", function(event) {
						var link = event.target.closest("a");
						if (link && "deactivate-elementor-pro" === link.id) _this2.trackProDeactivation();
					}, { capture: true });
				}
			},
			{
				key: "observeModalButtons",
				value: function observeModalButtons() {
					var _this3 = this;
					var checkAndAttachDelegation = function checkAndAttachDelegation() {
						var modal = document.querySelector("#elementor-deactivate-feedback-modal");
						if (!modal) return false;
						_this3.addEventListenerTracked(modal, "click", function(event) {
							var submitButton = event.target.closest(".dialog-submit");
							var skipButton = event.target.closest(".dialog-skip");
							if (submitButton) _this3.trackCoreDeactivation("submit&deactivate");
							else if (skipButton) _this3.trackCoreDeactivation("skip&deactivate");
						}, { capture: true });
						return true;
					};
					if (checkAndAttachDelegation()) return;
					this.addObserver(document.body, {
						childList: true,
						subtree: true
					}, function(mutations, observer) {
						if (checkAndAttachDelegation()) observer.disconnect();
					});
				}
			},
			{
				key: "getUserInput",
				value: function getUserInput() {
					if (!this.selectedReason || !["found_a_better_plugin", "other"].includes(this.selectedReason)) return null;
					var inputField = document.querySelector("input[name=\"reason_".concat(this.selectedReason, "\"]"));
					if (inputField && inputField.value) return inputField.value;
					return null;
				}
			},
			{
				key: "trackCoreDeactivation",
				value: function trackCoreDeactivation(action) {
					var properties = {
						deactivate_form_submit: action,
						deactivate_plugin_type: PLUGIN_TYPE.ELEMENTOR
					};
					if (this.selectedReason) properties.deactivate_feedback_reason = this.selectedReason;
					var userInput = this.getUserInput();
					if (userInput) properties.deactivate_feedback_reason += "/".concat(userInput);
					WpDashboardTracking.dispatchEvent("wpdash_deactivate_plugin", properties, { send_immediately: true });
				}
			},
			{
				key: "trackProDeactivation",
				value: function trackProDeactivation() {
					this.trackProAction("deactivate");
				}
			},
			{
				key: "attachProDeletionTracking",
				value: function attachProDeletionTracking() {
					var _this4 = this;
					if ("undefined" === typeof jQuery) return;
					jQuery(document).on("wp-plugin-deleting", function(event, args) {
						if ("elementor-pro" === (args === null || args === void 0 ? void 0 : args.slug)) _this4.trackProAction("delete");
					});
				}
			},
			{
				key: "destroy",
				value: function destroy() {
					if ("undefined" !== typeof jQuery) jQuery(document).off("wp-plugin-deleting");
					BaseTracking.destroy.call(this);
				}
			},
			{
				key: "trackProAction",
				value: function trackProAction(action) {
					var config = {
						deactivate: {
							eventName: "wpdash_deactivate_plugin",
							propertyKey: "deactivate_plugin_type"
						},
						delete: {
							eventName: "wpdash_delete_plugin",
							propertyKey: "plugin_delete"
						}
					}[action];
					if (!config) return;
					var properties = _defineProperty({}, config.propertyKey, PLUGIN_TYPE.ELEMENTOR_PRO);
					WpDashboardTracking.dispatchEvent(config.eventName, properties, { send_immediately: true });
				}
			}
		]);
	}(BaseTracking);
	_defineProperty(PluginActions, "selectedReason", null);

//#endregion
//#region app/assets/js/event-track/dashboard/promotion.js
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
	var PROMO_SELECTORS = {
		PROMO_PAGE: ".e-feature-promotion, .elementor-settings-form-page, #elementor-element-manager-wrap",
		PROMO_BLANK_STATE: ".elementor-blank_state",
		CTA_BUTTON: ".go-pro",
		TITLE: "h3"
	};
	var PromotionTracking = /*#__PURE__*/ function(_BaseTracking) {
		function PromotionTracking() {
			_classCallCheck(this, PromotionTracking);
			return _callSuper$3(this, PromotionTracking, arguments);
		}
		_inherits(PromotionTracking, _BaseTracking);
		return _createClass(PromotionTracking, null, [
			{
				key: "init",
				value: function init() {
					this.attachDelegatedTracking();
				}
			},
			{
				key: "attachDelegatedTracking",
				value: function attachDelegatedTracking() {
					var _this = this;
					this.addEventListenerTracked(document, "click", function(event) {
						var target = event.target;
						if (!target) return;
						var button = target.closest("a".concat(PROMO_SELECTORS.CTA_BUTTON));
						if (!button) return;
						var promoPage = button.closest("".concat(PROMO_SELECTORS.PROMO_PAGE, ", ").concat(PROMO_SELECTORS.PROMO_BLANK_STATE));
						if (!promoPage) return;
						_this.handlePromoClick(button, promoPage);
					}, { capture: true });
				}
			},
			{
				key: "handlePromoClick",
				value: function handlePromoClick(button, promoPage) {
					var promoTitle = this.extractPromoTitle(promoPage, button);
					var destination = button.getAttribute("href");
					var path = this.extractPromoPath();
					WpDashboardTracking.trackPromoClicked(promoTitle, destination, path);
				}
			},
			{
				key: "extractPromoTitle",
				value: function extractPromoTitle(promoPage, button) {
					var titleElement = promoPage.querySelector(PROMO_SELECTORS.TITLE);
					return titleElement ? titleElement.textContent.trim() : button.textContent.trim();
				}
			},
			{
				key: "extractPromoPath",
				value: function extractPromoPath() {
					var page = new URLSearchParams(window.location.search).get("page");
					if (!page) return "elementor";
					return page.replace("elementor_", "").replace(/_/g, "/");
				}
			}
		]);
	}(BaseTracking);

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
//#region app/assets/js/event-track/dashboard/utils.js
	var DashboardUtils = { isElementorPage: function isElementorPage() {
		var urlParams = new URLSearchParams(window.location.search);
		var page = urlParams.get("page");
		if (page && WpDashboardTracking.elementorPages.some(function(p) {
			return page.includes(p);
		})) return true;
		var postType = urlParams.get("post_type");
		if (WpDashboardTracking.elementorPostTypes.includes(postType)) return true;
		return document.body.className.split(" ").some(function(cls) {
			return cls.includes("elementor") && (cls.includes("page") || cls.includes("post-type"));
		});
	} };

//#endregion
//#region app/assets/js/event-track/dashboard/screen-view.js
	function _createForOfIteratorHelper$1(r, e) {
		var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
		if (!t) {
			if (Array.isArray(r) || (t = _unsupportedIterableToArray$2(r)) || e && r && "number" == typeof r.length) {
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
	__name(_createForOfIteratorHelper$1, "_createForOfIteratorHelper");
	function _unsupportedIterableToArray$2(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray$2(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$2(r, a) : void 0;
		}
	}
	__name(_unsupportedIterableToArray$2, "_unsupportedIterableToArray");
	function _arrayLikeToArray$2(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}
	__name(_arrayLikeToArray$2, "_arrayLikeToArray");
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
	function _superPropGet(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	var SCREEN_SELECTORS = {
		NAV_TAB_WRAPPER: ".nav-tab-wrapper",
		NAV_TAB: ".nav-tab",
		NAV_TAB_ACTIVE: ".nav-tab-active",
		SETTINGS_FORM_PAGE: ".elementor-settings-form-page",
		SETTINGS_FORM_PAGE_ACTIVE: ".elementor-settings-form-page.elementor-active",
		FLOATING_ELEMENTS_MODAL: "#elementor-new-floating-elements-modal",
		TEMPLATE_DIALOG_MODAL: "#elementor-new-template-dialog-content"
	};
	var TRACKED_MODALS = [SCREEN_SELECTORS.FLOATING_ELEMENTS_MODAL, SCREEN_SELECTORS.TEMPLATE_DIALOG_MODAL];
	var ScreenViewTracking = /*#__PURE__*/ function(_BaseTracking) {
		function ScreenViewTracking() {
			_classCallCheck(this, ScreenViewTracking);
			return _callSuper$2(this, ScreenViewTracking, arguments);
		}
		_inherits(ScreenViewTracking, _BaseTracking);
		return _createClass(ScreenViewTracking, null, [
			{
				key: "init",
				value: function init() {
					if (!DashboardUtils.isElementorPage()) return;
					var screenData = this.getScreenData();
					if (screenData) this.trackScreen(screenData.screenId, screenData.screenType);
					this.attachTabChangeTracking();
				}
			},
			{
				key: "destroy",
				value: function destroy() {
					_superPropGet(ScreenViewTracking, "destroy", this, 2)([]);
					this.trackedScreens.clear();
				}
			},
			{
				key: "getScreenData",
				value: function getScreenData() {
					var urlParams = new URLSearchParams(window.location.search);
					var page = urlParams.get("page");
					var postType = urlParams.get("post_type");
					var hash = window.location.hash;
					var screenId = "";
					var screenType = "";
					if (page) screenId = page;
					else if (postType) screenId = postType;
					else screenId = this.getScreenIdFromBody();
					if (this.isElementorAppPage()) {
						var appScreenData = this.getAppScreenData(hash);
						if (appScreenData) return appScreenData;
					}
					var hasNavTabs = document.querySelector(SCREEN_SELECTORS.NAV_TAB_WRAPPER);
					var hasSettingsTabs = document.querySelectorAll(SCREEN_SELECTORS.SETTINGS_FORM_PAGE).length > 1;
					if (hasNavTabs || hasSettingsTabs || hash && !this.isElementorAppPage()) {
						screenType = SCREEN_TYPES.TAB;
						if (hash) {
							var tabId = hash.replace(/^#(tab-)?/, "");
							screenId = "".concat(screenId, "-").concat(tabId);
						} else if (hasNavTabs) {
							var activeTab = document.querySelector(SCREEN_SELECTORS.NAV_TAB_ACTIVE);
							if (activeTab) {
								var tabText = activeTab.textContent.trim();
								var tabHref = activeTab.getAttribute("href");
								if (tabText) screenId = "".concat(screenId, "-").concat(this.sanitizeScreenId(tabText));
								else if (tabHref && tabHref.includes("#")) {
									var _tabId = tabHref.split("#")[1];
									screenId = "".concat(screenId, "-").concat(_tabId);
								}
							}
						} else if (hasSettingsTabs) {
							var activeSettingsTab = document.querySelector(SCREEN_SELECTORS.SETTINGS_FORM_PAGE_ACTIVE);
							if (activeSettingsTab) {
								var _tabId2 = activeSettingsTab.id;
								if (_tabId2) screenId = "".concat(screenId, "-").concat(_tabId2);
							}
						}
					}
					return {
						screenId,
						screenType
					};
				}
			},
			{
				key: "isElementorAppPage",
				value: function isElementorAppPage() {
					return "elementor-app" === new URLSearchParams(window.location.search).get("page");
				}
			},
			{
				key: "getAppScreenData",
				value: function getAppScreenData(hash) {
					if (!hash) return null;
					var cleanHash = hash.replace(/^#/, "");
					if (!cleanHash.startsWith("/")) return null;
					var pathParts = cleanHash.split("/").filter(Boolean);
					if (0 === pathParts.length) return null;
					return {
						screenId: pathParts.join("/"),
						screenType: SCREEN_TYPES.APP_SCREEN
					};
				}
			},
			{
				key: "getScreenIdFromBody",
				value: function getScreenIdFromBody() {
					var _iterator = _createForOfIteratorHelper$1(document.body.className.split(" "));
					var _step;
					try {
						for (_iterator.s(); !(_step = _iterator.n()).done;) {
							var cls = _step.value;
							if (cls.startsWith("elementor") && (cls.includes("page") || cls.includes("post-type"))) return cls;
						}
					} catch (err) {
						_iterator.e(err);
					} finally {
						_iterator.f();
					}
					return "elementor-unknown";
				}
			},
			{
				key: "sanitizeScreenId",
				value: function sanitizeScreenId(text) {
					return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
				}
			},
			{
				key: "attachTabChangeTracking",
				value: function attachTabChangeTracking() {
					this.attachNavTabTracking();
					this.attachHashChangeTracking();
					this.attachSettingsTabTracking();
					this.attachModalTracking();
				}
			},
			{
				key: "attachNavTabTracking",
				value: function attachNavTabTracking() {
					var _this = this;
					var wrapper = document.querySelector(SCREEN_SELECTORS.NAV_TAB_WRAPPER);
					if (!wrapper) return;
					this.addEventListenerTracked(wrapper, "click", function(event) {
						var navTab = event.target.closest(SCREEN_SELECTORS.NAV_TAB);
						if (navTab && !navTab.classList.contains("nav-tab-active")) {
							var screenData = _this.getScreenData();
							if (screenData) _this.trackScreen(screenData.screenId, screenData.screenType);
						}
					});
				}
			},
			{
				key: "attachHashChangeTracking",
				value: function attachHashChangeTracking() {
					var _this2 = this;
					this.addEventListenerTracked(window, "hashchange", function() {
						var screenData = _this2.getScreenData();
						if (screenData) _this2.trackScreen(screenData.screenId, screenData.screenType);
					});
				}
			},
			{
				key: "attachSettingsTabTracking",
				value: function attachSettingsTabTracking() {
					var _this3 = this;
					var settingsPages = document.querySelectorAll(SCREEN_SELECTORS.SETTINGS_FORM_PAGE);
					if (0 === settingsPages.length) return;
					settingsPages.forEach(function(page) {
						_this3.addObserver(page, {
							attributes: true,
							attributeFilter: ["class"]
						}, function() {
							var screenData = _this3.getScreenData();
							if (screenData) _this3.trackScreen(screenData.screenId, screenData.screenType);
						});
					});
				}
			},
			{
				key: "attachModalTracking",
				value: function attachModalTracking() {
					var _this4 = this;
					this.addObserver(document.body, {
						childList: true,
						subtree: true
					}, function(mutations) {
						var _iterator2 = _createForOfIteratorHelper$1(mutations);
						var _step2;
						try {
							for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) if ("childList" === _step2.value.type) TRACKED_MODALS.forEach(function(modalSelector) {
								var modal = document.querySelector(modalSelector);
								if (modal && _this4.isModalVisible(modal)) {
									var modalId = modalSelector.replace("#", "");
									_this4.trackScreen(modalId, SCREEN_TYPES.POPUP);
								}
							});
						} catch (err) {
							_iterator2.e(err);
						} finally {
							_iterator2.f();
						}
					});
				}
			},
			{
				key: "isModalVisible",
				value: function isModalVisible(element) {
					if (!element) return false;
					var style = window.getComputedStyle(element);
					return "none" !== style.display && 0 !== parseFloat(style.opacity);
				}
			},
			{
				key: "trackScreen",
				value: function trackScreen(screenId) {
					var screenType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : SCREEN_TYPES.TOP_LEVEL_PAGE;
					var trackingKey = "".concat(screenId, "-").concat(screenType);
					if (this.trackedScreens.has(trackingKey)) return;
					this.trackedScreens.add(trackingKey);
					WpDashboardTracking.trackScreenViewed(screenId, screenType);
				}
			}
		]);
	}(BaseTracking);
	_defineProperty(ScreenViewTracking, "trackedScreens", /* @__PURE__ */ new Set());

//#endregion
//#region app/assets/js/event-track/dashboard/menu-promotion.js
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
	var PROMO_MENU_ITEMS = {
		go_elementor_pro: "Upgrade",
		"elementor-one-upgrade": "Upgrade"
	};
	var MenuPromotionTracking = /*#__PURE__*/ function(_BaseTracking) {
		function MenuPromotionTracking() {
			_classCallCheck(this, MenuPromotionTracking);
			return _callSuper$1(this, MenuPromotionTracking, arguments);
		}
		_inherits(MenuPromotionTracking, _BaseTracking);
		return _createClass(MenuPromotionTracking, null, [
			{
				key: "init",
				value: function init() {
					this.attachDelegatedTracking();
				}
			},
			{
				key: "attachDelegatedTracking",
				value: function attachDelegatedTracking() {
					var _this = this;
					this.addEventListenerTracked(document, "click", function(event) {
						var target = event.target;
						if (!target) return;
						var link = target.closest("a");
						if (!link) return;
						var href = link.getAttribute("href");
						if (!href) return;
						var menuItemKey = _this.extractPromoMenuKey(href);
						if (!menuItemKey) return;
						_this.handleMenuPromoClick(link, menuItemKey);
					}, { capture: true });
				}
			},
			{
				key: "extractPromoMenuKey",
				value: function extractPromoMenuKey(href) {
					for (var _i = 0, _Object$keys = Object.keys(PROMO_MENU_ITEMS); _i < _Object$keys.length; _i++) {
						var menuItemKey = _Object$keys[_i];
						if (href.includes("page=".concat(menuItemKey))) return menuItemKey;
					}
					return null;
				}
			},
			{
				key: "handleMenuPromoClick",
				value: function handleMenuPromoClick(menuItem, menuItemKey) {
					var destination = menuItem.getAttribute("href");
					var promoName = PROMO_MENU_ITEMS[menuItemKey];
					var path = menuItemKey.replace("elementor_", "").replace(/_/g, "/");
					WpDashboardTracking.trackPromoClicked(promoName, destination, path);
				}
			}
		]);
	}(BaseTracking);

//#endregion
//#region app/assets/js/event-track/dashboard/action-controls.js
	function _createForOfIteratorHelper(r, e) {
		var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
		if (!t) {
			if (Array.isArray(r) || (t = _unsupportedIterableToArray$1(r)) || e && r && "number" == typeof r.length) {
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
	function _unsupportedIterableToArray$1(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
		}
	}
	__name(_unsupportedIterableToArray$1, "_unsupportedIterableToArray");
	function _arrayLikeToArray$1(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}
	__name(_arrayLikeToArray$1, "_arrayLikeToArray");
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
	var EXCLUDED_SELECTORS = {
		ADMIN_MENU: "#adminmenu",
		TOP_BAR: ".e-admin-top-bar",
		TOP_BAR_EDITOR_ONE: "#editor-one-top-bar",
		WP_ADMIN_BAR: "#wpadminbar",
		SUBMENU: ".wp-submenu",
		PROMO_PAGE: ".e-feature-promotion",
		PROMO_BLANK_STATE: ".elementor-blank_state",
		APP: ".e-app",
		SIDEBAR_NAVIGATION: "#editor-one-sidebar-navigation",
		FLYOUT_MENU: ".elementor-submenu-flyout"
	};
	var ActionControlTracking = /*#__PURE__*/ function(_BaseTracking) {
		function ActionControlTracking() {
			_classCallCheck(this, ActionControlTracking);
			return _callSuper(this, ActionControlTracking, arguments);
		}
		_inherits(ActionControlTracking, _BaseTracking);
		return _createClass(ActionControlTracking, null, [
			{
				key: "init",
				value: function init() {
					if (!DashboardUtils.isElementorPage()) return;
					this.attachDelegatedHandlers();
					this.addTrackingAttributesToFilterButtons();
					this.initializeLinkDataIds();
				}
			},
			{
				key: "initializeLinkDataIds",
				value: function initializeLinkDataIds() {
					var _this = this;
					var initializeLinks = function initializeLinks() {
						document.querySelectorAll("a[href]").forEach(function(link) {
							if (_this.isExcludedElement(link) || _this.isNavigationLink(link) || link.hasAttribute("data-id")) return;
							var href = link.getAttribute("href");
							if (!href) return;
							var cleanedHref = _this.removeNonceFromUrl(href);
							if (cleanedHref) link.setAttribute("data-id", cleanedHref);
						});
					};
					if ("loading" === document.readyState) document.addEventListener("DOMContentLoaded", initializeLinks);
					else initializeLinks();
				}
			},
			{
				key: "addTrackingAttributesToFilterButtons",
				value: function addTrackingAttributesToFilterButtons() {
					var body = document.body;
					if (!body) return;
					var screenPrefix = "";
					switch (true) {
						case body.classList.contains("post-type-elementor_library"):
							screenPrefix = "elementor_library-library";
							break;
						case body.classList.contains("post-type-e-floating-buttons"):
							screenPrefix = "e-floating-buttons";
							break;
						default: return;
					}
					var addDataIdToListTableButtons = function addDataIdToListTableButtons() {
						[
							{
								id: "post-query-submit",
								suffix: "filter"
							},
							{
								id: "search-submit",
								suffix: "search"
							},
							{
								id: "doaction",
								suffix: "apply"
							},
							{
								id: "doaction2",
								suffix: "apply-bottom"
							}
						].forEach(function(config) {
							var button = document.getElementById(config.id);
							if (!button || button.hasAttribute("data-id")) return;
							button.setAttribute("data-id", "".concat(screenPrefix, "-button-").concat(config.suffix));
						});
					};
					if ("loading" === document.readyState) document.addEventListener("DOMContentLoaded", addDataIdToListTableButtons);
					else addDataIdToListTableButtons();
				}
			},
			{
				key: "isExcludedElement",
				value: function isExcludedElement(element) {
					for (var _i = 0, _Object$values = Object.values(EXCLUDED_SELECTORS); _i < _Object$values.length; _i++) {
						var selector = _Object$values[_i];
						if (element.closest(selector)) return true;
					}
					if (element.classList.contains("go-pro")) return true;
					return false;
				}
			},
			{
				key: "attachDelegatedHandlers",
				value: function attachDelegatedHandlers() {
					var _this2 = this;
					var FILTER_BUTTON_IDS = ["search-submit", "post-query-submit"];
					this.addEventListenerTracked(document, "click", function(event) {
						var _event$target;
						var base = event.target && 1 === event.target.nodeType ? event.target : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.parentElement;
						if (!base) return;
						var toggle = base.closest(".elementor-role-toggle");
						if (toggle && !_this2.isExcludedElement(toggle)) {
							_this2.trackControl(toggle, CONTROL_TYPES.TOGGLE);
							return;
						}
						var button = base.closest("button, input[type=\"submit\"], input[type=\"button\"], .button, .e-btn");
						if (button && !_this2.isExcludedElement(button)) {
							if (FILTER_BUTTON_IDS.includes(button.id)) {
								_this2.trackControl(button, CONTROL_TYPES.FILTER);
								return;
							}
							_this2.trackControl(button, CONTROL_TYPES.BUTTON);
							return;
						}
						var link = base.closest("a");
						if (link && !_this2.isExcludedElement(link) && !_this2.isNavigationLink(link)) _this2.trackControl(link, CONTROL_TYPES.LINK);
					}, { capture: false });
					this.addEventListenerTracked(document, "change", function(event) {
						var _event$target2;
						var base = event.target && 1 === event.target.nodeType ? event.target : (_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.parentElement;
						if (!base) return;
						var toggle = null;
						if (WpDashboardTracking.isEditorOneActive()) toggle = base.closest(".MuiSwitch-switchBase");
						else toggle = base.closest(".components-toggle-control");
						if (toggle && !_this2.isExcludedElement(toggle)) {
							_this2.trackControl(toggle, CONTROL_TYPES.TOGGLE);
							return;
						}
						var checkbox = base.closest("input[type=\"checkbox\"]");
						if (checkbox && !_this2.isExcludedElement(checkbox)) {
							_this2.trackControl(checkbox, CONTROL_TYPES.CHECKBOX);
							return;
						}
						var radio = base.closest("input[type=\"radio\"]");
						if (radio && !_this2.isExcludedElement(radio)) {
							_this2.trackControl(radio, CONTROL_TYPES.RADIO);
							return;
						}
						var select = base.closest("select");
						if (select && !_this2.isExcludedElement(select)) _this2.trackControl(select, CONTROL_TYPES.SELECT);
					});
				}
			},
			{
				key: "isNavigationLink",
				value: function isNavigationLink(link) {
					var href = link.getAttribute("href");
					if (!href) return false;
					if (href.startsWith("#") && href.includes("tab")) return true;
					if (link.classList.contains("nav-tab")) return true;
					return !!link.closest(".wp-submenu, #adminmenu, .e-admin-top-bar, #wpadminbar");
				}
			},
			{
				key: "trackControl",
				value: function trackControl(element, controlType) {
					var controlIdentifier = this.extractControlIdentifier(element, controlType);
					if (!controlIdentifier) return;
					WpDashboardTracking.trackActionControl(controlIdentifier, controlType);
				}
			},
			{
				key: "extractControlIdentifier",
				value: function extractControlIdentifier(element, controlType) {
					if (CONTROL_TYPES.RADIO === controlType) {
						var name = element.getAttribute("name");
						var value = element.value || element.getAttribute("value");
						if (name && value) return "".concat(name, "-").concat(value);
						if (name) return name;
					}
					if (CONTROL_TYPES.SELECT === controlType) {
						var _name = element.getAttribute("name");
						if (_name) return _name;
					}
					if (CONTROL_TYPES.CHECKBOX === controlType) {
						var _name2 = element.getAttribute("name");
						if (_name2) {
							if (document.querySelectorAll("input[type=\"checkbox\"][name=\"".concat(CSS.escape(_name2), "\"]")).length > 1) {
								var _value = element.value || element.getAttribute("value");
								if (_value) return "".concat(_name2, "-").concat(_value);
							}
							return _name2;
						}
					}
					if (CONTROL_TYPES.LINK === controlType) {
						var dataId = element.getAttribute("data-id");
						if (dataId) return dataId;
						var href = element.getAttribute("href");
						if (href) return this.removeNonceFromUrl(href);
					}
					if (CONTROL_TYPES.BUTTON === controlType || CONTROL_TYPES.TOGGLE === controlType || CONTROL_TYPES.FILTER === controlType) {
						var _dataId = element.getAttribute("data-id");
						if (_dataId) return _dataId;
						var classIdMatch = this.extractClassId(element);
						if (classIdMatch) return classIdMatch;
					}
					return "";
				}
			},
			{
				key: "extractClassId",
				value: function extractClassId(element) {
					var classes = element.className;
					if (!classes || "string" !== typeof classes) return "";
					var _iterator = _createForOfIteratorHelper(classes.split(" "));
					var _step;
					try {
						for (_iterator.s(); !(_step = _iterator.n()).done;) {
							var cls = _step.value;
							if (cls.startsWith("e-id-")) return cls.substring(5);
						}
					} catch (err) {
						_iterator.e(err);
					} finally {
						_iterator.f();
					}
					return "";
				}
			},
			{
				key: "removeNonceFromUrl",
				value: function removeNonceFromUrl(url) {
					try {
						var urlObj = new URL(url, window.location.origin);
						urlObj.searchParams.delete("_wpnonce");
						var postParam = urlObj.searchParams.get("post");
						if (postParam !== null && /^[0-9]+$/.test(postParam)) urlObj.searchParams.delete("post");
						return urlObj.pathname + urlObj.search + urlObj.hash;
					} catch (e) {
						return url;
					}
				}
			}
		]);
	}(BaseTracking);

//#endregion
//#region app/assets/js/event-track/wp-dashboard-tracking.js
	var _WpDashboardTracking;
	var SESSION_TIMEOUT_MINUTES = 30;
	var MINUTE_MS = 60 * 1e3;
	var SESSION_TIMEOUT = SESSION_TIMEOUT_MINUTES * MINUTE_MS;
	var ACTIVITY_CHECK_INTERVAL = 1 * MINUTE_MS;
	var SESSION_STORAGE_KEY = "elementor_wpdash_session";
	var PENDING_NAV_CLICK_KEY = "elementor_wpdash_pending_nav";
	var CONTROL_TYPES = {
		BUTTON: "button",
		CHECKBOX: "checkbox",
		RADIO: "radio",
		LINK: "link",
		SELECT: "select",
		TOGGLE: "toggle",
		FILTER: "filter"
	};
	var NAV_AREAS = {
		LEFT_MENU: "left_menu",
		SUBMENU: "submenu",
		HOVER_MENU: "hover_menu",
		TOP_BAR: "top_bar",
		SIDEBAR_MENU: "sidebar"
	};
	var SCREEN_TYPES = {
		TAB: "tab",
		POPUP: "popup",
		APP_SCREEN: "app_screen"
	};
	var WpDashboardTracking = /*#__PURE__*/ function() {
		function WpDashboardTracking() {
			_classCallCheck(this, WpDashboardTracking);
		}
		return _createClass(WpDashboardTracking, null, [
			{
				key: "getElementorCommon",
				value: function getElementorCommon() {
					return window.elementorCommon;
				}
			},
			{
				key: "init",
				value: function init() {
					if (this.initialized) return;
					this.restoreOrCreateSession();
					if (this.isEventsManagerAvailable()) {
						this.startSessionMonitoring();
						this.attachActivityListeners();
						this.attachNavigationListener();
						this.initialized = true;
					}
				}
			},
			{
				key: "restoreOrCreateSession",
				value: function restoreOrCreateSession() {
					var storedSession = this.getStoredSession();
					if (storedSession) {
						this.sessionStartTime = storedSession.sessionStartTime;
						this.navItemsVisited = new Set(storedSession.navItemsVisited);
						this.lastActivityTime = Date.now();
						this.sessionEnded = false;
					} else {
						this.sessionStartTime = Date.now();
						this.lastActivityTime = Date.now();
						this.sessionEnded = false;
						this.navItemsVisited = /* @__PURE__ */ new Set();
					}
					this.processPendingNavClick();
					this.saveSessionToStorage();
				}
			},
			{
				key: "isEditorOneActive",
				value: function isEditorOneActive() {
					var _elementorCommon$conf;
					var _elementorCommon$conf2;
					var elementorCommon = this.getElementorCommon();
					return (_elementorCommon$conf = elementorCommon === null || elementorCommon === void 0 || (_elementorCommon$conf2 = elementorCommon.config) === null || _elementorCommon$conf2 === void 0 || (_elementorCommon$conf2 = _elementorCommon$conf2.editor_events) === null || _elementorCommon$conf2 === void 0 ? void 0 : _elementorCommon$conf2.isEditorOneActive) !== null && _elementorCommon$conf !== void 0 ? _elementorCommon$conf : false;
				}
			},
			{
				key: "processPendingNavClick",
				value: function processPendingNavClick() {
					try {
						var pendingNav = sessionStorage.getItem(PENDING_NAV_CLICK_KEY);
						if (pendingNav) {
							var _JSON$parse = JSON.parse(pendingNav);
							var itemId = _JSON$parse.itemId;
							var rootItem = _JSON$parse.rootItem;
							var area = _JSON$parse.area;
							this.navItemsVisited.add(itemId);
							var properties = {
								wpdash_nav_item_id: itemId,
								wpdash_nav_area: area
							};
							if (rootItem) properties.wpdash_nav_item_root = rootItem;
							this.dispatchEvent("wpdash_nav_clicked", properties, { send_immediately: true });
							sessionStorage.removeItem(PENDING_NAV_CLICK_KEY);
						}
					} catch (error) {
						sessionStorage.removeItem(PENDING_NAV_CLICK_KEY);
					}
				}
			},
			{
				key: "getStoredSession",
				value: function getStoredSession() {
					try {
						var stored = sessionStorage.getItem(SESSION_STORAGE_KEY);
						return stored ? JSON.parse(stored) : null;
					} catch (error) {
						return null;
					}
				}
			},
			{
				key: "saveSessionToStorage",
				value: function saveSessionToStorage() {
					var sessionData = {
						sessionStartTime: this.sessionStartTime,
						navItemsVisited: Array.from(this.navItemsVisited)
					};
					sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionData));
				}
			},
			{
				key: "clearStoredSession",
				value: function clearStoredSession() {
					sessionStorage.removeItem(SESSION_STORAGE_KEY);
				}
			},
			{
				key: "isEventsManagerAvailable",
				value: function isEventsManagerAvailable() {
					var elementorCommon = this.getElementorCommon();
					return (elementorCommon === null || elementorCommon === void 0 ? void 0 : elementorCommon.eventsManager) && "function" === typeof elementorCommon.eventsManager.dispatchEvent;
				}
			},
			{
				key: "canSendEvents",
				value: function canSendEvents() {
					var _elementorCommon$conf3;
					var _elementorCommon$conf4;
					var elementorCommon = this.getElementorCommon();
					return (_elementorCommon$conf3 = elementorCommon === null || elementorCommon === void 0 || (_elementorCommon$conf4 = elementorCommon.config) === null || _elementorCommon$conf4 === void 0 || (_elementorCommon$conf4 = _elementorCommon$conf4.editor_events) === null || _elementorCommon$conf4 === void 0 ? void 0 : _elementorCommon$conf4.can_send_events) !== null && _elementorCommon$conf3 !== void 0 ? _elementorCommon$conf3 : false;
				}
			},
			{
				key: "dispatchEvent",
				value: function dispatchEvent(eventName) {
					var _elementorCommon$even;
					var properties = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
					var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
					if (!this.isEventsManagerAvailable() || !this.canSendEvents()) return;
					var elementorCommon = this.getElementorCommon();
					elementorCommon === null || elementorCommon === void 0 || (_elementorCommon$even = elementorCommon.eventsManager) === null || _elementorCommon$even === void 0 || _elementorCommon$even.dispatchEvent(eventName, properties, options);
				}
			},
			{
				key: "updateActivity",
				value: function updateActivity() {
					this.lastActivityTime = Date.now();
				}
			},
			{
				key: "startSessionMonitoring",
				value: function startSessionMonitoring() {
					var _this = this;
					this.activityCheckInterval = setInterval(function() {
						_this.checkSessionTimeout();
					}, ACTIVITY_CHECK_INTERVAL);
					window.addEventListener("beforeunload", function() {
						if (!_this.sessionEnded && !_this.isNavigatingToElementor) _this.trackSessionEnd("tab_closed");
					});
					document.addEventListener("visibilitychange", function() {
						if (!_this.sessionEnded && document.hidden) {
							if (Date.now() - _this.lastActivityTime > SESSION_TIMEOUT) _this.trackSessionEnd("tab_inactive");
						}
					});
				}
			},
			{
				key: "isElementorPage",
				value: function isElementorPage(url) {
					try {
						var params = new URL(url, window.location.origin).searchParams;
						var page = params.get("page");
						var postType = params.get("post_type");
						var action = params.get("action");
						return !!(page && this.elementorPages.some(function(p) {
							return page.includes(p);
						}) || postType && this.elementorPostTypes.includes(postType) || action && action.includes(this.anyPageWithElementorString));
					} catch (error) {
						return false;
					}
				}
			},
			{
				key: "isPluginsPage",
				value: function isPluginsPage(url) {
					try {
						return new URL(url, window.location.origin).pathname.includes("plugins.php");
					} catch (error) {
						return false;
					}
				}
			},
			{
				key: "isNavigatingAwayFromElementor",
				value: function isNavigatingAwayFromElementor(targetUrl) {
					if (!targetUrl) return false;
					if (targetUrl.startsWith("#")) return false;
					return !this.isElementorPage(targetUrl);
				}
			},
			{
				key: "isLinkOpeningInNewTab",
				value: function isLinkOpeningInNewTab(link) {
					var target = link.getAttribute("target");
					return "_blank" === target || "_new" === target;
				}
			},
			{
				key: "attachNavigationListener",
				value: function attachNavigationListener() {
					var _this2 = this;
					var handleLinkClick = function handleLinkClick(event) {
						var link = event.target.closest("a");
						if (link && link.href) {
							if (_this2.isLinkOpeningInNewTab(link)) return;
							if (!_this2.sessionEnded && _this2.isNavigatingAwayFromElementor(link.href)) _this2.trackSessionEnd("navigate_away");
							else if (_this2.isElementorPage(link.href)) _this2.isNavigatingToElementor = true;
						}
						if (event.target.closest("#editor-one-sidebar-navigation")) _this2.isNavigatingToElementor = true;
					};
					var handleFormSubmit = function handleFormSubmit(event) {
						var form = event.target;
						if (form.action) {
							if (!_this2.sessionEnded && _this2.isNavigatingAwayFromElementor(form.action)) _this2.trackSessionEnd("navigate_away");
							else if (_this2.isElementorPage(form.action)) _this2.isNavigatingToElementor = true;
						}
					};
					document.addEventListener("click", handleLinkClick, true);
					document.addEventListener("submit", handleFormSubmit, true);
					this.navigationListeners.push({
						type: "click",
						handler: handleLinkClick
					}, {
						type: "submit",
						handler: handleFormSubmit
					});
				}
			},
			{
				key: "checkSessionTimeout",
				value: function checkSessionTimeout() {
					if (Date.now() - this.lastActivityTime > SESSION_TIMEOUT && !this.sessionEnded) this.trackSessionEnd("timeout");
				}
			},
			{
				key: "attachActivityListeners",
				value: function attachActivityListeners() {
					var _this3 = this;
					[
						"mousedown",
						"keydown",
						"scroll",
						"touchstart",
						"click"
					].forEach(function(event) {
						document.addEventListener(event, function() {
							_this3.updateActivity();
						}, {
							capture: true,
							passive: true
						});
					});
				}
			},
			{
				key: "formatDuration",
				value: function formatDuration(milliseconds) {
					var totalSeconds = Math.floor(milliseconds / 1e3);
					return Number(totalSeconds.toFixed(2));
				}
			},
			{
				key: "trackNavClicked",
				value: function trackNavClicked(itemId) {
					var rootItem = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
					var area = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : NAV_AREAS.LEFT_MENU;
					if (!this.initialized) {
						var pendingNav = {
							itemId,
							rootItem,
							area
						};
						sessionStorage.setItem(PENDING_NAV_CLICK_KEY, JSON.stringify(pendingNav));
						return;
					}
					this.updateActivity();
					this.navItemsVisited.add(itemId);
					this.saveSessionToStorage();
					var properties = {
						wpdash_nav_item_id: itemId,
						wpdash_nav_area: area
					};
					if (rootItem) properties.wpdash_nav_item_root = rootItem;
					this.dispatchEvent("wpdash_nav_clicked", properties);
				}
			},
			{
				key: "trackScreenViewed",
				value: function trackScreenViewed(screenId) {
					var screenType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : SCREEN_TYPES.TAB;
					this.updateActivity();
					var properties = {
						wpdash_screen_id: screenId,
						wpdash_screen_type: screenType
					};
					this.dispatchEvent("wpdash_screen_viewed", properties);
				}
			},
			{
				key: "trackActionControl",
				value: function trackActionControl(controlIdentifier, controlType) {
					this.updateActivity();
					var properties = {
						wpdash_action_control_interacted: controlIdentifier,
						wpdash_control_type: controlType
					};
					this.dispatchEvent("wpdash_action_control", properties);
				}
			},
			{
				key: "trackPromoClicked",
				value: function trackPromoClicked(promoName, destination, clickPath) {
					this.updateActivity();
					var properties = {
						wpdash_promo_name: promoName,
						wpdash_promo_destination: destination,
						wpdash_promo_clicked_path: clickPath
					};
					this.dispatchEvent("wpdash_promo_clicked", properties);
				}
			},
			{
				key: "trackSessionEnd",
				value: function trackSessionEnd() {
					var reason = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "timeout";
					if (this.sessionEnded) return;
					this.sessionEnded = true;
					if (this.activityCheckInterval) {
						clearInterval(this.activityCheckInterval);
						this.activityCheckInterval = null;
					}
					var duration = Date.now() - this.sessionStartTime;
					var properties = {
						wpdash_endstate_nav_summary: Array.from(this.navItemsVisited),
						wpdash_endstate_nav_count: this.navItemsVisited.size,
						wpdash_endstate_duration: this.formatDuration(duration),
						reason
					};
					this.dispatchEvent("wpdash_session_end_state", properties);
					this.clearStoredSession();
				}
			},
			{
				key: "destroy",
				value: function destroy() {
					if (this.activityCheckInterval) clearInterval(this.activityCheckInterval);
					this.navigationListeners.forEach(function(_ref) {
						var type = _ref.type;
						var handler = _ref.handler;
						document.removeEventListener(type, handler, true);
					});
					this.navigationListeners = [];
					ScreenViewTracking.destroy();
					PromotionTracking.destroy();
					MenuPromotionTracking.destroy();
					ActionControlTracking.destroy();
					this.initialized = false;
				}
			}
		]);
	}();
	_WpDashboardTracking = WpDashboardTracking;
	_defineProperty(WpDashboardTracking, "anyPageWithElementorString", "elementor");
	_defineProperty(WpDashboardTracking, "elementorPages", [
		_WpDashboardTracking.anyPageWithElementorString,
		"e-form-submissions",
		"popup_templates"
	]);
	_defineProperty(WpDashboardTracking, "elementorPostTypes", [
		"elementor_library",
		"e-floating-buttons",
		"elementor_snippet",
		"elementor_font",
		"elementor_icons"
	]);
	_defineProperty(WpDashboardTracking, "sessionStartTime", Date.now());
	_defineProperty(WpDashboardTracking, "lastActivityTime", Date.now());
	_defineProperty(WpDashboardTracking, "sessionEnded", false);
	_defineProperty(WpDashboardTracking, "navItemsVisited", /* @__PURE__ */ new Set());
	_defineProperty(WpDashboardTracking, "activityCheckInterval", null);
	_defineProperty(WpDashboardTracking, "initialized", false);
	_defineProperty(WpDashboardTracking, "navigationListeners", []);
	_defineProperty(WpDashboardTracking, "isNavigatingToElementor", false);
	window.addEventListener("elementor/admin/init", function() {
		var currentUrl = window.location.href;
		var isPluginsPage = WpDashboardTracking.isPluginsPage(currentUrl);
		var isElementorPage = WpDashboardTracking.isElementorPage(currentUrl);
		if (isPluginsPage) PluginActions.init();
		NavigationTracking.init();
		if (isElementorPage) {
			WpDashboardTracking.init();
			ScreenViewTracking.init();
			PromotionTracking.init();
			MenuPromotionTracking.init();
			ActionControlTracking.init();
		}
	});
	window.addEventListener("beforeunload", function() {
		NavigationTracking.destroy();
		PluginActions.destroy();
		WpDashboardTracking.destroy();
	});

//#endregion
//#region modules/home/assets/js/utils/promo-tracking.js
	var trackPromoClick = function trackPromoClick(promoName, destination, path) {
		if (WpDashboardTracking && "function" === typeof WpDashboardTracking.trackPromoClicked) WpDashboardTracking.trackPromoClicked(promoName, destination, path);
	};
	var getHomeScreenPath = function getHomeScreenPath(section) {
		return ["home", section];
	};

//#endregion
//#region modules/home/assets/js/components/top-section.js
	var TopSection = function TopSection(_ref) {
		var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
		var topData = props.topData;
		var buttonCtaUrl = props.buttonCtaUrl;
		if (!topData) return null;
		var title = topData.title;
		var description = topData.description;
		var buttonCtaTitle = topData.button_cta_text;
		var buttonCreatePageTitle = topData.button_create_page_title;
		var youtubeEmbeddedId = topData.youtube_embed_id;
		var buttonWatchURL = topData.button_watch_url;
		var buttonWatchTitle = topData.button_watch_title;
		var ctaButtonTitle = buttonCtaTitle !== null && buttonCtaTitle !== void 0 ? buttonCtaTitle : buttonCreatePageTitle;
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Paper, {
			elevation: 0,
			sx: {
				display: "flex",
				flexDirection: {
					xs: "column",
					sm: "row"
				},
				justifyContent: "space-between",
				py: 3,
				px: {
					xs: 3,
					md: 4
				},
				gap: {
					xs: 2,
					sm: 3,
					lg: 10,
					xl: 22
				},
				borderRadius: 1,
				border: "1px solid rgba(0, 0, 0, 0.12)"
			}
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
			gap: 3,
			justifyContent: "center"
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, /*#__PURE__*/ react.default.createElement(_elementor_ui_Typography.default, { variant: "h6" }, title), /*#__PURE__*/ react.default.createElement(_elementor_ui_Typography.default, {
			variant: "body2",
			color: "secondary"
		}, description)), /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			gap: 1
		} }, /*#__PURE__*/ react.default.createElement(_elementor_ui_Button.default, {
			"data-testid": "e-create-button",
			variant: "contained",
			size: "small",
			href: buttonCtaUrl,
			target: "_blank",
			onClick: function handleCtaClick() {
				trackPromoClick(ctaButtonTitle, buttonCtaUrl, getHomeScreenPath("top_section"));
			}
		}, ctaButtonTitle), /*#__PURE__*/ react.default.createElement(_elementor_ui_Button.default, {
			variant: "outlined",
			color: "secondary",
			size: "small",
			startIcon: /*#__PURE__*/ react.default.createElement(YoutubeIcon, null),
			href: buttonWatchURL,
			target: "_blank",
			onClick: function handleWatchClick() {
				trackPromoClick(buttonWatchTitle, buttonWatchURL, getHomeScreenPath("top_section"));
			}
		}, buttonWatchTitle))), /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
			component: "iframe",
			src: "https://www.youtube.com/embed/".concat(youtubeEmbeddedId),
			title: "YouTube video player",
			frameBorder: "0",
			allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
			allowFullScreen: true,
			sx: {
				aspectRatio: "16/9",
				borderRadius: 1,
				display: "flex",
				width: "100%",
				maxWidth: "365px"
			}
		}));
	};
	TopSection.propTypes = {
		topData: import_prop_types.default.object.isRequired,
		buttonCtaUrl: import_prop_types.default.string.isRequired
	};

//#endregion
//#region modules/home/assets/js/components/promotions/sidebar-banner.js
	var SidebarBanner = function SidebarBanner(_ref) {
		var image = _ref.image;
		var link = _ref.link;
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Paper, {
			elevation: 0,
			sx: {
				overflow: "hidden",
				borderRadius: 1
			}
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui_Link.default, {
			target: "_blank",
			href: link,
			onClick: function handleClick() {
				trackPromoClick("Sidebar Banner", link, getHomeScreenPath("sidebar"));
			},
			sx: {
				lineHeight: 0,
				display: "block",
				width: "100%",
				height: "100%",
				boxShadow: "none",
				"&:focus": { boxShadow: "none" },
				"&:active": { boxShadow: "none" }
			}
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
			component: "img",
			src: image,
			sx: {
				width: "100%",
				height: "100%"
			}
		})));
	};
	SidebarBanner.propTypes = {
		image: import_prop_types.default.string.isRequired,
		link: import_prop_types.default.string.isRequired
	};

//#endregion
//#region modules/home/assets/js/icons/side-bar-check-icon.js
	var SideBarCheckIcon = function SideBarCheckIcon(props) {
		return /*#__PURE__*/ react.createElement(_elementor_ui.SvgIcon, _extends({ viewBox: "0 0 24 24" }, props), /*#__PURE__*/ react.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M9.09013 3.69078C10.273 3.2008 11.5409 2.94861 12.8213 2.94861C14.1017 2.94861 15.3695 3.2008 16.5525 3.69078C17.7354 4.18077 18.8102 4.89895 19.7156 5.80432C20.621 6.70969 21.3391 7.78452 21.8291 8.96744C22.3191 10.1504 22.5713 11.4182 22.5713 12.6986C22.5713 13.979 22.3191 15.2468 21.8291 16.4298C21.3391 17.6127 20.621 18.6875 19.7156 19.5929C18.8102 20.4983 17.7354 21.2165 16.5525 21.7064C15.3695 22.1964 14.1017 22.4486 12.8213 22.4486C11.5409 22.4486 10.2731 22.1964 9.09013 21.7064C7.9072 21.2165 6.83237 20.4983 5.927 19.5929C5.02163 18.6875 4.30345 17.6127 3.81346 16.4298C3.32348 15.2468 3.07129 13.979 3.07129 12.6986C3.07129 11.4182 3.32348 10.1504 3.81346 8.96744C4.30345 7.78452 5.02163 6.70969 5.927 5.80432C6.83237 4.89895 7.9072 4.18077 9.09013 3.69078ZM12.8213 4.44861C11.7379 4.44861 10.6651 4.662 9.66415 5.0766C8.66321 5.4912 7.75374 6.09889 6.98766 6.86498C6.22157 7.63106 5.61388 8.54053 5.19928 9.54147C4.78468 10.5424 4.57129 11.6152 4.57129 12.6986C4.57129 13.782 4.78468 14.8548 5.19928 15.8557C5.61388 16.8567 6.22157 17.7662 6.98766 18.5322C7.75374 19.2983 8.66322 19.906 9.66415 20.3206C10.6651 20.7352 11.7379 20.9486 12.8213 20.9486C13.9047 20.9486 14.9775 20.7352 15.9784 20.3206C16.9794 19.906 17.8888 19.2983 18.6549 18.5322C19.421 17.7662 20.0287 16.8567 20.4433 15.8557C20.8579 14.8548 21.0713 13.782 21.0713 12.6986C21.0713 11.6152 20.8579 10.5424 20.4433 9.54147C20.0287 8.54053 19.421 7.63106 18.6549 6.86498C17.8888 6.09889 16.9794 5.4912 15.9784 5.0766C14.9775 4.662 13.9047 4.44861 12.8213 4.44861Z",
			fill: "#93003F"
		}), /*#__PURE__*/ react.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M17.3213 9.69424C17.6142 9.98713 17.6142 10.462 17.3213 10.7549L12.3732 15.703C12.0803 15.9959 11.6054 15.9959 11.3125 15.703L8.83851 13.2289C8.54562 12.936 8.54562 12.4612 8.83851 12.1683C9.1314 11.8754 9.60628 11.8754 9.89917 12.1683L11.8429 14.112L16.2606 9.69424C16.5535 9.40135 17.0284 9.40135 17.3213 9.69424Z",
			fill: "#93003F"
		}));
	};

//#endregion
//#region modules/home/assets/js/components/promotions/sidebar-default.js
	var SidebarDefault = function SidebarDefault(_ref) {
		var header = _ref.header;
		var cta = _ref.cta;
		var repeater = _ref.repeater;
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Paper, {
			elevation: 0,
			sx: {
				p: 3,
				borderRadius: 1
			}
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, {
			gap: 1.5,
			alignItems: "center",
			textAlign: "center",
			sx: { pb: 4 }
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
			component: "img",
			src: header.image
		}), /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, { variant: "h6" }, header.title), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.secondary"
		}, header.description)), /*#__PURE__*/ react.default.createElement(_elementor_ui_Button.default, {
			variant: "contained",
			size: "medium",
			color: "promotion",
			href: cta.url,
			onClick: function handleCtaClick() {
				trackPromoClick(header.title, cta.url, getHomeScreenPath("sidebar"));
			},
			startIcon: /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
				component: "img",
				src: cta.image,
				sx: { width: "16px" }
			}),
			target: "_blank",
			sx: { maxWidth: "fit-content" }
		}, cta.label)), /*#__PURE__*/ react.default.createElement(_elementor_ui_List.default, { sx: { p: 0 } }, repeater.map(function(item, index) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui_ListItem.default, {
				key: index,
				sx: {
					p: 0,
					gap: 1
				}
			}, /*#__PURE__*/ react.default.createElement(SideBarCheckIcon, null), /*#__PURE__*/ react.default.createElement(_elementor_ui_ListItemText.default, {
				primaryTypographyProps: { variant: "body2" },
				primary: item.title
			}));
		})));
	};
	SidebarDefault.propTypes = {
		header: import_prop_types.default.object.isRequired,
		cta: import_prop_types.default.object.isRequired,
		repeater: import_prop_types.default.array
	};

//#endregion
//#region modules/home/assets/js/components/sidebar-promotion.js
	var SideBarPromotion = function SideBarPromotion(_ref) {
		var sideData = _ref.sideData;
		if ("banner" === sideData.type) return /*#__PURE__*/ react.default.createElement(SidebarBanner, sideData.data);
		return /*#__PURE__*/ react.default.createElement(SidebarDefault, sideData.data);
	};
	SideBarPromotion.propTypes = { sideData: import_prop_types.default.object.isRequired };

//#endregion
//#region modules/home/assets/js/components/external-links-section.js
	var ExternalLinksSection = function ExternalLinksSection(_ref) {
		var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Paper, {
			elevation: 0,
			sx: {
				py: 3,
				px: {
					xs: 3,
					md: 4
				},
				borderRadius: 1,
				border: "1px solid rgba(0, 0, 0, 0.12)"
			}
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui_List.default, { sx: {
			display: "flex",
			flexDirection: {
				xs: "column",
				sm: "row"
			},
			rowGap: 2,
			columnGap: 7.5,
			flexWrap: "wrap"
		} }, props.externalLinksData.map(function(item) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
				key: item.label,
				sx: {
					display: "flex",
					alignItems: "center"
				}
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui_ListItemButton.default, {
				href: item.url,
				target: "_blank",
				sx: {
					"&:hover": { backgroundColor: "initial" },
					gap: 2,
					px: 0,
					py: 0
				}
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, {
				component: "img",
				src: item.image,
				sx: { width: "38px" }
			}), /*#__PURE__*/ react.default.createElement(_elementor_ui_ListItemText.default, {
				sx: { color: "text.secondary" },
				primary: item.label
			})));
		})));
	};
	ExternalLinksSection.propTypes = { externalLinksData: import_prop_types.default.array.isRequired };

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
//#region modules/home/assets/js/components/create-new-page-dialog.js
	var CreateNewPageDialog = function CreateNewPageDialog(_ref) {
		var url = _ref.url;
		var isOpen = _ref.isOpen;
		var closedDialogCallback = _ref.closedDialogCallback;
		var _React$useState2 = _slicedToArray(react.default.useState(false), 2);
		var open = _React$useState2[0];
		var setOpen = _React$useState2[1];
		var _React$useState4 = _slicedToArray(react.default.useState(""), 2);
		var pageName = _React$useState4[0];
		var setPageName = _React$useState4[1];
		(0, react.useEffect)(function() {
			setOpen(isOpen);
		}, [isOpen]);
		var handleDialogClose = function handleDialogClose() {
			setOpen(false);
			closedDialogCallback();
		};
		return /*#__PURE__*/ react.default.createElement(_elementor_ui_Dialog.default, {
			open,
			onClose: handleDialogClose,
			maxWidth: "xs",
			width: "xs",
			fullWidth: true
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui_DialogHeader.default, null, /*#__PURE__*/ react.default.createElement(_elementor_ui_DialogHeaderGroup.default, null, /*#__PURE__*/ react.default.createElement(_elementor_ui_DialogTitle.default, null, (0, _wordpress_i18n.__)("Name your page", "elementor")))), /*#__PURE__*/ react.default.createElement(_elementor_ui_DialogContent.default, { dividers: true }, /*#__PURE__*/ react.default.createElement(_elementor_ui_DialogContentText.default, { sx: { mb: 2 } }, (0, _wordpress_i18n.__)("To proceed, please name your first page,", "elementor"), /*#__PURE__*/ react.default.createElement("br", null), (0, _wordpress_i18n.__)("or rename it later.", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui_TextField.default, {
			onChange: function handleChange(event) {
				var urlParams = new URLSearchParams();
				urlParams.append("post_data[post_title]", event.target.value);
				setPageName(urlParams.toString());
			},
			fullWidth: true,
			placeholder: (0, _wordpress_i18n.__)("New Page", "elementor")
		})), /*#__PURE__*/ react.default.createElement(_elementor_ui_DialogActions.default, null, /*#__PURE__*/ react.default.createElement(_elementor_ui_Button.default, {
			onClick: handleDialogClose,
			color: "secondary"
		}, (0, _wordpress_i18n.__)("Cancel", "elementor")), /*#__PURE__*/ react.default.createElement(_elementor_ui_Button.default, {
			variant: "contained",
			href: pageName ? url + "&" + pageName : url,
			target: "_blank"
		}, (0, _wordpress_i18n.__)("Save", "elementor"))));
	};
	CreateNewPageDialog.propTypes = {
		url: import_prop_types.default.string.isRequired,
		isOpen: import_prop_types.default.bool.isRequired,
		closedDialogCallback: import_prop_types.default.func.isRequired
	};

//#endregion
//#region modules/home/assets/js/components/get-started-list-item.js
	var GetStartedListItem = function GetStartedListItem(_ref) {
		var item = _ref.item;
		var image = _ref.image;
		var adminUrl = _ref.adminUrl;
		var url = item.is_relative_url ? adminUrl + item.url : item.url;
		var _React$useState2 = _slicedToArray(react.default.useState(false), 2);
		var isOpen = _React$useState2[0];
		var openDialog = _React$useState2[1];
		return /*#__PURE__*/ react.default.createElement(_elementor_ui_ListItem.default, {
			alignItems: "flex-start",
			sx: {
				gap: 1,
				p: 0,
				maxWidth: "150px"
			}
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui_Box.default, {
			component: "img",
			src: image
		}), /*#__PURE__*/ react.default.createElement(_elementor_ui_Box.default, null, /*#__PURE__*/ react.default.createElement(_elementor_ui_ListItemText.default, {
			primary: item.title,
			primaryTypographyProps: { variant: "subtitle1" },
			sx: { my: 0 }
		}), /*#__PURE__*/ react.default.createElement(_elementor_ui_Link.default, {
			variant: "body2",
			color: item.title_small_color ? item.title_small_color : "text.tertiary",
			underline: "hover",
			href: url,
			target: "_blank",
			onClick: function handleLinkClick(event) {
				if (!item.new_page) return;
				event.preventDefault();
				openDialog(true);
			}
		}, item.title_small)), item.new_page && /*#__PURE__*/ react.default.createElement(CreateNewPageDialog, {
			url,
			isOpen,
			closedDialogCallback: function closedDialogCallback() {
				return openDialog(false);
			}
		}));
	};
	GetStartedListItem.propTypes = {
		item: import_prop_types.default.shape({
			title: import_prop_types.default.string.isRequired,
			title_small: import_prop_types.default.string.isRequired,
			url: import_prop_types.default.string.isRequired,
			new_page: import_prop_types.default.bool,
			is_relative_url: import_prop_types.default.bool,
			title_small_color: import_prop_types.default.string
		}).isRequired,
		adminUrl: import_prop_types.default.string.isRequired,
		image: import_prop_types.default.string
	};

//#endregion
//#region modules/home/assets/js/components/get-started-section.js
	var GetStarted = function GetStarted(_ref) {
		var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
		var mdGridColumns = props.homeScreenData.hasOwnProperty("sidebar_promotion_variants") ? "repeat(3, 1fr)" : "repeat(4, 1fr)";
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Paper, {
			elevation: 0,
			sx: {
				py: 3,
				px: {
					xs: 3,
					md: 4
				},
				display: "flex",
				flexDirection: "column",
				gap: 2,
				borderRadius: 1,
				border: "1px solid rgba(0, 0, 0, 0.12)"
			}
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, { variant: "h6" }, props.getStartedData.header.title), /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "body2",
			color: "text.secondary"
		}, props.getStartedData.header.description)), /*#__PURE__*/ react.default.createElement(_elementor_ui_List.default, { sx: {
			display: "grid",
			gridTemplateColumns: {
				xl: "repeat(4, 1fr)",
				md: mdGridColumns,
				xs: "repeat(2, 1fr)"
			},
			columnGap: {
				md: 9,
				xs: 7
			},
			rowGap: 3
		} }, props.getStartedData.repeater.map(function(item) {
			return /*#__PURE__*/ react.default.createElement(GetStartedListItem, {
				key: item.title,
				item,
				image: item.image,
				adminUrl: props.adminUrl
			});
		})));
	};
	GetStarted.propTypes = {
		getStartedData: import_prop_types.default.object.isRequired,
		adminUrl: import_prop_types.default.string.isRequired,
		homeScreenData: import_prop_types.default.object.isRequired
	};

//#endregion
//#region modules/home/assets/js/components/load-fallback-message.js
	var LoadFallbackMessage = function LoadFallbackMessage() {
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Container, {
			disableGutters: true,
			maxWidth: "lg",
			sx: {
				px: 4,
				pt: 4
			}
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Paper, {
			elevation: 0,
			sx: {
				py: 4,
				px: 4,
				borderRadius: 1,
				border: 1,
				borderColor: "divider",
				textAlign: "center"
			}
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Typography, {
			variant: "body1",
			color: "text.secondary"
		}, (0, _wordpress_i18n.__)("We couldn't load this content right now. Please try again later.", "elementor")))));
	};

//#endregion
//#region modules/home/assets/js/components/home-screen.js
	var EditorScreen = function EditorScreen(props) {
		var _props$homeScreenData;
		if (!((_props$homeScreenData = props.homeScreenData) !== null && _props$homeScreenData !== void 0 && _props$homeScreenData.get_started)) return /*#__PURE__*/ react.default.createElement(LoadFallbackMessage, null);
		var hasSidebarPromotion = props.homeScreenData.hasOwnProperty("sidebar_promotion_variants");
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.Container, {
			disableGutters: true,
			maxWidth: "lg",
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 2.5,
				px: {
					xs: 1.5,
					md: 4
				}
			}
		}, /*#__PURE__*/ react.default.createElement(HeaderSection, { editWebsiteUrl: props.homeScreenData.edit_website_url }), props.homeScreenData.top_with_licences && /*#__PURE__*/ react.default.createElement(TopSection, {
			topData: props.homeScreenData.top_with_licences,
			buttonCtaUrl: props.homeScreenData.button_cta_url
		}), /*#__PURE__*/ react.default.createElement(_elementor_ui.Box, { sx: {
			display: "flex",
			flexDirection: {
				xs: "column",
				sm: "row"
			},
			justifyContent: "space-between",
			gap: 2.5
		} }, /*#__PURE__*/ react.default.createElement(_elementor_ui.Stack, { sx: {
			flex: 1,
			gap: 2.5
		} }, /*#__PURE__*/ react.default.createElement(GetStarted, {
			getStartedData: props.homeScreenData.get_started,
			adminUrl: props.adminUrl,
			homeScreenData: props.homeScreenData
		}), /*#__PURE__*/ react.default.createElement(ExternalLinksSection, { externalLinksData: props.homeScreenData.external_links })), hasSidebarPromotion && /*#__PURE__*/ react.default.createElement(_elementor_ui.Container, {
			maxWidth: "xs",
			disableGutters: true,
			sx: {
				width: { sm: "305px" },
				display: "flex",
				flexDirection: "column",
				gap: 2.5
			}
		}, /*#__PURE__*/ react.default.createElement(SideBarPromotion, { sideData: props.homeScreenData.sidebar_promotion_variants })))));
	};
	EditorScreen.propTypes = {
		homeScreenData: import_prop_types.default.object,
		adminUrl: import_prop_types.default.string
	};

//#endregion
//#region modules/home/assets/js/app.js
	var App = function App(props) {
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.DirectionProvider, { rtl: props.isRTL }, /*#__PURE__*/ react.default.createElement(_elementor_ui.LocalizationProvider, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.ThemeProvider, { colorScheme: "light" }, /*#__PURE__*/ react.default.createElement(EditorScreen, {
			homeScreenData: props.homeScreenData,
			adminUrl: props.adminUrl
		}))));
	};
	var isRTL = elementorCommon.config.isRTL;
	var adminUrl = elementorAppConfig.admin_url;
	var rootElement = document.querySelector("#e-home-screen");
	App.propTypes = {
		isRTL: import_prop_types.default.bool,
		adminUrl: import_prop_types.default.string,
		homeScreenData: import_prop_types.default.object
	};
	react_default.render(/*#__PURE__*/ react.default.createElement(App, {
		isRTL,
		homeScreenData: elementorHomeScreenData,
		adminUrl
	}), rootElement);

//#endregion
})(React, ReactDOM, elementorV2.ui, elementorV2.ui['Typography'], elementorV2.ui['Button'], wp.i18n, elementorV2.ui['Link'], elementorV2.ui['List'], elementorV2.ui['ListItem'], elementorV2.ui['ListItemText'], elementorV2.ui['ListItemButton'], elementorV2.ui['Box'], elementorV2.ui['DialogHeader'], elementorV2.ui['DialogHeaderGroup'], elementorV2.ui['DialogTitle'], elementorV2.ui['DialogContent'], elementorV2.ui['DialogContentText'], elementorV2.ui['TextField'], elementorV2.ui['DialogActions'], elementorV2.ui['Dialog']);
//# sourceMappingURL=e-home-screen.js.map