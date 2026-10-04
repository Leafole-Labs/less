<?php

defined( 'ABSPATH' ) || exit;

$enabled_snippets = [
	'enable_duplication' => [
		'Content Duplication',
		'Enable the function of duplicating posts and pages in the admin panel.',
	],
	'enable_svg_upload'  => [
		'Uploading SVG Files',
		'Enable support for SVG files to be uploaded in WordPress media.',
	],

	'enable_pages_excerpt'  => [
		'Enable excerpt for pages ',
		'Enable excerpt support for pages.',
	],

	'enable_shortcode_in_text_widgets'  => [
		'Enable Shortcode Execution in Text Widgets',
		'Extend the default Text Widget with shortcode execution.',
	],

	'enable_featured_img_rss_feeds'  => [
		'Enable Featured Images to RSS Feeds',
		'Extend your site\'s RSS feeds by including featured images in the feed.',
	],

	'enable_page_slug_to_body_class'  => [
		'Enable Page Slug to Body Class',
		'Add the page slug to the body class for better styling.',
	],

	'enable_lowercase_filenames_for_uploads'  => [
		'Enable Lowercase Filenames for Uploads',
		'Make all the filenames of new uploads to lowercase after you enable this snippet.',
	],

	'enable_default_alt_to_avatar'  => [
		'Enable default ALT to avatar/Gravatar Images',
		'Add the user\'s name as a default alt tag to the Gravatar images loaded on.',
	],
];

self::create_options($enabled_snippets);
