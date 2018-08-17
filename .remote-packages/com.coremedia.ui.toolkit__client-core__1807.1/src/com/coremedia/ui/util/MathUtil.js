Ext.define("com.coremedia.ui.util.MathUtil", function(MathUtil) {/*package com.coremedia.ui.util {

public class MathUtil {
  public static*/ function signum$static(num/*:Number*/)/*:Number*/ {
    if (isNaN(num)) {
      return NaN;
    } else if (num < 0) {
      return -1;
    } else if (num > 0) {
      return 1;
    } else {
      return num;
    }
  }/*
}*/function MathUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: MathUtil$,
      statics: {signum: signum$static}
    };
});
