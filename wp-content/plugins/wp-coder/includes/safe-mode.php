<?php
/**
 * Safe mode query var logic.
 *
 * @package WPCoder
 */

defined( 'ABSPATH' ) || exit;

add_action( 'plugins_loaded', 'wpcoder_maybe_enable_safe_mode' );

/**
 * Simple check to see if we should be adding safe-mode logic.
 *
 * @return void
 */
function wpcoder_maybe_enable_safe_mode() {
	if ( ! isset( $_GET['wpcoder-safe-mode'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return;
	}

	// If we're in safe mode, let's make sure all URLs keep the param until we are safe to get out.
	add_filter( 'home_url', 'wpcoder_keep_safe_mode' );
	add_filter( 'admin_url', 'wpcoder_keep_safe_mode' );
	add_filter( 'site_url', 'wpcoder_keep_safe_mode_login', 10, 3 );
	// The admin menu doesn't offer a hook to change all the menu links so we do it with JS.
	add_action( 'admin_footer', 'wpcoder_keep_safe_mode_admin_menu' );
	// Show a notice informing the user we're in safe mode and offer a way to get out.
	add_action( 'admin_notices', 'wpcoder_safe_mode_notice' );
	add_action( 'wpcoder_admin_notices', 'wpcoder_safe_mode_notice' );
}

/**
 * Make sure the URL keeps the safe mode variable.
 *
 * @param string $url The home or admin base URL.
 *
 * @return string
 */
function wpcoder_keep_safe_mode( $url ) {
	return add_query_arg( 'wpcoder-safe-mode', 1, $url );
}

/**
 * Force safe mode to all URLs displayed in the admin so we can keep navigating
 * using safe mode as there's no hook in WP to change the main admin menu.
 *
 * @return void
 */
function wpcoder_keep_safe_mode_admin_menu() {
	// There's no reliable way to filter all the admin menu links so we have to force them via JS.
	// There's also a notice being added to allow users to "exit" safe mode.
	?>
	<script type="text/javascript">
        [...document.querySelectorAll( 'a:not(.wpcoder-safe-mode)' )].forEach( e => {
            const url = new URL( e.href );
            url.searchParams.set( 'wpcoder-safe-mode', '1' );
            e.href = url.toString();
        } );
	</script>
	<?php
}

/**
 * Show a notice informing the user we're in safe mode and offer a way to get out.
 *
 * @return void
 */
function wpcoder_safe_mode_notice() {
	?>
	<div class="notice notice-warning">
		<p><?php esc_html_e( 'WPCoder is in Safe Mode which means no codes are getting executed. Please disable any snippets that have caused errors and when done click the button below to exit safe mode.', 'wp-coder' ); ?></p>
		<p><?php esc_html_e( 'The link will open in a new window so if you are still encountering issues you safely can return to this tab and make further adjustments', 'wp-coder' ); ?></p>
		<p>
			<a class="button button-secondary wpcoder-safe-mode" href="<?php echo esc_url( remove_query_arg( 'wpcoder-safe-mode' ) ); ?>" target="_blank"><?php esc_html_e( 'Exit safe mode', 'wp-coder' ); ?></a>
		</p>
	</div>
	<?php
}

/**
 * Checks schema passed to site_url and adds the safe mode query param
 * so we can login using safe mode.
 *
 * @param string $url The site_url already processed.
 * @param string $path The path that was added to the URL.
 * @param string $scheme The scheme that was requested.
 *
 * @return string
 */
function wpcoder_keep_safe_mode_login( $url, $path, $scheme ) {
	if ( 'login_post' !== $scheme ) {
		return $url;
	}

	return add_query_arg( 'wpcoder-safe-mode', 1, $url );
}


