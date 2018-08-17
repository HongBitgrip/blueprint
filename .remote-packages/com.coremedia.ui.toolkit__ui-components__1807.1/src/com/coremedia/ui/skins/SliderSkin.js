Ext.define("com.coremedia.ui.skins.SliderSkin", function(SliderSkin) {/*package com.coremedia.ui.skins {
/**
 * Declares all usable skins for sliders defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class SliderSkin extends LabelableSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "SliderSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "sliders";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:SliderSkin =*/function DEFAULT$static_(){SliderSkin.DEFAULT=( new SliderSkin(com.coremedia.ui.skins.LabelableSkin.DEFAULT.getSkin()));}/*;

  /**
   * An array containing all LabelableSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.SliderSkin")]
  public static const values:Array =*/function values$static_(){SliderSkin.values=( com.coremedia.ui.util.Enum.collectValues(SliderSkin));}/*;*/

  function SliderSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$hWqQ(skin, skinGroup ? skinGroup : SliderSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.LabelableSkin",
      metadata: {"": ["PublicApi"]},
      constructor: SliderSkin$,
      super$hWqQ: function() {
        com.coremedia.ui.skins.LabelableSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "sliders",
        DEFAULT: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.LabelableSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
