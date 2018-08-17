Ext.define("com.coremedia.cap.content.impl.ApproveResultBuilder", function(ApproveResultBuilder) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.results.BulkOperationResult;
import com.coremedia.cap.content.results.BulkOperationResultItem;
import com.coremedia.cap.content.results.impl.ApproveResultImpl;
import com.coremedia.cap.content.results.impl.ApproveResultItemImpl;
import com.coremedia.ui.data.error.RemoteError;

public class ApproveResultBuilder extends BulkOperationResultBuilder {
  override protected*/ function makeResultObject(error/*:RemoteError*/, successful/*:Boolean*/, resultItems/*:Array*/)/*:BulkOperationResult*/ {
    return new com.coremedia.cap.content.results.impl.ApproveResultImpl(error, successful, resultItems);
  }/*

  override protected*/ function makeResultItem(resultItem/*:Object*/)/*:BulkOperationResultItem*/ {
    return new com.coremedia.cap.content.results.impl.ApproveResultItemImpl(resultItem['category'], resultItem['content'], resultItem['editor']);
  }/*
}*/function ApproveResultBuilder$() {this.super$adzO();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.BulkOperationResultBuilder",
      makeResultObject: makeResultObject,
      makeResultItem: makeResultItem,
      super$adzO: function() {
        com.coremedia.cap.content.impl.BulkOperationResultBuilder.prototype.constructor.apply(this, arguments);
      },
      constructor: ApproveResultBuilder$,
      requires: ["com.coremedia.cap.content.impl.BulkOperationResultBuilder"],
      uses: [
        "com.coremedia.cap.content.results.impl.ApproveResultImpl",
        "com.coremedia.cap.content.results.impl.ApproveResultItemImpl"
      ]
    };
});
