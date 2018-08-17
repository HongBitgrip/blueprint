Ext.define("com.coremedia.cap.content.results.impl.RevertResultItemImpl", function(RevertResultItemImpl) {/*package com.coremedia.cap.content.results.impl {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.results.RevertResultItem;
import com.coremedia.cap.user.User;

public class RevertResultItemImpl extends BulkOperationResultItemImpl implements RevertResultItem {
  public*/ function RevertResultItemImpl$(resultCode/*:String*/, content/*: Content*/, editor/*:User*/) {
    this.super$nPe3(resultCode, content, null);
    this.editor = editor;
  }/*

  public native function get editor():User;
  public native function set editor(value:User):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl",
      mixins: ["com.coremedia.cap.content.results.RevertResultItem"],
      constructor: RevertResultItemImpl$,
      super$nPe3: function() {
        com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.RevertResultItem",
        "com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl"
      ]
    };
});
