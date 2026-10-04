<?php

namespace Elementor\MCP\Composer\Admin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Base REST controller for versioned Elementor MCP endpoints.
 */
abstract class RestController {

	/**
	 * Get the REST namespace for the active package version.
	 *
	 * @return string
	 */
	protected function get_namespace(): string {
		$version = defined( 'ELEMENTOR_MCP_COMPOSER_VERSION' ) ? ELEMENTOR_MCP_COMPOSER_VERSION : '1.0.0';

		return 'elementor-mcp-composer/v' . $version;
	}

	/**
	 * Register controller routes.
	 *
	 * @return void
	 */
	abstract public function register_routes(): void;
}
