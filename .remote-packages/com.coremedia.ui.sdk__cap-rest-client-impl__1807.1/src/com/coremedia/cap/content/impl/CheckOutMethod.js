Ext.define("com.coremedia.cap.content.impl.CheckOutMethod", function(CheckOutMethod) {/*package com.coremedia.cap.content.impl {

import com.coremedia.cap.content.Content;

public class CheckOutMethod extends ContentMethod {
  public*/ function CheckOutMethod$(content/*:Content*/, callback/*:Function*/) {
    this.super$vG$E(content, {}, "CHECKOUT", "", true, false, callback);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.impl.ContentMethod",
      constructor: CheckOutMethod$,
      super$vG$E: function() {
        com.coremedia.cap.content.impl.ContentMethod.prototype.constructor.apply(this, arguments);
      },
      requires: ["com.coremedia.cap.content.impl.ContentMethod"]
    };
});
