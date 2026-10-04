(function(_wordpress_i18n) {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});
	var __esmMin = (fn, res, err) => () => {
		if (err) throw err[0];
		try {
			return fn && (res = fn(fn = 0)), res;
		} catch (e) {
			throw err = [e], e;
		}
	};
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);

//#endregion

//#region node_modules/@babel/runtime/helpers/esm/classCallCheck.js
	function _classCallCheck(a, n) {
		if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
	}
	var init_classCallCheck = __esmMin((() => {}));

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
	function _defineProperties(e, r) {
		for (var t = 0; t < r.length; t++) {
			var o = r[t];
			o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
		}
	}
	function _createClass(e, r, t) {
		return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
	}
	var init_createClass = __esmMin((() => {
		init_toPropertyKey();
	}));

//#endregion
//#region assets/dev/js/admin/new-template/behaviors/lock-pro.js
	var LockPro;
	var init_lock_pro = __esmMin((() => {
		init_classCallCheck();
		init_createClass();
		LockPro = /*#__PURE__*/ function() {
			function LockPro(elements) {
				_classCallCheck(this, LockPro);
				this.elements = elements;
			}
			return _createClass(LockPro, [
				{
					key: "bindEvents",
					value: function bindEvents() {
						var _this$elements = this.elements;
						var form = _this$elements.form;
						var templateType = _this$elements.templateType;
						form.addEventListener("submit", this.onFormSubmit.bind(this));
						templateType.addEventListener("change", this.onTemplateTypeChange.bind(this));
						this.onTemplateTypeChange();
					}
				},
				{
					key: "onFormSubmit",
					value: function onFormSubmit(e) {
						if (this.getCurrentLockOptions().is_locked) e.preventDefault();
					}
				},
				{
					key: "onTemplateTypeChange",
					value: function onTemplateTypeChange() {
						var lockOptions = this.getCurrentLockOptions();
						if (lockOptions.is_locked) this.lock(lockOptions);
						else this.unlock();
					}
				},
				{
					key: "getCurrentLockOptions",
					value: function getCurrentLockOptions() {
						var templateType = this.elements.templateType;
						var currentOption = templateType.options[templateType.selectedIndex];
						return JSON.parse(currentOption.dataset.lock || "{}");
					}
				},
				{
					key: "lock",
					value: function lock(lockOptions) {
						this.showLockBadge(lockOptions.badge);
						this.showLockButton(lockOptions.button);
						this.hideSubmitButton();
					}
				},
				{
					key: "unlock",
					value: function unlock() {
						this.hideLockBadge();
						this.hideLockButton();
						this.showSubmitButton();
					}
				},
				{
					key: "showLockBadge",
					value: function showLockBadge(badgeConfig) {
						var _this$elements2 = this.elements;
						var lockBadge = _this$elements2.lockBadge;
						var lockBadgeText = _this$elements2.lockBadgeText;
						var lockBadgeIcon = _this$elements2.lockBadgeIcon;
						lockBadgeText.innerText = badgeConfig.text;
						lockBadgeIcon.className = badgeConfig.icon;
						lockBadge.classList.remove("e-hidden");
					}
				},
				{
					key: "hideLockBadge",
					value: function hideLockBadge() {
						this.elements.lockBadge.classList.add("e-hidden");
					}
				},
				{
					key: "showLockButton",
					value: function showLockButton(buttonConfig) {
						var lockButton = this.elements.lockButton;
						lockButton.href = this.replaceLockLinkPlaceholders(buttonConfig.url);
						lockButton.innerText = buttonConfig.text;
						lockButton.classList.remove("e-hidden");
					}
				},
				{
					key: "hideLockButton",
					value: function hideLockButton() {
						this.elements.lockButton.classList.add("e-hidden");
					}
				},
				{
					key: "showSubmitButton",
					value: function showSubmitButton() {
						this.elements.submitButton.classList.remove("e-hidden");
					}
				},
				{
					key: "hideSubmitButton",
					value: function hideSubmitButton() {
						this.elements.submitButton.classList.add("e-hidden");
					}
				},
				{
					key: "replaceLockLinkPlaceholders",
					value: function replaceLockLinkPlaceholders(link) {
						return link.replace(/%%utm_source%%/g, "wp-add-new").replace(/%%utm_medium%%/g, "wp-dash");
					}
				}
			]);
		}();
	}));

//#endregion
//#region assets/dev/js/admin/new-template/view.js
	var require_view = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		module.exports = Marionette.ItemView.extend({
			id: "elementor-new-template-dialog-content",
			template: "#tmpl-elementor-new-template",
			ui: {},
			events: {},
			onRender: function onRender() {}
		});
	}));

//#endregion
//#region assets/dev/js/admin/new-template/layout.js
	var require_layout = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		init_lock_pro();
		var NewTemplateView = require_view();
		module.exports = elementorModules.common.views.modal.Layout.extend({
			getModalOptions: function getModalOptions() {
				return { id: "elementor-new-template-modal" };
			},
			getLogoOptions: function getLogoOptions() {
				return { title: (0, _wordpress_i18n.__)("New Template", "elementor") };
			},
			initialize: function initialize() {
				elementorModules.common.views.modal.Layout.prototype.initialize.apply(this, arguments);
				this.showLogo();
				this.showContentView();
				this.initElements();
				this.lockProBehavior = new LockPro(this.elements);
				this.lockProBehavior.bindEvents();
				this.setupDynamicControlsVisibility();
			},
			setupDynamicControlsVisibility: function setupDynamicControlsVisibility() {
				if (!("undefined" !== typeof elementor_new_template_form_controls)) return;
				var CONTROL_ID_PREFIX = "elementor-new-template__form__";
				var templateTypeSelectId = "".concat(CONTROL_ID_PREFIX, "template-type");
				var dynamicControlsVisibilityListener = function dynamicControlsVisibilityListener() {
					elementorAdmin.templateControls.setDynamicControlsVisibility(CONTROL_ID_PREFIX, elementor_new_template_form_controls);
				};
				this.getModal().onShow = function() {
					dynamicControlsVisibilityListener();
					document.getElementById(templateTypeSelectId).addEventListener("change", dynamicControlsVisibilityListener);
				};
				this.getModal().onHide = function() {
					document.getElementById(templateTypeSelectId).removeEventListener("change", dynamicControlsVisibilityListener);
				};
			},
			initElements: function initElements() {
				var container = this.$el[0];
				var root = "#elementor-new-template__form";
				this.elements = {
					form: container.querySelector(root),
					submitButton: container.querySelector("".concat(root, "__submit")),
					lockButton: container.querySelector("".concat(root, "__lock_button")),
					templateType: container.querySelector("".concat(root, "__template-type")),
					lockBadge: container.querySelector("".concat(root, "__template-type-badge")),
					lockBadgeText: container.querySelector("".concat(root, "__template-type-badge__text")),
					lockBadgeIcon: container.querySelector("".concat(root, "__template-type-badge__icon"))
				};
			},
			showContentView: function showContentView() {
				this.modalContent.show(new NewTemplateView());
			}
		});
	}));

//#endregion
//#region assets/dev/js/admin/new-template/new-template.js
	var NewTemplateLayout = require_layout();
	var NewTemplateModule = elementorModules.ViewModule.extend({
		getDefaultSettings: function getDefaultSettings() {
			return { selectors: { addButton: "a.page-title-action[href*=\"post-new.php?post_type=elementor_library\"], #elementor-template-library-add-new" } };
		},
		getDefaultElements: function getDefaultElements() {
			var selectors = this.getSettings("selectors");
			return { $addButton: jQuery(selectors.addButton) };
		},
		bindEvents: function bindEvents() {
			this.elements.$addButton.on("click", this.onAddButtonClick);
			elementorCommon.elements.$window.on("hashchange", this.showModalByHash.bind(this));
		},
		showModalByHash: function showModalByHash() {
			if ("#add_new" === location.hash) {
				var _this$layout;
				(_this$layout = this.layout) === null || _this$layout === void 0 || _this$layout.showModal();
				location.hash = "";
			}
		},
		onInit: function onInit() {
			elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
			this.layout = new NewTemplateLayout();
			this.showModalByHash();
		},
		onAddButtonClick: function onAddButtonClick(event) {
			var _this$layout2;
			event.preventDefault();
			(_this$layout2 = this.layout) === null || _this$layout2 === void 0 || _this$layout2.showModal();
		}
	});
	jQuery(function() {
		window.elementorNewTemplate = new NewTemplateModule();
	});

//#endregion
})(wp.i18n);
//# sourceMappingURL=new-template.js.map