Ext.define("com.coremedia.cap.common.CapErrorCodes", function(CapErrorCodes) {/*package com.coremedia.cap.common {

/**
 * Specific error codes that might be reported.
 * This list of error codes is not exhaustive.
 * Error codes listed here may appear in the errorCode
 * property of RemoteError objects.
 *
 * @see com.coremedia.ui.data.error.RemoteError#errorCode
 * /
[PublicApi]
public class CapErrorCodes {
  /**
   * Error code for: A content is not valid (that is, at least one validator complained).
   * but the attempted operation is only allowed for valid contents.
   * /
  public static const NOT_VALID:String = "CAP-REST-01008";
}*/function CapErrorCodes$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: CapErrorCodes$,
      statics: {NOT_VALID: "CAP-REST-01008"}
    };
});
