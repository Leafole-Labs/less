<?php

namespace WPCoder\Publisher;

defined( 'ABSPATH' ) || exit;

use WPCoder\Dashboard\DBManager;
use WPCoder\Dashboard\FolderManager;
use WPCoder\Optimization\Obfuscator;
use WPCoder\WPCoder;

class EnqueueScript {

	public static function init( $result ): void {
		$param = maybe_unserialize( $result->param );
		$js    = wp_specialchars_decode( $result->js_code, ENT_QUOTES );

		self::include_scripts( $result );

		if ( ! empty( $js ) && empty( $param['inline_js'] ) ) {
			self::include_script( $result, $param );
		}


		add_filter( 'script_loader_tag', [ __CLASS__, 'add_attribute' ], 20, 2 );
	}

	public static function add_attribute( $tag, $handle ) {
		$scripts = self::get_all_scripts();

		if ( ! empty( $scripts[ $handle ] ) ) {
			return str_replace( ' src', ' ' . $scripts[ $handle ] . ' src', $tag );
		}

		return $tag;
	}

	public static function inline( $result ): void {

		if ( is_admin() ) {
			return;
		}

		$param = maybe_unserialize( $result->param );
		$js    = wp_specialchars_decode( $result->js_code, ENT_QUOTES );

		if ( empty( $param['inline_js'] ) ) {
			return;
		}

		if ( empty( $js ) ) {
			return;
		}


		$minified = ! empty( $param['minified_js'] ) ? $param['minified_js'] : 'obfuscate';

		if ( $minified === 'obfuscate' ) {
			$packer = new Obfuscator( $js, 'Normal', true, false );
			$js     = $packer->pack();
		}
		if ( $minified === 'minify' ) {
			$packer = new Obfuscator( $js, 'None', true, false );
			$js     = $packer->pack();
		}

		$slug = WPCoder::SLUG . '-js-' . $result->id . '-inline';
		// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
		echo '<script id="' . esc_attr( $slug ) . '">' . $js . '</script>';
		// phpcs:enable
	}

	private static function include_script( $result, $param ): void {
		$url        = FolderManager::get_js_url( $result );
		$time       = ! empty( $param['time'] ) ? $param['time'] : time();
		$dependency = ! empty( $param['jquery_dependency'] ) ? [] : [ 'jquery' ];
		wp_enqueue_script( WPCoder::SLUG . '-script-' . $result->id, $url, $dependency,
			WPCoder::info( 'version' ) . '_' . $time, true );
	}

	private static function include_scripts( $result ): void {
		$scripts = self::get_scripts( $result );
		if ( empty( $scripts ) ) {
			return;
		}

		foreach ( $scripts as $script ) {
			wp_enqueue_script( $script['slug'], $script['url'], [], $script['ver'], true );
		}
	}

	private static function get_scripts( $result ): array {
		$scripts = [];

		$param = maybe_unserialize( $result->param );

		$count = ! empty( $param['include'] ) ? count( $param['include'] ) : 0;
		$time  = ! empty( $param['time'] ) ? $param['time'] : time();

		if ( $count < 1 ) {
			return $scripts;
		}

		for ( $i = 0; $i < $count; $i ++ ) {
			if ( $param['include'][ $i ] === 'js' && ! empty( $param['include_file'][ $i ] ) ) {
				$scripts[] = [
					'url'  => $param['include_file'][ $i ],
					'slug' => WPCoder::SLUG . '-' . $result->id . '-js-' . $i,
					'ver'  => WPCoder::info( 'version' ) . '_' . $time,
				];
			}
		}

		return $scripts;
	}

	private static function get_all_scripts(): array {
		$scripts = [];

		$results = DBManager::get_all_data();

		if ( empty( $results ) ) {
			return $scripts;
		}

		foreach ( $results as $result ) {
			$id    = $result->id;
			$param = maybe_unserialize( $result->param );

			if ( ! empty( $param['js_attributes'] ) && ! empty( $result->js_code ) ) {
				$scripts[ WPCoder::SLUG . '-script-' . $id ] = $param['js_attributes'];
			}


			$count = ! empty( $param['include'] ) ? count( $param['include'] ) : 0;

			if ( $count < 1 ) {
				continue;
			}

			for ( $i = 0; $i < $count; $i ++ ) {
				if ( $param['include'][ $i ] === 'js' && ! empty( $param['include_file'][ $i ] ) ) {
					$attr = ! empty( $param['file_js_att'][ $i ] ) ? $param['file_js_att'][ $i ] : '';

					$scripts[ WPCoder::SLUG . '-' . $id . '-js-' . $i ] = $attr;
				}
			}
		}

		return $scripts;
	}

}