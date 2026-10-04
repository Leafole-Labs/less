<?php

use WPCoder\Parsedown\Parsedown;
use WPCoder\WPCoder;

defined('ABSPATH') || exit;

class WPCoder_Markdown_Editor {

	private array $except_ids = [];
	private array $options;

	public function __construct( $options ) {
		$this->options = is_array($options) ? $options : [];

		$raw = $this->options['markdown_editor_except'] ?? '';
		$this->except_ids = array_values(array_filter(array_map('intval', preg_split('/[,\s]+/', (string)$raw)), fn($v)=>$v>0));

		add_filter('use_block_editor_for_post', function( $use, $post ) {
			if ( ! $post instanceof WP_Post ) return false;
			return in_array((int)$post->ID, $this->except_ids, true) ? $use : false;
		}, 10, 2);

		add_filter('user_can_richedit', function( $can ){
			$post = $this->get_current_edit_post();
			if ( ! $post ) return false;
			return in_array((int)$post->ID, $this->except_ids, true) ? $can : false;
		}, 50);

		add_filter('the_content', [$this, 'content'], 9);

		add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);

		add_action('wp_enqueue_scripts', [$this, 'maybe_strip_block_css'], 99);
	}

	/** Фронт: конвертація Markdown → HTML (крім винятків) */
	public function content( $content ): string {
		$post = get_post();
		if ( $post && in_array((int)$post->ID, $this->except_ids, true) ) {
			return $content;
		}

		remove_filter('the_content', 'wpautop');

		$pd = new Parsedown();
		$pd->setSafeMode(false);
		$pd->setBreaksEnabled(true);

		$html = $pd->text($content);

		return wp_kses_post($html);
	}

	public function enqueue_scripts( $hook ): void {
		if ($hook !== 'post.php' && $hook !== 'post-new.php') return;

		$post = $this->get_current_edit_post();
		if ( $post && in_array((int)$post->ID, $this->except_ids, true) ) {
			return;
		}

		remove_action('media_buttons', 'media_buttons');

		wp_enqueue_script('code-editor');
		wp_enqueue_style('code-editor');

		wp_enqueue_script('quicktags');
		wp_enqueue_script('word-count');

		$url = WPCoder::url() . 'assets/js/codemirror/';

		wp_enqueue_style('cm-editor', $url . 'editor.css', [], '1.0');

		wp_enqueue_script('cm-mode-markdown', $url . 'markdown.js', ['code-editor'], '1.0', true);
		wp_enqueue_script('cm-mode-gfm',      $url . 'gfm.js',      ['cm-mode-markdown'], '1.0', true);

		wp_enqueue_script('wpc-markdown-editor', $url . 'editor.js', ['cm-mode-markdown','quicktags'], '1.0', true);
	}

	private function get_current_edit_post(): ?WP_Post {
		$post_id = 0;

		if ( isset($_GET['post']) ) {
			$post_id = (int) $_GET['post'];
		} elseif ( isset($_POST['post_ID']) ) {
			$post_id = (int) $_POST['post_ID'];
		}

		if ( $post_id > 0 ) {
			$p = get_post($post_id);
			return ($p instanceof WP_Post) ? $p : null;
		}
		return null;
	}

	public function maybe_strip_block_css(): void {
		if ( is_singular() ) {
			$post_id = get_the_ID();
			if ( $post_id && in_array( (int) $post_id, $this->except_ids, true ) ) {
				return;
			}
		}

		$handles = [
			'wp-block-library',
			'wp-block-library-theme',
			'global-styles',
			'classic-theme-styles',
		];

		foreach ( $handles as $h ) {
			wp_dequeue_style( $h );
			wp_deregister_style( $h );
		}
	}
}