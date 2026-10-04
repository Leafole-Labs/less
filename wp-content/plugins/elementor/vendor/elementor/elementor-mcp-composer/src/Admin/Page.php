<?php

namespace Elementor\MCP\Composer\Admin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Passive MCP admin page definition.
 *
 * Exposes slug, titles, capability, icon, and render callback for consumers
 * to mount into any admin menu system. Does not register itself.
 */
class Page {

	const SLUG = 'elementor-mcp';
	const SCRIPT_HANDLE = 'elementor-mcp-page';

	/**
	 * @var Page|null
	 */
	private static $instance = null;

	public static function instance( $plugin_uri = '' ): self {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * @return string
	 */
	public function get_slug(): string {
		return self::SLUG;
	}

	/**
	 * @return string
	 */
	public function get_page_title(): string {
		return \esc_html__( 'Elementor MCP', 'elementor' );
	}

	/**
	 * @return string
	 */
	public function get_label(): string {
		return \esc_html__( 'Elementor MCP', 'elementor' );
	}

	/**
	 * @return string
	 */
	public function get_capability(): string {
		return 'manage_options';
	}

	/**
	 * @return string
	 */
	public function get_icon(): string {
		return 'eicon-code';
	}

	/**
	 * Enqueue assets for the admin page.
	 *
	 * @return void
	 */
	public function enqueue_assets(): void {
		$asset_file = ELEMENTOR_MCP_COMPOSER_ASSETS_PATH . 'mcp-page.asset.php';

		if ( ! file_exists( $asset_file ) ) {
			return;
		}

		$asset_data = require $asset_file;
		$version    = $asset_data['version'] ?? '1.0.0';
		$deps       = $asset_data['dependencies'] ?? [];
		$base_url   = ELEMENTOR_MCP_COMPOSER_ASSETS_URL;

		wp_enqueue_style(
			self::SCRIPT_HANDLE,
			$base_url . 'mcp-page.css',
			[],
			$version
		);

		wp_enqueue_script(
			self::SCRIPT_HANDLE,
			$base_url . 'mcp-page.js',
			$deps,
			$version,
			true
		);
	}

	/**
	 * Render the admin page markup.
	 *
	 * @return void
	 */
	public function render(): void {
		if ( ! $this->current_user_can_access_page() ) {
			$this->deny_page_access();
		}

		if ( ! $this->has_built_assets() ) {
			$this->render_missing_assets_notice();
			return;
		}

		$this->enqueue_assets();
		\wp_localize_script( self::SCRIPT_HANDLE, 'elementorMcpData', $this->get_page_data() );

		$this->render_page();
	}

	private function current_user_can_access_page(): bool {
		if ( ! function_exists( 'current_user_can' ) ) {
			return false;
		}

		return (bool) call_user_func( 'current_user_can', $this->get_capability() );
	}

	private function deny_page_access(): void {
		$message = \esc_html__( 'Sorry, you are not allowed to access this page.', 'elementor' );

		if ( function_exists( 'wp_die' ) ) {
			call_user_func( 'wp_die', $message, 403 );
			return;
		}

		exit;
	}

	private function render_page(): void {
		?>
			<div class="wrap">
				<div id="elementor-mcp-root"></div>
			</div>
		<?php
	}

	private function has_built_assets(): bool {
		return file_exists( ELEMENTOR_MCP_COMPOSER_ASSETS_PATH . 'mcp-page.asset.php' );
	}

	private function render_missing_assets_notice(): void {
		?>
			<div class="notice notice-error">
				<p><?php echo esc_html__( 'MCP admin assets not built. Run: npm run build', 'elementor' ); ?></p>
			</div>
		<?php
	}

	/**
	 * @return array<string, mixed>
	 */
	private function get_page_data(): array {
		$version = defined( 'ELEMENTOR_MCP_COMPOSER_VERSION' ) ? ELEMENTOR_MCP_COMPOSER_VERSION : '1.0.0';
		$fastlane_mode = defined( 'ELEMENTOR_MCP_ONBOARDING_FASTLANE' ) && ELEMENTOR_MCP_ONBOARDING_FASTLANE;

		return [
			'endpoint' => function_exists( 'rest_url' ) ? rest_url( 'elementor-mcp-composer/v' . $version ) : '',
			'serverName' => 'Elementor MCP',
			'version' => $version,
			'nonce' => wp_create_nonce( 'wp_rest' ),
			'fastlaneMode' => $fastlane_mode,
			'settings' => [
				'mcp' => McpSettingsController::get_settings_data(),
				'consent' => ConsentController::get_consent(),
				'test' => TestController::get_test_completed(),
			],
		];
	}
}
