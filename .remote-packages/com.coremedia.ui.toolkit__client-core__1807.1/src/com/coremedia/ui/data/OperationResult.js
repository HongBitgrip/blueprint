Ext.define("com.coremedia.ui.data.OperationResult", function(OperationResult) {/*package com.coremedia.ui.data {

import com.coremedia.ui.data.error.RemoteError;

/**
 * An object describing the result of an operation. Such objects are
 * typically passed to callback functions after an operation is complete.
 * /
[PublicApi]
public interface OperationResult {
  /**
   * Whether the operation was successful.
   * /
  function get successful():Boolean;

  /**
   * An error object returned from the server. If this operation was successful,
   * the error object is <code>null</code>. If this operation failed, the error object may be null,
   * in which case subclasses have to provide other means of describing the error.
   * <p>Some errors are also handled by the remote error handler registry.
   * Marking such an error as handled will stop the global registry from handling the error.</p>
   *
   * @see com.coremedia.ui.data.error.RemoteError#isHandled()
   * @see com.coremedia.ui.data.error.RemoteError#setHandled()
   * @see com.coremedia.ui.data.error.IRemoteErrorHandlerRegistry
   * /
  function get error():RemoteError;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
