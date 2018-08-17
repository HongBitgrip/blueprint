Ext.define("com.coremedia.ui.util.ErrorUtil", function(ErrorUtil) {/*package com.coremedia.ui.util {
import ext.Ext;

/**
 * A utility class for handling Error objects.
 * /
public class ErrorUtil {
  /**
   * Convert an error to a object that can be traced on the JavaScript console.
   * Different browsers will yield different amounts of information.
   *
   * @param e the error
   * /
  public static*/ function errorToMessage$static(e/*:**/)/*:**/ {
    if (AS3.is(e,  AS3.Error)) {
      if (Ext.isChrome ||
              Ext.isIE && !Ext.isIE9 /* earlier IEs are not supported anyway */) {
        return e.stack;
      } else if (Ext.isGecko) {
        return String(e) + "\n" + e.stack;
      } else {
        return String(e);
      }
    }
    return String(e);
  }/*
}*/function ErrorUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ErrorUtil$,
      statics: {errorToMessage: errorToMessage$static},
      requires: [
        "AS3.Error",
        "Ext"
      ]
    };
});
