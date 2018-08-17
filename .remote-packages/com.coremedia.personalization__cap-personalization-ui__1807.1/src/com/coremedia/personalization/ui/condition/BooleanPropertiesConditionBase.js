Ext.define("com.coremedia.personalization.ui.condition.BooleanPropertiesConditionBase", function(BooleanPropertiesConditionBase) {/* /*
 * Copyright CoreMedia AG, Hamburg, 2010. All rights reserved.
 * /
package com.coremedia.personalization.ui.condition {
import com.coremedia.personalization.ui.util.SelectionRuleHelper;
import com.coremedia.ui.components.StatefulComboBox;

import ext.data.ArrayStore;
import ext.form.field.DisplayField;

import mx.resources.ResourceManager;

/**
 * The BooleanPropertyCondition is used to test the boolean value of a property from a given set of properties. E.g.,
 * if there are boolean context properties 'sports' and 'politics', you can use this condition type to allow an editor
 * to test whether any of them is set to true.
 *
 * @xtype com.coremedia.personalization.ui.condition.BooleanPropertiesCondition
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class BooleanPropertiesConditionBase extends AbstractCondition {

  private static const*/var PROPERTY_EMPTY_TEXT$static/*:String*/ = "property";/*

  private static const*/var OPERATORS$static/*:Array*/;/* =*/function OPERATORS$static_(){OPERATORS$static=( [
    com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_EQUAL,
    com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_NOTEQUAL
  ]);};/*

  private static*/ var OPERATOR_DISPLAY_NAMES$static/*:Object*/;/* =*/function OPERATOR_DISPLAY_NAMES$static_(){OPERATOR_DISPLAY_NAMES$static=( {});};function static$0(){
  {
    OPERATOR_DISPLAY_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_EQUAL] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_booleanProperties_is');
    OPERATOR_DISPLAY_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_NOTEQUAL] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_booleanProperties_isnot');
  }}/*

  // the prefix of the properties rendered by this component
  private var propertyPrefix:String = "";

  private var valueSelector:StatefulComboBox;

  /**
   * Creates a new condition.
   *
   * @cfg {String} conditionName name to be used for this condition instance in the condition combox
   * @cfg {String} propertyPrefix prefix of context properties mapped to this condition instance. The characters
   *  following the prefix in a property name are assumed to represent the segment. This is similar to how keywords are
   *  handled in the KeywordCondition.
   * @cfg {Boolean} isDefault set to true if this condition is to be the default condition of the condition panel. The
   *   first condition in the list of the registered conditions with the default flag set is used as the default
   * @cfg {String} operatorEmptyText the text to be shown if no operator is selected. Default to <i>operator</i>. Optional.
   * @cfg {Object} operatorNames user-presentable names of the operators. See below. Optional.
   * @cfg {String} operator the operator to select initially. Optional.
   * @cfg {String} propertyEmptyText the text to be shown in the property field if it is empty. Defaults to <i>property</i>. Optional.
   * @cfg {Object} properties the enumeration of possible properties and their display names. See below
   * @cfg {String} suffixText the text to be shown after the value field. Defaults to <i>null</i>. Optional.
   *
   * The properties among which the user can select are defined using an array of arrays, where each contained array contains
   * two elements: the actual name of the property and the display name shown to the user.
   * E.g.: <code>[['sports', 'Sport News'], ['world', 'World News']]</code>.
   *
   * The names used for the available operators can be overridden by a dictionary supplied via
   * the <b>operatorNames</b> property. The available operators and their default names are:
   *
   * <ul>
   *   <li>eq: 'is'</li>
   *   <li>ne: 'is not'</li>
   * </ul>
   *
   * @param config the configuration to be applied to this component
   * /
  public*/ function BooleanPropertiesConditionBase$(config/*:BooleanPropertiesCondition = null*/) {if(arguments.length<=0)config=null;

    // create operator combo
    var operators/*:**/ = config['operators'];
    var operator/*:**/ = config['operator'];
    var opSelector/*:OperatorSelector*/ = this.initOpSelector(null, config['operatorNames'], config['operatorEmptyText'], operator,
            OPERATORS$static, OPERATOR_DISPLAY_NAMES$static);

    this.super$Xc7_(config);

    this.addOpSelector$Xc7_(opSelector, operators, operator);

    // store the prefix
    this.propertyPrefix$Xc7_ = config['propertyPrefix'];
    if (this.propertyPrefix$Xc7_ == null)
      throw new AS3.Error("config.propertyPrefix must not be null");

    if (this.propertyPrefix$Xc7_ != null && this.propertyPrefix$Xc7_.charAt(this.propertyPrefix$Xc7_.length - 1) == '.') {
      // remove the '.' at the end of the prefix
      this.propertyPrefix$Xc7_ = this.propertyPrefix$Xc7_.substring(0, this.propertyPrefix$Xc7_.length - 1);
    }    

    // create value combo
    this.initValueCombo$Xc7_(config['properties'], config['propertyEmptyText']);

    if (config['suffixText'] != null) {
      var displayFieldCfg/*:DisplayField*/ = AS3.cast(Ext.form.field.Display,{});
      displayFieldCfg.itemId = "suffixText";
      AS3.setBindable(displayFieldCfg,"value" , config['suffixText']);
      this.add(displayFieldCfg);
    }
  }/*

  private*/ function addOpSelector(opSelector/*:OperatorSelector*/, operators/*:**/, operator/*:**/)/*:void*/ {var this$=this;
    this.add(opSelector);/*

    const*/var internalOperators/*:Array*/ = operators != null ? com.coremedia.personalization.ui.condition.AbstractConditionBase.convertToInternalNames(operators) : OPERATORS$static;
    this.on("afterrender", function ()/*:void*/ {
      opSelector.addListener('modified', function ()/*:void*/ {
        this$.fireEvent('modified');
      });
      // set the initial operator
      opSelector.setValue(operator ? com.coremedia.personalization.ui.condition.AbstractConditionBase.internalFromExternalOperatorName(operator) : internalOperators[0]);
    });
  }/*

  private*/ function initValueCombo(values/*:Array*/, valueEmptyText/*:String*/)/*:void*/ {var this$=this;

    var valueSelectorConf/*:StatefulComboBox*/ = AS3.cast(com.coremedia.ui.components.StatefulComboBox,{});
    valueSelectorConf.flex = 30;
    valueSelectorConf.listConfig = {minWidth: 150};
    AS3.setBindable(valueSelectorConf,"emptyText" , valueEmptyText != null ? valueEmptyText : PROPERTY_EMPTY_TEXT$static);
    valueSelectorConf.forceSelection = false;
    valueSelectorConf.typeAhead = true;
    valueSelectorConf.triggerAction = "all";
    valueSelectorConf.queryMode = "local";
    valueSelectorConf.allowBlank = false;
    var arrayStoreCfg/*:ArrayStore*/ = AS3.cast(Ext.data.ArrayStore,{});
    arrayStoreCfg['id'] = 0;
    AS3.setBindable(arrayStoreCfg,"fields" , [
      'myId',
      'displayText'
    ]);
    AS3.setBindable(arrayStoreCfg,"data" , values);
    AS3.setBindable(valueSelectorConf,"store" , new Ext.data.ArrayStore(arrayStoreCfg));
    valueSelectorConf.valueField = "myId";
    AS3.setBindable(valueSelectorConf,"displayField" , "displayText");
    valueSelectorConf.itemId = "valueSelector";

    this.valueSelector$Xc7_ = new com.coremedia.ui.components.StatefulComboBox(valueSelectorConf);
    this.add(this.valueSelector$Xc7_);
    this.valueSelector$Xc7_.addListener('change', function()/*:void*/ { this$.fireEvent('modified'); });
    this.valueSelector$Xc7_.addListener('select', function()/*:void*/ { this$.fireEvent('modified'); });
    this.valueSelector$Xc7_.setValue(values[0][0]);
  }/*

  /* ------------------------------------------

   Condition interface

   ------------------------------------------ * /

  private*/ function stripPrefix(s/*:String*/)/*:String*/ {
    if (this.propertyPrefix$Xc7_ == null || s == null) {
      return s;
    }
    return s.indexOf(this.propertyPrefix$Xc7_) == 0 ? s.substring(this.propertyPrefix$Xc7_.length + 1) : s;
  }/*

  private*/ function prependPrefix(s/*:String*/)/*:String*/ {
    return this.propertyPrefix$Xc7_ + '.' + (s ? s : '');
  }/*

  public override*/ function getPropertyName()/*:String*/ {
    return this.prependPrefix$Xc7_(this.valueSelector$Xc7_.getValue());
  }/*

  public override*/ function setPropertyName(name/*:String*/)/*:void*/ {
    this.valueSelector$Xc7_.setValue(this.stripPrefix$Xc7_(name));
  }/*

  public override*/ function getPropertyValue()/*:String*/ {
    return 'true';
  }/*

  public override*/ function setPropertyValue(value/*:String*/)/*:void*/ {
    if (value !== com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_VALUE && value !== 'true') {
      throw AS3.cast(AS3.Error,"BooleanPropertiesCondition does not support 'false' as a value. Instead, use '!= true' in your conditions.");
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.AbstractCondition",
      propertyPrefix$Xc7_: "",
      valueSelector$Xc7_: null,
      constructor: BooleanPropertiesConditionBase$,
      super$Xc7_: function() {
        com.coremedia.personalization.ui.condition.AbstractCondition.prototype.constructor.apply(this, arguments);
      },
      addOpSelector$Xc7_: addOpSelector,
      initValueCombo$Xc7_: initValueCombo,
      stripPrefix$Xc7_: stripPrefix,
      prependPrefix$Xc7_: prependPrefix,
      getPropertyName: getPropertyName,
      setPropertyName: setPropertyName,
      getPropertyValue: getPropertyValue,
      setPropertyValue: setPropertyValue,
      statics: {
        OPERATORS: undefined,
        OPERATOR_DISPLAY_NAMES: undefined,
        __initStatics__: function() {
          OPERATORS$static_();
          OPERATOR_DISPLAY_NAMES$static_();
          static$0();
        }
      },
      requires: [
        "AS3.Error",
        "Ext.data.ArrayStore",
        "Ext.form.field.Display",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.condition.AbstractCondition",
        "com.coremedia.ui.components.StatefulComboBox",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.personalization.ui.condition.AbstractConditionBase",
        "com.coremedia.personalization.ui.util.SelectionRuleHelper"
      ]
    };
});
