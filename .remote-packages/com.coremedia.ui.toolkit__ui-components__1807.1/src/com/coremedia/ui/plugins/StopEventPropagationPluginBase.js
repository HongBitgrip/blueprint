Ext.define("com.coremedia.ui.plugins.StopEventPropagationPluginBase", function(StopEventPropagationPluginBase) {/*package com.coremedia.ui.plugins {

import ext.Component;
import ext.Plugin;

import js.KeyEvent;

public class StopEventPropagationPluginBase implements Plugin {

  public*/ function init(client/*:Component*/)/*:void*/ {
    var newEntry/*:Object*/ = {};
    newEntry["CmdOrCtrl+C"] = newEntry["CmdOrCtrl+V"] = newEntry["CmdOrCtrl+X"] = newEntry["DELETE"] = {
      handler: stopEventPropagation$static
    };
    // does not overwrite, but complement old value thanks to magic Ext JS setter semantics!
    client["setKeyMap"](newEntry); // TODO: Ext-AS
  }/*

  private static*/ function stopEventPropagation$static(e/*:KeyEvent*/)/*:void*/ {
    e.stopPropagation();
  }/*

}*/function StopEventPropagationPluginBase$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      init: init,
      constructor: StopEventPropagationPluginBase$,
      requires: ["ext.Plugin"]
    };
});
