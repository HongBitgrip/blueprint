Ext.define("com.coremedia.elastic.social.studio.model.impl.RemoteErrorHandler", function(RemoteErrorHandler) {/*package com.coremedia.elastic.social.studio.model.impl {

import com.coremedia.ui.data.error.RemoteError;
import com.coremedia.ui.data.error.remoteErrorHandlerRegistry;
import com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.logging.Logger;

public class RemoteErrorHandler {

  public static*/ function handleRemoteErrorFromResponse$static(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
    RemoteErrorHandler.handleRemoteError(response.getError(), response.getResponseJSON());
  }/*

  public static*/ function handleRemoteError$static(remoteError/*:RemoteError*/, source/*:Object = null*/)/*:void*/ {if(arguments.length<=1)source=null;
    // handle known errors
    AS3.cast(com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl,com.coremedia.ui.data.error.remoteErrorHandlerRegistry).handleError(remoteError, source);
    // handle really bad errors
    if (!remoteError.isHandled()) {
      com.coremedia.ui.logging.Logger.error("RemoteErrorHandler: Communication error: " + remoteError.status + " " + remoteError.errorName + " " + remoteError.errorCode);
    }
  }/*

}*/function RemoteErrorHandler$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: RemoteErrorHandler$,
      statics: {
        handleRemoteErrorFromResponse: handleRemoteErrorFromResponse$static,
        handleRemoteError: handleRemoteError$static
      },
      requires: [
        "com.coremedia.ui.data.error.remoteErrorHandlerRegistry",
        "com.coremedia.ui.data.impl.RemoteErrorHandlerRegistryImpl",
        "com.coremedia.ui.logging.Logger"
      ]
    };
});
