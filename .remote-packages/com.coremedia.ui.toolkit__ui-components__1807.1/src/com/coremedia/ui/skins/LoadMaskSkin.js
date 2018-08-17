Ext.define("com.coremedia.ui.skins.LoadMaskSkin", function(LoadMaskSkin) {/* /**
 * Declares all usable skins for {@link ext.LoadMask} defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
package com.coremedia.ui.skins {
public class LoadMaskSkin extends BaseSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "LoadMaskSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "loadmask";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:LoadMaskSkin =*/function DEFAULT$static_(){LoadMaskSkin.DEFAULT=( new LoadMaskSkin("default"));}/*;
  public static const LIGHT:LoadMaskSkin =*/function LIGHT$static_(){LoadMaskSkin.LIGHT=( new LoadMaskSkin("light"));}/*;
  public static const OPAQUE:LoadMaskSkin =*/function OPAQUE$static_(){LoadMaskSkin.OPAQUE=( new LoadMaskSkin("opaque"));}/*;
  public static const TRANSPARENT:LoadMaskSkin =*/function TRANSPARENT$static_(){LoadMaskSkin.TRANSPARENT=( new LoadMaskSkin("transparent"));}/*;

  /**
   * An array containing all LoadMaskSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.LoadMaskSkin")]
  public static const values:Array =*/function values$static_(){LoadMaskSkin.values=( com.coremedia.ui.util.Enum.collectValues(LoadMaskSkin));}/*;*/

  function LoadMaskSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$4Ich(skin, skinGroup ? skinGroup : LoadMaskSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.BaseSkin",
      constructor: LoadMaskSkin$,
      super$4Ich: function() {
        com.coremedia.ui.skins.BaseSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "loadmask",
        DEFAULT: undefined,
        LIGHT: undefined,
        OPAQUE: undefined,
        TRANSPARENT: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          LIGHT$static_();
          OPAQUE$static_();
          TRANSPARENT$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.BaseSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
