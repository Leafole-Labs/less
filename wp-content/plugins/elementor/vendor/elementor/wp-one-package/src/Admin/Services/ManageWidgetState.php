<?php

namespace ElementorOne\Admin\Services;

use ElementorOne\Admin\Helpers\Utils;
use ElementorOne\Common\SupportedPlugins;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class ManageWidgetState {

	public const STATE_NOT_INSTALLED = 'not_installed';
	public const STATE_NOT_ACTIVATED = 'not_activated';
	public const STATE_NOT_CONNECTED = 'not_connected';
	public const STATE_UPDATE_REQUIRED = 'update_required';
	public const STATE_ACTIVE = 'active';

	private static ?array $resolved_cache = null;

	public static function clear_resolved_cache(): void {
		self::$resolved_cache = null;
	}

	public static function is_delegated_to_manage(): bool {
		return (bool) apply_filters( 'elementor_one/manage_dashboard_widget_is_delegated', false );
	}

	public static function is_plugin_installed(): bool {
		return null !== Utils::get_plugin_data( SupportedPlugins::MANAGE );
	}

	public static function resolve(): string {
		return self::resolve_with_meta()['state'];
	}

	public static function resolve_with_meta(): array {
		if ( null !== self::$resolved_cache ) {
			return self::$resolved_cache;
		}

		if ( ! self::is_plugin_installed() ) {
			$state = self::STATE_NOT_INSTALLED;
		} else {
			$plugin_data = Utils::get_plugin_data( SupportedPlugins::MANAGE );

			if ( ! self::is_plugin_active( $plugin_data['_file'] ) ) {
				$state = self::STATE_NOT_ACTIVATED;
			} elseif ( ! Utils::is_plugin_connected( SupportedPlugins::MANAGE ) ) {
				$state = self::STATE_NOT_CONNECTED;
			} else {
				$state = self::is_delegated_to_manage()
					? self::STATE_ACTIVE
					: self::STATE_UPDATE_REQUIRED;
			}
		}

		self::$resolved_cache = [
			'state' => $state,
			'isWidgetDelegated' => self::is_delegated_to_manage(),
		];

		return self::$resolved_cache;
	}

	private static function is_plugin_active( string $plugin_file ): bool {
		if ( ! function_exists( 'is_plugin_active' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

		return is_plugin_active( $plugin_file );
	}
}
