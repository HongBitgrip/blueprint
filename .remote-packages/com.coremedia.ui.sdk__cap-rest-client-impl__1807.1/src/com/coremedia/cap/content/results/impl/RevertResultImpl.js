Ext.define("com.coremedia.cap.content.results.impl.RevertResultImpl", function(RevertResultImpl) {/*package com.coremedia.cap.content.results.impl {

import com.coremedia.cap.content.results.RevertResult;
import com.coremedia.ui.data.error.RemoteError;

public class RevertResultImpl extends BulkOperationResultImpl implements RevertResult {
  public*/ function RevertResultImpl$(error/*:RemoteError*/, successful/*:Boolean*/, results/*:Array*/) {
    this.super$oGHG(error, successful, results);
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.results.impl.BulkOperationResultImpl",
      mixins: ["com.coremedia.cap.content.results.RevertResult"],
      constructor: RevertResultImpl$,
      super$oGHG: function() {
        com.coremedia.cap.content.results.impl.BulkOperationResultImpl.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.RevertResult",
        "com.coremedia.cap.content.results.impl.BulkOperationResultImpl"
      ]
    };
});
