/**
 * Properties class for ResourceBundle "NavigationLinkField".
 */
Ext.define("com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField_properties", {

  requires: [
    "com.coremedia.icons.CoreIcons_properties"
  ],
  "layout_error": "Invalid Page Selection",
  "layout_error_msg": "The selected parent is currently edited by user '{0}'.",
  "site_error_msg": "The content item belongs to site '{0}' but the active site is '{1}'. Please select a content item from the active site.",
  "delete_link_btn_tooltip_text": "Delete",
  "copy_link_btn_tooltip_text": "Copy",
  "paste_link_btn_tooltip_text": "Paste"
}, function() {
  this.prototype["copy_link_btn_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.copy;
  this.prototype["paste_link_btn_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.paste;

  com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField_properties.INSTANCE = new com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField_properties();
});