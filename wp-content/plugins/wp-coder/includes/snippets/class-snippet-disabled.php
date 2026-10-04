<?php

defined( 'ABSPATH' ) || exit;

class WPCoder_Lite_Disabled_Snippets {

	/**
	 * @var false|mixed|null
	 */
	private $options;

	public function __construct() {
		$options = get_option( '_wp_coder_snippets', [] );
		$this->options = $options;

		if ( array_key_exists( 'disable_gutenberg', $options ) ) {
			add_filter( 'gutenberg_can_edit_post', '__return_false', 5 );
			add_filter( 'use_block_editor_for_post', '__return_false', 5 );
		}

		if ( array_key_exists( 'disable_gutenberg_css', $options ) ) {
			add_action( 'wp_enqueue_scripts', [ $this, 'remove_wp_block_library_css' ] );
		}


		if ( array_key_exists( 'disable_widget_blocks', $options ) ) {
			// Disables the block editor from managing widgets in the Gutenberg plugin.
			add_filter( 'gutenberg_use_widgets_block_editor', '__return_false' );
			// Disables the block editor from managing widgets.
			add_filter( 'use_widgets_block_editor', '__return_false' );
		}

		if ( array_key_exists( 'remove_wp_version', $options ) ) {
			add_filter( 'the_generator', '__return_empty_string' );
		}

		if ( array_key_exists( 'disable_XML_RPC', $options ) ) {
			add_filter( 'xmlrpc_enabled', '__return_false' );
		}

		if ( array_key_exists( 'disable_admin_bar', $options ) ) {
			add_filter( 'show_admin_bar', [ $this, 'disable_admin_bar' ] );
		}

		if ( array_key_exists( 'disable_automatic_updates', $options ) ) {
			// Disable core auto-updates
			add_filter( 'auto_update_core', '__return_false' );
			// Disable auto-updates for plugins.
			add_filter( 'auto_update_plugin', '__return_false' );
			// Disable auto-updates for themes.
			add_filter( 'auto_update_theme', '__return_false' );
		}

		if ( array_key_exists( 'disable_automatic_updates_emails', $options ) ) {
			// Disable auto-update emails.
			add_filter( 'auto_core_update_send_email', '__return_false' );
			// Disable auto-update emails for plugins.
			add_filter( 'auto_plugin_update_send_email', '__return_false' );
			// Disable auto-update emails for themes.
			add_filter( 'auto_theme_update_send_email', '__return_false' );
		}

		if ( array_key_exists( 'disable_attachment_pages', $options ) ) {
			add_action( 'template_redirect', [ $this, 'redirect_attachment_pages' ], 1 );
		}

		if ( array_key_exists( 'disable_rest_api', $options ) ) {
			add_filter( 'rest_authentication_errors', [ $this, 'disable_rest_api' ] );
		}

		if ( array_key_exists( 'disable_comments', $options ) ) {
			add_action( 'admin_init', [ $this, 'disable_comments' ] );
			// Close comments on the front-end
			add_filter( 'comments_open', '__return_false', 20, 2 );
			add_filter( 'pings_open', '__return_false', 20, 2 );

			// Hide existing comments
			add_filter( 'comments_array', '__return_empty_array', 10, 2 );
			// Remove comments page in menu
			add_action( 'admin_menu', static function () {
				remove_menu_page( 'edit-comments.php' );
			} );
			// Remove comments links from admin bar
			add_action( 'admin_bar_menu', static function () {
				remove_action( 'admin_bar_menu', 'wp_admin_bar_comments_menu', 60 );
			}, 0 );
		}

		if ( array_key_exists( 'disable_automatic_trash', $options ) ) {
			add_action( 'init', static function () {
				remove_action( 'wp_scheduled_delete', 'wp_scheduled_delete' );
			} );
		}

		if ( array_key_exists( 'disable_emojis', $options ) ) {
			add_action( 'init', [ $this, 'disable_emojis' ] );
		}

		if ( array_key_exists( 'disable_screen_options', $options ) ) {
			add_filter( 'screen_options_show_screen', '__return_false' );
		}

		if ( array_key_exists( 'disable_welcome_panel', $options ) ) {
			add_action( 'admin_init', static function () {
				remove_action( 'welcome_panel', 'wp_welcome_panel' );
			}
			);
		}

		if ( array_key_exists( 'disable_rss_feeds', $options ) ) {
			add_action( 'do_feed_rdf', [ $this, 'disable_feed' ], 1 );
			add_action( 'do_feed_rss', [ $this, 'disable_feed' ], 1 );
			add_action( 'do_feed_rss2', [ $this, 'disable_feed' ], 1 );
			add_action( 'do_feed_atom', [ $this, 'disable_feed' ], 1 );
			add_action( 'do_feed_rss2_comments', [ $this, 'disable_feed' ], 1 );
			add_action( 'do_feed_atom_comments', [ $this, 'disable_feed' ], 1 );
			remove_action( 'wp_head', 'feed_links_extra', 3 );
			remove_action( 'wp_head', 'feed_links', 2 );
		}

		if ( array_key_exists( 'disable_search', $options ) ) {
			add_action( 'parse_query', static function ( $query, $error = true ) {
				if ( is_search() && ! is_admin() ) {
					$query->is_search       = false;
					$query->query_vars['s'] = false;
					$query->query['s']      = false;
					if ( true === $error ) {
						$query->is_404 = true;
					}
				}
			}, 15, 2 );
			// Remove the Search Widget.
			add_action( 'widgets_init', static function () {
				unregister_widget( 'WP_Widget_Search' );
			}
			);
			// Remove the search form.
			add_filter( 'get_search_form', '__return_empty_string', 999 );
			// Remove the core search block.
			add_action( 'init', static function () {
				if ( ! function_exists( 'unregister_block_type' ) || ! class_exists( 'WP_Block_Type_Registry' ) ) {
					return;
				}
				$block = 'core/search';
				if ( WP_Block_Type_Registry::get_instance()->is_registered( $block ) ) {
					unregister_block_type( $block );
				}
			} );
			// Remove admin bar menu search box.
			add_action( 'admin_bar_menu', static function ( $wp_admin_bar ) {
				$wp_admin_bar->remove_menu( 'search' );
			}, 11 );
		}

		if ( array_key_exists( 'disable_login_language_dropdown', $options ) ) {
			add_filter( 'login_display_language_dropdown', '__return_false' );
		}

		if ( array_key_exists( 'disable_login_by_email', $options ) ) {
			remove_filter( 'authenticate', 'wp_authenticate_email_password', 20 );
		}

		if ( array_key_exists( 'disable_comment_from_website_url', $options ) ) {
			add_filter( 'comment_form_default_fields', [ $this, 'comment_from_website' ], 150 );
		}

		if ( array_key_exists( 'disable_self_pingbacks', $options ) ) {
			add_action( 'pre_ping', [ $this, 'self_pingbacks' ] );
		}

		if ( array_key_exists( 'disable_wlwmanifest_link', $options ) ) {
			remove_action( 'wp_head', 'wlwmanifest_link' );
		}

		if ( array_key_exists( 'disable_embeds', $options ) ) {
			add_action( 'init', [ $this, 'disable_embeds' ], 9999 );
		}

		if ( array_key_exists( 'disable_lazy_load', $options ) ) {
			add_filter( 'wp_lazy_loading_enabled', '__return_false' );
		}

		if ( array_key_exists( 'disable_wp_shortlink', $options ) ) {
			remove_action( 'wp_head', 'wp_shortlink_wp_head' );
		}

		if ( array_key_exists( 'disable_admin_pass_reset_email', $options ) ) {
			remove_action( 'after_password_reset', 'wp_password_change_notification' );
		}

		if ( array_key_exists( 'disable_trackbacks_pingbacks', $options ) ) {
			add_filter('xmlrpc_methods', static function($methods) {
				unset($methods['pingback.ping']);
				return $methods;
			});
		}

		if ( array_key_exists( 'disable_comments_html', $options ) ) {
			remove_filter('comment_text', 'make_clickable', 9);
			add_filter('pre_comment_content', 'wp_strip_all_tags');
		}

	}

	public function disable_embeds(): void {
		// Remove the REST API endpoint.
		remove_action( 'rest_api_init', 'wp_oembed_register_route' );
		// Turn off oEmbed auto discovery.
		add_filter( 'embed_oembed_discover', '__return_false' );
		// Don't filter oEmbed results.
		remove_filter( 'oembed_dataparse', 'wp_filter_oembed_result', 10 );
		// Remove oEmbed discovery links.
		remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );
		// Remove oEmbed-specific JavaScript from the front-end and back-end.
		remove_action( 'wp_head', 'wp_oembed_add_host_js' );
		add_filter( 'tiny_mce_plugins', static function ( $plugins ) {
			return array_diff( $plugins, array( 'wpembed' ) );
		} );
		// Remove all embeds rewrite rules.
		add_filter( 'rewrite_rules_array', static function ( $rules ) {
			foreach ( $rules as $rule => $rewrite ) {
				if ( false !== strpos( $rewrite, 'embed=true' ) ) {
					unset( $rules[ $rule ] );
				}
			}

			return $rules;
		} );
		// Remove filter of the oEmbed result before any HTTP requests are made.
		remove_filter( 'pre_oembed_result', 'wp_filter_pre_oembed_result', 10 );
	}

	public function self_pingbacks( &$links ): void {

		$home = get_option( 'home' );
		foreach ( $links as $l => $link ) {
			if ( 0 === strpos( $link, $home ) ) {
				unset( $links[ $l ] );
			}
		}
	}

	public function comment_from_website( $fields ) {
		if ( isset( $fields['url'] ) ) {
			unset( $fields['url'] );
		}

		return $fields;
	}

	public function disable_feed(): void {
		wp_die(
			sprintf(
			// Translators: Placeholders for the homepage link.
				esc_html__( 'No feed available, please visit our %1$shomepage%2$s!', 'wp-coder' ),
				' <a href="' . esc_url( home_url( '/' ) ) . '">',
				'</a>'
			)
		);
	}

	public function disable_emojis(): void {
		remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
		remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
		remove_action( 'wp_print_styles', 'print_emoji_styles' );
		remove_action( 'admin_print_styles', 'print_emoji_styles' );
		remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
		remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
		remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );

		add_filter( 'tiny_mce_plugins', function ( $plugins ) {
			if ( is_array( $plugins ) ) {
				return array_diff( $plugins, array( 'wpemoji' ) );
			} else {
				return array();
			}
		} );

		// Remove from dns-prefetch.
		add_filter( 'wp_resource_hints', function ( $urls, $relation_type ) {
			if ( 'dns-prefetch' === $relation_type ) {
				$emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );
				$urls          = array_diff( $urls, array( $emoji_svg_url ) );
			}

			return $urls;
		}, 10, 2 );
	}

	public function remove_wp_block_library_css(): void {
		wp_dequeue_style( 'wp-block-library' );
		wp_dequeue_style( 'wp-block-library-theme' );
	}

	public function disable_comments(): void {
		global $pagenow;

		if ( $pagenow === 'edit-comments.php' ) {
			wp_safe_redirect( admin_url() );
			exit;
		}
		// Remove comments metabox from dashboard
		remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' );
		// Disable support for comments and trackbacks in post types
		foreach ( get_post_types() as $post_type ) {
			if ( post_type_supports( $post_type, 'comments' ) ) {
				remove_post_type_support( $post_type, 'comments' );
				remove_post_type_support( $post_type, 'trackbacks' );
			}
		}
	}

	public function disable_rest_api( $access ): WP_Error {
		return new WP_Error(
			'rest_disabled',
			'The WordPress REST API has been disabled.',
			array(
				'status' => rest_authorization_required_code(),
			)
		);
	}

	public function redirect_attachment_pages(): void {
		global $post;
		if ( ! is_attachment() || ! isset( $post->post_parent ) || ! is_numeric( $post->post_parent ) ) {
			return;
		}
		// Does the attachment have a parent post?
		// If the post is trashed, fallback to redirect to homepage.
		if ( 0 !== $post->post_parent && 'trash' !== get_post_status( $post->post_parent ) ) {
			// Redirect to the attachment parent.
			wp_safe_redirect( get_permalink( $post->post_parent ), 301 );
		} else {
			// For attachment without a parent redirect to homepage.
			wp_safe_redirect( get_bloginfo( 'wpurl' ), 302 );
		}
		exit;
	}

	public function disable_admin_bar( $show_admin_bar ): bool {
		$admin_bar = false;

		$user = wp_get_current_user();

		if ( ! empty( $user->roles ) ) {
			foreach ( $user->roles as $role ) {
				if ( array_key_exists( 'disable_admin_bar_user_' . $role, $this->options ) ) {
					$admin_bar = true;
					break;
				}
			}
		}

		return $admin_bar;
	}


}

new WPCoder_Lite_Disabled_Snippets;