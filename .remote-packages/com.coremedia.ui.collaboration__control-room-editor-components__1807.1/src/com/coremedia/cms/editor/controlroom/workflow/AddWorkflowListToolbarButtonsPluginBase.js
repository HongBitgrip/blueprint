Ext.define("com.coremedia.cms.editor.controlroom.workflow.AddWorkflowListToolbarButtonsPluginBase", function(AddWorkflowListToolbarButtonsPluginBase) {/*package com.coremedia.cms.editor.controlroom.workflow {
import ext.Component;
import ext.container.Container;
import ext.panel.Panel;
import ext.plugin.AbstractPlugin;

public class AddWorkflowListToolbarButtonsPluginBase extends AbstractPlugin {

  private var processCategory:String;

  [ArrayElementType("ext.button.Button")]
  private var buttons:Array;

  public*/ function AddWorkflowListToolbarButtonsPluginBase$(config/*:AddWorkflowListToolbarButtonsPlugin = null*/) {if(arguments.length<=0)config=null;
    this.processCategory$sm6L = AS3.getBindable(config,"processCategory");
    this.buttons$sm6L = AS3.getBindable(config,"buttons");
    this.super$sm6L(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    var panel/*:Panel*/ =AS3.as( component,  Ext.panel.Panel);
    if (panel) {
      var par/*:Container*/ = panel.findParentBy(function (parent/*:Container*/)/*:Boolean*/ {
        return parent["processCategory"];
      });
      if (par) {
        var panelProcessCategory/*:String*/ = par["processCategory"];
        if (panelProcessCategory && panelProcessCategory === this.processCategory$sm6L) {
          panel.getTopToolbar().add(this.buttons$sm6L);
        }
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      processCategory$sm6L: null,
      buttons$sm6L: null,
      constructor: AddWorkflowListToolbarButtonsPluginBase$,
      super$sm6L: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      requires: [
        "Ext.panel.Panel",
        "Ext.plugin.Abstract"
      ]
    };
});
