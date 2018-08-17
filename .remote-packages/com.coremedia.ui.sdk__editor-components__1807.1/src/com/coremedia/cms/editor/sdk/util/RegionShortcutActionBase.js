Ext.define("com.coremedia.cms.editor.sdk.util.RegionShortcutActionBase", function(RegionShortcutActionBase) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.ui.util.createComponentSelector;

import ext.Action;
import ext.Component;
import ext.Ext;
import ext.WindowManager;
import ext.app.Application;
import ext.container.Container;
import ext.dom.Element;

/**
 * Used to switch faster through the different regions
 * /
public class RegionShortcutActionBase extends Action {

  private static const*/var FOCUSABLE_REGION_SELECTOR$static/*:String*/;/* =*/function FOCUSABLE_REGION_SELECTOR$static_(){FOCUSABLE_REGION_SELECTOR$static=( com.coremedia.ui.util.createComponentSelector()
          .attr("ariaRole", "region")
          .focusable()
          .build());};/*
  private var dir:String;

  public*/ function RegionShortcutActionBase$(config/*:RegionShortcutAction = null*/) {if(arguments.length<=0)config=null;
    this.super$ATnp(config);
    this.dir$ATnp = AS3.getBindable(config,"direction");
    this.setHandler(AS3.bind(this,"handleAction$ATnp"), this);
  }/*

  /**
   * Steps through the given component ids if available
   * /
  private*/ function handleAction()/*:void*/ {
    var result/*:Array*/ = getFocusableRegions$static();
    if (result.length > 0) {
      var focusedRegion/*:Component*/ = getFocusedRegion$static();
      var index/*:Number*/ = result.indexOf(focusedRegion);
      if (this.dir$ATnp === com.coremedia.cms.editor.sdk.util.RegionShortcutAction.DIRECTION_FORWARDS) {
        index++;
      }
      else {
        index--;
      }

      if (index >= result.length) {
        index = 0;
      }
      if (index < 0) {
        index = result.length - 1;
      }

      var region/*:Component*/ = result[index];
      region.focus();
    }
  }/*

  private static*/ function findClosestComponent$static(element/*:Element*/)/*:Component*/ {
    if (element.component) {
      return element.component;
    }
    var parent/*:Element*/ =AS3.as( element.parent(),  Ext.dom.Element);
    if (parent) {
      return findClosestComponent$static(parent);
    }
    return null;
  }/*

  private static*/ function getFocusedComponent$static()/*:Component*/ {
    return findClosestComponent$static(Ext.fly(Ext.dom.Element.getActiveElement(false)));
  }/*

  private static*/ function getFocusedRegion$static()/*:Component*/ {
    var focusedComponent/*:Component*/ = getFocusedComponent$static();
    if (!focusedComponent) {
      return null;
    }
    if (isFocusableRegion$static(focusedComponent)) {
      return focusedComponent;
    }
    return focusedComponent.up(FOCUSABLE_REGION_SELECTOR$static);
  }/*

  private static*/ function isFocusableRegion$static(cmp/*:Component*/)/*:Boolean*/ {
    return cmp["is"](FOCUSABLE_REGION_SELECTOR$static);
  }/*

  private static*/ function findFocusableRegions$static(cmp/*:Component*/)/*:Array*/ {
    var result/*:Array*/ = [];
    if (isFocusableRegion$static(cmp)) {
      result.push(cmp);
    }
    var container/*:Container*/ =AS3.as( cmp,  Ext.container.Container);
    if (container) {
      result = result.concat(container.query(FOCUSABLE_REGION_SELECTOR$static));
    }
    return result;
  }/*

  /**
   * Returns all focusable regions inside the Studio.
   * /
  private static*/ function getFocusableRegions$static()/*:Array*/ {
    var regions/*:Array*/ = [];
    var components/*:Array*/ = [];
    var mainView/*:Container*/ = Ext.app.Application.instance.getMainView();
    if (mainView) {
      regions = regions.concat(regions, findFocusableRegions$static(mainView));
    }
    mainView && components.push(mainView);

    Ext.WindowManager.each(function (cmp/*:Component*/)/*:void*/ {
      regions = regions.concat(findFocusableRegions$static(cmp));
    });

    return regions;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      dir$ATnp: null,
      constructor: RegionShortcutActionBase$,
      super$ATnp: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      handleAction$ATnp: handleAction,
      statics: {
        FOCUSABLE_REGION_SELECTOR: undefined,
        __initStatics__: function() {
          FOCUSABLE_REGION_SELECTOR$static_();
        }
      },
      requires: [
        "Ext",
        "Ext.Action",
        "Ext.ZIndexManager",
        "Ext.app.Application",
        "Ext.container.Container",
        "Ext.dom.Element",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.RegionShortcutAction"]
    };
});
