Ext.define("com.coremedia.ui.skins.PanelSkin", function(PanelSkin) {/*package com.coremedia.ui.skins {
/**
 * Declares all usable skins for panels defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class PanelSkin extends BaseSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "PanelSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "panels";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:PanelSkin =*/function DEFAULT$static_(){PanelSkin.DEFAULT=( new PanelSkin("default"));}/*;

  public static const DOCKED:PanelSkin =*/function DOCKED$static_(){PanelSkin.DOCKED=( new PanelSkin("docked"));}/*;
  public static const FRAME_200_NO_TOP_BORDER:PanelSkin =*/function FRAME_200_NO_TOP_BORDER$static_(){PanelSkin.FRAME_200_NO_TOP_BORDER=( new PanelSkin("frame-200-no-top-border"));}/*;
  public static const NO_VALIDATION:PanelSkin =*/function NO_VALIDATION$static_(){PanelSkin.NO_VALIDATION=( new PanelSkin("no-validation"));}/*;
  public static const ACCORDION:PanelSkin =*/function ACCORDION$static_(){PanelSkin.ACCORDION=( new PanelSkin("accordion"));}/*;
  public static const CARD:PanelSkin =*/function CARD$static_(){PanelSkin.CARD=( new PanelSkin("card"));}/*;
  public static const CARD_200:PanelSkin =*/function CARD_200$static_(){PanelSkin.CARD_200=( new PanelSkin("card-200"));}/*;
  public static const CARD_NESTED:PanelSkin =*/function CARD_NESTED$static_(){PanelSkin.CARD_NESTED=( new PanelSkin("card-nested"));}/*;
  public static const EMBEDDED:PanelSkin =*/function EMBEDDED$static_(){PanelSkin.EMBEDDED=( new PanelSkin("embedded"));}/*;
  public static const INVERTED:PanelSkin =*/function INVERTED$static_(){PanelSkin.INVERTED=( new PanelSkin("inverted"));}/*;
  public static const CORPORATE_IDENTITY:PanelSkin =*/function CORPORATE_IDENTITY$static_(){PanelSkin.CORPORATE_IDENTITY=( new PanelSkin("corporate-identity"));}/*;
  public static const SPECIAL_WELCOME_OUTER:PanelSkin =*/function SPECIAL_WELCOME_OUTER$static_(){PanelSkin.SPECIAL_WELCOME_OUTER=( new PanelSkin("special-welcome-outer"));}/*;
  public static const SPECIAL_WELCOME_INNER:PanelSkin =*/function SPECIAL_WELCOME_INNER$static_(){PanelSkin.SPECIAL_WELCOME_INNER=( new PanelSkin("special-welcome-inner"));}/*;
  public static const WIDGET:PanelSkin =*/function WIDGET$static_(){PanelSkin.WIDGET=( new PanelSkin("widget"));}/*;
  public static const WIDGET_HIGHLIGHTED:PanelSkin =*/function WIDGET_HIGHLIGHTED$static_(){PanelSkin.WIDGET_HIGHLIGHTED=( new PanelSkin("widget-highlighted"));}/*;
  public static const GRID_200:PanelSkin =*/function GRID_200$static_(){PanelSkin.GRID_200=( new PanelSkin("grid-200"));}/*;
  public static const FRAME:PanelSkin =*/function FRAME$static_(){PanelSkin.FRAME=( new PanelSkin("frame"));}/*;
  public static const FRAME_100:PanelSkin =*/function FRAME_100$static_(){PanelSkin.FRAME_100=( new PanelSkin("frame-100"));}/*;
  public static const DARK:PanelSkin =*/function DARK$static_(){PanelSkin.DARK=( new PanelSkin("dark"));}/*;
  public static const DARK_100:PanelSkin =*/function DARK_100$static_(){PanelSkin.DARK_100=( new PanelSkin("dark-100"));}/*;
  public static const DARK_200:PanelSkin =*/function DARK_200$static_(){PanelSkin.DARK_200=( new PanelSkin("dark-200"));}/*;
  public static const FILTER:PanelSkin =*/function FILTER$static_(){PanelSkin.FILTER=( new PanelSkin("filter"));}/*;

  /**
   * An array containing all PanelSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.PanelSkin")]
  public static const values:Array =*/function values$static_(){PanelSkin.values=( com.coremedia.ui.util.Enum.collectValues(PanelSkin));}/*;*/

  function PanelSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$Lbi5(skin, skinGroup ? skinGroup : PanelSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.BaseSkin",
      metadata: {"": ["PublicApi"]},
      constructor: PanelSkin$,
      super$Lbi5: function() {
        com.coremedia.ui.skins.BaseSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "panels",
        DEFAULT: undefined,
        DOCKED: undefined,
        FRAME_200_NO_TOP_BORDER: undefined,
        NO_VALIDATION: undefined,
        ACCORDION: undefined,
        CARD: undefined,
        CARD_200: undefined,
        CARD_NESTED: undefined,
        EMBEDDED: undefined,
        INVERTED: undefined,
        CORPORATE_IDENTITY: undefined,
        SPECIAL_WELCOME_OUTER: undefined,
        SPECIAL_WELCOME_INNER: undefined,
        WIDGET: undefined,
        WIDGET_HIGHLIGHTED: undefined,
        GRID_200: undefined,
        FRAME: undefined,
        FRAME_100: undefined,
        DARK: undefined,
        DARK_100: undefined,
        DARK_200: undefined,
        FILTER: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          DOCKED$static_();
          FRAME_200_NO_TOP_BORDER$static_();
          NO_VALIDATION$static_();
          ACCORDION$static_();
          CARD$static_();
          CARD_200$static_();
          CARD_NESTED$static_();
          EMBEDDED$static_();
          INVERTED$static_();
          CORPORATE_IDENTITY$static_();
          SPECIAL_WELCOME_OUTER$static_();
          SPECIAL_WELCOME_INNER$static_();
          WIDGET$static_();
          WIDGET_HIGHLIGHTED$static_();
          GRID_200$static_();
          FRAME$static_();
          FRAME_100$static_();
          DARK$static_();
          DARK_100$static_();
          DARK_200$static_();
          FILTER$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.BaseSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
