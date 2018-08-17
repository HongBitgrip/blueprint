Ext.define("com.coremedia.ui.plugins.AddButtonsPluginBase", function(AddButtonsPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.util.ArrayUtils;

import ext.Component;
import ext.Plugin;
import ext.panel.Panel;

public class AddButtonsPluginBase implements Plugin {

  private var buttons:Array;

  /**
   * @param config the config object
   * /
  public*/ function AddButtonsPluginBase$(config/*:AddButtonsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.buttons$HCYs = com.coremedia.ui.util.ArrayUtils.asArray(AS3.getBindable(config,"buttons"));
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    var panel/*:Panel*/ =AS3.as( component,  Ext.panel.Panel);
    if (panel) {
      com.coremedia.ui.util.ArrayUtils.ensureArray(panel, "buttons");
      panel.buttons = panel.buttons.concat(this.buttons$HCYs);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      buttons$HCYs: null,
      constructor: AddButtonsPluginBase$,
      init: init,
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.ui.util.ArrayUtils",
        "ext.Plugin"
      ]
    };
});
