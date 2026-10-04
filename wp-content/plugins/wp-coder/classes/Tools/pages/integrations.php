<?php

use WPCoder\Dashboard\FieldHelper;

defined( 'ABSPATH' ) || exit;

?>

<div class="wowp-snippets__header">
	<h3 class="wowp-snippets__header-title">Integrations</h3>
	<p class="wowp-snippets__header-description">Connect your site with external services and platforms for tracking, monetization, and analytics.</p>
</div>

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
            <label for="enable_gtm">Google Tag Manager</label>
            <p class="wowp-snippet__item-description">Add Google Tag Manager to your site for advanced tag management and tracking.</p>
        </div>
        <div class="wowp-field has-checkbox">
            <label class="switch">
                <?php self::field( 'checkbox', 'enable_gtm' ); ?>
                <span class="slider"></span>
            </label>
        </div>
        <div class="wowp-snippet__item-expand is-hidden">
            <div class="wowp-field is-column">
                <label>
                    <span class="label">Container ID</span>
                    <?php self::field( 'text', 'gtm_container_id', '', 'e.g. GTM-XXXXXXX' ); ?>
                </label>
                <a target="_blank"
                   href="https://support.google.com/tagmanager/answer/6103696?hl=en" rel="noopener noreferrer nofollow">How to find your GTM Container ID</a>
            </div>

            <p><b>Disable Google Tag Manager for these user roles:</b></p>

            <div class="wowp-fields__group">
                <?php foreach ( FieldHelper::user_roles() as $key => $value ) :
                    if ( $key === 'all' ) {
                        continue;
                    }
                    ?>
                    <div class="wowp-field has-checkbox">
                        <span class="label"><?php echo esc_html( $value ); ?></span>
                        <label class="switch">
                            <?php self::field( 'checkbox', 'disable_gtm_user_' . $key ); ?>
                            <span class="slider"></span>
                        </label>
                    </div>
                <?php endforeach; ?>
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

</div>