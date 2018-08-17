Ext.define("com.coremedia.cap.content.publication.impl.BulkWithdrawFromTreeMethod", function(BulkWithdrawFromTreeMethod) {/*package com.coremedia.cap.content.publication.impl {

import com.coremedia.cap.content.ContentRepository;

public class BulkWithdrawFromTreeMethod extends AbstractBulkPublishMethod {
  public*/ function BulkWithdrawFromTreeMethod$(contentRepository/*:ContentRepository*/, contents/*:Array*/,
                                             nodeContentType/*:String*/, childNodesProperty/*:String*/,
                                             callback/*:Function*/) {
    this.super$P5ag(contentRepository, "bulkWithdrawFromTreeUri", true, contents, callback);
    this.params["nodeContentType"] = nodeContentType;
    this.params["childNodesProperty"] = childNodesProperty;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.publication.impl.AbstractBulkPublishMethod",
      constructor: BulkWithdrawFromTreeMethod$,
      super$P5ag: function() {
        com.coremedia.cap.content.publication.impl.AbstractBulkPublishMethod.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.cap.content.publication.impl.AbstractBulkPublishMethod"]
    };
});
