<?php

namespace ElementorOne;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class Logger
 */
class Logger {

	public const LEVEL_ERROR = 'error';
	public const LEVEL_WARN = 'warn';
	public const LEVEL_INFO = 'info';

	/**
	 * @var string Prefix for log messages (e.g., app name)
	 */
	private string $prefix;

	/**
	 * Constructor
	 *
	 * @param string $prefix Prefix for log messages (e.g., 'Elementor One', 'Elementor AI')
	 */
	public function __construct( string $prefix ) {
		$this->prefix = $prefix;
	}

	/**
	 * Log a message
	 *
	 * @param string $log_level Log level
	 * @param mixed $message Message to log
	 * @return void
	 */
	private function log( string $log_level, $message ): void {
		$raw_message = $this->message_to_string( $message );
		$backtrace = debug_backtrace( DEBUG_BACKTRACE_IGNORE_ARGS ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_debug_backtrace

		$caller = $this->caller_from_backtrace( $backtrace );

		$formatted_message = '[' . $this->prefix . ']: ' . $log_level . ' in ' . $caller . ': ' . $raw_message;

		error_log( $formatted_message ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log

		LogStore::instance()->append(
			$log_level,
			$raw_message,
			[
				'source' => $this->prefix,
				'call_stack' => $caller,
			]
		);
	}

	/**
	 * @param mixed $message
	 * @return string
	 */
	private function message_to_string( $message ): string {
		if ( is_string( $message ) ) {
			return $message;
		}

		if ( is_scalar( $message ) ) {
			return (string) $message;
		}

		$encoded = wp_json_encode( $message );

		return is_string( $encoded ) ? $encoded : '';
	}

	/**
	 * @param array<int, array<string, mixed>> $backtrace
	 * @return string
	 */
	private function caller_from_backtrace( array $backtrace ): string {
		$class    = $backtrace[2]['class'] ?? null;
		$type     = $backtrace[2]['type'] ?? null;
		$function = $backtrace[2]['function'] ?? '';

		if ( $class ) {
			return "$class$type$function()";
		}

		return "$function()";
	}

	/**
	 * Log an error message
	 *
	 * @param mixed $message Message to log
	 * @return void
	 */
	public function error( $message ): void {
		$this->log( self::LEVEL_ERROR, $message );
	}

	/**
	 * Log an info message
	 *
	 * @param mixed $message Message to log
	 * @return void
	 */
	public function info( $message ): void {
		$this->log( self::LEVEL_INFO, $message );
	}
}
