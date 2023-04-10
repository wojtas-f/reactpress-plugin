<?php

namespace Dashboard\Hooks;

use Dashboard\Base\Base;

/**  
 * 
 */
class ProductPostTypeHook extends Base
{
    /**  
     * 
     */
    public $slug = 'vlp_product';

    public function init()
    {
        add_action('init', [$this, 'handle']);
    }

    /**  
     * Handle hook
     * 
     * @return void
     */
    public function handle(): void
    {
        register_post_type(
            $this->slug,
            [
                'labels' => [
                    'name' => __('Products', 'vlp-plugin'),
                    'singular_name' => __('Product', 'vlp-plugin')
                ],
                'public' => true,
                'show_ui' => true,
                'show_in_rest' => true,
                'show_admin_column' => true,
                'show_in_menu'       => true,
                'rewrite'            => ['slug' => $this->slug],
                'capability_type'    => 'post',
                'has_archive'        => true,
                'hierarchical'       => false,
                'menu_icon'          => 'dashicons-products',
                'supports'           => ['title'],
                'menu_position' => 21,
            ]
        );
    }
}
