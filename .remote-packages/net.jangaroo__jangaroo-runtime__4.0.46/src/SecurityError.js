Ext.define("SecurityError", function(SecurityError) {/*package {

/**
 * The <code>SecurityError</code> exception is thrown when some type of security violation takes place.
 * <p>Examples of security errors:</p>
 * <ul>
 * <li>An unauthorized property access or method call is made across a security sandbox boundary.</li>
 * <li>An attempt was made to access a URL not permitted by the security sandbox.</li>
 * <li>A socket connection was attempted to an unauthorized port number, e.g. a port above 65535.</li>
 * <li>An attempt was made to access the user's camera or microphone, and the request to access the device was denied by the user.</li></ul>
 * <p><a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/./SecurityError.html#includeExamplesSummary">View the examples</a></p>
 * @see http://help.adobe.com/en_US/as3/dev/WS5b3ccc516d4fbf351e63e3d118a9b90204-7ecf.html Responding to error events and status
 *
 * /
public dynamic class SecurityError extends Error {
  /**
   * Creates a new SecurityError object.
   * @param message A string associated with the error.
   * /
  public*/ function SecurityError$(message/*:String = ""*/) {if(arguments.length<=0)message="";
    this.super$DoA8(message);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "AS3.Error",
      constructor: SecurityError$,
      super$DoA8: function() {
        AS3.Error.prototype.constructor.apply(this, arguments);
      },
      requires: ["AS3.Error"]
    };
});
