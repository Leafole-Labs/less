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

//#region assets/dev/js/frontend/handlers/handles-position.js
	var require_handles_position = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.default = void 0;
		var handlesInsideClass = "e-handles-inside";
		var handlesHeight = 100;
		var HandlesPosition = class extends elementorModules.frontend.handlers.Base {
			onInit() {
				this.$element.on("mouseenter", this.setHandlesPosition.bind(this));
			}
			isSectionScrollSnapEnabled() {
				return elementor.settings.page.model.attributes.scroll_snap;
			}
			isOverflowHidden() {
				return "hidden" === this.$element.css("overflow");
			}
			isEmbeddedEditArea() {
				const editAreaElement = this.getEditAreaElement();
				if (!editAreaElement) return false;
				return null !== editAreaElement.closest(".elementor-embedded-editor");
			}
			getEditAreaElement() {
				const $closestEditArea = this.$element.closest(".elementor-edit-area-active");
				if ($closestEditArea.length) return $closestEditArea[0];
				const document = elementor.documents.getCurrent();
				const $editArea = document === null || document === void 0 ? void 0 : document.$element;
				if ($editArea === null || $editArea === void 0 ? void 0 : $editArea.length) return $editArea[0];
				return this.$element.closest(".elementor-edit-area")[0];
			}
			getEditAreaOffset() {
				const editAreaElement = this.getEditAreaElement();
				if (!editAreaElement) return Number.POSITIVE_INFINITY;
				return this.$element[0].getBoundingClientRect().top - editAreaElement.getBoundingClientRect().top;
			}
			setHandlesPosition() {
				const document = elementor.documents.getCurrent();
				if (!(document === null || document === void 0 ? void 0 : document.container.isEditable())) return;
				if (this.isSectionScrollSnapEnabled()) {
					this.$element.addClass(handlesInsideClass);
					return;
				}
				if (this.$element[0].getBoundingClientRect().top < handlesHeight || this.isOverflowHidden() || this.isEmbeddedEditArea() && this.getEditAreaOffset() < handlesHeight) this.$element.addClass(handlesInsideClass);
				else this.$element.removeClass(handlesInsideClass);
			}
		};
		exports.default = HandlesPosition;
	}));

//#endregion
//#region \0elementor-chunk-entry
	var import_handles_position = /* @__PURE__ */ __toESM(require_handles_position());
	(window.__elementorChunks = window.__elementorChunks || {})["handles-position"] = import_handles_position;

//#endregion
})();
//# sourceMappingURL=handles-position.js.map