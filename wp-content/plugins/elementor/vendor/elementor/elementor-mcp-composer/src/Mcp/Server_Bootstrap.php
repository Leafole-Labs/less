<?php

namespace Elementor\MCP\Composer\Mcp;

use Elementor\MCP\Composer\Admin\McpSettingsController;
use WP\MCP\Core\McpAdapter;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Boots the unified Elementor MCP server from the shared ability registry.
 */
class Server_Bootstrap {

	/**
	 * Whether the mcp_adapter_init hook has already been registered.
	 *
	 * @var bool
	 */
	private static $hooked = false;

	/**
	 * Register the MCP adapter hook when the adapter is available.
	 */
	public function __construct() {
		if ( self::$hooked ) {
			return;
		}

		if ( ! class_exists( McpAdapter::class ) || ! function_exists( 'wp_register_ability' ) ) {
			return;
		}

		self::$hooked = true;

		if ( ! McpSettingsController::is_enabled() ) {
			\add_filter( 'mcp_adapter_create_default_server', '__return_false' );

			return;
		}

		McpAdapter::instance();
		\add_action( 'mcp_adapter_init', [ $this, 'register_server' ] );
	}

	/**
	 * Create the unified Elementor MCP server.
	 *
	 * @param mixed $adapter McpAdapter instance.
	 * @return void
	 */
	public function register_server( $adapter ): void {
		if ( ! McpSettingsController::is_enabled() ) {
			return;
		}

		if ( ! $adapter instanceof McpAdapter ) {
			return;
		}

		$registry  = Registry::instance();
		$tools     = $registry->get_tools();
		$resources = $registry->get_resources();
		$prompts   = $registry->get_prompts();

		if ( empty( $tools ) && empty( $resources ) && empty( $prompts ) ) {
			return;
		}

		$result = $adapter->create_server(
			'elementor-mcp-server',
			'elementor',
			'mcp',
			'Elementor MCP',
			'Read and modify Elementor Editor abilities.',
			'v1.0.0',
			[ \WP\MCP\Transport\HttpTransport::class ],
			\WP\MCP\Infrastructure\ErrorHandling\ErrorLogMcpErrorHandler::class,
			\WP\MCP\Infrastructure\Observability\NullMcpObservabilityHandler::class,
			$tools,
			$resources,
			$prompts
		);

		if ( is_wp_error( $result ) && $result instanceof \WP_Error ) {
			// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
			error_log( sprintf( '[Elementor MCP] Server registration failed: %s', $result->get_error_message() ) );
		}
	}
}
