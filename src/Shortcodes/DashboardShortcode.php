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
}
