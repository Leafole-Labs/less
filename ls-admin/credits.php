<?php
/**
 * Credits administration panel.
 *
 * @package LESS
 * @subpackage Administration
 */

/** LESS Administration Bootstrap */
require_once __DIR__ . '/admin.php';

// Used in the HTML title tag.
$title = __( 'Credits' );

require_once ABSPATH . 'ls-admin/admin-header.php';
?>
<div class="wrap about__container">

	<div class="about__header">
		<div class="about__header-title">
			<h1>
				<?php _e( 'Credits' ); ?>
			</h1>
		</div>

		<div class="about__header-text">
			<?php _e( 'Base and fork attribution' ); ?>
		</div>
	</div>

	<nav class="about__header-navigation nav-tab-wrapper wp-clearfix" aria-label="<?php esc_attr_e( 'Secondary menu' ); ?>">
		<a href="about.php" class="nav-tab"><?php _e( 'What&#8217;s New' ); ?></a>
		<a href="credits.php" class="nav-tab nav-tab-active" aria-current="page"><?php _e( 'Credits' ); ?></a>
		<a href="freedoms.php" class="nav-tab"><?php _e( 'Freedoms' ); ?></a>
		<a href="privacy.php" class="nav-tab"><?php _e( 'Privacy' ); ?></a>
		<a href="contribute.php" class="nav-tab"><?php _e( 'Get Involved' ); ?></a>
	</nav>

	<div class="about__section has-1-column has-gutters">
		<div class="column aligncenter">
			<p>
				<?php
				printf(
					/* translators: 1: https://wordpress.org/about/ */
					__( 'LESS is built on the open source WordPress project: a <a href="%1$s">worldwide team</a> of passionate individuals created and maintain the code that powers LESS.' ),
					__( 'https://wordpress.org/about/' )
				);
				?>
				<br />
				<a href="<?php echo esc_url( LS_REPOSITORY ); ?>"><?php _e( 'Get involved in LESS.' ); ?></a>
			</p>
		</div>
	</div>

	<hr class="is-large" />

	<div class="about__section has-2-columns">
		<div class="column is-left-padding-zero">
			<h3><?php _e( 'Base' ); ?></h3>
			<p>
				<a href="<?php echo esc_url( __( 'https://make.wordpress.org/core/tag/dev-notes+7-1/' ) ); ?>"><?php _e( 'base' ); ?></a>
			</p>
			<p><?php _e( 'The upstream base LESS is forked from.' ); ?></p>
		</div>
		<div class="column is-right-padding-zero">
			<h3><?php _e( 'Fork' ); ?></h3>
			<p>
				<a href="<?php echo esc_url( __( 'https://leafole.dev/rfonte/' ) ); ?>">rfonte5748</a>
			</p>
			<p><?php _e( 'The person who made the fork.' ); ?></p>
		</div>
	</div>
</div>
<?php

require_once ABSPATH . 'ls-admin/admin-footer.php';
