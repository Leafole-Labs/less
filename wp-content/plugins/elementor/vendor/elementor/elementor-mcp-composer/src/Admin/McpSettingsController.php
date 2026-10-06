<?php

namespace Elementor\MCP\Composer\Admin;

use WP_Error;
use WP_REST_Request;
use WP_REST_Response;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Handles site-wide MCP availability settings.
 */
class McpSettingsController extends RestController {
	const OPTION_NAME = 'elementor_mcp_enabled';
	private const MISSING_OPTION_VALUE = '__elementor_mcp_missing__';

	/**
	 * Register settings routes.
	 *
	 * @return void
	 */
	public function register_routes(): void {
		\register_rest_route(
			$this->get_namespace(),
			'/mcp-settings',
			[
				[
					'methods'             => 'GET',
					'callback'            => [ $this, 'get_settings' ],
					'permission_callback' => [ $this, 'check_permission' ],
				],
				[
					'methods'             => 'POST',
					'callback'            => [ $this, 'update_settings' ],
					'permission_callback' => [ $this, 'check_permission' ],
					'args'                => [
						'enabled' => [
							'required'          => true,
							'type'              => 'boolean',
							'sanitize_callback' => 'rest_sanitize_boolean',
						],
					],
				],
			]
		);
	}

	/**
	 * Validate the caller for settings reads and mutations.
	 *
	 * @param WP_REST_Request $request Request instance.
	 * @return true|WP_Error
	 */
	public function check_permission( WP_REST_Request $request ) {
		$nonce = $request->get_header( 'X-WP-Nonce' );

		if ( ! $nonce || ! \wp_verify_nonce( $nonce, 'wp_rest' ) ) {
			return new WP_Error(
				'invalid_nonce',
				__( 'The request nonce is invalid.', 'elementor' ),
				[ 'status' => 403 ]
			);
		}

		if ( ! \current_user_can( 'manage_options' ) ) {
			return new WP_Error(
				'forbidden',
				__( 'You are not allowed to manage Elementor MCP settings.', 'elementor' ),
				[ 'status' => 403 ]
			);
		}

		return true;
	}

	/**
	 * Return the current MCP settings payload.
	 *
	 * @return WP_REST_Response
	 */
	public function get_settings(): WP_REST_Response {
		return new WP_REST_Response(
			[
				'success' => true,
				'data'    => self::get_settings_data(),
			],
			200
		);
	}

	/**
	 * Persist the MCP enabled state.
	 *
	 * @param WP_REST_Request $request Request instance.
	 * @return WP_REST_Response|WP_Error
	 */
	public function update_settings( WP_REST_Request $request ) {
		$enabled = (bool) $request->get_param( 'enabled' );
		$current_value = \get_option( self::OPTION_NAME, self::MISSING_OPTION_VALUE );
		$updated       = self::MISSING_OPTION_VALUE === $current_value
			? \add_option( self::OPTION_NAME, $enabled, '', false )
			: \update_option( self::OPTION_NAME, $enabled );

		if ( ! $updated && self::is_enabled() !== $enabled ) {
			return new WP_Error(
				'save_failed',
				__( 'Failed to save Elementor MCP settings.', 'elementor' ),
				[ 'status' => 500 ]
			);
		}

		return new WP_REST_Response(
			[
				'success' => true,
				'data'    => self::get_settings_data(),
			],
			200
		);
	}

	/**
	 * Check whether MCP is enabled for the current site.
	 *
	 * Missing or invalid values default to enabled so upgrades stay opt-in.
	 *
	 * @return bool
	 */
	public static function is_enabled(): bool {
		$value = \get_option( self::OPTION_NAME, null );

		if ( null === $value ) {
			return false;
		}

		return (bool) $value;
	}

	/**
	 * Build the localized/frontend settings payload.
	 *
	 * @return array<string, bool>
	 */
	public static function get_settings_data(): array {
		return [
			'enabled' => self::is_enabled(),
		];
	}
}
