Ext.define("com.coremedia.ui.plugins.AddCustomItemsPluginBase", function(AddCustomItemsPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.util.ArrayUtils;

import ext.Component;
import ext.plugin.AbstractPlugin;

/**
 * @see com.coremedia.ui.plugins.AddCustomItemsPlugin
 * /
[PublicApi]
public class AddCustomItemsPluginBase extends AbstractPlugin {

  private var applyTo:Function;
  private var items:Array;
  private var property:String;

  public*/ function AddCustomItemsPluginBase$(config/*:AddCustomItemsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.applyTo$use4 = AS3.getBindable(config,"applyTo");
    this.items$use4 = com.coremedia.ui.util.ArrayUtils.asArray(AS3.getBindable(config,"items"));
    this.property$use4 = AS3.getBindable(config,"property");
    this.super$use4(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    var targetCmp/*:**/ = this.applyTo$use4 ? this.applyTo$use4(component) : component;
    this.addItems$use4(targetCmp);
  }/*

  private*/ function addItems(component/*:Component*/)/*:void*/ {
    var componentProperty/*:Array*/ =AS3.as( component[this.property$use4],  Array);
    if (componentProperty) {
      component[this.property$use4] = component[this.property$use4].concat(this.items$use4);
    } else {
      component[this.property$use4] = [].concat(this.items$use4);
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      applyTo$use4: null,
      items$use4: null,
      property$use4: null,
      constructor: AddCustomItemsPluginBase$,
      super$use4: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      addItems$use4: addItems,
      requires: [
        "Ext.plugin.Abstract",
        "com.coremedia.ui.util.ArrayUtils"
      ]
    };
});
