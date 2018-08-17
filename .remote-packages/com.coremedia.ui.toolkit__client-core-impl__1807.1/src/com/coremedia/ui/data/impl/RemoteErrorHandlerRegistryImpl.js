Ext.define("com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl", function(RemoteErrorHandlerRegistryImpl) {/*package com.coremedia.ui.data.impl {
import com.coremedia.ui.data.error.*;
import com.coremedia.ui.logging.Logger;

import ext.Ext;

public class RemoteErrorHandlerRegistryImpl implements IRemoteErrorHandlerRegistry {

  private const READ_ERROR_HANDLERS:Array =*/function READ_ERROR_HANDLERS_(){this.READ_ERROR_HANDLERS$ZJMp=( []);}/*;
  private const WRITE_ERROR_HANDLERS:Array =*/function WRITE_ERROR_HANDLERS_(){this.WRITE_ERROR_HANDLERS$ZJMp=( []);}/*;

  public static*/ function initRemoteErrorHandlerRegistry$static()/* :IRemoteErrorHandlerRegistry*/ {
    if(!com.coremedia.ui.data.error.remoteErrorHandlerRegistry){
      com.coremedia.ui.logging.Logger.info(RemoteErrorHandlerRegistryImpl+ ": initializing singleton");
      com.coremedia.ui.data.error.remoteErrorHandlerRegistry = new RemoteErrorHandlerRegistryImpl();
    }
    return com.coremedia.ui.data.error.remoteErrorHandlerRegistry;
  }/*

  /**
   * Handle read errors of the remote bean.
   * The handler method is only called if the error has not already been handled
   * @param error the error (non_null)
   * @param source
   *
   * @see com.coremedia.ui.data.error.RemoteError#isHandled
   * /
  public*/ function handleError(error/*:RemoteError*/, source/*:Object*/)/*:void*/ {
    if (error.method === "PUT" || error.method === "POST") {
      handle$static(this.WRITE_ERROR_HANDLERS$ZJMp.concat(this.READ_ERROR_HANDLERS$ZJMp), error, source);
    } else {
      handle$static(this.READ_ERROR_HANDLERS$ZJMp, error, source);
    }
  }/*

  private static*/ function handle$static(handlers/*:Array*/, error/*:RemoteError*/, source/*:Object*/)/*:void*/ {
    // invoke all error handlers until the error is handled
    Ext.each(handlers, function(f/*:Function*/)/*:Boolean*/ {
      f(error, source);
      return !error.isHandled();
    }, null);
  }/*

  /**
   * register a function with the signature
   *  <code>function(error:RemoteError, source:Object):void</code>
   *  as an remote error handler for read and write errors.
   * @param errorHandler the error handler function
   * @param append set this to true if a low-prio handler is registered
   * /
  public*/ function registerErrorHandler(errorHandler/*:Function*/, append/*:Boolean = false*/)/*:void*/ {if(arguments.length<=1)append=false;
    appendHandler$static(this.READ_ERROR_HANDLERS$ZJMp, errorHandler, append);
  }/*

  /**
   * register a function with the signature
   *  <code>function(error:RemoteError, source:Object):void</code>
   *  as an remote error handler for write errors only.
   * @param errorHandler the error handler function
   * @param append set this to true if a low-prio handler is registered
   * /
  public*/ function registerWriteErrorHandler(errorHandler/*:Function*/, append/*:Boolean = false*/)/*:void*/ {if(arguments.length<=1)append=false;
    appendHandler$static(this.WRITE_ERROR_HANDLERS$ZJMp, errorHandler, append);
  }/*

  private static*/ function appendHandler$static(handlers/*:Array*/, errorHandler/*:Function*/, append/*:Boolean*/)/*:void*/ {/*
    const*/var index/*:int*/ = handlers.indexOf(errorHandler);
    if(index < 0) {
      if (append) {
        handlers.push(errorHandler);
      } else {
        handlers.unshift(errorHandler);
      }
    } else {
      com.coremedia.ui.logging.Logger.info(RemoteErrorHandlerRegistryImpl+": error handler already registered at index "+index);
    }
  }/*
}*/function RemoteErrorHandlerRegistryImpl$() {READ_ERROR_HANDLERS_.call(this);WRITE_ERROR_HANDLERS_.call(this);}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.error.IRemoteErrorHandlerRegistry"],
      handleError: handleError,
      registerErrorHandler: registerErrorHandler,
      registerWriteErrorHandler: registerWriteErrorHandler,
      constructor: RemoteErrorHandlerRegistryImpl$,
      statics: {initRemoteErrorHandlerRegistry: initRemoteErrorHandlerRegistry$static},
      requires: [
        "Ext",
        "com.coremedia.ui.data.error.IRemoteErrorHandlerRegistry",
        "com.coremedia.ui.data.error.remoteErrorHandlerRegistry"
      ],
      uses: ["com.coremedia.ui.logging.Logger"]
    };
});
