(function(react) {

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

//#region packages/packages/libs/session/src/session-storage.ts
	var getSessionStorageItem = (key) => {
		return JSON.parse(sessionStorage.getItem(key) || "{}")?.item;
	};
	var setSessionStorageItem = (key, item) => {
		sessionStorage.setItem(key, JSON.stringify({ item }));
		window.dispatchEvent(new StorageEvent("storage", {
			key,
			storageArea: sessionStorage
		}));
	};
	var removeSessionStorageItem = (key) => {
		sessionStorage.removeItem(key);
		window.dispatchEvent(new StorageEvent("storage", {
			key,
			storageArea: sessionStorage
		}));
	};

//#endregion
//#region packages/packages/libs/session/src/session-storage-context.tsx
	var Context = (0, react.createContext)(null);
	function SessionStorageProvider({ children, prefix }) {
		const contextPrefix = (0, react.useContext)(Context)?.prefix ?? "";
		const chainedPrefix = contextPrefix ? `${contextPrefix}/${prefix}` : prefix;
		return /* @__PURE__ */ react.createElement(Context.Provider, { value: { prefix: chainedPrefix } }, children);
	}

//#endregion
//#region packages/packages/libs/session/src/use-session-storage.ts
	var useSessionStorage = (key, customPrefix) => {
		const contextPrefix = (0, react.useContext)(Context)?.prefix ?? "";
		const prefixedKey = `${customPrefix ? customPrefix : contextPrefix}/${key}`;
		const [value, setValue] = (0, react.useState)();
		(0, react.useEffect)(() => {
			return subscribeToSessionStorage(prefixedKey, (newValue) => {
				setValue(newValue ?? null);
			});
		}, [prefixedKey]);
		const saveValue = (newValue) => {
			setSessionStorageItem(prefixedKey, newValue);
		};
		const removeValue = () => {
			removeSessionStorageItem(prefixedKey);
		};
		return [
			value,
			saveValue,
			removeValue
		];
	};
	var subscribeToSessionStorage = (key, subscriber) => {
		subscriber(getSessionStorageItem(key));
		const abortController = new AbortController();
		window.addEventListener("storage", (e) => {
			if (e.key !== key || e.storageArea !== sessionStorage) return;
			subscriber(getSessionStorageItem(key));
		}, { signal: abortController.signal });
		return () => {
			abortController.abort();
		};
	};

//#endregion
//#region packages/packages/libs/session/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		Context: () => Context,
		SessionStorageProvider: () => SessionStorageProvider,
		getSessionStorageItem: () => getSessionStorageItem,
		removeSessionStorageItem: () => removeSessionStorageItem,
		setSessionStorageItem: () => setSessionStorageItem,
		useSessionStorage: () => useSessionStorage
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).session = src_exports;

//#endregion
})(React);
window.elementorV2.session?.init?.();
//# sourceMappingURL=session.js.map