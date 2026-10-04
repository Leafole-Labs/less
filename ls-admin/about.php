<?php
/**
 * About This Version administration panel.
 *
 * @package LESS
 * @subpackage Administration
 */

/** LESS Administration Bootstrap */
require_once __DIR__ . '/admin.php';

// Used in the HTML title tag.
/* translators: Page title of the About LESS page in the admin. */
$title = _x( 'About', 'page title' );

$display_major_version = LS_VERSION;
$version_text          = LS_NAME . ' ' . LS_VERSION;

require_once ABSPATH . 'ls-admin/admin-header.php';
?>
	<div class="wrap about__container">

		<div class="about__header">
			<div class="about__header-title">
				<img src="<?php echo esc_url( ls_logo_url() ); ?>" alt="<?php echo esc_attr( LS_NAME ); ?>" height="120" width="120" />
				<h1><?php echo esc_html( $version_text ); ?></h1>
				<p class="about__header-subtitle"><?php echo esc_html( sprintf( __( 'An independent platform by %s.' ), LS_DEVELOPER ) ); ?></p>
			</div>
		</div>

		<nav class="about__header-navigation nav-tab-wrapper wp-clearfix" aria-label="<?php esc_attr_e( 'Secondary menu' ); ?>">
			<a href="about.php" class="nav-tab nav-tab-active" aria-current="page"><?php _e( 'About' ); ?></a>
			<a href="credits.php" class="nav-tab"><?php _e( 'Credits' ); ?></a>
			<a href="freedoms.php" class="nav-tab"><?php _e( 'Freedoms' ); ?></a>
			<a href="privacy.php" class="nav-tab"><?php _e( 'Privacy' ); ?></a>
			<a href="contribute.php" class="nav-tab"><?php _e( 'Get Involved' ); ?></a>
		</nav>

		<div class="about__section">
			<div class="column is-left-padding-zero is-right-padding-zero">
				<h2><?php _e( 'Welcome to LESS' ); ?></h2>
				<p class="is-subheading"><?php _e( 'LESS is an independent publishing platform built by Leafole Labs. It keeps the mature editing, publishing, and site-building tools you rely on while making its own independent decisions about identity, components, and architecture.' ); ?></p>
			</div>
		</div>

		<div class="about__section has-2-columns">
			<div class="column is-vertically-aligned-center is-left-padding-zero">
				<h3><?php _e( 'Editing and site editing you already know' ); ?></h3>
				<p>
					<strong><?php _e( 'Full block editor and site editing support.' ); ?></strong><br />
					<?php _e( 'LESS keeps the block editor, the visual site editor, block themes, templates, and global styles fully functional. Content and design teams can keep working the way they are used to.' ); ?>
				</p>
			</div>
			<div class="column is-vertically-aligned-center is-right-padding-zero">
				<div class="about__image">
					<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
						<path fill="#1e1e1e" d="M32 15.5H16v3h16v-3ZM16 22h16v3H16v-3ZM28 28.5H16v3h12v-3Z"/>
						<path fill="#1e1e1e" fill-rule="evenodd" d="M34 8H14a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4Zm-20 3h20a1 1 0 0 1 1 1v24a1 1 0 0 1-1 1H14a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>
					</svg>
				</div>
				<h3><?php _e( 'SQLite out of the box' ); ?></h3>
				<p><?php _e( 'LESS runs on SQLite without a separate database server, making local development and small deployments a one-folder affair. MySQL and MariaDB remain supported options.' ); ?></p>
			</div>
		</div>

		<div class="about__section has-2-columns">
			<div class="column is-vertically-aligned-center is-left-padding-zero">
				<div class="about__image">
					<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
						<path fill="#1e1e1e" fill-rule="evenodd" d="M24 5a19 19 0 1 0 0 38 19 19 0 0 0 0-38Zm2.5 15a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM14.5 24h10l-6 7H11v-7h3.5Zm9 0h10l-6 7h-4l-6-7H23.5Z" clip-rule="evenodd"/>
					</svg>
				</div>
				<h3><?php _e( 'A home of its own' ); ?></h3>
				<p><?php _e( 'LESS has its own identity, its own administrative directory, its own configuration, and its own development roadmap. Third-party product names and services are not referenced in the product surfaces.' ); ?></p>
			</div>
			<div class="column is-vertically-aligned-center is-right-padding-zero">
				<h3><?php _e( 'Independent by design' ); ?></h3>
				<p>
					<strong><?php _e( 'Remote services are not required.' ); ?></strong><br />
					<?php _e( 'LESS removes third-party update services, external avatar lookups, remote publishing endpoints, and other network dependencies by default. Your platform does not phone home.' ); ?>
				</p>
			</div>
		</div>

		<div class="about__section has-2-columns is-wider-left has-subtle-background-color is-feature">
			<h3 class="is-section-header"><?php _e( 'Publishing with confidence' ); ?></h3>
			<div class="column">
				<p>
					<?php
					printf(
						/* translators: %s: Number of revisions. */
						__( 'LESS keeps a bounded set of post revisions (currently: %s per post) so you always have a recent history to fall back on without unbounded database growth.' ),
						'<code>' . esc_html( ls_get_max_revisions() ) . '</code>'
					);
					?>
				</p>
			</div>
			<div class="column aligncenter">
				<div class="about__image">
					<a href="<?php echo esc_url( admin_url( 'options-general.php?page=options-less' ) ); ?>" class="button button-primary button-hero"><?php _e( 'Configure LESS' ); ?></a>
				</div>
			</div>
		</div>

		<hr class="is-large" />

		<div class="about__section has-2-columns">
			<div class="column is-left-padding-zero">
				<h3>
					<a href="<?php echo esc_url( LS_WEBSITE ); ?>">
						<?php echo esc_html( LS_DEVELOPER ); ?>
					</a>
				</h3>
				<p><?php _e( 'Learn more about LESS and its development at the Leafole Labs website.' ); ?></p>
			</div>
			<div class="column is-right-padding-zero">
				<h3>
					<a href="<?php echo esc_url( LS_REPOSITORY ); ?>">
						<?php _e( 'LESS repository' ); ?>
					</a>
				</h3>
				<p>
					<?php
					printf(
						/* translators: %s: LESS name. */
						__( 'The LESS source is developed openly, and contributions, issues, and ideas are welcome at the %s repository.' ),
						LS_NAME
					);
					?>
				</p>
			</div>
		</div>

		<hr class="is-large" />

		<div class="return-to-dashboard">
			<?php
			printf(
				'<a href="%1$s">%2$s</a>',
				esc_url( self_admin_url() ),
				is_blog_admin() ? __( 'Go to Dashboard &rarr; Home' ) : __( 'Go to Dashboard' )
			);
			?>
		</div>
	</div>

<?php require_once ABSPATH . 'ls-admin/admin-footer.php'; ?>