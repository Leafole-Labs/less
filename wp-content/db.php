<?php

define( 'SQLITE_DB_DROPIN_VERSION', '1.8.0' );

$sqlite_plugin_implementation_folder_path =
	__DIR__ . '/plugins/plugin-sqlite-database-integration';

if (
	! file_exists(
		$sqlite_plugin_implementation_folder_path . '/wp-includes/sqlite/db.php'
	)
) {
	return;
}

if ( ! defined( 'DATABASE_TYPE' ) ) {
	define( 'DATABASE_TYPE', 'sqlite' );
}

if ( ! defined( 'DB_ENGINE' ) ) {
	define( 'DB_ENGINE', 'sqlite' );
}

require_once $sqlite_plugin_implementation_folder_path . '/wp-includes/sqlite/db.php';