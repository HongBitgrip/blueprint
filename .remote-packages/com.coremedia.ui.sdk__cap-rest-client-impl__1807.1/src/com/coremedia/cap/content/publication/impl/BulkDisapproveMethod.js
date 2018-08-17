Ext.define("com.coremedia.cap.content.publication.impl.BulkDisapproveMethod", function(BulkDisapproveMethod) {/*package com.coremedia.cap.content.publication.impl {

import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.content.impl.*;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

public class BulkDisapproveMethod extends AbstractBulkMethod {
  public*/ function BulkDisapproveMethod$(contentRepository/*:ContentRepository*/, contents/*:Array*/, callback/*:Function*/) {
    this.super$ANGN(contentRepository, "bulkDisapproveUri", true, false, contents, callback);
  }/*

  override protected*/ function makeResult(response/*:RemoteServiceMethodResponse*/)/*:Object*/ {
    return new com.coremedia.cap.content.impl.BulkOperationResultBuilder().convert(response);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.AbstractBulkMethod",
      constructor: BulkDisapproveMethod$,
      super$ANGN: function() {
        com.coremedia.cap.content.impl.AbstractBulkMethod.prototype.constructor.apply(this, arguments);
      },
      makeResult: makeResult,
      requires: ["com.coremedia.cap.content.impl.AbstractBulkMethod"],
      uses: ["com.coremedia.cap.content.impl.BulkOperationResultBuilder"]
    };
});
