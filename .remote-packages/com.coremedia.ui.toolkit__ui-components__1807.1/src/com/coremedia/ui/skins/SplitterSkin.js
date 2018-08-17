Ext.define("com.coremedia.ui.skins.SplitterSkin", function(SplitterSkin) {/*package com.coremedia.ui.skins {
/**
 * Declares all usable skins for splitter defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class SplitterSkin extends BaseSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "SplitterSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "splitter";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:SplitterSkin =*/function DEFAULT$static_(){SplitterSkin.DEFAULT=( new SplitterSkin("default"));}/*;

  public static const PREMULAR:SplitterSkin =*/function PREMULAR$static_(){SplitterSkin.PREMULAR=( new SplitterSkin("premular"));}/*;
  public static const DARK:SplitterSkin =*/function DARK$static_(){SplitterSkin.DARK=( new SplitterSkin("dark"));}/*;
  public static const LIGHT:SplitterSkin =*/function LIGHT$static_(){SplitterSkin.LIGHT=( new SplitterSkin("light"));}/*;
  public static const ACCORDION:SplitterSkin =*/function ACCORDION$static_(){SplitterSkin.ACCORDION=( new SplitterSkin("accordion"));}/*;

  /**
   * An array containing all SplitterSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.SplitterSkin")]
  public static const values:Array =*/function values$static_(){SplitterSkin.values=( com.coremedia.ui.util.Enum.collectValues(SplitterSkin));}/*;*/

  function SplitterSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$Cd40(skin, skinGroup ? skinGroup : SplitterSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.BaseSkin",
      metadata: {"": ["PublicApi"]},
      constructor: SplitterSkin$,
      super$Cd40: function() {
        com.coremedia.ui.skins.BaseSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "splitter",
        DEFAULT: undefined,
        PREMULAR: undefined,
        DARK: undefined,
        LIGHT: undefined,
        ACCORDION: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          PREMULAR$static_();
          DARK$static_();
          LIGHT$static_();
          ACCORDION$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.BaseSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
