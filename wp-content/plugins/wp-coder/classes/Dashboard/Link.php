<?php

namespace WPCoder\Dashboard;

defined( 'ABSPATH' ) || exit;

use WPCoder\WPCoder;

class Link {

	public static function create( $arg = [] ): string {
		return add_query_arg( $arg, self::link() );
	}

	public static function activate_mode( $id = 0 ): string {
		return wp_nonce_url( add_query_arg( [
			'id' => $id,
		], self::link() ), WPCoder::PREFIX . '_nonce', WPCoder::PREFIX . '_activate_mode' );
	}

	public static function deactivate_mode( $id = 0 ) {
		return wp_nonce_url( add_query_arg( [
			'id' => $id,
		], self::link() ), WPCoder::PREFIX . '_nonce', WPCoder::PREFIX . '_deactivate_mode' );
	}


	public static function activate_url( $id = 0 ) {
		return wp_nonce_url( add_query_arg( [
			'id'     => $id,
			'action' => 'activate',
		], self::link() ), WPCoder::PREFIX . '_nonce', WPCoder::PREFIX . '_activate_item' );
	}

	public static function deactivate_url( $id = 0 ) {
		return wp_nonce_url( add_query_arg( [
			'id'     => $id,
			'action' => 'deactivate',
		], self::link() ), WPCoder::PREFIX . '_nonce', WPCoder::PREFIX . '_deactivate_item' );
	}

	public static function remove_item() {
		return add_query_arg( [
			'notice' => 'remove_item',
		], self::link() );
	}

	public static function save_item( $id ) {

		$paged = $_GET['wpcoder-page'] ?? '';

		$arg = [
			'page'   => WPCoder::SLUG . '-settings',
			'action' => 'update',
			'id'     => $id,
			'notice' => 'save_item',
		];

		if(!empty($paged)) {
			$arg['wpcoder-page'] = absint($paged);
		}

		return add_query_arg( $arg, admin_url( 'admin.php' ) );
	}

	public static function menu( $page, $action, $id ): string {
		if ( ! empty( $id ) && $action === 'update' ) {
			return add_query_arg( [
				'page'   => WPCoder::SLUG . '-settings',
				'action' => 'update',
				'id'     => $id,
			], admin_url( 'admin.php' ) );
		}

		return add_query_arg( [
			'tab' => $page,
		], self::link() );
	}

	public static function edit( $id ) {
		if ( ! $id ) {
			return false;
		}
		$paged = $_GET['paged'] ?? '';
		return add_query_arg( [
			'page'      => WPCoder::SLUG . '-settings',
			'action'    => 'update',
			'id'        => $id,
			'wpcoder-page' => absint( $paged ),
		], admin_url( 'admin.php' ) );
	}

	public static function all_codes() {
		$paged = $_GET['wpcoder-page'] ?? '';

		$arg = [
			'page'   => WPCoder::SLUG ,
		];

		if(!empty($paged)) {
			$arg['paged'] = absint($paged);
		}

		return add_query_arg( $arg, admin_url( 'admin.php' ) );
	}

	public static function duplicate( $id ) {
		if ( ! $id ) {
			return false;
		}

		return add_query_arg( [
			'page'   => WPCoder::SLUG . '-settings',
			'action' => 'duplicate',
			'id'     => $id
		], admin_url( 'admin.php' ) );
	}

	public static function export( $id ) {
		if ( ! $id ) {
			return false;
		}

		return wp_nonce_url( add_query_arg( [
			'action' => 'export',
			'id'     => $id
		], self::link() ), WPCoder::PREFIX . '_nonce', WPCoder::PREFIX . '_export_item' );
	}

	public static function remove( $id ) {
		if ( ! $id ) {
			return false;
		}

		return wp_nonce_url( add_query_arg( [
			'action' => 'delete',
			'id'     => $id
		], self::link() ), WPCoder::PREFIX . '_nonce', WPCoder::PREFIX . '_remove_item' );
	}

	private static function link(): string {
		return add_query_arg( [ 'page' => WPCoder::SLUG ], admin_url( 'admin.php' ) );
	}

}