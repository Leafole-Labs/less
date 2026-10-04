<?php

namespace ElementorOne\Admin\Services;

use ElementorOne\Admin\Config;
use ElementorOne\Admin\Exceptions\ClientException;
use ElementorOne\Logger;
use ElementorOne\Admin\Helpers\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Licenses
 */
class Licenses {

	const USER_OPTION_ACTIVE_ONE_LICENSES = Config::APP_PREFIX . '_active_licenses';

	/**
	 * Logger instance
	 * @var Logger
	 */
	private Logger $logger;

	/**
	 * Instance
	 * @var Licenses|null
	 */
	private static ?Licenses $instance = null;

	/**
	 * Get instance
	 * @return Licenses|null
	 */
	public static function instance(): ?Licenses {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor
	 */
	private function __construct() {
		$this->logger = new Logger( self::class );

		// If Elementor is not installed, return early.
		if ( ! class_exists( '\Elementor\Plugin' ) ) {
			return;
		}

		// If One is already connected, return early.
		if ( Utils::get_one_connect()->utils()->is_connected() ) {
			return;
		}

		// On load page to sync licenses after connect.
		add_action( 'load-elementor_page_elementor-connect', [ $this, 'on_load_page' ], 1 );
	}

	/**
	 * Get licenses URL
	 * @return string
	 */
	public function get_licenses_url( string $app_type ): string {
		return add_query_arg( 'appType', $app_type, Client::get_client_base_url() . '/connect/api/v1/licenses' );
	}

	/**
	 * Sync user licenses.
	 * @param bool $force
	 * @return void
	 */
	public function sync_user_licenses( bool $force = false ): void {
		if ( ! $force && false !== get_user_option( self::USER_OPTION_ACTIVE_ONE_LICENSES ) ) {
			return;
		}

		try {
			$library_app = \Elementor\Plugin::$instance->common->get_component( 'connect' )->get_app( 'library' );
			$reflection_auth_headers = new \ReflectionMethod( $library_app->get_class_name(), 'generate_authentication_headers' );

			if ( \PHP_VERSION_ID < 80100 ) {
				$reflection_auth_headers->setAccessible( true );
			}

			$response = wp_remote_get( $this->get_licenses_url( Config::APP_TYPE ), [
				'headers' => $reflection_auth_headers->invokeArgs( $library_app, [ 'one/licenses' ] ),
				'timeout' => 30,
			] );

			if ( is_wp_error( $response ) ) {
				throw new ClientException( $response->get_error_message() );
			}

			$response_body = wp_remote_retrieve_body( $response );
			$response_code = wp_remote_retrieve_response_code( $response );

			if ( ! empty( $response_body ) && null === json_decode( $response_body ) ) {
				throw new ClientException( esc_html( $response_body ), $response_code );
			}

			if ( 200 !== $response_code ) {
				throw new ClientException( json_decode( $response_body )->message ?? $response_body, $response_code );
			}

			$licenses = json_decode( $response_body, true );
			update_user_option( get_current_user_id(), self::USER_OPTION_ACTIVE_ONE_LICENSES, $licenses );
		} catch ( \Throwable $th ) {
			$this->logger->error( $th->getMessage() );
		}
	}

	/**
	 * On load page
	 * @return void
	 */
	public function on_load_page(): void {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		if ( ! isset( $_GET['action'], $_GET['app'] ) ) {
			return;
		}

		$app = sanitize_text_field( wp_unslash( $_GET['app'] ) );
		$action = sanitize_text_field( wp_unslash( $_GET['action'] ) );

		if ( 'get_token' === $action && 'library' === $app ) {
			add_action( 'shutdown', [ $this, 'sync_user_licenses' ] );
		}
	}
}
