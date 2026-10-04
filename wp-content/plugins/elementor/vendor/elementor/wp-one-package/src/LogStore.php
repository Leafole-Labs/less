<?php

namespace ElementorOne;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Ring buffer persisted in a non-autoloaded wp_option.
 */
class LogStore {

	public const OPTION_KEY = 'elementor_one_internal_logs';

	public const MAX_ENTRIES = 50;

	public const MAX_MESSAGE_LENGTH = 1048;

	public const MAX_CALL_STACK_LENGTH = 1048;

	/**
	 * @var LogStore|null
	 */
	private static ?LogStore $instance = null;

	/**
	 * @var bool
	 */
	private bool $is_writing = false;

	/**
	 * @return LogStore
	 */
	public static function instance(): LogStore {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * @param string               $level
	 * @param string               $message
	 * @param array<string, mixed> $context
	 * @return void
	 */
	public function append( string $level, string $message, array $context = [] ): void {
		if ( $this->is_writing ) {
			return;
		}

		$this->is_writing = true;

		try {
			$entries = get_option( self::OPTION_KEY, [] );

			if ( ! is_array( $entries ) ) {
				$entries = [];
			}

			$entries[] = [
				'id' => $this->generate_entry_id(),
				'timestamp' => gmdate( 'c' ),
				'level' => $level,
				'message' => $this->truncate_message( $message ),
				'context' => $this->normalize_context( $context ),
			];

			if ( count( $entries ) > self::MAX_ENTRIES ) {
				$entries = array_slice( $entries, -self::MAX_ENTRIES );
			}

			update_option( self::OPTION_KEY, $entries, false );
		} catch ( \Throwable $e ) {
			unset( $e );
		} finally {
			$this->is_writing = false;
		}
	}

	/**
	 * @return array<int, array<string, mixed>>
	 */
	public function all(): array {
		$entries = get_option( self::OPTION_KEY, [] );

		if ( ! is_array( $entries ) ) {
			return [];
		}

		return $entries;
	}

	/**
	 * @return array<int, array<string, mixed>>
	 */
	public function all_newest_first(): array {
		return array_reverse( $this->all() );
	}

	/**
	 * @return bool
	 */
	public function clear(): bool {
		return delete_option( self::OPTION_KEY );
	}

	/**
	 * @return string
	 */
	private function generate_entry_id(): string {
		if ( function_exists( 'wp_generate_uuid4' ) ) {
			return wp_generate_uuid4();
		}

		return uniqid( 'log_', true );
	}

	/**
	 * @param string $message
	 * @return string
	 */
	private function truncate_message( string $message ): string {
		if ( strlen( $message ) <= self::MAX_MESSAGE_LENGTH ) {
			return $message;
		}

		return substr( $message, 0, self::MAX_MESSAGE_LENGTH );
	}

	/**
	 * @param array<string, mixed> $context
	 * @return array{source: string, call_stack: string}
	 */
	private function normalize_context( array $context ): array {
		$source = isset( $context['source'] ) && is_string( $context['source'] )
			? $context['source']
			: '';

		$call_stack = isset( $context['call_stack'] ) && is_string( $context['call_stack'] )
			? $context['call_stack']
			: '';

		if ( strlen( $call_stack ) > self::MAX_CALL_STACK_LENGTH ) {
			$call_stack = substr( $call_stack, 0, self::MAX_CALL_STACK_LENGTH );
		}

		return [
			'source' => $source,
			'call_stack' => $call_stack,
		];
	}
}
