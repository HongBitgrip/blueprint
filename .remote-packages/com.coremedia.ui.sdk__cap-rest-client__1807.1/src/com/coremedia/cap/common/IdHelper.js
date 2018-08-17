Ext.define("com.coremedia.cap.common.IdHelper", function(IdHelper) {/*package com.coremedia.cap.common {
/**
 * <p>
 * This is a helper class for dealing with different CapObject
 * identifier formats. It provides commonly used methods for recognizing,
 * parsing and converting identifiers of various sorts.
 * </p>
 * /
public class IdHelper {

  /**
   * DEPRECATED. Do not work with content ids since they are not stable.
   * /
  public static*/ function parseContentId$static(content/*:**/)/*:Number*/ {
    return content.getNumericId();
  }/*
}*/function IdHelper$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: IdHelper$,
      statics: {parseContentId: parseContentId$static}
    };
});
