Ext.define("com.coremedia.ui.data.impl.PropertyPathUtil", function(PropertyPathUtil) {/*package com.coremedia.ui.data.impl {
public class PropertyPathUtil {
  private static const*/var INTERNAL_PROPERTY_PATH_SEPARATOR$static/*:String*/ = '\n';/*

  public static*/ function appendWithSeparator$static(propertyPrefix/*:String*/, property/*:**/)/*:String*/ {
    return propertyPrefix + INTERNAL_PROPERTY_PATH_SEPARATOR$static + property;
  }/*

  public static*/ function append$static(propertyPrefix/*:String*/, property/*:**/)/*:String*/ {
    return propertyPrefix ? PropertyPathUtil.appendWithSeparator(propertyPrefix, property) : property;
  }/*

  public static*/ function deserialize$static(propertyPath/*:**/)/*:Array*/ {
    return String(propertyPath).split(INTERNAL_PROPERTY_PATH_SEPARATOR$static);
  }/*

  public static*/ function serialize$static(propertyPathArcs/*:Array*/)/*:String*/ {
    return propertyPathArcs.join(INTERNAL_PROPERTY_PATH_SEPARATOR$static);
  }/*

  public static*/ function pathSubsumesPath$static(path1/*:String*/, path2/*:String*/)/*:Boolean*/ {
    return path1 !== path2
            && path2.indexOf(path1) === 0
            && path2.charAt(path1.length) === INTERNAL_PROPERTY_PATH_SEPARATOR$static;
  }/*
}*/function PropertyPathUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: PropertyPathUtil$,
      statics: {
        appendWithSeparator: appendWithSeparator$static,
        append: append$static,
        deserialize: deserialize$static,
        serialize: serialize$static,
        pathSubsumesPath: pathSubsumesPath$static
      }
    };
});
