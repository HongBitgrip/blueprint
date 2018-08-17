Ext.define("com.coremedia.ui.skins.StatusProxySkin", function(StatusProxySkin) {/*package com.coremedia.ui.skins {
public class StatusProxySkin extends BaseSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "StatusProxySkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "statusproxies";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:StatusProxySkin =*/function DEFAULT$static_(){StatusProxySkin.DEFAULT=( new StatusProxySkin("default"));}/*;
  public static const SIMPLE:StatusProxySkin =*/function SIMPLE$static_(){StatusProxySkin.SIMPLE=( new StatusProxySkin("simple"));}/*;

  /**
   * An array containing all StatusProxySkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.StatusProxySkin")]
  public static const values:Array =*/function values$static_(){StatusProxySkin.values=( com.coremedia.ui.util.Enum.collectValues(StatusProxySkin));}/*;

  public*/ function StatusProxySkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$bbkT(skin, skinGroup ? skinGroup : StatusProxySkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.BaseSkin",
      constructor: StatusProxySkin$,
      super$bbkT: function() {
        com.coremedia.ui.skins.BaseSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "statusproxies",
        DEFAULT: undefined,
        SIMPLE: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          SIMPLE$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.BaseSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
