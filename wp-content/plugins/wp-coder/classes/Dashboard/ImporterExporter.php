<?php

namespace WPCoder\Dashboard;

defined( 'ABSPATH' ) || exit;

use WPCoder\WPCoder;

class ImporterExporter {
	private $settings;



	public static function form_export(): void {
		?>
        <form method="post">
            <p/>
			<?php
			$tags = DBManager::get_tags_from_table();

			$tag_search = ( ! empty( $_REQUEST['tag'] ) ) ? sanitize_text_field( $_REQUEST  ['tag'] ) : '';
			$tag_search = ( $tag_search === 'all' ) ? '' : $tag_search;

			echo '<div class="actions"><label for="filter-by-tag" class="screen-reader-text">' . esc_attr__( 'Filter by tag',
					'wp-coder' ) . '</label>';
			echo '<select name="tag" id="filter-by-tag">';
			echo '<option value="all"' . selected( 'all', $tag_search, false ) . '>' . esc_attr__( 'All',
					'wp-coder' ) . '</option>';

			if ( ! empty( $tags ) ) {
				foreach ( $tags as $tag ) {
					if ( empty( $tag['tag'] ) ) {
						continue;
					}
					echo '<option value="' . esc_attr( trim( $tag['tag'] ) ) . '"' . selected( $tag['tag'], $tag_search,
							false ) . '>' . esc_html( $tag['tag'] ) . '</option>';
				}
			}
			echo '</select>';
			submit_button( __( 'Export Data', 'wp-coder' ), 'secondary', 'submit', false );
			echo '</div>';
			wp_nonce_field( WPCoder::PREFIX . '_nonce', WPCoder::PREFIX . '_export_data' );
			?>
        </form>

		<?php
	}

	public static function form_import(): void {
		?>
        <form method="post" enctype="multipart/form-data" action="">
            <p>
                <span class="wowp-file">
                <input type="file" name="import_file" accept="*.json"/>
                </span>
                <br>
                Upload a valid WP Coder Pro .json file exported from another site.
            </p>
            <p>
                <label>
                    <input type="checkbox" name="wowp_import_update" value="1">
					<?php esc_attr_e( 'Update item if item already exists.', 'wp-coder' ); ?>
                </label>

            </p>

            <p>
				<?php submit_button( __( 'Import Settings', 'wp-coder' ), 'secondary', 'submit', false ); ?>
				<?php wp_nonce_field( WPCoder::PREFIX . '_nonce', WPCoder::PREFIX . '_import_data' ); ?>
            </p>
        </form>

		<?php
	}

	public static function import_data(): void {

		if ( self::get_file_extension( $_FILES['import_file']['name'] ) != 'json' ) {
			wp_die( esc_attr__( 'Please upload a valid .json file', 'wp-coder' ), esc_attr__( 'Error', 'wp-coder' ),
				[ 'response' => 400 ] );
		}

		$import_file = $_FILES['import_file']['tmp_name'];
		$settings    = json_decode( file_get_contents( $import_file ), false );

		$columns = DBManager::get_columns();

		$update = ! empty( $_POST['wowp_import_update'] ) ? '1' : '';

		foreach ( $settings as $key => $val ) {

			$data    = [];
			$formats = [];

			foreach ( $columns as $column ) {
				$name          = $column->Field;
				$data[ $name ] = ! empty( $val->$name ) ? $val->$name : '';
				if ( $name === 'id' || $name === 'status' || $name === 'mode' ) {
					$formats[] = '%d';
				} else {
					$formats[] = '%s';
				}
			}

			$check_row = DBManager::check_row( $data['id'] );

			if ( ! empty( $update ) && ! empty( $check_row ) ) {

				$where = [
					'id' => absint( $data['id'] ),
				];
				$index = array_search( 'id', array_keys( $data ), true );
				unset( $data['id'], $formats[ $index ] );

				DBManager::update( $data, $where, $formats );
			} elseif ( ! empty( $check_row ) ) {
				$index = array_search( 'id', array_keys( $data ), true );
				unset( $data['id'], $formats[ $index ] );

				DBManager::insert( $data, $formats );
			} else {
				DBManager::insert( $data, $formats );
			}
		}

		$redirect_link = add_query_arg( [
			'page' => WPCoder::SLUG,
		], admin_url( 'admin.php' ) );

		wp_safe_redirect( $redirect_link );
		exit;

	}

	private static function get_file_extension( $str ) {
		$parts = explode( '.', $str );

		return end( $parts );
	}

	public static function export_item( $id = 0, $action = '' ): bool {

		$page   = isset( $_GET['page'] ) ? sanitize_text_field( $_GET['page'] ) : '';
		$action = isset( $_GET['action'] ) ? sanitize_text_field( $_GET['action'] ) : $action;
		$id     = isset( $_GET['id'] ) ? absint( $_GET['id'] ) : $id;

		if ( ( $page !== WPCoder::SLUG ) || ( $action !== 'export' ) || empty( $id ) ) {
			return false;
		}

		$data = DBManager::get_data_by_id( $id );
		if ( ! $data ) {
			return false;
		}

		$name      = trim( $data->title );
		$name      = str_replace( ' ', '-', $name );
		$file_name = WPCoder::info( 'data' ) . '-' . $name . '-id-' . $id . '-' . gmdate( 'Y-m-d-H-i-s' ) . '.json';
		self::export( $file_name, [ $data ] );

		return true;
	}

	public static function export_items(): bool {

		if ( isset( $_REQUEST['filter_action'] ) && ! empty( $_REQUEST['filter_action'] ) ) {
			return false;
		}

		if ( !isset( $_REQUEST['action'] ) || 'export' !== $_REQUEST['action'] ) {
			return false;
		}

		$name         = WPCoder::PREFIX . '_list_action';
		$nonce_action = WPCoder::PREFIX . '_nonce';

		if( ! isset( $_POST[ $name ] ) || ! wp_verify_nonce( $_POST[ $name ], $nonce_action ) || ! WPCoder::user_can_manage() ) {
			return false;
		}

		$ids    = isset( $_POST['ID'] ) ? ( map_deep( $_POST['ID'], 'absint' ) ) : false;


		if ( empty( $ids ) || ! is_array( $ids ) ) {
			return false;
		}

		$data = DBManager::get_data_by_ids( $ids );
		if ( ! $data ) {
			return false;
		}

		$file_name = WPCoder::info( 'data' ) . '-items-' . implode( '-', array_slice( $ids, 0, 3 ) ) . '-' . gmdate( 'Y-m-d-H-i-s' ) . '.json';
		self::export( $file_name, $data );

		return true;
	}

	public static function export_data(): bool {
		$tag = isset( $_POST['tag'] ) ? sanitize_text_field( wp_unslash( $_POST['tag'] ) ) : '';
		if ( ! empty( $tag ) ) {
			$file_name = WPCoder::info( 'data' ) . '-tag-' . esc_attr( $tag ) . '-' . gmdate( 'Y-m-d-H-i-s' ) . '.json';
			$data      = DBManager::get_data_by_tag( $tag );
		} else {
			$file_name = WPCoder::info( 'data' ) . '-database-' . gmdate( 'Y-m-d-H-i-s' ) . '.json';
			$data      = DBManager::get_all_data();
		}

		if ( empty( $data ) ) {
			return false;
		}
		self::export( $file_name, $data );

		return true;

	}

	private static function export( $file_name, $data ): void {

		ignore_user_abort( true );
		nocache_headers();
		header( 'Content-Type: application/json; charset=utf-8' );
		header( 'Content-Disposition: attachment; filename=' . $file_name );
		header( "Expires: 0" );

		echo json_encode( $data );
		exit;
	}

}