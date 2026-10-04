<?php

use WPCoder\Dashboard\FieldHelper;

defined( 'ABSPATH' ) || exit;

?>

    <div class="wowp-snippets__header">
        <h3 class="wowp-snippets__header-title">Admin Interface Tweaks</h3>
        <p class="wowp-snippets__header-description">Streamline the WordPress admin experience.</p>
    </div>

<?php

$snippets = [
	'disable_screen_options' => [
		'Disable ‘Screen Options’ Tab',
		'Remove the “Screen Options” tab from admin pages.',
	],

	'disable_welcome_panel' => [
		'Disable Welcome Panel',
		'Hide the welcome panel on the dashboard for all users.',
	],
	'enable_duplication' => [
		'Content Duplication',
		'Allow duplicating posts from the admin panel.',
	],
];

self::create_options( $snippets );

?>
	<div class="wowp-snippet__list">
		<div class="wowp-snippet__item">
			<div class="wowp-snippet__item-header">
				<label for="disable_admin_bar">Disable The WP Admin Bar</label>
				<p class="wowp-snippet__item-description">Hide the admin bar for all users on the frontend.</p>
			</div>
			<div class="wowp-field has-checkbox">
				<label class="switch">
					<?php self::field( 'checkbox', 'disable_admin_bar' ); ?>
					<span class="slider"></span>
				</label>
			</div>
			<div class="wowp-snippet__item-expand is-hidden">
				<p class="wowp-snippet__expand-title">Show the sidebar for users:</p>
				<div class="wowp-fields__group">
					<?php foreach ( FieldHelper::user_roles() as $key => $value ) :
						if ( $key === 'all' ) {
							continue;
						}
						?>
						<div class="wowp-field has-checkbox">
							<span class="label"><?php echo esc_html( $value ); ?></span>
							<label class="switch">
								<?php self::field( 'checkbox', 'disable_admin_bar_user_' . $key ); ?>
								<span class="slider"></span>
							</label>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>

<?php
