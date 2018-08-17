Ext.define("com.coremedia.cap.content.impl.DifferenceType", function(DifferenceType) {/*package com.coremedia.cap.content.impl {
import com.coremedia.ui.util.Enum;

[PublicApi]
public class DifferenceType extends Enum {
  public static const ADDED:DifferenceType =*/function ADDED$static_(){DifferenceType.ADDED=( new DifferenceType());}/*;
  public static const REMOVED:DifferenceType =*/function REMOVED$static_(){DifferenceType.REMOVED=( new DifferenceType());}/*;
  public static const CHANGED:DifferenceType =*/function CHANGED$static_(){DifferenceType.CHANGED=( new DifferenceType());}/*;

  /**
   * An array containing all task definition types.
   * /
  [ArrayElementType("com.coremedia.cap.content.impl.DifferenceType")]
  public static const values:Array =*/function values$static_(){DifferenceType.values=( com.coremedia.ui.util.Enum.collectValues(DifferenceType));}/*;

  /**
   * Return the task definition type with the given name.
   *
   * @param name the name of the task definition type
   * @return the task definition type
   * /
  public static*/ function named$static(name/*:String*/)/*:DifferenceType*/ {
    return com.coremedia.ui.util.Enum.namedIn(name, DifferenceType);
  }/*
}*/function DifferenceType$() {this.super$J4G_();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.util.Enum",
      metadata: {"": ["PublicApi"]},
      super$J4G_: function() {
        com.coremedia.ui.util.Enum.prototype.constructor.apply(this, arguments);
      },
      constructor: DifferenceType$,
      statics: {
        ADDED: undefined,
        REMOVED: undefined,
        CHANGED: undefined,
        values: undefined,
        named: named$static,
        __initStatics__: function() {
          ADDED$static_();
          REMOVED$static_();
          CHANGED$static_();
          values$static_();
        }
      },
      requires: ["com.coremedia.ui.util.Enum"]
    };
});
