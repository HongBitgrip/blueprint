Ext.define("com.coremedia.ui.plugins.AdditionalStyleClassPluginBase", function(AdditionalStyleClassPluginBase) {/*package com.coremedia.ui.plugins {

import ext.Component;
import ext.plugin.AbstractPlugin;

[PublicApi]
public class AdditionalStyleClassPluginBase extends AbstractPlugin {
  private var cls:String;

  public*/ function AdditionalStyleClassPluginBase$(config/*:AdditionalStyleClassPlugin = null*/) {if(arguments.length<=0)config=null;
    this.cls$22Ba = AS3.getBindable(config,"cls");
    this.super$22Ba(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    component.addCls(this.cls$22Ba);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      cls$22Ba: null,
      constructor: AdditionalStyleClassPluginBase$,
      super$22Ba: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      requires: ["Ext.plugin.Abstract"]
    };
});
