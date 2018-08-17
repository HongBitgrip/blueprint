Ext.define("com.coremedia.ui.skins.TabBarSkin", function(TabBarSkin) {/*package com.coremedia.ui.skins {
/**
 * Declares all usable skins for tab bars defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class TabBarSkin extends BaseSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "TabBarSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "tabbars";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:TabBarSkin =*/function DEFAULT$static_(){TabBarSkin.DEFAULT=( new TabBarSkin("default"));}/*;
  public static const WORKAREA_PANEL:TabBarSkin =*/function WORKAREA_PANEL$static_(){TabBarSkin.WORKAREA_PANEL=( new TabBarSkin("workarea-panel"));}/*;
  public static const WORKAREA_LIGHT:TabBarSkin =*/function WORKAREA_LIGHT$static_(){TabBarSkin.WORKAREA_LIGHT=( new TabBarSkin("workarea-light"));}/*;
  public static const WORKAREA:TabBarSkin =*/function WORKAREA$static_(){TabBarSkin.WORKAREA=( new TabBarSkin("workarea"));}/*;
  public static const SIDE:TabBarSkin =*/function SIDE$static_(){TabBarSkin.SIDE=( new TabBarSkin("side"));}/*;

  /**
   * An array containing all TabBarSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.TabBarSkin")]
  public static const values:Array =*/function values$static_(){TabBarSkin.values=( com.coremedia.ui.util.Enum.collectValues(TabBarSkin));}/*;*/

  function TabBarSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$Tptt(skin, skinGroup ? skinGroup : TabBarSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.BaseSkin",
      metadata: {"": ["PublicApi"]},
      constructor: TabBarSkin$,
      super$Tptt: function() {
        com.coremedia.ui.skins.BaseSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "tabbars",
        DEFAULT: undefined,
        WORKAREA_PANEL: undefined,
        WORKAREA_LIGHT: undefined,
        WORKAREA: undefined,
        SIDE: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          WORKAREA_PANEL$static_();
          WORKAREA_LIGHT$static_();
          WORKAREA$static_();
          SIDE$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.BaseSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
