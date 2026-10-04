<?php
/**
 * LESS runtime.
 *
 * Loads after the core plugin API is available and wires LESS architecture:
 * configuration resolution, feature policy (XML-RPC, pingbacks, trackbacks,
 * Gravatar), revision limits, local avatars, and administrative helpers.
 *
 * @package LESS
 * @since 0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * ---------------------------------------------------------------------------
 * Configuration resolution
 * ---------------------------------------------------------------------------
 */

/**
 * Resolves an effective LESS configuration value.
 *
 * Persisted overrides live in the database (the `ls_settings` option).
 * Defaults are defined in ls-config.php.
 *
 * @since 0.1
 *
 * @param string $key     Configuration key (e.g. 'less_max_revisions').
 * @param mixed  $default Optional default to use when no override exists.
 * @return mixed Resolved value.
 */
function ls_config_get( $key, $default = null ) {
	$defaults = ls_get_config_defaults();

	if ( null === $default ) {
		$default = isset( $defaults[ $key ] ) ? $defaults[ $key ] : null;
	}

	$overrides = get_option( 'ls_settings' );

	if ( ! is_array( $overrides ) ) {
		$overrides = array();
	}

	if ( array_key_exists( $key, $overrides ) ) {
		return $overrides[ $key ];
	}

	return $default;
}

/**
 * Returns the maximum number of revisions kept per post.
 *
 * Falls back to the LESS_MAX_REVISIONS default when no override is stored.
 * 0 disables revisions for new content.
 *
 * @since 0.1
 *
 * @return int
 */
function ls_get_max_revisions() {
	$value = (int) ls_config_get( 'less_max_revisions', (int) LESS_MAX_REVISIONS );

	// Sanity bound: keep values sane while still allowing 0 to disable revisions.
	if ( $value < 0 ) {
		$value = 0;
	}
	if ( $value > 1000 ) {
		$value = 1000;
	}

	return $value;
}

/**
 * Presents the resolved value for a structural (non-configurable) feature.
 *
 * These reflect permanent LESS architecture decisions. They are not toggles.
 *
 * @since 0.1
 *
 * @param string $feature Feature key (xmlrpc, pingbacks, trackbacks, gravatar).
 * @return bool
 */
function ls_is_feature_enabled( $feature ) {
	$structural = ls_get_structural_config();
	return ! empty( $structural[ $feature ] );
}

/**
 * ---------------------------------------------------------------------------
 * Revisions policy
 * ---------------------------------------------------------------------------
 */

/**
 * Enforces the LESS revisions limit.
 *
 * @since 0.1
 *
 * @param int     $num  Revision count determined so far.
 * @param WP_Post $post Post object.
 * @return int Number of revisions to keep.
 */
function ls_filter_revisions_to_keep( $num, $post ) {
	if ( empty( $post->post_type ) || ! post_type_supports( $post->post_type, 'revisions' ) ) {
		return $num;
	}

	return ls_get_max_revisions();
}
add_filter( 'wp_revisions_to_keep', 'ls_filter_revisions_to_keep', 9, 2 );

/**
 * ---------------------------------------------------------------------------
 * Feature policy: XML-RPC, pingbacks and trackbacks
 * ---------------------------------------------------------------------------
 */

/**
 * Disables the XML-RPC enabled flag unconditionally.
 *
 * @since 0.1
 */
add_filter( 'xmlrpc_enabled', '__return_false' );

/**
 * Disables XML-RPC methods (pingback discovery and pingback submission).
 *
 * @since 0.1
 *
 * @param array $methods Registered XML-RPC methods.
 * @return array
 */
function ls_disable_xmlrpc_pingback_methods( $methods ) {
	unset( $methods['pingback.ping'] );
	unset( $methods['pingback.extensions.getPingbacks'] );
	return $methods;
}
add_filter( 'xmlrpc_methods', 'ls_disable_xmlrpc_pingback_methods' );

/**
 * Stops the automated pingback/trackback notification pipeline.
 *
 * @since 0.1
 */
remove_action( 'do_all_pings', 'do_all_pingbacks', 10 );
remove_action( 'do_all_pings', 'do_all_trackbacks', 10 );

/**
 * Removes the X-Pingback response header.
 *
 * @since 0.1
 *
 * @param array $headers Response headers.
 * @return array
 */
function ls_remove_x_pingback_header( $headers ) {
	unset( $headers['X-Pingback'] );
	return $headers;
}
add_filter( 'wp_headers', 'ls_remove_x_pingback_header' );

/**
 * Removes RSD (Really Simple Discovery) markup from the site head.
 *
 * RSD advertises the (removed) XML-RPC endpoint.
 *
 * @since 0.1
 */
remove_action( 'wp_head', 'rsd_link' );

/**
 * Neutralizes the pingback endpoint URL.
 *
 * The value would otherwise advertise the removed xmlrpc.php endpoint.
 *
 * @since 0.1
 *
 * @param string $output URL returned by get_bloginfo().
 * @param string $show   Type of information requested.
 * @return string
 */
function ls_neutralize_pingback_url( $output, $show ) {
	if ( 'pingback_url' === $show ) {
		return '';
	}

	return $output;
}
add_filter( 'bloginfo_url', 'ls_neutralize_pingback_url', 10, 2 );

/**
 * Forces closed default ping status for new content.
 *
 * The LESS platform does not support pingbacks or trackbacks.
 *
 * @since 0.1
 *
 * @return string
 */
function ls_default_ping_status() {
	return 'closed';
}
add_filter( 'pre_option_default_ping_status', 'ls_default_ping_status' );

/**
 * Forces the default pingback flag to off.
 *
 * @since 0.1
 *
 * @return int
 */
function ls_default_pingback_flag() {
	return 0;
}
add_filter( 'pre_option_default_pingback_flag', 'ls_default_pingback_flag' );

/**
 * ---------------------------------------------------------------------------
 * Avatars: no external Gravatar dependency
 * ---------------------------------------------------------------------------
 */

/**
 * Returns the local default avatar URL used by LESS.
 *
 * @since 0.1
 *
 * @return string
 */
function ls_avatar_default_url() {
	return includes_url( 'images/less-default-avatar.svg' );
}

/**
 * Forces all avatars to resolve to the local LESS default so that no
 * external Gravatar request is ever made.
 *
 * @since 0.1
 *
 * @param array            $args        Avatar arguments.
 * @param int|string|object $id_or_email Identifier for the avatar subject.
 * @return array
 */
function ls_force_local_avatar_data( $args, $id_or_email ) {
	$args['url'] = ls_avatar_default_url();

	return $args;
}
add_filter( 'pre_get_avatar_data', 'ls_force_local_avatar_data', 10, 2 );

/**
 * Builds the avatar image markup with the local default when requested
 * directly through get_avatar().
 *
 * @since 0.1
 *
 * @param string|false     $avatar       Avatar markup or false.
 * @param int|string|object $id_or_email Identifier for the avatar subject.
 * @param array            $args         Arguments passed to get_avatar().
 * @return string Avatar image markup.
 */
function ls_force_local_avatar_markup( $avatar, $id_or_email, $args ) {
	if ( false !== $avatar ) {
		return $avatar;
	}

	$size  = isset( $args['size'] ) ? (int) $args['size'] : 96;
	$alt   = isset( $args['alt'] ) ? $args['alt'] : '';
	$class = array( 'avatar', 'avatar-' . $size, 'photo' );

	if ( isset( $args['class'] ) ) {
		if ( is_array( $args['class'] ) ) {
			$class = array_merge( $class, $args['class'] );
		} else {
			$class[] = $args['class'];
		}
	}

	return sprintf(
		"<img alt='%s' src='%s' srcset='%s' class='%s' height='%d' width='%d' loading='lazy' decoding='async' />",
		esc_attr( $alt ),
		esc_url( ls_avatar_default_url() ),
		esc_url( ls_avatar_default_url() ) . ' 2x',
		esc_attr( implode( ' ', $class ) ),
		$size,
		$size
	);
}
add_filter( 'pre_get_avatar', 'ls_force_local_avatar_markup', 10, 3 );

/**
 * ---------------------------------------------------------------------------
 * Identity: generator meta, version, update independence
 * ---------------------------------------------------------------------------
 */

/**
 * Replaces the generator meta with the LESS identity.
 *
 * @since 0.1
 *
 * @param string $gen        The generator meta tag.
 * @param string $type       The type of generator.
 * @return string
 */
function ls_identity_generator( $gen, $type = '' ) {
	switch ( $type ) {
		case 'html':
		case 'xhtml':
			return '<meta name="generator" content="' . esc_attr( LS_NAME . ' ' . LS_VERSION ) . '" />';
		case 'atom':
			return '<generator uri="' . esc_url( LS_WEBSITE ) . '">' . esc_html( LS_NAME . ' ' . LS_VERSION ) . '</generator>';
		case 'rss2':
		case 'rdf':
		case 'rss':
			return '<generator>' . esc_html( LS_NAME . ' ' . LS_VERSION ) . '</generator>';
		default:
			return $gen;
	}
}
add_filter( 'the_generator', 'ls_identity_generator', 10, 2 );

/**
 * Prevents LESS from phoning home to external update services for core.
 *
 * LESS is an independent platform; core update checks against external
 * services are disabled. Plugin and theme ecosystems remain functional.
 *
 * @since 0.1
 *
 * @param object|false $value Existing update check data.
 * @return object
 */
function ls_mark_core_updates_disabled( $value ) {
	if ( is_object( $value ) ) {
		return $value;
	}

	return (object) array(
		'last_checked'    => time(),
		'version_checked' => LS_VERSION,
		'updates'         => array(),
	);
}
add_filter( 'pre_site_transient_update_core', 'ls_mark_core_updates_disabled' );
add_filter( 'pre_transient_update_core', 'ls_mark_core_updates_disabled' );

/**
 * Disables automatic core updates.
 *
 * @since 0.1
 */
add_filter( 'auto_update_core', '__return_false' );
add_filter( 'auto_update_core_minor', '__return_false' );
add_filter( 'auto_update_core_major', '__return_false' );
add_filter( 'auto_update_translation', '__return_false' );

/**
 * ---------------------------------------------------------------------------
 * Administrative helpers
 * ---------------------------------------------------------------------------
 */

/**
 * Whether the current request is inside the LESS administration.
 *
 * @since 0.1
 *
 * @return bool
 */
function ls_is_admin() {
	return is_admin();
}

/**
 * Returns the LESS administrative directory name.
 *
 * @since 0.1
 *
 * @return string
 */
function ls_admin_dir() {
	return LS_ADMIN_DIR;
}

/**
 * ---------------------------------------------------------------------------
 * Administration branding
 * ---------------------------------------------------------------------------
 */

/**
 * Replaces the admin footer version/update text with the LESS identity.
 *
 * @since 0.1
 *
 * @param string $content Footer update/version content.
 * @return string
 */
function ls_admin_footer_update( $content ) {
	return '<span id="footer-upgrade">' . esc_html( LS_NAME . ' ' . LS_VERSION ) . '</span>';
}
add_filter( 'update_footer', 'ls_admin_footer_update', 20 );

/**
 * Replaces the admin footer thank-you text with the LESS identity.
 *
 * @since 0.1
 *
 * @param string $text Footer thank-you content.
 * @return string
 */
function ls_admin_footer_text( $text ) {
	return sprintf(
		/* translators: 1: LESS website URL, 2: DEVELOPER name. */
		__( 'Thank you for creating with <a href="%1$s">LESS</a>, an independent platform by %2$s.' ),
		esc_url( LS_WEBSITE ),
		esc_html( LS_DEVELOPER )
	);
}
add_filter( 'admin_footer_text', 'ls_admin_footer_text', 20 );

/**
 * Presents the LESS product version whenever a site version is displayed.
 *
 * The kernel compatibility version stays internal (see version.php); public
 * surfaces report the independent LESS version.
 *
 * Note: this intentionally does not filter get_bloginfo( 'version' ) for all
 * callers, because several core routines (plugin/theme compatibility checks,
 * admin branch CSS classes, automated updater reports) rely on the real
 * compat version. Display spots that need the LESS version use ls_version()
 * directly.
 *
 * @since 0.1
 *
 * @return string
 */
function ls_version() {
	return LS_VERSION;
}

/**
 * Returns the LESS logo SVG URL.
 *
 * The official LESS wordmark is served from the web root so it can be used
 * both inside the admin and in the login screen.
 *
 * @since 0.1
 *
 * @return string
 */
function ls_logo_url() {
	return home_url( '/LESS-logo-gray.svg' );
}

/**
 * Renders the LESS dashboard widget.
 *
 * Replaces the third-party news/events feed widget with independent LESS
 * information, keeping the dashboard entirely local.
 *
 * @since 0.1
 */
function ls_dashboard_widget() {
	?>
	<div class="ls-dashboard-widget">
		<p>
			<strong><?php echo esc_html( LS_NAME . ' ' . LS_VERSION ); ?></strong>
			<?php echo esc_html( sprintf( __( '&#8212; an independent platform by %s.' ), LS_DEVELOPER ) ); ?>
		</p>
		<ul>
			<li><a href="<?php echo esc_url( admin_url( 'about.php' ) ); ?>"><?php esc_html_e( 'About LESS' ); ?></a></li>
			<li><a href="<?php echo esc_url( LS_WEBSITE ); ?>"><?php esc_html_e( 'Leafole Labs website' ); ?></a></li>
			<li><a href="<?php echo esc_url( LS_REPOSITORY ); ?>"><?php esc_html_e( 'LESS repository' ); ?></a></li>
		</ul>
	</div>
	<?php
}

/**
 * Registers the LESS dashboard widget and removes the third-party
 * news/events feed so the dashboard stays entirely local.
 *
 * @since 0.1
 */
function ls_setup_dashboard() {
	remove_meta_box( 'dashboard_primary', 'dashboard', 'side' );
	wp_add_dashboard_widget( 'ls_dashboard', LS_NAME, 'ls_dashboard_widget' );
}
add_action( 'wp_dashboard_setup', 'ls_setup_dashboard', 20 );

/**
 * Points the login screen logo link at the site home.
 *
 * @since 0.1
 *
 * @param string $url Login logo target URL.
 * @return string
 */
function ls_login_header_url( $url ) {
	return home_url( '/' );
}
add_filter( 'login_headerurl', 'ls_login_header_url' );

/**
 * Sets the login screen logo link text.
 *
 * @since 0.1
 *
 * @param string $text Login logo link text.
 * @return string
 */
function ls_login_header_text( $text ) {
	return sprintf(
		/* translators: 1: LESS name, 2: LESS version. */
		__( '%1$s %2$s' ),
		LS_NAME,
		LS_VERSION
	);
}
add_filter( 'login_headertext', 'ls_login_header_text' );

/**
 * Renders the LESS logo in place of the third-party wordmark on the login
 * screen. The official LESS-logo-gray.svg is used as-is.
 *
 * @since 0.1
 */
function ls_login_logo_markup() {
	?>
	<style>
		.login h1 a {
			background-image: url(<?php echo esc_url_raw( ls_logo_url() ); ?>) !important;
			background-size: 84px 84px;
			background-position: center top;
			background-repeat: no-repeat;
			width: 84px;
			height: 84px;
			display: block;
		}
	</style>
	<?php
}
add_action( 'login_head', 'ls_login_logo_markup' );

/**
 * Replaces the WordPress mark in the admin bar with the LESS logo.
 *
 * The admin bar node keeps its historic id for compatibility, but the
 * visible icon is swapped for the official LESS mark on both the
 * dashboard and the frontend toolbar.
 *
 * @since 0.1
 */
function ls_admin_bar_logo_markup() {
	?>
	<style>
		#wp-admin-bar-wp-logo > .ab-item .ab-icon {
			background-image: url(<?php echo esc_url_raw( ls_logo_url() ); ?>) !important;
			background-position: center center;
			background-size: 20px 20px;
			background-repeat: no-repeat;
		}
		#wp-admin-bar-wp-logo > .ab-item .ab-icon:before {
			content: '' !important;
		}
	</style>
	<?php
}
add_action( 'admin_head', 'ls_admin_bar_logo_markup' );
add_action( 'wp_head', 'ls_admin_bar_logo_markup' );

/**
 * Increases the space between the admin bar and the page content.
 *
 * Overrides the core 32px/46px bump with a larger offset on both the
 * frontend toolbar and the dashboard, keeping them in sync through the
 * shared admin-bar height variable.
 *
 * @since 0.1
 */
function ls_admin_bar_spacing() {
	if ( ! is_admin_bar_showing() ) {
		return;
	}
	?>
	<style>
		<?php if ( is_admin() ) : ?>
		html { --wp-admin--admin-bar--height: 34px; }
		@media screen and ( max-width: 782px ) {
			#wpbody { padding-top: 48px; }
		}
		<?php else : ?>
		html { --wp-admin--admin-bar--height: 34px; }
		@media screen { html { margin-top: 34px !important; } }
		@media screen and ( max-width: 782px ) {
			html { margin-top: 48px !important; }
		}
		<?php endif; ?>
	</style>
	<?php
}
add_action( 'admin_head', 'ls_admin_bar_spacing', 999 );
add_action( 'wp_head', 'ls_admin_bar_spacing', 999 );

/**
 * ---------------------------------------------------------------------------
 * Administration: LESS settings page
 * ---------------------------------------------------------------------------
 */

/**
 * Registers the LESS settings submenu page under Settings.
 *
 * @since 0.1
 */
function ls_register_less_options_page() {
	add_options_page(
		__( 'LESS Settings' ),
		__( 'LESS' ),
		'manage_options',
		'options-less',
		'ls_render_less_options_page'
	);
}
add_action( 'admin_menu', 'ls_register_less_options_page' );

/**
 * Registers the LESS settings group.
 *
 * @since 0.1
 */
function ls_register_less_settings() {
	register_setting( 'less-options', 'ls_settings', 'ls_sanitize_less_settings' );
}
add_action( 'admin_init', 'ls_register_less_settings' );

/**
 * Adds the LESS settings group to the allowed options whitelist.
 *
 * The settings handler rejects option groups that are not listed in the
 * {@see 'allowed_options'} filter, so the LESS group must be registered there.
 *
 * @since 0.1
 *
 * @param array $allowed_options Associative array of allowed option groups.
 * @return array
 */
function ls_allowed_options( $allowed_options ) {
	$allowed_options['less-options'] = array( 'ls_settings' );
	return $allowed_options;
}
add_filter( 'allowed_options', 'ls_allowed_options' );

/**
 * Sanitizes the LESS settings submitted from the panel.
 *
 * Only known keys are persisted. Values out of range are clamped.
 *
 * @since 0.1
 *
 * @param array $input Raw submitted settings.
 * @return array Cleaned settings.
 */
function ls_sanitize_less_settings( $input ) {
	$clean = array();

	if ( isset( $input['less_max_revisions'] ) ) {
		$value = (int) $input['less_max_revisions'];
		$value = max( 0, min( 1000, $value ) );
		$clean['less_max_revisions'] = $value;
	}

	return $clean;
}

/**
 * Renders the LESS settings screen.
 *
 * @since 0.1
 */
function ls_render_less_options_page() {
	?>
	<div class="wrap">
		<h1><?php esc_html_e( 'LESS Settings' ); ?></h1>

		<?php settings_errors( 'ls_settings' ); ?>

		<form method="post" action="options.php">
			<?php
			settings_fields( 'less-options' );
			?>

			<h2 class="title"><?php esc_html_e( 'Content' ); ?></h2>
			<table class="form-table" role="presentation">
				<tr>
					<th scope="row">
						<label for="ls_max_revisions"><?php esc_html_e( 'Maximum revisions per post' ); ?></label>
					</th>
					<td>
						<input name="ls_settings[less_max_revisions]" type="number" id="ls_max_revisions"
							value="<?php echo esc_attr( ls_get_max_revisions() ); ?>" min="0" max="1000" class="small-text" />
						<p class="description">
							<?php esc_html_e( 'Number of revisions kept for each post. Set to 0 to disable revisions for new content.' ); ?>
						</p>
					</td>
				</tr>
			</table>

			<h2 class="title"><?php esc_html_e( 'Feature policy' ); ?></h2>
			<p>
				<?php esc_html_e( 'LESS makes permanent architectural decisions about remote and legacy features. The following are enforced and cannot be enabled from this panel.' ); ?>
			</p>
			<table class="form-table" role="presentation">
				<?php
				$feature_labels = array(
					'xmlrpc'     => __( 'XML-RPC' ),
					'pingbacks'  => __( 'Pingbacks' ),
					'trackbacks' => __( 'Trackbacks' ),
					'gravatar'   => __( 'External avatar service' ),
				);
				foreach ( $feature_labels as $feature_key => $feature_label ) :
					$enabled = ls_is_feature_enabled( $feature_key );
					?>
					<tr>
						<th scope="row"><?php echo esc_html( $feature_label ); ?></th>
						<td>
							<?php if ( $enabled ) : ?>
								<span aria-hidden="true">&#10003;</span> <?php esc_html_e( 'Enabled' ); ?>
							<?php else : ?>
								<span aria-hidden="true">&#10005;</span> <?php esc_html_e( 'Disabled' ); ?>
							<?php endif; ?>
						</td>
					</tr>
				<?php endforeach; ?>
			</table>

			<?php submit_button(); ?>
		</form>
	</div>
	<?php
}