(function() {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});

//#endregion

//#region modules/pro-install/assets/js/pro-install-events.js
	function getDispatchEvent() {
		var _window$elementorComm;
		var _window$elementorComm2;
		var _eventsManager$dispat;
		if (!((_window$elementorComm = window.elementorCommon) === null || _window$elementorComm === void 0 || (_window$elementorComm = _window$elementorComm.config) === null || _window$elementorComm === void 0 || (_window$elementorComm = _window$elementorComm.experimentalFeatures) === null || _window$elementorComm === void 0 ? void 0 : _window$elementorComm.editor_events)) return null;
		var eventsManager = (_window$elementorComm2 = window.elementorCommon) === null || _window$elementorComm2 === void 0 ? void 0 : _window$elementorComm2.eventsManager;
		return (eventsManager === null || eventsManager === void 0 || (_eventsManager$dispat = eventsManager.dispatchEvent) === null || _eventsManager$dispat === void 0 ? void 0 : _eventsManager$dispat.bind(eventsManager)) || null;
	}
	function trackEditorEvent(eventName, eventData) {
		var dispatchEvent = getDispatchEvent();
		if (!dispatchEvent) return;
		dispatchEvent(eventName, eventData);
	}
	window.trackUpgradeNowClickEvent = function() {
		trackEditorEvent("upgrade_subscription", {
			location: "Elementor WP-admin pages",
			secondaryLocation: "Connect account page",
			trigger: "click"
		});
	};
	window.trackConnectAccountEvent = function() {
		Promise.resolve(trackEditorEvent("connect_account", {
			location: "Elementor WP-admin pages",
			secondaryLocation: "Connect account page",
			trigger: "click"
		})).catch(function() {});
	};
	window.trackOpenConnectPageEvent = function() {
		trackEditorEvent("open_connect_page", {
			location: "Elementor WP-admin pages",
			secondaryLocation: "Connect account page",
			trigger: "page_load"
		});
	};
	window.trackProInstallEvent = function() {
		trackEditorEvent("pro_install", {
			location: "Elementor WP-admin pages",
			secondaryLocation: "Connect account page",
			trigger: "click"
		});
	};
	document.addEventListener("DOMContentLoaded", function() {
		window.trackOpenConnectPageEvent();
		var upgradeButton = document.querySelector(".elementor-pro-connect-promotion .elementor-box-action .button-upgrade");
		if (upgradeButton) upgradeButton.addEventListener("click", window.trackUpgradeNowClickEvent);
		var connectButton = document.querySelector("#elementor-connect-license");
		if (connectButton) connectButton.addEventListener("click", window.trackConnectAccountEvent);
		var proInstallButton = document.querySelector("#elementor-connect-install-pro");
		if (proInstallButton) proInstallButton.addEventListener("click", window.trackProInstallEvent);
	});

//#endregion
})();
//# sourceMappingURL=pro-install-events.js.map