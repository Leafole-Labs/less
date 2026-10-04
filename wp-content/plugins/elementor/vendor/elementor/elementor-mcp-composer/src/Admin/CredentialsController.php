<?php

namespace Elementor\MCP\Composer\Admin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Generates onboarding credentials for MCP clients.
 */
class CredentialsController extends RestController {

	/**
	 * Register the credentials route.
	 *
	 * @return void
	 */
	public function register_routes(): void {
		\register_rest_route(
			$this->get_namespace(),
			'/mcp-credentials',
			[
				'methods'             => 'POST',
				'callback'            => [ $this, 'generate_credentials' ],
				'permission_callback' => [ $this, 'check_permission' ],
				'args'                => [
					'client' => [
						'required' => true,
						'type'     => 'string',
						'enum'     => [ 'claude-code', 'claude-desktop', 'codex', 'cursor', 'other' ],
					],
				],
			]
		);
	}

	/**
	 * Validate the caller for credential generation.
	 *
	 * @param \WP_REST_Request $request Request instance.
	 * @return true|\WP_Error
	 */
	public function check_permission( \WP_REST_Request $request ) {
		$nonce = $request->get_header( 'X-WP-Nonce' );

		if ( ! $nonce || ! \wp_verify_nonce( $nonce, 'wp_rest' ) ) {
			return new \WP_Error(
				'invalid_nonce',
				__( 'The request nonce is invalid.', 'elementor' ),
				[ 'status' => 403 ]
			);
		}

		if ( ! \current_user_can( 'manage_options' ) ) {
			return new \WP_Error(
				'forbidden',
				__( 'You are not allowed to generate credentials.', 'elementor' ),
				[ 'status' => 403 ]
			);
		}

		return true;
	}

	/**
	 * Create a WordPress application password for the selected client.
	 *
	 * @param \WP_REST_Request $request Request instance.
	 * @return \WP_REST_Response|\WP_Error
	 */
	public function generate_credentials( \WP_REST_Request $request ) {
		if ( ! McpSettingsController::is_enabled() ) {
			return new \WP_Error(
				'mcp_disabled',
				__( 'Elementor MCP is currently disabled for this site.', 'elementor' ),
				[ 'status' => 403 ]
			);
		}

		if ( ! class_exists( '\WP_Application_Passwords' ) ) {
			return new \WP_Error(
				'application_passwords_unavailable',
				__( 'Application passwords are not available on this site.', 'elementor' ),
				[ 'status' => 500 ]
			);
		}

		$user = \wp_get_current_user();

		if ( ! $user || ! $user->exists() ) {
			return new \WP_Error(
				'invalid_user',
				__( 'Could not determine the current user.', 'elementor' ),
				[ 'status' => 500 ]
			);
		}

		$client = (string) $request->get_param( 'client' );

		$created = \WP_Application_Passwords::create_new_application_password(
			$user->ID,
			[
				'name' => sprintf(
					'Elementor MCP - %s (%s)',
					ucwords( str_replace( '-', ' ', $client ) ),
					gmdate( 'Y-m-d H:i:s' )
				),
			]
		);

		if ( \is_wp_error( $created ) ) {
			return new \WP_Error(
				'password_generation_failed',
				__( 'Failed to generate application password.', 'elementor' ),
				[ 'status' => 500 ]
			);
		}

		[ $password ] = $created;
		$site_name    = \get_bloginfo( 'name' );
		$username     = $user->user_login;
		$chunked_pwd  = \WP_Application_Passwords::chunk_password( $password );

		$credentials_string = $username . ':' . $password;
		$encoded_credentials = base64_encode( $credentials_string );

		return new \WP_REST_Response(
			[
				'success' => true,
				'data'    => [
					'username'            => $username,
					'password'            => $chunked_pwd,
					'serverUrl'           => \rest_url( 'elementor/mcp/' ),
					'serverName'          => \sanitize_title( $site_name ) . '-elementor',
					'encodedCredentials'  => $encoded_credentials,
				],
			],
			200
		);
	}
}
