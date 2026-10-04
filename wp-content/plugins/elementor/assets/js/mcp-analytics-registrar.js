(function() {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});

//#endregion

//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
	function _objectWithoutPropertiesLoose(r, e) {
		if (null == r) return {};
		var t = {};
		for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
			if (-1 !== e.indexOf(n)) continue;
			t[n] = r[n];
		}
		return t;
	}

//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
	function _objectWithoutProperties(e, t) {
		if (null == e) return {};
		var o;
		var r;
		var i = _objectWithoutPropertiesLoose(e, t);
		if (Object.getOwnPropertySymbols) {
			var n = Object.getOwnPropertySymbols(e);
			for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
		}
		return i;
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
//#region modules/mcp/assets/dev/js/mcp-analytics-registrar.js
	var _excluded = ["name"];
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
	(function() {
		var MCP_INTERACTION_EVENT = "elementor/mcp/interaction";
		var FIXED_PROPS = {
			app_type: "wpadmin",
			window_name: "elementor_mcp",
			target_location: "main_content"
		};
		function buildMixpanelEvent(detail) {
			switch (detail.name) {
				case "viewed": return ["mcp_connection_page_viewed", _objectSpread(_objectSpread({}, FIXED_PROPS), {}, {
					target_location: "page",
					interaction_type: "view",
					target_type: "page",
					target_name: "elementor_mcp",
					interaction_result: "page_loaded",
					client: detail.client,
					mode: detail.mode
				})];
				case "learn_more_clicked": return ["mcp_learn_more_clicked", _objectSpread(_objectSpread({}, FIXED_PROPS), {}, {
					target_location: "header",
					interaction_type: "click",
					target_type: "link",
					target_name: "what_is_mcp",
					interaction_result: "link_clicked"
				})];
				case "client_selected": return ["mcp_client_selected", _objectSpread(_objectSpread({}, FIXED_PROPS), {}, {
					interaction_type: "click",
					target_type: "tab",
					target_name: "client_tab",
					interaction_result: "client_switched",
					client: detail.client,
					previous_client: detail.previous_client
				})];
				case "mode_switched": return ["mcp_setup_mode_switched", _objectSpread(_objectSpread({}, FIXED_PROPS), {}, {
					interaction_type: "click",
					target_type: "link",
					target_name: "setup_mode_toggle",
					interaction_result: "mode_switched",
					mode: detail.mode,
					client: detail.client
				})];
				case "credentials_generated": return ["mcp_credentials_generated", _objectSpread(_objectSpread({}, FIXED_PROPS), {}, {
					interaction_type: "click",
					target_type: "button",
					target_name: "generate_credentials",
					interaction_result: "credentials_generated",
					client: detail.client,
					mode: detail.mode
				})];
				case "credentials_generation_failed": return ["mcp_credentials_generation_failed", _objectSpread(_objectSpread({}, FIXED_PROPS), {}, {
					interaction_type: "click",
					target_type: "button",
					target_name: "generate_credentials",
					interaction_result: "generation_failed",
					client: detail.client,
					mode: detail.mode,
					error_reason: detail.error_reason
				})];
				case "config_copied":
					var props = _objectSpread(_objectSpread({}, FIXED_PROPS), {}, {
						interaction_type: "click",
						target_type: "button",
						target_name: "copy_config",
						interaction_result: "config_copied",
						client: detail.client,
						mode: detail.mode,
						copy_target: detail.copy_target
					});
					if (detail.os) props.os = detail.os;
					return ["mcp_config_copied", props];
				case "mcp_access_toggled":
				case "mcp_access_toggle_failed": return [detail.name, _objectWithoutProperties(detail, _excluded)];
				default: return null;
			}
		}
		window.addEventListener(MCP_INTERACTION_EVENT, function(event) {
			var _window$elementorComm;
			var _window$elementorComm2;
			var detail = event.detail;
			if (!detail || !detail.name) return;
			var built = buildMixpanelEvent(detail);
			if (!built) return;
			var eventName = built[0];
			var props = built[1];
			(_window$elementorComm = window.elementorCommon) === null || _window$elementorComm === void 0 || (_window$elementorComm = _window$elementorComm.eventsManager) === null || _window$elementorComm === void 0 || (_window$elementorComm2 = _window$elementorComm.dispatchEvent) === null || _window$elementorComm2 === void 0 || _window$elementorComm2.call(_window$elementorComm, eventName, props);
		});
	})();

//#endregion
})();
//# sourceMappingURL=mcp-analytics-registrar.js.map