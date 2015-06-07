<?php

function remove_editor() {
  remove_post_type_support('page', 'editor');
}
//add_action('admin_init', 'remove_editor');

?>