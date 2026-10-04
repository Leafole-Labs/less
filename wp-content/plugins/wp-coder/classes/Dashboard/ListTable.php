<?php

namespace WPCoder\Dashboard;

defined( 'ABSPATH' ) || exit;

use WP_List_Table;
use WPCoder\WPCoder;

class ListTable extends WP_List_Table {

	public $per_page = 30;

	public function __construct() {
		// Set parent defaults
		parent::__construct( array(
			'ajax' => false,
		) );
		$this->process_bulk_action();
	}

	public function column_default( $item, $column_name ) {
		return $item[ $column_name ];
	}

	public function search_box( $text, $input_id ) {
		$input_id = $input_id . '-search-input';
		if ( ! empty( $_REQUEST['orderby'] ) ) {
			echo '<input type="hidden" name="orderby" value="' . esc_attr( $_REQUEST['orderby'] ) . '" />';
		}
		if ( ! empty( $_REQUEST['order'] ) ) {
			echo '<input type="hidden" name="order" value="' . esc_attr( $_REQUEST['order'] ) . '" />';
		}
		?>
        <p class="search-box">
            <label class="screen-reader-text" for="<?php
			echo esc_attr( $input_id ) ?>"><?php
				echo esc_attr( $text ); ?>
                :</label>
            <input type="search" id="<?php
			echo esc_attr( $input_id ) ?>" name="s" value="<?php
			_admin_search_query(); ?>"/>
			<?php
			submit_button( $text, 'button', false, false, array( 'ID' => 'search-submit' ) ); ?>
        </p>
		<?php
	}

	public function column_title( $item ): string {
		$title = ! empty( $item['title'] ) ? $item['title'] : __( 'Untitled', 'wp-coder' );

		$actions = [
			'id'        => 'ID: ' . $item['ID'],
			'edit'      => '<a href="' . esc_url( Link::edit( $item['ID'] ) ) . '">' . esc_attr__( 'Edit',
					'wp-coder' ) . '</a>',
			'duplicate' => '<a href="' . esc_url( Link::duplicate( $item['ID'] ) ) . '">' . esc_attr__( 'Duplicate',
					'wp-coder' ) . '</a>',
			'delete'    => '<a href="' . esc_url( Link::remove( $item['ID'] ) ) . '" >' . esc_attr__( 'Delete',
					'wp-coder' ) . '</a>',
			'export'    => '<a href="' . esc_url( Link::export( $item['ID'] ) ) . '" >' . esc_attr__( 'Export',
					'wp-coder' ) . '</a>',
		];


		return $title . $this->row_actions( $actions );
	}

	public function prepare_items(): void {
		$columns     = $this->get_columns();
		$hidden      = $this->get_hidden_columns();
		$sortable    = $this->get_sortable_columns();
		$data        = $this->table_data();
		$perPage     = 30;
		$currentPage = $this->get_pagenum();
		if ( $data ) {
			usort( $data, [ &$this, 'sort_data' ] );
			$data = array_slice( $data, ( ( $currentPage - 1 ) * $perPage ), $perPage );
		}
		$totalItems            = $this->list_count();
		$this->_column_headers = [ $columns, $hidden, $sortable ];
		$this->items           = $data;
		$this->set_pagination_args( [
			'total_items' => $totalItems,
			'per_page'    => $perPage,
			'total_pages' => ceil( $totalItems / $perPage ),
		] );
	}

	public function get_columns(): array {
		return [
			'cb'       => '<input type="checkbox" />',
			'title'    => __( 'Title', 'wp-coder' ),
			'code'     => __( 'Shortcode', 'wp-coder' ),
			'code-alt' => __( 'Alternative Shortcode', 'wp-coder' ),
			'tag'      => __( 'Tag', 'wp-coder' ),
			'mode'     => __( 'Test mode',
					'wp-coder' ) . '<sup class="wowp-tooltip" data-tooltip="' . __( 'The item will only be displayed for administrators.',
					'wp-coder' ) . '">ℹ</sup>',
			'status'   => __( 'Status',
					'wp-coder' ) . '<sup class="wowp-tooltip" data-tooltip="' . __( 'The item will only be displayed for administrators.',
					'wp-coder' ) . '">ℹ</sup>',
		];
	}

	public function get_hidden_columns(): array {
		return [];
	}

	public function get_sortable_columns(): array {
		return [
			'ID' => [ 'ID', false ],
		];
	}

	private function table_data(): array {
		$data   = [];
		$paged  = $this->get_paged();
		$offset = $this->per_page * ( $paged - 1 );

		$result = $this->get_results();

		$slug      = WPCoder::SLUG;
		$shortcode = WPCoder::SHORTCODE;

		if ( empty( $result ) ) {
			return $data;
		}
		$paged = $_GET['paged'] ?? '';

		$main_link_arg = [
			'page'   => $slug . '-settings',
			'action' => 'update'
		];

		if ( ! empty( $paged ) ) {
			$main_link_arg['wpcoder-page'] = absint( $paged );
		}

		$main_link = add_query_arg( $main_link_arg, admin_url( 'admin.php' ) );


		foreach ( $result as $key => $value ) {
			$title       = ! empty( $value->title ) ? $value->title : __( 'Untitled', 'wp-coder' );
			$tooltip_off = esc_attr__( 'Click for Deactivate.', 'wp-coder' );
			$tooltip_on  = esc_attr__( 'Click for Activate.', 'wp-coder' );
			$status_off  = '<a href="' . esc_url( Link::activate_url( $value->id ) ) . '" class="wowp-toogle is-off" data-tooltip="' . esc_attr( $tooltip_on ) . '"><span>' . esc_attr__( 'OFF',
					'wp-coder' ) . '</span></a>';
			$status_on   = '<a href="' . esc_url( Link::deactivate_url( $value->id ) ) . '" class="wowp-toogle is-on" data-tooltip="' . esc_attr( $tooltip_off ) . '"><span>' . esc_attr__( 'ON',
					'wp-coder' ) . '</span></a>';
			$status      = ! empty( $value->status ) ? $status_off : $status_on;

			$mode_tooltip_off = esc_attr__( 'Click for OFF.', 'wp-coder' );
			$mode_tooltip_on  = esc_attr__( 'Click for ON.', 'wp-coder' );

			$mode_off = '<a href="' . esc_url( Link::activate_mode( $value->id ) ) . '" class="wowp-toogle is-off" data-tooltip="' . esc_attr( $mode_tooltip_on ) . '"><span>' . esc_attr__( 'OFF',
					'wp-coder' ) . '</span></a>';
			$mode_on  = '<a href="' . esc_url( Link::deactivate_mode( $value->id ) ) . '" class="wowp-toogle is-on" data-tooltip="' . esc_attr( $mode_tooltip_off ) . '"><span>' . esc_attr__( 'ON',
					'wp-coder' ) . '</span></a>';

			$mode = empty( $value->mode ) ? $mode_off : $mode_on;

			$tag = '';
			if ( isset( $value->tag ) ) {
				$tag_url = add_query_arg( [
					'page' => WPCoder::SLUG,
					'tag'  => $value->tag
				], admin_url( 'admin.php' ) );
				$tag     = '<a href="' . esc_url( $tag_url ) . '">' . esc_attr( $value->tag ) . '</a>';
			}

			$link   = add_query_arg( [ 'id' => $value->id ], $main_link );
			$data[] = array(
				'ID'       => $value->id,
				'title'    => '<a href="' . esc_url( $link ) . '">' . esc_attr( $title ) . '</a>',
				'code'     => '<div class="wowp-field has-addon"><label for="shortcode" class="label is-addon"><span class="wowp-tooltip on-right is-pointer can-copy" data-tooltip="Copy"><span class="wowp-copy icon icon-copy"></span></span></label><input type="text" value="[' . esc_attr( $shortcode ) . ' id=&quot;' . absint( $value->id ) . '&quot;]" readonly="readonly"></div>',
				'code-alt' => '<div class="wowp-field has-addon"><label for="shortcode" class="label is-addon"><span class="wowp-tooltip on-right is-pointer can-copy" data-tooltip="Copy"><span class="wowp-copy icon icon-copy"></span></span></label><input type="text" value="[' . esc_attr( $shortcode ) . ' title=&quot;' . esc_attr( $title ) . '&quot;]" readonly="readonly"></div>',
				'tag'      => $tag,
				'mode'     => $mode,
				'status'   => $status,
			);
		}

		return $data;
	}

	public function column_cb( $item ) {
		return sprintf( '<input type="checkbox" name="%1$s[]" value="%2$s" />', 'ID', $item['ID'] );
	}

	public function get_paged(): int {
		return isset( $_GET['paged'] ) ? absint( $_GET['paged'] ) : 1;
	}

	public function get_search() {
		return ! empty( $_POST['s'] ) ? urldecode( trim( $_POST['s'] ) ) : false;
	}

	public function list_count(): int {
		$result = $this->get_results();

		if ( empty( $result ) ) {
			return 0;
		}
		$count = count( $result );


		return (int) $count;
	}

	public function get_results() {
		global $wpdb;

		$search = $this->get_search();

		$tag_search = ( ! empty( $_REQUEST['tag'] ) ) ? sanitize_text_field( $_REQUEST  ['tag'] ) : '';
		$tag_search = ( $tag_search === 'all' ) ? '' : $tag_search;


		$result = '';

		$table = $wpdb->prefix . WPCoder::PREFIX;
// phpcs:disable  WordPress.DB.PreparedSQL.InterpolatedNotPrepared, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
		if ( empty( $search ) ) {
			$result = $wpdb->get_results( "SELECT * FROM $table order by id desc" );
			if ( ! empty( $tag_search ) ) {
				$result = $wpdb->get_results( $wpdb->prepare("SELECT * FROM $table WHERE tag=%s order by id desc", $tag_search ));
			}
		} elseif ( trim( $search ) === 'Untitled' ) {
			$result = $wpdb->get_results( "SELECT * FROM $table WHERE title='' order by id desc" );
			if ( ! empty( $tag_search ) ) {
				$result = $wpdb->get_results( $wpdb->prepare("SELECT * FROM $table WHERE title='' AND tag=%s order by id desc", $tag_search));
			}
		} elseif ( is_numeric( $search ) ) {
			$result = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $table WHERE id=%d", absint( $search ) ) );
			if ( ! empty( $tag_search ) ) {
				$result = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $table WHERE id=%d AND tag=%s", absint( $search ),
					$tag_search ) );
			}
		} else {
			$wild   = '%';
			$find   = sanitize_text_field( $search );
			$like   = $wild . $wpdb->esc_like( $find ) . $wild;
			$result = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $table WHERE title LIKE %s order by id desc", $like ) );
			if ( ! empty( $tag_search ) ) {
				$result = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $table WHERE title LIKE %s AND tag=%s order by id desc", $like, $tag_search ) );
			}
		}

// phpcs:enable
		return $result;
	}


	public function get_bulk_actions() {
		$actions = [
			'delete'     => __( 'Delate', 'wp-coder' ),
			'activate'   => __( 'Activate', 'wp-coder' ),
			'deactivate' => __( 'Deactivate', 'wp-coder' ),
			'test_on'    => __( 'Test mode ON', 'wp-coder' ),
			'test_off'   => __( 'Test mode OFF', 'wp-coder' ),
			'export'     => __( 'Export', 'wp-coder' ),
		];

		return $actions;
	}

	public function process_bulk_action() {
		$ids    = isset( $_POST['ID'] ) ? ( map_deep( $_POST['ID'], 'absint' ) ) : false;
		$action = $this->current_action();
		if ( ! is_array( $ids ) ) {
			$ids = [ $ids ];
		}
		if ( empty( $action ) ) {
			return false;
		}

		$verify = $this->verify();

		if ( ! $verify ) {
			return false;
		}

		foreach ( $ids as $id ) {
			if ( 'delete' === $this->current_action() ) {
				DBManager::delete( $id );
			}
			if ( 'activate' === $this->current_action() ) {
				Settings::activate_item( $id );
			}
			if ( 'deactivate' === $this->current_action() ) {
				Settings::deactivate_item( $id );
			}
			if ( 'test_on' === $this->current_action() ) {
				Settings::activate_mode( $id );
			}
			if ( 'test_off' === $this->current_action() ) {
				Settings::deactivate_mode( $id );
			}
		}
	}

	protected function extra_tablenav( $which ) {
		if ( 'top' === $which ) {
			$tags = DBManager::get_tags_from_table();

			$tag_search = ( ! empty( $_REQUEST['tag'] ) ) ? sanitize_text_field( $_REQUEST  ['tag'] ) : '';
			$tag_search = ( $tag_search === 'all' ) ? '' : $tag_search;

			echo '<div class="alignleft actions"><label for="filter-by-tag" class="screen-reader-text">' . esc_attr__( 'Filter by tag',
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
			submit_button( __( 'Filter', 'wp-coder' ), 'secondary', 'action', false );
			echo '</div>';
		}
	}

	private function sort_data( $a, $b ) {
		// If no sort, default to title
		$orderby = ( ! empty( $_GET['orderby'] ) ) ? sanitize_text_field( $_GET['orderby'] ) : 'ID';
		// If no order, default to asc
		$order = ( ! empty( $_GET['order'] ) ) ? sanitize_text_field( $_GET['order'] ) : 'desc';
		// Determine sort order
		$result = strnatcmp( $a[ $orderby ], $b[ $orderby ] );

		// Send final sort direction to usort
		return ( $order === 'asc' ) ? $result : - $result;
	}

	private function verify() {
		$name         = WPCoder::PREFIX . '_list_action';
		$nonce_action = WPCoder::PREFIX . '_nonce';

		return ! ( ! isset( $_POST[ $name ] ) || ! wp_verify_nonce( $_POST[ $name ],
				$nonce_action ) || ! WPCoder::user_can_manage() );
	}

}