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
	function _inherits(t, e) {
		if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
		t.prototype = Object.create(e && e.prototype, { constructor: {
			value: t,
			writable: !0,
			configurable: !0
		} }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);
	}

//#endregion
//#region assets/dev/js/admin/floating-elements/view.js
	var view_default = Marionette.ItemView.extend({
		id: "elementor-new-floating-elements-dialog-content",
		template: "#tmpl-elementor-new-floating-elements",
		ui: {},
		events: {},
		onRender: function onRender() {}
	});

//#endregion
//#region core/common/assets/js/views/modal/header.js
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
	var _default$4 = /*#__PURE__*/ function(_Marionette$LayoutVie) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$4(this, _default, arguments);
		}
		_inherits(_default, _Marionette$LayoutVie);
		return _createClass(_default, [
			{
				key: "tagName",
				value: function tagName() {
					return "header";
				}
			},
			{
				key: "className",
				value: function className() {
					return "elementor-templates-modal__header";
				}
			},
			{
				key: "getTemplate",
				value: function getTemplate() {
					return "#tmpl-elementor-templates-modal__header";
				}
			},
			{
				key: "regions",
				value: function regions() {
					return {
						logoArea: ".elementor-templates-modal__header__logo-area",
						tools: "#elementor-template-library-header-tools",
						menuArea: ".elementor-templates-modal__header__menu-area"
					};
				}
			},
			{
				key: "ui",
				value: function ui() {
					return { closeModal: ".elementor-templates-modal__header__close" };
				}
			},
			{
				key: "events",
				value: function events() {
					return { "click @ui.closeModal": "onCloseModalClick" };
				}
			},
			{
				key: "onRender",
				value: function onRender() {
					this.bindEscapeKey();
				}
			},
			{
				key: "bindEscapeKey",
				value: function bindEscapeKey() {
					var _this = this;
					this.onDocumentKeyDown = function(event) {
						if ("Escape" === event.key) _this.onCloseModalClick();
					};
					document.addEventListener("keydown", this.onDocumentKeyDown);
				}
			},
			{
				key: "onDestroy",
				value: function onDestroy() {
					if (this.onDocumentKeyDown) document.removeEventListener("keydown", this.onDocumentKeyDown);
				}
			},
			{
				key: "templateHelpers",
				value: function templateHelpers() {
					return { closeType: this.getOption("closeType") };
				}
			},
			{
				key: "onCloseModalClick",
				value: function onCloseModalClick() {
					this._parent._parent._parent.hideModal();
					var documentType = this.getDocumentType();
					var customEvent = new CustomEvent("core/modal/close/".concat(documentType));
					window.dispatchEvent(customEvent);
					if (this.isFloatingButtonLibraryClose()) {
						$e.internal("document/save/set-is-modified", { status: false });
						window.location.href = elementor.config.admin_floating_button_admin_url;
					}
				}
			},
			{
				key: "getDocumentType",
				value: function getDocumentType() {
					var _elementor$config$doc;
					var _elementor;
					var DEFAULT_TYPE = "default";
					if ("undefined" === typeof window.elementor) return DEFAULT_TYPE;
					return (_elementor$config$doc = (_elementor = elementor) === null || _elementor === void 0 || (_elementor = _elementor.config) === null || _elementor === void 0 || (_elementor = _elementor.document) === null || _elementor === void 0 ? void 0 : _elementor.type) !== null && _elementor$config$doc !== void 0 ? _elementor$config$doc : DEFAULT_TYPE;
				}
			},
			{
				key: "isFloatingButtonLibraryClose",
				value: function isFloatingButtonLibraryClose() {
					var _elementor$config;
					var _elementor$config2;
					return window.elementor && ((_elementor$config = elementor.config) === null || _elementor$config === void 0 ? void 0 : _elementor$config.admin_floating_button_admin_url) && "floating-buttons" === ((_elementor$config2 = elementor.config) === null || _elementor$config2 === void 0 || (_elementor$config2 = _elementor$config2.document) === null || _elementor$config2 === void 0 ? void 0 : _elementor$config2.type) && (this.$el.closest(".dialog-lightbox-widget-content").find(".elementor-template-library-template-floating_button").length || this.$el.closest(".dialog-lightbox-widget-content").find("#elementor-template-library-preview").length || this.$el.closest(".dialog-lightbox-widget-content").find("#elementor-template-library-templates-empty").length);
				}
			}
		]);
	}(Marionette.LayoutView);

//#endregion
//#region core/common/assets/js/views/modal/logo.js
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
	var _default$3 = /*#__PURE__*/ function(_Marionette$ItemView) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$3(this, _default, arguments);
		}
		_inherits(_default, _Marionette$ItemView);
		return _createClass(_default, [
			{
				key: "getTemplate",
				value: function getTemplate() {
					return "#tmpl-elementor-templates-modal__header__logo";
				}
			},
			{
				key: "className",
				value: function className() {
					return "elementor-templates-modal__header__logo";
				}
			},
			{
				key: "events",
				value: function events() {
					return { click: "onClick" };
				}
			},
			{
				key: "templateHelpers",
				value: function templateHelpers() {
					return { title: this.getOption("title") };
				}
			},
			{
				key: "onClick",
				value: function onClick() {
					var clickCallback = this.getOption("click");
					if (clickCallback) clickCallback();
				}
			}
		]);
	}(Marionette.ItemView);

//#endregion
//#region core/common/assets/js/views/modal/loading.js
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
	var _default$2 = /*#__PURE__*/ function(_Marionette$ItemView) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$2(this, _default, arguments);
		}
		_inherits(_default, _Marionette$ItemView);
		return _createClass(_default, [{
			key: "id",
			value: function id() {
				return "elementor-template-library-loading";
			}
		}, {
			key: "getTemplate",
			value: function getTemplate() {
				return "#tmpl-elementor-template-library-loading";
			}
		}]);
	}(Marionette.ItemView);

//#endregion
//#region core/common/assets/js/views/modal/layout.js
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
	var _default$1 = /*#__PURE__*/ function(_Marionette$LayoutVie) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper$1(this, _default, arguments);
		}
		_inherits(_default, _Marionette$LayoutVie);
		return _createClass(_default, [
			{
				key: "el",
				value: function el() {
					return this.getModal().getElements("widget");
				}
			},
			{
				key: "regions",
				value: function regions() {
					return {
						modalHeader: ".dialog-header",
						modalContent: ".dialog-lightbox-content",
						modalLoading: ".dialog-lightbox-loading"
					};
				}
			},
			{
				key: "initialize",
				value: function initialize() {
					this.modalHeader.show(new _default$4(this.getHeaderOptions()));
				}
			},
			{
				key: "getModal",
				value: function getModal() {
					if (!this.modal) this.initModal();
					return this.modal;
				}
			},
			{
				key: "initModal",
				value: function initModal() {
					var modalOptions = {
						className: "elementor-templates-modal",
						closeButton: false,
						draggable: false,
						hide: {
							onOutsideClick: false,
							onEscKeyPress: false
						}
					};
					jQuery.extend(true, modalOptions, this.getModalOptions());
					this.modal = elementorCommon.dialogsManager.createWidget("lightbox", modalOptions);
					this.modal.getElements("message").append(this.modal.addElement("content"), this.modal.addElement("loading"));
					if (modalOptions.draggable) this.draggableModal();
				}
			},
			{
				key: "showModal",
				value: function showModal() {
					this.getModal().show();
				}
			},
			{
				key: "hideModal",
				value: function hideModal() {
					this.getModal().hide();
				}
			},
			{
				key: "draggableModal",
				value: function draggableModal() {
					var $modalWidgetContent = this.getModal().getElements("widgetContent");
					$modalWidgetContent.draggable({
						containment: "parent",
						stop: function stop() {
							$modalWidgetContent.height("");
						}
					});
					$modalWidgetContent.css("position", "absolute");
				}
			},
			{
				key: "getModalOptions",
				value: function getModalOptions() {
					return {};
				}
			},
			{
				key: "getLogoOptions",
				value: function getLogoOptions() {
					return {};
				}
			},
			{
				key: "getHeaderOptions",
				value: function getHeaderOptions() {
					return { closeType: "normal" };
				}
			},
			{
				key: "getHeaderView",
				value: function getHeaderView() {
					return this.modalHeader.currentView;
				}
			},
			{
				key: "showLoadingView",
				value: function showLoadingView() {
					this.modalLoading.show(new _default$2());
					this.modalLoading.$el.show();
					this.modalContent.$el.hide();
				}
			},
			{
				key: "hideLoadingView",
				value: function hideLoadingView() {
					this.modalContent.$el.show();
					this.modalLoading.$el.hide();
				}
			},
			{
				key: "showLogo",
				value: function showLogo() {
					this.getHeaderView().logoArea.show(new _default$3(this.getLogoOptions()));
				}
			}
		]);
	}(Marionette.LayoutView);

//#endregion
//#region assets/dev/js/admin/floating-elements/layout.js
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
	var _default = /*#__PURE__*/ function(_ModalLayout) {
		function _default() {
			_classCallCheck(this, _default);
			return _callSuper(this, _default, arguments);
		}
		_inherits(_default, _ModalLayout);
		return _createClass(_default, [
			{
				key: "getModalOptions",
				value: function getModalOptions() {
					return { id: "elementor-new-floating-elements-modal" };
				}
			},
			{
				key: "getLogoOptions",
				value: function getLogoOptions() {
					return { title: (0, _wordpress_i18n.__)("New Floating Elements", "elementor") };
				}
			},
			{
				key: "initialize",
				value: function initialize() {
					_superPropGet(_default, "initialize", this, 3)([]);
					this.showLogo();
					this.showContentView();
				}
			},
			{
				key: "showContentView",
				value: function showContentView() {
					this.modalContent.show(new view_default());
				}
			}
		]);
	}(_default$1);

//#endregion
//#region assets/dev/js/admin/floating-elements/new-floating-elements.js
	var NewFloatingElementsModule = elementorModules.ViewModule.extend({
		getDefaultSettings: function getDefaultSettings() {
			return { selectors: {
				addButtonTopBar: "a.page-title-action[href*=\"e-floating-buttons\"]",
				addButtonAdminBar: "#wp-admin-bar-new-e-floating-buttons a",
				addButtonEmptyTemplate: "#elementor-template-library-add-new"
			} };
		},
		getDefaultElements: function getDefaultElements() {
			var selectors = this.getSettings("selectors");
			return {
				addButtonTopBar: document.querySelector(selectors.addButtonTopBar),
				addButtonAdminBar: document.querySelector(selectors.addButtonAdminBar),
				addButtonEmptyTemplate: document.querySelector(selectors.addButtonEmptyTemplate)
			};
		},
		bindEvents: function bindEvents() {
			if (this.elements.addButtonTopBar !== null) this.elements.addButtonTopBar.addEventListener("click", this.onAddButtonClick);
			if (this.elements.addButtonAdminBar !== null) this.elements.addButtonAdminBar.addEventListener("click", this.onAddButtonClick);
			if (this.elements.addButtonEmptyTemplate !== null) this.elements.addButtonEmptyTemplate.addEventListener("click", this.onAddButtonClick);
		},
		onInit: function onInit() {
			elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
			this.layout = new _default();
		},
		onAddButtonClick: function onAddButtonClick(event) {
			event.preventDefault();
			this.layout.showModal();
		}
	});
	document.addEventListener("DOMContentLoaded", function() {
		window.elementorNewFloatingElements = new NewFloatingElementsModule();
	});

//#endregion
})(wp.i18n);
//# sourceMappingURL=floating-elements-modal.js.map