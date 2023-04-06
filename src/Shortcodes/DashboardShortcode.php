<?php

namespace Dashboard\Shortcodes;

use Dashboard\Base\Base;

/**  
 * Shortcode displays root element for dashboard app
 */
class DashboardShortcode extends Base
{
    /**  
     * Class initializer 
     * 
     * @return void
     */
    public function init(): void
    {
        add_shortcode('vlp-dashboard', [$this, 'handle']);
        add_action('wp_enqueue_scripts', [$this, 'enqueueAssets']);
    }

    /**  
     * Handle shortcode
     * 
     * @return string
     */
    public function handle(): string
    {
        return $this->renderView('DashboardView', ['isLoggedIn' => is_user_logged_in()]);
    }

    /**  
     * Enqueue styles and scripts
     */
    public function enqueueAssets()
    {
        wp_enqueue_script('vlp-app-script', $this->scriptsDirURL . 'app.build.js', [], false, true);
        wp_enqueue_style('vlp-app-script', $this->stylesDirURL . 'main.build.css');
    }
}
