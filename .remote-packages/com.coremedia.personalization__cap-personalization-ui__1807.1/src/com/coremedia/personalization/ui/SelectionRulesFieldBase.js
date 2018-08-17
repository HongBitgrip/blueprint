Ext.define("com.coremedia.personalization.ui.SelectionRulesFieldBase", function(SelectionRulesFieldBase) {/*package com.coremedia.personalization.ui {

import com.coremedia.personalization.ui.editors.RulePanel;
import com.coremedia.personalization.ui.util.RuleXMLCoDec;
import com.coremedia.personalization.ui.util.SelectionRuleHelper;
import com.coremedia.ui.components.AdvancedFieldContainer;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;
import ext.Ext;
import ext.button.Button;

import joo.debug;

/**
 * Base class of the SelectionRulesField. Required to allow plugins to change the configuration of the field.
 * /
internal class SelectionRulesFieldBase extends AdvancedFieldContainer {

  private var conditionItems:Array;
  private var expandButton:Button;
  private var collapseButton:Button;

  protected static var EXPAND_ALL_BUTTON_ITEM_ID:String ="expandAllButton";
  protected static var COLLAPSE_ALL_BUTTON_ITEM_ID:String ="collapseAllButton";

  /**
   * @cfg {Array} conditionItems the conditionItems to be used by this field
   * @param config
   * /
  public*/ function SelectionRulesFieldBase$(config/*:SelectionRulesField = null*/) {if(arguments.length<=0)config=null;
    this.addConditionItems(AS3.getBindable(config,"conditionItems"));
    this.super$yGac(config);
  }/*

  public*/ function getConditionItems()/*:Array*/ {
    if (!this.conditionItems$yGac) {
      this.conditionItems$yGac = [];
    }
    return this.conditionItems$yGac;
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.ui.components.AdvancedFieldContainer.prototype.afterRender.call(this);
    this.collapseConditionPanels();
  }/*

  public*/ function addConditionItems(items/*:Array*/)/*:void*/ {
    if (items) {
      for (var i/*:int*/ = 0; i < items.length; i++) {
        this.getConditionItems().push(items[i]);
      }
    }
  }/*

  protected*/ function collapseConditionPanels()/*:void*/ {
    var panels/*:Array*/ = this.query(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.personalization.ui.editors.RulePanel.xtype).build());
    Ext.each(panels, function(p/*:RulePanel*/)/*:void*/{
      p.collapseConditionsPanel();
    },null);
    this.toggleButtons$yGac(true);
  }/*

  protected*/ function expandConditionPanels()/*:void*/ {
    var panels/*:Array*/ = this.query(com.coremedia.ui.util.createComponentSelector()._xtype(com.coremedia.personalization.ui.editors.RulePanel.xtype).build());
    Ext.each(panels, function(p/*:RulePanel*/)/*:void*/{
      p.expandConditionsPanel();
    },null);
    this.toggleButtons$yGac(false);
  }/*

  private*/ function initializedAndRendered(value/*:String*/)/*:void*/ {
    this['setValue'] = function()/*:void*/{if(joo.debug) AS3.trace('[INFO] setValue is not supported after initialization (Blob is only observed to hide "loadingInfo" panel)', SelectionRulesFieldBase);};
    this['getValue'] = function()/*:void*/{if(joo.debug) AS3.trace('[INFO] getValue is not supported after initialization (Blob is only observed to hide "loadingInfo" panel)', SelectionRulesFieldBase);};
    var array/*:Array*/ = this.query(com.coremedia.ui.util.createComponentSelector().itemId('loadingInfo').build());
    if(array.length == 1) {
      array[0].hide();
    } else if(joo.debug) {
      AS3.trace("[WARN]: unexpected number of 'loadingInfo' components found", array.length);
    }/*

    // decide whether to show the dropbox as soon as the rules property is available
    const*/var rules/*:String*/ = com.coremedia.personalization.ui.util.RuleXMLCoDec.rulesFromXML(value);
    var array2/*:Array*/ = this.query(com.coremedia.ui.util.createComponentSelector().itemId('ruleListDropBox').build());
    if(array2.length == 1) {
      var comp/*:Component*/ = array2[0];
      comp.setVisible(!rules || com.coremedia.personalization.ui.util.SelectionRuleHelper.isValidRuleList(rules));
    } else if(joo.debug) {
      AS3.trace("[WARN]: unexpected number of 'ruleListDropBox' components found", array2.length);
    }
  }/*

  // just to make 'bindBlobPropertyPlugin' happy
  public*/ function getValue()/*:String*/ {/*
    const*/var componentId/*:String*/ = this.getId();
    if(joo.debug) {
      AS3.trace(componentId, "doesn't support #getValue");
    }
    // do not return null, because then #setValue(null) would never be called
    return componentId;
  }/*

  // 'bindBlobPropertyPlugin' sets the blobs value here
  public*/ function setValue(value/*:String*/)/*:void*/ {var this$=this;
    if(this.rendered){
      this.initializedAndRendered$yGac(value);
    } else {/*
      const*/var handler/*:Function*/ = function()/*:void*/ {
        this$.removeListener('afterrender', handler);
        this$.initializedAndRendered$yGac(value);
      };
      this.addListener('afterrender',handler);
    }
  }/*

  private*/ function toggleButtons(expandVisible/*:Boolean*/)/*:void*/ {
    this.getExpandAllButton$yGac().setVisible(expandVisible);
    this.getCollapseAllButton$yGac().setVisible(!expandVisible);
  }/*

  private*/ function getExpandAllButton()/*:Button*/ {
    if(!this.expandButton$yGac) {
      this.expandButton$yGac =AS3.as( this.queryById(SelectionRulesFieldBase.EXPAND_ALL_BUTTON_ITEM_ID),  Ext.button.Button);
    }
    return this.expandButton$yGac;
  }/*

  private*/ function getCollapseAllButton()/*:Button*/ {
    if(!this.collapseButton$yGac) {
      this.collapseButton$yGac =AS3.as( this.queryById(SelectionRulesFieldBase.COLLAPSE_ALL_BUTTON_ITEM_ID),  Ext.button.Button);
    }
    return this.collapseButton$yGac;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.AdvancedFieldContainer",
      conditionItems$yGac: null,
      expandButton$yGac: null,
      collapseButton$yGac: null,
      constructor: SelectionRulesFieldBase$,
      super$yGac: function() {
        com.coremedia.ui.components.AdvancedFieldContainer.prototype.constructor.apply(this, arguments);
      },
      getConditionItems: getConditionItems,
      afterRender: afterRender,
      addConditionItems: addConditionItems,
      collapseConditionPanels: collapseConditionPanels,
      expandConditionPanels: expandConditionPanels,
      initializedAndRendered$yGac: initializedAndRendered,
      getValue: getValue,
      setValue: setValue,
      toggleButtons$yGac: toggleButtons,
      getExpandAllButton$yGac: getExpandAllButton,
      getCollapseAllButton$yGac: getCollapseAllButton,
      statics: {
        EXPAND_ALL_BUTTON_ITEM_ID: "expandAllButton",
        COLLAPSE_ALL_BUTTON_ITEM_ID: "collapseAllButton"
      },
      requires: [
        "AS3.trace",
        "Ext",
        "Ext.button.Button",
        "com.coremedia.ui.components.AdvancedFieldContainer",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.personalization.ui.editors.RulePanel",
        "com.coremedia.personalization.ui.util.RuleXMLCoDec",
        "com.coremedia.personalization.ui.util.SelectionRuleHelper"
      ]
    };
});
