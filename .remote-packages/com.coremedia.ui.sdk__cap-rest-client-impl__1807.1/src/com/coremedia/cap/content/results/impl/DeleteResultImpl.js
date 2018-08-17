Ext.define("com.coremedia.cap.content.results.impl.DeleteResultImpl", function(DeleteResultImpl) {/*package com.coremedia.cap.content.results.impl {

import com.coremedia.cap.content.results.DeleteResult;
import com.coremedia.ui.data.error.RemoteError;

public class DeleteResultImpl extends BulkOperationResultImpl implements DeleteResult {
  public*/ function DeleteResultImpl$(error/*:RemoteError*/, successful/*:Boolean*/, results/*:Array*/) {
    this.super$8TDN(error, successful, results);
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.results.impl.BulkOperationResultImpl",
      mixins: ["com.coremedia.cap.content.results.DeleteResult"],
      constructor: DeleteResultImpl$,
      super$8TDN: function() {
        com.coremedia.cap.content.results.impl.BulkOperationResultImpl.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.DeleteResult",
        "com.coremedia.cap.content.results.impl.BulkOperationResultImpl"
      ]
    };
});
