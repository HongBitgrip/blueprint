Ext.define("com.coremedia.ui.util.ReusableComponentsServiceImpl", function(ReusableComponentsServiceImpl) {/*package com.coremedia.ui.util {
import ext.Component;
import ext.app.ViewModel;
import ext.container.Container;

import joo.getOrCreatePackage;

public class ReusableComponentsServiceImpl implements IReusableComponentsService {

  private static*/ var instance$static/*:ReusableComponentsServiceImpl*/=null;/*

  private var componentsPerKey:Object =*/function componentsPerKey_(){this.componentsPerKey$kFVi=( {});}/*;
  private var componentLimitsPerKey:Object =*/function componentLimitsPerKey_(){this.componentLimitsPerKey$kFVi=( {});}/*;

  public static*/ function initReusableComponentsService$static()/*:void*/ {
    if(!com.coremedia.ui.util.reusableComponentsService){
      joo.getOrCreatePackage("com.coremedia.ui.util").reusableComponentsService = ReusableComponentsServiceImpl.getInstance();
    }
  }/*

  public static*/ function getInstance$static()/*:ReusableComponentsServiceImpl*/ {
    if (!instance$static) {
      instance$static = new ReusableComponentsServiceImpl();
    }
    return instance$static;
  }/*

  public*/ function setReusabilityLimit(key/*:String*/, limit/*:int*/)/*:void*/ {
    if (!this.componentsPerKey$kFVi[key]) {
      this.componentsPerKey$kFVi[key] = [];
    }
    this.componentLimitsPerKey$kFVi[key] = limit;
  }/*

  public*/ function isReusabilityEnabled(key/*:String*/)/*:Boolean*/ {
    return ! !this.componentLimitsPerKey$kFVi[key];
  }/*

  public*/ function registerComponentForReuse(key/*:String*/, comp/*:Component*/)/*:Boolean*/ {
    if (!this.componentLimitsPerKey$kFVi[key]) {
      return false;
    }

    if (!this.componentsPerKey$kFVi[key]) {
      this.componentsPerKey$kFVi[key] = [];
    }

    //noinspection JSMismatchedCollectionQueryUpdate
    var comps/*:Array*/ = this.componentsPerKey$kFVi[key];

    if (comps.length <= this.componentLimitsPerKey$kFVi[key]
            && this.componentsPerKey$kFVi[key].indexOf(comp) === -1) {
      comps.push(comp);
      return true;
    }

    return false;
  }/*

  public*/ function requestComponentForReuse(key/*:String*/)/*:Component*/ {
    if (!this.componentsPerKey$kFVi[key]
            || this.componentsPerKey$kFVi[key].length === 0) {
      return null;
    }

    var unusedCmps/*:Array*/ = this.componentsPerKey$kFVi[key].filter(function (cmp/*:Component*/)/*:Boolean*/ {
      return !cmp.up();
    });

    var comp/*:Component*/;

    if (unusedCmps.length > 0) {
      comp = unusedCmps[0];
    }

    if (!comp && this.componentsPerKey$kFVi[key].length === this.componentLimitsPerKey$kFVi[key]) {
      comp = this.componentsPerKey$kFVi[key][0];
    }

    if (!comp) {
      return null;
    }

    this.reusableComponentActivated(key, comp);

    return comp;
  }/*

  public*/ function limitForReusableComponentsReached(key/*:String*/)/*:Boolean*/ {
    return this.componentsPerKey$kFVi[key] && this.componentsPerKey$kFVi[key].length === this.componentLimitsPerKey$kFVi[key];
  }/*

  public*/ function isReusableComponent(key/*:String*/, comp/*:Component*/)/*:Boolean*/ {
    return this.componentsPerKey$kFVi[key] && this.componentsPerKey$kFVi[key].indexOf(comp) !== -1;
  }/*

  public*/ function removeReusableComponentCleanly(comp/*:Component*/, resetViewModels/*:Boolean = false*/)/*:void*/ {if(arguments.length<=1)resetViewModels=false;
    var currentCompOwner/*:Container*/ = comp.up();

    if (currentCompOwner) {
      currentCompOwner.remove(comp, {destroy: false, detach: true});
      resetViewModels && resetViewModelsRecursively$static(comp);
    }
  }/*

  private static*/ function resetViewModelsRecursively$static(comp/*:Component*/)/*:void*/ {
    if (! !comp.getViewModel()) {
      if (AS3.is(comp.getViewModel(),  Ext.app.ViewModel)) {
        (AS3.as(comp.getViewModel(),  Ext.app.ViewModel)).destroy();
      }
      comp.setViewModel(null);
    }

    if (AS3.is(comp,  Ext.container.Container)) {
      (AS3.as(comp,  Ext.container.Container)).itemCollection.each(resetViewModelsRecursively$static);
    }
  }/*

  public*/ function reusableComponentActivated(key/*:String*/, comp/*:Component*/)/*:void*/ {
    if (this.isReusableComponent(key, comp)
            && this.componentsPerKey$kFVi[key].indexOf(comp) !== this.componentsPerKey$kFVi[key].length) {
      this.componentsPerKey$kFVi[key].splice(this.componentsPerKey$kFVi[key].indexOf(comp), 1);
      this.componentsPerKey$kFVi[key].push(comp);
    }
  }/*

  // for tests
  public*/ function reset()/*:void*/ {
    for (var key/*:String*/ in this.componentLimitsPerKey$kFVi) {
      this.componentLimitsPerKey$kFVi[key] = 0;
    }

    for (key in this.componentsPerKey$kFVi) {
      this.cleanupComponents$kFVi(key);
    }
  }/*

  private*/ function cleanupComponents(key/*:String*/)/*:void*/ {
    var comps/*:Array*/ = this.componentsPerKey$kFVi[key] || [];
    comps.forEach(function (comp/*:Component*/)/*:void*/ {
      !comp.up() && comp.destroy();
    });
    this.componentsPerKey$kFVi[key] = [];
  }/*
}*/function ReusableComponentsServiceImpl$() {componentsPerKey_.call(this);componentLimitsPerKey_.call(this);}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.util.IReusableComponentsService"],
      setReusabilityLimit: setReusabilityLimit,
      isReusabilityEnabled: isReusabilityEnabled,
      registerComponentForReuse: registerComponentForReuse,
      requestComponentForReuse: requestComponentForReuse,
      limitForReusableComponentsReached: limitForReusableComponentsReached,
      isReusableComponent: isReusableComponent,
      removeReusableComponentCleanly: removeReusableComponentCleanly,
      reusableComponentActivated: reusableComponentActivated,
      reset: reset,
      cleanupComponents$kFVi: cleanupComponents,
      constructor: ReusableComponentsServiceImpl$,
      statics: {
        initReusableComponentsService: initReusableComponentsService$static,
        getInstance: getInstance$static
      },
      requires: [
        "Ext.app.ViewModel",
        "Ext.container.Container",
        "com.coremedia.ui.util.IReusableComponentsService"
      ],
      uses: ["com.coremedia.ui.util.reusableComponentsService"]
    };
});
