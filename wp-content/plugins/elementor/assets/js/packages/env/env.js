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

//#region packages/packages/libs/env/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		InvalidEnvError: () => InvalidEnvError,
		__resetEnv: () => __resetEnv,
		initEnv: () => initEnv,
		parseEnv: () => parseEnv
	});
	var globalEnv = null;
	function initEnv(env) {
		globalEnv = env;
	}
	function __resetEnv() {
		globalEnv = null;
	}
	function parseEnv(key, parseFn = (rawSettings) => rawSettings) {
		let parsedEnv = {};
		let isParsed = false;
		const proxiedEnv = new Proxy(parsedEnv, {
			get(target, property) {
				if (!isParsed) parse();
				return parsedEnv[property];
			},
			ownKeys() {
				if (!isParsed) parse();
				return Reflect.ownKeys(parsedEnv);
			},
			getOwnPropertyDescriptor() {
				return {
					configurable: true,
					enumerable: true
				};
			}
		});
		const parse = () => {
			try {
				const env = globalEnv?.[key];
				if (!env) throw new InvalidEnvError(`Settings object not found`);
				if (typeof env !== "object") throw new InvalidEnvError(`Expected settings to be \`object\`, but got \`${typeof env}\``);
				parsedEnv = parseFn(env);
			} catch (e) {
				if (e instanceof InvalidEnvError) {
					console.warn(`${key} - ${e.message}`);
					parsedEnv = {};
				} else throw e;
			} finally {
				isParsed = true;
			}
		};
		return {
			validateEnv: parse,
			env: proxiedEnv
		};
	}
	var InvalidEnvError = class extends Error {};

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).env = src_exports;

//#endregion
})();
window.elementorV2.env?.init?.();
//# sourceMappingURL=env.js.map