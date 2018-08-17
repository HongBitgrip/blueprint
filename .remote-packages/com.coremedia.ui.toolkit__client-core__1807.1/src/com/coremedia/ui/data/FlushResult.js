Ext.define("com.coremedia.ui.data.FlushResult", function(FlushResult) {/*package com.coremedia.ui.data {

/**
 * The result object that a flush callback function receives.
 *
 * @see RemoteBean#flush()
 * /
[PublicApi]
public interface FlushResult extends OperationResult {

  /**
   * The remote bean the flush has been called on.
   * /
  function get remoteBean():RemoteBean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.OperationResult"],
      requires: ["com.coremedia.ui.data.OperationResult"]
    };
});
