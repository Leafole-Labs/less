<?php

namespace WPCoder\Tools;

use WPCoder\WPCoder;

class ToolsManager {

	public static function init(): void {
		self::send();

		$options = get_option( '_wp_coder_tools', [] );

		$tools = [
			'integrations' => __( 'Integrations', 'wpcoderpro' ),
			'content'      => __( 'Content & Templates', 'wpcoderpro' ),
			'developer'    => __( 'Developer', 'wpcoderpro' ),
		];

		?>

        <div class="wowp-settings wowp-tools">
            <form method="post">

                <div class="wowp-snippets__header">
                    <h3 class="wowp-snippets__header-title">Tools & Integrations</h3>
                    <p class="wowp-snippets__header-description">Manage useful features and external service
                        integrations to enhance your site.</p>
                </div>

                <div class="wowp-snippets__tabs" id="wowp-snippets-tabs">
					<?php
					foreach ( $tools as $key => $value ) {
						$tab = ! empty( $options['tool_tab'] ) ? $options['tool_tab'] : 'integrations';
						echo '<input type="radio" class="wowp-snippets__tabs-radio" name="wp_coder_tool[tool_tab]" value="' . esc_attr( $key ) . '" id="wowp-tab-' . esc_attr( $key ) . '" ' . checked( $tab,
								$key, false ) . '>';
					}
					echo '<div class="wowp-snippets__tabs-labels">';
					foreach ( $tools as $key => $value ) {
						echo '<label  class="wowp-snippets__tabs-tab" for="wowp-tab-' . esc_attr( $key ) . '"><span class="icon icon-' . esc_attr( $key ) . '"></span>' . esc_html( $value ) . '</label>';
					}
					echo '</div>';
					foreach ( $tools as $key => $value ) {
						echo '<div class="wowp-snippets__tabs-content" data-content="wowp-tab-' . esc_attr( $key ) . '">';
						require_once plugin_dir_path( __FILE__ ) . 'pages/' . esc_attr( $key ) . '.php';
						echo '<input type="submit" name="submit" class="wowp-button button button-dark button-hero" value="' . esc_attr__( 'Save',
								'wpcoderpro' ) . '">';
						echo '</div>';
					}

					?>
                </div>

				<?php
				// require_once plugin_dir_path( __FILE__ ) . '/page.php'; ?>

				<?php
				// submit_button( __( 'Save', 'wpcoderpro' ), 'wowp-button button button-dark button-hero', 'submit', false ); ?>

				<?php
				wp_nonce_field( WPCoder::PREFIX . '_tools_action', WPCoder::PREFIX . '_save_tools' ); ?>

            </form>
        </div>
		<?php
	}

	private static function option( $name = '', $def = '' ) {
		$options = get_option( '_wp_coder_tools', [] );
		$res     = ! empty( $options[ $name ] ) ? $options[ $name ] : $def;

		return $res;
	}

	private static function expand( $name ) {
		$res = self::option( $name );
		if ( ! empty( $res ) ) {
			echo ' open';
		}
	}

	private static function field( $type = 'checkbox', $name = '', $def = '', $placeholder = '' ) {
		$options = get_option( '_wp_coder_tools', [] );
		if ( $type === 'checkbox' ) {
			$checked = array_key_exists( $name, $options ) ? 'checked' : '';
			echo '<input type="checkbox" name="wp_coder_tool[' . esc_attr( $name ) . ']" ' . esc_attr( $checked ) . ' value="1" id="' . esc_attr( $name ) . '">';
		} elseif ( $type === 'textarea' ) {
			$value = ! empty( $options[ $name ] ) ? $options[ $name ] : $def;
			echo '<textarea name="wp_coder_tool[' . esc_attr( $name ) . ']" placeholder="' . esc_attr( $placeholder ) . '">' . esc_attr( $value ) . '</textarea>';
		} else {
			$value = ! empty( $options[ $name ] ) ? $options[ $name ] : $def;
			echo '<input type="' . esc_attr( $type ) . '" name="wp_coder_tool[' . esc_attr( $name ) . ']" value="' . esc_attr( $value ) . '" placeholder="' . esc_attr( $placeholder ) . '">';
		}
	}

	private static function send(): void {
		if ( ! self::verify() ) {
			return;
		}

		if ( empty( $_POST['wp_coder_tool'] ) ) {
			$snippets = [];
		} else {
			$snippets = map_deep( $_POST['wp_coder_tool'], 'sanitize_text_field' );
		}


		update_option( '_wp_coder_tools', $snippets );
	}

	private static function verify(): bool {
		$wp_coder     = $_POST['wp_coder_tool'] ?? '';
		$nonce_name   = WPCoder::PREFIX . '_save_tools';
		$nonce_action = WPCoder::PREFIX . '_tools_action';
		if ( empty( $_POST[ $nonce_name ] ) ) {
			return false;
		}

		return wp_verify_nonce( $_POST[ $nonce_name ],
				$nonce_action ) && WPCoder::user_can_manage();
	}
}