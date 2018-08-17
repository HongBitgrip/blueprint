Ext.define("com.coremedia.ui.skins.MenuSkin", function(MenuSkin) {/*package com.coremedia.ui.skins {
/**
 * Declares all usable skins for menus defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class MenuSkin extends BaseSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "MenuSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "menus";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:MenuSkin =*/function DEFAULT$static_(){MenuSkin.DEFAULT=( new MenuSkin("default"));}/*;
  public static const SIDE:MenuSkin =*/function SIDE$static_(){MenuSkin.SIDE=( new MenuSkin("side"));}/*;
  public static const EMBEDDED:MenuSkin =*/function EMBEDDED$static_(){MenuSkin.EMBEDDED=( new MenuSkin("embedded"));}/*;
  public static const GRID_100:MenuSkin =*/function GRID_100$static_(){MenuSkin.GRID_100=( new MenuSkin("grid-100"));}/*;

  // default skin for specialized MenuBar - does not need to be explicitly defined
  //noinspection JSUnusedGlobalSymbols
  public static const DEFAULT_MENUBAR:MenuSkin =*/function DEFAULT_MENUBAR$static_(){MenuSkin.DEFAULT_MENUBAR=( new MenuSkin("default-menubar"));}/*;
  public static const HEADER_MENUBAR:MenuSkin =*/function HEADER_MENUBAR$static_(){MenuSkin.HEADER_MENUBAR=( new MenuSkin("header-menubar"));}/*;

  /**
   * An array containing all MenuSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.MenuSkin")]
  public static const values:Array =*/function values$static_(){MenuSkin.values=( com.coremedia.ui.util.Enum.collectValues(MenuSkin));}/*;*/

  function MenuSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$X56O(skin, skinGroup ? skinGroup : MenuSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.BaseSkin",
      metadata: {"": ["PublicApi"]},
      constructor: MenuSkin$,
      super$X56O: function() {
        com.coremedia.ui.skins.BaseSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "menus",
        DEFAULT: undefined,
        SIDE: undefined,
        EMBEDDED: undefined,
        GRID_100: undefined,
        DEFAULT_MENUBAR: undefined,
        HEADER_MENUBAR: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          SIDE$static_();
          EMBEDDED$static_();
          GRID_100$static_();
          DEFAULT_MENUBAR$static_();
          HEADER_MENUBAR$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.BaseSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
