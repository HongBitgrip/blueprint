Ext.define("com.coremedia.ui.data.error.RemoteError", function(RemoteError) {/*package com.coremedia.ui.data.error {
import com.coremedia.ui.util.ExecuteEventually;

import ext.Ext;

/**
 * RemoteError objects represent errors that were raised on the server, e.g., when copying
 * of a server-side resource failed. RemoteErrors are characterized by an
 * <code>errorCode</code>, an <code>errorName</code>, a message and the
 * HTTP status code of the request causing the error.
 * <p>
 *   Do not instantiate this class directly. Remote errors are generated
 *   by the REST service.
 * </p>
 *
 * @see com.coremedia.ui.data.FlushResult
 * @see IRemoteErrorHandlerRegistry
 * /
[PublicApi]
public class RemoteError extends Error {
  private var handled:Boolean = false;

  private var sync:ExecuteEventually;
  /**
   * @private
   * /
  public*/ function RemoteError$(json/*:Object*/) {var this$=this;
    this.super$OVQy(json['message']);
    this['method'] = json['method'];
    this['errorCode'] = json['errorCode'];
    this['errorName'] = json['errorName'];
    this['status'] = json['status'];

    //We can't override toString because IDEA/Jangaroo wants a 'override' but ASdoc not
    this['toString'] = function()/*:String*/ {
      return "RemoteError: "+ this$.message + " {method=" + this$.method +
              ", status=" + this$.status +
              ", errorCode=" + this$.errorCode +
              ", errorName=" + this$.errorName +
              ", handled=" + this$.handled$OVQy +"}";
    };
  }/*

  /**
   * The HTTP method of the request that raised this remote error.
   * /
  public native function get method():String;

  /**
   * The HTTP status code of the response that raised this remote error.
   * Defaults to 400.
   * /
  public native function get status():uint;

  /**
   * The name of the RemoteError.
   * /
  public native function get errorName():String;

  /**
   * The error code of the RemoteError.
   * /
  public native function get errorCode():String;

  /**
   * @private
   *
   * Set the callback function to be invoked after this error has been handled.
   * /
  public*/ function setSync(sync/*:ExecuteEventually*/)/*:void*/ {
    if (this.sync$OVQy) {
      throw new AS3.Error("sync already set");
    }
    this.sync$OVQy = sync;
  }/*

  /**
   * If the error has already been handled or not.
   * @return whether the error has already been handled
   * /
  public*/ function isHandled()/*:Boolean*/ {
    return this.handled$OVQy;
  }/*

  /**
   * Change the <code>handled</code> state of the error.
   * @param value handled or not
   * /
  public*/ function setHandled(value/*:Boolean*/)/*:void*/ {
    this.handled$OVQy = value;
  }/*

  /**
   * Call this method to indicate that the error handling will take some time or user interaction (MessageBoxes, ...)
   * The caller MUST (rfc2119) call the returned function after the error has been handled.
   * @return the function to be called after error has been handled.
   * /
  public*/ function willHandle()/*:Function*/ {
    if (this.sync$OVQy) {
      this.sync$OVQy.delay();
      // The result of sync.delay() might be null. Always return a function value.
      return AS3.bind( this.sync$OVQy,"proceed");
    } else {
      return Ext.emptyFn;
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "AS3.Error",
      metadata: {"": ["PublicApi"]},
      handled$OVQy: false,
      sync$OVQy: null,
      constructor: RemoteError$,
      super$OVQy: function() {
        AS3.Error.prototype.constructor.apply(this, arguments);
      },
      setSync: setSync,
      isHandled: isHandled,
      setHandled: setHandled,
      willHandle: willHandle,
      requires: [
        "AS3.Error",
        "Ext"
      ]
    };
});
