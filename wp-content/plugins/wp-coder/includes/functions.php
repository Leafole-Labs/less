<?php

use WPCoder\Tools\Parsedown;

defined( 'ABSPATH' ) || exit;


function wpcoder_mmd($content): string {
	return ( new Parsedown() )->text($content);
}