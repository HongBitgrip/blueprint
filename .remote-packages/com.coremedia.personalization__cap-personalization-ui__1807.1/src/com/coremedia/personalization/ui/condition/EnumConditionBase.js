Ext.define("com.coremedia.personalization.ui.condition.EnumConditionBase", function(EnumConditionBase) {/* /*
 * Copyright CoreMedia AG, Hamburg, 2010. All rights reserved.
 * /
package com.coremedia.personalization.ui.condition {
import com.coremedia.personalization.ui.util.SelectionRuleHelper;
import com.coremedia.ui.components.LocalComboBox;

import ext.data.ArrayStore;
import ext.form.field.DisplayField;

/**
 * The EnumCondition is used to select values from a given enumeration.
 *
 * @xtype com.coremedia.personalization.ui.condition.EnumCondition
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class EnumConditionBase extends AbstractCondition {

  private static const*/var OPERATORS$static/*:Array*/;/* =*/function OPERATORS$static_(){OPERATORS$static=( [
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN,
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN_OR_EQUAL,
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_EQUAL,
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_NOTEQUAL,
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN,
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN_OR_EQUAL
  ]);};/*

  private var valueSelector:LocalComboBox;

  /**
   * Creates a new EnumCondition.
   *
   * @cfg {String} conditionName name to be used for this condition instance in the condition combox
   * @cfg {String} propertyName name of context property mapped to this condition instance
   * @cfg {Boolean} isDefault set to true if this condition is to be the default condition of the condition panel. The
   *   first condition in the list of the registered conditions with the default flag set is used as the default
   * @cfg {String} operatorEmptyText the text to be shown if no operator is selected. Default to <i>operator</i>
   * @cfg {Object} operatorNames operatorNames user-presentable names of the operators. See below.
   * @cfg {Array} operators the array of operators to be made available for selection. See below.
   * @cfg {String} operator the operator to select initially
   * @cfg {String} valueEmptyText the text to be shown in the value field if it is empty. Defaults to <i>value</i>
   * @cfg {String} valueText the text to place into the value field
   * @cfg {Object} value the enumeration of possible values and their display names. See below
   * @cfg {String} suffixText the text to be shown after the value field. Defaults to <i>null</i>
   *
   * The value among which the user can select are defined using array of array, where each contained array contains
   * two elements: the actual value that is returned if the option was selected, and the display name shown to the user.
   * E.g.: <code>[[1, 'Sunday'], [2, 'Monday'], ..., [7, Saturday]]</code>.
   *
   * The default <b>operators</b> offered by this component are:
   *
   * <ul>
   *   <li>'lt'</li> less than
   *   <li>'le'</li> less than or equals
   *   <li>'eq'</li> equals
   *   <li>'ne'</li> not equal
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
   *   <li>ne: 'not equal'</li>
   *   <li>ge: 'greater or equal'</li>
   *   <li>gt: 'greater'</li>
   * </ul>
   *
   * @param config configuration of this instance
   * /
  public*/ function EnumConditionBase$(config/*:EnumCondition = null*/) {var this$=this;if(arguments.length<=0)config=null;
    if (AS3.getBindable(config,"value") == null || AS3.getBindable(config,"value").length <= 0)
      throw new AS3.Error(this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_EnumCondition_configValue'));

    // create operator combo
    var operators/*:**/ = config['operators'];
    var operator/*:**/ = config['operator'];
    var opSelector/*:OperatorSelector*/ = this.initOpSelector(operators, config['operatorNames'], config['operatorEmptyText'], operator,
            OPERATORS$static, com.coremedia.personalization.ui.condition.AbstractConditionBase.DEFAULT_OPERATOR_DISPLAY_NAMES);

    this.super$Qcw_(config);

    this.addOpSelector$Qcw_(opSelector, operators, operator);

    // create value combo
    var values/*:Array*/ = config['value'];
    var valueSelectorCfg/*:LocalComboBox*/ = AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    valueSelectorCfg.itemId = "valueSelector";
    valueSelectorCfg.flex = 30;
    valueSelectorCfg.listConfig = {minWidth: 100};
    AS3.setBindable(valueSelectorCfg,"emptyText" , AS3.getBindable(config,"valueEmptyText") != null ? AS3.getBindable(config,"valueEmptyText") : com.coremedia.personalization.ui.condition.AbstractConditionBase.VALUE_EMPTY_TEXT);
    valueSelectorCfg.forceSelection = true;
    valueSelectorCfg.allowBlank = false;
    valueSelectorCfg.validator = function (v/*:**/)/*:**/ {
      for (var i/*:int*/ = 0; i < values.length; i++) {
        if (values[i][1] == v) {
          return true;
        }
      }
      return this$.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_EnumCondition_validValue');
    };
    var arrayStoreCfg/*:ArrayStore*/ = AS3.cast(Ext.data.ArrayStore,{});
    arrayStoreCfg['id'] = 0;
    AS3.setBindable(arrayStoreCfg,"fields" , [
      'myId',
      'displayText'
    ]);
    AS3.setBindable(arrayStoreCfg,"data" , values);
    AS3.setBindable(valueSelectorCfg,"store" , new Ext.data.ArrayStore(arrayStoreCfg));
    valueSelectorCfg.valueField = 'myId';
    AS3.setBindable(valueSelectorCfg,"displayField" , 'displayText');
    this.valueSelector$Qcw_ = this.add(valueSelectorCfg);
    this.valueSelector$Qcw_.addListener('change', function()/*:void*/ { this$.fireEvent('modified'); });
    this.valueSelector$Qcw_.addListener('select', function()/*:void*/ { this$.fireEvent('modified'); });
    this.setPropertyValue(values[0][0]);

    if (AS3.getBindable(config,"suffixText") != null) {
      var suffixTextCfg/*:DisplayField*/ = AS3.cast(Ext.form.field.Display,{});
      suffixTextCfg.itemId = "suffixText";
      AS3.setBindable(suffixTextCfg,"value" , config['suffixText']);
      this.add(suffixTextCfg);
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
    const*/var v/*:String*/ = this.valueSelector$Qcw_.getValue();
    return (v != null && v.toString().length > 0) ? v : com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_VALUE;
  }/*

  public override*/ function setPropertyValue(v/*: String*/)/*:void*/ {
    this.valueSelector$Qcw_.setValue(v == com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_VALUE ? null : v);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.AbstractCondition",
      valueSelector$Qcw_: null,
      constructor: EnumConditionBase$,
      super$Qcw_: function() {
        com.coremedia.personalization.ui.condition.AbstractCondition.prototype.constructor.apply(this, arguments);
      },
      addOpSelector$Qcw_: addOpSelector,
      getPropertyValue: getPropertyValue,
      setPropertyValue: setPropertyValue,
      statics: {
        OPERATORS: undefined,
        __initStatics__: function() {
          OPERATORS$static_();
        }
      },
      requires: [
        "AS3.Error",
        "Ext.data.ArrayStore",
        "Ext.form.field.Display",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.condition.AbstractCondition",
        "com.coremedia.ui.components.LocalComboBox"
      ],
      uses: [
        "com.coremedia.personalization.ui.condition.AbstractConditionBase",
        "com.coremedia.personalization.ui.util.SelectionRuleHelper"
      ]
    };
});
