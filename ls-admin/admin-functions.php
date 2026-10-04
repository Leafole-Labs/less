<?php
/**
 * Administration Functions
 *
 * This file is deprecated, use 'ls-admin/includes/admin.php' instead.
 *
 * @deprecated 2.5.0
 * @package WordPress
 * @subpackage Administration
 */

// Don't load directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

_deprecated_file( basename( __FILE__ ), '2.5.0', 'ls-admin/includes/admin.php' );

/** WordPress Administration API: Includes all Administration functions. */
require_once ABSPATH . 'ls-admin/includes/admin.php';
