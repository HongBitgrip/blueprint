/**
 * Properties class for ResourceBundle "ImageGallery".
 */
Ext.define("com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery_properties", {

      /**
       *###########################################################
 * Image Gallery
 *###########################################################
      */
  "CreateImageGalleryAction_failure_text": "Error",
  "CreateImageGalleryAction_failure_msg": "Failed to create image gallery:",
  "CreateImageGalleryAction_tooltip": "Create image gallery from selection",
  "CreateImageGalleryAction_failure_exists": "An image gallery with name '{0}' already exists.",
  "CreateImageGalleryAction_text": "Create Image Gallery",
      /**
       * Dialog Window
      */
  "ImageGalleryDialog_new_gallery": "New Gallery",
  "ImageGalleryDialog_new_image_gallery": "Name",
  "ImageGalleryDialog_new_image_gallery_empty_text": "Give the new gallery a name",
  "ImageGalleryDialog_preview_label": "The following images will be part of the new gallery",
      /**
       * Site Selection
      */
  "image_gallery_action_target_folder": "Editorial/Galleries",
      /**
       * Target properties
      */
  "image_gallery_action_target_content_type": "CMGallery",
  "image_gallery_action_target_property": "items",
  "image_gallery_action_target_title_property": "title",
  "image_gallery_action_target_title_teaser_property": "teaserTitle",
      /**
       * Image Selection
      */
  "image_gallery_action_content_type": "CMPicture",
  "image_gallery_action_preview_property": "data"
}, function() {

  com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery_properties.INSTANCE = new com.coremedia.blueprint.base.components.pictures.gallery.ImageGallery_properties();
});