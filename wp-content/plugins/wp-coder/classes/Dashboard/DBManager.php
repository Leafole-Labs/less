<?php
/**
 * DBManager class for WP Coder plugin.
 *
 * @package WPCoder\Admin
 *
 *  Methods:
 *  - create()                Create database table
 *  - get_columns()           Get table column structure
 *  - insert()                Insert new row
 *  - update()                Update existing row
 *  - delete()                Delete row by ID
 *  - remove_item()           Handle item removal from GET request
 *  - get_all_data()          Get all rows from table
 *  - get_data_by_id()        Get single row by ID
 *  - get_data_by_title()     Get row by title
 *  - check_row()             Check if row exists by ID
 *  - get_tags_from_table()   Get unique tags
 *  - display_tags()          Output HTML <option> tags for tags
 */

namespace WPCoder\Dashboard;

defined( 'ABSPATH' ) || exit;

use WPCoder\WPCoder;

class DBManager {

	public static function remove_item() {
		// phpcs:disable WordPress.Security.NonceVerification.Recommended
		$page   = isset( $_GET['page'] ) ? sanitize_text_field( wp_unslash( $_GET['page'] ) ) : '';
		$action = isset( $_GET['action'] ) ? sanitize_text_field( wp_unslash( $_GET['action'] ) ) : '';
		$id     = isset( $_GET['id'] ) ? absint( $_GET['id'] ) : '';
		// phpcs:enable
		if ( ( $page !== WPCoder::SLUG ) || ( $action !== 'delete' ) || empty( $id ) ) {
			return false;
		}

		global $wpdb;
		$table = $wpdb->prefix . WPCoder::PREFIX;

		$result = $wpdb->delete( $table, [ 'id' => $id ], [ '%d' ] );

		if ( $result ) {
			wp_safe_redirect( Link::remove_item() );
			exit;
		}

		return false;
	}


	public static function delete( $id ) {
		if ( ! isset( $id ) ) {
			return false;
		}

		global $wpdb;
		$table = $wpdb->prefix . WPCoder::PREFIX;

		return $wpdb->delete( $table, [ 'id' => $id ], [ '%d' ] );
	}

	public static function create( $columns ): void {
		global $wpdb;
		$table           = $wpdb->prefix . WPCoder::PREFIX;
		$charset_collate = $wpdb->get_charset_collate();

		$sql = "CREATE TABLE $table ($columns) $charset_collate;";

		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		dbDelta( $sql );
	}

	public static function get_all_data() {
		global $wpdb;
		$table  = $wpdb->prefix . WPCoder::PREFIX;
		$result = $wpdb->get_results( "SELECT * FROM $table ORDER BY id ASC" );

		return ! empty( $result ) ? $result : false;
	}

	public static function get_data_by_tag( $tag = '' ) {
		if ( empty( $tag ) ) {
			return false;
		}

		global $wpdb;
		$table  = esc_sql( $wpdb->prefix . WPCoder::PREFIX );
		$query  = $wpdb->prepare( "SELECT * FROM {$table} WHERE tag = %s ORDER BY id ASC", sanitize_text_field( $tag ) );
		$result = $wpdb->get_results( $query ); // phpcs:ignore WordPress.DB.*

		return ! empty( $result ) ? $result : false;
	}

	public static function get_data_by_id( $id = '' ) {
		if ( empty( $id ) ) {
			return false;
		}
		global $wpdb;
		$table = esc_sql( $wpdb->prefix . WPCoder::PREFIX );

		// phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
		return $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $table WHERE id=%d", absint( $id ) ) );
	}

	public static function get_data_by_ids( $ids = [] ) {
		if ( empty( $ids ) || ! is_array( $ids ) ) {
			return false;
		}

		global $wpdb;
		$table = esc_sql( $wpdb->prefix . WPCoder::PREFIX );

		$ids = array_filter( array_map( 'absint', $ids ) );

		if ( empty( $ids ) ) {
			return false;
		}

		$placeholders = implode( ',', array_fill( 0, count( $ids ), '%d' ) );
		$query        = $wpdb->prepare(
			"SELECT * FROM {$table} WHERE id IN ($placeholders)",
			...$ids
		);

		$result = $wpdb->get_results( $query ); // phpcs:ignore WordPress.DB.*

		return ! empty( $result ) ? $result : false;
	}

	public static function get_data_by_title( $title = '' ) {
		if ( empty( $title ) ) {
			return false;
		}

		global $wpdb;
		$table = esc_sql( $wpdb->prefix . WPCoder::PREFIX );

		// phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
		return $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $table WHERE title=%s", esc_attr( $title ) ) );
	}

	public static function update( $data, $where, $data_formats ): void {
		if ( ! WPCoder::user_can_manage() ) {
			return;
		}

		global $wpdb;
		$table  = $wpdb->prefix . WPCoder::PREFIX;
		$result = $wpdb->update( $table, $data, $where, $data_formats );
	}

	public static function insert( $data, $data_formats ) {
		if ( ! WPCoder::user_can_manage() ) {
			return false;
		}

		global $wpdb;
		$table = $wpdb->prefix . WPCoder::PREFIX;

		$result = $wpdb->insert( $table, $data, $data_formats );

		if ( $result ) {
			return $wpdb->insert_id;
		}

		return false;
	}

	public static function check_row( $id = '' ): bool {
		global $wpdb;
		$table = $wpdb->prefix . WPCoder::PREFIX;
		if ( empty( $id ) ) {
			return false;
		}

		$check_row = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM {$table} WHERE id = %d", $id ) );
		if ( ! empty( $check_row ) ) {
			return true;
		}

		return false;
	}

	public static function get_columns() {
		global $wpdb;
		$table_name = $wpdb->prefix . WPCoder::PREFIX;

		return $wpdb->get_results( "DESCRIBE $table_name" );
	}

	public static function display_tags(): void {
		global $wpdb;
		$table  = $wpdb->prefix . WPCoder::PREFIX;
		$result = $wpdb->get_results( "SELECT * FROM $table order by tag desc", ARRAY_A );
		$tags   = [];
		if ( ! empty( $result ) ) {
			foreach ( $result as $column ) {
				if ( ! empty( $column['tag'] ) ) {
					$tags[ $column['tag'] ] = $column['tag'];
				}
			}
		}
		if ( ! empty( $tags ) ) {
			foreach ( $tags as $tag ) {
				echo '<option value="' . esc_attr( $tag ) . '">';
			}
		}
	}

	public static function get_tags_from_table() {
		global $wpdb;
		$table    = $wpdb->prefix . WPCoder::PREFIX;
		$all_tags = $wpdb->get_results( "SELECT DISTINCT tag FROM $table ORDER BY tag ASC", ARRAY_A );

		return ! empty( $all_tags ) ? $all_tags : false;
	}

}