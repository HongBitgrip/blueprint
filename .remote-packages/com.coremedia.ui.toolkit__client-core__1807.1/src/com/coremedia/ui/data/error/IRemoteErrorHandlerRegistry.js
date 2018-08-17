Ext.define("com.coremedia.ui.data.error.IRemoteErrorHandlerRegistry", function(IRemoteErrorHandlerRegistry) {/*package com.coremedia.ui.data.error {

/**
 * A registry for remote error handlers.
 * A remote error handler is a function of signature
 * <code>
 * function (error:RemoteError, source:Object):void;
 * </code>
 *
 * @see RemoteError
 * @see com.coremedia.ui.data.RemoteBean
 * /
[PublicApi]
public interface IRemoteErrorHandlerRegistry {
  /**
   * register a function with the signature
   *  <code>function(error:RemoteError, source:Object):void</code>
   *  as an remote error handler for read and write errors.
   * @param errorHandler the error handler function
   * @param append set this to true if a low-prio handler is registered
   * /
  function registerErrorHandler(errorHandler:Function, append:Boolean = false):void;

  /**
   * register a function with the signature
   *  <code>function(error:RemoteError, source:Object):void</code>
   *  as an remote error handler for write errors only.
   * @param errorHandler the error handler function
   * @param append set this to true if a low-prio handler is registered
   * /
  function registerWriteErrorHandler(errorHandler:Function, append:Boolean = false):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
