Ext.define("com.coremedia.personalization.ui.condition.DateTimeConditionBase", function(DateTimeConditionBase) {/* /*
 * Copyright CoreMedia AG, Hamburg, 2010. All rights reserved.
 * /
package com.coremedia.personalization.ui.condition {
import com.coremedia.personalization.ui.util.SelectionRuleHelper;
import com.coremedia.ui.components.StatefulDateField;
import com.coremedia.ui.components.StatefulTimeField;

import ext.DateUtil;

import mx.resources.ResourceManager;

/**
 * The DateTimeCondition is used to edit conditions on dates and times. It provides a date as well
 * as a time chooser.
 *
 * @xtype com.coremedia.personalization.ui.condition.DateTimeCondition
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class DateTimeConditionBase extends AbstractCondition {

  private static const*/var OPERATORS$static/*:Array*/;/* =*/function OPERATORS$static_(){OPERATORS$static=( [
    com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN,
    com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN]);};/*

  private static*/ var DATETIME_OPERATOR_NAMES$static/*:Object*/;/* =*/function DATETIME_OPERATOR_NAMES$static_(){DATETIME_OPERATOR_NAMES$static=( {});};function static$0(){
  {
    DATETIME_OPERATOR_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_time_less');
    DATETIME_OPERATOR_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_time_greater');
  }}/*

  private var dateField:StatefulDateField;
  private var timeField:StatefulTimeField;

  /**
   * Creates a new DateTimeCondition.
   *
   * @cfg {String} conditionName name to be used for this condition instance in the condition combox
   * @cfg {String} propertyName name of context property mapped to this condition instance
   * @cfg {Boolean} isDefault set to true if this condition is to be the default condition of the condition panel. The
   *   first condition in the list of the registered conditions with the default flag set is used as the default
   * @cfg {String} operatorEmptyText the text to be shown if no operator is selected. Default is <i>operator</i>
   * @cfg {Object} operatorNames user-presentable names of the operators. See below
   * @cfg {String} operator the operator to select initially
   * @cfg {String} valueText the text to place into the date/time fields. Must be an ISO-8601 formatted date
   * @cfg {String} dateEmptyText the text to be shown in the date field if it is empty. Defaults to <i>date</i>
   * @cfg {String} dateVType the validation type of the value field
   * @cfg {String} timeEmptyText the text to be shown in the time field if it is empty. Defaults to <i>time</i>
   * @cfg {String} timeVType the validation type of the value field
   *
   * The <b>operators</b> offered by this component are:
   *
   * <ul>
   *   <li>'lt'</li> less than
   *   <li>'gt'</li> greater than
   * </ul>
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
  public*/ function DateTimeConditionBase$(config/*:DateTimeCondition = null*/) {var this$=this;if(arguments.length<=0)config=null;
    // create operator combo
    var operators/*:**/ = config['operators'];
    var operator/*:**/ = config['operator'];
    var opSelector/*:OperatorSelector*/ = this.initOpSelector(null, config['operatorNames'], config['operatorEmptyText'], operator,
            OPERATORS$static, DATETIME_OPERATOR_NAMES$static);

    this.super$qqpa(config);

    this.addOpSelector$qqpa(opSelector, operators, operator);

    // create date chooser
    var dateFieldCfg/*:StatefulDateField*/ = AS3.cast(com.coremedia.ui.components.StatefulDateField,{});
    dateFieldCfg.itemId = "dateField";
    dateFieldCfg.flex = 30;
    AS3.setBindable(dateFieldCfg,"emptyText" , AS3.getBindable(config,"dateEmptyText") != null ? AS3.getBindable(config,"dateEmptyText") : 'date');
    dateFieldCfg.allowBlank = false;
    dateFieldCfg.vtype = AS3.getBindable(config,"dateVType");
    dateFieldCfg.format = this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_date_format');
    this.dateField$qqpa = this.add(dateFieldCfg);
     // need to fire a modified event when selecting a date via datepicker
    this.dateField$qqpa.addListener('change', function()/*:void*/ {
      this$.fireEvent('modified');
    });
    this.dateField$qqpa.addListener('select', function()/*:void*/ {
      this$.fireEvent('modified');
    });

    // create time chooser
    var timeFieldCfg/*:StatefulTimeField*/ = AS3.cast(com.coremedia.ui.components.StatefulTimeField,{});
    timeFieldCfg.itemId = "timeField";
    timeFieldCfg.flex = 30;
    AS3.setBindable(timeFieldCfg,"emptyText" , AS3.getBindable(config,"timeEmptyText") != null ? AS3.getBindable(config,"timeEmptyText") : 'time');
    timeFieldCfg.allowBlank = false;
    AS3.setBindable(timeFieldCfg,"minValue" , Ext.Date.parse("0:00 AM", "g:i A"));
    AS3.setBindable(timeFieldCfg,"maxValue" , Ext.Date.parse("11:59 PM", "g:i A"));
    timeFieldCfg.increment = 30;
    timeFieldCfg.format = this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_time_format');
    this.timeField$qqpa = this.add(timeFieldCfg);
    this.timeField$qqpa.addListener('change', function()/*:void*/ {
      this$.fireEvent('modified');
    });
    this.timeField$qqpa.addListener('select', function()/*:void*/ {
      this$.fireEvent('modified');
    });
    this.setPropertyValue(config["dateText"]);
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
    var d/*:Date*/ = this.dateField$qqpa.getValue();
    var t/*:Date*/ = this.timeField$qqpa.getValue();
    d = Ext.Date.add(d, Ext.Date.HOUR, Number(Ext.Date.format(t, "G")));
    d = Ext.Date.add(d, Ext.Date.MINUTE, Number(Ext.Date.format(t, "i")));
    return Ext.Date.format(d, "Y-m-d\\TH:i:s");
  }/*

  public override*/ function setPropertyValue(v/*:String*/)/*:void*/ {
    var d/*:Date*/ = Ext.Date.parse(v, "Y-m-d\\TH:i:s");
    if (d == null) {
      d = new Date();
    }
    this.dateField$qqpa.setValue(d);
    this.timeField$qqpa.setValue(d);
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.AbstractCondition",
      dateField$qqpa: null,
      timeField$qqpa: null,
      constructor: DateTimeConditionBase$,
      super$qqpa: function() {
        com.coremedia.personalization.ui.condition.AbstractCondition.prototype.constructor.apply(this, arguments);
      },
      addOpSelector$qqpa: addOpSelector,
      getPropertyValue: getPropertyValue,
      setPropertyValue: setPropertyValue,
      statics: {
        OPERATORS: undefined,
        DATETIME_OPERATOR_NAMES: undefined,
        __initStatics__: function() {
          OPERATORS$static_();
          DATETIME_OPERATOR_NAMES$static_();
          static$0();
        }
      },
      requires: [
        "Ext.Date",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.condition.AbstractCondition",
        "com.coremedia.ui.components.StatefulDateField",
        "com.coremedia.ui.components.StatefulTimeField",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.personalization.ui.condition.AbstractConditionBase",
        "com.coremedia.personalization.ui.util.SelectionRuleHelper"
      ]
    };
});
