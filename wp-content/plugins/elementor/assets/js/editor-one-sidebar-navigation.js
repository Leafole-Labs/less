(function(react, react_dom, _elementor_ui, _elementor_icons_ChevronRightIcon, _elementor_icons_AdjustmentsIcon, _elementor_icons_FolderIcon, _elementor_icons_RocketIcon, _elementor_icons_HomeIcon, _elementor_icons_SendIcon, _elementor_icons_SettingsIcon, _elementor_icons_UsersIcon, _elementor_icons_PlugIcon, _elementor_icons_FileSettingsIcon, _elementor_icons_ChevronDownSmallIcon, _elementor_icons, _elementor_icons_SearchIcon) {

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
_elementor_icons_ChevronRightIcon = __toESM(_elementor_icons_ChevronRightIcon);
_elementor_icons_AdjustmentsIcon = __toESM(_elementor_icons_AdjustmentsIcon);
_elementor_icons_FolderIcon = __toESM(_elementor_icons_FolderIcon);
_elementor_icons_RocketIcon = __toESM(_elementor_icons_RocketIcon);
_elementor_icons_HomeIcon = __toESM(_elementor_icons_HomeIcon);
_elementor_icons_SendIcon = __toESM(_elementor_icons_SendIcon);
_elementor_icons_SettingsIcon = __toESM(_elementor_icons_SettingsIcon);
_elementor_icons_UsersIcon = __toESM(_elementor_icons_UsersIcon);
_elementor_icons_PlugIcon = __toESM(_elementor_icons_PlugIcon);
_elementor_icons_FileSettingsIcon = __toESM(_elementor_icons_FileSettingsIcon);
_elementor_icons_ChevronDownSmallIcon = __toESM(_elementor_icons_ChevronDownSmallIcon);
_elementor_icons_SearchIcon = __toESM(_elementor_icons_SearchIcon);

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
//#region modules/editor-one/assets/js/sidebar-navigation/components/icons/editor.js
	var EditorIcon = function EditorIcon(props) {
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, _extends({
			width: "22",
			height: "22",
			viewBox: "0 0 22 22",
			fill: "none"
		}, props), /*#__PURE__*/ react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/ react.default.createElement("path", {
			d: "M16.8622 12.1197V4.74246C16.8621 2.70533 15.2107 1.05396 13.1735 1.05396H4.74246C2.70535 1.05398 1.05398 2.70535 1.05396 4.74246V14.2274C1.05396 16.2645 2.70533 17.916 4.74246 17.916H12.1197C12.4107 17.916 12.6466 18.152 12.6466 18.443C12.6465 18.734 12.4107 18.9698 12.1197 18.9698H4.74246C2.12329 18.9698 0 16.8465 0 14.2274V4.74246C2.28646e-05 2.1233 2.1233 2.21612e-05 4.74246 0H13.1735C15.7927 2.60738e-07 17.916 2.12329 17.916 4.74246V12.1197C17.916 12.4107 17.68 12.6466 17.389 12.6466C17.098 12.6465 16.8622 12.4107 16.8622 12.1197Z",
			fill: "black",
			fillOpacity: "0.56"
		}), /*#__PURE__*/ react.default.createElement("path", {
			d: "M9.29598 11.3878C8.81835 10.0982 10.1012 8.85589 11.3748 9.3747L21.0159 13.3025C22.3228 13.835 22.3301 15.6829 21.0275 16.2257L17.4478 17.7172C17.3249 17.7684 17.2259 17.8644 17.1708 17.9856L15.7665 21.0751C15.1824 22.36 13.3351 22.2935 12.8449 20.9699L9.29598 11.3878ZM10.9772 10.3507C10.5527 10.1778 10.125 10.5919 10.2842 11.0217L13.8332 20.604C13.9966 21.0451 14.6124 21.0672 14.8071 20.6389L16.2113 17.5495C16.3767 17.1858 16.6737 16.8981 17.0425 16.7444L20.6222 15.2529C21.0563 15.0719 21.0538 14.456 20.6182 14.2786L10.9772 10.3507Z",
			fill: "black",
			fillOpacity: "0.56"
		})));
	};

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
//#region modules/editor-one/assets/js/sidebar-navigation/classes/menu-active-state-resolver.js
	var MenuActiveStateResolver = /*#__PURE__*/ function() {
		function MenuActiveStateResolver(activeMenuSlug, activeChildSlug) {
			_classCallCheck(this, MenuActiveStateResolver);
			this.activeMenuSlug = activeMenuSlug;
			this.activeChildSlug = activeChildSlug;
		}
		return _createClass(MenuActiveStateResolver, [{
			key: "isMenuActive",
			value: function isMenuActive(item) {
				return item.slug === this.activeMenuSlug;
			}
		}, {
			key: "isChildActive",
			value: function isChildActive(childItem) {
				return childItem.slug === this.activeChildSlug;
			}
		}]);
	}();

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
//#region assets/dev/js/editor/utils/editor-one-events.js
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
	var EditorOneEventManager = /*#__PURE__*/ function() {
		function EditorOneEventManager() {
			_classCallCheck(this, EditorOneEventManager);
		}
		return _createClass(EditorOneEventManager, null, [
			{
				key: "getEventsManager",
				value: function getEventsManager() {
					var _elementorCommon;
					return (_elementorCommon = elementorCommon) === null || _elementorCommon === void 0 ? void 0 : _elementorCommon.eventsManager;
				}
			},
			{
				key: "getConfig",
				value: function getConfig() {
					var _this$getEventsManage;
					return (_this$getEventsManage = this.getEventsManager()) === null || _this$getEventsManage === void 0 ? void 0 : _this$getEventsManage.config;
				}
			},
			{
				key: "canSendEvents",
				value: function canSendEvents() {
					var _elementorCommon2;
					return ((_elementorCommon2 = elementorCommon) === null || _elementorCommon2 === void 0 || (_elementorCommon2 = _elementorCommon2.config) === null || _elementorCommon2 === void 0 || (_elementorCommon2 = _elementorCommon2.editor_events) === null || _elementorCommon2 === void 0 ? void 0 : _elementorCommon2.can_send_events) || false;
				}
			},
			{
				key: "isEventsManagerAvailable",
				value: function isEventsManagerAvailable() {
					var eventsManager = this.getEventsManager();
					return eventsManager && "function" === typeof eventsManager.dispatchEvent;
				}
			},
			{
				key: "dispatchEvent",
				value: function dispatchEvent(eventName, payload) {
					try {
						if (!this.isEventsManagerAvailable() || !this.canSendEvents()) return false;
						this.getEventsManager().dispatchEvent(eventName, payload);
						return true;
					} catch (error) {
						return false;
					}
				}
			},
			{
				key: "toLowerSnake",
				value: function toLowerSnake(value) {
					if (!value || "string" !== typeof value) return value;
					return value.replace(/\s+/g, "_").toLowerCase();
				}
			},
			{
				key: "decodeHtmlEntities",
				value: function decodeHtmlEntities(text) {
					if (!text || "string" !== typeof text) return text;
					return new DOMParser().parseFromString(text, "text/html").body.textContent || text;
				}
			},
			{
				key: "isInEditorContext",
				value: function isInEditorContext() {
					var _window$elementor;
					return "undefined" !== typeof window.elementor && !!((_window$elementor = window.elementor) !== null && _window$elementor !== void 0 && _window$elementor.documents);
				}
			},
			{
				key: "getFinderContext",
				value: function getFinderContext() {
					var _config$appTypes;
					var _config$appTypes2;
					var _config$locations;
					var _config$locations2;
					var config = this.getConfig();
					var isEditor = this.isInEditorContext();
					return {
						windowName: isEditor ? config === null || config === void 0 || (_config$appTypes = config.appTypes) === null || _config$appTypes === void 0 ? void 0 : _config$appTypes.editor : config === null || config === void 0 || (_config$appTypes2 = config.appTypes) === null || _config$appTypes2 === void 0 ? void 0 : _config$appTypes2.wpAdmin,
						targetLocation: this.toLowerSnake(isEditor ? config === null || config === void 0 || (_config$locations = config.locations) === null || _config$locations === void 0 ? void 0 : _config$locations.topBar : config === null || config === void 0 || (_config$locations2 = config.locations) === null || _config$locations2 === void 0 ? void 0 : _config$locations2.sidebar)
					};
				}
			},
			{
				key: "createBasePayload",
				value: function createBasePayload() {
					var _config$appTypes$edit;
					var _config$appTypes3;
					var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					var config = this.getConfig();
					return _objectSpread({ window_name: (_config$appTypes$edit = config === null || config === void 0 || (_config$appTypes3 = config.appTypes) === null || _config$appTypes3 === void 0 ? void 0 : _config$appTypes3.editor) !== null && _config$appTypes$edit !== void 0 ? _config$appTypes$edit : "editor" }, overrides);
				}
			},
			{
				key: "sendTopBarPublishDropdown",
				value: function sendTopBarPublishDropdown(targetName) {
					var _config$names;
					var _config$triggers;
					var _config$targetTypes;
					var _config$interactionRe;
					var _config$locations3;
					var _config$secondaryLoca;
					var _config$targetTypes2;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names = config.names) === null || _config$names === void 0 || (_config$names = _config$names.editorOne) === null || _config$names === void 0 ? void 0 : _config$names.topBarPublishDropdown, this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers = config.triggers) === null || _config$triggers === void 0 ? void 0 : _config$triggers.click),
						target_type: config === null || config === void 0 || (_config$targetTypes = config.targetTypes) === null || _config$targetTypes === void 0 ? void 0 : _config$targetTypes.dropdownItem,
						target_name: targetName,
						interaction_result: config === null || config === void 0 || (_config$interactionRe = config.interactionResults) === null || _config$interactionRe === void 0 ? void 0 : _config$interactionRe.actionSelected,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations3 = config.locations) === null || _config$locations3 === void 0 ? void 0 : _config$locations3.topBar),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca = config.secondaryLocations) === null || _config$secondaryLoca === void 0 ? void 0 : _config$secondaryLoca.publishDropdown),
						location_l2: config === null || config === void 0 || (_config$targetTypes2 = config.targetTypes) === null || _config$targetTypes2 === void 0 ? void 0 : _config$targetTypes2.dropdownItem,
						interaction_description: "User selected an action from the publish dropdown"
					}));
				}
			},
			{
				key: "sendTopBarPageList",
				value: function sendTopBarPageList(targetName) {
					var _config$names2;
					var _config$triggers2;
					var _config$targetTypes3;
					var _config$interactionRe2;
					var _config$interactionRe3;
					var _config$locations4;
					var _config$secondaryLoca2;
					var _config$targetTypes4;
					var isCreate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names2 = config.names) === null || _config$names2 === void 0 || (_config$names2 = _config$names2.editorOne) === null || _config$names2 === void 0 ? void 0 : _config$names2.topBarPageList, this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers2 = config.triggers) === null || _config$triggers2 === void 0 ? void 0 : _config$triggers2.click),
						target_type: config === null || config === void 0 || (_config$targetTypes3 = config.targetTypes) === null || _config$targetTypes3 === void 0 ? void 0 : _config$targetTypes3.dropdownItem,
						target_name: targetName,
						interaction_result: isCreate ? config === null || config === void 0 || (_config$interactionRe2 = config.interactionResults) === null || _config$interactionRe2 === void 0 ? void 0 : _config$interactionRe2.create : config === null || config === void 0 || (_config$interactionRe3 = config.interactionResults) === null || _config$interactionRe3 === void 0 ? void 0 : _config$interactionRe3.navigate,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations4 = config.locations) === null || _config$locations4 === void 0 ? void 0 : _config$locations4.topBar),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca2 = config.secondaryLocations) === null || _config$secondaryLoca2 === void 0 ? void 0 : _config$secondaryLoca2.pageListDropdown),
						location_l2: config === null || config === void 0 || (_config$targetTypes4 = config.targetTypes) === null || _config$targetTypes4 === void 0 ? void 0 : _config$targetTypes4.dropdownItem,
						interaction_description: "User selected an action from the page list dropdown"
					}));
				}
			},
			{
				key: "sendSiteSettingsSession",
				value: function sendSiteSettingsSession(_ref) {
					var _config$names3;
					var _config$triggers3;
					var _config$interactionRe4;
					var _config$locations5;
					var _config$secondaryLoca3;
					var targetType = _ref.targetType;
					var _ref$visitedItems = _ref.visitedItems;
					var visitedItems = _ref$visitedItems === void 0 ? [] : _ref$visitedItems;
					var _ref$savedItems = _ref.savedItems;
					var savedItems = _ref$savedItems === void 0 ? [] : _ref$savedItems;
					var state = _ref.state;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names3 = config.names) === null || _config$names3 === void 0 || (_config$names3 = _config$names3.editorOne) === null || _config$names3 === void 0 ? void 0 : _config$names3.siteSettingsSession, this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers3 = config.triggers) === null || _config$triggers3 === void 0 ? void 0 : _config$triggers3.click),
						target_type: targetType,
						target_name: "site_settings",
						interaction_result: config === null || config === void 0 || (_config$interactionRe4 = config.interactionResults) === null || _config$interactionRe4 === void 0 ? void 0 : _config$interactionRe4.sessionEnd,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations5 = config.locations) === null || _config$locations5 === void 0 ? void 0 : _config$locations5.leftPanel),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca3 = config.secondaryLocations) === null || _config$secondaryLoca3 === void 0 ? void 0 : _config$secondaryLoca3.siteSettings),
						interaction_description: "Records areas visited as part of the site setting session",
						metadata: {
							visited_items: visitedItems,
							saved_items: savedItems
						},
						state
					}));
				}
			},
			{
				key: "sendELibraryNav",
				value: function sendELibraryNav(tabName) {
					var _config$names4;
					var _config$triggers4;
					var _config$targetTypes5;
					var _config$interactionRe5;
					var _config$locations6;
					var _config$secondaryLoca4;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names4 = config.names) === null || _config$names4 === void 0 || (_config$names4 = _config$names4.editorOne) === null || _config$names4 === void 0 ? void 0 : _config$names4.eLibraryNav, this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers4 = config.triggers) === null || _config$triggers4 === void 0 ? void 0 : _config$triggers4.tabSelect),
						target_type: config === null || config === void 0 || (_config$targetTypes5 = config.targetTypes) === null || _config$targetTypes5 === void 0 ? void 0 : _config$targetTypes5.tab,
						target_name: this.toLowerSnake(tabName),
						interaction_result: config === null || config === void 0 || (_config$interactionRe5 = config.interactionResults) === null || _config$interactionRe5 === void 0 ? void 0 : _config$interactionRe5.tabChanged,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations6 = config.locations) === null || _config$locations6 === void 0 ? void 0 : _config$locations6.elementorLibrary),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca4 = config.secondaryLocations) === null || _config$secondaryLoca4 === void 0 ? void 0 : _config$secondaryLoca4.libraryTabs),
						interaction_description: "User navigates within elementor library"
					}));
				}
			},
			{
				key: "sendELibraryInsert",
				value: function sendELibraryInsert(_ref2) {
					var _config$triggers5;
					var _config$targetTypes6;
					var _config$interactionRe6;
					var _config$locations7;
					var _config$secondaryLoca5;
					var _config$names5;
					var assetId = _ref2.assetId;
					var assetName = _ref2.assetName;
					var libraryType = _ref2.libraryType;
					var _ref2$proRequired = _ref2.proRequired;
					var proRequired = _ref2$proRequired === void 0 ? false : _ref2$proRequired;
					var config = this.getConfig();
					var payload = this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers5 = config.triggers) === null || _config$triggers5 === void 0 ? void 0 : _config$triggers5.insert),
						target_type: config === null || config === void 0 || (_config$targetTypes6 = config.targetTypes) === null || _config$targetTypes6 === void 0 ? void 0 : _config$targetTypes6.button,
						target_name: String(assetId),
						interaction_result: config === null || config === void 0 || (_config$interactionRe6 = config.interactionResults) === null || _config$interactionRe6 === void 0 ? void 0 : _config$interactionRe6.assetInserted,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations7 = config.locations) === null || _config$locations7 === void 0 ? void 0 : _config$locations7.elementorLibrary),
						location_l1: this.toLowerSnake(libraryType),
						location_l2: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca5 = config.secondaryLocations) === null || _config$secondaryLoca5 === void 0 ? void 0 : _config$secondaryLoca5.assetCard),
						interaction_description: "User inserts block/pages from elementor library",
						metadata: {
							template_id: String(assetId),
							template_name: this.decodeHtmlEntities(assetName) || ""
						}
					});
					if (proRequired) payload.state = "pro_plan_required";
					return this.dispatchEvent(config === null || config === void 0 || (_config$names5 = config.names) === null || _config$names5 === void 0 || (_config$names5 = _config$names5.editorOne) === null || _config$names5 === void 0 ? void 0 : _config$names5.eLibraryInsert, payload);
				}
			},
			{
				key: "sendELibraryFavorite",
				value: function sendELibraryFavorite(_ref3) {
					var _config$triggers6;
					var _config$targetTypes7;
					var _config$interactionRe7;
					var _config$locations8;
					var _config$secondaryLoca6;
					var _config$names6;
					var assetId = _ref3.assetId;
					var assetName = _ref3.assetName;
					var libraryType = _ref3.libraryType;
					var isFavorite = _ref3.isFavorite;
					var _ref3$proRequired = _ref3.proRequired;
					var proRequired = _ref3$proRequired === void 0 ? false : _ref3$proRequired;
					var config = this.getConfig();
					var payload = this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers6 = config.triggers) === null || _config$triggers6 === void 0 ? void 0 : _config$triggers6.click),
						target_type: config === null || config === void 0 || (_config$targetTypes7 = config.targetTypes) === null || _config$targetTypes7 === void 0 ? void 0 : _config$targetTypes7.toggle,
						target_name: String(assetId),
						interaction_result: config === null || config === void 0 || (_config$interactionRe7 = config.interactionResults) === null || _config$interactionRe7 === void 0 ? void 0 : _config$interactionRe7.assetFavorite,
						target_value: Boolean(isFavorite),
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations8 = config.locations) === null || _config$locations8 === void 0 ? void 0 : _config$locations8.elementorLibrary),
						location_l1: this.toLowerSnake(libraryType),
						location_l2: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca6 = config.secondaryLocations) === null || _config$secondaryLoca6 === void 0 ? void 0 : _config$secondaryLoca6.assetCard),
						interaction_description: "User favorite block/pages from elementor library",
						metadata: {
							template_id: String(assetId),
							template_name: this.decodeHtmlEntities(assetName) || ""
						}
					});
					if (proRequired) payload.state = "pro_plan_required";
					return this.dispatchEvent(config === null || config === void 0 || (_config$names6 = config.names) === null || _config$names6 === void 0 || (_config$names6 = _config$names6.editorOne) === null || _config$names6 === void 0 ? void 0 : _config$names6.eLibraryFavorite, payload);
				}
			},
			{
				key: "sendELibraryGenerateAi",
				value: function sendELibraryGenerateAi(_ref4) {
					var _config$names7;
					var _config$triggers7;
					var _config$targetTypes8;
					var _config$interactionRe8;
					var _config$locations9;
					var _config$secondaryLoca7;
					var assetId = _ref4.assetId;
					var assetName = _ref4.assetName;
					var libraryType = _ref4.libraryType;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names7 = config.names) === null || _config$names7 === void 0 || (_config$names7 = _config$names7.editorOne) === null || _config$names7 === void 0 ? void 0 : _config$names7.eLibraryGenerateAi, this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers7 = config.triggers) === null || _config$triggers7 === void 0 ? void 0 : _config$triggers7.click),
						target_type: config === null || config === void 0 || (_config$targetTypes8 = config.targetTypes) === null || _config$targetTypes8 === void 0 ? void 0 : _config$targetTypes8.button,
						target_name: String(assetId),
						interaction_result: config === null || config === void 0 || (_config$interactionRe8 = config.interactionResults) === null || _config$interactionRe8 === void 0 ? void 0 : _config$interactionRe8.aiGenerate,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations9 = config.locations) === null || _config$locations9 === void 0 ? void 0 : _config$locations9.elementorLibrary),
						location_l1: this.toLowerSnake(libraryType),
						location_l2: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca7 = config.secondaryLocations) === null || _config$secondaryLoca7 === void 0 ? void 0 : _config$secondaryLoca7.assetCard),
						interaction_description: "User generated block/page based on a library asset",
						metadata: {
							template_id: String(assetId),
							template_name: this.decodeHtmlEntities(assetName) || ""
						}
					}));
				}
			},
			{
				key: "sendFinderSearchInput",
				value: function sendFinderSearchInput(_ref5) {
					var _config$triggers8;
					var _config$targetTypes9;
					var _config$interactionRe9;
					var _config$interactionRe0;
					var _config$secondaryLoca8;
					var _config$names8;
					var resultsCount = _ref5.resultsCount;
					var _ref5$searchTerm = _ref5.searchTerm;
					var searchTerm = _ref5$searchTerm === void 0 ? null : _ref5$searchTerm;
					var config = this.getConfig();
					var hasResults = resultsCount > 0;
					var finderContext = this.getFinderContext();
					var payload = this.createBasePayload({
						window_name: finderContext.windowName,
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers8 = config.triggers) === null || _config$triggers8 === void 0 ? void 0 : _config$triggers8.typing),
						target_type: config === null || config === void 0 || (_config$targetTypes9 = config.targetTypes) === null || _config$targetTypes9 === void 0 ? void 0 : _config$targetTypes9.searchInput,
						target_name: "finder",
						interaction_result: hasResults ? config === null || config === void 0 || (_config$interactionRe9 = config.interactionResults) === null || _config$interactionRe9 === void 0 ? void 0 : _config$interactionRe9.resultsUpdated : config === null || config === void 0 || (_config$interactionRe0 = config.interactionResults) === null || _config$interactionRe0 === void 0 ? void 0 : _config$interactionRe0.noResults,
						target_location: finderContext.targetLocation,
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca8 = config.secondaryLocations) === null || _config$secondaryLoca8 === void 0 ? void 0 : _config$secondaryLoca8.finder),
						interaction_description: "Finder search input, follows debounce behavior",
						metadata: { results_count: resultsCount }
					});
					if (!hasResults && searchTerm) payload.metadata.search_term = searchTerm;
					return this.dispatchEvent(config === null || config === void 0 || (_config$names8 = config.names) === null || _config$names8 === void 0 || (_config$names8 = _config$names8.editorOne) === null || _config$names8 === void 0 ? void 0 : _config$names8.finderSearchInput, payload);
				}
			},
			{
				key: "sendFinderResultSelect",
				value: function sendFinderResultSelect(choice) {
					var _config$names9;
					var _config$triggers9;
					var _config$targetTypes0;
					var _config$interactionRe1;
					var _config$secondaryLoca9;
					var _config$secondaryLoca0;
					var config = this.getConfig();
					var finderContext = this.getFinderContext();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names9 = config.names) === null || _config$names9 === void 0 || (_config$names9 = _config$names9.editorOne) === null || _config$names9 === void 0 ? void 0 : _config$names9.finderResultSelect, this.createBasePayload({
						window_name: finderContext.windowName,
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers9 = config.triggers) === null || _config$triggers9 === void 0 ? void 0 : _config$triggers9.click),
						target_type: config === null || config === void 0 || (_config$targetTypes0 = config.targetTypes) === null || _config$targetTypes0 === void 0 ? void 0 : _config$targetTypes0.searchResult,
						target_name: choice,
						interaction_result: config === null || config === void 0 || (_config$interactionRe1 = config.interactionResults) === null || _config$interactionRe1 === void 0 ? void 0 : _config$interactionRe1.selected,
						target_location: finderContext.targetLocation,
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca9 = config.secondaryLocations) === null || _config$secondaryLoca9 === void 0 ? void 0 : _config$secondaryLoca9.finder),
						location_l2: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca0 = config.secondaryLocations) === null || _config$secondaryLoca0 === void 0 ? void 0 : _config$secondaryLoca0.finderResults),
						interaction_description: "Finder search results was selected"
					}));
				}
			},
			{
				key: "sendCanvasEmptyBoxAction",
				value: function sendCanvasEmptyBoxAction(_ref6) {
					var _config$triggers0;
					var _config$targetTypes1;
					var _config$interactionRe10;
					var _config$locations0;
					var _config$secondaryLoca1;
					var _config$names0;
					var targetName = _ref6.targetName;
					var _ref6$metadata = _ref6.metadata;
					var metadata = _ref6$metadata === void 0 ? {} : _ref6$metadata;
					var _ref6$containerCreate = _ref6.containerCreated;
					var containerCreated = _ref6$containerCreate === void 0 ? null : _ref6$containerCreate;
					var config = this.getConfig();
					var payload = this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers0 = config.triggers) === null || _config$triggers0 === void 0 ? void 0 : _config$triggers0.click),
						target_type: config === null || config === void 0 || (_config$targetTypes1 = config.targetTypes) === null || _config$targetTypes1 === void 0 ? void 0 : _config$targetTypes1.buttons,
						target_name: targetName,
						interaction_result: config === null || config === void 0 || (_config$interactionRe10 = config.interactionResults) === null || _config$interactionRe10 === void 0 ? void 0 : _config$interactionRe10.selected,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations0 = config.locations) === null || _config$locations0 === void 0 ? void 0 : _config$locations0.canvas),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca1 = config.secondaryLocations) === null || _config$secondaryLoca1 === void 0 ? void 0 : _config$secondaryLoca1.emptyBox),
						interaction_description: "Empty box on canvas actions"
					});
					if (Object.keys(metadata).length > 0) payload.metadata = metadata;
					if (containerCreated !== null) payload.state = containerCreated;
					return this.dispatchEvent(config === null || config === void 0 || (_config$names0 = config.names) === null || _config$names0 === void 0 || (_config$names0 = _config$names0.editorOne) === null || _config$names0 === void 0 ? void 0 : _config$names0.canvasEmptyBoxAction, payload);
				}
			},
			{
				key: "sendWidgetPanelSearch",
				value: function sendWidgetPanelSearch(_ref7) {
					var _config$triggers1;
					var _config$targetTypes10;
					var _config$interactionRe11;
					var _config$interactionRe12;
					var _config$locations1;
					var _config$locations10;
					var _config$secondaryLoca10;
					var _config$names1;
					var resultsCount = _ref7.resultsCount;
					var _ref7$userInput = _ref7.userInput;
					var userInput = _ref7$userInput === void 0 ? null : _ref7$userInput;
					var config = this.getConfig();
					var hasResults = resultsCount > 0;
					var payload = this.createBasePayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers1 = config.triggers) === null || _config$triggers1 === void 0 ? void 0 : _config$triggers1.typing),
						target_type: config === null || config === void 0 || (_config$targetTypes10 = config.targetTypes) === null || _config$targetTypes10 === void 0 ? void 0 : _config$targetTypes10.searchWidget,
						target_name: "search_widget",
						interaction_result: hasResults ? config === null || config === void 0 || (_config$interactionRe11 = config.interactionResults) === null || _config$interactionRe11 === void 0 ? void 0 : _config$interactionRe11.resultsUpdated : config === null || config === void 0 || (_config$interactionRe12 = config.interactionResults) === null || _config$interactionRe12 === void 0 ? void 0 : _config$interactionRe12.noResults,
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations1 = config.locations) === null || _config$locations1 === void 0 ? void 0 : _config$locations1.leftPanel),
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$locations10 = config.locations) === null || _config$locations10 === void 0 ? void 0 : _config$locations10.widgetPanel),
						location_l2: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca10 = config.secondaryLocations) === null || _config$secondaryLoca10 === void 0 ? void 0 : _config$secondaryLoca10.searchBar),
						interaction_description: "Widget search input, follows debounce behavior"
					});
					if (!hasResults && userInput) payload.metadata = { user_input: userInput };
					return this.dispatchEvent(config === null || config === void 0 || (_config$names1 = config.names) === null || _config$names1 === void 0 || (_config$names1 = _config$names1.editorOne) === null || _config$names1 === void 0 ? void 0 : _config$names1.widgetPanelSearch, payload);
				}
			},
			{
				key: "createWpDashPayload",
				value: function createWpDashPayload() {
					var _config$appTypes$wpDa;
					var _config$appTypes4;
					var _config$locations11;
					var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					var config = this.getConfig();
					return this.createBasePayload(_objectSpread({
						window_name: (_config$appTypes$wpDa = config === null || config === void 0 || (_config$appTypes4 = config.appTypes) === null || _config$appTypes4 === void 0 ? void 0 : _config$appTypes4.wpDash) !== null && _config$appTypes$wpDa !== void 0 ? _config$appTypes$wpDa : "wpdash",
						target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations11 = config.locations) === null || _config$locations11 === void 0 ? void 0 : _config$locations11.wpDashAdmin),
						location_l2: ""
					}, overrides));
				}
			},
			{
				key: "sendWpDashElementorMenuClick",
				value: function sendWpDashElementorMenuClick() {
					var _config$names10;
					var _config$triggers10;
					var _config$targetTypes11;
					var _config$interactionRe13;
					var _config$secondaryLoca11;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names10 = config.names) === null || _config$names10 === void 0 || (_config$names10 = _config$names10.editorOne) === null || _config$names10 === void 0 ? void 0 : _config$names10.wpDashElementorMenuClick, this.createWpDashPayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers10 = config.triggers) === null || _config$triggers10 === void 0 ? void 0 : _config$triggers10.click),
						target_type: config === null || config === void 0 || (_config$targetTypes11 = config.targetTypes) === null || _config$targetTypes11 === void 0 ? void 0 : _config$targetTypes11.wpDashAdminMenuItem,
						target_name: "elementor_menu_item",
						interaction_result: config === null || config === void 0 || (_config$interactionRe13 = config.interactionResults) === null || _config$interactionRe13 === void 0 ? void 0 : _config$interactionRe13.elementorSideMenuOpened,
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca11 = config.secondaryLocations) === null || _config$secondaryLoca11 === void 0 ? void 0 : _config$secondaryLoca11.wpDashElementorCoreMenu),
						interaction_description: "core_user_clicked_elementor_menu_item"
					}));
				}
			},
			{
				key: "sendWpDashEditorSubMenuHover",
				value: function sendWpDashEditorSubMenuHover() {
					var _config$names11;
					var _config$triggers11;
					var _config$targetTypes12;
					var _config$interactionRe14;
					var _config$secondaryLoca12;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names11 = config.names) === null || _config$names11 === void 0 || (_config$names11 = _config$names11.editorOne) === null || _config$names11 === void 0 ? void 0 : _config$names11.wpDashEditorSubMenuHover, this.createWpDashPayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers11 = config.triggers) === null || _config$triggers11 === void 0 ? void 0 : _config$triggers11.hover),
						target_type: config === null || config === void 0 || (_config$targetTypes12 = config.targetTypes) === null || _config$targetTypes12 === void 0 ? void 0 : _config$targetTypes12.wpDashEditorMenu,
						target_name: "wpdash_editor_sub_menu",
						interaction_result: config === null || config === void 0 || (_config$interactionRe14 = config.interactionResults) === null || _config$interactionRe14 === void 0 ? void 0 : _config$interactionRe14.editorSubMenuOpened,
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca12 = config.secondaryLocations) === null || _config$secondaryLoca12 === void 0 ? void 0 : _config$secondaryLoca12.wpDashElementorCoreSubMenu),
						interaction_description: "core_user_hovered_sub_menu"
					}));
				}
			},
			{
				key: "sendWpDashThemeBuilderClick",
				value: function sendWpDashThemeBuilderClick() {
					var _config$names12;
					var _config$triggers12;
					var _config$targetTypes13;
					var _config$interactionRe15;
					var _config$secondaryLoca13;
					var config = this.getConfig();
					return this.dispatchEvent(config === null || config === void 0 || (_config$names12 = config.names) === null || _config$names12 === void 0 || (_config$names12 = _config$names12.editorOne) === null || _config$names12 === void 0 ? void 0 : _config$names12.wpDashThemeBuilderClick, this.createWpDashPayload({
						interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers12 = config.triggers) === null || _config$triggers12 === void 0 ? void 0 : _config$triggers12.click),
						target_type: config === null || config === void 0 || (_config$targetTypes13 = config.targetTypes) === null || _config$targetTypes13 === void 0 ? void 0 : _config$targetTypes13.wpDashSubMenuItem,
						target_name: "theme_builder_menu_item",
						interaction_result: config === null || config === void 0 || (_config$interactionRe15 = config.interactionResults) === null || _config$interactionRe15 === void 0 ? void 0 : _config$interactionRe15.themeBuilderPromotionWindow,
						location_l1: this.toLowerSnake(config === null || config === void 0 || (_config$secondaryLoca13 = config.secondaryLocations) === null || _config$secondaryLoca13 === void 0 ? void 0 : _config$secondaryLoca13.wpDashThemeBuilder),
						interaction_description: "core_user_clicked_theme_builder_menu_item"
					}));
				}
			},
			{
				key: "sendSidebarMenuItemClicked",
				value: function sendSidebarMenuItemClicked(_ref8) {
					var eventId = _ref8.eventId;
					var groupEventId = _ref8.groupEventId;
					try {
						var _config$windowNames;
						var _config$triggers13;
						var _config$targetTypes14;
						var _config$interactionRe16;
						var _config$locations12;
						var _config$names13;
						var config = this.getConfig();
						var payload = this.createBasePayload({
							window_name: config === null || config === void 0 || (_config$windowNames = config.windowNames) === null || _config$windowNames === void 0 ? void 0 : _config$windowNames.sidebarMenu,
							interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers13 = config.triggers) === null || _config$triggers13 === void 0 ? void 0 : _config$triggers13.click),
							target_type: config === null || config === void 0 || (_config$targetTypes14 = config.targetTypes) === null || _config$targetTypes14 === void 0 ? void 0 : _config$targetTypes14.link,
							target_name: eventId,
							interaction_result: config === null || config === void 0 || (_config$interactionRe16 = config.interactionResults) === null || _config$interactionRe16 === void 0 ? void 0 : _config$interactionRe16.pageOpened,
							target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations12 = config.locations) === null || _config$locations12 === void 0 ? void 0 : _config$locations12.sidebar)
						});
						if (groupEventId) payload.location_l1 = groupEventId;
						return this.dispatchEvent(config === null || config === void 0 || (_config$names13 = config.names) === null || _config$names13 === void 0 || (_config$names13 = _config$names13.editorOne) === null || _config$names13 === void 0 ? void 0 : _config$names13.sidebarMenuItemClicked, payload);
					} catch (error) {
						return false;
					}
				}
			},
			{
				key: "sendSidebarMenuGroupToggled",
				value: function sendSidebarMenuGroupToggled(_ref9) {
					var eventId = _ref9.eventId;
					var isExpanded = _ref9.isExpanded;
					try {
						var _config$interactionRe17;
						var _config$interactionRe18;
						var _config$names14;
						var _config$windowNames2;
						var _config$triggers14;
						var _config$targetTypes15;
						var _config$locations13;
						var config = this.getConfig();
						var interactionResult = isExpanded ? config === null || config === void 0 || (_config$interactionRe17 = config.interactionResults) === null || _config$interactionRe17 === void 0 ? void 0 : _config$interactionRe17.expanded : config === null || config === void 0 || (_config$interactionRe18 = config.interactionResults) === null || _config$interactionRe18 === void 0 ? void 0 : _config$interactionRe18.collapsed;
						return this.dispatchEvent(config === null || config === void 0 || (_config$names14 = config.names) === null || _config$names14 === void 0 || (_config$names14 = _config$names14.editorOne) === null || _config$names14 === void 0 ? void 0 : _config$names14.sidebarMenuGroupToggled, this.createBasePayload({
							window_name: config === null || config === void 0 || (_config$windowNames2 = config.windowNames) === null || _config$windowNames2 === void 0 ? void 0 : _config$windowNames2.sidebarMenu,
							interaction_type: this.toLowerSnake(config === null || config === void 0 || (_config$triggers14 = config.triggers) === null || _config$triggers14 === void 0 ? void 0 : _config$triggers14.click),
							target_type: config === null || config === void 0 || (_config$targetTypes15 = config.targetTypes) === null || _config$targetTypes15 === void 0 ? void 0 : _config$targetTypes15.toggle,
							target_name: eventId,
							interaction_result: interactionResult,
							target_location: this.toLowerSnake(config === null || config === void 0 || (_config$locations13 = config.locations) === null || _config$locations13 === void 0 ? void 0 : _config$locations13.sidebar)
						}));
					} catch (error) {
						return false;
					}
				}
			}
		]);
	}();

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/components/icons/tool.js
	var ToolIcon = function ToolIcon(props) {
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.SvgIcon, _extends({
			width: "20",
			height: "20",
			viewBox: "0 0 20 20",
			fill: "none"
		}, props), /*#__PURE__*/ react.default.createElement("path", {
			d: "M5.83329 8.33354H8.33329V5.83354L5.41663 2.91687C6.34965 2.47127 7.39788 2.32588 8.41696 2.50072C9.43604 2.67557 10.3759 3.16205 11.107 3.89318C11.8381 4.62431 12.3246 5.56412 12.4994 6.58321C12.6743 7.60229 12.5289 8.65051 12.0833 9.58354L17.0833 14.5835C17.4148 14.9151 17.6011 15.3647 17.6011 15.8335C17.6011 16.3024 17.4148 16.752 17.0833 17.0835C16.7518 17.4151 16.3021 17.6013 15.8333 17.6013C15.3645 17.6013 14.9148 17.4151 14.5833 17.0835L9.58329 12.0835C8.65027 12.5291 7.60204 12.6745 6.58296 12.4997C5.56388 12.3248 4.62407 11.8384 3.89294 11.1072C3.16181 10.3761 2.67533 9.43628 2.50048 8.4172C2.32563 7.39812 2.47102 6.3499 2.91663 5.41687L5.83329 8.33354Z",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.2",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}));
	};

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/components/shared/icon-map.js
	var ICON_MAP = {
		adjustments: _elementor_icons_AdjustmentsIcon.default,
		folder: _elementor_icons_FolderIcon.default,
		home: _elementor_icons_RocketIcon.default,
		send: _elementor_icons_SendIcon.default,
		settings: _elementor_icons_SettingsIcon.default,
		tool: ToolIcon,
		users: _elementor_icons_UsersIcon.default,
		extension: _elementor_icons_PlugIcon.default,
		"file-settings": _elementor_icons_FileSettingsIcon.default
	};
	var DEFAULT_ICON = _elementor_icons_HomeIcon.default;

//#endregion
//#region modules/editor-one/assets/js/shared/is-rtl.js
	function isRTL() {
		var _elementorCommon$conf;
		var _elementorCommon;
		return (_elementorCommon$conf = (_elementorCommon = elementorCommon) === null || _elementorCommon === void 0 || (_elementorCommon = _elementorCommon.config) === null || _elementorCommon === void 0 ? void 0 : _elementorCommon.isRTL) !== null && _elementorCommon$conf !== void 0 ? _elementorCommon$conf : false;
	}

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/components/shared/styled-components.js
	var NavContainer = (0, _elementor_ui.styled)(_elementor_ui.Box)(function(_ref) {
		var theme = _ref.theme;
		return {
			display: "flex",
			flexDirection: "column",
			height: "100%",
			backgroundColor: theme.palette.background.paper,
			borderInlineEnd: "1px solid ".concat(theme.palette.divider)
		};
	});
	var SiteIconBox = (0, _elementor_ui.styled)(_elementor_ui.Box)(function(_ref2) {
		var theme = _ref2.theme;
		return {
			width: 40,
			height: 40,
			borderRadius: theme.shape.borderRadius * 2,
			border: "1px solid ".concat(theme.palette.divider),
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: theme.palette.background.paper,
			color: theme.palette.action.active,
			"& svg": { fontSize: 24 }
		};
	});
	var CollapseButton = (0, _elementor_ui.styled)(_elementor_ui.IconButton, { shouldForwardProp: function shouldForwardProp(prop) {
		return prop !== "expanded";
	} })(function(_ref3) {
		var theme = _ref3.theme;
		var expanded = _ref3.expanded;
		var isRtlLanguage = isRTL();
		var transform = "none";
		if (expanded && isRtlLanguage) transform = "rotate(180deg) scaleX(-1)";
		else if (expanded) transform = "rotate(180deg)";
		else if (isRtlLanguage) transform = "scaleX(-1)";
		return {
			position: "absolute",
			insetInlineEnd: -28,
			bottom: -12,
			width: 24,
			height: 24,
			backgroundColor: theme.palette.background.paper,
			border: "1px solid ".concat(theme.palette.divider),
			color: theme.palette.action.active,
			zIndex: 1,
			"&:hover": { backgroundColor: theme.palette.background.paper },
			"& svg": {
				fontSize: 16,
				transform
			}
		};
	});
	var ScrollableContent = (0, _elementor_ui.styled)(_elementor_ui.Box)({
		flex: 1,
		overflowY: "auto",
		overflowX: "hidden"
	});
	var MenuList = (0, _elementor_ui.styled)(_elementor_ui.List)(function(_ref4) {
		return { padding: _ref4.theme.spacing(2) };
	});
	var MenuItemButton = (0, _elementor_ui.styled)(_elementor_ui.ListItemButton)(function(_ref5) {
		var theme = _ref5.theme;
		return {
			paddingLeft: theme.spacing(1),
			paddingRight: theme.spacing(1),
			marginBottom: 0,
			paddingBottom: theme.spacing(.5),
			whiteSpace: "nowrap",
			justifyContent: "center",
			borderRadius: 4
		};
	});
	var MenuIcon = (0, _elementor_ui.styled)(_elementor_ui.ListItemIcon)(function(_ref6) {
		return {
			minWidth: "auto",
			color: _ref6.theme.palette.text.primary,
			margin: 0,
			display: "flex",
			justifyContent: "center",
			"& svg": { fontSize: 20 }
		};
	});
	var ChildMenuItemButton = (0, _elementor_ui.styled)(_elementor_ui.ListItemButton)(function(_ref7) {
		var theme = _ref7.theme;
		return {
			paddingLeft: theme.spacing(6),
			paddingRight: theme.spacing(2),
			minHeight: 32,
			whiteSpace: "nowrap",
			borderRadius: 4
		};
	});
	var ChildListItem = (0, _elementor_ui.styled)(_elementor_ui.ListItem)({ maxHeight: 32 });
	var ExpandIcon = (0, _elementor_ui.styled)(_elementor_icons_ChevronDownSmallIcon.default, { shouldForwardProp: function shouldForwardProp(prop) {
		return prop !== "expanded";
	} })(function(_ref8) {
		return {
			fontSize: 20,
			transform: _ref8.expanded ? "rotate(180deg)" : "rotate(0deg)",
			transition: "transform 0.2s"
		};
	});
	var CollapsedMenuItemContainer = (0, _elementor_ui.styled)(_elementor_ui.Box)(function(_ref9) {
		return {
			display: "flex",
			justifyContent: "center",
			marginBottom: _ref9.theme.spacing(.5)
		};
	});
	var CollapsedIconButton = (0, _elementor_ui.styled)(_elementor_ui.IconButton, { shouldForwardProp: function shouldForwardProp(prop) {
		return prop !== "isHighlighted";
	} })(function(_ref0) {
		var theme = _ref0.theme;
		var isHighlighted = _ref0.isHighlighted;
		return {
			width: 36,
			height: 36,
			borderRadius: theme.shape.borderRadius,
			backgroundColor: isHighlighted ? theme.palette.action.selected : "transparent",
			color: theme.palette.text.primary,
			"&:hover": { backgroundColor: theme.palette.action.hover },
			"& svg": { fontSize: 20 }
		};
	});
	var PopoverTitle = (0, _elementor_ui.styled)(_elementor_ui.ListSubheader)(function(_ref1) {
		return {
			color: _ref1.theme.palette.text.tertiary,
			fontSize: 12,
			fontWeight: 400,
			height: 28
		};
	});
	var PopoverContent = (0, _elementor_ui.styled)(_elementor_ui.Box)(function(_ref10) {
		var theme = _ref10.theme;
		return {
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1)
		};
	});
	var CollapsedHeaderContainer = (0, _elementor_ui.styled)(_elementor_ui.Box)(function(_ref11) {
		var theme = _ref11.theme;
		return {
			position: "relative",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: 80,
			marginLeft: theme.spacing(2),
			marginRight: theme.spacing(2),
			borderBottom: "1px solid ".concat(theme.palette.divider)
		};
	});
	var PopoverListItemButton = (0, _elementor_ui.styled)(_elementor_ui.ListItemButton)(function(_ref12) {
		var theme = _ref12.theme;
		return {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2),
			paddingTop: theme.spacing(.5),
			paddingBottom: theme.spacing(.5),
			borderRadius: 4
		};
	});
	var StyledPopover = (0, _elementor_ui.styled)(_elementor_ui.Popover)(function(_ref13) {
		var theme = _ref13.theme;
		return {
			pointerEvents: "none",
			"& .MuiPaper-root": {
				marginLeft: theme.spacing(1),
				minWidth: 180,
				borderRadius: theme.shape.borderRadius,
				pointerEvents: "auto"
			}
		};
	});

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/components/collapsed-menu/collapsed-menu-item-popover.js
	var CollapsedMenuItemPopover = function CollapsedMenuItemPopover(_ref) {
		var item = _ref.item;
		var children = _ref.children;
		var activeChildSlug = _ref.activeChildSlug;
		var isPopoverOpen = _ref.isPopoverOpen;
		var anchorEl = _ref.anchorEl;
		var onClose = _ref.onClose;
		var IconComponent = _ref.IconComponent;
		var isActive = _ref.isActive;
		var onMouseEnter = _ref.onMouseEnter;
		var anchorRef = _ref.anchorRef;
		var handleChildClick = function handleChildClick(childItem) {
			EditorOneEventManager.sendSidebarMenuItemClicked({
				eventId: childItem.event_id,
				groupEventId: item.event_id
			});
		};
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.ListItem, {
			disablePadding: true,
			dense: true,
			disableGutters: true,
			onMouseEnter,
			ref: anchorRef
		}, /*#__PURE__*/ react.default.createElement(MenuItemButton, {
			selected: isActive || isPopoverOpen,
			sx: { height: 36 }
		}, /*#__PURE__*/ react.default.createElement(MenuIcon, null, /*#__PURE__*/ react.default.createElement(IconComponent, null))), /*#__PURE__*/ react.default.createElement(StyledPopover, {
			open: isPopoverOpen,
			anchorEl,
			onClose,
			anchorOrigin: {
				vertical: "top",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "left"
			},
			slotProps: { paper: { onMouseLeave: onClose } },
			disableRestoreFocus: true,
			hideBackdrop: true
		}, /*#__PURE__*/ react.default.createElement(PopoverContent, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.List, {
			disablePadding: true,
			dense: true
		}, /*#__PURE__*/ react.default.createElement(PopoverTitle, null, item.label), children.map(function(childItem) {
			return /*#__PURE__*/ react.default.createElement(_elementor_ui.ListItem, {
				key: childItem.slug,
				disablePadding: true,
				disableGutters: true,
				dense: true,
				sx: { height: 28 }
			}, /*#__PURE__*/ react.default.createElement(PopoverListItemButton, {
				component: "a",
				href: childItem.url,
				onClick: function onClick() {
					return handleChildClick(childItem);
				},
				selected: childItem.slug === activeChildSlug
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.ListItemText, {
				primary: childItem.label,
				primaryTypographyProps: { variant: "body2" }
			})));
		})))));
	};
	CollapsedMenuItemPopover.propTypes = {
		item: import_prop_types.default.object.isRequired,
		children: import_prop_types.default.array.isRequired,
		activeChildSlug: import_prop_types.default.string.isRequired,
		isPopoverOpen: import_prop_types.default.bool.isRequired,
		anchorEl: import_prop_types.default.object,
		onClose: import_prop_types.default.func.isRequired,
		IconComponent: import_prop_types.default.elementType.isRequired,
		isActive: import_prop_types.default.bool.isRequired,
		onMouseEnter: import_prop_types.default.func.isRequired,
		anchorRef: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]).isRequired
	};

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/components/collapsed-menu/collapsed-menu-item-tooltip.js
	var CollapsedMenuItemTooltip = function CollapsedMenuItemTooltip(_ref) {
		var item = _ref.item;
		var isActive = _ref.isActive;
		var onClick = _ref.onClick;
		var IconComponent = _ref.IconComponent;
		var onMouseEnter = _ref.onMouseEnter;
		var isRtlLanguage = isRTL();
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.ListItem, {
			disablePadding: true,
			dense: true,
			disableGutters: true,
			onMouseEnter
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.Tooltip, {
			title: item.label,
			placement: isRtlLanguage ? "left" : "right"
		}, /*#__PURE__*/ react.default.createElement(MenuItemButton, {
			onClick,
			selected: isActive,
			sx: { height: 36 }
		}, /*#__PURE__*/ react.default.createElement(MenuIcon, null, /*#__PURE__*/ react.default.createElement(IconComponent, null)))));
	};
	CollapsedMenuItemTooltip.propTypes = {
		item: import_prop_types.default.object.isRequired,
		isActive: import_prop_types.default.bool.isRequired,
		onClick: import_prop_types.default.func.isRequired,
		IconComponent: import_prop_types.default.elementType.isRequired,
		onMouseEnter: import_prop_types.default.func.isRequired
	};

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/components/collapsed-menu/sidebar-collapsed-menu-item.js
	var SidebarCollapsedMenuItem = function SidebarCollapsedMenuItem(_ref) {
		var item = _ref.item;
		var isActive = _ref.isActive;
		var _ref$children = _ref.children;
		var children = _ref$children === void 0 ? null : _ref$children;
		var activeChildSlug = _ref.activeChildSlug;
		var isPopoverOpen = _ref.isPopoverOpen;
		var onOpenPopover = _ref.onOpenPopover;
		var onClosePopover = _ref.onClosePopover;
		var _useState2 = _slicedToArray((0, react.useState)(null), 2);
		var anchorEl = _useState2[0];
		var setAnchorEl = _useState2[1];
		var hasChildren = !!(children !== null && children !== void 0 && children.length);
		var IconComponent = ICON_MAP[item.icon] || DEFAULT_ICON;
		var handleMouseEnter = function handleMouseEnter() {
			if (hasChildren) onOpenPopover(item.slug);
			else onClosePopover();
		};
		return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, hasChildren ? /*#__PURE__*/ react.default.createElement(CollapsedMenuItemPopover, {
			item,
			children,
			activeChildSlug,
			isPopoverOpen,
			anchorEl,
			onClose: onClosePopover,
			IconComponent,
			isActive,
			onMouseEnter: handleMouseEnter,
			anchorRef: setAnchorEl
		}) : /*#__PURE__*/ react.default.createElement(CollapsedMenuItemTooltip, {
			item,
			isActive,
			onClick: function handleClick() {
				if (!hasChildren) {
					EditorOneEventManager.sendSidebarMenuItemClicked({ eventId: item.event_id });
					window.location.href = item.url;
				}
			},
			IconComponent,
			onMouseEnter: handleMouseEnter
		}));
	};
	SidebarCollapsedMenuItem.propTypes = {
		item: import_prop_types.default.object.isRequired,
		isActive: import_prop_types.default.bool.isRequired,
		children: import_prop_types.default.array,
		activeChildSlug: import_prop_types.default.string.isRequired,
		isPopoverOpen: import_prop_types.default.bool.isRequired,
		onOpenPopover: import_prop_types.default.func.isRequired,
		onClosePopover: import_prop_types.default.func.isRequired
	};

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/components/collapsed-menu/sidebar-collapsed-menu.js
	var SidebarCollapsedMenu = function SidebarCollapsedMenu(_ref) {
		var menuItems = _ref.menuItems;
		var level4Groups = _ref.level4Groups;
		var activeMenuSlug = _ref.activeMenuSlug;
		var activeChildSlug = _ref.activeChildSlug;
		var _useState2 = _slicedToArray((0, react.useState)(null), 2);
		var openPopoverSlug = _useState2[0];
		var setOpenPopoverSlug = _useState2[1];
		var activeStateResolver = (0, react.useMemo)(function() {
			return new MenuActiveStateResolver(activeMenuSlug, activeChildSlug);
		}, [activeMenuSlug, activeChildSlug]);
		var getChildren = function getChildren(item) {
			if (!item.group_id) return null;
			var group = level4Groups[item.group_id];
			if (!group || !group.items || !group.items.length) return null;
			return group.items;
		};
		var handleOpenPopover = (0, react.useCallback)(function(slug) {
			setOpenPopoverSlug(slug);
		}, []);
		var handleClosePopover = (0, react.useCallback)(function() {
			setOpenPopoverSlug(null);
		}, []);
		return /*#__PURE__*/ react.default.createElement(MenuList, {
			isCollapsed: true,
			onMouseLeave: handleClosePopover
		}, menuItems.map(function(item) {
			return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, item.has_divider_before && /*#__PURE__*/ react.default.createElement(_elementor_ui.Divider, {
				key: "divider-".concat(item.slug),
				sx: { my: 1 }
			}), /*#__PURE__*/ react.default.createElement(SidebarCollapsedMenuItem, {
				key: item.slug,
				item,
				isActive: activeStateResolver.isMenuActive(item),
				children: getChildren(item),
				activeChildSlug,
				isPopoverOpen: openPopoverSlug === item.slug,
				onOpenPopover: handleOpenPopover,
				onClosePopover: handleClosePopover
			}));
		}));
	};
	SidebarCollapsedMenu.propTypes = {
		menuItems: import_prop_types.default.array.isRequired,
		level4Groups: import_prop_types.default.object.isRequired,
		activeMenuSlug: import_prop_types.default.string.isRequired,
		activeChildSlug: import_prop_types.default.string.isRequired
	};

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/components/cta/styled-components.js
	var CtaContainer = (0, _elementor_ui.styled)(_elementor_ui.Box)(function(_ref) {
		return { padding: _ref.theme.spacing(2) };
	});
	var CtaButton = (0, _elementor_ui.styled)(_elementor_ui.Button)({
		justifyContent: "center",
		whiteSpace: "nowrap"
	});
	var CollapsedCtaContainer = (0, _elementor_ui.styled)(_elementor_ui.Box)(function(_ref2) {
		return {
			padding: _ref2.theme.spacing(2),
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		};
	});
	var CollapsedCtaButton = (0, _elementor_ui.styled)("button")(function(_ref3) {
		var theme = _ref3.theme;
		return {
			border: "1px solid ".concat(theme.palette.promotion.main),
			borderRadius: 999,
			width: 24,
			height: 24,
			padding: 0,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			background: "transparent",
			cursor: "pointer",
			color: theme.palette.promotion.main,
			transition: "all 0.2s ease-in-out",
			whiteSpace: "nowrap",
			"&:hover": { background: theme.palette.promotion.hover },
			"& svg": {
				width: 18,
				height: 18,
				fill: theme.palette.promotion.main
			}
		};
	});

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/components/cta/sidebar-upgrade-cta.js
	var SidebarUpgradeCta = function SidebarUpgradeCta(_ref) {
		var upgradeUrl = _ref.upgradeUrl;
		var upgradeText = _ref.upgradeText;
		var hasPro = _ref.hasPro;
		var collapsed = _ref.collapsed;
		if (true === hasPro || "1" === hasPro || "true" === hasPro) return null;
		var handleUpgradeClick = function handleUpgradeClick() {
			window.open(upgradeUrl, "_blank");
		};
		if (collapsed) return /*#__PURE__*/ react.default.createElement(CollapsedCtaContainer, null, /*#__PURE__*/ react.default.createElement(CollapsedCtaButton, { onClick: handleUpgradeClick }, /*#__PURE__*/ react.default.createElement(_elementor_icons.CrownFilledIcon, null)));
		return /*#__PURE__*/ react.default.createElement(CtaContainer, null, /*#__PURE__*/ react.default.createElement(CtaButton, {
			startIcon: /*#__PURE__*/ react.default.createElement(_elementor_icons.CrownFilledIcon, null),
			onClick: handleUpgradeClick,
			variant: "outlined",
			color: "promotion",
			fullWidth: true
		}, upgradeText));
	};
	SidebarUpgradeCta.propTypes = {
		upgradeUrl: import_prop_types.default.string.isRequired,
		upgradeText: import_prop_types.default.string.isRequired,
		hasPro: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.string]).isRequired,
		collapsed: import_prop_types.default.bool
	};

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/components/header/styled-components.js
	var HeaderContainer = (0, _elementor_ui.styled)(_elementor_ui.Box)(function(_ref) {
		var theme = _ref.theme;
		return {
			position: "relative",
			marginLeft: theme.spacing(2),
			marginRight: theme.spacing(2),
			height: 80,
			borderBottom: "1px solid ".concat(theme.palette.divider),
			display: "flex",
			alignItems: "center"
		};
	});
	var HeaderContent = (0, _elementor_ui.styled)(_elementor_ui.Box)(function(_ref2) {
		return {
			display: "flex",
			alignItems: "center",
			gap: _ref2.theme.spacing(1.5),
			flex: 1
		};
	});
	var SiteTitle = (0, _elementor_ui.styled)(_elementor_ui.Typography)({
		fontWeight: 500,
		flex: 1
	});
	var SearchButton = (0, _elementor_ui.styled)(_elementor_ui.IconButton)(function(_ref3) {
		return {
			fontSize: 20,
			color: _ref3.theme.palette.action.active
		};
	});

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/components/header/sidebar-header.js
	var SidebarHeader = function SidebarHeader(_ref) {
		var siteTitle = _ref.siteTitle;
		var onCollapse = _ref.onCollapse;
		return /*#__PURE__*/ react.default.createElement(HeaderContainer, null, /*#__PURE__*/ react.default.createElement(HeaderContent, null, /*#__PURE__*/ react.default.createElement(SiteIconBox, null, /*#__PURE__*/ react.default.createElement(EditorIcon, null)), /*#__PURE__*/ react.default.createElement(SiteTitle, { variant: "subtitle1" }, siteTitle), /*#__PURE__*/ react.default.createElement(SearchButton, { onClick: function finderAction() {
			$e.route("finder");
		} }, /*#__PURE__*/ react.default.createElement(_elementor_icons_SearchIcon.default, null))), /*#__PURE__*/ react.default.createElement(CollapseButton, {
			onClick: onCollapse,
			size: "small",
			expanded: true
		}, /*#__PURE__*/ react.default.createElement(_elementor_icons_ChevronRightIcon.default, null)));
	};
	SidebarHeader.propTypes = {
		siteTitle: import_prop_types.default.string.isRequired,
		onCollapse: import_prop_types.default.func.isRequired
	};

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/components/menu/sidebar-menu-item.js
	var STORAGE_KEY_PREFIX = "elementor_sidebar_menu_expanded_v2_";
	var SidebarMenuItem = function SidebarMenuItem(_ref) {
		var item = _ref.item;
		var isActive = _ref.isActive;
		var children = _ref.children;
		var activeChildSlug = _ref.activeChildSlug;
		var hasChildren = !!(children !== null && children !== void 0 && children.length);
		var IconComponent = ICON_MAP[item.icon] || DEFAULT_ICON;
		var _useState2 = _slicedToArray((0, react.useState)(function() {
			if (!hasChildren) return false;
			var storageKey = "".concat(STORAGE_KEY_PREFIX).concat(item.slug);
			if (children.some(function(child) {
				return child.slug === activeChildSlug;
			})) {
				localStorage.setItem(storageKey, "true");
				return true;
			}
			var stored = localStorage.getItem(storageKey);
			if (null === stored) return true;
			return "true" === stored;
		}), 2);
		var isExpanded = _useState2[0];
		var setIsExpanded = _useState2[1];
		var handleClick = (0, react.useCallback)(function() {
			if (hasChildren) {
				var newState = !isExpanded;
				setIsExpanded(newState);
				localStorage.setItem("".concat(STORAGE_KEY_PREFIX).concat(item.slug), String(newState));
				EditorOneEventManager.sendSidebarMenuGroupToggled({
					eventId: item.event_id,
					isExpanded: newState
				});
				return;
			}
			EditorOneEventManager.sendSidebarMenuItemClicked({ eventId: item.event_id });
			window.location.href = item.url;
		}, [
			hasChildren,
			isExpanded,
			item.event_id,
			item.slug,
			item.url
		]);
		var handleChildClick = (0, react.useCallback)(function(childItem) {
			EditorOneEventManager.sendSidebarMenuItemClicked({
				eventId: childItem.event_id,
				groupEventId: item.event_id
			});
		}, [item.event_id]);
		return /*#__PURE__*/ react.default.createElement(react.default.Fragment, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.ListItem, {
			disablePadding: true,
			dense: true,
			disableGutters: true
		}, /*#__PURE__*/ react.default.createElement(MenuItemButton, {
			onClick: handleClick,
			selected: isActive && !hasChildren
		}, /*#__PURE__*/ react.default.createElement(MenuIcon, null, /*#__PURE__*/ react.default.createElement(IconComponent, null)), /*#__PURE__*/ react.default.createElement(_elementor_ui.ListItemText, {
			primary: item.label,
			primaryTypographyProps: { variant: "body2" }
		}), hasChildren && /*#__PURE__*/ react.default.createElement(ExpandIcon, { expanded: isExpanded }))), hasChildren && /*#__PURE__*/ react.default.createElement(_elementor_ui.Collapse, {
			in: isExpanded,
			timeout: "auto",
			unmountOnExit: true
		}, /*#__PURE__*/ react.default.createElement(_elementor_ui.List, { disablePadding: true }, children.map(function(childItem) {
			return /*#__PURE__*/ react.default.createElement(ChildListItem, {
				key: childItem.slug,
				disablePadding: true,
				dense: true,
				disableGutters: true
			}, /*#__PURE__*/ react.default.createElement(ChildMenuItemButton, {
				component: "a",
				href: childItem.url,
				onClick: function onClick() {
					return handleChildClick(childItem);
				},
				selected: childItem.slug === activeChildSlug
			}, /*#__PURE__*/ react.default.createElement(_elementor_ui.ListItemText, {
				primary: childItem.label,
				primaryTypographyProps: {
					variant: "body2",
					color: "text.secondary"
				}
			})));
		}))));
	};
	SidebarMenuItem.propTypes = {
		item: import_prop_types.default.object.isRequired,
		isActive: import_prop_types.default.bool.isRequired,
		children: import_prop_types.default.array,
		activeChildSlug: import_prop_types.default.string.isRequired
	};

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/components/menu/sidebar-menu.js
	var SidebarMenu = function SidebarMenu(_ref) {
		var menuItems = _ref.menuItems;
		var level4Groups = _ref.level4Groups;
		var activeMenuSlug = _ref.activeMenuSlug;
		var activeChildSlug = _ref.activeChildSlug;
		var activeStateResolver = (0, react.useMemo)(function() {
			return new MenuActiveStateResolver(activeMenuSlug, activeChildSlug);
		}, [activeMenuSlug, activeChildSlug]);
		var getChildren = function getChildren(item) {
			if (!item.group_id) return null;
			var group = level4Groups[item.group_id];
			if (!group || !group.items || !group.items.length) return null;
			return group.items;
		};
		return /*#__PURE__*/ react.default.createElement(MenuList, null, menuItems.map(function(item) {
			return /*#__PURE__*/ react.default.createElement(react.Fragment, { key: item.slug }, item.has_divider_before && /*#__PURE__*/ react.default.createElement(_elementor_ui.Divider, { sx: { my: 1 } }), /*#__PURE__*/ react.default.createElement(SidebarMenuItem, {
				item,
				isActive: activeStateResolver.isMenuActive(item),
				activeChildSlug
			}, getChildren(item)));
		}));
	};
	SidebarMenu.propTypes = {
		menuItems: import_prop_types.default.array.isRequired,
		level4Groups: import_prop_types.default.object.isRequired,
		activeMenuSlug: import_prop_types.default.string.isRequired,
		activeChildSlug: import_prop_types.default.string.isRequired
	};

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/components/hooks/use-sidebar-collapse.js
	var STORAGE_KEY = "elementor_sidebar_collapsed";
	var AUTO_COLLAPSE_BREAKPOINT = 960;
	var TRANSITION_DURATION = 300;
	var useSidebarCollapse = function useSidebarCollapse() {
		var _useState2 = _slicedToArray((0, react.useState)(function() {
			var stored = localStorage.getItem(STORAGE_KEY);
			if (null !== stored) return "true" === stored;
			return window.innerWidth <= AUTO_COLLAPSE_BREAKPOINT;
		}), 2);
		var isCollapsed = _useState2[0];
		var setIsCollapsed = _useState2[1];
		(0, react.useEffect)(function() {
			var mediaQuery = window.matchMedia("(max-width: ".concat(AUTO_COLLAPSE_BREAKPOINT, "px)"));
			var handleResize = function handleResize(e) {
				if (e.matches) setIsCollapsed(true);
				else setIsCollapsed("true" === localStorage.getItem(STORAGE_KEY));
			};
			mediaQuery.addEventListener("change", handleResize);
			return function() {
				return mediaQuery.removeEventListener("change", handleResize);
			};
		}, []);
		var toggleCollapse = (0, react.useCallback)(function() {
			var newState = !isCollapsed;
			var body = document.body;
			body.classList.add("e-sidebar-transitioning");
			setIsCollapsed(newState);
			localStorage.setItem(STORAGE_KEY, String(newState));
			setTimeout(function() {
				body.classList.remove("e-sidebar-transitioning");
			}, TRANSITION_DURATION);
		}, [isCollapsed]);
		(0, react.useEffect)(function() {
			var container = document.getElementById("editor-one-sidebar-navigation");
			var body = document.body;
			if (isCollapsed) {
				container === null || container === void 0 || container.classList.add("e-sidebar-collapsed");
				body.classList.add("e-sidebar-is-collapsed");
			} else {
				container === null || container === void 0 || container.classList.remove("e-sidebar-collapsed");
				body.classList.remove("e-sidebar-is-collapsed");
			}
		}, [isCollapsed]);
		return {
			isCollapsed,
			toggleCollapse
		};
	};

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/components/hooks/use-admin-menu-offset.js
	var ADMIN_MENU_WRAP_ID = "adminmenuwrap";
	var WPCONTENT_ID = "wpcontent";
	var EDITOR_ONE_TOP_BAR_ID = "editor-one-top-bar";
	var WPADMINBAR_ID = "wpadminbar";
	var INITIALIZED_DATA_ATTR = "data-editor-one-offset-initialized";
	var WPFOOTER_ID = "wpfooter";
	var WPBODY_CONTENT_ID = "wpbody-content";
	var useAdminMenuOffset = function useAdminMenuOffset() {
		var cleanupRef = (0, react.useRef)(null);
		(0, react.useEffect)(function() {
			var adminMenuWrap = document.getElementById(ADMIN_MENU_WRAP_ID);
			var wpcontent = document.getElementById(WPCONTENT_ID);
			if (!adminMenuWrap || !wpcontent || wpcontent.hasAttribute(INITIALIZED_DATA_ATTR)) return;
			var wpfooter = document.getElementById(WPFOOTER_ID);
			var wpbodyContent = document.getElementById(WPBODY_CONTENT_ID);
			wpbodyContent === null || wpbodyContent === void 0 || wpbodyContent.insertBefore(wpfooter, wpbodyContent.querySelector(":scope > .clear"));
			var wpAdminBar = document.getElementById(WPADMINBAR_ID);
			var updateOffset = function updateOffset() {
				var _document$getElementB;
				var _wpAdminBar$clientHei;
				var _topBarHeader$clientH;
				var topBarHeader = (_document$getElementB = document.getElementById(EDITOR_ONE_TOP_BAR_ID)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.querySelector(":scope > header");
				var isRtlLanguage = isRTL();
				var rect = adminMenuWrap.getBoundingClientRect();
				var offset = isRtlLanguage ? document.documentElement.clientWidth - rect.left : rect.right;
				var adminBarHeightPx = "".concat((_wpAdminBar$clientHei = wpAdminBar === null || wpAdminBar === void 0 ? void 0 : wpAdminBar.clientHeight) !== null && _wpAdminBar$clientHei !== void 0 ? _wpAdminBar$clientHei : 0, "px");
				var topBarHeaderHeightPx = "".concat((_topBarHeader$clientH = topBarHeader === null || topBarHeader === void 0 ? void 0 : topBarHeader.clientHeight) !== null && _topBarHeader$clientH !== void 0 ? _topBarHeader$clientH : 0, "px");
				wpcontent.style.setProperty("--editor-one-sidebar-left-offset", "".concat(offset, "px"));
				wpcontent.style.setProperty("--e-admin-bar-height", adminBarHeightPx);
				wpcontent.style.setProperty("--e-top-bar-header-height", topBarHeaderHeightPx);
			};
			updateOffset();
			var resizeObserver = new ResizeObserver(updateOffset);
			resizeObserver.observe(wpcontent);
			var topBar = document.getElementById(EDITOR_ONE_TOP_BAR_ID);
			if (topBar) resizeObserver.observe(topBar);
			window.addEventListener("resize", updateOffset);
			wpcontent.setAttribute(INITIALIZED_DATA_ATTR, "true");
			cleanupRef.current = function() {
				resizeObserver.disconnect();
				window.removeEventListener("resize", updateOffset);
				wpcontent.removeAttribute(INITIALIZED_DATA_ATTR);
			};
			return function() {
				if (cleanupRef.current) {
					cleanupRef.current();
					cleanupRef.current = null;
				}
			};
		}, []);
	};

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/components/sidebar-navigation.js
	var SidebarNavigation = function SidebarNavigation(_ref) {
		var config = _ref.config;
		var _useSidebarCollapse = useSidebarCollapse();
		var isCollapsed = _useSidebarCollapse.isCollapsed;
		var toggleCollapse = _useSidebarCollapse.toggleCollapse;
		useAdminMenuOffset();
		if (isCollapsed) return /*#__PURE__*/ react.default.createElement(NavContainer, {
			component: "nav",
			collapsed: true
		}, /*#__PURE__*/ react.default.createElement(CollapsedHeaderContainer, null, /*#__PURE__*/ react.default.createElement(SiteIconBox, null, /*#__PURE__*/ react.default.createElement(EditorIcon, null)), /*#__PURE__*/ react.default.createElement(CollapseButton, {
			onClick: toggleCollapse,
			size: "small"
		}, /*#__PURE__*/ react.default.createElement(_elementor_icons_ChevronRightIcon.default, null))), /*#__PURE__*/ react.default.createElement(ScrollableContent, null, /*#__PURE__*/ react.default.createElement(SidebarCollapsedMenu, {
			menuItems: config.menuItems,
			level4Groups: config.level4Groups,
			activeMenuSlug: config.activeMenuSlug,
			activeChildSlug: config.activeChildSlug
		})), /*#__PURE__*/ react.default.createElement(_elementor_ui.Divider, null), /*#__PURE__*/ react.default.createElement(SidebarUpgradeCta, {
			upgradeUrl: config.upgradeUrl,
			upgradeText: config.upgradeText,
			hasPro: config.hasPro,
			collapsed: true
		}));
		return /*#__PURE__*/ react.default.createElement(NavContainer, { component: "nav" }, /*#__PURE__*/ react.default.createElement(SidebarHeader, {
			siteTitle: config.siteTitle,
			onCollapse: toggleCollapse
		}), /*#__PURE__*/ react.default.createElement(ScrollableContent, null, /*#__PURE__*/ react.default.createElement(SidebarMenu, {
			menuItems: config.menuItems,
			level4Groups: config.level4Groups,
			activeMenuSlug: config.activeMenuSlug,
			activeChildSlug: config.activeChildSlug
		})), /*#__PURE__*/ react.default.createElement(_elementor_ui.Divider, null), /*#__PURE__*/ react.default.createElement(SidebarUpgradeCta, {
			upgradeUrl: config.upgradeUrl,
			upgradeText: config.upgradeText,
			hasPro: config.hasPro
		}));
	};
	SidebarNavigation.propTypes = { config: import_prop_types.default.object.isRequired };

//#endregion
//#region modules/editor-one/assets/js/sidebar-navigation/app.js
	var App = function App(_ref) {
		var config = _ref.config;
		var isRtlLanguage = isRTL();
		return /*#__PURE__*/ react.default.createElement(_elementor_ui.DirectionProvider, { rtl: isRtlLanguage }, /*#__PURE__*/ react.default.createElement(_elementor_ui.LocalizationProvider, null, /*#__PURE__*/ react.default.createElement(_elementor_ui.ThemeProvider, { colorScheme: "light" }, /*#__PURE__*/ react.default.createElement(SidebarNavigation, { config }))));
	};
	App.propTypes = { config: import_prop_types.default.object.isRequired };
	var rootElement = document.getElementById("editor-one-sidebar-navigation");
	if (rootElement && window.editorOneSidebarConfig) react_default.render(/*#__PURE__*/ react.default.createElement(App, { config: window.editorOneSidebarConfig }), rootElement);

//#endregion
})(React, ReactDOM, elementorV2.ui, elementorV2.icons['ChevronRightIcon'], elementorV2.icons['AdjustmentsIcon'], elementorV2.icons['FolderIcon'], elementorV2.icons['RocketIcon'], elementorV2.icons['HomeIcon'], elementorV2.icons['SendIcon'], elementorV2.icons['SettingsIcon'], elementorV2.icons['UsersIcon'], elementorV2.icons['PlugIcon'], elementorV2.icons['FileSettingsIcon'], elementorV2.icons['ChevronDownSmallIcon'], elementorV2.icons, elementorV2.icons['SearchIcon']);
//# sourceMappingURL=editor-one-sidebar-navigation.js.map