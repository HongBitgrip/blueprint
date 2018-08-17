Ext.define("com.coremedia.ui.plugins.ExpandPanelOnHoverPluginBase", function(ExpandPanelOnHoverPluginBase) {/*package com.coremedia.ui.plugins {

import ext.Component;
import ext.panel.Panel;
import ext.plugin.AbstractPlugin;

[PublicApi]
public class ExpandPanelOnHoverPluginBase extends AbstractPlugin {

  [ArrayElementType("String")]
  private var activateOnHoverDDGroups:Array;
  private var activateOnHoverDelay:int;

  private var panel:Panel;
  private var dropTarget:ExpandPanelOnHoverDropTarget;

  /**
   * @param config the configuration object
   * /
  public*/ function ExpandPanelOnHoverPluginBase$(config/*:ExpandPanelOnHoverPlugin = null*/) {if(arguments.length<=0)config=null;
    this.activateOnHoverDDGroups$Ipy9 = AS3.getBindable(config,"activateOnHoverDDGroups") || [];
    this.activateOnHoverDelay$Ipy9 = AS3.getBindable(config,"activateOnHoverDelay") || 0;
    this.super$Ipy9(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {var this$=this;
    this.panel$Ipy9 =AS3.as( component,  Ext.panel.Panel);
    if (this.panel$Ipy9 && this.activateOnHoverDDGroups$Ipy9.length > 0) {
      this.panel$Ipy9.on("afterrender", function ()/*:void*/ {
        this$.initDropTarget$Ipy9();
      });
      this.panel$Ipy9.on("removed", function ()/*:void*/ {
        this$.removeDropTarget$Ipy9();
      });
    }
  }/*

  private*/ function initDropTarget()/*:void*/ {
    if (this.panel$Ipy9.header) {
      var config/*:ExpandPanelOnHoverDropTarget*/ = AS3.cast(com.coremedia.ui.plugins.ExpandPanelOnHoverDropTarget,{});
      AS3.setBindable(config,"activateOnHoverDDGroups" , this.activateOnHoverDDGroups$Ipy9);
      AS3.setBindable(config,"activateOnHoverDelay" , this.activateOnHoverDelay$Ipy9);
      this.dropTarget$Ipy9 = new com.coremedia.ui.plugins.ExpandPanelOnHoverDropTarget(this.panel$Ipy9, config);
    }
  }/*

  private*/ function removeDropTarget()/*:void*/ {
    if (this.panel$Ipy9.header) {
      this.dropTarget$Ipy9 && this.dropTarget$Ipy9.unreg();
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      activateOnHoverDDGroups$Ipy9: null,
      activateOnHoverDelay$Ipy9: 0,
      panel$Ipy9: null,
      dropTarget$Ipy9: null,
      constructor: ExpandPanelOnHoverPluginBase$,
      super$Ipy9: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      initDropTarget$Ipy9: initDropTarget,
      removeDropTarget$Ipy9: removeDropTarget,
      requires: [
        "Ext.panel.Panel",
        "Ext.plugin.Abstract"
      ],
      uses: ["com.coremedia.ui.plugins.ExpandPanelOnHoverDropTarget"]
    };
});
