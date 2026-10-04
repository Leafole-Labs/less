<?php

defined( 'ABSPATH' ) || exit;

return [

	'jquery' => [
		'type'  => 'checkbox',
		'name'  => '[jquery_dependency]',
		'title' => __( 'Disable jQuery', 'wp-coder' ),
		'text'  => __( 'Disable', 'wp-coder' ),
		'class' => 'is-reverse',
		'tooltip' => __( 'Don’t include jQuery as a dependency for this script.', 'wp-coder' ),
	],

	'inline' => [
		'type'  => 'checkbox',
		'name'  => '[inline_js]',
		'title' => __( 'Inline', 'wp-coder' ),
		'text'  => __( 'Enable', 'wp-coder' ),
		'class' => 'is-reverse',
		'tooltip' => __( 'Insert JavaScript directly into the page.', 'wp-coder' ),

	],

	'minified'   => [
		'type'    => 'select',
		'name'    => '[minified_js]',
		'title'   => __( 'Minified', 'wp-coder' ),
		'default' => 'obfuscate',
		'options' => [
			'none'      => 'none',
			'minify'    => 'Minify',
			'obfuscate' => 'Obfuscate'
		],
		'tooltip' => __( 'Choose how to minimize or obfuscate the JavaScript code.', 'wp-coder' ),
	],

	'attributes'   => [
		'type'    => 'select',
		'name'    => '[js_attributes]',
		'title'   => __( 'Attribute', 'wp-coder' ),
		'options' => [
			0       => 'none',
			'defer' => 'defer',
			'async' => 'async'
		],
		'tooltip' => __( 'Specify how the script should be loaded.', 'wp-coder' ),
	],

	'js_code' => [
		'type'  => 'textarea',
		'name'  => 'js_code',
		'class' => 'is-full'
	],


];