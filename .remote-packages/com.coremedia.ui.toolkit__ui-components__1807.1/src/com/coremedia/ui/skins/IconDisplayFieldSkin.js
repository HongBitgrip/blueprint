Ext.define("com.coremedia.ui.skins.IconDisplayFieldSkin", function(IconDisplayFieldSkin) {/*package com.coremedia.ui.skins {
/**
 * Declares all usable skins for {@link IconDisplayField} defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class IconDisplayFieldSkin extends DisplayFieldSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "IconDisplayFieldSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "icondisplayfields";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:IconDisplayFieldSkin =*/function DEFAULT$static_(){IconDisplayFieldSkin.DEFAULT=( new IconDisplayFieldSkin(com.coremedia.ui.skins.DisplayFieldSkin.DEFAULT.getSkin()));}/*;
  public static const WORKAREA:IconDisplayFieldSkin =*/function WORKAREA$static_(){IconDisplayFieldSkin.WORKAREA=( new IconDisplayFieldSkin(com.coremedia.ui.skins.DisplayFieldSkin.WORKAREA.getSkin()));}/*;
  public static const INFO:IconDisplayFieldSkin =*/function INFO$static_(){IconDisplayFieldSkin.INFO=( new IconDisplayFieldSkin(com.coremedia.ui.skins.DisplayFieldSkin.INFO.getSkin()));}/*;
  public static const DOUBLE:IconDisplayFieldSkin =*/function DOUBLE$static_(){IconDisplayFieldSkin.DOUBLE=( new IconDisplayFieldSkin(com.coremedia.ui.skins.DisplayFieldSkin.DOUBLE.getSkin()));}/*;
  public static const ITALIC:IconDisplayFieldSkin =*/function ITALIC$static_(){IconDisplayFieldSkin.ITALIC=( new IconDisplayFieldSkin(com.coremedia.ui.skins.DisplayFieldSkin.ITALIC.getSkin()));}/*;
  public static const BOLD:IconDisplayFieldSkin =*/function BOLD$static_(){IconDisplayFieldSkin.BOLD=( new IconDisplayFieldSkin(com.coremedia.ui.skins.DisplayFieldSkin.BOLD.getSkin()));}/*;
  public static const LOGO:IconDisplayFieldSkin =*/function LOGO$static_(){IconDisplayFieldSkin.LOGO=( new IconDisplayFieldSkin(com.coremedia.ui.skins.DisplayFieldSkin.LOGO.getSkin()));}/*;
  public static const LICENSE_WARNING:IconDisplayFieldSkin =*/function LICENSE_WARNING$static_(){IconDisplayFieldSkin.LICENSE_WARNING=( new IconDisplayFieldSkin(com.coremedia.ui.skins.DisplayFieldSkin.LICENSE_WARNING.getSkin()));}/*;
  public static const EMBEDDED:LabelableSkin =*/function EMBEDDED$static_(){IconDisplayFieldSkin.EMBEDDED=( new IconDisplayFieldSkin(com.coremedia.ui.skins.DisplayFieldSkin.EMBEDDED.getSkin()));}/*;
  public static const LIGHT:LabelableSkin =*/function LIGHT$static_(){IconDisplayFieldSkin.LIGHT=( new IconDisplayFieldSkin(com.coremedia.ui.skins.DisplayFieldSkin.LIGHT.getSkin()));}/*;

  /**
   * An array containing all IconDisplayFieldSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.IconDisplayFieldSkin")]
  public static const values:Array =*/function values$static_(){IconDisplayFieldSkin.values=( com.coremedia.ui.util.Enum.collectValues(IconDisplayFieldSkin));}/*;*/

  function IconDisplayFieldSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$1tsg(skin, skinGroup ? skinGroup : IconDisplayFieldSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.DisplayFieldSkin",
      metadata: {"": ["PublicApi"]},
      constructor: IconDisplayFieldSkin$,
      super$1tsg: function() {
        com.coremedia.ui.skins.DisplayFieldSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "icondisplayfields",
        DEFAULT: undefined,
        WORKAREA: undefined,
        INFO: undefined,
        DOUBLE: undefined,
        ITALIC: undefined,
        BOLD: undefined,
        LOGO: undefined,
        LICENSE_WARNING: undefined,
        EMBEDDED: undefined,
        LIGHT: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          WORKAREA$static_();
          INFO$static_();
          DOUBLE$static_();
          ITALIC$static_();
          BOLD$static_();
          LOGO$static_();
          LICENSE_WARNING$static_();
          EMBEDDED$static_();
          LIGHT$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
