Ext.define("com.coremedia.ui.data.validation.Severity", function(Severity) {/*package com.coremedia.ui.data.validation {

/**
 * Severity levels as reported in the <code>severity</code> property of <code>Issue</code> object.
 *
 * @see Issue#severity
 * /
[PublicApi]
public class Severity {
  /**
   * The detected issue might or might not be a problem.
   * /
  public static const INFO:String = "INFO";
  /**
   * The detected issue should be corrected.
   * /
  public static const WARN:String = "WARN";
  /**
   * The detected issue must be corrected.
   * /
  public static const ERROR:String = "ERROR";

}*/function Severity$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: Severity$,
      statics: {
        INFO: "INFO",
        WARN: "WARN",
        ERROR: "ERROR"
      }
    };
});
