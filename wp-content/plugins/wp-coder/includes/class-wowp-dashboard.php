<?php

namespace WPCoder;

use WPCoder\Admin\AdminInitializer;
use WPCoder\Dashboard\DashboardInitializer;
use WPCoder\Dashboard\ImporterExporter;

defined( 'ABSPATH' ) || exit;

class WOWP_Dashboard {

	public function __construct() {
		add_filter( WPCoder::PREFIX . '_menu_logo', [ $this, 'menu_logo' ] );
		add_action( WPCoder::PREFIX . '_admin_load_styles_scripts', [ $this, 'load_styles_scripts' ] );
		add_action( WPCoder::PREFIX . '_admin_page', [ $this, 'dashboard' ] );
		add_action( WPCoder::PREFIX . '_admin_header_links', [ $this, 'header_links' ] );
		add_filter( WPCoder::PREFIX . '_save_settings', [ $this, 'save_settings' ], 10, 2 );
		add_filter( WPCoder::PREFIX . '_default_custom_post', [ $this, 'default_custom_post' ] );
		AdminInitializer::init();
		add_action( 'admin_init', [ ImporterExporter::class, 'export_items' ] );
	}

	public function menu_logo( $logo ): string {
		$logo = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><title>code</title><g fill="#212121"><path d="M19.562,18.75c-.69-.862-1.948-1.003-2.811-.312L1.75,30.438c-.474,.379-.75,.954-.75,1.562s.276,1.182,.75,1.562l15,12c.369,.295,.81,.438,1.248,.438,.587,0,1.168-.257,1.563-.75,.69-.863,.55-2.121-.312-2.811l-13.048-10.438,13.048-10.438c.862-.69,1.002-1.948,.312-2.811Z" fill="#212121"></path><path d="M47.25,18.438c-.862-.691-2.121-.55-2.811,.312-.69,.863-.55,2.121,.312,2.811l13.048,10.438-13.048,10.438c-.862,.69-1.002,1.948-.312,2.811,.395,.494,.976,.75,1.563,.75,.438,0,.879-.143,1.248-.438l15-12c.474-.379,.75-.954,.75-1.562s-.276-1.182-.75-1.562l-15-12Z" fill="#212121"></path><path d="M39.539,5.074c-1.063-.298-2.167,.324-2.465,1.387l-14,50c-.298,1.063,.323,2.167,1.387,2.465,.18,.051,.362,.075,.54,.075,.875,0,1.678-.578,1.925-1.461L40.926,7.539c.298-1.063-.323-2.167-1.387-2.465Z" fill="#212121"></path></g></svg>';

		return $logo;
	}

	public function default_custom_post( $display_def ) {
		if ( str_contains( $display_def, 'custom_post_selected' ) ) {
			return 'post_selected';
		}
		if ( str_contains( $display_def, 'custom_post_tax' ) ) {
			return 'post_category';
		}
		if ( str_contains( $display_def, 'custom_post_all' ) ) {
			return 'post_all';
		}

		return $display_def;
	}

	public function save_settings( $settings, $request ): array {
		$param = ! empty( $request['param'] ) ? map_deep( $request['param'], [ $this, 'sanitize_param' ] ) : [];

		$settings['data']['title']       = ! empty( $request['title'] ) ? sanitize_text_field( wp_unslash( $request['title'] ) ) : '';
		$settings['formats'][]           = '%s';
		$settings['data']['html_code']   = ! empty( $request['html_code'] ) ? wp_unslash( $request['html_code'] ) : '';
		$settings['formats'][]           = '%s';
		$settings['data']['css_code']    = ! empty( $request['css_code'] ) ? wp_unslash( $request['css_code'] ) : '';
		$settings['formats'][]           = '%s';
		$settings['data']['js_code']     = ! empty( $request['js_code'] ) ? wp_unslash( $request['js_code'] ) : '';
		$settings['formats'][]           = '%s';
		$settings['data']['php_code']    = ! empty( $request['php_code'] ) ? wp_unslash( $request['php_code'] ) : '';
		$settings['formats'][]           = '%s';
		$settings['data']['status']      = ! empty( $request['status'] ) ? sanitize_textarea_field( wp_unslash( $request['status'] ) ) : '';
		$settings['formats'][]           = '%d';
		$settings['data']['mode']        = ! empty( $request['mode'] ) ? sanitize_textarea_field( wp_unslash( $request['mode'] ) ) : '';
		$settings['formats'][]           = '%d';
		$settings['data']['tag']         = ! empty( $request['tag'] ) ? sanitize_textarea_field( wp_unslash( $request['tag'] ) ) : '';
		$settings['formats'][]           = '%s';
		$settings['data']['php_include'] = ! empty( $request['php_include'] ) ? sanitize_textarea_field( wp_unslash( $request['php_include'] ) ) : '';
		$settings['formats'][]           = '%d';


		if ( ! empty( $request['param']['include_file'] ) ) {
			$param['include_file'] = ! empty( $request['param']['include_file'] ) ? map_deep( $request['param']['include_file'],
				'esc_url' ) : [];
		}

		$settings['data']['param'] = maybe_serialize( $param );
		$settings['formats'][]     = '%s';

		return $settings;
	}

	public function sanitize_param( $value ) {
		return wp_unslash( sanitize_text_field( $value ) );
	}

	public function load_styles_scripts(): void {
		$assets_url = WPCoder::url() . 'assets/';
		$version    = WPCoder::info( 'version' );
		$slug       = WPCoder::SLUG;

		wp_enqueue_style( $slug . '-icons', $assets_url . 'icons/css/icons.css', null, $version );
		wp_enqueue_style( $slug . '-admin', $assets_url . 'css/admin.css', null, $version );

		wp_enqueue_script( 'code-editor' );
		wp_enqueue_style( 'code-editor' );
		wp_enqueue_script( 'htmlhint' );
		wp_enqueue_script( 'csslint' );
		wp_enqueue_script( 'jshint' );
		wp_enqueue_style( 'thickbox' );
		wp_enqueue_script( 'thickbox' );

		wp_enqueue_media();

		wp_enqueue_script( $slug . '-admin', $assets_url . 'js/admin.js', array( 'jquery' ), $version );

		wp_enqueue_script( $slug . '-admin-jquery', $assets_url . 'js/admin-jquery.js', array( 'jquery' ), $version );
	}

	public function dashboard(): void {
		DashboardInitializer::init();
	}


	public function header_links(): void {
		?>

        <a href="https://wpcoder.pro/category/documentation/?utm_source=wordpress&utm_medium=admin-menu&utm_campaign=documentation"
           class="wowp-button button button-secondary">
            <span class="dashicons dashicons-book-alt"></span> Documentation
        </a>
        <a href="https://wordpress.org/support/plugin/wp-coder/reviews/" class="wowp-button button button-secondary">
            <span class="dashicons dashicons-star-filled"></span> Reviews
        </a>

        <a href="https://wpcoder.pro/" target="_blank"
           class="wowp-button button button-dark">
            <span>⭐</span> See PRO Features
        </a>
		<?php
	}


}