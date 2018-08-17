Ext.define("com.coremedia.cap.undoc.content.ContentUtil", function(ContentUtil) {/*package com.coremedia.cap.undoc.content {

import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.beanFactory;

public class ContentUtil {

  public static*/ function hasRightsRules$static(content/*:com.coremedia.cap.content.Content*/)/*:Boolean*/ {
    return AS3.cast(com.coremedia.cap.undoc.content.Content,content).hasRightsRules();
  }/*

  /**
   * Reads the content for the given URL.
   * @param ref The string id of the content to load, leading content prefixes will be handled too.
   * @return The content object, load call is executed asynchronously.
   * /
  public static*/ function getContent$static(ref/*:String*/)/*:com.coremedia.cap.content.Content*/ {
    var contentId/*:String*/ = ref;
    if (('' + ref).indexOf('/') != -1) {
      contentId = ref.substr(ref.lastIndexOf('/') + 1, ref.length);
    }
    var content/*:com.coremedia.cap.content.Content*/ =AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean("content/" + contentId),  com.coremedia.cap.content.Content);
    content.load();
    return content;
  }/*

}*/function ContentUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ContentUtil$,
      statics: {
        hasRightsRules: hasRightsRules$static,
        getContent: getContent$static
      },
      requires: ["com.coremedia.ui.data.beanFactory"],
      uses: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.undoc.content.Content"
      ]
    };
});
