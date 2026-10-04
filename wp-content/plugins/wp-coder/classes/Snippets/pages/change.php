<?php

defined( 'ABSPATH' ) || exit;

?>

<div class="wowp-snippet__list">

    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="change_logo_on_site_icon">Change logo on Login Page</label>
            <p class="wowp-snippet__item-description">Change the default WP logo on Site Icon. Go to the <a href="<?php
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
            <label for="change_logo_link">Change URL for logo on Login Page</label>
            <p class="wowp-snippet__item-description">Change the default wordpress.org URL of the logo to the blog home
                URL.</p>
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
            <p class="wowp-snippet__item-description">Change the redirect URL for all users after Login.</p>
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
            <p class="wowp-snippet__item-description">Change the redirect URL for all users after Logout.</p>
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

    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="change_revisions_control">Change Number of Post Revisions</label>
            <p class="wowp-snippet__item-description">Set the limiting post revisions to reduce Database size.</p>
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

    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="change_oEmbed_size">Change oEmbed Max Width and Height</label>
            <p class="wowp-snippet__item-description">Set the limiting post revisions to reduce Database size.</p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
				<?php self::field( 'checkbox', 'change_oEmbed_size' ); ?>
                <span class="slider"></span>
            </label>
        </div>
        <div class="wowp-snippet__item-expand is-hidden">
            <div class="wowp-fields__group">
                <div class="wowp-field">
                    <label><span class="label">Width</span>
						<?php self::field( 'number', 'change_oEmbed_size_width', '', '400' ); ?>
                    </label>
                </div>
                <div class="wowp-field">
                    <label><span class="label">Height</span>
						<?php self::field( 'number', 'change_oEmbed_size_height', '', '280' ); ?>
                    </label>
                </div>
            </div>
        </div>
    </div>

    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="change_read_more">Change Read More Text for Excerpts</label>
            <p class="wowp-snippet__item-description">Customize the "Read More" text that shows up after excerpts.</p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
				<?php self::field( 'checkbox', 'change_read_more' ); ?>
                <span class="slider"></span>
            </label>
        </div>
        <div class="wowp-snippet__item-expand is-hidden">
            <div class="wowp-field">
                <label>
                    <span class="label">Text</span>
					<?php self::field( 'text', 'change_read_more_text', '', 'Read More' ); ?>
                </label>
            </div>
        </div>
    </div>

    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="change_expiration_remember_me">Extend Login Expiration Time</label>
            <p class="wowp-snippet__item-description">Toggling "Remember Me" will keep you logged in for your needed
                enter days instead of 14 days.</p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
				<?php self::field( 'checkbox', 'change_expiration_remember_me' ); ?>
                <span class="slider"></span>
            </label>
        </div>
        <div class="wowp-snippet__item-expand is-hidden">
            <div class="wowp-field">
                <label>
                    <span class="label">Days</span>
					<?php self::field( 'number', 'change_expiration_remember_me_day', 30, 14 ); ?>
                </label>
            </div>
        </div>
    </div>

</div>
