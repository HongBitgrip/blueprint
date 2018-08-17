Ext.define("com.coremedia.personalization.ui.editors.ConditionsPanelBase", function(ConditionsPanelBase) {/*package com.coremedia.personalization.ui.editors {
import com.coremedia.personalization.ui.util.SelectionRuleHelper;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.skins.ButtonSkin;

import ext.Component;
import ext.button.Button;
import ext.container.Container;
import ext.event.Event;
import ext.form.field.DisplayField;
import ext.form.field.TextArea;
import ext.panel.Panel;

/**
 * A panel that allows the user to edit a list of conditions. Contains a list of
 * ConditionConjunctionPanels.
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')] class ConditionsPanelBase extends Panel {

  private var bindTo:ValueExpression;
  private var conditionsPropertyExpression:ValueExpression;

  // the previously saved conditions expression; used to prevent unnecessary rebuilding of this component
  private var lastSavedString:String;

  // this container is separated into a "content" and a "button" area
  private var contentArea:Container;
  private var buttonArea:Container;

  // configuration used for all contained ConditionConjunctionPanels. see ConditionConjunctionPanel for details
  private var conditionItems:Array;

  // array of currently shown ConditionConjunctionPanels
  private var conjunctionPanels:Array =*/function conjunctionPanels_(){this.conjunctionPanels$GG_R=( []);}/*;
  // array of currently shown 'OR' separators between conjunction panels
  private var activeOrs:Array =*/function activeOrs_(){this.activeOrs$GG_R=( []);}/*;
  // used to hold the component shown if there aren't any conditions
  private var noConditionContainer:Container;
  // text field used when the conditions cannot be parsed
  private var plainTextEditingField:TextArea;

  // button that allows the user to add a new conjunction
  private var addConjunctionButton:Button;

  // button that allows the user to delete the associated rule
  private var deleteRuleButton:Button;
  private var deleteHandler:Function;
  
  /**
   * Creates a new ConditionsPanel.
   *
   * @cfg {Object} bindTo the property path leading to the bean containing the conditions to be displayed
   * @cfg {String} propertyName name of the property containing the conditions to be displayed
   * @cfg {String} readOnlyPropertyName name of the property to be used to determine whether the panel should be
   *  rendered in read-write or read-only mode. Default is 'readOnly'.
   * @cfg {Array} conditionItems the condition items to be made available via this editor
   * @cfg {Object} deleteHandler the handler to be called when the 'Delete Rule' button is pressed. If this property is
   *  null, the button will not be shown
   * /
  public*/ function ConditionsPanelBase$(config/*:ConditionsPanel = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$GG_R(config);conjunctionPanels_.call(this);activeOrs_.call(this);;

    this.conditionItems$GG_R =AS3.as( config['conditionItems'],  Array);
    if (this.conditionItems$GG_R == null) throw new AS3.Error('config.conditionItems must not be null');

    this.bindTo$GG_R =AS3.as( config['bindTo'],  com.coremedia.ui.data.ValueExpression);
    if (this.bindTo$GG_R == null) throw new AS3.Error('config.bindTo must not be null');

    if (config['propertyName'] == null) throw new AS3.Error('config.propertyName must not be null');
    this.conditionsPropertyExpression$GG_R = this.bindTo$GG_R.extendBy(config['propertyName']);
    this.conditionsPropertyExpression$GG_R.addChangeListener(AS3.bind(this,"onConditionsChanged$GG_R"));

    // introduce the overall layout components
    var contentAreaCfg/*:Container*/ = AS3.cast(Ext.container.Container,{});
    AS3.setBindable(contentAreaCfg,"layout" , 'anchor');
    this.contentArea$GG_R = this.add(contentAreaCfg);
    var buttonAreaCfg/*:Container*/ = AS3.cast(Ext.container.Container,{});
    AS3.setBindable(buttonAreaCfg,"layout" , 'border');
    AS3.setBindable(buttonAreaCfg,"height" , 30);
    this.buttonArea$GG_R = this.add(buttonAreaCfg);

    var addConjunctionButtonCfg/*:Button*/ = AS3.cast(Ext.button.Button,{});
    addConjunctionButtonCfg.ui = com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin();
    AS3.setBindable(addConjunctionButtonCfg,"region" , 'west');
    AS3.setBindable(addConjunctionButtonCfg,"iconCls" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_conditions_or_icon'));
    AS3.setBindable(addConjunctionButtonCfg,"text" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_conditions_or'));
    AS3.setBindable(addConjunctionButtonCfg,"handler" , function (b/*:Button*/, e/*:Event*/)/*:void*/ {
      this$.addConjunctionPanel$GG_R();
      this$.addCondition$GG_R();
      this$.saveConditions$GG_R();
    });
    this.addConjunctionButton$GG_R = this.buttonArea$GG_R.add(addConjunctionButtonCfg);

    var spacerCfg/*:Component*/ = AS3.cast(Ext.Component,{});
    AS3.setBindable(spacerCfg,"region" , 'center');
    AS3.setBindable(spacerCfg,"height" , 30);
    this.buttonArea$GG_R.add(spacerCfg);

    // add the 'Delete Rule' button only if a corresponding handler was supplied
    this.deleteHandler$GG_R = config['deleteHandler'];
    if (this.deleteHandler$GG_R != null) {
      var deleteRuleButtonCfg/*:Button*/ = AS3.cast(Ext.button.Button,{});
      AS3.setBindable(deleteRuleButtonCfg,"region" , 'east');
      AS3.setBindable(deleteRuleButtonCfg,"text" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_rulePanel_deleteRule'));
      AS3.setBindable(deleteRuleButtonCfg,"handler" , this.deleteHandler$GG_R);
      this.deleteRuleButton$GG_R = this.buttonArea$GG_R.add(deleteRuleButtonCfg);
    }/*

    const*/var conditions/*:String*/ = this.conditionsPropertyExpression$GG_R.getValue();
    this.initContent$GG_R(conditions);/*

    // add a listener to get informed about changes in the readOnly flag
    const*/var readOnlyProp/*:String*/ = config['readOnlyPropertyName'] ? config['readOnlyPropertyName'] : 'readOnly';
  }/*

  // called when the conditions property of the associated ruleBean changes state
  private*/ function onConditionsChanged(expr/*:ValueExpression*/)/*:void*/ {
    var parentContainer/*:Container*/ = this.up();
    //fixed #PERSO-387
    if (expr.getValue() != this.lastSavedString$GG_R || expr.getValue() === null) {
      this.initContent$GG_R(expr.getValue());    
    }
  }/*

  // creates and initializes the content of the panel according to the rule
  // to be represented
  private*/ function initContent(conditions/*:String*/)/*:void*/ {
    //fixed #PERSO-386
    var conditionsValue/*:String*/ = conditions != null ? conditions : "";
    // removes everything from the contentArea, because we're going to recreate it
    this.contentArea$GG_R.removeAll(true);
    this.conjunctionPanels$GG_R = [];
    this.activeOrs$GG_R = [];
    this.noConditionContainer$GG_R = null;
    this.plainTextEditingField$GG_R = null;

    if (com.coremedia.personalization.ui.util.SelectionRuleHelper.isValidConditionsExpr(conditionsValue)) {/*
      // build and initialize sub-components to reflect the conditions used in the rule
      const*/var condTokens/*:Array*/ = com.coremedia.personalization.ui.util.SelectionRuleHelper.conditionsFromConditionsExpr(conditionsValue);
      var tokenIndex/*:int*/ = 0;

      // make button explicitly visible (may be invis. due to prior load where
      // conditions weren't already there)
      if (condTokens.length > 0)
        this.buttonArea$GG_R.setVisible(true);

      // create conjunction panels for each condition
      while (tokenIndex < condTokens.length) {
        switch (condTokens[tokenIndex]) {
          case com.coremedia.personalization.ui.util.SelectionRuleHelper.CON_AND:
            // skip the AND connector - we just keep adding conditions to the
            // currently active conjunction panel
            tokenIndex++;
            break;
          case com.coremedia.personalization.ui.util.SelectionRuleHelper.CON_OR:
            // we've encounter an OR connector, so add a new conjuction panel and activate it so
            // we'll add any following conditions to this new panel
            this.addConjunctionPanel$GG_R();
            tokenIndex++;
            break;
          default:
            this.addCondition$GG_R(condTokens[tokenIndex++], condTokens[tokenIndex++], condTokens[tokenIndex++]);
        }
      }
      if (this.conjunctionPanels$GG_R.length <= 0)
        this.addNoConditionContainer$GG_R();
    } else {
      this.showInTextEditingField$GG_R(conditionsValue);
    }
  }/*

  // shows the supplied rules in a newly created text editing field
  private*/ function showInTextEditingField(conditionsExpr/*:String*/)/*:void*/ {var this$=this;
    var displayFieldCfg/*:DisplayField*/ = AS3.cast(Ext.form.field.Display,{});
    displayFieldCfg.hideLabel = 'true';
    AS3.setBindable(displayFieldCfg,"value" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_ruleParsingError'));
    this.contentArea$GG_R.add(displayFieldCfg);
    var plainTextEditingFieldCfg/*:TextArea*/ = AS3.cast(Ext.form.field.TextArea,{});
    plainTextEditingFieldCfg.enableKeyEvents = true;
    AS3.setBindable(plainTextEditingFieldCfg,"value" , conditionsExpr);
    this.plainTextEditingField$GG_R = this.contentArea$GG_R.add(plainTextEditingFieldCfg);
    this.plainTextEditingField$GG_R.addListener('keyup', function()/*:void*/ { this$.saveConditions$GG_R(); });
    this.buttonArea$GG_R.setVisible(false);
  }/*

  // adds a new condition to the currently active conjunction panel
  private*/ function addCondition(key/*:String = null*/, op/*:String = null*/, val/*:String = null*/)/*:void*/ {switch(arguments.length){case 0:key=null;case 1:op=null;case 2:val=null;}
    if (this.noConditionContainer$GG_R != null) {
      this.deleteNoConditionPanel$GG_R();
    }
    if (this.conjunctionPanels$GG_R.length <= 0) {
      this.addConjunctionPanel$GG_R();
    }
    var conjunctionPanel/*:ConditionConjunctionPanel*/ = this.conjunctionPanels$GG_R[this.conjunctionPanels$GG_R.length - 1];
    conjunctionPanel.addCondition(key, op, val);
  }/*

  // adds a new conjunction panel to the list of active conjunction panels and
  // the conditions panel
  private*/ function addConjunctionPanel()/*:void*/ {var this$=this;
    var conditionConjunctionPanelCfg/*:ConditionConjunctionPanel*/ = AS3.cast(com.coremedia.personalization.ui.editors.ConditionConjunctionPanel,{});
    AS3.setBindable(conditionConjunctionPanelCfg,"conditionItems" , this.conditionItems$GG_R);/*
    const*/var panel/*:ConditionConjunctionPanel*/ = new com.coremedia.personalization.ui.editors.ConditionConjunctionPanel(conditionConjunctionPanelCfg);
    panel.addListener('conditionRemoved', function(v/*:**/)/*:void*/ {
      if (panel.getConditions().length <= 0) {
        this$.deleteConjunctionPanel$GG_R(v);
      }
      this$.saveConditions$GG_R();
    });
    panel.addListener('modified', function(v/*:**/)/*:void*/ {
      this$.saveConditions$GG_R();
    });
    this.conjunctionPanels$GG_R.push(panel);
    if (this.conjunctionPanels$GG_R.length > 1)
      this.addOr$GG_R();
    this.contentArea$GG_R.add(panel);
  }/*

  // remove the supplied conjunction panel from the active conjunction panels. Displays the no-condition
  // panel if there aren't any conditions left after the deletion.
  private*/ function deleteConjunctionPanel(panel/*:ConditionConjunctionPanel*/)/*:void*/ {/*
    const*/var index/*:int*/ = this.conjunctionPanels$GG_R.indexOf(panel);/*
    const*/var deletedPanel/*:Array*/ = this.conjunctionPanels$GG_R.splice(index, 1);

    this.contentArea$GG_R.remove(deletedPanel[0], true);
    this.deleteOr$GG_R(index - 1); // also remove to preceding 'or'
    if (this.conjunctionPanels$GG_R.length <= 0) {
      this.addNoConditionContainer$GG_R();
    }
  }/*

  // adds a new 'or' separator to the conditions panel
  private*/ function addOr()/*:void*/ {
    var orTextCfg/*:DisplayField*/ = AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(orTextCfg,"fieldLabel" , this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_conditions_conjunction_or'));
    orTextCfg.labelWidth = 20;
    orTextCfg.labelAlign = "right";
    orTextCfg.labelSeparator = "";
    this.activeOrs$GG_R.push(this.contentArea$GG_R.add(orTextCfg));
  }/*

  // removes the 'or' separator of the supplied index from the conditions panel
  private*/ function deleteOr(index/*:int*/)/*:void*/ {
    if (this.activeOrs$GG_R.length > 0) {
      if (index < 0) index = 0;/* // if the first ConditionConjunctionPanel is being removed, remove the following 'or'
      const*/var orText/*:**/ = this.activeOrs$GG_R.splice(index, 1)[0];
      this.contentArea$GG_R.remove(orText, true);
    }
  }/*

  // display an info text if there aren't any conditions defined in the rule
  private*/ function addNoConditionContainer()/*:void*/ {var this$=this;
    var noConditionContainerCfg/*:NoConditionContainer*/ = AS3.cast(com.coremedia.personalization.ui.editors.NoConditionContainer,{});
    AS3.setBindable(noConditionContainerCfg,"bindTo" , this.bindTo$GG_R);
    AS3.setBindable(noConditionContainerCfg,"addHandler" , function ()/*:void*/ {
      this$.addCondition$GG_R();
      this$.saveConditions$GG_R();
    });
    AS3.setBindable(noConditionContainerCfg,"deleteHandler" , this.deleteHandler$GG_R);
    this.noConditionContainer$GG_R = this.contentArea$GG_R.add(noConditionContainerCfg);
    this.buttonArea$GG_R.setVisible(false);
  }/*

  // removes the info panel shown if there isn't any condition in the rule
  private*/ function deleteNoConditionPanel()/*:void*/ {
    if (this.noConditionContainer$GG_R != null) {
      this.contentArea$GG_R.remove(this.noConditionContainer$GG_R, true);
      this.noConditionContainer$GG_R = null;
    }
    this.buttonArea$GG_R.setVisible(true);
  }/*

  private*/ function saveConditions()/*:void*/ {
    if (this.plainTextEditingField$GG_R) {
      this.lastSavedString$GG_R = this.plainTextEditingField$GG_R.getValue();
    }
    else if (this.conjunctionPanels$GG_R.length > 0) {
      var conditions/*:Array*/ = [];
      for (var i/*:int*/ = 0; i < this.conjunctionPanels$GG_R.length; ++i) {
        if (i > 0) conditions.push(com.coremedia.personalization.ui.util.SelectionRuleHelper.CON_OR);/*
        const*/var conjPanel/*:ConditionConjunctionPanel*/ = this.conjunctionPanels$GG_R[i];
        conditions = conditions.concat(conjPanel.getConditions());
      }
      this.lastSavedString$GG_R = com.coremedia.personalization.ui.util.SelectionRuleHelper.createConditionsExpr(conditions);
    } else {
      // no conditions
      this.lastSavedString$GG_R = "";
    }
    this.conditionsPropertyExpression$GG_R.setValue(this.lastSavedString$GG_R);
    this.fireEvent('modified');
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      bindTo$GG_R: null,
      conditionsPropertyExpression$GG_R: null,
      lastSavedString$GG_R: null,
      contentArea$GG_R: null,
      buttonArea$GG_R: null,
      conditionItems$GG_R: null,
      noConditionContainer$GG_R: null,
      plainTextEditingField$GG_R: null,
      addConjunctionButton$GG_R: null,
      deleteRuleButton$GG_R: null,
      deleteHandler$GG_R: null,
      constructor: ConditionsPanelBase$,
      super$GG_R: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      onConditionsChanged$GG_R: onConditionsChanged,
      initContent$GG_R: initContent,
      showInTextEditingField$GG_R: showInTextEditingField,
      addCondition$GG_R: addCondition,
      addConjunctionPanel$GG_R: addConjunctionPanel,
      deleteConjunctionPanel$GG_R: deleteConjunctionPanel,
      addOr$GG_R: addOr,
      deleteOr$GG_R: deleteOr,
      addNoConditionContainer$GG_R: addNoConditionContainer,
      deleteNoConditionPanel$GG_R: deleteNoConditionPanel,
      saveConditions$GG_R: saveConditions,
      requires: [
        "AS3.Error",
        "Ext.Component",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.form.field.TextArea",
        "Ext.panel.Panel",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.ui.data.ValueExpression",
        "com.coremedia.ui.skins.ButtonSkin"
      ],
      uses: [
        "com.coremedia.personalization.ui.editors.ConditionConjunctionPanel",
        "com.coremedia.personalization.ui.editors.NoConditionContainer",
        "com.coremedia.personalization.ui.util.SelectionRuleHelper"
      ]
    };
});
