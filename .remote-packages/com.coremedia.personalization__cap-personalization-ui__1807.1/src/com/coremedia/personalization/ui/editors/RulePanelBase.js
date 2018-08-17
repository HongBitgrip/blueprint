Ext.define("com.coremedia.personalization.ui.editors.RulePanelBase", function(RulePanelBase) {/*package com.coremedia.personalization.ui.editors {
import com.coremedia.ui.data.ValueExpression;

import ext.Component;
import ext.button.Button;
import ext.container.Container;
import ext.panel.Panel;
import ext.util.Observable;

import joo.debug;

/**
 * Contains the UI logic required for the correct behavior of a RulePanel.
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
[ResourceBundle('com.coremedia.icons.CoreIcons')] class RulePanelBase extends Container {

  // the rule panel UI components
  private var dragbar:Component;
  private var controls:Container;
  private var collapseButton:Button;
  private var deleteButton:Button;
  private var conditionsPanel:Panel;
  private var bindTo:ValueExpression;

  /**
   * /
  public*/ function RulePanelBase$(config/*:Panel = null*/) {if(arguments.length<=0)config=null;
    this.super$Xd9N(config);

    this.bindTo$Xd9N = config['bindTo'];

    this.dragbar$Xd9N = this.getComponent("dragbar");
    this.controls$Xd9N =AS3.as( this.getComponent('controls'),  Ext.container.Container);
    this.collapseButton$Xd9N =AS3.as( this.controls$Xd9N.getComponent("collapseButton"),  Ext.button.Button);
    this.deleteButton$Xd9N =AS3.as( this.controls$Xd9N.getComponent("deleteButton"),  Ext.button.Button);
    this.conditionsPanel$Xd9N =AS3.as( this.getComponent('conditionsPanel'),  Ext.panel.Panel);

    this.collapseButton$Xd9N.setHandler(AS3.bind(this,"onCollapseButtonPressed$Xd9N"), this);
    this.collapsedStatus$Xd9N();
  }/*

   private*/ function onCollapseButtonPressed()/*:void*/ {
    this.toggleConditionsPanelCollapsed();
  }/*

  public*/ function collapseConditionsPanel()/*:void*/ {
    if (!AS3.getBindable(this.conditionsPanel$Xd9N,"collapsed","DUMMY")) {
      // switch to collapsed only if currently expanded
      this.toggleConditionsPanelCollapsed();
    }
  }/*

  public*/ function expandConditionsPanel()/*:void*/ {
    if (AS3.getBindable(this.conditionsPanel$Xd9N,"collapsed","DUMMY")) {
      // switch to expanded only if currently collapsed
      this.toggleConditionsPanelCollapsed();
    }
  }/*

  /**
   * toggle the conditions panel between collapsed and expanded.
   * can be e.g. used to programmatically change the collapsing in addition to button clicks.
   * /
  public*/ function toggleConditionsPanelCollapsed()/*:void*/ {
    this.conditionsPanel$Xd9N.toggleCollapse();
    this.collapseButton$Xd9N.setText(AS3.getBindable(this.conditionsPanel$Xd9N,"collapsed","DUMMY") ? this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_rulePanel_expand') :
            this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_rulePanel_collapse'));

    var rulesAreReadOnly/*:Boolean*/ = this.bindTo$Xd9N.extendBy('readOnly').getValue();
    this.deleteButton$Xd9N.setVisible(AS3.getBindable(this.conditionsPanel$Xd9N,"collapsed","DUMMY") && !rulesAreReadOnly);

    this.collapsedStatus$Xd9N();

    // render nested containers again if the user toggles the collapse button and the scrollbar appears
    var computedWidth/*:int*/ = this.up().getWidth();
    this.setWidth(computedWidth);
  }/*

  /**
   *
   * checks if the panels are collapsed or expanded
   * and switches the css icon classes depending on their status
   *
   * /
  private*/ function collapsedStatus()/*:void*/ {
    if (AS3.getBindable(this.conditionsPanel$Xd9N,"collapsed","DUMMY")) {
      this.conditionsPanel$Xd9N.up().removeCls("rule-panel-expanded");
      this.collapseButton$Xd9N.setIconCls(this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'arrow_right'));
      this.collapseButton$Xd9N.setText(this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_rulePanel_expand'));
    } else {
      this.conditionsPanel$Xd9N.up().addCls("rule-panel-expanded");
      this.collapseButton$Xd9N.setIconCls(this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'arrow_down'));
      this.collapseButton$Xd9N.setText(this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_rulePanel_collapse'));
    }
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    var ruleBean/*:Observable*/ =AS3.as( this['_ruleBean'],  Ext.util.Observable);
    if(ruleBean) {
      if(joo.debug) {
        AS3.trace("purging listeners for ruleBean of rulePanel", this.getId());
      }
      ruleBean.clearListeners();
    }
    Ext.container.Container.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      dragbar$Xd9N: null,
      controls$Xd9N: null,
      collapseButton$Xd9N: null,
      deleteButton$Xd9N: null,
      conditionsPanel$Xd9N: null,
      bindTo$Xd9N: null,
      constructor: RulePanelBase$,
      super$Xd9N: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      onCollapseButtonPressed$Xd9N: onCollapseButtonPressed,
      collapseConditionsPanel: collapseConditionsPanel,
      expandConditionsPanel: expandConditionsPanel,
      toggleConditionsPanelCollapsed: toggleConditionsPanelCollapsed,
      collapsedStatus$Xd9N: collapsedStatus,
      beforeDestroy: beforeDestroy,
      requires: [
        "AS3.trace",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.panel.Panel",
        "Ext.util.Observable",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.personalization.ui.Personalization_properties"
      ]
    };
});
