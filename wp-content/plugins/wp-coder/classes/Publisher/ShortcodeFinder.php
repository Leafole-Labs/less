<?php

namespace WPCoder\Publisher;

class ShortcodeFinder {

	private $shortcode_name;

	public function __construct($shortcode_name) {
		$this->shortcode_name = $shortcode_name;
	}

	public function getShortcodeId($post_id) {
		$post = get_post($post_id);

		if (!$post) {
			return false; // Return false if the post does not exist
		}

		// Use regex to find the shortcode
		$pattern = get_shortcode_regex([ $this->shortcode_name ]);
		if (preg_match('/' . $pattern . '/s', $post->post_content, $matches) && isset($matches[3])) {
			// Extract attributes string
			$attributes_string = $matches[3];

			// Parse attributes
			$attributes = shortcode_parse_atts($attributes_string);

			if (isset($attributes['id'])) {
				return $attributes['id']; // Return the ID attribute of the shortcode
			}
		}

		return false; // Return false if no matching shortcode found
	}
}
