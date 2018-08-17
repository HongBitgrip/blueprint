/**
 * Properties class for ResourceBundle "ImageMap" and Locale "de".
 */
Ext.define("com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap_properties_de", {
  override: "com.coremedia.blueprint.base.components.pictures.imagemap.ImageMap_properties",
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
  "ImageMap_action_failure_text": "Fehler",
  "ImageMap_action_failure_msg": "Die Image-Map konnte nicht erzeugt werden:",
  "ImageMap_action_failure_exists": "Eine Image-Map mit den Namen '{0}' existiert bereits.",
      /**
       * on library
      */
  "ImageMap_library_btn_text": "Image-Map erzeugen",
  "ImageMap_library_btn_tooltip": "Image-Map erzeugen",
      /**
       * dialog window
      */
  "ImageMap_dialog_new_image_map_title": "Neue Image-Map",
  "ImageMap_dialog_new_image_map_name_label": "Name",
  "ImageMap_dialog_new_image_map_name": "Neue Image-Map",
  "ImageMap_dialog_new_image_map_empty_text": "Bitte geben Sie einen Namen für die Image-Map an",
  "ImageMap_dialog_preview_label": "Das folgende Bild  wird für die Image-Map verwendet"
}, function() {
});