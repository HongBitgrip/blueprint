Ext.define("com.coremedia.cap.content.publication.impl.PublicationResultBuilder", function(PublicationResultBuilder) {/*package com.coremedia.cap.content.publication.impl {

import com.coremedia.cap.content.impl.*;
import com.coremedia.cap.content.results.BulkOperationResult;
import com.coremedia.cap.content.results.BulkOperationResultItem;
import com.coremedia.cap.content.results.impl.PublicationResultImpl;
import com.coremedia.cap.content.results.impl.PublicationResultItemImpl;
import com.coremedia.ui.data.error.RemoteError;

public class PublicationResultBuilder extends BulkOperationResultBuilder {
  override protected*/ function makeResultObject(error/*:RemoteError*/, successful/*:Boolean*/, resultItems/*:Array*/)/*:BulkOperationResult*/ {
    return new com.coremedia.cap.content.results.impl.PublicationResultImpl(error, successful, resultItems);
  }/*

  override protected*/ function makeResultItem(resultItem/*:Object*/)/*:BulkOperationResultItem*/ {
    return new com.coremedia.cap.content.results.impl.PublicationResultItemImpl(resultItem['category'], resultItem['content'], resultItem['impediment'], resultItem['editor']);
  }/*
}*/function PublicationResultBuilder$() {this.super$ECsN();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.BulkOperationResultBuilder",
      makeResultObject: makeResultObject,
      makeResultItem: makeResultItem,
      super$ECsN: function() {
        com.coremedia.cap.content.impl.BulkOperationResultBuilder.prototype.constructor.apply(this, arguments);
      },
      constructor: PublicationResultBuilder$,
      requires: ["com.coremedia.cap.content.impl.BulkOperationResultBuilder"],
      uses: [
        "com.coremedia.cap.content.results.impl.PublicationResultImpl",
        "com.coremedia.cap.content.results.impl.PublicationResultItemImpl"
      ]
    };
});
