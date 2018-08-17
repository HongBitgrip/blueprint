Ext.define("com.coremedia.ui.plugins.AbstractItemsPluginBase", function(AbstractItemsPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.mixins.ILazyItemsContainerMixin;
import com.coremedia.ui.mixins.LazyItemsContainerMixin;

import ext.ClassManager;
import ext.Component;
import ext.Ext;
import ext.button.Button;
import ext.container.Container;
import ext.panel.Panel;
import ext.plugin.AbstractPlugin;

/**
 * Manipulates the provided list of items of a container
 *
 * @see com.coremedia.ui.plugins.AbstractItemsPlugin
 * /
[PublicApi]
public class AbstractItemsPluginBase extends AbstractPlugin {

  private var index:uint;
  private var applyTo:Function;
  private var onlyIf:Function;
  private var recursive:Boolean;

  private var cont:Container;


  /**
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.ui.plugins.AbstractItemsPlugin
   * /
  public*/ function AbstractItemsPluginBase$(config/*:AbstractItemsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.applyTo$Wcvm = AS3.getBindable(config,"applyTo");
    this.onlyIf$Wcvm = AS3.getBindable(config,"onlyIf");
    this.index$Wcvm = AS3.getBindable(config,"index");

    this.recursive$Wcvm = AS3.getBindable(config,"recursive");
    if (this.recursive$Wcvm && AS3.getBindable(config,"index") !== undefined) {
      throw new AS3.Error("The config parameter index cannot be used when recursive ist set to true.");
    }

    this.super$Wcvm(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    this.cont$Wcvm =AS3.as( component,  Ext.container.Container);
    var targetCmp/*:**/ = this.getTargetCmp$Wcvm();
    if (!targetCmp) {
      this.waitForTargetCmp$Wcvm();
    } else {
      this.manipulateItemsConsideringLazyItems$Wcvm(targetCmp);
    }
  }/*

  internal*/ function analysePositionList(items/*:Array*/, itemIds/*:Object*/, componentIds/*:Object*/, xclasses/*:Object*/)/*:void*/ {
    if (items) {
      items.forEach(function(object/*:Component*/)/*:void*/ {
        if (AS3.getBindable(object,"id","DUMMY")) {
          componentIds[AS3.getBindable(object,"id","DUMMY")] = true;
        } else if (AS3.getBindable(object,"itemId","DUMMY")) {
          itemIds[AS3.getBindable(object,"itemId","DUMMY")] = true;
        } else {
          //TODO: EXT6_API. Is the configuration of the after/before object without itemId or id necessary?
          xclasses[Ext.getClassName(Ext.ClassManager['getByConfig'](object))] = true;
        }
      });
    }
  }/*

  // handle "nullpointer" exception when applyTo traverses component hierarchy like:
  // cont.queryById('itemId').ownerCt
  private*/ function getTargetCmp()/*:Container*/ {
    var myContainer/*:Container*/;
    try{
      myContainer = this.applyTo$Wcvm ? this.applyTo$Wcvm(this.cont$Wcvm) : this.cont$Wcvm;
    } catch(e/*:**/) {
      //ignore
    }
    return myContainer;
  }/*

  private*/ function waitForTargetCmp()/*:void*/ {
    this.cont$Wcvm.on("add",AS3.bind( this,"checkForTargetCmp$Wcvm"));
  }/*

  private*/ function checkForTargetCmp()/*:void*/ {
    var targetCmp/*:**/ = this.getTargetCmp$Wcvm();
    if (targetCmp) {
      this.cont$Wcvm.un("add",AS3.bind( this,"checkForTargetCmp$Wcvm"));
      this.manipulateItemsConsideringLazyItems$Wcvm(targetCmp);
    }
  }/*

  private*/ function manipulateItemsConsideringLazyItems(targetCmp/*:Container*/)/*:void*/ {var this$=this;
    if (! (AS3.is(targetCmp,  Ext.container.Container))) {
      throw new AS3.Error("The target component must be a Container.");
    }

    if (AS3.is(targetCmp,  com.coremedia.ui.mixins.LazyItemsContainerMixin)
            && (AS3.as(targetCmp,  com.coremedia.ui.mixins.LazyItemsContainerMixin)).itemsAreLazy()) {
      targetCmp.on(com.coremedia.ui.mixins.LazyItemsContainerMixin.LAZY_ITEMS_ADDED_EVENT, function ()/*:void*/ {
        this$.manipulateItemsConditionally$Wcvm(targetCmp);
      });
    } else {
      this.manipulateItemsConditionally$Wcvm(targetCmp);
    }
  }/*

  private*/ function manipulateItemsConditionally(targetCmp/*:**/)/*:void*/ {
    if (!this.onlyIf$Wcvm || this.onlyIf$Wcvm(targetCmp)) {
      this.manipulateItems(targetCmp);
    }
  }/*

  internal*/ function manipulateItems(component/*:Component*/, items/*:Array = undefined*/)/*:void*/ {var this$=this;
    var container/*:Container*/ =AS3.as( component,  Ext.container.Container);

    if (container
            && this.recursive$Wcvm
            &&AS3.is( container,  com.coremedia.ui.mixins.LazyItemsContainerMixin)
            && (AS3.as(container,  com.coremedia.ui.mixins.LazyItemsContainerMixin)).itemsAreLazy()) {
      container.on(com.coremedia.ui.mixins.LazyItemsContainerMixin.LAZY_ITEMS_ADDED_EVENT, function ()/*:void*/ {
        this$.manipulateItems(container, items);
      });
      return;
    }

    //for a button we continue our recursion to the menu of the button
    if (this.recursive$Wcvm &&AS3.is( component,  Ext.button.Button)) {
      component = AS3.getBindable((AS3.as(component,  Ext.button.Button)),"menu","DUMMY");
    }

    //If we perform a recursive operation we also follow toolbars (like richtext toolbars)
    if (this.recursive$Wcvm &&AS3.is( component,  Ext.panel.Panel)) {
      var panel/*:Panel*/ =AS3.as( component,  Ext.panel.Panel);
      panel.getTopToolbar() && this.manipulateItems(panel.getTopToolbar(), items);
      panel.getBottomToolbar() && this.manipulateItems(panel.getBottomToolbar(), items);
      panel.getFooterToolbar() && this.manipulateItems(panel.getFooterToolbar(), items);
    }

    if (AS3.is(component,  Ext.container.Container)) {
      container =AS3.as( component,  Ext.container.Container);
      this.doManipulateItems(container, items);
    }
  }/*

  //noinspection JSMethodCanBeStatic,JSUnusedLocalSymbols
  internal*/ function doManipulateItems(container/*:Container*/, items/*:Array*/)/*:void*/ {
    throw new AS3.Error("Please override doManipulateItems.");
  }/*

  internal*/ function getIndex()/*:uint*/ {
    return this.index$Wcvm;
  }/*

  internal*/ function isRecursive()/*:Boolean*/ {
    return this.recursive$Wcvm;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      index$Wcvm: 0,
      applyTo$Wcvm: null,
      onlyIf$Wcvm: null,
      recursive$Wcvm: false,
      cont$Wcvm: null,
      constructor: AbstractItemsPluginBase$,
      super$Wcvm: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      analysePositionList: analysePositionList,
      getTargetCmp$Wcvm: getTargetCmp,
      waitForTargetCmp$Wcvm: waitForTargetCmp,
      checkForTargetCmp$Wcvm: checkForTargetCmp,
      manipulateItemsConsideringLazyItems$Wcvm: manipulateItemsConsideringLazyItems,
      manipulateItemsConditionally$Wcvm: manipulateItemsConditionally,
      manipulateItems: manipulateItems,
      doManipulateItems: doManipulateItems,
      getIndex: getIndex,
      isRecursive: isRecursive,
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.ClassManager",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.panel.Panel",
        "Ext.plugin.Abstract"
      ],
      uses: ["com.coremedia.ui.mixins.LazyItemsContainerMixin"]
    };
});
