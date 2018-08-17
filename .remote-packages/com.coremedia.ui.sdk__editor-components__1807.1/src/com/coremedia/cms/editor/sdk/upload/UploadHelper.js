Ext.define("com.coremedia.cms.editor.sdk.upload.UploadHelper", function(UploadHelper) {/*package com.coremedia.cms.editor.sdk.upload {
import ext.tip.QuickTipManager;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.upload.Upload')]
public class UploadHelper {
  public static*/ function isHTML5$static()/*:Boolean*/ {
    return window.File && window.FileReader && window.FileList && window.Blob;
  }/*

  public static*/ function resolveTooltip$static()/*:String*/ {
    if (!UploadHelper.isHTML5()) {
      return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.upload.Upload', 'UploadFileAction_tooltip_disabled');
    }
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.upload.Upload', 'UploadFileAction_tooltip');
  }/*

  public static*/ function resolveMenuItemTooltip$static(thisMenuItem/*:**/)/*:void*/ {
    if (!UploadHelper.isHTML5()) {
      Ext.tip.QuickTipManager.register({target:thisMenuItem.getEl().getAttribute('id'), text:UploadHelper.resolveTooltip()});
    }
  }/*
}*/function UploadHelper$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: UploadHelper$,
      statics: {
        isHTML5: isHTML5$static,
        resolveTooltip: resolveTooltip$static,
        resolveMenuItemTooltip: resolveMenuItemTooltip$static
      },
      requires: [
        "Ext.tip.QuickTipManager",
        "com.coremedia.cms.editor.sdk.upload.Upload_properties",
        "mx.resources.ResourceManager"
      ]
    };
});
