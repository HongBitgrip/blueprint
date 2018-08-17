Ext.define("com.coremedia.personalization.ui.condition.TimeConditionBase", function(TimeConditionBase) {/* /*
 * Copyright CoreMedia AG, Hamburg, 2010. All rights reserved.
 * /
package com.coremedia.personalization.ui.condition {
import com.coremedia.personalization.ui.util.SelectionRuleHelper;
import com.coremedia.ui.components.StatefulTimeField;

import ext.DateUtil;
import ext.form.field.DisplayField;

import mx.resources.ResourceManager;

/**
 * A TimeCondition panel is used to edit time-of-day conditions.
 *
 * @xtype com.coremedia.personalization.ui.condition.TimeCondition
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class TimeConditionBase extends AbstractCondition {
  
  private static const*/var OPERATORS$static/*:Array*/;/* =*/function OPERATORS$static_(){OPERATORS$static=( [
    com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN,
    com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN]);};/*
  
  private static*/ var TIME_OPERATOR_NAMES$static/*:Object*/;/* =*/function TIME_OPERATOR_NAMES$static_(){TIME_OPERATOR_NAMES$static=( {});};function static$0(){
  {
    TIME_OPERATOR_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_time_less');
    TIME_OPERATOR_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_time_greater');
  }}/*

  private var timeField:StatefulTimeField;

  /**
   * Creates a new TimeCondition.
   *
   * @cfg {String} conditionName name to be used for this condition instance in the condition combox
   * @cfg {String} propertyName name of context property mapped to this condition instance
   * @cfg {Boolean} isDefault set to true if this condition is to be the default condition of the condition panel. The
   *   first condition in the list of the registered conditions with the default flag set is used as the default
   * @cfg {String} operatorEmptyText the text to be shown if no operator is selected. Defaults to <i>operator</i>
   * @cfg {Object} operatorNames user-presentable names of the operators. See below
   * @cfg {String} operator the operator to select initially
   * @cfg {String} valueText the text to place into the time field. Must be of format 'H:i:s'
   * @cfg {String} timeEmptyText the text to be shown in the time field if it is empty. Defaults to <i>time</i>
   * @cfg {String} timeVType the validation type of the value field
   *
   * The names used for the available operators can be overridden by a dictionary supplied via
   * the <b>operatorNames</b> property. The available operators and their default names are:
   *
   * <ul>
   *   <li>lt: 'before'</li>
   *   <li>gt: 'after'</li>
   * </ul>
   *
   * @param config configuration of this instance
   * /
  public*/ function TimeConditionBase$(config/*:TimeCondition = null*/) {var this$=this;if(arguments.length<=0)config=null;
    // create operator combo
    var operators/*:**/ = config['operators'];
    var operator/*:**/ = config['operator'];
    var opSelector/*:OperatorSelector*/ = this.initOpSelector(null, AS3.getBindable(config,"operatorNames"), AS3.getBindable(config,"operatorEmptyText"), operator,
            OPERATORS$static, TIME_OPERATOR_NAMES$static);

    this.super$ktno(config);

    this.addOpSelector$ktno(opSelector, operators, operator);

    // create time chooser
    var timeFieldCfg/*:StatefulTimeField*/ = AS3.cast(com.coremedia.ui.components.StatefulTimeField,{});
    timeFieldCfg.itemId = "timeField";
    timeFieldCfg.flex = 30;
    timeFieldCfg.listConfig = {minWidth: 90};
    AS3.setBindable(timeFieldCfg,"minValue" , Ext.Date.parse("0:00 AM", "g:i A"));
    AS3.setBindable(timeFieldCfg,"maxValue" , Ext.Date.parse("11:59 PM", "g:i A"));
    timeFieldCfg.increment = 30;
    timeFieldCfg.format = this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_time_format');
    this.timeField$ktno = this.add(timeFieldCfg);
    this.timeField$ktno.addListener('change', function()/*:void*/ {
      this$.fireEvent('modified');
    });
    this.timeField$ktno.addListener('select', function()/*:void*/ {
      this$.fireEvent('modified');
    });

    if (AS3.getBindable(config,"suffixText") != null) {
      var displayFieldCfg/*:DisplayField*/ = AS3.cast(Ext.form.field.Display,{});
      displayFieldCfg.itemId = "suffixText";
      AS3.setBindable(displayFieldCfg,"value" , AS3.getBindable(config,"suffixText"));
      this.add(displayFieldCfg);
    }

    this.setPropertyValue(config["valueText"]);
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
    var t/*:Date*/ = this.timeField$ktno.getValue();
    return Ext.Date.format(t, "H:i:s");
  }/*

  public override*/ function setPropertyValue(v/*:String*/)/*:void*/ {
    var d/*:Date*/ = Ext.Date.parse(v, "H:i:s");
    if (d == null) {
      d = new Date();
    }
    this.timeField$ktno.setValue(d);
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.AbstractCondition",
      timeField$ktno: null,
      constructor: TimeConditionBase$,
      super$ktno: function() {
        com.coremedia.personalization.ui.condition.AbstractCondition.prototype.constructor.apply(this, arguments);
      },
      addOpSelector$ktno: addOpSelector,
      getPropertyValue: getPropertyValue,
      setPropertyValue: setPropertyValue,
      statics: {
        OPERATORS: undefined,
        TIME_OPERATOR_NAMES: undefined,
        __initStatics__: function() {
          OPERATORS$static_();
          TIME_OPERATOR_NAMES$static_();
          static$0();
        }
      },
      requires: [
        "Ext.Date",
        "Ext.form.field.Display",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.condition.AbstractCondition",
        "com.coremedia.ui.components.StatefulTimeField",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.personalization.ui.condition.AbstractConditionBase",
        "com.coremedia.personalization.ui.util.SelectionRuleHelper"
      ]
    };
});
