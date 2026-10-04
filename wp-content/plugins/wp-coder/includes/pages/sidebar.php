<?php

use WPCoder\Dashboard\DBManager;
use WPCoder\Dashboard\Field;
use WPCoder\Dashboard\Link;
use WPCoder\WPCoder;

defined( 'ABSPATH' ) || exit;

$default = Field::getDefault();

$link = ! empty( $default['param']['link'] ) ? $default['param']['link'] : '';

$shortcode = '';
if ( ! empty( $default['id'] ) ) {
	$shortcode = '[' . WPCoder::SHORTCODE . ' id="' . absint( $default['id'] ) . '"]';
}

?>

<div class="wowp-settings__header">

    <div class="wowp-settings__title">
        <label class="screen-reader-text" id="title-prompt-text"
               for="title"><?php esc_html_e( 'Enter title here', 'wp-coder' ); ?>
        </label>
		<?php Field::text( 'title' ); ?>
        <input type="submit" name="submit_settings" id="submit_settings" class="button wowp-button button-dark"
               value="<?php esc_attr_e( 'Save', 'wp-coder' ); ?>">
    </div>

    <div class="wowp-settings__publish">

        <div class="wowp-settings__publish-status">
            <div class="wowp-field has-checkbox">
              <span class="label">
                    <?php esc_html_e( 'Deactivate', 'wp-coder' ); ?>
                   <sup class="wowp-tooltip" data-tooltip="Temporarily disables this code snippet without deleting it.">ℹ</sup>
                </span>
                <label class="switch">
					<?php Field::checkbox( 'status' ); ?>
                    <span class="slider"></span>
                </label>
            </div>

            <div class="wowp-field has-checkbox">
                <span class="label">
                    <?php esc_html_e( 'Test mode', 'wp-coder' ); ?>
                    <sup class="wowp-tooltip"
                         data-tooltip="Code runs only for logged-in administrators. Useful for testing before publishing.">ℹ</sup>
                </span>
                <label class="switch">
					<?php Field::checkbox( 'mode' ); ?>
                    <span class="slider"></span>
                </label>
            </div>

        </div>

        <div class="wowp-settings__publish-info">
			<?php if ( ! empty( $shortcode ) ) : ?>
                <div class="wowp-field has-addon">
                    <label for="shortcode" class="label is-addon">
                        <span class="wowp-tooltip on-right is-pointer can-copy" data-tooltip="Copy">
                            <span class="dashicons dashicons-shortcode"></span>
                        </span>
                    </label>
                    <input type="text" id="shortcode" readonly value="<?php echo esc_attr( $shortcode ); ?>">
                </div>
			<?php endif; ?>

            <div class="wowp-field has-addon">
                <label for="tag" class="label is-addon"><span class="dashicons dashicons-tag"></span></label>
                <input list="wowp-tags" type="text" name="tag" id="tag"
                       value="<?php echo esc_attr( $default['tag'] ); ?>">
                <datalist id="wowp-tags">
					<?php DBManager::display_tags(); ?>
                </datalist>
            </div>

            <div class="wowp-field has-addon">
                <label for="link" class="label is-addon">
					<?php if ( ! empty( $link ) ): ?>
                        <a href="<?php echo esc_url( $link ); ?>" target="_blank">
                            <span class="wowp-tooltip on-right is-pointer" data-tooltip="Open Link">
                                <span class="dashicons dashicons-admin-links"></span>
                            </span>
                        </a>
					<?php else: ?>
                        <span class="dashicons dashicons-admin-links"></span>
					<?php endif; ?>
                </label>
                <input type="url" name="param[link]" id="link" value="<?php echo esc_url( $link ); ?>">
            </div>
        </div>

    </div>

</div>
