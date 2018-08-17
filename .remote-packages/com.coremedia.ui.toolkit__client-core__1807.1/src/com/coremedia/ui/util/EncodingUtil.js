Ext.define("com.coremedia.ui.util.EncodingUtil", function(EncodingUtil) {/*package com.coremedia.ui.util {
import ext.util.Format;

public class EncodingUtil {

  /**
   * HTML encodes the given parameter. The returned value is safe to be included
   * in HTML elements.
   * @param value Value to be encoded
   * @return encoded value
   * /
  public static*/ function encodeForHTML$static(value/*:**/)/*:**/ {
    if (AS3.is(value,  String)) {
      return Ext.util.Format.htmlEncode(value);
    } else {
      return value;
    }
  }/*

  /**
   * HTML decodes the given parameter.
   * @param value
   * @return
   * /
  public static*/ function decodeFromHTML$static(value/*:**/)/*:**/ {
    if (AS3.is(value,  String)) {
      return Ext.util.Format.htmlDecode(value);
    } else {
      return value;
    }
  }/*

}*/function EncodingUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: EncodingUtil$,
      statics: {
        encodeForHTML: encodeForHTML$static,
        decodeFromHTML: decodeFromHTML$static
      },
      requires: ["Ext.util.Format"]
    };
});
