<?php

use WPCoder\WPCoder;

defined( 'ABSPATH' ) || exit;

class  WPCoder_Page_Info {

	public function __construct() {


		add_action( 'template_redirect', static function () {
			if ( is_user_logged_in() && WPCoder::user_can_manage() ) {
				$GLOBALS['wpcoder_render_start'] = microtime( true );
			}
		} );
		add_action( 'init', static function () {
			if ( ! defined( 'SAVEQUERIES' ) ) {
				if ( is_user_logged_in() && WPCoder::user_can_manage() ) {
					define( 'SAVEQUERIES', true );
				}
			}
		} );
		add_action( 'admin_bar_menu', [ $this, 'add_admin_bar_template_info' ], 90 );
	}

	public function add_admin_bar_template_info( $wp_admin_bar ): void {
		if ( ! is_user_logged_in() || ! WPCoder::user_can_manage() ) {
			return;
		}
		if ( is_admin() ) {
			return;
		}

		wp_enqueue_style( 'wpcoder-debug-bar', WPCoder::url() . 'assets/css/debug-bar.css', [], '1.0.0' );

		global $template;
		$theme = wp_get_theme();
		// Collect core info
		$tpl_path   = is_string( $template ) ? wp_normalize_path( $template ) : '';
		$tpl_file   = $tpl_path ? basename( $tpl_path ) : '';
		$body_cls   = get_body_class();
		$query_type = $this->query_flags();
		$ctx        = $this->current_object_info();
		$render_ms  = isset( $GLOBALS['wpcoder_render_start'] )
			? round( ( microtime( true ) - (float) $GLOBALS['wpcoder_render_start'] ) * 1000, 1 )
			: null;
		$stats      = $this->db_stats();

		// Root node
		$wp_admin_bar->add_node( [
			'id'    => 'wpc_dev_info',
			'title' => '<span class="ab-icon dashicons dashicons-hammer"></span><span class="ab-label">Dev Info</span>',
			'meta'  => [ 'class' => 'wpcoder-dev-info' ],
			'href'  => false
		] );


		// Memory headline
		$wp_admin_bar->add_node( [
			'id'     => 'wpc_dev_mem',
			'parent' => 'wpc_dev_info',
			'title'  => 'Memory: ' . size_format( memory_get_peak_usage( true ) ),
			'href'   => false,
		] );

		// Render headline
		if ( $render_ms !== null ) {
			$wp_admin_bar->add_node( [
				'id'     => 'wpc_dev_render',
				'parent' => 'wpc_dev_info',
				'title'  => 'Render: ' . $render_ms . ' ms',
				'href'   => false,
			] );
		}

		$wp_admin_bar->add_node( [
			'id'     => 'wpc_dev_theme',
			'parent' => 'wpc_dev_info',
			'title'  => 'Active Theme',
		] );

		$wp_admin_bar->add_node( [
			'id'     => 'wpc_dev_theme_name',
			'parent' => 'wpc_dev_theme',
			'title'  => 'Name: ' . esc_html( $theme->get( 'Name' ) ),
			'href'   => false
		] );

		$wp_admin_bar->add_node( [
			'id'     => 'wpc_dev_theme_version',
			'parent' => 'wpc_dev_theme',
			'title'  => 'Version: ' . esc_html( $theme->get( 'Version' ) ),
			'href'   => false
		] );

		$wp_admin_bar->add_node( [
			'id'     => 'wpc_dev_theme_author',
			'parent' => 'wpc_dev_theme',
			'title'  => 'Author: ' . esc_html( $theme->get( 'Author' ) ),
			'href'   => false
		] );


		$wp_admin_bar->add_node( [
			'id'     => 'wpc_dev_tpl',
			'parent' => 'wpc_dev_info',
			'title'  => 'Template Info',
			'href'   => false
		] );

		if ( $tpl_file ) {
			$wp_admin_bar->add_node( [
				'id'     => 'wpc_tpl_info',
				'parent' => 'wpc_dev_tpl',
				'title'  => 'Template: ' . esc_html( $tpl_file ),
				'href'   => false
			] );

			$wp_admin_bar->add_node( [
				'id'     => 'wpc_tpl_path',
				'parent' => 'wpc_dev_tpl',
				'title'  => 'Path: ' . esc_html( $tpl_path ),
				'href'   => false
			] );
		}

		$structure = get_option( 'permalink_structure' ) ?: 'plain';
		$wp_admin_bar->add_node( [
			'id'     => 'wpc_tpl_permalinks',
			'parent' => 'wpc_dev_tpl',
			'title'  => 'Permalinks: ' . esc_html( $structure ),
			'href'   => false
		] );

		$canonical = function_exists( 'wp_get_canonical_url' ) ? wp_get_canonical_url() : '';
		$wp_admin_bar->add_node( [
			'id'     => 'wpc_tpl_urls',
			'parent' => 'wpc_dev_tpl',
			'title'  => "canonical: " . esc_html( $canonical ),
			'href'   => false
		] );

		$scheme = is_ssl() ? 'https://' : 'http://';
		$host   = $_SERVER['HTTP_HOST'] ?? '';
		$req    = $_SERVER['REQUEST_URI'] ?? '';
		$full   = esc_url_raw( $scheme . $host . $req );
		$wp_admin_bar->add_node( [
			'id'     => 'wpc_dev_full_url',
			'parent' => 'wpc_dev_tpl',
			'title'  => 'Current URL: ' . $full,
			'href'   => false
		] );

		$wp_admin_bar->add_node( [
			'id'     => 'wpc_dev_query',
			'parent' => 'wpc_dev_info',
			'title'  => 'Query Info',
		] );

		foreach ( $ctx as $line_id => $line ) {
			$wp_admin_bar->add_node( [
				'id'     => 'wpcoder_ctx_' . $line_id,
				'parent' => 'wpc_dev_query',
				'title'  => esc_html( $line ),
			] );
		}

		if ( $query_type ) {
			$wp_admin_bar->add_node( [
				'id'     => 'wpc_dev_query_type',
				'parent' => 'wpc_dev_query',
				'title'  => 'Query: ' . esc_html( $query_type ),
			] );
		}

		if ( $stats['count'] !== null ) {
			$wp_admin_bar->add_node( [
				'id'     => 'wpc_dev_query_db',
				'parent' => 'wpc_dev_query',
				'title'  => 'Database Queries: ' . (int) $stats['count'],
			] );

			$wp_admin_bar->add_node( [
				'id'     => 'wpc_dev_query_time',
				'parent' => 'wpc_dev_query',
				'title'  => 'Query Time: ' . round( (float) $stats['time'] * 1000, 1 ) . ' ms',
			] );

			$avg = $stats['time'] / max( 1, $stats['count'] );
			$wp_admin_bar->add_node( [
				'id'     => 'wpc_dev_perf_db_avg',
				'parent' => 'wpc_dev_query',
				'title'  => 'Avg Query: ' . number_format_i18n( $avg * 1000, 2 ) . ' ms',
				'href'   => false
			] );
		}

		if ( defined( 'SAVEQUERIES' ) && SAVEQUERIES && ! empty( $GLOBALS['wpdb']->queries ) ) {
			$qs = $GLOBALS['wpdb']->queries;
			usort( $qs, fn( $a, $b ) => ( $b[1] ?? 0 ) <=> ( $a[1] ?? 0 ) );
			$top = array_slice( $qs, 0, 3 );
			$tip = [];
			foreach ( $top as $i => $q ) {
				$tip[] = sprintf( "#%d (%.2f ms)\n%s", $i + 1, ( $q[1] ?? 0 ) * 1000, $q[0] ?? '' );
			}
			$wp_admin_bar->add_node([
				'id'     => 'wpc_dev_query_top',
				'parent' => 'wpc_dev_query',
				'title'  => 'Top slow queries ?',
				'meta'   => [
					'title' => implode("\n\n",$tip),
					'class' => 'wpc-dev-has-tooltip'
				],
				'href'   => false,
			]);
		}


		if ( ! empty( $body_cls ) ) {
			$wp_admin_bar->add_node( [
				'id'     => 'wpc_dev_body',
				'parent' => 'wpc_dev_info',
				'title'  => 'Body Classes (' . count( $body_cls ) . ')',
				'href'   => false
			] );

			$wp_admin_bar->add_node( [
				'id'     => 'wpc_dev_body_classes',
				'parent' => 'wpc_dev_body',
				'title'  => implode( ' ', $body_cls ),
				'href'   => false
			] );
		}

		$scripts = wp_scripts();

		$wp_admin_bar->add_node( [
			'id'     => 'wpc_dev_js',
			'parent' => 'wpc_dev_info',
			'title'  => 'JS (' . count( $scripts->queue ) . ')',
			'href'   => false
		] );

		$wp_admin_bar->add_node( [
			'id'     => 'wpc_dev_js_id',
			'parent' => 'wpc_dev_js',
			'title'  => implode( ', ', (array) $scripts->queue ),
			'href'   => false
		] );


		$styles      = wp_styles();
		$style_queue = array_diff( (array) $styles->queue, [ 'wpcoder-debug-bar' ] );

		$wp_admin_bar->add_node( [
			'id'     => 'wpc_dev_css',
			'parent' => 'wpc_dev_info',
			'title'  => 'CSS (' . count( $style_queue ) . ')',
			'href'   => false
		] );

		$wp_admin_bar->add_node( [
			'id'     => 'wpc_dev_css_id',
			'parent' => 'wpc_dev_css',
			'title'  => implode( ', ', (array) $style_queue ),
			'href'   => false
		] );

		$wordpress_info = $this->get_wp_info();

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_wordpress',
			'parent' => 'wpc_dev_info',
			'title'  => __( 'WP Environment', 'wpcoderpro' ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_wp_version',
			'parent' => 'wpc_dev_wordpress',
			'title'  => sprintf( __( 'WP Version', 'wpcoderpro' ) . ': %s', $wordpress_info['wp_version'] ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_wp_multisite',
			'parent' => 'wpc_dev_wordpress',
			'title'  => sprintf( __( 'WP Multisite', 'wpcoderpro' ) . ': %s', ( $wordpress_info['wp_multisite'] ) ? __( 'enable', 'wpcoderpro' ) : __( 'disable', 'wpcoderpro' ) ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_wp_memory_limit',
			'parent' => 'wpc_dev_wordpress',
			'title'  => sprintf( __( 'WP Memory Limit', 'wpcoderpro' ) . ': %s', $wordpress_info['wp_memory_limit'] ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_wp_debug_mode',
			'parent' => 'wpc_dev_wordpress',
			'title'  => sprintf( __( 'WP Debug Mode', 'wpcoderpro' ) . ': %s', ( $wordpress_info['wp_debug_mode'] ) ? __( 'enable', 'wpcoderpro' ) : __( 'disable', 'wpcoderpro' ) ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_wp_cron',
			'parent' => 'wpc_dev_wordpress',
			'title'  => sprintf( __( 'WP Cron', 'wpcoderpro' ) . ': %s', ( $wordpress_info['wp_cron'] ) ? __( 'enable', 'wpcoderpro' ) : __( 'disable', 'wpcoderpro' ) ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_language',
			'parent' => 'wpc_dev_wordpress',
			'title'  => sprintf( __( 'WP language', 'wpcoderpro' ) . ': %s', $wordpress_info['language'] ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_timezone',
			'parent' => 'wpc_dev_wordpress',
			'title'  => sprintf( __( 'Timezone', 'wpcoderpro' ) . ': %s', $wordpress_info['timezone'] ),
			'href'   => false
		) );
		$wp_admin_bar->add_node( [
			'id'     => 'wpc_dev_times',
			'parent' => 'wpc_dev_wordpress',
			'title'  => 'Local: ' . wp_date( 'Y-m-d H:i:s' ) . ' · UTC: ' . gmdate( 'Y-m-d H:i:s' ),
			'href'   => false
		] );

		$wp_admin_bar->add_node( [
			'id'     => 'wpc_dev_wordpress_cache',
			'parent' => 'wpc_dev_wordpress',
			'title'  => 'Object Cache: ' . ( wp_using_ext_object_cache() ? 'ON (persistent)' : 'OFF' ),
		] );

		$has_dropin = file_exists( WP_CONTENT_DIR . '/object-cache.php' );
		$wp_admin_bar->add_node( [
			'id'     => 'wpc_dev_cache_dropin',
			'parent' => 'wpc_dev_wordpress',
			'title'  => 'Cache drop-in: ' . ( $has_dropin ? 'present' : 'none' ),
			'href'   => false
		] );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_wordpress_environment',
			'parent' => 'wpc_dev_wordpress',
			'title'  => sprintf( __( 'Env', 'wpcoderpro' ) . ': %s', $wordpress_info['environment'] ),
			'href'   => false
		) );


		$get_environment_info = $this->get_environment_info();

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_environment',
			'parent' => 'wpc_dev_info',
			'title'  => __( 'Server Environment', 'wpcoderpro' ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_environment_server_info',
			'parent' => 'wpc_dev_environment',
			'title'  => sprintf( __( 'Server info', 'wpcoderpro' ) . ': %s', $get_environment_info['server_info'] ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_environment_php_version',
			'parent' => 'wpc_dev_environment',
			'title'  => sprintf( __( 'PHP version', 'wpcoderpro' ) . ': %s', $get_environment_info['php_version'] ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_environment_mysql_version',
			'parent' => 'wpc_dev_environment',
			'title'  => sprintf( __( 'MySQL version', 'wpcoderpro' ) . ': %s', $get_environment_info['mysql_version'] ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_db_prefix',
			'parent' => 'wpc_dev_environment',
			'title'  => sprintf( __( 'DB Prefix', 'wpcoderpro' ) . ': %s', $get_environment_info['db_prefix'] ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_db_charset',
			'parent' => 'wpc_dev_environment',
			'title'  => sprintf( __( 'DB Charset/Collate', 'wpcoderpro' ) . ': %s', $get_environment_info['db_charset'] ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_environment_php_post_max_size',
			'parent' => 'wpc_dev_environment',
			'title'  => sprintf( __( 'PHP Post Max Size', 'wpcoderpro' ) . ': %s', $get_environment_info['php_post_max_size'] ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_environment_php_max_execution_time',
			'parent' => 'wpc_dev_environment',
			'title'  => sprintf( __( 'PHP Time Limit', 'wpcoderpro' ) . ': %s' . __( 'sec', 'wpcoderpro' ), $get_environment_info['php_max_execution_time'] ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_environment_php_max_input_vars',
			'parent' => 'wpc_dev_environment',
			'title'  => sprintf( __( 'PHP Max Input Vars', 'wpcoderpro' ) . ': %s', $get_environment_info['php_max_input_vars'] ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_environment_max_upload_size',
			'parent' => 'wpc_dev_environment',
			'title'  => sprintf( __( 'Max Upload Size', 'wpcoderpro' ) . ': %s', $get_environment_info['max_upload_size'] ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_environment_gzip_enabled',
			'parent' => 'wpc_dev_environment',
			'title'  => sprintf( __( 'GZip', 'wpcoderpro' ) . ': %s', ( $get_environment_info['gzip_enabled'] == '1' ) ? __( 'enable', 'wpcoderpro' ) : __( 'disable', 'wpcoderpro' ) ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_environment_mbstring_enabled',
			'parent' => 'wpc_dev_environment',
			'title'  => sprintf( __( 'Multibyte String', 'wpcoderpro' ) . ': %s', ( $get_environment_info['mbstring_enabled'] == '1' ) ? __( 'enable', 'wpcoderpro' ) : __( 'disable', 'wpcoderpro' ) ),
			'href'   => false
		) );

		$wp_admin_bar->add_menu( array(
			'id'     => 'wpc_dev_environment_ssl_enabled',
			'parent' => 'wpc_dev_environment',
			'title'  => sprintf( __( 'SSL', 'wpcoderpro' ) . ': %s', ( $get_environment_info['ssl_enabled'] == '1' ) ? __( 'enable', 'wpcoderpro' ) : __( 'disable', 'wpcoderpro' ) ),
			'href'   => false
		) );

		if(is_singular() || is_tax() || is_category() || is_tag() ) {

			$shortcodes_content = $this->get_current_content_for_shortcode_scan();
			$shortcodes_list    = $this->collect_shortcodes_detailed( $shortcodes_content );

			$wp_admin_bar->add_node( [
				'id'     => 'wpc_dev_shortcodes_full',
				'parent' => 'wpc_dev_info',
				'title'  => 'Shortcodes (' . count( $shortcodes_list ) . ')',
				'href'   => false,
			] );

			$wp_admin_bar->add_node( [
				'id'     => 'wpc_dev_shortcodes_list',
				'parent' => 'wpc_dev_shortcodes_full',
				'title'  => $shortcodes_list ? implode( ", ", array_map( static function ( $it ) {
					return esc_html( $it['full'] );
				}, $shortcodes_list ) ) : __( 'None found', 'wpcoderpro' ),
				'href'   => false
			] );
		}

	}

	private function db_stats(): array {
		global $wpdb;
		if ( ! defined( 'SAVEQUERIES' ) || ! SAVEQUERIES || empty( $wpdb->queries ) ) {
			return [ 'count' => null, 'time' => null ];
		}
		// $wpdb->queries: [ [ sql, elapsed_time, callstack, start_time? ], ... ]
		$count = count( $wpdb->queries );
		$time  = 0.0;
		foreach ( $wpdb->queries as $q ) {
			// $q[1] is seconds as float
			$time += isset( $q[1] ) ? (float) $q[1] : 0.0;
		}

		return [ 'count' => $count, 'time' => $time ]; // time in seconds
	}

	private function query_flags(): string {
		$flags = [];
		// Order matters: more specific first
		if ( is_front_page() ) {
			$flags[] = 'front_page';
		}
		if ( is_home() ) {
			$flags[] = 'home';
		}
		if ( is_singular() ) {
			$flags[] = 'singular';
		}
		if ( is_page() ) {
			$flags[] = 'page';
		}
		if ( is_single() ) {
			$flags[] = 'single';
		}
		if ( is_attachment() ) {
			$flags[] = 'attachment';
		}
		if ( is_archive() ) {
			$flags[] = 'archive';
		}
		if ( is_category() ) {
			$flags[] = 'category';
		}
		if ( is_tag() ) {
			$flags[] = 'tag';
		}
		if ( is_tax() ) {
			$flags[] = 'tax';
		}
		if ( is_author() ) {
			$flags[] = 'author';
		}
		if ( is_date() ) {
			$flags[] = 'date';
		}
		if ( is_search() ) {
			$flags[] = 'search';
		}
		if ( is_404() ) {
			$flags[] = '404';
		}
		if ( is_paged() ) {
			$flags[] = 'paged';
		}

		return implode( ' · ', $flags );
	}

	private function current_object_info(): array {
		$lines = [];

		if ( is_singular() ) {
			$post_id = get_the_ID();
			$type    = get_post_type( $post_id );
			$slug    = $post_id ? get_post_field( 'post_name', $post_id ) : '';
			$lines[] = 'Post ID: ' . (int) $post_id;
			$lines[] = 'Post Type: ' . (string) $type;
			$lines[] = 'Slug: ' . (string) $slug;

			return $lines;
		}

		if ( is_tax() || is_category() || is_tag() ) {
			$term = get_queried_object();
			if ( $term && ! is_wp_error( $term ) ) {
				$lines[] = 'Taxonomy: ' . (string) $term->taxonomy;
				$lines[] = 'Term ID: ' . (int) $term->term_id;
				$lines[] = 'Term Slug: ' . (string) $term->slug;

				return $lines;
			}
		}

		if ( is_author() ) {
			$user = get_queried_object();
			if ( $user && ! is_wp_error( $user ) ) {
				$lines[] = 'Author ID: ' . (int) $user->ID;
				$lines[] = 'Login: ' . (string) $user->user_login;

				return $lines;
			}
		}

		if ( is_search() ) {
			$lines[] = 'Search: ' . (string) get_search_query();

			return $lines;
		}

		// Fallbacks
		if ( is_front_page() ) {
			$lines[] = 'Front Page';

			return $lines;
		}
		if ( is_home() ) {
			$lines[] = 'Blog Home';

			return $lines;
		}

		// Generic queried object (archives without specific object)
		$obj = get_queried_object();
		if ( $obj && ! is_wp_error( $obj ) ) {
			$lines[] = 'Object: ' . get_class( $obj );
		}

		return $lines ?: [ 'No specific object' ];
	}

	private function get_environment_info(): array {

		global $wpdb;

		return array(
			'server_info'            => $_SERVER['SERVER_SOFTWARE'],
			'php_version'            => phpversion(),
			'php_post_max_size'      => $this->convert( $this->let_to_num( ini_get( 'post_max_size' ) ) ),
			'php_max_execution_time' => ini_get( 'max_execution_time' ),
			'php_max_input_vars'     => ini_get( 'max_input_vars' ),
			'max_upload_size'        => size_format( wp_max_upload_size() ),
			'gzip_enabled'           => is_callable( 'gzopen' ),
			'mbstring_enabled'       => extension_loaded( 'mbstring' ),
			'ssl_enabled'            => ( isset( $_SERVER['HTTPS'] ) && strtolower( $_SERVER['HTTPS'] ) === 'on' ) ? 1 : 0,
			'mysql_version'          => ( ! empty( $wpdb->is_mysql ) ? $wpdb->db_version() : '' ),
			'db_prefix'              => $wpdb->prefix,
			'db_charset'             => DB_CHARSET . ' / ' . ( DB_COLLATE ?: 'default' ),
		);

	}

	// Returns structured WP info (human-readable + safe fallbacks)
	private function get_wp_info(): array {
		// Use core helpers instead of custom convert/let_to_num
		$to_bytes = static function ( string $hr ) {
			return function_exists( 'wp_convert_hr_to_bytes' ) ? wp_convert_hr_to_bytes( $hr ) : (int) $hr;
		};

		// Memory limits (constants may be undefined in edge envs)
		$wp_mem_limit_str = defined( 'WP_MEMORY_LIMIT' ) ? WP_MEMORY_LIMIT : ini_get( 'memory_limit' );
		$wp_mem_limit_b   = $to_bytes( (string) $wp_mem_limit_str );

		$wp_mem_max_str = defined( 'WP_MAX_MEMORY_LIMIT' ) ? WP_MAX_MEMORY_LIMIT : $wp_mem_limit_str;
		$wp_mem_max_b   = $to_bytes( (string) $wp_mem_max_str );

		// Timezone name via WP API (handles timezone_string/gmt_offset)
		$tz = function_exists( 'wp_timezone' ) ? wp_timezone()->getName() : ( get_option( 'timezone_string' ) ?: 'UTC' );

		return [
			// Core
			'wp_version'        => get_bloginfo( 'version' ),
			'wp_multisite'      => is_multisite(),

			// Memory (both raw bytes and human readable)
			'wp_memory_limit'   => size_format( $wp_mem_limit_b ),
			'wp_memory_limit_b' => $wp_mem_limit_b,
			'wp_max_memory'     => size_format( $wp_mem_max_b ),
			'wp_max_memory_b'   => $wp_mem_max_b,

			// Flags
			'wp_debug_mode'     => (int) ( defined( 'WP_DEBUG' ) && WP_DEBUG ),
			'wp_cron'           => (int) ( ! defined( 'DISABLE_WP_CRON' ) || ! DISABLE_WP_CRON ),

			// I18n / Time
			'language'          => get_locale(),
			'timezone'          => $tz,
			'local_time'        => function_exists( 'wp_date' ) ? wp_date( 'Y-m-d H:i:s' ) : date( 'Y-m-d H:i:s' ),
			'utc_time'          => gmdate( 'Y-m-d H:i:s' ),

			// Env type (WP 5.5+)
			'environment'       => function_exists( 'wp_get_environment_type' ) ? wp_get_environment_type() : 'production',
		];
	}

	private function get_timezone(): string {
		$tzstring = get_option( 'timezone_string' );

		// Якщо в адмінці обрано місто → напр. Europe/Kiev
		if ( ! empty( $tzstring ) ) {
			return $tzstring;
		}

		// Якщо місто не задано → будуємо з gmt_offset
		$offset = (float) get_option( 'gmt_offset' );
		if ( 0 === $offset ) {
			return 'UTC';
		}

		$hours   = (int) $offset;
		$minutes = abs( ( $offset - $hours ) * 60 );

		return sprintf( 'UTC%+03d:%02d', $hours, $minutes );
	}

	private function convert( $size ): string {

		$unit = array( 'B', 'KB', 'MB', 'GB', 'TB', 'PB' );

		return @round( $size / pow( 1024, ( $i = floor( log( $size, 1024 ) ) ) ), 2 ) . ' ' . $unit[ $i ];

	}

	private function let_to_num( $size ) {

		$l   = substr( $size, - 1 );
		$ret = substr( $size, 0, - 1 );

		switch ( strtoupper( $l ) ) {
			case 'P':
				$ret *= 1024;
			case 'T':
				$ret *= 1024;
			case 'G':
				$ret *= 1024;
			case 'M':
				$ret *= 1024;
			case 'K':
				$ret *= 1024;
		}

		return $ret;

	}

	// Find shortcodes in a given string. Returns ['found'=>[tag=>count], 'unknown'=>[tag=>count]]
	private function find_shortcodes_in_string(string $content): array {
		global $wpc_shortcode_tags;
		$result  = ['found' => [], 'unknown' => []];
		if ($content === '') return $result;

		$pattern = get_shortcode_regex();
		if ( preg_match_all( '/'.$pattern.'/s', $content, $matches, PREG_SET_ORDER ) ) {
			foreach ( $matches as $m ) {
				$tag = isset($m[2]) ? strtolower($m[2]) : '';
				if ( $tag === '' ) continue;

				// count found
				$result['found'][$tag] = ($result['found'][$tag] ?? 0) + 1;

				// mark unknown if not registered
				if ( empty($wpc_shortcode_tags[$tag]) ) {
					$result['unknown'][$tag] = ($result['unknown'][$tag] ?? 0) + 1;
				}
			}
		}
		// sort by count desc
		arsort($result['found']);
		arsort($result['unknown']);
		return $result;
	}

	// Collect page content to scan for shortcodes
	private function get_current_content_for_shortcode_scan(): string {
		if ( is_singular() ) {
			$pid = get_the_ID();
			return $pid ? (string) get_post_field('post_content', $pid) : '';
		}
		if ( is_tax() || is_category() || is_tag() ) {
			$term = get_queried_object();
			return ($term && !is_wp_error($term) && !empty($term->description)) ? (string) $term->description : '';
		}
		return '';
	}

	// Scan content for shortcodes and return detailed list
	private function collect_shortcodes_detailed(string $content): array {
		$out = []; // each item: ['tag'=>string,'attrs'=>array,'full'=>string]
		if ($content === '') return $out;

		$regex = get_shortcode_regex();
		if ( preg_match_all('/'.$regex.'/s', $content, $m, PREG_SET_ORDER) ) {
			foreach ($m as $match) {
				// $match[0] = full match, $match[2] = tag, $match[3] = attributes string, $match[5] = inner content (if any)
				$tag   = strtolower($match[2] ?? '');
				$full  = $match[0] ?? '';
				$attrS = isset($match[3]) ? trim($match[3]) : '';
				$attrs = shortcode_parse_atts($attrS) ?: [];

				$out[] = [
					'tag'   => $tag,
					'attrs' => $attrs,
					'full'  => $full,     // original text as in content
				];
			}
		}
		return $out;
	}

}