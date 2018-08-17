Ext.define("com.coremedia.ui.plugins.AddArrayItemsPluginBase", function(AddArrayItemsPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.util.ArrayUtils;
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.plugin.AbstractPlugin;

/**
 * Adds the provided array of items to the arrayProperty of the component.
 *
 * @see com.coremedia.ui.plugins.AddArrayItemsPlugin
 * /
[PublicApi]
public class AddArrayItemsPluginBase extends AbstractPlugin {

  private var items:Array;
  private var arrayProperty:String;

  /**
   * @param config The configuration options. See the config class for details.
   *
   * @see com.coremedia.ui.plugins.AddArrayItemsPlugin
   * /
  public*/ function AddArrayItemsPluginBase$(config/*:AddArrayItemsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.items$ZscQ = com.coremedia.ui.util.ArrayUtils.asArray(AS3.getBindable(config,"items"));
    this.arrayProperty$ZscQ = AS3.getBindable(config,"arrayProperty");
    if (!this.arrayProperty$ZscQ) {
      throw new AS3.Error("property 'arrayProperty' not set!");
    }
    this.super$ZscQ(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    com.coremedia.ui.util.ArrayUtils.ensureArray(component,this.arrayProperty$ZscQ);
    var oldItems/*:Array*/ = com.coremedia.ui.util.ObjectUtils.getProperty(component, this.arrayProperty$ZscQ);
    var newItems/*:Array*/ = oldItems.concat(this.items$ZscQ);
    com.coremedia.ui.util.ObjectUtils.setProperty(component,this.arrayProperty$ZscQ,newItems);
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(component, this.arrayProperty$ZscQ, oldItems, newItems);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      items$ZscQ: null,
      arrayProperty$ZscQ: null,
      constructor: AddArrayItemsPluginBase$,
      super$ZscQ: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      requires: [
        "AS3.Error",
        "Ext.plugin.Abstract",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil",
        "com.coremedia.ui.util.ArrayUtils",
        "com.coremedia.ui.util.ObjectUtils"
      ]
    };
});
