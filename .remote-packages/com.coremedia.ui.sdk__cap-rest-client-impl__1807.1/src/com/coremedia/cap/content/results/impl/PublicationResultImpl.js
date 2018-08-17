Ext.define("com.coremedia.cap.content.results.impl.PublicationResultImpl", function(PublicationResultImpl) {/*package com.coremedia.cap.content.results.impl {

import com.coremedia.cap.content.results.PublicationResult;
import com.coremedia.ui.data.error.RemoteError;

public class PublicationResultImpl extends BulkOperationResultImpl implements PublicationResult {
  public*/ function PublicationResultImpl$(error/*:RemoteError*/, successful/*:Boolean*/, results/*:Array*/) {
    this.super$3yaQ(error, successful, results);
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.results.impl.BulkOperationResultImpl",
      mixins: ["com.coremedia.cap.content.results.PublicationResult"],
      constructor: PublicationResultImpl$,
      super$3yaQ: function() {
        com.coremedia.cap.content.results.impl.BulkOperationResultImpl.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.PublicationResult",
        "com.coremedia.cap.content.results.impl.BulkOperationResultImpl"
      ]
    };
});
