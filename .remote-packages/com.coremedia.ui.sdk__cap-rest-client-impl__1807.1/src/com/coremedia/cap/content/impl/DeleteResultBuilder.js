Ext.define("com.coremedia.cap.content.impl.DeleteResultBuilder", function(DeleteResultBuilder) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.results.BulkOperationResult;
import com.coremedia.cap.content.results.BulkOperationResultItem;
import com.coremedia.cap.content.results.impl.DeleteResultImpl;
import com.coremedia.cap.content.results.impl.DeleteResultItemImpl;
import com.coremedia.ui.data.error.RemoteError;

public class DeleteResultBuilder extends BulkOperationResultBuilder {
  override protected*/ function makeResultObject(error/*:RemoteError*/, successful/*:Boolean*/, resultItems/*:Array*/)/*:BulkOperationResult*/ {
    return new com.coremedia.cap.content.results.impl.DeleteResultImpl(error, successful, resultItems);
  }/*

  override protected*/ function makeResultItem(resultItem/*:Object*/)/*:BulkOperationResultItem*/ {
    return new com.coremedia.cap.content.results.impl.DeleteResultItemImpl(resultItem['category'], resultItem['content'], resultItem['editor']);
  }/*
}*/function DeleteResultBuilder$() {this.super$71iC();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.BulkOperationResultBuilder",
      makeResultObject: makeResultObject,
      makeResultItem: makeResultItem,
      super$71iC: function() {
        com.coremedia.cap.content.impl.BulkOperationResultBuilder.prototype.constructor.apply(this, arguments);
      },
      constructor: DeleteResultBuilder$,
      requires: ["com.coremedia.cap.content.impl.BulkOperationResultBuilder"],
      uses: [
        "com.coremedia.cap.content.results.impl.DeleteResultImpl",
        "com.coremedia.cap.content.results.impl.DeleteResultItemImpl"
      ]
    };
});
