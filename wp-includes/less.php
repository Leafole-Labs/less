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
 * LESS core updates are served from the GitHub repository.
 *
 * The update check itself lives in wp-includes/ls-update.php, which queries
 * the GitHub Releases API (LS_REPOSITORY) and exposes the result through
 * the standard `update_core` transient. Kept here for backward
 * compatibility: always reports "no updates" when called directly.
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

/**
 * Loads the GitHub-based core updater.
 *
 * Replaces the former "disable all core checks" behavior: instead of
 * short-circuiting the `update_core` transient with an empty payload,
 * LESS now checks the GitHub repository for new releases.
 *
 * @since 0.2
 */
require_once ABSPATH . WPINC . '/ls-update.php';

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
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( esc_html__( 'Sorry, you are not allowed to manage options for this site.' ) );
	}

	ls_db_wipe_render_result_notice();
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

		<hr />

		<h2 class="title"><?php esc_html_e( 'Danger zone' ); ?></h2>
		<div class="ls-danger-zone" style="border:1px solid #d63638;border-left:4px solid #d63638;background:#fff;padding:12px 16px;max-width:720px;">
			<h3 style="color:#d63638;margin-top:0;"><?php esc_html_e( 'Excluir todo o banco de dados' ); ?></h3>
			<p>
				<strong style="color:#d63638;"><?php esc_html_e( 'Atenção: esta operação é irreversível.' ); ?></strong>
				<?php esc_html_e( 'Todos os dados armazenados no banco de dados da instalação atual do LESS serão perdidos permanentemente (conteúdo, usuários, ajustes e tabelas próprias do LESS). Nenhum arquivo PHP, tema, plugin, upload ou código-fonte será excluído — apenas os dados do banco.' ); ?>
			</p>
			<p class="description"><?php esc_html_e( 'Utilize apenas se deseja apagar tudo e reinstalar o LESS do zero.' ); ?></p>
			<p>
				<button type="button" id="ls-wipe-open" class="button button-link-delete" style="border-color:#d63638;color:#d63638;">
					<?php esc_html_e( 'Excluir todo o banco de dados' ); ?>
				</button>
			</p>
		</div>

		<div id="ls-wipe-modal-backdrop" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:100000;" aria-hidden="true"></div>
		<div id="ls-wipe-modal" role="dialog" aria-modal="true" aria-labelledby="ls-wipe-modal-title" style="display:none;position:fixed;z-index:100001;left:50%;top:12%;transform:translateX(-50%);background:#fff;border-top:4px solid #d63638;max-width:520px;width:calc(100% - 40px);padding:20px 24px;box-shadow:0 5px 30px rgba(0,0,0,.35);">
			<h2 id="ls-wipe-modal-title" style="color:#d63638;margin-top:0;"><?php esc_html_e( 'Excluir todo o banco de dados?' ); ?></h2>
			<p>
				<strong><?php esc_html_e( 'Todos os dados armazenados no banco de dados da instalação atual serão perdidos de forma irreversível.' ); ?></strong>
			</p>
			<p>
				<?php esc_html_e( 'Esta ação apaga todas as tabelas da instalação atual (tabelas do WordPress com o prefixo configurado e tabelas próprias do LESS, quando aplicável). Arquivos de temas, plugins, uploads e o código-fonte do LESS não são excluídos.' ); ?>
			</p>
			<p>
				<?php esc_html_e( 'Para confirmar, digite exatamente:' ); ?>
				<code>EXCLUIR TUDO</code>
			</p>
			<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
				<input type="hidden" name="action" value="ls_wipe_database" />
				<?php wp_nonce_field( 'ls_wipe_database', '_ls_wipe_nonce' ); ?>
				<p>
					<label for="ls-wipe-confirm-input"><strong><?php esc_html_e( 'Confirmação' ); ?></strong></label><br />
					<input type="text" id="ls-wipe-confirm-input" name="ls_wipe_confirm" value="" autocomplete="off" placeholder="EXCLUIR TUDO" class="regular-text" style="width:100%;max-width:100%;" />
				</p>
				<p class="submit" style="margin-bottom:0;">
					<button type="submit" id="ls-wipe-confirm-button" class="button button-primary" style="background:#d63638;border-color:#d63638;" disabled>
						<?php esc_html_e( 'Excluir permanentemente todos os dados' ); ?>
					</button>
					<button type="button" id="ls-wipe-cancel" class="button"><?php esc_html_e( 'Cancelar' ); ?></button>
				</p>
			</form>
		</div>
		<script type="text/javascript">
		(function() {
			var openBtn = document.getElementById('ls-wipe-open');
			var modal = document.getElementById('ls-wipe-modal');
			var backdrop = document.getElementById('ls-wipe-modal-backdrop');
			var cancelBtn = document.getElementById('ls-wipe-cancel');
			var input = document.getElementById('ls-wipe-confirm-input');
			var confirmBtn = document.getElementById('ls-wipe-confirm-button');
			function open() {
				modal.style.display = 'block';
				backdrop.style.display = 'block';
				backdrop.setAttribute('aria-hidden', 'false');
				input.value = '';
				confirmBtn.disabled = true;
				input.focus();
			}
			function close() {
				modal.style.display = 'none';
				backdrop.style.display = 'none';
				backdrop.setAttribute('aria-hidden', 'true');
				if (openBtn) { openBtn.focus(); }
			}
			if (openBtn) { openBtn.addEventListener('click', open); }
			if (cancelBtn) { cancelBtn.addEventListener('click', close); }
			if (backdrop) { backdrop.addEventListener('click', close); }
			document.addEventListener('keydown', function(e) {
				if (e.key === 'Escape' && modal.style.display === 'block') { close(); }
			});
			if (input) {
				input.addEventListener('input', function() {
					confirmBtn.disabled = (input.value !== 'EXCLUIR TUDO');
				});
			}
		})();
		</script>
	</div>
	<?php
}

/**
 * ---------------------------------------------------------------------------
 * Danger zone: excluir todo o banco de dados (SQLite, instalação atual)
 * ---------------------------------------------------------------------------
 *
 * Fluxo: botão "Excluir todo o banco de dados" na página LESS Settings abre
 * um modal que exige digitar EXCLUIR TUDO. O formulário faz POST para
 * admin-post.php (action=ls_wipe_database) com nonce ls_wipe_database.
 * O processamento é 100% no servidor (ls_handle_ls_wipe_database),
 * restrito a administradores com manage_options.
 *
 * Garantias:
 * - Nunca aceita caminho de banco ou lista de tabelas do cliente.
 * - Opera apenas no arquivo SQLite da instalação atual (FQDB).
 * - Remove somente tabelas com o prefixo configurado ($wpdb->prefix),
 *   preservando tabelas internas do driver (_wp_sqlite_*, sqlite_*).
 * - Nunca exclui arquivos PHP/temas/plugins/uploads/config/código-fonte.
 * - Nunca executa automaticamente (somente via POST autorizado).
 *
 * @since 0.1
 */

/**
 * Frase de confirmação exigida para habilitar a exclusão.
 *
 * @since 0.1
 *
 * @return string
 */
function ls_db_wipe_confirmation_phrase() {
	return 'EXCLUIR TUDO';
}

/**
 * Nome da action admin-post usada pela exclusão.
 *
 * @since 0.1
 *
 * @return string
 */
function ls_db_wipe_action_name() {
	return 'ls_wipe_database';
}

/**
 * Action do nonce CSRF da exclusão.
 *
 * @since 0.1
 *
 * @return string
 */
function ls_db_wipe_nonce_action() {
	return 'ls_wipe_database';
}

/**
 * Nome do campo do nonce CSRF da exclusão.
 *
 * @since 0.1
 *
 * @return string
 */
function ls_db_wipe_nonce_field() {
	return '_ls_wipe_nonce';
}

/**
 * Capability exigida para excluir o banco.
 *
 * @since 0.1
 *
 * @return string
 */
function ls_db_wipe_capability() {
	return 'manage_options';
}

/**
 * Verifica se o mecanismo atual é o SQLite suportado pelo LESS.
 *
 * Respeita a implementação SQLite existente (drop-in wp-content/db.php):
 * exige DB_ENGINE=sqlite. Não cria conexão MySQL alternativa.
 *
 * @since 0.1
 *
 * @return bool
 */
function ls_db_wipe_is_sqlite_engine() {
	if ( defined( 'DB_ENGINE' ) && 'sqlite' === DB_ENGINE ) {
		return true;
	}

	if ( defined( 'DATABASE_TYPE' ) && 'sqlite' === DATABASE_TYPE ) {
		return true;
	}

	return false;
}

/**
 * Resolve o caminho esperado do arquivo SQLite da instalação atual.
 *
 * Usa exclusivamente as constantes do lado do servidor (FQDB, com suporte a
 * DB_DIR/DB_FILE e fallback WP_CONTENT_DIR/database). Nunca usa input do cliente.
 *
 * @since 0.1
 *
 * @return string Caminho absoluto esperado (pode não existir).
 */
function ls_db_wipe_expected_file() {
	if ( defined( 'FQDB' ) && is_string( FQDB ) && '' !== FQDB ) {
		return FQDB;
	}

	if ( defined( 'WP_CONTENT_DIR' ) ) {
		return rtrim( WP_CONTENT_DIR, '/\\' ) . '/database/.ht.sqlite';
	}

	if ( defined( 'ABSPATH' ) ) {
		return rtrim( ABSPATH, '/\\' ) . '/wp-content/database/.ht.sqlite';
	}

	return '';
}

/**
 * Valida a frase de confirmação digitada (comparação estrita, case-sensitive).
 *
 * @since 0.1
 *
 * @param mixed $input Valor enviado pelo cliente.
 * @return bool
 */
function ls_db_wipe_validate_confirmation( $input ) {
	if ( ! is_string( $input ) ) {
		return false;
	}

	return hash_equals( ls_db_wipe_confirmation_phrase(), $input );
}

/**
 * Verifica se um nome de tabela pode ser removido.
 *
 * Regras (lado do servidor, prefixo configurado — nunca presumir "wp_"):
 * - Nome válido: /^[A-Za-z0-9_]+$/ com até 64 caracteres.
 * - Deve começar com o prefixo configurado.
 * - Nunca remover internas do driver/engines: sqlite_* e _wp_sqlite_*.
 *
 * @since 0.1
 *
 * @param mixed  $table  Nome da tabela candidata.
 * @param string $prefix Prefixo configurado ($wpdb->prefix).
 * @return bool
 */
function ls_db_wipe_is_allowed_table( $table, $prefix ) {
	if ( ! is_string( $table ) || '' === $table ) {
		return false;
	}

	if ( ! is_string( $prefix ) || '' === $prefix ) {
		return false;
	}

	if ( strlen( $table ) > 64 || strlen( $prefix ) > 32 ) {
		return false;
	}

	if ( 1 !== preg_match( '/^[A-Za-z0-9_]+$/', $table ) ) {
		return false;
	}

	if ( 1 !== preg_match( '/^[A-Za-z0-9_]+$/', $prefix ) ) {
		return false;
	}

	if ( 0 !== strpos( $table, $prefix ) ) {
		return false;
	}

	$lower = strtolower( $table );
	if ( 0 === strpos( $lower, 'sqlite_' ) || 0 === strpos( $lower, '_wp_sqlite_' ) ) {
		return false;
	}

	return true;
}

/**
 * Filtra uma lista bruta de tabelas, mantendo só as da instalação atual.
 *
 * @since 0.1
 *
 * @param mixed  $all_tables Lista bruta de nomes de tabela.
 * @param string $prefix     Prefixo configurado.
 * @return string[] Tabelas permitidas (reindexadas).
 */
function ls_db_wipe_filter_installation_tables( $all_tables, $prefix ) {
	if ( ! is_array( $all_tables ) ) {
		return array();
	}

	$allowed = array();
	foreach ( $all_tables as $table ) {
		if ( ls_db_wipe_is_allowed_table( $table, $prefix ) ) {
			$allowed[] = $table;
		}
	}

	return array_values( array_unique( $allowed ) );
}

/**
 * Verifica se o arquivo SQLite resolvido está dentro do diretório permitido.
 *
 * Impede que bancos externos/outras instalações sejam afetados: o arquivo deve
 * estar dentro do diretório de banco da instalação (dirname de FQDB esperado,
 * normalmente wp-content/database) e ser um arquivo regular.
 *
 * @since 0.1
 *
 * @param string $file Caminho a verificar.
 * @return bool
 */
function ls_db_wipe_is_file_in_allowed_dir( $file ) {
	if ( ! is_string( $file ) || '' === $file ) {
		return false;
	}

	$real_file = realpath( $file );
	if ( false === $real_file || ! is_file( $real_file ) ) {
		return false;
	}

	$expected_dir = dirname( ls_db_wipe_expected_file() );
	$real_dir     = realpath( $expected_dir );
	if ( false === $real_dir || ! is_dir( $real_dir ) ) {
		return false;
	}

	$real_dir  = rtrim( $real_dir, '/\\' ) . DIRECTORY_SEPARATOR;
	$real_file = rtrim( $real_file, '/\\' );

	return 0 === strpos( $real_file . DIRECTORY_SEPARATOR, $real_dir );
}

/**
 * Lista as tabelas da instalação atual diretamente no SQLite.
 *
 * Lê sqlite_master através do PDO do driver existente (sem criar conexão
 * MySQL alternativa) e filtra pelo prefixo configurado. Retorna WP_Error
 * quando o banco não corresponde à instalação atual (ex.: tabela de options
 * ausente = banco estranho ou já zerado).
 *
 * @since 0.1
 *
 * @return string[]|WP_Error
 */
function ls_db_wipe_get_installation_tables() {
	global $wpdb;

	if ( ! $wpdb instanceof wpdb ) {
		return new WP_Error( 'ls_wipe_no_db', 'Banco de dados indisponível.' );
	}

	if ( ! ls_db_wipe_is_sqlite_engine() ) {
		return new WP_Error( 'ls_wipe_engine', 'Mecanismo de banco de dados não suportado para esta operação.' );
	}

	$prefix = isset( $wpdb->prefix ) ? $wpdb->prefix : '';
	if ( ! is_string( $prefix ) || '' === $prefix ) {
		return new WP_Error( 'ls_wipe_prefix', 'Prefixo de tabelas inválido.' );
	}

	$expected = ls_db_wipe_expected_file();
	if ( '' === $expected || ! ls_db_wipe_is_file_in_allowed_dir( $expected ) ) {
		return new WP_Error( 'ls_wipe_db_file', 'Banco de dados da instalação atual não identificado.' );
	}

	$raw_names = null;

	if ( method_exists( $wpdb, 'get_driver' ) ) {
		try {
			$driver     = $wpdb->get_driver();
			$sqlite_pdo = method_exists( $driver, 'get_sqlite_pdo' ) ? $driver->get_sqlite_pdo() : null;
			if ( $sqlite_pdo instanceof PDO ) {
				$stmt      = $sqlite_pdo->query( "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name" );
				$raw_names = $stmt ? $stmt->fetchAll( PDO::FETCH_COLUMN, 0 ) : array();
			}
		} catch ( Throwable $e ) {
			$raw_names = null;
		}
	}

	if ( null === $raw_names ) {
		$raw_names = $wpdb->get_col( 'SHOW TABLES' );
		if ( ! is_array( $raw_names ) ) {
			return new WP_Error( 'ls_wipe_list', 'Não foi possível listar as tabelas da instalação atual.' );
		}
	}

	if ( ! in_array( $wpdb->options, (array) $raw_names, true ) ) {
		return new WP_Error( 'ls_wipe_mismatch', 'Banco de dados não corresponde à instalação atual.' );
	}

	$tables = ls_db_wipe_filter_installation_tables( $raw_names, $prefix );

	if ( empty( $tables ) ) {
		return new WP_Error( 'ls_wipe_empty', 'Nenhuma tabela da instalação atual foi encontrada.' );
	}

	return $tables;
}

/**
 * Remove (DROP) as tabelas informadas, já validadas.
 *
 * Executa os DROPs através do $wpdb (camada MySQL-on-SQLite), nunca via PDO
 * bruto: o driver registra cada DROP no espelho de information schema
 * (_wp_sqlite_*) e o mantém sincronizado. Sem isso, o espelho fica com
 * linhas fantasmas das tabelas removidas e o is_blog_installed() conclui
 * que "tabelas existem" — resultando em dead_db() ("Error establishing a
 * database connection") em vez do redirecionamento para install.php.
 * Nunca executa SQL vindo do cliente. Falha fechada em qualquer erro.
 *
 * @since 0.1
 *
 * @param string[] $tables Lista já filtrada de tabelas.
 * @return int|WP_Error Quantidade removida ou erro genérico (sem expor paths).
 */
function ls_db_wipe_drop_tables( $tables ) {
	global $wpdb;

	if ( ! is_array( $tables ) || empty( $tables ) ) {
		return new WP_Error( 'ls_wipe_empty', 'Nenhuma tabela para remover.' );
	}

	if ( ! $wpdb instanceof wpdb ) {
		return new WP_Error( 'ls_wipe_no_db', 'Banco de dados indisponível.' );
	}

	$prefix = isset( $wpdb->prefix ) ? $wpdb->prefix : '';
	foreach ( $tables as $table ) {
		if ( ! ls_db_wipe_is_allowed_table( $table, $prefix ) ) {
			return new WP_Error( 'ls_wipe_table', 'Tabela fora do escopo da instalação atual.' );
		}
	}

	try {
		$dropped = 0;
		foreach ( $tables as $table ) {
			$result = $wpdb->query( 'DROP TABLE IF EXISTS `' . $table . '`' );
			if ( false === $result ) {
				return new WP_Error( 'ls_wipe_drop', 'Falha ao remover as tabelas. Nenhuma alteração parcial deve ser considerada válida — verifique e tente novamente.' );
			}
			++$dropped;
		}
		return $dropped;
	} catch ( Throwable $e ) {
		error_log( 'LESS: falha na exclusão do banco de dados.' );
		return new WP_Error( 'ls_wipe_drop', 'Falha ao remover as tabelas do banco de dados.' );
	}
}

/**
 * Manipulador admin-post da exclusão total do banco (somente autenticado).
 *
 * Registrado apenas em admin_post_{action} (nunca nopriv): visitantes e
 * requisições não autenticadas são rejeitadas pelo próprio admin-post.php.
 * Exige capability manage_options + nonce + frase EXCLUIR TUDO.
 *
 * @since 0.1
 */
function ls_handle_ls_wipe_database() {
	if ( ! is_user_logged_in() ) {
		wp_die( esc_html__( 'Acesso negado.' ), 403 );
	}

	if ( ! current_user_can( ls_db_wipe_capability() ) ) {
		wp_die( esc_html__( 'Você não tem permissão para executar esta ação.' ), 403 );
	}

	check_admin_referer( ls_db_wipe_nonce_action(), ls_db_wipe_nonce_field() );

	if ( 'POST' !== ( isset( $_SERVER['REQUEST_METHOD'] ) ? $_SERVER['REQUEST_METHOD'] : '' ) ) {
		wp_die( esc_html__( 'Método inválido.' ), 400 );
	}

	$confirm = isset( $_POST['ls_wipe_confirm'] ) ? wp_unslash( $_POST['ls_wipe_confirm'] ) : '';
	if ( ! ls_db_wipe_validate_confirmation( $confirm ) ) {
		wp_safe_redirect(
			add_query_arg(
				array(
					'ls_db_wipe'       => 'error',
					'ls_db_wipe_error' => 'confirm',
				),
				admin_url( 'options-general.php?page=options-less' )
			)
		);
		exit;
	}

	// Nunca aceitar caminho de banco ou tabelas do cliente: tudo é resolvido no servidor.
	$tables = ls_db_wipe_get_installation_tables();
	if ( is_wp_error( $tables ) ) {
		wp_safe_redirect(
			add_query_arg(
				array(
					'ls_db_wipe'       => 'error',
					'ls_db_wipe_error' => 'database',
				),
				admin_url( 'options-general.php?page=options-less' )
			)
		);
		exit;
	}

	$result = ls_db_wipe_drop_tables( $tables );
	if ( is_wp_error( $result ) ) {
		wp_safe_redirect(
			add_query_arg(
				array(
					'ls_db_wipe'       => 'error',
					'ls_db_wipe_error' => 'drop',
				),
				admin_url( 'options-general.php?page=options-less' )
			)
		);
		exit;
	}

	if ( function_exists( 'wp_cache_flush' ) ) {
		wp_cache_flush();
	}

	wp_safe_redirect(
		add_query_arg(
			array(
				'ls_db_wipe'        => 'success',
				'ls_db_wipe_tables' => (int) $result,
			),
			admin_url( 'options-general.php?page=options-less' )
		)
	);
	exit;
}
add_action( 'admin_post_ls_wipe_database', 'ls_handle_ls_wipe_database' );

/**
 * Exibe o aviso de resultado da exclusão na página LESS Settings.
 *
 * @since 0.1
 */
function ls_db_wipe_render_result_notice() {
	if ( ! isset( $_GET['ls_db_wipe'] ) ) {
		return;
	}

	$status = sanitize_key( wp_unslash( $_GET['ls_db_wipe'] ) );

	if ( 'success' === $status ) {
		$count       = isset( $_GET['ls_db_wipe_tables'] ) ? absint( $_GET['ls_db_wipe_tables'] ) : 0;
		$install_url = esc_url( admin_url( 'install.php' ) );
		?>
		<div class="notice notice-warning is-dismissible">
			<p>
				<strong><?php esc_html_e( 'Banco de dados excluído.' ); ?></strong>
				<?php
				printf(
					/* translators: %d: number of dropped tables. */
					esc_html__( 'Todas as tabelas da instalação atual foram removidas permanentemente (%d tabelas).' ),
					$count
				);
				?>
			</p>
			<p>
				<?php esc_html_e( 'Para usar o LESS novamente, reinstale a plataforma. Acesse a tela de instalação e siga as etapas iniciais.' ); ?>
				<a href="<?php echo $install_url; ?>"><?php esc_html_e( 'Ir para a instalação' ); ?></a>
			</p>
		</div>
		<?php
		return;
	}

	if ( 'error' === $status ) {
		$code = isset( $_GET['ls_db_wipe_error'] ) ? sanitize_key( wp_unslash( $_GET['ls_db_wipe_error'] ) ) : 'generic';
		$messages = array(
			'confirm'  => __( 'Confirmação inválida. Digite exatamente EXCLUIR TUDO para confirmar.' ),
			'database' => __( 'Não foi possível identificar o banco de dados da instalação atual. Nenhuma alteração foi feita.' ),
			'drop'     => __( 'Falha ao remover as tabelas. Nenhum arquivo foi excluído; verifique o banco e tente novamente.' ),
		);
		$message = isset( $messages[ $code ] ) ? $messages[ $code ] : __( 'Não foi possível concluir a operação. Nenhuma alteração foi feita.' );
		?>
		<div class="notice notice-error is-dismissible">
			<p><strong><?php esc_html_e( 'A exclusão não foi executada.' ); ?></strong> <?php echo esc_html( $message ); ?></p>
		</div>
		<?php
	}
}