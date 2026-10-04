<?php
/**
 * Custom header image script.
 *
 * This file is deprecated, use 'ls-admin/includes/class-custom-image-header.php' instead.
 *
 * @deprecated 5.3.0
 * @package WordPress
 * @subpackage Administration
 */

// Don't load directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

_deprecated_file( basename( __FILE__ ), '5.3.0', 'ls-admin/includes/class-custom-image-header.php' );

/** Custom_Image_Header class */
require_once ABSPATH . 'ls-admin/includes/class-custom-image-header.php';
