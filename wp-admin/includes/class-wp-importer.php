<?php
/**
 * WordPress backward-compatibility shim.
 *
 * LESS renomeou `wp-admin/` para `ls-admin/`. Plugins de terceiros
 * (ex.: wordpress-importer 0.9.6) ainda fazem:
 *
 *     ABSPATH . 'wp-admin/includes/class-wp-importer.php'
 *
 * Este arquivo apenas encaminha para a localização real em LESS.
 *
 * @package LESS
 * @since 0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once dirname( __DIR__, 2 ) . '/ls-admin/includes/class-wp-importer.php';
