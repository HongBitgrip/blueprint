Ext.define("com.coremedia.personalization.ui.editors.ConditionConjunctionPanelBase", function(ConditionConjunctionPanelBase) {/*package com.coremedia.personalization.ui.editors {
import com.coremedia.personalization.ui.util.SelectionRuleHelper;

import ext.button.Button;
import ext.form.field.DisplayField;
import ext.panel.Panel;

/**
 * Represents a conjunction of conditions in the selection-rule editor.
 *
 * @xtype ConditionConjunctionPanel
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
internal class ConditionConjunctionPanelBase extends Panel {

  // the ConditionPanels currently shown in the panel
  private const activeConditionPanels:Array =*/function activeConditionPanels_(){this.activeConditionPanels$l85u=( []);}/*;
  // the currently shown 'and' labels between the ConditionPanels. 'and' label
  // n is between ConditionPanels n and n+1.
  private const activeAnds:Array =*/function activeAnds_(){this.activeAnds$l85u=( []);}/*;
  // the button used to add a new ConditionPanel
  private var addAndButton:Button;

  // configuration of the ConditionFrames shown in this panel. see ConditionFrame for details
  private var conditionItems:Array;

  /**
   * Creates a new ConditionConjunctionPanel.
   *
   * @param conditionItems UI items to be used for rendering conditions. See ConditionFrame for details.
   * @param layout any additional layout properties (optional)
   * /
  public*/ function ConditionConjunctionPanelBase$(config/*:ConditionConjunctionPanel = null*/) {if(arguments.length<=0)config=null;
    this.conditionItems$l85u = AS3.getBindable(config,"conditionItems");
    this.super$l85u(config);activeConditionPanels_.call(this);activeAnds_.call(this);;

    this.addAndButton$l85u =AS3.as( this.getComponent("andBtn"),  Ext.button.Button);
  }/*

  internal*/ function addHandler()/*:void*/ {
    this.addCondition();
    this.fireEvent('modified');
  }/*
  public override*/ function setDisabled(value/*:Boolean*/)/*:void*/ {
    Ext.panel.Panel.prototype.setDisabled.call(this,value);
    if (this.addAndButton$l85u)
      this.addAndButton$l85u.setDisabled(value);
    for (var i/*:int*/ = 0; i < this.activeConditionPanels$l85u.length; ++i)
      this.activeConditionPanels$l85u[i].setDisabled(value);
  }/*

  /**
   * Adds a new condition to this panel.
   *
   * @param property name of the property this condition relates to. May be <code>null</code>.
   * @param operator the operator used in this condition. May be <code>null</code>.
   * @param value the value against which the property is tested. May be <code>null<code>.
   * /
  public*/ function addCondition(property/*:String = null*/, operator/*:String = null*/, value/*:String = null*/)/*:void*/ {var this$=this;switch(arguments.length){case 0:property=null;case 1:operator=null;case 2:value=null;}
    var config/*:ConditionFrame*/ = AS3.cast(com.coremedia.personalization.ui.editors.ConditionFrame,{});
    AS3.setBindable(config,"conditionItems" , this.conditionItems$l85u);/*
    const*/var conditionFrame/*:ConditionFrame*/ = new com.coremedia.personalization.ui.editors.ConditionFrame(config);
    conditionFrame.addListener('deleteCondition',AS3.bind( this,"deleteCondition$l85u"), this);
    this.activeConditionPanels$l85u.push(conditionFrame);
    if (this.activeConditionPanels$l85u.length > 1) this.addAnd$l85u();
    this.add(conditionFrame);
    conditionFrame.setPropertyName(property);
    conditionFrame.setOperator(operator);
    conditionFrame.setPropertyValue(value);
    conditionFrame.addListener('modified', function()/*:void*/ { this$.fireEvent('modified'); });
  }/*

  private*/ function deleteCondition(condPanel/*:Condition*/)/*:void*/ {/*
    const*/var index/*:int*/ = this.activeConditionPanels$l85u.indexOf(condPanel);/*
    const*/var deletedCond/*:Array*/ = this.activeConditionPanels$l85u.splice(index, 1);

    this.remove(deletedCond[0], true);
    this.deleteAnd$l85u(index - 1); // also remove to preceding 'and'   
    this.fireEvent('conditionRemoved', this);
  }/*

  private*/ function addAnd()/*:void*/ {
    var displayFieldCfg/*:DisplayField*/ = AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayFieldCfg,"value" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_conditions_conjunction_and'));
    this.activeAnds$l85u.push(this.add(displayFieldCfg));
  }/*

  private*/ function deleteAnd(index/*:int*/)/*:void*/ {
    if (this.activeAnds$l85u.length > 0) {
      if (index < 0) index = 0;/* // if the first Condition is being removed, remove the following 'and'
      const*/var andText/*:**/ = this.activeAnds$l85u.splice(index, 1)[0];
      this.remove(andText, true);
    }
  }/*

  /**
   * Returns the currently set conditions in the form
   * <code>[keyword1, op1, value1, (CON_AND|CON_OR), keyword2, op2, value2, ...]</code>.
   *
   * @return the currently set conditions
   * /
  public*/ function getConditions()/*:Array*/ {/*
    const*/var conditions/*:Array*/ = [];
    for (var i/*:int*/ = 0; i < this.activeConditionPanels$l85u.length; ++i) {/*
      const*/var condPanel/*:Condition*/ = this.activeConditionPanels$l85u[i];
      if (i > 0) conditions.push(com.coremedia.personalization.ui.util.SelectionRuleHelper.CON_AND);
      conditions.push(condPanel.getPropertyName(), condPanel.getOperator(), condPanel.getPropertyValue());
    }
    return conditions;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      addAndButton$l85u: null,
      conditionItems$l85u: null,
      constructor: ConditionConjunctionPanelBase$,
      super$l85u: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      addHandler: addHandler,
      setDisabled: setDisabled,
      addCondition: addCondition,
      deleteCondition$l85u: deleteCondition,
      addAnd$l85u: addAnd,
      deleteAnd$l85u: deleteAnd,
      getConditions: getConditions,
      requires: [
        "Ext.button.Button",
        "Ext.form.field.Display",
        "Ext.panel.Panel",
        "com.coremedia.personalization.ui.Personalization_properties"
      ],
      uses: [
        "com.coremedia.personalization.ui.editors.ConditionFrame",
        "com.coremedia.personalization.ui.util.SelectionRuleHelper"
      ]
    };
});
