<?php

namespace WPCoder\Admin;

defined( 'ABSPATH' ) || exit;

// Exit if accessed directly.
use WPCoder\Dashboard\DashboardHelper;
use WPCoder\WPCoder;

class AdminInitializer {

	public static function init(): void {
		add_filter( 'plugin_action_links', [ __CLASS__, 'settings_link' ], 10, 2 );
		add_filter( 'admin_footer_text', [ __CLASS__, 'footer_text' ], 20 );
		add_action( 'admin_menu', [ __CLASS__, 'add_admin_page' ] );
		add_action( 'admin_enqueue_scripts', [ __CLASS__, 'admin_scripts' ] );
		new AdminNotices;
		new AdminActions;
	}

	public static function settings_link( $links, $file ) {
		if ( false === strpos( $file, WPCoder::basename() ) ) {
			return $links;
		}
		$link          = admin_url( 'admin.php?page=' . WPCoder::SLUG );
		$text          = esc_attr__( 'Settings', 'wp-coder' );
		$settings_link = '<a href="' . esc_url( $link ) . '">' . esc_attr( $text ) . '</a>';
		array_unshift( $links, $settings_link );

		return $links;
	}

	public static function footer_text( $footer_text ) {
		global $pagenow;

		if ( $pagenow === 'admin.php' && ( isset( $_GET['page'] ) && $_GET['page'] === WPCoder::SLUG ) ) {
			$text = sprintf(
			/* translators: 1. link to the plugin page 2. plugin name */
				__( 'Thank you for using <b>%2$s</b>! Please <a href="%1$s" target="_blank">rate us</a>', 'wp-coder' ),
				esc_url( WPCoder::PluginURL ),
				esc_attr( WPCoder::info( 'name' ) )
			);

			return str_replace( '</span>', '', $footer_text ) . ' | ' . $text . '</span>';
		}

		return $footer_text;
	}

	public static function add_admin_page(): void {
		if ( ! WPCoder::user_can_manage() ) {
			return;
		}

		$icon       = 'data:image/svg+xml;base64,' . base64_encode( self::icon() );
		$parent     = 'wp-coder';
		$title      = WPCoder::info( 'name' ) . ' version ' . WPCoder::info( 'version' );
		$menu_title = 'All Codes';
		$capability = WPCoder::CAPABILITY;
		$slug       = WPCoder::SLUG;

		add_menu_page( 'WP Coder Pro', 'WP Coder', $capability, $slug, [ __CLASS__, 'plugin_page' ], $icon );

		add_submenu_page( $slug, $title, $menu_title, $capability, $slug, [ __CLASS__, 'plugin_page' ] );

		add_submenu_page( $slug, $title, 'Add new', $capability, $slug . '-settings', [ __CLASS__, 'settings' ] );
		add_submenu_page( $slug, $title, 'Snippets', $capability, $slug . '-snippets', [ __CLASS__, 'snippets' ] );
		add_submenu_page( $slug, $title, 'Tools', $capability, $slug . '-tools', [ __CLASS__, 'tools' ] );
		add_submenu_page( $slug, $title, 'Global PHP', $capability, $slug . '-global', [ __CLASS__, 'global_php' ] );
		add_submenu_page( $slug, $title, 'Debug Log', $capability, $slug . '-debug', [ __CLASS__, 'debug_log' ] );
		add_submenu_page( $slug, $title, 'Import / Export', $capability, $slug . '-import-export', [ __CLASS__, 'import_export' ] );
		add_submenu_page( $slug, $title, 'Support', $capability, $slug . '-support', [ __CLASS__, 'support' ] );

	}

	public static function icon(): string {
		return '<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path id="1728127909379-8007129Oval-Copy" fill="#2b7fff" fill-rule="evenodd" stroke="none" d="M 496 101 C 496 128.614227 473.614227 151 446 151 C 418.385773 151 396 128.614227 396 101 C 396 73.385773 418.385773 51 446 51 C 473.614227 51 496 73.385773 496 101 Z"/>
    <g id="window-code">
        <path id="Path" fill="#212121" stroke="none" d="M 245.714279 232.714294 L 74.285713 61.285736 C 60.571426 47.571411 40 47.571411 26.285713 61.285736 C 12.571427 75 12.571427 95.571442 26.285713 109.285706 L 173.714279 256.714294 L 26.285713 404.142853 C 12.571427 417.857147 12.571427 438.428589 26.285713 452.142853 C 33.142857 459 40 462.428558 50.285713 462.428558 C 60.571426 462.428558 67.428574 459 74.285713 452.142853 L 245.714279 280.714294 C 259.428589 267 259.428589 246.428558 245.714279 232.714294 Z"/>
        <path id="Rounded-Rectangle" fill="#212121" fill-rule="evenodd" stroke="none" d="M 256 431 C 256 448.673096 270.326874 463 288 463 L 464 463 C 481.673096 463 496 448.673096 496 431 L 496 429 C 496 411.326904 481.673096 397 464 397 L 288 397 C 270.326874 397 256 411.326904 256 429 Z"/>
    </g>
</svg>';
	}

	public static function plugin_page(): void {
		$page_path = DashboardHelper::get_folder_path( 'pages' ) . '/1.list.php';

		if ( file_exists( $page_path ) ) {
			require_once $page_path;
		}
	}

	public static function settings(): void {
		$page_path = DashboardHelper::get_folder_path( 'pages' ) . '/2.settings.php';

		if ( file_exists( $page_path ) ) {
			require_once $page_path;
		}
	}

	public static function snippets() {
		$page_path = DashboardHelper::get_folder_path( 'pages' ) . '/3.snippets.php';

		if ( file_exists( $page_path ) ) {
			require_once $page_path;
		}
	}

	public static function tools() {
		$page_path = DashboardHelper::get_folder_path( 'pages' ) . '/4.tools.php';

		if ( file_exists( $page_path ) ) {
			require_once $page_path;
		}
	}

	public static function global_php() {
		$page_path = DashboardHelper::get_folder_path( 'pages' ) . '/5.global-php.php';

		if ( file_exists( $page_path ) ) {
			require_once $page_path;
		}
	}


	public static function import_export() {
		$page_path = DashboardHelper::get_folder_path( 'pages' ) . '/6.import-export.php';

		if ( file_exists( $page_path ) ) {
			require_once $page_path;
		}
	}

	public static function support() {
		$page_path = DashboardHelper::get_folder_path( 'pages' ) . '/7.support.php';

		if ( file_exists( $page_path ) ) {
			require_once $page_path;
		}
	}

	public static function debug_log() {
		$page_path = DashboardHelper::get_folder_path( 'pages' ) . '/10.debug-log.php';

		if ( file_exists( $page_path ) ) {
			require_once $page_path;
		}
	}

	public static function admin_scripts( $hook ): void {
//		$page       = 'toplevel_page_' . WPCoder::SLUG;
		$assets_url = WPCoder::url() . 'assets/';
		wp_enqueue_style( 'wowp-general-admin', $assets_url . 'css/admin-general.css' );

		$page = isset( $_GET['page'] ) ? sanitize_text_field( $_GET['page'] ) : '';

		if ( strpos( $page, WPCoder::SLUG ) === false ) {
			return;
		}

		do_action( WPCoder::PREFIX . '_admin_load_styles_scripts' );
	}

}