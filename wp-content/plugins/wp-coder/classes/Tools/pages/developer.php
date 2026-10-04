<?php

defined( 'ABSPATH' ) || exit;

?>

<div class="wowp-snippets__header">
	<h3 class="wowp-snippets__header-title">Developer / Debug Tools</h3>
	<p class="wowp-snippets__header-description">Advanced utilities for administrators and developers to test, debug, and quickly manage site environments.</p>
</div>

<div class="wowp-snippet__list">

	<div class="wowp-snippet__item">
		<div class="wowp-snippet__item-header">
			<label for="show_page_debug_info">Show Page Debug Info</label>
			<p class="wowp-snippet__item-description">
				Display technical info for the current request in the Admin Bar (template, query type, object, body classes). Admins only.
			</p>
		</div>
		<div class="wowp-field has-checkbox">
			<label class="switch">
				<?php self::field( 'checkbox', 'show_page_debug_info' ); ?>
				<span class="slider"></span>
			</label>
		</div>
	</div>

	<div class="wowp-snippet__item">
		<div class="wowp-snippet__item-header">
			<label for="theme_switcher">Theme Switcher</label>
			<p class="wowp-snippet__item-description">
				Quickly switch between installed themes directly from the admin bar.
			</p>
		</div>
		<div class="wowp-field has-checkbox">
			<label class="switch">
				<?php self::field( 'checkbox', 'theme_switcher' ); ?>
				<span class="slider"></span>
			</label>
		</div>
	</div>


</div>
