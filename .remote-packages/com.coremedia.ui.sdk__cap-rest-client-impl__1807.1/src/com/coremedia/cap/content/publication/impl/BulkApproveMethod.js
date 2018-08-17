Ext.define("com.coremedia.cap.content.publication.impl.BulkApproveMethod", function(BulkApproveMethod) {/*package com.coremedia.cap.content.publication.impl {

import com.coremedia.cap.content.ContentRepository;
import com.coremedia.cap.content.impl.*;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

public class BulkApproveMethod extends AbstractBulkMethod {
  public*/ function BulkApproveMethod$(contentRepository/*:ContentRepository*/, contents/*:Array*/, callback/*:Function*/) {
    this.super$BngN(contentRepository, "bulkApproveUri", true, false, contents, callback);
  }/*

  override protected*/ function makeResult(response/*:RemoteServiceMethodResponse*/)/*:Object*/ {
    return new com.coremedia.cap.content.impl.ApproveResultBuilder().convert(response);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.AbstractBulkMethod",
      constructor: BulkApproveMethod$,
      super$BngN: function() {
        com.coremedia.cap.content.impl.AbstractBulkMethod.prototype.constructor.apply(this, arguments);
      },
      makeResult: makeResult,
      requires: ["com.coremedia.cap.content.impl.AbstractBulkMethod"],
      uses: ["com.coremedia.cap.content.impl.ApproveResultBuilder"]
    };
});
