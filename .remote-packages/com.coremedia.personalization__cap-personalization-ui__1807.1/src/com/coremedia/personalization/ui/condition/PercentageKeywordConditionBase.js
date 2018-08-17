Ext.define("com.coremedia.personalization.ui.condition.PercentageKeywordConditionBase", function(PercentageKeywordConditionBase) {/* /*
 * Copyright CoreMedia AG, Hamburg, 2010. All rights reserved.
 * /
package com.coremedia.personalization.ui.condition {
import com.coremedia.personalization.ui.util.SelectionRuleHelper;

import ext.form.field.VTypes;

import mx.resources.ResourceManager;

/**
 * A PercentageKeywordCondition used to edit integer percentage values within the range of 0-100. The actual
 * property value accessible via getValue is a corresponding floating point value in [0, 1].
 *
 * @xtype com.coremedia.personalization.ui.condition.PercentageKeywordCondition
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class PercentageKeywordConditionBase extends KeywordCondition {*/function static$0(){
  {

    // introduce a new vtype for percentage values
    Ext.form.field.VTypes['PercentageKeywordConditionValueVal'] = /^((100)|(\d{1,2}))$/;
    Ext.form.field.VTypes['PercentageKeywordConditionValueMask'] = /[0-9]/;
    Ext.form.field.VTypes['PercentageKeywordConditionValueText'] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_percentage_value');
    Ext.form.field.VTypes['PercentageKeywordConditionValue'] = function(v/*:**/)/*:**/ {
      return Ext.form.field.VTypes['PercentageKeywordConditionValueVal'].test(v);
    };
  }}/*


  /**
   * Creates a new PercentageKeywordCondition.
   *
   * @cfg {String} conditionName name to be used for this condition instance in the condition combox
   * @cfg {String} propertyPrefix prefix of context properties mapped to this condition instance. The characters
   *  following the prefix in a property name are assumed to represent the keyword
   * @cfg {Boolean} isDefault set to true if this condition is to be the default condition of the condition panel. The
   *   first condition in the list of the registered conditions with the default flag set is used as the default
   * @cfg {String} keywordEmptyText the text to be shown in the keyword field if it is empty. Defaults to <i>keyword</i>
   * @cfg {String} keywordText the text to place into the keyword field. Defaults to <i>null</i>
   * @cfg {String} keywordVType the validation type of the keyword field. See below
   * @cfg {String} operatorEmptyText the text to be shown if no operator is selected. Default to <i>operator</i>
   * @cfg {Object} operatorNames user-presentable names of the operators. See below
   * @cfg {Array} operators the array of operators to be made available for selection. See below
   * @cfg {String} valueEmptyText the text to be shown in the value field if it is empty. Defaults to <i>value</i>
   * @cfg {String} valueText the text to place into the value field
   * @cfg {String} suffixText the text to be shown after the value field. Defaults to <i>null</i>
   *
   * The property prefix is used to transform keyword properties to and from a user-presentable form. In a typical scenario,
   * keyword properties in a profile will use a common prefix to identify them as keywords, e.g. 'keyword'. This prefix
   * shouldn't be shown to users of the UI. If the propertyPrefix property is set to the internally used prefix, this condition
   * component will remove the prefix (including the '.' separator) from the keyword property before it is displayed, and
   * add it to the value in the keyword field when it is read via getPropertyName.
   *
   * The default validation types are:
   * <ul>
   *   <li>For the keyword field: <code>/^[a-zA-Z_][a-zA-Z_0-9\.]*$/</code>.</li>
   *   <li>For the value field: <code>/^\d+(\.\d+)?$/</code>.</li>
   * </ul>
   *
   * The <b>operators</b> offered by this component are:
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
   *   <li>lt: 'less than'</li>
   *   <li>le: 'less than or equal to'</li>
   *   <li>eq: 'equal to'</li>
   *   <li>ge: 'greater than or equal to'</li>
   *   <li>gt: 'greater than'</li>
   * </ul>
   *
   * You may override an arbitrary subset of these values.
   *
   * @param config configuration of this instance
   * /
  public*/ function PercentageKeywordConditionBase$(config/*:PercentageKeywordCondition = null*/) {if(arguments.length<=0)config=null;
    /* obligatory configuration. overrides supplied properties */
    AS3.setBindable(config,"valueVType" , "PercentageKeywordConditionValue");
    /* default configuration. may be overridden by supplied properties */
    AS3.setBindable(config,"suffixText" , "%");
    this.super$gS0A(config);
  }/*

  /**
   * Retrieves the value of this condition as a float in [0, 1].
   *
   * @return value of this condition in [0, 1]
   * /
  override public*/ function getPropertyValue()/*:String*/ {/*
    const*/var v/*:String*/ = com.coremedia.personalization.ui.condition.KeywordCondition.prototype.getPropertyValue.call(this);
    if (v != com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_VALUE) {
      // transform integer percentage to decimal notation before returning the value
      var floatNumber/*:Number*/ = Number(com.coremedia.personalization.ui.condition.KeywordCondition.prototype.getPropertyValue.call(this)) * 0.01;
      return floatNumber.toFixed(2);
    } else {
      return v;
    }
  }/*

  /**
   * Sets the value of this condition. Assumes the supplied value is in [0, 1].
   *
   * @param value a floating point value in [0, 1]
   * /
  override public*/ function setPropertyValue(value/*:String*/)/*:void*/ {
    if (value != com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_VALUE) {
      // transform the decimal notation to integer percentage before rendering the value
      var percentage/*:Number*/ = Number(value) * 100;
      com.coremedia.personalization.ui.condition.KeywordCondition.prototype.setPropertyValue.call(this,percentage.toFixed(0));
    } else {
      com.coremedia.personalization.ui.condition.KeywordCondition.prototype.setPropertyValue.call(this,value);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.KeywordCondition",
      constructor: PercentageKeywordConditionBase$,
      super$gS0A: function() {
        com.coremedia.personalization.ui.condition.KeywordCondition.prototype.constructor.apply(this, arguments);
      },
      getPropertyValue: getPropertyValue,
      setPropertyValue: setPropertyValue,
      statics: {__initStatics__: function() {
          static$0();
        }},
      requires: [
        "Ext.form.field.VTypes",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.condition.KeywordCondition",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.personalization.ui.util.SelectionRuleHelper"]
    };
});
