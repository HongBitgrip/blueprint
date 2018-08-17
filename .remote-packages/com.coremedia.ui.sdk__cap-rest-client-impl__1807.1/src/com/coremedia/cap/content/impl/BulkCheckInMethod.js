Ext.define("com.coremedia.cap.content.impl.BulkCheckInMethod", function(BulkCheckInMethod) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.ContentRepository;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

public class BulkCheckInMethod extends AbstractBulkMethod {
  public*/ function BulkCheckInMethod$(contentRepository/*:ContentRepository*/, contents/*:Array*/, callback/*:Function*/) {
    this.super$yn0L(contentRepository, "bulkCheckInUri", true, false, contents, callback);
  }/*

  override protected*/ function makeResult(response/*:RemoteServiceMethodResponse*/)/*:Object*/ {
    return new com.coremedia.cap.content.impl.CheckInResultBuilder().convert(response);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.AbstractBulkMethod",
      constructor: BulkCheckInMethod$,
      super$yn0L: function() {
        com.coremedia.cap.content.impl.AbstractBulkMethod.prototype.constructor.apply(this, arguments);
      },
      makeResult: makeResult,
      requires: ["com.coremedia.cap.content.impl.AbstractBulkMethod"],
      uses: ["com.coremedia.cap.content.impl.CheckInResultBuilder"]
    };
});
