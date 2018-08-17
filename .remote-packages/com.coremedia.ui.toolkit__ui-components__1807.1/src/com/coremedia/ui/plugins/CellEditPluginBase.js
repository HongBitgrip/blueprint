Ext.define("com.coremedia.ui.plugins.CellEditPluginBase", function(CellEditPluginBase) {/*package com.coremedia.ui.plugins {

import ext.Component;
import ext.grid.plugin.CellEditingPlugin;
import ext.panel.TablePanel;

import js.KeyEvent;

public class CellEditPluginBase extends CellEditingPlugin {

  [ExtConfig]
  public var defaultEventAction:String = null;

  public*/ function CellEditPluginBase$(config/*:CellEditPluginBase = null*/) {if(arguments.length<=0)config=null;
    this.super$2z4Y(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    Ext.grid.plugin.CellEditing.prototype.init.call(this,component);

    var tablePanel/*:TablePanel*/ =AS3.as( component,  Ext.panel.Table);


    var keyNavs/*:Array*/ = tablePanel.getView()['navigationModel'].keyNav;
    for/* each*/(var $2=0;$2</* in*/ keyNavs.length;++$2) {var keyConfig/*:Object*/ =keyNavs[$2];
      for/* each*/(var $1 in keyConfig.map.bindings) {var binding/*:Object*/ =keyConfig.map.bindings[$1];
        if (binding.key === KeyEvent.DOM_VK_ESCAPE) {
          binding.defaultEventAction = this.defaultEventAction;
        }
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.grid.plugin.CellEditing",
      defaultEventAction: null,
      constructor: CellEditPluginBase$,
      super$2z4Y: function() {
        Ext.grid.plugin.CellEditing.prototype.constructor.apply(this, arguments);
      },
      init: init,
      requires: [
        "Ext.grid.plugin.CellEditing",
        "Ext.panel.Table"
      ]
    };
});
