<?php

namespace Elementor\MCP\Composer\Mcp;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Singleton registry of MCP ability slugs for the unified Elementor MCP server.
 *
 * Consumers register ability slugs (already registered via wp_register_ability).
 * The package bootstraps one server that exposes the collected tools, resources,
 * and prompts.
 */
class Registry {

	/**
	 * @var Registry|null
	 */
	private static $instance = null;

	/**
	 * @var array<string, true>
	 */
	private $tools = [];

	/**
	 * @var array<string, true>
	 */
	private $resources = [];

	/**
	 * @var array<string, true>
	 */
	private $prompts = [];

	/**
	 * @return Registry
	 */
	public static function instance(): self {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * @param string $slug Ability slug.
	 * @return void
	 */
	public function register_tool( string $slug ): void {
		$this->tools[ $slug ] = true;
	}

	/**
	 * @param string $slug Ability slug.
	 * @return void
	 */
	public function register_resource( string $slug ): void {
		$this->resources[ $slug ] = true;
	}

	/**
	 * @param string $slug Ability slug.
	 * @return void
	 */
	public function register_prompt( string $slug ): void {
		$this->prompts[ $slug ] = true;
	}

	/**
	 * @param array $slugs Ability slugs.
	 * @return void
	 */
	public function register_tools( array $slugs ): void {
		foreach ( $slugs as $slug ) {
			if ( is_string( $slug ) ) {
				$this->register_tool( $slug );
			}
		}
	}

	/**
	 * @param array $slugs Ability slugs.
	 * @return void
	 */
	public function register_resources( array $slugs ): void {
		foreach ( $slugs as $slug ) {
			if ( is_string( $slug ) ) {
				$this->register_resource( $slug );
			}
		}
	}

	/**
	 * @param array $slugs Ability slugs.
	 * @return void
	 */
	public function register_prompts( array $slugs ): void {
		foreach ( $slugs as $slug ) {
			if ( is_string( $slug ) ) {
				$this->register_prompt( $slug );
			}
		}
	}

	/**
	 * @return string[]
	 */
	public function get_tools(): array {
		return $this->get_filtered_slugs( $this->tools, 'elementor/mcp/server/tools' );
	}

	/**
	 * @return string[]
	 */
	public function get_resources(): array {
		return $this->get_filtered_slugs( $this->resources, 'elementor/mcp/server/resources' );
	}

	/**
	 * @return string[]
	 */
	public function get_prompts(): array {
		return $this->get_filtered_slugs( $this->prompts, 'elementor/mcp/server/prompts' );
	}

	/**
	 * @return bool
	 */
	public function has_any(): bool {
		return ! empty( $this->get_tools() )
			|| ! empty( $this->get_resources() )
			|| ! empty( $this->get_prompts() );
	}

	/**
	 * @param array<string, true> $registered Registered slug map.
	 * @param string              $filter     Filter hook name.
	 * @return string[]
	 */
	private function get_filtered_slugs( array $registered, string $filter ): array {
		$defaults   = array_keys( $registered );
		$additional = apply_filters( $filter, [] );
		$additional = is_array( $additional ) ? array_filter( $additional, 'is_string' ) : [];

		return array_values( array_unique( array_merge( $defaults, $additional ) ) );
	}
}
