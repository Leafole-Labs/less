<?php

defined( 'ABSPATH' ) || exit;

?>

    <div class="wowp-snippets__header">
        <h3 class="wowp-snippets__header-title">Login & User Access</h3>
        <p class="wowp-snippets__header-description">Enhance and control access to the WordPress login page.</p>
    </div>

<?php

$snippets = [
	'disable_login_language_dropdown' => [
		'Disable Login Page Language Switcher',
		'Remove the language switcher from the login screen.',
	],

	'disable_login_by_email' => [
		'Disable Login by Email',
		'Allow users to log in using only their username.',
	],
	'disable_admin_pass_reset_email' => [
		'Disable Admin Password Reset Emails',
		'Prevent password reset emails from being sent.',
	],
];

self::create_options( $snippets );

?>
	<div class="wowp-snippet__list">

		<div class="wowp-snippet__item">
			<div class="wowp-snippet__item-header">
				<label for="change_logo_on_site_icon">Change Logo on Login Page</label>
				<p class="wowp-snippet__item-description">Replace the default WordPress logo with your own site icon. Go to the <a href="<?php
					echo esc_url( get_admin_url() ); ?>customize.php">customizer</a> to set or change your site icon.</p>
			</div>
			<div class="wowp-field has-checkbox">
				<label class="switch">
					<?php self::field( 'checkbox', 'change_logo_on_site_icon' ); ?>
					<span class="slider"></span>
				</label>
			</div>
		</div>

		<div class="wowp-snippet__item">
			<div class="wowp-snippet__item-header">
				<label for="change_logo_link">Change URL for Logo on Login Page</label>
				<p class="wowp-snippet__item-description">Redirect the login logo to your homepage.</p>
			</div>
			<div class="wowp-field has-checkbox">
				<label class="switch">
					<?php self::field( 'checkbox', 'change_logo_link' ); ?>
					<span class="slider"></span>
				</label>
			</div>
		</div>

		<div class="wowp-snippet__item">
			<div class="wowp-snippet__item-header">
				<label for="change_redirect_after_login">Change Redirect After Login</label>
				<p class="wowp-snippet__item-description">Set a custom redirect URL after login.</p>
			</div>
			<div class="wowp-field has-checkbox">
				<label class="switch">
					<?php self::field( 'checkbox', 'change_redirect_after_login' ); ?>
					<span class="slider"></span>
				</label>
			</div>
			<div class="wowp-snippet__item-expand is-hidden">
				<div class="wowp-field">
					<label>
						<span class="label">Redirect to: <?php echo esc_url( get_site_url() ); ?>/</span>
						<?php self::field( 'text', 'change_redirect_login_link', '', 'account' ); ?>
					</label>
				</div>
			</div>
		</div>

		<div class="wowp-snippet__item">
			<div class="wowp-snippet__item-header">
				<label for="change_redirect_after_logout">Change Redirect After Logout</label>
				<p class="wowp-snippet__item-description">Set a custom redirect URL after logout.</p>
			</div>
			<div class="wowp-field has-checkbox">
				<label class="switch">
					<?php self::field( 'checkbox', 'change_redirect_after_logout' ); ?>
					<span class="slider"></span>
				</label>
			</div>
			<div class="wowp-snippet__item-expand is-hidden">
				<div class="wowp-field">
					<label>
						<span class="label">Redirect to: <?php echo esc_url( get_site_url() ); ?>/</span>
						<?php self::field( 'text', 'change_redirect_logout_link', '', 'visit-again' ); ?>
					</label>
				</div>
			</div>
		</div>

	</div>



<?php

