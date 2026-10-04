(function() {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});

//#endregion

//#region core/editor/loader/js/editor-loader.js
	var _window$elementorV;
	window.__elementorEditorV1LoadingPromise = new Promise(function(resolve) {
		window.addEventListener("elementor/init", function() {
			resolve();
		}, { once: true });
	});
	window.elementor.start();
	if (!((_window$elementorV = window.elementorV2) !== null && _window$elementorV !== void 0 && _window$elementorV.editor)) throw new Error("The \"@elementor/editor\" package was not loaded.");
	window.elementorV2.editor.start(document.getElementById("elementor-editor-wrapper-v2"));

//#endregion
})();
//# sourceMappingURL=editor-loader.js.map