<?php
/*
 * Page Name: Add New
 */

use WPCoder\Dashboard\DashboardInitializer;
use WPCoder\Dashboard\Field;
use WPCoder\Dashboard\Link;
use WPCoder\Dashboard\Settings;
use WPCoder\WPCoder;

defined( 'ABSPATH' ) || exit;

$default = Field::getDefault();


$action     = isset( $_GET['action'] ) ? sanitize_text_field( $_GET['action'] ) : '';
$item_id    = isset( $_GET['id'] ) ? absint( $_GET['id'] ) : '';
$item_title = __( 'Add new code', 'wp-coder' );
if ( $action === 'update' && ! empty( $item_id ) ) {
	$item_title = __( 'Update code', 'wp-coder' ) . ' ID: ' . $item_id;
} elseif ( $action === 'duplicate' && ! empty( $item_id ) ) {
	$item_title = __( 'Duplicate the code from', 'wp-coder' ) . ' ID: ' . $item_id;
}
$license_page = add_query_arg( [ 'page' => WPCoder::SLUG . '-license' ], admin_url( 'admin.php' ) );
$add_url      = add_query_arg( [
	'page'   => WPCoder::SLUG . '-settings',
	'action' => 'new'
], admin_url( 'admin.php' ) );

$duplicate_url = add_query_arg( [
	'page'   => WPCoder::SLUG . '-settings',
	'action' => 'duplicate',
	'id'     => $item_id,
], admin_url( 'admin.php' ) );

?>

    <div class="wowp">

		<?php DashboardInitializer::header(); ?>

        <div class="wowp-page-header">
            <h2 class="wowp-page-header__title">
				<?php echo esc_html( $item_title ); ?>
            </h2>

            <a href="<?php echo esc_url( Link::all_codes() ); ?>" class="button button-secondary button-small">
                ⇐ <?php esc_html_e( 'Back to Codes', 'wp-coder' ); ?>
            </a>

            <a href="<?php echo esc_url( $add_url ); ?>" class="button button-primary button-small">
                + <?php esc_html_e( 'Add New', 'wp-coder' ); ?>
            </a>

	        <?php if ( ! empty( $item_id ) ) : ?>
                <a href="<?php echo esc_url( $duplicate_url ); ?>" class="button button-secondary button-small">
                    <span class="icon icon-copy"></span> <?php esc_html_e( 'Duplicate', 'wp-coder' ); ?>
                </a>
	        <?php endif; ?>
        </div>

        <form action="" id="wowp-settings" method="post" >

			<?php require_once plugin_dir_path( __FILE__ ) . 'sidebar.php'; ?>

            <div class="wowp-preview is-hidden">
                <h3 class="wowp-preview__title">Live Preview</h3>
                <p class="wowp-preview__subtitle">This area shows a live rendering of your HTML and CSS code. JavaScript and shortcodes are not supported.</p>
                <div class="wowp-preview__iframe">
                    <div class="wowp-preview__top">
                        <label for="checkbox_preview" class="wowp-preview__dot is-close">
                            <span class="dashicons dashicons-no"></span>
                        </label>
                        <div class="wowp-preview__dot is-toggle">
                            <span class="dashicons dashicons-minus"></span>
                            <span class="dashicons dashicons-plus is-hidden"></span>
                        </div>
                        <div class="wowp-preview__dot is-reset">
                            <span class="dashicons dashicons-image-rotate"></span>
                        </div>
                        <div class="wowp-preview__size"></div>
                    </div>
                    <iframe id="wowp-preview" sandbox></iframe>
                </div>
            </div>

            <div class="wowp-settings">
				<?php Settings::init(); ?>
            </div>

            <input type="hidden" name="tool_id" value="<?php echo absint( $default['id'] ); ?>" id="tool_id"/>
            <input type="hidden" name="param[time]" value="<?php echo esc_attr( time() ); ?>"/>
			<?php wp_nonce_field( WPCoder::PREFIX . '_nonce', WPCoder::PREFIX . '_settings' ); ?>

        </form>


    </div>

<?php
