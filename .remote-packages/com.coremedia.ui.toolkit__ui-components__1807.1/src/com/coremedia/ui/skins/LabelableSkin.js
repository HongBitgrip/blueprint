Ext.define("com.coremedia.ui.skins.LabelableSkin", function(LabelableSkin) {/*package com.coremedia.ui.skins {
/**
 * Declares all usable skins for {@link ext.form.Labelable} defined in the studio-theme.
 *
 * Always use in conjunction with {@link ext.form.Labelable} as a {@link ext.form.Label} should never be used directly
 * as it needs to be assigned to a field.
 *
 * In case you just want to display text, use {@link ext.form.field.DisplayField} and {@link DisplayFieldSkin} instead.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class LabelableSkin extends BaseSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "LabelableSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "fields";

  //noinspection JSUnusedGlobalSymbols default skin does not need to be explicitly defined
  public static const DEFAULT:LabelableSkin =*/function DEFAULT$static_(){LabelableSkin.DEFAULT=( new LabelableSkin("default"));}/*;
  public static const NUMBER:LabelableSkin =*/function NUMBER$static_(){LabelableSkin.NUMBER=( new LabelableSkin("number"));}/*;
  public static const INVERTED:LabelableSkin =*/function INVERTED$static_(){LabelableSkin.INVERTED=( new LabelableSkin("inverted"));}/*;
  public static const MOUSEPRINT:LabelableSkin =*/function MOUSEPRINT$static_(){LabelableSkin.MOUSEPRINT=( new LabelableSkin("mouseprint"));}/*;
  public static const ITALIC:LabelableSkin =*/function ITALIC$static_(){LabelableSkin.ITALIC=( new LabelableSkin("italic"));}/*;
  public static const BOLD:LabelableSkin =*/function BOLD$static_(){LabelableSkin.BOLD=( new LabelableSkin("bold"));}/*;
  public static const UNDERLINE:LabelableSkin =*/function UNDERLINE$static_(){LabelableSkin.UNDERLINE=( new LabelableSkin("underline"));}/*;
  public static const ERROR:LabelableSkin =*/function ERROR$static_(){LabelableSkin.ERROR=( new LabelableSkin("error"));}/*;
  public static const CENTERED:LabelableSkin =*/function CENTERED$static_(){LabelableSkin.CENTERED=( new LabelableSkin("centered"));}/*;
  public static const WORKAREA:LabelableSkin =*/function WORKAREA$static_(){LabelableSkin.WORKAREA=( new LabelableSkin("workarea"));}/*;
  public static const INFO:LabelableSkin =*/function INFO$static_(){LabelableSkin.INFO=( new LabelableSkin("info"));}/*;
  public static const SUB:LabelableSkin =*/function SUB$static_(){LabelableSkin.SUB=( new LabelableSkin("sub"));}/*;
  public static const DOUBLE:LabelableSkin =*/function DOUBLE$static_(){LabelableSkin.DOUBLE=( new LabelableSkin("double"));}/*;
  public static const LOGO:LabelableSkin =*/function LOGO$static_(){LabelableSkin.LOGO=( new LabelableSkin("logo"));}/*;
  public static const LICENSE_WARNING:LabelableSkin =*/function LICENSE_WARNING$static_(){LabelableSkin.LICENSE_WARNING=( new LabelableSkin("license-warning"));}/*;
  public static const EMBEDDED:LabelableSkin =*/function EMBEDDED$static_(){LabelableSkin.EMBEDDED=( new LabelableSkin("embedded"));}/*;
  public static const LIGHT:LabelableSkin =*/function LIGHT$static_(){LabelableSkin.LIGHT=( new LabelableSkin("light"));}/*;
  public static const NO_BOX:LabelableSkin =*/function NO_BOX$static_(){LabelableSkin.NO_BOX=( new LabelableSkin("no-box"));}/*;
  public static const WINDOW_HEADER:LabelableSkin =*/function WINDOW_HEADER$static_(){LabelableSkin.WINDOW_HEADER=( new LabelableSkin("window-header"));}/*;
  public static const PLAIN_LABEL:LabelableSkin =*/function PLAIN_LABEL$static_(){LabelableSkin.PLAIN_LABEL=( new LabelableSkin("plain-label"));}/*;
  public static const OPAQUE:LabelableSkin =*/function OPAQUE$static_(){LabelableSkin.OPAQUE=( new LabelableSkin("opaque"));}/*;

  /**
   * An array containing all LabelableSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.LabelableSkin")]
  public static const values:Array =*/function values$static_(){LabelableSkin.values=( com.coremedia.ui.util.Enum.collectValues(LabelableSkin));}/*;*/

  function LabelableSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$CaHF(skin, skinGroup ? skinGroup : LabelableSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.BaseSkin",
      metadata: {"": ["PublicApi"]},
      constructor: LabelableSkin$,
      super$CaHF: function() {
        com.coremedia.ui.skins.BaseSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "fields",
        DEFAULT: undefined,
        NUMBER: undefined,
        INVERTED: undefined,
        MOUSEPRINT: undefined,
        ITALIC: undefined,
        BOLD: undefined,
        UNDERLINE: undefined,
        ERROR: undefined,
        CENTERED: undefined,
        WORKAREA: undefined,
        INFO: undefined,
        SUB: undefined,
        DOUBLE: undefined,
        LOGO: undefined,
        LICENSE_WARNING: undefined,
        EMBEDDED: undefined,
        LIGHT: undefined,
        NO_BOX: undefined,
        WINDOW_HEADER: undefined,
        PLAIN_LABEL: undefined,
        OPAQUE: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          NUMBER$static_();
          INVERTED$static_();
          MOUSEPRINT$static_();
          ITALIC$static_();
          BOLD$static_();
          UNDERLINE$static_();
          ERROR$static_();
          CENTERED$static_();
          WORKAREA$static_();
          INFO$static_();
          SUB$static_();
          DOUBLE$static_();
          LOGO$static_();
          LICENSE_WARNING$static_();
          EMBEDDED$static_();
          LIGHT$static_();
          NO_BOX$static_();
          WINDOW_HEADER$static_();
          PLAIN_LABEL$static_();
          OPAQUE$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.BaseSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
