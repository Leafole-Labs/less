<?php

namespace WPCoder\Block;

use WP_REST_Request;
use WPCoder\WPCoder;

class WPCoder_Block {
	public function __construct() {
		add_action( 'admin_enqueue_scripts', [ $this, 'admin_scripts' ] );
		add_action( 'init', [ $this, 'register_block' ] );
		add_action( 'rest_api_init', [ $this, 'rest_api' ] );
	}

	public function admin_scripts( $hook ): void {
		wp_localize_script( 'wpcoder-block-editor', 'wpcoderBlockData', array(
			'editBaseUrl' => admin_url( 'admin.php?page=' . WPCoder::SLUG . '-settings' )
		) );
	}

	public function register_block(): void {
		wp_register_script(
			'wpcoder-block-editor',
			plugins_url( 'block.js', __FILE__ ),
			array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-block-editor', 'wp-components' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
		);

		register_block_type( 'wpcoder/shortcode', array(
			'editor_script'   => 'wpcoder-block-editor',
			'render_callback' => [ $this, 'render_block' ],
			'attributes'      => array(
				'id' => array(
					'type'    => 'string',
					'default' => ''
				),
			),
			'icon' => 'editor-code',
		) );
	}

	public function render_block( $attributes ): string {
		if ( empty( $attributes['id'] ) ) {
			return '<p style="color:red;">' . esc_html__( 'Please select a WP Coder snippet.', 'wpcoderpro' ) . '</p>';
		}

		$shortcode = '['.WPCoder::SHORTCODE.' id="' . (int) $attributes['id'] . '"';

		if ( ! empty( $attributes['extraAttrs'] ) && is_array( $attributes['extraAttrs'] ) ) {
			foreach ( $attributes['extraAttrs'] as $attr ) {
				if ( ! empty( $attr['key'] ) ) {
					$val       = esc_attr( $attr['value'] ?? '' );
					$shortcode .= ' ' . sanitize_key( $attr['key'] ) . '="' . $val . '"';
				}
			}
		}

		$shortcode .= ']';

		return do_shortcode( $shortcode );
	}

	public function rest_api(): void {
		$permission = static function () {
			return current_user_can( 'edit_posts' );
		};

		register_rest_route( 'wpcoder/v1', '/preview', array(
			'methods'  => 'POST',
			'callback' => [ $this, 'preview_callback' ],
			'permission_callback' => $permission
		));

		register_rest_route( 'wpcoder/v1', '/attributes', array(
			'methods'  => 'POST',
			'callback' => [ $this, 'attributes_callback' ],
			'permission_callback' => $permission
		));
	}

	public function preview_callback( WP_REST_Request $request ): array {
		global $wpdb;

		$id    = (int) $request['id'];
		$extra = $request['extraAttrs'] ?? [];

		$shortcode = '['.WPCoder::SHORTCODE.' id="' . $id . '"';

		if ( ! empty($extra) && is_array($extra) ) {
			foreach ( $extra as $attr ) {
				if ( ! empty($attr['key']) && $attr['value'] !== '' ) {
					$shortcode .= ' ' . esc_attr($attr['key']) . '="' . esc_attr($attr['value']) . '"';
				}
			}
		}

		$shortcode .= ']';

		$table = $wpdb->prefix . WPCoder::PREFIX;

		$snippet = $wpdb->get_row( $wpdb->prepare(
			"SELECT html_code, css_code FROM $table WHERE id = %d",
			$id
		) );

		if ( ! $snippet ) {
			return [
				'html' => '<p style="color:red;">'.__('Snippet not found', 'wpcoderpro').'</p>',
				'css'  => '',
			];
		}

		$html = do_shortcode( $shortcode );

		return [
			'html' => $html,
			'css'  => $snippet->css_code,
		];
	}

	public function attributes_callback( WP_REST_Request $request ): array {
		global $wpdb;
		$id    = (int) $request['id'];
		$table = $wpdb->prefix . WPCoder::PREFIX;

		$row = $wpdb->get_row( $wpdb->prepare(
			"SELECT param FROM $table WHERE id = %d", $id
		) );

		if ( ! $row ) {
			return [];
		}

		$attrs = [];
		if ( ! empty( $row->param ) ) {
			$data = maybe_unserialize( $row->param );

			if ( isset( $data['shortcode_attribute'] ) && is_array( $data['shortcode_attribute'] ) ) {
				foreach ( $data['shortcode_attribute'] as $attr ) {
					$attrs[] = array(
						'key'   => $attr,
						'value' => ''
					);
				}
			}
		}

		return $attrs;
	}
}