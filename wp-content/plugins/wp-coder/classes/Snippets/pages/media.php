<?php

defined( 'ABSPATH' ) || exit;

?>

    <div class="wowp-snippets__header">
        <h3 class="wowp-snippets__header-title">Media & Embeds</h3>
        <p class="wowp-snippets__header-description">Optimize and control how media and embeds are handled on your
            site.</p>
    </div>

<?php

$snippets = [
	'enable_svg_upload' => [
		'Enable Uploading SVG Files',
		'Allow uploading SVG files to the media library.',
	],

	'enable_lowercase_filenames_for_uploads' => [
		'Enable Lowercase Filenames for Uploads',
		'Automatically convert uploaded filenames to lowercase.',
	],

	'enable_default_alt_to_avatar' => [
		'Enable Default ALT to Avatar/Gravatar Images',
		'Automatically set user name as alt text for avatars.',
	],

	'disable_lazy_load' => [
		'Disable Lazy Load',
		'Turn off lazy-loading on images and iframes.',
	],

	'disable_embeds' => [
		'Disable Embeds',
		'Prevent embedding content from external sites.',
	],

];

self::create_options( $snippets );

?>
    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="change_oEmbed_size">Change oEmbed Max Width and Height</label>
            <p class="wowp-snippet__item-description">Set max width and height for embedded content.</p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
				<?php self::field( 'checkbox', 'change_oEmbed_size' ); ?>
                <span class="slider"></span>
            </label>
        </div>
        <div class="wowp-snippet__item-expand is-hidden">
            <div class="wowp-fields__group">
                <div class="wowp-field">
                    <label><span class="label">Width</span>
						<?php self::field( 'number', 'change_oEmbed_size_width', '', '400' ); ?>
                    </label>
                </div>
                <div class="wowp-field">
                    <label><span class="label">Height</span>
						<?php self::field( 'number', 'change_oEmbed_size_height', '', '280' ); ?>
                    </label>
                </div>
            </div>
        </div>
    </div>

<?php
