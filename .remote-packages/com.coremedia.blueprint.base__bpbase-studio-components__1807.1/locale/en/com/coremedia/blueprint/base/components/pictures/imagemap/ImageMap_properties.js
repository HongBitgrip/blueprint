/**
 * Properties class for ResourceBundle "ImageMap".
 */
Ext.define("com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap_properties", {

      /**
       *# Create Image Map from library or context menu
 * setup
      */
  "ImageMap_action_source_content_type": "CMPicture",
  "ImageMap_action_source_content_property": "data",
  "ImageMap_action_target_folder": "Editorial/Content",
  "ImageMap_action_target_content_type": "CMImageMap",
  "ImageMap_action_target_property": "pictures",
  "ImageMap_action_target_title_property": "title",
  "ImageMap_action_target_title_teaser_property": "teaserTitle",
      /**
       * on error
      */
  "ImageMap_action_failure_text": "Error",
  "ImageMap_action_failure_msg": "Failed to create image map:",
  "ImageMap_action_failure_exists": "An image map with name '{0}' already exists.",
      /**
       * on library
      */
  "ImageMap_library_btn_text": "Create Image Map",
  "ImageMap_library_btn_tooltip": "Create image map",
      /**
       * dialog window
      */
  "ImageMap_dialog_new_image_map_title": "New Image Map",
  "ImageMap_dialog_new_image_map_name_label": "Name",
  "ImageMap_dialog_new_image_map_name": "New Image Map",
  "ImageMap_dialog_new_image_map_empty_text": "Give the new image map a name",
  "ImageMap_dialog_preview_label": "Chosen Picture for the New Image Map:"
}, function() {

  com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap_properties.INSTANCE = new com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap_properties();
});