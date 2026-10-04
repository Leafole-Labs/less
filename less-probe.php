<?php
require __DIR__ . '/wp-load.php';
header( 'Content-Type: text/plain' );
echo 'bloginfo_version=' . get_bloginfo( 'version' ) . "\n";
echo 'ls_version=' . ls_version() . "\n";
echo 'generator=' . ( get_the_generator() ? str_replace( array( "\n", "\r" ), ' ', get_the_generator() ) : 'none' ) . "\n";
echo 'active_theme=' . wp_get_theme()->get_stylesheet() . "\n";
echo 'wp_get_wp_version=' . wp_get_wp_version() . "\n";
echo 'home_url=' . home_url() . "\n";