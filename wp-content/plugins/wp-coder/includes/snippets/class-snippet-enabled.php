<?php

defined( 'ABSPATH' ) || exit;

class WPCoder_Lite_Enabled_Snippets {
	/**
	 * @var false|mixed|null
	 */
	private $options;

	public function __construct() {
		$options       = get_option( '_wp_coder_snippets', [] );
		$this->options = $options;

		if ( array_key_exists( 'enable_duplication', $options ) ) {
			add_filter( 'post_row_actions', [ $this, 'add_duplicate_link' ], 10, 2 );
			add_filter( 'page_row_actions', [ $this, 'add_duplicate_link' ], 10, 2 );
			add_action( 'admin_action_wpcoder_duplicate_post', [ $this, 'duplicate_post' ] );
			add_action( 'admin_notices', [ $this, 'duplication_admin_notice' ] );
		}

		if ( array_key_exists( 'enable_svg_upload', $options ) ) {
			add_filter( 'upload_mimes', [ $this, 'add_svg_mime' ] );
			add_filter( 'wp_check_filetype_and_ext', [ $this, 'confirm_file_type_is_svg' ], 10, 5 );
		}

		if ( array_key_exists( 'enable_pages_excerpt', $options ) ) {
			add_action( 'after_setup_theme', static function () {
				add_post_type_support( 'page', 'excerpt' );
			} );
		}

		if ( array_key_exists( 'enable_shortcode_in_text_widgets', $options ) ) {
			add_filter( 'widget_text', 'do_shortcode' );
		}

		if ( array_key_exists( 'enable_featured_img_rss_feeds', $options ) ) {
			add_filter( 'the_excerpt_rss', [ $this, 'rss_post_thumbnail' ] );
			add_filter( 'the_content_feed', [ $this, 'rss_post_thumbnail' ] );
		}

		if ( array_key_exists( 'enable_page_slug_to_body_class', $options ) ) {
			add_filter( 'body_class', [ $this, 'add_slug_body_class' ] );
		}

		if ( array_key_exists( 'enable_lowercase_filenames_for_uploads', $options ) ) {
			add_filter( 'sanitize_file_name', 'mb_strtolower' );
		}

		if ( array_key_exists( 'enable_default_alt_to_avatar', $options ) ) {
			add_filter( 'pre_get_avatar_data', [ $this, 'default_alt_to_avatar' ] );
		}

		if ( array_key_exists( 'enable_force_external_links_new_tab', $options ) ) {
			add_filter( 'the_content', [ $this, 'force_external_links_new_tab' ] );
		}

		if ( array_key_exists( 'enable_redirect_404_to_home', $options ) ) {
			add_action( 'template_redirect', static function () {
				if ( is_404() ) {
					wp_redirect( home_url(), 301 );
					exit;
				}
			} );
		}

		if ( array_key_exists( 'enable_limit_comment_length', $options ) ) {
			add_filter( 'preprocess_comment', [ $this, 'limit_comment_length' ] );
		}

        if ( array_key_exists( 'enable_image_lazy_load', $options ) ) {
            add_filter( 'wp_content_img_tag', static function( $html, $context, $id ) {
                $has_loading  = strpos( $html, ' loading=' ) !== false;
                $has_decoding = strpos( $html, ' decoding=' ) !== false;
                $has_high_priority = strpos( $html, 'fetchpriority="high"' ) !== false
                        || strpos( $html, "fetchpriority='high'" ) !== false;

                // If both attributes already exist, return unchanged
                if ( $has_loading && $has_decoding ) {
                    return $html;
                }

                // Build attributes to add
                $attributes = '';
                // Don't add lazy loading to high priority images (LCP images)
                if ( ! $has_loading && ! $has_high_priority ) {
                    $attributes .= ' loading="lazy"';
                }
                if ( ! $has_decoding ) {
                    $attributes .= ' decoding="async"';
                }

                if ( ! empty( $attributes ) ) {
                    $html = preg_replace( '/<img\b/i', '<img' . $attributes, $html, 1 );
                }

                return $html;
            }, 10, 3 );
        }

		remove_filter( 'comment_text', 'make_clickable', 9 );
		add_filter( 'pre_comment_content', 'wp_strip_all_tags' );

	}

	public function limit_comment_length( $commentdata ) {
		$max_length = ! empty( $this->options['limit_comment_length'] ) ? absint( $this->options['limit_comment_length'] ) : 300;
		$mess       = ! empty( $this->options['limit_comment_mess'] ) ? esc_attr( $this->options['limit_comment_mess'] ) : 'Your comment is too long. Max 300 characters.';
		if ( strlen( $commentdata['comment_content'] ) > $max_length ) {
			wp_die( esc_attr( $mess ) );
		}

		return $commentdata;
	}

    public function force_external_links_new_tab( $content ) {
        $site_host = wp_parse_url( home_url(), PHP_URL_HOST );

        return preg_replace_callback(
                '#<a\s[^>]*href=["\'](https?:\/\/[^"\']+)["\'][^>]*>#i',
                function ( $matches ) use ( $site_host ) {
                    $href      = $matches[1];
                    $link_host = wp_parse_url( $href, PHP_URL_HOST );

                    if ( $link_host && $link_host !== $site_host ) {
                        $tag = $matches[0];

                        if ( stripos( $tag, 'target=' ) === false ) {
                            $tag = str_ireplace( '<a', '<a target="_blank"', $tag );
                        }

                        if ( stripos( $tag, 'rel=' ) === false ) {
                            $tag = str_ireplace( '<a', '<a rel="noopener noreferrer nofollow"', $tag );
                        }

                        return $tag;
                    }

                    return $matches[0];
                },
                $content
        );
    }

	public function default_alt_to_avatar( $atts ) {
		if ( empty( $atts['alt'] ) ) {
			if ( have_comments() ) {
				$author = get_comment_author();
			} else {
				$author = get_the_author_meta( 'display_name' );
			}
			$alt         = sprintf( 'Avatar for %s', $author );
			$atts['alt'] = $alt;
		}

		return $atts;
	}

	public function add_slug_body_class( $classes ) {
		global $post;
		if ( isset( $post ) ) {
			$classes[] = $post->post_type . '-' . $post->post_name;
		}

		return $classes;
	}

	public function rss_post_thumbnail( $content ) {
		global $post;
		if ( has_post_thumbnail( $post->ID ) ) {
			$content = '<p>' . get_the_post_thumbnail( $post->ID ) . '</p>' . $content;
		}

		return $content;
	}

	public function add_duplicate_link( $actions, $post ) {
		if ( ! current_user_can( 'edit_posts' ) ) {
			return $actions;
		}

		$url = wp_nonce_url(
			add_query_arg(
				array(
					'action' => 'wpcoder_duplicate_post',
					'post'   => $post->ID,
				),
				'admin.php'
			),
			basename( __FILE__ ),
			'duplicate_nonce'
		);

		$actions['duplicate'] = '<a href="' . esc_url( $url ) . '" title="Duplicate this as draft" rel="permalink">Duplicate</a>';

		return $actions;
	}

	public function duplicate_post(): void {
		// check if post ID has been provided and action
		if ( empty( $_GET['post'] ) ) {
			wp_die( 'No post to duplicate has been provided!' );
		}

		// Nonce verification
		if ( ! isset( $_GET['duplicate_nonce'] ) || ! wp_verify_nonce( $_GET['duplicate_nonce'],
				basename( __FILE__ ) ) ) {
			return;
		}

		// Get the original post id
		$post_id = absint( $_GET['post'] );

		// And all the original post data then
		$post = get_post( $post_id );

		/*
		 * if you don't want current user to be the new post author,
		 * then change next couple of lines to this: $new_post_author = $post->post_author;
		 */
		$current_user    = wp_get_current_user();
		$new_post_author = $current_user->ID;

		// if post data exists (I am sure it is, but just in a case), create the post duplicate
		if ( $post ) {
			// new post data array
			$args = array(
				'comment_status' => $post->comment_status,
				'ping_status'    => $post->ping_status,
				'post_author'    => $new_post_author,
				'post_content'   => $post->post_content,
				'post_excerpt'   => $post->post_excerpt,
				'post_name'      => $post->post_name,
				'post_parent'    => $post->post_parent,
				'post_password'  => $post->post_password,
				'post_status'    => 'draft',
				'post_title'     => $post->post_title,
				'post_type'      => $post->post_type,
				'to_ping'        => $post->to_ping,
				'menu_order'     => $post->menu_order
			);

			// insert the post by wp_insert_post() function
			$new_post_id = wp_insert_post( $args );

			/*
			 * get all current post terms ad set them to the new post draft
			 */
			$taxonomies = get_object_taxonomies( get_post_type( $post ) ); // returns array of taxonomy names for post type, ex array("category", "post_tag");
			if ( $taxonomies ) {
				foreach ( $taxonomies as $taxonomy ) {
					$post_terms = wp_get_object_terms( $post_id, $taxonomy, array( 'fields' => 'slugs' ) );
					wp_set_object_terms( $new_post_id, $post_terms, $taxonomy, false );
				}
			}

			// duplicate all post meta
			$post_meta = get_post_meta( $post_id );
			if ( $post_meta ) {
				foreach ( $post_meta as $meta_key => $meta_values ) {
					if ( '_wp_old_slug' == $meta_key ) { // do nothing for this meta key
						continue;
					}

					foreach ( $meta_values as $meta_value ) {
						add_post_meta( $new_post_id, $meta_key, $meta_value );
					}
				}
			}

			// or we can redirect to all posts with a message
			wp_safe_redirect(
				add_query_arg(
					array(
						'post_type' => ( 'post' !== get_post_type( $post ) ? get_post_type( $post ) : false ),
						'saved'     => 'post_duplication_created' // just a custom slug here
					),
					admin_url( 'edit.php' )
				)
			);
			exit;
		}

		wp_die( 'Post creation failed, could not find original post.' );
	}

	public function duplication_admin_notice(): void {
		// Get the current screen
		$screen = get_current_screen();

		if ( 'edit' !== $screen->base ) {
			return;
		}

		//Checks if settings updated
		if ( isset( $_GET['saved'] ) && 'post_duplication_created' === $_GET['saved'] ) {
			echo '<div class="notice notice-success is-dismissible"><p>Post copy created.</p></div>';
		}
	}

	public function add_svg_mime( $upload_mimes ) {
		if ( ! current_user_can( 'administrator' ) ) {
			return $upload_mimes;
		}

		$upload_mimes['svg']  = 'image/svg+xml';
		$upload_mimes['svgz'] = 'image/svg+xml';

		return $upload_mimes;
	}

	public function confirm_file_type_is_svg( $wp_check_filetype_and_ext, $file, $filename, $mimes, $real_mime ) {
		if ( ! $wp_check_filetype_and_ext['type'] ) {
			$check_filetype  = wp_check_filetype( $filename, $mimes );
			$ext             = $check_filetype['ext'];
			$type            = $check_filetype['type'];
			$proper_filename = $filename;

			if ( $type && 0 === strpos( $type, 'image/' ) && 'svg' !== $ext ) {
				$ext  = false;
				$type = false;
			}

			$wp_check_filetype_and_ext = compact( 'ext', 'type', 'proper_filename' );
		}

		return $wp_check_filetype_and_ext;
	}
}

new WPCoder_Lite_Enabled_Snippets;