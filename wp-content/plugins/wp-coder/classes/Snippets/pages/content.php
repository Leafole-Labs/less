<?php

defined( 'ABSPATH' ) || exit;

?>

<div class="wowp-snippets__header">
    <h3 class="wowp-snippets__header-title">Editor & Content</h3>
    <p class="wowp-snippets__header-description">Customize editor and content features.</p>
</div>

<?php
$snippets = [
	'disable_gutenberg' => [
		'Disable Gutenberg Editor',
		'Use the Classic Editor instead of Gutenberg.',
	],
	'disable_gutenberg_css' => [
		'Remove Gutenberg Block CSS',
		'Prevent loading of Gutenberg block styles on the frontend.',
	],

	'disable_widget_blocks' => [
		'Disable Widget Blocks',
		'Revert to the Classic Widgets interface.',
	],

	'enable_shortcode_in_text_widgets'  => [
		'Enable Shortcode Execution in Text Widgets',
		'Allow shortcodes in text widgets.',
	],
	'enable_pages_excerpt'  => [
		'Enable Excerpt for Pages',
		'Add excerpt field support for pages.',
	],
	'enable_force_external_links_new_tab'  => [
		'Open External Links in New Tab',
		'Automatically open all external links in post content in a new browser tab. Adds target="_blank" and rel="noopener noreferrer nofollow" for better UX, security, and SEO.',
	],
];

self::create_options( $snippets );

?>

<div class="wowp-snippet__item">
	<div class="wowp-snippet__item-header">
		<label for="change_read_more">Change “Read More” Text for Excerpts</label>
		<p class="wowp-snippet__item-description">Customize the default “Read More” link text.</p>
	</div>
	<div class="wowp-field has-checkbox">
		<label class="switch">
			<?php self::field( 'checkbox', 'change_read_more' ); ?>
			<span class="slider"></span>
		</label>
	</div>
	<div class="wowp-snippet__item-expand is-hidden">
		<div class="wowp-field">
			<label>
				<span class="label">Text</span>
				<?php self::field( 'text', 'change_read_more_text', '', 'Read More' ); ?>
			</label>
		</div>
	</div>
</div>

<?php

