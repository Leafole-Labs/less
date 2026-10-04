(function(_elementor_editor_mcp, _elementor_elementor_mcp_common, _elementor_schema) {

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

//#region packages/packages/core/elementor-kit-mcp/src/mcp-description-resource.ts
	var KIT_DESCRIPTION_URI = "elementor://kit/server-description";
	var KIT_DESCRIPTION = `## Elementor Kit Settings Management

### Capabilities:
**Global Design System:**
- Create, update, name, and delete global colors (both system and custom)
- Create, update, name, and delete global fonts (both system and custom)

**Site Identity:**
- Insert site logo
- Set site favicon
- Update site name
- Modify site description

### Limitations:
**Theme Style Settings:**
- Cannot set or update Elementor Theme Style settings including typography, buttons, images, form fields, Hello Theme header, or Hello Theme footer that affect the entire website appearance

**Site-Wide Settings:**
- Cannot set site-wide background (color or image)
- Cannot configure mobile browser background
- Cannot modify global layout settings such as content width, container padding, and widget gaps (the default space between widgets)

**Note**: Angie can adjust all of these layout properties at the container or page level - just not site-wide.`;
	function addKitDescriptionResource(server) {
		server.registerResource("elementor-kit-server-description", KIT_DESCRIPTION_URI, {
			title: "Elementor Kit Server Description",
			description: "Elementor Kit capabilities and limitations",
			mimeType: "text/plain"
		}, async (uri) => ({ contents: [{
			uri: uri.href,
			mimeType: "text/plain",
			text: KIT_DESCRIPTION
		}] }));
	}

//#endregion
//#region packages/packages/core/elementor-kit-mcp/src/elementor-kit-mcp-server.ts
	var RESOURCE_NAME_KIT_FONTS = "elementor-kit-fonts";
	var RESOURCE_URI_KIT_FONTS = "elementor://kit/fonts";
	var RESOURCE_NAME_KIT_SCHEMA = "elementor-kit-schema";
	var RESOURCE_URI_KIT_SCHEMA_TEMPLATE = "elementor://kit/schema/{tab}";
	var RESOURCE_NAME_KIT_SETTINGS = "elementor-kit-settings";
	var RESOURCE_URI_KIT_SETTINGS = "elementor://kit/settings";
	var VERSION = "2.0.0";
	async function fetchKitFonts() {
		return (0, _elementor_elementor_mcp_common.callWpApi)(`/angie/v1/elementor-kit/fonts`, "GET");
	}
	async function fetchKitSchema() {
		return (0, _elementor_elementor_mcp_common.callWpApi)(`/angie/v1/elementor-kit/schema`, "GET");
	}
	async function fetchKitSettings() {
		return (0, _elementor_elementor_mcp_common.callWpApi)(`/angie/v1/elementor-kit`, "GET");
	}
	async function validateFonts(systemTypography, customTypography) {
		const fontsResponse = await fetchKitFonts();
		const availableFonts = Object.keys(fontsResponse.data.fonts || {});
		const invalidFonts = [];
		[systemTypography, customTypography].forEach((typography) => {
			if (typography) typography.forEach((item) => {
				if (item.typography_font_family && !availableFonts.includes(item.typography_font_family)) invalidFonts.push(item.typography_font_family);
			});
		});
		if (invalidFonts.length > 0) return `Please use available fonts only. Invalid fonts: ${invalidFonts.join(", ")}. Available fonts: ${availableFonts.join(", ")}`;
		return "";
	}
	function sanitizeMediaFields(obj) {
		const mediaFields = ["site_logo", "site_icon"];
		const sanitized = { ...obj };
		for (const field of mediaFields) if (field in sanitized && sanitized[field] === "") sanitized[field] = 0;
		return sanitized;
	}
	var baseColorSchema = _elementor_schema.z.object({
		title: _elementor_schema.z.string(),
		color: _elementor_schema.z.string()
	});
	var baseTypographySchema = _elementor_schema.z.object({
		title: _elementor_schema.z.string(),
		typography_typography: _elementor_schema.z.string(),
		typography_font_family: _elementor_schema.z.string().describe("Font family name that must be from the available Elementor fonts list. Use the get-fonts endpoint (/angie/v1/elementor-kit/fonts) to get the complete list of available fonts. Only use fonts that exist in this list to avoid validation errors."),
		typography_font_weight: _elementor_schema.z.string(),
		typography_font_size: _elementor_schema.z.object({
			unit: _elementor_schema.z.string(),
			size: _elementor_schema.z.number()
		}).optional(),
		typography_font_size_tablet: _elementor_schema.z.object({
			unit: _elementor_schema.z.string(),
			size: _elementor_schema.z.number()
		}).optional(),
		typography_font_size_mobile: _elementor_schema.z.object({
			unit: _elementor_schema.z.string(),
			size: _elementor_schema.z.number()
		}).optional(),
		typography_line_height: _elementor_schema.z.object({
			unit: _elementor_schema.z.string(),
			size: _elementor_schema.z.number()
		}).optional()
	}).passthrough();
	var systemColorItemSchema = baseColorSchema.extend({ _id: _elementor_schema.z.enum([
		"primary",
		"secondary",
		"text",
		"accent"
	]) });
	var systemTypographyItemSchema = baseTypographySchema.extend({ _id: _elementor_schema.z.enum([
		"primary",
		"secondary",
		"text",
		"accent"
	]) });
	var customColorItemSchema = baseColorSchema.extend({ _id: _elementor_schema.z.string() });
	var customTypographyItemSchema = baseTypographySchema.extend({ _id: _elementor_schema.z.string() });
	var systemColorsSchema = _elementor_schema.z.array(systemColorItemSchema).length(4);
	var systemTypographySchema = _elementor_schema.z.array(systemTypographyItemSchema).length(4);
	var customColorsSchema = _elementor_schema.z.array(customColorItemSchema);
	var customTypographySchema = _elementor_schema.z.array(customTypographyItemSchema);
	var generalPatchSchema = _elementor_schema.z.record(_elementor_schema.z.unknown()).describe("General patch object for any other Elementor kit settings like spacing, buttons, forms, layout settings, etc.");
	var SERVER_INSTRUCTIONS = "Manages Elementor global design system: colors, typography, and site identity.";
	async function createElementorKitServer() {
		await (0, _elementor_elementor_mcp_common.waitForElementorEditor)();
		const server = new _elementor_editor_mcp.McpServer({
			name: "elementor-kit-server",
			version: VERSION,
			title: "Elementor Kit"
		}, {
			instructions: SERVER_INSTRUCTIONS,
			capabilities: { resources: { subscribe: true } }
		});
		addKitDescriptionResource(server);
		const getAvailableTabs = async () => {
			const kitSchema = await fetchKitSchema();
			return Object.keys(kitSchema.data || {});
		};
		server.registerResource(RESOURCE_NAME_KIT_FONTS, RESOURCE_URI_KIT_FONTS, {
			title: "Elementor Kit Available Fonts",
			description: "Complete list of all available font families that can be used in Elementor, including system fonts, Google fonts, and custom uploaded fonts"
		}, async (uri) => {
			const fontsResponse = await fetchKitFonts();
			return { contents: [{
				uri: uri.href,
				mimeType: "application/json",
				text: JSON.stringify(fontsResponse, null, 2)
			}] };
		});
		server.registerResource(RESOURCE_NAME_KIT_SETTINGS, RESOURCE_URI_KIT_SETTINGS, {
			title: "Elementor Kit Current Settings",
			description: "Complete current Elementor global kit configuration including all system and custom colors, typography settings, spacing, buttons, forms, and other site-wide design settings"
		}, async (uri) => {
			const currentSettings = await fetchKitSettings();
			return { contents: [{
				uri: uri.href,
				mimeType: "application/json",
				text: JSON.stringify(currentSettings, null, 2)
			}] };
		});
		server.registerResource(RESOURCE_NAME_KIT_SCHEMA, new _elementor_editor_mcp.ResourceTemplate(RESOURCE_URI_KIT_SCHEMA_TEMPLATE, { list: async () => {
			return { resources: (await getAvailableTabs()).map((tab) => {
				return {
					uri: `elementor://kit/schema/${tab}`,
					name: `${RESOURCE_NAME_KIT_SCHEMA}-${tab}`,
					title: `Elementor Kit Schema - ${tab}`,
					description: `Schema definition for Elementor kit ${tab} settings tab`,
					mimeType: "application/json"
				};
			}) };
		} }), {
			title: "Elementor Kit Schema",
			description: "Complete schema definition for a specific Elementor kit settings tab, showing all available fields, their types, valid values, and configuration options"
		}, async (uri, variables) => {
			const tab = Array.isArray(variables.tab) ? variables.tab[0] : variables.tab;
			if (!tab) throw new Error("Tab parameter is required");
			const kitSchema = await fetchKitSchema();
			const tabSchema = kitSchema.data?.[tab];
			if (!tabSchema) throw new Error(`No schema found for tab '${tab}'. Available tabs: ${Object.keys(kitSchema.data).join(", ")}`);
			return { contents: [{
				uri: uri.toString(),
				mimeType: "application/json",
				text: JSON.stringify(tabSchema, null, 2)
			}] };
		});
		server.registerTool("update-elementor-kit-settings-colors-and-fonts", {
			description: `This tool applies configuration changes to Elementor global kit settings that control site-wide design elements. Use this when you need to modify global colors, typography, spacing, buttons, form fields, or other theme-wide settings that affect the entire website appearance.

The tool will permanently update the site's global design settings and return a success confirmation with the updated configuration data.`,
			inputSchema: {
				systemColors: systemColorsSchema.optional().nullable().describe("System colors array with exactly 4 items having IDs: primary, secondary, text, accent"),
				systemTypography: systemTypographySchema.optional().nullable().describe("System typography array with exactly 4 items having IDs: primary, secondary, text, accent"),
				customColors: customColorsSchema.optional().nullable().describe("Custom colors array - flexible structure for additional color definitions"),
				customTypography: customTypographySchema.optional().nullable().describe("Custom typography array - flexible structure for additional font definitions (no color field needed)"),
				patchObject: generalPatchSchema.optional().nullable().describe("General patch object for any other Elementor kit settings like spacing, buttons, forms, layout settings, etc."),
				confirmationMessage: _elementor_schema.z.string().describe("REQUIRED: Provide a clear explanation in **markdown format** of what Elementor kit settings will be changed and their potential impact on the site's global design. This message will be shown to the user before proceeding. Be specific about which design elements are being modified (colors, typography, spacing, etc.) and how they will affect the entire website. Examples: \"You're about to update the global **primary color** from `blue` to `green`. This will change **buttons**, **links**, and **accent colors** throughout your entire site.\" or \"You're about to change the **primary font** from `Roboto` to `Open Sans`. This will affect **headings** across all pages.\"")
			},
			annotations: {
				title: "Update Elementor Kit Settings",
				destructiveHint: true
			},
			_meta: { "angie/requiredResources": [{
				uri: KIT_DESCRIPTION_URI,
				whenToUse: "Read first for kit capabilities and limitations"
			}] }
		}, async ({ systemColors, systemTypography, customColors, customTypography, patchObject, confirmationMessage }) => {
			(0, _elementor_elementor_mcp_common.requireConfirmationMessage)(confirmationMessage, "Elementor kit settings");
			const invalidFonts = await validateFonts(systemTypography, customTypography);
			if (invalidFonts) throw new Error(invalidFonts);
			const completePatchObject = {
				...systemColors && { system_colors: systemColors },
				...systemTypography && { system_typography: systemTypography },
				...customColors && { custom_colors: customColors },
				...customTypography && { custom_typography: customTypography },
				...sanitizeMediaFields(patchObject || {})
			};
			if (Object.keys(completePatchObject).length === 0) throw new Error("At least one update must be provided (systemColors, systemTypography, customColors, customTypography, or patchObject)");
			const response = await (0, _elementor_elementor_mcp_common.callWpApi)(`/angie/v1/elementor-kit`, "POST", completePatchObject);
			return { content: [{
				type: "text",
				text: JSON.stringify({
					success: true,
					message: "Settings updated successfully",
					data: response,
					appliedSettings: completePatchObject
				}, null, 2)
			}] };
		});
		const sdk = (0, _elementor_editor_mcp.getAngieSdk)();
		await sdk.waitForReady();
		sdk.registerLocalServer({
			server,
			version: VERSION,
			description: SERVER_INSTRUCTIONS,
			name: "elementor-kit-server"
		});
		return server;
	}

//#endregion
//#region packages/packages/core/elementor-kit-mcp/src/init.ts
	function init() {
		createElementorKitServer();
	}

//#endregion
//#region packages/packages/core/elementor-kit-mcp/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({
		createElementorKitServer: () => createElementorKitServer,
		init: () => init
	});

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).elementorKitMcp = src_exports;

//#endregion
})(elementorV2.editorMcp, elementorV2.elementorMcpCommon, elementorV2.schema);
window.elementorV2.elementorKitMcp?.init?.();
//# sourceMappingURL=elementor-kit-mcp.js.map