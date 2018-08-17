Ext.define("com.coremedia.ui.skins.CheckboxSkin", function(CheckboxSkin) {/*package com.coremedia.ui.skins {
/**
 * Declares all usable skins for checkboxes defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class CheckboxSkin extends BaseSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "CheckboxSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "checkboxes";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:CheckboxSkin =*/function DEFAULT$static_(){CheckboxSkin.DEFAULT=( new CheckboxSkin(com.coremedia.ui.skins.LabelableSkin.DEFAULT.getSkin()));}/*;

  public static const NO_BOX:CheckboxSkin =*/function NO_BOX$static_(){CheckboxSkin.NO_BOX=( new CheckboxSkin(com.coremedia.ui.skins.LabelableSkin.NO_BOX.getSkin()));}/*;

  /**
   * An array containing all CheckboxSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.CheckboxSkin")]
  public static const values:Array =*/function values$static_(){CheckboxSkin.values=( com.coremedia.ui.util.Enum.collectValues(CheckboxSkin));}/*;*/

  function CheckboxSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$e1Vy(skin, skinGroup ? skinGroup : CheckboxSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.BaseSkin",
      metadata: {"": ["PublicApi"]},
      constructor: CheckboxSkin$,
      super$e1Vy: function() {
        com.coremedia.ui.skins.BaseSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "checkboxes",
        DEFAULT: undefined,
        NO_BOX: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          NO_BOX$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.BaseSkin",
        "com.coremedia.ui.util.Enum"
      ],
      uses: ["com.coremedia.ui.skins.LabelableSkin"]
    };
});
