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
//#region app/modules/import-export/assets/js/admin.js
	var Admin = /*#__PURE__*/ function() {
		function Admin() {
			_classCallCheck(this, Admin);
			/**
			* Session Storage Key
			*
			* @type {string}
			*/
			_defineProperty(this, "KIT_DATA_KEY", "elementor-kit-data");
			/**
			* Contains the ID of the referrer Kit and the name of the Kit to remove. Stored in session storage.
			*
			* @type {Object}
			*/
			_defineProperty(this, "cachedKitData", void 0);
			/**
			* The 'Remove Kit' revert button
			*
			* @type {Element}
			*/
			_defineProperty(this, "revertButton", void 0);
			/**
			* Name of the kit currently active (last imported)
			*
			* @type {string}
			*/
			_defineProperty(this, "activeKitName", void 0);
			this.activeKitName = this.getActiveKitName();
			this.revertButton = document.getElementById("elementor-import-export__revert_kit");
			if (this.revertButton) {
				this.revertButton.addEventListener("click", this.onRevertButtonClick.bind(this));
				this.maybeAddRevertBtnMargin();
				this.maybeScrollToRevertButton();
			}
			this.maybeShowReferrerKitDialog();
		}
		return _createClass(Admin, [
			{
				key: "shouldScrollToRevert",
				value: function shouldScrollToRevert() {
					return !!new URLSearchParams(window.location.search).get("scroll_to_revert");
				}
			},
			{
				key: "maybeAddRevertBtnMargin",
				value: function maybeAddRevertBtnMargin() {
					if (!this.shouldScrollToRevert()) return;
					this.revertButton.style.marginBottom = this.calculateMargin();
				}
			},
			{
				key: "maybeScrollToRevertButton",
				value: function maybeScrollToRevertButton() {
					if (!this.shouldScrollToRevert()) return;
					this.scrollToBottom();
				}
			},
			{
				key: "calculateMargin",
				value: function calculateMargin() {
					var adminBar = document.getElementById("wpadminbar");
					var adminBarHeight = adminBar ? adminBar.offsetHeight : 0;
					var revertKitHeight = this.revertButton.parentElement.offsetHeight;
					return document.body.clientHeight - adminBarHeight - revertKitHeight - document.getElementById("wpfooter").offsetHeight - 15 + "px";
				}
			},
			{
				key: "scrollToBottom",
				value: function scrollToBottom() {
					setTimeout(function() {
						window.scrollTo(0, document.body.scrollHeight);
					});
				}
			},
			{
				key: "onRevertButtonClick",
				value: function onRevertButtonClick(event) {
					var _this = this;
					event.preventDefault();
					elementorCommon.dialogsManager.createWidget("confirm", {
						headerMessage: (0, _wordpress_i18n.__)("Are you sure?", "elementor"),
						message: (0, _wordpress_i18n.__)("Removing %s will permanently delete changes made to the Websites Template's content and site settings", "elementor").replace("%s", this.activeKitName),
						strings: {
							confirm: (0, _wordpress_i18n.__)("Delete", "elementor"),
							cancel: (0, _wordpress_i18n.__)("Cancel", "elementor")
						},
						onConfirm: function onConfirm() {
							return _this.onRevertConfirm();
						}
					}).show();
				}
			},
			{
				key: "onRevertConfirm",
				value: function onRevertConfirm() {
					var referrerKitId = new URLSearchParams(this.revertButton.href).get("referrer_kit");
					this.saveToCache(referrerKitId !== null && referrerKitId !== void 0 ? referrerKitId : "");
					location.href = this.revertButton.href;
				}
			},
			{
				key: "maybeShowReferrerKitDialog",
				value: function maybeShowReferrerKitDialog() {
					var referrerKitId = this.getDataFromCache().referrerKitId;
					if (void 0 === referrerKitId) return;
					if (0 === referrerKitId.length) {
						this.createKitDeletedWidget({
							message: (0, _wordpress_i18n.__)("Try a different Website Template or build your site from scratch.", "elementor"),
							strings: {
								confirm: (0, _wordpress_i18n.__)("OK", "elementor"),
								cancel: (0, _wordpress_i18n.__)("Library", "elementor")
							},
							onCancel: function onCancel() {
								location.href = elementorImportExport.appUrl;
							}
						});
						this.clearCache();
						return;
					}
					this.createKitDeletedWidget({
						message: (0, _wordpress_i18n.__)("You're ready to apply a new Kit!", "elementor"),
						strings: {
							confirm: (0, _wordpress_i18n.__)("Continue to new Kit", "elementor"),
							cancel: (0, _wordpress_i18n.__)("Close", "elementor")
						},
						onConfirm: function onConfirm() {
							location.href = elementorImportExport.appUrl + "/preview/" + referrerKitId;
						}
					});
					this.clearCache();
				}
			},
			{
				key: "createKitDeletedWidget",
				value: function createKitDeletedWidget(options) {
					var activeKitName = this.getDataFromCache().activeKitName;
					elementorCommon.dialogsManager.createWidget("confirm", {
						id: "e-revert-kit-deleted-dialog",
						headerMessage: (0, _wordpress_i18n.__)("%s was successfully deleted", "elementor").replace("%s", activeKitName),
						message: options.message,
						strings: {
							confirm: options.strings.confirm,
							cancel: options.strings.cancel
						},
						onConfirm: options.onConfirm,
						onCancel: options.onCancel
					}).show();
				}
			},
			{
				key: "getActiveKitName",
				value: function getActiveKitName() {
					var lastKit = elementorImportExport.lastImportedSession;
					if (lastKit.kit_title) return lastKit.kit_title;
					if (lastKit.kit_name) return this.convertNameToTitle(lastKit.kit_name);
					return (0, _wordpress_i18n.__)("Your Kit", "elementor");
				}
			},
			{
				key: "convertNameToTitle",
				value: function convertNameToTitle(name) {
					return name.split(/[-_]+/).map(function(word) {
						return word[0].toUpperCase() + word.substring(1);
					}).join(" ");
				}
			},
			{
				key: "saveToCache",
				value: function saveToCache(referrerKitId) {
					sessionStorage.setItem(this.KIT_DATA_KEY, JSON.stringify({
						referrerKitId,
						activeKitName: this.activeKitName
					}));
				}
			},
			{
				key: "getDataFromCache",
				value: function getDataFromCache() {
					var _this$cachedKitData;
					if (this.cachedKitData) return this.cachedKitData;
					try {
						this.cachedKitData = JSON.parse(sessionStorage.getItem(this.KIT_DATA_KEY));
					} catch (e) {
						return {};
					}
					return (_this$cachedKitData = this.cachedKitData) !== null && _this$cachedKitData !== void 0 ? _this$cachedKitData : {};
				}
			},
			{
				key: "clearCache",
				value: function clearCache() {
					sessionStorage.removeItem(this.KIT_DATA_KEY);
				}
			}
		]);
	}();
	window.addEventListener("load", function() {
		new Admin();
	});

//#endregion
})(wp.i18n);
//# sourceMappingURL=import-export-admin.js.map