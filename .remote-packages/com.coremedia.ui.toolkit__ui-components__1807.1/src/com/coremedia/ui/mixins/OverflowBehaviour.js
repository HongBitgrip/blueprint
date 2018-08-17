Ext.define("com.coremedia.ui.mixins.OverflowBehaviour", function(OverflowBehaviour) {/*package com.coremedia.ui.mixins {
import com.coremedia.ui.util.Enum;

public class OverflowBehaviour extends Enum {

  //noinspection JSUnusedGlobalSymbols
  /**
   * Defines the behaviour to be used when text overflow should be ellipsed
   * /
  public static const ELLIPSIS:OverflowBehaviour =*/function ELLIPSIS$static_(){OverflowBehaviour.ELLIPSIS=( new OverflowBehaviour("ellipsis"));}/*;

  /**
   * Defines the behaviour to be used when text overflow should be split everywhere
   * /
  public static const BREAK_ALL:OverflowBehaviour =*/function BREAK_ALL$static_(){OverflowBehaviour.BREAK_ALL=( new OverflowBehaviour("break-all"));}/*;

  /**
   * Defines the behaviour to be used when text overflow should be split only between words
   * /
  public static const BREAK_WORD:OverflowBehaviour =*/function BREAK_WORD$static_(){OverflowBehaviour.BREAK_WORD=( new OverflowBehaviour("break-word"));}/*;

  /**
   * An array containing all OverflowBehaviours.
   * /
  [ArrayElementType("com.coremedia.ui.mixins.OverflowBehaviour")]
  public static const values:Array =*/function values$static_(){OverflowBehaviour.values=( com.coremedia.ui.util.Enum.collectValues(OverflowBehaviour));}/*;

  public static*/ function named$static(name/*:String*/)/*:OverflowBehaviour*/ {
    return com.coremedia.ui.util.Enum.namedIn(name, OverflowBehaviour);
  }/*

  private var _id:String;*/

  function OverflowBehaviour$(id/*:String*/) {this.super$HGI3();
    this._id$HGI3 = id;
  }/*

  public*/ function  get$id()/*:String*/ {
    return this._id$HGI3;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.util.Enum",
      _id$HGI3: null,
      constructor: OverflowBehaviour$,
      super$HGI3: function() {
        com.coremedia.ui.util.Enum.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ELLIPSIS: undefined,
        BREAK_ALL: undefined,
        BREAK_WORD: undefined,
        values: undefined,
        named: named$static,
        __initStatics__: function() {
          ELLIPSIS$static_();
          BREAK_ALL$static_();
          BREAK_WORD$static_();
          values$static_();
        }
      },
      __accessors__: {id: {get: get$id}},
      requires: ["com.coremedia.ui.util.Enum"]
    };
});
