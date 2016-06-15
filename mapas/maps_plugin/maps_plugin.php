<?php
/*
Plugin Name: Mapas
Plugin URI: http://www.claudia-lopez.com/
Description: Mapas de Bogota y Colombia
Version: 0.1
Author: Nicolas Arteaga
Author URI: Author URI: mailto:nomeacuerdo@gmail.com
*/

defined( 'ABSPATH' ) or die( 'Plugin file cannot be accessed directly.' );

$plugin_path = plugin_dir_url( __FILE__ );
wp_enqueue_style('mapas', $plugin_path . 'maps.css', array(), '0.1');
wp_enqueue_style('jqvmap', $plugin_path . 'jqvmap/jqvmap.css', array(), '0.1');

add_action( 'wp_head', current_jquery( '1.7.2' ) ); // change number to latest version
wp_enqueue_script('jquery-vmap', $plugin_path . 'jqvmap/jquery.vmap.min.js', array( 'jquery' ), '0.1');

wp_enqueue_script('jquery-vmap-bogota', $plugin_path . 'jqvmap/maps/jquery.vmap.bogota.js', array( 'jquery' ), '0.1');
wp_enqueue_script('jquery-data-bogota', $plugin_path . 'jqvmap/data/jquery.vmap.bogota.js', array( 'jquery' ), '0.1');
wp_enqueue_script('jquery-vmap-colombia', $plugin_path . 'jqvmap/maps/jquery.vmap.colombia.js', array( 'jquery' ), '0.1');
wp_enqueue_script('jquery-data-colombia', $plugin_path . 'jqvmap/data/jquery.vmap.colombia.js', array( 'jquery' ), '0.1');

wp_enqueue_script('jquery-maps', $plugin_path . 'maps.js', array( 'jquery' ), '0.1');

function mapas_callback ($atts, $content, $tag) {
    $values = shortcode_atts(array(
        'de' => 'bogota'
    ),$atts);

    $output = "<div id='". $values['de'] ."' class='". $values['de'] ." map'></div>";

	return $output;
}

function current_jquery($version) {
        global $wp_scripts;
        if ( ( version_compare($version, $wp_scripts -> registered[jquery] -> ver) == 1 ) && !is_admin() ) {
                wp_deregister_script('jquery');

                wp_register_script('jquery',
                        'http://ajax.googleapis.com/ajax/libs/jquery/'.$version.'/jquery.min.js',
                        false, $version);
        }
}

add_shortcode('mapa','mapas_callback');
