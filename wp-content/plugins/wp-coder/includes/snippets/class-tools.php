<?php

use WPCoder\Dashboard\DBManager;
use WPCoder\Dashboard\FolderManager;
use WPCoder\WPCoder;

defined( 'ABSPATH' ) || exit;

class WPCoder_Lite_Tools {

	/**
	 * @var false|mixed|null
	 */
	private $options;

	public function __construct() {
		$options       = get_option( '_wp_coder_tools', [] );
		$this->options = $options;

		if ( array_key_exists( 'enable_tracking_tool', $options ) ) {
			add_action( 'wp_head', [ $this, 'add_tracking' ] );
		}

		if ( array_key_exists( 'enable_google_adsense', $options ) ) {
			add_action( 'wp_head', array( $this, 'add_adsense_code' ) );
		}

        if ( array_key_exists( 'enable_gtm', $options ) ) {
            add_action( 'wp_head', [ $this, 'add_gtm_head' ], 1 );
            add_action( 'wp_body_open', [ $this, 'add_gtm_body' ], 1 );
        }

		$enabled = (bool) get_option( '_wpcoder_enable_debug_log' );
		if ( $enabled ) {
			add_action( 'plugins_loaded', [ $this, 'debug_log' ] );
			add_action( 'admin_bar_menu', [ $this, 'admin_menu_debug' ], 90 );
		}

		if ( array_key_exists( 'show_page_debug_info', $options ) ) {
			new WPCoder_Page_Info;
		}

		if ( array_key_exists( 'theme_switcher', $options ) ) {
			new WPCoder_Theme_Switcher;
		}

		if ( array_key_exists( 'markdown_editor', $options ) ) {
			new WPCoder_Markdown_Editor($options);
		}

	}

	public function debug_log(): void {
		error_reporting( E_ALL );
		ini_set( 'log_errors', 1 );
		ini_set( 'error_log', WP_CONTENT_DIR . '/debug.log' ); // Log file path
	}

	public function admin_menu_debug( $wp_admin_bar ): void {
		if ( ! WPCoder::user_can_manage() ) {
			return;
		}

		$log_file = WP_CONTENT_DIR . '/debug.log';
		if ( ! file_exists( $log_file ) || filesize( $log_file ) === 0 ) {
			return;
		}

		$wp_admin_bar->add_node( [
			'id'    => 'wpcoder-debug-log-link',
			'title' => '<span class="ab-icon dashicons-admin-tools" aria-hidden="true"></span><span class="ab-label">Debug Log</span>',
			'href'  => admin_url( 'admin.php?page=' . WPCoder::SLUG . '-debug' ),
			'meta'  => [
				'title' => 'View Debug Log', // tooltip
			],
		] );
	}

	public function add_tracking(): void {

		$user = wp_get_current_user();

		if ( ! empty( $user->roles ) ) {
			foreach ( $user->roles as $role ) {
				if ( array_key_exists( 'disable_tracking_tool_user_' . $role, $this->options ) ) {
					return;
				}
			}
		}

		// Google Analytics code
		if ( ! empty( $this->options['tracking_tool_google'] ) ) { ?>
            <script async
                    src="https://www.googletagmanager.com/gtag/js?id=<?php echo esc_attr( $this->options['tracking_tool_google'] ); ?>"></script>
            <script>
                window.dataLayer = window.dataLayer || [];

                function gtag() {
                    dataLayer.push(arguments);
                }

                gtag("js", new Date());
                gtag("config", "<?php echo esc_attr( $this->options['tracking_tool_google'] ); ?>");
            </script>
		<?php }

		// Facebook Pixel code
		if ( ! empty( $this->options['tracking_tool_facebook'] ) ) { ?>
            <script>
                !function (f, b, e, v, n, t, s) {
                    if (f.fbq) return;
                    n = f.fbq = function () {
                        n.callMethod ?
                            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                    };
                    if (!f._fbq) f._fbq = n;
                    n.push = n;
                    n.loaded = !0;
                    n.version = '2.0';
                    n.queue = [];
                    t = b.createElement(e);
                    t.async = !0;
                    t.src = v;
                    s = b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t, s)
                }(window, document, 'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '<?php echo esc_attr( $this->options['tracking_tool_facebook'] ); ?>');
                fbq('track', 'PageView');
            </script>
            <noscript>
                <img height="1" width="1" style="display:none"
                     src="https://www.facebook.com/tr?id=<?php echo esc_attr( $this->options['tracking_tool_facebook'] ); ?>&ev=PageView&noscript=1"/>
            </noscript>
		<?php }

		// Pintrest Pixel code
		if ( ! empty( $this->options['tracking_tool_pintrest'] ) ) { ?>
            <script type="text/javascript">
                !function (e) {
                    if (!window.pintrk) {
                        window.pintrk = function () {
                            window.pintrk.queue.push(Array.prototype.slice.call(arguments))
                        };
                        var n = window.pintrk;
                        n.queue = [], n.version = "3.0";
                        var t = document.createElement("script");
                        t.async = !0, t.src = e;
                        var r = document.getElementsByTagName("script")[0];
                        r.parentNode.insertBefore(t, r)
                    }
                }("https://s.pinimg.com/ct/core.js");
                pintrk('load', '<?php echo esc_attr( $this->options['tracking_tool_pintrest'] ); ?>');
                pintrk('page');
            </script>
            <noscript>
                <img height="1" width="1" style="display:none;" alt=""
                     src="https://ct.pinterest.com/v3/?tid=<?php echo esc_attr( $this->options['tracking_tool_pintrest'] ); ?>&noscript=1"/>
            </noscript>
		<?php }
	}

	public function add_adsense_code(): void {

		if ( empty( $this->options['google_adsense_publisher'] ) ) {
			return;
		}

		$user = wp_get_current_user();

		if ( ! empty( $user->roles ) ) {
			foreach ( $user->roles as $role ) {
				if ( array_key_exists( 'disable_google_adsense_user_' . $role, $this->options ) ) {
					return;
				}
			}
		}

		// phpcs:disable WordPress.WP.EnqueuedResources.NonEnqueuedScript
		echo '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-' . esc_attr( $this->options['google_adsense_publisher'] ) . '" crossorigin="anonymous"></script>';
		// phpcs:enable
	}

    public function add_gtm_head(): void {

        if ( empty( $this->options['gtm_container_id'] ) ) {
            return;
        }

        $user = wp_get_current_user();

        if ( ! empty( $user->roles ) ) {
            foreach ( $user->roles as $role ) {
                if ( array_key_exists( 'disable_gtm_user_' . $role, $this->options ) ) {
                    return;
                }
            }
        }

        $container_id = esc_attr( $this->options['gtm_container_id'] );
        ?>
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','<?php echo $container_id; ?>');</script>
        <!-- End Google Tag Manager -->
        <?php
    }

    public function add_gtm_body(): void {

        if ( empty( $this->options['gtm_container_id'] ) ) {
            return;
        }

        $user = wp_get_current_user();

        if ( ! empty( $user->roles ) ) {
            foreach ( $user->roles as $role ) {
                if ( array_key_exists( 'disable_gtm_user_' . $role, $this->options ) ) {
                    return;
                }
            }
        }

        $container_id = esc_attr( $this->options['gtm_container_id'] );
        ?>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo $container_id; ?>"
                          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        <?php
    }

}

new WPCoder_Lite_Tools;