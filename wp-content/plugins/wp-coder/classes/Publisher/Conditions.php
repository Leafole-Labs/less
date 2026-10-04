<?php

namespace WPCoder\Publisher;


defined( 'ABSPATH' ) || exit;

class Conditions {

	public static function init( $result ): bool {
		$param = ! empty( $result->param ) ? maybe_unserialize( $result->param ) : [];
		$check = [
			'status'   => self::status( $result->status ),
			'mode'     => self::mode( $result->mode ),

		];

		if ( in_array( false, $check, true ) ) {
			return false;
		}

		return true;

	}

	private static function status( $status ): bool {
		return empty( $status );
	}

	private static function mode( $mode ): bool {
		return empty( $mode ) || current_user_can( 'administrator' );
	}
}