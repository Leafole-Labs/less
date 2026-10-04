<?php

namespace WPCoder\Optimization;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

class CSSMinifier {

	public static function minify($css): string {
		$css = preg_replace('/\/\*(.*?)\*\//s', '', $css); // Remove comments
		$css = preg_replace('/\s+/', ' ', $css); // Remove whitespace
		$css = preg_replace('/;\s*/', ';', $css); // Remove spaces after semicolons
		$css = preg_replace('/: /', ':', $css); // Remove spaces after colons
		$css = preg_replace('/\s{2,}/', ' ', $css); // Remove multiple spaces
		return trim($css);
	}

}