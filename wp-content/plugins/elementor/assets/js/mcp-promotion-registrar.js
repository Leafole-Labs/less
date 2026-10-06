(function(react, _wordpress_i18n) {

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

//#region modules/mcp/assets/dev/js/mcp-upgrade-promotion.jsx
	function getUpgradeUrl() {
		var _window$elementorMcpP;
		var _window$elementorMcpP2;
		return (_window$elementorMcpP = (_window$elementorMcpP2 = window.elementorMcpPromotionConfig) === null || _window$elementorMcpP2 === void 0 ? void 0 : _window$elementorMcpP2.upgradeUrl) !== null && _window$elementorMcpP !== void 0 ? _window$elementorMcpP : "";
	}
	var containerStyle = {
		marginTop: 32,
		padding: "20px 24px",
		border: "1px solid #d5d8dc",
		borderRadius: 4,
		backgroundColor: "#fff"
	};
	var rowStyle = {
		display: "flex",
		flexWrap: "wrap",
		gap: 16,
		alignItems: "center",
		justifyContent: "space-between"
	};
	var titleStyle = {
		margin: 0,
		fontSize: 16,
		fontWeight: 600,
		lineHeight: "24px"
	};
	var bodyStyle = {
		margin: "4px 0 0",
		fontSize: 14,
		lineHeight: "20px",
		color: "#69727d"
	};
	var buttonStyle = {
		display: "inline-block",
		padding: "8px 16px",
		border: "1px solid #93003f",
		borderRadius: 4,
		color: "#93003f",
		textDecoration: "none",
		fontSize: 14,
		fontWeight: 500,
		whiteSpace: "nowrap"
	};
	function McpUpgradePromotion() {
		var upgradeUrl = getUpgradeUrl();
		return /*#__PURE__*/ react.default.createElement("div", { style: containerStyle }, /*#__PURE__*/ react.default.createElement("div", { style: rowStyle }, /*#__PURE__*/ react.default.createElement("div", { style: {
			minWidth: 0,
			flex: "1 1 240px"
		} }, /*#__PURE__*/ react.default.createElement("p", { style: titleStyle }, (0, _wordpress_i18n.__)("Build more with your AI agent", "elementor")), /*#__PURE__*/ react.default.createElement("p", { style: bodyStyle }, (0, _wordpress_i18n.__)("With Pro, your agent can build with Theme Builder, forms, popups, and more advanced Elementor capabilities.", "elementor"))), /*#__PURE__*/ react.default.createElement("a", {
			href: upgradeUrl,
			target: "_blank",
			rel: "noopener noreferrer",
			style: buttonStyle
		}, (0, _wordpress_i18n.__)("Upgrade", "elementor"))));
	}

//#endregion
//#region modules/mcp/assets/dev/js/mcp-promotion-registrar.js
	var INJECTION_ID = "elementor-core-mcp-upgrade";
	var RETRY_MS = 50;
	var RETRY_TIMEOUT_MS = 5e3;
	function tryRegisterPromotion() {
		var _window$elementorMcpC;
		var injectIntoMcpAdminPromotion = (_window$elementorMcpC = window.elementorMcpComposer) === null || _window$elementorMcpC === void 0 ? void 0 : _window$elementorMcpC.injectIntoMcpAdminPromotion;
		if (!injectIntoMcpAdminPromotion) return false;
		injectIntoMcpAdminPromotion({
			id: INJECTION_ID,
			component: McpUpgradePromotion
		});
		return true;
	}
	if (!tryRegisterPromotion()) {
		var startedAt = Date.now();
		var intervalId = window.setInterval(function() {
			if (tryRegisterPromotion() || Date.now() - startedAt >= RETRY_TIMEOUT_MS) window.clearInterval(intervalId);
		}, RETRY_MS);
	}

//#endregion
})(React, wp.i18n);
//# sourceMappingURL=mcp-promotion-registrar.js.map