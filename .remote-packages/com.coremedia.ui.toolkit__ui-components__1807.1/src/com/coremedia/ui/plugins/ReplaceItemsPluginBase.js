Ext.define("com.coremedia.ui.plugins.ReplaceItemsPluginBase", function(ReplaceItemsPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ArrayUtils;

import ext.Component;
import ext.Ext;
import ext.JSON;
import ext.container.Container;

/**
 * Replace existing component of the targeted container with components from the provided list of items.
 *
 * @see com.coremedia.ui.plugins.ReplaceItemsPlugin
 * /
[PublicApi]
public class ReplaceItemsPluginBase extends AbstractItemsPlugin {

  private var autoDestroy:Boolean;

  /**
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.ui.plugins.AddItemsPlugin
   * /
  public*/ function ReplaceItemsPluginBase$(config/*:ReplaceItemsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.autoDestroy$0Ei2 = AS3.getBindable(config,"autoDestroy");
    AS3.setBindable(this,"items" , com.coremedia.ui.util.ArrayUtils.asArray(AS3.getBindable(config,"items")));
    this.super$0Ei2(config);
  }/*

  override internal*/ function doManipulateItems(container/*:Container*/, items/*:Array*/)/*:void*/ {var this$=this;
    var replaceItem/*:Function*/ = function(config/*:Component*/)/*:void*/ {
      this$.replaceItemInContainer$0Ei2(container, config);
    };
    AS3.getBindable(this,"items").forEach(replaceItem);
  }/*

  private*/ function replaceItemInContainer(container/*:Container*/, origConfig/*:Component*/)/*:void*/ {
    // If the given config is actually a component, do not clone it; cloning a
    // component can lead to strange aliasing problems.
    // Otherwise, make a copy before the container adds its defaults to our template.
    var config/*:Component*/ = origConfig.isInstance ? origConfig : AS3.cast(Ext.Component,Ext.apply({}, origConfig));
    var index/*:Number*/ = -1;
    if (AS3.getBindable(config,"id","DUMMY")) {
      index = container.itemCollection.findIndexBy(function(component/*:Component*/)/*:Boolean*/ {
        return component.getId() === AS3.getBindable(config,"id","DUMMY");
      });
      if (index < 0) {
        com.coremedia.ui.logging.Logger.error("component with id " + AS3.getBindable(config,"id","DUMMY") +
                " could not be replaced by replaceItemsPlugin of container " + container.getId() +
                " (a " + Ext.getClassName(container) + ")" +
                ", because no such component exists");
        return;
      }
    } else if (AS3.getBindable(config,"itemId","DUMMY")) {
      index = container.itemCollection.findIndexBy(function(component/*:Component*/)/*:Boolean*/ {
        return component.getItemId() === AS3.getBindable(config,"itemId","DUMMY");
      });
      if (index < 0) {
        com.coremedia.ui.logging.Logger.error("component with itemId " + AS3.getBindable(config,"itemId","DUMMY") +
                " could not be replaced by replaceItemsPlugin of container " + container.getId() +
                " (a " + Ext.getClassName(container) + ")" +
                ", because no such component exists");
        return;
      }
    } else {
      com.coremedia.ui.logging.Logger.error("neither id nor itemId was given for replaceItemsPlugin of container " + container.getId() +
              " (a " + Ext.getClassName(container) + ")" +
              " in config " + (Ext.JSON.encode(AS3.is(config,  Ext.Component) ? (AS3.as(config,  Ext.Component)).initialConfig : config)));
      return;
    }
    // Remove the old item, destroying it as appropriate.
    var oldItem/*:Component*/ =AS3.as( container.itemCollection.getAt(index),  Ext.Component);
    if (oldItem) {
      container.remove(oldItem, this.autoDestroy$0Ei2);
    }
    // Insert the new item. We do not trust Ext to reinsert the item at the correct position in all cases.
    container.insert(index, config);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AbstractItemsPlugin",
      metadata: {"": ["PublicApi"]},
      autoDestroy$0Ei2: false,
      constructor: ReplaceItemsPluginBase$,
      super$0Ei2: function() {
        com.coremedia.ui.plugins.AbstractItemsPlugin.prototype.constructor.apply(this, arguments);
      },
      doManipulateItems: doManipulateItems,
      replaceItemInContainer$0Ei2: replaceItemInContainer,
      requires: [
        "Ext",
        "Ext.Component",
        "Ext.JSON",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.plugins.AbstractItemsPlugin",
        "com.coremedia.ui.util.ArrayUtils"
      ]
    };
});
