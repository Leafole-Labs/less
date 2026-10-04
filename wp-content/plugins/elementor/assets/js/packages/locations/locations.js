(function(react) {

//#region \0rolldown/runtime.js
	var __create = Object.create;
	var __defProp$1 = Object.defineProperty;
	var __name = (target, value) => __defProp$1(target, "name", {
		value,
		configurable: true
	});
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) {
			__defProp$1(target, name, {
				get: all[name],
				enumerable: true
			});
		}
		if (!no_symbols) {
			__defProp$1(target, Symbol.toStringTag, { value: "Module" });
		}
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) {
					__defProp$1(to, key, {
						get: ((k) => from[k]).bind(null, key),
						enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
					});
				}
			}
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp$1(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));

//#endregion
react = __toESM(react);

//#region packages/packages/libs/locations/src/components/error-boundary.tsx
	var __defProp = Object.defineProperty;
	var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	var ErrorBoundary = class extends react.Component {
		constructor() {
			super(...arguments);
			__publicField(this, "state", { hasError: false });
		}
		static getDerivedStateFromError() {
			return { hasError: true };
		}
		render() {
			if (this.state.hasError) return this.props.fallback;
			return this.props.children;
		}
	};

//#endregion
//#region packages/packages/libs/locations/src/components/injected-component-wrapper.tsx
	function InjectedComponentWrapper({ children }) {
		return /* @__PURE__ */ react.createElement(ErrorBoundary, { fallback: null }, /* @__PURE__ */ react.createElement(react.Suspense, { fallback: null }, children));
	}

//#endregion
//#region packages/packages/libs/locations/src/injections.tsx
	var flushInjectionsFns = [];
	function flushAllInjections() {
		flushInjectionsFns.forEach((flush) => flush());
	}
	function registerFlushInjections(flush) {
		flushInjectionsFns.push(flush);
	}
	function createSubscription() {
		const listeners = /* @__PURE__ */ new Set();
		return {
			subscribe: (listener) => {
				listeners.add(listener);
				return () => listeners.delete(listener);
			},
			notify: () => listeners.forEach((listener) => listener())
		};
	}
	function createGetInjections(injections) {
		return () => [...injections.values()].sort((a, b) => a.priority - b.priority);
	}
	function createUseInjections(getInjections, subscribe) {
		let snapshot = null;
		subscribe(() => {
			snapshot = null;
		});
		const getSnapshot = () => {
			if (!snapshot) snapshot = getInjections();
			return snapshot;
		};
		return () => (0, react.useSyncExternalStore)(subscribe, getSnapshot);
	}
	function wrapInjectedComponent(Component) {
		return (props) => /* @__PURE__ */ react.createElement(InjectedComponentWrapper, null, /* @__PURE__ */ react.createElement(Component, { ...props }));
	}

//#endregion
//#region packages/packages/libs/locations/src/create-location.tsx
	function createLocation() {
		const injections = /* @__PURE__ */ new Map();
		const { subscribe, notify } = createSubscription();
		const getInjections = createGetInjections(injections);
		const useInjections = createUseInjections(getInjections, subscribe);
		const Slot = createSlot(useInjections);
		const inject = createInject(injections, notify);
		flushInjectionsFns.push(() => {
			injections.clear();
			notify();
		});
		return {
			inject,
			getInjections,
			useInjections,
			Slot
		};
	}
	function createSlot(useInjections) {
		return (props) => {
			const injections = useInjections();
			return /* @__PURE__ */ react.createElement(react.Fragment, null, injections.map(({ id, component: Component }) => /* @__PURE__ */ react.createElement(Component, {
				...props,
				key: id
			})));
		};
	}
	function createInject(injections, notify) {
		return ({ component, id, options = {} }) => {
			if (injections.has(id) && !options?.overwrite) {
				console.warn(`An injection with the id "${id}" already exists. Did you mean to use "options.overwrite"?`);
				return;
			}
			injections.set(id, {
				id,
				component: wrapInjectedComponent(component),
				priority: options.priority ?? 10
			});
			notify();
		};
	}

//#endregion
//#region packages/packages/libs/locations/src/create-replaceable-location.tsx
	function createReplaceableLocation() {
		const injections = /* @__PURE__ */ new Map();
		const { subscribe, notify } = createSubscription();
		const getInjections = createGetInjections(injections);
		const useInjections = createUseInjections(getInjections, subscribe);
		const Slot = createReplaceable(useInjections);
		const inject = createRegister(injections, notify);
		flushInjectionsFns.push(() => {
			injections.clear();
			notify();
		});
		return {
			getInjections,
			useInjections,
			inject,
			Slot
		};
	}
	function createReplaceable(useInjections) {
		return (props) => {
			const { component: Component } = useInjections().find(({ condition }) => condition?.(props)) ?? {};
			if (!Component) return props.children;
			return /* @__PURE__ */ react.createElement(Component, { ...props });
		};
	}
	function createRegister(injections, notify) {
		return ({ component, id, condition = () => true, options = {} }) => {
			injections.set(id, {
				id,
				component: wrapInjectedComponent(component),
				condition,
				priority: options.priority ?? 10
			});
			notify();
		};
	}

//#endregion
//#region packages/packages/libs/locations/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		__flushAllInjections: () => flushAllInjections,
		__registerFlushInjections: () => registerFlushInjections,
		createLocation: () => createLocation,
		createReplaceableLocation: () => createReplaceableLocation
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).locations = src_exports;

//#endregion
})(React);
window.elementorV2.locations?.init?.();
//# sourceMappingURL=locations.js.map