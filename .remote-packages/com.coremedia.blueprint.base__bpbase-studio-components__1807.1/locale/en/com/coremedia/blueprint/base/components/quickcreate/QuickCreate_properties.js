/**
 * Properties class for ResourceBundle "QuickCreate".
 */
Ext.define("com.coremedia.blueprint.base.components.quickcreate.QuickCreate_properties", {

      /**
       *Properties
      */
  "name_label": "Name",
  "name_empty_text": "Enter name of content item.",
  "parent_label": "Navigation Parent",
      /**
       *Dialog
      */
  "dialog_title": "New {0}",
      /**
       *menus and button
      */
  "quick_create_tooltip": "Create new content item",
      /**
       *Validation
      */
  "quick_create_missing_value": "This field must not be empty."
}, function() {

  com.coremedia.blueprint.base.components.quickcreate.QuickCreate_properties.INSTANCE = new com.coremedia.blueprint.base.components.quickcreate.QuickCreate_properties();
});