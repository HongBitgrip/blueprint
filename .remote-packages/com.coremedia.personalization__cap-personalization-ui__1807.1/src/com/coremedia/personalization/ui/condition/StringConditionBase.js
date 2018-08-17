Ext.define("com.coremedia.personalization.ui.condition.StringConditionBase", function(StringConditionBase) {/* /*
 * Copyright CoreMedia AG, Hamburg, 2010. All rights reserved.
 * /
package com.coremedia.personalization.ui.condition {
import com.coremedia.personalization.ui.util.SelectionRuleHelper;
import com.coremedia.ui.components.StatefulTextField;

import ext.form.field.DisplayField;

/**
 * The StringCondition is used to define conditions using string values.
 *
 * @xtype com.coremedia.personalization.ui.condition.StringCondition
 * /
public class StringConditionBase extends AbstractCondition {

  private static const*/var OPERATORS$static/*:Array*/;/* =*/function OPERATORS$static_(){OPERATORS$static=( [
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_EQUAL,
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_NOTEQUAL,
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_CONTAINS
  ]);};/*

  private var valueField:StatefulTextField;

  /**
   * Creates a new StringCondition.
   *
   * @cfg {String} conditionName name to be used for this condition instance in the condition combox
   * @cfg {String} propertyName name of context property mapped to this condition instance
   * @cfg {Boolean} isDefault set to true if this condition is to be the default condition of the condition panel. The
   *   first condition in the list of the registered conditions with the default flag set is used as the default
   * @cfg {String} operatorEmptyText the text to be shown if no operator is selected. Default to <i>operator</i>
   * @cfg {Array} operators the array of operators to be made available for selection. See below
   * @cfg {Object} operatorNames user-presentable names of the operators. See below
   * @cfg {String} operator the operator to select initially
   * @cfg {String} valueEmptyText the text to be shown in the value field if it is empty. Defaults to <i>value</i>
   * @cfg {String} valueText the text to place into the value field
   * @cfg {String} suffixText the text to be shown after the value field. Defaults to <i>null</i>
   *
   * The default <b>operators</b> offered by this component are:
   *
   * <ul>
   *   <li>'eq'</li> equal to
   *   <li>'ne'</li> not equal
   *   <li>'ct'</li> contains
   * </ul>
   *
   * The names used for the available operators can be overridden by a dictionary supplied via
   * the <b>operatorNames</b> property. The available operators and their default names are:
   *
   * <ul>
   *   <li>eq: 'equal to'</li>
   *   <li>ne: 'not equal to'</li>
   *   <li>ct: 'contains'</li>
   * </ul>
   *
   * @param config
   * /
  public*/ function StringConditionBase$(config/*:StringCondition = null*/) {var this$=this;if(arguments.length<=0)config=null;
    // create operator combo
    var operators/*:**/ = config['operators'];
    var operator/*:**/ = config['operator'];
    var opSelector/*:OperatorSelector*/ = this.initOpSelector(operators, config['operatorNames'], config['operatorEmptyText'], operator,
            OPERATORS$static, com.coremedia.personalization.ui.condition.AbstractConditionBase.DEFAULT_OPERATOR_DISPLAY_NAMES);

    this.super$l$pk(config);

    this.addOpSelector$l$pk(opSelector, operators, operator);

    // create date chooser
    var valueFieldCfg/*:StatefulTextField*/ = AS3.cast(com.coremedia.ui.components.StatefulTextField,{});
    valueFieldCfg.itemId = "valueField";
    valueFieldCfg.flex = 30;
    AS3.setBindable(valueFieldCfg,"emptyText" , AS3.getBindable(config,"valueEmptyText") != null ? AS3.getBindable(config,"valueEmptyText") : com.coremedia.personalization.ui.condition.AbstractConditionBase.VALUE_EMPTY_TEXT);
    valueFieldCfg.allowBlank = false;
    valueFieldCfg.vtype = config['valueVType'];
    valueFieldCfg.enableKeyEvents = true;
    this.valueField$l$pk = this.add(valueFieldCfg);
    this.valueField$l$pk.addListener('keyup', function()/*:void*/ { this$.fireEvent('modified'); });
    this.valueField$l$pk.setValue(config['valueText']);

    if (AS3.getBindable(config,"suffixText") != null) {
      var suffixTextCfg/*:DisplayField*/ = AS3.cast(Ext.form.field.Display,{});
      suffixTextCfg.itemId = "suffixText";
      AS3.setBindable(suffixTextCfg,"value" , AS3.getBindable(config,"suffixText"));
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

  public override*/ function getPropertyValue()/*:String*/ {
    return '"' + this.valueField$l$pk.getValue() + '"';
  }/*

  public override*/ function setPropertyValue(v/*: String*/)/*:void*/ {
    if (v != null && v.length >=2) {
      this.valueField$l$pk.setValue(v.substr(1, v.length-2));
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.AbstractCondition",
      valueField$l$pk: null,
      constructor: StringConditionBase$,
      super$l$pk: function() {
        com.coremedia.personalization.ui.condition.AbstractCondition.prototype.constructor.apply(this, arguments);
      },
      addOpSelector$l$pk: addOpSelector,
      getPropertyValue: getPropertyValue,
      setPropertyValue: setPropertyValue,
      statics: {
        OPERATORS: undefined,
        __initStatics__: function() {
          OPERATORS$static_();
        }
      },
      requires: [
        "Ext.form.field.Display",
        "com.coremedia.personalization.ui.condition.AbstractCondition",
        "com.coremedia.ui.components.StatefulTextField"
      ],
      uses: [
        "com.coremedia.personalization.ui.condition.AbstractConditionBase",
        "com.coremedia.personalization.ui.util.SelectionRuleHelper"
      ]
    };
});
