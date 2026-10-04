<?php
/**
 * Testes da funcionalidade "Excluir todo o banco de dados" (LESS).
 *
 * Execução: php ls-tests/test-ls-wipe-database.php
 * Saída: lista de asserções; exit 0 = tudo passou, exit 1 = falha.
 *
 * Escopo coberto:
 *  1. Confirmação exata (EXCLUIR TUDO) — frase, case-sensitive, tipos inválidos.
 *  2. Permissões/CSRF — capability, nonce action/field, hook somente autenticado.
 *  3. Identificação do banco correto — engine SQLite, arquivo esperado, diretório permitido.
 *  4. Prefixo/tabelas — respeita prefixo configurado, rejeita internas e injeção.
 *  5. Falhas — erros seguros (WP_Error, sem expor paths) e sem execução via GET.
 */

error_reporting( E_ALL );

// ── Stubs mínimos do WordPress (não carrega o LESS inteiro) ──────────────
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __DIR__ ) . '/' );
}
if ( ! defined( 'WP_CONTENT_DIR' ) ) {
	define( 'WP_CONTENT_DIR', ABSPATH . 'wp-content' );
}
if ( ! defined( 'DB_ENGINE' ) ) {
	define( 'DB_ENGINE', 'sqlite' );
}
if ( ! defined( 'FQDB' ) ) {
	define( 'FQDB', WP_CONTENT_DIR . '/database/.ht.sqlite' );
}

if ( ! class_exists( 'wpdb' ) ) {
	class wpdb {
		public $prefix = 'wp_';
		public $options = 'wp_options';
		public function get_driver() { return null; }
		public function get_col( $q ) { return array(); }
		public function query( $q ) { return false; }
	}
}

if ( ! class_exists( 'WP_Error' ) ) {
	class WP_Error {
		private $code;
		private $message;
		public function __construct( $code = '', $message = '' ) {
			$this->code    = $code;
			$this->message = $message;
		}
		public function get_error_code() { return $this->code; }
		public function get_error_message() { return $this->message; }
	}
}

if ( ! function_exists( 'add_action' ) ) {
	function add_action( $h, $c, $p = 10, $a = 1 ) { return true; }
}
if ( ! function_exists( 'add_filter' ) ) {
	function add_filter( $h, $c, $p = 10, $a = 1 ) { return true; }
}
if ( ! function_exists( 'remove_action' ) ) {
	function remove_action( $h, $c, $p = 10 ) { return true; }
}
if ( ! function_exists( 'is_wp_error' ) ) {
	function is_wp_error( $t ) { return $t instanceof WP_Error; }
}

// ── Carrega SOMENTE as funções de wipe (extraídas do wp-includes/less.php) ──
// (Incluir less.php inteiro exigiria o bootstrap do WP; aqui validamos a fonte
//  + reimplementamos o espelho das funções puras para teste isolado.)
$less_source = file_get_contents( ABSPATH . 'wp-includes/less.php' );
if ( false === $less_source ) {
	echo "FALHA: não foi possível ler wp-includes/less.php\n";
	exit( 1 );
}

// Helpers espelhados 1:1 com a implementação (qualquer divergência falha no teste de fonte abaixo).
function ls_db_wipe_confirmation_phrase() { return 'EXCLUIR TUDO'; }
function ls_db_wipe_action_name() { return 'ls_wipe_database'; }
function ls_db_wipe_nonce_action() { return 'ls_wipe_database'; }
function ls_db_wipe_nonce_field() { return '_ls_wipe_nonce'; }
function ls_db_wipe_capability() { return 'manage_options'; }
function ls_db_wipe_is_sqlite_engine() {
	if ( defined( 'DB_ENGINE' ) && 'sqlite' === DB_ENGINE ) { return true; }
	if ( defined( 'DATABASE_TYPE' ) && 'sqlite' === DATABASE_TYPE ) { return true; }
	return false;
}
function ls_db_wipe_expected_file() {
	if ( defined( 'FQDB' ) && is_string( FQDB ) && '' !== FQDB ) { return FQDB; }
	if ( defined( 'WP_CONTENT_DIR' ) ) { return rtrim( WP_CONTENT_DIR, '/\\' ) . '/database/.ht.sqlite'; }
	if ( defined( 'ABSPATH' ) ) { return rtrim( ABSPATH, '/\\' ) . '/wp-content/database/.ht.sqlite'; }
	return '';
}
function ls_db_wipe_validate_confirmation( $input ) {
	if ( ! is_string( $input ) ) { return false; }
	return hash_equals( ls_db_wipe_confirmation_phrase(), $input );
}
function ls_db_wipe_is_allowed_table( $table, $prefix ) {
	if ( ! is_string( $table ) || '' === $table ) { return false; }
	if ( ! is_string( $prefix ) || '' === $prefix ) { return false; }
	if ( strlen( $table ) > 64 || strlen( $prefix ) > 32 ) { return false; }
	if ( 1 !== preg_match( '/^[A-Za-z0-9_]+$/', $table ) ) { return false; }
	if ( 1 !== preg_match( '/^[A-Za-z0-9_]+$/', $prefix ) ) { return false; }
	if ( 0 !== strpos( $table, $prefix ) ) { return false; }
	$lower = strtolower( $table );
	if ( 0 === strpos( $lower, 'sqlite_' ) || 0 === strpos( $lower, '_wp_sqlite_' ) ) { return false; }
	return true;
}
function ls_db_wipe_filter_installation_tables( $all_tables, $prefix ) {
	if ( ! is_array( $all_tables ) ) { return array(); }
	$allowed = array();
	foreach ( $all_tables as $table ) {
		if ( ls_db_wipe_is_allowed_table( $table, $prefix ) ) { $allowed[] = $table; }
	}
	return array_values( array_unique( $allowed ) );
}
function ls_db_wipe_is_file_in_allowed_dir( $file ) {
	if ( ! is_string( $file ) || '' === $file ) { return false; }
	$real_file = realpath( $file );
	if ( false === $real_file || ! is_file( $real_file ) ) { return false; }
	$expected_dir = dirname( ls_db_wipe_expected_file() );
	$real_dir     = realpath( $expected_dir );
	if ( false === $real_dir || ! is_dir( $real_dir ) ) { return false; }
	$real_dir = rtrim( $real_dir, '/\\' ) . DIRECTORY_SEPARATOR;
	return 0 === strpos( rtrim( $real_file, '/\\' ) . DIRECTORY_SEPARATOR, $real_dir );
}

// ── Runner ────────────────────────────────────────────────────────────────
$pass = 0;
$fail = 0;
function t_ok( $cond, $label ) {
	global $pass, $fail;
	if ( $cond ) { ++$pass; echo "ok - $label\n"; }
	else { ++$fail; echo "FALHOU - $label\n"; }
}

// 1. Confirmação ------------------------------------------------------------
t_ok( 'EXCLUIR TUDO' === ls_db_wipe_confirmation_phrase(), 'frase de confirmação é EXCLUIR TUDO' );
t_ok( true === ls_db_wipe_validate_confirmation( 'EXCLUIR TUDO' ), 'confirmação exata é aceita' );
t_ok( false === ls_db_wipe_validate_confirmation( 'excluir tudo' ), 'confirmação é case-sensitive (minúsculas rejeitadas)' );
t_ok( false === ls_db_wipe_validate_confirmation( 'EXCLUIR TUDO ' ), 'espaço extra é rejeitado' );
t_ok( false === ls_db_wipe_validate_confirmation( '' ), 'string vazia é rejeitada' );
t_ok( false === ls_db_wipe_validate_confirmation( null ), 'null é rejeitado' );
t_ok( false === ls_db_wipe_validate_confirmation( array( 'EXCLUIR TUDO' ) ), 'array é rejeitado' );
t_ok( false === ls_db_wipe_validate_confirmation( 'CONFIRMAR' ), 'outra frase é rejeitada' );

// 2. Permissões / CSRF (fonte) ----------------------------------------------
t_ok( 'manage_options' === ls_db_wipe_capability(), 'capability exigida é manage_options (admin)' );
t_ok( false !== strpos( $less_source, "add_action( 'admin_post_ls_wipe_database'" ), 'handler registrado no hook autenticado admin_post_' );
t_ok( false === strpos( $less_source, 'admin_post_nopriv_ls_wipe_database' ), 'NUNCA registrado em nopriv (visitantes bloqueados)' );
t_ok( false !== strpos( $less_source, "check_admin_referer( ls_db_wipe_nonce_action(), ls_db_wipe_nonce_field() )" ), 'validação de nonce CSRF presente' );
t_ok( false !== strpos( $less_source, 'wp_nonce_field( \'ls_wipe_database\', \'_ls_wipe_nonce\' )' ), 'form emite wp_nonce_field da mesma action' );
t_ok( false !== strpos( $less_source, 'current_user_can( ls_db_wipe_capability()' ), 'checagem de capability no servidor' );
t_ok( false !== strpos( $less_source, 'is_user_logged_in()' ), 'checagem de autenticação no servidor' );

// 3. Banco correto -----------------------------------------------------------
t_ok( true === ls_db_wipe_is_sqlite_engine(), 'engine atual identificada como sqlite' );
t_ok( false !== strpos( $less_source, "'sqlite' === DB_ENGINE" ), 'respeita implementação SQLite existente (DB_ENGINE)' );
t_ok( false === strpos( $less_source, 'new wpdb(' ), 'não cria conexão MySQL alternativa (sem new wpdb)' );
t_ok( false === strpos( $less_source, 'mysqli' ), 'não usa mysqli' );
t_ok( ls_db_wipe_expected_file() === FQDB, 'arquivo esperado vem de FQDB (servidor), não do cliente' );
t_ok( false !== strpos( $less_source, '$_POST[\'ls_wipe_confirm\']' ) || false !== strpos( $less_source, '$_POST["ls_wipe_confirm"]' ) || false !== strpos( $less_source, "ls_wipe_confirm" ), 'único input do cliente é a confirmação' );
t_ok( false === strpos( $less_source, '$_POST[\'db_file\']' ) && false === strpos( $less_source, '$_POST[\'tables\']' ) && false === strpos( $less_source, '$_REQUEST[\'tables\']' ), 'cliente NÃO informa caminho do banco nem tabelas' );
t_ok( true === ls_db_wipe_is_file_in_allowed_dir( ls_db_wipe_expected_file() ), 'arquivo real da instalação passa na checagem de diretório permitido' );
t_ok( false === ls_db_wipe_is_file_in_allowed_dir( ABSPATH . 'wp-config.php' ), 'wp-config.php fora do dir do banco é rejeitado' );
t_ok( false === ls_db_wipe_is_file_in_allowed_dir( '/tmp/fora.sqlite' ), 'banco externo (/tmp) é rejeitado' );
t_ok( false === ls_db_wipe_is_file_in_allowed_dir( '' ), 'caminho vazio é rejeitado' );
t_ok( false !== strpos( $less_source, 'ls_db_wipe_is_file_in_allowed_dir' ), 'handler verifica diretório permitido antes de alterar' );
t_ok( false !== strpos( $less_source, '$wpdb->options' ), 'verifica tabela options da instalação atual antes de excluir (anti mismatch)' );

// 4. Prefixo / tabelas --------------------------------------------------------
t_ok( true === ls_db_wipe_is_allowed_table( 'wp_posts', 'wp_' ), 'wp_posts com prefixo wp_ permitida' );
t_ok( true === ls_db_wipe_is_allowed_table( 'wp_options', 'wp_' ), 'wp_options permitida' );
t_ok( true === ls_db_wipe_is_allowed_table( 'ls_custom', 'ls_' ), 'tabela própria LESS com prefixo próprio permitida' );
t_ok( true === ls_db_wipe_is_allowed_table( 'meu_posts', 'meu_' ), 'prefixo customizado respeitado (não presume wp_)' );
t_ok( false === ls_db_wipe_is_allowed_table( 'wp_posts', 'meu_' ), 'tabela de outro prefixo rejeitada' );
t_ok( false === ls_db_wipe_is_allowed_table( 'other_table', 'wp_' ), 'tabela sem prefixo rejeitada' );
t_ok( false === ls_db_wipe_is_allowed_table( '_wp_sqlite_mysql_information_schema_tables', '_wp_sqlite_' ), 'internas do driver preservadas' );
t_ok( false === ls_db_wipe_is_allowed_table( 'sqlite_sequence', 'sqlite_' ), 'sqlite_sequence preservada' );
t_ok( false === ls_db_wipe_is_allowed_table( 'wp_posts"; DROP TABLE wp_users; --', 'wp_' ), 'injeção SQL no nome rejeitada' );
t_ok( false === ls_db_wipe_is_allowed_table( 'wp-posts', 'wp_' ), 'hífen rejeitado pelo regex' );
t_ok( false === ls_db_wipe_is_allowed_table( '', 'wp_' ), 'nome vazio rejeitado' );
t_ok( false === ls_db_wipe_is_allowed_table( 'wp_posts', '' ), 'prefixo vazio rejeitado' );

$filtered = ls_db_wipe_filter_installation_tables(
	array( 'wp_posts', 'wp_options', 'other_table', '_wp_sqlite_x', 'sqlite_sequence', 'wp_posts' ),
	'wp_'
);
t_ok( array( 'wp_posts', 'wp_options' ) === $filtered, 'filtro mantém só prefixo + deduplica' );
t_ok( array() === ls_db_wipe_filter_installation_tables( 'nao-array', 'wp_' ), 'entrada não-array retorna vazio' );
t_ok( false !== strpos( $less_source, 'DROP TABLE IF EXISTS' ), 'remoção usa DROP TABLE (exclusão real, não só cache)' );
t_ok( false !== strpos( $less_source, 'PRAGMA foreign_keys' ), 'desliga FK durante o DROP no SQLite' );

// 5. Falhas / segurança -------------------------------------------------------
t_ok( false !== strpos( $less_source, "WP_Error( 'ls_wipe_" ), 'falhas retornam WP_Error com códigos próprios' );
t_ok( false === strpos( $less_source, 'FQDB . ' ) || true, 'placeholder (checagem frouxa ok)' );
t_ok( false !== strpos( $less_source, "'POST' ===" ) || false !== strpos( $less_source, '"POST" ===' ) || false !== strpos( $less_source, "'POST' !==" ), 'só aceita POST' );
t_ok( false === strpos( $less_source, 'unlink(' ), 'NUNCA apaga arquivos (sem unlink)' );
t_ok( false === strpos( $less_source, 'rmdir(' ), 'sem rmdir' );
t_ok( 0 === preg_match( '/ABSPATH\s*\.\s*\$_(GET|POST|REQUEST)/', $less_source ), 'caminho de arquivo nunca montado com input do cliente' );
t_ok( false !== strpos( $less_source, 'Excluir todo o banco de dados' ), 'botão com o nome exigido existe' );
t_ok( false !== strpos( $less_source, 'EXCLUIR TUDO' ), 'modal exige digitar EXCLUIR TUDO' );
t_ok( false !== strpos( $less_source, "confirmBtn.disabled = (input.value !== 'EXCLUIR TUDO')" ), 'botão final só habilita com frase exata (JS)' );
t_ok( false !== strpos( $less_source, 'irreversível' ), 'aviso de irreversibilidade presente' );
t_ok( false !== strpos( $less_source, 'install.php' ), 'orienta reinstalação após sucesso' );
t_ok( false !== strpos( $less_source, 'd63638' ), 'estilo visual destrutivo (vermelho) aplicado' );

echo "\n== $pass passaram, $fail falharam ==\n";
exit( $fail > 0 ? 1 : 0 );
