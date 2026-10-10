<?php
/**
 * LESS 26.2 — Cloy.
 *
 * Integrates the three Cloy features on top of the existing LESS/WordPress
 * infrastructure:
 *
 * 1. Native admin theme (light / dark / auto) stored per user.
 * 2. Enhanced media library presentation (same queries, storage and flows).
 * 3. Command palette (Ctrl/Cmd+K) built from real admin routes and caps.
 *
 * No storage format is changed and no upload/selection/deletion flow is
 * replaced. Everything here reuses core hooks, user options, the Settings
 * API surface and the existing media queries.
 *
 * @package LESS
 * @since 26.2
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Cloy release identifier.
 *
 * @since 26.2
 */
if ( ! defined( 'LS_CLOY_VERSION' ) ) {
	define( 'LS_CLOY_VERSION', '26.2' );
}

/* ---------------------------------------------------------------------------
 * 1. Admin theme (light / dark / auto)
 * ------------------------------------------------------------------------- */

/**
 * Returns the valid admin theme identifiers.
 *
 * @since 26.2
 *
 * @return string[]
 */
function ls_cloy_admin_theme_options() {
	return array( 'light', 'dark', 'auto' );
}

/**
 * Sanitizes an admin theme value.
 *
 * @since 26.2
 *
 * @param mixed $value Raw value.
 * @return string One of light|dark|auto. Falls back to auto.
 */
function ls_cloy_sanitize_admin_theme( $value ) {
	if ( is_string( $value ) ) {
		$value = strtolower( trim( $value ) );
		if ( in_array( $value, ls_cloy_admin_theme_options(), true ) ) {
			return $value;
		}
	}

	return 'auto';
}

/**
 * Returns the stored admin theme preference for a user.
 *
 * Stored as a per-user option (user meta), the same persistence mechanism
 * used by media_library_mode and other per-user admin preferences. No
 * schema change is required.
 *
 * @since 26.2
 *
 * @param int $user_id Optional. User ID. Default current user.
 * @return string One of light|dark|auto.
 */
function ls_cloy_get_admin_theme( $user_id = 0 ) {
	$stored = get_user_option( 'ls_admin_theme', $user_id );

	return ls_cloy_sanitize_admin_theme( $stored );
}

/**
 * Prints the data-ls-theme attribute inside the admin <html> tag.
 *
 * Hooked to admin_xml_ns, which fires inside the <html> element printed by
 * _wp_admin_html_begin(). Values:
 *
 * - light / dark: applied directly.
 * - auto: resolved client-side through a matchMedia style rule, so the OS
 *   preference is honored without a server round-trip.
 *
 * @since 26.2
 */
function ls_cloy_print_html_theme_attribute() {
	if ( ! is_user_logged_in() ) {
		echo ' data-ls-theme="auto"';
		return;
	}

	echo ' data-ls-theme="' . esc_attr( ls_cloy_get_admin_theme() ) . '"';
}
add_action( 'admin_xml_ns', 'ls_cloy_print_html_theme_attribute' );

/**
 * Adds the resolved theme class to the admin body classes.
 *
 * The class is a progressive enhancement hook; the authoritative selector
 * is html[data-ls-theme]. For "auto" the server cannot know the OS
 * preference, so it adds ls-theme-auto and the stylesheet resolves it with
 * a prefers-color-scheme rule.
 *
 * @since 26.2
 *
 * @param string $classes Space-separated body classes.
 * @return string
 */
function ls_cloy_admin_body_class( $classes ) {
	$theme = is_user_logged_in() ? ls_cloy_get_admin_theme() : 'auto';

	if ( 'dark' === $theme ) {
		$extra = 'ls-theme-dark';
	} elseif ( 'light' === $theme ) {
		$extra = 'ls-theme-light';
	} else {
		$extra = 'ls-theme-auto';
	}

	return trim( $classes . ' ' . $extra );
}
add_filter( 'admin_body_class', 'ls_cloy_admin_body_class' );

/**
 * Prints the pre-paint theme script in the admin <head>.
 *
 * Runs synchronously before the body is parsed, so the stored preference
 * (mirrored to localStorage by the footer script) is applied before first
 * paint and no wrong-theme flash occurs. Falls back to the server-rendered
 * attribute when nothing valid is stored locally.
 *
 * @since 26.2
 */
function ls_cloy_print_paint_script() {
	if ( ! is_user_logged_in() ) {
		return;
	}
	?>
	<script>
	try {
		var lsCloyStored = null;
		try { lsCloyStored = window.localStorage ? window.localStorage.getItem( 'lsCloyTheme' ) : null; } catch ( lsCloyStorageError ) { lsCloyStored = null; }
		if ( lsCloyStored === 'light' || lsCloyStored === 'dark' || lsCloyStored === 'auto' ) {
			document.documentElement.setAttribute( 'data-ls-theme', lsCloyStored );
		}
	} catch ( lsCloyPaintError ) { /* Keep the server-rendered theme. */ }
	</script>
	<?php
}
add_action( 'admin_head', 'ls_cloy_print_paint_script', 0 );

/**
 * Renders the interface theme picker on the profile screen.
 *
 * Hooked after the color-scheme picker so it sits in the same Personal
 * Options section and follows the same markup conventions.
 *
 * @since 26.2
 *
 * @param int $user_id User ID being edited.
 */
function ls_cloy_profile_theme_field( $user_id ) {
	$current = ls_cloy_get_admin_theme( $user_id );
	$labels  = array(
		'light' => __( 'Light' ),
		'dark'  => __( 'Dark' ),
		'auto'  => __( 'Automatic (follows system)' ),
	);
	?>
	<h3 style="margin:1em 0 0.5em;"><?php esc_html_e( 'Interface theme' ); ?></h3>
	<p class="description" id="ls-cloy-theme-description">
		<?php esc_html_e( 'Choose how the LESS administration looks. Automatic follows your operating system preference.' ); ?>
	</p>
	<div role="radiogroup" aria-describedby="ls-cloy-theme-description" style="display:flex;gap:1.25em;flex-wrap:wrap;margin-top:0.5em;">
		<?php foreach ( $labels as $value => $label ) : ?>
			<label for="ls_cloy_admin_theme_<?php echo esc_attr( $value ); ?>" style="display:inline-flex;align-items:center;gap:0.4em;">
				<input
					type="radio"
					name="ls_cloy_admin_theme"
					id="ls_cloy_admin_theme_<?php echo esc_attr( $value ); ?>"
					value="<?php echo esc_attr( $value ); ?>"
					<?php checked( $current, $value ); ?>
				/>
				<?php echo esc_html( $label ); ?>
			</label>
		<?php endforeach; ?>
	</div>
	<?php
}
add_action( 'admin_color_scheme_picker', 'ls_cloy_profile_theme_field' );

/**
 * Saves the interface theme preference from the profile screen.
 *
 * Runs inside the core profile-update flow, which already verifies the
 * update-user nonce and the edit_user capability for the target user.
 *
 * @since 26.2
 *
 * @param int $user_id User ID being edited.
 */
function ls_cloy_save_profile_theme( $user_id ) {
	if ( ! current_user_can( 'edit_user', $user_id ) ) {
		return;
	}

	if ( ! isset( $_POST['ls_cloy_admin_theme'] ) ) {
		return;
	}

	$theme = ls_cloy_sanitize_admin_theme( wp_unslash( $_POST['ls_cloy_admin_theme'] ) );
	update_user_option( $user_id, 'ls_admin_theme', $theme, true );
}
add_action( 'personal_options_update', 'ls_cloy_save_profile_theme' );
add_action( 'edit_user_profile_update', 'ls_cloy_save_profile_theme' );

/**
 * Persists the theme preference via AJAX (admin-bar quick switch).
 *
 * @since 26.2
 */
function ls_cloy_ajax_set_theme() {
	check_ajax_referer( 'ls-cloy-theme', 'nonce' );

	if ( ! is_user_logged_in() ) {
		wp_send_json_error( array( 'message' => __( 'You must be logged in.' ) ), 403 );
	}

	$theme = isset( $_POST['theme'] )
		? ls_cloy_sanitize_admin_theme( wp_unslash( $_POST['theme'] ) )
		: 'auto';

	update_user_option( get_current_user_id(), 'ls_admin_theme', $theme, true );

	wp_send_json_success( array( 'theme' => $theme ) );
}
add_action( 'wp_ajax_ls_cloy_set_theme', 'ls_cloy_ajax_set_theme' );

/**
 * Adds the quick theme switch node to the admin bar.
 *
 * A single node that cycles light → dark → auto. The full control lives on
 * the profile screen; this is the convenient toggle required by Cloy.
 *
 * @since 26.2
 *
 * @param WP_Admin_Bar $wp_admin_bar Admin bar instance.
 */
function ls_cloy_admin_bar_theme_node( $wp_admin_bar ) {
	if ( ! is_user_logged_in() || ! is_admin_bar_showing() ) {
		return;
	}

	$theme = ls_cloy_get_admin_theme();
	$labels = array(
		'light' => __( 'Light' ),
		'dark'  => __( 'Dark' ),
		'auto'  => __( 'Auto' ),
	);

	$wp_admin_bar->add_node(
		array(
			'id'     => 'ls-cloy-theme',
			'parent' => 'top-secondary',
			'title'  => sprintf(
				/* translators: %s: current interface theme name. */
				__( 'Theme: %s' ),
				isset( $labels[ $theme ] ) ? $labels[ $theme ] : $labels['auto']
			),
			'href'   => admin_url( 'profile.php#ls-cloy-theme-description' ),
			'meta'   => array(
				'title' => __( 'Switch interface theme (light, dark, automatic)' ),
				'class' => 'ls-cloy-theme-node',
			),
		)
	);
}
add_action( 'admin_bar_menu', 'ls_cloy_admin_bar_theme_node', 70 );

/**
 * Adds the command palette entry to the admin bar for discoverability.
 *
 * @since 26.2
 *
 * @param WP_Admin_Bar $wp_admin_bar Admin bar instance.
 */
function ls_cloy_admin_bar_palette_node( $wp_admin_bar ) {
	if ( ! is_user_logged_in() || ! is_admin_bar_showing() || ! is_admin() ) {
		return;
	}

	$wp_admin_bar->add_node(
		array(
			'id'     => 'ls-cloy-palette',
			'parent' => 'top-secondary',
			'title'  => __( 'Commands' ),
			'href'   => '#ls-cloy-palette',
			'meta'   => array(
				'title' => __( 'Open the command palette (Ctrl+K or Cmd+K)' ),
				'class' => 'ls-cloy-palette-node',
			),
		)
	);
}
add_action( 'admin_bar_menu', 'ls_cloy_admin_bar_palette_node', 71 );

/* ---------------------------------------------------------------------------
 * 2. Command palette data
 * ------------------------------------------------------------------------- */

/**
 * Builds the command palette entries for the current user.
 *
 * Every entry maps to a real admin route and is only included when the
 * current user holds the capability that guards that screen. Nothing here
 * bypasses authorization; the target screens enforce their own checks again
 * on load.
 *
 * @since 26.2
 *
 * @return array[] List of command arrays with id, title, group, url and hint.
 */
function ls_cloy_get_palette_commands() {
	$candidates = array(
		array(
			'id'       => 'dashboard',
			'title'    => __( 'Open Dashboard' ),
			'group'    => __( 'Go to' ),
			'url'      => 'index.php',
			'cap'      => 'read',
			'keywords' => 'home panel initial',
		),
		array(
			'id'       => 'posts',
			'title'    => __( 'View Posts' ),
			'group'    => __( 'Go to' ),
			'url'      => 'edit.php',
			'cap'      => 'edit_posts',
			'keywords' => 'blog publications list',
		),
		array(
			'id'       => 'new-post',
			'title'    => __( 'Create Post' ),
			'group'    => __( 'Create' ),
			'url'      => 'post-new.php',
			'cap'      => 'edit_posts',
			'keywords' => 'new write article publication',
		),
		array(
			'id'       => 'pages',
			'title'    => __( 'View Pages' ),
			'group'    => __( 'Go to' ),
			'url'      => 'edit.php?post_type=page',
			'cap'      => 'edit_pages',
			'keywords' => 'list static',
		),
		array(
			'id'       => 'new-page',
			'title'    => __( 'Create Page' ),
			'group'    => __( 'Create' ),
			'url'      => 'post-new.php?post_type=page',
			'cap'      => 'edit_pages',
			'keywords' => 'new write static',
		),
		array(
			'id'       => 'media',
			'title'    => __( 'Open Media Library' ),
			'group'    => __( 'Go to' ),
			'url'      => 'upload.php',
			'cap'      => 'upload_files',
			'keywords' => 'images files attachments library',
		),
		array(
			'id'       => 'add-media',
			'title'    => __( 'Upload Media' ),
			'group'    => __( 'Create' ),
			'url'      => 'media-new.php',
			'cap'      => 'upload_files',
			'keywords' => 'new upload add file image',
		),
		array(
			'id'       => 'comments',
			'title'    => __( 'View Comments' ),
			'group'    => __( 'Go to' ),
			'url'      => 'edit-comments.php',
			'cap'      => 'edit_posts',
			'keywords' => 'moderate discussion',
		),
		array(
			'id'       => 'themes',
			'title'    => __( 'Manage Themes' ),
			'group'    => __( 'Manage' ),
			'url'      => 'themes.php',
			'cap'      => 'edit_theme_options',
			'keywords' => 'appearance templates',
		),
		array(
			'id'       => 'site-editor',
			'title'    => __( 'Open Site Editor' ),
			'group'    => __( 'Manage' ),
			'url'      => 'site-editor.php',
			'cap'      => 'edit_theme_options',
			'keywords' => 'appearance design full site editing',
		),
		array(
			'id'       => 'plugins',
			'title'    => __( 'Manage Plugins' ),
			'group'    => __( 'Manage' ),
			'url'      => 'plugins.php',
			'cap'      => 'activate_plugins',
			'keywords' => 'extensions addons',
		),
		array(
			'id'       => 'users',
			'title'    => __( 'View Users' ),
			'group'    => __( 'Manage' ),
			'url'      => 'users.php',
			'cap'      => 'list_users',
			'keywords' => 'accounts people members',
		),
		array(
			'id'       => 'profile',
			'title'    => __( 'Open My Profile' ),
			'group'    => __( 'Go to' ),
			'url'      => 'profile.php',
			'cap'      => 'read',
			'keywords' => 'account personal theme password',
		),
		array(
			'id'       => 'tools',
			'title'    => __( 'Open Tools' ),
			'group'    => __( 'Manage' ),
			'url'      => 'tools.php',
			'cap'      => 'edit_posts',
			'keywords' => 'import export utilities',
		),
		array(
			'id'       => 'settings',
			'title'    => __( 'Open Settings' ),
			'group'    => __( 'Manage' ),
			'url'      => 'options-general.php',
			'cap'      => 'manage_options',
			'keywords' => 'general configuration options',
		),
		array(
			'id'       => 'less-settings',
			'title'    => __( 'Open LESS Settings' ),
			'group'    => __( 'Manage' ),
			'url'      => 'options-general.php?page=options-less',
			'cap'      => 'manage_options',
			'keywords' => 'less leafole configuration revisions',
		),
		array(
			'id'       => 'updates',
			'title'    => __( 'View Updates' ),
			'group'    => __( 'Manage' ),
			'url'      => 'update-core.php',
			'cap'      => 'update_core',
			'keywords' => 'upgrade core version',
		),
	);

	/**
	 * Filters the command palette entries.
	 *
	 * Entries added here must point to real admin routes and declare the
	 * capability guarding them; ls_cloy_get_palette_commands() drops
	 * anything the current user may not access.
	 *
	 * @since 26.2
	 *
	 * @param array[] $candidates Candidate command arrays.
	 */
	$candidates = apply_filters( 'ls_cloy_palette_commands', $candidates );

	$commands = array();

	foreach ( $candidates as $candidate ) {
		if ( ! is_array( $candidate ) ) {
			continue;
		}

		if ( empty( $candidate['id'] ) || empty( $candidate['title'] ) || empty( $candidate['url'] ) ) {
			continue;
		}

		$cap = isset( $candidate['cap'] ) ? $candidate['cap'] : 'read';
		if ( ! current_user_can( $cap ) ) {
			continue;
		}

		$commands[] = array(
			'id'       => sanitize_key( $candidate['id'] ),
			'title'    => (string) $candidate['title'],
			'group'    => isset( $candidate['group'] ) ? (string) $candidate['group'] : __( 'Go to' ),
			'url'      => admin_url( $candidate['url'] ),
			'hint'     => isset( $candidate['hint'] ) ? (string) $candidate['hint'] : '',
			'keywords' => isset( $candidate['keywords'] ) ? (string) $candidate['keywords'] : '',
		);
	}

	return array_values( $commands );
}

/* ---------------------------------------------------------------------------
 * 3. Asset registration (theme + palette + media enhancements)
 * ------------------------------------------------------------------------- */

/**
 * Returns the Cloy stylesheet URL.
 *
 * @since 26.2
 *
 * @return string
 */
function ls_cloy_style_url() {
	return trailingslashit( get_site_url( null, LS_ADMIN_DIR . '/', 'admin' ) ) . 'css/ls-cloy.css';
}

/**
 * Returns a Cloy script URL.
 *
 * @since 26.2
 *
 * @param string $handle Script basename without extension.
 * @return string
 */
function ls_cloy_script_url( $handle ) {
	return trailingslashit( get_site_url( null, LS_ADMIN_DIR . '/', 'admin' ) ) . 'js/' . $handle . '.js';
}

/**
 * Registers and enqueues the Cloy admin assets.
 *
 * The stylesheet loads after the color scheme so theme tokens win without
 * duplicating core rules. Scripts are vanilla, dependency-free and scoped
 * to the screens that need them.
 *
 * @since 26.2
 *
 * @param string $hook_suffix Current admin page hook suffix.
 */
function ls_cloy_enqueue_admin_assets( $hook_suffix ) {
	wp_register_style(
		'ls-cloy',
		ls_cloy_style_url(),
		array( 'colors', 'common' ),
		LS_CLOY_VERSION
	);
	wp_enqueue_style( 'ls-cloy' );

	wp_register_script(
		'ls-cloy-theme',
		ls_cloy_script_url( 'ls-cloy-theme' ),
		array(),
		LS_CLOY_VERSION,
		true
	);
	wp_enqueue_script( 'ls-cloy-theme' );

	wp_localize_script(
		'ls-cloy-theme',
		'LSCloyTheme',
		array(
			'theme'   => is_user_logged_in() ? ls_cloy_get_admin_theme() : 'auto',
			'ajaxUrl' => admin_url( 'admin-ajax.php' ),
			'nonce'   => wp_create_nonce( 'ls-cloy-theme' ),
			'labels'  => array(
				'light' => __( 'Light' ),
				'dark'  => __( 'Dark' ),
				'auto'  => __( 'Auto' ),
			),
		)
	);

	// Command palette: every admin screen, commands already capability-filtered.
	ls_cloy_enqueue_palette_assets();

	// Media enhancements: media screens only, on top of existing flows.
	$screen = function_exists( 'get_current_screen' ) ? get_current_screen() : null;
	$base   = ( $screen && isset( $screen->base ) ) ? $screen->base : '';

	if ( in_array( $base, array( 'upload', 'media' ), true ) || in_array( $hook_suffix, array( 'upload.php', 'media-new.php' ), true ) ) {
		wp_register_script(
			'ls-cloy-media',
			ls_cloy_script_url( 'ls-cloy-media' ),
			array(),
			LS_CLOY_VERSION,
			true
		);
		wp_enqueue_script( 'ls-cloy-media' );

		wp_localize_script(
			'ls-cloy-media',
			'LSCloyMedia',
			array(
				'texts' => array(
					'clearFilters' => __( 'Clear search and filters' ),
					'announce'     => __( 'Media items shown' ),
				),
			)
		);
	}
}
add_action( 'admin_enqueue_scripts', 'ls_cloy_enqueue_admin_assets', 20 );

/**
 * Whether the native WordPress command palette owns Ctrl/Cmd+K on the
 * current admin screen.
 *
 * The block editor registers its own primary+k shortcut through the
 * core/commands store and the Cloy palette deliberately integrates with it
 * there (its commands are registered into the native palette and the Cloy
 * modal stays closed). On every other admin screen the Cloy palette is the
 * exclusive owner of the shortcut.
 *
 * Relies on WP_Screen::is_block_editor(), which the block-editor templates
 * (edit-form-blocks.php, site-editor.php, widgets-form-blocks.php) set
 * before admin-header.php fires admin_enqueue_scripts.
 *
 * @since 26.2
 *
 * @return bool True on block-editor screens, false everywhere else.
 */
function ls_cloy_native_palette_owns_shortcut() {
	$screen = function_exists( 'get_current_screen' ) ? get_current_screen() : null;

	if ( $screen instanceof WP_Screen && $screen->is_block_editor() ) {
		return true;
	}

	return false;
}

/**
 * Neutralizes the native command palette on screens owned by Cloy.
 *
 * Origin of the conflict: core enqueues the native palette on every admin
 * screen (wp_enqueue_command_palette_assets on admin_enqueue_scripts) and
 * its CommandMenu component registers a *global* primary+k shortcut
 * (bindGlobal) that toggles the native palette — even inside plain inputs —
 * while adding a duplicate admin-bar entry labeled Ctrl+K/⌘K
 * (wp_admin_bar_command_palette_menu). Pressing the shortcut therefore
 * opened the native palette in parallel with (or instead of) the Cloy
 * palette.
 *
 * This removes the native registration paths — the enqueue (scripts, styles
 * and the initializeCommandPalette inline bootstrap) and the duplicate
 * admin-bar node — on non-block-editor screens only. Block-editor screens
 * are left untouched so the editor keeps its own palette (which already
 * carries the Cloy commands) and unrelated editor shortcuts such as the
 * RichText link shortcut (primary+k inside the canvas) keep working.
 *
 * Runs at priority 1, before the native enqueue (priority 10) and the Cloy
 * enqueue (priority 20).
 *
 * @since 26.2
 */
function ls_cloy_neutralize_native_palette_shortcut() {
	if ( ls_cloy_native_palette_owns_shortcut() ) {
		return;
	}

	remove_action( 'admin_enqueue_scripts', 'wp_enqueue_command_palette_assets' );
	wp_dequeue_script( 'wp-commands' );
	wp_dequeue_script( 'wp-core-commands' );
	wp_dequeue_style( 'wp-commands' );
	remove_action( 'admin_bar_menu', 'wp_admin_bar_command_palette_menu', 55 );
}
add_action( 'admin_enqueue_scripts', 'ls_cloy_neutralize_native_palette_shortcut', 1 );

/**
 * Registers and localizes the command palette script.
 *
 * Factored out so both the standard admin and the Customizer (which never
 * fires admin_enqueue_scripts) can load the palette from the same data.
 *
 * @since 26.2
 */
function ls_cloy_enqueue_palette_assets() {
	wp_register_script(
		'ls-cloy-palette',
		ls_cloy_script_url( 'ls-cloy-palette' ),
		array(),
		LS_CLOY_VERSION,
		true
	);
	wp_enqueue_script( 'ls-cloy-palette' );

	wp_localize_script(
		'ls-cloy-palette',
		'LSCloyPalette',
		array(
			'commands' => ls_cloy_get_palette_commands(),
			'texts'    => array(
				'title'       => __( 'Command palette' ),
				'placeholder' => __( 'Type a command…' ),
				'empty'       => __( 'No matching commands.' ),
				'hint'        => __( 'Up/Down to navigate · Enter to open · Esc to close' ),
			),
		)
	);
}

/**
 * Loads the Cloy palette inside the Customizer.
 *
 * customize.php resets the script queue and only fires
 * customize_controls_enqueue_scripts, so the palette needs its own hook.
 * There is no admin bar in the Customizer; the shortcut is the entry point.
 *
 * @since 26.2
 */
function ls_cloy_enqueue_customizer_assets() {
	if ( ! is_user_logged_in() ) {
		return;
	}

	wp_register_style(
		'ls-cloy',
		ls_cloy_style_url(),
		array(),
		LS_CLOY_VERSION
	);
	wp_enqueue_style( 'ls-cloy' );

	ls_cloy_enqueue_palette_assets();
}
add_action( 'customize_controls_enqueue_scripts', 'ls_cloy_enqueue_customizer_assets', 20 );

/**
 * Enqueues the Cloy theme stylesheet on the login screen.
 *
 * Logged-out visitors get "auto" (OS preference via media query); logged-in
 * users with a remember-me session keep their stored preference through the
 * paint script below.
 *
 * @since 26.2
 */
function ls_cloy_enqueue_login_assets() {
	wp_register_style(
		'ls-cloy',
		ls_cloy_style_url(),
		array( 'login' ),
		LS_CLOY_VERSION
	);
	wp_enqueue_style( 'ls-cloy' );
}
add_action( 'login_enqueue_scripts', 'ls_cloy_enqueue_login_assets', 20 );

/**
 * Pre-paint theme script for the login screen.
 *
 * @since 26.2
 */
function ls_cloy_login_paint_script() {
	?>
	<script>
	try {
		var lsCloyTheme = 'auto';
		try { lsCloyTheme = window.localStorage ? ( window.localStorage.getItem( 'lsCloyTheme' ) || 'auto' ) : 'auto'; } catch ( lsCloyLoginStorageError ) { lsCloyTheme = 'auto'; }
		if ( lsCloyTheme !== 'light' && lsCloyTheme !== 'dark' && lsCloyTheme !== 'auto' ) { lsCloyTheme = 'auto'; }
		document.documentElement.setAttribute( 'data-ls-theme', lsCloyTheme );
	} catch ( lsCloyLoginPaintError ) { /* Keep the default theme. */ }
	</script>
	<?php
}
add_action( 'login_head', 'ls_cloy_login_paint_script', 0 );
