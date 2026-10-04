<?php

namespace WPCoder\Dashboard;

class Option {

	public static function init( $options = [], $i = '' ) {
		foreach ( $options as $key => $values ) {
			switch ( $values['type'] ) {
				case 'text':
				case 'url':
				case 'number':
				case 'date':
				case 'time':
					self::text( $values, $i );
					break;
				case 'checkbox':
					self::checkbox( $values, $i );
					break;
				case 'select':
					self::select( $values, $i );
					break;
				case 'textarea':
					self::textarea( $values, $i );
					break;
				case 'color':
					self::color( $values, $i );
					break;
			}
		}
	}

	private static function textarea( $values, $i ) {
		$class      = ! empty( $values['class'] ) ? 'wowp-field ' . $values['class'] : 'wowp-field';
		$name       = $values['name'];
		$id_name    = self::get_id_name( $name, $i );
		$id         = Field::get_id( $id_name );
		$default    = ! empty( $values['default'] ) ? $values['default'] : '';
		$title      = ! empty( $values['info'] ) ? $values['info'] : '';
		$info_class = ! empty( $values['info'] ) ? ' wowp-info' : '';
		?>
        <div class="<?php echo esc_attr( $class ); ?>" data-option="<?php echo esc_attr( $id ); ?>">
			<?php if ( ! empty( $values['title'] ) ) : ?>
                <label class="label<?php echo esc_attr( $info_class ); ?>" for="<?php echo esc_attr( $id ); ?>"
                       data-info="<?php echo esc_attr( $title ); ?>">
					<?php echo esc_html( $values['title'] ); ?>
                </label>
			<?php endif; ?>

			<?php Field::textarea( $name, $default ); ?>
        </div>
		<?php

	}

	private static function select( $values, $i ): void {
		$class   = ! empty( $values['class'] ) ? 'wowp-field ' . $values['class'] : 'wowp-field';
		$name    = $values['name'];
		$id_name = self::get_id_name( $name, $i );
		$id      = Field::get_id( $id_name );
		$default = ! empty( $values['default'] ) ? $values['default'] : '';
		$options = ! empty( $values['options'] ) ? $values['options'] : [];
		$tooltip = ! empty( $values['tooltip'] ) ? $values['tooltip'] : '';
		?>
        <div class="<?php echo esc_attr( $class ); ?>" data-option="<?php echo esc_attr( $id ); ?>">
            <label>
				<?php if ( ! empty( $values['title'] ) ) : ?>
                    <span class="label">
                        <?php echo esc_html( $values['title'] ); ?>
	                    <?php if ( ! empty( $tooltip ) ) : ?>
                            <sup class="wowp-tooltip" data-tooltip="<?php echo esc_attr($tooltip);?>">ℹ</sup>
	                    <?php endif; ?>
                    </span>
				<?php endif; ?>

				<?php Field::select( $name, $default, $options, $i ); ?>
            </label>
        </div>

		<?php
	}

	private static function checkbox( $values, $i ): void {
		$class   = ! empty( $values['class'] ) ? 'wowp-field has-checkbox ' . $values['class'] : 'wowp-field has-checkbox';
		$name    = $values['name'];
		$id_name = self::get_id_name( $name, $i );
		$id      = Field::get_id( $id_name );
		$tooltip = ! empty( $values['tooltip'] ) ? $values['tooltip'] : '';
		?>
        <div class="<?php echo esc_attr( $class ); ?>" data-option="<?php echo esc_attr( $id ); ?>">
			<?php if ( ! empty( $values['title'] ) ) : ?>
                <span class="label">
                    <?php echo esc_html( $values['title'] ); ?>
					<?php if ( ! empty( $tooltip ) ) : ?>
                        <sup class="wowp-tooltip" data-tooltip="<?php echo esc_attr($tooltip);?>">ℹ</sup>
					<?php endif; ?>
                </span>
			<?php endif; ?>
            <label class="switch">
				<?php Field::checkbox( $name, $i ); ?>
                <span class="slider">
            </label>
        </div>
		<?php

	}

	private static function color( $values, $i ): void {
		$class      = ! empty( $values['class'] ) ? 'wowp-field ' . $values['class'] : 'wowp-field';
		$name       = $values['name'];
		$id_name    = self::get_id_name( $name, $i );
		$id         = Field::get_id( $id_name );
		$default    = ! empty( $values['default'] ) ? $values['default'] : '';
		$title      = ! empty( $values['info'] ) ? $values['info'] : '';
		$info_class = ! empty( $values['info'] ) ? ' wowp-info' : '';
		?>
        <div class="<?php echo esc_attr( $class ); ?>" data-option="<?php echo esc_attr( $id ); ?>">
			<?php if ( ! empty( $values['title'] ) ) : ?>
                <span class="label<?php echo esc_attr( $info_class ); ?>" data-info="<?php echo esc_attr( $title ); ?>">
					<?php echo esc_html( $values['title'] ); ?>
                </span>
			<?php endif; ?>
			<?php Field::text( $name, $default, $values['type'], $i ); ?>

        </div>
		<?php
	}

	private static function text( $values, $i ): void {
		$class      = ! empty( $values['class'] ) ? 'wowp-field ' . $values['class'] : 'wowp-field';
		$name       = $values['name'];
		$id_name    = self::get_id_name( $name, $i );
		$id         = Field::get_id( $id_name );
		$default    = ! empty( $values['default'] ) ? $values['default'] : '';
		$title      = ! empty( $values['info'] ) ? $values['info'] : '';
		$info_class = ! empty( $values['info'] ) ? ' wowp-info' : '';
		?>
        <div class="<?php echo esc_attr( $class ); ?>" data-option="<?php echo esc_attr( $id ); ?>">
            <label>
				<?php if ( ! empty( $values['title'] ) ) : ?>
                    <span class="label<?php echo esc_attr( $info_class ); ?>"
                          data-info="<?php echo esc_attr( $title ); ?>">
					<?php echo esc_html( $values['title'] ); ?>
                </span>
				<?php endif; ?>

				<?php Field::text( $name, $default, $values['type'], $i ); ?>
				<?php if ( ! empty( $values['addon'] ) ) : ?>
                    <span class="is-addon"><?php echo esc_html( $values['addon'] ); ?></span>
				<?php endif; ?>
            </label>
        </div>
		<?php
	}

	private static function get_id_name( $name, $i ) {
		if ( is_numeric( $i ) ) {
			return $name . '[' . $i . ']';
		}

		return $name;
	}

}