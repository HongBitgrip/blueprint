Ext.define("com.coremedia.cms.editor.sdk.upload.XliffBulkOperationResultItem", function(XliffBulkOperationResultItem) {/*package com.coremedia.cms.editor.sdk.upload {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl;

public class XliffBulkOperationResultItem extends BulkOperationResultItemImpl {
  public*/ function XliffBulkOperationResultItem$(resultCode/*:String*/, content/*:Content*/, property/*:String*/) {
    this.super$NwCZ(resultCode, content, this.impediment);
    this['property'] = property;
  }/*

  public native function get property():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl",
      constructor: XliffBulkOperationResultItem$,
      super$NwCZ: function() {
        com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl"]
    };
});
