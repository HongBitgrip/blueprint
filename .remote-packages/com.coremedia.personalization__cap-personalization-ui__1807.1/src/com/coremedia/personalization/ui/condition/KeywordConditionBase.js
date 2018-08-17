Ext.define("com.coremedia.personalization.ui.condition.KeywordConditionBase", function(KeywordConditionBase) {/* /*
 * Copyright CoreMedia AG, Hamburg, 2010. All rights reserved.
 * /
package com.coremedia.personalization.ui.condition {
import com.coremedia.personalization.ui.util.SelectionRuleHelper;
import com.coremedia.ui.components.StatefulNumberField;
import com.coremedia.ui.components.StatefulTextField;

import ext.form.field.DisplayField;
import ext.form.field.VTypes;

import mx.resources.ResourceManager;

/**
 * A Condition specialized for editing <i>keyword conditions</i>. A keyword
 * condition consists of a String <i>A</i>, a comparison operator <i>op</i>, and a second
 * String <i>B</i> and is interpreted as <i>'valueOf(A) &lt;op&gt; B'</i>.
 *
 * @xtype com.coremedia.personalization.ui.condition.KeywordCondition
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class KeywordConditionBase extends AbstractCondition {*/function static$0(){
{
  // introduce new vtypes for keywords and values
  Ext.form.field.VTypes['keywordConditionKeywordVal'] = /^[a-zA-Z_][a-zA-Z_0-9.]*$/;
  Ext.form.field.VTypes['keywordConditionKeywordMask'] = /[a-zA-Z_0-9.]/;
  Ext.form.field.VTypes['keywordConditionKeywordText'] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_keywordText');
  Ext.form.field.VTypes['keywordConditionKeyword'] = function(v/*:**/)/*:**/ {
    return Ext.form.field.VTypes['keywordConditionKeywordVal'].test(v);
  };
  Ext.form.field.VTypes['keywordConditionValueVal'] = /^\d+(\.\d+)?$/;
  Ext.form.field.VTypes['keywordConditionValueMask'] = /[0-9.]/;
  Ext.form.field.VTypes['keywordConditionValueText'] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_valueText');
  Ext.form.field.VTypes['keywordConditionValue'] = function(v/*:**/)/*:**/ {
    return Ext.form.field.VTypes['keywordConditionValueVal'].test(v);
  };
}}/*


  private static const*/var OPERATORS$static/*:Array*/;/* =*/function OPERATORS$static_(){OPERATORS$static=( [
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN,
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN_OR_EQUAL,
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_EQUAL,
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN,
      com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN_OR_EQUAL
  ]);};/*

  //
  // default values for all configurable parts
  //
  private static const*/var KEYWORD_EMPTY_TEXT$static/*:String*/;/* =*/function KEYWORD_EMPTY_TEXT$static_(){KEYWORD_EMPTY_TEXT$static=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_keyword'));};/*
  private static const*/var VALUE_EMPTY_TEXT$static/*:String*/;/* =*/function VALUE_EMPTY_TEXT$static_(){VALUE_EMPTY_TEXT$static=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_value'));};/*

  //
  // ui components
  //
  private var keywordField:StatefulTextField;
  private var valueField:StatefulTextField;

  // the internal prefix used for keywords. See class comment.
  private var propertyPrefix:String;

  /**
   * Creates a new KeywordCondition.
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
   * @cfg {String} operator the operator to select initially. See below
   * @cfg {String} valueEmptyText the text to be shown in the value field if it is empty. Defaults to <i>value</i>
   * @cfg {String} valueText the text to place into the value field
   * @cfg {String} valueVType the validation type of the value field. See below
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
   *   <li>'lt': 'less'</li>
   *   <li>'le': 'less or equal'</li>
   *   <li>'eq': 'equal'</li>
   *   <li>'ge': 'greater or equal'</li>
   *   <li>'gt': 'greater'</li>
   * </ul>
   *
   * You may override an arbitrary subset of these values.
   *
   * @param config configuration of this instance
   * /
  public*/ function KeywordConditionBase$(config/*:KeywordCondition = null*/) {var this$=this;if(arguments.length<=0)config=null;
    // create operator combo
    var operators/*:**/ = config['operators'];
    var operator/*:**/ = config['operator'];
    var opSelector/*:OperatorSelector*/ = this.initOpSelector(null, config['operatorNames'], config['operatorEmptyText'], operator,
            OPERATORS$static, com.coremedia.personalization.ui.condition.AbstractConditionBase.DEFAULT_OPERATOR_DISPLAY_NAMES);

    this.super$A8wG(config);

    // store the keyword prefix
    this.propertyPrefix$A8wG = config['propertyPrefix'];
    if (this.propertyPrefix$A8wG == null)
      throw new AS3.Error(this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_error_propertyPrefix'));

    if (this.propertyPrefix$A8wG != null && this.propertyPrefix$A8wG.charAt(this.propertyPrefix$A8wG.length - 1) == '.') {
      // remove the '.' at the end of the prefix
      this.propertyPrefix$A8wG = this.propertyPrefix$A8wG.substring(0, this.propertyPrefix$A8wG.length - 1);
    }

    //
    // create the UI
    //
    var keywordFieldCfg/*:StatefulTextField*/ = AS3.cast(com.coremedia.ui.components.StatefulTextField,{});
    keywordFieldCfg.itemId = "keywordField";
    keywordFieldCfg.flex = 30;
    AS3.setBindable(keywordFieldCfg,"emptyText" , AS3.getBindable(config,"keywordEmptyText") != null ? AS3.getBindable(config,"keywordEmptyText") : KEYWORD_EMPTY_TEXT$static);
    keywordFieldCfg.allowBlank = false;
    keywordFieldCfg.vtype = AS3.getBindable(config,"keywordVType") != null ? AS3.getBindable(config,"keywordVType") : 'keywordConditionKeyword';
    keywordFieldCfg.enableKeyEvents = true;
    this.keywordField$A8wG = this.add(keywordFieldCfg);
    this.keywordField$A8wG.addListener('keyup', function()/*:void*/ { this$.fireEvent('modified'); });
    this.keywordField$A8wG.setValue(this.stripPrefix$A8wG(config['keywordText']));

    this.addOpSelector$A8wG(opSelector, operators, operator);

    var valueFieldCfg/*:StatefulNumberField*/ = AS3.cast(com.coremedia.ui.components.StatefulNumberField,{});
    AS3.setBindable(valueFieldCfg,"minValue" , 0);
    AS3.setBindable(valueFieldCfg,"maxValue" , 100);
    valueFieldCfg.itemId = "valueField";
    valueFieldCfg.flex = 20;
    AS3.setBindable(valueFieldCfg,"emptyText" , AS3.getBindable(config,"valueEmptyText") != null ? AS3.getBindable(config,"valueEmptyText") : VALUE_EMPTY_TEXT$static);
    valueFieldCfg.allowBlank = false;
    valueFieldCfg.vtype = AS3.getBindable(config,"valueVType") != null ? AS3.getBindable(config,"valueVType") : 'keywordConditionValue';
    valueFieldCfg.enableKeyEvents = true;
    this.valueField$A8wG = this.add(valueFieldCfg);
    this.valueField$A8wG.addListener('keyup', function()/*:void*/ { this$.fireEvent('modified'); });
    this.valueField$A8wG.setValue(config['valueText']);

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

  private*/ function stripPrefix(s/*:String*/)/*:String*/ {
    if (this.propertyPrefix$A8wG == null || s == null) {
      return s;
    }
    return s.indexOf(this.propertyPrefix$A8wG) == 0 ? s.substring(this.propertyPrefix$A8wG.length + 1) : s;
  }/*

  private*/ function prependPrefix(s/*:String*/)/*:String*/ {
    return this.propertyPrefix$A8wG + '.' + (s ? s : '');
  }/*

  public override*/ function getPropertyName()/*:String*/ {
    return this.prependPrefix$A8wG(this.keywordField$A8wG.getValue());
  }/*

  public override*/ function setPropertyName(name/*:String*/)/*:void*/ {
    this.keywordField$A8wG.setValue(this.stripPrefix$A8wG(name));
  }/*

  public override*/ function getPropertyValue()/*:String*/ {/*
    const*/var v/*:String*/ = this.valueField$A8wG.getValue();
    return v ? v : com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_VALUE;
  }/*

  public override*/ function setPropertyValue(value/*:String*/)/*:void*/ {
    this.valueField$A8wG.setValue(value == com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_VALUE ? null : value);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.AbstractCondition",
      keywordField$A8wG: null,
      valueField$A8wG: null,
      propertyPrefix$A8wG: null,
      constructor: KeywordConditionBase$,
      super$A8wG: function() {
        com.coremedia.personalization.ui.condition.AbstractCondition.prototype.constructor.apply(this, arguments);
      },
      addOpSelector$A8wG: addOpSelector,
      stripPrefix$A8wG: stripPrefix,
      prependPrefix$A8wG: prependPrefix,
      getPropertyName: getPropertyName,
      setPropertyName: setPropertyName,
      getPropertyValue: getPropertyValue,
      setPropertyValue: setPropertyValue,
      statics: {
        OPERATORS: undefined,
        KEYWORD_EMPTY_TEXT: undefined,
        VALUE_EMPTY_TEXT: undefined,
        __initStatics__: function() {
          static$0();
          OPERATORS$static_();
          KEYWORD_EMPTY_TEXT$static_();
          VALUE_EMPTY_TEXT$static_();
        }
      },
      requires: [
        "AS3.Error",
        "Ext.form.field.Display",
        "Ext.form.field.VTypes",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.condition.AbstractCondition",
        "com.coremedia.ui.components.StatefulNumberField",
        "com.coremedia.ui.components.StatefulTextField",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.personalization.ui.condition.AbstractConditionBase",
        "com.coremedia.personalization.ui.util.SelectionRuleHelper"
      ]
    };
});
