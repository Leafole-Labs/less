<?php

namespace WPCoder\Dashboard;

defined( 'ABSPATH' ) || exit;

use WPCoder\WPCoder;

class Settings {

	public static function init(): void {
		$pages = DashboardHelper::get_files( 'settings' );

		$default = Field::getDefault();

		$i = 0;
		echo '<div class="wowp-settins__tabs" id="wowp-settings-tabs">';
		foreach ( $pages as $key => $page ) {
			$tab = ! empty( $default['param']['tab'] ) ? $default['param']['tab'] : 'html-code';

			echo '<input type="radio" class="wowp-settins__tabs-radio" name="param[tab]" value="' . esc_attr( $page['file'] ) . '" id="wowp-tab-' . esc_attr( $page['file'] ) . '" ' . checked( $tab, $page['file'], false ) . '>';
			echo '<label  class="wowp-settins__tabs-tab" for="wowp-tab-' . esc_attr( $page['file'] ) . '">' . esc_html( $page['name'] ) . '</label>';

			$i ++;
		}
		?>

        <div class="popover-container">
            <button id="popover-toggle" class="wowp-button button button-secondary">Hide Tabs</button>

            <div class="popover" id="popover-box">
                <div class="wowp-field has-checkbox is-reverse">
	                <span class="label">
	                    <?php esc_html_e( 'HTML', 'wp-coder' ); ?>
	                </span>
                    <label class="switch">
						<?php Field::checkbox( '[hide_html]' ); ?>
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="wowp-field has-checkbox is-reverse">
	                <span class="label">
	                    <?php esc_html_e( 'CSS', 'wp-coder' ); ?>
	                </span>
                    <label class="switch">
						<?php Field::checkbox( '[hide_css]' ); ?>
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="wowp-field has-checkbox is-reverse">
	                <span class="label">
	                    <?php esc_html_e( 'JS', 'wp-coder' ); ?>
	                </span>
                    <label class="switch">
						<?php Field::checkbox( '[hide_js]' ); ?>
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="wowp-field has-checkbox is-reverse">
	                <span class="label">
	                    <?php esc_html_e( 'PHP', 'wp-coder' ); ?>
	                </span>
                    <label class="switch">
						<?php Field::checkbox( '[hide_php]' ); ?>
                        <span class="slider"></span>
                    </label>
                </div>

                <div class="wowp-field has-checkbox is-reverse">
	                <span class="label">
	                    <?php esc_html_e( 'Scripts & Styles', 'wp-coder' ); ?>
	                </span>
                    <label class="switch">
						<?php Field::checkbox( '[hide_include]' ); ?>
                        <span class="slider"></span>
                    </label>
                </div>
            </div>
        </div>

		<?php

		$i = 0;
		foreach ( $pages as $key => $page ) {
			$file = DashboardHelper::get_folder_path( 'settings' ) . '/' . $key . '.' . $page['file'] . '.php';

			if ( file_exists( $file ) ) {

				echo '<div class="wowp-settins__tabs-content" data-content="wowp-tab-' . esc_attr( $page['file'] ) . '">';

				require_once $file;

				echo '<input type="submit" name="submit_settings" class="wowp-button button button-dark button-hero m-top" value="' . esc_attr__( 'Save', 'wp-coder' ) . '">';
				echo '</div>';
			}
			$i ++;
		}
		echo '</div>';
	}


	public static function save_item() {

		if ( empty( $_POST['submit_settings'] ) ) {
			return false;
		}

		$id       = absint( $_POST['tool_id'] );
		$settings = apply_filters( WPCoder::PREFIX . '_save_settings', [ 'data' => [], 'formats' => [] ], $_POST );

		if ( empty( $id ) ) {
			$id_item = DBManager::insert( $settings['data'], $settings['formats'] );
		} else {
			$where = [
				'id' => absint( $id ),
			];
			DBManager::update( $settings['data'], $where, $settings['formats'] );
			$id_item = $id;
		}

		FolderManager::update_files( $settings['data'], $id_item );

		wp_safe_redirect( Link::save_item( $id_item ) );
		exit;

	}

	public static function deactivate_item( $id = 0 ): void {
		$id = isset( $_GET['id'] ) ? absint( $_GET['id'] ) : $id;

		if ( ! empty( $id ) ) {
			DBManager::update( [ 'status' => '1' ], [ 'ID' => $id ], [ '%d' ] );
		}

	}

	public static function activate_item( $id = 0 ): void {
		$id = isset( $_GET['id'] ) ? absint( $_GET['id'] ) : $id;

		if ( ! empty( $id ) ) {
			DBManager::update( [ 'status' => '' ], [ 'ID' => $id ], [ '%d' ] );
		}

	}

	public static function deactivate_mode( $id = 0 ): void {
		$id = isset( $_GET['id'] ) ? absint( $_GET['id'] ) : $id;

		if ( ! empty( $id ) ) {
			DBManager::update( [ 'mode' => '' ], [ 'ID' => $id ], [ '%d' ] );
		}

	}

	public static function activate_mode( $id = 0 ): void {
		$id = isset( $_GET['id'] ) ? absint( $_GET['id'] ) : $id;

		if ( ! empty( $id ) ) {
			DBManager::update( [ 'mode' => '1' ], [ 'ID' => $id ], [ '%d' ] );
		}

	}

}