<?php

namespace WPCoder\Dashboard;

defined( 'ABSPATH' ) || exit;

use WPCoder\WPCoder;

class DashboardInitializer {

	public static function init(): void {
		self::header();
		echo '<div class="wrap wowp-wrap">';
//		self::menu();
//		self::include_pages();
		echo '</div>';
	}

	public static function header(): void {
		$logo_url = self::logo_url();
		$add_url  = add_query_arg( [
			'page'   => WPCoder::SLUG,
			'tab'    => 'settings',
			'action' => 'new'
		], admin_url( 'admin.php' ) );
		?>

        <div class="wowp-header">
            <div class="wowp-header__logo">
                <svg width="64" height="64" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path id="1728127909379-8007129Oval-Copy" fill="#2b7fff" fill-rule="evenodd" stroke="none" d="M 496 101 C 496 128.614227 473.614227 151 446 151 C 418.385773 151 396 128.614227 396 101 C 396 73.385773 418.385773 51 446 51 C 473.614227 51 496 73.385773 496 101 Z"/>
                    <g id="window-code">
                        <path id="Path" fill="#212121" stroke="none" d="M 245.714279 232.714294 L 74.285713 61.285736 C 60.571426 47.571411 40 47.571411 26.285713 61.285736 C 12.571427 75 12.571427 95.571442 26.285713 109.285706 L 173.714279 256.714294 L 26.285713 404.142853 C 12.571427 417.857147 12.571427 438.428589 26.285713 452.142853 C 33.142857 459 40 462.428558 50.285713 462.428558 C 60.571426 462.428558 67.428574 459 74.285713 452.142853 L 245.714279 280.714294 C 259.428589 267 259.428589 246.428558 245.714279 232.714294 Z"/>
                        <path id="Rounded-Rectangle" fill="#212121" fill-rule="evenodd" stroke="none" d="M 256 431 C 256 448.673096 270.326874 463 288 463 L 464 463 C 481.673096 463 496 448.673096 496 431 L 496 429 C 496 411.326904 481.673096 397 464 397 L 288 397 C 270.326874 397 256 411.326904 256 429 Z"/>
                    </g>
                </svg>
            </div>
            <h1 class="wowp-header__title">
				<?php echo esc_html( WPCoder::info( 'name' ) ); ?>
                <sup class="wowp-header__title-version"><?php echo esc_html( WPCoder::info( 'version' ) ); ?></sup>
            </h1>
            <div class="wowp-header__links">
				<?php do_action( WPCoder::PREFIX . '_admin_header_links' ); ?>
            </div>
        </div>


		<?php
	}

	public static function logo_url(): string {
		$logo_url = WPCoder::url() . 'assets/img/plugin-logo.png';
		if ( filter_var( $logo_url, FILTER_VALIDATE_URL ) !== false ) {
			return $logo_url;
		}

		return '';
	}

	public static function menu(): void {

		$pages = DashboardHelper::get_files( 'pages' );
		unset( $pages["3"], $pages["4"] );

		$current_page = self::get_current_page();

		$action = ( isset( $_REQUEST["action"] ) ) ? sanitize_text_field( $_REQUEST["action"] ) : '';

		echo '<h2 class="nav-tab-wrapper wowp-nav-tab-wrapper">';
		foreach ( $pages as $key => $page ) {
			$class = ( $page['file'] === $current_page ) ? ' nav-tab-active' : '';
			$id    = '';

			if ( $action === 'update' && $page['file'] === 'settings' ) {
				$id           = ( isset( $_REQUEST["id"] ) ) ? absint( $_REQUEST["id"] ) : '';
				$page['name'] = __( 'Update', 'wp-coder' ) . ' #' . $id;
			} elseif ( $page['file'] === 'settings' && ( $action !== 'new' && $action !== 'duplicate' ) ) {
				continue;
			}

			echo '<a class="nav-tab' . esc_attr( $class ) . '" href="' . esc_url( Link::menu( $page['file'], $action, $id ) ) . '">' . esc_html( $page['name'] ) . '</a>';
		}
		echo '</h2>';


	}

	public static function include_pages(): void {
		$current_page = self::get_current_page();

		$pages   = DashboardHelper::get_files( 'pages' );
		$default = DashboardHelper::first_file( 'pages' );

		$current = DashboardHelper::search_value( $pages, $current_page ) ? $current_page : $default;

		$file = DashboardHelper::get_file( $current, 'pages' );


		if ( $file !== false ) {
			$file = apply_filters( WPCoder::PREFIX . '_admin_filter_file', $file, $current );

			$page_path = DashboardHelper::get_folder_path( 'pages' ) . '/' . $file;

			if ( file_exists( $page_path ) ) {
				require_once $page_path;
			}
		}

	}


	public static function get_current_page(): string {
		$default = DashboardHelper::first_file( 'pages' );

		return ( isset( $_REQUEST["tab"] ) ) ? sanitize_text_field( $_REQUEST["tab"] ) : $default;
	}


}