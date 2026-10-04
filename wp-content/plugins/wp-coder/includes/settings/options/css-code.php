<?php

defined( 'ABSPATH' ) || exit;

return [

	'inline' => [
		'type'  => 'checkbox',
		'name'  => '[inline_css]',
		'title' => __( 'Inline', 'wp-coder' ),
		'text'  => __( 'Enable', 'wp-coder' ),
		'class' => 'is-reverse',
		'tooltip' => __( 'Load CSS inline instead of from an external file.', 'wp-coder' ),
	],

	'minified' => [
		'type'  => 'checkbox',
		'name'  => '[minified_css]',
		'title' => __( 'Minified', 'wp-coder' ),
		'text'  => __( 'Enable', 'wp-coder' ),
		'class' => 'is-reverse',
		'tooltip' => __( 'Compress CSS by removing spaces and line breaks.', 'wp-coder' ),
	],

	'css_code' => [
		'type'  => 'textarea',
		'name'  => 'css_code',
		'class' => 'is-full'
	],

];