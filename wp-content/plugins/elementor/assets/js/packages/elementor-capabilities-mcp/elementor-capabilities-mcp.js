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

//#region packages/apps/elementor-capabilities-mcp/src/pages-list-resource.ts
	var PAGES_LIST_RESOURCE_URI = "wp://pages/list";
	function addPagesListResource(server) {
		server.registerResource("wp-pages-list", PAGES_LIST_RESOURCE_URI, {
			title: "List of wordpress pages",
			description: "List of all WordPress pages with their IDs, titles, status, and metadata. Use this to get available pages before navigation or editing."
		}, async (uri) => {
			try {
				const pages = (await (0, _elementor_elementor_mcp_common.callWpApi)("/wp/v2/pages?per_page=100&orderby=modified&order=desc", "GET")).data;
				if (!Array.isArray(pages)) throw new Error("Invalid response format from wordpress pages API");
				const pagesList = pages.map((page) => ({
					id: page.id,
					title: page.title.rendered,
					status: page.status,
					link: page.link,
					modified: page.modified,
					type: page.type
				}));
				return { contents: [{
					uri: uri.href,
					mimeType: "application/json",
					text: JSON.stringify({
						pages: pagesList,
						total: pagesList.length,
						message: "List of all available wordpress pages"
					}, null, 2)
				}] };
			} catch (error) {
				throw new Error(`Failed to fetch pages list: ${error.message}`);
			}
		});
	}

//#endregion
//#region packages/apps/elementor-capabilities-mcp/src/mcp-description-resource.ts
	var CAPABILITIES_DESCRIPTION_URI = "elementor://capabilities/server-description";
	var CAPABILITIES_DESCRIPTION = `## Elementor Page Builder - Available When In Editor

This MCP provides information about Elementor's page building capabilities. When users ask about Elementor features, you should navigate them to the Elementor editor where full capabilities are available.

### Available Resources:
**Pages List Resource** (\`${PAGES_LIST_RESOURCE_URI}\`):
- Lists all WordPress pages with IDs, titles, status, and metadata
- Use this to see what pages are available before navigation
- Updated automatically when pages are created or modified
- Useful for suggesting pages to edit or checking if a page exists

### Elementor Capabilities (Available In Editor):

**Page Management:**
- Manage page settings, saving and routing pages
- Control the editor UI, including switching between desktop, tablet, and mobile views

**Global Styles:**
- Work with global styles, helping manage shared design settings like colors and fonts across the site

**Element Management:**
- Create, edit, delete, duplicate, and move individual Elementor widgets and containers
- Update widget and container settings
- Insert text content with AI-powered text generation
- Create image widgets and assign images to elements

**AI-Powered Content Creation:**
- Generate and edit text and insert it into the page
- Generate images and place them on the canvas

**Custom Styling & Code:**
- Apply custom CSS to elements
- Generate supported code snippets

### Elementor Limitations (What Cannot Be Done):

**Element Management Limitations:**
- Cannot apply motion effects
- Cannot create fully designed or polished pages in a single step
- Cannot fully resolve responsiveness issues
- Layout generation (Copilot) is not currently available

**Theme Builder:**
- Cannot create or manage Theme Builder templates, including headers, footers, single posts, archives, products, loop items, or 404 pages
- Cannot set display conditions for templates
- Cannot configure popup triggers and advanced rules

**System Settings:**
- Cannot change Elementor system-level settings
- Cannot activate or work with Editor V4
- Cannot manage form submissions
- Cannot add custom fonts or icons
- Cannot manage user roles
- Cannot roll back Elementor versions
- Cannot place the site in maintenance mode
- Cannot export the website
- Cannot apply full website templates

**Code & Widgets:**
- Cannot register PHP code or create new custom widgets, though Angie may provide guidance, code snippets, or plugin suggestions where helpful

**Note**: While page names can include terms like "header" or "footer", these won't function as actual theme parts without Theme Builder access.

### How to Help Users:

**When users ask about Elementor features:**
1. Confirm what they want to accomplish
2. Check if it's a supported capability (see lists above)
3. **Get the page to edit:**
   - If user says "create new page" \u2192 Use createNew=true
   - Otherwise \u2192 Call tool with no parameters to get page list
   - Show pages to user: "Which page? Homepage, About, Contact..."
   - User chooses \u2192 Call tool again with that pageId
4. Once in editor, full Elementor MCP tools will be available

**Examples:**
- User: "Edit homepage" \u2192 Get page list \u2192 Find "Homepage" \u2192 Ask to confirm \u2192 Navigate
- User: "Create new page" \u2192 createNew=true \u2192 Navigate

**Examples of when to navigate to editor:**
- "Edit my homepage with Elementor"
- "Apply custom CSS to my page"
- "Generate text content for my page"
- "Work with dynamic content"

**Examples of when to navigate to editor (element management now supported):**
- "Add a heading widget" (Navigate to editor - element management supported)
- "Create a new section with containers" (Navigate to editor - container creation supported)
- "Change the color of a button" (Navigate to editor - widget settings supported)

**Examples of what Elementor CANNOT do (don't navigate):**
- "Add motion effects to my page" (Motion effects not supported)
- "Create a header template" (Theme Builder not available)
- "Set up a popup trigger" (Popup triggers and advanced rules not supported)
- "Change Elementor settings" (System-level settings restricted)
- "Add custom fonts" (Custom fonts not supported)
- "Create a custom widget" (Cannot register PHP code or custom widgets)

### Important Notes:
- Elementor tools are ONLY available when inside the Elementor editor
- This MCP server is for navigation and capability awareness
- Once in editor, the full 'elementor' MCP server with all tools becomes available
- Always verify if the requested feature is supported before navigating

**Important**: When users ask "What can Angie do?" or similar questions about Angie's general capabilities, use the \`what-can-angie-do\` tool from the knowledge MCP server instead of generating your own response.`;
	function addCapabilitiesDescriptionResource(server) {
		server.registerResource("elementor-capabilities-server-description", CAPABILITIES_DESCRIPTION_URI, {
			title: "Elementor capabilities and limitations",
			description: "Full guide to Elementor MCP capabilities, limitations, workflows, and when to navigate to the editor."
		}, async (uri) => ({ contents: [{
			uri: uri.href,
			mimeType: "text/plain",
			text: CAPABILITIES_DESCRIPTION
		}] }));
	}

//#endregion
//#region packages/apps/elementor-capabilities-mcp/src/elementor-capabilities-mcp-server.ts
	var ANGIE_REQUIRED_RESOURCES = "angie/requiredResources";
	var WP_PAGES_ENDPOINT = "/wp/v2/pages";
	var ELEMENTOR_EDIT_MODE = "builder";
	var DEFAULT_PAGE_TITLE = "New Page";
	var ELEMENTOR_EDIT_ACTION = "elementor";
	var getSafeOrigin = () => {
		if (typeof window === "undefined") return "";
		const url = new URL(window.location.href);
		return `${url.protocol}://${url.host}` || "";
	};
	function safeNavigateAfterResponse(url) {
		try {
			(0, _elementor_editor_mcp.getAngieIframe)().contentWindow.postMessage({
				type: _elementor_editor_mcp.AngieMessageEvenetType.ANGIE_NAVIGATE_AFTER_RESPONSE,
				payload: { url }
			}, getSafeOrigin());
		} finally {
			setTimeout(() => {
				window.location.replace(url);
			}, 50);
		}
	}
	function createElementorCapabilitiesServer() {
		const server = new _elementor_elementor_mcp_common.McpServer({
			name: "elementor-capabilities-server",
			version: "1.0.0",
			title: "Elementor Capabilities"
		}, {
			instructions: `Provides Elementor page-building capabilities and navigates users to the editor.`,
			capabilities: { resources: { subscribe: true } }
		});
		addPagesListResource(server);
		addCapabilitiesDescriptionResource(server);
		server.registerTool("navigate-to-elementor-editor", {
			description: `Navigate the user to the Elementor editor. Causes a full page reload \u2014 editor-related tools become available afterward.

Workflow: choose from the pages list resource \u2192 set pageId (edit) OR createNew=true (new page) with confirmationMessage.`,
			inputSchema: {
				pageId: _elementor_schema.z.number().optional().describe("The ID of the page to navigate to. Only provide after user has explicitly selected a page from the available pages list. When provided, confirmationMessage is REQUIRED."),
				createNew: _elementor_schema.z.boolean().optional().describe("Set to true ONLY when user explicitly requests to create a new page. When true, confirmationMessage is REQUIRED. Default is false."),
				newPageTitle: _elementor_schema.z.string().optional().describe("Title for the new page when createNew is true. Use what the user specified or default to \"New Page\"."),
				confirmationMessage: _elementor_schema.z.string().optional().describe(`REQUIRED when pageId or createNew is provided. A clear message shown to user before navigation. Example: "I'll open the 'Homepage' in Elementor editor so you can add a form widget. Ready to proceed?" Omit when just fetching available pages.`)
			},
			annotations: {
				title: "Navigate to Elementor Editor",
				destructiveHint: true
			},
			_meta: { [ANGIE_REQUIRED_RESOURCES]: [{
				uri: CAPABILITIES_DESCRIPTION_URI,
				whenToUse: "Read first for full capabilities and limitations guide"
			}, {
				uri: PAGES_LIST_RESOURCE_URI,
				whenToUse: "Always use this resource first to understand what pages are available before asking the user which page to edit"
			}] }
		}, async (params) => {
			try {
				if ((params.pageId || params.createNew) && !params.confirmationMessage) throw new Error("confirmationMessage is required when navigating to a page (pageId or createNew provided)");
				if (params.createNew) return await handleCreateAndNavigate(params);
				if (params.pageId) return await handleNavigateToPage(params.pageId);
				throw new Error("Either pageId or createNew must be provided. The pages list is available in the wp-pages-list resource.");
			} catch (error) {
				console.error("[Elementor Capabilities Server] navigation error:", error);
				throw new Error(`Error navigating to Elementor editor: ${error.message}`);
			}
		});
		return server;
	}
	async function handleCreateAndNavigate(params) {
		const title = params.newPageTitle || DEFAULT_PAGE_TITLE;
		const newPage = (await (0, _elementor_elementor_mcp_common.callWpApi)(WP_PAGES_ENDPOINT, "POST", {
			title,
			status: "draft",
			meta: { _elementor_edit_mode: ELEMENTOR_EDIT_MODE }
		})).data;
		if (!newPage || typeof newPage !== "object" || !("id" in newPage)) throw new Error("Invalid response from page creation API");
		return await handleNavigateToPage(newPage.id);
	}
	async function handleNavigateToPage(pageId) {
		if (!pageId || pageId <= 0) throw new Error("Invalid page ID");
		const page = (await (0, _elementor_elementor_mcp_common.callWpApi)(`${WP_PAGES_ENDPOINT}/${pageId}`, "GET")).data;
		if (!page || typeof page !== "object" || !("id" in page) || !("title" in page)) throw new Error(`Invalid page data received for page ID ${pageId}`);
		const editUrl = generateElementorEditUrl(pageId);
		if (!editUrl.startsWith(window.location.origin)) throw new Error("Invalid navigation URL");
		safeNavigateAfterResponse(editUrl);
		return { content: [{
			type: "text",
			text: JSON.stringify({
				success: true,
				message: `Navigating to Elementor editor for page: ${page.title.rendered}`,
				pageId: page.id,
				pageTitle: page.title.rendered,
				editUrl,
				nextSteps: "Once in the Elementor editor, you can use Elementor MCP tools for page settings, UI navigation, AI content generation, custom styling, and dynamic content."
			}, null, 2)
		}] };
	}
	function generateElementorEditUrl(pageId) {
		return `${window.location.origin}/wp-admin/post.php?post=${pageId}&action=${ELEMENTOR_EDIT_ACTION}`;
	}

//#endregion
//#region packages/apps/elementor-capabilities-mcp/src/index.ts
	var src_exports = /* @__PURE__ */ __exportAll({ init: () => init });
	function init() {
		const sdk = (0, _elementor_editor_mcp.getAngieSdk)();
		sdk.waitForReady().then(() => {
			const capabilitiesServer = createElementorCapabilitiesServer();
			sdk.registerServer({
				name: "elementor-capabilities",
				version: "2.0.0",
				description: "Elementor Capabilities Gateway",
				server: capabilitiesServer,
				capabilities: { tools: {} }
			});
			console.log("[Elementor Capabilities MCP] Module initialized");
		});
	}

//#endregion
//#region \0elementor-package-library-entry
	(window.elementorV2 = window.elementorV2 || {}).elementorCapabilitiesMcp = src_exports;

//#endregion
})(elementorV2.editorMcp, elementorV2.elementorMcpCommon, elementorV2.schema);
window.elementorV2.elementorCapabilitiesMcp?.init?.();
//# sourceMappingURL=elementor-capabilities-mcp.js.map