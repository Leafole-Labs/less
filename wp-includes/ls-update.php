<?php
/**
 * LESS GitHub updater.
 *
 * Checks the GitHub Releases of the LESS repository (LS_REPOSITORY) for a
 * newer tag than LS_VERSION and exposes it through the standard
 * `update_core` transient, so the existing Updates screen
 * (ls-admin/update-core.php) offers a one-click update.
 *
 * Package format: GitHub source archives
 * (https://github.com/{owner}/{repo}/archive/refs/tags/{tag}.zip).
 * The Core_Upgrader normalization in
 * ls-admin/includes/class-core-upgrader.php renames the top-level
 * directory to `wordpress/` so the stock install routine works.
 *
 * @package LESS
 * @since 0.2
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Parses LS_REPOSITORY (or LS_GITHUB_REPO override) into owner/repo.
 *
 * @since 0.2
 *
 * @return array{0:string,1:string} [ $owner, $repo ].
 */
function ls_github_owner_repo() {
	$override = defined( 'LS_GITHUB_REPO' ) ? trim( (string) LS_GITHUB_REPO ) : '';
	if ( '' !== $override ) {
		$override = trim( $override, '/' );
		if ( function_exists( 'apply_filters' ) ) {
			$override = apply_filters( 'ls_github_repo', $override );
		}
		$parts = explode( '/', $override );
		if ( count( $parts ) >= 2 ) {
			$repo = preg_replace( '/\.git$/i', '', end( $parts ) );
			$owner = $parts[ count( $parts ) - 2 ];
			if ( '' !== $owner && '' !== $repo ) {
				return array( $owner, $repo );
			}
		}
	}

	$repository = defined( 'LS_REPOSITORY' ) ? (string) LS_REPOSITORY : 'https://github.com/Leafole-Labs/less';
	if ( function_exists( 'apply_filters' ) ) {
		$repository = apply_filters( 'ls_github_repository', $repository );
	}

	$path = '';
	if ( function_exists( 'wp_parse_url' ) ) {
		$path = (string) wp_parse_url( $repository, PHP_URL_PATH );
	} else {
		$parsed = parse_url( $repository );
		$path   = isset( $parsed['path'] ) ? $parsed['path'] : '';
	}

	$path  = trim( $path, '/' );
	$parts = $path ? explode( '/', $path ) : array();

	if ( count( $parts ) >= 2 ) {
		$repo  = preg_replace( '/\.git$/i', '', $parts[1] );
		$owner = $parts[0];
		if ( '' !== $owner && '' !== $repo ) {
			return array( $owner, $repo );
		}
	}

	return array( 'Leafole-Labs', 'less' );
}

/**
 * Normalizes a GitHub tag (e.g. "v0.2") to a comparable version ("0.2").
 *
 * @since 0.2
 *
 * @param string $tag Raw tag name.
 * @return string Normalized version.
 */
function ls_normalize_github_version( $tag ) {
	$tag = trim( (string) $tag );
	$tag = ltrim( $tag, 'vV' );
	$tag = trim( $tag );
	return $tag;
}

/**
 * Returns the GitHub API URL for the latest release.
 *
 * @since 0.2
 *
 * @return string
 */
function ls_github_latest_release_api_url() {
	list( $owner, $repo ) = ls_github_owner_repo();
	$url = sprintf( 'https://api.github.com/repos/%s/%s/releases/latest', rawurlencode( $owner ), rawurlencode( $repo ) );
	if ( function_exists( 'apply_filters' ) ) {
		$url = apply_filters( 'ls_github_release_api_url', $url, $owner, $repo );
	}
	return $url;
}

/**
 * Returns the releases overview page URL.
 *
 * @since 0.2
 *
 * @return string
 */
function ls_github_releases_page_url() {
	$base = defined( 'LS_REPOSITORY' ) ? rtrim( (string) LS_REPOSITORY, '/' ) : 'https://github.com/Leafole-Labs/less';
	return $base . '/releases';
}

/**
 * Returns the download URL for a given release tag.
 *
 * Uses the codeload archive endpoint (no API rate limit, works with the
 * core upgrader). Falls back to zipball when filtered.
 *
 * @since 0.2
 *
 * @param string $tag Raw tag name (e.g. "v0.2").
 * @return string
 */
function ls_github_package_url( $tag ) {
	list( $owner, $repo ) = ls_github_owner_repo();
	$url = sprintf(
		'https://github.com/%s/%s/archive/refs/tags/%s.zip',
		rawurlencode( $owner ),
		rawurlencode( $repo ),
		rawurlencode( ltrim( trim( (string) $tag ), '/' ) )
	);
	if ( function_exists( 'apply_filters' ) ) {
		$url = apply_filters( 'ls_github_package_url', $url, $tag, $owner, $repo );
	}
	return $url;
}

/**
 * Fetches the latest GitHub release (cached).
 *
 * Cache: site transient `ls_github_release` for 6h on success, 1h on
 * failure (negative caching stores previous payload when available).
 *
 * @since 0.2
 *
 * @param bool $force Whether to bypass the cache.
 * @return array|null Release payload (tag_name, name, html_url, zipball_url,
 *                    published_at, body) or null when unavailable.
 */
function ls_get_github_latest_release( $force = false ) {
	$cache_key = 'ls_github_release';

	if ( ! $force && function_exists( 'get_site_transient' ) ) {
		$cached = get_site_transient( $cache_key );
		if ( is_array( $cached ) && isset( $cached['tag_name'] ) ) {
			return $cached;
		}
	}

	if ( ! function_exists( 'wp_remote_get' ) ) {
		return null;
	}

	$headers = array(
		'Accept'     => 'application/vnd.github+json',
		'User-Agent' => 'LESS/' . ( defined( 'LS_VERSION' ) ? LS_VERSION : '0.1' ),
	);

	$token = defined( 'LS_GITHUB_TOKEN' ) ? (string) LS_GITHUB_TOKEN : '';
	if ( function_exists( 'apply_filters' ) ) {
		$token = apply_filters( 'ls_github_token', $token );
	}
	if ( '' !== $token ) {
		$headers['Authorization'] = 'Bearer ' . $token;
	}

	$response = wp_remote_get(
		ls_github_latest_release_api_url(),
		array(
			'timeout' => 10,
			'headers' => $headers,
		)
	);

	if ( function_exists( 'is_wp_error' ) && is_wp_error( $response ) ) {
		return null;
	}

	if ( ! is_array( $response ) || ! isset( $response['response'], $response['body'] ) ) {
		return null;
	}

	$code = function_exists( 'wp_remote_retrieve_response_code' )
		? (int) wp_remote_retrieve_response_code( $response )
		: 0;

	if ( 200 !== $code ) {
		return null;
	}

	$body = function_exists( 'wp_remote_retrieve_body' )
		? wp_remote_retrieve_body( $response )
		: ( isset( $response['body'] ) ? $response['body'] : '' );

	$data = json_decode( $body, true );
	if ( ! is_array( $data ) || empty( $data['tag_name'] ) ) {
		return null;
	}

	$release = array(
		'tag_name'     => (string) $data['tag_name'],
		'name'         => isset( $data['name'] ) ? (string) $data['name'] : (string) $data['tag_name'],
		'html_url'     => isset( $data['html_url'] ) ? (string) $data['html_url'] : ls_github_releases_page_url(),
		'zipball_url'  => isset( $data['zipball_url'] ) ? (string) $data['zipball_url'] : '',
		'published_at' => isset( $data['published_at'] ) ? (string) $data['published_at'] : '',
		'body'         => isset( $data['body'] ) ? (string) $data['body'] : '',
		'prerelease'   => ! empty( $data['prerelease'] ),
		'draft'        => ! empty( $data['draft'] ),
	);

	if ( function_exists( 'set_site_transient' ) ) {
		$ttl = function_exists( 'apply_filters' )
			? (int) apply_filters( 'ls_github_release_cache_ttl', 6 * HOUR_IN_SECONDS )
			: 6 * HOUR_IN_SECONDS;
		if ( $ttl < MINUTE_IN_SECONDS ) {
			$ttl = 6 * HOUR_IN_SECONDS;
		}
		set_site_transient( $cache_key, $release, $ttl );
	}

	return $release;
}

/**
 * Whether a release tag is newer than the installed version.
 *
 * @since 0.2
 *
 * @param string $tag Raw tag name.
 * @return bool
 */
function ls_is_github_release_newer( $tag ) {
	$installed = defined( 'LS_VERSION' ) ? (string) LS_VERSION : '0.1';
	$remote    = ls_normalize_github_version( $tag );

	if ( '' === $remote ) {
		return false;
	}

	return version_compare( $remote, $installed, '>' );
}

/**
 * Builds a core-update offer object compatible with Core_Upgrader.
 *
 * @since 0.2
 *
 * @param array|null $release Release payload from ls_get_github_latest_release().
 * @param string     $locale  Locale for the offer.
 * @return object Update offer.
 */
function ls_build_core_update_offer( $release, $locale = 'en_US' ) {
	global $required_php_version, $required_mysql_version;

	$installed = defined( 'LS_VERSION' ) ? (string) LS_VERSION : '0.1';
	$locale    = $locale ? (string) $locale : 'en_US';

	$php_version   = isset( $required_php_version ) && '' !== $required_php_version ? $required_php_version : '7.4';
	$mysql_version = isset( $required_mysql_version ) && '' !== $required_mysql_version ? $required_mysql_version : '5.5.5';

	// Default: up to date.
	$offer = new stdClass();
	$offer->response       = 'latest';
	$offer->download       = '';
	$offer->locale         = $locale;
	$offer->packages       = (object) array(
		'full'        => '',
		'no_content'  => false,
		'new_bundled' => false,
		'partial'     => false,
		'rollback'    => false,
	);
	$offer->current        = $installed;
	$offer->version        = $installed;
	$offer->php_version    = $php_version;
	$offer->mysql_version  = $mysql_version;
	$offer->new_bundled    = null;
	$offer->partial_version = false;
	$offer->notify_email   = false;
	$offer->support_email  = false;
	$offer->new_files      = true;
	$offer->url            = ls_github_releases_page_url();

	if ( is_array( $release ) && isset( $release['tag_name'] ) && ls_is_github_release_newer( $release['tag_name'] ) ) {
		$new_version = ls_normalize_github_version( $release['tag_name'] );
		$package    = ls_github_package_url( $release['tag_name'] );

		$offer->response = 'upgrade';
		$offer->download = $package;
		$offer->packages = (object) array(
			'full'        => $package,
			'no_content'  => false,
			'new_bundled' => false,
			'partial'     => false,
			'rollback'    => false,
		);
		$offer->current  = $new_version;
		$offer->version  = $new_version;
		$offer->url      = isset( $release['html_url'] ) && '' !== $release['html_url']
			? $release['html_url']
			: ls_github_releases_page_url() . '/tag/' . rawurlencode( $release['tag_name'] );
	}

	if ( function_exists( 'apply_filters' ) ) {
		$offer = apply_filters( 'ls_github_core_update_offer', $offer, $release, $locale );
	}

	return $offer;
}

/**
 * Builds the full `update_core` transient value from GitHub data.
 *
 * @since 0.2
 *
 * @param bool $force Whether to bypass the release cache.
 * @return object Transient value.
 */
function ls_get_update_core_transient( $force = false ) {
	$locale = function_exists( 'get_locale' ) ? get_locale() : 'en_US';
	if ( '' === $locale ) {
		$locale = 'en_US';
	}

	$release = ls_get_github_latest_release( $force );
	$offer   = ls_build_core_update_offer( $release, $locale );

	$version_checked = function_exists( 'wp_get_wp_version' ) ? wp_get_wp_version() : '';

	$transient                    = new stdClass();
	$transient->updates           = array( $offer );
	$transient->last_checked      = time();
	$transient->version_checked   = $version_checked;
	$transient->ls_version_checked = defined( 'LS_VERSION' ) ? (string) LS_VERSION : '0.1';

	return $transient;
}

/**
 * How long before the GitHub check is considered stale.
 *
 * @since 0.2
 *
 * @return int Seconds.
 */
function ls_github_check_ttl() {
	$ttl = 12 * HOUR_IN_SECONDS;
	if ( function_exists( 'apply_filters' ) ) {
		$ttl = (int) apply_filters( 'ls_github_check_ttl', $ttl );
	}
	if ( $ttl < MINUTE_IN_SECONDS ) {
		$ttl = 12 * HOUR_IN_SECONDS;
	}
	return $ttl;
}

/**
 * Filters the `update_core` site transient with GitHub data.
 *
 * Runs on read, so a stale/foreign payload left by the legacy
 * api.wordpress.org check can never hide a LESS release.
 *
 * @since 0.2
 *
 * @param mixed $value Current transient value.
 * @return object Transient value with the GitHub offer.
 */
function ls_filter_update_core( $value ) {
	if ( function_exists( 'wp_installing' ) && wp_installing() ) {
		return $value;
	}

	$force = isset( $_GET['force-check'] ) && '1' === (string) $_GET['force-check'];

	$installed = defined( 'LS_VERSION' ) ? (string) LS_VERSION : '0.1';
	$needs_refresh = true;

	if ( is_object( $value ) && isset( $value->updates, $value->last_checked ) && is_array( $value->updates ) ) {
		$version_ok = ! isset( $value->ls_version_checked ) || (string) $value->ls_version_checked === $installed;
		$fresh      = isset( $value->last_checked ) && ( ls_github_check_ttl() > ( time() - (int) $value->last_checked ) );
		if ( $version_ok && $fresh && ! $force ) {
			$needs_refresh = false;
		}
	}

	if ( ! $needs_refresh ) {
		return $value;
	}

	$fresh_value = ls_get_update_core_transient( $force );

	// Preserve translations sub-node when the legacy check stored some.
	if ( is_object( $value ) && isset( $value->translations ) && ! isset( $fresh_value->translations ) ) {
		$fresh_value->translations = $value->translations;
	}

	// Persist so the next read is fresh (avoids hitting the API when the
	// stored payload is stale, e.g. while GitHub is unreachable).
	if ( function_exists( 'set_site_transient' ) ) {
		set_site_transient( 'update_core', $fresh_value );
	}

	return $fresh_value;
}

/**
 * Refreshes the `update_core` transient from GitHub.
 *
 * Hooked late on the `wp_version_check` cron so it overwrites any payload
 * left by the legacy WordPress.org check.
 *
 * @since 0.2
 */
function ls_github_version_check() {
	if ( function_exists( 'wp_installing' ) && wp_installing() ) {
		return;
	}

	$transient = ls_get_update_core_transient( false );

	if ( function_exists( 'set_site_transient' ) ) {
		set_site_transient( 'update_core', $transient );
	}
}

/**
 * Blocks the legacy WordPress.org core phone-home.
 *
 * LESS is independent: core version-checks and checksum lookups go to the
 * GitHub repository instead. Plugin/theme checks are left untouched.
 *
 * @since 0.2
 *
 * @param false|array|WP_Error $pre  Short-circuit value.
 * @param array                $args HTTP request args.
 * @param string               $url  Request URL.
 * @return false|array|WP_Error
 */
function ls_block_wporg_core_requests( $pre, $args, $url ) {
	if ( ! is_string( $url ) || '' === $url ) {
		return $pre;
	}

	if ( false !== strpos( $url, 'api.wordpress.org/core/version-check' )
		|| false !== strpos( $url, 'api.wordpress.org/core/checksums' )
	) {
		if ( class_exists( 'WP_Error' ) ) {
			return new WP_Error(
				'ls_core_updates_via_github',
				__( 'LESS core updates are served from the GitHub repository.' )
			);
		}
	}

	return $pre;
}

// Read-time override: always serve the GitHub offer.
add_filter( 'site_transient_update_core', 'ls_filter_update_core', 20 );
add_filter( 'transient_update_core', 'ls_filter_update_core', 20 );

// Cron-time persistence: overwrite legacy payload after it runs.
add_action( 'wp_version_check', 'ls_github_version_check', 20 );

// Stop phoning api.wordpress.org for core version/checksums.
add_filter( 'pre_http_request', 'ls_block_wporg_core_requests', 10, 3 );
