Ext.define("com.coremedia.ui.skins.ContainerSkin", function(ContainerSkin) {/*package com.coremedia.ui.skins {
/**
 * Declares all usable skins for container defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class ContainerSkin extends BaseSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "ContainerSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "container";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:ContainerSkin =*/function DEFAULT$static_(){ContainerSkin.DEFAULT=( new ContainerSkin("default"));}/*;

  public static const GROUP:ContainerSkin =*/function GROUP$static_(){ContainerSkin.GROUP=( new ContainerSkin("group"));}/*;
  public static const GRID_100:ContainerSkin =*/function GRID_100$static_(){ContainerSkin.GRID_100=( new ContainerSkin("grid-100"));}/*;
  public static const GRID_200:ContainerSkin =*/function GRID_200$static_(){ContainerSkin.GRID_200=( new ContainerSkin("grid-200"));}/*;
  public static const FRAME:ContainerSkin =*/function FRAME$static_(){ContainerSkin.FRAME=( new ContainerSkin("frame"));}/*;
  public static const FRAME_GRID_200:ContainerSkin =*/function FRAME_GRID_200$static_(){ContainerSkin.FRAME_GRID_200=( new ContainerSkin("frame-grid-200"));}/*;
  public static const SPECIAL_TRANSLATION_CHART:ContainerSkin =*/function SPECIAL_TRANSLATION_CHART$static_(){ContainerSkin.SPECIAL_TRANSLATION_CHART=( new ContainerSkin("special-translation-chart"));}/*;
  public static const SELECTED_100:ContainerSkin =*/function SELECTED_100$static_(){ContainerSkin.SELECTED_100=( new ContainerSkin("selected-100"));}/*;
  public static const DARK_200:ContainerSkin =*/function DARK_200$static_(){ContainerSkin.DARK_200=( new ContainerSkin("dark-200"));}/*;
  public static const CARD_200:ContainerSkin =*/function CARD_200$static_(){ContainerSkin.CARD_200=( new ContainerSkin("card-200"));}/*;
  public static const HIGHLIGHTED:ContainerSkin =*/function HIGHLIGHTED$static_(){ContainerSkin.HIGHLIGHTED=( new ContainerSkin("highlighted"));}/*;
  public static const VIVID:ContainerSkin =*/function VIVID$static_(){ContainerSkin.VIVID=( new ContainerSkin("vivid"));}/*;
  public static const LIGHT:ContainerSkin =*/function LIGHT$static_(){ContainerSkin.LIGHT=( new ContainerSkin("light"));}/*;

  /**
   * An array containing all ContainerSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.ContainerSkin")]
  public static const values:Array =*/function values$static_(){ContainerSkin.values=( com.coremedia.ui.util.Enum.collectValues(ContainerSkin));}/*;*/

  function ContainerSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$$CK2(skin, skinGroup ? skinGroup : ContainerSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.BaseSkin",
      metadata: {"": ["PublicApi"]},
      constructor: ContainerSkin$,
      super$$CK2: function() {
        com.coremedia.ui.skins.BaseSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "container",
        DEFAULT: undefined,
        GROUP: undefined,
        GRID_100: undefined,
        GRID_200: undefined,
        FRAME: undefined,
        FRAME_GRID_200: undefined,
        SPECIAL_TRANSLATION_CHART: undefined,
        SELECTED_100: undefined,
        DARK_200: undefined,
        CARD_200: undefined,
        HIGHLIGHTED: undefined,
        VIVID: undefined,
        LIGHT: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          GROUP$static_();
          GRID_100$static_();
          GRID_200$static_();
          FRAME$static_();
          FRAME_GRID_200$static_();
          SPECIAL_TRANSLATION_CHART$static_();
          SELECTED_100$static_();
          DARK_200$static_();
          CARD_200$static_();
          HIGHLIGHTED$static_();
          VIVID$static_();
          LIGHT$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.BaseSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
