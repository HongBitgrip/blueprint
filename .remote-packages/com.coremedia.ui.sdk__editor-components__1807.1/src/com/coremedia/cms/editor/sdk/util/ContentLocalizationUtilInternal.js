Ext.define("com.coremedia.cms.editor.sdk.util.ContentLocalizationUtilInternal", function(ContentLocalizationUtilInternal) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.cap.content.Content;

import ext.data.SortTypes;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.TimeZones')]
[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class ContentLocalizationUtilInternal {
  public*/ function ContentLocalizationUtilInternal$() {
  }/*

  /**
   * @private
   * /
  public static*/ function documentTypeNameSortType$static(name/*:String*/)/*:String*/ {
    // "all, all content and folder types" to top:
    if (name === mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.ContentTypes', 'Folder__text'))
      return " 3";
    if (name === mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'content_type_any_txt'))
      return " 2";
    if (name === mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.ContentTypes', 'Content__text'))
      return " 1";
    return Ext.data.SortTypes.asUCString(name);
  }/*

  public static*/ function getIconStyleClassForUnreadableContent$static(contentUriPath/*:String*/)/*:String*/ {
    var content/*:Content*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getContentByUriPath(contentUriPath);
    if (content.isDocument()) {
      return com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassFromProperties("Document_");
    } else {
      return com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getIconStyleClassFromProperties("Folder_");
    }
  }/*

  public static*/ function localizeTimeZoneID$static(timeZoneId/*:String*/)/*:String*/ {
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.TimeZones', timeZoneId) || timeZoneId;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ContentLocalizationUtilInternal$,
      statics: {
        documentTypeNameSortType: documentTypeNameSortType$static,
        getIconStyleClassForUnreadableContent: getIconStyleClassForUnreadableContent$static,
        localizeTimeZoneID: localizeTimeZoneID$static
      },
      requires: [
        "Ext.data.SortTypes",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.TimeZones_properties",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"]
    };
});
