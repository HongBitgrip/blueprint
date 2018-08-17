Ext.define("com.coremedia.cap.content.publication.impl.BulkApprovePublishMethod", function(BulkApprovePublishMethod) {/*package com.coremedia.cap.content.publication.impl {

import com.coremedia.cap.content.ContentRepository;

public class BulkApprovePublishMethod extends AbstractBulkPublishMethod {
  public*/ function BulkApprovePublishMethod$(contentRepository/*:ContentRepository*/, contents/*:Array*/, callback/*:Function*/) {
    this.super$Jv1Q(contentRepository, "bulkApprovePublishUri", false, contents, callback);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.publication.impl.AbstractBulkPublishMethod",
      constructor: BulkApprovePublishMethod$,
      super$Jv1Q: function() {
        com.coremedia.cap.content.publication.impl.AbstractBulkPublishMethod.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.cap.content.publication.impl.AbstractBulkPublishMethod"]
    };
});
