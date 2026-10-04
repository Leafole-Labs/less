<?php
$keys = [];
for ($i = 0; $i < 8; $i++) {
    $keys[] = base64_encode(random_bytes(64));
}
$cfg = '<?php' . PHP_EOL .
'/*** LESS - configuracao local com SQLite (gerado automaticamente) */' . PHP_EOL . PHP_EOL .
'// Banco de dados (SQLite)' . PHP_EOL .
"define( 'DB_ENGINE', 'sqlite' );" . PHP_EOL .
"define( 'DB_NAME', 'wordpress' );" . PHP_EOL .
"define( 'DB_DIR', dirname(__FILE__) . '/wp-content/database' );" . PHP_EOL .
"define( 'DB_FILE', '.ht.sqlite' );" . PHP_EOL . PHP_EOL .
"define( 'DB_CHARSET', 'utf8mb4' );" . PHP_EOL .
"define( 'DB_COLLATE', '' );" . PHP_EOL . PHP_EOL .
'// Chaves de seguranca (geradas aleatoriamente)' . PHP_EOL .
"define( 'AUTH_KEY',         '" . $keys[0] . "' );" . PHP_EOL .
"define( 'SECURE_AUTH_KEY',  '" . $keys[1] . "' );" . PHP_EOL .
"define( 'LOGGED_IN_KEY',    '" . $keys[2] . "' );" . PHP_EOL .
"define( 'NONCE_KEY',        '" . $keys[3] . "' );" . PHP_EOL .
"define( 'AUTH_SALT',        '" . $keys[4] . "' );" . PHP_EOL .
"define( 'SECURE_AUTH_SALT', '" . $keys[5] . "' );" . PHP_EOL .
"define( 'LOGGED_IN_SALT',   '" . $keys[6] . "' );" . PHP_EOL .
"define( 'NONCE_SALT',       '" . $keys[7] . "' );" . PHP_EOL . PHP_EOL .
'// Tabelas' . PHP_EOL .
"\$table_prefix = 'wp_';" . PHP_EOL . PHP_EOL .
'// Desenvolvimento' . PHP_EOL .
"define( 'WP_DEBUG', false );" . PHP_EOL .
"define( 'WP_DEBUG_LOG', false );" . PHP_EOL .
"define( 'WP_DEBUG_DISPLAY', false );" . PHP_EOL . PHP_EOL .
'// Caminho' . PHP_EOL .
"if ( ! defined( 'ABSPATH' ) ) {" . PHP_EOL .
"    define( 'ABSPATH', __DIR__ . '/' );" . PHP_EOL .
"}" . PHP_EOL . PHP_EOL .
"/** LESS configuration (defaults and structural settings). */" . PHP_EOL .
"require_once ABSPATH . 'ls-config.php';" . PHP_EOL . PHP_EOL .
"require_once ABSPATH . 'wp-settings.php';";
file_put_contents('wp-config.php', $cfg);
echo "wp-config.php gerado com sucesso.\n";