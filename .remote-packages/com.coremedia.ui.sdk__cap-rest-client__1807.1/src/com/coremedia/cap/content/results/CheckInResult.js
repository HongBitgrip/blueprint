Ext.define("com.coremedia.cap.content.results.CheckInResult", function(CheckInResult) {/*package com.coremedia.cap.content.results {

import com.coremedia.cap.content.Version;

/**
 * A result object informing about the outcome of a check-in operation.
 * /
[PublicApi]
public interface CheckInResult extends BulkOperationResult {
  /**
   * The newly created version if a single content has been checked-in.
   * Null otherwise.
   *
   * @deprecated use the result items instead
   * /
  function get version():Version;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.results.BulkOperationResult"],
      requires: ["com.coremedia.cap.content.results.BulkOperationResult"]
    };
});
