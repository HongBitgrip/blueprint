Ext.define("com.coremedia.cap.content.impl.BulkOperationResultBuilder", function(BulkOperationResultBuilder) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.results.BulkOperationResult;
import com.coremedia.cap.content.results.BulkOperationResultItem;
import com.coremedia.cap.content.results.impl.BulkOperationResultImpl;
import com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

public class BulkOperationResultBuilder {
  public*/ function convert(response/*:RemoteServiceMethodResponse*/)/*:BulkOperationResult*/ {var this$=this;
    var error/*:RemoteError*/ = response.success ? null : response.getError();

    var resultItems/*:Array*/ = [];
    //noinspection JSMismatchedCollectionQueryUpdateInspection
    var responseJSON/*:Object*/ = response.getResponseJSON();
    var rawResultItems/*:Array*/ = responseJSON && responseJSON['resultItems'] || [];
    rawResultItems.forEach(function(resultItem/*:Object*/)/*:void*/ {
      resultItems.push(this$.makeResultItem(resultItem));
    });

    var successful/*:Boolean*/ = response.success && responseJSON['successful'];
    return this.makeResultObject(error, successful, resultItems);
  }/*

  protected*/ function makeResultObject(error/*:RemoteError*/, successful/*:Boolean*/, resultItems/*:Array*/)/*:BulkOperationResult*/ {
    return new com.coremedia.cap.content.results.impl.BulkOperationResultImpl(error, successful, resultItems);
  }/*

  /**
   * Convert a wire-level result item to an API-level result item.
   * @param resultItem the wire-level result item
   * @return the API-level result item
   * /
  protected*/ function makeResultItem(resultItem/*:Object*/)/*:BulkOperationResultItem*/ {
    return new com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl(resultItem['category'], resultItem['content'], resultItem['impediment']);
  }/*
}*/function BulkOperationResultBuilder$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      convert: convert,
      makeResultObject: makeResultObject,
      makeResultItem: makeResultItem,
      constructor: BulkOperationResultBuilder$,
      uses: [
        "com.coremedia.cap.content.results.impl.BulkOperationResultImpl",
        "com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl"
      ]
    };
});
