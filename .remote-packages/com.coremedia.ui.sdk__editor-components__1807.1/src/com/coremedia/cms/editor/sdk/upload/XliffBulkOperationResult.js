Ext.define("com.coremedia.cms.editor.sdk.upload.XliffBulkOperationResult", function(XliffBulkOperationResult) {/*package com.coremedia.cms.editor.sdk.upload {
import com.coremedia.cap.content.results.impl.BulkOperationResultImpl;
import com.coremedia.ui.data.error.RemoteError;

public class XliffBulkOperationResult extends BulkOperationResultImpl {
  public*/ function XliffBulkOperationResult$(error/*:RemoteError*/, successful/*:Boolean*/,
                                           results/*:Array*/) {
    this.super$52lm(error, successful, results);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.results.impl.BulkOperationResultImpl",
      constructor: XliffBulkOperationResult$,
      super$52lm: function() {
        com.coremedia.cap.content.results.impl.BulkOperationResultImpl.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.cap.content.results.impl.BulkOperationResultImpl"]
    };
});
