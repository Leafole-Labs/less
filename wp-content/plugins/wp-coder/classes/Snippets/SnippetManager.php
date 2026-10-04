<?php

namespace WPCoder\Snippets;

use WPCoder\Dashboard\Field;
use WPCoder\Dashboard\FieldHelper;
use WPCoder\WPCoder;

class SnippetManager {

	public static function init(): void {
		self::send();

		$options = get_option( '_wp_coder_snippets', [] );

		$snippets = [
			'content'      => __( 'Editor & Content', 'wp-coder' ),
			'admin'        => __( 'Admin Interface Tweaks', 'wp-coder' ),
			'login'        => __( 'Login & User Access', 'wp-coder' ),
			'media'        => __( 'Media & Embeds', 'wp-coder' ),
			'core'         => __( 'Core Functionality', 'wp-coder' ),
			'comments'     => __( 'Comments & Feedback', 'wp-coder' ),
			'optimization' => __( ' Cleanup & Optimization', 'wp-coder' ),
		];

		?>
        <div class="wowp-settings wowp-snippets">
            <form method="post">


                <div class="wowp-snippets__tabs" id="wowp-snippets-tabs">
					<?php
					foreach ( $snippets as $key => $value ) {
						$tab = ! empty( $options['snippet_tab'] ) ? $options['snippet_tab'] : 'content';
						echo '<input type="radio" class="wowp-snippets__tabs-radio" name="wp_coder_snippet[snippet_tab]" value="' . esc_attr( $key ) . '" id="wowp-tab-' . esc_attr( $key ) . '" ' . checked( $tab, $key, false ) . '>';
					}
					echo '<div class="wowp-snippets__tabs-labels">';
					foreach ( $snippets as $key => $value ) {
						echo '<label  class="wowp-snippets__tabs-tab" for="wowp-tab-' . esc_attr( $key ) . '"><span class="icon icon-' . esc_attr( $key ) . '"></span>' . esc_html( $value ) . '</label>';
					}
					echo '</div>';
					foreach ( $snippets as $key => $value ) {

						echo '<div class="wowp-snippets__tabs-content" data-content="wowp-tab-' . esc_attr( $key ) . '">';
						require_once plugin_dir_path( __FILE__ ) . 'pages/' . esc_attr( $key ) . '.php';
						echo '<input type="submit" name="submit" class="wowp-button button button-dark button-hero" value="' . esc_attr__( 'Save', 'wp-coder' ) . '">';
						echo '</div>';
					}

					?>
                </div>
				<?php
				//				submit_button( __( 'Save', 'wp-coder' ), 'wowp-button button-dark button-hero', 'submit', false );
				wp_nonce_field( WPCoder::PREFIX . '_snippets_action', WPCoder::PREFIX . '_save_snippet' );
				?>
            </form>

        </div>
		<?php
	}

	private static function create_options( $settings ) {
		$options = get_option( '_wp_coder_snippets', [] );
		echo '<div class="wowp-snippet__list">';
		$i = 1;
		foreach ( $settings as $name => $args ) {
			$checked = array_key_exists( $name, $options ) ? 'checked' : ''; ?>
            <div class="wowp-snippet__item">
                <div class="wowp-snippet__item-header">
                    <label for="wp_coder_snippet-<?php echo esc_attr( $name ); ?>"><?php echo esc_html( $args[0] ); ?></label>
                    <p class="wowp-snippet__item-description"><?php echo esc_html( $args[1] ); ?></p>
                </div>
                <div class="wowp-field has-checkbox">
                    <label class="switch">
                        <input type="checkbox"
                               name="wp_coder_snippet[<?php echo esc_attr( $name ); ?>]" <?php echo esc_attr( $checked ); ?>
                               value="1" id="wp_coder_snippet-<?php echo esc_attr( $name ); ?>">
                        <span class="slider"></span>
                    </label>
                </div>
            </div>
			<?php
			$i ++;
		}
		echo '</div>';
	}


	private static function field( $type = 'checkbox', $name = '', $def = '', $placeholder = '' ) {
		$options = get_option( '_wp_coder_snippets', [] );
		if ( $type === 'checkbox' ) {
			$checked = array_key_exists( $name, $options ) ? 'checked' : '';
			echo '<input type="checkbox" name="wp_coder_snippet[' . esc_attr( $name ) . ']" ' . esc_attr( $checked ) . ' value="1" id="' . esc_attr( $name ) . '">';
			echo '';
		} elseif ( $type === 'text' ) {
			$value = ! empty( $options[ $name ] ) ? $options[ $name ] : $def;
			echo '<input type="text" name="wp_coder_snippet[' . esc_attr( $name ) . ']" value="' . esc_attr( $value ) . '" placeholder="' . esc_attr( $placeholder ) . '">';
		} elseif ( $type === 'textarea' ) {
			$value = ! empty( $options[ $name ] ) ? $options[ $name ] : $def;
			echo '<textarea name="wp_coder_snippet[' . esc_attr( $name ) . ']" placeholder="' . esc_attr( $placeholder ) . '">' . esc_attr( $value ) . '</textarea>';
		} elseif ( $type === 'number' ) {
			$value = ! empty( $options[ $name ] ) ? $options[ $name ] : $def;
			echo '<input type="number" name="wp_coder_snippet[' . esc_attr( $name ) . ']" value="' . esc_attr( $value ) . '" placeholder="' . esc_attr( $placeholder ) . '">';
		}
	}

	private static function send(): void {
		if ( ! self::verify() ) {
			return;
		}

		if ( empty( $_POST['wp_coder_snippet'] ) ) {
			$snippets = [];
		} else {
			$snippets = map_deep( wp_unslash( $_POST['wp_coder_snippet'] ), 'sanitize_text_field' );
		}

		update_option( '_wp_coder_snippets', $snippets );
	}

	private static function verify(): bool {
		$wp_coder     = $_POST['wp_coder_snippet'] ?? '';
		$nonce_name   = WPCoder::PREFIX . '_save_snippet';
		$nonce_action = WPCoder::PREFIX . '_snippets_action';
		if ( empty( $_POST[ $nonce_name ] ) ) {
			return false;
		}

		return isset( $_POST['wp_coder_snippet'] ) && wp_verify_nonce( $_POST[ $nonce_name ],
				$nonce_action ) && WPCoder::user_can_manage();
	}

}