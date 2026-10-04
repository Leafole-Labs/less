<?php

namespace Elementor\MCP\Composer;

use Elementor\MCP\Composer\Admin\ConsentController;
use Elementor\MCP\Composer\Admin\CredentialsController;
use Elementor\MCP\Composer\Admin\McpSettingsController;
use Elementor\MCP\Composer\Admin\TestController;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Bootstraps the active package version inside WordPress.
 */
class Loader {

	/**
	 * Initialize the package.
	 *
	 * @return void
	 */
	public static function init(): void {
		self::define_constants();
		self::initialize_services();
		add_action( 'rest_api_init', [ self::class, 'register_rest_routes' ] );
	}

	/**
	 * Define package constants.
	 *
	 * @return void
	 */
	public static function define_constants(): void {
		if ( ! defined( 'ELEMENTOR_MCP_COMPOSER_VERSION' ) ) {
			define( 'ELEMENTOR_MCP_COMPOSER_VERSION', '1.0.18' );
		}

		if ( ! defined( 'ELEMENTOR_MCP_ONBOARDING_FASTLANE' ) ) {
			define( 'ELEMENTOR_MCP_ONBOARDING_FASTLANE', true );
		}

		if ( ! defined( 'ELEMENTOR_MCP_COMPOSER_PATH' ) && function_exists( 'plugin_dir_path' ) ) {
			define( 'ELEMENTOR_MCP_COMPOSER_PATH', plugin_dir_path( __DIR__ ) );
		}

		if ( ! defined( 'ELEMENTOR_MCP_COMPOSER_URL' ) && function_exists( 'plugin_dir_url' ) ) {
			define( 'ELEMENTOR_MCP_COMPOSER_URL', plugin_dir_url( __DIR__ ) );
		}

		if ( ! defined( 'ELEMENTOR_MCP_COMPOSER_ASSETS_URL' ) && function_exists( 'plugin_dir_url' ) ) {
			define( 'ELEMENTOR_MCP_COMPOSER_ASSETS_URL', plugin_dir_url( __DIR__ ) . 'assets/build/' );
		}

		if ( ! defined( 'ELEMENTOR_MCP_COMPOSER_ASSETS_PATH' ) && function_exists( 'plugin_dir_path' ) ) {
			define( 'ELEMENTOR_MCP_COMPOSER_ASSETS_PATH', plugin_dir_path( __DIR__ ) . 'assets/build/' );
		}
	}

	/**
	 * Initialize package-specific services.
	 *
	 * @return void
	 */
	private static function initialize_services(): void {
		new Mcp\Server_Bootstrap();
	}

	/**
	 * Register REST routes for the admin onboarding UI.
	 *
	 * @return void
	 */
	public static function register_rest_routes(): void {
		$mcp_settings_controller = new McpSettingsController();
		$mcp_settings_controller->register_routes();

		$fastlane_mode = defined( 'ELEMENTOR_MCP_ONBOARDING_FASTLANE' ) && ELEMENTOR_MCP_ONBOARDING_FASTLANE;

		if ( ! $fastlane_mode ) {
			$consent_controller = new ConsentController();
			$consent_controller->register_routes();

			$test_controller = new TestController();
			$test_controller->register_routes();
		}

		$credentials_controller = new CredentialsController();
		$credentials_controller->register_routes();
	}
}
