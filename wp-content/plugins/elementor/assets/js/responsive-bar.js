(function(_wordpress_i18n) {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});

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
//#region assets/dev/js/editor/regions/responsive-bar/view.js
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
	var View = /*#__PURE__*/ function(_Marionette$ItemView) {
		function View() {
			_classCallCheck(this, View);
			return _callSuper$1(this, View, arguments);
		}
		_inherits(View, _Marionette$ItemView);
		return _createClass(View, [
			{
				key: "getTemplate",
				value: function getTemplate() {
					return "#tmpl-elementor-templates-responsive-bar";
				}
			},
			{
				key: "id",
				value: function id() {
					return "e-responsive-bar";
				}
			},
			{
				key: "ui",
				value: function ui() {
					var prefix = "#" + this.id();
					return {
						switcherInput: ".e-responsive-bar-switcher__option input",
						switcherLabel: ".e-responsive-bar-switcher__option",
						switcher: prefix + "-switcher",
						sizeInputWidth: prefix + "__input-width",
						sizeInputHeight: prefix + "__input-height",
						scaleValue: prefix + "-scale__value",
						scalePlusButton: prefix + "-scale__plus",
						scaleMinusButton: prefix + "-scale__minus",
						scaleResetButton: prefix + "-scale__reset",
						closeButton: prefix + "__close-button",
						breakpointSettingsButton: prefix + "__settings-button"
					};
				}
			},
			{
				key: "events",
				value: function events() {
					return {
						"change @ui.switcherInput": "onBreakpointSelected",
						"input @ui.sizeInputWidth": "onSizeInputChange",
						"input @ui.sizeInputHeight": "onSizeInputChange",
						"click @ui.scalePlusButton": "onScalePlusButtonClick",
						"click @ui.scaleMinusButton": "onScaleMinusButtonClick",
						"click @ui.scaleResetButton": "onScaleResetButtonClick",
						"click @ui.closeButton": "onCloseButtonClick",
						"click @ui.breakpointSettingsButton": "onBreakpointSettingsOpen"
					};
				}
			},
			{
				key: "initialize",
				value: function initialize() {
					this.listenTo(elementor.channels.deviceMode, "change", this.onDeviceModeChange);
					this.listenTo(elementor.channels.responsivePreview, "resize", this.onPreviewResize);
					this.listenTo(elementor.channels.responsivePreview, "open", this.onPreviewOpen);
					this.listenTo(elementor.channels.deviceMode, "close", this.resetScale);
				}
			},
			{
				key: "addTipsyToIconButtons",
				value: function addTipsyToIconButtons() {
					this.ui.switcherLabel.add(this.ui.closeButton).add(this.ui.breakpointSettingsButton).tipsy({
						html: true,
						gravity: "n",
						title: function title() {
							return jQuery(this).data("tooltip");
						}
					});
				}
			},
			{
				key: "restoreLastValidPreviewSize",
				value: function restoreLastValidPreviewSize() {
					var lastSize = elementor.channels.responsivePreview.request("size");
					this.ui.sizeInputWidth.val(lastSize.width).tipsy({
						html: true,
						trigger: "manual",
						gravity: "n",
						title: function title() {
							return (0, _wordpress_i18n.__)("The value inserted isn't in the breakpoint boundaries", "elementor");
						}
					});
					var tipsy = this.ui.sizeInputWidth.data("tipsy");
					tipsy.show();
					setTimeout(function() {
						return tipsy.hide();
					}, 3e3);
				}
			},
			{
				key: "autoScale",
				value: function autoScale() {
					var handlesWidth = 40 * this.scalePercentage / 100;
					var previewWidth = elementor.$previewWrapper.width() - handlesWidth;
					var iframeWidth = parseInt(elementor.$preview.css("--e-editor-preview-width"));
					if (iframeWidth * this.scalePercentage / 100 > previewWidth) {
						var scalePercentage = previewWidth / iframeWidth * 100;
						this.setScalePercentage(scalePercentage);
					} else this.setScalePercentage();
					this.scalePreview();
				}
			},
			{
				key: "scalePreview",
				value: function scalePreview() {
					var scale = this.scalePercentage / 100;
					elementor.$previewWrapper.css("--e-preview-scale", scale);
				}
			},
			{
				key: "resetScale",
				value: function resetScale() {
					this.setScalePercentage();
					this.scalePreview();
				}
			},
			{
				key: "setScalePercentage",
				value: function setScalePercentage() {
					var scalePercentage = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100;
					this.scalePercentage = scalePercentage;
					this.ui.scaleValue.text(parseInt(this.scalePercentage));
				}
			},
			{
				key: "onRender",
				value: function onRender() {
					this.addTipsyToIconButtons();
					this.setScalePercentage();
				}
			},
			{
				key: "onDeviceModeChange",
				value: function onDeviceModeChange() {
					var currentDeviceMode = elementor.channels.deviceMode.request("currentMode");
					var $currentDeviceSwitcherInput = this.ui.switcherInput.filter("[value=" + currentDeviceMode + "]");
					this.setWidthHeightInputsEditableState();
					this.ui.switcherLabel.attr("aria-selected", false);
					$currentDeviceSwitcherInput.closest("label").attr("aria-selected", true);
					if (!$currentDeviceSwitcherInput.prop("checked")) $currentDeviceSwitcherInput.prop("checked", true);
				}
			},
			{
				key: "onBreakpointSelected",
				value: function onBreakpointSelected(e) {
					var selectedDeviceMode = e.target.value;
					elementor.changeDeviceMode(selectedDeviceMode, false);
					this.autoScale();
				}
			},
			{
				key: "onBreakpointSettingsOpen",
				value: function onBreakpointSettingsOpen() {
					if (elementorCommon.elements.$body.hasClass("elementor-editor-preview")) elementor.exitPreviewMode();
					if ("panel/global/menu" === elementor.documents.currentDocument.config.panel.default_route) {
						$e.run("panel/global/close");
						return;
					}
					$e.run("editor/documents/switch", {
						id: elementor.config.kit_id,
						mode: "autosave"
					}).then(function() {
						return $e.route("panel/global/settings-layout");
					}).then(function() {
						return jQuery(".elementor-control-section_breakpoints").trigger("click");
					});
				}
			},
			{
				key: "onPreviewResize",
				value: function onPreviewResize() {
					if (this.updatingPreviewSize) return;
					var size = elementor.channels.responsivePreview.request("size");
					this.ui.sizeInputWidth.val(Math.round(size.width));
					this.ui.sizeInputHeight.val(Math.round(size.height));
				}
			},
			{
				key: "onPreviewOpen",
				value: function onPreviewOpen() {
					this.setWidthHeightInputsEditableState();
				}
			},
			{
				key: "setWidthHeightInputsEditableState",
				value: function setWidthHeightInputsEditableState() {
					if ("desktop" === elementor.channels.deviceMode.request("currentMode")) {
						this.ui.sizeInputWidth.attr("disabled", "disabled");
						this.ui.sizeInputHeight.attr("disabled", "disabled");
					} else {
						this.ui.sizeInputWidth.removeAttr("disabled");
						this.ui.sizeInputHeight.removeAttr("disabled");
					}
				}
			},
			{
				key: "onCloseButtonClick",
				value: function onCloseButtonClick() {
					elementor.changeDeviceMode("desktop");
					elementor.exitDeviceMode();
				}
			},
			{
				key: "onSizeInputChange",
				value: function onSizeInputChange() {
					var _this = this;
					clearTimeout(this.restorePreviewSizeTimeout);
					var size = {
						width: this.ui.sizeInputWidth.val(),
						height: this.ui.sizeInputHeight.val()
					};
					var currentDeviceConstrains = elementor.getCurrentDeviceConstrains();
					if (size.width < currentDeviceConstrains.minWidth || size.width > currentDeviceConstrains.maxWidth) {
						this.restorePreviewSizeTimeout = setTimeout(function() {
							return _this.restoreLastValidPreviewSize();
						}, 1500);
						return;
					}
					this.updatingPreviewSize = true;
					setTimeout(function() {
						return _this.updatingPreviewSize = false;
					}, 300);
					elementor.updatePreviewSize(size);
					this.autoScale();
				}
			},
			{
				key: "onScalePlusButtonClick",
				value: function onScalePlusButtonClick() {
					var scaleUp = 0 === this.scalePercentage % 10 ? this.scalePercentage + 10 : Math.ceil(this.scalePercentage / 10) * 10;
					if (scaleUp > 200) return;
					this.setScalePercentage(scaleUp);
					this.scalePreview();
				}
			},
			{
				key: "onScaleMinusButtonClick",
				value: function onScaleMinusButtonClick() {
					var scaleDown = 0 === this.scalePercentage % 10 ? this.scalePercentage - 10 : Math.floor(this.scalePercentage / 10) * 10;
					if (scaleDown < 50) return;
					this.setScalePercentage(scaleDown);
					this.scalePreview();
				}
			},
			{
				key: "onScaleResetButtonClick",
				value: function onScaleResetButtonClick() {
					this.resetScale();
				}
			}
		]);
	}(Marionette.ItemView);

//#endregion
//#region assets/dev/js/editor/regions/responsive-bar/responsive-bar.js
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
	var _default = /*#__PURE__*/ function(_Marionette$Region) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper(this, _default, arguments);
		}
		_inherits(_default, _Marionette$Region);
		return _createClass(_default, [
			{
				key: "initialize",
				value: function initialize() {
					var _this = this;
					this.show(new View());
					elementor.panel.$el.on({
						resizestart: function resizestart() {
							return _this.onPanelResizeStart();
						},
						resizestop: function resizestop() {
							return _this.onPanelResizeStop();
						}
					});
				}
			},
			{
				key: "onPanelResizeStart",
				value: function onPanelResizeStart() {
					this.$el.addClass("ui-resizable-resizing");
				}
			},
			{
				key: "onPanelResizeStop",
				value: function onPanelResizeStop() {
					this.$el.removeClass("ui-resizable-resizing");
				}
			}
		]);
	}(Marionette.Region);

//#endregion
//#region assets/dev/js/editor/regions/responsive-bar/index.js
	elementor.on("preview:loaded", function(isFirstLoad) {
		if (!isFirstLoad) return;
		elementor.addRegions({ responsiveBar: {
			el: "#elementor-responsive-bar",
			regionClass: _default
		} });
		elementor.trigger("responsiveBar:init");
	});

//#endregion
})(wp.i18n);
//# sourceMappingURL=responsive-bar.js.map