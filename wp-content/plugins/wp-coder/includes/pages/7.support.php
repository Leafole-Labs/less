<?php
/**
 * Page Name: Support
 *
 */

use WPCoder\Dashboard\DashboardInitializer;
use WPCoder\Dashboard\SupportForm;
use WPCoder\WPCoder;

defined( 'ABSPATH' ) || exit;
$emil = WPCoder::info( 'email' );
?>

    <div class="wowp">

		<?php DashboardInitializer::header(); ?>

        <div class="wowp-page-header">
            <h2 class="wowp-page-header__title">
				<?php esc_html_e( 'Support', 'wp-coder' ); ?>
            </h2>
        </div>

        <div class="wowp-settings__header m-w-48">

            <div class="wowp-fieldset">
                <div class="wowp-fieldset__header">
                    <div class="wowp-fieldset__header-title">
						<?php esc_html_e( 'Send a Message to Support', 'wp-coder' ); ?>
                        <p><?php printf(
	                        // phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
	                        /* translators: 1. support email */
                                __( 'For a faster response, please describe your issue below or email us at %1$s.', 'wp-coder' ), '<a href="mailto:' . esc_attr( $emil ) . '">' . esc_attr( $emil ) . '</a>' );
	                        // phpcs:enable
                        ?></p>
                    </div>
                </div>
				<?php SupportForm::init(); ?>
            </div>

        </div>

    </div>
<?php
