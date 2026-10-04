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
//#region assets/dev/js/admin/beta-tester/view.js
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
	var BetaTesterView = /*#__PURE__*/ function(_Marionette$ItemView) {
		function BetaTesterView() {
			var _this;
			_classCallCheck(this, BetaTesterView);
			_this = _callSuper$2(this, BetaTesterView);
			_this.id = "elementor-beta-tester-dialog-content";
			_this.template = "#tmpl-elementor-beta-tester";
			return _this;
		}
		_inherits(BetaTesterView, _Marionette$ItemView);
		return _createClass(BetaTesterView, [
			{
				key: "ui",
				value: function ui() {
					return {
						betaForm: "#elementor-beta-tester-form",
						betaEmail: "#elementor-beta-tester-form__email",
						betaButton: "#elementor-beta-tester-form__submit"
					};
				}
			},
			{
				key: "events",
				value: function events() {
					return { "submit @ui.betaForm": "onBetaFormSubmit" };
				}
			},
			{
				key: "onBetaFormSubmit",
				value: function onBetaFormSubmit(event) {
					event.preventDefault();
					var email = this.ui.betaEmail.val();
					this.ui.betaButton.addClass("elementor-button-state");
					elementorCommon.ajax.addRequest("beta_tester_signup", { data: { betaTesterEmail: email } });
					elementorBetaTester.layout.hideModal();
				}
			},
			{
				key: "onRender",
				value: function onRender() {}
			}
		]);
	}(Marionette.ItemView);

//#endregion
//#region assets/dev/js/admin/beta-tester/layout.js
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
	var BetaTesterLayout = /*#__PURE__*/ function(_elementorModules$com) {
		function BetaTesterLayout() {
			_classCallCheck(this, BetaTesterLayout);
			return _callSuper$1(this, BetaTesterLayout, arguments);
		}
		_inherits(BetaTesterLayout, _elementorModules$com);
		return _createClass(BetaTesterLayout, [
			{
				key: "ui",
				value: function ui() {
					return {
						closeModal: ".elementor-templates-modal__header__close",
						dontShowAgain: ".elementor-beta-tester-do-not-show-again"
					};
				}
			},
			{
				key: "events",
				value: function events() {
					return {
						"click @ui.closeModal": this.onCloseModalClick,
						"click @ui.dontShowAgain": this.onDontShowAgainClick
					};
				}
			},
			{
				key: "getModalOptions",
				value: function getModalOptions() {
					return {
						id: "elementor-beta-tester-modal",
						hide: { onBackgroundClick: false }
					};
				}
			},
			{
				key: "getLogoOptions",
				value: function getLogoOptions() {
					return { title: (0, _wordpress_i18n.__)("Sign Up", "elementor") };
				}
			},
			{
				key: "initialize",
				value: function initialize() {
					elementorModules.common.views.modal.Layout.prototype.initialize.apply(this, arguments);
					this.showLogo();
					this.showContentView();
					var doNotShowAgain = (0, _wordpress_i18n.__)("Don't Show Again", "elementor");
					this.modalHeader.currentView.ui.closeModal.after(jQuery("<div>", { class: "elementor-beta-tester-do-not-show-again" }).text(doNotShowAgain));
				}
			},
			{
				key: "showContentView",
				value: function showContentView() {
					this.modalContent.show(new BetaTesterView());
				}
			},
			{
				key: "onDontShowAgainClick",
				value: function onDontShowAgainClick() {
					this.hideModal();
					this.onCloseModalClick();
				}
			},
			{
				key: "onCloseModalClick",
				value: function onCloseModalClick() {
					elementorCommon.ajax.addRequest("introduction_viewed", { data: { introductionKey: elementorAdmin.config.beta_tester.beta_tester_signup } });
				}
			}
		]);
	}(elementorModules.common.views.modal.Layout);

//#endregion
//#region assets/dev/js/admin/beta-tester/beta-tester.js
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
	var BetaTesterModule = /*#__PURE__*/ function(_elementorModules$Vie) {
		function BetaTesterModule() {
			_classCallCheck(this, BetaTesterModule);
			return _callSuper(this, BetaTesterModule, arguments);
		}
		_inherits(BetaTesterModule, _elementorModules$Vie);
		return _createClass(BetaTesterModule, [
			{
				key: "onInit",
				value: function onInit() {
					elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
					this.showLayout(false);
				}
			},
			{
				key: "showLayout",
				value: function showLayout() {
					if (!(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true) && (!elementorAdmin.config.beta_tester.option_enabled || elementorAdmin.config.beta_tester.signup_dismissed || "#tab-fontawesome4_migration" === location.hash)) return;
					this.layout = new BetaTesterLayout();
					this.layout.showModal();
				}
			},
			{
				key: "getDefaultSettings",
				value: function getDefaultSettings() {
					return { selectors: { betaTesterFirstToKnow: "#beta-tester-first-to-know" } };
				}
			},
			{
				key: "getDefaultElements",
				value: function getDefaultElements() {
					var elements = {};
					var selectors = this.getSettings("selectors");
					elements.$betaTesterFirstToKnow = jQuery(selectors.betaTesterFirstToKnow);
					return elements;
				}
			},
			{
				key: "bindEvents",
				value: function bindEvents() {
					this.elements.$betaTesterFirstToKnow.on("click", this.showLayout.bind(this));
				}
			}
		]);
	}(elementorModules.ViewModule);
	jQuery(function() {
		window.elementorBetaTester = new BetaTesterModule();
	});

//#endregion
})(wp.i18n);
//# sourceMappingURL=beta-tester.js.map