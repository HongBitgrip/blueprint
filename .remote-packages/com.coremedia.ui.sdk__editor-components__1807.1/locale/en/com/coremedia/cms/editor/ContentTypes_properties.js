/**
 *[PublicApi]
 */
Ext.define("com.coremedia.cms.editor.ContentTypes_properties", {

  requires: [
    "com.coremedia.icons.CoreIcons_properties"
  ],
  "Content__text": "All",
  "Content__toolTip": "All",
  "Folder__text": "Folder",
  "Folder__toolTip": "Folder"
}, function() {
  this.prototype["Dictionary_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.dictionary;
  this.prototype["EditorPreferences_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.type_preferences;
  this.prototype["Preferences_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.type_preferences;
  this.prototype["Query_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.type_query;
  this.prototype["Settings_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.type_settings;
  this.prototype["Content__icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.type_object;
  this.prototype["Document__icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.type_object;
  this.prototype["Folder__icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.folder;

  com.coremedia.cms.editor.ContentTypes_properties.INSTANCE = new com.coremedia.cms.editor.ContentTypes_properties();
});