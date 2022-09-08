<?php
/**
 * Plugin Name:       Text Box
 * Description:       A simple text box block
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Rubel Ahmed
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       text-box
 *
 */

function create_block_text_box_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_text_box_block_init' );