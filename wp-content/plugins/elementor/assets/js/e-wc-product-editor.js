(function(react, _wordpress_i18n, _wordpress_data, _wordpress_core_data, _wordpress_components, _wordpress_plugins, _woocommerce_admin_layout) {

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
//#region modules/wc-product-editor/assets/js/e-wc-product-editor.js
	function EditWithElementorButton() {
		var _useState2 = _slicedToArray((0, react.useState)(false), 2);
		var isRedirecting = _useState2[0];
		var setIsRedirecting = _useState2[1];
		var productId = (0, _wordpress_core_data.useEntityId)("postType", "product");
		var saveEntityRecord = (0, _wordpress_data.useDispatch)("core").saveEntityRecord;
		var postStatus = (0, _wordpress_data.useSelect)(function(select) {
			var _select$getEditedEnti;
			return (_select$getEditedEnti = select("core").getEditedEntityRecord("postType", "product", productId)) === null || _select$getEditedEnti === void 0 ? void 0 : _select$getEditedEnti.status;
		}, [productId]);
		var isSaving = wp.data.select("core/editor").isSavingPost();
		(0, react.useEffect)(function() {
			if (isRedirecting && !isSaving) redirectToElementor();
		}, [isRedirecting, isSaving]);
		var handleClick = function handleClick() {
			if ("auto-draft" === postStatus) saveEntityRecord("postType", "product", {
				id: productId,
				name: "Elementor #".concat(productId),
				status: "draft"
			}).then(function() {
				setIsRedirecting(true);
			}).catch(function() {});
			else setIsRedirecting(true);
		};
		var redirectToElementor = function redirectToElementor() {
			window.location.href = getEditUrl();
		};
		var getEditUrl = function getEditUrl() {
			var url = new URL(ElementorWCProductEditorSettings.editLink);
			url.searchParams.set("post", productId);
			url.searchParams.set("action", "elementor");
			return url.toString();
		};
		return /*#__PURE__*/ react.default.createElement(_woocommerce_admin_layout.WooHeaderItem, { name: "product" }, /*#__PURE__*/ react.default.createElement(_wordpress_components.Button, {
			variant: "primary",
			onClick: handleClick,
			style: {
				display: "flex",
				alignItems: "center"
			}
		}, /*#__PURE__*/ react.default.createElement("i", {
			className: "eicon-elementor-square",
			"aria-hidden": "true",
			style: { paddingInlineEnd: "8px" }
		}), (0, _wordpress_i18n.__)("Edit with Elementor", "elementor")));
	}
	(0, _wordpress_plugins.registerPlugin)("elementor-header-item", {
		render: EditWithElementorButton,
		scope: "woocommerce-product-block-editor"
	});

//#endregion
})(React, wp.i18n, wp.data, wp.coreData, wp.components, wp.plugins, wc.adminLayout);
//# sourceMappingURL=e-wc-product-editor.js.map