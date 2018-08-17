Ext.define("com.coremedia.cap.content.results.ResultCodes", function(ResultCodes) {/*package com.coremedia.cap.content.results {

/**
 * Generic result codes.
 *
 * @deprecated All bulk results provide specific result codes.
 * /
[PublicApi]
public class ResultCodes {
  /**
   * The operation on the content was successful.
   * /
  public static const OK:String = "OK";

  /**
   * No action needed on the content.
   * /
  public static const NOOP:String = "NOOP";

  /**
   * The operation on the content has failed.
   * /
  public static const FAILED:String = "FAILED";
}*/function ResultCodes$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: ResultCodes$,
      statics: {
        OK: "OK",
        NOOP: "NOOP",
        FAILED: "FAILED"
      }
    };
});
