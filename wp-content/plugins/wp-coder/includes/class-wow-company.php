<?php
/**
 * Wow Company Class
 *
 * @package     WPCoder
 * @subpackage  Includes/Wow_Company
 * @author      Dmytro Lobov <helper@wow-support.com>
 * @copyright   2019 Wow-Company
 * @license     GNU Publisher License
 * @version     1.0
 */

use WPCoder\WPCoder;

defined( 'ABSPATH' ) || exit;

/**
 * Creates the menu in admin panel general for all Wow plugin
 *
 * @property string text_domain - Text domain for translate
 *
 * @since 1.0
 */
final class Wow_Company {

	public function __construct() {
		add_action( 'admin_menu', [ $this, 'add_menu' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'admin_style' ] );
		add_filter( 'admin_footer_text', [ $this, 'footer_text' ] );

	}

	public function admin_style( $hook ): void {
		wp_enqueue_style( 'wow-page', WPCoder::url() . 'assets/css/admin-wow-company.css' );
	}

	/**
	 * Register the plugin menu on sidebar menu in admin panel.
	 *
	 * @since 1.0
	 */
	public function add_menu(): void {
		$icon =
			'data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPldPVyBMT0dPPC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGN0NDNUYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0U4NkUyQyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjdDQzVGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFODZFMkMiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iV09XLUxPR08iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTIuMDAwMDAwLCAxMDcuNTI2NTIxKSIgc3Ryb2tlPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBzdHJva2Utd2lkdGg9IjM4Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTAuNDMzMDEyNzAyLDg2LjkyNjkxNTggTDEwMC40MzMwMTMsMjYwLjEzMTk5NyBNMTAwLjQzMzAxMyw4Ni45MjY5MTU4IEwyMDAuNDMzMDEzLDI2MC4xMzE5OTcgTTM1MS41ODU3OTEsNS45OTUyMDQzM2UtMTUgTDIwMi4yNTU3MDcsMjYwLjE5MzI0NyIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGQ9Ik0yNTYsNDU2IEMzNjYuNDU2OTUsNDU2IDQ1NiwzNjYuNDU2OTUgNDU2LDI1NiBDNDU2LDE0NS41NDMwNSAzNjYuNDU2OTUsNTYgMjU2LDU2IEMxNDUuNTQzMDUsNTYgNTYsMTQ1LjU0MzA1IDU2LDI1NiBDNTYsMzY2LjQ1Njk1IDE0NS41NDMwNSw0NTYgMjU2LDQ1NiBaIiBpZD0iT3ZhbCIgc3Ryb2tlPSJ1cmwoI2xpbmVhckdyYWRpZW50LTIpIiBzdHJva2Utd2lkdGg9IjI4IiBzdHJva2UtZGFzaGFycmF5PSIxMTU1LjUyLDk5OTk5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTYuMDAwMDAwLCAyNTYuMDAwMDAwKSByb3RhdGUoLTEzMi4wMDAwMDApIHRyYW5zbGF0ZSgtMjU2LjAwMDAwMCwgLTI1Ni4wMDAwMDApICI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=';

		add_menu_page( 'Wow Plugins', 'Wow Plugins', 'manage_options', 'wow-company', array(
			$this,
			'main_page',
		), $icon );
		$menu_logo = $this->menu_logo();
		$menu_title = $menu_logo . __('Welcome', 'wp-coder');

		add_submenu_page( 'wow-company', 'Welcome to Wow-Company', $menu_title, 'manage_options', 'wow-company' );
	}

	private function menu_logo() {
		return '<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="15" height="15" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet" class="wowp-menu-logo">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="currentColor" stroke="none">
<path d="M2493 5105 c-18 -8 -42 -29 -53 -47 -19 -32 -20 -49 -20 -538 l0
-506 -772 -549 c-425 -303 -788 -563 -806 -579 -57 -50 -77 -100 -77 -192 0
-72 3 -86 30 -129 36 -59 101 -110 155 -125 l40 -11 0 -1214 0 -1215 205 0
205 0 0 1313 0 1312 183 129 c100 71 358 255 574 408 l392 279 556 -392 555
-393 0 -1328 0 -1328 205 0 205 0 0 1215 0 1215 33 1 c79 2 169 61 212 140 25
46 30 65 30 124 -1 58 -6 79 -30 124 -36 66 32 15 -903 676 l-722 510 0 88 0
87 480 0 c264 0 480 2 480 5 0 3 -59 94 -131 201 l-131 196 131 197 131 196
-480 3 c-450 2 -480 3 -480 20 0 32 -36 85 -71 104 -40 21 -82 22 -126 3z"/>
<path d="M2141 2831 l-411 -266 3 -475 c2 -441 3 -478 21 -513 26 -52 65 -77
139 -88 84 -12 1246 -11 1321 1 75 12 119 45 143 107 17 44 18 85 18 507 l0
460 -335 218 c-184 120 -369 240 -411 267 l-76 49 -412 -267z m624 -353 l205
-133 0 -227 0 -228 -415 0 -415 0 0 229 0 228 203 131 c111 73 205 132 210
132 4 0 100 -60 212 -132z"/>
<path d="M2451 1340 c-81 -12 -180 -43 -256 -83 -91 -47 -213 -174 -258 -267
-68 -140 -70 -152 -75 -592 l-4 -398 211 0 211 0 0 368 c0 347 2 369 21 412
82 182 334 219 463 68 64 -74 66 -91 66 -490 l0 -358 205 0 205 0 0 383 c0
434 -5 472 -77 610 -123 236 -429 385 -712 347z"/>
</g>
</svg>';
	}

	/**
	 * Include the main file
	 */
	public function main_page(): void {
		require_once WPCoder::dir() . 'includes/wow-company/main.php';
	}

	public function footer_text( $footer_text ) {
		global $pagenow;

		if ( $pagenow === 'admin.php' && ( isset( $_GET['page'] ) && $_GET['page'] === 'wow-company' ) ) {
			$text = __( 'Thank you for using <b>Our plugins</b>! Our website <a href="https://wow-estore.com/" target="_blank">Wow-Estore.com</a>',
				'wp-coder' );

			return str_replace( '</span>', '', $footer_text ) . ' | ' . $text . '</span>';
		}

		return $footer_text;
	}

}

new Wow_Company;