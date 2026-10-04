<?php

defined( 'ABSPATH' ) || exit;

?>

    <div class="wowp-snippets__header">
        <h3 class="wowp-snippets__header-title">Core Functionality</h3>
        <p class="wowp-snippets__header-description">Control WordPress system behaviors.</p>
    </div>

<?php

$snippets = [
	'disable_XML_RPC'       => [
		'Disable XML-RPC',
		'Fully disable XML-RPC functionality.',
	],
	'disable_rest_api' => [
		'Disable WordPress REST API',
		'Prevent public access to the REST API.',
	],
	'disable_automatic_updates' => [
		'Disable Automatic Updates',
		'Turn off all WordPress core updates.',
	],
	'disable_automatic_updates_emails' => [
		'Disable Automatic Updates Emails',
		'Stop email notifications for auto-updates.',
	],
	'disable_emojis' => [
		'Disable Emojis',
		'Prevent WordPress from loading emoji scripts.',
	],

	'disable_wp_shortlink' => [
		'Disable WordPress Shortlink',
		'Remove shortlink meta tag from site head.',
	],


];

self::create_options( $snippets );

?>

	<div class="wowp-snippet__item">
		<div class="wowp-snippet__item-header">
			<label for="change_revisions_control">Change Number of Post Revisions</label>
			<p class="wowp-snippet__item-description">Limit the number of stored revisions per post.</p>
		</div>
		<div class="wowp-field has-checkbox">
			<label class="switch">
				<?php self::field( 'checkbox', 'change_revisions_control' ); ?>
				<span class="slider"></span>
			</label>
		</div>
		<div class="wowp-snippet__item-expand is-hidden">
			<div class="wowp-field">
				<label>
					<span class="label">Number of revisions</span>
					<?php self::field( 'number', 'change_revisions_control_number', 10 ); ?>
				</label>
			</div>
		</div>
	</div>

<?php
