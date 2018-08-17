Ext.define("com.coremedia.cap.content.results.impl.CheckInResultImpl", function(CheckInResultImpl) {/*package com.coremedia.cap.content.results.impl {

import com.coremedia.cap.content.Version;
import com.coremedia.cap.content.results.CheckInResult;
import com.coremedia.cap.content.results.CheckInResultItem;
import com.coremedia.ui.data.error.RemoteError;

public class CheckInResultImpl extends BulkOperationResultImpl implements CheckInResult {
  public*/ function CheckInResultImpl$(error/*:RemoteError*/, successful/*:Boolean*/, results/*:Array*/) {
    this.super$BXvx(error, successful, results);

    // For a single content, support the legacy API to retrieve the checked-in version.
    if (results && results.length === 1) {
      this.version = (AS3.as(results[0],  com.coremedia.cap.content.results.CheckInResultItem)).version;
    }
  }/*

  public native function get version():Version;
  public native function set version(version:Version):void;
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.content.results.impl.BulkOperationResultImpl",
      mixins: ["com.coremedia.cap.content.results.CheckInResult"],
      constructor: CheckInResultImpl$,
      super$BXvx: function() {
        com.coremedia.cap.content.results.impl.BulkOperationResultImpl.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cap.content.results.CheckInResult",
        "com.coremedia.cap.content.results.CheckInResultItem",
        "com.coremedia.cap.content.results.impl.BulkOperationResultImpl"
      ]
    };
});
