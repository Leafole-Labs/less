<?php
/**
 * Install plugin administration panel.
 *
 * @package WordPress
 * @subpackage Administration
 */
// TODO: Route this page via a specific iframe handler instead of the do_action below.
if ( ! defined( 'IFRAME_REQUEST' ) && isset( $_GET['tab'] ) && ( 'plugin-information' === $_GET['tab'] ) ) {
	define( 'IFRAME_REQUEST', true );
}

/**
 * WordPress Administration Bootstrap.
 */
require_once __DIR__ . '/admin.php';

if ( ! current_user_can( 'install_plugins' ) ) {
	wp_die( __( 'Sorry, you are not allowed to install extensions on this site.' ) );
}

if ( is_multisite() && ! is_network_admin() ) {
	wp_redirect( network_admin_url( 'plugin-install.php' ) );
	exit;
}

$wp_list_table = _get_list_table( 'WP_Plugin_Install_List_Table' );
$pagenum       = $wp_list_table->get_pagenum();

if ( ! empty( $_REQUEST['_wp_http_referer'] ) ) {
	$location = remove_query_arg( '_wp_http_referer', wp_unslash( $_SERVER['REQUEST_URI'] ) );

	if ( ! empty( $_REQUEST['paged'] ) ) {
		$location = add_query_arg( 'paged', (int) $_REQUEST['paged'], $location );
	}

	wp_redirect( $location );
	exit;
}

$wp_list_table->prepare_items();

/**
 * WP_Plugin_Install_List_Table::prepare_items() populates these globals, which
 * are used throughout the rest of this file.
 *
 * @global string $tab   The current tab of the Install Plugins screen.
 * @global int    $paged The current page number of the plugins list.
 */
global $tab, $paged;

$total_pages = $wp_list_table->get_pagination_arg( 'total_pages' );

if ( $pagenum > $total_pages && $total_pages > 0 ) {
	wp_redirect( add_query_arg( 'paged', $total_pages ) );
	exit;
}

// Used in the HTML title tag.
$title       = __( 'Community Store' );
$parent_file = 'plugins.php';

wp_enqueue_script( 'plugin-install' );
if ( 'plugin-information' !== $tab ) {
	add_thickbox();
}

$body_id = $tab;

wp_enqueue_script( 'updates' );

/**
 * Fires before each tab on the Install Plugins screen is loaded.
 *
 * The dynamic portion of the hook name, `$tab`, allows for targeting
 * individual tabs.
 *
 * Possible hook names include:
 *
 *  - `install_plugins_pre_beta`
 *  - `install_plugins_pre_favorites`
 *  - `install_plugins_pre_featured`
 *  - `install_plugins_pre_plugin-information`
 *  - `install_plugins_pre_popular`
 *  - `install_plugins_pre_recommended`
 *  - `install_plugins_pre_search`
 *  - `install_plugins_pre_upload`
 *
 * @since 2.7.0
 */
do_action( "install_plugins_pre_{$tab}" );

/*
 * Call the pre upload action on every non-upload plugin installation screen
 * because the form is always displayed on these screens.
 */
if ( 'upload' !== $tab ) {
	/** This action is documented in ls-admin/plugin-install.php */
	do_action( 'install_plugins_pre_upload' );
}

get_current_screen()->add_help_tab(
	array(
		'id'      => 'overview',
		'title'   => __( 'Overview' ),
		'content' =>
				'<p>' . __( 'The Community Store brings together extensions created and distributed by the community. Community extensions are developed independently from the core LESS application, and when present in the store they work as an integrated way to extend and customize LESS.' ) . '</p>' .
				'<p>' . __( 'You can find new extensions to install by searching or browsing the store right here in your own Extensions section.' ) . ' <span id="live-search-desc" class="hide-if-no-js">' . __( 'The search results will be updated as you type.' ) . '</span></p>',

	)
);
get_current_screen()->add_help_tab(
	array(
		'id'      => 'adding-plugins',
		'title'   => __( 'Adding Extensions' ),
		'content' =>
				'<p>' . __( 'If you know what you are looking for, Search is your best bet. The Search screen has options to search the Community Store for a particular Term, Author, or Tag. You can also search the store by selecting popular tags. Tags in larger type mean more extensions have been labeled with that tag.' ) . '</p>' .
				'<p>' . __( 'If you just want to get an idea of what&#8217;s available, you can browse Featured and Popular extensions by using the links above the extensions list. These sections rotate regularly.' ) . '</p>' .
				'<p>' . __( 'You can also browse a user&#8217;s favorite extensions, by using the Favorites link above the extensions list and entering their community username.' ) . '</p>' .
				'<p>' . __( 'If you want to install an extension that you&#8217;ve downloaded elsewhere, click the Upload Extension button above the extensions list. You will be prompted to upload the .zip package, and once uploaded, you can activate the new extension.' ) . '</p>',
	)
);

get_current_screen()->set_help_sidebar(
	'<p><strong>' . __( 'For more information:' ) . '</strong></p>' .
	'<p>' . sprintf( __( '<a href="%s">Leafole Labs website</a>' ), esc_url( LS_WEBSITE ) ) . '</p>' .
	'<p>' . sprintf( __( '<a href="%s">LESS repository</a>' ), esc_url( LS_REPOSITORY ) ) . '</p>'
);

get_current_screen()->set_screen_reader_content(
	array(
		'heading_views'      => __( 'Filter extensions list' ),
		'heading_pagination' => __( 'Extensions list navigation' ),
		'heading_list'       => __( 'Extensions list' ),
	)
);

/**
 * WordPress Administration Template Header.
 */
require_once ABSPATH . 'ls-admin/admin-header.php';

WP_Plugin_Dependencies::initialize();
WP_Plugin_Dependencies::display_admin_notice_for_unmet_dependencies();
WP_Plugin_Dependencies::display_admin_notice_for_circular_dependencies();
?>
<div class="wrap <?php echo esc_attr( "plugin-install-tab-$tab" ); ?>">
<h1 class="wp-heading-inline">
<?php
echo esc_html( $title );
?>
</h1>

<?php
if ( ! empty( $tabs['upload'] ) && current_user_can( 'upload_plugins' ) ) {
	printf(
		' <a href="%s" class="upload-view-toggle page-title-action"><span class="upload">%s</span><span class="browse">%s</span></a>',
		( 'upload' === $tab ) ? self_admin_url( 'plugin-install.php' ) : self_admin_url( 'plugin-install.php?tab=upload' ),
		__( 'Upload Extension' ),
		__( 'Browse Extensions' )
	);
}
?>

<hr class="wp-header-end">

<?php
/*
 * Output the upload plugin form on every non-upload plugin installation screen, so it can be
 * displayed via JavaScript rather then opening up the devoted upload plugin page.
 */
if ( 'upload' !== $tab ) {
	?>
	<div class="upload-plugin-wrap">
		<?php
		/** This action is documented in ls-admin/plugin-install.php */
		do_action( 'install_plugins_upload', $paged );
		?>
	</div>
	<?php
	$wp_list_table->views();
}

/**
 * Fires after the plugins list table in each tab of the Install Plugins screen.
 *
 * The dynamic portion of the hook name, `$tab`, allows for targeting
 * individual tabs.
 *
 * Possible hook names include:
 *
 *  - `install_plugins_beta`
 *  - `install_plugins_favorites`
 *  - `install_plugins_featured`
 *  - `install_plugins_plugin-information`
 *  - `install_plugins_popular`
 *  - `install_plugins_recommended`
 *  - `install_plugins_search`
 *  - `install_plugins_upload`
 *
 * @since 2.7.0
 *
 * @param int $paged The current page number of the plugins list table.
 */
do_action( "install_plugins_{$tab}", $paged );
?>

	<span class="spinner"></span>
</div>

<?php
wp_print_request_filesystem_credentials_modal();
wp_print_admin_notice_templates();

/**
 * WordPress Administration Template Footer.
 */
require_once ABSPATH . 'ls-admin/admin-footer.php';
