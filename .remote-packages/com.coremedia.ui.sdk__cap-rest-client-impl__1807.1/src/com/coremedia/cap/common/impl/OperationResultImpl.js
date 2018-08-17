Ext.define("com.coremedia.cap.common.impl.OperationResultImpl", function(OperationResultImpl) {/*package com.coremedia.cap.common.impl {

import com.coremedia.ui.data.OperationResult;
import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

public class OperationResultImpl implements OperationResult {
  public*/ function OperationResultImpl$(error/*:RemoteError*/, successful/*:Boolean*/) {
    this.error = error;
    this.successful = successful;
  }/*

  public static*/ function fromResponse$static(response/*:RemoteServiceMethodResponse*/)/*:OperationResultImpl*/ {
    var error/*:RemoteError*/ = response.success ? null : response.getError();
    return new OperationResultImpl(error, response.success);
  }/*

  public native function get error():RemoteError;
  public native function set error(value:RemoteError):void;

  public native function get successful():Boolean;
  public native function set successful(value:Boolean):void;

}

}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.OperationResult"],
      constructor: OperationResultImpl$,
      statics: {fromResponse: fromResponse$static},
      requires: ["com.coremedia.ui.data.OperationResult"]
    };
});
