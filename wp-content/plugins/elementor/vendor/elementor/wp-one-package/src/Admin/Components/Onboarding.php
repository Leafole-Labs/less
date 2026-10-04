<?php

namespace ElementorOne\Admin\Components;

use ElementorOne\Connect\Facade;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class Onboarding
 * Handles onboarding page actions
 */
class Onboarding {

	/**
	 * Instance
	 * @var Onboarding|null
	 */
	private static ?Onboarding $instance = null;

	/**
	 * Get instance
	 * @return Onboarding|null
	 */
	public static function instance(): ?Onboarding {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * On connect
	 * @param Facade $facade
	 * @return void
	 */
	public function on_connect( Facade $facade ): void {
		wp_safe_redirect( $facade->utils()->get_admin_url() . '#/home/onboarding' );
		exit;
	}

	/**
	 * On connect fail
	 * @param Facade $facade
	 * @return void
	 */
	public function on_connect_fail( Facade $facade ): void {
		wp_safe_redirect(
			$facade->utils()->get_admin_url() . '#/home?connect-fail=1'
		);
		exit;
	}

	/**
	 * Onboarding constructor
	 * @return void
	 */
	private function __construct() {
		add_action( 'elementor_one/elementor_one_connected', [ $this, 'on_connect' ] );
		add_action( 'elementor_one/elementor_one_connect_fail', [ $this, 'on_connect_fail' ], 10, 1 );
	}
}
