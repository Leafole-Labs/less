<?php

defined( 'ABSPATH' ) || exit;

class  WPCoder_Theme_Switcher {
	public function __construct() {
		add_action( 'admin_bar_menu', [ $this, 'admin_bar_item' ], 500 );
		add_filter( 'wp_redirect', [ $this, 'handle_theme_switch_redirect' ] );
	}

	public function admin_bar_item( $admin_bar ) {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		$admin_bar->add_menu(
			[
				'id'     => 'wpc-theme-toggle',
				'group'  => null,
				'title'  => '<span class="ab-icon dashicons dashicons-admin-appearance"></span><span class="ab-label">Themes</span>',
				'href'   => false,
				'meta'   => [ 'title' => __( 'Installed Themes', 'wpcoderpro' ) ],
			]
		);

		$themes = wp_get_themes();

		foreach ( $themes as $stylesheet => $theme ) {
			$current_theme = wp_get_theme();
			$current_stylesheet = $current_theme->get_stylesheet();
			$is_active = ($stylesheet === $current_stylesheet);
			$class         = 'theme-toggle';
			$class        .= $current_theme->get( 'TextDomain' ) === $theme->get( 'TextDomain' ) ? ' is-active' : '';
			$wpnonce       = wp_create_nonce( 'switch-theme_' . $stylesheet );
			$current_url   = ( isset( $_SERVER['HTTPS'] ) && 'on' === $_SERVER['HTTPS'] ? 'https' : 'http' ) . '://' .
			                 sanitize_text_field( wp_unslash( $_SERVER['HTTP_HOST'] ?? '' ) ) .
			                 sanitize_text_field( wp_unslash( $_SERVER['REQUEST_URI'] ?? '' ) );

			$admin_bar->add_menu(
				[
					'id'     => 'wpc-theme-' . $stylesheet,
					'parent' => 'wpc-theme-toggle',
					'title'  => $theme->get( 'Name' ) . ( $is_active ? ' <span style="color:aliceblue;">✓</span>' : '' ),
					'href'   => add_query_arg(
						[
							'action'     => 'activate',
							'stylesheet' => $stylesheet,
							'_wpnonce'   => $wpnonce,
							'return_url' => rawurlencode( $current_url ),
						],
						admin_url( 'themes.php' )
					),
					'meta'   => [
						'title' => $theme->get( 'Name' ),
						'class' => $class,
					],
				]
			);
		}
	}

	public function handle_theme_switch_redirect( $location ) {
		if (
			isset( $_GET['return_url'], $_GET['_wpnonce'], $_GET['stylesheet'] ) &&
			wp_verify_nonce( sanitize_text_field( wp_unslash( $_GET['_wpnonce'] ) ), 'switch-theme_' . sanitize_text_field( wp_unslash( $_GET['stylesheet'] ) ) ) &&
			strpos( $location, 'themes.php' ) !== false
		) {
			return esc_url_raw( urldecode( sanitize_text_field( wp_unslash( $_GET['return_url'] ) ) ) );
		}
		return $location;
	}

}