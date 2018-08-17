Ext.define("com.coremedia.ui.skins.DisplayFieldSkin", function(DisplayFieldSkin) {/*package com.coremedia.ui.skins {
/**
 * Declares all usable skins for display fields defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class DisplayFieldSkin extends LabelableSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "DisplayFieldSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "displayfields";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:DisplayFieldSkin =*/function DEFAULT$static_(){DisplayFieldSkin.DEFAULT=( new DisplayFieldSkin(com.coremedia.ui.skins.LabelableSkin.DEFAULT.getSkin()));}/*;
  public static const NUMBER:DisplayFieldSkin =*/function NUMBER$static_(){DisplayFieldSkin.NUMBER=( new DisplayFieldSkin(com.coremedia.ui.skins.LabelableSkin.NUMBER.getSkin()));}/*;
  public static const MOUSEPRINT:DisplayFieldSkin =*/function MOUSEPRINT$static_(){DisplayFieldSkin.MOUSEPRINT=( new DisplayFieldSkin(com.coremedia.ui.skins.LabelableSkin.MOUSEPRINT.getSkin()));}/*;
  public static const INVERTED:DisplayFieldSkin =*/function INVERTED$static_(){DisplayFieldSkin.INVERTED=( new DisplayFieldSkin(com.coremedia.ui.skins.LabelableSkin.INVERTED.getSkin()));}/*;
  public static const ITALIC:DisplayFieldSkin =*/function ITALIC$static_(){DisplayFieldSkin.ITALIC=( new DisplayFieldSkin(com.coremedia.ui.skins.LabelableSkin.ITALIC.getSkin()));}/*;
  public static const BOLD:DisplayFieldSkin =*/function BOLD$static_(){DisplayFieldSkin.BOLD=( new DisplayFieldSkin(com.coremedia.ui.skins.LabelableSkin.BOLD.getSkin()));}/*;
  public static const UNDERLINE:DisplayFieldSkin =*/function UNDERLINE$static_(){DisplayFieldSkin.UNDERLINE=( new DisplayFieldSkin(com.coremedia.ui.skins.LabelableSkin.UNDERLINE.getSkin()));}/*;
  public static const WORKAREA:DisplayFieldSkin =*/function WORKAREA$static_(){DisplayFieldSkin.WORKAREA=( new DisplayFieldSkin(com.coremedia.ui.skins.LabelableSkin.WORKAREA.getSkin()));}/*;
  public static const INFO:DisplayFieldSkin =*/function INFO$static_(){DisplayFieldSkin.INFO=( new DisplayFieldSkin(com.coremedia.ui.skins.LabelableSkin.INFO.getSkin()));}/*;
  public static const DOUBLE:DisplayFieldSkin =*/function DOUBLE$static_(){DisplayFieldSkin.DOUBLE=( new DisplayFieldSkin(com.coremedia.ui.skins.LabelableSkin.DOUBLE.getSkin()));}/*;
  public static const LOGO:DisplayFieldSkin =*/function LOGO$static_(){DisplayFieldSkin.LOGO=( new DisplayFieldSkin(com.coremedia.ui.skins.LabelableSkin.LOGO.getSkin()));}/*;
  public static const LICENSE_WARNING:DisplayFieldSkin =*/function LICENSE_WARNING$static_(){DisplayFieldSkin.LICENSE_WARNING=( new DisplayFieldSkin(com.coremedia.ui.skins.LabelableSkin.LICENSE_WARNING.getSkin()));}/*;
  public static const EMBEDDED:DisplayFieldSkin =*/function EMBEDDED$static_(){DisplayFieldSkin.EMBEDDED=( new DisplayFieldSkin(com.coremedia.ui.skins.LabelableSkin.EMBEDDED.getSkin()));}/*;
  public static const LIGHT:DisplayFieldSkin =*/function LIGHT$static_(){DisplayFieldSkin.LIGHT=( new DisplayFieldSkin(com.coremedia.ui.skins.LabelableSkin.LIGHT.getSkin()));}/*;

  /**
   * An array containing all DisplayFieldSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.DisplayFieldSkin")]
  public static const values:Array =*/function values$static_(){DisplayFieldSkin.values=( com.coremedia.ui.util.Enum.collectValues(DisplayFieldSkin));}/*;*/

  function DisplayFieldSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$p7qH(skin, skinGroup ? skinGroup : DisplayFieldSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.LabelableSkin",
      metadata: {"": ["PublicApi"]},
      constructor: DisplayFieldSkin$,
      super$p7qH: function() {
        com.coremedia.ui.skins.LabelableSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "displayfields",
        DEFAULT: undefined,
        NUMBER: undefined,
        MOUSEPRINT: undefined,
        INVERTED: undefined,
        ITALIC: undefined,
        BOLD: undefined,
        UNDERLINE: undefined,
        WORKAREA: undefined,
        INFO: undefined,
        DOUBLE: undefined,
        LOGO: undefined,
        LICENSE_WARNING: undefined,
        EMBEDDED: undefined,
        LIGHT: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          NUMBER$static_();
          MOUSEPRINT$static_();
          INVERTED$static_();
          ITALIC$static_();
          BOLD$static_();
          UNDERLINE$static_();
          WORKAREA$static_();
          INFO$static_();
          DOUBLE$static_();
          LOGO$static_();
          LICENSE_WARNING$static_();
          EMBEDDED$static_();
          LIGHT$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.LabelableSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
