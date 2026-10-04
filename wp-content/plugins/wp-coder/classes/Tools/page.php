<?php

use WPCoder\Dashboard\FieldHelper;

defined( 'ABSPATH' ) || exit;

?>

<div class="wowp-snippet__list">


    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="enable_tracking_tool">Tracking Code Manager</label>
            <p class="wowp-snippet__item-description">Easily integrate your website with popular platforms like
                Google, Facebook, and Pinterest by adding their
                respective IDs, enabling seamless tracking and analytics.</p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
				<?php self::field( 'checkbox', 'enable_tracking_tool' ); ?>
                <span class="slider"></span>
            </label>
        </div>
        <div class="wowp-snippet__item-expand is-hidden">
            <div class="wowp-fields__group">

                <div class="wowp-field is-column">
                    <label><span class="label">Google Analytics</span>
						<?php self::field( 'text', 'tracking_tool_google', '', 'set tracking ID' ); ?>
                    </label>
                    <a target="_blank" href="https://support.google.com/analytics/answer/9539598?hl=en" rel="noopener noreferrer nofollow">How to
                        find the tracking ID</a>
                </div>
                <div class="wowp-field is-column">
                    <label><span class="label">Facebook Pixel</span>
						<?php self::field( 'text', 'tracking_tool_facebook', '', 'set Pixel ID' ); ?>
                    </label>
                    <a target="_blank"
                       href="https://en-gb.facebook.com/business/help/952192354843755?id=1205376682832142" rel="noopener noreferrer nofollow">How
                        to find the Facebook pixel ID</a>
                </div>
                <div class="wowp-field is-column">
                    <label><span class="label">Pintrest Pixel</span>
						<?php self::field( 'text', 'tracking_tool_pintrest', '', 'set Pixel ID' ); ?>
                    </label>
                    <a target="_blank"
                       href="https://help.pinterest.com/en/business/article/install-the-pinterest-tag" rel="noopener noreferrer nofollow">How to
                        find the Pinterest pixel ID</a>
                </div>

            </div>
        </div>
    </div>

    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="enable_google_adsense">Google AdSense</label>
            <p class="wowp-snippet__item-description">Easily add Google AdSense to your WordPress site.</p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
				<?php self::field( 'checkbox', 'enable_google_adsense' ); ?>
                <span class="slider"></span>
            </label>
        </div>
        <div class="wowp-snippet__item-expand is-hidden">
            <div class="wowp-field is-column">
                <label>
                    <span class="label">Publisher ID</span>
					<?php self::field( 'text', 'google_adsense_publisher', '', 'e.g pub-1234567890111213' ); ?>
                </label>
                <a target="_blank"
                   href="https://support.google.com/adsense/answer/105516?hl=en" rel="noopener noreferrer nofollow">Find your publisher ID</a>
            </div>

            <p><b>Disable Google AdSense Ads for these user roles:</b></p>

            <div class="wowp-fields__group">
				<?php foreach ( FieldHelper::user_roles() as $key => $value ) :
					if ( $key === 'all' ) {
						continue;
					}
					?>
                    <div class="wowp-field has-checkbox">
                        <span class="label"><?php echo esc_html( $value ); ?></span>
                        <label class="switch">
							<?php self::field( 'checkbox', 'disable_google_adsense_user_' . $key ); ?>
                            <span class="slider"></span>
                        </label>
                    </div>
				<?php endforeach; ?>
            </div>
        </div>
    </div>

    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="enable_login_style">Enable Style and Script on Login Page </label>
            <p class="wowp-snippet__item-description">Add Login page custom Style and Script</p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
				<?php self::field( 'checkbox', 'enable_login_style' ); ?>
                <span class="slider"></span>
            </label>
        </div>
        <div class="wowp-snippet__item-expand is-hidden">
            <div class="wowp-field">
                <label>
                    <span class="label">Code ID</span>
					<?php self::field( 'number', 'enable_login_code_id', '', 1 ); ?>
                </label>
            </div>
        </div>
    </div>

    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="enable_maintenance_mode">Enable Maintenance Mode</label>
            <p class="wowp-snippet__item-description">Show a customizable maintenance page on the frontend while
                performing a brief maintenance to your site. Logged-in administrators can still view the site as
                usual.</p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
				<?php self::field( 'checkbox', 'enable_maintenance_mode' ); ?>
                <span class="slider"></span>
            </label>
        </div>
        <div class="wowp-snippet__item-expand is-hidden">
            <div class="wowp-field">
                <label><span class="label">Code ID</span>
					<?php
					self::field( 'number', 'enable_maintenance_mode_id', '', 2 ); ?>
                </label>
            </div>
        </div>
    </div>

    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="enable_tax_icon">Enable Extra Icon</label>
            <p class="wowp-snippet__item-description">Enable Extra Icon for categories/tags and pages/posts.</p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
				<?php self::field( 'checkbox', 'enable_tax_icon' ); ?>
                <span class="slider"></span>
            </label>
        </div>
    </div>

    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="enable_breadcrumbs">Enable Breadcrumbs</label>
            <p class="wowp-snippet__item-description">You can use the function <code>wpc_get_breadcrumbs()</code> on
                the template for display breadcrumbs.</p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
				<?php self::field( 'checkbox', 'enable_breadcrumbs' ); ?>
                <span class="slider"></span>
            </label>
        </div>
    </div>

    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="enable_quickcode">Enable QuickCode</label>
            <p class="wowp-snippet__item-description">Enable tool for uses QuickCodes in the Items.</p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
				<?php self::field( 'checkbox', 'enable_quickcode' ); ?>
                <span class="slider"></span>
            </label>
        </div>
    </div>

    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="enable_page_template">Create Page Templates</label>
            <p class="wowp-snippet__item-description">Define custom page templates by name.</p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
				<?php self::field( 'checkbox', 'enable_page_template' ); ?>
                <span class="slider"></span>
            </label>
        </div>
        <div class="wowp-snippet__item-expand is-hidden">
            <div class="wowp-field is-column">
                <label><span class="label">Template Names</span>
				    <?php self::field( 'text', 'enable_custom_page_templates', '', 'Home, About Us, Contact' ); ?>
                </label>
                <small>Separate multiple templates with commas (e.g. Full Width, Landing Page).</small>
            </div>
        </div>
    </div>

    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="enable_menu">Register Menu</label>
            <p class="wowp-snippet__item-description">Automatically register a WordPress menu if it doesn’t exist.</p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
				<?php self::field( 'checkbox', 'enable_menu' ); ?>
                <span class="slider"></span>
            </label>
        </div>
    </div>

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
            <label for="test_users">Test Users</label>
            <p class="wowp-snippet__item-description">
                Quickly test other user roles from a super admin account, to see what other users experience.
            </p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
				<?php self::field( 'checkbox', 'test_users' ); ?>
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

    <div class="wowp-snippet__item">
        <div class="wowp-snippet__item-header">
            <label for="plugin_switcher">Plugin Switcher</label>
            <p class="wowp-snippet__item-description">
                Quickly activate or deactivate installed plugins directly from the admin bar.
            </p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
				<?php self::field( 'checkbox', 'plugin_switcher' ); ?>
                <span class="slider"></span>
            </label>
        </div>
    </div>


</div>

<?php
