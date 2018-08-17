Ext.define("com.coremedia.cms.editor.sdk.premular.PropertyFieldPluginBase", function(PropertyFieldPluginBase) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ComponentUtil;

import ext.Component;
import ext.plugin.AbstractPlugin;

[PublicApi]
public class PropertyFieldPluginBase extends AbstractPlugin {

  private var propertyName:String;
  private var targetComponent:Component;
  private var tabPanel:DocumentTabPanel;

  public*/ function PropertyFieldPluginBase$(config/*:PropertyFieldPlugin = null*/) {if(arguments.length<=0)config=null;
    this.propertyName$vW97 = AS3.getBindable(config,"propertyName");
    this.super$vW97(config);
  }/*


  override public*/ function init(component/*:Component*/)/*:void*/ {
    this.targetComponent$vW97 = component;
    com.coremedia.ui.util.ComponentUtil.findAsParentOf(component, com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.xtype,AS3.bind( this,"addTargetComponentToPanel$vW97"));
  }/*

  internal*/ function getPropertyName()/*:String*/ {
    return this.propertyName$vW97;
  }/*

  private*/ function addTargetComponentToPanel(panel/*:DocumentTabPanel*/)/*:void*/ {
    this.tabPanel$vW97 = panel;
    if (panel) {
      this.tabPanel$vW97.registerPropertyField("properties." + this.propertyName$vW97, this.targetComponent$vW97);
      this.targetComponent$vW97.mon(this.targetComponent$vW97, "beforedestroy",AS3.bind( this,"unregisterPropertyField$vW97"));
    } else {
      com.coremedia.ui.logging.Logger.warn("could not register property field '" + "properties." + this.propertyName$vW97 + "' - no documentTabPanel found.");
    }
  }/*

  private*/ function unregisterPropertyField()/*:void*/ {
    this.tabPanel$vW97.unregisterPropertyField("properties." + this.propertyName$vW97, this.targetComponent$vW97);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.plugin.Abstract",
      metadata: {"": ["PublicApi"]},
      propertyName$vW97: null,
      targetComponent$vW97: null,
      tabPanel$vW97: null,
      constructor: PropertyFieldPluginBase$,
      super$vW97: function() {
        Ext.plugin.Abstract.prototype.constructor.apply(this, arguments);
      },
      init: init,
      getPropertyName: getPropertyName,
      addTargetComponentToPanel$vW97: addTargetComponentToPanel,
      unregisterPropertyField$vW97: unregisterPropertyField,
      requires: [
        "Ext.plugin.Abstract",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.ComponentUtil"
      ],
      uses: ["com.coremedia.cms.editor.sdk.premular.DocumentTabPanel"]
    };
});
