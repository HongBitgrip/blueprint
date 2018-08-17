Ext.define("com.coremedia.cms.editor.sdk.util.StringHelper", function(StringHelper) {/*package com.coremedia.cms.editor.sdk.util {
public class StringHelper {

  public static*/ function replace$static(str/*:String*/, oldSubStr/*:String*/, newSubStr/*:String*/)/*:String*/ {
    return str.split(oldSubStr).join(newSubStr);
  }/*

  public static*/ function trim$static(str/*:String*/, char_/*:String*/)/*:String*/ {
    return StringHelper.trimBack(StringHelper.trimFront(str, char_), char_);
  }/*

  public static*/ function trimFront$static(str/*:String*/, char_/*:String*/)/*:String*/ {
    char_ = StringHelper.stringToCharacter(char_);
    if (str.charAt(0) == char_) {
      str = StringHelper.trimFront(str.substring(1), char_);
    }
    return str;
  }/*

  public static*/ function trimBack$static(str/*:String*/, char_/*:String*/)/*:String*/ {
    char_ = StringHelper.stringToCharacter(char_);
    if (str.charAt(str.length - 1) == char_) {
      str = StringHelper.trimBack(str.substring(0, str.length - 1), char_);
    }
    return str;
  }/*

  public static*/ function stringToCharacter$static(str/*:String*/)/*:String*/ {
    if (str.length == 1) {
      return str;
    }
    return str.slice(0, 1);
  }/*

}*/function StringHelper$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: StringHelper$,
      statics: {
        replace: replace$static,
        trim: trim$static,
        trimFront: trimFront$static,
        trimBack: trimBack$static,
        stringToCharacter: stringToCharacter$static
      }
    };
});
