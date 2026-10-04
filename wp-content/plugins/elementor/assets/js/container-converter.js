(function(_wordpress_i18n) {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) {
			__defProp(target, name, {
				get: all[name],
				enumerable: true
			});
		}
		if (!no_symbols) {
			__defProp(target, Symbol.toStringTag, { value: "Module" });
		}
		return target;
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
//#region modules/container-converter/assets/js/editor/maps/utils.js
/**
	* Generate a mapping object for responsive controls.
	*
	* Usage:
	*  1. responsive( 'old_key', 'new_key' );
	*  2. responsive( 'old_key', ( { key, value, deviceValue, settings, breakpoint } ) => { return [ key, value ] } );
	*
	* @param {string}            key   - Control name without device suffix.
	* @param {string | Function} value - New control name without device suffix, or a callback.
	*
	* @return {Object} mapping object
	*/
	function responsive(key, value) {
		var breakpoints = [""].concat(_toConsumableArray(Object.keys(elementorFrontend.config.responsive.activeBreakpoints)));
		return Object.fromEntries(breakpoints.map(function(breakpoint) {
			var deviceKey = getDeviceKey(key, breakpoint);
			if ("string" === typeof value) {
				var newDeviceKey = getDeviceKey(value, breakpoint);
				return [deviceKey, function(_ref) {
					return [newDeviceKey, _ref.settings[deviceKey]];
				}];
			}
			return [deviceKey, function(_ref2) {
				var settings = _ref2.settings;
				var desktopValue = _ref2.value;
				return value({
					key,
					deviceKey,
					value: desktopValue,
					deviceValue: settings[deviceKey],
					settings,
					breakpoint
				});
			}];
		}));
	}
	/**
	* Get a setting key for a device.
	*
	* Examples:
	*  1. getDeviceKey( 'some_control', 'mobile' ) => 'some_control_mobile'.
	*  2. getDeviceKey( 'some_control', '' ) => 'some_control'.
	*
	* @param {string} key        - Setting key.
	* @param {string} breakpoint - Breakpoint name.
	*
	* @return {string} device key
	*/
	function getDeviceKey(key, breakpoint) {
		return [key, breakpoint].filter(function(v) {
			return !!v;
		}).join("_");
	}

//#endregion
//#region modules/container-converter/assets/js/editor/maps/section.js
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
	var map$1 = function map(_ref) {
		var isInner = _ref.isInner;
		var _ref$settings = _ref.settings;
		var settings = _ref$settings === void 0 ? {} : _ref$settings;
		var widthKey = isInner ? "width" : "boxed_width";
		return _objectSpread$2(_objectSpread$2(_objectSpread$2({}, "boxed" === settings.layout ? responsive("content_width", widthKey) : { content_width: null }), "min-height" === settings.height && responsive("custom_height", "min_height")), {}, {
			layout: function layout(_ref2) {
				var value = _ref2.value;
				return ["content_width", {
					boxed: "boxed",
					full_width: "full"
				}[value] || value];
			},
			height: function height(_ref3) {
				var value = _ref3.value;
				var sectionSettings = _ref3.settings;
				switch (value) {
					case "full":
						value = {
							size: 100,
							unit: "vh"
						};
						break;
					case "min-height":
						value = sectionSettings.custom_height || {
							size: 400,
							unit: "px"
						};
						break;
					default: return false;
				}
				return ["min_height", value];
			},
			gap: function gap(_ref4) {
				var value = _ref4.value;
				var sectionSettings = _ref4.settings;
				var sizesMap = {
					no: 0,
					narrow: 5,
					extended: 15,
					wide: 20,
					wider: 30
				};
				value = "custom" === value ? sectionSettings.gap_columns_custom : {
					size: sizesMap[value],
					column: "" + sizesMap[value],
					row: "" + sizesMap[value],
					unit: "px"
				};
				return ["flex_gap", value];
			},
			gap_columns_custom: null,
			column_position: function column_position(_ref5) {
				var value = _ref5.value;
				return ["flex_align_items", {
					top: "flex-start",
					middle: "center",
					bottom: "flex-end"
				}[value] || value];
			}
		});
	};

//#endregion
//#region modules/container-converter/assets/js/editor/maps/column.js
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
	var map = function map() {
		return _objectSpread$1(_objectSpread$1(_objectSpread$1({}, responsive("_inline_size", function(_ref) {
			var deviceValue = _ref.deviceValue;
			var breakpoint = _ref.breakpoint;
			return [getDeviceKey("width", breakpoint), {
				size: deviceValue,
				unit: "%"
			}];
		})), responsive("content_position", function(_ref2) {
			var deviceValue = _ref2.deviceValue;
			var breakpoint = _ref2.breakpoint;
			return [getDeviceKey("flex_justify_content", breakpoint), {
				top: "flex-start",
				bottom: "flex-end"
			}[deviceValue] || deviceValue];
		})), responsive("space_between_widgets", function(_ref3) {
			var deviceValue = _ref3.deviceValue;
			var breakpoint = _ref3.breakpoint;
			return [getDeviceKey("flex_gap", breakpoint), {
				size: deviceValue,
				column: "" + deviceValue,
				row: "" + deviceValue,
				unit: "px"
			}];
		}));
	};

//#endregion
//#region modules/container-converter/assets/js/editor/migrator.js
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
	var Migrator = /*#__PURE__*/ function() {
		function Migrator() {
			_classCallCheck(this, Migrator);
		}
		return _createClass(Migrator, null, [
			{
				key: "migrate",
				value: function migrate(settings, map) {
					return Object.fromEntries(Object.entries(_objectSpread({}, settings)).map(function(_ref) {
						var _ref2 = _slicedToArray(_ref, 2);
						var key = _ref2[0];
						var value = _ref2[1];
						var mapped = map[key];
						if (null === mapped) return null;
						if ("string" === typeof mapped) return [mapped, value];
						if ("function" === typeof mapped) return mapped({
							key,
							value,
							settings
						});
						return [key, value];
					}).filter(Boolean));
				}
			},
			{
				key: "canConvertToContainer",
				value: function canConvertToContainer(elType) {
					return Object.keys(this.config).includes(elType);
				}
			},
			{
				key: "getLegacyControlsMapping",
				value: function getLegacyControlsMapping(model) {
					var config = this.config[model.elType];
					if (!config) return {};
					var mapping = config.legacyControlsMapping;
					return "function" === typeof mapping ? mapping(model) : mapping;
				}
			},
			{
				key: "normalizeSettings",
				value: function normalizeSettings(model, settings) {
					var config = this.config[model.elType];
					if (!config.normalizeSettings) return settings;
					return config.normalizeSettings(settings, model);
				}
			}
		]);
	}();
	/**
	* Migrations configuration by `elType`.
	*
	* @type {Object}
	*/
	_defineProperty(Migrator, "config", {
		section: {
			legacyControlsMapping: map$1,
			normalizeSettings: function normalizeSettings(settings, _ref3) {
				var isInner = _ref3.isInner;
				return _objectSpread(_objectSpread({}, settings), {}, {
					flex_direction: "row",
					flex_align_items: settings.flex_align_items || "stretch",
					flex_gap: settings.flex_gap || {
						size: 10,
						column: "10",
						row: "10",
						unit: "px"
					}
				}, isInner ? { content_width: "full" } : {});
			}
		},
		column: {
			legacyControlsMapping: map,
			normalizeSettings: function normalizeSettings(settings) {
				return _objectSpread(_objectSpread({}, settings), {}, { content_width: "full" });
			}
		}
	});

//#endregion
//#region modules/container-converter/assets/js/editor/commands/convert.js
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
	/**
	* @typedef {import('../../../../../../assets/dev/js/editor/container/container')} Container
	*/
	var Convert = /*#__PURE__*/ function(_$e$modules$editor$do) {
		function Convert() {
			_classCallCheck(this, Convert);
			return _callSuper$3(this, Convert, arguments);
		}
		_inherits(Convert, _$e$modules$editor$do);
		return _createClass(Convert, [
			{
				key: "getHistory",
				value: function getHistory() {
					return {
						type: (0, _wordpress_i18n.__)("Converted to Container", "elementor"),
						title: (0, _wordpress_i18n.__)("Section", "elementor")
					};
				}
			},
			{
				key: "validateArgs",
				value: function validateArgs() {
					var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
					this.requireContainer(args);
				}
			},
			{
				key: "apply",
				value: function apply(args) {
					this.constructor.convert(args);
				}
			}
		], [{
			key: "convert",
			value: function convert(_ref) {
				var container = _ref.container;
				var _ref$rootContainer = _ref.rootContainer;
				var rootContainer = _ref$rootContainer === void 0 ? container.parent : _ref$rootContainer;
				var view = container.view;
				var elType = container.type;
				var at = rootContainer === container.parent ? view._index + 1 : view._index;
				if (!Migrator.canConvertToContainer(elType)) {
					$e.run("document/elements/create", {
						model: {
							elType: container.model.get("elType"),
							widgetType: container.model.get("widgetType"),
							settings: container.settings.toJSON({ remove: "default" })
						},
						container: rootContainer,
						options: {
							at,
							edit: false
						}
					});
					return;
				}
				var model = container.model.toJSON();
				var controlsMapping = Migrator.getLegacyControlsMapping(model);
				var settings = container.settings.toJSON({ remove: "default" });
				settings = Migrator.migrate(settings, controlsMapping);
				settings = Migrator.normalizeSettings(model, settings);
				var newContainer = $e.run("document/elements/create", {
					model: {
						elType: "container",
						settings
					},
					container: rootContainer,
					options: {
						at,
						edit: false
					}
				});
				container.children.forEach(function(child) {
					$e.run("container-converter/convert", {
						container: child,
						rootContainer: newContainer
					});
				});
			}
		}]);
	}($e.modules.editor.document.CommandHistoryBase);

//#endregion
//#region modules/container-converter/assets/js/editor/commands/convert-all.js
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
	var ConvertAll = /*#__PURE__*/ function(_$e$modules$editor$do) {
		function ConvertAll() {
			_classCallCheck(this, ConvertAll);
			return _callSuper$2(this, ConvertAll, arguments);
		}
		_inherits(ConvertAll, _$e$modules$editor$do);
		return _createClass(ConvertAll, [{
			key: "getHistory",
			value: function getHistory() {
				return {
					type: (0, _wordpress_i18n.__)("Converted to Containers", "elementor"),
					title: (0, _wordpress_i18n.__)("All Content", "elementor")
				};
			}
		}, {
			key: "apply",
			value: function apply() {
				var children = elementor.getPreviewContainer().children;
				_toConsumableArray(children).forEach(function(container) {
					$e.run("container-converter/convert", { container });
				});
			}
		}]);
	}($e.modules.editor.document.CommandHistoryBase);

//#endregion
//#region modules/container-converter/assets/js/editor/commands/index.js
	var commands_exports = /* @__PURE__ */ __exportAll({
		Convert: () => Convert,
		ConvertAll: () => ConvertAll
	});

//#endregion
//#region modules/container-converter/assets/js/editor/component.js
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
	var _default = /*#__PURE__*/ function(_$e$modules$Component) {
		function _default() {
			var _this;
			_classCallCheck(this, _default);
			_this = _callSuper$1(this, _default);
			_this.bindEvents();
			return _this;
		}
		/**
		* Listen to click event in the panel.
		*
		* @return {void}
		*/
		_inherits(_default, _$e$modules$Component);
		return _createClass(_default, [
			{
				key: "bindEvents",
				value: function bindEvents() {
					elementor.channels.editor.on("elementorContainerConverter:convert", function(_ref) {
						var container = _ref.container;
						var button = _ref.el.querySelector(".elementor-button");
						var loadingClass = "e-loading";
						button.classList.add(loadingClass);
						setTimeout(function() {
							if ("document" === container.type) $e.run("container-converter/convert-all");
							else $e.run("container-converter/convert", { container });
							button.classList.remove(loadingClass);
							button.setAttribute("disabled", true);
							elementor.notifications.showToast({ message: (0, _wordpress_i18n.__)("Your changes have been updated.", "elementor") });
						});
					});
				}
			},
			{
				key: "getNamespace",
				value: function getNamespace() {
					return "container-converter";
				}
			},
			{
				key: "defaultCommands",
				value: function defaultCommands() {
					return this.importCommands(commands_exports);
				}
			}
		]);
	}($e.modules.ComponentBase);

//#endregion
//#region modules/container-converter/assets/js/editor/module.js
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
	new (/* @__PURE__ */ function(_elementorModules$edi) {
		function Module() {
			_classCallCheck(this, Module);
			return _callSuper(this, Module, arguments);
		}
		_inherits(Module, _elementorModules$edi);
		return _createClass(Module, [{
			key: "onInit",
			value: function onInit() {
				$e.components.register(new _default());
			}
		}]);
	}(elementorModules.editor.utils.Module))();

//#endregion
})(wp.i18n);
//# sourceMappingURL=container-converter.js.map