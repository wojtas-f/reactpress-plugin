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
     * 
     */
    public function getThumbnail($productMeta)
    {
        $thumbnailId = isset($productMeta['_thumbnail_id']) ? $productMeta['_thumbnail_id'][0] : '';
        $thumbnail = wp_get_attachment_image_src($thumbnailId, 'thumbnail');
        if ($thumbnail) return $thumbnail[0];
        return false;
    }

    /**  
     * 
     */
    public function getCategories()
    {
        return get_terms([
            'taxonomy' => 'vlp_product_tax',
            'hide_empty' => true
        ]);
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

        $res = [
            'products' => [],
            'tags' => $this->getCategories()
        ];

        foreach ($products as $product) {
            $productMeta = get_post_meta($product->ID);
            $productObject = [];
            $productObject['thumbnail'] = $this->getThumbnail($productMeta);
            $productObject['title'] = $product->post_title;

            $taxonomies = get_post_taxonomies($product->ID);
            $productObject['tags'] = wp_get_post_terms($product->ID, $taxonomies,  array("fields" => "names"));

            // $productObject['META'] = $productMeta;
            $res['products'][] = $productObject;
        }

        wp_send_json_success($res);
    }
}
