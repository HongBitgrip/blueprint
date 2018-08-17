Ext.define("com.coremedia.ui.skins.ToolbarSkin", function(ToolbarSkin) {/*package com.coremedia.ui.skins {
/**
 * Declares all usable skins for toolbars defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class ToolbarSkin extends BaseSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "ToolbarSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "toolbars";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:ToolbarSkin =*/function DEFAULT$static_(){ToolbarSkin.DEFAULT=( new ToolbarSkin("default"));}/*;

  public static const LIGHT:ToolbarSkin =*/function LIGHT$static_(){ToolbarSkin.LIGHT=( new ToolbarSkin("light"));}/*;
  public static const HEADER:ToolbarSkin =*/function HEADER$static_(){ToolbarSkin.HEADER=( new ToolbarSkin("header"));}/*;
  public static const HEADER_GRID_100:ToolbarSkin =*/function HEADER_GRID_100$static_(){ToolbarSkin.HEADER_GRID_100=( new ToolbarSkin("header-grid-100"));}/*;
  public static const FIELD:ToolbarSkin =*/function FIELD$static_(){ToolbarSkin.FIELD=( new ToolbarSkin("field", "Transparent Background with centered scrollers."));}/*;
  public static const FIELD_LIGHT:ToolbarSkin =*/function FIELD_LIGHT$static_(){ToolbarSkin.FIELD_LIGHT=( new ToolbarSkin("field-light"));}/*;
  public static const EMBEDDED_FOOTER:ToolbarSkin =*/function EMBEDDED_FOOTER$static_(){ToolbarSkin.EMBEDDED_FOOTER=( new ToolbarSkin("embedded-footer"));}/*;
  public static const EMBEDDED_FOOTER_GRID_100:ToolbarSkin =*/function EMBEDDED_FOOTER_GRID_100$static_(){ToolbarSkin.EMBEDDED_FOOTER_GRID_100=( new ToolbarSkin("embedded-footer-grid-100"));}/*;
  public static const MAIN_NAVIGATION:ToolbarSkin =*/function MAIN_NAVIGATION$static_(){ToolbarSkin.MAIN_NAVIGATION=( new ToolbarSkin("main-navigation"));}/*;
  public static const MENU_HEADER:ToolbarSkin =*/function MENU_HEADER$static_(){ToolbarSkin.MENU_HEADER=( new ToolbarSkin("menu-header"));}/*;
  public static const WORKAREA:ToolbarSkin =*/function WORKAREA$static_(){ToolbarSkin.WORKAREA=( new ToolbarSkin("workarea"));}/*;
  public static const SIDE:ToolbarSkin =*/function SIDE$static_(){ToolbarSkin.SIDE=( new ToolbarSkin("side"));}/*;
  public static const WINDOW_HEADER:ToolbarSkin =*/function WINDOW_HEADER$static_(){ToolbarSkin.WINDOW_HEADER=( new ToolbarSkin("window-header"));}/*;
  public static const PREVIEW:ToolbarSkin =*/function PREVIEW$static_(){ToolbarSkin.PREVIEW=( new ToolbarSkin("preview"));}/*;
  public static const WIDGET_HEADER:ToolbarSkin =*/function WIDGET_HEADER$static_(){ToolbarSkin.WIDGET_HEADER=( new ToolbarSkin("widget-header"));}/*;
  public static const WIDGET_HEADER_HIGHLIGHTED:ToolbarSkin =*/function WIDGET_HEADER_HIGHLIGHTED$static_(){ToolbarSkin.WIDGET_HEADER_HIGHLIGHTED=( new ToolbarSkin("widget-header-highlighted"));}/*;
  // footer skin is automatically applied when using fbar property in panels
  public static const FOOTER:ToolbarSkin =*/function FOOTER$static_(){ToolbarSkin.FOOTER=( new ToolbarSkin("footer"));}/*;
  public static const PLAIN:ToolbarSkin =*/function PLAIN$static_(){ToolbarSkin.PLAIN=( new ToolbarSkin("plain"));}/*;


  /**
   * An array containing all ToolbarSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.ToolbarSkin")]
  public static const values:Array =*/function values$static_(){ToolbarSkin.values=( com.coremedia.ui.util.Enum.collectValues(ToolbarSkin));}/*;*/

  function ToolbarSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$RN$y(skin, skinGroup ? skinGroup : ToolbarSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.BaseSkin",
      metadata: {"": ["PublicApi"]},
      constructor: ToolbarSkin$,
      super$RN$y: function() {
        com.coremedia.ui.skins.BaseSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "toolbars",
        DEFAULT: undefined,
        LIGHT: undefined,
        HEADER: undefined,
        HEADER_GRID_100: undefined,
        FIELD: undefined,
        FIELD_LIGHT: undefined,
        EMBEDDED_FOOTER: undefined,
        EMBEDDED_FOOTER_GRID_100: undefined,
        MAIN_NAVIGATION: undefined,
        MENU_HEADER: undefined,
        WORKAREA: undefined,
        SIDE: undefined,
        WINDOW_HEADER: undefined,
        PREVIEW: undefined,
        WIDGET_HEADER: undefined,
        WIDGET_HEADER_HIGHLIGHTED: undefined,
        FOOTER: undefined,
        PLAIN: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          LIGHT$static_();
          HEADER$static_();
          HEADER_GRID_100$static_();
          FIELD$static_();
          FIELD_LIGHT$static_();
          EMBEDDED_FOOTER$static_();
          EMBEDDED_FOOTER_GRID_100$static_();
          MAIN_NAVIGATION$static_();
          MENU_HEADER$static_();
          WORKAREA$static_();
          SIDE$static_();
          WINDOW_HEADER$static_();
          PREVIEW$static_();
          WIDGET_HEADER$static_();
          WIDGET_HEADER_HIGHLIGHTED$static_();
          FOOTER$static_();
          PLAIN$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.BaseSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
