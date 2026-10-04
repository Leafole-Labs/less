(function(_elementor_schema) {

//#region \0rolldown/runtime.js
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
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

//#region packages/packages/libs/editor-props/src/utils/create-prop-utils.ts
	var SCHEMA_CACHE = /* @__PURE__ */ new Map();
	function getPropSchemaFromCache(key) {
		return SCHEMA_CACHE.get(key);
	}
	function createPropUtils(key, valueSchema) {
		const schema = _elementor_schema.z.strictObject({
			$$type: _elementor_schema.z.literal(key),
			value: valueSchema,
			disabled: _elementor_schema.z.boolean().optional()
		});
		function isValid(prop) {
			return schema.safeParse(prop).success;
		}
		function create(value, createOptions) {
			const fn = typeof value === "function" ? value : () => value;
			const { base, disabled } = createOptions || {};
			if (!base) return {
				$$type: key,
				value: fn(),
				...disabled && { disabled }
			};
			if (!isValid(base)) throw new Error(`Cannot create prop based on invalid value: ${JSON.stringify(base)}`);
			return {
				$$type: key,
				value: fn(base.value),
				...disabled && { disabled }
			};
		}
		function extract(prop) {
			if (!isValid(prop)) return null;
			return prop.value;
		}
		const propUtil = {
			extract,
			isValid,
			create,
			schema,
			key
		};
		SCHEMA_CACHE.set(key, propUtil);
		return propUtil;
	}
	function createArrayPropUtils(key, valueSchema, overrideKey) {
		return createPropUtils(overrideKey || `${key}-array`, _elementor_schema.z.array(valueSchema));
	}

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/utils.ts
	var unknownChildrenSchema = _elementor_schema.z.any().nullable();

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/shadow.ts
	var shadowPropTypeUtil = createPropUtils("shadow", _elementor_schema.z.strictObject({
		position: unknownChildrenSchema,
		hOffset: unknownChildrenSchema,
		vOffset: unknownChildrenSchema,
		blur: unknownChildrenSchema,
		spread: unknownChildrenSchema,
		color: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/box-shadow.ts
	var boxShadowPropTypeUtil = createPropUtils("box-shadow", _elementor_schema.z.array(shadowPropTypeUtil.schema));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/border-radius.ts
	var borderRadiusPropTypeUtil = createPropUtils("border-radius-v2", _elementor_schema.z.strictObject({
		"start-start": unknownChildrenSchema,
		"start-end": unknownChildrenSchema,
		"end-start": unknownChildrenSchema,
		"end-end": unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/border-width.ts
	var borderWidthPropTypeUtil = createPropUtils("border-width-v2", _elementor_schema.z.strictObject({
		"block-start": unknownChildrenSchema,
		"block-end": unknownChildrenSchema,
		"inline-start": unknownChildrenSchema,
		"inline-end": unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/classes.ts
	var CLASSES_PROP_KEY = "classes";
	var classesPropTypeUtil = createPropUtils(CLASSES_PROP_KEY, _elementor_schema.z.array(_elementor_schema.z.string().regex(/^[a-z][a-z-_0-9]*$/i)));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/color.ts
	var colorPropTypeUtil = createPropUtils("color", _elementor_schema.z.string());

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/flex.ts
	var flexPropTypeUtil = createPropUtils("flex", _elementor_schema.z.strictObject({
		flexGrow: unknownChildrenSchema,
		flexShrink: unknownChildrenSchema,
		flexBasis: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/font-family.ts
	var baseUtil = createPropUtils("font-family", _elementor_schema.z.string().nullable());
	var fontFamilyPropTypeUtil = Object.assign(baseUtil, { getEnqueueFontFamily: (value) => {
		const trimmed = value.trim();
		if (trimmed.startsWith("\"") && trimmed.endsWith("\"") || trimmed.startsWith("'") && trimmed.endsWith("'")) return trimmed.slice(1, -1).trim();
		return trimmed;
	} });

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/image.ts
	var imagePropTypeUtil = createPropUtils("image", _elementor_schema.z.strictObject({
		src: unknownChildrenSchema,
		size: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/image-attachment-id.ts
	var imageAttachmentIdPropType = createPropUtils("image-attachment-id", _elementor_schema.z.number());

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/image-src.ts
	var imageSrcPropTypeUtil = createPropUtils("image-src", _elementor_schema.z.strictObject({
		id: unknownChildrenSchema,
		url: _elementor_schema.z.null(),
		alt: unknownChildrenSchema.optional().default(null)
	}).or(_elementor_schema.z.strictObject({
		id: unknownChildrenSchema.optional().default(null),
		url: unknownChildrenSchema,
		alt: unknownChildrenSchema.optional().default(null)
	})));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/icon.ts
	var iconPropTypeUtil = createPropUtils("icon", _elementor_schema.z.strictObject({
		value: unknownChildrenSchema,
		library: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/svg-src.ts
	var svgSrcValueSchema = _elementor_schema.z.strictObject({
		id: unknownChildrenSchema,
		url: _elementor_schema.z.null()
	}).or(_elementor_schema.z.strictObject({
		id: _elementor_schema.z.null(),
		url: unknownChildrenSchema
	})).or(_elementor_schema.z.strictObject({
		id: unknownChildrenSchema,
		url: unknownChildrenSchema
	}));
	var svgSrcPropTypeUtil = createPropUtils("svg-src", svgSrcValueSchema);

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/video-attachment-id.ts
	var videoAttachmentIdPropType = createPropUtils("video-attachment-id", _elementor_schema.z.number());

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/video-src.ts
	var videoSrcPropTypeUtil = createPropUtils("video-src", _elementor_schema.z.strictObject({
		id: unknownChildrenSchema,
		url: _elementor_schema.z.literal(null).optional()
	}).or(_elementor_schema.z.strictObject({
		id: _elementor_schema.z.literal(null).optional(),
		url: unknownChildrenSchema
	})));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/dimensions.ts
	var dimensionsPropTypeUtil = createPropUtils("dimensions", _elementor_schema.z.strictObject({
		"block-start": unknownChildrenSchema,
		"block-end": unknownChildrenSchema,
		"inline-start": unknownChildrenSchema,
		"inline-end": unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/number.ts
	var numberPropTypeUtil = createPropUtils("number", _elementor_schema.z.number().nullable());

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/size.ts
	var sizeNumberOrEmpty = _elementor_schema.z.union([_elementor_schema.z.number(), _elementor_schema.z.literal("")]);
	var sizePropTypeUtil = createPropUtils("size", _elementor_schema.z.strictObject({
		unit: _elementor_schema.z.enum([
			"px",
			"em",
			"rem",
			"%",
			"vw",
			"vh",
			"ch",
			"fr"
		]),
		size: sizeNumberOrEmpty
	}).or(_elementor_schema.z.strictObject({
		unit: _elementor_schema.z.enum([
			"deg",
			"rad",
			"grad",
			"turn"
		]),
		size: sizeNumberOrEmpty
	})).or(_elementor_schema.z.strictObject({
		unit: _elementor_schema.z.enum(["s", "ms"]),
		size: sizeNumberOrEmpty
	})).or(_elementor_schema.z.strictObject({
		unit: _elementor_schema.z.literal("auto"),
		size: _elementor_schema.z.literal("")
	})).or(_elementor_schema.z.strictObject({
		unit: _elementor_schema.z.literal("custom"),
		size: _elementor_schema.z.string()
	})));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/grid-track-size.ts
	var gridTrackSizePropTypeUtil = createPropUtils("grid-track-size", _elementor_schema.z.strictObject({
		unit: _elementor_schema.z.literal("fr"),
		size: _elementor_schema.z.union([_elementor_schema.z.number(), _elementor_schema.z.literal("")])
	}).or(_elementor_schema.z.strictObject({
		unit: _elementor_schema.z.literal("custom"),
		size: _elementor_schema.z.string()
	})));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/span.ts
	var spanPropTypeUtil = createPropUtils("span", _elementor_schema.z.string().nullable());

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/string.ts
	var stringPropTypeUtil = createPropUtils("string", _elementor_schema.z.string().nullable());

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/string-array.ts
	var stringArrayPropTypeUtil = createArrayPropUtils(stringPropTypeUtil.key, stringPropTypeUtil.schema);

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/stroke.ts
	var strokePropTypeUtil = createPropUtils("stroke", _elementor_schema.z.strictObject({
		color: unknownChildrenSchema,
		width: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/url.ts
	var urlPropTypeUtil = createPropUtils("url", _elementor_schema.z.string().nullable());

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/layout-direction.ts
	var layoutDirectionPropTypeUtil = createPropUtils("layout-direction", _elementor_schema.z.object({
		row: _elementor_schema.z.any(),
		column: _elementor_schema.z.any()
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/link.ts
	var linkPropTypeUtil = createPropUtils("link", _elementor_schema.z.strictObject({
		destination: unknownChildrenSchema,
		isTargetBlank: unknownChildrenSchema,
		tag: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/email.ts
	var emailPropTypeUtil = createPropUtils("email", _elementor_schema.z.strictObject({
		to: unknownChildrenSchema,
		subject: unknownChildrenSchema,
		message: unknownChildrenSchema,
		from: unknownChildrenSchema,
		"meta-data": unknownChildrenSchema,
		"send-as": unknownChildrenSchema,
		"from-name": unknownChildrenSchema,
		"reply-to": unknownChildrenSchema,
		cc: unknownChildrenSchema,
		bcc: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/emails.ts
	var emailsPropTypeUtil = createPropUtils("emails", _elementor_schema.z.strictObject({
		to: unknownChildrenSchema,
		subject: unknownChildrenSchema,
		message: unknownChildrenSchema,
		from: unknownChildrenSchema,
		"meta-data": unknownChildrenSchema,
		"send-as": unknownChildrenSchema,
		"from-name": unknownChildrenSchema,
		"reply-to": unknownChildrenSchema,
		cc: unknownChildrenSchema,
		bcc: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/key-value.ts
	var keyValuePropTypeUtil = createPropUtils("key-value", _elementor_schema.z.strictObject({
		key: unknownChildrenSchema,
		value: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/selection-size.ts
	var selectionSizePropTypeUtil = createPropUtils("selection-size", _elementor_schema.z.strictObject({
		selection: _elementor_schema.z.union([keyValuePropTypeUtil.schema, stringPropTypeUtil.schema]),
		size: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/background-prop-types/background.ts
	var backgroundPropTypeUtil = createPropUtils("background", _elementor_schema.z.strictObject({
		color: unknownChildrenSchema,
		clip: unknownChildrenSchema,
		"background-overlay": unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/background-prop-types/background-color-overlay.ts
	var backgroundColorOverlayPropTypeUtil = createPropUtils("background-color-overlay", unknownChildrenSchema);

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/background-prop-types/background-gradient-overlay.ts
	var backgroundGradientOverlayPropTypeUtil = createPropUtils("background-gradient-overlay", unknownChildrenSchema);

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/background-prop-types/background-image-overlay.ts
	var backgroundImageOverlayPropTypeUtil = createPropUtils("background-image-overlay", unknownChildrenSchema);

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/background-prop-types/background-overlay.ts
	var backgroundOverlayItem = backgroundColorOverlayPropTypeUtil.schema.or(backgroundGradientOverlayPropTypeUtil.schema).or(backgroundImageOverlayPropTypeUtil.schema);
	var backgroundOverlayPropTypeUtil = createPropUtils("background-overlay", _elementor_schema.z.array(backgroundOverlayItem));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/background-prop-types/background-image-position-offset.ts
	var backgroundImagePositionOffsetPropTypeUtil = createPropUtils("background-image-position-offset", unknownChildrenSchema);

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/background-prop-types/background-image-size-scale.ts
	var backgroundImageSizeScalePropTypeUtil = createPropUtils("background-image-size-scale", unknownChildrenSchema);

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/boolean.ts
	var booleanPropTypeUtil = createPropUtils("boolean", _elementor_schema.z.boolean().nullable());

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/color-stop.ts
	var colorStopPropTypeUtil = createPropUtils("color-stop", _elementor_schema.z.strictObject({
		color: unknownChildrenSchema,
		offset: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/gradient-color-stop.ts
	var gradientColorStopPropTypeUtil = createPropUtils("gradient-color-stop", _elementor_schema.z.array(colorStopPropTypeUtil.schema));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/number-range.ts
	var numberRangePropTypeUtil = createPropUtils("number-range", _elementor_schema.z.strictObject({
		min: unknownChildrenSchema,
		max: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/date-time.ts
	var DateTimePropTypeUtil = createPropUtils("date-time", _elementor_schema.z.strictObject({
		date: unknownChildrenSchema,
		time: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/position.ts
	var positionPropTypeUtil = createPropUtils("object-position", _elementor_schema.z.strictObject({
		x: unknownChildrenSchema,
		y: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/query.ts
	var queryPropTypeUtil = createPropUtils("query", _elementor_schema.z.strictObject({
		id: unknownChildrenSchema,
		label: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/query-filter.ts
	var queryFilterPropTypeUtil = createPropUtils("query-filter", _elementor_schema.z.strictObject({
		key: unknownChildrenSchema,
		values: unknownChildrenSchema,
		taxonomies: unknownChildrenSchema
	}));
	var queryFilterArrayPropTypeUtil = createArrayPropUtils(queryFilterPropTypeUtil.key, queryFilterPropTypeUtil.schema);

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/html.ts
	var htmlPropTypeUtil = createPropUtils("html", _elementor_schema.z.string().nullable());

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/html-v2.ts
	var childElementSchema = _elementor_schema.z.lazy(() => _elementor_schema.z.object({
		id: _elementor_schema.z.string(),
		type: _elementor_schema.z.string(),
		content: _elementor_schema.z.string().optional(),
		children: _elementor_schema.z.array(childElementSchema).optional()
	}));
	var htmlV2ValueSchema = _elementor_schema.z.object({
		content: _elementor_schema.z.string().nullable(),
		children: _elementor_schema.z.array(childElementSchema)
	});
	var htmlV2PropTypeUtil = createPropUtils("html-v2", htmlV2ValueSchema);

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/html-v3.ts
	var htmlV3ValueSchema = _elementor_schema.z.object({
		content: stringPropTypeUtil.schema.nullable(),
		children: _elementor_schema.z.array(_elementor_schema.z.unknown())
	});
	var htmlV3PropTypeUtil = createPropUtils("html-v3", htmlV3ValueSchema);

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/escaped-html.ts
	var escapedHtmlPropTypeUtil = createPropUtils("escaped-html", _elementor_schema.z.string().nullable());

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/filter-prop-types/drop-shadow-filter.ts
	var dropShadowFilterPropTypeUtil = createPropUtils("drop-shadow", _elementor_schema.z.object({
		xAxis: unknownChildrenSchema,
		yAxis: unknownChildrenSchema,
		blur: unknownChildrenSchema,
		color: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/filter-prop-types/filter-functions/blur-filter.ts
	var blurFilterPropTypeUtil = createPropUtils("blur", _elementor_schema.z.strictObject({ size: unknownChildrenSchema }));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/filter-prop-types/filter-functions/color-tone-filter.ts
	var colorToneFilterPropTypeUtil = createPropUtils("color-tone", _elementor_schema.z.strictObject({ size: unknownChildrenSchema }));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/filter-prop-types/filter-functions/hue-rotate-filter.ts
	var hueRotateFilterPropTypeUtil = createPropUtils("hue-rotate", _elementor_schema.z.strictObject({ size: unknownChildrenSchema }));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/filter-prop-types/filter-functions/intensity-filter.ts
	var intensityFilterPropTypeUtil = createPropUtils("intensity", _elementor_schema.z.strictObject({ size: unknownChildrenSchema }));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/filter-prop-types/filter.ts
	var cssFilterFunctionPropUtil = createPropUtils("css-filter-func", _elementor_schema.z.object({
		func: stringPropTypeUtil.schema,
		args: _elementor_schema.z.union([
			blurFilterPropTypeUtil.schema,
			intensityFilterPropTypeUtil.schema,
			colorToneFilterPropTypeUtil.schema,
			hueRotateFilterPropTypeUtil.schema,
			dropShadowFilterPropTypeUtil.schema
		])
	}));
	var filterPropTypeUtil = createPropUtils("filter", _elementor_schema.z.array(cssFilterFunctionPropUtil.schema));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/transform-prop-types/transform.ts
	var transformPropTypeUtil = createPropUtils("transform", _elementor_schema.z.strictObject({
		"transform-functions": unknownChildrenSchema,
		"transform-origin": unknownChildrenSchema,
		perspective: unknownChildrenSchema,
		"perspective-origin": unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/transform-prop-types/types.ts
	var TransformFunctionKeys = {
		move: "transform-move",
		scale: "transform-scale",
		rotate: "transform-rotate",
		skew: "transform-skew"
	};

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/transform-prop-types/transform-functions/move-transform.ts
	var moveTransformPropTypeUtil = createPropUtils(TransformFunctionKeys.move, _elementor_schema.z.strictObject({
		x: unknownChildrenSchema,
		y: unknownChildrenSchema,
		z: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/transform-prop-types/transform-functions/rotate-transform.ts
	var rotateTransformPropTypeUtil = createPropUtils(TransformFunctionKeys.rotate, _elementor_schema.z.strictObject({
		x: unknownChildrenSchema,
		y: unknownChildrenSchema,
		z: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/transform-prop-types/transform-functions/scale-transform.ts
	var scaleTransformPropTypeUtil = createPropUtils(TransformFunctionKeys.scale, _elementor_schema.z.strictObject({
		x: numberPropTypeUtil.schema.nullable(),
		y: numberPropTypeUtil.schema.nullable(),
		z: numberPropTypeUtil.schema.nullable()
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/transform-prop-types/transform-functions/skew-transform.ts
	var skewTransformPropTypeUtil = createPropUtils(TransformFunctionKeys.skew, _elementor_schema.z.strictObject({
		x: unknownChildrenSchema,
		y: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/transform-prop-types/transform-functions.ts
	var filterTypes = moveTransformPropTypeUtil.schema.or(scaleTransformPropTypeUtil.schema).or(rotateTransformPropTypeUtil.schema).or(skewTransformPropTypeUtil.schema);
	var transformFunctionsPropTypeUtil = createPropUtils("transform-functions", _elementor_schema.z.array(filterTypes));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/transform-prop-types/transform-origin.ts
	var transformOriginPropTypeUtil = createPropUtils("transform-origin", _elementor_schema.z.strictObject({
		x: unknownChildrenSchema,
		y: unknownChildrenSchema,
		z: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/transform-prop-types/perspective-origin.ts
	var perspectiveOriginPropTypeUtil = createPropUtils("perspective-origin", _elementor_schema.z.strictObject({
		x: unknownChildrenSchema,
		y: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/filter-prop-types/backdrop-filter.ts
	var backdropFilterPropTypeUtil = createPropUtils("backdrop-filter", _elementor_schema.z.array(cssFilterFunctionPropUtil.schema));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/date-range.ts
	var dateRangePropTypeUtil = createPropUtils("date-range", _elementor_schema.z.strictObject({
		min: unknownChildrenSchema,
		max: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/date-string.ts
	var dateStringPropTypeUtil = createPropUtils("date-string", _elementor_schema.z.string());

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/time-range.ts
	var timeRangePropTypeUtil = createPropUtils("time-range", _elementor_schema.z.strictObject({
		min: unknownChildrenSchema,
		max: unknownChildrenSchema
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/prop-types/time-string.ts
	var timeStringPropTypeUtil = createPropUtils("time-string", _elementor_schema.z.string());

//#endregion
//#region packages/packages/libs/editor-props/src/utils/adjust-llm-prop-value-schema.ts
	var ensureNotNull = (v, fallback) => v === null ? fallback : v;
	var defaultOptions = { transformers: {} };
	var adjustLlmPropValueSchema = (value, { transformers = {}, forceKey = void 0 } = defaultOptions) => {
		const clone = structuredClone(value);
		if (typeof clone !== "object" || clone === null) return null;
		if (Array.isArray(clone)) return clone.map((item) => adjustLlmPropValueSchema(item, {
			forceKey,
			transformers
		}));
		const transformablePropValue = clone;
		if ("$intention" in transformablePropValue) delete transformablePropValue.$intention;
		if (forceKey) transformablePropValue.$$type = forceKey;
		switch (transformablePropValue.$$type) {
			case "size": {
				const { value: rawSizePropValue } = transformablePropValue;
				return {
					$$type: "size",
					value: {
						unit: typeof rawSizePropValue.unit === "string" ? rawSizePropValue.unit : ensureNotNull(stringPropTypeUtil.extract(rawSizePropValue.unit), "px"),
						size: typeof rawSizePropValue.size === "string" || typeof rawSizePropValue.size === "number" ? rawSizePropValue.size : ensureNotNull(stringPropTypeUtil.extract(rawSizePropValue.size), numberPropTypeUtil.extract(rawSizePropValue.size))
					}
				};
			}
			case "html-v3": {
				const { value: rawHtmlV3PropValue } = transformablePropValue;
				return {
					$$type: "html-v3",
					value: {
						...rawHtmlV3PropValue,
						children: Array.isArray(rawHtmlV3PropValue.children) ? rawHtmlV3PropValue.children : []
					}
				};
			}
			default:
				const transformer = transformers?.[transformablePropValue.$$type];
				if (transformer) return transformer(transformablePropValue.value);
		}
		if (typeof transformablePropValue.value === "object") if (Array.isArray(transformablePropValue.value)) transformablePropValue.value = adjustLlmPropValueSchema(transformablePropValue.value, { transformers });
		else {
			const { value: objectValue } = transformablePropValue;
			const clonedObject = clone;
			clonedObject.value = {};
			Object.entries(objectValue).forEach(([key, childProp]) => {
				clonedObject.value[key] = adjustLlmPropValueSchema(childProp, { transformers });
			});
		}
		return clone;
	};

//#endregion
//#region packages/packages/libs/editor-props/src/utils/llm-schema-to-props.ts
	function jsonSchemaToPropType(schema, key = schema.key) {
		const meta = {};
		if (schema.description) meta.description = schema.description;
		if (schema.anyOf && Array.isArray(schema.anyOf)) return convertJsonSchemaToUnionPropType(schema, meta);
		if (schema.type === "object" && schema.properties) return convertJsonSchemaToObjectPropType(schema, meta, key);
		if (schema.type === "array" && schema.items) return convertJsonSchemaToArrayPropType(schema, meta, key);
		return convertJsonSchemaToPlainPropType(schema, meta, key);
	}
	function convertJsonSchemaToPlainPropType(schema, meta, key = schema.key) {
		const settings = {};
		let propKey = key || "string";
		if (schema.type === "number") propKey = "number";
		else if (schema.type === "boolean") propKey = "boolean";
		else if (schema.type === "string") propKey = "string";
		if (Array.isArray(schema.enum)) settings.enum = schema.enum;
		return {
			kind: "plain",
			key: propKey,
			settings,
			meta
		};
	}
	function convertJsonSchemaToUnionPropType(schema, meta) {
		const propTypes = {};
		if (!schema.anyOf || !Array.isArray(schema.anyOf)) throw new Error("Invalid anyOf schema");
		for (const variantSchema of schema.anyOf) if (variantSchema.type === "object" && variantSchema.properties && variantSchema.properties.$$type && variantSchema.properties.value) {
			const typeProperty = variantSchema.properties.$$type;
			let typeKey;
			if (typeProperty.enum && Array.isArray(typeProperty.enum) && typeProperty.enum.length > 0) typeKey = typeProperty.enum[0];
			else continue;
			propTypes[typeKey] = convertJsonSchemaToPropType(variantSchema.properties.value);
		}
		return {
			kind: "union",
			prop_types: propTypes,
			settings: {},
			meta
		};
	}
	function convertJsonSchemaToObjectPropType(schema, meta, key = schema.key) {
		const shape = {};
		if (!schema.properties) return {
			kind: "object",
			key,
			shape: {},
			settings: {},
			meta
		};
		const requiredFields = Array.isArray(schema.required) ? schema.required : [];
		for (const [propKey, propSchema] of Object.entries(schema.properties)) {
			const subPropType = convertJsonSchemaToPropType(propSchema, key);
			if (requiredFields.includes(propKey)) subPropType.settings = {
				...subPropType.settings,
				required: true
			};
			shape[propKey] = subPropType;
		}
		return {
			kind: "object",
			key: key || "object",
			shape,
			settings: {},
			meta
		};
	}
	function convertJsonSchemaToArrayPropType(schema, meta, key = schema.key) {
		if (!schema.items) throw new Error("Array schema must have items property");
		const itemPropType = convertJsonSchemaToPropType(schema.items);
		return {
			kind: "array",
			key: key || "array",
			item_prop_type: itemPropType,
			settings: {},
			meta
		};
	}
	function convertJsonSchemaToPropType(schema, key) {
		return jsonSchemaToPropType(schema, key);
	}

//#endregion
//#region packages/packages/libs/editor-props/src/utils/props-to-llm-schema.ts
	var DYNAMIC_PROP_TYPE_KEY = "dynamic";
	var OVERRIDABLE_PROP_TYPE_KEY = "overridable";
	var dynamicTagNamesResolver = null;
	function setDynamicTagNamesResolver(resolver) {
		dynamicTagNamesResolver = resolver;
	}
	function propTypeToJsonSchema(propType, suppressDynamic = false) {
		const description = propType.meta?.description;
		const schema = {};
		if (description) schema.description = description;
		if (propType.initial_value !== null && propType.initial_value !== void 0) schema.examples = [propType.initial_value];
		switch (propType.kind) {
			case "union": return convertUnionPropType(propType, schema, suppressDynamic);
			case "object": return convertObjectPropType(propType, schema, suppressDynamic);
			case "array": return convertArrayPropType(propType, schema, suppressDynamic);
			default: return convertPlainPropType(propType, schema);
		}
	}
	function convertPlainPropType(propType, baseSchema) {
		const schema = { ...baseSchema };
		if (!Object.hasOwn(propType, "kind")) throw new Error(`PropType kind is undefined for propType with key: ${propType.key ?? "[unknown key]"}`);
		const enumValues = propType.settings?.enum || [];
		switch (propType.kind) {
			case "string":
			case "number":
			case "boolean": return {
				...schema,
				type: "object",
				properties: {
					$$type: {
						type: "string",
						const: propType.key ?? propType.kind
					},
					value: {
						type: propType.kind,
						...enumValues.length > 0 ? { enum: enumValues } : {}
					}
				},
				required: ["$$type", "value"]
			};
			case "unknown": return {};
			default: return {
				...schema,
				type: "object",
				$$type: propType.kind,
				value: { type: propType.kind }
			};
		}
	}
	function convertUnionPropType(propType, baseSchema, suppressDynamic) {
		const schema = structuredClone(baseSchema);
		const propTypes = propType.prop_types || {};
		const offersDynamic = !suppressDynamic && Boolean(propTypes[DYNAMIC_PROP_TYPE_KEY]);
		const suppressNestedDynamic = suppressDynamic || offersDynamic;
		const schemas = [];
		for (const [typeKey, subPropType] of Object.entries(propTypes)) {
			if (typeKey === OVERRIDABLE_PROP_TYPE_KEY) continue;
			if (typeKey === DYNAMIC_PROP_TYPE_KEY) {
				if (offersDynamic) schemas.push(convertDynamicPropType(subPropType));
				continue;
			}
			schemas.push(propTypeToJsonSchema(subPropType, suppressNestedDynamic));
		}
		if (schemas.length > 0) schema.anyOf = schemas;
		const propTypeDescription = propType.meta?.description;
		if (propTypeDescription) schema.description = propTypeDescription;
		return schema;
	}
	function convertDynamicPropType(propType) {
		const categories = Array.isArray(propType.settings?.categories) ? propType.settings.categories : [];
		const allowedTagNames = dynamicTagNamesResolver?.(categories) ?? [];
		return {
			type: "object",
			description: `Bind THIS value to a dynamic tag instead of a static value (this may be a nested field, e.g. an image's "src"). Look up the chosen tag in the "elementor://dynamic-tags" resource and populate "settings" exactly as its schema requires.`,
			properties: {
				$$type: {
					type: "string",
					const: DYNAMIC_PROP_TYPE_KEY
				},
				value: {
					type: "object",
					properties: {
						name: {
							type: "string",
							description: "Dynamic tag name from \"elementor://dynamic-tags\".",
							...allowedTagNames.length ? { enum: allowedTagNames } : {}
						},
						settings: {
							type: "object",
							description: "Tag settings matching the chosen tag's schema in the resource."
						}
					},
					required: ["name"]
				}
			},
			required: ["$$type", "value"]
		};
	}
	function convertObjectPropType(propType, baseSchema, suppressDynamic) {
		const schema = structuredClone(baseSchema);
		schema.type = "object";
		const internalStructure = { properties: {
			$$type: {
				type: "string",
				const: propType.key
			},
			value: {
				type: "object",
				properties: {},
				additionalProperties: false
			}
		} };
		const required = ["$$type", "value"];
		const valueRequired = [];
		const shape = propType.shape || {};
		for (const [key, subPropType] of Object.entries(shape)) {
			const propSchema = propTypeToJsonSchema(subPropType, suppressDynamic);
			if (subPropType.settings?.required === true) valueRequired.push(key);
			if (internalStructure.properties.value.properties) internalStructure.properties.value.properties[key] = propSchema;
		}
		schema.required = required;
		if (valueRequired.length > 0) internalStructure.properties.value.required = valueRequired;
		return {
			...schema,
			...internalStructure
		};
	}
	function convertArrayPropType(propType, baseSchema, suppressDynamic) {
		const schema = structuredClone(baseSchema);
		schema.type = "object";
		let items;
		const itemPropType = propType.item_prop_type;
		if (itemPropType) items = propTypeToJsonSchema(itemPropType, suppressDynamic);
		schema.properties = {
			$$type: {
				type: "string",
				const: propType.key
			},
			value: {
				type: "array",
				...items ? { items } : {}
			}
		};
		return schema;
	}
	var nonConfigurablePropKeys = [
		"_cssid",
		"classes",
		"attributes"
	];
	function isPropKeyConfigurable(propKey, propType) {
		if (!nonConfigurablePropKeys.includes(propKey)) return true;
		return !!(!Array.isArray(propType?.meta) && propType?.meta?.llm_configurable);
	}
	function configurableKeys(schema) {
		return Object.keys(schema).filter((key) => isPropKeyConfigurable(key, schema[key]));
	}
	function enrichWithIntention(jsonSchema, text = "Describe the desired outcome") {
		const result = structuredClone(jsonSchema);
		if (!result.properties) return jsonSchema;
		result.properties.$intention = {
			type: "string",
			description: text
		};
		result.required = [...result.required || [], "$intention"];
		return result;
	}
	function removeIntention(jsonSchema) {
		const result = structuredClone(jsonSchema);
		if (!result.properties) return jsonSchema;
		delete result.properties.$intention;
		if (result.required) result.required = result.required.filter((req) => req !== "$intention");
		return result;
	}

//#endregion
//#region node_modules/jsonschema/lib/helpers.js
	var require_helpers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var ValidationError = exports.ValidationError = function ValidationError(message, instance, schema, path, name, argument) {
			if (Array.isArray(path)) {
				this.path = path;
				this.property = path.reduce(function(sum, item) {
					return sum + makeSuffix(item);
				}, "instance");
			} else if (path !== void 0) this.property = path;
			if (message) this.message = message;
			if (schema) {
				var id = schema.$id || schema.id;
				this.schema = id || schema;
			}
			if (instance !== void 0) this.instance = instance;
			this.name = name;
			this.argument = argument;
			this.stack = this.toString();
		};
		ValidationError.prototype.toString = function toString() {
			return this.property + " " + this.message;
		};
		var ValidatorResult = exports.ValidatorResult = function ValidatorResult(instance, schema, options, ctx) {
			this.instance = instance;
			this.schema = schema;
			this.options = options;
			this.path = ctx.path;
			this.propertyPath = ctx.propertyPath;
			this.errors = [];
			this.throwError = options && options.throwError;
			this.throwFirst = options && options.throwFirst;
			this.throwAll = options && options.throwAll;
			this.disableFormat = options && options.disableFormat === true;
		};
		ValidatorResult.prototype.addError = function addError(detail) {
			var err;
			if (typeof detail == "string") err = new ValidationError(detail, this.instance, this.schema, this.path);
			else {
				if (!detail) throw new Error("Missing error detail");
				if (!detail.message) throw new Error("Missing error message");
				if (!detail.name) throw new Error("Missing validator type");
				err = new ValidationError(detail.message, this.instance, this.schema, this.path, detail.name, detail.argument);
			}
			this.errors.push(err);
			if (this.throwFirst) throw new ValidatorResultError(this);
			else if (this.throwError) throw err;
			return err;
		};
		ValidatorResult.prototype.importErrors = function importErrors(res) {
			if (typeof res == "string" || res && res.validatorType) this.addError(res);
			else if (res && res.errors) this.errors = this.errors.concat(res.errors);
		};
		function stringizer(v, i) {
			return i + ": " + v.toString() + "\n";
		}
		ValidatorResult.prototype.toString = function toString(res) {
			return this.errors.map(stringizer).join("");
		};
		Object.defineProperty(ValidatorResult.prototype, "valid", { get: function() {
			return !this.errors.length;
		} });
		module.exports.ValidatorResultError = ValidatorResultError;
		function ValidatorResultError(result) {
			if (typeof Error.captureStackTrace === "function") Error.captureStackTrace(this, ValidatorResultError);
			this.instance = result.instance;
			this.schema = result.schema;
			this.options = result.options;
			this.errors = result.errors;
		}
		ValidatorResultError.prototype = /* @__PURE__ */ new Error();
		ValidatorResultError.prototype.constructor = ValidatorResultError;
		ValidatorResultError.prototype.name = "Validation Error";
		/**
		* Describes a problem with a Schema which prevents validation of an instance
		* @name SchemaError
		* @constructor
		*/
		var SchemaError = exports.SchemaError = function SchemaError(msg, schema) {
			this.message = msg;
			this.schema = schema;
			Error.call(this, msg);
			if (typeof Error.captureStackTrace === "function") Error.captureStackTrace(this, SchemaError);
		};
		SchemaError.prototype = Object.create(Error.prototype, {
			constructor: {
				value: SchemaError,
				enumerable: false
			},
			name: {
				value: "SchemaError",
				enumerable: false
			}
		});
		var SchemaContext = exports.SchemaContext = function SchemaContext(schema, options, path, base, schemas) {
			this.schema = schema;
			this.options = options;
			if (Array.isArray(path)) {
				this.path = path;
				this.propertyPath = path.reduce(function(sum, item) {
					return sum + makeSuffix(item);
				}, "instance");
			} else this.propertyPath = path;
			this.base = base;
			this.schemas = schemas;
		};
		SchemaContext.prototype.resolve = function resolve(target) {
			return (() => resolveUrl(this.base, target))();
		};
		SchemaContext.prototype.makeChild = function makeChild(schema, propertyName) {
			var path = propertyName === void 0 ? this.path : this.path.concat([propertyName]);
			var id = schema.$id || schema.id;
			let base = (() => resolveUrl(this.base, id || ""))();
			var ctx = new SchemaContext(schema, this.options, path, base, Object.create(this.schemas));
			if (id && !ctx.schemas[base]) ctx.schemas[base] = schema;
			return ctx;
		};
		var FORMAT_REGEXPS = exports.FORMAT_REGEXPS = {
			"date-time": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
			"date": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
			"time": /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
			"duration": /P(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S)|\d+(D|M(\d+D)?|Y(\d+M(\d+D)?)?)(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S))?|\d+W)/i,
			"email": /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
			"idn-email": /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u,
			"ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
			"ipv6": /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
			"uri": /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
			"uri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/,
			"iri": /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
			"iri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~-\u{10FFFF}]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~-\u{10FFFF}])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/u,
			"uuid": /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
			"uri-template": /(%[0-9a-f]{2}|[!#$&(-;=?@\[\]_a-z~]|\{[!#&+,./;=?@|]?(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?(,(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?)*\})*/iu,
			"json-pointer": /^(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*$/iu,
			"relative-json-pointer": /^\d+(#|(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*)$/iu,
			"hostname": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
			"host-name": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
			"utc-millisec": function(input) {
				return typeof input === "string" && parseFloat(input) === parseInt(input, 10) && !isNaN(input);
			},
			"regex": function(input) {
				var result = true;
				try {
					new RegExp(input);
				} catch (e) {
					result = false;
				}
				return result;
			},
			"style": /[\r\n\t ]*[^\r\n\t ][^:]*:[\r\n\t ]*[^\r\n\t ;]*[\r\n\t ]*;?/,
			"color": /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
			"phone": /^\+(?:[0-9] ?){6,14}[0-9]$/,
			"alpha": /^[a-zA-Z]+$/,
			"alphanumeric": /^[a-zA-Z0-9]+$/
		};
		FORMAT_REGEXPS.regexp = FORMAT_REGEXPS.regex;
		FORMAT_REGEXPS.pattern = FORMAT_REGEXPS.regex;
		FORMAT_REGEXPS.ipv4 = FORMAT_REGEXPS["ip-address"];
		exports.isFormat = function isFormat(input, format, validator) {
			if (typeof input === "string" && FORMAT_REGEXPS[format] !== void 0) {
				if (FORMAT_REGEXPS[format] instanceof RegExp) return FORMAT_REGEXPS[format].test(input);
				if (typeof FORMAT_REGEXPS[format] === "function") return FORMAT_REGEXPS[format](input);
			} else if (validator && validator.customFormats && typeof validator.customFormats[format] === "function") return validator.customFormats[format](input);
			return true;
		};
		var makeSuffix = exports.makeSuffix = function makeSuffix(key) {
			key = key.toString();
			if (!key.match(/[.\s\[\]]/) && !key.match(/^[\d]/)) return "." + key;
			if (key.match(/^\d+$/)) return "[" + key + "]";
			return "[" + JSON.stringify(key) + "]";
		};
		exports.deepCompareStrict = function deepCompareStrict(a, b) {
			if (typeof a !== typeof b) return false;
			if (Array.isArray(a)) {
				if (!Array.isArray(b)) return false;
				if (a.length !== b.length) return false;
				return a.every(function(v, i) {
					return deepCompareStrict(a[i], b[i]);
				});
			}
			if (typeof a === "object") {
				if (!a || !b) return a === b;
				var aKeys = Object.keys(a);
				var bKeys = Object.keys(b);
				if (aKeys.length !== bKeys.length) return false;
				return aKeys.every(function(v) {
					return deepCompareStrict(a[v], b[v]);
				});
			}
			return a === b;
		};
		function deepMerger(target, dst, e, i) {
			if (typeof e === "object") dst[i] = deepMerge(target[i], e);
			else if (target.indexOf(e) === -1) dst.push(e);
		}
		function copyist(src, dst, key) {
			dst[key] = src[key];
		}
		function copyistWithDeepMerge(target, src, dst, key) {
			if (typeof src[key] !== "object" || !src[key]) dst[key] = src[key];
			else if (!target[key]) dst[key] = src[key];
			else dst[key] = deepMerge(target[key], src[key]);
		}
		function deepMerge(target, src) {
			var array = Array.isArray(src);
			var dst = array && [] || {};
			if (array) {
				target = target || [];
				dst = dst.concat(target);
				src.forEach(deepMerger.bind(null, target, dst));
			} else {
				if (target && typeof target === "object") Object.keys(target).forEach(copyist.bind(null, target, dst));
				Object.keys(src).forEach(copyistWithDeepMerge.bind(null, target, src, dst));
			}
			return dst;
		}
		module.exports.deepMerge = deepMerge;
		/**
		* Validates instance against the provided schema
		* Implements URI+JSON Pointer encoding, e.g. "%7e"="~0"=>"~", "~1"="%2f"=>"/"
		* @param o
		* @param s The path to walk o along
		* @return any
		*/
		exports.objectGetPath = function objectGetPath(o, s) {
			var parts = s.split("/").slice(1);
			var k;
			while (typeof (k = parts.shift()) == "string") {
				var n = decodeURIComponent(k.replace(/~0/, "~").replace(/~1/g, "/"));
				if (!(n in o)) return;
				o = o[n];
			}
			return o;
		};
		function pathEncoder(v) {
			return "/" + encodeURIComponent(v).replace(/~/g, "%7E");
		}
		/**
		* Accept an Array of property names and return a JSON Pointer URI fragment
		* @param Array a
		* @return {String}
		*/
		exports.encodePath = function encodePointer(a) {
			return a.map(pathEncoder).join("");
		};
		/**
		* Calculate the number of decimal places a number uses
		* We need this to get correct results out of multipleOf and divisibleBy
		* when either figure is has decimal places, due to IEEE-754 float issues.
		* @param number
		* @returns {number}
		*/
		exports.getDecimalPlaces = function getDecimalPlaces(number) {
			var decimalPlaces = 0;
			if (isNaN(number)) return decimalPlaces;
			if (typeof number !== "number") number = Number(number);
			var parts = number.toString().split("e");
			if (parts.length === 2) if (parts[1][0] !== "-") return decimalPlaces;
			else decimalPlaces = Number(parts[1].slice(1));
			var decimalParts = parts[0].split(".");
			if (decimalParts.length === 2) decimalPlaces += decimalParts[1].length;
			return decimalPlaces;
		};
		exports.isSchema = function isSchema(val) {
			return typeof val === "object" && val || typeof val === "boolean";
		};
		/**
		* Resolve target URL from a base and relative URL.
		* Similar to Node's URL Lib's legacy resolve function.
		* Code from example in deprecation note in said library.
		* @param string
		* @param string
		* @returns {string}
		*/
		var resolveUrl = exports.resolveUrl = function resolveUrl(from, to) {
			const resolvedUrl = new URL(to, new URL(from, "resolve://"));
			if (resolvedUrl.protocol === "resolve:") {
				const { pathname, search, hash } = resolvedUrl;
				return pathname + search + hash;
			}
			return resolvedUrl.toString();
		};
	}));

//#endregion
//#region node_modules/jsonschema/lib/attribute.js
	var require_attribute = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var helpers = require_helpers();
		/** @type ValidatorResult */
		var ValidatorResult = helpers.ValidatorResult;
		/** @type SchemaError */
		var SchemaError = helpers.SchemaError;
		var attribute = {};
		attribute.ignoreProperties = {
			"id": true,
			"default": true,
			"description": true,
			"title": true,
			"additionalItems": true,
			"then": true,
			"else": true,
			"$schema": true,
			"$ref": true,
			"extends": true
		};
		/**
		* @name validators
		*/
		var validators = attribute.validators = {};
		/**
		* Validates whether the instance if of a certain type
		* @param instance
		* @param schema
		* @param options
		* @param ctx
		* @return {ValidatorResult|null}
		*/
		validators.type = function validateType(instance, schema, options, ctx) {
			if (instance === void 0) return null;
			var result = new ValidatorResult(instance, schema, options, ctx);
			var types = Array.isArray(schema.type) ? schema.type : [schema.type];
			if (!types.some(this.testType.bind(this, instance, schema, options, ctx))) {
				var list = types.map(function(v) {
					if (!v) return;
					var id = v.$id || v.id;
					return id ? "<" + id + ">" : v + "";
				});
				result.addError({
					name: "type",
					argument: list,
					message: "is not of a type(s) " + list
				});
			}
			return result;
		};
		function testSchemaNoThrow(instance, options, ctx, callback, schema) {
			var throwError = options.throwError;
			var throwAll = options.throwAll;
			options.throwError = false;
			options.throwAll = false;
			var res = this.validateSchema(instance, schema, options, ctx);
			options.throwError = throwError;
			options.throwAll = throwAll;
			if (!res.valid && callback instanceof Function) callback(res);
			return res.valid;
		}
		/**
		* Validates whether the instance matches some of the given schemas
		* @param instance
		* @param schema
		* @param options
		* @param ctx
		* @return {ValidatorResult|null}
		*/
		validators.anyOf = function validateAnyOf(instance, schema, options, ctx) {
			if (instance === void 0) return null;
			var result = new ValidatorResult(instance, schema, options, ctx);
			var inner = new ValidatorResult(instance, schema, options, ctx);
			if (!Array.isArray(schema.anyOf)) throw new SchemaError("anyOf must be an array");
			if (!schema.anyOf.some(testSchemaNoThrow.bind(this, instance, options, ctx, function(res) {
				inner.importErrors(res);
			}))) {
				var list = schema.anyOf.map(function(v, i) {
					var id = v.$id || v.id;
					if (id) return "<" + id + ">";
					return v.title && JSON.stringify(v.title) || v["$ref"] && "<" + v["$ref"] + ">" || "[subschema " + i + "]";
				});
				if (options.nestedErrors) result.importErrors(inner);
				result.addError({
					name: "anyOf",
					argument: list,
					message: "is not any of " + list.join(",")
				});
			}
			return result;
		};
		/**
		* Validates whether the instance matches every given schema
		* @param instance
		* @param schema
		* @param options
		* @param ctx
		* @return {String|null}
		*/
		validators.allOf = function validateAllOf(instance, schema, options, ctx) {
			if (instance === void 0) return null;
			if (!Array.isArray(schema.allOf)) throw new SchemaError("allOf must be an array");
			var result = new ValidatorResult(instance, schema, options, ctx);
			var self = this;
			schema.allOf.forEach(function(v, i) {
				var valid = self.validateSchema(instance, v, options, ctx);
				if (!valid.valid) {
					var msg = v.$id || v.id || v.title && JSON.stringify(v.title) || v["$ref"] && "<" + v["$ref"] + ">" || "[subschema " + i + "]";
					result.addError({
						name: "allOf",
						argument: {
							id: msg,
							length: valid.errors.length,
							valid
						},
						message: "does not match allOf schema " + msg + " with " + valid.errors.length + " error[s]:"
					});
					result.importErrors(valid);
				}
			});
			return result;
		};
		/**
		* Validates whether the instance matches exactly one of the given schemas
		* @param instance
		* @param schema
		* @param options
		* @param ctx
		* @return {String|null}
		*/
		validators.oneOf = function validateOneOf(instance, schema, options, ctx) {
			if (instance === void 0) return null;
			if (!Array.isArray(schema.oneOf)) throw new SchemaError("oneOf must be an array");
			var result = new ValidatorResult(instance, schema, options, ctx);
			var inner = new ValidatorResult(instance, schema, options, ctx);
			var count = schema.oneOf.filter(testSchemaNoThrow.bind(this, instance, options, ctx, function(res) {
				inner.importErrors(res);
			})).length;
			var list = schema.oneOf.map(function(v, i) {
				return v.$id || v.id || v.title && JSON.stringify(v.title) || v["$ref"] && "<" + v["$ref"] + ">" || "[subschema " + i + "]";
			});
			if (count !== 1) {
				if (options.nestedErrors) result.importErrors(inner);
				result.addError({
					name: "oneOf",
					argument: list,
					message: "is not exactly one from " + list.join(",")
				});
			}
			return result;
		};
		/**
		* Validates "then" or "else" depending on the result of validating "if"
		* @param instance
		* @param schema
		* @param options
		* @param ctx
		* @return {String|null}
		*/
		validators.if = function validateIf(instance, schema, options, ctx) {
			if (instance === void 0) return null;
			if (!helpers.isSchema(schema.if)) throw new Error("Expected \"if\" keyword to be a schema");
			var ifValid = testSchemaNoThrow.call(this, instance, options, ctx, null, schema.if);
			var result = new ValidatorResult(instance, schema, options, ctx);
			var res;
			if (ifValid) {
				if (schema.then === void 0) return;
				if (!helpers.isSchema(schema.then)) throw new Error("Expected \"then\" keyword to be a schema");
				res = this.validateSchema(instance, schema.then, options, ctx.makeChild(schema.then));
				result.importErrors(res);
			} else {
				if (schema.else === void 0) return;
				if (!helpers.isSchema(schema.else)) throw new Error("Expected \"else\" keyword to be a schema");
				res = this.validateSchema(instance, schema.else, options, ctx.makeChild(schema.else));
				result.importErrors(res);
			}
			return result;
		};
		function getEnumerableProperty(object, key) {
			if (Object.hasOwnProperty.call(object, key)) return object[key];
			if (!(key in object)) return;
			while (object = Object.getPrototypeOf(object)) if (Object.propertyIsEnumerable.call(object, key)) return object[key];
		}
		/**
		* Validates propertyNames
		* @param instance
		* @param schema
		* @param options
		* @param ctx
		* @return {String|null|ValidatorResult}
		*/
		validators.propertyNames = function validatePropertyNames(instance, schema, options, ctx) {
			if (!this.types.object(instance)) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			var subschema = schema.propertyNames !== void 0 ? schema.propertyNames : {};
			if (!helpers.isSchema(subschema)) throw new SchemaError("Expected \"propertyNames\" to be a schema (object or boolean)");
			for (var property in instance) if (getEnumerableProperty(instance, property) !== void 0) {
				var res = this.validateSchema(property, subschema, options, ctx.makeChild(subschema));
				result.importErrors(res);
			}
			return result;
		};
		/**
		* Validates properties
		* @param instance
		* @param schema
		* @param options
		* @param ctx
		* @return {String|null|ValidatorResult}
		*/
		validators.properties = function validateProperties(instance, schema, options, ctx) {
			if (!this.types.object(instance)) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			var properties = schema.properties || {};
			for (var property in properties) {
				var subschema = properties[property];
				if (subschema === void 0) continue;
				else if (subschema === null) throw new SchemaError("Unexpected null, expected schema in \"properties\"");
				if (typeof options.preValidateProperty == "function") options.preValidateProperty(instance, property, subschema, options, ctx);
				var prop = getEnumerableProperty(instance, property);
				var res = this.validateSchema(prop, subschema, options, ctx.makeChild(subschema, property));
				if (res.instance !== result.instance[property]) result.instance[property] = res.instance;
				result.importErrors(res);
			}
			return result;
		};
		/**
		* Test a specific property within in instance against the additionalProperties schema attribute
		* This ignores properties with definitions in the properties schema attribute, but no other attributes.
		* If too many more types of property-existence tests pop up they may need their own class of tests (like `type` has)
		* @private
		* @return {boolean}
		*/
		function testAdditionalProperty(instance, schema, options, ctx, property, result) {
			if (!this.types.object(instance)) return;
			if (schema.properties && schema.properties[property] !== void 0) return;
			if (schema.additionalProperties === false) result.addError({
				name: "additionalProperties",
				argument: property,
				message: "is not allowed to have the additional property " + JSON.stringify(property)
			});
			else {
				var additionalProperties = schema.additionalProperties || {};
				if (typeof options.preValidateProperty == "function") options.preValidateProperty(instance, property, additionalProperties, options, ctx);
				var res = this.validateSchema(instance[property], additionalProperties, options, ctx.makeChild(additionalProperties, property));
				if (res.instance !== result.instance[property]) result.instance[property] = res.instance;
				result.importErrors(res);
			}
		}
		/**
		* Validates patternProperties
		* @param instance
		* @param schema
		* @param options
		* @param ctx
		* @return {String|null|ValidatorResult}
		*/
		validators.patternProperties = function validatePatternProperties(instance, schema, options, ctx) {
			if (!this.types.object(instance)) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			var patternProperties = schema.patternProperties || {};
			for (var property in instance) {
				var test = true;
				for (var pattern in patternProperties) {
					var subschema = patternProperties[pattern];
					if (subschema === void 0) continue;
					else if (subschema === null) throw new SchemaError("Unexpected null, expected schema in \"patternProperties\"");
					try {
						var regexp = new RegExp(pattern, "u");
					} catch (_e) {
						regexp = new RegExp(pattern);
					}
					if (!regexp.test(property)) continue;
					test = false;
					if (typeof options.preValidateProperty == "function") options.preValidateProperty(instance, property, subschema, options, ctx);
					var res = this.validateSchema(instance[property], subschema, options, ctx.makeChild(subschema, property));
					if (res.instance !== result.instance[property]) result.instance[property] = res.instance;
					result.importErrors(res);
				}
				if (test) testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
			}
			return result;
		};
		/**
		* Validates additionalProperties
		* @param instance
		* @param schema
		* @param options
		* @param ctx
		* @return {String|null|ValidatorResult}
		*/
		validators.additionalProperties = function validateAdditionalProperties(instance, schema, options, ctx) {
			if (!this.types.object(instance)) return;
			if (schema.patternProperties) return null;
			var result = new ValidatorResult(instance, schema, options, ctx);
			for (var property in instance) testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
			return result;
		};
		/**
		* Validates whether the instance value is at least of a certain length, when the instance value is a string.
		* @param instance
		* @param schema
		* @return {String|null}
		*/
		validators.minProperties = function validateMinProperties(instance, schema, options, ctx) {
			if (!this.types.object(instance)) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			if (!(Object.keys(instance).length >= schema.minProperties)) result.addError({
				name: "minProperties",
				argument: schema.minProperties,
				message: "does not meet minimum property length of " + schema.minProperties
			});
			return result;
		};
		/**
		* Validates whether the instance value is at most of a certain length, when the instance value is a string.
		* @param instance
		* @param schema
		* @return {String|null}
		*/
		validators.maxProperties = function validateMaxProperties(instance, schema, options, ctx) {
			if (!this.types.object(instance)) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			if (!(Object.keys(instance).length <= schema.maxProperties)) result.addError({
				name: "maxProperties",
				argument: schema.maxProperties,
				message: "does not meet maximum property length of " + schema.maxProperties
			});
			return result;
		};
		/**
		* Validates items when instance is an array
		* @param instance
		* @param schema
		* @param options
		* @param ctx
		* @return {String|null|ValidatorResult}
		*/
		validators.items = function validateItems(instance, schema, options, ctx) {
			var self = this;
			if (!this.types.array(instance)) return;
			if (schema.items === void 0) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			instance.every(function(value, i) {
				if (Array.isArray(schema.items)) var items = schema.items[i] === void 0 ? schema.additionalItems : schema.items[i];
				else var items = schema.items;
				if (items === void 0) return true;
				if (items === false) {
					result.addError({
						name: "items",
						message: "additionalItems not permitted"
					});
					return false;
				}
				var res = self.validateSchema(value, items, options, ctx.makeChild(items, i));
				if (res.instance !== result.instance[i]) result.instance[i] = res.instance;
				result.importErrors(res);
				return true;
			});
			return result;
		};
		/**
		* Validates the "contains" keyword
		* @param instance
		* @param schema
		* @param options
		* @param ctx
		* @return {String|null|ValidatorResult}
		*/
		validators.contains = function validateContains(instance, schema, options, ctx) {
			var self = this;
			if (!this.types.array(instance)) return;
			if (schema.contains === void 0) return;
			if (!helpers.isSchema(schema.contains)) throw new Error("Expected \"contains\" keyword to be a schema");
			var result = new ValidatorResult(instance, schema, options, ctx);
			if (instance.some(function(value, i) {
				return self.validateSchema(value, schema.contains, options, ctx.makeChild(schema.contains, i)).errors.length === 0;
			}) === false) result.addError({
				name: "contains",
				argument: schema.contains,
				message: "must contain an item matching given schema"
			});
			return result;
		};
		/**
		* Validates minimum and exclusiveMinimum when the type of the instance value is a number.
		* @param instance
		* @param schema
		* @return {String|null}
		*/
		validators.minimum = function validateMinimum(instance, schema, options, ctx) {
			if (!this.types.number(instance)) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			if (schema.exclusiveMinimum && schema.exclusiveMinimum === true) {
				if (!(instance > schema.minimum)) result.addError({
					name: "minimum",
					argument: schema.minimum,
					message: "must be greater than " + schema.minimum
				});
			} else if (!(instance >= schema.minimum)) result.addError({
				name: "minimum",
				argument: schema.minimum,
				message: "must be greater than or equal to " + schema.minimum
			});
			return result;
		};
		/**
		* Validates maximum and exclusiveMaximum when the type of the instance value is a number.
		* @param instance
		* @param schema
		* @return {String|null}
		*/
		validators.maximum = function validateMaximum(instance, schema, options, ctx) {
			if (!this.types.number(instance)) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			if (schema.exclusiveMaximum && schema.exclusiveMaximum === true) {
				if (!(instance < schema.maximum)) result.addError({
					name: "maximum",
					argument: schema.maximum,
					message: "must be less than " + schema.maximum
				});
			} else if (!(instance <= schema.maximum)) result.addError({
				name: "maximum",
				argument: schema.maximum,
				message: "must be less than or equal to " + schema.maximum
			});
			return result;
		};
		/**
		* Validates the number form of exclusiveMinimum when the type of the instance value is a number.
		* @param instance
		* @param schema
		* @return {String|null}
		*/
		validators.exclusiveMinimum = function validateExclusiveMinimum(instance, schema, options, ctx) {
			if (typeof schema.exclusiveMinimum === "boolean") return;
			if (!this.types.number(instance)) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			if (!(instance > schema.exclusiveMinimum)) result.addError({
				name: "exclusiveMinimum",
				argument: schema.exclusiveMinimum,
				message: "must be strictly greater than " + schema.exclusiveMinimum
			});
			return result;
		};
		/**
		* Validates the number form of exclusiveMaximum when the type of the instance value is a number.
		* @param instance
		* @param schema
		* @return {String|null}
		*/
		validators.exclusiveMaximum = function validateExclusiveMaximum(instance, schema, options, ctx) {
			if (typeof schema.exclusiveMaximum === "boolean") return;
			if (!this.types.number(instance)) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			if (!(instance < schema.exclusiveMaximum)) result.addError({
				name: "exclusiveMaximum",
				argument: schema.exclusiveMaximum,
				message: "must be strictly less than " + schema.exclusiveMaximum
			});
			return result;
		};
		/**
		* Perform validation for multipleOf and divisibleBy, which are essentially the same.
		* @param instance
		* @param schema
		* @param validationType
		* @param errorMessage
		* @returns {String|null}
		*/
		var validateMultipleOfOrDivisbleBy = function validateMultipleOfOrDivisbleBy(instance, schema, options, ctx, validationType, errorMessage) {
			if (!this.types.number(instance)) return;
			var validationArgument = schema[validationType];
			if (validationArgument == 0) throw new SchemaError(validationType + " cannot be zero");
			var result = new ValidatorResult(instance, schema, options, ctx);
			var instanceDecimals = helpers.getDecimalPlaces(instance);
			var divisorDecimals = helpers.getDecimalPlaces(validationArgument);
			var multiplier = Math.pow(10, Math.max(instanceDecimals, divisorDecimals));
			if (Math.round(instance * multiplier) % Math.round(validationArgument * multiplier) !== 0) result.addError({
				name: validationType,
				argument: validationArgument,
				message: errorMessage + JSON.stringify(validationArgument)
			});
			return result;
		};
		/**
		* Validates divisibleBy when the type of the instance value is a number.
		* @param instance
		* @param schema
		* @return {String|null}
		*/
		validators.multipleOf = function validateMultipleOf(instance, schema, options, ctx) {
			return validateMultipleOfOrDivisbleBy.call(this, instance, schema, options, ctx, "multipleOf", "is not a multiple of (divisible by) ");
		};
		/**
		* Validates multipleOf when the type of the instance value is a number.
		* @param instance
		* @param schema
		* @return {String|null}
		*/
		validators.divisibleBy = function validateDivisibleBy(instance, schema, options, ctx) {
			return validateMultipleOfOrDivisbleBy.call(this, instance, schema, options, ctx, "divisibleBy", "is not divisible by (multiple of) ");
		};
		/**
		* Validates whether the instance value is present.
		* @param instance
		* @param schema
		* @return {String|null}
		*/
		validators.required = function validateRequired(instance, schema, options, ctx) {
			var result = new ValidatorResult(instance, schema, options, ctx);
			if (instance === void 0 && schema.required === true) result.addError({
				name: "required",
				message: "is required"
			});
			else if (this.types.object(instance) && Array.isArray(schema.required)) schema.required.forEach(function(n) {
				if (getEnumerableProperty(instance, n) === void 0) result.addError({
					name: "required",
					argument: n,
					message: "requires property " + JSON.stringify(n)
				});
			});
			return result;
		};
		/**
		* Validates whether the instance value matches the regular expression, when the instance value is a string.
		* @param instance
		* @param schema
		* @return {String|null}
		*/
		validators.pattern = function validatePattern(instance, schema, options, ctx) {
			if (!this.types.string(instance)) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			var pattern = schema.pattern;
			try {
				var regexp = new RegExp(pattern, "u");
			} catch (_e) {
				regexp = new RegExp(pattern);
			}
			if (!instance.match(regexp)) result.addError({
				name: "pattern",
				argument: schema.pattern,
				message: "does not match pattern " + JSON.stringify(schema.pattern.toString())
			});
			return result;
		};
		/**
		* Validates whether the instance value is of a certain defined format or a custom
		* format.
		* The following formats are supported for string types:
		*   - date-time
		*   - date
		*   - time
		*   - ip-address
		*   - ipv6
		*   - uri
		*   - color
		*   - host-name
		*   - alpha
		*   - alpha-numeric
		*   - utc-millisec
		* @param instance
		* @param schema
		* @param [options]
		* @param [ctx]
		* @return {String|null}
		*/
		validators.format = function validateFormat(instance, schema, options, ctx) {
			if (instance === void 0) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			if (!result.disableFormat && !helpers.isFormat(instance, schema.format, this)) result.addError({
				name: "format",
				argument: schema.format,
				message: "does not conform to the " + JSON.stringify(schema.format) + " format"
			});
			return result;
		};
		/**
		* Validates whether the instance value is at least of a certain length, when the instance value is a string.
		* @param instance
		* @param schema
		* @return {String|null}
		*/
		validators.minLength = function validateMinLength(instance, schema, options, ctx) {
			if (!this.types.string(instance)) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			var hsp = instance.match(/[\uDC00-\uDFFF]/g);
			if (!(instance.length - (hsp ? hsp.length : 0) >= schema.minLength)) result.addError({
				name: "minLength",
				argument: schema.minLength,
				message: "does not meet minimum length of " + schema.minLength
			});
			return result;
		};
		/**
		* Validates whether the instance value is at most of a certain length, when the instance value is a string.
		* @param instance
		* @param schema
		* @return {String|null}
		*/
		validators.maxLength = function validateMaxLength(instance, schema, options, ctx) {
			if (!this.types.string(instance)) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			var hsp = instance.match(/[\uDC00-\uDFFF]/g);
			if (!(instance.length - (hsp ? hsp.length : 0) <= schema.maxLength)) result.addError({
				name: "maxLength",
				argument: schema.maxLength,
				message: "does not meet maximum length of " + schema.maxLength
			});
			return result;
		};
		/**
		* Validates whether instance contains at least a minimum number of items, when the instance is an Array.
		* @param instance
		* @param schema
		* @return {String|null}
		*/
		validators.minItems = function validateMinItems(instance, schema, options, ctx) {
			if (!this.types.array(instance)) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			if (!(instance.length >= schema.minItems)) result.addError({
				name: "minItems",
				argument: schema.minItems,
				message: "does not meet minimum length of " + schema.minItems
			});
			return result;
		};
		/**
		* Validates whether instance contains no more than a maximum number of items, when the instance is an Array.
		* @param instance
		* @param schema
		* @return {String|null}
		*/
		validators.maxItems = function validateMaxItems(instance, schema, options, ctx) {
			if (!this.types.array(instance)) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			if (!(instance.length <= schema.maxItems)) result.addError({
				name: "maxItems",
				argument: schema.maxItems,
				message: "does not meet maximum length of " + schema.maxItems
			});
			return result;
		};
		/**
		* Deep compares arrays for duplicates
		* @param v
		* @param i
		* @param a
		* @private
		* @return {boolean}
		*/
		function testArrays(v, i, a) {
			var j;
			var len = a.length;
			for (j = i + 1; j < len; j++) if (helpers.deepCompareStrict(v, a[j])) return false;
			return true;
		}
		/**
		* Validates whether there are no duplicates, when the instance is an Array.
		* @param instance
		* @return {String|null}
		*/
		validators.uniqueItems = function validateUniqueItems(instance, schema, options, ctx) {
			if (schema.uniqueItems !== true) return;
			if (!this.types.array(instance)) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			if (!instance.every(testArrays)) result.addError({
				name: "uniqueItems",
				message: "contains duplicate item"
			});
			return result;
		};
		/**
		* Validate for the presence of dependency properties, if the instance is an object.
		* @param instance
		* @param schema
		* @param options
		* @param ctx
		* @return {null|ValidatorResult}
		*/
		validators.dependencies = function validateDependencies(instance, schema, options, ctx) {
			if (!this.types.object(instance)) return;
			var result = new ValidatorResult(instance, schema, options, ctx);
			for (var property in schema.dependencies) {
				if (instance[property] === void 0) continue;
				var dep = schema.dependencies[property];
				var childContext = ctx.makeChild(dep, property);
				if (typeof dep == "string") dep = [dep];
				if (Array.isArray(dep)) dep.forEach(function(prop) {
					if (instance[prop] === void 0) result.addError({
						name: "dependencies",
						argument: childContext.propertyPath,
						message: "property " + prop + " not found, required by " + childContext.propertyPath
					});
				});
				else {
					var res = this.validateSchema(instance, dep, options, childContext);
					if (result.instance !== res.instance) result.instance = res.instance;
					if (res && res.errors.length) {
						result.addError({
							name: "dependencies",
							argument: childContext.propertyPath,
							message: "does not meet dependency required by " + childContext.propertyPath
						});
						result.importErrors(res);
					}
				}
			}
			return result;
		};
		/**
		* Validates whether the instance value is one of the enumerated values.
		*
		* @param instance
		* @param schema
		* @return {ValidatorResult|null}
		*/
		validators["enum"] = function validateEnum(instance, schema, options, ctx) {
			if (instance === void 0) return null;
			if (!Array.isArray(schema["enum"])) throw new SchemaError("enum expects an array", schema);
			var result = new ValidatorResult(instance, schema, options, ctx);
			if (!schema["enum"].some(helpers.deepCompareStrict.bind(null, instance))) result.addError({
				name: "enum",
				argument: schema["enum"],
				message: "is not one of enum values: " + schema["enum"].map(String).join(",")
			});
			return result;
		};
		/**
		* Validates whether the instance exactly matches a given value
		*
		* @param instance
		* @param schema
		* @return {ValidatorResult|null}
		*/
		validators["const"] = function validateEnum(instance, schema, options, ctx) {
			if (instance === void 0) return null;
			var result = new ValidatorResult(instance, schema, options, ctx);
			if (!helpers.deepCompareStrict(schema["const"], instance)) result.addError({
				name: "const",
				argument: schema["const"],
				message: "does not exactly match expected constant: " + schema["const"]
			});
			return result;
		};
		/**
		* Validates whether the instance if of a prohibited type.
		* @param instance
		* @param schema
		* @param options
		* @param ctx
		* @return {null|ValidatorResult}
		*/
		validators.not = validators.disallow = function validateNot(instance, schema, options, ctx) {
			var self = this;
			if (instance === void 0) return null;
			var result = new ValidatorResult(instance, schema, options, ctx);
			var notTypes = schema.not || schema.disallow;
			if (!notTypes) return null;
			if (!Array.isArray(notTypes)) notTypes = [notTypes];
			notTypes.forEach(function(type) {
				if (self.testType(instance, schema, options, ctx, type)) {
					var schemaId = type && (type.$id || type.id) || type;
					result.addError({
						name: "not",
						argument: schemaId,
						message: "is of prohibited type " + schemaId
					});
				}
			});
			return result;
		};
		module.exports = attribute;
	}));

//#endregion
//#region node_modules/jsonschema/lib/scan.js
	var require_scan = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var helpers = require_helpers();
		module.exports.SchemaScanResult = SchemaScanResult;
		function SchemaScanResult(found, ref) {
			this.id = found;
			this.ref = ref;
		}
		/**
		* Adds a schema with a certain urn to the Validator instance.
		* @param string uri
		* @param object schema
		* @return {Object}
		*/
		module.exports.scan = function scan(base, schema) {
			function scanSchema(baseuri, schema) {
				if (!schema || typeof schema != "object") return;
				if (schema.$ref) {
					let resolvedUri = helpers.resolveUrl(baseuri, schema.$ref);
					ref[resolvedUri] = ref[resolvedUri] ? ref[resolvedUri] + 1 : 0;
					return;
				}
				var id = schema.$id || schema.id;
				let resolvedBase = helpers.resolveUrl(baseuri, id);
				var ourBase = id ? resolvedBase : baseuri;
				if (ourBase) {
					if (ourBase.indexOf("#") < 0) ourBase += "#";
					if (found[ourBase]) {
						if (!helpers.deepCompareStrict(found[ourBase], schema)) throw new Error("Schema <" + ourBase + "> already exists with different definition");
						return found[ourBase];
					}
					found[ourBase] = schema;
					if (ourBase[ourBase.length - 1] == "#") found[ourBase.substring(0, ourBase.length - 1)] = schema;
				}
				scanArray(ourBase + "/items", Array.isArray(schema.items) ? schema.items : [schema.items]);
				scanArray(ourBase + "/extends", Array.isArray(schema.extends) ? schema.extends : [schema.extends]);
				scanSchema(ourBase + "/additionalItems", schema.additionalItems);
				scanObject(ourBase + "/properties", schema.properties);
				scanSchema(ourBase + "/additionalProperties", schema.additionalProperties);
				scanObject(ourBase + "/definitions", schema.definitions);
				scanObject(ourBase + "/patternProperties", schema.patternProperties);
				scanObject(ourBase + "/dependencies", schema.dependencies);
				scanArray(ourBase + "/disallow", schema.disallow);
				scanArray(ourBase + "/allOf", schema.allOf);
				scanArray(ourBase + "/anyOf", schema.anyOf);
				scanArray(ourBase + "/oneOf", schema.oneOf);
				scanSchema(ourBase + "/not", schema.not);
			}
			function scanArray(baseuri, schemas) {
				if (!Array.isArray(schemas)) return;
				for (var i = 0; i < schemas.length; i++) scanSchema(baseuri + "/" + i, schemas[i]);
			}
			function scanObject(baseuri, schemas) {
				if (!schemas || typeof schemas != "object") return;
				for (var p in schemas) scanSchema(baseuri + "/" + p, schemas[p]);
			}
			var found = {};
			var ref = {};
			scanSchema(base, schema);
			return new SchemaScanResult(found, ref);
		};
	}));

//#endregion
//#region node_modules/jsonschema/lib/validator.js
	var require_validator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var attribute = require_attribute();
		var helpers = require_helpers();
		var scanSchema = require_scan().scan;
		var ValidatorResult = helpers.ValidatorResult;
		var ValidatorResultError = helpers.ValidatorResultError;
		var SchemaError = helpers.SchemaError;
		var SchemaContext = helpers.SchemaContext;
		var anonymousBase = "/";
		/**
		* Creates a new Validator object
		* @name Validator
		* @constructor
		*/
		var Validator = function Validator() {
			this.customFormats = Object.create(Validator.prototype.customFormats);
			this.schemas = {};
			this.unresolvedRefs = [];
			this.types = Object.create(types);
			this.attributes = Object.create(attribute.validators);
		};
		Validator.prototype.customFormats = {};
		Validator.prototype.schemas = null;
		Validator.prototype.types = null;
		Validator.prototype.attributes = null;
		Validator.prototype.unresolvedRefs = null;
		/**
		* Adds a schema with a certain urn to the Validator instance.
		* @param schema
		* @param urn
		* @return {Object}
		*/
		Validator.prototype.addSchema = function addSchema(schema, base) {
			var self = this;
			if (!schema) return null;
			var scan = scanSchema(base || anonymousBase, schema);
			var ourUri = base || schema.$id || schema.id;
			for (var uri in scan.id) this.schemas[uri] = scan.id[uri];
			for (var uri in scan.ref) this.unresolvedRefs.push(uri);
			this.unresolvedRefs = this.unresolvedRefs.filter(function(uri) {
				return typeof self.schemas[uri] === "undefined";
			});
			return this.schemas[ourUri];
		};
		Validator.prototype.addSubSchemaArray = function addSubSchemaArray(baseuri, schemas) {
			if (!Array.isArray(schemas)) return;
			for (var i = 0; i < schemas.length; i++) this.addSubSchema(baseuri, schemas[i]);
		};
		Validator.prototype.addSubSchemaObject = function addSubSchemaArray(baseuri, schemas) {
			if (!schemas || typeof schemas != "object") return;
			for (var p in schemas) this.addSubSchema(baseuri, schemas[p]);
		};
		/**
		* Sets all the schemas of the Validator instance.
		* @param schemas
		*/
		Validator.prototype.setSchemas = function setSchemas(schemas) {
			this.schemas = schemas;
		};
		/**
		* Returns the schema of a certain urn
		* @param urn
		*/
		Validator.prototype.getSchema = function getSchema(urn) {
			return this.schemas[urn];
		};
		/**
		* Validates instance against the provided schema
		* @param instance
		* @param schema
		* @param [options]
		* @param [ctx]
		* @return {Array}
		*/
		Validator.prototype.validate = function validate(instance, schema, options, ctx) {
			if (typeof schema !== "boolean" && typeof schema !== "object" || schema === null) throw new SchemaError("Expected `schema` to be an object or boolean");
			if (!options) options = {};
			var id = schema.$id || schema.id;
			let base = helpers.resolveUrl(options.base, id || "");
			if (!ctx) {
				ctx = new SchemaContext(schema, options, [], base, Object.create(this.schemas));
				if (!ctx.schemas[base]) ctx.schemas[base] = schema;
				var found = scanSchema(base, schema);
				for (var n in found.id) {
					var sch = found.id[n];
					ctx.schemas[n] = sch;
				}
			}
			if (options.required && instance === void 0) {
				var result = new ValidatorResult(instance, schema, options, ctx);
				result.addError("is required, but is undefined");
				return result;
			}
			var result = this.validateSchema(instance, schema, options, ctx);
			if (!result) throw new Error("Result undefined");
			else if (options.throwAll && result.errors.length) throw new ValidatorResultError(result);
			return result;
		};
		/**
		* @param Object schema
		* @return mixed schema uri or false
		*/
		function shouldResolve(schema) {
			var ref = typeof schema === "string" ? schema : schema.$ref;
			if (typeof ref == "string") return ref;
			return false;
		}
		/**
		* Validates an instance against the schema (the actual work horse)
		* @param instance
		* @param schema
		* @param options
		* @param ctx
		* @private
		* @return {ValidatorResult}
		*/
		Validator.prototype.validateSchema = function validateSchema(instance, schema, options, ctx) {
			var result = new ValidatorResult(instance, schema, options, ctx);
			if (typeof schema === "boolean") {
				if (schema === true) schema = {};
				else if (schema === false) schema = { type: [] };
			} else if (!schema) throw new Error("schema is undefined");
			if (schema["extends"]) if (Array.isArray(schema["extends"])) {
				var schemaobj = {
					schema,
					ctx
				};
				schema["extends"].forEach(this.schemaTraverser.bind(this, schemaobj));
				schema = schemaobj.schema;
				schemaobj.schema = null;
				schemaobj.ctx = null;
				schemaobj = null;
			} else schema = helpers.deepMerge(schema, this.superResolve(schema["extends"], ctx));
			var switchSchema = shouldResolve(schema);
			if (switchSchema) {
				var resolved = this.resolve(schema, switchSchema, ctx);
				var subctx = new SchemaContext(resolved.subschema, options, ctx.path, resolved.switchSchema, ctx.schemas);
				return this.validateSchema(instance, resolved.subschema, options, subctx);
			}
			var skipAttributes = options && options.skipAttributes || [];
			for (var key in schema) if (!attribute.ignoreProperties[key] && skipAttributes.indexOf(key) < 0) {
				var validatorErr = null;
				var validator = this.attributes[key];
				if (validator) validatorErr = validator.call(this, instance, schema, options, ctx);
				else if (options.allowUnknownAttributes === false) throw new SchemaError("Unsupported attribute: " + key, schema);
				if (validatorErr) result.importErrors(validatorErr);
			}
			if (typeof options.rewrite == "function") result.instance = options.rewrite.call(this, instance, schema, options, ctx);
			return result;
		};
		/**
		* @private
		* @param Object schema
		* @param SchemaContext ctx
		* @returns Object schema or resolved schema
		*/
		Validator.prototype.schemaTraverser = function schemaTraverser(schemaobj, s) {
			schemaobj.schema = helpers.deepMerge(schemaobj.schema, this.superResolve(s, schemaobj.ctx));
		};
		/**
		* @private
		* @param Object schema
		* @param SchemaContext ctx
		* @returns Object schema or resolved schema
		*/
		Validator.prototype.superResolve = function superResolve(schema, ctx) {
			var ref = shouldResolve(schema);
			if (ref) return this.resolve(schema, ref, ctx).subschema;
			return schema;
		};
		/**
		* @private
		* @param Object schema
		* @param Object switchSchema
		* @param SchemaContext ctx
		* @return Object resolved schemas {subschema:String, switchSchema: String}
		* @throws SchemaError
		*/
		Validator.prototype.resolve = function resolve(schema, switchSchema, ctx) {
			switchSchema = ctx.resolve(switchSchema);
			if (ctx.schemas[switchSchema]) return {
				subschema: ctx.schemas[switchSchema],
				switchSchema
			};
			let fragment = new URL(switchSchema, "thismessage::/").hash;
			var document = fragment && fragment.length && switchSchema.substr(0, switchSchema.length - fragment.length);
			if (!document || !ctx.schemas[document]) throw new SchemaError("no such schema <" + switchSchema + ">", schema);
			var subschema = helpers.objectGetPath(ctx.schemas[document], fragment.substr(1));
			if (subschema === void 0) throw new SchemaError("no such schema " + fragment + " located in <" + document + ">", schema);
			return {
				subschema,
				switchSchema
			};
		};
		/**
		* Tests whether the instance if of a certain type.
		* @private
		* @param instance
		* @param schema
		* @param options
		* @param ctx
		* @param type
		* @return {boolean}
		*/
		Validator.prototype.testType = function validateType(instance, schema, options, ctx, type) {
			if (type === void 0) return;
			else if (type === null) throw new SchemaError("Unexpected null in \"type\" keyword");
			if (typeof this.types[type] == "function") return this.types[type].call(this, instance);
			if (type && typeof type == "object") {
				var res = this.validateSchema(instance, type, options, ctx);
				return res === void 0 || !(res && res.errors.length);
			}
			return true;
		};
		var types = Validator.prototype.types = {};
		types.string = function testString(instance) {
			return typeof instance == "string";
		};
		types.number = function testNumber(instance) {
			return typeof instance == "number" && isFinite(instance);
		};
		types.integer = function testInteger(instance) {
			return typeof instance == "number" && instance % 1 === 0;
		};
		types.boolean = function testBoolean(instance) {
			return typeof instance == "boolean";
		};
		types.array = function testArray(instance) {
			return Array.isArray(instance);
		};
		types["null"] = function testNull(instance) {
			return instance === null;
		};
		types.date = function testDate(instance) {
			return instance instanceof Date;
		};
		types.any = function testAny(instance) {
			return true;
		};
		types.object = function testObject(instance) {
			return instance && typeof instance === "object" && !Array.isArray(instance) && !(instance instanceof Date);
		};
		module.exports = Validator;
	}));

//#endregion
//#region node_modules/jsonschema/lib/index.js
	var require_lib = /* @__PURE__ */ __commonJSMin(((exports, module) => {
		var Validator = module.exports.Validator = require_validator();
		module.exports.ValidatorResult = require_helpers().ValidatorResult;
		module.exports.ValidatorResultError = require_helpers().ValidatorResultError;
		module.exports.ValidationError = require_helpers().ValidationError;
		module.exports.SchemaError = require_helpers().SchemaError;
		module.exports.SchemaScanResult = require_scan().SchemaScanResult;
		module.exports.scan = require_scan().scan;
		module.exports.validate = function(instance, schema, options) {
			return new Validator().validate(instance, schema, options);
		};
	}));

//#endregion
//#region packages/packages/libs/editor-props/src/utils/validate-prop-value.ts
	var import_lib = require_lib();
	function processValidationError(error) {
		const detailed = {
			path: error.path,
			message: error.message,
			schema: error.schema,
			instance: error.instance,
			name: error.name
		};
		if (error.name === "anyOf" && error.schema && typeof error.schema === "object" && "anyOf" in error.schema) detailed.variants = (error.schema.anyOf || []).map((variantSchema, idx) => {
			const variantResult = (0, import_lib.validate)(error.instance, variantSchema);
			let discriminator = `variant-${idx}`;
			if (variantSchema && typeof variantSchema === "object" && "properties" in variantSchema && variantSchema.properties && typeof variantSchema.properties === "object" && "$$type" in variantSchema.properties) {
				const typeProperty = variantSchema.properties.$$type;
				if (typeProperty && typeof typeProperty === "object" && "const" in typeProperty && typeof typeProperty.const === "string") discriminator = typeProperty.const;
			}
			return {
				discriminator,
				errors: variantResult.errors.map(processValidationError)
			};
		});
		return detailed;
	}
	function formatDetailedErrors(errors, indent = "") {
		const lines = [];
		for (const error of errors) {
			const pathStr = error.path.length > 0 ? error.path.join(".") : "root";
			lines.push(`${indent}Error at ${pathStr}: ${error.message}`);
			if (error.variants && error.variants.length > 0) {
				lines.push(`${indent}  Tried ${error.variants.length} variant(s):`);
				for (const variant of error.variants) {
					lines.push(`${indent}    - ${variant.discriminator}:`);
					if (variant.errors.length === 0) lines.push(`${indent}        (no errors - this variant matched!)`);
					else for (const nestedError of variant.errors) {
						const nestedPathStr = nestedError.path.length > 0 ? nestedError.path.join(".") : "root";
						lines.push(`${indent}        ${nestedPathStr}: ${nestedError.message}`);
						if (nestedError.variants && nestedError.variants.length > 0) lines.push(formatDetailedErrors([nestedError], `${indent}        `));
					}
				}
			}
		}
		return lines.join("\n");
	}
	var validatePropValue = (schema, value) => {
		const jsonSchema = propTypeToJsonSchema(schema);
		if (value === null) return {
			valid: true,
			errors: [],
			errorMessages: [],
			jsonSchema: JSON.stringify(propTypeToJsonSchema(schema))
		};
		const result = (0, import_lib.validate)(value, jsonSchema);
		const detailedErrors = result.errors.map(processValidationError);
		return {
			valid: result.valid,
			errors: result.errors,
			errorMessages: formatDetailedErrors(detailedErrors),
			jsonSchema: JSON.stringify(jsonSchema)
		};
	};

//#endregion
//#region packages/packages/libs/editor-props/src/utils/is-transformable.ts
	var transformableSchema = _elementor_schema.z.object({
		$$type: _elementor_schema.z.string(),
		value: _elementor_schema.z.any(),
		disabled: _elementor_schema.z.boolean().optional()
	});
	var isTransformable = (value) => {
		return transformableSchema.safeParse(value).success;
	};

//#endregion
//#region packages/packages/libs/editor-props/src/utils/filter-empty-values.ts
	var filterEmptyValues = (value) => {
		if (isEmpty(value)) return null;
		if (Array.isArray(value)) return value.map(filterEmptyValues).filter((item) => !isEmpty(item));
		if (typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, val]) => [key, filterEmptyValues(val)]).filter(([, val]) => !isEmpty(val)));
		return value;
	};
	var isEmpty = (value) => {
		if (value && isTransformable(value)) return isEmpty(value.value);
		return isNullish(value) || isNullishArray(value) || isNullishObject(value);
	};
	var isNullish = (value) => value === null || value === void 0 || value === "";
	var isNullishArray = (value) => Array.isArray(value) && value.every(isEmpty);
	var isNullishObject = (value) => {
		return typeof value === "object" && isNullishArray(Object.values(value));
	};

//#endregion
//#region packages/packages/libs/editor-props/src/utils/is-overridable.ts
	function isOverridable(value) {
		return isTransformable(value) && value.$$type === "overridable";
	}
	function rewrapOverridableValue(existing, newInner) {
		return {
			...existing,
			value: {
				...existing.value,
				origin_value: newInner
			}
		};
	}

//#endregion
//#region packages/packages/libs/editor-props/src/utils/merge-props.ts
	function mergeProps(current, updates) {
		let props = {};
		if (!Array.isArray(current)) props = structuredClone(current);
		Object.entries(updates).forEach(([key, value]) => {
			if (value === null || value === void 0) delete props[key];
			else props[key] = value;
		});
		return props;
	}

//#endregion
//#region packages/packages/libs/editor-props/src/utils/prop-dependency-utils.ts
	function isDependencyMet(dependency, values) {
		if (!dependency?.terms.length) return { isMet: true };
		const { relation, terms } = dependency;
		const method = getRelationMethod(relation);
		const failingDependencies = [];
		return {
			isMet: terms[method]((term) => {
				const result = isDependency(term) ? isDependencyMet(term, values).isMet : evaluateTerm(term, extractValue(term.path, values, term.nestedPath)?.value);
				if (!result) failingDependencies.push(term);
				return result;
			}),
			failingDependencies
		};
	}
	function evaluateTerm(term, actualValue) {
		const { value: valueToCompare, operator } = term;
		switch (operator) {
			case "eq":
			case "ne": return actualValue === valueToCompare === ("eq" === operator);
			case "gt":
			case "lte":
				if (!isNumber(actualValue) || !isNumber(valueToCompare)) return false;
				return Number(actualValue) > Number(valueToCompare) === ("gt" === operator);
			case "lt":
			case "gte":
				if (!isNumber(actualValue) || !isNumber(valueToCompare)) return false;
				return Number(actualValue) < Number(valueToCompare) === ("lt" === operator);
			case "in":
			case "nin":
				if (!Array.isArray(valueToCompare)) return false;
				return valueToCompare.includes(actualValue) === ("in" === operator);
			case "contains":
			case "ncontains":
				if (("string" !== typeof actualValue || "string" !== typeof valueToCompare) && !Array.isArray(actualValue)) return false;
				const transformedValue = Array.isArray(actualValue) ? actualValue.map((item) => isTransformable(item) ? item.value : item) : actualValue;
				return "contains" === operator === transformedValue.includes(valueToCompare);
			case "exists":
			case "not_exist": return "exists" === operator === (!!actualValue || 0 === actualValue || false === actualValue);
			default: return true;
		}
	}
	function isNumber(value) {
		return typeof value === "number" && !isNaN(value);
	}
	function getRelationMethod(relation) {
		switch (relation) {
			case "or": return "some";
			case "and": return "every";
			default: throw new Error(`Relation not supported ${relation}`);
		}
	}
	function extractValue(path, elementValues, nestedPath = [], options = {}) {
		const { unwrapOverridableLeaf = true } = options;
		let resolved = path.reduce((acc, key, index) => {
			const value = acc?.[key];
			if (index === path.length - 1) return value;
			if (isOverridable(value)) {
				const inner = value.value.origin_value;
				return isTransformable(inner) ? inner.value ?? null : inner;
			}
			if (isTransformable(value)) return value.value ?? null;
			return value;
		}, elementValues);
		if (unwrapOverridableLeaf && resolved && isOverridable(resolved)) resolved = resolved.value.origin_value ?? null;
		if (!nestedPath?.length) return resolved;
		return {
			$$type: "unknown",
			value: nestedPath.reduce((acc, key) => acc?.[key], resolved?.value)
		};
	}
	function isDependency(term) {
		return "terms" in term;
	}

//#endregion
//#region packages/packages/libs/editor-props/src/utils/parse-html-children.ts
	var INLINE_ELEMENTS = /* @__PURE__ */ new Set([
		"span",
		"b",
		"strong",
		"i",
		"em",
		"u",
		"a",
		"del",
		"sup",
		"sub",
		"s"
	]);
	function generateElementId() {
		return `e-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 9)}`;
	}
	function traverseChildren(node) {
		const result = [];
		for (const child of Array.from(node.children)) {
			const tagName = child.tagName.toLowerCase();
			if (!INLINE_ELEMENTS.has(tagName)) {
				result.push(...traverseChildren(child));
				continue;
			}
			let id = child.getAttribute("id");
			if (!id) {
				id = generateElementId();
				child.setAttribute("id", id);
			}
			const childElement = {
				id,
				type: tagName
			};
			const textContent = child.textContent?.trim();
			if (textContent) childElement.content = textContent;
			const nestedChildren = traverseChildren(child);
			if (nestedChildren.length > 0) childElement.children = nestedChildren;
			result.push(childElement);
		}
		return result;
	}
	function parseHtmlChildren(html) {
		if (!html) return {
			content: html,
			children: []
		};
		const doc = new DOMParser().parseFromString(`<body>${html}</body>`, "text/html");
		const parserError = doc.querySelector("parsererror");
		if (parserError) {
			console.warn("HTML parsing error, returning original content:", parserError.textContent);
			return {
				content: html,
				children: []
			};
		}
		const body = doc.body;
		const children = traverseChildren(body);
		return {
			content: body.innerHTML,
			children
		};
	}

//#endregion
//#region packages/packages/libs/editor-props/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		CLASSES_PROP_KEY: () => CLASSES_PROP_KEY,
		DateTimePropTypeUtil: () => DateTimePropTypeUtil,
		Schema: () => Schema,
		backdropFilterPropTypeUtil: () => backdropFilterPropTypeUtil,
		backgroundColorOverlayPropTypeUtil: () => backgroundColorOverlayPropTypeUtil,
		backgroundGradientOverlayPropTypeUtil: () => backgroundGradientOverlayPropTypeUtil,
		backgroundImageOverlayPropTypeUtil: () => backgroundImageOverlayPropTypeUtil,
		backgroundImagePositionOffsetPropTypeUtil: () => backgroundImagePositionOffsetPropTypeUtil,
		backgroundImageSizeScalePropTypeUtil: () => backgroundImageSizeScalePropTypeUtil,
		backgroundOverlayItem: () => backgroundOverlayItem,
		backgroundOverlayPropTypeUtil: () => backgroundOverlayPropTypeUtil,
		backgroundPropTypeUtil: () => backgroundPropTypeUtil,
		blurFilterPropTypeUtil: () => blurFilterPropTypeUtil,
		booleanPropTypeUtil: () => booleanPropTypeUtil,
		borderRadiusPropTypeUtil: () => borderRadiusPropTypeUtil,
		borderWidthPropTypeUtil: () => borderWidthPropTypeUtil,
		boxShadowPropTypeUtil: () => boxShadowPropTypeUtil,
		classesPropTypeUtil: () => classesPropTypeUtil,
		colorPropTypeUtil: () => colorPropTypeUtil,
		colorStopPropTypeUtil: () => colorStopPropTypeUtil,
		colorToneFilterPropTypeUtil: () => colorToneFilterPropTypeUtil,
		createArrayPropUtils: () => createArrayPropUtils,
		createPropUtils: () => createPropUtils,
		cssFilterFunctionPropUtil: () => cssFilterFunctionPropUtil,
		dateRangePropTypeUtil: () => dateRangePropTypeUtil,
		dateStringPropTypeUtil: () => dateStringPropTypeUtil,
		dimensionsPropTypeUtil: () => dimensionsPropTypeUtil,
		dropShadowFilterPropTypeUtil: () => dropShadowFilterPropTypeUtil,
		emailPropTypeUtil: () => emailPropTypeUtil,
		emailsPropTypeUtil: () => emailsPropTypeUtil,
		escapedHtmlPropTypeUtil: () => escapedHtmlPropTypeUtil,
		evaluateTerm: () => evaluateTerm,
		extractValue: () => extractValue,
		filterEmptyValues: () => filterEmptyValues,
		filterPropTypeUtil: () => filterPropTypeUtil,
		flexPropTypeUtil: () => flexPropTypeUtil,
		fontFamilyPropTypeUtil: () => fontFamilyPropTypeUtil,
		getPropSchemaFromCache: () => getPropSchemaFromCache,
		gradientColorStopPropTypeUtil: () => gradientColorStopPropTypeUtil,
		gridTrackSizePropTypeUtil: () => gridTrackSizePropTypeUtil,
		htmlPropTypeUtil: () => htmlPropTypeUtil,
		htmlV2PropTypeUtil: () => htmlV2PropTypeUtil,
		htmlV3PropTypeUtil: () => htmlV3PropTypeUtil,
		hueRotateFilterPropTypeUtil: () => hueRotateFilterPropTypeUtil,
		iconPropTypeUtil: () => iconPropTypeUtil,
		imageAttachmentIdPropType: () => imageAttachmentIdPropType,
		imagePropTypeUtil: () => imagePropTypeUtil,
		imageSrcPropTypeUtil: () => imageSrcPropTypeUtil,
		intensityFilterPropTypeUtil: () => intensityFilterPropTypeUtil,
		isDependency: () => isDependency,
		isDependencyMet: () => isDependencyMet,
		isEmpty: () => isEmpty,
		isOverridable: () => isOverridable,
		isTransformable: () => isTransformable,
		keyValuePropTypeUtil: () => keyValuePropTypeUtil,
		layoutDirectionPropTypeUtil: () => layoutDirectionPropTypeUtil,
		linkPropTypeUtil: () => linkPropTypeUtil,
		mergeProps: () => mergeProps,
		moveTransformPropTypeUtil: () => moveTransformPropTypeUtil,
		numberPropTypeUtil: () => numberPropTypeUtil,
		numberRangePropTypeUtil: () => numberRangePropTypeUtil,
		parseHtmlChildren: () => parseHtmlChildren,
		perspectiveOriginPropTypeUtil: () => perspectiveOriginPropTypeUtil,
		positionPropTypeUtil: () => positionPropTypeUtil,
		queryFilterArrayPropTypeUtil: () => queryFilterArrayPropTypeUtil,
		queryFilterPropTypeUtil: () => queryFilterPropTypeUtil,
		queryPropTypeUtil: () => queryPropTypeUtil,
		rewrapOverridableValue: () => rewrapOverridableValue,
		rotateTransformPropTypeUtil: () => rotateTransformPropTypeUtil,
		scaleTransformPropTypeUtil: () => scaleTransformPropTypeUtil,
		selectionSizePropTypeUtil: () => selectionSizePropTypeUtil,
		shadowPropTypeUtil: () => shadowPropTypeUtil,
		sizePropTypeUtil: () => sizePropTypeUtil,
		skewTransformPropTypeUtil: () => skewTransformPropTypeUtil,
		spanPropTypeUtil: () => spanPropTypeUtil,
		stringArrayPropTypeUtil: () => stringArrayPropTypeUtil,
		stringPropTypeUtil: () => stringPropTypeUtil,
		strokePropTypeUtil: () => strokePropTypeUtil,
		svgSrcPropTypeUtil: () => svgSrcPropTypeUtil,
		timeRangePropTypeUtil: () => timeRangePropTypeUtil,
		timeStringPropTypeUtil: () => timeStringPropTypeUtil,
		transformFunctionsPropTypeUtil: () => transformFunctionsPropTypeUtil,
		transformOriginPropTypeUtil: () => transformOriginPropTypeUtil,
		transformPropTypeUtil: () => transformPropTypeUtil,
		urlPropTypeUtil: () => urlPropTypeUtil,
		videoAttachmentIdPropType: () => videoAttachmentIdPropType,
		videoSrcPropTypeUtil: () => videoSrcPropTypeUtil
	});
	var Schema = {
		jsonSchemaToPropType,
		propTypeToJsonSchema,
		adjustLlmPropValueSchema,
		isPropKeyConfigurable,
		nonConfigurablePropKeys,
		configurableKeys,
		validatePropValue,
		enrichWithIntention,
		removeIntention,
		setDynamicTagNamesResolver
	};

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).editorProps = src_exports;

//#endregion
})(elementorV2.schema);
window.elementorV2.editorProps?.init?.();
//# sourceMappingURL=editor-props.js.map