Ext.define("com.coremedia.cms.editor.sdk.upload.XliffBulkOperationResultBuilder", function(XliffBulkOperationResultBuilder) {/*package com.coremedia.cms.editor.sdk.upload {
import com.coremedia.cap.content.impl.BulkOperationResultBuilder;
import com.coremedia.cap.content.results.BulkOperationResult;
import com.coremedia.cap.content.results.BulkOperationResultItem;
import com.coremedia.ui.data.error.RemoteError;

public class XliffBulkOperationResultBuilder extends BulkOperationResultBuilder {
  override protected*/ function makeResultItem(resultItem/*:Object*/)/*:BulkOperationResultItem*/ {
    return new com.coremedia.cms.editor.sdk.upload.XliffBulkOperationResultItem(resultItem['category'], resultItem['content'], resultItem['property']);
  }/*

  override protected*/ function makeResultObject(error/*:RemoteError*/, successful/*:Boolean*/,
                                               resultItems/*:Array*/)/*:BulkOperationResult*/ {
    return new com.coremedia.cms.editor.sdk.upload.XliffBulkOperationResult(error, successful, resultItems);
  }/*
}*/function XliffBulkOperationResultBuilder$() {this.super$30sB();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.BulkOperationResultBuilder",
      makeResultItem: makeResultItem,
      makeResultObject: makeResultObject,
      super$30sB: function() {
        com.coremedia.cap.content.impl.BulkOperationResultBuilder.prototype.constructor.apply(this, arguments);
      },
      constructor: XliffBulkOperationResultBuilder$,
      requires: ["com.coremedia.cap.content.impl.BulkOperationResultBuilder"],
      uses: [
        "com.coremedia.cms.editor.sdk.upload.XliffBulkOperationResult",
        "com.coremedia.cms.editor.sdk.upload.XliffBulkOperationResultItem"
      ]
    };
});
