/**
 *[PublicApi]
 *[Deprecated(since="1.3.13",replacement="com.coremedia.cms.editor.ContentTypes_properties")]
 */
Ext.define("com.coremedia.cms.editor.StandardDocumentTypes_properties", {

  requires: [
    "com.coremedia.icons.CoreIcons_properties"
  ]

}, function() {
  this.prototype["ContentType_Dictionary_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.dictionary;
  this.prototype["ContentType_EditorPreferences_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.type_preferences;
  this.prototype["ContentType_Preferences_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.type_preferences;
  this.prototype["ContentType_Query_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.type_query;
  this.prototype["ContentType_Content__icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.type_object;
  this.prototype["ContentType_Document__icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.type_object;
  this.prototype["ContentType_Folder__icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.folder;
  this.prototype["ContentType_UserHomeFolder_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.home;

  com.coremedia.cms.editor.StandardDocumentTypes_properties.INSTANCE = new com.coremedia.cms.editor.StandardDocumentTypes_properties();
});