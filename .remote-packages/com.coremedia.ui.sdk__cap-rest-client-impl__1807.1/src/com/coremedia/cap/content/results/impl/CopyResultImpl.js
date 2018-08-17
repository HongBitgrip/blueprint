Ext.define("com.coremedia.cap.content.results.impl.CopyResultImpl", function(CopyResultImpl) {/*package com.coremedia.cap.content.results.impl {

import com.coremedia.cap.content.results.CopyResult;
import com.coremedia.ui.data.error.RemoteError;

public class CopyResultImpl extends BulkOperationResultImpl implements CopyResult {
  public*/ function CopyResultImpl$(error/*:RemoteError*/, successful/*:Boolean*/, results/*:Array*/) {
    this.super$TzXX(error, successful, results);
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.results.impl.BulkOperationResultImpl",
      mixins: ["com.coremedia.cap.content.results.CopyResult"],
      constructor: CopyResultImpl$,
      super$TzXX: function() {
        com.coremedia.cap.content.results.impl.BulkOperationResultImpl.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.CopyResult",
        "com.coremedia.cap.content.results.impl.BulkOperationResultImpl"
      ]
    };
});
