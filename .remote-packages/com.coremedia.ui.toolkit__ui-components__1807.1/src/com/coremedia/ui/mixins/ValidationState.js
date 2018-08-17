Ext.define("com.coremedia.ui.mixins.ValidationState", function(ValidationState) {/*package com.coremedia.ui.mixins {
import com.coremedia.ui.util.Enum;

/**
 * Provides an element name configuration to bemPlugins attached to parent containers.
 * /
public class ValidationState extends Enum {

  private static const*/var STATE_CLS_PREFIX$static/*:String*/ = "cm-validation-state-";/*

  /**
   * Defines the state to be used when detecting an error.
   * /
  public static const ERROR:ValidationState =*/function ERROR$static_(){ValidationState.ERROR=( new ValidationState("error"));}/*;

  /**
   * Defines the state to be used when detecting a warning.
   * /
  public static const WARNING:ValidationState =*/function WARNING$static_(){ValidationState.WARNING=( new ValidationState("warning"));}/*;

  /**
   * Defines the state to be used when detecting a info.
   * /
  public static const INFO:ValidationState =*/function INFO$static_(){ValidationState.INFO=( new ValidationState("info"));}/*;

  /**
   * Defines the state to be used when an operation was successful.
   * /
  public static const SUCCESS:ValidationState =*/function SUCCESS$static_(){ValidationState.SUCCESS=( new ValidationState("success"));}/*;

  /**
   * An array containing all ValidationState enums.
   * /
  [ArrayElementType("com.coremedia.ui.mixins.ValidationState")]
  public static const values:Array =*/function values$static_(){ValidationState.values=( com.coremedia.ui.util.Enum.collectValues(ValidationState));}/*;

  public static*/ function named$static(name/*:String*/)/*:ValidationState*/ {
    return com.coremedia.ui.util.Enum.namedIn(name, ValidationState);
  }/*

  private var _id:String;*/

  function ValidationState$(id/*:String*/) {this.super$ejT0();
    this._id$ejT0 = id;
  }/*

  public*/ function  get$id()/*:String*/ {
    return this._id$ejT0;
  }/*

  public*/ function getCSSCls()/*:String*/ {
    return STATE_CLS_PREFIX$static + this.id;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.util.Enum",
      _id$ejT0: null,
      constructor: ValidationState$,
      super$ejT0: function() {
        com.coremedia.ui.util.Enum.prototype.constructor.apply(this, arguments);
      },
      getCSSCls: getCSSCls,
      statics: {
        ERROR: undefined,
        WARNING: undefined,
        INFO: undefined,
        SUCCESS: undefined,
        values: undefined,
        named: named$static,
        __initStatics__: function() {
          ERROR$static_();
          WARNING$static_();
          INFO$static_();
          SUCCESS$static_();
          values$static_();
        }
      },
      __accessors__: {id: {get: get$id}},
      requires: ["com.coremedia.ui.util.Enum"]
    };
});
