/**
 * Properties class for ResourceBundle "Spinner".
 */
Ext.define("com.coremedia.blueprint.base.components.pictures.spinner.Spinner_properties", {

  requires: [
    "com.coremedia.icons.CoreIcons_properties"
  ],
      /**
       *###########################################################
 * Spinner
 *###########################################################
      */
  "CreateSpinnerAction_failure_text": "Error",
  "CreateSpinnerAction_failure_msg": "Failed to create 360° View:",
  "CreateSpinnerAction_tooltip": "Create 360° View from selection",
  "CreateSpinnerAction_failure_exists": "An 360� View with name '{0}' already exists.",
  "CreateSpinnerAction_text": "Create 360° View",
      /**
       * Dialog Window
      */
  "Spinner_dialog_new_spinner_title": "New 360° View",
  "Spinner_dialog_new_spinner_name_label": "Name",
  "Spinner_dialog_new_spinner_name": "New 360° View",
  "Spinner_dialog_new_spinner_empty_text": "Give the new 360� View a name",
  "Spinner_dialog_preview_label": "The following images will be part of the new 360° View",
      /**
       * Site Selection
      */
  "spinner_action_target_folder": "Editorial/360° View",
      /**
       * Target properties
      */
  "spinner_action_target_content_type": "CMSpinner",
  "spinner_action_target_property": "sequence",
  "spinner_action_target_title_property": "title",
  "spinner_action_target_title_teaser_property": "teaserTitle"
}, function() {
  this.prototype["CreateSpinnerAction_icon_cls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.create_type_360_view;

  com.coremedia.blueprint.base.components.pictures.spinner.Spinner_properties.INSTANCE = new com.coremedia.blueprint.base.components.pictures.spinner.Spinner_properties();
});