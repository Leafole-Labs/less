<?php
/*
 * Page Name: CSS
 */

use WPCoder\Dashboard\Field;
use WPCoder\Dashboard\FolderManager;
use WPCoder\Dashboard\Option;

defined( 'ABSPATH' ) || exit;

$default = Field::getDefault();
$opt     = include( 'options/css-code.php' );

$css_link = '';
if ( ! empty( $default['css_code'] ) ) {
	$css_link = FolderManager::path_upload_url() . 'style-' . $default['id'] . '.css';
}

?>
    <div class="wowp-settings__page">
        <div class="wowp-settings__page-sidebar">

			<?php Option::init( [
				$opt['inline'],
				$opt['minified'],
			] ); ?>

            <button class="button-editor button"
                    id="cssnav"><?php esc_html_e( 'Add NAV Comment', 'wp-coder' ); ?></button>

            <ol id="cssNavigationMenu" class="wowp-php-nav-menu"></ol>

        </div>

        <div class="wowp-settings__page-content">

			<?php Field::textarea( 'css_code' ); ?>

            <div class="wowp-notification notification-info">
                Just enter the CSS content. You don’t need to include <code>&lt;style&gt;</code> — it's already on the page.
            </div>

			<?php if ( ! empty( $css_link ) ): ?>
                <div class="wowp-field has-addon">
                    <span class="label"><?php esc_html_e( 'CSS File URL', 'wp-coder' ); ?></span>
                    <label for="tag" class="label is-addon"><span
                                class="dashicons dashicons-admin-links"></span></label>
                    <input type="url" id="url-css-file" readonly="readonly" value="<?php echo esc_url( $css_link ); ?>">
                </div>
			<?php endif; ?>

        </div>
    </div>

<?php

