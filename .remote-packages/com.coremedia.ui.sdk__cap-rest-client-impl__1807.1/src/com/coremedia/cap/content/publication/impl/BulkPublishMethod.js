Ext.define("com.coremedia.cap.content.publication.impl.BulkPublishMethod", function(BulkPublishMethod) {/*package com.coremedia.cap.content.publication.impl {

import com.coremedia.cap.content.ContentRepository;

public class BulkPublishMethod extends AbstractBulkPublishMethod {
  public*/ function BulkPublishMethod$(contentRepository/*:ContentRepository*/, contents/*:Array*/, callback/*:Function*/) {
    this.super$ZjhP(contentRepository, "bulkPublishUri", false, contents, callback);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.publication.impl.AbstractBulkPublishMethod",
      constructor: BulkPublishMethod$,
      super$ZjhP: function() {
        com.coremedia.cap.content.publication.impl.AbstractBulkPublishMethod.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.cap.content.publication.impl.AbstractBulkPublishMethod"]
    };
});
