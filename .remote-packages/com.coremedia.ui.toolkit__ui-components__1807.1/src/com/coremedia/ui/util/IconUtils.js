Ext.define("com.coremedia.ui.util.IconUtils", function(IconUtils) {/*package com.coremedia.ui.util {

/**
 * Utility class for working with icons.
 * /
public class IconUtils {

  private static const*/var SCALE_TO_SIZE$static/*:Object*/;/* =*/function SCALE_TO_SIZE$static_(){SCALE_TO_SIZE$static=( {
    small: "100",
    medium: "200",
    large: "300"
  });};/*

  private static const*/var EXPR_ICON_BLOCK$static/*:RegExp*/ = /^(.+-icons)$/;/*
  private static const*/var EXPR_ICON_MODIFIER$static/*:RegExp*/ = /^.+-icons--(.+)$/;/*

  public*/ function IconUtils$() {}/*

  /**
   * As we have different icons based on the {@link #scale} of the component this utility function has to be used
   * whenever an icon is defined directly in a component. The result must be attached as an additional class to the
   * {@link ext.dom.Element} the given {@link #iconCls} is attached to.
   *
   * This only works for icon classes following our defined pattern, where the scale is applied as B.E.M. modifier.
   *
   * @param iconCls the iconCls the scaleCls will be calculated for
   * @param scale the scale the scaleCls will be calculated for
   * @return a css class defining the right icon for the given iconCls
   * /
  public static*/ function calculateIconScaleCls$static(iconCls/*:String*/, scale/*:String*/)/*:String*/ {
    var size/*:String*/ =AS3.as( SCALE_TO_SIZE$static[scale],  String);
    if (iconCls && size) {
      var classes/*:Array*/ = iconCls.split(" "),
              iconModule/*:String*/ = undefined,
              iconId/*:String*/ = undefined;
      classes.forEach(function (cls/*:String*/)/*:void*/ {
        var iconModuleMatches/*:Array*/ = cls.match(EXPR_ICON_BLOCK$static);
        if (iconModuleMatches) {
          iconModule = iconModuleMatches[1];
        } else {
          var iconIdMatches/*:Array*/ = cls.match(EXPR_ICON_MODIFIER$static);
          if (iconIdMatches) {
            iconId = iconIdMatches[1];
          }
        }
      });

      if (iconModule && iconId) {
        return com.coremedia.ui.util.BEMUtils.getModifierClassName(iconModule, size);
      }
    }
    return null;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: IconUtils$,
      statics: {
        SCALE_TO_SIZE: undefined,
        calculateIconScaleCls: calculateIconScaleCls$static,
        __initStatics__: function() {
          SCALE_TO_SIZE$static_();
        }
      },
      uses: ["com.coremedia.ui.util.BEMUtils"]
    };
});
