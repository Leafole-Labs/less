<?php

namespace ElementorOne\Admin\Controllers;

use ElementorOne\Admin\Config;
use ElementorOne\Admin\Services\ManageWidgetState;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class ManageDashboardWidget extends \WP_REST_Controller {

	public function __construct() {
		$this->namespace = Config::APP_REST_NAMESPACE;
		$this->rest_base = 'manage-dashboard-widget';

		add_action( 'rest_api_init', [ $this, 'register_routes' ] );
	}

	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/state',
			[
				[
					'methods' => \WP_REST_Server::READABLE,
					'callback' => [ $this, 'get_state' ],
					'permission_callback' => [ $this, 'get_state_permissions_check' ],
				],
			]
		);
	}

	public function get_state( \WP_REST_Request $request ) {
		$resolved = ManageWidgetState::resolve_with_meta();

		return new \WP_REST_Response( [
			'state' => $resolved['state'],
			'isWidgetDelegated' => $resolved['isWidgetDelegated'],
		] );
	}

	public function get_state_permissions_check( $request ) {
		return current_user_can( 'manage_options' );
	}
}
