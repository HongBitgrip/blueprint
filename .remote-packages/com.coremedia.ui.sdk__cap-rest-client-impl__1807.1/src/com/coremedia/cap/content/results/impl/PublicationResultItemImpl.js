Ext.define("com.coremedia.cap.content.results.impl.PublicationResultItemImpl", function(PublicationResultItemImpl) {/*package com.coremedia.cap.content.results.impl {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.results.PublicationResultItem;
import com.coremedia.cap.user.User;

public class PublicationResultItemImpl extends BulkOperationResultItemImpl implements PublicationResultItem {
  public*/ function PublicationResultItemImpl$(resultCode/*:String*/, content/*: Content*/, impediment/*:Content*/, editor/*:User*/) {
    this.super$AEdD(resultCode, content, impediment);
    this.editor = editor;
  }/*

  public native function get editor():User;
  public native function set editor(value:User):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl",
      mixins: ["com.coremedia.cap.content.results.PublicationResultItem"],
      constructor: PublicationResultItemImpl$,
      super$AEdD: function() {
        com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.PublicationResultItem",
        "com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl"
      ]
    };
});
