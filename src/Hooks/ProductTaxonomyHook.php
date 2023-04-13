<?php

namespace Dashboard\Hooks;

/* 
 * Class for registering custom taxonomy
 */

class ProductTaxonomyHook
{
    /**  
     * Unique taxonomy slug
     */
    private $taxonomySlug = 'vlp_product_tax';

    /**  
     * Unique post type slug
     */
    private $postTypeSlug =  'vlp_product';

    /**  
     * Class initializer
     */
    public function init()
    {
        add_action('init', [$this, 'register']);
    }

    /* 
     * Register custom taxonomy
     * 
     * @return void 
     */
    public function register()
    {
        register_taxonomy(
            $this->taxonomySlug,
            $this->postTypeSlug,
            [
                'labels' => [
                    'name' => __('Product categories', 'vlp-plugin'),
                    'singular_name' => __('Product category', 'vlp-plugin')
                ],
                'hierarchical' => false,
                'show_ui' => true,
                'show_in_rest' => true,
                'show_admin_column' => true,
                'query_var' => true,
                'rewrite' => ['slug' => $this->taxonomySlug],
                'show_in_quick_edit' => false,
                'meta_box_cb' => "post_categories_meta_box",
            ]
        );
    }
}
