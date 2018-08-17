Ext.define("com.coremedia.cms.editor.sdk.collectionview.CollectionViewUtil", function(CollectionViewUtil) {/*package com.coremedia.cms.editor.sdk.collectionview {

import com.coremedia.cap.content.ContentType;
import com.coremedia.cms.editor.sdk.util.PreferencesUtil;

import ext.Ext;

public class CollectionViewUtil {

  private static const*/var PREFERENCES_COLLECTION$static/*:String*/ = "collection";/*
  private static const*/var PREFERENCES_SAVED_SEARCHES$static/*:String*/ = "savedSearches";/*

  public static*/ function applyBlacklist$static(allTypes/*:Array*/, blacklistedNames/*:Array*/)/*:Array*/ {
    var result/*:Array*/ = [];
    Ext.each(allTypes, function (ct/*:ContentType*/)/*:void*/ {
      if (!blacklistedNames.some(function (name/*:String*/)/*:Boolean*/ {
        return ct.getName() === name;
      })) {
        result.push(ct);
      }
    });
    return result;
  }/*

  public static*/ function updateSavedSearches$static(searches/*:Array*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.util.PreferencesUtil.updatePreferencesJSONProperty(searches, PREFERENCES_COLLECTION$static, PREFERENCES_SAVED_SEARCHES$static);
  }/*

  public static*/ function getSavedSearches$static()/*:Array*/ {
    return AS3.as( com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesJSONProperty([com.coremedia.cms.editor.sdk.util.PreferencesUtil.decodeJsonString],
            PREFERENCES_COLLECTION$static, PREFERENCES_SAVED_SEARCHES$static),  Array);
  }/*
}*/function CollectionViewUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: CollectionViewUtil$,
      statics: {
        applyBlacklist: applyBlacklist$static,
        updateSavedSearches: updateSavedSearches$static,
        getSavedSearches: getSavedSearches$static
      },
      requires: ["Ext"],
      uses: ["com.coremedia.cms.editor.sdk.util.PreferencesUtil"]
    };
});
