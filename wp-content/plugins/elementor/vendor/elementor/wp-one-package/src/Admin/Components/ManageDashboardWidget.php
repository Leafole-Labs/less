<?php

namespace ElementorOne\Admin\Components;

use ElementorOne\Admin\Helpers\Utils;
use ElementorOne\Admin\Services\ManageWidgetState;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class ManageDashboardWidget
 * Registers and enqueues the Site Management dashboard widget
 */
class ManageDashboardWidget {

	public const WIDGET_ID = 'elementor-manage-dashboard';
	public const MOUNT_NODE_ID = 'elementor-manage-dashboard-widget';
	public const ASSET_HANDLE = 'elementor-one-manage-dashboard-widget';

	/**
	 * Instance
	 * @var ManageDashboardWidget|null
	 */
	private static ?ManageDashboardWidget $instance = null;

	/**
	 * Get instance
	 * @return ManageDashboardWidget|null
	 */
	public static function instance(): ?ManageDashboardWidget {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * ManageDashboardWidget constructor
	 * @return void
	 */
	private function __construct() {
		add_action( 'wp_dashboard_setup', [ $this, 'register_widget' ], 99 );
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_assets' ] );
	}

	/**
	 * Register dashboard widget
	 * @return void
	 */
	public function register_widget() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		if ( ! ManageWidgetState::is_plugin_installed() ) {
			return;
		}

		add_meta_box(
			self::WIDGET_ID,
			$this->get_widget_title(),
			[ $this, 'render_widget' ],
			'dashboard',
			'column3',
			'high'
		);
	}

	/**
	 * Get widget title markup
	 * @return string
	 */
	private function get_widget_title(): string {
		return '<span class="elementor-manage-dashboard-widget__title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM8.85 17.25H6.75V6.75H8.85V17.25ZM17.25 17.25H10.95V15.15H17.25V17.25ZM17.25 13.0488H10.95V10.9488H17.25V13.0488ZM17.25 8.85H10.95V6.75H17.25V8.85Z" fill="black"/>
			</svg>' . esc_html__( 'Site Management', 'elementor-one' ) . '</span>';
	}

	/**
	 * Render widget mount node
	 * @return void
	 */
	public function render_widget() {
		printf(
			'<div id="%1$s" class="elementor-manage-dashboard-widget"></div>',
			esc_attr( self::MOUNT_NODE_ID )
		);
	}

	/**
	 * Enqueue widget assets
	 * @param string $hook
	 * @return void
	 */
	public function enqueue_assets( $hook ) {
		if ( 'index.php' !== $hook || ! current_user_can( 'manage_options' ) ) {
			return;
		}

		if ( ! ManageWidgetState::is_plugin_installed() ) {
			return;
		}

		$resolved = ManageWidgetState::resolve_with_meta();
		$state = $resolved['state'];

		if ( ManageWidgetState::STATE_ACTIVE === $state ) {
			return;
		}

		$this->enqueue_skeleton_assets( $resolved );
	}

	/**
	 * Enqueue skeleton widget assets
	 * @param array{state: string, isWidgetDelegated: bool} $resolved
	 * @return void
	 */
	private function enqueue_skeleton_assets( array $resolved ) {
		$state = $resolved['state'];
		$package_version = Utils::get_latest_package_version();
		$asset_file = ELEMENTOR_ONE_ASSETS_PATH . 'manage-dashboard-widget.asset.php';
		$asset = file_exists( $asset_file ) ? include $asset_file : [
			'dependencies' => [],
			'version' => $package_version,
		];

		wp_enqueue_script(
			self::ASSET_HANDLE,
			ELEMENTOR_ONE_ASSETS_URL . 'manage-dashboard-widget.js',
			$asset['dependencies'],
			$asset['version'],
			true
		);

		wp_enqueue_style(
			self::ASSET_HANDLE,
			ELEMENTOR_ONE_ASSETS_URL . 'manage-dashboard-widget.css',
			[],
			$package_version
		);

		wp_add_inline_script(
			self::ASSET_HANDLE,
			'window.elementorOneManageWidgetData = ' . wp_json_encode( [
				'state' => $state,
				'isRTL' => is_rtl(),
				'links' => [
					'updatesPage' => admin_url( 'update-core.php' ),
				],
				'isWidgetDelegated' => $resolved['isWidgetDelegated'],
			] ) . ';',
			'before'
		);
	}
}
