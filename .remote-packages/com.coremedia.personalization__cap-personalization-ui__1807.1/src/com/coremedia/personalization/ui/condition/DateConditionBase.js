Ext.define("com.coremedia.personalization.ui.condition.DateConditionBase", function(DateConditionBase) {/* /*
 * Copyright CoreMedia AG, Hamburg, 2010. All rights reserved.
 * /
package com.coremedia.personalization.ui.condition {
import com.coremedia.personalization.ui.util.SelectionRuleHelper;
import com.coremedia.ui.components.StatefulDateField;

import ext.DateUtil;

import mx.resources.ResourceManager;

/**
 * The DateCondition is used to define conditions on dates. It provides a date chooser to define the
 * value against which the configured property is tested.
 *
 * @xtype com.coremedia.personalization.ui.condition.DateCondition
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class DateConditionBase extends AbstractCondition {

  private static const*/var OPERATORS$static/*:Array*/;/* =*/function OPERATORS$static_(){OPERATORS$static=( [
    com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN,
    com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_EQUAL,
    com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN]);};/*

  private static*/ var DATE_OPERATOR_NAMES$static/*:Object*/;/* =*/function DATE_OPERATOR_NAMES$static_(){DATE_OPERATOR_NAMES$static=( {});};function static$0(){
  {
    DATE_OPERATOR_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_time_less');
    DATE_OPERATOR_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_EQUAL] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_date_time_equal');
    DATE_OPERATOR_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_time_greater');
  }}/*

  private var valueField:StatefulDateField;

  /**
   * Creates a new DateCondition instance.
   *
   * @cfg {String} conditionName name to be used for this condition instance in the condition combox
   * @cfg {String} propertyName name of context property mapped to this condition instance
   * @cfg {Boolean} isDefault set to true if this condition is to be the default condition of the condition panel. The
   *   first condition in the list of the registered conditions with the default flag set is used as the default
   * @cfg {String} operatorEmptyText  the text to be shown if no operator is selected. Default to <i>operator</i>
   * @cfg {Object} operatorNames user-presentable names of the operators. See below
   * @cfg {String} operator the operator to select initially
   * @cfg {String} valueText the text to place into the date field. Must be an ISO-8601 formatted date
   * @cfg {String} dateEmptyText the text to be shown in the value field if it is empty. Defaults to <i>value</i>
   * @cfg {String} dateVType the validation type of the value field
   *
   * The <b>operators</b> offered by this component are:
   *
   * <ul>
   *   <li>'lt'</li> less than
   *   <li>'gt'</li> greater than
   *   <li>'eq'</li> equals
   * </ul>
   *
   * The names used for the available operators can be overridden by a dictionary supplied via
   * the <b>operatorNames</b> property. The available operators and their default names are:
   *
   * <ul>
   *   <li>lt: 'before'</li>
   *   <li>gt: 'after'</li>
   *   <li>eq: 'on'</li>
   * </ul>
   *
   * @param config configuration of this instance
   * /
  public*/ function DateConditionBase$(config/*:DateCondition = null*/) {if(arguments.length<=0)config=null;
    // create operator combo
    var operators/*:**/ = config['operators'];
    var operator/*:**/ = config['operator'];
    var opSelector/*:OperatorSelector*/ = this.initOpSelector(null, config['operatorNames'], config['operatorEmptyText'], operator,
            OPERATORS$static, DATE_OPERATOR_NAMES$static);

    this.super$ZfKn(config);

    this.addOpSelector$ZfKn(opSelector, operators, operator);

    // create date chooser
    this.initDateChooser$ZfKn(config['dateEmptyText'], config['dateVType'], config['dateText']);
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

  private*/ function initDateChooser(dateEmptyText/*:String*/, dateVType/*:String*/,  dateText/*:String*/)/*:void*/ {var this$=this;
    var valueFieldConf/*:StatefulDateField*/ = AS3.cast(com.coremedia.ui.components.StatefulDateField,{});
    valueFieldConf.itemId = "valueField";
    valueFieldConf.flex = 30;
    AS3.setBindable(valueFieldConf,"emptyText" , dateEmptyText != null ? dateEmptyText : 'date');
    valueFieldConf.allowBlank = false;
    valueFieldConf.vtype = dateVType;
    valueFieldConf.format = this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_date_format');
    this.valueField$ZfKn = new com.coremedia.ui.components.StatefulDateField(valueFieldConf);
    this.add(this.valueField$ZfKn);
    this.valueField$ZfKn.addListener('change', function()/*:void*/ {
      this$.fireEvent('modified');
    });
    this.valueField$ZfKn.addListener('select', function()/*:void*/ {
      this$.fireEvent('modified');
    });
    this.setPropertyValue(dateText);
  }/*

  public override*/ function getPropertyValue()/*:String*/ {
    var d/*:Date*/ = this.valueField$ZfKn.getValue();
    return d ? Ext.Date.format(d, "Y-m-d\\TH:i:s") : com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_VALUE;
  }/*

  public override*/ function setPropertyValue(v/*:String*/)/*:void*/ {
    if (v != com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_VALUE) {
      var d/*:Date*/ = Ext.Date.parse(v, "Y-m-d\\TH:i:s");
      if (d == null) {
        d = new Date();
      }
      this.valueField$ZfKn.setValue(d);
    } else {
      this.valueField$ZfKn.setValue(null);
    }
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.AbstractCondition",
      valueField$ZfKn: null,
      constructor: DateConditionBase$,
      super$ZfKn: function() {
        com.coremedia.personalization.ui.condition.AbstractCondition.prototype.constructor.apply(this, arguments);
      },
      addOpSelector$ZfKn: addOpSelector,
      initDateChooser$ZfKn: initDateChooser,
      getPropertyValue: getPropertyValue,
      setPropertyValue: setPropertyValue,
      statics: {
        OPERATORS: undefined,
        DATE_OPERATOR_NAMES: undefined,
        __initStatics__: function() {
          OPERATORS$static_();
          DATE_OPERATOR_NAMES$static_();
          static$0();
        }
      },
      requires: [
        "Ext.Date",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.condition.AbstractCondition",
        "com.coremedia.ui.components.StatefulDateField",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.personalization.ui.condition.AbstractConditionBase",
        "com.coremedia.personalization.ui.util.SelectionRuleHelper"
      ]
    };
});
