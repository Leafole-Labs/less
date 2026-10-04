(function() {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});

//#endregion

//#region modules/editor-one/assets/js/admin.js
	document.addEventListener("DOMContentLoaded", function() {
		if ("elementor-element-manager" === new URLSearchParams(window.location.search).get("page")) document.querySelectorAll("link[href*=\"/wp-admin/css/forms.css\"]").forEach(function(link) {
			return link.remove();
		});
	});

//#endregion
})();
//# sourceMappingURL=editor-one-admin.js.map