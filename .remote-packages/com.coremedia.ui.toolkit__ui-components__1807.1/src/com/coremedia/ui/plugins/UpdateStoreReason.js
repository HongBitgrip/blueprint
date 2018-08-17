Ext.define("com.coremedia.ui.plugins.UpdateStoreReason", function(UpdateStoreReason) {/*package com.coremedia.ui.plugins {
import com.coremedia.ui.util.Enum;

public class UpdateStoreReason extends Enum {
  public static const UPDATE_STORE_REASON_AFTER_ARRAY_CHANGE:UpdateStoreReason =*/function UPDATE_STORE_REASON_AFTER_ARRAY_CHANGE$static_(){UpdateStoreReason.UPDATE_STORE_REASON_AFTER_ARRAY_CHANGE=( new UpdateStoreReason());}/*;

  public static const UPDATE_STORE_REASON_AFTER_LAYOUT:UpdateStoreReason =*/function UPDATE_STORE_REASON_AFTER_LAYOUT$static_(){UpdateStoreReason.UPDATE_STORE_REASON_AFTER_LAYOUT=( new UpdateStoreReason());}/*;

  public static const UPDATE_STORE_UNSPECIFIC_REASON:UpdateStoreReason =*/function UPDATE_STORE_UNSPECIFIC_REASON$static_(){UpdateStoreReason.UPDATE_STORE_UNSPECIFIC_REASON=( new UpdateStoreReason());}/*;

  /**
   * An array containing all reasons.
   * /
  [ArrayElementType("com.coremedia.ui.plugins.UpdateStoreReason")]
  public static const values:Array =*/function values$static_(){UpdateStoreReason.values=( com.coremedia.ui.util.Enum.collectValues(UpdateStoreReason));}/*;

  /**
   * Return the reason with the given name.
   *
   * @param name the name of the reason
   * @return the reason
   * /
  public static*/ function named$static(name/*:String*/)/*:UpdateStoreReason*/ {
    return com.coremedia.ui.util.Enum.namedIn(name, UpdateStoreReason);
  }/*
}*/function UpdateStoreReason$() {this.super$3Rxg();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.util.Enum",
      super$3Rxg: function() {
        com.coremedia.ui.util.Enum.prototype.constructor.apply(this, arguments);
      },
      constructor: UpdateStoreReason$,
      statics: {
        UPDATE_STORE_REASON_AFTER_ARRAY_CHANGE: undefined,
        UPDATE_STORE_REASON_AFTER_LAYOUT: undefined,
        UPDATE_STORE_UNSPECIFIC_REASON: undefined,
        values: undefined,
        named: named$static,
        __initStatics__: function() {
          UPDATE_STORE_REASON_AFTER_ARRAY_CHANGE$static_();
          UPDATE_STORE_REASON_AFTER_LAYOUT$static_();
          UPDATE_STORE_UNSPECIFIC_REASON$static_();
          values$static_();
        }
      },
      requires: ["com.coremedia.ui.util.Enum"]
    };
});
