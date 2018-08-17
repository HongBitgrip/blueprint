Ext.define("com.coremedia.ui.skins.TableViewSkin", function(TableViewSkin) {/*package com.coremedia.ui.skins {
/**
 * Declares all usable skins for panels defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class TableViewSkin extends BaseSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "TableViewSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "tableviews";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:TableViewSkin =*/function DEFAULT$static_(){TableViewSkin.DEFAULT=( new TableViewSkin("default"));}/*;
  public static const LIGHT:TableViewSkin =*/function LIGHT$static_(){TableViewSkin.LIGHT=( new TableViewSkin("light"));}/*;
  public static const LARGE_CELLS:TableViewSkin =*/function LARGE_CELLS$static_(){TableViewSkin.LARGE_CELLS=( new TableViewSkin("large-cells"));}/*;

  /**
   * An array containing all PanelSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.TableViewSkin")]
  public static const values:Array =*/function values$static_(){TableViewSkin.values=( com.coremedia.ui.util.Enum.collectValues(TableViewSkin));}/*;*/

  function TableViewSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$5$CK(skin, skinGroup ? skinGroup : TableViewSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.BaseSkin",
      metadata: {"": ["PublicApi"]},
      constructor: TableViewSkin$,
      super$5$CK: function() {
        com.coremedia.ui.skins.BaseSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "tableviews",
        DEFAULT: undefined,
        LIGHT: undefined,
        LARGE_CELLS: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          LIGHT$static_();
          LARGE_CELLS$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.BaseSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
