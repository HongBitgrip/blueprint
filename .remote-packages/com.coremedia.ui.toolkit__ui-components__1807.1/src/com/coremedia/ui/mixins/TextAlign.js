Ext.define("com.coremedia.ui.mixins.TextAlign", function(TextAlign) {/*package com.coremedia.ui.mixins {
import com.coremedia.ui.util.Enum;

public class TextAlign extends Enum {

  //noinspection JSUnusedGlobalSymbols
  /**
   * Specifies that the text should be aligned to the left.
   * /
  public static const LEFT:TextAlign =*/function LEFT$static_(){TextAlign.LEFT=( new TextAlign("left"));}/*;

  /**
   * Specifies that the text should be centered.
   * /
  public static const CENTER:TextAlign =*/function CENTER$static_(){TextAlign.CENTER=( new TextAlign("center"));}/*;

  /**
   * Specifies that the text should be aligned to the right.
   * /
  public static const RIGHT:TextAlign =*/function RIGHT$static_(){TextAlign.RIGHT=( new TextAlign("right"));}/*;

  /**
   * Stretches the lines so that each line has equal width.
   * /
  public static const JUSTIFY:TextAlign =*/function JUSTIFY$static_(){TextAlign.JUSTIFY=( new TextAlign("justify"));}/*;

  /**
   * An array containing all text aligns.
   * /
  [ArrayElementType("com.coremedia.ui.mixins.TextAlign")]
  public static const values:Array =*/function values$static_(){TextAlign.values=( com.coremedia.ui.util.Enum.collectValues(TextAlign));}/*;

  public static*/ function named$static(name/*:String*/)/*:TextAlign*/ {
    return com.coremedia.ui.util.Enum.namedIn(name, TextAlign);
  }/*

  private var _id:String;*/

  function TextAlign$(id/*:String*/) {this.super$YLk0();
    this._id$YLk0 = id;
  }/*

  public*/ function  get$id()/*:String*/ {
    return this._id$YLk0;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.util.Enum",
      _id$YLk0: null,
      constructor: TextAlign$,
      super$YLk0: function() {
        com.coremedia.ui.util.Enum.prototype.constructor.apply(this, arguments);
      },
      statics: {
        LEFT: undefined,
        CENTER: undefined,
        RIGHT: undefined,
        JUSTIFY: undefined,
        values: undefined,
        named: named$static,
        __initStatics__: function() {
          LEFT$static_();
          CENTER$static_();
          RIGHT$static_();
          JUSTIFY$static_();
          values$static_();
        }
      },
      __accessors__: {id: {get: get$id}},
      requires: ["com.coremedia.ui.util.Enum"]
    };
});
