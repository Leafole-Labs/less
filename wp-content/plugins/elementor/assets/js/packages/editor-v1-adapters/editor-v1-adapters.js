(function(react, _elementor_utils) {

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

//#region packages/packages/libs/editor-v1-adapters/src/dispatchers/utils.ts
	function isJQueryDeferred(value) {
		return !!value && "object" === typeof value && Object.hasOwn(value, "promise") && Object.hasOwn(value, "then") && Object.hasOwn(value, "fail");
	}
	function promisifyJQueryDeferred(deferred) {
		return new Promise((resolve, reject) => {
			deferred.then(resolve, reject);
		});
	}

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/dispatchers/dispatchers.ts
	async function runCommand(command, args, { internal = false } = {}) {
		const result = runCommandSync(command, args, { internal });
		if (result instanceof Promise) return result;
		if (isJQueryDeferred(result)) return promisifyJQueryDeferred(result);
		return Promise.resolve(result);
	}
	function runCommandSync(command, args, { internal = false } = {}) {
		const extendedWindow = window;
		const run = internal ? extendedWindow.$e?.internal : extendedWindow.$e?.run;
		if (!run) throw new Error(`\`${internal ? "$e.internal" : "$e.run"}()\` is not available`);
		return run(command, args);
	}
	function openRoute(route) {
		const extendedWindow = window;
		if (!extendedWindow.$e?.route) return Promise.reject("`$e.route()` is not available");
		try {
			return Promise.resolve(extendedWindow.$e.route(route));
		} catch (e) {
			return Promise.reject(e);
		}
	}
	function registerRoute(route) {
		const extendedWindow = window;
		if (!extendedWindow.$e?.routes?.register) return Promise.reject("`$e.routes.register()` is not available");
		const routeParts = route.split("/");
		if (routeParts.length < 2) return Promise.reject(`\`${route}\` is an invalid route`);
		const componentRoute = routeParts.pop();
		const component = routeParts.join("/");
		try {
			return Promise.resolve(extendedWindow.$e.routes.register(component, componentRoute, () => null));
		} catch (e) {
			return Promise.reject(e);
		}
	}

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/listeners/event-creators.ts
	var commandStartEvent = (command) => {
		return {
			type: "command",
			name: command,
			state: "before"
		};
	};
	var commandEndEvent = (command) => {
		return {
			type: "command",
			name: command,
			state: "after"
		};
	};
	var routeOpenEvent = (route) => {
		return {
			type: "route",
			name: route,
			state: "open"
		};
	};
	var routeCloseEvent = (route) => {
		return {
			type: "route",
			name: route,
			state: "close"
		};
	};
	var windowEvent = (event) => {
		return {
			type: "window-event",
			name: event
		};
	};
	var v1ReadyEvent = () => {
		return windowEvent("elementor/initialized");
	};

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/listeners/is-ready.ts
	var ready = false;
	function isReady() {
		return ready;
	}
	function setReady(value) {
		ready = value;
	}

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/listeners/utils.ts
	function dispatchReadyEvent() {
		return getV1LoadingPromise().then(() => {
			setReady(true);
			window.dispatchEvent(new CustomEvent("elementor/initialized"));
		});
	}
	function getV1LoadingPromise() {
		const v1LoadingPromise = window.__elementorEditorV1LoadingPromise;
		if (!v1LoadingPromise) return Promise.reject("Elementor Editor V1 is not loaded");
		return v1LoadingPromise;
	}
	function normalizeEvent(e) {
		if (e instanceof CustomEvent && e.detail?.command) return {
			type: "command",
			command: e.detail.command,
			args: e.detail.args,
			originalEvent: e
		};
		if (e instanceof CustomEvent && e.detail?.route) return {
			type: "route",
			route: e.detail.route,
			originalEvent: e
		};
		return {
			type: "window-event",
			event: e.type,
			originalEvent: e
		};
	}

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/listeners/listeners.ts
	var callbacksByEvent = /* @__PURE__ */ new Map();
	var abortController = new AbortController();
	function listenTo(eventDescriptors, callback) {
		if (!Array.isArray(eventDescriptors)) eventDescriptors = [eventDescriptors];
		const cleanups = eventDescriptors.map((event) => {
			const { type, name } = event;
			switch (type) {
				case "command": return registerCommandListener(name, event.state, callback);
				case "route": return registerRouteListener(name, event.state, callback);
				case "window-event": return registerWindowEventListener(name, callback);
			}
		});
		return () => {
			cleanups.forEach((cleanup) => cleanup());
		};
	}
	function flushListeners() {
		abortController.abort();
		callbacksByEvent.clear();
		setReady(false);
		abortController = new AbortController();
	}
	function registerCommandListener(command, state, callback) {
		return registerWindowEventListener(`elementor/commands/run/${state}`, (e) => {
			if (e.type === "command" && e.command === command) callback(e);
		});
	}
	function registerRouteListener(route, state, callback) {
		return registerWindowEventListener(`elementor/routes/${state}`, (e) => {
			if (e.type === "route" && e.route.startsWith(route)) callback(e);
		});
	}
	var V1_READY_EVENT_NAME = "elementor/initialized";
	function registerWindowEventListener(event, callback) {
		if (!callbacksByEvent.has(event)) {
			callbacksByEvent.set(event, []);
			addListener(event);
		}
		callbacksByEvent.get(event)?.push(callback);
		if (event === V1_READY_EVENT_NAME && isReady()) Promise.resolve().then(() => {
			if (callbacksByEvent.get(event)?.includes(callback)) callback({
				type: "window-event",
				event,
				originalEvent: new CustomEvent(event)
			});
		});
		return () => {
			const callbacks = callbacksByEvent.get(event);
			if (!callbacks?.length) return;
			const filtered = callbacks.filter((cb) => cb !== callback);
			callbacksByEvent.set(event, filtered);
		};
	}
	function addListener(event) {
		window.addEventListener(event, makeEventHandler(event), { signal: abortController.signal });
	}
	function makeEventHandler(event) {
		return (e) => {
			if (!isReady()) return;
			const normalizedEvent = normalizeEvent(e);
			callbacksByEvent.get(event)?.forEach((callback) => {
				callback(normalizedEvent);
			});
		};
	}

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/readers/index.ts
	var EXPERIMENTAL_FEATURES = {};
	function isRouteActive(route) {
		return !!window.$e?.routes?.isPartOf(route);
	}
	var isExperimentActive = (experiment) => {
		return !!window.elementorCommon?.config?.experimentalFeatures?.[experiment];
	};

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/hooks/use-listen-to.ts
	function useListenTo(event, getSnapshot, deps = []) {
		const [snapshot, setSnapshot] = (0, react.useState)(() => getSnapshot());
		(0, react.useEffect)(() => {
			const updateState = () => setSnapshot(getSnapshot());
			updateState();
			return listenTo(event, updateState);
		}, deps);
		return snapshot;
	}

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/hooks/use-is-route-active.ts
	function useIsRouteActive(route) {
		return useListenTo([routeOpenEvent(route), routeCloseEvent(route)], () => isRouteActive(route), [route]);
	}

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/edit-mode.ts
	function useEditMode() {
		return useListenTo(windowEvent("elementor/edit-mode/change"), getCurrentEditMode);
	}
	function getCurrentEditMode() {
		return window.elementor.channels.dataEditMode.request("activeMode");
	}
	function changeEditMode(newMode) {
		return window.elementor.changeEditMode(newMode);
	}

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/hooks/use-route-status.ts
	function useRouteStatus(route, { blockOnKitRoutes = true, allowedEditModes = ["edit"] } = {}) {
		const isRouteActive = useIsRouteActive(route);
		const isKitRouteActive = useIsRouteActive("panel/global");
		const currentEditMode = useEditMode();
		const isBlockedByEditMode = !allowedEditModes.includes(currentEditMode);
		return {
			isActive: isRouteActive && !isBlockedByEditMode,
			isBlocked: isBlockedByEditMode || blockOnKitRoutes && isKitRouteActive
		};
	}

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/ajax/index.ts
	var ajax = {
		async load(data) {
			const extendedWindow = window;
			return new Promise((success, error) => {
				extendedWindow.elementorCommon?.ajax?.load({
					...data,
					success,
					error
				});
			});
		},
		invalidateCache(data) {
			window.elementorCommon?.ajax?.invalidateCache(data);
		}
	};

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/undoable/get-history-manager.ts
	var HistoryManagerNotAvailable = (0, _elementor_utils.createError)({
		code: "history_manager_not_available",
		message: "Cannot access History manager."
	});
	function getHistoryManager() {
		const historyManger = window.elementor?.documents?.getCurrent?.()?.history;
		if (!historyManger) throw new HistoryManagerNotAvailable();
		return historyManger;
	}

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/undoable/undoable.ts
	function undoable(actions, options) {
		actions.redo ?? (actions.redo = actions.do);
		const _addHistoryItem = options.debounce ? (0, _elementor_utils.debounce)(addHistoryItem, options.debounce.wait) : addHistoryItem;
		return (payload) => {
			const _payload = payload;
			const _actions = actions;
			let doReturn = _actions.do(_payload);
			let undoReturn;
			_addHistoryItem({
				title: normalizeToGenerator(options.title)(_payload, doReturn),
				subTitle: normalizeToGenerator(options.subtitle)(_payload, doReturn),
				type: "",
				restore: (_, isRedo) => {
					if (isRedo) {
						doReturn = _actions.redo(_payload, doReturn, undoReturn);
						return;
					}
					undoReturn = _actions.undo(_payload, doReturn);
				}
			});
			return doReturn;
		};
	}
	function normalizeToGenerator(value) {
		return typeof value === "function" ? value : () => value ?? "";
	}
	function addHistoryItem(item) {
		getHistoryManager().addItem(item);
	}

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/data-hooks/register-data-hook.ts
	var hookId = 0;
	function registerDataHook(type, command, callback) {
		const hooksClasses = window.$e?.modules?.hookData;
		const HookClass = {
			after: hooksClasses?.After,
			dependency: hooksClasses?.Dependency
		}[type];
		if (!HookClass) throw new Error(`Data hook '${type}' is not available`);
		const currentHookId = ++hookId;
		const hook = new class extends HookClass {
			getCommand() {
				return command;
			}
			getId() {
				return `${command}--data--${currentHookId}`;
			}
			apply(args, result) {
				const hookOptions = {};
				const currentWindow = window;
				const commandsCurrentTrace = currentWindow.$e?.commands?.currentTrace;
				if (commandsCurrentTrace) hookOptions.commandsCurrentTrace = commandsCurrentTrace;
				const currentHistoryItemId = currentWindow.elementor?.documents?.getCurrent()?.history?.getCurrentId();
				if (currentHistoryItemId) hookOptions.currentHistoryItemId = currentHistoryItemId;
				if (type === "dependency") return callback(args, hookOptions);
				return callback(args, result, hookOptions);
			}
		}();
		hook.register();
		return hook;
	}

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/data-hooks/block-command.ts
	function blockCommand({ command, condition }) {
		return registerDataHook("dependency", command, (args) => {
			return !condition(args);
		});
	}

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/canvas/get-canvas-iframe-document.ts
	function getCanvasIframeDocument() {
		return window.elementor?.$preview?.[0]?.contentDocument;
	}

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/config/get-elementor-globals.ts
	var getElementorConfig = () => {
		return window.elementor?.config ?? {};
	};
	var getElementorFrontendConfig = () => {
		return window.elementorFrontend?.config ?? {};
	};

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/config/enqueue-font.ts
	var enqueueFont = (fontFamily, context = "preview") => {
		return window.elementor?.helpers?.enqueueFont?.(fontFamily, context) ?? null;
	};

//#endregion
//#region packages/packages/libs/editor-v1-adapters/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		EXPERIMENTAL_FEATURES: () => EXPERIMENTAL_FEATURES,
		__privateDispatchReadyEvent: () => dispatchReadyEvent,
		__privateFlushListeners: () => flushListeners,
		__privateIsReady: () => isReady,
		__privateIsRouteActive: () => isRouteActive,
		__privateListenTo: () => listenTo,
		__privateOpenRoute: () => openRoute,
		__privateRegisterRoute: () => registerRoute,
		__privateRunCommand: () => runCommand,
		__privateRunCommandSync: () => runCommandSync,
		__privateSetReady: () => setReady,
		__privateUseIsRouteActive: () => useIsRouteActive,
		__privateUseListenTo: () => useListenTo,
		__privateUseRouteStatus: () => useRouteStatus,
		ajax: () => ajax,
		blockCommand: () => blockCommand,
		changeEditMode: () => changeEditMode,
		commandEndEvent: () => commandEndEvent,
		commandStartEvent: () => commandStartEvent,
		enqueueFont: () => enqueueFont,
		getCanvasIframeDocument: () => getCanvasIframeDocument,
		getCurrentEditMode: () => getCurrentEditMode,
		getElementorConfig: () => getElementorConfig,
		getElementorFrontendConfig: () => getElementorFrontendConfig,
		isExperimentActive: () => isExperimentActive,
		registerDataHook: () => registerDataHook,
		routeCloseEvent: () => routeCloseEvent,
		routeOpenEvent: () => routeOpenEvent,
		undoable: () => undoable,
		useEditMode: () => useEditMode,
		v1ReadyEvent: () => v1ReadyEvent,
		windowEvent: () => windowEvent
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorV1Adapters = src_exports;

//#endregion
})(React, elementorV2.utils);
window.elementorV2.editorV1Adapters?.init?.();
//# sourceMappingURL=editor-v1-adapters.js.map