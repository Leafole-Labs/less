<?php

namespace WPCoder;

defined( 'ABSPATH' ) || exit;

use WPCoder\Dashboard\DBManager;
use WPCoder\Dashboard\FolderManager;
use WPCoder\Optimization\HTMLMinifier;
use WPCoder\Publisher\Conditions;
use WPCoder\Publisher\EnqueueScript;
use WPCoder\Publisher\EnqueueStyle;
use WPCoder\Publisher\PHPIncludes;
use WPCoder\Publisher\Singleton;

class WOWP_Public {

	public function __construct() {
		add_shortcode( 'WP-Coder', [ $this, 'shortcode' ] );
		add_shortcode( WPCoder::SHORTCODE, [ $this, 'shortcode' ] );

		add_action( 'wp_footer', [ $this, 'print_footer' ], 50 );

		new PHPIncludes;
	}

	public function shortcode( $atts, $shortcode_content = null ) {
		if ( ! empty( $atts['id'] ) ) {
			$result = DBManager::get_data_by_id( $atts['id'] );
		} elseif ( ! empty( $atts['title'] ) ) {
			$result = DBManager::get_data_by_title( $atts['title'] );
		} else {
			return false;
		}

		if ( empty( $result ) ) {
			return false;
		}

		$default_atts      = [ 'id' => "", 'title' => '' ];
		$add_atts          = $this->get_shortcode_atts( $result );
		$filtered_new_atts = array_diff_key( $add_atts, $default_atts );
		$result_atts       = array_merge( $default_atts, $filtered_new_atts );

		$attrs = shortcode_atts( $result_atts, $atts, WPCoder::SHORTCODE );

		if ( Conditions::init( $result ) === false ) {
			return false;
		}


		$wp_coder_content_out = $this->get_content( $result, $shortcode_content, $attrs );

		$singleton = Singleton::getInstance();
		$singleton->setValue( $result->id, $result );

		EnqueueStyle::init( $result );
		EnqueueScript::init( $result );

		return $wp_coder_content_out;
	}

	private function get_shortcode_atts( $result ): array {
		$param = maybe_unserialize( $result->param );
		if ( empty( $param['shortcode_attribute'] ) || ! is_array( $param['shortcode_attribute'] ) ) {
			return array();
		}

		return array_fill_keys( $param['shortcode_attribute'], '' );
	}


	public function print_footer() {
		$singleton  = Singleton::getInstance();
		$shortcodes = $singleton->getValue();

		foreach ( $shortcodes as $id => $result ) {
			EnqueueStyle::inline( $result );
			EnqueueScript::inline( $result );
		}
	}

	private function get_content( $result, $shortcode_content = null, $attrs = null ) {
		$shortcode_content = !empty($shortcode_content) ? do_shortcode( $shortcode_content ) : '';
		$wp_coder_content = !empty($result->html_code) ? do_shortcode( $result->html_code ) : '';

		if ( ! empty( $attrs ) ) {
			extract( $attrs, EXTR_PREFIX_SAME, "wpcp" );
		}

		if ( ! empty( $result->php_code ) ) {
			$path = FolderManager::code_path( $result );
			include $path;
		}

		if ( preg_match_all( '/\{\{(.*?)\}\}/', $wp_coder_content, $matches ) && is_array( $matches[1] ) ) {
			foreach ( $matches[1] as $match ) {
				$wpcoder_variable = str_replace( '$', '', $match );
				if ( isset( $$wpcoder_variable ) ) {
					$wp_coder_content = str_replace( '{{' . $match . '}}', $$wpcoder_variable, $wp_coder_content );
				}
			}
		}

		$param = ! empty( $result->param ) ? maybe_unserialize( $result->param ) : [];
		if ( ! empty( $param['minified_html'] ) ) {
			return HTMLMinifier::minify( $wp_coder_content );
		}


		return $wp_coder_content;
	}

}