Ext.define("com.coremedia.ui.skins.TipSkin", function(TipSkin) {/*package com.coremedia.ui.skins {
/**
 * Declares all usable skins for tips defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class TipSkin extends BaseSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "TipSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "tips";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:TipSkin =*/function DEFAULT$static_(){TipSkin.DEFAULT=( new TipSkin("default"));}/*;
  public static const EMBEDDING:TipSkin =*/function EMBEDDING$static_(){TipSkin.EMBEDDING=( new TipSkin("embedding"));}/*;

  /**
   * An array containing all TipSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.TipSkin")]
  public static const values:Array =*/function values$static_(){TipSkin.values=( com.coremedia.ui.util.Enum.collectValues(TipSkin));}/*;*/

  function TipSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$e$SS(skin, skinGroup ? skinGroup : TipSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.BaseSkin",
      metadata: {"": ["PublicApi"]},
      constructor: TipSkin$,
      super$e$SS: function() {
        com.coremedia.ui.skins.BaseSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "tips",
        DEFAULT: undefined,
        EMBEDDING: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          EMBEDDING$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.BaseSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
