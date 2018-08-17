/**
 * Properties class for ResourceBundle "UI".
 */
Ext.define("com.coremedia.ui.UI_properties", {

  "Locale_text": "EN",
  "DateFormat_text": "Expected date format {0}.",
  "TimeFormat_text": "Expected time format {0}.",
      /**
       * used in override files
      */
  "SplitButton_popup_info_text": "Open the menu for further options",
      /**
       * used in override files
      */
  "BoxOverflowButton_aria_label": "show additional tools",
      /**
       * used in override files
      */
  "Expand_Tool_text": "Expand",
      /**
       * used in override files
      */
  "Collapse_Tool_text": "Collapse",
  "Image_load_error_text": "Failed to load image. Try again or contact your system administrator."
}, function() {

  com.coremedia.ui.UI_properties.INSTANCE = new com.coremedia.ui.UI_properties();
});