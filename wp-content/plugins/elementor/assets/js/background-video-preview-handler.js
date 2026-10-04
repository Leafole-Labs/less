"use strict";

(function() {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);

//#endregion

//#region modules/atomic-widgets/elements/atomic-background-video/handlers/editor-background-video-state.js
	var require_editor_background_video_state = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.getEditorState = getEditorState;
		exports.isEditorPreview = isEditorPreview;
		exports.resolveDesignTimeState = resolveDesignTimeState;
		exports.setEditorState = setEditorState;
		var _alpinejs$2 = (globalThis.elementorV2.alpinejs);
		var STORE_NAME = "editor-background-video-state";
		var PLAYING_STATE = "playing";
		var PAUSED_STATE = "paused";
		/**
		* @typedef {Record<string, 'playing' | 'paused' | ''>} BackgroundVideoState
		*/
		function ensureStore() {
			if (!_alpinejs$2.Alpine.store(STORE_NAME)) _alpinejs$2.Alpine.store(
				STORE_NAME,
				/** @type {BackgroundVideoState} */
				{}
			);
			return _alpinejs$2.Alpine.store(STORE_NAME);
		}
		function resolveDesignTimeState(state) {
			if (PAUSED_STATE === state || "" === state) return state;
			return PLAYING_STATE;
		}
		function getEditorState(elementId, fallback = PLAYING_STATE) {
			var _store$elementId;
			return (_store$elementId = ensureStore()[elementId]) !== null && _store$elementId !== void 0 ? _store$elementId : fallback;
		}
		function setEditorState(elementId, state) {
			const store = ensureStore();
			store[elementId] = state;
		}
		function isEditorPreview() {
			var _window$elementorFron;
			var _window$elementorFron2;
			var _window$parent;
			return Boolean(((_window$elementorFron = window.elementorFrontend) === null || _window$elementorFron === void 0 || (_window$elementorFron2 = _window$elementorFron.isEditMode) === null || _window$elementorFron2 === void 0 ? void 0 : _window$elementorFron2.call(_window$elementorFron)) || ((_window$parent = window.parent) === null || _window$parent === void 0 ? void 0 : _window$parent.elementor));
		}
	}));

//#endregion
//#region modules/atomic-widgets/elements/atomic-background-video/handlers/background-video-handler.js
	var require_background_video_handler = /* @__PURE__ */ __commonJSMin(((exports) => {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.PLAY_ELEMENT_TYPE = exports.PAUSE_ELEMENT_TYPE = exports.CONTROLS_ELEMENT_TYPE = void 0;
		var _frontendHandlers$1 = (globalThis.elementorV2.frontendHandlers);
		var _alpinejs$1 = (globalThis.elementorV2.alpinejs);
		var _editorBackgroundVideoState = require_editor_background_video_state();
		var PLAYING_CLASS = "e--playing";
		var PAUSED_CLASS = "e--paused";
		var ROOT_PLAYING_CLASS = "e-background-video--playing";
		var ROOT_PAUSED_CLASS = "e-background-video--paused";
		exports.PLAY_ELEMENT_TYPE = "e-background-video-play";
		exports.PAUSE_ELEMENT_TYPE = "e-background-video-pause";
		exports.CONTROLS_ELEMENT_TYPE = "e-background-video-controls";
		function applyVideoSettings(video, settings) {
			if (!video) return;
			video.muted = Boolean(settings.mute);
			video.loop = Boolean(settings.loop);
			video.autoplay = Boolean(settings.autoplay);
			if (settings.start_time) video.currentTime = Number(settings.start_time);
			if (settings.autoplay) video.play().catch(() => {});
		}
		function enforceEndTime(video, settings, signal) {
			if (!video) return;
			const endTime = Number(settings.end_time);
			const startTime = Number(settings.start_time) || 0;
			if (!endTime || endTime <= startTime) return;
			video.addEventListener("timeupdate", () => {
				if (video.currentTime < endTime) return;
				if (settings.loop) {
					video.currentTime = startTime;
					return;
				}
				video.pause();
			}, { signal });
		}
		(0, _frontendHandlers$1.register)({
			elementType: "e-background-video",
			id: "e-background-video-handler",
			callback: ({ element, settings, signal }) => {
				const elementId = element.dataset.id;
				const video = element.querySelector(".e-background-video__media");
				applyVideoSettings(video, settings);
				enforceEndTime(video, settings, signal);
				_alpinejs$1.Alpine.data(`eBackgroundVideo${elementId}`, () => ({
					isPlaying: video ? !video.paused : false,
					isEditor: (0, _editorBackgroundVideoState.isEditorPreview)(),
					get editorState() {
						return (0, _editorBackgroundVideoState.getEditorState)(elementId, (0, _editorBackgroundVideoState.resolveDesignTimeState)(settings.state));
					},
					get previewState() {
						if (this.isEditor) return this.editorState;
						return this.isPlaying ? "playing" : "paused";
					},
					get showPlayButton() {
						return "paused" === this.previewState;
					},
					get showPauseButton() {
						return "playing" === this.previewState;
					},
					play() {
						if (this.isEditor || !video) return;
						video.play().catch(() => {});
					},
					pause() {
						if (this.isEditor || !video) return;
						video.pause();
					},
					init() {
						if (video) {
							video.addEventListener("play", () => {
								this.isPlaying = true;
							}, { signal });
							video.addEventListener("pause", () => {
								this.isPlaying = false;
							}, { signal });
						}
					},
					rootState: { ":class"() {
						if (this.isEditor) return {};
						return {
							[ROOT_PLAYING_CLASS]: this.isPlaying,
							[ROOT_PAUSED_CLASS]: !this.isPlaying
						};
					} },
					controlsWrapper: { ":class"() {
						return {
							[PLAYING_CLASS]: "playing" === this.previewState,
							[PAUSED_CLASS]: "paused" === this.previewState
						};
					} },
					playButton: { "@click"() {
						this.play();
					} },
					pauseButton: { "@click"() {
						this.pause();
					} }
				}));
				return () => {};
			}
		});
	}));

//#endregion
//#region modules/atomic-widgets/elements/atomic-background-video/handlers/background-video-preview-handler.js
	var _frontendHandlers = (globalThis.elementorV2.frontendHandlers);
	var _alpinejs = (globalThis.elementorV2.alpinejs);
	var _editorBackgroundVideoState = require_editor_background_video_state();
	var _backgroundVideoHandler = require_background_video_handler();
	(0, _frontendHandlers.register)({
		elementType: "e-background-video",
		id: "e-background-video-preview-handler",
		callback: ({ element, settings, listenToChildren }) => {
			const elementId = element.dataset.id;
			(0, _editorBackgroundVideoState.setEditorState)(elementId, (0, _editorBackgroundVideoState.resolveDesignTimeState)(settings.state));
			(0, _alpinejs.refreshTree)(element);
			listenToChildren([
				_backgroundVideoHandler.PLAY_ELEMENT_TYPE,
				_backgroundVideoHandler.PAUSE_ELEMENT_TYPE,
				_backgroundVideoHandler.CONTROLS_ELEMENT_TYPE
			]).render((event) => {
				if (event.detail.element.closest("[data-e-type=\"e-background-video\"]") !== element) return;
				(0, _alpinejs.refreshTree)(element);
			});
		}
	});

//#endregion
})();
//# sourceMappingURL=background-video-preview-handler.js.map