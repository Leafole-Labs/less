(function() {

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

//#region packages/packages/libs/events/src/use-mixpanel.ts
	var getMixpanel = () => {
		const eventsManager = window.elementorCommon?.eventsManager || {};
		return {
			dispatchEvent: eventsManager.dispatchEvent?.bind(eventsManager),
			config: eventsManager.config,
			canSendEvents: eventsManager.canSendEvents?.bind(eventsManager),
			initializeMixpanel: eventsManager.initializeMixpanel?.bind(eventsManager),
			enableTracking: eventsManager.enableTracking?.bind(eventsManager),
			isMixpanelReady: eventsManager.isMixpanelReady?.bind(eventsManager),
			trackingEnabled: eventsManager.trackingEnabled ?? false,
			getMixpanelInstance: eventsManager.getMixpanelInstance?.bind(eventsManager)
		};
	};
	var useMixpanel = () => {
		const { dispatchEvent, config } = getMixpanel();
		return {
			dispatchEvent,
			config
		};
	};
	var trackEvent = (event) => {
		const { dispatchEvent } = getMixpanel();
		dispatchEvent?.(event.eventName, event);
	};
	var canSendEvents = () => getMixpanel().canSendEvents?.() ?? false;
	var setCanSendEvents = (value) => {
		const editorEvents = window.elementorCommon?.config?.editor_events;
		if (editorEvents) editorEvents.can_send_events = value;
	};
	var isMixpanelReady = () => getMixpanel().isMixpanelReady?.() ?? false;
	var isTrackingEnabled = () => getMixpanel().trackingEnabled;
	var enableTracking = () => getMixpanel().enableTracking?.();
	var initializeMixpanel = (onLoaded) => getMixpanel().initializeMixpanel?.(onLoaded ?? (() => {}));
	function initializeAndEnableTracking(onReady) {
		const mixpanel = getMixpanel();
		if (!mixpanel.dispatchEvent) return;
		if (mixpanel.trackingEnabled) {
			onReady?.(mixpanel.getMixpanelInstance?.());
			return;
		}
		if (mixpanel.isMixpanelReady?.()) {
			mixpanel.enableTracking?.();
			onReady?.(mixpanel.getMixpanelInstance?.());
			return;
		}
		mixpanel.initializeMixpanel?.((mpInstance) => {
			mixpanel.enableTracking?.();
			onReady?.(mpInstance);
		});
	}

//#endregion
//#region packages/packages/libs/events/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		canSendEvents: () => canSendEvents,
		enableTracking: () => enableTracking,
		getMixpanel: () => getMixpanel,
		initializeAndEnableTracking: () => initializeAndEnableTracking,
		initializeMixpanel: () => initializeMixpanel,
		isMixpanelReady: () => isMixpanelReady,
		isTrackingEnabled: () => isTrackingEnabled,
		setCanSendEvents: () => setCanSendEvents,
		trackEvent: () => trackEvent,
		useMixpanel: () => useMixpanel
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).events = src_exports;

//#endregion
})();
window.elementorV2.events?.init?.();
//# sourceMappingURL=events.js.map