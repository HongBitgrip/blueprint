Ext.define("com.coremedia.cap.content.impl.BulkRevertMethod", function(BulkRevertMethod) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.ContentRepository;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

public class BulkRevertMethod extends AbstractBulkMethod {
  public*/ function BulkRevertMethod$(contentRepository/*:ContentRepository*/, contents/*:Array*/, callback/*:Function*/) {
    this.super$XCf_(contentRepository, "bulkRevertUri", true, false, contents, callback);
  }/*

  override public*/ function doExecute()/*:void*/ {
    com.coremedia.ui.data.RemoteBeanUtil.invalidateAll(BulkRevertMethod['superclass'].doExecute.bind(this), this.getContents());
  }/*

  override protected*/ function makeResult(response/*:RemoteServiceMethodResponse*/)/*:Object*/ {
    return new com.coremedia.cap.content.impl.RevertResultBuilder().convert(response);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.AbstractBulkMethod",
      constructor: BulkRevertMethod$,
      super$XCf_: function() {
        com.coremedia.cap.content.impl.AbstractBulkMethod.prototype.constructor.apply(this, arguments);
      },
      doExecute: doExecute,
      makeResult: makeResult,
      requires: [
        "com.coremedia.cap.content.impl.AbstractBulkMethod",
        "com.coremedia.ui.data.RemoteBeanUtil"
      ],
      uses: ["com.coremedia.cap.content.impl.RevertResultBuilder"]
    };
});
