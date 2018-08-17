/**
 * Properties class for ResourceBundle "NavigationTreeSettings".
 */
Ext.define("com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings_properties", {

      /**
       * Page Grid Struct Path values, see PageGridConstants.as
 *##############################################################
      */
  "pagegrid_new_placements_base_property": "placements_2",
  "pagegrid_list_property": "placements",
  "pagegird_placement_items_property": "items",
      /**
       * Document type settings
 *##############################################################
      */
  "hidden_in_navigation_property": "hidden",
  "navigation_children_property": "children",
  "navigation_document_type": "CMChannel",
  "navigation_document_type_exclusions": "CMCategory",
      /**
       * UI Settings
 *##############################################################
      */
  "all_documents_iconCls": "content-type-CMObject-icon",
  "navigation_node_text": "Page",
  "navigation_node_label": "Page",
  "navigation_node_iconCls": "content-type-CMChannel-icon",
  "validation_enabled": "true"
}, function() {

  com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings_properties.INSTANCE = new com.coremedia.cms.editor.sdk.navigationtree.NavigationTreeSettings_properties();
});