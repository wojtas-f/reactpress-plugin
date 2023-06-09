<?php

namespace Dashboard;

/**  
 * Main plugin class for registering and initializing classes
 */
class Main
{
    /**
     * Array of plugin classes
     */
    public $classes;

    function __construct()
    {
        $this->classes = [
            Hooks\Ajax\ProductAjaxHook::class,
            Hooks\ProductPostTypeHook::class,
            Hooks\ProductMetaBoxesHook::class,
            Hooks\ProductTaxonomyHook::class,
            Shortcodes\DashboardShortcode::class
        ];
    }

    /**  
     * 
     */
    public function init()
    {
        $this->registerClasses();
    }

    /**  
     * 
     */
    public function registerClasses()
    {
        foreach ($this->classes as $class) {
            $classInstance = new $class();
            $classInstance->init();
        }
    }
}
