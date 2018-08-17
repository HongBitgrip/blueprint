Ext.define("com.coremedia.cap.content.results.impl.ApproveResultImpl", function(ApproveResultImpl) {/*package com.coremedia.cap.content.results.impl {

import com.coremedia.cap.content.results.ApproveResult;
import com.coremedia.ui.data.error.RemoteError;

public class ApproveResultImpl extends BulkOperationResultImpl implements ApproveResult {
  public*/ function ApproveResultImpl$(error/*:RemoteError*/, successful/*:Boolean*/, results/*:Array*/) {
    this.super$4PLx(error, successful, results);
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.results.impl.BulkOperationResultImpl",
      mixins: ["com.coremedia.cap.content.results.ApproveResult"],
      constructor: ApproveResultImpl$,
      super$4PLx: function() {
        com.coremedia.cap.content.results.impl.BulkOperationResultImpl.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.ApproveResult",
        "com.coremedia.cap.content.results.impl.BulkOperationResultImpl"
      ]
    };
});
