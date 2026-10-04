<?php

namespace WPCoder;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

class Autoloader {
	/**
	 * @var mixed
	 */
	private $namespace;
	private $directory;

	public function __construct( $namespace ) {
		$this->namespace = $namespace;
		$this->directory = __DIR__;
		spl_autoload_register( [ $this, 'autoload' ] );
	}

	public function autoload( $class ): void {

		if ( strpos( $class, $this->namespace ) === 0 ) {
			$file = $this->get_file_path( $class );

			if ( $file && file_exists( $file ) ) {
				require_once( $file );

				return;
			}
		}
	}

	/**
	 * Get the file path for a class.
	 *
	 * @param string $class The fully qualified name of the class.
	 *
	 * @return string|null The file path, or null if the file could not be found.
	 */
	public function get_file_path( string $class ): ?string {

		$relativeClass = substr( $class, strlen( $this->namespace ) );

		$file = str_replace( '\\', DIRECTORY_SEPARATOR, $relativeClass ) . '.php';

		$full_path = $this->directory . DIRECTORY_SEPARATOR . $file;

		if ( file_exists( $full_path ) ) {
			return $full_path;
		}


		return null;
	}


}