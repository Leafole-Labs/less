<?php

namespace WPCoder\Admin;

defined( 'ABSPATH' ) || exit;

use WPCoder\Dashboard\DBManager;
use WPCoder\Dashboard\ImporterExporter;
use WPCoder\Dashboard\Settings;
use WPCoder\WPCoder;

class AdminActions {

	public function __construct() {
		add_action( 'admin_init', [ $this, 'actions' ] );
	}


	public function actions() {
		$name = $this->check_name( $_REQUEST );
		if ( ! $name ) {
			return false;
		}
		$verify = $this->verify( $name );

		if ( ! $verify ) {
			return false;
		}

		if ( strpos( $name, '_export_data' ) !== false ) {
			ImporterExporter::export_data();
		} elseif ( strpos( $name, '_export_item' ) !== false ) {
			ImporterExporter::export_item();
		} elseif ( strpos( $name, '_import_data' ) !== false ) {
			ImporterExporter::import_data();
		} elseif ( strpos( $name, '_remove_item' ) !== false ) {
			DBManager::remove_item();
		} elseif ( strpos( $name, '_settings' ) !== false ) {
			Settings::save_item();
		} elseif ( strpos( $name, '_activate_item' ) !== false ) {
			Settings::activate_item();
		} elseif ( strpos( $name, '_deactivate_item' ) !== false ) {
			Settings::deactivate_item();
		} elseif ( strpos( $name, '_activate_mode' ) !== false ) {
			Settings::activate_mode();
		} elseif ( strpos( $name, '_deactivate_mode' ) !== false ) {
			Settings::deactivate_mode();
		}

	}

	private function verify( $name ): bool {
		$nonce_action = WPCoder::PREFIX . '_nonce';

		return ! ( ! isset( $_REQUEST[ $name ] ) || ! wp_verify_nonce( $_REQUEST[ $name ], $nonce_action ) || ! WPCoder::user_can_manage() );
	}

	private function check_name( $request ) {
		$names = [
			WPCoder::PREFIX . '_import_data',
			WPCoder::PREFIX . '_export_data',
			WPCoder::PREFIX . '_export_item',
			WPCoder::PREFIX . '_remove_item',
			WPCoder::PREFIX . '_settings',
			WPCoder::PREFIX . '_activate_item',
			WPCoder::PREFIX . '_deactivate_item',
			WPCoder::PREFIX . '_activate_mode',
			WPCoder::PREFIX . '_deactivate_mode',
		];

		foreach ( $request as $key => $value ) {

			if ( in_array( $key, $names, true ) ) {
				return $key;
			}
		}

		return false;

	}

}