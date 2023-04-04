<?php

/**  
 * Plugin Name: VLP Dashboard
 * Description:
 * Version: 0.0.1
 * 
 */

defined('ABSPATH') or die();

$autoloaderPath = __DIR__ . '/vendor/autoload.php';
if (!file_exists($autoloaderPath)) {
    return;
}

require($autoloaderPath);

use Dashboard\Main;

$plugin = new Main();

add_action('plugins_loaded', [$plugin, 'init']);
