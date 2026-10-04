<?php

defined( 'ABSPATH' ) || exit;

return [

	'include' => [
		'type'    => 'select',
		'name'    => '[include]',
		'title'   => __( 'Type', 'wp-coder' ),
		'options' => [ 'css' => 'css', 'js' => 'js' ],
		'class' => 'display-option',
	],

	'include_file' => [
		'type'  => 'url',
		'name'  => '[include_file]',
		'title' => __( 'URL', 'wp-coder' ),
	],

	'css_only_preview' => [
		'type'    => 'checkbox',
		'name'    => '[css_only_preview]',
		'title'   => __( 'Preview Only', 'wp-coder' ),
		'text'  => __( 'Enable', 'wp-coder' ),
		'class' => 'is-reverse css-only-preview',
		'tooltip' => __( 'This CSS file will be used only in the Live Preview. It won’t be included on the actual website.', 'wp-coder' ),
	],

	'js_attr' => [
		'type'  => 'select',
		'name'  => '[file_js_att]',
		'title' => __( 'Attribute', 'wp-coder' ),
		'options' => [
			0       => 'none',
			'defer' => 'defer',
			'async' => 'async'
		],
		'class' => 'js-attr',
	],

	'dequeue' => [
		'type'    => 'select',
		'name'    => '[dequeue]',
		'title'   => __( 'Type', 'wp-coder' ),
		'options' => [ 'css' => 'css', 'js' => 'js' ],
		'class' => 'display-option',
	],

	'handle' => [
		'type'  => 'text',
		'name'  => '[handle]',
		'title' => __( 'ID', 'wp-coder' ),
	],


];