<?php
/*
 * Page Name: Scripts & Styles
 */

use WPCoder\Dashboard\Field;
use WPCoder\Dashboard\Option;

defined( 'ABSPATH' ) || exit;

$default = Field::getDefault();
$opt     = include( 'options/includes.php' );
$count   = ! empty( $default['param']['include'] ) ? count( $default['param']['include'] ) : 0;
?>

    <fieldset id="includes-files" class="wowp-fieldset">
        <div class="wowp-fieldset__header">
            <div class="wowp-fieldset__header-title">
				<?php esc_html_e( 'Add External Scripts & Styles', 'wp-coder' ); ?>
                <p>Add custom styles or scripts to your site by entering the URL. These files will be loaded on the front end.</p>
            </div>

            <div class="wowp-fieldset__header-button">
                <a class="button button-secondary" id="add-include"><?php esc_html_e( 'Add New', 'wp-coder' ); ?></a>
            </div>
        </div>

		<?php if ( $count > 0 ) :
			for ( $i = 0; $i < $count; $i ++ ):
				?>

                <div class="wowp-fields__group">
                    <button class="wowp-button__icon is-remove dashicons dashicons-trash"></button>
					<?php Option::init( [
						$opt['include'],
						$opt['include_file'],
						$opt['js_attr'],
						$opt['css_only_preview'],
					], $i ); ?>

                </div>
			<?php
			endfor;
		endif; ?>

        <div class="btn-add-display"></div>
    </fieldset>


    <template id="clone-includes">

        <div class="wowp-fields__group">
            <button class="wowp-button__icon is-remove dashicons dashicons-trash"></button>
			<?php Option::init( [
				$opt['include'],
				$opt['include_file'],
				$opt['js_attr'],
				$opt['css_only_preview'],
			], - 1 ); ?>

        </div>

    </template>


<?php
