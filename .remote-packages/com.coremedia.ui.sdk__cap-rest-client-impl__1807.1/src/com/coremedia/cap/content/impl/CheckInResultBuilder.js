Ext.define("com.coremedia.cap.content.impl.CheckInResultBuilder", function(CheckInResultBuilder) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.results.BulkOperationResult;
import com.coremedia.cap.content.results.BulkOperationResultItem;
import com.coremedia.cap.content.results.impl.CheckInResultImpl;
import com.coremedia.cap.content.results.impl.CheckInResultItemImpl;
import com.coremedia.ui.data.error.RemoteError;

public class CheckInResultBuilder extends BulkOperationResultBuilder {
  override protected*/ function makeResultObject(error/*:RemoteError*/, successful/*:Boolean*/, resultItems/*:Array*/)/*:BulkOperationResult*/ {
    return new com.coremedia.cap.content.results.impl.CheckInResultImpl(error, successful, resultItems);
  }/*

  override protected*/ function makeResultItem(resultItem/*:Object*/)/*:BulkOperationResultItem*/ {
    return new com.coremedia.cap.content.results.impl.CheckInResultItemImpl(resultItem['category'], resultItem['content'], resultItem['editor'], resultItem['version']);
  }/*
}*/function CheckInResultBuilder$() {this.super$FLPO();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.BulkOperationResultBuilder",
      makeResultObject: makeResultObject,
      makeResultItem: makeResultItem,
      super$FLPO: function() {
        com.coremedia.cap.content.impl.BulkOperationResultBuilder.prototype.constructor.apply(this, arguments);
      },
      constructor: CheckInResultBuilder$,
      requires: ["com.coremedia.cap.content.impl.BulkOperationResultBuilder"],
      uses: [
        "com.coremedia.cap.content.results.impl.CheckInResultImpl",
        "com.coremedia.cap.content.results.impl.CheckInResultItemImpl"
      ]
    };
});
