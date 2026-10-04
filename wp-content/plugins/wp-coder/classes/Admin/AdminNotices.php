<?php

namespace WPCoder\Admin;

use WPCoder\WPCoder;

defined( 'ABSPATH' ) || exit;

class AdminNotices {

	public function __construct() {
		add_action( 'admin_notices', [ $this, 'admin_notice' ] );
	}

	public function admin_notice() {
		if ( ! isset( $_GET['page'], $_GET['notice'] ) ) {
			return;
		}

		$page   = $_GET['page'];
		$notice = $_GET['notice'];

		if ( in_array( $page, [ WPCoder::SLUG, WPCoder::SLUG . '-settings' ], true ) ) {
			switch ( $notice ) {
				case 'save_item':
					$this->save_item();
					break;
				case 'remove_item':
					$this->remove_item();
					break;
			}
		}
	}

	public function save_item() {
		$text = __( 'Item saved successfully.', 'wp-coder' );
		echo '<div class="wowp-notification notification-success notice notice-success is-dismissible">' . esc_html( $text ) . '</div>';
	}

	public function remove_item() {
		$text = __( 'Item has been deleted', 'wp-coder' );
		echo '<div class="wowp-notification notification-warning notice notice-warning is-dismissible">' . esc_html( $text ) . '</div>';
	}

}