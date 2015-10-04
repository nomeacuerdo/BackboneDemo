<?php
/*
Plugin Name: Mapas
Plugin URI: http://www.claudia-lopez.com/
Description: Mapas de Bogota y Colombia
Version: 0.1
Author: Nicolas Arteaga
Author URI: http://mailto:nomeacuerdo@gmail.com/
*/
defined( 'ABSPATH' ) or die( 'Plugin file cannot be accessed directly.' );
function shortcode_colorblock( $atts ){
    $atts = shortcode_atts( array(
        'mapa' => 'bogota',
    ), $atts, 'mapas' );

    wp_enqueue_style('mapas', plugin_dir_url( __FILE__ ) . 'maps.css', array(), '0.1');
    wp_enqueue_style('mapas', plugin_dir_url( __FILE__ ) . '/jqvmap/jqvmap.css', array(), '0.1');

    wp_enqueue_script( 'jquery' );
    wp_enqueue_script('jquery-vmap', $plugin_path . 'jqvmap/jquery.vmap.min.js', array( 'jquery' ), '0.1');

    if ($atts['mapa'] == 'bogota') {
        wp_enqueue_script('jquery-vmap-bogota', $plugin_path . 'jqvmap/maps/jquery.vmap.bogota.js', array( 'jquery' ), '0.1');
        wp_enqueue_script('jquery-data-bogota', $plugin_path . 'jqvmap/data/jquery.vmap.bogota.js', array( 'jquery' ), '0.1');
    } elseif ($atts['mapa'] == 'colombia') {
        wp_enqueue_script('jquery-vmap-colombia', $plugin_path . 'jqvmap/maps/jquery.vmap.colombia.js', array( 'jquery' ), '0.1');
        wp_enqueue_script('jquery-data-colombia', $plugin_path . 'jqvmap/data/jquery.vmap.colombia.js', array( 'jquery' ), '0.1');
    }

    wp_enqueue_script('jquery-maps', $plugin_path . 'maps.js', array( 'jquery' ), '0.1');

    return "<div id='". $atts['mapa'] ."' class='". $atts['mapa'] ." map'></div>";
}
add_shortcode( 'mapas', 'shortcode_mapas' );
