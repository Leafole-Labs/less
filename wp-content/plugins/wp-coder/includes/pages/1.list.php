<?php
/*
 * Page Name: List
 */

use WPCoder\Dashboard\DashboardInitializer;
use WPCoder\Dashboard\ListTable;
use WPCoder\WPCoder;

defined( 'ABSPATH' ) || exit;

$list_table = new ListTable();
$list_table->prepare_items();
$add_url = add_query_arg( [
	'page'   => WPCoder::SLUG . '-settings',
	'action' => 'new'
], admin_url( 'admin.php' ) );
?>
    <div class="wowp">
		<?php DashboardInitializer::header(); ?>

        <div class="wowp-page-header">
            <h2 class="wowp-page-header__title">
				<?php esc_html_e( 'All Codes', 'wp-coder' ); ?>
            </h2>
            <a href="<?php echo esc_url( $add_url ); ?>" class="button button-primary button-large">
				<?php esc_html_e( 'Add New', 'wp-coder' ); ?>
            </a>
        </div>


        <form method="post" class="wowp-list">
			<?php
			$list_table->search_box( esc_attr__( 'Search', 'wp-coder' ), WPCoder::PREFIX );
			$list_table->display();
			?>
            <input type="hidden" name="page" value="<?php echo esc_attr( $_REQUEST['page'] ); ?>"/>
			<?php wp_nonce_field( WPCoder::PREFIX . '_nonce', WPCoder::PREFIX . '_list_action' ); ?>
        </form>

    </div>
<?php

