Ext.define("com.coremedia.cms.studio.imageeditor.VariantTabBase", function(VariantTabBase) {/*package com.coremedia.cms.studio.imageeditor {

import com.coremedia.ui.actions.DependencyTrackedActionBase;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.mixins.IValidationStateMixin;
import com.coremedia.ui.mixins.ValidationState;
import com.coremedia.ui.mixins.ValidationStateMixin;

import ext.Component;
import ext.StringUtil;
import ext.panel.Panel;
import ext.tab.Tab;
import ext.tab.TabPanel;

[ResourceBundle('com.coremedia.cms.studio.imageeditor.ImageEditor')]
[Event(name = "focus")] // NOSONAR - no type
public class VariantTabBase extends Panel implements IValidationStateMixin{

  [ExtConfig]
  public native function set tabConfig(tabConfig:Tab):void;

  public*/ function VariantTabBase$(config/*:VariantTab = null*/) {if(arguments.length<=0)config=null;
    this.super$7zN4(config);
    this.initValidationStateMixin();

    this.on("validationStateChanged",AS3.bind( this,"updateValidation$7zN4"));
    this.on("validationMessageChanged",AS3.bind( this,"updateValidation$7zN4"));
    this.updateValidation$7zN4();
  }/*

  override public*/ function focus(selectText/*:* = undefined*/, delay/*:* = undefined*/, callback/*:Function = null*/, scope/*:Function = null*/)/*:Component*/ {switch(Math.max(arguments.length,2)){case 2:callback=null;case 3:scope=null;}
    var tabPanel/*:TabPanel*/ =AS3.as( this.up(),  Ext.tab.Panel);
    tabPanel.setActiveTab(this);
    return Ext.panel.Panel.prototype.focus.call(this,selectText, delay);
  }/*

  internal*/ function getUndoText(variantKey/*:String*/)/*:String*/ {
    var variantDisplayName/*:String*/ = com.coremedia.cms.studio.imageeditor.VariantKeyUtil.getVariantDisplayName(variantKey);
    return Ext.String.format(this.resourceManager.getString('com.coremedia.cms.studio.imageeditor.ImageEditor', 'IEC_history_crops_changed_variant'), variantDisplayName);
  }/*

  internal*/ function createEnlargeStatusExpression(config/*:VariantTab*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:int*/ {
      var readOnly/*:Boolean*/ = AS3.getBindable(config,"readOnlyValueExpression").getValue();
      if (readOnly !== false) {
        return com.coremedia.ui.actions.DependencyTrackedActionBase.DISABLED;
      }
      return com.coremedia.ui.actions.DependencyTrackedActionBase.ENABLED;
    });
  }/*

  internal native function get tab():Tab;

  private*/ function updateValidation()/*:void*/ {
    var validationStateMixin/*:ValidationStateMixin*/ =AS3.as( this.tab,  com.coremedia.ui.mixins.ValidationStateMixin);

    if (validationStateMixin) {
      AS3.setBindable(validationStateMixin,"validationState" , AS3.getBindable(this,"validationState"));
      AS3.setBindable(validationStateMixin,"validationMessage" , AS3.getBindable(this,"validationMessage"));
    }
  }/*

  /** @inheritDoc * /
  public native function initValidationStateMixin():void;

  /** @private * /
  [Bindable]
  public native function set validationState(validationState:ValidationState):void;

  /** @private * /
  [Bindable]
  public native function set validationMessage(validationMessage:String):void;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationState():ValidationState;

  /** @inheritDoc * /
  [Bindable]
  public native function get validationMessage():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      mixins: ["com.coremedia.ui.mixins.ValidationStateMixin"],
      metadata: {"": [
        "Event",
        [
          "name",
          "focus"
        ]
      ]},
      constructor: VariantTabBase$,
      super$7zN4: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      focus: focus,
      getUndoText: getUndoText,
      createEnlargeStatusExpression: createEnlargeStatusExpression,
      updateValidation$7zN4: updateValidation,
      requires: [
        "Ext.String",
        "Ext.panel.Panel",
        "Ext.tab.Panel",
        "com.coremedia.cms.studio.imageeditor.ImageEditor_properties",
        "com.coremedia.ui.actions.DependencyTrackedActionBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.mixins.ValidationStateMixin"
      ],
      uses: ["com.coremedia.cms.studio.imageeditor.VariantKeyUtil"]
    };
});
