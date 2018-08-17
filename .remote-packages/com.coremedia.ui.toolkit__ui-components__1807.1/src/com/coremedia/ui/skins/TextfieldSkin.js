Ext.define("com.coremedia.ui.skins.TextfieldSkin", function(TextfieldSkin) {/*package com.coremedia.ui.skins {
/**
 * Declares all usable skins for textfields defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class TextfieldSkin extends LabelableSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "TextfieldSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "textfields";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:TextfieldSkin =*/function DEFAULT$static_(){TextfieldSkin.DEFAULT=( new TextfieldSkin(com.coremedia.ui.skins.LabelableSkin.DEFAULT.getSkin()));}/*;
  public static const CENTERED:TextfieldSkin =*/function CENTERED$static_(){TextfieldSkin.CENTERED=( new TextfieldSkin(com.coremedia.ui.skins.LabelableSkin.CENTERED.getSkin()));}/*;
  public static const EMBEDDED:TextfieldSkin =*/function EMBEDDED$static_(){TextfieldSkin.EMBEDDED=( new TextfieldSkin(com.coremedia.ui.skins.LabelableSkin.EMBEDDED.getSkin()));}/*;
  public static const WINDOW_HEADER:TextfieldSkin =*/function WINDOW_HEADER$static_(){TextfieldSkin.WINDOW_HEADER=( new TextfieldSkin(com.coremedia.ui.skins.LabelableSkin.WINDOW_HEADER.getSkin()));}/*;
  public static const PLAIN_LABEL:TextfieldSkin =*/function PLAIN_LABEL$static_(){TextfieldSkin.PLAIN_LABEL=( new TextfieldSkin(com.coremedia.ui.skins.LabelableSkin.PLAIN_LABEL.getSkin()));}/*;

  /**
   * OPAQUE TextfieldSkin is used as default in EditorOverride.js to prevent animations and transparent background color
   * on inline editing elements.
   * /
  public static const OPAQUE:TextfieldSkin =*/function OPAQUE$static_(){TextfieldSkin.OPAQUE=( new TextfieldSkin(com.coremedia.ui.skins.LabelableSkin.OPAQUE.getSkin()));}/*;

  /**
   * An array containing all LabelableSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.TextfieldSkin")]
  public static const values:Array =*/function values$static_(){TextfieldSkin.values=( com.coremedia.ui.util.Enum.collectValues(TextfieldSkin));}/*;*/

  function TextfieldSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$6N9k(skin, skinGroup ? skinGroup : TextfieldSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.LabelableSkin",
      metadata: {"": ["PublicApi"]},
      constructor: TextfieldSkin$,
      super$6N9k: function() {
        com.coremedia.ui.skins.LabelableSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "textfields",
        DEFAULT: undefined,
        CENTERED: undefined,
        EMBEDDED: undefined,
        WINDOW_HEADER: undefined,
        PLAIN_LABEL: undefined,
        OPAQUE: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          CENTERED$static_();
          EMBEDDED$static_();
          WINDOW_HEADER$static_();
          PLAIN_LABEL$static_();
          OPAQUE$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.LabelableSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
