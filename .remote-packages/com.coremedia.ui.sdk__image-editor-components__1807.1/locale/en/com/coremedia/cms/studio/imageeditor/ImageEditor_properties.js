/**
 * Properties class for ResourceBundle "ImageEditor".
 */
Ext.define("com.coremedia.cms.studio.imageeditor.ImageEditor_properties", {

  requires: [
    "com.coremedia.icons.CoreIcons_properties"
  ],
      /**
       * title of overview panel
      */
  "IEC_overview_title": "Overview",
      /**
       * key names of variants -> constructed by concatenating "IEC_variants_" and the variant key from the variants configuration in the document form
 * e.g. variant with key "thumbnail" would have a property key "IEC_variants_thumbnail"
      */
  "IEC_variants_big": "Big",
  "IEC_variants_normal": "Normal",
  "IEC_variants_thumbnail": "Thumbnail",
  "IEC_labels_imageArea_ariaLabel": "Image variant",
      /**
       * message displayed above ImageEditor
      */
  "IEC_label_non_valid_variants": "The resolution for some of the crops is too low.",
  "IEC_label_article_image": "Article Image",
  "IEC_label_teaser_images": "Teaser Images",
  "IEC_label_caption": "Caption",
      /**
       * information displayed below ImageEditor on Overview panel
      */
  "IEC_label_dimensions_original_size": "Original Size",
  "IEC_label_dimensions_width": "Width",
  "IEC_label_dimensions_height": "Height",
      /**
       * Overview toolbar buttons tooltips and icon css classes
      */
  "IEC_label_reset": "Reset",
  "IEC_action_undo_toolTip": "Undo",
  "IEC_action_redo_toolTip": "Redo",
  "IEC_action_deleteblob_toolTip": "Delete image from repository",
  "IEC_action_viewcrops_on_toolTip": "Show crops",
  "IEC_action_viewcrops_off_toolTip": "Show crops",
  "IEC_action_resetmenu_tooltip": "Reset to Initial State",
  "IEC_action_resetfocal_toolTip": "Maximize the size of the crops and reset all focal points",
  "IEC_action_resetfocal_text": "Reset All Focal Points and Crops",
  "IEC_action_resetimage_toolTip": "Reset to Initial State",
  "IEC_action_resetimage_text": "Reset to Initial State",
  "IEC_action_fliph_toolTip": "Flip horizontally",
  "IEC_action_flipv_toolTip": "Flip vertically",
  "IEC_label_rotate": "Rotate",
  "IEC_label_left": "Left",
  "IEC_label_right": "Right",
  "IEC_label_align": "Straighten",
  "IEC_label_color": "Change Exposure",
  "IEC_label_brightness": "Brightness",
  "IEC_label_contrast": "Contrast",
      /**
       * button displayed in VariantToolbar - for individual variant crop editing
      */
  "IEC_action_resetvariant_toolTip": "Maximize the size of the crop and reset focal point",
      /**
       * labels for history drop down menu (image transformations)
      */
  "IEC_history_color_brightness": "Brightness changed",
  "IEC_history_color_contrast": "Contrast changed",
  "IEC_history_color_reset_brightness": "Brightness reset",
  "IEC_history_color_reset_contrast": "Contrast reset",
  "IEC_history_reflect_h": "Flipped horizontally",
  "IEC_history_reflect_v": "Flipped vertically",
  "IEC_history_rotated_crude": "Rotated by 90°",
  "IEC_history_rotated_fine": "Fine rotation applied",
  "IEC_history_rotated_reset": "Rotation reset",
  "IEC_history_rotated_fine_reset": "Fine rotation reset",
  "IEC_history_crops_changed_overview": "Focus area changed",
  "IEC_history_crops_changed_variant": "Crop for {0} changed",
  "IEC_history_crops_changed_focus_point": "Focus point changed",
  "IEC_history_image_reseted": "Reset to Initial State",
  "IEC_history_resetfocal": "All focal points and crops reset",
  "IEC_action_enlarge_crop_on_toolTip": "Fit image to crop",
  "IEC_action_enlarge_crop_off_toolTip": "Fit image to crop",
  "IEC_action_enlarge_all_crops_on_toolTip": "Fit image to crop",
  "IEC_action_enlarge_all_crops_off_toolTip": "Fit image to crop",
  "IEC_history_enlarge_crop": "Fit variant {0} to crop",
  "IEC_history_enlarge_crop_off": "Don't fit variant {0} to crop",
  "IEC_history_enlarge_all_crops": "Fit all image variants to crop",
  "IEC_history_enlarge_all_crops_off": "Don't fit any image variant to crop",
  "IEC_history_reset": "Revert all changes",
  "IEC_history_confirm_title": "Revert Changes",
  "IEC_history_confirm_msg": "Do you really want to revert all changes which were applied to this picture since upload?",
  "IEC_history_confirm_buttonText": "Revert",
  "IEC_readonly_status_tooltip_text": "This content is readonly.",
  "IEC_overview_crop_too_small_tooltip": "The resolution for some of the crops is too low.",
  "IEC_crop_too_small_tooltip": "The resolution for the crop is too low.",
  "IEC_cropsize_issue_text": "Image crop {0}:{1}",
  "IEC_upload_button_text": "Upload Image...",
  "IEC_upload_help_text": "i.e. with suffix png, jpeg or gif",
  "IEC_focusArea_imageArea_name": "Focus Area"
}, function() {
  this.prototype["IEC_action_undo_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.undo;
  this.prototype["IEC_action_redo_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.redo;
  this.prototype["IEC_action_deleteblob_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.trash_bin;
  this.prototype["IEC_action_viewcrops_on_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.view_crops;
  this.prototype["IEC_action_viewcrops_off_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.view_crops;
  this.prototype["IEC_action_resetfocal_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.reset_focal_points;
  this.prototype["IEC_action_reset_to_initial_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.reset;
  this.prototype["IEC_action_fliph_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.reflect_vertical;
  this.prototype["IEC_action_flipv_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.reflect_horizontal;
  this.prototype["IEC_action_rotate_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.rotate;
  this.prototype["IEC_action_rotateLeft_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.rotate_left;
  this.prototype["IEC_action_rotateRight_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.rotate_right;
  this.prototype["IEC_action_color_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.exposition;
  this.prototype["IEC_action_resetvariant_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.reset_focal_point;
  this.prototype["IEC_action_enlarge_crop_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.enlarge_image;
  this.prototype["IEC_action_enlarge_all_crops_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.enlarge_image;

  com.coremedia.cms.studio.imageeditor.ImageEditor_properties.INSTANCE = new com.coremedia.cms.studio.imageeditor.ImageEditor_properties();
});