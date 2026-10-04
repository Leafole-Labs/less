<?php

namespace WPCoder\Publisher;

defined( 'ABSPATH' ) || exit;

class Singleton {
	private static $instance;
	private array $value = [];

	private function __construct() {}

	public static function getInstance() {
		if (null === static::$instance) {
			static::$instance = new static();
		}

		return static::$instance;
	}

	public function setValue($key, $value) {
		$this->value[$key] = $value;
	}

	public function getValue(): array {
		return $this->value;
	}
}