Ext.define("com.coremedia.personalization.ui.condition.FloatConditionBase", function(FloatConditionBase) {/* /*
 * Copyright CoreMedia AG, Hamburg, 2010. All rights reserved.
 * /
package com.coremedia.personalization.ui.condition {
import com.coremedia.personalization.ui.util.SelectionRuleHelper;
import com.coremedia.ui.components.StatefulTextField;

import ext.form.field.DisplayField;
import ext.form.field.VTypes;

import mx.resources.ResourceManager;

/**
 * The FloatCondition is used to define conditions using floating point values.
 *
 * @xtype com.coremedia.personalization.ui.condition.FloatCondition
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class FloatConditionBase extends AbstractCondition {*/function static$0(){
{
  // introduce new vtypes for values
  Ext.form.field.VTypes['floatConditionValueVal'] = /^\d+(\.\d+)?$/;
  Ext.form.field.VTypes['floatConditionValueMask'] = /[0-9.]/;
  Ext.form.field.VTypes['floatConditionValueText'] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_valueText');
  Ext.form.field.VTypes['floatConditionValue'] = function(v/*:**/)/*:**/ {
    return Ext.form.field.VTypes['floatConditionValueVal'].test(v);
  };
}}/*

  private static const*/var OPERATORS$static/*:Array*/;/* =*/function OPERATORS$static_(){OPERATORS$static=( [
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN,
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN_OR_EQUAL,
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_EQUAL,
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN,
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN_OR_EQUAL
  ]);};/*

  private var valueField:StatefulTextField;

  /**
   * Creates a new FloatCondition.
   *
   * @cfg {String} conditionName name to be used for this condition instance in the condition combox
   * @cfg {String} propertyName name of context property mapped to this condition instance
   * @cfg {Boolean} isDefault set to true if this condition is to be the default condition of the condition panel. The
   *   first condition in the list of the registered conditions with the default flag set is used as the default
   * @cfg {String} operatorEmptyText the text to be shown if no operator is selected. Default to <i>operator</i>
   * @cfg {Object} operatorNames user-presentable names of the operators. See below.
   * @cfg {Array} operators the array of operators to be made available for selection. See below.
   * @cfg {String} operator the operator to select initially
   * @cfg {String} valueEmptyText the text to be shown in the value field if it is empty. Defaults to <i>value</i>
   * @cfg {String} valueText the text to place into the value field
   * @cfg {String} valueVType the validation type of the value field. See below
   * @cfg {String} suffixText the text to be shown after the value field. Defaults to <i>null</i>
   *
   * The default validation type used for the value field is: <code>/^\d+(\.\d+)?$/</code>
   *
   * The default <b>operators</b> offered by this component are:
   *
   * <ul>
   *   <li>'lt'</li> less than
   *   <li>'le'</li> less than or equals
   *   <li>'eq'</li> equals
   *   <li>'ge'</li> greater than or equals
   *   <li>'gt'</li> greater than
   * </ul>
   *
   * The names used for the available operators can be overridden by a dictionary supplied via
   * the <b>operatorNames</b> property. The available operators and their default names are:
   *
   * <ul>
   *   <li>lt: 'less'</li>
   *   <li>le: 'less or equal'</li>
   *   <li>eq: 'equal'</li>
   *   <li>ge: 'greater or equal'</li>
   *   <li>gt: 'greater'</li>
   * </ul>
   *
   * @param config configuration of this instance
   * /
  public*/ function FloatConditionBase$(config/*:FloatCondition = null*/) {var this$=this;if(arguments.length<=0)config=null;
    // create operator combo
    var operators/*:**/ = config['operators'];
    var operator/*:**/ = config['operator'];
    var opSelector/*:OperatorSelector*/ = this.initOpSelector(operators, config['operatorNames'], config['operatorEmptyText'], operator,
            OPERATORS$static, com.coremedia.personalization.ui.condition.AbstractConditionBase.DEFAULT_OPERATOR_DISPLAY_NAMES);

    this.super$zfGz(config);

    this.addOpSelector$zfGz(opSelector, operators, operator);

    var valueFieldConf/*:StatefulTextField*/ = AS3.cast(com.coremedia.ui.components.StatefulTextField,{});
    valueFieldConf.itemId = "valueField";
    valueFieldConf.flex = 30;
    AS3.setBindable(valueFieldConf,"emptyText" , config['valueEmptyText'] != null ? config['valueEmptyText'] : com.coremedia.personalization.ui.condition.AbstractConditionBase.VALUE_EMPTY_TEXT);
    valueFieldConf.allowBlank = false;
    valueFieldConf.vtype = config['valueVType'] != null ? config['valueVType'] : 'floatConditionValue';
    valueFieldConf.enableKeyEvents = true;

    this.valueField$zfGz = new com.coremedia.ui.components.StatefulTextField(valueFieldConf);
    this.add(this.valueField$zfGz);
    this.valueField$zfGz.addListener('keyup', function()/*:void*/ { this$.fireEvent('modified'); });
    this.setPropertyValue(config['valueText']);

    if (config['suffixText'] != null) {

      var displayfieldConf/*:DisplayField*/;
      displayfieldConf.itemId = "suffixText";
      AS3.setBindable(displayfieldConf,"value" , config['suffixText']);
      this.add(new Ext.form.field.Display(displayfieldConf));
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

  public override*/ function getPropertyValue()/*:String*/ {/*
    const*/var v/*:String*/ = this.valueField$zfGz.getValue();
    return v ? v : com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_VALUE;
  }/*

  public override*/ function setPropertyValue(v/*: String*/)/*:void*/ {
    this.valueField$zfGz.setValue(v == com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_VALUE ? null : v);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.AbstractCondition",
      valueField$zfGz: null,
      constructor: FloatConditionBase$,
      super$zfGz: function() {
        com.coremedia.personalization.ui.condition.AbstractCondition.prototype.constructor.apply(this, arguments);
      },
      addOpSelector$zfGz: addOpSelector,
      getPropertyValue: getPropertyValue,
      setPropertyValue: setPropertyValue,
      statics: {
        OPERATORS: undefined,
        __initStatics__: function() {
          static$0();
          OPERATORS$static_();
        }
      },
      requires: [
        "Ext.form.field.Display",
        "Ext.form.field.VTypes",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.condition.AbstractCondition",
        "com.coremedia.ui.components.StatefulTextField",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.personalization.ui.condition.AbstractConditionBase",
        "com.coremedia.personalization.ui.util.SelectionRuleHelper"
      ]
    };
});
