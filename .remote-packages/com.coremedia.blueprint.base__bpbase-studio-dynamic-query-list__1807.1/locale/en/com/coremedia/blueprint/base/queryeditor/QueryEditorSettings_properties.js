/**
 * Properties class for ResourceBundle "QueryEditorSettings".
 */
Ext.define("com.coremedia.blueprint.base.queryeditor.QueryEditorSettings_properties", {

      /**
       *#############################################################################################
 * Comma separated (!)  list of the sortable columns
 *#############################################################################################
      */
  "sort_directions": "freshness,creationdate",
      /**
       *#############################################################################################
 * I18N of the sorting column
 *#############################################################################################
      */
  "sort_direction_freshness": "modification date",
  "sort_direction_creationdate": "creation date",
      /**
       *#############################################################################################
 * Sorting constants
 *#############################################################################################
      */
  "sort_direction_asc": "ascending",
  "sort_direction_desc": "descending",
      /**
       *#############################################################################################
 * Help text
 *#############################################################################################
      */
  "query_editor_window_html_content_key": "dynamic-content-query-help-en"
}, function() {

  com.coremedia.blueprint.base.queryeditor.QueryEditorSettings_properties.INSTANCE = new com.coremedia.blueprint.base.queryeditor.QueryEditorSettings_properties();
});