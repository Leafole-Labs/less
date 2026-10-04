<?php

use WPCoder\Dashboard\DashboardInitializer;
use WPCoder\Dashboard\DebugLog;

defined( 'ABSPATH' ) || exit;

if ( ! \WPCoder\WPCoder::user_can_manage() ) {
	wp_die( esc_attr__( 'You do not have sufficient permissions to access this page.', 'wp-coder' ) );
}
?>

    <div class="wowp">
		<?php DashboardInitializer::header(); ?>

        <div class="wowp-page-header">
            <h2 class="wowp-page-header__title">
				<?php esc_html_e( 'Debug', 'wp-coder' ); ?>
            </h2>
        </div>

		<?php DebugLog::init(); ?>

    </div>

<?php
