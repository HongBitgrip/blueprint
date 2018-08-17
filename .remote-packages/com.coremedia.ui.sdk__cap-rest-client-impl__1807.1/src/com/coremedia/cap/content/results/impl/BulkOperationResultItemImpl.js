Ext.define("com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl", function(BulkOperationResultItemImpl) {/*package com.coremedia.cap.content.results.impl {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.results.BulkOperationResultItem;

public class BulkOperationResultItemImpl implements BulkOperationResultItem{
  public*/ function BulkOperationResultItemImpl$(resultCode/*:String*/, content/*: Content*/, impediment/*: Content*/) {
    this['resultCode'] = resultCode;
    this['content'] = content;
    this['impediment'] = impediment;
  }/*

  public native function get impediment():Content;

  public native function get resultCode():String;

  public native function get content():Content;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.results.BulkOperationResultItem"],
      constructor: BulkOperationResultItemImpl$,
      requires: ["com.coremedia.cap.content.results.BulkOperationResultItem"]
    };
});
