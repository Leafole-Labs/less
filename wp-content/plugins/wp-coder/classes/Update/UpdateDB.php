<?php

namespace WPCoder\Update;

use WPCoder\WPCoder;

class UpdateDB {

	const NEW_DB_VERSION = '3.6';

	const TABLE_COLUMNS = "
			id mediumint(9) NOT NULL AUTO_INCREMENT,
			title VARCHAR(200) NOT NULL,
			html_code LONGTEXT,
			css_code LONGTEXT,
			js_code LONGTEXT,
			php_code LONGTEXT,
			param LONGTEXT,
			status BOOLEAN,
			mode BOOLEAN,
			tag TEXT,
			php_include int(11) NOT NULL DEFAULT '0',
			UNIQUE KEY id (id),
			INDEX id_index (id)
	";

	public static function init(): void {
		$current_db_version = get_option( WPCoder::PREFIX . '_db_version' );

		if ( $current_db_version && version_compare( $current_db_version, self::NEW_DB_VERSION, '>=' ) ) {
			return;
		}

		self::start_update();
		update_option( WPCoder::PREFIX . '_db_version', self::NEW_DB_VERSION );
	}

	private static function start_update(): void {
		self::update_database();
	}

	private static function update_database(): void {
		global $wpdb;

		$table           = $wpdb->prefix . WPCoder::PREFIX;
		$charset_collate = $wpdb->get_charset_collate();

		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

		$sql = "CREATE TABLE $table (" . self::TABLE_COLUMNS . ") $charset_collate;";
		dbDelta( $sql );
	}

}