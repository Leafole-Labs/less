<?php

namespace ElementorOne\Admin\Components;

use ElementorOne\Admin\Helpers\Utils;
use ElementorOne\Admin\Services\Licenses;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class Fields
 * Handles WordPress settings registration
 */
class Fields {

	const SETTING_PREFIX = 'elementor_one_';

	/**
	 * Instance
	 * @var Fields|null
	 */
	private static ?Fields $instance = null;

	/**
	 * Get instance
	 * @return Fields|null
	 */
	public static function instance(): ?Fields {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Register fields
	 * @return void
	 */
	public function register_fields() {
		foreach ( $this->get_settings() as $setting => $args ) {
			register_setting( 'options', self::SETTING_PREFIX . $setting, $args );
		}
	}

	/**
	 * Get settings
	 * @return array
	 */
	public static function get_settings(): array {
		return [
			'welcome_screen_completed' => [
				'type' => 'boolean',
				'show_in_rest' => true,
				'description' => 'Elementor One Welcome Screen Completed',
			],
			'dismiss_connect_alert' => [
				'type' => 'boolean',
				'single' => true,
				'show_in_rest' => true,
				'description' => 'Elementor One Dismiss Connect Alert',
			],
			'dismiss_elementor_one_subscription_alert' => [
				'type' => 'boolean',
				'single' => true,
				'show_in_rest' => true,
				'description' => 'Elementor One Dismiss Elementor One Subscription Alert',
			],
		];
	}

	/**
	 * Get plugin settings
	 * @return array
	 */
	public function get_plugin_settings(): array {
		$connect_utils = Utils::get_one_connect()->utils();

		return [
			'siteName' => get_bloginfo( 'name' ),
			'activeTheme' => wp_get_theme()->get( 'Name' ),
			'isConnected' => $connect_utils->is_connected(),
			'isUrlMismatch' => ! $connect_utils->is_valid_home_url(),
			'isDevelopment' => defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG,
			'siteUrl' => get_site_url(),
			'welcomeScreenCompleted' => (bool) get_option( self::SETTING_PREFIX . 'welcome_screen_completed' ),
			'dismissConnectAlert' => (bool) get_option( self::SETTING_PREFIX . 'dismiss_connect_alert' ),
			'dismissElementorOneSubscriptionAlert' => (bool) get_option( self::SETTING_PREFIX . 'dismiss_elementor_one_subscription_alert' ),
			'showElementorOneSubscriptionAlert' => $this->should_show_elementor_one_subscription_alert(),
			'userLocale' => get_user_locale( get_current_user_id() ),
			'isRTL' => is_rtl(),
		];
	}

	/**
	 * Should show elementor one subscription alert
	 * @return bool
	 */
	private function should_show_elementor_one_subscription_alert(): bool {
		$active_one_licenses = get_user_option( Licenses::USER_OPTION_ACTIVE_ONE_LICENSES );
		$is_dismissed = (bool) get_option( self::SETTING_PREFIX . 'dismiss_elementor_one_subscription_alert' );

		return ! empty( $active_one_licenses ) && ! $is_dismissed;
	}

	/**
	 * Fields constructor
	 * @return void
	 */
	private function __construct() {
		add_action( 'rest_api_init', [ $this, 'register_fields' ] );
	}
}
