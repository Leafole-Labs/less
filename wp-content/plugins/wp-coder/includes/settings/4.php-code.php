<?php
/*
 * Page Name: PHP
 */

use WPCoder\Dashboard\Field;

defined( 'ABSPATH' ) || exit;

$php_include = [
	0 => __( 'Run where inserted', 'wp-coder' ),
	1 => __( 'Run only in admin area', 'wp-coder' ),
	2 => __( 'Run only on front-end', 'wp-coder' ),
	3 => __( 'Run everywhere', 'wp-coder' ),
]
?>

    <div class="wowp-settings__page">
        <div class="wowp-settings__page-sidebar">

            <div class="wowp-field" data-option="php_include">
                <label>
                    <span class="label">
                            <?php esc_html_e( 'Include PHP', 'wp-coder' ); ?>
                        <sup class="wowp-tooltip" data-tooltip="Define where this PHP code should run: by shortcode, in admin, front-end, or everywhere.">ℹ</sup>
                    </span>
			        <?php Field::select( 'php_include', null, $php_include ); ?>
                </label>
            </div>

            <button class="button-editor button" id="phpnav"><?php esc_html_e( 'Add NAV Comment', 'wp-coder' ); ?></button>
            <ol id="phpNavigationMenu" class="wowp-php-nav-menu"></ol>


        </div>
        <div class="wowp-settings__page-content">

			<?php Field::textarea( 'php_code' ); ?>

            <div class="wowp-notification notification-info">
               Just enter the PHP content. You don’t need to include <code>&lt;?php&gt;</code> — it’s already handled.
            </div>

        </div>
    </div>

<?php


