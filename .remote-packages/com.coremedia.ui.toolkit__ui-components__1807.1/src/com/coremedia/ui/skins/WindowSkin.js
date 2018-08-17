Ext.define("com.coremedia.ui.skins.WindowSkin", function(WindowSkin) {/*package com.coremedia.ui.skins {
/**
 * Declares all usable skins for windows defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class WindowSkin extends BaseSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "WindowSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "windows";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:WindowSkin =*/function DEFAULT$static_(){WindowSkin.DEFAULT=( new WindowSkin("default"));}/*;

  public static const GRID_200_DARK:WindowSkin =*/function GRID_200_DARK$static_(){WindowSkin.GRID_200_DARK=( new WindowSkin("window-grid-200-dark"));}/*;
  public static const GRID_200:WindowSkin =*/function GRID_200$static_(){WindowSkin.GRID_200=( new WindowSkin("window-grid-200"));}/*;
  public static const GRID_200_LIGHT:WindowSkin =*/function GRID_200_LIGHT$static_(){WindowSkin.GRID_200_LIGHT=( new WindowSkin("window-grid-200-light"));}/*;

  /**
   * An array containing all WindowSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.WindowSkin")]
  public static const values:Array =*/function values$static_(){WindowSkin.values=( com.coremedia.ui.util.Enum.collectValues(WindowSkin));}/*;*/

  function WindowSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$mr2f(skin, skinGroup ? skinGroup : WindowSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.BaseSkin",
      metadata: {"": ["PublicApi"]},
      constructor: WindowSkin$,
      super$mr2f: function() {
        com.coremedia.ui.skins.BaseSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "windows",
        DEFAULT: undefined,
        GRID_200_DARK: undefined,
        GRID_200: undefined,
        GRID_200_LIGHT: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          GRID_200_DARK$static_();
          GRID_200$static_();
          GRID_200_LIGHT$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.BaseSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
