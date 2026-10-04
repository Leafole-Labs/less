<?php

namespace WPCoder\Dashboard;

defined( 'ABSPATH' ) || exit;

use WPCoder\WPCoder;

class DebugLog {

	public static function init(): void {
		self::send();
		$log_file = WP_CONTENT_DIR . '/debug.log';
		$enabled  = (bool) get_option('_wpcoder_enable_debug_log');

		if ( ! $enabled ) {
			$content = 'Debug log is disabled.'; // Feature turned off
		} elseif ( ! file_exists($log_file) || ! is_readable($log_file) ) {
			$content = 'No debug log entries found.'; // No file (as you wanted: empty output)
		} else {
			clearstatcache(true, $log_file); // Ensure fresh file stats
			if ( (int) filesize($log_file) === 0 ) {
				$content = 'No debug log entries found.'; // Empty file
			} else {
				$data = file_get_contents($log_file); // Read file
				$content = ($data === false) ? 'Failed to read debug.log.' : $data;
			}
		}

		?>


        <form method="post">
            <div class="wowp-settings">

                <div class="wowp-settings__page">


                    <div class="wowp-settings__page-sidebar">

                        <div class="wowp-field has-checkbox is-reverse">
                                <span class="label">
                                    <?php esc_html_e( 'Enable Debug Log', 'wp-coder' ); ?>
                                </span>
                            <label class="switch">
                                <input type="checkbox" value="1" name="wp_coder_enable_debug_log"
                                       id="wpcoder-debug-enable"<?php checked( $enabled ); ?>>
                                <span class="slider"></span>
                            </label>
                        </div>

						<?php submit_button( __( 'Save', 'wp-coder' ), 'wowp-button button button-dark', 'submit', false ); ?>
						<?php submit_button( __( 'Clear Log ', 'wp-coder' ), 'wowp-button button button-red', 'clear-log', false ); ?>


                    </div>

                    <div class="wowp-settings__page-content wowp-field">
                        <textarea name="wp_coder_debug_log" cols="40" rows="5"
                                  readonly><?php echo esc_textarea( $content ); ?></textarea>
                    </div>


                </div>

				<?php wp_nonce_field( WPCoder::PREFIX . '_debug_action', WPCoder::PREFIX . '_debug_name' ); ?>
            </div>
        </form>


		<?php
	}


	private static function send(): void {
		if ( ! self::verify() ) {
			return;
		}
		$checked = ! empty( $_POST['wp_coder_enable_debug_log'] ) ? 1 : 0;
		$log_file = WP_CONTENT_DIR . '/debug.log';

		if ( isset( $_POST['submit'] ) ) {
			update_option( '_wpcoder_enable_debug_log', $checked );
		}

        if ( isset( $_POST['clear-log'] ) && !empty($checked) && file_exists($log_file)) {
	        file_put_contents( $log_file, '' );
        }
	}

	private static function verify(): bool {
		$nonce_name   = WPCoder::PREFIX . '_debug_name';
		$nonce_action = WPCoder::PREFIX . '_debug_action';
		if ( empty( $_POST[ $nonce_name ] ) ) {
			return false;
		}

		return wp_verify_nonce( $_POST[ $nonce_name ], $nonce_action ) && WPCoder::user_can_manage();
	}
}
