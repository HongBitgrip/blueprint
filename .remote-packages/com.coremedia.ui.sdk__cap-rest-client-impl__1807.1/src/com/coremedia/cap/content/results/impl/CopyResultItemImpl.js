Ext.define("com.coremedia.cap.content.results.impl.CopyResultItemImpl", function(CopyResultItemImpl) {/*package com.coremedia.cap.content.results.impl {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.results.CopyResultItem;

public class CopyResultItemImpl extends BulkOperationResultItemImpl implements CopyResultItem {
  public*/ function CopyResultItemImpl$(resultCode/*:String*/, content/*: Content*/, createdContent/*:Content*/) {
    this.super$sVsK(resultCode, content, null);
    this.createdContent = createdContent;
  }/*

  public native function get createdContent():Content;
  public native function set createdContent(value:Content):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl",
      mixins: ["com.coremedia.cap.content.results.CopyResultItem"],
      constructor: CopyResultItemImpl$,
      super$sVsK: function() {
        com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.CopyResultItem",
        "com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl"
      ]
    };
});
