Ext.define("com.coremedia.cap.content.publication.impl.BulkWithdrawMethod", function(BulkWithdrawMethod) {/*package com.coremedia.cap.content.publication.impl {

import com.coremedia.cap.content.ContentRepository;

public class BulkWithdrawMethod extends AbstractBulkPublishMethod {
  public*/ function BulkWithdrawMethod$(contentRepository/*:ContentRepository*/, contents/*:Array*/, callback/*:Function*/) {
    this.super$In6Y(contentRepository, "bulkWithdrawUri", true, contents, callback);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.publication.impl.AbstractBulkPublishMethod",
      constructor: BulkWithdrawMethod$,
      super$In6Y: function() {
        com.coremedia.cap.content.publication.impl.AbstractBulkPublishMethod.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.cap.content.publication.impl.AbstractBulkPublishMethod"]
    };
});
