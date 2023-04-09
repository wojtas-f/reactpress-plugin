<?php

namespace Dashboard\Hooks\Ajax;

/**  
 * 
 */
class ProductAjaxHook
{

    public function init()
    {
        add_action('wp_ajax_get_products', [$this, 'handleAjax']);
        add_action('wp_ajax_nopriv_get_products', [$this, 'handleAjax']);
    }

    /**  
     * Handle ajax call
     */
    public function handleAjax()
    {
        $args = [
            'numberposts' => -1,
            'post_type'   => 'vlp_product'
        ];
        $products = get_posts($args);

        wp_send_json_success($products);
    }
}
