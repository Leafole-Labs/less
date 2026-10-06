<?php

global $__composer_autoload_files, $elementor_mcp_composer_versions;

/**
 * Allow this file to be executed multiple times across different plugin instances.
 *
 * This package may be bundled with multiple plugins, and each plugin needs to register
 * its version. By default, Composer's autoloader prevents the same file from being loaded
 * more than once. To enable re-execution, we remove this file from Composer's global
 * registry of loaded files ($__composer_autoload_files).
 *
 * Process:
 * 1. Locate the vendor directory (2 levels up when installed as a Composer package)
 * 2. Load Composer's autoload files map (hash => file path mappings)
 * 3. Find this file's unique hash ID in the map
 * 4. Remove the hash from the loaded files registry to allow subsequent executions
 */
$vendor_dir = dirname( __DIR__, 2 );
$autoload_files_path = $vendor_dir . '/composer/autoload_files.php';

if ( file_exists( $autoload_files_path ) ) {
	$autoload_files_map = require $autoload_files_path;
	$autoload_files_id  = array_search( __FILE__, $autoload_files_map, true );

	if ( false !== $autoload_files_id && isset( $__composer_autoload_files[ $autoload_files_id ] ) ) {
		unset( $__composer_autoload_files[ $autoload_files_id ] );
	}
}

$pattern = '#/([^/]+)/vendor/elementor/#';
if ( preg_match( $pattern, __DIR__, $matches ) ) {
	$elementor_mcp_composer_versions[ $matches[1] ] = '1.0.19';
}

if ( ! function_exists( 'elementor_mcp_composer_register_1_dot_0_dot_19' ) && function_exists( 'add_action' ) ) {

	if ( ! class_exists( '\Elementor\MCP\Composer\Versions', false ) ) {
		require_once __DIR__ . '/src/Versions.php';
		add_action( 'plugins_loaded', [ \Elementor\MCP\Composer\Versions::class, 'initialize_latest_version' ], -15, 0 );
	}

	add_action( 'plugins_loaded', 'elementor_mcp_composer_register_1_dot_0_dot_19', -20, 0 );

	/**
	 * Register this package version with the version arbitrator.
	 *
	 * @return void
	 */
	function elementor_mcp_composer_register_1_dot_0_dot_19() {
		$versions = \Elementor\MCP\Composer\Versions::instance();
		$versions->register( '1.0.19', 'elementor_mcp_composer_initialize_1_dot_0_dot_19' );
	}

	/**
	 * Initialize this package version when selected as the latest.
	 *
	 * @return void
	 */
	function elementor_mcp_composer_initialize_1_dot_0_dot_19() {
		\Elementor\MCP\Composer\Loader::init();
	}
}
