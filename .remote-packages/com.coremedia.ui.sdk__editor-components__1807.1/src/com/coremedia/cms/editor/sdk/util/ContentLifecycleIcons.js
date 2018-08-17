Ext.define("com.coremedia.cms.editor.sdk.util.ContentLifecycleIcons", function(ContentLifecycleIcons) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cap.content.LifecycleStatus;

/**
 * Factory class for creating the styles
 * of the link list icons: Do not use. Use ContentLifecycleUtil instead.
 * /
public class ContentLifecycleIcons {

  /**
   * A little bit tricky here, since we only handle 2 parts of
   * the content class lifecycle in for a column.
   * @param lifecycleStatus
   * @return
   * /
  public static*/ function getLifecycleClass$static(lifecycleStatus/*:String*/)/*:String*/ {
    if(lifecycleStatus === com.coremedia.cap.content.LifecycleStatus.DELETED) {
      return "status-deleted";
    }
    return "";
  }/*
}*/function ContentLifecycleIcons$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ContentLifecycleIcons$,
      statics: {getLifecycleClass: getLifecycleClass$static},
      requires: ["com.coremedia.cap.content.LifecycleStatus"]
    };
});
