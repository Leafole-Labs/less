<?php

defined( 'ABSPATH' ) || exit;

class WPCoder_Lite_Changed_Snippets {
	/**
	 * @var false|mixed|null
	 */
	private $options;

	public function __construct() {
		$options       = get_option( '_wp_coder_snippets', [] );
		$this->options = $options;

		if ( array_key_exists( 'change_revisions_control', $options ) ) {
			add_filter( 'wp_revisions_to_keep', [ $this, 'change_revisions_control' ] );
		}

		if ( array_key_exists( 'change_logo_on_site_icon', $options ) ) {
			add_action( 'login_head', [ $this, 'change_logo_on_site_icon' ] );
		}

		if ( array_key_exists( 'change_logo_link', $options ) ) {
			add_filter( 'login_headerurl', [ $this, 'logo_link' ] );
		}

		if ( array_key_exists( 'change_redirect_after_login', $options ) ) {
			add_filter( 'login_redirect', [ $this, 'login_redirect' ], 10, 3 );
		}

		if ( array_key_exists( 'change_redirect_after_logout', $options ) ) {
			add_filter( 'logout_redirect', [ $this, 'logout_redirect' ], 10, 3 );
		}

		if ( array_key_exists( 'change_oEmbed_size', $options ) ) {
			add_filter( 'embed_defaults', [ $this, 'oembed_defaults' ] );
		}

		if ( array_key_exists( 'change_read_more', $options ) ) {
			add_filter( 'the_content_more_link', [$this,'change_read_more'], 15, 2 );
		}

		if ( array_key_exists( 'change_expiration_remember_me', $options ) ) {
			add_filter( 'auth_cookie_expiration', [$this, 'change_expiration_remember_me']);
		}

	}

	public function change_expiration_remember_me() {
		$days = ! empty( $this->options['change_expiration_remember_me_day'] ) ? $this->options['change_expiration_remember_me_day'] : 14;
		return absint($days) * DAY_IN_SECONDS;
	}

	public function change_read_more( $read_more, $read_more_text ) {
		$custom_text = ! empty( $this->options['change_read_more_text'] ) ? $this->options['change_read_more_text'] : 'Read More';
		$read_more   = str_replace( $read_more_text, $custom_text, $read_more );

		return $read_more;
	}

	public function oembed_defaults( $sizes ) {
		$width  = ! empty( $this->options['change_oEmbed_size_width'] ) ? $this->options['change_oEmbed_size_width'] : 400;
		$height = ! empty( $this->options['change_oEmbed_size_height'] ) ? $this->options['change_oEmbed_size_height'] : 280;

		return array(
			'width'  => absint( $width ),
			'height' => absint( $height ),
		);
	}

	public function logout_redirect( $redirect_to, $request, $user ) {
		if ( ! empty( $this->options['change_redirect_logout_link'] ) ) {
			$redirect_to = get_site_url() . '/' . esc_attr( $this->options['change_redirect_logout_link'] );
		} else {
			$redirect_to = get_site_url();
		}

		return $redirect_to;
	}

	public function login_redirect( $redirect_to, $request, $user ) {
		if ( ! empty( $this->options['change_redirect_login_link'] ) ) {
			$redirect_to = get_site_url() . '/' . esc_attr( $this->options['change_redirect_login_link'] );
		}

		return $redirect_to;
	}

	public function logo_link() {
		return get_home_url();
	}

	public function change_logo_on_site_icon(): void {
		$url = get_site_icon_url( 84 );
		if ( ! empty( $url ) ) {
			echo '<style>#login h1 a { background-image: url(' . esc_url( $url ) . '); }</style>';
		}
	}

	public function change_revisions_control( $limit ): int {
		$revision = ! empty( $this->options['change_revisions_control_number'] ) ? $this->options['change_revisions_control_number'] : '10';

		return absint( $revision );
	}

}

new WPCoder_Lite_Changed_Snippets;