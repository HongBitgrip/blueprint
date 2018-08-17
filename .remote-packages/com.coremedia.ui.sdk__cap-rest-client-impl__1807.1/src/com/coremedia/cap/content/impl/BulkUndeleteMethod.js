Ext.define("com.coremedia.cap.content.impl.BulkUndeleteMethod", function(BulkUndeleteMethod) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.ContentRepository;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

public class BulkUndeleteMethod extends AbstractBulkMethod {
  public*/ function BulkUndeleteMethod$(contentRepository/*:ContentRepository*/, contents/*:Array*/, callback/*:Function*/) {
    this.super$4EFU(contentRepository, "bulkUndeleteUri", false, false, contents, callback);
  }/*

  override protected*/ function makeResult(response/*:RemoteServiceMethodResponse*/)/*:Object*/ {
    return new com.coremedia.cap.content.impl.BulkOperationResultBuilder().convert(response);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.AbstractBulkMethod",
      constructor: BulkUndeleteMethod$,
      super$4EFU: function() {
        com.coremedia.cap.content.impl.AbstractBulkMethod.prototype.constructor.apply(this, arguments);
      },
      makeResult: makeResult,
      requires: ["com.coremedia.cap.content.impl.AbstractBulkMethod"],
      uses: ["com.coremedia.cap.content.impl.BulkOperationResultBuilder"]
    };
});
