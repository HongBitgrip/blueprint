Ext.define("com.coremedia.ui.plugins.AddLazyItemsPluginBase", function(AddLazyItemsPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.ui.util.ArrayUtils;

import ext.Component;
import ext.plugin.AbstractPlugin;

/**
 * @see com.coremedia.ui.plugins.AddLazyItemsPlugin
 * /
[PublicApi]
public class AddLazyItemsPluginBase extends AbstractPlugin {

  private var applyTo:Function;
  private var items:Array;

  public*/ function AddLazyItemsPluginBase$(config/*:AddLazyItemsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.applyTo$J9FX = AS3.getBindable(config,"applyTo");
    this.items$J9FX = com.coremedia.ui.util.ArrayUtils.asArray(AS3.getBindable(config,"items"));
    this.super$J9FX(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    var targetCmp/*:**/ = this.applyTo$J9FX ? this.applyTo$J9FX(component) : component;
    this.addItems$J9FX(targetCmp);
  }/*

  private*/ function addItems(component/*:Component*/)/*:void*/ {
    var container/*:SwitchingContainer*/ =AS3.as( component,  com.coremedia.ui.components.SwitchingContainer);
    if (container) {
      container.setLazyItems(container.getLazyItems().concat(this.items$J9FX));
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      applyTo$J9FX: null,
      items$J9FX: null,
      constructor: AddLazyItemsPluginBase$,
      super$J9FX: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      addItems$J9FX: addItems,
      requires: [
        "Ext.plugin.Abstract",
        "com.coremedia.ui.util.ArrayUtils"
      ],
      uses: ["com.coremedia.ui.components.SwitchingContainer"]
    };
});
