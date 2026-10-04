<?php

namespace Elementor\MCP\Composer\Admin;

use WP_Error;
use WP_REST_Request;
use WP_REST_Response;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Handles consent persistence for the onboarding flow.
 */
class ConsentController extends RestController {
	const META_KEY = 'elementor_mcp_consent';

	/**
	 * Register the consent route.
	 *
	 * @return void
	 */
	public function register_routes(): void {
		\register_rest_route(
			$this->get_namespace(),
			'/mcp-consent',
			[
				'methods'             => 'POST',
				'callback'            => [ $this, 'save_consent' ],
				'permission_callback' => [ $this, 'check_permission' ],
				'args'                => [
					'allowed' => [
						'required'          => true,
						'type'              => 'boolean',
						'sanitize_callback' => 'rest_sanitize_boolean',
					],
				],
			]
		);
	}

	/**
	 * Validate the caller for consent mutations.
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
				__( 'You are not allowed to update consent.', 'elementor' ),
				[ 'status' => 403 ]
			);
		}

		return true;
	}

	/**
	 * Persist the consent payload.
	 *
	 * @param WP_REST_Request $request Request instance.
	 * @return WP_REST_Response|WP_Error
	 */
	public function save_consent( WP_REST_Request $request ) {
		if ( ! McpSettingsController::is_enabled() ) {
			return new WP_Error(
				'mcp_disabled',
				__( 'Elementor MCP is currently disabled for this site.', 'elementor' ),
				[ 'status' => 403 ]
			);
		}

		$user_id = \get_current_user_id();

		if ( ! $user_id ) {
			return new WP_Error(
				'user_not_found',
				__( 'User not found.', 'elementor' ),
				[ 'status' => 403 ]
			);
		}

		$consent_data = [
			'allowed'   => (bool) $request->get_param( 'allowed' ),
			'timestamp' => time(),
		];

		$updated = \update_user_meta( $user_id, self::META_KEY, $consent_data );

		if ( ! $updated && self::get_consent( $user_id ) !== $consent_data ) {
			return new WP_Error(
				'save_failed',
				__( 'Failed to save consent.', 'elementor' ),
				[ 'status' => 500 ]
			);
		}

		return new WP_REST_Response(
			[
				'success' => true,
				'data'    => $consent_data,
			],
			200
		);
	}

	/**
	 * Read the stored consent settings.
	 *
	 * @param int|null $user_id User ID. Defaults to current user.
	 * @return array<string, bool|int|null>
	 */
	public static function get_consent( ?int $user_id = null ): array {
		if ( null === $user_id ) {
			$user_id = \get_current_user_id();
		}

		if ( ! $user_id ) {
			return [
				'allowed'   => null,
				'timestamp' => null,
			];
		}

		$consent = \get_user_meta( $user_id, self::META_KEY, true );

		if ( ! is_array( $consent ) ) {
			return [
				'allowed'   => null,
				'timestamp' => null,
			];
		}

		return $consent;
	}
}
