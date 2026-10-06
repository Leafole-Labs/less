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
	 * First adapter version that reads resource URIs from the `mcp.uri` ability meta.
	 */
	const MIN_NAMESPACED_RESOURCE_META_VERSION = '0.5.0';

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

		if ( ! self::is_loaded_adapter_supported() ) {
			add_filter( 'mcp_adapter_default_server_config', [ $this, 'exclude_registry_resources' ] );
		}

		McpAdapter::instance();
		add_action( 'mcp_adapter_init', [ $this, 'register_server' ] );
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
		$resources = self::is_loaded_adapter_supported() ? $registry->get_resources() : [];
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

	/**
	 * Remove registry resources from the adapter's auto-discovered default server.
	 *
	 * @param mixed $config Default server config.
	 * @return mixed
	 */
	public function exclude_registry_resources( $config ) {
		if ( ! is_array( $config ) || empty( $config['resources'] ) || ! is_array( $config['resources'] ) ) {
			return $config;
		}

		$config['resources'] = array_values( array_diff( $config['resources'], Registry::instance()->get_resources() ) );

		return $config;
	}

	/**
	 * Whether an adapter version reads resource URIs from `mcp.uri`.
	 *
	 * @param string $adapter_version Adapter version.
	 * @return bool
	 */
	public static function supports_namespaced_resource_meta( string $adapter_version ): bool {
		return version_compare( $adapter_version, self::MIN_NAMESPACED_RESOURCE_META_VERSION, '>=' );
	}

	/**
	 * Whether the MCP adapter copy that won class resolution reads `mcp.uri`.
	 *
	 * @return bool
	 */
	private static function is_loaded_adapter_supported(): bool {
		return self::supports_namespaced_resource_meta( self::loaded_adapter_version() );
	}

	/**
	 * Version of the MCP adapter copy that won class resolution.
	 *
	 * @return string
	 */
	private static function loaded_adapter_version(): string {
		$version_constant = McpAdapter::class . '::VERSION';

		return defined( $version_constant ) ? (string) constant( $version_constant ) : '0';
	}
}
