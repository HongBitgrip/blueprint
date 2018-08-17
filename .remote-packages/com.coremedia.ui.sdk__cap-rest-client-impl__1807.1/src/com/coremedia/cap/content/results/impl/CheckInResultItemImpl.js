Ext.define("com.coremedia.cap.content.results.impl.CheckInResultItemImpl", function(CheckInResultItemImpl) {/*package com.coremedia.cap.content.results.impl {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.Version;
import com.coremedia.cap.content.results.CheckInResultItem;
import com.coremedia.cap.user.User;

public class CheckInResultItemImpl extends BulkOperationResultItemImpl implements CheckInResultItem {
  public*/ function CheckInResultItemImpl$(resultCode/*:String*/, content/*: Content*/, editor/*:User*/, version/*:Version*/) {
    this.super$QwQk(resultCode, content, null);
    this.editor = editor;
    this.version = version;
  }/*

  public native function get editor():User;
  public native function set editor(value:User):void;

  public native function get version():Version;
  public native function set version(value:Version):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl",
      mixins: ["com.coremedia.cap.content.results.CheckInResultItem"],
      constructor: CheckInResultItemImpl$,
      super$QwQk: function() {
        com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.CheckInResultItem",
        "com.coremedia.cap.content.results.impl.BulkOperationResultItemImpl"
      ]
    };
});
