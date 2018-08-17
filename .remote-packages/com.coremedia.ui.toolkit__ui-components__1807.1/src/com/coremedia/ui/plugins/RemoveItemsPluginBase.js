Ext.define("com.coremedia.ui.plugins.RemoveItemsPluginBase", function(RemoveItemsPluginBase) {/*package com.coremedia.ui.plugins {

import ext.ClassManager;
import ext.Component;
import ext.Ext;
import ext.container.Container;

/**
 * Removes all items of the container that match any item from the provided list of items.
 *
 * @see com.coremedia.ui.plugins.RemoveItemsPlugin
 * /
[PublicApi]
public class RemoveItemsPluginBase extends AbstractItemsPlugin {
  private var componentIds:Object =*/function componentIds_(){this.componentIds$mHbE=( {});}/*;
  private var itemIds:Object =*/function itemIds_(){this.itemIds$mHbE=( {});}/*;
  private var xclasses:Object =*/function xclasses_(){this.xclasses$mHbE=( {});}/*;

  private var autoDestroy:Boolean;

  private var indexHandled:Boolean = false;

  /**
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.ui.plugins.RemoveItemsPlugin
   * /
  public*/ function RemoveItemsPluginBase$(config/*:RemoveItemsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$mHbE(config);componentIds_.call(this);itemIds_.call(this);xclasses_.call(this);;
    this.autoDestroy$mHbE = AS3.getBindable(config,"autoDestroy");
    this.analysePositionList(AS3.getBindable(config,"items"), this.itemIds$mHbE, this.componentIds$mHbE, this.xclasses$mHbE);

    // Only try early removal if no onlyIf and applyTo configs are given.
    // Both only work for fully instantiated containers.
    if (!AS3.getBindable(config,"onlyIf") && !AS3.getBindable(config,"applyTo")) {
      this.removeItemsEarly$mHbE(AS3.as(this.getCmp(),  Ext.container.Container));
    }
  }/*

  /**
   * Removes items early, while they are still just config items, not yet created.
   * /
  private*/ function removeItemsEarly(container/*:Container*/)/*:void*/ {var this$=this;
    if (!container) {
      // plugin's container could not be determined early
      return;
    }

    var oldItems/*:Array*/ =AS3.as( container.itemCollection,  Array);
    if (!oldItems) {
      // If the items are not an array anymore but already a MixedCollection
      // -> no need to proceed here as everything is already created.
      return;
    }

    var newItems/*:Array*/ = [];
    oldItems.forEach(function (item/*:Component*/, index/*:int*/)/*:void*/ {
      var handleIndex/*:Boolean*/ = !this$.isRecursive() && index === this$.getIndex();
      if (handleIndex) {
        this$.indexHandled$mHbE = true;
      }
      if (!handleIndex && !this$.itemIds$mHbE[AS3.getBindable(item,"itemId","DUMMY")] && !this$.componentIds$mHbE[AS3.getBindable(item,"id","DUMMY")] &&!this$.xclasses$mHbE[Ext.getClassName(Ext.ClassManager['getByConfig'](item))]) {
        newItems.push(item);
      }
    });
    container['items'] = newItems;
  }/*

  override internal*/ function doManipulateItems(container/*:Container*/, items/*:Array*/)/*:void*/ {var this$=this;
    if (!items) {
      items = [];
    }

    //noinspection JSMismatchedCollectionQueryUpdateInspection
    if(container.itemCollection) {
      container.itemCollection.each(function(item/*:**/, itemIndex/*:Number*/)/*:Boolean*/ {
        var component/*:Component*/ =AS3.as( item,  Ext.Component);
        if (component) {
          var itemId/*:String*/ = component.getItemId();
          var id/*:String*/ = component.getId();
          var xclass/*:String*/ = Ext.getClassName(AS3.as(component,  Object));
          if ((!this$.indexHandled$mHbE && itemIndex === this$.getIndex() && !this$.isRecursive()) || this$.componentIds$mHbE[id] === true || this$.itemIds$mHbE[itemId] === true || this$.xclasses$mHbE[xclass] === true) {
            items.push(component);
          }
          if (this$.isRecursive()) {
            this$.manipulateItems(component, items);
          }
        }
        return true;
      });
    }
    items.forEach(function(removableComponent/*:Component*/)/*:void*/ {
        container.remove(removableComponent, this$.autoDestroy$mHbE);
      });
    }/*
  }
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AbstractItemsPlugin",
      metadata: {"": ["PublicApi"]},
      autoDestroy$mHbE: false,
      indexHandled$mHbE: false,
      constructor: RemoveItemsPluginBase$,
      super$mHbE: function() {
        com.coremedia.ui.plugins.AbstractItemsPlugin.prototype.constructor.apply(this, arguments);
      },
      removeItemsEarly$mHbE: removeItemsEarly,
      doManipulateItems: doManipulateItems,
      requires: [
        "Ext",
        "Ext.ClassManager",
        "Ext.Component",
        "Ext.container.Container",
        "com.coremedia.ui.plugins.AbstractItemsPlugin"
      ]
    };
});
