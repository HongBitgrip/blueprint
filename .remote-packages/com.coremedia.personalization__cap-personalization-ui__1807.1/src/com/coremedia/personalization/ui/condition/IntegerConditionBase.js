Ext.define("com.coremedia.personalization.ui.condition.IntegerConditionBase", function(IntegerConditionBase) {/* /*
 * Copyright CoreMedia AG, Hamburg, 2010. All rights reserved.
 * /
package com.coremedia.personalization.ui.condition {
import ext.form.field.VTypes;

import mx.resources.ResourceManager;

/**
 * This IntegerCondition panel is used to define conditions using integer values.
 *
 * @xtype com.coremedia.personalization.ui.condition.IntegerCondition
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class IntegerConditionBase extends FloatCondition {*/function static$0(){
{
  // introduce new vtypes for values
  Ext.form.field.VTypes['integerConditionValueVal'] = /^\d+$/;
  Ext.form.field.VTypes['integerConditionValueMask'] = /[0-9]/;
  Ext.form.field.VTypes['integerConditionValueText'] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_valueText_int');
  Ext.form.field.VTypes['integerConditionValue'] = function(v/*:**/)/*:**/ {
    return Ext.form.field.VTypes['integerConditionValueVal'].test(v);
  };
}}/*


  /**
   * Creates a new IntegerCondition.
   *
   * @cfg {String} conditionName name to be used for this condition instance in the condition combox
   * @cfg {String} propertyName name of context property mapped to this condition instance
   * @cfg {Boolean} isDefault set to true if this condition is to be the default condition of the condition panel. The
   *   first condition in the list of the registered conditions with the default flag set is used as the default
   * @cfg {String} operatorEmptyText the text to be shown if no operator is selected. Default to <i>operator</i>
   * @cfg {Object} operatorNames user-presentable names of the operators. See below
   * @cfg {Array} operators the array of operators to be made available for selection. See below
   * @cfg {String} operator the operator to select initially
   * @cfg {String} valueEmptyText the text to be shown in the value field if it is empty. Defaults to <i>value</i>
   * @cfg {String} valueText the text to place into the value field
   * @cfg {String} valueVType the validation type of the value field. See below
   * @cfg {String} suffixText the text to be shown after the value field. Defaults to <i>null</i>
   *
   * The default validation type used for the value field is: <code>/^\d+$/</code>
   *
   * The default <b>operators</b> offered by this component are:
   *
   * <ul>
   *   <li>'lt'</li> less than
   *   <li>'le'</li> less than or equals
   *   <li>'eq'</li> equals
   *   <li>'ge'</li> greater or equals
   *   <li>'gt'</li> greater than
   * </ul>
   *
   * The names used for the available operators can be overriden by a dictionary supplied via
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
  public*/ function IntegerConditionBase$(config/*:IntegerCondition = null*/) {if(arguments.length<=0)config=null;
    if (config["valueVType"] == null) {
      config["valueVType"] = "integerConditionValue";
    }
    this.super$XFrR(config);

  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.FloatCondition",
      constructor: IntegerConditionBase$,
      super$XFrR: function() {
        com.coremedia.personalization.ui.condition.FloatCondition.prototype.constructor.apply(this, arguments);
      },
      statics: {__initStatics__: function() {
          static$0();
        }},
      requires: [
        "Ext.form.field.VTypes",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.condition.FloatCondition",
        "mx.resources.ResourceManager"
      ]
    };
});
