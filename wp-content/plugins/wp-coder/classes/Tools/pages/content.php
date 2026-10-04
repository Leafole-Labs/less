<?php

defined( 'ABSPATH' ) || exit;

?>

<div class="wowp-snippets__header">
	<h3 class="wowp-snippets__header-title">Content & Templates</h3>
	<p class="wowp-snippets__header-description">Manage custom templates and menus to better structure and present your site’s content.</p>
</div>

<div class="wowp-snippet__list">

    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="markdown_editor">Markdown Editor</label>
            <p class="wowp-snippet__item-description">Disables Gutenberg and TinyMCE, replacing them with a Markdown editor powered by CodeMirror.</p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
				<?php self::field( 'checkbox', 'markdown_editor' ); ?>
                <span class="slider"></span>
            </label>
        </div>
    </div>

</div>