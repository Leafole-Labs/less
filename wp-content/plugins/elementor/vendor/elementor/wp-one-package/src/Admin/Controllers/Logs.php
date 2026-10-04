<?php

namespace ElementorOne\Admin\Controllers;

use ElementorOne\Admin\Config;
use ElementorOne\LogStore;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Internal logs REST API (elementor-one host only).
 */
class Logs extends \WP_REST_Controller {

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->namespace = Config::APP_REST_NAMESPACE;
		$this->rest_base = 'logs';

		add_action( 'rest_api_init', [ $this, 'register_routes' ] );
	}

	/**
	 * @return void
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			[
				[
					'methods' => \WP_REST_Server::READABLE,
					'callback' => [ $this, 'get_logs' ],
					'permission_callback' => [ $this, 'permissions_check' ],
				],
				[
					'methods' => \WP_REST_Server::DELETABLE,
					'callback' => [ $this, 'clear_logs' ],
					'permission_callback' => [ $this, 'permissions_check' ],
				],
			]
		);
	}

	/**
	 * @param \WP_REST_Request $request
	 * @return \WP_REST_Response|\WP_Error
	 */
	public function get_logs( \WP_REST_Request $request ) {
		return new \WP_REST_Response(
			[
				'entries' => LogStore::instance()->all_newest_first(),
			]
		);
	}

	/**
	 * @param \WP_REST_Request $request
	 * @return \WP_REST_Response|\WP_Error
	 */
	public function clear_logs( \WP_REST_Request $request ) {
		LogStore::instance()->clear();

		return new \WP_REST_Response(
			[
				'success' => true,
			]
		);
	}

	/**
	 * @param \WP_REST_Request $request
	 * @return bool
	 */
	public function permissions_check( \WP_REST_Request $request ) {
		return current_user_can( 'manage_options' );
	}
}
