(function(_wordpress_i18n) {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});

//#endregion

//#region assets/dev/js/admin/gutenberg.js
	(function($) {
		"use strict";
		var ElementorGutenbergApp = {
			cacheElements: function cacheElements() {
				var self = this;
				self.isElementorMode = ElementorGutenbergSettings.isElementorMode;
				self.cache = {};
				self.cache.$gutenberg = $("#editor");
				self.cache.$switchMode = $($("#elementor-gutenberg-button-switch-mode").html());
				self.cache.$switchModeButton = self.cache.$switchMode.find("#elementor-switch-mode-button");
				self.bindEvents();
				self.toggleStatus();
				wp.data.subscribe(function() {
					setTimeout(function() {
						self.buildPanel();
					}, 1);
				});
			},
			buildPanel: function buildPanel() {
				var self = this;
				if (!self.cache.$gutenberg.find("#elementor-switch-mode").length) self.cache.$gutenberg.find(".edit-post-header-toolbar").append(self.cache.$switchMode);
				if (this.hasIframe()) this.handleIframe();
				if (!$("#elementor-editor").length) {
					self.cache.$editorPanel = $($("#elementor-gutenberg-panel").html());
					var editorButtonParent = self.cache.$gutenberg.find(".block-editor-writing-flow");
					if (!editorButtonParent.length) editorButtonParent = self.cache.$gutenberg.find(".is-desktop-preview");
					self.cache.$gurenbergBlockList = editorButtonParent;
					self.cache.$gurenbergBlockList.append(self.cache.$editorPanel);
					self.cache.$editorPanelButton = self.cache.$editorPanel.find("#elementor-go-to-edit-page-link");
					self.cache.$editorPanelButton.on("click", function(event) {
						event.preventDefault();
						self.handleEditButtonClick();
					});
				}
			},
			handleIframe: function handleIframe() {
				this.hideIframeContent();
				this.buildPanelTopBar();
			},
			hasIframe: function hasIframe() {
				return !!this.cache.$gutenberg.find("iframe[name=\"editor-canvas\"]").length;
			},
			hideIframeContent: function hideIframeContent() {
				if (!this.isElementorMode) return;
				this.cache.$gutenberg.find("iframe[name=\"editor-canvas\"]").contents().find("body").append("<style>\n				.editor-post-text-editor,\n				.block-editor-block-list__layout {\n					display: none;\n				}\n\n				body {\n					padding: 0 !important;\n				}\n			</style>");
			},
			buildPanelTopBar: function buildPanelTopBar() {
				var self = this;
				if (!$("#elementor-edit-mode-button").length && this.isElementorMode) {
					self.cache.$editorBtnTop = $($("#elementor-gutenberg-button-tmpl").html());
					self.cache.$gutenberg.find(".edit-post-header-toolbar").append(self.cache.$editorBtnTop);
					$("#elementor-edit-mode-button").on("click", function(event) {
						event.preventDefault();
						self.handleEditButtonClick(false);
					});
				}
			},
			handleEditButtonClick: function handleEditButtonClick() {
				var withAnimation = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
				var self = this;
				if (withAnimation) self.animateLoader();
				if ("auto-draft" === wp.data.select("core/editor").getCurrentPost().status) {
					if (!wp.data.select("core/editor").getEditedPostAttribute("title")) wp.data.dispatch("core/editor").editPost({ title: "Elementor #" + $("#post_ID").val() });
					wp.data.dispatch("core/editor").savePost();
				}
				self.redirectWhenSave();
			},
			bindEvents: function bindEvents() {
				var self = this;
				self.cache.$switchModeButton.on("click", function() {
					if (self.isElementorMode) elementorCommon.dialogsManager.createWidget("confirm", {
						message: (0, _wordpress_i18n.__)("You are about to switch this page from the Elementor editor to the WordPress editor. Your current layout, design, and content may break and need to be rebuilt. Are you sure you want to continue?", "elementor"),
						headerMessage: (0, _wordpress_i18n.__)("Edit with WordPress?", "elementor"),
						strings: {
							confirm: (0, _wordpress_i18n.__)("Continue", "elementor"),
							cancel: (0, _wordpress_i18n.__)("Cancel", "elementor")
						},
						defaultOption: "cancel",
						onConfirm: function onConfirm() {
							var wpEditor = wp.data.dispatch("core/editor");
							wpEditor.editPost({ gutenberg_elementor_mode: false });
							wpEditor.savePost();
							self.isElementorMode = !self.isElementorMode;
							self.toggleStatus();
						}
					}).show();
					else {
						self.isElementorMode = !self.isElementorMode;
						self.toggleStatus();
						self.cache.$editorPanelButton.trigger("click");
					}
				});
			},
			redirectWhenSave: function redirectWhenSave() {
				var self = this;
				setTimeout(function() {
					if (wp.data.select("core/editor").isSavingPost()) self.redirectWhenSave();
					else location.href = ElementorGutenbergSettings.editLink;
				}, 300);
			},
			animateLoader: function animateLoader() {
				this.cache.$editorPanelButton.addClass("elementor-animate");
			},
			toggleStatus: function toggleStatus() {
				jQuery("body").toggleClass("elementor-editor-active", this.isElementorMode).toggleClass("elementor-editor-inactive", !this.isElementorMode);
			},
			init: function init() {
				this.cacheElements();
			}
		};
		$(function() {
			ElementorGutenbergApp.init();
		});
	})(jQuery);

//#endregion
})(wp.i18n);
//# sourceMappingURL=gutenberg.js.map