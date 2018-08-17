Ext.define("com.coremedia.cap.content.results.impl.DeleteResultItemImpl", function(DeleteResultItemImpl) {/*package com.coremedia.cap.content.results.impl {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.results.DeleteResultItem;
import com.coremedia.cap.user.User;

public class DeleteResultItemImpl extends BulkOperationResultItemImpl implements DeleteResultItem {
  public*/ function DeleteResultItemImpl$(resultCode/*:String*/, content/*: Content*/, editor/*:User*/) {
    this.super$WOsA(resultCode, content, null);
    this.editor = editor;
  }/*

  public native function get editor():User;
  public native function set editor(value:User):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl",
      mixins: ["com.coremedia.cap.content.results.DeleteResultItem"],
      constructor: DeleteResultItemImpl$,
      super$WOsA: function() {
        com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.DeleteResultItem",
        "com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl"
      ]
    };
});
