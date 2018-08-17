Ext.define("com.coremedia.cap.content.impl.BulkDeleteMethod", function(BulkDeleteMethod) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.ContentRepository;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

public class BulkDeleteMethod extends AbstractBulkMethod {
  public*/ function BulkDeleteMethod$(contentRepository/*:ContentRepository*/, contents/*:Array*/, callback/*:Function*/) {
    this.super$D3K5(contentRepository, "bulkDeleteUri", false, false, contents, callback);
  }/*

  override protected*/ function makeResult(response/*:RemoteServiceMethodResponse*/)/*:Object*/ {
    return new com.coremedia.cap.content.impl.DeleteResultBuilder().convert(response);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.AbstractBulkMethod",
      constructor: BulkDeleteMethod$,
      super$D3K5: function() {
        com.coremedia.cap.content.impl.AbstractBulkMethod.prototype.constructor.apply(this, arguments);
      },
      makeResult: makeResult,
      requires: ["com.coremedia.cap.content.impl.AbstractBulkMethod"],
      uses: ["com.coremedia.cap.content.impl.DeleteResultBuilder"]
    };
});
