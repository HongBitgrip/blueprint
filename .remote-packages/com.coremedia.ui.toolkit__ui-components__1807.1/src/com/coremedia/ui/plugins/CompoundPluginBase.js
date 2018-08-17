Ext.define("com.coremedia.ui.plugins.CompoundPluginBase", function(CompoundPluginBase) {/*package com.coremedia.ui.plugins {
import com.coremedia.ui.util.ArrayUtils;

import ext.Component;
import ext.plugin.AbstractPlugin;

[PublicApi]
public class CompoundPluginBase extends AbstractPlugin {
  private var plugins:Array;

  public*/ function CompoundPluginBase$(config/*:CompoundPlugin = null*/) {if(arguments.length<=0)config=null;
    this.plugins$yPM1 = com.coremedia.ui.util.ArrayUtils.asArray(AS3.getBindable(config,"plugins"));
    this.super$yPM1(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    for/* each*/ (var $1=0;$1</* in*/ this.plugins$yPM1.length;++$1) {var pluginConfig/*:Object*/ =this.plugins$yPM1[$1];
      component["initPlugin"](pluginConfig);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      plugins$yPM1: null,
      constructor: CompoundPluginBase$,
      super$yPM1: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      requires: [
        "Ext.plugin.Abstract",
        "com.coremedia.ui.util.ArrayUtils"
      ]
    };
});
