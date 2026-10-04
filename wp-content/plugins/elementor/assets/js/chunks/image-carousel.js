(function() {

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
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
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

//#region assets/dev/js/frontend/handlers/image-carousel.js
	var require_image_carousel = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var ImageCarousel = class extends elementorModules.frontend.handlers.CarouselBase {
			getDefaultSettings() {
				const settings = super.getDefaultSettings();
				settings.selectors.carousel = ".elementor-image-carousel-wrapper";
				return settings;
			}
		};
		exports.default = ImageCarousel;
	}));

//#endregion
//#region \0elementor-chunk-entry
	var import_image_carousel = /* @__PURE__ */ __toESM(require_image_carousel());
	(window.__elementorChunks = window.__elementorChunks || {})["image-carousel"] = import_image_carousel;

//#endregion
})();
//# sourceMappingURL=image-carousel.js.map