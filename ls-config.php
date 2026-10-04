<?php
/**
 * LESS configuration file.
 *
 * Central configuration for LESS. Defines structural defaults and identity
 * constants. Values that can be changed from the administration panel are
 * stored separately in the database and layered on top of the defaults
 * defined here.
 *
 * LESS resolves the effective configuration at runtime; the database holds
 * overrides, this file holds the defaults.
 *
 * @package LESS
 * @since 0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Product identity constants.
 *
 * These values may be overridden before this file is loaded by defining them
 * in wp-config.php.
 */
if ( ! defined( 'LS_NAME' ) ) {
	define( 'LS_NAME', 'LESS' );
}

if ( ! defined( 'LS_VERSION' ) ) {
	define( 'LS_VERSION', '0.2.2' );
}

if ( ! defined( 'LS_SLUG' ) ) {
	define( 'LS_SLUG', 'less' );
}

if ( ! defined( 'LS_DEVELOPER' ) ) {
	define( 'LS_DEVELOPER', 'Leafole Labs' );
}

if ( ! defined( 'LS_WEBSITE' ) ) {
	define( 'LS_WEBSITE', 'https://leafole.dev' );
}

if ( ! defined( 'LS_REPOSITORY' ) ) {
	define( 'LS_REPOSITORY', 'https://github.com/Leafole-Labs/less' );
}

/**
 * Administrative namespace.
 *
 * @since 0.1
 */
if ( ! defined( 'LS_NS' ) ) {
	define( 'LS_NS', 'LS' );
}

/**
 * The administrative directory.
 *
 * @since 0.1
 */
if ( ! defined( 'LS_ADMIN_DIR' ) ) {
	define( 'LS_ADMIN_DIR', 'ls-admin' );
}

/**
 * Maximum number of revisions kept per post.
 *
 * Default is 10. Set to 0 to disable revisions for new content.
 * The effective value is resolved at runtime: a value saved in the database
 * overrides this default.
 */
if ( ! defined( 'LESS_MAX_REVISIONS' ) ) {
	define( 'LESS_MAX_REVISIONS', 10 );
}

/**
 * Default configuration values.
 *
 * Keys are the stable identifiers used across LESS. The runtime resolver
 * (ls()->config / ls_config_get) looks up a persisted override in the
 * database first and falls back to these defaults.
 *
 * @since 0.1
 */
$ls_config_defaults = array(

	/**
	 * Maximum revisions kept per post. 0 disables revisions.
	 * Overridable from the administration panel.
	 */
	'less_max_revisions' => (int) LESS_MAX_REVISIONS,

);

/**
 * Structural configuration of LESS.
 *
 * These describe permanent architectural decisions of the LESS platform.
 * They are not user-configurable toggles; they exist so the administration
 * can render an accurate, honest overview of the platform.
 *
 * @since 0.1
 */
$ls_structural_config = array(
	/**
	 * Whether LESS exposes XML-RPC. Permanently disabled in LESS.
	 */
	'xmlrpc'     => false,
	/**
	 * Whether pingbacks are enabled. Permanently disabled in LESS.
	 */
	'pingbacks'  => false,
	/**
	 * Whether trackbacks are enabled. Permanently disabled in LESS.
	 */
	'trackbacks' => false,
	/**
	 * Whether LESS depends on the external Gravatar service. Permanently
	 * disabled; LESS uses a local avatar default. The avatar system itself
	 * remains available.
	 */
	'gravatar'   => false,
);

/**
 * Returns the LESS configuration defaults.
 *
 * @since 0.1
 *
 * @return array<string, mixed> Configurable LESS defaults.
 */
function ls_get_config_defaults() {
	global $ls_config_defaults;
	return array_merge( array(), $ls_config_defaults );
}

/**
 * Returns the LESS structural configuration.
 *
 * These entries are not user-configurable.
 *
 * @since 0.1
 *
 * @return array<string, bool> Structural configuration.
 */
function ls_get_structural_config() {
	global $ls_structural_config;
	return array_merge( array(), $ls_structural_config );
}