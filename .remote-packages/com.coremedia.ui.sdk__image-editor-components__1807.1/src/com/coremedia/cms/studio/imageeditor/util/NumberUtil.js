Ext.define("com.coremedia.cms.studio.imageeditor.util.NumberUtil", function(NumberUtil) {/*package com.coremedia.cms.studio.imageeditor.util {
public class NumberUtil {
  /**
   * Return a number that is equal to val, but at least min and at most max.
   *
   * @param min the minimum value
   * @param val the input value
   * @param max the maximum value
   * @return the clamped value
   * /
  public static*/ function clamp$static(min/*:Number*/, val/*: Number*/, max/*: Number*/)/*:Number*/ {
    return Math.min(Math.max(min, val), max);
  }/*
}*/function NumberUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: NumberUtil$,
      statics: {clamp: clamp$static}
    };
});
