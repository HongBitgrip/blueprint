Ext.define("com.coremedia.ui.plugins.AddItemsPluginBase", function(AddItemsPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.util.ArrayUtils;

import ext.Component;
import ext.ComponentManager;
import ext.Ext;
import ext.container.Container;

/**
 * Adds the provided list of items to the items of the component.
 *
 * @see com.coremedia.ui.plugins.AddItemsPlugin
 * /
[PublicApi]
public class AddItemsPluginBase extends AbstractItemsPlugin {

  private var containers:Array;

  private var addAfterItemIds:Object =*/function addAfterItemIds_(){this.addAfterItemIds$pAPr=( {});}/*;
  private var addAfterComponentIds:Object =*/function addAfterComponentIds_(){this.addAfterComponentIds$pAPr=( {});}/*;
  private var addAfterXclasses:Object =*/function addAfterXclasses_(){this.addAfterXclasses$pAPr=( {});}/*;
  private var addBeforeItemIds:Object =*/function addBeforeItemIds_(){this.addBeforeItemIds$pAPr=( {});}/*;
  private var addBeforeComponentIds:Object =*/function addBeforeComponentIds_(){this.addBeforeComponentIds$pAPr=( {});}/*;
  private var addBeforeXclasses:Object =*/function addBeforeXclasses_(){this.addBeforeXclasses$pAPr=( {});}/*;

  /**
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.ui.plugins.AddItemsPlugin
   * /
  public*/ function AddItemsPluginBase$(config/*:AddItemsPlugin = null*/) {if(arguments.length<=0)config=null;
    AS3.setBindable(this,"items" , com.coremedia.ui.util.ArrayUtils.asArray(AS3.getBindable(config,"items")));
    this.containers$pAPr = com.coremedia.ui.util.ArrayUtils.asArray(AS3.getBindable(config,"containers"));
    this.super$pAPr(config);addAfterItemIds_.call(this);addAfterComponentIds_.call(this);addAfterXclasses_.call(this);addBeforeItemIds_.call(this);addBeforeComponentIds_.call(this);addBeforeXclasses_.call(this);;
    this.analysePositionList(AS3.getBindable(config,"after"), this.addAfterItemIds$pAPr, this.addAfterComponentIds$pAPr, this.addAfterXclasses$pAPr);
    this.analysePositionList(AS3.getBindable(config,"before"), this.addBeforeItemIds$pAPr, this.addBeforeComponentIds$pAPr, this.addBeforeXclasses$pAPr);
  }/*

  override internal*/ function doManipulateItems(container/*:Container*/, items/*:Array*/)/*:void*/ {var this$=this;
    var index/*:uint*/ = this.findInsertionPoint$pAPr(container);
    var addItemToContainer/*:Function*/ = function(config/*:Component*/)/*:void*/ {
      index = this$.addItem$pAPr(container, index, config);
    };
    AS3.getBindable(this,"items").forEach(addItemToContainer);
    this.containers$pAPr.forEach(function(itemContainerConfig/*:Object*/)/*:void*/ {/*
      // TODO: unfortunately, we have to instantiate the component, because ComponentManager does not tell it's class:
      const*/var itemContainer/*:Component*/ = Ext.ComponentManager.create(itemContainerConfig, 'component');
      com.coremedia.ui.util.ArrayUtils.asArray(itemContainer.initialConfig['items']).forEach(addItemToContainer);
    });
    if (this.isRecursive() && container.itemCollection) {
      container.itemCollection.each(function(item/*:**/, itemIndex/*:Number*/)/*:void*/ {
        this$.manipulateItems(item);
      });
    }
  }/*

  private*/ function findInsertionPoint(container/*:Container*/)/*:uint*/ {var this$=this;
    if(!container.itemCollection) {
      return this.getIndex();
    }
    var result/*:uint*/ = this.getIndex();
    var addAfter/*:uint*/ = undefined;
    var addBefore/*:uint*/ = undefined;
    if (container.itemCollection) {
      container.itemCollection.each(function(item/*:**/, index/*:Number*/)/*:Boolean*/ {
        var component/*:Component*/ =AS3.as( item,  Ext.Component);
        if (component) {
          var itemId/*:String*/ = component.getItemId();
          var id/*:String*/ = component.getId();
          var xclass/*:String*/ = Ext.getClassName(AS3.as(component,  Object));
          if (this$.addAfterComponentIds$pAPr[id] === true || this$.addAfterItemIds$pAPr[itemId] === true || this$.addAfterXclasses$pAPr[xclass] === true) {
            if (addAfter === undefined || addAfter < index) {
              addAfter = index;
            }
          }
          if (this$.addBeforeComponentIds$pAPr[id] === true || this$.addBeforeItemIds$pAPr[itemId] === true || this$.addBeforeXclasses$pAPr[xclass] === true) {
            if (addBefore === undefined || addBefore > index) {
              addBefore = index;
            }
          }
        }
        return true;
      });
    }
    if (addBefore !== undefined && (result === undefined || result > addBefore)) {
      result = addBefore;
    }
    if (addAfter !== undefined && (result === undefined || result <= addAfter)) {
      result = addAfter + 1;
    }
    return result;
  }/*

  private*/ function addItem(container/*:Container*/, index/*:uint*/, origConfig/*:Component*/)/*:uint*/ {
    // If the given config is actually a component, do not clone it; cloning a
    // component can lead to strange aliasing problems.
    // Otherwise, make a copy before the container adds its defaults to our template.
    var config/*:Component*/ = cloneConfig$static(origConfig);
    if (index !== undefined) {
      container.insert(index++, config);
    } else if (!this.isRecursive()) {
      container.add(config);
    }
    return index;
  }/*

  /* Make a clone of the given value recursively
     if the given value is an array or a config object
     To identify the given value as a config object we exclude known Ext object classes like Component, Plugin, Action
     and Column. In addition the given value must have xtype or ptype.
   * /
  private static*/ function cloneConfig$static(value/*:**/)/*:**/ {
    if (Ext.isArray(value)) {
      return (AS3.as(value,  Array)).map(cloneConfig$static);
    } else if (Ext.isDate(value)) {
      return value;
    } else if (Ext.isObject(value) && isConfig$static(value)) {
      var cloned/*:Object*/ = {};
      for (var prop/*:String*/ in value) {
        cloned[prop] = cloneConfig$static(value[prop]);
      }
      return cloned;
    } else {
      return value;
    }
  }/*

  private static*/ function isConfig$static(value/*:Object*/)/*:Boolean*/ {
    return !value.isInstance;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AbstractItemsPlugin",
      metadata: {"": ["PublicApi"]},
      containers$pAPr: null,
      constructor: AddItemsPluginBase$,
      super$pAPr: function() {
        com.coremedia.ui.plugins.AbstractItemsPlugin.prototype.constructor.apply(this, arguments);
      },
      doManipulateItems: doManipulateItems,
      findInsertionPoint$pAPr: findInsertionPoint,
      addItem$pAPr: addItem,
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.ComponentManager",
        "com.coremedia.ui.plugins.AbstractItemsPlugin",
        "com.coremedia.ui.util.ArrayUtils"
      ]
    };
});
