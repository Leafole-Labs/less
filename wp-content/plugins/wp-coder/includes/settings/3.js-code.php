<?php
/*
 * Page Name: JS
 */

use WPCoder\Dashboard\Field;
use WPCoder\Dashboard\FolderManager;
use WPCoder\Dashboard\Option;

defined( 'ABSPATH' ) || exit;

$default = Field::getDefault();
$opt     = include( 'options/js-code.php' );

$js_link = '';
if ( ! empty( $default['js_code'] ) ) {
	$js_link = FolderManager::path_upload_url() . 'script-' . $default['id'] . '.js';
}

?>

    <div class="wowp-settings__page">
        <div class="wowp-settings__page-sidebar">

	        <?php Option::init( [
		        $opt['jquery'],
		        $opt['inline'],
		        $opt['minified'],
		        $opt['attributes'],
	        ] ); ?>

            <button class="button-editor button" id="jsnav"><?php esc_html_e( 'Add NAV Comment', 'wp-coder' ); ?></button>
            <ol id="jsNavigationMenu" class="wowp-php-nav-menu"></ol>

        </div>
        <div class="wowp-settings__page-content">
	        <?php Field::textarea( 'js_code' ); ?>

            <div class="wowp-notification notification-info">
                Just enter the JavaScript content. You don’t need to include <code>&lt;script&gt;</code> — it's already on the page.
            </div>

	        <?php if ( ! empty( $js_link ) ): ?>
                <div class="wowp-field has-addon">
                    <span class="label"><?php esc_html_e( 'JS File URL', 'wp-coder' ); ?></span>
                    <label for="tag" class="label is-addon"><span
                                class="dashicons dashicons-admin-links"></span></label>
                    <input type="url" id="url-js-file" readonly="readonly" value="<?php echo esc_url( $js_link ); ?>">
                </div>
	        <?php endif; ?>


        </div>
    </div>

<?php


