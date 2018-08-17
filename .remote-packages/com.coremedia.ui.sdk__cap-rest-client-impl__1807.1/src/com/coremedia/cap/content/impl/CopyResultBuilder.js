Ext.define("com.coremedia.cap.content.impl.CopyResultBuilder", function(CopyResultBuilder) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.results.BulkOperationResult;
import com.coremedia.cap.content.results.BulkOperationResultItem;
import com.coremedia.cap.content.results.impl.CopyResultImpl;
import com.coremedia.cap.content.results.impl.CopyResultItemImpl;
import com.coremedia.ui.data.error.RemoteError;

public class CopyResultBuilder extends BulkOperationResultBuilder {
  override protected*/ function makeResultObject(error/*:RemoteError*/, successful/*:Boolean*/, resultItems/*:Array*/)/*:BulkOperationResult*/ {
    return new com.coremedia.cap.content.results.impl.CopyResultImpl(error, successful, resultItems);
  }/*

  override protected*/ function makeResultItem(resultItem/*:Object*/)/*:BulkOperationResultItem*/ {
    return new com.coremedia.cap.content.results.impl.CopyResultItemImpl(resultItem['category'], resultItem['content'], resultItem['copy']);
  }/*
}*/function CopyResultBuilder$() {this.super$$_F2();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.BulkOperationResultBuilder",
      makeResultObject: makeResultObject,
      makeResultItem: makeResultItem,
      super$$_F2: function() {
        com.coremedia.cap.content.impl.BulkOperationResultBuilder.prototype.constructor.apply(this, arguments);
      },
      constructor: CopyResultBuilder$,
      requires: ["com.coremedia.cap.content.impl.BulkOperationResultBuilder"],
      uses: [
        "com.coremedia.cap.content.results.impl.CopyResultImpl",
        "com.coremedia.cap.content.results.impl.CopyResultItemImpl"
      ]
    };
});
