<?php
/*
 * Page Name: HTML
 */

use WPCoder\Dashboard\Field;
use WPCoder\Dashboard\Option;

defined( 'ABSPATH' ) || exit;

$default = Field::getDefault();
$opt     = include( 'options/html-code.php' );
$options = get_option( '_wp_coder_tools', [] );

?>

    <div class="wowp-settings__page">

        <div class="wowp-settings__page-sidebar">

	        <?php Option::init( [
		        $opt['preview'],
	        ] ); ?>

            <button class="button button-add-img"><?php esc_html_e( 'Add Image', 'wp-coder' ); ?></button>

			<?php Option::init( [
				$opt['minified'],
			] ); ?>

            <button class="button-editor button"
                    id="htmlnav"><?php esc_html_e( 'Add NAV Comment', 'wp-coder' ); ?></button>

            <ol id="htmlNavigationMenu" class="wowp-php-nav-menu"></ol>


        </div>

        <div class="wowp-settings__page-content">

			<?php Field::textarea( 'html_code' ); ?>

            <div class="wowp-notification notification-info">
                Just enter the HTML content. You don’t need to include <code>&lt;html&gt;</code> or
                <code>&lt;body&gt;</code> — it's already on the page.
            </div>
        </div>

    </div>


<?php

