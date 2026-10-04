<?php

namespace Elementor\MCP\Composer;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Coordinates multiple bundled copies of this package and loads the highest version.
 */
class Versions {
	/**
	 * Versions instance.
	 *
	 * @var Versions|null
	 */
	private static $instance = null;

	/**
	 * Registered version callbacks.
	 *
	 * @var array<string, callable>
	 */
	private $versions = [];

	/**
	 * Registered source files for each version.
	 *
	 * @var array<string, string>
	 */
	private $sources = [];

	/**
	 * The determined highest version source directory.
	 *
	 * @var string|null
	 */
	private static $active_source_dir = null;

	/**
	 * Register a version initialization callback.
	 *
	 * @param string   $version_string            Package version.
	 * @param callable $initialization_callback Callback to initialize the version.
	 * @return bool
	 */
	public function register( $version_string, $initialization_callback ) {
		if ( isset( $this->versions[ $version_string ] ) ) {
			return false;
		}

		// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_debug_backtrace
		$backtrace = debug_backtrace( DEBUG_BACKTRACE_IGNORE_ARGS );
		$source    = $backtrace[0]['file'];

		$this->versions[ $version_string ] = $initialization_callback;
		$this->sources[ $source ]         = $version_string;

		return true;
	}

	/**
	 * Get all registered versions.
	 *
	 * @return array<string, callable>
	 */
	public function get_versions() {
		return $this->versions;
	}

	/**
	 * Get registered source files.
	 *
	 * @return array<string, string>
	 */
	public function get_sources() {
		return $this->sources;
	}

	/**
	 * Get the latest registered version string.
	 *
	 * @return string|false
	 */
	public function latest_version() {
		$keys = array_keys( $this->versions );

		if ( empty( $keys ) ) {
			return false;
		}

		usort( $keys, 'version_compare' );

		return end( $keys );
	}

	/**
	 * Get the callback for the latest registered version.
	 *
	 * @return callable
	 */
	public function latest_version_callback() {
		$latest = $this->latest_version();

		if ( empty( $latest ) || ! isset( $this->versions[ $latest ] ) ) {
			return '__return_null';
		}

		return $this->versions[ $latest ];
	}

	/**
	 * Custom autoloader that loads classes from the highest version source.
	 *
	 * @param string $class_name Fully qualified class name.
	 * @return void
	 */
	public static function autoloader( $class_name ) {
		if ( strpos( $class_name, 'Elementor\\MCP\\Composer\\' ) !== 0 ) {
			return;
		}

		if ( 'Elementor\\MCP\\Composer\\Versions' === $class_name ) {
			return;
		}

		if ( empty( self::$active_source_dir ) ) {
			return;
		}

		$relative_class = str_replace( 'Elementor\\MCP\\Composer\\', '', $class_name );
		$file_path      = str_replace( '\\', '/', $relative_class ) . '.php';
		$full_path      = self::$active_source_dir . '/src/' . $file_path;

		if ( file_exists( $full_path ) ) {
			require_once $full_path;
		}
	}

	/**
	 * Get the singleton instance.
	 *
	 * @return Versions
	 * @codeCoverageIgnore
	 */
	public static function instance() {
		if ( empty( self::$instance ) ) {
			self::$instance = new self();
			spl_autoload_register( [ __CLASS__, 'autoloader' ], true, true );
		}

		return self::$instance;
	}

	/**
	 * Initialize the latest registered package version.
	 *
	 * @return void
	 * @codeCoverageIgnore
	 */
	public static function initialize_latest_version() {
		$self     = self::instance();
		$callback = $self->latest_version_callback();

		if ( false === $self->latest_version() ) {
			return;
		}

		if ( is_string( $callback ) && function_exists( $callback ) ) {
			$reflection              = new \ReflectionFunction( $callback );
			$callback_file           = $reflection->getFileName();
			self::$active_source_dir = dirname( $callback_file );
		}

		call_user_func( $callback );
	}
}
