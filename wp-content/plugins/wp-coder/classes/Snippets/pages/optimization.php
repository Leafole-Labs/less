<?php
defined( 'ABSPATH' ) || exit;

?>

	<div class="wowp-snippets__header">
		<h3 class="wowp-snippets__header-title">Cleanup & Optimization</h3>
		<p class="wowp-snippets__header-description">Reduce bloat and improve performance.</p>
	</div>

<?php

$snippets = [
	'remove_wp_version'     => [
		'Remove WordPress Version Number',
		'Hide version info from site source and feeds.',
	],
	'disable_attachment_pages' => [
		'Disable Attachment Pages',
		'Redirect attachment pages to the parent post or homepage.',
	],
	'disable_rss_feeds' => [
		'Disable RSS Feeds',
		'Disable all default WordPress RSS feeds.',
	],
	'disable_search' => [
		'Disable Search',
		'Disable WordPress built-in search functionality.',
	],
	'disable_wlwmanifest_link' => [
		'Disable wlwmanifest link',
		'Remove the Windows Live Writer manifest tag.',
	],

	'disable_automatic_trash' => [
		'Disable Automatic Trash Emptying',
		'Stop automatic emptying of trash every 30 days.',
	],

	'enable_redirect_404_to_home' => [
		'Redirect 404 to Homepage',
		'Automatically redirect all 404 error pages to the homepage using a 301 redirect.',
	],

    'enable_image_lazy_load' => [
            'Enable Image Lazy Load',
            'Lazy load images on the frontend for better performance.',
    ],
];

self::create_options( $snippets );