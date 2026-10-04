(function(_elementor_query, _elementor_utils, react) {

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

//#region packages/packages/libs/wp-media/src/errors.ts
	var WpMediaNotAvailableError = (0, _elementor_utils.createError)({
		code: "wp_media_not_available",
		message: "`wp.media` is not available, make sure the `media-models` handle is set in the dependencies array"
	});
	var WpPluploadSettingsNotAvailableError = (0, _elementor_utils.createError)({
		code: "wp_plupload_settings_not_available",
		message: "`_wpPluploadSettings` is not available, make sure a wp media uploader is open"
	});

//#endregion
//#region packages/packages/libs/wp-media/src/media.ts
	var wpMediaWindow = window;
	var media_default = /* @__PURE__ */ __name(() => {
		if (!wpMediaWindow.wp?.media) throw new WpMediaNotAvailableError();
		return wpMediaWindow.wp.media;
	}, "default");

//#endregion
//#region packages/packages/libs/wp-media/src/normalize.ts
	function normalize(attachment) {
		const { filesizeInBytes, filesizeHumanReadable, author, authorName, ...rest } = attachment;
		return {
			...rest,
			filesize: {
				inBytes: filesizeInBytes,
				humanReadable: filesizeHumanReadable
			},
			author: {
				id: parseInt(author),
				name: authorName
			}
		};
	}

//#endregion
//#region packages/packages/libs/wp-media/src/get-media-attachment.ts
	async function fetchAttachmentFromWP(id) {
		const model = media_default().attachment(id);
		const wpAttachment = model.toJSON();
		if ("url" in wpAttachment) return normalize(wpAttachment);
		try {
			return normalize(await model.fetch());
		} catch {
			return null;
		}
	}
	async function getMediaAttachment({ id }) {
		if (!id) return null;
		return (0, _elementor_query.getQueryClient)().ensureQueryData({
			queryKey: ["wp-attachment", id],
			queryFn: () => fetchAttachmentFromWP(id)
		});
	}

//#endregion
//#region packages/packages/libs/wp-media/src/hooks/use-wp-media-attachment.ts
	function useWpMediaAttachment(id) {
		return (0, _elementor_query.useQuery)({
			queryKey: ["wp-attachment", id],
			queryFn: () => fetchAttachmentFromWP(id),
			enabled: !!id
		});
	}

//#endregion
//#region packages/packages/libs/wp-media/src/wp-plupload-settings.ts
	var wpPluploadSettingsWindow = window;
	var wp_plupload_settings_default = /* @__PURE__ */ __name(() => {
		if (!wpPluploadSettingsWindow._wpPluploadSettings) throw new WpPluploadSettingsNotAvailableError();
		return wpPluploadSettingsWindow._wpPluploadSettings;
	}, "default");

//#endregion
//#region packages/packages/libs/wp-media/src/hooks/use-wp-media-frame.ts
	function useWpMediaFrame(options) {
		const frame = (0, react.useRef)();
		const open = (openOptions = {}) => {
			cleanupFrame(frame.current);
			frame.current = createFrame({
				...options,
				...openOptions
			});
			frame.current?.open();
		};
		(0, react.useEffect)(() => {
			return () => {
				cleanupFrame(frame.current);
			};
		}, []);
		return { open };
	}
	function createFrame({ onSelect, onSelectUrl, allowUrlImport, multiple, mediaTypes, selected, title, mode = "browse", currentUrl, currentAlt }) {
		const frame = media_default()({
			title,
			multiple,
			library: { type: getMimeTypes(mediaTypes) },
			...allowUrlImport ? { frame: "post" } : {}
		}).on("open", () => {
			setTypeCaller(frame);
			applyMode(frame, mode, currentUrl, currentAlt);
			if (mode !== "url") applySelection(frame, selected);
		}).on("insert select", () => select(frame, multiple, onSelect, onSelectUrl));
		if (allowUrlImport) frame.on("ready open", () => restrictFrameMenu(frame));
		handleExtensions(frame, mediaTypes);
		return frame;
	}
	function cleanupFrame(frame) {
		frame?.detach();
		frame?.remove();
	}
	function applyMode(frame, mode = "browse", currentUrl, currentAlt) {
		if (mode === "url") {
			frame.setState("embed");
			if (currentUrl || currentAlt) setTimeout(() => {
				if (currentUrl) frame.state()?.props?.set("url", currentUrl);
				if (currentAlt) frame.state()?.props?.set("alt", currentAlt);
			}, 0);
		} else frame.content.mode(mode);
	}
	function applySelection(frame, selected) {
		const selectedAttachments = (typeof selected === "number" ? [selected] : selected)?.filter((id) => !!id).map((id) => media_default().attachment(id));
		frame.state().get("selection").set(selectedAttachments || []);
	}
	function select(frame, multiple, onSelect, onSelectUrl) {
		const state = frame.state();
		if (state.get("id") === "embed") {
			if (onSelectUrl) {
				const url = state.props?.get("url");
				const alt = state.props?.get("alt");
				if (url) onSelectUrl(url, alt);
			}
			return;
		}
		const attachments = state.get("selection").toJSON().map(normalize);
		onSelect(multiple ? attachments : attachments[0]);
	}
	var FRAME_MENU_ITEMS_TO_REMOVE = [
		"#menu-item-gallery",
		"#menu-item-featured-image",
		"#menu-item-playlist",
		"#menu-item-video-playlist"
	].join(",");
	function restrictFrameMenu(frame) {
		frame.$el?.find(FRAME_MENU_ITEMS_TO_REMOVE)?.remove();
	}
	function setTypeCaller(frame) {
		frame.uploader.uploader.param("uploadTypeCaller", "elementor-wp-media-upload");
	}
	function handleExtensions(frame, mediaTypes) {
		const defaultExtensions = wp_plupload_settings_default().defaults.filters.mime_types?.[0]?.extensions;
		frame.on("ready", () => {
			wp_plupload_settings_default().defaults.filters.mime_types = [{ extensions: getExtensions(mediaTypes) }];
		});
		frame.on("close", () => {
			wp_plupload_settings_default().defaults.filters.mime_types = defaultExtensions ? [{ extensions: defaultExtensions }] : [];
		});
	}
	var imageExtensions = [
		"avif",
		"bmp",
		"gif",
		"ico",
		"jpe",
		"jpeg",
		"jpg",
		"png",
		"webp"
	];
	var videoExtensions = [
		"mp4",
		"webm",
		"ogg",
		"mov",
		"m4v",
		"avi",
		"wmv",
		"mpg",
		"mpeg",
		"3gp",
		"3g2"
	];
	function getMimeTypes(mediaTypes) {
		const mimeTypesPerType = {
			image: imageExtensions.map((extension) => `image/${extension}`),
			svg: ["image/svg+xml"],
			video: [
				"video/mp4",
				"video/webm",
				"video/ogg",
				"video/quicktime",
				"video/x-m4v",
				"video/avi",
				"video/x-ms-wmv",
				"video/mpeg",
				"video/3gpp",
				"video/3gpp2"
			]
		};
		return mediaTypes.reduce((prev, currentType) => {
			return prev.concat(mimeTypesPerType[currentType]);
		}, []);
	}
	function getExtensions(mediaTypes) {
		const extensionsPerType = {
			image: imageExtensions,
			svg: ["svg"],
			video: videoExtensions
		};
		return mediaTypes.reduce((prev, currentType) => {
			return prev.concat(extensionsPerType[currentType]);
		}, []).join(",");
	}

//#endregion
//#region packages/packages/libs/wp-media/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		getMediaAttachment: () => getMediaAttachment,
		useWpMediaAttachment: () => useWpMediaAttachment,
		useWpMediaFrame: () => useWpMediaFrame
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).wpMedia = src_exports;

//#endregion
})(elementorV2.query, elementorV2.utils, React);
window.elementorV2.wpMedia?.init?.();
//# sourceMappingURL=wp-media.js.map