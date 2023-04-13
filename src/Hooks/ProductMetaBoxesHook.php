<?php

namespace Dashboard\Hooks;

use Dashboard\Base\Base;

/**  
 * 
 */
class ProductMetaBoxesHook extends Base
{
    /**  
     * 
     */
    public $slug = 'vlp_product';

    /**  
     * 
     */
    public $metaboxes = [];

    /**  
     * Class initializer
     */
    public function init()
    {
        $this->populateMetaboxesArray();
        add_action('add_meta_boxes_' . $this->slug, [$this, 'handle']);
        add_action('save_post_' . $this->slug, [$this, 'saveMetaBox'], 10, 2);
        add_action('admin_enqueue_scripts', [$this, 'enqueue']);
    }

    /**  
     * 
     */
    public function handle()
    {
        foreach ($this->metaboxes as $metabox) {
            add_meta_box(
                $metabox['id'],
                $metabox['title'],
                [$this, 'callRenderMetaboxView'],
                null,
                'advanced',
                'default',
                ['name' => $metabox['name'], 'value' => $metabox['value']]
            );
        }
    }

    /**  
     * 
     */
    public function populateMetaboxesArray()
    {
        $this->metaboxes[] = [
            "id" => 'vlp-product-description',
            'title' => __('Product description', 'vlp-plugin'),
            "name" => 'vlp-desc',
            'value' => '4321'
        ];

        $this->metaboxes[] = [
            "id" => 'vlp-product-excerpt',
            'title' => __('Product short description', 'vlp-plugin'),
            "name" => 'vlp-excerpt',
            'value' => '1234'
        ];
    }

    /**  
     * 
     */
    public function callRenderMetaboxView($post, $metabox)
    {
        $field = $metabox['args'];
        echo $this->renderView('/Metaboxes/TextareaMetaboxView', ["name" => $field['name'], "value" => $field['value']]);
    }

    /**  
     * 
     */
    public function saveMetaBox($postId)
    {
        foreach ($this->metaboxes as $metabox) {
            if (isset($_REQUEST[$metabox->name])) {
                update_post_meta($postId, $metabox['name'], sanitize_text_field($_POST[$metabox['name']]));
            }
        }
    }

    /**  
     * 
     */
    public function enqueue($hook)
    {
        global $post;
        if (($hook === 'post-new.php' || $hook === 'post.php') && $this->slug === $post->post_type) {
            wp_enqueue_style('vlp-product-edit-page-style', $this->stylesDirURL . 'edit.css');
        }
    }
}
