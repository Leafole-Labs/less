(function(react, _wordpress_i18n) {var __vite_style__ = document.createElement('style');__vite_style__.textContent = "/*$vite$:1*/";document.head.appendChild(__vite_style__);

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

//#region node_modules/@babel/runtime/helpers/esm/classCallCheck.js
	function _classCallCheck$1(a, n) {
		if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
	}
	__name(_classCallCheck$1, "_classCallCheck");

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
//#region app/assets/js/router.js
	var router = new (/* @__PURE__ */ function() {
		function Router() {
			_classCallCheck$1(this, Router);
			/**
			* @type {*[]}
			*/
			_defineProperty(this, "routes", []);
			_defineProperty(this, "history", null);
		}
		return _createClass(Router, [{
			key: "addRoute",
			value: function addRoute(route) {
				this.routes.push(route);
			}
		}, {
			key: "getRoutes",
			value: function getRoutes() {
				return this.routes.map(function(route) {
					var props = route.props || {};
					props.path = props.key = route.path;
					return react.default.createElement(route.component, props);
				});
			}
		}]);
	}())();
	window.elementorAppPackages = { router };

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
//#region node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
	function _assertThisInitialized(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
	function _possibleConstructorReturn$1(t, e) {
		if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return _assertThisInitialized(t);
	}
	__name(_possibleConstructorReturn$1, "_possibleConstructorReturn");

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
	function _inherits$1(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
		t.prototype = Object.create(e && e.prototype, { constructor: {
			value: t,
			writable: !0,
			configurable: !0
		} }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);
	}
	__name(_inherits$1, "_inherits");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/extends.js
	function _extends$2() {
		return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
			for (var e = 1; e < arguments.length; e++) {
				var t = arguments[e];
				for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
			}
			return n;
		}, _extends$2.apply(null, arguments);
	}
	__name(_extends$2, "_extends");

//#endregion
//#region node_modules/invariant/browser.js
/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_browser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/**
		* Use invariant() to assert state which your program assumes to be true.
		*
		* Provide sprintf-style format (only %s is supported) and arguments
		* to provide information about what broke and what you were
		* expecting.
		*
		* The invariant message will be stripped in production, but the invariant
		* will remain to ensure logic does not differ in production.
		*/
		var invariant = function(condition, format, a, b, c, d, e, f) {
			if (format === void 0) throw new Error("invariant requires an error message argument");
			if (!condition) {
				var error;
				if (format === void 0) error = /* @__PURE__ */ new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
				else {
					var args = [
						a,
						b,
						c,
						d,
						e,
						f
					];
					var argIndex = 0;
					error = new Error(format.replace(/%s/g, function() {
						return args[argIndex++];
					}));
					error.name = "Invariant Violation";
				}
				error.framesToPop = 1;
				throw error;
			}
		};
		module.exports = invariant;
	}));

//#endregion
//#region node_modules/gud/index.js
	var require_gud = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var key = "__global_unique_id__";
		module.exports = function() {
			return global[key] = (global[key] || 0) + 1;
		};
	}));

//#endregion
//#region node_modules/warning/warning.js
/**
	* Copyright (c) 2014-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	var require_warning = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		/**
		* Similar to invariant but only logs a warning if the condition is not met.
		* This can be used to log issues in development environments in critical
		* paths. Removing the logging code for production environments will keep the
		* same logic and follow the same code paths.
		*/
		var __DEV__ = true;
		var warning = function() {};
		if (__DEV__) {
			var printWarning = function printWarning(format, args) {
				var len = arguments.length;
				args = new Array(len > 1 ? len - 1 : 0);
				for (var key = 1; key < len; key++) args[key - 1] = arguments[key];
				var argIndex = 0;
				var message = "Warning: " + format.replace(/%s/g, function() {
					return args[argIndex++];
				});
				if (typeof console !== "undefined") console.error(message);
				try {
					throw new Error(message);
				} catch (x) {}
			};
			warning = function(condition, format, args) {
				var len = arguments.length;
				args = new Array(len > 2 ? len - 2 : 0);
				for (var key = 2; key < len; key++) args[key - 2] = arguments[key];
				if (format === void 0) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
				if (!condition) printWarning.apply(null, [format].concat(args));
			};
		}
		module.exports = warning;
	}));

//#endregion
//#region node_modules/create-react-context/lib/implementation.js
	var require_implementation = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		exports.__esModule = true;
		var _react = (globalThis.React);
		_interopRequireDefault(_react);
		var _propTypes2 = _interopRequireDefault(require_prop_types());
		var _gud2 = _interopRequireDefault(require_gud());
		var _warning2 = _interopRequireDefault(require_warning());
		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}
		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
		}
		function _possibleConstructorReturn(self, call) {
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return call && (typeof call === "object" || typeof call === "function") ? call : self;
		}
		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			} });
			if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}
		var MAX_SIGNED_31_BIT_INT = 1073741823;
		function objectIs(x, y) {
			if (x === y) return x !== 0 || 1 / x === 1 / y;
			else return x !== x && y !== y;
		}
		function createEventEmitter(value) {
			var handlers = [];
			return {
				on: function on(handler) {
					handlers.push(handler);
				},
				off: function off(handler) {
					handlers = handlers.filter(function(h) {
						return h !== handler;
					});
				},
				get: function get() {
					return value;
				},
				set: function set(newValue, changedBits) {
					value = newValue;
					handlers.forEach(function(handler) {
						return handler(value, changedBits);
					});
				}
			};
		}
		function onlyChild(children) {
			return Array.isArray(children) ? children[0] : children;
		}
		function createReactContext(defaultValue, calculateChangedBits) {
			var _Provider$childContex;
			var _Consumer$contextType;
			var contextProp = "__create-react-context-" + (0, _gud2.default)() + "__";
			var Provider = function(_Component) {
				_inherits(Provider, _Component);
				function Provider() {
					var _temp;
					var _this;
					var _ret;
					_classCallCheck(this, Provider);
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
					return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
				}
				Provider.prototype.getChildContext = function getChildContext() {
					var _ref;
					return _ref = {}, _ref[contextProp] = this.emitter, _ref;
				};
				Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
					if (this.props.value !== nextProps.value) {
						var oldValue = this.props.value;
						var newValue = nextProps.value;
						var changedBits = void 0;
						if (objectIs(oldValue, newValue)) changedBits = 0;
						else {
							changedBits = typeof calculateChangedBits === "function" ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
							(0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, "calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s", changedBits);
							changedBits |= 0;
							if (changedBits !== 0) this.emitter.set(nextProps.value, changedBits);
						}
					}
				};
				Provider.prototype.render = function render() {
					return this.props.children;
				};
				return Provider;
			}(_react.Component);
			Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);
			var Consumer = function(_Component2) {
				_inherits(Consumer, _Component2);
				function Consumer() {
					var _temp2;
					var _this2;
					var _ret2;
					_classCallCheck(this, Consumer);
					for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
					return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = { value: _this2.getValue() }, _this2.onUpdate = function(newValue, changedBits) {
						if (((_this2.observedBits | 0) & changedBits) !== 0) _this2.setState({ value: _this2.getValue() });
					}, _temp2), _possibleConstructorReturn(_this2, _ret2);
				}
				Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
					var observedBits = nextProps.observedBits;
					this.observedBits = observedBits === void 0 || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
				};
				Consumer.prototype.componentDidMount = function componentDidMount() {
					if (this.context[contextProp]) this.context[contextProp].on(this.onUpdate);
					var observedBits = this.props.observedBits;
					this.observedBits = observedBits === void 0 || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
				};
				Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
					if (this.context[contextProp]) this.context[contextProp].off(this.onUpdate);
				};
				Consumer.prototype.getValue = function getValue() {
					if (this.context[contextProp]) return this.context[contextProp].get();
					else return defaultValue;
				};
				Consumer.prototype.render = function render() {
					return onlyChild(this.props.children)(this.state.value);
				};
				return Consumer;
			}(_react.Component);
			Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);
			return {
				Provider,
				Consumer
			};
		}
		exports.default = createReactContext;
		module.exports = exports["default"];
	}));

//#endregion
//#region node_modules/create-react-context/lib/index.js
	var require_lib = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		exports.__esModule = true;
		var _react2 = _interopRequireDefault((globalThis.React));
		var _implementation2 = _interopRequireDefault(require_implementation());
		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}
		exports.default = _react2.default.createContext || _implementation2.default;
		module.exports = exports["default"];
	}));

//#endregion
//#region node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var import_browser = /* @__PURE__ */ __toESM(require_browser());
var import_lib = /* @__PURE__ */ __toESM(require_lib());
/**
	* Copyright (c) 2013-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file in the root directory of this source tree.
	*/
	function componentWillMount() {
		var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
		if (state !== null && state !== void 0) this.setState(state);
	}
	function componentWillReceiveProps(nextProps) {
		function updater(prevState) {
			var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
			return state !== null && state !== void 0 ? state : null;
		}
		this.setState(updater.bind(this));
	}
	function componentWillUpdate(nextProps, nextState) {
		try {
			var prevProps = this.props;
			var prevState = this.state;
			this.props = nextProps;
			this.state = nextState;
			this.__reactInternalSnapshotFlag = true;
			this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
		} finally {
			this.props = prevProps;
			this.state = prevState;
		}
	}
	componentWillMount.__suppressDeprecationWarning = true;
	componentWillReceiveProps.__suppressDeprecationWarning = true;
	componentWillUpdate.__suppressDeprecationWarning = true;
	function polyfill(Component) {
		var prototype = Component.prototype;
		if (!prototype || !prototype.isReactComponent) throw new Error("Can only polyfill class components");
		if (typeof Component.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") return Component;
		var foundWillMountName = null;
		var foundWillReceivePropsName = null;
		var foundWillUpdateName = null;
		if (typeof prototype.componentWillMount === "function") foundWillMountName = "componentWillMount";
		else if (typeof prototype.UNSAFE_componentWillMount === "function") foundWillMountName = "UNSAFE_componentWillMount";
		if (typeof prototype.componentWillReceiveProps === "function") foundWillReceivePropsName = "componentWillReceiveProps";
		else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
		if (typeof prototype.componentWillUpdate === "function") foundWillUpdateName = "componentWillUpdate";
		else if (typeof prototype.UNSAFE_componentWillUpdate === "function") foundWillUpdateName = "UNSAFE_componentWillUpdate";
		if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
			var componentName = Component.displayName || Component.name;
			var newApiName = typeof Component.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
			throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");
		}
		if (typeof Component.getDerivedStateFromProps === "function") {
			prototype.componentWillMount = componentWillMount;
			prototype.componentWillReceiveProps = componentWillReceiveProps;
		}
		if (typeof prototype.getSnapshotBeforeUpdate === "function") {
			if (typeof prototype.componentDidUpdate !== "function") throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
			prototype.componentWillUpdate = componentWillUpdate;
			var componentDidUpdate = prototype.componentDidUpdate;
			prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
				var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
				componentDidUpdate.call(this, prevProps, prevState, snapshot);
			};
		}
		return Component;
	}

//#endregion
//#region node_modules/@reach/router/es/lib/utils.js
	var startsWith = function startsWith(string, search) {
		return string.substr(0, search.length) === search;
	};
	var pick = function pick(routes, uri) {
		var match = void 0;
		var default_ = void 0;
		var uriPathname = uri.split("?")[0];
		var uriSegments = segmentize(uriPathname);
		var isRootUri = uriSegments[0] === "";
		var ranked = rankRoutes(routes);
		for (var i = 0, l = ranked.length; i < l; i++) {
			var missed = false;
			var route = ranked[i].route;
			if (route.default) {
				default_ = {
					route,
					params: {},
					uri
				};
				continue;
			}
			var routeSegments = segmentize(route.path);
			var params = {};
			var max = Math.max(uriSegments.length, routeSegments.length);
			var index = 0;
			for (; index < max; index++) {
				var routeSegment = routeSegments[index];
				var uriSegment = uriSegments[index];
				if (isSplat(routeSegment)) {
					var param = routeSegment.slice(1) || "*";
					params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
					break;
				}
				if (uriSegment === void 0) {
					missed = true;
					break;
				}
				var dynamicMatch = paramRe.exec(routeSegment);
				if (dynamicMatch && !isRootUri) {
					!(reservedNames.indexOf(dynamicMatch[1]) === -1) && (0, import_browser.default)(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".");
					var value = decodeURIComponent(uriSegment);
					params[dynamicMatch[1]] = value;
				} else if (routeSegment !== uriSegment) {
					missed = true;
					break;
				}
			}
			if (!missed) {
				match = {
					route,
					params,
					uri: "/" + uriSegments.slice(0, index).join("/")
				};
				break;
			}
		}
		return match || default_ || null;
	};
	var match = function match(path, uri) {
		return pick([{ path }], uri);
	};
	var resolve = function resolve(to, base) {
		if (startsWith(to, "/")) return to;
		var _to$split = to.split("?");
		var toPathname = _to$split[0];
		var toQuery = _to$split[1];
		var basePathname = base.split("?")[0];
		var toSegments = segmentize(toPathname);
		var baseSegments = segmentize(basePathname);
		if (toSegments[0] === "") return addQuery(basePathname, toQuery);
		if (!startsWith(toSegments[0], ".")) {
			var pathname = baseSegments.concat(toSegments).join("/");
			return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
		}
		var allSegments = baseSegments.concat(toSegments);
		var segments = [];
		for (var i = 0, l = allSegments.length; i < l; i++) {
			var segment = allSegments[i];
			if (segment === "..") segments.pop();
			else if (segment !== ".") segments.push(segment);
		}
		return addQuery("/" + segments.join("/"), toQuery);
	};
	var insertParams = function insertParams(path, params) {
		var _path$split = path.split("?");
		var pathBase = _path$split[0];
		var _path$split$ = _path$split[1];
		var query = _path$split$ === void 0 ? "" : _path$split$;
		var constructedPath = "/" + segmentize(pathBase).map(function(segment) {
			var match = paramRe.exec(segment);
			return match ? params[match[1]] : segment;
		}).join("/");
		var _params$location = params.location;
		_params$location = _params$location === void 0 ? {} : _params$location;
		var _params$location$sear = _params$location.search;
		var searchSplit = (_params$location$sear === void 0 ? "" : _params$location$sear).split("?")[1] || "";
		constructedPath = addQuery(constructedPath, query, searchSplit);
		return constructedPath;
	};
	var validateRedirect = function validateRedirect(from, to) {
		var filter = function filter(segment) {
			return isDynamic(segment);
		};
		return segmentize(from).filter(filter).sort().join("/") === segmentize(to).filter(filter).sort().join("/");
	};
	var paramRe = /^:(.+)/;
	var SEGMENT_POINTS = 4;
	var STATIC_POINTS = 3;
	var DYNAMIC_POINTS = 2;
	var SPLAT_PENALTY = 1;
	var ROOT_POINTS = 1;
	var isRootSegment = function isRootSegment(segment) {
		return segment === "";
	};
	var isDynamic = function isDynamic(segment) {
		return paramRe.test(segment);
	};
	var isSplat = function isSplat(segment) {
		return segment && segment[0] === "*";
	};
	var rankRoute = function rankRoute(route, index) {
		return {
			route,
			score: route.default ? 0 : segmentize(route.path).reduce(function(score, segment) {
				score += SEGMENT_POINTS;
				if (isRootSegment(segment)) score += ROOT_POINTS;
				else if (isDynamic(segment)) score += DYNAMIC_POINTS;
				else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;
				else score += STATIC_POINTS;
				return score;
			}, 0),
			index
		};
	};
	var rankRoutes = function rankRoutes(routes) {
		return routes.map(rankRoute).sort(function(a, b) {
			return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
		});
	};
	var segmentize = function segmentize(uri) {
		return uri.replace(/(^\/+|\/+$)/g, "").split("/");
	};
	var addQuery = function addQuery(pathname) {
		for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) query[_key - 1] = arguments[_key];
		query = query.filter(function(q) {
			return q && q.length > 0;
		});
		return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
	};
	var reservedNames = ["uri", "path"];
	/**
	* Shallow compares two objects.
	* @param {Object} obj1 The first object to compare.
	* @param {Object} obj2 The second object to compare.
	*/
	var shallowCompare = function shallowCompare(obj1, obj2) {
		var obj1Keys = Object.keys(obj1);
		return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function(key) {
			return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
		});
	};

//#endregion
//#region node_modules/@reach/router/es/lib/history.js
	var _extends$1 = Object.assign || function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	var getLocation = function getLocation(source) {
		var _source$location = source.location;
		var search = _source$location.search;
		var hash = _source$location.hash;
		var href = _source$location.href;
		var origin = _source$location.origin;
		var protocol = _source$location.protocol;
		var host = _source$location.host;
		var hostname = _source$location.hostname;
		var port = _source$location.port;
		var pathname = source.location.pathname;
		if (!pathname && href && canUseDOM) pathname = new URL(href).pathname;
		return {
			pathname: encodeURI(decodeURI(pathname)),
			search,
			hash,
			href,
			origin,
			protocol,
			host,
			hostname,
			port,
			state: source.history.state,
			key: source.history.state && source.history.state.key || "initial"
		};
	};
	var createHistory = function createHistory(source, options) {
		var listeners = [];
		var location = getLocation(source);
		var transitioning = false;
		var resolveTransition = function resolveTransition() {};
		return {
			get location() {
				return location;
			},
			get transitioning() {
				return transitioning;
			},
			_onTransitionComplete: function _onTransitionComplete() {
				transitioning = false;
				resolveTransition();
			},
			listen: function listen(listener) {
				listeners.push(listener);
				var popstateListener = function popstateListener() {
					location = getLocation(source);
					listener({
						location,
						action: "POP"
					});
				};
				source.addEventListener("popstate", popstateListener);
				return function() {
					source.removeEventListener("popstate", popstateListener);
					listeners = listeners.filter(function(fn) {
						return fn !== listener;
					});
				};
			},
			navigate: function navigate(to) {
				var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
				var state = _ref.state;
				var _ref$replace = _ref.replace;
				var replace = _ref$replace === void 0 ? false : _ref$replace;
				if (typeof to === "number") source.history.go(to);
				else {
					state = _extends$1({}, state, { key: Date.now() + "" });
					try {
						if (transitioning || replace) source.history.replaceState(state, null, to);
						else source.history.pushState(state, null, to);
					} catch (e) {
						source.location[replace ? "replace" : "assign"](to);
					}
				}
				location = getLocation(source);
				transitioning = true;
				var transition = new Promise(function(res) {
					return resolveTransition = res;
				});
				listeners.forEach(function(listener) {
					return listener({
						location,
						action: "PUSH"
					});
				});
				return transition;
			}
		};
	};
	var createMemorySource = function createMemorySource() {
		var initialPath = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "/";
		var searchIndex = initialPath.indexOf("?");
		var initialLocation = {
			pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
			search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
		};
		var index = 0;
		var stack = [initialLocation];
		var states = [null];
		return {
			get location() {
				return stack[index];
			},
			addEventListener: function addEventListener(name, fn) {},
			removeEventListener: function removeEventListener(name, fn) {},
			history: {
				get entries() {
					return stack;
				},
				get index() {
					return index;
				},
				get state() {
					return states[index];
				},
				pushState: function pushState(state, _, uri) {
					var _uri$split = uri.split("?");
					var pathname = _uri$split[0];
					var _uri$split$ = _uri$split[1];
					var search = _uri$split$ === void 0 ? "" : _uri$split$;
					index++;
					stack.push({
						pathname,
						search: search.length ? "?" + search : search
					});
					states.push(state);
				},
				replaceState: function replaceState(state, _, uri) {
					var _uri$split2 = uri.split("?");
					var pathname = _uri$split2[0];
					var _uri$split2$ = _uri$split2[1];
					stack[index] = {
						pathname,
						search: _uri$split2$ === void 0 ? "" : _uri$split2$
					};
					states[index] = state;
				},
				go: function go(to) {
					var newIndex = index + to;
					if (newIndex < 0 || newIndex > states.length - 1) return;
					index = newIndex;
				}
			}
		};
	};
	var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
	var globalHistory = createHistory(function getSource() {
		return canUseDOM ? window : createMemorySource();
	}());
	var navigate = globalHistory.navigate;

//#endregion
//#region node_modules/@reach/router/es/index.js
	var _extends = Object.assign || function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	function _objectWithoutProperties$1(obj, keys) {
		var target = {};
		for (var i in obj) {
			if (keys.indexOf(i) >= 0) continue;
			if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
			target[i] = obj[i];
		}
		return target;
	}
	__name(_objectWithoutProperties$1, "_objectWithoutProperties");
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
	}
	function _possibleConstructorReturn(self, call) {
		if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
			value: subClass,
			enumerable: false,
			writable: true,
			configurable: true
		} });
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	var createNamedContext = function createNamedContext(name, defaultValue) {
		var Ctx = (0, import_lib.default)(defaultValue);
		Ctx.displayName = name;
		return Ctx;
	};
	var LocationContext = createNamedContext("Location");
	var Location = function Location(_ref) {
		var children = _ref.children;
		return react.default.createElement(LocationContext.Consumer, null, function(context) {
			return context ? children(context) : react.default.createElement(LocationProvider, null, children);
		});
	};
	var LocationProvider = function(_React$Component) {
		_inherits(LocationProvider, _React$Component);
		function LocationProvider() {
			var _temp;
			var _this;
			var _ret;
			_classCallCheck(this, LocationProvider);
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
				context: _this.getContext(),
				refs: { unlisten: null }
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}
		LocationProvider.prototype.getContext = function getContext() {
			var _props$history = this.props.history;
			return {
				navigate: _props$history.navigate,
				location: _props$history.location
			};
		};
		LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
			if (isRedirect(error)) {
				var _navigate = this.props.history.navigate;
				_navigate(error.uri, { replace: true });
			} else throw error;
		};
		LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
			if (prevState.context.location !== this.state.context.location) this.props.history._onTransitionComplete();
		};
		LocationProvider.prototype.componentDidMount = function componentDidMount() {
			var _this2 = this;
			var refs = this.state.refs;
			var history = this.props.history;
			history._onTransitionComplete();
			refs.unlisten = history.listen(function() {
				Promise.resolve().then(function() {
					requestAnimationFrame(function() {
						if (!_this2.unmounted) _this2.setState(function() {
							return { context: _this2.getContext() };
						});
					});
				});
			});
		};
		LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
			var refs = this.state.refs;
			this.unmounted = true;
			refs.unlisten();
		};
		LocationProvider.prototype.render = function render() {
			var context = this.state.context;
			var children = this.props.children;
			return react.default.createElement(LocationContext.Provider, { value: context }, typeof children === "function" ? children(context) : children || null);
		};
		return LocationProvider;
	}(react.default.Component);
	LocationProvider.defaultProps = { history: globalHistory };
	LocationProvider.propTypes = { history: import_prop_types.default.object.isRequired };
	var BaseContext = createNamedContext("Base", {
		baseuri: "/",
		basepath: "/"
	});
	var Router = function Router(props) {
		return react.default.createElement(BaseContext.Consumer, null, function(baseContext) {
			return react.default.createElement(Location, null, function(locationContext) {
				return react.default.createElement(RouterImpl, _extends({}, baseContext, locationContext, props));
			});
		});
	};
	var RouterImpl = function(_React$PureComponent) {
		_inherits(RouterImpl, _React$PureComponent);
		function RouterImpl() {
			_classCallCheck(this, RouterImpl);
			return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
		}
		RouterImpl.prototype.render = function render() {
			var _props = this.props;
			var location = _props.location;
			var _navigate2 = _props.navigate;
			var basepath = _props.basepath;
			var primary = _props.primary;
			var children = _props.children;
			_props.baseuri;
			var _props$component = _props.component;
			var component = _props$component === void 0 ? "div" : _props$component;
			var domProps = _objectWithoutProperties$1(_props, [
				"location",
				"navigate",
				"basepath",
				"primary",
				"children",
				"baseuri",
				"component"
			]);
			var routes = react.default.Children.toArray(children).reduce(function(array, child) {
				var routes = createRoute(basepath)(child);
				return array.concat(routes);
			}, []);
			var pathname = location.pathname;
			var match = pick(routes, pathname);
			if (match) {
				var params = match.params;
				var uri = match.uri;
				var route = match.route;
				var element = match.route.value;
				basepath = route.default ? basepath : route.path.replace(/\*$/, "");
				var props = _extends({}, params, {
					uri,
					location,
					navigate: function navigate(to, options) {
						return _navigate2(resolve(to, uri), options);
					}
				});
				var clone = react.default.cloneElement(element, props, element.props.children ? react.default.createElement(Router, {
					location,
					primary
				}, element.props.children) : void 0);
				var FocusWrapper = primary ? FocusHandler : component;
				var wrapperProps = primary ? _extends({
					uri,
					location,
					component
				}, domProps) : domProps;
				return react.default.createElement(BaseContext.Provider, { value: {
					baseuri: uri,
					basepath
				} }, react.default.createElement(FocusWrapper, wrapperProps, clone));
			} else return null;
		};
		return RouterImpl;
	}(react.default.PureComponent);
	RouterImpl.defaultProps = { primary: true };
	var FocusContext = createNamedContext("Focus");
	var FocusHandler = function FocusHandler(_ref3) {
		var uri = _ref3.uri;
		var location = _ref3.location;
		var component = _ref3.component;
		var domProps = _objectWithoutProperties$1(_ref3, [
			"uri",
			"location",
			"component"
		]);
		return react.default.createElement(FocusContext.Consumer, null, function(requestFocus) {
			return react.default.createElement(FocusHandlerImpl, _extends({}, domProps, {
				component,
				requestFocus,
				uri,
				location
			}));
		});
	};
	var initialRender = true;
	var focusHandlerCount = 0;
	var FocusHandlerImpl = function(_React$Component2) {
		_inherits(FocusHandlerImpl, _React$Component2);
		function FocusHandlerImpl() {
			var _temp2;
			var _this4;
			var _ret2;
			_classCallCheck(this, FocusHandlerImpl);
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
			return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function(node) {
				if (!_this4.state.shouldFocus && node) node.focus();
			}, _temp2), _possibleConstructorReturn(_this4, _ret2);
		}
		FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
			if (prevState.uri == null) return _extends({ shouldFocus: true }, nextProps);
			else {
				var myURIChanged = nextProps.uri !== prevState.uri;
				var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
				return _extends({ shouldFocus: myURIChanged || navigatedUpToMe }, nextProps);
			}
		};
		FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
			focusHandlerCount++;
			this.focus();
		};
		FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
			focusHandlerCount--;
			if (focusHandlerCount === 0) initialRender = true;
		};
		FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
			if (prevProps.location !== this.props.location && this.state.shouldFocus) this.focus();
		};
		FocusHandlerImpl.prototype.focus = function focus() {
			var requestFocus = this.props.requestFocus;
			if (requestFocus) requestFocus(this.node);
			else if (initialRender) initialRender = false;
			else if (this.node) {
				if (!this.node.contains(document.activeElement)) this.node.focus();
			}
		};
		FocusHandlerImpl.prototype.render = function render() {
			var _this5 = this;
			var _props2 = this.props;
			_props2.children;
			var style = _props2.style;
			_props2.requestFocus;
			var _props2$component = _props2.component;
			var Comp = _props2$component === void 0 ? "div" : _props2$component;
			_props2.uri;
			_props2.location;
			var domProps = _objectWithoutProperties$1(_props2, [
				"children",
				"style",
				"requestFocus",
				"component",
				"uri",
				"location"
			]);
			return react.default.createElement(Comp, _extends({
				style: _extends({ outline: "none" }, style),
				tabIndex: "-1",
				ref: function ref(n) {
					return _this5.node = n;
				}
			}, domProps), react.default.createElement(FocusContext.Provider, { value: this.requestFocus }, this.props.children));
		};
		return FocusHandlerImpl;
	}(react.default.Component);
	polyfill(FocusHandlerImpl);
	var k = function k() {};
	var forwardRef$1 = react.default.forwardRef;
	if (typeof forwardRef$1 === "undefined") forwardRef$1 = function forwardRef(C) {
		return C;
	};
	var Link = forwardRef$1(function(_ref4, ref) {
		var innerRef = _ref4.innerRef;
		var props = _objectWithoutProperties$1(_ref4, ["innerRef"]);
		return react.default.createElement(BaseContext.Consumer, null, function(_ref5) {
			_ref5.basepath;
			var baseuri = _ref5.baseuri;
			return react.default.createElement(Location, null, function(_ref6) {
				var location = _ref6.location;
				var navigate = _ref6.navigate;
				var to = props.to;
				var state = props.state;
				var replace = props.replace;
				var _props$getProps = props.getProps;
				var getProps = _props$getProps === void 0 ? k : _props$getProps;
				var anchorProps = _objectWithoutProperties$1(props, [
					"to",
					"state",
					"replace",
					"getProps"
				]);
				var href = resolve(to, baseuri);
				var encodedHref = encodeURI(href);
				var isCurrent = location.pathname === encodedHref;
				var isPartiallyCurrent = startsWith(location.pathname, encodedHref);
				return react.default.createElement("a", _extends({
					ref: ref || innerRef,
					"aria-current": isCurrent ? "page" : void 0
				}, anchorProps, getProps({
					isCurrent,
					isPartiallyCurrent,
					href,
					location
				}), {
					href,
					onClick: function onClick(event) {
						if (anchorProps.onClick) anchorProps.onClick(event);
						if (shouldNavigate(event)) {
							event.preventDefault();
							var shouldReplace = replace;
							if (typeof replace !== "boolean" && isCurrent) {
								var _location$state = _extends({}, location.state);
								_location$state.key;
								var restState = _objectWithoutProperties$1(_location$state, ["key"]);
								shouldReplace = shallowCompare(_extends({}, state), restState);
							}
							navigate(href, {
								state,
								replace: shouldReplace
							});
						}
					}
				}));
			});
		});
	});
	Link.displayName = "Link";
	Link.propTypes = { to: import_prop_types.default.string.isRequired };
	function RedirectRequest(uri) {
		this.uri = uri;
	}
	var isRedirect = function isRedirect(o) {
		return o instanceof RedirectRequest;
	};
	var redirectTo = function redirectTo(to) {
		throw new RedirectRequest(to);
	};
	var RedirectImpl = function(_React$Component3) {
		_inherits(RedirectImpl, _React$Component3);
		function RedirectImpl() {
			_classCallCheck(this, RedirectImpl);
			return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
		}
		RedirectImpl.prototype.componentDidMount = function componentDidMount() {
			var _props3 = this.props;
			var navigate = _props3.navigate;
			var to = _props3.to;
			_props3.from;
			var _props3$replace = _props3.replace;
			var replace = _props3$replace === void 0 ? true : _props3$replace;
			var state = _props3.state;
			_props3.noThrow;
			var baseuri = _props3.baseuri;
			var props = _objectWithoutProperties$1(_props3, [
				"navigate",
				"to",
				"from",
				"replace",
				"state",
				"noThrow",
				"baseuri"
			]);
			Promise.resolve().then(function() {
				navigate(insertParams(resolve(to, baseuri), props), {
					replace,
					state
				});
			});
		};
		RedirectImpl.prototype.render = function render() {
			var _props4 = this.props;
			_props4.navigate;
			var to = _props4.to;
			_props4.from;
			_props4.replace;
			_props4.state;
			var noThrow = _props4.noThrow;
			var baseuri = _props4.baseuri;
			var props = _objectWithoutProperties$1(_props4, [
				"navigate",
				"to",
				"from",
				"replace",
				"state",
				"noThrow",
				"baseuri"
			]);
			var resolvedTo = resolve(to, baseuri);
			if (!noThrow) redirectTo(insertParams(resolvedTo, props));
			return null;
		};
		return RedirectImpl;
	}(react.default.Component);
	var Redirect = function Redirect(props) {
		return react.default.createElement(BaseContext.Consumer, null, function(_ref7) {
			var baseuri = _ref7.baseuri;
			return react.default.createElement(Location, null, function(locationContext) {
				return react.default.createElement(RedirectImpl, _extends({}, locationContext, { baseuri }, props));
			});
		});
	};
	Redirect.propTypes = {
		from: import_prop_types.default.string,
		to: import_prop_types.default.string.isRequired
	};
	var Match = function Match(_ref8) {
		var path = _ref8.path;
		var children = _ref8.children;
		return react.default.createElement(BaseContext.Consumer, null, function(_ref9) {
			var baseuri = _ref9.baseuri;
			return react.default.createElement(Location, null, function(_ref10) {
				var navigate = _ref10.navigate;
				var location = _ref10.location;
				var result = match(resolve(path, baseuri), location.pathname);
				return children({
					navigate,
					location,
					match: result ? _extends({}, result.params, {
						uri: result.uri,
						path
					}) : null
				});
			});
		});
	};
	var stripSlashes = function stripSlashes(str) {
		return str.replace(/(^\/+|\/+$)/g, "");
	};
	var createRoute = function createRoute(basepath) {
		return function(element) {
			if (!element) return null;
			if (element.type === react.default.Fragment && element.props.children) return react.default.Children.map(element.props.children, createRoute(basepath));
			!(element.props.path || element.props.default || element.type === Redirect) && (0, import_browser.default)(false, "<Router>: Children of <Router> must have a `path` or `default` prop, or be a `<Redirect>`. None found on element type `" + element.type + "`");
			element.type === Redirect && (!element.props.from || !element.props.to) && (0, import_browser.default)(false, "<Redirect from=\"" + element.props.from + "\" to=\"" + element.props.to + "\"/> requires both \"from\" and \"to\" props when inside a <Router>.");
			element.type === Redirect && !validateRedirect(element.props.from, element.props.to) && (0, import_browser.default)(false, "<Redirect from=\"" + element.props.from + " to=\"" + element.props.to + "\"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.");
			if (element.props.default) return {
				value: element,
				default: true
			};
			var elementPath = element.type === Redirect ? element.props.from : element.props.path;
			var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);
			return {
				value: element,
				default: element.props.default,
				path: element.props.children ? stripSlashes(path) + "/*" : path
			};
		};
	};
	var shouldNavigate = function shouldNavigate(event) {
		return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	};

//#endregion
//#region app/assets/js/ui/popover-dialog/popover-dialog.js
	function PopoverDialog(props) {
		var targetRef = props.targetRef;
		var offsetTop = props.offsetTop;
		var offsetLeft = props.offsetLeft;
		var wrapperClass = props.wrapperClass;
		var trigger = props.trigger;
		var hideAfter = props.hideAfter;
		var popoverRef = (0, react.useCallback)(function(popoverEl) {
			var target = targetRef === null || targetRef === void 0 ? void 0 : targetRef.current;
			if (!target || !popoverEl) return;
			/**
			* Show Popover
			*/
			var showPopover = function showPopover() {
				popoverEl.style.display = "block";
				popoverEl.setAttribute("aria-expanded", true);
				var targetRect = target.getBoundingClientRect();
				var popoverRect = popoverEl.getBoundingClientRect();
				var widthDifference = popoverRect.width - targetRect.width;
				popoverEl.style.top = targetRect.bottom + offsetTop + "px";
				popoverEl.style.left = targetRect.left - widthDifference / 2 - offsetLeft + "px";
				popoverEl.style.setProperty("--popover-arrow-offset-end", (popoverRect.width - 16) / 2 + "px");
			};
			/**
			* Hide Popover
			*/
			var hidePopover = function hidePopover() {
				popoverEl.style.display = "none";
				popoverEl.setAttribute("aria-expanded", false);
			};
			/**
			* Handle the Popover's hover functionality
			*/
			var handlePopoverHover = function handlePopoverHover() {
				var hideOnMouseOut = true;
				var timeOut = null;
				target.addEventListener("mouseover", function() {
					hideOnMouseOut = true;
					showPopover();
				});
				target.addEventListener("mouseleave", function() {
					timeOut = setTimeout(function() {
						if (hideOnMouseOut) {
							if ("block" === popoverEl.style.display) hidePopover();
						}
					}, hideAfter);
				});
				popoverEl.addEventListener("mouseover", function() {
					hideOnMouseOut = false;
					if (timeOut) {
						clearTimeout(timeOut);
						timeOut = null;
					}
				});
				popoverEl.addEventListener("mouseleave", function() {
					timeOut = setTimeout(function() {
						if (hideOnMouseOut) {
							if ("block" === popoverEl.style.display) hidePopover();
						}
					}, hideAfter);
					hideOnMouseOut = true;
				});
			};
			/**
			* Handle the Popover's click functionality
			*/
			var handlePopoverClick = function handlePopoverClick() {
				var popoverIsActive = false;
				target.addEventListener("click", function(e) {
					e.preventDefault();
					e.stopPropagation();
					if (popoverIsActive) {
						hidePopover();
						popoverIsActive = false;
					} else {
						showPopover();
						popoverIsActive = true;
					}
				});
				popoverEl.addEventListener("click", function(e) {
					e.stopPropagation();
				});
				document.body.addEventListener("click", function() {
					if (popoverIsActive) {
						hidePopover();
						popoverIsActive = false;
					}
				});
			};
			if ("hover" === trigger) handlePopoverHover();
			else if ("click" === trigger) handlePopoverClick();
		}, [targetRef]);
		var wrapperClasses = "e-app__popover";
		if (wrapperClass) wrapperClasses += " " + wrapperClass;
		return /*#__PURE__*/ react.default.createElement("div", {
			className: wrapperClasses,
			ref: popoverRef
		}, props.children);
	}
	PopoverDialog.propTypes = {
		targetRef: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.shape({ current: import_prop_types.default.any })]).isRequired,
		trigger: import_prop_types.default.string,
		direction: import_prop_types.default.string,
		offsetTop: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]),
		offsetLeft: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]),
		wrapperClass: import_prop_types.default.string,
		children: import_prop_types.default.any,
		hideAfter: import_prop_types.default.number
	};
	PopoverDialog.defaultProps = {
		direction: "bottom",
		trigger: "hover",
		offsetTop: 10,
		offsetLeft: 0,
		hideAfter: 300
	};

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
	function _objectWithoutPropertiesLoose(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (-1 !== e.indexOf(n)) continue;
			t[n] = r[n];
		}
		return t;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
	function _objectWithoutProperties(e, t) {
		if (null == e) return {};
		var o;
		var r;
		var i = _objectWithoutPropertiesLoose(e, t);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
		}
		return i;
	}

//#endregion
//#region app/assets/js/ui/atoms/icon.js
	var _excluded = ["className"];
	var Icon = (0, react.forwardRef)(function(props, ref) {
		var className = props.className;
		var rest = _objectWithoutProperties(props, _excluded);
		return /*#__PURE__*/ react.default.createElement("i", _extends$2({
			ref,
			className: "eps-icon ".concat(className)
		}, rest));
	});
	Icon.propTypes = { className: import_prop_types.default.string.isRequired };
	Icon.defaultProps = { className: "" };

//#endregion
//#region app/assets/js/ui/molecules/button.js
	function _callSuper$5(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn$1(t, _isNativeReflectConstruct$5() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
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
	var Button$1 = /*#__PURE__*/ function(_React$Component) {
		function Button() {
			_classCallCheck$1(this, Button);
			return _callSuper$5(this, Button, arguments);
		}
		_inherits$1(Button, _React$Component);
		return _createClass(Button, [
			{
				key: "getCssId",
				value: function getCssId() {
					return this.props.id;
				}
			},
			{
				key: "getClassName",
				value: function getClassName() {
					var baseClassName = "eps-button";
					return [baseClassName, this.props.className].concat(this.getStylePropsClasses(baseClassName)).filter(function(classItem) {
						return "" !== classItem;
					}).join(" ");
				}
			},
			{
				key: "getStylePropsClasses",
				value: function getStylePropsClasses(baseClassName) {
					var _this = this;
					var styleProps = [
						"color",
						"size",
						"variant"
					];
					var stylePropClasses = [];
					styleProps.forEach(function(styleProp) {
						var stylePropValue = _this.props[styleProp];
						if (stylePropValue) stylePropClasses.push(baseClassName + "--" + stylePropValue);
					});
					return stylePropClasses;
				}
			},
			{
				key: "getIcon",
				value: function getIcon() {
					if (this.props.icon) {
						var iconRef = react.default.createRef(null);
						var tooltip = this.props.tooltip || this.props.text;
						var icon = /*#__PURE__*/ react.default.createElement(Icon, {
							ref: iconRef,
							className: this.props.icon,
							"aria-hidden": "true"
						});
						var screenReaderText = "";
						if (this.props.hideText) screenReaderText = /*#__PURE__*/ react.default.createElement("span", { className: "sr-only" }, tooltip);
						return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, icon, screenReaderText, this.props.tooltip && /*#__PURE__*/ react.default.createElement(PopoverDialog, {
							targetRef: iconRef,
							wrapperClass: "e-kit-library__tooltip"
						}, this.props.tooltip));
					}
					return "";
				}
			},
			{
				key: "getText",
				value: function getText() {
					return this.props.hideText ? "" : /*#__PURE__*/ react.default.createElement("span", null, this.props.text);
				}
			},
			{
				key: "render",
				value: function render() {
					var attributes = {};
					var id = this.getCssId();
					var className = this.getClassName();
					if (id) attributes.id = id;
					if (className) attributes.className = className;
					if (this.props.onClick) attributes.onClick = this.props.onClick;
					if (this.props.rel) attributes.rel = this.props.rel;
					if (this.props.elRef) attributes.ref = this.props.elRef;
					var buttonContent = /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, this.getIcon(), this.getText());
					if (this.props.url) {
						if (0 === this.props.url.indexOf("http")) return /*#__PURE__*/ react.default.createElement("a", _extends$2({
							href: this.props.url,
							target: this.props.target
						}, attributes), buttonContent);
						attributes.getProps = function(props) {
							if (props.isCurrent) attributes.className += " active";
							return { className: attributes.className };
						};
						return /*#__PURE__*/ react.default.createElement(LocationProvider, { history: router.appHistory }, /*#__PURE__*/ react.default.createElement(Link, _extends$2({ to: this.props.url }, attributes), buttonContent));
					}
					return /*#__PURE__*/ react.default.createElement("div", attributes, buttonContent);
				}
			}
		]);
	}(react.default.Component);
	_defineProperty(Button$1, "propTypes", {
		text: import_prop_types.default.string.isRequired,
		hideText: import_prop_types.default.bool,
		icon: import_prop_types.default.string,
		tooltip: import_prop_types.default.string,
		id: import_prop_types.default.string,
		className: import_prop_types.default.string,
		url: import_prop_types.default.string,
		onClick: import_prop_types.default.func,
		variant: import_prop_types.default.oneOf([
			"contained",
			"underlined",
			"outlined",
			""
		]),
		color: import_prop_types.default.oneOf([
			"primary",
			"secondary",
			"cta",
			"link",
			"disabled"
		]),
		size: import_prop_types.default.oneOf([
			"sm",
			"md",
			"lg"
		]),
		target: import_prop_types.default.string,
		rel: import_prop_types.default.string,
		elRef: import_prop_types.default.object
	});
	_defineProperty(Button$1, "defaultProps", {
		id: "",
		className: "",
		variant: "",
		target: "_parent"
	});

//#endregion
//#region app/assets/js/ui/molecules/add-new-button.js
	function ownKeys$7(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	__name(ownKeys$7, "ownKeys");
	function _objectSpread$7(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$7(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	__name(_objectSpread$7, "_objectSpread");
	function _callSuper$4(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn$1(t, _isNativeReflectConstruct$4() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
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
	var AddNewButton = /*#__PURE__*/ function(_Button) {
		function AddNewButton() {
			_classCallCheck$1(this, AddNewButton);
			return _callSuper$4(this, AddNewButton, arguments);
		}
		_inherits$1(AddNewButton, _Button);
		return _createClass(AddNewButton, [{
			key: "getClassName",
			value: function getClassName() {
				var className = this.props.className;
				if (this.props.size) className += " eps-add-new-button--" + this.props.size;
				return className;
			}
		}]);
	}(Button$1);
	_defineProperty(AddNewButton, "propTypes", _objectSpread$7(_objectSpread$7({}, Button$1.propTypes), {}, {
		text: import_prop_types.default.string,
		size: import_prop_types.default.string
	}));
	_defineProperty(AddNewButton, "defaultProps", _objectSpread$7(_objectSpread$7({}, Button$1.defaultProps), {}, {
		className: "eps-add-new-button",
		text: (0, _wordpress_i18n.__)("Add New", "elementor"),
		icon: "eicon-plus"
	}));

//#endregion
//#region app/assets/js/utils/utils.js
	var pxToRem = function pxToRem(pixels) {
		if (!pixels) return;
		else if ("string" !== typeof pixels) pixels = pixels.toString();
		return pixels.split(" ").map(function(value) {
			return "".concat(value * .0625, "rem");
		}).join(" ");
	};
	var arrayToClassName = function arrayToClassName(array, action) {
		return array.filter(function(item) {
			return "object" === _typeof(item) ? Object.entries(item)[0][1] : item;
		}).map(function(item) {
			var value = "object" === _typeof(item) ? Object.entries(item)[0][0] : item;
			return action ? action(value) : value;
		}).join(" ");
	};
	var isOneOf = function isOneOf(filetype, filetypeOptions) {
		return filetypeOptions.some(function(type) {
			return filetype.includes(type);
		});
	};

//#endregion
//#region app/assets/js/ui/atoms/box.js
	function Box(props) {
		var baseClassName = "eps-box";
		var classes = [baseClassName, props.className];
		var style = {};
		if (Object.prototype.hasOwnProperty.call(props, "padding")) {
			style["--eps-box-padding"] = pxToRem(props.padding);
			classes.push(baseClassName + "--padding");
		}
		return /*#__PURE__*/ react.default.createElement("div", {
			style,
			className: arrayToClassName(classes)
		}, props.children);
	}
	Box.propTypes = {
		className: import_prop_types.default.string,
		padding: import_prop_types.default.string,
		children: import_prop_types.default.oneOfType([
			import_prop_types.default.string,
			import_prop_types.default.object,
			import_prop_types.default.arrayOf(import_prop_types.default.object)
		]).isRequired
	};
	Box.defaultProps = { className: "" };

//#endregion
//#region app/assets/js/ui/card/card-header.js
	function CardHeader(props) {
		var classNameBase = "eps-card__header";
		var classes = [classNameBase, props.className];
		var style = {};
		if (Object.prototype.hasOwnProperty.call(props, "padding")) {
			style["--eps-card-header-padding"] = pxToRem(props.padding);
			classes.push(classNameBase + "--padding");
		}
		return /*#__PURE__*/ react.default.createElement("header", {
			className: arrayToClassName(classes),
			style
		}, props.children);
	}
	CardHeader.propTypes = {
		className: import_prop_types.default.string,
		padding: import_prop_types.default.string,
		passive: import_prop_types.default.bool,
		active: import_prop_types.default.bool,
		children: import_prop_types.default.any.isRequired
	};
	CardHeader.defaultProps = { className: "" };

//#endregion
//#region app/assets/js/ui/card/card-body.js
	function CardBody(props) {
		var classNameBase = "eps-card__body";
		var classes = [classNameBase, props.className];
		var style = {};
		if (Object.prototype.hasOwnProperty.call(props, "padding")) {
			style["--eps-card-body-padding"] = pxToRem(props.padding);
			classes.push(classNameBase + "--padding");
		}
		return /*#__PURE__*/ react.default.createElement("main", {
			className: arrayToClassName(classes),
			style
		}, props.children);
	}
	CardBody.propTypes = {
		className: import_prop_types.default.string,
		padding: import_prop_types.default.string,
		passive: import_prop_types.default.bool,
		active: import_prop_types.default.bool,
		children: import_prop_types.default.any.isRequired
	};
	CardBody.defaultProps = { className: "" };

//#endregion
//#region app/assets/js/ui/card/card-image.js
	function CardImage(props) {
		var image = /*#__PURE__*/ react.default.createElement("img", {
			src: props.src,
			alt: props.alt,
			className: "eps-card__image",
			loading: "lazy",
			onError: props.onError
		});
		return /*#__PURE__*/ react.default.createElement("figure", { className: "eps-card__figure ".concat(props.className) }, image, props.children);
	}
	CardImage.propTypes = {
		className: import_prop_types.default.string,
		src: import_prop_types.default.string.isRequired,
		alt: import_prop_types.default.string.isRequired,
		children: import_prop_types.default.any,
		onError: import_prop_types.default.func
	};
	CardImage.defaultProps = {
		className: "",
		onError: function onError() {}
	};

//#endregion
//#region app/assets/js/ui/card/card-overlay.js
	function CardOverlay(props) {
		return /*#__PURE__*/ react.default.createElement("div", { className: "eps-card__image-overlay ".concat(props.className) }, props.children);
	}
	CardOverlay.propTypes = {
		className: import_prop_types.default.string,
		children: import_prop_types.default.object.isRequired
	};
	CardOverlay.defaultProps = { className: "" };

//#endregion
//#region app/assets/js/ui/card/card-footer.js
	function CardFooter(props) {
		var classNameBase = "eps-card__footer";
		var classes = [classNameBase, props.className];
		var style = {};
		if (Object.prototype.hasOwnProperty.call(props, "padding")) {
			style["--eps-card-footer-padding"] = pxToRem(props.padding);
			classes.push(classNameBase + "--padding");
		}
		return /*#__PURE__*/ react.default.createElement("footer", {
			className: arrayToClassName(classes),
			style
		}, props.children);
	}
	CardFooter.propTypes = {
		className: import_prop_types.default.string,
		padding: import_prop_types.default.string,
		passive: import_prop_types.default.bool,
		active: import_prop_types.default.bool,
		children: import_prop_types.default.object.isRequired
	};
	CardFooter.defaultProps = { className: "" };

//#endregion
//#region app/assets/js/ui/card/card-headline.js
	function CardHeadline(props) {
		var classes = ["eps-card__headline", props.className];
		return /*#__PURE__*/ react.default.createElement("h4", { className: arrayToClassName(classes) }, props.children);
	}
	CardHeadline.propTypes = {
		className: import_prop_types.default.string,
		children: import_prop_types.default.any.isRequired
	};
	CardHeadline.defaultProps = { className: "" };

//#endregion
//#region app/assets/js/ui/card/card-divider.js
	function CardDivider(props) {
		var classes = ["eps-card__divider", props.className];
		return /*#__PURE__*/ react.default.createElement("hr", { className: arrayToClassName(classes) });
	}
	CardDivider.propTypes = { className: import_prop_types.default.string };
	CardDivider.defaultProps = { className: "" };

//#endregion
//#region app/assets/js/ui/card/card.js
	var Card = react.default.forwardRef(function(props, ref) {
		return /*#__PURE__*/ react.default.createElement("article", {
			className: "eps-card ".concat(props.className),
			ref
		}, props.children);
	});
	Card.propTypes = {
		type: import_prop_types.default.string,
		className: import_prop_types.default.string,
		children: import_prop_types.default.any
	};
	Card.defaultProps = { className: "" };
	Card.displayName = "Card";
	Card.Header = CardHeader;
	Card.Body = CardBody;
	Card.Image = CardImage;
	Card.Overlay = CardOverlay;
	Card.Footer = CardFooter;
	Card.Headline = CardHeadline;
	Card.Divider = CardDivider;

//#endregion
//#region app/assets/js/ui/atoms/checkbox.js
	function Checkbox(_ref) {
		var className = _ref.className;
		var checked = _ref.checked;
		var rounded = _ref.rounded;
		var indeterminate = _ref.indeterminate;
		var error = _ref.error;
		var disabled = _ref.disabled;
		var onChange = _ref.onChange;
		var id = _ref.id;
		var baseClassName = "eps-checkbox";
		var classes = [baseClassName, className];
		if (rounded) classes.push(baseClassName + "--rounded");
		if (indeterminate) classes.push(baseClassName + "--indeterminate");
		if (error) classes.push(baseClassName + "--error");
		return /*#__PURE__*/ react.default.createElement("input", {
			className: arrayToClassName(classes),
			type: "checkbox",
			checked,
			disabled,
			onChange,
			id
		});
	}
	Checkbox.propTypes = {
		className: import_prop_types.default.string,
		checked: import_prop_types.default.bool,
		disabled: import_prop_types.default.bool,
		indeterminate: import_prop_types.default.bool,
		rounded: import_prop_types.default.bool,
		error: import_prop_types.default.bool,
		onChange: import_prop_types.default.func,
		id: import_prop_types.default.string
	};
	Checkbox.defaultProps = {
		className: "",
		checked: null,
		disabled: false,
		indeterminate: false,
		error: false,
		onChange: function onChange() {}
	};

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
//#region app/assets/js/molecules/collapse-context.js
	var CollapseContext = react.default.createContext();

//#endregion
//#region app/assets/js/molecules/collapse-toggle.js
	function CollapseToggle(props) {
		var context = (0, react.useContext)(CollapseContext);
		var style = { "--e-app-collapse-toggle-icon-spacing": pxToRem(props.iconSpacing) };
		var classNameBase = "e-app-collapse-toggle";
		var attrs = {
			style,
			className: arrayToClassName([classNameBase, _defineProperty({}, classNameBase + "--active", props.active)])
		};
		if (props.active) attrs.onClick = function() {
			return context.toggle();
		};
		return /*#__PURE__*/ react.default.createElement("div", attrs, props.children, props.active && props.showIcon && /*#__PURE__*/ react.default.createElement("i", { className: "eicon-caret-down e-app-collapse-toggle__icon" }));
	}
	CollapseToggle.propTypes = {
		className: import_prop_types.default.string,
		iconSpacing: import_prop_types.default.number,
		showIcon: import_prop_types.default.bool,
		active: import_prop_types.default.bool,
		children: import_prop_types.default.any
	};
	CollapseToggle.defaultProps = {
		className: "",
		iconSpacing: 20,
		showIcon: true,
		active: true
	};

//#endregion
//#region app/assets/js/molecules/collapse-content.js
	function CollapseContent(props) {
		return /*#__PURE__*/ react.default.createElement("div", { className: "e-app-collapse-content" }, props.children);
	}
	CollapseContent.propTypes = {
		className: import_prop_types.default.string,
		children: import_prop_types.default.any
	};
	CollapseContent.defaultProps = { className: "" };

//#endregion
//#region app/assets/js/molecules/collapse.js
	function Collapse(props) {
		var _useState2 = _slicedToArray((0, react.useState)(props.isOpened), 2);
		var isOpened = _useState2[0];
		var setIsOpened = _useState2[1];
		var classNameBase = "e-app-collapse";
		var classes = [
			classNameBase,
			props.className,
			_defineProperty({}, classNameBase + "--opened", isOpened)
		];
		var toggle = function toggle() {
			return setIsOpened(function(prevState) {
				return !prevState;
			});
		};
		(0, react.useEffect)(function() {
			if (props.isOpened !== isOpened) setIsOpened(props.isOpened);
		}, [props.isOpened]);
		(0, react.useEffect)(function() {
			if (props.onChange) props.onChange(isOpened);
		}, [isOpened]);
		return /*#__PURE__*/ react.default.createElement(CollapseContext.Provider, { value: { toggle } }, /*#__PURE__*/ react.default.createElement("div", { className: arrayToClassName(classes) }, props.children));
	}
	Collapse.propTypes = {
		className: import_prop_types.default.string,
		isOpened: import_prop_types.default.bool,
		onChange: import_prop_types.default.func,
		children: import_prop_types.default.oneOfType([import_prop_types.default.node, import_prop_types.default.arrayOf(import_prop_types.default.node)])
	};
	Collapse.defaultProps = {
		className: "",
		isOpened: false
	};
	Collapse.Toggle = CollapseToggle;
	Collapse.Content = CollapseContent;

//#endregion
//#region app/assets/js/ui/atoms/css-grid.js
	function CssGrid(props) {
		var gridStyle = {
			"--eps-grid-columns": props.columns,
			"--eps-grid-spacing": pxToRem(props.spacing),
			"--eps-grid-col-min-width": pxToRem(props.colMinWidth),
			"--eps-grid-col-max-width": pxToRem(props.colMaxWidth)
		};
		return /*#__PURE__*/ react.default.createElement("div", {
			style: gridStyle,
			className: "eps-css-grid ".concat(props.className)
		}, props.children);
	}
	CssGrid.propTypes = {
		className: import_prop_types.default.string,
		children: import_prop_types.default.any.isRequired,
		columns: import_prop_types.default.number,
		spacing: import_prop_types.default.number,
		colMinWidth: import_prop_types.default.number,
		colMaxWidth: import_prop_types.default.number
	};
	CssGrid.defaultProps = {
		spacing: 24,
		className: ""
	};

//#endregion
//#region app/assets/js/ui/dialog/dialog-wrapper.js
	function DialogWrapper(props) {
		var WrapperTag = "div";
		if (props.onSubmit) WrapperTag = "form";
		return /*#__PURE__*/ react.default.createElement("section", { className: "eps-modal__overlay" }, /*#__PURE__*/ react.default.createElement(WrapperTag, {
			className: "eps-modal eps-dialog",
			onSubmit: props.onSubmit
		}, props.onClose && /*#__PURE__*/ react.default.createElement(Button$1, {
			onClick: props.onClose,
			text: (0, _wordpress_i18n.__)("Close", "elementor"),
			hideText: true,
			icon: "eicon-close",
			className: "eps-dialog__close-button"
		}), props.children));
	}
	DialogWrapper.propTypes = {
		onClose: import_prop_types.default.func,
		onSubmit: import_prop_types.default.func,
		children: import_prop_types.default.any
	};

//#endregion
//#region app/assets/js/ui/dialog/dialog-content.js
	function DialogContent(props) {
		return /*#__PURE__*/ react.default.createElement("div", { className: "eps-dialog__content" }, props.children);
	}
	DialogContent.propTypes = { children: import_prop_types.default.any };

//#endregion
//#region app/assets/js/ui/atoms/heading.js
	function Heading(props) {
		var baseClassName = "eps";
		var classes = [props.className];
		if (props.variant) classes.push(baseClassName + "-" + props.variant);
		return /*#__PURE__*/ react.default.createElement(function Element() {
			return react.default.createElement(props.tag, { className: arrayToClassName(classes) }, props.children);
		}, null);
	}
	Heading.propTypes = {
		className: import_prop_types.default.string,
		children: import_prop_types.default.oneOfType([
			import_prop_types.default.string,
			import_prop_types.default.object,
			import_prop_types.default.arrayOf(import_prop_types.default.object)
		]).isRequired,
		tag: import_prop_types.default.oneOf([
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6"
		]),
		variant: import_prop_types.default.oneOf([
			"display-1",
			"display-2",
			"display-3",
			"display-4",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6"
		]).isRequired
	};
	Heading.defaultProps = {
		className: "",
		tag: "h1"
	};

//#endregion
//#region app/assets/js/ui/dialog/dialog-title.js
	function ownKeys$6(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	__name(ownKeys$6, "ownKeys");
	function _objectSpread$6(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$6(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	__name(_objectSpread$6, "_objectSpread");
	function DialogTitle(props) {
		return /*#__PURE__*/ react.default.createElement(Heading, _extends$2({}, props, { className: "eps-dialog__title ".concat(props.className) }));
	}
	DialogTitle.propTypes = _objectSpread$6(_objectSpread$6({}, Heading.propTypes), {}, { className: import_prop_types.default.string });
	DialogTitle.defaultProps = _objectSpread$6(_objectSpread$6({}, Heading.propTypes), {}, {
		variant: "h3",
		tag: "h3",
		className: ""
	});

//#endregion
//#region app/assets/js/ui/atoms/text.js
	function Text(props) {
		var baseClassName = "eps";
		var classes = [props.className];
		var variant = props.variant && "md" !== props.variant ? "-" + props.variant : "";
		classes.push(baseClassName + "-text" + variant);
		return /*#__PURE__*/ react.default.createElement(function Element() {
			return react.default.createElement(props.tag, { className: arrayToClassName(classes) }, props.children);
		}, null);
	}
	Text.propTypes = {
		className: import_prop_types.default.string,
		variant: import_prop_types.default.oneOf([
			"xl",
			"lg",
			"md",
			"sm",
			"xs",
			"xxs"
		]),
		tag: import_prop_types.default.string,
		children: import_prop_types.default.any.isRequired
	};
	Text.defaultProps = {
		className: "",
		tag: "p"
	};

//#endregion
//#region app/assets/js/ui/dialog/dialog-text.js
	function ownKeys$5(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	__name(ownKeys$5, "ownKeys");
	function _objectSpread$5(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$5(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	__name(_objectSpread$5, "_objectSpread");
	function DialogText(props) {
		return /*#__PURE__*/ react.default.createElement(Text, _extends$2({ variant: "xs" }, props, { className: "eps-dialog__text ".concat(props.className) }));
	}
	DialogText.propTypes = _objectSpread$5({}, Text.propTypes);
	DialogText.defaultProps = _objectSpread$5(_objectSpread$5({}, Text.defaultProps), {}, {
		tag: "p",
		variant: "sm"
	});

//#endregion
//#region app/assets/js/ui/dialog/dialog-actions.js
	function DialogActions(props) {
		return /*#__PURE__*/ react.default.createElement("div", { className: "eps-dialog__buttons" }, props.children);
	}
	DialogActions.propTypes = { children: import_prop_types.default.any };

//#endregion
//#region app/assets/js/ui/dialog/dialog-button.js
	function ownKeys$4(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	__name(ownKeys$4, "ownKeys");
	function _objectSpread$4(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$4(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	__name(_objectSpread$4, "_objectSpread");
	function DialogButton(props) {
		return /*#__PURE__*/ react.default.createElement(Button$1, _extends$2({}, props, { className: "eps-dialog__button ".concat(props.className) }));
	}
	DialogButton.propTypes = _objectSpread$4(_objectSpread$4({}, Button$1.propTypes), {}, {
		tabIndex: import_prop_types.default.string,
		type: import_prop_types.default.string
	});
	DialogButton.defaultProps = _objectSpread$4(_objectSpread$4({}, Button$1.defaultProps), {}, {
		tabIndex: "0",
		type: "button"
	});

//#endregion
//#region app/assets/js/ui/dialog/dialog.js
	function Dialog(props) {
		return /*#__PURE__*/ react.default.createElement(DialogWrapper, {
			onSubmit: props.onSubmit,
			onClose: props.onClose
		}, /*#__PURE__*/ react.default.createElement(DialogContent, null, props.title && /*#__PURE__*/ react.default.createElement(DialogTitle, null, props.title), props.text && /*#__PURE__*/ react.default.createElement(DialogText, null, props.text), props.children), /*#__PURE__*/ react.default.createElement(DialogActions, null, /*#__PURE__*/ react.default.createElement(DialogButton, {
			key: "dismiss",
			text: props.dismissButtonText,
			onClick: props.dismissButtonOnClick,
			url: props.dismissButtonUrl,
			target: props.dismissButtonTarget,
			tabIndex: "2"
		}), /*#__PURE__*/ react.default.createElement(DialogButton, {
			key: "approve",
			text: props.approveButtonText,
			onClick: props.approveButtonOnClick,
			url: props.approveButtonUrl,
			target: props.approveButtonTarget,
			color: props.approveButtonColor,
			elRef: props.approveButtonRef,
			tabIndex: "1"
		})));
	}
	Dialog.propTypes = {
		title: import_prop_types.default.any,
		text: import_prop_types.default.any,
		children: import_prop_types.default.any,
		onSubmit: import_prop_types.default.func,
		onClose: import_prop_types.default.func,
		dismissButtonText: import_prop_types.default.string.isRequired,
		dismissButtonOnClick: import_prop_types.default.func,
		dismissButtonUrl: import_prop_types.default.string,
		dismissButtonTarget: import_prop_types.default.string,
		approveButtonText: import_prop_types.default.string.isRequired,
		approveButtonOnClick: import_prop_types.default.func,
		approveButtonUrl: import_prop_types.default.string,
		approveButtonColor: import_prop_types.default.string,
		approveButtonTarget: import_prop_types.default.string,
		approveButtonRef: import_prop_types.default.object
	};
	Dialog.defaultProps = {};
	Dialog.Wrapper = DialogWrapper;
	Dialog.Content = DialogContent;
	Dialog.Title = DialogTitle;
	Dialog.Text = DialogText;
	Dialog.Actions = DialogActions;
	Dialog.Button = DialogButton;

//#endregion
//#region app/assets/js/ui/atoms/drag-drop.js
	function DragDrop(props) {
		var _useState2 = _slicedToArray((0, react.useState)(false), 2);
		var isDragOver = _useState2[0];
		var setIsDragOver = _useState2[1];
		var getClassName = function getClassName() {
			var baseClassName = "e-app-drag-drop";
			var classes = [baseClassName, props.className];
			if (isDragOver && !props.isLoading) classes.push(baseClassName + "--drag-over");
			return arrayToClassName(classes);
		};
		var onDragDropActions = function onDragDropActions(event) {
			event.preventDefault();
			event.stopPropagation();
		};
		return /*#__PURE__*/ react.default.createElement("div", _extends$2({}, {
			onDrop: function onDrop(event) {
				onDragDropActions(event);
				setIsDragOver(false);
				if (props.onDrop) props.onDrop(event);
			},
			onDragOver: function onDragOver(event) {
				onDragDropActions(event);
				setIsDragOver(true);
				if (props.onDragOver) props.onDragOver(event);
			},
			onDragLeave: function onDragLeave(event) {
				onDragDropActions(event);
				setIsDragOver(false);
				if (props.onDragLeave) props.onDragLeave(event);
			}
		}, { className: getClassName() }), props.children);
	}
	DragDrop.propTypes = {
		className: import_prop_types.default.string,
		children: import_prop_types.default.any,
		onDrop: import_prop_types.default.func,
		onDragLeave: import_prop_types.default.func,
		onDragOver: import_prop_types.default.func,
		isLoading: import_prop_types.default.bool
	};
	DragDrop.defaultProps = { className: "" };

//#endregion
//#region app/assets/js/molecules/upload-file.js
	function UploadFile(props) {
		var fileInput = (0, react.useRef)(null);
		var classes = ["e-app-upload-file", props.className];
		var frame;
		return /*#__PURE__*/ react.default.createElement("div", { className: arrayToClassName(classes) }, /*#__PURE__*/ react.default.createElement("input", {
			ref: fileInput,
			type: "file",
			accept: props.filetypes.map(function(type) {
				return "." + type;
			}).join(", "),
			className: "e-app-upload-file__input",
			onChange: function onChange(event) {
				var file = event.target.files[0];
				if (file && isOneOf(file.type, props.filetypes)) props.onFileSelect(file, event, "browse");
				else {
					fileInput.current.value = "";
					props.onError({
						id: "file_not_allowed",
						message: (0, _wordpress_i18n.__)("This file type is not allowed", "elementor")
					});
				}
			}
		}), /*#__PURE__*/ react.default.createElement(Button$1, {
			className: "e-app-upload-file__button",
			text: props.text,
			variant: props.variant,
			color: props.color,
			size: "lg",
			hideText: props.isLoading,
			icon: props.isLoading ? "eicon-loading eicon-animation-spin" : "",
			onClick: function onClick() {
				if (props.onFileChoose) props.onFileChoose();
				if (!props.isLoading) {
					if (props.onButtonClick) props.onButtonClick();
					if ("file-explorer" === props.type) fileInput.current.click();
					else if ("wp-media" === props.type) {
						if (frame) {
							frame.open();
							return;
						}
						frame = wp.media({
							multiple: false,
							library: { type: ["image", "image/svg+xml"] }
						});
						frame.on("select", function() {
							if (props.onWpMediaSelect) props.onWpMediaSelect(frame);
						});
						frame.open();
					}
				}
			}
		}));
	}
	UploadFile.propTypes = {
		className: import_prop_types.default.string,
		type: import_prop_types.default.string,
		onWpMediaSelect: import_prop_types.default.func,
		text: import_prop_types.default.string,
		onFileSelect: import_prop_types.default.func,
		isLoading: import_prop_types.default.bool,
		filetypes: import_prop_types.default.array.isRequired,
		onError: import_prop_types.default.func,
		variant: import_prop_types.default.string,
		color: import_prop_types.default.string,
		onButtonClick: import_prop_types.default.func,
		onFileChoose: import_prop_types.default.func
	};
	UploadFile.defaultProps = {
		className: "",
		type: "file-explorer",
		text: (0, _wordpress_i18n.__)("Select File", "elementor"),
		onError: function onError() {},
		variant: "contained",
		color: "primary"
	};

//#endregion
//#region app/assets/js/organisms/drop-zone.js
	function DropZone(props) {
		var classes = ["e-app-drop-zone", props.className];
		return /*#__PURE__*/ react.default.createElement("section", { className: arrayToClassName(classes) }, /*#__PURE__*/ react.default.createElement(DragDrop, _extends$2({}, { onDrop: function onDrop(event) {
			if (!props.isLoading) {
				var file = event.dataTransfer.files[0];
				if (file && isOneOf(file.type, props.filetypes)) props.onFileSelect(file, event, "drop");
				else props.onError({
					id: "file_not_allowed",
					message: (0, _wordpress_i18n.__)("This file type is not allowed", "elementor")
				});
			}
		} }, { isLoading: props.isLoading }), props.icon && /*#__PURE__*/ react.default.createElement(Icon, { className: "e-app-drop-zone__icon ".concat(props.icon) }), props.heading && /*#__PURE__*/ react.default.createElement(Heading, { variant: "display-3" }, props.heading), props.text && /*#__PURE__*/ react.default.createElement(Text, {
			variant: "xl",
			className: "e-app-drop-zone__text"
		}, props.text), props.secondaryText && /*#__PURE__*/ react.default.createElement(Text, {
			variant: "xl",
			className: "e-app-drop-zone__secondary-text"
		}, props.secondaryText), props.showButton && /*#__PURE__*/ react.default.createElement(UploadFile, {
			isLoading: props.isLoading,
			type: props.type,
			onButtonClick: props.onButtonClick,
			onFileSelect: props.onFileSelect,
			onWpMediaSelect: function onWpMediaSelect(frame) {
				return props.onWpMediaSelect(frame);
			},
			onError: function onError(error) {
				return props.onError(error);
			},
			text: props.buttonText,
			filetypes: props.filetypes,
			variant: props.buttonVariant,
			color: props.buttonColor,
			onFileChoose: props.onFileChoose
		}), props.description && /*#__PURE__*/ react.default.createElement(Text, {
			variant: "xl",
			className: "e-app-drop-zone__description"
		}, props.description)));
	}
	DropZone.propTypes = {
		className: import_prop_types.default.string,
		children: import_prop_types.default.any,
		type: import_prop_types.default.string,
		onFileSelect: import_prop_types.default.func.isRequired,
		onWpMediaSelect: import_prop_types.default.func,
		heading: import_prop_types.default.string,
		text: import_prop_types.default.string,
		secondaryText: import_prop_types.default.string,
		buttonText: import_prop_types.default.string,
		buttonVariant: import_prop_types.default.string,
		buttonColor: import_prop_types.default.string,
		icon: import_prop_types.default.string,
		showButton: import_prop_types.default.bool,
		showIcon: import_prop_types.default.bool,
		isLoading: import_prop_types.default.bool,
		filetypes: import_prop_types.default.array.isRequired,
		onError: import_prop_types.default.func,
		description: import_prop_types.default.string,
		onButtonClick: import_prop_types.default.func,
		onFileChoose: import_prop_types.default.func
	};
	DropZone.defaultProps = {
		className: "",
		type: "file-explorer",
		icon: "eicon-library-upload",
		showButton: true,
		showIcon: true,
		onError: function onError() {}
	};

//#endregion
//#region app/assets/js/organisms/error-boundary.js
	function _callSuper$3(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn$1(t, _isNativeReflectConstruct$3() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
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
	var ErrorBoundary = /*#__PURE__*/ function(_React$Component) {
		function ErrorBoundary(props) {
			var _this;
			_classCallCheck$1(this, ErrorBoundary);
			_this = _callSuper$3(this, ErrorBoundary, [props]);
			_this.state = { hasError: null };
			return _this;
		}
		_inherits$1(ErrorBoundary, _React$Component);
		return _createClass(ErrorBoundary, [{
			key: "goBack",
			value: function goBack() {
				if (window.top !== window.self) window.top.$e.run("app/close");
				window.location = elementorAppConfig.return_url;
			}
		}, {
			key: "render",
			value: function render() {
				if (this.state.hasError) return /*#__PURE__*/ react.default.createElement(Dialog, {
					title: this.props.title,
					text: this.props.text,
					approveButtonUrl: this.props.learnMoreUrl,
					approveButtonColor: "link",
					approveButtonTarget: "_blank",
					approveButtonText: (0, _wordpress_i18n.__)("Learn More", "elementor"),
					dismissButtonText: (0, _wordpress_i18n.__)("Go Back", "elementor"),
					dismissButtonOnClick: this.goBack
				});
				return this.props.children;
			}
		}], [{
			key: "getDerivedStateFromError",
			value: function getDerivedStateFromError() {
				return { hasError: true };
			}
		}]);
	}(react.default.Component);
	_defineProperty(ErrorBoundary, "propTypes", {
		children: import_prop_types.default.any,
		title: import_prop_types.default.string,
		text: import_prop_types.default.string,
		learnMoreUrl: import_prop_types.default.string
	});
	_defineProperty(ErrorBoundary, "defaultProps", {
		title: (0, _wordpress_i18n.__)("App could not be loaded", "elementor"),
		text: (0, _wordpress_i18n.__)("We’re sorry, but something went wrong. Click on ‘Learn more’ and follow each of the steps to quickly solve it.", "elementor"),
		learnMoreUrl: "https://go.elementor.com/app-general-load-issue/"
	});

//#endregion
//#region app/assets/js/molecules/go-pro-button.js
	function GoProButton(props) {
		var classes = ["e-app-go-pro-button", props.className];
		return /*#__PURE__*/ react.default.createElement(Button$1, _extends$2({}, props, {
			className: arrayToClassName(classes),
			text: props.text
		}));
	}
	GoProButton.propTypes = {
		className: import_prop_types.default.string,
		text: import_prop_types.default.string
	};
	GoProButton.defaultProps = {
		className: "",
		variant: "outlined",
		size: "sm",
		color: "cta",
		target: "_blank",
		rel: "noopener noreferrer",
		text: (0, _wordpress_i18n.__)("Upgrade Now", "elementor")
	};

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
//#region app/assets/js/ui/grid/grid.js
	function Grid(props) {
		var propsMap = {
			direction: "--direction{{ -VALUE }}",
			justify: "--justify{{ -VALUE }}",
			alignContent: "--align-content{{ -VALUE }}",
			alignItems: "--align-items{{ -VALUE }}",
			container: "-container",
			item: "-item",
			noWrap: "-container--no-wrap",
			wrapReverse: "-container--wrap-reverse",
			zeroMinWidth: "-item--zero-min-width",
			spacing: "-container--spacing",
			xs: "-item-xs{{ -VALUE }}",
			sm: "-item-sm{{ -VALUE }}",
			md: "-item-md{{ -VALUE }}",
			lg: "-item-lg{{ -VALUE }}",
			xl: "-item-xl{{ -VALUE }}",
			xxl: "-item-xxl{{ -VALUE }}"
		};
		var getStyle = function getStyle() {
			return isValidPropValue(props.spacing) ? { "--grid-spacing-gutter": pxToRem(props.spacing) } : {};
		};
		var classes = [getBaseClassName(), props.className].concat(_toConsumableArray(getPropsClasses(propsMap, props)));
		return /*#__PURE__*/ react.default.createElement("div", {
			style: getStyle(),
			className: arrayToClassName(classes)
		}, props.children);
	}
	function getPropsClasses(propsMap, props) {
		var classes = [];
		for (var prop in propsMap) if (props[prop]) {
			var propValue = isValidPropValue(props[prop]) ? props[prop] : "";
			classes.push(getBaseClassName() + renderPropValueBrackets(propsMap[prop], propValue));
		}
		return classes;
	}
	function renderPropValueBrackets(propClass, propValue) {
		var brackets = propClass.match(/{{.*?}}/);
		if (brackets) {
			var bracketsValue = propValue ? brackets[0].replace(/[{ }]/g, "").replace(/value/i, propValue) : "";
			propClass = propClass.replace(brackets[0], bracketsValue);
		}
		return propClass;
	}
	function getBaseClassName() {
		return "eps-grid";
	}
	function isValidPropValue(propValue) {
		return propValue && "boolean" !== typeof propValue;
	}
	Grid.propTypes = {
		className: import_prop_types.default.string,
		direction: import_prop_types.default.oneOf([
			"row",
			"column",
			"row-reverse",
			"column-reverse"
		]),
		justify: import_prop_types.default.oneOf([
			"start",
			"center",
			"end",
			"space-between",
			"space-evenly",
			"space-around",
			"stretch"
		]),
		alignContent: import_prop_types.default.oneOf([
			"start",
			"center",
			"end",
			"space-between",
			"stretch"
		]),
		alignItems: import_prop_types.default.oneOf([
			"start",
			"center",
			"end",
			"baseline",
			"stretch"
		]),
		container: import_prop_types.default.bool,
		item: import_prop_types.default.bool,
		noWrap: import_prop_types.default.bool,
		wrapReverse: import_prop_types.default.bool,
		zeroMinWidth: import_prop_types.default.bool,
		spacing: import_prop_types.default.number,
		xs: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.bool]),
		sm: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.bool]),
		md: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.bool]),
		lg: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.bool]),
		xl: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.bool]),
		xxl: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.bool]),
		children: import_prop_types.default.any.isRequired
	};
	Grid.defaultProps = { className: "" };

//#endregion
//#region app/assets/js/ui/molecules/list-item.js
	function ListItem(props) {
		var baseClassName = "eps-list__item";
		var classes = [baseClassName, props.className];
		var style;
		if (Object.prototype.hasOwnProperty.call(props, "padding")) {
			style = { "--eps-list-item-padding": pxToRem(props.padding) };
			classes.push(baseClassName + "--padding");
		}
		return /*#__PURE__*/ react.default.createElement("li", {
			style,
			className: arrayToClassName(classes)
		}, props.children);
	}
	ListItem.propTypes = {
		className: import_prop_types.default.string,
		padding: import_prop_types.default.string,
		children: import_prop_types.default.any.isRequired
	};
	ListItem.defaultProps = { className: "" };

//#endregion
//#region app/assets/js/ui/molecules/list.js
	function List(props) {
		var baseClassName = "eps-list";
		var classes = [baseClassName, props.className];
		var style;
		if (Object.prototype.hasOwnProperty.call(props, "padding")) {
			style = { "--eps-list-padding": pxToRem(props.padding) };
			classes.push(baseClassName + "--padding");
		}
		if (props.separated) classes.push(baseClassName + "--separated");
		return /*#__PURE__*/ react.default.createElement("ul", {
			style,
			className: arrayToClassName(classes)
		}, props.children);
	}
	List.propTypes = {
		className: import_prop_types.default.string,
		divided: import_prop_types.default.any,
		separated: import_prop_types.default.any,
		padding: import_prop_types.default.string,
		children: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.arrayOf(import_prop_types.default.object)]).isRequired
	};
	List.defaultProps = { className: "" };
	List.Item = ListItem;

//#endregion
//#region app/assets/js/ui/menu/menu.js
	function Menu$1(props) {
		var ActionButton = function ActionButton(itemProps) {
			if (!props.actionButton) return "";
			return props.actionButton(itemProps);
		};
		if (props.promotion) return /*#__PURE__*/ react.default.createElement("nav", { className: "eps-menu" }, props.children, /*#__PURE__*/ react.default.createElement("ul", null, props.menuItems.map(function(item) {
			return /*#__PURE__*/ react.default.createElement("li", {
				key: item.type,
				className: "eps-menu-item"
			}, /*#__PURE__*/ react.default.createElement(Button$1, _extends$2({
				text: item.title,
				className: "eps-menu-item__link"
			}, item)), /*#__PURE__*/ react.default.createElement(ActionButton, item));
		})));
		return /*#__PURE__*/ react.default.createElement(LocationProvider, { history: router.appHistory }, /*#__PURE__*/ react.default.createElement("nav", { className: "eps-menu" }, props.children, /*#__PURE__*/ react.default.createElement("ul", null, props.menuItems.map(function(item) {
			return /*#__PURE__*/ react.default.createElement(Match, {
				key: item.type,
				path: item.url
			}, function(_ref) {
				var match = _ref.match;
				return /*#__PURE__*/ react.default.createElement("li", {
					key: item.type,
					className: "eps-menu-item".concat(match ? " eps-menu-item--active" : "")
				}, /*#__PURE__*/ react.default.createElement(Button$1, _extends$2({
					text: item.title,
					className: "eps-menu-item__link"
				}, item)), /*#__PURE__*/ react.default.createElement(ActionButton, item));
			});
		}))));
	}
	__name(Menu$1, "Menu");
	Menu$1.propTypes = {
		menuItems: import_prop_types.default.arrayOf(import_prop_types.default.object),
		children: import_prop_types.default.any,
		actionButton: import_prop_types.default.func,
		promotion: import_prop_types.default.bool
	};

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
//#region app/assets/js/ui/menu/menu-item.js
	function _callSuper$2(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn$1(t, _isNativeReflectConstruct$2() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
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
	function _superPropGet$1(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$1, "_superPropGet");
	var SideMenuItem = /*#__PURE__*/ function(_BaseButton) {
		function SideMenuItem() {
			_classCallCheck$1(this, SideMenuItem);
			return _callSuper$2(this, SideMenuItem, arguments);
		}
		_inherits$1(SideMenuItem, _BaseButton);
		return _createClass(SideMenuItem, [{
			key: "getCssId",
			value: function getCssId() {
				return "eps-menu-item-" + _superPropGet$1(SideMenuItem, "getCssId", this, 3)([]);
			}
		}, {
			key: "getClassName",
			value: function getClassName() {
				return "eps-menu-item " + _superPropGet$1(SideMenuItem, "getClassName", this, 3)([]);
			}
		}]);
	}(Button$1);

//#endregion
//#region app/assets/js/ui/modal/modal-section.js
	function ModalSection(props) {
		return /*#__PURE__*/ react.default.createElement("section", { className: arrayToClassName(["eps-modal__section", props.className]) }, props.children);
	}
	ModalSection.propTypes = {
		className: import_prop_types.default.string,
		children: import_prop_types.default.any
	};
	ModalSection.defaultProps = { className: "" };

//#endregion
//#region app/assets/js/ui/modal/modal-tip.js
	function ModalTip(props) {
		return /*#__PURE__*/ react.default.createElement("div", { className: arrayToClassName(["eps-modal__tip", props.className]) }, /*#__PURE__*/ react.default.createElement(Heading, {
			variant: "h3",
			tag: "h3"
		}, props.title), props.description && /*#__PURE__*/ react.default.createElement(Text, { variant: "xs" }, props.description));
	}
	ModalTip.propTypes = {
		className: import_prop_types.default.string,
		title: import_prop_types.default.string,
		description: import_prop_types.default.string
	};
	ModalTip.defaultProps = {
		className: "",
		title: (0, _wordpress_i18n.__)("Tip", "elementor")
	};

//#endregion
//#region app/assets/js/ui/modal/modal.js
	function ownKeys$3(e, r) {
		var t = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(r) {
				return Object.getOwnPropertyDescriptor(e, r).enumerable;
			})), t.push.apply(t, o);
		}
		return t;
	}
	__name(ownKeys$3, "ownKeys");
	function _objectSpread$3(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = null != arguments[r] ? arguments[r] : {};
			r % 2 ? ownKeys$3(Object(t), !0).forEach(function(r) {
				_defineProperty(e, r, t[r]);
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r) {
				Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
			});
		}
		return e;
	}
	__name(_objectSpread$3, "_objectSpread");
	function ModalProvider(props) {
		var _useState2 = _slicedToArray((0, react.useState)(props.show), 2);
		var show = _useState2[0];
		var setShow = _useState2[1];
		var hideModal = function hideModal() {
			setShow(false);
			if (props.setShow) props.setShow(false);
		};
		var showModal = function showModal() {
			setShow(true);
			if (props.setShow) props.setShow(true);
		};
		var modalAttrs = _objectSpread$3(_objectSpread$3({}, props), {}, {
			show,
			hideModal,
			showModal
		});
		(0, react.useEffect)(function() {
			setShow(props.show);
		}, [props.show]);
		return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, props.toggleButtonProps && /*#__PURE__*/ react.default.createElement(Button$1, _extends$2({}, props.toggleButtonProps, { onClick: showModal })), /*#__PURE__*/ react.default.createElement(Modal, modalAttrs, props.children));
	}
	ModalProvider.propTypes = {
		children: import_prop_types.default.node.isRequired,
		toggleButtonProps: import_prop_types.default.object,
		title: import_prop_types.default.string,
		icon: import_prop_types.default.string,
		show: import_prop_types.default.bool,
		setShow: import_prop_types.default.func,
		onOpen: import_prop_types.default.func,
		onClose: import_prop_types.default.func
	};
	ModalProvider.defaultProps = { show: false };
	ModalProvider.Section = ModalSection;
	ModalProvider.Tip = ModalTip;
	var Modal = function Modal(props) {
		var modalRef = (0, react.useRef)(null);
		var closeRef = (0, react.useRef)(null);
		var closeModal = function closeModal(e) {
			var node = modalRef.current;
			var closeNode = closeRef.current;
			var isInCloseNode = closeNode && closeNode.contains(e.target);
			if (node && node.contains(e.target) && !isInCloseNode) return;
			props.hideModal();
			if (props.onClose) props.onClose(e);
		};
		(0, react.useEffect)(function() {
			if (props.show) {
				var _props$onOpen;
				document.addEventListener("mousedown", closeModal, false);
				(_props$onOpen = props.onOpen) === null || _props$onOpen === void 0 || _props$onOpen.call(props);
			}
			return function() {
				return document.removeEventListener("mousedown", closeModal, false);
			};
		}, [props.show]);
		if (!props.show) return null;
		return /*#__PURE__*/ react.default.createElement("div", {
			className: "eps-modal__overlay",
			onClick: closeModal
		}, /*#__PURE__*/ react.default.createElement("div", {
			className: arrayToClassName(["eps-modal", props.className]),
			ref: modalRef
		}, /*#__PURE__*/ react.default.createElement(Grid, {
			container: true,
			className: "eps-modal__header",
			justify: "space-between",
			alignItems: "center"
		}, /*#__PURE__*/ react.default.createElement(Grid, { item: true }, /*#__PURE__*/ react.default.createElement(Icon, { className: "eps-modal__icon ".concat(props.icon) }), /*#__PURE__*/ react.default.createElement(Text, {
			className: "title",
			tag: "span"
		}, props.title)), /*#__PURE__*/ react.default.createElement(Grid, { item: true }, /*#__PURE__*/ react.default.createElement("div", {
			className: "eps-modal__close-wrapper",
			ref: closeRef
		}, /*#__PURE__*/ react.default.createElement(Button$1, {
			text: (0, _wordpress_i18n.__)("Close", "elementor"),
			hideText: true,
			icon: "eicon-close",
			onClick: props.closeModal
		})))), /*#__PURE__*/ react.default.createElement("div", { className: "eps-modal__body" }, props.children)));
	};
	Modal.propTypes = {
		className: import_prop_types.default.string,
		children: import_prop_types.default.any.isRequired,
		title: import_prop_types.default.string.isRequired,
		icon: import_prop_types.default.string,
		show: import_prop_types.default.bool,
		setShow: import_prop_types.default.func,
		hideModal: import_prop_types.default.func,
		showModal: import_prop_types.default.func,
		closeModal: import_prop_types.default.func,
		onOpen: import_prop_types.default.func,
		onClose: import_prop_types.default.func
	};
	Modal.defaultProps = { className: "" };

//#endregion
//#region app/assets/js/hooks/use-action.js
	function useAction() {
		return {
			backToDashboard: function backToDashboard() {
				if (window.top === window) window.top.location = elementorAppConfig.admin_url;
				else window.top.$e.run("app/close");
			},
			backToReferrer: function backToReferrer() {
				if (window.top === window) window.top.location = elementorAppConfig.return_url.includes(elementorAppConfig.login_url) ? elementorAppConfig.admin_url : elementorAppConfig.return_url;
				else window.top.$e.run("app/close");
			}
		};
	}

//#endregion
//#region app/assets/js/layout/header-button.js
	function _callSuper$1(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn$1(t, _isNativeReflectConstruct$1() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
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
	function _superPropGet(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	var Button = /*#__PURE__*/ function(_BaseButton) {
		function Button() {
			_classCallCheck$1(this, Button);
			return _callSuper$1(this, Button, arguments);
		}
		_inherits$1(Button, _BaseButton);
		return _createClass(Button, [{
			key: "getCssId",
			value: function getCssId() {
				return "eps-app-header-btn-" + _superPropGet(Button, "getCssId", this, 3)([]);
			}
		}, {
			key: "getClassName",
			value: function getClassName() {
				if (!this.props.includeHeaderBtnClass) return _superPropGet(Button, "getClassName", this, 3)([]);
				return "eps-app__header-btn " + _superPropGet(Button, "getClassName", this, 3)([]);
			}
		}]);
	}(Button$1);
	_defineProperty(Button, "defaultProps", Object.assign({}, Button$1.defaultProps, {
		hideText: true,
		includeHeaderBtnClass: true
	}));

//#endregion
//#region app/assets/js/layout/header-buttons.js
	function HeaderButtons(props) {
		var action = useAction();
		var actionOnClose = function actionOnClose() {
			if (props.onClose) props.onClose();
			else action.backToDashboard();
		};
		var tools = "";
		if (props.buttons.length) {
			var buttons = props.buttons.map(function(button) {
				return /*#__PURE__*/ react.default.createElement(Button, _extends$2({ key: button.id }, button));
			});
			tools = /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, buttons);
		}
		return /*#__PURE__*/ react.default.createElement("div", { className: "eps-app__header-buttons" }, /*#__PURE__*/ react.default.createElement(Button, {
			text: (0, _wordpress_i18n.__)("Close", "elementor"),
			icon: "eicon-close",
			className: "eps-app__close-button",
			onClick: actionOnClose
		}), tools);
	}
	HeaderButtons.propTypes = {
		buttons: import_prop_types.default.arrayOf(import_prop_types.default.object),
		onClose: import_prop_types.default.func
	};
	HeaderButtons.defaultProps = { buttons: [] };

//#endregion
//#region app/assets/js/hooks/use-page-title.js
	function usePageTitle(_ref) {
		var title = _ref.title;
		var prefix = _ref.prefix;
		var prefixRef = (0, react.useRef)(prefix);
		(0, react.useEffect)(function() {
			if (!prefix) prefixRef.current = (0, _wordpress_i18n.__)("Elementor", "elementor");
			document.title = "".concat(prefixRef.current, " | ").concat(title);
		}, [title, prefix]);
	}

//#endregion
//#region app/assets/js/layout/header.js
	function Header(props) {
		usePageTitle({ title: props.title });
		var TitleTag = "span";
		var titleAttrs = {};
		if (props.titleRedirectRoute) {
			TitleTag = "a";
			titleAttrs = {
				href: "#".concat(props.titleRedirectRoute),
				target: "_self"
			};
		}
		return /*#__PURE__*/ react.default.createElement(Grid, {
			container: true,
			alignItems: "center",
			justify: "space-between",
			className: "eps-app__header"
		}, /*#__PURE__*/ react.default.createElement(TitleTag, _extends$2({ className: "eps-app__logo-title-wrapper" }, titleAttrs), /*#__PURE__*/ react.default.createElement("i", { className: "eps-app__logo eicon-elementor-circle" }), /*#__PURE__*/ react.default.createElement("h1", { className: "eps-app__title" }, props.title)), /*#__PURE__*/ react.default.createElement(HeaderButtons, {
			buttons: props.buttons,
			onClose: props.onClose
		}));
	}
	Header.propTypes = {
		title: import_prop_types.default.string,
		titleRedirectRoute: import_prop_types.default.string,
		buttons: import_prop_types.default.arrayOf(import_prop_types.default.object),
		onClose: import_prop_types.default.func
	};
	Header.defaultProps = { buttons: [] };

//#endregion
//#region app/assets/js/layout/sidebar.js
	function Sidebar(props) {
		return /*#__PURE__*/ react.default.createElement("div", { className: "eps-app__sidebar" }, props.children);
	}
	Sidebar.propTypes = { children: import_prop_types.default.object };

//#endregion
//#region app/assets/js/layout/content.js
	function Content(props) {
		return /*#__PURE__*/ react.default.createElement("main", { className: "eps-app__content ".concat(props.className) }, props.children);
	}
	Content.propTypes = {
		children: import_prop_types.default.any,
		className: import_prop_types.default.string
	};
	Content.defaultProps = { className: "" };

//#endregion
//#region app/assets/js/layout/footer.js
	function Footer(props) {
		return /*#__PURE__*/ react.default.createElement("footer", { className: "eps-app__footer" }, props.children);
	}
	Footer.propTypes = { children: import_prop_types.default.object };

//#endregion
//#region app/assets/js/layout/page.js
	function Page(props) {
		return /*#__PURE__*/ react.default.createElement("div", { className: "eps-app__lightbox ".concat(props.className) }, /*#__PURE__*/ react.default.createElement("div", { className: "eps-app" }, /*#__PURE__*/ react.default.createElement(Header, {
			title: props.title,
			buttons: props.headerButtons,
			titleRedirectRoute: props.titleRedirectRoute,
			onClose: props.onClose
		}), /*#__PURE__*/ react.default.createElement("div", { className: "eps-app__main" }, function AppSidebar() {
			if (!props.sidebar) return;
			return /*#__PURE__*/ react.default.createElement(Sidebar, null, props.sidebar);
		}(), /*#__PURE__*/ react.default.createElement(Content, null, props.content)), function AppFooter() {
			if (!props.footer) return;
			return /*#__PURE__*/ react.default.createElement(Footer, null, props.footer);
		}()));
	}
	Page.propTypes = {
		title: import_prop_types.default.string,
		titleRedirectRoute: import_prop_types.default.string,
		className: import_prop_types.default.string,
		headerButtons: import_prop_types.default.arrayOf(import_prop_types.default.object),
		sidebar: import_prop_types.default.object,
		content: import_prop_types.default.object.isRequired,
		footer: import_prop_types.default.object,
		onClose: import_prop_types.default.func
	};
	Page.defaultProps = { className: "" };

//#endregion
//#region app/assets/js/pages/not-found.js
	function NotFound$1() {
		var config = {
			title: (0, _wordpress_i18n.__)("Not Found", "elementor"),
			className: "eps-app__not-found",
			content: /*#__PURE__*/ react.default.createElement("h1", null, " ", (0, _wordpress_i18n.__)("Not Found", "elementor"), " "),
			sidebar: /*#__PURE__*/ react.default.createElement(react.default.Fragment, null)
		};
		return /*#__PURE__*/ react.default.createElement(Page, config);
	}
	__name(NotFound$1, "NotFound");

//#endregion
//#region app/assets/js/ui/molecules/notice.js
	var iconsClassesMap = {
		danger: "eicon-warning",
		info: "eicon-info-circle-o",
		warning: "eicon-warning"
	};
	function Notice(props) {
		var baseClassName = "eps-notice";
		var classes = [baseClassName, props.className];
		if (props.color) classes.push(baseClassName + "-semantic", baseClassName + "--" + props.color);
		return /*#__PURE__*/ react.default.createElement(Grid, {
			className: arrayToClassName(classes),
			container: true,
			noWrap: true,
			alignItems: "center",
			justify: "space-between"
		}, /*#__PURE__*/ react.default.createElement(Grid, {
			item: true,
			container: true,
			alignItems: "start",
			noWrap: true
		}, props.withIcon && props.color && /*#__PURE__*/ react.default.createElement(Icon, { className: arrayToClassName(["eps-notice__icon", iconsClassesMap[props.color]]) }), /*#__PURE__*/ react.default.createElement(Text, {
			variant: "xs",
			className: "eps-notice__text"
		}, props.label && /*#__PURE__*/ react.default.createElement("strong", null, props.label + " "), props.children)), props.button && /*#__PURE__*/ react.default.createElement(Grid, {
			item: true,
			container: true,
			justify: "end",
			className: baseClassName + "__button-container"
		}, props.button));
	}
	Notice.propTypes = {
		className: import_prop_types.default.string,
		color: import_prop_types.default.string,
		label: import_prop_types.default.string,
		children: import_prop_types.default.any.isRequired,
		icon: import_prop_types.default.string,
		withIcon: import_prop_types.default.bool,
		button: import_prop_types.default.object
	};
	Notice.defaultProps = {
		className: "",
		withIcon: true,
		button: null
	};

//#endregion
//#region app/assets/js/ui/molecules/popover.js
	function Popover(props) {
		return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, /*#__PURE__*/ react.default.createElement("div", {
			className: "eps-popover__background",
			onClick: props.closeFunction
		}), /*#__PURE__*/ react.default.createElement("ul", {
			className: "eps-popover ".concat(function getArrowPositionClass() {
				switch (props.arrowPosition) {
					case "start": return "eps-popover--arrow-start";
					case "end": return "eps-popover--arrow-end";
					case "none": return "eps-popover--arrow-none";
					default: return "eps-popover--arrow-center";
				}
			}(), " ").concat(props.className),
			onClick: props.closeFunction
		}, props.children));
	}
	Popover.propTypes = {
		children: import_prop_types.default.any.isRequired,
		className: import_prop_types.default.string,
		closeFunction: import_prop_types.default.func,
		arrowPosition: import_prop_types.default.oneOf([
			"start",
			"center",
			"end",
			"none"
		])
	};
	Popover.defaultProps = {
		className: "",
		arrowPosition: "center"
	};

//#endregion
//#region app/assets/js/ui/atoms/select.js
	function Select(props) {
		return /*#__PURE__*/ react.default.createElement("select", {
			multiple: props.multiple,
			className: props.className,
			value: props.value,
			onChange: props.onChange,
			ref: props.elRef,
			onClick: function onClick() {
				var _props$onClick;
				return (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props);
			}
		}, props.options.map(function(option) {
			return option.children ? /*#__PURE__*/ react.default.createElement("optgroup", {
				label: option.label,
				key: option.label
			}, option.children.map(function(childOption) {
				return /*#__PURE__*/ react.default.createElement("option", {
					key: childOption.value,
					value: childOption.value
				}, childOption.label);
			})) : /*#__PURE__*/ react.default.createElement("option", {
				key: option.value,
				value: option.value
			}, option.label);
		}));
	}
	Select.propTypes = {
		className: import_prop_types.default.string,
		onChange: import_prop_types.default.func,
		options: import_prop_types.default.array,
		elRef: import_prop_types.default.object,
		multiple: import_prop_types.default.bool,
		value: import_prop_types.default.oneOfType([import_prop_types.default.array, import_prop_types.default.string]),
		onClick: import_prop_types.default.func
	};
	Select.defaultProps = {
		className: "",
		options: []
	};

//#endregion
//#region app/assets/js/ui/molecules/select2.js
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
	/**
	* Default settings of the select 2
	*
	* @return {{placeholder: string, allowClear: boolean, dir: string}}
	*/
	var getDefaultSettings = function getDefaultSettings() {
		return {
			allowClear: true,
			placeholder: "",
			dir: elementorCommon.config.isRTL ? "rtl" : "ltr"
		};
	};
	/**
	* Main component
	*
	* @param {*} props
	* @return {*} component
	* @function Object() { [native code] }
	*/
	function Select2(props) {
		var ref = react.default.useRef(null);
		react.default.useEffect(function() {
			var $select2 = jQuery(ref.current).select2(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, getDefaultSettings()), props.settings), {}, { placeholder: props.placeholder })).on("select2:select select2:unselect", props.onChange);
			if (props.onReady) props.onReady($select2);
			return function() {
				$select2.select2("destroy").off("select2:select select2:unselect");
			};
		}, [props.settings, props.options]);
		react.default.useEffect(function() {
			jQuery(ref.current).val(props.value).trigger("change");
		}, [props.value]);
		return /*#__PURE__*/ react.default.createElement(Select, {
			multiple: props.multiple,
			value: props.value,
			onChange: props.onChange,
			elRef: ref,
			options: props.options,
			placeholder: props.placeholder
		});
	}
	Select2.propTypes = {
		value: import_prop_types.default.oneOfType([import_prop_types.default.array, import_prop_types.default.string]),
		onChange: import_prop_types.default.func,
		onReady: import_prop_types.default.func,
		options: import_prop_types.default.array,
		settings: import_prop_types.default.object,
		multiple: import_prop_types.default.bool,
		placeholder: import_prop_types.default.string
	};
	Select2.defaultProps = {
		settings: {},
		options: [],
		dependencies: [],
		placeholder: ""
	};

//#endregion
//#region app/assets/js/ui/molecules/inline-link.js
	function InlineLink(props) {
		var baseClassName = "eps-inline-link";
		var className = arrayToClassName([
			baseClassName,
			"".concat(baseClassName, "--color-").concat(props.color),
			"none" !== props.underline ? "".concat(baseClassName, "--underline-").concat(props.underline) : "",
			props.italic ? "".concat(baseClassName, "--italic") : "",
			props.className
		]);
		var getRouterLink = function getRouterLink() {
			return /*#__PURE__*/ react.default.createElement(LocationProvider, { history: router.appHistory }, /*#__PURE__*/ react.default.createElement(Link, {
				to: props.url,
				className
			}, props.children));
		};
		var getExternalLink = function getExternalLink() {
			return /*#__PURE__*/ react.default.createElement("a", {
				href: props.url,
				target: props.target,
				rel: props.rel,
				className,
				onClick: props.onClick
			}, props.children);
		};
		var getActionLink = function getActionLink() {
			return /*#__PURE__*/ react.default.createElement("button", {
				className,
				onClick: props.onClick
			}, props.children);
		};
		if (!props.url) return getActionLink();
		return props.url.includes("http") ? getExternalLink() : getRouterLink();
	}
	InlineLink.propTypes = {
		className: import_prop_types.default.string,
		children: import_prop_types.default.any,
		url: import_prop_types.default.string,
		target: import_prop_types.default.string,
		rel: import_prop_types.default.string,
		text: import_prop_types.default.string,
		color: import_prop_types.default.oneOf([
			"primary",
			"secondary",
			"cta",
			"link",
			"disabled"
		]),
		underline: import_prop_types.default.oneOf([
			"none",
			"hover",
			"always"
		]),
		italic: import_prop_types.default.bool,
		onClick: import_prop_types.default.func
	};
	InlineLink.defaultProps = {
		className: "",
		color: "link",
		underline: "always",
		target: "_blank",
		rel: "noopener noreferrer"
	};

//#endregion
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
//#region app/assets/js/hooks/use-ajax.js
	var import_regenerator = /* @__PURE__ */ __toESM(require_regenerator());
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
							var options = _objectSpread$1(_objectSpread$1({
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
					return _objectSpread$1(_objectSpread$1({}, prevState), {}, {
						status,
						response: response === null || response === void 0 ? void 0 : response.data
					});
				});
			}).catch(function(error) {
				var _error$responseJSON;
				var response = 408 === error.status ? "timeout" : (_error$responseJSON = error.responseJSON) === null || _error$responseJSON === void 0 ? void 0 : _error$responseJSON.data;
				setAjaxState(function(prevState) {
					return _objectSpread$1(_objectSpread$1({}, prevState), {}, {
						status: "error",
						response
					});
				});
			}).finally(function() {
				setAjaxState(function(prevState) {
					return _objectSpread$1(_objectSpread$1({}, prevState), {}, { isComplete: true });
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
//#region app/assets/js/organisms/unfiltered-files-dialog.js
	function UnfilteredFilesDialog(props) {
		var show = props.show;
		var setShow = props.setShow;
		var onReady = props.onReady;
		var onCancel = props.onCancel;
		var onDismiss = props.onDismiss;
		var onLoad = props.onLoad;
		var onEnable = props.onEnable;
		var onClose = props.onClose;
		var _useAjax = useAjax();
		var ajaxState = _useAjax.ajaxState;
		var setAjax = _useAjax.setAjax;
		var _useState2 = _slicedToArray((0, react.useState)(false), 2);
		var enableUnfilteredFiles = _useState2[0];
		var setEnableUnfilteredFiles = _useState2[1];
		var _useState4 = _slicedToArray((0, react.useState)(false), 2);
		var isEnableError = _useState4[0];
		var setIsEnableError = _useState4[1];
		(0, react.useEffect)(function() {
			if (enableUnfilteredFiles) {
				setShow(false);
				setAjax({ data: {
					action: "elementor_ajax",
					actions: JSON.stringify({ enable_unfiltered_files_upload: { action: "enable_unfiltered_files_upload" } })
				} });
				if (onEnable) onEnable();
			}
		}, [enableUnfilteredFiles]);
		(0, react.useEffect)(function() {
			switch (ajaxState.status) {
				case "success":
					onReady();
					break;
				case "error":
					setIsEnableError(true);
					setShow(true);
					break;
			}
		}, [ajaxState]);
		(0, react.useEffect)(function() {
			if (show && onLoad) onLoad();
		}, [show]);
		if (!show) return null;
		return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, isEnableError ? /*#__PURE__*/ react.default.createElement(Dialog, {
			title: (0, _wordpress_i18n.__)("Something went wrong.", "elementor"),
			text: props.errorModalText,
			approveButtonColor: "link",
			approveButtonText: (0, _wordpress_i18n.__)("Continue", "elementor"),
			approveButtonOnClick: onReady,
			dismissButtonText: (0, _wordpress_i18n.__)("Go Back", "elementor"),
			dismissButtonOnClick: onCancel,
			onClose: onCancel
		}) : /*#__PURE__*/ react.default.createElement(Dialog, {
			title: (0, _wordpress_i18n.__)("First, enable unfiltered file uploads.", "elementor"),
			text: props.confirmModalText,
			approveButtonColor: "link",
			approveButtonText: (0, _wordpress_i18n.__)("Enable", "elementor"),
			approveButtonOnClick: function approveButtonOnClick() {
				return setEnableUnfilteredFiles(true);
			},
			dismissButtonText: (0, _wordpress_i18n.__)("Skip", "elementor"),
			dismissButtonOnClick: onDismiss || onReady,
			onClose: onClose || onDismiss || onReady
		}));
	}
	UnfilteredFilesDialog.propTypes = {
		show: import_prop_types.default.bool,
		setShow: import_prop_types.default.func.isRequired,
		onReady: import_prop_types.default.func.isRequired,
		onCancel: import_prop_types.default.func.isRequired,
		onDismiss: import_prop_types.default.func,
		confirmModalText: import_prop_types.default.string.isRequired,
		errorModalText: import_prop_types.default.string.isRequired,
		onLoad: import_prop_types.default.func,
		onEnable: import_prop_types.default.func,
		onClose: import_prop_types.default.func
	};
	UnfilteredFilesDialog.defaultProps = {
		show: false,
		onReady: function onReady() {},
		onCancel: function onCancel() {}
	};

//#endregion
//#region app/assets/js/hooks/use-query-params.js
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
	function useQueryParams() {
		var _location$hash$match;
		var urlSearchParams = new URLSearchParams(window.location.search);
		var urlParams = Object.fromEntries(urlSearchParams.entries());
		var hashValue = (_location$hash$match = location.hash.match(/\?(.+)/)) === null || _location$hash$match === void 0 ? void 0 : _location$hash$match[1];
		var hashParams = {};
		if (hashValue) hashValue.split("&").forEach(function(pair) {
			var _pair$split2 = _slicedToArray(pair.split("="), 2);
			var key = _pair$split2[0];
			hashParams[key] = _pair$split2[1];
		});
		var queryParams = _objectSpread(_objectSpread({}, urlParams), hashParams);
		return { getAll: function getAll() {
			return queryParams;
		} };
	}

//#endregion
//#region app/assets/js/hooks/use-introduction.js
	function useIntroduction(key) {
		var _window$elementorAppC;
		var _useState2 = _slicedToArray((0, react.useState)(!!((_window$elementorAppC = window.elementorAppConfig) !== null && _window$elementorAppC !== void 0 && (_window$elementorAppC = _window$elementorAppC.user) !== null && _window$elementorAppC !== void 0 && (_window$elementorAppC = _window$elementorAppC.introduction) !== null && _window$elementorAppC !== void 0 && _window$elementorAppC[key])), 2);
		var isViewed = _useState2[0];
		var setIsViewed = _useState2[1];
		function markAsViewed() {
			if (!key) return Promise.reject();
			return new Promise(function(resolve, reject) {
				if (isViewed) reject();
				elementorCommon.ajax.addRequest("introduction_viewed", {
					data: { introductionKey: key },
					error: function error() {
						return reject();
					},
					success: function success() {
						var _window$elementorAppC2;
						setIsViewed(true);
						if ((_window$elementorAppC2 = window.elementorAppConfig) !== null && _window$elementorAppC2 !== void 0 && (_window$elementorAppC2 = _window$elementorAppC2.user) !== null && _window$elementorAppC2 !== void 0 && _window$elementorAppC2.introduction) window.elementorAppConfig.user.introduction[key] = true;
						resolve();
					}
				});
			});
		}
		return {
			isViewed,
			markAsViewed
		};
	}

//#endregion
//#region app/assets/js/hooks/use-confirm-action.js
	function useConfirmAction(_ref) {
		var action = _ref.action;
		var _ref$doNotShowAgainKe = _ref.doNotShowAgainKey;
		var doNotShowAgainKey = _ref$doNotShowAgainKe === void 0 ? null : _ref$doNotShowAgainKe;
		var _useIntroduction = useIntroduction(doNotShowAgainKey);
		var shouldNotShowAgain = _useIntroduction.isViewed;
		var markAsShouldNotShowAgain = _useIntroduction.markAsViewed;
		var _useState2 = _slicedToArray((0, react.useState)({
			isOpen: false,
			actionArgs: []
		}), 2);
		var dialogState = _useState2[0];
		var setDialogState = _useState2[1];
		var _useState4 = _slicedToArray((0, react.useState)(false), 2);
		var doNotShowAgainCheckboxState = _useState4[0];
		return {
			checkbox: {
				isChecked: doNotShowAgainCheckboxState,
				setIsChecked: _useState4[1]
			},
			dialog: {
				isOpen: dialogState.isOpen,
				approve: function approve() {
					action.apply(void 0, _toConsumableArray(dialogState.actionArgs));
					if (doNotShowAgainCheckboxState && doNotShowAgainKey) markAsShouldNotShowAgain();
					setDialogState({
						isOpen: false,
						actionArgs: []
					});
				},
				dismiss: function dismiss() {
					setDialogState({
						isOpen: false,
						actionArgs: []
					});
				}
			},
			runAction: function runAction() {
				for (var _len = arguments.length, actionArgs = new Array(_len), _key = 0; _key < _len; _key++) actionArgs[_key] = arguments[_key];
				if (shouldNotShowAgain) {
					action.apply(void 0, actionArgs);
					return;
				}
				setDialogState({
					isOpen: true,
					actionArgs
				});
			}
		};
	}

//#endregion
//#region app/assets/js/package.js
	var appUi = {
		AddNewButton,
		Box,
		Button: Button$1,
		Card,
		CardBody,
		CardFooter,
		CardHeader,
		CardImage,
		CardOverlay,
		Checkbox,
		Collapse,
		CssGrid,
		Dialog,
		DragDrop,
		DropZone,
		ErrorBoundary,
		Heading,
		GoProButton,
		Grid,
		Icon,
		List,
		Menu: Menu$1,
		MenuItem: SideMenuItem,
		Modal,
		ModalProvider,
		NotFound: NotFound$1,
		Notice,
		Page,
		Popover,
		Select,
		Select2,
		Text,
		UploadFile,
		InlineLink
	};
	var components = { UnfilteredFilesDialog };
	var hooks = {
		useAjax,
		useAction,
		usePageTitle,
		useQueryParams,
		useIntroduction,
		useConfirmAction
	};

//#endregion
//#region app/modules/site-editor/assets/js/organisms/all-parts-button.js
	function AllPartsButton(props) {
		return /*#__PURE__*/ react.default.createElement(Match, { path: "/site-editor/templates" }, function(_ref) {
			var match = _ref.match;
			var className = "eps-menu-item__link".concat(match || props.promotion ? " eps-menu-item--active" : "");
			return /*#__PURE__*/ react.default.createElement(SideMenuItem, {
				text: (0, _wordpress_i18n.__)("All Parts", "elementor"),
				className,
				icon: "eicon-filter",
				url: props.url
			});
		});
	}
	AllPartsButton.propTypes = {
		url: import_prop_types.default.string,
		promotion: import_prop_types.default.bool
	};

//#endregion
//#region app/modules/site-editor/assets/js/context/template-types.js
	function _callSuper(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn$1(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	function _isNativeReflectConstruct() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	var Context = react.default.createContext();
	var TemplateTypesContext = /*#__PURE__*/ function(_React$Component) {
		function TemplateTypesContext(props) {
			var _this;
			_classCallCheck$1(this, TemplateTypesContext);
			_this = _callSuper(this, TemplateTypesContext, [props]);
			_this.state = {
				templateTypes: [],
				loading: true,
				error: false
			};
			return _this;
		}
		_inherits$1(TemplateTypesContext, _React$Component);
		return _createClass(TemplateTypesContext, [
			{
				key: "componentDidMount",
				value: function componentDidMount() {
					var _this2 = this;
					this.getTemplateTypes().then(function(response) {
						_this2.setState({
							templateTypes: response,
							loading: false
						});
					}).fail(function(error) {
						_this2.setState({
							error: error.statusText ? error.statusText : error,
							loading: false
						});
					});
				}
			},
			{
				key: "getTemplateTypes",
				value: function getTemplateTypes() {
					return elementorCommon.ajax.load({ action: "app_site_editor_template_types" });
				}
			},
			{
				key: "render",
				value: function render() {
					if (this.state.error) return /*#__PURE__*/ react.default.createElement("div", { className: "e-loading-wrapper" }, /*#__PURE__*/ react.default.createElement("h3", null, (0, _wordpress_i18n.__)("Error:", "elementor"), " ", this.state.error));
					if (this.state.loading) return /*#__PURE__*/ react.default.createElement("div", { className: "elementor-loading" }, /*#__PURE__*/ react.default.createElement("div", { className: "elementor-loader-wrapper" }, /*#__PURE__*/ react.default.createElement("div", { className: "elementor-loader" }, /*#__PURE__*/ react.default.createElement("div", { className: "elementor-loader-boxes" }, /*#__PURE__*/ react.default.createElement("div", { className: "elementor-loader-box" }), /*#__PURE__*/ react.default.createElement("div", { className: "elementor-loader-box" }), /*#__PURE__*/ react.default.createElement("div", { className: "elementor-loader-box" }), /*#__PURE__*/ react.default.createElement("div", { className: "elementor-loader-box" }))), /*#__PURE__*/ react.default.createElement("div", { className: "elementor-loading-title" }, (0, _wordpress_i18n.__)("Loading", "elementor"))));
					return /*#__PURE__*/ react.default.createElement(Context.Provider, { value: this.state }, this.props.children);
				}
			}
		]);
	}(react.default.Component);
	_defineProperty(TemplateTypesContext, "propTypes", { children: import_prop_types.default.object.isRequired });
	var TemplateTypesConsumer = Context.Consumer;

//#endregion
//#region app/modules/site-editor/assets/js/organisms/menu.js
	function Menu(props) {
		var templateTypes = react.default.useContext(Context).templateTypes;
		return /*#__PURE__*/ react.default.createElement(Menu$1, {
			menuItems: templateTypes,
			actionButton: function actionButton(itemProps) {
				var className = "eps-menu-item__action-button";
				if (props.promotion) return /*#__PURE__*/ react.default.createElement(Button$1, {
					text: (0, _wordpress_i18n.__)("Upgrade Now", "elementor"),
					hideText: true,
					icon: "eicon-lock",
					className
				});
				var goToCreate = function goToCreate() {
					location.href = itemProps.urls.create;
				};
				return /*#__PURE__*/ react.default.createElement("span", { className }, /*#__PURE__*/ react.default.createElement(AddNewButton, {
					hideText: true,
					size: "sm",
					onClick: function onClick() {
						return goToCreate();
					}
				}));
			},
			promotion: props.promotion
		}, props.allPartsButton, /*#__PURE__*/ react.default.createElement("div", { className: "eps-menu__title" }, (0, _wordpress_i18n.__)("Site Parts", "elementor")));
	}
	Menu.propTypes = {
		allPartsButton: import_prop_types.default.element.isRequired,
		promotion: import_prop_types.default.bool
	};

//#endregion
//#region app/modules/import-export/assets/js/shared/utils/is-valid-redirect-url.js
	function isValidRedirectUrl(url) {
		try {
			var parsedUrl = new URL(url);
			return parsedUrl.hostname === window.location.hostname && ("http:" === parsedUrl.protocol || "https:" === parsedUrl.protocol);
		} catch (e) {
			return false;
		}
	}

//#endregion
//#region app/modules/import-export/assets/js/shared/utils/redirect.js
	function safeRedirect(url) {
		try {
			if (url.startsWith("/")) url = window.location.origin + url;
			var decodedUrl = decodeURIComponent(url);
			if (isValidRedirectUrl(decodedUrl)) {
				window.location.href = decodedUrl;
				return true;
			}
		} catch (e) {
			return false;
		}
	}

//#endregion
//#region app/modules/site-editor/assets/js/templates/layout.js
	function Layout(props) {
		var returnTo = useQueryParams().getAll().return_to;
		var onClose = (0, react.useCallback)(function() {
			if (window.top !== window) {
				window.top.$e.run("app/close");
				return;
			}
			if (returnTo && safeRedirect(returnTo)) return;
			window.top.location = elementorAppConfig.admin_url;
		}, [returnTo]);
		var config = (0, react.useMemo)(function() {
			var _props$titleRedirectR;
			return {
				title: (0, _wordpress_i18n.__)("Theme Builder", "elementor"),
				titleRedirectRoute: (_props$titleRedirectR = props.titleRedirectRoute) !== null && _props$titleRedirectR !== void 0 ? _props$titleRedirectR : null,
				headerButtons: props.headerButtons,
				sidebar: /*#__PURE__*/ react.default.createElement(Menu, {
					allPartsButton: props.allPartsButton,
					promotion: props.promotion
				}),
				content: props.children,
				onClose
			};
		}, [
			props.titleRedirectRoute,
			props.headerButtons,
			props.allPartsButton,
			props.promotion,
			props.children,
			onClose
		]);
		return /*#__PURE__*/ react.default.createElement(TemplateTypesContext, null, /*#__PURE__*/ react.default.createElement(Page, config));
	}
	Layout.propTypes = {
		headerButtons: import_prop_types.default.arrayOf(import_prop_types.default.object),
		allPartsButton: import_prop_types.default.element.isRequired,
		children: import_prop_types.default.object.isRequired,
		promotion: import_prop_types.default.bool,
		titleRedirectRoute: import_prop_types.default.string
	};
	Layout.defaultProps = { headerButtons: [] };

//#endregion
//#region app/modules/site-editor/assets/js/molecules/site-part.js
	function SitePart(props) {
		return /*#__PURE__*/ react.default.createElement(Card, { className: "e-site-part" }, /*#__PURE__*/ react.default.createElement(CardHeader, null, /*#__PURE__*/ react.default.createElement(Heading, {
			tag: "h1",
			variant: "text-sm",
			className: "eps-card__headline"
		}, props.title), props.actionButton), /*#__PURE__*/ react.default.createElement(CardBody, null, /*#__PURE__*/ react.default.createElement(CardImage, {
			alt: props.title,
			src: props.thumbnail
		}, props.children)));
	}
	SitePart.propTypes = {
		thumbnail: import_prop_types.default.string.isRequired,
		title: import_prop_types.default.string.isRequired,
		children: import_prop_types.default.object,
		showIndicator: import_prop_types.default.bool,
		actionButton: import_prop_types.default.object
	};

//#endregion
//#region app/modules/site-editor/assets/js/organisms/site-parts.js
	var InfoButton = function InfoButton(props) {
		var toggleButtonProps = {
			text: (0, _wordpress_i18n.__)("Info", "elementor"),
			hideText: true,
			icon: "eicon-info-circle e-site-part__info-toggle"
		};
		return /*#__PURE__*/ react.default.createElement(ModalProvider, {
			toggleButtonProps,
			title: props.title
		}, /*#__PURE__*/ react.default.createElement(CssGrid, {
			columns: 2,
			spacing: 60
		}, /*#__PURE__*/ react.default.createElement("section", null, /*#__PURE__*/ react.default.createElement("h3", null, props.type), /*#__PURE__*/ react.default.createElement("p", null, props.content, /*#__PURE__*/ react.default.createElement("br", null), /*#__PURE__*/ react.default.createElement(Button$1, {
			text: (0, _wordpress_i18n.__)("Learn More", "elementor"),
			color: "link",
			target: "_blank",
			url: props.docs
		})), /*#__PURE__*/ react.default.createElement("div", { className: "eps-modal__tip" }, /*#__PURE__*/ react.default.createElement("h3", null, (0, _wordpress_i18n.__)("Tip", "elementor")), /*#__PURE__*/ react.default.createElement("p", null, props.tip))), /*#__PURE__*/ react.default.createElement("section", null, /*#__PURE__*/ react.default.createElement("h3", null, (0, _wordpress_i18n.__)("Watch Video", "elementor")), /*#__PURE__*/ react.default.createElement("div", { className: "video-wrapper" }, /*#__PURE__*/ react.default.createElement("iframe", {
			id: "ytplayer",
			src: props.video_url,
			frameBorder: "0"
		})))));
	};
	InfoButton.propTypes = {
		content: import_prop_types.default.string.isRequired,
		docs: import_prop_types.default.string.isRequired,
		tip: import_prop_types.default.string.isRequired,
		title: import_prop_types.default.string.isRequired,
		type: import_prop_types.default.string.isRequired,
		video_url: import_prop_types.default.string.isRequired
	};
	function SiteParts(props) {
		var templateTypes = react.default.useContext(Context).templateTypes;
		return /*#__PURE__*/ react.default.createElement(CssGrid, {
			className: "e-site-editor__site-parts",
			colMinWidth: 200,
			spacing: 25
		}, templateTypes.map(function(item) {
			return /*#__PURE__*/ react.default.createElement(SitePart, _extends$2({
				className: "e-site-editor__site-part",
				actionButton: /*#__PURE__*/ react.default.createElement(InfoButton, _extends$2({ type: item.title }, item.tooltip_data)),
				thumbnail: item.urls.thumbnail,
				key: item.type
			}, item), react.default.createElement(props.hoverElement, item));
		}));
	}
	SiteParts.propTypes = { hoverElement: import_prop_types.default.func.isRequired };

//#endregion
//#region app/modules/site-editor/assets/js/pages/promotion.js
	function Promotion() {
		var promotionUrl = elementorAppConfig.promotion.upgrade_url || "https://go.elementor.com/go-pro-theme-builder/";
		var PromotionHoverElement = function PromotionHoverElement(props) {
			var promotionUrlWithType = "".concat(promotionUrl, "?type=").concat(props.type);
			return /*#__PURE__*/ react.default.createElement(CardOverlay, { className: "e-site-editor__promotion-overlay" }, /*#__PURE__*/ react.default.createElement("a", {
				className: "e-site-editor__promotion-overlay__link",
				target: "_blank",
				rel: "noopener noreferrer",
				href: promotionUrlWithType
			}, /*#__PURE__*/ react.default.createElement("i", { className: "e-site-editor__promotion-overlay__icon eicon-lock" }), /*#__PURE__*/ react.default.createElement(Button$1, {
				size: "sm",
				color: "brand",
				variant: "contained",
				text: (0, _wordpress_i18n.__)("Upgrade", "elementor")
			})));
		};
		PromotionHoverElement.propTypes = {
			className: import_prop_types.default.string,
			type: import_prop_types.default.string.isRequired
		};
		return /*#__PURE__*/ react.default.createElement(Layout, {
			allPartsButton: /*#__PURE__*/ react.default.createElement(AllPartsButton, { promotion: true }),
			promotion: true
		}, /*#__PURE__*/ react.default.createElement("section", { className: "e-site-editor__promotion" }, /*#__PURE__*/ react.default.createElement(Grid, {
			container: true,
			className: "page-header"
		}, /*#__PURE__*/ react.default.createElement(Grid, {
			item: true,
			sm: 7,
			justify: "end"
		}, /*#__PURE__*/ react.default.createElement(Heading, { variant: "h1" }, (0, _wordpress_i18n.__)("Customize every part of your site", "elementor")), /*#__PURE__*/ react.default.createElement(Text, null, (0, _wordpress_i18n.__)("Get total control, consistency and a faster workflow by designing the recurring parts that make up a complete website like the Header & Footer, Archive, 404, WooCommerce pages and more.", "elementor"))), /*#__PURE__*/ react.default.createElement(Grid, {
			item: true,
			container: true,
			justify: "end",
			alignItems: "start",
			sm: 5
		}, /*#__PURE__*/ react.default.createElement(Button$1, {
			size: "sm",
			color: "cta",
			variant: "contained",
			url: promotionUrl,
			target: "_blank",
			text: (0, _wordpress_i18n.__)("Upgrade Now", "elementor")
		}))), /*#__PURE__*/ react.default.createElement("hr", { className: "eps-separator" }), /*#__PURE__*/ react.default.createElement(SiteParts, { hoverElement: PromotionHoverElement })));
	}

//#endregion
//#region app/modules/site-editor/assets/js/pages/not-found.js
	function NotFound() {
		var url = react.default.useMemo(function() {
			var _elementorAppConfig$m;
			return ((_elementorAppConfig$m = elementorAppConfig.menu_url.split("#")) === null || _elementorAppConfig$m === void 0 ? void 0 : _elementorAppConfig$m[1]) || "/site-editor";
		}, []);
		return /*#__PURE__*/ react.default.createElement(Dialog, {
			title: (0, _wordpress_i18n.__)("Theme Builder could not be loaded", "elementor"),
			text: (0, _wordpress_i18n.__)("We’re sorry, but something went wrong. Click on ‘Learn more’ and follow each of the steps to quickly solve it.", "elementor"),
			approveButtonUrl: "https://go.elementor.com/app-theme-builder-load-issue/",
			approveButtonColor: "link",
			approveButtonTarget: "_blank",
			approveButtonText: (0, _wordpress_i18n.__)("Learn More", "elementor"),
			dismissButtonText: (0, _wordpress_i18n.__)("Go Back", "elementor"),
			dismissButtonUrl: url
		});
	}

//#endregion
//#region app/modules/site-editor/assets/js/module.js
	var SiteEditor = /*#__PURE__*/ function() {
		function SiteEditor() {
			_classCallCheck$1(this, SiteEditor);
			this.saveTemplateTypesToCache();
			router.addRoute({
				path: "/site-editor/promotion",
				component: Promotion
			});
			router.addRoute({
				path: "/site-editor/*",
				component: NotFound
			});
		}
		return _createClass(SiteEditor, [{
			key: "saveTemplateTypesToCache",
			value: function saveTemplateTypesToCache() {
				var types = this.getTypes();
				elementorCommon.ajax.addRequestCache({ unique_id: "app_site_editor_template_types" }, types);
			}
		}, {
			key: "getTypes",
			value: function getTypes() {
				return [
					{
						type: "header",
						icon: "eicon-header",
						title: (0, _wordpress_i18n.__)("Header", "elementor"),
						urls: { thumbnail: elementorAppConfig.assets_url + "/images/app/site-editor/header.svg" },
						tooltip_data: {
							title: (0, _wordpress_i18n.__)("What is a Header Template?", "elementor"),
							content: (0, _wordpress_i18n.__)("The header template allows you to easily design and edit custom WordPress headers so you are no longer constrained by your theme’s header design limitations.", "elementor"),
							tip: (0, _wordpress_i18n.__)("You can create multiple headers, and assign each to different areas of your site.", "elementor"),
							docs: "https://go.elementor.com/app-theme-builder-header/",
							video_url: "https://www.youtube.com/embed/HHy5RK6W-6I"
						}
					},
					{
						type: "footer",
						icon: "eicon-footer",
						title: (0, _wordpress_i18n.__)("Footer", "elementor"),
						urls: { thumbnail: elementorAppConfig.assets_url + "/images/app/site-editor/footer.svg" },
						tooltip_data: {
							title: (0, _wordpress_i18n.__)("What is a Footer Template?", "elementor"),
							content: (0, _wordpress_i18n.__)("The footer template allows you to easily design and edit custom WordPress footers without the limits of your theme’s footer design constraints", "elementor"),
							tip: (0, _wordpress_i18n.__)("You can create multiple footers, and assign each to different areas of your site.", "elementor"),
							docs: "https://go.elementor.com/app-theme-builder-footer/",
							video_url: "https://www.youtube.com/embed/xa8DoR4tQrY"
						}
					},
					{
						type: "single-page",
						icon: "eicon-single-page",
						title: (0, _wordpress_i18n.__)("Single Page", "elementor"),
						urls: { thumbnail: elementorAppConfig.assets_url + "/images/app/site-editor/single-page.svg" },
						tooltip_data: {
							title: (0, _wordpress_i18n.__)("What is a Single Page Template?", "elementor"),
							content: (0, _wordpress_i18n.__)("A single page template allows you to easily create the layout and style of pages, ensuring design consistency across all the pages of your site.", "elementor"),
							tip: (0, _wordpress_i18n.__)("You can create multiple single page templates, and assign each to different areas of your site.", "elementor"),
							docs: "https://go.elementor.com/app-theme-builder-page/",
							video_url: "https://www.youtube.com/embed/_y5eZ60lVoY"
						}
					},
					{
						type: "single-post",
						icon: "eicon-single-post",
						title: (0, _wordpress_i18n.__)("Single Post", "elementor"),
						urls: { thumbnail: elementorAppConfig.assets_url + "/images/app/site-editor/single-post.svg" },
						tooltip_data: {
							title: (0, _wordpress_i18n.__)("What is a Single Post Template?", "elementor"),
							content: (0, _wordpress_i18n.__)("A single post template allows you to easily design the layout and style of posts, ensuring a design consistency throughout all your blog posts, for example.", "elementor"),
							tip: (0, _wordpress_i18n.__)("You can create multiple single post templates, and assign each to a different category.", "elementor"),
							docs: "https://go.elementor.com/app-theme-builder-post/",
							video_url: "https://www.youtube.com/embed/8Fk-Edu7DL0"
						}
					},
					{
						type: "archive",
						icon: "eicon-archive",
						title: (0, _wordpress_i18n.__)("Archive", "elementor"),
						urls: { thumbnail: elementorAppConfig.assets_url + "/images/app/site-editor/archive.svg" },
						tooltip_data: {
							title: (0, _wordpress_i18n.__)("What is an Archive Template?", "elementor"),
							content: (0, _wordpress_i18n.__)("An archive template allows you to easily design the layout and style of archive pages - those pages that show a list of posts (e.g. a blog’s list of recent posts), which may be filtered by terms such as authors, categories, tags, search results, etc.", "elementor"),
							tip: (0, _wordpress_i18n.__)("If you’d like a different style for a specific category, it’s easy to create a separate archive template whose condition is to only display when users are viewing that category’s list of posts.", "elementor"),
							docs: "https://go.elementor.com/app-theme-builder-archive/",
							video_url: "https://www.youtube.com/embed/wxElpEh9bfA"
						}
					},
					{
						type: "search-results",
						icon: "eicon-search-results",
						title: (0, _wordpress_i18n.__)("search results page", "elementor"),
						urls: { thumbnail: elementorAppConfig.assets_url + "/images/app/site-editor/search-results.svg" },
						tooltip_data: {
							title: (0, _wordpress_i18n.__)("What is a Search Results Template?", "elementor"),
							content: (0, _wordpress_i18n.__)("You can easily control the layout and design of the Search Results page with the Search Results template, which is simply a special archive template just for displaying search results.", "elementor"),
							tip: (0, _wordpress_i18n.__)("You can customize the message if there are no results for the search term.", "elementor"),
							docs: "https://go.elementor.com/app-theme-builder-search-results/",
							video_url: "https://www.youtube.com/embed/KKkIU_L5sDo"
						}
					},
					{
						type: "product",
						icon: "eicon-single-product",
						title: (0, _wordpress_i18n.__)("Product", "elementor"),
						urls: { thumbnail: elementorAppConfig.assets_url + "/images/app/site-editor/product.svg" },
						tooltip_data: {
							title: (0, _wordpress_i18n.__)("What is a Single Product Template?", "elementor"),
							content: (0, _wordpress_i18n.__)("A single product template allows you to easily design the layout and style of WooCommerce single product pages, and apply that template to various conditions that you assign.", "elementor"),
							tip: (0, _wordpress_i18n.__)("You can create multiple single product templates, and assign each to different types of products, enabling a custom design for each group of similar products.", "elementor"),
							docs: "https://go.elementor.com/app-theme-builder-product/",
							video_url: "https://www.youtube.com/embed/PjhoB1RWkBM"
						}
					},
					{
						type: "products",
						icon: "eicon-products",
						title: (0, _wordpress_i18n.__)("Products Archive", "elementor"),
						urls: { thumbnail: elementorAppConfig.assets_url + "/images/app/site-editor/products.svg" },
						tooltip_data: {
							title: (0, _wordpress_i18n.__)("What is a Products Archive Template?", "elementor"),
							content: (0, _wordpress_i18n.__)("A products archive template allows you to easily design the layout and style of your WooCommerce shop page or other product archive pages - those pages that show a list of products, which may be filtered by terms such as categories, tags, etc.", "elementor"),
							tip: (0, _wordpress_i18n.__)("You can create multiple archive product templates, and assign each to different categories of products. This gives you the freedom to customize the appearance for each type of product being shown.", "elementor"),
							docs: "https://go.elementor.com/app-theme-builder-products-archive/",
							video_url: "https://www.youtube.com/embed/cQLeirgkguA"
						}
					},
					{
						type: "error-404",
						icon: "eicon-error-404",
						title: (0, _wordpress_i18n.__)("404 page", "elementor"),
						urls: { thumbnail: elementorAppConfig.assets_url + "/images/app/site-editor/error-404.svg" },
						tooltip_data: {
							title: (0, _wordpress_i18n.__)("What is a 404 Page Template?", "elementor"),
							content: (0, _wordpress_i18n.__)("A 404 page template allows you to easily design the layout and style of the page that is displayed when a visitor arrives at a page that does not exist.", "elementor"),
							tip: (0, _wordpress_i18n.__)("Keep your site's visitors happy when they get lost by displaying your recent posts, a search bar, or any information that might help the user find what they were looking for.", "elementor"),
							docs: "https://go.elementor.com/app-theme-builder-404/",
							video_url: "https://www.youtube.com/embed/ACCNp9tBMQg"
						}
					}
				];
			}
		}]);
	}();

//#endregion
//#region app/modules/site-editor/assets/js/package.js
	var package_default = {
		AllPartsButton,
		Layout,
		Module: SiteEditor,
		NotFound,
		SitePart,
		SiteParts,
		TemplateTypesContext: Context
	};

//#endregion
//#region app/assets/js/app-packages.js
/**
	* Temporary solution for share components.
	* TODO.
	*/
	window.elementorAppPackages = {
		appUi,
		components,
		hooks,
		router,
		siteEditor: package_default
	};

//#endregion
})(React, wp.i18n);
//# sourceMappingURL=app-packages.js.map