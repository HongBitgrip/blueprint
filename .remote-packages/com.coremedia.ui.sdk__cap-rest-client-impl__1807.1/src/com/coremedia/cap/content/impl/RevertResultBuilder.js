Ext.define("com.coremedia.cap.content.impl.RevertResultBuilder", function(RevertResultBuilder) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.results.BulkOperationResult;
import com.coremedia.cap.content.results.BulkOperationResultItem;
import com.coremedia.cap.content.results.impl.RevertResultImpl;
import com.coremedia.cap.content.results.impl.RevertResultItemImpl;
import com.coremedia.ui.data.error.RemoteError;

public class RevertResultBuilder extends BulkOperationResultBuilder {
  override protected*/ function makeResultObject(error/*:RemoteError*/, successful/*:Boolean*/, resultItems/*:Array*/)/*:BulkOperationResult*/ {
    return new com.coremedia.cap.content.results.impl.RevertResultImpl(error, successful, resultItems);
  }/*

  override protected*/ function makeResultItem(resultItem/*:Object*/)/*:BulkOperationResultItem*/ {
    return new com.coremedia.cap.content.results.impl.RevertResultItemImpl(resultItem['category'], resultItem['content'], resultItem['editor']);
  }/*
}*/function RevertResultBuilder$() {this.super$M1jp();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.BulkOperationResultBuilder",
      makeResultObject: makeResultObject,
      makeResultItem: makeResultItem,
      super$M1jp: function() {
        com.coremedia.cap.content.impl.BulkOperationResultBuilder.prototype.constructor.apply(this, arguments);
      },
      constructor: RevertResultBuilder$,
      requires: ["com.coremedia.cap.content.impl.BulkOperationResultBuilder"],
      uses: [
        "com.coremedia.cap.content.results.impl.RevertResultImpl",
        "com.coremedia.cap.content.results.impl.RevertResultItemImpl"
      ]
    };
});
