<?php
/**
 * Page Name: Import/Export
 *
 */

use WPCoder\Dashboard\DashboardInitializer;
use WPCoder\Dashboard\ImporterExporter;
use WPCoder\WPCoder;

defined( 'ABSPATH' ) || exit;
?>

    <div class="wowp">
		<?php DashboardInitializer::header(); ?>

        <div class="wowp-page-header">
            <h2 class="wowp-page-header__title">
				<?php esc_html_e( 'Import / Export', 'wp-coder' ); ?>
            </h2>
        </div>


        <div class="wowp-settings__header m-w-48">

            <div class="wowp-fieldset">
                <div class="wowp-fieldset__header">
                    <div class="wowp-fieldset__header-title">
						<?php esc_html_e( 'Export Settings', 'wp-coder' ); ?>
                        <p><?php
							printf(
							/* translators:  %s. plugin name */
								esc_html__( 'Export the  settings for %s as a .json file. This allows you to easily import the configuration into another site.', 'wp-coder' ), '<b>' . esc_attr( WPCoder::info( 'name' ) ) . '</b>' ); ?></p>
                    </div>
                </div>
				<?php ImporterExporter::form_export(); ?>
            </div>

            <div class="wowp-fieldset">
                <div class="wowp-fieldset__header">
                    <div class="wowp-fieldset__header-title">
						<?php esc_html_e( 'Import Settings', 'wp-coder' ); ?>
                        <p><?php
							printf( /* translators:  %s. plugin name */
								esc_html__( 'Import the %s settings from a .json file. This file can be obtained by exporting the settings on another site using the form above.', 'wp-coder' ), '<b>' . esc_attr( WPCoder::info( 'name' ) ) . '</b>    ' ); ?></p>
                    </div>
                </div>
				<?php ImporterExporter::form_import(); ?>
            </div>

        </div>


    </div>

<?php
