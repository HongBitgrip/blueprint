Ext.define("com.coremedia.cap.content.results.impl.ApproveResultItemImpl", function(ApproveResultItemImpl) {/*package com.coremedia.cap.content.results.impl {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.results.ApproveResultItem;
import com.coremedia.cap.user.User;

public class ApproveResultItemImpl extends BulkOperationResultItemImpl implements ApproveResultItem {
  public*/ function ApproveResultItemImpl$(resultCode/*:String*/, content/*: Content*/, editor/*:User*/) {
    this.super$kvsk(resultCode, content, null);
    this.editor = editor;
  }/*

  public native function get editor():User;
  public native function set editor(value:User):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl",
      mixins: ["com.coremedia.cap.content.results.ApproveResultItem"],
      constructor: ApproveResultItemImpl$,
      super$kvsk: function() {
        com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.ApproveResultItem",
        "com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl"
      ]
    };
});
