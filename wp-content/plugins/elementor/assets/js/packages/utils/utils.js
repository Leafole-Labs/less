(function(react) {

//#region \0rolldown/runtime.js
	var __defProp$1 = Object.defineProperty;
	var __name = (target, value) => __defProp$1(target, "name", {
		value,
		configurable: true
	});
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

//#endregion

//#region packages/packages/libs/utils/src/errors/elementor-error.ts
	var __defProp = Object.defineProperty;
	var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	var ElementorError = class extends Error {
		constructor(message, { code, context = null, cause = null }) {
			super(message, { cause });
			__publicField(this, "context");
			__publicField(this, "code");
			this.context = context;
			this.code = code;
		}
	};

//#endregion
//#region packages/packages/libs/utils/src/errors/create-error.ts
	var createError = ({ code, message }) => {
		return class extends ElementorError {
			constructor({ cause, context } = {}) {
				super(message, {
					cause,
					code,
					context
				});
			}
		};
	};

//#endregion
//#region packages/packages/libs/utils/src/errors/ensure-error.ts
	var ensureError = (error) => {
		if (error instanceof Error) return error;
		let message;
		let cause = null;
		try {
			message = JSON.stringify(error);
		} catch (e) {
			cause = e;
			message = "Unable to stringify the thrown value";
		}
		return new Error(`Unexpected non-error thrown: ${message}`, { cause });
	};

//#endregion
//#region packages/packages/libs/utils/src/debounce.ts
	function debounce(fn, wait) {
		let timer = null;
		const cancel = () => {
			if (!timer) return;
			clearTimeout(timer);
			timer = null;
		};
		const flush = (...args) => {
			cancel();
			fn(...args);
		};
		const run = (...args) => {
			cancel();
			timer = setTimeout(() => {
				fn(...args);
				timer = null;
			}, wait);
		};
		const pending = () => !!timer;
		run.flush = flush;
		run.cancel = cancel;
		run.pending = pending;
		return run;
	}

//#endregion
//#region packages/packages/libs/utils/src/use-debounce-state.ts
	function useDebounceState(options = {}) {
		const { delay = 300, initialValue = "" } = options;
		const [debouncedValue, setDebouncedValue] = (0, react.useState)(initialValue);
		const [inputValue, setInputValue] = (0, react.useState)(initialValue);
		const runRef = (0, react.useRef)(null);
		(0, react.useEffect)(() => {
			return () => {
				runRef.current?.cancel?.();
			};
		}, []);
		const debouncedSetValue = (0, react.useCallback)((val) => {
			runRef.current?.cancel?.();
			runRef.current = debounce(() => {
				setDebouncedValue(val);
			}, delay);
			runRef.current();
		}, [delay]);
		const handleChange = (val) => {
			setInputValue(val);
			debouncedSetValue(val);
		};
		return {
			debouncedValue,
			inputValue,
			handleChange,
			setInputValue
		};
	}

//#endregion
//#region packages/packages/libs/utils/src/use-debounced-callback.ts
	function useDebouncedCallback(callback, delay) {
		const callbackRef = (0, react.useRef)(callback);
		(0, react.useEffect)(() => {
			callbackRef.current = callback;
		}, [callback]);
		const debounced = (0, react.useMemo)(() => debounce((...args) => callbackRef.current(...args), delay), [delay]);
		(0, react.useEffect)(() => {
			return () => {
				debounced.cancel();
			};
		}, [debounced]);
		return debounced;
	}

//#endregion
//#region packages/packages/libs/utils/src/throttle.ts
	function throttle(fn, wait, shouldExecuteIgnoredCalls = false) {
		let timer = null;
		let ignoredExecution = false;
		const cancel = () => {
			if (!timer) return;
			clearTimeout(timer);
			timer = null;
		};
		const flush = (...args) => {
			cancel();
			fn(...args);
		};
		const run = (...args) => {
			if (timer) {
				ignoredExecution = true;
				return;
			}
			fn(...args);
			timer = setTimeout(() => {
				timer = null;
				if (ignoredExecution && shouldExecuteIgnoredCalls) fn(...args);
				ignoredExecution = false;
			}, wait);
		};
		const pending = () => !!timer;
		run.flush = flush;
		run.cancel = cancel;
		run.pending = pending;
		return run;
	}

//#endregion
//#region packages/packages/libs/utils/src/encoding.ts
	var encodeString = (value) => {
		const binary = Array.from(new TextEncoder().encode(value), (b) => String.fromCharCode(b)).join("");
		return btoa(binary);
	};
	var decodeString = (value, fallback) => {
		try {
			const binary = atob(value);
			const bytes = new Uint8Array(Array.from(binary, (char) => char.charCodeAt(0)));
			return new TextDecoder().decode(bytes);
		} catch {
			return fallback !== void 0 ? fallback : "";
		}
	};

//#endregion
//#region packages/packages/libs/utils/src/hash.ts
	function hash(obj) {
		return JSON.stringify(obj, (_, value) => isPlainObject(value) ? Object.keys(value).sort().reduce((result, key) => {
			result[key] = value[key];
			return result;
		}, {}) : value);
	}
	function isPlainObject(value) {
		return !!value && typeof value === "object" && !Array.isArray(value);
	}
	function hashString(str, length) {
		let hashBasis = 5381;
		let i = str.length;
		while (i) hashBasis = hashBasis * 33 ^ str.charCodeAt(--i);
		const result = (hashBasis >>> 0).toString(36);
		if (length === void 0) return result;
		return result.slice(-length).padStart(length, "0");
	}

//#endregion
//#region packages/packages/libs/utils/src/use-search-state.ts
	function useSearchState({ localStorageKey }) {
		const getInitialSearchValue = () => {
			if (localStorageKey) {
				const storedValue = localStorage.getItem(localStorageKey);
				if (storedValue) {
					localStorage.removeItem(localStorageKey);
					return storedValue;
				}
			}
			return "";
		};
		const { debouncedValue, inputValue, handleChange } = useDebounceState({
			delay: 300,
			initialValue: getInitialSearchValue()
		});
		return {
			debouncedValue,
			inputValue,
			handleChange
		};
	}

//#endregion
//#region packages/packages/libs/utils/src/generate-unique-id.ts
	function generateUniqueId(prefix = "") {
		return `${prefix ? `${prefix}-` : ""}${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
	}

//#endregion
//#region packages/packages/libs/utils/src/string-helpers.ts
	var capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

//#endregion
//#region packages/packages/libs/utils/src/version.ts
	var compareVersions = (a, b) => {
		const aParts = String(a || "0.0.0").split(".").map(Number);
		const bParts = String(b || "0.0.0").split(".").map(Number);
		for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
			const aVal = aParts[i] || 0;
			const bVal = bParts[i] || 0;
			if (aVal !== bVal) return aVal - bVal;
		}
		return 0;
	};
	var isVersionLessThan = (a, b) => {
		return compareVersions(a, b) < 0;
	};
	var isVersionGreaterOrEqual = (a, b) => {
		return compareVersions(a, b) >= 0;
	};

//#endregion
//#region packages/packages/libs/utils/src/is-pro.ts
	function hasProInstalled() {
		return window.elementor?.helpers?.hasPro?.() ?? false;
	}
	function isProActive() {
		if (!hasProInstalled()) return false;
		return window.elementorPro?.config?.isActive ?? false;
	}
	function getProVersion() {
		return window.elementorPro?.config?.version ?? "0.0";
	}
	function isProAtLeast(targetVersion) {
		const version = getProVersion();
		if (!version) return false;
		const [major, minor] = version.split(".").map(Number);
		const [targetMajor, targetMinor] = targetVersion.split(".").map(Number);
		return major > targetMajor || major === targetMajor && minor >= targetMinor;
	}

//#endregion
//#region packages/packages/libs/utils/src/translations.ts
	function createTranslate({ configKey, defaultStrings = {} }) {
		return (key, ...args) => {
			const appConfig = window.elementorAppConfig;
			const remoteStrings = Object.fromEntries(Object.entries(appConfig?.[configKey]?.translations ?? {}).filter(([, value]) => "string" === typeof value && "" !== value.trim()));
			let template = {
				...defaultStrings,
				...remoteStrings
			}[key];
			if (!template) return key;
			for (let i = 0; i < args.length; i++) {
				template = template.replace(`%${i + 1}$s`, args[i]);
				template = template.replace("%s", args[i]);
			}
			return template;
		};
	}

//#endregion
//#region packages/packages/libs/utils/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		ElementorError: () => ElementorError,
		capitalize: () => capitalize,
		compareVersions: () => compareVersions,
		createError: () => createError,
		createTranslate: () => createTranslate,
		debounce: () => debounce,
		decodeString: () => decodeString,
		encodeString: () => encodeString,
		ensureError: () => ensureError,
		generateUniqueId: () => generateUniqueId,
		hasProInstalled: () => hasProInstalled,
		hash: () => hash,
		hashString: () => hashString,
		isProActive: () => isProActive,
		isProAtLeast: () => isProAtLeast,
		isVersionGreaterOrEqual: () => isVersionGreaterOrEqual,
		isVersionLessThan: () => isVersionLessThan,
		throttle: () => throttle,
		useDebounceState: () => useDebounceState,
		useDebouncedCallback: () => useDebouncedCallback,
		useSearchState: () => useSearchState
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).utils = src_exports;

//#endregion
})(React);
window.elementorV2.utils?.init?.();
//# sourceMappingURL=utils.js.map