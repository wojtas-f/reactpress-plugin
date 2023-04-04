<?php

namespace Dashboard\Base;

/*
 * Base class providing essential functions and assets paths
 */

abstract class Base
{
    /* Plugin directory path
     *
     * @var string
     */
    public $pluginFolder;

    /* Plugin url path
     *
     * @var string
     */
    public $pluginURL;

    /* Scripts folder url path
     *
     * @var string
     */
    public $scriptsDirURL;

    /* Styles folder url path
     *
     * @var string
     */
    public $stylesDirURL;


    function __construct()
    {
        $this->pluginFolder = dirname(__DIR__, 2);
        $this->pluginURL = plugin_dir_url(dirname(__FILE__, 2));

        $this->scriptsDirURL = $this->pluginURL . 'assets/js/';
        $this->stylesDirURL = $this->pluginURL . 'assets/css/';
    }

    /* Class initializer 
     * 
     * @return void 
     */
    public function init()
    {
        add_action('init', [$this, 'handle']);
    }

    /* Handle
     * 
     * @return void 
     */
    public function handle()
    {
    }

    /* Render view
     * 
     * @param string fileName
     * @param mixed[] attr
     * @return string 
     */
    public function renderView($fileName, array $attr = [])
    {
        $viewPath = $this->pluginFolder . '/views/' . $fileName . '.php';

        if (!file_exists($viewPath)) {
            return error_log($fileName . 'file not found.', 0);
        }

        ob_start();
        extract($attr);
        require($viewPath);
        $html = ob_get_contents();
        ob_end_clean();
        return $html;
    }
}
