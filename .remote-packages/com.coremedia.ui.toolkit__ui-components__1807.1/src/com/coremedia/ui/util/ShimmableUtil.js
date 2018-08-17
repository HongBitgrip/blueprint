Ext.define("com.coremedia.ui.util.ShimmableUtil", function(ShimmableUtil) {/*package com.coremedia.ui.util {
import ext.Ext;
import ext.dd.DragDropManager;
import ext.dom.DomHelper;
import ext.dom.Element;

public class ShimmableUtil {

  private static const*/var SHIM_CLASS$static/*:String*/ = 'cm-shim';/*
  private static const*/var SHIM_CLASS_ON_SUFFIX$static/*:String*/ = '-on';/*
  private static const*/var SHIM_CLASS_MASK_SUFFIX$static/*:String*/ = '-mask';/*

  public static*/ function createShimForElement$static(el/*:Element*/)/*:Element*/ {
    if (!el) {
      return null;
    }
    var shim/*:Element*/ = Ext.dom.Helper.append(
                    el, {
                      tag: 'img',
                      src: Ext.BLANK_IMAGE_URL,
                      cls: SHIM_CLASS$static,
                      galleryimg: 'no'
                    }, true);
    shim && (shim['autoBoxAdjust'] = false);

    return shim;
  }/*

  public static*/ function toggleShim$static(shim/*:Element*/, show/*:Boolean*/, mask/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<=2)mask=false;
    if (shim) {
      if (show) {
        // Fixes STUDIO-947
        delete Ext.dd.DragDropManager['locationCache'][shim.id];
      }
      var shimOnCls/*:String*/ = SHIM_CLASS$static + SHIM_CLASS_ON_SUFFIX$static;
      var shimMaskCls/*:String*/ = SHIM_CLASS$static + SHIM_CLASS_MASK_SUFFIX$static;
      if (show) {
        shim.addCls(shimOnCls);
        if (mask) {
          shim.addCls(shimMaskCls);
        }
      } else {
        shim.removeCls(shimOnCls);
        shim.removeCls(shimMaskCls);
      }
    }
  }/*
}*/function ShimmableUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ShimmableUtil$,
      statics: {
        createShimForElement: createShimForElement$static,
        toggleShim: toggleShim$static
      },
      requires: [
        "Ext",
        "Ext.dd.DragDropManager",
        "Ext.dom.Helper"
      ]
    };
});
