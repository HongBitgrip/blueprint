Ext.define("com.coremedia.cap.content.results.impl.BulkOperationResultImpl", function(BulkOperationResultImpl) {/*package com.coremedia.cap.content.results.impl {

import com.coremedia.cap.common.impl.OperationResultImpl;
import com.coremedia.cap.content.results.BulkOperationResult;
import com.coremedia.ui.data.error.RemoteError;

public class BulkOperationResultImpl extends OperationResultImpl implements BulkOperationResult {
  public*/ function BulkOperationResultImpl$(error/*:RemoteError*/, successful/*:Boolean*/, results/*:Array*/) {
    this.super$y9$Z(error, successful);
    this['results'] = results;
  }/*

  public native function get results():Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.common.impl.OperationResultImpl",
      mixins: ["com.coremedia.cap.content.results.BulkOperationResult"],
      constructor: BulkOperationResultImpl$,
      super$y9$Z: function() {
        com.coremedia.cap.common.impl.OperationResultImpl.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.common.impl.OperationResultImpl",
        "com.coremedia.cap.content.results.BulkOperationResult"
      ]
    };
});
