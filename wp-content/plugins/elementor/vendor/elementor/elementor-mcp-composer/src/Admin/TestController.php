<?php

namespace Elementor\MCP\Composer\Admin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Validates onboarding test responses pasted from the AI client.
 */
class TestController extends RestController {
	const META_KEY = 'elementor_mcp_test_completed';

	/**
	 * Register the test validation route.
	 *
	 * @return void
	 */
	public function register_routes(): void {
		\register_rest_route(
			$this->get_namespace(),
			'/mcp-validate-response',
			[
				'methods'             => 'POST',
				'callback'            => [ $this, 'validate_response' ],
				'permission_callback' => [ $this, 'check_permission' ],
				'args'                => [
					'response' => [
						'required' => true,
						'type'     => 'string',
					],
				],
			]
		);
	}

	/**
	 * Validate the caller for test-response mutations.
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
				__( 'You are not allowed to validate the test response.', 'elementor' ),
				[ 'status' => 403 ]
			);
		}

		return true;
	}

	/**
	 * Validate the pasted client response.
	 *
	 * @param \WP_REST_Request $request Request instance.
	 * @return \WP_REST_Response|\WP_Error
	 */
	public function validate_response( \WP_REST_Request $request ) {
		if ( ! McpSettingsController::is_enabled() ) {
			return new \WP_Error(
				'mcp_disabled',
				__( 'Elementor MCP is currently disabled for this site.', 'elementor' ),
				[ 'status' => 403 ]
			);
		}

		$response_text = trim( (string) $request->get_param( 'response' ) );

		if ( '' === $response_text ) {
			return new \WP_Error(
				'missing_response',
				__( 'A response payload is required.', 'elementor' ),
				[ 'status' => 400 ]
			);
		}

		$candidate = $this->extract_json_candidate( $response_text );

		if ( null === $candidate ) {
			return new \WP_REST_Response(
				[
					'success' => false,
					'message' => __( 'Invalid response. Please try again.', 'elementor' ),
				],
				200
			);
		}

		$user_id = \get_current_user_id();

		if ( ! $user_id ) {
			return new \WP_Error(
				'user_not_found',
				__( 'User not found.', 'elementor' ),
				[ 'status' => 403 ]
			);
		}

		$test_data = [
			'completed' => true,
			'timestamp' => time(),
		];

		\update_user_meta( $user_id, self::META_KEY, $test_data );

		return new \WP_REST_Response(
			[
				'success' => true,
				'data'    => $test_data,
			],
			200
		);
	}

	/**
	 * Try to extract a valid JSON payload from the pasted response.
	 *
	 * Accepts raw JSON, fenced code blocks, or prose that contains a balanced JSON object/array.
	 *
	 * @param string $response_text Full pasted response.
	 * @return string|null
	 */
	private function extract_json_candidate( string $response_text ): ?string {
		$trimmed = trim( $response_text );

		if ( $this->is_valid_json( $trimmed ) ) {
			return $trimmed;
		}

		if ( preg_match( '/```(?:json)?\s*(.*?)```/is', $trimmed, $matches ) ) {
			$fenced_candidate = trim( $matches[1] );

			if ( $this->is_valid_json( $fenced_candidate ) ) {
				return $fenced_candidate;
			}
		}

		foreach ( [ '{', '[' ] as $opening_char ) {
			$balanced_candidate = $this->extract_balanced_json( $trimmed, $opening_char );

			if ( null !== $balanced_candidate && $this->is_valid_json( $balanced_candidate ) ) {
				return $balanced_candidate;
			}
		}

		return null;
	}

	/**
	 * Check whether the supplied string decodes as JSON.
	 *
	 * @param string $candidate Candidate payload.
	 * @return bool
	 */
	private function is_valid_json( string $candidate ): bool {
		if ( '' === $candidate ) {
			return false;
		}

		json_decode( $candidate, true );

		return JSON_ERROR_NONE === json_last_error();
	}

	/**
	 * Extract the first balanced JSON object or array from a string.
	 *
	 * @param string $value Input string.
	 * @param string $opening_char Either "{" or "[".
	 * @return string|null
	 */
	private function extract_balanced_json( string $value, string $opening_char ): ?string {
		$closing_char = '{' === $opening_char ? '}' : ']';
		$length       = strlen( $value );
		$start        = strpos( $value, $opening_char );

		while ( false !== $start ) {
			$depth     = 0;
			$in_string = false;
			$escaped   = false;

			for ( $index = $start; $index < $length; $index++ ) {
				$char = $value[ $index ];

				if ( $escaped ) {
					$escaped = false;
					continue;
				}

				if ( '\\' === $char ) {
					$escaped = true;
					continue;
				}

				if ( '"' === $char ) {
					$in_string = ! $in_string;
					continue;
				}

				if ( $in_string ) {
					continue;
				}

				if ( $opening_char === $char ) {
					++$depth;
				}

				if ( $closing_char === $char ) {
					--$depth;
				}

				if ( 0 === $depth ) {
					return substr( $value, $start, $index - $start + 1 );
				}
			}

			$start = strpos( $value, $opening_char, $start + 1 );
		}

		return null;
	}

	/**
	 * Read the stored test completion settings.
	 *
	 * @param int|null $user_id User ID. Defaults to current user.
	 * @return array<string, bool|int|null>
	 */
	public static function get_test_completed( ?int $user_id = null ): array {
		if ( null === $user_id ) {
			$user_id = \get_current_user_id();
		}

		if ( ! $user_id ) {
			return [
				'completed' => null,
				'timestamp' => null,
			];
		}

		$test = \get_user_meta( $user_id, self::META_KEY, true );

		if ( ! is_array( $test ) ) {
			return [
				'completed' => null,
				'timestamp' => null,
			];
		}

		return $test;
	}
}
