<?php

defined( 'ABSPATH' ) || exit;

return [

	'preview' => [
		'type'  => 'checkbox',
		'name'  => '[preview]',
		'title' => __( 'Live Preview', 'wp-coder' ),
		'text'  => __( 'Enable', 'wp-coder' ),
		'class' => 'is-reverse',
		'tooltip' => __( 'Enable to preview your HTML and CSS in real time.', 'wp-coder' ),
	],

	'minified' => [
		'type'  => 'checkbox',
		'name'  => '[minified_html]',
		'title' => __( 'Minified', 'wp-coder' ),
		'text'  => __( 'Enable', 'wp-coder' ),
		'class' => 'is-reverse',
		'tooltip' => __( 'Minify the HTML output for better performance.', 'wp-coder' ),
	],

];
