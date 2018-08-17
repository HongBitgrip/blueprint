Ext.define("com.coremedia.ui.data.impl.FlushResultImpl", function(FlushResultImpl) {/*package com.coremedia.ui.data.impl {
import com.coremedia.ui.data.*;
import com.coremedia.ui.data.error.RemoteError;

public class FlushResultImpl implements FlushResult{

  public*/ function FlushResultImpl$(bean/*:RemoteBean*/, error/*:RemoteError*/) {
    this['remoteBean'] = bean;
    this['error'] = error;
    this['successful'] = error ? false : true;
  }/*

  public native function get remoteBean():RemoteBean;

  public native function get error():RemoteError;

  public native function get successful():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.FlushResult"],
      constructor: FlushResultImpl$,
      requires: ["com.coremedia.ui.data.FlushResult"]
    };
});
