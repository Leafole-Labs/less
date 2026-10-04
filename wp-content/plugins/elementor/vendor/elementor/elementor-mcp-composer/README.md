# Elementor MCP Composer

Reusable Composer library that coordinates a **single unified Elementor MCP server** across multiple host plugins. Host plugins register WordPress abilities, contribute their slugs to a shared registry, and optionally mount a shared admin page.

The package follows the same multi-plugin version arbitration pattern as [`elementor/wp-one-package`](https://github.com/elementor/wp-one-package): when bundled by more than one plugin, the highest version wins.

## Requirements

- PHP 7.4+
- WordPress with the [Abilities API](https://make.wordpress.org/core/2025/11/10/abilities-api/) (`wp_register_ability`)
- [`wordpress/mcp-adapter`](https://github.com/WordPress/mcp-adapter) (pulled in automatically as a dependency)

## Installation

Add the package to your plugin's `composer.json`:

```json
{
  "require": {
    "elementor/elementor-mcp-composer": "^1.0"
  }
}
```

Then run `composer install`. The host plugin must load Composer's autoloader (`vendor/autoload.php`) on boot — same as any other Composer dependency.

No manual `require` of package files is needed. `runner.php` is registered via Composer `autoload.files` and hooks into `plugins_loaded` to register the package version and initialize the winning copy.

After initialization, these constants are available:

- `ELEMENTOR_MCP_COMPOSER_VERSION`
- `ELEMENTOR_MCP_COMPOSER_PATH`
- `ELEMENTOR_MCP_COMPOSER_URL`

## How it works

```text
Host plugin loads vendor/autoload.php
        │
        ▼
runner.php registers version on plugins_loaded (-20)
        │
        ▼
Versions picks highest registered version on plugins_loaded (-15)
        │
        ▼
Loader::init() defines constants and boots Server_Bootstrap
        │
        ▼
Server_Bootstrap creates one MCP server from Registry slugs
```

Each host plugin is responsible for:

1. **Registering abilities** via `wp_register_ability()` (the actual tool/resource implementations).
2. **Contributing slugs** to the shared `Registry` so the unified server exposes them.
3. **Mounting the admin page** (optional) by delegating to `Admin\Page` from the host's menu system.

---

## Registering tools and resources

### Step 1 — Register the ability

Register your ability with WordPress first. The slug you use here is what the MCP server will expose.

```php
wp_register_ability(
    'elementor/my-tool',
    [
        'label'       => 'My Tool',
        'description' => 'Does something useful.',
        'execute_callback' => [ $this, 'run_my_tool' ],
        // ... ability schema ...
    ]
);
```

Do this on the `wp_abilities_api_init` action (or your plugin's equivalent bootstrap hook).

### Step 2 — Contribute the slug to the shared registry

Tell the package to include that ability on the unified Elementor MCP server:

```php
use Elementor\MCP\Composer\Mcp\Registry;

$registry = Registry::instance();

// Single slug
$registry->register_tool( 'elementor/my-tool' );

// Or in bulk
$registry->register_tools( [
    'elementor/get-page-structure',
    'elementor/create-page',
] );

$registry->register_resources( [
    'elementor/style-best-practices',
    'elementor/global-classes-resource',
] );

$registry->register_prompts( [
    'elementor/my-prompt',
] );
```

Register slugs **early** — before `mcp_adapter_init` fires — so `Server_Bootstrap` can pick them up when creating the server.

### Step 3 — Extend via filters (optional)

Third parties can append slugs without touching the registry directly:

```php
add_filter( 'elementor/mcp/server/tools', function ( array $tools ): array {
    $tools[] = 'my-plugin/extra-tool';
    return $tools;
} );

add_filter( 'elementor/mcp/server/resources', function ( array $resources ): array {
    $resources[] = 'my-plugin/extra-resource';
    return $resources;
} );

add_filter( 'elementor/mcp/server/prompts', function ( array $prompts ): array {
    $prompts[] = 'my-plugin/extra-prompt';
    return $prompts;
} );
```

Filters are applied inside `Registry` getters — consumers should not re-apply them.

---

## Mounting the admin page

`Admin\Page` is **passive**: it exposes metadata and a render callback but does **not** register itself in any WordPress menu. The host plugin mounts it.

```php
use Elementor\MCP\Composer\Admin\Page;

$page = Page::instance();

// Available getters:
$page->get_slug();         // 'elementor-mcp'
$page->get_page_title();   // 'Elementor MCP'
$page->get_label();        // 'MCP'
$page->get_capability();   // 'manage_options'
$page->get_icon();         // 'eicon-code'
$page->render();            // outputs server status + client config JSON
```

### Example — Elementor Editor One menu

Elementor Core wraps the page in a menu item class and registers it on the Editor One menu hook:

```php
use Elementor\MCP\Composer\Admin\Page;
use Elementor\Core\Admin\Menu\Interfaces\Admin_Menu_Item_With_Page;

class My_Mcp_Menu implements Admin_Menu_Item_With_Page {

    private Page $page;

    public function __construct() {
        $this->page = Page::instance();
    }

    public function get_slug(): string {
        return $this->page->get_slug();
    }

    public function get_page_title() {
        return $this->page->get_page_title();
    }

    public function get_label(): string {
        return $this->page->get_label();
    }

    public function get_capability(): string {
        return $this->page->get_capability();
    }

    public function get_icon(): string {
        return $this->page->get_icon();
    }

    public function render() {
        $this->page->render();
    }

    // ... parent slug, position, visibility, etc.
}
```

Then register the menu item from the host module:

```php
add_action( 'elementor/editor-one/menu/register', function ( $menu_data_provider ) {
    $menu_data_provider->register_menu( new My_Mcp_Menu() );
} );
```

See [`elementor/modules/mcp/admin-menu-items/editor-one-mcp-menu.php`](https://github.com/elementor/elementor/blob/master/modules/mcp/admin-menu-items/editor-one-mcp-menu.php) for the production implementation.

The rendered page shows:

- **Registered abilities** — JSON snapshot of tools, resources, and prompts on the unified server.
- **MCP client config** — ready-to-paste Cursor / Claude Desktop settings using `@automattic/mcp-wordpress-remote`.

---

## Full consumer example

Minimal pattern for a host plugin module:

```php
use Elementor\MCP\Composer\Mcp\Registry;

class Module {

    public function __construct() {
        add_action( 'wp_abilities_api_init', [ $this, 'register_abilities' ] );
        add_action( 'init', [ $this, 'register_registry_slugs' ], 5 );
        add_action( 'my_plugin/admin_menu/register', [ $this, 'register_menu' ] );
    }

    public function register_abilities(): void {
        wp_register_ability( 'my-plugin/do-thing', [ /* ... */ ] );
    }

    public function register_registry_slugs(): void {
        Registry::instance()->register_tool( 'my-plugin/do-thing' );
    }

    public function register_menu( $menu_provider ): void {
        $menu_provider->register_menu( new My_Mcp_Menu() );
    }
}
```

Real-world reference: [`elementor/modules/mcp/module.php`](https://github.com/elementor/elementor/blob/master/modules/mcp/module.php).

---

## Development

### PHP Development

```bash
composer install
composer test      # PHPUnit
composer run lint  # PHPCS
```

### React Admin UI Development

The admin page UI is built with React, TypeScript, and webpack. Assets live in `assets/dev/` and compile to `assets/build/`.

**Requirements:**
- Node.js 24 (pinned in `.nvmrc`)

**Setup:**

```bash
npm install
```

**Available scripts:**

```bash
npm run build           # Production build (minified, no source maps)
npm run scripts:watch   # Development build with watch mode
npm run lint            # ESLint validation
npm run format          # Prettier auto-format
npm run test            # Jest unit tests
```

**Local development workflow:**

1. Run `npm run scripts:watch` in a terminal — webpack rebuilds on file changes
2. Edit files in `assets/dev/js/` and `assets/dev/css/`
3. Refresh the admin page in WordPress to see changes
4. Run `npm run lint` before committing

**Build system:**
- **Entry:** `assets/dev/js/mcp-page/index.tsx` + `assets/dev/css/mcp-page.css`
- **Output:** `assets/build/mcp-page.js`, `mcp-page.css`, `mcp-page.asset.php`
- **Tooling:** TypeScript, webpack 5, ESLint, Prettier, Jest
- **Design system:** React + standard UI libraries
- **i18n:** `@wordpress/i18n` for translations

**Note:** Elementor's private packages (`@elementor/ui`, `@elementor/icons`) require authentication to Google Artifact Registry and are not included by default.

**Coding standards:**
- WordPress spacing style (spaces inside parens, brackets, braces)
- Tabs for indentation
- Trailing commas always
- React Hooks rules enforced
- No unused imports/variables

**Note:** Built assets (`assets/build/`) are **not committed** to git — they're generated in CI and included in release packages.

## License

Proprietary — Elementor.
