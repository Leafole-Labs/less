(function(_reduxjs_toolkit, _wordpress_i18n) {

//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp$2 = Object.defineProperty;
	var __name = (target, value) => __defProp$2(target, "name", {
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
			__defProp$2(target, name, {
				get: all[name],
				enumerable: true
			});
		}
		if (!no_symbols) {
			__defProp$2(target, Symbol.toStringTag, { value: "Module" });
		}
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) {
					__defProp$2(to, key, {
						get: ((k) => from[k]).bind(null, key),
						enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
					});
				}
			}
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp$2(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));

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
//#region node_modules/@babel/runtime/helpers/esm/createClass.js
	init_toPropertyKey();
	function _defineProperties$1(e, r) {
		for (var t = 0; t < r.length; t++) {
			var o = r[t];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
		}
	}
	__name(_defineProperties$1, "_defineProperties");
	function _createClass(e, r, t) {
		return r && _defineProperties$1(e.prototype, r), t && _defineProperties$1(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
	function _assertThisInitialized(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
	init_typeof();
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
//#region core/common/assets/js/utils/helpers.js
	var Helpers = /*#__PURE__*/ function() {
		function Helpers() {
			_classCallCheck(this, Helpers);
		}
		return _createClass(Helpers, [
			{
				key: "consoleWarn",
				value: function consoleWarn() {
					var _elementorDevTools;
					(_elementorDevTools = elementorDevTools).consoleWarn.apply(_elementorDevTools, arguments);
					elementorDevTools.deprecation.deprecated("elementorCommon.helpers.consoleWarn()", "3.7.0", "elementorDevTools.consoleWarn()");
				}
			},
			{
				key: "consoleError",
				value: function consoleError(message) {
					console.error(message);
					elementorDevTools.deprecation.deprecated("elementorCommon.helpers.consoleError()", "3.7.0", "console.error()");
				}
			},
			{
				key: "cloneObject",
				value: function cloneObject(object) {
					return JSON.parse(JSON.stringify(object));
				}
			},
			{
				key: "upperCaseWords",
				value: function upperCaseWords(string) {
					return (string + "").replace(/^(.)|\s+(.)/g, function($1) {
						return $1.toUpperCase();
					});
				}
			},
			{
				key: "getUniqueId",
				value: function getUniqueId() {
					return Math.random().toString(16).substr(2, 7);
				}
			}
		]);
	}();

//#endregion
//#region core/common/assets/js/utils/storage.js
	function _callSuper$34(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$35() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$34, "_callSuper");
	function _isNativeReflectConstruct$35() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$35 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$35, "_isNativeReflectConstruct");
	var _default$11 = /*#__PURE__*/ function(_elementorModules$Mod) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$34(this, _default, arguments);
		}
		_inherits$1(_default, _elementorModules$Mod);
		return _createClass(_default, [
			{
				key: "get",
				value: function get(key, options) {
					options = options || {};
					var storage;
					try {
						storage = options.session ? sessionStorage : localStorage;
					} catch (e) {
						return key ? void 0 : {};
					}
					var elementorStorage = storage.getItem("elementor");
					if (elementorStorage) elementorStorage = JSON.parse(elementorStorage);
					else elementorStorage = {};
					if (!elementorStorage.__expiration) elementorStorage.__expiration = {};
					var expiration = elementorStorage.__expiration;
					var expirationToCheck = [];
					if (key) {
						if (expiration[key]) expirationToCheck = [key];
					} else expirationToCheck = Object.keys(expiration);
					var entryExpired = false;
					expirationToCheck.forEach(function(expirationKey) {
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
			},
			{
				key: "set",
				value: function set(key, value, options) {
					options = options || {};
					var elementorStorage = this.get(null, options);
					elementorStorage[key] = value;
					if (options.lifetimeInSeconds) {
						var date = /* @__PURE__ */ new Date();
						date.setTime(date.getTime() + options.lifetimeInSeconds * 1e3);
						elementorStorage.__expiration[key] = date.getTime();
					}
					this.save(elementorStorage, options.session);
				}
			},
			{
				key: "save",
				value: function save(object, session) {
					var storage;
					try {
						storage = session ? sessionStorage : localStorage;
					} catch (e) {
						return;
					}
					storage.setItem("elementor", JSON.stringify(object));
				}
			}
		]);
	}(elementorModules.Module);

//#endregion
//#region core/common/assets/js/utils/debug.js
	var require_debug = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var Debug = function Debug() {
			var self = this;
			var errorStack = [];
			var settings = {};
			var elements = {};
			var initSettings = function initSettings() {
				settings = {
					debounceDelay: 500,
					urlsToWatch: ["elementor/assets"]
				};
			};
			var initElements = function initElements() {
				elements.$window = jQuery(window);
			};
			var onError = function onError(event) {
				var _event$originalEvent;
				var error = (_event$originalEvent = event.originalEvent) === null || _event$originalEvent === void 0 ? void 0 : _event$originalEvent.error;
				if (!error) return;
				var isInWatchList = false;
				var urlsToWatch = settings.urlsToWatch;
				jQuery.each(urlsToWatch, function() {
					if (-1 !== error.stack.indexOf(this)) {
						isInWatchList = true;
						return false;
					}
				});
				if (!isInWatchList) return;
				self.addError({
					type: error.name,
					message: error.message,
					url: event.originalEvent.filename,
					line: event.originalEvent.lineno,
					column: event.originalEvent.colno
				});
			};
			var bindEvents = function bindEvents() {
				elements.$window.on("error", onError);
			};
			var init = function init() {
				initSettings();
				initElements();
				bindEvents();
				self.sendErrors = _.debounce(self.sendErrors, settings.debounceDelay);
			};
			this.addURLToWatch = function(url) {
				settings.urlsToWatch.push(url);
			};
			this.addCustomError = function(error, category, tag) {
				var errorInfo = {
					type: error.name,
					message: error.message,
					url: error.fileName || error.sourceURL,
					line: error.lineNumber || error.line,
					column: error.columnNumber || error.column,
					customFields: {
						category: category || "general",
						tag
					}
				};
				if (!errorInfo.url) {
					var stackInfo = error.stack.match(/\n {4}at (.*?(?=:(\d+):(\d+)))/);
					if (stackInfo) {
						errorInfo.url = stackInfo[1];
						errorInfo.line = stackInfo[2];
						errorInfo.column = stackInfo[3];
					}
				}
				this.addError(errorInfo);
			};
			this.addError = function(errorParams) {
				var defaultParams = {
					type: "Error",
					timestamp: Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3),
					message: null,
					url: null,
					line: null,
					column: null,
					customFields: {}
				};
				errorStack.push(jQuery.extend(true, defaultParams, errorParams));
				self.sendErrors();
			};
			this.sendErrors = function() {
				elements.$window.off("error", onError);
				jQuery.ajax({
					url: elementorCommon.config.ajax.url,
					method: "POST",
					data: {
						action: "elementor_js_log",
						_nonce: elementorCommon.ajax.getSettings("nonce"),
						data: errorStack
					},
					success: function success() {
						errorStack = [];
						elements.$window.on("error", onError);
					}
				});
			};
			init();
		};
		module.exports = Debug;
	}));

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var import_debug = /* @__PURE__ */ __toESM(require_debug());
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
	function _arrayLikeToArray$1(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}
	__name(_arrayLikeToArray$1, "_arrayLikeToArray");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
	function _unsupportedIterableToArray$1(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
		}
	}
	__name(_unsupportedIterableToArray$1, "_unsupportedIterableToArray");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
	function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/slicedToArray.js
	function _slicedToArray(r, e) {
		return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest();
	}

//#endregion
//#region core/common/modules/ajax/assets/js/ajax.js
	function _callSuper$33(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$34() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$33, "_callSuper");
	function _isNativeReflectConstruct$34() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$34 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$34, "_isNativeReflectConstruct");
	var _default$10 = /*#__PURE__*/ function(_elementorModules$Mod) {
		function _default() {
			var _this;
			_classCallCheck(this, _default);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _callSuper$33(this, _default, [].concat(args));
			_this.requests = {};
			_this.cache = {};
			_this.initRequestConstants();
			_this.debounceSendBatch = _.debounce(_this.sendBatch.bind(_this), 500);
			return _this;
		}
		_inherits$1(_default, _elementorModules$Mod);
		return _createClass(_default, [
			{
				key: "getDefaultSettings",
				value: function getDefaultSettings() {
					return {
						ajaxParams: {
							type: "POST",
							url: elementorCommon.config.ajax.url,
							data: {},
							dataType: "json"
						},
						actionPrefix: "elementor_"
					};
				}
			},
			{
				key: "initRequestConstants",
				value: function initRequestConstants() {
					this.requestConstants = { _nonce: this.getSettings("nonce") };
				}
			},
			{
				key: "addRequestConstant",
				value: function addRequestConstant(key, value) {
					this.requestConstants[key] = value;
				}
			},
			{
				key: "getCacheKey",
				value: function getCacheKey(request) {
					return JSON.stringify({
						unique_id: request.unique_id,
						data: request.data
					});
				}
			},
			{
				key: "loadObjects",
				value: function loadObjects(options) {
					var _this2 = this;
					var dataCollection = {};
					var deferredArray = [];
					if (options.before) options.before();
					options.ids.forEach(function(objectId) {
						deferredArray.push(_this2.load({
							action: options.action,
							unique_id: options.data.unique_id + objectId,
							data: jQuery.extend({ id: objectId }, options.data)
						}).done(function(data) {
							return dataCollection = jQuery.extend(dataCollection, data);
						}));
					});
					jQuery.when.apply(jQuery, deferredArray).done(function() {
						return options.success(dataCollection);
					});
				}
			},
			{
				key: "load",
				value: function load(request, immediately) {
					var _this3 = this;
					if (!request.unique_id) request.unique_id = request.action;
					if (request.before) request.before();
					var deferred;
					var cacheKey = this.getCacheKey(request);
					if (_.has(this.cache, cacheKey)) deferred = jQuery.Deferred().done(request.success).resolve(this.cache[cacheKey]);
					else {
						var _request$error;
						deferred = this.addRequest(request.action, {
							data: request.data,
							unique_id: request.unique_id,
							success: function success(data) {
								return _this3.cache[cacheKey] = data;
							},
							error: (_request$error = request.error) !== null && _request$error !== void 0 ? _request$error : function() {}
						}, immediately).done(request.success);
					}
					return deferred;
				}
			},
			{
				key: "cancelRequest",
				value: function cancelRequest(requestId) {
					var request = this.requests[requestId];
					if (!request) return null;
					if (request.options.deferred.jqXhr) return request.options.deferred.jqXhr.abort("Request canceled");
					if (request.options.deferred) return request.options.deferred.reject("Request canceled");
				}
			},
			{
				key: "addRequest",
				value: function addRequest(action, options, immediately) {
					options = options || {};
					if (!options.unique_id) options.unique_id = action;
					options.deferred = jQuery.Deferred().done(options.success).fail(options.error).always(options.complete);
					var request = {
						action,
						options
					};
					if (immediately) {
						var requests = {};
						requests[options.unique_id] = request;
						options.deferred.jqXhr = this.sendBatch(requests);
					} else {
						var pendingRequest = this.requests[options.unique_id];
						if (pendingRequest) {
							if (this.getCacheKey(pendingRequest.options) === this.getCacheKey(options)) {
								pendingRequest.options.deferred.done(function(data) {
									return options.deferred.resolve(data);
								}).fail(function(data) {
									return options.deferred.reject(data);
								});
								return options.deferred;
							}
							pendingRequest.options.deferred.reject("Request replaced");
						}
						this.requests[options.unique_id] = request;
						this.debounceSendBatch();
					}
					return options.deferred;
				}
			},
			{
				key: "sendBatch",
				value: function sendBatch(requests) {
					var actions = {};
					if (!requests) {
						requests = this.requests;
						this.requests = {};
					}
					Object.entries(requests).forEach(function(_ref) {
						var _ref2 = _slicedToArray(_ref, 2);
						var id = _ref2[0];
						var request = _ref2[1];
						return actions[id] = {
							action: request.action,
							data: request.options.data
						};
					});
					return this.send("ajax", {
						data: { actions: JSON.stringify(actions) },
						success: function success(data) {
							Object.entries(data.responses).forEach(function(_ref3) {
								var _ref4 = _slicedToArray(_ref3, 2);
								var id = _ref4[0];
								var response = _ref4[1];
								var options = requests[id].options;
								if (options) {
									if (response.success) options.deferred.resolve(response.data);
									else if (!response.success) options.deferred.reject(response.data);
								}
							});
						},
						error: function error(data) {
							return Object.values(requests).forEach(function(args) {
								if (args.options) args.options.deferred.reject(data);
							});
						}
					});
				}
			},
			{
				key: "prepareSend",
				value: function prepareSend(action, options) {
					var _this4 = this;
					var settings = this.getSettings();
					var ajaxParams = elementorCommon.helpers.cloneObject(settings.ajaxParams);
					options = options || {};
					action = settings.actionPrefix + action;
					jQuery.extend(ajaxParams, options);
					var requestConstants = elementorCommon.helpers.cloneObject(this.requestConstants);
					requestConstants.action = action;
					var isFormData = ajaxParams.data instanceof FormData;
					Object.entries(requestConstants).forEach(function(_ref5) {
						var _ref6 = _slicedToArray(_ref5, 2);
						var key = _ref6[0];
						var value = _ref6[1];
						if (isFormData) ajaxParams.data.append(key, value);
						else ajaxParams.data[key] = value;
					});
					var successCallback = ajaxParams.success;
					var errorCallback = ajaxParams.error;
					if (successCallback || errorCallback) {
						ajaxParams.success = function(response) {
							if (response.success && successCallback) successCallback(response.data);
							if (!response.success && errorCallback) errorCallback(response.data);
						};
						if (errorCallback) ajaxParams.error = function(data) {
							return errorCallback(data);
						};
						else ajaxParams.error = function(xmlHttpRequest) {
							if (xmlHttpRequest.readyState || "abort" !== xmlHttpRequest.statusText) _this4.trigger("request:unhandledError", xmlHttpRequest);
						};
					}
					return ajaxParams;
				}
			},
			{
				key: "send",
				value: function send(action, options) {
					return jQuery.ajax(this.prepareSend(action, options));
				}
			},
			{
				key: "addRequestCache",
				value: function addRequestCache(request, data) {
					var cacheKey = this.getCacheKey(request);
					this.cache[cacheKey] = data;
				}
			},
			{
				key: "invalidateCache",
				value: function invalidateCache(request) {
					var cacheKey = this.getCacheKey(request);
					delete this.cache[cacheKey];
				}
			}
		]);
	}(elementorModules.Module);

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
//#region assets/dev/js/modules/imports/instance-type.js
init_defineProperty();
	function _superPropGet$7(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$7, "_superPropGet");
	var InstanceType = /*#__PURE__*/ function() {
		function InstanceType() {
			var _this = this;
			_classCallCheck(this, InstanceType);
			var target = this instanceof InstanceType ? this.constructor : void 0;
			var prototypes = [];
			while (target.__proto__ && target.__proto__.name) {
				prototypes.push(target.__proto__);
				target = target.__proto__;
			}
			prototypes.reverse().forEach(function(proto) {
				return _this instanceof proto;
			});
		}
		return _createClass(InstanceType, null, [{
			key: Symbol.hasInstance,
			value: function value(target) {
				/**
				* This is function extending being called each time JS uses instanceOf, since babel use it each time it create new class
				* its give's opportunity to mange capabilities of instanceOf operator.
				* saving current class each time will give option later to handle instanceOf manually.
				*/
				var result = _superPropGet$7(InstanceType, Symbol.hasInstance, this, 2)([target]);
				if (target && !target.constructor.getInstanceType) return result;
				if (target) {
					if (!target.instanceTypes) target.instanceTypes = [];
					if (!result) {
						if (this.getInstanceType() === target.constructor.getInstanceType()) result = true;
					}
					if (result) {
						var name = this.getInstanceType === InstanceType.getInstanceType ? "BaseInstanceType" : this.getInstanceType();
						if (-1 === target.instanceTypes.indexOf(name)) target.instanceTypes.push(name);
					}
				}
				if (!result && target) result = target.instanceTypes && Array.isArray(target.instanceTypes) && -1 !== target.instanceTypes.indexOf(this.getInstanceType());
				return result;
			}
		}, {
			key: "getInstanceType",
			value: function getInstanceType() {
				elementorModules.ForceMethodImplementation();
			}
		}]);
	}();

//#endregion
//#region assets/dev/js/editor/utils/is-instanceof.js
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
	/**
	* Some FileAPI objects such as FileList, DataTransferItem and DataTransferItemList has inconsistency with the retrieved
	* object (from events, etc.) and the actual JavaScript object so a regular instanceof doesn't work. This function can
	* check whether it's instanceof by using the objects constructor and prototype names.
	*
	* @param  object
	* @param  constructors
	* @return {boolean}
	*/
	var is_instanceof_default = /* @__PURE__ */ __name((function(object, constructors) {
		constructors = Array.isArray(constructors) ? constructors : [constructors];
		var _iterator = _createForOfIteratorHelper(constructors);
		var _step;
		try {
			for (_iterator.s(); !(_step = _iterator.n()).done;) {
				var constructor = _step.value;
				if (object.constructor.name === constructor.prototype[Symbol.toStringTag]) return true;
			}
		} catch (err) {
			_iterator.e(err);
		} finally {
			_iterator.f();
		}
		return false;
	}), "default");

//#endregion
//#region assets/dev/js/modules/imports/args-object.js
	init_typeof();
	function _callSuper$32(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$33() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$32, "_callSuper");
	function _isNativeReflectConstruct$33() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$33 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$33, "_isNativeReflectConstruct");
	var ArgsObject = /*#__PURE__*/ function(_InstanceType) {
		/**
		* Function constructor().
		*
		* Create ArgsObject.
		*
		* @param {{}} args
		*/
		function ArgsObject(args) {
			var _this;
			_classCallCheck(this, ArgsObject);
			_this = _callSuper$32(this, ArgsObject);
			_this.args = args;
			return _this;
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
		_inherits$1(ArgsObject, _InstanceType);
		return _createClass(ArgsObject, [
			{
				key: "requireArgument",
				value: function requireArgument(property) {
					var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.args;
					if (!Object.prototype.hasOwnProperty.call(args, property)) throw Error("".concat(property, " is required."));
				}
			},
			{
				key: "requireArgumentType",
				value: function requireArgumentType(property, type) {
					var args = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.args;
					this.requireArgument(property, args);
					if (_typeof(args[property]) !== type) throw Error("".concat(property, " invalid type: ").concat(type, "."));
				}
			},
			{
				key: "requireArgumentInstance",
				value: function requireArgumentInstance(property, instance) {
					var args = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.args;
					this.requireArgument(property, args);
					if (!(args[property] instanceof instance) && !is_instanceof_default(args[property], instance)) throw Error("".concat(property, " invalid instance."));
				}
			},
			{
				key: "requireArgumentConstructor",
				value: function requireArgumentConstructor(property, type) {
					var args = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.args;
					this.requireArgument(property, args);
					if (args[property].constructor.toString() !== type.prototype.constructor.toString()) throw Error("".concat(property, " invalid constructor type."));
				}
			}
		], [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "ArgsObject";
			}
		}]);
	}(InstanceType);

//#endregion
//#region modules/web-cli/assets/js/utils/console.js
	var Console = /*#__PURE__*/ function() {
		function Console() {
			_classCallCheck(this, Console);
		}
		return _createClass(Console, null, [{
			key: "error",
			value: function error(message) {
				if ($e.devTools) $e.devTools.log.error(message);
				if (!(message instanceof $e.modules.HookBreak)) console.error(message);
			}
		}, {
			key: "warn",
			value: function warn() {
				var _console;
				var style = "font-size: 12px; background-image: url(\"".concat(elementorWebCliConfig.urls.assets, "images/logo-icon.png\"); background-repeat: no-repeat; background-size: contain;");
				for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				args.unshift("%c  %c", style, "");
				(_console = console).warn.apply(_console, args);
			}
		}]);
	}();

//#endregion
//#region modules/web-cli/assets/js/utils/deprecation.js
/**
	* @typedef {Object} Version
	* @property {number} major1 The first number
	* @property {number} major2 The second number
	* @property {number} minor  The third number
	* @property {string} build  The fourth number
	*/
	var softDeprecated = function softDeprecated(name, version, replacement) {
		if (elementorWebCliConfig.isDebug) deprecatedMessage("soft", name, version, replacement);
	};
	var hardDeprecated = function hardDeprecated(name, version, replacement) {
		deprecatedMessage("hard", name, version, replacement);
	};
	var deprecatedMessage = function deprecatedMessage(type, name, version, replacement) {
		var message = "`".concat(name, "` is ").concat(type, " deprecated since ").concat(version);
		if (replacement) message += " - Use `".concat(replacement, "` instead");
		Console.warn(message);
	};
	var Deprecation = /*#__PURE__*/ function() {
		function Deprecation() {
			_classCallCheck(this, Deprecation);
		}
		return _createClass(Deprecation, null, [
			{
				key: "deprecated",
				value: function deprecated(name, version, replacement) {
					if (this.isHardDeprecated(version)) hardDeprecated(name, version, replacement);
					else softDeprecated(name, version, replacement);
				}
			},
			{
				key: "parseVersion",
				value: function parseVersion(version) {
					var versionParts = version.split(".");
					if (versionParts.length < 3 || versionParts.length > 4) throw new RangeError("Invalid Semantic Version string provided");
					var _versionParts = _slicedToArray(versionParts, 4);
					var major1 = _versionParts[0];
					var major2 = _versionParts[1];
					var minor = _versionParts[2];
					var _versionParts$ = _versionParts[3];
					return {
						major1: parseInt(major1),
						major2: parseInt(major2),
						minor: parseInt(minor),
						build: _versionParts$ === void 0 ? "" : _versionParts$
					};
				}
			},
			{
				key: "getTotalMajor",
				value: function getTotalMajor(versionObj) {
					var total = parseInt("".concat(versionObj.major1).concat(versionObj.major2, "0"));
					total = Number((total / 10).toFixed(0));
					if (versionObj.major2 > 9) total = versionObj.major2 - 9;
					return total;
				}
			},
			{
				key: "compareVersion",
				value: function compareVersion(version1, version2) {
					var _this = this;
					return [this.parseVersion(version1), this.parseVersion(version2)].map(function(versionObj) {
						return _this.getTotalMajor(versionObj);
					}).reduce(function(acc, major) {
						return acc - major;
					});
				}
			},
			{
				key: "isSoftDeprecated",
				value: function isSoftDeprecated(version) {
					return this.compareVersion(version, elementorWebCliConfig.version) <= 4;
				}
			},
			{
				key: "isHardDeprecated",
				value: function isHardDeprecated(version) {
					var total = this.compareVersion(version, elementorWebCliConfig.version);
					return total < 0 || total >= 8;
				}
			}
		]);
	}();

//#endregion
//#region modules/web-cli/assets/js/modules/command-infra.js
	function _callSuper$31(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$32() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$31, "_callSuper");
	function _isNativeReflectConstruct$32() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$32 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$32, "_isNativeReflectConstruct");
	/**
	* @typedef {import('../modules/component-base')} ComponentBase
	*/
	var CommandInfra = /*#__PURE__*/ function(_ArgsObject) {
		/**
		* Function constructor().
		*
		* Create Commands Base.
		*
		* @param {{}} args
		*/
		function CommandInfra() {
			var _this;
			var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			_classCallCheck(this, CommandInfra);
			_this = _callSuper$31(this, CommandInfra, [args]);
			if (!_this.constructor.registerConfig) throw RangeError("Doing it wrong: Each command type should have `registerConfig`.");
			_this.command = _this.constructor.getCommand();
			_this.component = _this.constructor.getComponent();
			_this.initialize(args);
			args = _this.args;
			_this.validateArgs(args);
			return _this;
		}
		/**
		* Function initialize().
		*
		* Initialize command, called after construction.
		*
		* @param {{}} args
		*/
		_inherits$1(CommandInfra, _ArgsObject);
		return _createClass(CommandInfra, [
			{
				key: "currentCommand",
				get: function get() {
					Deprecation.deprecated("this.currentCommand", "3.7.0", "this.command");
					return this.command;
				}
			},
			{
				key: "initialize",
				value: function initialize() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
				}
			},
			{
				key: "validateArgs",
				value: function validateArgs() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
				}
			},
			{
				key: "apply",
				value: function apply() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
					elementorModules.ForceMethodImplementation();
				}
			},
			{
				key: "run",
				value: function run() {
					return this.apply(this.args);
				}
			},
			{
				key: "onBeforeRun",
				value: function onBeforeRun() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
				}
			},
			{
				key: "onAfterRun",
				value: function onAfterRun() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
					arguments.length > 1 && arguments[1];
				}
			},
			{
				key: "onBeforeApply",
				value: function onBeforeApply() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
				}
			},
			{
				key: "onAfterApply",
				value: function onAfterApply() {
					arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
					arguments.length > 1 && arguments[1];
				}
			},
			{
				key: "onCatchApply",
				value: function onCatchApply(e) {}
			}
		], [
			{
				key: "getInstanceType",
				value: function getInstanceType() {
					return "CommandInfra";
				}
			},
			{
				key: "getInfo",
				value: function getInfo() {
					return {};
				}
			},
			{
				key: "getCommand",
				value: function getCommand() {
					return this.registerConfig.command;
				}
			},
			{
				key: "getComponent",
				value: function getComponent() {
					return this.registerConfig.component;
				}
			},
			{
				key: "setRegisterConfig",
				value: function setRegisterConfig(config) {
					this.registerConfig = Object.freeze(config);
				}
			}
		]);
	}(ArgsObject);
	/**
	* @type {Object}
	*/
	_defineProperty(CommandInfra, "registerConfig", null);

//#endregion
//#region modules/web-cli/assets/js/modules/command-base.js
	function _callSuper$30(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$31() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$30, "_callSuper");
	function _isNativeReflectConstruct$31() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$31 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$31, "_isNativeReflectConstruct");
	/**
	* @name $e.modules.CommandBase
	*/
	var CommandBase = /*#__PURE__*/ function(_CommandInfra) {
		function CommandBase() {
			_classCallCheck(this, CommandBase);
			return _callSuper$30(this, CommandBase, arguments);
		}
		_inherits$1(CommandBase, _CommandInfra);
		return _createClass(CommandBase, [
			{
				key: "onBeforeRun",
				value: function onBeforeRun() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					$e.hooks.runUIBefore(this.command, args);
				}
			},
			{
				key: "onAfterRun",
				value: function onAfterRun() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					var result = arguments.length > 1 ? arguments[1] : void 0;
					$e.hooks.runUIAfter(this.command, args, result);
				}
			},
			{
				key: "onBeforeApply",
				value: function onBeforeApply() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					$e.hooks.runDataDependency(this.command, args);
				}
			},
			{
				key: "onAfterApply",
				value: function onAfterApply() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					var result = arguments.length > 1 ? arguments[1] : void 0;
					return $e.hooks.runDataAfter(this.command, args, result);
				}
			},
			{
				key: "onCatchApply",
				value: function onCatchApply(e) {
					this.runCatchHooks(e);
				}
			},
			{
				key: "runCatchHooks",
				value: function runCatchHooks(e) {
					$e.hooks.runDataCatch(this.command, this.args, e);
					$e.hooks.runUICatch(this.command, this.args, e);
				}
			},
			{
				key: "requireContainer",
				value: function requireContainer() {
					var _this = this;
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.args;
					Deprecation.deprecated("requireContainer()", "3.7.0", "Extend `$e.modules.editor.CommandContainerBase` or `$e.modules.editor.CommandContainerInternalBase`");
					if (!args.container && !args.containers) throw Error("container or containers are required.");
					if (args.container && args.containers) throw Error("container and containers cannot go together please select one of them.");
					(args.containers || [args.container]).forEach(function(container) {
						_this.requireArgumentInstance("container", elementorModules.editor.Container, { container });
					});
				}
			}
		], [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "CommandBase";
			}
		}]);
	}(CommandInfra);

//#endregion
//#region modules/web-cli/assets/js/modules/command-callback-base.js
	function _callSuper$29(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$30() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$29, "_callSuper");
	function _isNativeReflectConstruct$30() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$30 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$30, "_isNativeReflectConstruct");
	/**
	* To support pure callbacks in the API(commands.js), to ensure they have registered with the proper context.
	*/
	var CommandCallbackBase = /*#__PURE__*/ function(_CommandBase) {
		function CommandCallbackBase() {
			_classCallCheck(this, CommandCallbackBase);
			return _callSuper$29(this, CommandCallbackBase, arguments);
		}
		_inherits$1(CommandCallbackBase, _CommandBase);
		return _createClass(CommandCallbackBase, [{
			key: "apply",
			value: function apply() {
				var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				return this.constructor.getCallback()(args);
			}
		}], [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "CommandCallbackBase";
			}
		}, {
			key: "getCallback",
			value: function getCallback() {
				return this.registerConfig.callback;
			}
		}]);
	}(CommandBase);

//#endregion
//#region assets/dev/js/modules/imports/module.js
	var require_module = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_typeof();
		var Module = function Module() {
			var $ = jQuery;
			var instanceParams = arguments;
			var self = this;
			var events = {};
			var settings;
			var ensureClosureMethods = function ensureClosureMethods() {
				$.each(self, function(methodName) {
					var oldMethod = self[methodName];
					if ("function" !== typeof oldMethod) return;
					self[methodName] = function() {
						return oldMethod.apply(self, arguments);
					};
				});
			};
			var initSettings = function initSettings() {
				settings = self.getDefaultSettings();
				var instanceSettings = instanceParams[0];
				if (instanceSettings) $.extend(true, settings, instanceSettings);
			};
			var init = function init() {
				self.__construct.apply(self, instanceParams);
				ensureClosureMethods();
				initSettings();
				self.trigger("init");
			};
			this.getItems = function(items, itemKey) {
				if (itemKey) {
					var keyStack = itemKey.split(".");
					var currentKey = keyStack.splice(0, 1);
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
				if ("object" === _typeof(settingKey)) {
					$.extend(settingsContainer, settingKey);
					return self;
				}
				var keyStack = settingKey.split(".");
				var currentKey = keyStack.splice(0, 1);
				if (!keyStack.length) {
					settingsContainer[currentKey] = value;
					return self;
				}
				if (!settingsContainer[currentKey]) settingsContainer[currentKey] = {};
				return self.setSettings(keyStack.join("."), value, settingsContainer[currentKey]);
			};
			this.getErrorMessage = function(type, functionName) {
				var message;
				switch (type) {
					case "forceMethodImplementation":
						message = "The method '".concat(functionName, "' must to be implemented in the inheritor child.");
						break;
					default: message = "An error occurs";
				}
				return message;
			};
			this.forceMethodImplementation = function(functionName) {
				throw new Error(this.getErrorMessage("forceMethodImplementation", functionName));
			};
			this.on = function(eventName, callback) {
				if ("object" === _typeof(eventName)) {
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
				var callbackIndex = events[eventName].indexOf(callback);
				if (-1 !== callbackIndex) {
					delete events[eventName][callbackIndex];
					events[eventName] = events[eventName].filter(function(val) {
						return val;
					});
				}
				return self;
			};
			this.trigger = function(eventName) {
				var methodName = "on" + eventName[0].toUpperCase() + eventName.slice(1);
				var params = Array.prototype.slice.call(arguments, 1);
				if (self[methodName]) self[methodName].apply(self, params);
				var callbacks = events[eventName];
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
			var $ = jQuery;
			var parent = this;
			var child = function child() {
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
//#region node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
var import_module = /* @__PURE__ */ __toESM(require_module());
	function _isNativeFunction(t) {
		try {
			return -1 !== Function.toString.call(t).indexOf("[native code]");
		} catch (n) {
			return "function" == typeof t;
		}
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
	function _isNativeReflectConstruct$29() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$29 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$29, "_isNativeReflectConstruct");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/construct.js
	function _construct$1(t, e, r) {
		if (_isNativeReflectConstruct$29()) return Reflect.construct.apply(null, arguments);
		var o = [null];
		o.push.apply(o, e);
		var p = new (t.bind.apply(t, o))();
		return r && _setPrototypeOf(p, r.prototype), p;
	}
	__name(_construct$1, "_construct");

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
	function _wrapNativeSuper(t) {
		var r = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
		return _wrapNativeSuper = function _wrapNativeSuper(t) {
			if (null === t || !_isNativeFunction(t)) return t;
			if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
			if (void 0 !== r) {
				if (r.has(t)) return r.get(t);
				r.set(t, Wrapper);
			}
			function Wrapper() {
				return _construct$1(t, arguments, _getPrototypeOf(this).constructor);
			}
			return Wrapper.prototype = Object.create(t.prototype, { constructor: {
				value: Wrapper,
				enumerable: !1,
				writable: !0,
				configurable: !0
			} }), _setPrototypeOf(Wrapper, t);
		}, _wrapNativeSuper(t);
	}

//#endregion
//#region modules/web-cli/assets/js/utils/force-method-implementation.js
	function _callSuper$28(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$28() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$28, "_callSuper");
	function _isNativeReflectConstruct$28() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$28 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$28, "_isNativeReflectConstruct");
	var ForceMethodImplementation = /*#__PURE__*/ function(_Error) {
		function ForceMethodImplementation() {
			var _this;
			var info = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			_classCallCheck(this, ForceMethodImplementation);
			_this = _callSuper$28(this, ForceMethodImplementation, ["".concat(info.isStatic ? "static " : "").concat(info.fullName, "() should be implemented, please provide '").concat(info.functionName || info.fullName, "' functionality.")]);
			Error.captureStackTrace(_this, ForceMethodImplementation);
			return _this;
		}
		_inherits$1(ForceMethodImplementation, _Error);
		return _createClass(ForceMethodImplementation);
	}(/*#__PURE__*/ _wrapNativeSuper(Error));
	var force_method_implementation_default = /* @__PURE__ */ __name((function() {
		var caller = Error().stack.split("\n")[2].trim();
		var callerName = caller.startsWith("at new") ? "constructor" : caller.split(" ")[1];
		var info = {};
		info.functionName = callerName;
		info.fullName = callerName;
		if (info.functionName.includes(".")) {
			var parts = info.functionName.split(".");
			info.className = parts[0];
			info.functionName = parts[1];
		} else info.isStatic = true;
		throw new ForceMethodImplementation(info);
	}), "default");

//#endregion
//#region modules/web-cli/assets/js/modules/component-base.js
	init_defineProperty();
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
	function _callSuper$27(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$27() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$27, "_callSuper");
	function _isNativeReflectConstruct$27() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$27 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$27, "_isNativeReflectConstruct");
	/**
	* @typedef {import('./command-infra')} CommandInfra
	* @typedef {import('./hook-base')} HookBase
	* @typedef {import('../core/states/ui-state-base')} UiStateBase
	*/
	var ComponentBase = /*#__PURE__*/ function(_Module) {
		function ComponentBase() {
			_classCallCheck(this, ComponentBase);
			return _callSuper$27(this, ComponentBase, arguments);
		}
		_inherits$1(ComponentBase, _Module);
		return _createClass(ComponentBase, [
			{
				key: "__construct",
				value: function __construct() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					if (args.manager) this.manager = args.manager;
					this.commands = this.defaultCommands();
					this.commandsInternal = this.defaultCommandsInternal();
					this.hooks = this.defaultHooks();
					this.routes = this.defaultRoutes();
					this.tabs = this.defaultTabs();
					this.shortcuts = this.defaultShortcuts();
					this.utils = this.defaultUtils();
					this.data = this.defaultData();
					this.uiStates = this.defaultUiStates();
					this.states = this.defaultStates();
					this.defaultRoute = "";
					this.currentTab = "";
				}
			},
			{
				key: "registerAPI",
				value: function registerAPI() {
					var _this = this;
					Object.entries(this.getTabs()).forEach(function(tab) {
						return _this.registerTabRoute(tab[0]);
					});
					Object.entries(this.getRoutes()).forEach(function(_ref) {
						var _ref2 = _slicedToArray(_ref, 2);
						var route = _ref2[0];
						var callback = _ref2[1];
						return _this.registerRoute(route, callback);
					});
					Object.entries(this.getCommands()).forEach(function(_ref3) {
						var _ref4 = _slicedToArray(_ref3, 2);
						var command = _ref4[0];
						var callback = _ref4[1];
						return _this.registerCommand(command, callback);
					});
					Object.entries(this.getCommandsInternal()).forEach(function(_ref5) {
						var _ref6 = _slicedToArray(_ref5, 2);
						var command = _ref6[0];
						var callback = _ref6[1];
						return _this.registerCommandInternal(command, callback);
					});
					Object.values(this.getHooks()).forEach(function(instance) {
						return _this.registerHook(instance);
					});
					Object.entries(this.getData()).forEach(function(_ref7) {
						var _ref8 = _slicedToArray(_ref7, 2);
						var command = _ref8[0];
						var callback = _ref8[1];
						return _this.registerData(command, callback);
					});
					Object.values(this.getUiStates()).forEach(function(instance) {
						return _this.registerUiState(instance);
					});
					Object.entries(this.getStates()).forEach(function(_ref9) {
						var _ref0 = _slicedToArray(_ref9, 2);
						var id = _ref0[0];
						var state = _ref0[1];
						return _this.registerState(id, state);
					});
				}
			},
			{
				key: "getNamespace",
				value: function getNamespace() {
					force_method_implementation_default();
				}
			},
			{
				key: "getRootContainer",
				value: function getRootContainer() {
					Deprecation.deprecated("getRootContainer()", "3.7.0", "getServiceName()");
					return this.getServiceName();
				}
			},
			{
				key: "getServiceName",
				value: function getServiceName() {
					return this.getNamespace().split("/")[0];
				}
			},
			{
				key: "store",
				get: function get() {
					return $e.store.get(this.getNamespace());
				}
			},
			{
				key: "defaultTabs",
				value: function defaultTabs() {
					return {};
				}
			},
			{
				key: "defaultRoutes",
				value: function defaultRoutes() {
					return {};
				}
			},
			{
				key: "defaultCommands",
				value: function defaultCommands() {
					return {};
				}
			},
			{
				key: "defaultCommandsInternal",
				value: function defaultCommandsInternal() {
					return {};
				}
			},
			{
				key: "defaultHooks",
				value: function defaultHooks() {
					return {};
				}
			},
			{
				key: "defaultUiStates",
				value: function defaultUiStates() {
					return {};
				}
			},
			{
				key: "defaultStates",
				value: function defaultStates() {
					return {};
				}
			},
			{
				key: "defaultShortcuts",
				value: function defaultShortcuts() {
					return {};
				}
			},
			{
				key: "defaultUtils",
				value: function defaultUtils() {
					return {};
				}
			},
			{
				key: "defaultData",
				value: function defaultData() {
					return {};
				}
			},
			{
				key: "getCommands",
				value: function getCommands() {
					return this.commands;
				}
			},
			{
				key: "getCommandsInternal",
				value: function getCommandsInternal() {
					return this.commandsInternal;
				}
			},
			{
				key: "getHooks",
				value: function getHooks() {
					return this.hooks;
				}
			},
			{
				key: "getUiStates",
				value: function getUiStates() {
					return this.uiStates;
				}
			},
			{
				key: "getStates",
				value: function getStates() {
					return this.states;
				}
			},
			{
				key: "getRoutes",
				value: function getRoutes() {
					return this.routes;
				}
			},
			{
				key: "getTabs",
				value: function getTabs() {
					return this.tabs;
				}
			},
			{
				key: "getShortcuts",
				value: function getShortcuts() {
					return this.shortcuts;
				}
			},
			{
				key: "getData",
				value: function getData() {
					return this.data;
				}
			},
			{
				key: "registerCommand",
				value: function registerCommand(command, context) {
					var commandsType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
					var commandsManager;
					switch (commandsType) {
						case "default":
							commandsManager = $e.commands;
							break;
						case "internal":
							commandsManager = $e.commandsInternal;
							break;
						case "data":
							commandsManager = $e.data;
							break;
						default: throw new Error("Invalid commands type: '".concat(command, "'"));
					}
					var fullCommand = this.getNamespace() + "/" + command;
					var instanceType = context.getInstanceType ? context.getInstanceType() : false;
					var registerConfig = {
						command: fullCommand,
						component: this
					};
					if (!instanceType) {
						if ($e.devTools) $e.devTools.log.warn("Attach command-callback-base, on command: '".concat(fullCommand, "', context is unknown type."));
						registerConfig.callback = context;
						context = /*#__PURE__*/ function(_CommandCallbackBase) {
							function context() {
								_classCallCheck(this, context);
								return _callSuper$27(this, context, arguments);
							}
							_inherits$1(context, _CommandCallbackBase);
							return _createClass(context);
						}(CommandCallbackBase);
					}
					context.setRegisterConfig(registerConfig);
					commandsManager.register(this, command, context);
				}
			},
			{
				key: "registerHook",
				value: function registerHook(instance) {
					return instance.register();
				}
			},
			{
				key: "registerCommandInternal",
				value: function registerCommandInternal(command, context) {
					this.registerCommand(command, context, "internal");
				}
			},
			{
				key: "registerUiState",
				value: function registerUiState(instance) {
					$e.uiStates.register(instance);
				}
			},
			{
				key: "registerState",
				value: function registerState(id, stateConfig) {
					id = this.getNamespace() + (id ? "/".concat(id) : "");
					var slice = (0, _reduxjs_toolkit.createSlice)(_objectSpread$5(_objectSpread$5({}, stateConfig), {}, { name: id }));
					$e.store.register(id, slice);
				}
			},
			{
				key: "registerRoute",
				value: function registerRoute(route, callback) {
					$e.routes.register(this, route, callback);
				}
			},
			{
				key: "registerData",
				value: function registerData(command, context) {
					this.registerCommand(command, context, "data");
				}
			},
			{
				key: "unregisterRoute",
				value: function unregisterRoute(route) {
					$e.routes.unregister(this, route);
				}
			},
			{
				key: "registerTabRoute",
				value: function registerTabRoute(tab) {
					var _this2 = this;
					this.registerRoute(tab, function(args) {
						return _this2.activateTab(tab, args);
					});
				}
			},
			{
				key: "dependency",
				value: function dependency() {
					return true;
				}
			},
			{
				key: "open",
				value: function open() {
					return true;
				}
			},
			{
				key: "close",
				value: function close() {
					if (!this.isOpen) return false;
					this.isOpen = false;
					this.inactivate();
					$e.routes.clearCurrent(this.getNamespace());
					$e.routes.clearHistory(this.getServiceName());
					return true;
				}
			},
			{
				key: "activate",
				value: function activate() {
					$e.components.activate(this.getNamespace());
				}
			},
			{
				key: "inactivate",
				value: function inactivate() {
					$e.components.inactivate(this.getNamespace());
				}
			},
			{
				key: "isActive",
				value: function isActive() {
					return $e.components.isActive(this.getNamespace());
				}
			},
			{
				key: "onRoute",
				value: function onRoute(route) {
					this.toggleRouteClass(route, true);
					this.toggleHistoryClass();
					this.activate();
					this.trigger("route/open", route);
				}
			},
			{
				key: "onCloseRoute",
				value: function onCloseRoute(route) {
					this.toggleRouteClass(route, false);
					this.inactivate();
					this.trigger("route/close", route);
				}
			},
			{
				key: "setDefaultRoute",
				value: function setDefaultRoute(route) {
					this.defaultRoute = this.getNamespace() + "/" + route;
				}
			},
			{
				key: "getDefaultRoute",
				value: function getDefaultRoute() {
					return this.defaultRoute;
				}
			},
			{
				key: "removeTab",
				value: function removeTab(tab) {
					delete this.tabs[tab];
					this.unregisterRoute(tab);
				}
			},
			{
				key: "hasTab",
				value: function hasTab(tab) {
					return !!this.tabs[tab];
				}
			},
			{
				key: "addTab",
				value: function addTab(tab, args, position) {
					var _this3 = this;
					this.tabs[tab] = args;
					if ("undefined" !== typeof position) {
						var newTabs = {};
						var ids = Object.keys(this.tabs);
						ids.pop();
						ids.splice(position, 0, tab);
						ids.forEach(function(id) {
							newTabs[id] = _this3.tabs[id];
						});
						this.tabs = newTabs;
					}
					this.registerTabRoute(tab);
				}
			},
			{
				key: "getTabsWrapperSelector",
				value: function getTabsWrapperSelector() {
					return "";
				}
			},
			{
				key: "getTabRoute",
				value: function getTabRoute(tab) {
					return this.getNamespace() + "/" + tab;
				}
			},
			{
				key: "renderTab",
				value: function renderTab(tab) {}
			},
			{
				key: "activateTab",
				value: function activateTab(tab, args) {
					var _this4 = this;
					this.renderTab(tab, args);
					jQuery(this.getTabsWrapperSelector() + " .elementor-component-tab").off("click").on("click", function(event) {
						$e.route(_this4.getTabRoute(event.currentTarget.dataset.tab), args);
					}).removeClass("elementor-active").filter("[data-tab=\"" + tab + "\"]").addClass("elementor-active");
				}
			},
			{
				key: "getActiveTabConfig",
				value: function getActiveTabConfig() {
					return this.tabs[this.currentTab] || {};
				}
			},
			{
				key: "getBodyClass",
				value: function getBodyClass(route) {
					return "e-route-" + route.replace(/\//g, "-");
				}
			},
			{
				key: "normalizeCommandName",
				value: function normalizeCommandName(commandName) {
					return commandName.replace(/[A-Z]/g, function(match, offset) {
						return (offset > 0 ? "-" : "") + match.toLowerCase();
					});
				}
			},
			{
				key: "importCommands",
				value: function importCommands(commandsFromImport) {
					var _this5 = this;
					var commands = {};
					Object.entries(commandsFromImport).forEach(function(_ref1) {
						var _ref10 = _slicedToArray(_ref1, 2);
						var className = _ref10[0];
						var Class = _ref10[1];
						var command = _this5.normalizeCommandName(className);
						commands[command] = Class;
					});
					return commands;
				}
			},
			{
				key: "importHooks",
				value: function importHooks(hooksFromImport) {
					var hooks = {};
					for (var key in hooksFromImport) {
						var hook = new hooksFromImport[key]();
						hooks[hook.getId()] = hook;
					}
					return hooks;
				}
			},
			{
				key: "importUiStates",
				value: function importUiStates(statesFromImport) {
					var _this6 = this;
					var uiStates = {};
					Object.values(statesFromImport).forEach(function(className) {
						var uiState = new className(_this6);
						uiStates[uiState.getId()] = uiState;
					});
					return uiStates;
				}
			},
			{
				key: "setUiState",
				value: function setUiState(state, value) {
					$e.uiStates.set("".concat(this.getNamespace(), "/").concat(state), value);
				}
			},
			{
				key: "toggleRouteClass",
				value: function toggleRouteClass(route, state) {
					document.body.classList.toggle(this.getBodyClass(route), state);
				}
			},
			{
				key: "toggleHistoryClass",
				value: function toggleHistoryClass() {
					document.body.classList.toggle("e-routes-has-history", !!$e.routes.getHistory(this.getServiceName()).length);
				}
			}
		]);
	}(import_module.default);

//#endregion
//#region modules/web-cli/assets/js/modules/commands/close.js
	function _callSuper$26(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$26() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$26, "_callSuper");
	function _isNativeReflectConstruct$26() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$26 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$26, "_isNativeReflectConstruct");
	var Close = /*#__PURE__*/ function(_CommandBase) {
		function Close() {
			_classCallCheck(this, Close);
			return _callSuper$26(this, Close, arguments);
		}
		_inherits$1(Close, _CommandBase);
		return _createClass(Close, [{
			key: "apply",
			value: function apply() {
				this.component.close();
			}
		}]);
	}(CommandBase);

//#endregion
//#region modules/web-cli/assets/js/modules/commands/open.js
	function _callSuper$25(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$25() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$25, "_callSuper");
	function _isNativeReflectConstruct$25() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$25 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$25, "_isNativeReflectConstruct");
	var Open = /*#__PURE__*/ function(_CommandBase) {
		function Open() {
			_classCallCheck(this, Open);
			return _callSuper$25(this, Open, arguments);
		}
		_inherits$1(Open, _CommandBase);
		return _createClass(Open, [{
			key: "apply",
			value: function apply() {
				$e.route(this.component.getNamespace());
			}
		}]);
	}(CommandBase);

//#endregion
//#region modules/web-cli/assets/js/modules/commands/toggle.js
	function _callSuper$24(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$24() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$24, "_callSuper");
	function _isNativeReflectConstruct$24() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$24 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$24, "_isNativeReflectConstruct");
	var Toggle = /*#__PURE__*/ function(_CommandBase) {
		function Toggle() {
			_classCallCheck(this, Toggle);
			return _callSuper$24(this, Toggle, arguments);
		}
		_inherits$1(Toggle, _CommandBase);
		return _createClass(Toggle, [{
			key: "apply",
			value: function apply() {
				if (this.component.isOpen) this.component.close();
				else $e.route(this.component.getNamespace());
			}
		}]);
	}(CommandBase);

//#endregion
//#region modules/web-cli/assets/js/modules/commands/index.js
	var commands_exports$1 = /* @__PURE__ */ __exportAll({
		Close: () => Close,
		Open: () => Open,
		Toggle: () => Toggle
	});

//#endregion
//#region modules/web-cli/assets/js/modules/component-modal-base.js
	function _callSuper$23(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$23() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$23, "_callSuper");
	function _isNativeReflectConstruct$23() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$23 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$23, "_isNativeReflectConstruct");
	function _superPropGet$6(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$6, "_superPropGet");
	var ComponentModalBase = /*#__PURE__*/ function(_ComponentBase) {
		function ComponentModalBase() {
			_classCallCheck(this, ComponentModalBase);
			return _callSuper$23(this, ComponentModalBase, arguments);
		}
		_inherits$1(ComponentModalBase, _ComponentBase);
		return _createClass(ComponentModalBase, [
			{
				key: "registerAPI",
				value: function registerAPI() {
					var _this = this;
					_superPropGet$6(ComponentModalBase, "registerAPI", this, 3)([]);
					$e.shortcuts.register("esc", {
						scopes: [this.getNamespace()],
						callback: function callback() {
							return _this.close();
						}
					});
				}
			},
			{
				key: "defaultCommands",
				value: function defaultCommands() {
					return this.importCommands(commands_exports$1);
				}
			},
			{
				key: "defaultRoutes",
				value: function defaultRoutes() {
					return { "": function _() {} };
				}
			},
			{
				key: "open",
				value: function open() {
					var _this2 = this;
					if (!this.layout) {
						var layout = this.getModalLayout();
						this.layout = new layout({ component: this });
						this.layout.getModal().on("hide", function() {
							return _this2.close();
						});
					}
					this.layout.showModal();
					return true;
				}
			},
			{
				key: "close",
				value: function close() {
					if (!_superPropGet$6(ComponentModalBase, "close", this, 3)([])) return false;
					elementor.hooks.applyFilters("component/modal/close", this.layout.getModal().hide.bind(this.layout.getModal()), this)();
					return true;
				}
			},
			{
				key: "getModalLayout",
				value: function getModalLayout() {
					force_method_implementation_default();
				}
			}
		]);
	}(ComponentBase);

//#endregion
//#region assets/dev/js/editor/utils/editor-one-events.js
	init_defineProperty();
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
					return _objectSpread$4({ window_name: (_config$appTypes$edit = config === null || config === void 0 || (_config$appTypes3 = config.appTypes) === null || _config$appTypes3 === void 0 ? void 0 : _config$appTypes3.editor) !== null && _config$appTypes$edit !== void 0 ? _config$appTypes$edit : "editor" }, overrides);
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
					return this.createBasePayload(_objectSpread$4({
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
	var createDebouncedFinderSearch = function createDebouncedFinderSearch() {
		var delay = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 300;
		return _.debounce(function(resultsCount, searchTerm) {
			EditorOneEventManager.sendFinderSearchInput({
				resultsCount,
				searchTerm
			});
		}, delay);
	};

//#endregion
//#region core/common/modules/finder/assets/js/modal/views/item.js
	function _callSuper$22(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$22() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$22, "_callSuper");
	function _isNativeReflectConstruct$22() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$22 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$22, "_isNativeReflectConstruct");
	var _default$9 = /*#__PURE__*/ function(_Marionette$ItemView) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$22(this, _default, arguments);
		}
		_inherits$1(_default, _Marionette$ItemView);
		return _createClass(_default, [
			{
				key: "className",
				value: function className() {
					return "elementor-finder__results__item";
				}
			},
			{
				key: "getTemplate",
				value: function getTemplate() {
					return "#tmpl-elementor-finder__results__item";
				}
			},
			{
				key: "events",
				value: function events() {
					this.$el[0].addEventListener("click", this.onClick.bind(this), true);
				}
			},
			{
				key: "trackResultSelect",
				value: function trackResultSelect() {
					var title = this.model.get("title");
					EditorOneEventManager.sendFinderResultSelect(title);
				}
			},
			{
				key: "onClick",
				value: function onClick(e) {
					var _this = this;
					var lockOptions = this.model.get("lock");
					if (!(lockOptions !== null && lockOptions !== void 0 && lockOptions.is_locked)) {
						this.trackResultSelect();
						var url = this.model.get("url") || "";
						if (url.includes("page=elementor-app") && window.$e) {
							e.preventDefault();
							e.stopImmediatePropagation();
							$e.run("finder/close");
							$e.run("app/open", { url });
						}
						return;
					}
					e.preventDefault();
					e.stopImmediatePropagation();
					elementorCommon.dialogsManager.createWidget("confirm", {
						id: "elementor-finder__lock-dialog",
						headerMessage: lockOptions.content.heading,
						message: lockOptions.content.description,
						position: {
							my: "center center",
							at: "center center"
						},
						strings: {
							confirm: lockOptions.button.text,
							cancel: (0, _wordpress_i18n.__)("Cancel", "elementor")
						},
						onConfirm: function onConfirm() {
							_this.trackResultSelect();
							var link = _this.replaceLockLinkPlaceholders(lockOptions.button.url);
							window.open(link, "_blank");
						}
					}).show();
				}
			},
			{
				key: "replaceLockLinkPlaceholders",
				value: function replaceLockLinkPlaceholders(link) {
					return link.replace(/%%utm_source%%/g, "finder").replace(/%%utm_medium%%/g, "wp-dash");
				}
			}
		]);
	}(Marionette.ItemView);

//#endregion
//#region core/common/modules/finder/assets/js/modal/model/item.js
	function _callSuper$21(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$21() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$21, "_callSuper");
	function _isNativeReflectConstruct$21() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$21 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$21, "_isNativeReflectConstruct");
	var _default$8 = /*#__PURE__*/ function(_Backbone$Model) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$21(this, _default, arguments);
		}
		_inherits$1(_default, _Backbone$Model);
		return _createClass(_default, [{
			key: "defaults",
			value: function defaults() {
				return {
					description: "",
					icon: "settings",
					url: "",
					keywords: [],
					actions: [],
					lock: null
				};
			}
		}]);
	}(Backbone.Model);

//#endregion
//#region core/common/modules/finder/assets/js/modal/views/category.js
	function _callSuper$20(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$20() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$20, "_callSuper");
	function _isNativeReflectConstruct$20() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$20 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$20, "_isNativeReflectConstruct");
	var _default$7 = /*#__PURE__*/ function(_Marionette$Composite) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$20(this, _default, arguments);
		}
		_inherits$1(_default, _Marionette$Composite);
		return _createClass(_default, [
			{
				key: "className",
				value: function className() {
					return "elementor-finder__results__category";
				}
			},
			{
				key: "getTemplate",
				value: function getTemplate() {
					return "#tmpl-elementor-finder__results__category";
				}
			},
			{
				key: "getChildView",
				value: function getChildView() {
					return _default$9;
				}
			},
			{
				key: "initialize",
				value: function initialize() {
					this.childViewContainer = ".elementor-finder__results__category__items";
					this.isVisible = true;
					var items = this.model.get("items");
					if (items) items = Object.values(items);
					this.collection = new Backbone.Collection(items, { model: _default$8 });
				}
			},
			{
				key: "filter",
				value: function filter(childModel) {
					var textFilter = this.getTextFilter();
					if (childModel.get("title").toLowerCase().indexOf(textFilter) >= 0) return true;
					return childModel.get("keywords").some(function(keyword) {
						return keyword.indexOf(textFilter) >= 0;
					});
				}
			},
			{
				key: "getTextFilter",
				value: function getTextFilter() {
					return elementorCommon.finder.channel.request("filter:text").trim().toLowerCase();
				}
			},
			{
				key: "toggleElement",
				value: function toggleElement() {
					var isCurrentlyVisible = !!this.children.length;
					if (isCurrentlyVisible !== this.isVisible) {
						this.isVisible = isCurrentlyVisible;
						this.$el.toggle(isCurrentlyVisible);
						this.triggerMethod("toggle:visibility");
					}
				}
			},
			{
				key: "onRender",
				value: function onRender() {
					this.listenTo(elementorCommon.finder.channel, "filter:change", this.onFilterChange.bind(this));
				}
			},
			{
				key: "onFilterChange",
				value: function onFilterChange() {
					this._renderChildren();
				}
			},
			{
				key: "onRenderCollection",
				value: function onRenderCollection() {
					this.toggleElement();
				}
			}
		]);
	}(Marionette.CompositeView);

//#endregion
//#region core/common/modules/finder/assets/js/modal/views/dynamic-category.js
	function _callSuper$19(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$19() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$19, "_callSuper");
	function _isNativeReflectConstruct$19() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$19 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$19, "_isNativeReflectConstruct");
	function _superPropGet$5(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$5, "_superPropGet");
	var _default$6 = /*#__PURE__*/ function(_Category) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$19(this, _default, arguments);
		}
		_inherits$1(_default, _Category);
		return _createClass(_default, [
			{
				key: "className",
				value: function className() {
					return _superPropGet$5(_default, "className", this, 3)([]) + " elementor-finder__results__category--dynamic";
				}
			},
			{
				key: "ui",
				value: function ui() {
					return { title: ".elementor-finder__results__category__title" };
				}
			},
			{
				key: "fetchData",
				value: function fetchData() {
					var _this = this;
					this.ui.loadingIcon.show();
					elementorCommon.ajax.addRequest("finder_get_category_items", {
						data: {
							category: this.model.get("name"),
							filter: this.getTextFilter()
						},
						success: function success(data) {
							if (_this.isDestroyed) return;
							_this.collection.set(data);
							_this.toggleElement();
							_this.ui.loadingIcon.hide();
						}
					});
				}
			},
			{
				key: "filter",
				value: function filter() {
					return true;
				}
			},
			{
				key: "onFilterChange",
				value: function onFilterChange() {
					this.fetchData();
				}
			},
			{
				key: "onRender",
				value: function onRender() {
					_superPropGet$5(_default, "onRender", this, 3)([]);
					this.ui.loadingIcon = jQuery("<i>", { class: "eicon-loading eicon-animation-spin" });
					this.ui.title.after(this.ui.loadingIcon);
					this.fetchData();
				}
			}
		]);
	}(_default$7);

//#endregion
//#region core/common/modules/finder/assets/js/modal/views/categories.js
	function _callSuper$18(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$18() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$18, "_callSuper");
	function _isNativeReflectConstruct$18() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$18 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$18, "_isNativeReflectConstruct");
	var _default$5 = /*#__PURE__*/ function(_Marionette$Composite) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$18(this, _default, arguments);
		}
		_inherits$1(_default, _Marionette$Composite);
		return _createClass(_default, [
			{
				key: "id",
				value: function id() {
					return "elementor-finder__results-container";
				}
			},
			{
				key: "ui",
				value: function ui() {
					this.selectors = {
						noResults: "#elementor-finder__no-results",
						categoryItem: ".elementor-finder__results__item"
					};
					return this.selectors;
				}
			},
			{
				key: "events",
				value: function events() {
					return { "mouseenter @ui.categoryItem": "onCategoryItemMouseEnter" };
				}
			},
			{
				key: "getTemplate",
				value: function getTemplate() {
					return "#tmpl-elementor-finder-results-container";
				}
			},
			{
				key: "getChildView",
				value: function getChildView(childModel) {
					return childModel.get("dynamic") ? _default$6 : _default$7;
				}
			},
			{
				key: "initialize",
				value: function initialize() {
					this.$activeItem = null;
					this.childViewContainer = "#elementor-finder__results";
					this.collection = new Backbone.Collection(Object.values(elementorCommon.finder.getSettings("data")));
				}
			},
			{
				key: "activateItem",
				value: function activateItem($item) {
					if (this.$activeItem) this.$activeItem.removeClass("elementor-active");
					$item.addClass("elementor-active");
					this.$activeItem = $item;
				}
			},
			{
				key: "activateNextItem",
				value: function activateNextItem(reverse) {
					var $allItems = jQuery(this.selectors.categoryItem);
					var nextItemIndex = 0;
					if (this.$activeItem) {
						nextItemIndex = $allItems.index(this.$activeItem) + (reverse ? -1 : 1);
						if (nextItemIndex >= $allItems.length) nextItemIndex = 0;
						else if (nextItemIndex < 0) nextItemIndex = $allItems.length - 1;
					}
					var $nextItem = $allItems.eq(nextItemIndex);
					this.activateItem($nextItem);
					$nextItem[0].scrollIntoView({ block: "nearest" });
				}
			},
			{
				key: "goToActiveItem",
				value: function goToActiveItem(event) {
					var $a = this.$activeItem.children("a");
					var isControlClicked = $e.shortcuts.isControlEvent(event);
					if (isControlClicked) $a.attr("target", "_blank");
					$a[0].click();
					if (isControlClicked) $a.removeAttr("target");
				}
			},
			{
				key: "onCategoryItemMouseEnter",
				value: function onCategoryItemMouseEnter(event) {
					this.activateItem(jQuery(event.currentTarget));
				}
			},
			{
				key: "onChildviewToggleVisibility",
				value: function onChildviewToggleVisibility() {
					var allCategoriesAreEmpty = this.children.every(function(child) {
						return !child.isVisible;
					});
					this.ui.noResults.toggle(allCategoriesAreEmpty);
				}
			}
		]);
	}(Marionette.CompositeView);

//#endregion
//#region core/common/modules/finder/assets/js/modal/views/content.js
	function _callSuper$17(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$17() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$17, "_callSuper");
	function _isNativeReflectConstruct$17() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$17 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$17, "_isNativeReflectConstruct");
	var FINDER_SEARCH_DEBOUNCE_MS = 300;
	var _default$4 = /*#__PURE__*/ function(_Marionette$LayoutVie) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$17(this, _default, arguments);
		}
		_inherits$1(_default, _Marionette$LayoutVie);
		return _createClass(_default, [
			{
				key: "id",
				value: function id() {
					return "elementor-finder";
				}
			},
			{
				key: "getTemplate",
				value: function getTemplate() {
					return "#tmpl-elementor-finder";
				}
			},
			{
				key: "ui",
				value: function ui() {
					return { searchInput: "#elementor-finder__search__input" };
				}
			},
			{
				key: "events",
				value: function events() {
					return { "input @ui.searchInput": "onSearchInputInput" };
				}
			},
			{
				key: "regions",
				value: function regions() {
					return { content: "#elementor-finder__content" };
				}
			},
			{
				key: "initialize",
				value: function initialize() {
					this.debouncedTrackSearch = createDebouncedFinderSearch(FINDER_SEARCH_DEBOUNCE_MS);
				}
			},
			{
				key: "showCategoriesView",
				value: function showCategoriesView() {
					this.content.show(new _default$5());
				}
			},
			{
				key: "getResultsCount",
				value: function getResultsCount() {
					if (!this.content.currentView) return 0;
					return this.content.currentView.$el.find(".elementor-finder__results__item:visible").length;
				}
			},
			{
				key: "onSearchInputInput",
				value: function onSearchInputInput() {
					var _this = this;
					var value = this.ui.searchInput.val();
					if (value) {
						elementorCommon.finder.channel.reply("filter:text", value).trigger("filter:change");
						if (!(this.content.currentView instanceof _default$5)) this.showCategoriesView();
						setTimeout(function() {
							var resultsCount = _this.getResultsCount();
							_this.debouncedTrackSearch(resultsCount, value);
						}, 50);
					}
					this.content.currentView.$el.toggle(!!value);
				}
			},
			{
				key: "onDestroy",
				value: function onDestroy() {
					var _this$debouncedTrackS;
					if ((_this$debouncedTrackS = this.debouncedTrackSearch) !== null && _this$debouncedTrackS !== void 0 && _this$debouncedTrackS.cancel) this.debouncedTrackSearch.cancel();
				}
			}
		]);
	}(Marionette.LayoutView);

//#endregion
//#region core/common/modules/finder/assets/js/modal/views/layout.js
	function _callSuper$16(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$16() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$16, "_callSuper");
	function _isNativeReflectConstruct$16() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$16 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$16, "_isNativeReflectConstruct");
	function _superPropGet$4(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$4, "_superPropGet");
	var _default$3 = /*#__PURE__*/ function(_elementorModules$com) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$16(this, _default, arguments);
		}
		_inherits$1(_default, _elementorModules$com);
		return _createClass(_default, [
			{
				key: "getModalOptions",
				value: function getModalOptions() {
					return {
						id: "elementor-finder__modal",
						draggable: true,
						effects: {
							show: "show",
							hide: "hide"
						},
						position: { enable: false }
					};
				}
			},
			{
				key: "getLogoOptions",
				value: function getLogoOptions() {
					return { title: (0, _wordpress_i18n.__)("Finder", "elementor") };
				}
			},
			{
				key: "initialize",
				value: function initialize() {
					for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
					_superPropGet$4(_default, "initialize", this, 3)(args);
					this.showLogo();
					this.showContentView();
				}
			},
			{
				key: "showContentView",
				value: function showContentView() {
					this.modalContent.show(new _default$4());
				}
			},
			{
				key: "showModal",
				value: function showModal() {
					for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
					_superPropGet$4(_default, "showModal", this, 3)(args);
					this.modalContent.currentView.ui.searchInput.focus();
				}
			}
		]);
	}(elementorModules.common.views.modal.Layout);

//#endregion
//#region core/common/modules/finder/assets/js/commands/navigate-down.js
	function _callSuper$15(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$15() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$15, "_callSuper");
	function _isNativeReflectConstruct$15() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$15 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$15, "_isNativeReflectConstruct");
	var NavigateDown = /*#__PURE__*/ function(_CommandBase) {
		function NavigateDown() {
			_classCallCheck(this, NavigateDown);
			return _callSuper$15(this, NavigateDown, arguments);
		}
		_inherits$1(NavigateDown, _CommandBase);
		return _createClass(NavigateDown, [{
			key: "apply",
			value: function apply() {
				this.component.getItemsView().activateNextItem();
			}
		}]);
	}(CommandBase);

//#endregion
//#region core/common/modules/finder/assets/js/commands/navigate-select.js
	function _callSuper$14(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$14() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$14, "_callSuper");
	function _isNativeReflectConstruct$14() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$14 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$14, "_isNativeReflectConstruct");
	var NavigateSelect = /*#__PURE__*/ function(_CommandBase) {
		function NavigateSelect() {
			_classCallCheck(this, NavigateSelect);
			return _callSuper$14(this, NavigateSelect, arguments);
		}
		_inherits$1(NavigateSelect, _CommandBase);
		return _createClass(NavigateSelect, [{
			key: "apply",
			value: function apply(args) {
				this.component.getItemsView().goToActiveItem(args);
			}
		}]);
	}(CommandBase);

//#endregion
//#region core/common/modules/finder/assets/js/commands/navigate-up.js
	function _callSuper$13(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$13() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$13, "_callSuper");
	function _isNativeReflectConstruct$13() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$13 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$13, "_isNativeReflectConstruct");
	var NavigateUp = /*#__PURE__*/ function(_CommandBase) {
		function NavigateUp() {
			_classCallCheck(this, NavigateUp);
			return _callSuper$13(this, NavigateUp, arguments);
		}
		_inherits$1(NavigateUp, _CommandBase);
		return _createClass(NavigateUp, [{
			key: "apply",
			value: function apply() {
				this.component.getItemsView().activateNextItem(true);
			}
		}]);
	}(CommandBase);

//#endregion
//#region core/common/modules/finder/assets/js/commands/index.js
	var commands_exports = /* @__PURE__ */ __exportAll({
		NavigateDown: () => NavigateDown,
		NavigateSelect: () => NavigateSelect,
		NavigateUp: () => NavigateUp
	});

//#endregion
//#region core/common/modules/finder/assets/js/component.js
	init_defineProperty();
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
	function _callSuper$12(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$12() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$12, "_callSuper");
	function _isNativeReflectConstruct$12() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$12 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$12, "_isNativeReflectConstruct");
	function _superPropGet$3(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$3, "_superPropGet");
	var Component$2 = /*#__PURE__*/ function(_ComponentModalBase) {
		function Component() {
			_classCallCheck(this, Component);
			return _callSuper$12(this, Component, arguments);
		}
		_inherits$1(Component, _ComponentModalBase);
		return _createClass(Component, [
			{
				key: "getNamespace",
				value: function getNamespace() {
					return "finder";
				}
			},
			{
				key: "defaultShortcuts",
				value: function defaultShortcuts() {
					var _this = this;
					return {
						"": { keys: "ctrl+e" },
						"navigate-down": {
							keys: "down",
							scopes: [this.getNamespace()],
							dependency: function dependency() {
								return _this.getItemsView();
							}
						},
						"navigate-up": {
							keys: "up",
							scopes: [this.getNamespace()],
							dependency: function dependency() {
								return _this.getItemsView();
							}
						},
						"navigate-select": {
							keys: "enter",
							scopes: [this.getNamespace()],
							dependency: function dependency() {
								return _this.getItemsView().$activeItem;
							}
						}
					};
				}
			},
			{
				key: "defaultCommands",
				value: function defaultCommands() {
					return _objectSpread$3(_objectSpread$3({
						"navigate/down": function navigate_down() {
							elementorDevTools.deprecation.deprecated("$e.run( 'finder/navigate/down' )", "3.0.0", "$e.run( 'finder/navigate-down' )");
							$e.run("finder/navigate-down");
						},
						"navigate/up": function navigate_up() {
							elementorDevTools.deprecation.deprecated("$e.run( 'finder/navigate/up' )", "3.0.0", "$e.run( 'finder/navigate-up' )");
							$e.run("finder/navigate-up");
						},
						"navigate/select": function navigate_select(event) {
							elementorDevTools.deprecation.deprecated("$e.run( 'finder/navigate/select', event )", "3.0.0", "$e.run( 'finder/navigate-select', event )");
							$e.run("finder/navigate-select", event);
						}
					}, _superPropGet$3(Component, "defaultCommands", this, 3)([])), this.importCommands(commands_exports));
				}
			},
			{
				key: "getModalLayout",
				value: function getModalLayout() {
					return _default$3;
				}
			},
			{
				key: "getItemsView",
				value: function getItemsView() {
					return this.layout.modalContent.currentView.content.currentView;
				}
			}
		]);
	}(ComponentModalBase);

//#endregion
//#region core/common/modules/finder/assets/js/finder.js
	function _callSuper$11(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$11() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$11, "_callSuper");
	function _isNativeReflectConstruct$11() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$11 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$11, "_isNativeReflectConstruct");
	var _default$2 = /*#__PURE__*/ function(_elementorModules$Mod) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$11(this, _default, arguments);
		}
		_inherits$1(_default, _elementorModules$Mod);
		return _createClass(_default, [{
			key: "onInit",
			value: function onInit() {
				if (window.top !== window) return;
				this.channel = Backbone.Radio.channel("ELEMENTOR:finder");
				$e.components.register(new Component$2({ manager: this }));
			}
		}]);
	}(elementorModules.Module);

//#endregion
//#region core/common/modules/connect/assets/js/connect.js
	function _callSuper$10(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$10() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$10, "_callSuper");
	function _isNativeReflectConstruct$10() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$10 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$10, "_isNativeReflectConstruct");
	function _superPropGet$2(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$2, "_superPropGet");
	var _default$1 = /*#__PURE__*/ function(_elementorModules$Vie) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$10(this, _default, arguments);
		}
		_inherits$1(_default, _elementorModules$Vie);
		return _createClass(_default, [
			{
				key: "addPopupPlugin",
				value: function addPopupPlugin() {
					var counter = 0;
					jQuery.fn.elementorConnect = function(options) {
						var _this = this;
						if (options !== null && options !== void 0 && options.popup) {
							jQuery(this).on("click", function(event) {
								var _options$popup;
								var _options$popup2;
								event.preventDefault();
								var width = ((_options$popup = options.popup) === null || _options$popup === void 0 ? void 0 : _options$popup.width) || 600;
								var height = ((_options$popup2 = options.popup) === null || _options$popup2 === void 0 ? void 0 : _options$popup2.height) || 700;
								window.open(jQuery(_this).attr("href") + "&mode=popup", "elementorConnect", "toolbar=no, menubar=no, width=".concat(width, ", height=").concat(height, ", top=200, left=0"));
							});
							delete options.popup;
						}
						var settings = jQuery.extend({
							success: function success() {
								return location.reload();
							},
							error: function error() {
								elementor.notifications.showToast({ message: (0, _wordpress_i18n.__)("Unable to connect", "elementor") });
							},
							parseUrl: function parseUrl(url) {
								return url;
							}
						}, options);
						this.each(function() {
							counter++;
							var $this = jQuery(this);
							var callbackId = "cb" + counter;
							$this.attr({
								target: "_blank",
								rel: "opener",
								href: settings.parseUrl($this.attr("href") + "&mode=popup&callback_id=" + callbackId)
							});
							elementorCommon.elements.$window.on("elementor/connect/success/" + callbackId, settings.success).on("elementor/connect/error/" + callbackId, settings.error);
						});
						return this;
					};
				}
			},
			{
				key: "getDefaultSettings",
				value: function getDefaultSettings() {
					return { selectors: { connectButton: "#elementor-template-library-connect__button" } };
				}
			},
			{
				key: "getDefaultElements",
				value: function getDefaultElements() {
					return { $connectButton: jQuery(this.getSettings("selectors.connectButton")) };
				}
			},
			{
				key: "applyPopup",
				value: function applyPopup() {
					this.elements.$connectButton.elementorConnect();
				}
			},
			{
				key: "onInit",
				value: function onInit() {
					_superPropGet$2(_default, "onInit", this, 3)([]);
					this.addPopupPlugin();
					this.applyPopup();
				}
			}
		]);
	}(elementorModules.ViewModule);

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
	function asyncGeneratorStep$1(n, t, e, r, o, a, c) {
		try {
			var i = n[a](c);
			var u = i.value;
		} catch (n) {
			e(n);
			return;
		}
		i.done ? t(u) : Promise.resolve(u).then(r, o);
	}
	__name(asyncGeneratorStep$1, "asyncGeneratorStep");
	function _asyncToGenerator(n) {
		return function() {
			var t = this;
			var e = arguments;
			return new Promise(function(r, o) {
				var a = n.apply(t, e);
				function _next(n) {
					asyncGeneratorStep$1(a, r, o, _next, _throw, "next", n);
				}
				function _throw(n) {
					asyncGeneratorStep$1(a, r, o, _next, _throw, "throw", n);
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
//#region modules/web-cli/assets/js/core/data/errors/base-error.js
var import_regenerator = /* @__PURE__ */ __toESM(require_regenerator());
	init_defineProperty();
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
	function _callSuper$9(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$9() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$9, "_callSuper");
	function _isNativeReflectConstruct$9() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$9 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$9, "_isNativeReflectConstruct");
	var BaseError = /*#__PURE__*/ function(_Error) {
		/**
		* Error constructor.
		*
		* @param {string} message
		* @param {string} code
		* @param {*}      data
		*/
		function BaseError() {
			var _this;
			var message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
			var code = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
			var data = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
			_classCallCheck(this, BaseError);
			_this = _callSuper$9(this, BaseError, [message]);
			/**
			* The server error code.
			*
			* @type {string}
			*/
			_defineProperty(_this, "code", "");
			/**
			* Additional data about the current error.
			*
			* @type {*[]}
			*/
			_defineProperty(_this, "data", []);
			_this.code = code;
			_this.data = data;
			return _this;
		}
		/**
		* Notify a message when the error occurs.
		*/
		_inherits$1(BaseError, _Error);
		return _createClass(BaseError, [{
			key: "notify",
			value: function notify() {
				Console.error(_objectSpread$2({ message: this.message }, this));
			}
		}], [{
			key: "create",
			value: function create(message) {
				var code = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
				var data = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
				return new this(message, code, data);
			}
		}, {
			key: "getHTTPErrorCode",
			value: function getHTTPErrorCode() {
				force_method_implementation_default();
			}
		}]);
	}(/*#__PURE__*/ _wrapNativeSuper(Error));

//#endregion
//#region modules/web-cli/assets/js/core/data/errors/default-error.js
	function _callSuper$8(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$8() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$8, "_callSuper");
	function _isNativeReflectConstruct$8() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$8 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$8, "_isNativeReflectConstruct");
	var DefaultError = /*#__PURE__*/ function(_BaseError) {
		function DefaultError() {
			_classCallCheck(this, DefaultError);
			return _callSuper$8(this, DefaultError, arguments);
		}
		_inherits$1(DefaultError, _BaseError);
		return _createClass(DefaultError, null, [{
			key: "getHTTPErrorCode",
			value: function getHTTPErrorCode() {
				return 501;
			}
		}]);
	}(BaseError);

//#endregion
//#region modules/web-cli/assets/js/core/data/errors/error-404.js
	function _callSuper$7(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$7() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$7, "_callSuper");
	function _isNativeReflectConstruct$7() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$7 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$7, "_isNativeReflectConstruct");
	var Error404 = /*#__PURE__*/ function(_BaseError) {
		function Error404() {
			_classCallCheck(this, Error404);
			return _callSuper$7(this, Error404, arguments);
		}
		_inherits$1(Error404, _BaseError);
		return _createClass(Error404, [{
			key: "notify",
			value: function notify() {
				Console.warn(this.message);
			}
		}], [{
			key: "getHTTPErrorCode",
			value: function getHTTPErrorCode() {
				return 404;
			}
		}]);
	}(BaseError);

//#endregion
//#region modules/web-cli/assets/js/core/data/errors/index.js
	var errors_exports = /* @__PURE__ */ __exportAll({
		DefaultError: () => DefaultError,
		Error404: () => Error404
	});

//#endregion
//#region modules/web-cli/assets/js/modules/command-data.js
	init_defineProperty();
	function _callSuper$6(t, o, e) {
		return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$6() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	}
	__name(_callSuper$6, "_callSuper");
	function _isNativeReflectConstruct$6() {
		try {
			var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (t) {}
		return (_isNativeReflectConstruct$6 = function _isNativeReflectConstruct() {
			return !!t;
		})();
	}
	__name(_isNativeReflectConstruct$6, "_isNativeReflectConstruct");
	/**
	* @name $e.modules.CommandData
	*/
	/**
	* @typedef {('create'|'delete'|'get'|'update'|'options')} DataTypes
	*/
	/**
	* @typedef {{}} RequestData
	*/
	/**
	* @typedef {import('../core/data/errors/base-error')} BaseError
	*/
	var CommandData = /*#__PURE__*/ function(_CommandBase) {
		function CommandData(args) {
			var _this$args$options;
			var _this;
			var commandsAPI = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $e.data;
			_classCallCheck(this, CommandData);
			_this = _callSuper$6(this, CommandData, [args, commandsAPI]);
			/**
			* Data returned from remote.
			*
			* @type {*}
			*/
			_defineProperty(_this, "data", void 0);
			/**
			* Fetch type.
			*
			* @type {DataTypes}
			*/
			_defineProperty(_this, "type", void 0);
			if ((_this$args$options = _this.args.options) !== null && _this$args$options !== void 0 && _this$args$options.type) _this.type = _this.args.options.type;
			return _this;
		}
		/**
		* Function getEndpointFormat().
		*
		* @return {null|string} endpoint format
		*/
		_inherits$1(CommandData, _CommandBase);
		return _createClass(CommandData, [
			{
				key: "getApplyMethods",
				value: function getApplyMethods() {
					var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.type;
					var before;
					var after;
					switch (type) {
						case "create":
							before = this.applyBeforeCreate;
							after = this.applyAfterCreate;
							break;
						case "delete":
							before = this.applyBeforeDelete;
							after = this.applyAfterDelete;
							break;
						case "get":
							before = this.applyBeforeGet;
							after = this.applyAfterGet;
							break;
						case "update":
							before = this.applyBeforeUpdate;
							after = this.applyAfterUpdate;
							break;
						case "options":
							before = this.applyBeforeOptions;
							after = this.applyAfterOptions;
							break;
						default: return false;
					}
					return {
						before: before.bind(this),
						after: after.bind(this)
					};
				}
			},
			{
				key: "getRequestData",
				value: function getRequestData() {
					return {
						type: this.type,
						args: this.args,
						timestamp: (/* @__PURE__ */ new Date()).getTime(),
						component: this.component,
						command: this.command,
						endpoint: $e.data.commandToEndpoint(this.command, JSON.parse(JSON.stringify(this.args)), this.constructor.getEndpointFormat())
					};
				}
			},
			{
				key: "apply",
				value: function apply() {
					var _this2 = this;
					var applyMethods = this.getApplyMethods();
					this.args = applyMethods.before(this.args);
					var requestData = this.getRequestData();
					return $e.data.fetch(requestData).then(function(data) {
						_this2.data = data;
						_this2.data = applyMethods.after(data, _this2.args);
						_this2.data = { data: _this2.data };
						_this2.data = Object.assign({ __requestData__: requestData }, _this2.data);
						return _this2.data;
					});
				}
			},
			{
				key: "applyBeforeCreate",
				value: function applyBeforeCreate() {
					return arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				}
			},
			{
				key: "applyAfterCreate",
				value: function applyAfterCreate(data) {
					arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
					return data;
				}
			},
			{
				key: "applyBeforeDelete",
				value: function applyBeforeDelete() {
					return arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				}
			},
			{
				key: "applyAfterDelete",
				value: function applyAfterDelete(data) {
					arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
					return data;
				}
			},
			{
				key: "applyBeforeGet",
				value: function applyBeforeGet() {
					return arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				}
			},
			{
				key: "applyAfterGet",
				value: function applyAfterGet(data) {
					arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
					return data;
				}
			},
			{
				key: "applyBeforeUpdate",
				value: function applyBeforeUpdate() {
					return arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				}
			},
			{
				key: "applyAfterUpdate",
				value: function applyAfterUpdate(data) {
					arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
					return data;
				}
			},
			{
				key: "applyBeforeOptions",
				value: function applyBeforeOptions() {
					return arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				}
			},
			{
				key: "applyAfterOptions",
				value: function applyAfterOptions(data) {
					arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
					return data;
				}
			},
			{
				key: "applyAfterCatch",
				value: function applyAfterCatch(e) {
					e.notify();
				}
			},
			{
				key: "onCatchApply",
				value: function onCatchApply(e) {
					var _e;
					var httpErrorCode = ((_e = e) === null || _e === void 0 || (_e = _e.data) === null || _e === void 0 ? void 0 : _e.status) || 501;
					var dataError = Object.values(errors_exports).find(function(error) {
						return error.getHTTPErrorCode() === httpErrorCode;
					});
					if (!dataError) dataError = DefaultError;
					e = dataError.create(e.message, e.code, e.data || []);
					this.runCatchHooks(e);
					this.applyAfterCatch(e);
				}
			}
		], [{
			key: "getInstanceType",
			value: function getInstanceType() {
				return "CommandData";
			}
		}, {
			key: "getEndpointFormat",
			value: function getEndpointFormat() {
				return null;
			}
		}]);
	}(CommandBase);

//#endregion
//#region assets/dev/js/editor/utils/files-upload-handler.js
	var FilesUploadHandler = /*#__PURE__*/ function() {
		function FilesUploadHandler() {
			_classCallCheck(this, FilesUploadHandler);
		}
		return _createClass(FilesUploadHandler, null, [
			{
				key: "isUploadEnabled",
				value: function isUploadEnabled(mediaType) {
					if (!["svg", "application/json"].includes(mediaType)) return true;
					return elementorCommon.config.filesUpload.unfilteredFiles;
				}
			},
			{
				key: "setUploadTypeCaller",
				value: function setUploadTypeCaller(frame) {
					frame.uploader.uploader.param("uploadTypeCaller", "elementor-wp-media-upload");
				}
			},
			{
				key: "getUnfilteredFilesNonAdminDialog",
				value: function getUnfilteredFilesNonAdminDialog() {
					return elementorCommon.dialogsManager.createWidget("alert", {
						id: "e-unfiltered-files-disabled-dialog",
						headerMessage: (0, _wordpress_i18n.__)("Sorry, you can't upload that file yet", "elementor"),
						message: (0, _wordpress_i18n.__)("This is because JSON files may pose a security risk.", "elementor") + "<br><br>" + (0, _wordpress_i18n.__)("To upload them anyway, ask the site administrator to enable unfiltered file uploads.", "elementor"),
						strings: { confirm: (0, _wordpress_i18n.__)("Got it", "elementor") }
					});
				}
			},
			{
				key: "getUnfilteredFilesNotEnabledDialog",
				value: function getUnfilteredFilesNotEnabledDialog(callback) {
					var elementorInstance = window.elementorAdmin || window.elementor;
					if (!elementorInstance.config.user.is_administrator) return this.getUnfilteredFilesNonAdminDialog();
					return elementorInstance.helpers.getSimpleDialog("e-enable-unfiltered-files-dialog", (0, _wordpress_i18n.__)("Enable Unfiltered File Uploads", "elementor"), (0, _wordpress_i18n.__)("Before you enable unfiltered files upload, note that such files include a security risk. Elementor does run a process to remove possible malicious code, but there is still risk involved when using such files.", "elementor"), (0, _wordpress_i18n.__)("Enable", "elementor"), function onConfirm() {
						elementorCommon.ajax.addRequest("enable_unfiltered_files_upload", {}, true);
						elementorCommon.config.filesUpload.unfilteredFiles = true;
						callback();
					});
				}
			},
			{
				key: "getUnfilteredFilesNotEnabledImportTemplateDialog",
				value: function getUnfilteredFilesNotEnabledImportTemplateDialog(callback) {
					if (!(window.elementorAdmin || window.elementor).config.user.is_administrator) return this.getUnfilteredFilesNonAdminDialog();
					return elementorCommon.dialogsManager.createWidget("confirm", {
						id: "e-enable-unfiltered-files-dialog-import-template",
						headerMessage: (0, _wordpress_i18n.__)("Enable Unfiltered File Uploads", "elementor"),
						message: (0, _wordpress_i18n.__)("Before you enable unfiltered files upload, note that such files include a security risk. Elementor does run a process to remove possible malicious code, but there is still risk involved when using such files.", "elementor") + "<br /><br />" + (0, _wordpress_i18n.__)("If you do not enable uploading unfiltered files, any SVG or JSON (including lottie) files used in the uploaded template will not be imported.", "elementor"),
						position: {
							my: "center center",
							at: "center center"
						},
						strings: {
							confirm: (0, _wordpress_i18n.__)("Enable and Import", "elementor"),
							cancel: (0, _wordpress_i18n.__)("Import Without Enabling", "elementor")
						},
						onConfirm: function onConfirm() {
							elementorCommon.ajax.addRequest("enable_unfiltered_files_upload", { success: function success() {
								elementorCommon.config.filesUpload.unfilteredFiles = true;
								callback();
							} }, true);
						},
						onCancel: function onCancel() {
							return callback();
						}
					});
				}
			}
		]);
	}();

//#endregion
//#region core/common/assets/js/components/wordpress/commands-data/media.js
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
	function _superPropGet$1(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	__name(_superPropGet$1, "_superPropGet");
	var Media = /*#__PURE__*/ function(_CommandData) {
		function Media() {
			_classCallCheck(this, Media);
			return _callSuper$5(this, Media, arguments);
		}
		_inherits$1(Media, _CommandData);
		return _createClass(Media, [
			{
				key: "validateArgs",
				value: function validateArgs() {
					this.requireArgumentInstance("file", File);
				}
			},
			{
				key: "getRequestData",
				value: function getRequestData() {
					var requestData = _superPropGet$1(Media, "getRequestData", this, 3)([]);
					requestData.namespace = "wp";
					requestData.version = "2";
					return requestData;
				}
			},
			{
				key: "applyBeforeCreate",
				value: function applyBeforeCreate(args) {
					var _args$options;
					args.headers = {
						"Content-Disposition": "attachment; filename=".concat(this.file.name),
						"Content-Type": this.file.type
					};
					args.query = { uploadTypeCaller: "elementor-wp-media-upload" };
					args.data = this.file;
					if ((_args$options = args.options) !== null && _args$options !== void 0 && _args$options.progress) this.toast = elementor.notifications.showToast({
						message: (0, _wordpress_i18n.__)("Uploading..."),
						sticky: true
					});
					return args;
				}
			},
			{
				key: "applyAfterCreate",
				value: function applyAfterCreate(data, args) {
					var _args$options2;
					if ((_args$options2 = args.options) !== null && _args$options2 !== void 0 && _args$options2.progress) this.toast.hide();
					return data;
				}
			},
			{
				key: "run",
				value: function() {
					var _run = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee() {
						return import_regenerator.default.wrap(function(_context) {
							while (1) switch (_context.prev = _context.next) {
								case 0:
									this.file = this.args.file;
									if (!(this.file.size > parseInt(window._wpPluploadSettings.defaults.filters.max_file_size, 10))) {
										_context.next = 1;
										break;
									}
									throw new Error((0, _wordpress_i18n.__)("The file exceeds the maximum upload size for this site.", "elementor"));
								case 1:
									if (!(!window._wpPluploadSettings.defaults.filters.mime_types[0].extensions.split(",").includes(this.file.name.split(".").pop()) && !elementor.config.filesUpload.unfilteredFiles)) {
										_context.next = 2;
										break;
									}
									FilesUploadHandler.getUnfilteredFilesNotEnabledDialog(function() {}).show();
									return _context.abrupt("return");
								case 2:
									_context.next = 3;
									return _superPropGet$1(Media, "run", this, 3)([]);
								case 3: return _context.abrupt("return", _context.sent);
								case 4:
								case "end": return _context.stop();
							}
						}, _callee, this);
					}));
					function run() {
						return _run.apply(this, arguments);
					}
					return run;
				}()
			}
		], [{
			key: "getEndpointFormat",
			value: function getEndpointFormat() {
				return "media";
			}
		}]);
	}(CommandData);

//#endregion
//#region core/common/assets/js/components/wordpress/commands-data/index.js
	var commands_data_exports$1 = /* @__PURE__ */ __exportAll({ Media: () => Media });

//#endregion
//#region core/common/assets/js/components/wordpress/component.js
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
	var Component$1 = /*#__PURE__*/ function(_ComponentBase) {
		function Component() {
			_classCallCheck(this, Component);
			return _callSuper$4(this, Component, arguments);
		}
		_inherits$1(Component, _ComponentBase);
		return _createClass(Component, [{
			key: "getNamespace",
			value: function getNamespace() {
				return "wp";
			}
		}, {
			key: "defaultData",
			value: function defaultData() {
				return this.importCommands(commands_data_exports$1);
			}
		}]);
	}(ComponentBase);

//#endregion
//#region core/common/modules/event-tracker/assets/js/data/commands-data/index.js
	var commands_data_exports = /* @__PURE__ */ __exportAll({ Index: () => Index });
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
	var Index = /*#__PURE__*/ function(_CommandData) {
		function Index() {
			_classCallCheck(this, Index);
			return _callSuper$3(this, Index, arguments);
		}
		_inherits$1(Index, _CommandData);
		return _createClass(Index, null, [{
			key: "getEndpointFormat",
			value: function getEndpointFormat() {
				return "send-event";
			}
		}]);
	}(CommandData);

//#endregion
//#region core/common/modules/event-tracker/assets/js/data/component.js
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
	var Component = /*#__PURE__*/ function(_ComponentBase) {
		function Component() {
			_classCallCheck(this, Component);
			return _callSuper$2(this, Component, arguments);
		}
		_inherits$1(Component, _ComponentBase);
		return _createClass(Component, [{
			key: "getNamespace",
			value: function getNamespace() {
				return "event-tracker";
			}
		}, {
			key: "defaultData",
			value: function defaultData() {
				return this.importCommands(commands_data_exports);
			}
		}]);
	}(ComponentBase);

//#endregion
//#region assets/dev/js/utils/time.js
/**
	* Returns the timestamp in ISO8601 format with the UTC timezone offset.
	*
	* @since 3.6.0
	*
	* @param {Date} date
	* @return {Date} timestamp
	*/
	function getUserTimestamp() {
		var date = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Date();
		var timezoneOffset = date.getTimezoneOffset();
		var UTCTimestamp = (/* @__PURE__ */ new Date(date.getTime() - timezoneOffset * 6e4)).toISOString();
		UTCTimestamp = UTCTimestamp.slice(0, -1);
		var decimalTimezoneOffset = timezoneOffset / 60;
		var sign = 0 <= decimalTimezoneOffset ? "+" : "-";
		var hours = Math.abs(Math.floor(decimalTimezoneOffset));
		var minutes = Math.abs(decimalTimezoneOffset % 1) * 60;
		var addZeroToHour = 10 > hours ? "0" : "";
		var addZeroToMinutes = 10 > minutes ? "0" : "";
		var formattedTimezoneOffset = sign + addZeroToHour + hours + ":" + addZeroToMinutes + minutes;
		return UTCTimestamp + formattedTimezoneOffset;
	}

//#endregion
//#region core/common/modules/event-tracker/assets/js/events.js
	var Events = /*#__PURE__*/ function() {
		function Events() {
			_classCallCheck(this, Events);
		}
		return _createClass(Events, [{
			key: "dispatchEvent",
			value: function dispatchEvent(eventData) {
				if (!eventData) return;
				eventData.ts = getUserTimestamp();
				$e.data.create("event-tracker/index", { event_data: eventData });
			}
		}]);
	}();

//#endregion
//#region core/common/modules/events-manager/assets/js/events-config.js
	var eventsConfig = {
		appTypes: {
			editor: "editor",
			wpAdmin: "wpadmin",
			wpDash: "wpdash"
		},
		windowNames: { sidebarMenu: "sidebar_menu" },
		targetTypes: {
			dropdownItem: "dropdown_item",
			button: "button",
			tab: "tab",
			toggle: "toggle",
			searchInput: "search_input",
			searchResult: "search_result",
			buttons: "buttons",
			searchWidget: "search_widget",
			wpDashAdminMenuItem: "wpdash_admin_menu_item",
			wpDashEditorMenu: "wpdash_editor_menu",
			wpDashSubMenuItem: "wpdash_sub_menu_item",
			link: "link"
		},
		interactionResults: {
			actionSelected: "action_selected",
			navigate: "navigate",
			create: "create",
			sessionEnd: "session_end",
			tabChanged: "tab_changed",
			assetInserted: "asset_inserted",
			assetFavorite: "asset_favorite",
			aiGenerate: "ai_generate",
			resultsUpdated: "results_updated",
			noResults: "no_results",
			selected: "selected",
			promotionViewed: "promotion_viewed",
			upgradeNow: "upgrade_now",
			elementorSideMenuOpened: "elementor_side_menu_opened",
			editorSubMenuOpened: "wpdash_editor_sub_menu_opened",
			themeBuilderPromotionWindow: "theme_builder_promotion_window",
			pageOpened: "page_opened",
			expanded: "expanded",
			collapsed: "collapsed"
		},
		targetNames: {
			publishDropdown: {
				saveDraft: "save_draft",
				saveAsTemplate: "save_as_template",
				viewPage: "view_page",
				copyAndShare: "copy_and_share"
			},
			pageList: { addNewPage: "add_new_page" }
		},
		triggers: {
			click: "Click",
			rightClick: "Right Click",
			doubleClick: "Double Click",
			accordionClick: "Accordion Click",
			toggleClick: "Toggle Click",
			dropdownClick: "Click Dropdown",
			editorLoaded: "Editor Loaded",
			visible: "Visible",
			pageLoaded: "Page Loaded",
			typing: "Typing",
			tabSelect: "Tab Select",
			insert: "Insert",
			hover: "Hover"
		},
		locations: {
			widgetPanel: "Widget Panel",
			topBar: "Top Bar",
			sidebar: "Sidebar",
			elementorEditor: "Elementor Editor",
			templatesLibrary: { library: "Templates Library" },
			app: {
				import: "Import Kit",
				export: "Export Kit",
				kitLibrary: "Kit Library",
				cloudKitLibrary: "Cloud Kit Library"
			},
			variables: "Variables Panel",
			variablesManager: "Variables Manager",
			admin: "WP admin",
			wpDashAdmin: "wpdash_admin",
			structurePanel: "Structure Panel",
			canvas: "Canvas",
			leftPanel: "Left Panel",
			elementorLibrary: "Elementor Library",
			components: { instanceEditingPanel: "Instance Editing Panel" }
		},
		secondaryLocations: {
			layout: "Layout Section",
			basic: "Basic Section",
			"pro-elements": "Pro Section",
			general: "General Section",
			"theme-elements": "Site Section",
			"theme-elements-single": "Single Section",
			"woocommerce-elements": "WooCommerce Section",
			wordpress: "WordPress Section",
			categories: "Widgets Tab",
			global: "Globals Tab",
			"whats-new": "What's New",
			"document-settings": "Document Settings icon",
			"preview-page": "Preview Page",
			"publish-button": "Publish Button",
			"widget-panel": "Widget Panel Icon",
			finder: "Finder",
			help: "Help",
			elementorLogoDropdown: "top_bar_elementor_logo_dropdown",
			elementorLogo: "Elementor Logo",
			eLogoMenu: "E-logo Menu",
			notes: "Notes",
			siteSettings: "Site Settings",
			structure: "Structure",
			documentNameDropdown: "Document Name dropdown",
			responsiveControls: "Responsive controls",
			launchpad: "launchpad",
			checklistHeader: "Checklist Header",
			checklistSteps: "Checklist Steps",
			userPreferences: "User Preferences",
			contextMenu: "Context Menu",
			templateLibrary: {
				saveModal: "Save to Modal",
				moveModal: "Move to Modal",
				bulkMoveModal: "Bulk Move to Modal",
				copyModal: "Copy to Modal",
				bulkCopyModal: "Bulk Copy to Modal",
				saveModalSelectFolder: "Save to Modal - select folder",
				saveModalSelectConnect: "Save to Modal - connect",
				saveModalSelectUpgrade: "Save to Modal - upgrade",
				importModal: "Import Modal",
				newFolderModal: "New Folder Modal",
				deleteDialog: "Delete Dialog",
				deleteFolderDialog: "Delete Folder Dialog",
				renameDialog: "Rename Dialog",
				createFolderDialog: "Create Folder Dialog",
				applySettingsDialog: "Apply Settings Dialog",
				cloudTab: "Cloud Tab",
				siteTab: "Site Tab",
				cloudTabFolder: "Cloud Tab - Folder",
				cloudTabConnect: "Cloud Tab - Connect",
				cloudTabUpgrade: "Cloud Tab - Upgrade",
				morePopup: "Context Menu",
				quotaBar: "Quota Bar"
			},
			kitLibrary: {
				cloudKitLibrary: "kits_cloud_library",
				cloudKitLibraryConnect: "kits_cloud_library_connect",
				cloudKitLibraryUpgrade: "kits_cloud_library_upgrade",
				kitExportCustomization: "kit_export_customization",
				kitExport: "kit_export",
				kitExportCustomizationEdit: "kit_export_customization_edit",
				kitExportSummary: "kit_export_summary",
				kitImportUploadBox: "kit_import_upload_box",
				kitImportCustomization: "kit_import_customization",
				kitImportSummary: "kit_import_summary"
			},
			variablesPopover: "Variables Popover",
			admin: {
				pluginToolsTab: "plugin_tools_tab",
				pluginWebsiteTemplatesTab: "plugin_website_templates_tab"
			},
			componentsTab: "Components Tab",
			canvasElement: "Canvas Element",
			publishDropdown: "Publish Dropdown",
			pageListDropdown: "Page List Dropdown",
			emptyBox: "Empty Box",
			searchBar: "Search Bar",
			finderResults: "Finder Results",
			libraryTabs: "Library Tabs",
			assetCard: "Asset Card",
			wpDashElementorCoreMenu: "elementor_editor_core_menu",
			wpDashElementorCoreSubMenu: "elementor_editor_core_sub_menu",
			wpDashThemeBuilder: "wpdash_core_sub_menu_theme_builder"
		},
		elements: {
			accordionSection: "Accordion section",
			buttonIcon: "Button Icon",
			mainCta: "Main CTA",
			button: "Button",
			link: "Link",
			dropdown: "Dropdown",
			toggle: "Toggle",
			launchpadChecklist: "Checklist popup"
		},
		names: {
			v1: {
				layout: "v1_widgets_tab_layout_section",
				basic: "v1_widgets_tab_basic_section",
				"pro-elements": "v1_widgets_tab_pro_section",
				general: "v1_widgets_tab_general_section",
				"theme-elements": "v1_widgets_tab_site_section",
				"theme-elements-single": "v1_widgets_tab_single_section",
				"woocommerce-elements": "v1_widgets_tab_woocommerce_section",
				wordpress: "v1_widgets_tab_wordpress_section",
				categories: "v1_widgets_tab",
				global: "v1_globals_tab"
			},
			topBar: {
				whatsNew: "top_bar_whats_new",
				documentSettings: "top_bar_document_settings_icon",
				previewPage: "top_bar_preview_page",
				publishButton: "top_bar_publish_button",
				widgetPanel: "top_bar_widget_panel_icon",
				finder: "top_bar_finder",
				help: "top_bar_help",
				history: "top_bar_elementor_logo_dropdown_history",
				userPreferences: "top_bar_elementor_logo_dropdown_user_preferences",
				keyboardShortcuts: "top_bar_elementor_logo_dropdown_keyboard_shortcuts",
				exitToWordpress: "top_bar_elementor_logo_dropdown_exit_to_wordpress",
				themeBuilder: "top_bar_elementor_logo_dropdown_theme_builder",
				notes: "top_bar_notes",
				siteSettings: "top_bar_site_setting",
				structure: "top_bar_structure",
				documentNameDropdown: "top_bar_document_name_dropdown",
				responsiveControls: "top_bar_responsive_controls",
				launchpadOn: "top_bar_checklist_icon_show",
				launchpadOff: "top_bar_checklist_icon_hide",
				elementorLogoDropdown: "open_e_menu",
				connectAccount: "connect_account",
				accountConnected: "account_connected"
			},
			elementorEditor: {
				editorLoaded: "editor_loaded",
				checklist: {
					checklistHeaderClose: "checklist_header_close_icon",
					checklistFirstPopup: "checklist popup triggered"
				},
				userPreferences: {
					checklistShow: "checklist_userpreferences_toggle_show",
					checklistHide: "checklist_userpreferences_toggle_hide"
				}
			},
			variables: {
				open: "open_variables_popover",
				add: "add_new_variable",
				connect: "connect_variable",
				save: "save_new_variable",
				update: "update_variable",
				openManager: "open_variables_manager",
				saveChanges: "save_variables_changes",
				delete: "delete_variable",
				variableSyncToV3: "variable_sync_to_v3"
			},
			design_system: {
				importOpened: "design_system_import_opened",
				fileSelected: "design_system_file_selected",
				validationFailed: "design_system_validation_failed",
				conflictChoice: "design_system_conflict_choice",
				confirmed: "design_system_import_confirmed",
				imported: "design_system_imported",
				importFailed: "design_system_import_failed",
				export: "design_system_export",
				opened: "design_system_opened"
			},
			components: {
				createClicked: "component_create_clicked",
				createCancelled: "component_creation_cancelled",
				created: "component_created",
				instanceAdded: "component_instance_added",
				edited: "component_edited",
				propertiesPanelOpened: "component_properties_panel_opened",
				propertiesGroupCreated: "component_properties_group_created",
				propertyExposed: "component_property_exposed",
				propertyRemoved: "component_property_removed",
				detached: "component_detached"
			},
			global_classes: {
				classApplied: "class_applied",
				classRemoved: "class_removed",
				classManagerFilterCleared: "class_manager_filter_cleared",
				classDeleted: "class_deleted",
				classPublishConflict: "class_publish_conflict",
				classRenamed: "class_renamed",
				classCreated: "class_created",
				classManagerSearched: "class_manager_searched",
				classManagerFiltersOpened: "class_manager_filters_opened",
				classManagerOpened: "class_manager_opened",
				classManagerReorder: "class_manager_reorder",
				classManagerFilterUsed: "class_manager_filter_used",
				classUsageLocate: "class_usage_locate",
				classUsageHovered: "class_usage_hovered",
				classStyled: "class_styled",
				classStateClicked: "class_state_clicked",
				classUsageClicked: "class_usage_clicked",
				classDuplicate: "class_duplicate",
				classSyncToV3PopupShown: "class_sync_to_v3_popup_shown",
				classSyncToV3: "class_sync_to_v3",
				classSyncToV3PopupClick: "class_sync_to_v3_popup_click"
			},
			editorOne: {
				topBarPublishDropdown: "top_bar_publish_dropdown",
				topBarPageList: "top_bar_page_list",
				siteSettingsSession: "site_settings_session",
				eLibraryNav: "e_library_nav",
				eLibraryInsert: "e_library_insert",
				eLibraryFavorite: "e_library_favorite",
				eLibraryGenerateAi: "e_library_generate_ai",
				finderSearchInput: "finder_search_input",
				finderResultSelect: "finder_result_select",
				canvasEmptyBoxAction: "canvas_empty_box_action",
				widgetPanelSearch: "widget_panel_search",
				wpDashElementorMenuClick: "wpdash_elementor_menu_click",
				wpDashEditorSubMenuHover: "wpdash_editor_sub_menu_hover",
				wpDashThemeBuilderClick: "wpdash_theme_builder_click",
				sidebarMenuItemClicked: "sidebar_menu_item_clicked",
				sidebarMenuGroupToggled: "sidebar_menu_group_toggled"
			},
			interactions: { created: "interactions_created" },
			promotions: {
				viewPromotion: "view_promotion",
				upgradePromotionClick: "upgrade_promotion_click"
			}
		}
	};

//#endregion
//#region core/common/modules/events-manager/assets/js/install-events-proxy-fetch.js
	init_defineProperty();
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
	var INSTALLED_FLAG = "__elementorEventsProxyFetchInstalled";
	function buildMixpanelAuthorization(token) {
		return "Basic ".concat(btoa("".concat(token, ":")));
	}
	function isProxyRequestUrl(url, proxyPrefixes) {
		return proxyPrefixes.some(function(prefix) {
			return url.startsWith(prefix);
		});
	}
	function isFetchRequest(input) {
		return "function" === typeof Request && input instanceof Request;
	}
	function mergeFetchHeaders(input, init) {
		var headers = new Headers();
		if (isFetchRequest(input)) input.headers.forEach(function(value, key) {
			headers.set(key, value);
		});
		if (init !== null && init !== void 0 && init.headers) new Headers(init.headers).forEach(function(value, key) {
			headers.set(key, value);
		});
		return headers;
	}
	function stripMixpanelAuthorization(input, init, token) {
		var _init$credentials;
		if (!token) return {
			input,
			init,
			stripped: false
		};
		var headers = mergeFetchHeaders(input, init);
		var mixpanelAuthorization = buildMixpanelAuthorization(token);
		if (headers.get("Authorization") !== mixpanelAuthorization) return {
			input,
			init,
			stripped: false
		};
		headers.delete("Authorization");
		var credentials = (_init$credentials = init.credentials) !== null && _init$credentials !== void 0 ? _init$credentials : "include";
		if (isFetchRequest(input)) return {
			input: new Request(input, {
				headers,
				credentials
			}),
			init: void 0,
			stripped: true
		};
		return {
			input,
			init: _objectSpread$1(_objectSpread$1({}, init), {}, {
				credentials,
				headers
			}),
			stripped: true
		};
	}
	function installEventsProxyFetch(proxyApiHost, proxyLibBasePath, token) {
		if (!proxyApiHost || !token || window[INSTALLED_FLAG] || "function" !== typeof window.fetch) return;
		var proxyPrefixes = [proxyApiHost, proxyLibBasePath].filter(Boolean);
		var nativeFetch = window.fetch.bind(window);
		window.fetch = function(input) {
			var init = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			var url = "string" === typeof input ? input : input === null || input === void 0 ? void 0 : input.url;
			if (!url || !isProxyRequestUrl(url, proxyPrefixes)) return nativeFetch(input, init);
			var _stripMixpanelAuthori = stripMixpanelAuthorization(input, init, token);
			var nextInput = _stripMixpanelAuthori.input;
			var nextInit = _stripMixpanelAuthori.init;
			if (void 0 === nextInit) return nativeFetch(nextInput);
			return nativeFetch(nextInput, nextInit);
		};
		window[INSTALLED_FLAG] = true;
	}

//#endregion
//#region node_modules/mixpanel-browser/dist/mixpanel.module.js
	var win;
	if (typeof window === "undefined") {
		var loc = { hostname: "" };
		win = {
			crypto: { randomUUID: function() {
				throw Error("unsupported");
			} },
			navigator: {
				userAgent: "",
				onLine: true
			},
			document: {
				createElement: function() {
					return {};
				},
				location: loc,
				referrer: ""
			},
			screen: {
				width: 0,
				height: 0
			},
			location: loc,
			addEventListener: function() {},
			removeEventListener: function() {}
		};
	} else win = window;
	function _array_like_to_array(arr, len) {
		if (len == null || len > arr.length) len = arr.length;
		for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
		return arr2;
	}
	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg);
			var value = info.value;
		} catch (error) {
			reject(error);
			return;
		}
		if (info.done) resolve(value);
		else Promise.resolve(value).then(_next, _throw);
	}
	function _async_to_generator(fn) {
		return function() {
			var self = this;
			var args = arguments;
			return new Promise(function(resolve, reject) {
				var gen = fn.apply(self, args);
				function _next(value) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
				}
				function _throw(err) {
					asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
				}
				_next(void 0);
			});
		};
	}
	function _construct(Parent, args, Class) {
		if (_is_native_reflect_construct()) _construct = Reflect.construct;
		else _construct = function construct(Parent, args, Class) {
			var a = [null];
			a.push.apply(a, args);
			var instance = new (Function.bind.apply(Parent, a))();
			if (Class) _set_prototype_of(instance, Class.prototype);
			return instance;
		};
		return _construct.apply(null, arguments);
	}
	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	function _create_class(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		return Constructor;
	}
	function _extends() {
		_extends = Object.assign || function(target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];
				for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
			}
			return target;
		};
		return _extends.apply(this, arguments);
	}
	function _get_prototype_of(o) {
		_get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		};
		return _get_prototype_of(o);
	}
	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
		subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
			value: subClass,
			writable: true,
			configurable: true
		} });
		if (superClass) _set_prototype_of(subClass, superClass);
	}
	function _instanceof(left, right) {
		if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) return !!right[Symbol.hasInstance](left);
		else return left instanceof right;
	}
	function _is_native_function(fn) {
		return Function.toString.call(fn).indexOf("[native code]") !== -1;
	}
	function _object_without_properties_loose(source, excluded) {
		if (source == null) return {};
		var target = {};
		var sourceKeys = Object.keys(source);
		var key;
		var i;
		for (i = 0; i < sourceKeys.length; i++) {
			key = sourceKeys[i];
			if (excluded.indexOf(key) >= 0) continue;
			target[key] = source[key];
		}
		return target;
	}
	function _set_prototype_of(o, p) {
		_set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
		return _set_prototype_of(o, p);
	}
	function _type_of(obj) {
		"@swc/helpers - typeof";
		return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
	}
	function _unsupported_iterable_to_array(o, minLen) {
		if (!o) return;
		if (typeof o === "string") return _array_like_to_array(o, minLen);
		var n = Object.prototype.toString.call(o).slice(8, -1);
		if (n === "Object" && o.constructor) n = o.constructor.name;
		if (n === "Map" || n === "Set") return Array.from(n);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
	}
	function _wrap_native_super(Class) {
		var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
		_wrap_native_super = function wrapNativeSuper(Class) {
			if (Class === null || !_is_native_function(Class)) return Class;
			if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof _cache !== "undefined") {
				if (_cache.has(Class)) return _cache.get(Class);
				_cache.set(Class, Wrapper);
			}
			function Wrapper() {
				return _construct(Class, arguments, _get_prototype_of(this).constructor);
			}
			Wrapper.prototype = Object.create(Class.prototype, { constructor: {
				value: Wrapper,
				enumerable: false,
				writable: true,
				configurable: true
			} });
			return _set_prototype_of(Wrapper, Class);
		};
		return _wrap_native_super(Class);
	}
	function _is_native_reflect_construct() {
		try {
			var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		} catch (_) {}
		return (_is_native_reflect_construct = function() {
			return !!result;
		})();
	}
	function _create_for_of_iterator_helper_loose(o, allowArrayLike) {
		var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
		if (it) return (it = it.call(o)).next.bind(it);
		if (Array.isArray(o) || (it = _unsupported_iterable_to_array(o)) || allowArrayLike) {
			if (it) o = it;
			var i = 0;
			return function() {
				if (i >= o.length) return { done: true };
				return {
					done: false,
					value: o[i++]
				};
			};
		}
		throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _ts_generator(thisArg, body) {
		var f;
		var y;
		var t;
		var g;
		var _ = {
			label: 0,
			sent: function() {
				if (t[0] & 1) throw t[1];
				return t[1];
			},
			trys: [],
			ops: []
		};
		return g = {
			next: verb(0),
			"throw": verb(1),
			"return": verb(2)
		}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
			return this;
		}), g;
		function verb(n) {
			return function(v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError("Generator is already executing.");
			while (_) try {
				if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
				if (y = 0, t) op = [op[0] & 2, t.value];
				switch (op[0]) {
					case 0:
					case 1:
						t = op;
						break;
					case 4:
						_.label++;
						return {
							value: op[1],
							done: false
						};
					case 5:
						_.label++;
						y = op[1];
						op = [0];
						continue;
					case 7:
						op = _.ops.pop();
						_.trys.pop();
						continue;
					default:
						if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
							_ = 0;
							continue;
						}
						if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
							_.label = op[1];
							break;
						}
						if (op[0] === 6 && _.label < t[1]) {
							_.label = t[1];
							t = op;
							break;
						}
						if (t && _.label < t[2]) {
							_.label = t[2];
							_.ops.push(op);
							break;
						}
						if (t[2]) _.ops.pop();
						_.trys.pop();
						continue;
				}
				op = body.call(thisArg, _);
			} catch (e) {
				op = [6, e];
				y = 0;
			} finally {
				f = t = 0;
			}
			if (op[0] & 5) throw op[1];
			return {
				value: op[0] ? op[1] : void 0,
				done: true
			};
		}
	}
	function _ts_values(o) {
		var s = typeof Symbol === "function" && Symbol.iterator;
		var m = s && o[s];
		var i = 0;
		if (m) return m.call(o);
		if (o && typeof o.length === "number") return { next: function() {
			if (o && i >= o.length) o = void 0;
			return {
				value: o && o[i++],
				done: !o
			};
		} };
		throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}
	var __defProp = Object.defineProperty;
	var __defNormalProp = function(obj, key, value) {
		return key in obj ? __defProp(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value;
	};
	var __publicField = function(obj, key, value) {
		return __defNormalProp(obj, (typeof key === "undefined" ? "undefined" : _type_of(key)) !== "symbol" ? key + "" : key, value);
	};
	var _a;
	var __defProp$1 = Object.defineProperty;
	var __defNormalProp$1 = function(obj, key, value) {
		return key in obj ? __defProp$1(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value;
	};
	var __publicField$1 = function(obj, key, value) {
		return __defNormalProp$1(obj, (typeof key === "undefined" ? "undefined" : _type_of(key)) !== "symbol" ? key + "" : key, value);
	};
	var NodeType$3 = /* @__PURE__ */ function(NodeType2) {
		NodeType2[NodeType2["Document"] = 0] = "Document";
		NodeType2[NodeType2["DocumentType"] = 1] = "DocumentType";
		NodeType2[NodeType2["Element"] = 2] = "Element";
		NodeType2[NodeType2["Text"] = 3] = "Text";
		NodeType2[NodeType2["CDATA"] = 4] = "CDATA";
		NodeType2[NodeType2["Comment"] = 5] = "Comment";
		return NodeType2;
	}(NodeType$3 || {});
	var testableAccessors$1 = {
		Node: [
			"childNodes",
			"parentNode",
			"parentElement",
			"textContent"
		],
		ShadowRoot: ["host", "styleSheets"],
		Element: [
			"shadowRoot",
			"querySelector",
			"querySelectorAll"
		],
		MutationObserver: []
	};
	var testableMethods$1 = {
		Node: ["contains", "getRootNode"],
		ShadowRoot: ["getSelection"],
		Element: [],
		MutationObserver: ["constructor"]
	};
	var untaintedBasePrototype$1 = {};
	var isAngularZonePresent$1 = function() {
		return !!globalThis.Zone;
	};
	function getUntaintedPrototype$1(key) {
		if (untaintedBasePrototype$1[key]) return untaintedBasePrototype$1[key];
		var defaultObj = globalThis[key];
		var defaultPrototype = defaultObj.prototype;
		var accessorNames = key in testableAccessors$1 ? testableAccessors$1[key] : void 0;
		var isUntaintedAccessors = Boolean(accessorNames && accessorNames.every(function(accessor) {
			var _a2;
			var _b;
			return Boolean((_b = (_a2 = Object.getOwnPropertyDescriptor(defaultPrototype, accessor)) == null ? void 0 : _a2.get) == null ? void 0 : _b.toString().includes("[native code]"));
		}));
		var methodNames = key in testableMethods$1 ? testableMethods$1[key] : void 0;
		var isUntaintedMethods = Boolean(methodNames && methodNames.every(function(method) {
			var _a2;
			return typeof defaultPrototype[method] === "function" && ((_a2 = defaultPrototype[method]) == null ? void 0 : _a2.toString().includes("[native code]"));
		}));
		if (isUntaintedAccessors && isUntaintedMethods && !isAngularZonePresent$1()) {
			untaintedBasePrototype$1[key] = defaultObj.prototype;
			return defaultObj.prototype;
		}
		try {
			var iframeEl = document.createElement("iframe");
			document.body.appendChild(iframeEl);
			var win = iframeEl.contentWindow;
			if (!win) return defaultObj.prototype;
			var untaintedObject = win[key].prototype;
			document.body.removeChild(iframeEl);
			if (!untaintedObject) return defaultPrototype;
			return untaintedBasePrototype$1[key] = untaintedObject;
		} catch (e) {
			return defaultPrototype;
		}
	}
	var untaintedAccessorCache$1 = {};
	function getUntaintedAccessor$1(key, instance, accessor) {
		var _a2;
		var cacheKey = key + "." + String(accessor);
		if (untaintedAccessorCache$1[cacheKey]) return untaintedAccessorCache$1[cacheKey].call(instance);
		var untaintedPrototype = getUntaintedPrototype$1(key);
		var untaintedAccessor = (_a2 = Object.getOwnPropertyDescriptor(untaintedPrototype, accessor)) == null ? void 0 : _a2.get;
		if (!untaintedAccessor) return instance[accessor];
		untaintedAccessorCache$1[cacheKey] = untaintedAccessor;
		return untaintedAccessor.call(instance);
	}
	var untaintedMethodCache$1 = {};
	function getUntaintedMethod$1(key, instance, method) {
		var cacheKey = key + "." + String(method);
		if (untaintedMethodCache$1[cacheKey]) return untaintedMethodCache$1[cacheKey].bind(instance);
		var untaintedMethod = getUntaintedPrototype$1(key)[method];
		if (typeof untaintedMethod !== "function") return instance[method];
		untaintedMethodCache$1[cacheKey] = untaintedMethod;
		return untaintedMethod.bind(instance);
	}
	function childNodes$1(n2) {
		return getUntaintedAccessor$1("Node", n2, "childNodes");
	}
	function parentNode$1(n2) {
		return getUntaintedAccessor$1("Node", n2, "parentNode");
	}
	function parentElement$1(n2) {
		return getUntaintedAccessor$1("Node", n2, "parentElement");
	}
	function textContent$1(n2) {
		return getUntaintedAccessor$1("Node", n2, "textContent");
	}
	function contains$1(n2, other) {
		return getUntaintedMethod$1("Node", n2, "contains")(other);
	}
	function getRootNode$1(n2) {
		return getUntaintedMethod$1("Node", n2, "getRootNode")();
	}
	function host$1(n2) {
		if (!n2 || !("host" in n2)) return null;
		return getUntaintedAccessor$1("ShadowRoot", n2, "host");
	}
	function styleSheets$1(n2) {
		return n2.styleSheets;
	}
	function shadowRoot$1(n2) {
		if (!n2 || !("shadowRoot" in n2)) return null;
		return getUntaintedAccessor$1("Element", n2, "shadowRoot");
	}
	function querySelector$1(n2, selectors) {
		return getUntaintedAccessor$1("Element", n2, "querySelector")(selectors);
	}
	function querySelectorAll$1(n2, selectors) {
		return getUntaintedAccessor$1("Element", n2, "querySelectorAll")(selectors);
	}
	function mutationObserverCtor$1() {
		return getUntaintedPrototype$1("MutationObserver").constructor;
	}
	function patch$1(source, name, replacement) {
		try {
			if (!(name in source)) return function() {};
			var original = source[name];
			var wrapped = replacement(original);
			if (typeof wrapped === "function") {
				wrapped.prototype = wrapped.prototype || {};
				Object.defineProperties(wrapped, { __rrweb_original__: {
					enumerable: false,
					value: original
				} });
			}
			source[name] = wrapped;
			return function() {
				source[name] = original;
			};
		} catch (e) {
			return function() {};
		}
	}
	var index$1 = {
		childNodes: childNodes$1,
		parentNode: parentNode$1,
		parentElement: parentElement$1,
		textContent: textContent$1,
		contains: contains$1,
		getRootNode: getRootNode$1,
		host: host$1,
		styleSheets: styleSheets$1,
		shadowRoot: shadowRoot$1,
		querySelector: querySelector$1,
		querySelectorAll: querySelectorAll$1,
		mutationObserver: mutationObserverCtor$1,
		patch: patch$1
	};
	function isElement(n2) {
		return n2.nodeType === n2.ELEMENT_NODE;
	}
	function isShadowRoot(n2) {
		var hostEl = n2 && "host" in n2 && "mode" in n2 && index$1.host(n2) || null;
		return Boolean(hostEl && "shadowRoot" in hostEl && index$1.shadowRoot(hostEl) === n2);
	}
	function isNativeShadowDom(shadowRoot2) {
		return Object.prototype.toString.call(shadowRoot2) === "[object ShadowRoot]";
	}
	function fixBrowserCompatibilityIssuesInCSS(cssText) {
		if (cssText.includes(" background-clip: text;") && !cssText.includes(" -webkit-background-clip: text;")) cssText = cssText.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;");
		return cssText;
	}
	function escapeImportStatement(rule2) {
		var cssText = rule2.cssText;
		if (cssText.split("\"").length < 3) return cssText;
		var statement = ["@import", "url(" + JSON.stringify(rule2.href) + ")"];
		if (rule2.layerName === "") statement.push("layer");
		else if (rule2.layerName) statement.push("layer(" + rule2.layerName + ")");
		if (rule2.supportsText) statement.push("supports(" + rule2.supportsText + ")");
		if (rule2.media.length) statement.push(rule2.media.mediaText);
		return statement.join(" ") + ";";
	}
	function stringifyStylesheet(s2) {
		try {
			var rules2 = s2.rules || s2.cssRules;
			if (!rules2) return null;
			var sheetHref = s2.href;
			if (!sheetHref && s2.ownerNode && s2.ownerNode.ownerDocument) sheetHref = s2.ownerNode.ownerDocument.location.href;
			return fixBrowserCompatibilityIssuesInCSS(Array.from(rules2, function(rule2) {
				return stringifyRule(rule2, sheetHref);
			}).join(""));
		} catch (error) {
			return null;
		}
	}
	function stringifyRule(rule2, sheetHref) {
		if (isCSSImportRule(rule2)) {
			var importStringified;
			try {
				importStringified = stringifyStylesheet(rule2.styleSheet) || escapeImportStatement(rule2);
			} catch (error) {
				importStringified = rule2.cssText;
			}
			if (rule2.styleSheet.href) return absolutifyURLs(importStringified, rule2.styleSheet.href);
			return importStringified;
		} else {
			var ruleStringified = rule2.cssText;
			if (isCSSStyleRule(rule2) && rule2.selectorText.includes(":")) ruleStringified = fixSafariColons(ruleStringified);
			if (sheetHref) return absolutifyURLs(ruleStringified, sheetHref);
			return ruleStringified;
		}
	}
	function fixSafariColons(cssStringified) {
		return cssStringified.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
	}
	function isCSSImportRule(rule2) {
		return "styleSheet" in rule2;
	}
	function isCSSStyleRule(rule2) {
		return "selectorText" in rule2;
	}
	var Mirror = /*#__PURE__*/ function() {
		function Mirror() {
			__publicField$1(this, "idNodeMap", /* @__PURE__ */ new Map());
			__publicField$1(this, "nodeMetaMap", /* @__PURE__ */ new WeakMap());
		}
		var _proto = Mirror.prototype;
		_proto.getId = function getId(n2) {
			var _a2;
			if (!n2) return -1;
			var id = (_a2 = this.getMeta(n2)) == null ? void 0 : _a2.id;
			return id != null ? id : -1;
		};
		_proto.getNode = function getNode(id) {
			return this.idNodeMap.get(id) || null;
		};
		_proto.getIds = function getIds() {
			return Array.from(this.idNodeMap.keys());
		};
		_proto.getMeta = function getMeta(n2) {
			return this.nodeMetaMap.get(n2) || null;
		};
		_proto.removeNodeFromMap = function removeNodeFromMap(n2) {
			var _this = this;
			var id = this.getId(n2);
			this.idNodeMap.delete(id);
			if (n2.childNodes) n2.childNodes.forEach(function(childNode) {
				return _this.removeNodeFromMap(childNode);
			});
		};
		_proto.has = function has(id) {
			return this.idNodeMap.has(id);
		};
		_proto.hasNode = function hasNode(node2) {
			return this.nodeMetaMap.has(node2);
		};
		_proto.add = function add(n2, meta) {
			var id = meta.id;
			this.idNodeMap.set(id, n2);
			this.nodeMetaMap.set(n2, meta);
		};
		_proto.replace = function replace(id, n2) {
			var oldNode = this.getNode(id);
			if (oldNode) {
				var meta = this.nodeMetaMap.get(oldNode);
				if (meta) this.nodeMetaMap.set(n2, meta);
			}
			this.idNodeMap.set(id, n2);
		};
		_proto.reset = function reset() {
			this.idNodeMap = /* @__PURE__ */ new Map();
			this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
		};
		return Mirror;
	}();
	function createMirror$2() {
		return new Mirror();
	}
	function maskInputValue(param) {
		var element = param.element;
		var maskInputOptions = param.maskInputOptions;
		var tagName = param.tagName;
		var type = param.type;
		var value = param.value;
		var maskInputFn = param.maskInputFn;
		var text = value || "";
		var actualType = type && toLowerCase(type);
		if (maskInputOptions[tagName.toLowerCase()] || actualType && maskInputOptions[actualType]) if (maskInputFn) text = maskInputFn(text, element);
		else text = "*".repeat(text.length);
		return text;
	}
	function toLowerCase(str) {
		return str.toLowerCase();
	}
	var ORIGINAL_ATTRIBUTE_NAME = "__rrweb_original__";
	function is2DCanvasBlank(canvas) {
		var ctx = canvas.getContext("2d");
		if (!ctx) return true;
		var chunkSize = 50;
		for (var x2 = 0; x2 < canvas.width; x2 += chunkSize) for (var y = 0; y < canvas.height; y += chunkSize) {
			var getImageData = ctx.getImageData;
			var originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData ? getImageData[ORIGINAL_ATTRIBUTE_NAME] : getImageData;
			if (new Uint32Array(originalGetImageData.call(ctx, x2, y, Math.min(chunkSize, canvas.width - x2), Math.min(chunkSize, canvas.height - y)).data.buffer).some(function(pixel) {
				return pixel !== 0;
			})) return false;
		}
		return true;
	}
	function getInputType(element) {
		var type = element.type;
		return element.hasAttribute("data-rr-is-password") ? "password" : type ? toLowerCase(type) : null;
	}
	function extractFileExtension(path, baseURL) {
		var url;
		try {
			url = new URL(path, baseURL != null ? baseURL : window.location.href);
		} catch (err) {
			return null;
		}
		var match = url.pathname.match(/\.([0-9a-z]+)(?:$)/i);
		var _ref;
		return (_ref = match == null ? void 0 : match[1]) != null ? _ref : null;
	}
	function extractOrigin(url) {
		var origin = "";
		if (url.indexOf("//") > -1) origin = url.split("/").slice(0, 3).join("/");
		else origin = url.split("/")[0];
		origin = origin.split("?")[0];
		return origin;
	}
	var URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
	var URL_PROTOCOL_MATCH = /^(?:[a-z+]+:)?\/\//i;
	var URL_WWW_MATCH = /^www\..*/i;
	var DATA_URI = /^(data:)([^,]*),(.*)/i;
	function absolutifyURLs(cssText, href) {
		return (cssText || "").replace(URL_IN_CSS_REF, function(origin, quote1, path1, quote2, path2, path3) {
			var filePath = path1 || path2 || path3;
			var maybeQuote = quote1 || quote2 || "";
			if (!filePath) return origin;
			if (URL_PROTOCOL_MATCH.test(filePath) || URL_WWW_MATCH.test(filePath)) return "url(" + maybeQuote + filePath + maybeQuote + ")";
			if (DATA_URI.test(filePath)) return "url(" + maybeQuote + filePath + maybeQuote + ")";
			if (filePath[0] === "/") return "url(" + maybeQuote + (extractOrigin(href) + filePath) + maybeQuote + ")";
			var stack = href.split("/");
			var parts = filePath.split("/");
			stack.pop();
			for (var _iterator = _create_for_of_iterator_helper_loose(parts), _step; !(_step = _iterator()).done;) {
				var part = _step.value;
				if (part === ".") continue;
				else if (part === "..") stack.pop();
				else stack.push(part);
			}
			return "url(" + maybeQuote + stack.join("/") + maybeQuote + ")";
		});
	}
	function normalizeCssString(cssText, _testNoPxNorm) {
		if (_testNoPxNorm === void 0) _testNoPxNorm = false;
		if (_testNoPxNorm) return cssText.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "");
		else return cssText.replace(/(\/\*[^*]*\*\/)|[\s;]/g, "").replace(/0px/g, "0");
	}
	function splitCssText(cssText, style, _testNoPxNorm) {
		if (_testNoPxNorm === void 0) _testNoPxNorm = false;
		var childNodes2 = Array.from(style.childNodes);
		var splits = [];
		var iterCount = 0;
		if (childNodes2.length > 1 && cssText && typeof cssText === "string") {
			var cssTextNorm = normalizeCssString(cssText, _testNoPxNorm);
			var normFactor = cssTextNorm.length / cssText.length;
			for (var i2 = 1; i2 < childNodes2.length; i2++) if (childNodes2[i2].textContent && typeof childNodes2[i2].textContent === "string") {
				var textContentNorm = normalizeCssString(childNodes2[i2].textContent, _testNoPxNorm);
				var jLimit = 100;
				var j = 3;
				for (; j < textContentNorm.length; j++) {
					if (textContentNorm[j].match(/[a-zA-Z0-9]/) || textContentNorm.indexOf(textContentNorm.substring(0, j), 1) !== -1) continue;
					break;
				}
				for (; j < textContentNorm.length; j++) {
					var startSubstring = textContentNorm.substring(0, j);
					var cssNormSplits = cssTextNorm.split(startSubstring);
					var splitNorm = -1;
					if (cssNormSplits.length === 2) splitNorm = cssNormSplits[0].length;
					else if (cssNormSplits.length > 2 && cssNormSplits[0] === "" && childNodes2[i2 - 1].textContent !== "") splitNorm = cssTextNorm.indexOf(startSubstring, 1);
					else if (cssNormSplits.length === 1) {
						startSubstring = startSubstring.substring(0, startSubstring.length - 1);
						cssNormSplits = cssTextNorm.split(startSubstring);
						if (cssNormSplits.length <= 1) {
							splits.push(cssText);
							return splits;
						}
						j = jLimit + 1;
					} else if (j === textContentNorm.length - 1) splitNorm = cssTextNorm.indexOf(startSubstring);
					if (cssNormSplits.length >= 2 && j > jLimit) {
						var prevTextContent = childNodes2[i2 - 1].textContent;
						if (prevTextContent && typeof prevTextContent === "string") {
							var prevMinLength = normalizeCssString(prevTextContent).length;
							splitNorm = cssTextNorm.indexOf(startSubstring, prevMinLength);
						}
						if (splitNorm === -1) splitNorm = cssNormSplits[0].length;
					}
					if (splitNorm !== -1) {
						var k = Math.floor(splitNorm / normFactor);
						for (; k > 0 && k < cssText.length;) {
							iterCount += 1;
							if (iterCount > 50 * childNodes2.length) {
								splits.push(cssText);
								return splits;
							}
							var normPart = normalizeCssString(cssText.substring(0, k), _testNoPxNorm);
							if (normPart.length === splitNorm) {
								splits.push(cssText.substring(0, k));
								cssText = cssText.substring(k);
								cssTextNorm = cssTextNorm.substring(splitNorm);
								break;
							} else if (normPart.length < splitNorm) k += Math.max(1, Math.floor((splitNorm - normPart.length) / normFactor));
							else k -= Math.max(1, Math.floor((normPart.length - splitNorm) * normFactor));
						}
						break;
					}
				}
			}
		}
		splits.push(cssText);
		return splits;
	}
	function markCssSplits(cssText, style) {
		return splitCssText(cssText, style).join("/* rr_split */");
	}
	var _id = 1;
	var tagNameRegex = /* @__PURE__ */ new RegExp("[^a-z0-9-_:]");
	var IGNORED_NODE = -2;
	function genId() {
		return _id++;
	}
	function getValidTagName$1(element) {
		if (_instanceof(element, HTMLFormElement)) return "form";
		var processedTagName = toLowerCase(element.tagName);
		if (tagNameRegex.test(processedTagName)) return "div";
		return processedTagName;
	}
	var canvasService;
	var canvasCtx;
	var SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
	var SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
	function getAbsoluteSrcsetString(doc, attributeValue) {
		if (attributeValue.trim() === "") return attributeValue;
		var pos = 0;
		function collectCharacters(regEx) {
			var chars2;
			var match = regEx.exec(attributeValue.substring(pos));
			if (match) {
				chars2 = match[0];
				pos += chars2.length;
				return chars2;
			}
			return "";
		}
		var output = [];
		while (true) {
			collectCharacters(SRCSET_COMMAS_OR_SPACES);
			if (pos >= attributeValue.length) break;
			var url = collectCharacters(SRCSET_NOT_SPACES);
			if (url.slice(-1) === ",") {
				url = absoluteToDoc(doc, url.substring(0, url.length - 1));
				output.push(url);
			} else {
				var descriptorsStr = "";
				url = absoluteToDoc(doc, url);
				var inParens = false;
				while (true) {
					var c2 = attributeValue.charAt(pos);
					if (c2 === "") {
						output.push((url + descriptorsStr).trim());
						break;
					} else if (!inParens) {
						if (c2 === ",") {
							pos += 1;
							output.push((url + descriptorsStr).trim());
							break;
						} else if (c2 === "(") inParens = true;
					} else if (c2 === ")") inParens = false;
					descriptorsStr += c2;
					pos += 1;
				}
			}
		}
		return output.join(", ");
	}
	var cachedDocument = /* @__PURE__ */ new WeakMap();
	function absoluteToDoc(doc, attributeValue) {
		if (!attributeValue || attributeValue.trim() === "") return attributeValue;
		return getHref(doc, attributeValue);
	}
	function isSVGElement(el) {
		return Boolean(el.tagName === "svg" || el.ownerSVGElement);
	}
	function getHref(doc, customHref) {
		var a2 = cachedDocument.get(doc);
		if (!a2) {
			a2 = doc.createElement("a");
			cachedDocument.set(doc, a2);
		}
		if (!customHref) customHref = "";
		else if (customHref.startsWith("blob:") || customHref.startsWith("data:")) return customHref;
		a2.setAttribute("href", customHref);
		return a2.href;
	}
	function transformAttribute(doc, tagName, name, value) {
		if (!value) return value;
		if (name === "src" || name === "href" && !(tagName === "use" && value[0] === "#")) return absoluteToDoc(doc, value);
		else if (name === "xlink:href" && value[0] !== "#") return absoluteToDoc(doc, value);
		else if (name === "background" && (tagName === "table" || tagName === "td" || tagName === "th")) return absoluteToDoc(doc, value);
		else if (name === "srcset") return getAbsoluteSrcsetString(doc, value);
		else if (name === "style") return absolutifyURLs(value, getHref(doc));
		else if (tagName === "object" && name === "data") return absoluteToDoc(doc, value);
		return value;
	}
	function ignoreAttribute(tagName, name, _value) {
		return (tagName === "video" || tagName === "audio") && name === "autoplay";
	}
	function _isBlockedElement(element, blockClass, blockSelector) {
		try {
			if (typeof blockClass === "string") {
				if (element.classList.contains(blockClass)) return true;
			} else for (var eIndex = element.classList.length; eIndex--;) {
				var className = element.classList[eIndex];
				if (blockClass.test(className)) return true;
			}
			if (blockSelector) return element.matches(blockSelector);
		} catch (e2) {}
		return false;
	}
	function classMatchesRegex(node2, regex, checkAncestors) {
		if (!node2) return false;
		if (node2.nodeType !== node2.ELEMENT_NODE) {
			if (!checkAncestors) return false;
			return classMatchesRegex(index$1.parentNode(node2), regex, checkAncestors);
		}
		for (var eIndex = node2.classList.length; eIndex--;) {
			var className = node2.classList[eIndex];
			if (regex.test(className)) return true;
		}
		if (!checkAncestors) return false;
		return classMatchesRegex(index$1.parentNode(node2), regex, checkAncestors);
	}
	function needMaskingText(node2, maskTextClass, maskTextSelector, checkAncestors) {
		var el;
		if (isElement(node2)) {
			el = node2;
			if (!index$1.childNodes(el).length) return false;
		} else if (index$1.parentElement(node2) === null) return false;
		else el = index$1.parentElement(node2);
		try {
			if (typeof maskTextClass === "string") {
				if (checkAncestors) {
					if (el.closest("." + maskTextClass)) return true;
				} else if (el.classList.contains(maskTextClass)) return true;
			} else if (classMatchesRegex(el, maskTextClass, checkAncestors)) return true;
			if (maskTextSelector) {
				if (checkAncestors) {
					if (el.closest(maskTextSelector)) return true;
				} else if (el.matches(maskTextSelector)) return true;
			}
		} catch (e2) {}
		return false;
	}
	function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
		var win = iframeEl.contentWindow;
		if (!win) return;
		var fired = false;
		var readyState;
		try {
			readyState = win.document.readyState;
		} catch (error) {
			return;
		}
		if (readyState !== "complete") {
			var timer = setTimeout(function() {
				if (!fired) {
					listener();
					fired = true;
				}
			}, iframeLoadTimeout);
			iframeEl.addEventListener("load", function() {
				clearTimeout(timer);
				fired = true;
				listener();
			});
			return;
		}
		var blankUrl = "about:blank";
		if (win.location.href !== blankUrl || iframeEl.src === blankUrl || iframeEl.src === "") {
			setTimeout(listener, 0);
			return iframeEl.addEventListener("load", listener);
		}
		iframeEl.addEventListener("load", listener);
	}
	function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
		var fired = false;
		var styleSheetLoaded;
		try {
			styleSheetLoaded = link.sheet;
		} catch (error) {
			return;
		}
		if (styleSheetLoaded) return;
		var timer = setTimeout(function() {
			if (!fired) {
				listener();
				fired = true;
			}
		}, styleSheetLoadTimeout);
		link.addEventListener("load", function() {
			clearTimeout(timer);
			fired = true;
			listener();
		});
	}
	function serializeNode(n2, options) {
		var doc = options.doc;
		var mirror2 = options.mirror;
		var blockClass = options.blockClass;
		var blockSelector = options.blockSelector;
		var needsMask = options.needsMask;
		var inlineStylesheet = options.inlineStylesheet;
		var _options_maskInputOptions = options.maskInputOptions;
		var maskInputOptions = _options_maskInputOptions === void 0 ? {} : _options_maskInputOptions;
		var maskTextFn = options.maskTextFn;
		var maskInputFn = options.maskInputFn;
		var _options_dataURLOptions = options.dataURLOptions;
		var dataURLOptions = _options_dataURLOptions === void 0 ? {} : _options_dataURLOptions;
		var inlineImages = options.inlineImages;
		var recordCanvas = options.recordCanvas;
		var keepIframeSrcFn = options.keepIframeSrcFn;
		var _options_newlyAddedElement = options.newlyAddedElement;
		var newlyAddedElement = _options_newlyAddedElement === void 0 ? false : _options_newlyAddedElement;
		var _options_cssCaptured = options.cssCaptured;
		var cssCaptured = _options_cssCaptured === void 0 ? false : _options_cssCaptured;
		var rootId = getRootId(doc, mirror2);
		switch (n2.nodeType) {
			case n2.DOCUMENT_NODE: if (n2.compatMode !== "CSS1Compat") return {
				type: NodeType$3.Document,
				childNodes: [],
				compatMode: n2.compatMode
			};
			else return {
				type: NodeType$3.Document,
				childNodes: []
			};
			case n2.DOCUMENT_TYPE_NODE: return {
				type: NodeType$3.DocumentType,
				name: n2.name,
				publicId: n2.publicId,
				systemId: n2.systemId,
				rootId
			};
			case n2.ELEMENT_NODE: return serializeElementNode(n2, {
				doc,
				blockClass,
				blockSelector,
				inlineStylesheet,
				maskInputOptions,
				maskInputFn,
				dataURLOptions,
				inlineImages,
				recordCanvas,
				keepIframeSrcFn,
				newlyAddedElement,
				rootId
			});
			case n2.TEXT_NODE: return serializeTextNode(n2, {
				doc,
				needsMask,
				maskTextFn,
				rootId,
				cssCaptured
			});
			case n2.CDATA_SECTION_NODE: return {
				type: NodeType$3.CDATA,
				textContent: "",
				rootId
			};
			case n2.COMMENT_NODE: return {
				type: NodeType$3.Comment,
				textContent: index$1.textContent(n2) || "",
				rootId
			};
			default: return false;
		}
	}
	function getRootId(doc, mirror2) {
		if (!mirror2.hasNode(doc)) return void 0;
		var docId = mirror2.getId(doc);
		return docId === 1 ? void 0 : docId;
	}
	function serializeTextNode(n2, options) {
		var needsMask = options.needsMask;
		var maskTextFn = options.maskTextFn;
		var rootId = options.rootId;
		var cssCaptured = options.cssCaptured;
		var parent = index$1.parentNode(n2);
		var parentTagName = parent && parent.tagName;
		var textContent2 = "";
		var isStyle = parentTagName === "STYLE" ? true : void 0;
		var isScript = parentTagName === "SCRIPT" ? true : void 0;
		if (isScript) textContent2 = "SCRIPT_PLACEHOLDER";
		else if (!cssCaptured) {
			textContent2 = index$1.textContent(n2);
			if (isStyle && textContent2) textContent2 = absolutifyURLs(textContent2, getHref(options.doc));
		}
		if (!isStyle && !isScript && textContent2 && needsMask) textContent2 = maskTextFn ? maskTextFn(textContent2, index$1.parentElement(n2)) : textContent2.replace(/[\S]/g, "*");
		return {
			type: NodeType$3.Text,
			textContent: textContent2 || "",
			rootId
		};
	}
	function serializeElementNode(n2, options) {
		var doc = options.doc;
		var blockClass = options.blockClass;
		var blockSelector = options.blockSelector;
		var inlineStylesheet = options.inlineStylesheet;
		var _options_maskInputOptions = options.maskInputOptions;
		var maskInputOptions = _options_maskInputOptions === void 0 ? {} : _options_maskInputOptions;
		var maskInputFn = options.maskInputFn;
		var _options_dataURLOptions = options.dataURLOptions;
		var dataURLOptions = _options_dataURLOptions === void 0 ? {} : _options_dataURLOptions;
		var inlineImages = options.inlineImages;
		var recordCanvas = options.recordCanvas;
		var keepIframeSrcFn = options.keepIframeSrcFn;
		var _options_newlyAddedElement = options.newlyAddedElement;
		var newlyAddedElement = _options_newlyAddedElement === void 0 ? false : _options_newlyAddedElement;
		var rootId = options.rootId;
		var needBlock = _isBlockedElement(n2, blockClass, blockSelector);
		var tagName = getValidTagName$1(n2);
		var attributes = {};
		var len = n2.attributes.length;
		for (var i2 = 0; i2 < len; i2++) {
			var attr = n2.attributes[i2];
			if (!ignoreAttribute(tagName, attr.name, attr.value)) attributes[attr.name] = transformAttribute(doc, tagName, toLowerCase(attr.name), attr.value);
		}
		if (tagName === "link" && inlineStylesheet) {
			var stylesheet = Array.from(doc.styleSheets).find(function(s2) {
				return s2.href === n2.href;
			});
			var cssText = null;
			if (stylesheet) cssText = stringifyStylesheet(stylesheet);
			if (cssText) {
				delete attributes.rel;
				delete attributes.href;
				attributes._cssText = cssText;
			}
		}
		if (tagName === "style" && n2.sheet) {
			var cssText1 = stringifyStylesheet(n2.sheet);
			if (cssText1) {
				if (n2.childNodes.length > 1) cssText1 = markCssSplits(cssText1, n2);
				attributes._cssText = cssText1;
			}
		}
		if (tagName === "input" || tagName === "textarea" || tagName === "select") {
			var value = n2.value;
			var checked = n2.checked;
			if (attributes.type !== "radio" && attributes.type !== "checkbox" && attributes.type !== "submit" && attributes.type !== "button" && value) attributes.value = maskInputValue({
				element: n2,
				type: getInputType(n2),
				tagName,
				value,
				maskInputOptions,
				maskInputFn
			});
			else if (checked) attributes.checked = checked;
		}
		if (tagName === "option") if (n2.selected && !maskInputOptions["select"]) attributes.selected = true;
		else delete attributes.selected;
		if (tagName === "dialog" && n2.open) attributes.rr_open_mode = n2.matches("dialog:modal") ? "modal" : "non-modal";
		if (tagName === "canvas" && recordCanvas) {
			if (n2.__context === "2d") {
				if (!is2DCanvasBlank(n2)) attributes.rr_dataURL = n2.toDataURL(dataURLOptions.type, dataURLOptions.quality);
			} else if (!("__context" in n2)) {
				var canvasDataURL = n2.toDataURL(dataURLOptions.type, dataURLOptions.quality);
				var blankCanvas = doc.createElement("canvas");
				blankCanvas.width = n2.width;
				blankCanvas.height = n2.height;
				if (canvasDataURL !== blankCanvas.toDataURL(dataURLOptions.type, dataURLOptions.quality)) attributes.rr_dataURL = canvasDataURL;
			}
		}
		if (tagName === "img" && inlineImages) {
			if (!canvasService) {
				canvasService = doc.createElement("canvas");
				canvasCtx = canvasService.getContext("2d");
			}
			var image = n2;
			var imageSrc = image.currentSrc || image.getAttribute("src") || "<unknown-src>";
			var priorCrossOrigin = image.crossOrigin;
			var recordInlineImage = function() {
				image.removeEventListener("load", recordInlineImage);
				try {
					canvasService.width = image.naturalWidth;
					canvasService.height = image.naturalHeight;
					canvasCtx.drawImage(image, 0, 0);
					attributes.rr_dataURL = canvasService.toDataURL(dataURLOptions.type, dataURLOptions.quality);
				} catch (err) {
					if (image.crossOrigin !== "anonymous") {
						image.crossOrigin = "anonymous";
						if (image.complete && image.naturalWidth !== 0) recordInlineImage();
						else image.addEventListener("load", recordInlineImage);
						return;
					} else console.warn("Cannot inline img src=" + imageSrc + "! Error: " + err);
				}
				if (image.crossOrigin === "anonymous") priorCrossOrigin ? attributes.crossOrigin = priorCrossOrigin : image.removeAttribute("crossorigin");
			};
			if (image.complete && image.naturalWidth !== 0) recordInlineImage();
			else image.addEventListener("load", recordInlineImage);
		}
		if (tagName === "audio" || tagName === "video") {
			var mediaAttributes = attributes;
			mediaAttributes.rr_mediaState = n2.paused ? "paused" : "played";
			mediaAttributes.rr_mediaCurrentTime = n2.currentTime;
			mediaAttributes.rr_mediaPlaybackRate = n2.playbackRate;
			mediaAttributes.rr_mediaMuted = n2.muted;
			mediaAttributes.rr_mediaLoop = n2.loop;
			mediaAttributes.rr_mediaVolume = n2.volume;
		}
		if (!newlyAddedElement) {
			if (n2.scrollLeft) attributes.rr_scrollLeft = n2.scrollLeft;
			if (n2.scrollTop) attributes.rr_scrollTop = n2.scrollTop;
		}
		if (needBlock) {
			var _n2_getBoundingClientRect = n2.getBoundingClientRect();
			var width = _n2_getBoundingClientRect.width;
			var height = _n2_getBoundingClientRect.height;
			attributes = {
				class: attributes.class,
				rr_width: "" + width + "px",
				rr_height: "" + height + "px"
			};
		}
		if (tagName === "iframe" && !keepIframeSrcFn(attributes.src)) {
			if (!n2.contentDocument) attributes.rr_src = attributes.src;
			delete attributes.src;
		}
		var isCustomElement;
		try {
			if (customElements.get(tagName)) isCustomElement = true;
		} catch (e2) {}
		return {
			type: NodeType$3.Element,
			tagName,
			attributes,
			childNodes: [],
			isSVG: isSVGElement(n2) || void 0,
			needBlock,
			rootId,
			isCustom: isCustomElement
		};
	}
	function lowerIfExists(maybeAttr) {
		if (maybeAttr === void 0 || maybeAttr === null) return "";
		else return maybeAttr.toLowerCase();
	}
	function slimDOMExcluded(sn, slimDOMOptions) {
		if (slimDOMOptions.comment && sn.type === NodeType$3.Comment) return true;
		else if (sn.type === NodeType$3.Element) {
			if (slimDOMOptions.script && (sn.tagName === "script" || sn.tagName === "link" && (sn.attributes.rel === "preload" && sn.attributes.as === "script" || sn.attributes.rel === "modulepreload") || sn.tagName === "link" && sn.attributes.rel === "prefetch" && typeof sn.attributes.href === "string" && extractFileExtension(sn.attributes.href) === "js")) return true;
			else if (slimDOMOptions.headFavicon && (sn.tagName === "link" && sn.attributes.rel === "shortcut icon" || sn.tagName === "meta" && (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) || lowerIfExists(sn.attributes.name) === "application-name" || lowerIfExists(sn.attributes.rel) === "icon" || lowerIfExists(sn.attributes.rel) === "apple-touch-icon" || lowerIfExists(sn.attributes.rel) === "shortcut icon"))) return true;
			else if (sn.tagName === "meta") {
				if (slimDOMOptions.headMetaDescKeywords && lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) return true;
				else if (slimDOMOptions.headMetaSocial && (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) || lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) || lowerIfExists(sn.attributes.name) === "pinterest")) return true;
				else if (slimDOMOptions.headMetaRobots && (lowerIfExists(sn.attributes.name) === "robots" || lowerIfExists(sn.attributes.name) === "googlebot" || lowerIfExists(sn.attributes.name) === "bingbot")) return true;
				else if (slimDOMOptions.headMetaHttpEquiv && sn.attributes["http-equiv"] !== void 0) return true;
				else if (slimDOMOptions.headMetaAuthorship && (lowerIfExists(sn.attributes.name) === "author" || lowerIfExists(sn.attributes.name) === "generator" || lowerIfExists(sn.attributes.name) === "framework" || lowerIfExists(sn.attributes.name) === "publisher" || lowerIfExists(sn.attributes.name) === "progid" || lowerIfExists(sn.attributes.property).match(/^article:/) || lowerIfExists(sn.attributes.property).match(/^product:/))) return true;
				else if (slimDOMOptions.headMetaVerification && (lowerIfExists(sn.attributes.name) === "google-site-verification" || lowerIfExists(sn.attributes.name) === "yandex-verification" || lowerIfExists(sn.attributes.name) === "csrf-token" || lowerIfExists(sn.attributes.name) === "p:domain_verify" || lowerIfExists(sn.attributes.name) === "verify-v1" || lowerIfExists(sn.attributes.name) === "verification" || lowerIfExists(sn.attributes.name) === "shopify-checkout-api-token")) return true;
			}
		}
		return false;
	}
	function serializeNodeWithId(n2, options) {
		var doc = options.doc;
		var mirror2 = options.mirror;
		var blockClass = options.blockClass;
		var blockSelector = options.blockSelector;
		var maskTextClass = options.maskTextClass;
		var maskTextSelector = options.maskTextSelector;
		var _options_skipChild = options.skipChild;
		var skipChild = _options_skipChild === void 0 ? false : _options_skipChild;
		var _options_inlineStylesheet = options.inlineStylesheet;
		var inlineStylesheet = _options_inlineStylesheet === void 0 ? true : _options_inlineStylesheet;
		var _options_maskInputOptions = options.maskInputOptions;
		var maskInputOptions = _options_maskInputOptions === void 0 ? {} : _options_maskInputOptions;
		var maskTextFn = options.maskTextFn;
		var maskInputFn = options.maskInputFn;
		var slimDOMOptions = options.slimDOMOptions;
		var _options_dataURLOptions = options.dataURLOptions;
		var dataURLOptions = _options_dataURLOptions === void 0 ? {} : _options_dataURLOptions;
		var _options_inlineImages = options.inlineImages;
		var inlineImages = _options_inlineImages === void 0 ? false : _options_inlineImages;
		var _options_recordCanvas = options.recordCanvas;
		var recordCanvas = _options_recordCanvas === void 0 ? false : _options_recordCanvas;
		var onSerialize = options.onSerialize;
		var onIframeLoad = options.onIframeLoad;
		var _options_iframeLoadTimeout = options.iframeLoadTimeout;
		var iframeLoadTimeout = _options_iframeLoadTimeout === void 0 ? 5e3 : _options_iframeLoadTimeout;
		var onStylesheetLoad = options.onStylesheetLoad;
		var _options_stylesheetLoadTimeout = options.stylesheetLoadTimeout;
		var stylesheetLoadTimeout = _options_stylesheetLoadTimeout === void 0 ? 5e3 : _options_stylesheetLoadTimeout;
		var _options_keepIframeSrcFn = options.keepIframeSrcFn;
		var keepIframeSrcFn = _options_keepIframeSrcFn === void 0 ? function() {
			return false;
		} : _options_keepIframeSrcFn;
		var _options_newlyAddedElement = options.newlyAddedElement;
		var newlyAddedElement = _options_newlyAddedElement === void 0 ? false : _options_newlyAddedElement;
		var _options_cssCaptured = options.cssCaptured;
		var cssCaptured = _options_cssCaptured === void 0 ? false : _options_cssCaptured;
		var needsMask = options.needsMask;
		var _options_preserveWhiteSpace = options.preserveWhiteSpace;
		var preserveWhiteSpace = _options_preserveWhiteSpace === void 0 ? true : _options_preserveWhiteSpace;
		if (!needsMask) needsMask = needMaskingText(n2, maskTextClass, maskTextSelector, needsMask === void 0);
		var _serializedNode = serializeNode(n2, {
			doc,
			mirror: mirror2,
			blockClass,
			blockSelector,
			needsMask,
			inlineStylesheet,
			maskInputOptions,
			maskTextFn,
			maskInputFn,
			dataURLOptions,
			inlineImages,
			recordCanvas,
			keepIframeSrcFn,
			newlyAddedElement,
			cssCaptured
		});
		if (!_serializedNode) {
			console.warn(n2, "not serialized");
			return null;
		}
		var id;
		if (mirror2.hasNode(n2)) id = mirror2.getId(n2);
		else if (slimDOMExcluded(_serializedNode, slimDOMOptions) || !preserveWhiteSpace && _serializedNode.type === NodeType$3.Text && !_serializedNode.textContent.replace(/^\s+|\s+$/gm, "").length) id = IGNORED_NODE;
		else id = genId();
		var serializedNode = Object.assign(_serializedNode, { id });
		mirror2.add(n2, serializedNode);
		if (id === IGNORED_NODE) return null;
		if (onSerialize) onSerialize(n2);
		var recordChild = !skipChild;
		if (serializedNode.type === NodeType$3.Element) {
			recordChild = recordChild && !serializedNode.needBlock;
			delete serializedNode.needBlock;
			var shadowRootEl = index$1.shadowRoot(n2);
			if (shadowRootEl && isNativeShadowDom(shadowRootEl)) serializedNode.isShadowHost = true;
		}
		if ((serializedNode.type === NodeType$3.Document || serializedNode.type === NodeType$3.Element) && recordChild) {
			if (slimDOMOptions.headWhitespace && serializedNode.type === NodeType$3.Element && serializedNode.tagName === "head") preserveWhiteSpace = false;
			var bypassOptions = {
				doc,
				mirror: mirror2,
				blockClass,
				blockSelector,
				needsMask,
				maskTextClass,
				maskTextSelector,
				skipChild,
				inlineStylesheet,
				maskInputOptions,
				maskTextFn,
				maskInputFn,
				slimDOMOptions,
				dataURLOptions,
				inlineImages,
				recordCanvas,
				preserveWhiteSpace,
				onSerialize,
				onIframeLoad,
				iframeLoadTimeout,
				onStylesheetLoad,
				stylesheetLoadTimeout,
				keepIframeSrcFn,
				cssCaptured: false
			};
			if (serializedNode.type === NodeType$3.Element && serializedNode.tagName === "textarea" && serializedNode.attributes.value !== void 0);
			else {
				if (serializedNode.type === NodeType$3.Element && serializedNode.attributes._cssText !== void 0 && typeof serializedNode.attributes._cssText === "string") bypassOptions.cssCaptured = true;
				for (var _iterator = _create_for_of_iterator_helper_loose(Array.from(index$1.childNodes(n2))), _step; !(_step = _iterator()).done;) {
					var childN = _step.value;
					var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
					if (serializedChildNode) serializedNode.childNodes.push(serializedChildNode);
				}
			}
			var shadowRootEl1 = null;
			if (isElement(n2) && (shadowRootEl1 = index$1.shadowRoot(n2))) for (var _iterator1 = _create_for_of_iterator_helper_loose(Array.from(index$1.childNodes(shadowRootEl1))), _step1; !(_step1 = _iterator1()).done;) {
				var childN1 = _step1.value;
				var serializedChildNode1 = serializeNodeWithId(childN1, bypassOptions);
				if (serializedChildNode1) {
					isNativeShadowDom(shadowRootEl1) && (serializedChildNode1.isShadow = true);
					serializedNode.childNodes.push(serializedChildNode1);
				}
			}
		}
		var parent = index$1.parentNode(n2);
		if (parent && isShadowRoot(parent) && isNativeShadowDom(parent)) serializedNode.isShadow = true;
		if (serializedNode.type === NodeType$3.Element && serializedNode.tagName === "iframe") onceIframeLoaded(n2, function() {
			var iframeDoc = n2.contentDocument;
			if (iframeDoc && onIframeLoad) {
				var serializedIframeNode = serializeNodeWithId(iframeDoc, {
					doc: iframeDoc,
					mirror: mirror2,
					blockClass,
					blockSelector,
					needsMask,
					maskTextClass,
					maskTextSelector,
					skipChild: false,
					inlineStylesheet,
					maskInputOptions,
					maskTextFn,
					maskInputFn,
					slimDOMOptions,
					dataURLOptions,
					inlineImages,
					recordCanvas,
					preserveWhiteSpace,
					onSerialize,
					onIframeLoad,
					iframeLoadTimeout,
					onStylesheetLoad,
					stylesheetLoadTimeout,
					keepIframeSrcFn
				});
				if (serializedIframeNode) onIframeLoad(n2, serializedIframeNode);
			}
		}, iframeLoadTimeout);
		if (serializedNode.type === NodeType$3.Element && serializedNode.tagName === "link" && typeof serializedNode.attributes.rel === "string" && (serializedNode.attributes.rel === "stylesheet" || serializedNode.attributes.rel === "preload" && typeof serializedNode.attributes.href === "string" && extractFileExtension(serializedNode.attributes.href) === "css")) onceStylesheetLoaded(n2, function() {
			if (onStylesheetLoad) {
				var serializedLinkNode = serializeNodeWithId(n2, {
					doc,
					mirror: mirror2,
					blockClass,
					blockSelector,
					needsMask,
					maskTextClass,
					maskTextSelector,
					skipChild: false,
					inlineStylesheet,
					maskInputOptions,
					maskTextFn,
					maskInputFn,
					slimDOMOptions,
					dataURLOptions,
					inlineImages,
					recordCanvas,
					preserveWhiteSpace,
					onSerialize,
					onIframeLoad,
					iframeLoadTimeout,
					onStylesheetLoad,
					stylesheetLoadTimeout,
					keepIframeSrcFn
				});
				if (serializedLinkNode) onStylesheetLoad(n2, serializedLinkNode);
			}
		}, stylesheetLoadTimeout);
		return serializedNode;
	}
	function snapshot(n2, options) {
		var _ref = options || {};
		var tmp = _ref.mirror;
		var mirror2 = tmp === void 0 ? new Mirror() : tmp;
		var _ref_blockClass = _ref.blockClass;
		var blockClass = _ref_blockClass === void 0 ? "rr-block" : _ref_blockClass;
		var _ref_blockSelector = _ref.blockSelector;
		var blockSelector = _ref_blockSelector === void 0 ? null : _ref_blockSelector;
		var _ref_maskTextClass = _ref.maskTextClass;
		var maskTextClass = _ref_maskTextClass === void 0 ? "rr-mask" : _ref_maskTextClass;
		var _ref_maskTextSelector = _ref.maskTextSelector;
		var maskTextSelector = _ref_maskTextSelector === void 0 ? null : _ref_maskTextSelector;
		var _ref_inlineStylesheet = _ref.inlineStylesheet;
		var inlineStylesheet = _ref_inlineStylesheet === void 0 ? true : _ref_inlineStylesheet;
		var _ref_inlineImages = _ref.inlineImages;
		var inlineImages = _ref_inlineImages === void 0 ? false : _ref_inlineImages;
		var _ref_recordCanvas = _ref.recordCanvas;
		var recordCanvas = _ref_recordCanvas === void 0 ? false : _ref_recordCanvas;
		var _ref_maskAllInputs = _ref.maskAllInputs;
		var maskAllInputs = _ref_maskAllInputs === void 0 ? false : _ref_maskAllInputs;
		var maskTextFn = _ref.maskTextFn;
		var maskInputFn = _ref.maskInputFn;
		var _ref_slimDOM = _ref.slimDOM;
		var slimDOM = _ref_slimDOM === void 0 ? false : _ref_slimDOM;
		var dataURLOptions = _ref.dataURLOptions;
		var preserveWhiteSpace = _ref.preserveWhiteSpace;
		var onSerialize = _ref.onSerialize;
		var onIframeLoad = _ref.onIframeLoad;
		var iframeLoadTimeout = _ref.iframeLoadTimeout;
		var onStylesheetLoad = _ref.onStylesheetLoad;
		var stylesheetLoadTimeout = _ref.stylesheetLoadTimeout;
		var _ref_keepIframeSrcFn = _ref.keepIframeSrcFn;
		return serializeNodeWithId(n2, {
			doc: n2,
			mirror: mirror2,
			blockClass,
			blockSelector,
			maskTextClass,
			maskTextSelector,
			skipChild: false,
			inlineStylesheet,
			maskInputOptions: maskAllInputs === true ? {
				color: true,
				date: true,
				"datetime-local": true,
				email: true,
				month: true,
				number: true,
				range: true,
				search: true,
				tel: true,
				text: true,
				time: true,
				url: true,
				week: true,
				textarea: true,
				select: true,
				password: true,
				hidden: true
			} : maskAllInputs === false ? { password: true } : maskAllInputs,
			maskTextFn,
			maskInputFn,
			slimDOMOptions: slimDOM === true || slimDOM === "all" ? {
				script: true,
				comment: true,
				headFavicon: true,
				headWhitespace: true,
				headMetaDescKeywords: slimDOM === "all",
				headMetaSocial: true,
				headMetaRobots: true,
				headMetaHttpEquiv: true,
				headMetaAuthorship: true,
				headMetaVerification: true
			} : slimDOM === false ? {} : slimDOM,
			dataURLOptions,
			inlineImages,
			recordCanvas,
			preserveWhiteSpace,
			onSerialize,
			onIframeLoad,
			iframeLoadTimeout,
			onStylesheetLoad,
			stylesheetLoadTimeout,
			keepIframeSrcFn: _ref_keepIframeSrcFn === void 0 ? function() {
				return false;
			} : _ref_keepIframeSrcFn,
			newlyAddedElement: false
		});
	}
	function getDefaultExportFromCjs$1(x2) {
		return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
	}
	function getAugmentedNamespace$1(n2) {
		if (n2.__esModule) return n2;
		var f2 = n2.default;
		if (typeof f2 == "function") {
			var a2 = function a22() {
				if (_instanceof(this, a22)) return Reflect.construct(f2, arguments, this.constructor);
				return f2.apply(this, arguments);
			};
			a2.prototype = f2.prototype;
		} else a2 = {};
		Object.defineProperty(a2, "__esModule", { value: true });
		Object.keys(n2).forEach(function(k) {
			var d = Object.getOwnPropertyDescriptor(n2, k);
			Object.defineProperty(a2, k, d.get ? d : {
				enumerable: true,
				get: function get() {
					return n2[k];
				}
			});
		});
		return a2;
	}
	var picocolors_browser$1 = { exports: {} };
	var x$1 = String;
	var create$1 = function create$1() {
		return {
			isColorSupported: false,
			reset: x$1,
			bold: x$1,
			dim: x$1,
			italic: x$1,
			underline: x$1,
			inverse: x$1,
			hidden: x$1,
			strikethrough: x$1,
			black: x$1,
			red: x$1,
			green: x$1,
			yellow: x$1,
			blue: x$1,
			magenta: x$1,
			cyan: x$1,
			white: x$1,
			gray: x$1,
			bgBlack: x$1,
			bgRed: x$1,
			bgGreen: x$1,
			bgYellow: x$1,
			bgBlue: x$1,
			bgMagenta: x$1,
			bgCyan: x$1,
			bgWhite: x$1
		};
	};
	picocolors_browser$1.exports = create$1();
	picocolors_browser$1.exports.createColors = create$1;
	var picocolors_browserExports$1 = picocolors_browser$1.exports;
	var require$$2$1 = /* @__PURE__ */ getAugmentedNamespace$1(/* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
		__proto__: null,
		default: {}
	}, Symbol.toStringTag, { value: "Module" })));
	var pico$1 = picocolors_browserExports$1;
	var terminalHighlight$1$1 = require$$2$1;
	var CssSyntaxError$3$1 = /*#__PURE__*/ function(Error1) {
		_inherits(CssSyntaxError, Error1);
		function CssSyntaxError(message, line, column, source, file, plugin22) {
			var _this = Error1.call(this, message) || this;
			_this.name = "CssSyntaxError";
			_this.reason = message;
			if (file) _this.file = file;
			if (source) _this.source = source;
			if (plugin22) _this.plugin = plugin22;
			if (typeof line !== "undefined" && typeof column !== "undefined") if (typeof line === "number") {
				_this.line = line;
				_this.column = column;
			} else {
				_this.line = line.line;
				_this.column = line.column;
				_this.endLine = column.line;
				_this.endColumn = column.column;
			}
			_this.setMessage();
			if (Error.captureStackTrace) Error.captureStackTrace(_this, CssSyntaxError);
			return _this;
		}
		var _proto = CssSyntaxError.prototype;
		_proto.setMessage = function setMessage() {
			this.message = this.plugin ? this.plugin + ": " : "";
			this.message += this.file ? this.file : "<css input>";
			if (typeof this.line !== "undefined") this.message += ":" + this.line + ":" + this.column;
			this.message += ": " + this.reason;
		};
		_proto.showSourceCode = function showSourceCode(color) {
			var _this = this;
			if (!this.source) return "";
			var css = this.source;
			if (color == null) color = pico$1.isColorSupported;
			if (terminalHighlight$1$1) {
				if (color) css = terminalHighlight$1$1(css);
			}
			var lines = css.split(/\r?\n/);
			var start = Math.max(this.line - 3, 0);
			var end = Math.min(this.line + 2, lines.length);
			var maxWidth = String(end).length;
			var mark;
			var aside;
			if (color) {
				var _pico$1_createColors = pico$1.createColors(true);
				var bold = _pico$1_createColors.bold;
				var gray = _pico$1_createColors.gray;
				var red = _pico$1_createColors.red;
				mark = function(text) {
					return bold(red(text));
				};
				aside = function(text) {
					return gray(text);
				};
			} else mark = aside = function(str) {
				return str;
			};
			return lines.slice(start, end).map(function(line, index2) {
				var number = start + 1 + index2;
				var gutter = " " + (" " + number).slice(-maxWidth) + " | ";
				if (number === _this.line) {
					var spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, _this.column - 1).replace(/[^\t]/g, " ");
					return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
				}
				return " " + aside(gutter) + line;
			}).join("\n");
		};
		_proto.toString = function toString() {
			var code = this.showSourceCode();
			if (code) code = "\n\n" + code + "\n";
			return this.name + ": " + this.message + code;
		};
		return CssSyntaxError;
	}(_wrap_native_super(Error));
	var cssSyntaxError$1 = CssSyntaxError$3$1;
	CssSyntaxError$3$1.default = CssSyntaxError$3$1;
	var symbols$1 = {};
	symbols$1.isClean = Symbol("isClean");
	symbols$1.my = Symbol("my");
	var DEFAULT_RAW$1 = {
		after: "\n",
		beforeClose: "\n",
		beforeComment: "\n",
		beforeDecl: "\n",
		beforeOpen: " ",
		beforeRule: "\n",
		colon: ": ",
		commentLeft: " ",
		commentRight: " ",
		emptyBody: "",
		indent: "    ",
		semicolon: false
	};
	function capitalize$1(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
	var Stringifier$2$1 = /*#__PURE__*/ function() {
		function Stringifier(builder) {
			this.builder = builder;
		}
		var _proto = Stringifier.prototype;
		_proto.atrule = function atrule(node2, semicolon) {
			var name = "@" + node2.name;
			var params = node2.params ? this.rawValue(node2, "params") : "";
			if (typeof node2.raws.afterName !== "undefined") name += node2.raws.afterName;
			else if (params) name += " ";
			if (node2.nodes) this.block(node2, name + params);
			else {
				var end = (node2.raws.between || "") + (semicolon ? ";" : "");
				this.builder(name + params + end, node2);
			}
		};
		_proto.beforeAfter = function beforeAfter(node2, detect) {
			var value;
			if (node2.type === "decl") value = this.raw(node2, null, "beforeDecl");
			else if (node2.type === "comment") value = this.raw(node2, null, "beforeComment");
			else if (detect === "before") value = this.raw(node2, null, "beforeRule");
			else value = this.raw(node2, null, "beforeClose");
			var buf = node2.parent;
			var depth = 0;
			while (buf && buf.type !== "root") {
				depth += 1;
				buf = buf.parent;
			}
			if (value.includes("\n")) {
				var indent = this.raw(node2, null, "indent");
				if (indent.length) for (var step = 0; step < depth; step++) value += indent;
			}
			return value;
		};
		_proto.block = function block(node2, start) {
			var between = this.raw(node2, "between", "beforeOpen");
			this.builder(start + between + "{", node2, "start");
			var after;
			if (node2.nodes && node2.nodes.length) {
				this.body(node2);
				after = this.raw(node2, "after");
			} else after = this.raw(node2, "after", "emptyBody");
			if (after) this.builder(after);
			this.builder("}", node2, "end");
		};
		_proto.body = function body(node2) {
			var last = node2.nodes.length - 1;
			while (last > 0) {
				if (node2.nodes[last].type !== "comment") break;
				last -= 1;
			}
			var semicolon = this.raw(node2, "semicolon");
			for (var i2 = 0; i2 < node2.nodes.length; i2++) {
				var child = node2.nodes[i2];
				var before = this.raw(child, "before");
				if (before) this.builder(before);
				this.stringify(child, last !== i2 || semicolon);
			}
		};
		_proto.comment = function comment(node2) {
			var left = this.raw(node2, "left", "commentLeft");
			var right = this.raw(node2, "right", "commentRight");
			this.builder("/*" + left + node2.text + right + "*/", node2);
		};
		_proto.decl = function decl(node2, semicolon) {
			var between = this.raw(node2, "between", "colon");
			var string = node2.prop + between + this.rawValue(node2, "value");
			if (node2.important) string += node2.raws.important || " !important";
			if (semicolon) string += ";";
			this.builder(string, node2);
		};
		_proto.document = function document1(node2) {
			this.body(node2);
		};
		_proto.raw = function raw(node2, own, detect) {
			var value;
			if (!detect) detect = own;
			if (own) {
				value = node2.raws[own];
				if (typeof value !== "undefined") return value;
			}
			var parent = node2.parent;
			if (detect === "before") {
				if (!parent || parent.type === "root" && parent.first === node2) return "";
				if (parent && parent.type === "document") return "";
			}
			if (!parent) return DEFAULT_RAW$1[detect];
			var root2 = node2.root();
			if (!root2.rawCache) root2.rawCache = {};
			if (typeof root2.rawCache[detect] !== "undefined") return root2.rawCache[detect];
			if (detect === "before" || detect === "after") return this.beforeAfter(node2, detect);
			else {
				var method = "raw" + capitalize$1(detect);
				if (this[method]) value = this[method](root2, node2);
				else root2.walk(function(i2) {
					value = i2.raws[own];
					if (typeof value !== "undefined") return false;
				});
			}
			if (typeof value === "undefined") value = DEFAULT_RAW$1[detect];
			root2.rawCache[detect] = value;
			return value;
		};
		_proto.rawBeforeClose = function rawBeforeClose(root2) {
			var value;
			root2.walk(function(i2) {
				if (i2.nodes && i2.nodes.length > 0) {
					if (typeof i2.raws.after !== "undefined") {
						value = i2.raws.after;
						if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
						return false;
					}
				}
			});
			if (value) value = value.replace(/\S/g, "");
			return value;
		};
		_proto.rawBeforeComment = function rawBeforeComment(root2, node2) {
			var value;
			root2.walkComments(function(i2) {
				if (typeof i2.raws.before !== "undefined") {
					value = i2.raws.before;
					if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
					return false;
				}
			});
			if (typeof value === "undefined") value = this.raw(node2, null, "beforeDecl");
			else if (value) value = value.replace(/\S/g, "");
			return value;
		};
		_proto.rawBeforeDecl = function rawBeforeDecl(root2, node2) {
			var value;
			root2.walkDecls(function(i2) {
				if (typeof i2.raws.before !== "undefined") {
					value = i2.raws.before;
					if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
					return false;
				}
			});
			if (typeof value === "undefined") value = this.raw(node2, null, "beforeRule");
			else if (value) value = value.replace(/\S/g, "");
			return value;
		};
		_proto.rawBeforeOpen = function rawBeforeOpen(root2) {
			var value;
			root2.walk(function(i2) {
				if (i2.type !== "decl") {
					value = i2.raws.between;
					if (typeof value !== "undefined") return false;
				}
			});
			return value;
		};
		_proto.rawBeforeRule = function rawBeforeRule(root2) {
			var value;
			root2.walk(function(i2) {
				if (i2.nodes && (i2.parent !== root2 || root2.first !== i2)) {
					if (typeof i2.raws.before !== "undefined") {
						value = i2.raws.before;
						if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
						return false;
					}
				}
			});
			if (value) value = value.replace(/\S/g, "");
			return value;
		};
		_proto.rawColon = function rawColon(root2) {
			var value;
			root2.walkDecls(function(i2) {
				if (typeof i2.raws.between !== "undefined") {
					value = i2.raws.between.replace(/[^\s:]/g, "");
					return false;
				}
			});
			return value;
		};
		_proto.rawEmptyBody = function rawEmptyBody(root2) {
			var value;
			root2.walk(function(i2) {
				if (i2.nodes && i2.nodes.length === 0) {
					value = i2.raws.after;
					if (typeof value !== "undefined") return false;
				}
			});
			return value;
		};
		_proto.rawIndent = function rawIndent(root2) {
			if (root2.raws.indent) return root2.raws.indent;
			var value;
			root2.walk(function(i2) {
				var p = i2.parent;
				if (p && p !== root2 && p.parent && p.parent === root2) {
					if (typeof i2.raws.before !== "undefined") {
						var parts = i2.raws.before.split("\n");
						value = parts[parts.length - 1];
						value = value.replace(/\S/g, "");
						return false;
					}
				}
			});
			return value;
		};
		_proto.rawSemicolon = function rawSemicolon(root2) {
			var value;
			root2.walk(function(i2) {
				if (i2.nodes && i2.nodes.length && i2.last.type === "decl") {
					value = i2.raws.semicolon;
					if (typeof value !== "undefined") return false;
				}
			});
			return value;
		};
		_proto.rawValue = function rawValue(node2, prop) {
			var value = node2[prop];
			var raw = node2.raws[prop];
			if (raw && raw.value === value) return raw.raw;
			return value;
		};
		_proto.root = function root(node2) {
			this.body(node2);
			if (node2.raws.after) this.builder(node2.raws.after);
		};
		_proto.rule = function rule(node2) {
			this.block(node2, this.rawValue(node2, "selector"));
			if (node2.raws.ownSemicolon) this.builder(node2.raws.ownSemicolon, node2, "end");
		};
		_proto.stringify = function stringify(node2, semicolon) {
			if (!this[node2.type]) throw new Error("Unknown AST node type " + node2.type + ". Maybe you need to change PostCSS stringifier.");
			this[node2.type](node2, semicolon);
		};
		return Stringifier;
	}();
	var stringifier$1 = Stringifier$2$1;
	Stringifier$2$1.default = Stringifier$2$1;
	var Stringifier$1$1 = stringifier$1;
	function stringify$4$1(node2, builder) {
		new Stringifier$1$1(builder).stringify(node2);
	}
	var stringify_1$1 = stringify$4$1;
	stringify$4$1.default = stringify$4$1;
	var isClean$2$1 = symbols$1.isClean;
	var my$2$1 = symbols$1.my;
	var CssSyntaxError$2$1 = cssSyntaxError$1;
	var Stringifier2$1 = stringifier$1;
	var stringify$3$1 = stringify_1$1;
	function cloneNode$1(obj, parent) {
		var cloned = new obj.constructor();
		for (var i2 in obj) {
			if (!Object.prototype.hasOwnProperty.call(obj, i2)) continue;
			if (i2 === "proxyCache") continue;
			var value = obj[i2];
			var type = typeof value === "undefined" ? "undefined" : _type_of(value);
			if (i2 === "parent" && type === "object") {
				if (parent) cloned[i2] = parent;
			} else if (i2 === "source") cloned[i2] = value;
			else if (Array.isArray(value)) cloned[i2] = value.map(function(j) {
				return cloneNode$1(j, cloned);
			});
			else {
				if (type === "object" && value !== null) value = cloneNode$1(value);
				cloned[i2] = value;
			}
		}
		return cloned;
	}
	var Node$4$1 = /*#__PURE__*/ function() {
		function Node2(defaults) {
			if (defaults === void 0) defaults = {};
			this.raws = {};
			this[isClean$2$1] = false;
			this[my$2$1] = true;
			for (var name in defaults) if (name === "nodes") {
				this.nodes = [];
				for (var _iterator = _create_for_of_iterator_helper_loose(defaults[name]), _step; !(_step = _iterator()).done;) {
					var node2 = _step.value;
					if (typeof node2.clone === "function") this.append(node2.clone());
					else this.append(node2);
				}
			} else this[name] = defaults[name];
		}
		var _proto = Node2.prototype;
		_proto.addToError = function addToError(error) {
			error.postcssNode = this;
			if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
				var s2 = this.source;
				error.stack = error.stack.replace(/\n\s{4}at /, "$&" + s2.input.from + ":" + s2.start.line + ":" + s2.start.column + "$&");
			}
			return error;
		};
		_proto.after = function after(add) {
			this.parent.insertAfter(this, add);
			return this;
		};
		_proto.assign = function assign(overrides) {
			if (overrides === void 0) overrides = {};
			for (var name in overrides) this[name] = overrides[name];
			return this;
		};
		_proto.before = function before(add) {
			this.parent.insertBefore(this, add);
			return this;
		};
		_proto.cleanRaws = function cleanRaws(keepBetween) {
			delete this.raws.before;
			delete this.raws.after;
			if (!keepBetween) delete this.raws.between;
		};
		_proto.clone = function clone(overrides) {
			if (overrides === void 0) overrides = {};
			var cloned = cloneNode$1(this);
			for (var name in overrides) cloned[name] = overrides[name];
			return cloned;
		};
		_proto.cloneAfter = function cloneAfter(overrides) {
			if (overrides === void 0) overrides = {};
			var cloned = this.clone(overrides);
			this.parent.insertAfter(this, cloned);
			return cloned;
		};
		_proto.cloneBefore = function cloneBefore(overrides) {
			if (overrides === void 0) overrides = {};
			var cloned = this.clone(overrides);
			this.parent.insertBefore(this, cloned);
			return cloned;
		};
		_proto.error = function error(message, opts) {
			if (opts === void 0) opts = {};
			if (this.source) {
				var _this_rangeBy = this.rangeBy(opts);
				var end = _this_rangeBy.end;
				var start = _this_rangeBy.start;
				return this.source.input.error(message, {
					column: start.column,
					line: start.line
				}, {
					column: end.column,
					line: end.line
				}, opts);
			}
			return new CssSyntaxError$2$1(message);
		};
		_proto.getProxyProcessor = function getProxyProcessor() {
			return {
				get: function get(node2, prop) {
					if (prop === "proxyOf") return node2;
					else if (prop === "root") return function() {
						return node2.root().toProxy();
					};
					else return node2[prop];
				},
				set: function set(node2, prop, value) {
					if (node2[prop] === value) return true;
					node2[prop] = value;
					if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || prop === "text") node2.markDirty();
					return true;
				}
			};
		};
		_proto.markDirty = function markDirty() {
			if (this[isClean$2$1]) {
				this[isClean$2$1] = false;
				var next = this;
				while (next = next.parent) next[isClean$2$1] = false;
			}
		};
		_proto.next = function next() {
			if (!this.parent) return void 0;
			var index2 = this.parent.index(this);
			return this.parent.nodes[index2 + 1];
		};
		_proto.positionBy = function positionBy(opts, stringRepresentation) {
			var pos = this.source.start;
			if (opts.index) pos = this.positionInside(opts.index, stringRepresentation);
			else if (opts.word) {
				stringRepresentation = this.toString();
				var index2 = stringRepresentation.indexOf(opts.word);
				if (index2 !== -1) pos = this.positionInside(index2, stringRepresentation);
			}
			return pos;
		};
		_proto.positionInside = function positionInside(index2, stringRepresentation) {
			var string = stringRepresentation || this.toString();
			var column = this.source.start.column;
			var line = this.source.start.line;
			for (var i2 = 0; i2 < index2; i2++) if (string[i2] === "\n") {
				column = 1;
				line += 1;
			} else column += 1;
			return {
				column,
				line
			};
		};
		_proto.prev = function prev() {
			if (!this.parent) return void 0;
			var index2 = this.parent.index(this);
			return this.parent.nodes[index2 - 1];
		};
		_proto.rangeBy = function rangeBy(opts) {
			var start = {
				column: this.source.start.column,
				line: this.source.start.line
			};
			var end = this.source.end ? {
				column: this.source.end.column + 1,
				line: this.source.end.line
			} : {
				column: start.column + 1,
				line: start.line
			};
			if (opts.word) {
				var stringRepresentation = this.toString();
				var index2 = stringRepresentation.indexOf(opts.word);
				if (index2 !== -1) {
					start = this.positionInside(index2, stringRepresentation);
					end = this.positionInside(index2 + opts.word.length, stringRepresentation);
				}
			} else {
				if (opts.start) start = {
					column: opts.start.column,
					line: opts.start.line
				};
				else if (opts.index) start = this.positionInside(opts.index);
				if (opts.end) end = {
					column: opts.end.column,
					line: opts.end.line
				};
				else if (typeof opts.endIndex === "number") end = this.positionInside(opts.endIndex);
				else if (opts.index) end = this.positionInside(opts.index + 1);
			}
			if (end.line < start.line || end.line === start.line && end.column <= start.column) end = {
				column: start.column + 1,
				line: start.line
			};
			return {
				end,
				start
			};
		};
		_proto.raw = function raw(prop, defaultType) {
			return new Stringifier2$1().raw(this, prop, defaultType);
		};
		_proto.remove = function remove() {
			if (this.parent) this.parent.removeChild(this);
			this.parent = void 0;
			return this;
		};
		_proto.replaceWith = function replaceWith() {
			for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) nodes[_key] = arguments[_key];
			if (this.parent) {
				var bookmark = this;
				var foundSelf = false;
				for (var _iterator = _create_for_of_iterator_helper_loose(nodes), _step; !(_step = _iterator()).done;) {
					var node2 = _step.value;
					if (node2 === this) foundSelf = true;
					else if (foundSelf) {
						this.parent.insertAfter(bookmark, node2);
						bookmark = node2;
					} else this.parent.insertBefore(bookmark, node2);
				}
				if (!foundSelf) this.remove();
			}
			return this;
		};
		_proto.root = function root() {
			var result2 = this;
			while (result2.parent && result2.parent.type !== "document") result2 = result2.parent;
			return result2;
		};
		_proto.toJSON = function toJSON(_, inputs) {
			var fixed = {};
			var emitInputs = inputs == null;
			inputs = inputs || /* @__PURE__ */ new Map();
			var inputsNextIndex = 0;
			for (var name in this) {
				if (!Object.prototype.hasOwnProperty.call(this, name)) continue;
				if (name === "parent" || name === "proxyCache") continue;
				var value = this[name];
				if (Array.isArray(value)) fixed[name] = value.map(function(i2) {
					if ((typeof i2 === "undefined" ? "undefined" : _type_of(i2)) === "object" && i2.toJSON) return i2.toJSON(null, inputs);
					else return i2;
				});
				else if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && value.toJSON) fixed[name] = value.toJSON(null, inputs);
				else if (name === "source") {
					var inputId = inputs.get(value.input);
					if (inputId == null) {
						inputId = inputsNextIndex;
						inputs.set(value.input, inputsNextIndex);
						inputsNextIndex++;
					}
					fixed[name] = {
						end: value.end,
						inputId,
						start: value.start
					};
				} else fixed[name] = value;
			}
			if (emitInputs) fixed.inputs = [].concat(inputs.keys()).map(function(input2) {
				return input2.toJSON();
			});
			return fixed;
		};
		_proto.toProxy = function toProxy() {
			if (!this.proxyCache) this.proxyCache = new Proxy(this, this.getProxyProcessor());
			return this.proxyCache;
		};
		_proto.toString = function toString(stringifier2) {
			if (stringifier2 === void 0) stringifier2 = stringify$3$1;
			if (stringifier2.stringify) stringifier2 = stringifier2.stringify;
			var result2 = "";
			stringifier2(this, function(i2) {
				result2 += i2;
			});
			return result2;
		};
		_proto.warn = function warn(result2, text, opts) {
			var data = { node: this };
			for (var i2 in opts) data[i2] = opts[i2];
			return result2.warn(text, data);
		};
		_create_class(Node2, [{
			key: "proxyOf",
			get: function get() {
				return this;
			}
		}]);
		return Node2;
	}();
	var node$1 = Node$4$1;
	Node$4$1.default = Node$4$1;
	var Declaration$4$1 = /*#__PURE__*/ function(Node$3$1) {
		_inherits(Declaration, Node$3$1);
		function Declaration(defaults) {
			var _this;
			if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") defaults = _extends({}, defaults, { value: String(defaults.value) });
			_this = Node$3$1.call(this, defaults) || this;
			_this.type = "decl";
			return _this;
		}
		_create_class(Declaration, [{
			key: "variable",
			get: function get() {
				return this.prop.startsWith("--") || this.prop[0] === "$";
			}
		}]);
		return Declaration;
	}(node$1);
	var declaration$1 = Declaration$4$1;
	Declaration$4$1.default = Declaration$4$1;
	var urlAlphabet$1 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
	var nanoid$1$1 = function(size) {
		if (size === void 0) size = 21;
		var id = "";
		var i2 = size;
		while (i2--) id += urlAlphabet$1[Math.random() * 64 | 0];
		return id;
	};
	var nonSecure$1 = { nanoid: nanoid$1$1 };
	var SourceMapConsumer$2$1 = require$$2$1.SourceMapConsumer;
	var SourceMapGenerator$2$1 = require$$2$1.SourceMapGenerator;
	var existsSync$1 = require$$2$1.existsSync;
	var readFileSync$1 = require$$2$1.readFileSync;
	var dirname$1$1 = require$$2$1.dirname;
	var join$1 = require$$2$1.join;
	function fromBase64$1(str) {
		if (Buffer) return Buffer.from(str, "base64").toString();
		else return window.atob(str);
	}
	var PreviousMap$2$1 = /*#__PURE__*/ function() {
		function PreviousMap(css, opts) {
			if (opts.map === false) return;
			this.loadAnnotation(css);
			this.inline = this.startWith(this.annotation, "data:");
			var prev = opts.map ? opts.map.prev : void 0;
			var text = this.loadMap(opts.from, prev);
			if (!this.mapFile && opts.from) this.mapFile = opts.from;
			if (this.mapFile) this.root = dirname$1$1(this.mapFile);
			if (text) this.text = text;
		}
		var _proto = PreviousMap.prototype;
		_proto.consumer = function consumer() {
			if (!this.consumerCache) this.consumerCache = new SourceMapConsumer$2$1(this.text);
			return this.consumerCache;
		};
		_proto.decodeInline = function decodeInline(text) {
			var baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
			var baseUri = /^data:application\/json;base64,/;
			if (/^data:application\/json;charset=utf-?8,/.test(text) || /^data:application\/json,/.test(text)) return decodeURIComponent(text.substr(RegExp.lastMatch.length));
			if (baseCharsetUri.test(text) || baseUri.test(text)) return fromBase64$1(text.substr(RegExp.lastMatch.length));
			var encoding = text.match(/data:application\/json;([^,]+),/)[1];
			throw new Error("Unsupported source map encoding " + encoding);
		};
		_proto.getAnnotationURL = function getAnnotationURL(sourceMapString) {
			return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
		};
		_proto.isMap = function isMap(map) {
			if ((typeof map === "undefined" ? "undefined" : _type_of(map)) !== "object") return false;
			return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
		};
		_proto.loadAnnotation = function loadAnnotation(css) {
			var comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
			if (!comments) return;
			var start = css.lastIndexOf(comments.pop());
			var end = css.indexOf("*/", start);
			if (start > -1 && end > -1) this.annotation = this.getAnnotationURL(css.substring(start, end));
		};
		_proto.loadFile = function loadFile(path) {
			this.root = dirname$1$1(path);
			if (existsSync$1(path)) {
				this.mapFile = path;
				return readFileSync$1(path, "utf-8").toString().trim();
			}
		};
		_proto.loadMap = function loadMap(file, prev) {
			if (prev === false) return false;
			if (prev) if (typeof prev === "string") return prev;
			else if (typeof prev === "function") {
				var prevPath = prev(file);
				if (prevPath) {
					var map = this.loadFile(prevPath);
					if (!map) throw new Error("Unable to load previous source map: " + prevPath.toString());
					return map;
				}
			} else if (_instanceof(prev, SourceMapConsumer$2$1)) return SourceMapGenerator$2$1.fromSourceMap(prev).toString();
			else if (_instanceof(prev, SourceMapGenerator$2$1)) return prev.toString();
			else if (this.isMap(prev)) return JSON.stringify(prev);
			else throw new Error("Unsupported previous source map format: " + prev.toString());
			else if (this.inline) return this.decodeInline(this.annotation);
			else if (this.annotation) {
				var map1 = this.annotation;
				if (file) map1 = join$1(dirname$1$1(file), map1);
				return this.loadFile(map1);
			}
		};
		_proto.startWith = function startWith(string, start) {
			if (!string) return false;
			return string.substr(0, start.length) === start;
		};
		_proto.withContent = function withContent() {
			return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
		};
		return PreviousMap;
	}();
	var previousMap$1 = PreviousMap$2$1;
	PreviousMap$2$1.default = PreviousMap$2$1;
	var SourceMapConsumer$1$1 = require$$2$1.SourceMapConsumer;
	var SourceMapGenerator$1$1 = require$$2$1.SourceMapGenerator;
	var fileURLToPath$1 = require$$2$1.fileURLToPath;
	var pathToFileURL$1$1 = require$$2$1.pathToFileURL;
	var isAbsolute$1 = require$$2$1.isAbsolute;
	var resolve$1$1 = require$$2$1.resolve;
	var nanoid$2 = nonSecure$1.nanoid;
	var terminalHighlight$2 = require$$2$1;
	var CssSyntaxError$1$1 = cssSyntaxError$1;
	var PreviousMap$1$1 = previousMap$1;
	var fromOffsetCache$1 = Symbol("fromOffsetCache");
	var sourceMapAvailable$1$1 = Boolean(SourceMapConsumer$1$1 && SourceMapGenerator$1$1);
	var pathAvailable$1$1 = Boolean(resolve$1$1 && isAbsolute$1);
	var Input$4$1 = /*#__PURE__*/ function() {
		function Input(css, opts) {
			if (opts === void 0) opts = {};
			if (css === null || typeof css === "undefined" || (typeof css === "undefined" ? "undefined" : _type_of(css)) === "object" && !css.toString) throw new Error("PostCSS received " + css + " instead of CSS string");
			this.css = css.toString();
			if (this.css[0] === "﻿" || this.css[0] === "￾") {
				this.hasBOM = true;
				this.css = this.css.slice(1);
			} else this.hasBOM = false;
			if (opts.from) if (!pathAvailable$1$1 || /^\w+:\/\//.test(opts.from) || isAbsolute$1(opts.from)) this.file = opts.from;
			else this.file = resolve$1$1(opts.from);
			if (pathAvailable$1$1 && sourceMapAvailable$1$1) {
				var map = new PreviousMap$1$1(this.css, opts);
				if (map.text) {
					this.map = map;
					var file = map.consumer().file;
					if (!this.file && file) this.file = this.mapResolve(file);
				}
			}
			if (!this.file) this.id = "<input css " + nanoid$2(6) + ">";
			if (this.map) this.map.file = this.from;
		}
		var _proto = Input.prototype;
		_proto.error = function error(message, line, column, opts) {
			if (opts === void 0) opts = {};
			var result2;
			var endLine;
			var endColumn;
			if (line && (typeof line === "undefined" ? "undefined" : _type_of(line)) === "object") {
				var start = line;
				var end = column;
				if (typeof start.offset === "number") {
					var pos = this.fromOffset(start.offset);
					line = pos.line;
					column = pos.col;
				} else {
					line = start.line;
					column = start.column;
				}
				if (typeof end.offset === "number") {
					var pos1 = this.fromOffset(end.offset);
					endLine = pos1.line;
					endColumn = pos1.col;
				} else {
					endLine = end.line;
					endColumn = end.column;
				}
			} else if (!column) {
				var pos2 = this.fromOffset(line);
				line = pos2.line;
				column = pos2.col;
			}
			var origin = this.origin(line, column, endLine, endColumn);
			if (origin) result2 = new CssSyntaxError$1$1(message, origin.endLine === void 0 ? origin.line : {
				column: origin.column,
				line: origin.line
			}, origin.endLine === void 0 ? origin.column : {
				column: origin.endColumn,
				line: origin.endLine
			}, origin.source, origin.file, opts.plugin);
			else result2 = new CssSyntaxError$1$1(message, endLine === void 0 ? line : {
				column,
				line
			}, endLine === void 0 ? column : {
				column: endColumn,
				line: endLine
			}, this.css, this.file, opts.plugin);
			result2.input = {
				column,
				endColumn,
				endLine,
				line,
				source: this.css
			};
			if (this.file) {
				if (pathToFileURL$1$1) result2.input.url = pathToFileURL$1$1(this.file).toString();
				result2.input.file = this.file;
			}
			return result2;
		};
		_proto.fromOffset = function fromOffset(offset) {
			var lastLine;
			var lineToIndex;
			if (!this[fromOffsetCache$1]) {
				var lines = this.css.split("\n");
				lineToIndex = new Array(lines.length);
				var prevIndex = 0;
				for (var i2 = 0, l2 = lines.length; i2 < l2; i2++) {
					lineToIndex[i2] = prevIndex;
					prevIndex += lines[i2].length + 1;
				}
				this[fromOffsetCache$1] = lineToIndex;
			} else lineToIndex = this[fromOffsetCache$1];
			lastLine = lineToIndex[lineToIndex.length - 1];
			var min = 0;
			if (offset >= lastLine) min = lineToIndex.length - 1;
			else {
				var max = lineToIndex.length - 2;
				var mid;
				while (min < max) {
					mid = min + (max - min >> 1);
					if (offset < lineToIndex[mid]) max = mid - 1;
					else if (offset >= lineToIndex[mid + 1]) min = mid + 1;
					else {
						min = mid;
						break;
					}
				}
			}
			return {
				col: offset - lineToIndex[min] + 1,
				line: min + 1
			};
		};
		_proto.mapResolve = function mapResolve(file) {
			if (/^\w+:\/\//.test(file)) return file;
			return resolve$1$1(this.map.consumer().sourceRoot || this.map.root || ".", file);
		};
		_proto.origin = function origin(line, column, endLine, endColumn) {
			if (!this.map) return false;
			var consumer = this.map.consumer();
			var from = consumer.originalPositionFor({
				column,
				line
			});
			if (!from.source) return false;
			var to;
			if (typeof endLine === "number") to = consumer.originalPositionFor({
				column: endColumn,
				line: endLine
			});
			var fromUrl;
			if (isAbsolute$1(from.source)) fromUrl = pathToFileURL$1$1(from.source);
			else fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL$1$1(this.map.mapFile));
			var result2 = {
				column: from.column,
				endColumn: to && to.column,
				endLine: to && to.line,
				line: from.line,
				url: fromUrl.toString()
			};
			if (fromUrl.protocol === "file:") if (fileURLToPath$1) result2.file = fileURLToPath$1(fromUrl);
			else throw new Error("file: protocol is not available in this PostCSS build");
			var source = consumer.sourceContentFor(from.source);
			if (source) result2.source = source;
			return result2;
		};
		_proto.toJSON = function toJSON() {
			var json = {};
			for (var _i = 0, _iter = [
				"hasBOM",
				"css",
				"file",
				"id"
			]; _i < _iter.length; _i++) {
				var name = _iter[_i];
				if (this[name] != null) json[name] = this[name];
			}
			if (this.map) {
				json.map = _extends({}, this.map);
				if (json.map.consumerCache) json.map.consumerCache = void 0;
			}
			return json;
		};
		_create_class(Input, [{
			key: "from",
			get: function get() {
				return this.file || this.id;
			}
		}]);
		return Input;
	}();
	var input$1 = Input$4$1;
	Input$4$1.default = Input$4$1;
	if (terminalHighlight$2 && terminalHighlight$2.registerInput) terminalHighlight$2.registerInput(Input$4$1);
	var SourceMapConsumer$3 = require$$2$1.SourceMapConsumer;
	var SourceMapGenerator$3 = require$$2$1.SourceMapGenerator;
	var dirname$2 = require$$2$1.dirname;
	var relative$1 = require$$2$1.relative;
	var resolve$2 = require$$2$1.resolve;
	var sep$1 = require$$2$1.sep;
	var pathToFileURL$2 = require$$2$1.pathToFileURL;
	var Input$3$1 = input$1;
	var sourceMapAvailable$2 = Boolean(SourceMapConsumer$3 && SourceMapGenerator$3);
	var pathAvailable$2 = Boolean(dirname$2 && resolve$2 && relative$1 && sep$1);
	var mapGenerator$1 = /* @__PURE__ */ function() {
		function MapGenerator(stringify2, root2, opts, cssString) {
			this.stringify = stringify2;
			this.mapOpts = opts.map || {};
			this.root = root2;
			this.opts = opts;
			this.css = cssString;
			this.originalCSS = cssString;
			this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
			this.memoizedFileURLs = /* @__PURE__ */ new Map();
			this.memoizedPaths = /* @__PURE__ */ new Map();
			this.memoizedURLs = /* @__PURE__ */ new Map();
		}
		var _proto = MapGenerator.prototype;
		_proto.addAnnotation = function addAnnotation() {
			var content;
			if (this.isInline()) content = "data:application/json;base64," + this.toBase64(this.map.toString());
			else if (typeof this.mapOpts.annotation === "string") content = this.mapOpts.annotation;
			else if (typeof this.mapOpts.annotation === "function") content = this.mapOpts.annotation(this.opts.to, this.root);
			else content = this.outputFile() + ".map";
			var eol = "\n";
			if (this.css.includes("\r\n")) eol = "\r\n";
			this.css += eol + "/*# sourceMappingURL=" + content + " */";
		};
		_proto.applyPrevMaps = function applyPrevMaps() {
			for (var _iterator = _create_for_of_iterator_helper_loose(this.previous()), _step; !(_step = _iterator()).done;) {
				var prev = _step.value;
				var from = this.toUrl(this.path(prev.file));
				var root2 = prev.root || dirname$2(prev.file);
				var map = void 0;
				if (this.mapOpts.sourcesContent === false) {
					map = new SourceMapConsumer$3(prev.text);
					if (map.sourcesContent) map.sourcesContent = null;
				} else map = prev.consumer();
				this.map.applySourceMap(map, from, this.toUrl(this.path(root2)));
			}
		};
		_proto.clearAnnotation = function clearAnnotation() {
			if (this.mapOpts.annotation === false) return;
			if (this.root) {
				var node2;
				for (var i2 = this.root.nodes.length - 1; i2 >= 0; i2--) {
					node2 = this.root.nodes[i2];
					if (node2.type !== "comment") continue;
					if (node2.text.indexOf("# sourceMappingURL=") === 0) this.root.removeChild(i2);
				}
			} else if (this.css) this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, "");
		};
		_proto.generate = function generate() {
			this.clearAnnotation();
			if (pathAvailable$2 && sourceMapAvailable$2 && this.isMap()) return this.generateMap();
			else {
				var result2 = "";
				this.stringify(this.root, function(i2) {
					result2 += i2;
				});
				return [result2];
			}
		};
		_proto.generateMap = function generateMap() {
			if (this.root) this.generateString();
			else if (this.previous().length === 1) {
				var prev = this.previous()[0].consumer();
				prev.file = this.outputFile();
				this.map = SourceMapGenerator$3.fromSourceMap(prev, { ignoreInvalidMapping: true });
			} else {
				this.map = new SourceMapGenerator$3({
					file: this.outputFile(),
					ignoreInvalidMapping: true
				});
				this.map.addMapping({
					generated: {
						column: 0,
						line: 1
					},
					original: {
						column: 0,
						line: 1
					},
					source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
				});
			}
			if (this.isSourcesContent()) this.setSourcesContent();
			if (this.root && this.previous().length > 0) this.applyPrevMaps();
			if (this.isAnnotation()) this.addAnnotation();
			if (this.isInline()) return [this.css];
			else return [this.css, this.map];
		};
		_proto.generateString = function generateString() {
			var _this = this;
			this.css = "";
			this.map = new SourceMapGenerator$3({
				file: this.outputFile(),
				ignoreInvalidMapping: true
			});
			var line = 1;
			var column = 1;
			var noSource = "<no source>";
			var mapping = {
				generated: {
					column: 0,
					line: 0
				},
				original: {
					column: 0,
					line: 0
				},
				source: ""
			};
			var lines;
			var last;
			this.stringify(this.root, function(str, node2, type) {
				_this.css += str;
				if (node2 && type !== "end") {
					mapping.generated.line = line;
					mapping.generated.column = column - 1;
					if (node2.source && node2.source.start) {
						mapping.source = _this.sourcePath(node2);
						mapping.original.line = node2.source.start.line;
						mapping.original.column = node2.source.start.column - 1;
						_this.map.addMapping(mapping);
					} else {
						mapping.source = noSource;
						mapping.original.line = 1;
						mapping.original.column = 0;
						_this.map.addMapping(mapping);
					}
				}
				lines = str.match(/\n/g);
				if (lines) {
					line += lines.length;
					last = str.lastIndexOf("\n");
					column = str.length - last;
				} else column += str.length;
				if (node2 && type !== "start") {
					var p = node2.parent || { raws: {} };
					if (!(node2.type === "decl" || node2.type === "atrule" && !node2.nodes) || node2 !== p.last || p.raws.semicolon) if (node2.source && node2.source.end) {
						mapping.source = _this.sourcePath(node2);
						mapping.original.line = node2.source.end.line;
						mapping.original.column = node2.source.end.column - 1;
						mapping.generated.line = line;
						mapping.generated.column = column - 2;
						_this.map.addMapping(mapping);
					} else {
						mapping.source = noSource;
						mapping.original.line = 1;
						mapping.original.column = 0;
						mapping.generated.line = line;
						mapping.generated.column = column - 1;
						_this.map.addMapping(mapping);
					}
				}
			});
		};
		_proto.isAnnotation = function isAnnotation() {
			if (this.isInline()) return true;
			if (typeof this.mapOpts.annotation !== "undefined") return this.mapOpts.annotation;
			if (this.previous().length) return this.previous().some(function(i2) {
				return i2.annotation;
			});
			return true;
		};
		_proto.isInline = function isInline() {
			if (typeof this.mapOpts.inline !== "undefined") return this.mapOpts.inline;
			var annotation = this.mapOpts.annotation;
			if (typeof annotation !== "undefined" && annotation !== true) return false;
			if (this.previous().length) return this.previous().some(function(i2) {
				return i2.inline;
			});
			return true;
		};
		_proto.isMap = function isMap() {
			if (typeof this.opts.map !== "undefined") return !!this.opts.map;
			return this.previous().length > 0;
		};
		_proto.isSourcesContent = function isSourcesContent() {
			if (typeof this.mapOpts.sourcesContent !== "undefined") return this.mapOpts.sourcesContent;
			if (this.previous().length) return this.previous().some(function(i2) {
				return i2.withContent();
			});
			return true;
		};
		_proto.outputFile = function outputFile() {
			if (this.opts.to) return this.path(this.opts.to);
			else if (this.opts.from) return this.path(this.opts.from);
			else return "to.css";
		};
		_proto.path = function path(file) {
			if (this.mapOpts.absolute) return file;
			if (file.charCodeAt(0) === 60) return file;
			if (/^\w+:\/\//.test(file)) return file;
			var cached = this.memoizedPaths.get(file);
			if (cached) return cached;
			var from = this.opts.to ? dirname$2(this.opts.to) : ".";
			if (typeof this.mapOpts.annotation === "string") from = dirname$2(resolve$2(from, this.mapOpts.annotation));
			var path = relative$1(from, file);
			this.memoizedPaths.set(file, path);
			return path;
		};
		_proto.previous = function previous() {
			var _this = this;
			if (!this.previousMaps) {
				this.previousMaps = [];
				if (this.root) this.root.walk(function(node2) {
					if (node2.source && node2.source.input.map) {
						var map = node2.source.input.map;
						if (!_this.previousMaps.includes(map)) _this.previousMaps.push(map);
					}
				});
				else {
					var input2 = new Input$3$1(this.originalCSS, this.opts);
					if (input2.map) this.previousMaps.push(input2.map);
				}
			}
			return this.previousMaps;
		};
		_proto.setSourcesContent = function setSourcesContent() {
			var _this = this;
			var already = {};
			if (this.root) this.root.walk(function(node2) {
				if (node2.source) {
					var from = node2.source.input.from;
					if (from && !already[from]) {
						already[from] = true;
						var fromUrl = _this.usesFileUrls ? _this.toFileUrl(from) : _this.toUrl(_this.path(from));
						_this.map.setSourceContent(fromUrl, node2.source.input.css);
					}
				}
			});
			else if (this.css) {
				var from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
				this.map.setSourceContent(from, this.css);
			}
		};
		_proto.sourcePath = function sourcePath(node2) {
			if (this.mapOpts.from) return this.toUrl(this.mapOpts.from);
			else if (this.usesFileUrls) return this.toFileUrl(node2.source.input.from);
			else return this.toUrl(this.path(node2.source.input.from));
		};
		_proto.toBase64 = function toBase64(str) {
			if (Buffer) return Buffer.from(str).toString("base64");
			else return window.btoa(unescape(encodeURIComponent(str)));
		};
		_proto.toFileUrl = function toFileUrl(path) {
			var cached = this.memoizedFileURLs.get(path);
			if (cached) return cached;
			if (pathToFileURL$2) {
				var fileURL = pathToFileURL$2(path).toString();
				this.memoizedFileURLs.set(path, fileURL);
				return fileURL;
			} else throw new Error("`map.absolute` option is not available in this PostCSS build");
		};
		_proto.toUrl = function toUrl(path) {
			var cached = this.memoizedURLs.get(path);
			if (cached) return cached;
			if (sep$1 === "\\") path = path.replace(/\\/g, "/");
			var url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
			this.memoizedURLs.set(path, url);
			return url;
		};
		return MapGenerator;
	}();
	var Comment$4$1 = /*#__PURE__*/ function(Node$2$1) {
		_inherits(Comment, Node$2$1);
		function Comment(defaults) {
			var _this = Node$2$1.call(this, defaults) || this;
			_this.type = "comment";
			return _this;
		}
		return Comment;
	}(node$1);
	var comment$1 = Comment$4$1;
	Comment$4$1.default = Comment$4$1;
	var isClean$1$1 = symbols$1.isClean;
	var my$1$1 = symbols$1.my;
	var Declaration$3$1 = declaration$1;
	var Comment$3$1 = comment$1;
	var Node$1$1 = node$1;
	var parse$4$1;
	var Rule$4$1;
	var AtRule$4$1;
	var Root$6$1;
	function cleanSource$1(nodes) {
		return nodes.map(function(i2) {
			if (i2.nodes) i2.nodes = cleanSource$1(i2.nodes);
			delete i2.source;
			return i2;
		});
	}
	function markDirtyUp$1(node2) {
		node2[isClean$1$1] = false;
		if (node2.proxyOf.nodes) for (var _iterator = _create_for_of_iterator_helper_loose(node2.proxyOf.nodes), _step; !(_step = _iterator()).done;) {
			var i2 = _step.value;
			markDirtyUp$1(i2);
		}
	}
	var Container$7$1 = /*#__PURE__*/ function(Node$1$1) {
		_inherits(Container, Node$1$1);
		function Container() {
			return Node$1$1.apply(this, arguments) || this;
		}
		var _proto = Container.prototype;
		_proto.append = function append() {
			for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) children[_key] = arguments[_key];
			for (var _iterator = _create_for_of_iterator_helper_loose(children), _step; !(_step = _iterator()).done;) {
				var child = _step.value;
				for (var _iterator1 = _create_for_of_iterator_helper_loose(this.normalize(child, this.last)), _step1; !(_step1 = _iterator1()).done;) {
					var node2 = _step1.value;
					this.proxyOf.nodes.push(node2);
				}
			}
			this.markDirty();
			return this;
		};
		_proto.cleanRaws = function cleanRaws(keepBetween) {
			Node$1$1.prototype.cleanRaws.call(this, keepBetween);
			if (this.nodes) for (var _iterator = _create_for_of_iterator_helper_loose(this.nodes), _step; !(_step = _iterator()).done;) _step.value.cleanRaws(keepBetween);
		};
		_proto.each = function each(callback) {
			if (!this.proxyOf.nodes) return void 0;
			var iterator = this.getIterator();
			var index2;
			var result2;
			while (this.indexes[iterator] < this.proxyOf.nodes.length) {
				index2 = this.indexes[iterator];
				result2 = callback(this.proxyOf.nodes[index2], index2);
				if (result2 === false) break;
				this.indexes[iterator] += 1;
			}
			delete this.indexes[iterator];
			return result2;
		};
		_proto.every = function every(condition) {
			return this.nodes.every(condition);
		};
		_proto.getIterator = function getIterator() {
			if (!this.lastEach) this.lastEach = 0;
			if (!this.indexes) this.indexes = {};
			this.lastEach += 1;
			var iterator = this.lastEach;
			this.indexes[iterator] = 0;
			return iterator;
		};
		_proto.getProxyProcessor = function getProxyProcessor() {
			return {
				get: function get(node2, prop) {
					if (prop === "proxyOf") return node2;
					else if (!node2[prop]) return node2[prop];
					else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) return function() {
						for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
						var _node2;
						return (_node2 = node2)[prop].apply(_node2, [].concat(args.map(function(i2) {
							if (typeof i2 === "function") return function(child, index2) {
								return i2(child.toProxy(), index2);
							};
							else return i2;
						})));
					};
					else if (prop === "every" || prop === "some") return function(cb) {
						return node2[prop](function(child) {
							for (var _len = arguments.length, other = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) other[_key - 1] = arguments[_key];
							return cb.apply(void 0, [].concat([child.toProxy()], other));
						});
					};
					else if (prop === "root") return function() {
						return node2.root().toProxy();
					};
					else if (prop === "nodes") return node2.nodes.map(function(i2) {
						return i2.toProxy();
					});
					else if (prop === "first" || prop === "last") return node2[prop].toProxy();
					else return node2[prop];
				},
				set: function set(node2, prop, value) {
					if (node2[prop] === value) return true;
					node2[prop] = value;
					if (prop === "name" || prop === "params" || prop === "selector") node2.markDirty();
					return true;
				}
			};
		};
		_proto.index = function index(child) {
			if (typeof child === "number") return child;
			if (child.proxyOf) child = child.proxyOf;
			return this.proxyOf.nodes.indexOf(child);
		};
		_proto.insertAfter = function insertAfter(exist, add) {
			var existIndex = this.index(exist);
			var nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
			existIndex = this.index(exist);
			for (var _iterator = _create_for_of_iterator_helper_loose(nodes), _step; !(_step = _iterator()).done;) {
				var node2 = _step.value;
				this.proxyOf.nodes.splice(existIndex + 1, 0, node2);
			}
			var index2;
			for (var id in this.indexes) {
				index2 = this.indexes[id];
				if (existIndex < index2) this.indexes[id] = index2 + nodes.length;
			}
			this.markDirty();
			return this;
		};
		_proto.insertBefore = function insertBefore(exist, add) {
			var existIndex = this.index(exist);
			var type = existIndex === 0 ? "prepend" : false;
			var nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
			existIndex = this.index(exist);
			for (var _iterator = _create_for_of_iterator_helper_loose(nodes), _step; !(_step = _iterator()).done;) {
				var node2 = _step.value;
				this.proxyOf.nodes.splice(existIndex, 0, node2);
			}
			var index2;
			for (var id in this.indexes) {
				index2 = this.indexes[id];
				if (existIndex <= index2) this.indexes[id] = index2 + nodes.length;
			}
			this.markDirty();
			return this;
		};
		_proto.normalize = function normalize(nodes, sample) {
			var _this = this;
			if (typeof nodes === "string") nodes = cleanSource$1(parse$4$1(nodes).nodes);
			else if (typeof nodes === "undefined") nodes = [];
			else if (Array.isArray(nodes)) {
				nodes = nodes.slice(0);
				for (var _iterator = _create_for_of_iterator_helper_loose(nodes), _step; !(_step = _iterator()).done;) {
					var i2 = _step.value;
					if (i2.parent) i2.parent.removeChild(i2, "ignore");
				}
			} else if (nodes.type === "root" && this.type !== "document") {
				nodes = nodes.nodes.slice(0);
				for (var _iterator1 = _create_for_of_iterator_helper_loose(nodes), _step1; !(_step1 = _iterator1()).done;) {
					var i21 = _step1.value;
					if (i21.parent) i21.parent.removeChild(i21, "ignore");
				}
			} else if (nodes.type) nodes = [nodes];
			else if (nodes.prop) {
				if (typeof nodes.value === "undefined") throw new Error("Value field is missed in node creation");
				else if (typeof nodes.value !== "string") nodes.value = String(nodes.value);
				nodes = [new Declaration$3$1(nodes)];
			} else if (nodes.selector) nodes = [new Rule$4$1(nodes)];
			else if (nodes.name) nodes = [new AtRule$4$1(nodes)];
			else if (nodes.text) nodes = [new Comment$3$1(nodes)];
			else throw new Error("Unknown node type in node creation");
			return nodes.map(function(i2) {
				if (!i2[my$1$1]) Container.rebuild(i2);
				i2 = i2.proxyOf;
				if (i2.parent) i2.parent.removeChild(i2);
				if (i2[isClean$1$1]) markDirtyUp$1(i2);
				if (typeof i2.raws.before === "undefined") {
					if (sample && typeof sample.raws.before !== "undefined") i2.raws.before = sample.raws.before.replace(/\S/g, "");
				}
				i2.parent = _this.proxyOf;
				return i2;
			});
		};
		_proto.prepend = function prepend() {
			for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) children[_key] = arguments[_key];
			children = children.reverse();
			for (var _iterator = _create_for_of_iterator_helper_loose(children), _step; !(_step = _iterator()).done;) {
				var child = _step.value;
				var nodes = this.normalize(child, this.first, "prepend").reverse();
				for (var _iterator1 = _create_for_of_iterator_helper_loose(nodes), _step1; !(_step1 = _iterator1()).done;) {
					var node2 = _step1.value;
					this.proxyOf.nodes.unshift(node2);
				}
				for (var id in this.indexes) this.indexes[id] = this.indexes[id] + nodes.length;
			}
			this.markDirty();
			return this;
		};
		_proto.push = function push(child) {
			child.parent = this;
			this.proxyOf.nodes.push(child);
			return this;
		};
		_proto.removeAll = function removeAll() {
			for (var _iterator = _create_for_of_iterator_helper_loose(this.proxyOf.nodes), _step; !(_step = _iterator()).done;) {
				var node2 = _step.value;
				node2.parent = void 0;
			}
			this.proxyOf.nodes = [];
			this.markDirty();
			return this;
		};
		_proto.removeChild = function removeChild(child) {
			child = this.index(child);
			this.proxyOf.nodes[child].parent = void 0;
			this.proxyOf.nodes.splice(child, 1);
			var index2;
			for (var id in this.indexes) {
				index2 = this.indexes[id];
				if (index2 >= child) this.indexes[id] = index2 - 1;
			}
			this.markDirty();
			return this;
		};
		_proto.replaceValues = function replaceValues(pattern, opts, callback) {
			if (!callback) {
				callback = opts;
				opts = {};
			}
			this.walkDecls(function(decl) {
				if (opts.props && !opts.props.includes(decl.prop)) return;
				if (opts.fast && !decl.value.includes(opts.fast)) return;
				decl.value = decl.value.replace(pattern, callback);
			});
			this.markDirty();
			return this;
		};
		_proto.some = function some(condition) {
			return this.nodes.some(condition);
		};
		_proto.walk = function walk(callback) {
			return this.each(function(child, i2) {
				var result2;
				try {
					result2 = callback(child, i2);
				} catch (e2) {
					throw child.addToError(e2);
				}
				if (result2 !== false && child.walk) result2 = child.walk(callback);
				return result2;
			});
		};
		_proto.walkAtRules = function walkAtRules(name, callback) {
			if (!callback) {
				callback = name;
				return this.walk(function(child, i2) {
					if (child.type === "atrule") return callback(child, i2);
				});
			}
			if (_instanceof(name, RegExp)) return this.walk(function(child, i2) {
				if (child.type === "atrule" && name.test(child.name)) return callback(child, i2);
			});
			return this.walk(function(child, i2) {
				if (child.type === "atrule" && child.name === name) return callback(child, i2);
			});
		};
		_proto.walkComments = function walkComments(callback) {
			return this.walk(function(child, i2) {
				if (child.type === "comment") return callback(child, i2);
			});
		};
		_proto.walkDecls = function walkDecls(prop, callback) {
			if (!callback) {
				callback = prop;
				return this.walk(function(child, i2) {
					if (child.type === "decl") return callback(child, i2);
				});
			}
			if (_instanceof(prop, RegExp)) return this.walk(function(child, i2) {
				if (child.type === "decl" && prop.test(child.prop)) return callback(child, i2);
			});
			return this.walk(function(child, i2) {
				if (child.type === "decl" && child.prop === prop) return callback(child, i2);
			});
		};
		_proto.walkRules = function walkRules(selector, callback) {
			if (!callback) {
				callback = selector;
				return this.walk(function(child, i2) {
					if (child.type === "rule") return callback(child, i2);
				});
			}
			if (_instanceof(selector, RegExp)) return this.walk(function(child, i2) {
				if (child.type === "rule" && selector.test(child.selector)) return callback(child, i2);
			});
			return this.walk(function(child, i2) {
				if (child.type === "rule" && child.selector === selector) return callback(child, i2);
			});
		};
		_create_class(Container, [{
			key: "first",
			get: function get() {
				if (!this.proxyOf.nodes) return void 0;
				return this.proxyOf.nodes[0];
			}
		}, {
			key: "last",
			get: function get() {
				if (!this.proxyOf.nodes) return void 0;
				return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
			}
		}]);
		return Container;
	}(Node$1$1);
	Container$7$1.registerParse = function(dependant) {
		parse$4$1 = dependant;
	};
	Container$7$1.registerRule = function(dependant) {
		Rule$4$1 = dependant;
	};
	Container$7$1.registerAtRule = function(dependant) {
		AtRule$4$1 = dependant;
	};
	Container$7$1.registerRoot = function(dependant) {
		Root$6$1 = dependant;
	};
	var container$1 = Container$7$1;
	Container$7$1.default = Container$7$1;
	Container$7$1.rebuild = function(node2) {
		if (node2.type === "atrule") Object.setPrototypeOf(node2, AtRule$4$1.prototype);
		else if (node2.type === "rule") Object.setPrototypeOf(node2, Rule$4$1.prototype);
		else if (node2.type === "decl") Object.setPrototypeOf(node2, Declaration$3$1.prototype);
		else if (node2.type === "comment") Object.setPrototypeOf(node2, Comment$3$1.prototype);
		else if (node2.type === "root") Object.setPrototypeOf(node2, Root$6$1.prototype);
		node2[my$1$1] = true;
		if (node2.nodes) node2.nodes.forEach(function(child) {
			Container$7$1.rebuild(child);
		});
	};
	var Container$6$1 = container$1;
	var LazyResult$4$1;
	var Processor$3$1;
	var Document$3$1 = /*#__PURE__*/ function(Container$6$1) {
		_inherits(Document2, Container$6$1);
		function Document2(defaults) {
			var _this = Container$6$1.call(this, _extends({ type: "document" }, defaults)) || this;
			if (!_this.nodes) _this.nodes = [];
			return _this;
		}
		var _proto = Document2.prototype;
		_proto.toResult = function toResult(opts) {
			if (opts === void 0) opts = {};
			return new LazyResult$4$1(new Processor$3$1(), this, opts).stringify();
		};
		return Document2;
	}(Container$6$1);
	Document$3$1.registerLazyResult = function(dependant) {
		LazyResult$4$1 = dependant;
	};
	Document$3$1.registerProcessor = function(dependant) {
		Processor$3$1 = dependant;
	};
	var document$1$1 = Document$3$1;
	Document$3$1.default = Document$3$1;
	var printed$1 = {};
	var warnOnce$2$1 = function warnOnce(message) {
		if (printed$1[message]) return;
		printed$1[message] = true;
		if (typeof console !== "undefined" && console.warn) console.warn(message);
	};
	var Warning$2$1 = /*#__PURE__*/ function() {
		function Warning(text, opts) {
			if (opts === void 0) opts = {};
			this.type = "warning";
			this.text = text;
			if (opts.node && opts.node.source) {
				var range = opts.node.rangeBy(opts);
				this.line = range.start.line;
				this.column = range.start.column;
				this.endLine = range.end.line;
				this.endColumn = range.end.column;
			}
			for (var opt in opts) this[opt] = opts[opt];
		}
		var _proto = Warning.prototype;
		_proto.toString = function toString() {
			if (this.node) return this.node.error(this.text, {
				index: this.index,
				plugin: this.plugin,
				word: this.word
			}).message;
			if (this.plugin) return this.plugin + ": " + this.text;
			return this.text;
		};
		return Warning;
	}();
	var warning$1 = Warning$2$1;
	Warning$2$1.default = Warning$2$1;
	var Warning$1$1 = warning$1;
	var Result$3$1 = /*#__PURE__*/ function() {
		function Result(processor2, root2, opts) {
			this.processor = processor2;
			this.messages = [];
			this.root = root2;
			this.opts = opts;
			this.css = void 0;
			this.map = void 0;
		}
		var _proto = Result.prototype;
		_proto.toString = function toString() {
			return this.css;
		};
		_proto.warn = function warn(text, opts) {
			if (opts === void 0) opts = {};
			if (!opts.plugin) {
				if (this.lastPlugin && this.lastPlugin.postcssPlugin) opts.plugin = this.lastPlugin.postcssPlugin;
			}
			var warning2 = new Warning$1$1(text, opts);
			this.messages.push(warning2);
			return warning2;
		};
		_proto.warnings = function warnings() {
			return this.messages.filter(function(i2) {
				return i2.type === "warning";
			});
		};
		_create_class(Result, [{
			key: "content",
			get: function get() {
				return this.css;
			}
		}]);
		return Result;
	}();
	var result$1 = Result$3$1;
	Result$3$1.default = Result$3$1;
	var SINGLE_QUOTE$1 = "'".charCodeAt(0);
	var DOUBLE_QUOTE$1 = "\"".charCodeAt(0);
	var BACKSLASH$1 = "\\".charCodeAt(0);
	var SLASH$1 = "/".charCodeAt(0);
	var NEWLINE$1 = "\n".charCodeAt(0);
	var SPACE$1 = " ".charCodeAt(0);
	var FEED$1 = "\f".charCodeAt(0);
	var TAB$1 = "	".charCodeAt(0);
	var CR$1 = "\r".charCodeAt(0);
	var OPEN_SQUARE$1 = "[".charCodeAt(0);
	var CLOSE_SQUARE$1 = "]".charCodeAt(0);
	var OPEN_PARENTHESES$1 = "(".charCodeAt(0);
	var CLOSE_PARENTHESES$1 = ")".charCodeAt(0);
	var OPEN_CURLY$1 = "{".charCodeAt(0);
	var CLOSE_CURLY$1 = "}".charCodeAt(0);
	var SEMICOLON$1 = ";".charCodeAt(0);
	var ASTERISK$1 = "*".charCodeAt(0);
	var COLON$1 = ":".charCodeAt(0);
	var AT$1 = "@".charCodeAt(0);
	var RE_AT_END$1 = /[\t\n\f\r "#'()/;[\\\]{}]/g;
	var RE_WORD_END$1 = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
	var RE_BAD_BRACKET$1 = /.[\r\n"'(/\\]/;
	var RE_HEX_ESCAPE$1 = /[\da-f]/i;
	var tokenize$1 = function tokenizer(input2, options) {
		if (options === void 0) options = {};
		var css = input2.css.valueOf();
		var ignore = options.ignoreErrors;
		var code;
		var next;
		var quote;
		var content;
		var escape;
		var escaped;
		var escapePos;
		var prev;
		var n2;
		var currentToken;
		var length = css.length;
		var pos = 0;
		var buffer = [];
		var returned = [];
		function position() {
			return pos;
		}
		function unclosed(what) {
			throw input2.error("Unclosed " + what, pos);
		}
		function endOfFile() {
			return returned.length === 0 && pos >= length;
		}
		function nextToken(opts) {
			if (returned.length) return returned.pop();
			if (pos >= length) return;
			var ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
			code = css.charCodeAt(pos);
			switch (code) {
				case NEWLINE$1:
				case SPACE$1:
				case TAB$1:
				case CR$1:
				case FEED$1:
					next = pos;
					do {
						next += 1;
						code = css.charCodeAt(next);
					} while (code === SPACE$1 || code === NEWLINE$1 || code === TAB$1 || code === CR$1 || code === FEED$1);
					currentToken = ["space", css.slice(pos, next)];
					pos = next - 1;
					break;
				case OPEN_SQUARE$1:
				case CLOSE_SQUARE$1:
				case OPEN_CURLY$1:
				case CLOSE_CURLY$1:
				case COLON$1:
				case SEMICOLON$1:
				case CLOSE_PARENTHESES$1:
					var controlChar = String.fromCharCode(code);
					currentToken = [
						controlChar,
						controlChar,
						pos
					];
					break;
				case OPEN_PARENTHESES$1:
					prev = buffer.length ? buffer.pop()[1] : "";
					n2 = css.charCodeAt(pos + 1);
					if (prev === "url" && n2 !== SINGLE_QUOTE$1 && n2 !== DOUBLE_QUOTE$1 && n2 !== SPACE$1 && n2 !== NEWLINE$1 && n2 !== TAB$1 && n2 !== FEED$1 && n2 !== CR$1) {
						next = pos;
						do {
							escaped = false;
							next = css.indexOf(")", next + 1);
							if (next === -1) if (ignore || ignoreUnclosed) {
								next = pos;
								break;
							} else unclosed("bracket");
							escapePos = next;
							while (css.charCodeAt(escapePos - 1) === BACKSLASH$1) {
								escapePos -= 1;
								escaped = !escaped;
							}
						} while (escaped);
						currentToken = [
							"brackets",
							css.slice(pos, next + 1),
							pos,
							next
						];
						pos = next;
					} else {
						next = css.indexOf(")", pos + 1);
						content = css.slice(pos, next + 1);
						if (next === -1 || RE_BAD_BRACKET$1.test(content)) currentToken = [
							"(",
							"(",
							pos
						];
						else {
							currentToken = [
								"brackets",
								content,
								pos,
								next
							];
							pos = next;
						}
					}
					break;
				case SINGLE_QUOTE$1:
				case DOUBLE_QUOTE$1:
					quote = code === SINGLE_QUOTE$1 ? "'" : "\"";
					next = pos;
					do {
						escaped = false;
						next = css.indexOf(quote, next + 1);
						if (next === -1) if (ignore || ignoreUnclosed) {
							next = pos + 1;
							break;
						} else unclosed("string");
						escapePos = next;
						while (css.charCodeAt(escapePos - 1) === BACKSLASH$1) {
							escapePos -= 1;
							escaped = !escaped;
						}
					} while (escaped);
					currentToken = [
						"string",
						css.slice(pos, next + 1),
						pos,
						next
					];
					pos = next;
					break;
				case AT$1:
					RE_AT_END$1.lastIndex = pos + 1;
					RE_AT_END$1.test(css);
					if (RE_AT_END$1.lastIndex === 0) next = css.length - 1;
					else next = RE_AT_END$1.lastIndex - 2;
					currentToken = [
						"at-word",
						css.slice(pos, next + 1),
						pos,
						next
					];
					pos = next;
					break;
				case BACKSLASH$1:
					next = pos;
					escape = true;
					while (css.charCodeAt(next + 1) === BACKSLASH$1) {
						next += 1;
						escape = !escape;
					}
					code = css.charCodeAt(next + 1);
					if (escape && code !== SLASH$1 && code !== SPACE$1 && code !== NEWLINE$1 && code !== TAB$1 && code !== CR$1 && code !== FEED$1) {
						next += 1;
						if (RE_HEX_ESCAPE$1.test(css.charAt(next))) {
							while (RE_HEX_ESCAPE$1.test(css.charAt(next + 1))) next += 1;
							if (css.charCodeAt(next + 1) === SPACE$1) next += 1;
						}
					}
					currentToken = [
						"word",
						css.slice(pos, next + 1),
						pos,
						next
					];
					pos = next;
					break;
				default:
					if (code === SLASH$1 && css.charCodeAt(pos + 1) === ASTERISK$1) {
						next = css.indexOf("*/", pos + 2) + 1;
						if (next === 0) if (ignore || ignoreUnclosed) next = css.length;
						else unclosed("comment");
						currentToken = [
							"comment",
							css.slice(pos, next + 1),
							pos,
							next
						];
						pos = next;
					} else {
						RE_WORD_END$1.lastIndex = pos + 1;
						RE_WORD_END$1.test(css);
						if (RE_WORD_END$1.lastIndex === 0) next = css.length - 1;
						else next = RE_WORD_END$1.lastIndex - 2;
						currentToken = [
							"word",
							css.slice(pos, next + 1),
							pos,
							next
						];
						buffer.push(currentToken);
						pos = next;
					}
					break;
			}
			pos++;
			return currentToken;
		}
		function back(token) {
			returned.push(token);
		}
		return {
			back,
			endOfFile,
			nextToken,
			position
		};
	};
	var Container$5$1 = container$1;
	var AtRule$3$1 = /*#__PURE__*/ function(Container$5$1) {
		_inherits(AtRule, Container$5$1);
		function AtRule(defaults) {
			var _this = Container$5$1.call(this, defaults) || this;
			_this.type = "atrule";
			return _this;
		}
		var _proto = AtRule.prototype;
		_proto.append = function append() {
			for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) children[_key] = arguments[_key];
			var _Container$5$1_prototype_append;
			if (!this.proxyOf.nodes) this.nodes = [];
			return (_Container$5$1_prototype_append = Container$5$1.prototype.append).call.apply(_Container$5$1_prototype_append, [].concat([this], children));
		};
		_proto.prepend = function prepend() {
			for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) children[_key] = arguments[_key];
			var _Container$5$1_prototype_prepend;
			if (!this.proxyOf.nodes) this.nodes = [];
			return (_Container$5$1_prototype_prepend = Container$5$1.prototype.prepend).call.apply(_Container$5$1_prototype_prepend, [].concat([this], children));
		};
		return AtRule;
	}(Container$5$1);
	var atRule$1 = AtRule$3$1;
	AtRule$3$1.default = AtRule$3$1;
	Container$5$1.registerAtRule(AtRule$3$1);
	var Container$4$1 = container$1;
	var LazyResult$3$1;
	var Processor$2$1;
	var Root$5$1 = /*#__PURE__*/ function(Container$4$1) {
		_inherits(Root, Container$4$1);
		function Root(defaults) {
			var _this = Container$4$1.call(this, defaults) || this;
			_this.type = "root";
			if (!_this.nodes) _this.nodes = [];
			return _this;
		}
		var _proto = Root.prototype;
		_proto.normalize = function normalize(child, sample, type) {
			var nodes = Container$4$1.prototype.normalize.call(this, child);
			if (sample) {
				if (type === "prepend") if (this.nodes.length > 1) sample.raws.before = this.nodes[1].raws.before;
				else delete sample.raws.before;
				else if (this.first !== sample) for (var _iterator = _create_for_of_iterator_helper_loose(nodes), _step; !(_step = _iterator()).done;) {
					var node2 = _step.value;
					node2.raws.before = sample.raws.before;
				}
			}
			return nodes;
		};
		_proto.removeChild = function removeChild(child, ignore) {
			var index2 = this.index(child);
			if (!ignore && index2 === 0 && this.nodes.length > 1) this.nodes[1].raws.before = this.nodes[index2].raws.before;
			return Container$4$1.prototype.removeChild.call(this, child);
		};
		_proto.toResult = function toResult(opts) {
			if (opts === void 0) opts = {};
			return new LazyResult$3$1(new Processor$2$1(), this, opts).stringify();
		};
		return Root;
	}(Container$4$1);
	Root$5$1.registerLazyResult = function(dependant) {
		LazyResult$3$1 = dependant;
	};
	Root$5$1.registerProcessor = function(dependant) {
		Processor$2$1 = dependant;
	};
	var root$1 = Root$5$1;
	Root$5$1.default = Root$5$1;
	Container$4$1.registerRoot(Root$5$1);
	var list$2$1 = {
		comma: function comma(string) {
			return list$2$1.split(string, [","], true);
		},
		space: function space(string) {
			return list$2$1.split(string, [
				" ",
				"\n",
				"	"
			]);
		},
		split: function split(string, separators, last) {
			var array = [];
			var current = "";
			var split = false;
			var func = 0;
			var inQuote = false;
			var prevQuote = "";
			var escape = false;
			for (var _iterator = _create_for_of_iterator_helper_loose(string), _step; !(_step = _iterator()).done;) {
				var letter = _step.value;
				if (escape) escape = false;
				else if (letter === "\\") escape = true;
				else if (inQuote) {
					if (letter === prevQuote) inQuote = false;
				} else if (letter === "\"" || letter === "'") {
					inQuote = true;
					prevQuote = letter;
				} else if (letter === "(") func += 1;
				else if (letter === ")") {
					if (func > 0) func -= 1;
				} else if (func === 0) {
					if (separators.includes(letter)) split = true;
				}
				if (split) {
					if (current !== "") array.push(current.trim());
					current = "";
					split = false;
				} else current += letter;
			}
			if (last || current !== "") array.push(current.trim());
			return array;
		}
	};
	var list_1$1 = list$2$1;
	list$2$1.default = list$2$1;
	var Container$3$1 = container$1;
	var list$1$1 = list_1$1;
	var Rule$3$1 = /*#__PURE__*/ function(Container$3$1) {
		_inherits(Rule, Container$3$1);
		function Rule(defaults) {
			var _this = Container$3$1.call(this, defaults) || this;
			_this.type = "rule";
			if (!_this.nodes) _this.nodes = [];
			return _this;
		}
		_create_class(Rule, [{
			key: "selectors",
			get: function get() {
				return list$1$1.comma(this.selector);
			},
			set: function set(values) {
				var match = this.selector ? this.selector.match(/,\s*/) : null;
				var sep2 = match ? match[0] : "," + this.raw("between", "beforeOpen");
				this.selector = values.join(sep2);
			}
		}]);
		return Rule;
	}(Container$3$1);
	var rule$1 = Rule$3$1;
	Rule$3$1.default = Rule$3$1;
	Container$3$1.registerRule(Rule$3$1);
	var Declaration$2$1 = declaration$1;
	var tokenizer2$1 = tokenize$1;
	var Comment$2$1 = comment$1;
	var AtRule$2$1 = atRule$1;
	var Root$4$1 = root$1;
	var Rule$2$1 = rule$1;
	var SAFE_COMMENT_NEIGHBOR$1 = {
		empty: true,
		space: true
	};
	function findLastWithPosition$1(tokens) {
		for (var i2 = tokens.length - 1; i2 >= 0; i2--) {
			var token = tokens[i2];
			var pos = token[3] || token[2];
			if (pos) return pos;
		}
	}
	var parser$1 = /* @__PURE__ */ function() {
		function Parser(input2) {
			this.input = input2;
			this.root = new Root$4$1();
			this.current = this.root;
			this.spaces = "";
			this.semicolon = false;
			this.createTokenizer();
			this.root.source = {
				input: input2,
				start: {
					column: 1,
					line: 1,
					offset: 0
				}
			};
		}
		var _proto = Parser.prototype;
		_proto.atrule = function atrule(token) {
			var node2 = new AtRule$2$1();
			node2.name = token[1].slice(1);
			if (node2.name === "") this.unnamedAtrule(node2, token);
			this.init(node2, token[2]);
			var type;
			var prev;
			var shift;
			var last = false;
			var open = false;
			var params = [];
			var brackets = [];
			while (!this.tokenizer.endOfFile()) {
				token = this.tokenizer.nextToken();
				type = token[0];
				if (type === "(" || type === "[") brackets.push(type === "(" ? ")" : "]");
				else if (type === "{" && brackets.length > 0) brackets.push("}");
				else if (type === brackets[brackets.length - 1]) brackets.pop();
				if (brackets.length === 0) if (type === ";") {
					node2.source.end = this.getPosition(token[2]);
					node2.source.end.offset++;
					this.semicolon = true;
					break;
				} else if (type === "{") {
					open = true;
					break;
				} else if (type === "}") {
					if (params.length > 0) {
						shift = params.length - 1;
						prev = params[shift];
						while (prev && prev[0] === "space") prev = params[--shift];
						if (prev) {
							node2.source.end = this.getPosition(prev[3] || prev[2]);
							node2.source.end.offset++;
						}
					}
					this.end(token);
					break;
				} else params.push(token);
				else params.push(token);
				if (this.tokenizer.endOfFile()) {
					last = true;
					break;
				}
			}
			node2.raws.between = this.spacesAndCommentsFromEnd(params);
			if (params.length) {
				node2.raws.afterName = this.spacesAndCommentsFromStart(params);
				this.raw(node2, "params", params);
				if (last) {
					token = params[params.length - 1];
					node2.source.end = this.getPosition(token[3] || token[2]);
					node2.source.end.offset++;
					this.spaces = node2.raws.between;
					node2.raws.between = "";
				}
			} else {
				node2.raws.afterName = "";
				node2.params = "";
			}
			if (open) {
				node2.nodes = [];
				this.current = node2;
			}
		};
		_proto.checkMissedSemicolon = function checkMissedSemicolon(tokens) {
			var colon = this.colon(tokens);
			if (colon === false) return;
			var founded = 0;
			var token;
			for (var j = colon - 1; j >= 0; j--) {
				token = tokens[j];
				if (token[0] !== "space") {
					founded += 1;
					if (founded === 2) break;
				}
			}
			throw this.input.error("Missed semicolon", token[0] === "word" ? token[3] + 1 : token[2]);
		};
		_proto.colon = function colon(tokens) {
			var brackets = 0;
			var token;
			var type;
			var prev;
			for (var _iterator = _create_for_of_iterator_helper_loose(tokens.entries()), _step; !(_step = _iterator()).done;) {
				var _step_value = _step.value;
				var i2 = _step_value[0];
				token = _step_value[1];
				type = token[0];
				if (type === "(") brackets += 1;
				if (type === ")") brackets -= 1;
				if (brackets === 0 && type === ":") if (!prev) this.doubleColon(token);
				else if (prev[0] === "word" && prev[1] === "progid") continue;
				else return i2;
				prev = token;
			}
			return false;
		};
		_proto.comment = function comment(token) {
			var node2 = new Comment$2$1();
			this.init(node2, token[2]);
			node2.source.end = this.getPosition(token[3] || token[2]);
			node2.source.end.offset++;
			var text = token[1].slice(2, -2);
			if (/^\s*$/.test(text)) {
				node2.text = "";
				node2.raws.left = text;
				node2.raws.right = "";
			} else {
				var match = text.match(/^(\s*)([^]*\S)(\s*)$/);
				node2.text = match[2];
				node2.raws.left = match[1];
				node2.raws.right = match[3];
			}
		};
		_proto.createTokenizer = function createTokenizer() {
			this.tokenizer = tokenizer2$1(this.input);
		};
		_proto.decl = function decl(tokens, customProperty) {
			var node2 = new Declaration$2$1();
			this.init(node2, tokens[0][2]);
			var last = tokens[tokens.length - 1];
			if (last[0] === ";") {
				this.semicolon = true;
				tokens.pop();
			}
			node2.source.end = this.getPosition(last[3] || last[2] || findLastWithPosition$1(tokens));
			node2.source.end.offset++;
			while (tokens[0][0] !== "word") {
				if (tokens.length === 1) this.unknownWord(tokens);
				node2.raws.before += tokens.shift()[1];
			}
			node2.source.start = this.getPosition(tokens[0][2]);
			node2.prop = "";
			while (tokens.length) {
				var type = tokens[0][0];
				if (type === ":" || type === "space" || type === "comment") break;
				node2.prop += tokens.shift()[1];
			}
			node2.raws.between = "";
			var token;
			while (tokens.length) {
				token = tokens.shift();
				if (token[0] === ":") {
					node2.raws.between += token[1];
					break;
				} else {
					if (token[0] === "word" && /\w/.test(token[1])) this.unknownWord([token]);
					node2.raws.between += token[1];
				}
			}
			if (node2.prop[0] === "_" || node2.prop[0] === "*") {
				node2.raws.before += node2.prop[0];
				node2.prop = node2.prop.slice(1);
			}
			var firstSpaces = [];
			var next;
			while (tokens.length) {
				next = tokens[0][0];
				if (next !== "space" && next !== "comment") break;
				firstSpaces.push(tokens.shift());
			}
			this.precheckMissedSemicolon(tokens);
			for (var i2 = tokens.length - 1; i2 >= 0; i2--) {
				token = tokens[i2];
				if (token[1].toLowerCase() === "!important") {
					node2.important = true;
					var string = this.stringFrom(tokens, i2);
					string = this.spacesFromEnd(tokens) + string;
					if (string !== " !important") node2.raws.important = string;
					break;
				} else if (token[1].toLowerCase() === "important") {
					var cache = tokens.slice(0);
					var str = "";
					for (var j = i2; j > 0; j--) {
						var type1 = cache[j][0];
						if (str.trim().indexOf("!") === 0 && type1 !== "space") break;
						str = cache.pop()[1] + str;
					}
					if (str.trim().indexOf("!") === 0) {
						node2.important = true;
						node2.raws.important = str;
						tokens = cache;
					}
				}
				if (token[0] !== "space" && token[0] !== "comment") break;
			}
			if (tokens.some(function(i2) {
				return i2[0] !== "space" && i2[0] !== "comment";
			})) {
				node2.raws.between += firstSpaces.map(function(i2) {
					return i2[1];
				}).join("");
				firstSpaces = [];
			}
			this.raw(node2, "value", firstSpaces.concat(tokens), customProperty);
			if (node2.value.includes(":") && !customProperty) this.checkMissedSemicolon(tokens);
		};
		_proto.doubleColon = function doubleColon(token) {
			throw this.input.error("Double colon", { offset: token[2] }, { offset: token[2] + token[1].length });
		};
		_proto.emptyRule = function emptyRule(token) {
			var node2 = new Rule$2$1();
			this.init(node2, token[2]);
			node2.selector = "";
			node2.raws.between = "";
			this.current = node2;
		};
		_proto.end = function end(token) {
			if (this.current.nodes && this.current.nodes.length) this.current.raws.semicolon = this.semicolon;
			this.semicolon = false;
			this.current.raws.after = (this.current.raws.after || "") + this.spaces;
			this.spaces = "";
			if (this.current.parent) {
				this.current.source.end = this.getPosition(token[2]);
				this.current.source.end.offset++;
				this.current = this.current.parent;
			} else this.unexpectedClose(token);
		};
		_proto.endFile = function endFile() {
			if (this.current.parent) this.unclosedBlock();
			if (this.current.nodes && this.current.nodes.length) this.current.raws.semicolon = this.semicolon;
			this.current.raws.after = (this.current.raws.after || "") + this.spaces;
			this.root.source.end = this.getPosition(this.tokenizer.position());
		};
		_proto.freeSemicolon = function freeSemicolon(token) {
			this.spaces += token[1];
			if (this.current.nodes) {
				var prev = this.current.nodes[this.current.nodes.length - 1];
				if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
					prev.raws.ownSemicolon = this.spaces;
					this.spaces = "";
				}
			}
		};
		_proto.getPosition = function getPosition(offset) {
			var pos = this.input.fromOffset(offset);
			return {
				column: pos.col,
				line: pos.line,
				offset
			};
		};
		_proto.init = function init(node2, offset) {
			this.current.push(node2);
			node2.source = {
				input: this.input,
				start: this.getPosition(offset)
			};
			node2.raws.before = this.spaces;
			this.spaces = "";
			if (node2.type !== "comment") this.semicolon = false;
		};
		_proto.other = function other(start) {
			var end = false;
			var type = null;
			var colon = false;
			var bracket = null;
			var brackets = [];
			var customProperty = start[1].startsWith("--");
			var tokens = [];
			var token = start;
			while (token) {
				type = token[0];
				tokens.push(token);
				if (type === "(" || type === "[") {
					if (!bracket) bracket = token;
					brackets.push(type === "(" ? ")" : "]");
				} else if (customProperty && colon && type === "{") {
					if (!bracket) bracket = token;
					brackets.push("}");
				} else if (brackets.length === 0) {
					if (type === ";") if (colon) {
						this.decl(tokens, customProperty);
						return;
					} else break;
					else if (type === "{") {
						this.rule(tokens);
						return;
					} else if (type === "}") {
						this.tokenizer.back(tokens.pop());
						end = true;
						break;
					} else if (type === ":") colon = true;
				} else if (type === brackets[brackets.length - 1]) {
					brackets.pop();
					if (brackets.length === 0) bracket = null;
				}
				token = this.tokenizer.nextToken();
			}
			if (this.tokenizer.endOfFile()) end = true;
			if (brackets.length > 0) this.unclosedBracket(bracket);
			if (end && colon) {
				if (!customProperty) while (tokens.length) {
					token = tokens[tokens.length - 1][0];
					if (token !== "space" && token !== "comment") break;
					this.tokenizer.back(tokens.pop());
				}
				this.decl(tokens, customProperty);
			} else this.unknownWord(tokens);
		};
		_proto.parse = function parse() {
			var token;
			while (!this.tokenizer.endOfFile()) {
				token = this.tokenizer.nextToken();
				switch (token[0]) {
					case "space":
						this.spaces += token[1];
						break;
					case ";":
						this.freeSemicolon(token);
						break;
					case "}":
						this.end(token);
						break;
					case "comment":
						this.comment(token);
						break;
					case "at-word":
						this.atrule(token);
						break;
					case "{":
						this.emptyRule(token);
						break;
					default:
						this.other(token);
						break;
				}
			}
			this.endFile();
		};
		_proto.precheckMissedSemicolon = function precheckMissedSemicolon() {};
		_proto.raw = function raw(node2, prop, tokens, customProperty) {
			var token;
			var type;
			var length = tokens.length;
			var value = "";
			var clean = true;
			var next;
			var prev;
			for (var i2 = 0; i2 < length; i2 += 1) {
				token = tokens[i2];
				type = token[0];
				if (type === "space" && i2 === length - 1 && !customProperty) clean = false;
				else if (type === "comment") {
					prev = tokens[i2 - 1] ? tokens[i2 - 1][0] : "empty";
					next = tokens[i2 + 1] ? tokens[i2 + 1][0] : "empty";
					if (!SAFE_COMMENT_NEIGHBOR$1[prev] && !SAFE_COMMENT_NEIGHBOR$1[next]) if (value.slice(-1) === ",") clean = false;
					else value += token[1];
					else clean = false;
				} else value += token[1];
			}
			if (!clean) {
				var raw = tokens.reduce(function(all, i2) {
					return all + i2[1];
				}, "");
				node2.raws[prop] = {
					raw,
					value
				};
			}
			node2[prop] = value;
		};
		_proto.rule = function rule(tokens) {
			tokens.pop();
			var node2 = new Rule$2$1();
			this.init(node2, tokens[0][2]);
			node2.raws.between = this.spacesAndCommentsFromEnd(tokens);
			this.raw(node2, "selector", tokens);
			this.current = node2;
		};
		_proto.spacesAndCommentsFromEnd = function spacesAndCommentsFromEnd(tokens) {
			var lastTokenType;
			var spaces = "";
			while (tokens.length) {
				lastTokenType = tokens[tokens.length - 1][0];
				if (lastTokenType !== "space" && lastTokenType !== "comment") break;
				spaces = tokens.pop()[1] + spaces;
			}
			return spaces;
		};
		_proto.spacesAndCommentsFromStart = function spacesAndCommentsFromStart(tokens) {
			var next;
			var spaces = "";
			while (tokens.length) {
				next = tokens[0][0];
				if (next !== "space" && next !== "comment") break;
				spaces += tokens.shift()[1];
			}
			return spaces;
		};
		_proto.spacesFromEnd = function spacesFromEnd(tokens) {
			var lastTokenType;
			var spaces = "";
			while (tokens.length) {
				lastTokenType = tokens[tokens.length - 1][0];
				if (lastTokenType !== "space") break;
				spaces = tokens.pop()[1] + spaces;
			}
			return spaces;
		};
		_proto.stringFrom = function stringFrom(tokens, from) {
			var result2 = "";
			for (var i2 = from; i2 < tokens.length; i2++) result2 += tokens[i2][1];
			tokens.splice(from, tokens.length - from);
			return result2;
		};
		_proto.unclosedBlock = function unclosedBlock() {
			var pos = this.current.source.start;
			throw this.input.error("Unclosed block", pos.line, pos.column);
		};
		_proto.unclosedBracket = function unclosedBracket(bracket) {
			throw this.input.error("Unclosed bracket", { offset: bracket[2] }, { offset: bracket[2] + 1 });
		};
		_proto.unexpectedClose = function unexpectedClose(token) {
			throw this.input.error("Unexpected }", { offset: token[2] }, { offset: token[2] + 1 });
		};
		_proto.unknownWord = function unknownWord(tokens) {
			throw this.input.error("Unknown word", { offset: tokens[0][2] }, { offset: tokens[0][2] + tokens[0][1].length });
		};
		_proto.unnamedAtrule = function unnamedAtrule(node2, token) {
			throw this.input.error("At-rule without name", { offset: token[2] }, { offset: token[2] + token[1].length });
		};
		return Parser;
	}();
	var Container$2$1 = container$1;
	var Parser2$1 = parser$1;
	var Input$2$1 = input$1;
	function parse$3$1(css, opts) {
		var parser2 = new Parser2$1(new Input$2$1(css, opts));
		try {
			parser2.parse();
		} catch (e2) {
			if (e2.name === "CssSyntaxError" && opts && opts.from) {
				if (/\.scss$/i.test(opts.from)) e2.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
				else if (/\.sass/i.test(opts.from)) e2.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
				else if (/\.less$/i.test(opts.from)) e2.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
			}
			throw e2;
		}
		return parser2.root;
	}
	var parse_1$1 = parse$3$1;
	parse$3$1.default = parse$3$1;
	Container$2$1.registerParse(parse$3$1);
	var isClean$3 = symbols$1.isClean;
	var my$3 = symbols$1.my;
	var MapGenerator$1$1 = mapGenerator$1;
	var stringify$2$1 = stringify_1$1;
	var Container$1$1 = container$1;
	var Document$2$1 = document$1$1;
	var warnOnce$1$1 = warnOnce$2$1;
	var Result$2$1 = result$1;
	var parse$2$1 = parse_1$1;
	var Root$3$1 = root$1;
	var TYPE_TO_CLASS_NAME$1 = {
		atrule: "AtRule",
		comment: "Comment",
		decl: "Declaration",
		document: "Document",
		root: "Root",
		rule: "Rule"
	};
	var PLUGIN_PROPS$1 = {
		AtRule: true,
		AtRuleExit: true,
		Comment: true,
		CommentExit: true,
		Declaration: true,
		DeclarationExit: true,
		Document: true,
		DocumentExit: true,
		Once: true,
		OnceExit: true,
		postcssPlugin: true,
		prepare: true,
		Root: true,
		RootExit: true,
		Rule: true,
		RuleExit: true
	};
	var NOT_VISITORS$1 = {
		Once: true,
		postcssPlugin: true,
		prepare: true
	};
	var CHILDREN$1 = 0;
	function isPromise$1(obj) {
		return (typeof obj === "undefined" ? "undefined" : _type_of(obj)) === "object" && typeof obj.then === "function";
	}
	function getEvents$1(node2) {
		var key = false;
		var type = TYPE_TO_CLASS_NAME$1[node2.type];
		if (node2.type === "decl") key = node2.prop.toLowerCase();
		else if (node2.type === "atrule") key = node2.name.toLowerCase();
		if (key && node2.append) return [
			type,
			type + "-" + key,
			CHILDREN$1,
			type + "Exit",
			type + "Exit-" + key
		];
		else if (key) return [
			type,
			type + "-" + key,
			type + "Exit",
			type + "Exit-" + key
		];
		else if (node2.append) return [
			type,
			CHILDREN$1,
			type + "Exit"
		];
		else return [type, type + "Exit"];
	}
	function toStack$1(node2) {
		var events;
		if (node2.type === "document") events = [
			"Document",
			CHILDREN$1,
			"DocumentExit"
		];
		else if (node2.type === "root") events = [
			"Root",
			CHILDREN$1,
			"RootExit"
		];
		else events = getEvents$1(node2);
		return {
			eventIndex: 0,
			events,
			iterator: 0,
			node: node2,
			visitorIndex: 0,
			visitors: []
		};
	}
	function cleanMarks$1(node2) {
		node2[isClean$3] = false;
		if (node2.nodes) node2.nodes.forEach(function(i2) {
			return cleanMarks$1(i2);
		});
		return node2;
	}
	var postcss$2$1 = {};
	var LazyResult$2$1 = /*#__PURE__*/ function() {
		function LazyResult(processor2, css, opts) {
			var _this = this;
			this.stringified = false;
			this.processed = false;
			var root2;
			if ((typeof css === "undefined" ? "undefined" : _type_of(css)) === "object" && css !== null && (css.type === "root" || css.type === "document")) root2 = cleanMarks$1(css);
			else if (_instanceof(css, LazyResult) || _instanceof(css, Result$2$1)) {
				root2 = cleanMarks$1(css.root);
				if (css.map) {
					if (typeof opts.map === "undefined") opts.map = {};
					if (!opts.map.inline) opts.map.inline = false;
					opts.map.prev = css.map;
				}
			} else {
				var parser2 = parse$2$1;
				if (opts.syntax) parser2 = opts.syntax.parse;
				if (opts.parser) parser2 = opts.parser;
				if (parser2.parse) parser2 = parser2.parse;
				try {
					root2 = parser2(css, opts);
				} catch (error) {
					this.processed = true;
					this.error = error;
				}
				if (root2 && !root2[my$3]) Container$1$1.rebuild(root2);
			}
			this.result = new Result$2$1(processor2, root2, opts);
			this.helpers = _extends({}, postcss$2$1, {
				postcss: postcss$2$1,
				result: this.result
			});
			this.plugins = this.processor.plugins.map(function(plugin22) {
				if ((typeof plugin22 === "undefined" ? "undefined" : _type_of(plugin22)) === "object" && plugin22.prepare) return _extends({}, plugin22, plugin22.prepare(_this.result));
				else return plugin22;
			});
		}
		var _proto = LazyResult.prototype;
		_proto.async = function async() {
			if (this.error) return Promise.reject(this.error);
			if (this.processed) return Promise.resolve(this.result);
			if (!this.processing) this.processing = this.runAsync();
			return this.processing;
		};
		_proto.catch = function _catch(onRejected) {
			return this.async().catch(onRejected);
		};
		_proto.finally = function _finally(onFinally) {
			return this.async().then(onFinally, onFinally);
		};
		_proto.getAsyncError = function getAsyncError() {
			throw new Error("Use process(css).then(cb) to work with async plugins");
		};
		_proto.handleError = function handleError(error, node2) {
			var plugin22 = this.result.lastPlugin;
			try {
				if (node2) node2.addToError(error);
				this.error = error;
				if (error.name === "CssSyntaxError" && !error.plugin) {
					error.plugin = plugin22.postcssPlugin;
					error.setMessage();
				} else if (plugin22.postcssVersion) {
					var pluginName = plugin22.postcssPlugin;
					var pluginVer = plugin22.postcssVersion;
					var runtimeVer = this.result.processor.version;
					var a2 = pluginVer.split(".");
					var b = runtimeVer.split(".");
					if (a2[0] !== b[0] || parseInt(a2[1]) > parseInt(b[1])) console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below.");
				}
			} catch (err) {
				if (console && console.error) console.error(err);
			}
			return error;
		};
		_proto.prepareVisitors = function prepareVisitors() {
			var _this = this;
			this.listeners = {};
			var add = function(plugin22, type, cb) {
				if (!_this.listeners[type]) _this.listeners[type] = [];
				_this.listeners[type].push([plugin22, cb]);
			};
			for (var _iterator = _create_for_of_iterator_helper_loose(this.plugins), _step; !(_step = _iterator()).done;) {
				var plugin22 = _step.value;
				if ((typeof plugin22 === "undefined" ? "undefined" : _type_of(plugin22)) === "object") for (var event in plugin22) {
					if (!PLUGIN_PROPS$1[event] && /^[A-Z]/.test(event)) throw new Error("Unknown event " + event + " in " + plugin22.postcssPlugin + ". Try to update PostCSS (" + this.processor.version + " now).");
					if (!NOT_VISITORS$1[event]) {
						if (_type_of(plugin22[event]) === "object") for (var filter in plugin22[event]) if (filter === "*") add(plugin22, event, plugin22[event][filter]);
						else add(plugin22, event + "-" + filter.toLowerCase(), plugin22[event][filter]);
						else if (typeof plugin22[event] === "function") add(plugin22, event, plugin22[event]);
					}
				}
			}
			this.hasListener = Object.keys(this.listeners).length > 0;
		};
		_proto.runAsync = function runAsync() {
			var _this = this;
			return _async_to_generator(function() {
				var i2;
				var plugin22;
				var promise;
				var error;
				var root2;
				var stack;
				var promise1;
				var e2;
				var node2;
				var _loop;
				var _iterator;
				var _step;
				return _ts_generator(this, function(_state) {
					switch (_state.label) {
						case 0:
							_this.plugin = 0;
							i2 = 0;
							_state.label = 1;
						case 1:
							if (!(i2 < _this.plugins.length)) return [3, 6];
							plugin22 = _this.plugins[i2];
							promise = _this.runOnRoot(plugin22);
							if (!isPromise$1(promise)) return [3, 5];
							_state.label = 2;
						case 2:
							_state.trys.push([
								2,
								4,
								,
								5
							]);
							return [4, promise];
						case 3:
							_state.sent();
							return [3, 5];
						case 4:
							error = _state.sent();
							throw _this.handleError(error);
						case 5:
							i2++;
							return [3, 1];
						case 6:
							_this.prepareVisitors();
							if (!_this.hasListener) return [3, 18];
							root2 = _this.result.root;
							_state.label = 7;
						case 7:
							if (!!root2[isClean$3]) return [3, 14];
							root2[isClean$3] = true;
							stack = [toStack$1(root2)];
							_state.label = 8;
						case 8:
							if (!(stack.length > 0)) return [3, 13];
							promise1 = _this.visitTick(stack);
							if (!isPromise$1(promise1)) return [3, 12];
							_state.label = 9;
						case 9:
							_state.trys.push([
								9,
								11,
								,
								12
							]);
							return [4, promise1];
						case 10:
							_state.sent();
							return [3, 12];
						case 11:
							e2 = _state.sent();
							node2 = stack[stack.length - 1].node;
							throw _this.handleError(e2, node2);
						case 12: return [3, 8];
						case 13: return [3, 7];
						case 14:
							if (!_this.listeners.OnceExit) return [3, 18];
							_loop = function() {
								var _step_value;
								var plugin22;
								var visitor;
								var roots;
								var e2;
								return _ts_generator(this, function(_state) {
									switch (_state.label) {
										case 0:
											_step_value = _step.value, plugin22 = _step_value[0], visitor = _step_value[1];
											_this.result.lastPlugin = plugin22;
											_state.label = 1;
										case 1:
											_state.trys.push([
												1,
												6,
												,
												7
											]);
											if (!(root2.type === "document")) return [3, 3];
											roots = root2.nodes.map(function(subRoot) {
												return visitor(subRoot, _this.helpers);
											});
											return [4, Promise.all(roots)];
										case 2:
											_state.sent();
											return [3, 5];
										case 3: return [4, visitor(root2, _this.helpers)];
										case 4:
											_state.sent();
											_state.label = 5;
										case 5: return [3, 7];
										case 6:
											e2 = _state.sent();
											throw _this.handleError(e2);
										case 7: return [2];
									}
								});
							};
							_iterator = _create_for_of_iterator_helper_loose(_this.listeners.OnceExit);
							_state.label = 15;
						case 15:
							if (!!(_step = _iterator()).done) return [3, 18];
							return [5, _ts_values(_loop())];
						case 16:
							_state.sent();
							_state.label = 17;
						case 17: return [3, 15];
						case 18:
							_this.processed = true;
							return [2, _this.stringify()];
					}
				});
			})();
		};
		_proto.runOnRoot = function runOnRoot(plugin22) {
			var _this = this;
			this.result.lastPlugin = plugin22;
			try {
				if ((typeof plugin22 === "undefined" ? "undefined" : _type_of(plugin22)) === "object" && plugin22.Once) {
					if (this.result.root.type === "document") {
						var roots = this.result.root.nodes.map(function(root2) {
							return plugin22.Once(root2, _this.helpers);
						});
						if (isPromise$1(roots[0])) return Promise.all(roots);
						return roots;
					}
					return plugin22.Once(this.result.root, this.helpers);
				} else if (typeof plugin22 === "function") return plugin22(this.result.root, this.result);
			} catch (error) {
				throw this.handleError(error);
			}
		};
		_proto.stringify = function stringify() {
			if (this.error) throw this.error;
			if (this.stringified) return this.result;
			this.stringified = true;
			this.sync();
			var opts = this.result.opts;
			var str = stringify$2$1;
			if (opts.syntax) str = opts.syntax.stringify;
			if (opts.stringifier) str = opts.stringifier;
			if (str.stringify) str = str.stringify;
			var data = new MapGenerator$1$1(str, this.result.root, this.result.opts).generate();
			this.result.css = data[0];
			this.result.map = data[1];
			return this.result;
		};
		_proto.sync = function sync() {
			if (this.error) throw this.error;
			if (this.processed) return this.result;
			this.processed = true;
			if (this.processing) throw this.getAsyncError();
			for (var _iterator = _create_for_of_iterator_helper_loose(this.plugins), _step; !(_step = _iterator()).done;) {
				var plugin22 = _step.value;
				if (isPromise$1(this.runOnRoot(plugin22))) throw this.getAsyncError();
			}
			this.prepareVisitors();
			if (this.hasListener) {
				var root2 = this.result.root;
				while (!root2[isClean$3]) {
					root2[isClean$3] = true;
					this.walkSync(root2);
				}
				if (this.listeners.OnceExit) if (root2.type === "document") for (var _iterator1 = _create_for_of_iterator_helper_loose(root2.nodes), _step1; !(_step1 = _iterator1()).done;) {
					var subRoot = _step1.value;
					this.visitSync(this.listeners.OnceExit, subRoot);
				}
				else this.visitSync(this.listeners.OnceExit, root2);
			}
			return this.result;
		};
		_proto.then = function then(onFulfilled, onRejected) {
			if (!("from" in this.opts)) warnOnce$1$1("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
			return this.async().then(onFulfilled, onRejected);
		};
		_proto.toString = function toString() {
			return this.css;
		};
		_proto.visitSync = function visitSync(visitors, node2) {
			for (var _iterator = _create_for_of_iterator_helper_loose(visitors), _step; !(_step = _iterator()).done;) {
				var _step_value = _step.value;
				var plugin22 = _step_value[0];
				var visitor = _step_value[1];
				this.result.lastPlugin = plugin22;
				var promise = void 0;
				try {
					promise = visitor(node2, this.helpers);
				} catch (e2) {
					throw this.handleError(e2, node2.proxyOf);
				}
				if (node2.type !== "root" && node2.type !== "document" && !node2.parent) return true;
				if (isPromise$1(promise)) throw this.getAsyncError();
			}
		};
		_proto.visitTick = function visitTick(stack) {
			var visit2 = stack[stack.length - 1];
			var node2 = visit2.node;
			var visitors = visit2.visitors;
			if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
				stack.pop();
				return;
			}
			if (visitors.length > 0 && visit2.visitorIndex < visitors.length) {
				var _visitors_visit2_visitorIndex = visitors[visit2.visitorIndex];
				var plugin22 = _visitors_visit2_visitorIndex[0];
				var visitor = _visitors_visit2_visitorIndex[1];
				visit2.visitorIndex += 1;
				if (visit2.visitorIndex === visitors.length) {
					visit2.visitors = [];
					visit2.visitorIndex = 0;
				}
				this.result.lastPlugin = plugin22;
				try {
					return visitor(node2.toProxy(), this.helpers);
				} catch (e2) {
					throw this.handleError(e2, node2);
				}
			}
			if (visit2.iterator !== 0) {
				var iterator = visit2.iterator;
				var child;
				while (child = node2.nodes[node2.indexes[iterator]]) {
					node2.indexes[iterator] += 1;
					if (!child[isClean$3]) {
						child[isClean$3] = true;
						stack.push(toStack$1(child));
						return;
					}
				}
				visit2.iterator = 0;
				delete node2.indexes[iterator];
			}
			var events = visit2.events;
			while (visit2.eventIndex < events.length) {
				var event = events[visit2.eventIndex];
				visit2.eventIndex += 1;
				if (event === CHILDREN$1) {
					if (node2.nodes && node2.nodes.length) {
						node2[isClean$3] = true;
						visit2.iterator = node2.getIterator();
					}
					return;
				} else if (this.listeners[event]) {
					visit2.visitors = this.listeners[event];
					return;
				}
			}
			stack.pop();
		};
		_proto.walkSync = function walkSync(node2) {
			var _this = this;
			node2[isClean$3] = true;
			for (var _iterator = _create_for_of_iterator_helper_loose(getEvents$1(node2)), _step; !(_step = _iterator()).done;) {
				var event = _step.value;
				if (event === CHILDREN$1) {
					if (node2.nodes) node2.each(function(child) {
						if (!child[isClean$3]) _this.walkSync(child);
					});
				} else {
					var visitors = this.listeners[event];
					if (visitors) {
						if (this.visitSync(visitors, node2.toProxy())) return;
					}
				}
			}
		};
		_proto.warnings = function warnings() {
			return this.sync().warnings();
		};
		_create_class(LazyResult, [
			{
				key: "content",
				get: function get() {
					return this.stringify().content;
				}
			},
			{
				key: "css",
				get: function get() {
					return this.stringify().css;
				}
			},
			{
				key: "map",
				get: function get() {
					return this.stringify().map;
				}
			},
			{
				key: "messages",
				get: function get() {
					return this.sync().messages;
				}
			},
			{
				key: "opts",
				get: function get() {
					return this.result.opts;
				}
			},
			{
				key: "processor",
				get: function get() {
					return this.result.processor;
				}
			},
			{
				key: "root",
				get: function get() {
					return this.sync().root;
				}
			},
			{
				key: Symbol.toStringTag,
				get: function get() {
					return "LazyResult";
				}
			}
		]);
		return LazyResult;
	}();
	LazyResult$2$1.registerPostcss = function(dependant) {
		postcss$2$1 = dependant;
	};
	var lazyResult$1 = LazyResult$2$1;
	LazyResult$2$1.default = LazyResult$2$1;
	Root$3$1.registerLazyResult(LazyResult$2$1);
	Document$2$1.registerLazyResult(LazyResult$2$1);
	var MapGenerator2$1 = mapGenerator$1;
	var stringify$1$1 = stringify_1$1;
	var warnOnce2$1 = warnOnce$2$1;
	var parse$1$1 = parse_1$1;
	var Result$1$1 = result$1;
	var NoWorkResult$1$1 = /*#__PURE__*/ function() {
		function NoWorkResult(processor2, css, opts) {
			css = css.toString();
			this.stringified = false;
			this._processor = processor2;
			this._css = css;
			this._opts = opts;
			this._map = void 0;
			var root2;
			var str = stringify$1$1;
			this.result = new Result$1$1(this._processor, root2, this._opts);
			this.result.css = css;
			var self = this;
			Object.defineProperty(this.result, "root", { get: function get() {
				return self.root;
			} });
			var map = new MapGenerator2$1(str, root2, this._opts, css);
			if (map.isMap()) {
				var _map_generate = map.generate();
				var generatedCSS = _map_generate[0];
				var generatedMap = _map_generate[1];
				if (generatedCSS) this.result.css = generatedCSS;
				if (generatedMap) this.result.map = generatedMap;
			} else {
				map.clearAnnotation();
				this.result.css = map.css;
			}
		}
		var _proto = NoWorkResult.prototype;
		_proto.async = function async() {
			if (this.error) return Promise.reject(this.error);
			return Promise.resolve(this.result);
		};
		_proto.catch = function _catch(onRejected) {
			return this.async().catch(onRejected);
		};
		_proto.finally = function _finally(onFinally) {
			return this.async().then(onFinally, onFinally);
		};
		_proto.sync = function sync() {
			if (this.error) throw this.error;
			return this.result;
		};
		_proto.then = function then(onFulfilled, onRejected) {
			if (!("from" in this._opts)) warnOnce2$1("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
			return this.async().then(onFulfilled, onRejected);
		};
		_proto.toString = function toString() {
			return this._css;
		};
		_proto.warnings = function warnings() {
			return [];
		};
		_create_class(NoWorkResult, [
			{
				key: "content",
				get: function get() {
					return this.result.css;
				}
			},
			{
				key: "css",
				get: function get() {
					return this.result.css;
				}
			},
			{
				key: "map",
				get: function get() {
					return this.result.map;
				}
			},
			{
				key: "messages",
				get: function get() {
					return [];
				}
			},
			{
				key: "opts",
				get: function get() {
					return this.result.opts;
				}
			},
			{
				key: "processor",
				get: function get() {
					return this.result.processor;
				}
			},
			{
				key: "root",
				get: function get() {
					if (this._root) return this._root;
					var root2;
					var parser2 = parse$1$1;
					try {
						root2 = parser2(this._css, this._opts);
					} catch (error) {
						this.error = error;
					}
					if (this.error) throw this.error;
					else {
						this._root = root2;
						return root2;
					}
				}
			},
			{
				key: Symbol.toStringTag,
				get: function get() {
					return "NoWorkResult";
				}
			}
		]);
		return NoWorkResult;
	}();
	var noWorkResult$1 = NoWorkResult$1$1;
	NoWorkResult$1$1.default = NoWorkResult$1$1;
	var NoWorkResult2$1 = noWorkResult$1;
	var LazyResult$1$1 = lazyResult$1;
	var Document$1$1 = document$1$1;
	var Root$2$1 = root$1;
	var Processor$1$1 = /*#__PURE__*/ function() {
		function Processor(plugins) {
			if (plugins === void 0) plugins = [];
			this.version = "8.4.38";
			this.plugins = this.normalize(plugins);
		}
		var _proto = Processor.prototype;
		_proto.normalize = function normalize(plugins) {
			var normalized = [];
			for (var _iterator = _create_for_of_iterator_helper_loose(plugins), _step; !(_step = _iterator()).done;) {
				var i2 = _step.value;
				if (i2.postcss === true) i2 = i2();
				else if (i2.postcss) i2 = i2.postcss;
				if ((typeof i2 === "undefined" ? "undefined" : _type_of(i2)) === "object" && Array.isArray(i2.plugins)) normalized = normalized.concat(i2.plugins);
				else if ((typeof i2 === "undefined" ? "undefined" : _type_of(i2)) === "object" && i2.postcssPlugin) normalized.push(i2);
				else if (typeof i2 === "function") normalized.push(i2);
				else if ((typeof i2 === "undefined" ? "undefined" : _type_of(i2)) === "object" && (i2.parse || i2.stringify)) throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
				else throw new Error(i2 + " is not a PostCSS plugin");
			}
			return normalized;
		};
		_proto.process = function process1(css, opts) {
			if (opts === void 0) opts = {};
			if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) return new NoWorkResult2$1(this, css, opts);
			else return new LazyResult$1$1(this, css, opts);
		};
		_proto.use = function use(plugin22) {
			this.plugins = this.plugins.concat(this.normalize([plugin22]));
			return this;
		};
		return Processor;
	}();
	var processor$1 = Processor$1$1;
	Processor$1$1.default = Processor$1$1;
	Root$2$1.registerProcessor(Processor$1$1);
	Document$1$1.registerProcessor(Processor$1$1);
	var Declaration$1$1 = declaration$1;
	var PreviousMap2$1 = previousMap$1;
	var Comment$1$1 = comment$1;
	var AtRule$1$1 = atRule$1;
	var Input$1$1 = input$1;
	var Root$1$1 = root$1;
	var Rule$1$1 = rule$1;
	function fromJSON$1$1(json, inputs) {
		if (Array.isArray(json)) return json.map(function(n2) {
			return fromJSON$1$1(n2);
		});
		var ownInputs = json.inputs;
		var defaults = _object_without_properties_loose(json, ["inputs"]);
		if (ownInputs) {
			inputs = [];
			for (var _iterator = _create_for_of_iterator_helper_loose(ownInputs), _step; !(_step = _iterator()).done;) {
				var input2 = _step.value;
				var inputHydrated = _extends({}, input2, { __proto__: Input$1$1.prototype });
				if (inputHydrated.map) inputHydrated.map = _extends({}, inputHydrated.map, { __proto__: PreviousMap2$1.prototype });
				inputs.push(inputHydrated);
			}
		}
		if (defaults.nodes) defaults.nodes = json.nodes.map(function(n2) {
			return fromJSON$1$1(n2, inputs);
		});
		if (defaults.source) {
			var _defaults_source = defaults.source;
			var inputId = _defaults_source.inputId;
			defaults.source = _object_without_properties_loose(_defaults_source, ["inputId"]);
			if (inputId != null) defaults.source.input = inputs[inputId];
		}
		if (defaults.type === "root") return new Root$1$1(defaults);
		else if (defaults.type === "decl") return new Declaration$1$1(defaults);
		else if (defaults.type === "rule") return new Rule$1$1(defaults);
		else if (defaults.type === "comment") return new Comment$1$1(defaults);
		else if (defaults.type === "atrule") return new AtRule$1$1(defaults);
		else throw new Error("Unknown node type: " + json.type);
	}
	var fromJSON_1$1 = fromJSON$1$1;
	fromJSON$1$1.default = fromJSON$1$1;
	var CssSyntaxError2$1 = cssSyntaxError$1;
	var Declaration2$1 = declaration$1;
	var LazyResult2$1 = lazyResult$1;
	var Container2$1 = container$1;
	var Processor2$1 = processor$1;
	var stringify$5 = stringify_1$1;
	var fromJSON$2 = fromJSON_1$1;
	var Document22 = document$1$1;
	var Warning2$1 = warning$1;
	var Comment2$1 = comment$1;
	var AtRule2$1 = atRule$1;
	var Result2$1 = result$1;
	var Input2$1 = input$1;
	var parse$5 = parse_1$1;
	var list$3 = list_1$1;
	var Rule2$1 = rule$1;
	var Root2$1 = root$1;
	var Node2$1 = node$1;
	function postcss$3() {
		for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) plugins[_key] = arguments[_key];
		if (plugins.length === 1 && Array.isArray(plugins[0])) plugins = plugins[0];
		return new Processor2$1(plugins);
	}
	postcss$3.plugin = function plugin(name, initializer) {
		var warningPrinted = false;
		function creator() {
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			if (console && console.warn && !warningPrinted) {
				warningPrinted = true;
				console.warn(name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration");
				if ({}.LANG && {}.LANG.startsWith("cn")) console.warn(name + ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226");
			}
			var transformer = initializer.apply(void 0, [].concat(args));
			transformer.postcssPlugin = name;
			transformer.postcssVersion = new Processor2$1().version;
			return transformer;
		}
		var cache;
		Object.defineProperty(creator, "postcss", { get: function get() {
			if (!cache) cache = creator();
			return cache;
		} });
		creator.process = function(css, processOpts, pluginOpts) {
			return postcss$3([creator(pluginOpts)]).process(css, processOpts);
		};
		return creator;
	};
	postcss$3.stringify = stringify$5;
	postcss$3.parse = parse$5;
	postcss$3.fromJSON = fromJSON$2;
	postcss$3.list = list$3;
	postcss$3.comment = function(defaults) {
		return new Comment2$1(defaults);
	};
	postcss$3.atRule = function(defaults) {
		return new AtRule2$1(defaults);
	};
	postcss$3.decl = function(defaults) {
		return new Declaration2$1(defaults);
	};
	postcss$3.rule = function(defaults) {
		return new Rule2$1(defaults);
	};
	postcss$3.root = function(defaults) {
		return new Root2$1(defaults);
	};
	postcss$3.document = function(defaults) {
		return new Document22(defaults);
	};
	postcss$3.CssSyntaxError = CssSyntaxError2$1;
	postcss$3.Declaration = Declaration2$1;
	postcss$3.Container = Container2$1;
	postcss$3.Processor = Processor2$1;
	postcss$3.Document = Document22;
	postcss$3.Comment = Comment2$1;
	postcss$3.Warning = Warning2$1;
	postcss$3.AtRule = AtRule2$1;
	postcss$3.Result = Result2$1;
	postcss$3.Input = Input2$1;
	postcss$3.Rule = Rule2$1;
	postcss$3.Root = Root2$1;
	postcss$3.Node = Node2$1;
	LazyResult2$1.registerPostcss(postcss$3);
	var postcss_1$1 = postcss$3;
	postcss$3.default = postcss$3;
	var postcss$1$1 = /* @__PURE__ */ getDefaultExportFromCjs$1(postcss_1$1);
	postcss$1$1.stringify;
	postcss$1$1.fromJSON;
	postcss$1$1.plugin;
	postcss$1$1.parse;
	postcss$1$1.list;
	postcss$1$1.document;
	postcss$1$1.comment;
	postcss$1$1.atRule;
	postcss$1$1.rule;
	postcss$1$1.decl;
	postcss$1$1.root;
	postcss$1$1.CssSyntaxError;
	postcss$1$1.Declaration;
	postcss$1$1.Container;
	postcss$1$1.Processor;
	postcss$1$1.Document;
	postcss$1$1.Comment;
	postcss$1$1.Warning;
	postcss$1$1.AtRule;
	postcss$1$1.Result;
	postcss$1$1.Input;
	postcss$1$1.Rule;
	postcss$1$1.Root;
	postcss$1$1.Node;
	var __defProp2 = Object.defineProperty;
	var __defNormalProp2 = function(obj, key, value) {
		return key in obj ? __defProp2(obj, key, {
			enumerable: true,
			configurable: true,
			writable: true,
			value
		}) : obj[key] = value;
	};
	var __publicField2 = function(obj, key, value) {
		return __defNormalProp2(obj, (typeof key === "undefined" ? "undefined" : _type_of(key)) !== "symbol" ? key + "" : key, value);
	};
	function getDefaultExportFromCjs(x2) {
		return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
	}
	function getAugmentedNamespace(n2) {
		if (n2.__esModule) return n2;
		var f2 = n2.default;
		if (typeof f2 == "function") {
			var a2 = function a22() {
				if (_instanceof(this, a22)) return Reflect.construct(f2, arguments, this.constructor);
				return f2.apply(this, arguments);
			};
			a2.prototype = f2.prototype;
		} else a2 = {};
		Object.defineProperty(a2, "__esModule", { value: true });
		Object.keys(n2).forEach(function(k) {
			var d = Object.getOwnPropertyDescriptor(n2, k);
			Object.defineProperty(a2, k, d.get ? d : {
				enumerable: true,
				get: function get() {
					return n2[k];
				}
			});
		});
		return a2;
	}
	var picocolors_browser = { exports: {} };
	var x = String;
	var create = function create() {
		return {
			isColorSupported: false,
			reset: x,
			bold: x,
			dim: x,
			italic: x,
			underline: x,
			inverse: x,
			hidden: x,
			strikethrough: x,
			black: x,
			red: x,
			green: x,
			yellow: x,
			blue: x,
			magenta: x,
			cyan: x,
			white: x,
			gray: x,
			bgBlack: x,
			bgRed: x,
			bgGreen: x,
			bgYellow: x,
			bgBlue: x,
			bgMagenta: x,
			bgCyan: x,
			bgWhite: x
		};
	};
	picocolors_browser.exports = create();
	picocolors_browser.exports.createColors = create;
	var picocolors_browserExports = picocolors_browser.exports;
	var require$$2 = /* @__PURE__ */ getAugmentedNamespace(/* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
		__proto__: null,
		default: {}
	}, Symbol.toStringTag, { value: "Module" })));
	var pico = picocolors_browserExports;
	var terminalHighlight$1 = require$$2;
	var CssSyntaxError$3 = /*#__PURE__*/ function(Error1) {
		_inherits(CssSyntaxError2, Error1);
		function CssSyntaxError2(message, line, column, source, file, plugin22) {
			var _this = Error1.call(this, message) || this;
			_this.name = "CssSyntaxError";
			_this.reason = message;
			if (file) _this.file = file;
			if (source) _this.source = source;
			if (plugin22) _this.plugin = plugin22;
			if (typeof line !== "undefined" && typeof column !== "undefined") if (typeof line === "number") {
				_this.line = line;
				_this.column = column;
			} else {
				_this.line = line.line;
				_this.column = line.column;
				_this.endLine = column.line;
				_this.endColumn = column.column;
			}
			_this.setMessage();
			if (Error.captureStackTrace) Error.captureStackTrace(_this, CssSyntaxError2);
			return _this;
		}
		var _proto = CssSyntaxError2.prototype;
		_proto.setMessage = function setMessage() {
			this.message = this.plugin ? this.plugin + ": " : "";
			this.message += this.file ? this.file : "<css input>";
			if (typeof this.line !== "undefined") this.message += ":" + this.line + ":" + this.column;
			this.message += ": " + this.reason;
		};
		_proto.showSourceCode = function showSourceCode(color) {
			var _this = this;
			if (!this.source) return "";
			var css = this.source;
			if (color == null) color = pico.isColorSupported;
			if (terminalHighlight$1) {
				if (color) css = terminalHighlight$1(css);
			}
			var lines = css.split(/\r?\n/);
			var start = Math.max(this.line - 3, 0);
			var end = Math.min(this.line + 2, lines.length);
			var maxWidth = String(end).length;
			var mark;
			var aside;
			if (color) {
				var _pico_createColors = pico.createColors(true);
				var bold = _pico_createColors.bold;
				var gray = _pico_createColors.gray;
				var red = _pico_createColors.red;
				mark = function(text) {
					return bold(red(text));
				};
				aside = function(text) {
					return gray(text);
				};
			} else mark = aside = function(str) {
				return str;
			};
			return lines.slice(start, end).map(function(line, index2) {
				var number = start + 1 + index2;
				var gutter = " " + (" " + number).slice(-maxWidth) + " | ";
				if (number === _this.line) {
					var spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, _this.column - 1).replace(/[^\t]/g, " ");
					return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
				}
				return " " + aside(gutter) + line;
			}).join("\n");
		};
		_proto.toString = function toString() {
			var code = this.showSourceCode();
			if (code) code = "\n\n" + code + "\n";
			return this.name + ": " + this.message + code;
		};
		return CssSyntaxError2;
	}(_wrap_native_super(Error));
	var cssSyntaxError = CssSyntaxError$3;
	CssSyntaxError$3.default = CssSyntaxError$3;
	var symbols = {};
	symbols.isClean = Symbol("isClean");
	symbols.my = Symbol("my");
	var DEFAULT_RAW = {
		after: "\n",
		beforeClose: "\n",
		beforeComment: "\n",
		beforeDecl: "\n",
		beforeOpen: " ",
		beforeRule: "\n",
		colon: ": ",
		commentLeft: " ",
		commentRight: " ",
		emptyBody: "",
		indent: "    ",
		semicolon: false
	};
	function capitalize(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
	var Stringifier$2 = /*#__PURE__*/ function() {
		function Stringifier2(builder) {
			this.builder = builder;
		}
		var _proto = Stringifier2.prototype;
		_proto.atrule = function atrule(node2, semicolon) {
			var name = "@" + node2.name;
			var params = node2.params ? this.rawValue(node2, "params") : "";
			if (typeof node2.raws.afterName !== "undefined") name += node2.raws.afterName;
			else if (params) name += " ";
			if (node2.nodes) this.block(node2, name + params);
			else {
				var end = (node2.raws.between || "") + (semicolon ? ";" : "");
				this.builder(name + params + end, node2);
			}
		};
		_proto.beforeAfter = function beforeAfter(node2, detect) {
			var value;
			if (node2.type === "decl") value = this.raw(node2, null, "beforeDecl");
			else if (node2.type === "comment") value = this.raw(node2, null, "beforeComment");
			else if (detect === "before") value = this.raw(node2, null, "beforeRule");
			else value = this.raw(node2, null, "beforeClose");
			var buf = node2.parent;
			var depth = 0;
			while (buf && buf.type !== "root") {
				depth += 1;
				buf = buf.parent;
			}
			if (value.includes("\n")) {
				var indent = this.raw(node2, null, "indent");
				if (indent.length) for (var step = 0; step < depth; step++) value += indent;
			}
			return value;
		};
		_proto.block = function block(node2, start) {
			var between = this.raw(node2, "between", "beforeOpen");
			this.builder(start + between + "{", node2, "start");
			var after;
			if (node2.nodes && node2.nodes.length) {
				this.body(node2);
				after = this.raw(node2, "after");
			} else after = this.raw(node2, "after", "emptyBody");
			if (after) this.builder(after);
			this.builder("}", node2, "end");
		};
		_proto.body = function body(node2) {
			var last = node2.nodes.length - 1;
			while (last > 0) {
				if (node2.nodes[last].type !== "comment") break;
				last -= 1;
			}
			var semicolon = this.raw(node2, "semicolon");
			for (var i2 = 0; i2 < node2.nodes.length; i2++) {
				var child = node2.nodes[i2];
				var before = this.raw(child, "before");
				if (before) this.builder(before);
				this.stringify(child, last !== i2 || semicolon);
			}
		};
		_proto.comment = function comment(node2) {
			var left = this.raw(node2, "left", "commentLeft");
			var right = this.raw(node2, "right", "commentRight");
			this.builder("/*" + left + node2.text + right + "*/", node2);
		};
		_proto.decl = function decl(node2, semicolon) {
			var between = this.raw(node2, "between", "colon");
			var string = node2.prop + between + this.rawValue(node2, "value");
			if (node2.important) string += node2.raws.important || " !important";
			if (semicolon) string += ";";
			this.builder(string, node2);
		};
		_proto.document = function document1(node2) {
			this.body(node2);
		};
		_proto.raw = function raw(node2, own, detect) {
			var value;
			if (!detect) detect = own;
			if (own) {
				value = node2.raws[own];
				if (typeof value !== "undefined") return value;
			}
			var parent = node2.parent;
			if (detect === "before") {
				if (!parent || parent.type === "root" && parent.first === node2) return "";
				if (parent && parent.type === "document") return "";
			}
			if (!parent) return DEFAULT_RAW[detect];
			var root2 = node2.root();
			if (!root2.rawCache) root2.rawCache = {};
			if (typeof root2.rawCache[detect] !== "undefined") return root2.rawCache[detect];
			if (detect === "before" || detect === "after") return this.beforeAfter(node2, detect);
			else {
				var method = "raw" + capitalize(detect);
				if (this[method]) value = this[method](root2, node2);
				else root2.walk(function(i2) {
					value = i2.raws[own];
					if (typeof value !== "undefined") return false;
				});
			}
			if (typeof value === "undefined") value = DEFAULT_RAW[detect];
			root2.rawCache[detect] = value;
			return value;
		};
		_proto.rawBeforeClose = function rawBeforeClose(root2) {
			var value;
			root2.walk(function(i2) {
				if (i2.nodes && i2.nodes.length > 0) {
					if (typeof i2.raws.after !== "undefined") {
						value = i2.raws.after;
						if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
						return false;
					}
				}
			});
			if (value) value = value.replace(/\S/g, "");
			return value;
		};
		_proto.rawBeforeComment = function rawBeforeComment(root2, node2) {
			var value;
			root2.walkComments(function(i2) {
				if (typeof i2.raws.before !== "undefined") {
					value = i2.raws.before;
					if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
					return false;
				}
			});
			if (typeof value === "undefined") value = this.raw(node2, null, "beforeDecl");
			else if (value) value = value.replace(/\S/g, "");
			return value;
		};
		_proto.rawBeforeDecl = function rawBeforeDecl(root2, node2) {
			var value;
			root2.walkDecls(function(i2) {
				if (typeof i2.raws.before !== "undefined") {
					value = i2.raws.before;
					if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
					return false;
				}
			});
			if (typeof value === "undefined") value = this.raw(node2, null, "beforeRule");
			else if (value) value = value.replace(/\S/g, "");
			return value;
		};
		_proto.rawBeforeOpen = function rawBeforeOpen(root2) {
			var value;
			root2.walk(function(i2) {
				if (i2.type !== "decl") {
					value = i2.raws.between;
					if (typeof value !== "undefined") return false;
				}
			});
			return value;
		};
		_proto.rawBeforeRule = function rawBeforeRule(root2) {
			var value;
			root2.walk(function(i2) {
				if (i2.nodes && (i2.parent !== root2 || root2.first !== i2)) {
					if (typeof i2.raws.before !== "undefined") {
						value = i2.raws.before;
						if (value.includes("\n")) value = value.replace(/[^\n]+$/, "");
						return false;
					}
				}
			});
			if (value) value = value.replace(/\S/g, "");
			return value;
		};
		_proto.rawColon = function rawColon(root2) {
			var value;
			root2.walkDecls(function(i2) {
				if (typeof i2.raws.between !== "undefined") {
					value = i2.raws.between.replace(/[^\s:]/g, "");
					return false;
				}
			});
			return value;
		};
		_proto.rawEmptyBody = function rawEmptyBody(root2) {
			var value;
			root2.walk(function(i2) {
				if (i2.nodes && i2.nodes.length === 0) {
					value = i2.raws.after;
					if (typeof value !== "undefined") return false;
				}
			});
			return value;
		};
		_proto.rawIndent = function rawIndent(root2) {
			if (root2.raws.indent) return root2.raws.indent;
			var value;
			root2.walk(function(i2) {
				var p = i2.parent;
				if (p && p !== root2 && p.parent && p.parent === root2) {
					if (typeof i2.raws.before !== "undefined") {
						var parts = i2.raws.before.split("\n");
						value = parts[parts.length - 1];
						value = value.replace(/\S/g, "");
						return false;
					}
				}
			});
			return value;
		};
		_proto.rawSemicolon = function rawSemicolon(root2) {
			var value;
			root2.walk(function(i2) {
				if (i2.nodes && i2.nodes.length && i2.last.type === "decl") {
					value = i2.raws.semicolon;
					if (typeof value !== "undefined") return false;
				}
			});
			return value;
		};
		_proto.rawValue = function rawValue(node2, prop) {
			var value = node2[prop];
			var raw = node2.raws[prop];
			if (raw && raw.value === value) return raw.raw;
			return value;
		};
		_proto.root = function root(node2) {
			this.body(node2);
			if (node2.raws.after) this.builder(node2.raws.after);
		};
		_proto.rule = function rule(node2) {
			this.block(node2, this.rawValue(node2, "selector"));
			if (node2.raws.ownSemicolon) this.builder(node2.raws.ownSemicolon, node2, "end");
		};
		_proto.stringify = function stringify(node2, semicolon) {
			if (!this[node2.type]) throw new Error("Unknown AST node type " + node2.type + ". Maybe you need to change PostCSS stringifier.");
			this[node2.type](node2, semicolon);
		};
		return Stringifier2;
	}();
	var stringifier = Stringifier$2;
	Stringifier$2.default = Stringifier$2;
	var Stringifier$1 = stringifier;
	function stringify$4(node2, builder) {
		new Stringifier$1(builder).stringify(node2);
	}
	var stringify_1 = stringify$4;
	stringify$4.default = stringify$4;
	var isClean$2 = symbols.isClean;
	var my$2 = symbols.my;
	var CssSyntaxError$2 = cssSyntaxError;
	var Stringifier22 = stringifier;
	var stringify$3 = stringify_1;
	function cloneNode(obj, parent) {
		var cloned = new obj.constructor();
		for (var i2 in obj) {
			if (!Object.prototype.hasOwnProperty.call(obj, i2)) continue;
			if (i2 === "proxyCache") continue;
			var value = obj[i2];
			var type = typeof value === "undefined" ? "undefined" : _type_of(value);
			if (i2 === "parent" && type === "object") {
				if (parent) cloned[i2] = parent;
			} else if (i2 === "source") cloned[i2] = value;
			else if (Array.isArray(value)) cloned[i2] = value.map(function(j) {
				return cloneNode(j, cloned);
			});
			else {
				if (type === "object" && value !== null) value = cloneNode(value);
				cloned[i2] = value;
			}
		}
		return cloned;
	}
	var Node$4 = /*#__PURE__*/ function() {
		function Node3(defaults) {
			if (defaults === void 0) defaults = {};
			this.raws = {};
			this[isClean$2] = false;
			this[my$2] = true;
			for (var name in defaults) if (name === "nodes") {
				this.nodes = [];
				for (var _iterator = _create_for_of_iterator_helper_loose(defaults[name]), _step; !(_step = _iterator()).done;) {
					var node2 = _step.value;
					if (typeof node2.clone === "function") this.append(node2.clone());
					else this.append(node2);
				}
			} else this[name] = defaults[name];
		}
		var _proto = Node3.prototype;
		_proto.addToError = function addToError(error) {
			error.postcssNode = this;
			if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
				var s2 = this.source;
				error.stack = error.stack.replace(/\n\s{4}at /, "$&" + s2.input.from + ":" + s2.start.line + ":" + s2.start.column + "$&");
			}
			return error;
		};
		_proto.after = function after(add) {
			this.parent.insertAfter(this, add);
			return this;
		};
		_proto.assign = function assign(overrides) {
			if (overrides === void 0) overrides = {};
			for (var name in overrides) this[name] = overrides[name];
			return this;
		};
		_proto.before = function before(add) {
			this.parent.insertBefore(this, add);
			return this;
		};
		_proto.cleanRaws = function cleanRaws(keepBetween) {
			delete this.raws.before;
			delete this.raws.after;
			if (!keepBetween) delete this.raws.between;
		};
		_proto.clone = function clone(overrides) {
			if (overrides === void 0) overrides = {};
			var cloned = cloneNode(this);
			for (var name in overrides) cloned[name] = overrides[name];
			return cloned;
		};
		_proto.cloneAfter = function cloneAfter(overrides) {
			if (overrides === void 0) overrides = {};
			var cloned = this.clone(overrides);
			this.parent.insertAfter(this, cloned);
			return cloned;
		};
		_proto.cloneBefore = function cloneBefore(overrides) {
			if (overrides === void 0) overrides = {};
			var cloned = this.clone(overrides);
			this.parent.insertBefore(this, cloned);
			return cloned;
		};
		_proto.error = function error(message, opts) {
			if (opts === void 0) opts = {};
			if (this.source) {
				var _this_rangeBy = this.rangeBy(opts);
				var end = _this_rangeBy.end;
				var start = _this_rangeBy.start;
				return this.source.input.error(message, {
					column: start.column,
					line: start.line
				}, {
					column: end.column,
					line: end.line
				}, opts);
			}
			return new CssSyntaxError$2(message);
		};
		_proto.getProxyProcessor = function getProxyProcessor() {
			return {
				get: function get(node2, prop) {
					if (prop === "proxyOf") return node2;
					else if (prop === "root") return function() {
						return node2.root().toProxy();
					};
					else return node2[prop];
				},
				set: function set(node2, prop, value) {
					if (node2[prop] === value) return true;
					node2[prop] = value;
					if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || prop === "text") node2.markDirty();
					return true;
				}
			};
		};
		_proto.markDirty = function markDirty() {
			if (this[isClean$2]) {
				this[isClean$2] = false;
				var next = this;
				while (next = next.parent) next[isClean$2] = false;
			}
		};
		_proto.next = function next() {
			if (!this.parent) return void 0;
			var index2 = this.parent.index(this);
			return this.parent.nodes[index2 + 1];
		};
		_proto.positionBy = function positionBy(opts, stringRepresentation) {
			var pos = this.source.start;
			if (opts.index) pos = this.positionInside(opts.index, stringRepresentation);
			else if (opts.word) {
				stringRepresentation = this.toString();
				var index2 = stringRepresentation.indexOf(opts.word);
				if (index2 !== -1) pos = this.positionInside(index2, stringRepresentation);
			}
			return pos;
		};
		_proto.positionInside = function positionInside(index2, stringRepresentation) {
			var string = stringRepresentation || this.toString();
			var column = this.source.start.column;
			var line = this.source.start.line;
			for (var i2 = 0; i2 < index2; i2++) if (string[i2] === "\n") {
				column = 1;
				line += 1;
			} else column += 1;
			return {
				column,
				line
			};
		};
		_proto.prev = function prev() {
			if (!this.parent) return void 0;
			var index2 = this.parent.index(this);
			return this.parent.nodes[index2 - 1];
		};
		_proto.rangeBy = function rangeBy(opts) {
			var start = {
				column: this.source.start.column,
				line: this.source.start.line
			};
			var end = this.source.end ? {
				column: this.source.end.column + 1,
				line: this.source.end.line
			} : {
				column: start.column + 1,
				line: start.line
			};
			if (opts.word) {
				var stringRepresentation = this.toString();
				var index2 = stringRepresentation.indexOf(opts.word);
				if (index2 !== -1) {
					start = this.positionInside(index2, stringRepresentation);
					end = this.positionInside(index2 + opts.word.length, stringRepresentation);
				}
			} else {
				if (opts.start) start = {
					column: opts.start.column,
					line: opts.start.line
				};
				else if (opts.index) start = this.positionInside(opts.index);
				if (opts.end) end = {
					column: opts.end.column,
					line: opts.end.line
				};
				else if (typeof opts.endIndex === "number") end = this.positionInside(opts.endIndex);
				else if (opts.index) end = this.positionInside(opts.index + 1);
			}
			if (end.line < start.line || end.line === start.line && end.column <= start.column) end = {
				column: start.column + 1,
				line: start.line
			};
			return {
				end,
				start
			};
		};
		_proto.raw = function raw(prop, defaultType) {
			return new Stringifier22().raw(this, prop, defaultType);
		};
		_proto.remove = function remove() {
			if (this.parent) this.parent.removeChild(this);
			this.parent = void 0;
			return this;
		};
		_proto.replaceWith = function replaceWith() {
			for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) nodes[_key] = arguments[_key];
			if (this.parent) {
				var bookmark = this;
				var foundSelf = false;
				for (var _iterator = _create_for_of_iterator_helper_loose(nodes), _step; !(_step = _iterator()).done;) {
					var node2 = _step.value;
					if (node2 === this) foundSelf = true;
					else if (foundSelf) {
						this.parent.insertAfter(bookmark, node2);
						bookmark = node2;
					} else this.parent.insertBefore(bookmark, node2);
				}
				if (!foundSelf) this.remove();
			}
			return this;
		};
		_proto.root = function root() {
			var result2 = this;
			while (result2.parent && result2.parent.type !== "document") result2 = result2.parent;
			return result2;
		};
		_proto.toJSON = function toJSON(_, inputs) {
			var fixed = {};
			var emitInputs = inputs == null;
			inputs = inputs || /* @__PURE__ */ new Map();
			var inputsNextIndex = 0;
			for (var name in this) {
				if (!Object.prototype.hasOwnProperty.call(this, name)) continue;
				if (name === "parent" || name === "proxyCache") continue;
				var value = this[name];
				if (Array.isArray(value)) fixed[name] = value.map(function(i2) {
					if ((typeof i2 === "undefined" ? "undefined" : _type_of(i2)) === "object" && i2.toJSON) return i2.toJSON(null, inputs);
					else return i2;
				});
				else if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && value.toJSON) fixed[name] = value.toJSON(null, inputs);
				else if (name === "source") {
					var inputId = inputs.get(value.input);
					if (inputId == null) {
						inputId = inputsNextIndex;
						inputs.set(value.input, inputsNextIndex);
						inputsNextIndex++;
					}
					fixed[name] = {
						end: value.end,
						inputId,
						start: value.start
					};
				} else fixed[name] = value;
			}
			if (emitInputs) fixed.inputs = [].concat(inputs.keys()).map(function(input2) {
				return input2.toJSON();
			});
			return fixed;
		};
		_proto.toProxy = function toProxy() {
			if (!this.proxyCache) this.proxyCache = new Proxy(this, this.getProxyProcessor());
			return this.proxyCache;
		};
		_proto.toString = function toString(stringifier2) {
			if (stringifier2 === void 0) stringifier2 = stringify$3;
			if (stringifier2.stringify) stringifier2 = stringifier2.stringify;
			var result2 = "";
			stringifier2(this, function(i2) {
				result2 += i2;
			});
			return result2;
		};
		_proto.warn = function warn(result2, text, opts) {
			var data = { node: this };
			for (var i2 in opts) data[i2] = opts[i2];
			return result2.warn(text, data);
		};
		_create_class(Node3, [{
			key: "proxyOf",
			get: function get() {
				return this;
			}
		}]);
		return Node3;
	}();
	var node = Node$4;
	Node$4.default = Node$4;
	var Declaration$4 = /*#__PURE__*/ function(Node$3) {
		_inherits(Declaration2, Node$3);
		function Declaration2(defaults) {
			var _this;
			if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") defaults = _extends({}, defaults, { value: String(defaults.value) });
			_this = Node$3.call(this, defaults) || this;
			_this.type = "decl";
			return _this;
		}
		_create_class(Declaration2, [{
			key: "variable",
			get: function get() {
				return this.prop.startsWith("--") || this.prop[0] === "$";
			}
		}]);
		return Declaration2;
	}(node);
	var declaration = Declaration$4;
	Declaration$4.default = Declaration$4;
	var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
	var nanoid$1 = function(size) {
		if (size === void 0) size = 21;
		var id = "";
		var i2 = size;
		while (i2--) id += urlAlphabet[Math.random() * 64 | 0];
		return id;
	};
	var nonSecure = { nanoid: nanoid$1 };
	var SourceMapConsumer$2 = require$$2.SourceMapConsumer;
	var SourceMapGenerator$2 = require$$2.SourceMapGenerator;
	var existsSync = require$$2.existsSync;
	var readFileSync = require$$2.readFileSync;
	var dirname$1 = require$$2.dirname;
	var join = require$$2.join;
	function fromBase64(str) {
		if (Buffer) return Buffer.from(str, "base64").toString();
		else return window.atob(str);
	}
	var PreviousMap$2 = /*#__PURE__*/ function() {
		function PreviousMap2(css, opts) {
			if (opts.map === false) return;
			this.loadAnnotation(css);
			this.inline = this.startWith(this.annotation, "data:");
			var prev = opts.map ? opts.map.prev : void 0;
			var text = this.loadMap(opts.from, prev);
			if (!this.mapFile && opts.from) this.mapFile = opts.from;
			if (this.mapFile) this.root = dirname$1(this.mapFile);
			if (text) this.text = text;
		}
		var _proto = PreviousMap2.prototype;
		_proto.consumer = function consumer() {
			if (!this.consumerCache) this.consumerCache = new SourceMapConsumer$2(this.text);
			return this.consumerCache;
		};
		_proto.decodeInline = function decodeInline(text) {
			var baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
			var baseUri = /^data:application\/json;base64,/;
			if (/^data:application\/json;charset=utf-?8,/.test(text) || /^data:application\/json,/.test(text)) return decodeURIComponent(text.substr(RegExp.lastMatch.length));
			if (baseCharsetUri.test(text) || baseUri.test(text)) return fromBase64(text.substr(RegExp.lastMatch.length));
			var encoding = text.match(/data:application\/json;([^,]+),/)[1];
			throw new Error("Unsupported source map encoding " + encoding);
		};
		_proto.getAnnotationURL = function getAnnotationURL(sourceMapString) {
			return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
		};
		_proto.isMap = function isMap(map) {
			if ((typeof map === "undefined" ? "undefined" : _type_of(map)) !== "object") return false;
			return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
		};
		_proto.loadAnnotation = function loadAnnotation(css) {
			var comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
			if (!comments) return;
			var start = css.lastIndexOf(comments.pop());
			var end = css.indexOf("*/", start);
			if (start > -1 && end > -1) this.annotation = this.getAnnotationURL(css.substring(start, end));
		};
		_proto.loadFile = function loadFile(path) {
			this.root = dirname$1(path);
			if (existsSync(path)) {
				this.mapFile = path;
				return readFileSync(path, "utf-8").toString().trim();
			}
		};
		_proto.loadMap = function loadMap(file, prev) {
			if (prev === false) return false;
			if (prev) if (typeof prev === "string") return prev;
			else if (typeof prev === "function") {
				var prevPath = prev(file);
				if (prevPath) {
					var map = this.loadFile(prevPath);
					if (!map) throw new Error("Unable to load previous source map: " + prevPath.toString());
					return map;
				}
			} else if (_instanceof(prev, SourceMapConsumer$2)) return SourceMapGenerator$2.fromSourceMap(prev).toString();
			else if (_instanceof(prev, SourceMapGenerator$2)) return prev.toString();
			else if (this.isMap(prev)) return JSON.stringify(prev);
			else throw new Error("Unsupported previous source map format: " + prev.toString());
			else if (this.inline) return this.decodeInline(this.annotation);
			else if (this.annotation) {
				var map1 = this.annotation;
				if (file) map1 = join(dirname$1(file), map1);
				return this.loadFile(map1);
			}
		};
		_proto.startWith = function startWith(string, start) {
			if (!string) return false;
			return string.substr(0, start.length) === start;
		};
		_proto.withContent = function withContent() {
			return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
		};
		return PreviousMap2;
	}();
	var previousMap = PreviousMap$2;
	PreviousMap$2.default = PreviousMap$2;
	var SourceMapConsumer$1 = require$$2.SourceMapConsumer;
	var SourceMapGenerator$1 = require$$2.SourceMapGenerator;
	var fileURLToPath = require$$2.fileURLToPath;
	var pathToFileURL$1 = require$$2.pathToFileURL;
	var isAbsolute = require$$2.isAbsolute;
	var resolve$1 = require$$2.resolve;
	var nanoid = nonSecure.nanoid;
	var terminalHighlight = require$$2;
	var CssSyntaxError$1 = cssSyntaxError;
	var PreviousMap$1 = previousMap;
	var fromOffsetCache = Symbol("fromOffsetCache");
	var sourceMapAvailable$1 = Boolean(SourceMapConsumer$1 && SourceMapGenerator$1);
	var pathAvailable$1 = Boolean(resolve$1 && isAbsolute);
	var Input$4 = /*#__PURE__*/ function() {
		function Input2(css, opts) {
			if (opts === void 0) opts = {};
			if (css === null || typeof css === "undefined" || (typeof css === "undefined" ? "undefined" : _type_of(css)) === "object" && !css.toString) throw new Error("PostCSS received " + css + " instead of CSS string");
			this.css = css.toString();
			if (this.css[0] === "﻿" || this.css[0] === "￾") {
				this.hasBOM = true;
				this.css = this.css.slice(1);
			} else this.hasBOM = false;
			if (opts.from) if (!pathAvailable$1 || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) this.file = opts.from;
			else this.file = resolve$1(opts.from);
			if (pathAvailable$1 && sourceMapAvailable$1) {
				var map = new PreviousMap$1(this.css, opts);
				if (map.text) {
					this.map = map;
					var file = map.consumer().file;
					if (!this.file && file) this.file = this.mapResolve(file);
				}
			}
			if (!this.file) this.id = "<input css " + nanoid(6) + ">";
			if (this.map) this.map.file = this.from;
		}
		var _proto = Input2.prototype;
		_proto.error = function error(message, line, column, opts) {
			if (opts === void 0) opts = {};
			var result2;
			var endLine;
			var endColumn;
			if (line && (typeof line === "undefined" ? "undefined" : _type_of(line)) === "object") {
				var start = line;
				var end = column;
				if (typeof start.offset === "number") {
					var pos = this.fromOffset(start.offset);
					line = pos.line;
					column = pos.col;
				} else {
					line = start.line;
					column = start.column;
				}
				if (typeof end.offset === "number") {
					var pos1 = this.fromOffset(end.offset);
					endLine = pos1.line;
					endColumn = pos1.col;
				} else {
					endLine = end.line;
					endColumn = end.column;
				}
			} else if (!column) {
				var pos2 = this.fromOffset(line);
				line = pos2.line;
				column = pos2.col;
			}
			var origin = this.origin(line, column, endLine, endColumn);
			if (origin) result2 = new CssSyntaxError$1(message, origin.endLine === void 0 ? origin.line : {
				column: origin.column,
				line: origin.line
			}, origin.endLine === void 0 ? origin.column : {
				column: origin.endColumn,
				line: origin.endLine
			}, origin.source, origin.file, opts.plugin);
			else result2 = new CssSyntaxError$1(message, endLine === void 0 ? line : {
				column,
				line
			}, endLine === void 0 ? column : {
				column: endColumn,
				line: endLine
			}, this.css, this.file, opts.plugin);
			result2.input = {
				column,
				endColumn,
				endLine,
				line,
				source: this.css
			};
			if (this.file) {
				if (pathToFileURL$1) result2.input.url = pathToFileURL$1(this.file).toString();
				result2.input.file = this.file;
			}
			return result2;
		};
		_proto.fromOffset = function fromOffset(offset) {
			var lastLine;
			var lineToIndex;
			if (!this[fromOffsetCache]) {
				var lines = this.css.split("\n");
				lineToIndex = new Array(lines.length);
				var prevIndex = 0;
				for (var i2 = 0, l2 = lines.length; i2 < l2; i2++) {
					lineToIndex[i2] = prevIndex;
					prevIndex += lines[i2].length + 1;
				}
				this[fromOffsetCache] = lineToIndex;
			} else lineToIndex = this[fromOffsetCache];
			lastLine = lineToIndex[lineToIndex.length - 1];
			var min = 0;
			if (offset >= lastLine) min = lineToIndex.length - 1;
			else {
				var max = lineToIndex.length - 2;
				var mid;
				while (min < max) {
					mid = min + (max - min >> 1);
					if (offset < lineToIndex[mid]) max = mid - 1;
					else if (offset >= lineToIndex[mid + 1]) min = mid + 1;
					else {
						min = mid;
						break;
					}
				}
			}
			return {
				col: offset - lineToIndex[min] + 1,
				line: min + 1
			};
		};
		_proto.mapResolve = function mapResolve(file) {
			if (/^\w+:\/\//.test(file)) return file;
			return resolve$1(this.map.consumer().sourceRoot || this.map.root || ".", file);
		};
		_proto.origin = function origin(line, column, endLine, endColumn) {
			if (!this.map) return false;
			var consumer = this.map.consumer();
			var from = consumer.originalPositionFor({
				column,
				line
			});
			if (!from.source) return false;
			var to;
			if (typeof endLine === "number") to = consumer.originalPositionFor({
				column: endColumn,
				line: endLine
			});
			var fromUrl;
			if (isAbsolute(from.source)) fromUrl = pathToFileURL$1(from.source);
			else fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL$1(this.map.mapFile));
			var result2 = {
				column: from.column,
				endColumn: to && to.column,
				endLine: to && to.line,
				line: from.line,
				url: fromUrl.toString()
			};
			if (fromUrl.protocol === "file:") if (fileURLToPath) result2.file = fileURLToPath(fromUrl);
			else throw new Error("file: protocol is not available in this PostCSS build");
			var source = consumer.sourceContentFor(from.source);
			if (source) result2.source = source;
			return result2;
		};
		_proto.toJSON = function toJSON() {
			var json = {};
			for (var _i = 0, _iter = [
				"hasBOM",
				"css",
				"file",
				"id"
			]; _i < _iter.length; _i++) {
				var name = _iter[_i];
				if (this[name] != null) json[name] = this[name];
			}
			if (this.map) {
				json.map = _extends({}, this.map);
				if (json.map.consumerCache) json.map.consumerCache = void 0;
			}
			return json;
		};
		_create_class(Input2, [{
			key: "from",
			get: function get() {
				return this.file || this.id;
			}
		}]);
		return Input2;
	}();
	var input = Input$4;
	Input$4.default = Input$4;
	if (terminalHighlight && terminalHighlight.registerInput) terminalHighlight.registerInput(Input$4);
	var SourceMapConsumer = require$$2.SourceMapConsumer;
	var SourceMapGenerator = require$$2.SourceMapGenerator;
	var dirname = require$$2.dirname;
	var relative = require$$2.relative;
	var resolve$3 = require$$2.resolve;
	var sep = require$$2.sep;
	var pathToFileURL = require$$2.pathToFileURL;
	var Input$3 = input;
	var sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
	var pathAvailable = Boolean(dirname && resolve$3 && relative && sep);
	var mapGenerator = /* @__PURE__ */ function() {
		function MapGenerator2(stringify2, root2, opts, cssString) {
			this.stringify = stringify2;
			this.mapOpts = opts.map || {};
			this.root = root2;
			this.opts = opts;
			this.css = cssString;
			this.originalCSS = cssString;
			this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
			this.memoizedFileURLs = /* @__PURE__ */ new Map();
			this.memoizedPaths = /* @__PURE__ */ new Map();
			this.memoizedURLs = /* @__PURE__ */ new Map();
		}
		var _proto = MapGenerator2.prototype;
		_proto.addAnnotation = function addAnnotation() {
			var content;
			if (this.isInline()) content = "data:application/json;base64," + this.toBase64(this.map.toString());
			else if (typeof this.mapOpts.annotation === "string") content = this.mapOpts.annotation;
			else if (typeof this.mapOpts.annotation === "function") content = this.mapOpts.annotation(this.opts.to, this.root);
			else content = this.outputFile() + ".map";
			var eol = "\n";
			if (this.css.includes("\r\n")) eol = "\r\n";
			this.css += eol + "/*# sourceMappingURL=" + content + " */";
		};
		_proto.applyPrevMaps = function applyPrevMaps() {
			for (var _iterator = _create_for_of_iterator_helper_loose(this.previous()), _step; !(_step = _iterator()).done;) {
				var prev = _step.value;
				var from = this.toUrl(this.path(prev.file));
				var root2 = prev.root || dirname(prev.file);
				var map = void 0;
				if (this.mapOpts.sourcesContent === false) {
					map = new SourceMapConsumer(prev.text);
					if (map.sourcesContent) map.sourcesContent = null;
				} else map = prev.consumer();
				this.map.applySourceMap(map, from, this.toUrl(this.path(root2)));
			}
		};
		_proto.clearAnnotation = function clearAnnotation() {
			if (this.mapOpts.annotation === false) return;
			if (this.root) {
				var node2;
				for (var i2 = this.root.nodes.length - 1; i2 >= 0; i2--) {
					node2 = this.root.nodes[i2];
					if (node2.type !== "comment") continue;
					if (node2.text.indexOf("# sourceMappingURL=") === 0) this.root.removeChild(i2);
				}
			} else if (this.css) this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, "");
		};
		_proto.generate = function generate() {
			this.clearAnnotation();
			if (pathAvailable && sourceMapAvailable && this.isMap()) return this.generateMap();
			else {
				var result2 = "";
				this.stringify(this.root, function(i2) {
					result2 += i2;
				});
				return [result2];
			}
		};
		_proto.generateMap = function generateMap() {
			if (this.root) this.generateString();
			else if (this.previous().length === 1) {
				var prev = this.previous()[0].consumer();
				prev.file = this.outputFile();
				this.map = SourceMapGenerator.fromSourceMap(prev, { ignoreInvalidMapping: true });
			} else {
				this.map = new SourceMapGenerator({
					file: this.outputFile(),
					ignoreInvalidMapping: true
				});
				this.map.addMapping({
					generated: {
						column: 0,
						line: 1
					},
					original: {
						column: 0,
						line: 1
					},
					source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
				});
			}
			if (this.isSourcesContent()) this.setSourcesContent();
			if (this.root && this.previous().length > 0) this.applyPrevMaps();
			if (this.isAnnotation()) this.addAnnotation();
			if (this.isInline()) return [this.css];
			else return [this.css, this.map];
		};
		_proto.generateString = function generateString() {
			var _this = this;
			this.css = "";
			this.map = new SourceMapGenerator({
				file: this.outputFile(),
				ignoreInvalidMapping: true
			});
			var line = 1;
			var column = 1;
			var noSource = "<no source>";
			var mapping = {
				generated: {
					column: 0,
					line: 0
				},
				original: {
					column: 0,
					line: 0
				},
				source: ""
			};
			var lines;
			var last;
			this.stringify(this.root, function(str, node2, type) {
				_this.css += str;
				if (node2 && type !== "end") {
					mapping.generated.line = line;
					mapping.generated.column = column - 1;
					if (node2.source && node2.source.start) {
						mapping.source = _this.sourcePath(node2);
						mapping.original.line = node2.source.start.line;
						mapping.original.column = node2.source.start.column - 1;
						_this.map.addMapping(mapping);
					} else {
						mapping.source = noSource;
						mapping.original.line = 1;
						mapping.original.column = 0;
						_this.map.addMapping(mapping);
					}
				}
				lines = str.match(/\n/g);
				if (lines) {
					line += lines.length;
					last = str.lastIndexOf("\n");
					column = str.length - last;
				} else column += str.length;
				if (node2 && type !== "start") {
					var p = node2.parent || { raws: {} };
					if (!(node2.type === "decl" || node2.type === "atrule" && !node2.nodes) || node2 !== p.last || p.raws.semicolon) if (node2.source && node2.source.end) {
						mapping.source = _this.sourcePath(node2);
						mapping.original.line = node2.source.end.line;
						mapping.original.column = node2.source.end.column - 1;
						mapping.generated.line = line;
						mapping.generated.column = column - 2;
						_this.map.addMapping(mapping);
					} else {
						mapping.source = noSource;
						mapping.original.line = 1;
						mapping.original.column = 0;
						mapping.generated.line = line;
						mapping.generated.column = column - 1;
						_this.map.addMapping(mapping);
					}
				}
			});
		};
		_proto.isAnnotation = function isAnnotation() {
			if (this.isInline()) return true;
			if (typeof this.mapOpts.annotation !== "undefined") return this.mapOpts.annotation;
			if (this.previous().length) return this.previous().some(function(i2) {
				return i2.annotation;
			});
			return true;
		};
		_proto.isInline = function isInline() {
			if (typeof this.mapOpts.inline !== "undefined") return this.mapOpts.inline;
			var annotation = this.mapOpts.annotation;
			if (typeof annotation !== "undefined" && annotation !== true) return false;
			if (this.previous().length) return this.previous().some(function(i2) {
				return i2.inline;
			});
			return true;
		};
		_proto.isMap = function isMap() {
			if (typeof this.opts.map !== "undefined") return !!this.opts.map;
			return this.previous().length > 0;
		};
		_proto.isSourcesContent = function isSourcesContent() {
			if (typeof this.mapOpts.sourcesContent !== "undefined") return this.mapOpts.sourcesContent;
			if (this.previous().length) return this.previous().some(function(i2) {
				return i2.withContent();
			});
			return true;
		};
		_proto.outputFile = function outputFile() {
			if (this.opts.to) return this.path(this.opts.to);
			else if (this.opts.from) return this.path(this.opts.from);
			else return "to.css";
		};
		_proto.path = function path(file) {
			if (this.mapOpts.absolute) return file;
			if (file.charCodeAt(0) === 60) return file;
			if (/^\w+:\/\//.test(file)) return file;
			var cached = this.memoizedPaths.get(file);
			if (cached) return cached;
			var from = this.opts.to ? dirname(this.opts.to) : ".";
			if (typeof this.mapOpts.annotation === "string") from = dirname(resolve$3(from, this.mapOpts.annotation));
			var path = relative(from, file);
			this.memoizedPaths.set(file, path);
			return path;
		};
		_proto.previous = function previous() {
			var _this = this;
			if (!this.previousMaps) {
				this.previousMaps = [];
				if (this.root) this.root.walk(function(node2) {
					if (node2.source && node2.source.input.map) {
						var map = node2.source.input.map;
						if (!_this.previousMaps.includes(map)) _this.previousMaps.push(map);
					}
				});
				else {
					var input2 = new Input$3(this.originalCSS, this.opts);
					if (input2.map) this.previousMaps.push(input2.map);
				}
			}
			return this.previousMaps;
		};
		_proto.setSourcesContent = function setSourcesContent() {
			var _this = this;
			var already = {};
			if (this.root) this.root.walk(function(node2) {
				if (node2.source) {
					var from = node2.source.input.from;
					if (from && !already[from]) {
						already[from] = true;
						var fromUrl = _this.usesFileUrls ? _this.toFileUrl(from) : _this.toUrl(_this.path(from));
						_this.map.setSourceContent(fromUrl, node2.source.input.css);
					}
				}
			});
			else if (this.css) {
				var from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
				this.map.setSourceContent(from, this.css);
			}
		};
		_proto.sourcePath = function sourcePath(node2) {
			if (this.mapOpts.from) return this.toUrl(this.mapOpts.from);
			else if (this.usesFileUrls) return this.toFileUrl(node2.source.input.from);
			else return this.toUrl(this.path(node2.source.input.from));
		};
		_proto.toBase64 = function toBase64(str) {
			if (Buffer) return Buffer.from(str).toString("base64");
			else return window.btoa(unescape(encodeURIComponent(str)));
		};
		_proto.toFileUrl = function toFileUrl(path) {
			var cached = this.memoizedFileURLs.get(path);
			if (cached) return cached;
			if (pathToFileURL) {
				var fileURL = pathToFileURL(path).toString();
				this.memoizedFileURLs.set(path, fileURL);
				return fileURL;
			} else throw new Error("`map.absolute` option is not available in this PostCSS build");
		};
		_proto.toUrl = function toUrl(path) {
			var cached = this.memoizedURLs.get(path);
			if (cached) return cached;
			if (sep === "\\") path = path.replace(/\\/g, "/");
			var url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
			this.memoizedURLs.set(path, url);
			return url;
		};
		return MapGenerator2;
	}();
	var Comment$4 = /*#__PURE__*/ function(Node$2) {
		_inherits(Comment2, Node$2);
		function Comment2(defaults) {
			var _this = Node$2.call(this, defaults) || this;
			_this.type = "comment";
			return _this;
		}
		return Comment2;
	}(node);
	var comment = Comment$4;
	Comment$4.default = Comment$4;
	var isClean$1 = symbols.isClean;
	var my$1 = symbols.my;
	var Declaration$3 = declaration;
	var Comment$3 = comment;
	var Node$1 = node;
	var parse$4;
	var Rule$4;
	var AtRule$4;
	var Root$6;
	function cleanSource(nodes) {
		return nodes.map(function(i2) {
			if (i2.nodes) i2.nodes = cleanSource(i2.nodes);
			delete i2.source;
			return i2;
		});
	}
	function markDirtyUp(node2) {
		node2[isClean$1] = false;
		if (node2.proxyOf.nodes) for (var _iterator = _create_for_of_iterator_helper_loose(node2.proxyOf.nodes), _step; !(_step = _iterator()).done;) {
			var i2 = _step.value;
			markDirtyUp(i2);
		}
	}
	var Container$7 = /*#__PURE__*/ function(Node$1) {
		_inherits(Container2, Node$1);
		function Container2() {
			return Node$1.apply(this, arguments) || this;
		}
		var _proto = Container2.prototype;
		_proto.append = function append() {
			for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) children[_key] = arguments[_key];
			for (var _iterator = _create_for_of_iterator_helper_loose(children), _step; !(_step = _iterator()).done;) {
				var child = _step.value;
				for (var _iterator1 = _create_for_of_iterator_helper_loose(this.normalize(child, this.last)), _step1; !(_step1 = _iterator1()).done;) {
					var node2 = _step1.value;
					this.proxyOf.nodes.push(node2);
				}
			}
			this.markDirty();
			return this;
		};
		_proto.cleanRaws = function cleanRaws(keepBetween) {
			Node$1.prototype.cleanRaws.call(this, keepBetween);
			if (this.nodes) for (var _iterator = _create_for_of_iterator_helper_loose(this.nodes), _step; !(_step = _iterator()).done;) _step.value.cleanRaws(keepBetween);
		};
		_proto.each = function each(callback) {
			if (!this.proxyOf.nodes) return void 0;
			var iterator = this.getIterator();
			var index2;
			var result2;
			while (this.indexes[iterator] < this.proxyOf.nodes.length) {
				index2 = this.indexes[iterator];
				result2 = callback(this.proxyOf.nodes[index2], index2);
				if (result2 === false) break;
				this.indexes[iterator] += 1;
			}
			delete this.indexes[iterator];
			return result2;
		};
		_proto.every = function every(condition) {
			return this.nodes.every(condition);
		};
		_proto.getIterator = function getIterator() {
			if (!this.lastEach) this.lastEach = 0;
			if (!this.indexes) this.indexes = {};
			this.lastEach += 1;
			var iterator = this.lastEach;
			this.indexes[iterator] = 0;
			return iterator;
		};
		_proto.getProxyProcessor = function getProxyProcessor() {
			return {
				get: function get(node2, prop) {
					if (prop === "proxyOf") return node2;
					else if (!node2[prop]) return node2[prop];
					else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) return function() {
						for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
						var _node2;
						return (_node2 = node2)[prop].apply(_node2, [].concat(args.map(function(i2) {
							if (typeof i2 === "function") return function(child, index2) {
								return i2(child.toProxy(), index2);
							};
							else return i2;
						})));
					};
					else if (prop === "every" || prop === "some") return function(cb) {
						return node2[prop](function(child) {
							for (var _len = arguments.length, other = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) other[_key - 1] = arguments[_key];
							return cb.apply(void 0, [].concat([child.toProxy()], other));
						});
					};
					else if (prop === "root") return function() {
						return node2.root().toProxy();
					};
					else if (prop === "nodes") return node2.nodes.map(function(i2) {
						return i2.toProxy();
					});
					else if (prop === "first" || prop === "last") return node2[prop].toProxy();
					else return node2[prop];
				},
				set: function set(node2, prop, value) {
					if (node2[prop] === value) return true;
					node2[prop] = value;
					if (prop === "name" || prop === "params" || prop === "selector") node2.markDirty();
					return true;
				}
			};
		};
		_proto.index = function index(child) {
			if (typeof child === "number") return child;
			if (child.proxyOf) child = child.proxyOf;
			return this.proxyOf.nodes.indexOf(child);
		};
		_proto.insertAfter = function insertAfter(exist, add) {
			var existIndex = this.index(exist);
			var nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
			existIndex = this.index(exist);
			for (var _iterator = _create_for_of_iterator_helper_loose(nodes), _step; !(_step = _iterator()).done;) {
				var node2 = _step.value;
				this.proxyOf.nodes.splice(existIndex + 1, 0, node2);
			}
			var index2;
			for (var id in this.indexes) {
				index2 = this.indexes[id];
				if (existIndex < index2) this.indexes[id] = index2 + nodes.length;
			}
			this.markDirty();
			return this;
		};
		_proto.insertBefore = function insertBefore(exist, add) {
			var existIndex = this.index(exist);
			var type = existIndex === 0 ? "prepend" : false;
			var nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
			existIndex = this.index(exist);
			for (var _iterator = _create_for_of_iterator_helper_loose(nodes), _step; !(_step = _iterator()).done;) {
				var node2 = _step.value;
				this.proxyOf.nodes.splice(existIndex, 0, node2);
			}
			var index2;
			for (var id in this.indexes) {
				index2 = this.indexes[id];
				if (existIndex <= index2) this.indexes[id] = index2 + nodes.length;
			}
			this.markDirty();
			return this;
		};
		_proto.normalize = function normalize(nodes, sample) {
			var _this = this;
			if (typeof nodes === "string") nodes = cleanSource(parse$4(nodes).nodes);
			else if (typeof nodes === "undefined") nodes = [];
			else if (Array.isArray(nodes)) {
				nodes = nodes.slice(0);
				for (var _iterator = _create_for_of_iterator_helper_loose(nodes), _step; !(_step = _iterator()).done;) {
					var i2 = _step.value;
					if (i2.parent) i2.parent.removeChild(i2, "ignore");
				}
			} else if (nodes.type === "root" && this.type !== "document") {
				nodes = nodes.nodes.slice(0);
				for (var _iterator1 = _create_for_of_iterator_helper_loose(nodes), _step1; !(_step1 = _iterator1()).done;) {
					var i21 = _step1.value;
					if (i21.parent) i21.parent.removeChild(i21, "ignore");
				}
			} else if (nodes.type) nodes = [nodes];
			else if (nodes.prop) {
				if (typeof nodes.value === "undefined") throw new Error("Value field is missed in node creation");
				else if (typeof nodes.value !== "string") nodes.value = String(nodes.value);
				nodes = [new Declaration$3(nodes)];
			} else if (nodes.selector) nodes = [new Rule$4(nodes)];
			else if (nodes.name) nodes = [new AtRule$4(nodes)];
			else if (nodes.text) nodes = [new Comment$3(nodes)];
			else throw new Error("Unknown node type in node creation");
			return nodes.map(function(i2) {
				if (!i2[my$1]) Container2.rebuild(i2);
				i2 = i2.proxyOf;
				if (i2.parent) i2.parent.removeChild(i2);
				if (i2[isClean$1]) markDirtyUp(i2);
				if (typeof i2.raws.before === "undefined") {
					if (sample && typeof sample.raws.before !== "undefined") i2.raws.before = sample.raws.before.replace(/\S/g, "");
				}
				i2.parent = _this.proxyOf;
				return i2;
			});
		};
		_proto.prepend = function prepend() {
			for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) children[_key] = arguments[_key];
			children = children.reverse();
			for (var _iterator = _create_for_of_iterator_helper_loose(children), _step; !(_step = _iterator()).done;) {
				var child = _step.value;
				var nodes = this.normalize(child, this.first, "prepend").reverse();
				for (var _iterator1 = _create_for_of_iterator_helper_loose(nodes), _step1; !(_step1 = _iterator1()).done;) {
					var node2 = _step1.value;
					this.proxyOf.nodes.unshift(node2);
				}
				for (var id in this.indexes) this.indexes[id] = this.indexes[id] + nodes.length;
			}
			this.markDirty();
			return this;
		};
		_proto.push = function push(child) {
			child.parent = this;
			this.proxyOf.nodes.push(child);
			return this;
		};
		_proto.removeAll = function removeAll() {
			for (var _iterator = _create_for_of_iterator_helper_loose(this.proxyOf.nodes), _step; !(_step = _iterator()).done;) {
				var node2 = _step.value;
				node2.parent = void 0;
			}
			this.proxyOf.nodes = [];
			this.markDirty();
			return this;
		};
		_proto.removeChild = function removeChild(child) {
			child = this.index(child);
			this.proxyOf.nodes[child].parent = void 0;
			this.proxyOf.nodes.splice(child, 1);
			var index2;
			for (var id in this.indexes) {
				index2 = this.indexes[id];
				if (index2 >= child) this.indexes[id] = index2 - 1;
			}
			this.markDirty();
			return this;
		};
		_proto.replaceValues = function replaceValues(pattern, opts, callback) {
			if (!callback) {
				callback = opts;
				opts = {};
			}
			this.walkDecls(function(decl) {
				if (opts.props && !opts.props.includes(decl.prop)) return;
				if (opts.fast && !decl.value.includes(opts.fast)) return;
				decl.value = decl.value.replace(pattern, callback);
			});
			this.markDirty();
			return this;
		};
		_proto.some = function some(condition) {
			return this.nodes.some(condition);
		};
		_proto.walk = function walk(callback) {
			return this.each(function(child, i2) {
				var result2;
				try {
					result2 = callback(child, i2);
				} catch (e2) {
					throw child.addToError(e2);
				}
				if (result2 !== false && child.walk) result2 = child.walk(callback);
				return result2;
			});
		};
		_proto.walkAtRules = function walkAtRules(name, callback) {
			if (!callback) {
				callback = name;
				return this.walk(function(child, i2) {
					if (child.type === "atrule") return callback(child, i2);
				});
			}
			if (_instanceof(name, RegExp)) return this.walk(function(child, i2) {
				if (child.type === "atrule" && name.test(child.name)) return callback(child, i2);
			});
			return this.walk(function(child, i2) {
				if (child.type === "atrule" && child.name === name) return callback(child, i2);
			});
		};
		_proto.walkComments = function walkComments(callback) {
			return this.walk(function(child, i2) {
				if (child.type === "comment") return callback(child, i2);
			});
		};
		_proto.walkDecls = function walkDecls(prop, callback) {
			if (!callback) {
				callback = prop;
				return this.walk(function(child, i2) {
					if (child.type === "decl") return callback(child, i2);
				});
			}
			if (_instanceof(prop, RegExp)) return this.walk(function(child, i2) {
				if (child.type === "decl" && prop.test(child.prop)) return callback(child, i2);
			});
			return this.walk(function(child, i2) {
				if (child.type === "decl" && child.prop === prop) return callback(child, i2);
			});
		};
		_proto.walkRules = function walkRules(selector, callback) {
			if (!callback) {
				callback = selector;
				return this.walk(function(child, i2) {
					if (child.type === "rule") return callback(child, i2);
				});
			}
			if (_instanceof(selector, RegExp)) return this.walk(function(child, i2) {
				if (child.type === "rule" && selector.test(child.selector)) return callback(child, i2);
			});
			return this.walk(function(child, i2) {
				if (child.type === "rule" && child.selector === selector) return callback(child, i2);
			});
		};
		_create_class(Container2, [{
			key: "first",
			get: function get() {
				if (!this.proxyOf.nodes) return void 0;
				return this.proxyOf.nodes[0];
			}
		}, {
			key: "last",
			get: function get() {
				if (!this.proxyOf.nodes) return void 0;
				return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
			}
		}]);
		return Container2;
	}(Node$1);
	Container$7.registerParse = function(dependant) {
		parse$4 = dependant;
	};
	Container$7.registerRule = function(dependant) {
		Rule$4 = dependant;
	};
	Container$7.registerAtRule = function(dependant) {
		AtRule$4 = dependant;
	};
	Container$7.registerRoot = function(dependant) {
		Root$6 = dependant;
	};
	var container = Container$7;
	Container$7.default = Container$7;
	Container$7.rebuild = function(node2) {
		if (node2.type === "atrule") Object.setPrototypeOf(node2, AtRule$4.prototype);
		else if (node2.type === "rule") Object.setPrototypeOf(node2, Rule$4.prototype);
		else if (node2.type === "decl") Object.setPrototypeOf(node2, Declaration$3.prototype);
		else if (node2.type === "comment") Object.setPrototypeOf(node2, Comment$3.prototype);
		else if (node2.type === "root") Object.setPrototypeOf(node2, Root$6.prototype);
		node2[my$1] = true;
		if (node2.nodes) node2.nodes.forEach(function(child) {
			Container$7.rebuild(child);
		});
	};
	var Container$6 = container;
	var LazyResult$4;
	var Processor$3;
	var Document$3 = /*#__PURE__*/ function(Container$6) {
		_inherits(Document23, Container$6);
		function Document23(defaults) {
			var _this = Container$6.call(this, _extends({ type: "document" }, defaults)) || this;
			if (!_this.nodes) _this.nodes = [];
			return _this;
		}
		var _proto = Document23.prototype;
		_proto.toResult = function toResult(opts) {
			if (opts === void 0) opts = {};
			return new LazyResult$4(new Processor$3(), this, opts).stringify();
		};
		return Document23;
	}(Container$6);
	Document$3.registerLazyResult = function(dependant) {
		LazyResult$4 = dependant;
	};
	Document$3.registerProcessor = function(dependant) {
		Processor$3 = dependant;
	};
	var document$1$2 = Document$3;
	Document$3.default = Document$3;
	var printed = {};
	var warnOnce$2 = function warnOnce2(message) {
		if (printed[message]) return;
		printed[message] = true;
		if (typeof console !== "undefined" && console.warn) console.warn(message);
	};
	var Warning$2 = /*#__PURE__*/ function() {
		function Warning2(text, opts) {
			if (opts === void 0) opts = {};
			this.type = "warning";
			this.text = text;
			if (opts.node && opts.node.source) {
				var range = opts.node.rangeBy(opts);
				this.line = range.start.line;
				this.column = range.start.column;
				this.endLine = range.end.line;
				this.endColumn = range.end.column;
			}
			for (var opt in opts) this[opt] = opts[opt];
		}
		var _proto = Warning2.prototype;
		_proto.toString = function toString() {
			if (this.node) return this.node.error(this.text, {
				index: this.index,
				plugin: this.plugin,
				word: this.word
			}).message;
			if (this.plugin) return this.plugin + ": " + this.text;
			return this.text;
		};
		return Warning2;
	}();
	var warning = Warning$2;
	Warning$2.default = Warning$2;
	var Warning$1 = warning;
	var Result$3 = /*#__PURE__*/ function() {
		function Result2(processor2, root2, opts) {
			this.processor = processor2;
			this.messages = [];
			this.root = root2;
			this.opts = opts;
			this.css = void 0;
			this.map = void 0;
		}
		var _proto = Result2.prototype;
		_proto.toString = function toString() {
			return this.css;
		};
		_proto.warn = function warn(text, opts) {
			if (opts === void 0) opts = {};
			if (!opts.plugin) {
				if (this.lastPlugin && this.lastPlugin.postcssPlugin) opts.plugin = this.lastPlugin.postcssPlugin;
			}
			var warning2 = new Warning$1(text, opts);
			this.messages.push(warning2);
			return warning2;
		};
		_proto.warnings = function warnings() {
			return this.messages.filter(function(i2) {
				return i2.type === "warning";
			});
		};
		_create_class(Result2, [{
			key: "content",
			get: function get() {
				return this.css;
			}
		}]);
		return Result2;
	}();
	var result = Result$3;
	Result$3.default = Result$3;
	var SINGLE_QUOTE = "'".charCodeAt(0);
	var DOUBLE_QUOTE = "\"".charCodeAt(0);
	var BACKSLASH = "\\".charCodeAt(0);
	var SLASH = "/".charCodeAt(0);
	var NEWLINE = "\n".charCodeAt(0);
	var SPACE = " ".charCodeAt(0);
	var FEED = "\f".charCodeAt(0);
	var TAB = "	".charCodeAt(0);
	var CR = "\r".charCodeAt(0);
	var OPEN_SQUARE = "[".charCodeAt(0);
	var CLOSE_SQUARE = "]".charCodeAt(0);
	var OPEN_PARENTHESES = "(".charCodeAt(0);
	var CLOSE_PARENTHESES = ")".charCodeAt(0);
	var OPEN_CURLY = "{".charCodeAt(0);
	var CLOSE_CURLY = "}".charCodeAt(0);
	var SEMICOLON = ";".charCodeAt(0);
	var ASTERISK = "*".charCodeAt(0);
	var COLON = ":".charCodeAt(0);
	var AT = "@".charCodeAt(0);
	var RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
	var RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
	var RE_BAD_BRACKET = /.[\r\n"'(/\\]/;
	var RE_HEX_ESCAPE = /[\da-f]/i;
	var tokenize = function tokenizer2(input2, options) {
		if (options === void 0) options = {};
		var css = input2.css.valueOf();
		var ignore = options.ignoreErrors;
		var code;
		var next;
		var quote;
		var content;
		var escape;
		var escaped;
		var escapePos;
		var prev;
		var n2;
		var currentToken;
		var length = css.length;
		var pos = 0;
		var buffer = [];
		var returned = [];
		function position() {
			return pos;
		}
		function unclosed(what) {
			throw input2.error("Unclosed " + what, pos);
		}
		function endOfFile() {
			return returned.length === 0 && pos >= length;
		}
		function nextToken(opts) {
			if (returned.length) return returned.pop();
			if (pos >= length) return;
			var ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
			code = css.charCodeAt(pos);
			switch (code) {
				case NEWLINE:
				case SPACE:
				case TAB:
				case CR:
				case FEED:
					next = pos;
					do {
						next += 1;
						code = css.charCodeAt(next);
					} while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
					currentToken = ["space", css.slice(pos, next)];
					pos = next - 1;
					break;
				case OPEN_SQUARE:
				case CLOSE_SQUARE:
				case OPEN_CURLY:
				case CLOSE_CURLY:
				case COLON:
				case SEMICOLON:
				case CLOSE_PARENTHESES:
					var controlChar = String.fromCharCode(code);
					currentToken = [
						controlChar,
						controlChar,
						pos
					];
					break;
				case OPEN_PARENTHESES:
					prev = buffer.length ? buffer.pop()[1] : "";
					n2 = css.charCodeAt(pos + 1);
					if (prev === "url" && n2 !== SINGLE_QUOTE && n2 !== DOUBLE_QUOTE && n2 !== SPACE && n2 !== NEWLINE && n2 !== TAB && n2 !== FEED && n2 !== CR) {
						next = pos;
						do {
							escaped = false;
							next = css.indexOf(")", next + 1);
							if (next === -1) if (ignore || ignoreUnclosed) {
								next = pos;
								break;
							} else unclosed("bracket");
							escapePos = next;
							while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
								escapePos -= 1;
								escaped = !escaped;
							}
						} while (escaped);
						currentToken = [
							"brackets",
							css.slice(pos, next + 1),
							pos,
							next
						];
						pos = next;
					} else {
						next = css.indexOf(")", pos + 1);
						content = css.slice(pos, next + 1);
						if (next === -1 || RE_BAD_BRACKET.test(content)) currentToken = [
							"(",
							"(",
							pos
						];
						else {
							currentToken = [
								"brackets",
								content,
								pos,
								next
							];
							pos = next;
						}
					}
					break;
				case SINGLE_QUOTE:
				case DOUBLE_QUOTE:
					quote = code === SINGLE_QUOTE ? "'" : "\"";
					next = pos;
					do {
						escaped = false;
						next = css.indexOf(quote, next + 1);
						if (next === -1) if (ignore || ignoreUnclosed) {
							next = pos + 1;
							break;
						} else unclosed("string");
						escapePos = next;
						while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
							escapePos -= 1;
							escaped = !escaped;
						}
					} while (escaped);
					currentToken = [
						"string",
						css.slice(pos, next + 1),
						pos,
						next
					];
					pos = next;
					break;
				case AT:
					RE_AT_END.lastIndex = pos + 1;
					RE_AT_END.test(css);
					if (RE_AT_END.lastIndex === 0) next = css.length - 1;
					else next = RE_AT_END.lastIndex - 2;
					currentToken = [
						"at-word",
						css.slice(pos, next + 1),
						pos,
						next
					];
					pos = next;
					break;
				case BACKSLASH:
					next = pos;
					escape = true;
					while (css.charCodeAt(next + 1) === BACKSLASH) {
						next += 1;
						escape = !escape;
					}
					code = css.charCodeAt(next + 1);
					if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
						next += 1;
						if (RE_HEX_ESCAPE.test(css.charAt(next))) {
							while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) next += 1;
							if (css.charCodeAt(next + 1) === SPACE) next += 1;
						}
					}
					currentToken = [
						"word",
						css.slice(pos, next + 1),
						pos,
						next
					];
					pos = next;
					break;
				default:
					if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
						next = css.indexOf("*/", pos + 2) + 1;
						if (next === 0) if (ignore || ignoreUnclosed) next = css.length;
						else unclosed("comment");
						currentToken = [
							"comment",
							css.slice(pos, next + 1),
							pos,
							next
						];
						pos = next;
					} else {
						RE_WORD_END.lastIndex = pos + 1;
						RE_WORD_END.test(css);
						if (RE_WORD_END.lastIndex === 0) next = css.length - 1;
						else next = RE_WORD_END.lastIndex - 2;
						currentToken = [
							"word",
							css.slice(pos, next + 1),
							pos,
							next
						];
						buffer.push(currentToken);
						pos = next;
					}
					break;
			}
			pos++;
			return currentToken;
		}
		function back(token) {
			returned.push(token);
		}
		return {
			back,
			endOfFile,
			nextToken,
			position
		};
	};
	var Container$5 = container;
	var AtRule$3 = /*#__PURE__*/ function(Container$5) {
		_inherits(AtRule2, Container$5);
		function AtRule2(defaults) {
			var _this = Container$5.call(this, defaults) || this;
			_this.type = "atrule";
			return _this;
		}
		var _proto = AtRule2.prototype;
		_proto.append = function append() {
			for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) children[_key] = arguments[_key];
			var _Container$5_prototype_append;
			if (!this.proxyOf.nodes) this.nodes = [];
			return (_Container$5_prototype_append = Container$5.prototype.append).call.apply(_Container$5_prototype_append, [].concat([this], children));
		};
		_proto.prepend = function prepend() {
			for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) children[_key] = arguments[_key];
			var _Container$5_prototype_prepend;
			if (!this.proxyOf.nodes) this.nodes = [];
			return (_Container$5_prototype_prepend = Container$5.prototype.prepend).call.apply(_Container$5_prototype_prepend, [].concat([this], children));
		};
		return AtRule2;
	}(Container$5);
	var atRule = AtRule$3;
	AtRule$3.default = AtRule$3;
	Container$5.registerAtRule(AtRule$3);
	var Container$4 = container;
	var LazyResult$3;
	var Processor$2;
	var Root$5 = /*#__PURE__*/ function(Container$4) {
		_inherits(Root2, Container$4);
		function Root2(defaults) {
			var _this = Container$4.call(this, defaults) || this;
			_this.type = "root";
			if (!_this.nodes) _this.nodes = [];
			return _this;
		}
		var _proto = Root2.prototype;
		_proto.normalize = function normalize(child, sample, type) {
			var nodes = Container$4.prototype.normalize.call(this, child);
			if (sample) {
				if (type === "prepend") if (this.nodes.length > 1) sample.raws.before = this.nodes[1].raws.before;
				else delete sample.raws.before;
				else if (this.first !== sample) for (var _iterator = _create_for_of_iterator_helper_loose(nodes), _step; !(_step = _iterator()).done;) {
					var node2 = _step.value;
					node2.raws.before = sample.raws.before;
				}
			}
			return nodes;
		};
		_proto.removeChild = function removeChild(child, ignore) {
			var index2 = this.index(child);
			if (!ignore && index2 === 0 && this.nodes.length > 1) this.nodes[1].raws.before = this.nodes[index2].raws.before;
			return Container$4.prototype.removeChild.call(this, child);
		};
		_proto.toResult = function toResult(opts) {
			if (opts === void 0) opts = {};
			return new LazyResult$3(new Processor$2(), this, opts).stringify();
		};
		return Root2;
	}(Container$4);
	Root$5.registerLazyResult = function(dependant) {
		LazyResult$3 = dependant;
	};
	Root$5.registerProcessor = function(dependant) {
		Processor$2 = dependant;
	};
	var root = Root$5;
	Root$5.default = Root$5;
	Container$4.registerRoot(Root$5);
	var list$2 = {
		comma: function comma(string) {
			return list$2.split(string, [","], true);
		},
		space: function space(string) {
			return list$2.split(string, [
				" ",
				"\n",
				"	"
			]);
		},
		split: function split(string, separators, last) {
			var array = [];
			var current = "";
			var split = false;
			var func = 0;
			var inQuote = false;
			var prevQuote = "";
			var escape = false;
			for (var _iterator = _create_for_of_iterator_helper_loose(string), _step; !(_step = _iterator()).done;) {
				var letter = _step.value;
				if (escape) escape = false;
				else if (letter === "\\") escape = true;
				else if (inQuote) {
					if (letter === prevQuote) inQuote = false;
				} else if (letter === "\"" || letter === "'") {
					inQuote = true;
					prevQuote = letter;
				} else if (letter === "(") func += 1;
				else if (letter === ")") {
					if (func > 0) func -= 1;
				} else if (func === 0) {
					if (separators.includes(letter)) split = true;
				}
				if (split) {
					if (current !== "") array.push(current.trim());
					current = "";
					split = false;
				} else current += letter;
			}
			if (last || current !== "") array.push(current.trim());
			return array;
		}
	};
	var list_1 = list$2;
	list$2.default = list$2;
	var Container$3 = container;
	var list$1 = list_1;
	var Rule$3 = /*#__PURE__*/ function(Container$3) {
		_inherits(Rule2, Container$3);
		function Rule2(defaults) {
			var _this = Container$3.call(this, defaults) || this;
			_this.type = "rule";
			if (!_this.nodes) _this.nodes = [];
			return _this;
		}
		_create_class(Rule2, [{
			key: "selectors",
			get: function get() {
				return list$1.comma(this.selector);
			},
			set: function set(values) {
				var match = this.selector ? this.selector.match(/,\s*/) : null;
				var sep2 = match ? match[0] : "," + this.raw("between", "beforeOpen");
				this.selector = values.join(sep2);
			}
		}]);
		return Rule2;
	}(Container$3);
	var rule = Rule$3;
	Rule$3.default = Rule$3;
	Container$3.registerRule(Rule$3);
	var Declaration$2 = declaration;
	var tokenizer22 = tokenize;
	var Comment$2 = comment;
	var AtRule$2 = atRule;
	var Root$4 = root;
	var Rule$2 = rule;
	var SAFE_COMMENT_NEIGHBOR = {
		empty: true,
		space: true
	};
	function findLastWithPosition(tokens) {
		for (var i2 = tokens.length - 1; i2 >= 0; i2--) {
			var token = tokens[i2];
			var pos = token[3] || token[2];
			if (pos) return pos;
		}
	}
	var parser = /* @__PURE__ */ function() {
		function Parser2(input2) {
			this.input = input2;
			this.root = new Root$4();
			this.current = this.root;
			this.spaces = "";
			this.semicolon = false;
			this.createTokenizer();
			this.root.source = {
				input: input2,
				start: {
					column: 1,
					line: 1,
					offset: 0
				}
			};
		}
		var _proto = Parser2.prototype;
		_proto.atrule = function atrule(token) {
			var node2 = new AtRule$2();
			node2.name = token[1].slice(1);
			if (node2.name === "") this.unnamedAtrule(node2, token);
			this.init(node2, token[2]);
			var type;
			var prev;
			var shift;
			var last = false;
			var open = false;
			var params = [];
			var brackets = [];
			while (!this.tokenizer.endOfFile()) {
				token = this.tokenizer.nextToken();
				type = token[0];
				if (type === "(" || type === "[") brackets.push(type === "(" ? ")" : "]");
				else if (type === "{" && brackets.length > 0) brackets.push("}");
				else if (type === brackets[brackets.length - 1]) brackets.pop();
				if (brackets.length === 0) if (type === ";") {
					node2.source.end = this.getPosition(token[2]);
					node2.source.end.offset++;
					this.semicolon = true;
					break;
				} else if (type === "{") {
					open = true;
					break;
				} else if (type === "}") {
					if (params.length > 0) {
						shift = params.length - 1;
						prev = params[shift];
						while (prev && prev[0] === "space") prev = params[--shift];
						if (prev) {
							node2.source.end = this.getPosition(prev[3] || prev[2]);
							node2.source.end.offset++;
						}
					}
					this.end(token);
					break;
				} else params.push(token);
				else params.push(token);
				if (this.tokenizer.endOfFile()) {
					last = true;
					break;
				}
			}
			node2.raws.between = this.spacesAndCommentsFromEnd(params);
			if (params.length) {
				node2.raws.afterName = this.spacesAndCommentsFromStart(params);
				this.raw(node2, "params", params);
				if (last) {
					token = params[params.length - 1];
					node2.source.end = this.getPosition(token[3] || token[2]);
					node2.source.end.offset++;
					this.spaces = node2.raws.between;
					node2.raws.between = "";
				}
			} else {
				node2.raws.afterName = "";
				node2.params = "";
			}
			if (open) {
				node2.nodes = [];
				this.current = node2;
			}
		};
		_proto.checkMissedSemicolon = function checkMissedSemicolon(tokens) {
			var colon = this.colon(tokens);
			if (colon === false) return;
			var founded = 0;
			var token;
			for (var j = colon - 1; j >= 0; j--) {
				token = tokens[j];
				if (token[0] !== "space") {
					founded += 1;
					if (founded === 2) break;
				}
			}
			throw this.input.error("Missed semicolon", token[0] === "word" ? token[3] + 1 : token[2]);
		};
		_proto.colon = function colon(tokens) {
			var brackets = 0;
			var token;
			var type;
			var prev;
			for (var _iterator = _create_for_of_iterator_helper_loose(tokens.entries()), _step; !(_step = _iterator()).done;) {
				var _step_value = _step.value;
				var i2 = _step_value[0];
				token = _step_value[1];
				type = token[0];
				if (type === "(") brackets += 1;
				if (type === ")") brackets -= 1;
				if (brackets === 0 && type === ":") if (!prev) this.doubleColon(token);
				else if (prev[0] === "word" && prev[1] === "progid") continue;
				else return i2;
				prev = token;
			}
			return false;
		};
		_proto.comment = function comment(token) {
			var node2 = new Comment$2();
			this.init(node2, token[2]);
			node2.source.end = this.getPosition(token[3] || token[2]);
			node2.source.end.offset++;
			var text = token[1].slice(2, -2);
			if (/^\s*$/.test(text)) {
				node2.text = "";
				node2.raws.left = text;
				node2.raws.right = "";
			} else {
				var match = text.match(/^(\s*)([^]*\S)(\s*)$/);
				node2.text = match[2];
				node2.raws.left = match[1];
				node2.raws.right = match[3];
			}
		};
		_proto.createTokenizer = function createTokenizer() {
			this.tokenizer = tokenizer22(this.input);
		};
		_proto.decl = function decl(tokens, customProperty) {
			var node2 = new Declaration$2();
			this.init(node2, tokens[0][2]);
			var last = tokens[tokens.length - 1];
			if (last[0] === ";") {
				this.semicolon = true;
				tokens.pop();
			}
			node2.source.end = this.getPosition(last[3] || last[2] || findLastWithPosition(tokens));
			node2.source.end.offset++;
			while (tokens[0][0] !== "word") {
				if (tokens.length === 1) this.unknownWord(tokens);
				node2.raws.before += tokens.shift()[1];
			}
			node2.source.start = this.getPosition(tokens[0][2]);
			node2.prop = "";
			while (tokens.length) {
				var type = tokens[0][0];
				if (type === ":" || type === "space" || type === "comment") break;
				node2.prop += tokens.shift()[1];
			}
			node2.raws.between = "";
			var token;
			while (tokens.length) {
				token = tokens.shift();
				if (token[0] === ":") {
					node2.raws.between += token[1];
					break;
				} else {
					if (token[0] === "word" && /\w/.test(token[1])) this.unknownWord([token]);
					node2.raws.between += token[1];
				}
			}
			if (node2.prop[0] === "_" || node2.prop[0] === "*") {
				node2.raws.before += node2.prop[0];
				node2.prop = node2.prop.slice(1);
			}
			var firstSpaces = [];
			var next;
			while (tokens.length) {
				next = tokens[0][0];
				if (next !== "space" && next !== "comment") break;
				firstSpaces.push(tokens.shift());
			}
			this.precheckMissedSemicolon(tokens);
			for (var i2 = tokens.length - 1; i2 >= 0; i2--) {
				token = tokens[i2];
				if (token[1].toLowerCase() === "!important") {
					node2.important = true;
					var string = this.stringFrom(tokens, i2);
					string = this.spacesFromEnd(tokens) + string;
					if (string !== " !important") node2.raws.important = string;
					break;
				} else if (token[1].toLowerCase() === "important") {
					var cache = tokens.slice(0);
					var str = "";
					for (var j = i2; j > 0; j--) {
						var type1 = cache[j][0];
						if (str.trim().indexOf("!") === 0 && type1 !== "space") break;
						str = cache.pop()[1] + str;
					}
					if (str.trim().indexOf("!") === 0) {
						node2.important = true;
						node2.raws.important = str;
						tokens = cache;
					}
				}
				if (token[0] !== "space" && token[0] !== "comment") break;
			}
			if (tokens.some(function(i2) {
				return i2[0] !== "space" && i2[0] !== "comment";
			})) {
				node2.raws.between += firstSpaces.map(function(i2) {
					return i2[1];
				}).join("");
				firstSpaces = [];
			}
			this.raw(node2, "value", firstSpaces.concat(tokens), customProperty);
			if (node2.value.includes(":") && !customProperty) this.checkMissedSemicolon(tokens);
		};
		_proto.doubleColon = function doubleColon(token) {
			throw this.input.error("Double colon", { offset: token[2] }, { offset: token[2] + token[1].length });
		};
		_proto.emptyRule = function emptyRule(token) {
			var node2 = new Rule$2();
			this.init(node2, token[2]);
			node2.selector = "";
			node2.raws.between = "";
			this.current = node2;
		};
		_proto.end = function end(token) {
			if (this.current.nodes && this.current.nodes.length) this.current.raws.semicolon = this.semicolon;
			this.semicolon = false;
			this.current.raws.after = (this.current.raws.after || "") + this.spaces;
			this.spaces = "";
			if (this.current.parent) {
				this.current.source.end = this.getPosition(token[2]);
				this.current.source.end.offset++;
				this.current = this.current.parent;
			} else this.unexpectedClose(token);
		};
		_proto.endFile = function endFile() {
			if (this.current.parent) this.unclosedBlock();
			if (this.current.nodes && this.current.nodes.length) this.current.raws.semicolon = this.semicolon;
			this.current.raws.after = (this.current.raws.after || "") + this.spaces;
			this.root.source.end = this.getPosition(this.tokenizer.position());
		};
		_proto.freeSemicolon = function freeSemicolon(token) {
			this.spaces += token[1];
			if (this.current.nodes) {
				var prev = this.current.nodes[this.current.nodes.length - 1];
				if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
					prev.raws.ownSemicolon = this.spaces;
					this.spaces = "";
				}
			}
		};
		_proto.getPosition = function getPosition(offset) {
			var pos = this.input.fromOffset(offset);
			return {
				column: pos.col,
				line: pos.line,
				offset
			};
		};
		_proto.init = function init(node2, offset) {
			this.current.push(node2);
			node2.source = {
				input: this.input,
				start: this.getPosition(offset)
			};
			node2.raws.before = this.spaces;
			this.spaces = "";
			if (node2.type !== "comment") this.semicolon = false;
		};
		_proto.other = function other(start) {
			var end = false;
			var type = null;
			var colon = false;
			var bracket = null;
			var brackets = [];
			var customProperty = start[1].startsWith("--");
			var tokens = [];
			var token = start;
			while (token) {
				type = token[0];
				tokens.push(token);
				if (type === "(" || type === "[") {
					if (!bracket) bracket = token;
					brackets.push(type === "(" ? ")" : "]");
				} else if (customProperty && colon && type === "{") {
					if (!bracket) bracket = token;
					brackets.push("}");
				} else if (brackets.length === 0) {
					if (type === ";") if (colon) {
						this.decl(tokens, customProperty);
						return;
					} else break;
					else if (type === "{") {
						this.rule(tokens);
						return;
					} else if (type === "}") {
						this.tokenizer.back(tokens.pop());
						end = true;
						break;
					} else if (type === ":") colon = true;
				} else if (type === brackets[brackets.length - 1]) {
					brackets.pop();
					if (brackets.length === 0) bracket = null;
				}
				token = this.tokenizer.nextToken();
			}
			if (this.tokenizer.endOfFile()) end = true;
			if (brackets.length > 0) this.unclosedBracket(bracket);
			if (end && colon) {
				if (!customProperty) while (tokens.length) {
					token = tokens[tokens.length - 1][0];
					if (token !== "space" && token !== "comment") break;
					this.tokenizer.back(tokens.pop());
				}
				this.decl(tokens, customProperty);
			} else this.unknownWord(tokens);
		};
		_proto.parse = function parse() {
			var token;
			while (!this.tokenizer.endOfFile()) {
				token = this.tokenizer.nextToken();
				switch (token[0]) {
					case "space":
						this.spaces += token[1];
						break;
					case ";":
						this.freeSemicolon(token);
						break;
					case "}":
						this.end(token);
						break;
					case "comment":
						this.comment(token);
						break;
					case "at-word":
						this.atrule(token);
						break;
					case "{":
						this.emptyRule(token);
						break;
					default:
						this.other(token);
						break;
				}
			}
			this.endFile();
		};
		_proto.precheckMissedSemicolon = function precheckMissedSemicolon() {};
		_proto.raw = function raw(node2, prop, tokens, customProperty) {
			var token;
			var type;
			var length = tokens.length;
			var value = "";
			var clean = true;
			var next;
			var prev;
			for (var i2 = 0; i2 < length; i2 += 1) {
				token = tokens[i2];
				type = token[0];
				if (type === "space" && i2 === length - 1 && !customProperty) clean = false;
				else if (type === "comment") {
					prev = tokens[i2 - 1] ? tokens[i2 - 1][0] : "empty";
					next = tokens[i2 + 1] ? tokens[i2 + 1][0] : "empty";
					if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) if (value.slice(-1) === ",") clean = false;
					else value += token[1];
					else clean = false;
				} else value += token[1];
			}
			if (!clean) {
				var raw = tokens.reduce(function(all, i2) {
					return all + i2[1];
				}, "");
				node2.raws[prop] = {
					raw,
					value
				};
			}
			node2[prop] = value;
		};
		_proto.rule = function rule(tokens) {
			tokens.pop();
			var node2 = new Rule$2();
			this.init(node2, tokens[0][2]);
			node2.raws.between = this.spacesAndCommentsFromEnd(tokens);
			this.raw(node2, "selector", tokens);
			this.current = node2;
		};
		_proto.spacesAndCommentsFromEnd = function spacesAndCommentsFromEnd(tokens) {
			var lastTokenType;
			var spaces = "";
			while (tokens.length) {
				lastTokenType = tokens[tokens.length - 1][0];
				if (lastTokenType !== "space" && lastTokenType !== "comment") break;
				spaces = tokens.pop()[1] + spaces;
			}
			return spaces;
		};
		_proto.spacesAndCommentsFromStart = function spacesAndCommentsFromStart(tokens) {
			var next;
			var spaces = "";
			while (tokens.length) {
				next = tokens[0][0];
				if (next !== "space" && next !== "comment") break;
				spaces += tokens.shift()[1];
			}
			return spaces;
		};
		_proto.spacesFromEnd = function spacesFromEnd(tokens) {
			var lastTokenType;
			var spaces = "";
			while (tokens.length) {
				lastTokenType = tokens[tokens.length - 1][0];
				if (lastTokenType !== "space") break;
				spaces = tokens.pop()[1] + spaces;
			}
			return spaces;
		};
		_proto.stringFrom = function stringFrom(tokens, from) {
			var result2 = "";
			for (var i2 = from; i2 < tokens.length; i2++) result2 += tokens[i2][1];
			tokens.splice(from, tokens.length - from);
			return result2;
		};
		_proto.unclosedBlock = function unclosedBlock() {
			var pos = this.current.source.start;
			throw this.input.error("Unclosed block", pos.line, pos.column);
		};
		_proto.unclosedBracket = function unclosedBracket(bracket) {
			throw this.input.error("Unclosed bracket", { offset: bracket[2] }, { offset: bracket[2] + 1 });
		};
		_proto.unexpectedClose = function unexpectedClose(token) {
			throw this.input.error("Unexpected }", { offset: token[2] }, { offset: token[2] + 1 });
		};
		_proto.unknownWord = function unknownWord(tokens) {
			throw this.input.error("Unknown word", { offset: tokens[0][2] }, { offset: tokens[0][2] + tokens[0][1].length });
		};
		_proto.unnamedAtrule = function unnamedAtrule(node2, token) {
			throw this.input.error("At-rule without name", { offset: token[2] }, { offset: token[2] + token[1].length });
		};
		return Parser2;
	}();
	var Container$2 = container;
	var Parser22 = parser;
	var Input$2 = input;
	function parse$3(css, opts) {
		var parser2 = new Parser22(new Input$2(css, opts));
		try {
			parser2.parse();
		} catch (e2) {
			if (e2.name === "CssSyntaxError" && opts && opts.from) {
				if (/\.scss$/i.test(opts.from)) e2.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
				else if (/\.sass/i.test(opts.from)) e2.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
				else if (/\.less$/i.test(opts.from)) e2.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
			}
			throw e2;
		}
		return parser2.root;
	}
	var parse_1 = parse$3;
	parse$3.default = parse$3;
	Container$2.registerParse(parse$3);
	var isClean = symbols.isClean;
	var my = symbols.my;
	var MapGenerator$1 = mapGenerator;
	var stringify$2 = stringify_1;
	var Container$1 = container;
	var Document$2 = document$1$2;
	var warnOnce$1 = warnOnce$2;
	var Result$2 = result;
	var parse$2 = parse_1;
	var Root$3 = root;
	var TYPE_TO_CLASS_NAME = {
		atrule: "AtRule",
		comment: "Comment",
		decl: "Declaration",
		document: "Document",
		root: "Root",
		rule: "Rule"
	};
	var PLUGIN_PROPS = {
		AtRule: true,
		AtRuleExit: true,
		Comment: true,
		CommentExit: true,
		Declaration: true,
		DeclarationExit: true,
		Document: true,
		DocumentExit: true,
		Once: true,
		OnceExit: true,
		postcssPlugin: true,
		prepare: true,
		Root: true,
		RootExit: true,
		Rule: true,
		RuleExit: true
	};
	var NOT_VISITORS = {
		Once: true,
		postcssPlugin: true,
		prepare: true
	};
	var CHILDREN = 0;
	function isPromise(obj) {
		return (typeof obj === "undefined" ? "undefined" : _type_of(obj)) === "object" && typeof obj.then === "function";
	}
	function getEvents(node2) {
		var key = false;
		var type = TYPE_TO_CLASS_NAME[node2.type];
		if (node2.type === "decl") key = node2.prop.toLowerCase();
		else if (node2.type === "atrule") key = node2.name.toLowerCase();
		if (key && node2.append) return [
			type,
			type + "-" + key,
			CHILDREN,
			type + "Exit",
			type + "Exit-" + key
		];
		else if (key) return [
			type,
			type + "-" + key,
			type + "Exit",
			type + "Exit-" + key
		];
		else if (node2.append) return [
			type,
			CHILDREN,
			type + "Exit"
		];
		else return [type, type + "Exit"];
	}
	function toStack(node2) {
		var events;
		if (node2.type === "document") events = [
			"Document",
			CHILDREN,
			"DocumentExit"
		];
		else if (node2.type === "root") events = [
			"Root",
			CHILDREN,
			"RootExit"
		];
		else events = getEvents(node2);
		return {
			eventIndex: 0,
			events,
			iterator: 0,
			node: node2,
			visitorIndex: 0,
			visitors: []
		};
	}
	function cleanMarks(node2) {
		node2[isClean] = false;
		if (node2.nodes) node2.nodes.forEach(function(i2) {
			return cleanMarks(i2);
		});
		return node2;
	}
	var postcss$2 = {};
	var LazyResult$2 = /*#__PURE__*/ function() {
		function LazyResult2(processor2, css, opts) {
			var _this = this;
			this.stringified = false;
			this.processed = false;
			var root2;
			if ((typeof css === "undefined" ? "undefined" : _type_of(css)) === "object" && css !== null && (css.type === "root" || css.type === "document")) root2 = cleanMarks(css);
			else if (_instanceof(css, LazyResult2) || _instanceof(css, Result$2)) {
				root2 = cleanMarks(css.root);
				if (css.map) {
					if (typeof opts.map === "undefined") opts.map = {};
					if (!opts.map.inline) opts.map.inline = false;
					opts.map.prev = css.map;
				}
			} else {
				var parser2 = parse$2;
				if (opts.syntax) parser2 = opts.syntax.parse;
				if (opts.parser) parser2 = opts.parser;
				if (parser2.parse) parser2 = parser2.parse;
				try {
					root2 = parser2(css, opts);
				} catch (error) {
					this.processed = true;
					this.error = error;
				}
				if (root2 && !root2[my]) Container$1.rebuild(root2);
			}
			this.result = new Result$2(processor2, root2, opts);
			this.helpers = _extends({}, postcss$2, {
				postcss: postcss$2,
				result: this.result
			});
			this.plugins = this.processor.plugins.map(function(plugin22) {
				if ((typeof plugin22 === "undefined" ? "undefined" : _type_of(plugin22)) === "object" && plugin22.prepare) return _extends({}, plugin22, plugin22.prepare(_this.result));
				else return plugin22;
			});
		}
		var _proto = LazyResult2.prototype;
		_proto.async = function async() {
			if (this.error) return Promise.reject(this.error);
			if (this.processed) return Promise.resolve(this.result);
			if (!this.processing) this.processing = this.runAsync();
			return this.processing;
		};
		_proto.catch = function _catch(onRejected) {
			return this.async().catch(onRejected);
		};
		_proto.finally = function _finally(onFinally) {
			return this.async().then(onFinally, onFinally);
		};
		_proto.getAsyncError = function getAsyncError() {
			throw new Error("Use process(css).then(cb) to work with async plugins");
		};
		_proto.handleError = function handleError(error, node2) {
			var plugin22 = this.result.lastPlugin;
			try {
				if (node2) node2.addToError(error);
				this.error = error;
				if (error.name === "CssSyntaxError" && !error.plugin) {
					error.plugin = plugin22.postcssPlugin;
					error.setMessage();
				} else if (plugin22.postcssVersion) {
					var pluginName = plugin22.postcssPlugin;
					var pluginVer = plugin22.postcssVersion;
					var runtimeVer = this.result.processor.version;
					var a2 = pluginVer.split(".");
					var b = runtimeVer.split(".");
					if (a2[0] !== b[0] || parseInt(a2[1]) > parseInt(b[1])) console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below.");
				}
			} catch (err) {
				if (console && console.error) console.error(err);
			}
			return error;
		};
		_proto.prepareVisitors = function prepareVisitors() {
			var _this = this;
			this.listeners = {};
			var add = function(plugin22, type, cb) {
				if (!_this.listeners[type]) _this.listeners[type] = [];
				_this.listeners[type].push([plugin22, cb]);
			};
			for (var _iterator = _create_for_of_iterator_helper_loose(this.plugins), _step; !(_step = _iterator()).done;) {
				var plugin22 = _step.value;
				if ((typeof plugin22 === "undefined" ? "undefined" : _type_of(plugin22)) === "object") for (var event in plugin22) {
					if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) throw new Error("Unknown event " + event + " in " + plugin22.postcssPlugin + ". Try to update PostCSS (" + this.processor.version + " now).");
					if (!NOT_VISITORS[event]) {
						if (_type_of(plugin22[event]) === "object") for (var filter in plugin22[event]) if (filter === "*") add(plugin22, event, plugin22[event][filter]);
						else add(plugin22, event + "-" + filter.toLowerCase(), plugin22[event][filter]);
						else if (typeof plugin22[event] === "function") add(plugin22, event, plugin22[event]);
					}
				}
			}
			this.hasListener = Object.keys(this.listeners).length > 0;
		};
		_proto.runAsync = function runAsync() {
			var _this = this;
			return _async_to_generator(function() {
				var i2;
				var plugin22;
				var promise;
				var error;
				var root2;
				var stack;
				var promise1;
				var e2;
				var node2;
				var _loop;
				var _iterator;
				var _step;
				return _ts_generator(this, function(_state) {
					switch (_state.label) {
						case 0:
							_this.plugin = 0;
							i2 = 0;
							_state.label = 1;
						case 1:
							if (!(i2 < _this.plugins.length)) return [3, 6];
							plugin22 = _this.plugins[i2];
							promise = _this.runOnRoot(plugin22);
							if (!isPromise(promise)) return [3, 5];
							_state.label = 2;
						case 2:
							_state.trys.push([
								2,
								4,
								,
								5
							]);
							return [4, promise];
						case 3:
							_state.sent();
							return [3, 5];
						case 4:
							error = _state.sent();
							throw _this.handleError(error);
						case 5:
							i2++;
							return [3, 1];
						case 6:
							_this.prepareVisitors();
							if (!_this.hasListener) return [3, 18];
							root2 = _this.result.root;
							_state.label = 7;
						case 7:
							if (!!root2[isClean]) return [3, 14];
							root2[isClean] = true;
							stack = [toStack(root2)];
							_state.label = 8;
						case 8:
							if (!(stack.length > 0)) return [3, 13];
							promise1 = _this.visitTick(stack);
							if (!isPromise(promise1)) return [3, 12];
							_state.label = 9;
						case 9:
							_state.trys.push([
								9,
								11,
								,
								12
							]);
							return [4, promise1];
						case 10:
							_state.sent();
							return [3, 12];
						case 11:
							e2 = _state.sent();
							node2 = stack[stack.length - 1].node;
							throw _this.handleError(e2, node2);
						case 12: return [3, 8];
						case 13: return [3, 7];
						case 14:
							if (!_this.listeners.OnceExit) return [3, 18];
							_loop = function() {
								var _step_value;
								var plugin22;
								var visitor;
								var roots;
								var e2;
								return _ts_generator(this, function(_state) {
									switch (_state.label) {
										case 0:
											_step_value = _step.value, plugin22 = _step_value[0], visitor = _step_value[1];
											_this.result.lastPlugin = plugin22;
											_state.label = 1;
										case 1:
											_state.trys.push([
												1,
												6,
												,
												7
											]);
											if (!(root2.type === "document")) return [3, 3];
											roots = root2.nodes.map(function(subRoot) {
												return visitor(subRoot, _this.helpers);
											});
											return [4, Promise.all(roots)];
										case 2:
											_state.sent();
											return [3, 5];
										case 3: return [4, visitor(root2, _this.helpers)];
										case 4:
											_state.sent();
											_state.label = 5;
										case 5: return [3, 7];
										case 6:
											e2 = _state.sent();
											throw _this.handleError(e2);
										case 7: return [2];
									}
								});
							};
							_iterator = _create_for_of_iterator_helper_loose(_this.listeners.OnceExit);
							_state.label = 15;
						case 15:
							if (!!(_step = _iterator()).done) return [3, 18];
							return [5, _ts_values(_loop())];
						case 16:
							_state.sent();
							_state.label = 17;
						case 17: return [3, 15];
						case 18:
							_this.processed = true;
							return [2, _this.stringify()];
					}
				});
			})();
		};
		_proto.runOnRoot = function runOnRoot(plugin22) {
			var _this = this;
			this.result.lastPlugin = plugin22;
			try {
				if ((typeof plugin22 === "undefined" ? "undefined" : _type_of(plugin22)) === "object" && plugin22.Once) {
					if (this.result.root.type === "document") {
						var roots = this.result.root.nodes.map(function(root2) {
							return plugin22.Once(root2, _this.helpers);
						});
						if (isPromise(roots[0])) return Promise.all(roots);
						return roots;
					}
					return plugin22.Once(this.result.root, this.helpers);
				} else if (typeof plugin22 === "function") return plugin22(this.result.root, this.result);
			} catch (error) {
				throw this.handleError(error);
			}
		};
		_proto.stringify = function stringify() {
			if (this.error) throw this.error;
			if (this.stringified) return this.result;
			this.stringified = true;
			this.sync();
			var opts = this.result.opts;
			var str = stringify$2;
			if (opts.syntax) str = opts.syntax.stringify;
			if (opts.stringifier) str = opts.stringifier;
			if (str.stringify) str = str.stringify;
			var data = new MapGenerator$1(str, this.result.root, this.result.opts).generate();
			this.result.css = data[0];
			this.result.map = data[1];
			return this.result;
		};
		_proto.sync = function sync() {
			if (this.error) throw this.error;
			if (this.processed) return this.result;
			this.processed = true;
			if (this.processing) throw this.getAsyncError();
			for (var _iterator = _create_for_of_iterator_helper_loose(this.plugins), _step; !(_step = _iterator()).done;) {
				var plugin22 = _step.value;
				if (isPromise(this.runOnRoot(plugin22))) throw this.getAsyncError();
			}
			this.prepareVisitors();
			if (this.hasListener) {
				var root2 = this.result.root;
				while (!root2[isClean]) {
					root2[isClean] = true;
					this.walkSync(root2);
				}
				if (this.listeners.OnceExit) if (root2.type === "document") for (var _iterator1 = _create_for_of_iterator_helper_loose(root2.nodes), _step1; !(_step1 = _iterator1()).done;) {
					var subRoot = _step1.value;
					this.visitSync(this.listeners.OnceExit, subRoot);
				}
				else this.visitSync(this.listeners.OnceExit, root2);
			}
			return this.result;
		};
		_proto.then = function then(onFulfilled, onRejected) {
			if (!("from" in this.opts)) warnOnce$1("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
			return this.async().then(onFulfilled, onRejected);
		};
		_proto.toString = function toString() {
			return this.css;
		};
		_proto.visitSync = function visitSync(visitors, node2) {
			for (var _iterator = _create_for_of_iterator_helper_loose(visitors), _step; !(_step = _iterator()).done;) {
				var _step_value = _step.value;
				var plugin22 = _step_value[0];
				var visitor = _step_value[1];
				this.result.lastPlugin = plugin22;
				var promise = void 0;
				try {
					promise = visitor(node2, this.helpers);
				} catch (e2) {
					throw this.handleError(e2, node2.proxyOf);
				}
				if (node2.type !== "root" && node2.type !== "document" && !node2.parent) return true;
				if (isPromise(promise)) throw this.getAsyncError();
			}
		};
		_proto.visitTick = function visitTick(stack) {
			var visit2 = stack[stack.length - 1];
			var node2 = visit2.node;
			var visitors = visit2.visitors;
			if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
				stack.pop();
				return;
			}
			if (visitors.length > 0 && visit2.visitorIndex < visitors.length) {
				var _visitors_visit2_visitorIndex = visitors[visit2.visitorIndex];
				var plugin22 = _visitors_visit2_visitorIndex[0];
				var visitor = _visitors_visit2_visitorIndex[1];
				visit2.visitorIndex += 1;
				if (visit2.visitorIndex === visitors.length) {
					visit2.visitors = [];
					visit2.visitorIndex = 0;
				}
				this.result.lastPlugin = plugin22;
				try {
					return visitor(node2.toProxy(), this.helpers);
				} catch (e2) {
					throw this.handleError(e2, node2);
				}
			}
			if (visit2.iterator !== 0) {
				var iterator = visit2.iterator;
				var child;
				while (child = node2.nodes[node2.indexes[iterator]]) {
					node2.indexes[iterator] += 1;
					if (!child[isClean]) {
						child[isClean] = true;
						stack.push(toStack(child));
						return;
					}
				}
				visit2.iterator = 0;
				delete node2.indexes[iterator];
			}
			var events = visit2.events;
			while (visit2.eventIndex < events.length) {
				var event = events[visit2.eventIndex];
				visit2.eventIndex += 1;
				if (event === CHILDREN) {
					if (node2.nodes && node2.nodes.length) {
						node2[isClean] = true;
						visit2.iterator = node2.getIterator();
					}
					return;
				} else if (this.listeners[event]) {
					visit2.visitors = this.listeners[event];
					return;
				}
			}
			stack.pop();
		};
		_proto.walkSync = function walkSync(node2) {
			var _this = this;
			node2[isClean] = true;
			for (var _iterator = _create_for_of_iterator_helper_loose(getEvents(node2)), _step; !(_step = _iterator()).done;) {
				var event = _step.value;
				if (event === CHILDREN) {
					if (node2.nodes) node2.each(function(child) {
						if (!child[isClean]) _this.walkSync(child);
					});
				} else {
					var visitors = this.listeners[event];
					if (visitors) {
						if (this.visitSync(visitors, node2.toProxy())) return;
					}
				}
			}
		};
		_proto.warnings = function warnings() {
			return this.sync().warnings();
		};
		_create_class(LazyResult2, [
			{
				key: "content",
				get: function get() {
					return this.stringify().content;
				}
			},
			{
				key: "css",
				get: function get() {
					return this.stringify().css;
				}
			},
			{
				key: "map",
				get: function get() {
					return this.stringify().map;
				}
			},
			{
				key: "messages",
				get: function get() {
					return this.sync().messages;
				}
			},
			{
				key: "opts",
				get: function get() {
					return this.result.opts;
				}
			},
			{
				key: "processor",
				get: function get() {
					return this.result.processor;
				}
			},
			{
				key: "root",
				get: function get() {
					return this.sync().root;
				}
			},
			{
				key: Symbol.toStringTag,
				get: function get() {
					return "LazyResult";
				}
			}
		]);
		return LazyResult2;
	}();
	LazyResult$2.registerPostcss = function(dependant) {
		postcss$2 = dependant;
	};
	var lazyResult = LazyResult$2;
	LazyResult$2.default = LazyResult$2;
	Root$3.registerLazyResult(LazyResult$2);
	Document$2.registerLazyResult(LazyResult$2);
	var MapGenerator22 = mapGenerator;
	var stringify$1 = stringify_1;
	var warnOnce22 = warnOnce$2;
	var parse$1 = parse_1;
	var Result$1 = result;
	var NoWorkResult$1 = /*#__PURE__*/ function() {
		function NoWorkResult2(processor2, css, opts) {
			css = css.toString();
			this.stringified = false;
			this._processor = processor2;
			this._css = css;
			this._opts = opts;
			this._map = void 0;
			var root2;
			var str = stringify$1;
			this.result = new Result$1(this._processor, root2, this._opts);
			this.result.css = css;
			var self = this;
			Object.defineProperty(this.result, "root", { get: function get() {
				return self.root;
			} });
			var map = new MapGenerator22(str, root2, this._opts, css);
			if (map.isMap()) {
				var _map_generate = map.generate();
				var generatedCSS = _map_generate[0];
				var generatedMap = _map_generate[1];
				if (generatedCSS) this.result.css = generatedCSS;
				if (generatedMap) this.result.map = generatedMap;
			} else {
				map.clearAnnotation();
				this.result.css = map.css;
			}
		}
		var _proto = NoWorkResult2.prototype;
		_proto.async = function async() {
			if (this.error) return Promise.reject(this.error);
			return Promise.resolve(this.result);
		};
		_proto.catch = function _catch(onRejected) {
			return this.async().catch(onRejected);
		};
		_proto.finally = function _finally(onFinally) {
			return this.async().then(onFinally, onFinally);
		};
		_proto.sync = function sync() {
			if (this.error) throw this.error;
			return this.result;
		};
		_proto.then = function then(onFulfilled, onRejected) {
			if (!("from" in this._opts)) warnOnce22("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
			return this.async().then(onFulfilled, onRejected);
		};
		_proto.toString = function toString() {
			return this._css;
		};
		_proto.warnings = function warnings() {
			return [];
		};
		_create_class(NoWorkResult2, [
			{
				key: "content",
				get: function get() {
					return this.result.css;
				}
			},
			{
				key: "css",
				get: function get() {
					return this.result.css;
				}
			},
			{
				key: "map",
				get: function get() {
					return this.result.map;
				}
			},
			{
				key: "messages",
				get: function get() {
					return [];
				}
			},
			{
				key: "opts",
				get: function get() {
					return this.result.opts;
				}
			},
			{
				key: "processor",
				get: function get() {
					return this.result.processor;
				}
			},
			{
				key: "root",
				get: function get() {
					if (this._root) return this._root;
					var root2;
					var parser2 = parse$1;
					try {
						root2 = parser2(this._css, this._opts);
					} catch (error) {
						this.error = error;
					}
					if (this.error) throw this.error;
					else {
						this._root = root2;
						return root2;
					}
				}
			},
			{
				key: Symbol.toStringTag,
				get: function get() {
					return "NoWorkResult";
				}
			}
		]);
		return NoWorkResult2;
	}();
	var noWorkResult = NoWorkResult$1;
	NoWorkResult$1.default = NoWorkResult$1;
	var NoWorkResult22 = noWorkResult;
	var LazyResult$1 = lazyResult;
	var Document$1 = document$1$2;
	var Root$2 = root;
	var Processor$1 = /*#__PURE__*/ function() {
		function Processor2(plugins) {
			if (plugins === void 0) plugins = [];
			this.version = "8.4.38";
			this.plugins = this.normalize(plugins);
		}
		var _proto = Processor2.prototype;
		_proto.normalize = function normalize(plugins) {
			var normalized = [];
			for (var _iterator = _create_for_of_iterator_helper_loose(plugins), _step; !(_step = _iterator()).done;) {
				var i2 = _step.value;
				if (i2.postcss === true) i2 = i2();
				else if (i2.postcss) i2 = i2.postcss;
				if ((typeof i2 === "undefined" ? "undefined" : _type_of(i2)) === "object" && Array.isArray(i2.plugins)) normalized = normalized.concat(i2.plugins);
				else if ((typeof i2 === "undefined" ? "undefined" : _type_of(i2)) === "object" && i2.postcssPlugin) normalized.push(i2);
				else if (typeof i2 === "function") normalized.push(i2);
				else if ((typeof i2 === "undefined" ? "undefined" : _type_of(i2)) === "object" && (i2.parse || i2.stringify)) throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
				else throw new Error(i2 + " is not a PostCSS plugin");
			}
			return normalized;
		};
		_proto.process = function process1(css, opts) {
			if (opts === void 0) opts = {};
			if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) return new NoWorkResult22(this, css, opts);
			else return new LazyResult$1(this, css, opts);
		};
		_proto.use = function use(plugin22) {
			this.plugins = this.plugins.concat(this.normalize([plugin22]));
			return this;
		};
		return Processor2;
	}();
	var processor = Processor$1;
	Processor$1.default = Processor$1;
	Root$2.registerProcessor(Processor$1);
	Document$1.registerProcessor(Processor$1);
	var Declaration$1 = declaration;
	var PreviousMap22 = previousMap;
	var Comment$1 = comment;
	var AtRule$1 = atRule;
	var Input$1 = input;
	var Root$1 = root;
	var Rule$1 = rule;
	function fromJSON$1(json, inputs) {
		if (Array.isArray(json)) return json.map(function(n2) {
			return fromJSON$1(n2);
		});
		var ownInputs = json.inputs;
		var defaults = _object_without_properties_loose(json, ["inputs"]);
		if (ownInputs) {
			inputs = [];
			for (var _iterator = _create_for_of_iterator_helper_loose(ownInputs), _step; !(_step = _iterator()).done;) {
				var input2 = _step.value;
				var inputHydrated = _extends({}, input2, { __proto__: Input$1.prototype });
				if (inputHydrated.map) inputHydrated.map = _extends({}, inputHydrated.map, { __proto__: PreviousMap22.prototype });
				inputs.push(inputHydrated);
			}
		}
		if (defaults.nodes) defaults.nodes = json.nodes.map(function(n2) {
			return fromJSON$1(n2, inputs);
		});
		if (defaults.source) {
			var _defaults_source = defaults.source;
			var inputId = _defaults_source.inputId;
			defaults.source = _object_without_properties_loose(_defaults_source, ["inputId"]);
			if (inputId != null) defaults.source.input = inputs[inputId];
		}
		if (defaults.type === "root") return new Root$1(defaults);
		else if (defaults.type === "decl") return new Declaration$1(defaults);
		else if (defaults.type === "rule") return new Rule$1(defaults);
		else if (defaults.type === "comment") return new Comment$1(defaults);
		else if (defaults.type === "atrule") return new AtRule$1(defaults);
		else throw new Error("Unknown node type: " + json.type);
	}
	var fromJSON_1 = fromJSON$1;
	fromJSON$1.default = fromJSON$1;
	var CssSyntaxError22 = cssSyntaxError;
	var Declaration22 = declaration;
	var LazyResult22 = lazyResult;
	var Container22 = container;
	var Processor22 = processor;
	var stringify = stringify_1;
	var fromJSON = fromJSON_1;
	var Document222 = document$1$2;
	var Warning22 = warning;
	var Comment22 = comment;
	var AtRule22 = atRule;
	var Result22 = result;
	var Input22 = input;
	var parse = parse_1;
	var list = list_1;
	var Rule22 = rule;
	var Root22 = root;
	var Node22 = node;
	function postcss() {
		for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) plugins[_key] = arguments[_key];
		if (plugins.length === 1 && Array.isArray(plugins[0])) plugins = plugins[0];
		return new Processor22(plugins);
	}
	postcss.plugin = function plugin2(name, initializer) {
		var warningPrinted = false;
		function creator() {
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			if (console && console.warn && !warningPrinted) {
				warningPrinted = true;
				console.warn(name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration");
				if ({}.LANG && {}.LANG.startsWith("cn")) console.warn(name + ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226");
			}
			var transformer = initializer.apply(void 0, [].concat(args));
			transformer.postcssPlugin = name;
			transformer.postcssVersion = new Processor22().version;
			return transformer;
		}
		var cache;
		Object.defineProperty(creator, "postcss", { get: function get() {
			if (!cache) cache = creator();
			return cache;
		} });
		creator.process = function(css, processOpts, pluginOpts) {
			return postcss([creator(pluginOpts)]).process(css, processOpts);
		};
		return creator;
	};
	postcss.stringify = stringify;
	postcss.parse = parse;
	postcss.fromJSON = fromJSON;
	postcss.list = list;
	postcss.comment = function(defaults) {
		return new Comment22(defaults);
	};
	postcss.atRule = function(defaults) {
		return new AtRule22(defaults);
	};
	postcss.decl = function(defaults) {
		return new Declaration22(defaults);
	};
	postcss.rule = function(defaults) {
		return new Rule22(defaults);
	};
	postcss.root = function(defaults) {
		return new Root22(defaults);
	};
	postcss.document = function(defaults) {
		return new Document222(defaults);
	};
	postcss.CssSyntaxError = CssSyntaxError22;
	postcss.Declaration = Declaration22;
	postcss.Container = Container22;
	postcss.Processor = Processor22;
	postcss.Document = Document222;
	postcss.Comment = Comment22;
	postcss.Warning = Warning22;
	postcss.AtRule = AtRule22;
	postcss.Result = Result22;
	postcss.Input = Input22;
	postcss.Rule = Rule22;
	postcss.Root = Root22;
	postcss.Node = Node22;
	LazyResult22.registerPostcss(postcss);
	var postcss_1 = postcss;
	postcss.default = postcss;
	var postcss$1 = /* @__PURE__ */ getDefaultExportFromCjs(postcss_1);
	postcss$1.stringify;
	postcss$1.fromJSON;
	postcss$1.plugin;
	postcss$1.parse;
	postcss$1.list;
	postcss$1.document;
	postcss$1.comment;
	postcss$1.atRule;
	postcss$1.rule;
	postcss$1.decl;
	postcss$1.root;
	postcss$1.CssSyntaxError;
	postcss$1.Declaration;
	postcss$1.Container;
	postcss$1.Processor;
	postcss$1.Document;
	postcss$1.Comment;
	postcss$1.Warning;
	postcss$1.AtRule;
	postcss$1.Result;
	postcss$1.Input;
	postcss$1.Rule;
	postcss$1.Root;
	postcss$1.Node;
	var BaseRRNode = /*#__PURE__*/ function() {
		function BaseRRNode() {
			for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) _args[_key] = arguments[_key];
			__publicField2(this, "parentElement", null);
			__publicField2(this, "parentNode", null);
			__publicField2(this, "ownerDocument");
			__publicField2(this, "firstChild", null);
			__publicField2(this, "lastChild", null);
			__publicField2(this, "previousSibling", null);
			__publicField2(this, "nextSibling", null);
			__publicField2(this, "ELEMENT_NODE", 1);
			__publicField2(this, "TEXT_NODE", 3);
			__publicField2(this, "nodeType");
			__publicField2(this, "nodeName");
			__publicField2(this, "RRNodeType");
		}
		var _proto = BaseRRNode.prototype;
		_proto.contains = function contains(node2) {
			if (!_instanceof(node2, BaseRRNode)) return false;
			else if (node2.ownerDocument !== this.ownerDocument) return false;
			else if (node2 === this) return true;
			while (node2.parentNode) {
				if (node2.parentNode === this) return true;
				node2 = node2.parentNode;
			}
			return false;
		};
		_proto.appendChild = function appendChild(_newChild) {
			throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.");
		};
		_proto.insertBefore = function insertBefore(_newChild, _refChild) {
			throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.");
		};
		_proto.removeChild = function removeChild(_node) {
			throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.");
		};
		_proto.toString = function toString() {
			return "RRNode";
		};
		_create_class(BaseRRNode, [{
			key: "childNodes",
			get: function get() {
				var childNodes2 = [];
				var childIterator = this.firstChild;
				while (childIterator) {
					childNodes2.push(childIterator);
					childIterator = childIterator.nextSibling;
				}
				return childNodes2;
			}
		}]);
		return BaseRRNode;
	}();
	var testableAccessors = {
		Node: [
			"childNodes",
			"parentNode",
			"parentElement",
			"textContent"
		],
		ShadowRoot: ["host", "styleSheets"],
		Element: [
			"shadowRoot",
			"querySelector",
			"querySelectorAll"
		],
		MutationObserver: []
	};
	var testableMethods = {
		Node: ["contains", "getRootNode"],
		ShadowRoot: ["getSelection"],
		Element: [],
		MutationObserver: ["constructor"]
	};
	var untaintedBasePrototype = {};
	var isAngularZonePresent = function() {
		return !!globalThis.Zone;
	};
	function getUntaintedPrototype(key) {
		if (untaintedBasePrototype[key]) return untaintedBasePrototype[key];
		var defaultObj = globalThis[key];
		var defaultPrototype = defaultObj.prototype;
		var accessorNames = key in testableAccessors ? testableAccessors[key] : void 0;
		var isUntaintedAccessors = Boolean(accessorNames && accessorNames.every(function(accessor) {
			var _a2;
			var _b;
			return Boolean((_b = (_a2 = Object.getOwnPropertyDescriptor(defaultPrototype, accessor)) == null ? void 0 : _a2.get) == null ? void 0 : _b.toString().includes("[native code]"));
		}));
		var methodNames = key in testableMethods ? testableMethods[key] : void 0;
		var isUntaintedMethods = Boolean(methodNames && methodNames.every(function(method) {
			var _a2;
			return typeof defaultPrototype[method] === "function" && ((_a2 = defaultPrototype[method]) == null ? void 0 : _a2.toString().includes("[native code]"));
		}));
		if (isUntaintedAccessors && isUntaintedMethods && !isAngularZonePresent()) {
			untaintedBasePrototype[key] = defaultObj.prototype;
			return defaultObj.prototype;
		}
		try {
			var iframeEl = document.createElement("iframe");
			document.body.appendChild(iframeEl);
			var win = iframeEl.contentWindow;
			if (!win) return defaultObj.prototype;
			var untaintedObject = win[key].prototype;
			document.body.removeChild(iframeEl);
			if (!untaintedObject) return defaultPrototype;
			return untaintedBasePrototype[key] = untaintedObject;
		} catch (e) {
			return defaultPrototype;
		}
	}
	var untaintedAccessorCache = {};
	function getUntaintedAccessor(key, instance, accessor) {
		var _a2;
		var cacheKey = key + "." + String(accessor);
		if (untaintedAccessorCache[cacheKey]) return untaintedAccessorCache[cacheKey].call(instance);
		var untaintedPrototype = getUntaintedPrototype(key);
		var untaintedAccessor = (_a2 = Object.getOwnPropertyDescriptor(untaintedPrototype, accessor)) == null ? void 0 : _a2.get;
		if (!untaintedAccessor) return instance[accessor];
		untaintedAccessorCache[cacheKey] = untaintedAccessor;
		return untaintedAccessor.call(instance);
	}
	var untaintedMethodCache = {};
	function getUntaintedMethod(key, instance, method) {
		var cacheKey = key + "." + String(method);
		if (untaintedMethodCache[cacheKey]) return untaintedMethodCache[cacheKey].bind(instance);
		var untaintedMethod = getUntaintedPrototype(key)[method];
		if (typeof untaintedMethod !== "function") return instance[method];
		untaintedMethodCache[cacheKey] = untaintedMethod;
		return untaintedMethod.bind(instance);
	}
	function childNodes(n2) {
		return getUntaintedAccessor("Node", n2, "childNodes");
	}
	function parentNode(n2) {
		return getUntaintedAccessor("Node", n2, "parentNode");
	}
	function parentElement(n2) {
		return getUntaintedAccessor("Node", n2, "parentElement");
	}
	function textContent(n2) {
		return getUntaintedAccessor("Node", n2, "textContent");
	}
	function contains(n2, other) {
		return getUntaintedMethod("Node", n2, "contains")(other);
	}
	function getRootNode(n2) {
		return getUntaintedMethod("Node", n2, "getRootNode")();
	}
	function host(n2) {
		if (!n2 || !("host" in n2)) return null;
		return getUntaintedAccessor("ShadowRoot", n2, "host");
	}
	function styleSheets(n2) {
		return n2.styleSheets;
	}
	function shadowRoot(n2) {
		if (!n2 || !("shadowRoot" in n2)) return null;
		return getUntaintedAccessor("Element", n2, "shadowRoot");
	}
	function querySelector(n2, selectors) {
		return getUntaintedAccessor("Element", n2, "querySelector")(selectors);
	}
	function querySelectorAll(n2, selectors) {
		return getUntaintedAccessor("Element", n2, "querySelectorAll")(selectors);
	}
	function mutationObserverCtor() {
		return getUntaintedPrototype("MutationObserver").constructor;
	}
	function patch(source, name, replacement) {
		try {
			if (!(name in source)) return function() {};
			var original = source[name];
			var wrapped = replacement(original);
			if (typeof wrapped === "function") {
				wrapped.prototype = wrapped.prototype || {};
				Object.defineProperties(wrapped, { __rrweb_original__: {
					enumerable: false,
					value: original
				} });
			}
			source[name] = wrapped;
			return function() {
				source[name] = original;
			};
		} catch (e) {
			return function() {};
		}
	}
	var index = {
		childNodes,
		parentNode,
		parentElement,
		textContent,
		contains,
		getRootNode,
		host,
		styleSheets,
		shadowRoot,
		querySelector,
		querySelectorAll,
		mutationObserver: mutationObserverCtor,
		patch
	};
	function on(type, fn, target) {
		if (target === void 0) target = document;
		var options = {
			capture: true,
			passive: true
		};
		target.addEventListener(type, fn, options);
		return function() {
			return target.removeEventListener(type, fn, options);
		};
	}
	var DEPARTED_MIRROR_ACCESS_WARNING = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
	var _mirror = {
		map: {},
		getId: function getId() {
			console.error(DEPARTED_MIRROR_ACCESS_WARNING);
			return -1;
		},
		getNode: function getNode() {
			console.error(DEPARTED_MIRROR_ACCESS_WARNING);
			return null;
		},
		removeNodeFromMap: function removeNodeFromMap() {
			console.error(DEPARTED_MIRROR_ACCESS_WARNING);
		},
		has: function has() {
			console.error(DEPARTED_MIRROR_ACCESS_WARNING);
			return false;
		},
		reset: function reset() {
			console.error(DEPARTED_MIRROR_ACCESS_WARNING);
		}
	};
	if (typeof window !== "undefined" && window.Proxy && window.Reflect) _mirror = new Proxy(_mirror, { get: function get(target, prop, receiver) {
		if (prop === "map") console.error(DEPARTED_MIRROR_ACCESS_WARNING);
		return Reflect.get(target, prop, receiver);
	} });
	function throttle(func, wait, options) {
		if (options === void 0) options = {};
		var timeout = null;
		var previous = 0;
		return function() {
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			var now = Date.now();
			if (!previous && options.leading === false) previous = now;
			var remaining = wait - (now - previous);
			var context = this;
			if (remaining <= 0 || remaining > wait) {
				if (timeout) {
					clearTimeout(timeout);
					timeout = null;
				}
				previous = now;
				func.apply(context, args);
			} else if (!timeout && options.trailing !== false) timeout = setTimeout(function() {
				previous = options.leading === false ? 0 : Date.now();
				timeout = null;
				func.apply(context, args);
			}, remaining);
		};
	}
	function hookSetter(target, key, d, isRevoked, win) {
		if (win === void 0) win = window;
		var original = win.Object.getOwnPropertyDescriptor(target, key);
		win.Object.defineProperty(target, key, isRevoked ? d : { set: function set(value) {
			var _this = this;
			setTimeout(function() {
				d.set.call(_this, value);
			}, 0);
			if (original && original.set) original.set.call(this, value);
		} });
		return function() {
			return hookSetter(target, key, original || {}, true);
		};
	}
	var nowTimestamp = Date.now;
	if (!/* @__PURE__ */ /[1-9][0-9]{12}/.test(Date.now().toString())) nowTimestamp = function() {
		return /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime();
	};
	function getWindowScroll(win) {
		var _a2;
		var _b;
		var _c;
		var _d;
		var doc = win.document;
		return {
			left: doc.scrollingElement ? doc.scrollingElement.scrollLeft : win.pageXOffset !== void 0 ? win.pageXOffset : doc.documentElement.scrollLeft || (doc == null ? void 0 : doc.body) && ((_a2 = index.parentElement(doc.body)) == null ? void 0 : _a2.scrollLeft) || ((_b = doc == null ? void 0 : doc.body) == null ? void 0 : _b.scrollLeft) || 0,
			top: doc.scrollingElement ? doc.scrollingElement.scrollTop : win.pageYOffset !== void 0 ? win.pageYOffset : (doc == null ? void 0 : doc.documentElement.scrollTop) || (doc == null ? void 0 : doc.body) && ((_c = index.parentElement(doc.body)) == null ? void 0 : _c.scrollTop) || ((_d = doc == null ? void 0 : doc.body) == null ? void 0 : _d.scrollTop) || 0
		};
	}
	function getWindowHeight() {
		return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
	}
	function getWindowWidth() {
		return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
	}
	function closestElementOfNode(node2) {
		if (!node2) return null;
		return node2.nodeType === node2.ELEMENT_NODE ? node2 : index.parentElement(node2);
	}
	function isBlocked(node2, blockClass, blockSelector, checkAncestors) {
		if (!node2) return false;
		var el = closestElementOfNode(node2);
		if (!el) return false;
		try {
			if (typeof blockClass === "string") {
				if (el.classList.contains(blockClass)) return true;
				if (checkAncestors && el.closest("." + blockClass) !== null) return true;
			} else if (classMatchesRegex(el, blockClass, checkAncestors)) return true;
		} catch (e2) {}
		if (blockSelector) {
			if (el.matches(blockSelector)) return true;
			if (checkAncestors && el.closest(blockSelector) !== null) return true;
		}
		return false;
	}
	function isSerialized(n2, mirror2) {
		return mirror2.getId(n2) !== -1;
	}
	function isIgnored(n2, mirror2, slimDOMOptions) {
		if (n2.tagName === "TITLE" && slimDOMOptions.headTitleMutations) return true;
		return mirror2.getId(n2) === IGNORED_NODE;
	}
	function isAncestorRemoved(target, mirror2) {
		if (isShadowRoot(target)) return false;
		var id = mirror2.getId(target);
		if (!mirror2.has(id)) return true;
		var parent = index.parentNode(target);
		if (parent && parent.nodeType === target.DOCUMENT_NODE) return false;
		if (!parent) return true;
		return isAncestorRemoved(parent, mirror2);
	}
	function legacy_isTouchEvent(event) {
		return Boolean(event.changedTouches);
	}
	function polyfill$1(win) {
		if (win === void 0) win = window;
		if ("NodeList" in win && !win.NodeList.prototype.forEach) win.NodeList.prototype.forEach = Array.prototype.forEach;
		if ("DOMTokenList" in win && !win.DOMTokenList.prototype.forEach) win.DOMTokenList.prototype.forEach = Array.prototype.forEach;
	}
	function isSerializedIframe(n2, mirror2) {
		return Boolean(n2.nodeName === "IFRAME" && mirror2.getMeta(n2));
	}
	function isSerializedStylesheet(n2, mirror2) {
		return Boolean(n2.nodeName === "LINK" && n2.nodeType === n2.ELEMENT_NODE && n2.getAttribute && n2.getAttribute("rel") === "stylesheet" && mirror2.getMeta(n2));
	}
	function hasShadowRoot(n2) {
		if (!n2) return false;
		if (_instanceof(n2, BaseRRNode) && "shadowRoot" in n2) return Boolean(n2.shadowRoot);
		return Boolean(index.shadowRoot(n2));
	}
	var StyleSheetMirror = /*#__PURE__*/ function() {
		function StyleSheetMirror() {
			__publicField(this, "id", 1);
			__publicField(this, "styleIDMap", /* @__PURE__ */ new WeakMap());
			__publicField(this, "idStyleMap", /* @__PURE__ */ new Map());
		}
		var _proto = StyleSheetMirror.prototype;
		_proto.getId = function getId(stylesheet) {
			var _this_styleIDMap_get;
			return (_this_styleIDMap_get = this.styleIDMap.get(stylesheet)) != null ? _this_styleIDMap_get : -1;
		};
		_proto.has = function has(stylesheet) {
			return this.styleIDMap.has(stylesheet);
		};
		/**
		* @returns If the stylesheet is in the mirror, returns the id of the stylesheet. If not, return the new assigned id.
		*/ _proto.add = function add(stylesheet, id) {
			if (this.has(stylesheet)) return this.getId(stylesheet);
			var newId;
			if (id === void 0) newId = this.id++;
			else newId = id;
			this.styleIDMap.set(stylesheet, newId);
			this.idStyleMap.set(newId, stylesheet);
			return newId;
		};
		_proto.getStyle = function getStyle(id) {
			return this.idStyleMap.get(id) || null;
		};
		_proto.reset = function reset() {
			this.styleIDMap = /* @__PURE__ */ new WeakMap();
			this.idStyleMap = /* @__PURE__ */ new Map();
			this.id = 1;
		};
		_proto.generateId = function generateId() {
			return this.id++;
		};
		return StyleSheetMirror;
	}();
	function getShadowHost(n2) {
		var _a2;
		var shadowHost = null;
		if ("getRootNode" in n2 && ((_a2 = index.getRootNode(n2)) == null ? void 0 : _a2.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && index.host(index.getRootNode(n2))) shadowHost = index.host(index.getRootNode(n2));
		return shadowHost;
	}
	function getRootShadowHost(n2) {
		var rootShadowHost = n2;
		var shadowHost;
		while (shadowHost = getShadowHost(rootShadowHost)) rootShadowHost = shadowHost;
		return rootShadowHost;
	}
	function shadowHostInDom(n2) {
		var doc = n2.ownerDocument;
		if (!doc) return false;
		var shadowHost = getRootShadowHost(n2);
		return index.contains(doc, shadowHost);
	}
	function inDom(n2) {
		var doc = n2.ownerDocument;
		if (!doc) return false;
		return index.contains(doc, n2) || shadowHostInDom(n2);
	}
	var EventType = /* @__PURE__ */ function(EventType2) {
		EventType2[EventType2["DomContentLoaded"] = 0] = "DomContentLoaded";
		EventType2[EventType2["Load"] = 1] = "Load";
		EventType2[EventType2["FullSnapshot"] = 2] = "FullSnapshot";
		EventType2[EventType2["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
		EventType2[EventType2["Meta"] = 4] = "Meta";
		EventType2[EventType2["Custom"] = 5] = "Custom";
		EventType2[EventType2["Plugin"] = 6] = "Plugin";
		return EventType2;
	}(EventType || {});
	var IncrementalSource = /* @__PURE__ */ function(IncrementalSource2) {
		IncrementalSource2[IncrementalSource2["Mutation"] = 0] = "Mutation";
		IncrementalSource2[IncrementalSource2["MouseMove"] = 1] = "MouseMove";
		IncrementalSource2[IncrementalSource2["MouseInteraction"] = 2] = "MouseInteraction";
		IncrementalSource2[IncrementalSource2["Scroll"] = 3] = "Scroll";
		IncrementalSource2[IncrementalSource2["ViewportResize"] = 4] = "ViewportResize";
		IncrementalSource2[IncrementalSource2["Input"] = 5] = "Input";
		IncrementalSource2[IncrementalSource2["TouchMove"] = 6] = "TouchMove";
		IncrementalSource2[IncrementalSource2["MediaInteraction"] = 7] = "MediaInteraction";
		IncrementalSource2[IncrementalSource2["StyleSheetRule"] = 8] = "StyleSheetRule";
		IncrementalSource2[IncrementalSource2["CanvasMutation"] = 9] = "CanvasMutation";
		IncrementalSource2[IncrementalSource2["Font"] = 10] = "Font";
		IncrementalSource2[IncrementalSource2["Log"] = 11] = "Log";
		IncrementalSource2[IncrementalSource2["Drag"] = 12] = "Drag";
		IncrementalSource2[IncrementalSource2["StyleDeclaration"] = 13] = "StyleDeclaration";
		IncrementalSource2[IncrementalSource2["Selection"] = 14] = "Selection";
		IncrementalSource2[IncrementalSource2["AdoptedStyleSheet"] = 15] = "AdoptedStyleSheet";
		IncrementalSource2[IncrementalSource2["CustomElement"] = 16] = "CustomElement";
		return IncrementalSource2;
	}(IncrementalSource || {});
	var MouseInteractions = /* @__PURE__ */ function(MouseInteractions2) {
		MouseInteractions2[MouseInteractions2["MouseUp"] = 0] = "MouseUp";
		MouseInteractions2[MouseInteractions2["MouseDown"] = 1] = "MouseDown";
		MouseInteractions2[MouseInteractions2["Click"] = 2] = "Click";
		MouseInteractions2[MouseInteractions2["ContextMenu"] = 3] = "ContextMenu";
		MouseInteractions2[MouseInteractions2["DblClick"] = 4] = "DblClick";
		MouseInteractions2[MouseInteractions2["Focus"] = 5] = "Focus";
		MouseInteractions2[MouseInteractions2["Blur"] = 6] = "Blur";
		MouseInteractions2[MouseInteractions2["TouchStart"] = 7] = "TouchStart";
		MouseInteractions2[MouseInteractions2["TouchMove_Departed"] = 8] = "TouchMove_Departed";
		MouseInteractions2[MouseInteractions2["TouchEnd"] = 9] = "TouchEnd";
		MouseInteractions2[MouseInteractions2["TouchCancel"] = 10] = "TouchCancel";
		return MouseInteractions2;
	}(MouseInteractions || {});
	var PointerTypes = /* @__PURE__ */ function(PointerTypes2) {
		PointerTypes2[PointerTypes2["Mouse"] = 0] = "Mouse";
		PointerTypes2[PointerTypes2["Pen"] = 1] = "Pen";
		PointerTypes2[PointerTypes2["Touch"] = 2] = "Touch";
		return PointerTypes2;
	}(PointerTypes || {});
	var CanvasContext = /* @__PURE__ */ function(CanvasContext2) {
		CanvasContext2[CanvasContext2["2D"] = 0] = "2D";
		CanvasContext2[CanvasContext2["WebGL"] = 1] = "WebGL";
		CanvasContext2[CanvasContext2["WebGL2"] = 2] = "WebGL2";
		return CanvasContext2;
	}(CanvasContext || {});
	var MediaInteractions = /* @__PURE__ */ function(MediaInteractions2) {
		MediaInteractions2[MediaInteractions2["Play"] = 0] = "Play";
		MediaInteractions2[MediaInteractions2["Pause"] = 1] = "Pause";
		MediaInteractions2[MediaInteractions2["Seeked"] = 2] = "Seeked";
		MediaInteractions2[MediaInteractions2["VolumeChange"] = 3] = "VolumeChange";
		MediaInteractions2[MediaInteractions2["RateChange"] = 4] = "RateChange";
		return MediaInteractions2;
	}(MediaInteractions || {});
	var NodeType = /* @__PURE__ */ function(NodeType2) {
		NodeType2[NodeType2["Document"] = 0] = "Document";
		NodeType2[NodeType2["DocumentType"] = 1] = "DocumentType";
		NodeType2[NodeType2["Element"] = 2] = "Element";
		NodeType2[NodeType2["Text"] = 3] = "Text";
		NodeType2[NodeType2["CDATA"] = 4] = "CDATA";
		NodeType2[NodeType2["Comment"] = 5] = "Comment";
		return NodeType2;
	}(NodeType || {});
	function isNodeInLinkedList(n2) {
		return "__ln" in n2;
	}
	var DoubleLinkedList = /*#__PURE__*/ function() {
		function DoubleLinkedList() {
			__publicField(this, "length", 0);
			__publicField(this, "head", null);
			__publicField(this, "tail", null);
		}
		var _proto = DoubleLinkedList.prototype;
		_proto.get = function get(position) {
			if (position >= this.length) throw new Error("Position outside of list range");
			var current = this.head;
			for (var index2 = 0; index2 < position; index2++) current = (current == null ? void 0 : current.next) || null;
			return current;
		};
		_proto.addNode = function addNode(n2) {
			var node2 = {
				value: n2,
				previous: null,
				next: null
			};
			n2.__ln = node2;
			if (n2.previousSibling && isNodeInLinkedList(n2.previousSibling)) {
				var current = n2.previousSibling.__ln.next;
				node2.next = current;
				node2.previous = n2.previousSibling.__ln;
				n2.previousSibling.__ln.next = node2;
				if (current) current.previous = node2;
			} else if (n2.nextSibling && isNodeInLinkedList(n2.nextSibling) && n2.nextSibling.__ln.previous) {
				var current1 = n2.nextSibling.__ln.previous;
				node2.previous = current1;
				node2.next = n2.nextSibling.__ln;
				n2.nextSibling.__ln.previous = node2;
				if (current1) current1.next = node2;
			} else {
				if (this.head) this.head.previous = node2;
				node2.next = this.head;
				this.head = node2;
			}
			if (node2.next === null) this.tail = node2;
			this.length++;
		};
		_proto.removeNode = function removeNode(n2) {
			var current = n2.__ln;
			if (!this.head) return;
			if (!current.previous) {
				this.head = current.next;
				if (this.head) this.head.previous = null;
				else this.tail = null;
			} else {
				current.previous.next = current.next;
				if (current.next) current.next.previous = current.previous;
				else this.tail = current.previous;
			}
			if (n2.__ln) delete n2.__ln;
			this.length--;
		};
		return DoubleLinkedList;
	}();
	var moveKey = function(id, parentId) {
		return id + "@" + parentId;
	};
	var MutationBuffer = /*#__PURE__*/ function() {
		function MutationBuffer() {
			var _this = this;
			__publicField(this, "frozen", false);
			__publicField(this, "locked", false);
			__publicField(this, "texts", []);
			__publicField(this, "attributes", []);
			__publicField(this, "attributeMap", /* @__PURE__ */ new WeakMap());
			__publicField(this, "removes", []);
			__publicField(this, "mapRemoves", []);
			__publicField(this, "movedMap", {});
			/**
			* the browser MutationObserver emits multiple mutations after
			* a delay for performance reasons, making tracing added nodes hard
			* in our `processMutations` callback function.
			* For example, if we append an element el_1 into body, and then append
			* another element el_2 into el_1, these two mutations may be passed to the
			* callback function together when the two operations were done.
			* Generally we need to trace child nodes of newly added nodes, but in this
			* case if we count el_2 as el_1's child node in the first mutation record,
			* then we will count el_2 again in the second mutation record which was
			* duplicated.
			* To avoid of duplicate counting added nodes, we use a Set to store
			* added nodes and its child nodes during iterate mutation records. Then
			* collect added nodes from the Set which have no duplicate copy. But
			* this also causes newly added nodes will not be serialized with id ASAP,
			* which means all the id related calculation should be lazy too.
			*/ __publicField(this, "addedSet", /* @__PURE__ */ new Set());
			__publicField(this, "movedSet", /* @__PURE__ */ new Set());
			__publicField(this, "droppedSet", /* @__PURE__ */ new Set());
			__publicField(this, "removesSubTreeCache", /* @__PURE__ */ new Set());
			__publicField(this, "mutationCb");
			__publicField(this, "blockClass");
			__publicField(this, "blockSelector");
			__publicField(this, "maskTextClass");
			__publicField(this, "maskTextSelector");
			__publicField(this, "inlineStylesheet");
			__publicField(this, "maskInputOptions");
			__publicField(this, "maskTextFn");
			__publicField(this, "maskInputFn");
			__publicField(this, "keepIframeSrcFn");
			__publicField(this, "recordCanvas");
			__publicField(this, "inlineImages");
			__publicField(this, "slimDOMOptions");
			__publicField(this, "dataURLOptions");
			__publicField(this, "doc");
			__publicField(this, "mirror");
			__publicField(this, "iframeManager");
			__publicField(this, "stylesheetManager");
			__publicField(this, "shadowDomManager");
			__publicField(this, "canvasManager");
			__publicField(this, "processedNodeManager");
			__publicField(this, "unattachedDoc");
			__publicField(this, "processMutations", function(mutations) {
				mutations.forEach(_this.processMutation);
				_this.emit();
			});
			__publicField(this, "emit", function() {
				if (_this.frozen || _this.locked) return;
				var adds = [];
				var addedIds = /* @__PURE__ */ new Set();
				var addList = new DoubleLinkedList();
				var getNextId = function(n2) {
					var ns = n2;
					var nextId = IGNORED_NODE;
					while (nextId === IGNORED_NODE) {
						ns = ns && ns.nextSibling;
						nextId = ns && _this.mirror.getId(ns);
					}
					return nextId;
				};
				var pushAdd = function(n2) {
					var parent = index.parentNode(n2);
					if (!parent || !inDom(n2)) return;
					var cssCaptured = false;
					if (n2.nodeType === Node.TEXT_NODE) {
						var parentTag = parent.tagName;
						if (parentTag === "TEXTAREA") return;
						else if (parentTag === "STYLE" && _this.addedSet.has(parent)) cssCaptured = true;
					}
					var parentId = isShadowRoot(parent) ? _this.mirror.getId(getShadowHost(n2)) : _this.mirror.getId(parent);
					var nextId = getNextId(n2);
					if (parentId === -1 || nextId === -1) return addList.addNode(n2);
					var sn = serializeNodeWithId(n2, {
						doc: _this.doc,
						mirror: _this.mirror,
						blockClass: _this.blockClass,
						blockSelector: _this.blockSelector,
						maskTextClass: _this.maskTextClass,
						maskTextSelector: _this.maskTextSelector,
						skipChild: true,
						newlyAddedElement: true,
						inlineStylesheet: _this.inlineStylesheet,
						maskInputOptions: _this.maskInputOptions,
						maskTextFn: _this.maskTextFn,
						maskInputFn: _this.maskInputFn,
						slimDOMOptions: _this.slimDOMOptions,
						dataURLOptions: _this.dataURLOptions,
						recordCanvas: _this.recordCanvas,
						inlineImages: _this.inlineImages,
						onSerialize: function(currentN) {
							if (isSerializedIframe(currentN, _this.mirror)) _this.iframeManager.addIframe(currentN);
							if (isSerializedStylesheet(currentN, _this.mirror)) _this.stylesheetManager.trackLinkElement(currentN);
							if (hasShadowRoot(n2)) _this.shadowDomManager.addShadowRoot(index.shadowRoot(n2), _this.doc);
						},
						onIframeLoad: function(iframe, childSn) {
							_this.iframeManager.attachIframe(iframe, childSn);
							_this.shadowDomManager.observeAttachShadow(iframe);
						},
						onStylesheetLoad: function(link, childSn) {
							_this.stylesheetManager.attachLinkElement(link, childSn);
						},
						cssCaptured
					});
					if (sn) {
						adds.push({
							parentId,
							nextId,
							node: sn
						});
						addedIds.add(sn.id);
					}
				};
				while (_this.mapRemoves.length) _this.mirror.removeNodeFromMap(_this.mapRemoves.shift());
				for (var _iterator = _create_for_of_iterator_helper_loose(_this.movedSet), _step; !(_step = _iterator()).done;) {
					var n2 = _step.value;
					if (isParentRemoved(_this.removesSubTreeCache, n2, _this.mirror) && !_this.movedSet.has(index.parentNode(n2))) continue;
					pushAdd(n2);
				}
				for (var _iterator1 = _create_for_of_iterator_helper_loose(_this.addedSet), _step1; !(_step1 = _iterator1()).done;) {
					var n21 = _step1.value;
					if (!isAncestorInSet(_this.droppedSet, n21) && !isParentRemoved(_this.removesSubTreeCache, n21, _this.mirror)) pushAdd(n21);
					else if (isAncestorInSet(_this.movedSet, n21)) pushAdd(n21);
					else _this.droppedSet.add(n21);
				}
				var candidate = null;
				while (addList.length) {
					var node2 = null;
					if (candidate) {
						var parentId = _this.mirror.getId(index.parentNode(candidate.value));
						var nextId = getNextId(candidate.value);
						if (parentId !== -1 && nextId !== -1) node2 = candidate;
					}
					if (!node2) {
						var tailNode = addList.tail;
						while (tailNode) {
							var _node = tailNode;
							tailNode = tailNode.previous;
							if (_node) {
								var parentId1 = _this.mirror.getId(index.parentNode(_node.value));
								if (getNextId(_node.value) === -1) continue;
								else if (parentId1 !== -1) {
									node2 = _node;
									break;
								} else {
									var unhandledNode = _node.value;
									var parent = index.parentNode(unhandledNode);
									if (parent && parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
										var shadowHost = index.host(parent);
										if (_this.mirror.getId(shadowHost) !== -1) {
											node2 = _node;
											break;
										}
									}
								}
							}
						}
					}
					if (!node2) {
						while (addList.head) addList.removeNode(addList.head.value);
						break;
					}
					candidate = node2.previous;
					addList.removeNode(node2.value);
					pushAdd(node2.value);
				}
				var payload = {
					texts: _this.texts.map(function(text) {
						var n2 = text.node;
						var parent = index.parentNode(n2);
						if (parent && parent.tagName === "TEXTAREA") _this.genTextAreaValueMutation(parent);
						return {
							id: _this.mirror.getId(n2),
							value: text.value
						};
					}).filter(function(text) {
						return !addedIds.has(text.id);
					}).filter(function(text) {
						return _this.mirror.has(text.id);
					}),
					attributes: _this.attributes.map(function(attribute) {
						var attributes = attribute.attributes;
						if (typeof attributes.style === "string") {
							var diffAsStr = JSON.stringify(attribute.styleDiff);
							var unchangedAsStr = JSON.stringify(attribute._unchangedStyles);
							if (diffAsStr.length < attributes.style.length) {
								if ((diffAsStr + unchangedAsStr).split("var(").length === attributes.style.split("var(").length) attributes.style = attribute.styleDiff;
							}
						}
						return {
							id: _this.mirror.getId(attribute.node),
							attributes
						};
					}).filter(function(attribute) {
						return !addedIds.has(attribute.id);
					}).filter(function(attribute) {
						return _this.mirror.has(attribute.id);
					}),
					removes: _this.removes,
					adds
				};
				if (!payload.texts.length && !payload.attributes.length && !payload.removes.length && !payload.adds.length) return;
				_this.texts = [];
				_this.attributes = [];
				_this.attributeMap = /* @__PURE__ */ new WeakMap();
				_this.removes = [];
				_this.addedSet = /* @__PURE__ */ new Set();
				_this.movedSet = /* @__PURE__ */ new Set();
				_this.droppedSet = /* @__PURE__ */ new Set();
				_this.removesSubTreeCache = /* @__PURE__ */ new Set();
				_this.movedMap = {};
				_this.mutationCb(payload);
			});
			__publicField(this, "genTextAreaValueMutation", function(textarea) {
				var item = _this.attributeMap.get(textarea);
				if (!item) {
					item = {
						node: textarea,
						attributes: {},
						styleDiff: {},
						_unchangedStyles: {}
					};
					_this.attributes.push(item);
					_this.attributeMap.set(textarea, item);
				}
				var value = Array.from(index.childNodes(textarea), function(cn) {
					return index.textContent(cn) || "";
				}).join("");
				item.attributes.value = maskInputValue({
					element: textarea,
					maskInputOptions: _this.maskInputOptions,
					tagName: textarea.tagName,
					type: getInputType(textarea),
					value,
					maskInputFn: _this.maskInputFn
				});
			});
			__publicField(this, "processMutation", function(m) {
				if (isIgnored(m.target, _this.mirror, _this.slimDOMOptions)) return;
				switch (m.type) {
					case "characterData":
						var value = index.textContent(m.target);
						if (!isBlocked(m.target, _this.blockClass, _this.blockSelector, false) && value !== m.oldValue) _this.texts.push({
							value: needMaskingText(m.target, _this.maskTextClass, _this.maskTextSelector, true) && value ? _this.maskTextFn ? _this.maskTextFn(value, closestElementOfNode(m.target)) : value.replace(/[\S]/g, "*") : value,
							node: m.target
						});
						break;
					case "attributes":
						var target = m.target;
						var attributeName = m.attributeName;
						var value1 = m.target.getAttribute(attributeName);
						if (attributeName === "value") {
							var type = getInputType(target);
							value1 = maskInputValue({
								element: target,
								maskInputOptions: _this.maskInputOptions,
								tagName: target.tagName,
								type,
								value: value1,
								maskInputFn: _this.maskInputFn
							});
						}
						if (isBlocked(m.target, _this.blockClass, _this.blockSelector, false) || value1 === m.oldValue) return;
						var item = _this.attributeMap.get(m.target);
						if (target.tagName === "IFRAME" && attributeName === "src" && !_this.keepIframeSrcFn(value1)) if (!target.contentDocument) attributeName = "rr_src";
						else return;
						if (!item) {
							item = {
								node: m.target,
								attributes: {},
								styleDiff: {},
								_unchangedStyles: {}
							};
							_this.attributes.push(item);
							_this.attributeMap.set(m.target, item);
						}
						if (attributeName === "type" && target.tagName === "INPUT" && (m.oldValue || "").toLowerCase() === "password") target.setAttribute("data-rr-is-password", "true");
						if (!ignoreAttribute(target.tagName, attributeName)) {
							item.attributes[attributeName] = transformAttribute(_this.doc, toLowerCase(target.tagName), toLowerCase(attributeName), value1);
							if (attributeName === "style") {
								if (!_this.unattachedDoc) try {
									_this.unattachedDoc = document.implementation.createHTMLDocument();
								} catch (e2) {
									_this.unattachedDoc = _this.doc;
								}
								var old = _this.unattachedDoc.createElement("span");
								if (m.oldValue) old.setAttribute("style", m.oldValue);
								for (var _iterator = _create_for_of_iterator_helper_loose(Array.from(target.style)), _step; !(_step = _iterator()).done;) {
									var pname = _step.value;
									var newValue = target.style.getPropertyValue(pname);
									var newPriority = target.style.getPropertyPriority(pname);
									if (newValue !== old.style.getPropertyValue(pname) || newPriority !== old.style.getPropertyPriority(pname)) if (newPriority === "") item.styleDiff[pname] = newValue;
									else item.styleDiff[pname] = [newValue, newPriority];
									else item._unchangedStyles[pname] = [newValue, newPriority];
								}
								for (var _iterator1 = _create_for_of_iterator_helper_loose(Array.from(old.style)), _step1; !(_step1 = _iterator1()).done;) {
									var pname1 = _step1.value;
									if (target.style.getPropertyValue(pname1) === "") item.styleDiff[pname1] = false;
								}
							} else if (attributeName === "open" && target.tagName === "DIALOG") if (target.matches("dialog:modal")) item.attributes["rr_open_mode"] = "modal";
							else item.attributes["rr_open_mode"] = "non-modal";
						}
						break;
					case "childList":
						if (isBlocked(m.target, _this.blockClass, _this.blockSelector, true)) return;
						if (m.target.tagName === "TEXTAREA") {
							_this.genTextAreaValueMutation(m.target);
							return;
						}
						m.addedNodes.forEach(function(n2) {
							return _this.genAdds(n2, m.target);
						});
						m.removedNodes.forEach(function(n2) {
							var nodeId = _this.mirror.getId(n2);
							var parentId = isShadowRoot(m.target) ? _this.mirror.getId(index.host(m.target)) : _this.mirror.getId(m.target);
							if (isBlocked(m.target, _this.blockClass, _this.blockSelector, false) || isIgnored(n2, _this.mirror, _this.slimDOMOptions) || !isSerialized(n2, _this.mirror)) return;
							if (_this.addedSet.has(n2)) {
								deepDelete(_this.addedSet, n2);
								_this.droppedSet.add(n2);
							} else if (_this.addedSet.has(m.target) && nodeId === -1);
							else if (isAncestorRemoved(m.target, _this.mirror));
							else if (_this.movedSet.has(n2) && _this.movedMap[moveKey(nodeId, parentId)]) deepDelete(_this.movedSet, n2);
							else {
								_this.removes.push({
									parentId,
									id: nodeId,
									isShadow: isShadowRoot(m.target) && isNativeShadowDom(m.target) ? true : void 0
								});
								processRemoves(n2, _this.removesSubTreeCache);
							}
							_this.mapRemoves.push(n2);
						});
						break;
				}
			});
			/**
			* Make sure you check if `n`'s parent is blocked before calling this function
			* */ __publicField(this, "genAdds", function(n2, target) {
				if (_this.processedNodeManager.inOtherBuffer(n2, _this)) return;
				if (_this.addedSet.has(n2) || _this.movedSet.has(n2)) return;
				if (_this.mirror.hasNode(n2)) {
					if (isIgnored(n2, _this.mirror, _this.slimDOMOptions)) return;
					_this.movedSet.add(n2);
					var targetId = null;
					if (target && _this.mirror.hasNode(target)) targetId = _this.mirror.getId(target);
					if (targetId && targetId !== -1) _this.movedMap[moveKey(_this.mirror.getId(n2), targetId)] = true;
				} else {
					_this.addedSet.add(n2);
					_this.droppedSet.delete(n2);
				}
				if (!isBlocked(n2, _this.blockClass, _this.blockSelector, false)) {
					index.childNodes(n2).forEach(function(childN) {
						return _this.genAdds(childN);
					});
					if (hasShadowRoot(n2)) index.childNodes(index.shadowRoot(n2)).forEach(function(childN) {
						_this.processedNodeManager.add(childN, _this);
						_this.genAdds(childN, n2);
					});
				}
			});
		}
		var _proto = MutationBuffer.prototype;
		_proto.init = function init(options) {
			var _this = this;
			[
				"mutationCb",
				"blockClass",
				"blockSelector",
				"maskTextClass",
				"maskTextSelector",
				"inlineStylesheet",
				"maskInputOptions",
				"maskTextFn",
				"maskInputFn",
				"keepIframeSrcFn",
				"recordCanvas",
				"inlineImages",
				"slimDOMOptions",
				"dataURLOptions",
				"doc",
				"mirror",
				"iframeManager",
				"stylesheetManager",
				"shadowDomManager",
				"canvasManager",
				"processedNodeManager"
			].forEach(function(key) {
				_this[key] = options[key];
			});
		};
		_proto.freeze = function freeze() {
			this.frozen = true;
			this.canvasManager.freeze();
		};
		_proto.unfreeze = function unfreeze() {
			this.frozen = false;
			this.canvasManager.unfreeze();
			this.emit();
		};
		_proto.isFrozen = function isFrozen() {
			return this.frozen;
		};
		_proto.lock = function lock() {
			this.locked = true;
			this.canvasManager.lock();
		};
		_proto.unlock = function unlock() {
			this.locked = false;
			this.canvasManager.unlock();
			this.emit();
		};
		_proto.reset = function reset() {
			this.shadowDomManager.reset();
			this.canvasManager.reset();
		};
		return MutationBuffer;
	}();
	function deepDelete(addsSet, n2) {
		addsSet.delete(n2);
		index.childNodes(n2).forEach(function(childN) {
			return deepDelete(addsSet, childN);
		});
	}
	function processRemoves(n2, cache) {
		var queue = [n2];
		while (queue.length) {
			var next = queue.pop();
			if (cache.has(next)) continue;
			cache.add(next);
			index.childNodes(next).forEach(function(n22) {
				return queue.push(n22);
			});
		}
	}
	function isParentRemoved(removes, n2, mirror2) {
		if (removes.size === 0) return false;
		return _isParentRemoved(removes, n2);
	}
	function _isParentRemoved(removes, n2, _mirror2) {
		var node2 = index.parentNode(n2);
		if (!node2) return false;
		return removes.has(node2);
	}
	function isAncestorInSet(set, n2) {
		if (set.size === 0) return false;
		return _isAncestorInSet(set, n2);
	}
	function _isAncestorInSet(set, n2) {
		var parent = index.parentNode(n2);
		if (!parent) return false;
		if (set.has(parent)) return true;
		return _isAncestorInSet(set, parent);
	}
	var errorHandler;
	function registerErrorHandler(handler) {
		errorHandler = handler;
	}
	function unregisterErrorHandler() {
		errorHandler = void 0;
	}
	var callbackWrapper = function(cb) {
		if (!errorHandler) return cb;
		var rrwebWrapped = function() {
			for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) rest[_key] = arguments[_key];
			try {
				return cb.apply(void 0, [].concat(rest));
			} catch (error) {
				if (errorHandler && errorHandler(error) === true) return;
				throw error;
			}
		};
		return rrwebWrapped;
	};
	var mutationBuffers = [];
	function getEventTarget(event) {
		try {
			if ("composedPath" in event) {
				var path = event.composedPath();
				if (path.length) return path[0];
			} else if ("path" in event && event.path.length) return event.path[0];
		} catch (e) {}
		return event && event.target;
	}
	function initMutationObserver(options, rootEl) {
		var mutationBuffer = new MutationBuffer();
		mutationBuffers.push(mutationBuffer);
		mutationBuffer.init(options);
		var observer = new (mutationObserverCtor())(callbackWrapper(mutationBuffer.processMutations.bind(mutationBuffer)));
		observer.observe(rootEl, {
			attributes: true,
			attributeOldValue: true,
			characterData: true,
			characterDataOldValue: true,
			childList: true,
			subtree: true
		});
		return observer;
	}
	function initMoveObserver(param) {
		var mousemoveCb = param.mousemoveCb;
		var sampling = param.sampling;
		var doc = param.doc;
		var mirror2 = param.mirror;
		if (sampling.mousemove === false) return function() {};
		var threshold = typeof sampling.mousemove === "number" ? sampling.mousemove : 50;
		var callbackThreshold = typeof sampling.mousemoveCallback === "number" ? sampling.mousemoveCallback : 500;
		var positions = [];
		var timeBaseline;
		var wrappedCb = throttle(callbackWrapper(function(source) {
			var totalOffset = Date.now() - timeBaseline;
			mousemoveCb(positions.map(function(p) {
				p.timeOffset -= totalOffset;
				return p;
			}), source);
			positions = [];
			timeBaseline = null;
		}), callbackThreshold);
		var updatePosition = callbackWrapper(throttle(callbackWrapper(function(evt) {
			var target = getEventTarget(evt);
			var _ref = legacy_isTouchEvent(evt) ? evt.changedTouches[0] : evt;
			var clientX = _ref.clientX;
			var clientY = _ref.clientY;
			if (!timeBaseline) timeBaseline = nowTimestamp();
			positions.push({
				x: clientX,
				y: clientY,
				id: mirror2.getId(target),
				timeOffset: nowTimestamp() - timeBaseline
			});
			wrappedCb(typeof DragEvent !== "undefined" && _instanceof(evt, DragEvent) ? IncrementalSource.Drag : _instanceof(evt, MouseEvent) ? IncrementalSource.MouseMove : IncrementalSource.TouchMove);
		}), threshold, { trailing: false }));
		var handlers = [
			on("mousemove", updatePosition, doc),
			on("touchmove", updatePosition, doc),
			on("drag", updatePosition, doc)
		];
		return callbackWrapper(function() {
			handlers.forEach(function(h) {
				return h();
			});
		});
	}
	function initMouseInteractionObserver(param) {
		var mouseInteractionCb = param.mouseInteractionCb;
		var doc = param.doc;
		var mirror2 = param.mirror;
		var blockClass = param.blockClass;
		var blockSelector = param.blockSelector;
		var sampling = param.sampling;
		if (sampling.mouseInteraction === false) return function() {};
		var disableMap = sampling.mouseInteraction === true || sampling.mouseInteraction === void 0 ? {} : sampling.mouseInteraction;
		var handlers = [];
		var currentPointerType = null;
		var getHandler = function(eventKey) {
			return function(event) {
				var target = getEventTarget(event);
				if (isBlocked(target, blockClass, blockSelector, true)) return;
				var pointerType = null;
				var thisEventKey = eventKey;
				if ("pointerType" in event) {
					switch (event.pointerType) {
						case "mouse":
							pointerType = PointerTypes.Mouse;
							break;
						case "touch":
							pointerType = PointerTypes.Touch;
							break;
						case "pen":
							pointerType = PointerTypes.Pen;
							break;
					}
					if (pointerType === PointerTypes.Touch) {
						if (MouseInteractions[eventKey] === MouseInteractions.MouseDown) thisEventKey = "TouchStart";
						else if (MouseInteractions[eventKey] === MouseInteractions.MouseUp) thisEventKey = "TouchEnd";
					} else if (pointerType === PointerTypes.Pen);
				} else if (legacy_isTouchEvent(event)) pointerType = PointerTypes.Touch;
				if (pointerType !== null) {
					currentPointerType = pointerType;
					if (thisEventKey.startsWith("Touch") && pointerType === PointerTypes.Touch || thisEventKey.startsWith("Mouse") && pointerType === PointerTypes.Mouse) pointerType = null;
				} else if (MouseInteractions[eventKey] === MouseInteractions.Click) {
					pointerType = currentPointerType;
					currentPointerType = null;
				}
				var e2 = legacy_isTouchEvent(event) ? event.changedTouches[0] : event;
				if (!e2) return;
				var id = mirror2.getId(target);
				var clientX = e2.clientX;
				var clientY = e2.clientY;
				callbackWrapper(mouseInteractionCb)(_extends({
					type: MouseInteractions[thisEventKey],
					id,
					x: clientX,
					y: clientY
				}, pointerType !== null && { pointerType }));
			};
		};
		Object.keys(MouseInteractions).filter(function(key) {
			return Number.isNaN(Number(key)) && !key.endsWith("_Departed") && disableMap[key] !== false;
		}).forEach(function(eventKey) {
			var eventName = toLowerCase(eventKey);
			var handler = getHandler(eventKey);
			if (window.PointerEvent) switch (MouseInteractions[eventKey]) {
				case MouseInteractions.MouseDown:
				case MouseInteractions.MouseUp:
					eventName = eventName.replace("mouse", "pointer");
					break;
				case MouseInteractions.TouchStart:
				case MouseInteractions.TouchEnd: return;
			}
			handlers.push(on(eventName, handler, doc));
		});
		return callbackWrapper(function() {
			handlers.forEach(function(h) {
				return h();
			});
		});
	}
	function initScrollObserver(param) {
		var scrollCb = param.scrollCb;
		var doc = param.doc;
		var mirror2 = param.mirror;
		var blockClass = param.blockClass;
		var blockSelector = param.blockSelector;
		var sampling = param.sampling;
		return on("scroll", callbackWrapper(throttle(callbackWrapper(function(evt) {
			var target = getEventTarget(evt);
			if (!target || isBlocked(target, blockClass, blockSelector, true)) return;
			var id = mirror2.getId(target);
			if (target === doc && doc.defaultView) {
				var scrollLeftTop = getWindowScroll(doc.defaultView);
				scrollCb({
					id,
					x: scrollLeftTop.left,
					y: scrollLeftTop.top
				});
			} else scrollCb({
				id,
				x: target.scrollLeft,
				y: target.scrollTop
			});
		}), sampling.scroll || 100)), doc);
	}
	function initViewportResizeObserver(param, param1) {
		var viewportResizeCb = param.viewportResizeCb;
		var win = param1.win;
		var lastH = -1;
		var lastW = -1;
		return on("resize", callbackWrapper(throttle(callbackWrapper(function() {
			var height = getWindowHeight();
			var width = getWindowWidth();
			if (lastH !== height || lastW !== width) {
				viewportResizeCb({
					width: Number(width),
					height: Number(height)
				});
				lastH = height;
				lastW = width;
			}
		}), 200)), win);
	}
	var INPUT_TAGS = [
		"INPUT",
		"TEXTAREA",
		"SELECT"
	];
	var lastInputValueMap = /* @__PURE__ */ new WeakMap();
	function initInputObserver(param) {
		var inputCb = param.inputCb;
		var doc = param.doc;
		var mirror2 = param.mirror;
		var blockClass = param.blockClass;
		var blockSelector = param.blockSelector;
		var ignoreClass = param.ignoreClass;
		var ignoreSelector = param.ignoreSelector;
		var maskInputOptions = param.maskInputOptions;
		var maskInputFn = param.maskInputFn;
		var sampling = param.sampling;
		var userTriggeredOnInput = param.userTriggeredOnInput;
		function eventHandler(event) {
			var target = getEventTarget(event);
			var userTriggered = event.isTrusted;
			var tagName = target && target.tagName;
			if (target && tagName === "OPTION") target = index.parentElement(target);
			if (!target || !tagName || INPUT_TAGS.indexOf(tagName) < 0 || isBlocked(target, blockClass, blockSelector, true)) return;
			if (target.classList.contains(ignoreClass) || ignoreSelector && target.matches(ignoreSelector)) return;
			var text = target.value;
			var isChecked = false;
			var type = getInputType(target) || "";
			if (type === "radio" || type === "checkbox") isChecked = target.checked;
			else if (maskInputOptions[tagName.toLowerCase()] || maskInputOptions[type]) text = maskInputValue({
				element: target,
				maskInputOptions,
				tagName,
				type,
				value: text,
				maskInputFn
			});
			cbWithDedup(target, userTriggeredOnInput ? {
				text,
				isChecked,
				userTriggered
			} : {
				text,
				isChecked
			});
			var name = target.name;
			if (type === "radio" && name && isChecked) doc.querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]").forEach(function(el) {
				if (el !== target) {
					var text2 = el.value;
					cbWithDedup(el, userTriggeredOnInput ? {
						text: text2,
						isChecked: !isChecked,
						userTriggered: false
					} : {
						text: text2,
						isChecked: !isChecked
					});
				}
			});
		}
		function cbWithDedup(target, v2) {
			var lastInputValue = lastInputValueMap.get(target);
			if (!lastInputValue || lastInputValue.text !== v2.text || lastInputValue.isChecked !== v2.isChecked) {
				lastInputValueMap.set(target, v2);
				var id = mirror2.getId(target);
				callbackWrapper(inputCb)(_extends({}, v2, { id }));
			}
		}
		var handlers = (sampling.input === "last" ? ["change"] : ["input", "change"]).map(function(eventName) {
			return on(eventName, callbackWrapper(eventHandler), doc);
		});
		var currentWindow = doc.defaultView;
		if (!currentWindow) return function() {
			handlers.forEach(function(h) {
				return h();
			});
		};
		var propertyDescriptor = currentWindow.Object.getOwnPropertyDescriptor(currentWindow.HTMLInputElement.prototype, "value");
		var hookProperties = [
			[currentWindow.HTMLInputElement.prototype, "value"],
			[currentWindow.HTMLInputElement.prototype, "checked"],
			[currentWindow.HTMLSelectElement.prototype, "value"],
			[currentWindow.HTMLTextAreaElement.prototype, "value"],
			[currentWindow.HTMLSelectElement.prototype, "selectedIndex"],
			[currentWindow.HTMLOptionElement.prototype, "selected"]
		];
		if (propertyDescriptor && propertyDescriptor.set) {
			var _handlers;
			(_handlers = handlers).push.apply(_handlers, [].concat(hookProperties.map(function(p) {
				return hookSetter(p[0], p[1], { set: function set() {
					callbackWrapper(eventHandler)({
						target: this,
						isTrusted: false
					});
				} }, false, currentWindow);
			})));
		}
		return callbackWrapper(function() {
			handlers.forEach(function(h) {
				return h();
			});
		});
	}
	function getNestedCSSRulePositions(rule2) {
		var positions = [];
		function recurse(childRule, pos) {
			if (hasNestedCSSRule("CSSGroupingRule") && _instanceof(childRule.parentRule, CSSGroupingRule) || hasNestedCSSRule("CSSMediaRule") && _instanceof(childRule.parentRule, CSSMediaRule) || hasNestedCSSRule("CSSSupportsRule") && _instanceof(childRule.parentRule, CSSSupportsRule) || hasNestedCSSRule("CSSConditionRule") && _instanceof(childRule.parentRule, CSSConditionRule)) {
				var index2 = Array.from(childRule.parentRule.cssRules).indexOf(childRule);
				pos.unshift(index2);
			} else if (childRule.parentStyleSheet) {
				var index21 = Array.from(childRule.parentStyleSheet.cssRules).indexOf(childRule);
				pos.unshift(index21);
			}
			return pos;
		}
		return recurse(rule2, positions);
	}
	function getIdAndStyleId(sheet, mirror2, styleMirror) {
		var id;
		var styleId;
		if (!sheet) return {};
		if (sheet.ownerNode) id = mirror2.getId(sheet.ownerNode);
		else styleId = styleMirror.getId(sheet);
		return {
			styleId,
			id
		};
	}
	function initStyleSheetObserver(param, param1) {
		var styleSheetRuleCb = param.styleSheetRuleCb;
		var mirror2 = param.mirror;
		var stylesheetManager = param.stylesheetManager;
		var win = param1.win;
		if (!win.CSSStyleSheet || !win.CSSStyleSheet.prototype) return function() {};
		var insertRule = win.CSSStyleSheet.prototype.insertRule;
		win.CSSStyleSheet.prototype.insertRule = new Proxy(insertRule, { apply: callbackWrapper(function(target, thisArg, argumentsList) {
			var rule2 = argumentsList[0];
			var index2 = argumentsList[1];
			var _getIdAndStyleId = getIdAndStyleId(thisArg, mirror2, stylesheetManager.styleMirror);
			var id = _getIdAndStyleId.id;
			var styleId = _getIdAndStyleId.styleId;
			if (id && id !== -1 || styleId && styleId !== -1) styleSheetRuleCb({
				id,
				styleId,
				adds: [{
					rule: rule2,
					index: index2
				}]
			});
			return target.apply(thisArg, argumentsList);
		}) });
		win.CSSStyleSheet.prototype.addRule = function(selector, styleBlock, index2) {
			if (index2 === void 0) index2 = this.cssRules.length;
			var rule2 = selector + " { " + styleBlock + " }";
			return win.CSSStyleSheet.prototype.insertRule.apply(this, [rule2, index2]);
		};
		var deleteRule = win.CSSStyleSheet.prototype.deleteRule;
		win.CSSStyleSheet.prototype.deleteRule = new Proxy(deleteRule, { apply: callbackWrapper(function(target, thisArg, argumentsList) {
			var index2 = argumentsList[0];
			var _getIdAndStyleId = getIdAndStyleId(thisArg, mirror2, stylesheetManager.styleMirror);
			var id = _getIdAndStyleId.id;
			var styleId = _getIdAndStyleId.styleId;
			if (id && id !== -1 || styleId && styleId !== -1) styleSheetRuleCb({
				id,
				styleId,
				removes: [{ index: index2 }]
			});
			return target.apply(thisArg, argumentsList);
		}) });
		win.CSSStyleSheet.prototype.removeRule = function(index2) {
			return win.CSSStyleSheet.prototype.deleteRule.apply(this, [index2]);
		};
		var replace;
		if (win.CSSStyleSheet.prototype.replace) {
			replace = win.CSSStyleSheet.prototype.replace;
			win.CSSStyleSheet.prototype.replace = new Proxy(replace, { apply: callbackWrapper(function(target, thisArg, argumentsList) {
				var text = argumentsList[0];
				var _getIdAndStyleId = getIdAndStyleId(thisArg, mirror2, stylesheetManager.styleMirror);
				var id = _getIdAndStyleId.id;
				var styleId = _getIdAndStyleId.styleId;
				if (id && id !== -1 || styleId && styleId !== -1) styleSheetRuleCb({
					id,
					styleId,
					replace: text
				});
				return target.apply(thisArg, argumentsList);
			}) });
		}
		var replaceSync;
		if (win.CSSStyleSheet.prototype.replaceSync) {
			replaceSync = win.CSSStyleSheet.prototype.replaceSync;
			win.CSSStyleSheet.prototype.replaceSync = new Proxy(replaceSync, { apply: callbackWrapper(function(target, thisArg, argumentsList) {
				var text = argumentsList[0];
				var _getIdAndStyleId = getIdAndStyleId(thisArg, mirror2, stylesheetManager.styleMirror);
				var id = _getIdAndStyleId.id;
				var styleId = _getIdAndStyleId.styleId;
				if (id && id !== -1 || styleId && styleId !== -1) styleSheetRuleCb({
					id,
					styleId,
					replaceSync: text
				});
				return target.apply(thisArg, argumentsList);
			}) });
		}
		var supportedNestedCSSRuleTypes = {};
		if (canMonkeyPatchNestedCSSRule("CSSGroupingRule")) supportedNestedCSSRuleTypes.CSSGroupingRule = win.CSSGroupingRule;
		else {
			if (canMonkeyPatchNestedCSSRule("CSSMediaRule")) supportedNestedCSSRuleTypes.CSSMediaRule = win.CSSMediaRule;
			if (canMonkeyPatchNestedCSSRule("CSSConditionRule")) supportedNestedCSSRuleTypes.CSSConditionRule = win.CSSConditionRule;
			if (canMonkeyPatchNestedCSSRule("CSSSupportsRule")) supportedNestedCSSRuleTypes.CSSSupportsRule = win.CSSSupportsRule;
		}
		var unmodifiedFunctions = {};
		Object.entries(supportedNestedCSSRuleTypes).forEach(function(param) {
			var typeKey = param[0];
			var type = param[1];
			unmodifiedFunctions[typeKey] = {
				insertRule: type.prototype.insertRule,
				deleteRule: type.prototype.deleteRule
			};
			type.prototype.insertRule = new Proxy(unmodifiedFunctions[typeKey].insertRule, { apply: callbackWrapper(function(target, thisArg, argumentsList) {
				var rule2 = argumentsList[0];
				var index2 = argumentsList[1];
				var _getIdAndStyleId = getIdAndStyleId(thisArg.parentStyleSheet, mirror2, stylesheetManager.styleMirror);
				var id = _getIdAndStyleId.id;
				var styleId = _getIdAndStyleId.styleId;
				if (id && id !== -1 || styleId && styleId !== -1) styleSheetRuleCb({
					id,
					styleId,
					adds: [{
						rule: rule2,
						index: [].concat(getNestedCSSRulePositions(thisArg), [index2 || 0])
					}]
				});
				return target.apply(thisArg, argumentsList);
			}) });
			type.prototype.deleteRule = new Proxy(unmodifiedFunctions[typeKey].deleteRule, { apply: callbackWrapper(function(target, thisArg, argumentsList) {
				var index2 = argumentsList[0];
				var _getIdAndStyleId = getIdAndStyleId(thisArg.parentStyleSheet, mirror2, stylesheetManager.styleMirror);
				var id = _getIdAndStyleId.id;
				var styleId = _getIdAndStyleId.styleId;
				if (id && id !== -1 || styleId && styleId !== -1) styleSheetRuleCb({
					id,
					styleId,
					removes: [{ index: [].concat(getNestedCSSRulePositions(thisArg), [index2]) }]
				});
				return target.apply(thisArg, argumentsList);
			}) });
		});
		return callbackWrapper(function() {
			win.CSSStyleSheet.prototype.insertRule = insertRule;
			win.CSSStyleSheet.prototype.deleteRule = deleteRule;
			replace && (win.CSSStyleSheet.prototype.replace = replace);
			replaceSync && (win.CSSStyleSheet.prototype.replaceSync = replaceSync);
			Object.entries(supportedNestedCSSRuleTypes).forEach(function(param) {
				var typeKey = param[0];
				var type = param[1];
				type.prototype.insertRule = unmodifiedFunctions[typeKey].insertRule;
				type.prototype.deleteRule = unmodifiedFunctions[typeKey].deleteRule;
			});
		});
	}
	function initAdoptedStyleSheetObserver(param, host2) {
		var mirror2 = param.mirror;
		var stylesheetManager = param.stylesheetManager;
		var _a2;
		var _b;
		var _c;
		var hostId = null;
		if (host2.nodeName === "#document") hostId = mirror2.getId(host2);
		else hostId = mirror2.getId(index.host(host2));
		var patchTarget = host2.nodeName === "#document" ? (_a2 = host2.defaultView) == null ? void 0 : _a2.Document : (_c = (_b = host2.ownerDocument) == null ? void 0 : _b.defaultView) == null ? void 0 : _c.ShadowRoot;
		var originalPropertyDescriptor = (patchTarget == null ? void 0 : patchTarget.prototype) ? Object.getOwnPropertyDescriptor(patchTarget == null ? void 0 : patchTarget.prototype, "adoptedStyleSheets") : void 0;
		if (hostId === null || hostId === -1 || !patchTarget || !originalPropertyDescriptor) return function() {};
		Object.defineProperty(host2, "adoptedStyleSheets", {
			configurable: originalPropertyDescriptor.configurable,
			enumerable: originalPropertyDescriptor.enumerable,
			get: function get() {
				var _a3;
				return (_a3 = originalPropertyDescriptor.get) == null ? void 0 : _a3.call(this);
			},
			set: function set(sheets) {
				var _a3;
				var result2 = (_a3 = originalPropertyDescriptor.set) == null ? void 0 : _a3.call(this, sheets);
				if (hostId !== null && hostId !== -1) try {
					stylesheetManager.adoptStyleSheets(sheets, hostId);
				} catch (e2) {}
				return result2;
			}
		});
		return callbackWrapper(function() {
			Object.defineProperty(host2, "adoptedStyleSheets", {
				configurable: originalPropertyDescriptor.configurable,
				enumerable: originalPropertyDescriptor.enumerable,
				get: originalPropertyDescriptor.get,
				set: originalPropertyDescriptor.set
			});
		});
	}
	function initStyleDeclarationObserver(param, param1) {
		var styleDeclarationCb = param.styleDeclarationCb;
		var mirror2 = param.mirror;
		var ignoreCSSAttributes = param.ignoreCSSAttributes;
		var stylesheetManager = param.stylesheetManager;
		var win = param1.win;
		var setProperty = win.CSSStyleDeclaration.prototype.setProperty;
		win.CSSStyleDeclaration.prototype.setProperty = new Proxy(setProperty, { apply: callbackWrapper(function(target, thisArg, argumentsList) {
			var _a2;
			var property = argumentsList[0];
			var value = argumentsList[1];
			var priority = argumentsList[2];
			if (ignoreCSSAttributes.has(property)) return setProperty.apply(thisArg, [
				property,
				value,
				priority
			]);
			var _getIdAndStyleId = getIdAndStyleId((_a2 = thisArg.parentRule) == null ? void 0 : _a2.parentStyleSheet, mirror2, stylesheetManager.styleMirror);
			var id = _getIdAndStyleId.id;
			var styleId = _getIdAndStyleId.styleId;
			if (id && id !== -1 || styleId && styleId !== -1) styleDeclarationCb({
				id,
				styleId,
				set: {
					property,
					value,
					priority
				},
				index: getNestedCSSRulePositions(thisArg.parentRule)
			});
			return target.apply(thisArg, argumentsList);
		}) });
		var removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
		win.CSSStyleDeclaration.prototype.removeProperty = new Proxy(removeProperty, { apply: callbackWrapper(function(target, thisArg, argumentsList) {
			var _a2;
			var property = argumentsList[0];
			if (ignoreCSSAttributes.has(property)) return removeProperty.apply(thisArg, [property]);
			var _getIdAndStyleId = getIdAndStyleId((_a2 = thisArg.parentRule) == null ? void 0 : _a2.parentStyleSheet, mirror2, stylesheetManager.styleMirror);
			var id = _getIdAndStyleId.id;
			var styleId = _getIdAndStyleId.styleId;
			if (id && id !== -1 || styleId && styleId !== -1) styleDeclarationCb({
				id,
				styleId,
				remove: { property },
				index: getNestedCSSRulePositions(thisArg.parentRule)
			});
			return target.apply(thisArg, argumentsList);
		}) });
		return callbackWrapper(function() {
			win.CSSStyleDeclaration.prototype.setProperty = setProperty;
			win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
		});
	}
	function initMediaInteractionObserver(param) {
		var mediaInteractionCb = param.mediaInteractionCb;
		var blockClass = param.blockClass;
		var blockSelector = param.blockSelector;
		var mirror2 = param.mirror;
		var sampling = param.sampling;
		var doc = param.doc;
		var handler = callbackWrapper(function(type) {
			return throttle(callbackWrapper(function(event) {
				var target = getEventTarget(event);
				if (!target || isBlocked(target, blockClass, blockSelector, true)) return;
				var currentTime = target.currentTime;
				var volume = target.volume;
				var muted = target.muted;
				var playbackRate = target.playbackRate;
				var loop = target.loop;
				mediaInteractionCb({
					type,
					id: mirror2.getId(target),
					currentTime,
					volume,
					muted,
					playbackRate,
					loop
				});
			}), sampling.media || 500);
		});
		var handlers = [
			on("play", handler(MediaInteractions.Play), doc),
			on("pause", handler(MediaInteractions.Pause), doc),
			on("seeked", handler(MediaInteractions.Seeked), doc),
			on("volumechange", handler(MediaInteractions.VolumeChange), doc),
			on("ratechange", handler(MediaInteractions.RateChange), doc)
		];
		return callbackWrapper(function() {
			handlers.forEach(function(h) {
				return h();
			});
		});
	}
	function initFontObserver(param) {
		var fontCb = param.fontCb;
		var doc = param.doc;
		var win = doc.defaultView;
		if (!win) return function() {};
		var handlers = [];
		var fontMap = /* @__PURE__ */ new WeakMap();
		var originalFontFace = win.FontFace;
		win.FontFace = function FontFace2(family, source, descriptors) {
			var fontFace = new originalFontFace(family, source, descriptors);
			fontMap.set(fontFace, {
				family,
				buffer: typeof source !== "string",
				descriptors,
				fontSource: typeof source === "string" ? source : JSON.stringify(Array.from(new Uint8Array(source)))
			});
			return fontFace;
		};
		var restoreHandler = patch(doc.fonts, "add", function(original) {
			return function(fontFace) {
				setTimeout(callbackWrapper(function() {
					var p = fontMap.get(fontFace);
					if (p) {
						fontCb(p);
						fontMap.delete(fontFace);
					}
				}), 0);
				return original.apply(this, [fontFace]);
			};
		});
		handlers.push(function() {
			win.FontFace = originalFontFace;
		});
		handlers.push(restoreHandler);
		return callbackWrapper(function() {
			handlers.forEach(function(h) {
				return h();
			});
		});
	}
	function initSelectionObserver(param) {
		var doc = param.doc;
		var mirror2 = param.mirror;
		var blockClass = param.blockClass;
		var blockSelector = param.blockSelector;
		var selectionCb = param.selectionCb;
		var collapsed = true;
		var updateSelection = callbackWrapper(function() {
			var selection = doc.getSelection();
			if (!selection || collapsed && (selection == null ? void 0 : selection.isCollapsed)) return;
			collapsed = selection.isCollapsed || false;
			var ranges = [];
			var count = selection.rangeCount || 0;
			for (var i2 = 0; i2 < count; i2++) {
				var range = selection.getRangeAt(i2);
				var startContainer = range.startContainer;
				var startOffset = range.startOffset;
				var endContainer = range.endContainer;
				var endOffset = range.endOffset;
				if (isBlocked(startContainer, blockClass, blockSelector, true) || isBlocked(endContainer, blockClass, blockSelector, true)) continue;
				ranges.push({
					start: mirror2.getId(startContainer),
					startOffset,
					end: mirror2.getId(endContainer),
					endOffset
				});
			}
			selectionCb({ ranges });
		});
		updateSelection();
		return on("selectionchange", updateSelection);
	}
	function initCustomElementObserver(param) {
		var doc = param.doc;
		var customElementCb = param.customElementCb;
		var win = doc.defaultView;
		if (!win || !win.customElements) return function() {};
		return patch(win.customElements, "define", function(original) {
			return function(name, constructor, options) {
				try {
					customElementCb({ define: { name } });
				} catch (e2) {
					console.warn("Custom element callback failed for " + name);
				}
				return original.apply(this, [
					name,
					constructor,
					options
				]);
			};
		});
	}
	function mergeHooks(o2, hooks) {
		var mutationCb = o2.mutationCb;
		var mousemoveCb = o2.mousemoveCb;
		var mouseInteractionCb = o2.mouseInteractionCb;
		var scrollCb = o2.scrollCb;
		var viewportResizeCb = o2.viewportResizeCb;
		var inputCb = o2.inputCb;
		var mediaInteractionCb = o2.mediaInteractionCb;
		var styleSheetRuleCb = o2.styleSheetRuleCb;
		var styleDeclarationCb = o2.styleDeclarationCb;
		var canvasMutationCb = o2.canvasMutationCb;
		var fontCb = o2.fontCb;
		var selectionCb = o2.selectionCb;
		var customElementCb = o2.customElementCb;
		o2.mutationCb = function() {
			for (var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++) p[_key] = arguments[_key];
			if (hooks.mutation) {
				var _hooks;
				(_hooks = hooks).mutation.apply(_hooks, [].concat(p));
			}
			mutationCb.apply(void 0, [].concat(p));
		};
		o2.mousemoveCb = function() {
			for (var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++) p[_key] = arguments[_key];
			if (hooks.mousemove) {
				var _hooks;
				(_hooks = hooks).mousemove.apply(_hooks, [].concat(p));
			}
			mousemoveCb.apply(void 0, [].concat(p));
		};
		o2.mouseInteractionCb = function() {
			for (var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++) p[_key] = arguments[_key];
			if (hooks.mouseInteraction) {
				var _hooks;
				(_hooks = hooks).mouseInteraction.apply(_hooks, [].concat(p));
			}
			mouseInteractionCb.apply(void 0, [].concat(p));
		};
		o2.scrollCb = function() {
			for (var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++) p[_key] = arguments[_key];
			if (hooks.scroll) {
				var _hooks;
				(_hooks = hooks).scroll.apply(_hooks, [].concat(p));
			}
			scrollCb.apply(void 0, [].concat(p));
		};
		o2.viewportResizeCb = function() {
			for (var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++) p[_key] = arguments[_key];
			if (hooks.viewportResize) {
				var _hooks;
				(_hooks = hooks).viewportResize.apply(_hooks, [].concat(p));
			}
			viewportResizeCb.apply(void 0, [].concat(p));
		};
		o2.inputCb = function() {
			for (var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++) p[_key] = arguments[_key];
			if (hooks.input) {
				var _hooks;
				(_hooks = hooks).input.apply(_hooks, [].concat(p));
			}
			inputCb.apply(void 0, [].concat(p));
		};
		o2.mediaInteractionCb = function() {
			for (var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++) p[_key] = arguments[_key];
			if (hooks.mediaInteaction) {
				var _hooks;
				(_hooks = hooks).mediaInteaction.apply(_hooks, [].concat(p));
			}
			mediaInteractionCb.apply(void 0, [].concat(p));
		};
		o2.styleSheetRuleCb = function() {
			for (var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++) p[_key] = arguments[_key];
			if (hooks.styleSheetRule) {
				var _hooks;
				(_hooks = hooks).styleSheetRule.apply(_hooks, [].concat(p));
			}
			styleSheetRuleCb.apply(void 0, [].concat(p));
		};
		o2.styleDeclarationCb = function() {
			for (var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++) p[_key] = arguments[_key];
			if (hooks.styleDeclaration) {
				var _hooks;
				(_hooks = hooks).styleDeclaration.apply(_hooks, [].concat(p));
			}
			styleDeclarationCb.apply(void 0, [].concat(p));
		};
		o2.canvasMutationCb = function() {
			for (var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++) p[_key] = arguments[_key];
			if (hooks.canvasMutation) {
				var _hooks;
				(_hooks = hooks).canvasMutation.apply(_hooks, [].concat(p));
			}
			canvasMutationCb.apply(void 0, [].concat(p));
		};
		o2.fontCb = function() {
			for (var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++) p[_key] = arguments[_key];
			if (hooks.font) {
				var _hooks;
				(_hooks = hooks).font.apply(_hooks, [].concat(p));
			}
			fontCb.apply(void 0, [].concat(p));
		};
		o2.selectionCb = function() {
			for (var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++) p[_key] = arguments[_key];
			if (hooks.selection) {
				var _hooks;
				(_hooks = hooks).selection.apply(_hooks, [].concat(p));
			}
			selectionCb.apply(void 0, [].concat(p));
		};
		o2.customElementCb = function() {
			for (var _len = arguments.length, c2 = new Array(_len), _key = 0; _key < _len; _key++) c2[_key] = arguments[_key];
			if (hooks.customElement) {
				var _hooks;
				(_hooks = hooks).customElement.apply(_hooks, [].concat(c2));
			}
			customElementCb.apply(void 0, [].concat(c2));
		};
	}
	function initObservers(o2, hooks) {
		if (hooks === void 0) hooks = {};
		var currentWindow = o2.doc.defaultView;
		if (!currentWindow) return function() {};
		mergeHooks(o2, hooks);
		var mutationObserver;
		if (o2.recordDOM) mutationObserver = initMutationObserver(o2, o2.doc);
		var mousemoveHandler = initMoveObserver(o2);
		var mouseInteractionHandler = initMouseInteractionObserver(o2);
		var scrollHandler = initScrollObserver(o2);
		var viewportResizeHandler = initViewportResizeObserver(o2, { win: currentWindow });
		var inputHandler = initInputObserver(o2);
		var mediaInteractionHandler = initMediaInteractionObserver(o2);
		var styleSheetObserver = function() {};
		var adoptedStyleSheetObserver = function() {};
		var styleDeclarationObserver = function() {};
		var fontObserver = function() {};
		if (o2.recordDOM) {
			styleSheetObserver = initStyleSheetObserver(o2, { win: currentWindow });
			adoptedStyleSheetObserver = initAdoptedStyleSheetObserver(o2, o2.doc);
			styleDeclarationObserver = initStyleDeclarationObserver(o2, { win: currentWindow });
			if (o2.collectFonts) fontObserver = initFontObserver(o2);
		}
		var selectionObserver = initSelectionObserver(o2);
		var customElementObserver = initCustomElementObserver(o2);
		var pluginHandlers = [];
		for (var _iterator = _create_for_of_iterator_helper_loose(o2.plugins), _step; !(_step = _iterator()).done;) {
			var plugin3 = _step.value;
			pluginHandlers.push(plugin3.observer(plugin3.callback, currentWindow, plugin3.options));
		}
		return callbackWrapper(function() {
			mutationBuffers.forEach(function(b) {
				return b.reset();
			});
			mutationObserver == null || mutationObserver.disconnect();
			mousemoveHandler();
			mouseInteractionHandler();
			scrollHandler();
			viewportResizeHandler();
			inputHandler();
			mediaInteractionHandler();
			styleSheetObserver();
			adoptedStyleSheetObserver();
			styleDeclarationObserver();
			fontObserver();
			selectionObserver();
			customElementObserver();
			pluginHandlers.forEach(function(h) {
				return h();
			});
		});
	}
	function hasNestedCSSRule(prop) {
		return typeof window[prop] !== "undefined";
	}
	function canMonkeyPatchNestedCSSRule(prop) {
		return Boolean(typeof window[prop] !== "undefined" && window[prop].prototype && "insertRule" in window[prop].prototype && "deleteRule" in window[prop].prototype);
	}
	var CrossOriginIframeMirror = /*#__PURE__*/ function() {
		function CrossOriginIframeMirror(generateIdFn) {
			__publicField(this, "iframeIdToRemoteIdMap", /* @__PURE__ */ new WeakMap());
			__publicField(this, "iframeRemoteIdToIdMap", /* @__PURE__ */ new WeakMap());
			this.generateIdFn = generateIdFn;
		}
		var _proto = CrossOriginIframeMirror.prototype;
		_proto.getId = function getId(iframe, remoteId, idToRemoteMap, remoteToIdMap) {
			var idToRemoteIdMap = idToRemoteMap || this.getIdToRemoteIdMap(iframe);
			var remoteIdToIdMap = remoteToIdMap || this.getRemoteIdToIdMap(iframe);
			var id = idToRemoteIdMap.get(remoteId);
			if (!id) {
				id = this.generateIdFn();
				idToRemoteIdMap.set(remoteId, id);
				remoteIdToIdMap.set(id, remoteId);
			}
			return id;
		};
		_proto.getIds = function getIds(iframe, remoteId) {
			var _this = this;
			var idToRemoteIdMap = this.getIdToRemoteIdMap(iframe);
			var remoteIdToIdMap = this.getRemoteIdToIdMap(iframe);
			return remoteId.map(function(id) {
				return _this.getId(iframe, id, idToRemoteIdMap, remoteIdToIdMap);
			});
		};
		_proto.getRemoteId = function getRemoteId(iframe, id, map) {
			var remoteIdToIdMap = map || this.getRemoteIdToIdMap(iframe);
			if (typeof id !== "number") return id;
			var remoteId = remoteIdToIdMap.get(id);
			if (!remoteId) return -1;
			return remoteId;
		};
		_proto.getRemoteIds = function getRemoteIds(iframe, ids) {
			var _this = this;
			var remoteIdToIdMap = this.getRemoteIdToIdMap(iframe);
			return ids.map(function(id) {
				return _this.getRemoteId(iframe, id, remoteIdToIdMap);
			});
		};
		_proto.reset = function reset(iframe) {
			if (!iframe) {
				this.iframeIdToRemoteIdMap = /* @__PURE__ */ new WeakMap();
				this.iframeRemoteIdToIdMap = /* @__PURE__ */ new WeakMap();
				return;
			}
			this.iframeIdToRemoteIdMap.delete(iframe);
			this.iframeRemoteIdToIdMap.delete(iframe);
		};
		_proto.getIdToRemoteIdMap = function getIdToRemoteIdMap(iframe) {
			var idToRemoteIdMap = this.iframeIdToRemoteIdMap.get(iframe);
			if (!idToRemoteIdMap) {
				idToRemoteIdMap = /* @__PURE__ */ new Map();
				this.iframeIdToRemoteIdMap.set(iframe, idToRemoteIdMap);
			}
			return idToRemoteIdMap;
		};
		_proto.getRemoteIdToIdMap = function getRemoteIdToIdMap(iframe) {
			var remoteIdToIdMap = this.iframeRemoteIdToIdMap.get(iframe);
			if (!remoteIdToIdMap) {
				remoteIdToIdMap = /* @__PURE__ */ new Map();
				this.iframeRemoteIdToIdMap.set(iframe, remoteIdToIdMap);
			}
			return remoteIdToIdMap;
		};
		return CrossOriginIframeMirror;
	}();
	var IframeManager = /*#__PURE__*/ function() {
		function IframeManager(options) {
			__publicField(this, "iframes", /* @__PURE__ */ new WeakMap());
			__publicField(this, "crossOriginIframeMap", /* @__PURE__ */ new WeakMap());
			__publicField(this, "crossOriginIframeMirror", new CrossOriginIframeMirror(genId));
			__publicField(this, "crossOriginIframeStyleMirror");
			__publicField(this, "crossOriginIframeRootIdMap", /* @__PURE__ */ new WeakMap());
			__publicField(this, "mirror");
			__publicField(this, "mutationCb");
			__publicField(this, "wrappedEmit");
			__publicField(this, "loadListener");
			__publicField(this, "stylesheetManager");
			__publicField(this, "recordCrossOriginIframes");
			this.mutationCb = options.mutationCb;
			this.wrappedEmit = options.wrappedEmit;
			this.stylesheetManager = options.stylesheetManager;
			this.recordCrossOriginIframes = options.recordCrossOriginIframes;
			this.crossOriginIframeStyleMirror = new CrossOriginIframeMirror(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror));
			this.mirror = options.mirror;
			if (this.recordCrossOriginIframes) window.addEventListener("message", this.handleMessage.bind(this));
		}
		var _proto = IframeManager.prototype;
		_proto.addIframe = function addIframe(iframeEl) {
			this.iframes.set(iframeEl, true);
			if (iframeEl.contentWindow) this.crossOriginIframeMap.set(iframeEl.contentWindow, iframeEl);
		};
		_proto.addLoadListener = function addLoadListener(cb) {
			this.loadListener = cb;
		};
		_proto.attachIframe = function attachIframe(iframeEl, childSn) {
			var _a2;
			var _b;
			this.mutationCb({
				adds: [{
					parentId: this.mirror.getId(iframeEl),
					nextId: null,
					node: childSn
				}],
				removes: [],
				texts: [],
				attributes: [],
				isAttachIframe: true
			});
			if (this.recordCrossOriginIframes) (_a2 = iframeEl.contentWindow) == null || _a2.addEventListener("message", this.handleMessage.bind(this));
			(_b = this.loadListener) == null || _b.call(this, iframeEl);
			if (iframeEl.contentDocument && iframeEl.contentDocument.adoptedStyleSheets && iframeEl.contentDocument.adoptedStyleSheets.length > 0) this.stylesheetManager.adoptStyleSheets(iframeEl.contentDocument.adoptedStyleSheets, this.mirror.getId(iframeEl.contentDocument));
		};
		_proto.handleMessage = function handleMessage(message) {
			var crossOriginMessageEvent = message;
			if (crossOriginMessageEvent.data.type !== "rrweb" || crossOriginMessageEvent.origin !== crossOriginMessageEvent.data.origin) return;
			if (!message.source) return;
			var iframeEl = this.crossOriginIframeMap.get(message.source);
			if (!iframeEl) return;
			var transformedEvent = this.transformCrossOriginEvent(iframeEl, crossOriginMessageEvent.data.event);
			if (transformedEvent) this.wrappedEmit(transformedEvent, crossOriginMessageEvent.data.isCheckout);
		};
		_proto.transformCrossOriginEvent = function transformCrossOriginEvent(iframeEl, e2) {
			var _this = this;
			var _a2;
			switch (e2.type) {
				case EventType.FullSnapshot:
					this.crossOriginIframeMirror.reset(iframeEl);
					this.crossOriginIframeStyleMirror.reset(iframeEl);
					this.replaceIdOnNode(e2.data.node, iframeEl);
					var rootId = e2.data.node.id;
					this.crossOriginIframeRootIdMap.set(iframeEl, rootId);
					this.patchRootIdOnNode(e2.data.node, rootId);
					return {
						timestamp: e2.timestamp,
						type: EventType.IncrementalSnapshot,
						data: {
							source: IncrementalSource.Mutation,
							adds: [{
								parentId: this.mirror.getId(iframeEl),
								nextId: null,
								node: e2.data.node
							}],
							removes: [],
							texts: [],
							attributes: [],
							isAttachIframe: true
						}
					};
				case EventType.Meta:
				case EventType.Load:
				case EventType.DomContentLoaded: return false;
				case EventType.Plugin: return e2;
				case EventType.Custom:
					this.replaceIds(e2.data.payload, iframeEl, [
						"id",
						"parentId",
						"previousId",
						"nextId"
					]);
					return e2;
				case EventType.IncrementalSnapshot: switch (e2.data.source) {
					case IncrementalSource.Mutation:
						e2.data.adds.forEach(function(n2) {
							_this.replaceIds(n2, iframeEl, [
								"parentId",
								"nextId",
								"previousId"
							]);
							_this.replaceIdOnNode(n2.node, iframeEl);
							var rootId = _this.crossOriginIframeRootIdMap.get(iframeEl);
							rootId && _this.patchRootIdOnNode(n2.node, rootId);
						});
						e2.data.removes.forEach(function(n2) {
							_this.replaceIds(n2, iframeEl, ["parentId", "id"]);
						});
						e2.data.attributes.forEach(function(n2) {
							_this.replaceIds(n2, iframeEl, ["id"]);
						});
						e2.data.texts.forEach(function(n2) {
							_this.replaceIds(n2, iframeEl, ["id"]);
						});
						return e2;
					case IncrementalSource.Drag:
					case IncrementalSource.TouchMove:
					case IncrementalSource.MouseMove:
						e2.data.positions.forEach(function(p) {
							_this.replaceIds(p, iframeEl, ["id"]);
						});
						return e2;
					case IncrementalSource.ViewportResize: return false;
					case IncrementalSource.MediaInteraction:
					case IncrementalSource.MouseInteraction:
					case IncrementalSource.Scroll:
					case IncrementalSource.CanvasMutation:
					case IncrementalSource.Input:
						this.replaceIds(e2.data, iframeEl, ["id"]);
						return e2;
					case IncrementalSource.StyleSheetRule:
					case IncrementalSource.StyleDeclaration:
						this.replaceIds(e2.data, iframeEl, ["id"]);
						this.replaceStyleIds(e2.data, iframeEl, ["styleId"]);
						return e2;
					case IncrementalSource.Font: return e2;
					case IncrementalSource.Selection:
						e2.data.ranges.forEach(function(range) {
							_this.replaceIds(range, iframeEl, ["start", "end"]);
						});
						return e2;
					case IncrementalSource.AdoptedStyleSheet:
						this.replaceIds(e2.data, iframeEl, ["id"]);
						this.replaceStyleIds(e2.data, iframeEl, ["styleIds"]);
						(_a2 = e2.data.styles) == null || _a2.forEach(function(style) {
							_this.replaceStyleIds(style, iframeEl, ["styleId"]);
						});
						return e2;
				}
			}
			return false;
		};
		_proto.replace = function replace(iframeMirror, obj, iframeEl, keys) {
			for (var _iterator = _create_for_of_iterator_helper_loose(keys), _step; !(_step = _iterator()).done;) {
				var key = _step.value;
				if (!Array.isArray(obj[key]) && typeof obj[key] !== "number") continue;
				if (Array.isArray(obj[key])) obj[key] = iframeMirror.getIds(iframeEl, obj[key]);
				else obj[key] = iframeMirror.getId(iframeEl, obj[key]);
			}
			return obj;
		};
		_proto.replaceIds = function replaceIds(obj, iframeEl, keys) {
			return this.replace(this.crossOriginIframeMirror, obj, iframeEl, keys);
		};
		_proto.replaceStyleIds = function replaceStyleIds(obj, iframeEl, keys) {
			return this.replace(this.crossOriginIframeStyleMirror, obj, iframeEl, keys);
		};
		_proto.replaceIdOnNode = function replaceIdOnNode(node2, iframeEl) {
			var _this = this;
			this.replaceIds(node2, iframeEl, ["id", "rootId"]);
			if ("childNodes" in node2) node2.childNodes.forEach(function(child) {
				_this.replaceIdOnNode(child, iframeEl);
			});
		};
		_proto.patchRootIdOnNode = function patchRootIdOnNode(node2, rootId) {
			var _this = this;
			if (node2.type !== NodeType.Document && !node2.rootId) node2.rootId = rootId;
			if ("childNodes" in node2) node2.childNodes.forEach(function(child) {
				_this.patchRootIdOnNode(child, rootId);
			});
		};
		return IframeManager;
	}();
	var ShadowDomManager = /*#__PURE__*/ function() {
		function ShadowDomManager(options) {
			__publicField(this, "shadowDoms", /* @__PURE__ */ new WeakSet());
			__publicField(this, "mutationCb");
			__publicField(this, "scrollCb");
			__publicField(this, "bypassOptions");
			__publicField(this, "mirror");
			__publicField(this, "restoreHandlers", []);
			this.mutationCb = options.mutationCb;
			this.scrollCb = options.scrollCb;
			this.bypassOptions = options.bypassOptions;
			this.mirror = options.mirror;
			this.init();
		}
		var _proto = ShadowDomManager.prototype;
		_proto.init = function init() {
			this.reset();
			this.patchAttachShadow(Element, document);
		};
		_proto.addShadowRoot = function addShadowRoot(shadowRoot2, doc) {
			var _this = this;
			if (!isNativeShadowDom(shadowRoot2)) return;
			if (this.shadowDoms.has(shadowRoot2)) return;
			this.shadowDoms.add(shadowRoot2);
			var observer = initMutationObserver(_extends({}, this.bypassOptions, {
				doc,
				mutationCb: this.mutationCb,
				mirror: this.mirror,
				shadowDomManager: this
			}), shadowRoot2);
			this.restoreHandlers.push(function() {
				return observer.disconnect();
			});
			this.restoreHandlers.push(initScrollObserver(_extends({}, this.bypassOptions, {
				scrollCb: this.scrollCb,
				doc: shadowRoot2,
				mirror: this.mirror
			})));
			setTimeout(function() {
				if (shadowRoot2.adoptedStyleSheets && shadowRoot2.adoptedStyleSheets.length > 0) _this.bypassOptions.stylesheetManager.adoptStyleSheets(shadowRoot2.adoptedStyleSheets, _this.mirror.getId(index.host(shadowRoot2)));
				_this.restoreHandlers.push(initAdoptedStyleSheetObserver({
					mirror: _this.mirror,
					stylesheetManager: _this.bypassOptions.stylesheetManager
				}, shadowRoot2));
			}, 0);
		};
		/**
		* Monkey patch 'attachShadow' of an IFrameElement to observe newly added shadow doms.
		*/ _proto.observeAttachShadow = function observeAttachShadow(iframeElement) {
			if (!iframeElement.contentWindow || !iframeElement.contentDocument) return;
			this.patchAttachShadow(iframeElement.contentWindow.Element, iframeElement.contentDocument);
		};
		/**
		* Patch 'attachShadow' to observe newly added shadow doms.
		*/ _proto.patchAttachShadow = function patchAttachShadow(element, doc) {
			var manager = this;
			this.restoreHandlers.push(patch(element.prototype, "attachShadow", function(original) {
				return function(option) {
					var sRoot = original.call(this, option);
					var shadowRootEl = index.shadowRoot(this);
					if (shadowRootEl && inDom(this)) manager.addShadowRoot(shadowRootEl, doc);
					return sRoot;
				};
			}));
		};
		_proto.reset = function reset() {
			this.restoreHandlers.forEach(function(handler) {
				try {
					handler();
				} catch (e2) {}
			});
			this.restoreHandlers = [];
			this.shadowDoms = /* @__PURE__ */ new WeakSet();
		};
		return ShadowDomManager;
	}();
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var lookup = typeof Uint8Array === "undefined" ? [] : /* @__PURE__ */ new Uint8Array(256);
	for (var i$1 = 0; i$1 < chars.length; i$1++) lookup[chars.charCodeAt(i$1)] = i$1;
	var encode = function encode(arraybuffer) {
		var bytes = new Uint8Array(arraybuffer);
		var i2;
		var len = bytes.length;
		var base64 = "";
		for (i2 = 0; i2 < len; i2 += 3) {
			base64 += chars[bytes[i2] >> 2];
			base64 += chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];
			base64 += chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];
			base64 += chars[bytes[i2 + 2] & 63];
		}
		if (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";
		else if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";
		return base64;
	};
	var canvasVarMap = /* @__PURE__ */ new Map();
	function variableListFor$1(ctx, ctor) {
		var contextMap = canvasVarMap.get(ctx);
		if (!contextMap) {
			contextMap = /* @__PURE__ */ new Map();
			canvasVarMap.set(ctx, contextMap);
		}
		if (!contextMap.has(ctor)) contextMap.set(ctor, []);
		return contextMap.get(ctor);
	}
	var saveWebGLVar = function(value, win, ctx) {
		if (!value || !(isInstanceOfWebGLObject(value, win) || (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object")) return;
		var name = value.constructor.name;
		var list2 = variableListFor$1(ctx, name);
		var index2 = list2.indexOf(value);
		if (index2 === -1) {
			index2 = list2.length;
			list2.push(value);
		}
		return index2;
	};
	function serializeArg(value, win, ctx) {
		if (_instanceof(value, Array)) return value.map(function(arg) {
			return serializeArg(arg, win, ctx);
		});
		else if (value === null) return value;
		else if (_instanceof(value, Float32Array) || _instanceof(value, Float64Array) || _instanceof(value, Int32Array) || _instanceof(value, Uint32Array) || _instanceof(value, Uint8Array) || _instanceof(value, Uint16Array) || _instanceof(value, Int16Array) || _instanceof(value, Int8Array) || _instanceof(value, Uint8ClampedArray)) return {
			rr_type: value.constructor.name,
			args: [Object.values(value)]
		};
		else if (_instanceof(value, ArrayBuffer)) return {
			rr_type: value.constructor.name,
			base64: encode(value)
		};
		else if (_instanceof(value, DataView)) return {
			rr_type: value.constructor.name,
			args: [
				serializeArg(value.buffer, win, ctx),
				value.byteOffset,
				value.byteLength
			]
		};
		else if (_instanceof(value, HTMLImageElement)) return {
			rr_type: value.constructor.name,
			src: value.src
		};
		else if (_instanceof(value, HTMLCanvasElement)) return {
			rr_type: "HTMLImageElement",
			src: value.toDataURL()
		};
		else if (_instanceof(value, ImageData)) return {
			rr_type: value.constructor.name,
			args: [
				serializeArg(value.data, win, ctx),
				value.width,
				value.height
			]
		};
		else if (isInstanceOfWebGLObject(value, win) || (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object") return {
			rr_type: value.constructor.name,
			index: saveWebGLVar(value, win, ctx)
		};
		return value;
	}
	var serializeArgs = function(args, win, ctx) {
		return args.map(function(arg) {
			return serializeArg(arg, win, ctx);
		});
	};
	var isInstanceOfWebGLObject = function(value, win) {
		var supportedWebGLConstructorNames = [
			"WebGLActiveInfo",
			"WebGLBuffer",
			"WebGLFramebuffer",
			"WebGLProgram",
			"WebGLRenderbuffer",
			"WebGLShader",
			"WebGLShaderPrecisionFormat",
			"WebGLTexture",
			"WebGLUniformLocation",
			"WebGLVertexArrayObject",
			"WebGLVertexArrayObjectOES"
		].filter(function(name) {
			return typeof win[name] === "function";
		});
		return Boolean(supportedWebGLConstructorNames.find(function(name) {
			return _instanceof(value, win[name]);
		}));
	};
	function initCanvas2DMutationObserver(cb, win, blockClass, blockSelector) {
		var _loop = function() {
			var prop = _step.value;
			try {
				if (typeof win.CanvasRenderingContext2D.prototype[prop] !== "function") return "continue";
				var restoreHandler = patch(win.CanvasRenderingContext2D.prototype, prop, function(original) {
					return function() {
						var _this = this;
						for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
						if (!isBlocked(this.canvas, blockClass, blockSelector, true)) setTimeout(function() {
							var recordArgs = serializeArgs(args, win, _this);
							cb(_this.canvas, {
								type: CanvasContext["2D"],
								property: prop,
								args: recordArgs
							});
						}, 0);
						return original.apply(this, args);
					};
				});
				handlers.push(restoreHandler);
			} catch (e) {
				var hookHandler = hookSetter(win.CanvasRenderingContext2D.prototype, prop, { set: function set(v2) {
					cb(this.canvas, {
						type: CanvasContext["2D"],
						property: prop,
						args: [v2],
						setter: true
					});
				} });
				handlers.push(hookHandler);
			}
		};
		var handlers = [];
		for (var _iterator = _create_for_of_iterator_helper_loose(Object.getOwnPropertyNames(win.CanvasRenderingContext2D.prototype)), _step; !(_step = _iterator()).done;) _loop();
		return function() {
			handlers.forEach(function(h) {
				return h();
			});
		};
	}
	function getNormalizedContextName(contextType) {
		return contextType === "experimental-webgl" ? "webgl" : contextType;
	}
	function initCanvasContextObserver(win, blockClass, blockSelector, setPreserveDrawingBufferToTrue) {
		var handlers = [];
		try {
			var restoreHandler = patch(win.HTMLCanvasElement.prototype, "getContext", function(original) {
				return function(contextType) {
					for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
					if (!isBlocked(this, blockClass, blockSelector, true)) {
						var ctxName = getNormalizedContextName(contextType);
						if (!("__context" in this)) this.__context = ctxName;
						if (setPreserveDrawingBufferToTrue && ["webgl", "webgl2"].includes(ctxName)) if (args[0] && _type_of(args[0]) === "object") {
							var contextAttributes = args[0];
							if (!contextAttributes.preserveDrawingBuffer) contextAttributes.preserveDrawingBuffer = true;
						} else args.splice(0, 1, { preserveDrawingBuffer: true });
					}
					return original.apply(this, [].concat([contextType], args));
				};
			});
			handlers.push(restoreHandler);
		} catch (e) {
			console.error("failed to patch HTMLCanvasElement.prototype.getContext");
		}
		return function() {
			handlers.forEach(function(h) {
				return h();
			});
		};
	}
	function patchGLPrototype(prototype, type, cb, blockClass, blockSelector, win) {
		var _loop = function() {
			var prop = _step.value;
			if ([
				"isContextLost",
				"canvas",
				"drawingBufferWidth",
				"drawingBufferHeight"
			].includes(prop)) return "continue";
			try {
				if (typeof prototype[prop] !== "function") return "continue";
				var restoreHandler = patch(prototype, prop, function(original) {
					return function() {
						for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
						var result2 = original.apply(this, args);
						saveWebGLVar(result2, win, this);
						if ("tagName" in this.canvas && !isBlocked(this.canvas, blockClass, blockSelector, true)) {
							var mutation = {
								type,
								property: prop,
								args: serializeArgs(args, win, this)
							};
							cb(this.canvas, mutation);
						}
						return result2;
					};
				});
				handlers.push(restoreHandler);
			} catch (e) {
				var hookHandler = hookSetter(prototype, prop, { set: function set(v2) {
					cb(this.canvas, {
						type,
						property: prop,
						args: [v2],
						setter: true
					});
				} });
				handlers.push(hookHandler);
			}
		};
		var handlers = [];
		for (var _iterator = _create_for_of_iterator_helper_loose(Object.getOwnPropertyNames(prototype)), _step; !(_step = _iterator()).done;) _loop();
		return handlers;
	}
	function initCanvasWebGLMutationObserver(cb, win, blockClass, blockSelector) {
		var _handlers;
		var handlers = [];
		(_handlers = handlers).push.apply(_handlers, [].concat(patchGLPrototype(win.WebGLRenderingContext.prototype, CanvasContext.WebGL, cb, blockClass, blockSelector, win)));
		if (typeof win.WebGL2RenderingContext !== "undefined") {
			var _handlers1;
			(_handlers1 = handlers).push.apply(_handlers1, [].concat(patchGLPrototype(win.WebGL2RenderingContext.prototype, CanvasContext.WebGL2, cb, blockClass, blockSelector, win)));
		}
		return function() {
			handlers.forEach(function(h) {
				return h();
			});
		};
	}
	var encodedJs = "KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICB2YXIgY2hhcnMgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyI7CiAgdmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAidW5kZWZpbmVkIiA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTsKICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7CiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpOwogIH0KICB2YXIgZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHsKICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSwgaTIsIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gIiI7CiAgICBmb3IgKGkyID0gMDsgaTIgPCBsZW47IGkyICs9IDMpIHsKICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kyXSA+PiAyXTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMl0gJiAzKSA8PCA0IHwgYnl0ZXNbaTIgKyAxXSA+PiA0XTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMiArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpMiArIDJdID4+IDZdOwogICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaTIgKyAyXSAmIDYzXTsKICAgIH0KICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgIj0iOwogICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgIj09IjsKICAgIH0KICAgIHJldHVybiBiYXNlNjQ7CiAgfTsKICBjb25zdCBsYXN0QmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc3BhcmVudEJsb2JGb3Iod2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMpIHsKICAgIGNvbnN0IGlkID0gYCR7d2lkdGh9LSR7aGVpZ2h0fWA7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBpZiAodHJhbnNwYXJlbnRCbG9iTWFwLmhhcyhpZCkpIHJldHVybiB0cmFuc3BhcmVudEJsb2JNYXAuZ2V0KGlkKTsKICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsKICAgICAgb2Zmc2NyZWVuLmdldENvbnRleHQoIjJkIik7CiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBvZmZzY3JlZW4uY29udmVydFRvQmxvYihkYXRhVVJMT3B0aW9ucyk7CiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpOwogICAgICBjb25zdCBiYXNlNjQgPSBlbmNvZGUoYXJyYXlCdWZmZXIpOwogICAgICB0cmFuc3BhcmVudEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICByZXR1cm4gYmFzZTY0OwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuICIiOwogICAgfQogIH0KICBjb25zdCB3b3JrZXIgPSBzZWxmOwogIHdvcmtlci5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbihlKSB7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBjb25zdCB7IGlkLCBiaXRtYXAsIHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zIH0gPSBlLmRhdGE7CiAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKAogICAgICAgIHdpZHRoLAogICAgICAgIGhlaWdodCwKICAgICAgICBkYXRhVVJMT3B0aW9ucwogICAgICApOwogICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOwogICAgICBjb25zdCBjdHggPSBvZmZzY3JlZW4uZ2V0Q29udGV4dCgiMmQiKTsKICAgICAgY3R4LmRyYXdJbWFnZShiaXRtYXAsIDAsIDApOwogICAgICBiaXRtYXAuY2xvc2UoKTsKICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG9mZnNjcmVlbi5jb252ZXJ0VG9CbG9iKGRhdGFVUkxPcHRpb25zKTsKICAgICAgY29uc3QgdHlwZSA9IGJsb2IudHlwZTsKICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7CiAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7CiAgICAgIGlmICghbGFzdEJsb2JNYXAuaGFzKGlkKSAmJiBhd2FpdCB0cmFuc3BhcmVudEJhc2U2NCA9PT0gYmFzZTY0KSB7CiAgICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICAgIHJldHVybiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZCB9KTsKICAgICAgfQogICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KSByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7CiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7CiAgICAgICAgaWQsCiAgICAgICAgdHlwZSwKICAgICAgICBiYXNlNjQsCiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0CiAgICAgIH0pOwogICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsKICAgIH0KICB9Owp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS1iaXRtYXAtZGF0YS11cmwtd29ya2VyLUlKcEM3Z19iLmpzLm1hcAo=";
	var decodeBase64 = function(base64) {
		return Uint8Array.from(atob(base64), function(c2) {
			return c2.charCodeAt(0);
		});
	};
	var blob = typeof window !== "undefined" && window.Blob && new Blob([decodeBase64(encodedJs)], { type: "text/javascript;charset=utf-8" });
	function WorkerWrapper(options) {
		var objURL;
		try {
			objURL = blob && (window.URL || window.webkitURL).createObjectURL(blob);
			if (!objURL) throw "";
			var worker = new Worker(objURL, { name: options == null ? void 0 : options.name });
			worker.addEventListener("error", function() {
				(window.URL || window.webkitURL).revokeObjectURL(objURL);
			});
			return worker;
		} catch (e2) {
			return new Worker("data:text/javascript;base64," + encodedJs, { name: options == null ? void 0 : options.name });
		} finally {
			objURL && (window.URL || window.webkitURL).revokeObjectURL(objURL);
		}
	}
	var CanvasManager = /*#__PURE__*/ function() {
		function CanvasManager(options) {
			var _this = this;
			__publicField(this, "pendingCanvasMutations", /* @__PURE__ */ new Map());
			__publicField(this, "rafStamps", {
				latestId: 0,
				invokeId: null
			});
			__publicField(this, "mirror");
			__publicField(this, "mutationCb");
			__publicField(this, "resetObservers");
			__publicField(this, "frozen", false);
			__publicField(this, "locked", false);
			__publicField(this, "processMutation", function(target, mutation) {
				if (_this.rafStamps.invokeId && _this.rafStamps.latestId !== _this.rafStamps.invokeId || !_this.rafStamps.invokeId) _this.rafStamps.invokeId = _this.rafStamps.latestId;
				if (!_this.pendingCanvasMutations.has(target)) _this.pendingCanvasMutations.set(target, []);
				_this.pendingCanvasMutations.get(target).push(mutation);
			});
			var _options_sampling = options.sampling;
			var sampling = _options_sampling === void 0 ? "all" : _options_sampling;
			var win = options.win;
			var blockClass = options.blockClass;
			var blockSelector = options.blockSelector;
			var recordCanvas = options.recordCanvas;
			var dataURLOptions = options.dataURLOptions;
			this.mutationCb = options.mutationCb;
			this.mirror = options.mirror;
			if (recordCanvas && sampling === "all") this.initCanvasMutationObserver(win, blockClass, blockSelector);
			if (recordCanvas && typeof sampling === "number") this.initCanvasFPSObserver(sampling, win, blockClass, blockSelector, { dataURLOptions });
		}
		var _proto = CanvasManager.prototype;
		_proto.reset = function reset() {
			this.pendingCanvasMutations.clear();
			this.resetObservers && this.resetObservers();
		};
		_proto.freeze = function freeze() {
			this.frozen = true;
		};
		_proto.unfreeze = function unfreeze() {
			this.frozen = false;
		};
		_proto.lock = function lock() {
			this.locked = true;
		};
		_proto.unlock = function unlock() {
			this.locked = false;
		};
		_proto.initCanvasFPSObserver = function initCanvasFPSObserver(fps, win, blockClass, blockSelector, options) {
			var _this = this;
			var canvasContextReset = initCanvasContextObserver(win, blockClass, blockSelector, true);
			var snapshotInProgressMap = /* @__PURE__ */ new Map();
			var worker = new WorkerWrapper();
			worker.onmessage = function(e2) {
				var id = e2.data.id;
				snapshotInProgressMap.set(id, false);
				if (!("base64" in e2.data)) return;
				var _e2_data = e2.data;
				var base64 = _e2_data.base64;
				var type = _e2_data.type;
				var width = _e2_data.width;
				var height = _e2_data.height;
				_this.mutationCb({
					id,
					type: CanvasContext["2D"],
					commands: [{
						property: "clearRect",
						args: [
							0,
							0,
							width,
							height
						]
					}, {
						property: "drawImage",
						args: [
							{
								rr_type: "ImageBitmap",
								args: [{
									rr_type: "Blob",
									data: [{
										rr_type: "ArrayBuffer",
										base64
									}],
									type
								}]
							},
							0,
							0
						]
					}]
				});
			};
			var timeBetweenSnapshots = 1e3 / fps;
			var lastSnapshotTime = 0;
			var rafId;
			var getCanvas = function() {
				var matchedCanvas = [];
				win.document.querySelectorAll("canvas").forEach(function(canvas) {
					if (!isBlocked(canvas, blockClass, blockSelector, true)) matchedCanvas.push(canvas);
				});
				return matchedCanvas;
			};
			var takeCanvasSnapshots = function(timestamp) {
				if (lastSnapshotTime && timestamp - lastSnapshotTime < timeBetweenSnapshots) {
					rafId = requestAnimationFrame(takeCanvasSnapshots);
					return;
				}
				lastSnapshotTime = timestamp;
				var _this1 = _this;
				getCanvas().forEach(/*#__PURE__*/ _async_to_generator(function(canvas) {
					var _a2;
					var id;
					var context;
					var bitmap;
					return _ts_generator(this, function(_state) {
						switch (_state.label) {
							case 0:
								id = _this1.mirror.getId(canvas);
								if (snapshotInProgressMap.get(id)) return [2];
								if (canvas.width === 0 || canvas.height === 0) return [2];
								snapshotInProgressMap.set(id, true);
								if (["webgl", "webgl2"].includes(canvas.__context)) {
									context = canvas.getContext(canvas.__context);
									if (((_a2 = context == null ? void 0 : context.getContextAttributes()) == null ? void 0 : _a2.preserveDrawingBuffer) === false) context.clear(context.COLOR_BUFFER_BIT);
								}
								return [4, createImageBitmap(canvas)];
							case 1:
								bitmap = _state.sent();
								worker.postMessage({
									id,
									bitmap,
									width: canvas.width,
									height: canvas.height,
									dataURLOptions: options.dataURLOptions
								}, [bitmap]);
								return [2];
						}
					});
				}));
				rafId = requestAnimationFrame(takeCanvasSnapshots);
			};
			rafId = requestAnimationFrame(takeCanvasSnapshots);
			this.resetObservers = function() {
				canvasContextReset();
				cancelAnimationFrame(rafId);
			};
		};
		_proto.initCanvasMutationObserver = function initCanvasMutationObserver(win, blockClass, blockSelector) {
			this.startRAFTimestamping();
			this.startPendingCanvasMutationFlusher();
			var canvasContextReset = initCanvasContextObserver(win, blockClass, blockSelector, false);
			var canvas2DReset = initCanvas2DMutationObserver(this.processMutation.bind(this), win, blockClass, blockSelector);
			var canvasWebGL1and2Reset = initCanvasWebGLMutationObserver(this.processMutation.bind(this), win, blockClass, blockSelector);
			this.resetObservers = function() {
				canvasContextReset();
				canvas2DReset();
				canvasWebGL1and2Reset();
			};
		};
		_proto.startPendingCanvasMutationFlusher = function startPendingCanvasMutationFlusher() {
			var _this = this;
			requestAnimationFrame(function() {
				return _this.flushPendingCanvasMutations();
			});
		};
		_proto.startRAFTimestamping = function startRAFTimestamping() {
			var _this = this;
			var setLatestRAFTimestamp = function(timestamp) {
				_this.rafStamps.latestId = timestamp;
				requestAnimationFrame(setLatestRAFTimestamp);
			};
			requestAnimationFrame(setLatestRAFTimestamp);
		};
		_proto.flushPendingCanvasMutations = function flushPendingCanvasMutations() {
			var _this = this;
			this.pendingCanvasMutations.forEach(function(_values, canvas) {
				var id = _this.mirror.getId(canvas);
				_this.flushPendingCanvasMutationFor(canvas, id);
			});
			requestAnimationFrame(function() {
				return _this.flushPendingCanvasMutations();
			});
		};
		_proto.flushPendingCanvasMutationFor = function flushPendingCanvasMutationFor(canvas, id) {
			if (this.frozen || this.locked) return;
			var valuesWithType = this.pendingCanvasMutations.get(canvas);
			if (!valuesWithType || id === -1) return;
			var values = valuesWithType.map(function(value) {
				value.type;
				return _object_without_properties_loose(value, ["type"]);
			});
			var type = valuesWithType[0].type;
			this.mutationCb({
				id,
				type,
				commands: values
			});
			this.pendingCanvasMutations.delete(canvas);
		};
		return CanvasManager;
	}();
	var StylesheetManager = /*#__PURE__*/ function() {
		function StylesheetManager(options) {
			__publicField(this, "trackedLinkElements", /* @__PURE__ */ new WeakSet());
			__publicField(this, "mutationCb");
			__publicField(this, "adoptedStyleSheetCb");
			__publicField(this, "styleMirror", new StyleSheetMirror());
			this.mutationCb = options.mutationCb;
			this.adoptedStyleSheetCb = options.adoptedStyleSheetCb;
		}
		var _proto = StylesheetManager.prototype;
		_proto.attachLinkElement = function attachLinkElement(linkEl, childSn) {
			if ("_cssText" in childSn.attributes) this.mutationCb({
				adds: [],
				removes: [],
				texts: [],
				attributes: [{
					id: childSn.id,
					attributes: childSn.attributes
				}]
			});
			this.trackLinkElement(linkEl);
		};
		_proto.trackLinkElement = function trackLinkElement(linkEl) {
			if (this.trackedLinkElements.has(linkEl)) return;
			this.trackedLinkElements.add(linkEl);
			this.trackStylesheetInLinkElement(linkEl);
		};
		_proto.adoptStyleSheets = function adoptStyleSheets(sheets, hostId) {
			var _this;
			var _loop = function() {
				var sheet = _step.value;
				var styleId = void 0;
				if (!_this.styleMirror.has(sheet)) {
					styleId = _this.styleMirror.add(sheet);
					styles.push({
						styleId,
						rules: Array.from(sheet.rules || CSSRule, function(r2, index2) {
							return {
								rule: stringifyRule(r2, sheet.href),
								index: index2
							};
						})
					});
				} else styleId = _this.styleMirror.getId(sheet);
				adoptedStyleSheetData.styleIds.push(styleId);
			};
			if (sheets.length === 0) return;
			var adoptedStyleSheetData = {
				id: hostId,
				styleIds: []
			};
			var styles = [];
			for (var _iterator = _create_for_of_iterator_helper_loose(sheets), _step; !(_step = _iterator()).done;) _this = this, _loop();
			if (styles.length > 0) adoptedStyleSheetData.styles = styles;
			this.adoptedStyleSheetCb(adoptedStyleSheetData);
		};
		_proto.reset = function reset() {
			this.styleMirror.reset();
			this.trackedLinkElements = /* @__PURE__ */ new WeakSet();
		};
		_proto.trackStylesheetInLinkElement = function trackStylesheetInLinkElement(_linkEl) {};
		return StylesheetManager;
	}();
	var ProcessedNodeManager = /*#__PURE__*/ function() {
		function ProcessedNodeManager() {
			__publicField(this, "nodeMap", /* @__PURE__ */ new WeakMap());
			__publicField(this, "active", false);
		}
		var _proto = ProcessedNodeManager.prototype;
		_proto.inOtherBuffer = function inOtherBuffer(node2, thisBuffer) {
			var buffers = this.nodeMap.get(node2);
			return buffers && Array.from(buffers).some(function(buffer) {
				return buffer !== thisBuffer;
			});
		};
		_proto.add = function add(node2, buffer) {
			var _this = this;
			if (!this.active) {
				this.active = true;
				requestAnimationFrame(function() {
					_this.nodeMap = /* @__PURE__ */ new WeakMap();
					_this.active = false;
				});
			}
			this.nodeMap.set(node2, (this.nodeMap.get(node2) || /* @__PURE__ */ new Set()).add(buffer));
		};
		_proto.destroy = function destroy() {};
		return ProcessedNodeManager;
	}();
	var wrappedEmit;
	var takeFullSnapshot$1;
	var canvasManager;
	var recording = false;
	try {
		if (Array.from([1], function(x2) {
			return x2 * 2;
		})[0] !== 2) {
			var cleanFrame = document.createElement("iframe");
			document.body.appendChild(cleanFrame);
			Array.from = ((_a = cleanFrame.contentWindow) == null ? void 0 : _a.Array.from) || Array.from;
			document.body.removeChild(cleanFrame);
		}
	} catch (err) {
		console.debug("Unable to override Array.from", err);
	}
	var mirror = createMirror$2();
	function record(options) {
		if (options === void 0) options = {};
		var emit = options.emit;
		var checkoutEveryNms = options.checkoutEveryNms;
		var checkoutEveryNth = options.checkoutEveryNth;
		var _options_blockClass = options.blockClass;
		var blockClass = _options_blockClass === void 0 ? "rr-block" : _options_blockClass;
		var _options_blockSelector = options.blockSelector;
		var blockSelector = _options_blockSelector === void 0 ? null : _options_blockSelector;
		var _options_ignoreClass = options.ignoreClass;
		var ignoreClass = _options_ignoreClass === void 0 ? "rr-ignore" : _options_ignoreClass;
		var _options_ignoreSelector = options.ignoreSelector;
		var ignoreSelector = _options_ignoreSelector === void 0 ? null : _options_ignoreSelector;
		var _options_maskTextClass = options.maskTextClass;
		var maskTextClass = _options_maskTextClass === void 0 ? "rr-mask" : _options_maskTextClass;
		var _options_maskTextSelector = options.maskTextSelector;
		var maskTextSelector = _options_maskTextSelector === void 0 ? null : _options_maskTextSelector;
		var _options_inlineStylesheet = options.inlineStylesheet;
		var inlineStylesheet = _options_inlineStylesheet === void 0 ? true : _options_inlineStylesheet;
		var maskAllInputs = options.maskAllInputs;
		var _maskInputOptions = options.maskInputOptions;
		var _slimDOMOptions = options.slimDOMOptions;
		var maskInputFn = options.maskInputFn;
		var maskTextFn = options.maskTextFn;
		var hooks = options.hooks;
		var packFn = options.packFn;
		var _options_sampling = options.sampling;
		var sampling = _options_sampling === void 0 ? {} : _options_sampling;
		var _options_dataURLOptions = options.dataURLOptions;
		var dataURLOptions = _options_dataURLOptions === void 0 ? {} : _options_dataURLOptions;
		var mousemoveWait = options.mousemoveWait;
		var _options_recordDOM = options.recordDOM;
		var recordDOM = _options_recordDOM === void 0 ? true : _options_recordDOM;
		var _options_recordCanvas = options.recordCanvas;
		var recordCanvas = _options_recordCanvas === void 0 ? false : _options_recordCanvas;
		var _options_recordCrossOriginIframes = options.recordCrossOriginIframes;
		var recordCrossOriginIframes = _options_recordCrossOriginIframes === void 0 ? false : _options_recordCrossOriginIframes;
		var _options_recordAfter = options.recordAfter;
		var recordAfter = _options_recordAfter === void 0 ? options.recordAfter === "DOMContentLoaded" ? options.recordAfter : "load" : _options_recordAfter;
		var _options_userTriggeredOnInput = options.userTriggeredOnInput;
		var userTriggeredOnInput = _options_userTriggeredOnInput === void 0 ? false : _options_userTriggeredOnInput;
		var _options_collectFonts = options.collectFonts;
		var collectFonts = _options_collectFonts === void 0 ? false : _options_collectFonts;
		var _options_inlineImages = options.inlineImages;
		var inlineImages = _options_inlineImages === void 0 ? false : _options_inlineImages;
		var plugins = options.plugins;
		var _options_keepIframeSrcFn = options.keepIframeSrcFn;
		var keepIframeSrcFn = _options_keepIframeSrcFn === void 0 ? function() {
			return false;
		} : _options_keepIframeSrcFn;
		var _options_ignoreCSSAttributes = options.ignoreCSSAttributes;
		var ignoreCSSAttributes = _options_ignoreCSSAttributes === void 0 ? /* @__PURE__ */ new Set([]) : _options_ignoreCSSAttributes;
		var errorHandler2 = options.errorHandler;
		registerErrorHandler(errorHandler2);
		var inEmittingFrame = recordCrossOriginIframes ? window.parent === window : true;
		var passEmitsToParent = false;
		if (!inEmittingFrame) try {
			if (window.parent.document) passEmitsToParent = false;
		} catch (e2) {
			passEmitsToParent = true;
		}
		if (inEmittingFrame && !emit) throw new Error("emit function is required");
		if (!inEmittingFrame && !passEmitsToParent) return function() {};
		if (mousemoveWait !== void 0 && sampling.mousemove === void 0) sampling.mousemove = mousemoveWait;
		mirror.reset();
		var maskInputOptions = maskAllInputs === true ? {
			color: true,
			date: true,
			"datetime-local": true,
			email: true,
			month: true,
			number: true,
			range: true,
			search: true,
			tel: true,
			text: true,
			time: true,
			url: true,
			week: true,
			textarea: true,
			select: true,
			password: true,
			hidden: true
		} : _maskInputOptions !== void 0 ? _maskInputOptions : { password: true };
		var slimDOMOptions = _slimDOMOptions === true || _slimDOMOptions === "all" ? {
			script: true,
			comment: true,
			headFavicon: true,
			headWhitespace: true,
			headMetaSocial: true,
			headMetaRobots: true,
			headMetaHttpEquiv: true,
			headMetaVerification: true,
			headMetaAuthorship: _slimDOMOptions === "all",
			headMetaDescKeywords: _slimDOMOptions === "all",
			headTitleMutations: _slimDOMOptions === "all"
		} : _slimDOMOptions ? _slimDOMOptions : {};
		polyfill$1();
		var lastFullSnapshotEvent;
		var incrementalSnapshotCount = 0;
		var eventProcessor = function(e2) {
			for (var _iterator = _create_for_of_iterator_helper_loose(plugins || []), _step; !(_step = _iterator()).done;) {
				var plugin3 = _step.value;
				if (plugin3.eventProcessor) e2 = plugin3.eventProcessor(e2);
			}
			if (packFn && !passEmitsToParent) e2 = packFn(e2);
			return e2;
		};
		wrappedEmit = function(r2, isCheckout) {
			var _a2;
			var e2 = r2;
			e2.timestamp = nowTimestamp();
			if (((_a2 = mutationBuffers[0]) == null ? void 0 : _a2.isFrozen()) && e2.type !== EventType.FullSnapshot && !(e2.type === EventType.IncrementalSnapshot && e2.data.source === IncrementalSource.Mutation)) mutationBuffers.forEach(function(buf) {
				return buf.unfreeze();
			});
			if (inEmittingFrame) emit == null || emit(eventProcessor(e2), isCheckout);
			else if (passEmitsToParent) {
				var message = {
					type: "rrweb",
					event: eventProcessor(e2),
					origin: window.location.origin,
					isCheckout
				};
				window.parent.postMessage(message, "*");
			}
			if (e2.type === EventType.FullSnapshot) {
				lastFullSnapshotEvent = e2;
				incrementalSnapshotCount = 0;
			} else if (e2.type === EventType.IncrementalSnapshot) {
				if (e2.data.source === IncrementalSource.Mutation && e2.data.isAttachIframe) return;
				incrementalSnapshotCount++;
				var exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
				var exceedTime = checkoutEveryNms && e2.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;
				if (exceedCount || exceedTime) takeFullSnapshot$1(true);
			}
		};
		var wrappedMutationEmit = function(m) {
			wrappedEmit({
				type: EventType.IncrementalSnapshot,
				data: _extends({ source: IncrementalSource.Mutation }, m)
			});
		};
		var wrappedScrollEmit = function(p) {
			return wrappedEmit({
				type: EventType.IncrementalSnapshot,
				data: _extends({ source: IncrementalSource.Scroll }, p)
			});
		};
		var wrappedCanvasMutationEmit = function(p) {
			return wrappedEmit({
				type: EventType.IncrementalSnapshot,
				data: _extends({ source: IncrementalSource.CanvasMutation }, p)
			});
		};
		var wrappedAdoptedStyleSheetEmit = function(a2) {
			return wrappedEmit({
				type: EventType.IncrementalSnapshot,
				data: _extends({ source: IncrementalSource.AdoptedStyleSheet }, a2)
			});
		};
		var stylesheetManager = new StylesheetManager({
			mutationCb: wrappedMutationEmit,
			adoptedStyleSheetCb: wrappedAdoptedStyleSheetEmit
		});
		var iframeManager = new IframeManager({
			mirror,
			mutationCb: wrappedMutationEmit,
			stylesheetManager,
			recordCrossOriginIframes,
			wrappedEmit
		});
		for (var _iterator = _create_for_of_iterator_helper_loose(plugins || []), _step; !(_step = _iterator()).done;) {
			var plugin3 = _step.value;
			if (plugin3.getMirror) plugin3.getMirror({
				nodeMirror: mirror,
				crossOriginIframeMirror: iframeManager.crossOriginIframeMirror,
				crossOriginIframeStyleMirror: iframeManager.crossOriginIframeStyleMirror
			});
		}
		var processedNodeManager = new ProcessedNodeManager();
		canvasManager = new CanvasManager({
			recordCanvas,
			mutationCb: wrappedCanvasMutationEmit,
			win: window,
			blockClass,
			blockSelector,
			mirror,
			sampling: sampling.canvas,
			dataURLOptions
		});
		var shadowDomManager = new ShadowDomManager({
			mutationCb: wrappedMutationEmit,
			scrollCb: wrappedScrollEmit,
			bypassOptions: {
				blockClass,
				blockSelector,
				maskTextClass,
				maskTextSelector,
				inlineStylesheet,
				maskInputOptions,
				dataURLOptions,
				maskTextFn,
				maskInputFn,
				recordCanvas,
				inlineImages,
				sampling,
				slimDOMOptions,
				iframeManager,
				stylesheetManager,
				canvasManager,
				keepIframeSrcFn,
				processedNodeManager
			},
			mirror
		});
		takeFullSnapshot$1 = function(isCheckout) {
			if (isCheckout === void 0) isCheckout = false;
			if (!recordDOM) return;
			wrappedEmit({
				type: EventType.Meta,
				data: {
					href: window.location.href,
					width: getWindowWidth(),
					height: getWindowHeight()
				}
			}, isCheckout);
			stylesheetManager.reset();
			shadowDomManager.init();
			mutationBuffers.forEach(function(buf) {
				return buf.lock();
			});
			var node2 = snapshot(document, {
				mirror,
				blockClass,
				blockSelector,
				maskTextClass,
				maskTextSelector,
				inlineStylesheet,
				maskAllInputs: maskInputOptions,
				maskTextFn,
				maskInputFn,
				slimDOM: slimDOMOptions,
				dataURLOptions,
				recordCanvas,
				inlineImages,
				onSerialize: function(n2) {
					if (isSerializedIframe(n2, mirror)) iframeManager.addIframe(n2);
					if (isSerializedStylesheet(n2, mirror)) stylesheetManager.trackLinkElement(n2);
					if (hasShadowRoot(n2)) shadowDomManager.addShadowRoot(index.shadowRoot(n2), document);
				},
				onIframeLoad: function(iframe, childSn) {
					iframeManager.attachIframe(iframe, childSn);
					shadowDomManager.observeAttachShadow(iframe);
				},
				onStylesheetLoad: function(linkEl, childSn) {
					stylesheetManager.attachLinkElement(linkEl, childSn);
				},
				keepIframeSrcFn
			});
			if (!node2) return console.warn("Failed to snapshot the document");
			wrappedEmit({
				type: EventType.FullSnapshot,
				data: {
					node: node2,
					initialOffset: getWindowScroll(window)
				}
			}, isCheckout);
			mutationBuffers.forEach(function(buf) {
				return buf.unlock();
			});
			if (document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0) stylesheetManager.adoptStyleSheets(document.adoptedStyleSheets, mirror.getId(document));
		};
		try {
			var handlers = [];
			var observe = function(doc) {
				var _a2;
				return callbackWrapper(initObservers)({
					mutationCb: wrappedMutationEmit,
					mousemoveCb: function(positions, source) {
						return wrappedEmit({
							type: EventType.IncrementalSnapshot,
							data: {
								source,
								positions
							}
						});
					},
					mouseInteractionCb: function(d) {
						return wrappedEmit({
							type: EventType.IncrementalSnapshot,
							data: _extends({ source: IncrementalSource.MouseInteraction }, d)
						});
					},
					scrollCb: wrappedScrollEmit,
					viewportResizeCb: function(d) {
						return wrappedEmit({
							type: EventType.IncrementalSnapshot,
							data: _extends({ source: IncrementalSource.ViewportResize }, d)
						});
					},
					inputCb: function(v2) {
						return wrappedEmit({
							type: EventType.IncrementalSnapshot,
							data: _extends({ source: IncrementalSource.Input }, v2)
						});
					},
					mediaInteractionCb: function(p) {
						return wrappedEmit({
							type: EventType.IncrementalSnapshot,
							data: _extends({ source: IncrementalSource.MediaInteraction }, p)
						});
					},
					styleSheetRuleCb: function(r2) {
						return wrappedEmit({
							type: EventType.IncrementalSnapshot,
							data: _extends({ source: IncrementalSource.StyleSheetRule }, r2)
						});
					},
					styleDeclarationCb: function(r2) {
						return wrappedEmit({
							type: EventType.IncrementalSnapshot,
							data: _extends({ source: IncrementalSource.StyleDeclaration }, r2)
						});
					},
					canvasMutationCb: wrappedCanvasMutationEmit,
					fontCb: function(p) {
						return wrappedEmit({
							type: EventType.IncrementalSnapshot,
							data: _extends({ source: IncrementalSource.Font }, p)
						});
					},
					selectionCb: function(p) {
						wrappedEmit({
							type: EventType.IncrementalSnapshot,
							data: _extends({ source: IncrementalSource.Selection }, p)
						});
					},
					customElementCb: function(c2) {
						wrappedEmit({
							type: EventType.IncrementalSnapshot,
							data: _extends({ source: IncrementalSource.CustomElement }, c2)
						});
					},
					blockClass,
					ignoreClass,
					ignoreSelector,
					maskTextClass,
					maskTextSelector,
					maskInputOptions,
					inlineStylesheet,
					sampling,
					recordDOM,
					recordCanvas,
					inlineImages,
					userTriggeredOnInput,
					collectFonts,
					doc,
					maskInputFn,
					maskTextFn,
					keepIframeSrcFn,
					blockSelector,
					slimDOMOptions,
					dataURLOptions,
					mirror,
					iframeManager,
					stylesheetManager,
					shadowDomManager,
					processedNodeManager,
					canvasManager,
					ignoreCSSAttributes,
					plugins: ((_a2 = plugins == null ? void 0 : plugins.filter(function(p) {
						return p.observer;
					})) == null ? void 0 : _a2.map(function(p) {
						return {
							observer: p.observer,
							options: p.options,
							callback: function(payload) {
								return wrappedEmit({
									type: EventType.Plugin,
									data: {
										plugin: p.name,
										payload
									}
								});
							}
						};
					})) || []
				}, hooks);
			};
			iframeManager.addLoadListener(function(iframeEl) {
				try {
					handlers.push(observe(iframeEl.contentDocument));
				} catch (error) {
					console.warn(error);
				}
			});
			var init = function() {
				takeFullSnapshot$1();
				handlers.push(observe(document));
				recording = true;
			};
			if (document.readyState === "interactive" || document.readyState === "complete") init();
			else {
				handlers.push(on("DOMContentLoaded", function() {
					wrappedEmit({
						type: EventType.DomContentLoaded,
						data: {}
					});
					if (recordAfter === "DOMContentLoaded") init();
				}));
				handlers.push(on("load", function() {
					wrappedEmit({
						type: EventType.Load,
						data: {}
					});
					if (recordAfter === "load") init();
				}, window));
			}
			return function() {
				handlers.forEach(function(handler) {
					try {
						handler();
					} catch (error) {
						if (!String(error).toLowerCase().includes("cross-origin")) console.warn(error);
					}
				});
				processedNodeManager.destroy();
				recording = false;
				unregisterErrorHandler();
			};
		} catch (error) {
			console.warn(error);
		}
	}
	record.addCustomEvent = function(tag, payload) {
		if (!recording) throw new Error("please add custom event after start recording");
		wrappedEmit({
			type: EventType.Custom,
			data: {
				tag,
				payload
			}
		});
	};
	record.freezePage = function() {
		mutationBuffers.forEach(function(buf) {
			return buf.freeze();
		});
	};
	record.takeFullSnapshot = function(isCheckout) {
		if (!recording) throw new Error("please take full snapshot after start recording");
		takeFullSnapshot$1(isCheckout);
	};
	record.mirror = mirror;
	var n;
	(function(t2) {
		t2[t2.NotStarted = 0] = "NotStarted", t2[t2.Running = 1] = "Running", t2[t2.Stopped = 2] = "Stopped";
	})(n || (n = {}));
	record.addCustomEvent;
	record.freezePage;
	record.takeFullSnapshot;
	var setImmediate = win["setImmediate"];
	var builtInProp;
	var cycle;
	var schedulingQueue;
	var ToString = Object.prototype.toString;
	var timer = typeof setImmediate !== "undefined" ? function timer(fn) {
		return setImmediate(fn);
	} : setTimeout;
	try {
		Object.defineProperty({}, "x", {});
		builtInProp = function builtInProp(obj, name, val, config) {
			return Object.defineProperty(obj, name, {
				value: val,
				writable: true,
				configurable: config !== false
			});
		};
	} catch (err) {
		builtInProp = function builtInProp(obj, name, val) {
			obj[name] = val;
			return obj;
		};
	}
	schedulingQueue = (function Queue() {
		var first;
		var last;
		var item;
		function Item(fn, self) {
			this.fn = fn;
			this.self = self;
			this.next = void 0;
		}
		return {
			add: function add(fn, self) {
				item = new Item(fn, self);
				if (last) last.next = item;
				else first = item;
				last = item;
				item = void 0;
			},
			drain: function drain() {
				var f = first;
				first = last = cycle = void 0;
				while (f) {
					f.fn.call(f.self);
					f = f.next;
				}
			}
		};
	})();
	function schedule(fn, self) {
		schedulingQueue.add(fn, self);
		if (!cycle) cycle = timer(schedulingQueue.drain);
	}
	function isThenable(o) {
		var _then;
		var oType = typeof o;
		if (o !== null && (oType === "object" || oType === "function")) _then = o.then;
		return typeof _then === "function" ? _then : false;
	}
	function notify() {
		for (var i = 0; i < this.chain.length; i++) notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
		this.chain.length = 0;
	}
	function notifyIsolated(self, cb, chain) {
		var ret;
		var _then;
		try {
			if (cb === false) chain.reject(self.msg);
			else {
				if (cb === true) ret = self.msg;
				else ret = cb.call(void 0, self.msg);
				if (ret === chain.promise) chain.reject(TypeError("Promise-chain cycle"));
				else if (_then = isThenable(ret)) _then.call(ret, chain.resolve, chain.reject);
				else chain.resolve(ret);
			}
		} catch (err) {
			chain.reject(err);
		}
	}
	function resolve(msg) {
		var _then;
		var self = this;
		if (self.triggered) return;
		self.triggered = true;
		if (self.def) self = self.def;
		try {
			if (_then = isThenable(msg)) schedule(function() {
				var defWrapper = new MakeDefWrapper(self);
				try {
					_then.call(msg, function $resolve$() {
						resolve.apply(defWrapper, arguments);
					}, function $reject$() {
						reject.apply(defWrapper, arguments);
					});
				} catch (err) {
					reject.call(defWrapper, err);
				}
			});
			else {
				self.msg = msg;
				self.state = 1;
				if (self.chain.length > 0) schedule(notify, self);
			}
		} catch (err) {
			reject.call(new MakeDefWrapper(self), err);
		}
	}
	function reject(msg) {
		var self = this;
		if (self.triggered) return;
		self.triggered = true;
		if (self.def) self = self.def;
		self.msg = msg;
		self.state = 2;
		if (self.chain.length > 0) schedule(notify, self);
	}
	function iteratePromises(Constructor, arr, resolver, rejecter) {
		for (var idx = 0; idx < arr.length; idx++) (function IIFE(idx) {
			Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
				resolver(idx, msg);
			}, rejecter);
		})(idx);
	}
	function MakeDefWrapper(self) {
		this.def = self;
		this.triggered = false;
	}
	function MakeDef(self) {
		this.promise = self;
		this.state = 0;
		this.triggered = false;
		this.chain = [];
		this.msg = void 0;
	}
	function NpoPromise(executor) {
		if (typeof executor !== "function") throw TypeError("Not a function");
		if (this["__NPO__"] !== 0) throw TypeError("Not a promise");
		this["__NPO__"] = 1;
		var def = new MakeDef(this);
		this["then"] = function then(success, failure) {
			var o = {
				success: typeof success === "function" ? success : true,
				failure: typeof failure === "function" ? failure : false
			};
			o.promise = new this.constructor(function extractChain(resolve, reject) {
				if (typeof resolve !== "function" || typeof reject !== "function") throw TypeError("Not a function");
				o.resolve = resolve;
				o.reject = reject;
			});
			def.chain.push(o);
			if (def.state !== 0) schedule(notify, def);
			return o.promise;
		};
		this["catch"] = function $catch$(failure) {
			return this.then(void 0, failure);
		};
		try {
			executor.call(void 0, function publicResolve(msg) {
				resolve.call(def, msg);
			}, function publicReject(msg) {
				reject.call(def, msg);
			});
		} catch (err) {
			reject.call(def, err);
		}
	}
	var PromisePrototype = builtInProp({}, "constructor", NpoPromise, false);
	NpoPromise.prototype = PromisePrototype;
	builtInProp(PromisePrototype, "__NPO__", 0, false);
	builtInProp(NpoPromise, "resolve", function Promise$resolve(msg) {
		var Constructor = this;
		if (msg && typeof msg === "object" && msg["__NPO__"] === 1) return msg;
		return new Constructor(function executor(resolve, reject) {
			if (typeof resolve !== "function" || typeof reject !== "function") throw TypeError("Not a function");
			resolve(msg);
		});
	});
	builtInProp(NpoPromise, "reject", function Promise$reject(msg) {
		return new this(function executor(resolve, reject) {
			if (typeof resolve !== "function" || typeof reject !== "function") throw TypeError("Not a function");
			reject(msg);
		});
	});
	builtInProp(NpoPromise, "all", function Promise$all(arr) {
		var Constructor = this;
		if (ToString.call(arr) !== "[object Array]") return Constructor.reject(TypeError("Not an array"));
		if (arr.length === 0) return Constructor.resolve([]);
		return new Constructor(function executor(resolve, reject) {
			if (typeof resolve !== "function" || typeof reject !== "function") throw TypeError("Not a function");
			var len = arr.length;
			var msgs = Array(len);
			var count = 0;
			iteratePromises(Constructor, arr, function resolver(idx, msg) {
				msgs[idx] = msg;
				if (++count === len) resolve(msgs);
			}, reject);
		});
	});
	builtInProp(NpoPromise, "race", function Promise$race(arr) {
		var Constructor = this;
		if (ToString.call(arr) !== "[object Array]") return Constructor.reject(TypeError("Not an array"));
		return new Constructor(function executor(resolve, reject) {
			if (typeof resolve !== "function" || typeof reject !== "function") throw TypeError("Not a function");
			iteratePromises(Constructor, arr, function resolver(idx, msg) {
				resolve(msg);
			}, reject);
		});
	});
	var PromisePolyfill;
	if (typeof Promise !== "undefined" && Promise.toString().indexOf("[native code]") !== -1) PromisePolyfill = Promise;
	else PromisePolyfill = NpoPromise;
	var Config = {
		DEBUG: false,
		LIB_VERSION: "2.71.1"
	};
	var MAX_RECORDING_MS = 1440 * 60 * 1e3;
	var MAX_VALUE_FOR_MIN_RECORDING_MS = 8 * 1e3;
	var ArrayProto = Array.prototype;
	var FuncProto = Function.prototype;
	var ObjProto = Object.prototype;
	var slice = ArrayProto.slice;
	var toString = ObjProto.toString;
	var hasOwnProperty = ObjProto.hasOwnProperty;
	var windowConsole = win.console;
	var navigator = win.navigator;
	var document$1 = win.document;
	var windowOpera = win.opera;
	var screen = win.screen;
	var userAgent = navigator.userAgent;
	var nativeBind = FuncProto.bind;
	var nativeForEach = ArrayProto.forEach;
	var nativeIndexOf = ArrayProto.indexOf;
	var nativeMap = ArrayProto.map;
	var nativeIsArray = Array.isArray;
	var breaker = {};
	var _$1 = { trim: function(str) {
		return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
	} };
	var console$1 = {
		/** @type {function(...*)} */
		log: function() {
			if (Config.DEBUG && !_$1.isUndefined(windowConsole) && windowConsole) try {
				windowConsole.log.apply(windowConsole, arguments);
			} catch (err) {
				_$1.each(arguments, function(arg) {
					windowConsole.log(arg);
				});
			}
		},
		/** @type {function(...*)} */
		warn: function() {
			if (Config.DEBUG && !_$1.isUndefined(windowConsole) && windowConsole) {
				var args = ["Mixpanel warning:"].concat(_$1.toArray(arguments));
				try {
					windowConsole.warn.apply(windowConsole, args);
				} catch (err) {
					_$1.each(args, function(arg) {
						windowConsole.warn(arg);
					});
				}
			}
		},
		/** @type {function(...*)} */
		error: function() {
			if (Config.DEBUG && !_$1.isUndefined(windowConsole) && windowConsole) {
				var args = ["Mixpanel error:"].concat(_$1.toArray(arguments));
				try {
					windowConsole.error.apply(windowConsole, args);
				} catch (err) {
					_$1.each(args, function(arg) {
						windowConsole.error(arg);
					});
				}
			}
		},
		/** @type {function(...*)} */
		critical: function() {
			if (!_$1.isUndefined(windowConsole) && windowConsole) {
				var args = ["Mixpanel error:"].concat(_$1.toArray(arguments));
				try {
					windowConsole.error.apply(windowConsole, args);
				} catch (err) {
					_$1.each(args, function(arg) {
						windowConsole.error(arg);
					});
				}
			}
		}
	};
	var log_func_with_prefix = function(func, prefix) {
		return function() {
			arguments[0] = "[" + prefix + "] " + arguments[0];
			return func.apply(console$1, arguments);
		};
	};
	var console_with_prefix = function(prefix) {
		return {
			log: log_func_with_prefix(console$1.log, prefix),
			error: log_func_with_prefix(console$1.error, prefix),
			critical: log_func_with_prefix(console$1.critical, prefix)
		};
	};
	var safewrap = function(f) {
		return function() {
			try {
				return f.apply(this, arguments);
			} catch (e) {
				console$1.critical("Implementation error. Please turn on debug and contact support@mixpanel.com.");
				if (Config.DEBUG) console$1.critical(e);
			}
		};
	};
	var safewrapClass = function(klass) {
		var proto = klass.prototype;
		for (var func in proto) if (typeof proto[func] === "function") proto[func] = safewrap(proto[func]);
	};
	_$1.bind = function(func, context) {
		var args;
		var bound;
		if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
		if (!_$1.isFunction(func)) throw new TypeError();
		args = slice.call(arguments, 2);
		bound = function() {
			if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
			var ctor = {};
			ctor.prototype = func.prototype;
			var self = new ctor();
			ctor.prototype = null;
			var result = func.apply(self, args.concat(slice.call(arguments)));
			if (Object(result) === result) return result;
			return self;
		};
		return bound;
	};
	/**
	* @param {*=} obj
	* @param {function(...*)=} iterator
	* @param {Object=} context
	*/
	_$1.each = function(obj, iterator, context) {
		if (obj === null || obj === void 0) return;
		if (nativeForEach && obj.forEach === nativeForEach) obj.forEach(iterator, context);
		else if (obj.length === +obj.length) {
			for (var i = 0, l = obj.length; i < l; i++) if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) return;
		} else for (var key in obj) if (hasOwnProperty.call(obj, key)) {
			if (iterator.call(context, obj[key], key, obj) === breaker) return;
		}
	};
	_$1.extend = function(obj) {
		_$1.each(slice.call(arguments, 1), function(source) {
			for (var prop in source) if (source[prop] !== void 0) obj[prop] = source[prop];
		});
		return obj;
	};
	_$1.isArray = nativeIsArray || function(obj) {
		return toString.call(obj) === "[object Array]";
	};
	_$1.isFunction = function(f) {
		try {
			return /^\s*\bfunction\b/.test(f);
		} catch (x) {
			return false;
		}
	};
	_$1.isArguments = function(obj) {
		return !!(obj && hasOwnProperty.call(obj, "callee"));
	};
	_$1.toArray = function(iterable) {
		if (!iterable) return [];
		if (iterable.toArray) return iterable.toArray();
		if (_$1.isArray(iterable)) return slice.call(iterable);
		if (_$1.isArguments(iterable)) return slice.call(iterable);
		return _$1.values(iterable);
	};
	_$1.map = function(arr, callback, context) {
		if (nativeMap && arr.map === nativeMap) return arr.map(callback, context);
		else {
			var results = [];
			_$1.each(arr, function(item) {
				results.push(callback.call(context, item));
			});
			return results;
		}
	};
	_$1.keys = function(obj) {
		var results = [];
		if (obj === null) return results;
		_$1.each(obj, function(value, key) {
			results[results.length] = key;
		});
		return results;
	};
	_$1.values = function(obj) {
		var results = [];
		if (obj === null) return results;
		_$1.each(obj, function(value) {
			results[results.length] = value;
		});
		return results;
	};
	_$1.include = function(obj, target) {
		var found = false;
		if (obj === null) return found;
		if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
		_$1.each(obj, function(value) {
			if (found || (found = value === target)) return breaker;
		});
		return found;
	};
	_$1.includes = function(str, needle) {
		return str.indexOf(needle) !== -1;
	};
	_$1.inherit = function(subclass, superclass) {
		subclass.prototype = new superclass();
		subclass.prototype.constructor = subclass;
		subclass.superclass = superclass.prototype;
		return subclass;
	};
	_$1.isObject = function(obj) {
		return obj === Object(obj) && !_$1.isArray(obj);
	};
	_$1.isEmptyObject = function(obj) {
		if (_$1.isObject(obj)) {
			for (var key in obj) if (hasOwnProperty.call(obj, key)) return false;
			return true;
		}
		return false;
	};
	_$1.isUndefined = function(obj) {
		return obj === void 0;
	};
	_$1.isString = function(obj) {
		return toString.call(obj) == "[object String]";
	};
	_$1.isDate = function(obj) {
		return toString.call(obj) == "[object Date]";
	};
	_$1.isNumber = function(obj) {
		return toString.call(obj) == "[object Number]";
	};
	_$1.isElement = function(obj) {
		return !!(obj && obj.nodeType === 1);
	};
	_$1.encodeDates = function(obj) {
		_$1.each(obj, function(v, k) {
			if (_$1.isDate(v)) obj[k] = _$1.formatDate(v);
			else if (_$1.isObject(v)) obj[k] = _$1.encodeDates(v);
		});
		return obj;
	};
	_$1.timestamp = function() {
		Date.now = Date.now || function() {
			return +/* @__PURE__ */ new Date();
		};
		return Date.now();
	};
	_$1.formatDate = function(d) {
		function pad(n) {
			return n < 10 ? "0" + n : n;
		}
		return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds());
	};
	_$1.strip_empty_properties = function(p) {
		var ret = {};
		_$1.each(p, function(v, k) {
			if (_$1.isString(v) && v.length > 0) ret[k] = v;
		});
		return ret;
	};
	_$1.truncate = function(obj, length) {
		var ret;
		if (typeof obj === "string") ret = obj.slice(0, length);
		else if (_$1.isArray(obj)) {
			ret = [];
			_$1.each(obj, function(val) {
				ret.push(_$1.truncate(val, length));
			});
		} else if (_$1.isObject(obj)) {
			ret = {};
			_$1.each(obj, function(val, key) {
				ret[key] = _$1.truncate(val, length);
			});
		} else ret = obj;
		return ret;
	};
	_$1.JSONEncode = (function() {
		return function(mixed_val) {
			var value = mixed_val;
			var quote = function(string) {
				var escapable = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
				var meta = {
					"\b": "\\b",
					"	": "\\t",
					"\n": "\\n",
					"\f": "\\f",
					"\r": "\\r",
					"\"": "\\\"",
					"\\": "\\\\"
				};
				escapable.lastIndex = 0;
				return escapable.test(string) ? "\"" + string.replace(escapable, function(a) {
					var c = meta[a];
					return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
				}) + "\"" : "\"" + string + "\"";
			};
			var str = function(key, holder) {
				var gap = "";
				var indent = "    ";
				var i = 0;
				var k = "";
				var v = "";
				var length = 0;
				var mind = gap;
				var partial = [];
				var value = holder[key];
				if (value && typeof value === "object" && typeof value.toJSON === "function") value = value.toJSON(key);
				switch (typeof value) {
					case "string": return quote(value);
					case "number": return isFinite(value) ? String(value) : "null";
					case "boolean":
					case "null": return String(value);
					case "object":
						if (!value) return "null";
						gap += indent;
						partial = [];
						if (toString.apply(value) === "[object Array]") {
							length = value.length;
							for (i = 0; i < length; i += 1) partial[i] = str(i, value) || "null";
							v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
							gap = mind;
							return v;
						}
						for (k in value) if (hasOwnProperty.call(value, k)) {
							v = str(k, value);
							if (v) partial.push(quote(k) + (gap ? ": " : ":") + v);
						}
						v = partial.length === 0 ? "{}" : gap ? "{" + partial.join(",") + mind + "}" : "{" + partial.join(",") + "}";
						gap = mind;
						return v;
				}
			};
			return str("", { "": value });
		};
	})();
	/**
	* From https://github.com/douglascrockford/JSON-js/blob/master/json_parse.js
	* Slightly modified to throw a real Error rather than a POJO
	*/
	_$1.JSONDecode = (function() {
		var at;
		var ch;
		var escapee = {
			"\"": "\"",
			"\\": "\\",
			"/": "/",
			"b": "\b",
			"f": "\f",
			"n": "\n",
			"r": "\r",
			"t": "	"
		};
		var text;
		var error = function(m) {
			var e = new SyntaxError(m);
			e.at = at;
			e.text = text;
			throw e;
		};
		var next = function(c) {
			if (c && c !== ch) error("Expected '" + c + "' instead of '" + ch + "'");
			ch = text.charAt(at);
			at += 1;
			return ch;
		};
		var number = function() {
			var number;
			var string = "";
			if (ch === "-") {
				string = "-";
				next("-");
			}
			while (ch >= "0" && ch <= "9") {
				string += ch;
				next();
			}
			if (ch === ".") {
				string += ".";
				while (next() && ch >= "0" && ch <= "9") string += ch;
			}
			if (ch === "e" || ch === "E") {
				string += ch;
				next();
				if (ch === "-" || ch === "+") {
					string += ch;
					next();
				}
				while (ch >= "0" && ch <= "9") {
					string += ch;
					next();
				}
			}
			number = +string;
			if (!isFinite(number)) error("Bad number");
			else return number;
		};
		var string = function() {
			var hex;
			var i;
			var string = "";
			var uffff;
			if (ch === "\"") while (next()) {
				if (ch === "\"") {
					next();
					return string;
				}
				if (ch === "\\") {
					next();
					if (ch === "u") {
						uffff = 0;
						for (i = 0; i < 4; i += 1) {
							hex = parseInt(next(), 16);
							if (!isFinite(hex)) break;
							uffff = uffff * 16 + hex;
						}
						string += String.fromCharCode(uffff);
					} else if (typeof escapee[ch] === "string") string += escapee[ch];
					else break;
				} else string += ch;
			}
			error("Bad string");
		};
		var white = function() {
			while (ch && ch <= " ") next();
		};
		var word = function() {
			switch (ch) {
				case "t":
					next("t");
					next("r");
					next("u");
					next("e");
					return true;
				case "f":
					next("f");
					next("a");
					next("l");
					next("s");
					next("e");
					return false;
				case "n":
					next("n");
					next("u");
					next("l");
					next("l");
					return null;
			}
			error("Unexpected \"" + ch + "\"");
		};
		var value;
		var array = function() {
			var array = [];
			if (ch === "[") {
				next("[");
				white();
				if (ch === "]") {
					next("]");
					return array;
				}
				while (ch) {
					array.push(value());
					white();
					if (ch === "]") {
						next("]");
						return array;
					}
					next(",");
					white();
				}
			}
			error("Bad array");
		};
		var object = function() {
			var key;
			var object = {};
			if (ch === "{") {
				next("{");
				white();
				if (ch === "}") {
					next("}");
					return object;
				}
				while (ch) {
					key = string();
					white();
					next(":");
					if (Object.hasOwnProperty.call(object, key)) error("Duplicate key \"" + key + "\"");
					object[key] = value();
					white();
					if (ch === "}") {
						next("}");
						return object;
					}
					next(",");
					white();
				}
			}
			error("Bad object");
		};
		value = function() {
			white();
			switch (ch) {
				case "{": return object();
				case "[": return array();
				case "\"": return string();
				case "-": return number();
				default: return ch >= "0" && ch <= "9" ? number() : word();
			}
		};
		return function(source) {
			var result;
			text = source;
			at = 0;
			ch = " ";
			result = value();
			white();
			if (ch) error("Syntax error");
			return result;
		};
	})();
	_$1.base64Encode = function(data) {
		var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var o1;
		var o2;
		var o3;
		var h1;
		var h2;
		var h3;
		var h4;
		var bits;
		var i = 0;
		var ac = 0;
		var enc = "";
		var tmp_arr = [];
		if (!data) return data;
		data = _$1.utf8Encode(data);
		do {
			o1 = data.charCodeAt(i++);
			o2 = data.charCodeAt(i++);
			o3 = data.charCodeAt(i++);
			bits = o1 << 16 | o2 << 8 | o3;
			h1 = bits >> 18 & 63;
			h2 = bits >> 12 & 63;
			h3 = bits >> 6 & 63;
			h4 = bits & 63;
			tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
		} while (i < data.length);
		enc = tmp_arr.join("");
		switch (data.length % 3) {
			case 1:
				enc = enc.slice(0, -2) + "==";
				break;
			case 2:
				enc = enc.slice(0, -1) + "=";
				break;
		}
		return enc;
	};
	_$1.utf8Encode = function(string) {
		string = (string + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
		var utftext = "";
		var start;
		var end;
		var stringl = 0;
		var n;
		start = end = 0;
		stringl = string.length;
		for (n = 0; n < stringl; n++) {
			var c1 = string.charCodeAt(n);
			var enc = null;
			if (c1 < 128) end++;
			else if (c1 > 127 && c1 < 2048) enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
			else enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
			if (enc !== null) {
				if (end > start) utftext += string.substring(start, end);
				utftext += enc;
				start = end = n + 1;
			}
		}
		if (end > start) utftext += string.substring(start, string.length);
		return utftext;
	};
	_$1.UUID = function() {
		try {
			return win["crypto"]["randomUUID"]();
		} catch (err) {
			var uuid = new Array(36);
			for (var i = 0; i < 36; i++) uuid[i] = Math.floor(Math.random() * 16);
			uuid[14] = 4;
			uuid[19] = uuid[19] &= -5;
			uuid[19] = uuid[19] |= 8;
			uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
			return _$1.map(uuid, function(x) {
				return x.toString(16);
			}).join("");
		}
	};
	var BLOCKED_UA_STRS = [
		"ahrefsbot",
		"ahrefssiteaudit",
		"amazonbot",
		"baiduspider",
		"bingbot",
		"bingpreview",
		"chrome-lighthouse",
		"facebookexternal",
		"petalbot",
		"pinterest",
		"screaming frog",
		"yahoo! slurp",
		"yandex",
		"adsbot-google",
		"apis-google",
		"duplexweb-google",
		"feedfetcher-google",
		"google favicon",
		"google web preview",
		"google-read-aloud",
		"googlebot",
		"googleweblight",
		"mediapartners-google",
		"storebot-google"
	];
	_$1.isBlockedUA = function(ua) {
		var i;
		ua = ua.toLowerCase();
		for (i = 0; i < BLOCKED_UA_STRS.length; i++) if (ua.indexOf(BLOCKED_UA_STRS[i]) !== -1) return true;
		return false;
	};
	/**
	* @param {Object=} formdata
	* @param {string=} arg_separator
	*/
	_$1.HTTPBuildQuery = function(formdata, arg_separator) {
		var use_val;
		var use_key;
		var tmp_arr = [];
		if (_$1.isUndefined(arg_separator)) arg_separator = "&";
		_$1.each(formdata, function(val, key) {
			use_val = encodeURIComponent(val.toString());
			use_key = encodeURIComponent(key);
			tmp_arr[tmp_arr.length] = use_key + "=" + use_val;
		});
		return tmp_arr.join(arg_separator);
	};
	_$1.getQueryParam = function(url, param) {
		param = param.replace(/[[]/g, "\\[").replace(/[\]]/g, "\\]");
		var regexS = "[\\?&]" + param + "=([^&#]*)";
		var results = new RegExp(regexS).exec(url);
		if (results === null || results && typeof results[1] !== "string" && results[1].length) return "";
		else {
			var result = results[1];
			try {
				result = decodeURIComponent(result);
			} catch (err) {
				console$1.error("Skipping decoding for malformed query param: " + result);
			}
			return result.replace(/\+/g, " ");
		}
	};
	_$1.cookie = {
		get: function(name) {
			var nameEQ = name + "=";
			var ca = document$1.cookie.split(";");
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == " ") c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
			}
			return null;
		},
		parse: function(name) {
			var cookie;
			try {
				cookie = _$1.JSONDecode(_$1.cookie.get(name)) || {};
			} catch (err) {}
			return cookie;
		},
		set_seconds: function(name, value, seconds, is_cross_subdomain, is_secure, is_cross_site, domain_override) {
			var cdomain = "";
			var expires = "";
			var secure = "";
			if (domain_override) cdomain = "; domain=" + domain_override;
			else if (is_cross_subdomain) {
				var domain = extract_domain(document$1.location.hostname);
				cdomain = domain ? "; domain=." + domain : "";
			}
			if (seconds) {
				var date = /* @__PURE__ */ new Date();
				date.setTime(date.getTime() + seconds * 1e3);
				expires = "; expires=" + date.toGMTString();
			}
			if (is_cross_site) {
				is_secure = true;
				secure = "; SameSite=None";
			}
			if (is_secure) secure += "; secure";
			document$1.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/" + cdomain + secure;
		},
		set: function(name, value, days, is_cross_subdomain, is_secure, is_cross_site, domain_override) {
			var cdomain = "";
			var expires = "";
			var secure = "";
			if (domain_override) cdomain = "; domain=" + domain_override;
			else if (is_cross_subdomain) {
				var domain = extract_domain(document$1.location.hostname);
				cdomain = domain ? "; domain=." + domain : "";
			}
			if (days) {
				var date = /* @__PURE__ */ new Date();
				date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
				expires = "; expires=" + date.toGMTString();
			}
			if (is_cross_site) {
				is_secure = true;
				secure = "; SameSite=None";
			}
			if (is_secure) secure += "; secure";
			var new_cookie_val = name + "=" + encodeURIComponent(value) + expires + "; path=/" + cdomain + secure;
			document$1.cookie = new_cookie_val;
			return new_cookie_val;
		},
		remove: function(name, is_cross_subdomain, domain_override) {
			_$1.cookie.set(name, "", -1, is_cross_subdomain, false, false, domain_override);
		}
	};
	var _testStorageSupported = function(storage) {
		var supported = true;
		try {
			var key = "__mplss_" + cheap_guid(8);
			var val = "xyz";
			storage.setItem(key, val);
			if (storage.getItem(key) !== val) supported = false;
			storage.removeItem(key);
		} catch (err) {
			supported = false;
		}
		return supported;
	};
	var _localStorageSupported = null;
	var localStorageSupported = function(storage, forceCheck) {
		if (_localStorageSupported !== null && !forceCheck) return _localStorageSupported;
		return _localStorageSupported = _testStorageSupported(storage || win.localStorage);
	};
	var _sessionStorageSupported = null;
	var sessionStorageSupported = function(storage, forceCheck) {
		if (_sessionStorageSupported !== null && !forceCheck) return _sessionStorageSupported;
		return _sessionStorageSupported = _testStorageSupported(storage || win.sessionStorage);
	};
	function _storageWrapper(storage, name, is_supported_fn) {
		var log_error = function(msg) {
			console$1.error(name + " error: " + msg);
		};
		return {
			is_supported: function(forceCheck) {
				var supported = is_supported_fn(storage, forceCheck);
				if (!supported) console$1.error(name + " unsupported");
				return supported;
			},
			error: log_error,
			get: function(key) {
				try {
					return storage.getItem(key);
				} catch (err) {
					log_error(err);
				}
				return null;
			},
			parse: function(key) {
				try {
					return _$1.JSONDecode(storage.getItem(key)) || {};
				} catch (err) {}
				return null;
			},
			set: function(key, value) {
				try {
					storage.setItem(key, value);
				} catch (err) {
					log_error(err);
				}
			},
			remove: function(key) {
				try {
					storage.removeItem(key);
				} catch (err) {
					log_error(err);
				}
			}
		};
	}
	_$1.localStorage = _storageWrapper(win.localStorage, "localStorage", localStorageSupported);
	_$1.sessionStorage = _storageWrapper(win.sessionStorage, "sessionStorage", sessionStorageSupported);
	_$1.register_event = (function() {
		/**
		* @param {Object} element
		* @param {string} type
		* @param {function(...*)} handler
		* @param {boolean=} oldSchool
		* @param {boolean=} useCapture
		*/
		var register_event = function(element, type, handler, oldSchool, useCapture) {
			if (!element) {
				console$1.error("No valid element provided to register_event");
				return;
			}
			if (element.addEventListener && !oldSchool) element.addEventListener(type, handler, !!useCapture);
			else {
				var ontype = "on" + type;
				var old_handler = element[ontype];
				element[ontype] = makeHandler(element, handler, old_handler);
			}
		};
		function makeHandler(element, new_handler, old_handlers) {
			var handler = function(event) {
				event = event || fixEvent(win.event);
				if (!event) return;
				var ret = true;
				var old_result;
				var new_result;
				if (_$1.isFunction(old_handlers)) old_result = old_handlers(event);
				new_result = new_handler.call(element, event);
				if (false === old_result || false === new_result) ret = false;
				return ret;
			};
			return handler;
		}
		function fixEvent(event) {
			if (event) {
				event.preventDefault = fixEvent.preventDefault;
				event.stopPropagation = fixEvent.stopPropagation;
			}
			return event;
		}
		fixEvent.preventDefault = function() {
			this.returnValue = false;
		};
		fixEvent.stopPropagation = function() {
			this.cancelBubble = true;
		};
		return register_event;
	})();
	var TOKEN_MATCH_REGEX = /* @__PURE__ */ new RegExp("^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?\"?([^\\]\"]*)\"?\\]$");
	_$1.dom_query = (function() {
		function getAllChildren(e) {
			return e.all ? e.all : e.getElementsByTagName("*");
		}
		var bad_whitespace = /[\t\r\n]/g;
		function hasClass(elem, selector) {
			var className = " " + selector + " ";
			return (" " + elem.className + " ").replace(bad_whitespace, " ").indexOf(className) >= 0;
		}
		function getElementsBySelector(selector) {
			if (!document$1.getElementsByTagName) return [];
			var tokens = selector.split(" ");
			var token;
			var bits;
			var tagName;
			var found;
			var foundCount;
			var i;
			var j;
			var k;
			var elements;
			var currentContextIndex;
			var currentContext = [document$1];
			for (i = 0; i < tokens.length; i++) {
				token = tokens[i].replace(/^\s+/, "").replace(/\s+$/, "");
				if (token.indexOf("#") > -1) {
					bits = token.split("#");
					tagName = bits[0];
					var id = bits[1];
					var element = document$1.getElementById(id);
					if (!element || tagName && element.nodeName.toLowerCase() != tagName) return [];
					currentContext = [element];
					continue;
				}
				if (token.indexOf(".") > -1) {
					bits = token.split(".");
					tagName = bits[0];
					var className = bits[1];
					if (!tagName) tagName = "*";
					found = [];
					foundCount = 0;
					for (j = 0; j < currentContext.length; j++) {
						if (tagName == "*") elements = getAllChildren(currentContext[j]);
						else elements = currentContext[j].getElementsByTagName(tagName);
						for (k = 0; k < elements.length; k++) found[foundCount++] = elements[k];
					}
					currentContext = [];
					currentContextIndex = 0;
					for (j = 0; j < found.length; j++) if (found[j].className && _$1.isString(found[j].className) && hasClass(found[j], className)) currentContext[currentContextIndex++] = found[j];
					continue;
				}
				var token_match = token.match(TOKEN_MATCH_REGEX);
				if (token_match) {
					tagName = token_match[1];
					var attrName = token_match[2];
					var attrOperator = token_match[3];
					var attrValue = token_match[4];
					if (!tagName) tagName = "*";
					found = [];
					foundCount = 0;
					for (j = 0; j < currentContext.length; j++) {
						if (tagName == "*") elements = getAllChildren(currentContext[j]);
						else elements = currentContext[j].getElementsByTagName(tagName);
						for (k = 0; k < elements.length; k++) found[foundCount++] = elements[k];
					}
					currentContext = [];
					currentContextIndex = 0;
					var checkFunction;
					switch (attrOperator) {
						case "=":
							checkFunction = function(e) {
								return e.getAttribute(attrName) == attrValue;
							};
							break;
						case "~":
							checkFunction = function(e) {
								return e.getAttribute(attrName).match(new RegExp("\\b" + attrValue + "\\b"));
							};
							break;
						case "|":
							checkFunction = function(e) {
								return e.getAttribute(attrName).match(new RegExp("^" + attrValue + "-?"));
							};
							break;
						case "^":
							checkFunction = function(e) {
								return e.getAttribute(attrName).indexOf(attrValue) === 0;
							};
							break;
						case "$":
							checkFunction = function(e) {
								return e.getAttribute(attrName).lastIndexOf(attrValue) == e.getAttribute(attrName).length - attrValue.length;
							};
							break;
						case "*":
							checkFunction = function(e) {
								return e.getAttribute(attrName).indexOf(attrValue) > -1;
							};
							break;
						default: checkFunction = function(e) {
							return e.getAttribute(attrName);
						};
					}
					currentContext = [];
					currentContextIndex = 0;
					for (j = 0; j < found.length; j++) if (checkFunction(found[j])) currentContext[currentContextIndex++] = found[j];
					continue;
				}
				tagName = token;
				found = [];
				foundCount = 0;
				for (j = 0; j < currentContext.length; j++) {
					elements = currentContext[j].getElementsByTagName(tagName);
					for (k = 0; k < elements.length; k++) found[foundCount++] = elements[k];
				}
				currentContext = found;
			}
			return currentContext;
		}
		return function(query) {
			if (_$1.isElement(query)) return [query];
			else if (_$1.isObject(query) && !_$1.isUndefined(query.length)) return query;
			else return getElementsBySelector.call(this, query);
		};
	})();
	var CAMPAIGN_KEYWORDS = [
		"utm_source",
		"utm_medium",
		"utm_campaign",
		"utm_content",
		"utm_term",
		"utm_id",
		"utm_source_platform",
		"utm_campaign_id",
		"utm_creative_format",
		"utm_marketing_tactic"
	];
	var CLICK_IDS = [
		"dclid",
		"fbclid",
		"gclid",
		"ko_click_id",
		"li_fat_id",
		"msclkid",
		"sccid",
		"ttclid",
		"twclid",
		"wbraid"
	];
	_$1.info = {
		campaignParams: function(default_value) {
			var kw = "";
			var params = {};
			_$1.each(CAMPAIGN_KEYWORDS, function(kwkey) {
				kw = _$1.getQueryParam(document$1.URL, kwkey);
				if (kw.length) params[kwkey] = kw;
				else if (default_value !== void 0) params[kwkey] = default_value;
			});
			return params;
		},
		clickParams: function() {
			var id = "";
			var params = {};
			_$1.each(CLICK_IDS, function(idkey) {
				id = _$1.getQueryParam(document$1.URL, idkey);
				if (id.length) params[idkey] = id;
			});
			return params;
		},
		marketingParams: function() {
			return _$1.extend(_$1.info.campaignParams(), _$1.info.clickParams());
		},
		searchEngine: function(referrer) {
			if (referrer.search("https?://(.*)google.([^/?]*)") === 0) return "google";
			else if (referrer.search("https?://(.*)bing.com") === 0) return "bing";
			else if (referrer.search("https?://(.*)yahoo.com") === 0) return "yahoo";
			else if (referrer.search("https?://(.*)duckduckgo.com") === 0) return "duckduckgo";
			else return null;
		},
		searchInfo: function(referrer) {
			var search = _$1.info.searchEngine(referrer);
			var param = search != "yahoo" ? "q" : "p";
			var ret = {};
			if (search !== null) {
				ret["$search_engine"] = search;
				var keyword = _$1.getQueryParam(referrer, param);
				if (keyword.length) ret["mp_keyword"] = keyword;
			}
			return ret;
		},
		/**
		* This function detects which browser is running this script.
		* The order of the checks are important since many user agents
		* include key words used in later checks.
		*/
		browser: function(user_agent, vendor, opera) {
			vendor = vendor || "";
			if (opera || _$1.includes(user_agent, " OPR/")) {
				if (_$1.includes(user_agent, "Mini")) return "Opera Mini";
				return "Opera";
			} else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) return "BlackBerry";
			else if (_$1.includes(user_agent, "IEMobile") || _$1.includes(user_agent, "WPDesktop")) return "Internet Explorer Mobile";
			else if (_$1.includes(user_agent, "SamsungBrowser/")) return "Samsung Internet";
			else if (_$1.includes(user_agent, "Edge") || _$1.includes(user_agent, "Edg/")) return "Microsoft Edge";
			else if (_$1.includes(user_agent, "FBIOS")) return "Facebook Mobile";
			else if (_$1.includes(user_agent, "Whale/")) return "Whale Browser";
			else if (_$1.includes(user_agent, "Chrome")) return "Chrome";
			else if (_$1.includes(user_agent, "CriOS")) return "Chrome iOS";
			else if (_$1.includes(user_agent, "UCWEB") || _$1.includes(user_agent, "UCBrowser")) return "UC Browser";
			else if (_$1.includes(user_agent, "FxiOS")) return "Firefox iOS";
			else if (_$1.includes(vendor, "Apple")) {
				if (_$1.includes(user_agent, "Mobile")) return "Mobile Safari";
				return "Safari";
			} else if (_$1.includes(user_agent, "Android")) return "Android Mobile";
			else if (_$1.includes(user_agent, "Konqueror")) return "Konqueror";
			else if (_$1.includes(user_agent, "Firefox")) return "Firefox";
			else if (_$1.includes(user_agent, "MSIE") || _$1.includes(user_agent, "Trident/")) return "Internet Explorer";
			else if (_$1.includes(user_agent, "Gecko")) return "Mozilla";
			else return "";
		},
		/**
		* This function detects which browser version is running this script,
		* parsing major and minor version (e.g., 42.1). User agent strings from:
		* http://www.useragentstring.com/pages/useragentstring.php
		*/
		browserVersion: function(userAgent, vendor, opera) {
			var regex = {
				"Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
				"Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
				"Chrome": /Chrome\/(\d+(\.\d+)?)/,
				"Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
				"UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
				"Safari": /Version\/(\d+(\.\d+)?)/,
				"Mobile Safari": /Version\/(\d+(\.\d+)?)/,
				"Opera": /(Opera|OPR)\/(\d+(\.\d+)?)/,
				"Firefox": /Firefox\/(\d+(\.\d+)?)/,
				"Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
				"Konqueror": /Konqueror:(\d+(\.\d+)?)/,
				"BlackBerry": /BlackBerry (\d+(\.\d+)?)/,
				"Android Mobile": /android\s(\d+(\.\d+)?)/,
				"Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
				"Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
				"Mozilla": /rv:(\d+(\.\d+)?)/,
				"Whale Browser": /Whale\/(\d+(\.\d+)?)/
			}[_$1.info.browser(userAgent, vendor, opera)];
			if (regex === void 0) return null;
			var matches = userAgent.match(regex);
			if (!matches) return null;
			return parseFloat(matches[matches.length - 2]);
		},
		os: function() {
			var a = userAgent;
			if (/Windows/i.test(a)) {
				if (/Phone/.test(a) || /WPDesktop/.test(a)) return "Windows Phone";
				return "Windows";
			} else if (/(iPhone|iPad|iPod)/.test(a)) return "iOS";
			else if (/Android/.test(a)) return "Android";
			else if (/(BlackBerry|PlayBook|BB10)/i.test(a)) return "BlackBerry";
			else if (/Mac/i.test(a)) return "Mac OS X";
			else if (/Linux/.test(a)) return "Linux";
			else if (/CrOS/.test(a)) return "Chrome OS";
			else return "";
		},
		device: function(user_agent) {
			if (/Windows Phone/i.test(user_agent) || /WPDesktop/.test(user_agent)) return "Windows Phone";
			else if (/iPad/.test(user_agent)) return "iPad";
			else if (/iPod/.test(user_agent)) return "iPod Touch";
			else if (/iPhone/.test(user_agent)) return "iPhone";
			else if (/(BlackBerry|PlayBook|BB10)/i.test(user_agent)) return "BlackBerry";
			else if (/Android/.test(user_agent)) return "Android";
			else return "";
		},
		referringDomain: function(referrer) {
			var split = referrer.split("/");
			if (split.length >= 3) return split[2];
			return "";
		},
		currentUrl: function() {
			return win.location.href;
		},
		properties: function(extra_props) {
			if (typeof extra_props !== "object") extra_props = {};
			return _$1.extend(_$1.strip_empty_properties({
				"$os": _$1.info.os(),
				"$browser": _$1.info.browser(userAgent, navigator.vendor, windowOpera),
				"$referrer": document$1.referrer,
				"$referring_domain": _$1.info.referringDomain(document$1.referrer),
				"$device": _$1.info.device(userAgent)
			}), {
				"$current_url": _$1.info.currentUrl(),
				"$browser_version": _$1.info.browserVersion(userAgent, navigator.vendor, windowOpera),
				"$screen_height": screen.height,
				"$screen_width": screen.width,
				"mp_lib": "web",
				"$lib_version": Config.LIB_VERSION,
				"$insert_id": cheap_guid(),
				"time": _$1.timestamp() / 1e3
			}, _$1.strip_empty_properties(extra_props));
		},
		people_properties: function() {
			return _$1.extend(_$1.strip_empty_properties({
				"$os": _$1.info.os(),
				"$browser": _$1.info.browser(userAgent, navigator.vendor, windowOpera)
			}), { "$browser_version": _$1.info.browserVersion(userAgent, navigator.vendor, windowOpera) });
		},
		mpPageViewProperties: function() {
			return _$1.strip_empty_properties({
				"current_page_title": document$1.title,
				"current_domain": win.location.hostname,
				"current_url_path": win.location.pathname,
				"current_url_protocol": win.location.protocol,
				"current_url_search": win.location.search
			});
		}
	};
	/**
	* Returns a throttled function that will only run at most every `waitMs` and returns a promise that resolves with the next invocation.
	* Throttled calls will build up a batch of args and invoke the callback with all args since the last invocation.
	*/
	var batchedThrottle = function(fn, waitMs) {
		var timeoutPromise = null;
		var throttledItems = [];
		return function(item) {
			var self = this;
			throttledItems.push(item);
			if (!timeoutPromise) timeoutPromise = new PromisePolyfill(function(resolve) {
				setTimeout(function() {
					var returnValue = fn.apply(self, [throttledItems]);
					timeoutPromise = null;
					throttledItems = [];
					resolve(returnValue);
				}, waitMs);
			});
			return timeoutPromise;
		};
	};
	var cheap_guid = function(maxlen) {
		var guid = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
		return maxlen ? guid.substring(0, maxlen) : guid;
	};
	/**
	* Generates a W3C traceparent header for easy interop with distributed tracing systems i.e Open Telemetry
	* https://www.w3.org/TR/trace-context/#traceparent-header
	*/
	var generateTraceparent = function() {
		var traceID = _$1.UUID().replace(/-/g, "");
		var parentID = _$1.UUID().replace(/-/g, "").substring(0, 16);
		return "00-" + traceID + "-" + parentID + "-01";
	};
	var SIMPLE_DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i;
	var DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i;
	/**
	* Attempts to extract main domain name from full hostname, using a few blunt heuristics. For
	* common TLDs like .com/.org that always have a simple SLD.TLD structure (example.com), we
	* simply extract the last two .-separated parts of the hostname (SIMPLE_DOMAIN_MATCH_REGEX).
	* For others, we attempt to account for short ccSLD+TLD combos (.ac.uk) with the legacy
	* DOMAIN_MATCH_REGEX (kept to maintain backwards compatibility with existing Mixpanel
	* integrations). The only _reliable_ way to extract domain from hostname is with an up-to-date
	* list like at https://publicsuffix.org/ so for cases that this helper fails at, the SDK
	* offers the 'cookie_domain' config option to set it explicitly.
	* @example
	* extract_domain('my.sub.example.com')
	* // 'example.com'
	*/
	var extract_domain = function(hostname) {
		var domain_regex = DOMAIN_MATCH_REGEX;
		var parts = hostname.split(".");
		var tld = parts[parts.length - 1];
		if (tld.length > 4 || tld === "com" || tld === "org") domain_regex = SIMPLE_DOMAIN_MATCH_REGEX;
		var matches = hostname.match(domain_regex);
		return matches ? matches[0] : "";
	};
	/**
	* Check whether we have network connection. default to true for browsers that don't support navigator.onLine (IE)
	* @returns {boolean}
	*/
	var isOnline = function() {
		var onLine = win.navigator["onLine"];
		return _$1.isUndefined(onLine) || onLine;
	};
	var NOOP_FUNC = function() {};
	var JSONStringify = null;
	var JSONParse = null;
	if (typeof JSON !== "undefined") {
		JSONStringify = JSON.stringify;
		JSONParse = JSON.parse;
	}
	JSONStringify = JSONStringify || _$1.JSONEncode;
	JSONParse = JSONParse || _$1.JSONDecode;
	_$1["info"] = _$1.info;
	_$1["info"]["browser"] = _$1.info.browser;
	_$1["info"]["browserVersion"] = _$1.info.browserVersion;
	_$1["info"]["device"] = _$1.info.device;
	_$1["info"]["properties"] = _$1.info.properties;
	_$1["isBlockedUA"] = _$1.isBlockedUA;
	_$1["isEmptyObject"] = _$1.isEmptyObject;
	_$1["isObject"] = _$1.isObject;
	_$1["JSONDecode"] = _$1.JSONDecode;
	_$1["JSONEncode"] = _$1.JSONEncode;
	_$1["toArray"] = _$1.toArray;
	_$1["NPO"] = NpoPromise;
	var MIXPANEL_DB_NAME = "mixpanelBrowserDb";
	var RECORDING_EVENTS_STORE_NAME = "mixpanelRecordingEvents";
	var RECORDING_REGISTRY_STORE_NAME = "mixpanelRecordingRegistry";
	var DB_VERSION = 1;
	var OBJECT_STORES = [RECORDING_EVENTS_STORE_NAME, RECORDING_REGISTRY_STORE_NAME];
	/**
	* @type {import('./wrapper').StorageWrapper}
	*/
	var IDBStorageWrapper = function(storeName) {
		/**
		* @type {Promise<IDBDatabase>|null}
		*/
		this.dbPromise = null;
		this.storeName = storeName;
	};
	IDBStorageWrapper.prototype._openDb = function() {
		return new PromisePolyfill(function(resolve, reject) {
			var openRequest = win.indexedDB.open(MIXPANEL_DB_NAME, DB_VERSION);
			openRequest["onerror"] = function() {
				reject(openRequest.error);
			};
			openRequest["onsuccess"] = function() {
				resolve(openRequest.result);
			};
			openRequest["onupgradeneeded"] = function(ev) {
				var db = ev.target.result;
				OBJECT_STORES.forEach(function(storeName) {
					db.createObjectStore(storeName);
				});
			};
		});
	};
	IDBStorageWrapper.prototype.init = function() {
		if (!win.indexedDB) return PromisePolyfill.reject("indexedDB is not supported in this browser");
		if (!this.dbPromise) this.dbPromise = this._openDb();
		return this.dbPromise.then(function(dbOrError) {
			if (dbOrError instanceof win["IDBDatabase"]) return PromisePolyfill.resolve();
			else return PromisePolyfill.reject(dbOrError);
		});
	};
	IDBStorageWrapper.prototype.isInitialized = function() {
		return !!this.dbPromise;
	};
	/**
	* @param {IDBTransactionMode} mode
	* @param {function(IDBObjectStore): void} storeCb
	*/
	IDBStorageWrapper.prototype.makeTransaction = function(mode, storeCb) {
		var storeName = this.storeName;
		var doTransaction = function(db) {
			return new PromisePolyfill(function(resolve, reject) {
				var transaction = db.transaction(storeName, mode);
				transaction.oncomplete = function() {
					resolve(transaction);
				};
				transaction.onabort = transaction.onerror = function() {
					reject(transaction.error);
				};
				storeCb(transaction.objectStore(storeName));
			});
		};
		return this.dbPromise.then(doTransaction).catch(function(err) {
			if (err && err["name"] === "InvalidStateError") {
				this.dbPromise = this._openDb();
				return this.dbPromise.then(doTransaction);
			} else return PromisePolyfill.reject(err);
		}.bind(this));
	};
	IDBStorageWrapper.prototype.setItem = function(key, value) {
		return this.makeTransaction("readwrite", function(objectStore) {
			objectStore.put(value, key);
		});
	};
	IDBStorageWrapper.prototype.getItem = function(key) {
		var req;
		return this.makeTransaction("readonly", function(objectStore) {
			req = objectStore.get(key);
		}).then(function() {
			return req.result;
		});
	};
	IDBStorageWrapper.prototype.removeItem = function(key) {
		return this.makeTransaction("readwrite", function(objectStore) {
			objectStore.delete(key);
		});
	};
	IDBStorageWrapper.prototype.getAll = function() {
		var req;
		return this.makeTransaction("readonly", function(objectStore) {
			req = objectStore.getAll();
		}).then(function() {
			return req.result;
		});
	};
	/**
	* GDPR utils
	*
	* The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection
	* and privacy for all individuals within the European Union. It addresses the export of personal
	* data outside the EU. The GDPR aims primarily to give control back to citizens and residents
	* over their personal data and to simplify the regulatory environment for international business
	* by unifying the regulation within the EU.
	*
	* This set of utilities is intended to enable opt in/out functionality in the Mixpanel JS SDK.
	* These functions are used internally by the SDK and are not intended to be publicly exposed.
	*/
	/**
	* A function used to track a Mixpanel event (e.g. MixpanelLib.track)
	* @callback trackFunction
	* @param {String} event_name The name of the event. This can be anything the user does - 'Button Click', 'Sign Up', 'Item Purchased', etc.
	* @param {Object} [properties] A set of properties to include with the event you're sending. These describe the user who did the event or details about the event itself.
	* @param {Function} [callback] If provided, the callback function will be called after tracking the event.
	*/
	/** Public **/
	var GDPR_DEFAULT_PERSISTENCE_PREFIX = "__mp_opt_in_out_";
	/**
	* Opt the user in to data tracking and cookies/localstorage for the given token
	* @param {string} token - Mixpanel project tracking token
	* @param {Object} [options]
	* @param {trackFunction} [options.track] - function used for tracking a Mixpanel event to record the opt-in action
	* @param {string} [options.trackEventName] - event name to be used for tracking the opt-in action
	* @param {Object} [options.trackProperties] - set of properties to be tracked along with the opt-in action
	* @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
	* @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
	* @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
	* @param {string} [options.cookieDomain] - custom cookie domain
	* @param {boolean} [options.crossSiteCookie] - whether the opt-in cookie is set as cross-site-enabled
	* @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
	* @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
	*/
	function optIn(token, options) {
		_optInOut(true, token, options);
	}
	/**
	* Opt the user out of data tracking and cookies/localstorage for the given token
	* @param {string} token - Mixpanel project tracking token
	* @param {Object} [options]
	* @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
	* @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
	* @param {Number} [options.cookieExpiration] - number of days until the opt-out cookie expires
	* @param {string} [options.cookieDomain] - custom cookie domain
	* @param {boolean} [options.crossSiteCookie] - whether the opt-in cookie is set as cross-site-enabled
	* @param {boolean} [options.crossSubdomainCookie] - whether the opt-out cookie is set as cross-subdomain or not
	* @param {boolean} [options.secureCookie] - whether the opt-out cookie is set as secure or not
	*/
	function optOut(token, options) {
		_optInOut(false, token, options);
	}
	/**
	* Check whether the user has opted in to data tracking and cookies/localstorage for the given token
	* @param {string} token - Mixpanel project tracking token
	* @param {Object} [options]
	* @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
	* @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
	* @returns {boolean} whether the user has opted in to the given opt type
	*/
	function hasOptedIn(token, options) {
		return _getStorageValue(token, options) === "1";
	}
	/**
	* Check whether the user has opted out of data tracking and cookies/localstorage for the given token
	* @param {string} token - Mixpanel project tracking token
	* @param {Object} [options]
	* @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
	* @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
	* @param {boolean} [options.ignoreDnt] - flag to ignore browser DNT settings and always return false
	* @returns {boolean} whether the user has opted out of the given opt type
	*/
	function hasOptedOut(token, options) {
		if (_hasDoNotTrackFlagOn(options)) {
			console$1.warn("This browser has \"Do Not Track\" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the \"Do Not Track\" browser setting, initialize the Mixpanel instance with the config \"ignore_dnt: true\"");
			return true;
		}
		var optedOut = _getStorageValue(token, options) === "0";
		if (optedOut) console$1.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data.");
		return optedOut;
	}
	/**
	* Wrap a MixpanelLib method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
	* If the user has opted out, return early instead of executing the method.
	* If a callback argument was provided, execute it passing the 0 error code.
	* @param {function} method - wrapped method to be executed if the user has not opted out
	* @returns {*} the result of executing method OR undefined if the user has opted out
	*/
	function addOptOutCheckMixpanelLib(method) {
		return _addOptOutCheck(method, function(name) {
			return this.get_config(name);
		});
	}
	/**
	* Wrap a MixpanelPeople method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
	* If the user has opted out, return early instead of executing the method.
	* If a callback argument was provided, execute it passing the 0 error code.
	* @param {function} method - wrapped method to be executed if the user has not opted out
	* @returns {*} the result of executing method OR undefined if the user has opted out
	*/
	function addOptOutCheckMixpanelPeople(method) {
		return _addOptOutCheck(method, function(name) {
			return this._get_config(name);
		});
	}
	/**
	* Wrap a MixpanelGroup method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
	* If the user has opted out, return early instead of executing the method.
	* If a callback argument was provided, execute it passing the 0 error code.
	* @param {function} method - wrapped method to be executed if the user has not opted out
	* @returns {*} the result of executing method OR undefined if the user has opted out
	*/
	function addOptOutCheckMixpanelGroup(method) {
		return _addOptOutCheck(method, function(name) {
			return this._get_config(name);
		});
	}
	/**
	* Clear the user's opt in/out status of data tracking and cookies/localstorage for the given token
	* @param {string} token - Mixpanel project tracking token
	* @param {Object} [options]
	* @param {string} [options.persistenceType] Persistence mechanism used - cookie or localStorage
	* @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
	* @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
	* @param {string} [options.cookieDomain] - custom cookie domain
	* @param {boolean} [options.crossSiteCookie] - whether the opt-in cookie is set as cross-site-enabled
	* @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
	* @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
	*/
	function clearOptInOut(token, options) {
		options = options || {};
		_getStorage(options).remove(_getStorageKey(token, options), !!options.crossSubdomainCookie, options.cookieDomain);
	}
	/** Private **/
	/**
	* Get storage util
	* @param {Object} [options]
	* @param {string} [options.persistenceType]
	* @returns {object} either _.cookie or _.localstorage
	*/
	function _getStorage(options) {
		options = options || {};
		return options.persistenceType === "localStorage" ? _$1.localStorage : _$1.cookie;
	}
	/**
	* Get the name of the cookie that is used for the given opt type (tracking, cookie, etc.)
	* @param {string} token - Mixpanel project tracking token
	* @param {Object} [options]
	* @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
	* @returns {string} the name of the cookie for the given opt type
	*/
	function _getStorageKey(token, options) {
		options = options || {};
		return (options.persistencePrefix || GDPR_DEFAULT_PERSISTENCE_PREFIX) + token;
	}
	/**
	* Get the value of the cookie that is used for the given opt type (tracking, cookie, etc.)
	* @param {string} token - Mixpanel project tracking token
	* @param {Object} [options]
	* @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
	* @returns {string} the value of the cookie for the given opt type
	*/
	function _getStorageValue(token, options) {
		return _getStorage(options).get(_getStorageKey(token, options));
	}
	/**
	* Check whether the user has set the DNT/doNotTrack setting to true in their browser
	* @param {Object} [options]
	* @param {string} [options.window] - alternate window object to check; used to force various DNT settings in browser tests
	* @param {boolean} [options.ignoreDnt] - flag to ignore browser DNT settings and always return false
	* @returns {boolean} whether the DNT setting is true
	*/
	function _hasDoNotTrackFlagOn(options) {
		if (options && options.ignoreDnt) return false;
		var win$1 = options && options.window || win;
		var nav = win$1["navigator"] || {};
		var hasDntOn = false;
		_$1.each([
			nav["doNotTrack"],
			nav["msDoNotTrack"],
			win$1["doNotTrack"]
		], function(dntValue) {
			if (_$1.includes([
				true,
				1,
				"1",
				"yes"
			], dntValue)) hasDntOn = true;
		});
		return hasDntOn;
	}
	/**
	* Set cookie/localstorage for the user indicating that they are opted in or out for the given opt type
	* @param {boolean} optValue - whether to opt the user in or out for the given opt type
	* @param {string} token - Mixpanel project tracking token
	* @param {Object} [options]
	* @param {trackFunction} [options.track] - function used for tracking a Mixpanel event to record the opt-in action
	* @param {string} [options.trackEventName] - event name to be used for tracking the opt-in action
	* @param {Object} [options.trackProperties] - set of properties to be tracked along with the opt-in action
	* @param {string} [options.persistencePrefix=__mp_opt_in_out] - custom prefix to be used in the cookie/localstorage name
	* @param {Number} [options.cookieExpiration] - number of days until the opt-in cookie expires
	* @param {string} [options.cookieDomain] - custom cookie domain
	* @param {boolean} [options.crossSiteCookie] - whether the opt-in cookie is set as cross-site-enabled
	* @param {boolean} [options.crossSubdomainCookie] - whether the opt-in cookie is set as cross-subdomain or not
	* @param {boolean} [options.secureCookie] - whether the opt-in cookie is set as secure or not
	*/
	function _optInOut(optValue, token, options) {
		if (!_$1.isString(token) || !token.length) {
			console$1.error("gdpr." + (optValue ? "optIn" : "optOut") + " called with an invalid token");
			return;
		}
		options = options || {};
		_getStorage(options).set(_getStorageKey(token, options), optValue ? 1 : 0, _$1.isNumber(options.cookieExpiration) ? options.cookieExpiration : null, !!options.crossSubdomainCookie, !!options.secureCookie, !!options.crossSiteCookie, options.cookieDomain);
		if (options.track && optValue) options.track(options.trackEventName || "$opt_in", options.trackProperties, { "send_immediately": true });
	}
	/**
	* Wrap a method with a check for whether the user is opted out of data tracking and cookies/localstorage for the given token
	* If the user has opted out, return early instead of executing the method.
	* If a callback argument was provided, execute it passing the 0 error code.
	* @param {function} method - wrapped method to be executed if the user has not opted out
	* @param {function} getConfigValue - getter function for the Mixpanel API token and other options to be used with opt-out check
	* @returns {*} the result of executing method OR undefined if the user has opted out
	*/
	function _addOptOutCheck(method, getConfigValue) {
		return function() {
			var optedOut = false;
			try {
				var token = getConfigValue.call(this, "token");
				var ignoreDnt = getConfigValue.call(this, "ignore_dnt");
				var persistenceType = getConfigValue.call(this, "opt_out_tracking_persistence_type");
				var persistencePrefix = getConfigValue.call(this, "opt_out_tracking_cookie_prefix");
				var win = getConfigValue.call(this, "window");
				if (token) optedOut = hasOptedOut(token, {
					ignoreDnt,
					persistenceType,
					persistencePrefix,
					window: win
				});
			} catch (err) {
				console$1.error("Unexpected error when checking tracking opt-out status: " + err);
			}
			if (!optedOut) return method.apply(this, arguments);
			var callback = arguments[arguments.length - 1];
			if (typeof callback === "function") callback(0);
		};
	}
	var logger$6 = console_with_prefix("lock");
	/**
	* SharedLock: a mutex built on HTML5 localStorage, to ensure that only one browser
	* window/tab at a time will be able to access shared resources.
	*
	* Based on the Alur and Taubenfeld fast lock
	* (http://www.cs.rochester.edu/research/synchronization/pseudocode/fastlock.html)
	* with an added timeout to ensure there will be eventual progress in the event
	* that a window is closed in the middle of the callback.
	*
	* Implementation based on the original version by David Wolever (https://github.com/wolever)
	* at https://gist.github.com/wolever/5fd7573d1ef6166e8f8c4af286a69432.
	*
	* @example
	* const myLock = new SharedLock('some-key');
	* myLock.withLock(function() {
	*   console.log('I hold the mutex!');
	* });
	*
	* @constructor
	*/
	var SharedLock = function(key, options) {
		options = options || {};
		this.storageKey = key;
		this.storage = options.storage || win.localStorage;
		this.pollIntervalMS = options.pollIntervalMS || 100;
		this.timeoutMS = options.timeoutMS || 2e3;
		this.promiseImpl = options.promiseImpl || PromisePolyfill;
	};
	SharedLock.prototype.withLock = function(lockedCB, pid) {
		var Promise = this.promiseImpl;
		return new Promise(_$1.bind(function(resolve, reject) {
			var i = pid || (/* @__PURE__ */ new Date()).getTime() + "|" + Math.random();
			var startTime = (/* @__PURE__ */ new Date()).getTime();
			var key = this.storageKey;
			var pollIntervalMS = this.pollIntervalMS;
			var timeoutMS = this.timeoutMS;
			var storage = this.storage;
			var keyX = key + ":X";
			var keyY = key + ":Y";
			var keyZ = key + ":Z";
			var delay = function(cb) {
				if ((/* @__PURE__ */ new Date()).getTime() - startTime > timeoutMS) {
					logger$6.error("Timeout waiting for mutex on " + key + "; clearing lock. [" + i + "]");
					storage.removeItem(keyZ);
					storage.removeItem(keyY);
					loop();
					return;
				}
				setTimeout(function() {
					try {
						cb();
					} catch (err) {
						reject(err);
					}
				}, pollIntervalMS * (Math.random() + .1));
			};
			var waitFor = function(predicate, cb) {
				if (predicate()) cb();
				else delay(function() {
					waitFor(predicate, cb);
				});
			};
			var getSetY = function() {
				var valY = storage.getItem(keyY);
				if (valY && valY !== i) return false;
				else {
					storage.setItem(keyY, i);
					if (storage.getItem(keyY) === i) return true;
					else {
						if (!localStorageSupported(storage, true)) reject(/* @__PURE__ */ new Error("localStorage support dropped while acquiring lock"));
						return false;
					}
				}
			};
			var loop = function() {
				storage.setItem(keyX, i);
				waitFor(getSetY, function() {
					if (storage.getItem(keyX) === i) {
						criticalSection();
						return;
					}
					delay(function() {
						if (storage.getItem(keyY) !== i) {
							loop();
							return;
						}
						waitFor(function() {
							return !storage.getItem(keyZ);
						}, criticalSection);
					});
				});
			};
			var criticalSection = function() {
				storage.setItem(keyZ, "1");
				var removeLock = function() {
					storage.removeItem(keyZ);
					if (storage.getItem(keyY) === i) storage.removeItem(keyY);
					if (storage.getItem(keyX) === i) storage.removeItem(keyX);
				};
				lockedCB().then(function(ret) {
					removeLock();
					resolve(ret);
				}).catch(function(err) {
					removeLock();
					reject(err);
				});
			};
			try {
				if (localStorageSupported(storage, true)) loop();
				else throw new Error("localStorage support check failed");
			} catch (err) {
				reject(err);
			}
		}, this));
	};
	/**
	* @type {import('./wrapper').StorageWrapper}
	*/
	var LocalStorageWrapper = function(storageOverride) {
		this.storage = storageOverride || win.localStorage;
	};
	LocalStorageWrapper.prototype.init = function() {
		return PromisePolyfill.resolve();
	};
	LocalStorageWrapper.prototype.isInitialized = function() {
		return true;
	};
	LocalStorageWrapper.prototype.setItem = function(key, value) {
		return new PromisePolyfill(_$1.bind(function(resolve, reject) {
			try {
				this.storage.setItem(key, JSONStringify(value));
			} catch (e) {
				reject(e);
			}
			resolve();
		}, this));
	};
	LocalStorageWrapper.prototype.getItem = function(key) {
		return new PromisePolyfill(_$1.bind(function(resolve, reject) {
			var item;
			try {
				item = JSONParse(this.storage.getItem(key));
			} catch (e) {
				reject(e);
			}
			resolve(item);
		}, this));
	};
	LocalStorageWrapper.prototype.removeItem = function(key) {
		return new PromisePolyfill(_$1.bind(function(resolve, reject) {
			try {
				this.storage.removeItem(key);
			} catch (e) {
				reject(e);
			}
			resolve();
		}, this));
	};
	var logger$5 = console_with_prefix("batch");
	/**
	* RequestQueue: queue for batching API requests with localStorage backup for retries.
	* Maintains an in-memory queue which represents the source of truth for the current
	* page, but also writes all items out to a copy in the browser's localStorage, which
	* can be read on subsequent pageloads and retried. For batchability, all the request
	* items in the queue should be of the same type (events, people updates, group updates)
	* so they can be sent in a single request to the same API endpoint.
	*
	* LocalStorage keying and locking: In order for reloads and subsequent pageloads of
	* the same site to access the same persisted data, they must share the same localStorage
	* key (for instance based on project token and queue type). Therefore access to the
	* localStorage entry is guarded by an asynchronous mutex (SharedLock) to prevent
	* simultaneously open windows/tabs from overwriting each other's data (which would lead
	* to data loss in some situations).
	* @constructor
	*/
	var RequestQueue = function(storageKey, options) {
		options = options || {};
		this.storageKey = storageKey;
		this.usePersistence = options.usePersistence;
		if (this.usePersistence) {
			this.queueStorage = options.queueStorage || new LocalStorageWrapper();
			this.lock = new SharedLock(storageKey, {
				storage: options.sharedLockStorage || win.localStorage,
				timeoutMS: options.sharedLockTimeoutMS
			});
		}
		this.reportError = options.errorReporter || _$1.bind(logger$5.error, logger$5);
		this.pid = options.pid || null;
		this.memQueue = [];
		this.initialized = false;
		if (options.enqueueThrottleMs) this.enqueuePersisted = batchedThrottle(_$1.bind(this._enqueuePersisted, this), options.enqueueThrottleMs);
		else this.enqueuePersisted = _$1.bind(function(queueEntry) {
			return this._enqueuePersisted([queueEntry]);
		}, this);
	};
	RequestQueue.prototype.ensureInit = function() {
		if (this.initialized || !this.usePersistence) return PromisePolyfill.resolve();
		return this.queueStorage.init().then(_$1.bind(function() {
			this.initialized = true;
		}, this)).catch(_$1.bind(function(err) {
			this.reportError("Error initializing queue persistence. Disabling persistence", err);
			this.initialized = true;
			this.usePersistence = false;
		}, this));
	};
	/**
	* Add one item to queues (memory and localStorage). The queued entry includes
	* the given item along with an auto-generated ID and a "flush-after" timestamp.
	* It is expected that the item will be sent over the network and dequeued
	* before the flush-after time; if this doesn't happen it is considered orphaned
	* (e.g., the original tab where it was enqueued got closed before it could be
	* sent) and the item can be sent by any tab that finds it in localStorage.
	*
	* The final callback param is called with a param indicating success or
	* failure of the enqueue operation; it is asynchronous because the localStorage
	* lock is asynchronous.
	*/
	RequestQueue.prototype.enqueue = function(item, flushInterval) {
		var queueEntry = {
			"id": cheap_guid(),
			"flushAfter": (/* @__PURE__ */ new Date()).getTime() + flushInterval * 2,
			"payload": item
		};
		if (!this.usePersistence) {
			this.memQueue.push(queueEntry);
			return PromisePolyfill.resolve(true);
		} else return this.enqueuePersisted(queueEntry);
	};
	RequestQueue.prototype._enqueuePersisted = function(queueEntries) {
		var enqueueItem = _$1.bind(function() {
			return this.ensureInit().then(_$1.bind(function() {
				return this.readFromStorage();
			}, this)).then(_$1.bind(function(storedQueue) {
				return this.saveToStorage(storedQueue.concat(queueEntries));
			}, this)).then(_$1.bind(function(succeeded) {
				if (succeeded) this.memQueue = this.memQueue.concat(queueEntries);
				return succeeded;
			}, this)).catch(_$1.bind(function(err) {
				this.reportError("Error enqueueing items", err, queueEntries);
				return false;
			}, this));
		}, this);
		return this.lock.withLock(enqueueItem, this.pid).catch(_$1.bind(function(err) {
			this.reportError("Error acquiring storage lock", err);
			return false;
		}, this));
	};
	/**
	* Read out the given number of queue entries. If this.memQueue
	* has fewer than batchSize items, then look for "orphaned" items
	* in the persisted queue (items where the 'flushAfter' time has
	* already passed).
	*/
	RequestQueue.prototype.fillBatch = function(batchSize) {
		var batch = this.memQueue.slice(0, batchSize);
		if (this.usePersistence && batch.length < batchSize) return this.ensureInit().then(_$1.bind(function() {
			return this.readFromStorage();
		}, this)).then(_$1.bind(function(storedQueue) {
			if (storedQueue.length) {
				var idsInBatch = {};
				_$1.each(batch, function(item) {
					idsInBatch[item["id"]] = true;
				});
				for (var i = 0; i < storedQueue.length; i++) {
					var item = storedQueue[i];
					if ((/* @__PURE__ */ new Date()).getTime() > item["flushAfter"] && !idsInBatch[item["id"]]) {
						item.orphaned = true;
						batch.push(item);
						if (batch.length >= batchSize) break;
					}
				}
			}
			return batch;
		}, this));
		else return PromisePolyfill.resolve(batch);
	};
	/**
	* Remove items with matching 'id' from array (immutably)
	* also remove any item without a valid id (e.g., malformed
	* storage entries).
	*/
	var filterOutIDsAndInvalid = function(items, idSet) {
		var filteredItems = [];
		_$1.each(items, function(item) {
			if (item["id"] && !idSet[item["id"]]) filteredItems.push(item);
		});
		return filteredItems;
	};
	/**
	* Remove items with matching IDs from both in-memory queue
	* and persisted queue
	*/
	RequestQueue.prototype.removeItemsByID = function(ids) {
		var idSet = {};
		_$1.each(ids, function(id) {
			idSet[id] = true;
		});
		this.memQueue = filterOutIDsAndInvalid(this.memQueue, idSet);
		if (!this.usePersistence) return PromisePolyfill.resolve(true);
		else {
			var removeFromStorage = _$1.bind(function() {
				return this.ensureInit().then(_$1.bind(function() {
					return this.readFromStorage();
				}, this)).then(_$1.bind(function(storedQueue) {
					storedQueue = filterOutIDsAndInvalid(storedQueue, idSet);
					return this.saveToStorage(storedQueue);
				}, this)).then(_$1.bind(function() {
					return this.readFromStorage();
				}, this)).then(_$1.bind(function(storedQueue) {
					for (var i = 0; i < storedQueue.length; i++) {
						var item = storedQueue[i];
						if (item["id"] && !!idSet[item["id"]]) throw new Error("Item not removed from storage");
					}
					return true;
				}, this)).catch(_$1.bind(function(err) {
					this.reportError("Error removing items", err, ids);
					return false;
				}, this));
			}, this);
			return this.lock.withLock(removeFromStorage, this.pid).catch(_$1.bind(function(err) {
				this.reportError("Error acquiring storage lock", err);
				if (!localStorageSupported(this.lock.storage, true)) return removeFromStorage().then(_$1.bind(function(success) {
					if (!success) return this.queueStorage.removeItem(this.storageKey).then(function() {
						return success;
					});
					return success;
				}, this)).catch(_$1.bind(function(err) {
					this.reportError("Error clearing queue", err);
					return false;
				}, this));
				else return false;
			}, this));
		}
	};
	var updatePayloads = function(existingItems, itemsToUpdate) {
		var newItems = [];
		_$1.each(existingItems, function(item) {
			var id = item["id"];
			if (id in itemsToUpdate) {
				var newPayload = itemsToUpdate[id];
				if (newPayload !== null) {
					item["payload"] = newPayload;
					newItems.push(item);
				}
			} else newItems.push(item);
		});
		return newItems;
	};
	/**
	* Update payloads of given items in both in-memory queue and
	* persisted queue. Items set to null are removed from queues.
	*/
	RequestQueue.prototype.updatePayloads = function(itemsToUpdate) {
		this.memQueue = updatePayloads(this.memQueue, itemsToUpdate);
		if (!this.usePersistence) return PromisePolyfill.resolve(true);
		else return this.lock.withLock(_$1.bind(function lockAcquired() {
			return this.ensureInit().then(_$1.bind(function() {
				return this.readFromStorage();
			}, this)).then(_$1.bind(function(storedQueue) {
				storedQueue = updatePayloads(storedQueue, itemsToUpdate);
				return this.saveToStorage(storedQueue);
			}, this)).catch(_$1.bind(function(err) {
				this.reportError("Error updating items", itemsToUpdate, err);
				return false;
			}, this));
		}, this), this.pid).catch(_$1.bind(function(err) {
			this.reportError("Error acquiring storage lock", err);
			return false;
		}, this));
	};
	/**
	* Read and parse items array from localStorage entry, handling
	* malformed/missing data if necessary.
	*/
	RequestQueue.prototype.readFromStorage = function() {
		return this.ensureInit().then(_$1.bind(function() {
			return this.queueStorage.getItem(this.storageKey);
		}, this)).then(_$1.bind(function(storageEntry) {
			if (storageEntry) {
				if (!_$1.isArray(storageEntry)) {
					this.reportError("Invalid storage entry:", storageEntry);
					storageEntry = null;
				}
			}
			return storageEntry || [];
		}, this)).catch(_$1.bind(function(err) {
			this.reportError("Error retrieving queue", err);
			return [];
		}, this));
	};
	/**
	* Serialize the given items array to localStorage.
	*/
	RequestQueue.prototype.saveToStorage = function(queue) {
		return this.ensureInit().then(_$1.bind(function() {
			return this.queueStorage.setItem(this.storageKey, queue);
		}, this)).then(function() {
			return true;
		}).catch(_$1.bind(function(err) {
			this.reportError("Error saving queue", err);
			return false;
		}, this));
	};
	/**
	* Clear out queues (memory and localStorage).
	*/
	RequestQueue.prototype.clear = function() {
		this.memQueue = [];
		if (this.usePersistence) return this.ensureInit().then(_$1.bind(function() {
			return this.queueStorage.removeItem(this.storageKey);
		}, this));
		else return PromisePolyfill.resolve();
	};
	var MAX_RETRY_INTERVAL_MS = 600 * 1e3;
	var logger$4 = console_with_prefix("batch");
	/**
	* RequestBatcher: manages the queueing, flushing, retry etc of requests of one
	* type (events, people, groups).
	* Uses RequestQueue to manage the backing store.
	* @constructor
	*/
	var RequestBatcher = function(storageKey, options) {
		this.errorReporter = options.errorReporter;
		this.queue = new RequestQueue(storageKey, {
			errorReporter: _$1.bind(this.reportError, this),
			queueStorage: options.queueStorage,
			sharedLockStorage: options.sharedLockStorage,
			sharedLockTimeoutMS: options.sharedLockTimeoutMS,
			usePersistence: options.usePersistence,
			enqueueThrottleMs: options.enqueueThrottleMs
		});
		this.libConfig = options.libConfig;
		this.sendRequest = options.sendRequestFunc;
		this.beforeSendHook = options.beforeSendHook;
		this.stopAllBatching = options.stopAllBatchingFunc;
		this.batchSize = this.libConfig["batch_size"];
		this.flushInterval = this.libConfig["batch_flush_interval_ms"];
		this.stopped = !this.libConfig["batch_autostart"];
		this.consecutiveRemovalFailures = 0;
		this.itemIdsSentSuccessfully = {};
		this.flushOnlyOnInterval = options.flushOnlyOnInterval || false;
		this._flushPromise = null;
	};
	/**
	* Add one item to queue.
	*/
	RequestBatcher.prototype.enqueue = function(item) {
		return this.queue.enqueue(item, this.flushInterval);
	};
	/**
	* Start flushing batches at the configured time interval. Must call
	* this method upon SDK init in order to send anything over the network.
	*/
	RequestBatcher.prototype.start = function() {
		this.stopped = false;
		this.consecutiveRemovalFailures = 0;
		return this.flush();
	};
	/**
	* Stop flushing batches. Can be restarted by calling start().
	*/
	RequestBatcher.prototype.stop = function() {
		this.stopped = true;
		if (this.timeoutID) {
			clearTimeout(this.timeoutID);
			this.timeoutID = null;
		}
	};
	/**
	* Clear out queue.
	*/
	RequestBatcher.prototype.clear = function() {
		return this.queue.clear();
	};
	/**
	* Restore batch size configuration to whatever is set in the main SDK.
	*/
	RequestBatcher.prototype.resetBatchSize = function() {
		this.batchSize = this.libConfig["batch_size"];
	};
	/**
	* Restore flush interval time configuration to whatever is set in the main SDK.
	*/
	RequestBatcher.prototype.resetFlush = function() {
		this.scheduleFlush(this.libConfig["batch_flush_interval_ms"]);
	};
	/**
	* Schedule the next flush in the given number of milliseconds.
	*/
	RequestBatcher.prototype.scheduleFlush = function(flushMS) {
		this.flushInterval = flushMS;
		if (!this.stopped) this.timeoutID = setTimeout(_$1.bind(function() {
			if (!this.stopped) this._flushPromise = this.flush();
		}, this), this.flushInterval);
	};
	/**
	* Send a request using the sendRequest callback, but promisified.
	* TODO: sendRequest should be promisified in the first place.
	*/
	RequestBatcher.prototype.sendRequestPromise = function(data, options) {
		return new PromisePolyfill(_$1.bind(function(resolve) {
			this.sendRequest(data, options, resolve);
		}, this));
	};
	/**
	* Flush one batch to network. Depending on success/failure modes, it will either
	* remove the batch from the queue or leave it in for retry, and schedule the next
	* flush. In cases of most network or API failures, it will back off exponentially
	* when retrying.
	* @param {Object} [options]
	* @param {boolean} [options.sendBeacon] - whether to send batch with
	* navigator.sendBeacon (only useful for sending batches before page unloads, as
	* sendBeacon offers no callbacks or status indications)
	*/
	RequestBatcher.prototype.flush = function(options) {
		if (this.requestInProgress) {
			logger$4.log("Flush: Request already in progress");
			return PromisePolyfill.resolve();
		}
		this.requestInProgress = true;
		options = options || {};
		var timeoutMS = this.libConfig["batch_request_timeout_ms"];
		var startTime = (/* @__PURE__ */ new Date()).getTime();
		var currentBatchSize = this.batchSize;
		return this.queue.fillBatch(currentBatchSize).then(_$1.bind(function(batch) {
			var attemptSecondaryFlush = batch.length === currentBatchSize;
			var dataForRequest = [];
			var transformedItems = {};
			_$1.each(batch, function(item) {
				var payload = item["payload"];
				if (this.beforeSendHook && !item.orphaned) payload = this.beforeSendHook(payload);
				if (payload) {
					if (payload["event"] && payload["properties"]) payload["properties"] = _$1.extend({}, payload["properties"], { "mp_sent_by_lib_version": Config.LIB_VERSION });
					var addPayload = true;
					var itemId = item["id"];
					if (itemId) {
						if ((this.itemIdsSentSuccessfully[itemId] || 0) > 5) {
							this.reportError("[dupe] item ID sent too many times, not sending", {
								item,
								batchSize: batch.length,
								timesSent: this.itemIdsSentSuccessfully[itemId]
							});
							addPayload = false;
						}
					} else this.reportError("[dupe] found item with no ID", { item });
					if (addPayload) dataForRequest.push(payload);
				}
				transformedItems[item["id"]] = payload;
			}, this);
			if (dataForRequest.length < 1) {
				this.requestInProgress = false;
				this.resetFlush();
				return PromisePolyfill.resolve();
			}
			var removeItemsFromQueue = _$1.bind(function() {
				return this.queue.removeItemsByID(_$1.map(batch, function(item) {
					return item["id"];
				})).then(_$1.bind(function(succeeded) {
					_$1.each(batch, _$1.bind(function(item) {
						var itemId = item["id"];
						if (itemId) {
							this.itemIdsSentSuccessfully[itemId] = this.itemIdsSentSuccessfully[itemId] || 0;
							this.itemIdsSentSuccessfully[itemId]++;
							if (this.itemIdsSentSuccessfully[itemId] > 5) this.reportError("[dupe] item ID sent too many times", {
								item,
								batchSize: batch.length,
								timesSent: this.itemIdsSentSuccessfully[itemId]
							});
						} else this.reportError("[dupe] found item with no ID while removing", { item });
					}, this));
					if (succeeded) {
						this.consecutiveRemovalFailures = 0;
						if (this.flushOnlyOnInterval && !attemptSecondaryFlush) {
							this.resetFlush();
							return PromisePolyfill.resolve();
						} else return this.flush();
					} else {
						if (++this.consecutiveRemovalFailures > 5) {
							this.reportError("Too many queue failures; disabling batching system.");
							this.stopAllBatching();
						} else this.resetFlush();
						return PromisePolyfill.resolve();
					}
				}, this));
			}, this);
			var batchSendCallback = _$1.bind(function(res) {
				this.requestInProgress = false;
				try {
					if (options.unloading) return this.queue.updatePayloads(transformedItems);
					else if (_$1.isObject(res) && res.error === "timeout" && (/* @__PURE__ */ new Date()).getTime() - startTime >= timeoutMS) {
						this.reportError("Network timeout; retrying");
						return this.flush();
					} else if (_$1.isObject(res) && (res.httpStatusCode >= 500 || res.httpStatusCode === 429 || res.httpStatusCode <= 0 && !isOnline() || res.error === "timeout")) {
						var retryMS = this.flushInterval * 2;
						if (res.retryAfter) retryMS = parseInt(res.retryAfter, 10) * 1e3 || retryMS;
						retryMS = Math.min(MAX_RETRY_INTERVAL_MS, retryMS);
						this.reportError("Error; retry in " + retryMS + " ms");
						this.scheduleFlush(retryMS);
						return PromisePolyfill.resolve();
					} else if (_$1.isObject(res) && res.httpStatusCode === 413) if (batch.length > 1) {
						var halvedBatchSize = Math.max(1, Math.floor(currentBatchSize / 2));
						this.batchSize = Math.min(this.batchSize, halvedBatchSize, batch.length - 1);
						this.reportError("413 response; reducing batch size to " + this.batchSize);
						this.resetFlush();
						return PromisePolyfill.resolve();
					} else {
						this.reportError("Single-event request too large; dropping", batch);
						this.resetBatchSize();
						return removeItemsFromQueue();
					}
					else return removeItemsFromQueue();
				} catch (err) {
					this.reportError("Error handling API response", err);
					this.resetFlush();
				}
			}, this);
			var requestOptions = {
				method: "POST",
				verbose: true,
				ignore_json_errors: true,
				timeout_ms: timeoutMS
			};
			if (options.unloading) requestOptions.transport = "sendBeacon";
			logger$4.log("MIXPANEL REQUEST:", dataForRequest);
			return this.sendRequestPromise(dataForRequest, requestOptions).then(batchSendCallback);
		}, this)).catch(_$1.bind(function(err) {
			this.reportError("Error flushing request queue", err);
			this.resetFlush();
		}, this));
	};
	/**
	* Log error to global logger and optional user-defined logger.
	*/
	RequestBatcher.prototype.reportError = function(msg, err) {
		logger$4.error.apply(logger$4.error, arguments);
		if (this.errorReporter) try {
			if (!(err instanceof Error)) err = new Error(msg);
			this.errorReporter(msg, err);
		} catch (err) {
			logger$4.error(err);
		}
	};
	/**
	* @param {import('./session-recording').SerializedRecording} serializedRecording
	* @returns {boolean}
	*/
	var isRecordingExpired = function(serializedRecording) {
		var now = Date.now();
		return !serializedRecording || now > serializedRecording["maxExpires"] || now > serializedRecording["idleExpires"];
	};
	var RECORD_ENQUEUE_THROTTLE_MS = 250;
	var logger$3 = console_with_prefix("recorder");
	var CompressionStream = win["CompressionStream"];
	var RECORDER_BATCHER_LIB_CONFIG = {
		"batch_size": 1e3,
		"batch_flush_interval_ms": 10 * 1e3,
		"batch_request_timeout_ms": 90 * 1e3,
		"batch_autostart": true
	};
	var ACTIVE_SOURCES = /* @__PURE__ */ new Set([
		IncrementalSource.MouseMove,
		IncrementalSource.MouseInteraction,
		IncrementalSource.Scroll,
		IncrementalSource.ViewportResize,
		IncrementalSource.Input,
		IncrementalSource.TouchMove,
		IncrementalSource.MediaInteraction,
		IncrementalSource.Drag,
		IncrementalSource.Selection
	]);
	function isUserEvent(ev) {
		return ev.type === EventType.IncrementalSnapshot && ACTIVE_SOURCES.has(ev.data.source);
	}
	/**
	* @typedef {Object} SerializedRecording
	* @property {number} idleExpires
	* @property {number} maxExpires
	* @property {number} replayStartTime
	* @property {number} seqNo
	* @property {string} batchStartUrl
	* @property {string} replayId
	* @property {string} tabId
	* @property {string} replayStartUrl
	*/
	/**
	* @typedef {Object} SessionRecordingOptions
	* @property {Object} [options.mixpanelInstance] - reference to the core MixpanelLib
	* @property {String} [options.replayId] - unique uuid for a single replay
	* @property {Function} [options.onIdleTimeout] - callback when a recording reaches idle timeout
	* @property {Function} [options.onMaxLengthReached] - callback when a recording reaches its maximum length
	* @property {Function} [options.rrwebRecord] - rrweb's `record` function
	* @property {Function} [options.onBatchSent] - callback when a batch of events is sent to the server
	* @property {Storage} [options.sharedLockStorage] - optional storage for shared lock, used for test dependency injection
	* optional properties for deserialization:
	* @property {number} idleExpires
	* @property {number} maxExpires
	* @property {number} replayStartTime
	* @property {number} seqNo
	* @property {string} batchStartUrl
	* @property {string} replayStartUrl
	*/
	/**
	* @typedef {Object} UserIdInfo
	* @property {string} distinct_id
	* @property {string} user_id
	* @property {string} device_id
	*/
	/**
	* This class encapsulates a single session recording and its lifecycle.
	* @param {SessionRecordingOptions} options
	*/
	var SessionRecording = function(options) {
		this._mixpanel = options.mixpanelInstance;
		this._onIdleTimeout = options.onIdleTimeout || NOOP_FUNC;
		this._onMaxLengthReached = options.onMaxLengthReached || NOOP_FUNC;
		this._onBatchSent = options.onBatchSent || NOOP_FUNC;
		this._rrwebRecord = options.rrwebRecord || null;
		this._stopRecording = null;
		this.replayId = options.replayId;
		this.batchStartUrl = options.batchStartUrl || null;
		this.replayStartUrl = options.replayStartUrl || null;
		this.idleExpires = options.idleExpires || null;
		this.maxExpires = options.maxExpires || null;
		this.replayStartTime = options.replayStartTime || null;
		this.seqNo = options.seqNo || 0;
		this.idleTimeoutId = null;
		this.maxTimeoutId = null;
		this.recordMaxMs = MAX_RECORDING_MS;
		this.recordMinMs = 0;
		var usePersistence = localStorageSupported(options.sharedLockStorage, true) && !this.getConfig("disable_persistence");
		this.batcherKey = "__mprec_" + this.getConfig("name") + "_" + this.getConfig("token") + "_" + this.replayId;
		this.queueStorage = new IDBStorageWrapper(RECORDING_EVENTS_STORE_NAME);
		this.batcher = new RequestBatcher(this.batcherKey, {
			errorReporter: this.reportError.bind(this),
			flushOnlyOnInterval: true,
			libConfig: RECORDER_BATCHER_LIB_CONFIG,
			sendRequestFunc: this.flushEventsWithOptOut.bind(this),
			queueStorage: this.queueStorage,
			sharedLockStorage: options.sharedLockStorage,
			usePersistence,
			stopAllBatchingFunc: this.stopRecording.bind(this),
			enqueueThrottleMs: RECORD_ENQUEUE_THROTTLE_MS,
			sharedLockTimeoutMS: 10 * 1e3
		});
	};
	/**
	* @returns {UserIdInfo}
	*/
	SessionRecording.prototype.getUserIdInfo = function() {
		if (this.finalFlushUserIdInfo) return this.finalFlushUserIdInfo;
		var userIdInfo = { "distinct_id": String(this._mixpanel.get_distinct_id()) };
		var deviceId = this._mixpanel.get_property("$device_id");
		if (deviceId) userIdInfo["$device_id"] = deviceId;
		var userId = this._mixpanel.get_property("$user_id");
		if (userId) userIdInfo["$user_id"] = userId;
		return userIdInfo;
	};
	SessionRecording.prototype.unloadPersistedData = function() {
		this.batcher.stop();
		return this.batcher.flush().then(function() {
			return this.queueStorage.removeItem(this.batcherKey);
		}.bind(this));
	};
	SessionRecording.prototype.getConfig = function(configVar) {
		return this._mixpanel.get_config(configVar);
	};
	SessionRecording.prototype.get_config = function(configVar) {
		return this.getConfig(configVar);
	};
	SessionRecording.prototype.startRecording = function(shouldStopBatcher) {
		if (this._rrwebRecord === null) {
			this.reportError("rrweb record function not provided. ");
			return;
		}
		if (this._stopRecording !== null) {
			logger$3.log("Recording already in progress, skipping startRecording.");
			return;
		}
		this.recordMaxMs = this.getConfig("record_max_ms");
		if (this.recordMaxMs > MAX_RECORDING_MS) {
			this.recordMaxMs = MAX_RECORDING_MS;
			logger$3.critical("record_max_ms cannot be greater than " + MAX_RECORDING_MS + "ms. Capping value.");
		}
		if (!this.maxExpires) this.maxExpires = (/* @__PURE__ */ new Date()).getTime() + this.recordMaxMs;
		this.recordMinMs = this.getConfig("record_min_ms");
		if (this.recordMinMs > MAX_VALUE_FOR_MIN_RECORDING_MS) {
			this.recordMinMs = MAX_VALUE_FOR_MIN_RECORDING_MS;
			logger$3.critical("record_min_ms cannot be greater than " + MAX_VALUE_FOR_MIN_RECORDING_MS + "ms. Capping value.");
		}
		if (!this.replayStartTime) {
			this.replayStartTime = (/* @__PURE__ */ new Date()).getTime();
			this.batchStartUrl = _$1.info.currentUrl();
			this.replayStartUrl = _$1.info.currentUrl();
		}
		if (shouldStopBatcher || this.recordMinMs > 0) this.batcher.stop();
		else this.batcher.start();
		var resetIdleTimeout = function() {
			clearTimeout(this.idleTimeoutId);
			var idleTimeoutMs = this.getConfig("record_idle_timeout_ms");
			this.idleTimeoutId = setTimeout(this._onIdleTimeout, idleTimeoutMs);
			this.idleExpires = (/* @__PURE__ */ new Date()).getTime() + idleTimeoutMs;
		}.bind(this);
		resetIdleTimeout();
		var blockSelector = this.getConfig("record_block_selector");
		if (blockSelector === "" || blockSelector === null) blockSelector = void 0;
		try {
			this._stopRecording = this._rrwebRecord({
				"emit": function(ev) {
					if (this.idleExpires && this.idleExpires < ev.timestamp) {
						this._onIdleTimeout();
						return;
					}
					if (isUserEvent(ev)) {
						if (this.batcher.stopped && (/* @__PURE__ */ new Date()).getTime() - this.replayStartTime >= this.recordMinMs) this.batcher.start();
						resetIdleTimeout();
					}
					this.__enqueuePromise = this.batcher.enqueue(ev);
				}.bind(this),
				"blockClass": this.getConfig("record_block_class"),
				"blockSelector": blockSelector,
				"collectFonts": this.getConfig("record_collect_fonts"),
				"dataURLOptions": {
					"type": "image/webp",
					"quality": .6
				},
				"maskAllInputs": true,
				"maskTextClass": this.getConfig("record_mask_text_class"),
				"maskTextSelector": this.getConfig("record_mask_text_selector"),
				"recordCanvas": this.getConfig("record_canvas"),
				"sampling": { "canvas": 15 }
			});
		} catch (err) {
			this.reportError("Unexpected error when starting rrweb recording.", err);
		}
		if (typeof this._stopRecording !== "function") {
			this.reportError("rrweb failed to start, skipping this recording.");
			this._stopRecording = null;
			this.stopRecording();
			return;
		}
		var maxTimeoutMs = this.maxExpires - (/* @__PURE__ */ new Date()).getTime();
		this.maxTimeoutId = setTimeout(this._onMaxLengthReached.bind(this), maxTimeoutMs);
	};
	SessionRecording.prototype.stopRecording = function(skipFlush) {
		this.finalFlushUserIdInfo = this.getUserIdInfo();
		if (!this.isRrwebStopped()) {
			try {
				this._stopRecording();
			} catch (err) {
				this.reportError("Error with rrweb stopRecording", err);
			}
			this._stopRecording = null;
		}
		var flushPromise;
		if (this.batcher.stopped) flushPromise = this.batcher.clear();
		else if (!skipFlush) flushPromise = this.batcher.flush();
		this.batcher.stop();
		clearTimeout(this.idleTimeoutId);
		clearTimeout(this.maxTimeoutId);
		return flushPromise;
	};
	SessionRecording.prototype.isRrwebStopped = function() {
		return this._stopRecording === null;
	};
	/**
	* Flushes the current batch of events to the server, but passes an opt-out callback to make sure
	* we stop recording and dump any queued events if the user has opted out.
	*/
	SessionRecording.prototype.flushEventsWithOptOut = function(data, options, cb) {
		var onOptOut = function(code) {
			if (code === 0) {
				this.stopRecording();
				cb({ error: "Tracking has been opted out, stopping recording." });
			}
		}.bind(this);
		this._flushEvents(data, options, cb, onOptOut);
	};
	/**
	* @returns {SerializedRecording}
	*/
	SessionRecording.prototype.serialize = function() {
		var tabId;
		try {
			tabId = this._mixpanel.get_tab_id();
		} catch (e) {
			this.reportError("Error getting tab ID for serialization ", e);
			tabId = null;
		}
		return {
			"replayId": this.replayId,
			"seqNo": this.seqNo,
			"replayStartTime": this.replayStartTime,
			"batchStartUrl": this.batchStartUrl,
			"replayStartUrl": this.replayStartUrl,
			"idleExpires": this.idleExpires,
			"maxExpires": this.maxExpires,
			"tabId": tabId
		};
	};
	/**
	* @static
	* @param {SerializedRecording} serializedRecording
	* @param {SessionRecordingOptions} options
	* @returns {SessionRecording}
	*/
	SessionRecording.deserialize = function(serializedRecording, options) {
		return new SessionRecording(_$1.extend({}, options, {
			replayId: serializedRecording["replayId"],
			batchStartUrl: serializedRecording["batchStartUrl"],
			replayStartUrl: serializedRecording["replayStartUrl"],
			idleExpires: serializedRecording["idleExpires"],
			maxExpires: serializedRecording["maxExpires"],
			replayStartTime: serializedRecording["replayStartTime"],
			seqNo: serializedRecording["seqNo"],
			sharedLockStorage: options.sharedLockStorage
		}));
	};
	SessionRecording.prototype._sendRequest = function(currentReplayId, reqParams, reqBody, callback) {
		var onSuccess = function(response, responseBody) {
			if (response.status === 200 && this.replayId === currentReplayId) {
				this.seqNo++;
				this.batchStartUrl = _$1.info.currentUrl();
			}
			this._onBatchSent();
			callback({
				status: 0,
				httpStatusCode: response.status,
				responseBody,
				retryAfter: response.headers.get("Retry-After")
			});
		}.bind(this);
		var apiHost = this._mixpanel.get_api_host && this._mixpanel.get_api_host("record") || this.getConfig("api_host");
		win["fetch"](apiHost + "/" + this.getConfig("api_routes")["record"] + "?" + new URLSearchParams(reqParams), {
			"method": "POST",
			"headers": {
				"Authorization": "Basic " + btoa(this.getConfig("token") + ":"),
				"Content-Type": "application/octet-stream"
			},
			"body": reqBody
		}).then(function(response) {
			response.json().then(function(responseBody) {
				onSuccess(response, responseBody);
			}).catch(function(error) {
				callback({ error });
			});
		}).catch(function(error) {
			callback({
				error,
				httpStatusCode: 0
			});
		});
	};
	SessionRecording.prototype._flushEvents = addOptOutCheckMixpanelLib(function(data, options, callback) {
		var numEvents = data.length;
		if (numEvents > 0) {
			var replayId = this.replayId;
			var batchStartTime = Infinity;
			var batchEndTime = -Infinity;
			var hasFullSnapshot = false;
			for (var i = 0; i < numEvents; i++) {
				batchStartTime = Math.min(batchStartTime, data[i].timestamp);
				batchEndTime = Math.max(batchEndTime, data[i].timestamp);
				if (data[i].type === EventType.FullSnapshot) hasFullSnapshot = true;
			}
			if (this.seqNo === 0) {
				if (!hasFullSnapshot) {
					callback({ error: "First batch does not contain a full snapshot. Aborting recording." });
					this.stopRecording(true);
					return;
				}
				this.replayStartTime = batchStartTime;
			} else if (!this.replayStartTime) {
				this.reportError("Replay start time not set but seqNo is not 0. Using current batch start time as a fallback.");
				this.replayStartTime = batchStartTime;
			}
			var replayLengthMs = batchEndTime - this.replayStartTime;
			var reqParams = {
				"$current_url": this.batchStartUrl,
				"$lib_version": Config.LIB_VERSION,
				"batch_start_time": batchStartTime / 1e3,
				"mp_lib": "web",
				"replay_id": replayId,
				"replay_length_ms": replayLengthMs,
				"replay_start_time": this.replayStartTime / 1e3,
				"replay_start_url": this.replayStartUrl,
				"seq": this.seqNo
			};
			var eventsJson = JSON.stringify(data);
			Object.assign(reqParams, this.getUserIdInfo());
			if (CompressionStream) {
				var gzipStream = new Blob([eventsJson], { type: "application/json" }).stream().pipeThrough(new CompressionStream("gzip"));
				new Response(gzipStream).blob().then(function(compressedBlob) {
					reqParams["format"] = "gzip";
					this._sendRequest(replayId, reqParams, compressedBlob, callback);
				}.bind(this));
			} else {
				reqParams["format"] = "body";
				this._sendRequest(replayId, reqParams, eventsJson, callback);
			}
		}
	});
	SessionRecording.prototype.reportError = function(msg, err) {
		logger$3.error.apply(logger$3.error, arguments);
		try {
			if (!err && !(msg instanceof Error)) msg = new Error(msg);
			this.getConfig("error_reporter")(msg, err);
		} catch (err) {
			logger$3.error(err);
		}
	};
	/**
	* Module for handling the storage and retrieval of recording metadata as well as any active recordings.
	* Makes sure that only one tab can be recording at a time.
	*/
	var RecordingRegistry = function(options) {
		/** @type {IDBStorageWrapper} */
		this.idb = new IDBStorageWrapper(RECORDING_REGISTRY_STORE_NAME);
		this.errorReporter = options.errorReporter;
		this.mixpanelInstance = options.mixpanelInstance;
		this.sharedLockStorage = options.sharedLockStorage;
	};
	RecordingRegistry.prototype.isPersistenceEnabled = function() {
		return !this.mixpanelInstance.get_config("disable_persistence");
	};
	RecordingRegistry.prototype.handleError = function(err) {
		this.errorReporter("IndexedDB error: ", err);
	};
	/**
	* @param {import('./session-recording').SerializedRecording} serializedRecording
	*/
	RecordingRegistry.prototype.setActiveRecording = function(serializedRecording) {
		if (!this.isPersistenceEnabled()) return PromisePolyfill.resolve();
		var tabId = serializedRecording["tabId"];
		if (!tabId) {
			console.warn("No tab ID is set, cannot persist recording metadata.");
			return PromisePolyfill.resolve();
		}
		return this.idb.init().then(function() {
			return this.idb.setItem(tabId, serializedRecording);
		}.bind(this)).catch(this.handleError.bind(this));
	};
	/**
	* @returns {Promise<import('./session-recording').SerializedRecording>}
	*/
	RecordingRegistry.prototype.getActiveRecording = function() {
		if (!this.isPersistenceEnabled()) return PromisePolyfill.resolve(null);
		return this.idb.init().then(function() {
			return this.idb.getItem(this.mixpanelInstance.get_tab_id());
		}.bind(this)).then(function(serializedRecording) {
			return isRecordingExpired(serializedRecording) ? null : serializedRecording;
		}.bind(this)).catch(this.handleError.bind(this));
	};
	RecordingRegistry.prototype.clearActiveRecording = function() {
		if (this.isPersistenceEnabled()) return this.markActiveRecordingExpired();
		else return this.deleteActiveRecording();
	};
	RecordingRegistry.prototype.markActiveRecordingExpired = function() {
		return this.getActiveRecording().then(function(serializedRecording) {
			if (serializedRecording) {
				serializedRecording["maxExpires"] = 0;
				return this.setActiveRecording(serializedRecording);
			}
		}.bind(this)).catch(this.handleError.bind(this));
	};
	RecordingRegistry.prototype.deleteActiveRecording = function() {
		if (this.idb.isInitialized()) return this.idb.removeItem(this.mixpanelInstance.get_tab_id()).catch(this.handleError.bind(this));
		else return PromisePolyfill.resolve();
	};
	/**
	* Flush any inactive recordings from the registry to minimize data loss.
	* The main idea here is that we can flush remaining rrweb events on the next page load if a tab is closed mid-batch.
	*/
	RecordingRegistry.prototype.flushInactiveRecordings = function() {
		if (!this.isPersistenceEnabled()) return PromisePolyfill.resolve([]);
		return this.idb.init().then(function() {
			return this.idb.getAll();
		}.bind(this)).then(function(serializedRecordings) {
			var unloadPromises = serializedRecordings.filter(function(serializedRecording) {
				return isRecordingExpired(serializedRecording);
			}).map(function(serializedRecording) {
				return SessionRecording.deserialize(serializedRecording, {
					mixpanelInstance: this.mixpanelInstance,
					sharedLockStorage: this.sharedLockStorage
				}).unloadPersistedData().then(function() {
					return this.idb.removeItem(serializedRecording["tabId"]);
				}.bind(this)).catch(this.handleError.bind(this));
			}.bind(this));
			return PromisePolyfill.all(unloadPromises);
		}.bind(this)).catch(this.handleError.bind(this));
	};
	var logger$2 = console_with_prefix("recorder");
	/**
	* Recorder API: bundles rrweb and and exposes methods to start and stop recordings.
	* @param {Object} [options.mixpanelInstance] - reference to the core MixpanelLib
	*/
	var MixpanelRecorder = function(mixpanelInstance, rrwebRecord, sharedLockStorage) {
		this.mixpanelInstance = mixpanelInstance;
		this.rrwebRecord = rrwebRecord || record;
		this.sharedLockStorage = sharedLockStorage;
		/**
		* @member {import('./registry').RecordingRegistry}
		*/
		this.recordingRegistry = new RecordingRegistry({
			mixpanelInstance: this.mixpanelInstance,
			errorReporter: logger$2.error,
			sharedLockStorage
		});
		this._flushInactivePromise = this.recordingRegistry.flushInactiveRecordings();
		this.activeRecording = null;
		this.stopRecordingInProgress = false;
	};
	MixpanelRecorder.prototype.startRecording = function(options) {
		options = options || {};
		if (this.activeRecording && !this.activeRecording.isRrwebStopped()) {
			logger$2.log("Recording already in progress, skipping startRecording.");
			return;
		}
		var onIdleTimeout = function() {
			logger$2.log("Idle timeout reached, restarting recording.");
			this.resetRecording();
		}.bind(this);
		var onMaxLengthReached = function() {
			logger$2.log("Max recording length reached, stopping recording.");
			this.resetRecording();
		}.bind(this);
		var onBatchSent = function() {
			this.recordingRegistry.setActiveRecording(this.activeRecording.serialize());
			this["__flushPromise"] = this.activeRecording.batcher._flushPromise;
		}.bind(this);
		/**
		* @type {import('./session-recording').SessionRecordingOptions}
		*/
		var sessionRecordingOptions = {
			mixpanelInstance: this.mixpanelInstance,
			onBatchSent,
			onIdleTimeout,
			onMaxLengthReached,
			replayId: _$1.UUID(),
			rrwebRecord: this.rrwebRecord,
			sharedLockStorage: this.sharedLockStorage
		};
		if (options.activeSerializedRecording) this.activeRecording = SessionRecording.deserialize(options.activeSerializedRecording, sessionRecordingOptions);
		else this.activeRecording = new SessionRecording(sessionRecordingOptions);
		this.activeRecording.startRecording(options.shouldStopBatcher);
		return this.recordingRegistry.setActiveRecording(this.activeRecording.serialize());
	};
	MixpanelRecorder.prototype.stopRecording = function() {
		this.stopRecordingInProgress = true;
		return this._stopCurrentRecording(false, true).then(function() {
			return this.recordingRegistry.clearActiveRecording();
		}.bind(this)).then(function() {
			this.stopRecordingInProgress = false;
		}.bind(this));
	};
	MixpanelRecorder.prototype.pauseRecording = function() {
		return this._stopCurrentRecording(false);
	};
	MixpanelRecorder.prototype._stopCurrentRecording = function(skipFlush, disableActiveRecording) {
		if (this.activeRecording) {
			var stopRecordingPromise = this.activeRecording.stopRecording(skipFlush);
			if (disableActiveRecording) this.activeRecording = null;
			return stopRecordingPromise;
		}
		return PromisePolyfill.resolve();
	};
	MixpanelRecorder.prototype.resumeRecording = function(startNewIfInactive) {
		if (this.activeRecording && this.activeRecording.isRrwebStopped()) {
			this.activeRecording.startRecording(false);
			return PromisePolyfill.resolve(null);
		}
		return this.recordingRegistry.getActiveRecording().then(function(activeSerializedRecording) {
			if (activeSerializedRecording && !this.stopRecordingInProgress) return this.startRecording({ activeSerializedRecording });
			else if (startNewIfInactive) return this.startRecording({ shouldStopBatcher: false });
			else {
				logger$2.log("No resumable recording found.");
				return null;
			}
		}.bind(this));
	};
	MixpanelRecorder.prototype.resetRecording = function() {
		this.stopRecording();
		this.startRecording({ shouldStopBatcher: true });
	};
	MixpanelRecorder.prototype.getActiveReplayId = function() {
		if (this.activeRecording && !this.activeRecording.isRrwebStopped()) return this.activeRecording.replayId;
		else return null;
	};
	Object.defineProperty(MixpanelRecorder.prototype, "replayId", { get: function() {
		return this.getActiveReplayId();
	} });
	win["__mp_recorder"] = MixpanelRecorder;
	var EV_CHANGE = "change";
	var EV_CLICK = "click";
	var EV_HASHCHANGE = "hashchange";
	var EV_INPUT = "input";
	var EV_LOAD = "load";
	var EV_MP_LOCATION_CHANGE = "mp_locationchange";
	var EV_POPSTATE = "popstate";
	var EV_SCROLLEND = "scrollend";
	var EV_SCROLL = "scroll";
	var EV_SELECT = "select";
	var EV_SUBMIT = "submit";
	var EV_TOGGLE = "toggle";
	var EV_VISIBILITYCHANGE = "visibilitychange";
	var CLICK_EVENT_PROPS = [
		"clientX",
		"clientY",
		"offsetX",
		"offsetY",
		"pageX",
		"pageY",
		"screenX",
		"screenY",
		"x",
		"y"
	];
	var OPT_IN_CLASSES = ["mp-include"];
	var OPT_OUT_CLASSES = ["mp-no-track"];
	var SENSITIVE_DATA_CLASSES = OPT_OUT_CLASSES.concat(["mp-sensitive"]);
	var TRACKED_ATTRS = [
		"aria-label",
		"aria-labelledby",
		"aria-describedby",
		"href",
		"name",
		"role",
		"title",
		"type"
	];
	var INTERACTIVE_ARIA_ROLES = {
		"button": true,
		"checkbox": true,
		"combobox": true,
		"grid": true,
		"link": true,
		"listbox": true,
		"menu": true,
		"menubar": true,
		"menuitem": true,
		"menuitemcheckbox": true,
		"menuitemradio": true,
		"navigation": true,
		"option": true,
		"radio": true,
		"radiogroup": true,
		"searchbox": true,
		"slider": true,
		"spinbutton": true,
		"switch": true,
		"tab": true,
		"tablist": true,
		"textbox": true,
		"tree": true,
		"treegrid": true,
		"treeitem": true
	};
	var ALWAYS_NON_INTERACTIVE_TAGS = {
		"base": true,
		"head": true,
		"html": true,
		"link": true,
		"meta": true,
		"script": true,
		"style": true,
		"title": true,
		"br": true,
		"hr": true,
		"wbr": true,
		"noscript": true,
		"picture": true,
		"source": true,
		"template": true,
		"track": true
	};
	var TEXT_CONTAINER_TAGS = {
		"article": true,
		"div": true,
		"h1": true,
		"h2": true,
		"h3": true,
		"h4": true,
		"h5": true,
		"h6": true,
		"p": true,
		"section": true,
		"span": true
	};
	var EVENT_HANDLER_ATTRIBUTES = [
		"onclick",
		"onmousedown",
		"onmouseup",
		"onpointerdown",
		"onpointerup",
		"ontouchend",
		"ontouchstart"
	];
	var MAX_DEPTH = 5;
	var logger$1 = console_with_prefix("autocapture");
	function getClasses(el) {
		var classes = {};
		var classList = getClassName(el).split(" ");
		for (var i = 0; i < classList.length; i++) {
			var cls = classList[i];
			if (cls) classes[cls] = true;
		}
		return classes;
	}
	function getClassName(el) {
		switch (typeof el.className) {
			case "string": return el.className;
			case "object": return el.className.baseVal || el.getAttribute("class") || "";
			default: return "";
		}
	}
	function getPreviousElementSibling(el) {
		if (el.previousElementSibling) return el.previousElementSibling;
		else {
			do
				el = el.previousSibling;
			while (el && !isElementNode(el));
			return el;
		}
	}
	function getPropertiesFromElement(el, ev, blockAttrsSet, extraAttrs, allowElementCallback, allowSelectors) {
		var props = {
			"$classes": getClassName(el).split(" "),
			"$tag_name": el.tagName.toLowerCase()
		};
		var elId = el.id;
		if (elId) props["$id"] = elId;
		if (shouldTrackElementDetails(el, ev, allowElementCallback, allowSelectors)) _$1.each(TRACKED_ATTRS.concat(extraAttrs), function(attr) {
			if (el.hasAttribute(attr) && !blockAttrsSet[attr]) {
				var attrVal = el.getAttribute(attr);
				if (shouldTrackValue(attrVal)) props["$attr-" + attr] = attrVal;
			}
		});
		var nthChild = 1;
		var nthOfType = 1;
		var currentElem = el;
		while (currentElem = getPreviousElementSibling(currentElem)) {
			nthChild++;
			if (currentElem.tagName === el.tagName) nthOfType++;
		}
		props["$nth_child"] = nthChild;
		props["$nth_of_type"] = nthOfType;
		return props;
	}
	function getPropsForDOMEvent(ev, config) {
		var allowElementCallback = config.allowElementCallback;
		var allowSelectors = config.allowSelectors || [];
		var blockAttrs = config.blockAttrs || [];
		var blockElementCallback = config.blockElementCallback;
		var blockSelectors = config.blockSelectors || [];
		var captureTextContent = config.captureTextContent || false;
		var captureExtraAttrs = config.captureExtraAttrs || [];
		var capturedForHeatMap = config.capturedForHeatMap || false;
		var blockAttrsSet = {};
		_$1.each(blockAttrs, function(attr) {
			blockAttrsSet[attr] = true;
		});
		var props = null;
		var target = typeof ev.target === "undefined" ? ev.srcElement : ev.target;
		if (isTextNode(target)) target = target.parentNode;
		if (shouldTrackDomEvent(target, ev) && isElementAllowed(target, ev, allowElementCallback, allowSelectors) && !isElementBlocked(target, ev, blockElementCallback, blockSelectors)) {
			var targetElementList = [target];
			var curEl = target;
			while (curEl.parentNode && !isTag(curEl, "body")) {
				targetElementList.push(curEl.parentNode);
				curEl = curEl.parentNode;
			}
			var elementsJson = [];
			var href;
			var explicitNoTrack = false;
			_$1.each(targetElementList, function(el) {
				var shouldTrackDetails = shouldTrackElementDetails(el, ev, allowElementCallback, allowSelectors);
				if (!blockAttrsSet["href"] && el.tagName.toLowerCase() === "a") {
					href = el.getAttribute("href");
					href = shouldTrackDetails && shouldTrackValue(href) && href;
				}
				if (isElementBlocked(el, ev, blockElementCallback, blockSelectors)) explicitNoTrack = true;
				elementsJson.push(getPropertiesFromElement(el, ev, blockAttrsSet, captureExtraAttrs, allowElementCallback, allowSelectors));
			}, this);
			if (!explicitNoTrack) {
				var docElement = document$1["documentElement"];
				props = {
					"$event_type": ev.type,
					"$host": win.location.host,
					"$pathname": win.location.pathname,
					"$elements": elementsJson,
					"$el_attr__href": href,
					"$viewportHeight": Math.max(docElement["clientHeight"], win["innerHeight"] || 0),
					"$viewportWidth": Math.max(docElement["clientWidth"], win["innerWidth"] || 0),
					"$pageHeight": document$1["body"]["offsetHeight"] || 0,
					"$pageWidth": document$1["body"]["offsetWidth"] || 0
				};
				_$1.each(captureExtraAttrs, function(attr) {
					if (!blockAttrsSet[attr] && target.hasAttribute(attr)) {
						var attrVal = target.getAttribute(attr);
						if (shouldTrackValue(attrVal)) props["$el_attr__" + attr] = attrVal;
					}
				});
				if (captureTextContent) {
					elementText = getSafeText(target, ev, allowElementCallback, allowSelectors);
					if (elementText && elementText.length) props["$el_text"] = elementText;
				}
				if (ev.type === EV_CLICK) {
					_$1.each(CLICK_EVENT_PROPS, function(prop) {
						if (prop in ev) props["$" + prop] = ev[prop];
					});
					if (capturedForHeatMap) props["$captured_for_heatmap"] = true;
					target = guessRealClickTarget(ev);
				}
				if (captureTextContent) {
					var elementText = getSafeText(target, ev, allowElementCallback, allowSelectors);
					if (elementText && elementText.length) props["$el_text"] = elementText;
				}
				if (target) {
					if (!isElementAllowed(target, ev, allowElementCallback, allowSelectors) || isElementBlocked(target, ev, blockElementCallback, blockSelectors)) return null;
					var targetProps = getPropertiesFromElement(target, ev, blockAttrsSet, captureExtraAttrs, allowElementCallback, allowSelectors);
					props["$target"] = targetProps;
					props["$el_classes"] = targetProps["$classes"];
					_$1.extend(props, _$1.strip_empty_properties({
						"$el_id": targetProps["$id"],
						"$el_tag_name": targetProps["$tag_name"]
					}));
				}
			}
		}
		return props;
	}
	/**
	* Get the direct text content of an element, protecting against sensitive data collection.
	* Concats textContent of each of the element's text node children; this avoids potential
	* collection of sensitive data that could happen if we used element.textContent and the
	* element had sensitive child elements, since element.textContent includes child content.
	* Scrubs values that look like they could be sensitive (i.e. cc or ssn number).
	* @param {Element} el - element to get the text of
	* @param {Array<string>} allowSelectors - CSS selectors for elements that should be included
	* @returns {string} the element's direct text content
	*/
	function getSafeText(el, ev, allowElementCallback, allowSelectors) {
		var elText = "";
		if (shouldTrackElementDetails(el, ev, allowElementCallback, allowSelectors) && el.childNodes && el.childNodes.length) _$1.each(el.childNodes, function(child) {
			if (isTextNode(child) && child.textContent) elText += _$1.trim(child.textContent).split(/(\s+)/).filter(shouldTrackValue).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
		});
		return _$1.trim(elText);
	}
	function guessRealClickTarget(ev) {
		var target = ev.target;
		var composedPath = ev["composedPath"]();
		for (var i = 0; i < composedPath.length; i++) {
			var node = composedPath[i];
			if (isTag(node, "a") || isTag(node, "button") || isTag(node, "input") || isTag(node, "select") || node.getAttribute && node.getAttribute("role") === "button") {
				target = node;
				break;
			}
			if (node === target) break;
		}
		return target;
	}
	function isElementAllowed(el, ev, allowElementCallback, allowSelectors) {
		if (allowElementCallback) try {
			if (!allowElementCallback(el, ev)) return false;
		} catch (err) {
			logger$1.critical("Error while checking element in allowElementCallback", err);
			return false;
		}
		if (!allowSelectors.length) return true;
		for (var i = 0; i < allowSelectors.length; i++) {
			var sel = allowSelectors[i];
			try {
				if (el["matches"](sel)) return true;
			} catch (err) {
				logger$1.critical("Error while checking selector: " + sel, err);
			}
		}
		return false;
	}
	function isElementBlocked(el, ev, blockElementCallback, blockSelectors) {
		var i;
		if (blockElementCallback) try {
			if (blockElementCallback(el, ev)) return true;
		} catch (err) {
			logger$1.critical("Error while checking element in blockElementCallback", err);
			return true;
		}
		if (blockSelectors && blockSelectors.length) for (i = 0; i < blockSelectors.length; i++) {
			var sel = blockSelectors[i];
			try {
				if (el["matches"](sel)) return true;
			} catch (err) {
				logger$1.critical("Error while checking selector: " + sel, err);
			}
		}
		var classes = getClasses(el);
		for (i = 0; i < OPT_OUT_CLASSES.length; i++) if (classes[OPT_OUT_CLASSES[i]]) return true;
		return false;
	}
	function isElementNode(node) {
		return node && node.nodeType === 1;
	}
	function isTag(el, tag) {
		return el && el.tagName && el.tagName.toLowerCase() === tag.toLowerCase();
	}
	function isTextNode(node) {
		return node && node.nodeType === 3;
	}
	function minDOMApisSupported() {
		try {
			return !!document$1.createElement("div")["matches"];
		} catch (err) {
			return false;
		}
	}
	function weakSetSupported() {
		return typeof WeakSet !== "undefined";
	}
	function shouldTrackDomEvent(el, ev) {
		if (!el || isTag(el, "html") || !isElementNode(el)) return false;
		switch (el.tagName.toLowerCase()) {
			case "form": return ev.type === EV_SUBMIT;
			case "input": if (["button", "submit"].indexOf(el.getAttribute("type")) === -1) return ev.type === EV_CHANGE;
			else return ev.type === EV_CLICK;
			case "select":
			case "textarea": return ev.type === EV_CHANGE;
			default: return ev.type === EV_CLICK;
		}
	}
	function shouldTrackElementDetails(el, ev, allowElementCallback, allowSelectors) {
		var i;
		if (!isElementAllowed(el, ev, allowElementCallback, allowSelectors)) return false;
		for (var curEl = el; curEl.parentNode && !isTag(curEl, "body"); curEl = curEl.parentNode) {
			var classes = getClasses(curEl);
			for (i = 0; i < SENSITIVE_DATA_CLASSES.length; i++) if (classes[SENSITIVE_DATA_CLASSES[i]]) return false;
		}
		var elClasses = getClasses(el);
		for (i = 0; i < OPT_IN_CLASSES.length; i++) if (elClasses[OPT_IN_CLASSES[i]]) return true;
		if (isTag(el, "input") || isTag(el, "select") || isTag(el, "textarea") || el.getAttribute("contenteditable") === "true") return false;
		var type = el.type || "";
		if (typeof type === "string") switch (type.toLowerCase()) {
			case "hidden": return false;
			case "password": return false;
		}
		var name = el.name || el.id || "";
		if (typeof name === "string") {
			if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(name.replace(/[^a-zA-Z0-9]/g, ""))) return false;
		}
		return true;
	}
	function shouldTrackValue(value) {
		if (value === null || _$1.isUndefined(value)) return false;
		if (typeof value === "string") {
			value = _$1.trim(value);
			if (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((value || "").replace(/[- ]/g, ""))) return false;
			if (/(^\d{3}-?\d{2}-?\d{4}$)/.test(value)) return false;
		}
		return true;
	}
	/**
	* Creates a cross-browser compatible scroll end function with appropriate event listener.
	* For browsers that support scrollend, returns the original function with scrollend event.
	* For browsers without scrollend support, returns a debounced function that triggers
	* 100ms after the last scroll event to simulate scrollend behavior.
	* @param {Function} originalFunction - The function to call when scrolling ends
	* @returns {Object} Object containing listener function and eventType string
	* @returns {Function} returns.listener - The wrapped function to use as event listener
	* @returns {string} returns.eventType - The event type to listen for ('scrollend' or 'scroll')
	*/
	function getPolyfillScrollEndFunction(originalFunction) {
		var supportsScrollEnd = "onscrollend" in win;
		var polyfillFunction = safewrap(originalFunction);
		var polyfillEvent = EV_SCROLLEND;
		if (!supportsScrollEnd) {
			var scrollTimer = null;
			var scrollDelayMs = 100;
			polyfillFunction = safewrap(function() {
				clearTimeout(scrollTimer);
				scrollTimer = setTimeout(originalFunction, scrollDelayMs);
			});
			polyfillEvent = EV_SCROLL;
		}
		return {
			listener: polyfillFunction,
			eventType: polyfillEvent
		};
	}
	function hasInlineEventHandlers(element) {
		for (var i = 0; i < EVENT_HANDLER_ATTRIBUTES.length; i++) if (element.hasAttribute(EVENT_HANDLER_ATTRIBUTES[i])) return true;
		return false;
	}
	function hasInteractiveAriaRole(element) {
		var role = element.getAttribute("role");
		if (!role) return false;
		return INTERACTIVE_ARIA_ROLES[role.trim().split(/\s+/)[0].toLowerCase()];
	}
	function hasAnyInteractivityIndicators(element) {
		var tagName = element.tagName.toLowerCase();
		if (tagName === "button" || tagName === "input" || tagName === "select" || tagName === "textarea" || tagName === "details" || tagName === "dialog") return true;
		if (element.isContentEditable) return true;
		if (element.onclick || element.onmousedown || element.onmouseup || element.ontouchstart || element.ontouchend) return true;
		if (hasInlineEventHandlers(element)) return true;
		if (hasInteractiveAriaRole(element)) return true;
		if (tagName === "a" && element.hasAttribute("href")) return true;
		if (element.hasAttribute("tabindex")) return true;
		return false;
	}
	function isDefinitelyNonInteractive(element) {
		if (!element || !element.tagName) return true;
		var tagName = element.tagName.toLowerCase();
		if (ALWAYS_NON_INTERACTIVE_TAGS[tagName]) return true;
		if (hasAnyInteractivityIndicators(element)) return false;
		var parent = element.parentElement;
		var depth = 0;
		while (parent && depth < MAX_DEPTH) {
			if (hasAnyInteractivityIndicators(parent)) return false;
			if (parent.getRootNode && parent.getRootNode() !== document$1) {
				var root = parent.getRootNode();
				if (root.host && hasAnyInteractivityIndicators(root.host)) return false;
			}
			parent = parent.parentElement;
			depth++;
		}
		if (TEXT_CONTAINER_TAGS[tagName]) return true;
		return false;
	}
	/** @const */ var DEFAULT_RAGE_CLICK_THRESHOLD_PX = 30;
	/** @const */ var DEFAULT_RAGE_CLICK_TIMEOUT_MS = 1e3;
	/** @const */ var DEFAULT_RAGE_CLICK_CLICK_COUNT = 4;
	function RageClickTracker() {
		this.clicks = [];
	}
	RageClickTracker.prototype.isRageClick = function(x, y, options) {
		options = options || {};
		var thresholdPx = options["threshold_px"] || DEFAULT_RAGE_CLICK_THRESHOLD_PX;
		var timeoutMs = options["timeout_ms"] || DEFAULT_RAGE_CLICK_TIMEOUT_MS;
		var clickCount = options["click_count"] || DEFAULT_RAGE_CLICK_CLICK_COUNT;
		var timestamp = Date.now();
		var lastClick = this.clicks[this.clicks.length - 1];
		if (lastClick && timestamp - lastClick.timestamp < timeoutMs && Math.sqrt(Math.pow(x - lastClick.x, 2) + Math.pow(y - lastClick.y, 2)) < thresholdPx) {
			this.clicks.push({
				x,
				y,
				timestamp
			});
			if (this.clicks.length >= clickCount) {
				this.clicks = [];
				return true;
			}
		} else this.clicks = [{
			x,
			y,
			timestamp
		}];
		return false;
	};
	function ShadowDOMObserver(changeCallback, observerConfig) {
		this.changeCallback = changeCallback || function() {};
		this.observerConfig = observerConfig;
		this.observedShadowRoots = null;
		this.shadowObservers = [];
	}
	ShadowDOMObserver.prototype.getEventTarget = function(event) {
		if (!this.observedShadowRoots) return;
		var path = this.getComposedPath(event);
		if (path && path.length) return path[0];
		return event["target"] || event["srcElement"];
	};
	ShadowDOMObserver.prototype.getComposedPath = function(event) {
		if ("composedPath" in event) return event["composedPath"]();
		return [];
	};
	ShadowDOMObserver.prototype.observeFromEvent = function(event) {
		if (!this.observedShadowRoots) return;
		var path = this.getComposedPath(event);
		for (var i = 0; i < path.length; i++) {
			var element = path[i];
			if (element && element.shadowRoot) this.observeShadowRoot(element.shadowRoot);
		}
	};
	ShadowDOMObserver.prototype.observeShadowRoot = function(shadowRoot) {
		if (!this.observedShadowRoots || this.observedShadowRoots.has(shadowRoot)) return;
		var self = this;
		try {
			this.observedShadowRoots.add(shadowRoot);
			var observer = new window.MutationObserver(function() {
				self.changeCallback();
			});
			observer.observe(shadowRoot, this.observerConfig);
			this.shadowObservers.push(observer);
		} catch (e) {
			logger$1.critical("Error while observing shadow root", e);
		}
	};
	ShadowDOMObserver.prototype.start = function() {
		if (this.observedShadowRoots) return;
		if (!weakSetSupported()) {
			logger$1.critical("Shadow DOM observation unavailable: WeakSet not supported");
			return;
		}
		this.observedShadowRoots = /* @__PURE__ */ new WeakSet();
	};
	ShadowDOMObserver.prototype.stop = function() {
		if (!this.observedShadowRoots) return;
		for (var i = 0; i < this.shadowObservers.length; i++) try {
			this.shadowObservers[i].disconnect();
		} catch (e) {
			logger$1.critical("Error while disconnecting shadow DOM observer", e);
		}
		this.shadowObservers = [];
		this.observedShadowRoots = null;
	};
	/** @const */ var DEFAULT_DEAD_CLICK_TIMEOUT_MS = 500;
	/** @const */ var INTERACTION_EVENTS = [
		EV_CHANGE,
		EV_INPUT,
		EV_SUBMIT,
		EV_SELECT,
		EV_TOGGLE
	];
	/** @const */ var LAYOUT_EVENTS = [EV_SCROLLEND];
	/** @const */ var NAVIGATION_EVENTS = [EV_HASHCHANGE];
	/** @const */ var MUTATION_OBSERVER_CONFIG = {
		characterData: true,
		childList: true,
		subtree: true,
		attributes: true,
		attributeFilter: [
			"style",
			"class",
			"hidden",
			"checked",
			"selected",
			"value",
			"display",
			"visibility"
		]
	};
	function DeadClickTracker(onDeadClickCallback) {
		this.eventListeners = [];
		this.mutationObserver = null;
		this.shadowDOMObserver = null;
		this.isTracking = false;
		this.lastChangeEventTimestamp = 0;
		this.pendingClicks = [];
		this.onDeadClickCallback = onDeadClickCallback;
		this.processingActive = false;
		this.processingTimeout = null;
	}
	DeadClickTracker.prototype.addClick = function(event) {
		var element = this.shadowDOMObserver && this.shadowDOMObserver.getEventTarget(event);
		if (!element) element = event["target"] || event["srcElement"];
		if (!element || isDefinitelyNonInteractive(element)) return false;
		if (this.shadowDOMObserver) this.shadowDOMObserver.observeFromEvent(event);
		this.pendingClicks.push({
			element,
			event,
			timestamp: Date.now()
		});
		return true;
	};
	DeadClickTracker.prototype.trackClick = function(event, config) {
		if (!this.isTracking) return false;
		var added = this.addClick(event);
		if (added) this.triggerProcessing(config);
		return added;
	};
	DeadClickTracker.prototype.getDeadClicks = function(config) {
		if (this.pendingClicks.length === 0) return [];
		var timeoutMs = config["timeout_ms"];
		var now = Date.now();
		var clicksToEvaluate = this.pendingClicks.slice();
		this.pendingClicks = [];
		var deadClicks = [];
		for (var i = 0; i < clicksToEvaluate.length; i++) {
			var click = clicksToEvaluate[i];
			if (now - click.timestamp >= timeoutMs) {
				if (!this.hasChangesAfter(click.timestamp)) deadClicks.push(click);
			} else this.pendingClicks.push(click);
		}
		return deadClicks;
	};
	DeadClickTracker.prototype.hasChangesAfter = function(timestamp) {
		return this.lastChangeEventTimestamp >= timestamp - 100;
	};
	DeadClickTracker.prototype.recordChangeEvent = function() {
		this.lastChangeEventTimestamp = Date.now();
	};
	DeadClickTracker.prototype.triggerProcessing = function(config) {
		if (this.processingActive) return;
		this.processingActive = true;
		this.processRecursively(config);
	};
	DeadClickTracker.prototype.processRecursively = function(config) {
		if (!this.isTracking || !this.onDeadClickCallback) {
			this.processingActive = false;
			return;
		}
		var timeoutMs = config["timeout_ms"];
		var self = this;
		this.processingTimeout = setTimeout(function() {
			if (!self.processingActive) return;
			var deadClicks = self.getDeadClicks(config);
			for (var i = 0; i < deadClicks.length; i++) self.onDeadClickCallback(deadClicks[i].event);
			if (self.pendingClicks.length > 0) self.processRecursively(config);
			else self.processingActive = false;
		}, timeoutMs);
	};
	DeadClickTracker.prototype.startTracking = function() {
		if (this.isTracking) return;
		this.isTracking = true;
		var self = this;
		INTERACTION_EVENTS.forEach(function(event) {
			var handler = function() {
				self.recordChangeEvent();
			};
			document.addEventListener(event, handler, {
				capture: true,
				passive: true
			});
			self.eventListeners.push({
				target: document,
				event,
				handler,
				options: {
					capture: true,
					passive: true
				}
			});
		});
		NAVIGATION_EVENTS.forEach(function(event) {
			var handler = function() {
				self.recordChangeEvent();
			};
			window.addEventListener(event, handler);
			self.eventListeners.push({
				target: window,
				event,
				handler
			});
		});
		LAYOUT_EVENTS.forEach(function(event) {
			var handler = function() {
				self.recordChangeEvent();
			};
			window.addEventListener(event, handler, { passive: true });
			self.eventListeners.push({
				target: window,
				event,
				handler,
				options: { passive: true }
			});
		});
		var selectionHandler = function() {
			self.recordChangeEvent();
		};
		document.addEventListener("selectionchange", selectionHandler);
		self.eventListeners.push({
			target: document,
			event: "selectionchange",
			handler: selectionHandler
		});
		if (window.MutationObserver) try {
			this.mutationObserver = new window.MutationObserver(function() {
				self.recordChangeEvent();
			});
			this.mutationObserver.observe(document.body || document.documentElement, MUTATION_OBSERVER_CONFIG);
		} catch (e) {
			logger$1.critical("Error while setting up mutation observer", e);
		}
		if (window.customElements) try {
			this.shadowDOMObserver = new ShadowDOMObserver(function() {
				self.recordChangeEvent();
			}, MUTATION_OBSERVER_CONFIG);
			this.shadowDOMObserver.start();
		} catch (e) {
			logger$1.critical("Error while setting up shadow DOM observer", e);
			this.shadowDOMObserver = null;
		}
	};
	DeadClickTracker.prototype.stopTracking = function() {
		if (!this.isTracking) return;
		this.isTracking = false;
		this.pendingClicks = [];
		this.lastChangeEventTimestamp = 0;
		this.processingActive = false;
		if (this.processingTimeout) {
			clearTimeout(this.processingTimeout);
			this.processingTimeout = null;
		}
		for (var i = 0; i < this.eventListeners.length; i++) {
			var listener = this.eventListeners[i];
			try {
				listener.target.removeEventListener(listener.event, listener.handler, listener.options);
			} catch (e) {
				logger$1.critical("Error while removing event listener", e);
			}
		}
		this.eventListeners = [];
		if (this.mutationObserver) {
			try {
				this.mutationObserver.disconnect();
			} catch (e) {
				logger$1.critical("Error while disconnecting mutation observer", e);
			}
			this.mutationObserver = null;
		}
		if (this.shadowDOMObserver) {
			try {
				this.shadowDOMObserver.stop();
			} catch (e) {
				logger$1.critical("Error while stopping shadow DOM observer", e);
			}
			this.shadowDOMObserver = null;
		}
	};
	var AUTOCAPTURE_CONFIG_KEY = "autocapture";
	var LEGACY_PAGEVIEW_CONFIG_KEY = "track_pageview";
	var PAGEVIEW_OPTION_FULL_URL = "full-url";
	var PAGEVIEW_OPTION_URL_WITH_PATH_AND_QUERY_STRING = "url-with-path-and-query-string";
	var PAGEVIEW_OPTION_URL_WITH_PATH = "url-with-path";
	var CONFIG_ALLOW_ELEMENT_CALLBACK = "allow_element_callback";
	var CONFIG_ALLOW_SELECTORS = "allow_selectors";
	var CONFIG_ALLOW_URL_REGEXES = "allow_url_regexes";
	var CONFIG_BLOCK_ATTRS = "block_attrs";
	var CONFIG_BLOCK_ELEMENT_CALLBACK = "block_element_callback";
	var CONFIG_BLOCK_SELECTORS = "block_selectors";
	var CONFIG_BLOCK_URL_REGEXES = "block_url_regexes";
	var CONFIG_CAPTURE_EXTRA_ATTRS = "capture_extra_attrs";
	var CONFIG_CAPTURE_TEXT_CONTENT = "capture_text_content";
	var CONFIG_SCROLL_CAPTURE_ALL = "scroll_capture_all";
	var CONFIG_SCROLL_CHECKPOINTS = "scroll_depth_percent_checkpoints";
	var CONFIG_TRACK_CLICK = "click";
	var CONFIG_TRACK_DEAD_CLICK = "dead_click";
	var CONFIG_TRACK_INPUT = "input";
	var CONFIG_TRACK_PAGEVIEW = "pageview";
	var CONFIG_TRACK_RAGE_CLICK = "rage_click";
	var CONFIG_TRACK_SCROLL = "scroll";
	var CONFIG_TRACK_PAGE_LEAVE = "page_leave";
	var CONFIG_TRACK_SUBMIT = "submit";
	var CONFIG_DEFAULTS$1 = {};
	CONFIG_DEFAULTS$1[CONFIG_ALLOW_SELECTORS] = [];
	CONFIG_DEFAULTS$1[CONFIG_ALLOW_URL_REGEXES] = [];
	CONFIG_DEFAULTS$1[CONFIG_BLOCK_ATTRS] = [];
	CONFIG_DEFAULTS$1[CONFIG_BLOCK_ELEMENT_CALLBACK] = null;
	CONFIG_DEFAULTS$1[CONFIG_BLOCK_SELECTORS] = [];
	CONFIG_DEFAULTS$1[CONFIG_BLOCK_URL_REGEXES] = [];
	CONFIG_DEFAULTS$1[CONFIG_CAPTURE_EXTRA_ATTRS] = [];
	CONFIG_DEFAULTS$1[CONFIG_CAPTURE_TEXT_CONTENT] = false;
	CONFIG_DEFAULTS$1[CONFIG_SCROLL_CAPTURE_ALL] = false;
	CONFIG_DEFAULTS$1[CONFIG_SCROLL_CHECKPOINTS] = [
		25,
		50,
		75,
		100
	];
	CONFIG_DEFAULTS$1[CONFIG_TRACK_CLICK] = true;
	CONFIG_DEFAULTS$1[CONFIG_TRACK_DEAD_CLICK] = true;
	CONFIG_DEFAULTS$1[CONFIG_TRACK_INPUT] = true;
	CONFIG_DEFAULTS$1[CONFIG_TRACK_PAGEVIEW] = PAGEVIEW_OPTION_FULL_URL;
	CONFIG_DEFAULTS$1[CONFIG_TRACK_RAGE_CLICK] = true;
	CONFIG_DEFAULTS$1[CONFIG_TRACK_SCROLL] = true;
	CONFIG_DEFAULTS$1[CONFIG_TRACK_PAGE_LEAVE] = false;
	CONFIG_DEFAULTS$1[CONFIG_TRACK_SUBMIT] = true;
	var DEFAULT_PROPS = { "$mp_autocapture": true };
	var MP_EV_CLICK = "$mp_click";
	var MP_EV_DEAD_CLICK = "$mp_dead_click";
	var MP_EV_INPUT = "$mp_input_change";
	var MP_EV_RAGE_CLICK = "$mp_rage_click";
	var MP_EV_SCROLL = "$mp_scroll";
	var MP_EV_SUBMIT = "$mp_submit";
	var MP_EV_PAGE_LEAVE = "$mp_page_leave";
	/**
	* Autocapture: manages automatic event tracking
	* @constructor
	*/
	var Autocapture = function(mp) {
		this.mp = mp;
		this.maxScrollViewDepth = 0;
		this.hasTrackedScrollSession = false;
		this.previousScrollHeight = 0;
	};
	Autocapture.prototype.init = function() {
		if (!minDOMApisSupported()) {
			logger$1.critical("Autocapture unavailable: missing required DOM APIs");
			return;
		}
		this.initPageListeners();
		this.initPageviewTracking();
		this.initClickTracking();
		this.initDeadClickTracking();
		this.initInputTracking();
		this.initScrollTracking();
		this.initSubmitTracking();
		this.initRageClickTracking();
		this.initPageLeaveTracking();
	};
	Autocapture.prototype.getFullConfig = function() {
		var autocaptureConfig = this.mp.get_config(AUTOCAPTURE_CONFIG_KEY);
		if (!autocaptureConfig) return {};
		else if (_$1.isObject(autocaptureConfig)) return _$1.extend({}, CONFIG_DEFAULTS$1, autocaptureConfig);
		else return CONFIG_DEFAULTS$1;
	};
	Autocapture.prototype.getConfig = function(key) {
		return this.getFullConfig()[key];
	};
	Autocapture.prototype.currentUrlBlocked = function() {
		var i;
		var currentUrl = _$1.info.currentUrl();
		var allowUrlRegexes = this.getConfig(CONFIG_ALLOW_URL_REGEXES) || [];
		if (allowUrlRegexes.length) {
			var allowed = false;
			for (i = 0; i < allowUrlRegexes.length; i++) {
				var allowRegex = allowUrlRegexes[i];
				try {
					if (currentUrl.match(allowRegex)) {
						allowed = true;
						break;
					}
				} catch (err) {
					logger$1.critical("Error while checking block URL regex: " + allowRegex, err);
					return true;
				}
			}
			if (!allowed) return true;
		}
		var blockUrlRegexes = this.getConfig(CONFIG_BLOCK_URL_REGEXES) || [];
		if (!blockUrlRegexes || !blockUrlRegexes.length) return false;
		for (i = 0; i < blockUrlRegexes.length; i++) try {
			if (currentUrl.match(blockUrlRegexes[i])) return true;
		} catch (err) {
			logger$1.critical("Error while checking block URL regex: " + blockUrlRegexes[i], err);
			return true;
		}
		return false;
	};
	Autocapture.prototype.pageviewTrackingConfig = function() {
		if (this.mp.get_config(AUTOCAPTURE_CONFIG_KEY)) return this.getConfig(CONFIG_TRACK_PAGEVIEW);
		else return this.mp.get_config(LEGACY_PAGEVIEW_CONFIG_KEY);
	};
	Autocapture.prototype.trackDomEvent = function(ev, mpEventName) {
		if (this.currentUrlBlocked()) return;
		var isCapturedForHeatMap = this.mp.is_recording_heatmap_data() && (mpEventName === MP_EV_CLICK && !this.getConfig(CONFIG_TRACK_CLICK) || mpEventName === MP_EV_RAGE_CLICK && !this._getClickTrackingConfig(CONFIG_TRACK_RAGE_CLICK) || mpEventName === MP_EV_DEAD_CLICK && !this._getClickTrackingConfig(CONFIG_TRACK_DEAD_CLICK));
		var props = getPropsForDOMEvent(ev, {
			allowElementCallback: this.getConfig(CONFIG_ALLOW_ELEMENT_CALLBACK),
			allowSelectors: this.getConfig(CONFIG_ALLOW_SELECTORS),
			blockAttrs: this.getConfig(CONFIG_BLOCK_ATTRS),
			blockElementCallback: this.getConfig(CONFIG_BLOCK_ELEMENT_CALLBACK),
			blockSelectors: this.getConfig(CONFIG_BLOCK_SELECTORS),
			captureExtraAttrs: this.getConfig(CONFIG_CAPTURE_EXTRA_ATTRS),
			captureTextContent: this.getConfig(CONFIG_CAPTURE_TEXT_CONTENT),
			capturedForHeatMap: isCapturedForHeatMap
		});
		if (props) {
			_$1.extend(props, DEFAULT_PROPS);
			this.mp.track(mpEventName, props);
		}
	};
	Autocapture.prototype.initPageListeners = function() {
		win.removeEventListener(EV_POPSTATE, this.listenerPopstate);
		win.removeEventListener(EV_HASHCHANGE, this.listenerHashchange);
		if (!this.pageviewTrackingConfig() && !this.getConfig(CONFIG_TRACK_PAGE_LEAVE) && !this.mp.get_config("record_heatmap_data")) return;
		this.listenerPopstate = function() {
			win.dispatchEvent(new Event(EV_MP_LOCATION_CHANGE));
		};
		this.listenerHashchange = function() {
			win.dispatchEvent(new Event(EV_MP_LOCATION_CHANGE));
		};
		win.addEventListener(EV_POPSTATE, this.listenerPopstate);
		win.addEventListener(EV_HASHCHANGE, this.listenerHashchange);
		var nativePushState = win.history.pushState;
		if (typeof nativePushState === "function") win.history.pushState = function(state, unused, url) {
			nativePushState.call(win.history, state, unused, url);
			win.dispatchEvent(new Event(EV_MP_LOCATION_CHANGE));
		};
		var nativeReplaceState = win.history.replaceState;
		if (typeof nativeReplaceState === "function") win.history.replaceState = function(state, unused, url) {
			nativeReplaceState.call(win.history, state, unused, url);
			win.dispatchEvent(new Event(EV_MP_LOCATION_CHANGE));
		};
	};
	Autocapture.prototype._getClickTrackingConfig = function(configKey) {
		var config = this.getConfig(configKey);
		if (!config) return null;
		if (config === true) return {};
		if (typeof config === "object") return config;
		return {};
	};
	Autocapture.prototype._trackPageLeave = function(ev, currentUrl, currentScrollHeight) {
		if (this.hasTrackedScrollSession) return;
		if (!this.getConfig(CONFIG_TRACK_PAGE_LEAVE) && !this.mp.is_recording_heatmap_data()) return;
		this.hasTrackedScrollSession = true;
		var viewportHeight = Math.max(document$1.documentElement.clientHeight, win.innerHeight || 0);
		var scrollPercentage = Math.round(Math.max(this.maxScrollViewDepth - viewportHeight, 0) / (currentScrollHeight - viewportHeight) * 100);
		var foldLinePercentage = Math.round(viewportHeight / currentScrollHeight * 100);
		if (currentScrollHeight <= viewportHeight) {
			scrollPercentage = 100;
			foldLinePercentage = 100;
		}
		var props = _$1.extend({
			"$max_scroll_view_depth": this.maxScrollViewDepth,
			"$max_scroll_percentage": scrollPercentage,
			"$fold_line_percentage": foldLinePercentage,
			"$scroll_height": currentScrollHeight,
			"$event_type": ev.type,
			"$current_url": currentUrl || _$1.info.currentUrl(),
			"$viewportHeight": viewportHeight,
			"$viewportWidth": Math.max(document$1.documentElement.clientWidth, win.innerWidth || 0),
			"$captured_for_heatmap": this.mp.is_recording_heatmap_data()
		}, DEFAULT_PROPS);
		this.mp.track(MP_EV_PAGE_LEAVE, props, { transport: "sendBeacon" });
	};
	Autocapture.prototype._initScrollDepthTracking = function() {
		win.removeEventListener(EV_SCROLL, this.listenerScrollDepth);
		win.removeEventListener(EV_SCROLLEND, this.listenerScrollDepth);
		if (!this.mp.get_config("record_heatmap_data")) return;
		logger$1.log("Initializing scroll depth tracking");
		this.maxScrollViewDepth = Math.max(document$1.documentElement.clientHeight, win.innerHeight || 0);
		var scrollEndPolyfill = getPolyfillScrollEndFunction(function() {
			if (this.currentUrlBlocked()) return;
			var scrollViewHeight = Math.max(document$1.documentElement.clientHeight, win.innerHeight || 0) + win.scrollY;
			if (scrollViewHeight > this.maxScrollViewDepth) this.maxScrollViewDepth = scrollViewHeight;
			this.previousScrollHeight = document$1.body.scrollHeight;
		}.bind(this));
		this.listenerScrollDepth = scrollEndPolyfill.listener;
		win.addEventListener(scrollEndPolyfill.eventType, this.listenerScrollDepth);
	};
	Autocapture.prototype.initClickTracking = function() {
		win.removeEventListener(EV_CLICK, this.listenerClick);
		if (!this.getConfig(CONFIG_TRACK_CLICK) && !this.mp.get_config("record_heatmap_data")) return;
		logger$1.log("Initializing click tracking");
		this.listenerClick = function(ev) {
			if (!this.getConfig(CONFIG_TRACK_CLICK) && !this.mp.is_recording_heatmap_data()) return;
			this.trackDomEvent(ev, MP_EV_CLICK);
		}.bind(this);
		win.addEventListener(EV_CLICK, this.listenerClick);
	};
	Autocapture.prototype.initDeadClickTracking = function() {
		if (!this._getClickTrackingConfig(CONFIG_TRACK_DEAD_CLICK) && !this.mp.get_config("record_heatmap_data")) {
			this.stopDeadClickTracking();
			return;
		}
		logger$1.log("Initializing dead click tracking");
		if (!this._deadClickTracker) {
			this._deadClickTracker = new DeadClickTracker(function(deadClickEvent) {
				this.trackDomEvent(deadClickEvent, MP_EV_DEAD_CLICK);
			}.bind(this));
			this._deadClickTracker.startTracking();
		}
		if (!this.listenerDeadClick) {
			this.listenerDeadClick = function(ev) {
				var currentDeadClickConfig = this._getClickTrackingConfig(CONFIG_TRACK_DEAD_CLICK);
				if (!currentDeadClickConfig && !this.mp.is_recording_heatmap_data()) return;
				if (this.currentUrlBlocked()) return;
				var normalizedConfig = currentDeadClickConfig || {};
				if (!normalizedConfig["timeout_ms"]) normalizedConfig["timeout_ms"] = DEFAULT_DEAD_CLICK_TIMEOUT_MS;
				this._deadClickTracker.trackClick(ev, normalizedConfig);
			}.bind(this);
			win.addEventListener(EV_CLICK, this.listenerDeadClick);
		}
	};
	Autocapture.prototype.initInputTracking = function() {
		win.removeEventListener(EV_CHANGE, this.listenerChange);
		if (!this.getConfig(CONFIG_TRACK_INPUT)) return;
		logger$1.log("Initializing input tracking");
		this.listenerChange = function(ev) {
			if (!this.getConfig(CONFIG_TRACK_INPUT)) return;
			this.trackDomEvent(ev, MP_EV_INPUT);
		}.bind(this);
		win.addEventListener(EV_CHANGE, this.listenerChange);
	};
	Autocapture.prototype.initPageviewTracking = function() {
		win.removeEventListener(EV_MP_LOCATION_CHANGE, this.listenerLocationchange);
		if (!this.pageviewTrackingConfig()) return;
		logger$1.log("Initializing pageview tracking");
		var previousTrackedUrl = "";
		var tracked = false;
		if (!this.currentUrlBlocked()) tracked = this.mp.track_pageview(DEFAULT_PROPS);
		if (tracked) previousTrackedUrl = _$1.info.currentUrl();
		this.listenerLocationchange = safewrap(function() {
			if (this.currentUrlBlocked()) return;
			var currentUrl = _$1.info.currentUrl();
			var shouldTrack = false;
			var didPathChange = currentUrl.split("#")[0].split("?")[0] !== previousTrackedUrl.split("#")[0].split("?")[0];
			var trackPageviewOption = this.pageviewTrackingConfig();
			if (trackPageviewOption === PAGEVIEW_OPTION_FULL_URL) shouldTrack = currentUrl !== previousTrackedUrl;
			else if (trackPageviewOption === PAGEVIEW_OPTION_URL_WITH_PATH_AND_QUERY_STRING) shouldTrack = currentUrl.split("#")[0] !== previousTrackedUrl.split("#")[0];
			else if (trackPageviewOption === PAGEVIEW_OPTION_URL_WITH_PATH) shouldTrack = didPathChange;
			if (shouldTrack) {
				if (this.mp.track_pageview(DEFAULT_PROPS)) previousTrackedUrl = currentUrl;
				if (didPathChange) {
					this.lastScrollCheckpoint = 0;
					logger$1.log("Path change: re-initializing scroll depth checkpoints");
				}
			}
		}.bind(this));
		win.addEventListener(EV_MP_LOCATION_CHANGE, this.listenerLocationchange);
	};
	Autocapture.prototype.initRageClickTracking = function() {
		win.removeEventListener(EV_CLICK, this.listenerRageClick);
		if (!this._getClickTrackingConfig(CONFIG_TRACK_RAGE_CLICK) && !this.mp.get_config("record_heatmap_data")) return;
		logger$1.log("Initializing rage click tracking");
		if (!this._rageClickTracker) this._rageClickTracker = new RageClickTracker();
		this.listenerRageClick = function(ev) {
			var currentRageClickConfig = this._getClickTrackingConfig(CONFIG_TRACK_RAGE_CLICK);
			if (!currentRageClickConfig && !this.mp.is_recording_heatmap_data()) return;
			if (this.currentUrlBlocked()) return;
			if (this._rageClickTracker.isRageClick(ev["pageX"], ev["pageY"], currentRageClickConfig)) this.trackDomEvent(ev, MP_EV_RAGE_CLICK);
		}.bind(this);
		win.addEventListener(EV_CLICK, this.listenerRageClick);
	};
	Autocapture.prototype.initScrollTracking = function() {
		win.removeEventListener(EV_SCROLLEND, this.listenerScroll);
		win.removeEventListener(EV_SCROLL, this.listenerScroll);
		if (!this.getConfig(CONFIG_TRACK_SCROLL)) return;
		logger$1.log("Initializing scroll tracking");
		this.lastScrollCheckpoint = 0;
		var scrollEndPolyfill = getPolyfillScrollEndFunction(function() {
			if (!this.getConfig(CONFIG_TRACK_SCROLL)) return;
			if (this.currentUrlBlocked()) return;
			var shouldTrack = this.getConfig(CONFIG_SCROLL_CAPTURE_ALL);
			var scrollCheckpoints = (this.getConfig(CONFIG_SCROLL_CHECKPOINTS) || []).slice().sort(function(a, b) {
				return a - b;
			});
			var scrollTop = win.scrollY;
			var props = _$1.extend({ "$scroll_top": scrollTop }, DEFAULT_PROPS);
			try {
				var scrollHeight = document$1.body.scrollHeight;
				var scrollPercentage = Math.round(scrollTop / (scrollHeight - win.innerHeight) * 100);
				props["$scroll_height"] = scrollHeight;
				props["$scroll_percentage"] = scrollPercentage;
				if (scrollPercentage > this.lastScrollCheckpoint) for (var i = 0; i < scrollCheckpoints.length; i++) {
					var checkpoint = scrollCheckpoints[i];
					if (scrollPercentage >= checkpoint && this.lastScrollCheckpoint < checkpoint) {
						props["$scroll_checkpoint"] = checkpoint;
						this.lastScrollCheckpoint = checkpoint;
						shouldTrack = true;
					}
				}
			} catch (err) {
				logger$1.critical("Error while calculating scroll percentage", err);
			}
			if (shouldTrack) this.mp.track(MP_EV_SCROLL, props);
		}.bind(this));
		this.listenerScroll = scrollEndPolyfill.listener;
		win.addEventListener(scrollEndPolyfill.eventType, this.listenerScroll);
	};
	Autocapture.prototype.initSubmitTracking = function() {
		win.removeEventListener(EV_SUBMIT, this.listenerSubmit);
		if (!this.getConfig(CONFIG_TRACK_SUBMIT)) return;
		logger$1.log("Initializing submit tracking");
		this.listenerSubmit = function(ev) {
			if (!this.getConfig(CONFIG_TRACK_SUBMIT)) return;
			this.trackDomEvent(ev, MP_EV_SUBMIT);
		}.bind(this);
		win.addEventListener(EV_SUBMIT, this.listenerSubmit);
	};
	Autocapture.prototype.initPageLeaveTracking = function() {
		document$1.removeEventListener(EV_VISIBILITYCHANGE, this.listenerPageLeaveVisibilitychange);
		win.removeEventListener(EV_MP_LOCATION_CHANGE, this.listenerPageLeaveLocationchange);
		win.removeEventListener(EV_LOAD, this.listenerPageLoad);
		if (!this.getConfig(CONFIG_TRACK_PAGE_LEAVE) && !this.mp.get_config("record_heatmap_data")) return;
		logger$1.log("Initializing page visibility tracking.");
		this._initScrollDepthTracking();
		var previousTrackedUrl = _$1.info.currentUrl();
		this.listenerPageLoad = function() {
			this.previousScrollHeight = document$1.body.scrollHeight;
		}.bind(this);
		win.addEventListener(EV_LOAD, this.listenerPageLoad);
		this.listenerPageLeaveLocationchange = safewrap(function(ev) {
			if (this.currentUrlBlocked()) return;
			var currentUrl = _$1.info.currentUrl();
			if (currentUrl !== previousTrackedUrl) {
				this._trackPageLeave(ev, previousTrackedUrl, this.previousScrollHeight);
				previousTrackedUrl = currentUrl;
				this.maxScrollViewDepth = Math.max(document$1.documentElement.clientHeight, win.innerHeight || 0);
				this.previousScrollHeight = document$1.body.scrollHeight;
				this.hasTrackedScrollSession = false;
			}
		}.bind(this));
		win.addEventListener(EV_MP_LOCATION_CHANGE, this.listenerPageLeaveLocationchange);
		this.listenerPageLeaveVisibilitychange = function(ev) {
			if (document$1.hidden) this._trackPageLeave(ev, previousTrackedUrl, this.previousScrollHeight);
		}.bind(this);
		document$1.addEventListener(EV_VISIBILITYCHANGE, this.listenerPageLeaveVisibilitychange);
	};
	Autocapture.prototype.stopDeadClickTracking = function() {
		if (this.listenerDeadClick) {
			win.removeEventListener(EV_CLICK, this.listenerDeadClick);
			this.listenerDeadClick = null;
		}
		if (this._deadClickTracker) {
			this._deadClickTracker.stopTracking();
			this._deadClickTracker = null;
		}
	};
	safewrapClass(Autocapture);
	var logger = console_with_prefix("flags");
	var FLAGS_CONFIG_KEY = "flags";
	var CONFIG_CONTEXT = "context";
	var CONFIG_DEFAULTS = {};
	CONFIG_DEFAULTS[CONFIG_CONTEXT] = {};
	/**
	* FeatureFlagManager: support for Mixpanel's feature flagging product
	* @constructor
	*/
	var FeatureFlagManager = function(initOptions) {
		this.fetch = win["fetch"];
		this.getFullApiRoute = initOptions.getFullApiRoute;
		this.getMpConfig = initOptions.getConfigFunc;
		this.setMpConfig = initOptions.setConfigFunc;
		this.getMpProperty = initOptions.getPropertyFunc;
		this.track = initOptions.trackingFunc;
	};
	FeatureFlagManager.prototype.init = function() {
		if (!this.minApisSupported()) {
			logger.critical("Feature Flags unavailable: missing minimum required APIs");
			return;
		}
		this.flags = null;
		this.fetchFlags();
		this.trackedFeatures = /* @__PURE__ */ new Set();
	};
	FeatureFlagManager.prototype.getFullConfig = function() {
		var ffConfig = this.getMpConfig(FLAGS_CONFIG_KEY);
		if (!ffConfig) return {};
		else if (_$1.isObject(ffConfig)) return _$1.extend({}, CONFIG_DEFAULTS, ffConfig);
		else return CONFIG_DEFAULTS;
	};
	FeatureFlagManager.prototype.getConfig = function(key) {
		return this.getFullConfig()[key];
	};
	FeatureFlagManager.prototype.isSystemEnabled = function() {
		return !!this.getMpConfig(FLAGS_CONFIG_KEY);
	};
	FeatureFlagManager.prototype.updateContext = function(newContext, options) {
		if (!this.isSystemEnabled()) {
			logger.critical("Feature Flags not enabled, cannot update context");
			return Promise.resolve();
		}
		var ffConfig = this.getMpConfig(FLAGS_CONFIG_KEY);
		if (!_$1.isObject(ffConfig)) ffConfig = {};
		var oldContext = options && options["replace"] ? {} : this.getConfig(CONFIG_CONTEXT);
		ffConfig[CONFIG_CONTEXT] = _$1.extend({}, oldContext, newContext);
		this.setMpConfig(FLAGS_CONFIG_KEY, ffConfig);
		return this.fetchFlags();
	};
	FeatureFlagManager.prototype.areFlagsReady = function() {
		if (!this.isSystemEnabled()) logger.error("Feature Flags not enabled");
		return !!this.flags;
	};
	FeatureFlagManager.prototype.fetchFlags = function() {
		if (!this.isSystemEnabled()) return Promise.resolve();
		var distinctId = this.getMpProperty("distinct_id");
		var deviceId = this.getMpProperty("$device_id");
		var traceparent = generateTraceparent();
		logger.log("Fetching flags for distinct ID: " + distinctId);
		var context = _$1.extend({
			"distinct_id": distinctId,
			"device_id": deviceId
		}, this.getConfig(CONFIG_CONTEXT));
		var searchParams = new URLSearchParams();
		searchParams.set("context", JSON.stringify(context));
		searchParams.set("token", this.getMpConfig("token"));
		searchParams.set("mp_lib", "web");
		searchParams.set("$lib_version", Config.LIB_VERSION);
		var url = this.getFullApiRoute() + "?" + searchParams.toString();
		this._fetchInProgressStartTime = Date.now();
		this.fetchPromise = this.fetch.call(win, url, {
			"method": "GET",
			"headers": {
				"Authorization": "Basic " + btoa(this.getMpConfig("token") + ":"),
				"traceparent": traceparent
			}
		}).then(function(response) {
			this.markFetchComplete();
			return response.json().then(function(responseBody) {
				var responseFlags = responseBody["flags"];
				if (!responseFlags) throw new Error("No flags in API response");
				var flags = /* @__PURE__ */ new Map();
				_$1.each(responseFlags, function(data, key) {
					flags.set(key, {
						"key": data["variant_key"],
						"value": data["variant_value"],
						"experiment_id": data["experiment_id"],
						"is_experiment_active": data["is_experiment_active"],
						"is_qa_tester": data["is_qa_tester"]
					});
				});
				this.flags = flags;
				this._traceparent = traceparent;
			}.bind(this)).catch(function(error) {
				this.markFetchComplete();
				logger.error(error);
			}.bind(this));
		}.bind(this)).catch(function(error) {
			this.markFetchComplete();
			logger.error(error);
		}.bind(this));
		return this.fetchPromise;
	};
	FeatureFlagManager.prototype.markFetchComplete = function() {
		if (!this._fetchInProgressStartTime) {
			logger.error("Fetch in progress started time not set, cannot mark fetch complete");
			return;
		}
		this._fetchStartTime = this._fetchInProgressStartTime;
		this._fetchCompleteTime = Date.now();
		this._fetchLatency = this._fetchCompleteTime - this._fetchStartTime;
		this._fetchInProgressStartTime = null;
	};
	FeatureFlagManager.prototype.getVariant = function(featureName, fallback) {
		if (!this.fetchPromise) return new Promise(function(resolve) {
			logger.critical("Feature Flags not initialized");
			resolve(fallback);
		});
		return this.fetchPromise.then(function() {
			return this.getVariantSync(featureName, fallback);
		}.bind(this)).catch(function(error) {
			logger.error(error);
			return fallback;
		});
	};
	FeatureFlagManager.prototype.getVariantSync = function(featureName, fallback) {
		if (!this.areFlagsReady()) {
			logger.log("Flags not loaded yet");
			return fallback;
		}
		var feature = this.flags.get(featureName);
		if (!feature) {
			logger.log("No flag found: \"" + featureName + "\"");
			return fallback;
		}
		this.trackFeatureCheck(featureName, feature);
		return feature;
	};
	FeatureFlagManager.prototype.getVariantValue = function(featureName, fallbackValue) {
		return this.getVariant(featureName, { "value": fallbackValue }).then(function(feature) {
			return feature["value"];
		}).catch(function(error) {
			logger.error(error);
			return fallbackValue;
		});
	};
	FeatureFlagManager.prototype.getFeatureData = function(featureName, fallbackValue) {
		logger.critical("mixpanel.flags.get_feature_data() is deprecated and will be removed in a future release. Use mixpanel.flags.get_variant_value() instead.");
		return this.getVariantValue(featureName, fallbackValue);
	};
	FeatureFlagManager.prototype.getVariantValueSync = function(featureName, fallbackValue) {
		return this.getVariantSync(featureName, { "value": fallbackValue })["value"];
	};
	FeatureFlagManager.prototype.isEnabled = function(featureName, fallbackValue) {
		return this.getVariantValue(featureName).then(function() {
			return this.isEnabledSync(featureName, fallbackValue);
		}.bind(this)).catch(function(error) {
			logger.error(error);
			return fallbackValue;
		});
	};
	FeatureFlagManager.prototype.isEnabledSync = function(featureName, fallbackValue) {
		fallbackValue = fallbackValue || false;
		var val = this.getVariantValueSync(featureName, fallbackValue);
		if (val !== true && val !== false) {
			logger.error("Feature flag \"" + featureName + "\" value: " + val + " is not a boolean; returning fallback value: " + fallbackValue);
			val = fallbackValue;
		}
		return val;
	};
	FeatureFlagManager.prototype.trackFeatureCheck = function(featureName, feature) {
		if (this.trackedFeatures.has(featureName)) return;
		this.trackedFeatures.add(featureName);
		var trackingProperties = {
			"Experiment name": featureName,
			"Variant name": feature["key"],
			"$experiment_type": "feature_flag",
			"Variant fetch start time": new Date(this._fetchStartTime).toISOString(),
			"Variant fetch complete time": new Date(this._fetchCompleteTime).toISOString(),
			"Variant fetch latency (ms)": this._fetchLatency,
			"Variant fetch traceparent": this._traceparent
		};
		if (feature["experiment_id"] !== "undefined") trackingProperties["$experiment_id"] = feature["experiment_id"];
		if (feature["is_experiment_active"] !== "undefined") trackingProperties["$is_experiment_active"] = feature["is_experiment_active"];
		if (feature["is_qa_tester"] !== "undefined") trackingProperties["$is_qa_tester"] = feature["is_qa_tester"];
		this.track("$experiment_started", trackingProperties);
	};
	FeatureFlagManager.prototype.minApisSupported = function() {
		return !!this.fetch && typeof Promise !== "undefined" && typeof Map !== "undefined" && typeof Set !== "undefined";
	};
	safewrapClass(FeatureFlagManager);
	FeatureFlagManager.prototype["are_flags_ready"] = FeatureFlagManager.prototype.areFlagsReady;
	FeatureFlagManager.prototype["get_variant"] = FeatureFlagManager.prototype.getVariant;
	FeatureFlagManager.prototype["get_variant_sync"] = FeatureFlagManager.prototype.getVariantSync;
	FeatureFlagManager.prototype["get_variant_value"] = FeatureFlagManager.prototype.getVariantValue;
	FeatureFlagManager.prototype["get_variant_value_sync"] = FeatureFlagManager.prototype.getVariantValueSync;
	FeatureFlagManager.prototype["is_enabled"] = FeatureFlagManager.prototype.isEnabled;
	FeatureFlagManager.prototype["is_enabled_sync"] = FeatureFlagManager.prototype.isEnabledSync;
	FeatureFlagManager.prototype["update_context"] = FeatureFlagManager.prototype.updateContext;
	FeatureFlagManager.prototype["get_feature_data"] = FeatureFlagManager.prototype.getFeatureData;
	/**
	* DomTracker Object
	* @constructor
	*/
	var DomTracker = function() {};
	DomTracker.prototype.create_properties = function() {};
	DomTracker.prototype.event_handler = function() {};
	DomTracker.prototype.after_track_handler = function() {};
	DomTracker.prototype.init = function(mixpanel_instance) {
		this.mp = mixpanel_instance;
		return this;
	};
	/**
	* @param {Object|string} query
	* @param {string} event_name
	* @param {Object=} properties
	* @param {function=} user_callback
	*/
	DomTracker.prototype.track = function(query, event_name, properties, user_callback) {
		var that = this;
		var elements = _$1.dom_query(query);
		if (elements.length === 0) {
			console$1.error("The DOM query (" + query + ") returned 0 elements");
			return;
		}
		_$1.each(elements, function(element) {
			_$1.register_event(element, this.override_event, function(e) {
				var options = {};
				var props = that.create_properties(properties, this);
				var timeout = that.mp.get_config("track_links_timeout");
				that.event_handler(e, this, options);
				window.setTimeout(that.track_callback(user_callback, props, options, true), timeout);
				that.mp.track(event_name, props, that.track_callback(user_callback, props, options));
			});
		}, this);
		return true;
	};
	/**
	* @param {function} user_callback
	* @param {Object} props
	* @param {boolean=} timeout_occured
	*/
	DomTracker.prototype.track_callback = function(user_callback, props, options, timeout_occured) {
		timeout_occured = timeout_occured || false;
		var that = this;
		return function() {
			if (options.callback_fired) return;
			options.callback_fired = true;
			if (user_callback && user_callback(timeout_occured, props) === false) return;
			that.after_track_handler(props, options, timeout_occured);
		};
	};
	DomTracker.prototype.create_properties = function(properties, element) {
		var props;
		if (typeof properties === "function") props = properties(element);
		else props = _$1.extend({}, properties);
		return props;
	};
	/**
	* LinkTracker Object
	* @constructor
	* @extends DomTracker
	*/
	var LinkTracker = function() {
		this.override_event = "click";
	};
	_$1.inherit(LinkTracker, DomTracker);
	LinkTracker.prototype.create_properties = function(properties, element) {
		var props = LinkTracker.superclass.create_properties.apply(this, arguments);
		if (element.href) props["url"] = element.href;
		return props;
	};
	LinkTracker.prototype.event_handler = function(evt, element, options) {
		options.new_tab = evt.which === 2 || evt.metaKey || evt.ctrlKey || element.target === "_blank";
		options.href = element.href;
		if (!options.new_tab) evt.preventDefault();
	};
	LinkTracker.prototype.after_track_handler = function(props, options) {
		if (options.new_tab) return;
		setTimeout(function() {
			window.location = options.href;
		}, 0);
	};
	/**
	* FormTracker Object
	* @constructor
	* @extends DomTracker
	*/
	var FormTracker = function() {
		this.override_event = "submit";
	};
	_$1.inherit(FormTracker, DomTracker);
	FormTracker.prototype.event_handler = function(evt, element, options) {
		options.element = element;
		evt.preventDefault();
	};
	FormTracker.prototype.after_track_handler = function(props, options) {
		setTimeout(function() {
			options.element.submit();
		}, 0);
	};
	/** @const */ var SET_ACTION = "$set";
	/** @const */ var SET_ONCE_ACTION = "$set_once";
	/** @const */ var UNSET_ACTION = "$unset";
	/** @const */ var ADD_ACTION = "$add";
	/** @const */ var APPEND_ACTION = "$append";
	/** @const */ var UNION_ACTION = "$union";
	/** @const */ var REMOVE_ACTION = "$remove";
	/** @const */ var DELETE_ACTION = "$delete";
	var apiActions = {
		set_action: function(prop, to) {
			var data = {};
			var $set = {};
			if (_$1.isObject(prop)) _$1.each(prop, function(v, k) {
				if (!this._is_reserved_property(k)) $set[k] = v;
			}, this);
			else $set[prop] = to;
			data[SET_ACTION] = $set;
			return data;
		},
		unset_action: function(prop) {
			var data = {};
			var $unset = [];
			if (!_$1.isArray(prop)) prop = [prop];
			_$1.each(prop, function(k) {
				if (!this._is_reserved_property(k)) $unset.push(k);
			}, this);
			data[UNSET_ACTION] = $unset;
			return data;
		},
		set_once_action: function(prop, to) {
			var data = {};
			var $set_once = {};
			if (_$1.isObject(prop)) _$1.each(prop, function(v, k) {
				if (!this._is_reserved_property(k)) $set_once[k] = v;
			}, this);
			else $set_once[prop] = to;
			data[SET_ONCE_ACTION] = $set_once;
			return data;
		},
		union_action: function(list_name, values) {
			var data = {};
			var $union = {};
			if (_$1.isObject(list_name)) _$1.each(list_name, function(v, k) {
				if (!this._is_reserved_property(k)) $union[k] = _$1.isArray(v) ? v : [v];
			}, this);
			else $union[list_name] = _$1.isArray(values) ? values : [values];
			data[UNION_ACTION] = $union;
			return data;
		},
		append_action: function(list_name, value) {
			var data = {};
			var $append = {};
			if (_$1.isObject(list_name)) _$1.each(list_name, function(v, k) {
				if (!this._is_reserved_property(k)) $append[k] = v;
			}, this);
			else $append[list_name] = value;
			data[APPEND_ACTION] = $append;
			return data;
		},
		remove_action: function(list_name, value) {
			var data = {};
			var $remove = {};
			if (_$1.isObject(list_name)) _$1.each(list_name, function(v, k) {
				if (!this._is_reserved_property(k)) $remove[k] = v;
			}, this);
			else $remove[list_name] = value;
			data[REMOVE_ACTION] = $remove;
			return data;
		},
		delete_action: function() {
			var data = {};
			data[DELETE_ACTION] = "";
			return data;
		}
	};
	/**
	* Mixpanel Group Object
	* @constructor
	*/
	var MixpanelGroup = function() {};
	_$1.extend(MixpanelGroup.prototype, apiActions);
	MixpanelGroup.prototype._init = function(mixpanel_instance, group_key, group_id) {
		this._mixpanel = mixpanel_instance;
		this._group_key = group_key;
		this._group_id = group_id;
	};
	/**
	* Set properties on a group.
	*
	* ### Usage:
	*
	*     mixpanel.get_group('company', 'mixpanel').set('Location', '405 Howard');
	*
	*     // or set multiple properties at once
	*     mixpanel.get_group('company', 'mixpanel').set({
	*          'Location': '405 Howard',
	*          'Founded' : 2009,
	*     });
	*     // properties can be strings, integers, dates, or lists
	*
	* @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
	* @param {*} [to] A value to set on the given property name
	* @param {Function} [callback] If provided, the callback will be called after the tracking event
	*/
	MixpanelGroup.prototype.set = addOptOutCheckMixpanelGroup(function(prop, to, callback) {
		var data = this.set_action(prop, to);
		if (_$1.isObject(prop)) callback = to;
		return this._send_request(data, callback);
	});
	/**
	* Set properties on a group, only if they do not yet exist.
	* This will not overwrite previous group property values, unlike
	* group.set().
	*
	* ### Usage:
	*
	*     mixpanel.get_group('company', 'mixpanel').set_once('Location', '405 Howard');
	*
	*     // or set multiple properties at once
	*     mixpanel.get_group('company', 'mixpanel').set_once({
	*          'Location': '405 Howard',
	*          'Founded' : 2009,
	*     });
	*     // properties can be strings, integers, lists or dates
	*
	* @param {Object|String} prop If a string, this is the name of the property. If an object, this is an associative array of names and values.
	* @param {*} [to] A value to set on the given property name
	* @param {Function} [callback] If provided, the callback will be called after the tracking event
	*/
	MixpanelGroup.prototype.set_once = addOptOutCheckMixpanelGroup(function(prop, to, callback) {
		var data = this.set_once_action(prop, to);
		if (_$1.isObject(prop)) callback = to;
		return this._send_request(data, callback);
	});
	/**
	* Unset properties on a group permanently.
	*
	* ### Usage:
	*
	*     mixpanel.get_group('company', 'mixpanel').unset('Founded');
	*
	* @param {String} prop The name of the property.
	* @param {Function} [callback] If provided, the callback will be called after the tracking event
	*/
	MixpanelGroup.prototype.unset = addOptOutCheckMixpanelGroup(function(prop, callback) {
		var data = this.unset_action(prop);
		return this._send_request(data, callback);
	});
	/**
	* Merge a given list with a list-valued group property, excluding duplicate values.
	*
	* ### Usage:
	*
	*     // merge a value to a list, creating it if needed
	*     mixpanel.get_group('company', 'mixpanel').union('Location', ['San Francisco', 'London']);
	*
	* @param {String} list_name Name of the property.
	* @param {Array} values Values to merge with the given property
	* @param {Function} [callback] If provided, the callback will be called after the tracking event
	*/
	MixpanelGroup.prototype.union = addOptOutCheckMixpanelGroup(function(list_name, values, callback) {
		if (_$1.isObject(list_name)) callback = values;
		var data = this.union_action(list_name, values);
		return this._send_request(data, callback);
	});
	/**
	* Permanently delete a group.
	*
	* ### Usage:
	*
	*     mixpanel.get_group('company', 'mixpanel').delete();
	*
	* @param {Function} [callback] If provided, the callback will be called after the tracking event
	*/
	MixpanelGroup.prototype["delete"] = addOptOutCheckMixpanelGroup(function(callback) {
		var data = this.delete_action();
		return this._send_request(data, callback);
	});
	/**
	* Remove a property from a group. The value will be ignored if doesn't exist.
	*
	* ### Usage:
	*
	*     mixpanel.get_group('company', 'mixpanel').remove('Location', 'London');
	*
	* @param {String} list_name Name of the property.
	* @param {Object} value Value to remove from the given group property
	* @param {Function} [callback] If provided, the callback will be called after the tracking event
	*/
	MixpanelGroup.prototype.remove = addOptOutCheckMixpanelGroup(function(list_name, value, callback) {
		var data = this.remove_action(list_name, value);
		return this._send_request(data, callback);
	});
	MixpanelGroup.prototype._send_request = function(data, callback) {
		data["$group_key"] = this._group_key;
		data["$group_id"] = this._group_id;
		data["$token"] = this._get_config("token");
		var date_encoded_data = _$1.encodeDates(data);
		return this._mixpanel._track_or_batch({
			type: "groups",
			data: date_encoded_data,
			endpoint: this._mixpanel.get_api_host("groups") + "/" + this._get_config("api_routes")["groups"],
			batcher: this._mixpanel.request_batchers.groups
		}, callback);
	};
	MixpanelGroup.prototype._is_reserved_property = function(prop) {
		return prop === "$group_key" || prop === "$group_id";
	};
	MixpanelGroup.prototype._get_config = function(conf) {
		return this._mixpanel.get_config(conf);
	};
	MixpanelGroup.prototype.toString = function() {
		return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id;
	};
	MixpanelGroup.prototype["remove"] = MixpanelGroup.prototype.remove;
	MixpanelGroup.prototype["set"] = MixpanelGroup.prototype.set;
	MixpanelGroup.prototype["set_once"] = MixpanelGroup.prototype.set_once;
	MixpanelGroup.prototype["union"] = MixpanelGroup.prototype.union;
	MixpanelGroup.prototype["unset"] = MixpanelGroup.prototype.unset;
	MixpanelGroup.prototype["toString"] = MixpanelGroup.prototype.toString;
	/**
	* Mixpanel People Object
	* @constructor
	*/
	var MixpanelPeople = function() {};
	_$1.extend(MixpanelPeople.prototype, apiActions);
	MixpanelPeople.prototype._init = function(mixpanel_instance) {
		this._mixpanel = mixpanel_instance;
	};
	MixpanelPeople.prototype.set = addOptOutCheckMixpanelPeople(function(prop, to, callback) {
		var data = this.set_action(prop, to);
		if (_$1.isObject(prop)) callback = to;
		if (this._get_config("save_referrer")) this._mixpanel["persistence"].update_referrer_info(document.referrer);
		data[SET_ACTION] = _$1.extend({}, _$1.info.people_properties(), data[SET_ACTION]);
		return this._send_request(data, callback);
	});
	MixpanelPeople.prototype.set_once = addOptOutCheckMixpanelPeople(function(prop, to, callback) {
		var data = this.set_once_action(prop, to);
		if (_$1.isObject(prop)) callback = to;
		return this._send_request(data, callback);
	});
	MixpanelPeople.prototype.unset = addOptOutCheckMixpanelPeople(function(prop, callback) {
		var data = this.unset_action(prop);
		return this._send_request(data, callback);
	});
	MixpanelPeople.prototype.increment = addOptOutCheckMixpanelPeople(function(prop, by, callback) {
		var data = {};
		var $add = {};
		if (_$1.isObject(prop)) {
			_$1.each(prop, function(v, k) {
				if (!this._is_reserved_property(k)) if (isNaN(parseFloat(v))) {
					console$1.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
					return;
				} else $add[k] = v;
			}, this);
			callback = by;
		} else {
			if (_$1.isUndefined(by)) by = 1;
			$add[prop] = by;
		}
		data[ADD_ACTION] = $add;
		return this._send_request(data, callback);
	});
	MixpanelPeople.prototype.append = addOptOutCheckMixpanelPeople(function(list_name, value, callback) {
		if (_$1.isObject(list_name)) callback = value;
		var data = this.append_action(list_name, value);
		return this._send_request(data, callback);
	});
	MixpanelPeople.prototype.remove = addOptOutCheckMixpanelPeople(function(list_name, value, callback) {
		if (_$1.isObject(list_name)) callback = value;
		var data = this.remove_action(list_name, value);
		return this._send_request(data, callback);
	});
	MixpanelPeople.prototype.union = addOptOutCheckMixpanelPeople(function(list_name, values, callback) {
		if (_$1.isObject(list_name)) callback = values;
		var data = this.union_action(list_name, values);
		return this._send_request(data, callback);
	});
	MixpanelPeople.prototype.track_charge = addOptOutCheckMixpanelPeople(function() {
		console$1.error("mixpanel.people.track_charge() is deprecated and no longer has any effect.");
	});
	MixpanelPeople.prototype.clear_charges = function(callback) {
		return this.set("$transactions", [], callback);
	};
	MixpanelPeople.prototype.delete_user = function() {
		if (!this._identify_called()) {
			console$1.error("mixpanel.people.delete_user() requires you to call identify() first");
			return;
		}
		var data = { "$delete": this._mixpanel.get_distinct_id() };
		return this._send_request(data);
	};
	MixpanelPeople.prototype.toString = function() {
		return this._mixpanel.toString() + ".people";
	};
	MixpanelPeople.prototype._send_request = function(data, callback) {
		data["$token"] = this._get_config("token");
		data["$distinct_id"] = this._mixpanel.get_distinct_id();
		var device_id = this._mixpanel.get_property("$device_id");
		var user_id = this._mixpanel.get_property("$user_id");
		var had_persisted_distinct_id = this._mixpanel.get_property("$had_persisted_distinct_id");
		if (device_id) data["$device_id"] = device_id;
		if (user_id) data["$user_id"] = user_id;
		if (had_persisted_distinct_id) data["$had_persisted_distinct_id"] = had_persisted_distinct_id;
		var date_encoded_data = _$1.encodeDates(data);
		if (!this._identify_called()) {
			this._enqueue(data);
			if (!_$1.isUndefined(callback)) if (this._get_config("verbose")) callback({
				status: -1,
				error: null
			});
			else callback(-1);
			return _$1.truncate(date_encoded_data, 255);
		}
		return this._mixpanel._track_or_batch({
			type: "people",
			data: date_encoded_data,
			endpoint: this._mixpanel.get_api_host("people") + "/" + this._get_config("api_routes")["engage"],
			batcher: this._mixpanel.request_batchers.people
		}, callback);
	};
	MixpanelPeople.prototype._get_config = function(conf_var) {
		return this._mixpanel.get_config(conf_var);
	};
	MixpanelPeople.prototype._identify_called = function() {
		return this._mixpanel._flags.identify_called === true;
	};
	MixpanelPeople.prototype._enqueue = function(data) {
		if (SET_ACTION in data) this._mixpanel["persistence"]._add_to_people_queue(SET_ACTION, data);
		else if (SET_ONCE_ACTION in data) this._mixpanel["persistence"]._add_to_people_queue(SET_ONCE_ACTION, data);
		else if (UNSET_ACTION in data) this._mixpanel["persistence"]._add_to_people_queue(UNSET_ACTION, data);
		else if (ADD_ACTION in data) this._mixpanel["persistence"]._add_to_people_queue(ADD_ACTION, data);
		else if (APPEND_ACTION in data) this._mixpanel["persistence"]._add_to_people_queue(APPEND_ACTION, data);
		else if (REMOVE_ACTION in data) this._mixpanel["persistence"]._add_to_people_queue(REMOVE_ACTION, data);
		else if (UNION_ACTION in data) this._mixpanel["persistence"]._add_to_people_queue(UNION_ACTION, data);
		else console$1.error("Invalid call to _enqueue():", data);
	};
	MixpanelPeople.prototype._flush_one_queue = function(action, action_method, callback, queue_to_params_fn) {
		var _this = this;
		var queued_data = _$1.extend({}, this._mixpanel["persistence"].load_queue(action));
		var action_params = queued_data;
		if (!_$1.isUndefined(queued_data) && _$1.isObject(queued_data) && !_$1.isEmptyObject(queued_data)) {
			_this._mixpanel["persistence"]._pop_from_people_queue(action, queued_data);
			_this._mixpanel["persistence"].save();
			if (queue_to_params_fn) action_params = queue_to_params_fn(queued_data);
			action_method.call(_this, action_params, function(response, data) {
				if (response === 0) _this._mixpanel["persistence"]._add_to_people_queue(action, queued_data);
				if (!_$1.isUndefined(callback)) callback(response, data);
			});
		}
	};
	MixpanelPeople.prototype._flush = function(_set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback) {
		var _this = this;
		this._flush_one_queue(SET_ACTION, this.set, _set_callback);
		this._flush_one_queue(SET_ONCE_ACTION, this.set_once, _set_once_callback);
		this._flush_one_queue(UNSET_ACTION, this.unset, _unset_callback, function(queue) {
			return _$1.keys(queue);
		});
		this._flush_one_queue(ADD_ACTION, this.increment, _add_callback);
		this._flush_one_queue(UNION_ACTION, this.union, _union_callback);
		var $append_queue = this._mixpanel["persistence"].load_queue(APPEND_ACTION);
		if (!_$1.isUndefined($append_queue) && _$1.isArray($append_queue) && $append_queue.length) {
			var $append_item;
			var append_callback = function(response, data) {
				if (response === 0) _this._mixpanel["persistence"]._add_to_people_queue(APPEND_ACTION, $append_item);
				if (!_$1.isUndefined(_append_callback)) _append_callback(response, data);
			};
			for (var i = $append_queue.length - 1; i >= 0; i--) {
				$append_queue = this._mixpanel["persistence"].load_queue(APPEND_ACTION);
				$append_item = $append_queue.pop();
				_this._mixpanel["persistence"].save();
				if (!_$1.isEmptyObject($append_item)) _this.append($append_item, append_callback);
			}
		}
		var $remove_queue = this._mixpanel["persistence"].load_queue(REMOVE_ACTION);
		if (!_$1.isUndefined($remove_queue) && _$1.isArray($remove_queue) && $remove_queue.length) {
			var $remove_item;
			var remove_callback = function(response, data) {
				if (response === 0) _this._mixpanel["persistence"]._add_to_people_queue(REMOVE_ACTION, $remove_item);
				if (!_$1.isUndefined(_remove_callback)) _remove_callback(response, data);
			};
			for (var j = $remove_queue.length - 1; j >= 0; j--) {
				$remove_queue = this._mixpanel["persistence"].load_queue(REMOVE_ACTION);
				$remove_item = $remove_queue.pop();
				_this._mixpanel["persistence"].save();
				if (!_$1.isEmptyObject($remove_item)) _this.remove($remove_item, remove_callback);
			}
		}
	};
	MixpanelPeople.prototype._is_reserved_property = function(prop) {
		return prop === "$distinct_id" || prop === "$token" || prop === "$device_id" || prop === "$user_id" || prop === "$had_persisted_distinct_id";
	};
	MixpanelPeople.prototype["set"] = MixpanelPeople.prototype.set;
	MixpanelPeople.prototype["set_once"] = MixpanelPeople.prototype.set_once;
	MixpanelPeople.prototype["unset"] = MixpanelPeople.prototype.unset;
	MixpanelPeople.prototype["increment"] = MixpanelPeople.prototype.increment;
	MixpanelPeople.prototype["append"] = MixpanelPeople.prototype.append;
	MixpanelPeople.prototype["remove"] = MixpanelPeople.prototype.remove;
	MixpanelPeople.prototype["union"] = MixpanelPeople.prototype.union;
	MixpanelPeople.prototype["track_charge"] = MixpanelPeople.prototype.track_charge;
	MixpanelPeople.prototype["clear_charges"] = MixpanelPeople.prototype.clear_charges;
	MixpanelPeople.prototype["delete_user"] = MixpanelPeople.prototype.delete_user;
	MixpanelPeople.prototype["toString"] = MixpanelPeople.prototype.toString;
	/** @const */ var SET_QUEUE_KEY = "__mps";
	/** @const */ var SET_ONCE_QUEUE_KEY = "__mpso";
	/** @const */ var UNSET_QUEUE_KEY = "__mpus";
	/** @const */ var ADD_QUEUE_KEY = "__mpa";
	/** @const */ var APPEND_QUEUE_KEY = "__mpap";
	/** @const */ var REMOVE_QUEUE_KEY = "__mpr";
	/** @const */ var UNION_QUEUE_KEY = "__mpu";
	/** @const */ var PEOPLE_DISTINCT_ID_KEY = "$people_distinct_id";
	/** @const */ var ALIAS_ID_KEY = "__alias";
	/** @const */ var EVENT_TIMERS_KEY = "__timers";
	/** @const */ var RESERVED_PROPERTIES = [
		SET_QUEUE_KEY,
		SET_ONCE_QUEUE_KEY,
		UNSET_QUEUE_KEY,
		ADD_QUEUE_KEY,
		APPEND_QUEUE_KEY,
		REMOVE_QUEUE_KEY,
		UNION_QUEUE_KEY,
		PEOPLE_DISTINCT_ID_KEY,
		ALIAS_ID_KEY,
		EVENT_TIMERS_KEY
	];
	/**
	* Mixpanel Persistence Object
	* @constructor
	*/
	var MixpanelPersistence = function(config) {
		this["props"] = {};
		this.campaign_params_saved = false;
		if (config["persistence_name"]) this.name = "mp_" + config["persistence_name"];
		else this.name = "mp_" + config["token"] + "_mixpanel";
		var storage_type = config["persistence"];
		if (storage_type !== "cookie" && storage_type !== "localStorage") {
			console$1.critical("Unknown persistence type " + storage_type + "; falling back to cookie");
			storage_type = config["persistence"] = "cookie";
		}
		if (storage_type === "localStorage" && _$1.localStorage.is_supported()) this.storage = _$1.localStorage;
		else this.storage = _$1.cookie;
		this.load();
		this.update_config(config);
		this.upgrade();
		this.save();
	};
	MixpanelPersistence.prototype.properties = function() {
		var p = {};
		this.load();
		_$1.each(this["props"], function(v, k) {
			if (!_$1.include(RESERVED_PROPERTIES, k)) p[k] = v;
		});
		return p;
	};
	MixpanelPersistence.prototype.load = function() {
		if (this.disabled) return;
		var entry = this.storage.parse(this.name);
		if (entry) this["props"] = _$1.extend({}, entry);
	};
	MixpanelPersistence.prototype.upgrade = function() {
		var old_cookie;
		var old_localstorage;
		if (this.storage === _$1.localStorage) {
			old_cookie = _$1.cookie.parse(this.name);
			_$1.cookie.remove(this.name);
			_$1.cookie.remove(this.name, true);
			if (old_cookie) this.register_once(old_cookie);
		} else if (this.storage === _$1.cookie) {
			old_localstorage = _$1.localStorage.parse(this.name);
			_$1.localStorage.remove(this.name);
			if (old_localstorage) this.register_once(old_localstorage);
		}
	};
	MixpanelPersistence.prototype.save = function() {
		if (this.disabled) return;
		this.storage.set(this.name, JSONStringify(this["props"]), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain);
	};
	MixpanelPersistence.prototype.load_prop = function(key) {
		this.load();
		return this["props"][key];
	};
	MixpanelPersistence.prototype.remove = function() {
		this.storage.remove(this.name, false, this.cookie_domain);
		this.storage.remove(this.name, true, this.cookie_domain);
	};
	MixpanelPersistence.prototype.clear = function() {
		this.remove();
		this["props"] = {};
	};
	/**
	* @param {Object} props
	* @param {*=} default_value
	* @param {number=} days
	*/
	MixpanelPersistence.prototype.register_once = function(props, default_value, days) {
		if (_$1.isObject(props)) {
			if (typeof default_value === "undefined") default_value = "None";
			this.expire_days = typeof days === "undefined" ? this.default_expiry : days;
			this.load();
			_$1.each(props, function(val, prop) {
				if (!this["props"].hasOwnProperty(prop) || this["props"][prop] === default_value) this["props"][prop] = val;
			}, this);
			this.save();
			return true;
		}
		return false;
	};
	/**
	* @param {Object} props
	* @param {number=} days
	*/
	MixpanelPersistence.prototype.register = function(props, days) {
		if (_$1.isObject(props)) {
			this.expire_days = typeof days === "undefined" ? this.default_expiry : days;
			this.load();
			_$1.extend(this["props"], props);
			this.save();
			return true;
		}
		return false;
	};
	MixpanelPersistence.prototype.unregister = function(prop) {
		this.load();
		if (prop in this["props"]) {
			delete this["props"][prop];
			this.save();
		}
	};
	MixpanelPersistence.prototype.update_search_keyword = function(referrer) {
		this.register(_$1.info.searchInfo(referrer));
	};
	MixpanelPersistence.prototype.update_referrer_info = function(referrer) {
		this.register_once({
			"$initial_referrer": referrer || "$direct",
			"$initial_referring_domain": _$1.info.referringDomain(referrer) || "$direct"
		}, "");
	};
	MixpanelPersistence.prototype.get_referrer_info = function() {
		return _$1.strip_empty_properties({
			"$initial_referrer": this["props"]["$initial_referrer"],
			"$initial_referring_domain": this["props"]["$initial_referring_domain"]
		});
	};
	MixpanelPersistence.prototype.update_config = function(config) {
		this.default_expiry = this.expire_days = config["cookie_expiration"];
		this.set_disabled(config["disable_persistence"]);
		this.set_cookie_domain(config["cookie_domain"]);
		this.set_cross_site(config["cross_site_cookie"]);
		this.set_cross_subdomain(config["cross_subdomain_cookie"]);
		this.set_secure(config["secure_cookie"]);
	};
	MixpanelPersistence.prototype.set_disabled = function(disabled) {
		this.disabled = disabled;
		if (this.disabled) this.remove();
		else this.save();
	};
	MixpanelPersistence.prototype.set_cookie_domain = function(cookie_domain) {
		if (cookie_domain !== this.cookie_domain) {
			this.remove();
			this.cookie_domain = cookie_domain;
			this.save();
		}
	};
	MixpanelPersistence.prototype.set_cross_site = function(cross_site) {
		if (cross_site !== this.cross_site) {
			this.cross_site = cross_site;
			this.remove();
			this.save();
		}
	};
	MixpanelPersistence.prototype.set_cross_subdomain = function(cross_subdomain) {
		if (cross_subdomain !== this.cross_subdomain) {
			this.cross_subdomain = cross_subdomain;
			this.remove();
			this.save();
		}
	};
	MixpanelPersistence.prototype.get_cross_subdomain = function() {
		return this.cross_subdomain;
	};
	MixpanelPersistence.prototype.set_secure = function(secure) {
		if (secure !== this.secure) {
			this.secure = secure ? true : false;
			this.remove();
			this.save();
		}
	};
	MixpanelPersistence.prototype._add_to_people_queue = function(queue, data) {
		var q_key = this._get_queue_key(queue);
		var q_data = data[queue];
		var set_q = this._get_or_create_queue(SET_ACTION);
		var set_once_q = this._get_or_create_queue(SET_ONCE_ACTION);
		var unset_q = this._get_or_create_queue(UNSET_ACTION);
		var add_q = this._get_or_create_queue(ADD_ACTION);
		var union_q = this._get_or_create_queue(UNION_ACTION);
		var remove_q = this._get_or_create_queue(REMOVE_ACTION, []);
		var append_q = this._get_or_create_queue(APPEND_ACTION, []);
		if (q_key === SET_QUEUE_KEY) {
			_$1.extend(set_q, q_data);
			this._pop_from_people_queue(ADD_ACTION, q_data);
			this._pop_from_people_queue(UNION_ACTION, q_data);
			this._pop_from_people_queue(UNSET_ACTION, q_data);
		} else if (q_key === SET_ONCE_QUEUE_KEY) {
			_$1.each(q_data, function(v, k) {
				if (!(k in set_once_q)) set_once_q[k] = v;
			});
			this._pop_from_people_queue(UNSET_ACTION, q_data);
		} else if (q_key === UNSET_QUEUE_KEY) _$1.each(q_data, function(prop) {
			_$1.each([
				set_q,
				set_once_q,
				add_q,
				union_q
			], function(enqueued_obj) {
				if (prop in enqueued_obj) delete enqueued_obj[prop];
			});
			_$1.each(append_q, function(append_obj) {
				if (prop in append_obj) delete append_obj[prop];
			});
			unset_q[prop] = true;
		});
		else if (q_key === ADD_QUEUE_KEY) {
			_$1.each(q_data, function(v, k) {
				if (k in set_q) set_q[k] += v;
				else {
					if (!(k in add_q)) add_q[k] = 0;
					add_q[k] += v;
				}
			}, this);
			this._pop_from_people_queue(UNSET_ACTION, q_data);
		} else if (q_key === UNION_QUEUE_KEY) {
			_$1.each(q_data, function(v, k) {
				if (_$1.isArray(v)) {
					if (!(k in union_q)) union_q[k] = [];
					_$1.each(v, function(item) {
						if (!_$1.include(union_q[k], item)) union_q[k].push(item);
					});
				}
			});
			this._pop_from_people_queue(UNSET_ACTION, q_data);
		} else if (q_key === REMOVE_QUEUE_KEY) {
			remove_q.push(q_data);
			this._pop_from_people_queue(APPEND_ACTION, q_data);
		} else if (q_key === APPEND_QUEUE_KEY) {
			append_q.push(q_data);
			this._pop_from_people_queue(UNSET_ACTION, q_data);
		}
		console$1.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):");
		console$1.log(data);
		this.save();
	};
	MixpanelPersistence.prototype._pop_from_people_queue = function(queue, data) {
		var q = this["props"][this._get_queue_key(queue)];
		if (!_$1.isUndefined(q)) _$1.each(data, function(v, k) {
			if (queue === APPEND_ACTION || queue === REMOVE_ACTION) _$1.each(q, function(queued_action) {
				if (queued_action[k] === v) delete queued_action[k];
			});
			else delete q[k];
		}, this);
	};
	MixpanelPersistence.prototype.load_queue = function(queue) {
		return this.load_prop(this._get_queue_key(queue));
	};
	MixpanelPersistence.prototype._get_queue_key = function(queue) {
		if (queue === SET_ACTION) return SET_QUEUE_KEY;
		else if (queue === SET_ONCE_ACTION) return SET_ONCE_QUEUE_KEY;
		else if (queue === UNSET_ACTION) return UNSET_QUEUE_KEY;
		else if (queue === ADD_ACTION) return ADD_QUEUE_KEY;
		else if (queue === APPEND_ACTION) return APPEND_QUEUE_KEY;
		else if (queue === REMOVE_ACTION) return REMOVE_QUEUE_KEY;
		else if (queue === UNION_ACTION) return UNION_QUEUE_KEY;
		else console$1.error("Invalid queue:", queue);
	};
	MixpanelPersistence.prototype._get_or_create_queue = function(queue, default_val) {
		var key = this._get_queue_key(queue);
		default_val = _$1.isUndefined(default_val) ? {} : default_val;
		return this["props"][key] || (this["props"][key] = default_val);
	};
	MixpanelPersistence.prototype.set_event_timer = function(event_name, timestamp) {
		var timers = this.load_prop(EVENT_TIMERS_KEY) || {};
		timers[event_name] = timestamp;
		this["props"][EVENT_TIMERS_KEY] = timers;
		this.save();
	};
	MixpanelPersistence.prototype.remove_event_timer = function(event_name) {
		var timestamp = (this.load_prop(EVENT_TIMERS_KEY) || {})[event_name];
		if (!_$1.isUndefined(timestamp)) {
			delete this["props"][EVENT_TIMERS_KEY][event_name];
			this.save();
		}
		return timestamp;
	};
	var init_type;
	var load_extra_bundle = function(src, _onload) {
		throw new Error(src + " not available in this build.");
	};
	var mixpanel_master;
	var INIT_MODULE = 0;
	var INIT_SNIPPET = 1;
	var IDENTITY_FUNC = function(x) {
		return x;
	};
	/** @const */ var PRIMARY_INSTANCE_NAME = "mixpanel";
	/** @const */ var PAYLOAD_TYPE_BASE64 = "base64";
	/** @const */ var PAYLOAD_TYPE_JSON = "json";
	/** @const */ var DEVICE_ID_PREFIX = "$device:";
	var USE_XHR = win.XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
	var ENQUEUE_REQUESTS = !USE_XHR && userAgent.indexOf("MSIE") === -1 && userAgent.indexOf("Mozilla") === -1;
	var sendBeacon = null;
	if (navigator["sendBeacon"]) sendBeacon = function() {
		return navigator["sendBeacon"].apply(navigator, arguments);
	};
	var DEFAULT_API_ROUTES = {
		"track": "track/",
		"engage": "engage/",
		"groups": "groups/",
		"record": "record/",
		"flags": "flags/"
	};
	var DEFAULT_CONFIG = {
		"api_host": "https://api-js.mixpanel.com",
		"api_hosts": {},
		"api_routes": DEFAULT_API_ROUTES,
		"api_extra_query_params": {},
		"api_method": "POST",
		"api_transport": "XHR",
		"api_payload_format": PAYLOAD_TYPE_BASE64,
		"app_host": "https://mixpanel.com",
		"autocapture": false,
		"cdn": "https://cdn.mxpnl.com",
		"cross_site_cookie": false,
		"cross_subdomain_cookie": true,
		"error_reporter": NOOP_FUNC,
		"flags": false,
		"persistence": "cookie",
		"persistence_name": "",
		"cookie_domain": "",
		"cookie_name": "",
		"loaded": NOOP_FUNC,
		"mp_loader": null,
		"track_marketing": true,
		"track_pageview": false,
		"skip_first_touch_marketing": false,
		"store_google": true,
		"stop_utm_persistence": false,
		"save_referrer": true,
		"test": false,
		"verbose": false,
		"img": false,
		"debug": false,
		"track_links_timeout": 300,
		"cookie_expiration": 365,
		"upgrade": false,
		"disable_persistence": false,
		"disable_cookie": false,
		"secure_cookie": false,
		"ip": true,
		"opt_out_tracking_by_default": false,
		"opt_out_persistence_by_default": false,
		"opt_out_tracking_persistence_type": "localStorage",
		"opt_out_tracking_cookie_prefix": null,
		"property_blacklist": [],
		"xhr_headers": {},
		"ignore_dnt": false,
		"batch_requests": true,
		"batch_size": 50,
		"batch_flush_interval_ms": 5e3,
		"batch_request_timeout_ms": 9e4,
		"batch_autostart": true,
		"hooks": {},
		"record_block_class": /* @__PURE__ */ new RegExp("^(mp-block|fs-exclude|amp-block|rr-block|ph-no-capture)$"),
		"record_block_selector": "img, video, audio",
		"record_canvas": false,
		"record_collect_fonts": false,
		"record_heatmap_data": false,
		"record_idle_timeout_ms": 1800 * 1e3,
		"record_mask_text_class": /* @__PURE__ */ new RegExp("^(mp-mask|fs-mask|amp-mask|rr-mask|ph-mask)$"),
		"record_mask_text_selector": "*",
		"record_max_ms": MAX_RECORDING_MS,
		"record_min_ms": 0,
		"record_sessions_percent": 0,
		"recorder_src": "https://cdn.mxpnl.com/libs/mixpanel-recorder.min.js"
	};
	var DOM_LOADED = false;
	/**
	* Mixpanel Library Object
	* @constructor
	*/
	var MixpanelLib = function() {};
	/**
	* create_mplib(token:string, config:object, name:string)
	*
	* This function is used by the init method of MixpanelLib objects
	* as well as the main initializer at the end of the JSLib (that
	* initializes document.mixpanel as well as any additional instances
	* declared before this file has loaded).
	*/
	var create_mplib = function(token, config, name) {
		var instance;
		var target = name === PRIMARY_INSTANCE_NAME ? mixpanel_master : mixpanel_master[name];
		if (target && init_type === INIT_MODULE) instance = target;
		else {
			if (target && !_$1.isArray(target)) {
				console$1.error("You have already initialized " + name);
				return;
			}
			instance = new MixpanelLib();
		}
		instance._cached_groups = {};
		instance._init(token, config, name);
		instance["people"] = new MixpanelPeople();
		instance["people"]._init(instance);
		if (!instance.get_config("skip_first_touch_marketing")) {
			var utm_params = _$1.info.campaignParams(null);
			var initial_utm_params = {};
			var has_utm = false;
			_$1.each(utm_params, function(utm_value, utm_key) {
				initial_utm_params["initial_" + utm_key] = utm_value;
				if (utm_value) has_utm = true;
			});
			if (has_utm) instance["people"].set_once(initial_utm_params);
		}
		Config.DEBUG = Config.DEBUG || instance.get_config("debug");
		if (!_$1.isUndefined(target) && _$1.isArray(target)) {
			instance._execute_array.call(instance["people"], target["people"]);
			instance._execute_array(target);
		}
		return instance;
	};
	/**
	* This function initializes a new instance of the Mixpanel tracking object.
	* All new instances are added to the main mixpanel object as sub properties (such as
	* mixpanel.library_name) and also returned by this function. To define a
	* second instance on the page, you would call:
	*
	*     mixpanel.init('new token', { your: 'config' }, 'library_name');
	*
	* and use it like so:
	*
	*     mixpanel.library_name.track(...);
	*
	* @param {String} token   Your Mixpanel API token
	* @param {Object} [config]  A dictionary of config options to override. <a href="https://github.com/mixpanel/mixpanel-js/blob/v2.46.0/src/mixpanel-core.js#L88-L127">See a list of default config options</a>.
	* @param {String} [name]    The name for the new mixpanel instance that you want created
	*/
	MixpanelLib.prototype.init = function(token, config, name) {
		if (_$1.isUndefined(name)) {
			this.report_error("You must name your new library: init(token, config, name)");
			return;
		}
		if (name === PRIMARY_INSTANCE_NAME) {
			this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
			return;
		}
		var instance = create_mplib(token, config, name);
		mixpanel_master[name] = instance;
		instance._loaded();
		return instance;
	};
	MixpanelLib.prototype._init = function(token, config, name) {
		config = config || {};
		this["__loaded"] = true;
		this["config"] = {};
		var variable_features = {};
		if (!("api_payload_format" in config)) {
			if ((config["api_host"] || DEFAULT_CONFIG["api_host"]).match(/\.mixpanel\.com/)) variable_features["api_payload_format"] = PAYLOAD_TYPE_JSON;
		}
		this.set_config(_$1.extend({}, DEFAULT_CONFIG, variable_features, config, {
			"name": name,
			"token": token,
			"callback_fn": (name === PRIMARY_INSTANCE_NAME ? name : PRIMARY_INSTANCE_NAME + "." + name) + "._jsc"
		}));
		this["_jsc"] = NOOP_FUNC;
		this.__dom_loaded_queue = [];
		this.__request_queue = [];
		this.__disabled_events = [];
		this._flags = {
			"disable_all_events": false,
			"identify_called": false
		};
		this.request_batchers = {};
		this._batch_requests = this.get_config("batch_requests");
		if (this._batch_requests) if (!_$1.localStorage.is_supported(true) || !USE_XHR) {
			this._batch_requests = false;
			console$1.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support");
			_$1.each(this.get_batcher_configs(), function(batcher_config) {
				console$1.log("Clearing batch queue " + batcher_config.queue_key);
				_$1.localStorage.remove(batcher_config.queue_key);
			});
		} else {
			this.init_batchers();
			if (sendBeacon && win.addEventListener) {
				var flush_on_unload = _$1.bind(function() {
					if (!this.request_batchers.events.stopped) this.request_batchers.events.flush({ unloading: true });
				}, this);
				win.addEventListener("pagehide", function(ev) {
					if (ev["persisted"]) flush_on_unload();
				});
				win.addEventListener("visibilitychange", function() {
					if (document$1["visibilityState"] === "hidden") flush_on_unload();
				});
			}
		}
		this["persistence"] = this["cookie"] = new MixpanelPersistence(this["config"]);
		this.unpersisted_superprops = {};
		this._gdpr_init();
		var uuid = _$1.UUID();
		if (!this.get_distinct_id()) this.register_once({
			"distinct_id": DEVICE_ID_PREFIX + uuid,
			"$device_id": uuid
		}, "");
		this.flags = new FeatureFlagManager({
			getFullApiRoute: _$1.bind(function() {
				return this.get_api_host("flags") + "/" + this.get_config("api_routes")["flags"];
			}, this),
			getConfigFunc: _$1.bind(this.get_config, this),
			setConfigFunc: _$1.bind(this.set_config, this),
			getPropertyFunc: _$1.bind(this.get_property, this),
			trackingFunc: _$1.bind(this.track, this)
		});
		this.flags.init();
		this["flags"] = this.flags;
		this.autocapture = new Autocapture(this);
		this.autocapture.init();
		this._init_tab_id();
		this._check_and_start_session_recording();
	};
	/**
	* Assigns a unique UUID to this tab / window by leveraging sessionStorage.
	* This is primarily used for session recording, where data must be isolated to the current tab.
	*/
	MixpanelLib.prototype._init_tab_id = function() {
		if (this.get_config("disable_persistence")) console$1.log("Tab ID initialization skipped due to disable_persistence config");
		else if (_$1.sessionStorage.is_supported()) try {
			var key_suffix = this.get_config("name") + "_" + this.get_config("token");
			var tab_id_key = "mp_tab_id_" + key_suffix;
			var should_generate_new_tab_id_key = "mp_gen_new_tab_id_" + key_suffix;
			if (_$1.sessionStorage.get(should_generate_new_tab_id_key) || !_$1.sessionStorage.get(tab_id_key)) _$1.sessionStorage.set(tab_id_key, "$tab-" + _$1.UUID());
			_$1.sessionStorage.set(should_generate_new_tab_id_key, "1");
			this.tab_id = _$1.sessionStorage.get(tab_id_key);
			win.addEventListener("beforeunload", function() {
				_$1.sessionStorage.remove(should_generate_new_tab_id_key);
			});
		} catch (err) {
			this.report_error("Error initializing tab id", err);
		}
		else this.report_error("Session storage is not supported, cannot keep track of unique tab ID.");
	};
	MixpanelLib.prototype.get_tab_id = function() {
		return this.tab_id || null;
	};
	MixpanelLib.prototype._should_load_recorder = function() {
		if (this.get_config("disable_persistence")) {
			console$1.log("Load recorder check skipped due to disable_persistence config");
			return Promise.resolve(false);
		}
		var recording_registry_idb = new IDBStorageWrapper(RECORDING_REGISTRY_STORE_NAME);
		var tab_id = this.get_tab_id();
		return recording_registry_idb.init().then(function() {
			return recording_registry_idb.getAll();
		}).then(function(recordings) {
			for (var i = 0; i < recordings.length; i++) if (isRecordingExpired(recordings[i]) || recordings[i]["tabId"] === tab_id) return true;
			return false;
		}).catch(_$1.bind(function(err) {
			this.report_error("Error checking recording registry", err);
		}, this));
	};
	MixpanelLib.prototype._check_and_start_session_recording = addOptOutCheckMixpanelLib(function(force_start) {
		if (!win["MutationObserver"]) {
			console$1.critical("Browser does not support MutationObserver; skipping session recording");
			return;
		}
		var loadRecorder = _$1.bind(function(startNewIfInactive) {
			var handleLoadedRecorder = _$1.bind(function() {
				this._recorder = this._recorder || new win["__mp_recorder"](this);
				this._recorder["resumeRecording"](startNewIfInactive);
			}, this);
			if (_$1.isUndefined(win["__mp_recorder"])) load_extra_bundle(this.get_config("recorder_src"), handleLoadedRecorder);
			else handleLoadedRecorder();
		}, this);
		/**
		* If the user is sampled or start_session_recording is called, we always load the recorder since it's guaranteed a recording should start.
		* Otherwise, if the recording registry has any records then it's likely there's a recording in progress or orphaned data that needs to be flushed.
		*/
		var is_sampled = this.get_config("record_sessions_percent") > 0 && Math.random() * 100 <= this.get_config("record_sessions_percent");
		if (force_start || is_sampled) loadRecorder(true);
		else this._should_load_recorder().then(function(shouldLoad) {
			if (shouldLoad) loadRecorder(false);
		});
	});
	MixpanelLib.prototype.start_session_recording = function() {
		this._check_and_start_session_recording(true);
	};
	MixpanelLib.prototype.stop_session_recording = function() {
		if (this._recorder) return this._recorder["stopRecording"]();
		return Promise.resolve();
	};
	MixpanelLib.prototype.pause_session_recording = function() {
		if (this._recorder) return this._recorder["pauseRecording"]();
		return Promise.resolve();
	};
	MixpanelLib.prototype.resume_session_recording = function() {
		if (this._recorder) return this._recorder["resumeRecording"]();
		return Promise.resolve();
	};
	MixpanelLib.prototype.is_recording_heatmap_data = function() {
		return this._get_session_replay_id() && this.get_config("record_heatmap_data");
	};
	MixpanelLib.prototype.get_session_recording_properties = function() {
		var props = {};
		var replay_id = this._get_session_replay_id();
		if (replay_id) props["$mp_replay_id"] = replay_id;
		return props;
	};
	MixpanelLib.prototype.get_session_replay_url = function() {
		var replay_url = null;
		var replay_id = this._get_session_replay_id();
		if (replay_id) replay_url = "https://mixpanel.com/projects/replay-redirect?" + _$1.HTTPBuildQuery({
			"replay_id": replay_id,
			"distinct_id": this.get_distinct_id(),
			"token": this.get_config("token")
		});
		return replay_url;
	};
	MixpanelLib.prototype._get_session_replay_id = function() {
		var replay_id = null;
		if (this._recorder) replay_id = this._recorder["replayId"];
		return replay_id || null;
	};
	MixpanelLib.prototype.__get_recorder = function() {
		return this._recorder;
	};
	MixpanelLib.prototype._loaded = function() {
		this.get_config("loaded")(this);
		this._set_default_superprops();
		this["people"].set_once(this["persistence"].get_referrer_info());
		if (this.get_config("store_google") && this.get_config("stop_utm_persistence")) {
			var utm_params = _$1.info.campaignParams(null);
			_$1.each(utm_params, function(_utm_value, utm_key) {
				this.unregister(utm_key);
			}.bind(this));
		}
	};
	MixpanelLib.prototype._set_default_superprops = function() {
		this["persistence"].update_search_keyword(document$1.referrer);
		if (this.get_config("store_google") && !this.get_config("stop_utm_persistence")) this.register(_$1.info.campaignParams());
		if (this.get_config("save_referrer")) this["persistence"].update_referrer_info(document$1.referrer);
	};
	MixpanelLib.prototype._dom_loaded = function() {
		_$1.each(this.__dom_loaded_queue, function(item) {
			this._track_dom.apply(this, item);
		}, this);
		if (!this.has_opted_out_tracking()) _$1.each(this.__request_queue, function(item) {
			this._send_request.apply(this, item);
		}, this);
		delete this.__dom_loaded_queue;
		delete this.__request_queue;
	};
	MixpanelLib.prototype._track_dom = function(DomClass, args) {
		if (this.get_config("img")) {
			this.report_error("You can't use DOM tracking functions with img = true.");
			return false;
		}
		if (!DOM_LOADED) {
			this.__dom_loaded_queue.push([DomClass, args]);
			return false;
		}
		var dt = new DomClass().init(this);
		return dt.track.apply(dt, args);
	};
	/**
	* _prepare_callback() should be called by callers of _send_request for use
	* as the callback argument.
	*
	* If there is no callback, this returns null.
	* If we are going to make XHR/XDR requests, this returns a function.
	* If we are going to use script tags, this returns a string to use as the
	* callback GET param.
	*/
	MixpanelLib.prototype._prepare_callback = function(callback, data) {
		if (_$1.isUndefined(callback)) return null;
		if (USE_XHR) {
			var callback_function = function(response) {
				callback(response, data);
			};
			return callback_function;
		} else {
			var jsc = this["_jsc"];
			var randomized_cb = "" + Math.floor(Math.random() * 1e8);
			var callback_string = this.get_config("callback_fn") + "[" + randomized_cb + "]";
			jsc[randomized_cb] = function(response) {
				delete jsc[randomized_cb];
				callback(response, data);
			};
			return callback_string;
		}
	};
	MixpanelLib.prototype._send_request = function(url, data, options, callback) {
		var succeeded = true;
		if (ENQUEUE_REQUESTS) {
			this.__request_queue.push(arguments);
			return succeeded;
		}
		var DEFAULT_OPTIONS = {
			method: this.get_config("api_method"),
			transport: this.get_config("api_transport"),
			verbose: this.get_config("verbose")
		};
		var body_data = null;
		if (!callback && (_$1.isFunction(options) || typeof options === "string")) {
			callback = options;
			options = null;
		}
		options = _$1.extend(DEFAULT_OPTIONS, options || {});
		if (!USE_XHR) options.method = "GET";
		var use_post = options.method === "POST";
		var use_sendBeacon = sendBeacon && use_post && options.transport.toLowerCase() === "sendbeacon";
		var verbose_mode = options.verbose;
		if (data["verbose"]) verbose_mode = true;
		if (this.get_config("test")) data["test"] = 1;
		if (verbose_mode) data["verbose"] = 1;
		if (this.get_config("img")) data["img"] = 1;
		if (!USE_XHR) {
			if (callback) data["callback"] = callback;
			else if (verbose_mode || this.get_config("test")) data["callback"] = "(function(){})";
		}
		data["ip"] = this.get_config("ip") ? 1 : 0;
		data["_"] = (/* @__PURE__ */ new Date()).getTime().toString();
		if (use_post) {
			body_data = "data=" + encodeURIComponent(data["data"]);
			delete data["data"];
		}
		_$1.extend(data, this.get_config("api_extra_query_params"));
		url += "?" + _$1.HTTPBuildQuery(data);
		var lib = this;
		if ("img" in data) {
			var img = document$1.createElement("img");
			img.src = url;
			document$1.body.appendChild(img);
		} else if (use_sendBeacon) {
			try {
				succeeded = sendBeacon(url, body_data);
			} catch (e) {
				lib.report_error(e);
				succeeded = false;
			}
			try {
				if (callback) callback(succeeded ? 1 : 0);
			} catch (e) {
				lib.report_error(e);
			}
		} else if (USE_XHR) try {
			var req = new XMLHttpRequest();
			req.open(options.method, url, true);
			var headers = this.get_config("xhr_headers");
			if (use_post) headers["Content-Type"] = "application/x-www-form-urlencoded";
			_$1.each(headers, function(headerValue, headerName) {
				req.setRequestHeader(headerName, headerValue);
			});
			if (options.timeout_ms && typeof req.timeout !== "undefined") {
				req.timeout = options.timeout_ms;
				var start_time = (/* @__PURE__ */ new Date()).getTime();
			}
			req.withCredentials = true;
			req.onreadystatechange = function() {
				if (req.readyState === 4) if (req.status === 200) {
					if (callback) if (verbose_mode) {
						var response;
						try {
							response = _$1.JSONDecode(req.responseText);
						} catch (e) {
							lib.report_error(e);
							if (options.ignore_json_errors) response = req.responseText;
							else return;
						}
						callback(response);
					} else callback(Number(req.responseText));
				} else {
					var error;
					if (req.timeout && !req.status && (/* @__PURE__ */ new Date()).getTime() - start_time >= req.timeout) error = "timeout";
					else error = "Bad HTTP status: " + req.status + " " + req.statusText;
					lib.report_error(error);
					if (callback) if (verbose_mode) {
						var response_headers = req["responseHeaders"] || {};
						callback({
							status: 0,
							httpStatusCode: req["status"],
							error,
							retryAfter: response_headers["Retry-After"]
						});
					} else callback(0);
				}
			};
			req.send(body_data);
		} catch (e) {
			lib.report_error(e);
			succeeded = false;
		}
		else {
			var script = document$1.createElement("script");
			script.type = "text/javascript";
			script.async = true;
			script.defer = true;
			script.src = url;
			var s = document$1.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(script, s);
		}
		return succeeded;
	};
	/**
	* _execute_array() deals with processing any mixpanel function
	* calls that were called before the Mixpanel library were loaded
	* (and are thus stored in an array so they can be called later)
	*
	* Note: we fire off all the mixpanel function calls && user defined
	* functions BEFORE we fire off mixpanel tracking calls. This is so
	* identify/register/set_config calls can properly modify early
	* tracking calls.
	*
	* @param {Array} array
	*/
	MixpanelLib.prototype._execute_array = function(array) {
		var fn_name;
		var alias_calls = [];
		var other_calls = [];
		var tracking_calls = [];
		_$1.each(array, function(item) {
			if (item) {
				fn_name = item[0];
				if (_$1.isArray(fn_name)) tracking_calls.push(item);
				else if (typeof item === "function") item.call(this);
				else if (_$1.isArray(item) && fn_name === "alias") alias_calls.push(item);
				else if (_$1.isArray(item) && fn_name.indexOf("track") !== -1 && typeof this[fn_name] === "function") tracking_calls.push(item);
				else other_calls.push(item);
			}
		}, this);
		var execute = function(calls, context) {
			_$1.each(calls, function(item) {
				if (_$1.isArray(item[0])) {
					var caller = context;
					_$1.each(item, function(call) {
						caller = caller[call[0]].apply(caller, call.slice(1));
					});
				} else this[item[0]].apply(this, item.slice(1));
			}, context);
		};
		execute(alias_calls, this);
		execute(other_calls, this);
		execute(tracking_calls, this);
	};
	MixpanelLib.prototype.are_batchers_initialized = function() {
		return !!this.request_batchers.events;
	};
	MixpanelLib.prototype.get_batcher_configs = function() {
		var queue_prefix = "__mpq_" + this.get_config("token");
		this._batcher_configs = this._batcher_configs || {
			events: {
				type: "events",
				api_name: "track",
				queue_key: queue_prefix + "_ev"
			},
			people: {
				type: "people",
				api_name: "engage",
				queue_key: queue_prefix + "_pp"
			},
			groups: {
				type: "groups",
				api_name: "groups",
				queue_key: queue_prefix + "_gr"
			}
		};
		return this._batcher_configs;
	};
	MixpanelLib.prototype.init_batchers = function() {
		if (!this.are_batchers_initialized()) {
			var batcher_for = _$1.bind(function(attrs) {
				return new RequestBatcher(attrs.queue_key, {
					libConfig: this["config"],
					errorReporter: this.get_config("error_reporter"),
					sendRequestFunc: _$1.bind(function(data, options, cb) {
						var api_routes = this.get_config("api_routes");
						this._send_request(this.get_api_host(attrs.api_name) + "/" + api_routes[attrs.api_name], this._encode_data_for_request(data), options, this._prepare_callback(cb, data));
					}, this),
					beforeSendHook: _$1.bind(function(item) {
						return this._run_hook("before_send_" + attrs.type, item);
					}, this),
					stopAllBatchingFunc: _$1.bind(this.stop_batch_senders, this),
					usePersistence: true
				});
			}, this);
			var batcher_configs = this.get_batcher_configs();
			this.request_batchers = {
				events: batcher_for(batcher_configs.events),
				people: batcher_for(batcher_configs.people),
				groups: batcher_for(batcher_configs.groups)
			};
		}
		if (this.get_config("batch_autostart")) this.start_batch_senders();
	};
	MixpanelLib.prototype.start_batch_senders = function() {
		this._batchers_were_started = true;
		if (this.are_batchers_initialized()) {
			this._batch_requests = true;
			_$1.each(this.request_batchers, function(batcher) {
				batcher.start();
			});
		}
	};
	MixpanelLib.prototype.stop_batch_senders = function() {
		this._batch_requests = false;
		_$1.each(this.request_batchers, function(batcher) {
			batcher.stop();
			batcher.clear();
		});
	};
	/**
	* push() keeps the standard async-array-push
	* behavior around after the lib is loaded.
	* This is only useful for external integrations that
	* do not wish to rely on our convenience methods
	* (created in the snippet).
	*
	* ### Usage:
	*     mixpanel.push(['register', { a: 'b' }]);
	*
	* @param {Array} item A [function_name, args...] array to be executed
	*/
	MixpanelLib.prototype.push = function(item) {
		this._execute_array([item]);
	};
	/**
	* Disable events on the Mixpanel object. If passed no arguments,
	* this function disables tracking of any event. If passed an
	* array of event names, those events will be disabled, but other
	* events will continue to be tracked.
	*
	* Note: this function does not stop other mixpanel functions from
	* firing, such as register() or people.set().
	*
	* @param {Array} [events] An array of event names to disable
	*/
	MixpanelLib.prototype.disable = function(events) {
		if (typeof events === "undefined") this._flags.disable_all_events = true;
		else this.__disabled_events = this.__disabled_events.concat(events);
	};
	MixpanelLib.prototype._encode_data_for_request = function(data) {
		var encoded_data = JSONStringify(data);
		if (this.get_config("api_payload_format") === PAYLOAD_TYPE_BASE64) encoded_data = _$1.base64Encode(encoded_data);
		return { "data": encoded_data };
	};
	MixpanelLib.prototype._track_or_batch = function(options, callback) {
		var truncated_data = _$1.truncate(options.data, 255);
		var endpoint = options.endpoint;
		var batcher = options.batcher;
		var should_send_immediately = options.should_send_immediately;
		var send_request_options = options.send_request_options || {};
		callback = callback || NOOP_FUNC;
		var request_enqueued_or_initiated = true;
		var send_request_immediately = _$1.bind(function() {
			if (!send_request_options.skip_hooks) truncated_data = this._run_hook("before_send_" + options.type, truncated_data);
			if (truncated_data) {
				console$1.log("MIXPANEL REQUEST:");
				console$1.log(truncated_data);
				return this._send_request(endpoint, this._encode_data_for_request(truncated_data), send_request_options, this._prepare_callback(callback, truncated_data));
			} else return null;
		}, this);
		if (this._batch_requests && !should_send_immediately) batcher.enqueue(truncated_data).then(function(succeeded) {
			if (succeeded) callback(1, truncated_data);
			else send_request_immediately();
		});
		else request_enqueued_or_initiated = send_request_immediately();
		return request_enqueued_or_initiated && truncated_data;
	};
	/**
	* Track an event. This is the most important and
	* frequently used Mixpanel function.
	*
	* ### Usage:
	*
	*     // track an event named 'Registered'
	*     mixpanel.track('Registered', {'Gender': 'Male', 'Age': 21});
	*
	*     // track an event using navigator.sendBeacon
	*     mixpanel.track('Left page', {'duration_seconds': 35}, {transport: 'sendBeacon'});
	*
	* To track link clicks or form submissions, see track_links() or track_forms().
	*
	* @param {String} event_name The name of the event. This can be anything the user does - 'Button Click', 'Sign Up', 'Item Purchased', etc.
	* @param {Object} [properties] A set of properties to include with the event you're sending. These describe the user who did the event or details about the event itself.
	* @param {Object} [options] Optional configuration for this track request.
	* @param {String} [options.transport] Transport method for network request ('xhr' or 'sendBeacon').
	* @param {Boolean} [options.send_immediately] Whether to bypass batching/queueing and send track request immediately.
	* @param {Function} [callback] If provided, the callback function will be called after tracking the event.
	* @returns {Boolean|Object} If the tracking request was successfully initiated/queued, an object
	* with the tracking payload sent to the API server is returned; otherwise false.
	*/
	MixpanelLib.prototype.track = addOptOutCheckMixpanelLib(function(event_name, properties, options, callback) {
		if (!callback && typeof options === "function") {
			callback = options;
			options = null;
		}
		options = options || {};
		var transport = options["transport"];
		if (transport) options.transport = transport;
		var should_send_immediately = options["send_immediately"];
		if (typeof callback !== "function") callback = NOOP_FUNC;
		if (_$1.isUndefined(event_name)) {
			this.report_error("No event name provided to mixpanel.track");
			return;
		}
		if (this._event_is_disabled(event_name)) {
			callback(0);
			return;
		}
		properties = _$1.extend({}, properties);
		properties["token"] = this.get_config("token");
		var start_timestamp = this["persistence"].remove_event_timer(event_name);
		if (!_$1.isUndefined(start_timestamp)) {
			var duration_in_ms = (/* @__PURE__ */ new Date()).getTime() - start_timestamp;
			properties["$duration"] = parseFloat((duration_in_ms / 1e3).toFixed(3));
		}
		this._set_default_superprops();
		var marketing_properties = this.get_config("track_marketing") ? _$1.info.marketingParams() : {};
		properties = _$1.extend({}, _$1.info.properties({ "mp_loader": this.get_config("mp_loader") }), marketing_properties, this["persistence"].properties(), this.unpersisted_superprops, this.get_session_recording_properties(), properties);
		var property_blacklist = this.get_config("property_blacklist");
		if (_$1.isArray(property_blacklist)) _$1.each(property_blacklist, function(blacklisted_prop) {
			delete properties[blacklisted_prop];
		});
		else this.report_error("Invalid value for property_blacklist config: " + property_blacklist);
		var data = {
			"event": event_name,
			"properties": properties
		};
		return this._track_or_batch({
			type: "events",
			data,
			endpoint: this.get_api_host("events") + "/" + this.get_config("api_routes")["track"],
			batcher: this.request_batchers.events,
			should_send_immediately,
			send_request_options: options
		}, callback);
	});
	/**
	* Register the current user into one/many groups.
	*
	* ### Usage:
	*
	*      mixpanel.set_group('company', ['mixpanel', 'google']) // an array of IDs
	*      mixpanel.set_group('company', 'mixpanel')
	*      mixpanel.set_group('company', 128746312)
	*
	* @param {String} group_key Group key
	* @param {Array|String|Number} group_ids An array of group IDs, or a singular group ID
	* @param {Function} [callback] If provided, the callback will be called after tracking the event.
	*
	*/
	MixpanelLib.prototype.set_group = addOptOutCheckMixpanelLib(function(group_key, group_ids, callback) {
		if (!_$1.isArray(group_ids)) group_ids = [group_ids];
		var prop = {};
		prop[group_key] = group_ids;
		this.register(prop);
		return this["people"].set(group_key, group_ids, callback);
	});
	/**
	* Add a new group for this user.
	*
	* ### Usage:
	*
	*      mixpanel.add_group('company', 'mixpanel')
	*
	* @param {String} group_key Group key
	* @param {*} group_id A valid Mixpanel property type
	* @param {Function} [callback] If provided, the callback will be called after tracking the event.
	*/
	MixpanelLib.prototype.add_group = addOptOutCheckMixpanelLib(function(group_key, group_id, callback) {
		var old_values = this.get_property(group_key);
		var prop = {};
		if (old_values === void 0) {
			prop[group_key] = [group_id];
			this.register(prop);
		} else if (old_values.indexOf(group_id) === -1) {
			old_values.push(group_id);
			prop[group_key] = old_values;
			this.register(prop);
		}
		return this["people"].union(group_key, group_id, callback);
	});
	/**
	* Remove a group from this user.
	*
	* ### Usage:
	*
	*      mixpanel.remove_group('company', 'mixpanel')
	*
	* @param {String} group_key Group key
	* @param {*} group_id A valid Mixpanel property type
	* @param {Function} [callback] If provided, the callback will be called after tracking the event.
	*/
	MixpanelLib.prototype.remove_group = addOptOutCheckMixpanelLib(function(group_key, group_id, callback) {
		var old_value = this.get_property(group_key);
		if (old_value !== void 0) {
			var idx = old_value.indexOf(group_id);
			if (idx > -1) {
				old_value.splice(idx, 1);
				this.register({ group_key: old_value });
			}
			if (old_value.length === 0) this.unregister(group_key);
		}
		return this["people"].remove(group_key, group_id, callback);
	});
	/**
	* Track an event with specific groups.
	*
	* ### Usage:
	*
	*      mixpanel.track_with_groups('purchase', {'product': 'iphone'}, {'University': ['UCB', 'UCLA']})
	*
	* @param {String} event_name The name of the event (see `mixpanel.track()`)
	* @param {Object=} properties A set of properties to include with the event you're sending (see `mixpanel.track()`)
	* @param {Object=} groups An object mapping group name keys to one or more values
	* @param {Function} [callback] If provided, the callback will be called after tracking the event.
	*/
	MixpanelLib.prototype.track_with_groups = addOptOutCheckMixpanelLib(function(event_name, properties, groups, callback) {
		var tracking_props = _$1.extend({}, properties || {});
		_$1.each(groups, function(v, k) {
			if (v !== null && v !== void 0) tracking_props[k] = v;
		});
		return this.track(event_name, tracking_props, callback);
	});
	MixpanelLib.prototype._create_map_key = function(group_key, group_id) {
		return group_key + "_" + JSON.stringify(group_id);
	};
	MixpanelLib.prototype._remove_group_from_cache = function(group_key, group_id) {
		delete this._cached_groups[this._create_map_key(group_key, group_id)];
	};
	/**
	* Look up reference to a Mixpanel group
	*
	* ### Usage:
	*
	*       mixpanel.get_group(group_key, group_id)
	*
	* @param {String} group_key Group key
	* @param {Object} group_id A valid Mixpanel property type
	* @returns {Object} A MixpanelGroup identifier
	*/
	MixpanelLib.prototype.get_group = function(group_key, group_id) {
		var map_key = this._create_map_key(group_key, group_id);
		var group = this._cached_groups[map_key];
		if (group === void 0 || group._group_key !== group_key || group._group_id !== group_id) {
			group = new MixpanelGroup();
			group._init(this, group_key, group_id);
			this._cached_groups[map_key] = group;
		}
		return group;
	};
	/**
	* Track a default Mixpanel page view event, which includes extra default event properties to
	* improve page view data.
	*
	* ### Usage:
	*
	*     // track a default $mp_web_page_view event
	*     mixpanel.track_pageview();
	*
	*     // track a page view event with additional event properties
	*     mixpanel.track_pageview({'ab_test_variant': 'card-layout-b'});
	*
	*     // example approach to track page views on different page types as event properties
	*     mixpanel.track_pageview({'page': 'pricing'});
	*     mixpanel.track_pageview({'page': 'homepage'});
	*
	*     // UNCOMMON: Tracking a page view event with a custom event_name option. NOT expected to be used for
	*     // individual pages on the same site or product. Use cases for custom event_name may be page
	*     // views on different products or internal applications that are considered completely separate
	*     mixpanel.track_pageview({'page': 'customer-search'}, {'event_name': '[internal] Admin Page View'});
	*
	* ### Notes:
	*
	* The `config.track_pageview` option for <a href="#mixpanelinit">mixpanel.init()</a>
	* may be turned on for tracking page loads automatically.
	*
	*     // track only page loads
	*     mixpanel.init(PROJECT_TOKEN, {track_pageview: true});
	*
	*     // track when the URL changes in any manner
	*     mixpanel.init(PROJECT_TOKEN, {track_pageview: 'full-url'});
	*
	*     // track when the URL changes, ignoring any changes in the hash part
	*     mixpanel.init(PROJECT_TOKEN, {track_pageview: 'url-with-path-and-query-string'});
	*
	*     // track when the path changes, ignoring any query parameter or hash changes
	*     mixpanel.init(PROJECT_TOKEN, {track_pageview: 'url-with-path'});
	*
	* @param {Object} [properties] An optional set of additional properties to send with the page view event
	* @param {Object} [options] Page view tracking options
	* @param {String} [options.event_name] - Alternate name for the tracking event
	* @returns {Boolean|Object} If the tracking request was successfully initiated/queued, an object
	* with the tracking payload sent to the API server is returned; otherwise false.
	*/
	MixpanelLib.prototype.track_pageview = addOptOutCheckMixpanelLib(function(properties, options) {
		if (typeof properties !== "object") properties = {};
		options = options || {};
		var event_name = options["event_name"] || "$mp_web_page_view";
		var default_page_properties = _$1.extend(_$1.info.mpPageViewProperties(), _$1.info.campaignParams(), _$1.info.clickParams());
		var event_properties = _$1.extend({}, default_page_properties, properties);
		return this.track(event_name, event_properties);
	});
	/**
	* Track clicks on a set of document elements. Selector must be a
	* valid query. Elements must exist on the page at the time track_links is called.
	*
	* ### Usage:
	*
	*     // track click for link id #nav
	*     mixpanel.track_links('#nav', 'Clicked Nav Link');
	*
	* ### Notes:
	*
	* This function will wait up to 300 ms for the Mixpanel
	* servers to respond. If they have not responded by that time
	* it will head to the link without ensuring that your event
	* has been tracked.  To configure this timeout please see the
	* set_config() documentation below.
	*
	* If you pass a function in as the properties argument, the
	* function will receive the DOMElement that triggered the
	* event as an argument.  You are expected to return an object
	* from the function; any properties defined on this object
	* will be sent to mixpanel as event properties.
	*
	* @type {Function}
	* @param {Object|String} query A valid DOM query, element or jQuery-esque list
	* @param {String} event_name The name of the event to track
	* @param {Object|Function} [properties] A properties object or function that returns a dictionary of properties when passed a DOMElement
	*/
	MixpanelLib.prototype.track_links = function() {
		return this._track_dom.call(this, LinkTracker, arguments);
	};
	/**
	* Track form submissions. Selector must be a valid query.
	*
	* ### Usage:
	*
	*     // track submission for form id 'register'
	*     mixpanel.track_forms('#register', 'Created Account');
	*
	* ### Notes:
	*
	* This function will wait up to 300 ms for the mixpanel
	* servers to respond, if they have not responded by that time
	* it will head to the link without ensuring that your event
	* has been tracked.  To configure this timeout please see the
	* set_config() documentation below.
	*
	* If you pass a function in as the properties argument, the
	* function will receive the DOMElement that triggered the
	* event as an argument.  You are expected to return an object
	* from the function; any properties defined on this object
	* will be sent to mixpanel as event properties.
	*
	* @type {Function}
	* @param {Object|String} query A valid DOM query, element or jQuery-esque list
	* @param {String} event_name The name of the event to track
	* @param {Object|Function} [properties] This can be a set of properties, or a function that returns a set of properties after being passed a DOMElement
	*/
	MixpanelLib.prototype.track_forms = function() {
		return this._track_dom.call(this, FormTracker, arguments);
	};
	/**
	* Time an event by including the time between this call and a
	* later 'track' call for the same event in the properties sent
	* with the event.
	*
	* ### Usage:
	*
	*     // time an event named 'Registered'
	*     mixpanel.time_event('Registered');
	*     mixpanel.track('Registered', {'Gender': 'Male', 'Age': 21});
	*
	* When called for a particular event name, the next track call for that event
	* name will include the elapsed time between the 'time_event' and 'track'
	* calls. This value is stored as seconds in the '$duration' property.
	*
	* @param {String} event_name The name of the event.
	*/
	MixpanelLib.prototype.time_event = function(event_name) {
		if (_$1.isUndefined(event_name)) {
			this.report_error("No event name provided to mixpanel.time_event");
			return;
		}
		if (this._event_is_disabled(event_name)) return;
		this["persistence"].set_event_timer(event_name, (/* @__PURE__ */ new Date()).getTime());
	};
	var REGISTER_DEFAULTS = { "persistent": true };
	/**
	* Helper to parse options param for register methods, maintaining
	* legacy support for plain "days" param instead of options object
	* @param {Number|Object} [days_or_options] 'days' option (Number), or Options object for register methods
	* @returns {Object} options object
	*/
	var options_for_register = function(days_or_options) {
		var options;
		if (_$1.isObject(days_or_options)) options = days_or_options;
		else if (!_$1.isUndefined(days_or_options)) options = { "days": days_or_options };
		else options = {};
		return _$1.extend({}, REGISTER_DEFAULTS, options);
	};
	/**
	* Register a set of super properties, which are included with all
	* events. This will overwrite previous super property values.
	*
	* ### Usage:
	*
	*     // register 'Gender' as a super property
	*     mixpanel.register({'Gender': 'Female'});
	*
	*     // register several super properties when a user signs up
	*     mixpanel.register({
	*         'Email': 'jdoe@example.com',
	*         'Account Type': 'Free'
	*     });
	*
	*     // register only for the current pageload
	*     mixpanel.register({'Name': 'Pat'}, {persistent: false});
	*
	* @param {Object} properties An associative array of properties to store about the user
	* @param {Number|Object} [days_or_options] Options object or number of days since the user's last visit to store the super properties (only valid for persisted props)
	* @param {boolean} [days_or_options.days] - number of days since the user's last visit to store the super properties (only valid for persisted props)
	* @param {boolean} [days_or_options.persistent=true] - whether to put in persistent storage (cookie/localStorage)
	*/
	MixpanelLib.prototype.register = function(props, days_or_options) {
		var options = options_for_register(days_or_options);
		if (options["persistent"]) this["persistence"].register(props, options["days"]);
		else _$1.extend(this.unpersisted_superprops, props);
	};
	/**
	* Register a set of super properties only once. This will not
	* overwrite previous super property values, unlike register().
	*
	* ### Usage:
	*
	*     // register a super property for the first time only
	*     mixpanel.register_once({
	*         'First Login Date': new Date().toISOString()
	*     });
	*
	*     // register once, only for the current pageload
	*     mixpanel.register_once({
	*         'First interaction time': new Date().toISOString()
	*     }, 'None', {persistent: false});
	*
	* ### Notes:
	*
	* If default_value is specified, current super properties
	* with that value will be overwritten.
	*
	* @param {Object} properties An associative array of properties to store about the user
	* @param {*} [default_value] Value to override if already set in super properties (ex: 'False') Default: 'None'
	* @param {Number|Object} [days_or_options] Options object or number of days since the user's last visit to store the super properties (only valid for persisted props)
	* @param {boolean} [days_or_options.days] - number of days since the user's last visit to store the super properties (only valid for persisted props)
	* @param {boolean} [days_or_options.persistent=true] - whether to put in persistent storage (cookie/localStorage)
	*/
	MixpanelLib.prototype.register_once = function(props, default_value, days_or_options) {
		var options = options_for_register(days_or_options);
		if (options["persistent"]) this["persistence"].register_once(props, default_value, options["days"]);
		else {
			if (typeof default_value === "undefined") default_value = "None";
			_$1.each(props, function(val, prop) {
				if (!this.unpersisted_superprops.hasOwnProperty(prop) || this.unpersisted_superprops[prop] === default_value) this.unpersisted_superprops[prop] = val;
			}, this);
		}
	};
	/**
	* Delete a super property stored with the current user.
	*
	* @param {String} property The name of the super property to remove
	* @param {Object} [options]
	* @param {boolean} [options.persistent=true] - whether to look in persistent storage (cookie/localStorage)
	*/
	MixpanelLib.prototype.unregister = function(property, options) {
		options = options_for_register(options);
		if (options["persistent"]) this["persistence"].unregister(property);
		else delete this.unpersisted_superprops[property];
	};
	MixpanelLib.prototype._register_single = function(prop, value) {
		var props = {};
		props[prop] = value;
		this.register(props);
	};
	/**
	* Identify a user with a unique ID to track user activity across
	* devices, tie a user to their events, and create a user profile.
	* If you never call this method, unique visitors are tracked using
	* a UUID generated the first time they visit the site.
	*
	* Call identify when you know the identity of the current user,
	* typically after login or signup. We recommend against using
	* identify for anonymous visitors to your site.
	*
	* ### Notes:
	* If your project has
	* <a href="https://help.mixpanel.com/hc/en-us/articles/360039133851">ID Merge</a>
	* enabled, the identify method will connect pre- and
	* post-authentication events when appropriate.
	*
	* If your project does not have ID Merge enabled, identify will
	* change the user's local distinct_id to the unique ID you pass.
	* Events tracked prior to authentication will not be connected
	* to the same user identity. If ID Merge is disabled, alias can
	* be used to connect pre- and post-registration events.
	*
	* @param {String} [unique_id] A string that uniquely identifies a user. If not provided, the distinct_id currently in the persistent store (cookie or localStorage) will be used.
	*/
	MixpanelLib.prototype.identify = function(new_distinct_id, _set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback) {
		var previous_distinct_id = this.get_distinct_id();
		if (new_distinct_id && previous_distinct_id !== new_distinct_id) {
			if (typeof new_distinct_id === "string" && new_distinct_id.indexOf(DEVICE_ID_PREFIX) === 0) {
				this.report_error("distinct_id cannot have $device: prefix");
				return -1;
			}
			this.register({ "$user_id": new_distinct_id });
		}
		if (!this.get_property("$device_id")) {
			var device_id = previous_distinct_id;
			this.register_once({
				"$had_persisted_distinct_id": true,
				"$device_id": device_id
			}, "");
		}
		if (new_distinct_id !== previous_distinct_id && new_distinct_id !== this.get_property(ALIAS_ID_KEY)) {
			this.unregister(ALIAS_ID_KEY);
			this.register({ "distinct_id": new_distinct_id });
		}
		this._flags.identify_called = true;
		this["people"]._flush(_set_callback, _add_callback, _append_callback, _set_once_callback, _union_callback, _unset_callback, _remove_callback);
		if (new_distinct_id !== previous_distinct_id) this.track("$identify", {
			"distinct_id": new_distinct_id,
			"$anon_distinct_id": previous_distinct_id
		}, { skip_hooks: true });
		if (new_distinct_id !== previous_distinct_id) this.flags.fetchFlags();
	};
	/**
	* Clears super properties and generates a new random distinct_id for this instance.
	* Useful for clearing data when a user logs out.
	*/
	MixpanelLib.prototype.reset = function() {
		this.stop_session_recording();
		this["persistence"].clear();
		this._flags.identify_called = false;
		var uuid = _$1.UUID();
		this.register_once({
			"distinct_id": DEVICE_ID_PREFIX + uuid,
			"$device_id": uuid
		}, "");
		this._check_and_start_session_recording();
	};
	/**
	* Returns the current distinct id of the user. This is either the id automatically
	* generated by the library or the id that has been passed by a call to identify().
	*
	* ### Notes:
	*
	* get_distinct_id() can only be called after the Mixpanel library has finished loading.
	* init() has a loaded function available to handle this automatically. For example:
	*
	*     // set distinct_id after the mixpanel library has loaded
	*     mixpanel.init('YOUR PROJECT TOKEN', {
	*         loaded: function(mixpanel) {
	*             distinct_id = mixpanel.get_distinct_id();
	*         }
	*     });
	*/
	MixpanelLib.prototype.get_distinct_id = function() {
		return this.get_property("distinct_id");
	};
	/**
	* The alias method creates an alias which Mixpanel will use to
	* remap one id to another. Multiple aliases can point to the
	* same identifier.
	*
	* The following is a valid use of alias:
	*
	*     mixpanel.alias('new_id', 'existing_id');
	*     // You can add multiple id aliases to the existing ID
	*     mixpanel.alias('newer_id', 'existing_id');
	*
	* Aliases can also be chained - the following is a valid example:
	*
	*     mixpanel.alias('new_id', 'existing_id');
	*     // chain newer_id - new_id - existing_id
	*     mixpanel.alias('newer_id', 'new_id');
	*
	* Aliases cannot point to multiple identifiers - the following
	* example will not work:
	*
	*     mixpanel.alias('new_id', 'existing_id');
	*     // this is invalid as 'new_id' already points to 'existing_id'
	*     mixpanel.alias('new_id', 'newer_id');
	*
	* ### Notes:
	*
	* If your project does not have
	* <a href="https://help.mixpanel.com/hc/en-us/articles/360039133851">ID Merge</a>
	* enabled, the best practice is to call alias once when a unique
	* ID is first created for a user (e.g., when a user first registers
	* for an account). Do not use alias multiple times for a single
	* user without ID Merge enabled.
	*
	* @param {String} alias A unique identifier that you want to use for this user in the future.
	* @param {String} [original] The current identifier being used for this user.
	*/
	MixpanelLib.prototype.alias = function(alias, original) {
		if (alias === this.get_property(PEOPLE_DISTINCT_ID_KEY)) {
			this.report_error("Attempting to create alias for existing People user - aborting.");
			return -2;
		}
		var _this = this;
		if (_$1.isUndefined(original)) original = this.get_distinct_id();
		if (alias !== original) {
			this._register_single(ALIAS_ID_KEY, alias);
			return this.track("$create_alias", {
				"alias": alias,
				"distinct_id": original
			}, { skip_hooks: true }, function() {
				_this.identify(alias);
			});
		} else {
			this.report_error("alias matches current distinct_id - skipping api call.");
			this.identify(alias);
			return -1;
		}
	};
	/**
	* Provide a string to recognize the user by. The string passed to
	* this method will appear in the Mixpanel Streams product rather
	* than an automatically generated name. Name tags do not have to
	* be unique.
	*
	* This value will only be included in Streams data.
	*
	* @param {String} name_tag A human readable name for the user
	* @deprecated
	*/
	MixpanelLib.prototype.name_tag = function(name_tag) {
		this._register_single("mp_name_tag", name_tag);
	};
	/**
	* Update the configuration of a mixpanel library instance.
	*
	* The default config is:
	*
	*     {
	*       // host for requests (customizable for e.g. a local proxy)
	*       api_host: 'https://api-js.mixpanel.com',
	*
	*       // endpoints for different types of requests
	*       api_routes: {
	*         track: 'track/',
	*         engage: 'engage/',
	*         groups: 'groups/',
	*       }
	*
	*       // HTTP method for tracking requests
	*       api_method: 'POST'
	*
	*       // transport for sending requests ('XHR' or 'sendBeacon')
	*       // NB: sendBeacon should only be used for scenarios such as
	*       // page unload where a "best-effort" attempt to send is
	*       // acceptable; the sendBeacon API does not support callbacks
	*       // or any way to know the result of the request. Mixpanel
	*       // tracking via sendBeacon will not support any event-
	*       // batching or retry mechanisms.
	*       api_transport: 'XHR'
	*
	*       // request-batching/queueing/retry
	*       batch_requests: true,
	*
	*       // maximum number of events/updates to send in a single
	*       // network request
	*       batch_size: 50,
	*
	*       // milliseconds to wait between sending batch requests
	*       batch_flush_interval_ms: 5000,
	*
	*       // milliseconds to wait for network responses to batch requests
	*       // before they are considered timed-out and retried
	*       batch_request_timeout_ms: 90000,
	*
	*       // override value for cookie domain, only useful for ensuring
	*       // correct cross-subdomain cookies on unusual domains like
	*       // subdomain.mainsite.avocat.fr; NB this cannot be used to
	*       // set cookies on a different domain than the current origin
	*       cookie_domain: ''
	*
	*       // super properties cookie expiration (in days)
	*       cookie_expiration: 365
	*
	*       // if true, cookie will be set with SameSite=None; Secure
	*       // this is only useful in special situations, like embedded
	*       // 3rd-party iframes that set up a Mixpanel instance
	*       cross_site_cookie: false
	*
	*       // super properties span subdomains
	*       cross_subdomain_cookie: true
	*
	*       // debug mode
	*       debug: false
	*
	*       // if this is true, the mixpanel cookie or localStorage entry
	*       // will be deleted, and no user persistence will take place
	*       disable_persistence: false
	*
	*       // if this is true, Mixpanel will automatically determine
	*       // City, Region and Country data using the IP address of
	*       //the client
	*       ip: true
	*
	*       // opt users out of tracking by this Mixpanel instance by default
	*       opt_out_tracking_by_default: false
	*
	*       // opt users out of browser data storage by this Mixpanel instance by default
	*       opt_out_persistence_by_default: false
	*
	*       // persistence mechanism used by opt-in/opt-out methods - cookie
	*       // or localStorage - falls back to cookie if localStorage is unavailable
	*       opt_out_tracking_persistence_type: 'localStorage'
	*
	*       // customize the name of cookie/localStorage set by opt-in/opt-out methods
	*       opt_out_tracking_cookie_prefix: null
	*
	*       // type of persistent store for super properties (cookie/
	*       // localStorage) if set to 'localStorage', any existing
	*       // mixpanel cookie value with the same persistence_name
	*       // will be transferred to localStorage and deleted
	*       persistence: 'cookie'
	*
	*       // name for super properties persistent store
	*       persistence_name: ''
	*
	*       // names of properties/superproperties which should never
	*       // be sent with track() calls
	*       property_blacklist: []
	*
	*       // if this is true, mixpanel cookies will be marked as
	*       // secure, meaning they will only be transmitted over https
	*       secure_cookie: false
	*
	*       // disables enriching user profiles with first touch marketing data
	*       skip_first_touch_marketing: false
	*
	*       // the amount of time track_links will
	*       // wait for Mixpanel's servers to respond
	*       track_links_timeout: 300
	*
	*       // adds any UTM parameters and click IDs present on the page to any events fired
	*       track_marketing: true
	*
	*       // enables automatic page view tracking using default page view events through
	*       // the track_pageview() method
	*       track_pageview: false
	*
	*       // if you set upgrade to be true, the library will check for
	*       // a cookie from our old js library and import super
	*       // properties from it, then the old cookie is deleted
	*       // The upgrade config option only works in the initialization,
	*       // so make sure you set it when you create the library.
	*       upgrade: false
	*
	*       // extra HTTP request headers to set for each API request, in
	*       // the format {'Header-Name': value}
	*       xhr_headers: {}
	*
	*       // whether to ignore or respect the web browser's Do Not Track setting
	*       ignore_dnt: false
	*     }
	*
	*
	* @param {Object} config A dictionary of new configuration values to update
	*/
	MixpanelLib.prototype.set_config = function(config) {
		if (_$1.isObject(config)) {
			_$1.extend(this["config"], config);
			if (config["batch_size"]) _$1.each(this.request_batchers, function(batcher) {
				batcher.resetBatchSize();
			});
			if (!this.get_config("persistence_name")) this["config"]["persistence_name"] = this["config"]["cookie_name"];
			if (!this.get_config("disable_persistence")) this["config"]["disable_persistence"] = this["config"]["disable_cookie"];
			if (this["persistence"]) this["persistence"].update_config(this["config"]);
			Config.DEBUG = Config.DEBUG || this.get_config("debug");
			if (("autocapture" in config || "record_heatmap_data" in config) && this.autocapture) this.autocapture.init();
		}
	};
	/**
	* returns the current config object for the library.
	*/
	MixpanelLib.prototype.get_config = function(prop_name) {
		return this["config"][prop_name];
	};
	/**
	* Fetch a hook function from config, with safe default, and run it
	* against the given arguments
	* @param {string} hook_name which hook to retrieve
	* @returns {any|null} return value of user-provided hook, or null if nothing was returned
	*/
	MixpanelLib.prototype._run_hook = function(hook_name) {
		var ret = (this["config"]["hooks"][hook_name] || IDENTITY_FUNC).apply(this, slice.call(arguments, 1));
		if (typeof ret === "undefined") {
			this.report_error(hook_name + " hook did not return a value");
			ret = null;
		}
		return ret;
	};
	/**
	* Returns the value of the super property named property_name. If no such
	* property is set, get_property() will return the undefined value.
	*
	* ### Notes:
	*
	* get_property() can only be called after the Mixpanel library has finished loading.
	* init() has a loaded function available to handle this automatically. For example:
	*
	*     // grab value for 'user_id' after the mixpanel library has loaded
	*     mixpanel.init('YOUR PROJECT TOKEN', {
	*         loaded: function(mixpanel) {
	*             user_id = mixpanel.get_property('user_id');
	*         }
	*     });
	*
	* @param {String} property_name The name of the super property you want to retrieve
	*/
	MixpanelLib.prototype.get_property = function(property_name) {
		return this["persistence"].load_prop([property_name]);
	};
	/**
	* Get the API host for a specific endpoint type, falling back to the default api_host if not specified
	*
	* @param {String} endpoint_type The type of endpoint (e.g., "events", "people", "groups")
	* @returns {String} The API host to use for this endpoint
	*/
	MixpanelLib.prototype.get_api_host = function(endpoint_type) {
		return this.get_config("api_hosts")[endpoint_type] || this.get_config("api_host");
	};
	MixpanelLib.prototype.toString = function() {
		var name = this.get_config("name");
		if (name !== PRIMARY_INSTANCE_NAME) name = PRIMARY_INSTANCE_NAME + "." + name;
		return name;
	};
	MixpanelLib.prototype._event_is_disabled = function(event_name) {
		return _$1.isBlockedUA(userAgent) || this._flags.disable_all_events || _$1.include(this.__disabled_events, event_name);
	};
	MixpanelLib.prototype._gdpr_init = function() {
		if (this.get_config("opt_out_tracking_persistence_type") === "localStorage" && _$1.localStorage.is_supported()) {
			if (!this.has_opted_in_tracking() && this.has_opted_in_tracking({ "persistence_type": "cookie" })) this.opt_in_tracking({ "enable_persistence": false });
			if (!this.has_opted_out_tracking() && this.has_opted_out_tracking({ "persistence_type": "cookie" })) this.opt_out_tracking({ "clear_persistence": false });
			this.clear_opt_in_out_tracking({
				"persistence_type": "cookie",
				"enable_persistence": false
			});
		}
		if (this.has_opted_out_tracking()) this._gdpr_update_persistence({ "clear_persistence": true });
		else if (!this.has_opted_in_tracking() && (this.get_config("opt_out_tracking_by_default") || _$1.cookie.get("mp_optout"))) {
			_$1.cookie.remove("mp_optout");
			this.opt_out_tracking({ "clear_persistence": this.get_config("opt_out_persistence_by_default") });
		}
	};
	/**
	* Enable or disable persistence based on options
	* only enable/disable if persistence is not already in this state
	* @param {boolean} [options.clear_persistence] If true, will delete all data stored by the sdk in persistence and disable it
	* @param {boolean} [options.enable_persistence] If true, will re-enable sdk persistence
	*/
	MixpanelLib.prototype._gdpr_update_persistence = function(options) {
		var disabled;
		if (options && options["clear_persistence"]) disabled = true;
		else if (options && options["enable_persistence"]) disabled = false;
		else return;
		if (!this.get_config("disable_persistence") && this["persistence"].disabled !== disabled) this["persistence"].set_disabled(disabled);
		if (disabled) {
			this.stop_batch_senders();
			this.stop_session_recording();
		} else if (this._batchers_were_started) this.start_batch_senders();
	};
	MixpanelLib.prototype._gdpr_call_func = function(func, options) {
		options = _$1.extend({
			"track": _$1.bind(this.track, this),
			"persistence_type": this.get_config("opt_out_tracking_persistence_type"),
			"cookie_prefix": this.get_config("opt_out_tracking_cookie_prefix"),
			"cookie_expiration": this.get_config("cookie_expiration"),
			"cross_site_cookie": this.get_config("cross_site_cookie"),
			"cross_subdomain_cookie": this.get_config("cross_subdomain_cookie"),
			"cookie_domain": this.get_config("cookie_domain"),
			"secure_cookie": this.get_config("secure_cookie"),
			"ignore_dnt": this.get_config("ignore_dnt")
		}, options);
		if (!_$1.localStorage.is_supported()) options["persistence_type"] = "cookie";
		return func(this.get_config("token"), {
			track: options["track"],
			trackEventName: options["track_event_name"],
			trackProperties: options["track_properties"],
			persistenceType: options["persistence_type"],
			persistencePrefix: options["cookie_prefix"],
			cookieDomain: options["cookie_domain"],
			cookieExpiration: options["cookie_expiration"],
			crossSiteCookie: options["cross_site_cookie"],
			crossSubdomainCookie: options["cross_subdomain_cookie"],
			secureCookie: options["secure_cookie"],
			ignoreDnt: options["ignore_dnt"]
		});
	};
	/**
	* Opt the user in to data tracking and cookies/localstorage for this Mixpanel instance
	*
	* ### Usage:
	*
	*     // opt user in
	*     mixpanel.opt_in_tracking();
	*
	*     // opt user in with specific event name, properties, cookie configuration
	*     mixpanel.opt_in_tracking({
	*         track_event_name: 'User opted in',
	*         track_event_properties: {
	*             'Email': 'jdoe@example.com'
	*         },
	*         cookie_expiration: 30,
	*         secure_cookie: true
	*     });
	*
	* @param {Object} [options] A dictionary of config options to override
	* @param {function} [options.track] Function used for tracking a Mixpanel event to record the opt-in action (default is this Mixpanel instance's track method)
	* @param {string} [options.track_event_name=$opt_in] Event name to be used for tracking the opt-in action
	* @param {Object} [options.track_properties] Set of properties to be tracked along with the opt-in action
	* @param {boolean} [options.enable_persistence=true] If true, will re-enable sdk persistence
	* @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
	* @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
	* @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this Mixpanel instance's config)
	* @param {string} [options.cookie_domain] Custom cookie domain (overrides value specified in this Mixpanel instance's config)
	* @param {boolean} [options.cross_site_cookie] Whether the opt-in cookie is set as cross-site-enabled (overrides value specified in this Mixpanel instance's config)
	* @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this Mixpanel instance's config)
	* @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this Mixpanel instance's config)
	*/
	MixpanelLib.prototype.opt_in_tracking = function(options) {
		options = _$1.extend({ "enable_persistence": true }, options);
		this._gdpr_call_func(optIn, options);
		this._gdpr_update_persistence(options);
	};
	/**
	* Opt the user out of data tracking and cookies/localstorage for this Mixpanel instance
	*
	* ### Usage:
	*
	*     // opt user out
	*     mixpanel.opt_out_tracking();
	*
	*     // opt user out with different cookie configuration from Mixpanel instance
	*     mixpanel.opt_out_tracking({
	*         cookie_expiration: 30,
	*         secure_cookie: true
	*     });
	*
	* @param {Object} [options] A dictionary of config options to override
	* @param {boolean} [options.delete_user=true] If true, will delete the currently identified user's profile and clear all charges after opting the user out
	* @param {boolean} [options.clear_persistence=true] If true, will delete all data stored by the sdk in persistence
	* @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
	* @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
	* @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this Mixpanel instance's config)
	* @param {string} [options.cookie_domain] Custom cookie domain (overrides value specified in this Mixpanel instance's config)
	* @param {boolean} [options.cross_site_cookie] Whether the opt-in cookie is set as cross-site-enabled (overrides value specified in this Mixpanel instance's config)
	* @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this Mixpanel instance's config)
	* @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this Mixpanel instance's config)
	*/
	MixpanelLib.prototype.opt_out_tracking = function(options) {
		options = _$1.extend({
			"clear_persistence": true,
			"delete_user": true
		}, options);
		if (options["delete_user"] && this["people"] && this["people"]._identify_called()) {
			this["people"].delete_user();
			this["people"].clear_charges();
		}
		this._gdpr_call_func(optOut, options);
		this._gdpr_update_persistence(options);
	};
	/**
	* Check whether the user has opted in to data tracking and cookies/localstorage for this Mixpanel instance
	*
	* ### Usage:
	*
	*     var has_opted_in = mixpanel.has_opted_in_tracking();
	*     // use has_opted_in value
	*
	* @param {Object} [options] A dictionary of config options to override
	* @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
	* @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
	* @returns {boolean} current opt-in status
	*/
	MixpanelLib.prototype.has_opted_in_tracking = function(options) {
		return this._gdpr_call_func(hasOptedIn, options);
	};
	/**
	* Check whether the user has opted out of data tracking and cookies/localstorage for this Mixpanel instance
	*
	* ### Usage:
	*
	*     var has_opted_out = mixpanel.has_opted_out_tracking();
	*     // use has_opted_out value
	*
	* @param {Object} [options] A dictionary of config options to override
	* @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
	* @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
	* @returns {boolean} current opt-out status
	*/
	MixpanelLib.prototype.has_opted_out_tracking = function(options) {
		return this._gdpr_call_func(hasOptedOut, options);
	};
	/**
	* Clear the user's opt in/out status of data tracking and cookies/localstorage for this Mixpanel instance
	*
	* ### Usage:
	*
	*     // clear user's opt-in/out status
	*     mixpanel.clear_opt_in_out_tracking();
	*
	*     // clear user's opt-in/out status with specific cookie configuration - should match
	*     // configuration used when opt_in_tracking/opt_out_tracking methods were called.
	*     mixpanel.clear_opt_in_out_tracking({
	*         cookie_expiration: 30,
	*         secure_cookie: true
	*     });
	*
	* @param {Object} [options] A dictionary of config options to override
	* @param {boolean} [options.enable_persistence=true] If true, will re-enable sdk persistence
	* @param {string} [options.persistence_type=localStorage] Persistence mechanism used - cookie or localStorage - falls back to cookie if localStorage is unavailable
	* @param {string} [options.cookie_prefix=__mp_opt_in_out] Custom prefix to be used in the cookie/localstorage name
	* @param {Number} [options.cookie_expiration] Number of days until the opt-in cookie expires (overrides value specified in this Mixpanel instance's config)
	* @param {string} [options.cookie_domain] Custom cookie domain (overrides value specified in this Mixpanel instance's config)
	* @param {boolean} [options.cross_site_cookie] Whether the opt-in cookie is set as cross-site-enabled (overrides value specified in this Mixpanel instance's config)
	* @param {boolean} [options.cross_subdomain_cookie] Whether the opt-in cookie is set as cross-subdomain or not (overrides value specified in this Mixpanel instance's config)
	* @param {boolean} [options.secure_cookie] Whether the opt-in cookie is set as secure or not (overrides value specified in this Mixpanel instance's config)
	*/
	MixpanelLib.prototype.clear_opt_in_out_tracking = function(options) {
		options = _$1.extend({ "enable_persistence": true }, options);
		this._gdpr_call_func(clearOptInOut, options);
		this._gdpr_update_persistence(options);
	};
	MixpanelLib.prototype.report_error = function(msg, err) {
		console$1.error.apply(console$1.error, arguments);
		try {
			if (!err && !(msg instanceof Error)) msg = new Error(msg);
			this.get_config("error_reporter")(msg, err);
		} catch (err) {
			console$1.error(err);
		}
	};
	MixpanelLib.prototype["init"] = MixpanelLib.prototype.init;
	MixpanelLib.prototype["reset"] = MixpanelLib.prototype.reset;
	MixpanelLib.prototype["disable"] = MixpanelLib.prototype.disable;
	MixpanelLib.prototype["time_event"] = MixpanelLib.prototype.time_event;
	MixpanelLib.prototype["track"] = MixpanelLib.prototype.track;
	MixpanelLib.prototype["track_links"] = MixpanelLib.prototype.track_links;
	MixpanelLib.prototype["track_forms"] = MixpanelLib.prototype.track_forms;
	MixpanelLib.prototype["track_pageview"] = MixpanelLib.prototype.track_pageview;
	MixpanelLib.prototype["register"] = MixpanelLib.prototype.register;
	MixpanelLib.prototype["register_once"] = MixpanelLib.prototype.register_once;
	MixpanelLib.prototype["unregister"] = MixpanelLib.prototype.unregister;
	MixpanelLib.prototype["identify"] = MixpanelLib.prototype.identify;
	MixpanelLib.prototype["alias"] = MixpanelLib.prototype.alias;
	MixpanelLib.prototype["name_tag"] = MixpanelLib.prototype.name_tag;
	MixpanelLib.prototype["set_config"] = MixpanelLib.prototype.set_config;
	MixpanelLib.prototype["get_config"] = MixpanelLib.prototype.get_config;
	MixpanelLib.prototype["get_api_host"] = MixpanelLib.prototype.get_api_host;
	MixpanelLib.prototype["get_property"] = MixpanelLib.prototype.get_property;
	MixpanelLib.prototype["get_distinct_id"] = MixpanelLib.prototype.get_distinct_id;
	MixpanelLib.prototype["toString"] = MixpanelLib.prototype.toString;
	MixpanelLib.prototype["opt_out_tracking"] = MixpanelLib.prototype.opt_out_tracking;
	MixpanelLib.prototype["opt_in_tracking"] = MixpanelLib.prototype.opt_in_tracking;
	MixpanelLib.prototype["has_opted_out_tracking"] = MixpanelLib.prototype.has_opted_out_tracking;
	MixpanelLib.prototype["has_opted_in_tracking"] = MixpanelLib.prototype.has_opted_in_tracking;
	MixpanelLib.prototype["clear_opt_in_out_tracking"] = MixpanelLib.prototype.clear_opt_in_out_tracking;
	MixpanelLib.prototype["get_group"] = MixpanelLib.prototype.get_group;
	MixpanelLib.prototype["set_group"] = MixpanelLib.prototype.set_group;
	MixpanelLib.prototype["add_group"] = MixpanelLib.prototype.add_group;
	MixpanelLib.prototype["remove_group"] = MixpanelLib.prototype.remove_group;
	MixpanelLib.prototype["track_with_groups"] = MixpanelLib.prototype.track_with_groups;
	MixpanelLib.prototype["start_batch_senders"] = MixpanelLib.prototype.start_batch_senders;
	MixpanelLib.prototype["stop_batch_senders"] = MixpanelLib.prototype.stop_batch_senders;
	MixpanelLib.prototype["start_session_recording"] = MixpanelLib.prototype.start_session_recording;
	MixpanelLib.prototype["stop_session_recording"] = MixpanelLib.prototype.stop_session_recording;
	MixpanelLib.prototype["pause_session_recording"] = MixpanelLib.prototype.pause_session_recording;
	MixpanelLib.prototype["resume_session_recording"] = MixpanelLib.prototype.resume_session_recording;
	MixpanelLib.prototype["get_session_recording_properties"] = MixpanelLib.prototype.get_session_recording_properties;
	MixpanelLib.prototype["get_session_replay_url"] = MixpanelLib.prototype.get_session_replay_url;
	MixpanelLib.prototype["get_tab_id"] = MixpanelLib.prototype.get_tab_id;
	MixpanelLib.prototype["DEFAULT_API_ROUTES"] = DEFAULT_API_ROUTES;
	MixpanelLib.prototype["__get_recorder"] = MixpanelLib.prototype.__get_recorder;
	MixpanelPersistence.prototype["properties"] = MixpanelPersistence.prototype.properties;
	MixpanelPersistence.prototype["update_search_keyword"] = MixpanelPersistence.prototype.update_search_keyword;
	MixpanelPersistence.prototype["update_referrer_info"] = MixpanelPersistence.prototype.update_referrer_info;
	MixpanelPersistence.prototype["get_cross_subdomain"] = MixpanelPersistence.prototype.get_cross_subdomain;
	MixpanelPersistence.prototype["clear"] = MixpanelPersistence.prototype.clear;
	var instances = {};
	var extend_mp = function() {
		_$1.each(instances, function(instance, name) {
			if (name !== PRIMARY_INSTANCE_NAME) mixpanel_master[name] = instance;
		});
		mixpanel_master["_"] = _$1;
	};
	var override_mp_init_func = function() {
		mixpanel_master["init"] = function(token, config, name) {
			if (name) {
				if (!mixpanel_master[name]) {
					mixpanel_master[name] = instances[name] = create_mplib(token, config, name);
					mixpanel_master[name]._loaded();
				}
				return mixpanel_master[name];
			} else {
				var instance = mixpanel_master;
				if (instances[PRIMARY_INSTANCE_NAME]) instance = instances[PRIMARY_INSTANCE_NAME];
				else if (token) {
					instance = create_mplib(token, config, PRIMARY_INSTANCE_NAME);
					instance._loaded();
					instances[PRIMARY_INSTANCE_NAME] = instance;
				}
				mixpanel_master = instance;
				if (init_type === INIT_SNIPPET) win[PRIMARY_INSTANCE_NAME] = mixpanel_master;
				extend_mp();
			}
		};
	};
	var add_dom_loaded_handler = function() {
		function dom_loaded_handler() {
			if (dom_loaded_handler.done) return;
			dom_loaded_handler.done = true;
			DOM_LOADED = true;
			ENQUEUE_REQUESTS = false;
			_$1.each(instances, function(inst) {
				inst._dom_loaded();
			});
		}
		function do_scroll_check() {
			try {
				document$1.documentElement.doScroll("left");
			} catch (e) {
				setTimeout(do_scroll_check, 1);
				return;
			}
			dom_loaded_handler();
		}
		if (document$1.addEventListener) if (document$1.readyState === "complete") dom_loaded_handler();
		else document$1.addEventListener("DOMContentLoaded", dom_loaded_handler, false);
		else if (document$1.attachEvent) {
			document$1.attachEvent("onreadystatechange", dom_loaded_handler);
			var toplevel = false;
			try {
				toplevel = win.frameElement === null;
			} catch (e) {}
			if (document$1.documentElement.doScroll && toplevel) do_scroll_check();
		}
		_$1.register_event(win, "load", dom_loaded_handler, true);
	};
	function init_as_module(bundle_loader) {
		load_extra_bundle = bundle_loader;
		init_type = INIT_MODULE;
		mixpanel_master = new MixpanelLib();
		override_mp_init_func();
		mixpanel_master["init"]();
		add_dom_loaded_handler();
		return mixpanel_master;
	}
	function loadNoop(_src, onload) {
		onload();
	}
	var mixpanel = init_as_module(loadNoop);

//#endregion
//#region assets/dev/js/utils/tiers.js
	var TIERS_PRIORITY = Object.freeze([
		"free",
		"essential",
		"essential-oct2023",
		"advanced",
		"expert",
		"agency"
	]);
	/**
	* @type {Readonly<{
	*     free: string;
	*     essential: string;
	*     'essential-oct2023': string;
	*     advanced: string;
	*     expert: string;
	*     agency: string;
	* }>}
	*/
	var TIERS = Object.freeze(TIERS_PRIORITY.reduce(function(acc, tier) {
		acc[tier] = tier;
		return acc;
	}, {}));

//#endregion
//#region core/common/modules/events-manager/assets/js/module.js
	init_defineProperty();
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
	/** @type {typeof mixpanel | null} */
	var mixpanelInstance = null;
	var _default = /*#__PURE__*/ function(_elementorModules$Mod) {
		function _default() {
			var _this;
			_classCallCheck(this, _default);
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			_this = _callSuper$1(this, _default, [].concat(args));
			_defineProperty(_this, "trackingEnabled", false);
			_defineProperty(_this, "availableExperiments", []);
			return _this;
		}
		_inherits$1(_default, _elementorModules$Mod);
		return _createClass(_default, [
			{
				key: "onInit",
				value: function onInit() {
					var _this2 = this;
					this.config = eventsConfig;
					if (!this.canSendEvents()) return;
					this.initializeMixpanel(function() {
						return _this2.enableTracking();
					});
				}
			},
			{
				key: "initializeMixpanel",
				value: function initializeMixpanel(onLoaded) {
					var editorEventsConfig = elementorCommon.config.editor_events;
					installEventsProxyFetch(editorEventsConfig === null || editorEventsConfig === void 0 ? void 0 : editorEventsConfig.proxy_api_host, editorEventsConfig === null || editorEventsConfig === void 0 ? void 0 : editorEventsConfig.proxy_lib_base_path, editorEventsConfig === null || editorEventsConfig === void 0 ? void 0 : editorEventsConfig.token);
					if (mixpanelInstance && mixpanelInstance.isInitialized) onLoaded(mixpanelInstance);
					else {
						var _elementorCommon$conf;
						var _elementorCommon$conf2;
						var _elementorCommon$conf3;
						var _elementorCommon$conf4;
						var _elementorCommon$conf5;
						var _elementorCommon$conf6;
						var _elementorCommon$conf7;
						mixpanelInstance = mixpanel.init((_elementorCommon$conf = elementorCommon.config.editor_events) === null || _elementorCommon$conf === void 0 ? void 0 : _elementorCommon$conf.token, {
							persistence: "localStorage",
							persistence_name: "elementor-builder-editor",
							debug: (_elementorCommon$conf2 = (_elementorCommon$conf3 = elementorCommon.config.editor_events) === null || _elementorCommon$conf3 === void 0 ? void 0 : _elementorCommon$conf3.debug) !== null && _elementorCommon$conf2 !== void 0 ? _elementorCommon$conf2 : false,
							autocapture: false,
							flags: true,
							api_host: (_elementorCommon$conf4 = elementorCommon.config.editor_events) === null || _elementorCommon$conf4 === void 0 ? void 0 : _elementorCommon$conf4.proxy_api_host,
							lib_base_path: (_elementorCommon$conf5 = elementorCommon.config.editor_events) === null || _elementorCommon$conf5 === void 0 ? void 0 : _elementorCommon$conf5.proxy_lib_base_path,
							loaded: onLoaded,
							record_sessions_percent: (_elementorCommon$conf6 = (_elementorCommon$conf7 = elementorCommon.config.editor_events) === null || _elementorCommon$conf7 === void 0 ? void 0 : _elementorCommon$conf7.session_recording_percent) !== null && _elementorCommon$conf6 !== void 0 ? _elementorCommon$conf6 : 0,
							record_idle_timeout_ms: 60 * 1e3,
							record_min_ms: 5 * 1e3,
							record_mask_text_selector: "",
							remote_settings_mode: "strict"
						}, "elementor-builder-editor");
					}
					elementorCommon.config.editor_events.mixpanelInstance = mixpanelInstance;
				}
			},
			{
				key: "enableTracking",
				value: function enableTracking() {
					var _elementorCommon$conf8;
					if (!this.isMixpanelReady()) return;
					var userId = (_elementorCommon$conf8 = elementorCommon.config.editor_events) === null || _elementorCommon$conf8 === void 0 ? void 0 : _elementorCommon$conf8.user_id;
					mixpanelInstance.register({ appType: "Editor" });
					if (userId) {
						var _elementorCommon$conf9;
						mixpanelInstance.identify(userId);
						mixpanelInstance.people.set_once({
							$user_id: userId,
							$last_login: (/* @__PURE__ */ new Date()).toISOString(),
							$plan_type: ((_elementorCommon$conf9 = elementorCommon.config.library_connect) === null || _elementorCommon$conf9 === void 0 ? void 0 : _elementorCommon$conf9.plan_type) || TIERS.free
						});
					}
					this.trackingEnabled = true;
					this.availableExperiments = Object.keys(elementorCommon.config.experimentalFeatures || {});
				}
			},
			{
				key: "dispatchEvent",
				value: function dispatchEvent(name, data) {
					var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
					if (!this.canSendEvents()) return;
					try {
						var _elementorCommon$conf0;
						var _elementorCommon$conf1;
						var _elementorCommon$conf10;
						var _elementorCommon$conf11;
						var _elementorCommon$conf12;
						var _elementorCommon$conf13;
						var _elementorCommon$conf14;
						var _elementorCommon$conf15;
						var _elementorCommon$conf16;
						if (!this.trackingEnabled) this.enableTracking();
						var eventData = _objectSpread({
							user_id: ((_elementorCommon$conf0 = elementorCommon.config.editor_events) === null || _elementorCommon$conf0 === void 0 ? void 0 : _elementorCommon$conf0.user_id) || null,
							user_roles: ((_elementorCommon$conf1 = elementorCommon.config.library_connect) === null || _elementorCommon$conf1 === void 0 ? void 0 : _elementorCommon$conf1.user_roles) || [],
							subscription_id: ((_elementorCommon$conf10 = elementorCommon.config.editor_events) === null || _elementorCommon$conf10 === void 0 ? void 0 : _elementorCommon$conf10.subscription_id) || null,
							user_tier: ((_elementorCommon$conf11 = elementorCommon.config.library_connect) === null || _elementorCommon$conf11 === void 0 ? void 0 : _elementorCommon$conf11.current_access_tier) || null,
							url: (_elementorCommon$conf12 = elementorCommon.config.editor_events) === null || _elementorCommon$conf12 === void 0 ? void 0 : _elementorCommon$conf12.site_url,
							wp_version: (_elementorCommon$conf13 = elementorCommon.config.editor_events) === null || _elementorCommon$conf13 === void 0 ? void 0 : _elementorCommon$conf13.wp_version,
							client_id: (_elementorCommon$conf14 = elementorCommon.config.editor_events) === null || _elementorCommon$conf14 === void 0 ? void 0 : _elementorCommon$conf14.site_key,
							app_version: (_elementorCommon$conf15 = elementorCommon.config.editor_events) === null || _elementorCommon$conf15 === void 0 ? void 0 : _elementorCommon$conf15.elementor_version,
							site_language: (_elementorCommon$conf16 = elementorCommon.config.editor_events) === null || _elementorCommon$conf16 === void 0 ? void 0 : _elementorCommon$conf16.site_language,
							experiments: this.availableExperiments
						}, data);
						mixpanelInstance.track(name, eventData, options);
					} catch (error) {
						var _elementorCommon$conf17;
						if ((_elementorCommon$conf17 = elementorCommon.config.editor_events) !== null && _elementorCommon$conf17 !== void 0 && _elementorCommon$conf17.debug) console.error("Events Manager dispatch failed:", error);
					}
				}
			},
			{
				key: "featureFlagIsActive",
				value: function() {
					var _featureFlagIsActive = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee(flagName) {
						var _mixpanelInstance;
						var isEnabled;
						return import_regenerator.default.wrap(function(_context) {
							while (1) switch (_context.prev = _context.next) {
								case 0:
									if (!("function" !== typeof ((_mixpanelInstance = mixpanelInstance) === null || _mixpanelInstance === void 0 || (_mixpanelInstance = _mixpanelInstance.flags) === null || _mixpanelInstance === void 0 ? void 0 : _mixpanelInstance.is_enabled))) {
										_context.next = 1;
										break;
									}
									return _context.abrupt("return", false);
								case 1:
									_context.next = 2;
									return mixpanelInstance.flags.is_enabled(flagName, false);
								case 2:
									isEnabled = _context.sent;
									return _context.abrupt("return", true === isEnabled);
								case 3:
								case "end": return _context.stop();
							}
						}, _callee);
					}));
					function featureFlagIsActive(_x) {
						return _featureFlagIsActive.apply(this, arguments);
					}
					return featureFlagIsActive;
				}()
			},
			{
				key: "getExperimentVariant",
				value: function() {
					var _getExperimentVariant = _asyncToGenerator(/*#__PURE__*/ import_regenerator.default.mark(function _callee2(experimentName) {
						var defaultValue;
						var _elementorCommon$conf18;
						var _elementorCommon$conf19;
						var isAbTestingEnabled;
						var variant;
						var _args2 = arguments;
						return import_regenerator.default.wrap(function(_context2) {
							while (1) switch (_context2.prev = _context2.next) {
								case 0:
									defaultValue = _args2.length > 1 && _args2[1] !== void 0 ? _args2[1] : "control";
									_context2.prev = 1;
									if (this.canSendEvents()) {
										_context2.next = 2;
										break;
									}
									return _context2.abrupt("return", defaultValue);
								case 2:
									isAbTestingEnabled = (_elementorCommon$conf18 = (_elementorCommon$conf19 = elementorCommon.config.editor_events) === null || _elementorCommon$conf19 === void 0 ? void 0 : _elementorCommon$conf19.flags_enabled) !== null && _elementorCommon$conf18 !== void 0 ? _elementorCommon$conf18 : false;
									if (isAbTestingEnabled) {
										_context2.next = 3;
										break;
									}
									return _context2.abrupt("return", defaultValue);
								case 3:
									if (mixpanelInstance) {
										_context2.next = 4;
										break;
									}
									return _context2.abrupt("return", defaultValue);
								case 4:
									if (!this.trackingEnabled) this.enableTracking();
									if (mixpanelInstance.flags) {
										_context2.next = 5;
										break;
									}
									return _context2.abrupt("return", defaultValue);
								case 5:
									if (!("function" !== typeof mixpanelInstance.flags.get_variant_value)) {
										_context2.next = 6;
										break;
									}
									return _context2.abrupt("return", defaultValue);
								case 6:
									_context2.next = 7;
									return mixpanelInstance.flags.get_variant_value(experimentName, defaultValue);
								case 7:
									variant = _context2.sent;
									if (!(void 0 === variant || null === variant)) {
										_context2.next = 8;
										break;
									}
									return _context2.abrupt("return", defaultValue);
								case 8: return _context2.abrupt("return", variant);
								case 9:
									_context2.prev = 9;
									_context2["catch"](1);
									return _context2.abrupt("return", defaultValue);
								case 10:
								case "end": return _context2.stop();
							}
						}, _callee2, this, [[1, 9]]);
					}));
					function getExperimentVariant(_x2) {
						return _getExperimentVariant.apply(this, arguments);
					}
					return getExperimentVariant;
				}()
			},
			{
				key: "startExperiment",
				value: function startExperiment(experimentName, experimentVariant) {
					if (!this.trackingEnabled) return;
					mixpanelInstance.track("$experiment_started", {
						"Experiment name": experimentName,
						"Variant name": experimentVariant
					});
				}
			},
			{
				key: "isMixpanelReady",
				value: function isMixpanelReady() {
					if ("undefined" === typeof mixpanelInstance || !mixpanelInstance) return false;
					try {
						var distinctId = mixpanelInstance.get_distinct_id();
						return distinctId !== void 0 && distinctId !== null;
					} catch (error) {
						return false;
					}
				}
			},
			{
				key: "canSendEvents",
				value: function canSendEvents() {
					var _elementorCommon;
					return !!((_elementorCommon = elementorCommon) !== null && _elementorCommon !== void 0 && (_elementorCommon = _elementorCommon.config) !== null && _elementorCommon !== void 0 && (_elementorCommon = _elementorCommon.editor_events) !== null && _elementorCommon !== void 0 && _elementorCommon.can_send_events);
				}
			},
			{
				key: "getMixpanelInstance",
				value: function getMixpanelInstance() {
					return this.isMixpanelReady() ? mixpanelInstance : void 0;
				}
			}
		]);
	}(elementorModules.Module);

//#endregion
//#region assets/dev/js/utils/notifications.js
	var require_notifications = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_defineProperty();
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
		module.exports = elementorModules.Module.extend({
			initToast: function initToast() {
				var toast = elementorCommon.dialogsManager.createWidget("buttons", {
					id: "elementor-toast",
					position: {
						my: "center bottom",
						at: "center bottom-10",
						of: "#elementor-panel-inner",
						autoRefresh: true
					},
					hide: {
						onClick: true,
						auto: true,
						autoDelay: 1e4
					},
					effects: {
						show: function show() {
							var $widget = toast.getElements("widget");
							$widget.show();
							toast.refreshPosition();
							var top = parseInt($widget.css("top"), 10);
							$widget.hide().css("top", top + 100);
							$widget.animate({
								opacity: "show",
								height: "show",
								paddingBottom: "show",
								paddingTop: "show",
								top
							}, {
								easing: "linear",
								duration: 300
							});
						},
						hide: function hide() {
							var $widget = toast.getElements("widget");
							var top = parseInt($widget.css("top"), 10);
							$widget.animate({
								opacity: "hide",
								height: "hide",
								paddingBottom: "hide",
								paddingTop: "hide",
								top: top + 100
							}, {
								easing: "linear",
								duration: 300
							});
						}
					},
					button: { tag: "button" }
				});
				toast.getElements("widget").attr({
					role: "status",
					"aria-live": "polite",
					"aria-atomic": "true"
				});
				this.getToast = function() {
					return toast;
				};
			},
			showToast: function showToast(options) {
				var toast = this.getToast();
				toast.setMessage(options.message);
				toast.getElements("buttonsWrapper").empty();
				toast.focusedButton = null;
				toast.buttons = [];
				var isPositionValid = this.isPositionValid(options === null || options === void 0 ? void 0 : options.position);
				if (!isPositionValid) this.positionToWindow();
				if (options !== null && options !== void 0 && options.position && isPositionValid) toast.setSettings("position", options.position);
				if (options.buttons) options.buttons.forEach(function(button) {
					toast.addButton(button);
				});
				if (options.classes) toast.getElements("widget").addClass(options.classes);
				if (options.sticky) toast.setSettings({ hide: {
					auto: false,
					onClick: false
				} });
				return toast.show();
			},
			isPositionValid: function isPositionValid(position) {
				var _position$of;
				var positionToCheck = (_position$of = position === null || position === void 0 ? void 0 : position.of) !== null && _position$of !== void 0 ? _position$of : this.getToast().getSettings("position").of;
				if (!positionToCheck) return false;
				return !!document.querySelector(positionToCheck);
			},
			positionToWindow: function positionToWindow() {
				var toast = this.getToast();
				var position = _objectSpread(_objectSpread({}, toast.getSettings("position")), {}, {
					my: "right top",
					at: "right-10 top+42",
					of: ""
				});
				toast.setSettings("position", position);
				toast.getElements("widget").addClass("dialog-position-window");
			},
			onInit: function onInit() {
				this.initToast();
			}
		});
	}));

//#endregion
//#region core/common/assets/js/common.js
	var import_notifications = /* @__PURE__ */ __toESM(require_notifications());
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
	function _superPropGet(t, o, e, r) {
		var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
		return 2 & r && "function" == typeof p ? function(t) {
			return p.apply(e, t);
		} : p;
	}
	var ElementorCommonApp = /*#__PURE__*/ function(_elementorModules$Vie) {
		function ElementorCommonApp() {
			_classCallCheck(this, ElementorCommonApp);
			return _callSuper(this, ElementorCommonApp, arguments);
		}
		_inherits$1(ElementorCommonApp, _elementorModules$Vie);
		return _createClass(ElementorCommonApp, [
			{
				key: "setMarionetteTemplateCompiler",
				value: function setMarionetteTemplateCompiler() {
					Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
						var $template = "#" === templateId.charAt(0) ? Backbone.$("script" + templateId) : Backbone.$(templateId);
						if (!$template.length) throw new Marionette.Error({
							name: "NoTemplateError",
							message: "Could not find template: \"" + templateId + "\""
						});
						return $template.html();
					};
					Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate, options) {
						options = {
							evaluate: /<#([\s\S]+?)#>/g,
							interpolate: /{{{([\s\S]+?)}}}/g,
							escape: /{{([^}]+?)}}(?!})/g
						};
						return _.template(rawTemplate, options);
					};
				}
			},
			{
				key: "getDefaultElements",
				value: function getDefaultElements() {
					return {
						$window: jQuery(window),
						$document: jQuery(document),
						$body: jQuery(document.body)
					};
				}
			},
			{
				key: "initComponents",
				value: function initComponents() {
					this.events = new Events();
					this.eventsManager = new _default();
					this.debug = new import_debug.default();
					this.helpers = new Helpers();
					this.storage = new _default$11();
					this.dialogsManager = new DialogsManager.Instance();
					this.notifications = new import_notifications.default();
					this.api = window.$e;
					$e.components.register(new Component());
					elementorCommon.elements.$window.on("elementor:init-components", function() {
						$e.components.register(new Component$1());
					});
					this.initModules();
				}
			},
			{
				key: "initModules",
				value: function initModules() {
					var _this = this;
					var activeModules = this.config.activeModules;
					var modules = {
						ajax: _default$10,
						finder: _default$2,
						connect: _default$1
					};
					activeModules.forEach(function(name) {
						if (modules[name]) _this[name] = new modules[name](_this.config[name]);
					});
				}
			},
			{
				key: "compileArrayTemplateArgs",
				value: function compileArrayTemplateArgs(template, templateArgs) {
					return template.replace(/%(?:(\d+)\$)?s/g, function(match, number) {
						if (!number) number = 1;
						number--;
						return void 0 !== templateArgs[number] ? templateArgs[number] : match;
					});
				}
			},
			{
				key: "compileObjectTemplateArgs",
				value: function compileObjectTemplateArgs(template, templateArgs) {
					return template.replace(/{{(?:([ \w]+))}}/g, function(match, name) {
						return templateArgs[name] ? templateArgs[name] : match;
					});
				}
			},
			{
				key: "compileTemplate",
				value: function compileTemplate(template, templateArgs) {
					return jQuery.isPlainObject(templateArgs) ? this.compileObjectTemplateArgs(template, templateArgs) : this.compileArrayTemplateArgs(template, templateArgs);
				}
			},
			{
				key: "translate",
				value: function translate(stringKey, context, templateArgs, i18nStack) {
					if (context) i18nStack = this.config[context].i18n;
					if (!i18nStack) i18nStack = this.config.i18n;
					var string = i18nStack[stringKey];
					if (void 0 === string) string = stringKey;
					if (templateArgs) string = this.compileTemplate(string, templateArgs);
					return string;
				}
			},
			{
				key: "onInit",
				value: function onInit() {
					_superPropGet(ElementorCommonApp, "onInit", this, 3)([]);
					this.config = elementorCommonConfig;
					this.setMarionetteTemplateCompiler();
				}
			}
		]);
	}(elementorModules.ViewModule);
	window.elementorCommon = new ElementorCommonApp();
	elementorCommon.initComponents();

//#endregion
})(elementorVendors.reduxToolkit, wp.i18n);
//# sourceMappingURL=common.js.map