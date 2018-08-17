Ext.define("com.coremedia.cms.editor.sdk.util.ContentLifecycleUtil", function(ContentLifecycleUtil) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.cap.content.Content;

import ext.StringUtil;

/**
 * Factory class for creating the styles
 * of the link list icons.
 * /
public class ContentLifecycleUtil {
  /**
   * The status code for a content that is checked-out by another user.
   * /
  public static const CHECKED_OUT_BY_OTHER_LIFECYCLE_STATUS:String = "checked-out-by-other";

  /**
   * The status code for a content that is checked-out by the current user.
   * /
  public static const CHECKED_OUT_LIFECYCLE_STATUS:String = "checked-out";

  /**
   * Return an extended lifecycle status that also indicates whether a
   * content is checked out by the current user or another user.
   *
   * @param content the content
   * @return the extended lifecycle
   * /
  public static*/ function getDetailedLifecycleStatus$static(content/*:Content*/)/*:String*/ {
    if (!content) {
      return "";
    }
    var status/*:String*/ = content.getLifecycleStatus();
    if (content.isCheckedOutByOther()) {
      status = ContentLifecycleUtil.CHECKED_OUT_BY_OTHER_LIFECYCLE_STATUS;
    } else if (content.isCheckedOut()) {
      status = ContentLifecycleUtil.CHECKED_OUT_LIFECYCLE_STATUS;
    }
    return status;
  }/*

  public static*/ function localizeDetailedLifecycleStatus$static(status/*:String*/, editor/*:String*/)/*:String*/ {
    var result/*:String*/ = com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil.getLocalizedLifecycleStatus(status) || "";
    return !editor ? result : Ext.String.format(result, editor);
  }/*
}*/function ContentLifecycleUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ContentLifecycleUtil$,
      statics: {
        CHECKED_OUT_BY_OTHER_LIFECYCLE_STATUS: "checked-out-by-other",
        CHECKED_OUT_LIFECYCLE_STATUS: "checked-out",
        getDetailedLifecycleStatus: getDetailedLifecycleStatus$static,
        localizeDetailedLifecycleStatus: localizeDetailedLifecycleStatus$static
      },
      requires: ["Ext.String"],
      uses: ["com.coremedia.cms.editor.sdk.util.ContentLocalizationUtil"]
    };
});
