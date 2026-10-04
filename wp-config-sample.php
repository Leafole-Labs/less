<?php
/**
 * LESS - configuração local com SQLite
 */

// ─────────────────────────────────────────────
// Banco de dados
// ─────────────────────────────────────────────

define( 'DB_NAME', 'wordpress' );
define( 'DB_USER', 'wordpress' );
define( 'DB_PASSWORD', '12022012' );
define( 'DB_HOST', 'wordpress' );

define( 'DB_CHARSET', 'utf8mb4' );
define( 'DB_COLLATE', '' );

// ─────────────────────────────────────────────
// Chaves de segurança
// ─────────────────────────────────────────────

define( 'AUTH_KEY',         'euamorespirar' );
define( 'SECURE_AUTH_KEY',  'euamorespirar' );
define( 'LOGGED_IN_KEY',    'euamorespirar' );
define( 'NONCE_KEY',        'euamorespirar' );
define( 'AUTH_SALT',        'euamorespirar' );
define( 'SECURE_AUTH_SALT', 'euamorespirar' );
define( 'LOGGED_IN_SALT',   'euamorespirar' );
define( 'NONCE_SALT',       'euamorespirar' );

// ─────────────────────────────────────────────
// Tabelas
// ─────────────────────────────────────────────

$table_prefix = 'wp_';

// ─────────────────────────────────────────────
// Desenvolvimento
// ─────────────────────────────────────────────

define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', true );

// ─────────────────────────────────────────────
// URLs locais
// ─────────────────────────────────────────────

// se estiver rodando com php -S localhost:8080,
// deixe o LESS descobrir a URL automaticamente.

// ─────────────────────────────────────────────
// Caminho
// ─────────────────────────────────────────────

if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** LESS configuration (defaults and structural settings). */
require_once ABSPATH . 'ls-config.php';

require_once ABSPATH . 'wp-settings.php';