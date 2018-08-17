Ext.define("com.coremedia.ui.plugins.BlockEnterPlugin", function(BlockEnterPlugin) {/*package com.coremedia.ui.plugins {

import ext.Component;
import ext.Plugin;
import ext.event.Event;

public class BlockEnterPlugin implements Plugin {
  private var component:Component;
  
  public*/ function BlockEnterPlugin$(config/*:BlockEnterPlugin = null*/) {if(arguments.length<=0)config=null;
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    this.component$JHQm = component;
    component.on("afterrender",AS3.bind( this,"onRender$JHQm"));
  }/*

  private*/ function onRender()/*:void*/ {
    this.component$JHQm.getEl().on("keypress", keyPressed$static);
  }/*

  private static*/ function keyPressed$static(e/*: Event*/)/*:void*/ {
    if (e.getKey() === Ext.event.Event.ENTER) {
      e.stopEvent();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      component$JHQm: null,
      constructor: BlockEnterPlugin$,
      init: init,
      onRender$JHQm: onRender,
      requires: [
        "Ext.event.Event",
        "ext.Plugin"
      ]
    };
});
